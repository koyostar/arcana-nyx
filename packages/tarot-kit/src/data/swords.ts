import type { TarotCard } from "../types/card.js";

export const swordsCards: TarotCard[] = [
  {
    id: "ace-of-swords",
    name: { en: "Ace of Swords", zh: "宝剑王牌" },
    arcana: "minor",
    suit: "swords",
    number: 1,
    image: { url: "/images/rider-waite/Swords01.png" },
    description: {
      en: "A hand emerges from the clouds gripping a sword crowned with laurels, heralding truth and mental clarity.",
      zh: "一只手从云中伸出握住一把加冕月桂的宝剑，预示着真相与心智的清明。",
    },
    keywords: {
      en: ["clarity", "truth", "breakthrough", "intellect", "justice"],
      zh: ["清晰", "真相", "突破", "理智", "正义"],
    },
    meaning: {
      upright: {
        en: "A breakthrough in thought or communication brings clarity. The truth, however sharp, will set you free.",
        zh: "思维或沟通上的突破带来清明。真相无论多么尖锐，都将让你自由。",
      },
      reversed: {
        en: "Confusion, misinformation, or a breakthrough that is being blocked. Seek clarity before acting.",
        zh: "困惑、错误信息，或正被阻碍的突破。在行动前寻求清明。",
      },
    },
  },
  {
    id: "two-of-swords",
    name: { en: "Two of Swords", zh: "宝剑二" },
    arcana: "minor",
    suit: "swords",
    number: 2,
    image: { url: "/images/rider-waite/Swords02.png" },
    description: {
      en: "A blindfolded figure holds two crossed swords, refusing to see a difficult decision that must be made.",
      zh: "一个蒙眼的人物交叉握着两把宝剑，拒绝面对一个必须做出的艰难抉择。",
    },
    keywords: {
      en: [
        "indecision",
        "stalemate",
        "avoidance",
        "difficult choice",
        "balance",
      ],
      zh: ["优柔寡断", "僵局", "逃避", "艰难抉择", "平衡"],
    },
    meaning: {
      upright: {
        en: "A difficult decision demands your attention. Remove the blindfold and gather the information needed to choose.",
        zh: "一个艰难的抉择需要你的关注。摘下眼罩，收集做出选择所需的信息。",
      },
      reversed: {
        en: "Indecision resolved, information coming to light, or moving forward after a prolonged stalemate.",
        zh: "优柔寡断得到解决、信息浮出水面，或在长期僵局后向前迈进。",
      },
    },
  },
  {
    id: "three-of-swords",
    name: { en: "Three of Swords", zh: "宝剑三" },
    arcana: "minor",
    suit: "swords",
    number: 3,
    image: { url: "/images/rider-waite/Swords03.png" },
    description: {
      en: "Three swords pierce a heart against a stormy sky, portraying heartache, grief, and emotional pain.",
      zh: "三把宝剑在暴风雨的天空下刺穿一颗心，描绘心碎、悲伤与情感痛苦。",
    },
    keywords: {
      en: ["heartbreak", "grief", "sorrow", "pain", "truth"],
      zh: ["心碎", "悲伤", "忧愁", "痛苦", "真相"],
    },
    meaning: {
      upright: {
        en: "Grief and heartache are part of the journey. Allow yourself to feel the pain fully before moving toward healing.",
        zh: "悲伤与心碎是旅途的一部分。允许自己充分感受痛苦，然后再走向疗愈。",
      },
      reversed: {
        en: "Recovery from heartbreak, releasing old wounds, or a period of sorrow coming to an end.",
        zh: "从心碎中恢复、释放旧伤，或一段悲伤时期即将结束。",
      },
    },
  },
  {
    id: "four-of-swords",
    name: { en: "Four of Swords", zh: "宝剑四" },
    arcana: "minor",
    suit: "swords",
    number: 4,
    image: { url: "/images/rider-waite/Swords04.png" },
    description: {
      en: "A knight lies in quiet repose on a tomb, with three swords on the wall and one below, inviting rest.",
      zh: "一位骑士静静地躺在墓碑上，三把宝剑悬于墙上，一把在下方，召唤着休息。",
    },
    keywords: {
      en: ["rest", "recovery", "contemplation", "sanctuary", "stillness"],
      zh: ["休息", "恢复", "沉思", "避难所", "静止"],
    },
    meaning: {
      upright: {
        en: "Rest and recuperation are needed. Step away from the conflict and allow your mind and body to heal.",
        zh: "需要休息与恢复。从冲突中退开，让你的心灵与身体得到疗愈。",
      },
      reversed: {
        en: "Returning to action after rest, or restlessness making it difficult to recover fully.",
        zh: "休息后重返行动，或焦躁不安使你难以充分恢复。",
      },
    },
  },
  {
    id: "five-of-swords",
    name: { en: "Five of Swords", zh: "宝剑五" },
    arcana: "minor",
    suit: "swords",
    number: 5,
    image: { url: "/images/rider-waite/Swords05.png" },
    description: {
      en: "A triumphant figure holds three swords while two defeated opponents walk away, raising questions about the cost of winning.",
      zh: "一个得胜的人物持着三把宝剑，而两位被击败的对手垂头走去，令人思考胜利的代价。",
    },
    keywords: {
      en: ["conflict", "defeat", "empty victory", "betrayal", "aggression"],
      zh: ["冲突", "失败", "空洞的胜利", "背叛", "攻击性"],
    },
    meaning: {
      upright: {
        en: "A victory achieved at too great a cost. Consider whether winning this battle is worth the damage to your relationships.",
        zh: "代价过高的胜利。思考赢得这场战斗是否值得对你的人际关系造成损害。",
      },
      reversed: {
        en: "Moving on after conflict, releasing grudges, or working toward reconciliation after a dispute.",
        zh: "冲突后向前迈进、释放怨恨，或在争端后努力走向和解。",
      },
    },
  },
  {
    id: "six-of-swords",
    name: { en: "Six of Swords", zh: "宝剑六" },
    arcana: "minor",
    suit: "swords",
    number: 6,
    image: { url: "/images/rider-waite/Swords06.png" },
    description: {
      en: "A ferryman guides figures through still waters, carrying swords and moving toward calmer, clearer shores.",
      zh: "一位摆渡人引导人物穿越平静的水面，携带着宝剑驶向更平静清澈的彼岸。",
    },
    keywords: {
      en: ["transition", "moving on", "recovery", "travel", "relief"],
      zh: ["过渡", "前行", "恢复", "旅行", "宽慰"],
    },
    meaning: {
      upright: {
        en: "A difficult period is ending and calmer waters lie ahead. Leave behind what weighs you down and move forward.",
        zh: "艰难时期正在结束，平静的海域就在前方。放下压垮你的事物，向前迈进。",
      },
      reversed: {
        en: "Resistance to moving on, carrying baggage into new situations, or turbulence delaying a necessary transition.",
        zh: "抗拒向前迈进、将包袱带入新处境，或动荡延误了必要的过渡。",
      },
    },
  },
  {
    id: "seven-of-swords",
    name: { en: "Seven of Swords", zh: "宝剑七" },
    arcana: "minor",
    suit: "swords",
    number: 7,
    image: { url: "/images/rider-waite/Swords07.png" },
    description: {
      en: "A figure sneaks away from a camp carrying five swords, leaving two behind, suggesting cunning and strategic retreat.",
      zh: "一个人物偷偷溜出营地带走五把宝剑，留下两把，暗示着机智与战略性撤退。",
    },
    keywords: {
      en: ["deception", "strategy", "cunning", "stealth", "evasion"],
      zh: ["欺骗", "策略", "机智", "潜行", "逃避"],
    },
    meaning: {
      upright: {
        en: "A need for strategy and discretion. Be honest about whether cunning is serving a fair purpose or enabling deception.",
        zh: "需要策略与谨慎。诚实地面对机智是否在服务公正的目的，还是在助长欺骗。",
      },
      reversed: {
        en: "Coming clean, catching deception, or abandoning a strategy that relied on dishonesty.",
        zh: "坦白承认、揭露欺骗，或放弃依赖不诚实的策略。",
      },
    },
  },
  {
    id: "eight-of-swords",
    name: { en: "Eight of Swords", zh: "宝剑八" },
    arcana: "minor",
    suit: "swords",
    number: 8,
    image: { url: "/images/rider-waite/Swords08.png" },
    description: {
      en: "A blindfolded, bound figure stands surrounded by eight swords, trapped by self-imposed limitations.",
      zh: "一个蒙眼被束缚的人物站在八把宝剑之间，困于自我设限之中。",
    },
    keywords: {
      en: [
        "restriction",
        "self-imposed limits",
        "powerlessness",
        "trapped",
        "victim mentality",
      ],
      zh: ["限制", "自我设限", "无力感", "被困", "受害者心态"],
    },
    meaning: {
      upright: {
        en: "The limitations you feel are largely self-imposed. Shift your mindset to see that freedom is closer than you think.",
        zh: "你所感受到的限制大多是自我设定的。转变思维方式，看到自由比你想象中更近。",
      },
      reversed: {
        en: "Breaking free from mental restrictions, reclaiming agency, or emerging from a period of powerlessness.",
        zh: "从心理限制中挣脱、重新夺回自主权，或走出一段无力感时期。",
      },
    },
  },
  {
    id: "nine-of-swords",
    name: { en: "Nine of Swords", zh: "宝剑九" },
    arcana: "minor",
    suit: "swords",
    number: 9,
    image: { url: "/images/rider-waite/Swords09.png" },
    description: {
      en: "A figure sits upright in bed, face buried in hands, haunted by nine swords hanging above in the darkness.",
      zh: "一个人物在床上坐起，双手掩面，被悬挂于黑暗中的九把宝剑所困扰。",
    },
    keywords: {
      en: ["anxiety", "nightmares", "worry", "mental anguish", "fear"],
      zh: ["焦虑", "噩梦", "忧虑", "心理痛苦", "恐惧"],
    },
    meaning: {
      upright: {
        en: "Anxious thoughts and fears are at their peak. Acknowledge them without letting them define reality.",
        zh: "焦虑的思绪与恐惧达到顶峰。承认它们的存在，但不要让它们定义现实。",
      },
      reversed: {
        en: "Confronting fears, releasing anxiety, or the first steps toward mental relief after a period of suffering.",
        zh: "直面恐惧、释放焦虑，或在经历一段痛苦后迈出心理解脱的第一步。",
      },
    },
  },
  {
    id: "ten-of-swords",
    name: { en: "Ten of Swords", zh: "宝剑十" },
    arcana: "minor",
    suit: "swords",
    number: 10,
    image: { url: "/images/rider-waite/Swords10.png" },
    description: {
      en: "A figure lies face down, ten swords planted in their back, marking a painful but definitive ending.",
      zh: "一个人物俯卧在地，背上插着十把宝剑，标志着一个痛苦却明确的终结。",
    },
    keywords: {
      en: ["endings", "defeat", "rock bottom", "crisis", "transformation"],
      zh: ["终结", "失败", "谷底", "危机", "蜕变"],
    },
    meaning: {
      upright: {
        en: "A painful ending has reached its lowest point. The only direction from here is up — allow this ending to clear the way.",
        zh: "痛苦的终结已达到最低点。从此只能向上——允许这个终结清除前行的道路。",
      },
      reversed: {
        en: "Beginning to recover from a painful defeat. Resist the urge to dwell in victimhood as a new dawn approaches.",
        zh: "开始从痛苦的失败中恢复。在新的曙光临近之际，抵制沉溺于受害者心态的冲动。",
      },
    },
  },
  {
    id: "page-of-swords",
    name: { en: "Page of Swords", zh: "宝剑侍者" },
    arcana: "minor",
    suit: "swords",
    number: 11,
    image: { url: "/images/rider-waite/Swords11.png" },
    description: {
      en: "A sharp-eyed youth holds a sword aloft in a windswept landscape, alert and ready to act.",
      zh: "一个眼神锐利的年轻人在风吹的旷野中高举宝剑，机警且随时准备行动。",
    },
    keywords: {
      en: [
        "curiosity",
        "vigilance",
        "communication",
        "quick thinking",
        "alertness",
      ],
      zh: ["好奇心", "警觉", "沟通", "快速思维", "机敏"],
    },
    meaning: {
      upright: {
        en: "Stay curious and sharp. Gather information and think on your feet — new ideas will serve you well right now.",
        zh: "保持好奇与敏锐。收集信息，随机应变——新的想法此刻将大有裨益。",
      },
      reversed: {
        en: "Hasty words, spreading gossip, or using intellect to wound rather than to illuminate.",
        zh: "言语轻率、散布流言，或用智识伤人而非启发他人。",
      },
    },
  },
  {
    id: "knight-of-swords",
    name: { en: "Knight of Swords", zh: "宝剑骑士" },
    arcana: "minor",
    suit: "swords",
    number: 12,
    image: { url: "/images/rider-waite/Swords12.png" },
    description: {
      en: "A bold knight charges into the wind on horseback, sword raised, driven by conviction and speed.",
      zh: "一位大胆的骑士骑马逆风冲锋，高举宝剑，由信念与速度驱动。",
    },
    keywords: {
      en: ["swift action", "determination", "drive", "ambition", "directness"],
      zh: ["迅速行动", "决心", "驱动力", "雄心", "直接"],
    },
    meaning: {
      upright: {
        en: "Move forward with determination and clarity of purpose. Your sharp mind and decisive action will cut through obstacles.",
        zh: "带着决心与明确的目标向前迈进。你敏锐的思维与果断的行动将斩断障碍。",
      },
      reversed: {
        en: "Recklessness, aggression, or charging forward without sufficient thought or consideration.",
        zh: "鲁莽、冲动，或在没有充分思考与考量的情况下冲锋向前。",
      },
    },
  },
  {
    id: "queen-of-swords",
    name: { en: "Queen of Swords", zh: "宝剑皇后" },
    arcana: "minor",
    suit: "swords",
    number: 13,
    image: { url: "/images/rider-waite/Swords13.png" },
    description: {
      en: "A composed queen sits upright on her throne, sword raised in clarity, embodying sharp intellect and direct communication.",
      zh: "一位沉稳的皇后端坐于王座上，高举宝剑象征清明，体现着敏锐的智识与直接的沟通。",
    },
    keywords: {
      en: ["clarity", "directness", "intellect", "independence", "discernment"],
      zh: ["清晰", "直接", "智识", "独立", "洞察力"],
    },
    meaning: {
      upright: {
        en: "Lead with clarity and direct communication. Your sharp intellect and honest perspective cut through confusion.",
        zh: "以清晰与直接的沟通引领。你敏锐的智识与诚实的视角能斩断困惑。",
      },
      reversed: {
        en: "Cruelty, coldness, or using intellect as a weapon rather than a tool for truth.",
        zh: "残忍、冷漠，或将智识作为武器而非追求真相的工具。",
      },
    },
  },
  {
    id: "king-of-swords",
    name: { en: "King of Swords", zh: "宝剑国王" },
    arcana: "minor",
    suit: "swords",
    number: 14,
    image: { url: "/images/rider-waite/Swords14.png" },
    description: {
      en: "A stern king sits upright on his throne holding a double-edged sword, the embodiment of reason, authority, and truth.",
      zh: "一位严肃的国王端坐于王座上，手持双刃宝剑，是理性、权威与真相的化身。",
    },
    keywords: {
      en: [
        "truth",
        "authority",
        "intellectual power",
        "ethics",
        "clear judgment",
      ],
      zh: ["真相", "权威", "智识力量", "道德", "清晰判断"],
    },
    meaning: {
      upright: {
        en: "Make decisions based on clear, ethical reasoning. Your authority and intellectual mastery command respect.",
        zh: "基于清晰、合乎道德的推理做出决策。你的权威与智识掌握令人肃然起敬。",
      },
      reversed: {
        en: "Authoritarian behavior, manipulation through intellect, or harsh judgment without compassion.",
        zh: "威权行为、利用智识操控他人，或缺乏慈悲的严苛判断。",
      },
    },
  },
];
