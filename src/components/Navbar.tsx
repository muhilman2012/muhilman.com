import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Server } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenDockerStack: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenDockerStack,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', href: '#beranda' },
    { id: 'layanan', label: 'Layanan', href: '#layanan' },
    { id: 'tentang-saya', label: 'Tentang Saya', href: '#tentang-saya' },
    { id: 'tech-stack', label: 'Tech Stack', href: '#tech-stack' },
    { id: 'pengalaman-solusi', label: 'Pengalaman & Solusi', href: '#pengalaman-solusi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8FAFC]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-[#F8FAFC]/80 backdrop-blur-sm'
      }`}
    >
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Lockup */}
        <a
          href="#beranda"
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-[#020617] flex flex-col justify-between p-1.5 shadow-sm transition-transform group-hover:scale-105 border border-slate-800">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
              <span className="w-2 h-2 rounded-full bg-[#eab308]"></span>
              <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
            </div>
            <span className="font-mono text-[11px] text-white leading-none px-0.5 font-bold">
              &gt;_
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[17px] font-bold text-[#0F172A] tracking-tight group-hover:text-[#0051d5] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[11px] bg-slate-200 text-slate-700 font-mono font-medium">
                {PERSONAL_INFO.domain}
              </span>
            </div>
            <span className="text-[12px] text-slate-500 font-medium hidden md:inline">
              {PERSONAL_INFO.title}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-200/80 text-[#0F172A]'
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-200/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Laravel & Docker Stack inspect shortcut */}
          <button
            onClick={onOpenDockerStack}
            title="Lihat Arsitektur Docker & Laravel 11"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all border border-slate-750 shadow-sm"
          >
            <Server className="w-3.5 h-3.5 text-blue-400" />
            <span>Laravel+Docker Stack</span>
          </button>

          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#0051d5] text-white text-sm font-semibold tracking-wide hover:bg-blue-700 active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(0,81,213,0.25)]"
          >
            Hubungi Saya
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8FAFC] border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
          <div className="p-2 mb-2 bg-slate-100 rounded-lg flex items-center justify-between">
            <span className="text-xs font-mono text-slate-600">muhilman.com v4.2</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDockerStack();
              }}
              className="text-xs font-semibold text-blue-600 flex items-center gap-1"
            >
              <Terminal className="w-3 h-3" /> Stack Config
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-lg bg-[#0051d5] text-white text-sm font-semibold text-center shadow-md"
            >
              Hubungi Saya Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
