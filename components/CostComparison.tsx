'use client';

import React from 'react';
import { X, Check, DollarSign, TrendingDown, Users, Zap, ShieldCheck } from 'lucide-react';

export const CostComparison: React.FC = () => {
  return (
    <section id="comparison" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0a0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-lime-400 mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>HITUNGAN BISNIS & EFISIENSI REAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Gaji 6 Orang Redaksi vs 1 Sistem Otomatis Beli Putus
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Membangun homeless media manual membutuhkan tim besar yang menghabiskan puluhan juta rupiah setiap bulan. Sistem ini membalik seluruh ekonomi produksi konten Anda.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Cara Tradisional / Manual */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121318] border border-red-500/20 relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold">
                    CARA MANUAL KONVENSIONAL
                  </span>
                  <h3 className="text-xl font-bold text-white">Gaji Tim Redaksi Full-Time</h3>
                </div>
                <div className="p-2.5 rounded-full bg-rose-500/10 text-rose-500">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              {/* Monthly Cost Breakdown */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-zinc-300">• 3 Content Writer / Reporter</span>
                  <span className="text-white font-bold">Rp 15.000.000 / bln</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-zinc-300">• 2 Graphic Designer Carousel</span>
                  <span className="text-white font-bold">Rp 12.000.000 / bln</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-zinc-300">• 1 Sosmed Specialist / Admin Post</span>
                  <span className="text-white font-bold">Rp 6.000.000 / bln</span>
                </div>
              </div>

              {/* Total cost pill */}
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1 text-center">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Pengeluaran Bulanan Rutin:</div>
                <div className="text-2xl font-mono font-black text-rose-400">
                  ~ Rp 33.000.000 / Bulan
                </div>
                <div className="text-[11px] font-mono text-zinc-500">
                  (Membakar Rp 396 Juta setiap tahun)
                </div>
              </div>

              {/* Limitations */}
              <div className="space-y-2 text-xs text-zinc-400 pt-2">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Kapasitas terbatas: cuma sanggup 3 - 5 konten per hari.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Tren dini hari / weekend sering terlewat karena jam kerja 8 jam.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Risiko burnout, revisi desain molor, dan turnover karyawan tinggi.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Sistem Redaksi Otonom (Beli Putus) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#151922] to-[#0e1118] border-2 border-lime-400 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-lime-400 text-black font-mono font-black text-[10px] tracking-wider uppercase shadow-md shadow-lime-400/30">
              100% WHITE-LABEL • SEKALI BAYAR
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-700/80 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-lime-400 font-bold">
                    SISTEM REDAKSI OTOMATIS
                  </span>
                  <h3 className="text-xl font-bold text-white">Satu Bot = Seluruh Tim Redaksi</h3>
                </div>
                <div className="p-2.5 rounded-full bg-lime-400/20 text-lime-400">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              {/* System Advantages */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-zinc-900/90 border border-zinc-700">
                  <span className="text-zinc-200">⚡ Kapasitas Produksi</span>
                  <span className="text-lime-400 font-bold">Hingga 100 Konten / Hari</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-zinc-900/90 border border-zinc-700">
                  <span className="text-zinc-200">🕒 Waktu Operasional</span>
                  <span className="text-lime-400 font-bold">24 Jam Non-Stop (Real-time)</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-zinc-900/90 border border-zinc-700">
                  <span className="text-zinc-200">👤 Peran Manusia</span>
                  <span className="text-white font-bold">Cukup 1 Reviewer (10 Menit/Hari)</span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-xl bg-lime-400/10 border border-lime-400/40 space-y-1 text-center">
                <div className="text-[11px] font-mono text-zinc-300 uppercase font-bold">
                  Skema Pembayaran:
                </div>
                <div className="text-2xl font-mono font-black text-lime-400">
                  SEKALI BAYAR (BELI PUTUS)
                </div>
                <div className="text-[11px] font-mono text-white font-semibold">
                  TIDAK ADA BIAYA LANGGANAN BULANAN KE SAYA!
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 text-xs text-zinc-200 pt-2 font-medium">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>Jalan di server & VPS milik Anda sendiri (Data 100% aman).</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>Desain carousel otomatis disesuaikan dengan font, warna, & logo brand Anda.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>Full source code, API keys Meta milik Anda, tanpa perantara.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
