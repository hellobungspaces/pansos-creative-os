'use client';

import React, { useState } from 'react';
import { CheckSquare, AlertTriangle, ArrowRight, Check } from 'lucide-react';
import { RedaksiPost } from '@/data/redaksiData';

interface AntrianReviewViewProps {
  posts: RedaksiPost[];
  onOpenDetailEditor: (post: RedaksiPost) => void;
}

export const AntrianReviewView: React.FC<AntrianReviewViewProps> = ({
  posts,
  onOpenDetailEditor
}) => {
  const [activeTab, setActiveTab] = useState<'perlu_review' | 'disetujui' | 'terjadwal' | 'sudah_posting'>('perlu_review');

  const tabs = [
    { id: 'perlu_review', label: 'Perlu review', count: posts.length },
    { id: 'disetujui', label: 'Disetujui', count: 0 },
    { id: 'terjadwal', label: 'Terjadwal', count: 0 },
    { id: 'gagal', label: 'Gagal posting', count: 0 },
    { id: 'sudah_posting', label: 'Sudah posting', count: 14 },
    { id: 'ditolak', label: 'Ditolak', count: 0 },
  ];

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
      {/* View Header (Matching Screenshot 3) */}
      <div className="space-y-1 border-b border-zinc-800/80 pb-5">
        <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold">
          MEJA EDITOR
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight text-white leading-none">
          ANTRIAN REVIEW
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl pt-1">
          Cek fakta, edit kalau perlu, lalu setujui dan jadwalkan. Tidak ada yang terposting tanpa persetujuan tim.
        </p>
      </div>

      {/* Tabs and Action Buttons Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar text-xs font-mono">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-white font-bold border-b-2 border-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[11px] font-bold text-zinc-400">{tab.count}</span>
            </button>
          ))}
        </div>

        <button className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-mono flex items-center gap-2 hover:bg-zinc-800 transition-all self-start sm:self-auto">
          <CheckSquare className="w-3.5 h-3.5" />
          <span>Pilih beberapa</span>
        </button>
      </div>

      {/* Grid of 4:5 Carousel Cards (Matching Screenshot 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => onOpenDetailEditor(post)}
            className="group cursor-pointer flex flex-col justify-between space-y-2.5 transition-all duration-200 hover:-translate-y-1"
          >
            {/* The 4:5 Card Preview */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-black flex flex-col justify-between shadow-2xl">
              {/* Top Half: Cover Image */}
              <div className="relative h-1/2 w-full overflow-hidden bg-zinc-950">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top overlay badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-white drop-shadow">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e2ff3b]" />
                    <span>PANSOS CREATIVE</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/60 backdrop-blur font-bold">
                    1/{post.totalSlides}
                  </span>
                </div>

                {/* Source logo watermark if present */}
                {post.sourceBadge && (
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-white/90 text-black text-[9px] font-mono font-black">
                    {post.sourceBadge}
                  </div>
                )}
              </div>

              {/* Bottom Half: Signature Royal Blue Block */}
              <div className="h-1/2 w-full bg-[#2446f5] p-3.5 sm:p-4 flex flex-col justify-between relative">
                {/* Yellow Category Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-[#e2ff3b] text-black tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Bold Condensed Headline with Yellow Highlight */}
                <div
                  className="text-sm sm:text-base font-black font-headline text-white leading-tight uppercase line-clamp-3 my-1"
                  dangerouslySetInnerHTML={{ __html: post.highlightedTitle }}
                />

                {/* Bottom Bar: Warning pill, Source, and Viral Score Badge */}
                <div className="flex items-center justify-between pt-1 text-[9px] font-mono text-white/80">
                  <div className="flex items-center gap-2">
                    {post.hasRiskWarning ? (
                      <span className="px-1.5 py-0.5 rounded bg-[#2a2412] text-[#facc15] border border-[#ca8a04]/40 font-bold flex items-center gap-1">
                        <AlertTriangle className="w-2.5 h-2.5" />
                        <span>Cek risiko</span>
                      </span>
                    ) : (
                      <span className="truncate max-w-[80px]">Sumber: {post.source}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="hidden sm:inline text-white/70">Geser untuk baca ➔</span>
                    <span className="w-6 h-6 rounded-md bg-[#e2ff3b] text-black font-black text-xs flex items-center justify-center font-headline shadow-md">
                      {post.viralScore}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-text below card */}
            <div className="space-y-0.5 px-1">
              <div className="text-xs font-bold text-zinc-200 line-clamp-1 group-hover:text-white transition-colors">
                {post.title}
              </div>
              <div className="text-[11px] font-mono text-zinc-500">
                {post.source} · {post.timeAgo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
