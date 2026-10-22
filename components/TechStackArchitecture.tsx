'use client';

import React from 'react';
import { Server, Database, ShieldCheck, Terminal, Cpu, Layers, Instagram, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TechStackArchitecture: React.FC = () => {
  const architectureSteps = [
    {
      step: '01',
      title: 'Scraper Radar 24/7',
      desc: 'Bot memantau tren dari Twitter/X, TikTok Creative Center, Google Trends, dan 20+ RSS media kredibel setiap 5 menit.',
      icon: Terminal,
      color: 'text-cyan-400'
    },
    {
      step: '02',
      title: 'AI Viral Filter & Naskah',
      desc: 'Model LLM terkalibrasi memilah berita berpotensi viral (skor 90+), mengekstrak data kontras, dan menyusun hook 5 slide.',
      icon: Cpu,
      color: 'text-lime-400'
    },
    {
      step: '03',
      title: 'Automated Graphic Engine',
      desc: 'Mesin render programatik menggambar grafis carousel 1080x1350px dalam 1 detik sesuai font, warna, dan logo khas brand Anda.',
      icon: Layers,
      color: 'text-purple-400'
    },
    {
      step: '04',
      title: 'Review Dashboard',
      desc: 'Dashboard web privat untuk Anda & tim: tinjau draf di HP, edit teks jika perlu, lalu klik satu tombol untuk jadwalkan.',
      icon: ShieldCheck,
      color: 'text-amber-400'
    },
    {
      step: '05',
      title: 'Direct Auto-Posting Meta',
      desc: 'Terintegrasi resmi ke Meta Content Publishing Graph API untuk posting otomatis langsung ke feed & carousel Instagram Anda.',
      icon: Instagram,
      color: 'text-rose-400'
    }
  ];

  return (
    <section id="architecture" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#08090d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-lime-400 mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>ARSITEKTUR & PRIVASI INFRASTRUKTUR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bagaimana Sistem Ini Berjalan di Server Anda Sendiri?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
            Ini bukan aplikasi SaaS umum yang menyatukan data Anda dengan orang lain. Ini adalah <strong>sistem terisolasi (private instance)</strong> yang kami bangun dan pasangkan langsung di infrastruktur Anda.
          </p>
        </div>

        {/* 5 Architecture Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14">
          {architectureSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#101218] border border-zinc-800/90 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-zinc-500">
                      STEP {step.step}
                    </span>
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* White-label Pillars Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">100% White-Label & Custom</h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Tidak ada embel-embel watermark atau merek saya. Semua aset, naskah, dan gaya visual disesuaikan dengan niche media Anda (apakah media berita perkotaan, bisnis, fesyen, tech, atau subkultur).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Self-Hosted di VPS Anda</h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Sistem dideploy di cloud server milik Anda (DigitalOcean / Hetzner / AWS). Anda memegang password root, database, dan token Meta Graph API secara mandiri tanpa risiko privasi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Beli Putus (No Monthly Sub)</h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Model bisnis jasa setup beli putus. Begitu sistem selesai disetup dan berjalan sesuai brand Anda, sistem menjadi milik Anda selamanya tanpa ada biaya royalti bulanan ke saya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
