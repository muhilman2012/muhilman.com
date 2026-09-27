import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  Terminal,
  Server,
  FileCode,
  Layers,
  Sparkles,
} from 'lucide-react';
import { LARAVEL_DOCKER_CODE } from '../data/portfolioData';

interface LaravelDockerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaravelDockerModal: React.FC<LaravelDockerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'compose' | 'dockerfile' | 'nginx' | 'guide'>('compose');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getCodeContent = () => {
    switch (activeTab) {
      case 'compose':
        return LARAVEL_DOCKER_CODE.dockerCompose;
      case 'dockerfile':
        return LARAVEL_DOCKER_CODE.dockerfile;
      case 'nginx':
        return LARAVEL_DOCKER_CODE.nginxConf;
      case 'guide':
        return `# 🚀 Quick Start Guide: Laravel 11 + Docker Stack

# 1. Clone repository atau siapkan project Laravel 11 Anda
git clone git@github.com:muhilman/laravel11-docker-boilerplate.git my-app
cd my-app

# 2. Setup Environment
cp .env.example .env

# 3. Jalankan Docker Compose (App, Nginx, PostgreSQL, Redis, Worker)
docker compose up -d --build

# 4. Generate Application Key & Jalankan Database Migration
docker compose exec app php artisan key:generate
docker compose exec app php artisan migrate --seed

# 5. Optimasi Production Caches
docker compose exec app php artisan config:cache
docker compose exec app php artisan route:cache
docker compose exec app php artisan view:cache

# 6. Cek Status Container
docker compose ps
# Output:
# laravel11_app       running  9000/tcp (PHP 8.3 FPM)
# laravel11_nginx     running  0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp
# laravel11_postgres  running  5432/tcp
# laravel11_redis     running  6379/tcp
# laravel11_worker    running  php artisan queue:work
`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const content = getCodeContent();
    const filename =
      activeTab === 'compose'
        ? 'docker-compose.yml'
        : activeTab === 'dockerfile'
        ? 'Dockerfile'
        : activeTab === 'nginx'
        ? 'nginx.conf'
        : 'SETUP_GUIDE.md';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0b1120] text-slate-100 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="h-14 px-5 bg-[#020617] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Stack Laravel 11 Terbaru + Docker Container
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
                  PHP 8.3 &amp; Alpine
                </span>
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls & Actions */}
        <div className="px-5 py-2.5 bg-[#070d19] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <button
              onClick={() => setActiveTab('compose')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'compose'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              docker-compose.yml
            </button>
            <button
              onClick={() => setActiveTab('dockerfile')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'dockerfile'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Dockerfile (PHP 8.3)
            </button>
            <button
              onClick={() => setActiveTab('nginx')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'nginx'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              nginx.conf
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'guide'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Quickstart Guide
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors border border-slate-700"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin File</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh File</span>
            </button>
          </div>
        </div>

        {/* Code Viewer */}
        <div className="flex-1 p-5 overflow-y-auto bg-[#020617] font-mono text-xs leading-relaxed text-slate-200">
          <pre className="overflow-x-auto whitespace-pre selection:bg-blue-500 selection:text-white">
            {getCodeContent()}
          </pre>
        </div>

        {/* Footer info note */}
        <div className="px-5 py-3 bg-[#070d19] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>
              Stack ini sudah siap produksi (Zero-Downtime, Multi-stage caching, FastCGI buffer tuning).
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white font-semibold"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
