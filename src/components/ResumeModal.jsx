import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, FileDown, Mail, Phone, MapPin, Calendar, Award, CheckCircle2, UserCheck } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, certificates, skills, projects } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0 print:m-0 print:static">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm print:hidden"
        onClick={onClose}
      />

      {/* Resume Document Window */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 border border-slate-200 print:shadow-none print:border-none print:max-h-none print:overflow-visible flex flex-col">
        
        {/* Action Toolbar (Hidden in Print) */}
        <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 flex items-center justify-between gap-4 z-20 print:hidden rounded-t-2xl">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-sm">정민서 이력서 양식 (Resume Preview)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>즉시 인쇄 / PDF 저장</span>
            </button>
            <a
              href="/정민서_이력서.pdf"
              download="정민서_이력서.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>PDF 다운로드</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div className="p-8 sm:p-12 text-slate-800 space-y-8 print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                입사지원서 · 이력서
              </span>
              <h1 className="text-3xl font-extrabold text-slate-900 mt-1">
                {personal.name} <span className="text-lg font-normal text-slate-500">({personal.engName})</span>
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                지원 직무: {personal.jobTitle}
              </p>
            </div>
            
            <div className="text-xs text-slate-600 space-y-1 sm:text-right font-medium">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>생년월일: {personal.birth}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>연락처: {personal.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>이메일: {personal.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>주소지: {personal.location}</span>
              </div>
            </div>
          </div>

          {/* Section 1: Summary Statement */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1.5 border-b border-slate-200 mb-3">
              1. 자기소개 및 직무 포부
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              {personal.introduction}
            </p>
          </div>

          {/* Section 2: Certificates */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1.5 border-b border-slate-200 mb-3">
              2. 보유 자격사항
            </h2>
            <table className="w-full text-xs text-left border border-slate-200">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">자격증명</th>
                  <th className="p-2.5">발급기관</th>
                  <th className="p-2.5">취득년월</th>
                  <th className="p-2.5">실무 역량 내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {certificates.map((cert) => (
                  <tr key={cert.id} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-900">{cert.name}</td>
                    <td className="p-2.5 text-slate-600">{cert.issuer}</td>
                    <td className="p-2.5 font-mono text-slate-600">{cert.date}</td>
                    <td className="p-2.5 text-slate-600">{cert.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 3: Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1.5 border-b border-slate-200 mb-3">
              3. 실무 소프트웨어 역량
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skills.map((s) => (
                <div key={s.name} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">{s.koreanName}</span>
                    <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                      {s.levelLabel}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-snug">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Projects Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1.5 border-b border-slate-200 mb-3">
              4. 주요 업무 수행 프로젝트 (5선 요약)
            </h2>
            <div className="space-y-2.5">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl border border-slate-200 text-xs">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <div className="font-bold text-slate-900">
                      {proj.id}. {proj.title}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 shrink-0">{proj.period}</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed mb-1.5">{proj.summary}</p>
                  <div className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded inline-block">
                    주요 성과: {proj.details.achievement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pledge */}
          <div className="text-center pt-6 text-xs text-slate-500 border-t border-slate-200">
            위 기재 사항은 사실과 다름없음을 확인합니다.
            <div className="font-bold text-slate-800 text-sm mt-2">
              지원자 정 민 서
            </div>
          </div>

        </div>

        {/* Footer close */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-3 flex justify-end print:hidden rounded-b-2xl">
          <button
            onClick={onClose}
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
}
