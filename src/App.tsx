import { useState, useEffect } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TracksSection } from './components/TracksSection';
import { HeroSquadBuilder } from './components/HeroSquadBuilder';
import { PrizesSection } from './components/PrizesSection';
import { ScheduleSection } from './components/ScheduleSection';
import { VenueSection } from './components/VenueSection';
import { MentorsSection } from './components/MentorsSection';
import { RegistrationPassSection } from './components/RegistrationPassSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { JarvisTerminalModal } from './components/JarvisTerminalModal';
import { audioFx } from './utils/audioFx';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedTrackId, setSelectedTrackId] = useState('stark-ai');
  const [selectedHeroClassId, setSelectedHeroClassId] = useState('web-slinger');

  // Shortcut Ctrl+J / Cmd+J to toggle Stark HUD Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        audioFx.playBeep();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScrollToRegistration = () => {
    const elem = document.getElementById('register');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTrack = (trackId: string) => {
    setSelectedTrackId(trackId);
    handleScrollToRegistration();
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Background Interactive Cosmic Canvas */}
      <CosmicBackground />

      {/* Top Bar Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onScrollToRegistration={handleScrollToRegistration}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onScrollToRegistration={handleScrollToRegistration}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        <TracksSection
          onSelectTrackForRegistration={handleSelectTrack}
        />

        <HeroSquadBuilder
          selectedHeroClassId={selectedHeroClassId}
          onSelectHeroClass={(heroId) => setSelectedHeroClassId(heroId)}
          onScrollToRegistration={handleScrollToRegistration}
        />

        <PrizesSection />

        <ScheduleSection />

        <VenueSection />

        <MentorsSection />

        <RegistrationPassSection
          initialTrackId={selectedTrackId}
          initialHeroClassId={selectedHeroClassId}
        />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Stark J.A.R.V.I.S. Command Terminal */}
      <JarvisTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onScrollToRegistration={handleScrollToRegistration}
      />
    </div>
  );
}
