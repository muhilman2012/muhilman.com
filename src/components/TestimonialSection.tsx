import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-slate-100/70 border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="max-w-2xl flex flex-col gap-3">
            {/* 5 Stars */}
            <div className="flex items-center gap-1 text-[#eab308]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-base sm:text-lg text-[#0F172A] italic font-medium leading-relaxed">
              “Muhammad Hilman berhasil mengidentifikasi bottleneck arsitektur database kami dalam waktu kurang dari 4 jam dan mengamankan server dari spike 300% saat peluncuran event. Tenang, metodis, dan sangat solutif.”
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold font-mono text-sm">
                EK
              </div>
              <div>
                <p className="text-sm font-bold text-[#0F172A]">Eko Kurniadi</p>
                <p className="text-xs text-slate-500">
                  Lead Technical Architect, Digital Initiative
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-600 space-y-2 min-w-[240px]">
              <div className="flex justify-between gap-4">
                <span>Delivery Punctuality:</span>
                <span className="font-bold text-[#0F172A]">100% On-Time</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Bug Triage Time:</span>
                <span className="font-bold text-[#0051d5]">&lt; 45 Mins</span>
              </div>
              <div className="flex justify-between gap-4 border-t border-slate-200 pt-1.5 text-[11px] text-slate-400">
                <span>Client Satisfaction:</span>
                <span className="font-bold text-emerald-600">5.0 / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
