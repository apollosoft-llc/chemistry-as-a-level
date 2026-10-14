import React, { useState } from "react";
import { Chapter } from "../types";
import {
  Sparkles,
  X,
  Send,
  Loader2,
  BookOpen,
  Calculator,
  FileQuestion,
  HelpCircle,
  Copy,
  Check,
  GraduationCap,
  MessageSquare,
  Flame,
  CheckCircle,
} from "lucide-react";

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "mn" | "en";
  initialPrompt?: string;
  selectedChapter?: Chapter | null;
  chapters: Chapter[];
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialPrompt = "",
  selectedChapter,
  chapters,
}) => {
  const [mode, setMode] = useState<"explain" | "solve" | "generate" | "freeChat">("explain");
  const [promptInput, setPromptInput] = useState(initialPrompt);
  const [selectedChNum, setSelectedChNum] = useState<number>(
    selectedChapter ? selectedChapter.number : 1
  );
  const [detailLevel, setDetailLevel] = useState<"simple" | "detailed" | "exam-focused">("detailed");
  const [difficulty, setDifficulty] = useState<"standard" | "challenging">("standard");

  const [isLoading, setIsLoading] = useState(false);
  const [resultText, setResultText] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ role: "user" | "model"; text: string }>>([]);
  const [copied, setCopied] = useState(false);

  // Update prompt when initialPrompt changes
  React.useEffect(() => {
    if (initialPrompt) {
      setPromptInput(initialPrompt);
    }
  }, [initialPrompt]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (resultText) {
      navigator.clipboard.writeText(resultText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExecute = async () => {
    if (!promptInput.trim() && mode !== "generate") return;
    setIsLoading(true);
    setResultText(null);

    const activeCh = chapters.find((c) => c.number === selectedChNum);
    const chapterName = activeCh ? `${activeCh.number}. ${activeCh.titleEn} (${activeCh.titleMn})` : "General Chemistry";

    try {
      if (mode === "explain") {
        const res = await fetch("/api/ai/explain", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            topic: chapterName,
            subtopic: promptInput,
            lang: lang,
            detailLevel: detailLevel,
          }),
        });
        const data = await res.json();
        setResultText(data.explanation || "Тайлбар бэлтгэхэд алдаа гарлаа.");
      } else if (mode === "solve") {
        const res = await fetch("/api/ai/solve", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            problem: promptInput,
            chapterContext: chapterName,
            lang: lang,
          }),
        });
        const data = await res.json();
        setResultText(data.solution || "Бодолт бэлтгэхэд алдаа гарлаа.");
      } else if (mode === "generate") {
        const res = await fetch("/api/ai/generate-question", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chapterNumber: selectedChNum,
            chapterTitle: activeCh ? activeCh.titleEn : "General",
            difficulty: difficulty,
            lang: lang,
          }),
        });
        const data = await res.json();
        if (data.question) {
          const q = data.question;
          const formatted = `[${q.marks || 4} Marks] Cambridge Style Question:\n\n${q.questionEn}\n\n${q.questionMn ? `(Монгол хувилбар: ${q.questionMn})\n\n` : ""}----------------------------------------\nMARK SCHEME & EXPLANATION:\n${q.solutionEn}\n\n${q.solutionMn ? `Монгол тайлбар:\n${q.solutionMn}\n\n` : ""}${q.examinerTip ? `Examiner Tip: ${q.examinerTip}` : ""}`;
          setResultText(formatted);
        } else {
          setResultText("Бодлого үүсгэхэд алдаа гарлаа.");
        }
      } else if (mode === "freeChat") {
        const newHistory = [...chatMessages, { role: "user" as const, text: promptInput }];
        setChatMessages(newHistory);
        const res = await fetch("/api/ai/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: promptInput,
            history: chatMessages,
            lang: lang,
          }),
        });
        const data = await res.json();
        if (data.response) {
          setChatMessages([...newHistory, { role: "model", text: data.response }]);
          setPromptInput("");
        }
      }
    } catch (err) {
      console.error(err);
      setResultText("Сервертэй холбогдоход алдаа гарлаа. Gemini API key эсвэл сүлжээгээ шалгана уу.");
    } finally {
      setIsLoading(false);
    }
  };

  const presetTopics = [
    { title: "Hess's Law & Enthalpy Cycle", prompt: "Hess-ийн хууль ба Enthalpy of formation/combustion ашиглан урвалын дулааныг тооцоолох аргачлалыг жишээ бодлогын хамт тайлбарлаж өгнө үү." },
    { title: "Buffer Solutions & pH Calculation", prompt: "Эерэг болон саармаг Buffer уусмалын ажиллах зарчим ба Henderson-Hasselbalch (эсвэл Ka) тэгшитгэл ашиглан pH тооцох бодлогыг алхам алхмаар тайлбарлана уу." },
    { title: "SN1 vs SN2 Mechanisms", prompt: "1-рч ба 3-рч галогеналкануудын SN1 ба SN2 нуклеофил халалцах урвалын ялгаа, урвалын хурд, карбкатионы тогтворжилт ба стереохимийн өөрчлөлтийг (inversion/racemic) тайлбарлана уу." },
    { title: "Period 3 Oxides & Water pH", prompt: "3-р үеийн ислүүд (Na2O, MgO, Al2O3, SiO2, P4O10, SO2/SO3)-ийн усанд уусах урвалын тэгшитгэл ба үүсгэх уусмалын pH-ийн зүй тогтлыг тайлбарлана уу." },
    { title: "Born-Haber Cycle & Lattice Energy", prompt: "Born-Haber цикл ашиглан Lattice Energy тооцоолох бүх энергийн алхам (Atomisation, Ionisation, Electron affinity, Formation) ба өгөгдсөн жишээгээр тайлбарлаж өгнө үү." },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold shadow-md shadow-amber-500/20">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span>Cambridge Chemistry AI Tutor</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 font-bold">
                  Gemini 3 Flash
                </span>
              </h2>
              <p className="text-xs text-slate-600">
                {lang === "mn"
                  ? "Cambridge 9701 шалгалтын хөтөлбөрийн дагуу онол тайлбарлах, бодлого бодох, шалгалтын асуулт зохиох систем"
                  : "Instant explanations, step-by-step past paper problem solving & Cambridge question generation"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 px-6 py-3 bg-white border-b border-slate-200 text-xs">
          <button
            onClick={() => {
              setMode("explain");
              setResultText(null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
              mode === "explain"
                ? "bg-amber-500 text-slate-950 shadow-2xs"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === "mn" ? "💡 Онол тайлбарлуулах" : "Explain Concept"}</span>
          </button>

          <button
            onClick={() => {
              setMode("solve");
              setResultText(null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
              mode === "solve"
                ? "bg-amber-500 text-slate-950 shadow-2xs"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === "mn" ? "📝 Бодлого бодуулах" : "Solve Exam Problem"}</span>
          </button>

          <button
            onClick={() => {
              setMode("generate");
              setResultText(null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
              mode === "generate"
                ? "bg-amber-500 text-slate-950 shadow-2xs"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <FileQuestion className="w-3.5 h-3.5" />
            <span>{lang === "mn" ? "🎲 Шинэ бодлого үүсгэх" : "Generate Question"}</span>
          </button>

          <button
            onClick={() => {
              setMode("freeChat");
              setResultText(null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
              mode === "freeChat"
                ? "bg-amber-500 text-slate-950 shadow-2xs"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === "mn" ? "💬 Чөлөөт чат" : "Free Chat"}</span>
          </button>
        </div>

        {/* Modal Body: Controls + Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Chapter Selector (if applicable) */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-600 font-semibold">
                {lang === "mn" ? "Холбогдох бүлэг:" : "Target Chapter:"}
              </span>
              <select
                value={selectedChNum}
                onChange={(e) => setSelectedChNum(Number(e.target.value))}
                className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-slate-800 font-semibold focus:outline-none focus:border-amber-500"
              >
                {chapters.map((c) => (
                  <option key={c.number} value={c.number}>
                    Ch {c.number}: {c.titleEn} ({c.level})
                  </option>
                ))}
              </select>
            </div>

            {mode === "explain" && (
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-600 font-semibold">
                  {lang === "mn" ? "Түвшин:" : "Depth:"}
                </span>
                <select
                  value={detailLevel}
                  onChange={(e) => setDetailLevel(e.target.value as any)}
                  className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-slate-800 focus:outline-none focus:border-amber-500"
                >
                  <option value="simple">{lang === "mn" ? "Энгийн (Суурь ойлголт)" : "Simple Beginner"}</option>
                  <option value="detailed">{lang === "mn" ? "Дэлгэрэнгүй (Стандарт)" : "Detailed Standard"}</option>
                  <option value="exam-focused">{lang === "mn" ? "Шалгалтад чиглэсэн (Mark Scheme)" : "Exam Mark Scheme Focused"}</option>
                </select>
              </div>
            )}

            {mode === "generate" && (
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-600 font-semibold">
                  {lang === "mn" ? "Хүндрэл:" : "Difficulty:"}
                </span>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as any)}
                  className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-slate-800 focus:outline-none focus:border-amber-500"
                >
                  <option value="standard">{lang === "mn" ? "Стандарт (Paper 2/4)" : "Standard Paper 2/4"}</option>
                  <option value="challenging">{lang === "mn" ? "Ахисан түвшин / Хүнд" : "Challenging A* Level"}</option>
                </select>
              </div>
            )}
          </div>

          {/* Preset Prompts Pill Bar for explain mode */}
          {mode === "explain" && (
            <div className="space-y-1.5">
              <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider block">
                {lang === "mn" ? "Санал болгох түлхүүр сэдвүүд:" : "Recommended Syllabus Topics:"}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {presetTopics.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPromptInput(p.prompt)}
                    className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Text Area for non-freeChat or generate */}
          {mode !== "freeChat" && mode !== "generate" && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                {mode === "explain"
                  ? lang === "mn"
                    ? "Тайлбарлуулахыг хүссэн ойлголт, үзэгдэл эсвэл асуултаа бичнэ үү:"
                    : "Enter the concept or topic you need explained:"
                  : lang === "mn"
                  ? "Бодуулах гэж буй бодлогын текст, өгөгдөл эсвэл химийн тэгшитгэлээ оруулна уу:"
                  : "Paste the past paper question or calculation to solve:"}
              </label>
              <textarea
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder={
                  mode === "explain"
                    ? "жнь: Explain why the second ionization energy of Sodium is so much higher than its first ionization energy..."
                    : "жнь: 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid (Ka = 1.74 × 10⁻⁵) is titrated with 0.100 mol dm⁻³ NaOH. Calculate the pH after adding 12.5 cm³ of NaOH..."
                }
                rows={4}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-mono transition-all"
              />
            </div>
          )}

          {mode === "generate" && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <p className="text-xs text-slate-700 leading-relaxed">
                {lang === "mn"
                  ? `Сонгогдсон Бүлэг ${selectedChNum}-ийн хүрээнд Cambridge 9701 шалгалтын стандарт бүхий шинэ бодлого (Mark Scheme болон алхамчилсан бодолтын хамт) үүсгэнэ.`
                  : `Gemini will generate an authentic Cambridge 9701 structured question with marks allocation, official-style mark scheme, and examiner tips for Chapter ${selectedChNum}.`}
              </p>
            </div>
          )}

          {/* Free Chat History view */}
          {mode === "freeChat" && (
            <div className="space-y-3 min-h-[220px] max-h-[350px] overflow-y-auto p-3 bg-slate-50 rounded-xl border border-slate-200">
              {chatMessages.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-xs">
                  {lang === "mn"
                    ? "Cambridge Chemistry-тэй холбоотой хүссэн асуултаа асуугаарай. AI багш хариулахад бэлэн байна."
                    : "Ask any question about Cambridge AS & A Level Chemistry. The AI Tutor is ready to assist you."}
                </div>
              ) : (
                chatMessages.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl p-3.5 text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-amber-500 text-slate-950 font-medium"
                          : "bg-white border border-slate-200 text-slate-800 whitespace-pre-wrap shadow-2xs"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Result Box */}
          {resultText && (
            <div className="rounded-xl bg-white border border-emerald-300 p-5 space-y-3 shadow-sm animate-in fade-in">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {lang === "mn" ? "AI Багшийн хариу" : "AI Tutor Response"}
                </span>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{lang === "mn" ? "Хууллаа" : "Copied"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === "mn" ? "Хуулах" : "Copy"}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed font-sans max-h-[380px] overflow-y-auto pr-2">
                {resultText}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Action trigger */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          {mode === "freeChat" ? (
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleExecute();
                  }
                }}
                placeholder={lang === "mn" ? "Асуултаа бичээд Enter дарна уу..." : "Type your question and press Enter..."}
                className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={handleExecute}
                disabled={isLoading || !promptInput.trim()}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-50 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{lang === "mn" ? "Илгээх" : "Send"}</span>
              </button>
            </div>
          ) : (
            <>
              <span className="text-xs text-slate-500 hidden sm:inline">
                Cambridge 9701 Syllabus Verified Answers
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors"
                >
                  {lang === "mn" ? "Хаах" : "Close"}
                </button>
                <button
                  onClick={handleExecute}
                  disabled={isLoading || (!promptInput.trim() && mode !== "generate")}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-50 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-transform active:scale-95"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{lang === "mn" ? "Боловсруулж байна..." : "Thinking..."}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 fill-current" />
                      <span>
                        {mode === "explain"
                          ? lang === "mn"
                            ? "Тайлбар гаргуулах"
                            : "Generate Explanation"
                          : mode === "solve"
                          ? lang === "mn"
                            ? "Бодлогыг бодуулах"
                            : "Solve Step-by-Step"
                          : lang === "mn"
                          ? "Бодлого үүсгэх"
                          : "Generate Question"}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
