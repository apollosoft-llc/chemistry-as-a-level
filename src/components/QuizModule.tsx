import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  BookOpen,
  GraduationCap,
  Sparkles,
  Timer,
  Award,
  AlertTriangle,
  ArrowRight,
  Filter,
  Check,
  Search,
  Shuffle,
  Layers,
  BarChart3,
  Bookmark,
  BookmarkCheck,
  Share2,
  FileText,
  Clock,
  Zap,
} from "lucide-react";
import { Chapter } from "../types";
import { ALL_CHAPTERS } from "../data/chaptersIndex";
import {
  GeneratedMCQ,
  filterQuestions,
  getAllQuizQuestions,
} from "../data/quizGenerator";

interface QuizModuleProps {
  onNavigateToFlashcards?: (chapterNumber?: number) => void;
  onNavigateToChapter?: (chapter: Chapter) => void;
  onNavigateToRevision?: (chapterNumber?: number) => void;
  onNavigateToPastPapers?: () => void;
  initialChapterNum?: number;
}

type QuizState = "config" | "active" | "results";
type FeedbackMode = "instant" | "exam";

interface UserAnswer {
  questionId: string;
  selectedOptionIndex: number | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

interface QuizHistoryEntry {
  id: string;
  date: string;
  level: string;
  category: string;
  chapterNumber: number | "ALL";
  score: number;
  total: number;
  percentage: number;
}

export const QuizModule: React.FC<QuizModuleProps> = ({
  onNavigateToFlashcards,
  onNavigateToChapter,
  onNavigateToRevision,
  onNavigateToPastPapers,
  initialChapterNum,
}) => {
  // Config states
  const [selectedLevel, setSelectedLevel] = useState<"ALL" | "AS" | "A2">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedChapterNum, setSelectedChapterNum] = useState<number | "ALL">(
    initialChapterNum || "ALL"
  );
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [feedbackMode, setFeedbackMode] = useState<FeedbackMode>("instant");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Quiz running states
  const [quizState, setQuizState] = useState<QuizState>("config");
  const [activeQuestions, setActiveQuestions] = useState<GeneratedMCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());

  // Local storage quiz history
  const [quizHistory, setQuizHistory] = useState<QuizHistoryEntry[]>(() => {
    try {
      const saved = localStorage.getItem("cambridge_9701_quiz_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save history
  useEffect(() => {
    try {
      localStorage.setItem("cambridge_9701_quiz_history", JSON.stringify(quizHistory));
    } catch (e) {
      console.error(e);
    }
  }, [quizHistory]);

  // Timer interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && quizState === "active") {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, quizState]);

  // Available questions pool count
  const availablePool = useMemo(() => {
    return filterQuestions(selectedLevel, selectedCategory, selectedChapterNum, searchQuery);
  }, [selectedLevel, selectedCategory, selectedChapterNum, searchQuery]);

  // Start a new Quiz session
  const handleStartQuiz = (countOverride?: number) => {
    const count = countOverride || questionCount;
    const pool = [...availablePool];
    if (pool.length === 0) return;

    // Shuffle pool and take requested count
    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, count);
    setActiveQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setQuizState("active");
  };

  // Pre-Flashcard Quick 5-Question Knowledge Check for a specific chapter
  const handleStartPreFlashcardCheck = (chapterNum: number) => {
    const chapterPool = filterQuestions("ALL", "ALL", chapterNum);
    if (chapterPool.length === 0) return;

    const count = Math.min(chapterPool.length, 5);
    const shuffled = [...chapterPool].sort(() => 0.5 - Math.random()).slice(0, count);
    setSelectedChapterNum(chapterNum);
    setActiveQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setFeedbackMode("instant");
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setQuizState("active");
  };

  const currentQ: GeneratedMCQ | undefined = activeQuestions[currentIndex];
  const currentAnswer: UserAnswer | undefined = currentQ ? userAnswers[currentQ.id] : undefined;

  // Handle option selection
  const handleSelectOption = (optionIndex: number) => {
    if (!currentQ) return;
    if (currentAnswer && feedbackMode === "instant") return; // locked after answering in instant mode

    const isCorrect = optionIndex === currentQ.correctAnswerIndex;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        questionId: currentQ.id,
        selectedOptionIndex: optionIndex,
        isCorrect,
        timeSpentSeconds: timerSeconds,
      },
    }));
  };

  // Toggle flag for review
  const handleToggleFlag = (id: string) => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Finish and calculate results
  const handleFinishQuiz = useCallback(() => {
    setIsTimerRunning(false);
    setQuizState("results");

    // Save to history
    let score = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id]?.isCorrect) {
        score++;
      }
    });

    const total = activeQuestions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const newEntry: QuizHistoryEntry = {
      id: `history-${Date.now()}`,
      date: new Date().toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      level: selectedLevel,
      category: selectedCategory,
      chapterNumber: selectedChapterNum,
      score,
      total,
      percentage,
    };

    setQuizHistory((prev) => [newEntry, ...prev.slice(0, 19)]);
  }, [activeQuestions, userAnswers, selectedLevel, selectedCategory, selectedChapterNum]);

  // Keyboard navigation for active test
  useEffect(() => {
    if (quizState !== "active") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (currentIndex < activeQuestions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      } else if (["1", "a", "A"].includes(e.key)) {
        handleSelectOption(0);
      } else if (["2", "b", "B"].includes(e.key)) {
        handleSelectOption(1);
      } else if (["3", "c", "C"].includes(e.key)) {
        handleSelectOption(2);
      } else if (["4", "d", "D"].includes(e.key)) {
        handleSelectOption(3);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [quizState, currentIndex, activeQuestions.length, currentAnswer, feedbackMode]);

  // Results calculation
  const resultsData = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;
    const chapterBreakdown: Record<
      number,
      { title: string; total: number; correct: number }
    > = {};

    activeQuestions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (!chapterBreakdown[q.chapterNumber]) {
        chapterBreakdown[q.chapterNumber] = {
          title: q.chapterTitle,
          total: 0,
          correct: 0,
        };
      }
      chapterBreakdown[q.chapterNumber].total++;

      if (ans && ans.selectedOptionIndex !== null) {
        if (ans.isCorrect) {
          correct++;
          chapterBreakdown[q.chapterNumber].correct++;
        } else {
          wrong++;
        }
      } else {
        unattempted++;
      }
    });

    const total = activeQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    let grade = "U";
    let gradeColor = "text-rose-400";
    if (percentage >= 85) {
      grade = "A* (Distinction)";
      gradeColor = "text-emerald-400";
    } else if (percentage >= 70) {
      grade = "A (Excellent)";
      gradeColor = "text-cyan-400";
    } else if (percentage >= 60) {
      grade = "B (Good)";
      gradeColor = "text-blue-400";
    } else if (percentage >= 50) {
      grade = "C (Pass)";
      gradeColor = "text-amber-400";
    } else if (percentage >= 40) {
      grade = "D (Borderline)";
      gradeColor = "text-orange-400";
    }

    // Identify weak chapters (<60% correct) for flashcard targeted drill
    const weakChapters = Object.entries(chapterBreakdown)
      .map(([numStr, data]) => ({
        chapterNum: Number(numStr),
        title: data.title,
        percent: Math.round((data.correct / data.total) * 100),
        correct: data.correct,
        total: data.total,
      }))
      .filter((c) => c.percent < 100);

    return {
      total,
      correct,
      wrong,
      unattempted,
      percentage,
      grade,
      gradeColor,
      chapterBreakdown,
      weakChapters,
    };
  }, [activeQuestions, userAnswers]);

  // Format timer seconds into mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-white via-cyan-50/50 to-blue-50/40 border border-cyan-200/80 p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-cyan-600" />
              Pre-Flashcard Knowledge Check & Cambridge 9701 Paper 1 MCQs
            </div>
            <h1 className="text-2xl font-black text-slate-900">
              Multiple-Choice Knowledge Check
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Test your understanding of chapter concepts and mark scheme definitions before drilling flashcards. Identify weak spots and jump directly into targeted active recall.
            </p>
          </div>

          {/* Quick Pre-Study Action Button */}
          {quizState !== "active" && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  setSelectedChapterNum("ALL");
                  handleStartQuiz(10);
                }}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-xs shadow-2xs flex items-center gap-2 transition-all"
              >
                <Zap className="w-4 h-4" />
                <span>Quick 10-Question Diagnostic</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================= MODE 1: QUIZ CONFIGURATION & PRE-STUDY DASHBOARD ================= */}
      {quizState === "config" && (
        <div className="space-y-6">
          {/* Past Papers Examination Banner */}
          {onNavigateToPastPapers && (
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-cyan-950 text-white p-5 shadow-sm border border-cyan-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Looking for Full Official Cambridge Paper 1 & Paper 2 Past Exams?
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  Access official 75-minute timed Paper 1 (MCQ) & Paper 2 (Structured Theory) exams with full mark schemes and grade threshold calculators.
                </p>
              </div>

              <button
                onClick={onNavigateToPastPapers}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-2xs transition-transform active:scale-95 flex items-center gap-1.5 shrink-0"
              >
                <span>Open Past Papers Library</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Pre-Flashcard Chapter Selector Callout Card */}
          <div className="rounded-2xl bg-white border border-cyan-200 p-5 shadow-2xs relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-cyan-600" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Step 1: Test Knowledge Before Starting Flashcards
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  Select any syllabus chapter below to take a fast 5-question pre-check. Questions test key terms, equations, and reaction concepts.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <select
                  value={selectedChapterNum}
                  onChange={(e) => {
                    const val = e.target.value === "ALL" ? "ALL" : Number(e.target.value);
                    setSelectedChapterNum(val);
                  }}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-cyan-600 font-semibold"
                >
                  <option value="ALL">Select a Chapter to Pre-Test...</option>
                  {ALL_CHAPTERS.map((ch) => (
                    <option key={ch.number} value={ch.number}>
                      Ch {ch.number}: {ch.titleEn} ({ch.level})
                    </option>
                  ))}
                </select>

                <button
                  disabled={selectedChapterNum === "ALL"}
                  onClick={() => {
                    if (selectedChapterNum !== "ALL") {
                      handleStartPreFlashcardCheck(selectedChapterNum);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 disabled:opacity-40 text-white font-bold text-xs shadow-2xs transition-all flex items-center gap-1.5"
                >
                  <span>Start Pre-Check</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Custom Quiz Builder Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-6 shadow-2xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-cyan-600" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Custom Knowledge Quiz Builder
                </h3>
              </div>
              <span className="text-xs font-semibold text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded-full border border-cyan-200">
                {availablePool.length} Questions in Pool
              </span>
            </div>

            {/* Filter grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Level */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Syllabus Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-cyan-600 font-medium"
                >
                  <option value="ALL">All Levels (AS & A2)</option>
                  <option value="AS">AS Level (Chapters 1–18)</option>
                  <option value="A2">A2 Level (Chapters 19–32)</option>
                </select>
              </div>

              {/* Branch */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Chemistry Branch
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-cyan-600 font-medium"
                >
                  <option value="ALL">All Branches</option>
                  <option value="Physical">Physical Chemistry</option>
                  <option value="Inorganic">Inorganic Chemistry</option>
                  <option value="Organic">Organic Chemistry</option>
                  <option value="Analysis">Analysis & Spectroscopy</option>
                  <option value="Practical">Practical & Advanced</option>
                </select>
              </div>

              {/* Number of Questions */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Quiz Length
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[5, 10, 15, 20].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setQuestionCount(num)}
                      className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        questionCount === num
                          ? "bg-cyan-600 border-cyan-600 text-white shadow-2xs"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {num} Qs
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Mode */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Explanation Mode
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setFeedbackMode("instant")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all ${
                      feedbackMode === "instant"
                        ? "bg-cyan-600 border-cyan-600 text-white shadow-2xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                    title="Shows mark scheme explanation immediately after each choice"
                  >
                    Instant Learn
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeedbackMode("exam")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all ${
                      feedbackMode === "exam"
                        ? "bg-cyan-600 border-cyan-600 text-white shadow-2xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                    title="Simulates exam condition: review all answers at the end"
                  >
                    Exam Mode
                  </button>
                </div>
              </div>
            </div>

            {/* Launch Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                <span>Selected: </span>
                <span className="font-semibold text-slate-900">
                  {selectedChapterNum === "ALL"
                    ? `${selectedLevel} • ${selectedCategory} Chemistry`
                    : `Chapter ${selectedChapterNum}`}
                </span>
                <span className="text-slate-500"> ({Math.min(questionCount, availablePool.length)} questions ready)</span>
              </div>

              <button
                onClick={() => handleStartQuiz()}
                disabled={availablePool.length === 0}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-sm shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <span>Begin Knowledge Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Chapter Pre-Test Grid (All 32 Chapters) */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-600" />
                <span>Chapter-by-Chapter Diagnostic Knowledge Checks</span>
              </h3>
              <span className="text-xs text-slate-500">Click any chapter to test 5 quick MCQs</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {ALL_CHAPTERS.map((ch) => (
                <div
                  key={ch.number}
                  className="bg-slate-50/60 border border-slate-200 hover:border-cyan-300 rounded-xl p-3 flex flex-col justify-between transition-all group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-cyan-800 bg-cyan-100 px-1.5 py-0.5 rounded border border-cyan-200">
                        Ch {ch.number}
                      </span>
                      <span className="font-semibold text-slate-500">{ch.level}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-cyan-700">
                      {ch.titleEn}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">{ch.category}</span>
                    <button
                      onClick={() => handleStartPreFlashcardCheck(ch.number)}
                      className="text-cyan-700 hover:text-cyan-800 font-bold flex items-center gap-1"
                    >
                      <span>Pre-Test</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Quiz History */}
          {quizHistory.length > 0 && (
            <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-600" />
                  <span>Recent Knowledge Check History</span>
                </h3>
                <button
                  onClick={() => {
                    if (window.confirm("Clear all quiz history records?")) {
                      setQuizHistory([]);
                    }
                  }}
                  className="text-xs text-slate-400 hover:text-rose-600"
                >
                  Clear History
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {quizHistory.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {item.chapterNumber === "ALL"
                          ? `${item.level} • ${item.category}`
                          : `Chapter ${item.chapterNumber}`}
                      </div>
                      <div className="text-[10px] text-slate-500">{item.date}</div>
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-base font-black ${
                          item.percentage >= 70
                            ? "text-emerald-600"
                            : item.percentage >= 50
                            ? "text-amber-600"
                            : "text-rose-600"
                        }`}
                      >
                        {item.score}/{item.total} ({item.percentage}%)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= MODE 2: ACTIVE QUESTION RUNNER ================= */}
      {quizState === "active" && currentQ && (
        <div className="space-y-4">
          {/* Header Bar: Progress, Timer, Flags */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (window.confirm("Exit current quiz? Your progress will be discarded.")) {
                    setQuizState("config");
                  }
                }}
                className="text-xs font-bold text-slate-700 hover:text-slate-900 px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200"
              >
                ← Exit Quiz
              </button>

              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-slate-900">
                  Question {currentIndex + 1} of {activeQuestions.length}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-200">
                  Ch {currentQ.chapterNumber} • {currentQ.level}
                </span>
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                  {currentQ.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-cyan-600" />
                <span>{formatTime(timerSeconds)}</span>
              </div>

              <button
                onClick={() => handleToggleFlag(currentQ.id)}
                className={`p-1.5 rounded-lg border transition-all ${
                  flaggedQuestions.has(currentQ.id)
                    ? "bg-amber-100 border-amber-300 text-amber-700"
                    : "bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-800"
                }`}
                title="Flag question for review"
              >
                <Bookmark className={`w-4 h-4 ${flaggedQuestions.has(currentQ.id) ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>

          {/* Main Question Box */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{currentQ.chapterTitle}</span>
                {currentQ.subtopicTag && (
                  <span className="text-cyan-700 font-semibold">{currentQ.subtopicTag}</span>
                )}
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                {currentQ.questionText}
              </h2>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((optionText, optIdx) => {
                const isSelected = currentAnswer?.selectedOptionIndex === optIdx;
                const isCorrect = optIdx === currentQ.correctAnswerIndex;
                const isAnswered = currentAnswer !== undefined;

                let optionStyle = "bg-slate-50/50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100";
                let badgeStyle = "bg-slate-200 text-slate-700";

                if (isAnswered && feedbackMode === "instant") {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-50 border-emerald-300 text-emerald-950 shadow-2xs";
                    badgeStyle = "bg-emerald-600 text-white";
                  } else if (isSelected && !isCorrect) {
                    optionStyle = "bg-rose-50 border-rose-300 text-rose-950";
                    badgeStyle = "bg-rose-600 text-white";
                  } else {
                    optionStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                  }
                } else if (isSelected && feedbackMode === "exam") {
                  optionStyle = "bg-cyan-50 border-cyan-400 text-cyan-950";
                  badgeStyle = "bg-cyan-600 text-white";
                }

                const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswered && feedbackMode === "instant"}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${badgeStyle}`}>
                        {letter}
                      </span>
                      <span className="text-sm font-medium leading-relaxed">{optionText}</span>
                    </div>

                    {isAnswered && feedbackMode === "instant" && (
                      <div className="shrink-0 mt-0.5">
                        {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                        {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Mode: Mark Scheme Explanation & Examiner Tip Box */}
            {currentAnswer !== undefined && feedbackMode === "instant" && (
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                      Cambridge Mark Scheme Explanation
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-600">
                    Correct: Option {String.fromCharCode(65 + currentQ.correctAnswerIndex)}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  {currentQ.explanationEn}
                </p>

                {currentQ.examinerTip && (
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 space-y-1">
                    <span className="font-bold text-amber-800 block uppercase tracking-wider text-[10px]">
                      Examiner Marking Tip:
                    </span>
                    <p>{currentQ.examinerTip}</p>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Nav Bar */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 disabled:opacity-40 text-xs font-bold flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Question Navigator Palette */}
              <div className="hidden md:flex items-center gap-1">
                {activeQuestions.map((q, idx) => {
                  const ans = userAnswers[q.id];
                  const isCurrent = idx === currentIndex;
                  let dotColor = "bg-slate-100 text-slate-700 border-slate-200";

                  if (ans) {
                    dotColor = ans.isCorrect
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-rose-600 text-white border-rose-600";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold border transition-all ${
                        isCurrent
                          ? "border-cyan-500 ring-2 ring-cyan-200"
                          : ""
                      } ${dotColor}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {currentIndex < activeQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinishQuiz}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                >
                  <Check className="w-4 h-4" />
                  <span>Submit Quiz & View Diagnosis</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODE 3: DIAGNOSTIC RESULTS & PRE-FLASHCARD ACTION ================= */}
      {quizState === "results" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Main Scorecard Card */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-cyan-600" />
              Diagnostic Knowledge Assessment Complete
            </div>

            <div>
              <div className={`text-5xl sm:text-7xl font-black ${resultsData.gradeColor}`}>
                {resultsData.percentage}%
              </div>
              <div className="text-lg font-bold text-slate-900 mt-2">
                Estimated Cambridge Grade: {resultsData.grade}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                You answered {resultsData.correct} out of {resultsData.total} questions correctly in {formatTime(timerSeconds)}.
              </p>
            </div>

            {/* Direct Pre-Flashcard Action Banner */}
            <div className="rounded-2xl bg-cyan-50/70 border border-cyan-200 p-5 text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Next Step: Reinforce Weak Concepts in Active Recall Flashcards
                  </h4>
                </div>
                <p className="text-xs text-slate-600">
                  {resultsData.weakChapters.length > 0
                    ? `You identified knowledge gaps in ${resultsData.weakChapters.length} chapter(s). Drill syllabus definitions and equations now.`
                    : "Great job! Cement your recall by reviewing flashcards for all definitions and equations."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {onNavigateToRevision && (
                  <button
                    onClick={() => {
                      const targetCh = resultsData.weakChapters.length > 0 ? resultsData.weakChapters[0].chapterNum : undefined;
                      onNavigateToRevision(targetCh);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-extrabold text-xs shadow-2xs flex items-center gap-2"
                  >
                    <BookmarkCheck className="w-4 h-4 text-cyan-600" />
                    <span>Revision Notes</span>
                  </button>
                )}
                {onNavigateToFlashcards && (
                  <button
                    onClick={() => {
                      const targetCh = resultsData.weakChapters.length > 0 ? resultsData.weakChapters[0].chapterNum : undefined;
                      onNavigateToFlashcards(targetCh);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs shadow-2xs flex items-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Practice Flashcards</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="text-xl font-bold text-emerald-600">{resultsData.correct}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Correct</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="text-xl font-bold text-rose-600">{resultsData.wrong}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Incorrect</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="text-xl font-bold text-slate-500">{resultsData.unattempted}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Skipped</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="text-xl font-bold text-cyan-700">{formatTime(timerSeconds)}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Total Time</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleStartQuiz()}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={() => setQuizState("config")}
                className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs"
              >
                Choose Another Chapter / Topic
              </button>
            </div>
          </div>

          {/* Detailed Question Review & Mark Scheme Solutions */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-2xs">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-200">
              <FileText className="w-4 h-4 text-cyan-600" />
              <span>Full Question Review & Model Solutions ({activeQuestions.length} Questions)</span>
            </h3>

            <div className="space-y-4">
              {activeQuestions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isCorrect = ans?.isCorrect;
                const userChoiceIdx = ans?.selectedOptionIndex;

                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-5 space-y-3 ${
                      isCorrect
                        ? "bg-slate-50/60 border-slate-200"
                        : "bg-rose-50/30 border-rose-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                            isCorrect
                              ? "bg-emerald-600 text-white"
                              : "bg-rose-600 text-white"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-cyan-800">
                          Ch {q.chapterNumber}: {q.chapterTitle}
                        </span>
                      </div>

                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isCorrect
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                            : "bg-rose-100 text-rose-800 border border-rose-200"
                        }`}
                      >
                        {isCorrect ? "Correct" : "Needs Review"}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-slate-900 leading-relaxed">
                      {q.questionText}
                    </h4>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((optText, oIdx) => {
                        const isCorrectOpt = oIdx === q.correctAnswerIndex;
                        const isUserOpt = oIdx === userChoiceIdx;

                        let style = "bg-white border-slate-200 text-slate-500";
                        if (isCorrectOpt) {
                          style = "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold";
                        } else if (isUserOpt && !isCorrectOpt) {
                          style = "bg-rose-50 border-rose-300 text-rose-950 font-semibold line-through";
                        }

                        return (
                          <div
                            key={oIdx}
                            className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}
                          >
                            <span>
                              {String.fromCharCode(65 + oIdx)}. {optText}
                            </span>
                            {isCorrectOpt && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                      <span className="font-bold text-cyan-800 block uppercase tracking-wider text-[10px]">
                        Mark Scheme Explanation:
                      </span>
                      <p>{q.explanationEn}</p>
                      {q.examinerTip && (
                        <p className="text-amber-800 pt-1">
                          <strong>Examiner Tip:</strong> {q.examinerTip}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
