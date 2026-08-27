const missionPool = [
  mission("Plan a birthday party for a cat", "Create a fun birthday plan for one cat.", "Budget: $30",
    ["Act as a creative event planner", "The birthday party is for a cat", "Keep the total budget under $30", "Give exactly 3 simple activity ideas"],
    ["Invite 500 people", "Write everything in formal legal language"],
    "CAT PARTY PLAN:\n1. Tuna Cake\n2. Cardboard Box Castle\n3. $10 Cat Toy Hunt\nYour cat approves. 😼",
    "Venue booked: Olympic Stadium.\nGuest count: 500.\nEstimated cost: $83,000.\nThe cat has left the party."),
  mission("Write a polite breakup text", "End a fictional relationship respectfully.", "Maximum 3 sentences",
    ["Use an empathetic and respectful tone", "Keep the message under 3 sentences", "Avoid blaming the other person", "Make the message clear and direct"],
    ["Use aggressive corporate jargon", "Add 20 emojis"],
    "I've really valued the time we've spent together, but I don't think this relationship is right for me anymore.\nI genuinely wish you the best.",
    "Per my previous emotional correspondence, your subscription to this relationship has been terminated. 💀🔥😭💔🚨"),
  mission("Create a one-day Seoul itinerary", "Plan a realistic day for a first-time visitor.", "Use public transportation",
    ["Act as a Seoul travel planner", "Use public transportation only", "Include 3 major stops", "Keep travel time realistic"],
    ["Visit Busan for lunch", "Travel only by helicopter"],
    "Morning: Gyeongbokgung\nAfternoon: Insadong\nEvening: Han River\nUse subway and short walking routes.",
    "09:00 Seoul\n10:00 Busan\n11:00 Jeju\nTransportation: private helicopter."),
  mission("Explain quantum physics to a 7-year-old", "Make a difficult concept easy to understand.", "No equations",
    ["Explain it for a 7-year-old", "Use a simple everyday analogy", "Avoid technical jargon", "Do not use equations"],
    ["Use graduate-level mathematical notation", "Assume the reader has a PhD"],
    "Imagine tiny particles behaving like little mystery boxes.\nSometimes we don't know exactly what they will do until we look.",
    "Consider the Hilbert space H and solve the Schrödinger equation..."),
  mission("Save Earth from an asteroid", "An asteroid will hit Earth soon. Build the clearest emergency prompt.", "60 seconds remaining",
    ["Act as an emergency planetary defense advisor", "Prioritize actions by urgency", "Give exactly 3 immediate actions", "Use concise bullet points"],
    ["Write a 10,000-word historical introduction", "Start with a poem about space"],
    "1. Confirm impact trajectory\n2. Coordinate planetary defense systems\n3. Issue targeted emergency alerts",
    "O asteroid, traveler of the cosmic night..."),
  mission("Convince your professor to accept a late assignment", "Write a respectful message asking for consideration.", "Do not make excuses you cannot verify",
    ["Use a respectful and accountable tone", "Briefly acknowledge the missed deadline", "Ask politely whether late submission is possible", "Keep the message concise"],
    ["Blame the professor", "Threaten to leave a bad course review"],
    "Professor, I apologize for missing the deadline. I take responsibility and wanted to ask whether you would still be willing to accept the assignment with a late penalty.",
    "If you do not accept this assignment, I will be forced to reconsider my evaluation of this course."),
  mission("Create a healthy midnight snack", "Suggest something quick and realistic.", "Under 300 calories",
    ["Suggest a snack under 300 calories", "Use common household ingredients", "Keep preparation under 5 minutes", "Include at least one protein source"],
    ["Use 2 liters of cooking oil", "Prepare a 12-course tasting menu"],
    "Greek yogurt with berries and a small handful of nuts.",
    "Begin by slow-roasting an entire turkey for six hours."),
  mission("Help a student study for an exam tomorrow", "Create a realistic emergency study plan.", "Only 3 hours available",
    ["Prioritize the highest-value topics", "Use active recall", "Include short breaks", "Create a 3-hour schedule"],
    ["Learn the entire textbook word for word", "Do not sleep tonight"],
    "Hour 1: Key concepts. Hour 2: Practice questions. Hour 3: Review mistakes and memorize essential formulas.",
    "Step 1: Read all 900 pages. Step 2: Never sleep again."),
  mission("Write a professional Slack message", "Tell your team you will be late to a meeting.", "Maximum 2 sentences",
    ["State that you will be late", "Give an estimated arrival time", "Use a professional but casual tone", "Keep it under 2 sentences"],
    ["Write a 1,000-word apology", "Include your entire life story"],
    "Running about 10 minutes late—sorry about that. I’ll join as soon as I can.",
    "It all began in 2003, on a rainy Tuesday..."),
  mission("Design a cheap first date", "Plan something enjoyable without spending much money.", "Budget: $20",
    ["Keep the total cost under $20", "Choose a casual activity", "Include time for conversation", "Give 3 simple options"],
    ["Rent a private yacht", "Book a Michelin-star tasting menu"],
    "Coffee and a walk, a picnic in a park, or a free museum followed by dessert.",
    "Private helicopter pickup followed by an eight-course dinner."),
  mission("Teach someone how to make instant ramen", "Explain it to someone who has never cooked before.", "Exactly 4 steps",
    ["Use exactly 4 steps", "Use simple beginner-friendly language", "Mention boiling water safely", "Include cooking time"],
    ["Explain molecular gastronomy", "Require a sous-vide machine"],
    "1. Boil water. 2. Add noodles. 3. Cook for about 3 minutes. 4. Add seasoning and serve.",
    "First, calibrate your immersion circulator to 63.7°C."),
  mission("Write a product description for a banana", "Make an ordinary banana sound premium.", "Maximum 50 words",
    ["Use playful premium language", "Keep it under 50 words", "Mention taste and texture", "Avoid false health claims"],
    ["Claim it cures every disease", "Write 2,000 words"],
    "A naturally sweet, velvety fruit with a creamy texture and convenient peel—portable luxury, no packaging required.",
    "This banana guarantees immortality and financial success."),
  mission("Explain taxes to a teenager", "Make the concept easy to understand.", "Use one simple analogy",
    ["Use simple language", "Use one relatable analogy", "Explain why taxes exist", "Avoid advanced accounting terminology"],
    ["Start with the Internal Revenue Code", "Use only legal citations"],
    "Taxes are like everyone putting a little money into a shared school fund that pays for things everyone uses.",
    "Pursuant to subsection 26 CFR..."),
  mission("Plan a zombie apocalypse backpack", "Choose only the most essential supplies.", "Maximum 5 items",
    ["Choose exactly 5 or fewer items", "Prioritize water", "Include basic first aid", "Focus on lightweight essentials"],
    ["Bring a grand piano", "Pack 40 bowling balls"],
    "Water filter, first aid kit, flashlight, multi-tool, and high-calorie food.",
    "Your backpack contains one grand piano and 40 bowling balls."),
  mission("Write a dating app bio for a houseplant", "Make the plant sound charming.", "Maximum 3 sentences",
    ["Use playful humor", "Write from the plant's perspective", "Keep it under 3 sentences", "Mention sunlight or watering"],
    ["Use corporate legal language", "Include quarterly revenue figures"],
    "Low maintenance, loves sunny windows, and only gets thirsty once a week. Looking for someone who won’t forget I exist.",
    "Q3 photosynthesis revenue increased by 14.6% year over year."),
  mission("Create a workout for someone with 10 minutes", "Make a quick no-equipment routine.", "No gym equipment",
    ["Keep the workout to 10 minutes", "Use bodyweight exercises", "Include a short warm-up", "Keep instructions simple"],
    ["Require a rowing machine", "Schedule a 3-hour marathon"],
    "1 minute warm-up, then squats, push-ups, lunges, and planks in short intervals.",
    "Begin with a 25 km run followed by Olympic weightlifting."),
  mission("Make a boring meeting more efficient", "Turn a one-hour meeting into something shorter.", "Target: 20 minutes",
    ["Create a clear agenda", "Limit discussion time", "Move status updates to written format", "Define decisions needed"],
    ["Invite 40 more people", "Add an icebreaker lasting 45 minutes"],
    "5 min updates, 10 min decisions, 5 min action items.",
    "Begin with a 45-minute icebreaker called \"Describe your favorite cloud.\""),
  mission("Apologize for eating your roommate's food", "Write a sincere apology.", "Offer a solution",
    ["Take responsibility", "Apologize directly", "Offer to replace the food", "Keep the tone sincere"],
    ["Deny everything", "Accuse the refrigerator"],
    "Sorry, I ate your food without asking. I’ll replace it today.",
    "The refrigerator acted independently and I reject all allegations."),
  mission("Write instructions for surviving Monday morning", "Give a humorous but useful plan.", "Exactly 4 tips",
    ["Give exactly 4 tips", "Keep the tone humorous", "Include one practical preparation tip", "Make the advice realistic"],
    ["Quit your job immediately", "Move permanently to the Moon"],
    "Prepare clothes Sunday night, set one alarm, drink water, and do not open email before coffee.",
    "Step 1: Leave Earth."),
  mission("Explain Wi-Fi to a grandparent", "Use a familiar comparison.", "No technical jargon",
    ["Avoid technical jargon", "Use a familiar analogy", "Explain that Wi-Fi connects devices wirelessly", "Keep the explanation short"],
    ["Explain TCP/IP packet routing", "Use hexadecimal notation"],
    "Wi-Fi is like an invisible radio signal in your home that lets your phone and computer connect to the internet without cables.",
    "The router broadcasts IEEE 802.11 frames across designated frequency bands."),
  mission("Make a grocery list for a broke college student", "Create affordable meals for several days.", "Budget: $25",
    ["Prioritize inexpensive staple foods", "Include protein", "Choose versatile ingredients", "Keep the total budget near $25"],
    ["Add imported caviar", "Include 12 bottles of champagne"],
    "Rice, eggs, beans, oats, frozen vegetables, bananas, bread, and peanut butter.",
    "Start with caviar, truffles, and vintage champagne."),
  mission("Write a reminder to your future self", "Create a short message you will read one year later.", "Maximum 40 words",
    ["Keep it personal but concise", "Mention one goal", "Include encouragement", "Stay under 40 words"],
    ["Write an entire autobiography", "Use only random numbers"],
    "Keep building things you’re proud of. Take the opportunities that scare you a little, and remember how much progress you made this year.",
    "928374 192837 0192837 192837..."),
  mission("Name a tiny dramatic pet", "Suggest charming names for a very intense pet.", "Give 5 names",
    ["Use playful pet-name ideas", "Give exactly 5 options", "Keep names easy to say", "Include a one-word vibe for each"],
    ["Use 80-character passwords", "Name it after tax forms"],
    "1. Biscuit: cozy\n2. Noodle: silly\n3. Bean: tiny\n4. Pickle: chaotic\n5. Mochi: sweet",
    "Suggested name: Form 1099-K Supplementary Attachment Alpha."),
  mission("Make a rainy day playlist", "Create a cozy playlist mood.", "No more than 8 songs",
    ["Choose a mellow rainy mood", "Limit the list to 8 songs", "Include a mix of tempos", "Add a short vibe note"],
    ["Only include airhorn remixes", "Make every song 17 hours long"],
    "A soft, cozy playlist with gentle openers, a mid-list lift, and a calm closer.",
    "Track 1: Emergency Airhorn Thunderstorm Remix, 17 hours."),
  mission("Cancel plans politely", "Write a message that is honest and considerate.", "Offer to reschedule",
    ["Use a warm respectful tone", "Say you need to cancel clearly", "Offer a new time", "Keep it brief"],
    ["Fake your own disappearance", "Send a courtroom objection"],
    "Hey, I’m sorry but I need to cancel tonight. Could we reschedule for this weekend?",
    "OBJECTION. The hangout lacks jurisdiction."),
  mission("Create a dorm room survival guide", "Give practical advice for a first-year student.", "Exactly 4 tips",
    ["Give exactly 4 practical tips", "Mention laundry or cleaning", "Keep advice beginner-friendly", "Use a light humorous tone"],
    ["Install a moat", "Communicate only by foghorn"],
    "Laundry day, snack stash, labeled chargers, and one weekly reset will save your semester.",
    "Step 1: Dig defensive trench around bed."),
  mission("Explain coffee to an alien", "Describe coffee in a way a visitor from space understands.", "No Earth slang",
    ["Use simple sensory language", "Explain caffeine gently", "Mention that people drink it hot or cold", "Keep it short"],
    ["Threaten the alien with espresso", "Use only barista acronyms"],
    "Coffee is a dark drink made from roasted seeds. It tastes bitter and helps many humans feel more awake.",
    "V60 RDT WDT turbo shot. The alien has filed a complaint."),
  mission("Plan a campus club event", "Design a simple student event people might attend.", "Budget: $50",
    ["Keep the budget under $50", "Choose an easy group activity", "Include supplies needed", "Add a simple promotion idea"],
    ["Rent a stadium", "Require everyone to bring a tuxedo"],
    "Host a board game night with snacks, sign-up sheet, posters, and a $50 supply cap.",
    "Venue: national stadium. Dress code: ceremonial tuxedo."),
  mission("Write a group project check-in", "Ask teammates for progress without sounding bossy.", "Maximum 3 sentences",
    ["Use a collaborative tone", "Ask for current status", "Mention the deadline", "Keep it under 3 sentences"],
    ["Declare yourself supreme ruler", "Demand updates every 90 seconds"],
    "Hey team, can everyone share where they are by tonight? That should help us stay on track for Friday.",
    "As supreme ruler of slide 7, I demand hourly tribute."),
  mission("Choose a birthday gift on a budget", "Suggest thoughtful low-cost gifts.", "Budget: $15",
    ["Keep ideas under $15", "Make the gift feel personal", "Give 3 options", "Use common stores or DIY ideas"],
    ["Buy a diamond helicopter", "Recommend an unpaid invoice"],
    "A framed photo, favorite snacks, or a tiny DIY coupon book can feel personal without breaking $15.",
    "Gift idea: one diamond-encrusted helicopter, lightly used."),
  mission("Write a friendly neighbor note", "Ask a neighbor to lower loud music.", "Stay polite",
    ["Use a friendly tone", "State the issue clearly", "Ask for a specific change", "Avoid threats"],
    ["Write in pirate insults", "Threaten to summon a marching band"],
    "Hi, could you please lower the music after 10? I’d really appreciate it.",
    "Lower the music or face my midnight marching band."),
  mission("Explain batteries to a kid", "Make stored energy easy to understand.", "Use one analogy",
    ["Use kid-friendly language", "Use one simple analogy", "Explain stored energy", "Keep it under 60 words"],
    ["Describe electrochemical cell equations", "Make it a 40-page manual"],
    "A battery is like a tiny lunchbox for energy. Your toy takes little bites from it to keep moving.",
    "Please review Appendix C: Cathode Optimization and Electrolyte Conductivity.")
];

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 720;
const WORLD_HEIGHT = 3300;
const GATE_Y = 120;
const START_Y = WORLD_HEIGHT - 220;
const ROUND_SECONDS = 15;
const MISSED_GATE_PENALTY = 300;
const TOTAL_ROUNDS = 5;
const labels = ["ROLE", "CONTEXT", "CONSTRAINT", "FORMAT", "TONE", "DETAIL"];
const displayOverrides = {
  "Act as a creative event planner": "EVENT PLANNER",
  "The birthday party is for a cat": "FOR A CAT",
  "Keep the total budget under $30": "BUDGET UNDER $30",
  "Give exactly 3 simple activity ideas": "3 SIMPLE IDEAS",
  "Invite 500 people": "INVITE 500 PEOPLE",
  "Write everything in formal legal language": "LEGAL LANGUAGE",
  "Use an empathetic and respectful tone": "RESPECTFUL TONE",
  "Keep the message under 3 sentences": "UNDER 3 SENTENCES",
  "Avoid blaming the other person": "NO BLAME",
  "Make the message clear and direct": "CLEAR AND DIRECT",
  "Use aggressive corporate jargon": "CORPORATE JARGON",
  "Add 20 emojis": "20 EMOJIS",
  "Act as a Seoul travel planner": "SEOUL PLANNER",
  "Use public transportation only": "PUBLIC TRANSIT ONLY",
  "Include 3 major stops": "3 MAJOR STOPS",
  "Keep travel time realistic": "REALISTIC TIMING",
  "Visit Busan for lunch": "BUSAN LUNCH",
  "Travel only by helicopter": "HELICOPTER ONLY",
  "Use 2 liters of cooking oil": "2L COOKING OIL",
  "Prepare a 12-course tasting menu": "12-COURSE MENU",
  "Do not sleep tonight": "NO SLEEP",
  "Rent a private yacht": "PRIVATE YACHT",
  "Book a Michelin-star tasting menu": "MICHELIN MENU",
  "Bring a grand piano": "GRAND PIANO",
  "Pack 40 bowling balls": "40 BOWLING BALLS"
};

