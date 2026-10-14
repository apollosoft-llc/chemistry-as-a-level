import React, { useState, useMemo, useEffect } from "react";
import {
  FileText,
  Sliders,
  CheckCircle2,
  XCircle,
  Clock,
  Printer,
  Sparkles,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Check,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Layers,
  Award,
  Flame,
  Filter,
  Bookmark,
  Shuffle,
  Eye,
  EyeOff,
} from "lucide-react";
import { Chapter } from "../types";
import { ALL_CHAPTERS } from "../data/chaptersIndex";
import { PAST_PAPER_QUESTIONS_BANK, BankQuestion } from "../data/pastPaperQuestionsBank";
import { useLanguage } from "../utils/languageContext";
import { formatChemicalFormula } from "../utils/chemistryFormatter";

interface TestMakerModuleProps {
  onNavigateToChapter?: (chapter: Chapter) => void;
  onNavigateToPastPapers?: () => void;
}

type TestMakerState = "config" | "active-exam" | "results" | "print-view";
type ExamMode = "practice" | "timed-mock" | "printable";

export const TestMakerModule: React.FC<TestMakerModuleProps> = ({
  onNavigateToChapter,
  onNavigateToPastPapers,
}) => {
  const { language, t } = useLanguage();

  // Configuration States
  const [testState, setTestState] = useState<TestMakerState>("config");
  const [examMode, setExamMode] = useState<ExamMode>("practice");
  const [selectedPaperType, setSelectedPaperType] = useState<string>("ALL");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("ALL");
  const [selectedChapterNumbers, setSelectedChapterNumbers] = useState<number[]>(
    ALL_CHAPTERS.map((c) => c.number)
  );
  const [targetQuestionCount, setTargetQuestionCount] = useState<number>(10);
  const [customTestTitle, setCustomTestTitle] = useState<string>("Cambridge Chemistry 9701 Custom Mock Exam");

  // Generated Test Questions
  const [generatedQuestions, setGeneratedQuestions] = useState<BankQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number | string>>({});
  const [flaggedQuestionIds, setFlaggedQuestionIds] = useState<Set<string>>(new Set());
  const [revealedMarkSchemes, setRevealedMarkSchemes] = useState<Record<string, boolean>>({});

  // Timer State
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(600);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Quick Chapter Preset Selectors
  const handleSelectAllChapters = () => {
    setSelectedChapterNumbers(ALL_CHAPTERS.map((c) => c.number));
  };
  const handleSelectASChapters = () => {
    setSelectedChapterNumbers(ALL_CHAPTERS.filter((c) => c.level === "AS").map((c) => c.number));
  };
  const handleSelectA2Chapters = () => {
    setSelectedChapterNumbers(ALL_CHAPTERS.filter((c) => c.level === "A2").map((c) => c.number));
  };
  const handleToggleChapter = (num: number) => {
    setSelectedChapterNumbers((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  // Generate Test Function
  const handleGenerateTest = () => {
    let pool = PAST_PAPER_QUESTIONS_BANK.filter((q) =>
      selectedChapterNumbers.includes(q.chapterNumber)
    );

    if (selectedPaperType !== "ALL") {
      pool = pool.filter((q) => q.paperType === selectedPaperType);
    }
    if (selectedDifficulty !== "ALL") {
      pool = pool.filter((q) => q.difficulty === selectedDifficulty);
    }

    // Shuffle and pick
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, Math.min(targetQuestionCount, shuffled.length));

    if (chosen.length === 0) {
      alert("Сонгосон шалгуурт тохирох асуулт олдсонгүй. Бүлгийн сонголтоо нэмэгдүүлнэ үү.");
      return;
    }

    setGeneratedQuestions(chosen);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedQuestionIds(new Set());
    setRevealedMarkSchemes({});

    // Set timer (1.5 min per question)
    const totalTime = Math.max(300, chosen.length * 90);
    setTimeRemainingSeconds(totalTime);
    setIsTimerRunning(examMode === "timed-mock");

    if (examMode === "printable") {
      setTestState("print-view");
    } else {
      setTestState("active-exam");
    }
  };

  // Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && testState === "active-exam" && timeRemainingSeconds > 0) {
      interval = setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setTestState("results");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, testState, timeRemainingSeconds]);

  // Format Time
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${rem.toString().padStart(2, "0")}`;
  };

  const handleSelectMCQOption = (qId: string, optIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleToggleFlag = (qId: string) => {
    setFlaggedQuestionIds((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const handleToggleMarkScheme = (qId: string) => {
    setRevealedMarkSchemes((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Calculate Score & Predicted Cambridge Grade
  const resultsData = useMemo(() => {
    let totalScore = 0;
    let maxPossible = 0;

    generatedQuestions.forEach((q) => {
      maxPossible += q.marks;
      if (q.paperType === "Paper 1" && q.correctOptionIndex !== undefined) {
        if (userAnswers[q.id] === q.correctOptionIndex) {
          totalScore += q.marks;
        }
      } else {
        // For structured questions in practice mode
        if (userAnswers[q.id]) {
          totalScore += q.marks;
        }
      }
    });

    const percentage = maxPossible > 0 ? Math.round((totalScore / maxPossible) * 100) : 0;
    let grade = "U";
    if (percentage >= 80) grade = "A*";
    else if (percentage >= 70) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";
    else if (percentage >= 40) grade = "D";
    else if (percentage >= 30) grade = "E";

    return { totalScore, maxPossible, percentage, grade };
  }, [generatedQuestions, userAnswers]);

  const activeQuestion = generatedQuestions[currentQuestionIndex];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Configuration Screen */}
      {testState === "config" && (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-cyan-950 text-white rounded-2xl p-6 shadow-xl border border-cyan-800/40 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/30">
                    Cambridge 9701 Test Generator
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                    Custom Worksheets & Mock Exams
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
                  <Sliders className="w-8 h-8 text-cyan-400" />
                  {language === "mn" ? "Сорил Үүсгэгч & Шалгалтын Генератор" : "Cambridge Test Maker & Exam Builder"}
                </h1>
                <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                  {language === "mn"
                    ? "Хүссэн бүлэг, Paper-ийн төрөл, асуултын тоогоо тохируулан бие даасан шалгалт, дасгал сорил эсвэл хэвлэх ажлын хуудас үүсгээрэй."
                    : "Create customized practice tests, timed mock examinations, or printable Cambridge worksheets from authentic past papers."}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleGenerateTest}
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm shrink-0"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>{language === "mn" ? "Шалгалт Үүсгэх" : "Generate Examination"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Configuration Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Col: Paper Style, Mode & Target Q Count */}
            <div className="lg:col-span-5 space-y-5">
              {/* Exam Mode Selection */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-600" />
                  <span>1. Шалгалтын горим (Test Format Mode)</span>
                </h3>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setExamMode("practice")}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      examMode === "practice"
                        ? "bg-cyan-50 border-cyan-500 text-cyan-900 ring-1 ring-cyan-500 font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <BookOpen className="w-4 h-4 mx-auto mb-1 text-cyan-600" />
                    <div className="text-xs font-bold">Дадлага</div>
                    <div className="text-[10px] text-slate-500">Шууд тайлбартай</div>
                  </button>

                  <button
                    onClick={() => setExamMode("timed-mock")}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      examMode === "timed-mock"
                        ? "bg-blue-50 border-blue-500 text-blue-900 ring-1 ring-blue-500 font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Clock className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                    <div className="text-xs font-bold">Цагтай Mock</div>
                    <div className="text-[10px] text-slate-500">Үнэлгээ & Дүн</div>
                  </button>

                  <button
                    onClick={() => setExamMode("printable")}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      examMode === "printable"
                        ? "bg-emerald-50 border-emerald-500 text-emerald-900 ring-1 ring-emerald-500 font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Printer className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                    <div className="text-xs font-bold">Хэвлэх PDF</div>
                    <div className="text-[10px] text-slate-500">Ажлын хуудас</div>
                  </button>
                </div>
              </div>

              {/* Paper Type Filter */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-600" />
                  <span>2. Paper-ийн төрөл (Syllabus Paper Type)</span>
                </h3>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: "ALL", name: "Бүх төрөл (All Papers)" },
                    { id: "Paper 1", name: "Paper 1 (MCQ Сонгох)" },
                    { id: "Paper 2", name: "Paper 2 (AS Structured)" },
                    { id: "Paper 4", name: "Paper 4 (A2 Structured)" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPaperType(p.id)}
                      className={`p-2.5 rounded-xl border text-left font-bold transition-all ${
                        selectedPaperType === p.id
                          ? "bg-cyan-600 text-white border-cyan-600 shadow-xs"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Count & Difficulty */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5 flex items-center justify-between">
                    <span>3. Асуултын тоо:</span>
                    <span className="text-cyan-700 font-mono font-black">{targetQuestionCount} асуулт</span>
                  </label>
                  <div className="flex gap-2">
                    {[5, 10, 15, 20, 40].map((count) => (
                      <button
                        key={count}
                        onClick={() => setTargetQuestionCount(count)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                          targetQuestionCount === count
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {count} Qs
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5">
                    4. Хүндрэлийн түвшин (Difficulty):
                  </label>
                  <div className="grid grid-cols-4 gap-1.5 text-xs">
                    {["ALL", "Easy", "Medium", "Hard"].map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(diff)}
                        className={`py-1.5 rounded-lg font-bold border transition-all text-center ${
                          selectedDifficulty === diff
                            ? "bg-cyan-700 text-white border-cyan-700"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {diff === "ALL" ? "Холимог" : diff}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Multi-Chapter Selector */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-600" />
                    <span>5. Сэдэв & Бүлгүүд сонгох ({selectedChapterNumbers.length} / {ALL_CHAPTERS.length})</span>
                  </h3>
                  <p className="text-xs text-slate-500">Шалгалтад хамруулах бүлгүүдээ сонгоно уу</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <button
                    onClick={handleSelectAllChapters}
                    className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                  >
                    Бүгд
                  </button>
                  <button
                    onClick={handleSelectASChapters}
                    className="px-2.5 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold"
                  >
                    AS (1-18)
                  </button>
                  <button
                    onClick={handleSelectA2Chapters}
                    className="px-2.5 py-1 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold"
                  >
                    A2 (19-32)
                  </button>
                </div>
              </div>

              {/* Chapters Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[420px] overflow-y-auto pr-1">
                {ALL_CHAPTERS.map((ch) => {
                  const isChecked = selectedChapterNumbers.includes(ch.number);
                  return (
                    <div
                      key={ch.number}
                      onClick={() => handleToggleChapter(ch.number)}
                      className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                        isChecked
                          ? "bg-cyan-50/70 border-cyan-400 text-slate-900 shadow-2xs"
                          : "bg-slate-50/60 border-slate-200 text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center text-white shrink-0 ${
                          isChecked ? "bg-cyan-600" : "border border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>

                      <div className="text-xs min-w-0">
                        <div className="font-bold truncate">
                          Ch {ch.number}: {language === "mn" ? ch.titleMn : ch.titleEn}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {ch.category} • {ch.level} Level
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Exam Running Screen */}
      {testState === "active-exam" && activeQuestion && (
        <div className="space-y-6">
          {/* Exam Header Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-cyan-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                {currentQuestionIndex + 1}
              </span>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Question {currentQuestionIndex + 1} of {generatedQuestions.length}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  {activeQuestion.paperCode} • {activeQuestion.questionNumber} • [{activeQuestion.marks} Marks]
                </div>
              </div>
            </div>

            {/* Timer or Finish Button */}
            <div className="flex items-center gap-2">
              {examMode === "timed-mock" && (
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 text-cyan-300 font-mono font-bold text-sm">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>{formatTime(timeRemainingSeconds)}</span>
                </div>
              )}

              <button
                onClick={() => handleToggleFlag(activeQuestion.id)}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1 ${
                  flaggedQuestionIds.has(activeQuestion.id)
                    ? "bg-amber-100 border-amber-300 text-amber-900"
                    : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                }`}
                title="Flag for review"
              >
                <Bookmark className="w-4 h-4" />
                <span className="hidden sm:inline">Тэмдэглэх</span>
              </button>

              <button
                onClick={() => setTestState("results")}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Шалгалт дуусгах</span>
              </button>
            </div>
          </div>

          {/* Question Body + Options / Working Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-cyan-100 text-cyan-800">
                    {activeQuestion.chapterTitle} (Ch {activeQuestion.chapterNumber})
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {activeQuestion.difficulty}
                  </span>
                </div>

                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2 font-sans text-sm sm:text-base leading-relaxed">
                  <p>{activeQuestion.questionText}</p>
                  {activeQuestion.questionTextMn && (
                    <p className="text-xs text-slate-300 pt-2 border-t border-slate-800">
                      {activeQuestion.questionTextMn}
                    </p>
                  )}
                </div>

                {/* Multiple Choice Options */}
                {activeQuestion.options && (
                  <div className="space-y-2.5 pt-2">
                    {activeQuestion.options.map((option, optIdx) => {
                      const letter = ["A", "B", "C", "D"][optIdx];
                      const isSelected = userAnswers[activeQuestion.id] === optIdx;

                      return (
                        <div
                          key={optIdx}
                          onClick={() => handleSelectMCQOption(activeQuestion.id, optIdx)}
                          className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                            isSelected
                              ? "bg-cyan-50 border-cyan-500 text-cyan-950 font-bold ring-1 ring-cyan-500 shadow-xs"
                              : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                          }`}
                        >
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                              isSelected
                                ? "bg-cyan-600 text-white"
                                : "bg-white border border-slate-300 text-slate-700"
                            }`}
                          >
                            {letter}
                          </span>
                          <span className="text-xs sm:text-sm">{option}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Practice Mode Mark Scheme Toggle */}
                {examMode === "practice" && (
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <button
                      onClick={() => handleToggleMarkScheme(activeQuestion.id)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      {revealedMarkSchemes[activeQuestion.id] ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Бодолт нуух</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Кембрижийн Бодолт & Шалгуур харах</span>
                        </>
                      )}
                    </button>

                    {revealedMarkSchemes[activeQuestion.id] && (
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-2 animate-in fade-in">
                        <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Official Mark Scheme & Model Answer:
                        </div>
                        <div className="font-mono bg-white p-3 rounded-lg border border-emerald-100 text-slate-800 whitespace-pre-line">
                          {formatChemicalFormula(activeQuestion.modelAnswer)}
                        </div>
                        <div className="text-amber-900 bg-amber-50 p-2 rounded border border-amber-200">
                          <strong className="text-amber-800">Шалгагчийн зөвлөгөө: </strong>
                          {activeQuestion.examinerTipMn || activeQuestion.examinerTip}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Question Next/Prev Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700"
                  >
                    ← Өмнөх
                  </button>

                  <span className="text-xs font-mono text-slate-500">
                    {currentQuestionIndex + 1} / {generatedQuestions.length}
                  </span>

                  <button
                    disabled={currentQuestionIndex === generatedQuestions.length - 1}
                    onClick={() =>
                      setCurrentQuestionIndex((prev) =>
                        Math.min(generatedQuestions.length - 1, prev + 1)
                      )
                    }
                    className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-xs font-bold text-white shadow-2xs"
                  >
                    Дараах →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Col: Question Navigator Palette */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Question Navigator
              </h4>

              <div className="grid grid-cols-5 gap-2">
                {generatedQuestions.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isFlagged = flaggedQuestionIds.has(q.id);

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-9 rounded-xl font-bold text-xs flex items-center justify-center relative transition-all ${
                        isCurrent
                          ? "bg-cyan-600 text-white shadow-md ring-2 ring-cyan-300 font-black"
                          : isAnswered
                          ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                      }`}
                    >
                      <span>{idx + 1}</span>
                      {isFlagged && (
                        <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-1 right-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300 inline-block" />
                  <span>Хариулсан</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-amber-500 inline-block" />
                  <span>Тэмдэглэсэн (Flagged)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-cyan-600 inline-block" />
                  <span>Одоо үзэж буй</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Screen */}
      {testState === "results" && (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-lg space-y-4">
            <Award className="w-16 h-16 text-amber-500 mx-auto animate-bounce" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Шалгалтын Дүн & Үнэлгээ
              </h2>
              <p className="text-xs text-slate-500 mt-1">Cambridge Chemistry 9701 Mock Exam Results</p>
            </div>

            {/* Score Badges */}
            <div className="flex items-center justify-center gap-6 py-4">
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-center min-w-[120px]">
                <div className="text-xs text-cyan-800 font-bold uppercase">Оноо</div>
                <div className="text-3xl font-black text-cyan-950">
                  {resultsData.totalScore} / {resultsData.maxPossible}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center min-w-[120px]">
                <div className="text-xs text-emerald-800 font-bold uppercase">Хувь</div>
                <div className="text-3xl font-black text-emerald-950">
                  {resultsData.percentage}%
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center min-w-[120px]">
                <div className="text-xs text-amber-800 font-bold uppercase">Predicted Grade</div>
                <div className="text-3xl font-black text-amber-950">
                  {resultsData.grade}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => setTestState("config")}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Шинэ сорил үүсгэх</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Printable Paper & Mark Scheme View */}
      {testState === "print-view" && (
        <div className="bg-white rounded-2xl border border-slate-300 p-8 shadow-md space-y-8 print:p-0 print:border-none">
          {/* Cambridge Header Format */}
          <div className="border-b-2 border-slate-900 pb-4 flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-slate-500">
                Cambridge Assessment International Education
              </div>
              <h2 className="text-xl font-black text-slate-900 mt-1">
                {customTestTitle}
              </h2>
              <div className="text-xs font-mono text-slate-600 mt-0.5">
                CHEMISTRY 9701 • Custom Generated Examination Paper
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 print:hidden"
            >
              <Printer className="w-4 h-4" />
              <span>Хэвлэх (Print / Save PDF)</span>
            </button>
          </div>

          {/* Candidate Info Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border border-slate-300 text-xs">
            <div>
              <span className="text-slate-500 block">Candidate Name:</span>
              <div className="h-5 border-b border-slate-400 mt-1" />
            </div>
            <div>
              <span className="text-slate-500 block">Centre Number:</span>
              <div className="h-5 border-b border-slate-400 mt-1" />
            </div>
            <div>
              <span className="text-slate-500 block">Candidate Number:</span>
              <div className="h-5 border-b border-slate-400 mt-1" />
            </div>
            <div>
              <span className="text-slate-500 block">Total Marks:</span>
              <span className="font-mono font-bold text-slate-900 block mt-1">
                [{resultsData.maxPossible} Marks]
              </span>
            </div>
          </div>

          {/* Printable Questions List */}
          <div className="space-y-8">
            {generatedQuestions.map((q, idx) => (
              <div key={q.id} className="space-y-3 pb-6 border-b border-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-slate-900 text-sm">
                    {idx + 1}. ({q.paperCode} {q.questionNumber})
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700">
                    [{q.marks} {q.marks === 1 ? "mark" : "marks"}]
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-sans">
                  {q.questionText}
                </p>

                {q.options ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className="p-2 rounded border border-slate-200 flex items-center gap-2">
                        <span className="font-bold text-slate-600">{["A", "B", "C", "D"][oIdx]}.</span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 pt-2">
                    <div className="h-24 border-b border-dashed border-slate-300" />
                    <div className="h-24 border-b border-dashed border-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Detachable Mark Scheme Sheet */}
          <div className="pt-8 border-t-2 border-slate-900 space-y-4 page-break-before">
            <h3 className="text-base font-black text-slate-900 uppercase tracking-wider">
              Official Mark Scheme & Model Answers (Шалгуур ба Хариу)
            </h3>

            <div className="space-y-4 text-xs font-mono">
              {generatedQuestions.map((q, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">
                    Q{idx + 1} [{q.marks} Marks]: {q.correctAnswer ? `Correct Option: ${q.correctAnswer}` : ""}
                  </div>
                  <div className="text-slate-700 whitespace-pre-line font-sans text-xs">
                    {q.modelAnswer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
