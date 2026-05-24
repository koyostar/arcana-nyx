import type { TarotCard } from "../types/card.js";

export const cupsCards: TarotCard[] = [
  {
    id: "ace-of-cups",
    name: {
      en: "Ace of Cups",
      zh: "聖杯一",
    },
    arcana: "minor",
    suit: "cups",
    number: 1,
    description: {
      en: "The Ace of Cups depicts the hand of God offering a cup brimming with water. The flowing water symbolizes love, emotion, and spiritual blessing. This card represents the beginning of profound emotional fulfillment and spiritual abundance.",
      zh: "聖杯一（ACE）描繪著神之手捧著注滿水的聖杯。滿溢而出的水象徵愛、情感與心靈的祝福。這是張呈現豐富情感與精神滿足開端的牌。",
    },
    coreKeyword: {
      en: "Affection",
      zh: "情愛",
    },
    meaning: {
      upright: {
        en: "Love and happiness overflow. The heart brims with love and joy, and emotions flow naturally. This card signals the emergence of new affection, tender connection, and a beginning that nourishes the soul.",
        zh: "愛與幸福滿溢而出：內心充滿愛與喜悅，情感自然地流露出來。這張牌暗示著新的感情、溫柔的交流，以及能滋潤心靈的開始。",
      },
      reversed: {
        en: "Emotional exhaustion and unmet longing. Feelings cannot flow freely, leaving the heart hollow or yearning. It may also indicate suppressed affection, difficulty expressing love openly, or disappointed hopes.",
        zh: "情感枯竭而無法滿足：情感無法順利流動，內心變得空虛或缺乏滿足。也可能表示愛意被壓抑、無法坦率表達，或期待落空。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Emotions overflowing / new love or joy emerging / the spirit finds nourishment",
          zh: "情感滿溢的狀況/新的愛情或喜悅開始/心靈獲得滋潤",
        },
        reversed: {
          en: "Emotional depletion / unable to receive love openly / joy remains elusive",
          zh: "情感枯竭的狀況/無法坦率接受愛/喜悅難以持續",
        },
      },
      innerState: {
        upright: {
          en: "Longing to express love / feeling joyful and moved / opening emotionally",
          zh: "想表達愛意/感到幸福與感動/心情變得柔軟",
        },
        reversed: {
          en: "Low emotional spirits / uncertain how to express true feelings / anxious about love",
          zh: "情緒低落/不知如何表達真心/對愛感到不安",
        },
      },
      rootCause: {
        upright: {
          en: "Emotions overflowing / easily moved or stirred / holding unrealistically high expectations in relationships",
          zh: "情感過度滿溢/太容易被感動/對關係抱有過高期待",
        },
        reversed: {
          en: "Repressed feelings / fear of being hurt / not nurturing your own heart",
          zh: "情感壓抑/害怕受傷/沒有好好照顧自己的心",
        },
      },
      development: {
        upright: {
          en: "New love blossoms / joyful news arrives / the spirit finds healing",
          zh: "新的感情開始/收到令人開心的消息/心靈得到療癒",
        },
        reversed: {
          en: "Hopes unravel / feelings gradually cool / the relationship stalls",
          zh: "期待落空/情感逐漸冷卻/關係停滯不前",
        },
      },
      advice: {
        upright: {
          en: "Open your heart / receive love openly / treasure moving moments",
          zh: "敞開心胸/坦率接受愛意/珍惜感動的瞬間",
        },
        reversed: {
          en: "Care for your emotions first / do not force acceptance / gently restore the heart's flow",
          zh: "先照顧自己的情緒/不要勉強接受/慢慢恢復心的流動",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "New romance flourishes / confession succeeds / surrounded by love / feelings develop naturally",
          zh: "新的戀情/告白成功/被愛包圍/感情自然發展",
        },
        reversed: {
          en: "Love remains unspoken / one-sided yearning / emotional emptiness",
          zh: "愛意無法傳達/單方面期待/情緒上的空虛",
        },
      },
      work: {
        upright: {
          en: "Creative inspiration flows abundantly / a pleasant workplace atmosphere / gentle support from colleagues",
          zh: "創作靈感湧現/愉快的職場氣氛/被人溫柔支持",
        },
        reversed: {
          en: "Lack of passion / emotional exhaustion / losing drive for work",
          zh: "缺乏熱情/情緒疲乏/對工作失去興趣",
        },
      },
      interpersonal: {
        upright: {
          en: "Gentle exchange / mutual care / relationships where you can confide safely",
          zh: "溫柔交流/互相體貼/能安心傾訴的關係",
        },
        reversed: {
          en: "Misreading others' feelings / over-dependence / emotionally reactive exchanges",
          zh: "誤解對方心意/過度依賴/情緒化的往來",
        },
      },
      others: {
        upright: {
          en: "Blessing / healing / wonder / dreams taking root / spiritual abundance",
          zh: "祝福/療癒/感動/夢想開始/心靈富足",
        },
        reversed: {
          en: "Despair / emotional depletion / excessive longing / spiritual drought",
          zh: "失落感/情緒枯竭/期待過度/心靈乾涸",
        },
      },
    },
  },
  {
    id: "two-of-cups",
    name: {
      en: "Two of Cups",
      zh: "聖杯二",
    },
    arcana: "minor",
    suit: "cups",
    number: 2,
    description: {
      en: "A man and woman exchange cups and gaze at each other sincerely. Above them appears a symbol of blessing, suggesting emotional alignment and a bond formed through mutual acceptance.",
      zh: "一男一女互相交換聖杯，真誠地面對彼此。上方出現祝福的象徵，暗示情感上的契合，以及透過互相接納而締結的羈絆。",
    },
    coreKeyword: {
      en: "Union",
      zh: "結合",
    },
    meaning: {
      upright: {
        en: "Two hearts draw together and unite. Feelings harmonize, allowing a balanced and mutual connection. This card points to emotional union in romance, friendship, or partnership.",
        zh: "兩顆心互相靠近並結合：彼此的心意相通，能夠以對等的姿態交流。這張牌暗示戀愛、友情、合作關係等情感上的結合。",
      },
      reversed: {
        en: "The relationship loses balance and gradually grows distant. Feelings no longer align, and misunderstanding, separation, or difficulty facing each other honestly may emerge.",
        zh: "關係失衡而逐漸疏離：雙方情感不再平衡，可能出現誤解、距離、或無法坦率面對彼此的狀況。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A bond forms smoothly / mutual understanding flourishes / partnership is established",
          zh: "關係順利建立/互相理解的時候/合作關係成立",
        },
        reversed: {
          en: "Relationship imbalance / misunderstanding arises / unable to work in harmony",
          zh: "關係失衡/誤會產生/互相無法配合",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to draw closer / willing to communicate openly / feeling understood",
          zh: "想靠近對方/願意坦率交流/感到被理解",
        },
        reversed: {
          en: "Growing doubtful of the other / afraid of closeness / hearts not in sync",
          zh: "對對方產生疑心/害怕靠近/心意不一致",
        },
      },
      rootCause: {
        upright: {
          en: "Excessive reliance on the other / expecting complete understanding / lack of independence",
          zh: "過度依賴對方/期待完全被理解/缺乏獨立性",
        },
        reversed: {
          en: "Insufficient communication / unequal positions / emotional tension",
          zh: "溝通不足/彼此立場不對等/感情上的拉扯",
        },
      },
      development: {
        upright: {
          en: "The relationship deepens / a commitment is made / mutual acceptance grows",
          zh: "關係更進一步/締結約定/互相接納",
        },
        reversed: {
          en: "The relationship grows distant / cooperation falters / feelings fall out of sync",
          zh: "關係逐漸疏遠/合作破局/心意錯開",
        },
      },
      advice: {
        upright: {
          en: "Meet each other as equals / express your feelings clearly / treasure mutual understanding",
          zh: "用對等姿態面對對方/好好表達心意/珍惜互相理解",
        },
        reversed: {
          en: "Do not focus only on your own feelings / correct the imbalance / reaffirm each other's intentions",
          zh: "不要只看自己的感受/修正失衡/重新確認彼此心意",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Mutual affection / successful confession / couple status established / someone suited for partnership",
          zh: "兩情相悅/告白成功/情侶關係成立/適合交往的人",
        },
        reversed: {
          en: "Unequal feelings / misunderstanding / separation / hearts cannot connect",
          zh: "感情不對等/誤會/分離/心意無法相通",
        },
      },
      work: {
        upright: {
          en: "Cooperation flows smoothly / partnership is formed / a contract or agreement is finalized",
          zh: "合作順利/夥伴關係成立/簽約或協議",
        },
        reversed: {
          en: "Cooperation is unbalanced / negotiations falter / the agreement breaks down",
          zh: "合作失衡/談判不順/契約破裂",
        },
      },
      interpersonal: {
        upright: {
          en: "Mutual trust / conversation flows easily / someone who supports you in return",
          zh: "互相信任/對話順利/能互相扶持的人",
        },
        reversed: {
          en: "An awkward relationship / mutual suspicion / lack of harmony",
          zh: "關係尷尬/互相猜疑/缺乏協調",
        },
      },
      others: {
        upright: {
          en: "Reconciliation / alliance / mutual understanding / emotional connection",
          zh: "和解/結盟/互相理解/情感交流",
        },
        reversed: {
          en: "Opposition / imbalance / out of sync / a cooling relationship",
          zh: "對立/失衡/不合拍/關係冷卻",
        },
      },
    },
  },
  {
    id: "three-of-cups",
    name: {
      en: "Three of Cups",
      zh: "聖杯三",
    },
    arcana: "minor",
    suit: "cups",
    number: 3,
    description: {
      en: "Three women raise their cups together in celebration. Fruits and flowers surround them, depicting joy shared with companions and the happiness of belonging to a community.",
      zh: "三名女性一同舉杯慶祝。周圍環繞著果實與花朵，呈現與夥伴共享喜悅，以及歸屬於群體中的幸福感。",
    },
    coreKeyword: {
      en: "Celebration",
      zh: "慶祝",
    },
    meaning: {
      upright: {
        en: "Sharing joy with companions. Success and happiness are celebrated with friends, allies, or a group. This card points to mutual blessings, celebration, and heartfelt exchange.",
        zh: "與夥伴共享喜悅：與朋友、同伴或團體共享成功與快樂。這張牌顯示互相祝福、慶賀與情感上的交流。",
      },
      reversed: {
        en: "Indulging in pleasure until restraint is lost. Excessive celebration or socializing leads to imbalance. It can also suggest cliques, gossip, or outward liveliness masking inner emptiness.",
        zh: "沉溺歡樂而失去節制：過度沉溺於歡樂或人際應酬，導致失去節制。也可能暗示小圈子、八卦或表面熱鬧內心空虛。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Good news arrives / the group mood is vibrant / a time for celebration",
          zh: "喜事降臨/團體氣氛熱鬧/適合慶祝的時候",
        },
        reversed: {
          en: "Excessive indulgence / social confusion / outward liveliness concealing inner emptiness",
          zh: "玩樂過度/人際混亂/表面熱鬧但內心空虛",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to share joy / feeling accepted / enjoying a sense of belonging",
          zh: "想與人分享喜悅/感到被接納/享受團體歸屬",
        },
        reversed: {
          en: "Afraid of being excluded / emotionally restless / wanting only to escape reality",
          zh: "害怕被排除/情緒浮躁/只想逃避現實",
        },
      },
      rootCause: {
        upright: {
          en: "Relying on group energy / pursuing pleasure for its own sake / easily influenced by others",
          zh: "依賴團體氣氛/只追求快樂/容易被周遭帶動",
        },
        reversed: {
          en: "Gossip or clique issues / lack of restraint / blurry interpersonal boundaries",
          zh: "八卦或小圈子問題/缺乏節制/人際界線模糊",
        },
      },
      development: {
        upright: {
          en: "Receiving blessings / events unfold smoothly / sharing results with friends",
          zh: "得到祝福/活動順利/與朋友共享成果",
        },
        reversed: {
          en: "A gathering is canceled / relationships grow complicated / joy proves hard to sustain",
          zh: "聚會取消/關係變複雜/快樂難以維持",
        },
      },
      advice: {
        upright: {
          en: "Accept blessings / share your success / treasure your companions",
          zh: "接受祝福/與人分享成果/珍惜夥伴",
        },
        reversed: {
          en: "Practice moderation / avoid getting caught in gossip / do not pursue only pleasure",
          zh: "注意節制/避免捲入八卦/別只顧玩樂",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "A friend becomes a lover / romance is blessed / joyful dates",
          zh: "朋友變戀人/戀情受到祝福/愉快約會",
        },
        reversed: {
          en: "Love triangle complications / playful attitude / insufficient relationship commitment",
          zh: "三角關係/玩樂心態/感情不夠認真",
        },
      },
      work: {
        upright: {
          en: "Pleasant teamwork / partnership is formed / work results are recognized",
          zh: "團隊合作愉快/慶功/工作成果被肯定",
        },
        reversed: {
          en: "Excessive social obligations / cliques within the team / distraction",
          zh: "應酬過度/團隊內部小圈子/分心",
        },
      },
      interpersonal: {
        upright: {
          en: "Supportive friends / community belonging / people you can enjoy life with",
          zh: "朋友支持/社群歸屬/能一起開心的人",
        },
        reversed: {
          en: "Exclusion by a small group / gossip / surface-level relationships",
          zh: "小團體排擠/八卦/表面關係",
        },
      },
      others: {
        upright: {
          en: "Party / celebration / abundance / group activity / good news",
          zh: "派對/慶祝/豐收/團體活動/喜訊",
        },
        reversed: {
          en: "Overindulgence / excess / complicated social ties / lack of restraint",
          zh: "過度娛樂/放縱/人際複雜/缺乏節制",
        },
      },
    },
  },
  {
    id: "four-of-cups",
    name: {
      en: "Four of Cups",
      zh: "聖杯四",
    },
    arcana: "minor",
    suit: "cups",
    number: 4,
    description: {
      en: "A person sits beneath a tree with folded arms, ignoring the cup offered by a mysterious hand. Three cups stand before them, yet their heart remains unmoved. This card depicts emotional stagnation and dissatisfaction.",
      zh: "一個人雙手環抱坐在樹下，沒有注意到神祕之手遞出的聖杯。眼前雖有三只聖杯，內心卻毫無動搖。這張牌呈現情感停滯與不滿足。",
    },
    coreKeyword: {
      en: "Dissatisfaction",
      zh: "不滿",
    },
    meaning: {
      upright: {
        en: "Growing weary of the present and sinking into stagnation. Interest fades in what is before you, and even with options available, contentment remains elusive. This card suggests boredom, hesitation, and emotional withdrawal.",
        zh: "對現況感到倦怠而停滯：內心對眼前事物失去興趣，雖然並非沒有選擇，卻無法感到滿足。這張牌暗示倦怠、猶豫與情感上的封閉。",
      },
      reversed: {
        en: "Beginning to notice an overlooked opportunity again. You slowly awaken from stagnation and start seeing the chances you once disregarded. It can also show a refreshed perspective and willingness to embrace new possibilities.",
        zh: "重新注意到被忽略的機會：逐漸從停滯中醒來，開始注意到原本忽略的機會。也可能表示重新整理心情，願意接受新的可能性。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Weary of the current state / opportunity is right in front yet unnoticed / stagnation",
          zh: "對現況感到倦怠/機會就在眼前卻沒有注意/停滯狀態",
        },
        reversed: {
          en: "Starting to notice a new opportunity / recovering from weariness / reassessing the situation",
          zh: "開始注意到新機會/從倦怠中恢復/重新評估現況",
        },
      },
      innerState: {
        upright: {
          en: "Unable to feel interested / unwilling to accept new things / emotionally closed off",
          zh: "提不起興趣/不想接受新的事物/內心封閉",
        },
        reversed: {
          en: "Willing to try again / waking from discouragement / wanting a change of mood",
          zh: "願意重新嘗試/從消沉中醒來/想改變心情",
        },
      },
      rootCause: {
        upright: {
          en: "Too focused on dissatisfaction / overlooking what you possess / caught in a low mood",
          zh: "過度專注於不滿/忽略已擁有的東西/心情陷入低潮",
        },
        reversed: {
          en: "Past stagnation reaches its limit / beginning to see possibility again / unwilling to stay discouraged",
          zh: "過去的停滯到達極限/重新看見可能性/不想繼續消沉",
        },
      },
      development: {
        upright: {
          en: "Missing an opportunity / a relationship or plan stalls / hard to lift your spirits",
          zh: "錯過機會/關係或計畫停滯/心情難以振作",
        },
        reversed: {
          en: "Accepting an invitation / starting anew / emotions gradually begin to flow",
          zh: "接受邀請/重新開始/情緒逐漸流動",
        },
      },
      advice: {
        upright: {
          en: "Do not focus only on what dissatisfies you / notice the kindness before you / give yourself some time",
          zh: "不要只看不滿/注意眼前的善意/給自己一些時間",
        },
        reversed: {
          en: "Try accepting a new offer / do not reject every possibility / open your heart again",
          zh: "試著接受新的提案/別拒絕所有可能/讓心重新打開",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Weary of romance / uninterested in a suitor / love feels stagnant",
          zh: "對戀情倦怠/對追求者沒興趣/感情停滯",
        },
        reversed: {
          en: "Accepting an invitation again / the relationship warms up / noticing someone you overlooked",
          zh: "重新接受邀約/關係回溫/注意到被忽略的人",
        },
      },
      work: {
        upright: {
          en: "Work feels stale / hard to find motivation / missing a proposal or opportunity",
          zh: "工作缺乏新鮮感/提不起動力/錯過提案",
        },
        reversed: {
          en: "Rediscovering an opportunity / changing your attitude toward work / accepting a new task",
          zh: "重新發現機會/改變工作心態/接受新任務",
        },
      },
      interpersonal: {
        upright: {
          en: "A cold response / unwilling to socialize / rejecting goodwill",
          zh: "冷淡應對/不想社交/拒絕善意",
        },
        reversed: {
          en: "Reconnecting / willing to listen / improving the relationship",
          zh: "重新聯絡/願意聽人說話/改善關係",
        },
      },
      others: {
        upright: {
          en: "Weariness / boredom / negativity / overlooking an opportunity",
          zh: "倦怠/無聊/消極/忽略機會",
        },
        reversed: {
          en: "Interest returns / choosing again / emotions warm up",
          zh: "恢復興趣/重新選擇/情緒回溫",
        },
      },
    },
  },
  {
    id: "five-of-cups",
    name: {
      en: "Five of Cups",
      zh: "聖杯五",
    },
    arcana: "minor",
    suit: "cups",
    number: 5,
    description: {
      en: "A person in a black cloak gazes downward at spilled cups, while two cups still stand upright behind. The card shows grief from loss, yet reminds that not everything has been lost.",
      zh: "身披黑色斗篷的人低頭凝視倒下的聖杯，而身後仍有兩只聖杯尚未倒下。這張牌呈現失落與悲傷，也提醒並非一切都已失去。",
    },
    coreKeyword: {
      en: "Loss",
      zh: "喪失",
    },
    meaning: {
      upright: {
        en: "Immersed in grief because of a loss. The heart is consumed by what is gone and cannot yet see the possibilities that remain. This card suggests disappointment, regret, and emotional pain.",
        zh: "因失去而沉浸在悲傷中：心被已經失去的事物佔據，無法立刻看見仍然保留的可能性。這張牌暗示失望、遺憾與情感上的打擊。",
      },
      reversed: {
        en: "Turning from grief and beginning to glimpse hope again. You slowly lift your head and recognize the hope that still remains. It can also mean accepting the loss and beginning emotional healing.",
        zh: "從悲傷中回頭看見希望：逐漸從悲傷中抬頭，重新看見仍存在的希望。也可能表示接受失去，並開始修復情緒。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Discouraged by loss / low spirits / seeing only failure",
          zh: "因失去而沮喪/心情低落/只看見失敗",
        },
        reversed: {
          en: "Recovering from sorrow / noticing what still remains / hope reappears",
          zh: "從悲傷中恢復/注意到仍然留下的事物/希望重新出現",
        },
      },
      innerState: {
        upright: {
          en: "Feeling regret and sorrow / immersed in grief / finding it hard to move forward",
          zh: "感到後悔與遺憾/沉浸在悲傷中/難以轉身",
        },
        reversed: {
          en: "Wanting to pull yourself together / accepting reality / willing to repair things",
          zh: "想重新振作/接受現實/願意修復",
        },
      },
      rootCause: {
        upright: {
          en: "Clinging too tightly to what was lost / overlooking what remains possible / unable to forgive yourself",
          zh: "過度執著於失去/忽略尚存的可能/無法原諒自己",
        },
        reversed: {
          en: "Sorrow has reached its end / beginning to face what remains / learning to let go",
          zh: "悲傷已到盡頭/開始面對剩下的事物/學會放下",
        },
      },
      development: {
        upright: {
          en: "Facing disappointment / a relationship is hurt / plans fail",
          zh: "面臨失望/關係受挫/計畫失敗",
        },
        reversed: {
          en: "Reconnecting / regaining confidence / repairing a relationship",
          zh: "重新連結/恢復信心/修補關係",
        },
      },
      advice: {
        upright: {
          en: "Allow yourself to grieve / but do not forget the hope that still exists / look behind you",
          zh: "允許自己悲傷/但別忘記仍然存在的希望/回頭看看身後",
        },
        reversed: {
          en: "Accept the loss / place your attention on what can still be restored / begin anew",
          zh: "接受失去/把注意力放回能挽回的事物/重新開始",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Heartbreak / regret / disappointment in love / unable to let go of the past",
          zh: "失戀/後悔/對感情失望/無法放下過去",
        },
        reversed: {
          en: "Reconciliation becomes possible / recovering from heartbreak / noticing the one who still loves you",
          zh: "復合可能/從傷心中恢復/看見仍愛自己的人",
        },
      },
      work: {
        upright: {
          en: "Failure or loss / plans fall short of expectations / low morale",
          zh: "失敗或損失/計畫不如預期/士氣低落",
        },
        reversed: {
          en: "Reorganizing the situation / recovering from loss / finding a new direction",
          zh: "重新整理局勢/補救損失/找到新方向",
        },
      },
      interpersonal: {
        upright: {
          en: "Growing distant through misunderstanding / loss of trust / silence and regret",
          zh: "因誤會疏遠/失去信任/沉默與遺憾",
        },
        reversed: {
          en: "Reconciliation / reconnecting / mending an interpersonal rift",
          zh: "和解/重新聯絡/修補人際裂痕",
        },
      },
      others: {
        upright: {
          en: "Loss / sorrow / regret / unable to see hope",
          zh: "失落/悲傷/遺憾/看不見希望",
        },
        reversed: {
          en: "Recovery / repair / hope / lifting your head again",
          zh: "恢復/修復/希望/重新抬頭",
        },
      },
    },
  },
  {
    id: "six-of-cups",
    name: {
      en: "Six of Cups",
      zh: "聖杯六",
    },
    arcana: "minor",
    suit: "cups",
    number: 6,
    description: {
      en: "Children exchange cups filled with flowers in a peaceful town. The card evokes nostalgia, innocence, cherished memories, and the warmth of the past.",
      zh: "孩子們在平和的城鎮中交換裝滿花朵的聖杯。這張牌呈現懷舊、純真、回憶，以及來自過去的溫暖。",
    },
    coreKeyword: {
      en: "Memory",
      zh: "回憶",
    },
    meaning: {
      upright: {
        en: "Finding warmth in innocent memories. Memories of the past, pure feelings, or familiar people and places bring comfort. This card also suggests reunion, childhood, nostalgia, and kindness.",
        zh: "從純真回憶中獲得溫暖：過去的回憶、純真的情感或熟悉的人事物帶來安慰。這張牌也暗示重逢、童年、懷念與善意。",
      },
      reversed: {
        en: "Bound by the past and unable to move forward. Overindulgence in what has been makes it hard to face the present. It can also point to immaturity, escapism, or old attachments becoming a burden.",
        zh: "被過去束縛而無法前進：過度沉溺於過去，導致無法面對現在。也可能暗示幼稚、逃避現實，或舊事物成為束縛。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "People or things from the past resurface / familiar surroundings bring comfort / memories affect the present",
          zh: "過去的人事物浮現/熟悉環境帶來安心/回憶影響現況",
        },
        reversed: {
          en: "Bound by the past / unable to face the present / old problems reappear",
          zh: "被過去束縛/無法面對現在/舊問題重現",
        },
      },
      innerState: {
        upright: {
          en: "Missing the past / wanting to return to simpler times / feeling warmed",
          zh: "懷念過去/想回到單純時期/感到溫暖",
        },
        reversed: {
          en: "Escaping reality / emotionally stuck in the past / unwilling to mature",
          zh: "逃避現實/心理停留在過去/不想長大",
        },
      },
      rootCause: {
        upright: {
          en: "Overidealizing the past / using memory to beautify reality / relying on familiarity",
          zh: "過度理想化過去/以回憶美化現實/依賴熟悉感",
        },
        reversed: {
          en: "Old patterns blocking growth / past shadows still unresolved / unwillingness to change",
          zh: "舊模式阻礙成長/過去陰影尚未處理/不願改變",
        },
      },
      development: {
        upright: {
          en: "Reunion / old feelings warm up again / news arrives from the past",
          zh: "重逢/舊情回溫/收到來自過去的消息",
        },
        reversed: {
          en: "Past issues return / unable to move forward / childish attitudes cause trouble",
          zh: "過去問題再度出現/無法向前/童稚態度帶來麻煩",
        },
      },
      advice: {
        upright: {
          en: "Treasure kindness and memories / draw strength from past experience / preserve your innocence",
          zh: "珍惜善意與回憶/從過去經驗得到力量/保持純真",
        },
        reversed: {
          en: "Do not drown in the past / face the present / outgrow old patterns",
          zh: "不要沉溺過去/面對現在/從舊模式中畢業",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Reunion with an old love / innocent romance / childhood sweetheart / gentle memories",
          zh: "舊愛重逢/純真的愛/青梅竹馬/溫柔回憶",
        },
        reversed: {
          en: "Stuck in old feelings / immature romance / unable to move past an ex",
          zh: "沉溺舊情/不成熟的戀愛/無法放下前任",
        },
      },
      work: {
        upright: {
          en: "Past experience proves useful / familiar work / old clients or previous projects",
          zh: "過去經驗派上用場/熟悉工作/老客戶或舊案子",
        },
        reversed: {
          en: "Old methods no longer work / lack of growth / old problems repeat",
          zh: "過去做法不再適用/缺乏成長/老問題重演",
        },
      },
      interpersonal: {
        upright: {
          en: "Old friends / family / someone tied to your past / kind exchanges",
          zh: "老朋友/家人/令人懷念的人/善意往來",
        },
        reversed: {
          en: "Childish interaction / unresolved past entanglements / a stagnant relationship",
          zh: "幼稚互動/過去糾葛/關係停滯",
        },
      },
      others: {
        upright: {
          en: "Memories / hometown / childhood / gift / reunion",
          zh: "回憶/故鄉/童年/禮物/重逢",
        },
        reversed: {
          en: "Excess nostalgia / immaturity / shadows of the past",
          zh: "懷舊過度/不成熟/過去陰影",
        },
      },
    },
  },
  {
    id: "seven-of-cups",
    name: {
      en: "Seven of Cups",
      zh: "聖杯七",
    },
    arcana: "minor",
    suit: "cups",
    number: 7,
    description: {
      en: "Seven cups float in the clouds, each holding a different vision. The figure gazes at them in confusion, suggesting many desires, illusions, and choices that have not yet taken shape in reality.",
      zh: "七只聖杯漂浮在雲霧中，每一只都裝著不同的幻象。人物困惑地凝視著它們，暗示許多欲望、幻想與尚未成真的選擇。",
    },
    coreKeyword: {
      en: "Fantasy",
      zh: "幻想",
    },
    meaning: {
      upright: {
        en: "Immersed in dreams and abundant possibilities. Imagination is active and countless options appear before you, though not all can become reality. This card suggests dreams, temptation, confusion, and desires not yet grounded in reality.",
        zh: "沉浸在夢想與眾多可能性中：想像力活躍，許多選項浮現眼前，但未必都能實現。這張牌暗示夢想、誘惑、迷惘與尚未具體化的願望。",
      },
      reversed: {
        en: "Waking from fantasy and seeing reality clearly. You begin to emerge from unrealistic dreams and recognize which choices are truly workable. It can also mean making a decision and ceasing to escape from reality.",
        zh: "從幻想中醒來並看清現實：從不切實際的幻想中醒來，開始看清真正可行的選擇。也可能表示做出決定，停止逃避現實。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Many options but hard to judge / dreams and temptation are intertwined / the situation is unclear",
          zh: "選項很多但難以判斷/夢想與誘惑混在一起/狀況不明確",
        },
        reversed: {
          en: "Reality gradually becomes clear / options are sorted out / fantasies disperse",
          zh: "現實逐漸清晰/選項被整理/幻想消散",
        },
      },
      innerState: {
        upright: {
          en: "Wanting many things / lost in imagination / unable to decide",
          zh: "想要很多東西/沉浸於想像/猶豫不決",
        },
        reversed: {
          en: "Beginning to calm down / wanting to make a practical choice / no longer wanting to stay confused",
          zh: "開始冷靜/想做出實際選擇/不想再迷惘",
        },
      },
      rootCause: {
        upright: {
          en: "Too many desires / lack of a concrete plan / seduced by appealing appearances",
          zh: "慾望過多/缺乏具體計畫/被美好表象迷惑",
        },
        reversed: {
          en: "Reality is closing in / fantasy cannot continue / a choice must be made",
          zh: "現實壓力逼近/幻想無法繼續/必須選擇",
        },
      },
      development: {
        upright: {
          en: "Likely to be led astray by temptation / plans remain at the fantasy stage / hard to decide",
          zh: "可能被誘惑牽著走/計畫停留在幻想階段/難以下決定",
        },
        reversed: {
          en: "Making a choice / seeing the truth / moving in a practical direction",
          zh: "做出選擇/看清真相/朝實際方向前進",
        },
      },
      advice: {
        upright: {
          en: "Make your wishes concrete / distinguish fantasy from reality / do not be misled by temptation",
          zh: "把願望具體化/分辨幻想與現實/不要被誘惑迷惑",
        },
        reversed: {
          en: "Wake up / narrow the options / choose what truly matters",
          zh: "清醒過來/縮小選項/選擇真正重要的事",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "An ambiguous relationship / multiple prospects / dreamlike romance / unrealistic expectations",
          zh: "曖昧關係/多個對象/夢幻般的戀情/不切實際期待",
        },
        reversed: {
          en: "Seeing the other person clearly / ending the ambiguity / making a choice in love",
          zh: "看清對方真面目/停止曖昧/做出感情選擇",
        },
      },
      work: {
        upright: {
          en: "Many ideas / abundant creativity / but plans lack substance",
          zh: "點子很多/創意豐富/但計畫不具體",
        },
        reversed: {
          en: "Organizing plans / eliminating unrealistic options / making practical judgments",
          zh: "整理企劃/排除不實際方案/務實判斷",
        },
      },
      interpersonal: {
        upright: {
          en: "Misled by sweet words / too many social choices / unsure whom to trust",
          zh: "被甜言蜜語迷惑/人際選擇太多/不知誰可信",
        },
        reversed: {
          en: "Seeing people's true hearts / keeping away from temptation / simplifying relationships",
          zh: "看清人心/遠離誘惑/簡化關係",
        },
      },
      others: {
        upright: {
          en: "Fantasy / desire / choice / confusion / temptation",
          zh: "幻想/欲望/選擇/迷惘/誘惑",
        },
        reversed: {
          en: "Reality setting in / waking up / choice / disillusionment",
          zh: "現實化/清醒/選擇/幻滅",
        },
      },
    },
  },
  {
    id: "eight-of-cups",
    name: {
      en: "Eight of Cups",
      zh: "聖杯八",
    },
    arcana: "minor",
    suit: "cups",
    number: 8,
    description: {
      en: "A person leaves behind eight cups and walks toward the mountains under the moon. Although much has already been built, the heart still seeks something more meaningful.",
      zh: "一個人在月光下留下八只聖杯，朝山的方向離去。雖然已經建立起某些事物，但內心仍追尋更深層的意義。",
    },
    coreKeyword: {
      en: "Departure",
      zh: "離去",
    },
    meaning: {
      upright: {
        en: "Leaving behind what no longer fulfills you. In search of deeper meaning, you choose to walk away from a familiar environment or relationship. This card suggests farewell, turning away, and a spiritual quest.",
        zh: "離開已經不再滿足自己的事物：為了尋找更深的意義，選擇離開原本熟悉的環境或關係。這張牌暗示告別、轉身與精神上的追尋。",
      },
      reversed: {
        en: "Unable to leave and remaining where you are. Even when you know the current situation no longer fulfills you, you still hesitate to move. It may also point to avoiding a parting, delaying a decision, or being unable to let go.",
        zh: "無法離開而停留在原地：明知現況無法滿足自己，卻仍然猶豫不前。也可能表示逃避離別、拖延決定，或無法放下。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Wanting to leave the current situation / seeking deeper meaning / emotionally no longer satisfied",
          zh: "想離開現況/尋找更深意義/情感上已經不滿足",
        },
        reversed: {
          en: "Unable to leave / wavering / returning to the same starting point again and again",
          zh: "無法離開/猶豫不決/重複回到原點",
        },
      },
      innerState: {
        upright: {
          en: "Feeling empty / wanting to find what truly matters / ready to say goodbye",
          zh: "感到空虛/想尋找真正重要的事/已準備告別",
        },
        reversed: {
          en: "Afraid of losing something / unwilling to admit dissatisfaction / lingering attachment",
          zh: "害怕失去/不想承認不滿/留戀",
        },
      },
      rootCause: {
        upright: {
          en: "Current achievements no longer satisfy / spiritual longing grows stronger / unwilling to settle",
          zh: "現有成果已無法滿足/精神追求變強/不想將就",
        },
        reversed: {
          en: "Clinging to what you already possess / afraid to start over / avoiding a decision",
          zh: "執著於已擁有的事物/害怕重新開始/逃避決定",
        },
      },
      development: {
        upright: {
          en: "Leaving a familiar environment / ending a relationship / beginning a search",
          zh: "離開熟悉環境/結束某段關係/展開追尋",
        },
        reversed: {
          en: "Delaying a parting / returning to the old state / without real change taking place",
          zh: "拖延離別/回到舊狀態/沒有真正改變",
        },
      },
      advice: {
        upright: {
          en: "Leave in line with your heart / search for what you truly want / say goodbye courageously",
          zh: "順著內心離開/尋找真正想要的事/勇敢告別",
        },
        reversed: {
          en: "Do not avoid your real dissatisfaction / make up your mind / stop turning back repeatedly",
          zh: "不要逃避真正的不滿/下定決心/別反覆回頭",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Leaving an unsatisfying romance / seeking deeper love / a peaceful farewell",
          zh: "離開不滿足的戀情/尋找更深層的愛/冷靜告別",
        },
        reversed: {
          en: "Unable to let go of the relationship / dragging things out / avoiding a breakup",
          zh: "放不下關係/拖泥帶水/逃避分手",
        },
      },
      work: {
        upright: {
          en: "Resigning or changing direction / leaving unsuitable work / pursuing an ideal",
          zh: "辭職或轉換方向/離開不適合的工作/追求理想",
        },
        reversed: {
          en: "Unable to leave a job / work remains stagnant / afraid of change",
          zh: "無法離職/工作停滯/害怕改變",
        },
      },
      interpersonal: {
        upright: {
          en: "Gradually growing apart / saying goodbye to old ties / seeking a circle that suits you better",
          zh: "逐漸疏遠/告別舊關係/追求更適合的圈子",
        },
        reversed: {
          en: "A relationship drags on / lingering attachment remains / unable to sever ties cleanly",
          zh: "關係拖延/藕斷絲連/無法切割",
        },
      },
      others: {
        upright: {
          en: "Departure / seeking / a spiritual journey / farewell",
          zh: "離開/追尋/精神旅程/告別",
        },
        reversed: {
          en: "Staying put / avoiding farewell / unwilling to let go",
          zh: "停留/逃避告別/不願放下",
        },
      },
    },
  },
  {
    id: "nine-of-cups",
    name: {
      en: "Nine of Cups",
      zh: "聖杯九",
    },
    arcana: "minor",
    suit: "cups",
    number: 9,
    description: {
      en: "A satisfied person sits before nine arranged cups. Their posture conveys confidence, contentment, and the fulfillment of personal wishes.",
      zh: "一位感到滿足的人坐在排列整齊的九只聖杯前。他的姿態呈現自信、享受，以及個人願望獲得滿足的狀態。",
    },
    coreKeyword: {
      en: "Satisfaction",
      zh: "滿足",
    },
    meaning: {
      upright: {
        en: "A wish is fulfilled and satisfaction follows. What you longed for comes true, bringing joy and contentment. This card suggests enjoying your reward, happiness, and self-affirmation.",
        zh: "願望實現並感到滿足：想望之事得到實現，內心感到喜悅與滿足。這張牌暗示享受成果、幸福感與自我肯定。",
      },
      reversed: {
        en: "Excessive self-satisfaction that loses touch with genuine joy. Things may appear satisfying on the surface while the heart feels hollow. It can also suggest vanity, greed, or pursuing pleasure solely for yourself.",
        zh: "過度自滿而失去真正的喜悅：表面上看似滿足，內心卻可能空虛。也可能表示自滿、貪心或只追求個人享樂。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A wish fulfilled / enjoying the results / feeling satisfied",
          zh: "願望實現/享受成果/感到滿足",
        },
        reversed: {
          en: "Satisfied on the surface but empty within / overly self-satisfied / pleasure is out of balance",
          zh: "表面滿足但內心空虛/自滿過度/享樂失衡",
        },
      },
      innerState: {
        upright: {
          en: "In a cheerful mood / confident in yourself / enjoying the present moment",
          zh: "心情愉快/對自己有信心/享受當下",
        },
        reversed: {
          en: "Greedy / proud / unsatisfied with what you already have",
          zh: "貪心/驕傲/不滿足於已有成果",
        },
      },
      rootCause: {
        upright: {
          en: "Placing excessive weight on personal satisfaction / seeing only your own wishes / prone to pride",
          zh: "太重視個人滿足/只看自己的願望/容易驕傲",
        },
        reversed: {
          en: "Chasing pleasure too much / lacking sincere connection / using appearances to fill emptiness",
          zh: "過度追求享樂/缺乏真心交流/以表象填補空虛",
        },
      },
      development: {
        upright: {
          en: "A wish achieved / getting what you want / life becomes more comfortable",
          zh: "願望達成/獲得想要的事物/生活變得舒適",
        },
        reversed: {
          en: "Satisfaction is short-lived / expectations fall flat / self-satisfaction costs you an opportunity",
          zh: "滿足感短暫/期待落空/因自滿而失去機會",
        },
      },
      advice: {
        upright: {
          en: "Enjoy the results / be grateful for what you have now / reward yourself in moderation",
          zh: "享受成果/感謝現在擁有的事物/適度犒賞自己",
        },
        reversed: {
          en: "Do not be too greedy / do not overlook others / confirm what you truly want",
          zh: "別太貪心/不要忽略他人/確認真正想要的是什麼",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "A romantic wish comes true / being cherished / joyful dates",
          zh: "戀愛願望實現/被寵愛/愉快約會",
        },
        reversed: {
          en: "A self-centered romance / chasing only pleasure / emotional emptiness",
          zh: "自我中心的戀情/只追求享受/感情空虛",
        },
      },
      work: {
        upright: {
          en: "Satisfying results at work / receiving a reward / goals achieved",
          zh: "工作成果令人滿意/獲得獎勵/目標達成",
        },
        reversed: {
          en: "Mistakes caused by self-satisfaction / caring only about enjoyment / results are weaker than they appear",
          zh: "自滿導致失誤/只顧享樂/成果不如表面",
        },
      },
      interpersonal: {
        upright: {
          en: "A pleasant person / enjoying life together / a good atmosphere",
          zh: "令人愉快的人/一起享受生活/氣氛良好",
        },
        reversed: {
          en: "Self-centeredness / surface friendliness / excessive showing off",
          zh: "自我中心/表面友好/過度炫耀",
        },
      },
      others: {
        upright: {
          en: "Satisfaction / wishes fulfilled / enjoyment / reward",
          zh: "滿足/願望實現/享受/獎勵",
        },
        reversed: {
          en: "Greed / self-satisfaction / emptiness / overindulgence",
          zh: "貪心/自滿/空虛/享樂過度",
        },
      },
    },
  },
  {
    id: "ten-of-cups",
    name: {
      en: "Ten of Cups",
      zh: "聖杯十",
    },
    arcana: "minor",
    suit: "cups",
    number: 10,
    description: {
      en: "A family raises their arms beneath a rainbow of ten cups. The card depicts emotional completeness, family happiness, and the joy of sharing blessings with loved ones.",
      zh: "一家人在十只聖杯形成的彩虹下舉起雙手。這張牌呈現情感上的圓滿、家庭幸福，以及與所愛之人共享祝福的喜悅。",
    },
    coreKeyword: {
      en: "Happiness",
      zh: "幸福",
    },
    meaning: {
      upright: {
        en: "Experiencing deep emotional fulfillment and shared happiness. A relationship reaches wholeness, and happiness is shared with family, a partner, or important loved ones. This card suggests peace, harmony, and a life filled with blessings.",
        zh: "共享圓滿而幸福的情感：情感關係達到圓滿，與家人、伴侶或重要的人共享幸福。這張牌暗示安心、和諧與充滿祝福的生活。",
      },
      reversed: {
        en: "Disharmony appears beneath the image of happiness. Things may look happy outwardly while conflict or imbalance exists underneath. It can also suggest family pressure, emotional gaps, or shattered expectations.",
        zh: "幸福表象下出現不和：表面上看似幸福，實際上可能存在不和或失衡。也可能表示家庭壓力、情感落差或期望破滅。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Harmony in the family or group / emotional fulfillment / growing happiness",
          zh: "家庭或團體和諧/情感圓滿/幸福感提升",
        },
        reversed: {
          en: "Outward harmony but inner unease / problems within the family or group",
          zh: "表面和諧但內部不安/家庭或團體出現問題",
        },
      },
      innerState: {
        upright: {
          en: "Feeling surrounded by love / at ease / wanting to share happiness with important people",
          zh: "感到被愛包圍/安心/想與重要的人分享幸福",
        },
        reversed: {
          en: "Doubting happiness / feeling uneasy / afraid the good things will fade",
          zh: "對幸福感到懷疑/不安/害怕美好消失",
        },
      },
      rootCause: {
        upright: {
          en: "Overidealizing happiness / seeing only the surface / ignoring real problems",
          zh: "過度理想化幸福/只看表象/忽略現實問題",
        },
        reversed: {
          en: "Inner problems are being covered over / expectations are too high / communication is lacking",
          zh: "內部問題被掩蓋/期待過高/缺乏溝通",
        },
      },
      development: {
        upright: {
          en: "A relationship reaches fulfillment / harmony among family or partners / a shared wish comes true",
          zh: "關係圓滿/家人或伴侶間和諧/共同願望實現",
        },
        reversed: {
          en: "Disharmony gradually surfaces / expectations fall flat / emotional fulfillment decreases",
          zh: "不和逐漸浮現/期待落空/情感滿足下降",
        },
      },
      advice: {
        upright: {
          en: "Treasure the people around you / share happiness / create a secure and peaceful environment",
          zh: "珍惜身邊的人/分享幸福/建立安心的環境",
        },
        reversed: {
          en: "Do not preserve only surface peace / face the real issues / start communicating again",
          zh: "不要只維持表面和平/面對真正問題/重新溝通",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "A happy romance / family blessings / marriage and a stable relationship",
          zh: "幸福的戀情/家庭祝福/結婚與穩定關係",
        },
        reversed: {
          en: "Family opposition / a relationship becoming superficial / anxiety about the future",
          zh: "家庭反對/關係表面化/對未來不安",
        },
      },
      work: {
        upright: {
          en: "A good team atmosphere / successful collaboration / a workplace that feels as safe and supportive as home",
          zh: "團隊氣氛良好/合作成果/職場像家一樣安心",
        },
        reversed: {
          en: "Team discord / cooperation only on the surface / inner conflict",
          zh: "團隊失和/表面合作/內部矛盾",
        },
      },
      interpersonal: {
        upright: {
          en: "A family-like bond / a safe circle / shared happiness",
          zh: "家人般的關係/安心的圈子/共同幸福",
        },
        reversed: {
          en: "Inner discord / pressure within the relationship / pretending everything is harmonious",
          zh: "內部不和/關係壓力/假裝和諧",
        },
      },
      others: {
        upright: {
          en: "Happiness / family / rainbow / blessing / fulfillment",
          zh: "幸福/家庭/彩虹/祝福/圓滿",
        },
        reversed: {
          en: "Disharmony / surface happiness / broken expectations",
          zh: "不和/表面幸福/期待破滅",
        },
      },
    },
  },
  {
    id: "page-of-cups",
    name: {
      en: "Page of Cups",
      zh: "聖杯侍者",
    },
    arcana: "minor",
    suit: "cups",
    number: 11,
    description: {
      en: "A young page holds a cup from which a fish appears. The image suggests innocent imagination, emotional messages, and a heart open to wonder.",
      zh: "年輕侍者手捧聖杯，而魚從杯中探出頭來。這個畫面暗示純真的想像力、情感訊息，以及對奇妙事物敞開的心。",
    },
    coreKeyword: {
      en: "Sensitivity",
      zh: "感受性",
    },
    meaning: {
      upright: {
        en: "Receiving emotional messages with an innocent heart. You receive feelings or inspiration with softness and purity. This card suggests confessions, messages, creativity, and delicate sensitivity.",
        zh: "以純真的心接受情感訊息：以柔軟而純真的心接收感情或靈感。這張牌暗示告白、訊息、創意與細膩的感受力。",
      },
      reversed: {
        en: "Immature emotions that are easily unsettled. Feelings have not fully matured and are easily swayed by mood or fantasy. It can also point to escapism, childishness, or unstable emotional expression.",
        zh: "情緒幼稚而容易動搖：情緒尚未成熟，容易被氣氛或幻想影響。也可能表示逃避現實、任性或不穩定的情感表達。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "An emotional message arrives / fresh inspiration appears / your mood becomes softer",
          zh: "情感訊息到來/新靈感出現/心情變得柔軟",
        },
        reversed: {
          en: "Unstable emotions / unclear messages / easily influenced by fantasy",
          zh: "情緒不穩/訊息不明確/容易被幻想影響",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to express your feelings / full of imagination / curious and sensitive",
          zh: "想表達心意/充滿想像力/好奇而敏感",
        },
        reversed: {
          en: "Willful / immature / afraid of rejection",
          zh: "任性/不成熟/害怕被拒絕",
        },
      },
      rootCause: {
        upright: {
          en: "Too naive / acting only on feeling / lacking realistic judgment",
          zh: "太過天真/只憑感覺行動/缺乏現實判斷",
        },
        reversed: {
          en: "Escaping reality / overly emotional / confusing imagination with fact",
          zh: "逃避現實/情緒化/想像與事實混淆",
        },
      },
      development: {
        upright: {
          en: "Receiving a message or invitation / creative ideas begin to grow / feelings start to move",
          zh: "收到消息或邀請/創意萌芽/感情開始流動",
        },
        reversed: {
          en: "A message is delayed / fantasy falls apart / emotional ups and downs",
          zh: "訊息延遲/幻想破滅/情緒波動",
        },
      },
      advice: {
        upright: {
          en: "Express your feelings honestly / cherish inspiration / stay soft-hearted",
          zh: "坦率表達心情/珍惜靈感/保持柔軟",
        },
        reversed: {
          en: "Do not live only in fantasy / learn to express yourself more maturely / confirm the facts",
          zh: "不要只活在幻想中/學會成熟表達/確認事實",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Confession / flirtatious message / innocent romance / a youthful or endearing person",
          zh: "告白/曖昧訊息/純真的戀情/年輕或可愛的人",
        },
        reversed: {
          en: "Immature romance / emotional instability / an unreliable confession",
          zh: "幼稚戀情/情緒不穩/不可靠的告白",
        },
      },
      work: {
        upright: {
          en: "Creative planning / inspiration / work related to art or healing",
          zh: "創意企劃/靈感/藝術或療癒相關工作",
        },
        reversed: {
          en: "Lacking practicality / emotions affecting work / immature responses",
          zh: "缺乏實際性/情緒影響工作/不成熟應對",
        },
      },
      interpersonal: {
        upright: {
          en: "A gentle person / someone willing to listen / a bearer of news",
          zh: "溫柔的人/願意傾聽/帶來消息的人",
        },
        reversed: {
          en: "A willful person / emotionally charged interactions / an immature relationship",
          zh: "任性的人/情緒化互動/不成熟關係",
        },
      },
      others: {
        upright: {
          en: "Message / inspiration / childlike heart / imagination / dream",
          zh: "訊息/靈感/童心/想像力/夢",
        },
        reversed: {
          en: "Fantasy / willfulness / emotional instability / avoidance",
          zh: "幻想/任性/情緒不穩/逃避",
        },
      },
    },
  },
  {
    id: "knight-of-cups",
    name: {
      en: "Knight of Cups",
      zh: "聖杯騎士",
    },
    arcana: "minor",
    suit: "cups",
    number: 12,
    description: {
      en: "A knight rides calmly with a cup in hand, as if delivering an emotional invitation. This card shows romance, ideals, and movement guided by the heart.",
      zh: "騎士手持聖杯，平靜地騎馬前行，像是帶著情感上的邀請。這張牌呈現浪漫、理想，以及由內心引導的行動。",
    },
    coreKeyword: {
      en: "Romance",
      zh: "浪漫",
    },
    meaning: {
      upright: {
        en: "Approaching your goal with romantic ideals. You move things forward through gentleness, ideals, and emotion. This card suggests confessions, invitations, creative inspiration, and romantic action.",
        zh: "帶著浪漫理想靠近目標：以溫柔、理想與感情推動事情前進。這張牌暗示告白、邀約、創作靈感與浪漫的行動。",
      },
      reversed: {
          en: "Immersed in fantasy and lacking real action. Too much indulgence in dreams or emotion leaves too little follow-through. It may also suggest indecision, sweet talk, or unreliable promises.",
        zh: "沉溺幻想而缺乏實際行動：過度沉溺於幻想或情緒，導致缺乏現實行動。也可能表示優柔寡斷、甜言蜜語或不可靠的承諾。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "An invitation or proposal arrives / emotions begin to move / the romantic atmosphere strengthens",
          zh: "邀約或提案到來/情感開始流動/浪漫氣氛提升",
        },
        reversed: {
          en: "Sweet words without substance / plans stall / emotions are unstable",
          zh: "甜言蜜語但缺乏實際/計畫停滯/情感不穩",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to move toward an ideal / drawn to romance / willing to express your feelings",
          zh: "想靠近理想/被浪漫吸引/願意表達心意",
        },
        reversed: {
          en: "Lost in fantasy / indecisive / wanting to escape reality",
          zh: "沉溺幻想/優柔寡斷/想逃避現實",
        },
      },
      rootCause: {
        upright: {
          en: "Overidealizing things / seeing only the beautiful side / lacking a realistic plan",
          zh: "過度理想化/只看美好一面/缺乏現實計畫",
        },
        reversed: {
          en: "Promises are not reliable / actions are led by emotion / easily tempted",
          zh: "承諾不夠可靠/情緒主導行動/容易受誘惑",
        },
      },
      development: {
        upright: {
          en: "A confession or invitation succeeds / creativity progresses / your ideal draws closer",
          zh: "告白或邀請成功/創意進展/理想逐漸靠近",
        },
        reversed: {
          en: "An invitation is canceled / disappointment / the romantic mood fades",
          zh: "邀約取消/失望/浪漫氣氛消退",
        },
      },
      advice: {
        upright: {
          en: "Act gently / express yourself sincerely / move toward your ideal",
          zh: "溫柔地行動/用誠意表達/朝理想前進",
        },
        reversed: {
          en: "Make sure the other person is sincere / do not get swept away by the mood / follow through on what is promised",
          zh: "確認對方是否真誠/不要被氣氛帶走/落實承諾",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Romantic pursuit / confession / ideal partner / a gentle lover",
          zh: "浪漫追求/告白/理想對象/溫柔情人",
        },
        reversed: {
          en: "Smooth talk / unresolved ambiguity / irresponsible romance",
          zh: "花言巧語/曖昧不明/不負責任的浪漫",
        },
      },
      work: {
        upright: {
          en: "A proposal succeeds / creative work / opportunities in art or service",
          zh: "提案成功/創意工作/藝術或服務相關機會",
        },
        reversed: {
          en: "Plans are unrealistic / lack of execution / promises fall through",
          zh: "計畫不實際/缺乏執行力/承諾落空",
        },
      },
      interpersonal: {
        upright: {
          en: "A gentle and courteous person / emotional exchange / someone who brings an invitation",
          zh: "溫柔有禮的人/情感交流/帶來邀請的人",
        },
        reversed: {
          en: "An unreliable person / someone who only says pleasing things / an emotionally charged relationship",
          zh: "不可靠的人/只說好聽話/情緒化關係",
        },
      },
      others: {
        upright: {
          en: "Invitation / romance / ideals / art / journey",
          zh: "邀請/浪漫/理想/藝術/旅程",
        },
        reversed: {
          en: "Fantasy / delay / unreliable promises / drifting emotions",
          zh: "幻想/拖延/不可靠承諾/情緒漂浮",
        },
      },
    },
  },
  {
    id: "queen-of-cups",
    name: {
      en: "Queen of Cups",
      zh: "聖杯王后",
    },
    arcana: "minor",
    suit: "cups",
    number: 13,
    description: {
      en: "The Queen gazes quietly at a richly decorated cup. She seems to look into the depths of the heart, symbolizing deep empathy, intuition, and emotional receptivity.",
      zh: "王后靜靜凝視著裝飾華麗的聖杯。她像是在注視心靈深處，象徵深厚的共感力、直覺與接納情感的能力。",
    },
    coreKeyword: {
      en: "Compassion",
      zh: "慈愛",
    },
    meaning: {
      upright: {
        en: "Embracing everything with compassion and intuition. The heart is gentle and able to understand and contain others' emotions. This card suggests healing, empathy, intuition, and deep love.",
        zh: "以慈愛與直覺接納一切：內心柔軟，能理解並包容他人的情感。這張牌暗示療癒、共感、直覺與深層的愛。",
      },
      reversed: {
        en: "Becoming so immersed in emotion that boundaries dissolve. Feelings may be too sensitive, making you vulnerable to others' emotional influence. It can also suggest dependency, emotional volatility, or escape from reality.",
        zh: "過度沉浸情緒而失去界線：情緒過度敏感，可能失去界線或被他人情感影響。也可能表示依賴、情緒化或逃避現實。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Emotional care is needed / intuition is sharp / a good time for healing and listening",
          zh: "需要情感照顧/直覺敏銳/適合療癒與傾聽",
        },
        reversed: {
          en: "Overly sensitive emotions / blurred boundaries / easily influenced",
          zh: "情緒過度敏感/界線模糊/容易受影響",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to hold space for the other / strong empathy / a gentle heart",
          zh: "想包容對方/共感力強/內心柔軟",
        },
        reversed: {
          en: "Uneasy / dependent / struggling to control emotions",
          zh: "不安/依賴/情緒難以控制",
        },
      },
      rootCause: {
        upright: {
          en: "Taking on too much of others' emotions / lacking boundaries / prone to self-sacrifice",
          zh: "過度承接他人情緒/缺乏界線/容易自我犧牲",
        },
        reversed: {
          en: "Emotions are suppressed / escaping reality / sinking into fantasy",
          zh: "情緒被壓抑/逃避現實/沉溺幻想",
        },
      },
      development: {
        upright: {
          en: "Emotions are healed / the relationship deepens / intuition brings an answer",
          zh: "情感被療癒/關係更深/直覺帶來答案",
        },
        reversed: {
          en: "Emotional imbalance / dependency in the relationship deepens / feeling drained",
          zh: "情緒失衡/關係依賴加深/感到疲憊",
        },
      },
      advice: {
        upright: {
          en: "Trust your intuition / be gentle but keep boundaries / care for your own heart",
          zh: "相信直覺/溫柔但要有界線/照顧自己的心",
        },
        reversed: {
          en: "Do not keep taking everything in / stop projecting emotions / return to reality",
          zh: "不要一味承受/停止情緒投射/回到現實",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Deep love / a compassionate partner / a healing relationship",
          zh: "深情的愛/包容的伴侶/療癒關係",
        },
        reversed: {
          en: "Dependent love / emotional manipulation / oversensitivity",
          zh: "依賴戀情/情緒勒索/過度敏感",
        },
      },
      work: {
        upright: {
          en: "Caregiving work / counseling, art, or healing fields / supporting others emotionally",
          zh: "照顧型工作/諮詢、藝術、療癒相關/用情感支持他人",
        },
        reversed: {
          en: "Work affected by emotion / unclear boundaries / excessive fatigue",
          zh: "被情緒影響工作/界線不清/過度疲憊",
        },
      },
      interpersonal: {
        upright: {
          en: "An understanding person / someone you can confide in / gentle exchange",
          zh: "善解人意的人/可以傾訴的對象/溫柔交流",
        },
        reversed: {
          en: "An emotional person / an overly dependent bond / hard to say no",
          zh: "情緒化的人/依賴關係/難以拒絕",
        },
      },
      others: {
        upright: {
          en: "Compassion / intuition / healing / dreams / maternal energy",
          zh: "慈愛/直覺/療癒/夢境/母性",
        },
        reversed: {
          en: "Dependency / emotional confusion / avoidance / unclear boundaries",
          zh: "依賴/情緒混亂/逃避/界線不清",
        },
      },
    },
  },
  {
    id: "king-of-cups",
    name: {
      en: "King of Cups",
      zh: "聖杯國王",
    },
    arcana: "minor",
    suit: "cups",
    number: 14,
    description: {
      en: "The King sits calmly on a throne floating above the sea, holding a cup and scepter. Although surrounded by waves, he remains composed, showing emotional maturity and mastery.",
      zh: "國王坐在漂浮於海上的王座，手持聖杯與權杖。即使被波浪包圍，仍保持沉著，呈現成熟與掌握情感的力量。",
    },
    coreKeyword: {
      en: "Emotional control",
      zh: "情感控制",
    },
    meaning: {
      upright: {
        en: "Holding emotional mastery while leading with compassion. Feelings run deep, yet they are managed calmly instead of becoming overwhelming. This card suggests mature love, tolerance, understanding, and emotional leadership.",
        zh: "成熟地掌控情感並給予包容：情感豐富卻能冷靜掌握，不被情緒吞沒。這張牌暗示成熟的愛、包容、理解與情緒上的領導力。",
      },
      reversed: {
        en: "Suppressing or controlling emotions in a way that creates imbalance. Feelings are held down or managed unhealthily. It can also suggest a calm exterior with inner turmoil, or using emotion to control others.",
        zh: "壓抑或操控情緒而失衡：情感被壓抑或以不健康方式控制。也可能表示表面冷靜、內心動搖，或以情緒操控他人。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Emotions need mature handling / dealing with emotional issues calmly / stabilizing the situation through compassion",
          zh: "情緒需要成熟掌控/冷靜處理感情問題/以包容穩定局面",
        },
        reversed: {
          en: "Emotions are suppressed / outwardly calm but inwardly chaotic / emotional imbalance",
          zh: "情緒被壓抑/表面冷靜內心混亂/感情失衡",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to stay calm / willing to be understanding / emotionally mature",
          zh: "想保持冷靜/願意包容他人/情感成熟",
        },
        reversed: {
          en: "Suppressing true feelings / unwilling to express yourself / inner unease",
          zh: "壓抑真心/不想表達/內心不安",
        },
      },
      rootCause: {
        upright: {
          en: "Controlling emotions too tightly / unwilling to show vulnerability / burying your feelings too deeply",
          zh: "過度控制情緒/不願顯露脆弱/把感受藏太深",
        },
        reversed: {
          en: "Emotional manipulation / avoiding sincerity / not matching outwardly and inwardly",
          zh: "情緒操控/逃避真心/表裡不一",
        },
      },
      development: {
        upright: {
          en: "Solving problems with maturity / becoming a pillar for others / a stable relationship",
          zh: "以成熟態度解決問題/成為他人的支柱/關係穩定",
        },
        reversed: {
          en: "An emotional outburst / trust is shaken / the relationship cools",
          zh: "情緒爆發/信任動搖/關係冷卻",
        },
      },
      advice: {
        upright: {
          en: "Stay calm without suppressing yourself / express love in a mature way / keep emotional balance",
          zh: "冷靜但不要壓抑/用成熟方式表達愛/保持情緒平衡",
        },
        reversed: {
          en: "Do not control emotions or other people / speak your true feelings / close the gap between inner and outer self",
          zh: "不要操控情緒或他人/說出真正感受/調整內外落差",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "A mature partner / stable and deep love / the ability to hold space for the other person",
          zh: "成熟伴侶/穩定而深情的愛/能包容對方",
        },
        reversed: {
          en: "Emotional control games / coldness or avoidance / outward maturity with inner instability",
          zh: "情感操控/冷淡或逃避/表面成熟內心不穩",
        },
      },
      work: {
        upright: {
          en: "The ability to manage emotions / leadership and coordination / work related to service or psychology",
          zh: "管理情緒的能力/領導與協調/服務或心理相關工作",
        },
        reversed: {
          en: "Judgment affected by emotion / a controlling boss / workplace pressure",
          zh: "情緒影響判斷/操控型上司/職場壓力",
        },
      },
      interpersonal: {
        upright: {
          en: "A mature and reliable person / a good listener / someone who can steady the situation",
          zh: "成熟可靠的人/善於傾聽/能穩定場面",
        },
        reversed: {
          en: "Gentle on the surface but hard to read / emotionally controlling / not speaking honestly",
          zh: "表面溫和但難以捉摸/情緒控制/不說真話",
        },
      },
      others: {
        upright: {
          en: "Maturity / compassion / emotional management / counseling / support",
          zh: "成熟/包容/情緒管理/諮詢/支持",
        },
        reversed: {
          en: "Suppression / control / emotional imbalance / inner and outer self at odds",
          zh: "壓抑/操控/情緒失衡/表裡不一",
        },
      },
    },
  },
];