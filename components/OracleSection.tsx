import React, { useState, useRef, useEffect } from 'react';
import { consultGoddess } from '../services/geminiService';
import { GODDESSES } from '../constants';
import { OracleResponse } from '../types';
import { Sparkles, Send, XCircle, Stars, RefreshCw, MessageCircle } from 'lucide-react';

interface ChatHistoryItem {
  role: 'goddess' | 'user';
  text: string;
}

const LOADING_MESSAGES = [
  "별들의 기억을 읽는 중...",
  "영혼의 파장을 해석하는 중...",
  "운명의 실타래를 엮는 중...",
  "심연의 목소리에 귀 기울이는 중...",
  "당신의 대답을 별자리에 기록하는 중..."
];

export const OracleSection: React.FC = () => {
  const [selectedGoddessId, setSelectedGoddessId] = useState<string | null>(null);
  const [step, setStep] = useState<'intro' | 'answering' | 'result'>('intro');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<ChatHistoryItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [currentTurn, setCurrentTurn] = useState(1);
  const [currentEmotion, setCurrentEmotion] = useState(1);
  const [finalResult, setFinalResult] = useState<OracleResponse | null>(null);
  
  // Dynamic Loading Message State
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectedGoddess = GODDESSES.find(g => g.id === selectedGoddessId);

  // Auto-focus input when entering answering step
  useEffect(() => {
    if (step === 'answering' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [step, currentTurn]);

  // Loading Message Rotation Effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (loading) {
      setLoadingMsgIndex(0); // Reset to first message
      interval = setInterval(() => {
        setLoadingMsgIndex(prev => (prev + 1) % LOADING_MESSAGES.length);
      }, 1500); // Change message every 1.5s
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Reset and Initialize when goddess is selected (Switching Goddesses resets everything)
  useEffect(() => {
    if (selectedGoddess) {
       setStep('intro');
       setHistory([]);
       setCurrentTurn(1);
       setUserInput('');
       setLoading(false);
       
       // Pick a random initial question from the array
       const randomIndex = Math.floor(Math.random() * selectedGoddess.initialQuestions.length);
       setCurrentQuestion(selectedGoddess.initialQuestions[randomIndex]); 
       
       setCurrentEmotion(1);
       setFinalResult(null);
       
       const el = document.getElementById('oracle-interface');
       if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedGoddessId]);

  const handleStartAnswering = () => {
    setStep('answering');
  };

  const handleSubmitAnswer = async () => {
    if (!userInput.trim() || !selectedGoddessId) return;
    
    const answerText = userInput;
    setUserInput(''); // Clear input immediately
    setLoading(true);

    // Update history with User's answer
    const newHistory: ChatHistoryItem[] = [
      ...history,
      { role: 'goddess', text: currentQuestion },
      { role: 'user', text: answerText }
    ];
    setHistory(newHistory);
    
    try {
      // API Call
      const result = await consultGoddess(selectedGoddessId, newHistory, currentTurn);
      
      if (result.type === 'question' && result.nextQuestion) {
        // Prepare for next turn
        setCurrentQuestion(result.nextQuestion);
        setCurrentEmotion(result.emotion);
        setCurrentTurn(prev => prev + 1);
      } else if (result.type === 'result') {
        // Show Final Result
        setFinalResult(result);
        setCurrentEmotion(result.emotion);
        setStep('result');
      } else {
        // Fallback: If type is 'question' but missing text, or unknown type.
        // We force a result to prevent getting stuck.
        console.warn("Invalid oracle response, forcing result.");
        setFinalResult({
           type: 'result',
           fateTitle: "흐려진 운명",
           fateDescription: "여신의 목소리가 잠시 닿지 않았습니다. 하지만 당신의 의지는 분명히 전달되었습니다.",
           affinity: "미지의 영역",
           soulColor: "무색",
           potential: "알 수 없음",
           emotion: 5
        });
        setStep('result');
      }
    } catch (e) {
      console.error(e);
      // Ensure we don't get stuck in loading
      setFinalResult({
           type: 'result',
           fateTitle: "단절된 운명",
           fateDescription: "알 수 없는 힘에 의해 신탁이 중단되었습니다.",
           affinity: "공허",
           soulColor: "암흑",
           potential: "없음",
           emotion: 5
      });
      setStep('result');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    // This fully resets the component state to the "Selection" mode
    setSelectedGoddessId(null);
    setFinalResult(null);
    setUserInput('');
    setStep('intro');
    setHistory([]);
  };

  // Image URL Generators
  const getCharUrl = (code: string, emotion: number) => `https://itimg.kr/809/REISE/${code}/${emotion}.png`;

  return (
    <section className="relative py-12 md:py-24 px-4 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-gradient-to-b from-indigo-950/40 via-[#2e1065]/20 to-transparent blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl w-full text-center space-y-6 md:space-y-10">
        
        {/* Header (Only visible when no goddess selected) */}
        {!selectedGoddess && (
          <div className="space-y-4 md:space-y-6 animate-fade-in-up">
            <div className="inline-block p-3 md:p-4 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]">
               <Stars className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-tight">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-500">운명의 판결</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-xl max-w-2xl mx-auto font-serif leading-relaxed px-4">
              여신이 당신의 영혼을 꿰뚫어 볼 3가지 질문을 던집니다.<br className="hidden md:block"/>
              그 대답에 따라 당신의 운명과 적성이 결정될 것입니다.
            </p>
          </div>
        )}

        {/* Selection Stage */}
        {!selectedGoddess && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-16 px-2 md:px-4 animate-fade-in-up delay-100 pb-10">
            {GODDESSES.map((goddess) => {
              const isRisare = goddess.id === 'risare';
              const objectPosClass = isRisare ? 'object-[80%_15%]' : 'object-top';

              return (
                <div 
                  key={goddess.id}
                  onClick={() => setSelectedGoddessId(goddess.id)}
                  className={`group relative cursor-pointer h-[380px] md:h-[550px] border border-white/10 hover:border-white/40 transition-all duration-500 rounded-sm overflow-hidden bg-[#0a0a0c] hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(0,0,0,0.6)] ${goddess.shadowColor}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${goddess.themeColor} opacity-10 group-hover:opacity-25 transition-opacity duration-700`}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                     <img 
                       src={getCharUrl(goddess.imageCode, 1)} 
                       alt={goddess.name} 
                       className={`h-[115%] w-full object-cover ${objectPosClass} transform -translate-y-6 opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0`}
                       onError={(e) => { e.currentTarget.style.display = 'none'; }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-90"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 block ${goddess.textColor}`}>{goddess.role}</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 md:mb-3">{goddess.name}</h3>
                    <div className="h-px w-12 bg-white/50 mb-3 md:mb-4 group-hover:w-full transition-all duration-700"></div>
                    <p className="text-xs md:text-sm text-gray-400 font-serif leading-relaxed line-clamp-2 group-hover:text-white transition-colors">
                      {goddess.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Cinematic Interface Stage */}
        {selectedGoddess && (
          <div id="oracle-interface" className="w-full max-w-6xl mx-auto h-[80vh] min-h-[600px] flex flex-col animate-fade-in-up relative bg-black rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
            
            {/* 1. Scene Layer (Background + Character) */}
            <div className="relative flex-1 w-full h-full overflow-hidden bg-[#0a0a0c]">
               <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>

               {/* Character Sprite */}
               <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none transition-all duration-500">
                  <img 
                    src={getCharUrl(selectedGoddess.imageCode, currentEmotion)} 
                    alt={selectedGoddess.name} 
                    className={`
                      object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-fade-in-up transition-all duration-500
                      ${selectedGoddess.id === 'risare' 
                        ? 'h-[85%] md:h-[105%] translate-y-2 md:translate-y-12' 
                        : 'h-[80%] md:h-[95%] translate-y-0 md:translate-y-8'
                      }
                    `}
                  />
               </div>
            </div>

            {/* Top Close Button */}
            <button 
                onClick={handleReset} 
                className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all"
            >
                <XCircle className="w-8 h-8" />
            </button>


            {/* 2. Cinematic UI Layer (Bottom Overlay) */}
            <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col justify-end pt-32 pb-8 md:pb-12 px-4 md:px-20 bg-gradient-to-t from-black via-black/90 to-transparent">
              
              {/* Name Label & Progress */}
              <div className="flex items-end gap-4 mb-2">
                 <div className={`px-4 py-1 border-l-4 ${selectedGoddess.borderColor} bg-black/60 backdrop-blur-sm`}>
                    <span className={`text-xl md:text-2xl font-serif font-bold tracking-widest ${selectedGoddess.textColor} drop-shadow-md`}>
                        {selectedGoddess.name}
                    </span>
                 </div>
                 {step === 'answering' && (
                    <div className="text-gray-400 font-serif text-sm pb-1 tracking-widest animate-pulse">
                        질문 {currentTurn} / 3
                    </div>
                 )}
              </div>

              {/* Main Dialogue Box */}
              <div className="w-full border-t border-white/10 bg-black/40 backdrop-blur-sm p-4 md:p-8 min-h-[150px] md:min-h-[180px] flex flex-col justify-center relative">
                
                {loading ? (
                    <div className="flex items-center gap-3 text-reise-gold animate-pulse">
                        <Sparkles className="w-5 h-5 animate-spin" />
                        <span className="font-serif text-lg transition-all duration-500 min-w-[200px]">
                           {/* Dynamic Loading Message */}
                           {currentTurn > 2 ? LOADING_MESSAGES[loadingMsgIndex] : "당신의 답을 듣고 있습니다..."}
                        </span>
                    </div>
                ) : (
                    <>
                        {step === 'intro' && (
                            <div className="animate-fade-in">
                                <p className="text-xl md:text-2xl text-white font-serif leading-relaxed drop-shadow-lg mb-6">
                                    "{currentQuestion}"
                                </p>
                                <button 
                                    onClick={handleStartAnswering}
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white font-serif text-sm md:text-base transition-all flex items-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" /> 심판 시작하기
                                </button>
                            </div>
                        )}

                        {step === 'answering' && (
                            <div className="w-full animate-fade-in">
                                <p className="text-lg md:text-2xl text-white font-serif leading-relaxed drop-shadow-lg mb-6">
                                    "{currentQuestion}"
                                </p>
                                <div className="flex gap-2">
                                    <input 
                                        ref={inputRef}
                                        type="text"
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                                        placeholder="답변을 입력하세요..."
                                        className="flex-1 bg-transparent border-b border-white/30 py-2 text-xl text-white font-serif focus:outline-none focus:border-reise-gold placeholder:text-gray-600 transition-colors"
                                        autoComplete="off"
                                    />
                                    <button 
                                        onClick={handleSubmitAnswer}
                                        disabled={!userInput.trim()}
                                        className="p-3 text-reise-gold hover:text-white disabled:opacity-30 transition-colors"
                                    >
                                        <Send className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'result' && finalResult && (
                            <div className="animate-fade-in w-full">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <span className="text-xs text-gray-400 uppercase tracking-[0.2em]">운명의 판결</span>
                                            <h3 className="text-3xl md:text-4xl text-reise-gold font-serif font-bold mt-1 text-glow">
                                                {finalResult.fateTitle}
                                            </h3>
                                        </div>
                                        <p className="text-gray-200 font-serif leading-relaxed text-sm md:text-base border-l-2 border-white/20 pl-4">
                                            {finalResult.fateDescription}
                                        </p>
                                    </div>
                                    
                                    <div className="w-full md:w-1/3 bg-white/5 border border-white/10 p-4 rounded-sm space-y-3">
                                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                            <span className="text-gray-500 text-xs">적성 세력</span>
                                            <span className="text-indigo-300 font-bold font-serif">{finalResult.affinity}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                            <span className="text-gray-500 text-xs">영혼의 색</span>
                                            <span className="text-rose-300 font-bold font-serif">{finalResult.soulColor}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                            <span className="text-gray-500 text-xs">잠재력</span>
                                            <span className="text-emerald-300 font-bold font-serif">{finalResult.potential}</span>
                                        </div>
                                        <button 
                                            onClick={handleReset}
                                            className="w-full mt-2 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1"
                                        >
                                            <RefreshCw className="w-3 h-3" /> 다시 판결받기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};