import { useState } from 'react';
import { FAQS } from '../data/marvelData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { audioFx } from '../utils/audioFx';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    audioFx.playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#090c13]/50 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-tech text-red-500 uppercase tracking-widest font-semibold mb-2">
            <span>08</span>
            <span>·</span>
            <span>INTEL ARCHIVES</span>
            <span>·</span>
            <span>COMMON INQUIRIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            FREQUENTLY ASKED <span className="text-red-500">QUESTIONS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans mt-3">
            Everything you need to know about competing at PROTOCOL NEXUS, Bennett University.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-tech text-red-400 uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-tech font-bold text-white uppercase tracking-wide">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg bg-black/50 border border-slate-800 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-400 border-red-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-300 font-sans leading-relaxed border-t border-slate-800/60 bg-black/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Box */}
        <div className="mt-10 p-5 bg-slate-900/40 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <div className="text-sm font-tech font-bold text-white uppercase tracking-wide">
                Have a specialized inquiry or travel query?
              </div>
              <div className="text-xs text-slate-400 font-sans">
                Contact the GFG Bennett Technical Core team via Discord or email.
              </div>
            </div>
          </div>

          <a
            href="mailto:gfg@bennett.edu.in"
            onClick={() => audioFx.playClick()}
            className="clip-chamfer-button px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-tech text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            Direct Transmission
          </a>
        </div>
      </div>
    </section>
  );
}
