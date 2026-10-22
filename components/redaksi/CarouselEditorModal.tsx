'use client';

import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Copy, 
  RefreshCw, 
  Sparkles, 
  Upload, 
  Plus, 
  ArrowUp, 
  ArrowDown, 
  Trash2,
  Check,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { RedaksiPost, SlideItem } from '@/data/redaksiData';

interface CarouselEditorModalProps {
  post: RedaksiPost | null;
  onClose: () => void;
  onSave: (updatedPost: RedaksiPost) => void;
  onMarkPublished?: (postId: string) => void;
}

const FREE_PHOTO_PRESETS = [
  { name: 'AI & Data Tech', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&auto=format&fit=crop&q=85' },
  { name: 'Smartphone Social', url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1080&auto=format&fit=crop&q=85' },
  { name: 'Financial Chart', url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1080&auto=format&fit=crop&q=85' },
  { name: 'Tech Hardware', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=85' },
  { name: 'User & Community', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=85' },
  { name: 'Creative Studio', url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1080&auto=format&fit=crop&q=85' },
];

export const CarouselEditorModal: React.FC<CarouselEditorModalProps> = ({
  post,
  onClose,
  onSave,
  onMarkPublished
}) => {
  if (!post) return null;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [editedPost, setEditedPost] = useState<RedaksiPost>(post);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState('');
  const [topTab, setTopTab] = useState<'render' | 'posisi'>('render');
  const [customPhotoInput, setCustomPhotoInput] = useState('');

  const currentSlide = editedPost.slides[activeSlideIndex] || editedPost.slides[0];

  const handleUpdateSlideTitle = (index: number, newTitle: string) => {
    const updated = { ...editedPost };
    updated.slides[index].title = newTitle;
    setEditedPost(updated);
  };

  const handleUpdateSlideBody = (index: number, newBody: string) => {
    const updated = { ...editedPost };
    updated.slides[index].body = newBody;
    setEditedPost(updated);
  };

  const handleSetSlidePhoto = (index: number, photoUrl: string) => {
    const updated = { ...editedPost };
    updated.slides[index].hasPhoto = Boolean(photoUrl);
    updated.slides[index].photoUrl = photoUrl;
    setEditedPost(updated);
  };

  const handleCopyCaption = () => {
    navigator.clipboard?.writeText(editedPost.caption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  // High-Resolution 1080x1350px Native HTML5 Canvas Renderer
  const renderSlideToCanvas = (slideIdx: number): Promise<string> => {
    return new Promise((resolve) => {
      const slide = editedPost.slides[slideIdx];
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1350;
      const ctx = canvas.getContext('2d');
      if (!ctx) return resolve('');

      const drawContent = (img?: HTMLImageElement) => {
        // Top Half (Photo or Noir Dark)
        if (img) {
          ctx.drawImage(img, 0, 0, 1080, 675);
        } else {
          // Elegant dark editorial fallback
          const grad = ctx.createLinearGradient(0, 0, 1080, 675);
          grad.addColorStop(0, '#090a0f');
          grad.addColorStop(1, '#181b26');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 1080, 675);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.font = '900 64px Oswald, Anton, sans-serif';
          ctx.fillText('INDONESIA HARI INI', 60, 360);
        }

        // Top Overlay Bar
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 28px -apple-system, Oswald, sans-serif';
        ctx.fillText('• INDONESIA HARI INI', 50, 65);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px monospace';
        ctx.fillText(`${slideIdx + 1}/${editedPost.totalSlides}`, 970, 65);

        // Source badge if present
        if (editedPost.sourceBadge) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(50, 610, 180, 42);
          ctx.fillStyle = '#000000';
          ctx.font = 'bold 20px monospace';
          ctx.fillText(editedPost.sourceBadge.toUpperCase(), 65, 638);
        }

        // Photo attribution watermark if photo exists
        if (slide.hasPhoto) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.font = '18px monospace';
          ctx.fillText(slide.photoAttribution || editedPost.licenseInfo || 'Foto: Unsplash (Free Commercial Use)', 60, 655);
        }

        // Bottom Half: Signature Royal Blue #2446f5
        ctx.fillStyle = '#2446f5';
        ctx.fillRect(0, 675, 1080, 675);

        // Yellow Category Tag on slide 1
        if (slideIdx === 0) {
          ctx.fillStyle = '#e2ff3b';
          ctx.fillRect(60, 715, 180, 44);
          ctx.fillStyle = '#000000';
          ctx.font = '900 24px -apple-system, sans-serif';
          ctx.fillText(editedPost.category, 80, 746);
        }

        // Slide Title (Yellow Bold Condensed)
        ctx.fillStyle = '#e2ff3b';
        ctx.font = '900 52px -apple-system, BlinkMacSystemFont, "Oswald", "Anton", sans-serif';
        
        // Wrap Title
        const titleWords = slide.title.split(' ');
        let titleLine = '';
        let titleY = slideIdx === 0 ? 825 : 765;
        for (let n = 0; n < titleWords.length; n++) {
          const testLine = titleLine + titleWords[n] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > 960 && n > 0) {
            ctx.fillText(titleLine, 60, titleY);
            titleLine = titleWords[n] + ' ';
            titleY += 62;
          } else {
            titleLine = testLine;
          }
        }
        ctx.fillText(titleLine, 60, titleY);

        // Body Text (White)
        ctx.fillStyle = '#ffffff';
        ctx.font = '400 34px -apple-system, sans-serif';
        const bodyWords = slide.body.split(' ');
        let bodyLine = '';
        let bodyY = titleY + 65;
        for (let n = 0; n < bodyWords.length; n++) {
          const testBodyLine = bodyLine + bodyWords[n] + ' ';
          const metrics = ctx.measureText(testBodyLine);
          if (metrics.width > 960 && n > 0) {
            ctx.fillText(bodyLine, 60, bodyY);
            bodyLine = bodyWords[n] + ' ';
            bodyY += 50;
          } else {
            bodyLine = testBodyLine;
          }
        }
        ctx.fillText(bodyLine, 60, bodyY);

        // Divider
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(60, 1260);
        ctx.lineTo(1020, 1260);
        ctx.stroke();

        // Footer Bar
        ctx.fillStyle = '#dbeafe';
        ctx.font = 'bold 24px monospace';
        ctx.fillText(slide.sourceText || `Sumber: ${editedPost.source}`, 60, 1305);
        ctx.fillText('Geser ➔', 940, 1305);

        resolve(canvas.toDataURL('image/png'));
      };

      const photoUrl = slide.photoUrl || (slide.hasPhoto ? editedPost.coverImage : undefined);
      if (photoUrl) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => drawContent(img);
        img.onerror = () => drawContent();
        img.src = photoUrl;
      } else {
        drawContent();
      }
    });
  };

  const handleDownloadSingleSlide = async () => {
    setIsDownloading(true);
    setDownloadProgress(`Merender Slide ${activeSlideIndex + 1}...`);
    const dataUrl = await renderSlideToCanvas(activeSlideIndex);
    const link = document.createElement('a');
    link.download = `indonesia-hari-ini-${editedPost.id}-slide-${activeSlideIndex + 1}.png`;
    link.href = dataUrl;
    link.click();
    setIsDownloading(false);
    setDownloadProgress('');
  };

  const handleDownloadAllSlides = async () => {
    setIsDownloading(true);
    for (let i = 0; i < editedPost.slides.length; i++) {
      setDownloadProgress(`Mendownload Slide ${i + 1} dari ${editedPost.slides.length}...`);
      const dataUrl = await renderSlideToCanvas(i);
      const link = document.createElement('a');
      link.download = `indonesia-hari-ini-${editedPost.id}-slide-${i + 1}.png`;
      link.href = dataUrl;
      link.click();
      await new Promise((r) => setTimeout(r, 400)); // slight pause between downloads
    }
    setIsDownloading(false);
    setDownloadProgress('');
  };

  const handleAddSlide = () => {
    const updated = { ...editedPost };
    const newNum = updated.slides.length + 1;
    updated.slides.push({
      number: newNum,
      title: 'SLIDE TAMBAHAN',
      body: 'Tuliskan poin penting lanjutan atau kutipan menarik di sini.',
      hasPhoto: false,
      sourceText: `Sumber: ${editedPost.source}`
    });
    updated.totalSlides = updated.slides.length;
    setEditedPost(updated);
    setActiveSlideIndex(updated.slides.length - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#0c0d12] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh]">
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 border-b border-zinc-800/80 bg-[#0f1118] flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-mono">
            <button
              onClick={() => setTopTab('render')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                topTab === 'render' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Hasil render
            </button>
            <a
              href={editedPost.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verifikasi Berita Asli ({editedPost.source})</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Pane Split Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-y-auto flex-1">
          {/* LEFT PANE: 4:5 Card Preview + Action Buttons (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center lg:items-start">
            {/* The 4:5 Card Preview */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-black flex flex-col justify-between shadow-2xl">
              {/* Top Half: Photo with watermark */}
              <div className="relative h-1/2 w-full bg-zinc-950 overflow-hidden">
                {currentSlide.photoUrl || (currentSlide.hasPhoto && editedPost.coverImage) ? (
                  <img
                    src={currentSlide.photoUrl || editedPost.coverImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-[#121520] flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-[10px] font-mono uppercase text-[#e2ff3b] font-bold tracking-widest mb-1">
                      {editedPost.category} · SLIDE {activeSlideIndex + 1}
                    </span>
                    <span className="text-sm font-headline text-zinc-300 font-black tracking-wider">
                      INDONESIA HARI INI
                    </span>
                  </div>
                )}

                {/* Slide index overlay */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur text-white font-mono text-[10px] font-bold">
                  {activeSlideIndex + 1}/{editedPost.slides.length}
                </div>

                {/* Source badge watermark */}
                {editedPost.sourceBadge && (
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono font-black">
                    {editedPost.sourceBadge}
                  </div>
                )}

                {/* Left/Right Card Navigation Arrows */}
                <button
                  onClick={() => setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : editedPost.slides.length - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveSlideIndex((prev) => (prev < editedPost.slides.length - 1 ? prev + 1 : 0))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Half: Royal Blue #2446f5 Block */}
              <div className="h-1/2 w-full bg-[#2446f5] p-5 flex flex-col justify-between text-white">
                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-black font-headline text-[#e2ff3b] uppercase leading-tight line-clamp-3">
                    {currentSlide.title}
                  </h4>
                  <p className="text-xs text-white/95 leading-relaxed font-sans line-clamp-5">
                    {currentSlide.body}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[9px] font-mono text-white/80">
                  <span className="truncate max-w-[180px]">{currentSlide.sourceText || `Sumber: ${editedPost.source}`}</span>
                  <span>Geser ➔</span>
                </div>
              </div>
            </div>

            {/* Slide Selector Thumbnail Row */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full max-w-[360px] py-1">
              {editedPost.slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`w-12 h-14 rounded-lg border overflow-hidden shrink-0 flex flex-col justify-between p-1 transition-all ${
                    activeSlideIndex === idx
                      ? 'border-[#e2ff3b] ring-2 ring-[#e2ff3b]/40 bg-zinc-900'
                      : 'border-zinc-800 bg-zinc-950 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-1/2 bg-zinc-800 rounded-sm overflow-hidden">
                    {s.photoUrl ? (
                      <img src={s.photoUrl} alt="" className="w-full h-full object-cover" />
                    ) : null}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-center block text-white">
                    {idx + 1}
                  </span>
                </button>
              ))}

              <button
                onClick={handleAddSlide}
                className="w-10 h-14 rounded-lg border border-dashed border-zinc-700 hover:border-[#e2ff3b] text-zinc-500 hover:text-[#e2ff3b] shrink-0 flex items-center justify-center transition-colors"
                title="Tambah Slide Baru"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Status indicator for download */}
            {downloadProgress && (
              <div className="text-[11px] font-mono text-[#e2ff3b] text-center w-full max-w-[360px] animate-pulse">
                {downloadProgress}
              </div>
            )}

            {/* Action Buttons Bar */}
            <div className="w-full max-w-[360px] space-y-2 pt-1 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleDownloadAllSlides}
                  disabled={isDownloading}
                  className="w-full py-2.5 bg-[#e2ff3b] hover:bg-[#d4f52f] disabled:opacity-50 text-black font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download semua ({editedPost.slides.length})</span>
                </button>

                <button
                  onClick={handleDownloadSingleSlide}
                  disabled={isDownloading}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded-xl flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Slide {activeSlideIndex + 1}</span>
                </button>
              </div>

              <button
                onClick={handleCopyCaption}
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 rounded-xl flex items-center justify-center gap-1.5 transition-all text-[11px]"
              >
                <Copy className="w-3.5 h-3.5 text-[#e2ff3b]" />
                <span>{copiedCaption ? 'Caption & Hashtag Tersalin!' : 'Copy caption + hashtag lengkap'}</span>
              </button>

              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[10px] text-zinc-400 space-y-1">
                <div className="flex items-center gap-1 text-emerald-400 font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>ATRIBUSI LENGKAP TERDAFTAR</span>
                </div>
                <div>Sumber Berita: {editedPost.source}</div>
                <div>Lisensi: {editedPost.licenseInfo}</div>
              </div>
            </div>
          </div>

          {/* RIGHT PANE: Slide by Slide Text & Photo Editor (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {editedPost.slides.map((slide, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  activeSlideIndex === idx
                    ? 'bg-[#11131a] border-zinc-700 shadow-xl'
                    : 'bg-[#0f1116] border-zinc-800/80'
                }`}
              >
                {/* Slide Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-white">
                      Slide {slide.number} · {slide.hasPhoto ? 'dengan foto' : 'teks'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-zinc-500">
                    <button
                      onClick={() => {
                        if (idx > 0) {
                          const updated = { ...editedPost };
                          const temp = updated.slides[idx];
                          updated.slides[idx] = updated.slides[idx - 1];
                          updated.slides[idx - 1] = temp;
                          setEditedPost(updated);
                          setActiveSlideIndex(idx - 1);
                        }
                      }}
                      className="p-1 hover:text-white transition-colors"
                      title="Geser Naik"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (idx < editedPost.slides.length - 1) {
                          const updated = { ...editedPost };
                          const temp = updated.slides[idx];
                          updated.slides[idx] = updated.slides[idx + 1];
                          updated.slides[idx + 1] = temp;
                          setEditedPost(updated);
                          setActiveSlideIndex(idx + 1);
                        }
                      }}
                      className="p-1 hover:text-white transition-colors"
                      title="Geser Turun"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    {editedPost.slides.length > 2 && (
                      <button
                        onClick={() => {
                          const updated = { ...editedPost };
                          updated.slides = updated.slides.filter((_, i) => i !== idx);
                          updated.totalSlides = updated.slides.length;
                          setEditedPost(updated);
                          setActiveSlideIndex(Math.max(0, idx - 1));
                        }}
                        className="p-1 hover:text-rose-400 transition-colors"
                        title="Hapus Slide"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Title Input */}
                <div className="space-y-1.5 mb-3">
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase">Judul Slide (Headline):</label>
                  <input
                    type="text"
                    value={slide.title}
                    onChange={(e) => handleUpdateSlideTitle(idx, e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-bold font-headline text-white focus:outline-none focus:border-[#e2ff3b]"
                  />
                </div>

                {/* Content Textarea */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase">Isi Teks Slide:</label>
                  <textarea
                    rows={3}
                    value={slide.body}
                    onChange={(e) => handleUpdateSlideBody(idx, e.target.value)}
                    className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-sans text-zinc-200 leading-relaxed focus:outline-none focus:border-[#e2ff3b]"
                  />
                  <div className="text-right text-[10px] font-mono text-zinc-500">
                    {slide.body.length}/260 karakter
                  </div>
                </div>

                {/* Foto Header Section */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-2 text-xs font-mono">
                  <div className="text-[11px] text-zinc-400 font-bold uppercase">FOTO HEADER (FREE KOMERSIL)</div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleSetSlidePhoto(idx, '')}
                      className={`px-3 py-1.5 rounded-lg border text-xs ${
                        !slide.photoUrl ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-zinc-900 text-zinc-500 border-zinc-800'
                      }`}
                    >
                      Tanpa foto
                    </button>

                    {slide.photoUrl && (
                      <div className="w-12 h-8 rounded-lg overflow-hidden border-2 border-[#e2ff3b]">
                        <img src={slide.photoUrl} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      placeholder="...tempel link gambar komersil Unsplash / Google Images"
                      value={customPhotoInput}
                      onChange={(e) => setCustomPhotoInput(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[11px] text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customPhotoInput.trim()) {
                          handleSetSlidePhoto(idx, customPhotoInput.trim());
                          setCustomPhotoInput('');
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-[11px] flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Pakai Foto</span>
                    </button>
                  </div>

                  {/* Preset photo quick select */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] text-zinc-500 font-mono">Pilih cepat foto berlisensi komersil gratis:</div>
                    <div className="grid grid-cols-6 gap-1.5">
                      {FREE_PHOTO_PRESETS.map((preset, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => handleSetSlidePhoto(idx, preset.url)}
                          className={`aspect-video rounded-md overflow-hidden border transition-all ${
                            slide.photoUrl === preset.url ? 'border-[#e2ff3b] scale-105 shadow-md' : 'border-zinc-800 hover:border-zinc-600 opacity-70 hover:opacity-100'
                          }`}
                          title={preset.name}
                        >
                          <img src={preset.url} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Sticky Bottom Action Buttons Bar */}
            <div className="sticky bottom-0 pt-4 pb-2 bg-[#0c0d12]/95 backdrop-blur-md flex flex-wrap items-center gap-3 border-t border-zinc-800">
              <button
                onClick={() => {
                  onSave(editedPost);
                  onClose();
                }}
                className="px-5 py-3 bg-[#e2ff3b] hover:bg-[#d4f52f] text-black font-mono font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Simpan & Render Ulang</span>
              </button>

              {onMarkPublished && (
                <button
                  onClick={() => {
                    onMarkPublished(editedPost.id);
                    onClose();
                  }}
                  className="px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-xl transition-all flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tandai Sudah Posting ke IG</span>
                </button>
              )}

              <button
                onClick={() => {
                  onSave(editedPost);
                  onClose();
                }}
                className="px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-xs rounded-xl transition-all"
              >
                Simpan teks saja
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
