'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { LiveTicker } from '@/components/LiveTicker';
import { HeroSection } from '@/components/HeroSection';
import { PipelineSimulator } from '@/components/PipelineSimulator';
import { CostComparison } from '@/components/CostComparison';
import { TechStackArchitecture } from '@/components/TechStackArchitecture';
import { HomelessMediaGenerator } from '@/components/HomelessMediaGenerator';
import { ConsultationCTA } from '@/components/ConsultationCTA';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090a0d] text-zinc-100 selection:bg-lime-400 selection:text-black">
      {/* Top Real-time Headlines Ticker */}
      <LiveTicker />

      {/* Main Responsive Header */}
      <Navbar
        onOpenTipLine={() => {}}
        onOpenMediaKit={() => {}}
      />

      {/* Main Pitch & System Showcase */}
      <main className="flex-1">
        {/* Hero Section with exact customer pitch */}
        <HeroSection />

        {/* Section: Live Pipeline Simulator (How the Autonomous Bot Works) */}
        <section id="simulator" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#090a0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PipelineSimulator />
          </div>
        </section>

        {/* Section: Cost Comparison (Biaya 6 Orang Redaksi vs 1 Sistem Beli Putus) */}
        <CostComparison />

        {/* Section: Tech Stack Architecture (Jalan di server sendiri, Docker, VPS, Meta API) */}
        <TechStackArchitecture />

        {/* Section: Interactive Content Generator Lab */}
        <HomelessMediaGenerator />

        {/* Section: Consultation & WhatsApp Booking */}
        <ConsultationCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Thumb Navigation */}
      <MobileBottomNav
        currentPlatform="all"
        onOpenTipLine={() => {}}
        onOpenMediaKit={() => {}}
      />
    </div>
  );
}
