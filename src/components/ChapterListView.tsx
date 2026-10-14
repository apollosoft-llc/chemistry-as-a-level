import React, { useState } from "react";
import { Chapter } from "../types";
import {
  BookOpen,
  Atom,
  GraduationCap,
  ChevronRight,
  Filter,
  BookmarkCheck,
} from "lucide-react";
import { useLanguage } from "../utils/languageContext";

interface ChapterListViewProps {
  chapters: Chapter[];
  onSelectChapter: (chapter: Chapter) => void;
  onNavigateToRevision?: (chapterNum: number) => void;
  searchQuery: string;
}

export const ChapterListView: React.FC<ChapterListViewProps> = ({
  chapters,
  onSelectChapter,
  onNavigateToRevision,
  searchQuery,
}) => {
  const { language, t } = useLanguage();
  const [levelFilter, setLevelFilter] = useState<"ALL" | "AS" | "A2">("ALL");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");

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

  return (
    <div className="space-y-6">
      {/* Syllabus Hero Overview Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/50 border border-cyan-200/80 p-6 shadow-sm">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Atom className="w-64 h-64 text-cyan-600" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300 text-cyan-900 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-700" />
            Cambridge International AS & A Level Chemistry (Syllabus 9701)
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

      {/* Filters Bar */}
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
              AS Level (Ch 1-18)
            </button>
            <button
              onClick={() => setLevelFilter("A2")}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                levelFilter === "A2"
                  ? "bg-amber-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              A Level / A2 (Ch 19-32)
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

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChapters.map((chapter) => {
          const colors = getCategoryColor(chapter.category);
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
                {/* Header row: Chapter number, Level, Category */}
                <div className="flex items-start justify-between gap-2 mb-3">
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
