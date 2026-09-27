import { useState } from 'react';
import { Cpu, Layers, ShieldCheck, Sparkles, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { MARVEL_TRACKS } from '../data/marvelData';
import { Track } from '../types';
import { audioFx } from '../utils/audioFx';

interface TracksSectionProps {
  onSelectTrackForRegistration: (trackId: string) => void;
}

export function TracksSection({ onSelectTrackForRegistration }: TracksSectionProps) {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-red-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      default:
        return <Cpu className="w-6 h-6 text-red-400" />;
    }
  };

  return (
    <section id="tracks" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-red-500 uppercase tracking-widest font-semibold mb-2">
              <span>01</span>
              <span>·</span>
              <span>MULTIVERSE DIVISIONS</span>
              <span>·</span>
              <span>CHOOSE YOUR ARENA</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              THE 4 HACKATHON <span className="text-red-500">TRACKS</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md font-sans">
            Every track represents a vital domain of modern engineering. Teams can register under
            one primary track or explore cross-disciplinary innovations.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {MARVEL_TRACKS.map((track, idx) => {
            // Asymmetric spanning: Stark AI & Wakanda get 7 and 5 column spans
            const colSpan = idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={track.id}
                onClick={() => {
                  audioFx.playClick();
                  setSelectedTrack(track);
                }}
                className={`${colSpan} group relative bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden`}
              >
                {/* Subtle top indicator bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.themeColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Top metadata line without pill badges */}
                  <div className="flex items-center justify-between gap-3 text-xs font-tech tracking-wider text-slate-400 mb-4">
                    <span className="text-red-400 font-semibold">{track.heroCodename}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-white font-tech font-bold tabular-nums">BOUNTY: {track.bounty}</span>
                    <span className="ml-auto text-slate-500 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-black/60 border border-slate-800">
                      {getIcon(track.iconName)}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                      {track.title}
                    </h3>
                  </div>

                  <p className="text-sm font-tech text-cyan-300/90 font-medium mb-3">
                    {track.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {track.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-tech text-slate-400 uppercase tracking-wider mb-2">
                    Core Arsenal:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {track.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-tech text-slate-300 bg-black/40 border border-slate-800 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-tech text-slate-400">
                    <span className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1">
                      <span>Inspect Problem Statements</span>
                      <span>→</span>
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        audioFx.playRepulsor();
                        onSelectTrackForRegistration(track.id);
                      }}
                      className="px-3 py-1 bg-red-600/90 hover:bg-red-500 text-white rounded font-tech text-xs uppercase tracking-wider transition-colors"
                    >
                      Select Track
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Track Inspection Modal */}
      {selectedTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0c1017] border border-slate-700 rounded-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <button
              onClick={() => {
                audioFx.playClick();
                setSelectedTrack(null);
              }}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-wider text-red-400 mb-2">
              <span>{selectedTrack.heroCodename}</span>
              <span>·</span>
              <span>TRACK DOSSIER</span>
              <span>·</span>
              <span className="text-white font-bold tabular-nums">BOUNTY: {selectedTrack.bounty}</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase mb-2">
              {selectedTrack.title}
            </h3>

            <p className="text-sm font-tech text-cyan-300 font-medium mb-4">
              {selectedTrack.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
              {selectedTrack.description}
            </p>

            <div className="space-y-4">
              <div className="text-xs font-tech font-bold uppercase tracking-wider text-slate-300">
                Sample Directive Challenges:
              </div>
              <div className="space-y-2.5">
                {selectedTrack.problemStatements.map((stmt, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-200 font-sans leading-relaxed">{stmt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-xs font-tech font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Recommended Tech Stack & Frameworks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTrack.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-tech text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedTrack(null)}
                className="px-4 py-2 text-xs font-tech text-slate-400 hover:text-white transition-colors"
              >
                Close Dossier
              </button>
              <button
                onClick={() => {
                  audioFx.playRepulsor();
                  onSelectTrackForRegistration(selectedTrack.id);
                  setSelectedTrack(null);
                }}
                className="clip-chamfer-button px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-tech font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Choose This Track for Registration
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
