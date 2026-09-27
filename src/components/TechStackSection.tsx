import React, { useState } from 'react';
import { CheckCircle2, Cpu, Award, Info, X } from 'lucide-react';
import { TECH_STACK, CERTIFICATIONS, TechItem } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);

  return (
    <section id="tech-stack" className="w-full py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Tech Stack Bento Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#0051d5] font-bold">
                Teknologi &amp; Alat Bantu
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
                Eksplorasi Tech Stack Handal
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-2">
                Daftar teknologi yang terbukti matang di lingkungan produksi dan saya operasikan setiap hari. Klik untuk melihat detail implementasi.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TECH_STACK.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTech(tech)}
                  className="p-4 rounded-xl bg-slate-100/80 hover:bg-white border border-slate-200 flex flex-col items-center justify-center text-center gap-2 transition-all hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-slate-200/80 flex items-center justify-center font-mono font-bold text-sm">
                    <span className={tech.codeColor}>{tech.shortCode}</span>
                  </div>
                  <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#0051d5] transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {tech.role}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Tech Quick Preview Bar */}
            {activeTech ? (
              <div className="p-4 rounded-xl bg-white border border-blue-200 shadow-sm flex items-start justify-between gap-3 text-sm animate-in fade-in">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[#0F172A]">{activeTech.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-[#0051d5] font-mono font-semibold">
                      {activeTech.role}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    {activeTech.productionUsage}
                  </p>
                </div>
                <button
                  onClick={() => setActiveTech(null)}
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
                <Info className="w-4 h-4 text-[#0051d5] shrink-0" />
                <span>
                  Tip: Klik salah satu badge teknologi di atas untuk melihat catatan implementasi arsitektur di sistem kami.
                </span>
              </div>
            )}
          </div>

          {/* Certifications & Standards Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-[#0051d5] font-bold">
                Standar Kompetensi
              </span>
              <h3 className="text-xl font-bold text-[#0F172A] mt-1 mb-5">
                Sertifikasi &amp; Keahlian Cloud
              </h3>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-colors"
                  >
                    <div
                      className={`w-9 h-9 rounded-lg ${cert.badgeBg} ${cert.badgeTextColor} flex items-center justify-center font-bold font-mono text-xs shrink-0 border border-current/10`}
                    >
                      {cert.badgeCode}
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-xs sm:text-sm font-bold text-[#0F172A] truncate">
                        {cert.name}
                      </span>
                      <span className="text-[11px] text-slate-500 truncate">
                        {cert.issuer}
                      </span>
                    </div>

                    <CheckCircle2 className="w-5 h-5 text-[#0051d5] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
