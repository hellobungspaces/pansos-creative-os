'use client';

import React, { useState } from 'react';
import { 
  X, 
  Share2, 
  Bookmark, 
  ExternalLink, 
  Clock, 
  Eye, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import { FeedItem } from '@/data/mediaData';

interface ArticleModalProps {
  item: FeedItem | null;
  onClose: () => void;
  onPlayPodcast?: (url: string, title: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ item, onClose, onPlayPodcast }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const slides = item.slides || [item.mediaUrl];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl bg-[#0f1116] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-auto flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/70">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-lime-400/10 text-lime-400 border border-lime-400/30 uppercase">
              {item.category}
            </span>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              DISTRIBUTED PROTOCOL // {item.platform.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors text-xs flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline font-mono">{copied ? 'Copied Link' : 'Bagikan'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Article Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {item.title}
          </h2>

          {/* Author & Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-zinc-800/80 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <img
                src={item.author.avatar}
                alt={item.author.name}
                className="w-10 h-10 rounded-full border border-zinc-700 object-cover"
              />
              <div>
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <span>{item.author.name}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 fill-lime-400/20" />
                </div>
                <div className="text-[11px] text-zinc-400">{item.author.role} • {item.platformHandle}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span>{item.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-zinc-500" />
                <span>{item.metrics.views || item.metrics.likes} Interaksi</span>
              </div>
            </div>
          </div>

          {/* Slide / Visual Gallery */}
          <div className="relative rounded-xl overflow-hidden bg-black border border-zinc-800 aspect-video flex items-center justify-center">
            <img
              src={slides[currentSlideIndex]}
              alt={`Slide ${currentSlideIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {slides.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
                  className="absolute left-3 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur border border-zinc-700"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
                  className="absolute right-3 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur border border-zinc-700"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 backdrop-blur border border-zinc-700 text-xs font-mono text-white">
                  Slide {currentSlideIndex + 1} dari {slides.length}
                </div>
              </>
            )}
          </div>

          {/* Podcast Audio Player Trigger if applicable */}
          {item.platform === 'podcast' && (
            <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase">AUDIO PODCAST STREAM</div>
                <div className="text-sm font-semibold text-white">Dengarkan episode lengkap (58 Menit)</div>
              </div>
              <button
                onClick={() => onPlayPodcast && onPlayPodcast(item.audioSnippetUrl || '', item.title)}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs rounded-lg transition-all"
              >
                Putar Audio Stream
              </button>
            </div>
          )}

          {/* Caption & Deep Context */}
          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            <p className="font-semibold text-white">
              {item.caption}
            </p>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono space-y-2">
              <div className="text-lime-400 font-bold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>NATIVE EDITORIAL METRICS</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-zinc-400">
                <div>Likes: <strong className="text-white">{item.metrics.likes}</strong></div>
                <div>Comments: <strong className="text-white">{item.metrics.comments}</strong></div>
                <div>Shares: <strong className="text-white">{item.metrics.shares || 'N/A'}</strong></div>
                <div>Saves: <strong className="text-white">{item.metrics.saves || 'N/A'}</strong></div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono bg-zinc-900 text-zinc-400 border border-zinc-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950/80 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-400">
            Platform Asli: <strong className="text-white uppercase">{item.platform}</strong>
          </span>

          <a
            href={item.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 transition-all shadow-md shadow-lime-400/20"
          >
            <span>Buka di Aplikasi Asli</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