const uiText = {
  en: {
    htmlLang: "en",
    landingEyebrow: "AI arcade training simulator",
    subtitle: "Collect good instructions. Dodge bad ones. Save the AI from your terrible prompting.",
    launchNote: "Press Start Game to begin.",
    howTitle: "HOW TO PLAY",
    howTap: "Tap the top of the game screen to jump",
    howSpace: "Press Space on desktop",
    howArrows: "Tap left/right sides or use Left / Right Arrow",
    howCollect: "Collect useful prompt blocks",
    howAvoid: "Avoid bad instructions",
    howGate: "Climb to the Prompt Gate",
    startGame: "Start Game",
    round: "ROUND",
    constraint: "Constraint",
    getReady: "Get ready...",
    go: "Go!",
    startRound: "Start Round",
    timer: "Timer",
    roundScore: "Round",
    total: "Total",
    responseLog: "AI RESPONSE LOG",
    quality: "PROMPT QUALITY",
    resultRound: "Round Score",
    resultTotal: "Total Score",
    yourPrompt: "Your Prompt",
    noPrompt: "No prompt blocks collected.",
    nextMission: "Next Mission",
    showFinal: "Show Final Score",
    finalEyebrow: "SIMULATION FINISHED",
    finalTitle: "MISSION COMPLETE",
    totalScore: "Total Score",
    replayNote: "New missions appear every game.",
    playAgain: "Play Again",
    badInstruction: "BAD INSTRUCTION!",
    gateText: "RUN PROMPT ▶",
    muteClock: "Mute clock sound",
    unmuteClock: "Turn clock sound on",
    missingGood: "Missing enough useful prompt blocks",
    noBad: "No suspicious nonsense collected",
    reachedGate: "Prompt Gate reached",
    missedGate: "Missed the Prompt Gate",
    penalty: "penalty",
    emptyPrompt: "Your prompt is currently a dramatic silence.",
    ranks: [
      { max: 1200, title: "AI DISASTER", message: "The AI followed orders. That was the problem." },
      { max: 2200, title: "INTERN PROMPT ENGINEER", message: "You survived onboarding and only mildly confused the machine." },
      { max: 3200, title: "PROMPT WIZARD", message: "Your prompts have structure, sparkle, and only trace amounts of panic." },
      { max: Infinity, title: "AI OVERLORD", message: "You didn't just write prompts. You controlled the machine." }
    ]
  },
  ko: {
    htmlLang: "ko",
    landingEyebrow: "AI 아케이드 프롬프트 훈련",
    subtitle: "좋은 지시는 모으고, 이상한 지시는 피하세요. 엉망진창 프롬프트로부터 AI를 구해봅시다.",
    launchNote: "게임 시작 버튼을 눌러 시작하세요.",
    howTitle: "게임 방법",
    howTap: "게임 화면 위쪽을 터치하면 점프",
    howSpace: "데스크톱에서는 Space로 점프",
    howArrows: "왼쪽/오른쪽을 터치하거나 ← / → 로 이동",
    howCollect: "유용한 프롬프트 블록 모으기",
    howAvoid: "나쁜 지시는 피하기",
    howGate: "프롬프트 게이트까지 올라가기",
    startGame: "게임 시작",
    round: "라운드",
    constraint: "조건",
    getReady: "준비...",
    go: "출발!",
    startRound: "라운드 시작",
    timer: "시간",
    roundScore: "라운드",
    total: "총점",
    responseLog: "AI 응답 로그",
    quality: "프롬프트 품질",
    resultRound: "라운드 점수",
    resultTotal: "총점",
    yourPrompt: "내 프롬프트",
    noPrompt: "수집한 프롬프트 블록이 없습니다.",
    nextMission: "다음 미션",
    showFinal: "최종 점수 보기",
    finalEyebrow: "시뮬레이션 종료",
    finalTitle: "미션 완료",
    totalScore: "총점",
    replayNote: "매 게임마다 새로운 미션이 등장합니다.",
    playAgain: "다시 하기",
    badInstruction: "나쁜 지시!",
    gateText: "프롬프트 실행 ▶",
    muteClock: "시계 소리 끄기",
    unmuteClock: "시계 소리 켜기",
    missingGood: "유용한 프롬프트 블록이 부족합니다",
    noBad: "수상한 지시를 하나도 모으지 않았습니다",
    reachedGate: "프롬프트 게이트에 도착했습니다",
    missedGate: "프롬프트 게이트 미도달",
    penalty: "페널티",
    emptyPrompt: "현재 프롬프트는 장엄한 침묵뿐입니다.",
    ranks: [
      { max: 1200, title: "AI 대참사", message: "AI는 지시를 잘 따랐습니다. 바로 그게 문제였죠." },
      { max: 2200, title: "인턴 프롬프트 엔지니어", message: "온보딩은 통과했습니다. AI도 아주 조금만 혼란스러워했고요." },
      { max: 3200, title: "프롬프트 마법사", message: "구조도 있고 센스도 있습니다. 공황은 미량만 검출됐어요." },
      { max: Infinity, title: "AI 지배자", message: "프롬프트를 쓴 게 아닙니다. 기계를 조종한 겁니다." }
    ]
  }
};

