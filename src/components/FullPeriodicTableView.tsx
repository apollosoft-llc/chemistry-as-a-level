import React, { useState, useMemo } from "react";
import { ALL_118_ELEMENTS } from "../data/all118Elements";
import { ElementData, ElementCategory } from "../types";
import { BohrAtomSimulator } from "./BohrAtomSimulator";
import {
  Search,
  Sliders,
  Flame,
  X,
  Sparkles,
  Trophy,
  RotateCcw,
  CheckCircle2,
  Atom,
  Info,
  Maximize2,
  TrendingUp,
  BarChart2,
} from "lucide-react";

export type HeatmapProperty =
  | "none"
  | "atomicRadius"
  | "firstIonisationEnergy"
  | "electronegativity"
  | "meltingPointC"
  | "atomicMass";

const HEATMAP_SPECS: Record<
  HeatmapProperty,
  { label: string; labelMn: string; unit: string; min: number; max: number; note: string; noteMn: string }
> = {
  none: { label: "Categories", labelMn: "Үндсэн Ангилал", unit: "", min: 0, max: 0, note: "", noteMn: "" },
  atomicRadius: {
    label: "Atomic Radius",
    labelMn: "Атомын Радиус",
    unit: "nm",
    min: 0.03,
    max: 0.27,
    note: "Decreases across period (higher Z_eff pulls electrons closer); Increases down group (extra shells).",
    noteMn: "Үеийн дагуу буурдаг (Z_eff өсдөг); Бүлгийн дагуу өсдөг (электрон бүрхүүл нэмэгддэг).",
  },
  firstIonisationEnergy: {
    label: "1st Ionisation Energy",
    labelMn: "1-р Иончлолын Энерги",
    unit: "kJ/mol",
    min: 380,
    max: 2372,
    note: "Increases across period (greater Z_eff); Decreases down group (greater shielding & radius).",
    noteMn: "Үеийн дагуу өсдөг (Z_eff өсдөг); Бүлгийн дагуу буурдаг (радиус томорч халхавч нэмэгддэг).",
  },
  electronegativity: {
    label: "Electronegativity",
    labelMn: "Цахилгаан Сөрөг Чанар",
    unit: "Pauling",
    min: 0.7,
    max: 4.0,
    note: "Increases towards Fluorine (top right); Decreases towards Francium (bottom left).",
    noteMn: "Баруун дээд булангийн Фтор (4.0) руу өсч, зүүн доод булангийн Франци (0.7) руу буурдаг.",
  },
  meltingPointC: {
    label: "Melting Point",
    labelMn: "Хайлах Температур",
    unit: "°C",
    min: -272,
    max: 3550,
    note: "Peaks at Group 14 macromolecular networks (C, Si) and transition metals (W).",
    noteMn: "Аварга ковалент бүтэцтэй C, Si болон шилжилтийн металлууд (W) дээр оргилдоо хүрдэг.",
  },
  atomicMass: {
    label: "Atomic Mass (Ar)",
    labelMn: "Атом Масс",
    unit: "",
    min: 1.008,
    max: 294,
    note: "Increases smoothly with atomic number Z across the periodic table.",
    noteMn: "Үелэх системийн дагуу атомын дугаар Z-тэй хамт жигд өсдөг.",
  },
};

const getHeatmapColor = (val: number | undefined, prop: HeatmapProperty): string => {
  if (val === undefined || isNaN(val)) return "#475569";
  const spec = HEATMAP_SPECS[prop];
  const t = Math.max(0, Math.min(1, (val - spec.min) / (spec.max - spec.min || 1)));
  const hue = (1 - t) * 230; // 230 (cool blue) down to 0 (hot red)
  return `hsl(${hue}, 85%, 42%)`;
};

// Category display configurations for light theme
const CATEGORY_CONFIG: Record<
  ElementCategory,
  { label: string; bgClass: string; borderClass: string; textClass: string; colorHex: string }
