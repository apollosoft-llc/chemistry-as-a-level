import React, { useState, useMemo } from "react";
import { Chapter } from "../types";
import {
  BookOpen,
  Atom,
  GraduationCap,
  ChevronRight,
  Filter,
  BookmarkCheck,
  Compass,
  Layers,
  LayoutGrid,
  ListTree,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "../utils/languageContext";
import { getLinkageForChapter } from "../data/curriculumLinkage";

interface ChapterListViewProps {
  chapters: Chapter[];
  onSelectChapter: (chapter: Chapter) => void;
  onNavigateToRevision?: (chapterNum: number) => void;
  onNavigateToSyllabusGuide?: () => void;
  searchQuery: string;
}

export const ChapterListView: React.FC<ChapterListViewProps> = ({
  chapters,
  onSelectChapter,
  onNavigateToRevision,
  onNavigateToSyllabusGuide,
  searchQuery,
}) => {
  const { language, t } = useLanguage();
  const [levelFilter, setLevelFilter] = useState<"ALL" | "AS" | "A2">("ALL");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [viewLayout, setViewLayout] = useState<"grid" | "hierarchy">("grid");

  const categories = [
    { id: "ALL", nameEn: "All Areas", nameMn: "Бүх салбар" },
    { id: "Physical", nameEn: "Physical Chemistry", nameMn: "Физик хими" },
    { id: "Inorganic", nameEn: "Inorganic Chemistry", nameMn: "Органик бус хими" },
    { id: "Organic", nameEn: "Organic Chemistry", nameMn: "Органик хими" },
    { id: "Analysis", nameEn: "Analysis & Practical", nameMn: "Анализ & Практик" },
  ];

  const filteredChapters = chapters.filter((ch) => {
    // Level filter
    if (levelFilter !== "ALL" && ch.level !== levelFilter) return false;
    // Category filter
    if (categoryFilter !== "ALL" && ch.category !== categoryFilter) return false;
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const titleEn = ch.titleEn || "";
      const titleMn = ch.titleMn || "";
      const summaryEn = ch.summaryEn || ch.descriptionEn || "";
      const summaryMn = ch.summaryMn || ch.descriptionMn || "";

      const matchTitle =
        titleEn.toLowerCase().includes(q) ||
        titleMn.toLowerCase().includes(q);
      const matchSummary =
        summaryEn.toLowerCase().includes(q) ||
        summaryMn.toLowerCase().includes(q);
      const matchSubtopics = (ch.subtopics || []).some(
        (s) =>
          (s.titleEn && s.titleEn.toLowerCase().includes(q)) ||
          (s.titleMn && s.titleMn.toLowerCase().includes(q)) ||
          (s.keyConceptEn && s.keyConceptEn.toLowerCase().includes(q)) ||
          (s.keyConceptMn && s.keyConceptMn.toLowerCase().includes(q)) ||
          (s.summaryEn && s.summaryEn.toLowerCase().includes(q)) ||
          (s.summaryMn && s.summaryMn.toLowerCase().includes(q))
      );
      const matchKeyTerms = (ch.keyTerms || []).some(
        (t) =>
          (t.termEn && t.termEn.toLowerCase().includes(q)) ||
          (t.termMn && t.termMn.toLowerCase().includes(q)) ||
          (t.defEn && t.defEn.toLowerCase().includes(q)) ||
          (t.defMn && t.defMn.toLowerCase().includes(q)) ||
          (t.definitionEn && t.definitionEn.toLowerCase().includes(q)) ||
          (t.definitionMn && t.definitionMn.toLowerCase().includes(q))
      );
      return matchTitle || matchSummary || matchSubtopics || matchKeyTerms;
    }
    return true;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Physical":
        return {
          bg: "bg-blue-50 border-blue-200 text-blue-800",
          badge: "bg-blue-100/80 text-blue-800 border-blue-200",
          iconColor: "text-blue-600",
        };
      case "Inorganic":
        return {
          bg: "bg-emerald-50 border-emerald-200 text-emerald-800",
          badge: "bg-emerald-100/80 text-emerald-800 border-emerald-200",
          iconColor: "text-emerald-600",
        };
      case "Organic":
        return {
          bg: "bg-amber-50 border-amber-200 text-amber-800",
          badge: "bg-amber-100/80 text-amber-800 border-amber-200",
          iconColor: "text-amber-600",
        };
      case "Analysis":
      case "Practical":
        return {
          bg: "bg-purple-50 border-purple-200 text-purple-800",
          badge: "bg-purple-100/80 text-purple-800 border-purple-200",
          iconColor: "text-purple-600",
        };
      default:
        return {
          bg: "bg-slate-50 border-slate-200 text-slate-800",
          badge: "bg-slate-100 text-slate-700 border-slate-200",
          iconColor: "text-slate-600",
        };
    }
  };

  // Group chapters for hierarchy view
  const hierarchyGroups = useMemo(() => {
    const groups: {
      id: string;
      titleEn: string;
      titleMn: string;
      level: "AS" | "A2";
      pillar: string;
      chapters: Chapter[];
    }[] = [
      {
        id: "as-physical",
        titleEn: "AS Level — Physical Chemistry",
        titleMn: "AS Түвшин — Физик хими",
        level: "AS",
        pillar: "Physical",
        chapters: filteredChapters.filter((c) => c.level === "AS" && c.category === "Physical"),
      },
      {
        id: "as-inorganic",
        titleEn: "AS Level — Inorganic Chemistry",
        titleMn: "AS Түвшин — Органик бус хими",
        level: "AS",
        pillar: "Inorganic",
        chapters: filteredChapters.filter((c) => c.level === "AS" && c.category === "Inorganic"),
      },
      {
        id: "as-organic",
        titleEn: "AS Level — Organic Chemistry",
        titleMn: "AS Түвшин — Органик хими",
        level: "AS",
        pillar: "Organic",
        chapters: filteredChapters.filter((c) => c.level === "AS" && c.category === "Organic"),
      },
      {
        id: "as-practical",
        titleEn: "AS Level — Practical Skills & Analysis",
        titleMn: "AS Түвшин — Практик туршилт & Анализ",
        level: "AS",
        pillar: "Practical",
        chapters: filteredChapters.filter(
          (c) => c.level === "AS" && (c.category === "Analysis" || c.category === "Practical")
        ),
      },
      {
        id: "a2-physical",
        titleEn: "A Level (A2) — Physical Chemistry",
        titleMn: "A Түвшин (A2) — Физик хими",
        level: "A2",
        pillar: "Physical",
        chapters: filteredChapters.filter((c) => c.level === "A2" && c.category === "Physical"),
      },
      {
        id: "a2-inorganic",
        titleEn: "A Level (A2) — Inorganic Chemistry",
        titleMn: "A Түвшин (A2) — Шилжилтийн металлууд",
        level: "A2",
        pillar: "Inorganic",
        chapters: filteredChapters.filter((c) => c.level === "A2" && c.category === "Inorganic"),
      },
      {
        id: "a2-organic",
        titleEn: "A Level (A2) — Organic Chemistry",
        titleMn: "A Түвшин (A2) — Органик хими",
        level: "A2",
        pillar: "Organic",
        chapters: filteredChapters.filter((c) => c.level === "A2" && c.category === "Organic"),
      },
      {
        id: "a2-analysis",
        titleEn: "A Level (A2) — Analytical Techniques & Planning",
        titleMn: "A Түвшин (A2) — Анализ & Туршилтын төлөвлөлт",
        level: "A2",
        pillar: "Analysis",
        chapters: filteredChapters.filter(
          (c) => c.level === "A2" && (c.category === "Analysis" || c.category === "Practical")
        ),
      },
    ];

    return groups.filter((g) => g.chapters.length > 0);
  }, [filteredChapters]);

  return (
    <div className="space-y-6">
      {/* Syllabus Hero Overview Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/50 border border-cyan-200/80 p-6 shadow-sm">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Atom className="w-64 h-64 text-cyan-600" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300 text-cyan-900 text-xs font-semibold">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-700" />
              Cambridge International AS & A Level Chemistry (Syllabus 9701)
            </div>
            {onNavigateToSyllabusGuide && (
              <button
                onClick={onNavigateToSyllabusGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 hover:bg-cyan-700 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === "mn" ? "Syllabus Хөтөч нээх (34 Сэдэв)" : "Open 9701 Syllabus Master Guide"}</span>
                <ChevronRight className="w-3 h-3 opacity-70" />
              </button>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Master All 32 Chapters with Structured Theory & Mark Schemes
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Comprehensive coverage of all 32 syllabus chapters across Physical, Inorganic, Organic, and Analytical chemistry with official Cambridge past-paper tips, formulas, and definitions.
          </p>

          {/* Quick Paper Info Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-slate-200/80 text-xs">
            <div className="bg-white/90 p-2 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-bold text-cyan-700 block">Paper 1</span>
              <span className="text-slate-500 text-[11px]">MCQ (1h 15m, 40m)</span>
            </div>
            <div className="bg-white/90 p-2 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-bold text-blue-700 block">Paper 2</span>
              <span className="text-slate-500 text-[11px]">AS Structured (1h 15m)</span>
            </div>
            <div className="bg-white/90 p-2 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-bold text-emerald-700 block">Paper 3</span>
              <span className="text-slate-500 text-[11px]">Practical Skills (2h)</span>
            </div>
            <div className="bg-white/90 p-2 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-bold text-amber-700 block">Paper 4</span>
              <span className="text-slate-500 text-[11px]">A Level Structured (2h)</span>
            </div>
            <div className="bg-white/90 p-2 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-bold text-purple-700 block">Paper 5</span>
              <span className="text-slate-500 text-[11px]">Planning & Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar & View Switcher */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Level Filter (ALL / AS / A2) */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setLevelFilter("ALL")}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                levelFilter === "ALL"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All (32)
            </button>
            <button
              onClick={() => setLevelFilter("AS")}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                levelFilter === "AS"
                  ? "bg-blue-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              AS Level (Ch 1-18, 31)
            </button>
            <button
              onClick={() => setLevelFilter("A2")}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                levelFilter === "A2"
                  ? "bg-amber-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              A Level / A2 (Ch 19-30, 32)
            </button>
          </div>

          {/* Layout Toggle: Grid vs Syllabus Hierarchy */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => setViewLayout("grid")}
              className={`px-2.5 py-1 rounded-md font-semibold flex items-center gap-1.5 transition-all ${
                viewLayout === "grid"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              title="Grid cards layout"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewLayout("hierarchy")}
              className={`px-2.5 py-1 rounded-md font-semibold flex items-center gap-1.5 transition-all ${
                viewLayout === "hierarchy"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              title="Syllabus guide hierarchy layout"
            >
              <ListTree className="w-3.5 h-3.5" />
              <span>Syllabus Tree</span>
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 hidden sm:block" />
            {categories.map((cat) => {
              const name = language === "en" ? cat.nameEn : language === "mn" ? cat.nameMn : `${cat.nameEn} • ${cat.nameMn}`;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    categoryFilter === cat.id
                      ? "bg-slate-800 text-white border border-slate-700"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* RENDER MODE 1: GRID VIEW */}
      {viewLayout === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredChapters.map((chapter) => {
            const colors = getCategoryColor(chapter.category);
            const linkage = getLinkageForChapter(chapter.number);
            const summaryText = language === "en" 
              ? (chapter.summaryEn || chapter.descriptionEn || "") 
              : language === "mn" 
              ? (chapter.summaryMn || chapter.descriptionMn || chapter.summaryEn || "")
              : (chapter.summaryMn || chapter.summaryEn || "");

            return (
              <div
                key={chapter.number}
                onClick={() => onSelectChapter(chapter)}
                className="group relative flex flex-col justify-between bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-cyan-400 rounded-xl p-5 cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-md"
              >
                <div>
                  {/* Header row: Chapter number, Level, Category & Syllabus Ref */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-extrabold text-cyan-700">
                        {chapter.number}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                          chapter.level === "AS"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {chapter.level} Level
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${colors.badge}`}
                    >
                      {chapter.category}
                    </span>
                  </div>

                  {/* Official Syllabus Code Badge */}
                  {linkage?.syllabusRef && (
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 inline-block">
                        {linkage.syllabusRef}
                      </span>
                    </div>
                  )}

                  {/* Chapter Title */}
                  {language === "en" && (
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors line-clamp-1 mb-2">
                      {chapter.titleEn}
                    </h3>
                  )}
                  {language === "mn" && (
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors line-clamp-1 mb-2">
                      {chapter.titleMn || chapter.titleEn}
                    </h3>
                  )}
                  {language === "dual" && (
                    <div className="mb-2">
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-cyan-700 transition-colors line-clamp-1">
                        {chapter.titleEn}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-800 line-clamp-1">
                        {chapter.titleMn}
                      </p>
                    </div>
                  )}

                  {/* Summary */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {summaryText}
                  </p>

                  {/* Subtopic pills preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {(chapter.subtopics || []).slice(0, 3).map((sub, idx) => {
                      const subTitle = language === "en" ? sub.titleEn : language === "mn" ? (sub.titleMn || sub.titleEn) : sub.titleEn;
                      return (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {subTitle}
                        </span>
                      );
                    })}
                    {(chapter.subtopics || []).length > 3 && (
                      <span className="text-[10px] text-slate-400 px-1 py-0.5">
                        +{(chapter.subtopics || []).length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-500 font-mono">
                    {(chapter.subtopics || []).length} {language === "mn" ? "Дэд сэдэв" : "Subtopics"} • {(chapter.keyTerms || []).length} {language === "mn" ? "Нэр томьёо" : "Terms"}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {onNavigateToRevision && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigateToRevision(chapter.number);
                        }}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-cyan-50 text-slate-600 hover:text-cyan-700 border border-slate-200 transition-colors"
                        title="Open Revision Notes for this chapter"
                      >
                        <BookmarkCheck className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <span className="flex items-center gap-1 text-xs font-semibold bg-cyan-600 group-hover:bg-cyan-700 text-white px-3 py-1.5 rounded-lg transition-colors shadow-2xs">
                      <span>{language === "mn" ? "Бүлэг үзэх" : language === "en" ? "Study Chapter" : "Study • Үзэх"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* RENDER MODE 2: SYLLABUS HIERARCHY TREE VIEW */}
      {viewLayout === "hierarchy" && (
        <div className="space-y-6">
          {hierarchyGroups.map((group) => {
            return (
              <div
                key={group.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs"
              >
                {/* Group Header */}
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                        group.level === "AS"
                          ? "bg-blue-100 text-blue-900 border-blue-200"
                          : "bg-amber-100 text-amber-900 border-amber-200"
                      }`}
                    >
                      {group.level} Level
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {language === "mn" ? group.titleMn : group.titleEn}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {group.chapters.length} {language === "mn" ? "бүлэг" : "chapters"}
                  </span>
                </div>

                {/* Chapter Rows */}
                <div className="divide-y divide-slate-100">
                  {group.chapters.map((chapter) => {
                    const linkage = getLinkageForChapter(chapter.number);
                    return (
                      <div
                        key={chapter.number}
                        onClick={() => onSelectChapter(chapter)}
                        className="p-4 hover:bg-slate-50/70 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-extrabold text-cyan-700 shrink-0">
                            {chapter.number}
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              {linkage?.syllabusRef && (
                                <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-50 text-cyan-800 border border-cyan-200">
                                  {linkage.syllabusRef}
                                </span>
                              )}
                              <span className="text-xs text-slate-500 font-mono">
                                {(chapter.subtopics || []).length} subtopics
                              </span>
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-cyan-700 transition-colors">
                              {language === "mn" ? chapter.titleMn || chapter.titleEn : chapter.titleEn}
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {chapter.summaryEn || chapter.descriptionEn}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          {linkage?.relatedExamPapers && linkage.relatedExamPapers.length > 0 && (
                            <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200 hidden lg:inline">
                              Tested: {linkage.relatedExamPapers.map((p) => p.paperType.replace("Paper ", "P")).join(", ")}
                            </span>
                          )}
                          <span className="px-3 py-1.5 rounded-lg bg-slate-100 group-hover:bg-cyan-600 group-hover:text-white text-slate-700 text-xs font-bold transition-colors flex items-center gap-1">
                            <span>Open</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {filteredChapters.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 mb-1">
            No chapters found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search terms or filter selections.
          </p>
        </div>
      )}
    </div>
  );
};
