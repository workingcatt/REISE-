import { GoogleGenAI } from "@google/genai";
import { OracleResponse } from '../types';
import { GODDESSES } from '../constants';

interface ChatHistoryItem {
  role: 'goddess' | 'user';
  text: string;
}

export const consultGoddess = async (
  goddessId: string, 
  history: ChatHistoryItem[], 
  currentTurn: number
): Promise<OracleResponse> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  const goddess = GODDESSES.find(g => g.id === goddessId);

  if (!goddess) throw new Error("Goddess not found");

  // Logic: 
  // Turn 1 (Intro Answered) -> Requesting Q2 -> isFinalTurn = False
  // Turn 2 (Q2 Answered)    -> Requesting Q3 -> isFinalTurn = False
  // Turn 3 (Q3 Answered)    -> Requesting Result -> isFinalTurn = True
  const isFinalTurn = currentTurn >= 3;

  // Construct context from history
  const conversationContext = history.map(h => `${h.role === 'goddess' ? goddess.name : 'User'}: ${h.text}`).join('\n');

  let personaPrompt = "";
  if (goddessId === 'risare') {
    personaPrompt = `[CHARACTER: RISARE]\nRole: Demon Goddess\nTone: Arrogant, cold, commanding (하대).`;
  } else if (goddessId === 'lumiel') {
    personaPrompt = `[CHARACTER: LUMIEL]\nRole: Angel Goddess\nTone: Cheerful, playful, polite (해요체).`;
  } else if (goddessId === 'refi') {
    personaPrompt = `[CHARACTER: REFI]\nRole: Glitch Entity\nTone: Analytic, weird, sci-fi terms.`;
  }

  // Simplified Prompt without Schema Dependency
  const systemInstruction = `
    ${personaPrompt}
    
    [STATUS]
    Current Turn: ${currentTurn} / 3
    Target Output: ${isFinalTurn ? "FINAL RESULT" : "NEXT QUESTION"}

    [TASK]
    Analyze the conversation context and generate the response in pure JSON format.
    Do not include any markdown formatting like \`\`\`json. Just the raw JSON object.

    [CONTEXT]
    ${conversationContext}

    [OUTPUT RULES]
    ${!isFinalTurn ? `
      - You MUST generate the NEXT QUESTION (Question ${currentTurn + 1}).
      - Format:
      {
        "type": "question",
        "nextQuestion": "Your question string here",
        "emotion": 1 (integer 1-7)
      }
    ` : `
      - You MUST generate the FINAL VERDICT.
      - Format:
      {
        "type": "result",
        "fateTitle": "Short Title",
        "fateDescription": "1-2 sentence description",
        "affinity": "Faction Name",
        "soulColor": "Color Name",
        "potential": "Hidden Talent",
        "emotion": 1 (integer 1-7)
      }
    `}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Analyze and respond.",
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: 'application/json', // Enforce JSON output type
        maxOutputTokens: 1000, // Increased to prevent cutoff
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    
    // Parse JSON manually
    let parsed: OracleResponse;
    try {
        parsed = JSON.parse(text) as OracleResponse;
    } catch (e) {
        // Fallback: Try to find JSON inside markdown blocks if model ignored instructions
        const match = text.match(/\{[\s\S]*\}/);
        if (match) {
            parsed = JSON.parse(match[0]);
        } else {
            throw new Error("Invalid JSON format");
        }
    }

    // --- ROBUSTNESS FIX ---
    // Force the correct type based on the turn count logic
    if (!isFinalTurn) {
        parsed.type = 'question';
        if (!parsed.nextQuestion) {
             parsed.nextQuestion = "당신의 영혼이 흐릿하게 보입니다... 조금 더 자세히 이야기해주시겠습니까?";
        }
    } else {
        parsed.type = 'result';
        if (!parsed.fateTitle) parsed.fateTitle = "알 수 없는 운명";
        if (!parsed.fateDescription) parsed.fateDescription = "별들의 궤적이 너무 복잡하여 읽을 수 없습니다.";
        if (!parsed.affinity) parsed.affinity = "방랑자";
    }
    // ----------------------

    return parsed;

  } catch (error) {
    console.error("Goddess Error:", error);
    
    // Return a safe fallback based on the turn
    if (!isFinalTurn) {
        return {
            type: 'question',
            emotion: 1,
            nextQuestion: "잠시 당신의 기운을 읽는데 집중했습니다. 다음 질문을 드릴게요."
        };
    }

    return {
      type: 'result',
      fateTitle: "흐려진 운명",
      fateDescription: "신탁의 연결이 희미해져 당신의 운명을 읽을 수 없습니다... 잠시 후 다시 시도해 주세요.",
      affinity: "알 수 없음",
      emotion: 5
    };
  }
};