'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { FeedItem } from '@/data/mediaData';

interface StoryModalProps {
  item: FeedItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ item, onClose, onNext, onPrev }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState<number>(0);
  const [isSaved, setIsSaved] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState<string[]>([
    'Insight yang sangat valid, media tradisional udah ketinggalan jauh.',
    'Pantesan akhir-akhir ini DM share lebih rame dari comment section.',
    'Analisisnya tajam banget bro!'
  ]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (item) {
      // Parse likes e.g. "48.2K"
      const num = parseFloat(item.metrics.likes) * (item.metrics.likes.includes('K') ? 1000 : 1);
      setLikesCount(Math.round(num));
      setIsLiked(false);
      setIsSaved(false);
    }
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  const handleLike = () => {
    if (isLiked) {
      setLikesCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments([commentInput.trim(), ...comments]);
    setCommentInput('');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-4">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={onClose}
          className="p-2.5 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-full border border-zinc-700/80 transition-all hover:scale-105"
          aria-label="Close Story Viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next buttons for Desktop */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 rounded-full text-white transition-all hover:scale-110"
          aria-label="Previous Post"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 rounded-full text-white transition-all hover:scale-110"
          aria-label="Next Post"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Story Card Container - 9:16 mobile aspect ratio simulation */}
      <div className="relative z-10 w-full max-w-[420px] h-[92vh] max-h-[820px] bg-[#0c0d11] rounded-2xl sm:rounded-3xl border border-zinc-800 overflow-hidden flex flex-col shadow-2xl shadow-lime-500/5">
        {/* Story Top Progress Bars */}
        <div className="absolute top-3 left-3 right-3 z-30 flex gap-1.5">
          <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
            <div className={`h-full bg-white transition-all duration-300 ${isPlaying ? 'w-2/3' : 'w-1/3'}`} />
          </div>
          <div className="h-1 flex-1 bg-white/20 rounded-full" />
          <div className="h-1 flex-1 bg-white/20 rounded-full" />
        </div>

        {/* Story Header Info */}
        <div className="absolute top-6 left-3 right-3 z-30 flex items-center justify-between text-white drop-shadow-md">
          <div className="flex items-center gap-2.5">
            <img
              src={item.author.avatar}
              alt={item.author.name}
              className="w-8 h-8 rounded-full border border-white/40 object-cover"
            />
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
                <span>{item.platformHandle}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 fill-lime-400/20" />
              </div>
              <div className="text-[10px] font-mono text-zinc-300">
                {item.publishedAt} • <span className="uppercase text-lime-400">{item.platform}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 bg-black/40 hover:bg-black/70 rounded-full backdrop-blur transition-all"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 bg-black/40 hover:bg-black/70 rounded-full backdrop-blur transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Media Canvas */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.mediaUrl}
            alt={item.title}
            className="w-full h-full object-cover select-none"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />

          {/* Category Tag pill */}
          <div className="absolute top-20 left-4 z-20">
            <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded bg-black/60 backdrop-blur border border-zinc-700 text-lime-400">
              {item.category}
            </span>
          </div>

          {/* Right Floating Social Action Rails (TikTok / Reels style) */}
          <div className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-4 text-white">
            <button
              onClick={handleLike}
              className="flex flex-col items-center gap-1 group active:scale-125 transition-transform"
            >
              <div className={`p-2.5 rounded-full backdrop-blur border ${isLiked ? 'bg-rose-500/20 border-rose-500 text-rose-500' : 'bg-black/40 border-white/20 text-white'}`}>
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500' : ''}`} />
              </div>
              <span className="text-[10px] font-mono font-bold">
                {likesCount.toLocaleString()}
              </span>
            </button>

            <div className="flex flex-col items-center gap-1">
              <div className="p-2.5 rounded-full bg-black/40 border border-white/20 backdrop-blur">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold">{comments.length}</span>
            </div>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className="flex flex-col items-center gap-1 active:scale-110 transition-transform"
            >
              <div className={`p-2.5 rounded-full backdrop-blur border ${isSaved ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-black/40 border-white/20 text-white'}`}>
                <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-amber-400' : ''}`} />
              </div>
              <span className="text-[10px] font-mono font-bold">Simpan</span>
            </button>

            <button
              onClick={handleShare}
              className="flex flex-col items-center gap-1 active:scale-110 transition-transform"
            >
              <div className="p-2.5 rounded-full bg-black/40 border border-white/20 backdrop-blur">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold">
                {copied ? 'Copied!' : 'Share'}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Details & Caption Area */}
        <div className="relative z-30 bg-black/90 backdrop-blur border-t border-zinc-800 p-4 space-y-3">
          <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">
            {item.title}
          </h3>

          <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
            {item.caption}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((t, idx) => (
              <span key={idx} className="text-[10px] font-mono text-zinc-400 hover:text-lime-400 cursor-pointer">
                {t}
              </span>
            ))}
          </div>

          {/* Quick Comment Bar */}
          <form onSubmit={handleAddComment} className="flex items-center gap-2 pt-2 border-t border-zinc-800/80">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Tulis opini singkat..."
              className="flex-1 bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-lime-400 text-black font-mono font-bold text-xs rounded-lg hover:bg-lime-300"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
