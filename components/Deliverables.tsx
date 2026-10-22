'use client';

import React from 'react';
import { Server, Layout, Terminal, Cpu, ShieldCheck, Instagram, Code, Check } from 'lucide-react';

export const Deliverables: React.FC = () => {
  const items = [
    {
      title: 'Instalasi Docker di VPS Pribadi Kamu',
      desc: 'Kami setup dan deploy langsung di server cloud kamu (DigitalOcean / Hetzner / AWS). Password root dan database milik kamu 100%.',
      tag: 'INFRASTRUKTUR'
    },
    {
      title: 'Custom Template Desain Carousel (1080x1350px)',
      desc: 'Desain programatik disesuaikan dengan font resmi, palet warna, dan watermark logo brand media kamu. Tidak ada template generik.',
      tag: 'BRANDING'
    },
    {
      title: 'Scraper Tren 24/7 Multi-Source',
      desc: 'Menyisir pergerakan trending topic Twitter/X, TikTok Creative Center, Google Trends, dan 20+ RSS media kredibel setiap 5 menit.',
      tag: 'INGESTION'
    },
    {
      title: 'Prompt Engineering Naskah Editorial',
      desc: 'Model LLM dikalibrasi sesuai tone of voice media kamu: membuang basa-basi rilis pers, mengekstrak data kontras, dan menyusun hook 3 detik.',
      tag: 'EDITORIAL'
    },
    {
      title: 'Web Review Dashboard (Responsif HP & Laptop)',
      desc: 'Dashboard privat untuk kamu dan tim. Tinggal baca draf berita, edit teks jika perlu, lalu klik satu tombol untuk approve ke Instagram.',
      tag: 'DASHBOARD'
    },
    {
      title: 'Integrasi Resmi Meta Graph API',
      desc: 'Terhubung langsung ke Meta Content Publishing API resmi akun Instagram kamu. Aman dari banned dan otomatis posting sesuai jadwal.',
      tag: 'PUBLISHING'
    }
  ];

  return (
    <section id="deliverables" className="py-16 sm:py-24 border-b border-zinc-200 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            SCOPE OF WORK // APA YANG KAMU DAPATKAN
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Semua yang Dibutuhkan untuk Menjalankan Homeless Media Otonom
          </h2>
          <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
            Bukan script setengah jadi. Sistem kami serahkan dalam kondisi sudah terpasang, terhubung ke akun Instagram kamu, dan langsung bisa memproduksi konten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between space-y-3"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                  {item.tag}
                </span>
                <h3 className="text-sm font-bold text-zinc-950 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Termasuk dalam paket setup</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
