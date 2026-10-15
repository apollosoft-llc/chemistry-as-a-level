import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Star,
  Search,
  Filter,
  Zap,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Printer,
  Copy,
  Check,
  AlertTriangle,
  Lightbulb,
  FileText,
  BookmarkCheck,
  RotateCcw,
  Layers,
  FlaskConical,
  Atom,
  TestTube,
  ChevronRight,
  SlidersHorizontal,
  Bookmark,
  Share2,
  FileDown,
} from "lucide-react";
import { Chapter } from "../types";
import { ALL_CHAPTERS } from "../data/chaptersIndex";
import {
  PHYSICAL_FORMULA_CHEAT_SHEET,
  ORGANIC_REAGENT_CHEAT_SHEET,
  QA_CHEAT_SHEET,
} from "../data/revisionCheatSheets";
import { getLinkageForChapter } from "../data/curriculumLinkage";
import { PdfRevisionSummaryModal } from "./PdfRevisionSummaryModal";

interface RevisionNotesModuleProps {
  initialChapterNum?: number;
  onNavigateToChapter?: (chapter: Chapter) => void;
  onNavigateToQuiz?: (chapterNum?: number) => void;
  onNavigateToFlashcards?: (chapterNum?: number) => void;
}

export const RevisionNotesModule: React.FC<RevisionNotesModuleProps> = ({
  initialChapterNum,
  onNavigateToChapter,
  onNavigateToQuiz,
  onNavigateToFlashcards,
}) => {
  // Navigation & Selected Chapter
  const [selectedChapterNum, setSelectedChapterNum] = useState<number>(
    initialChapterNum || 1
  );
  const [activeTab, setActiveTab] = useState<"chapter-notes" | "formula-sheet" | "organic-sheet" | "qa-sheet">("chapter-notes");
  
  // Filters & Search
  const [levelFilter, setLevelFilter] = useState<"ALL" | "AS" | "A2">("ALL");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [langMode, setLangMode] = useState<"bilingual" | "en-only">("bilingual");

  // User persistent progress: Revised Chapters, Starred Chapters, Notes per chapter, Checklist items
  const [revisedChapters, setRevisedChapters] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("cambridge9701_revised_chapters");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [starredChapters, setStarredChapters] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("cambridge9701_starred_chapters");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [personalNotes, setPersonalNotes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem("cambridge9701_revision_notes_custom");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [checkedObjectives, setCheckedObjectives] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("cambridge9701_revision_checked_objectives");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [pdfInitialChapter, setPdfInitialChapter] = useState<number>(1);

  // Sync state to local storage
  useEffect(() => {
    try {
      localStorage.setItem("cambridge9701_revised_chapters", JSON.stringify(revisedChapters));
    } catch {
      // ignore
    }
  }, [revisedChapters]);

  useEffect(() => {
    try {
      localStorage.setItem("cambridge9701_starred_chapters", JSON.stringify(starredChapters));
    } catch {
      // ignore
    }
  }, [starredChapters]);

  useEffect(() => {
    try {
      localStorage.setItem("cambridge9701_revision_notes_custom", JSON.stringify(personalNotes));
    } catch {
      // ignore
    }
  }, [personalNotes]);

  useEffect(() => {
    try {
      localStorage.setItem("cambridge9701_revision_checked_objectives", JSON.stringify(checkedObjectives));
    } catch {
      // ignore
    }
  }, [checkedObjectives]);

  // Selected Chapter Object
  const currentChapter = useMemo(() => {
    return ALL_CHAPTERS.find((c) => c.number === selectedChapterNum) || ALL_CHAPTERS[0];
  }, [selectedChapterNum]);

  // Filtered chapters for chapter list navigation
  const filteredChapters = useMemo(() => {
    return ALL_CHAPTERS.filter((ch) => {
      if (levelFilter !== "ALL" && ch.level !== levelFilter) return false;
      if (categoryFilter !== "ALL" && ch.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchNum = ch.number.toString().includes(q);
        const matchTitle = ch.titleEn.toLowerCase().includes(q) || (ch.titleMn && ch.titleMn.toLowerCase().includes(q));
        const matchSub = ch.subtopics.some(
          (s) => s.titleEn.toLowerCase().includes(q) || (s.summaryEn && s.summaryEn.toLowerCase().includes(q))
        );
        const matchTerm = ch.keyTerms.some(
          (t) => t.termEn.toLowerCase().includes(q) || (t.defEn && t.defEn.toLowerCase().includes(q))
        );
        return matchNum || matchTitle || matchSub || matchTerm;
      }
      return true;
    });
  }, [levelFilter, categoryFilter, searchQuery]);

  const toggleRevised = (chNum: number) => {
    setRevisedChapters((prev) =>
      prev.includes(chNum) ? prev.filter((n) => n !== chNum) : [...prev, chNum]
    );
  };

  const toggleStarred = (chNum: number) => {
    setStarredChapters((prev) =>
      prev.includes(chNum) ? prev.filter((n) => n !== chNum) : [...prev, chNum]
    );
  };

  const handleCustomNoteChange = (text: string) => {
    setPersonalNotes((prev) => ({
      ...prev,
      [selectedChapterNum]: text,
    }));
  };

  const toggleObjective = (key: string) => {
    setCheckedObjectives((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const copyChapterSummary = () => {
    if (!currentChapter) return;
    const lines = [
      `CAMBRIDGE 9701 CHEMISTRY REVISION NOTE: CHAPTER ${currentChapter.number} - ${currentChapter.titleEn.toUpperCase()}`,
      `Level: ${currentChapter.level} | Category: ${currentChapter.category}`,
      `Summary: ${currentChapter.descriptionEn || currentChapter.summaryEn || ""}`,
      "\nKEY LEARNING OBJECTIVES:",
      ...(currentChapter.learningIntentionsEn || []).map((li, i) => `${i + 1}. ${li}`),
      "\nSUBTOPIC HIGH-YIELD SUMMARIES:",
      ...currentChapter.subtopics.map(
        (st) => `[${st.number || st.titleEn}] ${st.titleEn}\n${st.summaryEn || ""}\nKey Concepts: ${(st.keyConcepts || []).join(", ")}`
      ),
      "\nEXAMINER DEFINITIONS & MARK SCHEME CRITERIA:",
      ...currentChapter.keyTerms.map((kt) => `• ${kt.termEn}: ${kt.defEn || kt.definitionEn || ""}`),
      ...(currentChapter.formulas && currentChapter.formulas.length > 0
        ? [
            "\nESSENTIAL FORMULAS:",
            ...currentChapter.formulas.map((f) => `• ${f.nameEn}: ${f.formula} (${f.note})`),
          ]
        : []),
      ...(currentChapter.examStyleTips && currentChapter.examStyleTips.length > 0
        ? ["\nEXAMINER TIPS & PITFALLS:", ...currentChapter.examStyleTips.map((t) => `⚠️ ${t}`)]
        : []),
    ];

    navigator.clipboard.writeText(lines.join("\n"));
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  // Revision progress stats
  const totalChaptersCount = ALL_CHAPTERS.length;
  const revisedCount = revisedChapters.length;
  const percentRevised = Math.round((revisedCount / totalChaptersCount) * 100);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Module Banner / Header */}
      <div className="rounded-2xl bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/50 border border-cyan-200/80 p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-cyan-100 text-cyan-800 border border-cyan-200">
                <BookmarkCheck className="w-6 h-6" />
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100/80 text-cyan-800 border border-cyan-200">
                High-Yield Syllabus Notes
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                32 Chapters • Paper 1, 2, 4 & 5
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Cambridge Chemistry Revision Notes & Cheat Sheets
            </h1>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              Concise, mark-scheme aligned revision summaries, key formulas, reaction conditions, and common examiner traps organized for rapid pre-exam mastery.
            </p>
          </div>

          {/* Quick Progress Indicator */}
          <div className="bg-white border border-slate-200 p-4 rounded-xl shrink-0 w-full md:w-64 space-y-2.5 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Revision Progress
              </span>
              <span className="text-cyan-800">{revisedCount} / {totalChaptersCount} ({percentRevised}%)</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-600 to-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${percentRevised}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>{starredChapters.length} bookmarked</span>
              <span>{totalChaptersCount - revisedCount} to review</span>
            </div>
          </div>
        </div>

        {/* Top-Level Module Mode Tabs */}
        <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveTab("chapter-notes")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                activeTab === "chapter-notes"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Chapter Notes (1–32)</span>
            </button>
            <button
              onClick={() => setActiveTab("formula-sheet")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                activeTab === "formula-sheet"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Atom className="w-4 h-4" />
              <span>Physical Formulas Cheat Sheet</span>
            </button>
            <button
              onClick={() => setActiveTab("organic-sheet")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                activeTab === "organic-sheet"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Organic Reagents Master</span>
            </button>
            <button
              onClick={() => setActiveTab("qa-sheet")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                activeTab === "qa-sheet"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <TestTube className="w-4 h-4" />
              <span>QA & Ion Identification</span>
            </button>
          </div>

          {/* Bilingual Toggle & PDF Export Trigger */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setPdfInitialChapter(selectedChapterNum);
                setIsPdfModalOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
              title="Generate and download custom PDF revision notes"
            >
              <FileDown className="w-4 h-4" />
              <span>Export Printable PDF Pack</span>
            </button>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setLangMode("bilingual")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  langMode === "bilingual"
                    ? "bg-cyan-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Bilingual (EN / MN)
              </button>
              <button
                onClick={() => setLangMode("en-only")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  langMode === "en-only"
                    ? "bg-cyan-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                English Only
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= TAB 1: CHAPTER-BY-CHAPTER REVISION NOTES ======================= */}
      {activeTab === "chapter-notes" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Chapter Browser Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-3.5 sticky top-20 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-600" />
                  Syllabus Chapters
                </span>
                <span className="text-[11px] font-semibold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200">
                  {filteredChapters.length} shown
                </span>
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search topic, formula, mechanism..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Level Filter Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                {(["ALL", "AS", "A2"] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`py-1.5 rounded-lg transition-all text-center ${
                      levelFilter === lvl
                        ? "bg-cyan-600 text-white shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {lvl === "ALL" ? "All Levels" : lvl}
                  </button>
                ))}
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px]">
                {["ALL", "Physical", "Inorganic", "Organic", "Analysis", "Practical"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-all ${
                      categoryFilter === cat
                        ? "bg-slate-800 text-white font-bold border border-slate-700"
                        : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Chapter Scrollable List */}
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
                {filteredChapters.map((ch) => {
                  const isSelected = ch.number === selectedChapterNum;
                  const isRevised = revisedChapters.includes(ch.number);
                  const isStarred = starredChapters.includes(ch.number);

                  return (
                    <div
                      key={ch.number}
                      onClick={() => setSelectedChapterNum(ch.number)}
                      className={`group w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-cyan-50/80 border-cyan-500 text-slate-900 shadow-2xs"
                          : "bg-slate-50/50 border-slate-200 hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                            isSelected
                              ? "bg-cyan-600 text-white font-bold"
                              : isRevised
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-white text-slate-700 border border-slate-200"
                          }`}
                        >
                          {ch.number}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-200 text-cyan-800">
                              {ch.level}
                            </span>
                            <span className="text-[10px] text-slate-500">{ch.category}</span>
                          </div>
                          <p className="text-xs font-bold truncate mt-0.5 group-hover:text-cyan-700">
                            {ch.titleEn}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        {isStarred && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
                        {isRevised ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Circle className="w-3.5 h-3.5 text-slate-300" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed High-Yield Revision Note Sheet (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6">
            {currentChapter && (
              <>
                {/* Chapter Note Header Card */}
                <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-800 font-black text-xl shadow-2xs">
                        {currentChapter.number}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-cyan-100 text-cyan-800 border border-cyan-200">
                            Cambridge {currentChapter.level}
                          </span>
                          {getLinkageForChapter(currentChapter.number)?.syllabusRef && (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200">
                              {getLinkageForChapter(currentChapter.number)?.syllabusRef}
                            </span>
                          )}
                          <span className="text-xs font-semibold text-slate-500">
                            {currentChapter.category} Chemistry
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                          {currentChapter.titleEn}
                        </h2>
                        {langMode === "bilingual" && currentChapter.titleMn && (
                          <p className="text-xs font-semibold text-cyan-700 mt-0.5">
                            {currentChapter.titleMn}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Fast Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2 self-end sm:self-auto">
                      <button
                        onClick={() => toggleRevised(currentChapter.number)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs border transition-all ${
                          revisedChapters.includes(currentChapter.number)
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                        title="Mark chapter as revised"
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${revisedChapters.includes(currentChapter.number) ? "text-emerald-600" : ""}`} />
                        <span>{revisedChapters.includes(currentChapter.number) ? "Revised" : "Mark Revised"}</span>
                      </button>

                      <button
                        onClick={() => toggleStarred(currentChapter.number)}
                        className={`p-2 rounded-xl border transition-all ${
                          starredChapters.includes(currentChapter.number)
                            ? "bg-amber-50 text-amber-600 border-amber-200"
                            : "bg-slate-100 text-slate-500 border-slate-200 hover:text-slate-800"
                        }`}
                        title="Bookmark / Star chapter"
                      >
                        <Star className={`w-3.5 h-3.5 ${starredChapters.includes(currentChapter.number) ? "fill-amber-500 text-amber-500" : ""}`} />
                      </button>

                      <button
                        onClick={() => {
                          setPdfInitialChapter(currentChapter.number);
                          setIsPdfModalOpen(true);
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 font-bold text-xs transition-all shadow-2xs"
                        title="Download printable PDF summary for this chapter"
                      >
                        <FileDown className="w-3.5 h-3.5" />
                        <span>Print / PDF Summary</span>
                      </button>

                      <button
                        onClick={copyChapterSummary}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs transition-all shadow-2xs"
                        title="Copy text summary to clipboard"
                      >
                        {copiedNotification ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Summary Overview */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-sm text-slate-700 leading-relaxed">
                    <p>{currentChapter.descriptionEn || currentChapter.summaryEn}</p>
                    {langMode === "bilingual" && (currentChapter.descriptionMn || currentChapter.summaryMn) && (
                      <p className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-200 italic">
                        {currentChapter.descriptionMn || currentChapter.summaryMn}
                      </p>
                    )}
                  </div>

                  {/* Connected Quick Links */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {onNavigateToQuiz && (
                      <button
                        onClick={() => onNavigateToQuiz(currentChapter.number)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-2xs transition-all"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>Practice Chapter MCQ Quiz</span>
                      </button>
                    )}
                    {onNavigateToFlashcards && (
                      <button
                        onClick={() => onNavigateToFlashcards(currentChapter.number)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs shadow-2xs transition-all"
                      >
                        <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Drill Flashcards</span>
                      </button>
                    )}
                    {onNavigateToChapter && (
                      <button
                        onClick={() => onNavigateToChapter(currentChapter)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs transition-all ml-auto"
                      >
                        <span>Full Syllabus View</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Section 1: Syllabus Learning Intentions & Revision Checklist */}
                {currentChapter.learningIntentionsEn && currentChapter.learningIntentionsEn.length > 0 && (
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-800 flex items-center gap-2">
                        <BookmarkCheck className="w-4 h-4 text-cyan-600" />
                        <span>Syllabus Learning Objectives Checklist</span>
                      </h3>
                      <span className="text-xs text-slate-500">
                        Tick off items as you revise
                      </span>
                    </div>

                    <div className="space-y-2">
                      {currentChapter.learningIntentionsEn.map((intent, idx) => {
                        const objKey = `ch-${currentChapter.number}-obj-${idx}`;
                        const isDone = checkedObjectives[objKey] || false;

                        return (
                          <div
                            key={idx}
                            onClick={() => toggleObjective(objKey)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                              isDone
                                ? "bg-emerald-50/60 border-emerald-200 text-slate-500"
                                : "bg-slate-50/50 border-slate-200 hover:border-slate-300 text-slate-800"
                            }`}
                          >
                            <div className="pt-0.5 shrink-0">
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Circle className="w-4 h-4 text-slate-400" />
                              )}
                            </div>
                            <div className="space-y-1 flex-1">
                              <p className={`text-xs font-medium leading-relaxed ${isDone ? "line-through text-slate-400" : "text-slate-800"}`}>
                                {intent}
                              </p>
                              {langMode === "bilingual" && currentChapter.learningIntentionsMn && currentChapter.learningIntentionsMn[idx] && (
                                <p className="text-[11px] text-slate-500 italic">
                                  {currentChapter.learningIntentionsMn[idx]}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Section 2: Subtopics High-Yield Revision Summaries */}
                <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-2xs">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-800 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-600" />
                    <span>High-Yield Subtopic Revision Summaries</span>
                  </h3>

                  <div className="space-y-4">
                    {currentChapter.subtopics.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-xl bg-slate-50/50 border border-slate-200 p-4 space-y-3 hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-200 font-mono text-xs font-bold">
                              {sub.number || `${currentChapter.number}.${sIdx + 1}`}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900">
                              {sub.titleEn}
                            </h4>
                          </div>
                          {langMode === "bilingual" && sub.titleMn && (
                            <span className="text-xs text-slate-500 hidden sm:inline">
                              {sub.titleMn}
                            </span>
                          )}
                        </div>

                        {/* Summary */}
                        {sub.summaryEn && (
                          <div className="text-xs text-slate-700 leading-relaxed space-y-1">
                            <p>{sub.summaryEn}</p>
                            {langMode === "bilingual" && sub.summaryMn && (
                              <p className="text-slate-500 text-[11px] italic">
                                {sub.summaryMn}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Key Concepts */}
                        {sub.keyConcepts && sub.keyConcepts.length > 0 && (
                          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1.5 shadow-2xs">
                            <span className="text-[11px] font-bold text-cyan-800 uppercase tracking-wider block">
                              Key Syllabus Principles:
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                              {sub.keyConcepts.map((kc, kIdx) => (
                                <li key={kIdx} className="flex items-start gap-1.5">
                                  <span className="text-cyan-600 font-bold">•</span>
                                  <span>{kc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Key Equations if present */}
                        {sub.keyEquations && sub.keyEquations.length > 0 && (
                          <div className="bg-blue-50/60 p-2.5 rounded-lg border border-blue-100 space-y-1">
                            <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block">
                              Key Equation / Relationship:
                            </span>
                            <div className="space-y-1">
                              {sub.keyEquations.map((eq, eIdx) => (
                                <p key={eIdx} className="font-mono text-xs text-blue-900 bg-white px-2 py-1 rounded border border-blue-200">
                                  {eq}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Examiner Tips for Subtopic */}
                        {sub.examinerTips && sub.examinerTips.length > 0 && (
                          <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-amber-800 block mb-0.5">Examiner Advice:</span>
                              {sub.examinerTips.map((tip, tIdx) => (
                                <p key={tIdx}>{tip}</p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Key Definitions & Cambridge Mark Scheme Keywords */}
                {currentChapter.keyTerms && currentChapter.keyTerms.length > 0 && (
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-800 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-cyan-600" />
                        <span>Exact Cambridge Mark Scheme Definitions</span>
                      </h3>
                      <span className="text-xs text-slate-500">
                        {currentChapter.keyTerms.length} core terms
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentChapter.keyTerms.map((kt, kIdx) => (
                        <div
                          key={kIdx}
                          className="p-3.5 rounded-xl bg-slate-50/50 border border-slate-200 hover:border-cyan-300 transition-colors space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-cyan-800">
                              {kt.termEn}
                            </h4>
                            {langMode === "bilingual" && kt.termMn && (
                              <span className="text-[11px] text-slate-500">
                                {kt.termMn}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {kt.defEn || kt.definitionEn}
                          </p>
                          {langMode === "bilingual" && (kt.defMn || kt.definitionMn) && (
                            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200 italic">
                              {kt.defMn || kt.definitionMn}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 4: Formulas & Calculation Reference */}
                {currentChapter.formulas && currentChapter.formulas.length > 0 && (
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-2xs">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-800 flex items-center gap-2">
                      <Atom className="w-4 h-4 text-cyan-600" />
                      <span>Mathematical Formulas & Working Guidelines</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentChapter.formulas.map((form, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3.5 rounded-xl bg-slate-50/50 border border-slate-200 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">
                              {form.nameEn}
                            </span>
                            {langMode === "bilingual" && form.nameMn && (
                              <span className="text-[11px] text-slate-500">
                                {form.nameMn}
                              </span>
                            )}
                          </div>
                          <div className="bg-white p-2 rounded-lg border border-slate-200 font-mono text-xs text-cyan-800 text-center font-bold shadow-2xs">
                            {form.formula}
                          </div>
                          <p className="text-[11px] text-slate-600">
                            {form.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 5: Common Examiner Traps & Pitfalls */}
                {currentChapter.examStyleTips && currentChapter.examStyleTips.length > 0 && (
                  <div className="rounded-2xl bg-amber-50/50 border border-amber-200 p-5 space-y-3 shadow-2xs">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-amber-800 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Examiner Traps & Common Mark Deductions</span>
                    </h3>

                    <ul className="space-y-2 text-xs text-amber-900">
                      {currentChapter.examStyleTips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-amber-200 shadow-2xs">
                          <span className="text-amber-600 font-bold shrink-0">⚠️</span>
                          <span className="leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Section 6: Personal Revision Scratchpad */}
                <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-600" />
                      <span>My Personal Revision Notes & Reminders</span>
                    </h3>
                    <span className="text-[11px] text-slate-500">
                      Auto-saved to local browser storage
                    </span>
                  </div>

                  <textarea
                    value={personalNotes[selectedChapterNum] || ""}
                    onChange={(e) => handleCustomNoteChange(e.target.value)}
                    placeholder="Write your personal mnemonics, reaction reminders, or questions to ask your teacher for this chapter..."
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 leading-relaxed transition-colors"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ======================= TAB 2: PHYSICAL FORMULAS CHEAT SHEET ======================= */}
      {activeTab === "formula-sheet" && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Atom className="w-5 h-5 text-cyan-600" />
                <span>Physical Chemistry Formula Master Cheat Sheet</span>
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Complete formulas for stoichiometry, gas laws, calorimetry, equilibria, kinetics, thermodynamics, electrochemistry & buffers.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setPdfInitialChapter(1);
                  setIsPdfModalOpen(true);
                }}
                className="px-3 py-1 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF Sheet</span>
              </button>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800 border border-cyan-200 shrink-0">
                {PHYSICAL_FORMULA_CHEAT_SHEET.length} Essential Formulas
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PHYSICAL_FORMULA_CHEAT_SHEET.map((fItem) => (
              <div
                key={fItem.id}
                className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3.5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-200 text-[10px] font-bold">
                        {fItem.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {fItem.topic}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-900">
                      {fItem.nameEn}
                    </span>
                  </div>

                  {/* Formula Display Box */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-sm text-cyan-800 text-center font-bold tracking-wide shadow-2xs">
                    {fItem.formula}
                  </div>

                  {/* Variables & Units breakdown */}
                  <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Variables & Units:
                    </span>
                    <ul className="space-y-1 text-slate-700">
                      {fItem.variables.map((v, vIdx) => (
                        <li key={vIdx} className="flex items-center justify-between text-[11px]">
                          <span className="font-mono font-bold text-cyan-700">{v.symbol}</span>
                          <span className="text-slate-600 text-right">{v.meaning} ({v.unit})</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Notes */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fItem.keyNotes}
                  </p>
                </div>

                {/* Examiner Tip */}
                {fItem.examinerTip && (
                  <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-xs text-amber-900 flex items-start gap-2 mt-2">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-800">Tip:</strong> {fItem.examinerTip}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================= TAB 3: ORGANIC REAGENTS CHEAT SHEET ======================= */}
      {activeTab === "organic-sheet" && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-cyan-600" />
                <span>Organic Synthetic Routes & Reagents Master Table</span>
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Functional group transformations, exact reagents, mandatory reaction conditions, and mechanisms (SN1/SN2, electrophilic addition, nitration).
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setPdfInitialChapter(1);
                  setIsPdfModalOpen(true);
                }}
                className="px-3 py-1 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF Sheet</span>
              </button>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800 border border-cyan-200 shrink-0">
                {ORGANIC_REAGENT_CHEAT_SHEET.length} Key Transformations
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {ORGANIC_REAGENT_CHEAT_SHEET.map((rItem) => (
              <div
                key={rItem.id}
                className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-2xs hover:border-slate-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-600 text-white font-bold text-xs">
                      {rItem.reactionType}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      {rItem.functionalGroup}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    Target: {rItem.targetGroup}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider block">
                      Reagents & Conditions:
                    </span>
                    <p className="font-semibold text-slate-800">{rItem.reagentsConditions}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider block">
                      Equation Example:
                    </span>
                    <p className="font-mono text-cyan-800 font-semibold">{rItem.equationExample}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {rItem.observationNote}
                </p>

                {rItem.examinerTrap && (
                  <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-800">Examiner Trap:</strong> {rItem.examinerTrap}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================= TAB 4: QA & ION IDENTIFICATION CHEAT SHEET ======================= */}
      {activeTab === "qa-sheet" && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <TestTube className="w-5 h-5 text-cyan-600" />
                <span>Qualitative Analysis (QA) & Practical Exam Reference</span>
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Standard observations, precipitate colors, confirmatory tests, and chemical explanations for Cambridge Practical & Theory exams.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setPdfInitialChapter(1);
                  setIsPdfModalOpen(true);
                }}
                className="px-3 py-1 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF Sheet</span>
              </button>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800 border border-cyan-200 shrink-0">
                {QA_CHEAT_SHEET.length} Common Ions & Tests
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QA_CHEAT_SHEET.map((qa) => (
              <div
                key={qa.id}
                className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-slate-900">
                      {qa.ionName}
                    </span>
                    <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-cyan-100 text-cyan-800 border border-cyan-200">
                      {qa.symbol}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 space-y-1 text-xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Reagent Added:
                    </span>
                    <p className="font-semibold text-slate-800">{qa.testWithReagent}</p>
                  </div>

                  <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-200 space-y-1 text-xs">
                    <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider block">
                      Observation:
                    </span>
                    <p className="text-slate-800 font-medium leading-relaxed">{qa.observation}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Chemistry:</strong> {qa.confirmatoryExplanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* PDF Generation & Printable Summary Modal */}
      <PdfRevisionSummaryModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        initialSelectedChapterNum={pdfInitialChapter}
        starredChapters={starredChapters}
        personalNotes={personalNotes}
      />
    </div>
  );
};
