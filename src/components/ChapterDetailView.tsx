import React, { useState } from "react";
import { Chapter } from "../types";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  FileQuestion,
  Calculator,
  Eye,
  EyeOff,
  Copy,
  Atom,
  GraduationCap,
  Compass,
  CheckCircle2,
  Circle,
  HelpCircle,
  Zap,
  BookmarkCheck,
  FileText,
  FlaskConical,
  Youtube,
  Layers,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { QualitativeAnalysisNotes } from "./QualitativeAnalysisNotes";
import { getLinkageForChapter } from "../data/curriculumLinkage";
import { getSyllabusTopicForChapter } from "../data/syllabusGuideData";
import { PracticalVideoModal } from "./PracticalVideoModal";
import { InlineQuestionRunnerModal } from "./InlineQuestionRunnerModal";
import { ANIONS_DATA, CATIONS_DATA, GASES_DATA } from "../data/qualitativeAnalysisData";
import { useLanguage } from "../utils/languageContext";
import { formatChemicalFormula, ChemFormula } from "../utils/chemistryFormatter";

interface ChapterDetailViewProps {
  chapter: Chapter;
  onBack: () => void;
  onOpenFlashcards?: () => void;
  onOpenQuiz?: () => void;
  onOpenRevision?: () => void;
  onOpenPastPapers?: (paperId?: string) => void;
  onOpenQualitativeNotes?: () => void;
  onOpenCalculations?: (topicId?: string) => void;
}

