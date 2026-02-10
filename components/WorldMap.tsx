import React, { useState } from 'react';
import { REGIONS } from '../constants';
import { Region } from '../types';
import { MapPin, AlertTriangle, Crown, X } from 'lucide-react';

export const WorldMap: React.FC = () => {
  // Initialize as null so the panel is closed by default on mobile
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const handlePinClick = (regionId: string) => {
    const region = REGIONS.find(r => r.id === regionId);
    if (region) {
      setSelectedRegion(region);
    }
  };

  const closePanel = () => {
    setSelectedRegion(null);
  };

  return (
    <section className="py-24 bg-transparent relative border-t border-indigo-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-6 md:mb-10 space-y-4 relative z-10">
          <h2 className="text-4xl font-serif font-bold text-white drop-shadow-lg">대륙 지도</h2>
          <p className="text-indigo-200 font-serif">핀을 선택하여 지역 정보를 확인하세요.</p>
        </div>

        {/* Adjusted mobile height from 60vh to 45vh for better fit */}
        <div className="flex flex-col md:flex-row gap-6 h-[45vh] md:h-[700px]">
          
          {/* Map Container */}
          <div className="relative flex-1 bg-[#0b101b]/50 backdrop-blur-sm rounded-lg border border-indigo-500/20 shadow-2xl shadow-indigo-900/20 overflow-hidden group flex flex-col">
            
            {/* Scrollable Map Area */}
            <div className="flex-1 w-full h-full relative overflow-auto scrollbar-hide">
                {/* 
                   Adjusted Dimensions:
                   Reduced min-w further to 400px and min-h to 300px for mobile.
                   This makes the map more compact on small screens.
                */}
                <div className="relative w-full min-w-[400px] h-full min-h-[300px] md:min-w-0 md:min-h-0 aspect-[5/4]">
                    {/* Map Click Outside Handler - Close panel when clicking map background */}
                    <div className="absolute inset-0 z-0" onClick={() => setSelectedRegion(null)}></div>

                    {/* Map Layer */}
                    <div className="absolute inset-0 w-full h-full select-none">
                        {/* SVG Map */}
                        <svg width="100%" height="100%" viewBox="0 0 1000 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#020410" />
                            <stop offset="100%" stopColor="#1e1b4b" />
                            </linearGradient>
                            <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e1b4b" />
                            <stop offset="100%" stopColor="#312e81" />
                            </linearGradient>
                            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                            </pattern>
                        </defs>

                        <rect width="1000" height="800" fill="url(#oceanGradient)" />
                        <rect width="1000" height="800" fill="url(#grid)" />

                        {/* Shapes */}
                        <path d="M 300,50 Q 500,0 700,50 T 900,150 L 950,250 Q 800,300 600,250 T 400,200 L 200,150 Z" 
                                fill="#0f172a" stroke="#334155" strokeWidth="2" />
                        <path d="M 500,100 L 530,50 L 560,100 Z" fill="#451a1a" />
                        <path d="M 650,180 L 680,120 L 710,180 Z" fill="#334155" />
                        <path d="M 50,400 Q 150,350 250,450 T 200,650 L 100,700 Q 0,600 50,400 Z" 
                                fill="#1a1a1c" stroke="#3f3232" strokeWidth="2" opacity="0.8" />
                        <circle cx="150" cy="650" r="40" fill="rgba(0,0,0,0.3)" filter="blur(10px)" />
                        <path d="M 250,250 Q 400,200 600,250 T 800,400 Q 850,550 700,650 T 400,700 Q 200,600 250,250 Z" 
                                fill="url(#landGradient)" stroke="#4338ca" strokeWidth="2" />
                        <path d="M 750,350 Q 850,300 950,350 T 980,550 Q 900,650 750,550 T 700,400 Z" 
                                fill="#064e3b" stroke="#065f46" strokeWidth="2" />
                        <circle cx="820" cy="450" r="30" fill="#34d399" opacity="0.3" filter="blur(8px)" />
                        <path d="M 400,720 Q 450,700 500,720 T 520,780 Q 450,820 400,780 Z" 
                                fill="#312e81" stroke="#4338ca" strokeWidth="2" />
                        <circle cx="500" cy="900" r="100" fill="url(#oceanGradient)" stroke="#6366f1" strokeWidth="1" opacity="0.5" filter="blur(20px)" />
                        <path d="M 500,500 L 250,350" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                        <path d="M 500,500 L 750,450" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                        <path d="M 500,500 L 500,900" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                        </svg>

                        {/* Pins */}
                        {REGIONS.map((region) => (
                        <button
                            key={region.id}
                            onClick={(e) => { e.stopPropagation(); handlePinClick(region.id); }}
                            className="absolute group/pin transform -translate-x-1/2 -translate-y-1/2 focus:outline-none transition-all duration-300 z-20 hover:scale-110 active:scale-95"
                            style={{ left: `${region.coordinates.x}%`, top: `${region.coordinates.y}%` }}
                        >
                            <div className="relative flex flex-col items-center">
                            <div className={`relative z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300
                                ${selectedRegion?.id === region.id 
                                ? 'bg-reise-gold border-white text-black scale-110 shadow-[0_0_20px_rgba(251,191,36,0.8)]' 
                                : 'bg-[#1e1b4b] border-reise-gold/50 text-reise-gold hover:bg-reise-gold hover:text-black hover:border-white'}
                            `}>
                                <MapPin className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                            </div>
                            
                            {/* Pulsing effect only for active pin */}
                            {selectedRegion?.id === region.id && (
                                <div className="absolute inset-0 rounded-full animate-ping bg-reise-gold opacity-50 duration-1000"></div>
                            )}
                            
                            {/* Floating Label */}
                            <span className={`absolute top-full mt-2 px-3 py-1 bg-black/80 text-reise-gold text-xs font-serif font-bold whitespace-nowrap rounded border border-reise-gold/30 backdrop-blur-sm transition-all duration-300 shadow-lg z-30 pointer-events-none
                                ${selectedRegion?.id === region.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-90 group-hover/pin:opacity-100 group-hover/pin:translate-y-0 group-hover/pin:scale-100'}
                            `}>
                                {region.name}
                            </span>
                            </div>
                        </button>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Mobile Instructions */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-serif md:hidden pointer-events-none animate-pulse bg-black/50 px-3 py-1 rounded-full whitespace-nowrap z-10">
              드래그하여 지도 탐험하기
            </div>
          </div>

          {/* Side Panel (Desktop) / Bottom Sheet (Mobile) */}
          <div className={`
            fixed md:relative bottom-0 left-0 right-0 md:w-96 md:h-full z-30
            bg-[#020410] md:bg-[#020410]/50 backdrop-blur-xl border-t md:border border-indigo-500/30
            md:rounded-lg shadow-2xl transition-all duration-500 ease-in-out
            ${selectedRegion ? 'translate-y-0 opacity-100' : 'translate-y-full md:translate-y-0 md:opacity-100'}
            flex flex-col max-h-[85vh] md:max-h-full pb-8 md:pb-0
          `}>
             
             {/* Mobile Handle - Click to close */}
             <div className="w-full flex justify-center pt-3 pb-1 md:hidden bg-gradient-to-b from-[#020410] to-transparent cursor-pointer" onClick={() => setSelectedRegion(null)}>
               <div className="w-12 h-1.5 bg-gray-700 rounded-full"></div>
             </div>

             {selectedRegion ? (
               <div className="flex-1 overflow-y-auto relative flex flex-col h-full">
                  {/* Close Button (Mobile only) */}
                  <button 
                    onClick={closePanel}
                    className="absolute top-4 right-4 p-2 text-white hover:text-reise-gold z-50 bg-black/60 rounded-full md:hidden"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Header Image */}
                  <div className="h-48 md:h-48 w-full relative shrink-0">
                    <img src={selectedRegion.image} alt={selectedRegion.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex items-center gap-2 text-reise-gold text-xs font-bold uppercase tracking-widest mb-2 shadow-black drop-shadow-md">
                        <MapPin className="w-3 h-3" />
                        CODE: {REGIONS.indexOf(selectedRegion) + 1}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-white font-bold leading-tight drop-shadow-lg">{selectedRegion.name}</h3>
                      <p className="text-sm text-gray-200 font-serif italic mt-1 drop-shadow-md">{selectedRegion.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6 flex-1 bg-[#020410]">
                    <p className="text-gray-300 font-serif text-sm leading-relaxed border-l-2 border-reise-gold/50 pl-4">
                       {selectedRegion.description}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-3 pb-8 md:pb-0">
                       <div className="flex items-start gap-4 bg-indigo-950/30 p-4 rounded-lg border border-indigo-500/20">
                          <div className="p-2 bg-indigo-500/10 rounded-full shrink-0"><Crown className="w-5 h-5 text-indigo-400" /></div>
                          <div>
                            <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1">Guardian</div>
                            <div className="text-sm text-indigo-100 font-serif font-semibold">{selectedRegion.guardian}</div>
                          </div>
                       </div>
                       
                       <div className="flex items-start gap-4 bg-rose-950/20 p-4 rounded-lg border border-rose-500/10">
                          <div className="p-2 bg-rose-500/10 rounded-full shrink-0"><AlertTriangle className="w-5 h-5 text-rose-400" /></div>
                          <div>
                            <div className="text-[10px] text-rose-400 font-bold uppercase tracking-widest mb-1">Danger Level</div>
                            <div className="text-sm text-rose-100 font-serif font-semibold">{selectedRegion.dangerLevel}</div>
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
             ) : (
               <div className="flex items-center justify-center h-full text-gray-500 font-serif italic p-10 text-center">
                 <div className="space-y-2">
                    <MapPin className="w-10 h-10 mx-auto opacity-50 mb-4" />
                    <p>탐험할 지역을 지도에서 선택해주세요.</p>
                 </div>
               </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};