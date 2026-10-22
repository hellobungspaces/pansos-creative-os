'use client';

import React from 'react';
import { Sparkles, Terminal, ArrowUpRight, Github, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 py-12 pb-24 md:pb-12 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400"></span>
              <span className="text-white font-extrabold text-base tracking-wider">
                UNBOUND™ // HOMELESS MEDIA CO.
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Jaringan media digital terdistribusi generasi baru. Tanpa birokrasi redaksi 2005. Menghadirkan jurnalisme visual berbobot langsung di platform tempat kultur bertumbuh.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Distribution Nodes */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">
              DISTRIBUTION NODES
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#feeds" className="hover:text-lime-400 transition-colors flex items-center justify-between">
                  <span>TikTok FYP</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="#feeds" className="hover:text-lime-400 transition-colors flex items-center justify-between">
                  <span>Instagram Visuals</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="#feeds" className="hover:text-lime-400 transition-colors flex items-center justify-between">
                  <span>YouTube Video Essays</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="#feeds" className="hover:text-lime-400 transition-colors flex items-center justify-between">
                  <span>Raw Take Podcast (Spotify)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="#feeds" className="hover:text-lime-400 transition-colors flex items-center justify-between">
                  <span>Radar Protocol (X)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Partners */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">
              BUSINESS & LAB
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#media-kit" className="hover:text-lime-400 transition-colors">Media Kit & Rate Card 2026</a></li>
              <li><a href="#studio" className="hover:text-lime-400 transition-colors">Creative Studio Case Studies</a></li>
              <li><a href="#media-kit" className="hover:text-lime-400 transition-colors">Audience Demographics</a></li>
              <li><a href="#manifesto" className="hover:text-lime-400 transition-colors">Homeless Editorial Manifesto</a></li>
              <li><a href="#feeds" className="hover:text-lime-400 transition-colors">Substack VIP Dispatch</a></li>
            </ul>
          </div>

          {/* Column 4: System Architecture */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">
              SYSTEM SPECS
            </div>
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5 text-[11px] text-zinc-400">
              <div className="flex items-center gap-1.5 text-lime-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>Next.js 14 App Router</span>
              </div>
              <div>Styling: Tailwind CSS</div>
              <div>Deploy Target: Vercel Edge</div>
              <div className="text-zinc-500 pt-1 border-t border-zinc-800">
                Zero Cloud CMS DB dependency
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © 2026 UNBOUND MEDIA NETWORK (PT Homeles Media Digital). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              VERCEL EDGE // 100% HEALTHY
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400">JAKARTA, ID</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
