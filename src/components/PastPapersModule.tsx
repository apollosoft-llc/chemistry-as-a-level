import React, { useState, useEffect, useMemo } from "react";
import {
  FileText,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  BookOpen,
  HelpCircle,
  Layers,
  Search,
  Filter,
  Check,
  Printer,
  Bookmark,
  BookmarkCheck,
  Eye,
  Edit3,
  Flag,
  BarChart2,
  ChevronDown,
  ChevronUp,
  Share2,
  ExternalLink,
  GraduationCap,
  FlaskConical,
  TestTubes,
  Zap,
  ShieldAlert,
} from "lucide-react";
import { PastPaper, PastPaperMCQQuestion, PastPaperTheoryQuestion, PastPaperTheoryPart } from "../types";
import { PAST_PAPERS, getPastPaperById } from "../data/pastPapersData";
import { PracticalVideoModal } from "./PracticalVideoModal";
import { ANIONS_DATA, CATIONS_DATA, GASES_DATA } from "../data/qualitativeAnalysisData";

interface PastPapersModuleProps {
  onNavigateToChapter?: (chapterNumber: number) => void;
  onNavigateToRevision?: (chapterNumber: number) => void;
  onNavigateToQualitative?: () => void;
  initialPaperId?: string;
}

type ViewState = "catalog" | "paper-active" | "paper-results";

