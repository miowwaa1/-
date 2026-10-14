import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Heart, FolderArchive, Camera, Footprints, BookOpen, Sparkles } from 'lucide-react';

export default function HobbySection() {
  const { hobbies } = portfolioData;

  const iconMap = {
    'folder-archive': FolderArchive,
    'camera': Camera,
    'footprints': Footprints,
    'book-open': BookOpen,
  };

  return (
    <section id="hobby" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Lifestyle & Routine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            일과 삶의 균형을 만드는 <span className="text-rose-600">나의 취미</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            건강한 일상 루틴과 꾸준한 자기계발은 안정적이고 책임감 있는 업무 수행의 원동력이 됩니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => {
            const IconComp = iconMap[hobby.icon] || Sparkles;
            return (
              <div
                key={hobby.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-rose-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200/60 shadow-2xs">
                      {hobby.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-rose-50 text-slate-600 group-hover:text-rose-600 flex items-center justify-center border border-slate-200/60 group-hover:border-rose-200 transition-colors shadow-2xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors mb-2.5">
                    {hobby.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {hobby.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-200/50">
                  {hobby.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200/60"
                    >
                      #{badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Quote Strip */}
        <div className="mt-12 bg-gradient-to-r from-rose-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-rose-500 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">“정돈된 일상이 최고의 업무 성과를 만듭니다”</h4>
              <p className="text-xs text-slate-600 mt-0.5">꼼꼼한 기록과 꾸준한 루틴을 바탕으로 기복 없이 한결같은 성과를 내겠습니다.</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-rose-700 bg-white px-3 py-1.5 rounded-xl border border-rose-200/80 shadow-2xs shrink-0">
            사무직 적합 마인드셋
          </span>
        </div>

      </div>
    </section>
  );
}
