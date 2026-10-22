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
  category: 'AI' | 'SOSMED' | 'TEKNOLOGI' | 'BISNIS' | 'MARKETING';
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
  themeColor?: string;
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
    sourceUrl: 'https://www.theverge.com/tech',
    licenseInfo: 'Unsplash Free Commercial License',
    timeAgo: '49 mnt lalu',
    viralScore: 92,
    coverImage: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=1080&auto=format&fit=crop&q=85',
    coverImageAttribution: 'Foto: Unsplash (Free Commercial Use)',
    sourceBadge: 'The Verge',
    totalSlides: 5,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'ALEXA PLUS MENDADAK NYANYI "LALALA" SELAMA BEBERAPA MENIT',
        body: 'Pengguna Amazon Alexa Plus di berbagai negara melaporkan anomali suara misterius di tengah malam.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: The Verge'
      },
      {
        number: 2,
        title: 'ANOMALI DI TENGAH MALAM',
        body: 'Perangkat pintar Amazon tiba-tiba memutar lantunan lagu berulang-ulang tanpa ada perintah dari pemilik rumah.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: The Verge'
      },
      {
        number: 3,
        title: 'TANGGAPAN RESMI AMAZON',
        body: 'Amazon menyatakan bahwa hal ini terjadi akibat bug sinkronisasi cache model bahasa generatif audio terbaru pada firmware perangkat.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: The Verge'
      },
      {
        number: 4,
        title: 'POTENSI RISIKO PRIVASI SMART HOME',
        body: 'Pakar keamanan siber memperingatkan pentingnya mematikan mikrofon fisik saat tidak digunakan untuk mencegah kebocoran audio latar.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: The Verge'
      },
      {
        number: 5,
        title: 'MENURUT KAMU GIMANA?',
        body: 'Kalau smart speaker di kamar lo tiba-tiba nyanyi sendiri jam 2 pagi, apa yang bakal lo lakuin pertama kali? Tulis di komentar! 👇',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: The Verge'
      }
    ],
    caption: 'Alexa Plus mendadak bernyanyi sendiri di tengah malam tanpa ada perintah suara sama sekali. Kejadian aneh ini memicu kekhawatiran privasi perangkat pintar di rumah para warga Konoha.\n\nSimak slide 1 sampai 5 untuk fakta lengkap dan tanggapan resmi Amazon.\n\n📌 Sumber Informasi: The Verge (theverge.com)\n📷 Lisensi Visual: Unsplash (Free Commercial Use)\n\nKalau smart speaker lo mendadak nyanyi tengah malam, lo bakal ngapain? Tulis di bawah 👇\n\n#AlexaBug #SmartHome #ArtificialIntelligence #KeamananDigital #KonohaInsight #WargaKonoha'
  },
  {
    id: 'post-2',
    category: 'AI',
    title: 'ANCAMAN DI CLAUDE TERDETEKSI, PENGGUNA DILAPORKAN DAN DITANGKAP',
    highlightedTitle: 'ANCAMAN DI CLAUDE TERDETEKSI, <span class="text-[#e2ff3b]">PENGGUNA DILAPORKAN DAN DITANGKAP</span>',
    source: 'detikInet',
    sourceUrl: 'https://inet.detik.com',
    licenseInfo: 'Unsplash Free Commercial License',
    timeAgo: '1 jam lalu',
    viralScore: 95,
    coverImage: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1080&auto=format&fit=crop&q=85',
    coverImageAttribution: 'Foto: Unsplash (Free Commercial Use)',
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
        photoUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 2,
        title: 'APA YANG TERJADI?',
        body: 'Kepada penyidik, ia mengaku memakai chatbot itu seperti buku harian pribadi tanpa menyadari sistem pengawasan keselamatan Anthropic.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 3,
        title: 'ANCAMAN TERDETEKSI OTOMATIS',
        body: 'Menurut laporan kepolisian, sistem keselamatan Claude menandai tulisan tersebut sebagai konten berbahaya tingkat tinggi. Potongan percakapannya kemudian diteruskan kepada peninjau manusia di Anthropic.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 4,
        title: 'ANTHROPIC HUBUNGI APARAT',
        body: 'Setelah ancaman dinilai nyata dan kredibel, Anthropic melaporkannya kepada penegak hukum. Perusahaan menegaskan komitmen nol toleransi terhadap kekerasan.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 5,
        title: 'BATASAN PRIVASI CHATBOT AI',
        body: 'Kasus ini membuka mata publik bahwa percakapan dengan AI tidak sepenuhnya privat dan dapat diakses ketika terindikasi tindak kriminal.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: detikInet'
      },
      {
        number: 6,
        title: 'MENURUT KAMU GIMANA?',
        body: 'Apakah langkah Anthropic melaporkan pengguna sudah tepat, atau ini melanggar privasi percakapan? Tulis pendapat kamu di bawah! 👇',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: detikInet'
      }
    ],
    caption: 'Kasus pertama pengguna AI dilaporkan langsung oleh pengembangnya ke polisi. Pengguna Claude ditangkap setelah terdeteksi menuliskan ancaman penembakan.\n\nPelajaran penting: chatbot AI bukan buku harian tanpa pengawasan pihak ketiga. Gimana tanggapan kamu?\n\n📌 Sumber Berita: detikInet (inet.detik.com)\n📷 Lisensi Visual: Unsplash (Free Commercial Use)\n\n#ClaudeAI #Anthropic #CyberLaw #KeamananDigital #KonohaInsight #WargaKonoha #BeritaTerkini'
  },
  {
    id: 'post-3',
    category: 'BISNIS',
    title: 'TRANSAKSI KRIPTO INDONESIA NAIK 12,87%, BITCOIN JADI PENGGERAK',
    highlightedTitle: 'TRANSAKSI KRIPTO INDONESIA <span class="text-[#e2ff3b]">NAIK 12,87%, BITCOIN JADI PENGGERAK</span>',
    source: 'Selular.id',
    sourceUrl: 'https://selular.id',
    licenseInfo: 'Unsplash Free Commercial License',
    timeAgo: '2 jam lalu',
    viralScore: 88,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=85',
    coverImageAttribution: 'Foto: Unsplash (Free Commercial Use)',
    totalSlides: 4,
    hasRiskWarning: true,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'TRANSAKSI KRIPTO INDONESIA NAIK 12,87%',
        body: 'Bappebti mencatat lonjakan transaksi aset kripto nasional didorong oleh reli harga Bitcoin global sepanjang kuartal ini.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=85',
        sourceText: 'Sumber: Selular.id'
      },
      {
        number: 2,
        title: 'DOMINASI INVESTOR RITEL MUDA',
        body: 'Data demografi menunjukkan 62% transaksi dilakukan oleh investor berusia di bawah 30 tahun dengan rata-rata modal awal Rp 500.000.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Bappebti / Selular.id'
      },
      {
        number: 3,
        title: 'TANTANGAN REGULASI PAJAK',
        body: 'Pemerintah terus mematangkan integrasi pelaporan pajak PPh dan PPN transaksi kripto agar ekosistem tetap transparan.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Selular.id'
      },
      {
        number: 4,
        title: 'PORTOFOLIO KAMU BAGAIMANA?',
        body: 'Apakah kamu aktif trading kripto atau lebih memilih instrumen investasi konvensional? Tulis strategi kamu di bawah! 👇',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Selular.id'
      }
    ],
    caption: 'Pasar kripto di Indonesia kembali bergairah. Transaksi naik 12,87% didominasi investor ritel generasi muda.\n\nPortofolio kripto kamu masih hijau atau nyangkut? Ceritakan di kolom komentar!\n\n📌 Sumber Informasi: Selular.id\n📷 Lisensi Visual: Unsplash (Free Commercial Use)\n\n#Bitcoin #KriptoIndonesia #Bappebti #InvestasiMuda #KonohaInsight #WargaKonoha'
  },
  {
    id: 'post-4',
    category: 'SOSMED',
    title: 'INSTAGRAM UJI FITUR READ-ONLY BEBAS LURKING TANPA TAKUT KELIKE',
    highlightedTitle: 'INSTAGRAM UJI <span class="text-[#e2ff3b]">FITUR READ-ONLY</span> BEBAS LURKING TANPA TAKUT KELIKE',
    source: 'Social Media Today',
    sourceUrl: 'https://www.socialmediatoday.com',
    licenseInfo: 'Unsplash Free Commercial License',
    timeAgo: '4 jam lalu',
    viralScore: 97,
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1080&auto=format&fit=crop&q=85',
    coverImageAttribution: 'Foto: Unsplash (Free Commercial Use)',
    totalSlides: 4,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'INSTAGRAM UJI FITUR READ-ONLY BEBAS LURKING TANPA TAKUT KELIKE',
        body: 'Fitur baru memungkinkan stalking profil tanpa sengaja menekan tombol double tap like yang memalukan.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1080&auto=format&fit=crop&q=85',
        sourceText: 'Sumber: Social Media Today'
      },
      {
        number: 2,
        title: 'BAGAIMANA CARA KERJANYA?',
        body: 'Saat mode "Read-Only Visit" diaktifkan, semua tombol like, follow, dan reply story dinonaktifkan sementara untuk profil tersebut.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Social Media Today'
      },
      {
        number: 3,
        title: 'MENGAPA DIKEMBANGKAN SEKARANG?',
        body: 'Instagram merespons tingginya angka pembuatan second account ("fake account") yang khusus dibuat hanya untuk memantau tanpa interaksi.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Social Media Today'
      },
      {
        number: 4,
        title: 'TAG TEMEN KAMU YANG BUTUH!',
        body: 'Kirim postingan ini ke teman kamu yang hobi stalking akun mantan atau kompetitor bisnis! Tulis komentarmu di bawah 👇',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Social Media Today'
      }
    ],
    caption: 'Kabar gembira buat para silent reader dan stalker handal! Instagram akhirnya menguji mode Read-Only yang mematikan tombol like ganda secara otomatis saat mengunjungi profil orang lain.\n\nTag temen lo yang paling butuh fitur ini secepatnya! 👇\n\n📌 Sumber: Social Media Today (socialmediatoday.com)\n📷 Lisensi: Unsplash (Free Commercial Use)\n\n#InstagramFeature #StalkerFriendly #SosmedNews #KulturDigital #KonohaInsight #WargaKonoha'
  },
  {
    id: 'post-5',
    category: 'TEKNOLOGI',
    title: 'WHATSAPP STOP DUKUNGAN HP LAWAS MULAI OKTOBER 2026',
    highlightedTitle: 'WHATSAPP STOP <span class="text-[#e2ff3b]">DUKUNGAN HP LAWAS</span> MULAI OKTOBER 2026',
    source: 'CNN Indonesia',
    sourceUrl: 'https://www.cnnindonesia.com/teknologi',
    licenseInfo: 'Unsplash Free Commercial License',
    timeAgo: '6 jam lalu',
    viralScore: 91,
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1080&auto=format&fit=crop&q=85',
    coverImageAttribution: 'Foto: Unsplash (Free Commercial Use)',
    totalSlides: 4,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'WHATSAPP STOP DUKUNGAN HP LAWAS MULAI OKTOBER 2026',
        body: 'Deretan ponsel dengan sistem operasi Android dan iOS versi lama tidak bisa lagi mengakses aplikasi WhatsApp.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1080&auto=format&fit=crop&q=85',
        sourceText: 'Sumber: CNN Indonesia'
      },
      {
        number: 2,
        title: 'DAFTAR VERSI YANG TERDAMPAK',
        body: 'WhatsApp mewajibkan minimal Android 5.0 (Lollipop) dan iOS 12 untuk memenuhi standar enkripsi end-to-end yang ditingkatkan.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: WhatsApp FAQ / CNN Indonesia'
      },
      {
        number: 3,
        title: 'CARA MENGAMANKAN DATA CHAT',
        body: 'Pengguna disarankan segera melakukan backup chat ke Google Drive atau iCloud sebelum tanggal efektif penghentian.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: CNN Indonesia'
      },
      {
        number: 4,
        title: 'CEK HP ORANG TUA KAMU SEKARANG!',
        body: 'Pastikan HP anggota keluarga di rumah sudah diperbarui ke versi OS yang didukung agar komunikasi tidak terputus. Gimana dengan HP kamu? 👇',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: CNN Indonesia'
      }
    ],
    caption: 'Cek HP kamu dan orang tua di rumah sekarang! WhatsApp resmi mengumumkan batas akhir dukungan untuk sistem operasi lawas demi standar keamanan enkripsi baru.\n\nSimak syarat minimum OS di slide di atas.\n\n📌 Sumber Informasi: CNN Indonesia (cnnindonesia.com)\n📷 Lisensi Gambar: Unsplash (Free Commercial Use)\n\n#WhatsAppUpdate #GadgetNews #Teknologi #KonohaInsight #WargaKonoha'
  },
  {
    id: 'post-6',
    category: 'MARKETING',
    title: 'OPENAI UJI IKLAN VISUAL SAAT PENGGUNA BIKIN GAMBAR DI CHATGPT',
    highlightedTitle: 'OPENAI UJI <span class="text-[#e2ff3b]">IKLAN VISUAL</span> SAAT PENGGUNA BIKIN GAMBAR DI CHATGPT',
    source: 'Selular.id',
    sourceUrl: 'https://selular.id',
    licenseInfo: 'Unsplash Free Commercial License',
    timeAgo: '7 jam lalu',
    viralScore: 94,
    coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1080&auto=format&fit=crop&q=85',
    coverImageAttribution: 'Foto: Unsplash (Free Commercial Use)',
    totalSlides: 4,
    hasRiskWarning: false,
    status: 'perlu_review',
    slides: [
      {
        number: 1,
        title: 'OPENAI UJI IKLAN VISUAL SAAT PENGGUNA BIKIN GAMBAR DI CHATGPT',
        body: 'Format sponsor komersial mulai diuji coba masuk ke antarmuka generasi prompt gambar ChatGPT.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1080&auto=format&fit=crop&q=85',
        sourceText: 'Sumber: Selular.id'
      },
      {
        number: 2,
        title: 'MONETISASI BARU ERA AI',
        body: 'Setelah biaya komputasi server GPU membengkak, OpenAI mulai membuka inventaris penempatan produk secara kontekstual.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Selular.id'
      },
      {
        number: 3,
        title: 'REAKSI KOMUNITAS PENGGUNA',
        body: 'Sebagian pelanggan ChatGPT Plus memprotes potensi masuknya iklan di layanan berbayar yang seharusnya bebas distraksi.',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Selular.id'
      },
      {
        number: 4,
        title: 'MENURUT KAMU GIMANA?',
        body: 'Apakah kamu rela ada iklan di chatbot AI demi harga langganan yang lebih terjangkau? Tulis pendapat kamu di komentar! 👇',
        hasPhoto: true,
        photoUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1080&auto=format&fit=crop&q=85',
        photoAttribution: 'Foto: Unsplash (Free Commercial Use)',
        sourceText: 'Sumber: Selular.id'
      }
    ],
    caption: 'Babak baru monetisasi AI: OpenAI dikabarkan mulai menguji penempatan iklan visual saat pengguna menghasilkan gambar di ChatGPT.\n\nApakah ini langkah wajar bisnis atau tanda penurunan kualitas pengalaman pengguna?\n\n📌 Sumber: Selular.id\n📷 Lisensi: Unsplash (Free Commercial Use)\n\n#OpenAI #ChatGPT #DigitalMarketing #AIAds #KonohaInsight #WargaKonoha'
  }
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
