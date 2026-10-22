'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, X, Headphones, Radio } from 'lucide-react';

interface AudioPlayerBarProps {
  currentTrack: {
    url: string;
    title: string;
  } | null;
  onClose: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({ currentTrack, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 md:bottom-3 left-0 md:left-1/2 md:-translate-x-1/2 z-40 w-full md:max-w-2xl bg-[#0f1117]/95 border-t md:border border-lime-400/30 md:rounded-2xl shadow-2xl backdrop-blur-xl p-3 sm:p-4 text-white">
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        {/* Track icon & title */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-lime-400 text-black flex items-center justify-center shrink-0">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-lime-400 uppercase font-bold">
              <span>NOW STREAMING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
            </div>
            <div className="text-xs sm:text-sm font-bold truncate">
              {currentTrack.title}
            </div>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-lime-400 transition-colors"
            aria-label="Play/Pause Audio"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close Player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-2.5 w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
        <div
          className="bg-lime-400 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
