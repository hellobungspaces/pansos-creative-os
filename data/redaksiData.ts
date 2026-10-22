export interface RedaksiPost {
  id: string;
  category: 'AI' | 'SOSMED' | 'TEKNOLOGI' | 'BISNIS' | 'MARKETING';
  title: string;
  highlightedTitle: string; // for the bold yellow words
  source: string;
  timeAgo: string;
  viralScore: number;
  hasRiskWarning?: boolean;
  coverImage: string;
  sourceBadge?: string;
  totalSlides: number;
  slides: {
    number: number;
    title: string;
    body: string;
    hasPhoto: boolean;
    photoUrl?: string;
    sourceText: string;
  }[];
  caption: string;
  status: 'perlu_review' | 'disetujui' | 'terjadwal' | 'sudah_posting' | 'ditolak';
}

export interface ActivityLog {
  agent: 'Analis' | 'Scout' | 'Designer' | 'Copywriter';
  message: string;
  timeAgo: string;
}

export interface NewsSource {
  id: string;
  name: string;
  lang: 'ID' | 'EN';
  isTrends?: boolean;
  url: string;
  statusText: string;
  lastChecked: string;
  enabled: boolean;
}

export const INITIAL_POSTS: RedaksiPost[] = [
  {
    id: 'post-1',
    category: 'AI',
    title: 'ALEXA PLUS MENDADAK NYANYI "LALALA" SELAMA BEBERAPA MENIT',
    highlightedTitle: 'ALEXA PLUS MENDADAK <span class="text-[#e2ff3b]">NYANYI "LALALA"</span> SELAMA BEBERAPA MENIT',
    source: 'The Verge',
    timeAgo: '49 mnt lalu',
    viralScore: 92,
    coverImage: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=80',
    sourceBadge: 'The Verge',
    totalSlides: 6,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'ALEXA PLUS MENDADAK NYANYI "LALALA" SELAMA BEBERAPA MENIT',
        body: 'Pengguna Amazon Alexa Plus di berbagai negara melaporkan anomali suara misterius di tengah malam.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: The Verge'
      },
      {
        number: 2,
        title: 'ANOMALI DI TENGAH MALAM',
        body: 'Perangkat pintar Amazon tiba-tiba memutar lantunan lagu berulang-ulang tanpa ada perintah dari pemilik rumah.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: The Verge'
      },
      {
        number: 3,
        title: 'TANGGAPAN RESMI AMAZON',
        body: 'Amazon menyatakan bahwa hal ini terjadi akibat bug pada cache model bahasa generatif audio terbaru mereka.',
        hasPhoto: false,
        sourceText: 'Sumber: The Verge'
      }
    ],
    caption: 'Alexa Plus mendadak bernyanyi sendiri di tengah malam tanpa ada perintah suara sama sekali. Kejadian aneh ini memicu kekhawatiran soal keamanan privasi IoT.\n\nKalau smart speaker lo mendadak nyanyi tengah malam, lo bakal ngapain?\n\n#AlexaBug #SmartHome #ArtificialIntelligence #PansosCreative'
  },
  {
    id: 'post-2',
    category: 'AI',
    title: 'ANCAMAN DI CLAUDE TERDETEKSI, PENGGUNA DILAPORKAN DAN DITANGKAP',
    highlightedTitle: 'ANCAMAN DI CLAUDE TERDETEKSI, <span class="text-[#e2ff3b]">PENGGUNA DILAPORKAN DAN DITANGKAP</span>',
    source: 'detikInet',
    timeAgo: '1 jam lalu',
    viralScore: 95,
    coverImage: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop&q=80',
    sourceBadge: 'detikcom',
    totalSlides: 6,
    hasRiskWarning: true,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'ANCAMAN DI CLAUDE TERDETEKSI, PENGGUNA DILAPORKAN DAN DITANGKAP',
        body: 'Seorang pengguna ditangkap setelah menulis ancaman penembakan massal terhadap kantor polisi lokal melalui chatbot AI Claude.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 2,
        title: 'APA YANG TERJADI?',
        body: 'Kepada penyidik, ia mengaku memakai chatbot itu seperti buku harian pribadi tanpa menyadari sistem pengawasan keselamatan Anthropic.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 3,
        title: 'ANCAMAN TERDETEKSI OTOMATIS',
        body: 'Menurut laporan kepolisian, sistem keselamatan Claude menandai tulisan tersebut sebagai konten berbahaya tingkat tinggi. Potongan percakapannya kemudian diteruskan kepada peninjau manusia di Anthropic.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 4,
        title: 'ANTHROPIC HUBUNGI APARAT',
        body: 'Setelah ancaman dinilai nyata dan kredibel, Anthropic melaporkannya kepada penegak hukum. Perusahaan menegaskan komitmen nol toleransi terhadap kekerasan.',
        hasPhoto: false,
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 5,
        title: 'BATASAN PRIVASI CHATBOT AI',
        body: 'Kasus ini membuka mata publik bahwa percakapan dengan AI tidak sepenuhnya privat dan dapat diakses ketika terindikasi tindak kriminal.',
        hasPhoto: false,
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 6,
        title: 'MENURUT KAMU?',
        body: 'Apakah langkah Anthropic melaporkan pengguna sudah tepat, atau ini melanggar privasi percakapan? Tulis pendapat kamu di bawah.',
        hasPhoto: false,
        sourceText: 'Sumber: detikInet'
      }
    ],
    caption: 'Kasus pertama pengguna AI dilaporkan langsung oleh pengembangnya ke polisi. Pengguna Claude ditangkap setelah terdeteksi menuliskan ancaman penembakan.\n\nPelajaran penting: chatbot AI bukan buku harian tanpa pengawasan. Gimana tanggapan kamu?\n\n#ClaudeAI #Anthropic #CyberLaw #KeamananDigital #PansosCreative'
  },
  {
    id: 'post-3',
    category: 'BISNIS',
    title: 'TRANSAKSI KRIPTO INDONESIA NAIK 12,87%, BITCOIN JADI PENGGERAK',
    highlightedTitle: 'TRANSAKSI KRIPTO INDONESIA <span class="text-[#e2ff3b]">NAIK 12,87%, BITCOIN JADI PENGGERAK</span>',
    source: 'Selular.id',
    timeAgo: '2 jam lalu',
    viralScore: 88,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    totalSlides: 5,
    hasRiskWarning: true,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'TRANSAKSI KRIPTO INDONESIA NAIK 12,87%',
        body: 'Bappebti mencatat lonjakan transaksi aset kripto nasional didorong oleh reli harga Bitcoin global.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: Selular.id'
      }
    ],
    caption: 'Pasar kripto di Indonesia kembali bergairah. Transaksi naik 12,87% didominasi investor ritel generasi muda.\n\nPortofolio kripto kamu masih hijau atau nyangkut?\n\n#Bitcoin #KriptoIndonesia #Bappebti #PansosCreative'
  },
  {
    id: 'post-4',
    category: 'AI',
    title: 'ANTHROPIC LOBI VATIKAN SOAL KESADARAN DAN REGULASI AI',
    highlightedTitle: 'ANTHROPIC LOBI VATIKAN SOAL <span class="text-[#e2ff3b]">KESADARAN DAN REGULASI AI</span>',
    source: 'CNN Indonesia',
    timeAgo: '5 jam lalu',
    viralScore: 86,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    totalSlides: 5,
    hasRiskWarning: true,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'ANTHROPIC LOBI VATIKAN SOAL KESADARAN DAN REGULASI AI',
        body: 'Para petinggi lab AI bertemu dengan perwakilan Vatikan untuk membahas etika moral kecerdasan buatan.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: CNN Indonesia'
      }
    ],
    caption: 'Isu AI sudah mencapai ruang diskusi Vatikan. Pembahasan berfokus pada etika martabat manusia di era automasi.\n\n#Vatican #AIEthics #Anthropic #Teknologi'
  },
  {
    id: 'post-5',
    category: 'MARKETING',
    title: 'OPENAI UJI IKLAN VISUAL SAAT PENGGUNA BIKIN GAMBAR DI CHATGPT',
    highlightedTitle: 'OPENAI UJI <span class="text-[#e2ff3b]">IKLAN VISUAL</span> SAAT PENGGUNA BIKIN GAMBAR DI CHATGPT',
    source: 'Selular.id',
    timeAgo: '6 jam lalu',
    viralScore: 94,
    coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
    totalSlides: 5,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'OPENAI UJI IKLAN VISUAL SAAT PENGGUNA BIKIN GAMBAR DI CHATGPT',
        body: 'Format iklan bersponsor mulai disisipkan ke dalam generasi prompt gambar DALL-E.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: Selular.id'
      }
    ],
    caption: 'Monetisasi ChatGPT babak baru: iklan visual bersponsor mulai diuji coba.\n\n#OpenAI #ChatGPT #DigitalAds #TechNews'
  },
  {
    id: 'post-6',
    category: 'TEKNOLOGI',
    title: 'WHATSAPP STOP DUKUNGAN HP LAWAS MULAI OKTOBER 2026',
    highlightedTitle: 'WHATSAPP STOP <span class="text-[#e2ff3b]">DUKUNGAN HP LAWAS</span> MULAI OKTOBER 2026',
    source: 'CNN Indonesia',
    timeAgo: '7 jam lalu',
    viralScore: 91,
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
    totalSlides: 4,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'WHATSAPP STOP DUKUNGAN HP LAWAS MULAI OKTOBER 2026',
        body: 'Deretan ponsel dengan sistem operasi Android dan iOS versi lama tidak bisa lagi mengakses WhatsApp.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: CNN Indonesia'
      }
    ],
    caption: 'Cek HP kamu sekarang! WhatsApp resmi menghentikan pembaruan untuk sistem operasi jadul.\n\n#WhatsAppUpdate #GadgetNews #Teknologi'
  },
  {
    id: 'post-7',
    category: 'SOSMED',
    title: 'INSTAGRAM UJI FITUR READ-ONLY BEBAS LURKING TANPA TAKUT KELIKE',
    highlightedTitle: 'INSTAGRAM UJI <span class="text-[#e2ff3b]">FITUR READ-ONLY</span> BEBAS LURKING TANPA TAKUT KELIKE',
    source: 'Social Media Today',
    timeAgo: '8 jam lalu',
    viralScore: 97,
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    totalSlides: 5,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'INSTAGRAM UJI FITUR READ-ONLY BEBAS LURKING TANPA TAKUT KELIKE',
        body: 'Fitur baru memungkinkan stalking profil tanpa sengaja menekan tombol like ganda.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: Social Media Today'
      }
    ],
    caption: 'Kabar gembira buat para stalker handal! Instagram akhirnya menguji mode read-only.\n\nTag temen lo yang hobi stalking mantan!\n\n#InstagramFeature #StalkerFriendly #SosmedNews'
  },
  {
    id: 'post-8',
    category: 'BISNIS',
    title: 'ELON MUSK KEMBALI JADI TRILIUNER, HARTANYA TEMBUS RP 18.616 TRILIUN',
    highlightedTitle: 'ELON MUSK KEMBALI JADI TRILIUNER, <span class="text-[#e2ff3b]">HARTANYA TEMBUS RP 18.616 TRILIUN</span>',
    source: 'detikInet',
    timeAgo: '9 jam lalu',
    viralScore: 89,
    coverImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=80',
    totalSlides: 5,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'ELON MUSK KEMBALI JADI TRILIUNER, HARTANYA TEMBUS RP 18.616 TRILIUN',
        body: 'Lonjakan saham Tesla dan valuasi xAI kembali mengukuhkan posisinya sebagai manusia terkaya di bumi.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=80',
        sourceText: 'Sumber: detikInet'
      }
    ],
    caption: 'Kekayaan Elon Musk kembali menyentuh rekor fantastis berkat valuasi xAI dan SpaceX.\n\n#ElonMusk #Tesla #BisnisGlobal'
  }
];

