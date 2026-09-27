import React from 'react';
import { Compass, Flame, Shield, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const RunnerPhilosophySection: React.FC = () => {
  return (
    <section id="tentang-saya" className="w-full py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
              <img
                src={PERSONAL_INFO.marathonPhoto}
                alt="Muhammad Hilman berlari marathon dengan pakaian adat etnik nusantara dan ikat kepala tradisional, melambaikan tangan saat kompetisi lari jarak jauh di Jakarta"
                referrerPolicy="no-referrer"
                className="w-full h-[520px] object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] uppercase tracking-wider text-blue-300 font-bold mb-1">
                  Dedikasi &amp; Disiplin
                </span>
                <p className="text-xl font-bold leading-snug">Active Runner &amp; Builder</p>
                <p className="text-xs text-slate-300 font-mono mt-0.5">
                  {PERSONAL_INFO.marathonLocation} • {PERSONAL_INFO.marathonBib}
                </p>
              </div>
            </div>

            {/* Micro Badge Floating */}
            <div className="absolute -top-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-2.5 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-lg">
              <Award className="w-5 h-5 text-orange-600" />
              <span className="text-xs font-bold text-[#0F172A]">21K Half Marathoner</span>
            </div>
          </div>

          {/* Endurance Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 pl-0 lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-900 border border-orange-200 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-orange-600" />
              <span>Filosofi Keandalan &amp; Stamina</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Ketahanan di Lintasan Lari, Keandalan di Server Produksi
            </h2>

            {/* Highlighted Quote Box */}
            <div className="p-5 rounded-2xl bg-white border-l-4 border-[#0051d5] shadow-sm border border-slate-200/80">
              <p className="text-base sm:text-lg text-[#0F172A] italic font-medium leading-relaxed">
                “Konsistensi adalah kuncinya — baik saat menjaga latency 15ms pada jam sibuk traffic tinggi, maupun saat menyelesaikan 21 kilometer tanpa henti.”
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Menjalankan infrastruktur IT berskala besar memiliki analogi identik dengan lari jarak jauh: dibutuhkan kesabaran menganalisa metrik, disiplin dalam pemeliharaan berkala, serta ketenangan ketika menghadapi lonjakan beban yang tak terduga. Saya mengaplikasikan pola pikir atlet lari ke dalam setiap baris kode dan arsitektur server yang saya bangun.
            </p>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-3.5 w-full pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                <span className="text-2xl font-extrabold text-[#0051d5] block font-mono">
                  21K
                </span>
                <span className="text-[12px] text-slate-500 font-medium">
                  Half Marathon
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                <span className="text-2xl font-extrabold text-orange-600 block font-mono">
                  5:30
                </span>
                <span className="text-[12px] text-slate-500 font-medium">
                  Target Pace /KM
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                <span className="text-2xl font-extrabold text-[#0F172A] block font-mono">
                  100%
                </span>
                <span className="text-[12px] text-slate-500 font-medium">
                  Delivery Dedication
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
