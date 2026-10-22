'use client';

import React, { useState } from 'react';
import { 
  Instagram, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Radio, 
  Clock, 
  Send,
  Sliders,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface TopicItem {
  id: string;
  source: string;
  category: string;
  headline: string;
  subheadline: string;
  timeAgo: string;
  slides: {
    number: number;
    title: string;
    body: string;
    footer: string;
  }[];
  caption: string;
}

const DEMO_TOPICS: TopicItem[] = [
  {
    id: 'topic-1',
    source: 'Twitter/X Trends SEA',
    category: 'REGULASI & KULTUR',
    headline: 'PAJAK HIBURAN 40% RESMI BERLAKU: AKHIR DARI ERA NIGHTLIFE JAKARTA?',
    subheadline: 'Ratusan venue musik dan ruang kreatif independen terancam gulung tikar. Tim riset kami membedah angka riilnya.',
    timeAgo: 'Terdeteksi 12 menit lalu',
    slides: [
      {
        number: 1,
        title: 'PAJAK HIBURAN 40% RESMI BERLAKU: AKHIR DARI ERA NIGHTLIFE JAKARTA?',
        body: 'Ratusan venue live music dan ruang kreatif independen terancam gulung tikar. Kami membedah angka riil di balik kebijakan ini.',
        footer: 'GESER UNTUK LIHAT DATA LENGKAP ➔'
      },
      {
        number: 2,
        title: 'MARGIN OPERASIONAL VENUE INDEPENDEN',
        body: 'Dengan sewa tempat Rp 600jt/tahun dan pajak 40%, satu tiket live music wajib naik Rp 150.000 hanya untuk menutup biaya operasional dasar.',
        footer: 'DATA SIMULASI KEUANGAN 2026'
      },
      {
        number: 3,
        title: 'APAKAH TIKET KONSER AKAN MAKIN GHAIB?',
        body: 'Apakah ini regulasi yang masuk akal atau justru membunuh industri kreatif generasi muda? Tulis pendapat lo di kolom komentar.',
        footer: 'SUARAKAN PENDAPAT DI KOMENTAR'
      }
    ],
    caption: 'Pajak hiburan resmi naik hingga 40%. Dampaknya langsung menghantam pelaku kreatif dan venue independen yang baru bangkit. Kami mengurai unit economics di balik harga tiket konser dan minuman.\n\nMenurut lo, kebijakan ini wajar atau bakal bikin skena kreatif mati suri?\n\n#KulturJakarta #EkonomiKreatif #PajakHiburan #BeritaPerkotaan'
  },
  {
    id: 'topic-2',
    source: 'TikTok Viral Pulse',
    category: 'ALGORITMA & MEDIA',
    headline: 'RAHASIA ALGORITMA 2026: METRIK "SENDS TO DM" NAIK 4X LIPAT DIBANDING LIKE',
    subheadline: 'Analisis 2.000 konten membuktikan bahwa jumlah share via chat pribadi kini mengontrol halaman Explore dan FYP.',
    timeAgo: 'Terdeteksi 34 menit lalu',
    slides: [
      {
        number: 1,
        title: 'RAHASIA ALGORITMA 2026: METRIK "SENDS TO DM" NAIK 4X LIPAT DIBANDING LIKE',
        body: 'Lupakan jumlah like publik. Berdasarkan data internal terbaru, metrik tunggal yang paling mendongkrak jangkauan adalah share via DM pribadi.',
        footer: 'GESER UNTUK LIHAT ANALISIS ➔'
      },
      {
        number: 2,
        title: 'KENAPA INSTAGRAM MENGUBAHNYA?',
        body: 'Pengguna Gen-Z lebih banyak menghabiskan waktu mengobrol di close friends group dibanding meninggalkan komentar di feed publik.',
        footer: 'RISET POLA PERILAKU GEN-Z'
      },
      {
        number: 3,
        title: 'CARA MEMANFAATKANNYA UNTUK KONTEN',
        body: 'Buat konten yang memicu audiens untuk mengirimkannya ke teman kantor atau pacar mereka. Bukan konten yang sekadar minta like.',
        footer: 'STRATEGI DISTRIBUSI KONTEN'
      }
    ],
    caption: 'Algoritma Instagram diam-diam mengubah formula jangkauan organik. Sekarang faktor penentu utama adalah berapa banyak orang yang mengirimkan postingan lo via DM ke teman mereka.\n\nShare postingan ini ke tim konten lo biar strategi kalian gak ketinggalan zaman.\n\n#SocialMediaStrategy #InstagramUpdate #AlgoritmaMedsos #KreatorKonten'
  },
  {
    id: 'topic-3',
    source: 'Google Trends & Riset',
    category: 'PROPERTY WATCH',
    headline: 'PETA GELEMBUNG 320 KAFE INDUSTRIAL JAKARTA SELATAN: 68% GAGAL BALIK MODAL',
    subheadline: 'Spekulasi sewa tanah komersial melonjak 35%, membuat margin penjualan kopi susu tidak lagi mampu menutup biaya sewa.',
    timeAgo: 'Terdeteksi 1 jam lalu',
    slides: [
      {
        number: 1,
        title: 'PETA GELEMBUNG 320 KAFE INDUSTRIAL JAKSEL: 68% GAGAL BALIK MODAL',
        body: 'Dalam 24 bulan terakhir, 320 kedai kopi baru dibuka di Jaksel. Namun data lapangan menunjukkan indikasi kuat bubble spekulasi tanah.',
        footer: 'GESER UNTUK LIHAT HITUNGAN MARGIN ➔'
      },
      {
        number: 2,
        title: 'HITUNGAN RIIL PER CUP KOPI',
        body: 'Dengan sewa tempat Rp 450jt/thn dan margin bersih Rp 8.000/cup, sebuah kafe wajib menjual 154 cup per hari 365 hari tanpa libur hanya untuk bayar tanah.',
        footer: 'UNIT ECONOMICS PER KAFE'
      },
      {
        number: 3,
        title: 'KAFE MANA YANG BAKAL SURVIVE?',
        body: 'Banyak kafe estetik hanya bertahan selama masa viral 90 hari pertama. Kafe langganan lo di Jaksel masih rame atau udah sepi?',
        footer: 'DROP KAFE UNDERRATED DI KOMEN'
      }
    ],
    caption: 'Bisnis coffeeshop di Jakarta Selatan bukan lagi sekadar soal rasa kopi, melainkan pertarungan menahan biaya sewa kavling komersial yang terus membengkak.\n\nSimak rincian unit economics per cup pada slide di atas.\n\n#JakartaSelatan #BisnisFnb #UnitEconomics #UrbanRealita'
  }
];

export const RedaksiCockpit: React.FC = () => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isApproved, setIsApproved] = useState(false);

  const activeTopic = DEMO_TOPICS[selectedTopicIndex];
  const activeSlide = activeTopic.slides[currentSlideIndex];

  const handleSelectTopic = (index: number) => {
    setSelectedTopicIndex(index);
    setCurrentSlideIndex(0);
    setIsApproved(false);
  };

  return (
    <section id="cockpit" className="py-16 sm:py-24 border-b border-zinc-200 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            <span>LIVE INTERACTIVE DEMO</span>
            <span>•</span>
            <span className="text-emerald-600 font-bold">100% PROGRAMMATIC PIPELINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Coba Langsung Cara Kerja Sistemnya
          </h2>
          <p className="text-sm text-zinc-600 mt-1 max-w-2xl">
            Pilih salah satu tren berita di kolom kiri. Lihat bagaimana bot langsung menulis naskah, merender kartu carousel 4:5, dan menyiapkan antrean siap posting ke Instagram.
          </p>
        </div>

        {/* Unified 3-Column Cockpit Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch bg-white border border-zinc-200 rounded-3xl p-4 sm:p-6 shadow-sm">
          {/* COLUMN 1: Tren Masuk 24 Jam (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 border-b lg:border-b-0 lg:border-r border-zinc-200 pb-5 lg:pb-0 lg:pr-5">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-900">
                  <Radio className="w-3.5 h-3.5 text-emerald-500" />
                  <span>TREN MASUK (24 JAM)</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Pilih topik:</span>
              </div>

              <div className="space-y-2.5">
                {DEMO_TOPICS.map((topic, idx) => {
                  const isSelected = selectedTopicIndex === idx;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => handleSelectTopic(idx)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-zinc-900 border-zinc-900 text-white shadow-sm'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100/70'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                        <span className={isSelected ? 'text-zinc-300' : 'text-zinc-500'}>
                          {topic.source}
                        </span>
                        <span className={isSelected ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-semibold'}>
                          {topic.category}
                        </span>
                      </div>
                      <div className="text-xs font-bold leading-snug line-clamp-2">
                        {topic.headline}
                      </div>
                      <div className={`text-[10px] font-mono mt-2 flex items-center gap-1 ${isSelected ? 'text-zinc-400' : 'text-zinc-400'}`}>
                        <Clock className="w-3 h-3" />
                        <span>{topic.timeAgo}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-[11px] font-mono text-zinc-600">
              ⚡ Bot menyisir keyword viral, membuang rilis pers klise, dan menyaring berita berkualitas tinggi secara otonom.
            </div>
          </div>

          {/* COLUMN 2: Carousel Render Canvas (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3 border-b lg:border-b-0 lg:border-r border-zinc-200 pb-5 lg:pb-0 lg:pr-5">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-3">
                <span className="text-xs font-mono font-bold text-zinc-900">
                  DESAIN CAROUSEL (4:5)
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  Slide {currentSlideIndex + 1} dari {activeTopic.slides.length}
                </span>
              </div>

              {/* Minimalist Editorial Folkative-Style Card Canvas */}
              <div className="relative aspect-[4/5] w-full rounded-2xl bg-zinc-950 text-white p-5 sm:p-6 flex flex-col justify-between shadow-md overflow-hidden">
                {/* Header branding */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-extrabold tracking-wider">
                    <span>BRAND_ANDA</span>
                    <span className="text-[9px] px-1 py-0.5 rounded bg-zinc-800 text-zinc-400">DISPATCH</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 uppercase">
                    SLIDE {activeSlide.number}/3
                  </span>
                </div>

                {/* Content text */}
                <div className="space-y-3 py-4">
                  <h3 className="text-sm sm:text-base font-black leading-tight uppercase tracking-tight text-white">
                    {activeSlide.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {activeSlide.body}
                  </p>
                </div>

                {/* Footer bar */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[9px] font-mono text-zinc-400">
                  <span>{activeSlide.footer}</span>
                  <span className="text-white font-bold">@brandanda</span>
                </div>
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] font-mono text-zinc-500">Navigasi Slide:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : activeTopic.slides.length - 1))}
                  className="p-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-100 text-zinc-700 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev < activeTopic.slides.length - 1 ? prev + 1 : 0))}
                  className="p-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-100 text-zinc-700 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Naskah, Caption & Approval (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <span className="text-xs font-mono font-bold text-zinc-900">
                  CAPTION & INSTAGRAM QUEUE
                </span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold">
                  ● READY TO PUBLISH
                </span>
              </div>

              {/* Caption preview box */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 font-mono space-y-2 max-h-[220px] overflow-y-auto">
                <div className="text-[10px] text-zinc-400 uppercase font-bold">Caption Otomatis:</div>
                <p className="whitespace-pre-line leading-relaxed text-[11px]">
                  {activeTopic.caption}
                </p>
              </div>

              {/* Meta API Payload Info */}
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-[11px] font-mono text-zinc-600 space-y-1">
                <div className="text-zinc-900 font-bold">Integrasi: Meta Graph API Resmi</div>
                <div>Status Payload: 3 Slides (1080x1350) + Caption siap kirim</div>
              </div>
            </div>

            {/* Approval Button Action */}
            <div className="pt-2">
              {isApproved ? (
                <div className="w-full py-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>BERHASIL TERJADWAL KE INSTAGRAM!</span>
                </div>
              ) : (
                <button
                  onClick={() => setIsApproved(true)}
                  className="w-full py-3 bg-zinc-950 hover:bg-black text-white text-xs font-mono font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Instagram className="w-4 h-4" />
                  <span>APPROVE & JADWALKAN KE IG</span>
                </button>
              )}
              <div className="text-[10px] font-mono text-zinc-400 text-center mt-2">
                Peran tim kamu cukup 1 klik review di HP tanpa perlu buka Photoshop/Canva.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
