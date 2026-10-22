import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'INDONESIA HARI INI // AI Redaksi Operating System',
  description: 'Operating System Redaksi Mandiri Indonesia Hari Ini: pemantau tren otomatis, penyusunan naskah viral, render kartu carousel 4:5 royal blue, dan meja editor review.',
  keywords: ['Indonesia Hari Ini', 'Homeless Media', 'Redaksi OS', 'Instagram Carousel Generator', 'Open Source Media'],
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
