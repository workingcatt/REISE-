import React, { useRef, useState } from 'react';
import { WEBTOON_EPISODES } from '../constants';
import { Crown, ArrowRight } from 'lucide-react';

export const WebtoonGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if(!scrollRef.current) return;
    setIsDragging(true);
    setStartY(e.pageY);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const y = e.pageY;
    const walk = (y - startY) * 2; // Speed multiplier for drag
    scrollRef.current.scrollTop = scrollTop - walk;
  };

  return (
    <section className="relative py-32 bg-[#020410]">
        
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full"></div>
             
             <div className="absolute top-0 right-0 opacity-10 animate-[spin_60s_linear_infinite]">
                <svg width="600" height="600" viewBox="0 0 600 600">
                    <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" className="text-indigo-400" strokeWidth="1" strokeDasharray="10 5" />
                    <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" className="text-purple-400" strokeWidth="1" />
                    <rect x="200" y="200" width="200" height="200" fill="none" stroke="currentColor" className="text-indigo-300" strokeWidth="1" transform="rotate(45 300 300)" />
                </svg>
             </div>

             {Array.from({ length: 20 }).map((_, i) => (
               <div 
                 key={i}
                 className="absolute rounded-full bg-white animate-pulse"
                 style={{
                   top: `${Math.random() * 100}%`,
                   left: `${Math.random() * 100}%`,
                   width: `${Math.random() * 3}px`,
                   height: `${Math.random() * 3}px`,
                   opacity: Math.random() * 0.5,
                   animationDelay: `${Math.random() * 5}s`,
                   animationDuration: `${Math.random() * 5 + 3}s`
                 }}
               ></div>
             ))}
        </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        
        {/* Decorative Header */}
        <div className="text-center mb-10 relative">
          <div className="inline-flex flex-col items-center relative z-10">
             <div className="flex items-center gap-2 text-reise-gold mb-2">
                 <div className="h-[1px] w-8 bg-reise-gold"></div>
                 <Crown className="w-5 h-5" />
                 <div className="h-[1px] w-8 bg-reise-gold"></div>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                The Chronicles
             </h2>
             <p className="mt-4 text-indigo-300 font-serif tracking-[0.2em] text-xs uppercase animate-pulse">
                드래그하여 스크롤하세요
             </p>
          </div>
        </div>

        {/* Vertical Drag Scroll Container (Viewer) */}
        <div className="relative w-full max-w-[600px] mx-auto bg-black border border-indigo-500/20 shadow-2xl rounded-sm overflow-hidden">
            
            {/* Scrollable Area */}
            <div 
                ref={scrollRef}
                className="h-[75vh] md:h-[85vh] overflow-y-auto cursor-grab active:cursor-grabbing scrollbar-hide select-none flex flex-col bg-black"
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {WEBTOON_EPISODES.map((ep) => (
                    <div key={ep.id} className="w-full relative">
                        {/* Image Strip - No gap, full width */}
                        <img 
                            src={ep.thumbnail} 
                            alt={ep.title} 
                            draggable={false}
                            className="w-full h-auto block select-none pointer-events-none"
                        />
                    </div>
                ))}
                
                {/* End of Content Marker */}
                <div className="py-12 text-center bg-black">
                    <p className="text-indigo-500/50 text-xs cinzel tracking-widest">TO BE CONTINUED...</p>
                </div>
            </div>

            {/* Viewer Frame Overlay Effects */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10"></div>
            
        </div>
        
        {/* Bottom Action */}
        <div className="mt-12 flex justify-center">
            <button className="group relative px-10 py-4 bg-transparent border border-indigo-500/30 overflow-hidden transition-all duration-300 hover:border-indigo-400">
                <div className="absolute inset-0 bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center gap-3">
                    <span className="cinzel text-sm font-bold tracking-[0.2em] text-indigo-200 group-hover:text-white transition-colors">전체 에피소드 보기</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </div>
            </button>
        </div>
      </div>
    </section>
  );
};