import type { TarotCard } from "../types/card.js";

export const wandsCards: TarotCard[] = [
  {
    id: "ace-of-wands",
    name: {
      en: "Ace of Wands",
      zh: "權杖一",
    },
    arcana: "minor",
    suit: "wands",
    number: 1,
    image: {
      url: "/images/rider-waite/Wands01.png",
    },
    description: {
      en: "The Ace of Wands shows the hand of God holding a wand, the symbol of life force. The castle-like structure in the background represents your aspirational goal. This card conveys fierce passion and the drive to seize what you desire.",
      zh: "權杖一（ACE）為神之手握住生命力的象徵——權杖。背後看似城堡的建築物象徵著想達成的目標。是張呈現欲獲得想望事物的強烈熱情的牌。",
    },
    coreKeyword: {
      en: "Life force",
      zh: "生命力",
    },
    meaning: {
      upright: {
        en: "Taking on a new challenge. Power is rising, a new goal is emerging, and you are ready to move forward to grow.",
        zh: "展開新的挑戰：力量高漲的狀態。表現出產生新的目標，並為了令自己成長而試圖踏出一步。",
      },
      reversed: {
        en: "A challenge is winding down. Passion is fading, and matters are gradually coming to a close. Alternatively, it can indicate power spiraling out of control.",
        zh: "一項挑戰結束：暗示熱情低落，事物逐漸迎向終結。反之也有代表力量失控的情況。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Moving toward what you want to do / facing a new challenge / strong momentum and motivation",
          zh: "朝著想做的事發展/面對新挑戰的時候/幹勁十足的情況",
        },
        reversed: {
          en: "Forcing things forward / momentum veering in the wrong direction and spiraling out of control / waning energy",
          zh: "強硬地推動事物/容易朝錯誤方向失控暴衝的運氣/力量低落",
        },
      },
      innerState: {
        upright: {
          en: "Passionate about everything / ideas that excite you / positive thinking",
          zh: "對任何事物都充滿熱情/令內心雀躍的點子/積極正向的思考",
        },
        reversed: {
          en: "Low spirits / everything feels pointless / unable to make a decision / wanting to obstruct others",
          zh: "意志消沉/一切都無關緊要/無法下定決心/想阻撓他人",
        },
      },
      rootCause: {
        upright: {
          en: "Wanting everything at once / ideas without a concrete plan",
          zh: "貪得無厭，什麼都想要/空有點子卻並未具體落實於計畫",
        },
        reversed: {
          en: "Missing the right timing / losing sight of your goal / something that cannot be resolved cleanly",
          zh: "錯過時機/喪失目的/有無法清算的事物",
        },
      },
      development: {
        upright: {
          en: "A turning point such as employment or school admission / starting something new / an opportunity arrives",
          zh: "就職、入學等人生轉機/著手新的事物/機會降臨",
        },
        reversed: {
          en: "Lack of momentum / losing motivation / things end / plans postponed or cancelled",
          zh: "氣勢不足/失去幹勁/事物結束/預定延期或中止",
        },
      },
      advice: {
        upright: {
          en: "Do not stop at thinking; take action / show more passion / follow your intuition",
          zh: "不只思考，也該採取行動/更加展現熱情/順應直覺",
        },
        reversed: {
          en: "Now is not the time / delay making a decision / accept the ending and bring it to a close",
          zh: "現在不是時候/延後下決定/接納結束並告一段落",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Pouring passion into a new romance / deeply immersed in the relationship / a sexually magnetic person / strong attraction / pregnancy and childbirth",
          zh: "對新戀情投注熱情/沉浸於交往關係中/有性感魅力的人物/強大的吸引力/懷孕與生產",
        },
        reversed: {
          en: "Ending the relationship / withdrawing voluntarily / romance pressured by outside circumstances / divorce / declining sexual desire / infertility",
          zh: "了結關係/主動抽身/戀情受到周遭迫害/離婚/性慾衰退/不孕",
        },
      },
      work: {
        upright: {
          en: "Coming up with good ideas / planning ability becomes key / forming a team / a new business venture / motivated partners",
          zh: "想出好主意/企劃能力成為關鍵/組成團隊/新事業/有幹勁的夥伴",
        },
        reversed: {
          en: "An unmotivated environment / business conditions worsen / withdrawing from the business / a contract returns to square one / the team dissolves / bankruptcy",
          zh: "沒有幹勁的環境/經營狀況每況愈下/事業撤出/契約回歸原點/解散團隊/破產",
        },
      },
      interpersonal: {
        upright: {
          en: "New encounters / gaining companions / frequent contact / group or club activities",
          zh: "新的邂逅/得到夥伴/頻繁地聯繫/社團活動",
        },
        reversed: {
          en: "Someone leaves / someone drags you down / a distracted person whose thoughts are hard to read",
          zh: "有人離開/有人在扯後腿/失魂落魄，不知道在想什麼的人",
        },
      },
      others: {
        upright: {
          en: "The beginning of many things / birth / creativity or sudden inspiration / renovation and opening a shop / travel",
          zh: "各種事物的開始/誕生/富有創造性或靈光一現/重新裝潢開店/旅行",
        },
        reversed: {
          en: "The end of many things / losing momentum / settling the past / departure / leaving school / resignation / closing a business",
          zh: "各種事物的結束/失去勢頭/清算過去/脫離/退學/離職/停業",
        },
      },
    },
  },
  {
    id: "two-of-wands",
    name: {
      en: "Two of Wands",
      zh: "權杖二",
    },
    arcana: "minor",
    suit: "wands",
    number: 2,
    image: {
      url: "/images/rider-waite/Wands02.png",
    },
    description: {
      en: "The figure stands atop a castle, holding a small globe with the bearing of one who has succeeded. Although glory has already been achieved, dissatisfaction lingers and new ambitions emerge. This card shows the will to reach even higher.",
      zh: "在城堡頂端佇立，手握小小地球的成功者姿態。儘管已經獲得榮耀，仍對結果感到不滿足，懷抱新的野心。這是張顯示意志進一步躍進的牌。",
    },
    coreKeyword: {
      en: "Arrival",
      zh: "到達",
    },
    meaning: {
      upright: {
        en: "Recognizing your accomplishments and growth, and using that confidence as a foundation for new ambitions to reach higher.",
        zh: "確實掌握了自己的功績或成長。並以這份自信為基石，萌生「想朝著更上方邁進」的野心。",
      },
      reversed: {
        en: "You may lose something you have already gained, be displaced from your position, or watch what you earned through effort begin to fade.",
        zh: "可能會有失去得手的事物、被驅離原本地位的發展。或是歷經努力得到的事物，看起來卻褪色的情況。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "About to achieve a goal / a situation that brings satisfaction / the next development is about to begin",
          zh: "即將達成目標/能夠滿足的情況/下個發展即將開始",
        },
        reversed: {
          en: "Unexpected developments / an isolated environment / inconsistent pace",
          zh: "面臨預期之外的事態/孤立的環境/步調不一致",
        },
      },
      innerState: {
        upright: {
          en: "Full of confidence, believing that nothing is impossible / wanting to move toward the next goal / aiming higher",
          zh: "自信滿滿地認為「沒有不可能」/想朝下個目標邁進/想以上方為目標",
        },
        reversed: {
          en: "Disdain for others / a sense of heading in a bad direction / feelings of being betrayed",
          zh: "瞧不起他人/朝著不好的方向前進的預感/受到背叛的心情",
        },
      },
      rootCause: {
        upright: {
          en: "Believing everything should be done alone / not noticing the seriousness of the situation",
          zh: "認為一切都該獨力完成/沒有察覺事態的嚴重性",
        },
        reversed: {
          en: "Events that dealt a blow / being shaken and thus having poorer judgment / strongly feeling regret",
          zh: "令人受到打擊的事件/受到動搖使判斷力降低/強烈地感到後悔",
        },
      },
      development: {
        upright: {
          en: "Smoothly achieving your goal / budding confidence / the emergence of new wishes or ambitions",
          zh: "順利達成目標/萌生自信/產生新的願望或野心",
        },
        reversed: {
          en: "Understanding the fear of loss / about to lose results / sudden illness / plans halted",
          zh: "明白失去的恐懼/即將失去成果/突然發病/計畫中止",
        },
      },
      advice: {
        upright: {
          en: "Acknowledge the effort you have made so far / hold your head high / pursue a higher goal",
          zh: "認同自己至今為止的努力/抬頭挺胸/追求更高的目標",
        },
        reversed: {
          en: "Do not be arrogant / confirm the other party's feelings / prepare alternatives according to the situation",
          zh: "態度切勿傲慢/確認對方的心情/因應狀況準備好備案",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Achieving a love goal / having the other person in your grasp / a serious person / a relationship where you can build a future blueprint together",
          zh: "達成戀愛的目標/將對方掌握於手中/認真的人/能夠一起描繪未來藍圖的戀情",
        },
        reversed: {
          en: "Relationship not progressing smoothly / impatience / wanting to control the other person / a domineering person / sudden separation",
          zh: "關係不順利/焦躁感/想要支配對方/高壓專橫的人/突然離別",
        },
      },
      work: {
        upright: {
          en: "Achievements being recognized / being entrusted with leadership / feeling the limits of the current situation and wanting to move to the next level / formulating strategy",
          zh: "實績受到評價/被交付領導工作/感覺到現況的極限，想朝下一個目標邁進/擬定戰略",
        },
        reversed: {
          en: "Giving up on a plan / stopping because of the other party's issues / a somewhat forced plan / sudden transfer",
          zh: "對計畫死心/因為對方的問題而中止/有些勉強的計畫/突然調職",
        },
      },
      interpersonal: {
        upright: {
          en: "Bearing responsibility / a relationship of mutual improvement / a confident person / a successful person / someone with future potential",
          zh: "背負責任/互相提升的關係/充滿自信的人/成功者/有未來性的人",
        },
        reversed: {
          en: "The other person's attitude suddenly changing / being seen as a competitor / a person who often changes plans / suddenly becoming unreachable",
          zh: "對方態度突然改變/被視為競爭對手/經常變更預定計畫的人/突然聯絡不上",
        },
      },
      others: {
        upright: {
          en: "Good health / receiving a sum of money / obtaining helpers and thereby making progress / self-management",
          zh: "身體健康/得到一筆錢/獲得協助者而得以進步/自我管理",
        },
        reversed: {
          en: "Health being hindered / suddenly losing a sum of money / poor management ability / matters becoming difficult",
          zh: "妨礙健康/突然失去一筆錢/管理能力低落/事物陷入困難",
        },
      },
    },
  },
  {
    id: "three-of-wands",
    name: {
      en: "Three of Wands",
      zh: "權杖三",
    },
    arcana: "minor",
    suit: "wands",
    number: 3,
    image: {
      url: "/images/rider-waite/Wands03.png",
    },
    description: {
      en: "A man on a cliff gazes out over the sea. Is he watching ships depart, or waiting for them to return? This card shows the state of contemplating your current situation and where to go next.",
      zh: "懸崖上的男子正眺望著大海，究竟是在守望船隻出航，還是在等待它們歸來呢？這張牌呈現的情景是正思索著自己的現況或接下來該前往的地方。",
    },
    coreKeyword: {
      en: "Exploration",
      zh: "摸索",
    },
    meaning: {
      upright: {
        en: "Catching a glimpse of opportunity to challenge. Your decision to move to a higher stage has taken shape, and only one final push is needed. The timing for action is drawing near.",
        zh: "窺探挑戰的機會：你正打算朝更上一層的階段前進，決心已經成形，只差再推一把。採取行動的時機已經近在眼前。",
      },
      reversed: {
        en: "Anticipation fades while you hesitate. Although you are mentally and physically prepared, without someone to give that final push, you remain idle. It suggests that the expected notice has not arrived.",
        zh: "期待在閃躲的情況下告終：身心明明都已經做好準備，但因為沒人推你一把而沒有採取行動。暗示著你沒有等到期待的通知。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Signs of expansion / waiting for pleasant news / a chance to receive help",
          zh: "事物擴大的氣息/等待令人欣喜的通知/獲得協助的機會",
        },
        reversed: {
          en: "Not as expected / delayed communication / futile effort / regret",
          zh: "不如預期/聯絡耽擱/徒勞無功/遺憾",
        },
      },
      innerState: {
        upright: {
          en: "Overjoyed by good news / feeling confident that everything will be fine / composure and anticipation",
          zh: "獲得喜訊而大感歡喜/「這麼一來就沒問題」的游刃有餘/期待感",
        },
        reversed: {
          en: "Discouraged by unexpected developments / impatient because things are not going well / anxious",
          zh: "因為出乎預料的發展而氣餒/不順心而急躁/心裡沒底",
        },
      },
      rootCause: {
        upright: {
          en: "Helpers and timing do not align / unable to seize the opportunity",
          zh: "願意幫助的人與時機無法配合/無法掌握契機",
        },
        reversed: {
          en: "Having hopes but taking no action / losing your composure / acting too slowly",
          zh: "空有期待卻什麼也沒做/失去內心的餘裕/行動過慢",
        },
      },
      development: {
        upright: {
          en: "Receiving long-awaited news / obtaining something long desired / a helper appears",
          zh: "收到期待已久的通知/獲得長久期望的事物/出現協助者",
        },
        reversed: {
          en: "Missing the chance and it becoming too late / no contact / expectations go unmet",
          zh: "錯失機會而為時已晚/沒有聯絡/期待被理睬",
        },
      },
      advice: {
        upright: {
          en: "Face things with a positive heart / seek supporters / draw on your experience",
          zh: "以積極正向的心情面對/需要尋找贊助者/活用經驗",
        },
        reversed: {
          en: "Do not miss the timing / do not hold excessive expectations / calm yourself / do not rush",
          zh: "別錯失時機/切勿期待過度/冷靜下來/別焦急",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Uniting with the person you like / a chance for romance / romance developing toward marriage / getting in touch / an active person",
          zh: "與喜歡的人結合/戀愛的機會降臨/發展到結婚的戀情/有聯絡/肉食系",
        },
        reversed: {
          en: "The other person does not see you romantically / unrequited love / heartbreak / no response / a passive person",
          zh: "對方不把你當作對象/以單戀狀態失戀/沒有回應訊息/被動的人/草食系",
        },
      },
      work: {
        upright: {
          en: "Business opportunities arriving / obtaining financing / expanding business / signing new contracts",
          zh: "商務機會降臨/獲得融資/擴大事業/簽訂新的契約",
        },
        reversed: {
          en: "Wrong timing to be noticed / missing opportunities / reduced profits / postponed plans",
          zh: "受矚目的時機不對/錯失機會/利益減少/預定計畫延期",
        },
      },
      interpersonal: {
        upright: {
          en: "A relationship with shared values and mutual understanding / someone responsive to your hopes / a good helper",
          zh: "價值觀相似，可互相理解的關係/出現理解者/回應期待的人/好的協助者",
        },
        reversed: {
          en: "Unable to get in touch / someone who ignores you / losing the relationship for no apparent reason",
          zh: "聯繫不上/不理睬你的人/沒有原因地失去關係",
        },
      },
      others: {
        upright: {
          en: "A bright future / a chance for significant growth / there is still hope / curiosity begins / preparing for travel",
          zh: "光明的未來/大幅成長的契機/還有希望/萌生探究心/為旅行做準備",
        },
        reversed: {
          en: "Cannot see the future / painful sense that things are not as expected / cold atmosphere / short-term study abroad / lateness / postponement",
          zh: "看不見未來/不如預期的難受感/氣氛冷場/短期留學/遲到/延期",
        },
      },
    },
  },
  {
    id: "four-of-wands",
    name: {
      en: "Four of Wands",
      zh: "權杖四",
    },
    arcana: "minor",
    suit: "wands",
    number: 4,
    image: {
      url: "/images/rider-waite/Wands04.png",
    },
    description: {
      en: "People can be seen waving bouquets beyond the wands. Everyone lives in a relaxed and peaceful manner, and the castle behind them is a symbol of abundance. This card conveys stable happiness and joy.",
      zh: "可以看見在權杖的另一側揮舞著花束的人影，每個人都放鬆而平穩地生活著，而在人們身後的城堡則是豐饒的象徵。這是張傳達穩定幸福與喜悅的牌。",
    },
    coreKeyword: {
      en: "Joy",
      zh: "歡喜",
    },
    meaning: {
      upright: {
        en: "Gaining genuine joy from what you have truly pursued. It suggests freedom from obstacles, achieving stability and peace, and deeply recognizing that this is truly what you have been seeking.",
        zh: "暗示著從障礙中解放。獲得安穩與自由，並切身體認到「我真正追求的就是這個」。",
      },
      reversed: {
        en: "Seeking joy within your present circumstances. Giving up the pursuit of new gains and finding happiness in your current environment. Also reveals a state of passively accepting things.",
        zh: "放棄取得新事物，從現在的環境中找出喜悅。也顯示出以被動態度接受事物的狀態。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Putting down a heavy burden / a time of good encounters / pleasant events",
          zh: "放下肩上重擔的狀況/有好的邂逅的時候/令人高興的事件",
        },
        reversed: {
          en: "Not bad but unable to be satisfied / finding joy and fortune within your current situation",
          zh: "狀況不糟但無法滿足/從現況中找出快樂的運氣",
        },
      },
      innerState: {
        upright: {
          en: "Peaceful and calm feelings / a sense of liberation / feelings of elation",
          zh: "平靜且安穩的心情/解脫般的感覺/興高采烈的感覺",
        },
        reversed: {
          en: "Content with the status quo / deceiving yourself by overlooking issues / preferring ease to effort",
          zh: "安於現狀/敷衍了事地矇騙自己/好逸惡勞",
        },
      },
      rootCause: {
        upright: {
          en: "Being too assured / deciding everything will work out / becoming careless due to feelings of liberation",
          zh: "過於放心/斷定「一切都會順利」/因為解放感而疏忽大意",
        },
        reversed: {
          en: "Not making a clear decision / taking a dependent stance / forgetting to be grateful",
          zh: "沒有作個了斷/擺出依賴人的態度/忘記感恩",
        },
      },
      development: {
        upright: {
          en: "Taking a moment to rest and recover / concluding a chapter and gaining accomplishment / wishing others well",
          zh: "鬆口氣歇一會兒/告一個段落，獲得成就感/祝福他人的幸福",
        },
        reversed: {
          en: "Hesitating and making no clear decision / settling into a comfortable place / unable to break beyond your boundaries",
          zh: "猶豫不決，什麼也沒決定/選擇輕鬆的地方安頓下來/無法跨越框架",
        },
      },
      advice: {
        upright: {
          en: "Do not overthink / be yourself and relax / take a brief rest",
          zh: "別鑽牛角尖/做自己，放鬆一下/稍微休息",
        },
        reversed: {
          en: "Do not be overly accommodating / do not force yourself to accept / do not simply go along with others' opinions",
          zh: "切勿太過從容/別勉強自己接受/別配合別人的意見",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Beginning a new romance / communicating well with each other / wedding ceremony / a person you feel safe with",
          zh: "展開新的戀情/互相溝通/結婚典禮/在一起能感到放心的人",
        },
        reversed: {
          en: "Ordinary and dull / always feeling somewhat weary / jealousy / one-sided conversation",
          zh: "平淡無奇/總覺得有些倦怠感/爭風吃醋/單方面的對話",
        },
      },
      work: {
        upright: {
          en: "Achieving goals / solving problems and relieving your burden / expert status / taking extended leave / conclusion",
          zh: "達成目標/解決問題，放下肩上的重擔/老手/休長假/結束",
        },
        reversed: {
          en: "Achieving goals but still unsatisfied / becoming complacent due to expectations / careless work / someone with unstable emotions",
          zh: "達成目標仍無法滿足/受到期待而驕傲自滿/隨便的工作/情緒起伏大的人",
        },
      },
      interpersonal: {
        upright: {
          en: "Self-disclosure / harmony and joy / gathering with family / a genuinely peaceful relationship / an acquaintance / familiar person",
          zh: "自我揭示/和樂融融/與家人團聚/由衷感到平靜的關係/認識的人物/熟人",
        },
        reversed: {
          en: "A relationship that never stops quarreling despite not being hostile / strict rule-following / losing courtesy with acquaintances",
          zh: "關係雖然不到險惡，卻總是吵個沒完/墨守成規/對熟人失去禮數",
        },
      },
      others: {
        upright: {
          en: "A place where you can be yourself / becoming free / attending events or parties / returning home / your own home",
          zh: "能讓你做自己的地點/變得自由/參加活動或派對/返鄉/自家",
        },
        reversed: {
          en: "Creating a dead end by trying to deceive yourself / collusion and conspiracy / losing your original self",
          zh: "試圖矇騙自己而造成進退維谷的情況/串通勾結/失去原本的自我",
        },
      },
    },
  },
  {
    id: "five-of-wands",
    name: {
      en: "Five of Wands",
      zh: "權杖五",
    },
    arcana: "minor",
    suit: "wands",
    number: 5,
    image: {
      url: "/images/rider-waite/Wands05.png",
    },
    description: {
      en: "Under a blue sky, five people proudly engage in battle. The bright colors of the card show that this conflict carries no negative emotion. This card speaks of competitive spirit, determination, and the drive to test yourself through victory or defeat.",
      zh: "藍天之下，五個人得意洋洋地展開戰鬥。牌面明亮的配色顯示出這場戰鬥並不帶有負面情感。是張呈現對於鬥志與勝負的堅持的牌。",
    },
    coreKeyword: {
      en: "Victory",
      zh: "取勝",
    },
    meaning: {
      upright: {
        en: "Striving through challenge and self-refinement. Though competitive spirit runs high, there is no malice here. You are trying to reach a certain goal through effort, contest, and determination.",
        zh: "爭鬥心雖高漲，卻沒有負面情感。試圖藉由戰鬥以抵達某個終點。",
      },
      reversed: {
        en: "Defeating one's opponent. Entering a combative stance to wound and push away the other person. A willingness to fight to the end to make the opponent yield is evident.",
        zh: "進入戰鬥態勢，試圖傷害、推開對手。感覺得到為了讓對方認輸，而堅持戰鬥到底的意志。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A time of change / a moment to speak plainly / deciding victory or defeat",
          zh: "變化的運氣/打開天窗說亮話的時期/決定勝負的時候",
        },
        reversed: {
          en: "Chaotic situations / unable to recover / confusion as you are toyed with by surroundings",
          zh: "狀況混亂/無法收拾/被周遭玩弄而混亂的時候",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to express your thoughts / wanting to break through the current situation smoothly / maintaining a rebellious attitude toward opposition",
          zh: "想傳達想法/想順利突破現況/對於反對意見抱持反抗的心態",
        },
        reversed: {
          en: "Dark thoughts accelerating / feeling only you are suffering / jealousy / restlessness",
          zh: "不好的妄想加速/覺得只有自己辛苦/嫉妒/焦躁",
        },
      },
      rootCause: {
        upright: {
          en: "Lacking strength to match your confidence / overly blunt language / inability to stay calm",
          zh: "沒有與自信相符的實力/措辭過於坦率/靜不下來",
        },
        reversed: {
          en: "Doing whatever you want / becoming fragmented / unscrupulous attitude",
          zh: "想做什麼就做什麼/變得支離破碎/不擇手段的態度",
        },
      },
      development: {
        upright: {
          en: "Aiming to reach the next level / well-matched rivals / competition within groups",
          zh: "以更上層樓為目標/棋逢敵手/團體間的競爭",
        },
        reversed: {
          en: "Matters at a standstill with no resolution, making no progress / compromise to avoid conflict",
          zh: "事情處於沒有著落的狀況，停滯不前/為了避免衝突而妥協",
        },
      },
      advice: {
        upright: {
          en: "Emphasize yourself / express your opinions directly / take on more challenges",
          zh: "強調自己/直接地表達意見/多加挑戰",
        },
        reversed: {
          en: "One side must concede / don't let the situation drag on / consolidate opinions",
          zh: "必須有一方先讓步/別讓現況長時間拖延/統整意見",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Being pursued by multiple people / growing closer through quarreling / romantic rivals / stealing someone's affection",
          zh: "被複數異性追求/愈吵感情愈好/戀情上有情敵/橫刀奪愛",
        },
        reversed: {
          en: "Quarreling beyond repair / driven by possessiveness / suffering due to negativity / a violent person",
          zh: "吵架無法收拾/受到獨占欲驅使/因為消極而痛苦/暴力的人",
        },
      },
      work: {
        upright: {
          en: "Participating in competitions or screenings / exchanging beneficial opinions / advertising campaigns / competition",
          zh: "參加比賽或甄選會/交換有益的意見/宣傳戰/競爭",
        },
        reversed: {
          en: "Meetings that cannot be controlled / reluctantly adopting compromise measures / reaching an impasse / internal conflict",
          zh: "會議無法收拾/無可奈何地採取妥協方案/陷入膠著狀態/內鬨",
        },
      },
      interpersonal: {
        upright: {
          en: "Debate / achieving common goals / a group that provides stimulation / people you can share feelings with",
          zh: "爭論/達成共通目的/能夠給予刺激的團體/能夠分享心情的人",
        },
        reversed: {
          en: "Arguing over trivial matters / conversations going in circles / persistent clinging / a stubborn and contrary person",
          zh: "為了芝麻小事而爭執/對話兜圈子/糾纏不休/又乖戾的人",
        },
      },
      others: {
        upright: {
          en: "Striving without seeing what lies ahead / appropriate tension / competing for status / loud and noisy",
          zh: "在看不見前方的情況下奮鬥/適度的緊張感/爭奪地位/吵鬧嘈雜",
        },
        reversed: {
          en: "Not understanding your position / not wanting to accept the current situation / wanting to protect yourself at all costs",
          zh: "不明白定位/不想承認現況/無論如何都想保護自己",
        },
      },
    },
  },
  {
    id: "six-of-wands",
    name: {
      en: "Six of Wands",
      zh: "權杖六",
    },
    arcana: "minor",
    suit: "wands",
    number: 6,
    image: {
      url: "/images/rider-waite/Wands06.png",
    },
    description: {
      en: "The card shows a man holding the wand of victory, seated on a horse and moving forward slowly. From the fact that he leads an army, we can tell he must be an excellent commander. This card presents grasping glory and gaining happiness.",
      zh: "牌面上描繪著手握勝利的權杖，坐在馬匹上緩步前進的男人。從率領軍隊這點可以得知他一定是個優秀的將領。這張牌呈現出的是掌握榮耀，獲得幸福感。",
    },
    coreKeyword: {
      en: "Praise",
      zh: "稱讚",
    },
    meaning: {
      upright: {
        en: "Proud to receive strong praise. Gaining recognition and feeling genuinely happy. Holding a sense of slight superiority and taking pride in successful outcomes.",
        zh: "獲得評價，坦率地感覺開心的狀態。心懷些許優越感，並對於事情順利成功一事感到自豪。",
      },
      reversed: {
        en: "Dissatisfaction with unjust results. Feeling that you did far more, harboring hidden discontent. Even becoming irritable about praise from others, unable to feel genuinely happy.",
        zh: "認為「自己做得明明更多」，而內心暗自感到不滿。甚至對周遭的讚美感到煩躁，無法坦率地感到開心。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Achieving a goal / seeming to have good news / luck that lifts your spirits",
          zh: "達成一項目標的時候/似乎有令人高興的新聞/令內心雀躍的運氣",
        },
        reversed: {
          en: "Unable to proceed as expected / even success brings no joy / time is running out",
          zh: "無法按照預期進行的運氣/即使達成也無法感到開心的狀況/時間到",
        },
      },
      innerState: {
        upright: {
          en: "Overjoyed / wanting to boast to others / feeling proud / sense of accomplishment",
          zh: "高興得不得了/想向人自誇/感到得意/成就感",
        },
        reversed: {
          en: "Discouraged by results different from expectations / pride / lack of confidence / inferiority complex",
          zh: "不同於想像的結果令人氣餒/驕矜/沒有自信/自卑感",
        },
      },
      rootCause: {
        upright: {
          en: "Praise inviting jealousy / contradicting the person's true intention / too much attention / excessive self-awareness",
          zh: "稱讚招致嫉妒/違背當事人的本意/過於受到矚目/自我意識過剩",
        },
        reversed: {
          en: "Excessive pride / adopting a haughty attitude / always making excuses",
          zh: "自尊心過高/擺架子的態度/總是找藉口",
        },
      },
      development: {
        upright: {
          en: "Succeeding in your own way / becoming the focus of attention / advancing through competition",
          zh: "以自己的方式獲得成功/成為注目焦點/在競爭中獲勝而躍進",
        },
        reversed: {
          en: "Waiting for good news that doesn't come / weak group cohesion / success without fulfillment",
          zh: "等不到好消息/團結力量弱/雖然成功卻無法得到成就感",
        },
      },
      advice: {
        upright: {
          en: "Work together as one / approach with confidence / develop leadership ability",
          zh: "同心協力/抱持自信著手處理/培養領導能力",
        },
        reversed: {
          en: "Watch for traitors / superiority becomes the spark of failure / don't rush, take time to handle things",
          zh: "小心叛徒/優越感會成為失敗的火種/別焦急，花時間處理",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Winning over romantic rivals / successful confession / hearing long-awaited words / a person with many supporters",
          zh: "戰勝情敵/表白成功/聽見期待已久的話語/有許多支持者的人",
        },
        reversed: {
          en: "Mistakenly believing the other person likes you / confession fails / unclear messages / proposal or marriage registration delayed",
          zh: "誤以為「對方喜歡自己」/表白失敗/消息不明/提親、婚約、登記入籍延期",
        },
      },
      work: {
        upright: {
          en: "Transaction completed / receiving attention for achieving goals / advancing due to activity / teamwork",
          zh: "交易成立/達成目標而受到矚目/因為活躍而晉升/團隊合作",
        },
        reversed: {
          en: "Waiting for responses / promotion in name only / plans delayed / inability to work as a team / organizational collapse",
          zh: "等待回應/只有形式上的晉升/計畫延期/無法發揮團隊合作/組織崩潰",
        },
      },
      interpersonal: {
        upright: {
          en: "Getting along well and uniting / mutually supportive relationships / person bringing good news / new member joining the team",
          zh: "合得來而團結一致/互相協助的關係/帶來好消息的人/新成員加入團隊",
        },
        reversed: {
          en: "Trusting the other person leads to danger / lies causing discord / slow communication / someone who only talks without acting",
          zh: "信任對方導致面臨危險/謊言導致失和/聯絡過慢/光是出張嘴而不行動的人",
        },
      },
      others: {
        upright: {
          en: "Showing your true self / uniting toward the same goal / feeling fulfillment that lifts your spirits",
          zh: "展現真正的自己/團結起來朝同一個方向前進/感受到令內心雀躍的充實感",
        },
        reversed: {
          en: "Hiding behind lies or pretense / excessive confidence / overvalued assessment / betrayal / someone leaving or betraying the group",
          zh: "以謊言或虛張聲勢來掩飾/自信過剩/評價過高/背叛行為/有人脫隊、背叛",
        },
      },
    },
  },
  {
    id: "seven-of-wands",
    name: {
      en: "Seven of Wands",
      zh: "權杖七",
    },
    arcana: "minor",
    suit: "wands",
    number: 7,
    image: {
      url: "/images/rider-waite/Wands07.png",
    },
    description: {
      en: "The card depicts a man fighting alone. From the number of wands stabbing upward, there are many enemies, but he has taken the advantageous position on the cliff. This card shows standing in an overwhelming advantage without wavering.",
      zh: "牌面描繪的是男人孤軍奮戰的模樣。從往上戳的權杖數量可判斷敵方人數眾多，但他占得了懸崖上的有利位置。這張牌顯示的是立於壓倒性的優勢而毫不動搖。",
    },
    coreKeyword: {
      en: "Struggle",
      zh: "奮鬥",
    },
    meaning: {
      upright: {
        en: "Winning from a favorable position. Standing in an advantageous position while controlling the situation. When luck is favorable, everything feels aligned in your favor.",
        zh: "站在有利的立場掌握事情的狀態。在運氣順風的情況下，可以感覺到一切都站在你這一邊。",
      },
      reversed: {
        en: "Facing hardship in an unfavorable situation. This card hints at a severe predicament. You will be forced to face battle or challenge in an overwhelmingly disadvantageous position, sometimes suggesting mental confusion.",
        zh: "這張牌暗示的是處於嚴峻局面。你將被迫在壓倒性不利的狀況下面對戰鬥或挑戰，有時也可解釋成精神上的迷惘。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A situation where you can assert yourself / overcoming weakness / a good time to decide victory or defeat",
          zh: "能主張自我的狀況/克服軟弱/一決勝負的好時機",
        },
        reversed: {
          en: "Unable to make a firm decision / being drawn into an unavoidable conflict",
          zh: "無法下定決心的狀況/被捲入無可避免的爭鬥中",
        },
      },
      innerState: {
        upright: {
          en: "Setting goals / developing conviction / filled with the will and confidence to win",
          zh: "訂下目標/產生信念/充滿對勝利的意志與自信",
        },
        reversed: {
          en: "Unable to organize thoughts, confusion / loss of fighting spirit / anxiety / entanglement",
          zh: "無法整理思緒而混亂/喪失戰意/不安/糾葛",
        },
      },
      rootCause: {
        upright: {
          en: "Gaining control but not utilizing it / over-relying on favorable circumstances",
          zh: "掌握了主導權卻沒有活用/過度相信有利的狀況",
        },
        reversed: {
          en: "Internal struggle with conscience / deciding it's impossible / being obstructed",
          zh: "與良心之間的交戰/斷定辦不到/受到妨礙",
        },
      },
      development: {
        upright: {
          en: "Establishing an advantageous position / responding clearly with yes or no",
          zh: "取得有利的立場/明確地回應YES NO",
        },
        reversed: {
          en: "Falling into an unfavorable situation / being obstructed by others and expending needless effort",
          zh: "陷入不利的狀況/受到他人妨礙而付出無謂的勞力",
        },
      },
      advice: {
        upright: {
          en: "Turn those around you into allies / trust yourself / use your advantageous position",
          zh: "讓周遭的人成為夥伴/相信自己/利用有優勢的立場",
        },
        reversed: {
          en: "Watch for obstruction or interference / prepare for a difficult battle / abandon meaningless conflict",
          zh: "注意妨礙或干涉/要有面臨苦戰的覺悟/放棄沒有意義的戰鬥",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Approaching fiercely / an all-or-nothing momentum / fearlessness of heartbreak / a love that wins",
          zh: "猛烈地接近/一不做二不休的氣勢/不害怕失戀的心/贏得勝利的愛情",
        },
        reversed: {
          en: "Deceived by romantic rivals / ending in futility / hesitating and wavering / heartbreak",
          zh: "受到情敵欺騙/以徒勞無功告終/躊躇不前而猶豫/失戀",
        },
      },
      work: {
        upright: {
          en: "Project with winning odds / bargaining / winning in competitions / abundant funds / sponsors",
          zh: "企劃案獲得勝算/討價還價/在比賽中獲勝/資金充裕/贊助商",
        },
        reversed: {
          en: "Project showing signs of failure / ambushed / losing in competition / doing double work",
          zh: "敗象濃厚的企劃案/遭到突襲/在競爭或比賽中落敗/做兩次工",
        },
      },
      interpersonal: {
        upright: {
          en: "Leading the conversation / outspoken person / decisive responses matter / a relationship with open-handed generosity",
          zh: "主導對話/說話無所顧忌的人/強勢的應對成為關鍵/爽快出錢的關係",
        },
        reversed: {
          en: "Conversation at odds with true feelings / weak response / inconsistent relationship / not good at dealing with aggressive people",
          zh: "不同於真心話，表面上的對話/弱勢的應答/表裡不一的關係/不擅長應付態度強勢的人",
        },
      },
      others: {
        upright: {
          en: "Winning through determination / no hesitation / warrior spirit / odds in your favor / winning opportunity",
          zh: "藉由下定決心而取得勝利/毫不迷惘/戰勝的氣概/勝算/致勝時機",
        },
        reversed: {
          en: "Losing through fear / inner confusion / having your weakness exploited / fighting without odds",
          zh: "心生膽怯而落敗/自己內心的迷惘/被抓住弱點/沒有勝算的戰鬥",
        },
      },
    },
  },
  {
    id: "eight-of-wands",
    name: {
      en: "Eight of Wands",
      zh: "權杖八",
    },
    arcana: "minor",
    suit: "wands",
    number: 8,
    image: {
      url: "/images/rider-waite/Wands08.png",
    },
    description: {
      en: "The eight wands move forward like arrows, symbolizing powerful force and speed. Their tips all face the same direction, suggesting that will and action are aligned and moving forward without hesitation.",
      zh: "八支權杖如箭矢般前進的模樣，象徵著強大的力量與速度。此外，權杖前端朝著同一個方向前進，暗示著意志與行動一致，毫不猶豫地前進的姿態。",
    },
    coreKeyword: {
      en: "Rapid development",
      zh: "急速發展",
    },
    meaning: {
      upright: {
        en: "Moving forward at a dizzying speed. Things are suddenly in motion, indicating that circumstances will change at an unpredictable pace. Sometimes it can also be interpreted as something hoped for coming true.",
        zh: "事物性急地動了起來，顯示事態將會以無法預測的速度產生變化。有時也可解釋成所希望的好事。",
      },
      reversed: {
        en: "Unexpected stalling. Things that were progressing smoothly suddenly stopped. Suggests a standstill caused by unforeseen problems, creating an impatient sense of closure.",
        zh: "原本順利的事情突然地停了下來。暗示著因為出乎意料的問題導致停滯，這致令人不耐的封閉感。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Luck improving / matters flowing smoothly / continuous change",
          zh: "事態好轉的運氣/事物流暢地推動的狀況/不間斷的變化",
        },
        reversed: {
          en: "Luck turning sharply downward / unexpected developments / hearing unwelcome news",
          zh: "運氣急轉直下/出乎意料的發展/傳來討厭的消息",
        },
      },
      innerState: {
        upright: {
          en: "Clearly feeling fortunate / switching to positive and forward-thinking",
          zh: "確切地感覺到走運/切換成積極正向的思考",
        },
        reversed: {
          en: "Disappointed by failed expectations and feeling shaken / sinking into misfortune / prolonged discontent",
          zh: "背叛期待，受到打擊/不幸的深淵/不滿延長",
        },
      },
      rootCause: {
        upright: {
          en: "Confusion due to rapid development / overwhelmed by momentum / wrong response method",
          zh: "因為急速發展而陷入混亂/遭氣勢壓制/應對方法錯誤",
        },
        reversed: {
          en: "Reaching an impasse / the other person's change of heart / loss of confidence and momentum",
          zh: "陷入僵局/對方變心/失去信心與氣勢",
        },
      },
      development: {
        upright: {
          en: "Meeting pleasing developments / matters advancing rapidly / situation demands immediate action",
          zh: "迎接令人欣喜的發展/事情一口氣進展/狀況刻不容緩",
        },
        reversed: {
          en: "Unwelcome developments occurring / not receiving what you hoped for",
          zh: "發生不樂見的事態/沒得到期待的事物",
        },
      },
      advice: {
        upright: {
          en: "Don't hesitate / trust your fortune / go with the flow",
          zh: "不可以躊躇/相信自己的運勢/順應情勢",
        },
        reversed: {
          en: "Observe the situation carefully / unexpected developments / be cautious of others changing their minds",
          zh: "仔細觀察狀況/意料之外的事態/小心別人改變主意",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Love at first sight / passionate pursuit of someone / romantic developments beyond expectation / rapid development / momentum",
          zh: "一見鍾情而墜入愛河/熱情地追求異性/展開出乎意料的戀愛/急速發展/氣勢",
        },
        reversed: {
          en: "Sudden jealousy / possessiveness leading to control / sudden change in attitude / changed heart",
          zh: "強烈的嫉妒感襲來/出於獨占欲而束縛人/態度突然改變/變心",
        },
      },
      work: {
        upright: {
          en: "Receiving orders / sudden commissions / increased customers / investment or stocks succeed / increased sales",
          zh: "接到訂單/突然收到委託/顧客增加/投資或股票成功/銷量提升",
        },
        reversed: {
          en: "Planned project encounters setback / sudden delay / receiving unwelcome work / transfers not as expected",
          zh: "預定計畫遭受挫折/突然延期/接到討厭的工作/不符期望的調動",
        },
      },
      interpersonal: {
        upright: {
          en: "Sudden invitations / unexpected contact / hasty meetings / relationship progressing smoothly",
          zh: "突如其來的邀約/突然聯繫/倉促地見面/關係順利進展",
        },
        reversed: {
          en: "One-sided feelings causing disputes / contradicting what was said / someone who changes plans / talkative person",
          zh: "一廂情願而引發爭執/推翻說過的事/變更預定計畫的人/多嘴的人",
        },
      },
      others: {
        upright: {
          en: "Winds of fortune / breaking free from stagnation / sudden long-distance travel / requires immediate action",
          zh: "吹起順風/脫離停滯不前的狀態/突然的長距離移動/需要立刻採取行動",
        },
        reversed: {
          en: "Suddenly hit by headwind / restrictions on going out / forced tasks / disrupting plans",
          zh: "突然地受到逆風侵襲/被禁止外出/被強加事務/導致亂了計畫",
        },
      },
    },
  },
  {
    id: "nine-of-wands",
    name: {
      en: "Nine of Wands",
      zh: "權杖九",
    },
    arcana: "minor",
    suit: "wands",
    number: 9,
    image: {
      url: "/images/rider-waite/Wands09.png",
    },
    description: {
      en: "The card shows a cautious man standing guard. Though wounded, he still prepares to fight, revealing an indomitable spirit that refuses to give in. This card asks what you are truly fighting for.",
      zh: "牌面上繪製著小心謹慎地戒備著的男人身影。儘管負傷仍試圖戰鬥的姿態，令人感覺到他不想認輸的不屈精神。這是張再次詢問自身戰鬥理由的牌。",
    },
    coreKeyword: {
      en: "Preparation",
      zh: "準備",
    },
    meaning: {
      upright: {
        en: "Prepared to handle any situation. You have made thorough preparations and are on guard, with both body and mind full of tension.",
        zh: "無論何種狀況都能應對的狀態。你已經確實做好準備加以提防，身心都充滿緊張感。",
      },
      reversed: {
        en: "Struck hard due to pride. You are too optimistic about the situation. The reversal hints that you cannot handle sudden circumstances, creating confusion. Sometimes it warns you of lacking self-awareness.",
        zh: "你對於事態過於樂觀。逆位暗示著無法應對唐突的局面而引發混亂。有時也可解釋為訓誡你缺乏自覺。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A time of regrouping / situation where you prepare for the future / being alert to danger",
          zh: "重整態勢的時候/為未來做好準備的狀況/提防危險",
        },
        reversed: {
          en: "Unable to respond smoothly / repeating past mistakes / running out of time",
          zh: "無法順利應對的時候/重蹈覆轍的運氣/趕不上的情況",
        },
      },
      innerState: {
        upright: {
          en: "Posturing against danger or enemies / prepared for anything / nervousness",
          zh: "擺好架勢提防危險或敵人/有備無患/神經過敏",
        },
        reversed: {
          en: "Discouraged by unexpected circumstances / regretting overconfidence / feeling past efforts were wasted",
          zh: "因意料之外的事態而氣餒/後悔自己過於輕敵/認為過去的行動白費工夫",
        },
      },
      rootCause: {
        upright: {
          en: "Matters not progressing / personal delay / excessive caution",
          zh: "事物沒有進展/自己拖延/小心謹慎過頭",
        },
        reversed: {
          en: "Carefree attitude / naive thoughts and awareness / not learning from past experience",
          zh: "態度悠哉/想法或認知天真/沒有從過去的經驗中學習",
        },
      },
      development: {
        upright: {
          en: "Making thorough preparations / facing any difficulty head-on / using past experience as sustenance",
          zh: "做好萬全的準備/無論任何困難都要挺身面對/活用過去的經驗",
        },
        reversed: {
          en: "Prepared measures failing to help and the situation ending / unforeseen miscalculation occurring",
          zh: "準備好的事物沒能發揮就結束/發生估計錯誤的事件",
        },
      },
      advice: {
        upright: {
          en: "Prepare thoroughly and carefully / use past experience as foundation / be cautious of old wounds or illnesses",
          zh: "用心周到地準備/以至今為止的經驗為糧食/注意舊傷或疾病",
        },
        reversed: {
          en: "Determine priorities and plan what to prepare for / make reservations in advance / don't be careless",
          zh: "決定好優先事項，排好應該針對什麼事做準備/提前預約/切勿大意",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Learning not to underestimate romantic rivals / feeling tense with the opposite sex / casting doubtful glances / a romance worth protecting",
          zh: "了解到不能小看情敵/面對異性感到緊張/投出懷疑的視線/想守護的戀情",
        },
        reversed: {
          en: "Relationship stalling / waiting in vain / miscalculation / near-miss romance / someone with very bad luck",
          zh: "關係沒有進展/空等/估計錯誤/擦身而過的戀情/運氣很差的人",
        },
      },
      work: {
        upright: {
          en: "Anticipating difficulties or trouble / considering worst-case scenarios / careful confirmation leads to success / a strong opponent",
          zh: "提防困難或麻煩/設想最壞的事態/仔細確認而成功/強敵",
        },
        reversed: {
          en: "Unable to grasp current situation / unclear and making no progress / being outmaneuvered / hacker",
          zh: "無法掌握現況/不得要領，工作無法進展/被占了先機/駭客",
        },
      },
      interpersonal: {
        upright: {
          en: "Sensing pressure / conversation as prepared / experienced person / someone with strong vigilance requiring caution",
          zh: "感覺到壓力/一如準備的對話/經驗豐富的人/警戒心很強要特別注意的人",
        },
        reversed: {
          en: "Self-centeredness causing mismatched pace / conversation reaching no conclusion / someone fragile and immature",
          zh: "過於自我中心使得步調不一致/對話沒有結論/撐不住，不成熟的人",
        },
      },
      others: {
        upright: {
          en: "A well-organized state / fully prepared to respond / full of power / mastering victory",
          zh: "條理分明的狀態/做好迎擊的充分準備/充滿力量/掌握勝利",
        },
        reversed: {
          en: "Everything appears half-hearted / inadequate preparation meeting sudden attack / feeble / defeat / prone to illness",
          zh: "一切都顯得半吊子/準備不足而突然遭受襲擊/貧弱/敗北/容易生病",
        },
      },
    },
  },
  {
    id: "ten-of-wands",
    name: {
      en: "Ten of Wands",
      zh: "權杖十",
    },
    arcana: "minor",
    suit: "wands",
    number: 10,
    image: {
      url: "/images/rider-waite/Wands10.png",
    },
    description: {
      en: "The card shows a man carrying many wands in his arms, and from his posture one can even feel an attachment that says, \"I absolutely will not let go.\" This card presents a choice: what should be held onto, and what should be released.",
      zh: "牌面上的是懷抱著好幾根權杖的男人身影，從他的姿態甚至能感覺到一股「絕對不放手」的執著。這張牌會拋出選擇，告訴你什麼該掌握住，什麼應該放手。",
    },
    coreKeyword: {
      en: "Heavy pressure",
      zh: "沉重的壓力",
    },
    meaning: {
      upright: {
        en: "Exhausting yourself under the weight of your own choices. Unable to set down the burden even though already exhausted. This card shows being overwhelmed by something only you can bear.",
        zh: "即使已經筋疲力盡，仍無法放下負擔的狀況。這張牌顯示的是被只有自己能背負的事物逼得喘不過氣。",
      },
      reversed: {
        en: "Putting down what has been pushing you. You have reached your limit. You seem to wish to release the burden and find relief. Sometimes it can be interpreted as lacking sense of responsibility.",
        zh: "你已經瀕臨極限。似乎希望能放下負荷，獲得解脫。有時也可解釋成沒有責任感。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Exhausted state / taking on tasks / times with no margin for error",
          zh: "筋疲力盡的狀況/承擔任務的狀態/沒有餘裕的時候",
        },
        reversed: {
          en: "Misfortunes piling up / repeatedly encountering trouble / wanting to escape",
          zh: "禍不單行的運氣/一再遇上麻煩的時候/想要逃跑的情況",
        },
      },
      innerState: {
        upright: {
          en: "Drive that makes it necessary to act / exhaustion in body and mind / gloomy mood",
          zh: "不做不行的幹勁/身心疲憊不堪/心情鬱悶",
        },
        reversed: {
          en: "Wanting to break free from pressure / suddenly deciding you're not at fault",
          zh: "想從壓力中解脫/態度驟變地認為自己沒錯",
        },
      },
      rootCause: {
        upright: {
          en: "Shouldering things alone / overstepping into too many things / being overly serious",
          zh: "獨自扛起/過度干預各種事物/正經過頭",
        },
        reversed: {
          en: "Quitting halfway through / indulging yourself / lacking responsibility",
          zh: "半途而廢/姑息自己的思考方式/沒有責任感",
        },
      },
      development: {
        upright: {
          en: "Exhausting yourself through excessive effort / needing help from others",
          zh: "太過努力而過勞/需要他人協助",
        },
        reversed: {
          en: "Unable to finish / running away from the situation / encountering troubles in succession",
          zh: "無法做到最後/逃離現況/遇上接二連三的麻煩",
        },
      },
      advice: {
        upright: {
          en: "Discuss with those around you about sharing responsibilities / don't always respond to others' requests",
          zh: "與周遭商量應該分擔職務/不要總是回應他人的要求",
        },
        reversed: {
          en: "Don't escape responsibility / consider that more trouble will result / if uncertain, have someone substitute",
          zh: "不要逃離責任/該考慮到會增加麻煩/如果沒有自信就找人代替",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Tolerating to avoid being disliked / maintaining a relationship out of duty / someone who needs care / enduring hardship",
          zh: "為了避免被討厭而忍耐/因責任感而維持的關係/需要別人照顧的人/苦戰",
        },
        reversed: {
          en: "Breaking up with a partner / own actions facing blame / abandoning the other and running away / someone with problems",
          zh: "與情人分手/自己的行為遭到責備/拋棄對方逃跑/懷有問題的人",
        },
      },
      work: {
        upright: {
          en: "Shouldering work / stress from responsibility / repeated appointments / overwork",
          zh: "扛起工作/因為責任感而產生壓力/重複預約/過勞",
        },
        reversed: {
          en: "Abandoning work midway / mutual blame-shifting / continuous problems / failure and setback",
          zh: "半途放棄工作/互相推卸責任/連續出問題/失敗而遭受挫折",
        },
      },
      interpersonal: {
        upright: {
          en: "Thinking it's your fault / admitting fault / someone destined for hardship / feeling burden from expectations / sense of duty",
          zh: "認為是自己錯了的心境/認錯的發言/勞碌命/受期待而感覺到重擔/義務感",
        },
        reversed: {
          en: "Being implicated / being forced to take on someone else's problem / displaced anger / self-centered person",
          zh: "受到牽連/被迫代人承擔問題/遷怒/自我中心的人",
        },
      },
      others: {
        upright: {
          en: "Believing only you can handle it, taking on everything that feels difficult / caregiving / childcare",
          zh: "認為只有自己辦得到而扛下所有令人覺得難受的事物/看護/育兒",
        },
        reversed: {
          en: "Irresponsibly giving up / having responsibility shifted to you / taking on challenges / avoidance / withdrawal",
          zh: "不負責任地放棄/被人轉嫁責任/接受考驗/逃避/脫離戰線",
        },
      },
    },
  },
  {
    id: "page-of-wands",
    name: {
      en: "Page of Wands",
      zh: "權杖侍者",
    },
    arcana: "minor",
    suit: "wands",
    number: 11,
    image: {
      url: "/images/rider-waite/Wands11.png",
    },
    description: {
      en: "The card shows a boy responsible for delivering messages. From the way he looks up at a wand taller than himself, you can feel his openness and sincerity. It embodies a pure hope for the future and the passion to bring it to life.",
      zh: "牌面上繪製的是負責傳遞訊息的少年。從仰望比自己高大的權杖的模樣，可以感覺出他的坦率。呈現對於未來抱持希望的純粹，以及試圖實現的熱情。",
    },
    coreKeyword: {
      en: "Messenger",
      zh: "傳令",
    },
    meaning: {
      upright: {
        en: "Burning with passion while believing in the future. You look ahead with clear, honest eyes and approach your wishes with sincerity and openness. It suggests steady progress toward your dreams.",
        zh: "顯現以純粹的雙眼看著未來的狀態，以忠實而坦率的態度面對願望。暗示朝著夢想順利邁步向前。",
      },
      reversed: {
        en: "Boasting with self-satisfaction. Behind talk of hope, a rebellious spirit and capricious attitude lurk. Sometimes it can mean acting with a rebellious heart against others without self-awareness.",
        zh: "在述說著希望的背後，則隱約透露出反骨精神與反覆無常的態度。有時也可解釋成在沒有自覺的情況下，因為對他人的反抗心而採取行動。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "A motivated time / an opportunity that shapes the future / full of drive",
          zh: "有幹勁的狀況/左右未來的機會降臨的時候/幹勁十足",
        },
        reversed: {
          en: "Getting ahead of yourself / fickle mood due to distraction",
          zh: "一頭熱地失控中/見異思遷而使心情不定的狀態",
        },
      },
      innerState: {
        upright: {
          en: "So enthusiastic about one thing you neglect everything else",
          zh: "熱衷於一件事到甚至無暇顧及其他事情的程度",
        },
        reversed: {
          en: "Thoughts contrary to norms swirling in your mind / unable to understand surroundings' feelings",
          zh: "違背倫常的想法盤旋腦海/無法理解周遭的心情",
        },
      },
      rootCause: {
        upright: {
          en: "Not seeing surroundings / a tendency to dream like a child / simplicity",
          zh: "看不見周遭/有如孩童般作夢的傾向/單純",
        },
        reversed: {
          en: "Disdaining surroundings with poor attitude / opposing for the sake of opposing with shallow behavior",
          zh: "瞧不起周遭，態度很差/為反對而反對的膚淺言行",
        },
      },
      development: {
        upright: {
          en: "Opportunity arrives / regaining spirits / receiving good news",
          zh: "機會降臨/恢復精神/接到好消息",
        },
        reversed: {
          en: "Bluffing / no matter how long you wait, silence persists / rushing leads to failure",
          zh: "虛張聲勢/不論等多久都沒有回音/因為急躁而導致失敗",
        },
      },
      advice: {
        upright: {
          en: "Be straightforward and focus on what is in front of you / don't overthink what isn't necessary",
          zh: "坦率地只看眼前的事物/不要思考多餘的事情",
        },
        reversed: {
          en: "Keep distance from rumors / don't expect too much echo or reward",
          zh: "與傳聞保持距離/不要太期待回音或回報",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Genuinely enjoying romance / meeting a new person of the opposite sex / finding the give-and-take of romance fun / younger opposite sex",
          zh: "由衷地享受戀愛/與新的異性邂逅/認為戀愛中的攻防很有趣/年紀比自己小的異性",
        },
        reversed: {
          en: "A change of heart because someone new appears / hidden matters coming to light / one-sidedly imposing your feelings",
          zh: "因為出現新的異性而變心/隱瞞的事被揭穿/單方面地強加自己的心情",
        },
      },
      work: {
        upright: {
          en: "Focusing on your assigned work / learning technique through current work / overseas business",
          zh: "專注於自己肩負的工作/透過眼前的工作學會技術/外國事業",
        },
        reversed: {
          en: "Self-interest causing trouble and lowered trust / all talk no action / secret leaks / hacker",
          zh: "利己主義惹禍，導致信任降低/只出一張嘴而不採取行動/祕密洩漏/駭客",
        },
      },
      interpersonal: {
        upright: {
          en: "Building trust / making new friends / a relationship that returns to childlike innocence / genuinely enjoying conversation",
          zh: "締結信任關係/交到新朋友/能回歸赤子之心的關係/由衷享受交談",
        },
        reversed: {
          en: "Revealing all secrets / feeling no genuine pleasure in heart / object of suspicion / someone vain",
          zh: "將祕密全數揭露/內心不覺得愉快/懷疑的對象/抱持虛榮心的人",
        },
      },
      others: {
        upright: {
          en: "Energy / small child / young person / clear speech / simplicity / phone call / letter / email / foreign language",
          zh: "精力/年幼孩童/年輕人/明確的措辭/單純/電話/書信/電子郵件/外文",
        },
        reversed: {
          en: "Wanting attention / things becoming thorny / impatience / willfulness / not keeping word / immaturity",
          zh: "想引人注目/事情變得棘手/性急/任性/說話不算話/不成熟的人",
        },
      },
    },
  },
  {
    id: "knight-of-wands",
    name: {
      en: "Knight of Wands",
      zh: "權杖騎士",
    },
    arcana: "minor",
    suit: "wands",
    number: 12,
    image: {
      url: "/images/rider-waite/Wands12.png",
    },
    description: {
      en: "The card shows a brave young man riding a leaping horse. Although lively and full of charm, he is very difficult to rein in. This is a card of passion and strong impulses that are hard to contain.",
      zh: "牌面上繪製著騎在跳躍的馬上的勇敢青年身影。雖然活潑且充滿魅力，但要控制他可極為困難。這是張呈現難以駕馭的熱情與強烈衝動的牌。",
    },
    coreKeyword: {
      en: "Departure",
      zh: "出發",
    },
    meaning: {
      upright: {
        en: "Setting out toward new horizons. A state where your heart feels delighted about the new beginning. Full of enthusiasm for challenge, suggesting active and immediate action.",
        zh: "朝著新的開始，內心感到雀躍的狀態。渾身充滿了挑戰的熱情，暗示著積極採取行動。",
      },
      reversed: {
        en: "Inner feelings unable to catch up with change. Unexpected change leaves you confused. Wanting to protect your original ground, you may thus take an offensive stance.",
        zh: "意料外的變化令你不知所措。由於想守護原本的容身之處，也會因此採取攻勢。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Time of departure / signs of job change or transfer / unusual connection",
          zh: "啟程的時候/跳槽或調動的跡象/有不可思議的機緣",
        },
        reversed: {
          en: "Leaving your current place / signs of causing trouble / almost there but not quite",
          zh: "離開現在所在處的時候/引發麻煩的跡象/只差一步的狀況",
        },
      },
      innerState: {
        upright: {
          en: "Wanting to begin with full drive / passionate about challenges / just wanting to start above all",
          zh: "想要開始而幹勁十足/對挑戰抱持熱情/總之就是想開始",
        },
        reversed: {
          en: "Bewildered, losing yourself / possibly taking a belligerent stance after being demoted / resentful / excited state",
          zh: "不知所措地迷失自我/可能遭到貶謫而氣勢洶洶/惱羞成怒/激動狀態",
        },
      },
      rootCause: {
        upright: {
          en: "Only enthusiasm without concrete plan / recklessness / avoiding thinking",
          zh: "空有熱情而沒有具體計畫/莽撞/逃避思考",
        },
        reversed: {
          en: "Weakness attacked / clinging to current state / big talk",
          zh: "弱點被攻擊/拘泥現狀/言誇張",
        },
      },
      development: {
        upright: {
          en: "Meeting influential person / enthusiasm for challenge emerging / moving about busily",
          zh: "遇見具影響力的人物/湧現挑戰的熱情/東奔西跑",
        },
        reversed: {
          en: "Facing trouble such as bickering or disputes / circumstances playing with you",
          zh: "面臨口角或爭執等麻煩/被狀況的變化玩弄於股掌間",
        },
      },
      advice: {
        upright: {
          en: "Rather than consider consequences, take action first / begin after changing your mind",
          zh: "與其考慮後果不如先採取行動/改變想法後開始",
        },
        reversed: {
          en: "Calm down and think / panic only brings fatigue / don't fear unexpected circumstances",
          zh: "冷靜下來思考/即使驚慌也只會疲憊/不要害怕意料之外的事態",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Actively pursuing success / mutually drawn by sexual attraction / a bold and passionate person / an ardent pursuer",
          zh: "積極地追求成功/受到性感魅力互相吸引的關係/大膽而熱情的人/肉食系",
        },
        reversed: {
          en: "Romance with uncertain developments / frequently quarreling couple / trying to protect yourself / selfish person",
          zh: "不知道會發生什麼事的戀情/經常吵架的情侶/試圖保護自己/利己主義者",
        },
      },
      work: {
        upright: {
          en: "Opening new customers or markets / sales-related work / new challenges / studying abroad / business trip / promotion / trading",
          zh: "開拓新顧客或市場/營業相關的工作/新的挑戰/留學/出差/榮升/貿易",
        },
        reversed: {
          en: "All your efforts falling behind / missing deadlines / no plan / worsened interpersonal relations / obstruction",
          zh: "所做的一切都落於人後/趕不上時間/沒有計畫/人際關係惡化/妨礙",
        },
      },
      interpersonal: {
        upright: {
          en: "Mutually expressing passion / worry-free relationship / reckless person / sports partner / travel companion",
          zh: "可互相表達熱情/沒有後顧之憂的關係/冒失的人/運動夥伴/旅伴",
        },
        reversed: {
          en: "Incompatible / every meeting affects your mood / a relationship prone to quarrels / troublemaker",
          zh: "合不來/每次見面都影響心情/會吵起來的關係/麻煩製造者",
        },
      },
      others: {
        upright: {
          en: "Brave / impatient / confident / sudden travel / driving / car / bus or train and other public transportation",
          zh: "勇敢/性急/自信/突然的旅行/開車/汽車/巴士或電車等大眾交通工具",
        },
        reversed: {
          en: "Restless / unstable / boastful bluff / discouragement / visiting various places / setback",
          zh: "靜不下來/不穩定/衝動的吹牛/氣餒/到各種地方拜訪/挫折",
        },
      },
    },
  },
  {
    id: "queen-of-wands",
    name: {
      en: "Queen of Wands",
      zh: "權杖王后",
    },
    arcana: "minor",
    suit: "wands",
    number: 13,
    image: {
      url: "/images/rider-waite/Wands13.png",
    },
    description: {
      en: "This card depicts a woman holding a wand and a sunflower. Her boldly open posture suggests sexual charm, while the black cat at her feet hints at her mysterious, magical nature. This card displays strength that is fully aligned inside and out.",
      zh: "這張牌描繪著手持權杖與向日葵的女性姿態。挑釁般地張開的雙腿令人感覺到性感魅力，腳邊的黑貓則像在展現魔性。是張展現表裡如一的強韌的牌。",
    },
    coreKeyword: {
      en: "Charm",
      zh: "魅力",
    },
    meaning: {
      upright: {
        en: "Those around you are naturally drawn in. It suggests becoming the center of attention. Because you are inwardly composed, you act with genuine warmth and generosity. It can also simply mean being openly admired.",
        zh: "暗示著成為受到矚目的焦點。內心游刃有餘，就會出於熱心採取行動。此外，也可解釋成坦率地受到喜愛。",
      },
      reversed: {
        en: "Self-righteous behavior causes misunderstanding. What you consider good works in a negative direction. Also shows the possibility of becoming the target of jealousy or misunderstanding.",
        zh: "自覺好的事物卻朝著負面方向起作用。也顯示出受到嫉妒或誤解的可能性。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Trustworthy luck / gathering people's support / a time to grow into the strength you know you have",
          zh: "可靠的運氣/凝聚人望的狀況/希望能力與自身相符的時候",
        },
        reversed: {
          en: "Willful attitude / lack of order / feeling yourself is strong / inner lacking composure",
          zh: "任性態度/沒有秩序/認為自己很強的狀況/內心沒有餘裕",
        },
      },
      innerState: {
        upright: {
          en: "Inner composure caring for others / wanting to do what should be done / not wanting to be dependent",
          zh: "內心有著體貼別人的餘裕/想要做好該做的事/不想撒嬌",
        },
        reversed: {
          en: "Restlessness about not being the focus / just keeping a firm attitude makes surroundings submit / stubborn",
          zh: "為無法成為注目焦點而煩躁/只要保持堅決態度，周遭就會屈服/頑固",
        },
      },
      rootCause: {
        upright: {
          en: "Wanting to complete everything / becoming popular and receiving jealousy / jack of all trades master of none",
          zh: "無論任何事都想努力完成/受歡迎而遭到嫉妒/樣樣通樣樣鬆",
        },
        reversed: {
          en: "Losing composure and losing control / self-centered / arrogant / past experience doesn't work",
          zh: "失去冷靜而失控/自我中心/高傲/過去的經驗行不通",
        },
      },
      development: {
        upright: {
          en: "Receiving support from surroundings / being appreciated for your capacity / being able to understand others' worries",
          zh: "受到周遭提拔/器量大而贏得人望/可以理解別人的煩惱",
        },
        reversed: {
          en: "Three-minute enthusiasm / wanting control / deviating from path due to jealousy",
          zh: "三分鐘熱度/想要爭取主導權/因為嫉妒而偏離正軌",
        },
      },
      advice: {
        upright: {
          en: "Keep inner composure / it's okay to not show effort / listen to others' opinions",
          zh: "保持內心餘裕/就算不拿出幹勁也無所謂/聽取他人的意見",
        },
        reversed: {
          en: "Discard jealousy / don't be too stubborn in your beliefs / caring for surroundings is important",
          zh: "捨棄嫉妒心/切勿過於固執己見/關心周遭是很重要的",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "A burning passion / a woman with mature grace / someone with sexual charm / modesty / pregnancy and childbirth",
          zh: "令身心燒焦般熱情的愛/有年長風範的女性/具性感魅力的人/貞操觀念",
        },
        reversed: {
          en: "Romance born from dependence / intense jealousy / temptation to cheat / family collapse / shifting blame",
          zh: "源於依賴對方的戀情/強烈嫉妒/出軌的誘惑/家庭崩毀/轉嫁責任",
        },
      },
      work: {
        upright: {
          en: "Success in both career and life / your network becoming a professional asset / finding meaning in what you do / a female entrepreneur",
          zh: "事業、生活兩得意/人脈成為工作的助力/找出這麼做的價值/女性企業家",
        },
        reversed: {
          en: "Blurring of public and private / tired of work content / backstabbing / sales competition / aggressive",
          zh: "公私混淆/厭倦工作內容/互扯後腿/業績競爭/具攻擊性",
        },
      },
      interpersonal: {
        upright: {
          en: "Able to speak of troubles frankly / positive relationship / reliable person / person sharing spirit",
          zh: "能坦率地說出煩惱/積極正向的關係/可靠的人/能分享精神的人",
        },
        reversed: {
          en: "Not considering the other person / prone to complaining / prone to jealousy / narrow-minded / irresponsible relationship",
          zh: "不考慮到對方/愛發牢騷/愛嫉妒的人/器量狹小/不負責任的關係",
        },
      },
      others: {
        upright: {
          en: "Benefiting in wealth / full of charm / heroine / effortlessly radiating charm / charisma / moisture",
          zh: "在財富上受惠/充滿魅力/巾幗英雄/不著痕跡地散發魅力/領袖魅力/滋潤",
        },
        reversed: {
          en: "Always seeking spotlight / lack of taste / not trustworthy / meddlesome / lacking charm / coarse",
          zh: "總是愛出鋒頭/沒品/不值得信任/多管閒事/欠缺魅力/粗野",
        },
      },
    },
  },
  {
    id: "king-of-wands",
    name: {
      en: "King of Wands",
      zh: "權杖國王",
    },
    arcana: "minor",
    suit: "wands",
    number: 14,
    image: {
      url: "/images/rider-waite/Wands14.png",
    },
    description: {
      en: "This card shows a king holding a wand, always prepared to stand up. His posture expresses action and leadership, while the salamander at his feet symbolizes passion and power.",
      zh: "這張牌所描繪的是隨時準備好站起身，手握權杖的國王。其姿勢表現出行動力與領袖魅力，腳邊的沙羅曼達（火蜥蜴）則是熱情與力量的象徵。",
    },
    coreKeyword: {
      en: "Boldness",
      zh: "果敢",
    },
    meaning: {
      upright: {
        en: "Achieving things through conviction. This is a time when great power fills you from within. By turning those around you into allies, you can produce results no matter what difficulty appears.",
        zh: "現在正是強大力量充滿體內的時候。讓周遭眾人成為自己的夥伴，無論遭遇何種困難，一定都能有結果。",
      },
      reversed: {
        en: "Trying to control everything too forcefully. The determination to achieve your goals at any cost can also become the source of criticism. Sometimes it points to losing sound judgment because passion has become excessive.",
        zh: "無論如何都要達成目標的堅強意志，也會成為蒙受批評的火種。有時也可解釋成因過於熱衷而失去正常判斷力的情況。",
      },
    },
    readingAspects: {
      currentSituation: {
        upright: {
          en: "Inner composure / feeling fortunate / a situation where you can be certain of the future",
          zh: "內心游刃有餘的時候/感覺到走運的運氣/可確信未來的狀況",
        },
        reversed: {
          en: "Overwhelmingly busy / disorganized and risky",
          zh: "忙得不可開交的時候/手忙腳亂的危險狀況",
        },
      },
      innerState: {
        upright: {
          en: "Enjoying life / possessing conviction as your pillar / optimistic thinking",
          zh: "享受人生/擁有成為自身支柱的信念/樂觀的思考",
        },
        reversed: {
          en: "Wanting to force plans through / lacking the composure to care for others / urgent mood",
          zh: "即使硬來也想達成計畫/沒有關心人的餘裕/心情急躁",
        },
      },
      rootCause: {
        upright: {
          en: "The matter currently being handled contains problems in itself / inexperience in directing others",
          zh: "現在著手處理的事情本身存在著問題/不習慣統率他人",
        },
        reversed: {
          en: "Relying on power or status / misjudging timing / impatience",
          zh: "仰賴權力或地位/誤判時機/性急",
        },
      },
      development: {
        upright: {
          en: "Reaching the top / exercising leadership / challenging new things",
          zh: "立於頂點/發揮領導能力/挑戰新事物",
        },
        reversed: {
          en: "Unable to lead people well / losing composure and unable to reflect on your own actions",
          zh: "無法好好統率他人/失去餘裕，無法好好回顧自己的行動",
        },
      },
      advice: {
        upright: {
          en: "Leadership is needed / possess an unwavering core / think constructively",
          zh: "需要領導能力/擁有不會動搖的軸心/應該要有建設性的思考",
        },
        reversed: {
          en: "Haste makes waste / make risk-avoiding decisions / don't rush, prepare properly",
          zh: "欲速則不達/做出避免風險的決定/別急躁，做好準備",
        },
      },
    },
    contextualMeanings: {
      love: {
        upright: {
          en: "Shining brightly every day because of romance / a man who's only shy in front of women / passionate and sincere romance",
          zh: "因為戀愛而每天閃閃發光/只有在女性面前會害羞的男性/熱情且誠實的戀情",
        },
        reversed: {
          en: "Development too forced / relationship carries risk / a forceful and oppressive person / domestic violence / one-night stand",
          zh: "發展過於勉強/關係有風險/強硬且有壓迫感的人/家暴/一夜情",
        },
      },
      work: {
        upright: {
          en: "Investing in new business / opening new markets / independent entrepreneurship / exemplary boss / project",
          zh: "投資新生意/開拓新事業/獨立創業/模範上司/企劃案",
        },
        reversed: {
          en: "High risk and low return / a demanding person who makes others shrink back / dictatorial boss / demanding customer",
          zh: "高風險＆低報酬/令周遭畏縮的任性人物/獨裁上司/奧客",
        },
      },
      interpersonal: {
        upright: {
          en: "Mutually offering ideas or hints / mutually encouraging motivation / reliable person / sensible person",
          zh: "互相提點子或提示/互相激勵幹勁/可靠的人/有常識的人",
        },
        reversed: {
          en: "Relationship lacking real depth / unstable relationship / hot-tempered and prone to sudden outbursts",
          zh: "交情不到一定以上的深度/關係不穩定/脾氣暴躁，會突然爆發的人",
        },
      },
      others: {
        upright: {
          en: "Liked by anyone / receiving stimulation / full of energy / upright / honest / advisor",
          zh: "受任何人喜愛/受到刺激/充滿能量/正直/誠實/顧問",
        },
        reversed: {
          en: "Treated cautiously by everyone / perverse / stern toward others / stubborn / inflexible / stingy person",
          zh: "被任何人小心翼翼地對待/乖僻/對他人嚴厲/剛愎自用/頑固/小氣的人",
        },
      },
    },
  },
];