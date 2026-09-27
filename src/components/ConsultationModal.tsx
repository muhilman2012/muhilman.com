import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquareCode, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(initialSubject || 'Jasa Pembuatan Aplikasi Web (Laravel 11)');
  const [urgency, setUrgency] = useState<'normal' | 'emergency'>('normal');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setTopic(initialSubject);
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent, via: 'email' | 'whatsapp') => {
    e.preventDefault();

    const formattedBody = `Halo Mas Muhammad Hilman,\n\nSaya: ${name || 'Klien'}\nEmail: ${email || '-'}\nTopik: ${topic}\nTingkat Urgensi: ${urgency === 'emergency' ? '🚨 KRITIS / BUTUH SEGERA' : 'Standar'}\n\nDetail Kebutuhan / Masalah:\n${message || 'Saya ingin berdiskusi mengenai proyek/server.'}\n\nTerima kasih.`;

    if (via === 'whatsapp') {
      const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(formattedBody)}`;
      window.open(waUrl, '_blank');
    } else {
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[${urgency === 'emergency' ? 'URGENT' : 'INQUIRY'}] ${topic} - ${name || 'Klien'}`
      )}&body=${encodeURIComponent(formattedBody)}`;
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-bold">
              Hubungi &amp; Konsultasi Teknis
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              Diskusi Proyek atau Triage Server
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#0F172A]">
              Permintaan Konsultasi Diteruskan
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Pesan Anda telah disiapkan. Mas Hilman biasanya merespons dalam waktu kurang dari 2 jam (atau &lt; 45 menit untuk insiden server kritis).
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#0051d5] text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Kembali ke Portfolio
            </button>
          </div>
        ) : (
          <form className="p-6 space-y-4 text-sm" onSubmit={(e) => handleSubmit(e, 'email')}>
            {/* Urgency Alert toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-slate-700">
                  Apakah server Anda sedang mengalami down/crash 502?
                </span>
              </div>
              <button
                type="button"
                onClick={() => setUrgency(urgency === 'emergency' ? 'normal' : 'emergency')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  urgency === 'emergency'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {urgency === 'emergency' ? '🚨 Prioritas Darurat' : 'Standar'}
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Nama Lengkap / Tim
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Eko Pratama (Tech Lead)"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Anda
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@perusahaan.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Topik Kebutuhan
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none text-slate-900 bg-white"
              >
                <option value="Jasa Pembuatan Aplikasi Web (Laravel 11)">
                  Jasa Pembuatan Aplikasi Web (Laravel 11 / Vue / Tailwind)
                </option>
                <option value="Diskusi Teknis & Troubleshooting (Database / Bug)">
                  Diskusi Teknis &amp; Troubleshooting (Database / Bug)
                </option>
                <option value="Audit & Konfigurasi Server (Docker / Nginx / Linux)">
                  Audit &amp; Konfigurasi Server (Docker / Nginx / Linux)
                </option>
                <option value="Optimasi Kecepatan & Core Web Vitals">
                  Optimasi Kecepatan &amp; Core Web Vitals
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Ringkasan Kebutuhan / Gejala Masalah
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan spesifikasi aplikasi yang ingin dibangun, atau gejala server lambat / error..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none text-slate-900"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-[#0051d5] text-white text-xs font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Kirim via Email</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleSubmit(e, 'whatsapp')}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Kirim via WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
