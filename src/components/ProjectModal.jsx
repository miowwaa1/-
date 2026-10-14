import React, { useEffect } from 'react';
import { X, Calendar, Wrench, CheckCircle2, TrendingUp, Layers, ChevronRight, FileImage } from 'lucide-react';

export default function ProjectModal({ project, onClose, onSelectNext, onSelectPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-slate-200 flex items-start justify-between gap-4 z-20">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                Project #{project.id}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {project.tool}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.period}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="닫기"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">

          {/* Visual Preview Banner & File Replacement Notice */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative group">
            <img
              src={project.placeholderImage}
              alt={project.title}
              className="w-full h-auto max-h-[380px] object-cover mx-auto"
            />
            {/* File Notice Overlay */}
            <div className="bg-slate-900/90 text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <FileImage className="w-4 h-4 text-indigo-400" />
                <span>
                  교체 대상 에셋 경로: <code className="bg-white/20 px-1.5 py-0.5 rounded text-amber-300 font-mono font-bold">public/images/projects/{project.imageFileName}</code>
                </span>
              </div>
              <span className="text-slate-300">
                실제 PNG/JPG 이미지 배치 시 자동 교체 반영
              </span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 text-center">
                <span className="text-xs text-slate-500 font-medium block">{metric.label}</span>
                <span className="text-lg sm:text-xl font-extrabold text-indigo-700 mt-1 block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Background & Purpose */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h4 className="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                프로젝트 추진 배경 및 문제점
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.details.background}
              </p>
            </div>

            {/* Role & Contribution */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h4 className="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-indigo-600" />
                본인 담당 역할 및 기여도
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.details.role}
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              단계별 수행 프로세스
            </h4>
            <div className="space-y-2.5">
              {project.details.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantitative & Qualitative Achievement */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5">
            <h4 className="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              주요 정량·정성적 성과
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-medium">
              {project.details.achievement}
            </p>
          </div>

          {/* Tools Used */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">활용 소프트웨어 및 태그</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  #{t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Navigation */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onSelectPrev}
              className="text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
            >
              ← 이전 프로젝트
            </button>
            <button
              onClick={onSelectNext}
              className="text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
            >
              다음 프로젝트 →
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
}
