import React, { useState, useEffect } from 'react';
import { GODDESSES, REGIONS } from '../constants';
import { OracleResponse, QuizOption } from '../types';
import { Sparkles, XCircle, Stars, RefreshCw, MessageCircle } from 'lucide-react';

const LOADING_MESSAGES = [
  "별들의 기억을 읽는 중...",
  "영혼의 파장을 해석하는 중...",
  "운명의 실타래를 엮는 중...",
  "심연의 목소리에 귀 기울이는 중...",
  "당신의 대답을 별자리에 기록하는 중..."
];

export const OracleSection: React.FC = () => {
  const [selectedGoddessId, setSelectedGoddessId] = useState<string | null>(null);
  const [step, setStep] = useState<'intro' | 'answering' | 'calculating' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<QuizOption[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);
  
  const [finalResult, setFinalResult] = useState<OracleResponse | null>(null);
  
  const selectedGoddess = GODDESSES.find(g => g.id === selectedGoddessId);

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

  // Reset and Initialize when goddess is selected
  useEffect(() => {
    if (selectedGoddess) {
       setStep('intro');
       setCurrentQuestionIndex(0);
       setUserAnswers([]);
       setLoading(false);
       setFinalResult(null);
       
       const el = document.getElementById('oracle-interface');
       if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedGoddessId]);

  const handleStartQuiz = () => {
    setStep('answering');
  };

  const handleOptionSelect = (option: QuizOption) => {
    // Add answer
    const newAnswers = [...userAnswers, option];
    setUserAnswers(newAnswers);

    if (selectedGoddess && currentQuestionIndex < selectedGoddess.quiz.length - 1) {
        // Move to next question with a small delay for better UX
        setTimeout(() => {
            setCurrentQuestionIndex(prev => prev + 1);
        }, 200);
    } else {
        // Finished last question, calculate result
        setStep('calculating');
        setLoading(true);
        setTimeout(() => {
            calculateResult(newAnswers);
            setLoading(false);
            setStep('result');
        }, 2500); // Fake processing time for effect
    }
  };

  const calculateResult = (answers: QuizOption[]) => {
      if (!selectedGoddess) return;

      // Logic: Find most frequent affinity
      const tally: Record<string, number> = {};
      answers.forEach(a => {
          tally[a.affinityPoints] = (tally[a.affinityPoints] || 0) + 1;
      });

      // Sort factions by count
      const sortedFactions = Object.entries(tally).sort((a, b) => b[1] - a[1]);
      const topFactionId = sortedFactions[0][0];
      const matchedRegion = REGIONS.find(r => r.id === topFactionId);

      // Creative flavor text generation based on traits
      const traits = answers.map(a => a.trait).join(", ");
      
      let title = "알 수 없는 운명";
      let desc = "당신의 운명은 흐릿합니다.";
      let color = "무색";
      let potential = "잠재력";

      // Simple mapping logic for flavor (can be expanded)
      if (topFactionId === 'demon' || topFactionId === 'drameth') {
          title = "심연을 걷는 패왕";
          desc = "당신은 힘과 지배를 통해 세상을 바꾸려 합니다. 고독하지만 강력한 길입니다.";
          color = "검붉은색";
          potential = "압도적인 무력";
      } else if (topFactionId === 'elysium' || topFactionId === 'elianos') {
          title = "빛을 품은 성자";
          desc = "당신은 타인을 위하고 평화를 사랑하는 고결한 영혼을 가졌습니다.";
          color = "순백색";
          potential = "치유와 정화";
      } else if (topFactionId === 'libertas' || topFactionId === 'ernia') {
          title = "자유로운 바람의 방랑자";
          desc = "어디에도 얽매이지 않는 자유로운 영혼입니다. 모험이 당신을 부르고 있습니다.";
          color = "에메랄드빛";
          potential = "무한한 적응력";
      } else if (topFactionId === 'aclay' || topFactionId === 'dwarf') {
          title = "진리를 탐구하는 현자";
          desc = "감정보다는 이성과 논리를 중시하며, 세상의 이치를 깨닫고자 합니다.";
          color = "푸른색";
          potential = "지식과 마법";
      } else if (topFactionId === 'atlantis' || topFactionId === 'inn') {
          title = "경계를 넘는 이단아";
          desc = "남들과는 다른 시선으로 세상을 봅니다. 혼돈 속에서 새로운 질서를 찾습니다.";
          color = "보랏빛";
          potential = "창조적 파괴";
      } else if (topFactionId === 'belsarion') {
          title = "철의 규율을 지키는 기사";
          desc = "명예와 질서를 중시하며, 흔들리지 않는 신념을 가지고 있습니다.";
          color = "황금색";
          potential = "통솔력";
      }

      setFinalResult({
          type: 'result',
          fateTitle: title,
          fateDescription: desc,
          affinity: matchedRegion ? matchedRegion.name : "방랑자",
          soulColor: color,
          potential: potential,
          emotion: 5
      });
  };

  const handleReset = () => {
    setSelectedGoddessId(null);
    setFinalResult(null);
    setUserAnswers([]);
    setStep('intro');
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
            
            {/* 1. Scene Layer (Full Background Character) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0a0a0c]">
               {/* Background Gradient */}
               <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-50"></div>

               {/* Full Size Character Portrait */}
               <img 
                 src={getCharUrl(selectedGoddess.imageCode, step === 'result' ? 5 : 1)} 
                 alt={selectedGoddess.name} 
                 className={`
                   absolute inset-0 w-full h-full object-cover transition-all duration-700 z-10
                   ${selectedGoddess.id === 'risare' ? 'object-[65%_0%]' : 'object-top'}
                 `}
               />
               
               {/* Overlay to ensure text readability at bottom */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
               {/* Top darkening for Close button visibility */}
               <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-20"></div>
            </div>

            {/* Top Close Button - Repositioned comfortably */}
            <button 
                onClick={handleReset} 
                className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all border border-white/10 backdrop-blur-md"
            >
                <XCircle className="w-8 h-8" />
            </button>


            {/* 2. Cinematic UI Layer (Bottom Overlay) */}
            <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col justify-end pt-32 pb-8 md:pb-12 px-4 md:px-20">
              
              {/* Name Label & Progress */}
              <div className="flex items-end gap-4 mb-2">
                 <div className={`px-4 py-1 border-l-4 ${selectedGoddess.borderColor} bg-black/60 backdrop-blur-sm`}>
                    <span className={`text-xl md:text-2xl font-serif font-bold tracking-widest ${selectedGoddess.textColor} drop-shadow-md`}>
                        {selectedGoddess.name}
                    </span>
                 </div>
                 {step === 'answering' && (
                    <div className="text-gray-400 font-serif text-sm pb-1 tracking-widest animate-pulse">
                        질문 {currentQuestionIndex + 1} / {selectedGoddess.quiz.length}
                    </div>
                 )}
              </div>

              {/* Main Dialogue Box */}
              <div className="w-full border-t border-white/10 bg-black/40 backdrop-blur-md p-4 md:p-8 min-h-[150px] md:min-h-[220px] flex flex-col justify-center relative shadow-lg">
                
                {loading ? (
                    <div className="flex items-center gap-3 text-reise-gold animate-pulse">
                        <Sparkles className="w-5 h-5 animate-spin" />
                        <span className="font-serif text-lg transition-all duration-500 min-w-[200px]">
                           {/* Dynamic Loading Message */}
                           {LOADING_MESSAGES[loadingMsgIndex]}
                        </span>
                    </div>
                ) : (
                    <>
                        {step === 'intro' && (
                            <div className="animate-fade-in space-y-6">
                                <p className="text-xl md:text-2xl text-white font-serif leading-relaxed drop-shadow-lg">
                                    "내게 운명을 묻고자 왔느냐? 좋아, 너의 영혼을 시험해보도록 하지."
                                </p>
                                <button 
                                    onClick={handleStartQuiz}
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white rounded-sm text-white font-serif text-sm md:text-base transition-all flex items-center gap-2 group"
                                >
                                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" /> 심판 시작하기
                                </button>
                            </div>
                        )}

                        {step === 'answering' && (
                            <div className="w-full animate-fade-in">
                                <p className="text-lg md:text-2xl text-white font-serif leading-relaxed drop-shadow-lg mb-6">
                                    "{selectedGoddess.quiz[currentQuestionIndex].text}"
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {selectedGoddess.quiz[currentQuestionIndex].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionSelect(option)}
                                            className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-reise-gold/60 text-left text-sm md:text-base text-gray-200 hover:text-white transition-all duration-300 font-serif rounded-sm active:scale-95"
                                        >
                                            <span className="text-reise-gold mr-2 font-bold">{String.fromCharCode(65 + idx)}.</span>
                                            {option.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 'result' && finalResult && (
                            <div className="animate-fade-in w-full">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <span className="text-xs text-gray-400 uppercase tracking-[0.2em]">운명의 판결</span>
                                            <h3 className="text-3xl md:text-4xl text-reise-gold font-serif font-bold mt-1 text-glow animate-pulse">
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