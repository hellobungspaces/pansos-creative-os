'use client';

import React from 'react';
import { Search, Radio, Layers, Edit3, Rss, Grid3X3, Sparkles } from 'lucide-react';

interface HeaderNavProps {
  activeTab: 'ruang_redaksi' | 'antrian_review' | 'editor' | 'sumber_berita' | 'instagram_grid';
  onSelectTab: (tab: 'ruang_redaksi' | 'antrian_review' | 'editor' | 'sumber_berita' | 'instagram_grid') => void;
  reviewCount: number;
  onSearchClick: () => void;
  isScouting?: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  onSelectTab,
  reviewCount,
  onSearchClick,
  isScouting = false
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200/90 px-4 sm:px-8 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#e2ff3b] text-black font-black font-headline text-base flex items-center justify-center tracking-tighter shadow border border-black/10">
            KI
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-extrabold text-sm sm:text-base tracking-wider text-zinc-900 font-headline">
              KONOHA INSIGHT
            </span>
            <span className="hidden md:inline px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-100 text-zinc-700 border border-zinc-200 font-semibold">
              @konoha.insight
            </span>
          </div>
        </div>

        {/* Center Nav tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => onSelectTab('ruang_redaksi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'ruang_redaksi'
                ? 'bg-zinc-900 text-white font-bold shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-emerald-500" />
            <span>Ruang Redaksi</span>
          </button>

          <button
            onClick={() => onSelectTab('antrian_review')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'antrian_review'
                ? 'bg-zinc-900 text-white font-bold shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-500" />
            <span>Antrian Review</span>
            <span className={`px-1.5 py-0.2 rounded-full font-bold text-[10px] ${
              activeTab === 'antrian_review' ? 'bg-[#e2ff3b] text-black' : 'bg-zinc-200 text-zinc-800'
            }`}>
              {reviewCount}
            </span>
          </button>

          <button
            onClick={() => onSelectTab('editor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'editor'
                ? 'bg-zinc-900 text-white font-bold shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5 text-purple-500" />
            <span>Editor Carousel</span>
          </button>

          <button
            onClick={() => onSelectTab('sumber_berita')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'sumber_berita'
                ? 'bg-zinc-900 text-white font-bold shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Rss className="w-3.5 h-3.5 text-amber-500" />
            <span>Sumber Berita</span>
          </button>

          <button
            onClick={() => onSelectTab('instagram_grid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'instagram_grid'
                ? 'bg-zinc-900 text-white font-bold shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5 text-rose-500" />
            <span>Feed Grid IG</span>
          </button>
        </nav>

        {/* Right CTA */}
        <button
          onClick={onSearchClick}
          disabled={isScouting}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all shrink-0 active:scale-95 ${
            isScouting
              ? 'bg-amber-100 border border-amber-300 text-amber-900 cursor-wait'
              : 'bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-900 font-medium shadow-sm'
          }`}
        >
          {isScouting ? (
            <>
              <Radio className="w-3.5 h-3.5 animate-spin text-amber-600" />
              <span className="hidden sm:inline">Scouting Berita...</span>
            </>
          ) : (
            <>
              <Search className="w-3.5 h-3.5 text-zinc-600" />
              <span className="hidden sm:inline">Cari berita sekarang</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