export const PastPapersModule: React.FC<PastPapersModuleProps> = ({
  onNavigateToChapter,
  onNavigateToRevision,
  onNavigateToQualitative,
  initialPaperId,
}) => {
  // Navigation & filter states
  const [viewState, setViewState] = useState<ViewState>("catalog");
  const [selectedPaperType, setSelectedPaperType] = useState<
    "ALL" | "Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5"
  >("ALL");
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [langMode, setLangMode] = useState<"en" | "bilingual">("bilingual");
  const [selectedLabModalItem, setSelectedLabModalItem] = useState<{
    item: any;
    type: "anion" | "cation" | "gas" | "element";
  } | null>(null);

  const handleLaunchLabSim = (chNum: number, title: string = "") => {
    const t = title.toLowerCase();
    if (chNum === 9 || t.includes("halide") || t.includes("chloride") || t.includes("bromide") || t.includes("iodide")) {
      setSelectedLabModalItem({ item: ANIONS_DATA[1], type: "anion" }); // Chloride
    } else if (chNum === 11 || t.includes("sulfate") || t.includes("sulfite") || t.includes("nitrate")) {
      setSelectedLabModalItem({ item: ANIONS_DATA[3], type: "anion" }); // Nitrate/Sulfate
    } else if (chNum === 23 || t.includes("transition") || t.includes("copper") || t.includes("iron") || t.includes("cation")) {
      setSelectedLabModalItem({ item: CATIONS_DATA[3], type: "cation" }); // Cu2+
    } else if (chNum === 10 || t.includes("calcium") || t.includes("barium") || t.includes("carbonate")) {
      setSelectedLabModalItem({ item: ANIONS_DATA[0], type: "anion" }); // Carbonate
    } else {
      setSelectedLabModalItem({ item: ANIONS_DATA[1], type: "anion" });
    }
  };

  // Selected Active Paper
  const [activePaper, setActivePaper] = useState<PastPaper | null>(() => {
    if (initialPaperId) {
      return getPastPaperById(initialPaperId) || PAST_PAPERS[0];
    }
    return null;
  });

  // Paper 1 MCQ State
  const [mcqCurrentIndex, setMcqCurrentIndex] = useState<number>(0);
  const [mcqUserAnswers, setMcqUserAnswers] = useState<Record<string, number>>({}); // questionId -> optionIndex
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [mcqMode, setMcqMode] = useState<"exam" | "practice">("exam");

  // Theory / Practical / Planning State (Paper 2, 3, 4, 5)
  const [theoryQuestionIndex, setTheoryQuestionIndex] = useState<number>(0);
  const [theoryUserNotes, setTheoryUserNotes] = useState<Record<string, string>>({}); // partKey -> text
  const [revealedMarkSchemes, setRevealedMarkSchemes] = useState<Set<string>>(new Set()); // partKey
  const [awardedMarks, setAwardedMarks] = useState<Record<string, number>>({}); // partKey -> marks awarded

  // Exam Timer
  const [timerSecondsRemaining, setTimerSecondsRemaining] = useState<number>(75 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Filtered Papers Catalog
  const filteredPapers = useMemo(() => {
    return PAST_PAPERS.filter((paper) => {
      if (selectedPaperType !== "ALL" && paper.paperType !== selectedPaperType) return false;
      if (selectedYear !== "ALL" && paper.year.toString() !== selectedYear && selectedYear !== paper.series) {
        if (selectedYear === "Specimen" && paper.series !== "Specimen") return false;
        if (selectedYear !== "Specimen" && paper.year.toString() !== selectedYear) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          paper.title.toLowerCase().includes(q) ||
          paper.paperCode.toLowerCase().includes(q) ||
          paper.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedPaperType, selectedYear, searchQuery]);

  // Timer Countdown Effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSecondsRemaining > 0 && viewState === "paper-active") {
      interval = setInterval(() => {
        setTimerSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSecondsRemaining, viewState]);

  // Open a Paper
  const handleStartPaper = (paper: PastPaper, mode: "exam" | "practice" = "exam") => {
    setActivePaper(paper);
    setMcqMode(mode);
    setViewState("paper-active");
    setMcqCurrentIndex(0);
    setTheoryQuestionIndex(0);
    setMcqUserAnswers({});
    setFlaggedQuestions(new Set());
    setRevealedMarkSchemes(new Set());
    setAwardedMarks({});
    setTimerSecondsRemaining(paper.timeAllowedMinutes * 60);
    setIsTimerRunning(mode === "exam");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Format Timer String MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Toggle Flag Question
  const toggleFlag = (id: string) => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Select MCQ Option
  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setMcqUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  // Submit Paper 1 MCQ Exam
  const handleSubmitMcqExam = () => {
    setIsTimerRunning(false);
    setViewState("paper-results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate Paper 1 MCQ Results
  const mcqResults = useMemo(() => {
    if (!activePaper || activePaper.paperType !== "Paper 1" || !activePaper.mcqQuestions) {
      return { score: 0, total: 0, percentage: 0, grade: "U" };
    }
    const questions = activePaper.mcqQuestions;
    let score = 0;
    questions.forEach((q) => {
      if (mcqUserAnswers[q.id] === q.correctOptionIndex) {
        score += 1;
      }
    });
    const total = questions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const th = activePaper.gradeThresholds;
    let grade = "U";
    if (score >= th.A) grade = "A";
    else if (score >= th.B) grade = "B";
    else if (score >= th.C) grade = "C";
    else if (score >= th.D) grade = "D";
    else if (score >= th.E) grade = "E";

    return { score, total, percentage, grade };
  }, [activePaper, mcqUserAnswers]);

  // Calculate Theory Self-Assessment Score (Paper 2, 3, 4, 5)
  const theoryResults = useMemo(() => {
    if (!activePaper || !activePaper.theoryQuestions) {
      return { score: 0, maxPossible: 0, percentage: 0, grade: "U" };
    }
    let totalMax = 0;
    let earned = 0;
    activePaper.theoryQuestions.forEach((q) => {
      q.parts.forEach((p, pIdx) => {
        const key = `${q.id}-p${pIdx}`;
        totalMax += p.marks;
        earned += awardedMarks[key] || 0;
      });
    });
    const percentage = totalMax > 0 ? Math.round((earned / totalMax) * 100) : 0;

    const th = activePaper.gradeThresholds;
    let grade = "U";
    if (earned >= th.A) grade = "A";
    else if (earned >= th.B) grade = "B";
    else if (earned >= th.C) grade = "C";
    else if (earned >= th.D) grade = "D";
    else if (earned >= th.E) grade = "E";

    return { score: earned, maxPossible: totalMax, percentage, grade };
  }, [activePaper, awardedMarks]);

  // Toggle Mark Scheme Reveal
  const toggleMarkSchemeReveal = (key: string) => {
    setRevealedMarkSchemes((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // Set Awarded Mark for Theory Subpart
  const handleAwardMark = (key: string, mark: number, maxMarks: number) => {
    const clamped = Math.max(0, Math.min(mark, maxMarks));
    setAwardedMarks((prev) => ({
      ...prev,
      [key]: clamped,
    }));
  };

  const handlePrintPaper = () => {
    window.print();
  };

  // 5 Official Cambridge Papers Meta Information
  const paperTypesMeta = [
    {
      type: "Paper 1" as const,
      title: "Paper 1",
      subtitle: "MCQ (1h 15m, 40m)",
      colorClass: "text-cyan-700",
      activeBg: "bg-cyan-50 border-cyan-500 shadow-sm",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
      description: "Multiple Choice • 40 questions testing fundamental & applied concepts across Physical, Inorganic, and Organic Chemistry.",
    },
    {
      type: "Paper 2" as const,
      title: "Paper 2",
      subtitle: "AS Structured (1h 15m)",
      colorClass: "text-blue-700",
      activeBg: "bg-blue-50 border-blue-500 shadow-sm",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "AS Level Structured Questions • 60 marks with deep chemical equations, reaction mechanisms, and quantitative calculations.",
    },
    {
      type: "Paper 3" as const,
      title: "Paper 3",
      subtitle: "Practical Skills (2h)",
      colorClass: "text-emerald-700",
      activeBg: "bg-emerald-50 border-emerald-500 shadow-sm",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      description: "Advanced Practical Skills • 40 marks laboratory exam with Quantitative Titration, Calorimetry, and Qualitative Analysis of Unknown Salts.",
    },
    {
      type: "Paper 4" as const,
      title: "Paper 4",
      subtitle: "A Level Structured (2h)",
      colorClass: "text-amber-700",
      activeBg: "bg-amber-50 border-amber-500 shadow-sm",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      description: "A2 Level Structured Theory • 100 marks covering Advanced Thermodynamics (Born-Haber), Transition Metal Complexes, Electrochemistry & Arenes.",
    },
    {
      type: "Paper 5" as const,
      title: "Paper 5",
      subtitle: "Planning & Analysis",
      colorClass: "text-purple-700",
      activeBg: "bg-purple-50 border-purple-500 shadow-sm",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      description: "Planning, Analysis and Evaluation • 30 marks exam on Experimental Design (Variables, Safety), Graph Plotting, and Statistical Uncertainty Analysis.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* ========================================================================= */}
      {/* 1. CATALOG / PAPERS SELECTION VIEW                                        */}
      {/* ========================================================================= */}
      {viewState === "catalog" && (
        <div className="space-y-6">
          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950 to-blue-950 text-white p-6 sm:p-8 shadow-xl border border-cyan-900/40">
            <div className="relative z-10 max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  Cambridge 9701 Past Papers & Exam Library
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Official Mark Schemes & Thresholds
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Cambridge 9701 Past Papers (Paper 1 – Paper 5)
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Шалгалтын бүх 5 төрлийн paper-ийг сонгож бодит шалгалтын хугацаатай симулятор, албан ёсны Mark Scheme, алхамчилсан бодолтын логик, болон практик материалуудтай танилцана уу.
              </p>
            </div>
          </div>

          {/* 5 Papers Filter Cards (Exact match to user's uploaded buttons) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-600" />
                <span>Cambridge 9701 Examination Papers:</span>
              </span>
              <button
                onClick={() => setSelectedPaperType("ALL")}
                className={`text-xs font-bold px-2.5 py-1 rounded-lg transition-colors ${
                  selectedPaperType === "ALL"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Show All Papers ({PAST_PAPERS.length})
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {paperTypesMeta.map((p) => {
                const isSelected = selectedPaperType === p.type;
                const count = PAST_PAPERS.filter((item) => item.paperType === p.type).length;

                return (
                  <button
                    key={p.type}
                    onClick={() => setSelectedPaperType(p.type)}
                    className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between group shadow-2xs ${
                      isSelected
                        ? p.activeBg
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`font-black text-sm sm:text-base ${p.colorClass}`}>
                          {p.title}
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {count} paper{count > 1 ? "s" : ""}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5">
                        {p.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="line-clamp-1">{p.type === "Paper 3" ? "Practical Lab" : p.type === "Paper 5" ? "Planning" : p.type === "Paper 1" ? "40 MCQs" : "Theory"}</span>
                      <span className={`font-bold ${isSelected ? p.colorClass : "group-hover:translate-x-0.5"} transition-transform`}>
                        {isSelected ? "Active ✓" : "Нээх →"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Material Banner when Paper 3 is selected */}
          {selectedPaperType === "Paper 3" && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    Paper 3 Practical Lab Tools & Qualitative Analysis Notes
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Практик шалгалтын сорилууд, титрлэлт, үл мэдэгдэх давсуудыг таних албан ёсны QA лавлах болон 3D симуляци
                  </p>
                </div>
              </div>
              {onNavigateToQualitative && (
                <button
                  onClick={onNavigateToQualitative}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-2xs transition-colors shrink-0"
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>Open QA Notes & Lab Simulator</span>
                </button>
              )}
            </div>
          )}

          {/* Search & Year Filter Bar */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Filter Year / Series:</span>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                  {(["ALL", "2024", "2023", "Specimen"] as const).map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-2.5 py-1.5 rounded-lg transition-all ${
                        selectedYear === yr
                          ? "bg-slate-900 text-white shadow-2xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative min-w-[200px]">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search papers, code, topic..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                />
              </div>
            </div>
          </div>

          {/* Past Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredPapers.map((paper) => {
              const isP1 = paper.paperType === "Paper 1";
              const isP3 = paper.paperType === "Paper 3";
              const isP4 = paper.paperType === "Paper 4";
              const isP5 = paper.paperType === "Paper 5";

              let badgeStyle = "bg-cyan-100 text-cyan-800 border-cyan-200";
              if (paper.paperType === "Paper 2") badgeStyle = "bg-blue-100 text-blue-800 border-blue-200";
              if (isP3) badgeStyle = "bg-emerald-100 text-emerald-800 border-emerald-200";
              if (isP4) badgeStyle = "bg-amber-100 text-amber-800 border-amber-200";
              if (isP5) badgeStyle = "bg-purple-100 text-purple-800 border-purple-200";

              return (
                <div
                  key={paper.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all p-5 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider border ${badgeStyle}`}
                        >
                          {paper.paperType}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {paper.paperCode}
                        </span>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {paper.series} {paper.year}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 hover:text-cyan-700 transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {paper.description}
                      </p>
                    </div>

                    {/* Paper Metadata Badge Grid */}
                    <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-500 block">Total Marks</span>
                        <strong className="text-slate-900 font-black">{paper.totalMarks} Marks</strong>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-500 block">Time Allowed</span>
                        <strong className="text-slate-900 font-black">{paper.timeAllowedMinutes} Mins</strong>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-500 block">Grade A Threshold</span>
                        <strong className="text-emerald-700 font-black">{paper.gradeThresholds.A} / {paper.totalMarks}</strong>
                      </div>
                    </div>

                    {/* Practical Materials preview if available */}
                    {paper.practicalMaterials && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                        <span className="text-[10px] font-bold text-slate-600 uppercase flex items-center gap-1">
                          <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Apparatus & Lab Requirements Included:</span>
                        </span>
                        <p className="text-[11px] text-slate-600 line-clamp-1">
                          {paper.practicalMaterials.apparatusList?.slice(0, 3).join(" • ")}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <button
                      onClick={() => handleStartPaper(paper, "practice")}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      <span>{isP1 ? "Practice Mode (Untimed)" : "View Questions & Mark Scheme"}</span>
                    </button>

                    <button
                      onClick={() => handleStartPaper(paper, "exam")}
                      className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-transform active:scale-95 shadow-2xs flex items-center gap-1.5"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Start Timed Exam</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. ACTIVE EXAM / STUDY VIEW FOR PAPER 1 (MULTIPLE CHOICE)                 */}
      {/* ========================================================================= */}
      {viewState === "paper-active" && activePaper && activePaper.paperType === "Paper 1" && activePaper.mcqQuestions && (
        <div className="space-y-6">
          {/* Exam Header Bar */}
          <div className="sticky top-16 z-30 bg-white border border-slate-200 rounded-2xl p-4 shadow-md flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewState("catalog")}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors"
                title="Back to Papers Catalog"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Exit Paper</span>
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                    {activePaper.title}
                  </h2>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-bold uppercase">
                    Paper 1 MCQ
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Question {mcqCurrentIndex + 1} of {activePaper.mcqQuestions.length} • {Object.keys(mcqUserAnswers).length} Answered
                </p>
              </div>
            </div>

            {/* Timer & Submit controls */}
            <div className="flex items-center gap-3">
              {mcqMode === "exam" && (
                <div className="flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1.5 rounded-xl text-xs font-mono font-bold shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{formatTime(timerSecondsRemaining)}</span>
                </div>
              )}

              <button
                onClick={handleSubmitMcqExam}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-transform active:scale-95 shadow-2xs flex items-center gap-1"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Submit & Score</span>
              </button>
            </div>
          </div>

          {/* Active Question Box */}
          {(() => {
            const currentQ = activePaper.mcqQuestions[mcqCurrentIndex];
            const currentAnswer = mcqUserAnswers[currentQ.id];
            const isFlagged = flaggedQuestions.has(currentQ.id);

            return (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
                <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                      {mcqCurrentIndex + 1}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-slate-900">
                        Chapter {currentQ.chapterNumber}: {currentQ.chapterTitle}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        {currentQ.syllabusRef}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {onNavigateToChapter && (
                      <button
                        onClick={() => onNavigateToChapter(currentQ.chapterNumber)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold transition-colors"
                        title="Open theoretical study notes for this topic"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>📘 Ch {currentQ.chapterNumber} Онол</span>
                      </button>
                    )}
                    <button
                      onClick={() => handleLaunchLabSim(currentQ.chapterNumber, currentQ.questionText)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold transition-colors"
                      title="Open 3D lab simulation for this reaction"
                    >
                      <TestTubes className="w-3.5 h-3.5" />
                      <span>🧪 Лаборатори</span>
                    </button>
                    <button
                      onClick={() => toggleFlag(currentQ.id)}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors ${
                        isFlagged
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : "bg-slate-100 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Flag className={`w-3.5 h-3.5 ${isFlagged ? "fill-amber-500 text-amber-600" : ""}`} />
                      <span>{isFlagged ? "Flagged" : "Flag"}</span>
                    </button>
                  </div>
                </div>

                {/* Question Prompt */}
                <div className="space-y-2">
                  <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                    {currentQ.questionText}
                  </p>
                  {langMode === "bilingual" && currentQ.questionTextMn && (
                    <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      {currentQ.questionTextMn}
                    </p>
                  )}
                </div>

                {/* Multiple Choice Options */}
                <div className="space-y-2.5">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = currentAnswer === idx;
                    const letter = String.fromCharCode(65 + idx);

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(currentQ.id, idx)}
                        className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-3.5 ${
                          isSelected
                            ? "bg-cyan-50 border-cyan-600 text-cyan-950 font-bold shadow-2xs"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? "bg-cyan-600 text-white border-cyan-600"
                              : "bg-slate-100 text-slate-700 border-slate-300"
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="text-xs sm:text-sm leading-relaxed">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Practice Mode Live Explanation (if in practice mode and answered) */}
                {mcqMode === "practice" && currentAnswer !== undefined && (
                  <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 space-y-2 text-xs text-teal-950 animate-in fade-in">
                    <div className="flex items-center gap-2 font-bold">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                      <span>Instant Feedback (Practice Mode):</span>
                      <span className={currentAnswer === currentQ.correctOptionIndex ? "text-emerald-700" : "text-rose-700"}>
                        {currentAnswer === currentQ.correctOptionIndex ? "✓ Correct!" : `✗ Incorrect (Correct is ${String.fromCharCode(65 + currentQ.correctOptionIndex)})`}
                      </span>
                    </div>
                    <p>{currentQ.explanationEn}</p>
                    {currentQ.examinerTip && (
                      <p className="font-semibold text-amber-900 bg-amber-100/60 p-2 rounded border border-amber-200">
                        💡 Examiner Tip: {currentQ.examinerTip}
                      </p>
                    )}
                  </div>
                )}

                {/* Bottom Question Switcher Navigation */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <button
                    disabled={mcqCurrentIndex === 0}
                    onClick={() => setMcqCurrentIndex((prev) => prev - 1)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-1 overflow-x-auto max-w-[50%] p-1 no-scrollbar">
                    {activePaper.mcqQuestions.map((q, idx) => {
                      const isAns = mcqUserAnswers[q.id] !== undefined;
                      const isCur = idx === mcqCurrentIndex;
                      const isFlg = flaggedQuestions.has(q.id);

                      return (
                        <button
                          key={q.id}
                          onClick={() => setMcqCurrentIndex(idx)}
                          className={`w-6 h-6 rounded-md text-[10px] font-bold shrink-0 transition-all ${
                            isCur
                              ? "bg-cyan-600 text-white ring-2 ring-cyan-300"
                              : isFlg
                              ? "bg-amber-400 text-slate-950"
                              : isAns
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    disabled={mcqCurrentIndex === activePaper.mcqQuestions.length - 1}
                    onClick={() => setMcqCurrentIndex((prev) => prev + 1)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. ACTIVE VIEW FOR STRUCTURED QUESTIONS (PAPER 2, 3, 4, 5)                */}
      {/* ========================================================================= */}
      {viewState === "paper-active" && activePaper && activePaper.paperType !== "Paper 1" && activePaper.theoryQuestions && (
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="sticky top-16 z-30 bg-white border border-slate-200 rounded-2xl p-4 shadow-md flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewState("catalog")}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Exit Paper</span>
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                    {activePaper.title}
                  </h2>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold uppercase">
                    {activePaper.paperType}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Question {theoryQuestionIndex + 1} of {activePaper.theoryQuestions.length} • {activePaper.totalMarks} Marks Total
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrintPaper}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1"
                title="Print Paper"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>
              <button
                onClick={() => setViewState("catalog")}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>

          {/* Practical Materials banner if Paper 3 */}
          {activePaper.practicalMaterials && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span className="flex items-center gap-1.5">
                  <FlaskConical className="w-4 h-4 text-emerald-600" />
                  <span>Practical Apparatus & Reagents Provided:</span>
                </span>
                {onNavigateToQualitative && (
                  <button
                    onClick={onNavigateToQualitative}
                    className="text-emerald-700 underline font-bold"
                  >
                    View Official Qualitative Analysis Notes →
                  </button>
                )}
              </div>
              <p className="text-slate-600">
                {activePaper.practicalMaterials.apparatusList?.join(" • ")}
              </p>
            </div>
          )}

          {/* Theory Question Render */}
          {(() => {
            const currentQ = activePaper.theoryQuestions[theoryQuestionIndex];

            return (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
                <div className="border-b border-slate-100 pb-4 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-blue-700 uppercase">
                      Question {currentQ.questionNumber} • {currentQ.totalMarks} Marks
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      {currentQ.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    {onNavigateToChapter && (
                      <button
                        onClick={() => onNavigateToChapter(currentQ.chapterNumber)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold transition-colors shadow-2xs"
                        title="Open theoretical study notes for this chapter"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                        <span>📘 Ch {currentQ.chapterNumber}: {currentQ.chapterTitle} Онол</span>
                      </button>
                    )}

                    {onNavigateToQualitative && (activePaper.paperType === "Paper 3" || currentQ.title.toLowerCase().includes("qualitative") || currentQ.title.toLowerCase().includes("cation") || currentQ.title.toLowerCase().includes("anion")) && (
                      <button
                        onClick={onNavigateToQualitative}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold transition-colors shadow-2xs"
                        title="Open Qualitative Analysis table notes"
                      >
                        <FlaskConical className="w-3.5 h-3.5 text-teal-700" />
                        <span>🧪 QA Notes Лавлах</span>
                      </button>
                    )}

                    <button
                      onClick={() => handleLaunchLabSim(currentQ.chapterNumber, currentQ.title)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors shadow-2xs"
                      title="Open 3D lab simulation for this reaction"
                    >
                      <TestTubes className="w-3.5 h-3.5 text-emerald-700" />
                      <span>🔬 3D Симуляци</span>
                    </button>
                  </div>
                </div>

                {/* Context Prompt */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 whitespace-pre-line leading-relaxed">
                    {currentQ.contextPrompt}
                  </p>
                  {langMode === "bilingual" && currentQ.contextPromptMn && (
                    <p className="text-xs text-slate-600 italic border-t border-slate-200 pt-2">
                      {currentQ.contextPromptMn}
                    </p>
                  )}
                </div>

                {/* Parts of Question */}
                <div className="space-y-6">
                  {currentQ.parts.map((part, pIdx) => {
                    const partKey = `${currentQ.id}-p${pIdx}`;
                    const isRevealed = revealedMarkSchemes.has(partKey);
                    const userMark = awardedMarks[partKey] || 0;

                    return (
                      <div key={pIdx} className="border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3 bg-white">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-blue-700">{part.partLabel}</span>
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-100">
                                [{part.marks} mark{part.marks > 1 ? "s" : ""}]
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                              {part.subQuestionText}
                            </p>
                            {langMode === "bilingual" && part.subQuestionTextMn && (
                              <p className="text-xs text-slate-600 italic">
                                {part.subQuestionTextMn}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Student Working Area / Notes */}
                        <div className="space-y-1.5 pt-1">
                          <label className="text-[11px] font-bold text-slate-500 uppercase block">
                            Your Working / Answer Notes:
                          </label>
                          <textarea
                            rows={3}
                            value={theoryUserNotes[partKey] || ""}
                            onChange={(e) =>
                              setTheoryUserNotes((prev) => ({
                                ...prev,
                                [partKey]: e.target.value,
                              }))
                            }
                            placeholder="Type your chemical formula, calculation steps or bullet points..."
                            className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono focus:bg-white focus:outline-none focus:border-cyan-600"
                          />
                        </div>

                        {/* Reveal Official Mark Scheme & Model Answer */}
                        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <button
                            onClick={() => toggleMarkSchemeReveal(partKey)}
                            className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-bold transition-colors flex items-center gap-1.5 self-start"
                          >
                            <Eye className="w-3.5 h-3.5 text-indigo-600" />
                            <span>{isRevealed ? "Hide Official Mark Scheme" : "Reveal Cambridge Mark Scheme"}</span>
                          </button>

                          {/* Self Marker Award */}
                          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
                            <span className="font-bold text-slate-600">Self-Mark:</span>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: part.marks + 1 }).map((_, m) => (
                                <button
                                  key={m}
                                  onClick={() => handleAwardMark(partKey, m, part.marks)}
                                  className={`w-6 h-6 rounded text-xs font-bold transition-all ${
                                    userMark === m
                                      ? "bg-emerald-600 text-white shadow-2xs"
                                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                  }`}
                                >
                                  {m}
                                </button>
                              ))}
                              <span className="text-slate-400 font-bold">/ {part.marks}</span>
                            </div>
                          </div>
                        </div>

                        {/* Revealed Mark Scheme Box */}
                        {isRevealed && (
                          <div className="mt-3 p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-3 text-xs text-indigo-950 animate-in fade-in">
                            <div>
                              <span className="font-black text-indigo-900 uppercase block mb-1">
                                Official Cambridge Mark Scheme Points:
                              </span>
                              <ul className="space-y-1">
                                {part.markScheme.map((item, idx) => (
                                  <li key={idx} className="font-mono bg-white/70 p-1.5 rounded border border-indigo-100">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-2 border-t border-indigo-200">
                              <span className="font-bold text-indigo-900 block mb-0.5">Model Answer (English):</span>
                              <p className="text-slate-800 whitespace-pre-line leading-relaxed">{part.modelAnswer}</p>
                              {part.modelAnswerMn && (
                                <p className="text-indigo-800 italic mt-1 pt-1 border-t border-indigo-100">{part.modelAnswerMn}</p>
                              )}
                            </div>

                            {part.examinerNotes && (
                              <div className="p-2 rounded bg-amber-100/70 border border-amber-200 text-amber-900">
                                <strong>⚠️ Examiner Tip:</strong> {part.examinerNotes}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Question Switcher */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <button
                    disabled={theoryQuestionIndex === 0}
                    onClick={() => setTheoryQuestionIndex((prev) => prev - 1)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Question</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {activePaper.theoryQuestions.map((q, idx) => (
                      <button
                        key={q.id}
                        onClick={() => setTheoryQuestionIndex(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          theoryQuestionIndex === idx
                            ? "bg-blue-600 text-white shadow-xs"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        Q{idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={theoryQuestionIndex === activePaper.theoryQuestions.length - 1}
                    onClick={() => setTheoryQuestionIndex((prev) => prev + 1)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold flex items-center gap-1"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. PAPER 1 RESULTS SCORECARD                                              */}
      {/* ========================================================================= */}
      {viewState === "paper-results" && activePaper && activePaper.paperType === "Paper 1" && activePaper.mcqQuestions && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                  Cambridge 9701 Paper 1 Exam Results
                </span>
                <h2 className="text-2xl font-black text-slate-900">
                  {activePaper.title}
                </h2>
                <p className="text-xs text-slate-600">
                  Calculated against official Cambridge AS Level grade boundaries.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Raw Score</span>
                  <span className="text-3xl font-black text-slate-900">
                    {mcqResults.score} <span className="text-sm font-semibold text-slate-500">/ {mcqResults.total}</span>
                  </span>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex flex-col items-center justify-center text-white shadow-lg shadow-cyan-600/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Grade</span>
                  <span className="text-2xl font-black">{mcqResults.grade}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>Grade Boundaries:</span>
                <span>
                  <strong>A:</strong> {activePaper.gradeThresholds.A}M | <strong>B:</strong> {activePaper.gradeThresholds.B}M | <strong>C:</strong> {activePaper.gradeThresholds.C}M | <strong>D:</strong> {activePaper.gradeThresholds.D}M | <strong>E:</strong> {activePaper.gradeThresholds.E}M
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                <div
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 h-full transition-all duration-500"
                  style={{ width: `${mcqResults.percentage}%` }}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
              <button
                onClick={() => setViewState("catalog")}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                ← Back to Papers Library
              </button>

              <button
                onClick={() => handleStartPaper(activePaper, "exam")}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-2xs transition-transform active:scale-95 flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake This Exam</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3D Lab Simulator & Practical Video Modal */}
      {selectedLabModalItem && (
        <PracticalVideoModal
          item={selectedLabModalItem.item}
          type={selectedLabModalItem.type}
          onClose={() => setSelectedLabModalItem(null)}
        />
      )}
    </div>
  );
};
