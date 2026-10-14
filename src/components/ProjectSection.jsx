import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectSkeleton from './ProjectSkeleton';
import ProjectModal from './ProjectModal';
import { Briefcase, RotateCcw, FolderCheck, CheckCircle2, Info } from 'lucide-react';

export default function ProjectSection() {
  const { projects } = portfolioData;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Initial skeleton UI simulation for realistic data loading experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const handleReloadSkeleton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section id="project" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Key Projects (5 Selected)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              실무 역량을 증명하는 <span className="text-indigo-600">5대 프로젝트</span>
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              엑셀 데이터 자동화, 파워포인트 표준화, 일러스트 디자인, ERP 자산 관리, 응대 매뉴얼 아카이빙까지 직접 기획하고 완수한 실무 기록입니다.
            </p>
          </div>

          {/* Controls & Folder Guide Notice */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              onClick={handleReloadSkeleton}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors shadow-xs"
              title="데이터 로딩 스켈레톤 애니메이션 다시 시연"
            >
              <RotateCcw className="w-3.5 h-3.5 text-indigo-500" />
              <span>스켈레톤 UI 다시보기</span>
            </button>
            <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-50/70 border border-indigo-200/50 text-indigo-700">
              <FolderCheck className="w-3.5 h-3.5" />
              <span>에셋 관리 폴더: public/images/projects/</span>
            </div>
          </div>
        </div>

        {/* Guide banner for asset management */}
        <div className="bg-white rounded-xl p-3.5 mb-8 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>
              각 배너 좌측 하단에 지정된 <span className="font-semibold text-slate-900">파일명(project1.png ~ project5.png)</span>으로 이미지를 넣으시면 화면에 즉시 반영됩니다.
            </span>
          </div>
          <span className="hidden sm:inline-block font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
            5개 프로젝트 동적 렌더링
          </span>
        </div>

        {/* Vertical List of Horizontal Banners */}
        <div className="space-y-6">
          {isLoading ? (
            // Skeleton UI (5 items)
            <>
              {[1, 2, 3, 4, 5].map((idx) => (
                <ProjectSkeleton key={idx} />
              ))}
            </>
          ) : (
            // Actual Dynamic Projects List
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(proj) => setSelectedProject(proj)}
              />
            ))
          )}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectNext={handleNextProject}
          onSelectPrev={handlePrevProject}
        />
      )}
    </section>
  );
}
