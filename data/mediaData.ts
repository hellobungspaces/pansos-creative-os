export interface FeedItem {
  id: string;
  title: string;
  platform: 'tiktok' | 'instagram' | 'youtube' | 'podcast' | 'x' | 'newsletter';
  platformHandle: string;
  category: 'INVESTIGATION' | 'SUBCULTURE' | 'TECH & CAPITAL' | 'RAW TAKE' | 'INTERNET ANOMALY';
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  metrics: {
    views?: string;
    likes: string;
    comments: string;
    shares?: string;
    duration?: string;
    saves?: string;
  };
  mediaUrl: string;
  thumbnail: string;
  caption: string;
  publishedAt: string;
  tags: string[];
  audioSnippetUrl?: string;
  externalLink: string;
  slides?: string[];
  verified?: boolean;
}

export interface ShowItem {
  id: string;
  title: string;
  tagline: string;
  host: string;
  hostTitle: string;
  hostAvatar: string;
  cadence: string;
  primaryPlatform: 'YouTube' | 'Spotify' | 'TikTok' | 'Instagram';
  audienceReach: string;
  coverImage: string;
  episodesCount: number;
  featuredEpisode: {
    title: string;
    duration: string;
    views: string;
  };
}

export interface AudienceDemographic {
  label: string;
  percentage: number;
  color: string;
}

export const PLATFORM_STATS = [
  {
    name: 'TikTok',
    icon: 'tiktok',
    handle: '@unboundmedia',
    followers: '2.8M',
    growth: '+24% MoM',
    engagement: '8.4%',
    monthlyImpressions: '32.4M',
    badge: 'VIRAL ENGINE',
    color: '#00f2fe',
    accentBorder: 'border-cyan-500/30'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    handle: '@unbound.dispatch',
    followers: '1.4M',
    growth: '+18% MoM',
    engagement: '11.2%',
    monthlyImpressions: '14.8M',
    badge: 'VISUAL JOURNALISM',
    color: '#ff2d55',
    accentBorder: 'border-rose-500/30'
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    handle: '@unboundoriginals',
    followers: '820K',
    growth: '+12% MoM',
    engagement: '64% Retention',
    monthlyImpressions: '6.2M',
    badge: 'MINI-DOCS & ESSAYS',
    color: '#ff0000',
    accentBorder: 'border-red-500/30'
  },
  {
    name: 'Spotify & Apple',
    icon: 'podcast',
    handle: 'RAW TAKE PODCAST',
    followers: '340K',
    growth: '+31% MoM',
    engagement: 'Top #3 Society',
    monthlyImpressions: '1.9M listens',
    badge: 'CONVERSATIONS',
    color: '#1db954',
    accentBorder: 'border-emerald-500/30'
  },
  {
    name: 'X (Twitter)',
    icon: 'x',
    handle: '@unbound_radar',
    followers: '510K',
    growth: '+15% MoM',
    engagement: '9.1% Repost Rate',
    monthlyImpressions: '18.5M',
    badge: 'CULTURAL RADAR',
    color: '#ffffff',
    accentBorder: 'border-white/20'
  },
  {
    name: 'Private Dispatch',
    icon: 'newsletter',
    handle: 'The Signal (Substack/WA)',
    followers: '78K VIPs',
    growth: '+9% MoM',
    engagement: '68% Open Rate',
    monthlyImpressions: 'Owned Audience',
    badge: 'ZERO ALGORITHM RISK',
    color: '#ff7700',
    accentBorder: 'border-amber-500/30'
  }
];

