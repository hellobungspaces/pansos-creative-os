'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { LiveTicker } from '@/components/LiveTicker';
import { HeroSection } from '@/components/HeroSection';
import { PlatformFeeds } from '@/components/PlatformFeeds';
import { HomelessMediaGenerator } from '@/components/HomelessMediaGenerator';
import { OriginalShows } from '@/components/OriginalShows';
import { ManifestoSection } from '@/components/ManifestoSection';
import { MediaKitStats } from '@/components/MediaKitStats';
import { BrandedStudio } from '@/components/BrandedStudio';
import { AudienceCapture } from '@/components/AudienceCapture';
import { Footer } from '@/components/Footer';
import { StoryModal } from '@/components/StoryModal';
import { ArticleModal } from '@/components/ArticleModal';
import { TipLineModal } from '@/components/TipLineModal';
import { InquiryModal } from '@/components/InquiryModal';
import { AudioPlayerBar } from '@/components/AudioPlayerBar';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { FeedItem, FEED_ITEMS } from '@/data/mediaData';

export default function HomePage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [storyItem, setStoryItem] = useState<FeedItem | null>(null);
  const [articleItem, setArticleItem] = useState<FeedItem | null>(null);
  const [isTipLineOpen, setIsTipLineOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<{ url: string; title: string } | null>(null);

  // Handle open modal depending on format
  const handleSelectItem = (item: FeedItem, mode: 'story' | 'article') => {
    if (mode === 'story') {
      setStoryItem(item);
    } else {
      setArticleItem(item);
    }
  };

  const handleNextStory = () => {
    if (!storyItem) return;
    const currentIndex = FEED_ITEMS.findIndex((f) => f.id === storyItem.id);
    const nextItem = FEED_ITEMS[(currentIndex + 1) % FEED_ITEMS.length];
    setStoryItem(nextItem);
  };

  const handlePrevStory = () => {
    if (!storyItem) return;
    const currentIndex = FEED_ITEMS.findIndex((f) => f.id === storyItem.id);
    const prevItem = FEED_ITEMS[(currentIndex - 1 + FEED_ITEMS.length) % FEED_ITEMS.length];
    setStoryItem(prevItem);
  };

  const handlePlayPodcast = (url: string, title: string) => {
    setCurrentAudio({ url, title });
  };

  const handlePlayEpisode = (title: string) => {
    // Open audio player or story modal for episode
    setCurrentAudio({
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: `Original Episode: ${title}`
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0d] text-zinc-100 selection:bg-lime-400 selection:text-black">
      {/* Top Real-time Headlines Ticker */}
      <LiveTicker />

      {/* Main Responsive Header */}
      <Navbar
        onOpenTipLine={() => setIsTipLineOpen(true)}
        onOpenMediaKit={() => setIsInquiryOpen(true)}
      />

      {/* Hero Section with Product Design & Engineering Architecture */}
      <main className="flex-1">
        <HeroSection
          onOpenMediaKit={() => setIsInquiryOpen(true)}
          onFilterPlatform={(p) => setSelectedPlatform(p)}
        />

        {/* Omnichannel Live Feed Matrix */}
        <PlatformFeeds
          selectedPlatform={selectedPlatform}
          onFilterPlatform={(p) => setSelectedPlatform(p)}
          onSelectItem={handleSelectItem}
        />

        {/* AI & Viral Content Generator Lab */}
        <HomelessMediaGenerator />

        {/* Flagship Original Shows Bento Grid */}
        <OriginalShows onPlayEpisode={handlePlayEpisode} />

        {/* Why We Are Homeless Editorial Manifesto */}
        <ManifestoSection />

        {/* Interactive Media Kit & Rate Card Simulator */}
        <MediaKitStats onOpenInquiryModal={() => setIsInquiryOpen(true)} />

        {/* Branded Content Lab & Case Studies */}
        <BrandedStudio onOpenInquiryModal={() => setIsInquiryOpen(true)} />

        {/* Owned Audience Capture Engine (Substack, WhatsApp, Telegram) */}
        <AudienceCapture />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Sticky Thumb Navigation (Displays on mobile screens < 768px) */}
      <MobileBottomNav
        currentPlatform={selectedPlatform}
        onOpenTipLine={() => setIsTipLineOpen(true)}
        onOpenMediaKit={() => setIsInquiryOpen(true)}
      />

      {/* Modals & Overlays */}
      <StoryModal
        item={storyItem}
        onClose={() => setStoryItem(null)}
        onNext={handleNextStory}
        onPrev={handlePrevStory}
      />

      <ArticleModal
        item={articleItem}
        onClose={() => setArticleItem(null)}
        onPlayPodcast={handlePlayPodcast}
      />

      <TipLineModal
        isOpen={isTipLineOpen}
        onClose={() => setIsTipLineOpen(false)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Bottom Sticky Mini Audio Player when podcast is active */}
      <AudioPlayerBar
        currentTrack={currentAudio}
        onClose={() => setCurrentAudio(null)}
      />
    </div>
  );
}
