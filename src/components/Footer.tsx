import { Shield, Github, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { audioFx } from '../utils/audioFx';

export function Footer() {
  return (
    <footer className="bg-[#05070a] border-t border-slate-900 py-16 text-slate-400 relative overflow-hidden">
      {/* Subtle top red glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand & Organization */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-display text-white text-lg">
                PN
              </div>
              <span className="font-display text-2xl tracking-wider text-white">
                PROTOCOL <span className="text-red-500">NEXUS</span>
              </span>
            </div>

            <p className="text-sm font-sans text-slate-400 max-w-sm leading-relaxed">
              The flagship Marvel-themed hackathon organized by the <strong>GeeksForGeeks Student Chapter</strong> at <strong>Bennett University</strong>, Greater Noida. Uniting super-engineers to architect technological solutions for Earth-616.
            </p>

            <div className="flex items-center gap-2 text-xs font-tech text-slate-500">
              <Shield className="w-4 h-4 text-red-500" />
              <span>S.H.I.E.L.D. AUTHORIZED STUDENT INITIATIVE</span>
            </div>
          </div>

          {/* Directives & Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-tech text-xs uppercase tracking-widest text-white font-bold">
              Event Navigation
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a
                  href="#mission"
                  onClick={() => audioFx.playClick()}
                  className="hover:text-white transition-colors"
                >
                  Mission Statement
                </a>
              </li>
              <li>
                <a
                  href="#tracks"
                  onClick={() => audioFx.playClick()}
                  className="hover:text-white transition-colors"
                >
                  Multiverse Tracks
                </a>
              </li>
              <li>
                <a
                  href="#squads"
                  onClick={() => audioFx.playClick()}
                  className="hover:text-white transition-colors"
                >
                  Squad Role Matrix
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  onClick={() => audioFx.playClick()}
                  className="hover:text-white transition-colors"
                >
                  ₹1.5L+ Bounty Vault
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  onClick={() => audioFx.playClick()}
                  className="hover:text-white transition-colors"
                >
                  36-Hour Timeline
                </a>
              </li>
              <li>
                <a
                  href="#venue"
                  onClick={() => audioFx.playClick()}
                  className="hover:text-white transition-colors"
                >
                  Bennett Campus Venue
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-tech text-xs uppercase tracking-widest text-white font-bold">
              Connect With GFG Bennett
            </h4>
            <p className="text-sm font-sans text-slate-400 leading-relaxed">
              Stay synchronized with live hackathon updates, mentor office hours, and prize announcements.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioFx.playClick()}
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioFx.playClick()}
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioFx.playClick()}
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioFx.playClick()}
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs font-tech text-slate-500">
              Inquiries: <span className="text-slate-300">gfg@bennett.edu.in</span>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500 text-center md:text-left">
          <div>
            © 2025 GeeksForGeeks Student Chapter, Bennett University. Designed for Junior Core Technical Selection.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>by the GFG Bennett Technical Team</span>
          </div>
        </div>

        <div className="mt-3 text-[11px] text-slate-600 text-center leading-relaxed">
          Disclaimer: Marvel characters, themes, and logos are inspirational tributes created for educational, non-commercial hackathon purposes.
        </div>
      </div>
    </footer>
  );
}