export const NETWORK_SHOWS: ShowItem[] = [
  {
    id: 'overheard-jakarta',
    title: 'DISPATCH JAKARTA',
    tagline: 'Underground subcultures, night shifts, and the raw pulse of Southeast Asia’s largest megacity.',
    host: 'Renaldi Arya & Anya Pram',
    hostTitle: 'Senior Cultural Correspondents',
    hostAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    cadence: 'Bi-weekly on YouTube & TikTok Series',
    primaryPlatform: 'YouTube',
    audienceReach: '1.2M Avg/Ep',
    coverImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80',
    episodesCount: 28,
    featuredEpisode: {
      title: 'Menyusuri Pasar Kaset Pita & Komunitas Underground Blok M yang Menolak Streaming',
      duration: '24:18',
      views: '1.4M views'
    }
  },
  {
    id: 'the-disruption-report',
    title: 'THE DISRUPTION REPORT',
    tagline: 'Fast, sharp breakdowns on tech layoffs, venture capital illusions, and the actual creator economy.',
    host: 'Kevin Tan',
    hostTitle: 'Tech Editor & Investigative Reporter',
    hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    cadence: 'Every Tuesday & Friday',
    primaryPlatform: 'TikTok',
    audienceReach: '2.5M Avg/Ep',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    episodesCount: 64,
    featuredEpisode: {
      title: 'Kenapa Unicorn E-Commerce Mulai Menghapus Gratis Ongkir & Apa Artinya Buat Konsumen?',
      duration: '03:45',
      views: '2.9M views'
    }
  },
  {
    id: 'raw-take-podcast',
    title: 'RAW TAKE TALK',
    tagline: 'No PR talking points. Uncensored conversations with founders, renegade artists, and viral figures.',
    host: 'Maya Santoso',
    hostTitle: 'Executive Producer',
    hostAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    cadence: 'Every Thursday on Spotify & YouTube',
    primaryPlatform: 'Spotify',
    audienceReach: '450K Listeners',
    coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
    episodesCount: 42,
    featuredEpisode: {
      title: 'Ep. 42: "Gua Bangkrut Setelah Viral di TikTok" — Kisah Nyata di Balik Algoritma F&B',
      duration: '58:20',
      views: '680K listens'
    }
  },
  {
    id: 'deep-scroll',
    title: 'DEEP SCROLL',
    tagline: 'Visual essays diving deep into internet subcultures, meme warfare, and algorithmic brain rot.',
    host: 'UNBOUND Visual Lab',
    hostTitle: 'Creative Synthesis Unit',
    hostAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    cadence: 'Monthly Cinematic Drop',
    primaryPlatform: 'YouTube',
    audienceReach: '890K Avg/Ep',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    episodesCount: 12,
    featuredEpisode: {
      title: 'Kematian Media Berita Konvensional: Mengapa Gen-Z Lebih Percaya TikTok Daripada TV?',
      duration: '31:10',
      views: '1.8M views'
    }
  }
];