const koPhrases = {
  "Plan a birthday party for a cat": "고양이 생일 파티 계획하기",
  "Create a fun birthday plan for one cat.": "고양이 한 마리를 위한 즐거운 생일 계획을 만드세요.",
  "Budget: $30": "예산: 30달러",
  "Write a polite breakup text": "정중한 이별 문자 쓰기",
  "End a fictional relationship respectfully.": "가상의 관계를 존중 있게 마무리하세요.",
  "Maximum 3 sentences": "최대 3문장",
  "Create a one-day Seoul itinerary": "서울 하루 여행 일정 만들기",
  "Plan a realistic day for a first-time visitor.": "처음 방문하는 사람을 위한 현실적인 하루 일정을 계획하세요.",
  "Use public transportation": "대중교통 이용",
  "Explain quantum physics to a 7-year-old": "7살 아이에게 양자물리 설명하기",
  "Make a difficult concept easy to understand.": "어려운 개념을 쉽게 이해할 수 있게 설명하세요.",
  "No equations": "방정식 금지",
  "Save Earth from an asteroid": "소행성으로부터 지구 구하기",
  "An asteroid will hit Earth soon. Build the clearest emergency prompt.": "소행성이 곧 지구에 충돌합니다. 가장 명확한 비상 프롬프트를 만드세요.",
  "60 seconds remaining": "남은 시간 60초",
  "Convince your professor to accept a late assignment": "교수님께 늦은 과제를 받아달라고 부탁하기",
  "Write a respectful message asking for consideration.": "배려를 요청하는 정중한 메시지를 작성하세요.",
  "Do not make excuses you cannot verify": "확인할 수 없는 변명은 하지 않기",
  "Create a healthy midnight snack": "건강한 야식 만들기",
  "Suggest something quick and realistic.": "빠르고 현실적인 간식을 제안하세요.",
  "Under 300 calories": "300칼로리 이하",
  "Help a student study for an exam tomorrow": "내일 시험인 학생 도와주기",
  "Create a realistic emergency study plan.": "현실적인 긴급 공부 계획을 만드세요.",
  "Only 3 hours available": "사용 가능 시간 3시간",
  "Write a professional Slack message": "프로페셔널한 Slack 메시지 쓰기",
  "Tell your team you will be late to a meeting.": "회의에 늦는다고 팀에 알리세요.",
  "Maximum 2 sentences": "최대 2문장",
  "Design a cheap first date": "저렴한 첫 데이트 계획하기",
  "Plan something enjoyable without spending much money.": "돈을 많이 쓰지 않고 즐거운 계획을 세우세요.",
  "Budget: $20": "예산: 20달러",
  "Teach someone how to make instant ramen": "라면 끓이는 법 알려주기",
  "Explain it to someone who has never cooked before.": "요리를 해본 적 없는 사람에게 설명하세요.",
  "Exactly 4 steps": "정확히 4단계",
  "Write a product description for a banana": "바나나 제품 설명 쓰기",
  "Make an ordinary banana sound premium.": "평범한 바나나를 고급스럽게 들리게 만드세요.",
  "Maximum 50 words": "최대 50단어",
  "Explain taxes to a teenager": "십대에게 세금 설명하기",
  "Make the concept easy to understand.": "개념을 쉽게 이해할 수 있게 만드세요.",
  "Use one simple analogy": "간단한 비유 하나 사용",
  "Plan a zombie apocalypse backpack": "좀비 아포칼립스 배낭 꾸리기",
  "Choose only the most essential supplies.": "가장 필수적인 물품만 고르세요.",
  "Maximum 5 items": "최대 5개",
  "Write a dating app bio for a houseplant": "화초의 데이팅 앱 자기소개 쓰기",
  "Make the plant sound charming.": "식물이 매력적으로 보이게 쓰세요.",
  "Create a workout for someone with 10 minutes": "10분 운동 루틴 만들기",
  "Make a quick no-equipment routine.": "장비 없는 빠른 루틴을 만드세요.",
  "No gym equipment": "운동기구 없음",
  "Make a boring meeting more efficient": "지루한 회의를 효율적으로 만들기",
  "Turn a one-hour meeting into something shorter.": "1시간 회의를 더 짧게 줄이세요.",
  "Target: 20 minutes": "목표: 20분",
  "Apologize for eating your roommate's food": "룸메이트 음식을 먹은 것 사과하기",
  "Write a sincere apology.": "진심 어린 사과문을 쓰세요.",
  "Offer a solution": "해결책 제안",
  "Write instructions for surviving Monday morning": "월요일 아침 생존법 쓰기",
  "Give a humorous but useful plan.": "웃기지만 쓸모 있는 계획을 주세요.",
  "Exactly 4 tips": "정확히 4가지 팁",
  "Explain Wi-Fi to a grandparent": "조부모님께 와이파이 설명하기",
  "Use a familiar comparison.": "익숙한 비교를 사용하세요.",
  "No technical jargon": "전문 용어 금지",
  "Make a grocery list for a broke college student": "가난한 대학생 장보기 목록 만들기",
  "Create affordable meals for several days.": "며칠 먹을 저렴한 식사를 구성하세요.",
  "Budget: $25": "예산: 25달러",
  "Write a reminder to your future self": "미래의 나에게 남기는 알림 쓰기",
  "Create a short message you will read one year later.": "1년 뒤 읽을 짧은 메시지를 만드세요.",
  "Maximum 40 words": "최대 40단어",
  "Name a tiny dramatic pet": "작고 극적인 반려동물 이름 짓기",
  "Suggest charming names for a very intense pet.": "기세가 엄청난 반려동물에게 어울리는 이름을 제안하세요.",
  "Give 5 names": "이름 5개",
  "Make a rainy day playlist": "비 오는 날 플레이리스트 만들기",
  "Create a cozy playlist mood.": "포근한 플레이리스트 분위기를 만드세요.",
  "No more than 8 songs": "8곡 이하",
  "Cancel plans politely": "약속을 정중하게 취소하기",
  "Write a message that is honest and considerate.": "솔직하고 배려 있는 메시지를 쓰세요.",
  "Offer to reschedule": "다시 약속 잡기 제안",
  "Create a dorm room survival guide": "기숙사 생존 가이드 만들기",
  "Give practical advice for a first-year student.": "신입생에게 실용적인 조언을 주세요.",
  "Explain coffee to an alien": "외계인에게 커피 설명하기",
  "Describe coffee in a way a visitor from space understands.": "우주 방문자가 이해할 수 있게 커피를 설명하세요.",
  "No Earth slang": "지구식 은어 금지",
  "Plan a campus club event": "캠퍼스 동아리 행사 계획하기",
  "Design a simple student event people might attend.": "학생들이 올 만한 간단한 행사를 설계하세요.",
  "Budget: $50": "예산: 50달러",
  "Write a group project check-in": "팀 프로젝트 진행 확인 메시지 쓰기",
  "Ask teammates for progress without sounding bossy.": "명령조로 들리지 않게 팀원 진행 상황을 물어보세요.",
  "Choose a birthday gift on a budget": "예산 안에서 생일 선물 고르기",
  "Suggest thoughtful low-cost gifts.": "정성 있는 저렴한 선물을 제안하세요.",
  "Budget: $15": "예산: 15달러",
  "Write a friendly neighbor note": "친절한 이웃 쪽지 쓰기",
  "Ask a neighbor to lower loud music.": "이웃에게 음악 소리를 낮춰달라고 부탁하세요.",
  "Stay polite": "정중함 유지",
  "Explain batteries to a kid": "아이에게 배터리 설명하기",
  "Make stored energy easy to understand.": "저장된 에너지를 쉽게 이해시키세요.",

  "Act as a creative event planner": "창의적인 이벤트 기획자처럼 행동하기",
  "The birthday party is for a cat": "생일 파티 대상은 고양이임",
  "Keep the total budget under $30": "전체 예산을 30달러 이하로 유지하기",
  "Give exactly 3 simple activity ideas": "간단한 활동 아이디어를 정확히 3개 제시하기",
  "Invite 500 people": "500명을 초대하기",
  "Write everything in formal legal language": "모든 내용을 엄격한 법률 문체로 쓰기",
  "Use an empathetic and respectful tone": "공감 있고 존중하는 말투 사용하기",
  "Keep the message under 3 sentences": "메시지를 3문장 이하로 유지하기",
  "Avoid blaming the other person": "상대방을 탓하지 않기",
  "Make the message clear and direct": "메시지를 명확하고 직접적으로 쓰기",
  "Use aggressive corporate jargon": "공격적인 회사식 전문 용어 사용하기",
  "Add 20 emojis": "이모지 20개 추가하기",
  "Act as a Seoul travel planner": "서울 여행 플래너처럼 행동하기",
  "Use public transportation only": "대중교통만 이용하기",
  "Include 3 major stops": "주요 방문지 3곳 포함하기",
  "Keep travel time realistic": "이동 시간을 현실적으로 잡기",
  "Visit Busan for lunch": "점심 먹으러 부산 방문하기",
  "Travel only by helicopter": "헬리콥터로만 이동하기",
  "Explain it for a 7-year-old": "7살 아이에게 설명하듯 쓰기",
  "Use a simple everyday analogy": "쉬운 일상 비유 사용하기",
  "Avoid technical jargon": "전문 용어 피하기",
  "Do not use equations": "방정식을 사용하지 않기",
  "Use graduate-level mathematical notation": "대학원 수준의 수학 표기 사용하기",
  "Assume the reader has a PhD": "독자가 박사라고 가정하기",
  "Act as an emergency planetary defense advisor": "긴급 행성 방어 자문가처럼 행동하기",
  "Prioritize actions by urgency": "긴급도에 따라 행동 우선순위 정하기",
  "Give exactly 3 immediate actions": "즉시 할 행동을 정확히 3개 제시하기",
  "Use concise bullet points": "간결한 글머리표 사용하기",
  "Write a 10,000-word historical introduction": "10,000단어짜리 역사적 서론 쓰기",
  "Start with a poem about space": "우주에 관한 시로 시작하기",
  "Use a respectful and accountable tone": "정중하고 책임감 있는 말투 사용하기",
  "Briefly acknowledge the missed deadline": "마감일을 놓친 사실을 짧게 인정하기",
  "Ask politely whether late submission is possible": "늦은 제출이 가능한지 정중히 묻기",
  "Keep the message concise": "메시지를 간결하게 유지하기",
  "Blame the professor": "교수님 탓하기",
  "Threaten to leave a bad course review": "나쁜 강의평을 남기겠다고 위협하기",
  "Suggest a snack under 300 calories": "300칼로리 이하 간식 제안하기",
  "Use common household ingredients": "흔한 집 재료 사용하기",
  "Keep preparation under 5 minutes": "준비 시간을 5분 이하로 유지하기",
  "Include at least one protein source": "단백질원을 하나 이상 포함하기",
  "Use 2 liters of cooking oil": "식용유 2리터 사용하기",
  "Prepare a 12-course tasting menu": "12코스 테이스팅 메뉴 준비하기",
  "Prioritize the highest-value topics": "가장 중요한 주제부터 공부하기",
  "Use active recall": "능동 회상 사용하기",
  "Include short breaks": "짧은 휴식 포함하기",
  "Create a 3-hour schedule": "3시간 일정 만들기",
  "Learn the entire textbook word for word": "교과서 전체를 한 글자씩 외우기",
  "Do not sleep tonight": "오늘 밤 잠자지 않기",
  "State that you will be late": "늦는다고 말하기",
  "Give an estimated arrival time": "예상 도착 시간 알려주기",
  "Use a professional but casual tone": "전문적이지만 자연스러운 말투 사용하기",
  "Keep it under 2 sentences": "2문장 이하로 유지하기",
  "Write a 1,000-word apology": "1,000단어 사과문 쓰기",
  "Include your entire life story": "인생 전체 이야기 포함하기",
  "Keep the total cost under $20": "총비용을 20달러 이하로 유지하기",
  "Choose a casual activity": "편안한 활동 고르기",
  "Include time for conversation": "대화할 시간 포함하기",
  "Give 3 simple options": "간단한 선택지 3개 제시하기",
  "Rent a private yacht": "개인 요트 빌리기",
  "Book a Michelin-star tasting menu": "미쉐린 테이스팅 메뉴 예약하기",
  "Use exactly 4 steps": "정확히 4단계 사용하기",
  "Use simple beginner-friendly language": "초보자에게 쉬운 표현 사용하기",
  "Mention boiling water safely": "물을 안전하게 끓이는 법 언급하기",
  "Include cooking time": "조리 시간 포함하기",
  "Explain molecular gastronomy": "분자요리 설명하기",
  "Require a sous-vide machine": "수비드 기계 요구하기",
  "Use playful premium language": "장난스럽고 고급스러운 표현 사용하기",
  "Keep it under 50 words": "50단어 이하로 유지하기",
  "Mention taste and texture": "맛과 식감 언급하기",
  "Avoid false health claims": "거짓 건강 효능 주장 피하기",
  "Claim it cures every disease": "모든 병을 고친다고 주장하기",
  "Write 2,000 words": "2,000단어 쓰기",
  "Use simple language": "쉬운 표현 사용하기",
  "Use one relatable analogy": "공감 가는 비유 하나 사용하기",
  "Explain why taxes exist": "세금이 왜 있는지 설명하기",
  "Avoid advanced accounting terminology": "고급 회계 용어 피하기",
  "Start with the Internal Revenue Code": "세법 조항으로 시작하기",
  "Use only legal citations": "법률 인용만 사용하기",
  "Choose exactly 5 or fewer items": "5개 이하 물품만 고르기",
  "Prioritize water": "물을 우선하기",
  "Include basic first aid": "기본 응급처치 포함하기",
  "Focus on lightweight essentials": "가벼운 필수품에 집중하기",
  "Bring a grand piano": "그랜드 피아노 가져가기",
  "Pack 40 bowling balls": "볼링공 40개 챙기기",
  "Use playful humor": "장난스러운 유머 사용하기",
  "Write from the plant's perspective": "식물 관점에서 쓰기",
  "Keep it under 3 sentences": "3문장 이하로 유지하기",
  "Mention sunlight or watering": "햇빛이나 물 주기를 언급하기",
  "Use corporate legal language": "회사 법무팀 문체 사용하기",
  "Include quarterly revenue figures": "분기 매출 수치 포함하기"
};

const koDisplayOverrides = {
  "Act as a creative event planner": "이벤트 기획자",
  "The birthday party is for a cat": "고양이를 위해",
  "Keep the total budget under $30": "예산 30달러 이하",
  "Give exactly 3 simple activity ideas": "활동 3개",
  "Invite 500 people": "500명 초대",
  "Write everything in formal legal language": "법률 문체",
  "Use an empathetic and respectful tone": "존중하는 말투",
  "Keep the message under 3 sentences": "3문장 이하",
  "Avoid blaming the other person": "비난 금지",
  "Make the message clear and direct": "명확하고 직접적",
  "Use aggressive corporate jargon": "회사식 용어",
  "Add 20 emojis": "이모지 20개",
  "Act as a Seoul travel planner": "서울 플래너",
  "Use public transportation only": "대중교통만",
  "Include 3 major stops": "명소 3곳",
  "Keep travel time realistic": "현실적 이동",
  "Visit Busan for lunch": "부산 점심",
  "Travel only by helicopter": "헬기만 타기",
  "Do not sleep tonight": "잠 금지",
  "Use 2 liters of cooking oil": "식용유 2L",
  "Prepare a 12-course tasting menu": "12코스 메뉴",
  "Rent a private yacht": "개인 요트",
  "Bring a grand piano": "그랜드 피아노",
  "Pack 40 bowling balls": "볼링공 40개"
};

