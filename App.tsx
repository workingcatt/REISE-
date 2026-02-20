import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Button } from './components/Button';
import { CharacterCard } from './components/CharacterCard';
import { OracleSection } from './components/OracleSection';
import { SplashScreen } from './components/SplashScreen';
import { CharacterModal } from './components/CharacterModal';
import { WorldMap } from './components/WorldMap';
import { WebtoonGallery } from './components/WebtoonGallery';
import { CHARACTER_CLASSES, REGIONS, TEN_CROWNS } from './constants';
import { Sword, Menu, X, Star, User, Crown, Volume2, VolumeX, Skull } from 'lucide-react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hasLanded, setHasLanded] = useState(false);
  const [selectedChar, setSelectedChar] = useState<string | null>(null);
  const [modalChar, setModalChar] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFactionFilter, setActiveFactionFilter] = useState<string>('all');
  
  // Audio State
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Set initial volume
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 0.5;
    }
  }, []);

  // Robust Play/Pause Wrappers
  const playAudio = async () => {
    if (audioRef.current) {
        try {
            await audioRef.current.play();
        } catch (error) {
            // Silently ignore all playback errors (Interrupted, AbortError, NotAllowedError)
            // This prevents console spam when toggling rapidly or when autoplay is blocked
        }
    }
  };

  const pauseAudio = () => {
      if (audioRef.current) {
          audioRef.current.pause();
      }
  };

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
  };

  // Called when entering via Splash Screen
  const handleStartMusic = () => {
    playAudio();
  };

  const handleSplashEnter = () => {
    setShowSplash(false);
    setHasLanded(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const activeModalCharacter = CHARACTER_CLASSES.find(c => c.id === modalChar);

  const filteredCharacters = useMemo(() => {
    if (activeFactionFilter === 'all') return CHARACTER_CLASSES;
    return CHARACTER_CLASSES.filter(c => c.factionId === activeFactionFilter);
  }, [activeFactionFilter]);

  return (
    <div className={`min-h-screen bg-reise-bg text-reise-primary overflow-x-hidden selection:bg-reise-secondary selection:text-white`}>
      
      {/* Background Music - Medieval Fantasy Village Theme */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src="https://cdn.pixabay.com/audio/2021/08/08/audio_88447e769f.mp3"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
        onEnded={() => setIsMusicPlaying(false)}
      />

      {showSplash && <SplashScreen onEnter={handleSplashEnter} onStart={handleStartMusic} />}
      
      {/* Modal Layer */}
      {activeModalCharacter && (
        <CharacterModal 
          character={activeModalCharacter} 
          onClose={() => setModalChar(null)} 
        />
      )}

      {/* Main App Content */}
      <div className={`relative transition-opacity duration-1000 ${hasLanded ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        
        {/* Global Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
           <img 
             src="https://itimg.kr/809/site/background.png?_t=1770712962" 
             alt="Reise World Background" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/50"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#020410]/70 backdrop-blur-md border-b border-white/5 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-xl cinzel font-bold tracking-[0.2em] text-white flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
              <Sword className="w-4 h-4 text-reise-gold group-hover:rotate-45 transition-transform" />
              <span>REISE</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10 cinzel text-xs tracking-[0.2em] font-medium text-gray-400">
              <button onClick={() => scrollToSection('lore')} className="hover:text-reise-dawn transition-colors duration-300">세계관</button>
              <button onClick={() => scrollToSection('classes')} className="hover:text-reise-dawn transition-colors duration-300">영웅</button>
              <button onClick={() => scrollToSection('regions')} className="hover:text-reise-dawn transition-colors duration-300">대륙</button>
              <button onClick={() => scrollToSection('crowns')} className="hover:text-reise-dawn transition-colors duration-300">왕관</button>
              <button onClick={() => scrollToSection('webtoon')} className="hover:text-reise-dawn transition-colors duration-300">스토리</button>
              <button onClick={() => scrollToSection('oracle')} className="text-reise-gold hover:text-white transition-colors duration-300 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]">신탁</button>
              
              {/* Music Toggle */}
              <button 
                onClick={toggleMusic} 
                className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer relative z-50 ${isMusicPlaying ? 'border-reise-gold/50 text-reise-gold bg-reise-gold/10' : 'border-gray-700 text-gray-500 hover:text-gray-300'}`}
              >
                {isMusicPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="hidden lg:inline">{isMusicPlaying ? 'ON' : 'OFF'}</span>
              </button>
            </div>

            {/* Mobile Nav Toggle & Music */}
            <div className="flex items-center gap-4 md:hidden">
                <button 
                    onClick={toggleMusic} 
                    className="text-gray-400 p-2 cursor-pointer relative z-50 active:scale-95 transition-transform"
                >
                    {isMusicPlaying ? <Volume2 className="w-5 h-5 text-reise-gold" /> : <VolumeX className="w-5 h-5" />}
                </button>
                <button className="text-white relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
          </div>
          
          {isMenuOpen && (
             <div className="md:hidden bg-[#020410] border-b border-white/10 p-4 space-y-4 text-center font-serif text-sm">
               <button onClick={() => scrollToSection('lore')} className="block w-full py-2 hover:text-reise-dawn">세계관</button>
               <button onClick={() => scrollToSection('classes')} className="block w-full py-2 hover:text-reise-dawn">영웅</button>
               <button onClick={() => scrollToSection('regions')} className="block w-full py-2 hover:text-reise-dawn">대륙</button>
               <button onClick={() => scrollToSection('crowns')} className="block w-full py-2 hover:text-reise-dawn">왕관</button>
               <button onClick={() => scrollToSection('oracle')} className="block w-full py-2 text-reise-gold">신탁</button>
             </div>
          )}
        </nav>

        {/* Content Wrapper */}
        <div className="relative z-10">
          
          {/* Hero Section */}
          <header id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
              
              <h1 className="text-6xl md:text-9xl cinzel font-medium text-white tracking-tight animate-fade-in drop-shadow-[0_0_30px_rgba(167,139,250,0.5)]">
                REISE
              </h1>
              
              <div className="flex items-center justify-center gap-4 animate-fade-in-up delay-100">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-reise-dawn"></div>
                <p className="text-lg md:text-xl text-indigo-100 font-serif italic tracking-wide text-shadow">
                  "은하수가 흐르고 여명이 머무는 곳, 당신의 여정이 시작됩니다."
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-reise-dawn"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12 animate-fade-in-up delay-200">
                <Button onClick={() => scrollToSection('classes')}>
                  모험 시작하기
                </Button>
                <Button variant="secondary" onClick={() => scrollToSection('webtoon')}>
                  프롤로그 보기
                </Button>
              </div>
            </div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
              <div className="w-[1px] h-16 bg-gradient-to-b from-reise-dawn to-transparent"></div>
            </div>
          </header>

          {/* Lore Section */}
          <section id="lore" className="py-32 relative">
             <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                   <h2 className="text-4xl font-serif font-bold text-white mb-4 drop-shadow-lg">운명을 자아내는 세계</h2>
                   <p className="text-indigo-200 font-serif">12개의 세력, 그리고 초월적 존재들의 이야기</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                   <div className="bg-[#0f172a]/40 p-8 border border-indigo-500/20 rounded-sm backdrop-blur-md hover:bg-[#1e1b4b]/40 transition-colors shadow-lg hover:shadow-indigo-500/10 group">
                      <div className="text-reise-gold mb-4 group-hover:scale-110 transition-transform"><Sword className="w-8 h-8" /></div>
                      <h3 className="text-xl font-serif font-bold text-white mb-3">여신과 에고소드</h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-serif">
                         세상을 관장하는 초월적 존재인 여신들은 직접 개입할 수 없습니다. 대신 그녀들은 자아를 가진 검, <strong>에고소드</strong>가 되어 선택받은 영웅들의 손에서 세상을 이끕니다.
                      </p>
                   </div>

                   <div className="bg-[#0f172a]/40 p-8 border border-indigo-500/20 rounded-sm backdrop-blur-md hover:bg-[#1e1b4b]/40 transition-colors shadow-lg hover:shadow-indigo-500/10 group">
                      <div className="text-reise-dawn mb-4 group-hover:scale-110 transition-transform"><Crown className="w-8 h-8" /></div>
                      <h3 className="text-xl font-serif font-bold text-white mb-3">수호룡의 비호</h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-serif">
                         각 지역에는 전략 병기 수준의 압도적인 힘을 가진 <strong>수호룡</strong>이 존재합니다. 인간의 모습으로 폴리모프하여 각자의 방식대로 영토를 수호합니다.
                      </p>
                   </div>

                   <div className="bg-[#0f172a]/40 p-8 border border-indigo-500/20 rounded-sm backdrop-blur-md hover:bg-[#1e1b4b]/40 transition-colors shadow-lg hover:shadow-indigo-500/10 group">
                      <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform"><User className="w-8 h-8" /></div>
                      <h3 className="text-xl font-serif font-bold text-white mb-3">흐르는 시간</h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-serif">
                         이곳의 시간은 종족마다 다르게 흐릅니다. 마족과 엘프에게 100년은 고작 10년의 세월이며, 용족에게 500년은 어린아이의 시간일 뿐입니다.
                      </p>
                   </div>
                </div>
             </div>
          </section>

          {/* Map Section */}
          <div id="regions">
            <WorldMap />
          </div>

          {/* Character Introduction Section */}
          <section id="classes" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <Star className="w-6 h-6 text-reise-gold mx-auto animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">영웅 도감</h2>
                <p className="text-indigo-200 font-serif">각 세력을 대표하는 영웅들의 이야기</p>
              </div>

              {/* Faction Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-16">
                <button
                  onClick={() => setActiveFactionFilter('all')}
                  className={`px-4 py-2 text-sm font-serif border transition-all duration-300 rounded-full
                    ${activeFactionFilter === 'all' 
                      ? 'bg-reise-gold text-black border-reise-gold shadow-[0_0_15px_rgba(251,191,36,0.3)]' 
                      : 'bg-[#1e1b4b]/30 text-indigo-300 border-indigo-500/30 hover:border-reise-gold hover:text-white'
                    }`}
                >
                  전체 보기
                </button>
                {REGIONS.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setActiveFactionFilter(region.id)}
                    className={`px-4 py-2 text-sm font-serif border transition-all duration-300 rounded-full
                      ${activeFactionFilter === region.id 
                        ? 'bg-reise-gold text-black border-reise-gold shadow-[0_0_15px_rgba(251,191,36,0.3)]' 
                        : 'bg-[#1e1b4b]/30 text-indigo-300 border-indigo-500/30 hover:border-reise-gold hover:text-white'
                      }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>

              {/* Character Grid */}
              {filteredCharacters.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                  {filteredCharacters.map((char) => (
                    <CharacterCard 
                      key={char.id}
                      character={char}
                      isSelected={selectedChar === char.id}
                      onClick={() => {
                        setSelectedChar(char.id);
                        setModalChar(char.id);
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 border border-indigo-500/20 bg-[#1e1b4b]/20 rounded-sm">
                  <p className="text-gray-400 font-serif italic mb-2">이 세력의 이야기는 아직 기록되지 않았습니다.</p>
                  <p className="text-gray-500 text-sm">업데이트를 기다려주세요.</p>
                </div>
              )}
            </div>
          </section>

          {/* 10 Crowns Section */}
          <section id="crowns" className="py-32 px-6 bg-[#020410] relative">
            {/* Dark Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020410] via-red-950/10 to-[#020410] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16 space-y-4">
                <Skull className="w-8 h-8 text-red-500/80 mx-auto animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-[0_2px_15px_rgba(220,38,38,0.5)]">
                  10개의 왕관들
                </h2>
                <p className="text-gray-400 font-serif max-w-2xl mx-auto">
                  세계 각지에 존재하는 강력한 마수들. 이들은 일반적인 마수와는 차원이 다른 힘을 지니고 있으며, 각자의 영토에서 절대적인 공포로 군림합니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TEN_CROWNS.map((crown) => (
                  <div key={crown.id} className="group relative h-auto md:h-[400px] overflow-hidden rounded-sm border border-red-900/20 hover:border-red-500/50 transition-all duration-500 bg-[#0a0a0c] flex flex-col md:block">
                    
                    {/* Background Image - Mobile Fix: aspect ratio + object-top */}
                    <div className="relative md:absolute inset-0 aspect-[4/3] md:aspect-auto w-full">
                      <img 
                        src={crown.image} 
                        alt={crown.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 opacity-80 md:opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:via-black/40 md:opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="relative md:absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform transition-transform duration-500 md:group-hover:-translate-y-2 bg-[#0a0a0c] md:bg-transparent -mt-10 md:mt-0 pt-12 md:pt-0">
                      {/* Gradient overlay for mobile text readability overlap */}
                      <div className="absolute top-[-3rem] left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0c] to-transparent md:hidden"></div>

                      <div className="mb-auto">
                        <span className="inline-block px-2 py-1 border border-red-500/30 bg-red-950/30 text-red-400 text-[10px] tracking-widest font-bold uppercase mb-2">
                           {crown.title}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-red-100 transition-colors">
                        {crown.name}
                      </h3>
                      
                      {/* Description - always visible on mobile, reveal on desktop */}
                      <div className="space-y-3 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-100 transform md:translate-y-4 md:group-hover:translate-y-0">
                         <div className="w-8 h-0.5 bg-red-600 mb-3 hidden md:block"></div>
                         <p className="text-xs text-red-200 font-serif font-bold flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-red-500 rotate-45"></span>
                           서식지: {crown.location}
                         </p>
                         <p className="text-xs text-gray-300 font-serif leading-relaxed line-clamp-3 md:line-clamp-none">
                           {crown.description}
                         </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Webtoon Section */}
          <div id="webtoon">
            <WebtoonGallery />
          </div>

          {/* Oracle Section */}
          <div id="oracle">
            <OracleSection />
          </div>

          {/* Footer */}
          <footer className="bg-[#020410] py-20 border-t border-indigo-900/30 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 text-center space-y-12 relative z-10">
              <h2 className="text-3xl cinzel font-bold text-indigo-800/50 tracking-[0.5em]">REISE</h2>
              <div className="flex justify-center gap-12 cinzel text-[10px] tracking-widest text-indigo-400/70">
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-white transition-colors">문의하기</a>
              </div>
              <p className="text-indigo-900 text-xs font-serif">
                &copy; 2024 Project Reise.
              </p>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default App;