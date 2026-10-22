'use client';

import React, { useState } from 'react';
import { 
  Play, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  ExternalLink, 
  Sparkles, 
  Filter, 
  Flame, 
  Headphones, 
  CheckCircle2, 
  Radio, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { FEED_ITEMS, FeedItem } from '@/data/mediaData';

interface PlatformFeedsProps {
  onSelectItem: (item: FeedItem, mode: 'story' | 'article') => void;
  selectedPlatform: string;
  onFilterPlatform: (platform: string) => void;
}

export const PlatformFeeds: React.FC<PlatformFeedsProps> = ({ 
  onSelectItem, 
  selectedPlatform, 
  onFilterPlatform 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const platforms = [
    { id: 'all', label: 'All Channels', icon: Layers },
    { id: 'tiktok', label: 'TikTok (Shorts)', icon: Flame },
    { id: 'instagram', label: 'Instagram (Visual)', icon: Radio },
    { id: 'youtube', label: 'YouTube (Docs)', icon: Play },
    { id: 'podcast', label: 'Podcasts (Raw)', icon: Headphones },
    { id: 'x', label: 'X (Radar)', icon: Sparkles },
    { id: 'newsletter', label: 'VIP Dispatch', icon: ArrowUpRight },
  ];

  const categories = ['ALL', 'INVESTIGATION', 'SUBCULTURE', 'TECH & CAPITAL', 'RAW TAKE', 'INTERNET ANOMALY'];

  const filteredItems = FEED_ITEMS.filter((item) => {
    const matchesPlatform = selectedPlatform === 'all' || item.platform === selectedPlatform;
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    return matchesPlatform && matchesCategory;
  });

  return (
    <section id="feeds" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#090a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
                OMNICHANNEL REAL-TIME FEED
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Live Feed Stream // Tanpa Paywall
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Konten kami tidak tinggal di satu domain tertutup. Kami menyebarkannya langsung ke 6 platform. Klik postingan untuk membaca visual investigation atau membuka <strong className="text-white">Story Simulation Mode</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>SHOWING:</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 font-bold text-white">
              {filteredItems.length} Konten Kurasi
            </span>
          </div>
        </div>

        {/* Platform Selector Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isActive = selectedPlatform === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onFilterPlatform(p.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-lime-400 text-black font-bold border-lime-400 shadow-lg shadow-lime-400/20'
                    : 'bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Secondary Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-[11px] font-mono no-scrollbar border-b border-zinc-800/60">
          <span className="text-zinc-500 mr-2 uppercase">Kategori:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeCategory === cat
                  ? 'bg-zinc-800 text-lime-400 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Feed Cards Responsive Grid (Desktop 3-columns / Mobile 1-column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isVideoOrStory = item.platform === 'tiktok' || item.platform === 'instagram';
            return (
              <article
                key={item.id}
                className="group relative bg-[#111318] border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Card Media Preview */}
                  <div 
                    onClick={() => onSelectItem(item, isVideoOrStory ? 'story' : 'article')}
                    className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-zinc-950 cursor-pointer"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Platform Tag Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-black/70 backdrop-blur border border-white/20 text-lime-400">
                        {item.platform}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase rounded bg-zinc-900/80 backdrop-blur text-zinc-300">
                        {item.category}
                      </span>
                    </div>

                    {/* Play or Story Indicator Pill */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                      {item.metrics.duration && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 backdrop-blur text-white font-bold border border-white/10">
                          {item.metrics.duration}
                        </span>
                      )}
                      <div className="w-8 h-8 rounded-full bg-lime-400/90 group-hover:bg-lime-400 text-black flex items-center justify-center transition-all group-hover:scale-110 shadow-lg shadow-lime-400/30">
                        {item.platform === 'podcast' ? (
                          <Headphones className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4 fill-black" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    {/* Author & Published info */}
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          className="w-5 h-5 rounded-full object-cover border border-zinc-700"
                        />
                        <span className="text-zinc-300 font-medium truncate max-w-[120px]">
                          {item.author.name}
                        </span>
                        <CheckCircle2 className="w-3 h-3 text-lime-400 fill-lime-400/20" />
                      </div>
                      <span className="text-zinc-500 text-[11px]">{item.publishedAt}</span>
                    </div>

                    {/* Post Title */}
                    <h3 
                      onClick={() => onSelectItem(item, isVideoOrStory ? 'story' : 'article')}
                      className="text-base sm:text-lg font-bold text-white group-hover:text-lime-400 transition-colors line-clamp-2 leading-snug cursor-pointer mb-2.5"
                    >
                      {item.title}
                    </h3>

                    {/* Short Caption */}
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                      {item.caption}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-zinc-400 hover:text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Metrics & Quick Actions */}
                <div className="px-5 py-3.5 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 hover:text-rose-400 transition-colors">
                      <Heart className="w-3.5 h-3.5" />
                      <span>{item.metrics.likes}</span>
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{item.metrics.comments}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectItem(item, 'story')}
                      className="px-2.5 py-1 text-[11px] rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 transition-colors"
                    >
                      Story Mode
                    </button>
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-lime-400 transition-colors"
                      aria-label="Direct Link to Platform"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state safeguard */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-dashed border-zinc-800">
            <Radio className="w-10 h-10 text-zinc-600 mx-auto mb-3 animate-pulse" />
            <h3 className="text-base font-bold text-white mb-1">Tidak ada konten di filter ini</h3>
            <p className="text-xs font-mono text-zinc-400 mb-4">
              Coba reset filter channel untuk melihat seluruh live stream feed.
            </p>
            <button
              onClick={() => {
                onFilterPlatform('all');
                setActiveCategory('ALL');
              }}
              className="px-4 py-2 bg-lime-400 text-black font-mono font-bold text-xs rounded-lg"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
