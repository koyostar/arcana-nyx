import type { TarotCard } from "../types/card.js";

export const majorArcana: TarotCard[] = [
  {
    id: "the-fool",
    name: {
      en: "The Fool",
      zh: "愚者",
    },
    arcana: "major",
    suit: null,
    number: 0,
    image: {
      url: "/images/rider-waite/00-TheFool.png",
    },
    description: {
      en: "A carefree traveler steps toward the edge of a cliff, guided by faith and curiosity.",
      zh: "一位无忧无虑的旅人正迈向悬崖边缘，被信念与好奇心引领。",
    },
    keywords: {
      en: ["beginnings", "innocence", "spontaneity", "faith"],
      zh: ["新的开始", "纯真", "自发", "信念"],
    },
    meaning: {
      upright: {
        en: "A new beginning, open-hearted curiosity, and a willingness to step into the unknown.",
        zh: "象征新的开始、敞开心扉的好奇心，以及愿意踏入未知的勇气。",
      },
      reversed: {
        en: "Recklessness, hesitation, or starting something without enough grounding.",
        zh: "象征鲁莽、犹豫，或在准备不足的情况下贸然开始。",
      },
    },
  },
  {
    id: "the-magician",
    name: {
      en: "The Magician",
      zh: "魔术师",
    },
    arcana: "major",
    suit: null,
    number: 1,
    image: {
      url: "/images/rider-waite/01-TheMagician.png",
    },
    description: {
      en: "A figure channels energy between heaven and earth, using tools of the four elements to create.",
      zh: "一位人物连接天地之力，运用四元素的工具进行创造。",
    },
    keywords: {
      en: ["manifestation", "power", "action", "skill", "resourcefulness"],
      zh: ["显化", "力量", "行动", "技巧", "资源运用"],
    },
    meaning: {
      upright: {
        en: "You have the power and tools to manifest your desires. Take initiative and act with confidence.",
        zh: "你拥有实现愿望的能力与资源。主动出击，充满信心地行动。",
      },
      reversed: {
        en: "Potential is being blocked or misused. Reassess your intentions and regain focus.",
        zh: "潜力被阻碍或误用。需要重新审视你的动机并找回专注。",
      },
    },
  },
  {
    id: "the-high-priestess",
    name: {
      en: "The High Priestess",
      zh: "女祭司",
    },
    arcana: "major",
    suit: null,
    number: 2,
    image: {
      url: "/images/rider-waite/02-TheHighPriestess.png",
    },
    description: {
      en: "A serene guardian of hidden knowledge sits between pillars, embodying intuition and mystery.",
      zh: "一位守护隐秘智慧的女性静坐于两柱之间，象征直觉与神秘。",
    },
    keywords: {
      en: ["intuition", "mystery", "subconscious", "inner voice", "wisdom"],
      zh: ["直觉", "神秘", "潜意识", "内在声音", "智慧"],
    },
    meaning: {
      upright: {
        en: "Trust your intuition and listen to your inner voice. Not everything is meant to be revealed yet.",
        zh: "相信你的直觉，倾听内在的声音。有些事情尚未到揭示的时候。",
      },
      reversed: {
        en: "You may be ignoring your intuition or feeling disconnected from your inner self.",
        zh: "你可能忽略了自己的直觉，或与内在自我失去连接。",
      },
    },
  },
  {
    id: "the-empress",
    name: { en: "The Empress", zh: "女皇" },
    arcana: "major",
    suit: null,
    number: 3,
    image: { url: "/images/rider-waite/03-TheEmpress.png" },
    description: {
      en: "A fertile empress sits on a throne surrounded by nature, symbolizing abundance and creation.",
      zh: "一位丰饶的女皇坐于自然环绕的王座上，象征富足与创造。",
    },
    keywords: {
      en: ["fertility", "abundance", "nature", "nurturing", "creation"],
      zh: ["生育", "丰盛", "自然", "养育", "创造"],
    },
    meaning: {
      upright: {
        en: "Embrace creativity, abundance, and the nurturing aspects of life. Growth and fertility are at their peak.",
        zh: "拥抱创造力、丰盛与生活中的滋养面向。成长与丰饶达到顶峰。",
      },
      reversed: {
        en: "Creative block, dependence, or neglect of self-care. Reassess your relationship with nature and growth.",
        zh: "创造力受阻、依赖他人，或忽视自我照顾。重新审视你与自然和成长的关系。",
      },
    },
  },
  {
    id: "the-emperor",
    name: { en: "The Emperor", zh: "皇帝" },
    arcana: "major",
    suit: null,
    number: 4,
    image: { url: "/images/rider-waite/04-TheEmperor.png" },
    description: {
      en: "A commanding emperor sits on a stone throne, embodying authority, structure, and the power of reason.",
      zh: "一位威严的皇帝端坐于石制王座上，体现权威、秩序与理性的力量。",
    },
    keywords: {
      en: ["authority", "structure", "stability", "leadership", "discipline"],
      zh: ["权威", "秩序", "稳定", "领导力", "纪律"],
    },
    meaning: {
      upright: {
        en: "Take charge and establish order. Discipline and structure will help you achieve your goals.",
        zh: "主动掌控并建立秩序。纪律与结构将帮助你实现目标。",
      },
      reversed: {
        en: "Inflexibility, domination, or lack of self-control. Consider whether authority is being misused.",
        zh: "僵化、控制欲过强，或缺乏自律。思考权威是否被误用。",
      },
    },
  },
  {
    id: "the-hierophant",
    name: { en: "The Hierophant", zh: "教皇" },
    arcana: "major",
    suit: null,
    number: 5,
    image: { url: "/images/rider-waite/05-TheHierophant.png" },
    description: {
      en: "A spiritual leader presides between two pillars, representing tradition, guidance, and institutional wisdom.",
      zh: "一位精神领袖端坐于两柱之间，象征传统、引导与制度智慧。",
    },
    keywords: {
      en: ["tradition", "guidance", "belief", "institution", "conformity"],
      zh: ["传统", "引导", "信仰", "制度", "规范"],
    },
    meaning: {
      upright: {
        en: "Seek wisdom from established traditions and trusted mentors. Shared beliefs bring strength.",
        zh: "从传统智慧与信任的导师中寻求指引。遵循共同信仰能带来力量。",
      },
      reversed: {
        en: "Challenging convention or spiritual rebellion. Break free from dogma that no longer serves you.",
        zh: "挑战传统或精神上的反叛。挣脱不再适合你的教条束缚。",
      },
    },
  },
  {
    id: "the-lovers",
    name: { en: "The Lovers", zh: "恋人" },
    arcana: "major",
    suit: null,
    number: 6,
    image: { url: "/images/rider-waite/06-TheLovers.png" },
    description: {
      en: "Two figures stand beneath an angel, representing love, union, and the power of aligned values and choices.",
      zh: "两个人物站在天使之下，象征爱、结合以及价值观一致的力量与抉择。",
    },
    keywords: {
      en: ["love", "union", "choice", "values", "alignment"],
      zh: ["爱", "结合", "选择", "价值观", "一致性"],
    },
    meaning: {
      upright: {
        en: "A meaningful connection or important choice awaits. Align your actions with your true values.",
        zh: "重要的连结或抉择即将来临。让你的行动与真实价值观保持一致。",
      },
      reversed: {
        en: "Disharmony, poor choices, or misaligned values. Reflect on what truly matters to you.",
        zh: "不和谐、错误的选择，或价值观偏差。反思对你真正重要的事物。",
      },
    },
  },
  {
    id: "the-chariot",
    name: { en: "The Chariot", zh: "战车" },
    arcana: "major",
    suit: null,
    number: 7,
    image: { url: "/images/rider-waite/07-TheChariot.png" },
    description: {
      en: "A warrior drives a chariot pulled by opposing forces, mastering conflict through willpower and determination.",
      zh: "一位勇士驾驭着由相对力量拉动的战车，凭借意志力与决心掌控冲突。",
    },
    keywords: {
      en: ["willpower", "control", "victory", "determination", "ambition"],
      zh: ["意志力", "掌控", "胜利", "决心", "雄心"],
    },
    meaning: {
      upright: {
        en: "Move forward with confidence and determination. Harness opposing forces and steer them toward success.",
        zh: "充满信心与决心地向前迈进。驾驭相反的力量，引导它们走向成功。",
      },
      reversed: {
        en: "Lack of control, aggression, or loss of direction. Re-center your focus before moving forward.",
        zh: "失去控制、冲动鲁莽，或方向迷失。在前进之前先找回内心的专注。",
      },
    },
  },
  {
    id: "strength",
    name: { en: "Strength", zh: "力量" },
    arcana: "major",
    suit: null,
    number: 8,
    image: { url: "/images/rider-waite/08-Strength.png" },
    description: {
      en: "A gentle figure tames a lion with calm compassion, representing inner strength over brute force.",
      zh: "一位温柔的人物以平静的慈悲驯服一头狮子，象征内在力量胜于蛮力。",
    },
    keywords: {
      en: ["courage", "inner strength", "patience", "compassion", "resilience"],
      zh: ["勇气", "内在力量", "耐心", "慈悲", "韧性"],
    },
    meaning: {
      upright: {
        en: "Draw on your inner strength and compassion. Patience and quiet courage can overcome any obstacle.",
        zh: "发挥你的内在力量与慈悲。耐心与沉静的勇气能克服一切障碍。",
      },
      reversed: {
        en: "Self-doubt, weakness, or loss of inner resolve. Reconnect with your inner courage and resilience.",
        zh: "自我怀疑、软弱，或失去内在决心。重新连结你的内在勇气与韧性。",
      },
    },
  },
  {
    id: "the-hermit",
    name: { en: "The Hermit", zh: "隐士" },
    arcana: "major",
    suit: null,
    number: 9,
    image: { url: "/images/rider-waite/09-TheHermit.png" },
    description: {
      en: "A solitary figure holds a lantern aloft on a mountaintop, guiding others through the light of inner wisdom.",
      zh: "一位孤独的人物在山顶高举灯笼，以内在智慧之光引导他人。",
    },
    keywords: {
      en: ["solitude", "introspection", "guidance", "wisdom", "soul-searching"],
      zh: ["孤独", "内省", "引导", "智慧", "灵魂探索"],
    },
    meaning: {
      upright: {
        en: "Withdraw from distractions and seek inner truth. A period of reflection will illuminate your path.",
        zh: "远离干扰，寻求内在真相。一段反思的时期将照亮你的道路。",
      },
      reversed: {
        en: "Isolation, loneliness, or refusing to accept help. Consider whether withdrawal has become avoidance.",
        zh: "孤立、孤独，或拒绝接受帮助。思考退隐是否已变成逃避。",
      },
    },
  },
  {
    id: "wheel-of-fortune",
    name: { en: "Wheel of Fortune", zh: "命运之轮" },
    arcana: "major",
    suit: null,
    number: 10,
    image: { url: "/images/rider-waite/10-WheelOfFortune.png" },
    description: {
      en: "A great wheel turns in the cosmos, marked with symbols of change, cycles, and the eternal flow of fate.",
      zh: "一个巨大的轮子在宇宙中旋转，刻有变化、循环与命运永恒流转的符号。",
    },
    keywords: {
      en: ["cycles", "fate", "turning point", "luck", "destiny"],
      zh: ["循环", "命运", "转折点", "运气", "天命"],
    },
    meaning: {
      upright: {
        en: "A fortunate turning point is near. Embrace the cycles of life and trust in the flow of destiny.",
        zh: "幸运的转折点即将到来。接受生命的循环，相信命运的流转。",
      },
      reversed: {
        en: "Bad luck, resistance to change, or clinging to the past. Let go and allow the wheel to turn.",
        zh: "厄运、抗拒改变，或执着于过去。放手让命运之轮继续转动。",
      },
    },
  },
  {
    id: "justice",
    name: { en: "Justice", zh: "正义" },
    arcana: "major",
    suit: null,
    number: 11,
    image: { url: "/images/rider-waite/11-Justice.png" },
    description: {
      en: "A robed figure holds scales and a sword, embodying impartial truth, fairness, and the law of cause and effect.",
      zh: "一位穿袍的人物手持天平与宝剑，体现公正的真相、公平与因果法则。",
    },
    keywords: {
      en: [
        "fairness",
        "truth",
        "cause and effect",
        "accountability",
        "balance",
      ],
      zh: ["公平", "真相", "因果", "责任", "平衡"],
    },
    meaning: {
      upright: {
        en: "Truth and fairness will prevail. Take responsibility for your actions and trust in just outcomes.",
        zh: "真相与公平终将胜出。为自己的行为负责，相信公正的结果。",
      },
      reversed: {
        en: "Injustice, dishonesty, or avoiding accountability. Face the truth and make amends where needed.",
        zh: "不公正、不诚实，或逃避责任。面对真相，在需要的地方做出补救。",
      },
    },
  },
  {
    id: "the-hanged-man",
    name: { en: "The Hanged Man", zh: "倒吊人" },
    arcana: "major",
    suit: null,
    number: 12,
    image: { url: "/images/rider-waite/12-TheHangedMan.png" },
    description: {
      en: "A figure hangs suspended from a tree by one foot, voluntarily pausing to gain a new perspective on life.",
      zh: "一个人物单脚悬挂于树上，自愿暂停以从新的角度审视生命。",
    },
    keywords: {
      en: ["pause", "surrender", "new perspective", "waiting", "sacrifice"],
      zh: ["暂停", "臣服", "新视角", "等待", "牺牲"],
    },
    meaning: {
      upright: {
        en: "Pause and surrender to what is. Releasing control now will reveal a perspective you couldn't see before.",
        zh: "暂停并臣服于当下。此刻放手将揭示你之前无法看到的视角。",
      },
      reversed: {
        en: "Stagnation, martyrdom, or refusing to surrender. Ask yourself what you are holding on to unnecessarily.",
        zh: "停滞、殉道主义，或拒绝臣服。问问自己究竟在无谓地执着于什么。",
      },
    },
  },
  {
    id: "death",
    name: { en: "Death", zh: "死神" },
    arcana: "major",
    suit: null,
    number: 13,
    image: { url: "/images/rider-waite/13-Death.png" },
    description: {
      en: "A skeletal figure on horseback moves through the world, heralding transformation, endings, and new beginnings.",
      zh: "一个骑马的骷髅身影穿越世界，预示着蜕变、终结与新的开始。",
    },
    keywords: {
      en: ["transformation", "endings", "change", "transition", "release"],
      zh: ["蜕变", "终结", "改变", "过渡", "释放"],
    },
    meaning: {
      upright: {
        en: "An inevitable ending paves the way for transformation. Release what no longer serves you to make space for new growth.",
        zh: "不可避免的终结为蜕变开辟道路。放下不再有益于你的一切，为新的成长腾出空间。",
      },
      reversed: {
        en: "Resistance to change, stagnation, or fear of endings. Accepting change is the only way to move forward.",
        zh: "抗拒改变、停滞不前，或对终结的恐惧。接受改变是前进的唯一方式。",
      },
    },
  },
  {
    id: "temperance",
    name: { en: "Temperance", zh: "节制" },
    arcana: "major",
    suit: null,
    number: 14,
    image: { url: "/images/rider-waite/14-Temperance.png" },
    description: {
      en: "An angelic figure pours water between two cups, perfectly balancing opposing energies with patience and grace.",
      zh: "一位天使形象的人物在两个杯子之间倒水，以耐心与优雅完美地平衡对立的能量。",
    },
    keywords: {
      en: ["balance", "moderation", "patience", "purpose", "harmony"],
      zh: ["平衡", "适度", "耐心", "目的", "和谐"],
    },
    meaning: {
      upright: {
        en: "Practice patience and moderation. Blending opposites with care will lead you to harmony and purpose.",
        zh: "修炼耐心与适度。谨慎地融合对立面将引领你走向和谐与目标。",
      },
      reversed: {
        en: "Imbalance, excess, or lack of long-term vision. Slow down and restore equilibrium in all areas of life.",
        zh: "失衡、过度，或缺乏长远眼光。放慢脚步，在生活各方面恢复平衡。",
      },
    },
  },
  {
    id: "the-devil",
    name: { en: "The Devil", zh: "恶魔" },
    arcana: "major",
    suit: null,
    number: 15,
    image: { url: "/images/rider-waite/15-TheDevil.png" },
    description: {
      en: "A horned figure looms over two chained humans who are bound by their own attachments and illusions.",
      zh: "一个长角的人物俯视着两个被自身执着与幻象所束缚的人。",
    },
    keywords: {
      en: ["bondage", "materialism", "shadow self", "addiction", "entrapment"],
      zh: ["束缚", "物质主义", "阴暗面", "成瘾", "陷阱"],
    },
    meaning: {
      upright: {
        en: "Be honest about what is holding you back. The chains of materialism, fear, or habit can be broken with awareness.",
        zh: "诚实面对那些束缚你的事物。物质主义、恐惧或习惯的枷锁可以通过觉知来打破。",
      },
      reversed: {
        en: "Breaking free, releasing bad habits, or reclaiming power. The path to liberation begins with self-awareness.",
        zh: "挣脱束缚、摒弃坏习惯，或夺回自主权。解放之路始于自我觉知。",
      },
    },
  },
  {
    id: "the-tower",
    name: { en: "The Tower", zh: "塔" },
    arcana: "major",
    suit: null,
    number: 16,
    image: { url: "/images/rider-waite/16-TheTower.png" },
    description: {
      en: "Lightning strikes a tower, sending figures tumbling as false structures are suddenly destroyed by an unstoppable force.",
      zh: "闪电击中一座塔楼，人物随之坠落，虚假的建构在不可抗拒的力量下骤然崩塌。",
    },
    keywords: {
      en: ["sudden change", "upheaval", "chaos", "revelation", "liberation"],
      zh: ["突变", "激变", "混乱", "启示", "解放"],
    },
    meaning: {
      upright: {
        en: "Sudden disruption clears away false foundations. Though painful, this upheaval ultimately liberates you.",
        zh: "突然的颠覆清除了虚假的基础。尽管痛苦，这场激变最终将解放你。",
      },
      reversed: {
        en: "Avoiding disaster, delaying the inevitable, or fearing necessary change. The collapse will come regardless.",
        zh: "回避灾难、拖延必然的到来，或惧怕必要的改变。崩塌终将到来，无可避免。",
      },
    },
  },
  {
    id: "the-star",
    name: { en: "The Star", zh: "星星" },
    arcana: "major",
    suit: null,
    number: 17,
    image: { url: "/images/rider-waite/17-TheStar.png" },
    description: {
      en: "A figure kneels by water under a brilliant star-filled sky, pouring energy into the earth and sea with hopeful grace.",
      zh: "一个人物在繁星满天的天空下跪于水边，满怀希望地将能量倾注于大地与海洋。",
    },
    keywords: {
      en: ["hope", "renewal", "serenity", "inspiration", "faith"],
      zh: ["希望", "更新", "宁静", "灵感", "信念"],
    },
    meaning: {
      upright: {
        en: "Hope and healing are available to you. Open your heart to inspiration and trust that the universe is guiding you.",
        zh: "希望与疗愈触手可及。敞开心扉迎接灵感，相信宇宙正在引领你。",
      },
      reversed: {
        en: "Despair, lack of faith, or disconnection from hope. Reconnect with your inner light and allow healing to begin.",
        zh: "绝望、缺乏信念，或与希望失去连结。重新连结内在的光芒，让疗愈开始。",
      },
    },
  },
  {
    id: "the-moon",
    name: { en: "The Moon", zh: "月亮" },
    arcana: "major",
    suit: null,
    number: 18,
    image: { url: "/images/rider-waite/18-TheMoon.png" },
    description: {
      en: "Under a full moon, creatures emerge from the deep as a path winds between two towers, evoking illusion and the unconscious.",
      zh: "在满月之下，生物从深处浮现，一条小径蜿蜒于两塔之间，唤起幻象与潜意识的意象。",
    },
    keywords: {
      en: ["illusion", "fear", "subconscious", "confusion", "intuition"],
      zh: ["幻象", "恐惧", "潜意识", "困惑", "直觉"],
    },
    meaning: {
      upright: {
        en: "Things may not be as they appear. Trust your intuition to navigate the shadows and unconscious fears.",
        zh: "事物可能并非表面所示。相信你的直觉来穿越阴影与潜意识的恐惧。",
      },
      reversed: {
        en: "Confusion lifts and clarity emerges. Hidden truths are coming to light and fears are being released.",
        zh: "困惑消散，清明浮现。隐藏的真相正在浮出水面，恐惧正在被释放。",
      },
    },
  },
  {
    id: "the-sun",
    name: { en: "The Sun", zh: "太阳" },
    arcana: "major",
    suit: null,
    number: 19,
    image: { url: "/images/rider-waite/19-TheSun.png" },
    description: {
      en: "A radiant sun shines over a joyful child on horseback, surrounded by sunflowers symbolizing vitality and abundance.",
      zh: "灿烂的太阳照耀着一个骑马的快乐孩子，向日葵环绕四周，象征活力与丰盛。",
    },
    keywords: {
      en: ["joy", "success", "vitality", "positivity", "clarity"],
      zh: ["喜悦", "成功", "活力", "积极", "清晰"],
    },
    meaning: {
      upright: {
        en: "Joy, success, and vitality are yours. Step into the light with confidence and celebrate your achievements.",
        zh: "喜悦、成功与活力属于你。满怀信心地走进光芒，庆祝你的成就。",
      },
      reversed: {
        en: "Temporary setbacks, dimmed optimism, or overconfidence. The sun still shines — allow its warmth to reach you.",
        zh: "暂时的挫折、减退的乐观，或过度自信。太阳依然照耀——让它的温暖触达你。",
      },
    },
  },
  {
    id: "judgement",
    name: { en: "Judgement", zh: "审判" },
    arcana: "major",
    suit: null,
    number: 20,
    image: { url: "/images/rider-waite/20-Judgement.png" },
    description: {
      en: "An angel's trumpet calls the dead to rise, symbolizing a moment of reckoning, renewal, and answering a higher calling.",
      zh: "天使的号角召唤死者起身，象征审判的时刻、更新与回应更高使命的呼唤。",
    },
    keywords: {
      en: ["reflection", "reckoning", "renewal", "calling", "transformation"],
      zh: ["反思", "清算", "更新", "使命", "蜕变"],
    },
    meaning: {
      upright: {
        en: "A higher calling is summoning you. Reflect on your past actions and embrace a powerful transformation.",
        zh: "更高的使命在召唤你。反思过去的行为，接受强大的蜕变。",
      },
      reversed: {
        en: "Self-doubt, fear of judgment, or ignoring an inner calling. Do not let past regrets prevent your awakening.",
        zh: "自我怀疑、对审判的恐惧，或忽视内在的召唤。不要让过去的遗憾阻止你的觉醒。",
      },
    },
  },
  {
    id: "the-world",
    name: { en: "The World", zh: "世界" },
    arcana: "major",
    suit: null,
    number: 21,
    image: { url: "/images/rider-waite/21-TheWorld.png" },
    description: {
      en: "A dancer surrounded by a laurel wreath floats between four elemental symbols, embodying wholeness and completion.",
      zh: "一位舞者被月桂花环环绕，漂浮于四个元素符号之间，体现圆满与完整。",
    },
    keywords: {
      en: [
        "completion",
        "integration",
        "wholeness",
        "accomplishment",
        "fulfillment",
      ],
      zh: ["完成", "整合", "圆满", "成就", "满足感"],
    },
    meaning: {
      upright: {
        en: "You have reached a point of completion and integration. Celebrate the fullness of this cycle before stepping into the next.",
        zh: "你已达到完成与整合的时刻。在踏入下一个循环之前，庆祝这个周期的圆满。",
      },
      reversed: {
        en: "Incompletion, loose ends, or resistance to closure. Tie up what remains and allow yourself to be truly finished.",
        zh: "未竟之事、遗留的问题，或抗拒结束。处理剩余的事情，允许自己真正完成。",
      },
    },
  },
];
