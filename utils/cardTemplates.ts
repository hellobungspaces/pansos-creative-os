// Carousel card templates. Fonts are fixed on purpose: Syne 800 (title) + Plus Jakarta Sans (body).
// Visual system: monochrome photo + ONE accent color on the last words of the headline.
export type CardLayout = 'cover' | 'tokoh' | 'mono-gelap' | 'mono-terang' | 'pill' | 'klasik';

export interface CardTemplate {
  id: string;
  name: string;
  hint: string;
  layout: CardLayout;
  accent: string;   // color of the highlighted headline words
  paper: string;    // page / fade color for light templates
  tint: string;     // gradient tint on photo overlays
  queueBg: string;  // block color on queue/grid thumbnails
}

export const CARD_TEMPLATES: CardTemplate[] = [
  { id: 'sampul', name: 'Sampul', hint: 'Foto berwarna, judul besar. Untuk slide 1', layout: 'cover', accent: '#e2ff3b', paper: '#ffffff', tint: '#0b1a55', queueBg: '#0b1a55' },
  { id: 'mono-gelap', name: 'Mono Gelap', hint: 'Foto hitam putih, teks di bawah', layout: 'mono-gelap', accent: '#e2ff3b', paper: '#ffffff', tint: '#000000', queueBg: '#111319' },
  { id: 'mono-terang', name: 'Mono Terang', hint: 'Foto hitam putih memudar ke putih', layout: 'mono-terang', accent: '#2446f5', paper: '#f2f2ef', tint: '#000000', queueBg: '#2446f5' },
  { id: 'tokoh', name: 'Tokoh', hint: 'Judul di atas, foto tokoh di bawah', layout: 'tokoh', accent: '#2446f5', paper: '#f4f4f1', tint: '#000000', queueBg: '#2446f5' },
  { id: 'pill', name: 'Sumber Pill', hint: 'Foto berwarna, bar sumber di bawah', layout: 'pill', accent: '#e2ff3b', paper: '#ffffff', tint: '#000000', queueBg: '#111319' },
  { id: 'klasik', name: 'Klasik Biru', hint: 'Foto atas, blok biru bawah', layout: 'klasik', accent: '#e2ff3b', paper: '#2446f5', tint: '#2446f5', queueBg: '#2446f5' },
];

export function getTemplate(id?: string): CardTemplate {
  return CARD_TEMPLATES.find((t) => t.id === id) || CARD_TEMPLATES[1];
}

// Queue/grid thumbnails use this block color behind the headline.
export function blockBg(id?: string): string {
  return getTemplate(id).queueBg;
}