export const FEED_ITEMS: FeedItem[] = [
  {
    id: 'feed-1',
    title: 'Visual Investigation: Peta Konsentrasi Third-Wave Coffee Shop Jakarta & Gelembung Properti Milenial',
    platform: 'instagram',
    platformHandle: '@unbound.dispatch',
    category: 'INVESTIGATION',
    author: {
      name: 'Tim Riset Spasial',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      role: 'Investigative Unit'
    },
    metrics: {
      likes: '48.2K',
      comments: '1,420',
      shares: '18.9K',
      saves: '34.1K'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80',
    caption: 'Dalam 24 bulan terakhir, lebih dari 320 coffeeshop berkonsep industrial minimalis dibuka di radius 5km Jakarta Selatan. Namun data occupancy rate dan kenaikan harga sewa tanah menunjukkan indikasi kuat real-estate speculative bubble. Geser untuk melihat data lengkap satelit dan analisis margin per cup.',
    publishedAt: '2 jam yang lalu',
    tags: ['#JakartaUrban', '#EkonomiKreatif', '#PropertyWatch', '#VisualJournalism'],
    externalLink: 'https://instagram.com',
    slides: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&auto=format&fit=crop&q=80'
    ],
    verified: true
  },
  {
    id: 'feed-2',
    title: 'Bedah Algoritma FYP: Kenapa Brand Mewah Tiba-tiba Rebranding Jadi "Trash Aesthetic"?',
    platform: 'tiktok',
    platformHandle: '@unboundmedia',
    category: 'TECH & CAPITAL',
    author: {
      name: 'Kevin Tan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      role: 'Cultural Tech Editor'
    },
    metrics: {
      views: '1.9M',
      likes: '142.5K',
      comments: '3,890',
      shares: '44.1K',
      duration: '01:48'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    caption: 'Balenciaga, Marc Jacobs, dan deretan luxury house tidak lagi memakai lighting studio mahal di feed mereka. Mereka sengaja memakai kamera HP resolusi rendah, flash silau, dan konsep uncurated. Ini bukan estetika sembarangan, ini adalah taktik menembus anti-iklan fatigue Gen-Z.',
    publishedAt: '4 jam yang lalu',
    tags: ['#LuxuryMarketing', '#GenZCulture', '#TikTokStrategy', '#Debranding'],
    externalLink: 'https://tiktok.com',
    verified: true
  },
  {
    id: 'feed-3',
    title: 'Kematian Media Arus Utama & Lahirnya Homeless Media Empire di Asia Tenggara',
    platform: 'youtube',
    platformHandle: '@unboundoriginals',
    category: 'SUBCULTURE',
    author: {
      name: 'UNBOUND Documentary Unit',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      role: 'Doc Team'
    },
    metrics: {
      views: '482K',
      likes: '38.4K',
      comments: '2,910',
      shares: '12.8K',
      duration: '28:15'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1579208575657-c595a053b977?w=900&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1579208575657-c595a053b977?w=600&auto=format&fit=crop&q=80',
    caption: 'Dalam era di mana pengguna menghabiskan 8 jam sehari di feeds native, mendikte audiens untuk membuka homepage koran lama adalah strategi bunuh diri. Kami mendokumentasikan fenomena gelombang homeless media baru: bagaimana 5 orang kreator bisa mengalahkan reach grup konglomerasi media konvensional.',
    publishedAt: 'Kemarin',
    tags: ['#MediaDisruption', '#HomelessMedia', '#FutureOfJournalism', '#Documentary'],
    externalLink: 'https://youtube.com',
    verified: true
  },
  {
    id: 'feed-4',
    title: 'Ep. 42: "Gua Bangkrut Setelah Viral di TikTok" — Kisah Nyata di Balik Algoritma F&B',
    platform: 'podcast',
    platformHandle: 'RAW TAKE TALK',
    category: 'RAW TAKE',
    author: {
      name: 'Maya Santoso feat. Anonymous Founder',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      role: 'Podcast Host'
    },
    metrics: {
      likes: '19.8K',
      comments: '912',
      shares: '5.4K',
      duration: '58:20'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&auto=format&fit=crop&q=80',
    caption: 'Viralitas semalam bisa menjadi kutukan mematikan jika unit economics dan rantai pasok belum siap. Founder kedai viral asal Bandung membeberkan bagaimana lonjakan 10.000 pesanan dalam 3 hari justru membakar modal kerja hingga gulung tikar.',
    publishedAt: '2 hari yang lalu',
    tags: ['#RawTake', '#StartupRealita', '#Podcast', '#FounderStory'],
    audioSnippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    externalLink: 'https://spotify.com',
    verified: true
  },
  {
    id: 'feed-5',
    title: 'RADAR REPORT: Gelombang AI Copyright Law di Asia Tenggara & Implikasinya Buat Agensi Independen',
    platform: 'x',
    platformHandle: '@unbound_radar',
    category: 'TECH & CAPITAL',
    author: {
      name: 'UNBOUND Radar',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80',
      role: 'Breaking Desk'
    },
    metrics: {
      likes: '15.7K',
      comments: '884',
      shares: '6.2K'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    caption: 'Draft regulasi hak cipta konten generatif AI regional mulai dipublikasikan. Tiga poin krusial: (1) Kewajiban watermark metadata di platform media sosial, (2) Tanggung jawab hukum agency jika model AI memakai dataset scraping tanpa lisensi lokal, (3) Skema royalti kompensasi asosiasi fotografer.',
    publishedAt: '3 jam yang lalu',
    tags: ['#AIRegulation', '#CreatorLaw', '#IntellectualProperty', '#TechRadar'],
    externalLink: 'https://x.com',
    verified: true
  },
  {
    id: 'feed-6',
    title: 'THE DISPATCH #84: Algoritma Instagram Diam-diam Mengubah Bobot "Sends per Reach" Menjadi Matriks Utama',
    platform: 'newsletter',
    platformHandle: 'The Signal VIP',
    category: 'INTERNET ANOMALY',
    author: {
      name: 'Chief Editorial Desk',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      role: 'Executive Memo'
    },
    metrics: {
      likes: '9.4K',
      comments: '340',
      saves: '12.8K'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    caption: 'Lupakan jumlah like atau comment public. Berdasarkan tes A/B pada 2.000 postingan media, faktor tunggal nomor 1 yang menentukan konten didorong ke Explore dan Reels non-followers adalah jumlah orang yang membagikannya via DM pribadi.',
    publishedAt: 'Kemarin pagi',
    tags: ['#AlgorithmWatch', '#InstagramUpdate', '#GrowthSecret', '#PrivateDispatch'],
    externalLink: 'https://substack.com',
    verified: true
  }
];

export const DEMOGRAPHICS_DATA: AudienceDemographic[] = [
  { label: 'Gen-Z (18 - 24 thn)', percentage: 54, color: '#00f2fe' },
  { label: 'Early Millennial (25 - 34 thn)', percentage: 35, color: '#ccff00' },
  { label: 'Late Millennial & Gen-X (35+ thn)', percentage: 11, color: '#ff5500' }
];

export const GEOGRAPHY_DATA = [
  { city: 'Greater Jakarta (Jabodetabek)', share: 58 },
  { city: 'Surabaya & East Java', share: 14 },
  { city: 'Bandung & West Java', share: 12 },
  { city: 'Bali & Yogyakarta', share: 9 },
  { city: 'Overseas & Diaspora (SG, MY, AU)', share: 7 }
];

export const CLIENT_CASE_STUDIES = [
  {
    client: 'Fintech Unicorn (Decacorn)',
    campaign: 'De-mystifying Reksa Dana for First-Jobbers',
    format: '3-Part TikTok Micro-Doc + IG Carousels + Live AMA',
    results: {
      impressions: '11.4M',
      engagementRate: '9.8%',
      accountSignups: '+28,400 CAC drop -44%'
    },
    quote: '"UNBOUND paham cara menyampaikan topik finansial berat tanpa terdengar seperti iklan korporat kaku."'
  },
  {
    client: 'Global Sneaker & Streetwear Giant',
    campaign: 'Jakarta Subculture Archive & Zero-Waste Drop',
    format: 'Video Essay (22 min) + Photo Book Drop + X Thread Storm',
    results: {
      impressions: '7.8M',
      engagementRate: '14.2%',
      productSoldOut: 'Sold out dalam 12 menit'
    },
    quote: '"Authenticity yang tidak bisa dibeli dengan paid ads biasa."'
  },
  {
    client: 'Streaming Entertainment Giant',
    campaign: 'Indonesian Cyberpunk Series Hype Wave',
    format: 'Alternative Reality Meme Campaign + Street Cast Interviews',
    results: {
      impressions: '18.2M',
      engagementRate: '16.5%',
      trendingRank: '#1 on X Indonesia for 36 hours'
    },
    quote: '"Satu-satunya media yang bisa menjangkau audience paling skeptis dengan hasil organik."'
  }
];

export const BRAND_PARTNERS = [
  'NIKE', 'SPOTIFY', 'SAMSUNG', 'NETFLIX', 'TOKOPEDIA', 'BCA', 'UNIQLO', 'GRAB'
];
