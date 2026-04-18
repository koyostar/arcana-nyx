import type { TarotCard } from "../types/card.js";

export const wandsCards: TarotCard[] = [
  {
    id: "ace-of-wands",
    name: { en: "Ace of Wands", zh: "权杖王牌" },
    arcana: "minor",
    suit: "wands",
    number: 1,
    image: { url: "/images/rider-waite/Wands01.png" },
    description: {
      en: "A hand emerges from the clouds brandishing a budding wand, igniting the spark of new creative ventures.",
      zh: "一只手从云中伸出，挥舞着一根发芽的权杖，点燃了新创意冒险的火花。",
    },
    keywords: {
      en: [
        "inspiration",
        "new beginnings",
        "creative spark",
        "passion",
        "potential",
      ],
      zh: ["灵感", "新开始", "创意火花", "热情", "潜力"],
    },
    meaning: {
      upright: {
        en: "A powerful creative spark is ready to ignite. Take bold action on your new ideas and passions.",
        zh: "强大的创意火花已准备好点燃。大胆地为你的新想法与热情采取行动。",
      },
      reversed: {
        en: "Delays, lack of motivation, or a creative idea that lacks direction. Find what truly excites you.",
        zh: "延迟、缺乏动力，或缺少方向的创意想法。找到真正让你兴奋的事物。",
      },
    },
  },
  {
    id: "two-of-wands",
    name: { en: "Two of Wands", zh: "权杖二" },
    arcana: "minor",
    suit: "wands",
    number: 2,
    image: { url: "/images/rider-waite/Wands02.png" },
    description: {
      en: "A figure surveys distant lands from a castle wall, holding a globe and contemplating bold new ventures.",
      zh: "一个人物站在城墙上俯瞰远方土地，手持地球仪，思索着大胆的新冒险。",
    },
    keywords: {
      en: ["planning", "future vision", "discovery", "bold moves", "expansion"],
      zh: ["规划", "未来愿景", "探索", "大胆举措", "扩张"],
    },
    meaning: {
      upright: {
        en: "You have the power to claim your desires. Plan boldly and take the first step toward your greater vision.",
        zh: "你有能力去实现你的渴望。大胆规划，迈出通向更宏大愿景的第一步。",
      },
      reversed: {
        en: "Fear of the unknown, poor planning, or staying safely within familiar territory.",
        zh: "对未知的恐惧、规划不善，或安于熟悉的领域。",
      },
    },
  },
  {
    id: "three-of-wands",
    name: { en: "Three of Wands", zh: "权杖三" },
    arcana: "minor",
    suit: "wands",
    number: 3,
    image: { url: "/images/rider-waite/Wands03.png" },
    description: {
      en: "A figure watches ships departing on the horizon, signaling that plans are in motion and expansion is underway.",
      zh: "一个人物望着船只驶向地平线，预示着计划正在推进，扩张即将展开。",
    },
    keywords: {
      en: [
        "expansion",
        "foresight",
        "long-term vision",
        "progress",
        "enterprise",
      ],
      zh: ["扩张", "远见", "长远愿景", "进展", "事业"],
    },
    meaning: {
      upright: {
        en: "Your efforts are bearing fruit and expansion is on the horizon. Keep your sights set on long-term vision.",
        zh: "你的努力正在结出果实，扩张就在眼前。继续着眼于长远愿景。",
      },
      reversed: {
        en: "Obstacles to growth, delays in plans, or a need to reconsider your long-term strategy.",
        zh: "成长的阻碍、计划延误，或需要重新考虑你的长期策略。",
      },
    },
  },
  {
    id: "four-of-wands",
    name: { en: "Four of Wands", zh: "权杖四" },
    arcana: "minor",
    suit: "wands",
    number: 4,
    image: { url: "/images/rider-waite/Wands04.png" },
    description: {
      en: "Figures celebrate beneath a floral canopy of four wands, marking milestones of joy and community.",
      zh: "人物们在由四根权杖搭成的花卉华盖下庆祝，标志着喜悦与社群的里程碑时刻。",
    },
    keywords: {
      en: ["celebration", "homecoming", "harmony", "milestone", "community"],
      zh: ["庆祝", "归家", "和谐", "里程碑", "社群"],
    },
    meaning: {
      upright: {
        en: "Celebrate your achievements and revel in the joy of community. A happy homecoming or milestone is near.",
        zh: "庆祝你的成就，沉浸在社群的喜悦中。幸福的归家或里程碑时刻近在眼前。",
      },
      reversed: {
        en: "Lack of harmony at home, or celebration that feels incomplete or premature.",
        zh: "家中缺乏和谐，或感觉不完整或过早的庆祝。",
      },
    },
  },
  {
    id: "five-of-wands",
    name: { en: "Five of Wands", zh: "权杖五" },
    arcana: "minor",
    suit: "wands",
    number: 5,
    image: { url: "/images/rider-waite/Wands05.png" },
    description: {
      en: "Five figures clash their wands in a chaotic skirmish, representing conflict, competition, and diverse opinions.",
      zh: "五个人物在混乱的小冲突中互击权杖，代表冲突、竞争与多元意见。",
    },
    keywords: {
      en: ["conflict", "competition", "tension", "challenge", "ambition"],
      zh: ["冲突", "竞争", "紧张", "挑战", "雄心"],
    },
    meaning: {
      upright: {
        en: "A period of healthy competition or conflict that ultimately drives growth. Navigate tension with strategy and energy.",
        zh: "一段最终推动成长的健康竞争或冲突时期。以策略与活力应对紧张局势。",
      },
      reversed: {
        en: "Avoiding conflict, inner tension, or moving past a period of struggle toward cooperation.",
        zh: "回避冲突、内在紧张，或走出挣扎时期迈向合作。",
      },
    },
  },
  {
    id: "six-of-wands",
    name: { en: "Six of Wands", zh: "权杖六" },
    arcana: "minor",
    suit: "wands",
    number: 6,
    image: { url: "/images/rider-waite/Wands06.png" },
    description: {
      en: "A victorious rider leads a procession carrying wands, celebrating triumph and public recognition.",
      zh: "一位得胜的骑手率领着一支手持权杖的队伍，庆祝胜利与公众的认可。",
    },
    keywords: {
      en: ["victory", "recognition", "success", "leadership", "acclaim"],
      zh: ["胜利", "认可", "成功", "领导力", "赞誉"],
    },
    meaning: {
      upright: {
        en: "A well-earned victory is yours. Step forward with confidence and accept the recognition you deserve.",
        zh: "属于你的胜利来之不易。充满信心地走上前，接受你应得的认可。",
      },
      reversed: {
        en: "Delayed success, lack of recognition, or ego-driven ambition that undermines your achievements.",
        zh: "延迟的成功、缺乏认可，或以自我为中心的雄心损害了你的成就。",
      },
    },
  },
  {
    id: "seven-of-wands",
    name: { en: "Seven of Wands", zh: "权杖七" },
    arcana: "minor",
    suit: "wands",
    number: 7,
    image: { url: "/images/rider-waite/Wands07.png" },
    description: {
      en: "A figure on higher ground fends off six attacking wands, standing firm in the face of opposition.",
      zh: "一个占据高地的人物抵挡着六根权杖的进攻，在对抗面前坚守立场。",
    },
    keywords: {
      en: [
        "defense",
        "perseverance",
        "standing your ground",
        "challenge",
        "conviction",
      ],
      zh: ["防御", "坚持", "坚守立场", "挑战", "信念"],
    },
    meaning: {
      upright: {
        en: "Hold your position and defend what you believe in. Perseverance in the face of opposition will lead to success.",
        zh: "坚守你的立场，捍卫你所相信的事物。在对抗面前坚持不懈将通向成功。",
      },
      reversed: {
        en: "Feeling overwhelmed, self-doubt, or giving up too quickly in the face of resistance.",
        zh: "感到不堪重负、自我怀疑，或在遇到阻力时过早放弃。",
      },
    },
  },
  {
    id: "eight-of-wands",
    name: { en: "Eight of Wands", zh: "权杖八" },
    arcana: "minor",
    suit: "wands",
    number: 8,
    image: { url: "/images/rider-waite/Wands08.png" },
    description: {
      en: "Eight wands fly swiftly through open sky, signaling rapid movement, swift action, and momentum.",
      zh: "八根权杖在开阔的天空中飞速穿行，象征着快速的行动、迅捷与势头。",
    },
    keywords: {
      en: ["swift action", "momentum", "speed", "progress", "clarity"],
      zh: ["迅速行动", "势头", "速度", "进展", "清晰"],
    },
    meaning: {
      upright: {
        en: "Things are moving fast. Seize the momentum and act decisively to take advantage of this swift progress.",
        zh: "事情正在快速推进。抓住势头，果断行动以利用这股迅猛的进展。",
      },
      reversed: {
        en: "Delays, scattered energy, or the need to slow down and realign before rushing forward.",
        zh: "延迟、能量分散，或需要在冲向前方之前放慢脚步重新调整方向。",
      },
    },
  },
  {
    id: "nine-of-wands",
    name: { en: "Nine of Wands", zh: "权杖九" },
    arcana: "minor",
    suit: "wands",
    number: 9,
    image: { url: "/images/rider-waite/Wands09.png" },
    description: {
      en: "A weary but determined figure leans on a wand, surrounded by eight more, refusing to surrender.",
      zh: "一个疲惫却坚定的人物倚靠着一根权杖，周围还有八根，拒绝放弃。",
    },
    keywords: {
      en: ["resilience", "persistence", "last stand", "strength", "guarded"],
      zh: ["韧性", "坚持", "最后防线", "力量", "戒备"],
    },
    meaning: {
      upright: {
        en: "You are almost there. One last push is needed — your resilience and persistence will carry you through.",
        zh: "你快到了。还需最后一搏——你的韧性与坚持将引领你走过难关。",
      },
      reversed: {
        en: "Exhaustion, stubbornness, or an inability to let go of past wounds while moving forward.",
        zh: "精疲力竭、固执，或在前进时无法放下过去的伤痛。",
      },
    },
  },
  {
    id: "ten-of-wands",
    name: { en: "Ten of Wands", zh: "权杖十" },
    arcana: "minor",
    suit: "wands",
    number: 10,
    image: { url: "/images/rider-waite/Wands10.png" },
    description: {
      en: "A figure struggles to carry a heavy bundle of ten wands toward a distant village, bearing great responsibility.",
      zh: "一个人物费力地扛着十根权杖向远处的村庄走去，肩负着沉重的责任。",
    },
    keywords: {
      en: [
        "burden",
        "responsibility",
        "overcommitment",
        "exhaustion",
        "completion",
      ],
      zh: ["重担", "责任", "过度承诺", "疲惫", "完成"],
    },
    meaning: {
      upright: {
        en: "You are carrying too much. Delegate and release what is not yours to carry in order to reach your destination.",
        zh: "你承担得太多了。委派并放下不属于你的重担，才能到达目的地。",
      },
      reversed: {
        en: "Putting down burdens, delegating responsibility, or learning to release what you no longer need to carry.",
        zh: "卸下重担、委派责任，或学会放下你不再需要承担的事物。",
      },
    },
  },
  {
    id: "page-of-wands",
    name: { en: "Page of Wands", zh: "权杖侍者" },
    arcana: "minor",
    suit: "wands",
    number: 11,
    image: { url: "/images/rider-waite/Wands11.png" },
    description: {
      en: "A youthful figure holds a budding wand and gazes at it with curiosity and enthusiastic potential.",
      zh: "一个年轻的人物手持一根发芽的权杖，以好奇心与充满激情的潜力凝视着它。",
    },
    keywords: {
      en: [
        "enthusiasm",
        "exploration",
        "creative potential",
        "adventurous",
        "free spirit",
      ],
      zh: ["热情", "探索", "创意潜力", "冒险", "自由精神"],
    },
    meaning: {
      upright: {
        en: "A spark of creative energy and enthusiasm is igniting within you. Take inspired action and explore boldly.",
        zh: "创意能量与热情的火花正在你内心点燃。采取有灵感的行动，大胆探索。",
      },
      reversed: {
        en: "Lack of direction, creative restlessness, or rushing into action without a plan.",
        zh: "缺乏方向、创意上的焦躁不安，或未经规划便冲动行事。",
      },
    },
  },
  {
    id: "knight-of-wands",
    name: { en: "Knight of Wands", zh: "权杖骑士" },
    arcana: "minor",
    suit: "wands",
    number: 12,
    image: { url: "/images/rider-waite/Wands12.png" },
    description: {
      en: "A fiery knight charges forward on a rearing horse, embodying passionate action and bold ambition.",
      zh: "一位热情的骑士骑着一匹奔腾的马冲锋向前，体现着热烈的行动与大胆的雄心。",
    },
    keywords: {
      en: ["energy", "passion", "adventure", "impulsiveness", "boldness"],
      zh: ["能量", "热情", "冒险", "冲动", "大胆"],
    },
    meaning: {
      upright: {
        en: "Charge forward with energy and passion. Bold, adventurous action will take you where you want to go.",
        zh: "带着能量与热情冲锋向前。大胆、冒险的行动将带你到达想去的地方。",
      },
      reversed: {
        en: "Hasty decisions, scattered energy, or impulsive behavior that leads to avoidable conflict.",
        zh: "仓促的决定、分散的能量，或导致本可避免的冲突的冲动行为。",
      },
    },
  },
  {
    id: "queen-of-wands",
    name: { en: "Queen of Wands", zh: "权杖皇后" },
    arcana: "minor",
    suit: "wands",
    number: 13,
    image: { url: "/images/rider-waite/Wands13.png" },
    description: {
      en: "A confident queen sits upon a sunflower-adorned throne, exuding warmth, charisma, and creative authority.",
      zh: "一位自信的皇后端坐在向日葵装饰的王座上，散发着温暖、魅力与创意的权威。",
    },
    keywords: {
      en: ["confidence", "charisma", "courage", "independence", "passion"],
      zh: ["自信", "魅力", "勇气", "独立", "热情"],
    },
    meaning: {
      upright: {
        en: "Step into your power with confidence and charisma. Your passion and determination are magnetic forces.",
        zh: "充满自信与魅力地走入你的力量之中。你的热情与决心是强大的磁吸力量。",
      },
      reversed: {
        en: "Arrogance, selfishness, or a loss of confidence causing you to doubt your natural gifts.",
        zh: "傲慢、自私，或信心丧失使你开始怀疑自己的天赋。",
      },
    },
  },
  {
    id: "king-of-wands",
    name: { en: "King of Wands", zh: "权杖国王" },
    arcana: "minor",
    suit: "wands",
    number: 14,
    image: { url: "/images/rider-waite/Wands14.png" },
    description: {
      en: "A powerful king sits on a throne adorned with lions and salamanders, embodying visionary leadership.",
      zh: "一位强大的国王端坐在饰有狮子与蜥蜴的王座上，体现着有远见的领导力。",
    },
    keywords: {
      en: ["vision", "leadership", "entrepreneur", "inspiration", "boldness"],
      zh: ["愿景", "领导力", "创业精神", "激励", "大胆"],
    },
    meaning: {
      upright: {
        en: "Lead with vision and passion. Your bold, entrepreneurial spirit has the power to inspire and transform.",
        zh: "以愿景与热情引领。你大胆的创业精神有能力激励他人并带来改变。",
      },
      reversed: {
        en: "Arrogance, impulsiveness, or wielding influence in ways that intimidate rather than inspire.",
        zh: "傲慢、冲动，或以威吓而非激励的方式施加影响力。",
      },
    },
  },
];
