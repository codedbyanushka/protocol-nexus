import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Menu, X, ShieldAlert } from 'lucide-react';
import { audioFx } from '../utils/audioFx';

interface NavbarProps {
  onOpenTerminal: () => void;
  onScrollToRegistration: () => void;
}

export function Navbar({ onOpenTerminal, onScrollToRegistration }: NavbarProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMuted(audioFx.getMuted());
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const muted = audioFx.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Assemble', href: '#squads' },
    { label: 'Bounties', href: '#prizes' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Campus', href: '#venue' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#07090e]/95 via-[#07090e]/60 to-transparent border-b border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={() => audioFx.playClick()}
          className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          aria-label="Protocol Nexus Home"
        >
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-display text-lg tracking-wider text-white shadow-[0_0_12px_rgba(236,29,36,0.6)] group-hover:scale-105 transition-transform">
            PN
          </div>
          <span className="font-display text-2xl tracking-wider text-white">
            PROTOCOL <span className="text-red-500">NEXUS</span>
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => audioFx.playClick()}
              className="hover:text-red-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Stark Terminal Launcher */}
          <button
            onClick={() => {
              audioFx.playBeep();
              onOpenTerminal();
            }}
            title="Launch Stark HUD Terminal (Ctrl+J)"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-tech font-semibold tracking-wider text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 rounded hover:bg-cyan-900/40 hover:border-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tabular-nums">J.A.R.V.I.S. HUD</span>
          </button>

          {/* Audio FX Toggle */}
          <button
            onClick={handleToggleAudio}
            title={isMuted ? 'Unmute Stark HUD Sound FX' : 'Mute Stark HUD Sound FX'}
            className="p-2 text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label={isMuted ? 'Audio Muted' : 'Audio Active'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => {
              audioFx.playRepulsor();
              onScrollToRegistration();
            }}
            className="clip-chamfer-button px-4 sm:px-5 py-2 text-xs sm:text-sm font-tech font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:scale-95 transition-all shadow-[0_0_15px_rgba(236,29,36,0.4)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Assemble Squad
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              audioFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-slate-800 px-5 py-4 space-y-3">
          <div className="text-xs font-tech text-slate-500 uppercase tracking-widest pb-1 border-b border-slate-800/80 flex items-center justify-between">
            <span>Navigation Matrix</span>
            <span className="text-red-400">Earth-616</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  audioFx.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2">
            <button
              onClick={() => {
                audioFx.playBeep();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 py-2 text-xs font-tech text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 rounded flex items-center justify-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Launch J.A.R.V.I.S.</span>
            </button>
            <button
              onClick={() => {
                audioFx.playRepulsor();
                setMobileMenuOpen(false);
                onScrollToRegistration();
              }}
              className="flex-1 py-2 text-xs font-tech font-bold text-white bg-red-600 rounded flex items-center justify-center gap-1.5"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Register Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
