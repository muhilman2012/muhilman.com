import React from 'react';
import { Send, MessageSquareCode, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CtaSectionProps {
  onOpenConsultation: (subject?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="w-full py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl bg-[#020617] text-white p-8 md:p-14 overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient Glows */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-blue-600/25 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-wider text-slate-200 font-semibold">
                Siap Berkolaborasi
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Punya Masalah Performa Server atau Butuh Rekayasa Web Handal?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Mari diskusikan kebutuhan infrastruktur Anda. Baik optimasi sistem yang sudah berjalan, audit performa sebelum traffic spike, maupun pengembangan aplikasi baru dari nol.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={() => onOpenConsultation('Konsultasi Masalah Performa Server & Web')}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#0051d5] text-white text-sm font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Brief via Form / Email</span>
              </button>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold backdrop-blur-md transition-all active:scale-[0.98] border border-white/10"
              >
                <MessageSquareCode className="w-4 h-4 text-emerald-400" />
                <span>Diskusi Cepat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
