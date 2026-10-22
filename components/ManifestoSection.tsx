'use client';

import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, Sparkles, Check, X, ArrowRight } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'philosophy'>('comparison');

  const comparisonRows = [
    {
      factor: 'Distribusi Konten',
      legacy: 'Memaksa pembaca buka website berat via link clickbait di bio',
      homeless: 'Native 100% langsung di feed TikTok, IG, YT & Spotify pengguna',
      winner: 'homeless'
    },
    {
      factor: 'Kecepatan & Friction',
      legacy: 'Loading 8 detik penuh pop-up iklan banner & video autoplay agresif',
      homeless: 'Zero friction: dikonsumsi langsung dalam swipe < 0.2 detik',
      winner: 'homeless'
    },
    {
      factor: 'Model Monetisasi',
      legacy: 'Programmatic display ads receh (CPM murah) yang merusak estetika',
      homeless: 'Kemitraan brand orisinal, creative storytelling & custom IP sponsorships',
      winner: 'homeless'
    },
    {
      factor: 'Demografi Pembaca',
      legacy: 'Didominasi pembaca usia 45+ tahun, retensi menurun setiap kuartal',
      homeless: '89.4% Gen-Z & Early Millennials dengan daya beli tinggi',
      winner: 'homeless'
    },
    {
      factor: 'Gaya Bahasa & Tone',
      legacy: 'Judul umpan klik (Clickbait) bertele-tele dipecah 5 halaman',
      homeless: 'Tajam, visual-first, berbasis data, tanpa filler tak berguna',
      winner: 'homeless'
    }
  ];

  return (
    <section id="manifesto" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0a0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow and Headline */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
              EDITORIAL MANIFESTO
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Kami Memilih Menjadi "Homeless"?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Kata "Homeless" bukan berarti tanpa rumah atau tanpa identitas. Ini adalah revolusi model distribusi media di era pasca-homepage.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'comparison'
                ? 'bg-lime-400 text-black border-lime-400 shadow-lg shadow-lime-400/20'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
          >
            MATRIKS: LEGACY MEDIA VS HOMELESS MEDIA
          </button>
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'philosophy'
                ? 'bg-lime-400 text-black border-lime-400 shadow-lg shadow-lime-400/20'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
          >
            FILOSOFI 3 PILAR DISTRIBUSI
          </button>
        </div>

        {/* Tab Content: Comparison Table */}
        {activeTab === 'comparison' ? (
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/90 text-xs font-mono text-zinc-400 uppercase">
                  <th className="p-4 sm:p-5 w-1/4">Dimensi Perbandingan</th>
                  <th className="p-4 sm:p-5 w-3/8 text-zinc-500">Legacy Media (Koran Online Lama)</th>
                  <th className="p-4 sm:p-5 w-3/8 text-lime-400">UNBOUND (Homeless Media)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-mono font-bold text-zinc-300">
                      {row.factor}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-400 bg-red-950/5">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.legacy}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-white bg-lime-950/10 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                        <span>{row.homeless}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Tab Content: 3 Pillars */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#111319] border border-zinc-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 flex items-center justify-center font-mono font-black text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Attention Liquidity</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Perhatian audiens mengalir bebas di timeline TikTok, Instagram Reels, dan YouTube Shorts. Mengarahkan mereka keluar dari aplikasi hanya akan membakar 90% audiens sebelum mereka sempat membaca baris pertama.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111319] border border-zinc-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center font-mono font-black text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Visual Synthesis</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Jurnalisme modern bukan teks 2.000 kata tanpa gambar. Jurnalisme modern adalah infografis spasial, peta data interaktif, micro-documentary 90 detik, dan audio essay yang bisa didengarkan sambil commute di MRT.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111319] border border-zinc-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/30 text-purple-400 flex items-center justify-center font-mono font-black text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-white">The Owned Safety Net</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Homeless media tidak naif terhadap risiko perubahan algoritma platform. Melalui newsletter VIP dan channel broadcast langsung, kami mengonversi penonton viral menjadi komunitas terverifikasi yang kami miliki 100%.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
