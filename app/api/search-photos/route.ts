import { NextResponse } from 'next/server';

interface PhotoResult {
  id: string;
  name: string;
  url: string;
  photographer?: string;
  source: 'Unsplash' | 'Wikimedia' | 'Curated';
  tags: string[];
}

// Curated library covering diverse real-world topics
const EXTENSIVE_PHOTO_LIBRARY: PhotoResult[] = [
  // Animals / Fauna / Panda
  {
    id: 'f-panda-1',
    name: 'Panda Raksasa Makan Bambu',
    url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Sid Balachandran / Unsplash',
    source: 'Unsplash',
    tags: ['panda', 'hewan', 'satwa', 'fauna', 'bambu', 'china', 'zoo', 'binatang', 'lucu']
  },
  {
    id: 'f-panda-2',
    name: 'Bayi Panda Santai di Pohon',
    url: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Diana Parkhouse / Unsplash',
    source: 'Unsplash',
    tags: ['panda', 'bayi panda', 'hewan', 'satwa', 'fauna', 'binatang', 'pohon', 'alam']
  },
  {
    id: 'f-panda-3',
    name: 'Red Panda Menatap Kamera',
    url: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Fethi Bouhafs / Unsplash',
    source: 'Unsplash',
    tags: ['panda', 'red panda', 'hewan', 'satwa', 'fauna', 'binatang']
  },
  {
    id: 'f-tiger-1',
    name: 'Harimau Sumatra di Hutan',
    url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['harimau', 'tiger', 'hewan', 'satwa', 'fauna', 'binatang', 'hutan']
  },
  {
    id: 'f-cat-1',
    name: 'Kucing Peliharaan Lucu',
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['kucing', 'cat', 'hewan', 'peliharaan', 'fauna', 'lucu']
  },
  {
    id: 'f-dog-1',
    name: 'Anjing Golden Retriever',
    url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['anjing', 'dog', 'hewan', 'fauna', 'peliharaan']
  },

  // Lingkungan & Alam & Kebakaran Hutan / Karhutla
  {
    id: 'env-fire-1',
    name: 'Kebakaran Hutan & Asap Tebal',
    url: 'https://images.unsplash.com/photo-1602980085566-4c40b8fecf06?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['karhutla', 'kebakaran hutan', 'api', 'asap', 'emisi', 'lingkungan', 'bencana', 'hutan']
  },
  {
    id: 'env-forest-1',
    name: 'Hutan Tropis Hujan Rindang',
    url: 'https://images.unsplash.com/photo-1511497584788-87676104235f?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['hutan', 'lingkungan', 'alam', 'pohon', 'iklim', 'karbon']
  },
  {
    id: 'env-flood-1',
    name: 'Banjir & Genangan Air Kota',
    url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['banjir', 'hujan', 'cuaca', 'bencana', 'lingkungan', 'jakarta']
  },

  // Politik, Hukum, DPR, Pejabat Konoha
  {
    id: 'pol-dpr-1',
    name: 'Gedung Parlemen & Pemerintahan',
    url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['dpr', 'politik', 'pemerintah', 'menteri', 'hukum', 'sidang', 'pejabat', 'konoha', 'gedung']
  },
  {
    id: 'pol-court-1',
    name: 'Palu Sidang Hakim Pengadilan',
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['hukum', 'pengadilan', 'hakim', 'sidang', 'korupsi', 'kpk', 'pasal', 'kejaksaan', 'palu']
  },
  {
    id: 'pol-police-1',
    name: 'Garis Polisi & Investigasi',
    url: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['polisi', 'kriminal', 'hukum', 'kasus', 'investigasi', 'tahanan', 'sidang']
  },
  {
    id: 'pol-flag-1',
    name: 'Bendera Merah Putih Berkibar',
    url: 'https://images.unsplash.com/photo-1596405835955-4532a63c0d61?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['indonesia', 'merah putih', 'nasional', 'negara', 'bendera', 'konoha']
  },

  // Bisnis, Rupiah, Cuan, Kripto, Kantor
  {
    id: 'bis-money-1',
    name: 'Uang Kertas & Finansial',
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['uang', 'rupiah', 'dolar', 'bisnis', 'cuan', 'gaji', 'finansial', 'bank']
  },
  {
    id: 'bis-chart-1',
    name: 'Grafik Saham Hijau Candlestick',
    url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['saham', 'trading', 'crypto', 'bitcoin', 'bisnis', 'cuan', 'bursa', 'ihsg']
  },
  {
    id: 'bis-office-1',
    name: 'Kantor Startup & Tim Meeting',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['kantor', 'meeting', 'startup', 'kerja', 'bisnis', 'korporat']
  },

  // Sosmed, WhatsApp, Gadget, Smartphone
  {
    id: 'soc-phone-1',
    name: 'Handphone Notifikasi & Aplikasi',
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['smartphone', 'hp', 'whatsapp', 'wa', 'notifikasi', 'sosmed', 'aplikasi', 'android']
  },
  {
    id: 'soc-chat-1',
    name: 'Tangan Mengetik Pesan Chat',
    url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['whatsapp', 'chat', 'pesan', 'hp', 'smartphone', 'komunikasi', 'sosmed']
  },
  {
    id: 'soc-feed-1',
    name: 'Scrolling Instagram di Malam Hari',
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['instagram', 'ig', 'sosmed', 'feed', 'scroll', 'viral', 'konten']
  },
  {
    id: 'soc-creator-1',
    name: 'Kreator Digital di Studio',
    url: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['influencer', 'kreator', 'studio', 'youtube', 'tiktok', 'sosmed']
  },

  // AI & Cyber & Teknologi Asli
  {
    id: 'tech-ai-1',
    name: 'Wajah Model Neural AI Futuristik',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['ai', 'artificial intelligence', 'neural', 'cyber', 'robot', 'futuristik']
  },
  {
    id: 'tech-hacker-1',
    name: 'Kode Hijau Keamanan Siber',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['hacker', 'siber', 'keamanan', 'security', 'cyber', 'malware', 'coding']
  },
  {
    id: 'tech-chip-1',
    name: 'Microchip Prosesor Komputer',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['chip', 'hardware', 'prosesor', 'teknologi', 'komputer', 'perangkat']
  },

  // Lifestyle & Kota & Warga Konoha
  {
    id: 'life-coffee-1',
    name: 'Ngopi Santai Warung Kopi',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['kopi', 'warkop', 'kafe', 'nongkrong', 'santai', 'warga', 'konoha', 'lifestyle']
  },
  {
    id: 'life-traffic-1',
    name: 'Macet Gedung Bertingkat Jakarta',
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1080&auto=format&fit=crop&q=85',
    photographer: 'Unsplash',
    source: 'Unsplash',
    tags: ['macet', 'jakarta', 'lalulintas', 'kota', 'kendaraan', 'jalan', 'konoha']
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get('q') || '').toLowerCase().trim();

  // 1. Search against Curated Library
  let matched: PhotoResult[] = [];
  if (q) {
    const queryTokens = q.split(/\s+/).filter(Boolean);
    matched = EXTENSIVE_PHOTO_LIBRARY.filter(p => {
      const pText = `${p.name} ${p.tags.join(' ')}`.toLowerCase();
      return queryTokens.some(token => pText.includes(token));
    });
  } else {
    matched = [...EXTENSIVE_PHOTO_LIBRARY];
  }

  // 2. Query Wikimedia Commons API for live accurate results (e.g. "panda", "harimau", "sidang")
  if (q && matched.length < 6) {
    try {
      const wmUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
        q
      )}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime&iiurlwidth=1080&format=json&origin=*`;
      const res = await fetch(wmUrl, {
        headers: { 'User-Agent': 'KonohaInsight/1.0 (editor@konohainsight.org)' },
        next: { revalidate: 3600 }
      });

      if (res.ok) {
        const data = await res.json();
        const pages = Object.values(data.query?.pages || {}) as any[];
        const wmPhotos: PhotoResult[] = pages
          .filter(p => p.imageinfo?.[0]?.thumburl && !p.imageinfo?.[0]?.thumburl.endsWith('.svg'))
          .map((p, i) => ({
            id: `wm-${p.pageid || i}`,
            name: p.title?.replace(/^File:/, '').replace(/\.[^.]+$/, '') || `Foto ${q}`,
            url: p.imageinfo[0].thumburl,
            photographer: 'Wikimedia Commons (Public Domain / CC)',
            source: 'Wikimedia',
            tags: [q, 'wikimedia', 'public-domain']
          }));

        matched.push(...wmPhotos);
      }
    } catch (err) {
      console.warn('Wikimedia fetch fallback error:', err);
    }
  }

  // Deduplicate by URL
  const uniqueUrls = new Set<string>();
  const finalResults: PhotoResult[] = [];
  for (const item of matched) {
    if (!uniqueUrls.has(item.url)) {
      uniqueUrls.add(item.url);
      finalResults.push(item);
    }
  }

  // Fallback to top curated if still empty
  if (finalResults.length === 0) {
    finalResults.push(...EXTENSIVE_PHOTO_LIBRARY.slice(0, 8));
  }

  return NextResponse.json({
    success: true,
    query: q,
    count: finalResults.length,
    photos: finalResults.slice(0, 16)
  });
}
