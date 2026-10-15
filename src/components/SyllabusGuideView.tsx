import React, { useState, useEffect, useMemo } from "react";
import {
  Compass,
  BookOpen,
  CheckCircle2,
  Circle,
  FileText,
  Calculator,
  FlaskConical,
  GraduationCap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Layers,
  ArrowRight,
  Clock,
  Award,
  AlertTriangle,
  RotateCcw,
  CheckCheck,
  ExternalLink,
} from "lucide-react";
import {
  SYLLABUS_TOPICS_DATA,
  CAMBRIDGE_PAPERS_SPEC,
  ASSESSMENT_OBJECTIVES_SPEC,
} from "../data/syllabusGuideData";
import { SyllabusTopic, SyllabusPaperSpec } from "../types";
import { useLanguage } from "../utils/languageContext";
import { InlineQuestionRunnerModal } from "./InlineQuestionRunnerModal";

interface SyllabusGuideViewProps {
  onNavigateToChapter: (chapterNum: number) => void;
  onNavigateToPastPapers: (paperId?: string) => void;
  onNavigateToCalculations?: (topicId?: string) => void;
  onNavigateToQualitative?: () => void;
  onNavigateToQuiz?: (chapterNum?: number) => void;
  onNavigateToFlashcards?: (chapterNum?: number) => void;
}

