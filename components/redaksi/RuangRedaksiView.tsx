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
  isLoading?: boolean;
}

export const RuangRedaksiView: React.FC<RuangRedaksiViewProps> = ({
  onGoToReview,
  onSearchClick,
  reviewCount = 8,
  scheduledCount = 0,
  publishedCount = 14,
  isScouting = false,
  isLoading = false
}) => {
  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
        <div>
          <div className="text-xs font-mono tracking-widest text-emerald-600 uppercase font-bold mb-1">
            SELAMAT BEKERJA, KONOHA INSIGHT (@KONOHA.INSIGHT)
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight text-zinc-900 leading-none">
            RUANG REDAKSI
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 border border-zinc-200 text-zinc-700 font-medium">
              Mode: Otomatis penuh
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>AI aktif · jam kerja 07.00–20.00 WIB</span>
            </span>
          </div>
        </div>

        <button
          onClick={onSearchClick}
          disabled={isScouting}
          className={`px-4 py-2.5 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all self-start sm:self-auto active:scale-95 shadow-sm font-semibold ${
            isScouting
              ? 'bg-amber-100 border-amber-300 text-amber-900 cursor-wait'
              : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-900 text-white'
          }`}
        >
          {isScouting ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#e2ff3b]" />
              <span>Scouting Berita Terkini...</span>
            </>
          ) : (
            <>
              <Search className="w-3.5 h-3.5 text-[#e2ff3b]" />
              <span>Cari berita sekarang</span>
            </>
          )}
        </button>
      </div>

      {/* 4 Big Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200 space-y-2 shadow-sm">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
            BERITA MASUK 24 JAM
          </div>
          {isLoading ? (
            <div className="space-y-2 py-1">
              <div className="h-10 sm:h-12 w-28 bg-zinc-200 animate-pulse rounded-xl" />
              <div className="h-3 w-32 bg-zinc-200 animate-pulse rounded" />
            </div>
          ) : (
            <>
              <div className="text-4xl sm:text-5xl font-black font-headline text-zinc-900 tracking-tight">
                {340 + reviewCount}
              </div>
              <div className="text-xs font-mono text-zinc-500">
                0 menunggu dinilai
              </div>
            </>
          )}
        </div>

        {/* Card 2 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200 space-y-2 shadow-sm">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
            LOLOS ANALIS 24 JAM
          </div>
          {isLoading ? (
            <div className="space-y-2 py-1">
              <div className="h-10 sm:h-12 w-28 bg-zinc-200 animate-pulse rounded-xl" />
              <div className="h-3 w-32 bg-zinc-200 animate-pulse rounded" />
            </div>
          ) : (
            <>
              <div className="text-4xl sm:text-5xl font-black font-headline text-zinc-900 tracking-tight">
                {130 + reviewCount}
              </div>
              <div className="text-xs font-mono text-zinc-500">
                {110 + reviewCount} antre ditulis
              </div>
            </>
          )}
        </div>

        {/* Card 3: SIAP DIREVIEW */}
        <div 
          onClick={onGoToReview}
          className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-zinc-900 space-y-2 cursor-pointer hover:shadow-lg transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-zinc-900 uppercase tracking-wider font-bold">
              SIAP DIREVIEW
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          </div>
          {isLoading ? (
            <div className="space-y-2 py-1">
              <div className="h-10 sm:h-12 w-20 bg-zinc-200 animate-pulse rounded-xl" />
              <div className="h-3 w-28 bg-zinc-200 animate-pulse rounded" />
            </div>
          ) : (
            <>
              <div className="text-4xl sm:text-5xl font-black font-headline text-blue-600 tracking-tight group-hover:scale-105 transition-transform">
                {reviewCount}
              </div>
              <div className="text-xs font-mono text-zinc-700 flex items-center justify-between font-medium">
                <span>Butuh approval tim</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </div>
            </>
          )}
        </div>

        {/* Card 4 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200 space-y-2 shadow-sm">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
            TERJADWAL
          </div>
          {isLoading ? (
            <div className="space-y-2 py-1">
              <div className="h-10 sm:h-12 w-20 bg-zinc-200 animate-pulse rounded-xl" />
              <div className="h-3 w-36 bg-zinc-200 animate-pulse rounded" />
            </div>
          ) : (
            <>
              <div className="text-4xl sm:text-5xl font-black font-headline text-zinc-900 tracking-tight">
                {scheduledCount}
              </div>
              <div className="text-xs font-mono text-zinc-500">
                {publishedCount} sudah posting minggu ini
              </div>
            </>
          )}
        </div>
      </div>

      {/* 4 AI Team Agents Status Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Agent 1: Scout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200">
                <Radar className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-zinc-900">Scout</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
          <div className="text-xs text-zinc-600">Pemantau berita</div>
          <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-100">
            Standby · aktif 26 mnt lalu
          </div>
        </div>

        {/* Agent 2: Analis */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-zinc-900">Analis</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
          <div className="text-xs text-zinc-600">Cek potensi viral</div>
          <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-100">
            Standby · aktif 25 mnt lalu
          </div>
        </div>

        {/* Agent 3: Copywriter */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                <Edit3 className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-zinc-900">Copywriter</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
          <div className="text-xs text-zinc-600">Headline & caption</div>
          <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-100">
            Standby · aktif 49 mnt lalu
          </div>
        </div>

        {/* Agent 4: Designer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200">
                <Palette className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-zinc-900">Designer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
          <div className="text-xs text-zinc-600">Render gambar</div>
          <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-100">
            Standby · aktif 49 mnt lalu
          </div>
        </div>
      </div>

      {/* Aktivitas Redaksi (Live Activity Table) */}
      <div className="rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between text-xs font-mono bg-zinc-50/50">
          <div className="flex items-center gap-2 text-zinc-900 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Aktivitas Redaksi</span>
          </div>
          <span className="text-zinc-500">update otomatis</span>
        </div>

        <div className="divide-y divide-zinc-100 text-xs font-mono">
          {ACTIVITY_LOGS.map((log, idx) => (
            <div key={idx} className="px-6 py-3.5 flex items-center justify-between hover:bg-zinc-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-emerald-700 font-bold">• {log.agent}</span>
                <span className="text-zinc-800 font-sans text-xs sm:text-sm">{log.message}</span>
              </div>
              <span className="text-zinc-500 text-[11px] shrink-0 ml-4">{log.timeAgo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