> = {
  alkali: {
    label: "Alkali",
    bgClass: "bg-[#d84315] hover:bg-[#bf360c]",
    borderClass: "border-[#bf360c]",
    textClass: "text-white",
    colorHex: "#e04818",
  },
  "alkaline-earth": {
    label: "Alkaline Earth",
    bgClass: "bg-[#e65100] hover:bg-[#ef6c00]",
    borderClass: "border-[#ef6c00]",
    textClass: "text-white",
    colorHex: "#ea580c",
  },
  transition: {
    label: "Transition",
    bgClass: "bg-[#f57f17] hover:bg-[#f9a825]",
    borderClass: "border-[#f9a825]",
    textClass: "text-white",
    colorHex: "#d97706",
  },
  "post-transition": {
    label: "Post Transition",
    bgClass: "bg-[#9e9d24] hover:bg-[#afb42b]",
    borderClass: "border-[#afb42b]",
    textClass: "text-white",
    colorHex: "#65a30d",
  },
  metalloid: {
    label: "Metalloid",
    bgClass: "bg-[#558b2f] hover:bg-[#689f38]",
    borderClass: "border-[#689f38]",
    textClass: "text-white",
    colorHex: "#16a34a",
  },
  nonmetal: {
    label: "Nonmetal",
    bgClass: "bg-[#2e7d32] hover:bg-[#388e3c]",
    borderClass: "border-[#388e3c]",
    textClass: "text-white",
    colorHex: "#059669",
  },
  halogen: {
    label: "Halogen",
    bgClass: "bg-[#0277bd] hover:bg-[#0288d1]",
    borderClass: "border-[#0288d1]",
    textClass: "text-white",
    colorHex: "#0284c7",
  },
  "noble-gas": {
    label: "Noble Gas",
    bgClass: "bg-[#283593] hover:bg-[#303f9f]",
    borderClass: "border-[#303f9f]",
    textClass: "text-white",
    colorHex: "#4f46e5",
  },
  lanthanide: {
    label: "Lanthanide",
    bgClass: "bg-[#6a1b9a] hover:bg-[#7b1fa2]",
    borderClass: "border-[#7b1fa2]",
    textClass: "text-white",
    colorHex: "#9333ea",
  },
  actinide: {
    label: "Actinide",
    bgClass: "bg-[#880e4f] hover:bg-[#ad1457]",
    borderClass: "border-[#ad1457]",
    textClass: "text-white",
    colorHex: "#db2777",
  },
  unknown: {
    label: "Unknown",
    bgClass: "bg-[#37474f] hover:bg-[#455a64]",
    borderClass: "border-[#455a64]",
    textClass: "text-white",
    colorHex: "#64748b",
  },
};

const ALL_CATEGORIES = Object.keys(CATEGORY_CONFIG) as ElementCategory[];

// Discovery Quest Challenges for Cambridge 9701
interface Quest {
  id: number;
  prompt: string;
  targetSymbol: string;
  hint: string;
  cambridgeReason: string;
}

const QUESTS: Quest[] = [
  {
    id: 1,
    prompt: "Hunt the Group 2 metal that gives a Brick-Red flame in flame tests!",
    targetSymbol: "Ca",
    hint: "Period 4, Group 2 alkaline earth metal.",
    cambridgeReason: "Calcium (Ca) gives characteristic brick-red flame test colour.",
  },
  {
    id: 2,
    prompt: "Hunt the halogen that is a Reddish-Brown liquid at standard room temperature!",
    targetSymbol: "Br",
    hint: "Period 4, Group 17 halogen.",
    cambridgeReason: "Bromine (Br₂) is the only liquid non-metal at standard conditions.",
  },
  {
    id: 3,
    prompt: "Hunt the Period 3 element whose oxide is Amphoteric (reacts with both acids and bases)!",
    targetSymbol: "Al",
    hint: "Period 3, Group 13 post-transition metal.",
    cambridgeReason: "Al₂O₃ reacts with HCl to form AlCl₃ and with hot NaOH to form [Al(OH)₄]⁻.",
  },
  {
    id: 4,
    prompt: "Hunt the transition metal used as catalyst in the Haber Process for making ammonia!",
    targetSymbol: "Fe",
    hint: "Period 4, Group 8, atomic number 26.",
    cambridgeReason: "Finely divided iron (Fe) acts as a heterogeneous catalyst in N₂ + 3H₂ ⇌ 2NH₃.",
  },
  {
    id: 5,
    prompt: "Hunt the transition element with anomalous half-filled [Ar] 3d⁵ 4s¹ electron configuration!",
    targetSymbol: "Cr",
    hint: "Period 4, Group 6, atomic number 24.",
    cambridgeReason: "Chromium has special 3d⁵ 4s¹ configuration due to half-filled subshell stability.",
  },
  {
    id: 6,
    prompt: "Hunt the alkali metal whose sulphate is highly soluble, but burns with a Lilac flame!",
    targetSymbol: "K",
    hint: "Period 4, Group 1 alkali metal.",
    cambridgeReason: "Potassium burns with a distinct lilac flame.",
  },
  {
    id: 7,
    prompt: "Hunt the noble gas with the highest first ionisation energy in the periodic table!",
    targetSymbol: "He",
    hint: "Period 1, Group 18, atomic number 2.",
    cambridgeReason: "Helium has 1s² electrons close to nucleus with no inner electron shielding (2372 kJ/mol).",
  },
  {
    id: 8,
    prompt: "Hunt the Group 2 element whose sulfate (BaSO₄) is completely insoluble in water!",
    targetSymbol: "Ba",
    hint: "Period 6, Group 2, burns with apple-green flame.",
    cambridgeReason: "Ba²⁺ ions precipitate with SO₄²⁻ to form dense white BaSO₄(s).",
  },
];

