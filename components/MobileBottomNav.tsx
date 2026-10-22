'use client';

import React from 'react';
import { Layers, Tv, BarChart3, ShieldAlert, Sparkles, Send } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenTipLine: () => void;
  onOpenMediaKit: () => void;
  currentPlatform: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#090a0d]/95 backdrop-blur-xl border-t border-zinc-800/90 py-2 px-3 shadow-2xl">
      <div className="flex items-center justify-around">
        <a
          href="#simulator"
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-lime-400 transition-colors py-1"
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] font-mono">Simulasi</span>
        </a>

        <a
          href="#comparison"
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-cyan-400 transition-colors py-1"
        >
          <BarChart3 className="w-5 h-5" />
          <span className="text-[10px] font-mono">Hemat</span>
        </a>

        <a
          href="#contact"
          className="flex flex-col items-center gap-1 text-lime-400 hover:text-lime-300 transition-colors py-1"
        >
          <div className="w-7 h-7 rounded-full bg-lime-400/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-lime-400" />
          </div>
          <span className="text-[10px] font-mono font-bold">Konsul</span>
        </a>

        <a
          href="#generator"
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors py-1"
        >
          <Tv className="w-5 h-5" />
          <span className="text-[10px] font-mono">Generator</span>
        </a>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors py-1"
        >
          <ShieldAlert className="w-5 h-5" />
          <span className="text-[10px] font-mono">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
