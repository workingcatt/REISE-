import React, { useState, useEffect, useRef } from 'react';

interface Props {
  onEnter: () => void;
  onStart?: () => void; // New prop for immediate interaction handling
}

interface ShootingStar {
  id: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
  scale: number;
  angle: number;
}

export const SplashScreen: React.FC<Props> = ({ onEnter, onStart }) => {
  const [isEntering, setIsEntering] = useState(false);
  const [stars, setStars] = useState<Array<{id: number, top: string, left: string, delay: string, opacity: number}>>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  
  // Ref to track component mount state for async operations
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    // 1. Generate Static Twinkling Stars
    const newStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80}%`, // Mostly top sky
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      opacity: Math.random() * 0.7 + 0.3
    }));
    setStars(newStars);

    // 2. Sequential Shooting Star Spawner
    let spawnTimeout: ReturnType<typeof setTimeout>;

    const spawnStar = () => {
      if (!isMounted.current) return;

      const id = Date.now();
      // Slow duration: 4s to 7s
      const durationVal = Math.random() * 3 + 4; 
      
      const newStar: ShootingStar = {
        id,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50 - 20}%`, 
        delay: '0s',
        duration: `${durationVal}s`,
        scale: Math.random() * 0.4 + 0.6,
        angle: -45
      };

      setShootingStars(prev => [...prev, newStar]);

      setTimeout(() => {
        if (isMounted.current) {
          setShootingStars(prev => prev.filter(s => s.id !== id));
        }
      }, durationVal * 1000);

      const nextDelay = (durationVal * 1000) - 1000; 
      spawnTimeout = setTimeout(spawnStar, nextDelay);
    };

    spawnStar();

    return () => {
      isMounted.current = false;
      if (spawnTimeout) clearTimeout(spawnTimeout);
    };
  }, []);

  const handleEnter = () => {
    // CRITICAL: Trigger audio/interaction immediately to satisfy browser autoplay policies
    if (onStart) onStart();
    
    setIsEntering(true);
    setTimeout(onEnter, 1200);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-all duration-[1200ms] ease-in-out bg-[#020410]
      ${isEntering ? 'opacity-0 pointer-events-none' : 'opacity-100'}
    `}>
      
      {/* 1. Background Layers for Galaxy/Twilight Effect */}
      <div className="absolute inset-0 bg-[#020410]"></div>
      
      {/* Blue Galaxy Glow Top Right */}
      <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-blue-800/20 blur-[120px]"></div>
      
      {/* Subtle Violet Nebula Left */}
      <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-[100px]"></div>

      {/* Deep Twilight Horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#2e1065]/70 via-[#4c1d95]/30 to-transparent"></div>
      
      {/* Horizon Glow - Gold/Pinkish for 'Twilight' feel */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-[#f472b6]/15 via-[#fbbf24]/5 to-transparent mix-blend-screen"></div>

      {/* 2. Static Stars */}
      {stars.map(star => (
        <div 
          key={star.id}
          className="absolute bg-white rounded-full animate-[twinkle_5s_infinite]"
          style={{ 
            top: star.top, 
            left: star.left, 
            animationDelay: star.delay,
            width: '2px',
            height: '2px',
            opacity: star.opacity
          }}
        ></div>
      ))}

      {/* 3. Shooting Stars */}
      {shootingStars.map((star) => (
        <div 
          key={star.id}
          className="absolute pointer-events-none"
          style={{
            top: star.top,
            left: star.left,
            transform: `scale(${star.scale}) rotate(${star.angle}deg)`, 
          }}
        >
          <div 
            style={{
              animation: `shooting-star-fall ${star.duration} ease-in-out forwards`,
              animationDelay: star.delay
            }}
          >
             <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.9)] z-10"></div>
             <div className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-l from-transparent via-white to-transparent transform -translate-y-1/2 origin-left w-[250px] opacity-50"></div>
          </div>
        </div>
      ))}

      {/* 4. Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        
        <div className={`transition-all duration-1000 ${isEntering ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
          <h1 className="text-7xl md:text-9xl cinzel font-thin text-white tracking-widest drop-shadow-[0_0_25px_rgba(167,139,250,0.6)] mb-6">
            REISE
          </h1>
          
          <div className="flex items-center justify-center gap-4 opacity-80 mb-12">
            <div className="h-[1px] w-8 bg-reise-dawn"></div>
            <p className="cinzel text-xs md:text-sm text-reise-primary tracking-[0.5em] uppercase font-serif text-shadow-sm">
              여명의 별
            </p>
            <div className="h-[1px] w-8 bg-reise-dawn"></div>
          </div>
        </div>

        {/* 5. Button */}
        <button 
          onClick={handleEnter}
          disabled={isEntering}
          className="group relative px-12 py-4 overflow-hidden transition-all duration-500 ease-out cursor-pointer z-50"
        >
          <div className="absolute inset-0 border border-reise-primary/30 transition-all duration-500 group-hover:border-reise-dawn"></div>
          <div className="absolute inset-0 bg-reise-primary translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>

          <span className="relative z-10 font-serif text-xs font-bold tracking-[0.3em] text-indigo-100 transition-colors duration-500 group-hover:text-black">
            입장하기
          </span>
        </button>
      </div>
    </div>
  );
};