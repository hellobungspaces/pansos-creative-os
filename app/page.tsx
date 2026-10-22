'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { RedaksiCockpit } from '@/components/RedaksiCockpit';
import { CostBreakdown } from '@/components/CostBreakdown';
import { Deliverables } from '@/components/Deliverables';
import { ContactWhatsApp } from '@/components/ContactWhatsApp';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-[#09090b]">
      {/* Minimalist Top Nav */}
      <Navbar />

      <main className="flex-1">
        {/* Clean Hero with Authentic Pitch */}
        <HeroSection />

        {/* Live Interactive Cockpit: Ingestion + 4:5 Carousel Canvas + Instagram Queue */}
        <RedaksiCockpit />

        {/* Realistic Cost Comparison: 6 Orang Tim vs VPS Sendiri */}
        <CostBreakdown />

        {/* Scope of Work: Exactly What You Deliver */}
        <Deliverables />

        {/* Direct WhatsApp Call to Action */}
        <ContactWhatsApp />
      </main>

      {/* Grounded Footer */}
      <Footer />
    </div>
  );
}
