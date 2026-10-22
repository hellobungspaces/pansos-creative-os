'use client';

import React from 'react';
import { 
  Radar, 
  Target, 
  Edit3, 
  Palette, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  RefreshCw,
  Sparkles 
} from 'lucide-react';
import { ACTIVITY_LOGS } from '@/data/redaksiData';

interface RuangRedaksiViewProps {
  onGoToReview: () => void;
  onSearchClick: () => void;
  reviewCount?: number;
  scheduledCount?: number;
  publishedCount?: number;
  isScouting?: boolean;
}

export const RuangRedaksiView: React.FC<RuangRedaksiViewProps> = ({
  onGoToReview,
  onSearchClick,
  reviewCount = 8,
  scheduledCount = 0,
  publishedCount = 14,
  isScouting = false
}) => {
  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold mb-1">
            SELAMAT MALAM, INDONESIA HARI INI
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight text-white leading-none">
            RUANG REDAKSI
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
              Mode: Otomatis penuh
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI aktif · jam kerja 07.00–20.00 WIB</span>
            </span>
          </div>
        </div>

        <button
          onClick={onSearchClick}
          disabled={isScouting}
          className={`px-4 py-2.5 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all self-start sm:self-auto active:scale-95 shadow-sm ${
            isScouting
              ? 'bg-amber-950/40 border-amber-500/50 text-amber-300 cursor-wait'
              : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700/80 text-zinc-200 hover:text-white'
          }`}
        >
          {isScouting ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#e2ff3b]" />
              <span>Scouting Berita Terkini...</span>
            </>
          ) : (
            <>
              <Search className="w-3.5 h-3.5" />
              <span>Cari berita sekarang</span>
            </>
          )}
        </button>
      </div>

      {/* 4 Big Metrics Cards (Matching Screenshot 2) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1117] border border-zinc-800/80 space-y-2">
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            BERITA MASUK 24 JAM
          </div>
          <div className="text-4xl sm:text-5xl font-black font-headline text-white tracking-tight">
            {340 + reviewCount}
          </div>
          <div className="text-xs font-mono text-zinc-500">
            0 menunggu dinilai
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1117] border border-zinc-800/80 space-y-2">
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            LOLOS ANALIS 24 JAM
          </div>
          <div className="text-4xl sm:text-5xl font-black font-headline text-white tracking-tight">
            {130 + reviewCount}
          </div>
          <div className="text-xs font-mono text-zinc-500">
            {110 + reviewCount} antre ditulis
          </div>
        </div>

        {/* Card 3: SIAP DIREVIEW (Highlighted Green) */}
        <div 
          onClick={onGoToReview}
          className="p-5 sm:p-6 rounded-2xl bg-[#0f1117] border-2 border-[#e2ff3b]/80 space-y-2 cursor-pointer hover:bg-zinc-900/60 transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider font-bold">
              SIAP DIREVIEW
            </span>
            <span className="w-2 h-2 rounded-full bg-[#e2ff3b] animate-ping" />
          </div>
          <div className="text-4xl sm:text-5xl font-black font-headline text-[#e2ff3b] tracking-tight group-hover:scale-105 transition-transform">
            {reviewCount}
          </div>
          <div className="text-xs font-mono text-zinc-300 flex items-center justify-between">
            <span>Butuh approval tim</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#e2ff3b]" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1117] border border-zinc-800/80 space-y-2">
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            TERJADWAL
          </div>
          <div className="text-4xl sm:text-5xl font-black font-headline text-white tracking-tight">
            {scheduledCount}
          </div>
          <div className="text-xs font-mono text-zinc-500">
            {publishedCount} sudah posting minggu ini
          </div>
        </div>
      </div>

      {/* 4 AI Team Agents Status Row (Matching Screenshot 2) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Agent 1: Scout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1117] border border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">
                <Radar className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-white">Scout</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="text-xs text-zinc-400">Pemantau berita</div>
          <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
            Standby · aktif 26 mnt lalu
          </div>
        </div>

        {/* Agent 2: Analis */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1117] border border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-950/40 text-purple-400 border border-purple-800/40">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-white">Analis</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="text-xs text-zinc-400">Cek potensi viral</div>
          <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
            Standby · aktif 25 mnt lalu
          </div>
        </div>

        {/* Agent 3: Copywriter */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1117] border border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-950/40 text-amber-400 border border-amber-800/40">
                <Edit3 className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-white">Copywriter</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="text-xs text-zinc-400">Headline & caption</div>
          <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
            Standby · aktif 49 mnt lalu
          </div>
        </div>

        {/* Agent 4: Designer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1117] border border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-rose-950/40 text-rose-400 border border-rose-800/40">
                <Palette className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-white">Designer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="text-xs text-zinc-400">Render gambar</div>
          <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
            Standby · aktif 49 mnt lalu
          </div>
        </div>
      </div>

      {/* Aktivitas Redaksi (Live Activity Table Matching Screenshot 2) */}
      <div className="rounded-2xl bg-[#0f1117] border border-zinc-800/80 overflow-hidden shadow-xl">
        <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Aktivitas Redaksi</span>
          </div>
          <span className="text-zinc-500">update otomatis</span>
        </div>

        <div className="divide-y divide-zinc-800/60 text-xs font-mono">
          {ACTIVITY_LOGS.map((log, idx) => (
            <div key={idx} className="px-6 py-3.5 flex items-center justify-between hover:bg-zinc-900/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">• {log.agent}</span>
                <span className="text-zinc-300 font-sans text-xs sm:text-sm">{log.message}</span>
              </div>
              <span className="text-zinc-500 text-[11px] shrink-0 ml-4">{log.timeAgo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
