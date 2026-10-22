export interface CategoryStyle {
  bg: string;
  text: string;
  border?: string;
  name: string;
}

export function getCategoryTheme(category: string): CategoryStyle {
  const cat = (category || '').toUpperCase().trim();

  // Fauna / Hewan / Panda / Satwa
  if (/FAUNA|HEWAN|SATWA|PANDA|ANIMAL|ZOO|BINATANG/i.test(cat)) {
    return { bg: '#f59e0b', text: '#000000', name: 'Fauna & Satwa' }; // Amber Warm
  }

  // Lingkungan / Alam / Karhutla / Iklim
  if (/LINGKUNGAN|IKLIM|HUTAN|EMISI|ALAM|BANJIR|KARHUTLA/i.test(cat)) {
    return { bg: '#10b981', text: '#000000', name: 'Lingkungan & Alam' }; // Emerald
  }

  // Konoha / Politik / Hukum / Pejabat / Sidang
  if (/KONOHA|POLITIK|HUKUM|DPR|PEMERINTAH|SIDANG|KPK|POLISI/i.test(cat)) {
    return { bg: '#ef4444', text: '#ffffff', name: 'Konoha & Politik' }; // Crimson
  }

  // AI & Artificial Intelligence
  if (/^AI$|ARTIFICIAL|ROBOT|HUMANOID|NEURAL|CHATGPT/i.test(cat)) {
    return { bg: '#e2ff3b', text: '#000000', name: 'AI & Robotika' }; // Neon Lime
  }

  // Sosmed / Medsos / Creator / Linimasa
  if (/SOSMED|MEDSOS|INSTAGRAM|TIKTOK|WHATSAPP|YOUTUBE/i.test(cat)) {
    return { bg: '#ec4899', text: '#ffffff', name: 'Sosmed & Kultur' }; // Hot Pink
  }

  // Bisnis / Finansial / Cuan / Saham / Kripto
  if (/BISNIS|CUAN|FINANSIAL|SAHAM|KRIPTO|EKONOMI|INVESTASI/i.test(cat)) {
    return { bg: '#059669', text: '#ffffff', name: 'Bisnis & Finansial' }; // Dark Emerald
  }

  // Viral & Tren
  if (/VIRAL|TREN|GAYA|POP/i.test(cat)) {
    return { bg: '#ff5722', text: '#ffffff', name: 'Viral & Pop' }; // Deep Orange
  }

  // Marketing & Branding
  if (/MARKETING|IKLAN|ADS|BRAND/i.test(cat)) {
    return { bg: '#8b5cf6', text: '#ffffff', name: 'Marketing' }; // Violet
  }

  // Default Teknologi & Gadget
  return { bg: '#38bdf8', text: '#000000', name: 'Teknologi' }; // Sky Cyan
}
