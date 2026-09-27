import { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Zap, Shield, Sparkles } from 'lucide-react';
import { audioFx } from '../utils/audioFx';
import { HIGHLIGHTS_METRICS } from '../data/marvelData';

interface HeroSectionProps {
  onScrollToRegistration: () => void;
  onOpenTerminal: () => void;
}

export function HeroSection({ onScrollToRegistration, onOpenTerminal }: HeroSectionProps) {
  // Hackathon kickoff countdown (targeting October 18, 2025, 10:00 AM IST)
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 14,
    minutes: 42,
    seconds: 38
  });

  const [arcReactorPowered, setArcReactorPowered] = useState(false);
  const [powerLevel, setPowerLevel] = useState(100);

  useEffect(() => {
    const targetDate = new Date('2025-10-18T10:00:00+05:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChargeReactor = () => {
    audioFx.playRepulsor();
    setArcReactorPowered(true);
    setPowerLevel(prev => (prev >= 300 ? 100 : prev + 50));
    setTimeout(() => {
      setArcReactorPowered(false);
    }, 1200);
  };

  return (
    <section id="mission" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Halftone & Glow Grid */}
      <div className="absolute inset-0 bg-halftone opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-red-600/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Label */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-500/30 rounded text-red-400 text-xs font-tech font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
            <span>GeeksForGeeks Student Chapter</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-300">Bennett University</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-tech text-slate-400 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>EARTH-616 DIRECTIVE ACTIVE</span>
            <span>·</span>
            <span className="text-cyan-400">OCT 18–19, 2025</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tight text-white uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              PROTOCOL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-400">
                NEXUS
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed text-balance">
              The Multiverse code repository is fracturing. Join 500+ elite student engineers
              at Bennett University for a 36-hour cinematic hackathon. Harness Stark-grade AI,
              Quantum cryptography, S.H.I.E.L.D. defense ops, and Wakandan hardware to engineer
              solutions for humanity’s critical technological challenges.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  audioFx.playRepulsor();
                  onScrollToRegistration();
                }}
                className="clip-chamfer-button px-7 py-3.5 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-tech font-bold uppercase tracking-widest text-sm sm:text-base flex items-center gap-2.5 shadow-[0_0_25px_rgba(236,29,36,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 cursor-pointer"
              >
                <span>Assemble Squad</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  audioFx.playBeep();
                  onOpenTerminal();
                }}
                className="clip-chamfer-button px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 font-tech font-bold uppercase tracking-wider text-sm sm:text-base flex items-center gap-2.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Initialize Stark Terminal</span>
              </button>

              <a
                href="#tracks"
                onClick={() => audioFx.playClick()}
                className="text-xs sm:text-sm font-tech font-semibold tracking-wider text-slate-400 hover:text-white py-2 px-3 transition-colors flex items-center gap-1.5"
              >
                <span>View 4 Tracks</span>
                <span className="text-red-500">→</span>
              </a>
            </div>

            {/* Interactive Live Countdown Bar */}
            <div className="pt-4 max-w-xl">
              <div className="p-3.5 sm:p-4 bg-slate-900/80 border border-slate-800 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs font-tech uppercase tracking-wider text-slate-400 mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Countdown to Code Inception</span>
                  </span>
                  <span className="text-slate-500">Bennett Univ · Audis & Labs</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-black/50 border border-slate-800/80 rounded py-2 px-1">
                    <span className="block font-tech font-bold text-2xl sm:text-3xl text-white tabular-nums">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400">Days</span>
                  </div>

                  <div className="bg-black/50 border border-slate-800/80 rounded py-2 px-1">
                    <span className="block font-tech font-bold text-2xl sm:text-3xl text-white tabular-nums">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400">Hours</span>
                  </div>

                  <div className="bg-black/50 border border-slate-800/80 rounded py-2 px-1">
                    <span className="block font-tech font-bold text-2xl sm:text-3xl text-white tabular-nums">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-tech uppercase tracking-wider text-slate-400">Minutes</span>
                  </div>

                  <div className="bg-black/50 border border-slate-800/80 rounded py-2 px-1">
                    <span className="block font-tech font-bold text-2xl sm:text-3xl text-red-500 tabular-nums">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-tech uppercase tracking-wider text-red-400">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stark Arc Reactor Holographic Interactive Widget */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative group w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Outer rotating holographic rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-red-500/30 border-t-transparent animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border-2 border-slate-800" />

              {/* Glowing Core */}
              <button
                onClick={handleChargeReactor}
                title="Click to Charge Stark Arc Reactor"
                className={`relative z-10 w-40 h-40 rounded-full bg-radial from-cyan-400/30 via-slate-900 to-black border-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer p-4 group-hover:scale-105 ${
                  arcReactorPowered
                    ? 'border-cyan-300 shadow-[0_0_50px_rgba(0,240,255,0.8)] scale-110'
                    : 'border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.3)]'
                }`}
              >
                {/* Center Reactor Pattern */}
                <div className="w-16 h-16 rounded-full border border-cyan-300/60 bg-cyan-950/50 flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,240,255,0.5)]">
                  <Zap className={`w-8 h-8 ${arcReactorPowered ? 'text-white animate-bounce' : 'text-cyan-400 group-hover:text-cyan-200'}`} />
                </div>

                <div className="mt-2 font-tech text-xs tracking-wider text-cyan-300 font-semibold uppercase">
                  {arcReactorPowered ? 'DISCHARGING!' : 'ARC REACTOR'}
                </div>
                <div className="text-[10px] font-tech text-slate-400 tabular-nums">
                  OUTPUT: {powerLevel}%
                </div>
              </button>

              {/* Orbital nodes */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-tech text-slate-500 tracking-wider">
                MARK LXXXV CORE
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-tech text-cyan-400 tracking-wider">
                CLICK TO OVERCHARGE
              </div>
            </div>

            {/* Quick S.H.I.E.L.D. Badge */}
            <div className="mt-4 flex items-center gap-2 text-xs font-tech text-slate-400 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded">
              <Shield className="w-3.5 h-3.5 text-red-500" />
              <span>S.H.I.E.L.D. Level 7 Clearance Protocol Enabled</span>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Impact Highlights */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHTS_METRICS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-slate-900/40 border border-slate-800/80 rounded-lg relative overflow-hidden group hover:border-slate-700 transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent opacity-80" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display tracking-wide text-white tabular-nums group-hover:text-red-400 transition-colors">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-tech font-bold uppercase tracking-wider text-slate-200 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-sans">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
