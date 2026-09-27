import { MENTORS } from '../data/marvelData';
import { UserCheck, Shield } from 'lucide-react';
import { audioFx } from '../utils/audioFx';

export function MentorsSection() {
  return (
    <section className="py-20 md:py-28 relative bg-[#090c13]/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-tech text-red-500 uppercase tracking-widest font-semibold mb-2">
            <span>06</span>
            <span>·</span>
            <span>SUPER MENTOR INITIATIVE</span>
            <span>·</span>
            <span>INDUSTRY & FACULTY GIANTS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            LEARN FROM <span className="text-red-500">SUPER-MENTORS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans mt-3">
            Elite engineering leads and Bennett University research professors guiding your squad through code reviews, architectural roadblocks, and high-impact pitching.
          </p>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((mentor) => (
            <div
              key={mentor.id}
              onClick={() => audioFx.playClick()}
              className="group bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-tech text-slate-400 mb-4">
                  <span className="text-red-400 font-semibold">{mentor.heroAlias}</span>
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                </div>

                {/* Avatar Placeholder with Marvel Hero Theme */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950 border border-slate-800 flex items-center justify-center text-white font-display text-2xl mb-4 group-hover:scale-105 group-hover:border-red-500/50 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>

                <h3 className="font-display text-2xl text-white uppercase group-hover:text-red-400 transition-colors">
                  {mentor.name}
                </h3>
                <div className="text-xs font-tech text-cyan-300 font-medium mt-0.5">
                  {mentor.role}
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">
                  {mentor.organization}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-tech text-slate-500 uppercase tracking-wider">
                    Core Arsenal:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-tech text-slate-300 bg-black/50 border border-slate-800/80 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-tech text-slate-500 flex items-center justify-between">
                <span>INSPIRATION</span>
                <span className="text-slate-300">{mentor.marvelInspiration.split('/')[0]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-tech text-slate-400 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span>Guaranteed 1-on-1 Dedicated Pod Review for every registered team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
