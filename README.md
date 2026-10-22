# UNBOUND™ // Distributed Homeless Media Network

> **A native, feed-first editorial network & advertiser portal built for the post-homepage generation.**
> Engineered with Next.js 14 App Router, TypeScript, and Tailwind CSS. Optimized for 1-click deployment on Vercel.

---

## 🎯 Executive Thesis (VP of Product Design & VP of Engineering)

### The Homeless Media Thesis
Traditional online media companies (e.g. legacy news portals) are dying due to **attention liquidity collapse**:
1. They spend millions forcing social media users through clickbait links back to slow, bloated, popup-infested websites.
2. **Homeless Media (Distributed Media)** flips this model: 100% native production distributed directly inside user feeds (**TikTok, Instagram Reels, YouTube Shorts, Spotify, and X**).
3. **What is the purpose of this website?**
   - **Command Hub & Live Stream Aggregator:** Aggregates real-time drops across 6 channels.
   - **Story & Reel Simulator:** Interactive mobile/desktop modal to preview vertical native formats.
   - **Advertiser Portal & Media Kit 2026:** Interactive ROI estimator, audience demographic breakdowns, rate card brief submitter.
   - **The "Owned Bridge":** Converts rented social followers into owned audience via Substack VIP Dispatch, WhatsApp VIP, and Telegram.
   - **Encrypted Whistleblower Tip Line:** For anonymous culture leaks and investigative scoops.

---

## 📱 Desktop vs Mobile Architectural UX

| Feature | Desktop Command View | Mobile Feed Mode (< 768px) |
|---|---|---|
| **Navigation** | Sticky Top Nav with Live Status & Rate Card CTAs | Sticky Bottom App Dock (Feeds, Shows, Rate Card, Data, Tip Line) |
| **Feed Grid** | 3-Column Responsive Bento Grid with Card Previews | 1-Column High-Touch Cards with Quick Story Mode Trigger |
| **Story Viewer** | Centered 9:16 Modal with Keyboard Left/Right Nav | Fullscreen Mobile Story & Reel Viewer with Swipe/Tap |
| **Media Kit** | Side-by-side Demographic Bars + ROI Budget Slider | Vertical stacked interactive sliders & one-tap PDF download |
| **Audio Player** | Pinned Bottom Floating Dock with Live Waveform | Compact Mini-Player docked above bottom navigation |

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev
# or
node ./node_modules/next/dist/bin/next dev

# 3. Open in browser
http://localhost:3000
```

---

## 🐙 Push to GitHub & Deploy to Vercel

### Step 1: Push to GitHub
1. Buat repository baru di [GitHub](https://github.com/new) (misal: `unbound-homeless-media`).
2. Jalankan perintah berikut di terminal:
```bash
git add .
git commit -m "feat: initial release of UNBOUND Homeless Media Network"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel (Pilihan Tercepat)
1. Buka [Vercel Dashboard](https://vercel.com/new).
2. Klik **Import** pada repository GitHub yang baru saja Anda push.
3. Vercel akan secara otomatis mendeteksi:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Klik **Deploy**. Selesai dalam ~45 detik!

---

## 🛠️ Tech Stack & Directory Map

```
├── app/
│   ├── globals.css           # Brutalist cyber-editorial typography & dark themes
│   ├── layout.tsx            # SEO, OpenGraph metadata, and viewport config
│   └── page.tsx              # Master page orchestrator & modal state controller
├── components/
│   ├── Navbar.tsx            # Desktop & Mobile adaptive header with status radar
│   ├── LiveTicker.tsx        # High-energy dual-speed real-time headlines ticker
│   ├── HeroSection.tsx       # Narrative manifesto, live KPIs & channel filters
│   ├── PlatformFeeds.tsx     # Filterable feeds (TikTok, IG, YouTube, Pod, X)
│   ├── StoryModal.tsx        # Instagram/TikTok style story viewer simulation
│   ├── ArticleModal.tsx      # Deep dive reader with visual gallery & audio stream
│   ├── OriginalShows.tsx     # 4 Flagship shows bento grid (Dispatch Jakarta, etc.)
│   ├── MediaKitStats.tsx     # Interactive Rate Card & Campaign ROI budget slider
│   ├── BrandedStudio.tsx     # Case studies with verified brand campaign ROI
│   ├── ManifestoSection.tsx  # Legacy Media vs Homeless Media comparison matrix
│   ├── AudienceCapture.tsx   # Direct owned bridge (Substack, WhatsApp, Telegram)
│   ├── TipLineModal.tsx      # Encrypted whistleblower leak submission modal
│   ├── InquiryModal.tsx      # Brand brief & custom rate proposal modal
│   ├── AudioPlayerBar.tsx    # Docked mini audio podcast player
│   ├── MobileBottomNav.tsx   # Thumb-friendly bottom dock for mobile users
│   └── Footer.tsx            # Distributed system specs & edge deployment badge
├── data/
│   └── mediaData.ts          # Centralized data store (feeds, shows, metrics)
└── tailwind.config.js        # Custom neon accents, animations, & typography
```

---

## 💼 Built with Pride by Antigravity
*Acting as VP of Product Design & VP of Engineering.*
