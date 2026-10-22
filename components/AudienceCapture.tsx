'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, Sparkles, Smartphone, ArrowRight } from 'lucide-react';

export const AudienceCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState<'email' | 'whatsapp' | 'telegram'>('email');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 border-b border-zinc-800/80 bg-gradient-to-b from-[#090a0d] to-[#0f1118] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#11131a] border border-zinc-800 shadow-2xl relative overflow-hidden">
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime-400/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-lime-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE OWNED BRIDGE // DIRECT CHANNEL</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Jaringan Pribadi Tanpa Filter Algoritma.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
              Algoritma media sosial bisa berubah sewaktu-waktu. Bergabunglah dengan <strong className="text-white">78.000+ subscriber VIP</strong> yang menerima ringkasan intelijen kultural, analisis industri, dan akses awal setiap Minggu pagi langsung ke inbox Anda.
            </p>

            {/* Platform Selection */}
            <div className="flex items-center gap-2 mb-6">
              <button
                type="button"
                onClick={() => setPlatform('email')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  platform === 'email'
                    ? 'bg-lime-400 text-black font-bold border-lime-400'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                Substack / Email Memo
              </button>
              <button
                type="button"
                onClick={() => setPlatform('whatsapp')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  platform === 'whatsapp'
                    ? 'bg-lime-400 text-black font-bold border-lime-400'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                WhatsApp VIP Channel
              </button>
              <button
                type="button"
                onClick={() => setPlatform('telegram')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  platform === 'telegram'
                    ? 'bg-lime-400 text-black font-bold border-lime-400'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                Telegram Alpha
              </button>
            </div>

            {/* Subscribe Form */}
            {submitted ? (
              <div className="p-4 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs sm:text-sm font-mono flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <div>
                  <strong className="block font-bold">Terima kasih telah bergabung dengan jaringan VIP.</strong>
                  Email konfirmasi telah dikirimkan ke <span className="underline">{email}</span>.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      platform === 'email'
                        ? 'Masukkan email profesional Anda...'
                        : platform === 'whatsapp'
                        ? 'Masukkan nomor WhatsApp aktif (+62)...'
                        : 'Masukkan username Telegram Anda...'
                    }
                    className="w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-zinc-700 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 font-mono transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-lime-400/20 whitespace-nowrap flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>BERGABUNG VIP DISPATCH</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Privacy notice */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400 mt-4">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
              <span>Privasi terenkripsi. 0% Spam. Unsubscribe kapan saja dalam 1 klik.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
