import { useState } from 'react';
import { HERO_CLASSES } from '../data/marvelData';
import { HeroClass } from '../types';
import { Shield, Sparkles, Zap, Check } from 'lucide-react';
import { audioFx } from '../utils/audioFx';

interface HeroSquadBuilderProps {
  selectedHeroClassId: string;
  onSelectHeroClass: (heroClassId: string) => void;
  onScrollToRegistration: () => void;
}

export function HeroSquadBuilder({
  selectedHeroClassId,
  onSelectHeroClass,
  onScrollToRegistration
}: HeroSquadBuilderProps) {
  const [activeTab, setActiveTab] = useState<HeroClass>(
    HERO_CLASSES.find((c) => c.id === selectedHeroClassId) || HERO_CLASSES[0]
  );

  const handleSelectRole = (heroClass: HeroClass) => {
    audioFx.playClick();
    setActiveTab(heroClass);
    onSelectHeroClass(heroClass.id);
  };

  const handleConfirmRole = () => {
    audioFx.playProtocolActivate();
    onSelectHeroClass(activeTab.id);
    onScrollToRegistration();
  };

  return (
    <section id="squads" className="py-20 md:py-28 relative bg-[#090c13]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-tech text-red-500 uppercase tracking-widest font-semibold mb-2">
            <span>02</span>
            <span>·</span>
            <span>SQUAD COMPOSITION MATRIX</span>
            <span>·</span>
            <span>AVENGERS ASSEMBLE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            DEFINE YOUR <span className="text-red-500">SUPERHERO ROLE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans mt-3">
            Every winning hackathon squad at Bennett University requires balanced firepower. Choose
            your operational specialty to imprint on your official Stark ID pass.
          </p>
        </div>

        {/* Hero Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {HERO_CLASSES.map((hero) => {
            const isSelected = activeTab.id === hero.id;
            return (
              <button
                key={hero.id}
                onClick={() => handleSelectRole(hero)}
                className={`px-4 py-2.5 rounded font-tech text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(236,29,36,0.5)] scale-105'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{hero.alias}</span>
                <span className="text-xs opacity-75 hidden sm:inline">({hero.name.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Hero Role Feature Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md">
          {/* Subtle colored ambient corner glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 blur-[100px] pointer-events-none opacity-20"
            style={{ backgroundColor: activeTab.suitColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Dossier */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-tech tracking-wider text-slate-400">
                <span className="text-red-400 font-bold uppercase">{activeTab.alias} ARCHETYPE</span>
                <span>·</span>
                <span>LEVEL 5 SPECIALIZATION</span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-wide">
                  {activeTab.name}
                </h3>
                <p className="text-sm font-tech text-cyan-300 font-semibold tracking-wide mt-1">
                  {activeTab.specialty}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {activeTab.description}
              </p>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleConfirmRole}
                  className="clip-chamfer-button px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-tech font-bold uppercase tracking-wider text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(236,29,36,0.3)] transition-all cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Equip Role on My Pass</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-tech text-slate-400">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>Squad synergy score: +24% boost</span>
                </div>
              </div>
            </div>

            {/* Right Column: Stat Bars */}
            <div className="lg:col-span-5 bg-black/60 border border-slate-800 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-tech uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Cognitive Combat Telemetry</span>
                </span>
                <span className="text-red-400 font-bold">MK-85 VERIFIED</span>
              </div>

              {Object.entries(activeTab.stats).map(([statKey, value]) => {
                const labelMap: Record<string, string> = {
                  frontend: 'Frontend & UX Alchemy',
                  backend: 'Core Systems & Distributed APIs',
                  ai: 'Neural & LLM Engineering',
                  security: 'Defensive Protocol & Cryptography',
                  stamina: '36-Hour Hackathon Endurance'
                };

                return (
                  <div key={statKey} className="space-y-1">
                    <div className="flex justify-between text-xs font-tech text-slate-300">
                      <span className="capitalize">{labelMap[statKey] || statKey}</span>
                      <span className="font-bold text-white tabular-nums">{value}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${value}%`,
                          backgroundColor:
                            value > 90
                              ? '#ec1d24'
                              : value > 75
                              ? '#00f0ff'
                              : '#a855f7'
                        }}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="pt-2 text-[11px] font-tech text-slate-500 flex items-center justify-between">
                <span>BENNETT UNIV GFG CHAPTER</span>
                <span className="flex items-center gap-1 text-cyan-400">
                  <Sparkles className="w-3 h-3" />
                  <span>SQUAD READY</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
