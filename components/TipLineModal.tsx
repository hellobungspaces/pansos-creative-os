'use client';

import React, { useState } from 'react';
import { X, ShieldAlert, Lock, CheckCircle2, Paperclip, Send } from 'lucide-react';

interface TipLineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TipLineModal: React.FC<TipLineModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState('Skandal Startup / Korporasi');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [contact, setContact] = useState('');
  const [fileAttached, setFileAttached] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg bg-[#0e1015] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 bg-zinc-950/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-mono font-bold text-white uppercase">
                ENCRYPTED WHISTLEBLOWER TIP LINE
              </h3>
              <p className="text-[11px] font-mono text-zinc-400">
                Kirim dokumen, isu kultural, atau investigasi eksklusif
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
              <h4 className="text-base font-bold text-white">Laporan Berhasil Terkirim Secara Rahasia</h4>
              <p className="text-xs font-mono text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Metadata koneksi Anda telah diacak. Tim redaksi investigasi kami akan memverifikasi dokumen ini dalam 24 jam.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                  onClose();
                }}
                className="px-5 py-2 bg-zinc-900 border border-zinc-700 text-xs font-mono text-white rounded-lg hover:bg-zinc-800"
              >
                Tutup Jendela
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anonymity Banner */}
              <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Mode Anonimitas Penuh (No IP Log)</span>
                </div>
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded accent-lime-400"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">Kategori Cerita:</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-lime-400"
                >
                  <option>Skandal Startup / Korporasi</option>
                  <option>Eksploitasi Karyawan & Agensi</option>
                  <option>Anomali Algoritma & Scam Digital</option>
                  <option>Fenomena Urban & Subkultur Menarik</option>
                  <option>Lainnya (Bocoran Dokumen)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">Kronologi / Ringkasan Cerita:</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Jelaskan detail apa yang terjadi, siapa pihak terkait, dan bukti apa yang Anda miliki..."
                  className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                />
              </div>

              {/* File Attachment Mock */}
              <div>
                <button
                  type="button"
                  onClick={() => setFileAttached(!fileAttached)}
                  className={`w-full py-2.5 px-3 border border-dashed rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-colors ${
                    fileAttached
                      ? 'border-lime-400/60 bg-lime-400/5 text-lime-400'
                      : 'border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600'
                  }`}
                >
                  <Paperclip className="w-4 h-4" />
                  <span>{fileAttached ? '✓ 1 Berkas Terlampir (invoice_proof.pdf)' : 'Lampirkan Bukti Dokumen/Screenshot (Opsional)'}</span>
                </button>
              </div>

              {/* Contact (if not anonymous) */}
              {!isAnonymous && (
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Kontak Signal / Telegram / Email:</label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="@username atau email untuk verifikasi..."
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                  />
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>KIRIM BOCORAN TERENKRIPSI</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
