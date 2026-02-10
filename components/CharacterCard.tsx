import React from 'react';
import { CharacterClass } from '../types';

interface Props {
  character: CharacterClass;
  isSelected?: boolean;
  onClick: () => void;
}

export const CharacterCard: React.FC<Props> = ({ character, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden transition-all duration-700 h-[500px] w-full max-w-sm mx-auto
        ${isSelected ? 'grayscale-0 z-10' : 'grayscale hover:grayscale-0'}
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent"></div>
      </div>

      {/* Border Effect - Minimal White Frame */}
      <div className={`absolute inset-4 border border-white/20 transition-all duration-500 
        ${isSelected ? 'border-white/80' : 'group-hover:border-white/50'}
      `}></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <span className="text-[10px] cinzel font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block">{character.role}</span>
          <h3 className="text-3xl cinzel font-medium text-white mb-2">
            {character.name}
          </h3>
        </div>
        
        <div className={`space-y-4 transition-all duration-500 delay-100 ${isSelected || 'group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4'}`}>
          <div className="w-8 h-[1px] bg-white/50 mb-4"></div>
          <div className="space-y-2">
            <StatBar label="STR" value={character.stats.strength} />
            <StatBar label="MAG" value={character.stats.magic} />
            <StatBar label="AGI" value={character.stats.agility} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatBar = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-4 text-[10px] cinzel font-bold">
    <span className="w-6 text-gray-500">{label}</span>
    <div className="flex-1 h-[1px] bg-white/10 relative">
      <div 
        className="absolute top-0 left-0 h-full bg-white transition-all duration-1000" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);