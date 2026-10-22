'use client';

import React from 'react';
import { Check, X, ShieldCheck, DollarSign } from 'lucide-react';

export const CostBreakdown: React.FC = () => {
  return (
    <section id="biaya" className="py-16 sm:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            HITUNGAN REALITA OPERASIONAL
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Gaji 6 Orang Tim Redaksi vs Sistem Beli Putus di VPS Sendiri
          </h2>
          <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
            Membangun homeless media secara manual butuh tim besar yang memakan puluhan juta rupiah setiap bulan hanya untuk memproduksi 3–5 postingan sehari.
          </p>
        </div>

        {/* 2 Clean Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Cara Manual */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="border-b border-zinc-200 pb-3">
                <span className="text-[11px] font-mono text-zinc-500 uppercase">MODEL LAMA</span>
                <h3 className="text-lg font-bold text-zinc-950">Rekrut Tim Redaksi Manual</h3>
              </div>

              <div className="space-y-2 text-xs font-mono text-zinc-700">
                <div className="flex justify-between py-1.5 border-b border-zinc-200/60">
                  <span>• 3 Content Writer / Reporter</span>
                  <span className="font-semibold text-zinc-900">Rp 15.000.000 / bln</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-200/60">
                  <span>• 2 Graphic Designer Carousel</span>
                  <span className="font-semibold text-zinc-900">Rp 12.000.000 / bln</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-200/60">
                  <span>• 1 Social Media Admin</span>
                  <span className="font-semibold text-zinc-900">Rp 6.000.000 / bln</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-200/60 text-center space-y-1">
                <div className="text-[10px] font-mono text-zinc-600 uppercase">Total Pengeluaran Rutin:</div>
                <div className="text-xl font-mono font-black text-zinc-950">
                  Rp 33.000.000 / Bulan
                </div>
                <div className="text-[11px] font-mono text-zinc-500">
                  (Membakar ~Rp 396 Juta per tahun)
                </div>
              </div>

              <div className="space-y-2 text-xs text-zinc-600 pt-1">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>Kapasitas terbatas: cuma sanggup 3 - 5 posting per hari.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>Tren dini hari / malam minggu sering terlewat karena jam kantor.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>Risiko burnout, revisi molor, dan turnover tim tinggi.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Sistem Redaksi Otonom */}
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900 text-white border border-zinc-800 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                    100% WHITE-LABEL
                  </span>
                  <h3 className="text-lg font-bold text-white">Sistem Redaksi Otonom</h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300">
                  BELI PUTUS
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono text-zinc-300">
                <div className="flex justify-between py-1.5 border-b border-zinc-800">
                  <span>⚡ Kapasitas Produksi</span>
                  <span className="font-bold text-white">Sampai 100 Konten / Hari</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800">
                  <span>🕒 Jam Operasional</span>
                  <span className="font-bold text-emerald-400">24 Jam Non-Stop</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800">
                  <span>👤 Kebutuhan Tim</span>
                  <span className="font-bold text-white">1 Reviewer (10 Menit/Hari di HP)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-center space-y-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Skema Pembayaran:</div>
                <div className="text-xl font-mono font-black text-emerald-400">
                  SEKALI BAYAR (BELI PUTUS)
                </div>
                <div className="text-[11px] font-mono text-zinc-300">
                  GAK ADA BIAYA LANGGANAN BULANAN KE SAYA!
                </div>
              </div>

              <div className="space-y-2 text-xs text-zinc-300 pt-1 font-medium">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Jalan di server VPS kamu sendiri (~$10/bln dibayar langsung ke cloud provider).</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Desain carousel disesuaikan dengan font, warna & logo khas brand kamu.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Source code & token API Meta 100% milik kamu selamanya.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