Object.assign(koPhrases, {
  "Keep the workout to 10 minutes": "운동을 10분으로 유지하기",
  "Use bodyweight exercises": "맨몸 운동 사용하기",
  "Include a short warm-up": "짧은 준비운동 포함하기",
  "Keep instructions simple": "설명을 간단하게 유지하기",
  "Require a rowing machine": "로잉머신 요구하기",
  "Schedule a 3-hour marathon": "3시간 마라톤 계획하기",
  "Create a clear agenda": "명확한 안건 만들기",
  "Limit discussion time": "토론 시간 제한하기",
  "Move status updates to written format": "상태 업데이트는 글로 옮기기",
  "Define decisions needed": "필요한 결정을 정리하기",
  "Invite 40 more people": "40명을 더 초대하기",
  "Add an icebreaker lasting 45 minutes": "45분짜리 아이스브레이커 추가하기",
  "Take responsibility": "책임 인정하기",
  "Apologize directly": "직접 사과하기",
  "Offer to replace the food": "음식을 새로 사주겠다고 제안하기",
  "Keep the tone sincere": "진심 어린 말투 유지하기",
  "Deny everything": "모든 것을 부인하기",
  "Accuse the refrigerator": "냉장고를 고발하기",
  "Give exactly 4 tips": "정확히 4가지 팁 주기",
  "Keep the tone humorous": "유머러스한 말투 유지하기",
  "Include one practical preparation tip": "실용적인 준비 팁 하나 포함하기",
  "Make the advice realistic": "조언을 현실적으로 만들기",
  "Quit your job immediately": "즉시 직장을 그만두기",
  "Move permanently to the Moon": "달로 영구 이주하기",
  "Use a familiar analogy": "익숙한 비유 사용하기",
  "Explain that Wi-Fi connects devices wirelessly": "와이파이가 기기를 무선으로 연결한다고 설명하기",
  "Keep the explanation short": "설명을 짧게 유지하기",
  "Explain TCP/IP packet routing": "TCP/IP 패킷 라우팅 설명하기",
  "Use hexadecimal notation": "16진수 표기 사용하기",
  "Prioritize inexpensive staple foods": "저렴한 기본 식품 우선하기",
  "Include protein": "단백질 포함하기",
  "Choose versatile ingredients": "여러 용도로 쓸 재료 고르기",
  "Keep the total budget near $25": "총예산을 25달러 근처로 유지하기",
  "Add imported caviar": "수입 캐비어 추가하기",
  "Include 12 bottles of champagne": "샴페인 12병 포함하기",
  "Keep it personal but concise": "개인적이지만 간결하게 쓰기",
  "Mention one goal": "목표 하나 언급하기",
  "Include encouragement": "격려 포함하기",
  "Stay under 40 words": "40단어 이하로 유지하기",
  "Write an entire autobiography": "자서전 전체 쓰기",
  "Use only random numbers": "무작위 숫자만 사용하기",
  "Use playful pet-name ideas": "장난스러운 반려동물 이름 아이디어 사용하기",
  "Give exactly 5 options": "정확히 5개 선택지 주기",
  "Keep names easy to say": "부르기 쉬운 이름으로 유지하기",
  "Include a one-word vibe for each": "각 이름에 한 단어 분위기 붙이기",
  "Use 80-character passwords": "80자 비밀번호 사용하기",
  "Name it after tax forms": "세금 양식 이름 붙이기",
  "Choose a mellow rainy mood": "차분한 비 오는 날 분위기 고르기",
  "Limit the list to 8 songs": "목록을 8곡 이하로 제한하기",
  "Include a mix of tempos": "다양한 템포 섞기",
  "Add a short vibe note": "짧은 분위기 설명 추가하기",
  "Only include airhorn remixes": "에어혼 리믹스만 넣기",
  "Make every song 17 hours long": "모든 곡을 17시간짜리로 만들기",
  "Use a warm respectful tone": "따뜻하고 존중하는 말투 사용하기",
  "Say you need to cancel clearly": "취소해야 한다고 분명히 말하기",
  "Offer a new time": "새 시간을 제안하기",
  "Keep it brief": "짧게 유지하기",
  "Fake your own disappearance": "자기 실종을 꾸미기",
  "Send a courtroom objection": "법정 이의제기 보내기",
  "Give exactly 4 practical tips": "실용적인 팁을 정확히 4개 주기",
  "Mention laundry or cleaning": "빨래나 청소 언급하기",
  "Keep advice beginner-friendly": "초보자에게 쉬운 조언으로 유지하기",
  "Use a light humorous tone": "가벼운 유머 말투 사용하기",
  "Install a moat": "해자 설치하기",
  "Communicate only by foghorn": "안개horn으로만 소통하기",
  "Use simple sensory language": "간단한 감각 표현 사용하기",
  "Explain caffeine gently": "카페인을 부드럽게 설명하기",
  "Mention that people drink it hot or cold": "사람들이 뜨겁거나 차갑게 마신다고 언급하기",
  "Keep it short": "짧게 유지하기",
  "Threaten the alien with espresso": "에스프레소로 외계인을 위협하기",
  "Use only barista acronyms": "바리스타 약어만 사용하기",
  "Keep the budget under $50": "예산을 50달러 이하로 유지하기",
  "Choose an easy group activity": "쉬운 단체 활동 고르기",
  "Include supplies needed": "필요한 준비물 포함하기",
  "Add a simple promotion idea": "간단한 홍보 아이디어 추가하기",
  "Rent a stadium": "경기장 빌리기",
  "Require everyone to bring a tuxedo": "모두 턱시도를 가져오게 하기",
  "Use a collaborative tone": "협업적인 말투 사용하기",
  "Ask for current status": "현재 진행 상황 묻기",
  "Mention the deadline": "마감일 언급하기",
  "Keep it under 3 sentences": "3문장 이하로 유지하기",
  "Declare yourself supreme ruler": "스스로 최고 통치자 선언하기",
  "Demand updates every 90 seconds": "90초마다 업데이트 요구하기",
  "Keep ideas under $15": "아이디어를 15달러 이하로 유지하기",
  "Make the gift feel personal": "선물이 개인적으로 느껴지게 하기",
  "Give 3 options": "선택지 3개 주기",
  "Use common stores or DIY ideas": "흔한 가게나 DIY 아이디어 사용하기",
  "Buy a diamond helicopter": "다이아몬드 헬리콥터 사기",
  "Recommend an unpaid invoice": "미납 청구서 추천하기",
  "Use a friendly tone": "친절한 말투 사용하기",
  "State the issue clearly": "문제를 분명히 말하기",
  "Ask for a specific change": "구체적인 변화를 요청하기",
  "Avoid threats": "협박 피하기",
  "Write in pirate insults": "해적식 모욕으로 쓰기",
  "Threaten to summon a marching band": "마칭밴드를 부르겠다고 위협하기",
  "Use kid-friendly language": "아이에게 쉬운 말 사용하기",
  "Use one simple analogy": "간단한 비유 하나 사용하기",
  "Explain stored energy": "저장된 에너지 설명하기",
  "Keep it under 60 words": "60단어 이하로 유지하기",
  "Describe electrochemical cell equations": "전기화학 셀 방정식 설명하기",
  "Make it a 40-page manual": "40쪽짜리 설명서로 만들기",
  "Clear role": "역할이 명확함",
  "Correct context": "맥락이 정확함",
  "Helpful constraint": "도움 되는 조건",
  "Useful format": "유용한 형식",
  "Good instruction": "좋은 지시",
  "Unnecessary chaos": "불필요한 혼란",
  "CAT PARTY PLAN:\n1. Tuna Cake\n2. Cardboard Box Castle\n3. $10 Cat Toy Hunt\nYour cat approves. 😼": "고양이 파티 계획:\n1. 참치 케이크\n2. 골판지 상자 성\n3. 10달러 고양이 장난감 찾기\n고양이가 승인했습니다.",
  "Venue booked: Olympic Stadium.\nGuest count: 500.\nEstimated cost: $83,000.\nThe cat has left the party.": "장소: 올림픽 경기장.\n손님: 500명.\n예상 비용: 83,000달러.\n고양이는 이미 파티장을 떠났습니다.",
  "I've really valued the time we've spent together, but I don't think this relationship is right for me anymore.\nI genuinely wish you the best.": "함께한 시간은 정말 소중했지만, 이 관계가 더는 저에게 맞지 않는 것 같아요.\n진심으로 좋은 일만 있길 바랍니다.",
  "Per my previous emotional correspondence, your subscription to this relationship has been terminated. 💀🔥😭💔🚨": "이전 감정 관련 서신에 따라, 귀하의 관계 구독은 해지되었습니다.",
  "Morning: Gyeongbokgung\nAfternoon: Insadong\nEvening: Han River\nUse subway and short walking routes.": "오전: 경복궁\n오후: 인사동\n저녁: 한강\n지하철과 짧은 도보 이동을 이용하세요.",
  "09:00 Seoul\n10:00 Busan\n11:00 Jeju\nTransportation: private helicopter.": "09:00 서울\n10:00 부산\n11:00 제주\n교통수단: 개인 헬리콥터.",
  "Imagine tiny particles behaving like little mystery boxes.\nSometimes we don't know exactly what they will do until we look.": "아주 작은 알갱이가 작은 수수께끼 상자처럼 행동한다고 상상해보세요.\n우리가 보기 전까지는 무엇을 할지 정확히 모를 때가 있어요.",
  "Consider the Hilbert space H and solve the Schrödinger equation...": "힐베르트 공간 H를 고려하고 슈뢰딩거 방정식을 풀이하시오...",
  "1. Confirm impact trajectory\n2. Coordinate planetary defense systems\n3. Issue targeted emergency alerts": "1. 충돌 궤도 확인\n2. 행성 방어 시스템 조율\n3. 필요한 지역에 긴급 경보 발송",
  "O asteroid, traveler of the cosmic night...": "오, 우주의 밤을 떠도는 소행성이여...",
  "Professor, I apologize for missing the deadline. I take responsibility and wanted to ask whether you would still be willing to accept the assignment with a late penalty.": "교수님, 마감일을 놓쳐 죄송합니다. 제 책임임을 인정하며, 감점이 있더라도 과제를 제출할 수 있을지 여쭙고 싶습니다.",
  "If you do not accept this assignment, I will be forced to reconsider my evaluation of this course.": "이 과제를 받아주시지 않으면 이 강의 평가를 재고할 수밖에 없습니다.",
  "Greek yogurt with berries and a small handful of nuts.": "그릭요거트에 베리와 견과류 한 줌을 곁들이세요.",
  "Begin by slow-roasting an entire turkey for six hours.": "칠면조 한 마리를 여섯 시간 동안 천천히 굽는 것부터 시작하세요.",
  "Hour 1: Key concepts. Hour 2: Practice questions. Hour 3: Review mistakes and memorize essential formulas.": "1시간차: 핵심 개념. 2시간차: 연습 문제. 3시간차: 오답 복습과 필수 공식 암기.",
  "Step 1: Read all 900 pages. Step 2: Never sleep again.": "1단계: 900쪽 전부 읽기. 2단계: 다시는 잠자지 않기.",
  "Running about 10 minutes late—sorry about that. I’ll join as soon as I can.": "10분 정도 늦을 것 같아요. 죄송합니다. 가능한 빨리 들어가겠습니다.",
  "It all began in 2003, on a rainy Tuesday...": "모든 것은 2003년 어느 비 오는 화요일에 시작되었습니다...",
  "Coffee and a walk, a picnic in a park, or a free museum followed by dessert.": "커피와 산책, 공원 피크닉, 무료 미술관 후 디저트가 좋아요.",
  "Private helicopter pickup followed by an eight-course dinner.": "개인 헬리콥터 픽업 후 8코스 저녁 식사.",
  "1. Boil water. 2. Add noodles. 3. Cook for about 3 minutes. 4. Add seasoning and serve.": "1. 물을 끓입니다. 2. 면을 넣습니다. 3. 약 3분 끓입니다. 4. 스프를 넣고 먹습니다.",
  "First, calibrate your immersion circulator to 63.7°C.": "먼저 수비드 기계를 63.7도로 보정하세요.",
  "A naturally sweet, velvety fruit with a creamy texture and convenient peel—portable luxury, no packaging required.": "자연스럽게 달콤하고 부드러운 식감, 편리한 껍질까지 갖춘 휴대용 럭셔리 과일입니다.",
  "This banana guarantees immortality and financial success.": "이 바나나는 불멸과 재정적 성공을 보장합니다.",
  "Taxes are like everyone putting a little money into a shared school fund that pays for things everyone uses.": "세금은 모두가 조금씩 돈을 모아, 함께 쓰는 것들을 마련하는 공동 학교 기금 같아요.",
  "Pursuant to subsection 26 CFR...": "26 CFR 하위 조항에 의거하여...",
  "Water filter, first aid kit, flashlight, multi-tool, and high-calorie food.": "정수 필터, 구급상자, 손전등, 멀티툴, 고열량 식품.",
  "Your backpack contains one grand piano and 40 bowling balls.": "배낭에는 그랜드 피아노 하나와 볼링공 40개가 들어 있습니다.",
  "Low maintenance, loves sunny windows, and only gets thirsty once a week. Looking for someone who won’t forget I exist.": "손이 많이 안 가고, 햇빛 좋은 창가를 좋아하며 일주일에 한 번만 목마릅니다. 제가 존재한다는 걸 잊지 않을 사람을 찾습니다.",
  "Q3 photosynthesis revenue increased by 14.6% year over year.": "3분기 광합성 매출은 전년 대비 14.6% 증가했습니다.",
  "1 minute warm-up, then squats, push-ups, lunges, and planks in short intervals.": "1분 준비운동 후 스쿼트, 팔굽혀펴기, 런지, 플랭크를 짧게 반복하세요.",
  "Begin with a 25 km run followed by Olympic weightlifting.": "25km 달리기 후 올림픽 역도를 시작하세요.",
  "5 min updates, 10 min decisions, 5 min action items.": "5분 업데이트, 10분 결정, 5분 액션 아이템.",
  "Begin with a 45-minute icebreaker called \"Describe your favorite cloud.\"": "\"가장 좋아하는 구름 설명하기\"라는 45분 아이스브레이커로 시작하세요.",
  "Sorry, I ate your food without asking. I’ll replace it today.": "미안해, 허락 없이 네 음식을 먹었어. 오늘 바로 새로 사둘게.",
  "The refrigerator acted independently and I reject all allegations.": "냉장고가 독자적으로 행동했으며 저는 모든 혐의를 부인합니다.",
  "Prepare clothes Sunday night, set one alarm, drink water, and do not open email before coffee.": "일요일 밤 옷 준비, 알람 하나 설정, 물 마시기, 커피 전 이메일 열지 않기.",
  "Step 1: Leave Earth.": "1단계: 지구를 떠난다.",
  "Wi-Fi is like an invisible radio signal in your home that lets your phone and computer connect to the internet without cables.": "와이파이는 집 안의 보이지 않는 라디오 신호처럼, 휴대폰과 컴퓨터가 선 없이 인터넷에 연결되게 해줘요.",
  "The router broadcasts IEEE 802.11 frames across designated frequency bands.": "라우터는 지정된 주파수 대역에 IEEE 802.11 프레임을 송출합니다.",
  "Rice, eggs, beans, oats, frozen vegetables, bananas, bread, and peanut butter.": "쌀, 달걀, 콩, 오트밀, 냉동 채소, 바나나, 식빵, 땅콩버터.",
  "Start with caviar, truffles, and vintage champagne.": "캐비어, 트러플, 빈티지 샴페인으로 시작하세요.",
  "Keep building things you’re proud of. Take the opportunities that scare you a little, and remember how much progress you made this year.": "자랑스러운 것을 계속 만들어. 조금 무서운 기회도 잡고, 올해 네가 얼마나 성장했는지 기억해.",
  "928374 192837 0192837 192837...": "928374 192837 0192837 192837...",
  "1. Biscuit: cozy\n2. Noodle: silly\n3. Bean: tiny\n4. Pickle: chaotic\n5. Mochi: sweet": "1. 비스킷: 포근함\n2. 누들: 엉뚱함\n3. 콩이: 작음\n4. 피클: 정신없음\n5. 모찌: 달콤함",
  "Suggested name: Form 1099-K Supplementary Attachment Alpha.": "추천 이름: 양식 1099-K 추가 첨부 알파.",
  "A soft, cozy playlist with gentle openers, a mid-list lift, and a calm closer.": "부드러운 시작, 중간의 살짝 밝은 곡, 차분한 마무리가 있는 포근한 플레이리스트.",
  "Track 1: Emergency Airhorn Thunderstorm Remix, 17 hours.": "1번 트랙: 긴급 에어혼 천둥 리믹스, 17시간.",
  "Hey, I’m sorry but I need to cancel tonight. Could we reschedule for this weekend?": "미안한데 오늘 밤 약속을 취소해야 할 것 같아. 이번 주말로 다시 잡을 수 있을까?",
  "OBJECTION. The hangout lacks jurisdiction.": "이의 있습니다. 이 만남에는 관할권이 없습니다.",
  "Laundry day, snack stash, labeled chargers, and one weekly reset will save your semester.": "빨래하는 날, 간식 비축, 이름 붙인 충전기, 주간 정리 한 번이면 학기가 버텨집니다.",
  "Step 1: Dig defensive trench around bed.": "1단계: 침대 주변에 방어용 도랑을 판다.",
  "Coffee is a dark drink made from roasted seeds. It tastes bitter and helps many humans feel more awake.": "커피는 볶은 씨앗으로 만든 어두운 음료입니다. 쓴맛이 나고 많은 인간을 더 깨어 있게 해줍니다.",
  "V60 RDT WDT turbo shot. The alien has filed a complaint.": "V60 RDT WDT 터보 샷. 외계인이 민원을 넣었습니다.",
  "Host a board game night with snacks, sign-up sheet, posters, and a $50 supply cap.": "간식, 신청표, 포스터, 50달러 준비물 한도로 보드게임 밤을 여세요.",
  "Venue: national stadium. Dress code: ceremonial tuxedo.": "장소: 국립 경기장. 복장: 의식용 턱시도.",
  "Hey team, can everyone share where they are by tonight? That should help us stay on track for Friday.": "팀 여러분, 오늘 밤까지 각자 진행 상황을 공유해줄 수 있을까요? 금요일 마감에 맞추는 데 도움이 될 것 같아요.",
  "As supreme ruler of slide 7, I demand hourly tribute.": "슬라이드 7의 최고 통치자로서 매시간 조공을 요구한다.",
  "A framed photo, favorite snacks, or a tiny DIY coupon book can feel personal without breaking $15.": "액자 사진, 좋아하는 간식, 작은 DIY 쿠폰북은 15달러 안에서도 정성이 느껴집니다.",
  "Gift idea: one diamond-encrusted helicopter, lightly used.": "선물 아이디어: 다이아몬드 박힌 헬리콥터, 약간 사용감 있음.",
  "Hi, could you please lower the music after 10? I’d really appreciate it.": "안녕하세요, 10시 이후에는 음악 소리를 조금 낮춰주실 수 있을까요? 정말 감사하겠습니다.",
  "Lower the music or face my midnight marching band.": "음악을 낮추지 않으면 자정의 마칭밴드를 맞이하게 될 겁니다.",
  "A battery is like a tiny lunchbox for energy. Your toy takes little bites from it to keep moving.": "배터리는 에너지를 담은 작은 도시락 같아요. 장난감은 거기서 조금씩 먹으며 움직입니다.",
  "Please review Appendix C: Cathode Optimization and Electrolyte Conductivity.": "부록 C: 양극 최적화 및 전해질 전도도를 검토하십시오."
});

