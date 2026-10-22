'use client';

import React from 'react';
import { Radio, Zap, Flame, Sparkles } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  const tickerItems = [
    { tag: 'TRENDING #1', text: 'TikTok FYP Algoritma Update: Bobot "Sends to DM" naik 4x lipat dibanding likes.', icon: Flame },
    { tag: 'DISPATCH', text: 'Peta Bubble Properti Kafe Jaksel: 320 coffeeshop buka dalam 2 tahun terakhir.', icon: Radio },
    { tag: 'BREAKING', text: 'Regulasi AI regional Asia Tenggara resmi diterbitkan: agensi wajib watermark metadata.', icon: Zap },
    { tag: 'AUDIENCE MILESTONE', text: 'UNBOUND Media tembus 48.5M monthly cross-platform impressions di Q3.', icon: Sparkles },
    { tag: 'EPISODE DROP', text: 'Raw Take #42: "Gua Bangkrut Setelah Viral di TikTok" kini streaming di Spotify.', icon: Radio },
  ];

  return (
    <div className="bg-[#0f1117] border-y border-zinc-800/80 py-2.5 overflow-hidden select-none relative z-20">
      <div className="flex items-center gap-4">
        {/* Fixed label badge on desktop */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-lime-400 text-black font-mono text-xs font-bold tracking-wider rounded shrink-0 ml-4 shadow-sm shadow-lime-400/20">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span>LIVE RADAR</span>
        </div>

        {/* Marquee ticker */}
        <div className="flex overflow-hidden w-full">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {tickerItems.concat(tickerItems).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-zinc-300">
                  <span className="text-zinc-500 font-mono">[{idx % tickerItems.length + 1}]</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-800 text-lime-400 border border-zinc-700">
                    {item.tag}
                  </span>
                  <span className="text-zinc-300 hover:text-white transition-colors">
                    {item.text}
                  </span>
                  <span className="text-zinc-700 mx-2">///</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
