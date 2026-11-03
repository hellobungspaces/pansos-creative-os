export interface SlideItem {
  number: number;
  title: string;
  body: string;
  hasPhoto: boolean;
  photoUrl?: string;
  photoAttribution?: string;
  sourceText: string;
}

export interface RedaksiPost {
  id: string;
  category: string; // 'FAUNA' | 'LINGKUNGAN' | 'KONOHA' | 'AI' | 'SOSMED' | 'TEKNOLOGI' | 'BISNIS' | 'VIRAL' etc.
  title: string;
  highlightedTitle: string; // for the bold yellow words
  source: string;
  sourceUrl: string;
  licenseInfo: string;
  timeAgo: string;
  viralScore: number;
  hasRiskWarning?: boolean;
  coverImage: string;
  coverImageAttribution: string;
  sourceBadge?: string;
  totalSlides: number;
  slides: SlideItem[];
  caption: string;
  status: 'perlu_review' | 'disetujui' | 'terjadwal' | 'sudah_posting' | 'ditolak';
  scheduledTime?: string;
  template?: string; // id from utils/cardTemplates
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
    id: 'post-sadap-polisi',
    category: 'HUKUM',
    title: 'POLRI TETAPKAN 3 TERSANGKA PENYADAPAN HP PRESIDEN & PEJABAT',
    highlightedTitle: 'POLRI TETAPKAN <span class="text-[#e2ff3b]">3 TERSANGKA PENYADAPAN</span> HP PRESIDEN & PEJABAT',
    source: 'Bareskrim Polri',
    sourceUrl: 'https://news.detik.com',
    licenseInfo: 'Wikimedia Commons Free CC License',
    timeAgo: 'Baru saja',
    viralScore: 98,
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&auto=format&fit=crop&q=85',
    coverImageAttribution: 'Foto: Unsplash (Free Commercial Use)',
    sourceBadge: 'Bareskrim Polri',
    totalSlides: 5,
    hasRiskWarning: true,
    status: 'perlu_review',
    template: 'mono-gelap',
    slides: [
      {
        number: 1,
        title: 'POLRI TETAPKAN 3 TERSANGKA PENYADAPAN HP PRESIDEN & PEJABAT',
        body: 'Bareskrim Polri resmi menetapkan tiga tersangka kasus dugaan penyadapan ilegal (illegal tapping). Sasaran sadapan mencakup nomor ponsel Presiden RI, pejabat negara, menteri, hingga pimpinan ormas dan media.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Bareskrim Polri'
      },
      {
        number: 2,
        title: 'SIAPA SAJA YANG TERJERAT?',
        body: 'Tiga tersangka berinisial LSP, ASN, dan EH terindikasi sebagai perwira tinggi dan mantan petinggi kepolisian. Penyelidikan ilmiah membuktikan aksi penyadapan dilakukan secara non-prosedural di luar mandat hukum resmi.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1453873531674-2151abc01707?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Detikcom / Antara'
      },
      {
        number: 3,
        title: 'MODUS SERVER RAHASIA & HAPUS JEJAK',
        body: 'Hasil rekaman percakapan dimasukkan ke tautan server khusus tanpa verifikasi sah. Menjelang kasus terendus pada akhir Oktober 2026, para tersangka diduga memerintahkan penghapusan file sistematis demi melenyapkan jejak digital.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Bareskrim Polri'
      },
      {
        number: 4,
        title: 'BARANG BUKTI & ANCAMAN HUKUMAN BERAT',
        body: 'Penyidik menyita 11 unit ponsel, iPad, dan 4 flashdisk rekaman. Dijerat pasal akses ilegal dan perusakan informasi elektronik. Kasus ini jadi skandal pengawasan intelijen paling menghebohkan dalam sejarah hukum Konoha.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Kompas TV / Detikcom'
      },
      {
        number: 5,
        title: 'BAGAIMANA PENDAPAT WARGA KONOHA?',
        body: 'Kalau telepon presiden dan pejabat saja bisa disadap sembunyi-sembunyi oleh aparatnya sendiri, apa kabar privasi kita yang cuma rakyat jelata? Bakal diusut sampai akar atau cuma jadi angin lalu? Tulis di komentar! 👇',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Konoha Insight Redaksi'
      }
    ],
    caption: 'Skandal intelijen dan hukum paling mengguncang Konoha tahun ini! Bareskrim Polri resmi menetapkan tiga tersangka (inisial LSP, ASN, EH) atas dugaan tindak pidana penyadapan ilegal (illegal tapping) dan penghapusan data elektronik.\n\nYang bikin bulu kuduk merinding: target sadapan tanpa izin ini menyasar nomor ponsel Presiden RI, pejabat negara, petinggi partai, aktivis LSM, hingga wartawan. Data sadapan sempat dikumpulkan di server khusus sebelum diduga diperintahkan dihapus untuk menghilangkan barang bukti.\n\nSimak rincian fakta dan kronologinya di 5 slide di atas 👆\n\n📌 Sumber Laporan: Bareskrim Polri / Kompas TV / Detikcom\n📷 Lisensi Foto: Unsplash (Free Commercial Use)\n⚖️ Ringkasan sesuai UU Hak Cipta No. 28/2014 Pasal 42 untuk edukasi publik.\n\nKalo menurut lo, ini murni kelalaian oknum atau ada agenda yang jauh lebih besar? Tumpahkan opinimu di kolom komentar! 👇\n\n#KonohaInsight #WargaKonoha #HukumKonoha #Polri #PenyadapanIlegal #BreakingNews #KasusPolisi #SkandalHukum'
  },
  {
    id: 'post-gibran-sadap',
    category: 'KONOHA',
    title: 'YUSRIL BUKA SUARA SOAL DUGAAN GIBRAN TURUT JADI SASARAN PENYADAPAN',
    highlightedTitle: 'YUSRIL BUKA SUARA SOAL <span class="text-[#e2ff3b]">GIBRAN JADI SASARAN</span> PENYADAPAN',
    source: 'Detikcom',
    sourceUrl: 'https://news.detik.com',
    licenseInfo: 'Wikimedia Commons Free CC License',
    timeAgo: '1 jam lalu',
    viralScore: 96,
    coverImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1080&auto=format&fit=crop&q=85',
    coverImageAttribution: 'Foto: Unsplash (Free Commercial Use)',
    sourceBadge: 'Detikcom',
    totalSlides: 5,
    hasRiskWarning: true,
    status: 'perlu_review',
    template: 'mono-gelap',
    slides: [
      {
        number: 1,
        title: 'YUSRIL BUKA SUARA SOAL DUGAAN GIBRAN TURUT JADI SASARAN PENYADAPAN',
        body: 'Menko Hukum, HAM, Imigrasi, dan Pemasyarakatan Yusril Ihza Mahendra merespons dugaan keterlibatan sadapan ilegal yang menyasar jajaran pucuk pimpinan nasional Konoha.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Detikcom'
      },
      {
        number: 2,
        title: 'SIAPA SAJA KORBAN ELITE?',
        body: 'Selain ponsel Presiden Prabowo Subianto, spekulasi berkembang mengenai nomor telepon Wapres Gibran Rakabuming Raka serta deretan menteri kabinet yang diduga ikut terpantau radar penyadapan non-prosedural.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Antara News'
      },
      {
        number: 3,
        title: 'PENJELASAN RESMI KEMENKO HUKUM',
        body: 'Yusril menegaskan pemerintah menyerahkan pengusutan sepenuhnya kepada Bareskrim Polri. Penyadapan tanpa izin hakim atau kebutuhan pro-justitia jelas merupakan tindak pidana berat perusak tatanan negara.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Kompas.com'
      },
      {
        number: 4,
        title: 'SKANDAL INTELIJEN TERBESAR',
        body: 'Publik menyoroti celah keamanan komunikasi para pejabat tertinggi. Jika lingkaran ring satu bisa disadap secara internal selama berbulan-bulan, ada krisis kepercayaan serius di tubuh aparat intelijen.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1453873531674-2151abc01707?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Detikcom'
      },
      {
        number: 5,
        title: 'BAGAIMANA NASIB KASUS INI?',
        body: 'Apakah Bareskrim berani membuka seluruh rekaman dan aktor intelektual di balik skandal sadap ini, atau bakal berakhir antiklimaks? Tulis prediksimu di komentar! 👇',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Konoha Insight Redaksi'
      }
    ],
    caption: 'Babak baru drama penyadapan terbesar di Konoha! Menko Yusril Ihza Mahendra akhirnya buka suara menanggapi isu nomor telepon Wapres Gibran Rakabuming Raka yang santer disebut turut menjadi target sadapan ilegal para tersangka mantan petinggi kepolisian.\n\nSimak perkembangan 5 slide di atas 👆\n\n📌 Sumber: Detikcom / Antara\n#KonohaInsight #WargaKonoha #HukumKonoha #Penyadapan #Yusril #Gibran #BreakingNews'
  },
];

