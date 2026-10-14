import React, { useState } from 'react';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';

export default function IntroSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="intro" className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 pointer-events-none z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Spline 3D iframe Loading Skeleton/Fallback */}
      {!iframeLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-400 z-0">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            <Sparkles className="w-6 h-6 text-indigo-400 absolute inset-0 m-auto animate-pulse" />
          </div>
          <p className="mt-4 text-xs tracking-wider uppercase text-slate-400">3D 인터랙티브 공간을 불러오는 중...</p>
        </div>
      )}

      {/* Spline 3D iframe */}
      <iframe
        src="https://app.spline.design/ui/9e7789e8-5949-4113-a986-3df4db0fd5a2"
        title="Spline 3D Design"
        frameBorder="0"
        className={`w-full h-full absolute inset-0 z-0 transition-opacity duration-700 ${
          iframeLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIframeLoaded(true)}
        allow="autoplay; fullscreen"
      />

      {/* Center Text Overlay */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 text-center pointer-events-none">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 shadow-xl animate-fade-in pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>사무직 · 경영지원 직무 포트폴리오</span>
        </div>

        {/* Main Title - 요구사항: 중앙에 '정민서의 포토폴리오' 텍스트 오버레이 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
            정민서의 포토폴리오
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-lg text-slate-200/90 max-w-xl mx-auto font-light leading-relaxed drop-shadow-md">
          데이터를 꿰뚫는 <span className="font-semibold text-emerald-300">엑셀 분석</span>과 깔끔한 <span className="font-semibold text-amber-300">문서 표준화</span>, <span className="font-semibold text-violet-300">일러스트 디자인</span> 감각을 겸비한 사무 인재입니다.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 pointer-events-auto">
          <a
            href="#profile"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-sm sm:text-base font-semibold shadow-lg shadow-indigo-500/25 backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
          >
            <span>프로필 살펴보기</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-medium border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <Compass className="w-4 h-4 text-indigo-300" />
            <span>실무 프로젝트 5선</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-300/80 pointer-events-none">
        <span className="text-[11px] font-medium tracking-widest uppercase">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1">
          <div className="w-1.5 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
