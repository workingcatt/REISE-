import React from 'react';

export interface CharacterClass {
  id: string;
  factionId: string;
  name: string;
  role: string;
  description: string;
  backstory: string;
  stats: {
    strength: number;
    magic: number;
    agility: number;
    defense: number;
  };
  image: string;
  skills: string[];
}

export interface OracleResponse {
  // Common
  type: 'question' | 'result';
  emotion: number; // 1-7
  
  // If type === 'question'
  nextQuestion?: string;
  
  // If type === 'result'
  fateTitle?: string;     // e.g. "별을 등진 방랑자"
  fateDescription?: string; // Detailed analysis of the soul
  affinity?: string;      // Best matching faction/region
  soulColor?: string;     // e.g. "검푸른색", "타오르는 적색"
  potential?: string;     // e.g. "마법 친화력 최상", "검술 재능 없음"
}

export interface Region {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  guardian: string;
  dangerLevel: string;
  coordinates: { x: number; y: number };
}

export interface WebtoonEpisode {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
}

export interface LoreFeature {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface Goddess {
  id: 'risare' | 'lumiel' | 'refi';
  name: string;
  title: string;
  hair: string;
  eyes: string;
  outfit: string;
  personality: string;
  role: string;
  ability: string;
  description: string;
  imageCode: string; // Used for image URL generation
  themeColor: string;
  borderColor: string;
  shadowColor: string;
  textColor: string;
  initialQuestions: string[]; // Changed from single string to array
}