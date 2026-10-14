import React from 'react';

export default function ProjectSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm animate-pulse flex flex-col lg:flex-row">
      {/* Left: Image Placeholder Skeleton */}
      <div className="lg:w-5/12 min-h-[220px] sm:min-h-[260px] bg-slate-200 relative flex items-center justify-center p-6">
        <div className="w-16 h-16 rounded-xl bg-slate-300/80 mb-2" />
        <div className="absolute bottom-4 left-4 right-4 h-6 bg-slate-300 rounded" />
      </div>

      {/* Right: Text Description Skeleton */}
      <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-5 w-20 bg-slate-200 rounded-full" />
            <div className="h-4 w-28 bg-slate-200 rounded" />
          </div>
          <div className="h-7 w-3/4 bg-slate-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-slate-200 rounded mb-4" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-5/6 bg-slate-200 rounded" />
          </div>
        </div>

        {/* Metrics Skeleton */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
          <div className="h-10 bg-slate-100 rounded-lg" />
          <div className="h-10 bg-slate-100 rounded-lg" />
          <div className="h-10 bg-slate-100 rounded-lg" />
        </div>

        {/* Button Skeleton */}
        <div className="flex justify-end pt-2">
          <div className="h-9 w-28 bg-slate-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
