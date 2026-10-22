'use client';

import React from 'react';
import { Sparkles, Terminal, ArrowUpRight, Github, Twitter, Instagram, Server, MessageSquare } from 'lucide-react';

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
                AUTOPRESS™ // SISTEM REDAKSI OTOMATIS
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Infrastruktur otomasi redaksi otonom untuk pemilik Homeless Media. Pantau tren 24 jam, pilih yang viral, desain carousel otomatis, dan posting langsung ke Instagram.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-lime-400 text-[11px] font-bold">
                100% WHITE-LABEL • BELI PUTUS
              </span>
            </div>
          </div>

          {/* Column 2: Alur Sistem */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">
              ALUR SISTEM
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#simulator" className="hover:text-lime-400 transition-colors">1. Trend Radar Ingestion</a></li>
              <li><a href="#simulator" className="hover:text-lime-400 transition-colors">2. AI Viral Filter Scoring</a></li>
              <li><a href="#simulator" className="hover:text-lime-400 transition-colors">3. Programmatic Canvas Render</a></li>
              <li><a href="#simulator" className="hover:text-lime-400 transition-colors">4. Web Review Dashboard</a></li>
              <li><a href="#simulator" className="hover:text-lime-400 transition-colors">5. Meta Graph API Publishing</a></li>
            </ul>
          </div>

          {/* Column 3: Model Bisnis */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">
              MODEL BISNIS
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li><span className="text-white">Beli Putus (One-Time Setup)</span></li>
              <li><span className="text-zinc-400">Tidak ada biaya bulanan ke saya</span></li>
              <li><span className="text-zinc-400">Deploy di VPS / Cloud Anda</span></li>
              <li><span className="text-zinc-400">Database & Token API milik Anda</span></li>
              <li><a href="#comparison" className="hover:text-lime-400 transition-colors">Kalkulator Hemat Biaya</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Action */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">
              KONSULTASI CEPAT
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-[11px]">
              <div className="text-white font-bold">Siap punya tim redaksi otomatis?</div>
              <div className="text-zinc-400">Konsultasikan niche brand dan kebutuhan harian Anda.</div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-lime-400 hover:underline font-bold pt-1"
              >
                <span>Mulai Diskusi WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © 2026 AUTOPRESS.AI // Autonomous Homeless Media Engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SELF-HOSTED READY // ZERO VENDOR LOCK-IN
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
