'use client';

import React from 'react';
import { ArrowRight, RefreshCw, Search } from 'lucide-react';
import { RedaksiPost } from '@/data/redaksiData';
import { CATEGORIES, getCategoryTheme } from '@/utils/categoryTheme';

interface RuangRedaksiViewProps {
  posts: RedaksiPost[];
  onGoToReview: () => void;
  onOpenPost: (post: RedaksiPost) => void;
  onSearchClick: () => void;
  isScouting?: boolean;
  isLoading?: boolean;
}

export const RuangRedaksiView: React.FC<RuangRedaksiViewProps> = ({
  posts,
  onGoToReview,
  onOpenPost,
  onSearchClick,
  isScouting = false,
  isLoading = false
}) => {
  const count = (status: RedaksiPost['status']) => posts.filter((p) => p.status === status).length;
  const queue = posts.filter((p) => p.status === 'perlu_review');

  const metrics = [
    { label: 'Perlu review', value: count('perlu_review'), highlight: true },
    { label: 'Disetujui', value: count('disetujui') },
    { label: 'Terjadwal', value: count('terjadwal') },
    { label: 'Sudah posting', value: count('sudah_posting') },
  ];

  const mix = CATEGORIES.map((c) => ({ ...c, n: queue.filter((p) => p.category.toUpperCase() === c.tag).length }))
    .filter((c) => c.n > 0)
    .sort((a, b) => b.n - a.n);

  const topViral = [...queue].sort((a, b) => b.viralScore - a.viralScore).slice(0, 5);

  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
      <div className="flex items-end justify-between gap-4 border-b border-zinc-200 pb-6">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold mb-1">@konoha.insight</div>
          <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight text-zinc-900 leading-none">RUANG REDAKSI</h1>
        </div>
        <button
          onClick={onSearchClick}
          disabled={isScouting}
          className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:opacity-70 text-white text-xs font-mono font-semibold flex items-center gap-2 shrink-0 active:scale-95 transition-all"
        >
          {isScouting ? <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#e2ff3b]" /> : <Search className="w-3.5 h-3.5 text-[#e2ff3b]" />}
          {isScouting ? 'Mencari…' : 'Cari berita'}
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <button
            key={m.label}
            onClick={onGoToReview}
            className={`text-left p-5 rounded-2xl bg-white border transition-all hover:shadow-md ${m.highlight ? 'border-2 border-zinc-900' : 'border-zinc-200'}`}
          >
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">{m.label}</div>
            {isLoading ? (
              <div className="h-10 w-16 mt-2 bg-zinc-200 animate-pulse rounded-xl" />
            ) : (
              <div className="text-4xl sm:text-5xl font-black font-headline text-zinc-900 mt-1">{m.value}</div>
            )}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        <section className="lg:col-span-3 rounded-2xl bg-white border border-zinc-200 overflow-hidden">
          <div className="px-5 py-3.5 border-b border-zinc-200 flex items-center justify-between">
            <h2 className="text-sm font-bold text-zinc-900">Paling berpotensi viral</h2>
            <button onClick={onGoToReview} className="text-xs font-mono text-zinc-500 hover:text-zinc-900 flex items-center gap-1">
              Semua <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          {topViral.length === 0 ? (
            <div className="px-5 py-10 text-center text-xs font-mono text-zinc-500">Belum ada berita. Tekan “Cari berita”.</div>
          ) : (
            <ul className="divide-y divide-zinc-100">
              {topViral.map((p) => (
                <li key={p.id}>
                  <button onClick={() => onOpenPost(p)} className="w-full text-left px-5 py-3.5 flex items-center gap-3 hover:bg-zinc-50 transition-colors">
                    <span className="w-9 h-9 rounded-lg bg-[#e2ff3b] text-black font-black font-headline text-sm flex items-center justify-center shrink-0">
                      {p.viralScore}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-zinc-900 line-clamp-1">{p.title}</span>
                      <span className="block text-[11px] font-mono text-zinc-500">{p.source} · {p.timeAgo}</span>
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-black shrink-0"
                      style={{ backgroundColor: getCategoryTheme(p.category).bg, color: getCategoryTheme(p.category).text }}
                    >
                      {p.category}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="lg:col-span-2 rounded-2xl bg-white border border-zinc-200 p-5 space-y-3">
          <h2 className="text-sm font-bold text-zinc-900">Campuran topik di antrian</h2>
          {mix.length === 0 ? (
            <div className="text-xs font-mono text-zinc-500">Kosong.</div>
          ) : (
            mix.map((c) => (
              <div key={c.tag} className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                  <span>{c.icon} {c.name}</span>
                  <span className="font-bold">{c.n}</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(c.n / queue.length) * 100}%`, backgroundColor: c.bg }} />
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};
