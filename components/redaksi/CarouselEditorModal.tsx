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
  Sliders
} from 'lucide-react';
import { RedaksiPost } from '@/data/redaksiData';

interface CarouselEditorModalProps {
  post: RedaksiPost | null;
  onClose: () => void;
  onSave: (updatedPost: RedaksiPost) => void;
}

export const CarouselEditorModal: React.FC<CarouselEditorModalProps> = ({
  post,
  onClose,
  onSave
}) => {
  if (!post) return null;

  const [activeSlideIndex, setActiveSlideIndex] = useState(2); // Slide 3 as in Screenshot 4
  const [editedPost, setEditedPost] = useState<RedaksiPost>(post);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [topTab, setTopTab] = useState<'render' | 'posisi'>('render');

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

  const handleCopyCaption = () => {
    navigator.clipboard?.writeText(editedPost.caption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  // Real client-side 1080x1350px PNG export
  const handleDownloadSlide = () => {
    setIsDownloading(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderCard = (img?: HTMLImageElement) => {
      // Top Half (Photo or Black)
      if (img) {
        ctx.drawImage(img, 0, 0, 1080, 675);
      } else {
        ctx.fillStyle = '#12141a';
        ctx.fillRect(0, 0, 1080, 675);
      }

      // Top Overlay
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 26px -apple-system, sans-serif';
      ctx.fillText('• PANSOS CREATIVE', 50, 60);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px monospace';
      ctx.fillText(`${activeSlideIndex + 1}/${editedPost.totalSlides}`, 980, 60);

      // Bottom Half: Royal Blue #2446f5
      ctx.fillStyle = '#2446f5';
      ctx.fillRect(0, 675, 1080, 675);

      // Headline (Yellow)
      ctx.fillStyle = '#e2ff3b';
      ctx.font = '900 52px -apple-system, Oswald, Anton, sans-serif';
      ctx.fillText(currentSlide.title.toUpperCase(), 60, 770);

      // Body Text (White)
      ctx.fillStyle = '#ffffff';
      ctx.font = '400 34px -apple-system, sans-serif';
      const words = currentSlide.body.split(' ');
      let line = '';
      let y = 860;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > 960 && n > 0) {
          ctx.fillText(line, 60, y);
          line = words[n] + ' ';
          y += 50;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 60, y);

      // Bottom bar
      ctx.fillStyle = '#dbeafe';
      ctx.font = 'bold 24px monospace';
      ctx.fillText(currentSlide.sourceText || `Sumber: ${editedPost.source}`, 60, 1280);
      ctx.fillText('Geser ➔', 940, 1280);

      // Trigger download
      const link = document.createElement('a');
      link.download = `pansos-slide-${activeSlideIndex + 1}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsDownloading(false);
    };

    if (currentSlide.photoUrl) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => renderCard(img);
      img.onerror = () => renderCard();
      img.src = currentSlide.photoUrl;
    } else {
      renderCard();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#0c0d12] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh]">
        {/* Top Control Bar (Matching Screenshot 4) */}
        <div className="px-6 py-3.5 border-b border-zinc-800/80 bg-[#0f1118] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={() => setTopTab('render')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                topTab === 'render'
                  ? 'bg-zinc-800 text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Hasil render
            </button>
            <button
              onClick={() => setTopTab('posisi')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                topTab === 'posisi'
                  ? 'bg-zinc-800 text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Atur posisi foto
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Pane Split Body (Matching Screenshot 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-y-auto flex-1">
          {/* LEFT PANE: 4:5 Card Preview + Action Buttons (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center lg:items-start">
            {/* The 4:5 Card Preview */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-black flex flex-col justify-between shadow-2xl">
              {/* Top Half: Photo with watermark */}
              <div className="relative h-1/2 w-full bg-zinc-950 overflow-hidden">
                {currentSlide.photoUrl ? (
                  <img
                    src={currentSlide.photoUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-xs font-mono text-zinc-500">
                    Tanpa Foto
                  </div>
                )}

                {/* Slide index overlay */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white font-mono text-[10px] font-bold">
                  {activeSlideIndex + 1}/{editedPost.totalSlides}
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
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveSlideIndex((prev) => (prev < editedPost.slides.length - 1 ? prev + 1 : 0))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Half: Royal Blue #2446f5 Block */}
              <div className="h-1/2 w-full bg-[#2446f5] p-5 flex flex-col justify-between text-white">
                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-black font-headline text-[#e2ff3b] uppercase leading-tight">
                    {currentSlide.title}
                  </h4>
                  <p className="text-xs text-white/95 leading-relaxed font-sans line-clamp-5">
                    {currentSlide.body}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[9px] font-mono text-white/80">
                  <span>{currentSlide.sourceText || `Sumber: ${editedPost.source}`}</span>
                  <span>Geser ➔</span>
                </div>
              </div>
            </div>

            {/* Slide Selector Thumbnail Row (Matching Screenshot 4) */}
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
            </div>

            {/* Left Action Buttons Bar (Matching Screenshot 4) */}
            <div className="w-full max-w-[360px] space-y-2 pt-1 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleDownloadSlide}
                  disabled={isDownloading}
                  className="w-full py-2.5 bg-[#e2ff3b] hover:bg-[#d4f52f] text-black font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download semua ({editedPost.totalSlides})</span>
                </button>

                <button
                  onClick={handleDownloadSlide}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded-xl flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Slide {activeSlideIndex + 1}</span>
                </button>
              </div>

              <button
                onClick={handleCopyCaption}
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 rounded-xl flex items-center justify-center gap-1.5 transition-all text-[11px]"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedCaption ? 'Caption Tersalin!' : 'Copy caption + hashtag'}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => alert('Render ulang dimulai...')}
                  className="py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl flex items-center justify-center gap-1 text-[11px]"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Render ulang</span>
                </button>

                <button
                  onClick={() => alert('AI sedang menyusun ulang naskah...')}
                  className="py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl flex items-center justify-center gap-1 text-[11px]"
                >
                  <Sparkles className="w-3 h-3 text-[#e2ff3b]" />
                  <span>Tulis ulang dengan AI</span>
                </button>
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
                    <button className="p-1 hover:text-white transition-colors">
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1 hover:text-white transition-colors">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1 hover:text-rose-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Title Input */}
                <div className="space-y-1.5 mb-3">
                  <input
                    type="text"
                    value={slide.title}
                    onChange={(e) => handleUpdateSlideTitle(idx, e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-bold font-headline text-white focus:outline-none focus:border-[#e2ff3b]"
                  />
                </div>

                {/* Content Textarea */}
                <div className="space-y-1">
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

                {/* Foto Header Section (Matching Screenshot 4) */}
                {slide.hasPhoto && (
                  <div className="pt-3 border-t border-zinc-800/80 space-y-2 text-xs font-mono">
                    <div className="text-[11px] text-zinc-400 font-bold uppercase">FOTO HEADER</div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-xs">
                        Tanpa foto
                      </button>

                      {slide.photoUrl && (
                        <div className="w-12 h-8 rounded-lg overflow-hidden border-2 border-[#e2ff3b]">
                          <img src={slide.photoUrl} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}

                      <button className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1 text-xs">
                        <Upload className="w-3 h-3" />
                        <span>Upload</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="text"
                        placeholder="...atau tempel link gambar / halaman (Google Images juga bisa)"
                        className="flex-1 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[11px] text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                      />
                      <button className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-[11px] flex items-center gap-1">
                        <Plus className="w-3 h-3" />
                        <span>Tambah</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Sticky Bottom Action Buttons Bar (Matching Screenshot 4) */}
            <div className="sticky bottom-0 pt-4 pb-2 bg-[#0c0d12]/90 backdrop-blur-md flex items-center gap-3 border-t border-zinc-800">
              <button
                onClick={() => {
                  onSave(editedPost);
                  onClose();
                }}
                className="px-5 py-3 bg-[#e2ff3b] hover:bg-[#d4f52f] text-black font-mono font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Simpan & render ulang</span>
              </button>

              <button
                onClick={() => {
                  onSave(editedPost);
                  onClose();
                }}
                className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-xs rounded-xl transition-all"
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
