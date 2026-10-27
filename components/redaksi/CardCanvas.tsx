'use client';

import React, { useEffect, useRef } from 'react';
import { CardInput, renderCard } from '@/utils/renderCard';

interface CardCanvasProps {
  input: CardInput;
  width: number;      // canvas pixel width (display is CSS-scaled)
  className?: string;
}

export const CardCanvas: React.FC<CardCanvasProps> = ({ input, width, className }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const seq = useRef(0);
  const { template, title, body, photoUrl, category, sourceText, index, total, showBadge } = input;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = ++seq.current;
    // Draw into a scratch canvas first so a slow image never leaves a half-drawn card on screen.
    const scratch = document.createElement('canvas');
    renderCard(scratch, { template, title, body, photoUrl, category, sourceText, index, total, showBadge }, width).then(() => {
      if (id !== seq.current) return;
      el.width = scratch.width;
      el.height = scratch.height;
      el.getContext('2d')?.drawImage(scratch, 0, 0);
    });
  }, [template, title, body, photoUrl, category, sourceText, index, total, showBadge, width]);

  return <canvas ref={ref} className={className} style={{ aspectRatio: '4 / 5' }} />;
};
