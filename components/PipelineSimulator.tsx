'use client';

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  Sparkles, 
  Radio, 
  Flame, 
  Sliders, 
  Send, 
  Layers, 
  Eye, 
  Clock, 
  Check, 
  Instagram,
  Database,
  Server,
  Zap
} from 'lucide-react';

export const PipelineSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<number>(0);
  const [isApproved, setIsApproved] = useState<boolean>(false);

  const scannedTrends = [
    {
      source: 'Twitter/X Radar',
      query: 'Pajak Hiburan 40% & Dampak Tutupnya Nightlife Jakarta',
      velocity: '+420% dlm 2 jam',
      score: 96,
      viralCategory: 'CULTURAL ANOMALY'
    },
    {
      source: 'TikTok Sound Pulse',
      query: 'Tren "Gua Karyawan 9-to-5 Tapi Punya 4 Side Hustle"',
      velocity: '2.8M views',
      score: 91,
      viralCategory: 'GEN-Z CAREER'
    },
    {
      source: 'Google News SEA',
      query: 'Diskon Belanja E-Commerce Dihapus: Dampak Konsumsi Kelas Menengah',
      velocity: '180K searches',
      score: 88,
      viralCategory: 'FINTECH & CAPITAL'
    }
  ];

  const generatedCarousel = [
    {
      slide: 1,
      type: 'HOOK HEADLINE (4:5)',
      title: 'PAJAK HIBURAN 40% RESMI BERLAKU: AKHIR DARI ERA NIGHTLIFE JAKARTA?',
      sub: 'Ratusan venue independen terancam gulung tikar. Tim riset kami membedah angka riilnya.',
      visual: 'Foto neon Senopati temaram monokrom + teks kuning brutalist tebal.'
    },
    {
      slide: 2,
      type: 'DATA BREAKDOWN',
      title: 'MARGIN OPERASIONAL VENUE INDEPENDEN',
      sub: 'Dengan sewa tempat Rp 600jt/thn dan pajak 40%, satu tiket live music wajib naik Rp 150.000 hanya untuk impas.',
      visual: 'Grafik infografis perbandingan biaya sebelum vs sesudah regulasi.'
    },
    {
      slide: 3,
      type: 'PROVOKASI AUDIENS',
      title: 'APAKAH TIKET KONSER AKAN MAKIN GHAIB?',
      sub: 'Tulis opini lo di kolom komentar: apakah ini regulasi sehat atau membunuh ekonomi kreatif muda?',
      visual: 'Background hitam pekat dengan typography neon minimalis.'
    }
  ];

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStep(1);
    setIsApproved(false);

    setTimeout(() => {
      setCurrentStep(2);
      setTimeout(() => {
        setCurrentStep(3);
        setTimeout(() => {
          setCurrentStep(4);
          setIsRunning(false);
        }, 1200);
      }, 1200);
    }, 1200);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0f15] border border-zinc-800 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime-400">
              SIMULASI SISTEM KERJA OTOMATIS
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Lihat Bagaimana Bot Menghasilkan Konten Siap Posting
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Tekan tombol untuk mensimulasikan alur dari pantau tren hingga masuk antrean posting Instagram.
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunning}
          className="px-5 py-3 bg-lime-400 hover:bg-lime-300 disabled:opacity-50 text-black font-mono font-bold text-xs rounded-xl shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
        >
          <Play className={`w-4 h-4 fill-black ${isRunning ? 'animate-spin' : ''}`} />
          <span>{isRunning ? 'BOT SEDANG BEKERJA...' : 'JALANKAN SIMULASI SEKARANG'}</span>
        </button>
      </div>

      {/* 4 Pipeline Stages Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { num: '01', title: 'Pantau Tren 24 Jam', desc: 'Scan Twitter, TikTok, Google', step: 1 },
          { num: '02', title: 'Filter Potensi Viral', desc: 'Scoring Algoritma AI (90+)', step: 2 },
          { num: '03', title: 'Generate Naskah & Desain', desc: 'Desain Carousel 4:5 Otomatis', step: 3 },
          { num: '04', title: 'Review & 1-Click Post', desc: 'Kirim ke Meta Graph API', step: 4 },
        ].map((item) => (
          <div
            key={item.step}
            className={`p-3.5 rounded-xl border transition-all ${
              currentStep === item.step
                ? 'bg-lime-400/10 border-lime-400 text-white shadow-lg shadow-lime-400/10'
                : currentStep > item.step
                ? 'bg-zinc-900/60 border-zinc-700 text-zinc-300'
                : 'bg-zinc-950/40 border-zinc-850 text-zinc-600'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono mb-1">
              <span className={currentStep === item.step ? 'text-lime-400 font-bold' : 'text-zinc-500'}>
                STAGE {item.num}
              </span>
              {currentStep > item.step ? (
                <Check className="w-3.5 h-3.5 text-lime-400" />
              ) : currentStep === item.step ? (
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              ) : null}
            </div>
            <div className="text-xs sm:text-sm font-bold truncate">{item.title}</div>
            <div className="text-[11px] text-zinc-400 truncate">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Stage Interactive Viewport */}
      <div className="bg-[#12141c] border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-lime-400 font-bold flex items-center gap-2">
                <Radio className="w-4 h-4 animate-pulse" />
                <span>RADAR SCRAPER AKTIF: MENYISIR 14 SUMBER INFORMASI 24/7</span>
              </span>
              <span>12 Topik Terdeteksi Menit Ini</span>
            </div>

            <div className="space-y-2.5">
              {scannedTrends.map((trend, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedTopic(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    selectedTopic === idx
                      ? 'bg-zinc-900 border-lime-400/80 text-white'
                      : 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                        {trend.source}
                      </span>
                      <span className="text-amber-400 font-bold">{trend.velocity}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold">{trend.query}</div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-zinc-500">VIRAL SCORE</div>
                      <div className="text-sm font-mono font-bold text-lime-400">{trend.score}/100</div>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-lime-400/10 text-lime-400 border border-lime-400/30">
                      TERPILIH OTOMATIS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4 text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-lime-400/10 border border-lime-400/30 text-lime-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="text-xs font-mono uppercase text-lime-400 tracking-wider font-bold">
              AI VIRAL FILTERING & ANGLE FORMULATOR
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white max-w-md mx-auto">
              Membedah Berita Menjadi Sudut Pandang Provokatif Folkative Style...
            </h4>
            <p className="text-xs font-mono text-zinc-400 max-w-sm mx-auto">
              Bot membuang basa-basi rilis pers, mengekstrak data kontras, dan menyusun hook 3 detik pertama.
            </p>
          </div>
        )}

        {(currentStep === 3 || currentStep === 4) && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-lime-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>CAROUSEL & CAPTION BERHASIL DI-RENDER OTOMATIS</span>
              </div>
              <span className="text-zinc-500">Format: 4:5 Instagram Feed</span>
            </div>

            {/* 3 Slides Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {generatedCarousel.map((slide) => (
                <div
                  key={slide.slide}
                  className="rounded-xl border border-zinc-800 bg-black p-5 flex flex-col justify-between aspect-[4/5] relative overflow-hidden shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Slide header */}
                  <div className="relative z-10 flex items-center justify-between border-b border-zinc-800 pb-2">
                    <span className="text-[10px] font-mono text-lime-400 font-bold">
                      SLIDE {slide.slide}/3
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">
                      {slide.type}
                    </span>
                  </div>

                  {/* Slide Body */}
                  <div className="relative z-10 space-y-2 py-4">
                    <h5 className="text-sm font-black text-white leading-tight uppercase">
                      {slide.title}
                    </h5>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {slide.sub}
                    </p>
                  </div>

                  {/* Slide Footer */}
                  <div className="relative z-10 pt-2 border-t border-zinc-800 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span>MEDIA IDENTITY LOGO</span>
                    <span className="text-lime-400 font-bold">1-SWIPE HOOK</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Approval Action Bar */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-zinc-300 text-center sm:text-left">
                <strong className="text-white block font-bold">Peran Tim Anda: Review & Approve</strong>
                Konten sudah lengkap beserta caption & 5 hashtag. Cukup 1 klik untuk tayang ke Instagram.
              </div>

              <div className="flex items-center gap-3">
                {isApproved ? (
                  <div className="px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>TERJADWAL KE INSTAGRAM!</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsApproved(true)}
                    className="px-5 py-2.5 bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>APPROVE & JADWALKAN KE IG</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
