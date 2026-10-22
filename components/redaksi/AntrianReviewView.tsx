'use client';

import React, { useState } from 'react';
import { CheckSquare, AlertTriangle, ArrowRight, Check, Plus, ExternalLink, Globe, Sparkles, XCircle } from 'lucide-react';
import { RedaksiPost } from '@/data/redaksiData';

interface AntrianReviewViewProps {
  posts: RedaksiPost[];
  onOpenDetailEditor: (post: RedaksiPost) => void;
  onOpenCreateModal: () => void;
  onApprovePost: (postId: string) => void;
  onRejectPost: (postId: string) => void;
}

export const AntrianReviewView: React.FC<AntrianReviewViewProps> = ({
  posts,
  onOpenDetailEditor,
  onOpenCreateModal,
  onApprovePost,
  onRejectPost
}) => {
  const [activeTab, setActiveTab] = useState<'perlu_review' | 'disetujui' | 'terjadwal' | 'sudah_posting' | 'ditolak'>('perlu_review');

  const perluReviewCount = posts.filter((p) => p.status === 'perlu_review').length;
  const disetujuiCount = posts.filter((p) => p.status === 'disetujui').length;
  const terjadwalCount = posts.filter((p) => p.status === 'terjadwal').length;
  const sudahPostingCount = posts.filter((p) => p.status === 'sudah_posting').length;
  const ditolakCount = posts.filter((p) => p.status === 'ditolak').length;

  const filteredPosts = posts.filter((p) => {
    if (activeTab === 'perlu_review') return p.status === 'perlu_review';
    if (activeTab === 'disetujui') return p.status === 'disetujui';
    if (activeTab === 'terjadwal') return p.status === 'terjadwal';
    if (activeTab === 'sudah_posting') return p.status === 'sudah_posting';
    if (activeTab === 'ditolak') return p.status === 'ditolak';
    return true;
  });

  const tabs = [
    { id: 'perlu_review', label: 'Perlu review', count: perluReviewCount },
    { id: 'disetujui', label: 'Disetujui', count: disetujuiCount },
    { id: 'terjadwal', label: 'Terjadwal', count: terjadwalCount },
    { id: 'sudah_posting', label: 'Sudah posting', count: sudahPostingCount },
    { id: 'ditolak', label: 'Ditolak', count: ditolakCount },
  ];

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800/80 pb-5">
        <div className="space-y-1">
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold">
            MEJA EDITOR
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight text-white leading-none">
            ANTRIAN REVIEW
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl pt-1">
            Cek fakta dari sumber asli, edit teks dan foto, lalu setujui. Tidak ada yang terposting tanpa persetujuan kamu.
          </p>
        </div>

        <button
          onClick={onOpenCreateModal}
          className="px-4 py-2.5 bg-[#e2ff3b] hover:bg-[#d4f52f] text-black font-mono font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95 shrink-0 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Buat Berita Baru</span>
        </button>
      </div>

      {/* Tabs and Action Buttons Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar text-xs font-mono">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-white font-bold border-b-2 border-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full ${
                tab.id === 'perlu_review' && tab.count > 0 ? 'bg-[#e2ff3b] text-black' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 4:5 Carousel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="group flex flex-col justify-between space-y-2.5 transition-all duration-200"
          >
            {/* The 4:5 Card Preview */}
            <div 
              onClick={() => onOpenDetailEditor(post)}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-black flex flex-col justify-between shadow-2xl cursor-pointer hover:border-zinc-700 transition-all hover:-translate-y-1"
            >
              {/* Top Half: Cover Image */}
              <div className="relative h-1/2 w-full overflow-hidden bg-zinc-950">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top overlay badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-white drop-shadow">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e2ff3b]" />
                    <span>INDONESIA HARI INI</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/60 backdrop-blur font-bold">
                    1/{post.slides.length}
                  </span>
                </div>

                {/* Source badge watermark */}
                {post.sourceBadge && (
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono font-black">
                    {post.sourceBadge}
                  </div>
                )}
              </div>

              {/* Bottom Half: Signature Royal Blue Block */}
              <div className="h-1/2 w-full bg-[#2446f5] p-3.5 sm:p-4 flex flex-col justify-between relative">
                {/* Yellow Category Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-[#e2ff3b] text-black tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Bold Condensed Headline with Yellow Highlight */}
                <div
                  className="text-sm sm:text-base font-black font-headline text-white leading-tight uppercase line-clamp-3 my-1"
                  dangerouslySetInnerHTML={{ __html: post.highlightedTitle }}
                />

                {/* Bottom Bar: Warning pill, Source, and Viral Score Badge */}
                <div className="flex items-center justify-between pt-1 text-[9px] font-mono text-white/80">
                  <div className="flex items-center gap-2">
                    {post.hasRiskWarning ? (
                      <span className="px-1.5 py-0.5 rounded bg-[#2a2412] text-[#facc15] border border-[#ca8a04]/40 font-bold flex items-center gap-1">
                        <AlertTriangle className="w-2.5 h-2.5" />
                        <span>Cek risiko</span>
                      </span>
                    ) : (
                      <span className="truncate max-w-[80px]">Sumber: {post.source}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="hidden sm:inline text-white/70">Geser ➔</span>
                    <span className="w-6 h-6 rounded-md bg-[#e2ff3b] text-black font-black text-xs flex items-center justify-center font-headline shadow-md">
                      {post.viralScore}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-text below card */}
            <div className="space-y-1.5 px-1">
              <div 
                onClick={() => onOpenDetailEditor(post)}
                className="text-xs font-bold text-zinc-200 line-clamp-1 group-hover:text-white transition-colors cursor-pointer"
              >
                {post.title}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
                >
                  <Globe className="w-3 h-3 text-zinc-500" />
                  <span>{post.source}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span>{post.timeAgo}</span>
              </div>

              {/* Quick Actions (Approve / Reject) */}
              {activeTab === 'perlu_review' && (
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => onApprovePost(post.id)}
                    className="flex-1 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 rounded-lg text-[11px] font-mono font-bold flex items-center justify-center gap-1 transition-all"
                  >
                    <Check className="w-3 h-3" />
                    <span>Setujui</span>
                  </button>
                  <button
                    onClick={() => onRejectPost(post.id)}
                    className="py-1.5 px-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-rose-400 border border-zinc-800 rounded-lg text-[11px] font-mono transition-all"
                    title="Tolak / Arsipkan"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16 bg-[#0f1117] rounded-3xl border border-dashed border-zinc-800 space-y-3">
          <CheckSquare className="w-10 h-10 text-zinc-600 mx-auto" />
          <h3 className="text-base font-bold text-white">Tidak Ada Konten di Tab Ini</h3>
          <p className="text-xs font-mono text-zinc-500 max-w-sm mx-auto">
            Semua antrean telah diproses. Tekan tombol di bawah untuk membuat konten baru dari rilis berita terkini.
          </p>
          <button
            onClick={onOpenCreateModal}
            className="px-4 py-2 bg-[#e2ff3b] text-black font-mono font-bold text-xs rounded-xl"
          >
            + Buat Berita Baru Sekarang
          </button>
        </div>
      )}
    </div>
  );
};
