import React, { useState } from "react";
import { PERIODIC_ELEMENTS } from "../data/elementsData";
import { ALL_118_ELEMENTS } from "../data/all118Elements";
import { ElementData } from "../types";
import {
  Flame,
  Layers,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { FullPeriodicTableView } from "./FullPeriodicTableView";

export const PeriodicTableExplorer: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<ElementData>(
    ALL_118_ELEMENTS.find((e) => e.symbol === "Na") || ALL_118_ELEMENTS[10]
  );
  const [activeTrend, setActiveTrend] = useState<"all" | "period3" | "group2" | "group17" | "transition">("all");

  const filterByTrend = (trend: string) => {
    switch (trend) {
      case "period3":
        return ALL_118_ELEMENTS.filter((e) => e.period === 3);
      case "group2":
        return ALL_118_ELEMENTS.filter((e) => e.group === 2);
      case "group17":
        return ALL_118_ELEMENTS.filter((e) => e.group === 17);
      case "transition":
        return ALL_118_ELEMENTS.filter((e) => e.block === "d");
      default:
        return ALL_118_ELEMENTS;
    }
  };

  const currentDisplayList = filterByTrend(activeTrend);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Title & Cambridge Trend Selector */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5 text-cyan-600" />
              Cambridge 9701 Inorganic Chemistry & Periodicity
            </div>
            <h1 className="text-2xl font-black text-slate-900">
              Periodic Table & Cambridge Trends Explorer
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore Period 3 trends, Group 2 thermal stability/solubility, Group 17 halogen redox, and full 118-element periodic board with temperature phase simulation.
            </p>
          </div>
        </div>

        {/* Quick Trend Tabs */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-200">
          <button
            onClick={() => setActiveTrend("all")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTrend === "all"
                ? "bg-cyan-600 text-white shadow-2xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <span>⚛️ All Elements (118 Periodic Board)</span>
          </button>
          <button
            onClick={() => setActiveTrend("period3")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTrend === "period3"
                ? "bg-cyan-600 text-white shadow-2xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🌟 Period 3 Trends (Na - Ar)
          </button>
          <button
            onClick={() => setActiveTrend("group2")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTrend === "group2"
                ? "bg-cyan-600 text-white shadow-2xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🛡️ Group 2 (Mg - Ba)
          </button>
          <button
            onClick={() => setActiveTrend("group17")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTrend === "group17"
                ? "bg-cyan-600 text-white shadow-2xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🧪 Group 17 Halogens (F - I)
          </button>
          <button
            onClick={() => setActiveTrend("transition")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTrend === "transition"
                ? "bg-cyan-600 text-white shadow-2xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🎨 Transition Metals (Sc - Zn)
          </button>
        </div>
      </div>

      {/* When "All Elements" is active: Show Full 118-Element Periodic Table Board */}
      {activeTrend === "all" && (
        <FullPeriodicTableView onSelectElement={(el) => setSelectedElement(el)} />
      )}

      {/* When a specific trend tab is active: Show Trend Grid & Focused Syllabus Matrix */}
      {activeTrend !== "all" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: Element Cards Grid */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {currentDisplayList.map((el) => {
                const isSelected = selectedElement.symbol === el.symbol;
                return (
                  <div
                    key={el.number}
                    onClick={() => setSelectedElement(el)}
                    className={`cursor-pointer rounded-2xl p-3.5 border transition-all duration-150 flex flex-col justify-between ${
                      isSelected
                        ? "bg-cyan-50 border-cyan-500 shadow-sm scale-[1.02]"
                        : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate-500">
                        {el.number}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 font-mono text-cyan-800 border border-slate-200">
                        P{el.period} G{el.group}
                      </span>
                    </div>

                    <div className="my-2 text-center">
                      <div className="text-2xl font-black text-slate-900">{el.symbol}</div>
                      <div className="text-xs font-semibold text-slate-600 truncate">
                        {el.nameEn}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500">{typeof el.atomicMass === 'number' ? el.atomicMass.toFixed(el.atomicMass % 1 === 0 ? 0 : 2) : el.atomicMass}</span>
                      <span className="text-cyan-700 font-bold">{el.block}-block</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cambridge Syllabus Key Summary Box for Active Trend */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-2xs">
              <h3 className="font-bold text-sm text-cyan-800 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-600" />
                {activeTrend === "period3" && "Period 3 Oxides & Chlorides Trend Sheet"}
                {activeTrend === "group2" && "Group 2 Solubility & Thermal Decomposition Trends"}
                {activeTrend === "group17" && "Group 17 Halogen Redox & Halide Ion Tests"}
                {activeTrend === "transition" && "Transition Metal Colours & Complex Ions"}
              </h3>

              {activeTrend === "period3" && (
                <div className="overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-mono">
                        <th className="py-2">Compound</th>
                        <th>Bonding / Structure</th>
                        <th>Reaction with Water</th>
                        <th>pH of Solution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="py-1.5 font-bold text-slate-900">Na₂O</td>
                        <td>Giant ionic</td>
                        <td>Na₂O + H₂O → 2NaOH</td>
                        <td className="text-emerald-700 font-bold">pH 14 (strongly basic)</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold text-slate-900">MgO</td>
                        <td>Giant ionic</td>
                        <td>MgO + H₂O → Mg(OH)₂ (sparingly)</td>
                        <td className="text-emerald-700 font-bold">pH ~10 (weakly basic)</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold text-slate-900">Al₂O₃</td>
                        <td>Giant ionic (covalent character)</td>
                        <td>Insoluble in water (Amphoteric)</td>
                        <td className="text-amber-700 font-bold">pH 7 (Reacts with acid & alkali)</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold text-slate-900">SiO₂</td>
                        <td>Giant covalent (macromolecular)</td>
                        <td>Insoluble in water (Acidic)</td>
                        <td className="text-amber-700 font-bold">pH 7 (Reacts with hot conc. NaOH)</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold text-slate-900">P₄O₁₀</td>
                        <td>Simple molecular</td>
                        <td>P₄O₁₀ + 6H₂O → 4H₃PO₄</td>
                        <td className="text-rose-700 font-bold">pH 1-2 (strongly acidic)</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold text-slate-900">SO₂ / SO₃</td>
                        <td>Simple molecular</td>
                        <td>SO₂ + H₂O → H₂SO₃ / SO₃ + H₂O → H₂SO₄</td>
                        <td className="text-rose-700 font-bold">pH 1-2 (strongly acidic)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTrend === "group2" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-cyan-800 block mb-1">
                      Solubility of Hydroxides vs Sulfates:
                    </span>
                    <p className="leading-relaxed">
                      • <b>M(OH)₂ solubility INCREASES down group:</b> Mg(OH)₂ sparingly soluble → Ba(OH)₂ soluble (pH ~13).
                      <br />
                      • <b>MSO₄ solubility DECREASES down group:</b> MgSO₄ soluble → BaSO₄ insoluble (white ppt used in sulfate test).
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-amber-800 block mb-1">
                      Thermal Stability of Carbonates / Nitrates:
                    </span>
                    <p className="leading-relaxed">
                      • <b>Stability INCREASES down group:</b> Cation radius increases down group → lower charge density → less polarising power towards CO₃²⁻/NO₃⁻ anion → requires higher temperature to decompose:
                      <br />
                      <span className="font-mono text-cyan-800">MCO₃(s) → MO(s) + CO₂(g)</span>
                    </p>
                  </div>
                </div>
              )}

              {activeTrend === "group17" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-cyan-800 block mb-1">
                      Silver Nitrate (AgNO₃) Halide Ion Test:
                    </span>
                    <p className="leading-relaxed">
                      • <b>Cl⁻:</b> White ppt (AgCl) → Soluble in dilute NH₃(aq).
                      <br />
                      • <b>Br⁻:</b> Cream ppt (AgBr) → Insoluble in dilute NH₃, Soluble in concentrated NH₃(aq).
                      <br />
                      • <b>I⁻:</b> Yellow ppt (AgI) → Insoluble in both dilute & concentrated NH₃(aq).
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-amber-800 block mb-1">
                      Halide Reducing Power Trend (with conc H₂SO₄):
                    </span>
                    <p className="leading-relaxed">
                      • <b>NaCl + H₂SO₄:</b> Only steamy acid fumes of HCl (Acid-base only).
                      <br />
                      • <b>NaBr + H₂SO₄:</b> Orange Br₂ vapour + pungent SO₂ gas (Br⁻ reduces S⁺⁶ to S⁺⁴).
                      <br />
                      • <b>NaI + H₂SO₄:</b> Purple I₂ vapour, rotten egg H₂S gas, yellow S solid (I⁻ reduces S⁺⁶ to S⁻²).
                    </p>
                  </div>
                </div>
              )}

              {activeTrend === "transition" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-cyan-800 block mb-1">
                      Copper [Cu²⁺] Ligand Substitutions:
                    </span>
                    <p className="leading-relaxed">
                      • <b>[Cu(H₂O)₆]²⁺:</b> Light blue octahedral complex.
                      <br />
                      • <b>+ dropwise NH₃:</b> Pale blue ppt Cu(OH)₂(s).
                      <br />
                      • <b>+ excess NH₃:</b> Deep royal blue solution [Cu(NH₃)₄(H₂O)₂]²⁺.
                      <br />
                      • <b>+ conc HCl:</b> Yellow-green tetrahedral [CuCl₄]²⁻.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-purple-800 block mb-1">
                      Vanadium & Manganese Redox Colors:
                    </span>
                    <p className="leading-relaxed">
                      • <b>VO₂⁺ (+5):</b> Yellow | <b>VO²⁺ (+4):</b> Blue | <b>V³⁺ (+3):</b> Green | <b>V²⁺ (+2):</b> Violet.
                      <br />
                      • <b>MnO₄⁻ (+7):</b> Intense Purple → reduced to colourless <b>Mn²⁺ (+2)</b> in acid redox titrations.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right 1 Col: Selected Element Deep Inspector */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              {/* Big Badge Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white text-3xl font-black shadow-md">
                    {selectedElement.symbol}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900">
                      {selectedElement.nameEn}
                    </h2>
                    <p className="text-xs text-slate-500 font-mono">
                      Atomic Number: {selectedElement.number} | Group {selectedElement.group}, Period {selectedElement.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Atomic Mass (Ar)</span>
                  <span className="font-bold text-slate-900 font-mono">{selectedElement.atomicMass}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Electronegativity</span>
                  <span className="font-bold text-cyan-800 font-mono">{selectedElement.electronegativity ?? "—"}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">1st Ionisation Energy</span>
                  <span className="font-bold text-amber-800 font-mono">
                    {selectedElement.firstIonisationEnergy ? `${selectedElement.firstIonisationEnergy} kJ/mol` : "—"}
                  </span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Melting Point</span>
                  <span className="font-bold text-slate-900 font-mono">
                    {selectedElement.meltingPointC !== undefined ? `${selectedElement.meltingPointC} °C` : selectedElement.meltingPointK ? `${selectedElement.meltingPointK} K` : "—"}
                  </span>
                </div>
              </div>

              {/* Electronic Configuration */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">
                  Electronic Configuration (Cambridge standard)
                </span>
                <span className="font-mono text-cyan-800 font-bold text-sm">
                  {selectedElement.electronConfig}
                </span>
              </div>

              {/* Flame Test Color if available */}
              {selectedElement.flameColor && (
                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-center gap-2.5">
                  <Flame className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <span className="text-[11px] text-amber-900 font-bold block uppercase tracking-wider">
                      Flame Test Colour (9701 Practical & Theory)
                    </span>
                    <span className="text-xs font-semibold text-slate-900">
                      {selectedElement.flameColor}
                    </span>
                  </div>
                </div>
              )}

              {/* Cambridge Description & Exam Notes */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Cambridge Exam Highlights
                </span>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {selectedElement.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

