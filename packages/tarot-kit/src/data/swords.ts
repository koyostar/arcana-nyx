import type { TarotCard } from "../types/card.js";

export const swordsCards: TarotCard[] = [
  {
    id: "ace-of-swords",
    name: {
      en: "Ace of Swords",
      zh: "寶劍一",
    },
    arcana: "minor",
    suit: "swords",
    number: 1,
    image: {
      url: "/images/rider-waite/Swords01.png",
    },
    description: {
      en: "The hand of God holds a sword, and a crown symbolizing victory rests on its tip. The steep mountains in the background reveal that this is by no means an easy path. This card represents overcoming severe circumstances through strong mental power.",
      zh: "神之手握著寶劍，劍尖上有著象徵勝利的王冠。從背景的險峻山脈可得知這絕非輕鬆的道路，是張呈現以強韌精神力克服嚴苛情況的牌。",
    },
    coreKeyword: {
      en: "Pioneering",
      zh: "開拓",
    },
    meaning: {
      upright: {
        en: "Opening new paths to achieve goals: You want to challenge yourself with new things. Even when facing unfamiliar territory, you approach it with a positive and adventurous spirit.",
        zh: "以達成目標開闢：你正想要挑戰新的事物。即使面對至今從未接觸過的領域，也抱持著積極挑戰的心情。",
      },
      reversed: {
        en: "Harsh attitudes leading to destruction: Acting with self-interest as the priority without considering the consequences. Spiraling toward self-destruction.",
        zh: "強硬態度招致毀滅：不考慮壞處，而以自身利益為優先採取行動的狀態。朝著不好的方向前進，最後可能會導致自己毀滅。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A situation requiring action / Resolving to face a decisive moment / A time to achieve through your own effort",
          zh: "應該採取行動的狀況/下定決心面對勝負/憑一己之力達成的時候",
        },
        reversed: {
          en: "An irreversible situation / Receiving a heavy blow / Harsh actions causing resentment",
          zh: "無法挽回的事態/遭受沉重打擊/強硬的行動招致反感",
        },
      },
      innerState: {
        upright: {
          en: "Overcoming difficulties / Strong ambition / Wanting to correct wrongdoing",
          zh: "跨越困難/強烈的野心/想導正不法的行為",
        },
        reversed: {
          en: "Believing any harsh means are acceptable / Playing tactics / Wanting to destroy something",
          zh: "認為無論採取何種強硬手段都無妨/玩弄策略/想破壞什麼",
        },
      },
      rootCause: {
        upright: {
          en: "Over-emphasizing what is right / Being ruthless and cold-hearted / Bold decisions backfiring",
          zh: "過度強調正論/鐵面無私，沒血沒淚/大膽的決定造成反效果",
        },
        reversed: {
          en: "Recklessness / Destructive behavior / Violent attitudes that dehumanize others",
          zh: "蠻幹/具破壞力的行為/不把對方當人看的暴力態度",
        },
      },
      development: {
        upright: {
          en: "A new path appearing / Overcoming adversity to win / Achieving victory",
          zh: "出現新的道路/跨越逆境獲得勝利/贏得勝利",
        },
        reversed: {
          en: "Giving up on oneself / Poor results / All efforts wasted / Losing the battle",
          zh: "自暴自棄/不好的結果/一切白費工夫/輸掉勝負",
        },
      },
      advice: {
        upright: {
          en: "Integrate the opinions around you / Summon your remaining strength to face the problem",
          zh: "整合周遭意見/擠出最後的力量面對問題",
        },
        reversed: {
          en: "There is danger in pushing forward forcefully / Temporarily retreat / Capitalize on the effort you've made so far",
          zh: "強硬推行會有危險/暫時撤退/活用至今為止的努力",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Cold attitude / Cutting through illusions / Defeating love rivals / Strong desire to win your love interest",
          zh: "態度冷酷/斬斷幻想/戰勝情敵/想得到對方的強烈想法",
        },
        reversed: {
          en: "Surrendering to emotional turmoil / Disregarding the other person's feelings / Attempting to test others and failing / Domestic abuse",
          zh: "順應情感失控/無視於對方的心情/試圖試探周遭而失敗/家暴",
        },
      },
      work: {
        upright: {
          en: "Successfully implementing a solid plan / Using intellect to overcome difficulty / Uncovering wrongdoing",
          zh: "確實擬定計畫而成功/運用頭腦擺脫困境/揭發不法行為",
        },
        reversed: {
          en: "Major losses / Difficult projects / Lack of support / Abuse of power / Harassment / Wrongful dismissal",
          zh: "重大損失/有難度的計畫/沒人跟隨/濫用職權/職權騷擾/不當解僱",
        },
      },
      interpersonal: {
        upright: {
          en: "A smart and logical person / Relationships without pretense / Having execution ability / Objective opinion exchange / Logical conversation",
          zh: "聰明而有邏輯的人/沒有虛假的關係/有執行能力/客觀的意見交換/合乎邏輯地談話",
        },
        reversed: {
          en: "Rough attitude / Ranting wildly / Disputes that cannot be repaired / Obstacles appearing / Relationship deterioration",
          zh: "態度粗野/口吐狂言/無法修復的爭執/出現妨礙者/關係惡化",
        },
      },
      others: {
        upright: {
          en: "A position of command and control / Entrusted with leadership / Standards of good and evil / Following the law / Judgment / Surgery",
          zh: "支配管理的立場/交付領導職務/善惡基準/遵循法律/審判/手術",
        },
        reversed: {
          en: "Ruining everything yourself / Not facing reality / Fatal misjudgment / Losing the path forward",
          zh: "自己糟蹋一切/不正視現實/致命性的判斷失誤/迷失應當前進的道路",
        },
      },
    },
  },
  {
    id: "two-of-swords",
    name: {
      en: "Two of Swords",
      zh: "寶劍二",
    },
    arcana: "minor",
    suit: "swords",
    number: 2,
    image: {
      url: "/images/rider-waite/Swords02.png",
    },
    description: {
      en: "A woman holds two swords with both hands. Her blindfold may indicate something she does not want to face, or perhaps she wants to hide her true thoughts. The two swords suggest a state of inner conflict.",
      zh: "雙手持劍的女子，蒙住雙眼是因為有不想面對的事物，還是想要隱藏自己的真正想法呢？兩把寶劍或許暗示著左右為難的狀態。",
    },
    coreKeyword: {
      en: "Entanglement",
      zh: "糾葛",
    },
    meaning: {
      upright: {
        en: "Maintaining harmony with a calm heart: Face the problem before you without rushing to conclusions. By choosing the right moment, you can restore inner peace.",
        zh: "以平靜的心保持和諧：面對眼前的問題，不要勉強做出結論，而是維持現狀。藉由斟酌時機，就能恢復內心平靜。",
      },
      reversed: {
        en: "Seeking quick fixes leads to a dead end: Avoiding the core of the problem and using temporary measures may result in failure. Previously resolved issues may resurface.",
        zh: "只想敷衍了事而走投無路：不面對問題的本質，採取暫時應付的方式應對，會有失敗的可能性。原本認定已經結束的問題也可能重新浮上檯面。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Recovering calm from panic / Problems gradually resolving",
          zh: "從慌張中恢復的冷靜狀況/問題正逐漸收尾",
        },
        reversed: {
          en: "A dead-end situation / Feeling oppressed / Unable to process your own emotions",
          zh: "走投無路的狀況/有壓抑感/無法認同自己的情感",
        },
      },
      innerState: {
        upright: {
          en: "A peaceful frame of mind / Anxieties fading / Willingness to accept different perspectives",
          zh: "平靜的心境/不安消失/能接受不同事物的心境",
        },
        reversed: {
          en: "Unwilling to face reality / Wanting to be left alone / Deceiving yourself / Avoiding a decision",
          zh: "不想正視現實/希望任何人都別理會自己/欺騙自己/不想決定",
        },
      },
      rootCause: {
        upright: {
          en: "Judging too coolly / Excessive caution backfiring / A truth only you know",
          zh: "過於冷靜地判斷/過於慎重造成反效果/只有自己知道的真相",
        },
        reversed: {
          en: "Turning a blind eye to emotions / Distancing yourself from others / Not confronting the truth",
          zh: "對情感視而不見/疏遠他人的態度/不正視真相",
        },
      },
      development: {
        upright: {
          en: "Problems resolving and worries fading / Restoring calm / Accepting the truth",
          zh: "解決問題不再煩惱/恢復冷靜/接受真相",
        },
        reversed: {
          en: "Perspectives becoming narrow and stubborn / People leaving / Being betrayed / Refusing to make a decision",
          zh: "眼界變得狹隘而固執/人們離去/遭到背叛/拒絕做決定",
        },
      },
      advice: {
        upright: {
          en: "Do not rush to conclusions / Reason is more important than emotion / Maintain balance for now",
          zh: "不要急於做出結論/理性比感性更重要/現在先保持平衡",
        },
        reversed: {
          en: "Distinguish fact from fantasy / Be careful of dishonest people / Stop running away",
          zh: "區分事實與妄想/小心會撒謊的對象/別再逃避",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Budding affection / Connection with someone younger than you / Balance between you and your partner is important",
          zh: "萌生戀慕之情/與比自己小的對象的緣分/與對方之間的平衡很重要",
        },
        reversed: {
          en: "Feigning indifference to your love interest but being disliked / Immature love expression / False maturity / Marriage fraud",
          zh: "裝作對喜歡的人不感興趣而被討厭/幼稚的愛情表現/假裝成熟的態度/婚姻詐欺",
        },
      },
      work: {
        upright: {
          en: "Smoothly resolving troubles / Harmonious and stable workplace / Technical work / Taking a wait-and-see approach",
          zh: "順利解決麻煩/和諧平穩的職場/技術相關的工作/觀望情況",
        },
        reversed: {
          en: "Skillfully bluffing your way through / Mistakenly believing everything is going smoothly / Breach of faith / Behind-the-scenes conspiracy / Boasting",
          zh: "口才好又能幹地應付/誤以為一切順利/背信的行為/檯面下的陰謀/吹牛",
        },
      },
      interpersonal: {
        upright: {
          en: "Stable relationships / An always gentle person / Observing the other person's attitude to maintain balance / Repairing relationships",
          zh: "平穩的人際關係/總是很溫柔的人/觀望對方的態度以取得平衡/修復關係",
        },
        reversed: {
          en: "Being torn between sides and suffering / Not knowing who to trust / Someone is deceiving you",
          zh: "處於左右為難的立場而痛苦/不知道該相信誰/有人對自己說謊",
        },
      },
      others: {
        upright: {
          en: "Accepting opinions different from your own / Clearing your name / Considering compromise options / Seeing with your heart",
          zh: "接受與自己不同的意見/洗刷污名/思考妥協方案/以心看事情",
        },
        reversed: {
          en: "Unknowingly entering difficult circumstances / Closing your heart and only listening to what you want to hear / Fraud",
          zh: "主動邁入逆境卻不自知/緊閉心房，只聽自己想聽的事物/詐欺",
        },
      },
    },
  },
  {
    id: "three-of-swords",
    name: {
      en: "Three of Swords",
      zh: "寶劍三",
    },
    arcana: "minor",
    suit: "swords",
    number: 3,
    image: {
      url: "/images/rider-waite/Swords03.png",
    },
    description: {
      en: "A heart representing love is pierced by three swords and drenched in sorrowful rain. This card suggests a shocking event that deeply wounds the heart.",
      zh: "象徵愛或心臟的愛心被三把寶劍穿過，並淋著代表悲傷的雨。這是張暗示著發生令內心深受傷害的震驚事件的牌。",
    },
    coreKeyword: {
      en: "Pain",
      zh: "疼痛",
    },
    meaning: {
      upright: {
        en: "Accepting the core of reality: Understanding the truth you did not want to know. Despite this unwelcome situation, you attempt to move forward.",
        zh: "接受事物的核心：確實理解了不想得知的事實、並非本意的狀況。雖然處於失意狀態，卻也試圖邁出步伐。",
      },
      reversed: {
        en: "Rejecting truth and struggling in pain: Overwhelmed by a shocking event. Unable to accept the reality before you, your suffering may be prolonged.",
        zh: "拒絕真相而掙扎痛苦：因大受打擊的事件而陷入混亂狀態。由於無法接受眼前的現實，可能使得痛苦延長。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Fortune shrouded in dark clouds / Facing troubles / Receiving a blow",
          zh: "烏雲籠罩的運氣/面臨麻煩/受到打擊",
        },
        reversed: {
          en: "Unable to face reality / Difficult circumstances to accept / Chaos and lack of composure",
          zh: "無法正視現實/難以接受的狀況/混亂而缺乏冷靜",
        },
      },
      innerState: {
        upright: {
          en: "Trying to accept despite the pain / Wanting to let go of certain things",
          zh: "雖然痛苦但仍試圖接受/想要割捨某些事物",
        },
        reversed: {
          en: "Dark fantasies expanding / Desperately wanting to escape reality / Rejecting everything",
          zh: "不好的妄想擴展開來/一心想要逃避現實/拒絕一切",
        },
      },
      rootCause: {
        upright: {
          en: "A problem you refused to face long ago / Misinterpreting what is essential / Missing the point",
          zh: "一直不願正視的問題/誤判本質/偏離重點",
        },
        reversed: {
          en: "Inflicting suffering on yourself / Losing composure / Internal conflict",
          zh: "自己令自己痛苦/失去平常心/內心矛盾",
        },
      },
      development: {
        upright: {
          en: "Inevitable separation / Problems and troubles coming to an end / A wounded heart",
          zh: "無可避免的別離/問題與麻煩一起有了結果/內心受傷",
        },
        reversed: {
          en: "Learning something unwelcome / Unable to process emotions and things you refuse to accept",
          zh: "知道了不想知道的事情/無法整理內心想拒絕的事情",
        },
      },
      advice: {
        upright: {
          en: "This is a time for growth / If you remain calm, you will see the light / Endure",
          zh: "現在正是成長的時刻/只要冷靜，就可以看見光芒/忍耐",
        },
        reversed: {
          en: "Do not fall into a victim mentality / First process your emotions / Your acceptance matters",
          zh: "不要陷入被害妄想/首先要整理心情/視接受方式而定",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Torn love / Discovering infidelity or a love triangle / Painful romance / Spiritually mature person",
          zh: "被撕裂的愛/發現出軌或三角關係/疼痛的戀情/精神上成熟的人",
        },
        reversed: {
          en: "Intense jealousy / Negative fantasies / Believing you have been betrayed / Fear of breaking up / Unwilling to accept the end",
          zh: "強烈嫉妒/不好的妄想/認為自己遭到背叛/害怕失戀/不想承認的結束",
        },
      },
      work: {
        upright: {
          en: "Failed presentation / Business-like attitude / Mechanical work / Job rejection / Resignation",
          zh: "簡報失敗/公事公辦的態度/機械式的作業/不錄用/辭職",
        },
        reversed: {
          en: "Poor work environment / Unable to handle information properly / Inflexibility / Making mistakes / Loss",
          zh: "惡劣的工作環境/無法處理好情報/不知變通/犯錯/損失",
        },
      },
      interpersonal: {
        upright: {
          en: "Relationships filled with arguments / Inappropriate language / Competing with rivals / Unhelpful people",
          zh: "總是爭執的關係/措辭不當/與競爭對手互相爭奪/沒有益處的人",
        },
        reversed: {
          en: "No way to accept something / Strong resistance causing turmoil / Conversations going in a negative direction",
          zh: "無論如何都無法接受/強烈抗拒招致混亂的人/對話朝不好的方向進行",
        },
      },
      others: {
        upright: {
          en: "Accepting facts / As soon as you accept the pain, things will gradually improve / Tailoring / Clothing-related / Surgery",
          zh: "接受事實/只要接受痛楚就能逐漸好轉/裁縫/服裝相關/外科手術",
        },
        reversed: {
          en: "Fantasy breeding more fantasy / The prejudice that \"only I\" suffer / Unreasonable circumstances / Separation from important people",
          zh: "妄想會衍生妄想/認為「只有自己」的偏見/不合理的境遇/與重要的人分離",
        },
      },
    },
  },
  {
    id: "four-of-swords",
    name: {
      en: "Four of Swords",
      zh: "寶劍四",
    },
    arcana: "minor",
    suit: "swords",
    number: 4,
    image: {
      url: "/images/rider-waite/Swords04.png",
    },
    description: {
      en: "A knight statue lies with closed eyes, hands joined on the chest as if in prayer. This card expresses quiet rest and solitude.",
      zh: "騎士雕像閉上雙眼躺著，雙手在胸口合十，是因為在祈禱著什麼嗎？是張表現安靜休息或獨處時間的牌。",
    },
    coreKeyword: {
      en: "Recovery",
      zh: "恢復",
    },
    meaning: {
      upright: {
        en: "Quiet rest and regrouping: The upright position expresses \"resting.\" Things tend to slow down. However, during this period you also gain time for reflection.",
        zh: "安靜休息調整態勢：正位是「休養中」的表現，事物有減速的傾向。不過在這段期間也獲得了思考的時間。",
      },
      reversed: {
        en: "Preparing to start again: The reversed position indicates \"recovery is complete.\" Rest has ended, you are awakening, and moving toward a fresh start.",
        zh: "做好準備再次啟動：逆位是「修復完成」的表現。可認為是休息時間結束，迎向甦醒的時刻，並邁向重新啟動的階段。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Temporary stagnation / A time when rest or maintenance is needed / A time to relax",
          zh: "暫時停滯/需要保養或休息的時候/放鬆的時間",
        },
        reversed: {
          en: "Restarting / Lucky timing to begin action / A long rest ending / Full physical and mental energy",
          zh: "重新啟動/開始行動的運氣/漫長的休息結束/體力、精神飽滿",
        },
      },
      innerState: {
        upright: {
          en: "Wanting solitude / Wanting to sleep / Wanting to rest / Nostalgic feelings",
          zh: "想要獨處的時間/想睡覺/想休息/懷念回憶",
        },
        reversed: {
          en: "Wanting to take action / A sudden realization / Aiming to regroup",
          zh: "想行動/茅塞頓開的醒悟/以重整旗鼓為目標",
        },
      },
      rootCause: {
        upright: {
          en: "Accumulated fatigue / Poor physical condition / Too busy to face yourself",
          zh: "疲勞累積/身體狀況不佳/顧著忙碌而沒有面對自己",
        },
        reversed: {
          en: "Sluggish stagnation / Lacking courage to begin / Too carefree",
          zh: "懶洋洋的遲滯狀態/沒有開始的勇氣/過於悠哉",
        },
      },
      development: {
        upright: {
          en: "Forced temporary halt / A state requiring recuperation / Power outage",
          zh: "被迫暫時停止/需要休養的狀態/停電",
        },
        reversed: {
          en: "Starting fresh / Getting your affairs in order / Physical recovery / Situation where you can take action",
          zh: "重新開始/調整好狀況/體力恢復/可以行動的狀況",
        },
      },
      advice: {
        upright: {
          en: "Reserve time to examine yourself / Rest occasionally / First get some sleep",
          zh: "預留審視自己的時間/偶爾要休息/首先該睡一覺",
        },
        reversed: {
          en: "When the time comes, start again / Resting too long makes you lazier / Do not be complacent",
          zh: "時機到來時重新開始/休息過頭就會更懶得動/切勿偷懶休息",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Should maintain distance / Temporarily cease arguments or marriage discussions / Be alone to confirm what you truly want",
          zh: "應該保持距離/暫時停止爭執或結婚話題/獨處以確認真實想法",
        },
        reversed: {
          en: "A distant relationship starting to move again / Crossing each other's boundaries / Discovering who you truly like",
          zh: "疏遠的關係重新動起來/踐踏彼此的禁忌/發現自己真正喜歡的人",
        },
      },
      work: {
        upright: {
          en: "Resetting your position / Better to put things on hold temporarily / Taking special leave / Leaving work due to retirement or maternity leave",
          zh: "重新擺好架勢/暫時擱置為佳/取得特休/因退休或產假而離開工作",
        },
        reversed: {
          en: "End of vacation / Overcoming the transition period / Starting a new system / Returning to work / A stalled project begins to move",
          zh: "休假結束/克服空白期/展開新體制/復職/原本問題的案子開始啟動",
        },
      },
      interpersonal: {
        upright: {
          en: "A relationship where you understand each other without words / Exquisite distance / Someone who can give calm advice",
          zh: "即使什麼都沒說也能彼此理解的關係/絕妙的距離感/能給予冷靜建議的人",
        },
        reversed: {
          en: "Upgrading to a new relationship / A conversation with new discoveries / Expressing what you haven't been able to say before",
          zh: "升級到新的關係/有所發現的對話/說出至今為止沒能說出口的話",
        },
      },
      others: {
        upright: {
          en: "Quality sleep / Massage or aromatherapy healing / A quiet place / Preparing for the future / Hospitalization / Visiting a grave",
          zh: "優良的睡眠品質/按摩或芳療的療癒/安靜的地點/為將來做準備/住院/掃墓",
        },
        reversed: {
          en: "Relieving stress / Starting to move toward the future / Escaping stagnation / Discharge from hospital",
          zh: "消除壓力/朝著未來開始行動/脫離遲滯狀態/出院",
        },
      },
    },
  },
  {
    id: "five-of-swords",
    name: {
      en: "Five of Swords",
      zh: "寶劍五",
    },
    arcana: "minor",
    suit: "swords",
    number: 5,
    image: {
      url: "/images/rider-waite/Swords05.png",
    },
    description: {
      en: "A man holding swords looks at two defeated people. A dispute seems to have taken place, and his grinning posture with the ominous clouds presents a hollow victory.",
      zh: "一名立起寶劍的男人望著戰敗的其他兩人。這裡剛才似乎發生過某些爭執，咧嘴而笑的男人姿態與險惡的雲形呈現出「空虛的勝利」。",
    },
    coreKeyword: {
      en: "Confusion",
      zh: "混亂",
    },
    meaning: {
      upright: {
        en: "Seizing victory by any means: Expressing determination to achieve your goals no matter what. You won't hesitate to use tactics and are highly cunning and strategic.",
        zh: "不擇手段強取豪奪：表現出不擇手段也想達成目的的決心。想必不會吝於使用策略，極度狡猾而具戰略性。",
      },
      reversed: {
        en: "Important things being taken away: Due to unexpected traps or accidents, important things are lost. The cause may be your own inadequate ability or carelessness.",
        zh: "重要的事物被奪走：由於出乎意料的陷阱或意外，導致失去重要事物的狀態。原因或許是自己的能力不足或輕忽大意。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Caught in turmoil with no time to consider / Not allowing a moment of respite",
          zh: "爭鬥的漩渦中顧不了那麼多的狀況/不容許一絲空隙",
        },
        reversed: {
          en: "Defeat / A situation filled with others' malice / Possibly falling into a trap / Danger approaching",
          zh: "敗戰/充斥著他人惡意的狀況/可能落入陷阱/危險正在接近",
        },
      },
      innerState: {
        upright: {
          en: "As long as I am well / Wanting to deceive the other person / Not wanting to show mercy",
          zh: "只要自己好就好/想欺騙對方/不想手下留情",
        },
        reversed: {
          en: "A miserable feeling / Sense of defeat / A feeling of dishonor / Sadness at losing something important",
          zh: "悲慘的心情/敗北感/不體面的感受/失去重要事物的悲傷",
        },
      },
      rootCause: {
        upright: {
          en: "Deceiving others / Excessive scheming / Treating weaker opponents poorly",
          zh: "欺騙他人/過多的謀略/對於比自己弱的對手態度差勁",
        },
        reversed: {
          en: "Weak defense / Hoping the other person will go easy on you / An unreliable state / Overestimation of your abilities",
          zh: "防守不嚴/期待對方手下留情/不可靠的狀態/評價過高",
        },
      },
      development: {
        upright: {
          en: "Disputes await you / A time when wisdom is needed / Strategy leading to temptation to do wrong",
          zh: "等著你的是爭端/需要智慧的時候/策略被引誘去做壞事",
        },
        reversed: {
          en: "Events that cause loss of credibility / Inadequate preparation leading to self-destruction / Having important things stolen",
          zh: "失去信用的事件/準備不足而自取滅亡/被騙走重要的事物",
        },
      },
      advice: {
        upright: {
          en: "Make a detailed battle plan / Abandon compassion or naive thinking / A little cunning is necessary",
          zh: "擬定周詳的作戰計畫/捨棄慈悲或天真想法/些許的狡猾是必須的",
        },
        reversed: {
          en: "Prepare a solid plan against loss / Defense is better than offense",
          zh: "以備損失重新確實擬定計畫/比起進攻不如轉而防守",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Winning someone's romantic interest / Strategically advancing a romance / Treating your partner roughly",
          zh: "奪取他人的意中人/戰略性地推動戀情/粗魯地對待伴侶",
        },
        reversed: {
          en: "Discovering betrayal or deception / Being cheated on by your lover / A miserable feeling / Gloomy romance",
          zh: "察覺遭背叛或欺騙/被情人戴綠帽/悲慘的感受/鬱悶的戀情",
        },
      },
      work: {
        upright: {
          en: "Using illegal means / Forcefully creating a fait accompli / Using others as stepping stones / Driving people to desperation",
          zh: "使用不法的手段/強硬地造成既定事實/將他人作為墊腳石/把人逼入絕境",
        },
        reversed: {
          en: "Your achievements being stolen / Being plagiarized / Sensing a hostile environment / Experiencing harassment or bullying",
          zh: "功勞被搶/遭到剽竊/感覺到敵意的環境/受到職權騷擾或霸凌",
        },
      },
      interpersonal: {
        upright: {
          en: "A scheming partner / Factional conflicts / Mutual exclusion / A selfish person / A relationship requiring caution",
          zh: "會使詭計的夥伴/派系鬥爭/互相排擠/自私自利的人/令人不能大意的關係",
        },
        reversed: {
          en: "The existence of a traitor / Causing someone to be sacrificed / People who only act tough when advantageous / Cunning and flattering people",
          zh: "叛徒的存在/造成某人犧牲/只有在有利時才會態度強硬的人/狡猾而阿諛奉承的人",
        },
      },
      others: {
        upright: {
          en: "The victor / Stealing from others / Acting inhumanely / Chuckling secretly / Hollow victory / Thieves",
          zh: "征服的一方/搶奪他人的事物/偏離人道的行徑/在暗地裡竊笑/勝之不武/小偷",
        },
        reversed: {
          en: "The defeated / Being robbed / Suffering in silence / An unjust position / Theft / Carelessness",
          zh: "敗北的一方/遭搶/忍氣吞聲/不合理的立場/失竊/粗心大意",
        },
      },
    },
  },
  {
    id: "six-of-swords",
    name: {
      en: "Six of Swords",
      zh: "寶劍六",
    },
    arcana: "minor",
    suit: "swords",
    number: 6,
    image: {
      url: "/images/rider-waite/Swords06.png",
    },
    description: {
      en: "A man rows a boat while a mother and child sit in front of him. Perhaps they lower their heads and hide their faces because they have abandoned everything and fled. The card shows drifting with the current toward a new place.",
      zh: "男人划著船，前方坐著一對母子。會低著頭隱藏臉部，是因為捨棄了一切逃離嗎？牌面表現出的是隨波逐流，前往新天地的情景。",
    },
    coreKeyword: {
      en: "Midway",
      zh: "中途",
    },
    meaning: {
      upright: {
        en: "Escaping difficult circumstances: Gradually breaking free from hardship. The boat symbolizes travel or moving to a new location, representing transition and change.",
        zh: "脫離困難狀況：呈現出逐漸脫離困境。此外，船隻這個象徵，也表現出旅行或搬家等「移動」事項。",
      },
      reversed: {
        en: "Falling back into old difficulties: Suggesting inability to escape hardship or returning to an environment you thought you had already left.",
        zh: "倒回從前的困境：暗示著無法逃離困難狀況，或是重返一度以為已經脫離的環境。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Luck of troubles fading away / Escaping the current situation / Moving in a positive direction",
          zh: "麻煩遠離的運氣/脫離現況/朝好的方向前進",
        },
        reversed: {
          en: "Luck of being caught up in troubles / Uncertainty about what will happen / An uncertain situation",
          zh: "被捲入麻煩的運氣/不知道會怎麼樣/心裡沒底的狀況",
        },
      },
      innerState: {
        upright: {
          en: "Feeling relieved / Running away is the best strategy / Gradually seeing hope in the future",
          zh: "鬆了一口氣/三十六計走為上策/在未來一點一點地看見希望",
        },
        reversed: {
          en: "Wanting to abandon everything / Strong fear of being unable to escape / Regret / Emotional turmoil",
          zh: "想要拋棄一切/無法逃脫的恐懼強烈/後悔/內心起伏",
        },
      },
      rootCause: {
        upright: {
          en: "Cutting away past disadvantages / Distancing from the other person / About moving or traveling",
          zh: "斬斷過去的弊害/遠離對方/關於搬家或旅行的事情",
        },
        reversed: {
          en: "A situation where escape is impossible despite wanting it / Going in circles / Entanglement in relationships",
          zh: "即使想逃也逃不掉的狀況/來回兜圈子/人際關係的糾紛",
        },
      },
      development: {
        upright: {
          en: "Moving to the next stage / Escaping difficult situations / Gradual health improvement",
          zh: "朝下個階段邁進/脫離困難的狀況/病情逐漸好轉",
        },
        reversed: {
          en: "A future that seems to take a turn for the worse / Difficulty returning / Unable to escape completely / Recurrence of illness",
          zh: "看似要風雲變色的未來/困難重返/無法徹底逃脫/疾病復發",
        },
      },
      advice: {
        upright: {
          en: "A newer location is better than where you are now / Change your perspective / Temporarily take refuge / Take a wait-and-see approach",
          zh: "比現在的地點更新的地方為佳/改變看法/暫時避難/觀望狀況",
        },
        reversed: {
          en: "Do not give up on yourself / Be prepared that even fleeing won't change anything",
          zh: "自暴自棄是NG的/即使逃避也無法改變任何事情的心理準備",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "A new encounter / A romance where you can share values / Elopement / Someone extending a helping hand",
          zh: "有新的邂逅/能共享價值觀的戀情/私奔/有人伸出援手",
        },
        reversed: {
          en: "A relationship becoming turbid / A soap opera-like turbulent development / An unreliable person / Hitting dead ends everywhere",
          zh: "化為泥沼的關係/如同連續劇般波濤洶湧的發展/不可依賴的人物/四處碰壁",
        },
      },
      work: {
        upright: {
          en: "Things getting back on track / A new plan / Steps are important / Business travel or transfer / Relocation / Changing jobs",
          zh: "事物開始上軌道/新計畫/步驟很重要/出差或調職/搬遷/跳槽",
        },
        reversed: {
          en: "Being implicated / Reaching an impasse due to troubles / Reassessing plans / An untrustworthy person",
          zh: "受到連累/因為麻煩而走投無路/重新審視計畫/靠不住的人物",
        },
      },
      interpersonal: {
        upright: {
          en: "Someone with shared dreams or goals / A relationship of mutual understanding / Thoughts communicating smoothly / Meeting someone while traveling",
          zh: "擁有相同夢想或目標的對象/互相理解的關係/想法溝通得很順暢/在旅行地遇見的人",
        },
        reversed: {
          en: "Awkward conversation / Better to maintain distance temporarily / A relationship causing troubles / Arguments while traveling",
          zh: "尷尬的對話/暫時保持距離為佳/招致麻煩的關係/在旅行地起爭執",
        },
      },
      others: {
        upright: {
          en: "Departure / Setting out on a journey / Someone coming to greet you / Returning home / About-face / Moving / Someone embarking on a journey",
          zh: "出發/踏上旅途/有人前來迎接/返鄉/掉頭/搬家/某人踏上旅途",
        },
        reversed: {
          en: "Illness, accidents, delays, debts and various troubles / Events disturbing the heart / Being unable to move",
          zh: "疾病、事故、延遲、借款等各種麻煩/擾亂內心的事件/動彈不得",
        },
      },
    },
  },
  {
    id: "seven-of-swords",
    name: {
      en: "Seven of Swords",
      zh: "寶劍七",
    },
    arcana: "minor",
    suit: "swords",
    number: 7,
    image: {
      url: "/images/rider-waite/Swords07.png",
    },
    description: {
      en: "The card depicts a man looking back while carrying swords and trying to flee. There are figures in the distance, but they do not seem to have noticed him yet. This card suggests illegality or injustice.",
      zh: "牌面上描繪著一個一邊回過頭，一邊帶著寶劍試圖逃跑的男人。遠方雖然有人影，但似乎尚未察覺。這是張暗示著「不法」或「不義」的牌。",
    },
    coreKeyword: {
      en: "Betrayal",
      zh: "背叛",
    },
    meaning: {
      upright: {
        en: "Planning deceit in the shadows: Plotting tricks without letting anyone discover. Sometimes it can be interpreted as avoiding responsibility and acting in self-interest. This is a card of calculated risk.",
        zh: "偷偷摸摸地在暗地裡策劃：在不讓任何人發現的情況下密謀詭計。有時也可解釋成逃離責任以明哲保身。這是張鋌而走險的牌。",
      },
      reversed: {
        en: "Sensing danger and making thorough preparations: Recognizing the malice of others and heightening vigilance. Thorough preparation is effective, and things will proceed safely. Can also mean assisting others.",
        zh: "察覺危險，做好萬全準備：察覺他人的惡意，提升警戒心。萬全的準備奏效，事情將會安全地進行。也可解釋成協助他人。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Committing wrongdoing / Using tricks in the shadows / Luck where illegality prevails",
          zh: "動手做壞事/暗地裡施展詭計/不法盛行的運氣",
        },
        reversed: {
          en: "Luck of evading danger at the critical moment / A time when unexpected discoveries occur",
          zh: "能在千鈞一髮之際迴避危險的運氣/有意想不到的發現的時候",
        },
      },
      innerState: {
        upright: {
          en: "Something weighing on your mind / Conscious of having done wrong / Looking down on others",
          zh: "內心掛念著某事/有做了壞事的自覺/瞧不起他人",
        },
        reversed: {
          en: "Inner obstacles being removed / Gratitude to those helping you / Wanting to proceed carefully",
          zh: "內心的阻礙被去除/感謝幫助自己的人/想謹慎行事",
        },
      },
      rootCause: {
        upright: {
          en: "Behavior carrying major risk / Impulsive action / A suspicious person / Bad rumors",
          zh: "背負重大風險的行為/一時衝動/形跡可疑的人物/不好的傳聞",
        },
        reversed: {
          en: "Fear of risk / Becoming overly nervous / Troubles concerning apologies",
          zh: "畏懼風險/變得過於神經質/關於謝罪的麻煩",
        },
      },
      development: {
        upright: {
          en: "Important things being stolen / Rivals getting ahead of you / Deceiving others",
          zh: "重要的事物被偷/被競爭對手搶先/欺騙他人的狀況",
        },
        reversed: {
          en: "Safe progress / Averting crisis / Receiving good advice",
          zh: "安全進行/迴避危機/獲得好建議",
        },
      },
      advice: {
        upright: {
          en: "Illegal activity brings harsh lessons afterward / Pay attention to sneaky people / Beware of fraud",
          zh: "不法行為之後會受到慘痛教訓/注意鬼鬼祟祟的人/小心詐欺",
        },
        reversed: {
          en: "Should apologize sincerely / Use the safest method possible / Listen to others' advice",
          zh: "應該坦率地道歉/盡可能採取安全的方法/傾聽他人的建議",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Dishonesty / Two-faced person / Unfaithful lover / Your lover being stolen / Snooping through phone or calendar",
          zh: "不誠實/雙面人/出軌的對象/情人被搶走/偷看手機或行事曆",
        },
        reversed: {
          en: "Unexpected romance / An unexpectedly excellent person met by chance / Improving relationship / Expressing gratitude",
          zh: "超乎預期的戀情/偶然遇見的出色對象/改善關係/表達感謝的心情",
        },
      },
      work: {
        upright: {
          en: "Bad reputation spreading / Spying / Leaking confidential information / Fraud or embezzlement and other financial wrongdoing / Running away overnight",
          zh: "傳出壞名聲/間諜行為/洩漏機密資訊/詐欺或盜領等財務上的不法行徑/連夜逃跑",
        },
        reversed: {
          en: "Preventive measures against troubles / Advice being effective / Responsible guidance / Information gathering is key",
          zh: "防範麻煩於未然的應對方式/建議奏效/負責指導/收集情報是關鍵",
        },
      },
      interpersonal: {
        upright: {
          en: "Someone who takes advantage and then disappears / Leaking secrets / Manipulating others with information / Leading others to slip up",
          zh: "拿了好處就逃跑的人/洩漏祕密/以情報操縱他人/誘導對方失言",
        },
        reversed: {
          en: "Lending a hand / Consulting about worries / Exchanging beneficial information / Others' words as guidance for avoiding crisis",
          zh: "伸出援手/商量煩惱/交換有益的情報/他人的話語成為迴避危機的提示",
        },
      },
      others: {
        upright: {
          en: "An uncomfortable state / Taking advantage of people / Misappropriating something / Beware of theft or break-ins",
          zh: "不舒服的狀態/趁人之危/挪用某物/小心失竊或闖空門",
        },
        reversed: {
          en: "A comfortable state / Unexpected good news / Better to help others / A time when good wisdom emerges",
          zh: "舒暢的狀態/不抱期待的好消息/幫助人為佳/湧出好的智慧的時候",
        },
      },
    },
  },
  {
    id: "eight-of-swords",
    name: {
      en: "Eight of Swords",
      zh: "寶劍八",
    },
    arcana: "minor",
    suit: "swords",
    number: 8,
    image: {
      url: "/images/rider-waite/Swords08.png",
    },
    description: {
      en: "A blindfolded and bound woman is surrounded by swords. Looking closely, there are no guards, and her feet can move. This card suggests that what is bound is not the body, but the heart.",
      zh: "眼睛被蒙住、身體被綁起來的女子被寶劍包圍著。但仔細一看，周遭並沒有守衛，腳也是可以活動的。這張牌暗示著被束縛的並非身體，而是內心。",
    },
    coreKeyword: {
      en: "Endurance",
      zh: "忍耐",
    },
    meaning: {
      upright: {
        en: "Waiting for rescue in painful circumstances: Harboring the thought that you lack power and hoping others will rescue you. The person is suffering from powerlessness and loneliness, seemingly unable to move.",
        zh: "在痛苦的狀況下等待救援：隱藏著認為自己沒有力量，希望他人救援的想法。當事人受到無力感與孤獨感折磨，似乎寸步難行。",
      },
      reversed: {
        en: "Struggling without support: In an isolated state, feeling anxious. Thinking this shouldn't be the case, resisting while harboring strong victim consciousness, blaming others.",
        zh: "在沒有後援的狀況下胡亂掙扎：處於孤立無援的狀態下而感到焦躁。認為不應該是這樣，抵抗著這狀況的同時，也心懷強烈的受害者意識，認為錯的是周遭的人。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Disastrous luck / A constricted environment / Excessive interference from others / Being envied / Suffering greatly",
          zh: "災難的運氣/受拘束的環境/來自周遭的過度干涉/受人嫉妒/受得很辛苦",
        },
        reversed: {
          en: "An unintended situation / Isolation / Accumulated dissatisfaction with surroundings exploding",
          zh: "並非本意的狀況/孤立/對於周遭的不滿爆發的時候",
        },
      },
      innerState: {
        upright: {
          en: "Waiting for someone to come to your rescue / No desire to do anything",
          zh: "期待著他人前來救援/沒有做任何事的意願",
        },
        reversed: {
          en: "This shouldn't be the case / Being betrayed and receiving a blow / Rigid and stubborn thinking",
          zh: "不應該是這樣/遭背叛而受打擊/想法拘泥固執",
        },
      },
      rootCause: {
        upright: {
          en: "Not noticing something important / Insufficient funds / Expecting too much from others",
          zh: "沒有察覺重要的事情/錢財不足/過於期待他人",
        },
        reversed: {
          en: "Being too concerned with others' opinions / Wasting a lot of time / Not seriously considering solutions",
          zh: "過於在意他人目光/浪費許多時間/沒有認真思考解決的對策",
        },
      },
      development: {
        upright: {
          en: "Events testing your endurance / Temporarily having to endure / An unfree situation",
          zh: "考驗忍耐力的事件/暫時不得不忍耐/不自由的狀況",
        },
        reversed: {
          en: "An increasingly anxious development / Not recognizing your own faults / Unable to overcome the situation",
          zh: "只會越發焦躁的發展/沒有察覺自己的過失/無法克服現況",
        },
      },
      advice: {
        upright: {
          en: "You are the one binding yourself / Don't let others manipulate you / Avoid speculation",
          zh: "束縛你的人是你自己/不要被他人玩弄/禁止臆測",
        },
        reversed: {
          en: "First acknowledge your mistakes / Don't blame those around you / Letting go is also necessary",
          zh: "首先要承認自己的過錯/遷怒周遭是不對的/放棄也是必要的",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "\"It's all the other person's fault\" mentality / Being immersed in tragedy or fantasy / Masochism / A constraining relationship",
          zh: "「都是對方害的」的想法/沉醉於悲劇或妄想中/被虐狂/束縛的關係",
        },
        reversed: {
          en: "Bound by suspicion / A relationship that accumulates stress when together / Stubbornly refusing to break up / Unwilling to apologize",
          zh: "被猜忌束縛/在一起就會累積壓力的關係/意氣用事地不願分手/不願道歉",
        },
      },
      work: {
        upright: {
          en: "A workplace with many rules / Strict management system / Work or responsibilities stalled / Being monitored",
          zh: "規矩很多的職場/嚴格的管理體制/停滯了工作或責任/受到監視",
        },
        reversed: {
          en: "Meeting with accidents / Receiving unfair treatment / Sudden termination or dismissal / Sinister people",
          zh: "遇到意外/受到不合理的對待/突然的免職或解僱/陰險的人物",
        },
      },
      interpersonal: {
        upright: {
          en: "A person with serious victim mentality / Relationships where clear opinions cannot be expressed / Lacking energy / Suffering from interference and anguish / Slander and insults",
          zh: "被害妄想很嚴重的人/沒辦法明確表達意見的關係/沒精神/受到干涉而苦悶/誹謗中傷",
        },
        reversed: {
          en: "A person who expresses clear opinions / A barbed attitude / Statements that hurt the other person's feelings / Irreconcilable differences",
          zh: "明確表達意見的人/帶刺的態度/會令對方內心受挫的發言/水火不容",
        },
      },
      others: {
        upright: {
          en: "Not recognizing reality / Believing you're caught in a trap / Non-performance of debt / Excessive baggage / Narrow spaces",
          zh: "沒有認清現實/自以為中了陷阱/債務不履行/過多的行李/狹窄的地點",
        },
        reversed: {
          en: "No matter how you try to escape, you cannot / Wasting time / Being unlawfully confined",
          zh: "無論怎麼逃都逃不掉/虛度光陰/受到非法限制的事態",
        },
      },
    },
  },
  {
    id: "nine-of-swords",
    name: {
      en: "Nine of Swords",
      zh: "寶劍九",
    },
    arcana: "minor",
    suit: "swords",
    number: 9,
    image: {
      url: "/images/rider-waite/Swords09.png",
    },
    description: {
      en: "A woman sits on a bed sighing. Perhaps she had a nightmare, or cried all night out of despair. This card presents sorrow, anxiety, and guilt, while also suggesting awakening from this state.",
      zh: "女子坐在床上嘆息。不知道是作了惡夢，還是出於絕望而徹夜哭泣呢……這是張呈現悲傷、不安、罪惡感的牌。不過同時也暗示了從此處甦醒的意思。",
    },
    coreKeyword: {
      en: "Distress",
      zh: "苦悶",
    },
    meaning: {
      upright: {
        en: "Hopelessness that cannot be undone: Showing strong regret, continuously thinking \"if only I had done this differently,\" blaming yourself and unable to see what's around you.",
        zh: "無法挽回的絕望：表現出強烈的後悔，「如果那時候這麼做就好了」一個勁兒地想著這件事，持續自責而看不見周圍。",
      },
      reversed: {
        en: "Unwilling to face a bad situation: Turning away from reality, unwilling to face the essence of the problem. Only blaming others, pretending it didn't happen, or feeling sorry for yourself.",
        zh: "不想面對糟糕的狀況：從現實上別過視線，不想面對問題的本質。只將責任歸咎於他人、裝作沒發生過，或是顧影自憐。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Luck in a state of despair / Sleepless nights due to sadness / A time when deception is easy",
          zh: "處於絕望中的運氣/因為悲傷而夜不成眠的狀態/容易受騙的時候",
        },
        reversed: {
          en: "A time of severe victim mentality / Bound by negative speculation",
          zh: "被害妄想很嚴重的時候/受到負面臆測束縛",
        },
      },
      innerState: {
        upright: {
          en: "Sadness at losing something / Increasingly strong regret / Thinking about that one thing constantly",
          zh: "失去事物的悲傷/後悔越發強烈/滿腦子都是那件事",
        },
        reversed: {
          en: "Believing yourself to be pitiful / Not accepting your loss of composure / Wanting to blame others",
          zh: "認為自己很可憐/不承認失態/想將過錯歸咎於他人",
        },
      },
      rootCause: {
        upright: {
          en: "Noticing something important too late / Strong guilt / Self-hatred",
          zh: "對於重要的事物察覺得太遲/強烈的罪惡感/自我厭惡",
        },
        reversed: {
          en: "Setting aside your worries / Competitive feelings toward others / Suppressing sadness",
          zh: "將自己的擔憂束之高閣/對他人有競爭意識/壓抑悲傷",
        },
      },
      development: {
        upright: {
          en: "Recognizing something important / The sleepless night will pass, dawn is coming",
          zh: "察覺重要的事物/不能成眠的夜晚會過去，黎明即將到來",
        },
        reversed: {
          en: "Losing control from hatred / Viewing others with suspicion / Losing those who understand you",
          zh: "因為憎恨而失控/以懷疑的眼光看待他人/失去理解你的人",
        },
      },
      advice: {
        upright: {
          en: "Take action before you regret / Realize the happiness you have now / Endure a little longer",
          zh: "在後悔之前先採取行動/察覺現在擁有的幸福/再忍耐一會兒",
        },
        reversed: {
          en: "Don't avoid the problem / Calmly face reality / Take a constructive approach",
          zh: "不要逃避問題/冷靜地正視現實/具建設性的應對",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "On the brink of breaking up / Someone important you don't want to lose / Losing sleep worrying about the other person / Regretting and blaming yourself",
          zh: "瀕臨分手的緊要關頭/不想失去的重要之人/擔心對方而睡不著/自責而感到後悔",
        },
        reversed: {
          en: "Suspecting the other person / A romance tinged with regret / Struggling to recover / Being ashamed of yourself",
          zh: "懷疑對方/感覺到悔恨的戀情/掙扎著想重新振作/以自己為恥",
        },
      },
      work: {
        upright: {
          en: "Tension and anxiety becoming oppressive / Working even in dreams / Ruminating over past failures",
          zh: "緊張與不安化為刀刃/連夢中都在工作/反芻過去的失敗",
        },
        reversed: {
          en: "Making embarrassing mistakes / Fantasizing that someone is undermining you / Troubled by rumors",
          zh: "犯了丟臉的失誤/幻想有人在扯自己的後腿/受流言所擾",
        },
      },
      interpersonal: {
        upright: {
          en: "A person always calm no matter what / Statements that strike a nerve / Recognizing something important in conversation",
          zh: "無論何時都很冷靜的人/戳中痛點的發言/在言談中察覺重要的事情",
        },
        reversed: {
          en: "Attacking others for self-defense / A narrow-minded person / Cold statements / Hurting someone through conversation",
          zh: "為了自我防衛而攻擊別人/心胸狹窄的人/冷酷的發言/因為對話而傷了人",
        },
      },
      others: {
        upright: {
          en: "Losing momentum from a shock / Nervous breakdown / Insomnia / Receiving a notice of death / Solving the problem",
          zh: "受到衝擊而失去幹勁/神經衰弱/失眠症/收到訃文/解決問題",
        },
        reversed: {
          en: "Turning anger into motivation / Endless rumors or gossip / Misunderstandings from fantasies / Planning to accept pity",
          zh: "將憤怒化為原動力/沒完沒了的造謠或傳聞/從妄想產生的誤會/打算接受憐憫",
        },
      },
    },
  },
  {
    id: "ten-of-swords",
    name: {
      en: "Ten of Swords",
      zh: "寶劍十",
    },
    arcana: "minor",
    suit: "swords",
    number: 10,
    image: {
      url: "/images/rider-waite/Swords10.png",
    },
    description: {
      en: "A man lies with ten swords piercing his body. The image seems ominous at first glance, but if you look closely, the dark sky is about to clear. This card shows gaining a bright future by accepting reality.",
      zh: "身體被十把寶劍插著的男人。圖案乍看之下不祥，但仔細一看，可見陰暗的天空正要放晴。這張牌表現的是藉由接受現實，而獲得光明的未來。",
    },
    coreKeyword: {
      en: "Crossroads",
      zh: "岔路",
    },
    meaning: {
      upright: {
        en: "Moving forward after accepting everything: A state of completely accepting your weaknesses or present circumstances, which can be called enlightenment. As a result, you move to the next stage.",
        zh: "接受一切後前進：完全接受自己的弱點或身處狀況的狀態，也可說是開悟的境界。結果會讓你往下一個階段邁進。",
      },
      reversed: {
        en: "Only looking at what is favorable to you: Not psychologically prepared and unable to accept things that are unfavorable. As a result, you remain trapped in the fantasy world.",
        zh: "只往對自己好的方向看：沒做好心理準備，無法接受對自己而言不好的事情。結果就是仍然無法脫離妄想世界。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A crossroads in life / Accepting all pain / Beginning to move toward the future",
          zh: "人生的岔路/接受一切疼痛的狀態/開始朝著未來前進",
        },
        reversed: {
          en: "Luck of temporary improvement / An uncertain present situation / Immersed in a dream favorable to you",
          zh: "暫時好轉的運氣/無法肯定的現況/置身於對自己好的夢中",
        },
      },
      innerState: {
        upright: {
          en: "Inner fog clearing / Able to affirm all of the past / Enlightenment",
          zh: "內心的迷霧消散/能夠肯定過去的一切/開悟",
        },
        reversed: {
          en: "In an excited state with incorrect understanding / Immersed in self-pity",
          zh: "處於激動狀態，理解方式錯誤/陶醉於自怨自艾中",
        },
      },
      rootCause: {
        upright: {
          en: "Still needing a bit more time / Not having a catalyst to change feelings / Unable to see the future",
          zh: "還需要一點時間/沒有改變心情的契機/看不見未來",
        },
        reversed: {
          en: "Exaggerating small matters / Immersed in excessive self-satisfaction",
          zh: "將小事誇張化/沉浸於過剩的自我陶醉之中",
        },
      },
      development: {
        upright: {
          en: "Climbing up from the valley / Spiritual growth / The cause of pain disappearing / Situation improving",
          zh: "從谷底爬上來/精神上的成長/痛苦的原因消失/事態好轉",
        },
        reversed: {
          en: "Continuing to cling to the old environment / Just when you think things have improved, you snap back to reality",
          zh: "持續緊抓著舊環境不放/才以為好轉了又立刻回過神來",
        },
      },
      advice: {
        upright: {
          en: "The situation won't keep worsening, you can rest assured / Change your thoughts, be reborn",
          zh: "狀態不會繼續惡化，可以放心/想法一轉，脫胎換骨",
        },
        reversed: {
          en: "Stop complaining / Leave the \"victim\" role",
          zh: "別再繼續抱怨/脫離「受害者」角色",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Overcoming the pain of love / Crossroads in a relationship / Awakening through romance / Accepting all of the other person",
          zh: "跨越戀愛的痛苦/關係的分岔路/透過戀愛醒悟/接受對方的一切",
        },
        reversed: {
          en: "Immersed in a tragic ending romance / Fantasy that your love luck is poor / Repeating past mistakes / Misunderstanding others' feelings",
          zh: "沉浸於悲劇收場的戀愛中/妄想戀愛運很差/重蹈覆轍/誤解他人的情感",
        },
      },
      work: {
        upright: {
          en: "Failure is the mother of success / Escaping the worst situation / Facing and reflecting on your loss of composure / Seeking a new path",
          zh: "失敗為成功之母/脫離最糟的狀態/正視自己的失態並反省/尋找新的道路",
        },
        reversed: {
          en: "Repeated failure / Not acknowledging mistakes / Getting by on the spot / Cleverly skirting the real issue",
          zh: "一再失敗/不承認過失/臨場湊合著應對/巧妙閃避問題核心",
        },
      },
      interpersonal: {
        upright: {
          en: "A relationship maintained even through arguments / Knowing both inner and outer faces / Accepting shortcomings / Someone you can have a long relationship with",
          zh: "即使爭吵也維持著的關係/知道內在與外在兩種面貌/接受缺點/能長久往來的對象",
        },
        reversed: {
          en: "Only wanting to show the good side / Someone who hides shortcomings due to pride / A relationship without trust / Polite talk",
          zh: "只想展現好的一面/自尊心高而加以掩飾的人/無法推心置腹的關係/客套話",
        },
      },
      others: {
        upright: {
          en: "Fighting desperately to handle things / Sincerity being tested / Gradually changing thoughts / Starting fresh",
          zh: "拚死命去處理事情/真心受到了考驗/想法逐漸改變/從頭開始",
        },
        reversed: {
          en: "Despairing tantrums / Though the appearance changes, the heart remains the same / A makeshift measure",
          zh: "絕望地大吵大鬧/即使外表改變，心情仍然不變/權宜之計",
        },
      },
    },
  },
  {
    id: "page-of-swords",
    name: {
      en: "Page of Swords",
      zh: "寶劍侍者",
    },
    arcana: "minor",
    suit: "swords",
    number: 11,
    image: {
      url: "/images/rider-waite/Swords11.png",
    },
    description: {
      en: "A youth holds a sword and looks back with a sharp gaze. The flock of birds flying overhead expresses his high mental power. This card shows the caution and analytical ability needed to respond even to an explosive situation.",
      zh: "青年手持寶劍，以銳利的視線回望身後。從頭頂上方飛過的鳥群表現出他的精神力之高。這是張顯示出連一觸即發的狀況也能應對的謹慎與分析能力的牌。",
    },
    coreKeyword: {
      en: "Alertness",
      zh: "警戒",
    },
    meaning: {
      upright: {
        en: "Seeing the situation clearly and being cautious: Observing your surroundings attentively, sometimes indicating the need to proceed with something secretly. Crisis awareness is very high.",
        zh: "看清狀況小心謹慎：屏氣凝神地調查周遭的情況，有時也顯示需要暗中進行某事的狀況。危機意識非常高。",
      },
      reversed: {
        en: "Caution appearing somewhat lax: Though having a sense of caution, it highlights inadequate defense. For instance, carelessly revealing information or saying something indiscreet. Important things may be lost due to carelessness.",
        zh: "防備顯得有些不嚴謹：雖然有警戒心，卻突顯出防守不周全的問題。比如說不小心露了光、說出不謹慎的話來。或許會因為一時大意而失去重要的事物。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A situation where investigation of something is needed / The calm before the storm / Facing a test",
          zh: "需要調查某些事物的狀況/暴風雨前的寧靜/面對考驗",
        },
        reversed: {
          en: "A secret about to be discovered / Carelessness can be fatal / Your abilities being tested",
          zh: "祕密快被發現/大意會喪命的時候/力量遭到考驗",
        },
      },
      innerState: {
        upright: {
          en: "Guarding against unpredictable events / Wanting to maintain alertness at all times",
          zh: "防備難以預料的事態/無論何時都想抱持警戒",
        },
        reversed: {
          en: "Naive thinking / Suspicion / A resistant attitude toward everything / Cutting remarks",
          zh: "想法天真/猜忌/無論對任何事都持反抗態度/看法一針見血",
        },
      },
      rootCause: {
        upright: {
          en: "Not showing weakness to anyone / Clever, overthinking / Being too thorough backfiring",
          zh: "不對人示弱/頭腦聰明，考慮過多/準備太過周全成反效果",
        },
        reversed: {
          en: "Careless behavior / Losing people's trust / Secrets being revealed",
          zh: "不謹慎的言行舉止/不受人信任/祕密被揭穿",
        },
      },
      development: {
        upright: {
          en: "Harboring a major secret / Facing a test / Recognizing danger / Calmly overcoming",
          zh: "懷有重大祕密/面臨考驗/察覺危險/冷靜地克服",
        },
        reversed: {
          en: "Your weaknesses being exploited / Secret maneuvers being discovered / Being deceived / Losing credibility",
          zh: "被掌握弱點/暗中動手腳被發現/被騙/失去信用",
        },
      },
      advice: {
        upright: {
          en: "Prioritize efficiency / Act quietly without drawing attention / Keep secrets",
          zh: "重視效率/安靜且不引人注目地行動/保守祕密",
        },
        reversed: {
          en: "Be careful of careless mistakes / Make thorough preparations / Information is leaking, so keep your own matters private",
          zh: "小心不留神而失誤/做好萬全準備/情報外洩，不要自顧自地說自己的事比較好",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Enjoying tactics / A knowledgeable person / A romance where you want to understand each other / A relationship kept deliberately secret",
          zh: "享受策略/知識豐富的人物/想了解彼此的戀情/談著刻意保密的戀情",
        },
        reversed: {
          en: "Unable to abandon suspicion toward the other person / Someone with a mysterious nature / Cool and lacking atmosphere / A romance that cannot be made public",
          zh: "無法捨棄懷疑的對象/抱持神祕主義的人物/冷靜而欠缺氣氛/不能公諸於世的戀情",
        },
      },
      work: {
        upright: {
          en: "Clear separation in work / Negotiating amounts / Escaping crisis / Obtaining information through casual conversation / Office negotiations",
          zh: "工作上切割清楚/交涉款項/脫離危機/在閒話家常中獲得資訊/辦公室談判",
        },
        reversed: {
          en: "Plans full of loopholes / Ideas being stolen / Pushed to the brink by crisis / Self-destruction through lies or rumors",
          zh: "計畫滿是漏洞/點子被偷/被危機逼上絕境/因為謊言或傳聞而自我毀滅",
        },
      },
      interpersonal: {
        upright: {
          en: "Understanding each other's situations / Knowing the other person's weaknesses / Maintaining distance / Being able to speak truthfully",
          zh: "理解彼此的狀況/知道對方的弱點/保持若即若離的距離感/能說出真心話",
        },
        reversed: {
          en: "Mutual probing of thoughts / Sharing secrets / A person who makes you unable to relax / Witnessing a scene you didn't want to be seen",
          zh: "相互試探想法/共享祕密/令人無法放鬆的對象/被人目睹不想被看見的場面",
        },
      },
      others: {
        upright: {
          en: "Understanding yourself including your weaknesses / An atmosphere of tension / Uncovering the truth / Oversensitivity",
          zh: "了解包括弱點在內的自己/有緊張感的氛圍/查明真相/反應過敏",
        },
        reversed: {
          en: "Deceiving yourself / High pride / Your true nature being understood by others",
          zh: "欺騙自己/自尊心高/關於自己的真相被人摸透",
        },
      },
    },
  },
  {
    id: "knight-of-swords",
    name: {
      en: "Knight of Swords",
      zh: "寶劍騎士",
    },
    arcana: "minor",
    suit: "swords",
    number: 12,
    image: {
      url: "/images/rider-waite/Swords12.png",
    },
    description: {
      en: "The knight rides a white horse, his gaze fixed straight ahead. The sword he raises is an expression of his will and confidence. It symbolizes charging forward without hesitation, with inner strength and courage.",
      zh: "騎著白馬馳騁的騎士，視線筆直地朝著前方。高舉的寶劍是他意志與自信的展現。是象徵毫不迷惘地向前衝，內心強悍與勇敢的一張牌。",
    },
    coreKeyword: {
      en: "Boldness",
      zh: "果敢",
    },
    meaning: {
      upright: {
        en: "Making a firm decision and moving forward logically: Not spending unnecessary effort, attempting to dash toward your goal via the shortest route. Making judgments that are rational, not swayed by emotion.",
        zh: "條理分明地下定決心前進：不花多餘工夫，試圖以最短路線朝著目標衝刺。為了做出具合理性的判斷，而不會流於私情。",
      },
      reversed: {
        en: "Causing unnecessary disputes: Rather than attacking, it's more a provocation, causing unnecessary troubles. There seems to be a desire to take credit hastily.",
        zh: "招致無謂的爭端：與其說是進攻，倒不如說挑釁意味濃厚，因此也會引發無謂的麻煩。似乎也有急於立功的一面。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A time when quick action should be taken / Facing a decision point / Luck that easily changes",
          zh: "應該迅速採取行動的時候/面臨下決定的狀況/容易變化的運氣",
        },
        reversed: {
          en: "Unexpected changes / A situation prone to disputes everywhere",
          zh: "出乎意料的變化/容易四處引發爭執的狀況",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to move forward swiftly and cleanly / Fighting spirit / Wanting to handle everything properly / Not swayed by emotion",
          zh: "想要敏捷俐落地前進/爭鬥心/想將一切確實處理好/不流於私情",
        },
        reversed: {
          en: "Anxiety / Loss of self-control / Not trying to understand others / Narrow-mindedness",
          zh: "焦急/失去自制力/不嘗試理解他人/器量狹小",
        },
      },
      rootCause: {
        upright: {
          en: "Events developing rapidly / Too combative an attitude / Lacking emotion / Elitist consciousness",
          zh: "事物發展迅速/過於好戰的態度/欠缺情感/菁英意識",
        },
        reversed: {
          en: "Hurting others / Hasty determination / Talking nonsense / Panicking",
          zh: "傷害對方/貿然斷定/滿口歪理/慌張失措",
        },
      },
      development: {
        upright: {
          en: "A timing for taking action / An event for a fundamental reassessment / An opportunity to debate",
          zh: "採取行動的時機/從根本重新審視的事件/爭辯的機會",
        },
        reversed: {
          en: "Arguing with others / Life becoming busier / A situation preventing progress toward your goal",
          zh: "與他人爭吵/生活變忙碌/發生無法朝目標前進的情況",
        },
      },
      advice: {
        upright: {
          en: "Don't miss the opportunity / Eliminate unnecessary matters, be rational / Make judgments excluding emotion",
          zh: "不要錯過時機/省略無謂的事物，具合理性/排除情感下判斷",
        },
        reversed: {
          en: "Stop rationalizing / Avoid unnecessary disputes / Be calm even when busy",
          zh: "別再強詞奪理/避免無謂的爭端/忙碌時更要冷靜",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Winning the other person over through bold approach / Charging forward with your feelings / A man who can lead you / Speed is first priority",
          zh: "以大膽的接近追到對方/順應心情猛衝/能引領自己的男性/速度第一",
        },
        reversed: {
          en: "Blind love / Thoughtless words hurting the other person / One-sided love / Lack of delicacy / Playing the field",
          zh: "盲目的戀愛/無心的話語傷害到對方/單方面的愛情/欠缺細膩度/腳踏兩條船",
        },
      },
      work: {
        upright: {
          en: "Thinking of ways without waste / An elite / Making plans and putting them into action / Foresight",
          zh: "思考著不造成浪費的做法/菁英/擬定計畫再付諸實行/有先見之明",
        },
        reversed: {
          en: "Receiving complaints / Making efforts with no results / Timidity / Making continuous mistakes from rushing",
          zh: "遭到客訴/做著毫無成果的努力/膽怯/過於焦急而連續出錯",
        },
      },
      interpersonal: {
        upright: {
          en: "Fast-paced conversation / A person good at debate / Expanding friendships / Shortening distance through conversation",
          zh: "節奏明快的對話/擅長辯論的人/拓展交友關係/靠對話縮短距離",
        },
        reversed: {
          en: "One-sided assertion causing arguments / A non-conceding attitude drawing criticism / A relationship passing each other due to misunderstanding",
          zh: "單方面的主張起爭執/不認輸的態度受到責難/因為誤會擦身而過的關係",
        },
      },
      others: {
        upright: {
          en: "Appearing and disappearing mysteriously / High analytical ability and concentration / Quick judgment / Information gathering is key / Emotions easily changing",
          zh: "神出鬼沒/高度的分析能力與專注力/迅速判斷/收集情報是關鍵/容易改變的心情",
        },
        reversed: {
          en: "Hiding away / A narcissistic person / Particular about brand names / A critic / Selfish and willful attitude",
          zh: "躲藏起來/自戀的人/對名牌貨有所堅持/評論家/自私任性的態度",
        },
      },
    },
  },
  {
    id: "queen-of-swords",
    name: {
      en: "Queen of Swords",
      zh: "寶劍王后",
    },
    arcana: "minor",
    suit: "swords",
    number: 13,
    image: {
      url: "/images/rider-waite/Swords13.png",
    },
    description: {
      en: "The Queen sits on her throne, staring ahead without blinking. The sword in her right hand points toward the sky, while her left hand seems ready to accept all faults. This card has both strictness and gentleness.",
      zh: "坐在王座上，目不轉睛地看著前方的王后。右手握著的寶劍指向天空，左手則打算接受所有過錯。可說是一張同時擁有嚴厲與溫柔兩種面向的牌。",
    },
    coreKeyword: {
      en: "Correctness",
      zh: "正確",
    },
    meaning: {
      upright: {
        en: "Earning admiration through correct words and actions: When believing something \"should be done this way,\" implementing it without hesitation. Not being arrogant, considering others' circumstances when speaking, thus earning approval.",
        zh: "以正確的言行舉止令人敬佩：認為「應該這麼做」時，就會毫不迷惘地貫徹意志。不會自命不凡，在發言時也會考慮到他人處境，因此能獲得周遭的贊同。",
      },
      reversed: {
        en: "Arming oneself for self-defense: Using sharp intellect only to protect yourself. Attacking without mercy those things that harm you, being very cold about human feelings.",
        zh: "為了自我防衛的武裝：只為了保護自己而使用鋒利的才智。對於傷害自己的事物會毫不留情地攻擊，對於人情也十分冷淡。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Luck of taking smart action / An impulse to implement your will / Focusing only on reality",
          zh: "聰明地採取行動的運氣/想貫徹意志的衝動/只看著現實",
        },
        reversed: {
          en: "Going overboard on something / Prone to hysteria / Excessive defense",
          zh: "在某些事情上做過頭/容易陷入歇斯底里/防衛過度",
        },
      },
      innerState: {
        upright: {
          en: "A strong will not following the crowd / Wanting to communicate the truth / Prioritizing feasibility over dreams",
          zh: "不隨波逐流的強烈意志/想傳達真相/比起夢想更重視實現性",
        },
        reversed: {
          en: "Obsessed with winning and losing / Anxiously believing you must pull yourself together / Emotionally tense",
          zh: "拘泥於勝負/焦躁地認為必須振作才行/情緒緊繃",
        },
      },
      rootCause: {
        upright: {
          en: "An atmosphere keeping the opposite sex at a distance / A distant attitude / Suppressed emotions / Loneliness and sadness",
          zh: "讓異性無法靠近的氛圍/態度疏離/壓抑的情感/孤單寂寞",
        },
        reversed: {
          en: "Lacking composure / An unappealing personality / Always criticizing / Won't apologize",
          zh: "缺乏冷靜/不可愛的個性/總是在批評/不會道歉",
        },
      },
      development: {
        upright: {
          en: "Clearly expressing your will / Beginning to study / Becoming alone / Ending relationships",
          zh: "明確地表達意志/開始學習/變成孤單一人/關係解除",
        },
        reversed: {
          en: "An inability to relax / Only pursuing results / Straining yourself causing health problems",
          zh: "無法鬆懈的狀況/只追求結果/因為勉強面對搞壞身體",
        },
      },
      advice: {
        upright: {
          en: "Express your feelings candidly / Show more of your personality / Alone time is necessary",
          zh: "坦率地表達心情/多表現出個性/獨處的時間是必要的",
        },
        reversed: {
          en: "Don't radiate a prickly atmosphere / If criticizing, prepare alternatives first / Be conscious of maintaining a smile",
          zh: "不要散發渾身帶刺的氛圍/想批評就要先準備替代方案/意識到保持笑容",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "A woman men cannot approach / Increase in intellectual charm / Deepening feelings through conversation / Divorce / Infertility",
          zh: "令男性無法接近的女性/知性魅力提升/藉由交談加深感情/離婚/不孕",
        },
        reversed: {
          en: "Affectation / Feigned innocence / A person with strong personality / Relationship cooling / Suspecting partner's infidelity",
          zh: "裝腔作勢的態度/故作純真/個性強烈的對象/關係降溫/懷疑對方出軌",
        },
      },
      work: {
        upright: {
          en: "Swift response / Minimizing costs / Distancing from obstacles to work / Making appropriate judgments",
          zh: "迅速應對/壓低成本/遠離妨礙工作的人/下達適當的判斷",
        },
        reversed: {
          en: "A person full of criticism / Negative publicity / A tense workplace atmosphere / A boss who doesn't praise",
          zh: "滿口批評的人/負面宣傳/氣氛緊張的職場/不會誇獎人的上司",
        },
      },
      interpersonal: {
        upright: {
          en: "A knowledgeable person / Intellectual conversation / A relationship where you can say no / Touching people's hearts through words or writing",
          zh: "博學多聞的人/知性的對話/可以說出NO的關係/以發言或文字打動人心",
        },
        reversed: {
          en: "Wording that discourages people's hearts / A cold-hearted person / An awkward relationship / Hysterical response",
          zh: "令人內心受挫的措辭/薄情專義的人物/尷尬的關係/歇斯底里的應對",
        },
      },
      others: {
        upright: {
          en: "Celebrating single women / A difficult-to-approach atmosphere / Appropriate financial management / Sharp objects",
          zh: "讚頌單身女性/難以親近的氛圍/適當的理財計畫/銳利物品",
        },
        reversed: {
          en: "A difficult personality to deal with / Strictness toward both yourself and others / Clumsiness / Insecurity leading to cowardice",
          zh: "難以應付的個性/對於自己與他人都很嚴厲/手拙/因為不安而膽怯",
        },
      },
    },
  },
  {
    id: "king-of-swords",
    name: {
      en: "King of Swords",
      zh: "寶劍國王",
    },
    arcana: "minor",
    suit: "swords",
    number: 14,
    image: {
      url: "/images/rider-waite/Swords14.png",
    },
    description: {
      en: "The King faces forward with a severe expression. From his many battles up to now, he believes himself to be correct. The sword in his hand expresses a strict attitude that does not allow pleading or perfunctory treatment.",
      zh: "以嚴肅表情面對正前方的國王，從至今為止身經百戰的歷練中，相信自己是正確的。手中的寶劍表現出絕不容許求情或敷衍了事的嚴厲態度。",
    },
    coreKeyword: {
      en: "Strictness",
      zh: "嚴格",
    },
    meaning: {
      upright: {
        en: "Making judgments through objective analysis: In any situation, seeing the circumstances clearly and making appropriate judgments. Always demanding of yourself to remain fair, not self-serving.",
        zh: "以客觀的分析作判斷：無論何種場合都會客觀地看清狀況，做出恰當的判斷。總是要求自身保持公正，不可流於自私自利。",
      },
      reversed: {
        en: "Authoritarily guarding dignity: A state where possessed wisdom is only used to protect oneself. Even cruelly eliminating those who don't comply with wishes, not admitting one's own faults.",
        zh: "獨裁地守護威嚴：所擁有的智慧只會用於保護自己的狀態。甚至會殘酷地排除不順應心意的人，不承認自己的過錯。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A state full of confidence / Considering whether you should make a decision and take action / Overcoming confusion",
          zh: "充滿自信的狀態/考慮該下決定採取行動的運氣/克服混亂",
        },
        reversed: {
          en: "A severe situation / Not being respected and becoming isolated / A tendency toward deviant behavior",
          zh: "嚴峻的狀況/不受人敬慕而孤立/有做出偏離正軌行為的傾向",
        },
      },
      innerState: {
        upright: {
          en: "High mental energy / Considering everyone's interests / Repeatedly searching",
          zh: "精神力高漲/考慮大家的利益/反覆地摸索",
        },
        reversed: {
          en: "Believing yourself to be right / Wanting to eliminate anything useless",
          zh: "認為自己才是正確的/想排除任何無用的事物",
        },
      },
      rootCause: {
        upright: {
          en: "Harboring distrust / Cutting remarks wounding others / A poker face",
          zh: "抱持著不信任感/一針見血的分析傷到他人/撲克臉",
        },
        reversed: {
          en: "A viewpoint full of preconceptions and prejudice / Cruel words and actions / Not admitting one's faults",
          zh: "充滿獨斷與偏見的觀點/殘忍的言行舉止/不承認自己的過錯",
        },
      },
      development: {
        upright: {
          en: "Meeting a spiritual teacher / Fighting for justice / Taking action toward the future",
          zh: "遇見精神上的老師/為了正義而戰/為了未來展開行動",
        },
        reversed: {
          en: "Self-conceit bringing crisis / Meeting a heartless person / Stubbornly sticking to your position for pride",
          zh: "自作多情招致危機/遇見無情的人/為了面子而固執己見",
        },
      },
      advice: {
        upright: {
          en: "Move forward with confidence / Strictness is also a form of love / Use your past experience",
          zh: "抱持自信地前進/嚴厲也是一種愛的形式/活用過去的經驗",
        },
        reversed: {
          en: "Be considerate of others / Accept necessary opinions / Extreme action is not the way",
          zh: "體諒他人/採納必要的意見/極端的行動是NG的",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "A wise man / An equal relationship / A cool relationship without restraint / A romance that developed through discussing worries / Both working",
          zh: "有智慧的男性/平等關係/無拘無束的冷靜關係/因商量煩惱而發展的戀情/兩人都在工作",
        },
        reversed: {
          en: "A cold man / A selfish person / Engagement being broken due to small issues / A person calculating everything too carefully",
          zh: "冷酷的男性/自私的對象/因為小問題而導致婚約解除/算盤打得過積的人",
        },
      },
      work: {
        upright: {
          en: "Ability to handle troubles / A person in power / A leader / Abundant ideas / New ventures / A capable businessman",
          zh: "應對麻煩的能力/掌權者/領導人/豐富的點子/新企劃/能幹的商人",
        },
        reversed: {
          en: "A dictator / Tendency toward self-interest / Not acknowledging failure / Someone trying to steal credit",
          zh: "獨裁者/有流於自私自利的傾向/不承認失敗/試圖搶人功勞的人",
        },
      },
      interpersonal: {
        upright: {
          en: "A good person to consult / Finding solutions / Beneficial objective advice / A cool and attractive person",
          zh: "好的商量對象/找出解決方案/有益的客觀建議/冷靜而帥氣的人",
        },
        reversed: {
          en: "Not listening to others / Coming to conclusions and ending conversation on your own / Treating the other person as insignificant",
          zh: "不聽人說話/擅自作結並結束對話/將對方視為無足輕重的人物對待",
        },
      },
      others: {
        upright: {
          en: "A quick mind / Fighting if necessary / Being able to accept harsh words / A refreshing feeling",
          zh: "腦筋轉得快/如果有需要就戰鬥/即使被人說出嚴厲的話語也能接受/暢快",
        },
        reversed: {
          en: "Prone to anger / Starting a war / Unable to accept unreasonable statements / An unsatisfying conclusion",
          zh: "容易暴怒/發動戰爭/無法接受不合理的發言/令人不暢快的結束方式",
        },
      },
    },
  },
];