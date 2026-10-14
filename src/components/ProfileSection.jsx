import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  User, 
  Calendar, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  FileSpreadsheet, 
  Presentation, 
  Palette, 
  Sparkles,
  Mail,
  Phone,
  FileText
} from 'lucide-react';

export default function ProfileSection() {
  const { personal, certificates, skills } = portfolioData;

  const skillIconMap = {
    'file-spreadsheet': FileSpreadsheet,
    'presentation': Presentation,
    'palette': Palette,
  };

  return (
    <section id="profile" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            성실함과 정확성으로 신뢰를 쌓는 <span className="text-indigo-600">정민서</span>입니다
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            사무직의 기본인 꼼꼼한 문서 정리부터 데이터 자동화, 시각 디자인 툴 활용까지 균형 잡힌 역량을 갖추고 있습니다.
          </p>
        </div>

        {/* Top Grid: Info & Self-Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Basic Info Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-400 flex items-center justify-center text-white font-black text-2xl shadow-lg ring-4 ring-white/10">
                  민서
                </div>
                <div>
                  <div className="text-xs font-medium text-indigo-300 uppercase tracking-widest">
                    사무직 이력서 포트폴리오
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    {personal.name}
                    <span className="text-sm font-normal text-slate-300">({personal.engName})</span>
                  </h3>
                </div>
              </div>

              {/* Core Attributes */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">지원 직무</span>
                    <span className="text-sm sm:text-base font-semibold text-white">{personal.jobTitle}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">생년월일</span>
                    <span className="text-sm sm:text-base font-semibold text-white">{personal.birth}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-slate-400 block">이메일 문의</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">{personal.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">연락처</span>
                    <span className="text-sm sm:text-base font-semibold text-white">{personal.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Slogan */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>희망 근무지: 서울 및 수도권</span>
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> 즉시 출근 가능
              </span>
            </div>
          </div>

          {/* Right: Self-Introduction & Certificates */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Self-Introduction Box */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-base mb-3">
                <FileText className="w-5 h-5" />
                <span>사무직 역량 중심 자기소개</span>
              </div>
              <blockquote className="border-l-4 border-indigo-500 pl-4 py-1 italic font-medium text-slate-800 text-base sm:text-lg mb-4">
                "{personal.headline}"
              </blockquote>
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {personal.introduction}
              </div>

              {/* 3 Core Strengths Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-200">
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">꼼꼼한 수식·데이터 검증</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">표준화된 보고서 체계</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">신속하고 능동적인 협업</span>
                </div>
              </div>
            </div>

            {/* Certificates Box - 요구사항: GTQ, 정보처리기사 */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>보유 자격증 (Certificates)</span>
                </div>
                <span className="text-xs font-medium text-slate-500">공인 자격 취득 완료</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all bg-slate-50/50 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">
                        {cert.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{cert.date}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mt-2 group-hover:text-indigo-600 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">발급처: {cert.issuer}</p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Grid: Skills (엑셀, 파워포인트, 일러스트레이터) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span>Skills (활용 가능 기술)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                사무직 실무에서 즉시 활용할 수 있는 핵심 소프트웨어 활용 능력
              </p>
            </div>
            <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
              실무 기준 숙련도 자가 진단
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const IconComp = skillIconMap[skill.icon] || FileText;
              return (
                <div
                  key={skill.name}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-indigo-50 text-slate-700 group-hover:text-indigo-600 flex items-center justify-center transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 group-hover:bg-indigo-100 text-slate-700 group-hover:text-indigo-700 transition-colors">
                        {skill.levelLabel}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="text-xs text-slate-400 font-medium block">{skill.name}</span>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {skill.koreanName}
                      </h4>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 group-hover:from-indigo-600 group-hover:to-violet-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