export const ACTIVITY_LOGS: ActivityLog[] = [
  { agent: 'Analis', message: 'Menilai 15 berita, 8 lolos ambang skor 70', timeAgo: '25 mnt lalu' },
  { agent: 'Scout', message: 'Menemukan 10 berita baru', timeAgo: '26 mnt lalu' },
  { agent: 'Designer', message: 'Gambar selesai untuk "Alexa Plus Mendadak Nyanyi \'Lalala\' Selama Beberapa Menit"', timeAgo: '49 mnt lalu' },
  { agent: 'Copywriter', message: 'Draft siap: "Alexa Plus Mendadak Nyanyi \'Lalala\' Selama Beberapa Menit"', timeAgo: '49 mnt lalu' },
  { agent: 'Scout', message: 'Menemukan 5 berita baru', timeAgo: '57 mnt lalu' },
  { agent: 'Analis', message: 'Menilai 12 berita, 6 lolos ambang skor 70', timeAgo: '1 jam lalu' },
  { agent: 'Designer', message: 'Gambar selesai untuk "Ancaman di Claude Terdeteksi, Pengguna Dilaporkan dan Ditangkap"', timeAgo: '1 jam lalu' },
  { agent: 'Copywriter', message: 'Draft siap: "Ancaman di Claude Terdeteksi, Pengguna Dilaporkan dan Ditangkap"', timeAgo: '1 jam lalu' }
];

