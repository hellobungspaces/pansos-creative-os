'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw, 
  Download, 
  Sliders, 
  Smartphone, 
  Share2, 
  Radio, 
  Layers, 
  Flame, 
  Eye, 
  ArrowRight,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';

export interface GeneratedPack {
  topic: string;
  category: string;
  headline: string;
  subtitle: string;
  viralScore: number;
  igCarousel: {
    slides: { slideNumber: number; title: string; content: string; visualCue: string }[];
    caption: string;
    hashtags: string[];
  };
  tiktokScript: {
    duration: string;
    audioSuggestion: string;
    hookVisual: string;
    script: { time: string; visual: string; voiceover: string }[];
  };
  xThread: string[];
  cardTheme?: 'brutalist' | 'neon' | 'editorial' | 'monochrome';
}

const PRESET_TOPICS = [
  {
    title: 'Bubble Properti Kafe Industrial di Jakarta Selatan',
    category: 'INVESTIGASI SPASIAL',
    headline: 'PETA GELEMBUNG 320 KAFE INDUSTRIAL JAKSEL & REALITA HARGA SEWA TANAH',
    subtitle: 'Riset spasial mengungkap 68% kedai kopi baru gagal balik modal dalam 18 bulan.',
  },
  {
    title: 'De-influencing & Fenomena "Trash Aesthetic" Brand Mewah',
    category: 'CULTURAL TECH',
    headline: 'KENAPA BALENCIAGA & BRAND MEWAH SENGAJA MEMAKAI FOTO KAMERA BURIK?',
    subtitle: 'Strategi anti-iklan untuk menembus kelelahan audiens Gen-Z terhadap promosi korporat.',
  },
  {
    title: 'Kematian Like Publik: Bobot Algoritma "Sends to DM"',
    category: 'ALGORITHM WATCH',
    headline: 'RAHASIA ALGORITMA 2026: BERITA VIRAL BUKAN DARI LIKE, TAPI DARI SHARE VIA DM',
    subtitle: 'Analisis 2.000 konten membuktikan metrik percakapan pribadi menguasai Explore.',
  },
  {
    title: 'Karyawan 9-to-5 Beralih ke Creator Economy: Realita Burnout',
    category: 'RAW TAKE',
    headline: 'GUA KELUAR DARI KANTOR GARA-GARA VIRAL DI TIKTOK: REALITA BURNOUT 8-FIGURE',
    subtitle: 'Kisah nyata di balik ilusi kebebasan finansial kreator konten independen.',
  }
];