export const ACTIVITY_LOGS: ActivityLog[] = [
  { agent: 'Analis', message: 'Menilai 15 berita, 8 lolos ambang skor 70', timeAgo: '25 mnt lalu' },
  { agent: 'Scout', message: 'Menemukan 10 berita baru dari CNN, Verge, & Detik', timeAgo: '26 mnt lalu' },
  { agent: 'Designer', message: 'Gambar selesai untuk "Alexa Plus Mendadak Nyanyi \'Lalala\'"', timeAgo: '49 mnt lalu' },
  { agent: 'Copywriter', message: 'Draft siap: "Alexa Plus Mendadak Nyanyi \'Lalala\'"', timeAgo: '49 mnt lalu' },
  { agent: 'Scout', message: 'Menemukan 5 berita baru dari Antara & Social Media Today', timeAgo: '57 mnt lalu' },
  { agent: 'Analis', message: 'Menilai 12 berita, 6 lolos ambang skor 70', timeAgo: '1 jam lalu' },
  { agent: 'Designer', message: 'Gambar selesai untuk "Ancaman di Claude Terdeteksi"', timeAgo: '1 jam lalu' },
  { agent: 'Copywriter', message: 'Draft siap: "Ancaman di Claude Terdeteksi"', timeAgo: '1 jam lalu' }
];