export const NEWS_SOURCES: NewsSource[] = [
  { id: 'src-1', name: 'ANTARA', lang: 'ID', url: 'https://www.antaranews.com/rss/tekno.xml', statusText: '7 berita / 2 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-2', name: 'Adweek', lang: 'EN', url: 'https://www.adweek.com/feed/', statusText: '22 berita / 12 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-3', name: 'Ars Technica', lang: 'EN', url: 'https://feeds.arstechnica.com/arstechnica/technology-lab', statusText: '2 berita / 2 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-4', name: 'CNN Indonesia', lang: 'ID', url: 'https://www.cnnindonesia.com/teknologi/rss', statusText: '31 berita / 14 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-5', name: 'DailySocial', lang: 'ID', url: 'https://dailysocial.id/feed', statusText: '1 berita / 1 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-6', name: 'Engadget', lang: 'EN', url: 'https://www.engadget.com/rss.xml', statusText: '37 berita / 10 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-7', name: 'Google', lang: 'EN', url: 'https://blog.google/technology/ai/rss/', statusText: '0 berita / 0 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-8', name: 'Google Trends Indonesia', lang: 'ID', isTrends: true, url: 'https://trends.google.com/trending/rss?geo=ID', statusText: '84 berita / 1 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-9', name: 'Liputan6', lang: 'ID', url: 'https://www.liputan6.com/feed/rss/tekno', statusText: '30 berita / 18 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-10', name: 'Marketing Dive', lang: 'EN', url: 'https://www.marketingdive.com/feeds/news/', statusText: '6 berita / 3 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
];
