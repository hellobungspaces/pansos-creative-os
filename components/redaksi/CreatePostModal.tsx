'use client';

import { CATEGORIES } from '@/utils/categoryTheme';
import React, { useState } from 'react';
import { X, Sparkles, Image as ImageIcon, Link2, Check, Upload, Globe, Shield } from 'lucide-react';
import { RedaksiPost, SlideItem } from '@/data/redaksiData';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostCreated: (newPost: RedaksiPost) => void;
}

const FREE_COMMERCIAL_IMAGES = [
  { name: 'Smartphone & Social App', url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1080&auto=format&fit=crop&q=85', attribution: 'Foto: Unsplash (Free Commercial Use)' },
  { name: 'AI & Data Code', url: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1080&auto=format&fit=crop&q=85', attribution: 'Foto: Unsplash (Free Commercial Use)' },
  { name: 'Smart Home & Audio', url: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=1080&auto=format&fit=crop&q=85', attribution: 'Foto: Unsplash (Free Commercial Use)' },
  { name: 'Crypto & Finance', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=85', attribution: 'Foto: Unsplash (Free Commercial Use)' },
  { name: 'Business & Office', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&auto=format&fit=crop&q=85', attribution: 'Foto: Unsplash (Free Commercial Use)' },
  { name: 'Urban Tech Street', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1080&auto=format&fit=crop&q=85', attribution: 'Foto: Unsplash (Free Commercial Use)' }
];

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  onPostCreated
}) => {
  const [headline, setHeadline] = useState('');
  const [category, setCategory] = useState<string>('KONOHA');
  const [sourceName, setSourceName] = useState('detikInet');
  const [sourceUrl, setSourceUrl] = useState('https://inet.detik.com');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [highlightKeyword, setHighlightKeyword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!headline.trim()) return;

    setIsProcessing(true);

    const finalImage = customImageUrl.trim() || FREE_COMMERCIAL_IMAGES[selectedImageIndex].url;
    const finalAttribution = customImageUrl.trim() ? 'Foto: Pengguna / Sumber Terverifikasi' : FREE_COMMERCIAL_IMAGES[selectedImageIndex].attribution;

    // Create yellow highlight
    const cleanHeadline = headline.trim().toUpperCase();
    let highlighted = cleanHeadline;
    if (highlightKeyword.trim()) {
      const kw = highlightKeyword.trim().toUpperCase();
      highlighted = cleanHeadline.replace(kw, `<span class="text-[#e2ff3b]">${kw}</span>`);
    } else {
      // Auto highlight middle 2 words
      const words = cleanHeadline.split(' ');
      if (words.length >= 3) {
        const mid = Math.floor(words.length / 2);
        words[mid] = `<span class="text-[#e2ff3b]">${words[mid]}`;
        words[Math.min(mid + 1, words.length - 1)] += '</span>';
        highlighted = words.join(' ');
      }
    }

    const generatedSlides: SlideItem[] = [
      {
        number: 1,
        title: cleanHeadline,
        body: `Kabar terbaru yang sedang menjadi sorotan: ${headline.trim()}. Simak rincian fakta lapangan pada slide berikutnya.`,
        hasPhoto: true,
        photoUrl: finalImage,
        photoAttribution: finalAttribution,
        sourceText: `Sumber: ${sourceName.trim()}`
      },
      {
        number: 2,
        title: 'FAKTA & LATAR BELAKANG',
        body: `Laporan resmi dari ${sourceName.trim()} mengindikasikan adanya pergeseran signifikan yang berdampak langsung pada para pengguna dan pelaku industri.`,
        hasPhoto: true,
        photoUrl: FREE_COMMERCIAL_IMAGES[(selectedImageIndex + 1) % FREE_COMMERCIAL_IMAGES.length].url,
        photoAttribution: FREE_COMMERCIAL_IMAGES[(selectedImageIndex + 1) % FREE_COMMERCIAL_IMAGES.length].attribution,
        sourceText: `Sumber: ${sourceName.trim()}`
      },
      {
        number: 3,
        title: 'DATA & IMPLIKASI TEKNIS',
        body: `Pihak terkait menyatakan bahwa kebijakan atau fenomena ini dirancang untuk menjawab tantangan keamanan, efisiensi, dan dinamika pasar digital saat ini.`,
        hasPhoto: true,
        photoUrl: FREE_COMMERCIAL_IMAGES[(selectedImageIndex + 2) % FREE_COMMERCIAL_IMAGES.length].url,
        photoAttribution: FREE_COMMERCIAL_IMAGES[(selectedImageIndex + 2) % FREE_COMMERCIAL_IMAGES.length].attribution,
        sourceText: `Sumber: ${sourceName.trim()}`
      },
      {
        number: 4,
        title: 'POIN PENTING UNTUK KAMU',
        body: `Bagi kamu yang aktif di ekosistem digital, penting untuk selalu memverifikasi informasi dan memperbarui wawasan agar tidak tertinggal perubahan regulasi.`,
        hasPhoto: true,
        photoUrl: FREE_COMMERCIAL_IMAGES[(selectedImageIndex + 3) % FREE_COMMERCIAL_IMAGES.length].url,
        photoAttribution: FREE_COMMERCIAL_IMAGES[(selectedImageIndex + 3) % FREE_COMMERCIAL_IMAGES.length].attribution,
        sourceText: `Sumber: ${sourceName.trim()}`
      },
      {
        number: 5,
        title: 'BAGAIMANA PENDAPAT KAMU?',
        body: `Apakah kamu sepakat dengan langkah ini, atau justru ada risiko yang perlu diwaspadai? Bagikan pandangan kamu di kolom komentar! 👇`,
        hasPhoto: true,
        photoUrl: FREE_COMMERCIAL_IMAGES[(selectedImageIndex + 4) % FREE_COMMERCIAL_IMAGES.length].url,
        photoAttribution: FREE_COMMERCIAL_IMAGES[(selectedImageIndex + 4) % FREE_COMMERCIAL_IMAGES.length].attribution,
        sourceText: `Sumber: ${sourceName.trim()}`
      }
    ];

    const generatedCaption = `${cleanHeadline}\n\nFakta krusial seputar perkembangan terkini yang sedang hangat diperbincangkan warga Konoha. Simak slide 1 sampai 5 untuk ringkasan lengkapnya.\n\n📌 Sumber Informasi: ${sourceName.trim()} (${sourceUrl.trim()})\n📷 Visual: Unsplash (Curated License)\n⚖️ Ringkasan sesuai UU Hak Cipta No. 28/2014 Pasal 42 untuk edukasi publik.\n\nMenurut kamu sesama warga Konoha, gimana tanggapannya? Tulis di bawah 👇\n\n#KonohaInsight #WargaKonoha #${category} #BeritaTerkini #${sourceName.replace(/\s+/g, '')} #KulturDigital`;

    const newPost: RedaksiPost = {
      id: `post-${Date.now()}`,
      category,
      title: cleanHeadline,
      highlightedTitle: highlighted,
      source: sourceName.trim(),
      sourceUrl: sourceUrl.trim(),
      licenseInfo: finalAttribution,
      timeAgo: 'Baru saja',
      viralScore: Math.floor(Math.random() * 8) + 91,
      hasRiskWarning: false,
      coverImage: finalImage,
      coverImageAttribution: finalAttribution,
      sourceBadge: sourceName.trim(),
      totalSlides: 5,
      slides: generatedSlides,
      caption: generatedCaption,
      status: 'perlu_review'
    };

    setTimeout(() => {
      onPostCreated(newPost);
      setIsProcessing(false);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-5 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-2xl my-auto text-zinc-900">
        {/* Header */}
        <div className="p-5 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white font-headline font-black text-sm flex items-center justify-center shadow-sm">
              +
            </div>
            <div>
              <h3 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider">
                INPUT BERITA BARU (LIVE PRODUCTION)
              </h3>
              <p className="text-[11px] font-mono text-zinc-500">
                Otomatis mengenerate 5-slide carousel 4:5 dengan foto komersil bebas & sumber resmi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-900 rounded-lg hover:bg-zinc-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs font-mono">
          {/* Judul Berita */}
          <div>
            <label className="block text-zinc-800 font-bold mb-1.5 uppercase">
              1. Judul Berita / Topik:
            </label>
            <input
              type="text"
              required
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Contoh: Kemenkominfo Wajibkan Lisensi AI Generatif Mulai Bulan Depan"
              className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-900 shadow-sm"
            />
          </div>

          {/* Highlighted Words & Kategori */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-zinc-600 mb-1">Kata Kunci Highlight Kuning (Opsional):</label>
              <input
                type="text"
                value={highlightKeyword}
                onChange={(e) => setHighlightKeyword(e.target.value)}
                placeholder="Contoh: WAJIBKAN LISENSI AI"
                className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-900 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-zinc-600 mb-1">Kategori Konten:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:bg-white focus:outline-none focus:border-zinc-900 shadow-sm"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.tag} value={c.tag}>{c.icon} {c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sumber Informasi & Link Asli */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-zinc-600 mb-1">Nama Sumber Berita Resmi:</label>
              <input
                type="text"
                required
                value={sourceName}
                onChange={(e) => setSourceName(e.target.value)}
                placeholder="detikInet, CNN Indonesia, Antara, The Verge..."
                className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-900 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-zinc-600 mb-1">Link URL Artikel Sumber Asli:</label>
              <input
                type="url"
                required
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="https://inet.detik.com/cyberlife/..."
                className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-900 shadow-sm"
              />
            </div>
          </div>

          {/* Gambar Bebas Komersil / Open Source Presets */}
          <div className="pt-2 border-t border-zinc-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-zinc-800 font-bold uppercase flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Pilih Gambar Free Komersil (Unsplash CC0):</span>
              </label>
              <span className="text-[10px] text-emerald-700 font-bold">100% AMAN HAK CIPTA</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {FREE_COMMERCIAL_IMAGES.map((img, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => {
                    setSelectedImageIndex(idx);
                    setCustomImageUrl('');
                  }}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border-2 relative transition-all ${
                    selectedImageIndex === idx && !customImageUrl
                      ? 'border-blue-600 ring-2 ring-blue-500/30 scale-105 shadow-md'
                      : 'border-zinc-200 opacity-80 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 left-1 text-[8px] bg-black/80 px-1 rounded text-white truncate max-w-[90%]">
                    {img.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom Image URL fallback */}
            <div className="pt-2">
              <input
                type="url"
                value={customImageUrl}
                onChange={(e) => setCustomImageUrl(e.target.value)}
                placeholder="...atau tempel URL foto komersil bebas milik kamu sendiri"
                className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-400 shadow-sm"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50 text-white font-bold font-mono text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#e2ff3b]" />
              <span>{isProcessing ? 'MENYUSUN 5 SLIDE CAROUSEL...' : 'GENERATE & MASUKKAN KE ANTRIAN REVIEW'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
