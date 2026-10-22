'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  PieChart, 
  Sparkles, 
  TrendingUp, 
  Download, 
  ArrowRight, 
  Check, 
  DollarSign, 
  Layers, 
  MapPin, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { DEMOGRAPHICS_DATA, GEOGRAPHY_DATA } from '@/data/mediaData';

interface MediaKitStatsProps {
  onOpenInquiryModal: () => void;
}

export const MediaKitStats: React.FC<MediaKitStatsProps> = ({ onOpenInquiryModal }) => {
  const [budgetTier, setBudgetTier] = useState<number>(50); // in millions IDR
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Estimator calculation
  const impressionsEstimate = Math.round(budgetTier * 165000); // ~165k impressions per 1M IDR
  const reachEstimate = Math.round(budgetTier * 92000);
  const engagementEstimate = Math.round(impressionsEstimate * 0.094);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="media-kit" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#090a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
                AUDIENCE DATA & RATE CARD
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Media Kit 2026 // Data Transparan
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Kami tidak menjual banner kosong atau bot impressions. Kami menghubungkan brand dengan generasi muda paling cerdas dan skeptis di Asia Tenggara.
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl text-xs font-mono text-white flex items-center gap-2 transition-all group"
          >
            <Download className="w-4 h-4 text-lime-400 group-hover:scale-110 transition-transform" />
            <span>{downloadSuccess ? '✓ PDF SEDANG DIUNDUH' : 'DOWNLOAD MEDIA KIT (PDF)'}</span>
          </button>
        </div>

        {/* 2-Column Analytics & Simulator Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Demographics & Geo (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Age Distribution Card */}
            <div className="p-6 rounded-2xl bg-[#111318] border border-zinc-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-lime-400" />
                  <h3 className="text-sm font-mono font-bold text-white uppercase">
                    Distribusi Usia Audiens (Terverifikasi Meta & ByteDance)
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/20">
                  89% Gen-Z & Millennial
                </span>
              </div>

              <div className="space-y-4">
                {DEMOGRAPHICS_DATA.map((demo) => (
                  <div key={demo.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-300">{demo.label}</span>
                      <span className="font-bold text-white">{demo.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${demo.percentage}%`,
                          backgroundColor: demo.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic Hubs Card */}
            <div className="p-6 rounded-2xl bg-[#111318] border border-zinc-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-mono font-bold text-white uppercase">
                    Pusat Konsentrasi Geografis
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Urban Core SEA</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {GEOGRAPHY_DATA.map((geo) => (
                  <div
                    key={geo.city}
                    className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-zinc-300 truncate">{geo.city}</span>
                    <span className="font-bold text-lime-400 shrink-0 ml-2">{geo.share}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Rate & ROI Simulator (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#141720] to-[#0e1015] border border-zinc-700/80 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-lime-400 uppercase tracking-wider font-bold">
                    INTERACTIVE SIMULATOR
                  </span>
                  <h3 className="text-lg font-bold text-white">Estimasi ROI Kampanye Brand</h3>
                </div>
                <Sparkles className="w-5 h-5 text-lime-400" />
              </div>

              {/* Budget Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">Alokasi Budget Kampanye:</span>
                  <span className="text-base font-mono font-black text-lime-400">
                    Rp {budgetTier}.000.000
                  </span>
                </div>

                <input
                  type="range"
                  min="20"
                  max="250"
                  step="10"
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-lime-400"
                />

                <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                  <span>Rp 20 Jt (Starter)</span>
                  <span>Rp 120 Jt (Growth)</span>
                  <span>Rp 250 Jt+ (Omnichannel)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-400 mb-1">EST. IMPRESSIONS</div>
                  <div className="text-lg sm:text-xl font-mono font-black text-white">
                    {impressionsEstimate.toLocaleString()}+
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400">Garansi Kontrak 100%</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-400 mb-1">EST. REACH</div>
                  <div className="text-lg sm:text-xl font-mono font-black text-white">
                    {reachEstimate.toLocaleString()}
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400">Unduplicated Audience</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 col-span-2">
                  <div className="text-[10px] font-mono text-zinc-400 mb-1">PROYEKSI SAVES & SHARES (VIRALITY)</div>
                  <div className="text-lg sm:text-xl font-mono font-black text-lime-400">
                    {engagementEstimate.toLocaleString()} Interaksi
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-1">
                    Format rekomendasi: 2x TikTok Reel native + 1x IG In-Depth Carousel + Telegram VIP Highlight.
                  </div>
                </div>
              </div>

              {/* Inquiry Action */}
              <button
                onClick={onOpenInquiryModal}
                className="w-full py-3.5 bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs rounded-xl shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>AJUKAN BRIEF KAMPANYE / DISKUSI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
