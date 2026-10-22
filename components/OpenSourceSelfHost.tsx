'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check, GitFork, Server, Cpu, Instagram, MessageSquare, ArrowRight } from 'lucide-react';

export const OpenSourceSelfHost: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const cloneCommand = `# 1. Clone repository
git clone https://github.com/yourusername/open-folk.git
cd open-folk

# 2. Setup Environment Variables
cp .env.example .env.local

# 3. Jalankan dengan Docker
docker compose up -d

# Server aktif di http://localhost:3000`;

  const copySnippet = () => {
    navigator.clipboard?.writeText(cloneCommand);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="self-host" className="py-16 sm:py-24 border-t border-zinc-800 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-emerald-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>OPEN-SOURCE & SELF-HOSTING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Mau Jalankan Sistem Ini Otomatis 24/7 di VPS Sendiri?
          </h2>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Project ini 100% open-source. Kamu bisa menjalankan studio ini secara lokal, mengintegrasikannya dengan Meta Content Publishing API, atau mendeploy bot cron di server pribadi kamu.
          </p>
        </div>

        {/* Terminal Code Snippet Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0c0d12] border border-zinc-800 font-mono text-xs mb-10 shadow-2xl relative">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-4 text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-[11px] text-zinc-500">bash — Quick Deploy</span>
            </div>

            <button
              onClick={copySnippet}
              className="flex items-center gap-1 text-[11px] text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedCode ? 'Tersalin!' : 'Copy Code'}</span>
            </button>
          </div>

          <pre className="text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {cloneCommand}
          </pre>
        </div>

        {/* 3 Architecture Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-xs font-mono">
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <div className="text-emerald-400 font-bold flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>SELF-HOSTED ZERO COST</span>
            </div>
            <p className="text-zinc-400 font-sans leading-relaxed">
              Jalankan di VPS $5/bulan (DigitalOcean, Hetzner, dll). Tidak ada ketergantungan langganan SaaS pihak ketiga.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <div className="text-cyan-400 font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>HEADLESS CANVAS RENDERER</span>
            </div>
            <p className="text-zinc-400 font-sans leading-relaxed">
              Modul render programatik siap mengekspor puluhan kartu carousel 1080x1350px per menit menggunakan Node Canvas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <div className="text-purple-400 font-bold flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>OFFICIAL META GRAPH API</span>
            </div>
            <p className="text-zinc-400 font-sans leading-relaxed">
              Integrasi langsung ke endpoint `media_publish` Meta untuk posting terjadwal ke feed Instagram bisnis kamu.
            </p>
          </div>
        </div>

        {/* Managed Custom Agency Offer Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-850 border border-zinc-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
              ENTERPRISE SETUP SERVICE
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Gak Mau Ribet Coding & Setup Server Sendiri?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg">
              Saya bisa bangunkan dan pasang sistem otomatisasi redaksi ini langsung di server VPS kamu secara *white-label* dan beli putus.
            </p>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20setup%20custom%20sistem%20redaksi%20homeless%20media%20di%20server%20sendiri"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap flex items-center gap-2 shrink-0 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>KONSULTASI VIA WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
