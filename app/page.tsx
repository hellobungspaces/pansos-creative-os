'use client';

import React from 'react';
import { OpenSourceHeader } from '@/components/OpenSourceHeader';
import { StudioEditor } from '@/components/StudioEditor';
import { OpenSourceSelfHost } from '@/components/OpenSourceSelfHost';
import { StudioFooter } from '@/components/StudioFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white selection:bg-emerald-400 selection:text-black">
      {/* GitHub & Fork Header */}
      <OpenSourceHeader />

      <main className="flex-1">
        {/* Core Interactive 4:5 Carousel Generator Studio Canvas */}
        <StudioEditor />

        {/* Developer Self-Host & VPS Architecture Guide */}
        <OpenSourceSelfHost />
      </main>

      {/* Developer Footer */}
      <StudioFooter />
    </div>
  );
}
