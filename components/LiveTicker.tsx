'use client';

import React from 'react';
import { Radio, Zap, Flame, Sparkles, Server } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  const tickerItems = [
    { tag: 'SISTEM OTONOM', text: 'Pantau tren Twitter/X, TikTok, & Google 24 jam non-stop.', icon: Radio },
    { tag: 'WHITE-LABEL', text: '100% custom sesuai brand & warna media Anda. Jalan di VPS sendiri.', icon: Server },
    { tag: 'BELI PUTUS', text: 'Zero monthly subscription. Tidak ada biaya bulanan ke developer.', icon: Zap },
    { tag: 'KAPASITAS TINGGI', text: 'Mampu memproduksi hingga 100 konten carousel & naskah per hari.', icon: Flame },
    { tag: 'META GRAPH API', text: 'Tim tinggal review & 1-click approve langsung terjadwal ke Instagram.', icon: Sparkles },
  ];

  return (
    <div className="bg-[#0f1117] border-y border-zinc-800/80 py-2.5 overflow-hidden select-none relative z-20">
      <div className="flex items-center gap-4">
        {/* Fixed label badge on desktop */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-lime-400 text-black font-mono text-xs font-bold tracking-wider rounded shrink-0 ml-4 shadow-sm shadow-lime-400/20">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span>SISTEM REDAKSI AI</span>
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
