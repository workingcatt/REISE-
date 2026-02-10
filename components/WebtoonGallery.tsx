import React from 'react';
import { WEBTOON_EPISODES } from '../constants';
import { BookOpen, ArrowRight, Sparkles, PlayCircle, Star, Crown } from 'lucide-react';

export const WebtoonGallery: React.FC = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-[#020410]">
        
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
             {/* Center Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full"></div>
             
             {/* Magic Circles Decoration (SVG) */}
             <div className="absolute top-0 right-0 opacity-10 animate-[spin_60s_linear_infinite]">
                <svg width="600" height="600" viewBox="0 0 600 600">
                    <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" className="text-indigo-400" strokeWidth="1" strokeDasharray="10 5" />
                    <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" className="text-purple-400" strokeWidth="1" />
                    <rect x="200" y="200" width="200" height="200" fill="none" stroke="currentColor" className="text-indigo-300" strokeWidth="1" transform="rotate(45 300 300)" />
                </svg>
             </div>

             {/* Floating Particles */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Decorative Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-900/50 to-transparent"></div>
          <div className="inline-flex flex-col items-center bg-[#020410] px-10 relative z-10">
             <div className="flex items-center gap-2 text-reise-gold mb-2">
                 <div className="h-[1px] w-8 bg-reise-gold"></div>
                 <Crown className="w-5 h-5" />
                 <div className="h-[1px] w-8 bg-reise-gold"></div>
             </div>
             <h2 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                The Chronicles
             </h2>
             <p className="mt-4 text-indigo-300 font-serif tracking-[0.2em] text-xs uppercase">
                당신의 여정이 기록되는 곳
             </p>
          </div>
        </div>

        {/* 3D Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 perspective-[1000px]">
          {WEBTOON_EPISODES.map((ep, idx) => (
            <div 
                key={ep.id} 
                className="group relative cursor-pointer transform-style-3d hover:-translate-y-4 hover:rotate-x-2 transition-all duration-500 ease-out"
            >
               {/* Glowing Background Frame */}
               <div className="absolute -inset-4 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Card Container */}
              <div className="relative bg-[#0a0a0c] border border-indigo-500/30 rounded-lg overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] group-hover:border-indigo-400 transition-all duration-300">
                
                {/* Image Area */}
                <div className="relative aspect-[3/4] overflow-hidden">
                   {/* Magical Sheen Effect */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20"></div>

                   <img 
                     src={ep.thumbnail} 
                     alt={ep.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                   />
                   
                   {/* Date Badge */}
                   <div className="absolute top-4 right-0 bg-black/80 backdrop-blur-md px-3 py-1 border-l border-y border-indigo-500/50 text-[10px] text-indigo-300 font-serif z-10">
                      {ep.date}
                   </div>

                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-brightness-75 group-hover:backdrop-brightness-100">
                      <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:scale-110 transition-transform">
                         <PlayCircle className="w-8 h-8 text-white fill-white/20" />
                      </div>
                   </div>
                </div>

                {/* Text Content */}
                <div className="p-5 relative">
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
                   
                   <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 cinzel">EPISODE {ep.id}</span>
                      {idx === 0 && <span className="text-[10px] px-2 py-0.5 rounded bg-red-900/50 border border-red-500/30 text-red-200 cinzel animate-pulse">NEW</span>}
                   </div>

                   <h3 className="text-xl font-serif font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {ep.title}
                   </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Action */}
        <div className="mt-20 flex justify-center">
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