import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KONOHA INSIGHT // Satirical Homeless Media OS',
  description: 'Operating System Redaksi Mandiri Konoha Insight (@konoha.insight): kurasi fakta media terverifikasi, sentuhan sarkas cerdas, render carousel 4:5, dan meja editor otomatis.',
  keywords: ['Konoha Insight', 'konoha.insight', 'Warga Konoha', 'Homeless Media', 'Redaksi OS', 'Instagram Carousel Generator', 'Satire News Media'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#f8f9fa] text-zinc-900 antialiased min-h-screen flex flex-col font-sans selection:bg-[#e2ff3b] selection:text-black">
        {children}
      </body>
    </html>
  );
}