export const SyllabusGuideView: React.FC<SyllabusGuideViewProps> = ({
  onNavigateToChapter,
  onNavigateToPastPapers,
  onNavigateToCalculations,
  onNavigateToQualitative,
  onNavigateToQuiz,
  onNavigateToFlashcards,
}) => {
  const { language, t } = useLanguage();

  const [activeTab, setActiveTab] = useState<"topics" | "papers" | "objectives">("topics");
  const [levelFilter, setLevelFilter] = useState<"ALL" | "AS" | "A2">("ALL");
  const [pillarFilter, setPillarFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>("syl-1");
  const [inlineRunnerItem, setInlineRunnerItem] = useState<{
    paperId?: string;
    calculationTopicId?: string;
    chapterNumber?: number;
  } | null>(null);

  // Local storage persistence for mastered outcomes
  const [masteredOutcomes, setMasteredOutcomes] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("chemistry_syllabus_mastery_v1");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("chemistry_syllabus_mastery_v1", JSON.stringify(masteredOutcomes));
    } catch (e) {
      console.error("Failed to save syllabus mastery", e);
    }
  }, [masteredOutcomes]);

  const toggleOutcome = (code: string) => {
    setMasteredOutcomes((prev) => ({
      ...prev,
      [code]: !prev[code],
    }));
  };

  const handleMarkAllInTopic = (topic: SyllabusTopic, mark: boolean) => {
    setMasteredOutcomes((prev) => {
      const next = { ...prev };
      topic.learningOutcomes.forEach((o) => {
        next[o.code] = mark;
      });
      return next;
    });
  };

  const handleResetAll = () => {
    if (window.confirm(language === "mn" ? "Бүх тэмдэглэгдсэн ахицыг шинэчлэх үү?" : "Reset all syllabus checklist progress?")) {
      setMasteredOutcomes({});
    }
  };

  // Calculate mastery statistics
  const stats = useMemo(() => {
    let totalCount = 0;
    let masteredCount = 0;
    let asTotal = 0;
    let asMastered = 0;
    let a2Total = 0;
    let a2Mastered = 0;

    SYLLABUS_TOPICS_DATA.forEach((topic) => {
      topic.learningOutcomes.forEach((o) => {
        totalCount++;
        const isM = !!masteredOutcomes[o.code];
        if (isM) masteredCount++;

        if (topic.level === "AS") {
          asTotal++;
          if (isM) asMastered++;
        } else {
          a2Total++;
          if (isM) a2Mastered++;
        }
      });
    });

    const percentTotal = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;
    const percentAS = asTotal > 0 ? Math.round((asMastered / asTotal) * 100) : 0;
    const percentA2 = a2Total > 0 ? Math.round((a2Mastered / a2Total) * 100) : 0;

    return {
      totalCount,
      masteredCount,
      percentTotal,
      asTotal,
      asMastered,
      percentAS,
      a2Total,
      a2Mastered,
      percentA2,
    };
  }, [masteredOutcomes]);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return SYLLABUS_TOPICS_DATA.filter((topic) => {
      // Level filter
      if (levelFilter !== "ALL" && topic.level !== levelFilter) return false;
      // Pillar filter
      if (pillarFilter !== "ALL" && topic.pillar !== pillarFilter) return false;
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle =
          topic.titleEn.toLowerCase().includes(q) ||
          topic.titleMn.toLowerCase().includes(q) ||
          topic.syllabusCodes.some((c) => c.toLowerCase().includes(q));
        const matchOutcomes = topic.learningOutcomes.some(
          (o) =>
            o.code.toLowerCase().includes(q) ||
            o.outcomeEn.toLowerCase().includes(q) ||
            o.outcomeMn.toLowerCase().includes(q)
        );
        const matchNotes =
          topic.examFocusNotesEn.toLowerCase().includes(q) ||
          topic.examFocusNotesMn.toLowerCase().includes(q);
        return matchTitle || matchOutcomes || matchNotes;
      }
      return true;
    });
  }, [levelFilter, pillarFilter, searchQuery]);

  const getPillarBadge = (pillar: string) => {
    switch (pillar) {
      case "Physical":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Inorganic":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Organic":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Analysis":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Practical":
        return "bg-teal-50 text-teal-700 border-teal-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Hero Banner: Cambridge 9701 Syllabus Master Specification Guide */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white p-6 sm:p-8 shadow-xl border border-cyan-800/40">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-500/40 text-cyan-200 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              Cambridge International AS & A Level Chemistry (9701)
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              {language === "mn"
                ? "Syllabus Хөтөч: Хичээлийн Хөтөлбөрийн Бүрэн Бүтэц"
                : "Syllabus Master Guide & Learning Outcomes Tracker"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === "mn"
                ? "Кембрижийн 9701 хичээлийн хөтөлбөрийн 34 үндсэн сэдэв, лабораторийн Paper 3/5 практик ур чадвар, суралцахуйн үр дүнгийн интерактив хяналтын сан."
                : "Interactive curriculum navigation for all 34 Cambridge 9701 syllabus sections across Physical, Inorganic, Organic, and Analytical chemistry with exam papers mapping."}
            </p>

            {/* Quick Papers Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-slate-200 font-mono">
                Paper 1: MCQ (AS)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-slate-200 font-mono">
                Paper 2: AS Structured
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-teal-300 font-mono">
                Paper 3: Practical Lab
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-amber-300 font-mono">
                Paper 4: A2 Structured
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-purple-300 font-mono">
                Paper 5: Planning & Analysis
              </span>
            </div>
          </div>

          {/* Syllabus Progress Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 min-w-[280px] lg:w-80 shrink-0 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                {language === "mn" ? "Хөтөлбөрийн ахиц" : "Syllabus Mastery"}
              </span>
              <span className="text-xl font-black text-white">{stats.percentTotal}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${stats.percentTotal}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs border-t border-white/10 text-slate-300">
              <div>
                <span className="block text-[11px] text-slate-400 font-medium">AS Level (1–22)</span>
                <span className="font-bold text-white">
                  {stats.asMastered} / {stats.asTotal} ({stats.percentAS}%)
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-medium">A2 Level (23–34)</span>
                <span className="font-bold text-white">
                  {stats.a2Mastered} / {stats.a2Total} ({stats.percentA2}%)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-400">
                {stats.masteredCount} of {stats.totalCount} outcomes checked
              </span>
              {stats.masteredCount > 0 && (
                <button
                  onClick={handleResetAll}
                  className="text-[11px] text-cyan-300 hover:text-white inline-flex items-center gap-1 underline transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  {language === "mn" ? "Шинэчлэх" : "Reset"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Mode Navigation Bar: Topics Guide | Exam Papers Blueprint | Assessment Objectives */}
      <div className="bg-white border border-slate-200 rounded-xl p-2 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => setActiveTab("topics")}
            className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeTab === "topics"
                ? "bg-cyan-600 text-white shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === "mn" ? "Сэдэвчилсэн Хөтөч (34 Сэдэв)" : "Topics Guide (1–34 + Practical)"}</span>
          </button>

          <button
            onClick={() => setActiveTab("papers")}
            className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeTab === "papers"
                ? "bg-cyan-600 text-white shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{language === "mn" ? "Шалгалтын Бүтэц (Paper 1–5)" : "Exam Papers Blueprint (P1–P5)"}</span>
          </button>

          <button
            onClick={() => setActiveTab("objectives")}
            className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeTab === "objectives"
                ? "bg-cyan-600 text-white shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{language === "mn" ? "Үнэлгээний Зорилтууд (AO1–3)" : "Assessment Objectives (AO)"}</span>
          </button>
        </div>

        {/* Search bar inside navigation */}
        {activeTab === "topics" && (
          <div className="relative min-w-[240px] flex-1 max-w-sm">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === "mn"
                  ? "Сэдэв, код (1.1), үр дүн хайх..."
                  : "Search topics, syllabus code (1.1), keywords..."
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-7 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            )}
          </div>
        )}
      </div>

      {/* VIEW 1: SYLLABUS TOPICS GUIDE */}
      {activeTab === "topics" && (
        <div className="space-y-4">
          {/* Filters Bar: Level & Chemistry Pillar Filters */}
          <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3">
            {/* Level Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setLevelFilter("ALL")}
                className={`px-3 py-1 rounded-md transition-all ${
                  levelFilter === "ALL"
                    ? "bg-white text-slate-900 font-bold shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Levels ({SYLLABUS_TOPICS_DATA.length})
              </button>
              <button
                onClick={() => setLevelFilter("AS")}
                className={`px-3 py-1 rounded-md transition-all ${
                  levelFilter === "AS"
                    ? "bg-blue-600 text-white font-bold shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                AS Level (Topics 1–22, P3)
              </button>
              <button
                onClick={() => setLevelFilter("A2")}
                className={`px-3 py-1 rounded-md transition-all ${
                  levelFilter === "A2"
                    ? "bg-amber-600 text-white font-bold shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                A Level / A2 (Topics 23–34, P5)
              </button>
            </div>

            {/* Pillar Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 hidden sm:block" />
              {[
                { id: "ALL", nameEn: "All Areas", nameMn: "Бүх салбар" },
                { id: "Physical", nameEn: "Physical", nameMn: "Физик" },
                { id: "Inorganic", nameEn: "Inorganic", nameMn: "Органик бус" },
                { id: "Organic", nameEn: "Organic", nameMn: "Органик" },
                { id: "Analysis", nameEn: "Analysis", nameMn: "Анализ" },
                { id: "Practical", nameEn: "Practical", nameMn: "Практик" },
              ].map((p) => {
                const label = language === "en" ? p.nameEn : p.nameMn;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPillarFilter(p.id)}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      pillarFilter === p.id
                        ? "bg-slate-800 text-white border border-slate-700 shadow-2xs"
                        : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Topics List Accordion */}
          <div className="space-y-3">
            {filteredTopics.map((topic) => {
              const isExpanded = expandedTopicId === topic.id;
              const pillarClass = getPillarBadge(topic.pillar);
              const checkedCount = topic.learningOutcomes.filter((o) => !!masteredOutcomes[o.code]).length;
              const isTopicFullyMastered = checkedCount === topic.learningOutcomes.length && topic.learningOutcomes.length > 0;

              return (
                <div
                  key={topic.id}
                  className={`bg-white border rounded-xl overflow-hidden transition-all shadow-2xs ${
                    isExpanded ? "border-cyan-400 ring-1 ring-cyan-400/20" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Topic Row Header */}
                  <div
                    onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                    className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer select-none hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      {/* Topic Number Pill */}
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-slate-500 uppercase leading-none">Topic</span>
                        <span className="text-sm font-black text-cyan-800 leading-tight">
                          {topic.topicNumber}
                        </span>
                      </div>

                      {/* Titles & Meta */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${pillarClass}`}
                          >
                            {topic.pillar} Chemistry
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                              topic.level === "AS"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-amber-50 text-amber-700 border-amber-200"
                            }`}
                          >
                            {topic.level} Level
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            Codes: {topic.syllabusCodes.join(", ")}
                          </span>
                          {topic.correspondingChapterNumbers.length > 0 && (
                            <span className="text-[10px] font-semibold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                              App Ch {topic.correspondingChapterNumbers.join(" & ")}
                            </span>
                          )}
                        </div>

                        <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                          {language === "mn" ? topic.titleMn : topic.titleEn}
                        </h3>
                        {language === "dual" && (
                          <p className="text-xs font-semibold text-cyan-800">{topic.titleMn}</p>
                        )}
                      </div>
                    </div>

                    {/* Right side: Outcomes mastery pill, Exam Paper tags, and Expand toggle */}
                    <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                      {/* Mastery Counter */}
                      <div
                        className={`px-2.5 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                          isTopicFullyMastered
                            ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                            : checkedCount > 0
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        {isTopicFullyMastered ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Circle className="w-3.5 h-3.5 text-slate-400" />
                        )}
                        <span>
                          {checkedCount} / {topic.learningOutcomes.length}
                        </span>
                      </div>

                      {/* Exam Papers tested */}
                      <div className="hidden sm:flex items-center gap-1">
                        {topic.examPapers.map((paper) => (
                          <span
                            key={paper}
                            className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {paper.replace("Paper ", "P")}
                          </span>
                        ))}
                      </div>

                      {/* Chevron */}
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Syllabus Details */}
                  {isExpanded && (
                    <div className="border-t border-slate-200 bg-slate-50/50 p-4 sm:p-6 space-y-5 animate-in fade-in duration-200">
                      {/* Action Shortcuts Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                        <div className="flex flex-wrap items-center gap-2">
                          {topic.correspondingChapterNumbers.map((chNum) => (
                            <button
                              key={chNum}
                              onClick={(e) => {
                                e.stopPropagation();
                                onNavigateToChapter(chNum);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>
                                {language === "mn" ? `Бүлэг ${chNum} Онол үзэх` : `Study Chapter ${chNum}`}
                              </span>
                            </button>
                          ))}

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setInlineRunnerItem({
                                chapterNumber: topic.correspondingChapterNumbers[0],
                              });
                            }}
                            className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-emerald-200"
                            title="Энэ сэдэвтэй холбоотой шалгалтын асуултыг энд шууд дуудаж ажиллах"
                          >
                            <FileText className="w-3.5 h-3.5 text-emerald-700" />
                            <span>{language === "mn" ? "Асуулт энд ажиллах" : "Solve Questions Here"}</span>
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigateToPastPapers();
                            }}
                            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200"
                          >
                            <FileText className="w-3.5 h-3.5 text-cyan-700" />
                            <span>{language === "mn" ? "Бүтэн Papers" : "Past Papers Page"}</span>
                          </button>

                          {topic.calculationTopicId && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setInlineRunnerItem({
                                  calculationTopicId: topic.calculationTopicId,
                                  chapterNumber: topic.correspondingChapterNumbers[0],
                                });
                              }}
                              className="px-3 py-1.5 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-900 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-cyan-200"
                              title="Энэ сэдвийн бодлогыг энд шууд дуудаж бодох"
                            >
                              <Calculator className="w-3.5 h-3.5 text-cyan-700" />
                              <span>{language === "mn" ? "Бодлого энд бодох" : "Solve Calculations Here"}</span>
                            </button>
                          )}

                          {onNavigateToQuiz && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onNavigateToQuiz(topic.correspondingChapterNumbers[0]);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                              <span>{language === "mn" ? "Тестээр шалгах" : "Take Quiz"}</span>
                            </button>
                          )}
                        </div>

                        {/* Mark all / Unmark all toggle */}
                        <div className="flex items-center gap-1 text-xs">
                          <button
                            onClick={() => handleMarkAllInTopic(topic, true)}
                            className="text-slate-600 hover:text-cyan-700 font-medium px-2 py-1 rounded hover:bg-slate-100"
                          >
                            {language === "mn" ? "Бүгдийг тэмдэглэх" : "Check All"}
                          </button>
                          <span className="text-slate-300">•</span>
                          <button
                            onClick={() => handleMarkAllInTopic(topic, false)}
                            className="text-slate-500 hover:text-slate-800 font-medium px-2 py-1 rounded hover:bg-slate-100"
                          >
                            {language === "mn" ? "Цэвэрлэх" : "Clear"}
                          </button>
                        </div>
                      </div>

                      {/* Learning Outcomes Checklist */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                            <CheckCheck className="w-4 h-4 text-cyan-600" />
                            {language === "mn"
                              ? "Кембрижийн Албан ёсны Суралцахуйн Үр дүн (Checklist)"
                              : "Cambridge Official Learning Outcomes (Syllabus Intentions)"}
                          </h4>
                          <span className="text-[11px] text-slate-500">
                            Click checkbox to mark mastery
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          {topic.learningOutcomes.map((outcome) => {
                            const isChecked = !!masteredOutcomes[outcome.code];
                            return (
                              <div
                                key={outcome.code}
                                onClick={() => toggleOutcome(outcome.code)}
                                className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                                  isChecked
                                    ? "bg-emerald-50/70 border-emerald-300 text-slate-900"
                                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                                }`}
                              >
                                <button
                                  type="button"
                                  className="mt-0.5 shrink-0 focus:outline-none"
                                >
                                  {isChecked ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  ) : (
                                    <Circle className="w-4 h-4 text-slate-300 hover:text-slate-400" />
                                  )}
                                </button>

                                <div className="flex-1 text-xs leading-relaxed">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span
                                      className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                                        isChecked
                                          ? "bg-emerald-200 text-emerald-900"
                                          : "bg-slate-100 text-slate-600 border border-slate-200"
                                      }`}
                                    >
                                      {outcome.code}
                                    </span>
                                  </div>

                                  {language === "en" && <p>{outcome.outcomeEn}</p>}
                                  {language === "mn" && <p>{outcome.outcomeMn || outcome.outcomeEn}</p>}
                                  {language === "dual" && (
                                    <div className="space-y-0.5">
                                      <p className="font-medium text-slate-900">{outcome.outcomeEn}</p>
                                      <p className="text-cyan-900 text-[11px]">{outcome.outcomeMn}</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Examiner Focus Notes & Key Formulas Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                        {/* Examiner Focus Box */}
                        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 space-y-1.5">
                          <span className="font-bold text-amber-900 flex items-center gap-1.5 text-xs">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                            {language === "mn" ? "Шалгагчийн Гол Зөвлөмж & Түлхүүр үг" : "Cambridge Examiner Pitfall & Keywords"}
                          </span>
                          <p className="text-amber-950 leading-relaxed">
                            {language === "mn" ? topic.examFocusNotesMn : topic.examFocusNotesEn}
                          </p>
                        </div>

                        {/* Key Formulas / Practical Box */}
                        <div className="bg-cyan-50/70 border border-cyan-200 rounded-xl p-3.5 space-y-1.5">
                          <span className="font-bold text-cyan-950 flex items-center gap-1.5 text-xs">
                            <Award className="w-3.5 h-3.5 text-cyan-700" />
                            {language === "mn" ? "Гол томьёо & Лабораторийн сорил" : "Key Equations & Lab Tests"}
                          </span>
                          {topic.keyFormulas && topic.keyFormulas.length > 0 && (
                            <div className="space-y-1">
                              {topic.keyFormulas.map((formula, idx) => (
                                <div key={idx} className="font-mono text-cyan-950 bg-white/80 p-1.5 rounded border border-cyan-100 text-[11px]">
                                  {formula}
                                </div>
                              ))}
                            </div>
                          )}
                          {topic.practicalSkillsLinked && topic.practicalSkillsLinked.length > 0 && (
                            <div className="pt-1 text-[11px] text-slate-600 flex items-center gap-1">
                              <FlaskConical className="w-3 h-3 text-teal-600 shrink-0" />
                              <span>{topic.practicalSkillsLinked.join(" • ")}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredTopics.length === 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-500 space-y-2">
                <Compass className="w-8 h-8 mx-auto text-slate-400" />
                <p className="font-semibold text-sm">No syllabus topics match your search criteria.</p>
                <button
                  onClick={() => {
                    setLevelFilter("ALL");
                    setPillarFilter("ALL");
                    setSearchQuery("");
                  }}
                  className="text-xs text-cyan-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: EXAM PAPERS BLUEPRINT (Paper 1, 2, 3, 4, 5) */}
      {activeTab === "papers" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAMBRIDGE_PAPERS_SPEC.map((spec) => {
              return (
                <div
                  key={spec.paperNumber}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header: Paper badge, time, marks */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-slate-900 text-white">
                        {spec.paperNumber}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {spec.durationMinutes} min
                        </span>
                        <span>•</span>
                        <span className="font-bold text-slate-700">{spec.totalMarks} marks</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-black text-slate-900 text-lg">
                        {language === "mn" ? spec.titleMn : spec.titleEn}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1 text-xs">
                        {spec.weightingAS && (
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 font-semibold text-[11px]">
                            {spec.weightingAS}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-semibold text-[11px]">
                          {spec.weightingALevel}
                        </span>
                      </div>
                    </div>

                    {/* Format description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "mn" ? spec.formatMn : spec.formatEn}
                    </p>

                    {/* Syllabus Range */}
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                      <span className="font-bold text-slate-800 block mb-0.5">
                        {language === "mn" ? "Шалгагдах агуулга:" : "Tested Syllabus Range:"}
                      </span>
                      <span className="text-slate-600">
                        {language === "mn" ? spec.testedSyllabusRangeMn : spec.testedSyllabusRange}
                      </span>
                    </div>

                    {/* Top Strategy Tips */}
                    <div className="space-y-1.5">
                      <span className="font-bold text-slate-800 text-xs block">
                        {language === "mn" ? "Шалгалтын тактик & Зөвлөмж:" : "Examiner Strategy Tips:"}
                      </span>
                      {(language === "mn" ? spec.topStrategyTipsMn : spec.topStrategyTipsEn).map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                          <span className="text-cyan-600 font-bold shrink-0">•</span>
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practice Paper Button */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setInlineRunnerItem({ paperId: spec.paperNumber.toLowerCase().replace(" ", "") })}
                      className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                      title="Хуудас шилжихгүйгээр шууд энд ажиллах"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{language === "mn" ? "Энд шууд ажиллах" : "Solve Right Here"}</span>
                    </button>
                    <button
                      onClick={() => onNavigateToPastPapers(spec.paperNumber.toLowerCase().replace(" ", ""))}
                      className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1 transition-colors border border-slate-200"
                      title="Бүтэн Past Papers хуудас руу шилжих"
                    >
                      <span>{language === "mn" ? "Бүтэн" : "Full"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: ASSESSMENT OBJECTIVES (AO1, AO2, AO3) */}
      {activeTab === "objectives" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ASSESSMENT_OBJECTIVES_SPEC.map((ao) => {
              return (
                <div
                  key={ao.code}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black px-3 py-1 rounded-lg bg-cyan-100 text-cyan-900 border border-cyan-200">
                      {ao.code}
                    </span>
                    <span className="text-xs font-bold text-slate-500 font-mono">
                      {language === "mn" ? ao.weightingMn : ao.weightingEn}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                      {language === "mn" ? ao.nameMn : ao.nameEn}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {language === "mn" ? ao.descriptionMn : ao.descriptionEn}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                    <span className="font-bold text-slate-800 block">
                      {language === "mn" ? "Холбогдох Түлхүүр тушаал үгс:" : "Associated Command Words:"}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {ao.code === "AO1" &&
                        ["State", "Define", "Describe", "Outline", "Explain"].map((word) => (
                          <span
                            key={word}
                            className="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono font-semibold"
                          >
                            {word}
                          </span>
                        ))}
                      {ao.code === "AO2" &&
                        ["Calculate", "Deduce", "Suggest", "Predict", "Determine"].map((word) => (
                          <span
                            key={word}
                            className="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono font-semibold"
                          >
                            {word}
                          </span>
                        ))}
                      {ao.code === "AO3" &&
                        ["Plan", "Measure", "Evaluate", "Identify Anomaly", "Estimate Uncertainty"].map((word) => (
                          <span
                            key={word}
                            className="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono font-semibold"
                          >
                            {word}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Inline Past Paper Question & Calculation Runner Modal */}
      {inlineRunnerItem && (
        <InlineQuestionRunnerModal
          paperId={inlineRunnerItem.paperId}
          calculationTopicId={inlineRunnerItem.calculationTopicId}
          chapterNumber={inlineRunnerItem.chapterNumber}
          onClose={() => setInlineRunnerItem(null)}
          onOpenFullPaper={(pId) => {
            setInlineRunnerItem(null);
            onNavigateToPastPapers(pId);
          }}
          onOpenFullCalculations={(cId) => {
            setInlineRunnerItem(null);
            if (onNavigateToCalculations) onNavigateToCalculations(cId);
          }}
        />
      )}
    </div>
  );
};
