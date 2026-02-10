import React from 'react';
import { CharacterClass } from '../types';
import { X, Shield, Zap, Wind, Sword } from 'lucide-react';

interface Props {
  character: CharacterClass;
  onClose: () => void;
}

export const CharacterModal: React.FC<Props> = ({ character, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-[#1a1a1c] border border-reise-gold/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(197,160,89,0.15)] flex flex-col md:flex-row animate-fade-in-up rounded-sm">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white z-20">
          <X className="w-8 h-8" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
          <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1c] to-transparent md:bg-gradient-to-r"></div>
          <div className="absolute bottom-4 left-4">
             <span className="px-3 py-1 bg-reise-gold text-black font-serif font-bold text-xs">{character.role}</span>
          </div>
        </div>

        {/* Info Side */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <div>
            <h2 className="text-4xl font-serif text-reise-gold font-bold mb-1">{character.name}</h2>
            <div className="h-0.5 w-full bg-gradient-to-r from-reise-gold/50 to-transparent"></div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-reise-parchment border-b border-gray-700 pb-2">배경 이야기</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-serif italic">
              "{character.backstory}"
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-reise-parchment border-b border-gray-700 pb-2">전투 능력치</h3>
            <div className="grid grid-cols-2 gap-4">
               <StatItem icon={<Sword size={16} />} label="STR (힘)" value={character.stats.strength} />
               <StatItem icon={<Zap size={16} />} label="MAG (마력)" value={character.stats.magic} />
               <StatItem icon={<Wind size={16} />} label="AGI (민첩)" value={character.stats.agility} />
               <StatItem icon={<Shield size={16} />} label="DEF (방어)" value={character.stats.defense} />
            </div>
          </div>

           <div className="space-y-4">
            <h3 className="text-lg font-serif text-reise-parchment border-b border-gray-700 pb-2">주요 기술</h3>
            <ul className="space-y-2">
              {character.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm font-serif">
                  <div className="w-1.5 h-1.5 bg-reise-gold rotate-45"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ icon, label, value }: { icon: any, label: string, value: number }) => (
  <div className="bg-black/30 p-2 border border-gray-800 flex items-center gap-2">
    <div className="text-reise-gold">{icon}</div>
    <div className="flex-1">
      <div className="flex justify-between text-xs text-gray-400 mb-1 cinzel font-bold">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1 bg-gray-800 w-full">
        <div className="h-full bg-reise-gold" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  </div>
);