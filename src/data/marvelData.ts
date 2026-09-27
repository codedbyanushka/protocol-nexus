import { Track, ScheduleItem, Mentor, Prize, HeroClass } from '../types';

export const MARVEL_TRACKS: Track[] = [
  {
    id: 'stark-ai',
    title: 'Stark Tech Initiative',
    heroCodename: 'IRON MAN',
    tagline: 'Autonomous AI, Multimodal Agents & Neural Perception',
    description: 'Channel Tony Stark’s relentless engineering ethos. Architect intelligent systems, real-time computer vision agents, autonomous problem-solvers, and generative AI interfaces capable of defending Earth against data chaos.',
    themeColor: 'from-red-900/40 via-red-950/20 to-black',
    accentBorder: 'border-red-500/40 hover:border-red-400',
    iconName: 'Cpu',
    bounty: '₹40,000',
    problemStatements: [
      'Autonomous disaster response coordination agent using multimodal satellite & drone feeds',
      'Real-time edge computer vision for high-speed industrial anomaly detection',
      'Personalized adaptive cognitive assistant with localized zero-latency inference'
    ],
    techStack: ['PyTorch', 'LangChain', 'OpenCV', 'TensorFlow', 'FastAPI', 'Next.js']
  },
  {
    id: 'quantum-web3',
    title: 'Quantum Realm Protocol',
    heroCodename: 'ANT-MAN & THE WASP',
    tagline: 'Decentralized Networks, Zero-Knowledge & Cryptography',
    description: 'Traverse the microscopic sub-atomic realm where traditional rules collapse. Build tamper-proof decentralized systems, zero-knowledge verification pipelines, and quantum-resistant cryptographic tools for the next internet.',
    themeColor: 'from-amber-900/40 via-yellow-950/20 to-black',
    accentBorder: 'border-amber-500/40 hover:border-amber-400',
    iconName: 'Layers',
    bounty: '₹35,000',
    problemStatements: [
      'Zero-knowledge proof-of-credentials for privacy-preserving academic and defense verification',
      'Fault-tolerant decentralized storage protocol with Byzantine consensus',
      'Cross-chain liquidity bridge with automated smart-contract formal verification'
    ],
    techStack: ['Solidity', 'Rust', 'Ethers.js', 'ZK-Snarks', 'IPFS', 'Substrate']
  },
  {
    id: 'shield-cyber',
    title: 'S.H.I.E.L.D. Cyberdefense',
    heroCodename: 'NICK FURY & BLACK WIDOW',
    tagline: 'Zero-Trust Architectures, Threat Intel & Cloud Fortress',
    description: 'Level 7 clearance only. Design bulletproof infrastructure defenses, automated penetration testing engines, sovereign identity bastions, and cloud resilience pipelines that neutralize adversarial infiltration in real time.',
    themeColor: 'from-cyan-950/50 via-slate-950/30 to-black',
    accentBorder: 'border-cyan-500/40 hover:border-cyan-400',
    iconName: 'ShieldCheck',
    bounty: '₹35,000',
    problemStatements: [
      'Proactive AI-powered malware behavior emulator and real-time sandbox containment',
      'Automated zero-trust microsegmentation policy engine for multi-cloud clusters',
      'Phishing campaign reconnaissance tracker using distributed telemetry traps'
    ],
    techStack: ['Go', 'eBPF', 'Docker', 'Kubernetes', 'Python', 'Wazuh', 'Terraform']
  },
  {
    id: 'wakanda-iot',
    title: 'Wakanda Innovation Lab',
    heroCodename: 'SHURI & BLACK PANTHER',
    tagline: 'Vibranium Hardware, Embedded IoT, Clean Energy & Healthcare',
    description: 'Harness the vibranium-level ingenuity of the Wakandan Design Group. Fuse embedded microcontrollers, edge sensors, biomedical diagnostics, and sustainable green technology to engineer hardware solutions that elevate humanity.',
    themeColor: 'from-purple-950/50 via-violet-950/20 to-black',
    accentBorder: 'border-purple-500/40 hover:border-purple-400',
    iconName: 'Sparkles',
    bounty: '₹40,000',
    problemStatements: [
      'Affordable non-invasive vital signs diagnostic wearable with on-device health telemetry',
      'Intelligent microgrid load balancer for university campus clean energy distribution',
      'Sensor-integrated precision agricultural robot with solar-autonomous navigation'
    ],
    techStack: ['ESP32', 'Raspberry Pi', 'C++', 'MQTT', 'TensorFlow Lite', 'Node-RED']
  }
];

