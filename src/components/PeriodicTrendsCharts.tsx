import React, { useState } from "react";
import {
  PERIOD_3_TRENDS,
  GROUP_2_TRENDS,
  GROUP_17_TRENDS,
  ELEMENTS_1_TO_36_IE,
  TrendDataPoint,
} from "../data/periodicTrendsData";
import { useLanguage } from "../utils/languageContext";
import {
  TrendingUp,
  Info,
  Layers,
  Sparkles,
  BarChart3,
  Flame,
  Zap,
  ArrowRight,
} from "lucide-react";

type ChartCategory = "period3" | "group2" | "group17" | "all36";

export const PeriodicTrendsCharts: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ChartCategory>("period3");
  const [activeMetric, setActiveMetric] = useState<string>("firstIE");
  const [hoveredPoint, setHoveredPoint] = useState<TrendDataPoint | null>(null);

  // Available metrics per category
  const METRIC_CONFIGS: Record<
    ChartCategory,
    { id: string; labelEn: string; labelMn: string; unit: string; color: string }[]
  > = {
    period3: [
      { id: "firstIE", labelEn: "1st Ionisation Energy", labelMn: "1-р Иончлолын Энерги", unit: "kJ/mol", color: "#0284c7" },
      { id: "atomicRadius", labelEn: "Atomic & Ionic Radius", labelMn: "Атом & Ионы Радиус", unit: "nm", color: "#16a34a" },
      { id: "meltingPointC", labelEn: "Melting Point", labelMn: "Хайлах Цэг", unit: "°C", color: "#ea580c" },
      { id: "conductivity", labelEn: "Electrical Conductivity", labelMn: "Цахилгаан Дамжуулалт", unit: "rel.", color: "#8b5cf6" },
    ],
    group2: [
      { id: "firstIE", labelEn: "1st Ionisation Energy", labelMn: "1-р Иончлолын Энерги", unit: "kJ/mol", color: "#0284c7" },
      { id: "atomicRadius", labelEn: "Atomic Radius", labelMn: "Атомын Радиус", unit: "nm", color: "#16a34a" },
      { id: "decompositionTempC", labelEn: "Carbonate Decomposition Temp", labelMn: "Карбонатын Задралын Т.", unit: "°C", color: "#dc2626" },
      { id: "meltingPointC", labelEn: "Melting Point", labelMn: "Хайлах Температур", unit: "°C", color: "#ea580c" },
    ],
    group17: [
      { id: "boilingPointC", labelEn: "Boiling Point", labelMn: "Буцлах Цэг", unit: "°C", color: "#0284c7" },
      { id: "electronegativity", labelEn: "Electronegativity", labelMn: "Цахилгаан Сөрөг Чанар", unit: "Pauling", color: "#16a34a" },
      { id: "bondEnthalpy", labelEn: "X-X Bond Enthalpy", labelMn: "X-X Холбооны Энтальпи", unit: "kJ/mol", color: "#ea580c" },
      { id: "atomicRadius", labelEn: "Atomic Radius", labelMn: "Атомын Радиус", unit: "nm", color: "#8b5cf6" },
    ],
    all36: [
      { id: "firstIE", labelEn: "1st Ionisation Energy (H to Kr)", labelMn: "1-р Иончлолын Энерги (H-аас Kr)", unit: "kJ/mol", color: "#0284c7" },
    ],
  };

  const currentMetrics = METRIC_CONFIGS[activeCategory];
  // Ensure selected metric is valid for current category
  const activeMetricObj = currentMetrics.find((m) => m.id === activeMetric) || currentMetrics[0];

  // Current dataset
  const getDataset = (): TrendDataPoint[] => {
    switch (activeCategory) {
      case "period3":
        return PERIOD_3_TRENDS;
      case "group2":
        return GROUP_2_TRENDS;
      case "group17":
        return GROUP_17_TRENDS;
      case "all36":
        return ELEMENTS_1_TO_36_IE.map((e) => ({
          symbol: e.symbol,
          nameEn: e.symbol,
          nameMn: e.symbol,
          atomicNumber: e.z,
          firstIE: e.ie,
          period: e.period,
          group: e.group,
        }));
    }
  };

  const dataset = getDataset();

  // Calculate SVG scales
  const svgWidth = 720;
  const svgHeight = 280;
  const paddingX = 60;
  const paddingY = 40;

  const rawValues = dataset.map((d) => {
    const val = (d as any)[activeMetricObj.id];
    return typeof val === "number" ? val : 0;
  });

  const minVal = Math.min(0, ...rawValues);
  const maxVal = Math.max(...rawValues, 10);
  const range = maxVal - minVal || 1;

  const getX = (index: number) => {
    if (dataset.length === 1) return svgWidth / 2;
    return paddingX + (index / (dataset.length - 1)) * (svgWidth - paddingX * 2);
  };

  const getY = (val: number) => {
    return svgHeight - paddingY - ((val - minVal) / range) * (svgHeight - paddingY * 2);
  };

  // Build SVG polyline points
  const pointsString = dataset
    .map((d, idx) => {
      const val = (d as any)[activeMetricObj.id] ?? 0;
      return `${getX(idx)},${getY(val)}`;
    })
    .join(" ");

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-700" />
            <span>Cambridge 9701 Periodicity Trend Graphs</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {language === "mn" ? "Үе & Бүлгийн Зүй Тогтлын Интерактив График" : "Interactive Periodic & Group Trends"}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {language === "mn"
              ? "Хөтөлбөрийн дагуу 3-р үе, 2-р бүлэг, 17-р бүлгийн зүй тогтол болон 1-36 дахь элементүүдийн иончлолын энергийн муруйг шинжлэх."
              : "Analyze Period 3, Group 2, Group 17, and first 36 elements trends with Cambridge examiner explanations."}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
          {[
            { id: "period3", label: "🌟 Period 3 (Na-Ar)" },
            { id: "group2", label: "🛡️ Group 2 (Be-Ba)" },
            { id: "group17", label: "🧪 Group 17 (F-I)" },
            { id: "all36", label: "📈 1-36 Elements (H-Kr)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id as ChartCategory);
                const newMetrics = METRIC_CONFIGS[tab.id as ChartCategory];
                setActiveMetric(newMetrics[0].id);
                setHoveredPoint(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === tab.id
                  ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Selector Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
          <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
          {language === "mn" ? "Үзүүлэлт сонгох:" : "Select Property:"}
        </span>
        {currentMetrics.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setActiveMetric(m.id);
              setHoveredPoint(null);
            }}
            style={{
              borderColor: activeMetric === m.id ? m.color : undefined,
              backgroundColor: activeMetric === m.id ? `${m.color}15` : undefined,
              color: activeMetric === m.id ? m.color : undefined,
            }}
            className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all ${
              activeMetric === m.id
                ? "font-black shadow-2xs"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"
            }`}
          >
            {language === "mn" ? m.labelMn : m.labelEn}
          </button>
        ))}
      </div>

      {/* Interactive SVG Chart Container */}
      <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 text-white relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="font-mono font-bold text-slate-300">
            {language === "mn" ? activeMetricObj.labelMn : activeMetricObj.labelEn} ({activeMetricObj.unit})
          </span>
          <span className="text-[11px] text-slate-500">
            {language === "mn" ? "Цэг дээр хулгана аваачиж дэлгэрэнгүйг харна уу" : "Hover points for Cambridge notes"}
          </span>
        </div>

        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full min-w-[620px] h-auto">
            {/* Grid Horizontal Lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
              const y = paddingY + pct * (svgHeight - paddingY * 2);
              const gridVal = maxVal - pct * range;
              return (
                <g key={idx}>
                  <line
                    x1={paddingX}
                    y1={y}
                    x2={svgWidth - paddingX}
                    y2={y}
                    stroke="rgba(255,255,255,0.08)"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={paddingX - 10}
                    y={y + 4}
                    textAnchor="end"
                    className="fill-slate-500 text-[10px] font-mono"
                  >
                    {gridVal >= 100 ? gridVal.toFixed(0) : gridVal.toFixed(2)}
                  </text>
                </g>
              );
            })}

            {/* Zero Base Line if minVal < 0 */}
            {minVal < 0 && (
              <line
                x1={paddingX}
                y1={getY(0)}
                x2={svgWidth - paddingX}
                y2={getY(0)}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
              />
            )}

            {/* Connecting Polyline Curve */}
            <polyline
              fill="none"
              stroke={activeMetricObj.color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              points={pointsString}
            />

            {/* Data Points */}
            {dataset.map((d, idx) => {
              const val = (d as any)[activeMetricObj.id] ?? 0;
              const cx = getX(idx);
              const cy = getY(val);
              const isHovered = hoveredPoint?.symbol === d.symbol;

              // Check for Cambridge key anomaly points (e.g. Al and S in Period 3 firstIE)
              const isAnomaly =
                activeCategory === "period3" &&
                activeMetric === "firstIE" &&
                (d.symbol === "Al" || d.symbol === "S");

              return (
                <g
                  key={d.symbol}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(d)}
                  onClick={() => setHoveredPoint(d)}
                >
                  {/* Subtle vertical indicator bar */}
                  <line
                    x1={cx}
                    y1={paddingY}
                    x2={cx}
                    y2={svgHeight - paddingY}
                    stroke={isHovered ? "rgba(255,255,255,0.25)" : "transparent"}
                    strokeDasharray="2 2"
                  />

                  {/* Pulsing ring for Cambridge anomalies */}
                  {isAnomaly && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r="12"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                      className="animate-ping opacity-60"
                    />
                  )}

                  {/* Outer ring */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isHovered ? 7 : isAnomaly ? 6 : 4.5}
                    fill={isAnomaly ? "#f59e0b" : activeMetricObj.color}
                    stroke="#020617"
                    strokeWidth="2"
                    className="transition-all duration-150"
                  />

                  {/* X-axis Symbol label */}
                  <text
                    x={cx}
                    y={svgHeight - paddingY + 18}
                    textAnchor="middle"
                    className={`text-[11px] font-mono font-bold select-none ${
                      isHovered
                        ? "fill-white"
                        : isAnomaly
                        ? "fill-amber-400"
                        : "fill-slate-400"
                    }`}
                  >
                    {d.symbol}
                  </text>

                  {/* Value tag above point */}
                  {(isHovered || isAnomaly || dataset.length <= 10) && (
                    <text
                      x={cx}
                      y={cy - 10}
                      textAnchor="middle"
                      className="fill-slate-200 text-[10px] font-mono font-bold select-none"
                    >
                      {val >= 100 ? val.toFixed(0) : val.toFixed(val % 1 === 0 ? 0 : 2)}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Focused Point Cambridge Inspector Card */}
      {hoveredPoint ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 animate-in fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-700 text-white flex items-center justify-center text-lg font-black shadow-xs">
                {hoveredPoint.symbol}
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  {hoveredPoint.nameEn} ({hoveredPoint.nameMn}) — Z = {hoveredPoint.atomicNumber}
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  {activeMetricObj.labelEn}:{" "}
                  <span className="font-bold text-cyan-800">
                    {(hoveredPoint as any)[activeMetricObj.id]} {activeMetricObj.unit}
                  </span>
                  {hoveredPoint.ionicCharge && ` • Common ion: ${hoveredPoint.ionicCharge} (Radius: ${hoveredPoint.ionicRadius} nm)`}
                </p>
              </div>
            </div>

            <button
              onClick={() => setHoveredPoint(null)}
              className="text-xs text-slate-400 hover:text-slate-600 self-end sm:self-center"
            >
              {language === "mn" ? "Хаах" : "Clear"}
            </button>
          </div>

          {/* Cambridge Notes */}
          {(hoveredPoint.noteEn || hoveredPoint.noteMn) && (
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
              <span className="font-bold text-slate-700 flex items-center gap-1.5 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {language === "mn" ? "Кембриджийн шалгалтын шалтгаан & Тайлбар:" : "Cambridge Examiner Trend Explanation:"}
              </span>
              <p className="text-slate-700 leading-relaxed">
                {language === "mn" ? hoveredPoint.noteMn : hoveredPoint.noteEn}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-slate-50/70 border border-slate-200 rounded-2xl text-xs text-slate-600 flex items-start gap-3">
          <Info className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-800 block">
              {language === "mn" ? "Шалгалтын гол зүй тогтлууд (Cambridge Guidelines):" : "Key Cambridge Examiner Trend Pitfalls:"}
            </span>
            {activeCategory === "period3" && (
              <p>
                • <b>Aluminium dip (3p¹):</b> 3p subshell is higher energy than 3s, and shielded by 3s² electrons, lower IE than Mg.
                <br />
                • <b>Sulfur dip (3p⁴):</b> Pair of electrons in same 3p orbital experiences mutual spin-pair repulsion, lower IE than P.
                <br />
                • <b>Silicon peak (m.p.):</b> Giant macromolecular covalent structure (like diamond); Na-Al are metallic; P₄, S₈, Cl₂, Ar are simple molecular.
              </p>
            )}
            {activeCategory === "group2" && (
              <p>
                • <b>Carbonate thermal stability INCREASES down group:</b> Cation radius increases → lower charge density → less polarising effect on CO₃²⁻ anion.
                <br />
                • <b>Hydroxide solubility INCREASES down group:</b> Mg(OH)₂ (sparingly) → Ba(OH)₂ (highly soluble).
                <br />
                • <b>Sulfate solubility DECREASES down group:</b> MgSO₄ (soluble) → BaSO₄ (insoluble white ppt).
              </p>
            )}
            {activeCategory === "group17" && (
              <p>
                • <b>Boiling point INCREASES down group:</b> F₂ (gas) → Cl₂ (gas) → Br₂ (liquid) → I₂ (solid). More electrons → stronger London dispersion forces.
                <br />
                • <b>F-F bond anomaly:</b> Weak F-F bond (158 kJ/mol vs Cl-Cl 242 kJ/mol) caused by electron pair repulsion in extremely compact F atom.
              </p>
            )}
            {activeCategory === "all36" && (
              <p>
                • Noble gases (He, Ne, Ar, Kr) form sharp peaks due to stable full octets and highest Z_eff in their periods.
                <br />
                • Alkali metals (Li, Na, K) form deep troughs as a new outer shell begins with extra shielding.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
