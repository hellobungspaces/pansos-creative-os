'use client';

import React, { useState } from 'react';
import { HeaderNav } from '@/components/redaksi/HeaderNav';
import { RuangRedaksiView } from '@/components/redaksi/RuangRedaksiView';
import { AntrianReviewView } from '@/components/redaksi/AntrianReviewView';
import { CarouselEditorModal } from '@/components/redaksi/CarouselEditorModal';
import { SumberBeritaView } from '@/components/redaksi/SumberBeritaView';
import { InstagramGridView } from '@/components/redaksi/InstagramGridView';
import { INITIAL_POSTS, RedaksiPost } from '@/data/redaksiData';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'ruang_redaksi' | 'antrian_review' | 'editor' | 'sumber_berita' | 'instagram_grid'>('ruang_redaksi');
  const [posts, setPosts] = useState<RedaksiPost[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<RedaksiPost | null>(null);

  const handleOpenEditor = (post: RedaksiPost) => {
    setSelectedPost(post);
  };

  const handleSavePost = (updatedPost: RedaksiPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
    setSelectedPost(null);
  };

  const handleSearchClick = () => {
    // Quick search simulation
    const query = prompt('Masukkan kata kunci berita baru (mis. AI, Bitcoin, Elon Musk):', 'Regulasi AI SEA 2026');
    if (query) {
      alert(`Scout sedang memindai 10 sumber berita untuk kata kunci: "${query}". Berita baru akan masuk ke Antrian Review dalam 1 menit.`);
      setActiveTab('antrian_review');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-zinc-100 bg-redaksi-grid">
      {/* Top Header Navigation matching reference */}
      <HeaderNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'editor') {
            setSelectedPost(posts[1]); // Open the Claude threat editor like in screenshot 4
          } else {
            setActiveTab(tab);
          }
        }}
        reviewCount={posts.length}
        onSearchClick={handleSearchClick}
      />

      {/* Main Active View */}
      <main className="flex-1 pb-16">
        {activeTab === 'ruang_redaksi' && (
          <RuangRedaksiView
            onGoToReview={() => setActiveTab('antrian_review')}
            onSearchClick={handleSearchClick}
          />
        )}

        {activeTab === 'antrian_review' && (
          <AntrianReviewView
            posts={posts}
            onOpenDetailEditor={handleOpenEditor}
          />
        )}

        {activeTab === 'sumber_berita' && (
          <SumberBeritaView />
        )}

        {activeTab === 'instagram_grid' && (
          <InstagramGridView
            posts={posts}
            onSelectPost={handleOpenEditor}
          />
        )}
      </main>

      {/* Slide-by-slide Detail Carousel Editor Modal (Matching Screenshot 4) */}
      {selectedPost && (
        <CarouselEditorModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onSave={handleSavePost}
        />
      )}
    </div>
  );
}