export const HERO_CLASSES: HeroClass[] = [
  {
    id: 'web-slinger',
    name: 'Frontend Web-Slinger',
    alias: 'Spider-Man',
    suitColor: '#ec1d24',
    specialty: 'Interactive UI, Fluid Animations & Responsive Design',
    description: 'Uncanny reflexes with React, Tailwind, and canvas shaders. Masters the human interface layer so that users feel like they are piloting an Avengers dashboard.',
    stats: { frontend: 98, backend: 62, ai: 55, security: 50, stamina: 95 }
  },
  {
    id: 'iron-architect',
    name: 'Systems Armored Core',
    alias: 'Iron Man',
    suitColor: '#f59e0b',
    specialty: 'Distributed Backends, LLM Pipelines & High Concurrency',
    description: 'Arc reactor energy applied to database indexing, asynchronous messaging queues, and cutting-edge agentic inference engines that scale effortlessly.',
    stats: { frontend: 65, backend: 98, ai: 96, security: 80, stamina: 90 }
  },
  {
    id: 'vibranium-sentinel',
    name: 'Vibranium Guardian',
    alias: 'Black Panther',
    suitColor: '#a855f7',
    specialty: 'Zero-Trust Security, Cryptography & Smart Contracts',
    description: 'Impenetrable defense protocols. Writes audited code, bulletproof authentication mechanisms, and tamper-resistant cryptographic primitives.',
    stats: { frontend: 50, backend: 88, ai: 70, security: 99, stamina: 92 }
  },
  {
    id: 'mystic-coder',
    name: 'Master of Mystic Algorithms',
    alias: 'Doctor Strange',
    suitColor: '#00f0ff',
    specialty: 'Algorithmic Optimization, Graph Theory & Math Modeling',
    description: 'Bends mathematical dimensions. Solves complex NP-hard graph traversals, neural matrix computations, and dynamic programming paradoxes before breakfast.',
    stats: { frontend: 60, backend: 90, ai: 92, security: 75, stamina: 88 }
  },
  {
    id: 'asgardian-ops',
    name: 'God of Cloud Compute',
    alias: 'Thor',
    suitColor: '#38bdf8',
    specialty: 'Cloud Infrastructure, Containers & High-Throughput DevOps',
    description: 'Summons thunderous computing clusters. Orchestrates Kubernetes pods, automated CI/CD pipelines, and high-availability disaster recovery configurations.',
    stats: { frontend: 45, backend: 92, ai: 68, security: 88, stamina: 100 }
  }
];

export const PRIZES: Prize[] = [
  {
    id: 'champion',
    rank: '01',
    title: 'Supreme Multiverse Champions',
    bountyAmount: '₹60,000',
    trophyName: 'The Infinity Gauntlet Grand Trophy',
    perks: [
      'Cash Bounty of ₹60,000',
      'The Infinity Gauntlet Custom Championship Trophy',
      'Exclusive Bennett Incubation Lab Fast-Track & Mentorship',
      'Direct Interview Rounds with Stark Tech Tier Sponsors',
      'Official Marvel × GFG Bennett Commemorative Collector Kit'
    ],
    badgeColor: 'border-amber-400 text-amber-300',
    glowClass: 'shadow-[0_0_40px_rgba(245,158,11,0.25)]'
  },
  {
    id: 'runner-up',
    rank: '02',
    title: 'First Runner-Up Super-Squad',
    bountyAmount: '₹35,000',
    trophyName: 'Vibranium Shield Plaque',
    perks: [
      'Cash Bounty of ₹35,000',
      'Custom Engraved Vibranium Alloy Honor Plaque',
      'Cloud Compute Credits worth $1,500',
      'Stark Industries Developer Swag Box',
      'Direct Entry to GFG Bennett Student Core Mentorship'
    ],
    badgeColor: 'border-cyan-400 text-cyan-300',
    glowClass: 'shadow-[0_0_30px_rgba(0,240,255,0.2)]'
  },
  {
    id: 'second-runner-up',
    rank: '03',
    title: 'Second Runner-Up Super-Squad',
    bountyAmount: '₹20,000',
    trophyName: 'Arc Reactor Medallion',
    perks: [
      'Cash Bounty of ₹20,000',
      'Illuminated Arc Reactor Medallions for all team members',
      'Cloud Compute Credits worth $800',
      'Stark Developer Backpacks & Merchandise',
      'Certificate of Excellence with National Credential'
    ],
    badgeColor: 'border-red-400 text-red-300',
    glowClass: 'shadow-[0_0_30px_rgba(236,29,36,0.2)]'
  }
];

