import React, { useState } from "react";
import {
  HelpCircle,
  BookOpen,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Check,
  Search,
  Filter,
  Lightbulb,
  Award,
  Layers,
  FileQuestion,
  GraduationCap,
} from "lucide-react";
import {
  CAMBRIDGE_COMMAND_WORDS,
  CONFUSING_TERMS_PAIRS,
  CommandWord,
  ConfusingTermPair,
} from "../data/commandWordsData";
import { useLanguage } from "../utils/languageContext";
import { formatChemicalFormula } from "../utils/chemistryFormatter";

export const CommandWordsAndTermsModule: React.FC = () => {
  const { language } = useLanguage();
  const [activeMainTab, setActiveMainTab] = useState<"command-words" | "confusing-terms">("command-words");
  const [selectedCommandWordId, setSelectedCommandWordId] = useState<string>(CAMBRIDGE_COMMAND_WORDS[0].id);
  const [selectedPairId, setSelectedPairId] = useState<string>(CONFUSING_TERMS_PAIRS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Quiz state for Confusing Terms
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizChecked, setQuizChecked] = useState<Record<string, boolean>>({});

  const handleSelectQuizOption = (pairId: string, optIdx: number) => {
    setQuizAnswers((prev) => ({ ...prev, [pairId]: optIdx }));
    setQuizChecked((prev) => ({ ...prev, [pairId]: true }));
  };

  const handleResetQuiz = (pairId: string) => {
    setQuizAnswers((prev) => {
      const next = { ...prev };
      delete next[pairId];
      return next;
    });
    setQuizChecked((prev) => {
      const next = { ...prev };
      delete next[pairId];
      return next;
    });
  };

  const selectedCommandWord =
    CAMBRIDGE_COMMAND_WORDS.find((c) => c.id === selectedCommandWordId) || CAMBRIDGE_COMMAND_WORDS[0];
  const selectedPair =
    CONFUSING_TERMS_PAIRS.find((p) => p.id === selectedPairId) || CONFUSING_TERMS_PAIRS[0];

  const filteredCommandWords = CAMBRIDGE_COMMAND_WORDS.filter((cw) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      cw.word.toLowerCase().includes(q) ||
      cw.wordMn.toLowerCase().includes(q) ||
      cw.syllabusDefinitionEn.toLowerCase().includes(q) ||
      cw.syllabusDefinitionMn.toLowerCase().includes(q)
    );
  });

  const filteredPairs = CONFUSING_TERMS_PAIRS.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.pairTitle.toLowerCase().includes(q) ||
      p.pairTitleMn.toLowerCase().includes(q) ||
      p.termA.term.toLowerCase().includes(q) ||
      p.termB.term.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-indigo-950 text-white rounded-2xl p-6 shadow-xl border border-cyan-800/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/30">
                Cambridge 9701 Syllabus Master Guide
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                Mark Scheme Terminology
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              {language === "mn"
                ? "Command Words & Андуурагддаг Түлхүүр Үгсийн Лавлах"
                : "Command Words & Confusing Terms Master Trainer"}
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {language === "mn"
                ? "Кембрижийн шалгалтад оноо алддаг гол шалтгаан нь асуултын үгийн (State, Explain, Describe) утгыг андуурах эсвэл ойролцоо ойлголтуудыг (Strong vs Concentrated) холих явдал юм."
                : "Master exact Cambridge examiner expectations for State, Define, Describe, Explain, and master frequently confused chemical terms with interactive drills."}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center bg-slate-800/80 p-1.5 rounded-xl border border-slate-700 shrink-0">
            <button
              onClick={() => setActiveMainTab("command-words")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeMainTab === "command-words"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Command Words ({CAMBRIDGE_COMMAND_WORDS.length})</span>
            </button>
            <button
              onClick={() => setActiveMainTab("confusing-terms")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeMainTab === "confusing-terms"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Ялгахад хэцүү үгс ({CONFUSING_TERMS_PAIRS.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: COMMAND WORDS */}
      {activeMainTab === "command-words" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Command Words List */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm">Syllabus Command Words</h3>
              <span className="text-[11px] font-mono text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded">
                Cambridge 9701
              </span>
            </div>

            <div className="space-y-1.5">
              {filteredCommandWords.map((cw) => {
                const isSelected = cw.id === selectedCommandWordId;
                return (
                  <button
                    key={cw.id}
                    onClick={() => setSelectedCommandWordId(cw.id)}
                    className={`w-full p-3 rounded-xl text-left transition-all border flex items-center justify-between ${
                      isSelected
                        ? "bg-cyan-50 border-cyan-500 text-cyan-950 font-black shadow-xs ring-1 ring-cyan-500"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div>
                      <div className="text-sm font-extrabold">{cw.word}</div>
                      <div className="text-xs font-semibold text-slate-500">{cw.wordMn}</div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? "text-cyan-600" : "text-slate-400"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Breakdown & Poor vs Model Answers */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-cyan-100 text-cyan-800 uppercase font-mono">
                    Cambridge Official Standard
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">
                    {selectedCommandWord.word} • {selectedCommandWord.wordMn}
                  </h2>
                </div>
              </div>

              {/* Official Definition Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
                  Syllabus Definition
                </h4>
                <p className="text-sm text-slate-900 font-medium leading-relaxed">
                  {selectedCommandWord.syllabusDefinitionEn}
                </p>
                {selectedCommandWord.syllabusDefinitionMn && (
                  <p className="text-xs text-slate-600 pt-1 border-t border-slate-200 leading-relaxed">
                    {selectedCommandWord.syllabusDefinitionMn}
                  </p>
                )}
              </div>

              {/* What Examiners Expect vs Common Pitfall */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                  <div className="font-bold text-emerald-900 text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Шалгагчийн шаардлага (What to write):
                  </div>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    {selectedCommandWord.whatExaminersExpectMn || selectedCommandWord.whatExaminersExpect}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                  <div className="font-bold text-amber-900 text-xs flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Сурагчдын түгээмэл алдаа (Common Pitfall):
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    {selectedCommandWord.commonStudentPitfallMn || selectedCommandWord.commonStudentPitfall}
                  </p>
                </div>
              </div>

              {/* Live Real Cambridge Example: Poor vs Model Answer */}
              <div className="space-y-3 pt-2">
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-600" />
                  Шалгалтын Бодит Жишээ Даалгавар:
                </h4>

                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                  <div className="text-[11px] text-cyan-300 font-mono font-bold">
                    Exam Question [{selectedCommandWord.exampleQuestion.marks} Mark(s)]
                  </div>
                  <div className="text-sm font-semibold">{selectedCommandWord.exampleQuestion.questionTextEn}</div>
                  <div className="text-xs text-slate-300">{selectedCommandWord.exampleQuestion.questionTextMn}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {/* Poor Answer */}
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-red-800">
                      <span className="flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-red-600" />
                        Буруу / Оноо авахгүй хариулт:
                      </span>
                      <span className="bg-red-200 px-1.5 py-0.5 rounded text-[10px]">0 Marks</span>
                    </div>
                    <div className="text-xs text-slate-800 italic bg-white p-2.5 rounded border border-red-100">
                      "{selectedCommandWord.exampleQuestion.poorAnswer}"
                    </div>
                    <div className="text-[11px] text-red-900">
                      <strong>Шалтгаан:</strong> {selectedCommandWord.exampleQuestion.poorAnswerReason}
                    </div>
                  </div>

                  {/* Model Cambridge Answer */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Бүрэн онооны загвар хариулт:
                      </span>
                      <span className="bg-emerald-200 px-1.5 py-0.5 rounded text-[10px]">
                        Full Marks [{selectedCommandWord.exampleQuestion.marks}]
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 bg-white p-2.5 rounded border border-emerald-100 font-mono">
                      {selectedCommandWord.exampleQuestion.modelAnswer}
                    </div>
                    <div className="text-[11px] text-emerald-900">
                      <strong>Монгол орчуулга:</strong> {selectedCommandWord.exampleQuestion.modelAnswerMn}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: CONFUSING TERMS TRAINER */}
      {activeMainTab === "confusing-terms" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Pairs Selector */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm">Төөрөлддөг хосууд</h3>
              <span className="text-[11px] font-mono text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded">
                {CONFUSING_TERMS_PAIRS.length} Хос
              </span>
            </div>

            <div className="space-y-1.5">
              {filteredPairs.map((pair) => {
                const isSelected = pair.id === selectedPairId;
                return (
                  <button
                    key={pair.id}
                    onClick={() => setSelectedPairId(pair.id)}
                    className={`w-full p-3 rounded-xl text-left transition-all border flex items-center justify-between ${
                      isSelected
                        ? "bg-cyan-50 border-cyan-500 text-cyan-950 font-black shadow-xs ring-1 ring-cyan-500"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-black">{pair.pairTitle}</div>
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5 truncate">
                        {pair.pairTitleMn}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? "text-cyan-600" : "text-slate-400"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Side-by-Side Comparison & Interactive Drill */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
              {/* Title & Core Distinction */}
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-purple-100 text-purple-800 uppercase font-mono">
                  Concept Distinction Drill
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {selectedPair.pairTitle}
                </h2>
                <div className="p-3.5 mt-3 rounded-xl bg-cyan-50/80 border border-cyan-200 text-xs text-cyan-950 leading-relaxed">
                  <strong className="text-cyan-900">Ялгааны гол санаа: </strong>
                  {selectedPair.coreDifferenceMn}
                </div>
              </div>

              {/* Side by Side Term A vs Term B */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Term A */}
                <div className="p-4 rounded-xl bg-slate-50 border border-blue-200 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-black text-blue-900 text-sm">{selectedPair.termA.term}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {selectedPair.termA.termMn}
                    </span>
                  </div>
                  <p className="text-xs text-slate-800 font-medium leading-relaxed">
                    {selectedPair.termA.definition}
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    {selectedPair.termA.definitionMn}
                  </p>
                  <div className="pt-2 border-t border-slate-200">
                    <div className="text-[11px] font-bold text-slate-700 mb-1">Онцлог шинжүүд:</div>
                    <ul className="text-[11px] text-slate-600 space-y-1">
                      {selectedPair.termA.keyCharacteristics.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-2 bg-blue-50 rounded text-[11px] text-blue-950">
                    <strong>Жишээ:</strong> {selectedPair.termA.example}
                  </div>
                </div>

                {/* Term B */}
                <div className="p-4 rounded-xl bg-slate-50 border border-amber-200 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-black text-amber-900 text-sm">{selectedPair.termB.term}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      {selectedPair.termB.termMn}
                    </span>
                  </div>
                  <p className="text-xs text-slate-800 font-medium leading-relaxed">
                    {selectedPair.termB.definition}
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    {selectedPair.termB.definitionMn}
                  </p>
                  <div className="pt-2 border-t border-slate-200">
                    <div className="text-[11px] font-bold text-slate-700 mb-1">Онцлог шинжүүд:</div>
                    <ul className="text-[11px] text-slate-600 space-y-1">
                      {selectedPair.termB.keyCharacteristics.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-2 bg-amber-50 rounded text-[11px] text-amber-950">
                    <strong>Жишээ:</strong> {selectedPair.termB.example}
                  </div>
                </div>
              </div>

              {/* Interactive Quick Check Drill */}
              <div className="p-5 rounded-xl bg-slate-900 text-white space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-cyan-300 text-xs flex items-center gap-1.5 uppercase font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    Interactive Concept Check
                  </div>
                  {quizChecked[selectedPair.id] && (
                    <button
                      onClick={() => handleResetQuiz(selectedPair.id)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Дахин оролдох</span>
                    </button>
                  )}
                </div>

                <div className="text-sm font-semibold">
                  {selectedPair.quickCheckQuestion.questionText}
                </div>
                {selectedPair.quickCheckQuestion.questionTextMn && (
                  <div className="text-xs text-slate-300">
                    {selectedPair.quickCheckQuestion.questionTextMn}
                  </div>
                )}

                {/* Multiple choice options */}
                <div className="space-y-2 pt-2">
                  {selectedPair.quickCheckQuestion.options.map((opt, optIdx) => {
                    const isSelected = quizAnswers[selectedPair.id] === optIdx;
                    const isChecked = quizChecked[selectedPair.id];
                    const isCorrect = optIdx === selectedPair.quickCheckQuestion.correctIndex;

                    let btnStyle = "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700";
                    if (isChecked) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-950 border-emerald-500 text-emerald-200 font-bold";
                      } else if (isSelected) {
                        btnStyle = "bg-red-950 border-red-500 text-red-200";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isChecked}
                        onClick={() => handleSelectQuizOption(selectedPair.id, optIdx)}
                        className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold font-mono opacity-60">
                            {["A", "B", "C", "D"][optIdx]}.
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isChecked && isCorrect && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Explanation */}
                {quizChecked[selectedPair.id] && (
                  <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-xs space-y-1 animate-in fade-in">
                    <div className="font-bold text-cyan-300">Тайлбар & Хариу:</div>
                    <p className="text-slate-200">{selectedPair.quickCheckQuestion.explanation}</p>
                    <p className="text-slate-400">{selectedPair.quickCheckQuestion.explanationMn}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
