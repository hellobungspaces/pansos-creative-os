'use client';

import React, { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactWhatsApp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    niche: 'Kultur & Berita Perkotaan (Folkative/USS Style)',
    targetVolume: '20 - 50 konten / hari',
    igHandle: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo! Saya tertarik bikin Sistem Redaksi Otomatis untuk Homeless Media (White-Label & Beli Putus). Saya mau konsultasi untuk niche media saya.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-2">
              KONSULTASI & ESTIMASI SETUP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Siap Mengotomatisasi Redaksi Homeless Media Kamu?
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Karena sistem ini <strong>100% custom & white-label</strong> yang diinstall langsung di VPS kamu, pengerjaan dibatasi maksimal 3 klien per batch agar kualitas naskah dan desain tetap eksklusif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
              <div className="text-sm font-bold text-white">
                Cara Tercepat: Chat WhatsApp Langsung
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ceritakan ide homeless media kamu, niche target, dan referensi desain yang kamu suka. Kita diskusi langsung waktu pengerjaan dan estimasi biayanya.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>CHAT VIA WHATSAPP SEKARANG</span>
              </button>
            </div>

            {/* Quick Form */}
            <div>
              {submitted ? (
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-white">Pesan Terkirim</div>
                  <div className="text-xs text-zinc-400">
                    Kami akan menghubungi kamu di WhatsApp {formData.whatsapp} segera.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs font-mono">
                  <div>
                    <label className="block text-zinc-400 mb-1">Nama Kamu:</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Gilang"
                      className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1">Nomor WhatsApp Aktif:</label>
                    <input
                      type="text"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+62 812-xxxx-xxxx"
                      className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1">Niche Media yang Diinginkan:</label>
                    <select
                      value={formData.niche}
                      onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                      className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option>Kultur & Berita Perkotaan (Folkative Style)</option>
                      <option>Bisnis, Startup & Finansial</option>
                      <option>Streetwear, Sneakers & Fesyen</option>
                      <option>Teknologi, AI & Internet Subkultur</option>
                      <option>Niche Khusus Lainnya</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 mt-2"
                  >
                    <span>Kirim Brief & Request Diskusi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
