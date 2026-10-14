import React, { useState } from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import ProfileSection from './components/ProfileSection';
import ProjectSection from './components/ProjectSection';
import HobbySection from './components/HobbySection';
import SitemapSection from './components/SitemapSection';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Floating Navigation Bar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Single-page Layout (Intro -> Profile -> Project -> Hobby -> Sitemap) */}
      <main className="flex-1 w-full">
        {/* ① Intro (Spline 3D + '정민서의 포토폴리오' Overlay) */}
        <IntroSection />

        {/* ② Profile (Basic Info, Self-intro, GTQ/정보처리기사, Skills) */}
        <ProfileSection />

        {/* ③ Project (5 Horizontal Banners, Filename placeholder, Modal, Skeleton UI) */}
        <ProjectSection />

        {/* ④ Hobby (Balanced Lifestyle & Productivity) */}
        <HobbySection />

        {/* ⑤ Sitemap & Resume (PDF Download Button, Complete Sitemap) */}
        <SitemapSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Standalone Printable & Previewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
