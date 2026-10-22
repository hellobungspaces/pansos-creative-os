# AUTOPRESS™ // Autonomous Homeless Media Operating System

> **Landing page & showcase sistem otomasi redaksi untuk Homeless Media (White-Label, Self-Hosted, Beli Putus).**  
> Didesain dengan Next.js 14 App Router, TypeScript, dan Tailwind CSS. Siap deploy 1-klik ke Vercel.

---

## 🎯 Penawaran Utama (Core Pitch)

> **Buat kamu yang punya (atau mau bikin) homeless media..**  
> Aku bisa bikinin sistem yang kerjanya kayak satu tim redaksi:  
> → pantau tren & berita 24 jam  
> → pilih yang berpotensi viral  
> → tulis & desain carousel otomatis  
> → posting langsung ke IG  
> **Bisa sampai 100 konten per hari. Tim kamu tinggal review & approve.**  
> Custom sesuai niche & brand kamu, jalan di server sendiri.  
>  
> **INI FULLY CUSTOM YA. WHITE-LABEL. GAK ADA SUBSCRIBE KE AKUUU. JADIIII GABISA BULANAN.**

---

## 🛠️ Arsitektur Sistem Kerja Otonom

1. **Trend Scraper Ingestion (24/7)**:
   - Worker memantau Twitter/X trending topics, Google Trends SEA, TikTok Creative Center, dan 20+ RSS portal berita kredibel setiap 5 menit.
2. **AI Viral Scoring & Hook Formulator**:
   - Model LLM memfilter berita dengan potensi viral tertinggi (skor 90+), membuang basa-basi rilis pers, dan menyusun hook 5 slide provokatif.
3. **Automated Graphic Engine (1080x1350px 4:5)**:
   - Desain carousel di-render secara programatik sesuai font, palet warna, dan logo khas brand klien ala Folkative / USS Feed.
4. **Human Review Dashboard**:
   - Dashboard web privat yang responsif di HP/Laptop: tim klien cukup membaca draf, melakukan revisi cepat jika perlu, lalu klik satu tombol: **"Approve & Schedule"**.
5. **Direct Publishing via Meta Graph API**:
   - Terintegrasi langsung dengan Meta Content Publishing API resmi untuk posting otomatis ke feed Instagram klien.

---

## 💼 Model Bisnis: Kenapa "Beli Putus" & "Tanpa Bulanan"?

- **Self-Hosted di VPS Klien**: Sistem dideploy di VPS cloud milik klien sendiri (DigitalOcean / Hetzner / AWS) seharga ~$5 - $15/bulan yang dibayar langsung ke provider cloud.
- **Data & Token Milik Klien**: Database, token akses Meta Graph API, dan source code berada di server pribadi klien, bukan di server developer.
- **Zero Subscription**: Klien hanya membayar biaya jasa riset, customisasi, dan setup di awal (*one-time setup fee*).

---

## 🚀 Menjalankan di Localhost

```bash
cd "/Users/gilangsegoro/Downloads/ Bung Coding"
npm run dev
# Buka http://localhost:3000 di browser
```

---

## 🐙 Push ke GitHub & Deploy ke Vercel

```bash
git add .
git commit -m "feat: pivot to autonomous homeless media agency landing page"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```
Deploy di [vercel.com/new](https://vercel.com/new) cukup dengan mengimpor repo GitHub tersebut.
