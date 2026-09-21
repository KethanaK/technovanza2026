/**
 * TECHNOVANZA 2026 - Central Configuration & Content Store
 * Department of Computer Science and Applications
 *
 * Edit this file to easily modify fest details, events, dates, coordinators,
 * eligibility criteria, and registration URLs without touching HTML markup.
 */

const EVENT_CONFIG = {
  startDate: "2026-09-20T00:00:00",
  resultsReleaseDate: "2026-10-28T16:30:00"
};

const EVENT_RESULTS = [
  { position: 1, name: "Team Alpha", score: 980 },
  { position: 2, name: "Team Beta", score: 945 },
  { position: 3, name: "Team Gamma", score: 910 },
  { position: 4, name: "Team Delta", score: 875 },
  { position: 5, name: "Team Omega", score: 840 }
];

const FEST_CONFIG = {
  name: "TECHNOVANZA",
  year: "2026",
  tagline: "THINK INTELLIGENTLY. BUILD ELEGANTLY.",
  subTagline: "Hosted by the Department of Computer Science and Applications",
  motto: "Think Intelligently. Build Elegantly.",
  
  eventDates: {
    startDate: "2026-10-28T09:00:00",
    endDate: "2026-10-28T16:00:00",
    displayDate: "October 28, 2026",
    displayDays: "Wednesday",
    displayTime: "09:00 AM – 04:00 PM IST",
    onlineRegistrationDeadline: "October 26, 2026",
    offlineRegistrationDeadline: "On-spot registration available on October 28, 2026",
    deadlineISO: "2026-10-27T23:59:59"
  },

  location: {
    venue: "CAIAS-CS Labs",
    campus: "CAIAS & CS Labs",
    university: "Christ Academy Institute for Advanced Studies",
    city: "Bangalore, India",
    mapLink: "https://maps.google.com"
  },

  eligibility: "Open to all Undergraduate & Postgraduate students (All branches & colleges eligible)",
  registrationFee: "Free Registration • Powered by the Department of Computer Science and Applications",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRZPjKhYPqnoynUEZfHxtnHGKuj1r5RDVJvhyvNjkXp9szOA/viewform?usp=dialog",
  totalPrizePool: "₹1,50,000+",

  coordinators: {
    faculty: [
      {
        name: "Ms. Ashwini Gaonkar",
        role: "Faculty Coordinator",
        email: "ashwini.gaonkar@caias.in"
      },
      {
        name: "Mr. Anilkumar B",
        role: "Faculty Coordinator",
        email: "anil.kumar@caias.in"
      },
      {
        name: "Ms. Geethika S",
        role: "Faculty Coordinator",
        email: "geethika.s@caias.in"
      },
      {
        name: "Mr. Stesin Titus",
        role: "Faculty Coordinator",
        email: "stesin.t@caias.in"
      }
    ],
    student: [
      {
        name: "Ranjini Priya R",
        role: "Student Coordinator",
        phone: "93532 79941"
      },
      {
        name: "Shiv Shankar N",
        role: "Student Coordinator",
        phone: "97904 28032"
      },
      {
        name: "Mariya Spoorthy A",
        role: "Student Coordinator",
        phone: "99800 81277"
      }
    ]
  },

  stats: [
    { label: "Major Competitions", value: "15+" },
    { label: "Expected Delegates", value: "1,200+" },
    { label: "Cash Prize Pool", value: "1L+" },
    { label: "Participating Colleges", value: "45+" }
  ],

  highlights: [
    {
      id: "h-1",
      icon: "💻",
      title: "Technical Competitions",
      category: "CORE",
      description: "Rigorous coding marathons and algorithmic duels designed to test logic, efficiency, and speed under intense constraints."
    },
    {
      id: "h-2",
      icon: "🧠",
      title: "Problem-Solving Challenges",
      category: "LOGIC",
      description: "Complex system design puzzles, cryptic deductive enigmas, and architecture challenges that push analytical boundaries."
    },
    {
      id: "h-3",
      icon: "🤖",
      title: "AI & Emerging Technology",
      category: "FUTURE",
      description: "Hands-on machine learning showdowns, neural model fine-tuning tasks, and agentic prompt engineering showcases."
    },
    {
      id: "h-4",
      icon: "🎮",
      title: "Gaming & Fun Events",
      category: "ESPORTS",
      description: "Electrifying LAN battles, tactical FPS showdowns, and lightning-fast reaction challenges for serious digital athletes."
    },
    {
      id: "h-5",
      icon: "🔐",
      title: "Cyber & Tech Challenges",
      category: "SECURITY",
      description: "Realistic Capture-The-Flag (CTF) scenarios, cryptographic decryptions, vulnerability exploitation, and network defense."
    },
    {
      id: "h-6",
      icon: "🎨",
      title: "Creative Digital Challenges",
      category: "DESIGN",
      description: "Futuristic UI/UX design sprints, generative digital media, and interactive front-end web development face-offs."
    },
    {
      id: "h-7",
      icon: "⚡",
      title: "Quick-Fire Tech Activities",
      category: "RAPID",
      description: "Fast-paced tech trivia blitzes, blindfolded keyboard sprints, reverse engineering showdowns, and live buzzer rounds."
    },
    {
      id: "h-8",
      icon: "🏆",
      title: "Exciting Prizes & Recognition",
      category: "AWARDS",
      description: "Cash prizes, prestigious championship trophies, verified certificates of excellence, and direct industry internship perks."
    }
  ],

  events: [
    {
      id: "debugging",
      number: "01",
      title: "DEBUGGING",
      tagline: "Step into the debugging arena where logic, speed, and accuracy decide the winners.",
      category: "Coding & Debugging",
      badge: "Speed Run",
      teamSize: "1-2 Members",
      duration: "4-Round Format",
      venue: "Turing Computing Lab",
      prize: "₹2,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>`,
      description: "Teams of up to two participants face coding challenges that test technical skills, problem-solving ability, accuracy, efficiency, and speed.",
      eventHeads: [
        { name: "Jaisharan", phone: "90368 64134" },
        { name: "Lalith", phone: "80957 28998" }
      ],
      rounds: [
        { name: "Round 1: Quiz", desc: "Answer 20 MCQs on programming fundamentals." },
        { name: "Round 2: Debugging", desc: "Identify and correct errors in given code snippets." },
        { name: "Round 3: Program Writing", desc: "Solve coding problems within the time limit." },
        { name: "Round 4: Blind Coding", desc: "Write code on paper without using a compiler." }
      ],
      rules: [
        "Teams may have 1 or 2 participants.",
        "Allowed languages are Python, C++, and Java, chosen at the start.",
        "No external help, phones, books, or internet access is allowed.",
        "Plagiarism results in disqualification; judges' decisions are final.",
        "Strict time limits apply; late submissions will not be accepted.",
        "To reach Level 3, score above 25/35 in Quiz plus Debugging.",
        "To reach Level 4, score above 65/95 in Quiz, Debugging, and Program Writing.",
        "Scoring is based on accuracy and speed. A Golden Question decides a tie if required."
      ]
    },
    {
      id: "ui-ux-designing",
      number: "02",
      title: "UI/UX DESIGNING",
      tagline: "Creativity meets usability as teams turn bold ideas into seamless user experiences.",
      category: "Design & Creativity",
      badge: "Design Sprint",
      teamSize: "2 Members",
      duration: "2-Round Format",
      venue: "Design Studio",
      prize: "₹2,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
      description: "Teams of two take on design challenges that test speed, originality, and problem-solving, balancing aesthetics and functionality to deliver seamless user experiences.",
      eventHeads: [
        { name: "Lavanya", phone: "63602 02017" },
        { name: "Ruban", phone: "97399 45928" }
      ],
      rounds: [
        { name: "Round 1: Speed Glow Up", desc: "Redesign an outdated or broken screen into a sleek, modern interface within 60 minutes." },
        { name: "Round 2: Mystery UX Box", desc: "Pick a surprise brief, design a complete user-centric solution, and give a short live presentation." }
      ],
      rules: [
        "All designs must be original; templates, plagiarism, and AI work are not allowed.",
        "No external help or internet browsing for ready-made designs; only provided assets may be used.",
        "Use only the assigned system and approved tools.",
        "Strict time limits apply; late submissions will not be accepted.",
        "Do not disturb competitors or tamper with devices.",
        "Mystery UX Box prompts must not be shared with other teams.",
        "Judges' and volunteers' instructions are final.",
        "Judging covers visual appeal, usability, creativity, innovation, and problem-solving."
      ]
    },
    {
      id: "debate",
      number: "03",
      title: "DEBATE",
      tagline: "Pick one of six topics, choose your side, and battle it out in a fierce face-off.",
      category: "Public Speaking",
      badge: "Verbal Duel",
      teamSize: "2 Teams",
      duration: "Timed Debate Format",
      venue: "Seminar Hall",
      prize: "₹2,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      description: "Teams debate one of six topics in a timed face-off that tests sharp arguments, clear delivery, and unshakable confidence.",
      eventHeads: [
        { name: "Ummehani", phone: "85468 10753" },
        { name: "Nancy", phone: "93800 81682" }
      ],
      rounds: [
        { name: "Topic & Side", desc: "The moderator announces the topics and rules; teams choose FOR or AGAINST." },
        { name: "Opening Speeches", desc: "The FOR and AGAINST teams each deliver a 3–5 minute opening speech." },
        { name: "Rebuttals", desc: "Teams respond to the opposing argument in 2–3 minute rebuttals." },
        { name: "Closing Statements", desc: "Both sides give a short 1–2 minute summary." }
      ],
      rules: [
        "A 30-second warning bell is given before the final bell.",
        "There is no cross-questioning; each team speaks only in its allotted time.",
        "Respectful language is mandatory. No gadgets or unfair means are allowed.",
        "Judges' decisions are final."
      ]
    },
    {
      id: "posterpunk",
      number: "05",
      title: "POSTER MAKING",
      tagline: "Poster Making is a high-energy design challenge where creativity meets speed.",
      category: "Visual Design",
      badge: "On-The-Spot",
      teamSize: "1-2 Members",
      duration: "On-the-Spot Challenge",
      venue: "Design Lab",
      prize: "₹2,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
      description: "The theme is revealed on the spot. Teams must brainstorm quickly, design a poster from scratch without pre-made templates using any digital platform, and deliver a 2-minute pitch narrating the story behind a bold, persuasive, and unforgettable design.",
      eventHeads: [
        { name: "Chandan Rao", phone: "72043 46592" },
        { name: "Swrup", phone: "93309 50899" }
      ],
      rounds: [
        { name: "Theme Reveal", desc: "The poster theme is revealed on the spot." },
        { name: "Design From Scratch", desc: "Brainstorm and create an original poster using any digital platform." },
        { name: "The Pitch", desc: "Deliver a 2-minute pitch narrating the story behind the design." }
      ],
      rules: [
        "Posters must be original creations; templates and copied work are not allowed.",
        "The design must reflect the given theme.",
        "Final submission must be JPEG, PNG, or PDF, with a minimum resolution of 1080 × 1080 px.",
        "Each team must deliver a 2-minute pitch explaining the poster.",
        "Content must remain respectful and non-offensive."
      ]
    },
    {
      id: "best-manager",
      number: "06",
      title: "BEST MANAGER",
      tagline: "Test your leadership, quick thinking, adaptability, and managerial edge under pressure.",
      category: "Management Simulation",
      badge: "High Pressure",
      teamSize: "1 Member",
      duration: "Single Round",
      venue: "Conference Room",
      prize: "₹1,500",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
      description: "As a solo contender, navigate crisis management, strategic planning, public speaking, negotiations, unpredictable twists, rapid-fire questions, and high-pressure decisions with professionalism.",
      eventHeads: [
        { name: "Deeksha", phone: "84318 68984" },
        { name: "Sandeep", phone: "63611 52897" }
      ],
      rounds: [
        { name: "Management Challenges", desc: "Face scenarios involving crisis management, strategic planning, public speaking, and negotiations." },
        { name: "Rapid-Fire Decisions", desc: "Handle unpredictable twists and questions that demand intellect, confidence, diplomacy, and presence of mind." }
      ],
      rules: [
        "Report 15 minutes before the event.",
        "No gadgets or internet use is allowed.",
        "Maintain professional and respectful behavior.",
        "Cheating or malpractice results in disqualification.",
        "Judges' decisions are final.",
        "Rounds and rules may change based on participation."
      ]
    },
    {
      id: "it-quiz",
      number: "07",
      title: "IT QUIZ",
      tagline: "A battle of brains and strategy where knowledge meets quick thinking.",
      category: "Trivia & Tech Intel",
      badge: "Brain Battle",
      teamSize: "2-3 Members",
      duration: "Multi-Round Format",
      venue: "Seminar Hall",
      prize: "₹3,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      description: "This quiz-style competition tests general awareness, coding logic, theory concepts, and subject expertise through challenging rounds that demand speed, accuracy, and smart decision-making.",
      eventHeads: [
        { name: "Justin Thomas Varghese", phone: "91081 59903" },
        { name: "Flemin J", phone: "88776 69911" }
      ],
      rounds: [
        { name: "Preliminary Rounds", desc: "Teams compete across rounds covering general awareness, coding logic, theory concepts, and subject expertise." },
        { name: "Final Round", desc: "The sharpest teams from the prelims compete for the championship." }
      ],
      rules: [
        "All teams must report 15 minutes before the event.",
        "Gadgets, internet access, and unfair means are not allowed.",
        "Answers must be submitted within the time limit; late responses will not be accepted.",
        "A tie-breaker round decides the winner in case of a tie.",
        "Judges' and organizers' decisions are final and binding.",
        "Misconduct, disrespect, or malpractice results in instant disqualification.",
        "Event structure may be adjusted depending on participation."
      ]
    },
    {
      id: "treasure-hunt",
      number: "08",
      title: "CYBER HUNT",
      tagline: "A tech-powered campus chase of cryptic clues, logical puzzles, teamwork, and speed.",
      category: "Exploration & Puzzles",
      badge: "Campus Wide",
      teamSize: "5 Members",
      duration: "Campus-Wide Hunt",
      venue: "Entire Campus",
      prize: "₹4,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,
      description: "Teams of five embark on a campus-wide digital adventure, solving cryptic clues, logical puzzles, and fast-paced challenges using electronic devices while racing against the clock.",
      eventHeads: [
        { name: "Likitha", phone: "80736 00519" }
      ],
      rounds: [
        { name: "Clue Trail", desc: "Solve cryptic clues and logical puzzles across campus." },
        { name: "Tech Challenges", desc: "Tackle fast-paced challenges using electronic devices." },
        { name: "Race to the Finish", desc: "Earn points for clues solved and time taken while navigating each level." }
      ],
      rules: [
        "Cheating, misconduct, or violation of campus rules results in immediate disqualification.",
        "Teams must respect the environment and follow all event guidelines.",
        "Points are awarded based on clues solved and time taken.",
        "Teamwork, communication, and quick decision-making are essential."
      ]
    },
    {
      id: "ipl-auction",
      number: "09",
      title: "IPL AUCTION",
      tagline: "Build an IPL franchise from scratch with a ₹100 crore budget after surviving the Cricket Quiz.",
      category: "Strategy & Sports",
      badge: "Big Budget",
      teamSize: "2-4 Members",
      duration: "Multi-Stage Format",
      venue: "Auditorium",
      prize: "₹4,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
      description: "A Cricket Quiz shortlists the top 10 teams. Selected teams represent IPL franchises in an auction where every team starts with ₹100 crores and builds a squad from scratch based on player performance over the past three years.",
      eventHeads: [
        { name: "Deekshith", phone: "63603 73474" },
        { name: "Rishi", phone: "99450 82866" }
      ],
      rounds: [
        { name: "Cricket Quiz", desc: "Shortlist the top 10 teams for the auction." },
        { name: "IPL Auction", desc: "Represent an IPL franchise and bid for players with a ₹100 crore budget." }
      ],
      rules: [
        "Every team starts with a budget of ₹100 crores; all bidding begins from scratch.",
        "Player evaluation is based on performance over the past 3 years.",
        "Jump bids and skip bids are strictly prohibited.",
        "Teams must follow minimum bidding requirements; failure to comply leads to disqualification.",
        "Judges' and organizers' decisions are final and binding."
      ]
    },
    {
      id: "free-fire",
      number: "10",
      title: "FREE FIRE",
      tagline: "Gather your squad for an intense custom-room Free Fire showdown on mobile.",
      category: "Mobile eSports",
      badge: "Squad Up",
      teamSize: "4 Players + 1 Substitute",
      duration: "Custom-Room Matches",
      venue: "Gaming Arena",
      prize: "₹4,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
      description: "Squads of four players and one substitute compete in custom-room matches using mobile devices only. Communication, timing, and fair play are essential to claim the crown.",
      eventHeads: [
        { name: "Bharath", phone: "91138 92398" },
        { name: "Rajat", phone: "81238 26724" }
      ],
      rounds: [
        { name: "Squad Registration", desc: "Register four players and one substitute before the matches begin." },
        { name: "Custom Room Showdown", desc: "Join the custom room and compete on mobile devices only." }
      ],
      rules: [
        "The room ID and password are shared 10 minutes before the match.",
        "Join on time; late entry is not the organizers' responsibility and refunds will not be given.",
        "Do not change positions in the custom room.",
        "Only Android/iOS mobile devices are allowed; no iPads, emulators, hacks, scripts, or unfair tools.",
        "Unregistered players, teaming, scripting, or cheating result in penalties or permanent bans.",
        "Every teammate must take a screenshot after the match.",
        "Do not share the room ID or password.",
        "Abusive language and spamming in custom-room chat are prohibited."
      ]
    },
    {
      id: "bgmi",
      number: "11",
      title: "BGMI",
      tagline: "Survive custom lobbies and rise through qualifiers, semi-finals, and finals using strategy and teamwork.",
      category: "Mobile eSports",
      badge: "Battle Royale",
      teamSize: "4 Members",
      duration: "Qualifiers to Finals",
      venue: "Gaming Arena",
      prize: "₹4,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      description: "Teams compete in custom lobbies through qualifiers, semi-finals, and finals depending on participation. Official kill points and placement points determine the rankings.",
      eventHeads: [
        { name: "Shivam Kumar", phone: "70190 34220" },
        { name: "Punith", phone: "86189 27961" }
      ],
      rounds: [
        { name: "Qualifiers", desc: "Compete in initial custom-lobby matches to narrow the field." },
        { name: "Semi-Finals", desc: "Advance through additional matches depending on participation." },
        { name: "Finals", desc: "The sharpest squads compete for the BGMI championship." }
      ],
      rules: [
        "Only standard smartphones are allowed; gaming phones are prohibited.",
        "Participants must bring their own devices and headphones.",
        "Strict silence is required during gameplay; no shouting or disturbance.",
        "Emulators, hacks, and unfair methods result in instant disqualification.",
        "Event heads or volunteers may check devices if foul play is suspected.",
        "Multiple teams may participate from the same college.",
        "Scoring follows the official BGMI system: kill points plus placement points.",
        "All participants must follow organizer instructions at all times."
      ]
    },
    {
      id: "hackathon",
      number: "12",
      title: "HACKATHON",
      tagline: "Logic-Crash Hackathon: Solving Modern-Day Challenges",
      category: "Innovation & Coding",
      badge: "Build Sprint",
      teamSize: "2-3 Members",
      duration: "2-Hour Challenge",
      venue: "CS Labs",
      prize: "₹2,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>`,
      description: "The hackathon aims to push participants to identify and solve real-world problems under time constraints while encouraging creative, practical, and impactful solutions through teamwork, time management, and effective pitching.",
      eventHeads: [
        { name: "Suraksha", phone: "63635 00743" },
        { name: "Monisha T", phone: "83105 65224" }
      ],
      rounds: [
        { name: "Round 1 (45 mins)", desc: "Teams identify and frame their own problem, propose a solution, and create a PPT." },
        { name: "Round 2 (30 mins)", desc: "A new surprise problem statement is revealed; teams must design a solution and prepare a fresh PPT." },
        { name: "Pitching & Q&A", desc: "Each team gets 5 minutes for pitching and 3 minutes for Q&A per round." }
      ],
      rules: [
        "Teams must register in advance.",
        "Teams of 2–3 members only are eligible.",
        "Final deliverable is a solution pitch and PPT.",
        "Strict time limits will be enforced.",
        "Plagiarism or use of pre-prepared PPTs will result in disqualification.",
        "Judges' decision is final.",
        "A model can be brought before the competition starts for Round 1.",
        "The contest structure is a 2-hour challenge with Round 1, Round 2, and pitching/Q&A.",
        "Problem domains include sustainability, healthcare, smart cities, cybersecurity, education, and social impact."
      ]
    },
    {
      id: "pitch-a-product",
      number: "13",
      title: "PITCH THE PRODUCT",
      tagline: "Ideate, prototype, and pitch an innovative tech product that solves a real-world problem.",
      category: "Product Innovation",
      badge: "Product Arena",
      teamSize: "1-2 Members",
      duration: "2-Round Product Challenge",
      venue: "Seminar Hall",
      prize: "Trophy, Certificates & Mentorship",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5-5 18-4-8-9-5Z"/><path d="m12 16 4-4"/></svg>`,
      description: "PITCH THE PRODUCT is a fast-paced product innovation event where participants ideate, prototype, and pitch technology products that address real-world problems. It combines creativity, business sense, technology, user empathy, and the startup mindset while developing skills in product design, wireframing, prototyping, market analysis, and pitching.",
      eventHeads: [
        { name: "Umesh", phone: "83105 35009" },
        { name: "Gagan", phone: "82961 34998" }
      ],
      rounds: [
        { name: "Round 1: Idea Blitz", desc: "Given a theme or problem statement such as Smart Campus, Sustainable Living, or AI for Everyone, identify a specific problem and propose an innovative product idea." },
        { name: "Round 1 Deliverables", desc: "Submit the product name and description, target users and pain points, and a basic feature list or MVP idea." },
        { name: "Round 2: Prototype & Pitch", desc: "Selected teams create a low-fidelity prototype or product concept using Figma, Canva, Adobe XD, hand-drawn wireframes, or another approved tool." },
        { name: "Round 2 Presentation", desc: "Present a 3–5 minute startup-style pitch covering the problem and solution, target audience and value proposition, product screens or flow, and an optional monetization or business angle." }
      ],
      rules: [
        "The event is open to all students interested in technology, design, innovation, or entrepreneurship.",
        "Teams must have 1–2 members.",
        "The product idea must be original, clearly explained, and focused on a real user problem.",
        "Round 1 ideas are judged on Originality (30%), Relevance (20%), Feasibility (20%), and Impact (20%).",
        "Teams with copied or impractical ideas may be eliminated after Round 1.",
        "Round 2 judging covers Problem-Solution Fit (25%), Prototype Usability (25%), Market Potential (20%), Innovation (15%), and Pitch Quality (15%).",
        "Overall judging criteria are Innovation & Originality (25%), Problem-Solution Fit (20%), User-Centric Thinking (20%), Prototype or Design Quality (15%), and Clarity of Pitch (20%).",
        "Participants may use Figma, Adobe XD, Canva, PowerPoint, Google Slides, Prezi, pen and paper, Notion, or Miro.",
        "Prototypes may be low-fidelity and should communicate the product flow and user experience clearly.",
        "Participants should demonstrate product thinking, user needs, market understanding, and a feasible technology direction.",
        "The pitch must be completed within the time limit set by the organizers.",
        "Copied work, plagiarism, or misrepresentation of another participant's product will result in disqualification.",
        "Judges' decisions are final and binding.",
        "The winner receives a trophy, certificate, and a startup mentorship session if available.",
        "The runner-up receives a certificate and startup goodies or merchandise.",
        "Special awards may be given for Best Innovation, Best Pitch, and Best UI.",
        "All finalists receive a Certificate of Excellence.",
        "Participants are expected to leave with a concrete product idea, prototype, and improved confidence in user-centric thinking and pitching."
      ]
    },
    {
      id: "paper-presentation",
      number: "14",
      title: "PAPER PRESENTATION",
      tagline: "Research, present, and communicate your ideas with clarity and impact.",
      category: "Research & Communication",
      badge: "Research Forum",
      teamSize: "1-2 Members",
      duration: "10–12 Minute Presentation",
      venue: "Seminar Hall",
      prize: "₹2,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 7h8M8 11h8"/></svg>`,
      description: "Each participant can present individually or in a team of two members. Participants must register before the deadline and present original or published work without plagiarism, while ensuring that published papers are properly edited and customized for the event format.",
      eventHeads: [
        { name: "Yuvaraj", phone: "96324 62720" }
      ],
      rounds: [
        { name: "Registration & Abstract Submission", desc: "Submit the title and abstract at the time of registration and confirm participation before the deadline." },
        { name: "Presentation Preparation", desc: "Prepare the final PPT and document before the event begins." },
        { name: "Presentation & Q&A", desc: "Each team will get 10–12 minutes for presentation followed by 3 minutes for Q&A." }
      ],
      rules: [
        "Each participant can present individually or in a team of two members.",
        "Participants must register before the deadline to confirm their participation.",
        "The paper title and abstract must be submitted at the time of registration.",
        "The final presentation (PPT) and document must be submitted before the event starts.",
        "Participants can present papers that are already published or original works, but plagiarism is not allowed.",
        "The paper will not be published as part of the event proceedings; it is only for presentation purposes.",
        "If participants are presenting a published paper, it must be authored by them and properly edited or customized to suit the presentation format of the event.",
        "Each team will get 10–12 minutes for the presentation followed by 3 minutes for Q&A.",
        "Presentations must be prepared in Microsoft PowerPoint (PPT) format.",
        "The PPT should include the title slide, abstract, introduction, objective, methodology, results, conclusion, and future scope.",
        "Participants must ensure clarity, conciseness, and time management during the presentation.",
        "Technical issues like format errors or missing files are the participant's responsibility.",
        "The decision of the judges will be final and binding.",
        "E-certificates will be given to all participants, and winners will be awarded.",
        "Any misconduct or plagiarism will lead to immediate disqualification."
      ]
    },
    {
      id: "prompt-wars",
      number: "15",
      title: "PROMPT WARS",
      tagline: "Craft sharper prompts, unlock better outputs, and outthink the competition.",
      category: "AI & Prompt Engineering",
      badge: "AI Arena",
      teamSize: "Individual or 2 Members",
      duration: "Multiple Timed Rounds",
      venue: "CS Labs",
      prize: "₹2,000",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>`,
      description: "Prompt Wars is an AI-based challenge where participants compete by creating effective, creative, and precise prompts to generate the required output.",
      eventHeads: [
        { name: "Bhanupriya", phone: "90086 40631" },
        { name: "Varshini", phone: "91644 99954" }
      ],
      rounds: [
        { name: "Round Tasks", desc: "Each round tests a different prompting skill through a specific task, theme, or problem statement." },
        { name: "Timed Prompting", desc: "Understand the task, create your prompt, and generate the required output within the fixed time limit." },
        { name: "Prompt Refinement", desc: "Modify or refine prompts only within the time limit provided for that round." },
        { name: "Output Format", desc: "Submit the required text, image, code, or other AI-generated output format specified by the organizers." },
        { name: "Final Submission", desc: "Submit the final prompt and corresponding AI-generated output as instructed before the submission time ends." },
        { name: "Evaluation", desc: "Submissions are judged on relevance, prompt quality, creativity, output quality, problem solving, and time management." }
      ],
      rules: [
        "GENERAL RULE: Participants may compete individually or in a team of two members.",
        "GENERAL RULE: Participants must complete all tasks within the time limit specified by the organizers.",
        "GENERAL RULE: The AI tools and platforms permitted for the competition will be announced by the organizers.",
        "GENERAL RULE: Participants must use their own prompts and approaches. Copying prompts or submissions from other participants is strictly prohibited.",
        "GENERAL RULE: Participants must follow the instructions provided for each round.",
        "GENERAL RULE: Offensive, inappropriate, harmful, or unethical content is strictly prohibited.",
        "SUBMISSION: The submitted prompt must be created during the competition unless otherwise specified.",
        "SUBMISSION: Pre-written prompts, prompt templates, or previously generated outputs must not be used unless explicitly permitted.",
        "SUBMISSION: Prompts must not be copied, shared, or exchanged with other participants during the competition.",
        "SUBMISSION: Each submission must clearly identify the participant or team as instructed.",
        "RESTRICTION: Participants must not use unfair means or attempt to manipulate the judging process.",
        "RESTRICTION: Participants must not interfere with another participant's device, account, prompt, or submission.",
        "RESTRICTION: Sharing prompts or answers with other participants during an active round is not allowed.",
        "RESTRICTION: Exploiting technical loopholes or competition systems may result in disqualification.",
        "RESTRICTION: Plagiarism, impersonation, or submission of another participant's work will lead to immediate disqualification.",
        "TECHNICAL: Participants are responsible for ensuring that their device, internet connection, and required accounts are working properly.",
        "TECHNICAL: Participants must use only the AI tools and resources permitted by the organizers.",
        "TECHNICAL: Issues caused by the participant's device, internet connection, or account are generally the participant's responsibility.",
        "TECHNICAL: Participants must save their prompts and outputs regularly to avoid loss of work.",
        "EVALUATION: Relevance means how accurately the output satisfies the given task.",
        "EVALUATION: Prompt quality covers clarity, structure, specificity, and effectiveness.",
        "EVALUATION: Creativity is judged on originality and uniqueness of the approach.",
        "EVALUATION: Output quality covers accuracy, usefulness, and overall quality of the generated result.",
        "EVALUATION: Problem solving measures how effectively the participant uses prompting to overcome the given challenge.",
        "EVALUATION: Time management includes completion and submission within the allotted time.",
        "FINAL DECISION: The decision of the judges will be final and binding.",
        "FINAL DECISION: In case of a tie, an additional challenge or tie-breaker round may be conducted.",
        "FINAL DECISION: The organizers may modify the competition format or rules if required.",
        "FINAL DECISION: Misconduct, plagiarism, cheating, or violation of the rules may result in immediate disqualification.",
        "FINAL DECISION: E-certificates will be provided to participants, and prizes and certificates will be awarded to the winners."
      ]
    }
  ],

  schedule: [
    {
      day: "Tuesday, October 27, 2026",
      items: [
        { time: "09:00 AM - 10:30 AM", title: "Inauguration Ceremony & Keynote Address", venue: "Main Auditorium" },
        { time: "01:30 PM - 02:30 PM", title: "Networking Lunch Break & Tech Expo", venue: "Food & Innovation Court" },
        { time: "02:00 PM - 03:00 PM", title: "Lunch & Live Project Demonstrations", venue: "Innovation Foyer" },
        { time: "03:00 PM - 04:00 PM", title: "Valedictory & Grand Prize Distribution", venue: "Main Auditorium" }
      ]
    }
  ],

  faqs: [
    {
      q: "Who is eligible to participate in TECHNOVANZA 2026?",
      a: "TECHNOVANZA 2026 is open to all registered students currently enrolled in any Undergraduate or Postgraduate program across any accredited college or university. All academic streams and branches are welcome!"
    },
    {
      q: "Is there any registration fee?",
      a: "No! Registration is completely free for all events, proudly organized and supported by the Department of Computer Science."
    },
    {
      q: "Can I participate in multiple events?",
      a: "Yes, you can register for multiple events as long as their competitive time slots do not overlap according to the published schedule."
    },
    {
      q: "Will participants receive certificates?",
      a: "Yes! All verified attendees who compete in events will receive official Certificates of Participation. Winners and runners-up will receive Certificates of Merit along with cash prizes and trophies."
    },
    {
      q: "What should I bring to the event?",
      a: "Please bring your valid College ID card, your TECHNOVANZA Digital Delegate Pass (generated upon registration), and your personal laptop with chargers for coding and debugging events."
    }
  ]
};

const requestedEventOrder = [
  "debugging",
  "ui-ux-designing",
  "it-quiz",
  "hackathon",
  "pitch-a-product",
  "paper-presentation",
  "debate",
  "posterpunk",
  "best-manager",
  "prompt-wars",
  "bgmi",
  "free-fire",
  "treasure-hunt",
  "ipl-auction"
];

FEST_CONFIG.events = requestedEventOrder.map((eventId, index) => {
  const event = FEST_CONFIG.events.find(existingEvent => existingEvent.id === eventId);
  if (event) event.number = String(index + 1).padStart(2, "0");
  return event;
}).filter(Boolean);

// Freeze configuration to prevent accidental mutations
if (typeof Object.freeze === "function") {
  Object.freeze(FEST_CONFIG);
}
