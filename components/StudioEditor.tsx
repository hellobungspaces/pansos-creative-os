'use client';

import React, { useState, useRef } from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  Sliders, 
  Image as ImageIcon,
  Type,
  Share2,
  ExternalLink
} from 'lucide-react';

interface SlideData {
  number: number;
  type: string;
  headline: string;
  subtext: string;
  footer?: string;
  footerText?: string;
}

interface PresetStory {
  topicName: string;
  category: string;
  slides: SlideData[];
  caption: string;
  hashtags: string[];
}

const PRESET_STORIES: PresetStory[] = [
  {
    topicName: 'Thrifting vs Fast Fashion Gen-Z',
    category: 'CULTURE & CONSUMPTION',
    slides: [
      {
        number: 1,
        type: 'HOOK HEADLINE',
        headline: 'KENAPA GEN-Z LEBIH BANGGA PAKAI BAJU BEKAS PASAR SENEN DIBANDING FAST FASHION MALL?',
        subtext: 'Bukan cuma soal hemat. Pasar Senen & Gedebage kini jadi simbol status subkultur baru.',
        footer: 'GESER UNTUK LIHAT DATA ➔'
      },
      {
        number: 2,
        type: 'THE SHIFT',
        headline: 'PENURUNAN TRAFIK FAST FASHION SEBESAR 24%',
        subtext: 'Survei 1.200 anak muda di Jakarta dan Bandung membuktikan 76% merasa memakai baju thrift vintage terasa jauh lebih autentik dibanding baju massal mall.',
        footer: 'RISET PERILAKU KONSUMEN'
      },
      {
        number: 3,
        type: 'ECONOMIC REALITY',
        headline: 'EKONOMI KURASI: DARI MODAL 35 RIBU JADI 350 RIBU',
        subtext: 'Ekosistem thrifting telah melahirkan ribuan kurator muda di Instagram yang menjual kembali pakaian vintage dengan margin keuntungan hingga 800%.',
        footer: 'UNIT ECONOMICS THRIFTING'
      },
      {
        number: 4,
        type: 'ENVIRONMENTAL SKEPTICISM',
        headline: 'APAKAH THRIFTING BENAR-BENAR MENYELAMATKAN BUMI?',
        subtext: 'Faktanya: Indonesia mengimpor jutaan ton sampah tekstil per tahun. 40% pakaian bekas impor berakhir di TPA Bantar Gebang tanpa pernah terjual.',
        footer: 'SISI GELAP INDUSTRI THRIFT'
      },
      {
        number: 5,
        type: 'DEBATE QUESTION',
        headline: 'LO SENDIRI LEBIH SERING THRIFTING ATAU BELI BARU DI MALL?',
        subtext: 'Drop tempat hunting baju vintage terfavorit lo di kolom komentar.',
        footer: 'SUARAKAN PENDAPAT DI KOMENTAR'
      }
    ],
    caption: 'Thrifting bukan lagi sekadar alternatif murah, ini sudah jadi statement identitas generasi baru. Tapi di balik romantisasi Pasar Senen, ada dampak limbah tekstil yang jarang dibahas.\n\nLo tim yang selalu hunting baju vintage atau tetap beli baru di mall? Tulis di bawah 👇\n\n#ThriftCulture #GenZFashion #PasarSenen #KulturUrban #HomelessMedia',
    hashtags: ['#ThriftCulture', '#GenZFashion', '#PasarSenen', '#KulturUrban', '#HomelessMedia']
  },
  {
    topicName: 'Bubble Kafe Industrial Jaksel',
    category: 'PROPERTY & URBAN REALITY',
    slides: [
      {
        number: 1,
        type: 'HOOK HEADLINE',
        headline: 'PETA GELEMBUNG 320 KAFE INDUSTRIAL JAKSEL & REALITA HARGA SEWA TANAH',
        subtext: 'Riset lapangan membuktikan 68% kedai kopi baru gagal balik modal dalam 18 bulan pertama.',
        footer: 'GESER UNTUK ANALISIS LENGKAP ➔'
      },
      {
        number: 2,
        type: 'DATA ANOMALY',
        headline: '320 KAFE DIBUKA DALAM RADIUS 5KM DALAM 24 BULAN',
        subtext: 'Hampir seluruhnya mengusung desain semen ekspos yang sama dan menu es kopi susu dengan kisaran harga identik (Rp 35.000 - Rp 45.000).',
        footer: 'DATA SPASIAL JAKARTA SELATAN'
      },
      {
        number: 3,
        type: 'MARGIN REALITY',
        headline: 'HARUS JUAL 154 CUP PER HARI CUMA BUAT BAYAR SEWA',
        subtext: 'Dengan rerata sewa tanah Rp 450 Juta per tahun di area Senopati/Dharmawangsa, margin kopi susu tak lagi cukup menutup biaya operasional.',
        footer: 'UNIT ECONOMICS PER CUP'
      },
      {
        number: 4,
        type: 'THE SPECULATION',
        headline: 'KAFE BUKAN BISNIS F&B, MELAINKAN SHOWROOM PENUNGGU TANAH',
        subtext: 'Banyak pemilik kavling sengaja menyewakan tanah ke kafe estetik untuk memancing keramaian sementara sebelum tanah dijual ke developer.',
        footer: 'ANALISIS PROPERTI KOMERSIAL'
      },
      {
        number: 5,
        type: 'DEBATE QUESTION',
        headline: 'KAFE LANGGANAN LO DI JAKSEL MASIH BERTAHAN ATAU UDAH GANTI NAMA?',
        subtext: 'Drop kafe yang menurut lo kopinya beneran enak dan bukan cuma modal estetik doang.',
        footer: 'KOMENTAR DI BAWAH'
      }
    ],
    caption: 'Bisnis kopi di Jaksel bukan lagi soal cita rasa biji kopi, melainkan pertarungan menahan laju harga sewa tanah komersial. Kami membedah unit economics di balik secangkir es kopi susu.\n\nSimak slide 1-5 untuk data lengkapnya.\n\n#JakartaSelatan #BisnisKopi #KafeJaksel #UnitEconomics #UrbanWatch',
    hashtags: ['#JakartaSelatan', '#BisnisKopi', '#KafeJaksel', '#UnitEconomics', '#UrbanWatch']
  },
  {
    topicName: 'Algoritma "Sends to DM" 2026',
    category: 'ALGORITHM WATCH',
    slides: [
      {
        number: 1,
        type: 'HOOK HEADLINE',
        headline: 'KENAPA JUMLAH SHARE VIA DM SEKARANG 4X LEBIH BERPENGARUH DIBANDING LIKE?',
        subtext: 'Perubahan algoritma terbesar di 2026 yang wajib dipahami semua kreator & pemilik media.',
        footer: 'GESER UNTUK LIHAT CARA KERJANYA ➔'
      },
      {
        number: 2,
        type: 'THE METRIC',
        headline: 'KEMATIAN LIKE PUBLIK DI FEED',
        subtext: 'Berdasarkan uji A/B terhadap 2.000 akun media, postingan yang banyak di-share ke DM pribadi mendapatkan jangkauan Explore 5x lebih luas.',
        footer: 'DATA METRIKS INSTAGRAM'
      },
      {
        number: 3,
        type: 'BEHAVIORAL SHIFT',
        headline: 'GEN-Z LEBIH SUKA NGOBROL DI PRIVATE CHAT',
        subtext: 'Komentar publik di feed semakin sepi karena audiens lebih nyaman berdiskusi di grup WhatsApp atau DM Instagram bersama teman dekat.',
        footer: 'PERGESERAN PERILAKU SOSIAL'
      },
      {
        number: 4,
        type: 'CONTENT STRATEGY',
        headline: 'JANGAN MINTA LIKE, BUAT MEREKA INGIN SHARE KE TEMAN KANTOR',
        subtext: 'Formula viral sekarang: buat konten yang memicu percakapan ("Ini lo banget", "Coba baca ini", "Gila parah banget").',
        footer: 'FORMULA VIRALITY TERBARU'
      },
      {
        number: 5,
        type: 'CALL TO ACTION',
        headline: 'KIRIM POSTINGAN INI KE TIM MEDSOS ATAU TEMAN KREATOR LO',
        subtext: 'Biar strategi konten kalian di 2026 gak ketinggalan zaman.',
        footer: 'SHARE POSTINGAN INI KE TEMAN LO'
      }
    ],
    caption: 'Algoritma Instagram diam-diam mengubah bobot jangkauan. Metrik like publik sudah tidak lagi jadi penentu utama Explore—melainkan jumlah orang yang membagikannya via DM.\n\nKirim postingan ini ke tim medsos lo sekarang!\n\n#SocialMediaHacks #InstagramAlgorithm #CreatorEconomy #HomelessMedia',
    hashtags: ['#SocialMediaHacks', '#InstagramAlgorithm', '#CreatorEconomy', '#HomelessMedia']
  }
];

