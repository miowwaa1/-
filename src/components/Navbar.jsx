import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, Sparkles, User, Briefcase, Heart, MapPin, Printer } from 'lucide-react';

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Intro', href: '#intro', icon: Sparkles },
    { name: 'Profile', href: '#profile', icon: User },
    { name: 'Project', href: '#project', icon: Briefcase },
    { name: 'Hobby', href: '#hobby', icon: Heart },
    { name: 'Sitemap', href: '#sitemap', icon: MapPin },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#intro"
          className="group flex items-center gap-2.5 text-slate-900 font-bold tracking-tight text-lg sm:text-xl"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center font-black text-sm shadow-md group-hover:scale-105 transition-transform">
            M
          </span>
          <span className="flex items-center gap-1.5">
            <span>정민서</span>
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200/60 px-2 py-0.5 rounded-full">
              사무직 포트폴리오
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 rounded-md transition-colors flex items-center gap-1.5"
              >
                <IconComponent className="w-3.5 h-3.5 opacity-70" />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all shadow-sm"
            title="이력서 미리보기 및 인쇄"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            이력서 열람
          </button>
          <a
            href="/정민서_이력서.pdf"
            download="정민서_이력서.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition-all shadow-sm hover:shadow-indigo-200"
          >
            <FileDown className="w-4 h-4" />
            Resume PDF 다운로드
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/정민서_이력서.pdf"
            download="정민서_이력서.pdf"
            className="inline-flex items-center p-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200"
            title="Resume PDF 다운로드"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="메뉴 토글"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-2 pb-5 shadow-lg">
          <div className="flex flex-col gap-1.5 pt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center gap-2.5"
              >
                <item.icon className="w-4 h-4 text-slate-400" />
                {item.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-slate-100 text-slate-700"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                이력서 양식 미리보기
              </button>
              <a
                href="/정민서_이력서.pdf"
                download="정민서_이력서.pdf"
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-indigo-600 text-white"
              >
                <FileDown className="w-4 h-4" />
                Resume PDF 다운로드
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