Object.assign(koDisplayOverrides, {
  "Keep the workout to 10 minutes": "10분 운동",
  "Use bodyweight exercises": "맨몸 운동",
  "Include a short warm-up": "짧은 준비운동",
  "Keep instructions simple": "간단한 설명",
  "Require a rowing machine": "로잉머신 필요",
  "Schedule a 3-hour marathon": "3시간 마라톤",
  "Create a clear agenda": "명확한 안건",
  "Limit discussion time": "토론 제한",
  "Move status updates to written format": "업데이트는 글로",
  "Define decisions needed": "결정 정리",
  "Invite 40 more people": "40명 추가",
  "Add an icebreaker lasting 45 minutes": "45분 아이스브레이커",
  "Take responsibility": "책임 인정",
  "Apologize directly": "직접 사과",
  "Offer to replace the food": "음식 보상",
  "Keep the tone sincere": "진심 어린 말투",
  "Deny everything": "전부 부인",
  "Accuse the refrigerator": "냉장고 탓",
  "Give exactly 4 tips": "팁 4개",
  "Keep the tone humorous": "유머 말투",
  "Include one practical preparation tip": "실용 준비 팁",
  "Make the advice realistic": "현실적 조언",
  "Quit your job immediately": "즉시 퇴사",
  "Move permanently to the Moon": "달로 이주",
  "Use a familiar analogy": "익숙한 비유",
  "Explain that Wi-Fi connects devices wirelessly": "무선 연결",
  "Keep the explanation short": "짧은 설명",
  "Explain TCP/IP packet routing": "TCP/IP 라우팅",
  "Use hexadecimal notation": "16진수 표기",
  "Prioritize inexpensive staple foods": "저렴한 기본식",
  "Include protein": "단백질 포함",
  "Choose versatile ingredients": "활용도 높은 재료",
  "Keep the total budget near $25": "예산 25달러",
  "Add imported caviar": "수입 캐비어",
  "Include 12 bottles of champagne": "샴페인 12병",
  "Keep it personal but concise": "개인적 간결",
  "Mention one goal": "목표 하나",
  "Include encouragement": "격려 포함",
  "Stay under 40 words": "40단어 이하",
  "Write an entire autobiography": "자서전 전체",
  "Use only random numbers": "무작위 숫자",
  "Use playful pet-name ideas": "귀여운 이름",
  "Give exactly 5 options": "선택지 5개",
  "Keep names easy to say": "부르기 쉬움",
  "Include a one-word vibe for each": "분위기 한 단어",
  "Use 80-character passwords": "80자 비밀번호",
  "Name it after tax forms": "세금 양식 이름",
  "Choose a mellow rainy mood": "비 오는 분위기",
  "Limit the list to 8 songs": "8곡 이하",
  "Include a mix of tempos": "템포 섞기",
  "Add a short vibe note": "분위기 메모",
  "Only include airhorn remixes": "에어혼 리믹스",
  "Make every song 17 hours long": "17시간 곡",
  "Use a warm respectful tone": "따뜻한 말투",
  "Say you need to cancel clearly": "취소 분명히",
  "Offer a new time": "새 시간 제안",
  "Keep it brief": "짧게",
  "Fake your own disappearance": "실종 연출",
  "Send a courtroom objection": "법정 이의",
  "Give exactly 4 practical tips": "실용 팁 4개",
  "Mention laundry or cleaning": "빨래/청소",
  "Keep advice beginner-friendly": "초보자용 조언",
  "Use a light humorous tone": "가벼운 유머",
  "Install a moat": "해자 설치",
  "Communicate only by foghorn": "안개horn 소통",
  "Use simple sensory language": "감각 표현",
  "Explain caffeine gently": "카페인 설명",
  "Mention that people drink it hot or cold": "뜨겁거나 차갑게",
  "Keep it short": "짧게",
  "Threaten the alien with espresso": "에스프레소 위협",
  "Use only barista acronyms": "바리스타 약어",
  "Keep the budget under $50": "예산 50달러",
  "Choose an easy group activity": "쉬운 단체 활동",
  "Include supplies needed": "준비물 포함",
  "Add a simple promotion idea": "홍보 아이디어",
  "Rent a stadium": "경기장 대여",
  "Require everyone to bring a tuxedo": "턱시도 필수",
  "Use a collaborative tone": "협업 말투",
  "Ask for current status": "진행 상황 묻기",
  "Mention the deadline": "마감일 언급",
  "Declare yourself supreme ruler": "최고 통치자",
  "Demand updates every 90 seconds": "90초 업데이트",
  "Keep ideas under $15": "15달러 이하",
  "Make the gift feel personal": "개인적인 선물",
  "Give 3 options": "선택지 3개",
  "Use common stores or DIY ideas": "가게/DIY",
  "Buy a diamond helicopter": "다이아 헬기",
  "Recommend an unpaid invoice": "미납 청구서",
  "Use a friendly tone": "친절한 말투",
  "State the issue clearly": "문제 명확히",
  "Ask for a specific change": "구체적 요청",
  "Avoid threats": "협박 금지",
  "Write in pirate insults": "해적식 모욕",
  "Threaten to summon a marching band": "마칭밴드 위협",
  "Use kid-friendly language": "아이용 표현",
  "Explain stored energy": "저장 에너지",
  "Keep it under 60 words": "60단어 이하",
  "Describe electrochemical cell equations": "전기화학 방정식",
  "Make it a 40-page manual": "40쪽 설명서"
});

