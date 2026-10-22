'use client';

import React, { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';

export const ConsultationCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    mediaNiche: 'Kultur & Berita Perkotaan (Folkative/USS Style)',
    targetVolume: '20 - 50 konten / hari',
    igHandle: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppDirect = () => {
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
    <section id="contact" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-gradient-to-b from-[#090a0d] to-[#12151f] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0f1118] border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime-400/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-lime-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KONSULTASI & ESTIMASI SETUP</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Siap Mengotomatisasi Redaksi Homeless Media Anda?
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Karena sistem ini <strong>100% custom & white-label</strong> yang diinstall langsung di server Anda, kapasitas pengerjaan dibatasi maksimal 3 klien per batch agar kualitas naskah & visual tetap eksklusif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Col: Direct WhatsApp Callout */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-5">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-lime-400 font-bold">
                  JALUR RESPON CEPAT
                </span>
                <h3 className="text-lg font-bold text-white">
                  Diskusi Langsung via WhatsApp
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Ceritakan ide homeless media Anda, niche target, dan contoh akun referensi. Kami akan berikan estimasi waktu pengerjaan & rekomendasi arsitektur server.
                </p>
              </div>

              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>CHAT VIA WHATSAPP (FAST RESPONSE)</span>
              </button>

              <div className="pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 space-y-1">
                <div>✓ Bebas konsultasi awal & tanya-tanya</div>
                <div>✓ Tanpa biaya bulanan / No subscription</div>
                <div>✓ Garansi instalasi hingga live posting</div>
              </div>
            </div>

            {/* Right Col: Consultation Form */}
            <div className="md:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-700 text-center space-y-3">
                  <div className="w-12 h-12 bg-lime-400/20 text-lime-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Permintaan Terkirim!</h4>
                  <p className="text-xs font-mono text-zinc-400 max-w-sm mx-auto">
                    Kami akan menghubungi Anda di WhatsApp {formData.whatsapp} dalam waktu 1x24 jam untuk diskusi teknis.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 mb-1">Nama Anda:</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Gilang"
                        className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
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
                        className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 mb-1">Niche Media yang Diinginkan:</label>
                      <select
                        value={formData.mediaNiche}
                        onChange={(e) => setFormData({ ...formData, mediaNiche: e.target.value })}
                        className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                      >
                        <option>Kultur & Berita Perkotaan (Folkative Style)</option>
                        <option>Bisnis, Startup & Finansial</option>
                        <option>Streetwear, Sneakers & Fesyen</option>
                        <option>Teknologi, AI & Internet Subkultur</option>
                        <option>Niche Khusus Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-400 mb-1">Target Volume Konten:</label>
                      <select
                        value={formData.targetVolume}
                        onChange={(e) => setFormData({ ...formData, targetVolume: e.target.value })}
                        className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                      >
                        <option>10 - 25 Konten / Hari</option>
                        <option>25 - 50 Konten / Hari</option>
                        <option>Hingga 100 Konten / Hari</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">Akun Instagram (Jika Sudah Ada):</label>
                    <input
                      type="text"
                      value={formData.igHandle}
                      onChange={(e) => setFormData({ ...formData, igHandle: e.target.value })}
                      placeholder="@namamedia (opsional jika baru mau mulai)"
                      className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs rounded-xl shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>KIRIM BRIEF & KONSULTASI SETUP</span>
                    <ArrowRight className="w-4 h-4" />
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
