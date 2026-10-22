'use client';

import React, { useState } from 'react';
import { Plus, Trash2, Check, ExternalLink, Globe, Rss } from 'lucide-react';
import { NEWS_SOURCES, NewsSource } from '@/data/redaksiData';

const SOURCES_STORAGE_KEY = 'indonesia_hari_ini_sources_v1';

export const SumberBeritaView: React.FC = () => {
  const [sources, setSources] = useState<NewsSource[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(SOURCES_STORAGE_KEY) || localStorage.getItem('pansos_redaksi_sources_v1');
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.warn('Sources storage load err', e);
      }
    }
    return NEWS_SOURCES;
  });
  const [newSourceName, setNewSourceName] = useState('');
  const [newSourceUrl, setNewSourceUrl] = useState('');
  const [newSourceLang, setNewSourceLang] = useState<'ID' | 'EN'>('ID');

  const updateSources = (updated: NewsSource[]) => {
    setSources(updated);
    try {
      localStorage.setItem(SOURCES_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Sources storage save err', e);
    }
  };

  const toggleSource = (id: string) => {
    const updated = sources.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s));
    updateSources(updated);
  };

  const handleAddSource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSourceName.trim() || !newSourceUrl.trim()) return;

    const newEntry: NewsSource = {
      id: `src-${Date.now()}`,
      name: newSourceName.trim(),
      lang: newSourceLang,
      url: newSourceUrl.trim(),
      statusText: '0 berita / 0 lolos (7 hari)',
      lastChecked: 'baru ditambahkan',
      enabled: true
    };

    updateSources([newEntry, ...sources]);
    setNewSourceName('');
    setNewSourceUrl('');
  };

  const deleteSource = (id: string) => {
    updateSources(sources.filter((s) => s.id !== id));
  };

  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
      {/* Header (Matching Screenshot 5) */}
      <div className="space-y-1 border-b border-zinc-800/80 pb-5">
        <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold">
          ADMIN
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight text-white leading-none">
          SUMBER BERITA
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl pt-1">
          Tempel URL RSS/Atom apa saja. Scout akan mengambilnya di putaran berikutnya.
        </p>
      </div>

      {/* Add New Source Bar (Matching Screenshot 5) */}
      <form onSubmit={handleAddSource} className="p-4 rounded-2xl bg-[#0f1117] border border-zinc-800 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs font-mono">
          <div className="sm:col-span-3">
            <input
              type="text"
              value={newSourceName}
              onChange={(e) => setNewSourceName(e.target.value)}
              placeholder="Nama (mis. Kompas Tekno)"
              className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[#e2ff3b]"
            />
          </div>

          <div className="sm:col-span-4">
            <input
              type="url"
              value={newSourceUrl}
              onChange={(e) => setNewSourceUrl(e.target.value)}
              placeholder="https://contoh.com/feed"
              className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[#e2ff3b]"
            />
          </div>

          <div className="sm:col-span-2">
            <select
              value={newSourceLang}
              onChange={(e) => setNewSourceLang(e.target.value as any)}
              className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-[#e2ff3b]"
            >
              <option value="ID">Indonesia</option>
              <option value="EN">English</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <select className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-[#e2ff3b]">
              <option>RSS/Atom</option>
              <option>Google Trends</option>
            </select>
          </div>

          <div className="sm:col-span-1">
            <button
              type="submit"
              className="w-full py-2.5 bg-[#e2ff3b] hover:bg-[#d4f52f] text-black font-bold font-mono text-xs rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center"
            >
              Tambah
            </button>
          </div>
        </div>
      </form>

      {/* Sources Toggle List (Matching Screenshot 5) */}
      <div className="rounded-2xl bg-[#0f1117] border border-zinc-800 divide-y divide-zinc-800/80 overflow-hidden shadow-xl">
        {sources.map((source) => (
          <div
            key={source.id}
            className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
          >
            <div className="flex items-start sm:items-center gap-4">
              {/* Toggle Switch */}
              <button
                type="button"
                onClick={() => toggleSource(source.id)}
                className={`w-11 h-6 rounded-full transition-colors relative shrink-0 mt-1 sm:mt-0 ${
                  source.enabled ? 'bg-[#e2ff3b]' : 'bg-zinc-800'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full bg-black shadow-md block transition-transform absolute top-0.5 ${
                    source.enabled ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white font-mono">{source.name}</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-zinc-800 text-zinc-400 border border-zinc-700">
                    {source.lang}
                  </span>
                  {source.isTrends && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                      TRENDS
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-zinc-500 truncate max-w-xs sm:max-w-md">
                  {source.url}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-5 text-xs font-mono text-zinc-400 pl-14 sm:pl-0">
              <div className="text-right">
                <div className="text-zinc-300 font-medium">{source.statusText}</div>
                <div className="text-[11px] text-zinc-500">{source.lastChecked}</div>
              </div>

              <button
                onClick={() => deleteSource(source.id)}
                className="p-2 text-zinc-600 hover:text-rose-400 transition-colors rounded-lg hover:bg-zinc-900"
                title="Hapus Sumber"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