interface FullPeriodicTableViewProps {
  onSelectElement?: (element: ElementData) => void;
}

export const FullPeriodicTableView: React.FC<FullPeriodicTableViewProps> = ({ onSelectElement }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [temperatureC, setTemperatureC] = useState<number>(25); // Room temp 25 °C
  const [activeCategories, setActiveCategories] = useState<Record<ElementCategory, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    ALL_CATEGORIES.forEach((cat) => {
      initial[cat] = true;
    });
    return initial as Record<ElementCategory, boolean>;
  });

  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [heatmapProperty, setHeatmapProperty] = useState<HeatmapProperty>("none");

  // Discovery Quest Mode
  const [isQuestActive, setIsQuestActive] = useState(false);
  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const [questScore, setQuestScore] = useState(0);
  const [questFeedback, setQuestFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const activeQuest = QUESTS[currentQuestIndex];

  const handleSelectAllCategories = (select: boolean) => {
    const updated: Record<string, boolean> = {};
    ALL_CATEGORIES.forEach((cat) => {
      updated[cat] = select;
    });
    setActiveCategories(updated as Record<ElementCategory, boolean>);
  };

  const toggleCategory = (cat: ElementCategory) => {
    setActiveCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  // Helper to determine state of matter at current temperature
  const getElementStateAtTemp = (
    el: ElementData,
    tempC: number
  ): { state: "solid" | "liquid" | "gas" | "unknown"; colorClass: string; dotColor: string } => {
    if (el.meltingPointC === undefined && el.meltingPointK === undefined) {
      return { state: "unknown", colorClass: "text-slate-400", dotColor: "bg-slate-400" };
    }

    const mpC = el.meltingPointC ?? (el.meltingPointK ? el.meltingPointK - 273.15 : 0);
    const bpC = el.boilingPointC ?? (el.boilingPointK ? el.boilingPointK - 273.15 : undefined);

    if (tempC < mpC) {
      return { state: "solid", colorClass: "text-sky-300", dotColor: "bg-sky-400" };
    }
    if (bpC !== undefined && tempC >= bpC) {
      return { state: "gas", colorClass: "text-rose-300", dotColor: "bg-rose-400" };
    }
    return { state: "liquid", colorClass: "text-teal-300", dotColor: "bg-teal-400" };
  };

  // Map of elements by grid position
  const elementsMap = useMemo(() => {
    const map = new Map<string, ElementData>();
    ALL_118_ELEMENTS.forEach((el) => {
      map.set(el.symbol, el);
      map.set(String(el.number), el);
    });
    return map;
  }, []);

  // Filter checker
  const isElementVisible = (el: ElementData) => {
    const category = el.category || "unknown";
    if (!activeCategories[category]) return false;

    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase().trim();
    const matchesSymbol = el.symbol.toLowerCase().includes(q);
    const matchesNameEn = el.nameEn.toLowerCase().includes(q);
    const matchesNameMn = el.nameMn?.toLowerCase().includes(q);
    const matchesNumber = String(el.number) === q;
    const matchesCategory = category.toLowerCase().includes(q);

    return matchesSymbol || matchesNameEn || matchesNameMn || matchesNumber || matchesCategory;
  };

  const handleElementClick = (el: ElementData) => {
    if (isQuestActive) {
      if (el.symbol === activeQuest.targetSymbol) {
        setQuestScore((prev) => prev + 1);
        setQuestFeedback({
          message: `Correct! ${el.nameEn} (${el.symbol}) — ${activeQuest.cambridgeReason}`,
          isCorrect: true,
        });
        setTimeout(() => {
          if (currentQuestIndex < QUESTS.length - 1) {
            setCurrentQuestIndex((prev) => prev + 1);
            setQuestFeedback(null);
          } else {
            setQuestFeedback({
              message: `🎉 Quest Complete! You mastered all ${QUESTS.length} Cambridge element challenges!`,
              isCorrect: true,
            });
          }
        }, 1800);
      } else {
        setQuestFeedback({
          message: `Incorrect: You clicked ${el.nameEn} (${el.symbol}). Hint: ${activeQuest.hint}`,
          isCorrect: false,
        });
      }
    }

    setSelectedElement(el);
    if (onSelectElement) {
      onSelectElement(el);
    }
  };

  // 18 columns x 7 periods layout definition
  // Main table coordinates: row 1 to 7, col 1 to 18
  const renderElementCell = (atomicNumber: number) => {
    const el = ALL_118_ELEMENTS.find((e) => e.number === atomicNumber);
    if (!el) return null;

    const visible = isElementVisible(el);
    const isSelected = selectedElement?.number === el.number;
    const isHeatmapActive = heatmapProperty !== "none";
    const category = el.category || "unknown";
    const catStyle = CATEGORY_CONFIG[category] || CATEGORY_CONFIG.unknown;
    const stateInfo = getElementStateAtTemp(el, temperatureC);

    let cellBg = visible ? catStyle.colorHex : "#f1f5f9";
    let bottomValueStr = typeof el.atomicMass === "number"
      ? el.atomicMass.toFixed(el.atomicMass % 1 === 0 ? 0 : el.atomicMass < 10 ? 3 : 2)
      : el.atomicMass;

    if (isHeatmapActive && visible) {
      const rawVal = (el as any)[heatmapProperty];
      cellBg = getHeatmapColor(rawVal, heatmapProperty);
      if (rawVal !== undefined && !isNaN(rawVal)) {
        if (heatmapProperty === "atomicRadius") {
          bottomValueStr = `${rawVal} nm`;
        } else if (heatmapProperty === "firstIonisationEnergy") {
          bottomValueStr = `${rawVal}`;
        } else if (heatmapProperty === "electronegativity") {
          bottomValueStr = `${rawVal}`;
        } else if (heatmapProperty === "meltingPointC") {
          bottomValueStr = `${rawVal}°C`;
        } else if (heatmapProperty === "atomicMass") {
          bottomValueStr = `${Number(rawVal).toFixed(1)}`;
        }
      } else {
        bottomValueStr = "—";
      }
    }

    return (
      <button
        key={el.number}
        onClick={() => handleElementClick(el)}
        style={{
          backgroundColor: cellBg,
          borderColor: isSelected ? "#0284c7" : visible ? "rgba(255,255,255,0.2)" : "#e2e8f0",
        }}
        className={`relative flex flex-col justify-between p-1 sm:p-1.5 rounded-lg border transition-all text-left duration-150 group select-none shadow-2xs ${
          visible
            ? "opacity-100 hover:scale-[1.07] hover:z-20 hover:shadow-md"
            : "opacity-35 grayscale cursor-not-allowed"
        } ${isSelected ? "ring-2 ring-cyan-500 ring-offset-2 ring-offset-white z-10 scale-[1.05]" : ""}`}
      >
        {/* Top: Atomic Number & State Indicator */}
        <div className="flex items-center justify-between w-full leading-none">
          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-white/95">
            {el.number}
          </span>
          <span
            className={`w-1.5 h-1.5 rounded-full ${stateInfo.dotColor} ring-1 ring-black/20 shrink-0`}
            title={`Phase at ${temperatureC} °C: ${stateInfo.state.toUpperCase()}`}
          />
        </div>

        {/* Center: Symbol */}
        <div className="my-0.5 text-center">
          <span className="text-xs sm:text-base md:text-lg font-black tracking-tight text-white block leading-none drop-shadow-xs">
            {el.symbol}
          </span>
          <span className="text-[8px] sm:text-[9px] text-white/95 truncate block leading-tight font-medium max-w-full">
            {el.nameEn}
          </span>
        </div>

        {/* Bottom: Atomic Weight or Heatmap Value */}
        <div className="text-[8px] sm:text-[9px] font-mono text-white/90 text-center truncate leading-none font-bold">
          {bottomValueStr}
        </div>
      </button>
    );
  };

  return (
    <div className="bg-white text-slate-900 rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-2xs space-y-6">
      {/* Top Banner: Discovery Quest Mode */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsQuestActive(!isQuestActive);
              setQuestFeedback(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              isQuestActive
                ? "bg-amber-500 text-slate-950 shadow-md animate-pulse"
                : "bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{isQuestActive ? "Quest Active" : "Start Discovery Quest"}</span>
          </button>
          <span className="text-xs text-slate-500 hidden sm:inline">
            {isQuestActive
              ? "Find and click the requested element on the board!"
              : "Start Discovery Quest and hunt the requested element on the board."}
          </span>
        </div>

        {isQuestActive && (
          <div className="flex items-center gap-3 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs">
            <div className="flex items-center gap-1.5 text-amber-800 font-bold">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>Score: {questScore} / {QUESTS.length}</span>
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">Quest {currentQuestIndex + 1} of {QUESTS.length}</span>
            <button
              onClick={() => {
                setCurrentQuestIndex(0);
                setQuestScore(0);
                setQuestFeedback(null);
              }}
              className="text-slate-400 hover:text-slate-700 ml-1"
              title="Restart Quests"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Quest Banner Prompt if Active */}
      {isQuestActive && (
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50/50 p-4 rounded-2xl border border-amber-200 text-amber-950">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-amber-950">Target Mission #{currentQuestIndex + 1}:</h4>
              <p className="text-sm font-semibold text-amber-900">{activeQuest.prompt}</p>
              {questFeedback && (
                <div
                  className={`mt-2 text-xs font-bold p-2.5 rounded-xl flex items-center gap-2 ${
                    questFeedback.isCorrect
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                      : "bg-rose-50 text-rose-800 border border-rose-300"
                  }`}
                >
                  <Info className="w-4 h-4 shrink-0" />
                  <span>{questFeedback.message}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Top 3 Control Sections (Search, Temperature Slider, Category Filters) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. Search Box */}
        <div className="bg-slate-50/90 rounded-2xl border border-slate-200 p-4 flex flex-col justify-between">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">Search</label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Name, symbol, or number..."
                className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            Try searching <span className="text-cyan-700 font-semibold">"Na"</span>, <span className="text-cyan-700 font-semibold">"Iron"</span>, <span className="text-cyan-700 font-semibold">"26"</span>, or <span className="text-cyan-700 font-semibold">"Halogen"</span>.
          </p>
        </div>

        {/* 2. Temperature Slider & Phase States */}
        <div className="bg-slate-50/90 rounded-2xl border border-slate-200 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-cyan-600" />
              Temperature: <span className="text-cyan-700 font-mono font-black">{temperatureC} °C</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              ({(temperatureC + 273.15).toFixed(0)} K)
            </span>
          </div>

          {/* Slider */}
          <input
            type="range"
            min={-273}
            max={6000}
            step={1}
            value={temperatureC}
            onChange={(e) => setTemperatureC(Number(e.target.value))}
            className="w-full accent-cyan-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
          />

          {/* Slider Min/Max marks */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>-273 °C (0 K)</span>
            <button
              onClick={() => setTemperatureC(25)}
              className="px-2 py-0.5 rounded-md bg-white hover:bg-slate-100 text-cyan-800 text-[10px] font-bold border border-slate-200 shadow-2xs"
              title="Reset to room temperature (25 °C)"
            >
              25 °C (RT)
            </button>
            <span>6 000 °C</span>
          </div>

          {/* State of Matter Legend */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block ring-1 ring-black/10" />
              <span>Solid</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block ring-1 ring-black/10" />
              <span>Liquid</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block ring-1 ring-black/10" />
              <span>Gas</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block ring-1 ring-black/10" />
              <span>Unknown</span>
            </div>
          </div>
        </div>

        {/* 3. Category Filters */}
        <div className="bg-slate-50/90 rounded-2xl border border-slate-200 p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700">Category Filters</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleSelectAllCategories(true)}
                className="px-2 py-0.5 rounded text-[10px] font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs"
              >
                All
              </button>
              <button
                onClick={() => handleSelectAllCategories(false)}
                className="px-2 py-0.5 rounded text-[10px] font-bold bg-white hover:bg-slate-100 text-slate-500 border border-slate-200 shadow-2xs"
              >
                None
              </button>
            </div>
          </div>

          {/* Category Checkboxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1.5 text-[11px]">
            {ALL_CATEGORIES.map((cat) => {
              const config = CATEGORY_CONFIG[cat];
              const isChecked = activeCategories[cat];
              return (
                <label
                  key={cat}
                  className="flex items-center gap-1.5 cursor-pointer select-none group"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCategory(cat)}
                    className="rounded text-cyan-600 focus:ring-0 focus:ring-offset-0 bg-white border-slate-300 cursor-pointer w-3.5 h-3.5"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-xs shrink-0 ring-1 ring-black/10"
                    style={{ backgroundColor: config.colorHex }}
                  />
                  <span
                    className={`truncate transition-colors text-[11px] ${
                      isChecked ? "text-slate-800 font-medium" : "text-slate-400 line-through"
                    }`}
                  >
                    {config.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Heatmap Property Visualizer Overlay Bar */}
      <div className="bg-slate-50/90 rounded-2xl border border-slate-200 p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-700" />
            <span className="text-xs font-bold text-slate-800">
              Interactive Heatmap Visualizer (Үелэх Системийн Хөтөлбөрийн Градиент):
            </span>
          </div>

          {heatmapProperty !== "none" && (
            <div className="flex items-center gap-3 text-xs">
              <span className="font-mono text-slate-500 font-bold text-[11px]">
                Min: {HEATMAP_SPECS[heatmapProperty].min} {HEATMAP_SPECS[heatmapProperty].unit}
              </span>
              {/* Gradient preview bar */}
              <div className="w-28 sm:w-36 h-3 rounded-full bg-gradient-to-r from-[hsl(230,85%,42%)] via-[hsl(115,85%,42%)] to-[hsl(0,85%,42%)] shadow-inner" />
              <span className="font-mono text-slate-500 font-bold text-[11px]">
                Max: {HEATMAP_SPECS[heatmapProperty].max} {HEATMAP_SPECS[heatmapProperty].unit}
              </span>
            </div>
          )}
        </div>

        {/* Heatmap Mode Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {(["none", "atomicRadius", "firstIonisationEnergy", "electronegativity", "meltingPointC", "atomicMass"] as const).map((prop) => {
            const spec = HEATMAP_SPECS[prop];
            const isSelected = heatmapProperty === prop;
            return (
              <button
                key={prop}
                onClick={() => setHeatmapProperty(prop)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? "bg-cyan-700 text-white border-cyan-800 shadow-2xs"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {spec.labelMn} ({spec.label})
              </button>
            );
          })}
        </div>

        {/* Cambridge Trend Direction Explanation */}
        {heatmapProperty !== "none" && (
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
            <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-cyan-900 block mb-0.5">
                Cambridge 9701 Trend Direction:
              </span>
              <span>{HEATMAP_SPECS[heatmapProperty].noteMn}</span>
              <span className="text-slate-500 block text-[11px] mt-0.5">{HEATMAP_SPECS[heatmapProperty].note}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Periodic Table 18-Column Grid */}
      <div className="overflow-x-auto pb-4 pt-2">
        <div className="min-w-[980px] space-y-2">
          {/* Period 1 */}
          <div className="grid grid-cols-18 gap-1.5">
            <div className="col-span-1">{renderElementCell(1)}</div>
            <div className="col-span-16" />
            <div className="col-span-1">{renderElementCell(2)}</div>
          </div>

          {/* Period 2 */}
          <div className="grid grid-cols-18 gap-1.5">
            <div className="col-span-1">{renderElementCell(3)}</div>
            <div className="col-span-1">{renderElementCell(4)}</div>
            <div className="col-span-10" />
            <div className="col-span-1">{renderElementCell(5)}</div>
            <div className="col-span-1">{renderElementCell(6)}</div>
            <div className="col-span-1">{renderElementCell(7)}</div>
            <div className="col-span-1">{renderElementCell(8)}</div>
            <div className="col-span-1">{renderElementCell(9)}</div>
            <div className="col-span-1">{renderElementCell(10)}</div>
          </div>

          {/* Period 3 */}
          <div className="grid grid-cols-18 gap-1.5">
            <div className="col-span-1">{renderElementCell(11)}</div>
            <div className="col-span-1">{renderElementCell(12)}</div>
            <div className="col-span-10" />
            <div className="col-span-1">{renderElementCell(13)}</div>
            <div className="col-span-1">{renderElementCell(14)}</div>
            <div className="col-span-1">{renderElementCell(15)}</div>
            <div className="col-span-1">{renderElementCell(16)}</div>
            <div className="col-span-1">{renderElementCell(17)}</div>
            <div className="col-span-1">{renderElementCell(18)}</div>
          </div>

          {/* Period 4 */}
          <div className="grid grid-cols-18 gap-1.5">
            {[19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].map((num) => (
              <div key={num} className="col-span-1">
                {renderElementCell(num)}
              </div>
            ))}
          </div>

          {/* Period 5 */}
          <div className="grid grid-cols-18 gap-1.5">
            {[37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54].map((num) => (
              <div key={num} className="col-span-1">
                {renderElementCell(num)}
              </div>
            ))}
          </div>

          {/* Period 6 (Cs, Ba, La 57, Hf 72 - Rn 86) */}
          <div className="grid grid-cols-18 gap-1.5">
            <div className="col-span-1">{renderElementCell(55)}</div>
            <div className="col-span-1">{renderElementCell(56)}</div>
            <div className="col-span-1">{renderElementCell(57)}</div>
            {[72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86].map((num) => (
              <div key={num} className="col-span-1">
                {renderElementCell(num)}
              </div>
            ))}
          </div>

          {/* Period 7 (Fr, Ra, Ac 89, Rf 104 - Og 118) */}
          <div className="grid grid-cols-18 gap-1.5">
            <div className="col-span-1">{renderElementCell(87)}</div>
            <div className="col-span-1">{renderElementCell(88)}</div>
            <div className="col-span-1">{renderElementCell(89)}</div>
            {[104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118].map((num) => (
              <div key={num} className="col-span-1">
                {renderElementCell(num)}
              </div>
            ))}
          </div>

          {/* Spacer between main grid and f-block */}
          <div className="h-4" />

          {/* Lanthanides Row (58 Ce to 71 Lu) */}
          <div className="grid grid-cols-18 gap-1.5 items-center">
            <div className="col-span-3 text-right pr-3">
              <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                Lanthanides
              </span>
            </div>
            {[58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71].map((num) => (
              <div key={num} className="col-span-1">
                {renderElementCell(num)}
              </div>
            ))}
            <div className="col-span-1" />
          </div>

          {/* Actinides Row (90 Th to 103 Lr) */}
          <div className="grid grid-cols-18 gap-1.5 items-center">
            <div className="col-span-3 text-right pr-3">
              <span className="text-[11px] font-bold text-pink-700 uppercase tracking-wider">
                Actinides
              </span>
            </div>
            {[90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103].map((num) => (
              <div key={num} className="col-span-1">
                {renderElementCell(num)}
              </div>
            ))}
            <div className="col-span-1" />
          </div>
        </div>
      </div>

      {/* Selected Element Deep Modal / Inspector Panel */}
      {selectedElement && (
        <div className="bg-slate-50/90 rounded-3xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white shadow-md ring-2 ring-white shrink-0"
                style={{
                  backgroundColor:
                    CATEGORY_CONFIG[selectedElement.category || "unknown"]?.colorHex || "#0284c7",
                }}
              >
                <span className="text-[10px] font-mono leading-none opacity-90">{selectedElement.number}</span>
                <span className="text-2xl font-black leading-tight drop-shadow-xs">{selectedElement.symbol}</span>
                <span className="text-[9px] font-mono leading-none opacity-90">{selectedElement.atomicMass}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-black text-slate-900">
                    {selectedElement.nameEn}
                  </h3>
                  <span className="text-sm font-semibold text-slate-500">
                    ({selectedElement.nameMn})
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-wider"
                    style={{
                      backgroundColor:
                        CATEGORY_CONFIG[selectedElement.category || "unknown"]?.colorHex || "#0284c7",
                    }}
                  >
                    {CATEGORY_CONFIG[selectedElement.category || "unknown"]?.label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Period {selectedElement.period} • Group {selectedElement.group} • {selectedElement.block}-block
                  {selectedElement.commonIon && ` • Common ion: ${selectedElement.commonIon}`}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedElement(null)}
              className="self-end sm:self-center p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 border border-slate-200 transition-colors shadow-2xs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-slate-500 text-[11px] block font-medium">Electronic Configuration</span>
              <span className="font-mono text-cyan-800 font-bold text-xs sm:text-sm">
                {selectedElement.electronConfig}
              </span>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-slate-500 text-[11px] block font-medium">1st Ionisation Energy</span>
              <span className="font-mono text-amber-800 font-bold text-xs sm:text-sm">
                {selectedElement.firstIonisationEnergy ? `${selectedElement.firstIonisationEnergy} kJ/mol` : "—"}
              </span>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-slate-500 text-[11px] block font-medium">Electronegativity (Pauling)</span>
              <span className="font-mono text-emerald-800 font-bold text-xs sm:text-sm">
                {selectedElement.electronegativity ?? "—"}
              </span>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-slate-500 text-[11px] block font-medium">Phase @ {temperatureC} °C</span>
              <span className="font-mono text-slate-900 font-bold text-xs sm:text-sm flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${getElementStateAtTemp(selectedElement, temperatureC).dotColor} ring-1 ring-black/10`} />
                {getElementStateAtTemp(selectedElement, temperatureC).state.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Melting & Boiling Points & Flame Test */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-slate-500 text-[11px] block font-medium">Melting Point</span>
              <span className="font-mono text-slate-800 font-semibold">
                {selectedElement.meltingPointC !== undefined ? `${selectedElement.meltingPointC} °C (${selectedElement.meltingPointK} K)` : "—"}
              </span>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-slate-500 text-[11px] block font-medium">Boiling Point</span>
              <span className="font-mono text-slate-800 font-semibold">
                {selectedElement.boilingPointC !== undefined ? `${selectedElement.boilingPointC} °C (${selectedElement.boilingPointK} K)` : "—"}
              </span>
            </div>
            {selectedElement.flameColor ? (
              <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 flex items-center gap-2.5 text-amber-900 shadow-2xs">
                <Flame className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-800 block">Flame Test Colour</span>
                  <span className="font-bold text-xs">{selectedElement.flameColor}</span>
                </div>
              </div>
            ) : (
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-slate-500 text-[11px] block font-medium">Atomic Radius</span>
                <span className="font-mono text-slate-800 font-semibold">
                  {selectedElement.atomicRadius ? `${selectedElement.atomicRadius} nm` : "—"}
                </span>
          {/* Interactive Bohr Orbital & Z_eff Simulator */}
          <BohrAtomSimulator element={selectedElement} />

          {/* Cambridge 9701 Exam Highlights */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 text-xs shadow-2xs">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">
              Cambridge 9701 Syllabus & Exam Highlights:
            </span>
            <p className="text-slate-700 leading-relaxed font-sans font-normal">
              {selectedElement.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
