import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Terminal, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [currentLatency, setCurrentLatency] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating real dynamic latency between 10ms - 15ms
      setCurrentLatency(Math.floor(10 + Math.random() * 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-slate-100/90 border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#020617] flex flex-col justify-between p-1.5 border border-slate-800 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#eab308]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                </div>
                <span className="font-mono text-[11px] text-white leading-none font-bold">
                  &gt;_
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#0F172A]">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {PERSONAL_INFO.domain}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              Full-Stack Engineer &amp; SysAdmin berpengalaman merancang sistem digital berperforma tinggi, skalabilitas cloud microservices, dan arsitektur web modern yang tangguh.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
              <span className="text-xs text-[#0F172A] font-semibold">
                Tersedia untuk Proyek &amp; Konsultasi
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs text-[#0F172A] font-bold uppercase tracking-wider">
              Navigasi Cepat
            </span>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <a
                href="#beranda"
                className="text-slate-600 hover:text-[#0051d5] transition-colors"
              >
                Beranda
              </a>
              <a
                href="#layanan"
                className="text-slate-600 hover:text-[#0051d5] transition-colors"
              >
                Layanan Rekayasa Web
              </a>
              <a
                href="#tentang-saya"
                className="text-slate-600 hover:text-[#0051d5] transition-colors"
              >
                Tentang &amp; Filosofi Kerja
              </a>
              <a
                href="#tech-stack"
                className="text-slate-600 hover:text-[#0051d5] transition-colors"
              >
                Teknologi &amp; Tools
              </a>
              <a
                href="#pengalaman-solusi"
                className="text-slate-600 hover:text-[#0051d5] transition-colors"
              >
                Studi Kasus &amp; Pengalaman
              </a>
            </div>
          </div>

          {/* Contact Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs text-[#0F172A] font-bold uppercase tracking-wider">
              Koneksi &amp; Jaringan
            </span>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-600 hover:text-[#0051d5] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-[#0051d5] transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-slate-500" />
                <span>github.com/muhilman</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-[#0051d5] transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-slate-500" />
                <span>linkedin.com/in/muhilman</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div className="flex items-center gap-2">
            <span>© 2025 Muhammad Hilman ({PERSONAL_INFO.domain}). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
              <span>Latency: &lt;{currentLatency}ms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
              <span>Production Uptime: 99.98%</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