const BACKGROUND_PRESETS = [
  { name: 'Dark Noir', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&auto=format&fit=crop&q=80' },
  { name: 'Urban Street', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&auto=format&fit=crop&q=80' },
  { name: 'Editorial Studio', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80' },
  { name: 'Subculture Tape', url: 'https://images.unsplash.com/photo-1579208575657-c595a053b977?w=900&auto=format&fit=crop&q=80' },
  { name: 'Pure Solid', url: '' }
];

export const StudioEditor: React.FC = () => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeStory, setActiveStory] = useState<PresetStory>(PRESET_STORIES[0]);
  const [customBrandName, setCustomBrandName] = useState('YOUR_MEDIA');
  const [customBrandHandle, setCustomBrandHandle] = useState('@yourmedia.id');
  const [selectedBgIndex, setSelectedBgIndex] = useState(0);
  const [themeMode, setThemeMode] = useState<'brutalist' | 'clean' | 'cyber'>('brutalist');
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [customTopicInput, setCustomTopicInput] = useState('');
  const [isExporting, setIsExporting] = useState(false);

  const activeSlide = activeStory.slides[currentSlideIndex];

  // In-line slide editing
  const handleUpdateHeadline = (newText: string) => {
    const updatedSlides = [...activeStory.slides];
    updatedSlides[currentSlideIndex].headline = newText;
    setActiveStory({ ...activeStory, slides: updatedSlides });
  };

  const handleUpdateSubtext = (newText: string) => {
    const updatedSlides = [...activeStory.slides];
    updatedSlides[currentSlideIndex].subtext = newText;
    setActiveStory({ ...activeStory, slides: updatedSlides });
  };

  // Generate Custom Story based on user input
  const handleGenerateCustom = () => {
    if (!customTopicInput.trim()) return;
    const topic = customTopicInput.trim();
    const newStory: PresetStory = {
      topicName: topic,
      category: 'COMMUNITY DISPATCH',
      slides: [
        {
          number: 1,
          type: 'HOOK HEADLINE',
          headline: `KENAPA ISU "${topic.toUpperCase()}" TIBA-TIBA RAMAI DIBICARAKAN?`,
          subtext: `Fenomena yang sedang hangat di linimasa. Kami mengumpulkan fakta dan suara dari lapangan.`,
          footer: 'GESER UNTUK RINGKASAN LENGKAP ➔'
        },
        {
          number: 2,
          type: 'DATA & ANOMALI',
          headline: `FAKTA YANG JARANG DIKETAHUI PUBLIK TENTANG ${topic.toUpperCase()}`,
          subtext: `Berdasarkan perbincangan dan data terkini, ada pergeseran perilaku yang cukup signifikan di kalangan generasi muda.`,
          footer: 'DATA ANALISIS LAPANGAN'
        },
        {
          number: 3,
          type: 'IMPACT ANALYSIS',
          headline: 'DAMPAK RIILNYA TERHADAP KESEHARIAN KITA',
          subtext: 'Bukan sekadar obrolan viral sesaat, ini berpotensi mengubah lanskap tren dan industri terkait dalam beberapa bulan ke depan.',
          footer: 'IMPLIKASI JANGKA PANJANG'
        },
        {
          number: 4,
          type: 'THE OTHER PERSPECTIVE',
          headline: 'SUDUT PANDANG LAIN YANG PERLU DIKRITISI',
          subtext: 'Banyak pihak yang pro dan kontra terhadap narasi ini. Kritis dalam menyaring informasi adalah kunci.',
          footer: 'PERSPEKTIF ALTERNATIF'
        },
        {
          number: 5,
          type: 'COMMUNITY DEBATE',
          headline: `MENURUT LO, TREN ${topic.toUpperCase()} INI WAJAR ATAU UDAH BERLEBIHAN?`,
          subtext: 'Tulis opini jujur lo di kolom komentar sekarang.',
          footer: 'DROP KOMENTAR LO DI BAWAH'
        }
      ],
      caption: `Pembahasan hangat seputar ${topic}. Kami mengumpulkan fakta lapangan dan rangkuman poin-poin krusial yang perlu kamu ketahui.\n\nSimak slide 1 sampai 5 untuk ringkasan lengkap.\n\n#${topic.replace(/\s+/g, '')} #HomelessMedia #OpenFolk #KulturDigital`,
      hashtags: [`#${topic.replace(/\s+/g, '')}`, '#HomelessMedia', '#OpenFolk', '#KulturDigital']
    };

    setActiveStory(newStory);
    setCurrentSlideIndex(0);
  };

  // Native Client-Side HTML5 Canvas Export to Crisp 1080x1350px PNG
  const exportCurrentSlideAsPng = () => {
    setIsExporting(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw background
    const bgUrl = BACKGROUND_PRESETS[selectedBgIndex].url;

    const renderText = () => {
      // Dark gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, 0, 1350);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.75)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1080, 1350);

      // Top branding bar
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px -apple-system, sans-serif';
      ctx.fillText(customBrandName.toUpperCase(), 70, 95);

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 24px monospace';
      ctx.fillText(`SLIDE ${activeSlide.number}/5`, 880, 95);

      // Category Pill
      ctx.fillStyle = '#10b981';
      ctx.fillRect(70, 140, 260, 44);
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 22px monospace';
      ctx.fillText(activeStory.category, 85, 170);

      // Headline Word Wrap (1080px width)
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 62px -apple-system, BlinkMacSystemFont, sans-serif';
      const words = activeSlide.headline.split(' ');
      let line = '';
      let y = 320;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > 940 && n > 0) {
          ctx.fillText(line, 70, y);
          line = words[n] + ' ';
          y += 82;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 70, y);

      // Subtitle text Word Wrap
      ctx.fillStyle = '#d4d4d8';
      ctx.font = '400 36px -apple-system, sans-serif';
      const subWords = activeSlide.subtext.split(' ');
      let subLine = '';
      let subY = y + 70;
      for (let n = 0; n < subWords.length; n++) {
        const testSubLine = subLine + subWords[n] + ' ';
        const subMetrics = ctx.measureText(testSubLine);
        if (subMetrics.width > 940 && n > 0) {
          ctx.fillText(subLine, 70, subY);
          subLine = subWords[n] + ' ';
          subY += 52;
        } else {
          subLine = testSubLine;
        }
      }
      ctx.fillText(subLine, 70, subY);

      // Footer divider line
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(70, 1240);
      ctx.lineTo(1010, 1240);
      ctx.stroke();

      // Footer texts
      ctx.fillStyle = '#a1a1aa';
      ctx.font = 'bold 26px monospace';
      ctx.fillText(activeSlide.footerText || activeSlide.footer || '', 70, 1290);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px -apple-system, sans-serif';
      ctx.fillText(customBrandHandle, 830, 1290);

      // Direct download trigger
      const link = document.createElement('a');
      link.download = `${customBrandName.toLowerCase()}-slide-${activeSlide.number}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsExporting(false);
    };

    if (bgUrl) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 1080, 1350);
        renderText();
      };
      img.onerror = () => {
        ctx.fillStyle = '#09090b';
        ctx.fillRect(0, 0, 1080, 1350);
        renderText();
      };
      img.src = bgUrl;
    } else {
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, 1080, 1350);
      renderText();
    }
  };

  const copyCaption = () => {
    navigator.clipboard?.writeText(activeStory.caption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  return (
    <section className="py-8 sm:py-12 bg-zinc-950 text-white min-h-[calc(100vh-65px)] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Workspace Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                OPEN STUDIO CANVAS // INSTAGRAM CAROUSEL (4:5)
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              Studio Generator Konten Homeless Media
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              Ketik topik apa saja atau pilih preset. Edit teksnya langsung di kartu dan download sebagai PNG (1080x1350px).
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={exportCurrentSlideAsPng}
              disabled={isExporting}
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Merender...' : `Download Slide ${activeSlide.number} (PNG)`}</span>
            </button>

            <button
              onClick={copyCaption}
              className="px-3.5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs rounded-xl transition-all flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedCaption ? 'Caption Tersalin!' : 'Copy Caption'}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Split Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Controls & Prompts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Custom Input */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  1. Masukkan Topik / Isu Bebas:
                </span>
                <span className="text-[10px] font-mono text-zinc-500">Auto 5-Slide</span>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={customTopicInput}
                  onChange={(e) => setCustomTopicInput(e.target.value)}
                  placeholder="Contoh: Tren Konser & FOMO Tiket Mahal..."
                  className="flex-1 px-3.5 py-2 bg-zinc-950 border border-zinc-700 rounded-xl text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-emerald-400"
                />
                <button
                  onClick={handleGenerateCustom}
                  className="px-4 py-2 bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs rounded-xl transition-all active:scale-95 shrink-0"
                >
                  Generate
                </button>
              </div>

              {/* Quick Presets */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono text-zinc-400">Atau pilih preset viral:</span>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_STORIES.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedPresetIndex(idx);
                        setActiveStory(PRESET_STORIES[idx]);
                        setCurrentSlideIndex(0);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all border ${
                        activeStory.topicName === preset.topicName
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 font-bold'
                          : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      {preset.topicName}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Brand Identity */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
                <Type className="w-4 h-4 text-emerald-400" />
                2. Brand Media Kamu (Watermark):
              </span>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <label className="block text-zinc-400 mb-1">Nama Brand:</label>
                  <input
                    type="text"
                    value={customBrandName}
                    onChange={(e) => setCustomBrandName(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-xl text-white font-mono focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Handle Instagram:</label>
                  <input
                    type="text"
                    value={customBrandHandle}
                    onChange={(e) => setCustomBrandHandle(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-xl text-white font-mono focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* Background photo presets */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">Pilih Background Foto:</label>
                <div className="grid grid-cols-5 gap-2">
                  {BACKGROUND_PRESETS.map((bg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedBgIndex(idx)}
                      className={`p-1.5 rounded-xl border text-center transition-all ${
                        selectedBgIndex === idx
                          ? 'border-emerald-400 bg-emerald-500/10'
                          : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'
                      }`}
                    >
                      <div className="aspect-square rounded-lg bg-zinc-800 overflow-hidden mb-1">
                        {bg.url ? (
                          <img src={bg.url} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-black flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                            Solid
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 truncate block">
                        {bg.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated Caption Box */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white uppercase">
                  Caption Instagram Siap Copy:
                </span>
                <button
                  onClick={copyCaption}
                  className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedCaption ? 'Tersalin' : 'Copy'}</span>
                </button>
              </div>

              <textarea
                rows={4}
                value={activeStory.caption}
                onChange={(e) => setActiveStory({ ...activeStory, caption: e.target.value })}
                className="w-full p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-300 leading-relaxed focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: The 4:5 Live Interactive Canvas (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Slide Navigation Pill Header */}
            <div className="w-full max-w-[480px] flex items-center justify-between bg-zinc-900/90 border border-zinc-800 p-2 rounded-2xl mb-4">
              <div className="flex items-center gap-1 text-xs font-mono">
                {activeStory.slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                      currentSlideIndex === idx
                        ? 'bg-emerald-500 text-black shadow-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    Slide {idx + 1}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : activeStory.slides.length - 1))}
                  className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev < activeStory.slides.length - 1 ? prev + 1 : 0))}
                  className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* THE LIVE 4:5 CARD CANVAS */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-black flex flex-col justify-between p-7 select-none transition-all">
              {/* Background Photo */}
              {BACKGROUND_PRESETS[selectedBgIndex].url && (
                <img
                  src={BACKGROUND_PRESETS[selectedBgIndex].url}
                  alt="Card Background"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-[1.1] pointer-events-none"
                />
              )}

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 pointer-events-none" />

              {/* Canvas Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-sm tracking-wider text-white">
                    {customBrandName.toUpperCase()}
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-white/10 text-emerald-400 border border-emerald-400/30 uppercase">
                    {activeStory.category}
                  </span>
                </div>

                <span className="font-mono text-xs font-bold text-emerald-400">
                  SLIDE {activeSlide.number}/5
                </span>
              </div>

              {/* Canvas Body (Editable inline!) */}
              <div className="relative z-10 space-y-4 my-auto">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
                  <span>DISPATCH REPORT</span>
                </div>

                {/* Inline editable headline */}
                <textarea
                  rows={4}
                  value={activeSlide.headline}
                  onChange={(e) => handleUpdateHeadline(e.target.value)}
                  className="w-full bg-transparent text-lg sm:text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight resize-none focus:outline-none focus:bg-white/5 rounded-lg p-1 transition-colors"
                  title="Klik untuk edit teks judul langsung"
                />

                {/* Inline editable subtext */}
                <textarea
                  rows={3}
                  value={activeSlide.subtext}
                  onChange={(e) => handleUpdateSubtext(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans resize-none focus:outline-none focus:bg-white/5 rounded-lg p-1 transition-colors"
                  title="Klik untuk edit subteks langsung"
                />
              </div>

              {/* Canvas Footer */}
              <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span className="truncate pr-2">{activeSlide.footerText || activeSlide.footer}</span>
                <span className="text-white font-bold shrink-0">{customBrandHandle}</span>
              </div>
            </div>

            {/* Quick helper tip */}
            <div className="text-[11px] font-mono text-zinc-500 mt-3 text-center">
              💡 Tip: Teks judul & subteks di atas bisa lo edit langsung sebelum di-download!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
