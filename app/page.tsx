'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { HeaderNav } from '@/components/redaksi/HeaderNav';
import { RuangRedaksiView } from '@/components/redaksi/RuangRedaksiView';
import { AntrianReviewView } from '@/components/redaksi/AntrianReviewView';
import { CarouselEditorModal } from '@/components/redaksi/CarouselEditorModal';
import { SumberBeritaView } from '@/components/redaksi/SumberBeritaView';
import { InstagramGridView } from '@/components/redaksi/InstagramGridView';
import { CreatePostModal } from '@/components/redaksi/CreatePostModal';
import { INITIAL_POSTS, RedaksiPost } from '@/data/redaksiData';

const LOCAL_STORAGE_KEY = 'indonesia_hari_ini_posts_v5';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'ruang_redaksi' | 'antrian_review' | 'editor' | 'sumber_berita' | 'instagram_grid'>('ruang_redaksi');
  const [posts, setPosts] = useState<RedaksiPost[]>(INITIAL_POSTS);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<RedaksiPost | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isScouting, setIsScouting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from localStorage on mount & auto-sync daily news in background
  useEffect(() => {
    let currentPosts = INITIAL_POSTS;
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        currentPosts = JSON.parse(saved);
        setPosts(currentPosts);
      } else {
        setPosts(INITIAL_POSTS);
      }
    } catch (e) {
      console.warn('LocalStorage load failed', e);
      setPosts(INITIAL_POSTS);
    } finally {
      setIsLoading(false);
    }

    // Auto-sync every day or after 3 hours in the background
    const lastSync = localStorage.getItem('indonesia_hari_ini_last_sync');
    const now = Date.now();
    if (!lastSync || now - parseInt(lastSync, 10) > 3 * 60 * 60 * 1000) {
      fetch('/api/rss?limit=6')
        .then((r) => r.json())
        .then((data) => {
          if (data.success && data.posts && data.posts.length > 0) {
            const existingTitles = new Set(currentPosts.map((p) => p.title.toLowerCase().trim()));
            const newItems = data.posts.filter((p: RedaksiPost) => !existingTitles.has(p.title.toLowerCase().trim()));
            if (newItems.length > 0) {
              const merged = [...newItems, ...currentPosts];
              setPosts(merged);
              try {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));
              } catch (err) {
                console.warn(err);
              }
            }
            localStorage.setItem('indonesia_hari_ini_last_sync', String(now));
          }
        })
        .catch((err) => console.warn('Auto-sync error:', err));
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

  // Live RSS scout from Indonesian trusted media
  const handleLiveScout = async () => {
    setIsScouting(true);
    try {
      const res = await fetch('/api/rss?limit=6');
      const data = await res.json();
      if (data.success && data.posts && data.posts.length > 0) {
        const existingTitles = new Set(posts.map((p) => p.title.toLowerCase().trim()));
        const newItems = data.posts.filter((p: RedaksiPost) => !existingTitles.has(p.title.toLowerCase().trim()));

        if (newItems.length > 0) {
          const merged = [...newItems, ...posts];
          savePosts(merged);
          setToastMessage(`✨ Berhasil menarik ${newItems.length} berita baru dari ANTARA, CNN & CNBC!`);
        } else {
          setToastMessage('Semua berita terkini dari RSS sudah ada di Antrian Review.');
        }
        setActiveTab('antrian_review');
      }
    } catch (err) {
      console.error('Scouting error:', err);
      setToastMessage('Gagal mengambil RSS feed live.');
    } finally {
      setIsScouting(false);
      setTimeout(() => setToastMessage(null), 4500);
    }
  };

  const reviewCount = posts.filter((p) => p.status === 'perlu_review').length;
  const scheduledCount = posts.filter((p) => p.status === 'terjadwal').length;
  const publishedCount = posts.filter((p) => p.status === 'sudah_posting').length;

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-zinc-100 bg-redaksi-grid relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 border border-[#e2ff3b]/60 text-white shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-4 h-4 text-[#e2ff3b] shrink-0" />
          <span className="text-xs font-mono">{toastMessage}</span>
        </div>
      )}

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
        onSearchClick={handleLiveScout}
        isScouting={isScouting}
      />

      {/* Main Active View */}
      <main className="flex-1 pb-16">
        {activeTab === 'ruang_redaksi' && (
          <RuangRedaksiView
            onGoToReview={() => setActiveTab('antrian_review')}
            onSearchClick={handleLiveScout}
            reviewCount={reviewCount}
            scheduledCount={scheduledCount}
            publishedCount={publishedCount}
            isScouting={isScouting}
            isLoading={isLoading}
          />
        )}

        {activeTab === 'antrian_review' && (
          <AntrianReviewView
            posts={posts}
            onOpenDetailEditor={handleOpenEditor}
            onOpenCreateModal={() => setIsCreateModalOpen(true)}
            onApprovePost={handleApprovePost}
            onRejectPost={handleRejectPost}
            isLoading={isLoading}
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
