# KONOHA INSIGHT // Satirical Homeless Media Operating System

> **Sistem operasional redaksi otonom untuk Homeless Media Konoha Insight (@konoha.insight).**  
> Menggabungkan pemantau tren otomatis 24 jam, kurasi media kredibel (Kompas, Detik, CNN, Antara), penyusunan naskah sarkas cerdas, studio caption Instagram, dan render kartu carousel 4:5 native canvas.

Live Production: [https://konoha-insight.vercel.app](https://konoha-insight.vercel.app) (juga aktif di [https://konohainsight.vercel.app](https://konohainsight.vercel.app))

---

## 📸 Fitur Lengkap Sesuai Desain Referensi

1. **Ruang Redaksi (Dashboard Utama)**:
   - Metrik 24 Jam: `349 Berita Masuk`, `135 Lolos Analis`, `8 Siap Direview` (highlighted lime), `0 Terjadwal`.
   - Status 4 Agen Redaksi AI: **Scout** (Pemantau berita), **Analis** (Cek potensi viral), **Copywriter** (Headline & caption), **Designer** (Render gambar).
   - Log Aktivitas Redaksi live update.

2. **Antrian Review (Meja Editor)**:
   - Filter tab: `Perlu review (8)`, `Disetujui`, `Terjadwal`, `Gagal`, `Sudah posting (14)`, `Ditolak`.
   - Grid kartu carousel 4:5 signature:
     - Foto cover atas + watermark sumber (The Verge, detikcom, CNN Indonesia).
     - Blok bawah Royal Blue (`#2446f5`) dengan tag kategori kuning (`[AI]`, `[SOSMED]`, `[BISNIS]`, `[TEKNOLOGI]`).
     - Headline huruf besar tebal dengan highlight kata kunci kuning (`#e2ff3b`).
     - Badge peringatan risiko (`⚠️ Cek risiko`) & skor viralitas (`92`, `95`, `88`, `86`).

3. **Editor Carousel Detail (Slide-by-Slide Editor)**:
   - Preview visual 4:5 real-time dengan tombol navigasi slide.
   - Pilihan slide 1 sampai 6 dengan thumbnail strip.
   - Panel edit naskah per slide + penghitung karakter (`201/260 karakter`).
   - Manajemen foto header: `Tanpa foto`, thumbnail preview, `Upload`, atau link gambar Google.
   - Tombol download PNG 1080x1350px, render ulang, tulis ulang dengan AI, dan copy caption.

4. **Sumber Berita (Admin RSS & Trends Scraper)**:
   - Formulir tambah RSS/Atom feed baru.
   - Daftar 10 media kredibel dengan toggle switch ON/OFF: ANTARA, Adweek, Ars Technica, CNN Indonesia, DailySocial, Engadget, Google, Google Trends Indonesia, Liputan6, Marketing Dive.

5. **Feed Grid Instagram (3x3 Preview)**:
   - Tampilan profil Instagram `@konoha.insight` dengan feed grid 3x3 yang memperlihatkan bagaimana konten tersaji di timeline Instagram.

---

## 🚀 Jalankan di Localhost

```bash
cd "/Users/gilangsegoro/Downloads/ Bung Coding"
npm run dev
# Buka http://localhost:3000 di browser
```

---

## 🐙 Push ke GitHub & Deploy ke Vercel

```bash
git add .
git commit -m "feat: implement Pansos Creative Ruang Redaksi OS based on reference design"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```
Tinggal import repo ini di [Vercel Dashboard](https://vercel.com/new) dan klik Deploy.
