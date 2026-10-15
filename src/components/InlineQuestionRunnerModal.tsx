import React, { useState, useMemo } from "react";
import {
  X,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  HelpCircle,
  FileText,
  Sparkles,
  Calculator,
  AlertCircle,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Send,
  Zap,
} from "lucide-react";
import { getPastPaperById, PAST_PAPERS } from "../data/pastPapersData";
import { ALL_QUANTITATIVE_PROBLEMS } from "../data/quantitativeProblemsData";
import { PAST_PAPER_QUESTIONS_BANK } from "../data/pastPaperQuestionsBank";
import { formatChemicalFormula } from "../utils/chemistryFormatter";
import { useLanguage } from "../utils/languageContext";
import { PastPaperMCQQuestion, PastPaperTheoryQuestion, QuantitativeProblem } from "../types";

interface InlineQuestionRunnerModalProps {
  paperId?: string;
  questionNumber?: string;
  chapterNumber?: number;
  calculationTopicId?: string;
  onClose: () => void;
  onOpenFullPaper?: (paperId: string) => void;
  onOpenFullCalculations?: (topicId: string) => void;
}

export const InlineQuestionRunnerModal: React.FC<InlineQuestionRunnerModalProps> = ({
  paperId,
  questionNumber,
  chapterNumber,
  calculationTopicId,
  onClose,
  onOpenFullPaper,
  onOpenFullCalculations,
}) => {
  const { language } = useLanguage();

  // If calculation topic is requested
  const calculationProblem: QuantitativeProblem | undefined = useMemo(() => {
    if (!calculationTopicId) return undefined;
    return (
      ALL_QUANTITATIVE_PROBLEMS.find((p) => p.topicId === calculationTopicId) ||
      ALL_QUANTITATIVE_PROBLEMS.find((p) => p.chapterNumber === chapterNumber)
    );
  }, [calculationTopicId, chapterNumber]);

  // If past paper question is requested
  const paper = useMemo(() => {
    if (!paperId) return undefined;
    return getPastPaperById(paperId);
  }, [paperId]);

  // Find exact or relevant question in paper
  const questionData = useMemo(() => {
    if (!paper) return null;

    // Check MCQ questions
    if (paper.mcqQuestions && paper.mcqQuestions.length > 0) {
      if (questionNumber) {
        const numClean = questionNumber.replace(/\D/g, "");
        const num = parseInt(numClean, 10);
        const match = paper.mcqQuestions.find(
          (q) => q.questionNumber === num || q.id.includes(`q${num}`)
        );
        if (match) return { type: "mcq" as const, data: match };
      }
      if (chapterNumber) {
        const matchCh = paper.mcqQuestions.find((q) => q.chapterNumber === chapterNumber);
        if (matchCh) return { type: "mcq" as const, data: matchCh };
      }
      return { type: "mcq" as const, data: paper.mcqQuestions[0] };
    }

    // Check Theory questions
    if (paper.theoryQuestions && paper.theoryQuestions.length > 0) {
      if (questionNumber) {
        const numClean = questionNumber.replace(/\D/g, "");
        const num = parseInt(numClean, 10);
        const match = paper.theoryQuestions.find(
          (q) => q.questionNumber === num || q.id.includes(`q${num}`)
        );
        if (match) return { type: "theory" as const, data: match };
      }
      if (chapterNumber) {
        const matchCh = paper.theoryQuestions.find((q) => q.chapterNumber === chapterNumber);
        if (matchCh) return { type: "theory" as const, data: matchCh };
      }
      return { type: "theory" as const, data: paper.theoryQuestions[0] };
    }

    return null;
  }, [paper, questionNumber, chapterNumber]);

  // Fallback to bank question if not in selected paper
  const fallbackBankQuestion = useMemo(() => {
    if (calculationProblem || questionData) return null;
    if (chapterNumber) {
      return (
        PAST_PAPER_QUESTIONS_BANK.find((q) => q.chapterNumber === chapterNumber) ||
        PAST_PAPER_QUESTIONS_BANK[0]
      );
    }
    return null;
  }, [calculationProblem, questionData, chapterNumber]);

  // Interactive local states
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [revealedPartSchemes, setRevealedPartSchemes] = useState<Record<string, boolean>>({});
  const [userDraftNotes, setUserDraftNotes] = useState<Record<string, string>>({});
  const [showCalculationSolution, setShowCalculationSolution] = useState<boolean>(false);

  const togglePartScheme = (key: string) => {
    setRevealedPartSchemes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              {calculationProblem ? (
                <Calculator className="w-5 h-5 text-amber-400" />
              ) : (
                <FileText className="w-5 h-5 text-cyan-400" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/70 border border-cyan-800/80">
                  {calculationProblem
                    ? "Calculation Mastery"
                    : paper?.paperCode || "Cambridge Past Paper"}
                </span>
                {paper?.series && (
                  <span className="text-xs text-slate-400 font-semibold">
                    {paper.series} {paper.year}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-100 line-clamp-1">
                {calculationProblem
                  ? calculationProblem.title
                  : questionData?.data?.title ||
                    paper?.title ||
                    fallbackBankQuestion?.title ||
                    "Question Runner"}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {paper?.qpUrl && (
              <a
                href={paper.qpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 text-xs font-bold transition-all shadow-2xs"
                title="Албан ёсны Question Paper (PDF) шинэ таб дээр нээх"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>QP</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}

            {paper?.msUrl && (
              <a
                href={paper.msUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 text-xs font-bold transition-all shadow-2xs"
                title="Албан ёсны Mark Scheme (PDF) шинэ таб дээр нээх"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>MS</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}

            {paper && onOpenFullPaper && (
              <button
                onClick={() => {
                  onClose();
                  onOpenFullPaper(paper.id);
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all border border-slate-700"
              >
                <span>Бүтэн Paper</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {/* =========================================
              CASE 1: QUANTITATIVE CALCULATION PROBLEM
             ========================================= */}
          {calculationProblem && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
                    {calculationProblem.level} Level • {calculationProblem.difficulty} Difficulty
                  </span>
                  <span className="text-xs text-amber-700 font-semibold">
                    {calculationProblem.sourceDetails}
                  </span>
                </div>
                <h4 className="font-bold text-amber-950 text-base">
                  {language === "mn" ? calculationProblem.titleMn : calculationProblem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                  {language === "mn"
                    ? calculationProblem.questionTextMn
                    : calculationProblem.questionText}
                </p>
              </div>

              {/* Given Data Cards */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Өгөгдсөн хэмжигдэхүүнүүд (Given Data):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {calculationProblem.givenData.map((d, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col"
                    >
                      <span className="text-slate-500 font-medium">{d.label}</span>
                      <span className="font-mono font-bold text-slate-900 text-sm mt-0.5">
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Roadmap Hint */}
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-2">
                <h5 className="font-bold text-cyan-900 text-xs flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-600" />
                  <span>Бодолтын төлөвлөгөө & Түлхүүр томьёо (Roadmap & Strategy):</span>
                </h5>
                <p className="font-mono text-xs font-bold text-cyan-950 bg-white p-2 rounded-lg border border-cyan-200">
                  {calculationProblem.strategyGuide.formula}
                </p>
                <ul className="text-xs text-cyan-900 space-y-1 mt-2">
                  {(language === "mn"
                    ? calculationProblem.strategyGuide.roadmapMn
                    : calculationProblem.strategyGuide.roadmap
                  ).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-cyan-700">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Toggle Solution */}
              <div>
                <button
                  onClick={() => setShowCalculationSolution(!showCalculationSolution)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-2"
                >
                  {showCalculationSolution ? (
                    <>
                      <EyeOff className="w-4 h-4" />
                      <span>Бодолтыг нуух (Hide Solution)</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" />
                      <span>Албан ёсны бодолтыг алхам алхмаар харах (Show Worked Solution)</span>
                    </>
                  )}
                </button>
              </div>

              {showCalculationSolution && (
                <div className="space-y-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 animate-in fade-in duration-150">
                  <h5 className="font-black text-emerald-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Алхамчилсан бүтэн бодолт:</span>
                  </h5>
                  <div className="space-y-3">
                    {calculationProblem.workedSolution.steps.map((st) => (
                      <div
                        key={st.stepNumber}
                        className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                          <span>
                            Алхам {st.stepNumber}: {language === "mn" ? st.titleMn : st.title}
                          </span>
                          {st.markSchemePoint && (
                            <span className="text-[11px] text-emerald-700 font-mono">
                              {st.markSchemePoint}
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-xs font-semibold text-blue-900 bg-slate-50 p-2 rounded-lg border border-slate-200">
                          {st.calculation}
                        </div>
                        <p className="text-xs text-slate-600">
                          {language === "mn" ? st.explanationMn : st.explanation}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-emerald-300 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900">
                      Эцсийн хариу (Final Answer):
                    </span>
                    <span className="font-mono font-black text-base text-emerald-700">
                      {calculationProblem.workedSolution.finalAnswer}{" "}
                      {calculationProblem.workedSolution.finalAnswerUnit}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================
              CASE 2: MCQ PAST PAPER QUESTION
             ========================================= */}
          {questionData?.type === "mcq" && (
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-200">
                    Question {questionData.data.questionNumber} • Paper 1 Multiple Choice
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {questionData.data.difficulty || "Standard"}
                  </span>
                </div>

                <p className="text-sm font-semibold text-slate-900 leading-relaxed whitespace-pre-line mt-2">
                  {language === "mn" && questionData.data.questionTextMn
                    ? questionData.data.questionTextMn
                    : questionData.data.questionText}
                </p>
              </div>

              {/* MCQ Options */}
              <div className="space-y-2.5">
                {questionData.data.options.map((opt, optIdx) => {
                  const letter = ["A", "B", "C", "D"][optIdx];
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = optIdx === questionData.data.correctOptionIndex;

                  let cardStyle = "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100";
                  if (isSelected) {
                    cardStyle = "bg-blue-50 border-blue-400 text-blue-900";
                  }
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      cardStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                    } else if (isSelected && !isCorrect) {
                      cardStyle = "bg-red-50 border-red-300 text-red-900";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isAnswerSubmitted}
                      onClick={() => setSelectedOption(optIdx)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${cardStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : "bg-white text-slate-700 border border-slate-300"
                          }`}
                        >
                          {letter}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submit / Check Answer Button */}
              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={() => setIsAnswerSubmitted(true)}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 ${
                    selectedOption !== null
                      ? "bg-cyan-600 hover:bg-cyan-700 text-white shadow-2xs"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Хариултыг шалгах (Check Answer)</span>
                </button>
              ) : (
                <div className="space-y-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2">
                    {selectedOption === questionData.data.correctOptionIndex ? (
                      <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Зөв хариулт! (+1 Оноо)</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                        <AlertCircle className="w-5 h-5" />
                        <span>
                          Буруу хариулт. Зөв сонголт нь:{" "}
                          {["A", "B", "C", "D"][questionData.data.correctOptionIndex]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 text-xs">
                    <p className="text-slate-800 leading-relaxed font-sans">
                      <strong className="text-slate-900">Тайлбар: </strong>
                      {language === "mn" && questionData.data.explanationMn
                        ? questionData.data.explanationMn
                        : questionData.data.explanationEn}
                    </p>

                    {questionData.data.examinerTip && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                        <strong className="text-amber-950 font-bold">Шалгагчийн зөвлөмж: </strong>
                        {questionData.data.examinerTip}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================
              CASE 3: THEORY / PRACTICAL / PLANNING QUESTION
             ========================================= */}
          {questionData?.type === "theory" && (
            <div className="space-y-6">
              {/* Context Prompt */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-blue-900 uppercase tracking-wider">
                    {questionData.data.title}
                  </span>
                  <span className="text-xs font-bold text-blue-700 px-2 py-0.5 rounded bg-white border border-blue-200">
                    Total: {questionData.data.totalMarks} Marks
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-sans whitespace-pre-line">
                  {language === "mn" && questionData.data.contextPromptMn
                    ? questionData.data.contextPromptMn
                    : questionData.data.contextPrompt}
                </p>
              </div>

              {/* Sub-question parts */}
              <div className="space-y-5">
                {questionData.data.parts.map((part, pIdx) => {
                  const partKey = `${questionData.data.id}-part-${part.partLabel || pIdx}`;
                  const isSchemeRevealed = !!revealedPartSchemes[partKey];

                  return (
                    <div
                      key={pIdx}
                      className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3 shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="font-black text-sm text-blue-700">
                            {part.partLabel}
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                            {language === "mn" && part.subQuestionTextMn
                              ? part.subQuestionTextMn
                              : part.subQuestionText}
                          </p>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                          [{part.marks} {part.marks === 1 ? "Mark" : "Marks"}]
                        </span>
                      </div>

                      {/* User draft note box */}
                      <div className="space-y-1.5">
                        <textarea
                          rows={2}
                          value={userDraftNotes[partKey] || ""}
                          onChange={(e) =>
                            setUserDraftNotes((prev) => ({
                              ...prev,
                              [partKey]: e.target.value,
                            }))
                          }
                          placeholder="Хариултынхаа нооргийг энд бичиж шалгаарай (Draft your answer here)..."
                          className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-cyan-500 font-sans"
                        />
                      </div>

                      {/* Mark Scheme Toggle Button */}
                      <div>
                        <button
                          onClick={() => togglePartScheme(partKey)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
                        >
                          {isSchemeRevealed ? (
                            <>
                              <EyeOff className="w-3.5 h-3.5" />
                              <span>Шалгуур нуух</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>Кембрижийн албан ёсны шалгуур (Show Mark Scheme)</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Revealed Mark Scheme */}
                      {isSchemeRevealed && (
                        <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-3 animate-in fade-in duration-150">
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block">
                              Mark Scheme Breakdown:
                            </span>
                            <ul className="text-xs text-slate-800 space-y-1">
                              {part.markScheme.map((ms, mIdx) => (
                                <li key={mIdx} className="flex items-start gap-2">
                                  <span className="text-emerald-700 font-bold">•</span>
                                  <span className="font-mono text-emerald-950">{ms}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-white p-3 rounded-lg border border-emerald-200 space-y-1 text-xs">
                            <span className="font-bold text-slate-900 block">
                              Загвар хариулт (Model Answer):
                            </span>
                            <p className="text-slate-800 font-sans whitespace-pre-line leading-relaxed">
                              {part.modelAnswer}
                            </p>
                            {part.modelAnswerMn && (
                              <p className="text-slate-600 font-sans whitespace-pre-line pt-1 border-t border-slate-100 italic">
                                {part.modelAnswerMn}
                              </p>
                            )}
                          </div>

                          {part.examinerNotes && (
                            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                              <span className="font-bold text-amber-950">Шалгагчийн зөвлөмж: </span>
                              {part.examinerNotes}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =========================================
              CASE 4: FALLBACK BANK QUESTION
             ========================================= */}
          {fallbackBankQuestion && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-1">
                <span className="text-xs font-bold text-cyan-800">
                  {fallbackBankQuestion.paperCode} • {fallbackBankQuestion.questionNumber}
                </span>
                <h4 className="font-bold text-cyan-950 text-sm">
                  {language === "mn" ? fallbackBankQuestion.titleMn : fallbackBankQuestion.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 mt-2 font-sans whitespace-pre-line">
                  {language === "mn" && fallbackBankQuestion.questionTextMn
                    ? fallbackBankQuestion.questionTextMn
                    : fallbackBankQuestion.questionText}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2 text-xs">
                <span className="font-bold text-emerald-900 block">Mark Scheme:</span>
                <ul className="space-y-1 text-emerald-950 font-mono">
                  {fallbackBankQuestion.markScheme.map((m, idx) => (
                    <li key={idx}>• {m}</li>
                  ))}
                </ul>
                <div className="bg-white p-3 rounded-lg border border-emerald-200 mt-2">
                  <span className="font-bold text-slate-800 block mb-1">Model Answer:</span>
                  <p className="text-slate-700">{fallbackBankQuestion.modelAnswer}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">
            Cambridge International AS & A Level Chemistry (9701)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors"
          >
            Хаах (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
