import React, { useState } from "react";
import {
  CATIONS_DATA,
  ANIONS_DATA,
  GASES_DATA,
  ELEMENTS_DATA,
  CONSTANTS_DATA,
  CationReaction,
  AnionReaction,
  GasTest,
  ElementTest,
} from "../data/qualitativeAnalysisData";
import { PracticalVideoModal } from "./PracticalVideoModal";
import {
  FlaskConical,
  Search,
  CheckCircle2,
  Sparkles,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
  Printer,
  ChevronRight,
  ShieldAlert,
  Flame,
  Wind,
  Layers,
  Calculator,
  Play,
  Youtube,
  ExternalLink,
  Video,
} from "lucide-react";

interface QualitativeAnalysisNotesProps {
  onNavigateToChapter?: (chapterNumber: number) => void;
  onNavigateToPaper?: (paperId?: string) => void;
  standalone?: boolean;
}

export const QualitativeAnalysisNotes: React.FC<QualitativeAnalysisNotesProps> = ({
  onNavigateToChapter,
  onNavigateToPaper,
  standalone = false,
}) => {
  const [activeSection, setActiveSection] = useState<
    "all" | "cations" | "anions" | "gases" | "constants" | "deducer"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Video Modal State
  const [selectedVideoItem, setSelectedVideoItem] = useState<
    AnionReaction | CationReaction | GasTest | ElementTest | null
  >(null);
  const [selectedVideoType, setSelectedVideoType] = useState<
    "anion" | "cation" | "gas" | "element"
  >("cation");

  // Interactive Deducer State
  const [selectedNaohObservation, setSelectedNaohObservation] = useState<string>("all");
  const [selectedNh3Observation, setSelectedNh3Observation] = useState<string>("all");

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleOpenVideo = (
    item: AnionReaction | CationReaction | GasTest | ElementTest,
    type: "anion" | "cation" | "gas" | "element"
  ) => {
    setSelectedVideoItem(item);
    setSelectedVideoType(type);
  };

  // Filtered lists
  const filteredCations = CATIONS_DATA.filter((c) => {
    const matchesSearch =
      c.cationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.cationMn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.naohReaction.observationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.nh3Reaction.observationEn.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeSection === "deducer") {
      if (
        selectedNaohObservation === "white_sol" &&
        !(c.naohReaction.solubleInExcess && c.naohReaction.observationEn.includes("white"))
      )
        return false;
      if (
        selectedNaohObservation === "white_insol" &&
        !(!c.naohReaction.solubleInExcess && c.naohReaction.observationEn.includes("white"))
      )
        return false;
      if (
        selectedNaohObservation === "blue" &&
        !c.naohReaction.observationEn.includes("blue")
      )
        return false;
      if (
        selectedNaohObservation === "green" &&
        !c.naohReaction.observationEn.includes("green")
      )
        return false;
      if (
        selectedNaohObservation === "red_brown" &&
        !c.naohReaction.observationEn.includes("red-brown")
      )
        return false;
      if (
        selectedNaohObservation === "no_ppt_nh3" &&
        !c.naohReaction.observationEn.includes("ammonia")
      )
        return false;

      if (
        selectedNh3Observation === "white_sol" &&
        !(c.nh3Reaction.solubleInExcess && c.nh3Reaction.observationEn.includes("white"))
      )
        return false;
      if (
        selectedNh3Observation === "white_insol" &&
        !(!c.nh3Reaction.solubleInExcess && c.nh3Reaction.observationEn.includes("white"))
      )
        return false;
      if (
        selectedNh3Observation === "dark_blue" &&
        !c.nh3Reaction.observationEn.includes("dark blue")
      )
        return false;
      if (
        selectedNh3Observation === "no_ppt" &&
        !c.nh3Reaction.observationEn.includes("no ppt") &&
        !c.nh3Reaction.noReaction
      )
        return false;
    }

    return true;
  });

  const filteredAnions = ANIONS_DATA.filter((a) => {
    return (
      a.anionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.anionMn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.observationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.reagentAndTestEn.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredGases = GASES_DATA.filter((g) => {
    return (
      g.gasEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.gasMn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.testAndResultEn.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredConstants = CONSTANTS_DATA.filter((c) => {
    return (
      c.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.nameMn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.value.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950 text-white p-6 shadow-md border border-teal-800/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 text-[11px] font-bold tracking-wider uppercase border border-teal-500/30">
                Cambridge 9701 Exam Appendix
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 text-xs font-semibold">
                Paper 3 Practical & YouTube Lab Videos
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-teal-400" />
              <span>Qualitative Analysis Notes (9701 Practical Lab)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Кембрижийн 9701 практик шалгалтын катион (Cations), анион (Anions), хий (Gases) таних сорилууд дээр дараад YouTube дээрх тохирсон туршилтын бичлэг, хуруу шилний интерактив симуляци болон шалгалтын зөвлөгөөг шууд үзнэ үү.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {onNavigateToPaper && (
              <button
                onClick={() => onNavigateToPaper("9701_s24_qp_31")}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                title="Open Cambridge 9701 Paper 3 Practical Exam"
              >
                <FlaskConical className="w-4 h-4 text-slate-950" />
                <span>Paper 3 Practical Сорил ажиллах</span>
              </button>
            )}
            {onNavigateToChapter && (
              <button
                onClick={() => onNavigateToChapter(31)}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-teal-300" />
                <span>Chapter 31 (Paper 3)</span>
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-2xs transition-all flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Sheet</span>
            </button>
          </div>
        </div>

        {/* Quick Tabs & Search Bar */}
        <div className="mt-6 pt-5 border-t border-slate-700/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveSection("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeSection === "all"
                  ? "bg-teal-500 text-slate-950 shadow-2xs"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setActiveSection("cations")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeSection === "cations"
                  ? "bg-teal-500 text-slate-950 shadow-2xs"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>1. Cations ({CATIONS_DATA.length} Videos)</span>
            </button>
            <button
              onClick={() => setActiveSection("anions")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeSection === "anions"
                  ? "bg-indigo-500 text-white shadow-2xs"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>2. Anions ({ANIONS_DATA.length} Videos)</span>
            </button>
            <button
              onClick={() => setActiveSection("gases")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeSection === "gases"
                  ? "bg-teal-500 text-slate-950 shadow-2xs"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              3. Gases & Elements
            </button>
            <button
              onClick={() => setActiveSection("constants")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeSection === "constants"
                  ? "bg-teal-500 text-slate-950 shadow-2xs"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              Constants & Standards
            </button>
            <button
              onClick={() => setActiveSection("deducer")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeSection === "deducer"
                  ? "bg-amber-400 text-slate-950 shadow-2xs"
                  : "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-400/30"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Mystery Ion Solver</span>
            </button>
          </div>

          <div className="relative min-w-[200px] sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search ion, color, ppt, test..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-400"
            />
          </div>
        </div>
      </div>

      {/* ================= INTERACTIVE DEDUCER MODE ================= */}
      {activeSection === "deducer" && (
        <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 font-bold">
              ?
            </div>
            <div>
              <h3 className="font-bold text-amber-950 text-sm sm:text-base">
                Interactive Mystery Ion Deduction Tool (Paper 3 Practical Question Simulator)
              </h3>
              <p className="text-xs text-amber-800">
                Туршилтын хуруу шилэнд ажиглагдсан NaOH ба NH₃-ийн урвалын үр дүнг сонгож, үл мэдэгдэх катионыг Кембрижийн дүрмээр шууд тодорхойлно уу.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Observation with aqueous NaOH:
              </label>
              <select
                value={selectedNaohObservation}
                onChange={(e) => setSelectedNaohObservation(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium text-slate-800 focus:outline-none focus:border-teal-500 shadow-2xs"
              >
                <option value="all">Any NaOH observation...</option>
                <option value="white_sol">White ppt. soluble in excess (Al³⁺, Zn²⁺)</option>
                <option value="white_insol">White ppt. insoluble in excess (Mg²⁺, Ca²⁺, Ba²⁺)</option>
                <option value="blue">Pale blue ppt. insoluble in excess (Cu²⁺)</option>
                <option value="green">Green ppt. turning brown (Fe²⁺) or grey-green (Cr³⁺)</option>
                <option value="red_brown">Red-brown ppt. insoluble in excess (Fe³⁺)</option>
                <option value="no_ppt_nh3">No ppt., ammonia gas produced on warming (NH₄⁺)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Observation with aqueous NH₃:
              </label>
              <select
                value={selectedNh3Observation}
                onChange={(e) => setSelectedNh3Observation(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium text-slate-800 focus:outline-none focus:border-teal-500 shadow-2xs"
              >
                <option value="all">Any NH₃ observation...</option>
                <option value="white_sol">White ppt. soluble in excess (Zn²⁺ ONLY)</option>
                <option value="white_insol">White ppt. insoluble in excess (Al³⁺, Mg²⁺)</option>
                <option value="dark_blue">Pale blue ppt. soluble in excess giving dark blue solution (Cu²⁺)</option>
                <option value="no_ppt">No ppt. (Ca²⁺, Ba²⁺, NH₄⁺)</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-amber-900 border-t border-amber-200/60">
            <span>
              Matching Candidate Cations: <strong>{filteredCations.length}</strong>
            </span>
            <button
              onClick={() => {
                setSelectedNaohObservation("all");
                setSelectedNh3Observation("all");
              }}
              className="font-bold underline hover:text-amber-950"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* ================= SECTION 1: REACTIONS OF CATIONS (FEATURED LAB VIDEOS) ================= */}
      {(activeSection === "all" || activeSection === "cations" || activeSection === "deducer") && (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden">
          {/* Section Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-teal-50/90 via-slate-50 to-teal-50/50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-black text-sm flex items-center justify-center shadow-2xs">
                1
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Reactions of Cations (Катионуудыг таних урвал)
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold flex items-center gap-1">
                    <Play className="w-3 h-3 fill-red-600 text-red-600" />
                    11 YouTube Lab Videos
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Дурын катион дээр дарж NaOH(aq) болон NH₃(aq)-ийн туршилтын бичлэг, симуляцийг үзнэ үү
                </p>
              </div>
            </div>
            <span className="text-xs text-teal-700 font-bold bg-teal-100/70 px-3 py-1 rounded-lg self-start sm:self-auto flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" />
              <span>11 Cambridge Standard Cations</span>
            </span>
          </div>

          {/* Quick Cation Video Cards Grid */}
          <div className="p-4 sm:p-5 bg-slate-50/60 border-b border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Youtube className="w-4 h-4 text-red-600" />
                <span>Cations Practical Video Hub (Дарж бичлэг үзэх):</span>
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                Click any cation to watch 9701 experiment video
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {filteredCations.map((cation) => (
                <button
                  key={`cation-card-${cation.id}`}
                  onClick={() => handleOpenVideo(cation, "cation")}
                  className="p-3 rounded-xl bg-white hover:bg-teal-50/50 border border-slate-200 hover:border-teal-300 transition-all text-left shadow-2xs group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-mono font-bold text-xs">
                        {cation.formula}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-red-100 group-hover:bg-red-600 text-red-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="font-bold text-xs text-slate-900 line-clamp-1 pt-1">
                      {cation.cationEn.split(",")[0]}
                    </div>
                    <div className="text-[10px] text-slate-500 line-clamp-1">
                      {cation.cationMn.split(",")[0]}
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-teal-700 font-medium">
                    <span>NaOH / NH₃</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">▶ Үзэх</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Official Layout Table with Full Click Action */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/4">Cation (Катион)</th>
                  <th className="py-3 px-4 w-4/12 border-l border-slate-200 bg-teal-50/40 text-teal-950">
                    Reaction with NaOH(aq)
                  </th>
                  <th className="py-3 px-4 w-4/12 border-l border-slate-200 bg-sky-50/40 text-sky-950">
                    Reaction with NH₃(aq)
                  </th>
                  <th className="py-3 px-4 w-2/12 border-l border-slate-200 text-right">
                    9701 Video
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {filteredCations.map((cation) => (
                  <tr
                    key={cation.id}
                    onClick={() => handleOpenVideo(cation, "cation")}
                    className="hover:bg-teal-50/30 transition-colors cursor-pointer group"
                    title={`Click to watch ${cation.cationEn} 9701 experiment video`}
                  >
                    {/* Cation Name & Badge */}
                    <td className="py-3.5 px-4 align-top">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-3 h-3 rounded-full shrink-0 border ${cation.colorBadge.dot} ${cation.colorBadge.border}`}
                          />
                          <span className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
                            {cation.cationEn}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium pl-5">
                          {cation.cationMn}
                        </div>
                        {cation.keyNotesEn && (
                          <div className="mt-1 pl-5 text-[10px] text-teal-700 font-semibold flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-teal-500 shrink-0" />
                            <span>{cation.keyNotesEn}</span>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* NaOH(aq) Column */}
                    <td className="py-3.5 px-4 align-top border-l border-slate-100 bg-teal-50/10">
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-900 leading-snug">
                          {cation.naohReaction.observationEn}
                        </p>
                        <p className="text-xs text-slate-500 leading-snug">
                          {cation.naohReaction.observationMn}
                        </p>
                        {cation.naohReaction.excessResultEn && (
                          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-teal-100/70 text-teal-900 text-[10px] font-mono font-medium">
                            {cation.naohReaction.excessResultEn}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* NH3(aq) Column */}
                    <td className="py-3.5 px-4 align-top border-l border-slate-100 bg-sky-50/10">
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-900 leading-snug">
                          {cation.nh3Reaction.observationEn}
                        </p>
                        <p className="text-xs text-slate-500 leading-snug">
                          {cation.nh3Reaction.observationMn}
                        </p>
                        {cation.nh3Reaction.excessResultEn && (
                          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-sky-100/70 text-sky-900 text-[10px] font-mono font-medium">
                            {cation.nh3Reaction.excessResultEn}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Action Button */}
                    <td className="py-3.5 px-4 align-top border-l border-slate-100 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenVideo(cation, "cation");
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-2xs transition-all group-hover:scale-105"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Бичлэг үзэх</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= SECTION 2: REACTIONS OF ANIONS (FEATURED VIDEO LAB) ================= */}
      {(activeSection === "all" || activeSection === "anions") && (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden space-y-0">
          {/* Section Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-50/90 via-slate-50 to-indigo-50/50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-2xs">
                2
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Reactions of Anions (Анионуудыг таних урвал)
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold flex items-center gap-1">
                    <Play className="w-3 h-3 fill-red-600 text-red-600" />
                    9 YouTube Lab Videos
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Дурын анион дээр дарж Кембриж 9701 стандартын туршилтын бичлэг болон нарийвчилсан зааврыг үзнэ үү
                </p>
              </div>
            </div>
            <span className="text-xs text-indigo-700 font-bold bg-indigo-100/70 px-3 py-1 rounded-lg self-start sm:self-auto flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" />
              <span>9 Cambridge Standard Anions</span>
            </span>
          </div>

          {/* Quick Anion Video Cards Grid */}
          <div className="p-4 sm:p-5 bg-slate-50/50 border-b border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Youtube className="w-4 h-4 text-red-600" />
                <span>Anions Practical Video Hub (Дарж бичлэг үзэх):</span>
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                Click any card to watch YouTube 9701 experiment
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {filteredAnions.map((anion) => (
                <button
                  key={`card-${anion.id}`}
                  onClick={() => handleOpenVideo(anion, "anion")}
                  className="p-3 rounded-xl bg-white hover:bg-indigo-50/40 border border-slate-200 hover:border-indigo-300 transition-all text-left shadow-2xs group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-indigo-100/70 text-indigo-900 font-mono font-bold text-xs">
                        {anion.formula}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-red-100 group-hover:bg-red-600 text-red-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="font-bold text-xs text-slate-900 line-clamp-1 pt-1">
                      {anion.anionEn.split(",")[0]}
                    </div>
                    <div className="text-[10px] text-slate-500 line-clamp-1">
                      {anion.anionMn.split(",")[0]}
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-indigo-700 font-medium">
                    <span>{anion.colorCategory}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">▶ Үзэх</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Official Layout Table with Interactive Click */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/4">Anion (Ион)</th>
                  <th className="py-3 px-4 w-7/12 border-l border-slate-200">
                    Reaction & Official Cambridge Observation
                  </th>
                  <th className="py-3 px-4 w-2/12 border-l border-slate-200 text-right">
                    9701 Lab Video
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {filteredAnions.map((anion) => (
                  <tr
                    key={anion.id}
                    onClick={() => handleOpenVideo(anion, "anion")}
                    className="hover:bg-indigo-50/30 transition-colors cursor-pointer group"
                    title={`Click to watch ${anion.anionEn} experiment video`}
                  >
                    <td className="py-3.5 px-4 align-top">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                            {anion.anionEn}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {anion.anionMn}
                        </div>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">
                          {anion.colorCategory}
                        </span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 align-top border-l border-slate-100">
                      <div className="space-y-1.5">
                        <p className="font-semibold text-slate-900 leading-snug text-sm">
                          {anion.observationEn}
                        </p>
                        <p className="text-xs text-slate-600 leading-snug">
                          {anion.observationMn}
                        </p>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-0.5">
                          <strong className="text-slate-700">Reagent & Method:</strong>
                          <span>{anion.reagentAndTestEn}</span>
                        </div>
                        {anion.ionicEquation && (
                          <div className="pt-1">
                            <span className="px-2 py-1 rounded bg-indigo-50 text-indigo-950 text-xs font-mono font-bold border border-indigo-100 inline-block">
                              {anion.ionicEquation}
                            </span>
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 align-top border-l border-slate-100 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenVideo(anion, "anion");
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-2xs transition-all group-hover:scale-105"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Бичлэг үзэх</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= SECTION 3 & 4: TESTS FOR GASES & ELEMENTS ================= */}
      {(activeSection === "all" || activeSection === "gases") && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Section 3: Tests for Gases */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden flex flex-col">
            <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center border border-emerald-200">
                  3
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Tests for Gases (Хийг таних сорилууд)
                  </h3>
                  <p className="text-xs text-slate-500">
                    NH₃, CO₂, H₂, O₂ хийнүүдийг лабораторид илрүүлэх
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                Click to Watch
              </span>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4 w-1/3">Gas</th>
                    <th className="py-3 px-4 w-1/2 border-l border-slate-200">
                      Test and Test Result
                    </th>
                    <th className="py-3 px-4 w-1/6 border-l border-slate-200 text-right">
                      Video
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-sans">
                  {filteredGases.map((gas) => (
                    <tr
                      key={gas.id}
                      onClick={() => handleOpenVideo(gas, "gas")}
                      className="hover:bg-emerald-50/20 transition-colors cursor-pointer group"
                    >
                      <td className="py-3.5 px-4 align-top">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                            {gas.gasEn}
                          </span>
                          <div className="text-[11px] text-slate-500 font-medium">
                            {gas.gasMn}
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 align-top border-l border-slate-100">
                        <div className="space-y-1">
                          <p className="font-semibold text-slate-900 text-sm">
                            {gas.testAndResultEn}
                          </p>
                          <p className="text-xs text-slate-500">
                            {gas.testAndResultMn}
                          </p>
                          {gas.chemicalNote && (
                            <span className="inline-block mt-0.5 text-[10px] text-emerald-800 font-mono">
                              {gas.chemicalNote}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 align-top border-l border-slate-100 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenVideo(gas, "gas");
                          }}
                          className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white transition-colors"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Tests for Elements */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden flex flex-col">
            <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-violet-100 text-violet-800 font-black text-xs flex items-center justify-center border border-violet-200">
                  4
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Tests for Elements (Элемент таних)
                  </h3>
                  <p className="text-xs text-slate-500">
                    I₂ (Иод) болон цардуулын сорил
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-violet-700 bg-violet-100/70 px-2 py-0.5 rounded">
                Click to Watch
              </span>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4 w-1/3">Element</th>
                    <th className="py-3 px-4 w-1/2 border-l border-slate-200">
                      Test and Test Result
                    </th>
                    <th className="py-3 px-4 w-1/6 border-l border-slate-200 text-right">
                      Video
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-sans">
                  {ELEMENTS_DATA.map((elem) => (
                    <tr
                      key={elem.id}
                      onClick={() => handleOpenVideo(elem, "element")}
                      className="hover:bg-violet-50/20 transition-colors cursor-pointer group"
                    >
                      <td className="py-3.5 px-4 align-top">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-900 text-sm group-hover:text-violet-700 transition-colors">
                            {elem.elementEn}
                          </span>
                          <div className="text-[11px] text-slate-500 font-medium">
                            {elem.elementMn}
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 align-top border-l border-slate-100">
                        <div className="space-y-1">
                          <p className="font-semibold text-slate-900 text-sm">
                            {elem.testAndResultEn}
                          </p>
                          <p className="text-xs text-slate-500">
                            {elem.testAndResultMn}
                          </p>
                          {elem.chemicalNote && (
                            <span className="inline-block mt-0.5 text-[10px] text-violet-800 font-mono">
                              {elem.chemicalNote}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 align-top border-l border-slate-100 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenVideo(elem, "element");
                          }}
                          className="p-2 rounded-lg bg-violet-50 hover:bg-violet-600 text-violet-700 hover:text-white transition-colors"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Summary Box */}
            <div className="p-4 bg-violet-50/50 border-t border-violet-100 text-xs text-violet-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                Examiner Tip for Starch-Iodine:
              </p>
              <p className="text-slate-600">
                In iodometric titrations, add the starch indicator only when the iodine solution has turned straw-yellow (pale brown), just before the end-point.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= SECTION 5: IMPORTANT VALUES, CONSTANTS AND STANDARDS ================= */}
      {(activeSection === "all" || activeSection === "constants") && (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden">
          <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-black text-xs flex items-center justify-center border border-blue-200">
                <Calculator className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Important Values, Constants and Standards (Чухал утга, тогтмолууд)
                </h3>
                <p className="text-xs text-slate-500">
                  Бодлого бодох болон практик тооцоонд ашиглагдах тогтмол утгууд
                </p>
              </div>
            </div>
            <span className="text-xs text-slate-400 font-medium self-end sm:self-auto">
              Official Cambridge Constants
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/3">Physical Quantity / Standard</th>
                  <th className="py-3 px-4 w-1/2 border-l border-slate-200">
                    Symbol & Exact Standard Value
                  </th>
                  <th className="py-3 px-4 w-1/6 border-l border-slate-200 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {filteredConstants.map((constant) => {
                  return (
                    <tr
                      key={constant.id}
                      className="hover:bg-blue-50/20 transition-colors"
                    >
                      <td className="py-3.5 px-4 align-top">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-900 text-sm">
                            {constant.nameEn}
                          </span>
                          <div className="text-[11px] text-slate-500 font-medium">
                            {constant.nameMn}
                          </div>
                          {constant.notes && (
                            <div className="text-[10px] text-slate-400 pt-0.5">
                              {constant.notes}
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 align-top border-l border-slate-100 font-mono">
                        <div className="space-y-1">
                          <span className="text-sm font-bold text-blue-950 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 inline-block">
                            {constant.symbol} = {constant.value} {constant.unit}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 align-top border-l border-slate-100 text-right">
                        <button
                          onClick={() => handleCopy(constant.id, `${constant.value} ${constant.unit}`)}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors inline-flex items-center gap-1"
                        >
                          {copiedId === constant.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Practical Video Modal Popup */}
      {selectedVideoItem && (
        <PracticalVideoModal
          item={selectedVideoItem}
          itemType={selectedVideoType}
          onClose={() => setSelectedVideoItem(null)}
          onSelectItem={(newItem, newType) => {
            setSelectedVideoItem(newItem);
            setSelectedVideoType(newType);
          }}
        />
      )}
    </div>
  );
};
