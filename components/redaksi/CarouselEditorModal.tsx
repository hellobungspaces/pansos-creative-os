'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  ArrowRight,
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
  Palette,
  Instagram,
  Layers,
  SlidersHorizontal,
  Hash,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Loader2,
  Tag,
  Type
} from 'lucide-react';
import { RedaksiPost, SlideItem } from '@/data/redaksiData';
import { getCategoryTheme, CATEGORIES } from '@/utils/categoryTheme';

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

export interface FontPreset {
  id: string;
  name: string;
  badge: string;
  headlineFont: string;
  bodyFont: string;
  canvasTitleFont: string;
  canvasBodyFont: string;
  titleClass: string;
  descClass: string;
  license: string;
  description: string;
}

export const FONT_PRESETS: FontPreset[] = [
  {
    id: 'bebas',
    name: 'Bebas Neue + Inter',
    badge: 'Viral Media',
    headlineFont: 'Bebas Neue',
    bodyFont: 'Inter',
    canvasTitleFont: '900 60px "Bebas Neue", "Oswald", sans-serif',
    canvasBodyFont: '400 34px "Inter", -apple-system, sans-serif',
    titleClass: 'font-pair-bebas-title',
    descClass: 'font-pair-bebas-desc',
    license: 'SIL Open Font License 1.1 (100% Free Komersil)',
    description: 'Punchy & jangkung, standar emas akun media homeless/viral (Narasi, Folkative).'
  },
  {
    id: 'syne',
    name: 'Syne + Plus Jakarta Sans',
    badge: 'Modern Satire',
    headlineFont: 'Syne (800)',
    bodyFont: 'Plus Jakarta Sans',
    canvasTitleFont: '800 48px "Syne", -apple-system, sans-serif',
    canvasBodyFont: '500 33px "Plus Jakarta Sans", sans-serif',
    titleClass: 'font-pair-syne-title',
    descClass: 'font-pair-syne-desc',
    license: 'SIL Open Font License 1.1 (Plus Jakarta Sans karya studio Indonesia)',
    description: 'Estetika kontemporer, tajam, dan elegan untuk menyindir isu sosial cerdas.'
  },
  {
    id: 'fraunces',
    name: 'Fraunces + Work Sans',
    badge: 'Parodi Koran',
    headlineFont: 'Fraunces (Black)',
    bodyFont: 'Work Sans',
    canvasTitleFont: '900 48px "Fraunces", "Playfair Display", serif',
    canvasBodyFont: '400 33px "Work Sans", sans-serif',
    titleClass: 'font-pair-fraunces-title',
    descClass: 'font-pair-fraunces-desc',
    license: 'SIL Open Font License 1.1 (100% Free Komersil)',
    description: 'Serif berbobot ala New Yorker / The Onion edisi investigasi Konoha.'
  },
  {
    id: 'space',
    name: 'Space Grotesk + DM Sans',
    badge: 'Citizen Leak',
    headlineFont: 'Space Grotesk',
    bodyFont: 'DM Sans',
    canvasTitleFont: '700 50px "Space Grotesk", sans-serif',
    canvasBodyFont: '400 34px "DM Sans", sans-serif',
    titleClass: 'font-pair-space-title',
    descClass: 'font-pair-space-desc',
    license: 'SIL Open Font License 1.1 (100% Free Komersil)',
    description: 'Nuansa tech hacker, underground intel, data-driven whistleblowing.'
  },
  {
    id: 'oswald',
    name: 'Oswald + Inter',
    badge: 'Tabloid Heavy',
    headlineFont: 'Oswald (Bold)',
    bodyFont: 'Inter',
    canvasTitleFont: '900 52px "Oswald", "Anton", sans-serif',
    canvasBodyFont: '400 34px "Inter", -apple-system, sans-serif',
    titleClass: 'font-pair-oswald-title',
    descClass: 'font-pair-oswald-desc',
    license: 'SIL Open Font License 1.1 (100% Free Komersil)',
    description: 'Gaya headline tebal rapat klasik media massa dan breaking alert.'
  }
];

const POPULAR_HASHTAGS = [
  '#KonohaInsight',
  '#WargaKonoha',
  '#KabarKonoha',
  '#BeritaTerkini',
  '#KulturDigital',
  '#ViralHariIni',
  '#TrendingNow',
  '#Teknologi',
  '#MediaDigital',
  '#GenZ',
  '#AbsurditasKonoha'
];