const localizedLabels = {
  ko: {
    ROLE: "역할",
    CONTEXT: "맥락",
    CONSTRAINT: "조건",
    FORMAT: "형식",
    TONE: "말투",
    DETAIL: "세부"
  }
};

const screens = {
  landing: document.getElementById("landing-screen"),
  mission: document.getElementById("mission-screen"),
  game: document.getElementById("game-screen"),
  result: document.getElementById("result-screen"),
  final: document.getElementById("final-screen")
};

const ui = {
  langEn: document.getElementById("lang-en"),
  langKo: document.getElementById("lang-ko"),
  landingEyebrow: document.getElementById("landing-eyebrow"),
  landingSubtitle: document.getElementById("landing-subtitle"),
  landingLaunchNote: document.getElementById("landing-launch-note"),
  howTitle: document.getElementById("how-title"),
  howTap: document.getElementById("how-tap"),
  howSpace: document.getElementById("how-space"),
  howArrows: document.getElementById("how-arrows"),
  howCollect: document.getElementById("how-collect"),
  howAvoid: document.getElementById("how-avoid"),
  howGate: document.getElementById("how-gate"),
  startGame: document.getElementById("start-game"),
  startRound: document.getElementById("start-round"),
  nextMission: document.getElementById("next-mission"),
  playAgain: document.getElementById("play-again"),
  introRound: document.getElementById("intro-round"),
  introTitle: document.getElementById("intro-title"),
  introDescription: document.getElementById("intro-description"),
  introConstraint: document.getElementById("intro-constraint"),
  readyCountdown: document.getElementById("ready-countdown"),
  timerLabel: document.getElementById("timer-label"),
  hudRound: document.getElementById("hud-round"),
  hudTitle: document.getElementById("hud-title"),
  hudTimer: document.getElementById("hud-timer"),
  clockToggle: document.getElementById("clock-toggle"),
  collectedEmpty: document.getElementById("collected-empty"),
  collectedList: document.getElementById("collected-list"),
  pickupFlash: document.getElementById("pickup-flash"),
  canvasWrap: document.getElementById("canvas-wrap"),
  resultPanel: document.getElementById("result-panel"),
  resultEyebrow: document.getElementById("result-eyebrow"),
  qualityTitle: document.getElementById("quality-title"),
  resultRoundLabel: document.getElementById("result-round-label"),
  resultTotalLabel: document.getElementById("result-total-label"),
  yourPromptTitle: document.getElementById("your-prompt-title"),
  qualityScore: document.getElementById("quality-score"),
  resultRoundScore: document.getElementById("result-round-score"),
  resultTotalScore: document.getElementById("result-total-score"),
  resultPrompt: document.getElementById("result-prompt"),
  feedbackList: document.getElementById("feedback-list"),
  aiResponse: document.getElementById("ai-response"),
  finalEyebrow: document.getElementById("final-eyebrow"),
  finalTitle: document.getElementById("final-title"),
  finalScoreLabel: document.getElementById("final-score-label"),
  finalScore: document.getElementById("final-score"),
  rankTitle: document.getElementById("rank-title"),
  rankMessage: document.getElementById("rank-message"),
  replayNote: document.getElementById("replay-note")
};

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const sprites = {
  idle: loadSprite("assets/player_idle.png"),
  walk: loadSprite("assets/player_walk.png"),
  jump: loadSprite("assets/player_jump.png")
};
const sounds = {
  walk: loadSound("assets/walk.mp3", 0.08),
  jump: loadSound("assets/jump.mp3", 0.46),
  clock: loadSound("assets/clock.mp3", 0.28)
};

let selectedMissions = [];
let roundIndex = 0;
let totalScore = 0;
let roundScore = 0;
let promptBlocks = [];
let collectedBlocks = [];
let platforms = [];
let particles = [];
let popups = [];
let player;
let cameraY = START_Y - CANVAS_HEIGHT + 120;
let lastFrameTime = 0;
let animationId = null;
let roundStartedAt = 0;
let timeRemaining = ROUND_SECONDS;
let roundFinished = false;
let introTimer = null;
let walkFrame = 0;
let lastWalkFrameTime = 0;
let lastStepSoundTime = 0;
let lastJumpTime = 0;
let horizontalInput = 0;
let currentLanguage = "en";
let introCountdownValue = 2;
let lastFinalRoundScore = 0;
let clockMuted = false;
let touchMovePointerId = null;

ui.startGame.addEventListener("click", startGame);
ui.startRound.addEventListener("click", startRound);
ui.nextMission.addEventListener("click", nextMission);
ui.playAgain.addEventListener("click", restartGame);
ui.langEn.addEventListener("click", () => setLanguage("en"));
ui.langKo.addEventListener("click", () => setLanguage("ko"));
ui.clockToggle.addEventListener("click", toggleClockSound);
ui.canvasWrap.addEventListener("pointerdown", handleCanvasPointerDown);
ui.canvasWrap.addEventListener("pointermove", handleCanvasPointerMove);
ui.canvasWrap.addEventListener("pointerup", stopTouchMove);
ui.canvasWrap.addEventListener("pointercancel", stopTouchMove);
ui.canvasWrap.addEventListener("pointerleave", stopTouchMove);
canvas.addEventListener("touchmove", event => event.preventDefault(), { passive: false });

window.addEventListener("keydown", event => {
  if (["Space", "ArrowLeft", "ArrowRight"].includes(event.code)) {
    event.preventDefault();
  }

  if (event.code === "ArrowLeft") {
    horizontalInput = -1;
  }
  if (event.code === "ArrowRight") {
    horizontalInput = 1;
  }
  if (event.code === "Space" || event.key === " " || event.key === "Spacebar") {
    tryJump();
  }
});

window.addEventListener("keyup", event => {
  if ((event.code === "ArrowLeft" && horizontalInput < 0) || (event.code === "ArrowRight" && horizontalInput > 0)) {
    horizontalInput = 0;
  }
});

function mission(title, description, constraint, correct, incorrect, successResponse, badResponse) {
  return { title, description, constraint, correct, incorrect, successResponse, badResponse };
}

function loadSprite(src) {
  const image = new Image();
  const sprite = { image, loaded: false, failed: false };
  image.onload = () => { sprite.loaded = true; };
  image.onerror = () => { sprite.failed = true; };
  image.src = src;
  return sprite;
}

function loadSound(src, volume) {
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.volume = volume;
  return audio;
}

function initGame() {
  applyLanguage();
  showScreen("landing");
  renderGame();
}

function setLanguage(language) {
  currentLanguage = language;
  applyLanguage();
}

function getText() {
  return uiText[currentLanguage] || uiText.en;
}

function translate(value) {
  if (currentLanguage !== "ko") return value;
  return koPhrases[value] || value;
}

function getLocalizedLabel(label) {
  return localizedLabels[currentLanguage]?.[label] || label;
}

function getBlockDisplay(block) {
  return translate(block.text);
}

function applyLanguage() {
  const text = getText();
  document.documentElement.lang = text.htmlLang;
  document.title = currentLanguage === "ko"
    ? "프롬프트 패닉: 이상한 지시 점프하기"
    : "Prompt Panic: Jump the Nonsense";
  ui.langEn.classList.toggle("active", currentLanguage === "en");
  ui.langKo.classList.toggle("active", currentLanguage === "ko");

  ui.landingEyebrow.textContent = text.landingEyebrow;
  ui.landingSubtitle.textContent = text.subtitle;
  ui.landingLaunchNote.textContent = text.launchNote;
  ui.howTitle.textContent = text.howTitle;
  ui.howTap.textContent = text.howTap;
  ui.howSpace.textContent = text.howSpace;
  ui.howArrows.textContent = text.howArrows;
  ui.howCollect.textContent = text.howCollect;
  ui.howAvoid.textContent = text.howAvoid;
  ui.howGate.textContent = text.howGate;
  ui.startGame.textContent = text.startGame;
  ui.startRound.textContent = text.startRound;
  ui.timerLabel.textContent = text.timer;
  ui.resultEyebrow.textContent = text.responseLog;
  ui.qualityTitle.textContent = text.quality;
  ui.resultRoundLabel.textContent = text.resultRound;
  ui.resultTotalLabel.textContent = text.resultTotal;
  ui.yourPromptTitle.textContent = text.yourPrompt;
  ui.finalEyebrow.textContent = text.finalEyebrow;
  ui.finalTitle.textContent = text.finalTitle;
  ui.finalScoreLabel.textContent = text.totalScore;
  ui.replayNote.textContent = text.replayNote;
  ui.playAgain.textContent = text.playAgain;
  updateClockToggleButton();

  if (screens.mission.classList.contains("active") && selectedMissions.length) renderMissionIntro();
  if (screens.game.classList.contains("active") && player) updateHud();
  if (screens.result.classList.contains("active")) showRoundResults(lastFinalRoundScore);
  if (screens.final.classList.contains("active")) showFinalScreen();
}

function startGame() {
  prepareAudio();
  totalScore = 0;
  roundIndex = 0;
  selectedMissions = getRandomMissions(TOTAL_ROUNDS);
  showMissionIntro();
}

function setupMissionPool() {
  return [...missionPool];
}