export const CATEGORY_AWARDS = [
  {
    title: 'Best All-Women Super-Squad',
    bounty: '₹15,000',
    hero: 'Captain Marvel Award',
    description: 'Awarded to the top-scoring team led by women technologists breaking boundaries.'
  },
  {
    title: 'Best Fresher Innovators',
    bounty: '₹10,000',
    hero: 'Young Avengers Citation',
    description: 'Recognizing first-year undergraduate innovators exhibiting extraordinary grit and design sense.'
  },
  {
    title: 'Best UI/UX & Cinematic Experience',
    bounty: '₹10,000',
    hero: 'Stan Lee Creative Vision Award',
    description: 'Given to the team whose front-end execution delivers unparalleled storytelling, fluidity, and polish.'
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: 'sch-1',
    time: '08:30 AM · Day 1',
    phase: 'Phase 1 · Genesis',
    day: 'Day 1 · Saturday',
    title: 'Assemble at Base: Check-In & Superhero Pass Verification',
    description: 'Collect your Stark lanyard, biometric badge, holographic stickers, and breakfast energy pods.',
    location: 'Dr. APJ Abdul Kalam Auditorium Foyer',
    type: 'ceremony'
  },
  {
    id: 'sch-2',
    time: '10:00 AM · Day 1',
    phase: 'Phase 1 · Genesis',
    day: 'Day 1 · Saturday',
    title: 'The Initiative Briefing: Opening Keynote & Track Reveal',
    description: 'Address by GFG Bennett Leadership and Industry Guests. Formal release of problem statements across all 4 tracks.',
    location: 'Main Auditorium, Bennett University',
    type: 'keynote'
  },
  {
    id: 'sch-3',
    time: '11:00 AM · Day 1',
    phase: 'Phase 1 · Genesis',
    day: 'Day 1 · Saturday',
    title: 'Hacking Commences: 36-Hour Protocol Activation',
    description: 'The countdown clock initiates. Teams claim workstation pods, connect to gigabit fiber, and initialize repos.',
    location: 'Supercomputer Labs & Innovation Blocks',
    type: 'hack'
  },
  {
    id: 'sch-4',
    time: '04:00 PM · Day 1',
    phase: 'Phase 2 · Quantum Sprint',
    day: 'Day 1 · Saturday',
    title: 'Mentorship Checkpoint 1: S.H.I.E.L.D. Architecture Review',
    description: 'Super-mentors visit each pod to stress-test your system design, APIs, and ensure clear trajectory.',
    location: 'Team Pods',
    type: 'review'
  },
  {
    id: 'sch-5',
    time: '11:30 PM · Day 1',
    phase: 'Phase 2 · Quantum Sprint',
    day: 'Day 1 · Saturday',
    title: 'Midnight Multiverse Jam: Caffeine Rush & Pizza Blitz',
    description: 'High-energy midnight snacks, red bull replenishment, acoustic jam sessions, and quick Marvel trivia showdown.',
    location: 'Student Activity Center',
    type: 'food'
  },
  {
    id: 'sch-6',
    time: '03:00 AM · Day 2',
    phase: 'Phase 2 · Quantum Sprint',
    day: 'Day 2 · Sunday',
    title: 'The Dark Dimension: Flash Code Challenges & Swag Drop',
    description: 'Optional 20-minute algorithmic sprint for instant Marvel merchandise and cloud vouchers.',
    location: 'Online / Arena Terminal',
    type: 'hack'
  },
  {
    id: 'sch-7',
    time: '09:00 AM · Day 2',
    phase: 'Phase 2 · Quantum Sprint',
    day: 'Day 2 · Sunday',
    title: 'Mentorship Checkpoint 2: Final Sprint & Pitch Polish',
    description: 'Guidance on pitch storytelling, live demos, and handling rigorous edge-case interrogations.',
    location: 'Team Pods',
    type: 'review'
  },
  {
    id: 'sch-8',
    time: '01:00 PM · Day 2',
    phase: 'Phase 3 · The Endgame',
    day: 'Day 2 · Sunday',
    title: 'Code Freeze: Git Repository Lockdown',
    description: 'All commits pushed. Project pages submitted to portal. Late commits result in penalty points.',
    location: 'Portal Lockdown',
    type: 'hack'
  },
  {
    id: 'sch-9',
    time: '02:00 PM · Day 2',
    phase: 'Phase 3 · The Endgame',
    day: 'Day 2 · Sunday',
    title: 'The Grand Showcase: Top 10 Finalists Pitching Arena',
    description: 'Finalists present on the main auditorium stage before the Grand Jury and 500+ assembled attendees.',
    location: 'Main Auditorium',
    type: 'keynote'
  },
  {
    id: 'sch-10',
    time: '05:00 PM · Day 2',
    phase: 'Phase 3 · The Endgame',
    day: 'Day 2 · Sunday',
    title: 'Victory Gala & Infinity Trophy Award Ceremony',
    description: 'Declaration of Champions, distribution of ₹1,50,000+ bounty pool, and official closing remarks.',
    location: 'Main Auditorium',
    type: 'ceremony'
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Dr. Aarav Sharma',
    heroAlias: 'The AI Visionary',
    role: 'Professor of Neural Systems',
    organization: 'Bennett University (SCSET)',
    expertise: ['Large Language Models', 'Distributed Training', 'Computer Vision'],
    marvelInspiration: 'Iron Man / Stark Industries',
    avatarSeed: 'Aarav'
  },
  {
    id: 'mentor-2',
    name: 'Ananya Verma',
    heroAlias: 'The Cryptic Guardian',
    role: 'Principal Security Researcher',
    organization: 'Cloud Fortress Systems',
    expertise: ['Zero-Trust Architecture', 'eBPF', 'Kernel Hardening'],
    marvelInspiration: 'Black Widow / S.H.I.E.L.D.',
    avatarSeed: 'Ananya'
  },
  {
    id: 'mentor-3',
    name: 'Rohan Deshmukh',
    heroAlias: 'The Quantum Weaver',
    role: 'Lead Blockchain Architect',
    organization: 'Nexus Decentralized Labs',
    expertise: ['Zero-Knowledge Proofs', 'Smart Contract Audits', 'Rust'],
    marvelInspiration: 'Doctor Strange / Mystic Arts',
    avatarSeed: 'Rohan'
  },
  {
    id: 'mentor-4',
    name: 'Dr. Priya Nambiar',
    heroAlias: 'The Hardware Alchemist',
    role: 'Head of Embedded Robotics',
    organization: 'Bennett University Innovation Hub',
    expertise: ['Edge AI', 'IoT Sensor Networks', 'Clean Energy Tech'],
    marvelInspiration: 'Shuri / Wakanda Design Group',
    avatarSeed: 'Priya'
  }
];

