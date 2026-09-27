import { useState } from 'react';
import { MapPin, Navigation, Wifi, Coffee, Cpu, ShieldCheck } from 'lucide-react';
import { audioFx } from '../utils/audioFx';

// Generated campus image asset
import starkCampusImg from '../assets/images/stark_tower_campus_1790545948744.jpg';

export function VenueSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="venue" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-red-500 uppercase tracking-widest font-semibold mb-2">
              <span>05</span>
              <span>·</span>
              <span>HEADQUARTERS BASE OF OPERATIONS</span>
              <span>·</span>
              <span>CAMPUS INFRASTRUCTURE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              BENNETT <span className="text-red-500">UNIVERSITY</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md font-sans">
            Hosted at Bennett University (The Times Group), Greater Noida. A world-class 68-acre campus engineered with supercomputing clusters and high-voltage innovation hubs.
          </p>
        </div>

        {/* Hero Campus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative group rounded-xl overflow-hidden border border-slate-800 bg-black/80 aspect-16/9">
            {!imgError ? (
              <img
                src={starkCampusImg}
                alt="Bennett University Futuristic Stark Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 to-black text-center">
                <MapPin className="w-12 h-12 text-red-500 mb-2" />
                <span className="font-display text-2xl text-white">BENNETT UNIVERSITY CAMPUS</span>
                <span className="text-sm font-tech text-cyan-300">TechZone II, Greater Noida (NCR)</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs font-tech text-white">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold uppercase tracking-wider">
                  EARTH-616 HQ
                </span>
                <span className="text-slate-300">BENNETT UNIVERSITY · SCSET</span>
              </div>
              <span className="text-cyan-400">GREATER NOIDA (NCR)</span>
            </div>
          </div>

          {/* Infrastructure Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
                <h4 className="font-display text-lg text-white uppercase">
                  Supercomputing & AI Research Clusters
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                State-of-the-art NVIDIA GPU workstations with uninterrupted gigabit fiber connectivity and dual redundant power supply grids.
              </p>
            </div>

            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="w-5 h-5 text-amber-400 shrink-0" />
                <h4 className="font-display text-lg text-white uppercase">
                  24/7 Sustenance & Energy Pods
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Unlimited midnight snacks, brewed coffee, pizza surges, Red Bull stations, and dedicated quiet nap zones with strict campus security.
              </p>
            </div>

            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-red-400 shrink-0" />
                <h4 className="font-display text-lg text-white uppercase">
                  S.H.I.E.L.D. Level Security & Health
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                24/7 on-campus infirmary with ambulance standby, separate boys & girls resting quarters, and biometric-gated hall access.
              </p>
            </div>
          </div>
        </div>

        {/* Travel & Directions Strip */}
        <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider font-semibold">
              <Navigation className="w-4 h-4" />
              <span>Campus Transit Directive</span>
            </div>
            <p className="text-sm text-slate-300 font-sans">
              <strong>Location:</strong> Plot Nos 8-11, TechZone II, Greater Noida, Uttar Pradesh 201310.
              Complimentary campus shuttle buses operate from Pari Chowk & Knowledge Park II Metro Station throughout both days.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=Bennett+University+Greater+Noida"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioFx.playClick()}
            className="clip-chamfer-button px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-tech text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 border border-slate-700 transition-colors"
          >
            <span>Open in Google Maps</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