export const NEWS_SOURCES: NewsSource[] = [
  { id: 'src-1', name: 'ANTARA News', lang: 'ID', url: 'https://www.antaranews.com/rss/tekno.xml', statusText: '42 berita / 18 lolos (7 hari)', lastChecked: 'dicek 5 mnt lalu', enabled: true },
  { id: 'src-2', name: 'CNN Indonesia', lang: 'ID', url: 'https://www.cnnindonesia.com/teknologi/rss', statusText: '38 berita / 16 lolos (7 hari)', lastChecked: 'dicek 5 mnt lalu', enabled: true },
  { id: 'src-3', name: 'CNBC Indonesia', lang: 'ID', url: 'https://www.cnbcindonesia.com/tech/rss', statusText: '29 berita / 12 lolos (7 hari)', lastChecked: 'dicek 8 mnt lalu', enabled: true },
  { id: 'src-4', name: 'Detikcom (detikInet)', lang: 'ID', url: 'https://news.google.com/rss/search?q=site:detik.com/inet&hl=id&gl=ID&ceid=ID:id', statusText: '51 berita / 24 lolos (7 hari)', lastChecked: 'dicek 10 mnt lalu', enabled: true },
  { id: 'src-5', name: 'Kompas.com Tekno', lang: 'ID', url: 'https://news.google.com/rss/search?q=site:kompas.com+teknologi&hl=id&gl=ID&ceid=ID:id', statusText: '47 berita / 21 lolos (7 hari)', lastChecked: 'dicek 12 mnt lalu', enabled: true },
  { id: 'src-6', name: 'Tribunnews Tech', lang: 'ID', url: 'https://news.google.com/rss/search?q=site:tribunnews.com/techno&hl=id&gl=ID&ceid=ID:id', statusText: '33 berita / 11 lolos (7 hari)', lastChecked: 'dicek 15 mnt lalu', enabled: true },
  { id: 'src-7', name: 'Kumparan Tech', lang: 'ID', url: 'https://news.google.com/rss/search?q=site:kumparan.com+teknologi&hl=id&gl=ID&ceid=ID:id', statusText: '19 berita / 8 lolos (7 hari)', lastChecked: 'dicek 20 mnt lalu', enabled: true },
  { id: 'src-8', name: 'Google Trends Indonesia', lang: 'ID', isTrends: true, url: 'https://trends.google.com/trending/rss?geo=ID', statusText: '84 tren / 9 lolos (7 hari)', lastChecked: 'dicek 2 mnt lalu', enabled: true },
  { id: 'src-9', name: 'The Verge', lang: 'EN', url: 'https://www.theverge.com/tech/rss/index.xml', statusText: '35 berita / 15 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
  { id: 'src-10', name: 'Ars Technica', lang: 'EN', url: 'https://feeds.arstechnica.com/arstechnica/technology-lab', statusText: '14 berita / 6 lolos (7 hari)', lastChecked: 'dicek 30 mnt lalu', enabled: true },
];
