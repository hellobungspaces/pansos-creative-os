import { CardTemplate } from './cardTemplates';
import { getCategoryTheme } from './categoryTheme';

export interface CardInput {
  template: CardTemplate;
  title: string;
  body: string;
  photoUrl?: string;
  category: string;
  sourceText: string;
  index: number;
  total: number;
  showBadge: boolean;
}

const W = 1080;
const H = 1350;
const M = 64;

const imageCache = new Map<string, Promise<HTMLImageElement | null>>();

function loadImage(url: string): Promise<HTMLImageElement | null> {
  let p = imageCache.get(url);
  if (!p) {
    p = new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = url;
    });
    imageCache.set(url, p);
  }
  return p;
}

let fontsPromise: Promise<unknown> | null = null;
function ensureFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      document.fonts.load('800 60px "Syne"'),
      document.fonts.load('500 32px "Plus Jakarta Sans"'),
      document.fonts.load('800 24px "Plus Jakarta Sans"'),
    ]).catch(() => undefined);
  }
  return fontsPromise;
}

type Ctx = CanvasRenderingContext2D;

const titleFont = (px: number) => `800 ${px}px "Syne", "Plus Jakarta Sans", sans-serif`;
const bodyFont = (px: number) => `italic 500 ${px}px "Plus Jakarta Sans", sans-serif`;
const uiFont = (px: number, w = 700) => `${w} ${px}px "Plus Jakarta Sans", sans-serif`;

function spacing(ctx: Ctx, px: number) {
  if ('letterSpacing' in ctx) (ctx as unknown as { letterSpacing: string }).letterSpacing = `${px}px`;
}

function wrapLines(ctx: Ctx, text: string, maxW: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function fitTitle(ctx: Ctx, text: string, maxW: number, startPx: number, minPx: number, maxLines: number) {
  for (let px = startPx; px >= minPx; px -= 4) {
    ctx.font = titleFont(px);
    spacing(ctx, -px * 0.02);
    const lines = wrapLines(ctx, text, maxW);
    if (lines.length <= maxLines) return { lines, px };
  }
  ctx.font = titleFont(minPx);
  spacing(ctx, -minPx * 0.02);
  const lines = wrapLines(ctx, text, maxW);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, '') + '…';
  }
  return { lines, px: minPx };
}

// Highlight the last ~35% of the headline words in the accent color.
function accentFrom(wordCount: number) {
  return wordCount - Math.min(4, Math.max(1, Math.round(wordCount * 0.35)));
}

function drawTitle(ctx: Ctx, lines: string[], px: number, x: number, y: number, align: 'left' | 'center', color: string, accent: string) {
  const all = lines.join(' ').split(/\s+/).length;
  const firstAccent = accentFrom(all);
  let seen = 0;
  ctx.font = titleFont(px);
  spacing(ctx, -px * 0.02);
  ctx.textAlign = 'left';
  lines.forEach((line, i) => {
    const words = line.split(' ');
    const plain: string[] = [];
    const hi: string[] = [];
    words.forEach((w) => (seen++ >= firstAccent ? hi : plain).push(w));
    const a = plain.join(' ');
    const b = hi.join(' ');
    const wa = ctx.measureText(a + (a && b ? ' ' : '')).width;
    const wb = ctx.measureText(b).width;
    const startX = align === 'center' ? x - (wa + wb) / 2 : x;
    const baseY = y + i * px * 1.06;
    ctx.fillStyle = color;
    if (a) ctx.fillText(a, startX, baseY);
    ctx.fillStyle = accent;
    if (b) ctx.fillText(b, startX + wa, baseY);
  });
}

function drawBody(ctx: Ctx, text: string, x: number, y: number, maxW: number, color: string, align: 'left' | 'center', maxLines: number, px = 32) {
  ctx.font = bodyFont(px);
  spacing(ctx, 0);
  const lines = wrapLines(ctx, text, maxW);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, '') + '…';
  }
  ctx.fillStyle = color;
  ctx.textAlign = align;
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * px * 1.4));
  ctx.textAlign = 'left';
  return lines.length * px * 1.4;
}

