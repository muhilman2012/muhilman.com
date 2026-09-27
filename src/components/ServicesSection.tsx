import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Bug, Server } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-7 h-7" />;
      case 'troubleshoot':
        return <Bug className="w-7 h-7" />;
      case 'dns':
      default:
        return <Server className="w-7 h-7" />;
    }
  };

  return (
    <section id="layanan" className="w-full py-20 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#0051d5] font-bold">
              Spesialisasi &amp; Solusi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
              Layanan Rekayasa &amp; Konsultasi Teknis
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 max-w-md">
            Dari arsitektur backend, otomasi deployment, hingga penanganan insiden darurat produksi secara cepat dan terukur.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
            >
              <div>
                {/* Service Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                    service.id === 'web-dev'
                      ? 'bg-blue-50 text-[#0051d5] group-hover:bg-[#0051d5] group-hover:text-white'
                      : service.id === 'troubleshoot'
                      ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                      : 'bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white'
                  }`}
                >
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-8 text-sm text-[#0F172A] font-medium">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          service.id === 'web-dev'
                            ? 'text-[#0051d5]'
                            : service.id === 'troubleshoot'
                            ? 'text-orange-600'
                            : 'text-slate-800'
                        }`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectService(service)}
                className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all ${
                  service.id === 'web-dev'
                    ? 'text-[#0051d5] hover:text-blue-700'
                    : service.id === 'troubleshoot'
                    ? 'text-orange-600 hover:text-orange-700'
                    : 'text-[#0F172A] hover:text-slate-700'
                }`}
              >
                <span>{service.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
