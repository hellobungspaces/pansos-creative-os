'use client';

import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  Eye, 
  Layers, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  ExternalLink 
} from 'lucide-react';
import { PLATFORM_STATS } from '@/data/mediaData';

interface HeroSectionProps {
  onOpenMediaKit: () => void;
  onFilterPlatform: (platform: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenMediaKit, onFilterPlatform }) => {
  const [activePreviewMode, setActivePreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-zinc-800/80 bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime-400/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          <span className="text-[11px] font-mono font-medium text-zinc-300 uppercase tracking-wider">
            THE POST-HOMEPAGE MEDIA ERA
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-[11px] font-mono text-lime-400">100% NATIVE DISTRIBUTION</span>
        </div>

        {/* Hero Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
            Media Tanpa Kantor Berita.{' '}
            <span className="bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              Menyerang Langsung
            </span>{' '}
            di Algoritma Feeds Anda.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed mb-8 max-w-3xl">
            Kami adalah <strong className="text-white font-semibold">Homeless Media Network</strong>. Kami tidak memaksa audiens mengunjungi website usang penuh iklan pop-up. Kami memproduksi jurnalisme visual, investigasi subkultur, dan video essays langsung di dalam{' '}
            <span className="text-lime-400 font-mono font-medium">TikTok</span>,{' '}
            <span className="text-rose-400 font-mono font-medium">Instagram</span>,{' '}
            <span className="text-red-400 font-mono font-medium">YouTube</span>, &{' '}
            <span className="text-emerald-400 font-mono font-medium">Spotify</span> tempat 90% waktu generasi baru dihabiskan.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#feeds"
              className="px-6 py-3.5 bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs sm:text-sm rounded-lg transition-all shadow-lg shadow-lime-400/25 flex items-center gap-2 group active:scale-95"
            >
              <span>JELAJAHI LIVE BROADCAST FEEDS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenMediaKit}
              className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white border border-zinc-700/80 font-mono font-medium text-xs sm:text-sm rounded-lg transition-all flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-lime-400" />
              <span>MEDIA KIT & ADVERTISER PORTAL</span>
            </button>
          </div>
        </div>

        {/* Live Network Metrics Dashboard (VP of Engineering Performance Metric) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="bg-[#101217] border border-zinc-800/90 rounded-xl p-4 sm:p-5 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono tracking-wider">MONTHLY REACH</span>
              <Eye className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
              48.5M+
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>+24.8% QoQ Growth</span>
            </div>
          </div>

          <div className="bg-[#101217] border border-zinc-800/90 rounded-xl p-4 sm:p-5 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono tracking-wider">AUDIENCE DEMO</span>
              <Users className="w-4 h-4 text-lime-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
              89.4%
            </div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1">
              Gen-Z & Young Millennials (18-34)
            </div>
          </div>

          <div className="bg-[#101217] border border-zinc-800/90 rounded-xl p-4 sm:p-5 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono tracking-wider">ORGANIC ENGAGEMENT</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
              11.2%
            </div>
            <div className="text-[11px] font-mono text-amber-400 mt-1">
              3.8x rata-rata portal berita konvensional
            </div>
          </div>

          <div className="bg-[#101217] border border-zinc-800/90 rounded-xl p-4 sm:p-5 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono tracking-wider">DISTRIBUTION NODES</span>
              <Layers className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
              6 Channels
            </div>
            <div className="text-[11px] font-mono text-purple-400 mt-1">
              TikTok, IG, YouTube, Spotify, X, Substack
            </div>
          </div>
        </div>

        {/* Live Channel Hub - Interactive Platform Filter Pills */}
        <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 sm:p-6 backdrop-blur">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 border-b border-zinc-800/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h2 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-zinc-200 uppercase">
                DISTRIBUTED CHANNELS STATUS MATRIX
              </h2>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">
              Pilih platform untuk filter feed langsung:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PLATFORM_STATS.map((plat) => (
              <button
                key={plat.name}
                onClick={() => {
                  onFilterPlatform(plat.icon);
                  const el = document.getElementById('feeds');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-600 transition-all text-left group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-white group-hover:text-lime-400 transition-colors">
                      {plat.name}
                    </span>
                    <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-zinc-800 text-zinc-400">
                      {plat.growth}
                    </span>
                  </div>
                  <div className="text-lg font-mono font-extrabold text-white">
                    {plat.followers}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 truncate mt-0.5">
                    {plat.handle}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>{plat.engagement}</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-lime-400 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
