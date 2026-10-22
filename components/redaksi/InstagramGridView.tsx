'use client';

import React from 'react';
import { Instagram, Heart, MessageCircle, Layers, CheckCircle2 } from 'lucide-react';
import { RedaksiPost } from '@/data/redaksiData';

interface InstagramGridViewProps {
  posts: RedaksiPost[];
  onSelectPost: (post: RedaksiPost) => void;
}

export const InstagramGridView: React.FC<InstagramGridViewProps> = ({
  posts,
  onSelectPost
}) => {
  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
      {/* Instagram Profile Header Simulation */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-zinc-800/80 pb-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0">
          <div className="w-full h-full bg-black rounded-full p-1 flex items-center justify-center font-black font-headline text-lg sm:text-xl text-[#e2ff3b] tracking-tighter ring-2 ring-[#e2ff3b]/40">
            KI
          </div>
        </div>

        <div className="space-y-3 text-center sm:text-left flex-1">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <h2 className="text-xl font-bold font-mono text-white flex items-center gap-1.5">
              <span>konoha.insight</span>
              <CheckCircle2 className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-[#e2ff3b]">
              Satirical Homeless Media
            </span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-6 text-xs font-mono text-zinc-300">
            <div><strong className="text-white font-bold">1,420</strong> posts</div>
            <div><strong className="text-white font-bold">3.1M</strong> warga konoha</div>
            <div><strong className="text-white font-bold">7</strong> hokage</div>
          </div>

          <p className="text-xs text-zinc-400 font-sans max-w-lg leading-relaxed">
            Warta Aktual & Refleksi Satir Realitas Warga Konoha. Fakta dari media kredibel, dibungkus sarkas cerdas untuk netizen yang butuh hiburan sekaligus pencerahan.
          </p>
        </div>
      </div>

      {/* The 3x3 Grid (Matching Screenshot 1) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
          <span className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-rose-400" />
            <span className="text-white font-bold uppercase tracking-wider">LIVE FEED GRID PREVIEW</span>
          </span>
          <span>Klik kartu untuk buka editor slide lengkap</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group cursor-pointer relative aspect-square rounded-xl overflow-hidden border border-zinc-800 bg-black flex flex-col justify-between shadow-xl hover:border-zinc-700 transition-all"
            >
              {/* Top Half: Photo */}
              <div className="relative h-1/2 w-full overflow-hidden bg-zinc-950">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-2 left-2 flex items-center gap-1.5 text-[9px] font-mono font-black text-white drop-shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2ff3b]" />
                  <span>KONOHA INSIGHT</span>
                </div>

                <div className="absolute top-2 right-2 text-white/90 drop-shadow">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Half: Theme Color Block (Default Royal Blue) */}
              <div 
                className="h-1/2 w-full p-3 flex flex-col justify-between text-white relative"
                style={{ backgroundColor: post.themeColor || '#2446f5' }}
              >
                <div>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-black uppercase bg-[#e2ff3b] text-black">
                    {post.category}
                  </span>
                </div>

                <div
                  className="text-xs sm:text-sm font-black font-headline text-white leading-tight uppercase line-clamp-3 my-0.5"
                  dangerouslySetInnerHTML={{ __html: post.highlightedTitle }}
                />

                <div className="flex items-center justify-between text-[8px] font-mono text-white/80 border-t border-white/20 pt-1">
                  <span className="truncate max-w-[100px]">Sumber: {post.source}</span>
                  <span>@konoha.insight</span>
                </div>
              </div>

              {/* Hover Overlay with Likes */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-mono text-xs backdrop-blur-sm pointer-events-none">
                <div className="flex items-center gap-1.5 font-bold">
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{post.viralScore * 340}</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{post.viralScore * 12}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
