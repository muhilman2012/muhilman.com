import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Network,
  Cpu,
  Layers,
  ArrowUpRight,
  X,
  Database,
  Terminal,
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

export const CaseStudiesSection: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="pengalaman-solusi" className="w-full py-20 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider text-[#0051d5] font-bold">
            Portofolio Terpilih
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
            Studi Kasus &amp; Bukti Solusi Nyata
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            Implementasi arsitektur perangkat lunak yang melayani ribuan pengguna aktif dengan waktu respons secepat kilat.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="flex flex-col rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Banner */}
              <div
                className={`h-48 p-6 flex flex-col justify-between text-white relative overflow-hidden bg-gradient-to-br ${study.gradient}`}
              >
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    {study.badgeType === 'live' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] animate-ping" />
                    )}
                    <span
                      className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-bold ${
                        study.badgeType === 'gov'
                          ? 'bg-[#0051d5] text-white'
                          : study.badgeType === 'live'
                          ? 'bg-white/15 backdrop-blur-md text-white border border-white/20'
                          : 'bg-[#22c55e] text-slate-950'
                      }`}
                    >
                      {study.badge}
                    </span>
                  </div>

                  {study.domainUrl ? (
                    <a
                      href={study.domainUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-white/20 hover:bg-white/40 text-white transition-colors"
                      title={`Buka ${study.domainUrl}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  )}
                </div>

                <div className="z-10">
                  <span className="text-xs text-slate-300 font-mono">
                    {study.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {study.title}
                  </h3>
                </div>

                {/* Decorative subtle texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats & Architecture detail button */}
                <div className="space-y-3">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex flex-col">
                      <span className="text-slate-400 font-mono text-[11px]">
                        {study.metric1.label}
                      </span>
                      <span className="font-bold text-[#0F172A] text-sm">
                        {study.metric1.value}
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-slate-400 font-mono text-[11px]">
                        {study.metric2.label}
                      </span>
                      <span
                        className={`font-bold text-sm ${
                          study.metric2.isHighlighted
                            ? 'text-emerald-600'
                            : 'text-[#0051d5]'
                        }`}
                      >
                        {study.metric2.value}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#0051d5]" />
                    <span>Bedah Arsitektur &amp; Solusi</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className={`p-6 bg-gradient-to-r ${selectedStudy.gradient} text-white flex items-center justify-between relative`}>
              <div>
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                  Detail Studi Kasus
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedStudy(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#0051d5]" /> Ringkasan Solusi
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {selectedStudy.architectureDetails.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-emerald-600" /> Desain Database &amp; Data Layer
                </h4>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {selectedStudy.architectureDetails.databaseDesign}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Network className="w-4 h-4 text-orange-600" /> Penanganan Throughput &amp; Traffic Spikes
                </h4>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {selectedStudy.architectureDetails.throughputSolution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-blue-600" /> Konfigurasi Nginx, Docker &amp; Runtime
                </h4>
                <p className="text-slate-700 leading-relaxed font-mono text-xs bg-slate-900 text-slate-200 p-3.5 rounded-lg">
                  {selectedStudy.architectureDetails.dockerNginxConfig}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="px-5 py-2.5 rounded-lg bg-[#0F172A] text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
                >
                  Tutup Tinjauan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