export const ChapterDetailView: React.FC<ChapterDetailViewProps> = ({
  chapter,
  onBack,
  onOpenFlashcards,
  onOpenQuiz,
  onOpenRevision,
  onOpenPastPapers,
  onOpenQualitativeNotes,
  onOpenCalculations,
}) => {
  const { language, t } = useLanguage();
  const isPracticalChapter = chapter.category === "Practical" || chapter.number === 31 || chapter.number === 32;
  const linkage = getLinkageForChapter(chapter.number);
  const syllabusTopic = getSyllabusTopicForChapter(chapter.number);

  const [activeTab, setActiveTab] = useState<"syllabus" | "linkage" | "subtopics" | "terms" | "questions" | "qualitative">(
    "syllabus"
  );
  const [masteredOutcomes, setMasteredOutcomes] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("chemistry_syllabus_mastery_v1");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleOutcome = (code: string) => {
    setMasteredOutcomes((prev) => {
      const next = { ...prev, [code]: !prev[code] };
      try {
        localStorage.setItem("chemistry_syllabus_mastery_v1", JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);
  const [selectedLabModalItem, setSelectedLabModalItem] = useState<{
    item: any;
    type: "anion" | "cation" | "gas" | "element";
  } | null>(null);
  const [selectedInlineExamQuestion, setSelectedInlineExamQuestion] = useState<{
    paperId?: string;
    questionNumber?: string;
    chapterNumber: number;
    calculationTopicId?: string;
  } | null>(null);

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyDefinition = (term: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTerm(term);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  const handleLaunchLabSim = (testId: string) => {
    if (testId.includes("anion") || testId.includes("chloride") || testId.includes("nitrate") || testId.includes("sulfate")) {
      const anion = ANIONS_DATA.find((a) => a.id.toLowerCase().includes(testId.replace("anion-", ""))) || ANIONS_DATA[1];
      setSelectedLabModalItem({ item: anion, type: "anion" });
    } else if (testId.includes("cation") || testId.includes("transition") || testId.includes("calcium")) {
      const cation = CATIONS_DATA.find((c) => c.id.toLowerCase().includes(testId.replace("cation-", ""))) || CATIONS_DATA[3];
      setSelectedLabModalItem({ item: cation, type: "cation" });
    } else {
      setSelectedLabModalItem({ item: ANIONS_DATA[0], type: "anion" });
    }
  };

  const subtopics = chapter.subtopics || [];
  const keyTerms = chapter.keyTerms || [];
  const examQuestions = chapter.examQuestions || [];
  const summaryText = chapter.summaryEn || chapter.descriptionEn || "";

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Top navigation back button & Chapter Meta */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-sm font-semibold transition-colors border border-slate-200 shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Chapters</span>
        </button>

        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
              chapter.level === "AS"
                ? "bg-blue-50 text-blue-700 border-blue-200"
                : "bg-amber-50 text-amber-700 border-amber-200"
            }`}
          >
            {chapter.level} Level
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {chapter.category} Chemistry
          </span>
        </div>
      </div>

      {/* Chapter Title & Header Card */}
      <div className="rounded-2xl bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/40 border border-cyan-200/80 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-800 font-black text-xl shrink-0 shadow-2xs">
              {chapter.number}
            </div>
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {chapter.titleEn}
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {summaryText}
              </p>
            </div>
          </div>

          {/* Direct Study Actions */}
          <div className="flex flex-wrap items-center gap-2 shrink-0 self-end sm:self-auto">
            {linkage && (
              <button
                onClick={() => setActiveTab("linkage")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs shadow-2xs transition-all ${
                  activeTab === "linkage"
                    ? "bg-cyan-700 text-white"
                    : "bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-300"
                }`}
                title="Онол ↔ Туршилт ↔ Past Paper холбоосууд"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Мэдлэгийн холбоос</span>
              </button>
            )}
            <button
              onClick={() => setActiveTab("qualitative")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs shadow-2xs transition-all ${
                activeTab === "qualitative"
                  ? "bg-teal-600 text-white"
                  : "bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200"
              }`}
              title="Official Cambridge Qualitative Analysis Notes & Constants"
            >
              <FlaskConical className={`w-3.5 h-3.5 ${activeTab === "qualitative" ? "text-white" : "text-teal-700"}`} />
              <span>QA Notes</span>
            </button>
            {onOpenPastPapers && (
              <button
                onClick={() => onOpenPastPapers()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-bold text-xs shadow-2xs transition-all"
                title="Practice official Cambridge Paper 1 & Paper 2 exams"
              >
                <FileText className="w-3.5 h-3.5 text-blue-700" />
                <span>Past Papers</span>
              </button>
            )}
            {onOpenCalculations && (
              <button
                onClick={() => onOpenCalculations()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs shadow-2xs transition-all"
                title="Химийн тооцоот бодлого, аргачлал"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-700" />
                <span>Тооцоот бодлого</span>
              </button>
            )}
            {onOpenRevision && (
              <button
                onClick={onOpenRevision}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-xs shadow-2xs transition-all"
                title="View condensed revision notes"
              >
                <BookmarkCheck className="w-3.5 h-3.5 text-slate-700" />
                <span>Revision Notes</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("syllabus")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === "syllabus"
              ? "bg-slate-900 text-white shadow-2xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <Compass className="w-4 h-4 text-cyan-400" />
          <span>Syllabus Хөтөч & Зорилтууд</span>
          {linkage?.syllabusRef && (
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-900 text-cyan-200 font-mono">
              {linkage.syllabusRef.replace("Syllabus ", "")}
            </span>
          )}
        </button>

        {linkage && (
          <button
            onClick={() => setActiveTab("linkage")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
              activeTab === "linkage"
                ? "bg-cyan-700 text-white shadow-2xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>🔗 Онол ↔ Туршилт ↔ Paper Холбоос</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-100 text-cyan-900 font-bold">
              {linkage.practicalExperiments.length} Lab + {linkage.relatedExamPapers.length} Papers
            </span>
          </button>
        )}

        <button
          onClick={() => setActiveTab("subtopics")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === "subtopics"
              ? "bg-cyan-600 text-white shadow-2xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Subtopics & Concepts ({subtopics.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("terms")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === "terms"
              ? "bg-cyan-600 text-white shadow-2xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <Atom className="w-4 h-4" />
          <span>Key Terms ({keyTerms.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("questions")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === "questions"
              ? "bg-cyan-600 text-white shadow-2xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <FileQuestion className="w-4 h-4" />
          <span>Exam Questions ({examQuestions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("qualitative")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === "qualitative"
              ? "bg-teal-600 text-white shadow-2xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <FlaskConical className="w-4 h-4" />
          <span>QA Notes & Simulator</span>
        </button>
      </div>

      {/* Tab: Syllabus Guide & Learning Outcomes */}
      {activeTab === "syllabus" && (
        <div className="space-y-6">
          {/* Syllabus Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 text-white border border-cyan-800/40 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-900/80 border border-cyan-500/40 text-cyan-200">
                  Cambridge 9701 Syllabus
                </span>
                {linkage?.syllabusRef && (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                    {linkage.syllabusRef}
                  </span>
                )}
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                {syllabusTopic
                  ? `${language === "mn" ? syllabusTopic.titleMn : syllabusTopic.titleEn}`
                  : `${chapter.titleEn}`}
              </h2>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                {syllabusTopic
                  ? language === "mn"
                    ? syllabusTopic.examFocusNotesMn
                    : syllabusTopic.examFocusNotesEn
                  : "Master each syllabus learning outcome below. Tick outcomes as you master them to track your exam readiness."}
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
              {onOpenPastPapers && (
                <button
                  onClick={() => onOpenPastPapers()}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Шалгалтын асуулт</span>
                </button>
              )}
              {onOpenCalculations && linkage?.coreCalculationTopicId && (
                <button
                  onClick={() => onOpenCalculations(linkage.coreCalculationTopicId)}
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1.5 border border-white/20"
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-300" />
                  <span>Бодлого бодох</span>
                </button>
              )}
            </div>
          </div>

          {/* Learning Outcomes Checklist */}
          {syllabusTopic && syllabusTopic.learningOutcomes.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>
                    {language === "mn"
                      ? "Суралцахуйн үр дүнгийн шалгах хуудас (Checklist)"
                      : "Official Cambridge Learning Outcomes (Checklist)"}
                  </span>
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  {syllabusTopic.learningOutcomes.filter((o) => !!masteredOutcomes[o.code]).length} /{" "}
                  {syllabusTopic.learningOutcomes.length} {language === "mn" ? "эзэмшсэн" : "mastered"}
                </span>
              </div>

              <div className="space-y-2">
                {syllabusTopic.learningOutcomes.map((outcome) => {
                  const isChecked = !!masteredOutcomes[outcome.code];
                  return (
                    <div
                      key={outcome.code}
                      onClick={() => toggleOutcome(outcome.code)}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? "bg-emerald-50/70 border-emerald-300 text-slate-900"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <button type="button" className="mt-0.5 shrink-0 focus:outline-none">
                        {isChecked ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300 hover:text-slate-400" />
                        )}
                      </button>

                      <div className="flex-1 text-xs leading-relaxed">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                              isChecked
                                ? "bg-emerald-200 text-emerald-900"
                                : "bg-white text-slate-600 border border-slate-200"
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
          )}

          {/* Chapter Learning Intentions (from chapter data) */}
          {(chapter.learningIntentionsEn || chapter.learningIntentionsMn) && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-600" />
                <span>
                  {language === "mn"
                    ? "Бүлгийн үндсэн ойлголтууд & Шалгуур"
                    : "Coursebook Learning Intentions & Goals"}
                </span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {(language === "mn"
                  ? chapter.learningIntentionsMn || chapter.learningIntentionsEn || []
                  : chapter.learningIntentionsEn || []
                ).map((intention, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{intention}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examiner tips */}
          {linkage?.examTips && linkage.examTips.length > 0 && (
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 shadow-2xs space-y-2">
              <h3 className="font-extrabold text-amber-950 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>{language === "mn" ? "Кембрижийн Шалгагчийн Зөвлөмж & Түлхүүр үгс" : "Examiner Guidance & Keywords"}</span>
              </h3>
              <div className="space-y-1.5 text-xs text-amber-950">
                {linkage.examTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab: Linkage (Theory ↔ Practical ↔ Past Papers) */}
      {activeTab === "linkage" && linkage && (
        <div className="space-y-6">
          {/* Header Description */}
          <div className="p-4 rounded-xl bg-cyan-50/80 border border-cyan-200 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-cyan-950">
              <p className="font-bold mb-1">
                Кембриж 9701 Хөтөлбөрийн Интеграци (Theory + Practical + Past Papers Integration)
              </p>
              <p className="text-cyan-800">
                Энэ бүлгийн онолын мэдлэг нь лабораторийн практик сорилууд (Paper 3/5) болон шалгалтын бичгийн даалгавруудад (Paper 1, 2, 4) хэрхэн холбогдож ашиглагддагийг шууд холбоосоор үзнэ үү.
              </p>
            </div>
          </div>

          {/* Section 1: Related Practical Experiments */}
          <div className="space-y-3">
            <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-teal-600" />
              <span>1. Лабораторийн туршилт & Практик ур чадвар (Practical Skills)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linkage.practicalExperiments.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-teal-200/80 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 border border-teal-200">
                        Paper 3 Practical Test
                      </span>
                      <span className="text-xs text-slate-500 font-medium">9701 Lab</span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {exp.nameEn}
                    </h4>
                    <p className="text-xs font-semibold text-teal-800">
                      {exp.nameMn}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700">
                      <strong className="text-slate-900">Урвалжууд:</strong> {exp.reagents}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleLaunchLabSim(exp.testId)}
                      className="flex-1 px-3 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FlaskConical className="w-3.5 h-3.5" />
                      <span>3D Симуляци үзэх</span>
                    </button>
                    <a
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(exp.videoQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs border border-red-200 transition-colors flex items-center gap-1"
                    >
                      <Youtube className="w-3.5 h-3.5 text-red-600" />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Related Past Papers & Exam Questions */}
          <div className="space-y-3">
            <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>2. Холбогдох Шалгалтын Paper ба Асуултууд (Related Exam Questions)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linkage.relatedExamPapers.map((paperItem, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-blue-200/80 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                        {paperItem.paperType}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{paperItem.yearSeries}</span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {paperItem.paperTitle} • {paperItem.questionNumber}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {paperItem.topicFocus}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onOpenPastPapers && onOpenPastPapers(paperItem.paperId)}
                      className="w-full px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Энэ Paper-ийг нээж ажиллах →</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Examiner Tips & Marking Scheme Rules */}
          {linkage.examTips.length > 0 && (
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-3">
              <h4 className="font-black text-amber-900 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Шалгагчийн онцгой анхааруулга & Түлхүүр үгс (Examiner Guidelines)</span>
              </h4>
              <ul className="space-y-2 text-xs text-amber-950">
                {linkage.examTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Tab: Official Qualitative Analysis Notes & Constants */}
      {activeTab === "qualitative" && (
        <div className="space-y-6">
          <QualitativeAnalysisNotes />
        </div>
      )}

      {/* Tab: Subtopics & Deep Explanations */}
      {activeTab === "subtopics" && (
        <div className="space-y-6">
          {subtopics.map((sub, idx) => {
            const conceptTextEn = sub.keyConceptEn || sub.summaryEn || (sub.keyConcepts && sub.keyConcepts.join(". ")) || "";
            const conceptTextMn = sub.keyConceptMn || sub.summaryMn || "";
            const formulas = sub.formulas || sub.keyEquations || [];
            const pitfalls = sub.commonPitfalls || sub.examinerTips || [];

            return (
              <div
                key={sub.id || idx}
                className="rounded-xl bg-white border border-slate-200 p-5 space-y-4 hover:border-slate-300 transition-colors shadow-2xs"
              >
                {/* Subtopic Title */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-slate-100 text-cyan-700 text-xs font-bold flex items-center justify-center border border-slate-200 shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      {language === "en" && (
                        <h3 className="font-bold text-slate-900 text-base">
                          {sub.titleEn}
                        </h3>
                      )}
                      {language === "mn" && (
                        <h3 className="font-bold text-slate-900 text-base">
                          {sub.titleMn || sub.titleEn}
                        </h3>
                      )}
                      {language === "dual" && (
                        <div>
                          <h3 className="font-bold text-slate-900 text-base">
                            {sub.titleEn}
                          </h3>
                          {sub.titleMn && (
                            <p className="text-xs font-semibold text-cyan-800">
                              {sub.titleMn}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Key Concept Box */}
                {(conceptTextEn || conceptTextMn) && (
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-1.5">
                    <h4 className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                      {language === "mn" ? "Хөтөлбөрийн үндсэн ойлголт" : "Core Syllabus Concept"}
                    </h4>
                    {language !== "mn" && conceptTextEn && (
                      <p className="text-sm text-slate-800 leading-relaxed font-sans">
                        {conceptTextEn}
                      </p>
                    )}
                    {language !== "en" && conceptTextMn && (
                      <p className={`text-sm ${language === "dual" ? "text-slate-600 pt-1 border-t border-slate-200/60" : "text-slate-800"} leading-relaxed`}>
                        {conceptTextMn}
                      </p>
                    )}
                  </div>
                )}

                {/* Formulas if present */}
                {formulas.length > 0 && (
                  <div className="bg-blue-50/70 rounded-lg p-3.5 border border-blue-100">
                    <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5 text-blue-600" />
                      {language === "mn" ? "Түлхүүр томьёо ба Тэгшитгэлүүд" : "Key Formulas & Chemical Equations"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {formulas.map((formula, fIdx) => (
                        <div
                          key={fIdx}
                          className="px-3 py-1.5 rounded-md bg-white border border-blue-200 font-mono text-sm text-blue-900 font-semibold shadow-2xs"
                        >
                          {formatChemicalFormula(formula)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Common Pitfalls / Cambridge Warnings */}
                {pitfalls.length > 0 && (
                  <div className="bg-amber-50 rounded-lg p-3.5 border border-amber-200/80">
                    <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      {language === "mn" ? "Шалгуулагчдын гаргадаг нийтлэг алдаа & Зөвлөмж" : "Common Exam Pitfalls & Examiner Tips"}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-amber-900">
                      {pitfalls.map((pitfall, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{pitfall}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: Key Terms & Definitions */}
      {activeTab === "terms" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <div>
              <span className="font-bold text-cyan-800 block mb-0.5">Cambridge 9701 Rigorous Mark Scheme Definitions</span>
              <p>Examiners award marks strictly for precise syllabus keywords. Master each term thoroughly.</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {onOpenQuiz && (
                <button
                  onClick={onOpenQuiz}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs shadow-2xs transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Pre-Test Quiz</span>
                </button>
              )}
              {onOpenFlashcards && (
                <button
                  onClick={onOpenFlashcards}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-2xs transition-all"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Practice Active Recall</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyTerms.map((term, idx) => {
              const defEn = term.defEn || term.definitionEn || "";
              const defMn = term.defMn || term.definitionMn || "";

              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 hover:border-cyan-300 transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div>
                      {language === "en" && <h4 className="font-bold text-cyan-800 text-sm">{term.termEn}</h4>}
                      {language === "mn" && <h4 className="font-bold text-cyan-800 text-sm">{term.termMn || term.termEn}</h4>}
                      {language === "dual" && (
                        <div>
                          <h4 className="font-bold text-cyan-800 text-sm">{term.termEn}</h4>
                          {term.termMn && <p className="text-xs font-semibold text-slate-500">{term.termMn}</p>}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => copyDefinition(term.termEn, `${term.termEn}: ${defEn}`)}
                      className="p-1 text-slate-400 hover:text-slate-600 rounded flex items-center gap-1 text-xs shrink-0"
                      title="Copy definition"
                    >
                      {copiedTerm === term.termEn ? (
                        <span className="text-emerald-600 font-semibold text-[10px]">Copied!</span>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="text-xs space-y-1.5">
                    {language !== "mn" && defEn && (
                      <p className="text-slate-700 leading-relaxed font-normal">
                        {defEn}
                      </p>
                    )}
                    {language !== "en" && defMn && (
                      <p className={`text-slate-600 leading-relaxed ${language === "dual" ? "pt-1 border-t border-slate-100 italic" : "font-normal"}`}>
                        {defMn}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Exam Questions & Mark Scheme */}
      {activeTab === "questions" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
            <span className="text-xs text-slate-600">
              Attempt to solve the questions on paper first, then click "Show Mark Scheme" to review detailed working.
            </span>
          </div>

          {examQuestions.length > 0 ? (
            examQuestions.map((q, idx) => {
              const isRevealed = !!revealedSolutions[q.id];
              return (
                <div
                  key={q.id || idx}
                  className="rounded-xl bg-white border border-slate-200 p-5 space-y-4 shadow-2xs"
                >
                  {/* Question header */}
                  <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded bg-slate-100 text-cyan-800 font-mono font-bold text-xs border border-slate-200">
                        Question {idx + 1}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        [{q.marks || 4} {q.marks === 1 ? "Mark" : "Marks"}]
                      </span>
                    </div>
                  </div>

                  {/* Question text */}
                  <div className="space-y-2">
                    {language !== "mn" && q.questionEn && (
                      <p className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                        {q.questionEn}
                      </p>
                    )}
                    {language !== "en" && q.questionMn && (
                      <p className={`text-sm ${language === "dual" ? "text-slate-600 pt-1 border-t border-slate-100" : "font-medium text-slate-900"} leading-relaxed whitespace-pre-line`}>
                        {q.questionMn}
                      </p>
                    )}
                  </div>

                  {/* Toggle Solution Button */}
                  <div>
                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-cyan-800 text-xs font-bold transition-colors border border-slate-200 shadow-2xs"
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>{language === "mn" ? "Бодолтыг нуух" : "Hide Solution"}</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>{language === "mn" ? "Бодолт ба Шалгуур харах" : "Show Solution & Mark Scheme"}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Revealed Mark Scheme Solution */}
                  {isRevealed && (
                    <div className="rounded-lg bg-emerald-50/70 border border-emerald-200 p-4 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>{language === "mn" ? "Кембрижийн албан ёсны бодолт & Шалгуур" : "Cambridge Mark Scheme Breakdown"}</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="text-slate-800 bg-white p-3.5 rounded border border-emerald-100 font-mono whitespace-pre-line leading-relaxed shadow-2xs">
                          {formatChemicalFormula(q.solutionEn)}
                        </div>
                        {language !== "en" && q.solutionMn && (
                          <div className="text-slate-700 bg-white/80 p-3 rounded border border-emerald-100 text-xs whitespace-pre-line leading-relaxed">
                            <span className="font-bold text-emerald-900">Монгол тайлбар: </span>
                            {q.solutionMn}
                          </div>
                        )}

                        {q.examinerTip && (
                          <div className="bg-amber-50 p-2.5 rounded border border-amber-200 text-amber-900 text-xs mt-2">
                            <span className="font-bold text-amber-800">
                              {language === "mn" ? "Шалгагчийн зөвлөмж: " : "Examiner's Report Tip: "}
                            </span>
                            {q.examinerTip}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-3 shadow-2xs">
              <FileQuestion className="w-10 h-10 text-cyan-600 mx-auto" />
              <h4 className="font-bold text-slate-800 text-base">
                Exam Questions
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Review the core concepts and formulas in this chapter to prepare for Paper 1, Paper 2, and Paper 4 past paper questions.
              </p>
            </div>
          )}
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
