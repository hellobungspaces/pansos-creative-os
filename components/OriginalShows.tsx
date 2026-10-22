'use client';

import React from 'react';
import { Play, Tv, Users, Calendar, ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import { NETWORK_SHOWS } from '@/data/mediaData';

interface OriginalShowsProps {
  onPlayEpisode: (title: string) => void;
}

export const OriginalShows: React.FC<OriginalShowsProps> = ({ onPlayEpisode }) => {
  return (
    <section id="shows" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                FLAGSHIP NETWORK IPS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Original Shows & Serial Program
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Kami tidak memproduksi artikel 'rewrite' murahan. Setiap serial memiliki host orisinal, riset lapangan mandiri, dan basis audiens setia.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Tv className="w-4 h-4 text-cyan-400" />
            <span>4 SERIAL AKTIF BERJALAN</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NETWORK_SHOWS.map((show) => (
            <div
              key={show.id}
              className="group bg-[#101217] border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Show Cover with Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                  <img
                    src={show.coverImage}
                    alt={show.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101217] via-transparent to-black/60 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[11px] font-mono font-bold rounded bg-black/80 backdrop-blur border border-white/20 text-cyan-400 uppercase">
                      ANCHOR: {show.primaryPlatform}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-black/80 backdrop-blur text-zinc-300">
                      {show.episodesCount} Episodes
                    </span>
                  </div>

                  {/* Bottom overlay in cover */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {show.title}
                    </h3>
                  </div>
                </div>

                {/* Show Content Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {show.tagline}
                  </p>

                  {/* Host info */}
                  <div className="flex items-center gap-3 py-3 border-y border-zinc-800/80">
                    <img
                      src={show.hostAvatar}
                      alt={show.host}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                    />
                    <div>
                      <div className="text-xs font-mono font-bold text-white">{show.host}</div>
                      <div className="text-[11px] font-mono text-zinc-400">{show.hostTitle}</div>
                    </div>
                  </div>

                  {/* Cadence & Reach Meta */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="truncate">{show.cadence}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      <span>{show.audienceReach}</span>
                    </div>
                  </div>

                  {/* Featured Episode Pill */}
                  <div 
                    onClick={() => onPlayEpisode(show.featuredEpisode.title)}
                    className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all flex items-center justify-between gap-3 group/ep"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover/ep:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-cyan-400" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase">EPISODE UNGGULAN:</div>
                        <div className="text-xs font-bold text-zinc-200 group-hover/ep:text-white truncate">
                          {show.featuredEpisode.title}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                      {show.featuredEpisode.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onPlayEpisode(show.title)}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 font-mono text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <span>TONTON ARCHIVE SERIAL LENGKAP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