export const HomelessMediaGenerator: React.FC = () => {
  const [topicInput, setTopicInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('INVESTIGATION');
  const [toneInput, setToneInput] = useState<'sharp' | 'satire' | 'business'>('sharp');
  const [activeTab, setActiveTab] = useState<'visual' | 'carousel' | 'tiktok' | 'x'>('visual');
  const [aspectRatio, setAspectRatio] = useState<'4:5' | '9:16'>('4:5');
  const [cardTheme, setCardTheme] = useState<'brutalist' | 'neon' | 'editorial' | 'monochrome'>('brutalist');
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const sampleBackgrounds = [
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1579208575657-c595a053b977?w=900&auto=format&fit=crop&q=80'
  ];

  // Active state data
  const [pack, setPack] = useState<GeneratedPack>({
    topic: 'Bubble Properti Kafe Industrial di Jakarta Selatan',
    category: 'INVESTIGASI SPASIAL',
    headline: 'PETA GELEMBUNG 320 KAFE INDUSTRIAL JAKSEL & REALITA HARGA SEWA TANAH',
    subtitle: 'Riset spasial mengungkap 68% kedai kopi baru gagal balik modal dalam 18 bulan karena lonjakan spekulasi tanah komersial.',
    viralScore: 94,
    igCarousel: {
      slides: [
        {
          slideNumber: 1,
          title: 'HOOK UTAMA',
          content: 'PETA GELEMBUNG 320 KAFE INDUSTRIAL JAKSEL & REALITA BIAYA SEWA TANAH',
          visualCue: 'Foto satelit heatmap radius 5km Senopati - Blok M dengan pin merah menyala.'
        },
        {
          slideNumber: 2,
          title: 'DATA ANOMALI',
          content: 'Dalam 24 bulan terakhir, 320 coffeeshop baru dibuka di Jaksel. 84% memiliki estetika semen ekspos identik dan menu kopi susu yang sama.',
          visualCue: 'Grafik batang perbandingan jumlah kafe dibuka vs occupancy rate harian.'
        },
        {
          slideNumber: 3,
          title: 'MARGIN REALITY',
          content: 'Dengan harga sewa rerata Rp 450jt/tahun dan margin bersih Rp 8.000 per cup, sebuah kafe butuh menjual 154 cup per hari HANYA untuk bayar sewa tempat.',
          visualCue: 'Breakdown unit economics per cup: beans, susu, packaging, listrik, sewa.'
        },
        {
          slideNumber: 4,
          title: 'DAMPAK BUDAYA',
          content: 'Kafe bukan lagi bisnis F&B murni. Ini adalah alat spekulasi pemilik tanah untuk menaikkan harga jual kavling di mata developer.',
          visualCue: 'Kutipan anonim mantan manajer operasional chain F&B independen.'
        },
        {
          slideNumber: 5,
          title: 'DEBATE PROVOCATION',
          content: 'Apakah kafe langganan lo bakal bertahan sampai tahun depan? Drop kafe terenak yang menurut lo underrated di komen.',
          visualCue: 'Background hitam pekat dengan font neon bold besar.'
        }
      ],
      caption: 'Investigasi Spasial UNBOUND: Kenapa kafe-kafe estetik di Jaksel sering gonta-ganti nama dalam hitungan bulan? Kami membedah data harga sewa tanah dan unit economics bisnis kopi susu. Baca selengkapnya pada slide di atas.\n\n#JakartaUrban #BisnisKopi #GenZFinansial #HomelessMedia #VisualJournalism',
      hashtags: ['#JakartaUrban', '#BisnisKopi', '#GenZFinansial', '#HomelessMedia', '#VisualJournalism']
    },
    tiktokScript: {
      duration: '58 Detik',
      audioSuggestion: 'Original Sound - UNBOUND Dark Lo-Fi Synth (110 BPM)',
      hookVisual: 'Tangan menunjuk peta Jaksel yang ditempeli ratusan struk kopi mahal, kamera zoom in cepat.',
      script: [
        {
          time: '00:00 - 00:04',
          visual: 'Fast cuts 5 kafe semen ekspos berbeda di Blok M & Senopati dengan flash silau.',
          voiceover: '"Pernah mikir ga, kenapa hampir semua kafe baru di Jaksel bentuknya sama persis dan kopinya seharga 45 ribu?"'
        },
        {
          time: '00:04 - 00:18',
          visual: 'Grafik kalkulator digital menghitung margin cup kopi di layar HP.',
          voiceover: '"Tim riset kami ngumpulin data 320 kafe. Dengan sewa tempat 450 juta setahun, satu kafe wajib jual 150 cup per hari cuma buat bayar tanah, belum gaji barista."'
        },
        {
          time: '00:18 - 00:38',
          visual: 'B-roll wawancara narasumber suara disamarkan di sudut kafe remang.',
          voiceover: '"Faktanya: 68% ga pernah balik modal. Kafe-kafe ini sengaja dibikin rame 6 bulan pertama cuma buat naikin valuasi tanah sebelum ditutup."'
        },
        {
          time: '00:38 - 00:58',
          visual: 'Teks tebal di layar: "SHARE KE TEMEN KANTOR LO YANG MAU RESIGN BIKIN KAFE".',
          voiceover: '"Share video ini ke temen lo yang masih punya cita-cita resign kantor cuma buat buka kafe estetik tanpa ngitung unit economics."'
        }
      ]
    },
    xThread: [
      '1/5 Kenapa dalam 2 tahun terakhir ada 320 kafe industrial minimalis dibuka di radius 5km Jakarta Selatan? Dan kenapa 68% di antaranya tutup sebelum bulan ke-18? Sebuah investigasi data spasial singkat 🧵👇',
      '2/5 Pertama: Ilusi Margin Kopi. Margin kotor biji kopi memang tinggi (80%), tapi di Jaksel, musuh utama bukan harga biji kopi—melainkan spekulasi tanah komersial yang melonjak 35% pasca pandemi.',
      '3/5 Hitungan riil: Rerata sewa tempat di area Senopati/Dharmawangsa = Rp 400M - Rp 650M per tahun. Margin bersih rata-rata per cup kopi susu = Rp 7.500 - Rp 9.000.',
      '4/5 Artinya, pemilik wajib menjual minimal 140-160 cup PER HARI, 365 hari tanpa libur, HANYA untuk menutup biaya sewa lokasi. Begitu fase viral TikTok habis (biasanya 90 hari), bakar uang dimulai.',
      '5/5 Kesimpulan: Kebanyakan kafe estetik bukan bisnis F&B, tapi showroom sementara penunggu deal properti. Menurut kalian kafe mana yang paling overhyped sekarang?'
    ]
  });

  const handleGenerate = (customTopic?: string) => {
    setIsGenerating(true);
    const chosenTopic = customTopic || topicInput.trim() || PRESET_TOPICS[0].title;

    setTimeout(() => {
      // Find preset or build dynamically
      const matched = PRESET_TOPICS.find((p) => p.title.toLowerCase().includes(chosenTopic.toLowerCase()));

      const finalHeadline = matched ? matched.headline : `INVESTIGASI KHUSUS: BONGKAR REALITA DI BALIK ${chosenTopic.toUpperCase()}`;
      const finalSubtitle = matched ? matched.subtitle : `Bedah fenomena, data lapangan, dan dampak sistemik bagi generasi muda perkotaan.`;

      setPack({
        topic: chosenTopic,
        category: categoryInput,
        headline: finalHeadline,
        subtitle: finalSubtitle,
        viralScore: Math.floor(Math.random() * 8) + 91, // 91 - 98
        igCarousel: {
          slides: [
            {
              slideNumber: 1,
              title: 'COVER HOOK',
              content: finalHeadline,
              visualCue: 'Visual minimalis dengan tipografi kontras tinggi & neon highlight.'
            },
            {
              slideNumber: 2,
              title: 'THE CORE PROBLEM',
              content: `Apa yang sebenarnya terjadi di balik tren ${chosenTopic}? Ini bukan sekadar obrolan linimasa biasa.`,
              visualCue: 'Data chart infografis dengan breakdown persentase pertumbuhan.'
            },
            {
              slideNumber: 3,
              title: 'UNSEEN REALITY',
              content: 'Kami mengumpulkan data dari pelaku lapangan dan narasumber anonim untuk membedah unit economics di baliknya.',
              visualCue: 'Kutipan tegas berukuran besar dengan foto subjek monokrom.'
            },
            {
              slideNumber: 4,
              title: 'WHY NOW?',
              content: 'Mengapa fenomena ini meledak sekarang dan bagaimana dampaknya ke audiens Gen-Z & profesional muda?',
              visualCue: 'Peta timeline atau diagram aliran sebab-akibat.'
            },
            {
              slideNumber: 5,
              title: 'COMMUNITY CTA',
              content: 'Bagikan sudut pandang lo di kolom komentar. Apakah ini tren wajar atau sudah red flag?',
              visualCue: 'Pertanyaan kontroversial untuk memicu perdebatan di kolom komen.'
            }
          ],
          caption: `Laporan Eksklusif UNBOUND: ${finalHeadline}.\n\nKami mengurai fakta lapangan, data riset, dan analisis kultur yang tidak dibahas media konvensional. Geser ke kanan untuk membaca ringkasan lengkap.\n\n#HomelessMedia #UNBOUNDReport #KulturDigital #VisualJournalism`,
          hashtags: ['#HomelessMedia', '#UNBOUNDReport', '#KulturDigital', '#VisualJournalism']
        },
        tiktokScript: {
          duration: '52 Detik',
          audioSuggestion: 'Original Sound - UNBOUND Investigation Pulse (Dark Ambient Synth)',
          hookVisual: `Kamera genggam bergerak cepat menyorot dokumen headline '${chosenTopic}', teks kuning menyala di tengah layar.`,
          script: [
            {
              time: '00:00 - 00:03',
              visual: 'Visual cepat 3 klip kontras dengan transisi glitch.',
              voiceover: `"Banyak orang belum sadar kalau isu ${chosenTopic} ini sebenarnya sudah di ujung tanduk."`
            },
            {
              time: '00:03 - 00:16',
              visual: 'Tampilan infografis bergerak menunjukkan poin data krusial.',
              voiceover: '"Berdasarkan data yang tim kami kumpulkan, ada anomali besar yang sengaja ditutup-tutupi dari publik umum."'
            },
            {
              time: '00:16 - 00:36',
              visual: 'Potongan dokumenter lapangan dengan teks kutipan narasumber.',
              voiceover: '"Dampaknya langsung terasa ke pengeluaran dan gaya hidup harian kita tanpa kita sadari."'
            },
            {
              time: '00:36 - 00:52',
              visual: 'Teks ajakan membagikan video via DM pribadi ke teman kerja.',
              voiceover: '"Kirim video ini ke orang yang wajib tahu sebelum semuanya terlambat. Menurut lo gimana?"'
            }
          ]
        },
        xThread: [
          `1/5 Kenapa fenomena "${chosenTopic}" mendadak jadi perbincangan hangat di kalangan profesional muda? Sebuah rangkuman investigasi cepat 🧵👇`,
          `2/5 Masalah ini berakar dari pergeseran kultur digital yang jarang dianalisis secara mendalam oleh media arus utama.`,
          `3/5 Temuan data: Lebih dari 70% responden yang kami telusuri mengalami dampak langsung dari perubahan lanskap ini.`,
          `4/5 Banyak brand dan agensi mulai mengubah strategi mereka secara diam-diam untuk mengantisipasi gejolak berikutnya.`,
          `5/5 Kesimpulan: Jangan tertipu oleh narasi permukaan. Drop pendapat kalian di bawah, apakah ini peluang atau jebakan baru?`
        ]
      });
      setIsGenerating(false);
    }, 600);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="generator" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#07080b] relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[300px] bg-lime-400/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-lime-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>HOMELESS MEDIA CONTENT & VIRALITY LAB</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Homeless Media Generator™
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Buat paket konten editorial bergaya <strong className="text-white">Folkative, USS Feed, atau NowThis</strong> dalam hitungan detik. Hasilkan grafis kartu visual, naskah carousel IG, skrip video TikTok 60 detik, dan utas viral di X secara instan.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center font-mono font-bold text-sm">
              AI
            </div>
            <div className="text-xs font-mono">
              <div className="text-white font-bold">VIRAL ANGLE ENGINE v2.6</div>
              <div className="text-zinc-500">Tuned for Native High-Retention Feeds</div>
            </div>
          </div>
        </div>

        {/* Input & Prompt Studio Controls */}
        <div className="p-6 rounded-2xl bg-[#0f1117] border border-zinc-800 shadow-xl mb-10 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4 text-lime-400" />
              1. Pilih Topik Siap Pakai atau Masukkan Ide Berita
            </span>
            <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
              Otomatis menghasilkan 4 format platform
            </span>
          </div>

          {/* Quick Preset Buttons */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-zinc-400">Topik Populer / Trending Radar:</span>
            <div className="flex flex-wrap gap-2">
              {PRESET_TOPICS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTopicInput(p.title);
                    setCategoryInput(p.category);
                    handleGenerate(p.title);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border text-left ${
                    pack.topic === p.title
                      ? 'bg-lime-400 text-black font-bold border-lime-400'
                      : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
            <div className="md:col-span-6">
              <label className="block text-xs font-mono text-zinc-400 mb-1">Topik Kustom Anda:</label>
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                placeholder="Contoh: Kenaikan Pajak Hiburan & Kematian Nightlife Jakarta..."
                className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 font-mono"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-mono text-zinc-400 mb-1">Kategori Editorial:</label>
              <select
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                className="w-full p-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-lime-400"
              >
                <option value="INVESTIGASI SPASIAL">INVESTIGASI SPASIAL</option>
                <option value="CULTURAL TECH">CULTURAL TECH</option>
                <option value="RAW TAKE">RAW TAKE</option>
                <option value="ALGORITHM WATCH">ALGORITHM WATCH</option>
                <option value="GEN-Z FINANSIAL">GEN-Z FINANSIAL</option>
              </select>
            </div>

            <div className="md:col-span-3 flex items-end">
              <button
                onClick={() => handleGenerate()}
                disabled={isGenerating}
                className="w-full py-2.5 px-4 bg-lime-400 hover:bg-lime-300 disabled:opacity-50 text-black font-mono font-bold text-xs rounded-xl shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                <span>{isGenerating ? 'MEMPROSES...' : 'GENERATE PAKET'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Output Workspace: Tabs & Previews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols): Live Visual Graphic Card (Folkative / Homeless Style) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-white font-bold">
                <ImageIcon className="w-4 h-4 text-lime-400" />
                <span>LIVE CARD GRAPHIC PREVIEW</span>
              </div>

              {/* Aspect Ratio Switcher */}
              <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-[11px] font-mono">
                <button
                  onClick={() => setAspectRatio('4:5')}
                  className={`px-2 py-0.5 rounded ${aspectRatio === '4:5' ? 'bg-zinc-800 text-lime-400 font-bold' : 'text-zinc-500'}`}
                >
                  4:5 (IG)
                </button>
                <button
                  onClick={() => setAspectRatio('9:16')}
                  className={`px-2 py-0.5 rounded ${aspectRatio === '9:16' ? 'bg-zinc-800 text-lime-400 font-bold' : 'text-zinc-500'}`}
                >
                  9:16 (Story)
                </button>
              </div>
            </div>

            {/* The Visual Graphic Canvas Card */}
            <div
              id="generated-card-canvas"
              className={`relative w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl transition-all duration-300 bg-black flex flex-col justify-between ${
                aspectRatio === '4:5' ? 'aspect-[4/5]' : 'aspect-[9/16]'
              }`}
            >
              {/* Card Background Image with Gradient Overlay */}
              <img
                src={sampleBackgrounds[bgImageIndex]}
                alt="Card visual"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
              />

              {/* Gradient Mask for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none" />

              {/* Card Header (Logo, Tag, Handle) */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-lime-400 text-black font-mono font-black text-sm rounded flex items-center justify-center">
                    U
                  </div>
                  <div className="text-[11px] font-mono font-bold tracking-wider text-white">
                    UNBOUND<span className="text-lime-400">.MEDIA</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded bg-black/80 backdrop-blur border border-white/20 text-lime-400">
                  {pack.category}
                </span>
              </div>

              {/* Card Center / Bottom Content Area */}
              <div className="relative z-10 p-5 sm:p-6 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-lime-400/20 text-lime-400 border border-lime-400/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                  <span>EXCLUSIVE DISPATCH</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight">
                  {pack.headline}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans line-clamp-3">
                  {pack.subtitle}
                </p>

                {/* Card Footer Bar */}
                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>SWIPE FOR FULL DATA RISSET ➔</span>
                  <span className="text-white font-bold">14.8M DISTRIBUTED NETWORK</span>
                </div>
              </div>
            </div>

            {/* Graphic Customizer Controls */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono">
              <span className="text-zinc-400">Ganti Background Foto:</span>
              <div className="flex gap-1.5">
                {sampleBackgrounds.map((bg, idx) => (
                  <button
                    key={idx}
                    onClick={() => setBgImageIndex(idx)}
                    className={`w-6 h-6 rounded-md overflow-hidden border-2 ${
                      bgImageIndex === idx ? 'border-lime-400' : 'border-zinc-700'
                    }`}
                  >
                    <img src={bg} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Multi-Platform Output Tabs */}
          <div className="lg:col-span-7 space-y-4">
            {/* Format Tabs Switcher */}
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('carousel')}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'carousel'
                    ? 'bg-lime-400 text-black font-bold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Instagram Carousel (5 Slides)</span>
              </button>

              <button
                onClick={() => setActiveTab('tiktok')}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'tiktok'
                    ? 'bg-lime-400 text-black font-bold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>TikTok / Reels Script</span>
              </button>

              <button
                onClick={() => setActiveTab('x')}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'x'
                    ? 'bg-lime-400 text-black font-bold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>X / Threads Storm</span>
              </button>
            </div>

            {/* TAB 1: INSTAGRAM CAROUSEL OUTPUT */}
            {activeTab === 'carousel' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-lime-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>NATIVE 5-SLIDE CAROUSEL SCRIPT</span>
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        pack.igCarousel.slides.map((s) => `[SLIDE ${s.slideNumber}: ${s.title}]\n${s.content}\n(Visual Cue: ${s.visualCue})`).join('\n\n') +
                          `\n\n[CAPTION]:\n${pack.igCarousel.caption}`,
                        'carousel'
                      )
                    }
                    className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded text-[11px] flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedKey === 'carousel' ? 'Tersalin!' : 'Salin Semua Slide'}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {pack.igCarousel.slides.map((slide) => (
                    <div
                      key={slide.slideNumber}
                      className="p-4 rounded-xl bg-[#111319] border border-zinc-800/90 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-zinc-900 text-lime-400 font-bold border border-zinc-800">
                          SLIDE {slide.slideNumber} // {slide.title}
                        </span>
                        <span className="text-[10px] text-zinc-500">FORMAT 4:5</span>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-white pt-1">
                        {slide.content}
                      </p>
                      <div className="text-[11px] font-mono text-zinc-400 italic pt-1">
                        🎨 Visual Cue: {slide.visualCue}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Caption & Hashtags box */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="text-xs font-mono text-zinc-400 font-bold uppercase">Caption & Hashtag:</div>
                  <p className="text-xs text-zinc-300 font-mono whitespace-pre-line leading-relaxed">
                    {pack.igCarousel.caption}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: TIKTOK / REELS 60S SCRIPT OUTPUT */}
            {activeTab === 'tiktok' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">
                      DURASI: {pack.tiktokScript.duration}
                    </span>
                    <span className="text-zinc-400 truncate max-w-[200px]">
                      🎵 {pack.tiktokScript.audioSuggestion}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(
                        `[TIKTOK REEL SCRIPT]\nDurasi: ${pack.tiktokScript.duration}\nAudio: ${pack.tiktokScript.audioSuggestion}\n\n` +
                          pack.tiktokScript.script
                            .map((s) => `[${s.time}]\nVisual: ${s.visual}\nVoiceover: ${s.voiceover}`)
                            .join('\n\n'),
                        'tiktok'
                      )
                    }
                    className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded text-[11px] flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedKey === 'tiktok' ? 'Tersalin!' : 'Salin Skrip'}</span>
                  </button>
                </div>

                {/* Hook Highlight */}
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs font-mono space-y-1">
                  <span className="text-cyan-400 font-bold uppercase">0-3s Visual Hook:</span>
                  <div className="text-zinc-200">{pack.tiktokScript.hookVisual}</div>
                </div>

                {/* Step by step timeline table */}
                <div className="space-y-3">
                  {pack.tiktokScript.script.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#111319] border border-zinc-800 space-y-2 text-xs font-mono"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lime-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          {step.time}
                        </span>
                      </div>
                      <div className="text-zinc-400">
                        <strong className="text-zinc-300">Visual B-Roll:</strong> {step.visual}
                      </div>
                      <div className="text-white font-medium pl-2 border-l-2 border-lime-400 text-xs sm:text-sm">
                        {step.voiceover}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: X / THREADS STORM */}
            {activeTab === 'x' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-lime-400 font-bold">5-PART VIRAL THREAD STORM</span>
                  <button
                    onClick={() => copyToClipboard(pack.xThread.join('\n\n'), 'x')}
                    className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded text-[11px] flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedKey === 'x' ? 'Tersalin!' : 'Salin Seluruh Utas'}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {pack.xThread.map((tweet, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#111319] border border-zinc-800 text-xs sm:text-sm text-zinc-200 font-sans leading-relaxed relative group"
                    >
                      <p>{tweet}</p>
                      <button
                        onClick={() => copyToClipboard(tweet, `tweet-${idx}`)}
                        className="mt-2 text-[10px] font-mono text-zinc-500 hover:text-lime-400 flex items-center gap-1 transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedKey === `tweet-${idx}` ? 'Tersalin!' : 'Salin tweet ini'}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