export const FAQS = [
  {
    category: 'Eligibility & Squads',
    question: 'Who can register for PROTOCOL NEXUS?',
    answer: 'Any enrolled college undergraduate or postgraduate student across India is welcome to participate! Solo participants can register and assemble into squads of 2 to 4 members via our Squad Matching channels.'
  },
  {
    category: 'Cost & Logistics',
    question: 'Is there any registration fee for the hackathon?',
    answer: 'Zero fee! Participation in PROTOCOL NEXUS is 100% free of cost, courtesy of GeeksForGeeks Student Chapter, Bennett University, and our tech partners. Free food, 24/7 energy drinks, high-speed Wi-Fi, and rest pods are provided on campus.'
  },
  {
    category: 'Venue & Accommodation',
    question: 'Where is the event hosted? Is overnight stay provided?',
    answer: 'The event takes place at the Bennett University campus in Greater Noida (NCR). Safe, separate rest areas, shower facilities, and continuous medical support are provided inside the campus for the full 36-hour duration.'
  },
  {
    category: 'Intellectual Property',
    question: 'Who owns the intellectual property created during the hackathon?',
    answer: 'You and your team retain 100% full intellectual property ownership of whatever code, hardware, or concepts you build during the event.'
  },
  {
    category: 'Gear & Hardware',
    question: 'What equipment should we bring with us?',
    answer: 'Bring your laptop, chargers, extension cords, valid college ID, and any specialized hardware (microcontrollers, sensors, VR headsets) if you plan to hack in the Wakanda Innovation Lab track.'
  }
];

export const HIGHLIGHTS_METRICS = [
  { value: '₹1.5L+', label: 'Cash Bounty & Grants', subtitle: 'Guaranteed cash payouts & perks' },
  { value: '36 HRS', label: 'Continuous Code Sprint', subtitle: 'Non-stop hacking with energy pods' },
  { value: '500+', label: 'Shortlisted Engineers', subtitle: 'Top student minds nationwide' },
  { value: '100%', label: 'Free Registration', subtitle: 'Meals, swag & stay included' }
];
