import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sistem Redaksi Otomatis untuk Homeless Media (White-Label & Beli Putus)',
  description: 'Sistem otonom yang memantau tren 24 jam, menulis naskah, mendesain carousel otomatis, dan posting langsung ke Instagram. Jalan di server sendiri, tanpa biaya bulanan.',
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
      <body className="bg-[#fafafa] text-[#09090b] antialiased min-h-screen flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
