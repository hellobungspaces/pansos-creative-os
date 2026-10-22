'use client';

import React, { useState, useMemo } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Copy, 
  RefreshCw, 
  Sparkles, 
  Plus, 
  ArrowUp, 
  ArrowDown, 
  Trash2,
  Check,
  Search,
  Dices,
  ShieldCheck,
  Palette
} from 'lucide-react';
import { RedaksiPost, SlideItem } from '@/data/redaksiData';

interface CarouselEditorModalProps {
  post: RedaksiPost | null;
  onClose: () => void;
  onSave: (updatedPost: RedaksiPost) => void;
  onMarkPublished?: (postId: string) => void;
}

const THEME_COLORS = [
  { name: 'Royal Blue (Signature)', hex: '#2446f5' },
  { name: 'Noir Dark (Minimalist)', hex: '#111319' },
  { name: 'Breaking Alert (Merah)', hex: '#991b1b' },
  { name: 'Emerald Cuan (Bisnis)', hex: '#065f46' },
  { name: 'Cyber Violet (Sosmed)', hex: '#581c87' },
];

const CURATED_UNSPLASH_LIBRARY = [
  // AI & Technology
  { id: 'u1', tags: ['ai', 'robot', 'future', 'tech', 'cyber'], name: 'AI Neural Face', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u2', tags: ['ai', 'code', 'data', 'algorithm'], name: 'AI Brain Mesh', url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u3', tags: ['ai', 'robot', 'humanoid', 'future'], name: 'Robotic Hand Touch', url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u4', tags: ['ai', 'smart', 'automation', 'chip'], name: 'Futuristic Microchip', url: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u5', tags: ['ai', 'hacker', 'security', 'cyber', 'code'], name: 'Green Cyber Security', url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u6', tags: ['ai', 'laptop', 'developer', 'coding'], name: 'Programmer Dark Mode', url: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1080&auto=format&fit=crop&q=85' },
  
  // Social Media & Gadget
  { id: 'u7', tags: ['sosmed', 'smartphone', 'phone', 'instagram', 'app'], name: 'Smartphone Neon App', url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u8', tags: ['sosmed', 'whatsapp', 'chat', 'mobile', 'phone'], name: 'Hand Holding Phone', url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u9', tags: ['sosmed', 'influencer', 'studio', 'lifestyle'], name: 'Digital Creator Studio', url: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u10', tags: ['sosmed', 'people', 'friends', 'selfie', 'lifestyle'], name: 'Young Audience Laughing', url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u11', tags: ['sosmed', 'phone', 'screen', 'scroll', 'viral'], name: 'Social Feed Night', url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u12', tags: ['sosmed', 'portrait', 'user', 'people'], name: 'Gen Z Expression', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=85' },

  // Bisnis & Keuangan & Kripto
  { id: 'u13', tags: ['bisnis', 'crypto', 'bitcoin', 'saham', 'trading'], name: 'Candlestick Chart Green', url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u14', tags: ['bisnis', 'cuan', 'saham', 'investasi'], name: 'Financial Analytics Screen', url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u15', tags: ['bisnis', 'kantor', 'office', 'startup', 'meeting'], name: 'Modern Startup Workspace', url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u16', tags: ['bisnis', 'crypto', 'bitcoin', 'coin'], name: 'Physical Bitcoin Token', url: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u17', tags: ['bisnis', 'office', 'corporation', 'city'], name: 'Skyscrapers & Economy', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u18', tags: ['bisnis', 'team', 'meeting', 'discussion'], name: 'Executive Team Meeting', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&auto=format&fit=crop&q=85' },

  // Teknologi & Perangkat
  { id: 'u19', tags: ['teknologi', 'gadget', 'hardware', 'motherboard', 'chip'], name: 'Circuit Board Macro', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u20', tags: ['teknologi', 'server', 'datacenter', 'cloud'], name: 'Glowing Data Center Rack', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u21', tags: ['teknologi', 'smarthome', 'audio', 'speaker'], name: 'Smart Home Speaker', url: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u22', tags: ['teknologi', 'computer', 'laptop', 'office'], name: 'Dual Monitor Workstation', url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u23', tags: ['teknologi', 'laptop', 'apple', 'minimalist'], name: 'MacBook Workspace', url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u24', tags: ['teknologi', 'smartphone', 'gadget', 'mobile'], name: 'Modern Smartphone Device', url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1080&auto=format&fit=crop&q=85' },

  // Indonesia & Publik
  { id: 'u25', tags: ['indonesia', 'city', 'jakarta', 'street'], name: 'Jakarta Skyline & Traffic', url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u26', tags: ['indonesia', 'community', 'people', 'street'], name: 'Indonesian Street Coffee', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u27', tags: ['indonesia', 'office', 'people', 'team'], name: 'Indonesian Creative Team', url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1080&auto=format&fit=crop&q=85' },
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
  const [photoSearchQuery, setPhotoSearchQuery] = useState('');
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const currentSlide = editedPost.slides[activeSlideIndex] || editedPost.slides[0];

  // Curated photo search & randomizer
  const displayPhotos = useMemo(() => {
    const q = photoSearchQuery.toLowerCase().trim();
    if (!q) {
      const start = (shuffleSeed * 6) % CURATED_UNSPLASH_LIBRARY.length;
      const res = [];
      for (let i = 0; i < 6; i++) {
        res.push(CURATED_UNSPLASH_LIBRARY[(start + i) % CURATED_UNSPLASH_LIBRARY.length]);
      }
      return res;
    }
    const matched = CURATED_UNSPLASH_LIBRARY.filter(p => 
      p.name.toLowerCase().includes(q) || p.tags.some(t => t.includes(q))
    );
    return matched.length > 0 ? matched.slice(0, 8) : CURATED_UNSPLASH_LIBRARY.slice(0, 6);
  }, [photoSearchQuery, shuffleSeed]);

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
    let domain = '';
    try {
      domain = editedPost.sourceUrl ? new URL(editedPost.sourceUrl).hostname.replace('www.', '') : '';
    } catch {
      domain = editedPost.source.toLowerCase().replace(/\s+/g, '');
    }

    const cleanCaption = `${editedPost.title}.\n\nLaporan terverifikasi dari ${editedPost.source} merangkum poin krusial yang perlu kamu ketahui hari ini.\n\nSimak rangkuman lengkap ${editedPost.totalSlides} slide di atas.\n\n📌 Sumber Informasi: ${editedPost.source} (${domain})\n🔗 Tautan: ${editedPost.sourceUrl || '-'}\n📷 Visual: Unsplash (Curated License)\n⚖️ Ringkasan sesuai UU Hak Cipta No. 28/2014 Pasal 42 untuk edukasi publik.\n\n#${editedPost.category} #BeritaTerkini #IndonesiaHariIni #Teknologi #MediaDigital #${editedPost.source.replace(/[^a-zA-Z]/g, '')}`;

    navigator.clipboard?.writeText(cleanCaption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  // High-Resolution 1080x1350px Native HTML5 Canvas Renderer (Clean, No Watermarks)
  const renderSlideToCanvas = (slideIdx: number): Promise<string> => {
    return new Promise((resolve) => {
      const slide = editedPost.slides[slideIdx];
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1350;
      const ctx = canvas.getContext('2d');
      if (!ctx) return resolve('');

      const drawContent = (img?: HTMLImageElement) => {
        // Top Half: Photo with subtle vignette
        if (img) {
          ctx.drawImage(img, 0, 0, 1080, 675);
          // Soft bottom vignette shadow
          const vignette = ctx.createLinearGradient(0, 480, 0, 675);
          vignette.addColorStop(0, 'rgba(0,0,0,0)');
          vignette.addColorStop(1, 'rgba(0,0,0,0.45)');
          ctx.fillStyle = vignette;
          ctx.fillRect(0, 480, 1080, 195);
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

        // Top Overlay Bar: Only Clean Brand & Slide Index (No messy watermarks)
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 28px -apple-system, Oswald, sans-serif';
        ctx.fillText('• INDONESIA HARI INI', 50, 65);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px monospace';
        ctx.fillText(`${slideIdx + 1}/${editedPost.totalSlides}`, 970, 65);

        // Bottom Half: Theme Color Block (Default Signature Royal Blue #2446f5)
        ctx.fillStyle = editedPost.themeColor || '#2446f5';
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

        // Footer Bar: Clear, Respectful Source Attribution
        ctx.fillStyle = '#dbeafe';
        ctx.font = 'bold 24px monospace';
        ctx.fillText(slide.sourceText || `Sumber: ${editedPost.source}`, 60, 1305);
        ctx.fillText('Geser ➔', 940, 1305);

        resolve(canvas.toDataURL('image/png'));
      };

      const photoUrl = slide.photoUrl || editedPost.coverImage;
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
      await new Promise((r) => setTimeout(r, 400));
    }
    setIsDownloading(false);
    setDownloadProgress('');
  };

  const handleAddSlide = () => {
    const updated = { ...editedPost };
    const newNum = updated.slides.length + 1;
    const fallbackPhoto = CURATED_UNSPLASH_LIBRARY[(newNum * 3) % CURATED_UNSPLASH_LIBRARY.length].url;
    updated.slides.push({
      number: newNum,
      title: 'SLIDE TAMBAHAN',
      body: 'Tuliskan poin penting lanjutan atau kutipan menarik di sini.',
      hasPhoto: true,
      photoUrl: fallbackPhoto,
      photoAttribution: 'Foto: Unsplash',
      sourceText: `Sumber: ${editedPost.source}`
    });
    updated.totalSlides = updated.slides.length;
    setEditedPost(updated);
    setActiveSlideIndex(updated.slides.length - 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-[#0c0d12] border border-zinc-800 rounded-3xl w-full max-w-6xl max-h-[96vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between shrink-0 bg-[#090a0f]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e2ff3b]" />
            <h3 className="font-headline font-bold text-base sm:text-lg text-white tracking-wide truncate max-w-[320px] sm:max-w-md">
              {editedPost.title}
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#e2ff3b] text-black">
              {editedPost.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {downloadProgress && (
              <span className="text-xs font-mono text-amber-400 animate-pulse hidden sm:inline">
                {downloadProgress}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2-Pane Split Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-y-auto flex-1">
          {/* LEFT PANE: 4:5 Card Preview + Color Palette + Action Buttons (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center lg:items-start">
            {/* The 4:5 Card Preview */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-black flex flex-col justify-between shadow-2xl">
              {/* Top Half: Photo with subtle vignette (No ugly watermarks) */}
              <div className="relative h-1/2 w-full bg-zinc-950 overflow-hidden">
                {currentSlide.photoUrl || editedPost.coverImage ? (
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

                {/* Soft bottom vignette shadow */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                {/* Slide index overlay */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur text-white font-mono text-[10px] font-bold">
                  {activeSlideIndex + 1}/{editedPost.slides.length}
                </div>

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

              {/* Bottom Half: Theme Color Block (Default Royal Blue #2446f5) */}
              <div 
                className="h-1/2 w-full p-5 flex flex-col justify-between text-white transition-colors duration-300"
                style={{ backgroundColor: editedPost.themeColor || '#2446f5' }}
              >
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

            {/* Theme Color Selector Palette */}
            <div className="w-full max-w-[360px] p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-2">
              <div className="text-[10px] font-mono text-zinc-400 uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold">
                  <Palette className="w-3 h-3 text-[#e2ff3b]" />
                  <span>Warna Tema Blok:</span>
                </span>
                <span className="font-bold text-[#e2ff3b]">
                  {THEME_COLORS.find(c => c.hex === (editedPost.themeColor || '#2446f5'))?.name || 'Royal Blue'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                {THEME_COLORS.map(c => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setEditedPost({ ...editedPost, themeColor: c.hex })}
                    className={`flex-1 h-7 rounded-lg border-2 transition-all flex items-center justify-center ${
                      (editedPost.themeColor || '#2446f5') === c.hex ? 'border-[#e2ff3b] scale-105 shadow-md' : 'border-zinc-700 opacity-75 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {(editedPost.themeColor || '#2446f5') === c.hex && (
                      <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Slide Navigation Thumbnails */}
            <div className="w-full max-w-[360px] flex items-center justify-between gap-1 overflow-x-auto pb-1">
              {editedPost.slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeSlideIndex === idx
                      ? 'bg-[#e2ff3b] text-black shadow-md'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={handleAddSlide}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 flex items-center justify-center shrink-0"
                title="Tambah Slide Baru"
              >
                <Plus className="w-3.5 h-3.5 text-[#e2ff3b]" />
              </button>
            </div>

            {/* Download Buttons Bar */}
            <div className="w-full max-w-[360px] space-y-2 text-xs font-mono">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleDownloadAllSlides}
                  disabled={isDownloading}
                  className="w-full py-2.5 bg-[#e2ff3b] hover:bg-[#d4f52f] text-black font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Semua ({editedPost.slides.length})</span>
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
                <span>{copiedCaption ? 'Caption & Atribusi Tersalin!' : 'Copy caption + atribusi bersih'}</span>
              </button>

              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[10px] text-zinc-400 space-y-1">
                <div className="flex items-center gap-1 text-emerald-400 font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>STATUS: FOTO BERSIH & LEGAL</span>
                </div>
                <div>Sumber Artikel: {editedPost.source}</div>
                <div>Lisensi Visual: Unsplash Curated (Atribusi di Caption)</div>
              </div>
            </div>
          </div>

          {/* RIGHT PANE: Slide-by-Slide Content & Unsplash Photo Search (7 Cols) */}
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
                      Slide {slide.number} · {slide.hasPhoto ? 'Visual Photo' : 'Editorial'}
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

                {/* Unsplash Photo Search & Gallery Section (Active Slide Only for Focus) */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-zinc-300 font-bold uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#e2ff3b]" />
                      <span>FOTO VISUAL UNSPLASH (FREE KOMERSIL)</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setShuffleSeed(prev => prev + 1)}
                      className="px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-[10px] flex items-center gap-1 transition-all"
                    >
                      <Dices className="w-3 h-3 text-[#e2ff3b]" />
                      <span>🎲 Acak Foto</span>
                    </button>
                  </div>

                  {/* Search Bar for Unsplash */}
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                      <input
                        type="text"
                        placeholder="Cari foto Unsplash (misal: ai, smartphone, crypto, kantor, hacker, indonesia)..."
                        value={photoSearchQuery}
                        onChange={(e) => setPhotoSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[11px] text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#e2ff3b]"
                      />
                    </div>
                    {photoSearchQuery && (
                      <button
                        type="button"
                        onClick={() => setPhotoSearchQuery('')}
                        className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 hover:text-white text-[10px]"
                      >
                        Reset
                      </button>
                    )}
                  </div>

                  {/* Thumbnail Gallery (Click to apply to this slide) */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {displayPhotos.map((photo) => (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => handleSetSlidePhoto(idx, photo.url)}
                        className={`group relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                          slide.photoUrl === photo.url
                            ? 'border-[#e2ff3b] scale-105 shadow-lg ring-2 ring-[#e2ff3b]/40'
                            : 'border-zinc-800 hover:border-zinc-500 opacity-80 hover:opacity-100'
                        }`}
                        title={photo.name}
                      >
                        <img src={photo.url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        {slide.photoUrl === photo.url && (
                          <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#e2ff3b] text-black flex items-center justify-center font-bold text-[9px]">
                            ✓
                          </div>
                        )}
                        <span className="absolute inset-x-0 bottom-0 bg-black/70 text-[8px] text-white truncate px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          {photo.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Custom URL Input Fallback */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      placeholder="...atau tempel link gambar Unsplash / Google Images khusus"
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
                      <span>Pakai</span>
                    </button>
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
                <Check className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </button>

              {onMarkPublished && (
                <button
                  onClick={() => onMarkPublished(editedPost.id)}
                  className="px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono text-xs rounded-xl transition-all"
                >
                  Tandai Sudah Diposting
                </button>
              )}

              <button
                onClick={onClose}
                className="px-4 py-3 text-zinc-400 hover:text-white font-mono text-xs ml-auto transition-all"
              >
                Tutup Editor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
