import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UNBOUND™ // Distributed Homeless Media Network',
  description: 'A native, feed-first editorial network. No bloated CMS. No paywalls. Distributed across TikTok, Instagram, YouTube, Spotify & X.',
  keywords: ['Homeless Media', 'Distributed Media', 'Digital Journalism', 'Gen-Z Media', 'Folkative', 'Content Network', 'Indonesian Media'],
  authors: [{ name: 'UNBOUND Media Network' }],
  openGraph: {
    title: 'UNBOUND™ // Homeless Media Network',
    description: 'Operating natively inside culture. 14.8M+ Monthly Reach across 6 distributed platforms.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'UNBOUND MEDIA NETWORK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNBOUND™ // Homeless Media Network',
    description: 'We publish where culture lives. Zero algorithm friction.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#090a0d',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="bg-[#090a0d] text-zinc-100 antialiased min-h-screen flex flex-col selection:bg-lime-400 selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
