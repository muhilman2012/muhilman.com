import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Timer,
  Terminal,
  Zap,
  Play,
  RotateCcw,
  Sparkles,
  Layers,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenDockerStack: () => void;
}

interface CommandLog {
  type: 'cmd' | 'output' | 'system';
  text?: string;
  data?: any;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenDockerStack,
}) => {
  const [terminalLogs, setTerminalLogs] = useState<CommandLog[]>([
    { type: 'system', text: '# Muhammad Hilman — Diagnostic Engine v4.2' },
    { type: 'cmd', text: 'stack-inspect --target=production-env' },
    {
      type: 'output',
      data: {
        type: 'specs',
        os: 'Ubuntu 24.04 LTS (x86_64)',
        runtime: 'PHP 8.3-FPM + Swoole Engine',
        proxy: 'Nginx 1.26 + Redis Cache Layer',
        container: 'Docker Swarm / Compose Cluster',
      },
    },
    { type: 'cmd', text: 'benchmark --requests=100000 --concurrency=250' },
    {
      type: 'output',
      data: {
        type: 'benchmark',
        latency: '12.8ms',
        failedReq: '0 Failed Req (100% OK)',
        percent: 94,
      },
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isRunningBench, setIsRunningBench] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setTerminalLogs([
        { type: 'system', text: '# Muhammad Hilman — Diagnostic Engine v4.2' },
      ]);
      setInputVal('');
      return;
    }

    if (trimmed.toLowerCase() === 'hire') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'cmd', text: 'hire' },
        {
          type: 'system',
          text: `[SUCCESS] Membuka sesi konsultasi bersama Muhammad Hilman... Hubungi email: ${PERSONAL_INFO.email} atau WhatsApp.`,
        },
      ]);
      setInputVal('');
      setTimeout(() => onOpenConsultation('Inquiry Rekayasa & Konsultasi Teknis'), 600);
      return;
    }

    if (trimmed.toLowerCase() === 'docker ps' || trimmed.toLowerCase() === 'docker-ps') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'cmd', text: 'docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"' },
        {
          type: 'output',
          data: {
            type: 'docker',
            containers: [
              { name: 'laravel11_app', status: 'Up 42 days (healthy)', ports: '9000/tcp (PHP 8.3 FPM)' },
              { name: 'laravel11_nginx', status: 'Up 42 days', ports: '0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp' },
              { name: 'laravel11_postgres', status: 'Up 42 days', ports: '5432/tcp (PostgreSQL 16)' },
              { name: 'laravel11_redis', status: 'Up 42 days', ports: '6379/tcp (Cache & Horizon)' },
              { name: 'laravel11_worker', status: 'Up 42 days', ports: 'Artisan queue worker x4' },
            ],
          },
        },
      ]);
      setInputVal('');
      return;
    }

    if (trimmed.toLowerCase().includes('benchmark')) {
      setIsRunningBench(true);
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'cmd', text: 'benchmark --requests=100000 --concurrency=250' },
        { type: 'system', text: '[STRESS-TEST] Mengirimkan 100.000 load request dengan concurrency 250...' },
      ]);

      setTimeout(() => {
        const randLatency = (10 + Math.random() * 4).toFixed(1);
        setTerminalLogs((prev) => [
          ...prev,
          {
            type: 'output',
            data: {
              type: 'benchmark',
              latency: `${randLatency}ms`,
              failedReq: '0 Failed Req (100% OK)',
              percent: 96,
            },
          },
        ]);
        setIsRunningBench(false);
      }, 900);
      setInputVal('');
      return;
    }

    if (trimmed.toLowerCase() === 'stack-inspect') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'cmd', text: 'stack-inspect --target=production-env' },
        {
          type: 'output',
          data: {
            type: 'specs',
            os: 'Ubuntu 24.04 LTS (x86_64)',
            runtime: 'PHP 8.3-FPM + Swoole Engine',
            proxy: 'Nginx 1.26 + Redis Cache Layer',
            container: 'Docker Swarm / Compose Cluster',
          },
        },
      ]);
      setInputVal('');
      return;
    }

    // Default response
    setTerminalLogs((prev) => [
      ...prev,
      { type: 'cmd', text: trimmed },
      {
        type: 'system',
        text: `Command '${trimmed}' executed. Coba: 'benchmark', 'docker-ps', 'stack-inspect', 'hire', atau 'clear'.`,
      },
    ]);
    setInputVal('');
  };

  return (
    <section id="beranda" className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
              </span>
              <span className="text-sm text-[#0F172A] font-semibold tracking-tight">
                Tersedia untuk Konsultasi &amp; Kolaborasi Proyek Q2/Q3
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Solusi Web Cepat, Tangguh &amp; Konsultasi Teknis
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Full-Stack Developer &amp; System Administrator (4+ Tahun Pengalaman) berfokus membangun arsitektur aplikasi berkinerja tinggi, otomasi infrastruktur server andal, serta pemecahan masalah (<span className="font-mono text-[#0F172A] text-sm font-semibold">troubleshooting</span>) kode yang kompleks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenConsultation('Konsultasi Masalah Aplikasi')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#0051d5] text-white text-sm font-bold tracking-wide shadow-md hover:bg-blue-700 transition-all hover:-translate-y-0.5"
              >
                <Zap className="w-5 h-5 fill-current" />
                Konsultasi Masalah Aplikasi
              </button>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-[#0F172A] text-sm font-semibold hover:bg-slate-100 transition-all shadow-sm"
              >
                <Layers className="w-5 h-5 text-slate-500" />
                Lihat Layanan
              </a>
            </div>

            {/* 3 Key Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4">
              {/* Stat 1 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0051d5] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#0F172A] leading-tight">
                    {PERSONAL_INFO.uptimeRecord}
                  </span>
                  <span className="text-[12px] text-slate-500 font-medium">
                    Uptime Track Record
                  </span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#0F172A] leading-tight">
                    {PERSONAL_INFO.experienceYears}
                  </span>
                  <span className="text-[12px] text-slate-500 font-medium">
                    Laravel &amp; SysAdmin
                  </span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Timer className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#0F172A] leading-tight">
                    {PERSONAL_INFO.responseTime}
                  </span>
                  <span className="text-[12px] text-slate-500 font-medium">
                    Respon Tanggap Server
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Terminal Visual Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="w-full rounded-2xl bg-[#020617] text-slate-100 shadow-2xl overflow-hidden border border-slate-800">
              {/* macOS Window Controls Bar */}
              <div className="h-10 bg-[#0b1120] px-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#eab308]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]"></span>
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    hilman@edge-srv-01:~
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    active
                  </span>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-3 max-h-[380px] overflow-y-auto">
                {terminalLogs.map((log, idx) => {
                  if (log.type === 'system') {
                    return (
                      <div key={idx} className="text-slate-400 font-medium">
                        {log.text}
                      </div>
                    );
                  }
                  if (log.type === 'cmd') {
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-[#22c55e] font-bold">$</span>
                        <span className="text-white font-medium">{log.text}</span>
                      </div>
                    );
                  }
                  if (log.type === 'output' && log.data) {
                    if (log.data.type === 'specs') {
                      return (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-white/5 space-y-1.5 text-slate-300 border border-white/5"
                        >
                          <div className="flex justify-between">
                            <span className="text-slate-400">Kernel / OS:</span>
                            <span className="text-white font-semibold">
                              {log.data.os}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Backend Runtime:</span>
                            <span className="text-white font-semibold">
                              {log.data.runtime}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Reverse Proxy:</span>
                            <span className="text-white font-semibold">
                              {log.data.proxy}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Containerization:</span>
                            <span className="text-white font-semibold">
                              {log.data.container}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    if (log.data.type === 'benchmark') {
                      return (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-blue-500/15 space-y-2 border border-blue-500/30"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-blue-300 font-bold flex items-center gap-1.5">
                              <Zap className="w-3.5 h-3.5 text-blue-400" /> Latency: {log.data.latency} avg
                            </span>
                            <span className="text-emerald-400 font-bold">
                              {log.data.failedReq}
                            </span>
                          </div>
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-blue-400 h-full rounded-full transition-all duration-500"
                              style={{ width: `${log.data.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    }
                    if (log.data.type === 'docker') {
                      return (
                        <div key={idx} className="p-3 rounded-lg bg-white/5 space-y-2 text-slate-300 text-[11px]">
                          <div className="text-blue-400 font-bold flex items-center gap-1">
                            <Layers className="w-3 h-3" /> Active Docker Containers:
                          </div>
                          {log.data.containers.map((c: any, i: number) => (
                            <div key={i} className="flex justify-between border-b border-white/5 pb-1">
                              <span className="text-emerald-400 font-bold">{c.name}</span>
                              <span className="text-slate-400">{c.status}</span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                  }
                  return null;
                })}

                <div className="flex items-center gap-2 text-slate-400 pt-1">
                  <span className="text-emerald-400">&gt;</span>
                  <span className="italic text-slate-400">
                    System ready for heavy traffic loads. Type 'hire' to start.
                  </span>
                  <span className="w-2 h-4 bg-white animate-pulse"></span>
                </div>
                <div ref={terminalEndRef}></div>
              </div>

              {/* Interactive Terminal Quick Commands Bar */}
              <div className="p-3 bg-[#070d19] border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-400 mr-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Coba:
                </span>
                <button
                  onClick={() => handleRunCommand('benchmark')}
                  disabled={isRunningBench}
                  className="px-2 py-1 rounded bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 font-mono text-[11px] transition-colors border border-blue-500/30"
                >
                  benchmark
                </button>
                <button
                  onClick={() => handleRunCommand('docker ps')}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px] transition-colors border border-slate-700"
                >
                  docker ps
                </button>
                <button
                  onClick={() => handleRunCommand('stack-inspect')}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px] transition-colors border border-slate-700"
                >
                  stack-inspect
                </button>
                <button
                  onClick={() => handleRunCommand('hire')}
                  className="px-2 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-mono text-[11px] transition-colors border border-emerald-500/30 font-bold"
                >
                  hire
                </button>
                <button
                  onClick={() => handleRunCommand('clear')}
                  className="px-1.5 py-1 rounded text-slate-500 hover:text-slate-300 text-[11px] transition-colors ml-auto"
                  title="Clear terminal"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>

              {/* Command Input Field */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRunCommand(inputVal);
                }}
                className="px-3 py-2 bg-[#020617] border-t border-slate-800/60 flex items-center gap-2"
              >
                <span className="font-mono text-xs text-emerald-400 font-bold">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ketik command (contoh: hire, benchmark, docker ps)..."
                  className="w-full bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-none"
                />
              </form>
            </div>

            {/* Floating Micro Card Overlay */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-xl">
              <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#0F172A] font-bold">24/7 Monitoring Server</p>
                <p className="text-[11px] text-slate-500">Auto Telegram Alert &amp; Fallback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