function roundRect(ctx: Ctx, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

function drawBadge(ctx: Ctx, category: string, x: number, y: number, align: 'left' | 'center') {
  const text = category.toUpperCase();
  const theme = getCategoryTheme(text);
  ctx.font = uiFont(22, 800);
  spacing(ctx, 1);
  const w = ctx.measureText(text).width + 40;
  const bx = align === 'center' ? x - w / 2 : x;
  ctx.fillStyle = theme.bg;
  roundRect(ctx, bx, y, w, 44, 22);
  ctx.fill();
  ctx.fillStyle = theme.text;
  ctx.textAlign = 'left';
  ctx.fillText(text, bx + 20, y + 30);
  spacing(ctx, 0);
}

// Draw photo (cover-fit) into rect, optionally monochrome. Processed at output resolution.
function drawPhoto(ctx: Ctx, img: HTMLImageElement | null, x: number, y: number, w: number, h: number, k: number, gray: boolean, fallback = '#1b1d26') {
  if (!img) {
    ctx.fillStyle = fallback;
    ctx.fillRect(x, y, w, h);
    return;
  }
  const off = document.createElement('canvas');
  off.width = Math.max(1, Math.round(w * k));
  off.height = Math.max(1, Math.round(h * k));
  const o = off.getContext('2d')!;
  const r = Math.max(off.width / img.width, off.height / img.height);
  const dw = img.width * r;
  const dh = img.height * r;
  o.drawImage(img, (off.width - dw) / 2, (off.height - dh) / 2, dw, dh);
  if (gray) {
    try {
      const d = o.getImageData(0, 0, off.width, off.height);
      const p = d.data;
      for (let i = 0; i < p.length; i += 4) {
        const l = 0.299 * p[i] + 0.587 * p[i + 1] + 0.114 * p[i + 2];
        const v = Math.max(0, Math.min(255, (l - 128) * 1.12 + 128));
        p[i] = p[i + 1] = p[i + 2] = v;
      }
      o.putImageData(d, 0, 0);
    } catch {
      /* tainted canvas: keep color */
    }
  }
  ctx.drawImage(off, x, y, w, h);
}

function gradient(ctx: Ctx, y0: number, y1: number, stops: Array<[number, string]>, x = 0, w = W) {
  const g = ctx.createLinearGradient(0, y0, 0, y1);
  stops.forEach(([o, c]) => g.addColorStop(o, c));
  ctx.fillStyle = g;
  ctx.fillRect(x, Math.min(y0, y1), w, Math.abs(y1 - y0));
}

function rgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function header(ctx: Ctx, color: string, input: CardInput, y = 84) {
  ctx.fillStyle = color;
  ctx.font = titleFont(32);
  spacing(ctx, 3);
  ctx.textAlign = 'center';
  ctx.fillText('KONOHA INSIGHT', W / 2, y);
  ctx.font = uiFont(22, 700);
  spacing(ctx, 0);
  ctx.textAlign = 'right';
  ctx.fillText(`${input.index + 1}/${input.total}`, W - M, y - 4);
  ctx.textAlign = 'left';
}

const geserLabel = (i: CardInput) => (i.index === i.total - 1 ? 'Bagikan' : 'Geser ›');

// Bottom-anchored text stack (badge, headline, body). Returns nothing; draws upward from `bottom`.
function bottomStack(ctx: Ctx, input: CardInput, bottom: number, opts: { titleColor: string; accent: string; bodyColor: string; maxLines?: number; startPx?: number }) {
  const maxW = W - M * 2;
  const { lines, px } = fitTitle(ctx, input.title.toUpperCase(), maxW, opts.startPx ?? 84, 44, opts.maxLines ?? 4);
  ctx.font = bodyFont(32);
  spacing(ctx, 0); // title letter-spacing must not leak into body measuring
  const bodyLines = Math.min(3, wrapLines(ctx, input.body, maxW).length);
  const bodyH = bodyLines ? bodyLines * 32 * 1.4 + 18 : 0;
  const titleH = lines.length * px * 1.06;
  const badgeH = input.showBadge ? 44 + 26 : 0;
  const top = bottom - (badgeH + titleH + bodyH);
  if (input.showBadge) drawBadge(ctx, input.category, M, top, 'left');
  const titleY = top + badgeH + px * 0.9;
  drawTitle(ctx, lines, px, M, titleY, 'left', opts.titleColor, opts.accent);
  if (bodyLines) drawBody(ctx, input.body, M, titleY + titleH - px * 0.9 + 14 + 32, maxW, opts.bodyColor, 'left', 3);
}

export async function renderCard(canvas: HTMLCanvasElement, input: CardInput, outW = W) {
  await ensureFonts();
  const img = input.photoUrl ? await loadImage(input.photoUrl) : null;
  const k = outW / W;
  canvas.width = outW;
  canvas.height = Math.round(H * k);
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(k, 0, 0, k, 0, 0);
  ctx.textBaseline = 'alphabetic';
  const T = input.template;

  switch (T.layout) {
    case 'cover': {
      drawPhoto(ctx, img, 0, 0, W, H, k, false);
      gradient(ctx, 380, H, [[0, rgba(T.tint, 0)], [0.55, rgba(T.tint, 0.88)], [1, rgba(T.tint, 0.98)]]);
      gradient(ctx, 0, 260, [[0, 'rgba(0,0,0,0.45)'], [1, 'rgba(0,0,0,0)']]);
      header(ctx, '#ffffff', input);
      bottomStack(ctx, input, 1210, { titleColor: '#ffffff', accent: T.accent, bodyColor: 'rgba(255,255,255,0.85)', startPx: 104, maxLines: 4 });
      ctx.font = uiFont(22, 600);
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText(input.sourceText, M, 1296);
      ctx.textAlign = 'right';
      ctx.fillText(geserLabel(input), W - M, 1296);
      ctx.textAlign = 'left';
      break;
    }
    case 'mono-gelap': {
      drawPhoto(ctx, img, 0, 0, W, H, k, true);
      gradient(ctx, 300, H, [[0, 'rgba(0,0,0,0)'], [0.5, 'rgba(0,0,0,0.78)'], [1, 'rgba(0,0,0,0.96)']]);
      gradient(ctx, 0, 240, [[0, 'rgba(0,0,0,0.5)'], [1, 'rgba(0,0,0,0)']]);
      header(ctx, '#ffffff', input);
      bottomStack(ctx, input, 1226, { titleColor: '#ffffff', accent: T.accent, bodyColor: 'rgba(255,255,255,0.82)' });
      ctx.font = uiFont(22, 600);
      ctx.fillStyle = 'rgba(255,255,255,0.65)';
      ctx.fillText(input.sourceText, M, 1300);
      ctx.textAlign = 'right';
      ctx.fillText(geserLabel(input), W - M, 1300);
      ctx.textAlign = 'left';
      break;
    }
    case 'mono-terang': {
      ctx.fillStyle = T.paper;
      ctx.fillRect(0, 0, W, H);
      drawPhoto(ctx, img, 0, 0, W, 860, k, true);
      gradient(ctx, 0, 260, [[0, 'rgba(0,0,0,0.5)'], [1, 'rgba(0,0,0,0)']]);
      gradient(ctx, 480, 872, [[0, rgba(T.paper, 0)], [0.7, rgba(T.paper, 0.97)], [0.96, T.paper], [1, T.paper]]);
      header(ctx, '#ffffff', input);
      bottomStack(ctx, input, 1210, { titleColor: '#0b0b0f', accent: T.accent, bodyColor: '#3f3f46' });
      ctx.font = uiFont(22, 600);
      ctx.fillStyle = '#71717a';
      ctx.fillText(input.sourceText, M, 1296);
      ctx.textAlign = 'right';
      ctx.fillText(geserLabel(input), W - M, 1296);
      ctx.textAlign = 'left';
      break;
    }
    case 'tokoh': {
      ctx.fillStyle = T.paper;
      ctx.fillRect(0, 0, W, H);
      drawPhoto(ctx, img, 0, 520, W, H - 520, k, true, '#d4d4d8');
      gradient(ctx, 520, 900, [[0, T.paper], [0.55, rgba(T.paper, 0.85)], [1, rgba(T.paper, 0)]]);
      gradient(ctx, 1000, H, [[0, 'rgba(0,0,0,0)'], [1, 'rgba(0,0,0,0.55)']]);
      header(ctx, '#0b0b0f', input);
      let y = 150;
      if (input.showBadge) {
        drawBadge(ctx, input.category, W / 2, y, 'center');
        y += 44 + 30;
      }
      const { lines, px } = fitTitle(ctx, input.title.toUpperCase(), W - M * 2, 88, 48, 3);
      drawTitle(ctx, lines, px, W / 2, y + px * 0.9, 'center', '#0b0b0f', T.accent);
      drawBody(ctx, input.body, W / 2, y + px * 0.9 + lines.length * px * 1.06 + 8, W - M * 2 - 40, '#52525b', 'center', 2, 30);
      ctx.font = uiFont(21, 600);
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fillText(input.sourceText, M, 1300);
      ctx.fillStyle = '#0b0b0f';
      roundRect(ctx, W - M - 160, 1262, 160, 54, 27);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = uiFont(24, 800);
      ctx.textAlign = 'center';
      ctx.fillText(geserLabel(input), W - M - 80, 1297);
      ctx.textAlign = 'left';
      break;
    }
    case 'pill': {
      drawPhoto(ctx, img, 0, 0, W, H, k, false);
      gradient(ctx, 330, H, [[0, 'rgba(0,0,0,0)'], [0.5, 'rgba(0,0,0,0.8)'], [1, 'rgba(0,0,0,0.95)']]);
      gradient(ctx, 0, 240, [[0, 'rgba(0,0,0,0.45)'], [1, 'rgba(0,0,0,0)']]);
      header(ctx, '#ffffff', input);
      bottomStack(ctx, input, 1196, { titleColor: '#ffffff', accent: T.accent, bodyColor: 'rgba(255,255,255,0.85)' });
      ctx.fillStyle = '#ffffff';
      roundRect(ctx, M, 1226, W - M * 2, 70, 35);
      ctx.fill();
      ctx.fillStyle = '#0b0b0f';
      ctx.font = uiFont(24, 700);
      ctx.fillText(`konohainsight  •  ${input.sourceText}`, M + 32, 1270);
      ctx.fillStyle = '#2446f5';
      ctx.font = uiFont(24, 800);
      ctx.textAlign = 'right';
      ctx.fillText(geserLabel(input), W - M - 32, 1270);
      ctx.textAlign = 'left';
      break;
    }
    case 'klasik': {
      drawPhoto(ctx, img, 0, 0, W, 700, k, false);
      gradient(ctx, 0, 220, [[0, 'rgba(0,0,0,0.45)'], [1, 'rgba(0,0,0,0)']]);
      ctx.fillStyle = T.paper;
      ctx.fillRect(0, 700, W, H - 700);
      header(ctx, '#ffffff', input);
      const maxW = W - M * 2;
      let y = 700 + 48;
      if (input.showBadge) {
        drawBadge(ctx, input.category, M, y, 'left');
        y += 44 + 24;
      }
      const { lines, px } = fitTitle(ctx, input.title.toUpperCase(), maxW, 80, 44, 4);
      drawTitle(ctx, lines, px, M, y + px * 0.9, 'left', T.accent, T.accent);
      drawBody(ctx, input.body, M, y + px * 0.9 + lines.length * px * 1.06 + 20, maxW, '#ffffff', 'left', 3);
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(M, 1252);
      ctx.lineTo(W - M, 1252);
      ctx.stroke();
      ctx.font = uiFont(22, 600);
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.fillText(input.sourceText, M, 1300);
      ctx.textAlign = 'right';
      ctx.fillText(geserLabel(input), W - M, 1300);
      ctx.textAlign = 'left';
      break;
    }
  }
}
