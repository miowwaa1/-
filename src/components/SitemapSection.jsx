import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FileDown, 
  Printer, 
  MapPin, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function SitemapSection({ onOpenResumeModal }) {
  const { sitemap, personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="sitemap" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 1. Resume Download Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-900/80 via-slate-800 to-indigo-950 rounded-3xl p-8 sm:p-12 border border-indigo-500/30 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>검증된 자격과 성과를 담은 지원 서류</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                정민서 지원자의 <span className="text-indigo-400">공식 이력서(Resume)</span>
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                인사담당자분께서 오프라인 검토 및 사내 보고용으로 간편히 확인하실 수 있도록 정돈된 PDF 이력서를 제공합니다.
              </p>
            </div>

            {/* Download Buttons Group (요구사항: Resume PDF 다운로드 버튼 배치) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all hover:scale-102 active:scale-98 shadow-sm"
              >
                <Printer className="w-4 h-4 text-slate-300" />
                <span>웹에서 미리보기 & 인쇄</span>
              </button>

              <a
                href="/정민서_이력서.pdf"
                download="정민서_이력서.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <FileDown className="w-5 h-5 animate-bounce" />
                <span>Resume PDF 즉시 다운로드</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Sitemap Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm tracking-wider uppercase mb-6">
            <MapPin className="w-4 h-4" />
            <span>Website Sitemap (전체 사이트맵)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sitemap.map((item, index) => (
              <a
                key={item.hash}
                href={item.hash}
                className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-indigo-300 font-mono mb-2">
                    <span>STEP 0{index + 1}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-white" />
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-500 group-hover:text-indigo-400 transition-colors">
                  {item.hash}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 3. Contact & Recruit Inquiry Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              채용 및 면접 관련 문의
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              언제든 편안하게 연락해 주시면 성실하고 신속하게 답변드리겠습니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>{personal.email}</span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>

            <a
              href={`tel:${personal.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{personal.phone}</span>
            </a>
          </div>
        </div>

        {/* 4. Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Jeong Minseo. All rights reserved. 사무직 취업용 포트폴리오.</p>
          <div className="flex items-center gap-4">
            <a href="#intro" className="hover:text-slate-300 transition-colors">맨 위로 이동 ↑</a>
            <span>•</span>
            <span>React (Vite) + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