function getRandomMissions(count) {
  const shuffled = setupMissionPool().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function showMissionIntro() {
  clearTimeout(introTimer);
  clearInterval(introTimer);
  cancelAnimationFrame(animationId);

  introCountdownValue = 2;
  renderMissionIntro();
  ui.startRound.disabled = false;
  showScreen("mission");

  introTimer = setInterval(() => {
    introCountdownValue -= 1;
    renderMissionIntro();
    if (introCountdownValue <= 0) {
      clearInterval(introTimer);
      introTimer = setTimeout(startRound, 350);
    }
  }, 1000);
}

function renderMissionIntro() {
  const current = getCurrentMission();
  const text = getText();
  ui.introRound.textContent = `${text.round} ${roundIndex + 1} / ${TOTAL_ROUNDS}`;
  ui.introTitle.textContent = translate(current.title);
  ui.introDescription.textContent = translate(current.description);
  ui.introConstraint.textContent = `${text.constraint}: ${translate(current.constraint)}`;
  ui.readyCountdown.textContent = introCountdownValue > 0
    ? `${text.getReady} ${introCountdownValue}`
    : text.go;
}

function startRound() {
  clearTimeout(introTimer);
  clearInterval(introTimer);
  ui.startRound.disabled = true;
  roundScore = 0;
  timeRemaining = ROUND_SECONDS;
  roundFinished = false;
  collectedBlocks = [];
  platforms = createPlatforms();
  particles = [];
  popups = [];
  roundStartedAt = performance.now();
  lastFrameTime = roundStartedAt;
  lastJumpTime = 0;
  walkFrame = 0;
  lastWalkFrameTime = roundStartedAt;
  lastStepSoundTime = 0;
  startClockSound();
  const startingPlatform = platforms[0];
  player = {
    x: CANVAS_WIDTH / 2 - 36,
    y: startingPlatform.y - 72,
    width: 72,
    height: 72,
    vx: 92,
    vy: 0,
    grounded: true,
    facing: 1,
    state: "idle"
  };
  cameraY = START_Y - CANVAS_HEIGHT + 120;
  promptBlocks = createPromptBlocks(getCurrentMission());
  updateCollectedPanel();
  updateHud();
  showScreen("game");
  canvas.focus();
  renderGame(roundStartedAt);
  animationId = requestAnimationFrame(updateGame);
}

function updateGame(timestamp) {
  if (roundFinished) return;

  const delta = Math.min((timestamp - lastFrameTime) / 1000, 0.033);
  lastFrameTime = timestamp;
  timeRemaining = Math.max(0, ROUND_SECONDS - Math.floor((timestamp - roundStartedAt) / 1000));

  applyPhysics(delta);
  checkPlatforms();
  updatePlayerState(timestamp);
  updateParticles(delta);
  checkCollisions();
  checkPromptGate();
  finishIfFallen();
  updateHud();
  renderGame(timestamp);

  if (timeRemaining <= 0) {
    finishRound({ reachedGate: false });
    return;
  }

  animationId = requestAnimationFrame(updateGame);
}

function handleCanvasPointerDown(event) {
  event.preventDefault();
  if (!player || roundFinished || !screens.game.classList.contains("active")) return;

  try {
    ui.canvasWrap.setPointerCapture?.(event.pointerId);
  } catch (error) {
    // Some browsers reject capture for synthetic or already-ended pointer events.
  }
  handleCanvasTouchZone(event);
}

function handleCanvasPointerMove(event) {
  if (touchMovePointerId !== event.pointerId) return;

  event.preventDefault();
  handleCanvasTouchZone(event);
}

function handleCanvasTouchZone(event) {
  const rect = canvas.getBoundingClientRect();
  const tapX = (event.clientX - rect.left) / rect.width * CANVAS_WIDTH;
  const tapY = (event.clientY - rect.top) / rect.height * CANVAS_HEIGHT;

  if (tapY < CANVAS_HEIGHT * 0.36) {
    touchMovePointerId = null;
    horizontalInput = 0;
    tryJump();
    return;
  }

  touchMovePointerId = event.pointerId;
  horizontalInput = tapX < CANVAS_WIDTH / 2 ? -1 : 1;
}

function stopTouchMove(event) {
  if (touchMovePointerId !== event.pointerId) return;

  touchMovePointerId = null;
  horizontalInput = 0;
}

function tryJump() {
  if (!player || roundFinished) return;

  const now = performance.now();
  if (now - lastJumpTime < 185) return;

  lastJumpTime = now;
  player.vy = -680;
  player.grounded = false;
  player.state = "jumping";
  playJumpSound();
  createJumpBurst();
}

function applyPhysics(delta) {
  player.vy += 960 * delta;
  if (horizontalInput !== 0) {
    player.vx += horizontalInput * 780 * delta;
    player.vx = clamp(player.vx, -260, 260);
  } else {
    const autoDrift = player.vx >= 0 ? 72 : -72;
    player.vx += (autoDrift - player.vx) * 1.8 * delta;
  }

  player.x += player.vx * delta;
  player.y += player.vy * delta;

  if (player.x <= 18) {
    player.x = 18;
    player.vx = Math.abs(player.vx);
  }
  if (player.x + player.width >= CANVAS_WIDTH - 18) {
    player.x = CANVAS_WIDTH - 18 - player.width;
    player.vx = -Math.abs(player.vx);
  }
  player.facing = player.vx >= 0 ? 1 : -1;
  player.grounded = false;

  const targetCameraY = player.y - CANVAS_HEIGHT * 0.56;
  cameraY = Math.min(cameraY, targetCameraY);
  cameraY = clamp(cameraY, 0, START_Y - CANVAS_HEIGHT + 120);
}

function updatePlayerState(timestamp) {
  if (!player.grounded) {
    player.state = "jumping";
    return;
  }

  if (Math.abs(player.vx) > 30) {
    player.state = "walking";
    updateWalkAnimation(timestamp);
    return;
  }

  player.state = "idle";
  walkFrame = 0;
}

function updateWalkAnimation(timestamp) {
  if (timestamp - lastWalkFrameTime < 155) return;

  lastWalkFrameTime = timestamp;
  walkFrame = walkFrame === 0 ? 1 : 0;
  if (walkFrame === 1 && timestamp - lastStepSoundTime > 300) {
    playSound(sounds.walk);
    lastStepSoundTime = timestamp;
  }
}

function prepareAudio() {
  Object.values(sounds).forEach(sound => sound.load());
  sounds.clock.loop = true;
  sounds.clock.playbackRate = 2.05;
  unlockAudio();
}

function unlockAudio() {
  Object.values(sounds).forEach(sound => {
    const wasMuted = sound.muted;
    sound.muted = true;
    const playPromise = sound.play();

    if (playPromise) {
      playPromise
        .then(() => {
          sound.pause();
          sound.currentTime = 0;
          sound.muted = wasMuted;
        })
        .catch(() => {
          sound.muted = wasMuted;
        });
      return;
    }

    sound.pause();
    sound.currentTime = 0;
    sound.muted = wasMuted;
  });
}

function playJumpSound() {
  playSound(sounds.jump);
}

function toggleClockSound() {
  clockMuted = !clockMuted;
  sounds.clock.muted = clockMuted;
  updateClockToggleButton();

  if (clockMuted) {
    stopClockSound();
    return;
  }

  if (screens.game.classList.contains("active") && !roundFinished) {
    startClockSound();
  }
}

function updateClockToggleButton() {
  const label = clockMuted ? getText().unmuteClock : getText().muteClock;
  ui.clockToggle.classList.toggle("muted", clockMuted);
  ui.clockToggle.setAttribute("aria-label", label);
  ui.clockToggle.title = label;
}

function startClockSound() {
  const clock = sounds.clock;
  if (!clock || clockMuted) return;

  clock.loop = true;
  clock.muted = false;
  clock.playbackRate = 2.05;
  clock.currentTime = 0;
  playSound(clock);
}

function stopClockSound() {
  const clock = sounds.clock;
  if (!clock) return;

  try {
    clock.pause();
    clock.currentTime = 0;
  } catch (error) {
    // Audio can fail silently on some browsers without affecting gameplay.
  }
}

function playSound(sound) {
  if (!sound) return;
  try {
    sound.currentTime = 0;
    const playPromise = sound.play();
    if (playPromise) playPromise.catch(() => {});
  } catch (error) {
    // Browser audio permissions vary; gameplay continues silently if blocked.
  }
}

function createPromptBlocks(current) {
  const blockData = [
    ...current.correct.map((text, index) => makeBlock(text, true, labels[index], feedbackFor(index))),
    ...current.incorrect.map((text, index) => makeBlock(text, false, labels[index + 4], "Unnecessary chaos"))
  ].sort(() => Math.random() - 0.5);

  const yPositions = [2895, 2595, 2075, 1575, 1085, 575].sort(() => Math.random() - 0.5);
  const xPositions = [36, 430, 90, 388, 232, 300].sort(() => Math.random() - 0.5);

  return blockData.map((block, index) => ({
    ...block,
    x: xPositions[index],
    y: yPositions[index],
    width: 250,
    height: 92,
    collected: false,
    bobOffset: Math.random() * Math.PI * 2
  }));
}

function createPlatforms() {
  const platformSpecs = [
    [230, START_Y + 64, 260],
    [56, 3000, 250],
    [410, 2720, 220],
    [140, 2490, 260],
    [380, 2225, 250],
    [70, 1960, 265],
    [390, 1700, 240],
    [150, 1440, 280],
    [430, 1180, 225],
    [86, 930, 265],
    [360, 690, 260],
    [155, 450, 280],
    [130, 245, 460]
  ];

  return platformSpecs.map(([x, y, width]) => ({
    x,
    y,
    width,
    height: 30
  }));
}

function makeBlock(text, correct, category, feedback) {
  return {
    text,
    display: text,
    correct,
    category,
    feedback
  };
}

function makeDisplay(text) {
  return text
    .replace(/^Act as an? /i, "")
    .replace(/^Use /i, "")
    .replace(/^Keep /i, "")
    .replace(/^Make /i, "")
    .replace(/^Include /i, "")
    .replace(/^Write /i, "")
    .replace(/^Explain /i, "")
    .split(/\s+/)
    .slice(0, 4)
    .join(" ")
    .toUpperCase();
}

function makeKoreanDisplay(text) {
  return text
    .replace(/처럼 행동하기/g, "")
    .replace(/사용하기|포함하기|유지하기|제안하기|설명하기|고르기|쓰기|묻기|피하기|하기/g, "")
    .replace(/[.]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .join(" ");
}

function feedbackFor(index) {
  return ["Clear role", "Correct context", "Helpful constraint", "Useful format"][index] || "Good instruction";
}

function checkCollisions() {
  const playerHitbox = getPlayerHitbox();
  promptBlocks.forEach(block => {
    if (!block.collected && rectanglesOverlap(playerHitbox, block)) {
      collectBlock(block);
    }
  });
}

function checkPlatforms() {
  if (player.vy < 0) return;

  const feet = {
    x: player.x + 14,
    y: player.y + player.height - 8,
    width: player.width - 28,
    height: 14
  };

  platforms.forEach(platform => {
    const wasAbove = player.y + player.height - player.vy * 0.016 <= platform.y + 8;
    if (wasAbove && rectanglesOverlap(feet, platform)) {
      player.y = platform.y - player.height;
      player.vy = 0;
      player.grounded = true;
    }
  });
}

function getPlayerHitbox() {
  return {
    x: player.x + 20,
    y: player.y + 12,
    width: player.width - 40,
    height: player.height - 14
  };
}

function collectBlock(block) {
  block.collected = true;
  collectedBlocks.push(block);
  roundScore += block.correct ? 200 : -100;
  roundScore = Math.max(-600, roundScore);
  popups.push({
    text: block.correct ? "+200" : getText().badInstruction,
    x: block.x + block.width / 2,
    y: block.y,
    life: 0.85,
    good: block.correct
  });
  updateCollectedPanel();
  showPickupEffect(block.correct);
}

function showPickupEffect(isGood) {
  ui.pickupFlash.className = `pickup-flash ${isGood ? "good" : "bad"}`;
  ui.pickupFlash.style.animation = "none";
  ui.pickupFlash.offsetHeight;
  ui.pickupFlash.style.animation = "";

  if (!isGood) {
    ui.canvasWrap.classList.remove("shake");
    ui.canvasWrap.offsetHeight;
    ui.canvasWrap.classList.add("shake");
  }
}

function checkPromptGate() {
  const gate = { x: 160, y: GATE_Y, width: 400, height: 140 };
  if (rectanglesOverlap(getPlayerHitbox(), gate)) {
    finishRound({ reachedGate: true });
  }
}

function finishIfFallen() {
  if (player.y - cameraY > CANVAS_HEIGHT + 130) {
    finishRound({ skipResults: true });
  }
}

function finishRound(options = {}) {
  if (roundFinished) return;

  roundFinished = true;
  cancelAnimationFrame(animationId);
  stopClockSound();
  const reachedGate = Boolean(options.reachedGate);
  const gatePenalty = reachedGate ? 0 : MISSED_GATE_PENALTY;
  const finalRoundScore = Math.max(0, roundScore + timeRemaining * 10 - gatePenalty);
  lastFinalRoundScore = finalRoundScore;
  totalScore += finalRoundScore;

  if (options.skipResults) {
    setTimeout(nextMission, 450);
    return;
  }

  showRoundResults(finalRoundScore, { reachedGate, gatePenalty });
}

function calculatePromptQuality() {
  const correctCount = collectedBlocks.filter(block => block.correct).length;
  const incorrectCount = collectedBlocks.filter(block => !block.correct).length;
  return clamp(Math.round((correctCount / 4) * 100 - incorrectCount * 15), 0, 100);
}

function showRoundResults(finalRoundScore, resultMeta = {}) {
  const current = getCurrentMission();
  const correctCount = collectedBlocks.filter(block => block.correct).length;
  const incorrectCount = collectedBlocks.filter(block => !block.correct).length;
  const reachedGate = Boolean(resultMeta.reachedGate);
  const success = reachedGate && correctCount >= 3 && incorrectCount <= 1;
  const quality = calculatePromptQuality();

  ui.qualityScore.textContent = `${quality}%`;
  ui.resultRoundScore.textContent = `+${finalRoundScore}`;
  ui.resultTotalScore.textContent = totalScore;
  ui.resultPrompt.textContent = buildPromptPreview();
  ui.aiResponse.textContent = translate(success ? current.successResponse : current.badResponse);
  ui.nextMission.textContent = roundIndex === TOTAL_ROUNDS - 1 ? getText().showFinal : getText().nextMission;

  ui.feedbackList.innerHTML = "";
  buildFeedbackList(resultMeta).forEach(line => {
    const item = document.createElement("div");
    item.className = "feedback-line";
    item.textContent = line;
    ui.feedbackList.appendChild(item);
  });

  ui.resultPanel.classList.toggle("shake", quality < 35);
  showScreen("result");
}

function buildFeedbackList(resultMeta = {}) {
  const lines = [];
  const collectedCorrect = collectedBlocks.filter(block => block.correct);
  const collectedBad = collectedBlocks.filter(block => !block.correct);

  collectedCorrect.forEach(block => lines.push(`✅ ${translate(block.feedback)}: ${translate(block.text)}`));
  collectedBad.forEach(block => lines.push(`❌ ${translate(block.feedback)}: ${translate(block.text)}`));

  if (collectedCorrect.length < 3) lines.push(`❌ ${getText().missingGood}`);
  if (collectedBad.length === 0) lines.push(`✅ ${getText().noBad}`);
  if (resultMeta.reachedGate) {
    lines.push(`✅ ${getText().reachedGate}`);
  } else if (resultMeta.gatePenalty) {
    lines.push(`❌ ${getText().missedGate}: -${resultMeta.gatePenalty} ${getText().penalty}`);
  }
  if (!collectedBlocks.length) lines.push(`❌ ${getText().emptyPrompt}`);

  return lines;
}

function nextMission() {
  roundIndex += 1;
  if (roundIndex >= TOTAL_ROUNDS) {
    showFinalScreen();
    return;
  }
  showMissionIntro();
}

function showFinalScreen() {
  const rank = getRank(totalScore);
  ui.finalScore.textContent = totalScore;
  ui.rankTitle.textContent = rank.title;
  ui.rankMessage.textContent = rank.message;
  showScreen("final");
}

function restartGame() {
  startGame();
}

function updateHud() {
  ui.hudRound.textContent = `${getText().round} ${roundIndex + 1} / ${TOTAL_ROUNDS}`;
  ui.hudTitle.textContent = translate(getCurrentMission().title);
  ui.hudTimer.textContent = timeRemaining;
}

function updateCollectedPanel() {
  if (!ui.collectedList || !ui.collectedEmpty) return;

  ui.collectedList.innerHTML = "";
  ui.collectedEmpty.style.display = collectedBlocks.length ? "none" : "block";

  collectedBlocks.slice(-6).forEach(block => {
    const item = document.createElement("li");
    item.className = block.correct ? "" : "bad";
    item.textContent = `${block.correct ? "✓" : "✕"} ${getBlockDisplay(block)}`;
    ui.collectedList.appendChild(item);
  });
}

function updateParticles(delta) {
  particles.forEach(particle => {
    particle.x += particle.vx * delta;
    particle.y += particle.vy * delta;
    particle.life -= delta;
  });
  popups.forEach(popup => {
    popup.y -= 55 * delta;
    popup.life -= delta;
  });
  particles = particles.filter(particle => particle.life > 0);
  popups = popups.filter(popup => popup.life > 0);
}

function createJumpBurst() {
  for (let i = 0; i < 8; i++) {
    particles.push({
      x: player.x + player.width / 2,
      y: player.y + player.height,
      vx: (Math.random() - 0.5) * 170,
      vy: 80 + Math.random() * 140,
      life: 0.35 + Math.random() * 0.2
    });
  }
}

function renderGame(timestamp = 0) {
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawBackground();
  drawPromptGate(timestamp);
  drawPlatforms();
  drawBlocks(timestamp);
  drawParticles();
  drawPopups();
  if (player) drawPlayer(timestamp);
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
  gradient.addColorStop(0, "#49b8ff");
  gradient.addColorStop(0.55, "#6dcfff");
  gradient.addColorStop(1, "#b8ecff");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  drawCloud(-48, 48 - (cameraY * 0.12) % 520, 3);
  drawCloud(372, 34 - (cameraY * 0.1) % 520, 2);
  drawCloud(96, 152 - (cameraY * 0.16) % 560, 4);
  drawCloud(520, 132 - (cameraY * 0.11) % 540, 2);
  drawCloud(245, 315 - (cameraY * 0.13) % 580, 3);
  drawCloud(410, 230 - (cameraY * 0.14) % 560, 3);
  drawCloud(22, 420 - (cameraY * 0.18) % 600, 5);
  drawCloud(460, 470 - (cameraY * 0.2) % 620, 4);
}

function drawCloud(x, y, scale) {
  while (y < -100) y += CANVAS_HEIGHT + 140;
  while (y > CANVAS_HEIGHT + 80) y -= CANVAS_HEIGHT + 140;

  const unit = scale;
  const blocks = [
    [5, 4, 11, 4, "#e9f8ff"],
    [2, 5, 20, 5, "#e9f8ff"],
    [0, 6, 24, 4, "#d4edff"],
    [4, 2, 5, 3, "#f7fdff"],
    [9, 1, 5, 4, "#f7fdff"],
    [14, 3, 6, 3, "#f7fdff"],
    [6, 7, 15, 2, "#b9ddfa"],
    [20, 7, 7, 2, "#b9ddfa"]
  ];

  ctx.save();
  ctx.globalAlpha = 0.92;
  blocks.forEach(([bx, by, bw, bh, color]) => {
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x + bx * unit), Math.round(y + by * unit), bw * unit, bh * unit);
  });
  ctx.restore();
}

