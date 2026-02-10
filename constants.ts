import { CharacterClass, Region, WebtoonEpisode, Goddess } from './types';

export const GODDESSES: Goddess[] = [
  {
    id: 'risare',
    name: '리사르',
    title: '멸시하는 마신',
    hair: '흑발 단정 장발',
    eyes: '노란색 (하얀 동공)',
    outfit: '검은색 드레스, 검붉은 헤일로, 검은색 날개',
    personality: '무뚝뚝, 위압, 냉정, 현실적, 경멸, 까칠함',
    role: '여신 / 마신',
    ability: '에고소드 변신 + 마신 권능',
    description: '차가운 현실을 직시하는 마계의 여신. 그녀의 경멸 어린 시선 뒤에는 깊은 고독이 서려 있습니다.',
    imageCode: 'UV',
    themeColor: 'from-red-900 to-black',
    borderColor: 'border-red-900/50',
    shadowColor: 'shadow-red-900/40',
    textColor: 'text-red-200',
    initialQuestions: [
      "하, 또 길 잃은 벌레가 기어들어왔군. 네놈은 자신의 '가치'가 무엇이라 생각해서 감히 내 앞에 선 것이냐?",
      "세상은 힘 없는 자의 비명 따위 기억하지 않는다. 네놈은 짓밟히는 쪽인가, 아니면 짓밟고 올라서는 쪽인가?",
      "모든 것을 잃고도 지키고 싶은 신념 따위가 네게 남아있느냐? 그게 네 목숨보다 가치 있다고 증명해 봐라."
    ]
  },
  {
    id: 'lumiel',
    name: '루미엘',
    title: '장난스러운 천신',
    hair: '백발 장발 (청색 브릿지)',
    eyes: '푸른색 (하얀 동공)',
    outfit: '하얀색 드레스, 푸른 헤일로, 하얀색 날개',
    personality: '능글맞음, 장난기, 이상적, 상냥함, 허당, 활발함',
    role: '여신 / 천신',
    ability: '에고소드 변신 + 천신 권능',
    description: '이상을 꿈꾸며 인간을 사랑하는 천계의 여신. 장난기가 많고 가끔 엉뚱한 실수를 저지릅니다.',
    imageCode: 'VU',
    themeColor: 'from-blue-600 to-cyan-200',
    borderColor: 'border-blue-400/50',
    shadowColor: 'shadow-blue-400/40',
    textColor: 'text-blue-200',
    initialQuestions: [
      "어머, 새로운 여행자님이다! 반가워요~ 저기, 만약 오늘 밤하늘에서 별 하나를 따올 수 있다면 누구에게 선물하고 싶어?",
      "짜잔! 제가 마법을 걸어서 당신을 세상에서 가장 행복한 사람으로 만들어준다면, 그건 어떤 모습일까요?",
      "여행자님은 험난한 모험 속에서도 '이것만큼은 절대 포기 못 해!' 하는 낭만이 있나요? 저한테만 살짝 말해줘요!"
    ]
  },
  {
    id: 'refi',
    name: '레피',
    title: '길 잃은 외신',
    hair: '남색 장발',
    eyes: '남색',
    outfit: '크리스탈 날개, 헤일로',
    personality: '능글맞음, 순수, 천진난만, 장난, 괴짜',
    role: '여신 / 외신',
    ability: '에고소드 변신 + 외신 권능',
    description: '우연히 이 세계에 떨어진 외계의 신. 의도치 않게 주변을 오염시키지만 본인은 억울해합니다.',
    imageCode: 'VW',
    themeColor: 'from-indigo-600 to-purple-400',
    borderColor: 'border-indigo-400/50',
    shadowColor: 'shadow-indigo-400/40',
    textColor: 'text-indigo-200',
    initialQuestions: [
      "삐빅. 개체 식별 코드 확인 불가. 너는 이 시뮬레이션 우주에서 '주인공' 역할을 맡고 싶어, 아니면 '버그'가 되고 싶어?",
      "저기, 네 데이터 베이스를 스캔해봐도 돼? 너희 인간들은 왜 효율적인 '정답' 대신 비효율적인 '감정'을 선택하는 거야?",
      "이 세계의 텍스처가 가끔 깨져 보이지 않아? 만약 이 세상이 누군가의 꿈이라면, 너는 언제 깨어나고 싶어?"
    ]
  }
];

export const BACKGROUND_MAP: Record<number, string> = {
  1: '평지',
  2: '리베르타스',
  3: '모험가 길드',
  4: '벨사리온',
  5: '아클레이',
  6: '엘리시움',
  7: '에르니아',
  8: '엘리아노스',
  9: '아틀란티스',
  10: '드워프 마을',
  11: '마왕성',
  12: '수상한 여관',
  13: '안식의 땅',
  14: '드라메스'
};

