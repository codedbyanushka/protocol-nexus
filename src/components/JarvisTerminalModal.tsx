import { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { audioFx } from '../utils/audioFx';
import { MARVEL_TRACKS } from '../data/marvelData';

interface JarvisTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToRegistration: () => void;
}

interface CommandLog {
  id: string;
  type: 'system' | 'user' | 'error' | 'success';
  text: string;
}

export function JarvisTerminalModal({ isOpen, onClose, onScrollToRegistration }: JarvisTerminalModalProps) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      type: 'system',
      text: 'J.A.R.V.I.S. OS v8.5 [EARTH-616 BENNETT UNIVERSITY NODE CONNECTED]'
    },
    {
      id: 'init-2',
      type: 'system',
      text: 'Type "help" to view executable protocols or "assemble" to initiate squad pass.'
    }
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    audioFx.playClick();

    const newLogs: CommandLog[] = [
      ...history,
      { id: String(Date.now()), type: 'user', text: `$ ${inputVal}` }
    ];

    switch (cmd) {
      case 'help':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'system',
          text: `AVAILABLE DIRECTIVES:
  • tracks      - View the 4 Marvel Hackathon divisions & bounties
  • assemble    - Begin registration sequence & claim Stark ID Pass
  • status      - Query Bennett University computing cluster status
  • bennett     - Retrieve campus coordinates and venue clearance
  • bounties    - Display the ₹1,50,000+ prize pool breakdown
  • easteregg   - Trigger Stark Arc Reactor emergency power surge
  • clear       - Flush terminal memory buffer
  • exit        - Terminate terminal session`
        });
        break;

      case 'tracks':
        const trackSummary = MARVEL_TRACKS.map(
          (t) => `  [${t.heroCodename}] ${t.title} -> Bounty: ${t.bounty}`
        ).join('\n');
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'success',
          text: `MULTIVERSE DIVISIONS:\n${trackSummary}`
        });
        break;

      case 'assemble':
        audioFx.playHeroicSuccess();
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'success',
          text: 'DIRECTIVE CONFIRMED: Avengers, Assemble! Transferring to registration terminal...'
        });
        setTimeout(() => {
          onClose();
          onScrollToRegistration();
        }, 800);
        break;

      case 'status':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'system',
          text: `SYSTEM TELEMETRY:
  • Core Temperature: 38.2°C (Optimal)
  • Bennett High-Performance GPU Nodes: ONLINE (100% Availability)
  • Gigabit Fiber Uplink: STABLE (982 Mbps latency: 3ms)
  • Security Level: LEVEL 7 (Director Fury Clearance)
  • Registered Super-Hackers: 500+ Assembling`
        });
        break;

      case 'bennett':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'system',
          text: `BASE HEADQUARTERS:
  • Institution: Bennett University (The Times Group)
  • Location: Plot Nos 8-11, TechZone II, Greater Noida, UP 201310
  • Facilities: Dr. APJ Abdul Kalam Auditorium, Supercomputer Labs
  • Organizer: GeeksForGeeks Student Chapter`
        });
        break;

      case 'bounties':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'success',
          text: `BOUNTY VAULT:
  • Grand Champion: ₹60,000 + Infinity Gauntlet Trophy + Incubation
  • Runner-Up: ₹35,000 + Vibranium Shield + Cloud Grants
  • 2nd Runner-Up: ₹20,000 + Arc Reactor Medallions
  • Special Category Bounties: ₹35,000+ in track citations`
        });
        break;

      case 'easteregg':
        audioFx.playRepulsor();
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'success',
          text: '⚡ "I am Iron Man." Mark LXXXV Nano-Gauntlet power surge initiated! +3000 Quantum Units added to your profile.'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        audioFx.playBeep();
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid Marvel directives.`
        });
        break;
    }

    setHistory(newLogs);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-[#080c14] border border-cyan-500/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col h-[520px]">
        {/* Terminal Header */}
        <div className="bg-slate-900/90 border-b border-cyan-500/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-cyan-500 inline-block" />
            </div>
            <span className="text-xs font-tech font-bold text-cyan-300 uppercase tracking-widest ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>J.A.R.V.I.S. // STARK HUD PROTOCOL</span>
            </span>
          </div>

          <button
            onClick={() => {
              audioFx.playClick();
              onClose();
            }}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div
          ref={scrollRef}
          className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2 bg-[#05070c] text-slate-300"
        >
          {history.map((log) => (
            <div
              key={log.id}
              className={`whitespace-pre-wrap leading-relaxed ${
                log.type === 'user'
                  ? 'text-white font-bold'
                  : log.type === 'success'
                  ? 'text-cyan-300'
                  : log.type === 'error'
                  ? 'text-red-400'
                  : 'text-slate-400'
              }`}
            >
              {log.text}
            </div>
          ))}
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="bg-slate-950 border-t border-slate-800 px-4 py-3 flex items-center gap-2">
          <span className="text-cyan-400 font-mono text-sm font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type directive (e.g. 'help', 'assemble', 'bounties')..."
            className="flex-1 bg-transparent text-sm font-mono text-white placeholder-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="p-1.5 text-cyan-400 hover:text-cyan-200 transition-colors cursor-pointer"
            aria-label="Execute command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
