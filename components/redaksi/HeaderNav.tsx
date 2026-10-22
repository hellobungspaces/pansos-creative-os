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
    <header className="sticky top-0 z-40 bg-[#090a0f]/95 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white text-black font-black font-headline text-base flex items-center justify-center">
            P
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e2ff3b]" />
            <span className="font-extrabold text-sm sm:text-base tracking-wider text-white font-headline">
              PANSOS CREATIVE
            </span>
            <span className="hidden md:inline px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">
              AI Redaksi OS
            </span>
          </div>
        </div>

        {/* Center Nav tabs matching screenshots */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => onSelectTab('ruang_redaksi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'ruang_redaksi'
                ? 'bg-zinc-800 text-white font-bold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-[#e2ff3b]" />
            <span>Ruang Redaksi</span>
          </button>

          <button
            onClick={() => onSelectTab('antrian_review')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'antrian_review'
                ? 'bg-zinc-800 text-white font-bold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Antrian Review</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#e2ff3b] text-black font-bold text-[10px]">
              {reviewCount}
            </span>
          </button>

          <button
            onClick={() => onSelectTab('editor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'editor'
                ? 'bg-zinc-800 text-white font-bold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5 text-purple-400" />
            <span>Editor Carousel</span>
          </button>

          <button
            onClick={() => onSelectTab('sumber_berita')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'sumber_berita'
                ? 'bg-zinc-800 text-white font-bold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Rss className="w-3.5 h-3.5 text-amber-400" />
            <span>Sumber Berita</span>
          </button>

          <button
            onClick={() => onSelectTab('instagram_grid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'instagram_grid'
                ? 'bg-zinc-800 text-white font-bold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5 text-rose-400" />
            <span>Feed Grid IG</span>
          </button>
        </nav>

        {/* Right CTA */}
        <button
          onClick={onSearchClick}
          disabled={isScouting}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all shrink-0 active:scale-95 ${
            isScouting
              ? 'bg-amber-950/40 border border-amber-500/50 text-amber-300 cursor-wait'
              : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-white'
          }`}
        >
          {isScouting ? (
            <>
              <Radio className="w-3.5 h-3.5 animate-spin text-[#e2ff3b]" />
              <span className="hidden sm:inline">Scouting Berita...</span>
            </>
          ) : (
            <>
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cari berita sekarang</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
