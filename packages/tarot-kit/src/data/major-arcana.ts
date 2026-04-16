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
      url: "/images/rider-waite/the-fool.jpg",
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
      url: "/images/major/the-magician.jpg",
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
      url: "/images/major/the-high-priestess.jpg",
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
];