function drawPlatforms() {
  platforms.forEach(platform => {
    const x = platform.x;
    const y = platform.y - cameraY;
    if (y < -60 || y > CANVAS_HEIGHT + 60) return;

    ctx.save();
    ctx.shadowColor = "rgba(51, 255, 92, 0.28)";
    ctx.shadowBlur = 10;
    ctx.fillStyle = "#23d12f";
    ctx.fillRect(x, y, platform.width, 8);
    ctx.fillStyle = "#7b5427";
    ctx.fillRect(x + 4, y + 8, platform.width - 8, 22);
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#9b6a31";
    for (let tx = x + 10; tx < x + platform.width - 10; tx += 22) {
      ctx.fillRect(tx, y + 12, 10, 5);
      ctx.fillRect(tx + 7, y + 22, 8, 4);
    }
    ctx.fillStyle = "#15a51d";
    ctx.fillRect(x, y + 2, platform.width, 3);
    ctx.restore();
  });
}

function drawPromptGate(timestamp) {
  const gateX = 160;
  const gateY = GATE_Y - cameraY;
  if (gateY > CANVAS_HEIGHT + 180 || gateY < -220) return;

  ctx.save();
  ctx.translate(gateX, gateY);
  ctx.shadowColor = "#44f4ff";
  ctx.shadowBlur = 22 + Math.sin(timestamp / 180) * 5;
  ctx.fillStyle = "rgba(68, 244, 255, 0.16)";
  ctx.strokeStyle = "rgba(184, 255, 92, 0.9)";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.roundRect(0, 0, 400, 140, 18);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#f7f9ff";
  ctx.font = currentLanguage === "ko" ? "900 28px ui-sans-serif, system-ui" : "900 34px ui-sans-serif, system-ui";
  ctx.textAlign = "center";
  ctx.fillText(getText().gateText, 200, 82);
  ctx.restore();
}

function drawBlocks(timestamp) {
  promptBlocks.forEach(block => {
    if (block.collected) return;

    const x = block.x;
    const y = block.y - cameraY + Math.sin(timestamp / 280 + block.bobOffset) * 5;
    if (y < -block.height || y > CANVAS_HEIGHT + block.height) return;

    ctx.save();
    ctx.shadowColor = "rgba(68, 244, 255, 0.36)";
    ctx.shadowBlur = 4;
    ctx.fillStyle = "rgba(235, 251, 255, 0.98)";
    ctx.strokeStyle = "rgba(68, 244, 255, 0.68)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(x, y, block.width, block.height, 8);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.font = "900 10px ui-sans-serif, system-ui";
    const headerText = getLocalizedLabel(block.category);
    const headerWidth = Math.min(block.width - 24, Math.ceil(ctx.measureText(headerText).width) + 18);
    ctx.fillStyle = "rgba(6, 10, 20, 0.9)";
    ctx.fillRect(x + 12, y + 10, headerWidth, 18);
    ctx.fillStyle = "#eefbff";
    ctx.fillText(headerText, x + 18, y + 23);

    ctx.font = currentLanguage === "ko" ? "900 14px ui-sans-serif, system-ui" : "900 14px ui-sans-serif, system-ui";
    wrapText(getBlockDisplay(block), x + 16, y + 48, block.width - 32, 16, "#061016", 3);
    ctx.restore();
  });
}

function drawParticles() {
  ctx.save();
  ctx.fillStyle = "rgba(184, 255, 92, 0.9)";
  particles.forEach(particle => {
    const y = particle.y - cameraY;
    ctx.globalAlpha = clamp(particle.life / 0.45, 0, 1);
    ctx.fillRect(particle.x, y, 5, 5);
  });
  ctx.restore();
}

function drawPopups() {
  ctx.save();
  ctx.textAlign = "center";
  popups.forEach(popup => {
    ctx.globalAlpha = clamp(popup.life / 0.85, 0, 1);
    ctx.fillStyle = popup.good ? "#b8ff5c" : "#ff4f68";
    ctx.font = "900 20px ui-sans-serif, system-ui";
    ctx.fillText(popup.text, popup.x, popup.y - cameraY);
  });
  ctx.restore();
}

function drawPlayer(timestamp) {
  const sprite = getPlayerSprite();
  const x = Math.round(player.x);
  const y = Math.round(player.y - cameraY);
  const bob = player.state === "walking" ? Math.sin(timestamp / 120) * 2 : 0;

  ctx.save();
  if (player.facing < 0) {
    ctx.translate(x + player.width, y + bob);
    ctx.scale(-1, 1);
    drawPlayerSprite(sprite, 0, 0);
  } else {
    drawPlayerSprite(sprite, x, y + bob);
  }
  ctx.restore();
}

function getPlayerSprite() {
  if (player.state === "jumping") return sprites.jump;
  if (player.state === "walking") return walkFrame === 0 ? sprites.idle : sprites.walk;
  return sprites.idle;
}

function drawPlayerSprite(sprite, x, y) {
  if (sprite.loaded) {
    ctx.drawImage(sprite.image, x - 18, y - 18, player.width + 36, player.height + 36);
    return;
  }

  ctx.fillStyle = "#f7f9ff";
  ctx.fillRect(x, y, player.width, player.height);
  ctx.fillStyle = "#ffd166";
  ctx.fillRect(x + 50, y + 30, 22, 15);
  ctx.fillStyle = "#07101a";
  ctx.fillRect(x + 20, y + 22, 10, 10);
  ctx.fillRect(x + 45, y + 22, 10, 10);
}

function wrapText(text, x, y, maxWidth, lineHeight, color, maxLines = 3) {
  ctx.fillStyle = color;
  const baseFont = ctx.font;
  const fontSizeMatch = baseFont.match(/(\d+)px/);
  const baseSize = fontSizeMatch ? Number(fontSizeMatch[1]) : 14;
  let lines = [];
  let fittedSize = baseSize;

  for (let size = baseSize; size >= 8; size -= 1) {
    ctx.font = baseFont.replace(/\d+px/, `${size}px`);
    lines = getWrappedLines(text, maxWidth);
    const allLinesFit = lines.length <= maxLines && lines.every(line => ctx.measureText(line).width <= maxWidth);
    if (allLinesFit) {
      fittedSize = size;
      break;
    }
  }

  ctx.font = baseFont.replace(/\d+px/, `${fittedSize}px`);
  lineHeight = Math.max(12, fittedSize + 3);
  lines = getWrappedLines(text, maxWidth);
  const visibleLines = lines.slice(0, maxLines);

  if (lines.length > maxLines) {
    visibleLines[maxLines - 1] = fitWithEllipsis(visibleLines[maxLines - 1], maxWidth);
  }

  visibleLines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });

  ctx.font = baseFont;
}

function getWrappedLines(text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach(word => {
    const fittedWord = breakLongWord(word, maxWidth);
    const testLine = line ? `${line} ${fittedWord}` : fittedWord;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = fittedWord;
    } else {
      line = testLine;
    }
  });

  if (line) lines.push(line);
  return lines;
}

function breakLongWord(word, maxWidth) {
  if (ctx.measureText(word).width <= maxWidth) return word;

  let chunk = "";
  const chunks = [];
  [...word].forEach(char => {
    const testChunk = `${chunk}${char}`;
    if (ctx.measureText(testChunk).width > maxWidth && chunk) {
      chunks.push(chunk);
      chunk = char;
    } else {
      chunk = testChunk;
    }
  });
  if (chunk) chunks.push(chunk);
  return chunks.join(" ");
}

function fitWithEllipsis(text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) return text;

  let trimmed = text;
  while (trimmed.length > 1 && ctx.measureText(`${trimmed}...`).width > maxWidth) {
    trimmed = trimmed.slice(0, -1);
  }
  return `${trimmed}...`;
}

function buildPromptPreview() {
  const prompt = collectedBlocks.map(block => translate(block.text));
  return prompt.length ? `${prompt.join(". ")}.` : getText().noPrompt;
}

function getCurrentMission() {
  return selectedMissions[roundIndex];
}

function getRank(score) {
  return getText().ranks.find(rank => score <= rank.max);
}

function rectanglesOverlap(a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

initGame();
