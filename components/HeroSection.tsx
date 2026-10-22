'use client';

import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Server, 
  Radio, 
  Layers, 
  ShieldCheck, 
  MessageSquare,
  Clock,
  Instagram
} from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-28 border-b border-zinc-800/80 bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-lime-400/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* White-label Beli Putus Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/40 text-lime-400 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
            <span>FULLY CUSTOM • 100% WHITE-LABEL</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-mono">
            <Server className="w-3.5 h-3.5 text-cyan-400" />
            <span>JALAN DI SERVER SENDIRI (VPS ANDA)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-bold">
            <span>SEKALI BAYAR / GAK ADA BULANAN KE SAYA</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
            Buat Kamu yang Punya (atau Mau Bikin){' '}
            <span className="bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              Homeless Media
            </span>
            ...
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed mb-6 font-medium">
            Saya bisa bangunkan <strong>sistem otonom</strong> yang kerjanya persis seperti satu tim redaksi lengkap:
          </p>

          {/* 4 Core Value Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 font-mono text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-3">
              <span className="text-lime-400 font-bold text-base">→</span>
              <span className="text-zinc-200">Pantau tren & berita 24 jam non-stop</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-3">
              <span className="text-lime-400 font-bold text-base">→</span>
              <span className="text-zinc-200">Pilih berita yang berpotensi viral (AI filter)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-3">
              <span className="text-lime-400 font-bold text-base">→</span>
              <span className="text-zinc-200">Tulis naskah & desain carousel otomatis</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-3">
              <span className="text-lime-400 font-bold text-base">→</span>
              <span className="text-zinc-200">Posting langsung ke Instagram via Meta API</span>
            </div>
          </div>

          {/* Punchline Statement */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs sm:text-sm text-zinc-300 mb-8 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-lime-400 text-black font-bold shrink-0">
              ⚡ 100/HARI
            </div>
            <div>
              <strong>Kapasitas hingga 100 konten per hari.</strong> Tim Anda cukup duduk santai, buka dashboard di HP, lalu review & 1-click approve. Custom sesuai niche & brand Anda.
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#simulator"
              className="px-6 py-3.5 bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-lime-400/25 flex items-center gap-2 group active:scale-95"
            >
              <span>LIHAT SIMULASI CARA KERJA SISTEM</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 font-mono font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 group"
            >
              <MessageSquare className="w-4 h-4" />
              <span>KONSULTASI VIA WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* Live Simulator Preview Dock */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-[#111319] border border-zinc-800">
            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">PRODUKSI KONTEN</div>
            <div className="text-2xl font-mono font-black text-white">100 / Hari</div>
            <div className="text-[11px] font-mono text-lime-400 mt-0.5">Skalabilitas Maksimal</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111319] border border-zinc-800">
            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">JAM OPERASIONAL</div>
            <div className="text-2xl font-mono font-black text-white">24 Jam / 7 Hari</div>
            <div className="text-[11px] font-mono text-cyan-400 mt-0.5">Scraping Real-Time</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111319] border border-zinc-800">
            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">MODEL KONTRAK</div>
            <div className="text-2xl font-mono font-black text-white">Beli Putus</div>
            <div className="text-[11px] font-mono text-amber-400 mt-0.5">No Monthly Subscription</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111319] border border-zinc-800">
            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">INFRASTRUKTUR</div>
            <div className="text-2xl font-mono font-black text-white">Self-Hosted</div>
            <div className="text-[11px] font-mono text-purple-400 mt-0.5">Di VPS Milik Anda</div>
          </div>
        </div>
      </div>
    </section>
  );
};
