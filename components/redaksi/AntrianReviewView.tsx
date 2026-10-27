'use client';

import React, { useState } from 'react';
import { CheckSquare, AlertTriangle, ArrowRight, Check, Plus, ExternalLink, Globe, Sparkles, XCircle, Copy, Instagram } from 'lucide-react';
import { RedaksiPost } from '@/data/redaksiData';
import { blockBg } from '@/utils/cardTemplates';
import { getCategoryTheme, CATEGORIES } from '@/utils/categoryTheme';

interface AntrianReviewViewProps {
  posts: RedaksiPost[];
  onOpenDetailEditor: (post: RedaksiPost) => void;
  onOpenCreateModal: () => void;
  onApprovePost: (postId: string) => void;
  onRejectPost: (postId: string) => void;
  isLoading?: boolean;
}

export const AntrianReviewView: React.FC<AntrianReviewViewProps> = ({
  posts,
  onOpenDetailEditor,
  onOpenCreateModal,
  onApprovePost,
  onRejectPost,
  isLoading = false
}) => {
  const [activeTab, setActiveTab] = useState<'perlu_review' | 'disetujui' | 'terjadwal' | 'sudah_posting' | 'ditolak'>('perlu_review');
  const [catFilter, setCatFilter] = useState<string>('ALL');
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const handleCopyCaption = (e: React.MouseEvent, post: RedaksiPost) => {
    e.stopPropagation();
    let domain = '';
    try {
      domain = post.sourceUrl ? new URL(post.sourceUrl).hostname.replace('www.', '') : '';
    } catch {
      domain = post.source.toLowerCase().replace(/\s+/g, '');
    }

    const cleanSource = post.source.replace(/[^a-zA-Z0-9]/g, '');
    const cleanCategory = post.category.replace(/[^a-zA-Z0-9]/g, '');

    const text = post.caption || `${post.title}.\n\nLaporan terverifikasi dari ${post.source} merangkum fakta penting yang perlu kamu ketahui hari ini.\n\nSimak slide 1 sampai ${post.slides.length} di atas 👆\n\nKalo menurut kamu gimana nih? Warga Konoha setuju atau punya pandangan lain? Tulis di kolom komentar! 👇\n\n📌 Sumber Informasi: ${post.source}${domain ? ` (${domain})` : ''}\n🔗 Tautan: ${post.sourceUrl || '-'}\n📷 Lisensi Foto: Unsplash (Free Commercial Use)\n⚖️ Ringkasan sesuai UU Hak Cipta No. 28/2014 Pasal 42.\n\n#KonohaInsight #WargaKonoha #BeritaTerkini #${cleanCategory} #KulturDigital #${cleanSource} #TrendingNow`;

    navigator.clipboard?.writeText(text);
    setCopiedPostId(post.id);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  const perluReviewCount = posts.filter((p) => p.status === 'perlu_review').length;
  const disetujuiCount = posts.filter((p) => p.status === 'disetujui').length;
  const terjadwalCount = posts.filter((p) => p.status === 'terjadwal').length;
  const sudahPostingCount = posts.filter((p) => p.status === 'sudah_posting').length;
  const ditolakCount = posts.filter((p) => p.status === 'ditolak').length;

  const filteredPosts = posts.filter((p) => {
    if (catFilter !== 'ALL' && p.category.toUpperCase() !== catFilter) return false;
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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold">
            MEJA EDITOR
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight text-zinc-900 leading-none">
            ANTRIAN REVIEW
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl pt-1">
            Cek, edit, setujui.
          </p>
        </div>

        <button
          onClick={onOpenCreateModal}
          className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-mono font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 active:scale-95 shrink-0 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 text-[#e2ff3b]" />
          <span>+ Buat Berita Baru</span>
        </button>
      </div>

      {/* Tabs and Action Buttons Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-3">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar text-xs font-mono">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-zinc-950 font-bold border-b-2 border-zinc-950'
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full ${
                tab.id === 'perlu_review' && tab.count > 0 ? 'bg-[#e2ff3b] text-black' : 'bg-zinc-200 text-zinc-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>


      {/* Category filter */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {[{ tag: 'ALL', icon: '✦', name: 'Semua' }, ...CATEGORIES.filter((c) => posts.some((p) => p.category.toUpperCase() === c.tag))].map((c) => (
          <button
            key={c.tag}
            onClick={() => setCatFilter(c.tag)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-mono font-bold whitespace-nowrap border transition-all ${
              catFilter === c.tag ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'
            }`}
          >
            {c.icon} {c.name}
          </button>
        ))}
      </div>

      {/* Grid of 4:5 Carousel Cards OR Skeleton Loaders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`skeleton-card-${i}`}
              className="flex flex-col justify-between space-y-2.5 animate-pulse"
            >
              {/* The 4:5 Card Preview Skeleton */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 bg-white flex flex-col justify-between shadow-md">
                {/* Top Half: Cover Skeleton */}
                <div className="relative h-1/2 w-full bg-zinc-100 overflow-hidden flex items-center justify-center">
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <div className="h-3 w-20 bg-zinc-200 rounded" />
                    <div className="h-3 w-8 bg-zinc-200 rounded" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-200" />
                </div>

                {/* Bottom Half: Theme Color Skeleton */}
                <div className="h-1/2 w-full p-3.5 sm:p-4 flex flex-col justify-between bg-zinc-50 border-t border-zinc-200">
                  <div className="space-y-2">
                    <div className="h-4 w-16 bg-zinc-200 rounded" />
                    <div className="space-y-1.5 pt-1">
                      <div className="h-3.5 w-full bg-zinc-200 rounded" />
                      <div className="h-3.5 w-4/5 bg-zinc-200 rounded" />
                      <div className="h-3 w-2/3 bg-zinc-200/80 rounded" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-200">
                    <div className="h-3 w-16 bg-zinc-200 rounded" />
                    <div className="h-6 w-6 rounded-md bg-zinc-200" />
                  </div>
                </div>
              </div>

              {/* Sub-text Skeleton */}
              <div className="space-y-1.5 px-1">
                <div className="h-3 w-24 bg-zinc-200 rounded" />
                <div className="h-3.5 w-3/4 bg-zinc-200 rounded" />
              </div>

              {/* Action Buttons Skeleton */}
              <div className="flex gap-2 pt-1 px-1">
                <div className="h-7 flex-1 bg-zinc-200 rounded-xl" />
                <div className="h-7 w-16 bg-zinc-200 rounded-xl" />
              </div>
            </div>
          ))
        ) : (
          filteredPosts.map((post) => (
          <div
            key={post.id}
            className="group flex flex-col justify-between space-y-2.5 transition-all duration-200"
          >
            {/* The 4:5 Card Preview */}
            <div 
              onClick={() => onOpenDetailEditor(post)}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200/90 bg-black flex flex-col justify-between shadow-md hover:shadow-xl cursor-pointer hover:border-zinc-300 transition-all hover:-translate-y-1"
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
                  <span />
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/60 backdrop-blur font-bold">
                    1/{post.slides.length}
                  </span>
                </div>

                {/* Subtle soft gradient at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Half: Theme Color Block (Default Royal Blue) */}
              <div 
                className="h-1/2 w-full p-3.5 sm:p-4 flex flex-col justify-between relative text-white"
                style={{ backgroundColor: blockBg(post.template) }}
              >
                {/* Dynamic Category Tag */}
                <div className="flex items-center justify-between">
                  <span 
                    className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-black uppercase tracking-wider shadow-sm transition-all"
                    style={{
                      backgroundColor: getCategoryTheme(post.category).bg,
                      color: getCategoryTheme(post.category).text
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Bold Condensed Headline with Yellow Highlight */}
                <div
                  className="text-sm sm:text-base font-black font-headline text-white leading-tight uppercase line-clamp-3 my-1"
                  dangerouslySetInnerHTML={{ __html: post.highlightedTitle }}
                />

                {/* Viral score */}
                <div className="flex items-center justify-between text-[10px] font-mono text-white/80">
                  {post.hasRiskWarning ? (
                    <span className="flex items-center gap-1 text-[#facc15] font-bold">
                      <AlertTriangle className="w-3 h-3" />
                      Cek risiko
                    </span>
                  ) : (
                    <span>Skor viral</span>
                  )}
                  <span className="w-7 h-7 rounded-md bg-[#e2ff3b] text-black font-black text-xs flex items-center justify-center font-headline shadow-md">
                    {post.viralScore}
                  </span>
                </div>
              </div>
            </div>

            {/* Meta + actions */}
            <div className="space-y-2 px-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 flex items-center gap-1 truncate transition-colors"
                >
                  <span className="truncate">{post.source}</span>
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
                <span className="shrink-0 ml-2">{post.timeAgo}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {activeTab === 'perlu_review' ? (
                  <button
                    onClick={() => onApprovePost(post.id)}
                    className="flex-1 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-[11px] font-mono font-bold flex items-center justify-center gap-1 transition-all"
                  >
                    <Check className="w-3 h-3" />
                    Setujui
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenDetailEditor(post)}
                    className="flex-1 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-[11px] font-mono font-bold flex items-center justify-center gap-1 transition-all"
                  >
                    Edit
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
                <button
                  onClick={(e) => handleCopyCaption(e, post)}
                  className="p-1.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-700 transition-all"
                  title="Salin caption Instagram"
                >
                  {copiedPostId === post.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />}
                </button>
                {activeTab === 'perlu_review' && (
                  <button
                    onClick={() => onRejectPost(post.id)}
                    className="p-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-rose-50 hover:border-rose-300 text-zinc-500 hover:text-rose-600 transition-all"
                    title="Tolak"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
          ))
        )}
      </div>

      {/* Empty State */}
      {!isLoading && filteredPosts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-zinc-300 space-y-3 shadow-sm">
          <CheckSquare className="w-10 h-10 text-zinc-400 mx-auto" />
          <h3 className="text-base font-bold text-zinc-900">Tidak Ada Konten di Tab Ini</h3>
          <p className="text-xs font-mono text-zinc-500 max-w-sm mx-auto">
            Semua antrean telah diproses. Tekan tombol di bawah untuk membuat konten baru dari rilis berita terkini.
          </p>
          <button
            onClick={onOpenCreateModal}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white font-mono font-bold text-xs rounded-xl shadow"
          >
            + Buat Berita Baru Sekarang
          </button>
        </div>
      )}
    </div>
  );
};
