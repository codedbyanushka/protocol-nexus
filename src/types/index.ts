export interface Track {
  id: string;
  title: string;
  heroCodename: string;
  tagline: string;
  description: string;
  themeColor: string; // Tailwind color class or hex
  accentBorder: string;
  iconName: string;
  problemStatements: string[];
  techStack: string[];
  bounty: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  phase: 'Phase 1 · Genesis' | 'Phase 2 · Quantum Sprint' | 'Phase 3 · The Endgame';
  day: 'Day 1 · Saturday' | 'Day 2 · Sunday';
  title: string;
  description: string;
  location: string;
  type: 'keynote' | 'hack' | 'food' | 'review' | 'ceremony';
}

export interface Mentor {
  id: string;
  name: string;
  heroAlias: string;
  role: string;
  organization: string;
  expertise: string[];
  marvelInspiration: string;
  avatarSeed: string;
}

export interface Prize {
  id: string;
  rank: string;
  title: string;
  bountyAmount: string;
  trophyName: string;
  perks: string[];
  badgeColor: string;
  glowClass: string;
}

export interface HeroClass {
  id: string;
  name: string;
  alias: string;
  suitColor: string;
  specialty: string;
  description: string;
  stats: {
    frontend: number;
    backend: number;
    ai: number;
    security: number;
    stamina: number;
  };
}

export interface RegistrationData {
  id: string;
  fullName: string;
  codename: string;
  email: string;
  college: string;
  rollNumber: string;
  teamName: string;
  teamSize: number;
  trackId: string;
  heroClassId: string;
  githubProfile: string;
  registeredAt: string;
  qrPayload: string;
}
