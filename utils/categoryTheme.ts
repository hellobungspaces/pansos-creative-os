export interface CategoryStyle {
  bg: string;
  text: string;
  border?: string;
  name: string;
}

export interface CategoryDef extends CategoryStyle {
  tag: string;
  icon: string;
  pattern: RegExp;
}

// Single source of truth: order matters (first match wins in getCategoryTheme).
export const CATEGORIES: CategoryDef[] = [
  { tag: 'KONOHA', icon: '🏛️', name: 'Politik & Pemerintahan', bg: '#ef4444', text: '#ffffff', pattern: /KONOHA|POLITIK|DPR|PEMERINTAH|PEMILU/i },
  { tag: 'HUKUM', icon: '⚖️', name: 'Hukum & Korupsi', bg: '#b91c1c', text: '#ffffff', pattern: /HUKUM|SIDANG|KPK|KORUPSI/i },
  { tag: 'KRIMINAL', icon: '🚨', name: 'Kriminal & Kasus', bg: '#18181b', text: '#ffffff', pattern: /KRIMINAL|POLISI|KASUS|PENIPUAN/i },
  { tag: 'BISNIS', icon: '💼', name: 'Ekonomi & Cuan', bg: '#059669', text: '#ffffff', pattern: /BISNIS|CUAN|FINANSIAL|SAHAM|KRIPTO|EKONOMI|INVESTASI/i },
  { tag: 'KESEHATAN', icon: '🩺', name: 'Kesehatan', bg: '#06b6d4', text: '#000000', pattern: /KESEHATAN|MEDIS|PENYAKIT|VAKSIN/i },
  { tag: 'PENDIDIKAN', icon: '🎓', name: 'Pendidikan & Karier', bg: '#6366f1', text: '#ffffff', pattern: /PENDIDIKAN|SEKOLAH|KAMPUS|KARIER|KULIAH/i },
  { tag: 'LINGKUNGAN', icon: '🌿', name: 'Lingkungan & Bencana', bg: '#10b981', text: '#000000', pattern: /LINGKUNGAN|IKLIM|HUTAN|EMISI|ALAM|BANJIR|KARHUTLA|BENCANA/i },
  { tag: 'TRANSPORTASI', icon: '🚆', name: 'Transportasi & Kota', bg: '#0ea5e9', text: '#000000', pattern: /TRANSPORTASI|KRL|MACET|KOTA|MUDIK|OTOMOTIF/i },
  { tag: 'OLAHRAGA', icon: '⚽', name: 'Olahraga', bg: '#f97316', text: '#000000', pattern: /OLAHRAGA|BOLA|TIMNAS|SEPAK|BADMINTON|MOTOGP/i },
  { tag: 'HIBURAN', icon: '🎬', name: 'Hiburan & Selebriti', bg: '#d946ef', text: '#ffffff', pattern: /HIBURAN|ARTIS|FILM|MUSIK|SELEBRITI|KONSER/i },
  { tag: 'VIRAL', icon: '🔥', name: 'Viral & Pop', bg: '#ff5722', text: '#ffffff', pattern: /VIRAL|TREN|GAYA|POP|LIFESTYLE/i },
  { tag: 'SOSMED', icon: '📱', name: 'Sosmed & Kultur', bg: '#ec4899', text: '#ffffff', pattern: /SOSMED|MEDSOS|INSTAGRAM|TIKTOK|WHATSAPP|YOUTUBE/i },
  { tag: 'FAUNA', icon: '🐼', name: 'Fauna & Satwa', bg: '#f59e0b', text: '#000000', pattern: /FAUNA|HEWAN|SATWA|PANDA|ANIMAL|ZOO|BINATANG/i },
  { tag: 'AI', icon: '🤖', name: 'AI & Robotika', bg: '#e2ff3b', text: '#000000', pattern: /^AI$|ARTIFICIAL|ROBOT|HUMANOID|NEURAL|CHATGPT/i },
  { tag: 'MARKETING', icon: '📣', name: 'Marketing', bg: '#8b5cf6', text: '#ffffff', pattern: /MARKETING|IKLAN|ADS|BRAND/i },
  { tag: 'TEKNOLOGI', icon: '⚡', name: 'Teknologi', bg: '#38bdf8', text: '#000000', pattern: /TEKNOLOGI|GADGET|TECH/i },
];

export function getCategoryTheme(category: string): CategoryStyle {
  const cat = (category || '').toUpperCase().trim();
  const match = CATEGORIES.find((c) => c.tag === cat) || CATEGORIES.find((c) => c.pattern.test(cat));
  const found = match || CATEGORIES[CATEGORIES.length - 1];
  return { bg: found.bg, text: found.text, name: found.name };
}
