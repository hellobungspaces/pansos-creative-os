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
              DISTRIBUTED PROTOCOL: ONLINE
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">HOMELAND-FREE MEDIA: ZERO CMS BLOATWARE</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">REACH: 14.8M+ MO. NATIVE AUDIENCE</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="text-zinc-500">INDONESIA / SOUTHEAST ASIA</span>
            <a 
              href="#media-kit" 
              className="text-zinc-300 hover:text-lime-400 transition-colors flex items-center gap-1 font-semibold"
            >
              RATE CARD 2026 <ArrowUpRight className="w-3 h-3" />
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
                <span className="text-lime-400 font-mono font-black text-lg group-hover:scale-110 transition-transform">U</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base md:text-lg tracking-tighter text-white group-hover:text-lime-400 transition-colors">
                    UNBOUND<span className="text-lime-400">™</span>
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700 rounded uppercase">
                    Homeless
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                  DISTRIBUTED MEDIA NETWORK
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-zinc-300">
              <a href="#feeds" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>01.</span>
                <span>FEEDS & STREAMS</span>
              </a>
              <a href="#shows" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>02.</span>
                <span>ORIGINAL SHOWS</span>
              </a>
              <a href="#manifesto" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>03.</span>
                <span>WHY HOMELESS?</span>
              </a>
              <a href="#media-kit" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>04.</span>
                <span>AUDIENCE & DATA</span>
              </a>
              <a href="#studio" className="hover:text-lime-400 transition-colors flex items-center gap-1">
                <span>05.</span>
                <span>BRAND LAB</span>
              </a>
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenTipLine}
                className="px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-md transition-all flex items-center gap-2 group"
                title="Kirim info bocoran atau cerita secara anonim"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>TIP LINE / LEAKS</span>
              </button>

              <button
                onClick={onOpenMediaKit}
                className="px-4 py-2 text-xs font-mono font-bold text-black bg-lime-400 hover:bg-lime-300 rounded-md transition-all shadow-md shadow-lime-400/20 flex items-center gap-1.5 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>ADVERTISE / RATE CARD</span>
              </button>
            </div>

            {/* Mobile Action & Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenTipLine}
                className="p-2 bg-zinc-900 border border-zinc-800 rounded-md text-amber-400 hover:bg-zinc-800"
                aria-label="Whistleblower Tip Line"
              >
                <ShieldAlert className="w-4 h-4" />
              </button>

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
                href="#feeds"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [01] Live Feeds & Streams
              </a>
              <a
                href="#shows"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [02] Original Shows & Series
              </a>
              <a
                href="#manifesto"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [03] Why Homeless Media?
              </a>
              <a
                href="#media-kit"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [04] Audience & Rate Card
              </a>
              <a
                href="#studio"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-300 hover:text-lime-400"
              >
                [05] Brand Studio / Case Studies
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMediaKit();
                }}
                className="w-full py-3 bg-lime-400 text-black font-mono font-bold text-xs rounded text-center shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>PARTNER WITH US / MEDIA KIT</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTipLine();
                }}
                className="w-full py-2.5 bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-xs rounded text-center flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>SUBMIT STORY TIP / LEAK (ENCRYPTED)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
