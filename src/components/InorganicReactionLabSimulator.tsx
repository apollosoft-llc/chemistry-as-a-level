import React, { useState } from "react";
import {
  PERIOD_3_COMPOUNDS,
  Period3CompoundSpec,
} from "../data/periodicTrendsData";
import { useLanguage } from "../utils/languageContext";
import {
  FlaskConical,
  Flame,
  Droplets,
  RotateCcw,
  Sparkles,
  Info,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

type LabMode = "period3" | "group2" | "group17" | "transition";

export const InorganicReactionLabSimulator: React.FC = () => {
  const { language } = useLanguage();
  const [activeLab, setActiveLab] = useState<LabMode>("period3");

  // --- LAB 1: PERIOD 3 STATE ---
  const [selectedP3Formula, setSelectedP3Formula] = useState<string>("Na₂O");
  const [p3Action, setP3Action] = useState<"dry" | "water" | "acid" | "alkali">("dry");

  const activeP3 = PERIOD_3_COMPOUNDS.find((c) => c.formula === selectedP3Formula) || PERIOD_3_COMPOUNDS[0];

  // Helper for UI color based on pH
  const getPHColor = (ph: number) => {
    if (ph <= 2) return { bg: "bg-rose-500", text: "text-rose-500", hex: "#f43f5e", label: "Strongly Acidic (Хүчтэй хүчиллэг)" };
    if (ph <= 4) return { bg: "bg-orange-500", text: "text-orange-500", hex: "#f97316", label: "Moderately Acidic (Дунд хүчиллэг)" };
    if (ph <= 6.5) return { bg: "bg-amber-400", text: "text-amber-500", hex: "#fbbf24", label: "Weakly Acidic (Сул хүчиллэг)" };
    if (ph <= 7.5) return { bg: "bg-emerald-500", text: "text-emerald-500", hex: "#10b981", label: "Neutral pH 7 (Саармаг)" };
    if (ph <= 11) return { bg: "bg-sky-500", text: "text-sky-500", hex: "#0ea5e9", label: "Weakly Basic (Сул шүлтлэг)" };
    return { bg: "bg-indigo-600", text: "text-indigo-600", hex: "#4f46e5", label: "Strongly Basic pH 14 (Хүчтэй шүлтлэг)" };
  };

  // --- LAB 2: GROUP 2 STATE ---
  const [selectedG2Compound, setSelectedG2Compound] = useState<"MgCO3" | "CaCO3" | "SrCO3" | "BaCO3" | "MgNO3" | "CaNO3" | "BaNO3">("MgCO3");
  const [heatTemp, setHeatTemp] = useState<number>(25);

  const G2_DECOMP_DATA: Record<
    string,
    { name: string; nameMn: string; decompTemp: number; type: "carbonate" | "nitrate"; eq: string; gas: string; observations: string; observationsMn: string }
  > = {
    MgCO3: {
      name: "Magnesium carbonate",
      nameMn: "Магнийн карбонат",
      decompTemp: 540,
      type: "carbonate",
      eq: "MgCO₃(s) → MgO(s) + CO₂(g)",
      gas: "CO₂ (colourless)",
      observations: "Decomposes easily at 540 °C. Colorless CO₂ gas fills syringe, turns limewater cloudy.",
      observationsMn: "540 °C-д хялбар задарч CO₂ хий ялгаруулна. Шохойн усыг булингартуулна.",
    },
    CaCO3: {
      name: "Calcium carbonate",
      nameMn: "Кальцийн карбонат",
      decompTemp: 900,
      type: "carbonate",
      eq: "CaCO₃(s) → CaO(s) + CO₂(g)",
      gas: "CO₂ (colourless)",
      observations: "Requires strong red heat (900 °C) to decompose. CaO solid glows white.",
      observationsMn: "Улайстал халаах шаардлагатай (900 °C). Цагаан CaO үлдэж CO₂ ялгарна.",
    },
    SrCO3: {
      name: "Strontium carbonate",
      nameMn: "Стронцийн карбонат",
      decompTemp: 1280,
      type: "carbonate",
      eq: "SrCO₃(s) → SrO(s) + CO₂(g)",
      gas: "CO₂ (colourless)",
      observations: "Requires intense Bunsen heat (1280 °C) due to lower polarising power of larger Sr²⁺.",
      observationsMn: "Ион том тул туйлшруулах чадвар буурч задрахад 1280 °C маш өндөр халуун хэрэгтэй.",
    },
    BaCO3: {
      name: "Barium carbonate",
      nameMn: "Барийн карбонат",
      decompTemp: 1360,
      type: "carbonate",
      eq: "BaCO₃(s) → BaO(s) + CO₂(g)",
      gas: "CO₂ (colourless)",
      observations: "Thermally very stable! Requires extreme heating (1360 °C). Ba²⁺ cation has very low charge density.",
      observationsMn: "Маш тогтвортой! 1360 °C-д задарна. Ba²⁺ ионы цэнэгийн нягт маш бага.",
    },
    MgNO3: {
      name: "Magnesium nitrate",
      nameMn: "Магнийн нитрат",
      decompTemp: 330,
      type: "nitrate",
      eq: "2Mg(NO₃)₂(s) → 2MgO(s) + 4NO₂(g) + O₂(g)",
      gas: "Toxic brown NO₂ + O₂",
      observations: "Decomposes readily giving pungent dense brown fumes of NO₂ gas and relights glowing splint (O₂).",
      observationsMn: "330 °C-д амархан задарч хүрэн өнгийн хорт NO₂ хий ба хүчилтөрөгч O₂ ялгаруулна.",
    },
    CaNO3: {
      name: "Calcium nitrate",
      nameMn: "Кальцийн нитрат",
      decompTemp: 500,
      type: "nitrate",
      eq: "2Ca(NO₃)₂(s) → 2CaO(s) + 4NO₂(g) + O₂(g)",
      gas: "Brown NO₂ + O₂",
      observations: "Decomposes at 500 °C releasing brown fumes of NO₂ and O₂ gas.",
      observationsMn: "500 °C-д задарч хүрэн NO₂ хий болон O₂ ялгаруулна.",
    },
    BaNO3: {
      name: "Barium nitrate",
      nameMn: "Барийн нитрат",
      decompTemp: 590,
      type: "nitrate",
      eq: "2Ba(NO₃)₂(s) → 2BaO(s) + 4NO₂(g) + O₂(g)",
      gas: "Brown NO₂ + O₂",
      observations: "Decomposes at highest temperature among Group 2 nitrates (590 °C).",
      observationsMn: "Бүлгийн нитратууд дундаас хамгийн өндөр температурт (590 °C) задарна.",
    },
  };

  const activeG2 = G2_DECOMP_DATA[selectedG2Compound];
  const isG2Decomposed = heatTemp >= activeG2.decompTemp;

  // --- LAB 3: GROUP 17 STATE ---
  const [selectedHalide, setSelectedHalide] = useState<"Cl" | "Br" | "I">("Cl");
  const [g17Step, setG17Step] = useState<"initial" | "agno3" | "diluteNH3" | "concNH3">("initial");

  // Halogen displacement state
  const [addedHalogen, setAddedHalogen] = useState<"Cl2" | "Br2" | "I2">("Cl2");
  const [halideSalt, setHalideSalt] = useState<"KCl" | "KBr" | "KI">("KBr");
  const [isShakenWithHexane, setIsShakenWithHexane] = useState(false);

  // Compute displacement result
  const getDisplacementResult = () => {
    // Cl2 oxidises Br- and I-
    // Br2 oxidises I- only
    // I2 cannot oxidise any
    let finalHalogen = addedHalogen;
    let reactionOccurred = false;

    if (addedHalogen === "Cl2") {
      if (halideSalt === "KBr") {
        finalHalogen = "Br2";
        reactionOccurred = true;
      } else if (halideSalt === "KI") {
        finalHalogen = "I2";
        reactionOccurred = true;
      }
    } else if (addedHalogen === "Br2") {
      if (halideSalt === "KI") {
        finalHalogen = "I2";
        reactionOccurred = true;
      }
    }

    // Colors in water vs hexane
    let waterColor = "text-slate-400";
    let waterBg = "bg-slate-100";
    let hexaneColor = "text-slate-400";
    let hexaneBg = "bg-slate-100";
    let hexaneLabel = "Colourless (Өнгөгүй)";

    if (finalHalogen === "Cl2") {
      waterColor = "text-emerald-600";
      waterBg = "bg-emerald-50/70";
      hexaneColor = "text-emerald-700";
      hexaneBg = "bg-emerald-100";
      hexaneLabel = "Pale green / Virtually colourless (Цайвар ногоондуу)";
    } else if (finalHalogen === "Br2") {
      waterColor = "text-amber-700";
      waterBg = "bg-amber-100";
      hexaneColor = "text-orange-600";
      hexaneBg = "bg-orange-400";
      hexaneLabel = "Vibrant Orange (Тод улбар шар)";
    } else if (finalHalogen === "I2") {
      waterColor = "text-amber-900";
      waterBg = "bg-amber-200";
      hexaneColor = "text-purple-700";
      hexaneBg = "bg-purple-600";
      hexaneLabel = "Intense Royal Violet / Purple (Гүн Нил Ягаан)";
    }

    return { reactionOccurred, finalHalogen, waterBg, hexaneBg, hexaneLabel };
  };

  // --- LAB 4: TRANSITION METALS STATE ---
  const [selectedTM, setSelectedTM] = useState<"Cu" | "Fe" | "Co">("Cu");
  const [tmReagent, setTmReagent] = useState<"water" | "dropNH3" | "excessNH3" | "concHCl">("water");

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-6">
      {/* Top Header with Lab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-2">
            <FlaskConical className="w-3.5 h-3.5 text-cyan-700" />
            <span>Cambridge 9701 Interactive Reaction Lab Simulator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {language === "mn" ? "Органик Бус Химийн Интерактив Симуляци" : "Interactive Inorganic Reaction Lab"}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {language === "mn"
              ? "3-р үеийн оксид/хлоридын урвал, 2-р бүлгийн задрал, 17-р бүлгийн галоген солилцоо, комплекс ионы шилжилтийг симуляциар турших."
              : "Simulate Period 3 oxide/chloride reactions, Group 2 thermal decomposition, halogen redox, and transition metal ligand exchange."}
          </p>
        </div>

        {/* Lab Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveLab("period3")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeLab === "period3"
                ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🧪 Period 3 pH & Fumes
          </button>
          <button
            onClick={() => setActiveLab("group2")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeLab === "group2"
                ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🔥 Group 2 Thermal Decomp
          </button>
          <button
            onClick={() => setActiveLab("group17")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeLab === "group17"
                ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🧬 Group 17 Halogen Redox
          </button>
          <button
            onClick={() => setActiveLab("transition")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeLab === "transition"
                ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🎨 Transition Ligand Exchange
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SIMULATION 1: PERIOD 3 OXIDES & CHLORIDES pH & FUMES SIMULATOR */}
      {/* ========================================================================= */}
      {activeLab === "period3" && (
        <div className="space-y-6">
          {/* Compound Selection Grid */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 block">
              {language === "mn" ? "1. Турших нэгдлээ сонгоно уу (3-р үеийн оксид ба хлоридууд):" : "1. Select Period 3 Compound to Test:"}
            </span>
            <div className="flex flex-wrap gap-2">
              {PERIOD_3_COMPOUNDS.map((comp) => (
                <button
                  key={comp.formula}
                  onClick={() => {
                    setSelectedP3Formula(comp.formula);
                    setP3Action("dry");
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                    selectedP3Formula === comp.formula
                      ? "bg-cyan-700 text-white border-cyan-800 shadow-2xs"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                  }`}
                >
                  <span>{comp.formula}</span>
                  <span className="text-[10px] ml-1 opacity-80 font-sans">({comp.type})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Beaker & Lab Bench */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Animated Beaker Stage */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 min-h-[320px] relative overflow-hidden select-none">
              {/* Steamy acidic fumes animation for PCl5, Al2Cl6, SiCl4 */}
              {p3Action === "water" && (activeP3.formula === "Al₂Cl₆" || activeP3.formula === "SiCl₄" || activeP3.formula === "PCl₅" || activeP3.formula === "SO₃") && (
                <div className="absolute top-4 inset-x-0 flex flex-col items-center pointer-events-none animate-pulse">
                  <span className="text-[11px] font-mono font-bold text-white/90 bg-rose-500/80 px-2 py-0.5 rounded-md mb-1 shadow-xs">
                    ⚠️ Dense Steamy White Fumes: HCl(g)
                  </span>
                  <div className="w-24 h-16 bg-gradient-to-t from-white/40 via-white/20 to-transparent blur-md rounded-full animate-bounce" />
                </div>
              )}

              {/* Glass Beaker SVG */}
              <div className="relative w-44 h-56 flex flex-col items-center justify-end">
                {/* Beaker Outline */}
                <div className="absolute inset-0 border-4 border-slate-400/40 rounded-b-3xl border-t-0 backdrop-blur-xs shadow-inner" />

                {/* Liquid Level */}
                <div
                  style={{
                    height: p3Action === "dry" ? "12%" : "68%",
                    backgroundColor:
                      p3Action === "dry"
                        ? "#94a3b8"
                        : getPHColor(activeP3.solutionPH).hex,
                  }}
                  className="w-full rounded-b-2xl transition-all duration-700 flex flex-col items-center justify-center relative overflow-hidden"
                >
                  {/* Surface shimmer */}
                  <div className="absolute top-0 inset-x-0 h-2 bg-white/30" />

                  {/* Precipitate at bottom if insoluble */}
                  {(activeP3.formula === "Al₂O₃" || activeP3.formula === "SiO₂" || (p3Action === "water" && activeP3.formula === "SiCl₄")) && (
                    <div className="absolute bottom-1 inset-x-3 h-3 bg-white/90 rounded-full shadow-md animate-pulse" />
                  )}

                  {/* pH Number Tag inside beaker */}
                  {p3Action !== "dry" && (
                    <span className="font-mono text-white text-lg font-black drop-shadow-md z-10">
                      pH {activeP3.solutionPH}
                    </span>
                  )}
                </div>

                {/* Beaker Graduations */}
                <div className="absolute right-2 top-8 text-[9px] font-mono text-slate-500 space-y-3 pointer-events-none">
                  <div>- 250ml</div>
                  <div>- 200ml</div>
                  <div>- 150ml</div>
                  <div>- 100ml</div>
                </div>
              </div>

              {/* Bottom Beaker Status */}
              <div className="mt-4 text-center z-10">
                <span className="text-xs font-mono font-bold text-slate-300">
                  {p3Action === "dry"
                    ? `Dry Compound: ${activeP3.formula} (${activeP3.nameEn})`
                    : `In Water + Universal Indicator: pH ${activeP3.solutionPH}`}
                </span>
              </div>
            </div>

            {/* Right: Actions & Cambridge Data */}
            <div className="lg:col-span-7 space-y-4">
              {/* Action Buttons */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2.5">
                <span className="text-xs font-bold text-slate-700 block">
                  {language === "mn" ? "2. Лабораторийн үйлдэл хийх:" : "2. Perform Lab Action:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setP3Action("water")}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-all shadow-2xs"
                  >
                    <Droplets className="w-3.5 h-3.5" />
                    <span>{language === "mn" ? "💧 Усанд уусгах (Add to Water)" : "💧 Dissolve in Water"}</span>
                  </button>

                  <button
                    onClick={() => setP3Action("dry")}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 text-xs font-semibold transition-all border border-slate-200"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{language === "mn" ? "Цэвэрлэх (Reset)" : "Reset"}</span>
                  </button>
                </div>
              </div>

              {/* Reaction Details & Observation Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-slate-900 font-mono">{activeP3.formula}</span>
                    <span className="text-xs text-slate-500 font-medium">({activeP3.nameEn})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200">
                      {activeP3.bonding}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold text-white ${
                        getPHColor(activeP3.solutionPH).bg
                      }`}
                    >
                      {activeP3.nature} (pH {activeP3.solutionPH})
                    </span>
                  </div>
                </div>

                {/* Equation Box */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {language === "mn" ? "Устай явагдах урвалын тэгшитгэл:" : "Reaction with Water Equation:"}
                  </span>
                  <div className="font-mono text-cyan-800 font-bold text-xs sm:text-sm">
                    {activeP3.reactionWithWaterEquation}
                  </div>
                </div>

                {/* Observations */}
                <div className="text-xs space-y-1">
                  <span className="font-bold text-slate-700 block">
                    {language === "mn" ? "Ажиглагдах үзэгдэл (Cambridge Observations):" : "Cambridge Key Observations:"}
                  </span>
                  <p className="text-slate-600 leading-relaxed bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                    {language === "mn" ? activeP3.observationsMn : activeP3.observationsEn}
                  </p>
                </div>

                {/* Extra Acid/Alkali behavior */}
                {activeP3.extraReactionWithAcidAlkali && (
                  <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800">Acid-Base Reactions: </span>
                    <span className="font-mono text-cyan-800">{activeP3.extraReactionWithAcidAlkali}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SIMULATION 2: GROUP 2 THERMAL DECOMPOSITION & GAS SYRINGE */}
      {/* ========================================================================= */}
      {activeLab === "group2" && (
        <div className="space-y-6">
          {/* Compound Selection */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 block">
              {language === "mn" ? "1. 2-р бүлгийн карбонат эсвэл нитрат сонгоно уу:" : "1. Select Group 2 Carbonate or Nitrate:"}
            </span>
            <div className="flex flex-wrap gap-2">
              {(["MgCO3", "CaCO3", "SrCO3", "BaCO3", "MgNO3", "CaNO3", "BaNO3"] as const).map((key) => {
                const item = G2_DECOMP_DATA[key];
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedG2Compound(key);
                      setHeatTemp(25);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                      selectedG2Compound === key
                        ? "bg-amber-600 text-white border-amber-700 shadow-2xs"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    <span>{key}</span>
                    <span className="text-[10px] ml-1 opacity-80 font-sans">({item.decompTemp} °C)</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Test Tube + Bunsen Burner + Gas Syringe Simulation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Heating Apparatus Stage */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 min-h-[320px] relative select-none">
              {/* Temperature Badge */}
              <div className="absolute top-4 left-4 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 z-10 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Temp: {heatTemp} °C</span>
                <span className="text-slate-400">/ Need: {activeG2.decompTemp} °C</span>
              </div>

              {/* Animated Gas Syringe SVG */}
              <div className="relative w-full max-w-[340px] h-48 flex items-center justify-between">
                {/* Boiling Tube */}
                <div className="relative w-16 h-36 border-4 border-slate-400/50 rounded-b-2xl border-t-0 flex flex-col justify-end items-center p-2 backdrop-blur-xs">
                  {/* Solid compound at bottom */}
                  <div
                    style={{
                      backgroundColor: isG2Decomposed ? "#fef08a" : "#f1f5f9",
                    }}
                    className="w-full h-8 rounded-b-xl shadow-md transition-colors"
                  />

                  {/* Glowing decomposition effect */}
                  {isG2Decomposed && (
                    <div className="absolute inset-0 bg-amber-500/10 rounded-b-xl animate-pulse" />
                  )}
                </div>

                {/* Delivery Tube */}
                <div className="w-20 h-1 bg-slate-400 relative">
                  {/* Bubbles or gas moving */}
                  {isG2Decomposed && (
                    <div className="absolute inset-0 bg-amber-300 animate-ping opacity-75" />
                  )}
                </div>

                {/* Gas Syringe Barrel */}
                <div className="w-36 h-12 border-2 border-slate-500 rounded-md relative flex items-center bg-slate-900/60 overflow-hidden">
                  {/* Syringe Gas Fill Color */}
                  <div
                    style={{
                      width: isG2Decomposed ? "85%" : "0%",
                      backgroundColor: activeG2.type === "nitrate" ? "#b45309" : "#38bdf8",
                    }}
                    className="h-full transition-all duration-1000 opacity-60"
                  />

                  {/* Plunger */}
                  <div
                    style={{
                      transform: isG2Decomposed ? "translateX(75px)" : "translateX(0px)",
                    }}
                    className="w-3 h-full bg-slate-300 border border-slate-400 transition-transform duration-1000 shadow-md"
                  />

                  {/* Gas Label inside Syringe */}
                  {isG2Decomposed && (
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-white drop-shadow-md">
                      {activeG2.gas}
                    </span>
                  )}
                </div>
              </div>

              {/* Bunsen Flame under test tube */}
              <div className="mt-1 flex flex-col items-center">
                <div
                  style={{
                    height: heatTemp > 100 ? "32px" : "12px",
                    width: heatTemp > 100 ? "20px" : "8px",
                    backgroundColor: heatTemp > 500 ? "#38bdf8" : "#fbbf24",
                  }}
                  className="rounded-full blur-xs transition-all duration-300 animate-pulse shadow-[0_0_15px_#38bdf8]"
                />
                <div className="w-10 h-3 bg-slate-700 rounded-t-md" />
              </div>

              {/* Decomposed Status Banner */}
              <div className="mt-3 text-center">
                {isG2Decomposed ? (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Decomposed! Gas Syringe filled with {activeG2.gas}</span>
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-400">
                    Heating compound... Needs {activeG2.decompTemp} °C to decompose.
                  </span>
                )}
              </div>
            </div>

            {/* Right: Heat Controls & Theory */}
            <div className="lg:col-span-6 space-y-4 text-xs">
              {/* Heat Slider */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-amber-600" />
                    <span>Bunsen Burner Heat Control:</span>
                  </span>
                  <span className="font-mono text-cyan-800 font-bold text-sm">{heatTemp} °C</span>
                </div>

                <input
                  type="range"
                  min={25}
                  max={1500}
                  step={10}
                  value={heatTemp}
                  onChange={(e) => setHeatTemp(Number(e.target.value))}
                  className="w-full accent-amber-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setHeatTemp(25)}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-[11px]"
                  >
                    Room Temp (25 °C)
                  </button>
                  <button
                    onClick={() => setHeatTemp(activeG2.decompTemp + 50)}
                    className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-[11px] shadow-2xs"
                  >
                    Ignite to {activeG2.decompTemp} °C 🔥
                  </button>
                </div>
              </div>

              {/* Decomposition Reaction Data */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2.5 shadow-2xs">
                <div className="font-bold text-sm text-slate-900">
                  {activeG2.name} ({activeG2.nameMn})
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-cyan-800 text-xs font-bold">
                  {activeG2.eq}
                </div>

                <p className="text-slate-600 leading-relaxed text-[11px]">
                  {language === "mn" ? activeG2.observationsMn : activeG2.observations}
                </p>

                {/* Cambridge Examiner Polarising Power Theory */}
                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 space-y-1 text-[11px] text-amber-950">
                  <span className="font-bold flex items-center gap-1 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Cambridge Polarising Power Rule (Яагаад доошлох тусам тогтвортой байдаг вэ?):</span>
                  </span>
                  <p>
                    Бүлгийн дагуу доошлоход катионы радиус томорч (Mg²⁺ &lt; Ca²⁺ &lt; Sr²⁺ &lt; Ba²⁺), цэнэгийн нягт буурдаг. Иймээс CO₃²⁻ эсвэл NO₃⁻ анионы электрон үүлийг туйлшруулах чадвар нь суларч, C-O / N-O холбоо тасрахад илүү их дулаан шаардагддаг.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SIMULATION 3: GROUP 17 HALOGEN DISPLACEMENT & HALIDE ION TESTS */}
      {/* ========================================================================= */}
      {activeLab === "group17" && (
        <div className="space-y-6">
          {/* Sub-Tabs: Halogen Displacement vs AgNO3 Halide Test */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Box A: Halogen Displacement in 2-Phase Hexane System */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-700" />
                  <span>A. Halogen Displacement + Hexane Layer</span>
                </h3>
                <span className="text-[11px] font-mono text-cyan-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Oxidising Power: Cl₂ &gt; Br₂ &gt; I₂
                </span>
              </div>

              {/* Reagent Controls */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Halogen Added (X₂):</label>
                  <select
                    value={addedHalogen}
                    onChange={(e) => {
                      setAddedHalogen(e.target.value as any);
                      setIsShakenWithHexane(false);
                    }}
                    className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-800"
                  >
                    <option value="Cl2">Chlorine water (Cl₂)</option>
                    <option value="Br2">Bromine water (Br₂)</option>
                    <option value="I2">Iodine solution (I₂)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Aqueous Halide Salt:</label>
                  <select
                    value={halideSalt}
                    onChange={(e) => {
                      setHalideSalt(e.target.value as any);
                      setIsShakenWithHexane(false);
                    }}
                    className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-800"
                  >
                    <option value="KCl">Potassium chloride (KCl)</option>
                    <option value="KBr">Potassium bromide (KBr)</option>
                    <option value="KI">Potassium iodide (KI)</option>
                  </select>
                </div>
              </div>

              {/* Test Tube Visualization with 2 Layers */}
              {(() => {
                const disp = getDisplacementResult();
                return (
                  <div className="p-4 bg-slate-950 rounded-xl flex items-center justify-around border border-slate-800">
                    {/* Test Tube */}
                    <div className="w-16 h-36 border-4 border-slate-400/50 rounded-b-2xl border-t-0 flex flex-col justify-end overflow-hidden relative shadow-inner">
                      {/* Top Hexane Layer */}
                      <div
                        className={`w-full h-1/2 transition-colors duration-500 flex items-center justify-center ${
                          isShakenWithHexane ? disp.hexaneBg : "bg-white/40"
                        }`}
                      >
                        <span className="text-[8px] font-mono text-slate-900 font-bold bg-white/70 px-1 rounded">
                          {isShakenWithHexane ? "Hexane layer" : "Organic"}
                        </span>
                      </div>

                      {/* Bottom Aqueous Layer */}
                      <div className={`w-full h-1/2 transition-colors duration-500 flex items-center justify-center ${disp.waterBg}`}>
                        <span className="text-[8px] font-mono text-slate-900 font-bold bg-white/70 px-1 rounded">
                          Aqueous
                        </span>
                      </div>
                    </div>

                    {/* Result Callout */}
                    <div className="text-xs space-y-2 text-white">
                      <div>
                        <span className="text-slate-400 text-[10px] block">Reaction Status:</span>
                        <span className="font-bold text-cyan-300">
                          {disp.reactionOccurred
                            ? `Displacement! ${addedHalogen} displaced halide to form ${disp.finalHalogen}.`
                            : `No reaction (${addedHalogen} cannot oxidise ${halideSalt}).`}
                        </span>
                      </div>

                      <button
                        onClick={() => setIsShakenWithHexane(true)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-xs"
                      >
                        Shake with Hexane 🧪
                      </button>

                      {isShakenWithHexane && (
                        <div className="text-[11px] font-mono text-amber-300 bg-slate-900/90 p-2 rounded border border-slate-700">
                          Top Layer: {disp.hexaneLabel}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Box B: Silver Nitrate AgNO3 + NH3 Halide Test */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>B. Silver Nitrate (AgNO₃) & NH₃ Test</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Precipitate & Solubility
                </span>
              </div>

              {/* Halide Ion Selection */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Halide Ion:</span>
                {(["Cl", "Br", "I"] as const).map((h) => (
                  <button
                    key={h}
                    onClick={() => {
                      setSelectedHalide(h);
                      setG17Step("initial");
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border transition-all ${
                      selectedHalide === h
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    {h}⁻ ion
                  </button>
                ))}
              </div>

              {/* Step Sequence Buttons */}
              <div className="flex flex-wrap gap-1.5 text-xs">
                <button
                  onClick={() => setG17Step("agno3")}
                  className={`px-3 py-1.5 rounded-lg font-bold border transition-all ${
                    g17Step === "agno3" ? "bg-cyan-700 text-white border-cyan-800" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  1. Add AgNO₃(aq)
                </button>
                <button
                  onClick={() => setG17Step("diluteNH3")}
                  className={`px-3 py-1.5 rounded-lg font-bold border transition-all ${
                    g17Step === "diluteNH3" ? "bg-cyan-700 text-white border-cyan-800" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  2. Add Dilute NH₃(aq)
                </button>
                <button
                  onClick={() => setG17Step("concNH3")}
                  className={`px-3 py-1.5 rounded-lg font-bold border transition-all ${
                    g17Step === "concNH3" ? "bg-cyan-700 text-white border-cyan-800" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  3. Add Conc NH₃(aq)
                </button>
              </div>

              {/* Test Tube Result Display */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                {g17Step === "initial" && (
                  <p className="text-slate-500">
                    Aqueous solution of <span className="font-bold">{selectedHalide}⁻</span> ready for testing. Click "1. Add AgNO₃(aq)".
                  </p>
                )}

                {g17Step === "agno3" && (
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 block">
                      Observation with acidified AgNO₃:
                    </span>
                    {selectedHalide === "Cl" && (
                      <p className="text-emerald-700 font-bold">
                        White precipitate of AgCl(s) forms instantly: Ag⁺(aq) + Cl⁻(aq) → AgCl(s).
                      </p>
                    )}
                    {selectedHalide === "Br" && (
                      <p className="text-amber-700 font-bold">
                        Cream precipitate of AgBr(s) forms: Ag⁺(aq) + Br⁻(aq) → AgBr(s).
                      </p>
                    )}
                    {selectedHalide === "I" && (
                      <p className="text-yellow-700 font-bold">
                        Yellow precipitate of AgI(s) forms: Ag⁺(aq) + I⁻(aq) → AgI(s).
                      </p>
                    )}
                  </div>
                )}

                {g17Step === "diluteNH3" && (
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 block">Observation with Dilute NH₃:</span>
                    {selectedHalide === "Cl" && (
                      <p className="text-emerald-700 font-bold">
                        ✅ SOLUBLE! The white AgCl ppt dissolves to give a colourless solution: AgCl(s) + 2NH₃(aq) → [Ag(NH₃)₂]⁺(aq) + Cl⁻(aq).
                      </p>
                    )}
                    {selectedHalide === "Br" && (
                      <p className="text-rose-700 font-bold">
                        ❌ INSOLUBLE in dilute NH₃! The cream AgBr precipitate remains intact.
                      </p>
                    )}
                    {selectedHalide === "I" && (
                      <p className="text-rose-700 font-bold">
                        ❌ INSOLUBLE in dilute NH₃! The yellow AgI precipitate remains intact.
                      </p>
                    )}
                  </div>
                )}

                {g17Step === "concNH3" && (
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 block">Observation with Concentrated NH₃:</span>
                    {selectedHalide === "Cl" && (
                      <p className="text-emerald-700 font-bold">
                        ✅ Fully soluble (dissolved already in dilute).
                      </p>
                    )}
                    {selectedHalide === "Br" && (
                      <p className="text-emerald-700 font-bold">
                        ✅ SOLUBLE in conc NH₃! The cream AgBr dissolves to give a colourless solution: AgBr(s) + 2NH₃(aq) → [Ag(NH₃)₂]⁺(aq) + Br⁻(aq).
                      </p>
                    )}
                    {selectedHalide === "I" && (
                      <p className="text-rose-700 font-bold">
                        ❌ COMPLETELY INSOLUBLE even in concentrated NH₃! Yellow AgI remains at the bottom.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SIMULATION 4: TRANSITION METAL LIGAND EXCHANGE (TOPIC 24) */}
      {/* ========================================================================= */}
      {activeLab === "transition" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Stage: Beaker Color Transition */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 min-h-[300px] select-none">
              {/* Complex Color Fluid */}
              {(() => {
                let colorHex = "#38bdf8";
                let complexName = "[Cu(H₂O)₆]²⁺";
                let geometry = "Octahedral (90°)";

                if (selectedTM === "Cu") {
                  if (tmReagent === "water") {
                    colorHex = "#38bdf8";
                    complexName = "[Cu(H₂O)₆]²⁺ (Pale blue solution)";
                    geometry = "Octahedral (90°)";
                  } else if (tmReagent === "dropNH3") {
                    colorHex = "#0284c7";
                    complexName = "Cu(OH)₂(s) (Pale blue precipitate)";
                    geometry = "Neutral precipitate";
                  } else if (tmReagent === "excessNH3") {
                    colorHex = "#1e3a8a";
                    complexName = "[Cu(NH₃)₄(H₂O)₂]²⁺ (Deep royal blue)";
                    geometry = "Distorted Octahedral";
                  } else if (tmReagent === "concHCl") {
                    colorHex = "#ca8a04";
                    complexName = "[CuCl₄]²⁻ (Yellow-green solution)";
                    geometry = "Tetrahedral (109.5°)";
                  }
                }

                return (
                  <div className="flex flex-col items-center space-y-4">
                    <div
                      style={{ backgroundColor: colorHex }}
                      className="w-28 h-36 rounded-2xl shadow-lg border-2 border-white/20 transition-colors duration-700 flex flex-col items-center justify-center p-3 text-center"
                    >
                      <span className="text-white text-xs font-black font-mono drop-shadow-md">
                        {complexName}
                      </span>
                    </div>

                    <div className="text-center font-mono text-xs text-slate-300">
                      Geometry: <span className="text-cyan-400 font-bold">{geometry}</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Right: Ligand Addition Controls */}
            <div className="lg:col-span-7 space-y-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block">1. Select Aqueous Transition Ion:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedTM("Cu");
                      setTmReagent("water");
                    }}
                    className={`px-3 py-1.5 rounded-xl font-bold border transition-all ${
                      selectedTM === "Cu" ? "bg-cyan-700 text-white border-cyan-800" : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    Copper [Cu²⁺]
                  </button>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
                <span className="font-bold text-slate-800 block">2. Add Ligand Reagent:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTmReagent("water")}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      tmReagent === "water" ? "bg-cyan-50 border-cyan-400 font-bold" : "hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span className="block text-cyan-900">Initial: + Water</span>
                    <span className="text-[11px] text-slate-500 font-mono">[Cu(H₂O)₆]²⁺ pale blue</span>
                  </button>

                  <button
                    onClick={() => setTmReagent("dropNH3")}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      tmReagent === "dropNH3" ? "bg-cyan-50 border-cyan-400 font-bold" : "hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span className="block text-cyan-900">+ Dropwise NH₃(aq)</span>
                    <span className="text-[11px] text-slate-500 font-mono">Cu(OH)₂(s) pale blue ppt</span>
                  </button>

                  <button
                    onClick={() => setTmReagent("excessNH3")}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      tmReagent === "excessNH3" ? "bg-cyan-50 border-cyan-400 font-bold" : "hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span className="block text-indigo-900">+ Excess NH₃(aq)</span>
                    <span className="text-[11px] text-indigo-600 font-mono">[Cu(NH₃)₄(H₂O)₂]²⁺ deep royal blue</span>
                  </button>

                  <button
                    onClick={() => setTmReagent("concHCl")}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      tmReagent === "concHCl" ? "bg-cyan-50 border-cyan-400 font-bold" : "hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span className="block text-amber-900">+ Conc HCl(aq)</span>
                    <span className="text-[11px] text-amber-600 font-mono">[CuCl₄]²⁻ yellow-green (tetrahedral)</span>
                  </button>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">Cambridge Marking Points:</span>
                  • Cl⁻ ligand is much larger than H₂O / NH₃, so only 4 chloride ligands can fit around the central Cu²⁺ ion, changing coordination number from 6 to 4 and shape from octahedral to tetrahedral.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
