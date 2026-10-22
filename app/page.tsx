'use client';

import React, { useState, useEffect } from 'react';
import { HeaderNav } from '@/components/redaksi/HeaderNav';
import { RuangRedaksiView } from '@/components/redaksi/RuangRedaksiView';
import { AntrianReviewView } from '@/components/redaksi/AntrianReviewView';
import { CarouselEditorModal } from '@/components/redaksi/CarouselEditorModal';
import { SumberBeritaView } from '@/components/redaksi/SumberBeritaView';
import { InstagramGridView } from '@/components/redaksi/InstagramGridView';
import { CreatePostModal } from '@/components/redaksi/CreatePostModal';
import { INITIAL_POSTS, RedaksiPost } from '@/data/redaksiData';

const LOCAL_STORAGE_KEY = 'pansos_redaksi_posts_v2';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'ruang_redaksi' | 'antrian_review' | 'editor' | 'sumber_berita' | 'instagram_grid'>('ruang_redaksi');
  const [posts, setPosts] = useState<RedaksiPost[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<RedaksiPost | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setPosts(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('LocalStorage load failed', e);
    }
  }, []);

  // Save to localStorage whenever posts change
  const savePosts = (newPosts: RedaksiPost[]) => {
    setPosts(newPosts);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newPosts));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  };

  const handleOpenEditor = (post: RedaksiPost) => {
    setSelectedPost(post);
  };

  const handleSavePost = (updatedPost: RedaksiPost) => {
    const updated = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
    savePosts(updated);
    setSelectedPost(null);
  };

  const handleApprovePost = (postId: string) => {
    const updated = posts.map((p) => (p.id === postId ? { ...p, status: 'terjadwal' as const } : p));
    savePosts(updated);
  };

  const handleRejectPost = (postId: string) => {
    const updated = posts.map((p) => (p.id === postId ? { ...p, status: 'ditolak' as const } : p));
    savePosts(updated);
  };

  const handleMarkPublished = (postId: string) => {
    const updated = posts.map((p) => (p.id === postId ? { ...p, status: 'sudah_posting' as const } : p));
    savePosts(updated);
    setSelectedPost(null);
  };

  const handlePostCreated = (newPost: RedaksiPost) => {
    const updated = [newPost, ...posts];
    savePosts(updated);
    setActiveTab('antrian_review');
  };

  const handleSearchClick = () => {
    setIsCreateModalOpen(true);
  };

  const reviewCount = posts.filter((p) => p.status === 'perlu_review').length;

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-zinc-100 bg-redaksi-grid">
      {/* Top Header Navigation matching reference */}
      <HeaderNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'editor') {
            setSelectedPost(posts[1] || posts[0]);
          } else {
            setActiveTab(tab);
          }
        }}
        reviewCount={reviewCount}
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
            onOpenCreateModal={() => setIsCreateModalOpen(true)}
            onApprovePost={handleApprovePost}
            onRejectPost={handleRejectPost}
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
          onMarkPublished={handleMarkPublished}
        />
      )}

      {/* Input Berita Baru Modal (Live Production Fetcher) */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onPostCreated={handlePostCreated}
      />
    </div>
  );
}
