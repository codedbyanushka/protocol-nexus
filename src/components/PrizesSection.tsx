import { useState } from 'react';
import { Trophy, Award, Gift, CheckCircle } from 'lucide-react';
import { PRIZES, CATEGORY_AWARDS } from '../data/marvelData';
import { audioFx } from '../utils/audioFx';

// Generated image asset
import infinityTrophyImg from '../assets/images/infinity_trophy_tech_1790545961690.jpg';

export function PrizesSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="prizes" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-tech text-red-500 uppercase tracking-widest font-semibold mb-2">
            <span>03</span>
            <span>·</span>
            <span>THE ENDGAME VAULT</span>
            <span>·</span>
            <span>BOUNTIES & ACCOLADES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            ₹1,50,000+ <span className="text-red-500">PRIZE POOL</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans mt-3">
            Real cash bounties, custom-forged Marvel trophies, cloud compute grants, and direct incubation fast-tracks for the supreme squads.
          </p>
        </div>

        {/* Marquee Trophy Showcase + Podium */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Trophy Visual Card */}
          <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-black/80 border border-slate-800 mb-4">
              {!imageError ? (
                <img
                  src={infinityTrophyImg}
                  alt="The Infinity Gauntlet Championship Trophy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-amber-950/40 to-slate-950 text-center">
                  <Trophy className="w-12 h-12 text-amber-400 mb-2" />
                  <span className="font-display text-lg text-white">THE INFINITY GAUNTLET</span>
                  <span className="text-xs font-tech text-slate-400">Supreme Champion Trophy</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-tech text-white">
                <span className="font-bold text-amber-400">CUSTOM FORGED 2025</span>
                <span className="text-slate-400">BENNETT FAB-LAB</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-tech text-amber-400 uppercase tracking-wider font-semibold mb-1">
                <span>CHAMPIONSHIP SYMBOL</span>
              </div>
              <h3 className="font-display text-2xl text-white uppercase">
                The Infinity Gauntlet Trophy
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2 leading-relaxed">
                Forged with aircraft-grade titanium and embedded with multi-wavelength LED crystalline power nodes. Awarded exclusively to the Overall Grand Champions.
              </p>
            </div>
          </div>

          {/* Podium Tiers (1st, 2nd, 3rd) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRIZES.map((prize) => {
              const isFirst = prize.id === 'champion';
              return (
                <div
                  key={prize.id}
                  onClick={() => audioFx.playClick()}
                  className={`bg-slate-900/70 border rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 ${
                    isFirst
                      ? 'border-amber-500/50 shadow-[0_0_35px_rgba(245,158,11,0.15)] md:-translate-y-2'
                      : 'border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-tech tracking-wider text-slate-400 mb-3">
                      <span className="font-bold text-slate-300">RANK #{prize.rank}</span>
                      <span className={`px-2 py-0.5 rounded border text-[11px] font-tech font-bold uppercase ${prize.badgeColor}`}>
                        {isFirst ? 'GRAND WINNER' : `PODIUM ${prize.rank}`}
                      </span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-display text-white tracking-wide tabular-nums mb-1">
                      {prize.bountyAmount}
                    </div>

                    <h4 className="font-display text-lg text-slate-200 uppercase mb-3">
                      {prize.title}
                    </h4>

                    <div className="text-xs font-tech text-cyan-300 font-semibold mb-4">
                      {prize.trophyName}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      {prize.perks.map((perk, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-tech text-slate-400 flex items-center justify-between">
                    <span>GUARANTEED CASH</span>
                    <span className="text-slate-200 font-bold">100% TRANSPARENT</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Special Category Citations */}
        <div className="border-t border-slate-800/80 pt-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl text-white uppercase flex items-center gap-2">
              <Award className="w-6 h-6 text-red-500" />
              <span>Special Multiverse Citations & Micro-Bounties</span>
            </h3>
            <span className="text-xs font-tech text-slate-400 hidden sm:inline">
              STACKABLE WITH PODIUM PRIZES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CATEGORY_AWARDS.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-900/40 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-tech text-slate-400 mb-2">
                  <span className="text-red-400 font-semibold">{cat.hero}</span>
                  <span className="text-white font-bold tabular-nums">{cat.bounty}</span>
                </div>
                <h4 className="font-display text-lg text-white uppercase mb-1">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Participant Swag Guarantee */}
          <div className="mt-8 p-4 bg-gradient-to-r from-red-950/30 via-slate-900/60 to-cyan-950/30 border border-slate-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-slate-300">
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-red-400 shrink-0" />
              <span>
                <strong>All 500+ Assembled Participants</strong> receive official Marvel × GFG Bennett collector stickers, custom ID badges, meals, Red Bull cans, and verified certificates of participation.
              </span>
            </div>
            <span className="text-cyan-400 font-bold whitespace-nowrap">
              ZERO PARTICIPATION FEE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