export const CHARACTER_CLASSES: CharacterClass[] = [
  {
    id: 'knight',
    factionId: 'belsarion',
    name: '벨사리온 중갑기사',
    role: '방어형 / 근접',
    description: '제국 벨사리온의 강철같은 규율 아래 훈련받은 정예 기사입니다.',
    backstory: '제국의 차별 정책에 환멸을 느끼고 아클레이 아카데미로 망명했습니다. 수호룡의 비호 아래, 그는 진정한 기사도를 꺠우치고 약자를 위해 검을 듭니다.',
    stats: { strength: 95, magic: 10, agility: 30, defense: 95 },
    image: 'https://picsum.photos/id/1054/400/600',
    skills: ['제국의 방패', '강철 돌격', '수호의 맹세']
  },
  {
    id: 'mage',
    factionId: 'elysium',
    name: '엘리시움의 현자',
    role: '마법 / 광역',
    description: '세계수의 마력을 받아들인 엘프 마법사입니다. 겉보기엔 10대 소녀 같지만 실제로는 100세를 넘긴 고위 마법사입니다.',
    backstory: '마법의 숲 깊은 곳에서 태어나 세계수의 목소리를 들으며 자랐습니다. 다가오는 공허의 위협을 감지하고, 세상의 균형을 맞추기 위해 숲을 떠났습니다.',
    stats: { strength: 15, magic: 95, agility: 50, defense: 20 },
    image: 'https://picsum.photos/id/1044/400/600',
    skills: ['세계수의 뿌리', '정령 소환', '엘리멘탈 버스트']
  },
  {
    id: 'rogue',
    factionId: 'libertas',
    name: '리베르타스 모험가',
    role: '암살 / 탐험',
    description: '모험가 길드에서 잔뼈가 굵은 베테랑 탐험가입니다. 어떤 지형이든 돌파할 수 있습니다.',
    backstory: '자유의 도시 리베르타스 출신으로, 오직 자신의 실력만을 믿습니다. 안식의 땅에 나타난다는 수상한 여관을 찾는 의뢰를 수행 중입니다.',
    stats: { strength: 40, magic: 30, agility: 95, defense: 30 },
    image: 'https://picsum.photos/id/1033/400/600',
    skills: ['약점 포착', '그림자 은신', '독바른 칼날']
  }
];

