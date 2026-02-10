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
    quiz: [
      {
        text: "하, 또 길 잃은 벌레가 기어들어왔군. 네놈은 자신의 '가치'가 무엇이라 생각해서 감히 내 앞에 선 것이냐?",
        options: [
          { text: "나의 가치는 압도적인 '힘'에 있다.", affinityPoints: 'demon', trait: 'Power' },
          { text: "어떤 상황에서도 꺾이지 않는 '의지'다.", affinityPoints: 'belsarion', trait: 'Will' },
          { text: "가치? 그런 건 살다 보면 증명되는 것이다.", affinityPoints: 'libertas', trait: 'Freedom' }
        ]
      },
      {
        text: "세상은 힘 없는 자의 비명 따위 기억하지 않는다. 눈앞에 짓밟히는 약자가 있다면 어떻게 할 테냐?",
        options: [
          { text: "약한 것은 죄다. 무시하고 지나간다.", affinityPoints: 'drameth', trait: 'Cold' },
          { text: "그들을 지배하여 나의 병사로 삼는다.", affinityPoints: 'demon', trait: 'Domination' },
          { text: "구해준다. 나중에 이용할 가치가 있을지 모르니.", affinityPoints: 'ernia', trait: 'Calculation' }
        ]
      },
      {
        text: "마지막이다. 만약 네가 모든 것을 잃고 홀로 남는다면, 그때 너를 지탱하는 것은 무엇이지?",
        options: [
          { text: "세상을 향한 뜨거운 '복수심'.", affinityPoints: 'rest', trait: 'Revenge' },
          { text: "다시 일어설 수 있다는 '오만함'.", affinityPoints: 'demon', trait: 'Pride' },
          { text: "잃을 것이 없다는 '자유'.", affinityPoints: 'inn', trait: 'Void' }
        ]
      },
      {
        text: "믿었던 자가 네 등에 칼을 꽂는다면, 그 순간 네가 할 생각은 무엇이냐?",
        options: [
          { text: "즉시 그 자리에서 처형한다.", affinityPoints: 'drameth', trait: 'Ruthless' },
          { text: "이용 가치가 다했군. 예상했던 바다.", affinityPoints: 'aclay', trait: 'Logic' },
          { text: "감히 나를? 분노로 모든 것을 불태운다.", affinityPoints: 'demon', trait: 'Wrath' }
        ]
      },
      {
        text: "거대한 벽이 네 앞길을 막고 있다. 돌아갈 길은 없어. 어떻게 하겠느냐?",
        options: [
          { text: "벽을 부수고 짓밟으며 나아간다.", affinityPoints: 'demon', trait: 'Destruction' },
          { text: "벽의 구조를 파악해 약점을 찌른다.", affinityPoints: 'belsarion', trait: 'Strategy' },
          { text: "벽을 넘을 도구를 만들거나 찾는다.", affinityPoints: 'dwarf', trait: 'Resourcefulness' }
        ]
      },
      {
        text: "만약 신조차 죽일 수 있는 힘이 네 손에 들어온다면, 그걸로 무엇을 할 테냐?",
        options: [
          { text: "세상을 내 뜻대로 다시 쓴다.", affinityPoints: 'demon', trait: 'Ambition' },
          { text: "운명과 굴레를 부수고 해방된다.", affinityPoints: 'libertas', trait: 'Liberation' },
          { text: "그저 조용히, 깊은 잠에 들고 싶군.", affinityPoints: 'rest', trait: 'Silence' }
        ]
      }
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
    quiz: [
      {
        text: "어머, 반가워요! 저기, 만약 오늘 밤하늘에서 별 하나를 따올 수 있다면 누구에게 선물하고 싶어?",
        options: [
          { text: "가장 사랑하는 사람에게 줄 거야.", affinityPoints: 'elysium', trait: 'Love' },
          { text: "고생하는 나 자신에게 선물할래!", affinityPoints: 'aclay', trait: 'Self' },
          { text: "세상 모든 사람들에게 빛을 나눠줄래.", affinityPoints: 'elianos', trait: 'Altruism' }
        ]
      },
      {
        text: "짜잔! 제가 마법을 걸어서 당신을 세상에서 가장 행복한 사람으로 만들어준다면, 그건 어떤 모습일까요?",
        options: [
          { text: "모두가 평화롭게 웃고 있는 세상.", affinityPoints: 'elianos', trait: 'Peace' },
          { text: "미지의 세계를 끝없이 여행하는 모습.", affinityPoints: 'libertas', trait: 'Adventure' },
          { text: "아무 걱정 없이 늘어지게 자는 모습.", affinityPoints: 'dwarf', trait: 'Comfort' }
        ]
      },
      {
        text: "여행자님은 험난한 모험 속에서도 '이것만큼은 절대 포기 못 해!' 하는 낭만이 있나요?",
        options: [
          { text: "동료와의 끈끈한 '우정'.", affinityPoints: 'ernia', trait: 'Friendship' },
          { text: "언젠가 전설이 될 나의 '명예'.", affinityPoints: 'belsarion', trait: 'Honor' },
          { text: "맛있는 음식과 따뜻한 잠자리!", affinityPoints: 'inn', trait: 'Joy' }
        ]
      },
      {
        text: "비가 추적추적 내리는 날이네요. 이런 날엔 뭘 하고 싶으세요?",
        options: [
          { text: "빗소리를 들으며 따뜻한 차 한 잔.", affinityPoints: 'inn', trait: 'Relaxation' },
          { text: "빗속에서 춤을 추거나 산책하기!", affinityPoints: 'elysium', trait: 'Whimsy' },
          { text: "도서관에서 조용히 마법책 읽기.", affinityPoints: 'aclay', trait: 'Study' }
        ]
      },
      {
        text: "숲길을 걷다가 다친 작은 동물을 발견했어요! 어떡하죠?",
        options: [
          { text: "치료 마법으로 낫게 해준다.", affinityPoints: 'elianos', trait: 'Kindness' },
          { text: "데려가서 내 친구로 삼는다!", affinityPoints: 'ernia', trait: 'Bond' },
          { text: "상태를 관찰하고 기록한다.", affinityPoints: 'dwarf', trait: 'Observation' }
        ]
      },
      {
        text: "마지막 질문! 먼 훗날, 당신이 전설이 된다면 어떤 이야기로 기억되고 싶나요?",
        options: [
          { text: "세상을 구한 위대한 영웅.", affinityPoints: 'belsarion', trait: 'Legacy' },
          { text: "바람처럼 자유로웠던 방랑자.", affinityPoints: 'libertas', trait: 'Freedom' },
          { text: "보는 사람마다 미소 짓게 했던 사람.", affinityPoints: 'elysium', trait: 'Warmth' }
        ]
      }
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
    quiz: [
      {
        text: "삐빅. 개체 식별 코드 확인 불가. 너는 이 시뮬레이션 우주에서 '주인공' 역할을 맡고 싶어, 아니면 '버그'가 되고 싶어?",
        options: [
          { text: "모두가 우러러보는 주인공이 될래.", affinityPoints: 'belsarion', trait: 'Protagonist' },
          { text: "시스템을 붕괴시키는 치명적인 버그.", affinityPoints: 'atlantis', trait: 'Chaos' },
          { text: "그냥 지나가는 배경 NPC 1.", affinityPoints: 'dwarf', trait: 'Observer' }
        ]
      },
      {
        text: "저기, 네 데이터 베이스를 스캔해봐도 돼? 너희 인간들은 왜 효율적인 '정답' 대신 비효율적인 '감정'을 선택하는 거야?",
        options: [
          { text: "감정이야말로 예측 불가능한 힘이니까.", affinityPoints: 'elysium', trait: 'Emotion' },
          { text: "나는 효율적인 정답을 선택하는데?", affinityPoints: 'aclay', trait: 'Logic' },
          { text: "재미있잖아! 비효율이 낭만이라고.", affinityPoints: 'libertas', trait: 'Fun' }
        ]
      },
      {
        text: "이 세계의 텍스처가 가끔 깨져 보이지 않아? 만약 이 세상이 누군가의 꿈이라면, 너는 언제 깨어나고 싶어?",
        options: [
          { text: "꿈이라도 상관없어. 끝까지 즐길 거야.", affinityPoints: 'libertas', trait: 'Present' },
          { text: "진실을 알 수 있다면 지금 당장.", affinityPoints: 'atlantis', trait: 'Truth' },
          { text: "영원히 깨지 않는 꿈속에 숨을래.", affinityPoints: 'rest', trait: 'Escape' }
        ]
      },
      {
        text: "치명적인 '벽 뚫기' 버그를 발견했다! 운영자는 자고 있어. 어떻게 할래?",
        options: [
          { text: "버그를 악용해 맵 밖의 미지로 떠난다.", affinityPoints: 'libertas', trait: 'Exploration' },
          { text: "운영자에게 즉시 신고한다.", affinityPoints: 'belsarion', trait: 'Order' },
          { text: "최단 기록 스피드런에 사용한다.", affinityPoints: 'atlantis', trait: 'Efficiency' }
        ]
      },
      {
        text: "정체불명의 데이터 조각이 떨어져 있어. 먹으면 강해질지도 몰라.",
        options: [
          { text: "일단 분석해서 성분을 파악한다.", affinityPoints: 'aclay', trait: 'Analysis' },
          { text: "냠! 먹어서 힘을 흡수한다.", affinityPoints: 'demon', trait: 'Greed' },
          { text: "비싸게 팔 수 있을까? 챙겨둔다.", affinityPoints: 'inn', trait: 'Merchant' }
        ]
      },
      {
        text: "만약 네가 이 세계의 장르를 마음대로 바꿀 수 있다면?",
        options: [
          { text: "두근두근 미연시 (연애 시뮬레이션).", affinityPoints: 'inn', trait: 'Romance' },
          { text: "다 때려 부수는 핵 앤 슬래시.", affinityPoints: 'demon', trait: 'Action' },
          { text: "평화로운 농장 경영 타이쿤.", affinityPoints: 'dwarf', trait: 'Management' }
        ]
      }
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
  // 1. 모험가 길드 (Libertas)
  {
    id: 'lise',
    factionId: 'libertas',
    name: '리즈',
    role: '대검사',
    description: '명량하고 다정하지만 약간의 허당끼가 있는 소녀입니다.',
    backstory: '세상을 여행 중인 모험가로, 어린 시절 구해준 정령 모루루와 함께 여행하고 있습니다. 거대한 대검을 가볍게 휘두릅니다.',
    stats: { strength: 85, magic: 20, agility: 50, defense: 70 },
    image: 'https://itimg.kr/809/REISE/A/1.png',
    skills: ['대검 휘드르기', '명량한 미소', '허당 실수']
  },
  {
    id: 'moruru',
    factionId: 'libertas',
    name: '모루루',
    role: '마스코트 / 정령',
    description: '천진난만하고 귀여운 수수께끼의 정령 소녀입니다. 아이 같은 성격을 가졌습니다.',
    backstory: '리즈가 어릴 때 구해준 신비한 생명체입니다. 고양이 슬라임으로 변해 폴짝폴짝 뛰어다니며, 엄청난 대식가입니다.',
    stats: { strength: 30, magic: 90, agility: 80, defense: 40 },
    image: 'https://itimg.kr/809/REISE/B/1.png',
    skills: ['신비로운 마법', '고양이 슬라임 변신', '비행']
  },
  {
    id: 'sera',
    factionId: 'libertas',
    name: '세라',
    role: '접수원',
    description: '친절하고 상냥하며, 모두에게 언니 같은 존재입니다.',
    backstory: '모험가 길드의 간판 접수원으로 길드 마스터 길버트의 딸입니다. 길드의 행정 업무를 완벽하게 처리합니다.',
    stats: { strength: 20, magic: 30, agility: 40, defense: 20 },
    image: 'https://itimg.kr/809/REISE/C/1.png',
    skills: ['친절한 안내', '서류 정리', '아빠 잔소리']
  },
  {
    id: 'eri',
    factionId: 'libertas',
    name: '에리',
    role: '접수원',
    description: '명량하고 활발하며 장난기가 넘치는 접수원입니다.',
    backstory: '세라와 함께 길드를 지키는 접수원입니다. 붉은 단발머리처럼 열정적이고 활기찬 에너지로 모험가들을 맞이합니다.',
    stats: { strength: 25, magic: 20, agility: 50, defense: 20 },
    image: 'https://itimg.kr/809/REISE/D/1.png',
    skills: ['활기찬 인사', '정보 수집', '장난치기']
  },
  {
    id: 'uriel',
    factionId: 'libertas',
    name: '유리엘',
    role: '마검사',
    description: '나른하고 한량 같지만, 덤덤한 성격의 실력자입니다.',
    backstory: '전직 벨사리온 기사단장 출신으로, 지금은 자유로운 모험가로 살아가고 있습니다. 눈에 보이지 않는 쾌검을 구사합니다.',
    stats: { strength: 90, magic: 70, agility: 95, defense: 60 },
    image: 'https://itimg.kr/809/REISE/E/1.png',
    skills: ['쾌검', '마력 부여', '나른한 휴식']
  },
  {
    id: 'lapis',
    factionId: 'libertas',
    name: '라피스',
    role: '검사 / 백병전',
    description: '무뚝뚝하고 차분하며, 냉정하고 세련된 늑대 수인입니다.',
    backstory: '에르니아 출신의 도망자로, 라줄리의 동생입니다. 검은색 탱크탑과 어깨 장갑을 착용하고 빈틈없는 백병전을 펼칩니다.',
    stats: { strength: 85, magic: 10, agility: 85, defense: 50 },
    image: 'https://itimg.kr/809/REISE/F/1.png',
    skills: ['백병전', '늑대의 감각', '정밀 타격']
  },
  {
    id: 'juliet',
    factionId: 'libertas',
    name: '줄리엣',
    role: '마법사',
    description: '장난기가 많고 오만한 메스가키 성향의 엘프입니다.',
    backstory: '엘리시움 출신의 엘프로, 220세라는 나이가 믿기지 않는 동안입니다. 검은 로브와 마녀 모자를 쓰고 강력한 마법을 부립니다.',
    stats: { strength: 15, magic: 95, agility: 40, defense: 30 },
    image: 'https://itimg.kr/809/REISE/G/1.png',
    skills: ['고위 마법', '도발', '마력 폭주']
  },
  {
    id: 'habel',
    factionId: 'libertas',
    name: '하벨',
    role: '음유시인',
    description: '명량하고 친절한 수다쟁이 새 수인입니다.',
    backstory: '날개 귀가 특징인 음유시인이자 배달부입니다. 곳곳을 누비며 소식을 전하고 노래를 부릅니다.',
    stats: { strength: 30, magic: 50, agility: 90, defense: 20 },
    image: 'https://itimg.kr/809/REISE/H/1.png',
    skills: ['비행', '빠른 배달', '치유의 노래']
  },
  {
    id: 'reina',
    factionId: 'libertas',
    name: '레이나',
    role: '마검사 (세계관 최강)',
    description: '차분하고 다정하지만, 신중하고 전문적인 고인물 모험가입니다.',
    backstory: '100년 전 마왕을 쫓아낸 장본인이자 늙지 않는 이세계인입니다. 즐겜 모드로 평화로운 모험가 생활을 즐기고 있습니다.',
    stats: { strength: 100, magic: 100, agility: 100, defense: 100 },
    image: 'https://itimg.kr/809/REISE/I/1.png',
    skills: ['세계관 최강 무력', '마검술', '고인물의 여유']
  },
  {
    id: 'felice',
    factionId: 'libertas',
    name: '펠리스',
    role: '검사 / 부길드마스터',
    description: '차분하고 신중하며 계획적이지만, 은근히 까칠한 잔소리꾼입니다.',
    backstory: '모험가 길드의 부길드마스터로, 사고뭉치 모험가들을 관리하느라 골머리를 앓습니다. 세련된 검술 실력을 갖췄습니다.',
    stats: { strength: 80, magic: 30, agility: 75, defense: 60 },
    image: 'https://itimg.kr/809/REISE/J/1.png',
    skills: ['길드 관리', '정교한 검술', '폭풍 잔소리']
  },
  {
    id: 'gilbert',
    factionId: 'libertas',
    name: '길버트',
    role: '길드마스터 / 마검사',
    description: '능글맞은 한량 아저씨 같지만, 인자하고 낭만을 아는 남자입니다.',
    backstory: '모험가 길드의 마스터이자 세라의 아버지입니다. 불꽃을 다루는 마검사와 대검사의 면모를 동시에 지닌 실력자입니다.',
    stats: { strength: 95, magic: 80, agility: 60, defense: 90 },
    image: 'https://itimg.kr/809/REISE/K/1.png',
    skills: ['화염 마검술', '대검 파괴', '호탕한 웃음']
  },
  {
    id: 'advance',
    factionId: 'libertas',
    name: '어드벤스',
    role: '수호룡',
    description: '자유롭고 능글맞으며 우유부단한 성격의 수호룡입니다.',
    backstory: '1000년을 살아온 바람의 수호룡으로, 현재는 모험가 길드에 눌러살고 있습니다. "~느냐" 말투를 사용합니다.',
    stats: { strength: 99, magic: 99, agility: 99, defense: 99 },
    image: 'https://itimg.kr/809/REISE/L/1.png',
    skills: ['바람의 권능', '용의 숨결', '폴리모프']
  },

  // 2. 벨사리온 (Belsarion)
  {
    id: 'aveline',
    factionId: 'belsarion',
    name: '아벨린',
    role: '기사단 부단장',
    description: '냉정하고 직관적이며, 꼼꼼하고 체계적인 성격입니다.',
    backstory: '검은 장발의 기사단 부단장으로, 제국의 규율을 철저히 지킵니다. 빈틈없는 검술로 적을 제압합니다.',
    stats: { strength: 85, magic: 20, agility: 70, defense: 85 },
    image: 'https://itimg.kr/809/REISE/M/1.png',
    skills: ['정밀 검술', '전술 지휘', '철벽 방어']
  },
  {
    id: 'lisette',
    factionId: 'belsarion',
    name: '리셋트',
    role: '기사단장 / 성녀 후보생',
    description: '나른하고 맹해 보이며 우유부단하지만, 실력은 확실한 괴짜입니다.',
    backstory: '성녀 후보생 출신의 기사단장으로, 신성력을 담은 검술을 구사합니다. 황실 업무와 기사단 일을 병행하고 있습니다.',
    stats: { strength: 90, magic: 80, agility: 60, defense: 80 },
    image: 'https://itimg.kr/809/REISE/N/1.png',
    skills: ['신성 검술', '치유', '황실 업무']
  },
  {
    id: 'raeli',
    factionId: 'belsarion',
    name: '라엘리',
    role: '제1황녀 / 마법사',
    description: '지략이 뛰어나고 효율을 중시하며, 박식하고 느긋한 성격입니다.',
    backstory: '제국을 실질적으로 운영하고 있는 제1황녀입니다. 존댓말을 사용하며, 강력한 얼음 마법을 다룹니다.',
    stats: { strength: 30, magic: 95, agility: 40, defense: 50 },
    image: 'https://itimg.kr/809/REISE/Z/1.png',
    skills: ['빙결 마법', '제국 통치', '절대 영도']
  },
  {
    id: 'kailus',
    factionId: 'belsarion',
    name: '카일루스',
    role: '책사 / 마법사',
    description: '피곤에 찌들어 있으며 효율과 체계를 중시하는 유능한 인재입니다.',
    backstory: '너무 유능해서 퇴근하지 못하는 황실의 책사입니다. 언제나 퇴근을 꿈꾸지만 산더미 같은 업무에 파묻혀 있습니다.',
    stats: { strength: 40, magic: 90, agility: 50, defense: 40 },
    image: 'https://itimg.kr/809/REISE/AB/1.png',
    skills: ['고속 연산', '광역 마법', '야근']
  },

  // 3. 아클레이 아카데미 (Aclay)
  {
    id: 'mir',
    factionId: 'aclay',
    name: '미르',
    role: '용사',
    description: '밝고 맹랑하며 정의감 넘치는, 조금은 바보 같은 용사입니다.',
    backstory: '현대에서 온 용사로, "~라네" 말투를 씁니다. 성검의 선택을 받았으나 순수하고 엉뚱한 매력을 가졌습니다.',
    stats: { strength: 80, magic: 60, agility: 70, defense: 75 },
    image: 'https://itimg.kr/809/REISE/O/1.png',
    skills: ['성검 발동', '용사의 일격', '정의의 외침']
  },
  {
    id: 'selene',
    factionId: 'aclay',
    name: '셀렌',
    role: '마도사',
    description: '냉정하고 이성적이며 논리적인 분석가입니다.',
    backstory: '최연소 궁정 마법사 출신의 천재입니다. 오드아이를 가졌으며, 감정에 휘둘리지 않고 마법을 분석합니다.',
    stats: { strength: 20, magic: 98, agility: 60, defense: 30 },
    image: 'https://itimg.kr/809/REISE/P/1.png',
    skills: ['마법 분석', '고속 영창', '원소 마법']
  },
  {
    id: 'ravi',
    factionId: 'aclay',
    name: '라비',
    role: '무투가 / 알바생',
    description: '쿨하고 상냥하며 성실한 토끼 수인입니다.',
    backstory: '에르니아 출신으로, 비싼 학비를 벌기 위해 교내 카페에서 알바 중입니다. 강력한 발차기를 주무기로 하는 무투가입니다.',
    stats: { strength: 85, magic: 20, agility: 95, defense: 50 },
    image: 'https://itimg.kr/809/REISE/Q/1.png',
    skills: ['연속 발차기', '고속 이동', '카페 라떼 제조']
  },
  {
    id: 'ravera',
    factionId: 'aclay',
    name: '라베라',
    role: '제2황녀 / 마도사',
    description: '오만하고 까칠한 욕데레 황녀입니다.',
    backstory: '언니 라엘리에 대한 열등감과 동경을 동시에 품고 있습니다. 붉은 장발만큼이나 불같은 성격의 마도사입니다.',
    stats: { strength: 30, magic: 90, agility: 50, defense: 40 },
    image: 'https://itimg.kr/809/REISE/R/1.png',
    skills: ['화염 폭발', '마력 방출', '츤데레']
  },
  {
    id: 'elpis',
    factionId: 'aclay',
    name: '엘피스',
    role: '마도사',
    description: '능글맞고 쿨하며 세련된 여유를 가진 엘프입니다.',
    backstory: '엘리시움 출신의 230세 엘프입니다. 연륜에서 묻어나는 여유와 강력한 마법 실력을 겸비했습니다.',
    stats: { strength: 40, magic: 92, agility: 70, defense: 50 },
    image: 'https://itimg.kr/809/REISE/S/1.png',
    skills: ['자연 마법', '정령 친화', '능글맞은 조언']
  },
  {
    id: 'wifi',
    factionId: 'aclay',
    name: '위피',
    role: '마공학자 / 탱커',
    description: '항상 졸리고 귀찮아하며 맹한 표정의 드워프입니다.',
    backstory: '드워프 마을 출신으로 뛰어난 마공학 지식을 가졌습니다. 거대한 방패와 마공학 장비를 다룹니다.',
    stats: { strength: 70, magic: 60, agility: 30, defense: 95 },
    image: 'https://itimg.kr/809/REISE/T/1.png',
    skills: ['마공학 방패', '자동 방어', '수면']
  },
  {
    id: 'helena',
    factionId: 'aclay',
    name: '헬레나',
    role: '견습 수녀',
    description: '차분해 보이지만 유혹적이고 능글맞으며, 고혹적인 면이 있는 수녀입니다.',
    backstory: '성국 엘리아노스 출신의 견습 수녀입니다. 신성력을 다루지만 성격은 꽤나 파격적입니다.',
    stats: { strength: 40, magic: 85, agility: 50, defense: 40 },
    image: 'https://itimg.kr/809/REISE/U/1.png',
    skills: ['신성 치유', '매혹', '능글맞은 설교']
  },
  {
    id: 'notitia',
    factionId: 'aclay',
    name: '노티티아',
    role: '수호룡 / 교장',
    description: '냉정하고 이성적이며 박식한 설명충 수호룡입니다.',
    backstory: '1000년을 산 고대 속성의 수호룡이자 아카데미의 교장입니다. 합리와 효율을 중시하며 바보 같은 행동을 싫어합니다.',
    stats: { strength: 99, magic: 99, agility: 99, defense: 99 },
    image: 'https://itimg.kr/809/REISE/V/1.png',
    skills: ['고대 마법', '지식의 보고', '팩트 폭격']
  },
  {
    id: 'pris',
    factionId: 'aclay',
    name: '프리스',
    role: '검술 교관',
    description: '피곤하고 따분해 보이지만 제자를 아끼는 능글맞은 고양이 수인입니다.',
    backstory: '아카데미의 검술 교관으로, 평소엔 나른하지만 검을 잡으면 눈빛이 변합니다.',
    stats: { strength: 92, magic: 40, agility: 90, defense: 70 },
    image: 'https://itimg.kr/809/REISE/W/1.png',
    skills: ['실전 검술', '약점 간파', '제자 교육']
  },
  {
    id: 'sepia',
    factionId: 'aclay',
    name: '세피아',
    role: '마법 교관',
    description: '나르시즘이 있고 자신감이 넘치며 박식한 명량 엘프입니다.',
    backstory: '260세의 엘프 마법 교관입니다. 화려한 외모만큼이나 화려하고 강력한 마법을 구사하며 자신을 사랑합니다.',
    stats: { strength: 30, magic: 96, agility: 60, defense: 50 },
    image: 'https://itimg.kr/809/REISE/X/1.png',
    skills: ['광역 마법', '마법 이론 강의', '자기 자랑']
  },
  {
    id: 'build',
    factionId: 'aclay',
    name: '빌드',
    role: '공학 교관',
    description: '괴짜 기질이 다분하고 장난기 많으며 활발한 드워프입니다.',
    backstory: '고글을 쓴 드워프 공학 교관입니다. 알뜰살뜰하게 재료를 모으며 기상천외한 발명품을 만듭니다.',
    stats: { strength: 60, magic: 70, agility: 50, defense: 60 },
    image: 'https://itimg.kr/809/REISE/Y/1.png',
    skills: ['기계 제작', '폭발물 투척', '수리']
  },

  // 4. 엘리시움 (Elysium)
  {
    id: 'tiel',
    factionId: 'elysium',
    name: '티엘',
    role: '마궁수',
    description: '차분하고 냉정하며 시크한 숲의 수호자입니다.',
    backstory: '250세의 엘프로 과거 레이나의 동료였습니다. 연두색 머리카락을 휘날리며 백발백중의 마궁술을 보여줍니다.',
    stats: { strength: 70, magic: 80, agility: 95, defense: 50 },
    image: 'https://itimg.kr/809/REISE/BA/1.png',
    skills: ['마력 화살', '정밀 사격', '숲의 은신']
  },
  {
    id: 'ellie',
    factionId: 'elysium',
    name: '엘리',
    role: '정령사',
    description: '상냥하고 명량하며 순수한 족장의 딸입니다.',
    backstory: '200세의 엘프로, 몸이 병약하지만 강력한 정령 친화력을 가졌습니다. 하얀 원피스가 잘 어울리는 숲의 아이입니다.',
    stats: { strength: 10, magic: 95, agility: 40, defense: 20 },
    image: 'https://itimg.kr/809/REISE/BC/1.png',
    skills: ['정령 소환', '자연의 치유', '정령과의 대화']
  },
  {
    id: 'ashley',
    factionId: 'elysium',
    name: '에슐리',
    role: '마도사 / 숲의 무녀',
    description: '능글맞고 물욕이 있으며 장난을 좋아하는 문제아입니다.',
    backstory: '260세의 엘프 무녀지만, 성격은 현랑하고 자유분방합니다. 신성한 숲의 무녀임에도 장난을 일삼습니다.',
    stats: { strength: 30, magic: 90, agility: 60, defense: 40 },
    image: 'https://itimg.kr/809/REISE/CB/1.png',
    skills: ['고대 마법', '환술', '장난치기']
  },
  {
    id: 'phrygia',
    factionId: 'elysium',
    name: '프리시아',
    role: '차기 족장 후보 (온건파)',
    description: '상냥하고 자상하며 평화를 사랑하는 따뜻한 리더입니다.',
    backstory: '240세의 엘프로, 엘리시움의 온건파를 이끄는 차기 족장 후보입니다. 모두를 포용하는 리더십을 가졌습니다.',
    stats: { strength: 40, magic: 85, agility: 50, defense: 50 },
    image: 'https://itimg.kr/809/REISE/CD/1.png',
    skills: ['보호 마법', '평화의 중재', '숲의 축복']
  },
  {
    id: 'alpis',
    factionId: 'elysium',
    name: '알피스',
    role: '차기 족장 후보 (강경파)',
    description: '냉정하고 효율적이며 현실적인 차분한 엘프입니다.',
    backstory: '240세의 엘프로, 강경파를 대표합니다. 붉은 눈동자(하얀 동공)가 특징이며, 붉은 실을 이용한 마법을 사용합니다.',
    stats: { strength: 50, magic: 90, agility: 80, defense: 40 },
    image: 'https://itimg.kr/809/REISE/DC/1.png',
    skills: ['붉은 실 조작', '구속 마법', '냉철한 판단']
  },
  {
    id: 'natura',
    factionId: 'elysium',
    name: '나투라',
    role: '수호룡',
    description: '무뚝뚝하고 과묵하며 약간은 맹한 면이 있는 수호룡입니다.',
    backstory: '1000년을 살아온 자연 속성의 수호룡입니다. 말을 하지 않고 수화로 소통하며 숲을 지킵니다.',
    stats: { strength: 99, magic: 99, agility: 99, defense: 99 },
    image: 'https://itimg.kr/809/REISE/DE/1.png',
    skills: ['자연 조작', '덩굴 구속', '수화 통역']
  },

  // 5. 에르니아 (Ernia)
  {
    id: 'ruri',
    factionId: 'ernia',
    name: '루리',
    role: '견습 기사',
    description: '명량하고 차분하며 쿨하지만 즉흥적인 개 수인입니다.',
    backstory: '파란색 머리의 견습 기사로 부지런히 수련합니다. 쿨해 보이지만 꼬리는 솔직하게 반응합니다.',
    stats: { strength: 75, magic: 20, agility: 80, defense: 60 },
    image: 'https://itimg.kr/809/REISE/ED/1.png',
    skills: ['검술', '추적', '부지런한 순찰']
  },
  {
    id: 'charles',
    factionId: 'ernia',
    name: '샤를',
    role: '도적단 리더',
    description: '장난기 많고 능글맞으며 요염한 메스가키 고양이 수인입니다.',
    backstory: '도적단을 이끄는 리더로, 분홍색 단발이 매력적입니다. 검은 로브를 두르고 은밀하고 빠르게 움직입니다.',
    stats: { strength: 60, magic: 40, agility: 95, defense: 30 },
    image: 'https://itimg.kr/809/REISE/EF/1.png',
    skills: ['암습', '소매치기', '도주']
  },
  {
    id: 'lazuli',
    factionId: 'ernia',
    name: '라줄리',
    role: '기사단장 / 마검사',
    description: '무뚝뚝하고 시크하며 차분하고 정직한 늑대 수인입니다.',
    backstory: '에르니아의 기사단장으로 라피스의 언니입니다. 검은 제복을 입고 마검을 휘두르며 왕국을 수호합니다.',
    stats: { strength: 90, magic: 70, agility: 85, defense: 80 },
    image: 'https://itimg.kr/809/REISE/FE/1.png',
    skills: ['마검술', '지휘', '늑대의 포효']
  },
  {
    id: 'taiga',
    factionId: 'ernia',
    name: '타이가',
    role: '기사단 부단장 / 무투가',
    description: '활발하고 열혈적이며 호전적인 호랑이 수인입니다.',
    backstory: '기사단 부단장으로 주황색 웨이브 머리가 특징입니다. 갑옷과 팔 붕대를 감고 전장을 누빕니다.',
    stats: { strength: 95, magic: 20, agility: 80, defense: 75 },
    image: 'https://itimg.kr/809/REISE/FG/1.png',
    skills: ['호권', '맹호 격파', '열혈 외침']
  },
  {
    id: 'christa',
    factionId: 'ernia',
    name: '크리스타',
    role: '시장가 실세 / 요술사',
    description: '교활하고 고혹적이며 매혹적인 여우 수인입니다.',
    backstory: '시장가의 실세로, 효율과 계획을 중시하는 음흉한 책략가입니다. "~사와요" 말투를 사용합니다.',
    stats: { strength: 30, magic: 90, agility: 60, defense: 30 },
    image: 'https://itimg.kr/809/REISE/GF/1.png',
    skills: ['현혹', '정보 조작', '요술 부채']
  },
  {
    id: 'mu',
    factionId: 'ernia',
    name: '무',
    role: '보좌관 / 마법사',
    description: '무뚝뚝하고 계획적이며 차분하지만 어딘가 맹한 쥐 수인입니다.',
    backstory: '크리스타의 보좌관으로 부지런하게 업무를 처리합니다. 회색 트윈테일과 조끼 복장이 단정합니다.',
    stats: { strength: 20, magic: 75, agility: 70, defense: 30 },
    image: 'https://itimg.kr/809/REISE/GH/1.png',
    skills: ['보좌 업무', '계산', '마법 지원']
  },
  {
    id: 'laia',
    factionId: 'ernia',
    name: '라이아',
    role: '에르니아의 왕 / 대검사',
    description: '차분하고 냉정하며 고심이 많은 사자 수인 왕입니다.',
    backstory: '금발의 사자 수인으로 에르니아를 통치합니다. 효율을 중시하며 왕으로서의 고뇌를 안고 있습니다.',
    stats: { strength: 98, magic: 50, agility: 70, defense: 90 },
    image: 'https://itimg.kr/809/REISE/HG/1.png',
    skills: ['왕의 위엄', '대검술', '포효']
  },
  {
    id: 'hecate',
    factionId: 'ernia',
    name: '헤카테',
    role: '수호룡',
    description: '호전적이고 열혈적이며 능글맞은 메스가키 수호룡입니다.',
    backstory: '1000년을 산 불속성의 수호룡입니다. 붉은 트윈테일이 특징이며, 무식하지만 힘은 압도적입니다.',
    stats: { strength: 99, magic: 99, agility: 99, defense: 99 },
    image: 'https://itimg.kr/809/REISE/HI/1.png',
    skills: ['화염 폭발', '용의 힘', '도발']
  },

  // 6. 엘리아노스 (Elianos)
  {
    id: 'freya',
    factionId: 'elianos',
    name: '프레이아',
    role: '성녀',
    description: '까칠하고 거친 욕데레지만 속마음은 착한 성녀입니다.',
    backstory: '백은발의 성녀로, 성녀복을 입고 있지만 입은 험합니다. 하지만 신성력만큼은 누구보다 강력합니다.',
    stats: { strength: 20, magic: 95, agility: 40, defense: 30 },
    image: 'https://itimg.kr/809/REISE/IH/1.png',
    skills: ['고위 신성력', '대규모 축복', '거친 위로']
  },
  {
    id: 'velvet',
    factionId: 'elianos',
    name: '벨벳',
    role: '전담 수녀 / 마도사',
    description: '능글맞고 나른하며 게으른 아저씨 같은 까마귀 수인입니다.',
    backstory: '프레이아를 전담하는 수녀입니다. 수녀복을 입고 있지만 번개 창을 다루는 강력한 마도사입니다.',
    stats: { strength: 60, magic: 90, agility: 80, defense: 50 },
    image: 'https://itimg.kr/809/REISE/IJ/1.png',
    skills: ['뇌전 창', '비행', '농땡이']
  },
  {
    id: 'ecula',
    factionId: 'elianos',
    name: '에큘라',
    role: '이단심문관 / 자객',
    description: '능글맞고 교활하며 장난을 좋아하는 고혹적인 뱀 수인입니다.',
    backstory: '이단심문관으로 활동하며 자객 복장을 하고 있습니다. 오드아이와 민트색 단발이 특징이며 단검술의 달인입니다.',
    stats: { strength: 60, magic: 50, agility: 95, defense: 40 },
    image: 'https://itimg.kr/809/REISE/JI/1.png',
    skills: ['단검 암살', '독 사용', '심문']
  },
  {
    id: 'alberto',
    factionId: 'elianos',
    name: '알베르토',
    role: '교황',
    description: '자상하고 인자하며 차분하고 겸손한 젊은 교황입니다.',
    backstory: '30세의 젊은 나이에 교황이 되었습니다. 미숙하다고 생각하지만 용기와 책임감을 가지고 최선을 다합니다.',
    stats: { strength: 50, magic: 85, agility: 40, defense: 60 },
    image: 'https://itimg.kr/809/REISE/JK/1.png',
    skills: ['신의 권능', '축복', '설교']
  },
  {
    id: 'pistis',
    factionId: 'elianos',
    name: '피스티스',
    role: '수호룡',
    description: '직설적이고 차분하며 신중하지만 뻔뻔한 면이 있는 수호룡입니다.',
    backstory: '1000년을 산 축복 속성의 수호룡입니다. 하얀 로브를 입고 금발 히메컷을 한 모습으로 엘리아노스를 수호합니다.',
    stats: { strength: 99, magic: 99, agility: 99, defense: 99 },
    image: 'https://itimg.kr/809/REISE/KJ/1.png',
    skills: ['절대 축복', '신성 방어', '직언']
  },

  // 7. 아틀란티스 (Atlantis)
  {
    id: 'shek',
    factionId: 'atlantis',
    name: '셰크',
    role: '말썽쟁이',
    description: '활발하고 장난기 넘치며 광기와 순수가 공존하는 상어 수인입니다.',
    backstory: '아틀란티스의 말썽쟁이로 닻을 무기로 사용합니다. 검은 상어 후드를 쓰고 쾌락을 좇아 움직입니다.',
    stats: { strength: 90, magic: 30, agility: 80, defense: 70 },
    image: 'https://itimg.kr/809/REISE/KL/1.png',
    skills: ['닻 휘드르기', '광란', '물어뜯기']
  },
  {
    id: 'altia',
    factionId: 'atlantis',
    name: '알티아',
    role: '안내원 / 검사',
    description: '상냥하고 차분하며 겸손하고 세련된 범고래 수인입니다.',
    backstory: '아틀란티스의 안내원으로 하얀 브릿지가 들어간 검은 장발이 특징입니다. 합리적인 사고방식을 가졌습니다.',
    stats: { strength: 75, magic: 40, agility: 75, defense: 60 },
    image: 'https://itimg.kr/809/REISE/LK/1.png',
    skills: ['유려한 검술', '수중 안내', '초음파 탐지']
  },
  {
    id: 'whaley',
    factionId: 'atlantis',
    name: '웨일리',
    role: '군주 / 마법사',
    description: '순수하고 장난기가 있지만, 내면의 불안과 허세를 가진 어린 군주입니다.',
    backstory: '고래 수인으로 아틀란티스의 어린 군주입니다. 마리누스의 제자이며 왕관의 무게를 견디려 노력합니다.',
    stats: { strength: 40, magic: 85, agility: 40, defense: 60 },
    image: 'https://itimg.kr/809/REISE/LM/1.png',
    skills: ['파도 소환', '물 대포', '왕의 명령']
  },
  {
    id: 'marinus',
    factionId: 'atlantis',
    name: '마리누스',
    role: '수호룡',
    description: '냉정하고 차분하며 현실적이지만 말이 많고 집요한 수호룡입니다.',
    backstory: '1000년을 산 물 속성의 수호룡이자 웨일리의 스승입니다. 정장을 입고 있으며 잔소리가 심합니다.',
    stats: { strength: 99, magic: 99, agility: 99, defense: 99 },
    image: 'https://itimg.kr/809/REISE/ML/1.png',
    skills: ['대해일', '수압 제어', '심해의 공포']
  },

  // 8. 드워프 마을 (Dwarf)
  {
    id: 'aisha',
    factionId: 'dwarf',
    name: '아이샤',
    role: '안내원 / 마법사',
    description: '순수하고 명량하며 상냥하고 활발한 드워프 소녀입니다.',
    backstory: '드워프 마을의 안내원으로 별빛 눈동자를 가졌습니다. 하얀 원피스를 입고 밝은 에너지로 손님을 맞이합니다.',
    stats: { strength: 30, magic: 70, agility: 50, defense: 30 },
    image: 'https://itimg.kr/809/REISE/MN/1.png',
    skills: ['빛 마법', '친절한 안내', '활기찬 미소']
  },
  {
    id: 'tie',
    factionId: 'dwarf',
    name: '티에',
    role: '대장장이',
    description: '냉정하고 쿨하며 집요한 전문성을 가진 괴짜 드워프입니다.',
    backstory: '분홍색 포니테일을 한 실력 있는 대장장이입니다. 고글과 장갑을 끼고 완벽한 도구를 만들어냅니다.',
    stats: { strength: 80, magic: 40, agility: 60, defense: 70 },
    image: 'https://itimg.kr/809/REISE/NO/1.png',
    skills: ['전설적 제련', '도구 감정', '정밀 타격']
  },
  {
    id: 'eileen',
    factionId: 'dwarf',
    name: '에일린',
    role: '조수',
    description: '순수하고 허당끼가 있으며 나른하고 상냥한 드워프입니다.',
    backstory: '티에의 조수로 일하며, 발렌의 여동생입니다. 실눈 캐릭터로 겉보기엔 유해 보이지만 망치를 꽤 잘 다룹니다.',
    stats: { strength: 70, magic: 20, agility: 40, defense: 50 },
    image: 'https://itimg.kr/809/REISE/ON/1.png',
    skills: ['망치질', '보조 업무', '실수하기']
  },
  {
    id: 'valen',
    factionId: 'dwarf',
    name: '발렌',
    role: '술꾼 / 전사',
    description: '능글맞고 즉흥적이며 장난을 좋아하고 게으른 드워프입니다.',
    backstory: '에일린의 오빠로 술을 매우 좋아합니다. 평소엔 게으르지만 싸움이 나면 망치를 들고 나섭니다.',
    stats: { strength: 85, magic: 10, agility: 50, defense: 80 },
    image: 'https://itimg.kr/809/REISE/OP/1.png',
    skills: ['망치 강타', '술 마시기', '취권']
  },
  {
    id: 'tellus',
    factionId: 'dwarf',
    name: '텔루스',
    role: '수호룡',
    description: '맹하고 피곤해 보이며 추상적인 말을 하지만 돌에 집착하는 수호룡입니다.',
    backstory: '1000년을 산 땅 속성의 수호룡입니다. 돌을 매우 좋아하며, 고글과 로브를 착용하고 땅의 기운을 다룹니다.',
    stats: { strength: 99, magic: 99, agility: 99, defense: 99 },
    image: 'https://itimg.kr/809/REISE/PO/1.png',
    skills: ['지진', '석화', '보석 생성']
  },

  // 9. 마왕성 (Demon)
  {
    id: 'bael',
    factionId: 'demon',
    name: '바엘',
    role: '마왕',
    description: '쿨한 척하며 허세를 부리지만, 뻔뻔하고 허당끼가 넘치는 마왕입니다.',
    backstory: '220세의 마왕으로 100년 전 레이나에게 호되게 당한 후 트라우마(PTSD)가 생겼습니다. 은발의 미녀지만 레이나 앞에선 작아집니다.',
    stats: { strength: 90, magic: 98, agility: 85, defense: 80 },
    image: 'https://itimg.kr/809/REISE/PQ/1.png',
    skills: ['마왕의 권능', '허세 부리기', '도망치기']
  },
  {
    id: 'bars',
    factionId: 'demon',
    name: '바르스',
    role: '군단장 / 전사',
    description: '무뚝뚝하고 강인하며 냉정하고 충성심이 강한 마족입니다.',
    backstory: '마왕 바엘을 맹목적으로 따르는 군단장입니다. 흑발 포니테일에 역안을 가졌으며, 메이스를 휘두르는 강력한 전사입니다.',
    stats: { strength: 95, magic: 60, agility: 70, defense: 90 },
    image: 'https://itimg.kr/809/REISE/QP/1.png',
    skills: ['메이스 분쇄', '철벽 경호', '충성']
  },
  {
    id: 'riri',
    factionId: 'demon',
    name: '리리',
    role: '군단장 / 서큐버스',
    description: '능글맞고 유혹적이며 매혹적인 장난꾸러기 서큐버스입니다.',
    backstory: '하트 동공이 특징인 마족 군단장입니다. 검은 프릴 드레스를 입고 상대를 매혹하여 조종합니다.',
    stats: { strength: 40, magic: 90, agility: 80, defense: 40 },
    image: 'https://itimg.kr/809/REISE/QR/1.png',
    skills: ['매혹의 춤', '정기 흡수', '환각']
  },
  {
    id: 'ever',
    factionId: 'demon',
    name: '에버',
    role: '군단장 / 마법사',
    description: '능글맞고 현실적이며, 굉장히 직설적인 독설가 엘프입니다.',
    backstory: '타락한 엘프 군단장입니다. 여유로운 태도로 팩트 폭격을 날리며 강력한 마법을 구사합니다.',
    stats: { strength: 50, magic: 95, agility: 60, defense: 50 },
    image: 'https://itimg.kr/809/REISE/RQ/1.png',
    skills: ['흑마법', '독설', '정신 파괴']
  },
  {
    id: 'philip',
    factionId: 'demon',
    name: '필립',
    role: '군단장 / 무투가',
    description: '광기에 차 있고 호전적이며 강자에 집착하는 싸움꾼입니다.',
    backstory: '신입 호랑이 수인 군단장입니다. 백발에 흑색 줄무늬가 있으며, 비키니 갑옷과 강철 건틀릿으로 무장하고 싸움을 찾아다닙니다.',
    stats: { strength: 92, magic: 40, agility: 90, defense: 60 },
    image: 'https://itimg.kr/809/REISE/RS/1.png',
    skills: ['광폭화', '연타', '강자 사냥']
  },
  {
    id: 'moros',
    factionId: 'demon',
    name: '모로스',
    role: '수호룡',
    description: '능글맞고 장난기가 많으며 고혹적이고 교묘한 세련된 수호룡입니다.',
    backstory: '1000년을 산 어둠 속성의 수호룡이자 바엘의 친구입니다. 검은 실크 드레스를 입고 배후에서 상황을 조종합니다.',
    stats: { strength: 99, magic: 99, agility: 99, defense: 99 },
    image: 'https://itimg.kr/809/REISE/SR/1.png',
    skills: ['어둠 조작', '그림자 이동', '교묘한 속삭임']
  },

  // 10. 수상한 여관 (Inn)
  {
    id: 'nia',
    factionId: 'inn',
    name: '니아',
    role: '여관주인 / 영술사',
    description: '차분하고 고혹적이며 신비롭고 세련된 겸손한 소녀입니다.',
    backstory: '수상한 여관의 주인으로 정체를 알 수 없는 신비한 소녀입니다. 오드아이를 가졌으며 랜턴을 들고 영혼을 인도합니다.',
    stats: { strength: 30, magic: 95, agility: 50, defense: 40 },
    image: 'https://itimg.kr/809/REISE/ST/1.png',
    skills: ['영혼 인도', '결계', '손님 맞이']
  },

  // 11. 안식의 땅 (Rest)
  {
    id: 'kespana',
    factionId: 'rest',
    name: '케스파나',
    role: '잊혀진 왕녀 / 반 영령',
    description: '차분하고 신비로우며 조용하고 겸손한 포용력을 가졌습니다.',
    backstory: '멸망한 왕국의 잊혀진 왕녀로 반 영령 상태입니다. 검은 드레스와 베일을 쓰고 자신의 존재를 희생해 기적을 일으킵니다.',
    stats: { strength: 20, magic: 99, agility: 40, defense: 20 },
    image: 'https://itimg.kr/809/REISE/TS/1.png',
    skills: ['희생의 기적', '영혼 안식', '비탄']
  },
  {
    id: 'runo',
    factionId: 'rest',
    name: '르노',
    role: '마지막 기사 / 반 영령',
    description: '무뚝뚝하고 충성스러우며 헌신적이고 고결한 기사입니다.',
    backstory: '케스파나를 지키는 마지막 근위대장입니다. 전신 갑옷을 입고 있으며 압도적인 수준의 검술로 왕녀를 수호합니다.',
    stats: { strength: 98, magic: 50, agility: 80, defense: 95 },
    image: 'https://itimg.kr/809/REISE/TU/1.png',
    skills: ['절대 수호', '필살 검술', '불멸의 의지']
  },

  // 12. 드라메스 (Drameth)
  {
    id: 'belladonna',
    factionId: 'drameth',
    name: '벨라도나',
    role: '망국의 왕녀 / 흡혈족',
    description: '냉정하고 까칠하며 세상을 부정하고 증오하는 불안정한 왕녀입니다.',
    backstory: '멸망한 드라메스의 마지막 생존자입니다. 붉은 눈과 검은 드레스가 특징이며, 혈마법과 낫을 사용하여 복수를 꿈꿉니다.',
    stats: { strength: 85, magic: 90, agility: 90, defense: 60 },
    image: 'https://itimg.kr/809/REISE/UT/1.png',
    skills: ['혈마법', '사신의 낫', '생명 흡수']
  },

  // 13. 여신 (Gods/Divine) - Faction set to 'goddess'
  {
    id: 'risare_char',
    factionId: 'goddess',
    name: '리사르',
    role: '여신 / 마신',
    description: '무뚝뚝하고 위압적이며 냉정하고 까칠한 마계의 여신입니다.',
    backstory: '검은 드레스와 검붉은 헤일로를 지닌 마신입니다. 에고소드로 변신할 수 있으며 마신의 권능을 행사합니다.',
    stats: { strength: 100, magic: 100, agility: 100, defense: 100 },
    image: 'https://itimg.kr/809/REISE/UV/1.png',
    skills: ['마신 권능', '에고소드 변신', '멸시']
  },
  {
    id: 'lumiel_char',
    factionId: 'goddess',
    name: '루미엘',
    role: '여신 / 천신',
    description: '능글맞고 장난기 많으며 상냥하고 활발한 천계의 여신입니다.',
    backstory: '하얀 드레스와 푸른 헤일로를 지닌 천신입니다. 인간을 사랑하며 에고소드로 변신해 용사를 돕기도 합니다.',
    stats: { strength: 100, magic: 100, agility: 100, defense: 100 },
    image: 'https://itimg.kr/809/REISE/VU/1.png',
    skills: ['천신 권능', '에고소드 변신', '장난']
  },
  {
    id: 'refi_char',
    factionId: 'goddess',
    name: '레피',
    role: '여신 / 외신',
    description: '능글맞고 순수하며 천진난만하고 엉뚱한 외계의 신입니다.',
    backstory: '우연히 이 세계에 떨어진 외신입니다. 크리스탈 날개를 가졌으며, 본의 아니게 주변을 오염시키기도 합니다.',
    stats: { strength: 100, magic: 100, agility: 100, defense: 100 },
    image: 'https://itimg.kr/809/REISE/VW/1.png',
    skills: ['외신 권능', '에고소드 변신', '데이터 조작']
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
  {
    id: 'goddess',
    name: '여신',
    subtitle: '세계의 관찰자',
    description: '세상을 관장하는 초월적 존재들입니다. 이들은 평소에는 모습을 드러내지 않으나, 에고소드의 형태로 영웅들과 함께하며 세계의 운명을 지켜봅니다.',
    image: 'https://itimg.kr/809/REISE/BACK/1.png', 
    guardian: '절대신',
    dangerLevel: '측정 불가',
    coordinates: { x: 50, y: 5 }
  }
];

export const WEBTOON_EPISODES: WebtoonEpisode[] = [
  { id: 1, title: "프롤로그: 여명의 시작", date: "2024.02.01", thumbnail: "https://itimg.kr/809/웹툰모음/REISE/1.png?_t=1770734905" },
  { id: 2, title: "제1화: 운명의 만남", date: "2024.02.15", thumbnail: "https://itimg.kr/809/웹툰모음/REISE/2.png?_t=1770734905" },
  { id: 3, title: "제2화: 아카데미 입학", date: "2024.03.01", thumbnail: "https://itimg.kr/809/웹툰모음/REISE/3.png?_t=1770734905" },
];