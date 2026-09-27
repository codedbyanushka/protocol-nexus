import { useState } from 'react';
import { SCHEDULE_ITEMS } from '../data/marvelData';
import { Clock, MapPin, Sparkles } from 'lucide-react';
import { audioFx } from '../utils/audioFx';

export function ScheduleSection() {
  const [filterDay, setFilterDay] = useState<'All' | 'Day 1' | 'Day 2'>('All');

  const filteredItems = SCHEDULE_ITEMS.filter((item) => {
    if (filterDay === 'Day 1') return item.day.includes('Day 1');
    if (filterDay === 'Day 2') return item.day.includes('Day 2');
    return true;
  });

  return (
    <section id="timeline" className="py-20 md:py-28 relative bg-[#090c13]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-red-500 uppercase tracking-widest font-semibold mb-2">
              <span>04</span>
              <span>·</span>
              <span>TEMPORAL SEQUENCING</span>
              <span>·</span>
              <span>36-HOUR RUNBOOK</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              MULTIVERSE <span className="text-red-500">SCHEDULE</span>
            </h2>
          </div>

          {/* Day Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {(['All', 'Day 1', 'Day 2'] as const).map((day) => (
              <button
                key={day}
                onClick={() => {
                  audioFx.playClick();
                  setFilterDay(day);
                }}
                className={`px-4 py-1.5 text-xs font-tech font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  filterDay === day
                    ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(236,29,36,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {day === 'All' ? 'Full 36 Hours' : day === 'Day 1' ? 'Saturday · Genesis' : 'Sunday · Endgame'}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-slate-800/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                className="relative group bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl p-5 sm:p-6 transition-all duration-200"
              >
                {/* Node pin */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3 h-3 rounded-full bg-red-600 border-2 border-[#07090e] shadow-[0_0_8px_rgba(236,29,36,0.8)] group-hover:scale-125 transition-transform" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 font-semibold tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{item.time}</span>
                    <span>·</span>
                    <span className="text-slate-400">{item.phase}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-tech text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 font-sans mt-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-tech text-slate-400">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{item.day}</span>
                  </span>
                  <span className="uppercase text-slate-400 font-semibold">{item.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
