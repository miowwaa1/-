import React, { useState } from 'react';
import { Calendar, ArrowRight, FileImage, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  const [imgSrc, setImgSrc] = useState(`/images/projects/${project.imageFileName}`);
  const [fallbackTriggered, setFallbackTriggered] = useState(false);

  const handleImageError = () => {
    if (!fallbackTriggered) {
      setFallbackTriggered(true);
      setImgSrc(project.placeholderImage);
    }
  };

  return (
    <article
      onClick={() => onOpenModal(project)}
      className="group bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-400/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col lg:flex-row items-stretch"
    >
      {/* Left: Image Placeholder Banner with File Name Annotation */}
      <div className="lg:w-5/12 bg-slate-900/5 relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 min-h-[220px] sm:min-h-[260px]">
        
        {/* Project Thumbnail Image */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-100">
          <img
            src={imgSrc}
            alt={project.title}
            onError={handleImageError}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 min-h-[200px]"
          />

          {/* Quick Hover Overlay */}
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
            <span className="px-4 py-2 rounded-xl bg-white/90 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              클릭하여 상세 정보 보기
            </span>
          </div>
        </div>

        {/* Top Floating Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wider shadow">
            Project 0{project.id}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-indigo-600/90 backdrop-blur-md text-white text-[11px] font-semibold shadow">
            {project.tool}
          </span>
        </div>

        {/* Bottom Filename Annotation (요구사항: 추후 대체하기 쉽도록 파일명 표기) */}
        <div className="bg-slate-900/90 backdrop-blur-sm text-white px-3.5 py-2 flex items-center justify-between text-xs z-10 border-t border-white/10">
          <div className="flex items-center gap-1.5 text-slate-300">
            <FileImage className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="text-[11px]">대체용 파일명:</span>
            <code className="text-amber-300 font-mono font-semibold text-[11px]">
              {project.imageFileName}
            </code>
          </div>
          <span className="text-[10px] text-slate-400 bg-white/10 px-1.5 py-0.5 rounded">
            Placeholder
          </span>
        </div>
      </div>

      {/* Right: Project Text Description */}
      <div className="lg:w-7/12 p-6 sm:p-7 flex flex-col justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                사무직 실무
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {project.period}
              </span>
            </div>
            <div className="text-xs text-indigo-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              <span>상세 팝업 열기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Titles */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-indigo-700/80 font-medium mt-1 mb-3">
            {project.subtitle}
          </p>

          {/* Summary Text */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Bottom Section: Metrics & Tags */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
          {/* Key Metrics row */}
          <div className="grid grid-cols-3 gap-2 text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-2 border border-slate-200/50">
                <span className="text-[10px] sm:text-xs text-slate-500 block truncate">{m.label}</span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 block mt-0.5">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Tags & Action Button */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <div className="flex flex-wrap gap-1.5">
              {project.tools.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                >
                  #{t}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <span>상세보기</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}
