import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { MARVEL_TRACKS, HERO_CLASSES } from '../data/marvelData';
import { RegistrationData } from '../types';
import { audioFx } from '../utils/audioFx';
import { Shield, Sparkles, CheckCircle2, Download, Copy, Check, RotateCcw, QrCode } from 'lucide-react';

interface RegistrationPassSectionProps {
  initialTrackId?: string;
  initialHeroClassId?: string;
}

export function RegistrationPassSection({
  initialTrackId = 'stark-ai',
  initialHeroClassId = 'web-slinger'
}: RegistrationPassSectionProps) {
  const [formData, setFormData] = useState({
    fullName: 'Peter Parker',
    codename: 'Quantum-Spider',
    email: 'peter.parker@bennett.edu.in',
    college: 'Bennett University',
    rollNumber: 'E23CSEU0101',
    teamName: 'Web-Warriors',
    teamSize: 4,
    trackId: initialTrackId,
    heroClassId: initialHeroClassId,
    githubProfile: 'https://github.com/peterparker'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passId, setPassId] = useState('STARK-BNT-8492');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 3D Tilt state for the holographic card
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Update when props change
  useEffect(() => {
    if (initialTrackId) {
      setFormData((prev) => ({ ...prev, trackId: initialTrackId }));
    }
  }, [initialTrackId]);

  useEffect(() => {
    if (initialHeroClassId) {
      setFormData((prev) => ({ ...prev, heroClassId: initialHeroClassId }));
    }
  }, [initialHeroClassId]);

  // Check existing registration in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('marvel_registration_pass');
    if (saved) {
      try {
        const parsed: RegistrationData = JSON.parse(saved);
        setFormData({
          fullName: parsed.fullName,
          codename: parsed.codename,
          email: parsed.email,
          college: parsed.college,
          rollNumber: parsed.rollNumber,
          teamName: parsed.teamName,
          teamSize: parsed.teamSize,
          trackId: parsed.trackId,
          heroClassId: parsed.heroClassId,
          githubProfile: parsed.githubProfile
        });
        setPassId(parsed.id);
        setIsSubmitted(true);
      } catch {
        // Ignore
      }
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 12;
    const tiltY = (centerX - x) / 12;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.codename.trim()) newErrors.codename = 'Superhero Codename is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.college.trim()) newErrors.college = 'College/University name required';
    if (!formData.teamName.trim()) newErrors.teamName = 'Squad Team Name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      audioFx.playBeep();
      return;
    }

    const generatedId = `STARK-BNT-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassId(generatedId);

    const record: RegistrationData = {
      id: generatedId,
      fullName: formData.fullName,
      codename: formData.codename,
      email: formData.email,
      college: formData.college,
      rollNumber: formData.rollNumber || 'E24GEN9999',
      teamName: formData.teamName,
      teamSize: formData.teamSize,
      trackId: formData.trackId,
      heroClassId: formData.heroClassId,
      githubProfile: formData.githubProfile,
      registeredAt: new Date().toISOString(),
      qrPayload: `PROTOCOL-NEXUS-PASS:${generatedId}:${formData.teamName}:${formData.trackId}`
    };

    localStorage.setItem('marvel_registration_pass', JSON.stringify(record));
    setIsSubmitted(true);
    audioFx.playHeroicSuccess();

    // Trigger high-energy confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ec1d24', '#00f0ff', '#f59e0b', '#ffffff']
    });
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(passId);
    setCopied(true);
    audioFx.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    audioFx.playClick();
    window.print();
  };

  const handleResetPass = () => {
    audioFx.playClick();
    setIsSubmitted(false);
  };

  const currentTrack = MARVEL_TRACKS.find((t) => t.id === formData.trackId) || MARVEL_TRACKS[0];
  const currentHero = HERO_CLASSES.find((h) => h.id === formData.heroClassId) || HERO_CLASSES[0];

  return (
    <section id="register" className="py-20 md:py-28 relative bg-[#07090e] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-tech text-red-500 uppercase tracking-widest font-semibold mb-2">
            <span>07</span>
            <span>·</span>
            <span>REGISTRATION & CREDENTIAL FORGE</span>
            <span>·</span>
            <span>LEVEL 7 BADGE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            SECURE YOUR <span className="text-red-500">STARK EVENT PASS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans mt-3">
            Register your super-squad for PROTOCOL NEXUS. Your personalized holographic credential updates in real-time below.
          </p>
        </div>

        {/* 2-Column Layout: Form + Live Holographic Pass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Registration Form Column */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 backdrop-blur-md">
            {isSubmitted ? (
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center mx-auto text-red-400 shadow-[0_0_30px_rgba(236,29,36,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="font-display text-3xl text-white uppercase">
                    Security Clearance Verified!
                  </h3>
                  <p className="text-sm font-tech text-cyan-300 tracking-wider mt-1">
                    EARTH-616 INITIATIVE PROTOCOL GRANTED
                  </p>
                  <p className="text-sm text-slate-300 font-sans mt-3 max-w-md mx-auto">
                    Welcome to PROTOCOL NEXUS, <strong>{formData.fullName}</strong>. Team <strong>{formData.teamName}</strong> has been successfully registered under the <strong>{currentTrack.title}</strong> division at Bennett University.
                  </p>
                </div>

                <div className="p-4 bg-black/60 border border-slate-800 rounded-lg max-w-md mx-auto flex items-center justify-between text-xs font-tech">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Official Clearance Pass ID</span>
                    <span className="text-lg font-bold text-white tracking-wider tabular-nums">{passId}</span>
                  </div>

                  <button
                    onClick={handleCopyId}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy ID'}</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handlePrint}
                    className="clip-chamfer-button px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-tech font-bold uppercase tracking-wider text-xs flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(236,29,36,0.4)]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Print / Save Event Pass</span>
                  </button>

                  <button
                    onClick={handleResetPass}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded font-tech text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Update Squad Details</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-tech text-slate-400">
                  <span className="font-semibold text-white uppercase">Squad Commander Intel</span>
                  <span className="text-red-400">100% Free · Meals & Stay Included</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Tony Stark"
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                      Superhero Codename *
                    </label>
                    <input
                      type="text"
                      value={formData.codename}
                      onChange={(e) => setFormData({ ...formData, codename: e.target.value })}
                      placeholder="Arc-Reactor-99"
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                    />
                    {errors.codename && <p className="text-red-400 text-xs mt-1">{errors.codename}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                      Student Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tony@bennett.edu.in"
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                      College / University Name *
                    </label>
                    <input
                      type="text"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="Bennett University, Greater Noida"
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                    />
                    {errors.college && <p className="text-red-400 text-xs mt-1">{errors.college}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                      Squad / Team Name *
                    </label>
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="The Avengers"
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                    />
                    {errors.teamName && <p className="text-red-400 text-xs mt-1">{errors.teamName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                      Team Size (1-4)
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value={1}>1 (Solo Ranger)</option>
                      <option value={2}>2 Members</option>
                      <option value={3}>3 Members</option>
                      <option value={4}>4 (Full Squad)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                      Target Multiverse Track
                    </label>
                    <select
                      value={formData.trackId}
                      onChange={(e) => {
                        audioFx.playClick();
                        setFormData({ ...formData, trackId: e.target.value });
                      }}
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                    >
                      {MARVEL_TRACKS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title} ({t.heroCodename})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                      Superhero Specialty Role
                    </label>
                    <select
                      value={formData.heroClassId}
                      onChange={(e) => {
                        audioFx.playClick();
                        setFormData({ ...formData, heroClassId: e.target.value });
                      }}
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                    >
                      {HERO_CLASSES.map((h) => (
                        <option key={h.id} value={h.id}>
                          {h.alias} · {h.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1">
                    GitHub / Portfolio / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={formData.githubProfile}
                    onChange={(e) => setFormData({ ...formData, githubProfile: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-slate-800 focus:border-red-500 rounded text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="clip-chamfer-button w-full py-3.5 bg-red-600 hover:bg-red-500 active:scale-98 text-white font-tech font-bold uppercase tracking-widest text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(236,29,36,0.4)] transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Authorize Registration & Mint Pass</span>
                  </button>

                  <div className="mt-2 text-center text-[11px] font-tech text-slate-500">
                    By minting your pass you accept the Bennett University Hackathon Code of Conduct.
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Live Holographic Pass Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md perspective-1000">
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
                className="relative bg-gradient-to-b from-[#111724] via-[#0b0e14] to-[#07090e] border-2 border-red-500/60 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(236,29,36,0.2)] overflow-hidden"
              >
                {/* Holographic Sheen Layer */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-color-dodge transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${tilt.y * 5 + 50}% ${tilt.x * 5 + 50}%, rgba(0, 240, 255, 0.8), rgba(236, 29, 36, 0.4), transparent 70%)`
                  }}
                />

                {/* Scanline subtle sweep */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-12 animate-scanline pointer-events-none" />

                {/* Pass Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center font-display text-white text-sm font-bold">
                      PN
                    </div>
                    <div>
                      <span className="font-display text-base tracking-wider text-white block leading-none">
                        PROTOCOL NEXUS
                      </span>
                      <span className="text-[9px] font-tech text-slate-400 tracking-wider">
                        GFG BENNETT UNIVERSITY
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[9px] font-tech text-red-400 font-bold block uppercase tracking-wider">
                      CLEARANCE: L7
                    </span>
                    <span className="text-[10px] font-tech text-slate-400 tabular-nums">
                      {passId}
                    </span>
                  </div>
                </div>

                {/* Pass Avatar + Name Lockup */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 via-slate-900 to-black border border-red-500/50 flex items-center justify-center text-white font-display text-2xl shadow-[0_0_15px_rgba(236,29,36,0.3)] shrink-0">
                    {formData.fullName
                      ? formData.fullName
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)
                      : 'AV'}
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <Sparkles className="w-2.5 h-2.5 text-black" />
                    </span>
                  </div>

                  <div className="overflow-hidden">
                    <div className="text-xs font-tech text-red-400 font-bold uppercase tracking-wider truncate">
                      {formData.codename || 'SUPERHERO CODENAME'}
                    </div>
                    <div className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide truncate">
                      {formData.fullName || 'PETER PARKER'}
                    </div>
                    <div className="text-xs font-sans text-slate-400 truncate">
                      {formData.college || 'Bennett University'}
                    </div>
                  </div>
                </div>

                {/* Squad & Track Badges */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-black/60 border border-slate-800/80 rounded-lg mb-4 text-xs font-tech">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Team Squad</span>
                    <span className="text-slate-200 font-bold truncate block">
                      {formData.teamName || 'THE ASSEMBLED'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Squad Size</span>
                    <span className="text-slate-200 font-bold">
                      {formData.teamSize} {formData.teamSize === 1 ? 'Solo' : 'Operatives'}
                    </span>
                  </div>

                  <div className="col-span-2 pt-1 border-t border-slate-800/60">
                    <span className="text-[10px] text-slate-500 block uppercase">Assigned Division</span>
                    <span className="text-cyan-300 font-semibold truncate block">
                      {currentTrack.title} ({currentTrack.heroCodename})
                    </span>
                  </div>
                </div>

                {/* Role specialty */}
                <div className="flex items-center justify-between text-xs font-tech text-slate-400 mb-4 px-1">
                  <span>Class: <strong className="text-white">{currentHero.alias}</strong></span>
                  <span className="text-red-400">Oct 18–19, 2025</span>
                </div>

                {/* Footer Barcode + Mock QR Code */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white rounded border border-slate-700">
                      <QrCode className="w-9 h-9 text-black" />
                    </div>
                    <div>
                      <span className="text-[9px] font-tech text-slate-400 block tracking-wider uppercase">
                        BIOMETRIC ENTRY KEY
                      </span>
                      <span className="text-[10px] font-tech text-cyan-400 tabular-nums">
                        SECTOR-BENNETT-NOIDA
                      </span>
                    </div>
                  </div>

                  {/* Faux Barcode lines */}
                  <div className="flex items-center gap-0.5 opacity-60">
                    <div className="w-1 h-7 bg-white" />
                    <div className="w-0.5 h-7 bg-white" />
                    <div className="w-1.5 h-7 bg-white" />
                    <div className="w-0.5 h-7 bg-white" />
                    <div className="w-2 h-7 bg-white" />
                    <div className="w-0.5 h-7 bg-white" />
                    <div className="w-1 h-7 bg-white" />
                    <div className="w-0.5 h-7 bg-white" />
                    <div className="w-1.5 h-7 bg-white" />
                  </div>
                </div>
              </div>

              {/* Pass Instruction Note */}
              <div className="mt-4 text-center text-xs font-tech text-slate-400 flex items-center justify-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Move cursor over the badge to experience the Stark holographic tilt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
