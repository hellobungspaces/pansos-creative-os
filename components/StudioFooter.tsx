'use client';

import React from 'react';
import { Github, Heart, ArrowUpRight } from 'lucide-react';

export const StudioFooter: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8 text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">OPEN FOLK</span>
          <span>— Open-Source Homeless Media Content Generator. Licensed under MIT.</span>
        </div>

        <div className="flex items-center gap-5 text-zinc-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
          </a>

          <span>•</span>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>Managed Custom Setup</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};
