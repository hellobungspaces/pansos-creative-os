'use client';

import React from 'react';
import { Github, Star, GitFork, ArrowUpRight, Sparkles, Terminal, ExternalLink } from 'lucide-react';

export const OpenSourceHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white text-black font-mono font-black text-sm flex items-center justify-center shadow-sm">
            F
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                OPEN FOLK<span className="text-zinc-500 font-normal text-xs ml-1 font-mono">v1.0</span>
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                MIT License
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
              Open-Source Homeless Media Carousel Generator
            </span>
          </div>
        </div>

        {/* GitHub & Community Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-mono transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Star on</span>
            <span>GitHub</span>
            <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-[10px] text-zinc-400 font-bold ml-1">
              1.4k
            </span>
          </a>

          <a
            href="#self-host"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>Self-Host Guide</span>
          </a>

          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>Fork & Deploy</span>
          </a>
        </div>
      </div>
    </header>
  );
};
