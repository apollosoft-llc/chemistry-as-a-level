import React, { useState, useMemo } from "react";
import {
  Calculator,
  BookOpen,
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Search,
  Filter,
  Flame,
  Scale,
  Wind,
  Beaker,
  Repeat,
  Droplets,
  Zap,
  Gauge,
  Target,
  ArrowRight,
  Award,
  Lightbulb,
  FileSpreadsheet,
  Check,
} from "lucide-react";
import { QuantitativeProblem, ProblemDifficulty, ProblemSource } from "../types";
import { CALCULATION_TOPICS } from "../data/calculationTopics";
import { ALL_QUANTITATIVE_PROBLEMS } from "../data/quantitativeProblemsData";
import { useLanguage } from "../utils/languageContext";
import { formatChemicalFormula } from "../utils/chemistryFormatter";

interface CalculationMasteryModuleProps {
  initialTopicId?: string;
  onNavigateToChapter?: (chapterNumber: number) => void;
  onNavigateToPastPaper?: (paperId?: string) => void;
}

export const CalculationMasteryModule: React.FC<CalculationMasteryModuleProps> = ({
  initialTopicId,
  onNavigateToChapter,
}) => {
  const { language, t } = useLanguage();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId || "all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProblemId, setActiveProblemId] = useState<string>(ALL_QUANTITATIVE_PROBLEMS[0]?.id || "");
  const [activeTab, setActiveTab] = useState<"worked" | "practice" | "cheat-sheet">("worked");

  // Practice state for each problem
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [checkResults, setCheckResults] = useState<Record<string, { status: "correct" | "incorrect" | "close"; message: string }>>({});
  const [hintLevels, setHintLevels] = useState<Record<string, number>>({});
  const [solvedProblemIds, setSolvedProblemIds] = useState<Set<string>>(new Set());

  // Quick Calculator state
  const [calcInput, setCalcInput] = useState<string>("");
  const [calcResult, setCalcResult] = useState<string | null>(null);
  const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);

  // Filter problems
  const filteredProblems = useMemo(() => {
    return ALL_QUANTITATIVE_PROBLEMS.filter((problem) => {
      if (selectedTopicId !== "all" && problem.topicId !== selectedTopicId) return false;
      if (selectedDifficulty !== "all" && problem.difficulty !== selectedDifficulty) return false;
      if (selectedSource !== "all" && problem.source !== selectedSource) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = problem.title.toLowerCase().includes(q) || problem.titleMn.toLowerCase().includes(q);
        const matchText = problem.questionText.toLowerCase().includes(q) || problem.questionTextMn.toLowerCase().includes(q);
        const matchTopic = problem.topicNameEn.toLowerCase().includes(q) || problem.topicNameMn.toLowerCase().includes(q);
        if (!matchTitle && !matchText && !matchTopic) return false;
      }
      return true;
    });
  }, [selectedTopicId, selectedDifficulty, selectedSource, searchQuery]);

  const activeProblem = useMemo(() => {
    return (
      filteredProblems.find((p) => p.id === activeProblemId) ||
      filteredProblems[0] ||
      ALL_QUANTITATIVE_PROBLEMS[0]
    );
  }, [filteredProblems, activeProblemId]);

  // Handle Answer Verification
  const handleCheckAnswer = (problem: QuantitativeProblem) => {
    const rawInput = (userInputs[problem.id] || "").trim();
    if (!rawInput) return;

    const parsedNum = parseFloat(rawInput);
    if (isNaN(parsedNum)) {
      setCheckResults((prev) => ({
        ...prev,
        [problem.id]: {
          status: "incorrect",
          message: "Зөвхөн тоон утга оруулна уу (жишээ нь: 0.075 эсвэл 2.5e-2).",
        },
      }));
      return;
    }

    const correct = problem.practiceVariant.correctNumericValue;
    const tolerance = (problem.practiceVariant.tolerancePercentage || 2) / 100;
    const diff = Math.abs(parsedNum - correct);
    const maxAllowedDiff = Math.abs(correct * tolerance);

    const isMatch =
      diff <= maxAllowedDiff ||
      problem.practiceVariant.acceptedAnswers?.some(
        (ans) => ans.toLowerCase() === rawInput.toLowerCase()
      );

    if (isMatch) {
      setCheckResults((prev) => ({
        ...prev,
        [problem.id]: {
          status: "correct",
          message: `Маш сайн! Зөв хариулт: ${problem.practiceVariant.finalAnswerFormatted}`,
        },
      }));
      setSolvedProblemIds((prev) => new Set([...prev, problem.id]));
    } else if (diff <= maxAllowedDiff * 3) {
      setCheckResults((prev) => ({
        ...prev,
        [problem.id]: {
          status: "close",
          message: "Маш ойрхон байна! Нарийвчлал (significant figures) эсвэл нэгжийн шилжүүлгээ дахин шалгаарай.",
        },
      }));
    } else {
      setCheckResults((prev) => ({
        ...prev,
        [problem.id]: {
          status: "incorrect",
          message: `Буруу байна. Зөвлөмж / Hint товчийг дарж тусламж авна уу.`,
        },
      }));
    }
  };

  const handleRevealHint = (problemId: string) => {
    setHintLevels((prev) => {
      const current = prev[problemId] || 0;
      return { ...prev, [problemId]: Math.min(current + 1, 3) };
    });
  };

  const handleResetPractice = (problemId: string) => {
    setUserInputs((prev) => ({ ...prev, [problemId]: "" }));
    setCheckResults((prev) => {
      const copy = { ...prev };
      delete copy[problemId];
      return copy;
    });
    setHintLevels((prev) => {
      const copy = { ...prev };
      delete copy[problemId];
      return copy;
    });
  };

  // Quick Calculator Evaluation
  const handleCalcEval = () => {
    try {
      const sanitized = calcInput.replace(/×/g, "*").replace(/÷/g, "/");
      // Safe math eval for simple expressions
      const result = Function(`"use strict"; return (${sanitized})`)();
      setCalcResult(String(result));
    } catch {
      setCalcResult("Алдаатай илэрхийлэл");
    }
  };

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case "Scale": return <Scale className="w-4 h-4" />;
      case "Wind": return <Wind className="w-4 h-4" />;
      case "Beaker": return <Beaker className="w-4 h-4" />;
      case "Flame": return <Flame className="w-4 h-4" />;
      case "Repeat": return <Repeat className="w-4 h-4" />;
      case "Droplets": return <Droplets className="w-4 h-4" />;
      case "Zap": return <Zap className="w-4 h-4" />;
      case "Gauge": return <Gauge className="w-4 h-4" />;
      case "Target": return <Target className="w-4 h-4" />;
      default: return <Calculator className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl border border-cyan-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/30">
                Cambridge 9701 Mastery
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                Easy • Medium • Hard
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <Calculator className="w-8 h-8 text-cyan-400" />
              Химийн Тооцоот Бодлого & Аргачлалын Сан
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Coursebook, Workbook болон Past Paper-үүдээс түүвэрлэсэн жишээ бодолт, алхамт тайлбар, бие дааж бодох даалгавар, түгээмэл алдааны анхааруулга.
            </p>
          </div>

          {/* Quick Stats & Calculator Trigger */}
          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center min-w-[110px]">
              <div className="text-xs text-slate-300 font-medium">Бодсон тоо</div>
              <div className="text-2xl font-black text-cyan-300">
                {solvedProblemIds.size} / {ALL_QUANTITATIVE_PROBLEMS.length}
              </div>
            </div>

            <button
              onClick={() => setIsCalcOpen(!isCalcOpen)}
              className="flex items-center gap-2 px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-xs sm:text-sm"
            >
              <Calculator className="w-4 h-4" />
              <span>{isCalcOpen ? "Тооцоолуур хаах" : "Тооцоолуур & Нэгж"}</span>
            </button>
          </div>
        </div>

        {/* Quick Calculator Panel */}
        {isCalcOpen && (
          <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
            <div className="bg-slate-900/90 rounded-xl p-3 border border-cyan-500/30">
              <div className="text-xs font-bold text-cyan-300 mb-2 flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                Шуурхай Химийн Тооцоолуур
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={calcInput}
                  onChange={(e) => setCalcInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalcEval()}
                  placeholder="Жишээ: (0.150 * 8.31 * 298.15) / 120000"
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={handleCalcEval}
                  className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Бодох
                </button>
              </div>
              {calcResult && (
                <div className="mt-2 text-xs font-mono bg-slate-800/80 px-2.5 py-1 rounded text-cyan-300 flex items-center justify-between">
                  <span>Үр дүн:</span>
                  <span className="font-bold">{calcResult}</span>
                </div>
              )}
            </div>

            <div className="bg-slate-900/90 rounded-xl p-3 border border-cyan-500/30 text-xs space-y-1">
              <div className="font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Нэгжийн Шилжүүлгийн Алтан Дүрэм
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 font-mono">
                <div>• 1 dm³ = 1000 cm³ = 10⁻³ m³</div>
                <div>• 1 m³ = 1000 dm³ = 10⁶ cm³</div>
                <div>• 1 kPa = 1000 Pa</div>
                <div>• T (K) = θ (°C) + 273.15</div>
                <div>• 1 kJ = 1000 J</div>
                <div>• F = 96,500 C/mol</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Topics Carousel / Filter Pills */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedTopicId("all")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
              selectedTopicId === "all"
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Бүх сэдвүүд (All Topics)</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200/60 text-slate-700">
              {ALL_QUANTITATIVE_PROBLEMS.length}
            </span>
          </button>

          {CALCULATION_TOPICS.map((topic) => {
            const count = ALL_QUANTITATIVE_PROBLEMS.filter((p) => p.topicId === topic.id).length;
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {getTopicIcon(topic.icon)}
                <span>{topic.titleMn}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Bar: Difficulty, Source & Search */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Шүүлтүүр:
            </span>

            {/* Difficulty */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              {(["all", "Easy", "Medium", "Hard"] as (string | ProblemDifficulty)[]).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1 rounded-md font-bold text-[11px] transition-all ${
                    selectedDifficulty === diff
                      ? diff === "Easy"
                        ? "bg-emerald-600 text-white"
                        : diff === "Medium"
                        ? "bg-amber-500 text-white"
                        : diff === "Hard"
                        ? "bg-rose-600 text-white"
                        : "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {diff === "all" ? "Бүх түвшин" : diff === "Easy" ? "🟢 Easy" : diff === "Medium" ? "🟡 Medium" : "🔴 Hard"}
                </button>
              ))}
            </div>

            {/* Source */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              {(["all", "Coursebook", "Workbook", "Past Paper"] as (string | ProblemSource)[]).map((src) => (
                <button
                  key={src}
                  onClick={() => setSelectedSource(src)}
                  className={`px-2.5 py-1 rounded-md font-bold text-[11px] transition-all ${
                    selectedSource === src
                      ? "bg-cyan-700 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {src === "all" ? "Бүх эх сурвалж" : src === "Coursebook" ? "📘 Coursebook" : src === "Workbook" ? "📙 Workbook" : "📑 Past Paper"}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[200px] flex-1 sm:flex-none">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Бодлого хайх..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600"
            />
          </div>
        </div>
      </div>

      {/* Main Grid: Problem Selector Sidebar + Problem Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Problem List Column */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-1">
            <span>Бодлогын жагсаалт ({filteredProblems.length})</span>
            <span className="text-[11px] text-cyan-700">Сонгож үзэх</span>
          </div>

          <div className="space-y-2 max-h-[650px] overflow-y-auto pr-1">
            {filteredProblems.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
                Илэрц олдсонгүй. Шүүлтүүрээ өөрчилнө үү.
              </div>
            ) : (
              filteredProblems.map((p) => {
                const isSelected = activeProblem?.id === p.id;
                const isSolved = solvedProblemIds.has(p.id);

                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      setActiveProblemId(p.id);
                    }}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left relative ${
                      isSelected
                        ? "bg-cyan-50/70 border-cyan-500 shadow-md ring-1 ring-cyan-500"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                            p.difficulty === "Easy"
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                              : p.difficulty === "Medium"
                              ? "bg-amber-100 text-amber-800 border border-amber-200"
                              : "bg-rose-100 text-rose-800 border border-rose-200"
                          }`}
                        >
                          {p.difficulty}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 px-1.5 py-0.5 rounded bg-slate-100">
                          {p.source}
                        </span>
                      </div>

                      {isSolved && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                          <Check className="w-3 h-3" /> Бодсон
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {p.titleMn}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {p.title}
                    </p>

                    <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
                      <span>{p.topicNameMn}</span>
                      <span className="font-mono">Ch {p.chapterNumber}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Problem Detail & Solution Panel */}
        <div className="lg:col-span-8 space-y-4">
          {activeProblem && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
              {/* Problem Header */}
              <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-black px-2.5 py-0.5 rounded-md ${
                        activeProblem.difficulty === "Easy"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : activeProblem.difficulty === "Medium"
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : "bg-rose-100 text-rose-800 border border-rose-300"
                      }`}
                    >
                      {activeProblem.difficulty} Difficulty
                    </span>
                    <span className="text-xs font-bold text-slate-700 bg-slate-200/80 px-2 py-0.5 rounded-md">
                      {activeProblem.sourceDetails}
                    </span>
                  </div>

                  {onNavigateToChapter && (
                    <button
                      onClick={() => onNavigateToChapter(activeProblem.chapterNumber)}
                      className="text-xs text-cyan-700 hover:text-cyan-800 font-bold flex items-center gap-1 hover:underline"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ch {activeProblem.chapterNumber} онол үзэх</span>
                    </button>
                  )}
                </div>

                <h2 className="text-base sm:text-lg font-black text-slate-900">
                  {activeProblem.titleMn}
                </h2>
                <p className="text-xs text-slate-500">{activeProblem.title}</p>

                {/* Question Text Box */}
                <div className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-100 space-y-2 border border-slate-800">
                  <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" /> Бодлогын нөхцөл (Question Context)
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-200 whitespace-pre-line">
                    {activeProblem.questionTextMn}
                  </p>
                  <p className="text-xs text-slate-400 italic pt-1 border-t border-slate-800 whitespace-pre-line">
                    {activeProblem.questionText}
                  </p>
                </div>

                {/* Given Data Cards */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {activeProblem.givenData.map((data, i) => (
                    <div key={i} className="bg-slate-100 p-2 rounded-lg text-xs border border-slate-200">
                      <div className="text-[10px] text-slate-500 font-semibold">{data.label}</div>
                      <div className="font-mono font-bold text-slate-800">{data.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabs Bar: Worked Solution vs Self-Practice vs Formulas */}
              <div className="flex border-b border-slate-200 bg-slate-100/60 p-1.5 gap-1.5">
                <button
                  onClick={() => setActiveTab("worked")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === "worked"
                      ? "bg-white text-cyan-900 shadow-xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Алхамт бодолт & Аргачлал (Worked Solution)</span>
                </button>

                <button
                  onClick={() => setActiveTab("practice")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === "practice"
                      ? "bg-white text-emerald-900 shadow-xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <Target className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Бие дааж бодох & Шалгах (Interactive Practice)</span>
                  {solvedProblemIds.has(activeProblem.id) && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </button>
              </div>

              {/* Tab 1: Worked Solution & Strategy Guide */}
              {activeTab === "worked" && (
                <div className="p-5 space-y-6">
                  {/* Strategy & Formula Bar */}
                  <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200 space-y-2">
                    <div className="text-xs font-extrabold text-cyan-900 flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-cyan-700" />
                      Баримтлах стратеги & Ашиглах үндсэн томьёо
                    </div>
                    <div className="font-mono text-xs font-bold bg-white px-3 py-1.5 rounded-lg text-cyan-950 border border-cyan-200 inline-block">
                      {activeProblem.strategyGuide.formula}
                    </div>

                    <div className="mt-2 space-y-1 text-xs text-slate-700">
                      <div className="font-semibold text-slate-900">Бодох дараалал / Roadmap:</div>
                      {activeProblem.strategyGuide.roadmapMn.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-700">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step-by-Step Calculation */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Дэлгэрэнгүй бодолт (Step-by-Step Walkthrough)
                    </h3>

                    {activeProblem.workedSolution.steps.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-bold text-xs flex items-center justify-center">
                              {step.stepNumber}
                            </span>
                            <span className="font-bold text-xs text-slate-900">
                              {step.titleMn}
                            </span>
                          </div>
                          {step.markSchemePoint && (
                            <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {step.markSchemePoint}
                            </span>
                          )}
                        </div>

                        {/* Math Box */}
                        <div className="bg-slate-900 text-cyan-300 font-mono text-xs p-3 rounded-lg overflow-x-auto whitespace-pre-line leading-relaxed">
                          {step.calculation}
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.explanationMn}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Final Answer Banner */}
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                        Эцсийн хариу (Final Answer)
                      </div>
                      <div className="text-base sm:text-lg font-black font-mono text-emerald-950 mt-0.5">
                        {activeProblem.workedSolution.finalAnswer}
                      </div>
                    </div>
                    <div className="text-right text-xs text-emerald-700 font-medium">
                      {activeProblem.workedSolution.significantFiguresNote}
                    </div>
                  </div>

                  {/* Examiner Traps Warning */}
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
                    <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      Шалгуулагчдын гаргадаг түгээмэл алдаа (Examiner Warning)
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      {activeProblem.strategyGuide.examinerPitfallMn}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Interactive Practice Problem */}
              {activeTab === "practice" && (
                <div className="p-5 space-y-6">
                  <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Target className="w-4 h-4 text-emerald-700" />
                        Бие даан бодох адил төстэй бодлого (Independent Practice)
                      </span>
                      <button
                        onClick={() => handleResetPractice(activeProblem.id)}
                        className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold"
                      >
                        <RotateCcw className="w-3 h-3" /> Дахин эхлэх
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                      {activeProblem.practiceVariant.questionTextMn}
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      {activeProblem.practiceVariant.questionText}
                    </p>
                  </div>

                  {/* Input & Verification Box */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">
                    <label className="text-xs font-bold text-slate-800 block">
                      Таны тооцоолсон хариу ({activeProblem.practiceVariant.unit} нэгжээр):
                    </label>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={userInputs[activeProblem.id] || ""}
                          onChange={(e) =>
                            setUserInputs((prev) => ({
                              ...prev,
                              [activeProblem.id]: e.target.value,
                            }))
                          }
                          onKeyDown={(e) => e.key === "Enter" && handleCheckAnswer(activeProblem)}
                          placeholder={`Тоон утга оруулна уу (Жишээ: ${activeProblem.practiceVariant.correctNumericValue})`}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                          {activeProblem.practiceVariant.unit}
                        </span>
                      </div>

                      <button
                        onClick={() => handleCheckAnswer(activeProblem)}
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Бодолтоо шалгах</span>
                      </button>
                    </div>

                    {/* Result Message */}
                    {checkResults[activeProblem.id] && (
                      <div
                        className={`p-3 rounded-xl text-xs font-semibold flex items-start gap-2 ${
                          checkResults[activeProblem.id].status === "correct"
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                            : checkResults[activeProblem.id].status === "close"
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : "bg-rose-100 text-rose-900 border border-rose-300"
                        }`}
                      >
                        {checkResults[activeProblem.id].status === "correct" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : checkResults[activeProblem.id].status === "close" ? (
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <span>{checkResults[activeProblem.id].message}</span>
                      </div>
                    )}
                  </div>

                  {/* Hint System */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Тусламж & Зөвлөмжүүд:</span>
                      <button
                        onClick={() => handleRevealHint(activeProblem.id)}
                        className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1"
                      >
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>
                          {(hintLevels[activeProblem.id] || 0) === 0
                            ? "1-р Зөвлөмж нээх"
                            : (hintLevels[activeProblem.id] || 0) === 1
                            ? "2-р Зөвлөмж нээх"
                            : "Бүрэн бодолтыг харах"}
                        </span>
                      </button>
                    </div>

                    {(hintLevels[activeProblem.id] || 0) >= 1 && (
                      <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-200 text-xs text-cyan-950 animate-in fade-in">
                        <span className="font-bold text-cyan-800">💡 1-р Зөвлөмж: </span>
                        {activeProblem.practiceVariant.hint1Mn}
                      </div>
                    )}

                    {(hintLevels[activeProblem.id] || 0) >= 2 && (
                      <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200 text-xs text-indigo-950 animate-in fade-in">
                        <span className="font-bold text-indigo-800">💡 2-р Зөвлөмж: </span>
                        {activeProblem.practiceVariant.hint2Mn}
                      </div>
                    )}

                    {(hintLevels[activeProblem.id] || 0) >= 3 && (
                      <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2 text-xs animate-in fade-in">
                        <div className="font-bold text-emerald-400">Бүрэн алхамт бодолт:</div>
                        <div className="space-y-1 font-mono text-cyan-300">
                          {activeProblem.practiceVariant.solutionStepsMn.map((s, idx) => (
                            <div key={idx}>• {s}</div>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-slate-700 text-emerald-300 font-bold">
                          Зөв хариу: {activeProblem.practiceVariant.finalAnswerFormatted}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
