'use client';

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Building, Mail, Phone } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    workEmail: '',
    campaignType: 'Omnichannel Blitz (TikTok + IG + Pod)',
    budgetRange: 'Rp 50.000.000 - Rp 100.000.000',
    timeline: 'Q4 2026 / Bulan Ini',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg bg-[#0e1015] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-auto">
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 bg-zinc-950/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-lime-400/10 border border-lime-400/30 rounded-lg text-lime-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-mono font-bold text-white uppercase">
                BRAND PARTNERSHIP // RATE CARD BRIEF
              </h3>
              <p className="text-[11px] font-mono text-zinc-400">
                Terhubung dengan Creative Strategy & Media Kit team kami
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 bg-lime-400/10 border border-lime-400/30 text-lime-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Brief Berhasil Diterima</h4>
              <p className="text-xs font-mono text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Strategic Lead kami akan mengirimkan proposal custom deck dan slot kalender Google Meet dalam waktu 4 jam kerja ke {formData.workEmail}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 bg-lime-400 text-black font-mono font-bold text-xs rounded-lg hover:bg-lime-300"
              >
                Selesai
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 mb-1">Nama Brand / Agensi:</label>
                  <input
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    placeholder="Contoh: Nike SEA / Tokopedia"
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1">PIC / Nama Kontak:</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Nama Lengkap"
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Email Bisnis Resmi:</label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 mb-1">Ekspektasi Budget:</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                  >
                    <option>Rp 25.000.000 - Rp 50.000.000</option>
                    <option>Rp 50.000.000 - Rp 100.000.000</option>
                    <option>Rp 100.000.000 - Rp 250.000.000</option>
                    <option>&gt; Rp 250.000.000 (Omnichannel / Custom IP)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1">Format Utama:</label>
                  <select
                    value={formData.campaignType}
                    onChange={(e) => setFormData({ ...formData, campaignType: e.target.value })}
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                  >
                    <option>TikTok Viral Video Series</option>
                    <option>Instagram Investigative Carousel</option>
                    <option>Podcast Sponsorship & Live Take</option>
                    <option>YouTube Mini-Doc Co-Creation</option>
                    <option>Full Omnichannel 360 Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Objektif Utama Kampanye:</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ceritakan target audiens, peluncuran produk baru, atau KPI utama..."
                  className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-lime-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs rounded-xl shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>KIRIM BRIEF & MINTA RATE CARD LENGKAP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
