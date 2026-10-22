import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OPEN FOLK // Open-Source Homeless Media Carousel Generator',
  description: 'Generator konten carousel 4:5 ala Folkative & homeless media. Bikin, kustomisasi teks, dan download PNG secara instan & gratis.',
  keywords: ['Homeless Media', 'Folkative', 'Content Generator', 'Instagram Carousel Generator', 'Open Source'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#09090b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-white antialiased min-h-screen flex flex-col font-sans selection:bg-emerald-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
