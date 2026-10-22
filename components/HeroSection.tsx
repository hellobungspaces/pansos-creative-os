'use client';

import React from 'react';
import { ArrowDown, MessageSquare, Check, Server, Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Clean status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Sistem Redaksi Otonom • White-Label • Beli Putus</span>
        </div>

        {/* Pitch text */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 leading-[1.15] mb-6">
          Buat kamu yang punya (atau mau bikin) homeless media..
        </h1>

        <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed font-normal mb-8">
          Aku bisa bikinin sistem yang kerjanya kayak satu tim redaksi lengkap:
        </p>

        {/* 4 Concrete Steps List */}
        <div className="space-y-3 mb-10 max-w-2xl font-mono text-sm sm:text-base">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900">
            <span className="font-bold text-zinc-400">01</span>
            <span>Pantau tren & berita 24 jam non-stop (Twitter/X, TikTok, Google Trends, RSS)</span>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900">
            <span className="font-bold text-zinc-400">02</span>
            <span>Pilih berita yang berpotensi viral & buang rilis pers basi</span>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900">
            <span className="font-bold text-zinc-400">03</span>
            <span>Tulis naskah provokatif & render desain carousel 4:5 otomatis</span>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900">
            <span className="font-bold text-zinc-400">04</span>
            <span>Posting langsung ke feed Instagram via Meta Content Publishing API</span>
          </div>
        </div>

        {/* Capacity & Ownership Statement */}
        <div className="p-5 rounded-2xl bg-zinc-100 border border-zinc-300 text-sm text-zinc-900 space-y-2 mb-10">
          <div className="font-bold text-base text-zinc-950">
            ⚡ Kapasitas sampai 100 konten per hari. Tim kamu tinggal review & approve.
          </div>
          <div className="text-zinc-700 leading-relaxed">
            Custom sesuai niche & brand kamu (warna, font, logo khas). Sistem dideploy dan jalan di server VPS kamu sendiri.
          </div>
          <div className="pt-2 text-xs font-mono font-bold text-zinc-800 uppercase tracking-wide border-t border-zinc-200">
            INI FULLY CUSTOM. WHITE-LABEL. GAK ADA SUBSCRIBE KE AKU, JADI GABISA BULANAN (BELI PUTUS).
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#cockpit"
            className="px-5 py-3 bg-zinc-950 hover:bg-black text-white text-xs sm:text-sm font-medium rounded-xl transition-all shadow-sm flex items-center gap-2"
          >
            <span>Lihat Demo Cara Kerjanya</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20bikin%20sistem%20redaksi%20otomatis%20untuk%20homeless%20media%20saya"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Tanya / Konsultasi via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
