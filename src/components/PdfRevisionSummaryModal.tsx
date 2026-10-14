import React, { useState, useMemo } from "react";
import {
  FileDown,
  Printer,
  X,
  Check,
  Sparkles,
  CheckSquare,
  Square,
  BookOpen,
  Atom,
  FlaskConical,
  TestTube,
  GraduationCap,
  AlertTriangle,
  FileText,
  Copy,
  Layers,
  Search,
  Filter,
  Eye,
  Sliders,
  CheckCircle2,
  Calendar,
  User,
} from "lucide-react";
import { Chapter } from "../types";
import { ALL_CHAPTERS } from "../data/chaptersIndex";
import {
  PHYSICAL_FORMULA_CHEAT_SHEET,
  ORGANIC_REAGENT_CHEAT_SHEET,
  QA_CHEAT_SHEET,
} from "../data/revisionCheatSheets";
import {
  PdfExportOptions,
  generateAndDownloadPdf,
  openPrintRevisionSummary,
} from "../utils/pdfGenerator";

interface PdfRevisionSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedChapterNum?: number;
  starredChapters?: number[];
  personalNotes?: Record<number, string>;
}

export const PdfRevisionSummaryModal: React.FC<PdfRevisionSummaryModalProps> = ({
  isOpen,
  onClose,
  initialSelectedChapterNum = 1,
  starredChapters = [],
  personalNotes = {},
}) => {
  // Selected Chapter IDs
  const [selectedChapterNums, setSelectedChapterNums] = useState<number[]>(() => {
    return initialSelectedChapterNum ? [initialSelectedChapterNum] : [1];
  });

  // Search & Filter within chapter picker
  const [chapterSearch, setChapterSearch] = useState<string>("");
  const [levelFilter, setLevelFilter] = useState<"ALL" | "AS" | "A2">("ALL");

  // Options & Inclusions
  const [studentName, setStudentName] = useState<string>("");
  const [examSeries, setExamSeries] = useState<string>("Cambridge 9701 • 2026/2027 Papers");
  const [langMode, setLangMode] = useState<"bilingual" | "en-only">("en-only");

  const [includeLearningObjectives, setIncludeLearningObjectives] = useState<boolean>(true);
  const [includeSubtopics, setIncludeSubtopics] = useState<boolean>(true);
  const [includeKeyTerms, setIncludeKeyTerms] = useState<boolean>(true);
  const [includeFormulas, setIncludeFormulas] = useState<boolean>(true);
  const [includeExaminerTraps, setIncludeExaminerTraps] = useState<boolean>(true);
  const [includePersonalNotes, setIncludePersonalNotes] = useState<boolean>(true);

  const [includePhysicalFormulasSheet, setIncludePhysicalFormulasSheet] = useState<boolean>(false);
  const [includeOrganicReagentsSheet, setIncludeOrganicReagentsSheet] = useState<boolean>(false);
  const [includeQaSheet, setIncludeQaSheet] = useState<boolean>(false);

  // Status indicators
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [previewTab, setPreviewTab] = useState<"options" | "preview">("options");

  if (!isOpen) return null;

  // Filtered chapters in list
  const filteredChapters = useMemo(() => {
    return ALL_CHAPTERS.filter((ch) => {
      if (levelFilter !== "ALL" && ch.level !== levelFilter) return false;
      if (chapterSearch.trim()) {
        const q = chapterSearch.toLowerCase();
        return (
          ch.number.toString().includes(q) ||
          ch.titleEn.toLowerCase().includes(q) ||
          ch.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [chapterSearch, levelFilter]);

  // Selected Chapter objects ordered by chapter number
  const selectedChapters = useMemo(() => {
    return ALL_CHAPTERS.filter((ch) => selectedChapterNums.includes(ch.number)).sort(
      (a, b) => a.number - b.number
    );
  }, [selectedChapterNums]);

  // Presets
  const selectAll = () => {
    setSelectedChapterNums(ALL_CHAPTERS.map((c) => c.number));
  };

  const selectAsOnly = () => {
    setSelectedChapterNums(ALL_CHAPTERS.filter((c) => c.level === "AS").map((c) => c.number));
  };

  const selectA2Only = () => {
    setSelectedChapterNums(ALL_CHAPTERS.filter((c) => c.level === "A2").map((c) => c.number));
  };

  const selectBookmarked = () => {
    if (starredChapters.length > 0) {
      setSelectedChapterNums(starredChapters);
    } else {
      setSelectedChapterNums([initialSelectedChapterNum || 1]);
    }
  };

  const selectCurrentOnly = () => {
    setSelectedChapterNums([initialSelectedChapterNum || 1]);
  };

  const clearAll = () => {
    setSelectedChapterNums([]);
  };

  const toggleChapter = (num: number) => {
    setSelectedChapterNums((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  // Compile options object
  const exportOptions: PdfExportOptions = {
    studentName: studentName.trim() || undefined,
    examSeries: examSeries.trim() || undefined,
    langMode,
    includeLearningObjectives,
    includeSubtopics,
    includeKeyTerms,
    includeFormulas,
    includeExaminerTraps,
    includePersonalNotes,
    includePhysicalFormulasSheet,
    includeOrganicReagentsSheet,
    includeQaSheet,
  };

  // Download PDF Handler
  const handleDownloadPdf = async () => {
    if (
      selectedChapters.length === 0 &&
      !includePhysicalFormulasSheet &&
      !includeOrganicReagentsSheet &&
      !includeQaSheet
    ) {
      alert("Please select at least one chapter or cheat sheet to generate.");
      return;
    }

    try {
      setIsGeneratingPdf(true);
      await generateAndDownloadPdf(
        selectedChapters,
        exportOptions,
        personalNotes,
        includePhysicalFormulasSheet ? PHYSICAL_FORMULA_CHEAT_SHEET : [],
        includeOrganicReagentsSheet ? ORGANIC_REAGENT_CHEAT_SHEET : [],
        includeQaSheet ? QA_CHEAT_SHEET : []
      );
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      alert("An error occurred while building the PDF. Please try again or use the Print/Save option.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Browser Print / Save to PDF Handler
  const handlePrint = () => {
    if (
      selectedChapters.length === 0 &&
      !includePhysicalFormulasSheet &&
      !includeOrganicReagentsSheet &&
      !includeQaSheet
    ) {
      alert("Please select at least one chapter or cheat sheet to print.");
      return;
    }

    openPrintRevisionSummary(
      selectedChapters,
      exportOptions,
      personalNotes,
      includePhysicalFormulasSheet ? PHYSICAL_FORMULA_CHEAT_SHEET : [],
      includeOrganicReagentsSheet ? ORGANIC_REAGENT_CHEAT_SHEET : [],
      includeQaSheet ? QA_CHEAT_SHEET : []
    );
  };

  // Copy plain text summary
  const handleCopyText = () => {
    if (selectedChapters.length === 0) return;

    const sections: string[] = [
      `CAMBRIDGE 9701 CHEMISTRY REVISION SUMMARY PACK`,
      `Candidate: ${studentName || "Candidate"} | Series: ${examSeries}`,
      `Total Chapters: ${selectedChapters.length}`,
      "=".repeat(60),
    ];

    selectedChapters.forEach((ch) => {
      sections.push(`\n[CHAPTER ${ch.number}: ${ch.titleEn.toUpperCase()}] (${ch.level} - ${ch.category})`);
      if (ch.descriptionEn || ch.summaryEn) {
        sections.push(`Summary: ${ch.descriptionEn || ch.summaryEn}`);
      }
      if (includeLearningObjectives && ch.learningIntentionsEn) {
        sections.push("\nLEARNING OBJECTIVES:\n" + ch.learningIntentionsEn.map((lo, i) => ` [ ] ${i + 1}. ${lo}`).join("\n"));
      }
      if (includeSubtopics && ch.subtopics) {
        sections.push(
          "\nSUBTOPICS:\n" +
            ch.subtopics
              .map(
                (s) =>
                  ` • ${s.number || ""} ${s.titleEn}: ${s.summaryEn || ""}\n   Key concepts: ${(s.keyConcepts || []).join(", ")}`
              )
              .join("\n")
        );
      }
      if (includeKeyTerms && ch.keyTerms) {
        sections.push("\nMARK SCHEME DEFINITIONS:\n" + ch.keyTerms.map((kt) => ` • ${kt.termEn}: ${kt.defEn || kt.definitionEn || ""}`).join("\n"));
      }
      if (includeFormulas && ch.formulas) {
        sections.push("\nFORMULAS:\n" + ch.formulas.map((f) => ` • ${f.nameEn}: ${f.formula} (${f.note})`).join("\n"));
      }
      if (includeExaminerTraps && ch.examStyleTips) {
        sections.push("\nEXAMINER TRAPS:\n" + ch.examStyleTips.map((t) => ` ⚠️ ${t}`).join("\n"));
      }
      if (includePersonalNotes && personalNotes[ch.number]) {
        sections.push(`\nPERSONAL NOTES:\n${personalNotes[ch.number]}`);
      }
      sections.push("-".repeat(40));
    });

    navigator.clipboard.writeText(sections.join("\n"));
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  // Stats for the summary badge
  const totalDefinitionsCount = selectedChapters.reduce(
    (acc, ch) => acc + (ch.keyTerms?.length || 0),
    0
  );
  const totalFormulasCount = selectedChapters.reduce(
    (acc, ch) => acc + (ch.formulas?.length || 0),
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-600/20">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span>Printable Revision Notes & Cheat Sheet Pack</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 font-bold uppercase tracking-wider">
                  PDF Export
                </span>
              </h2>
              <p className="text-xs text-slate-600">
                Select chapters, custom cheat sheets, and syllabus sections to generate a printable PDF study pack.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs (Configure vs. Live Document Preview) */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-100/70 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPreviewTab("options")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                previewTab === "options"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>1. Select Chapters & Sections</span>
            </button>
            <button
              onClick={() => setPreviewTab("preview")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                previewTab === "preview"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>2. Live Print Document Preview</span>
            </button>
          </div>

          {/* Quick Stats Pill */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold text-slate-600">
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200">
              <strong className="text-cyan-800">{selectedChapters.length}</strong> / 32 Chapters
            </span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200">
              <strong className="text-cyan-800">{totalDefinitionsCount}</strong> Definitions
            </span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200">
              <strong className="text-cyan-800">{totalFormulasCount}</strong> Formulas
            </span>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {previewTab === "options" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Chapter & Cheat Sheet Multi-Selector (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                {/* Preset Actions Toolbar */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-cyan-600" />
                      Select Revision Chapters ({selectedChapterNums.length} selected)
                    </span>
                    <button
                      onClick={clearAll}
                      className="text-[11px] font-bold text-rose-600 hover:underline"
                    >
                      Clear All
                    </button>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={selectCurrentOnly}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors"
                    >
                      Current (Ch {initialSelectedChapterNum})
                    </button>
                    <button
                      onClick={selectAsOnly}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-cyan-800 border border-slate-200 transition-colors"
                    >
                      All AS Level (Ch 1–11)
                    </button>
                    <button
                      onClick={selectA2Only}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-blue-800 border border-slate-200 transition-colors"
                    >
                      All A2 Level (Ch 12–32)
                    </button>
                    {starredChapters.length > 0 && (
                      <button
                        onClick={selectBookmarked}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition-colors"
                      >
                        Bookmarked ({starredChapters.length})
                      </button>
                    )}
                    <button
                      onClick={selectAll}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-200 transition-colors"
                    >
                      Select All 32 Chapters
                    </button>
                  </div>

                  {/* Search and Level filter */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="relative flex-1">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={chapterSearch}
                        onChange={(e) => setChapterSearch(e.target.value)}
                        placeholder="Search chapters by title or topic..."
                        className="w-full bg-white border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600"
                      />
                    </div>
                    <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 text-[11px] font-bold">
                      {(["ALL", "AS", "A2"] as const).map((lvl) => (
                        <button
                          key={lvl}
                          onClick={() => setLevelFilter(lvl)}
                          className={`px-2 py-1 rounded ${
                            levelFilter === lvl
                              ? "bg-cyan-600 text-white"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chapter Selection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-1 border border-slate-200 rounded-xl p-2 bg-slate-50/50">
                  {filteredChapters.map((ch) => {
                    const isChecked = selectedChapterNums.includes(ch.number);
                    return (
                      <div
                        key={ch.number}
                        onClick={() => toggleChapter(ch.number)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 text-left ${
                          isChecked
                            ? "bg-cyan-50/80 border-cyan-400 shadow-2xs"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="shrink-0">
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-cyan-600" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-300" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="font-bold text-xs text-slate-900">
                                Ch {ch.number}
                              </span>
                              <span className="text-[10px] px-1 py-0.2 rounded font-bold bg-slate-100 text-slate-600">
                                {ch.level}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 truncate font-medium">
                              {ch.titleEn}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0">
                          {ch.category}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Master Cheat Sheets inclusion */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-600" />
                    Include Master Cheat Sheets in Pack
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div
                      onClick={() => setIncludePhysicalFormulasSheet(!includePhysicalFormulasSheet)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                        includePhysicalFormulasSheet
                          ? "bg-cyan-50 border-cyan-400"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="pt-0.5 shrink-0">
                        {includePhysicalFormulasSheet ? (
                          <CheckSquare className="w-4 h-4 text-cyan-600" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-300" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          Physical Formulas
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {PHYSICAL_FORMULA_CHEAT_SHEET.length} Formulas
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => setIncludeOrganicReagentsSheet(!includeOrganicReagentsSheet)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                        includeOrganicReagentsSheet
                          ? "bg-cyan-50 border-cyan-400"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="pt-0.5 shrink-0">
                        {includeOrganicReagentsSheet ? (
                          <CheckSquare className="w-4 h-4 text-cyan-600" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-300" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          Organic Reagents
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {ORGANIC_REAGENT_CHEAT_SHEET.length} Routes
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => setIncludeQaSheet(!includeQaSheet)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                        includeQaSheet
                          ? "bg-cyan-50 border-cyan-400"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="pt-0.5 shrink-0">
                        {includeQaSheet ? (
                          <CheckSquare className="w-4 h-4 text-cyan-600" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-300" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          QA & Ion Tests
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {QA_CHEAT_SHEET.length} Common Ions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Content Section Toggles & Student Metadata (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                {/* Content Section Checkboxes */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    Chapter Content Sections to Include
                  </span>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 text-xs">
                      <input
                        type="checkbox"
                        checked={includeLearningObjectives}
                        onChange={(e) => setIncludeLearningObjectives(e.target.checked)}
                        className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          Learning Objectives Checklist
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Printed with tick-boxes for active study tracking
                        </span>
                      </div>
                    </label>

                    <label className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 text-xs">
                      <input
                        type="checkbox"
                        checked={includeSubtopics}
                        onChange={(e) => setIncludeSubtopics(e.target.checked)}
                        className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          High-Yield Subtopic Summaries
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Core syllabus principles and subtopic equations
                        </span>
                      </div>
                    </label>

                    <label className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 text-xs">
                      <input
                        type="checkbox"
                        checked={includeKeyTerms}
                        onChange={(e) => setIncludeKeyTerms(e.target.checked)}
                        className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          Cambridge Mark Scheme Definitions
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Official examiner keyword phrases & criteria
                        </span>
                      </div>
                    </label>

                    <label className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 text-xs">
                      <input
                        type="checkbox"
                        checked={includeFormulas}
                        onChange={(e) => setIncludeFormulas(e.target.checked)}
                        className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          Essential Mathematical Formulas
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Highlighted calculation working & variables
                        </span>
                      </div>
                    </label>

                    <label className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 text-xs">
                      <input
                        type="checkbox"
                        checked={includeExaminerTraps}
                        onChange={(e) => setIncludeExaminerTraps(e.target.checked)}
                        className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                      />
                      <div>
                        <span className="font-bold text-amber-800 block flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          Examiner Traps & Common Pitfalls
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Frequent mark deductions & misconceptions
                        </span>
                      </div>
                    </label>

                    <label className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 text-xs">
                      <input
                        type="checkbox"
                        checked={includePersonalNotes}
                        onChange={(e) => setIncludePersonalNotes(e.target.checked)}
                        className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                      />
                      <div>
                        <span className="font-bold text-emerald-800 block flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-emerald-600" />
                          My Personal Custom Notes
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Include your own notes written in the chapter scratchpad
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Candidate & Document Metadata */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 text-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-cyan-600" />
                    Cover Page & Candidate Header
                  </span>

                  <div className="space-y-2.5">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        Candidate Name / School:
                      </label>
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Alex Smith • Cambridge Chemistry Candidate"
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        Exam Series / Target Target:
                      </label>
                      <input
                        type="text"
                        value={examSeries}
                        onChange={(e) => setExamSeries(e.target.value)}
                        placeholder="e.g. May/June 2026 Paper 2 & 4"
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ================= LIVE PRINT DOCUMENT PREVIEW ================= */
            <div className="max-w-3xl mx-auto space-y-5 bg-slate-100 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-inner">
              <div className="text-center text-xs text-slate-500 pb-2">
                Document Layout Simulation • Optimized for A4 Portrait Print & Vector PDF Export
              </div>

              {/* Document Page Mockup */}
              <div className="bg-white border border-slate-300 rounded-xl p-6 sm:p-8 shadow-md space-y-6 text-slate-900 font-sans">
                {/* Simulated Document Header */}
                <div className="border-2 border-cyan-600 rounded-xl p-4 bg-slate-50/70 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest font-black text-cyan-700 block">
                    Cambridge Assessment International Education (9701)
                  </span>
                  <h1 className="text-lg sm:text-xl font-black text-slate-900">
                    Official Chemistry Revision Summary & Master Cheat Sheet
                  </h1>
                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200">
                    <span>
                      <strong>Candidate:</strong> {studentName || "Self-Study Student"}
                    </span>
                    <span>
                      <strong>Series:</strong> {examSeries}
                    </span>
                    <span>
                      <strong>Chapters:</strong> {selectedChapters.length} Selected
                    </span>
                  </div>
                </div>

                {/* Simulated Selected Chapters */}
                {selectedChapters.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 text-xs">
                    No chapters currently selected. Please switch to "Select Chapters" to choose topics.
                  </div>
                ) : (
                  selectedChapters.map((ch) => (
                    <div key={ch.number} className="border border-slate-200 rounded-xl overflow-hidden space-y-3 pb-3">
                      <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                        <h3 className="font-extrabold text-sm text-slate-900">
                          Chapter {ch.number}: {ch.titleEn}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-600 text-white uppercase">
                          {ch.level} • {ch.category}
                        </span>
                      </div>

                      <div className="px-4 space-y-3 text-xs">
                        {ch.descriptionEn && (
                          <p className="italic text-slate-600">{ch.descriptionEn}</p>
                        )}

                        {includeLearningObjectives && ch.learningIntentionsEn && (
                          <div className="space-y-1">
                            <span className="font-bold text-cyan-800 text-[11px] uppercase tracking-wider block">
                              Learning Objectives Checklist:
                            </span>
                            <ul className="space-y-1 text-slate-700 pl-1">
                              {ch.learningIntentionsEn.map((lo, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Square className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                                  <span>{lo}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {includeKeyTerms && ch.keyTerms && ch.keyTerms.length > 0 && (
                          <div className="space-y-1">
                            <span className="font-bold text-cyan-800 text-[11px] uppercase tracking-wider block">
                              Mark Scheme Definitions:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {ch.keyTerms.map((kt, i) => (
                                <div key={i} className="p-2 rounded bg-slate-50 border border-slate-200 text-[11px]">
                                  <strong className="text-cyan-900 block">{kt.termEn}:</strong>
                                  <span className="text-slate-700">{kt.defEn || kt.definitionEn}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {includeFormulas && ch.formulas && ch.formulas.length > 0 && (
                          <div className="space-y-1">
                            <span className="font-bold text-cyan-800 text-[11px] uppercase tracking-wider block">
                              Mathematical Formulas:
                            </span>
                            <div className="space-y-1">
                              {ch.formulas.map((f, i) => (
                                <div key={i} className="flex items-center justify-between p-2 rounded bg-cyan-50/60 border border-cyan-100 text-[11px]">
                                  <span className="font-semibold text-slate-800">{f.nameEn}</span>
                                  <code className="font-mono font-bold text-cyan-900">{f.formula}</code>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {includeExaminerTraps && ch.examStyleTips && ch.examStyleTips.length > 0 && (
                          <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 space-y-1">
                            <strong className="block text-amber-800">⚠️ Common Examiner Traps:</strong>
                            {ch.examStyleTips.map((tip, i) => (
                              <p key={i}>• {tip}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}

                {/* Footer simulation */}
                <div className="pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400">
                  Cambridge 9701 AS & A Level Chemistry Revision Companion • Generated on {new Date().toLocaleDateString("en-GB")}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Generation & Download Triggers */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold">
              {selectedChapters.length} Chapter{selectedChapters.length !== 1 ? "s" : ""}
            </span>
            {(includePhysicalFormulasSheet || includeOrganicReagentsSheet || includeQaSheet) && (
              <span>
                + {[
                  includePhysicalFormulasSheet ? "Formulas" : "",
                  includeOrganicReagentsSheet ? "Organic" : "",
                  includeQaSheet ? "QA" : "",
                ]
                  .filter(Boolean)
                  .join(", ")}{" "}
                Cheat Sheet
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={handleCopyText}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5"
              title="Copy consolidated markdown text to clipboard"
            >
              {copiedNotification ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-300 shadow-2xs transition-all flex items-center gap-1.5"
              title="Open browser print dialog / Save as PDF"
            >
              <Printer className="w-4 h-4 text-cyan-600" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf || selectedChapters.length === 0}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-transform active:scale-95"
            >
              {isGeneratingPdf ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Building PDF...</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF (.pdf)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
