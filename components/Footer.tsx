'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 py-10 text-xs font-mono text-zinc-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-zinc-900">REDAKSI OTOMATIS</span> — Sistem otonom untuk Homeless Media (White-Label, Self-Hosted, Beli Putus).
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-700 hover:text-black transition-colors flex items-center gap-1 font-semibold"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <span>Deploy di VPS Pribadi</span>
        </div>
      </div>
    </footer>
  );
};