export const REGIONS: Region[] = [
  {
    id: 'demon',
    name: '마왕성',
    subtitle: '단절된 자들의 슬픔',
    description: '100년 전 전쟁 패배 후 마계로 가는 문이 닫혀 고립된 마족들이 세운 성입니다. 황폐한 땅 위에서 그들은 조용히 생존을 이어가고 있습니다.',
    image: 'https://itimg.kr/809/REISE/BACK/11.png',
    guardian: '어둠의 수호룡 (마왕 보좌)',
    dangerLevel: '극도로 위험',
    coordinates: { x: 50, y: 10 }
  },
  {
    id: 'dwarf',
    name: '드워프 지하도시',
    subtitle: '꺼지지 않는 용광로',
    description: '거대한 고산 지대 지하에 파놓은 광산 도시입니다. 최고의 대장장이들이 전설적인 무구를 만들어내며, 폐쇄적이지만 상인들에겐 열려있습니다.',
    image: 'https://itimg.kr/809/REISE/BACK/10.png',
    guardian: '화염의 수호룡',
    dangerLevel: '높음 (화산 지대)',
    coordinates: { x: 65, y: 20 }
  },
  {
    id: 'belsarion',
    name: '제국 벨사리온',
    subtitle: '강철과 규율의 제국',
    description: '대륙 최강의 군사력과 기술력을 보유한 유통의 중심지입니다. 인간 중심 사상이 강해 타 종족에 대한 차별이 존재하지만, 그 질서는 견고합니다.',
    image: 'https://itimg.kr/809/REISE/BACK/4.png',
    guardian: '황금의 수호룡 (황실 수호)',
    dangerLevel: '낮음 (치안 완벽)',
    coordinates: { x: 25, y: 35 }
  },
  {
    id: 'aclay',
    name: '아클레이 아카데미',
    subtitle: '지식과 마법의 요람',
    description: '벨사리온 내에 위치하지만 수호룡의 강력한 비호 아래 치외법권이 적용되는 교육 기관입니다. 자격만 있다면 종족을 불문하고 입학이 가능합니다.',
    image: 'https://itimg.kr/809/REISE/BACK/5.png',
    guardian: '지혜의 수호룡 (아카데미장)',
    dangerLevel: '매우 낮음',
    coordinates: { x: 32, y: 38 }
  },
  {
    id: 'libertas',
    name: '리베르타스',
    subtitle: '자유로운 모험가들의 도시',
    description: '대륙 중앙에 위치한 모험가 길드 본부가 운영하는 국가입니다. 출신과 종족을 묻지 않는 자유의 상징이며, 수많은 의뢰와 보물이 모이는 곳입니다.',
    image: 'https://itimg.kr/809/REISE/BACK/2.png',
    guardian: '자유의 수호룡 (방랑함)',
    dangerLevel: '보통',
    coordinates: { x: 50, y: 50 }
  },
  {
    id: 'elysium',
    name: '엘리시움',
    subtitle: '세계수가 숨 쉬는 숲',
    description: '마법의 숲 깊은 곳, 거대한 세계수를 중심으로 형성된 엘프들의 터전입니다. 외부인의 출입을 엄격히 통제하며 숲을 수호합니다.',
    image: 'https://itimg.kr/809/REISE/BACK/6.png',
    guardian: '생명의 수호룡 (세계수 둥지)',
    dangerLevel: '높음 (결계)',
    coordinates: { x: 75, y: 45 }
  },
  {
    id: 'ernia',
    name: '에르니아',
    subtitle: '용맹한 수인들의 왕국',
    description: '광활한 초원과 숲을 지배하는 수인들의 연합 왕국입니다. 자연과 더불어 살아가며, 육체적인 강함과 명예를 중시합니다.',
    image: 'https://itimg.kr/809/REISE/BACK/7.png',
    guardian: '대지의 수호룡',
    dangerLevel: '보통',
    coordinates: { x: 80, y: 60 }
  },
  {
    id: 'rest',
    name: '안식의 땅',
    subtitle: '죽음만이 허락된 곳',
    description: '과거 거대한 저주가 덮쳐 생명체가 살 수 없게 된 죽음의 땅입니다. 과거에는 찬란한 왕국이었으나 지금은 멸망의 흔적만이 남았습니다.',
    image: 'https://itimg.kr/809/REISE/BACK/13.png',
    guardian: '부재중 (저주로 타락함)',
    dangerLevel: '생존 불가',
    coordinates: { x: 15, y: 65 }
  },
  {
    id: 'inn',
    name: '수상한 여관',
    subtitle: '안식의 땅의 신기루',
    description: '죽음의 땅인 안식의 땅에 홀연히 나타나는 정체불명의 여관입니다. 절망에 빠진 여행자들 앞에만 문을 연다는 소문이 있습니다.',
    image: 'https://itimg.kr/809/REISE/BACK/12.png',
    guardian: '알 수 없음',
    dangerLevel: '???' ,
    coordinates: { x: 18, y: 68 }
  },
  {
    id: 'elianos',
    name: '성국 엘리아노스',
    subtitle: '신의 자비가 머무는 곳',
    description: '거대 성당을 중심으로 신성력을 다루는 중립국입니다. 분쟁을 중재하고 병든 자를 치료하며, 도움이 필요한 곳에 가장 먼저 손을 뻗습니다.',
    image: 'https://itimg.kr/809/REISE/BACK/8.png',
    guardian: '빛의 수호룡',
    dangerLevel: '낮음',
    coordinates: { x: 45, y: 75 }
  },
  {
    id: 'drameth',
    name: '드라메스',
    subtitle: '붉은 달의 폐허',
    description: '과거 대륙 최강이었으나 연합군에 의해 멸망한 흡혈귀들의 나라입니다. 붉은 하늘과 피로 물든 달 아래 폐허만이 남아있습니다.',
    image: 'https://itimg.kr/809/REISE/BACK/14.png',
    guardian: '수호룡 사망',
    dangerLevel: '매우 높음 (망령)',
    coordinates: { x: 90, y: 30 }
  },
  {
    id: 'atlantis',
    name: '아틀란티스',
    subtitle: '심해의 고대 문명',
    description: '심해 깊은 곳에 존재하는 오버 테크놀로지 국가입니다. 지상과의 교류를 끊고 독자적인 기술 문명을 이룩했습니다.',
    image: 'https://itimg.kr/809/REISE/BACK/9.png',
    guardian: '심해의 수호룡',
    dangerLevel: '매우 높음 (수압)',
    coordinates: { x: 50, y: 90 }
  },
];

export const WEBTOON_EPISODES: WebtoonEpisode[] = [
  { id: 1, title: "각성 (The Awakening)", date: "2023.10.01", thumbnail: "https://picsum.photos/seed/ep1/300/400" },
  { id: 2, title: "아클레이 입학식", date: "2023.10.15", thumbnail: "https://picsum.photos/seed/ep2/300/400" },
  { id: 3, title: "제국의 그림자", date: "2023.11.01", thumbnail: "https://picsum.photos/seed/ep3/300/400" },
  { id: 4, title: "수상한 여관", date: "2023.11.15", thumbnail: "https://picsum.photos/seed/ep4/300/400" },
];