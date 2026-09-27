import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { RunnerPhilosophySection } from './components/RunnerPhilosophySection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TechStackSection } from './components/TechStackSection';
import { TestimonialSection } from './components/TestimonialSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { LaravelDockerModal } from './components/LaravelDockerModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceItem } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSubject, setConsultationSubject] = useState<string | undefined>();
  const [isDockerModalOpen, setIsDockerModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'layanan', 'tentang-saya', 'tech-stack', 'pengalaman-solusi'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (subject?: string) => {
    setConsultationSubject(subject);
    setIsConsultationOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setConsultationSubject(`Inquiry: ${service.title}`);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#0051d5] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenDockerStack={() => setIsDockerModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pt-20">
        <HeroSection
          onOpenConsultation={handleOpenConsultation}
          onOpenDockerStack={() => setIsDockerModalOpen(true)}
        />

        <ServicesSection onSelectService={handleSelectService} />

        <RunnerPhilosophySection />

        <CaseStudiesSection />

        <TechStackSection />

        <TestimonialSection />

        <CtaSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LaravelDockerModal
        isOpen={isDockerModalOpen}
        onClose={() => setIsDockerModalOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialSubject={consultationSubject}
      />
    </div>
  );
}
