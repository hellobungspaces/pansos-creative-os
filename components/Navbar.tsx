'use client';

import React, { useState, useEffect } from 'react';
import { Radio, ArrowUpRight, ShieldAlert, FileText, Menu, X, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  onOpenTipLine: () => void;
  onOpenMediaKit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTipLine, onOpenMediaKit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Network Notification Bar */}
      <div className="bg-black/90 border-b border-zinc-900 text-[11px] font-mono text-zinc-400 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-lime-400">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
              AUTONOMOUS REDAKSI ENGINE: READY
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">100% WHITE-LABEL • JALAN DI SERVER SENDIRI • BELI PUTUS</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="text-lime-400 font-bold">KAPASITAS: HINGGA 100 POST / HARI</span>
            <a 
              href="#contact" 
              className="text-zinc-300 hover:text-lime-400 transition-colors flex items-center gap-1 font-semibold"
            >
              KONSULTASI SETUP <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090a0d]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl py-3'
            : 'bg-[#090a0d] border-b border-zinc-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Identity */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-zinc-900 border border-zinc-700 rounded-md flex items-center justify-center group-hover:border-lime-400 transition-all duration-200">
                <span className="text-lime-400 font-mono font-black text-lg group-hover:scale-110 transition-transform">⚡</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base md:text-lg tracking-tighter text-white group-hover:text-lime-400 transition-colors">
                    AUTOPRESS<span className="text-lime-400">.AI</span>
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-lime-400/10 text-lime-400 border border-lime-400/30 rounded uppercase">
                    Beli Putus
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                  SISTEM REDAKSI HOMELESS MEDIA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-zinc-300">
              <a href="#simulator" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>01.</span>
                <span>SIMULASI PIPELINE</span>
              </a>
              <a href="#comparison" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>02.</span>
                <span>HITUNGAN HEMAT</span>
              </a>
              <a href="#architecture" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>03.</span>
                <span>ARSITEKTUR VPS</span>
              </a>
              <a href="#generator" className="hover:text-lime-400 transition-colors flex items-center gap-1 text-lime-400 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GENERATOR LAB</span>
              </a>
              <a href="#contact" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>04.</span>
                <span>KONSULTASI</span>
              </a>
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-mono font-bold text-black bg-lime-400 hover:bg-lime-300 rounded-md transition-all shadow-md shadow-lime-400/20 flex items-center gap-1.5 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>KONSULTASI SETUP / WHATSAPP</span>
              </a>
            </div>

            {/* Mobile Action & Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="#contact"
                className="p-2 bg-lime-400 text-black rounded-md text-xs font-mono font-bold"
              >
                Konsultasi
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-md hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e1014] border-b border-zinc-800 px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1 font-mono text-sm border-b border-zinc-800 pb-4">
              <a
                href="#simulator"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [01] Simulasi Pipeline Kerja
              </a>
              <a
                href="#comparison"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [02] Hitungan Hemat Biaya
              </a>
              <a
                href="#architecture"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [03] Arsitektur Server Sendiri
              </a>
              <a
                href="#generator"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-lime-400 font-bold hover:text-lime-300 flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>[04] Coba Content Generator Lab</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [05] Konsultasi Setup
              </a>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-lime-400 text-black font-mono font-bold text-xs rounded text-center shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>CHAT VIA WHATSAPP SEKARANG</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
