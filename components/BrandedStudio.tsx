'use client';

import React from 'react';
import { Sparkles, TrendingUp, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CLIENT_CASE_STUDIES, BRAND_PARTNERS } from '@/data/mediaData';

interface BrandedStudioProps {
  onOpenInquiryModal: () => void;
}

export const BrandedStudio: React.FC<BrandedStudioProps> = ({ onOpenInquiryModal }) => {
  return (
    <section id="studio" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0c0e13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                UNBOUND CREATIVE LAB
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Branded Content yang Tidak Terasa Seperti Iklan
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Generasi baru membenci hard-selling. Kami menyatukan DNA brand Anda ke dalam narasi subkultur, investigasi data, dan visual storytelling yang organik.
            </p>
          </div>

          <button
            onClick={onOpenInquiryModal}
            className="px-5 py-2.5 bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs rounded-xl shadow-lg shadow-lime-400/20 transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <span>KOLABORASI DENGAN LAB KAMI</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Brand Partners Marquee */}
        <div className="mb-14 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
          <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-4 text-center">
            BRAND & MITRA YANG MEMPERCAYAKAN NARASI MEREKA KEPADA KAMI
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 hover:opacity-100 transition-opacity">
            {BRAND_PARTNERS.map((brand, idx) => (
              <span
                key={idx}
                className="font-mono text-base md:text-xl font-black tracking-widest text-zinc-400 hover:text-white transition-colors select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111319] border border-zinc-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    CASE STUDY #{idx + 1}
                  </span>
                  <Award className="w-4 h-4 text-zinc-500" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {study.client}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400">
                    {study.campaign}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                  <div className="text-zinc-500 uppercase mb-1">Format Delivery:</div>
                  <div className="text-zinc-200">{study.format}</div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80">
                    <div className="text-[10px] text-zinc-500">IMPRESSIONS</div>
                    <div className="text-sm font-bold text-white">{study.results.impressions}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80">
                    <div className="text-[10px] text-zinc-500">ENGAGEMENT</div>
                    <div className="text-sm font-bold text-lime-400">{study.results.engagementRate}</div>
                  </div>
                </div>

                <div className="text-xs font-mono text-cyan-400 font-semibold">
                  ✓ {study.results.accountSignups || study.results.productSoldOut || study.results.trendingRank}
                </div>
              </div>

              {/* Client Quote */}
              <div className="pt-4 border-t border-zinc-800/80">
                <blockquote className="text-xs italic text-zinc-400 leading-relaxed">
                  {study.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
