import type { TarotCard } from "../types/card.js";

export const cupsCards: TarotCard[] = [
  {
    id: "ace-of-cups",
    name: { en: "Ace of Cups", zh: "圣杯王牌" },
    arcana: "minor",
    suit: "cups",
    number: 1,
    image: { url: "/images/rider-waite/Cups01.png" },
    description: {
      en: "A hand emerges from the clouds holding an overflowing chalice, offering the gift of emotional abundance.",
      zh: "一只手从云中伸出，握着一个溢满的圣杯，赐予情感丰盈的礼物。",
    },
    keywords: {
      en: [
        "new love",
        "emotional beginning",
        "intuition",
        "compassion",
        "overflow",
      ],
      zh: ["新爱", "情感开端", "直觉", "慈悲", "溢满"],
    },
    meaning: {
      upright: {
        en: "The beginning of love, emotional fulfillment, or deep intuition. Open your heart to what is being offered.",
        zh: "爱情、情感满足或深刻直觉的开端。敞开心扉接受正在被给予的事物。",
      },
      reversed: {
        en: "Emotional blockage, repressed feelings, or an opportunity for love that is being overlooked.",
        zh: "情感阻塞、压抑的感受，或被忽视的爱的机会。",
      },
    },
  },
  {
    id: "two-of-cups",
    name: { en: "Two of Cups", zh: "圣杯二" },
    arcana: "minor",
    suit: "cups",
    number: 2,
    image: { url: "/images/rider-waite/Cups02.png" },
    description: {
      en: "Two figures exchange cups in a gesture of mutual affection and partnership.",
      zh: "两个人物在互致爱意与伙伴关系的姿态中交换圣杯。",
    },
    keywords: {
      en: [
        "partnership",
        "mutual attraction",
        "connection",
        "harmony",
        "unity",
      ],
      zh: ["伙伴关系", "相互吸引", "连结", "和谐", "合一"],
    },
    meaning: {
      upright: {
        en: "A meaningful partnership or connection is forming. Shared values and mutual respect create a powerful bond.",
        zh: "一段有意义的伙伴关系或连结正在形成。共同的价值观与相互尊重创造了强大的纽带。",
      },
      reversed: {
        en: "Imbalance in a relationship, mismatched energies, or disconnection between partners.",
        zh: "关系中的失衡、不相符的能量，或伴侣之间的疏离。",
      },
    },
  },
  {
    id: "three-of-cups",
    name: { en: "Three of Cups", zh: "圣杯三" },
    arcana: "minor",
    suit: "cups",
    number: 3,
    image: { url: "/images/rider-waite/Cups03.png" },
    description: {
      en: "Three figures raise their cups in joyful celebration, honoring friendship and communal abundance.",
      zh: "三个人物举杯欢庆，颂扬友谊与共同的丰盛。",
    },
    keywords: {
      en: ["celebration", "friendship", "community", "abundance", "joy"],
      zh: ["庆祝", "友谊", "社群", "丰盛", "喜悦"],
    },
    meaning: {
      upright: {
        en: "A time of celebration, friendship, and communal joy. Share your abundance with those who matter most.",
        zh: "庆祝、友谊与共同喜悦的时光。与最重要的人分享你的丰盛。",
      },
      reversed: {
        en: "Overindulgence, gossip, or isolation from community.",
        zh: "过度放纵、流言蜚语，或与社群的孤立。",
      },
    },
  },
  {
    id: "four-of-cups",
    name: { en: "Four of Cups", zh: "圣杯四" },
    arcana: "minor",
    suit: "cups",
    number: 4,
    image: { url: "/images/rider-waite/Cups04.png" },
    description: {
      en: "A figure sits contemplatively under a tree, unaware of the cup being offered from a cloud.",
      zh: "一个人物沉思地坐于树下，未察觉云中伸出的圣杯。",
    },
    keywords: {
      en: [
        "contemplation",
        "apathy",
        "reevaluation",
        "withdrawal",
        "missed opportunity",
      ],
      zh: ["沉思", "冷漠", "重新评估", "退隐", "错失机会"],
    },
    meaning: {
      upright: {
        en: "A period of introspection and reassessment. Be careful not to miss new opportunities through apathy.",
        zh: "内省与重新评估的时期。注意不要因冷漠而错失新的机会。",
      },
      reversed: {
        en: "Renewed motivation, readiness to engage, or emerging from a period of withdrawal.",
        zh: "重新燃起的动力、准备好参与，或从退隐期中重新走出。",
      },
    },
  },
  {
    id: "five-of-cups",
    name: { en: "Five of Cups", zh: "圣杯五" },
    arcana: "minor",
    suit: "cups",
    number: 5,
    image: { url: "/images/rider-waite/Cups05.png" },
    description: {
      en: "A cloaked figure mourns over three spilled cups while ignoring two still standing.",
      zh: "一个披着斗篷的人物为三个打翻的杯子悲痛，却忽视了仍然矗立的两个。",
    },
    keywords: {
      en: ["loss", "grief", "regret", "disappointment", "resilience"],
      zh: ["失落", "悲伤", "遗憾", "失望", "韧性"],
    },
    meaning: {
      upright: {
        en: "Focus on what remains rather than what has been lost. Grief is valid, but look also to what can still nourish you.",
        zh: "关注剩余的事物，而不是已经失去的。悲伤是真实的，但也要看到仍能滋养你的东西。",
      },
      reversed: {
        en: "Moving forward, releasing grief, or beginning to see the silver lining after a period of loss.",
        zh: "向前迈进、释放悲伤，或在经历失落之后开始看到一线希望。",
      },
    },
  },
  {
    id: "six-of-cups",
    name: { en: "Six of Cups", zh: "圣杯六" },
    arcana: "minor",
    suit: "cups",
    number: 6,
    image: { url: "/images/rider-waite/Cups06.png" },
    description: {
      en: "A child offers flowers in cups to another, evoking nostalgia, innocence, and the gifts of the past.",
      zh: "一个孩子将花朵盛在杯中赠予他人，唤起对过去的怀念、纯真与礼物。",
    },
    keywords: {
      en: ["nostalgia", "childhood", "innocence", "reunion", "generosity"],
      zh: ["怀旧", "童年", "纯真", "重逢", "慷慨"],
    },
    meaning: {
      upright: {
        en: "Reconnect with the innocence and joy of the past. A reunion or gift from the past may appear.",
        zh: "重新连结过去的纯真与喜悦。来自过去的重逢或礼物可能会出现。",
      },
      reversed: {
        en: "Being stuck in the past, over-idealizing childhood, or releasing old patterns to embrace the present.",
        zh: "困于过去、过度美化童年，或释放旧有模式以拥抱当下。",
      },
    },
  },
  {
    id: "seven-of-cups",
    name: { en: "Seven of Cups", zh: "圣杯七" },
    arcana: "minor",
    suit: "cups",
    number: 7,
    image: { url: "/images/rider-waite/Cups07.png" },
    description: {
      en: "A silhouette gazes upon seven cups filled with fantastical visions and dreams floating in the clouds.",
      zh: "一个剪影凝视着七个充满奇幻幻象与梦境的圣杯，漂浮在云间。",
    },
    keywords: {
      en: ["fantasy", "illusion", "choices", "wishful thinking", "confusion"],
      zh: ["幻想", "幻象", "选择", "痴心妄想", "困惑"],
    },
    meaning: {
      upright: {
        en: "Many options lie before you, but not all are what they seem. Clarity of intention is needed to choose wisely.",
        zh: "许多选择摆在你面前，但并非所有都如表面所示。需要清晰的意图才能做出明智选择。",
      },
      reversed: {
        en: "Cutting through illusion, making a clear choice, or grounding dreams in reality.",
        zh: "穿透幻象、做出清晰的选择，或将梦想落实于现实。",
      },
    },
  },
  {
    id: "eight-of-cups",
    name: { en: "Eight of Cups", zh: "圣杯八" },
    arcana: "minor",
    suit: "cups",
    number: 8,
    image: { url: "/images/rider-waite/Cups08.png" },
    description: {
      en: "A figure walks away from eight stacked cups toward distant mountains, seeking deeper meaning.",
      zh: "一个人物离开八个叠放的圣杯，走向远处的山脉，寻求更深层的意义。",
    },
    keywords: {
      en: [
        "withdrawal",
        "seeking deeper meaning",
        "abandonment",
        "spiritual journey",
      ],
      zh: ["退隐", "寻求深层意义", "离弃", "精神旅程"],
    },
    meaning: {
      upright: {
        en: "Leave behind what no longer nourishes you in search of greater purpose and authentic fulfillment.",
        zh: "放下不再滋养你的事物，去寻求更崇高的目标与真实的满足。",
      },
      reversed: {
        en: "Fear of walking away, returning to the familiar, or reconsidering an abandonment.",
        zh: "害怕离开、回归熟悉的环境，或重新考虑是否要放弃某件事。",
      },
    },
  },
  {
    id: "nine-of-cups",
    name: { en: "Nine of Cups", zh: "圣杯九" },
    arcana: "minor",
    suit: "cups",
    number: 9,
    image: { url: "/images/rider-waite/Cups09.png" },
    description: {
      en: "A satisfied figure sits before nine gleaming cups, symbolizing contentment and the fulfillment of wishes.",
      zh: "一个满足的人物端坐于九个闪亮圣杯前，象征满足与愿望的实现。",
    },
    keywords: {
      en: [
        "wishes fulfilled",
        "contentment",
        "satisfaction",
        "emotional well-being",
        "gratitude",
      ],
      zh: ["愿望成真", "满足", "心满意足", "情感健康", "感恩"],
    },
    meaning: {
      upright: {
        en: "A wish is coming true. Savor this moment of contentment and emotional abundance.",
        zh: "愿望即将成真。好好享受这份满足与情感丰盈的时刻。",
      },
      reversed: {
        en: "Complacency, greed, or a wish fulfilled that brings unexpected emptiness.",
        zh: "自满、贪婪，或愿望实现后带来意想不到的空虚感。",
      },
    },
  },
  {
    id: "ten-of-cups",
    name: { en: "Ten of Cups", zh: "圣杯十" },
    arcana: "minor",
    suit: "cups",
    number: 10,
    image: { url: "/images/rider-waite/Cups10.png" },
    description: {
      en: "A joyful family stands beneath a rainbow of cups, celebrating lasting happiness and emotional harmony.",
      zh: "一个快乐的家庭站在一道圣杯彩虹下，庆祝持久的幸福与情感和谐。",
    },
    keywords: {
      en: ["happiness", "family", "harmony", "fulfillment", "lasting joy"],
      zh: ["幸福", "家庭", "和谐", "满足", "持久的喜悦"],
    },
    meaning: {
      upright: {
        en: "Deep and lasting emotional fulfillment. Family, home, and relationships are aligned with love and harmony.",
        zh: "深刻而持久的情感满足。家庭、家园与人际关系在爱与和谐中融洽共处。",
      },
      reversed: {
        en: "Broken relationships, family discord, or an illusion of happiness concealing deeper dissatisfaction.",
        zh: "破裂的关系、家庭不和，或掩盖更深层不满的幸福假象。",
      },
    },
  },
  {
    id: "page-of-cups",
    name: { en: "Page of Cups", zh: "圣杯侍者" },
    arcana: "minor",
    suit: "cups",
    number: 11,
    image: { url: "/images/rider-waite/Cups11.png" },
    description: {
      en: "A youthful figure gazes curiously at a fish emerging from a cup, open to creative and emotional messages.",
      zh: "一个年轻的人物好奇地凝视着从圣杯中浮现的鱼，对创意与情感信息保持开放。",
    },
    keywords: {
      en: [
        "creative intuition",
        "curiosity",
        "emotional messages",
        "imagination",
        "sensitivity",
      ],
      zh: ["创意直觉", "好奇心", "情感信息", "想象力", "敏感"],
    },
    meaning: {
      upright: {
        en: "Creative inspiration and emotional messages are arriving. Stay open and curious to what your heart is expressing.",
        zh: "创意灵感与情感信息正在到来。保持开放与好奇，倾听你心中所表达的一切。",
      },
      reversed: {
        en: "Emotional immaturity, creative blocks, or a tendency toward daydreaming without follow-through.",
        zh: "情感不成熟、创意受阻，或倾向于白日梦却缺乏实际行动。",
      },
    },
  },
  {
    id: "knight-of-cups",
    name: { en: "Knight of Cups", zh: "圣杯骑士" },
    arcana: "minor",
    suit: "cups",
    number: 12,
    image: { url: "/images/rider-waite/Cups12.png" },
    description: {
      en: "A knight on horseback holds forth a cup, advancing with romantic idealism and emotional grace.",
      zh: "一位骑士手持圣杯骑马前行，带着浪漫的理想主义与情感的优雅。",
    },
    keywords: {
      en: [
        "romance",
        "idealism",
        "emotional pursuit",
        "charm",
        "following the heart",
      ],
      zh: ["浪漫", "理想主义", "情感追求", "魅力", "随心而行"],
    },
    meaning: {
      upright: {
        en: "Follow your heart with grace and charm. A romantic, artistic, or emotional pursuit beckons.",
        zh: "以优雅与魅力随心而行。浪漫、艺术或情感上的追求在向你招手。",
      },
      reversed: {
        en: "Moodiness, unrealistic expectations, or emotional manipulation.",
        zh: "情绪化、不切实际的期望，或情感操控。",
      },
    },
  },
  {
    id: "queen-of-cups",
    name: { en: "Queen of Cups", zh: "圣杯皇后" },
    arcana: "minor",
    suit: "cups",
    number: 13,
    image: { url: "/images/rider-waite/Cups13.png" },
    description: {
      en: "A serene queen gazes thoughtfully at an ornate cup, embodying compassion, intuition, and emotional wisdom.",
      zh: "一位宁静的皇后若有所思地凝视着一个华丽的圣杯，体现慈悲、直觉与情感智慧。",
    },
    keywords: {
      en: [
        "compassion",
        "intuition",
        "emotional intelligence",
        "nurturing",
        "empathy",
      ],
      zh: ["慈悲", "直觉", "情商", "养育", "同理心"],
    },
    meaning: {
      upright: {
        en: "Lead with compassion and emotional intelligence. Your empathy and intuition are a powerful source of wisdom.",
        zh: "以慈悲与情感智慧引领。你的同理心与直觉是强大的智慧源泉。",
      },
      reversed: {
        en: "Emotional overwhelm, codependency, or allowing feelings to cloud judgment.",
        zh: "情感超负荷、共依存，或让情绪蒙蔽判断力。",
      },
    },
  },
  {
    id: "king-of-cups",
    name: { en: "King of Cups", zh: "圣杯国王" },
    arcana: "minor",
    suit: "cups",
    number: 14,
    image: { url: "/images/rider-waite/Cups14.png" },
    description: {
      en: "A benevolent king sits on a throne amid turbulent seas, governing his emotions with wisdom and calm authority.",
      zh: "一位仁慈的国王在汹涌的大海中端坐于王座上，以智慧与冷静的权威驾驭自己的情感。",
    },
    keywords: {
      en: [
        "emotional mastery",
        "wisdom",
        "calm authority",
        "diplomacy",
        "balance",
      ],
      zh: ["情感掌控", "智慧", "冷静权威", "外交", "平衡"],
    },
    meaning: {
      upright: {
        en: "Master your emotions without suppressing them. Emotional wisdom and compassionate leadership create powerful influence.",
        zh: "掌控情绪而不压抑它们。情感智慧与充满慈悲的领导力创造强大的影响力。",
      },
      reversed: {
        en: "Emotional manipulation, moodiness, or using emotional intelligence as a tool of control.",
        zh: "情感操控、情绪化，或将情商用作控制的工具。",
      },
    },
  },
];
