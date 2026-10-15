import React, { useState } from "react";
import {
  PERIOD_3_COMPOUNDS,
  GROUP_2_TRENDS,
  GROUP_17_TRENDS,
  TRANSITION_METALS_3D,
} from "../data/periodicTrendsData";
import { useLanguage } from "../utils/languageContext";
import {
  Table,
  Search,
  Filter,
  Flame,
  CheckCircle2,
  Sparkles,
  Info,
} from "lucide-react";

type TableTab = "period3" | "group2" | "group17" | "transition";

export const PeriodicMasterTables: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TableTab>("period3");
  const [searchQuery, setSearchQuery] = useState("");
  const [compoundFilter, setCompoundFilter] = useState<"ALL" | "Oxide" | "Chloride">("ALL");

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-2">
            <Table className="w-3.5 h-3.5 text-cyan-700" />
            <span>Cambridge 9701 Master Revision Tables</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {language === "mn" ? "Кембриджийн Хөтөлбөрийн Бүрэн Хүснэгтүүд" : "Comprehensive Cambridge 9701 Master Tables"}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {language === "mn"
              ? "3-р үеийн оксид/хлорид, 2-р бүлэг, 17-р бүлэг, шилжилтийн металлуудын бүх шинж чанарын нэгдсэн лавлах хүснэгт."
              : "Master reference tables for Period 3, Group 2, Group 17, and Transition Elements with official Cambridge marking points."}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
          <button
            onClick={() => {
              setActiveTab("period3");
              setSearchQuery("");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "period3"
                ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🌟 Period 3 Master
          </button>
          <button
            onClick={() => {
              setActiveTab("group2");
              setSearchQuery("");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "group2"
                ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🛡️ Group 2 Master
          </button>
          <button
            onClick={() => {
              setActiveTab("group17");
              setSearchQuery("");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "group17"
                ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🧪 Group 17 Master
          </button>
          <button
            onClick={() => {
              setActiveTab("transition");
              setSearchQuery("");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "transition"
                ? "bg-white text-cyan-900 shadow-2xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🎨 3d Transition Metals
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TABLE 1: PERIOD 3 MASTER SHEET */}
      {/* ========================================================================= */}
      {activeTab === "period3" && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Filter:</span>
              {(["ALL", "Oxide", "Chloride"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setCompoundFilter(filter)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                    compoundFilter === filter
                      ? "bg-cyan-700 text-white border-cyan-800"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {filter === "ALL" ? "All Compounds" : `${filter}s`}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search compound, e.g. Na2O, AlCl3..."
                className="bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-cyan-500 w-48"
              />
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono font-bold">
                  <th className="p-3">Compound</th>
                  <th className="p-3">Bonding & Structure</th>
                  <th className="p-3">Melting Pt</th>
                  <th className="p-3">Reaction with Water</th>
                  <th className="p-3">pH / Nature</th>
                  <th className="p-3">Key Cambridge Observations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {PERIOD_3_COMPOUNDS.filter((c) => {
                  if (compoundFilter !== "ALL" && c.type !== compoundFilter) return false;
                  if (searchQuery.trim()) {
                    const q = searchQuery.toLowerCase();
                    return (
                      c.formula.toLowerCase().includes(q) ||
                      c.nameEn.toLowerCase().includes(q) ||
                      c.bonding.toLowerCase().includes(q)
                    );
                  }
                  return true;
                }).map((c) => (
                  <tr key={c.formula} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3 font-mono font-black text-slate-900 text-sm">
                      <div>{c.formula}</div>
                      <div className="text-[10px] font-sans font-normal text-slate-500">{c.nameEn}</div>
                    </td>
                    <td className="p-3">
                      <span className="font-bold text-slate-800">{c.bonding}</span>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">{c.structureEn}</p>
                    </td>
                    <td className="p-3 font-mono font-bold text-slate-800 whitespace-nowrap">
                      {c.meltingPointC} °C
                    </td>
                    <td className="p-3 font-mono text-[11px] text-cyan-800 max-w-[220px]">
                      {c.reactionWithWaterEquation}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full font-bold text-[10px] text-white ${
                          c.solutionPH <= 2
                            ? "bg-rose-600"
                            : c.solutionPH <= 4
                            ? "bg-orange-500"
                            : c.solutionPH <= 7
                            ? "bg-emerald-600"
                            : c.solutionPH <= 10
                            ? "bg-sky-600"
                            : "bg-indigo-600"
                        }`}
                      >
                        pH {c.solutionPH} • {c.nature}
                      </span>
                    </td>
                    <td className="p-3 text-[11px] text-slate-600 max-w-[240px]">
                      {language === "mn" ? c.observationsMn : c.observationsEn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TABLE 2: GROUP 2 MASTER SHEET */}
      {/* ========================================================================= */}
      {activeTab === "group2" && (
        <div className="space-y-4">
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono font-bold">
                  <th className="p-3">Metal (M)</th>
                  <th className="p-3">Radius (nm)</th>
                  <th className="p-3">1st IE (kJ/mol)</th>
                  <th className="p-3">Reaction with Water</th>
                  <th className="p-3">Flame Test Colour</th>
                  <th className="p-3">Hydroxide M(OH)₂ Solubility</th>
                  <th className="p-3">Sulfate MSO₄ Solubility</th>
                  <th className="p-3">MCO₃ Decomp Temp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {GROUP_2_TRENDS.map((el) => {
                  let hydroxideSol = "Sparingly soluble (pH 9-10)";
                  let sulfateSol = "Soluble";
                  let flame = "No colour";

                  if (el.symbol === "Be") {
                    hydroxideSol = "Insoluble (amphoteric)";
                    sulfateSol = "Soluble";
                  } else if (el.symbol === "Mg") {
                    hydroxideSol = "Sparingly soluble (suspension)";
                    sulfateSol = "Soluble (Epsom salts)";
                  } else if (el.symbol === "Ca") {
                    hydroxideSol = "Slightly soluble (limewater)";
                    sulfateSol = "Sparingly soluble (plaster of Paris)";
                    flame = "Brick-Red 🔥";
                  } else if (el.symbol === "Sr") {
                    hydroxideSol = "Soluble";
                    sulfateSol = "Insoluble white ppt";
                    flame = "Scarlet / Crimson 🔥";
                  } else if (el.symbol === "Ba") {
                    hydroxideSol = "Highly soluble (strong base pH 13)";
                    sulfateSol = "Completely insoluble (barium meal)";
                    flame = "Apple-Green 🔥";
                  }

                  return (
                    <tr key={el.symbol} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3 font-mono font-black text-slate-900 text-sm">
                        {el.nameEn} ({el.symbol})
                      </td>
                      <td className="p-3 font-mono">
                        At: {el.atomicRadius} / Ion: {el.ionicRadius}
                      </td>
                      <td className="p-3 font-mono font-bold text-cyan-800">
                        {el.firstIE}
                      </td>
                      <td className="p-3 text-[11px] max-w-[180px]">
                        {el.symbol === "Mg" && "Very slow with cold water; burns vigorously in steam: Mg + H₂O(g) → MgO + H₂"}
                        {el.symbol === "Ca" && "Steady effervescence in cold water, forms cloudy Ca(OH)₂"}
                        {el.symbol === "Ba" && "Vigorous reaction in cold water, clear Ba(OH)₂ solution"}
                        {(el.symbol === "Be" || el.symbol === "Sr") && el.noteEn?.slice(0, 80)}
                      </td>
                      <td className="p-3 font-bold text-amber-700 whitespace-nowrap">
                        {flame}
                      </td>
                      <td className="p-3 font-semibold text-emerald-700">
                        {hydroxideSol}
                      </td>
                      <td className="p-3 font-semibold text-cyan-800">
                        {sulfateSol}
                      </td>
                      <td className="p-3 font-mono font-bold text-rose-700 whitespace-nowrap">
                        {el.decompositionTempC} °C
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-1">
            <span className="font-bold flex items-center gap-1.5 text-amber-900">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Cambridge 9701 Key Trend Summary for Group 2:</span>
            </span>
            <p>
              • <b>Solubility of Hydroxides INCREASES down group:</b> Lattice energy decreases faster than hydration enthalpy of hydroxide ion.
              <br />
              • <b>Solubility of Sulfates DECREASES down group:</b> Sulfate ion SO₄²⁻ is very large, so lattice energy stays relatively constant while hydration enthalpy of M²⁺ decreases dramatically.
              <br />
              • <b>Thermal stability of Carbonates & Nitrates INCREASES down group:</b> Cation radius increases → lower charge density → less polarising effect on CO₃²⁻ / NO₃⁻ anion.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TABLE 3: GROUP 17 MASTER SHEET */}
      {/* ========================================================================= */}
      {activeTab === "group17" && (
        <div className="space-y-4">
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono font-bold">
                  <th className="p-3">Halogen (X₂)</th>
                  <th className="p-3">Appearance at RTP</th>
                  <th className="p-3">Boiling Pt</th>
                  <th className="p-3">Colour in Hexane</th>
                  <th className="p-3">AgNO₃ ppt Colour</th>
                  <th className="p-3">Solubility in NH₃(aq)</th>
                  <th className="p-3">Reaction with conc H₂SO₄</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {GROUP_17_TRENDS.map((el) => {
                  let app = "";
                  let hex = "";
                  let agPpt = "";
                  let nh3Sol = "";
                  let h2so4 = "";

                  if (el.symbol === "F") {
                    app = "Pale yellow gas";
                    hex = "Pale yellow";
                    agPpt = "AgF is soluble (no ppt)";
                    nh3Sol = "N/A";
                    h2so4 = "HF gas only (not redox)";
                  } else if (el.symbol === "Cl") {
                    app = "Pale greenish-yellow gas";
                    hex = "Virtually colourless / pale green";
                    agPpt = "White ppt (AgCl)";
                    nh3Sol = "Soluble in dilute NH₃";
                    h2so4 = "Steamy acid fumes of HCl(g) only (Acid-base, no redox)";
                  } else if (el.symbol === "Br") {
                    app = "Reddish-brown liquid, orange vapour";
                    hex = "Vibrant orange";
                    agPpt = "Cream ppt (AgBr)";
                    nh3Sol = "Insoluble dilute; Soluble in conc NH₃";
                    h2so4 = "Orange Br₂ vapour + choking SO₂ gas (Br⁻ reduces S⁺⁶ to S⁺⁴)";
                  } else if (el.symbol === "I") {
                    app = "Shiny grey-black solid, purple vapour";
                    hex = "Intense purple / violet";
                    agPpt = "Yellow ppt (AgI)";
                    nh3Sol = "Insoluble in both dilute & conc NH₃";
                    h2so4 = "Purple I₂ vapour, yellow S solid, rotten-egg H₂S gas (I⁻ reduces S⁺⁶ to S⁻²)";
                  }

                  return (
                    <tr key={el.symbol} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3 font-mono font-black text-slate-900 text-sm">
                        {el.nameEn}
                      </td>
                      <td className="p-3 font-medium text-slate-800">{app}</td>
                      <td className="p-3 font-mono font-bold text-cyan-800 whitespace-nowrap">
                        {el.boilingPointC} °C
                      </td>
                      <td className="p-3 font-bold text-amber-700">{hex}</td>
                      <td className="p-3 font-bold text-slate-900">{agPpt}</td>
                      <td className="p-3 font-semibold text-emerald-700">{nh3Sol}</td>
                      <td className="p-3 text-[11px] text-slate-600 max-w-[200px]">{h2so4}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-cyan-50/70 p-4 rounded-2xl border border-cyan-200 text-xs text-cyan-950 space-y-1">
            <span className="font-bold flex items-center gap-1.5 text-cyan-900">
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              <span>Disproportionation Reactions with Alkali (Cold vs Hot NaOH):</span>
            </span>
            <p>
              • <b>Cold dilute alkali (15 °C):</b> Cl₂ + 2NaOH → NaCl + NaClO + H₂O (Oxidation states of Cl: 0 → -1 and +1). Used as bleach!
              <br />
              • <b>Hot concentrated alkali (70 °C):</b> 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O (Oxidation states of Cl: 0 → -1 and +5 sodium chlorate(V)).
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TABLE 4: 3d TRANSITION METALS MASTER SHEET */}
      {/* ========================================================================= */}
      {activeTab === "transition" && (
        <div className="space-y-4">
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono font-bold">
                  <th className="p-3">Element</th>
                  <th className="p-3">Atom Config</th>
                  <th className="p-3">Common Ion Config</th>
                  <th className="p-3">Oxidation States</th>
                  <th className="p-3">Aqueous Ion Colours</th>
                  <th className="p-3">Catalytic Applications</th>
                  <th className="p-3">True Transition?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {TRANSITION_METALS_3D.map((tm) => (
                  <tr key={tm.symbol} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3 font-mono font-black text-slate-900 text-sm">
                      {tm.symbol} ({tm.nameEn})
                    </td>
                    <td className="p-3 font-mono text-cyan-800 font-bold whitespace-nowrap">
                      {tm.electronConfigAtom}
                    </td>
                    <td className="p-3 font-mono text-[11px] text-slate-700 whitespace-nowrap">
                      {tm.electronConfigCommonIon}
                    </td>
                    <td className="p-3 font-mono font-bold text-slate-800">
                      {tm.commonOxidationStates.map((s) => `+${s}`).join(", ")}
                    </td>
                    <td className="p-3 font-semibold" style={{ color: tm.colorHex }}>
                      {tm.colorOfAqueousIon}
                    </td>
                    <td className="p-3 text-[11px] text-slate-600 max-w-[180px]">
                      {tm.catalyticUseEn}
                    </td>
                    <td className="p-3">
                      {tm.isTrueTransitionElement ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                          Yes
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold text-[10px]" title={tm.notesEn}>
                          No (d⁰ or d¹⁰)
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
