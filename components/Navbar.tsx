'use client';

import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-black text-white font-mono font-bold text-xs rounded flex items-center justify-center">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-zinc-900">
              REDAKSI OTOMATIS
            </span>
            <span className="text-[10px] text-zinc-500 font-mono tracking-wider">
              SELF-HOSTED HOMELESS MEDIA ENGINE
            </span>
          </div>
        </a>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-zinc-600">
            <a href="#cockpit" className="hover:text-black transition-colors">
              Live Demo
            </a>
            <a href="#biaya" className="hover:text-black transition-colors">
              Hitungan Biaya
            </a>
            <a href="#deliverables" className="hover:text-black transition-colors">
              Scope of Work
            </a>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20bikin%20sistem%20redaksi%20otomatis%20untuk%20homeless%20media%20saya"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 bg-zinc-900 hover:bg-black text-white text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