function generateDefaultCaption(post: RedaksiPost): string {
  let domain = '';
  try {
    domain = post.sourceUrl ? new URL(post.sourceUrl).hostname.replace('www.', '') : '';
  } catch {
    domain = post.source.toLowerCase().replace(/\s+/g, '');
  }

  const cleanSource = post.source.replace(/[^a-zA-Z0-9]/g, '');
  const cleanCategory = post.category.replace(/[^a-zA-Z0-9]/g, '');

  return `${post.title}.\n\nLaporan terverifikasi dari ${post.source} mengabarkan realitas terkini yang sedang jadi sorotan warga Konoha. Geser ${post.slides.length} slide di atas untuk menyimak rangkuman faktanya.\n\nKira-kira warga Konoha ada yang relate atau punya tanggapan lain? Tulis komentar kamu di bawah! 👇\n\n📌 Sumber Informasi: ${post.source}${domain ? ` (${domain})` : ''}\n🔗 Tautan Asli: ${post.sourceUrl || '-'}\n📷 Visual: Unsplash (Curated License - Free Commercial Use)\n⚖️ Ringkasan sesuai UU Hak Cipta No. 28/2014 Pasal 42 untuk edukasi publik.\n\n#KonohaInsight #WargaKonoha #BeritaTerkini #${cleanCategory} #KulturDigital #${cleanSource} #TrendingNow #MediaDigital`;
}

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

  // Fauna & Satwa & Panda
  { id: 'u28', tags: ['fauna', 'panda', 'hewan', 'satwa', 'zoo'], name: 'Giant Panda Eating Bamboo', url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u29', tags: ['fauna', 'panda', 'hewan', 'satwa', 'zoo'], name: 'Panda on Tree Branch', url: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u30', tags: ['fauna', 'panda', 'red panda', 'hewan'], name: 'Red Panda Cute Face', url: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u31', tags: ['fauna', 'kucing', 'cat', 'hewan', 'satwa'], name: 'Cute Domestic Cat', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u32', tags: ['fauna', 'harimau', 'tiger', 'satwa liar'], name: 'Sumatran Wild Tiger', url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1080&auto=format&fit=crop&q=85' },

  // Lingkungan & Karhutla & Cuaca
  { id: 'u33', tags: ['lingkungan', 'karhutla', 'kebakaran', 'asap', 'hutan'], name: 'Wildfire Karhutla Smoke', url: 'https://images.unsplash.com/photo-1602980085566-4c40b8fecf06?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u34', tags: ['lingkungan', 'hutan', 'alam', 'forest'], name: 'Tropical Rainforest Canopy', url: 'https://images.unsplash.com/photo-1511497584788-87676104235f?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u35', tags: ['lingkungan', 'polusi', 'kabut', 'udara'], name: 'City Air Smog Pollution', url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u36', tags: ['lingkungan', 'banjir', 'hujan', 'cuaca'], name: 'Flood Water Heavy Rain', url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1080&auto=format&fit=crop&q=85' },

  // Konoha Politik & Hukum
  { id: 'u37', tags: ['konoha', 'dpr', 'politik', 'pemerintah', 'parlemen'], name: 'Government Parliament Hall', url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u38', tags: ['konoha', 'hukum', 'sidang', 'hakim', 'pengadilan'], name: 'Courtroom Gavel Justice', url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u39', tags: ['konoha', 'polisi', 'investigasi', 'kasus', 'hukum'], name: 'Police Investigation Tape', url: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=1080&auto=format&fit=crop&q=85' },
  { id: 'u40', tags: ['konoha', 'indonesia', 'merah putih', 'rakyat'], name: 'Indonesian Flag & Crowd', url: 'https://images.unsplash.com/photo-1596405835955-4532a63c0d61?w=1080&auto=format&fit=crop&q=85' },
];

function getSlideRole(idx: number): string {
  if (idx === 0) return 'Cover & Hook';
  if (idx === 1) return 'Kronologi Fakta';
  if (idx === 2) return 'Poin Kunci';
  if (idx === 3) return 'Sudut Konoha';
  if (idx === 4) return 'Komentar CTA';
  return 'Editorial';
}

export const CarouselEditorModal: React.FC<CarouselEditorModalProps> = ({
  post,
  onClose,
  onSave,
  onMarkPublished
}) => {
  if (!post) return null;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [editedPost, setEditedPost] = useState<RedaksiPost>(() => {
    if (post.caption && post.caption.trim()) {
      return post;
    }
    return {
      ...post,
      caption: generateDefaultCaption(post)
    };
  });
  const [viewTab, setViewTab] = useState<'slides' | 'caption'>('slides');
  const [captionPreset, setCaptionPreset] = useState<'homeless' | 'ringkas' | 'breaking'>('homeless');
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState('');
  const [customPhotoInput, setCustomPhotoInput] = useState('');
  const [photoSearchQuery, setPhotoSearchQuery] = useState('');
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [apiPhotos, setApiPhotos] = useState<any[]>([]);
  const [isSearchingPhotos, setIsSearchingPhotos] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    setIsSearchingPhotos(true);
    const timer = setTimeout(() => {
      fetch(`/api/search-photos?q=${encodeURIComponent(photoSearchQuery)}`)
        .then(res => res.json())
        .then(data => {
          if (!isCancelled && data.photos) {
            setApiPhotos(data.photos);
          }
        })
        .catch(err => console.warn('Photo search error:', err))
        .finally(() => {
          if (!isCancelled) setIsSearchingPhotos(false);
        });
    }, 200);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [photoSearchQuery, shuffleSeed]);

  // Keyboard Arrow navigation between slides (Power user experience)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowLeft') {
        setActiveSlideIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveSlideIndex((prev) => Math.min(editedPost.slides.length - 1, prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [editedPost.slides.length]);

  const currentSlide = editedPost.slides[activeSlideIndex] || editedPost.slides[0];
  const activeFontPreset = FONT_PRESETS.find(f => f.id === (editedPost.fontPairing || 'bebas')) || FONT_PRESETS[0];

  const allHashtags = useMemo(() => {
    const list = [...POPULAR_HASHTAGS];
    if (editedPost.category) {
      const catTag = `#${editedPost.category.replace(/[^a-zA-Z0-9]/g, '')}`;
      if (!list.includes(catTag)) list.push(catTag);
    }
    if (editedPost.source) {
      const srcTag = `#${editedPost.source.replace(/[^a-zA-Z0-9]/g, '')}`;
      if (!list.includes(srcTag)) list.push(srcTag);
    }
    return list;
  }, [editedPost.category, editedPost.source]);

  // Smart entity keywords extracted from headline for 1-click relevant photo search
  const smartKeywords = useMemo(() => {
    if (!editedPost?.title) return [];
    const stopwords = new Set([
      'yang', 'dan', 'di', 'dari', 'ke', 'ini', 'itu', 'untuk', 'pada', 'adalah',
      'dengan', 'oleh', 'bisa', 'akan', 'tak', 'tidak', 'juga', 'ada', 'buat',
      'dalam', 'atas', 'saat', 'para', 'jadi', 'karena', 'agar', 'bukan', 'atau',
      'sudah', 'telah', 'sedang', 'lebih', 'sangat', 'masih', 'hanya', 'pun', 'bila',
      'hingga', 'sampai', 'sejak', 'selama', 'lalu', 'baru', 'hari', 'bulan', 'tahun',
      'bikin', 'geger', 'viral', 'sorotan', 'terungkap', 'kronologi', 'simak', 'fakta',
      'cara', 'mengatasi', 'rilis', 'kabar'
    ]);
    const words = editedPost.title
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .map(w => w.trim().toLowerCase())
      .filter(w => w.length > 2 && !stopwords.has(w));
    
    return Array.from(new Set(words)).slice(0, 5);
  }, [editedPost.title]);

  const isTagInCaption = (tag: string) => {
    const current = editedPost.caption || '';
    const cleanTag = tag.trim().replace(/#/g, '\\#');
    const regex = new RegExp(`(^|\\s)${cleanTag}(\\b|$)`, 'i');
    return regex.test(current);
  };

  const handleToggleHashtag = (tag: string) => {
    const current = editedPost.caption || '';
    const cleanTag = tag.trim();
    const escaped = cleanTag.replace(/#/g, '\\#');
    const regex = new RegExp(`(^|\\s)${escaped}(\\b|$)`, 'i');

    let nextCaption = '';
    if (regex.test(current)) {
      nextCaption = current.replace(regex, '$1').replace(/[ \t]{2,}/g, ' ').trim();
    } else {
      if (current.includes('#')) {
        nextCaption = `${current} ${cleanTag}`;
      } else {
        nextCaption = `${current}\n\n${cleanTag}`;
      }
    }
    setEditedPost({ ...editedPost, caption: nextCaption });
  };

  const handleApplyPreset = (preset: 'homeless' | 'ringkas' | 'breaking') => {
    setCaptionPreset(preset);
    let domain = '';
    try {
      domain = editedPost.sourceUrl ? new URL(editedPost.sourceUrl).hostname.replace('www.', '') : '';
    } catch {
      domain = editedPost.source.toLowerCase().replace(/\s+/g, '');
    }

    const cleanSource = editedPost.source.replace(/[^a-zA-Z0-9]/g, '');
    const cleanCategory = editedPost.category.replace(/[^a-zA-Z0-9]/g, '');

    let newCaption = '';
    if (preset === 'homeless') {
      newCaption = `${editedPost.title}.\n\nLaporan terverifikasi dari ${editedPost.source} kembali memperlihatkan fenomena menarik di tengah kehidupan warga Konoha. Simak ${editedPost.slides.length} slide fakta ringkas di atas.\n\nKira-kira tanggapan para warga Konoha gimana nih? Boleh curhat atau lempar sarkas santai di kolom komentar! 👇\n\n📌 Sumber Informasi: ${editedPost.source}${domain ? ` (${domain})` : ''}\n🔗 Tautan Asli: ${editedPost.sourceUrl || '-'}\n📷 Visual: Unsplash Curated (Free Commercial Use)\n⚖️ Ringkasan sesuai UU Hak Cipta No. 28/2014 Pasal 42 untuk edukasi publik.\n\n#KonohaInsight #WargaKonoha #BeritaTerkini #${cleanCategory} #KulturDigital #${cleanSource} #TrendingNow`;
    } else if (preset === 'ringkas') {
      newCaption = `${editedPost.title}.\n\nSimak ringkasan ${editedPost.slides.length} poin fakta pada carousel di atas 👆\n\nBagikan postingan ini ke sesama warga Konoha biar tetap melek isu!\n\n📌 Sumber: ${editedPost.source}${domain ? ` (${domain})` : ''}\n📷 Visual: Unsplash License\n\n#KonohaInsight #${cleanCategory} #WargaKonoha #${cleanSource}`;
    } else if (preset === 'breaking') {
      newCaption = `🚨 BREAKING KONOHA: ${editedPost.title}.\n\nKabar terbaru dilaporkan oleh ${editedPost.source}. Berikut rangkuman lengkap peristiwa dan konteks penting yang sedang berlangsung.\n\nGeser terus sampai slide terakhir ➔\n\n📌 Sumber Berita: ${editedPost.source}${domain ? ` (${domain})` : ''}\n🔗 Tautan: ${editedPost.sourceUrl || '-'}\n📷 Visual: Unsplash Free License\n⚖️ Sesuai UU Hak Cipta No. 28/2014 Pasal 42.\n\n#BreakingNews #KonohaInsight #WartaKonoha #${cleanCategory} #${cleanSource}`;
    }

    setEditedPost({ ...editedPost, caption: newCaption });
  };

  // Live photo search results with curated fallback
  const displayPhotos = useMemo(() => {
    if (apiPhotos.length > 0) {
      return apiPhotos;
    }
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
  }, [apiPhotos, photoSearchQuery, shuffleSeed]);

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
    const textToCopy = (editedPost.caption && editedPost.caption.trim())
      ? editedPost.caption
      : generateDefaultCaption(editedPost);

    navigator.clipboard?.writeText(textToCopy);
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
          ctx.fillText('KONOHA INSIGHT', 60, 360);
        }

        // Top Overlay Bar: Only Clean Brand & Slide Index (No messy watermarks)
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 28px -apple-system, Oswald, sans-serif';
        ctx.fillText('• KONOHA INSIGHT', 50, 65);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px monospace';
        ctx.fillText(`${slideIdx + 1}/${editedPost.totalSlides}`, 970, 65);

        // Bottom Half: Theme Color Block (Default Signature Royal Blue #2446f5)
        ctx.fillStyle = editedPost.themeColor || '#2446f5';
        ctx.fillRect(0, 675, 1080, 675);

        // Dynamic Category Tag on slide 1 (Dynamic Width, Shape, & Color)
        if (slideIdx === 0) {
          const catText = (editedPost.category || 'BERITA').toUpperCase();
          const theme = getCategoryTheme(catText);
          ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Oswald", sans-serif';
          const textMetrics = ctx.measureText(catText);
          const padX = 22;
          const badgeWidth = textMetrics.width + (padX * 2);
          const badgeHeight = 46;
          const badgeX = 60;
          const badgeY = 712;
          const badgeRadius = 10;

          ctx.fillStyle = theme.bg;
          if (typeof (ctx as any).roundRect === 'function') {
            ctx.beginPath();
            (ctx as any).roundRect(badgeX, badgeY, badgeWidth, badgeHeight, badgeRadius);
            ctx.fill();
          } else {
            ctx.fillRect(badgeX, badgeY, badgeWidth, badgeHeight);
          }

          ctx.fillStyle = theme.text;
          ctx.fillText(catText, badgeX + padX, badgeY + 32);
        }

        // Slide Title (Bold with Dynamic Font Pairing)
        const canvasFontPreset = FONT_PRESETS.find(f => f.id === (editedPost.fontPairing || 'bebas')) || FONT_PRESETS[0];
        ctx.fillStyle = '#e2ff3b';
        ctx.font = canvasFontPreset.canvasTitleFont;
        
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

        // Body Text (White with Dynamic Font Pairing)
        ctx.fillStyle = '#ffffff';
        ctx.font = canvasFontPreset.canvasBodyFont;
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-zinc-200 rounded-3xl w-full max-w-6xl max-h-[96vh] flex flex-col shadow-2xl overflow-hidden text-zinc-900">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h3 className="font-headline font-bold text-base sm:text-lg text-zinc-900 tracking-wide truncate max-w-[320px] sm:max-w-md">
              {editedPost.title}
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#e2ff3b] text-black border border-black/10">
              {editedPost.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {downloadProgress && (
              <span className="text-xs font-mono text-amber-600 animate-pulse hidden sm:inline font-bold">
                {downloadProgress}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TOP CAROUSEL TIMELINE / FILMSTRIP RAIL (Zero-Friction 1-Click Navigation) */}
        <div className="px-6 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between gap-3 shrink-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {editedPost.slides.map((slide, idx) => {
              const isSelected = activeSlideIndex === idx;
              const role = getSlideRole(idx);

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-left transition-all shrink-0 border flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-white border-zinc-900 text-zinc-900 shadow ring-2 ring-zinc-900/10 scale-[1.02]'
                      : 'bg-white/80 hover:bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md font-mono font-black text-[11px] flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-zinc-900 text-white font-bold' : 'bg-zinc-200 text-zinc-700'
                  }`}>
                    {idx + 1}
                  </span>
                  <div className="flex flex-col min-w-0 max-w-[130px]">
                    <span className={`text-[9px] font-mono uppercase font-bold tracking-wider truncate ${
                      isSelected ? 'text-blue-600' : 'text-zinc-400'
                    }`}>
                      {role}
                    </span>
                    <span className="text-[11px] font-headline font-bold truncate text-zinc-900 leading-tight">
                      {slide.title}
                    </span>
                  </div>
                </button>
              );
            })}

            <button
              type="button"
              onClick={handleAddSlide}
              className="px-3 py-2 rounded-xl border border-dashed border-zinc-300 hover:border-zinc-800 bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 transition-all ml-1 shadow-sm"
              title="Tambah Slide Baru"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Slide</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono text-zinc-500">Pindah:</span>
            <button
              type="button"
              disabled={activeSlideIndex === 0}
              onClick={() => setActiveSlideIndex(prev => Math.max(0, prev - 1))}
              className="p-1.5 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 disabled:opacity-30 disabled:hover:bg-white transition-all shadow-sm"
              title="Slide Sebelumnya (Arrow Left)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-zinc-900 px-1">
              {activeSlideIndex + 1}/{editedPost.slides.length}
            </span>
            <button
              type="button"
              disabled={activeSlideIndex === editedPost.slides.length - 1}
              onClick={() => setActiveSlideIndex(prev => Math.min(editedPost.slides.length - 1, prev + 1))}
              className="p-1.5 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 disabled:opacity-30 disabled:hover:bg-white transition-all shadow-sm"
              title="Slide Berikutnya (Arrow Right)"
            >
              <ChevronRight className="w-4 h-4" />
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
                      KONOHA INSIGHT
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
                  {activeSlideIndex === 0 && (
                    <div className="mb-1">
                      <span 
                        className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-black uppercase tracking-wider shadow-sm transition-all"
                        style={{
                          backgroundColor: getCategoryTheme(editedPost.category).bg,
                          color: getCategoryTheme(editedPost.category).text
                        }}
                      >
                        {editedPost.category}
                      </span>
                    </div>
                  )}
                  <h4 className={`text-base sm:text-lg font-black text-[#e2ff3b] uppercase leading-tight line-clamp-3 transition-all ${activeFontPreset.titleClass}`}>
                    {currentSlide.title}
                  </h4>
                  <p className={`text-xs text-white/95 leading-relaxed line-clamp-5 transition-all ${activeFontPreset.descClass}`}>
                    {currentSlide.body}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[9px] font-mono text-white/80">
                  <span className="truncate max-w-[180px]">{currentSlide.sourceText || `Sumber: ${editedPost.source}`}</span>
                  <span>Geser ➔</span>
                </div>
              </div>
            </div>

            <details className="w-full max-w-[360px] group rounded-xl border border-zinc-200 bg-white">
              <summary className="cursor-pointer select-none px-3 py-2 text-[11px] font-mono font-bold text-zinc-700 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Warna &amp; font
              </summary>
              <div className="p-2 space-y-2">
            {/* Theme Color Selector Palette */}
            <div className="w-full max-w-[360px] p-3 bg-zinc-50 border border-zinc-200 rounded-xl space-y-2">
              <div className="text-[10px] font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold text-zinc-700">
                  <Palette className="w-3 h-3 text-blue-600" />
                  <span>Warna Tema Blok:</span>
                </span>
                <span className="font-bold text-zinc-900">
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
                      (editedPost.themeColor || '#2446f5') === c.hex ? 'border-zinc-900 scale-105 shadow-md ring-2 ring-zinc-900/20' : 'border-zinc-300 opacity-75 hover:opacity-100'
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

            {/* Font Typography Pairing Selector (100% Free Commercial / SIL OFL) */}
            <div className="w-full max-w-[360px] p-3 bg-zinc-50 border border-zinc-200 rounded-xl space-y-2">
              <div className="text-[10px] font-mono text-zinc-500 uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold text-zinc-700">
                  <Type className="w-3.5 h-3.5 text-blue-600" />
                  <span>Tipografi (Free Komersil):</span>
                </span>
                <span className="font-bold text-zinc-900 text-[10px] truncate max-w-[150px]">
                  {activeFontPreset.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-1.5 max-h-[175px] overflow-y-auto no-scrollbar pr-0.5">
                {FONT_PRESETS.map((preset) => {
                  const isSelected = (editedPost.fontPairing || 'bebas') === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setEditedPost({ ...editedPost, fontPairing: preset.id })}
                      className={`w-full p-2 rounded-xl text-left border transition-all flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-white border-zinc-900 text-zinc-900 shadow ring-1 ring-zinc-900/10'
                          : 'bg-white/70 hover:bg-white border-zinc-200 text-zinc-700'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-xs font-bold leading-tight ${preset.titleClass}`}>
                            {preset.headlineFont}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">+ {preset.bodyFont}</span>
                        </div>
                        <p className="text-[9px] text-zinc-500 line-clamp-1 mt-0.5">{preset.description}</p>
                      </div>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold shrink-0 ${
                        isSelected ? 'bg-zinc-900 text-white shadow-sm' : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                      }`}>
                        {preset.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
              </div>
            </details>

            {/* Download Buttons Bar */}
            <div className="w-full max-w-[360px] space-y-2 text-xs font-mono">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleDownloadAllSlides}
                  disabled={isDownloading}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow active:scale-95 disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5 text-[#e2ff3b]" />
                  <span>Download Semua ({editedPost.slides.length})</span>
                </button>

                <button
                  onClick={handleDownloadSingleSlide}
                  disabled={isDownloading}
                  className="w-full py-2.5 bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm font-bold"
                >
                  <Download className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Slide {activeSlideIndex + 1}</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANE: Slide Editor OR Instagram Caption Studio (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* View Tab Selector: Slides vs Caption */}
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-200 pb-3 gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewTab('slides')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                    viewTab === 'slides'
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:bg-zinc-50'
                  }`}
                >
                  <Layers className="w-4 h-4 text-blue-500" />
                  <span>Editor Slide ({editedPost.slides.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewTab('caption')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                    viewTab === 'caption'
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:bg-zinc-50'
                  }`}
                >
                  <Instagram className="w-4 h-4 text-[#e1306c]" />
                  <span>Caption Instagram</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    (editedPost.caption?.length || 0) > 2200 
                      ? 'bg-rose-500 text-white font-bold' 
                      : 'bg-zinc-200 text-zinc-700'
                  }`}>
                    {editedPost.caption?.length || 0}/2200
                  </span>
                </button>
              </div>

              {viewTab === 'caption' && (
                <button
                  type="button"
                  onClick={handleCopyCaption}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow active:scale-95 ml-auto"
                >
                  {copiedCaption ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCaption ? 'Tersalin ke Clipboard!' : 'Salin Caption Lengkap'}</span>
                </button>
              )}
            </div>

            {/* TAB CONTENT 1: SLIDE EDITOR */}
            {viewTab === 'slides' && (
              <div className="space-y-6">
                <details className="rounded-2xl bg-white border border-zinc-200">
                  <summary className="cursor-pointer select-none px-4 py-2.5 text-xs font-mono font-bold text-zinc-700">
                    Kategori: {editedPost.category}
                  </summary>
                <div className="p-4 pt-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-mono font-bold text-zinc-900 uppercase">Kategori & Tag Konten:</span>
                      <span 
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black uppercase tracking-wider shadow-sm transition-all"
                        style={{
                          backgroundColor: getCategoryTheme(editedPost.category).bg,
                          color: getCategoryTheme(editedPost.category).text
                        }}
                      >
                        {editedPost.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editedPost.category}
                        onChange={(e) => setEditedPost({ ...editedPost, category: e.target.value.toUpperCase() })}
                        placeholder="Nama Kategori..."
                        className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-xs font-mono font-bold text-zinc-900 uppercase focus:outline-none focus:border-zinc-900 w-36"
                      />
                    </div>
                  </div>

                  {/* Quick Category Presets */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-zinc-200">
                    <span className="text-[10px] font-mono text-zinc-500 mr-1">Preset Cepat:</span>
                    {CATEGORIES.map(item => {
                      const theme = getCategoryTheme(item.tag);
                      const isSelected = (editedPost.category || '').toUpperCase() === item.tag;
                      return (
                        <button
                          key={item.tag}
                          type="button"
                          onClick={() => setEditedPost({ ...editedPost, category: item.tag })}
                          className={`px-2 py-1 rounded-md text-[10px] font-mono font-bold transition-all flex items-center gap-1 ${
                            isSelected 
                              ? 'scale-105 shadow-md ring-2 ring-black/20' 
                              : 'opacity-80 hover:opacity-100 bg-zinc-50 border border-zinc-200 text-zinc-700'
                          }`}
                          style={isSelected ? { backgroundColor: theme.bg, color: theme.text } : {}}
                        >
                          <span>{item.icon}</span>
                          <span>{item.tag}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                </details>

            {/* ACTIVE SLIDE FOCUSED INSPECTOR (Zero Friction, 100% Synced) */}
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-5 animate-in fade-in duration-200">
              {/* Inspector Header: Slide Badge & Role & Reorder Controls */}
              <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-zinc-200 gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white font-mono font-black text-sm flex items-center justify-center shadow-sm">
                    {activeSlideIndex + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider">
                        Slide {activeSlideIndex + 1} dari {editedPost.slides.length}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
                        {getSlideRole(activeSlideIndex)}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      {activeSlideIndex === 0
                        ? 'Cover utama carousel feed — visual & headline paling menentukan impresi & hook pembaca'
                        : activeSlideIndex === editedPost.slides.length - 1
                        ? 'Slide penutup — rangkuman narasi & ajakan diskusi / komentar warga Konoha'
                        : 'Slide narasi editorial — sajikan kronologi fakta ringkas, jelas, dan lugas'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-600 bg-zinc-50 p-1 rounded-xl border border-zinc-200">
                  <button
                    type="button"
                    onClick={() => {
                      if (activeSlideIndex > 0) {
                        const updated = { ...editedPost };
                        const temp = updated.slides[activeSlideIndex];
                        updated.slides[activeSlideIndex] = updated.slides[activeSlideIndex - 1];
                        updated.slides[activeSlideIndex - 1] = temp;
                        setEditedPost(updated);
                        setActiveSlideIndex(activeSlideIndex - 1);
                      }
                    }}
                    disabled={activeSlideIndex === 0}
                    className="p-1.5 rounded-lg hover:text-black hover:bg-zinc-200 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                    title="Geser Urutan ke Kiri / Atas"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (activeSlideIndex < editedPost.slides.length - 1) {
                        const updated = { ...editedPost };
                        const temp = updated.slides[activeSlideIndex];
                        updated.slides[activeSlideIndex] = updated.slides[activeSlideIndex + 1];
                        updated.slides[activeSlideIndex + 1] = temp;
                        setEditedPost(updated);
                        setActiveSlideIndex(activeSlideIndex + 1);
                      }
                    }}
                    disabled={activeSlideIndex === editedPost.slides.length - 1}
                    className="p-1.5 rounded-lg hover:text-black hover:bg-zinc-200 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                    title="Geser Urutan ke Kanan / Bawah"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  {editedPost.slides.length > 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        const updated = { ...editedPost };
                        updated.slides = updated.slides.filter((_, i) => i !== activeSlideIndex);
                        updated.totalSlides = updated.slides.length;
                        setEditedPost(updated);
                        setActiveSlideIndex(Math.max(0, activeSlideIndex - 1));
                      }}
                      className="p-1.5 rounded-lg hover:text-rose-600 hover:bg-rose-50 transition-all text-zinc-400"
                      title="Hapus Slide Ini"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Title / Headline Input */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-mono text-zinc-700 font-bold uppercase flex items-center gap-1.5">
                    <span>Judul / Headline Slide {activeSlideIndex + 1}:</span>
                  </label>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {currentSlide.title?.length || 0} karakter
                  </span>
                </div>
                <input
                  type="text"
                  value={currentSlide.title || ''}
                  onChange={(e) => handleUpdateSlideTitle(activeSlideIndex, e.target.value)}
                  placeholder="Masukkan headline slide yang padat & menarik..."
                  className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-bold font-headline text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-blue-600 transition-all shadow-sm"
                />
              </div>

              {/* Content Body Textarea */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-mono text-zinc-700 font-bold uppercase flex items-center gap-1.5">
                    <span>Isi Narasi / Teks Slide {activeSlideIndex + 1}:</span>
                  </label>
                  <span className={`text-[10px] font-mono ${
                    (currentSlide.body?.length || 0) > 260 ? 'text-amber-600 font-bold' : 'text-zinc-500'
                  }`}>
                    {currentSlide.body?.length || 0}/260 karakter
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={currentSlide.body || ''}
                  onChange={(e) => handleUpdateSlideBody(activeSlideIndex, e.target.value)}
                  placeholder="Tulis narasi editorial slide di sini..."
                  className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-sans text-zinc-900 leading-relaxed placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-blue-600 transition-all resize-y shadow-sm"
                />
              </div>

              {/* Visual Photo Picker Section (Synchronized Instantly with Preview) */}
              <div className="pt-3 border-t border-zinc-200 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-zinc-800 font-bold uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>FOTO VISUAL SLIDE {activeSlideIndex + 1} (UNSPLASH / WIKIMEDIA)</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShuffleSeed(prev => prev + 1)}
                    className="px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-700 hover:text-black text-[10px] flex items-center gap-1.5 transition-all shadow-sm font-semibold"
                  >
                    <Dices className="w-3.5 h-3.5 text-blue-600" />
                    <span>🎲 Acak Foto</span>
                  </button>
                </div>

                {/* Smart Entity Keywords from Headline (1-Click Instant Search) */}
                {smartKeywords.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="text-[10px] text-zinc-600 font-mono font-bold uppercase tracking-wider flex items-center gap-1 mr-1">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                      <span>Saran Judul:</span>
                    </span>
                    {smartKeywords.map((kw) => (
                      <button
                        key={kw}
                        type="button"
                        onClick={() => setPhotoSearchQuery(kw)}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-mono capitalize transition-all ${
                          photoSearchQuery.toLowerCase() === kw.toLowerCase()
                            ? 'bg-zinc-900 text-white font-bold shadow'
                            : 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-200'
                        }`}
                      >
                        #{kw}
                      </button>
                    ))}
                  </div>
                )}

                {/* Quick Search Topic Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { label: '🐼 Panda / Satwa', q: 'panda' },
                    { label: '🌿 Hutan / Lingkungan', q: 'forest' },
                    { label: '🏛️ DPR / Politik', q: 'politics' },
                    { label: '⚖️ Sidang / Hukum', q: 'court' },
                    { label: '🤖 AI & Robotik', q: 'robot' },
                    { label: '📱 Gadget / Sosmed', q: 'technology' },
                    { label: '💼 Bisnis & Pasar', q: 'business' },
                    { label: '☕ Kopi Konoha', q: 'coffee' }
                  ].map(pill => (
                    <button
                      key={pill.q}
                      type="button"
                      onClick={() => setPhotoSearchQuery(pill.q)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all ${
                        photoSearchQuery.toLowerCase() === pill.q.toLowerCase()
                          ? 'bg-zinc-900 text-white font-bold shadow-sm'
                          : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200 shadow-sm'
                      }`}
                    >
                      {pill.label}
                    </button>
                  ))}
                </div>

                {/* Search Bar for Unsplash / Wikimedia */}
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    {isSearchingPhotos ? (
                      <Loader2 className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 animate-spin" />
                    ) : (
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    )}
                    <input
                      type="text"
                      placeholder="Ketik kata kunci foto Unsplash (misal: panda, kebakaran hutan, polisi, dpr)..."
                      value={photoSearchQuery}
                      onChange={(e) => setPhotoSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-blue-600 transition-all shadow-sm"
                    />
                  </div>
                  {photoSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setPhotoSearchQuery('')}
                      className="px-2.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[11px] font-medium border border-zinc-200"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Thumbnail Gallery (1-Click instant apply to active slide!) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                    <span>Pilih foto (otomatis masuk ke Preview Slide {activeSlideIndex + 1}):</span>
                    <span className="text-blue-600 font-bold">1-Klik Ganti Preview</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {displayPhotos.map((photo) => {
                      const isCurrentPhoto = currentSlide.photoUrl === photo.url;
                      return (
                        <button
                          key={photo.id}
                          type="button"
                          onClick={() => handleSetSlidePhoto(activeSlideIndex, photo.url)}
                          className={`group relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                            isCurrentPhoto
                              ? 'border-blue-600 scale-105 shadow-xl ring-2 ring-blue-500/30 z-10'
                              : 'border-zinc-200 hover:border-zinc-400 opacity-90 hover:opacity-100 hover:scale-[1.02]'
                          }`}
                          title={photo.name}
                        >
                          <img src={photo.url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          {isCurrentPhoto && (
                            <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] shadow-md">
                              ✓
                            </div>
                          )}
                          <span className="absolute inset-x-0 bottom-0 bg-black/70 text-[8px] text-white truncate px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            {photo.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom URL Input Fallback */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    placeholder="...atau tempel URL gambar custom khusus untuk slide ini"
                    value={customPhotoInput}
                    onChange={(e) => setCustomPhotoInput(e.target.value)}
                    className="flex-1 px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-400"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (customPhotoInput.trim()) {
                        handleSetSlidePhoto(activeSlideIndex, customPhotoInput.trim());
                        setCustomPhotoInput('');
                      }
                    }}
                    className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs flex items-center gap-1.5 transition-all shrink-0 font-bold shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Pasang</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 2: INSTAGRAM CAPTION STUDIO */}
        {viewTab === 'caption' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            {/* Header & Preset Selector */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold font-headline text-zinc-900 flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-[#e1306c]" />
                    <span>Pilihan Template Format Caption</span>
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Pilih template narasi siap posting untuk akun @konoha.insight
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('homeless')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      captionPreset === 'homeless'
                        ? 'bg-zinc-900 text-white font-bold shadow'
                        : 'bg-zinc-100 text-zinc-600 hover:text-black border border-zinc-200'
                    }`}
                  >
                    Homeless Media
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('ringkas')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      captionPreset === 'ringkas'
                        ? 'bg-zinc-900 text-white font-bold shadow'
                        : 'bg-zinc-100 text-zinc-600 hover:text-black border border-zinc-200'
                    }`}
                  >
                    Ringkas
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('breaking')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      captionPreset === 'breaking'
                        ? 'bg-zinc-900 text-white font-bold shadow'
                        : 'bg-zinc-100 text-zinc-600 hover:text-black border border-zinc-200'
                    }`}
                  >
                    Breaking Alert
                  </button>
                </div>
              </div>
            </div>

            {/* Main Caption Editor Box */}
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-zinc-800 font-bold uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Teks Caption Feed Instagram</span>
                </label>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className={`${
                    (editedPost.caption?.length || 0) > 2200 
                      ? 'text-rose-600 font-bold' 
                      : 'text-zinc-500'
                  }`}>
                    {editedPost.caption?.length || 0} / 2.200 karakter
                  </span>
                  {(editedPost.caption?.length || 0) > 2200 && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200 font-bold">
                      Batas terlampaui!
                    </span>
                  )}
                </div>
              </div>

              <textarea
                rows={12}
                value={editedPost.caption || ''}
                onChange={(e) => setEditedPost({ ...editedPost, caption: e.target.value })}
                placeholder="Tulis caption Instagram lengkap di sini..."
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-sans text-zinc-900 leading-relaxed focus:bg-white focus:outline-none focus:border-blue-600 transition-all resize-y shadow-sm"
              />

              {/* Character count bar */}
              <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    (editedPost.caption?.length || 0) > 2200 
                      ? 'bg-rose-500' 
                      : (editedPost.caption?.length || 0) > 1800 
                        ? 'bg-amber-500' 
                        : 'bg-emerald-500'
                  }`}
                  style={{ width: `${Math.min(100, ((editedPost.caption?.length || 0) / 2200) * 100)}%` }}
                />
              </div>

              {/* Quick Hashtag Cloud Chips */}
              <div className="pt-2 border-t border-zinc-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-mono text-zinc-700 uppercase flex items-center gap-1.5 font-bold">
                    <Hash className="w-3.5 h-3.5 text-blue-600" />
                    <span>Koleksi Hashtag (Klik untuk Tambah/Hapus):</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {allHashtags.filter(h => isTagInCaption(h)).length} aktif dalam caption
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {allHashtags.map((tag) => {
                    const active = isTagInCaption(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleToggleHashtag(tag)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1 ${
                          active
                            ? 'bg-zinc-900 text-white font-bold shadow-sm'
                            : 'bg-zinc-100 text-zinc-600 hover:text-black border border-zinc-200 hover:bg-zinc-200'
                        }`}
                      >
                        <span>{tag}</span>
                        {active && <span className="text-[10px] font-bold text-[#e2ff3b]">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Instagram Live Post Preview Mockup */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                <span className="text-xs font-mono text-zinc-700 uppercase font-bold flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
                  <span>Simulasi Tampilan Feed Instagram</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>LIVE FEED SIMULATION</span>
                </span>
              </div>

              {/* Phone Mockup Frame */}
              <div className="max-w-md mx-auto bg-white rounded-2xl border border-zinc-300 overflow-hidden shadow-xl">
                {/* IG Header */}
                <div className="p-3 flex items-center justify-between border-b border-zinc-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#e2ff3b] text-black font-black text-xs flex items-center justify-center font-headline ring-2 ring-black/10 shadow-sm">
                      KI
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900 flex items-center gap-1">
                        <span>konoha.insight</span>
                        <span className="w-3 h-3 rounded-full bg-blue-500 text-white text-[8px] flex items-center justify-center font-bold">✓</span>
                      </div>
                      <div className="text-[10px] text-zinc-500">Audio Asli · konoha.insight</div>
                    </div>
                  </div>
                  <span className="text-zinc-400 text-xs font-bold">•••</span>
                </div>

                {/* IG Image Thumbnail */}
                <div className="relative aspect-[4/5] bg-zinc-950 overflow-hidden">
                  <img 
                    src={editedPost.slides[0]?.photoUrl || editedPost.coverImage} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur text-white text-[10px] font-mono font-bold">
                    1/{editedPost.slides.length}
                  </div>
                </div>

                {/* IG Action Icons */}
                <div className="p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-zinc-800">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors" />
                      <MessageCircle className="w-5 h-5 hover:text-black cursor-pointer transition-colors" />
                      <Share2 className="w-5 h-5 hover:text-black cursor-pointer transition-colors" />
                    </div>
                    <Bookmark className="w-5 h-5 hover:text-black cursor-pointer transition-colors" />
                  </div>

                  <div className="text-xs font-bold text-zinc-900">
                    2.841 suka
                  </div>

                  {/* IG Caption Text Rendered */}
                  <div className="text-xs text-zinc-800 font-sans leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto pr-1">
                    <span className="font-bold text-zinc-900 mr-1.5">konoha.insight</span>
                    {editedPost.caption || 'Belum ada caption.'}
                  </div>

                  <div className="text-[11px] text-zinc-500 pt-1">
                    Lihat semua 38 komentar
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 uppercase">
                    30 MENIT YANG LALU
                  </div>
                </div>
              </div>
            </div>

            {/* Legal & Compliance Assurance Card */}
            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs font-mono space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>KEPATUHAN ATRIBUSI & HUKUM PUBLIK</span>
              </div>
              <div className="text-zinc-600 text-[11px] space-y-1">
                <div>• <strong>Sumber Informasi:</strong> {editedPost.source} ({editedPost.sourceUrl ? 'Tautan Terverifikasi' : 'Redaksi'})</div>
                <div>• <strong>Visual & Foto:</strong> Lisensi Unsplash Bebas Komersial (Atribusi dalam caption)</div>
                <div>• <strong>Payung Hukum:</strong> UU Hak Cipta No. 28/2014 Pasal 42 (Pendidikan, Edukasi & Pelaporan Warta Aktual)</div>
              </div>
            </div>
          </div>
        )}

            {/* Sticky Bottom Action Buttons Bar */}
            <div className="sticky bottom-0 pt-4 pb-2 bg-white/95 backdrop-blur-md flex flex-wrap items-center gap-3 border-t border-zinc-200">
              <button
                onClick={() => {
                  onSave(editedPost);
                  onClose();
                }}
                className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-mono font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <Check className="w-4 h-4 text-[#e2ff3b]" />
                <span>Simpan Perubahan</span>
              </button>

              {onMarkPublished && (
                <button
                  onClick={() => onMarkPublished(editedPost.id)}
                  className="px-4 py-3 bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 font-mono text-xs rounded-xl transition-all shadow-sm font-semibold"
                >
                  Tandai Sudah Diposting
                </button>
              )}

              <button
                onClick={onClose}
                className="px-4 py-3 text-zinc-500 hover:text-zinc-900 font-mono text-xs ml-auto transition-all"
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
