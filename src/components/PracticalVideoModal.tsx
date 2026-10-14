import React, { useState, useEffect } from "react";
import {
  AnionReaction,
  CationReaction,
  GasTest,
  ElementTest,
  PracticalVideoTutorial,
  ANIONS_DATA,
  CATIONS_DATA,
  GASES_DATA,
  ELEMENTS_DATA,
} from "../data/qualitativeAnalysisData";
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Youtube,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FlaskConical,
  Flame,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Eye,
  Info,
  Layers,
  ArrowRight,
  Volume2,
  Video,
  Droplets,
  Zap,
} from "lucide-react";

interface PracticalVideoModalProps {
  item: AnionReaction | CationReaction | GasTest | ElementTest | null;
  itemType: "anion" | "cation" | "gas" | "element";
  onClose: () => void;
  onSelectItem?: (
    item: AnionReaction | CationReaction | GasTest | ElementTest,
    itemType: "anion" | "cation" | "gas" | "element"
  ) => void;
}

export const PracticalVideoModal: React.FC<PracticalVideoModalProps> = ({
  item,
  itemType,
  onClose,
  onSelectItem,
}) => {
  const [activeTab, setActiveTab] = useState<"simulation" | "steps" | "exam-tips">("simulation");
  const [simStage, setSimStage] = useState<0 | 1 | 2 | 3>(2); // 0: Start, 1: Dropwise Reagent, 2: Precipitate / Gas, 3: Excess Reagent
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedSubTest, setSelectedSubTest] = useState<"naoh" | "nh3">("naoh");
  const [dropTrigger, setDropTrigger] = useState(0);

  if (!item || !item.videoTutorial) return null;

  const tutorial: PracticalVideoTutorial = item.videoTutorial;

  // Auto-step simulation timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setSimStage((prev) => {
          const next = ((prev + 1) % 4) as 0 | 1 | 2 | 3;
          if (next === 1) setDropTrigger((d) => d + 1);
          return next;
        });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const formula = "formula" in item ? item.formula : "";
  const isCation = itemType === "cation";
  const isAnion = itemType === "anion";
  const isGas = itemType === "gas";

  // Reagent name depending on test
  const getReagentLabel = () => {
    if (isCation) {
      return selectedSubTest === "naoh" ? "NaOH(aq)" : "NH₃(aq)";
    }
    if (item.id === "cl-" || item.id === "br-" || item.id === "i-") {
      return "AgNO₃(aq) + HNO₃";
    }
    if (item.id === "so4_2-" || item.id === "so3_2-") {
      return "BaCl₂(aq) + HCl";
    }
    if (item.id === "co3_2-") {
      return "Dilute HCl";
    }
    if (item.id === "no3-") {
      return "NaOH + Al foil (Heat)";
    }
    if (item.id === "no2-") {
      return "Acidified KMnO₄";
    }
    if (item.id === "s2o3_2-") {
      return "Dilute HCl";
    }
    return "Reagent Solution";
  };

  // Stage description text
  const getStageInfo = () => {
    if (isCation) {
      const cation = item as CationReaction;
      const reaction = selectedSubTest === "naoh" ? cation.naohReaction : cation.nh3Reaction;
      const reagentName = selectedSubTest === "naoh" ? "NaOH(aq)" : "NH₃(aq)";

      switch (simStage) {
        case 0:
          return {
            title: "1. Анхны сорьцын уусмал (Initial Solution)",
            descEn: `Aqueous solution containing ${cation.cationEn}`,
            descMn: `${cation.cationMn} агуулсан сорьцын тунгалаг уусмал бэлтгэв.`,
            color: "rgba(224, 242, 254, 0.4)",
            precipitate: null,
            effervescence: false,
            litmusColor: null,
            hasHeat: false,
            precipitateOpacity: 0,
            liquidHeight: 35,
          };
        case 1:
          return {
            title: `2. Дусаалгаар ${reagentName} нэмэх (Adding Drops)`,
            descEn: `Adding a few drops of ${reagentName} slowly to the test-tube.`,
            descMn: `Хуруу шил рүү ${reagentName} уусмалаас дусаагуураар болгоомжтой дусааж эхэлнэ.`,
            color: "rgba(219, 234, 254, 0.6)",
            precipitate: null,
            effervescence: false,
            litmusColor: null,
            hasHeat: cation.id === "nh4+",
            precipitateOpacity: 0.3,
            liquidHeight: 50,
          };
        case 2:
          return {
            title: "3. Гол ажиглалт ба тунадас (Observation Result)",
            descEn: reaction.observationEn,
            descMn: reaction.observationMn,
            color: tutorial.testTubeVisual.liquidColor,
            precipitate: tutorial.testTubeVisual.precipitateColor || "#ffffff",
            effervescence: reaction.observationEn.includes("ammonia") || reaction.observationEn.includes("gas"),
            litmusColor: cation.id === "nh4+" ? "blue" : null,
            hasHeat: cation.id === "nh4+",
            precipitateOpacity: 0.95,
            liquidHeight: 65,
          };
        case 3:
          return {
            title: `4. Илүүдэл ${reagentName}-ийн үйлчлэл (Excess Test)`,
            descEn: reaction.excessResultEn || (reaction.solubleInExcess ? "Precipitate dissolves in excess" : "Precipitate insoluble in excess"),
            descMn: reaction.excessResultMn || (reaction.solubleInExcess ? "Илүүдэлд бүрэн уусаж өнгөгүй/цогц уусмал болно" : "Илүүдэл урвалжид уусахгүй тунадас хэвээр үлдэнэ"),
            color: reaction.solubleInExcess ? (cation.id === "cu2+" && selectedSubTest === "nh3" ? "rgba(30, 58, 138, 0.9)" : "rgba(224, 231, 255, 0.7)") : tutorial.testTubeVisual.liquidColor,
            precipitate: reaction.solubleInExcess ? null : (tutorial.testTubeVisual.precipitateColor || "#ffffff"),
            effervescence: false,
            litmusColor: cation.id === "nh4+" ? "blue" : null,
            hasHeat: false,
            precipitateOpacity: reaction.solubleInExcess ? 0 : 0.95,
            liquidHeight: 80,
          };
      }
    }

    // Anions and Gases
    switch (simStage) {
      case 0:
        return {
          title: "1. Сорьцын анхны уусмал (Initial Solution)",
          descEn: "Clear solution in clean test-tube",
          descMn: "Сорьцын анхны тунгалаг уусмал",
          color: "rgba(224, 242, 254, 0.4)",
          precipitate: null,
          effervescence: false,
          litmusColor: null,
          hasHeat: false,
          precipitateOpacity: 0,
          liquidHeight: 35,
        };
      case 1:
        return {
          title: "2. Урвалж нэмэх (Reagents Added)",
          descEn: "reagentAndTestEn" in item ? item.reagentAndTestEn : tutorial.titleEn,
          descMn: "reagentAndTestMn" in item ? item.reagentAndTestMn : tutorial.titleMn,
          color: "rgba(219, 234, 254, 0.6)",
          precipitate: null,
          effervescence: false,
          litmusColor: null,
          hasHeat: item.id === "no3-",
          precipitateOpacity: 0.3,
          liquidHeight: 52,
        };
      case 2:
        return {
          title: "3. Гол ажиглалт ба урвал (Observation)",
          descEn: "observationEn" in item ? item.observationEn : tutorial.titleEn,
          descMn: "observationMn" in item ? item.observationMn : tutorial.summaryMn,
          color: tutorial.testTubeVisual.liquidColor,
          precipitate: tutorial.testTubeVisual.precipitateColor || null,
          effervescence: tutorial.testTubeVisual.hasEffervescence || false,
          litmusColor: item.id === "no3-" ? "blue" : null,
          hasHeat: item.id === "no3-",
          precipitateOpacity: 0.95,
          liquidHeight: 68,
        };
      case 3:
        return {
          title: "4. Эцсийн төлөв (Confirmation)",
          descEn: tutorial.testTubeVisual.excessBehavior || "Reaction observation complete",
          descMn: tutorial.summaryMn,
          color: tutorial.testTubeVisual.liquidColor,
          precipitate: tutorial.testTubeVisual.precipitateColor || null,
          effervescence: false,
          litmusColor: item.id === "no3-" ? "blue" : null,
          hasHeat: false,
          precipitateOpacity: 0.95,
          liquidHeight: 78,
        };
    }
  };

  const stageData = getStageInfo();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-indigo-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shrink-0">
              <Youtube className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[10px] tracking-wider uppercase">
                  Cambridge 9701 Lab Video & Simulation
                </span>
                <span className="text-xs font-mono font-bold text-indigo-300">
                  {formula}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                {tutorial.titleEn}
              </h2>
              <p className="text-xs text-slate-300 font-medium">{tutorial.titleMn}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Item Switcher Bar (Cations / Anions) */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <FlaskConical className="w-3.5 h-3.5 text-indigo-600" />
            <span>{isCation ? "11 Cations:" : isAnion ? "9 Anions:" : "Gases:"}</span>
          </span>

          {isCation &&
            CATIONS_DATA.map((c) => {
              const isSelected = item.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => onSelectItem && onSelectItem(c, "cation")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1 ${
                    isSelected
                      ? "bg-teal-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <span>{c.formula}</span>
                </button>
              );
            })}

          {isAnion &&
            ANIONS_DATA.map((a) => {
              const isSelected = item.id === a.id;
              return (
                <button
                  key={a.id}
                  onClick={() => onSelectItem && onSelectItem(a, "anion")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1 ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <span>{a.formula}</span>
                </button>
              );
            })}

          {!isCation &&
            !isAnion &&
            GASES_DATA.map((g) => {
              const isSelected = item.id === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => onSelectItem && onSelectItem(g, "gas")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1 ${
                    isSelected
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <span>{g.formula}</span>
                </button>
              );
            })}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Direct YouTube Video Banner (Guaranteed to Work without Embed Blocks) */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-white" />
                <span className="font-black text-sm uppercase tracking-wide">
                  Official Cambridge 9701 YouTube Video
                </span>
              </div>
              <p className="text-xs text-red-100">
                YouTube дээр энэ туршилтын албан ёсны бичлэгийг шууд нээж үзэх
              </p>
            </div>

            <a
              href={tutorial.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-red-600 hover:bg-red-50 font-black text-xs transition-transform transform active:scale-95 shadow-md shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>YouTube дээр үзэх (Watch on YouTube)</span>
            </a>
          </div>

          {/* Interactive Lab Simulation Stage - Modern Redesigned Glassware Lab */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left: Realistic 3D Chemistry Test-Tube Simulation */}
            <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 rounded-2xl p-4 sm:p-5 text-white shadow-xl flex flex-col justify-between border border-slate-800 relative overflow-hidden min-h-[380px]">
              {/* Lab Bench Background Grid Accent */}
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

              {/* Top Controls Bar inside Lab View */}
              <div className="flex items-center justify-between z-10 relative">
                <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>3D Lab Reaction Simulator</span>
                </span>

                {isCation && (
                  <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg border border-slate-700">
                    <button
                      onClick={() => setSelectedSubTest("naoh")}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                        selectedSubTest === "naoh"
                          ? "bg-teal-500 text-slate-950 shadow-xs"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      NaOH(aq)
                    </button>
                    <button
                      onClick={() => setSelectedSubTest("nh3")}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                        selectedSubTest === "nh3"
                          ? "bg-sky-500 text-slate-950 shadow-xs"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      NH₃(aq)
                    </button>
                  </div>
                )}
              </div>

              {/* Realistic Glass Test-Tube Stage */}
              <div className="my-4 flex items-end justify-center gap-6 relative z-10">
                {/* Reagent Bottle Standing Beside Tube */}
                <div className="hidden sm:flex flex-col items-center justify-end pb-3 opacity-90">
                  {/* Dropper Pipette Tip Hovering */}
                  {simStage === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-12 flex flex-col items-center animate-bounce duration-1000">
                      <div className="w-4 h-12 bg-amber-600/90 rounded-t-full border border-amber-400" />
                      <div className="w-2 h-10 bg-slate-300/80 border border-slate-400" />
                      <div className="w-1 h-3 bg-slate-200" />
                      {/* Dropping liquid particle */}
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 mt-1 animate-ping" />
                    </div>
                  )}

                  {/* Reagent Bottle Graphic */}
                  <div className="w-14 h-24 bg-amber-950/70 rounded-xl border-2 border-amber-600/60 p-1 flex flex-col items-center justify-between shadow-lg relative">
                    <div className="w-6 h-3 bg-slate-700 rounded-t-sm border border-slate-500 -mt-3" />
                    <div className="w-full bg-amber-100/95 text-slate-950 rounded py-1 px-0.5 text-center shadow-xs">
                      <span className="text-[8px] font-black leading-none block">
                        {getReagentLabel()}
                      </span>
                      <span className="text-[6px] text-slate-700 block mt-0.5">REAGENT</span>
                    </div>
                    <div className="w-full h-3 bg-amber-900/60 rounded-b" />
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono mt-1">Reagent</span>
                </div>

                {/* Main Chemistry Test Tube Assembly */}
                <div className="relative flex flex-col items-center">
                  {/* Litmus Paper Detection Indicator (if testing NH3 / NO3) */}
                  {stageData.litmusColor && (
                    <div className="absolute -top-7 -right-8 z-20 flex items-center gap-1 animate-pulse">
                      <div className="w-6 h-10 rounded-t bg-gradient-to-b from-blue-500 to-indigo-600 border border-blue-300 shadow-md transform rotate-12 flex items-center justify-center">
                        <span className="text-[7px] text-white font-bold transform -rotate-90">BLUE</span>
                      </div>
                      <span className="text-[9px] font-bold text-sky-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-sky-400/40 whitespace-nowrap">
                        Litmus Turns Blue
                      </span>
                    </div>
                  )}

                  {/* Glass Lip at Tube Opening */}
                  <div className="w-28 h-3 rounded-full bg-gradient-to-r from-slate-400 via-white to-slate-400 shadow-md z-20 border border-slate-300" />

                  {/* Pyrex Glass Test Tube Body with 3D Gloss & Shadows */}
                  <div className="relative w-24 h-56 rounded-b-[42px] border-x-[3px] border-b-[4px] border-slate-300/80 bg-gradient-to-r from-white/10 via-white/5 to-slate-900/20 backdrop-blur-md overflow-hidden shadow-2xl p-1 -mt-1.5 flex flex-col justify-end">
                    {/* Glass Specular Reflection Streak */}
                    <div className="absolute top-0 left-2 w-1.5 h-full bg-gradient-to-b from-white/60 via-white/20 to-transparent rounded-full pointer-events-none z-20" />
                    <div className="absolute top-0 right-3 w-1 h-full bg-white/10 rounded-full pointer-events-none z-20" />

                    {/* Liquid Body with Dynamic Animated Meniscus */}
                    <div
                      className="relative w-full transition-all duration-700 rounded-b-[38px] flex flex-col justify-end overflow-hidden"
                      style={{
                        height: `${stageData.liquidHeight}%`,
                        backgroundColor: stageData.color,
                        boxShadow: "inset 0 4px 12px rgba(255,255,255,0.4), inset 0 -4px 12px rgba(0,0,0,0.3)",
                      }}
                    >
                      {/* Meniscus Curve Line at Top of Liquid */}
                      <div className="w-full h-2.5 bg-white/40 rounded-full border-b border-white/60 -mt-1" />

                      {/* Gas Bubbles / Effervescence Physics */}
                      {stageData.effervescence && (
                        <div className="absolute inset-0 flex justify-around items-end pb-3 pointer-events-none">
                          <span className="w-2 h-2 rounded-full bg-white animate-bounce duration-700 delay-100" />
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-200 animate-bounce duration-1000 delay-200" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce duration-500 delay-300" />
                          <span className="w-3 h-3 rounded-full bg-sky-200 animate-bounce duration-800" />
                        </div>
                      )}

                      {/* Precipitate Cloud / Suspension Settling at Bottom */}
                      {stageData.precipitate && (
                        <div
                          className="w-full transition-all duration-700 rounded-b-[36px] flex flex-col items-center justify-center text-center p-1.5 shadow-2xl relative"
                          style={{
                            height: "45%",
                            backgroundColor: stageData.precipitate,
                            opacity: stageData.precipitateOpacity,
                            color: stageData.precipitate === "#ffffff" ? "#0f172a" : "#ffffff",
                            boxShadow: "0 -4px 10px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.4)",
                          }}
                        >
                          <span className="text-[10px] font-black uppercase tracking-wider block">
                            Precipitate
                          </span>
                          <span className="text-[8px] font-semibold opacity-85 block">
                            (Тунадас)
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Volumetric Graduations (Markings on glass) */}
                    <div className="absolute left-1 top-6 w-3 h-0.5 bg-slate-300/60 z-20" />
                    <div className="absolute left-1 top-14 w-2 h-0.5 bg-slate-300/60 z-20" />
                    <div className="absolute left-1 top-22 w-3.5 h-0.5 bg-slate-300/60 z-20" />
                    <div className="absolute left-1 top-30 w-2 h-0.5 bg-slate-300/60 z-20" />
                    <div className="absolute left-1 top-38 w-3 h-0.5 bg-slate-300/60 z-20" />
                  </div>

                  {/* Bunsen Burner Flame (if heating test) */}
                  {stageData.hasHeat && (
                    <div className="mt-1 flex flex-col items-center animate-pulse">
                      <div className="w-4 h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-blue-400 blur-[1px]" />
                      <div className="w-8 h-2 bg-slate-600 rounded-t" />
                      <span className="text-[8px] text-amber-300 font-bold">Gentle Warming</span>
                    </div>
                  )}

                  {/* Wooden Test Tube Rack Stand Base */}
                  {!stageData.hasHeat && (
                    <div className="w-32 h-3 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 rounded-md shadow-md -mt-1 border-t border-amber-600" />
                  )}
                </div>
              </div>

              {/* Bottom Interactive Playback Controls Bar */}
              <div className="bg-slate-900/95 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between gap-2 z-10">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-7 h-7 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center font-bold hover:bg-teal-400 transition-colors shadow-xs"
                    title={isPlaying ? "Pause Simulation" : "Play Simulation"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>
                  <button
                    onClick={() => {
                      setSimStage(0);
                      setIsPlaying(true);
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Restart Simulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 4 Clickable Step Progress Pills */}
                <div className="flex items-center gap-1">
                  {[
                    { label: "1. Сорьц" },
                    { label: "2. Дусаах" },
                    { label: "3. Тунадас" },
                    { label: "4. Илүүдэл" },
                  ].map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSimStage(idx as 0 | 1 | 2 | 3);
                        setIsPlaying(false);
                      }}
                      className={`px-2 py-1 rounded-md text-[10px] font-bold transition-all ${
                        simStage === idx
                          ? "bg-amber-400 text-slate-950 ring-1 ring-amber-300 shadow-xs"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                      }`}
                    >
                      {step.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Step Description & Cambridge Observations */}
            <div className="lg:col-span-6 flex flex-col space-y-3">
              {/* Current Reaction Step Details Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs">
                      Алхам {simStage + 1}/4
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm">{stageData.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">9701 Paper 3</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5 mt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">
                    Cambridge 9701 Observation:
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-snug">{stageData.descEn}</p>
                  <p className="text-xs text-slate-600 leading-snug">{stageData.descMn}</p>
                </div>

                {/* Chemical Reaction / Reagent Info */}
                {"reagentAndTestEn" in item && (
                  <div className="pt-2 text-xs text-slate-600">
                    <strong className="text-slate-800">Reagent & Method: </strong>
                    <span>{item.reagentAndTestEn}</span>
                  </div>
                )}

                {"ionicEquation" in item && item.ionicEquation && (
                  <div className="pt-2">
                    <span className="px-2.5 py-1 rounded bg-indigo-50 border border-indigo-200 text-indigo-950 font-mono text-xs font-bold inline-block">
                      {item.ionicEquation}
                    </span>
                  </div>
                )}
              </div>

              {/* Video Key Moments Timeline */}
              <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 space-y-1.5">
                <span className="text-[11px] font-bold text-teal-950 uppercase flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-teal-600" />
                  <span>Туршилтын онцлох мөчүүд (Key Moments):</span>
                </span>
                <div className="space-y-1">
                  {tutorial.keyObservationClips.map((clip, i) => (
                    <div key={i} className="text-xs flex items-center gap-2 text-slate-700">
                      <span className="px-1.5 py-0.5 rounded bg-teal-200/80 text-teal-900 font-mono font-bold text-[10px]">
                        {clip.time}
                      </span>
                      <span>{clip.descriptionMn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-slate-200 flex items-center gap-4">
            <button
              onClick={() => setActiveTab("simulation")}
              className={`pb-2 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === "simulation"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Туршилтын дүгнэлт (Summary)</span>
            </button>
            <button
              onClick={() => setActiveTab("steps")}
              className={`pb-2 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === "steps"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Аргачлал (Procedure Steps)</span>
            </button>
            <button
              onClick={() => setActiveTab("exam-tips")}
              className={`pb-2 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === "exam-tips"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Шалгалтын дүрэм (Paper 3 Mark Scheme)</span>
            </button>
          </div>

          {/* Tab 1: Summary */}
          {activeTab === "simulation" && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Туршилтын ерөнхий дүгнэлт (Summary in Mongolian):
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {tutorial.summaryMn}
              </p>
            </div>
          )}

          {/* Tab 2: Procedure Steps */}
          {activeTab === "steps" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  Lab Procedure (English)
                </h4>
                <ul className="space-y-1.5">
                  {tutorial.procedureStepsEn.map((step, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-100"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-teal-600" />
                  Туршилтын дараалал (Монгол)
                </h4>
                <ul className="space-y-1.5">
                  {tutorial.procedureStepsMn.map((step, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 leading-relaxed bg-teal-50/40 p-2 rounded-lg border border-teal-100"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Exam Tips */}
          {activeTab === "exam-tips" && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider">
                  Cambridge Examiner Warning & Mark Scheme Rules:
                </h4>
              </div>
              <p className="text-xs font-semibold text-amber-900 leading-relaxed">
                {tutorial.cambridgeExamTip}
              </p>
              <div className="p-3 bg-white/80 rounded-lg border border-amber-200 text-xs text-slate-700 leading-relaxed">
                <strong className="text-amber-900 block mb-0.5">Монгол тайлбар:</strong>
                {tutorial.cambridgeExamTipMn}
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Cambridge International AS & A Level Chemistry (9701) Practical Reference
          </span>

          <div className="flex items-center gap-2 ml-auto">
            <a
              href={tutorial.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube дээр нээх</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors"
            >
              Хаах (Close)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
