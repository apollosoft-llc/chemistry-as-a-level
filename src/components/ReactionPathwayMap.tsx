import React, { useState } from "react";
import {
  TestTubes,
  ArrowRight,
  GitBranch,
  Layers,
  BookOpen,
} from "lucide-react";

interface FunctionalGroup {
  id: string;
  nameEn: string;
  formula: string;
  level: "AS" | "A2";
  color: string;
}

const FUNCTIONAL_GROUPS: FunctionalGroup[] = [
  { id: "alkane", nameEn: "Alkane", formula: "R-H / CnH2n+2", level: "AS", color: "border-slate-500 text-slate-300" },
  { id: "alkene", nameEn: "Alkene", formula: "R-CH=CH₂", level: "AS", color: "border-cyan-500 text-cyan-300" },
  { id: "halogenoalkane", nameEn: "Halogenoalkane", formula: "R-X (X = Cl, Br, I)", level: "AS", color: "border-blue-500 text-blue-300" },
  { id: "alcohol", nameEn: "Alcohol", formula: "R-OH", level: "AS", color: "border-emerald-500 text-emerald-300" },
  { id: "aldehyde", nameEn: "Aldehyde", formula: "R-CHO", level: "AS", color: "border-amber-500 text-amber-300" },
  { id: "ketone", nameEn: "Ketone", formula: "R-CO-R'", level: "AS", color: "border-orange-500 text-orange-300" },
  { id: "carboxylic_acid", nameEn: "Carboxylic Acid", formula: "R-COOH", level: "AS", color: "border-rose-500 text-rose-300" },
  { id: "ester", nameEn: "Ester", formula: "R-COO-R'", level: "AS", color: "border-pink-500 text-pink-300" },
  { id: "nitrile", nameEn: "Nitrile", formula: "R-C≡N", level: "AS", color: "border-indigo-500 text-indigo-300" },
  { id: "amine", nameEn: "Amine", formula: "R-NH₂", level: "AS", color: "border-purple-500 text-purple-300" },
  { id: "acyl_chloride", nameEn: "Acyl Chloride", formula: "R-COCl", level: "A2", color: "border-red-500 text-red-300" },
  { id: "amide", nameEn: "Amide", formula: "R-CONH₂ / R-CONHR'", level: "A2", color: "border-violet-500 text-violet-300" },
  { id: "benzene", nameEn: "Arene / Benzene", formula: "C₆H₆", level: "A2", color: "border-yellow-500 text-yellow-300" },
  { id: "phenol", nameEn: "Phenol", formula: "C₆H₅OH", level: "A2", color: "border-teal-500 text-teal-300" },
];

const REACTION_PATHWAYS = [
  {
    from: "alkane",
    to: "halogenoalkane",
    nameEn: "Free-radical Substitution",
    reagents: "X₂ (e.g. Cl₂ or Br₂)",
    conditions: "UV light / sunlight",
    mechanism: "Initiation, Propagation (2 steps), Termination",
    equation: "CH₄ + Cl₂ → CH₃Cl + HCl (via Cl• radicals)",
    examTip: "Requires UV light for homolytic fission of Cl-Cl bond. Leads to mixture of mono- and poly-substituted halogenoalkanes.",
    level: "AS",
  },
  {
    from: "alkene",
    to: "halogenoalkane",
    nameEn: "Electrophilic Addition of HX",
    reagents: "Dry HX(g) (e.g. HBr, HCl) at room temperature",
    conditions: "Room temperature",
    mechanism: "Electrophilic Addition via carbocation intermediate",
    equation: "CH₃CH=CH₂ + HBr → CH₃CH(Br)CH₃ (major product)",
    examTip: "Markovnikov's rule: Major product forms via the MORE STABLE secondary/tertiary carbocation intermediate (positive inductive effect of alkyl groups).",
    level: "AS",
  },
  {
    from: "alkene",
    to: "alcohol",
    nameEn: "Hydration (Industrial & Lab)",
    reagents: "Steam (H₂O(g)) + conc H₃PO₄ catalyst",
    conditions: "300°C, 60-70 atm",
    mechanism: "Electrophilic Addition",
    equation: "CH₂=CH₂ + H₂O(g) ⇌ CH₃CH₂OH",
    examTip: "Industrial production of ethanol from ethene cracking products.",
    level: "AS",
  },
  {
    from: "halogenoalkane",
    to: "alcohol",
    nameEn: "Nucleophilic Substitution (Hydrolysis)",
    reagents: "NaOH(aq) or KOH(aq)",
    conditions: "Warm / Heat under reflux",
    mechanism: "SN2 for 1° (one step with transition state, inversion of configuration); SN1 for 3° (two steps with carbocation intermediate)",
    equation: "R-Br + OH⁻ → R-OH + Br⁻",
    examTip: "Rate of hydrolysis depends on C-X bond enthalpy (C-I reacts fastest due to lowest bond enthalpy, C-F slowest).",
    level: "AS",
  },
  {
    from: "halogenoalkane",
    to: "nitrile",
    nameEn: "Nucleophilic Substitution with KCN (Carbon chain lengthening)",
    reagents: "KCN (or NaCN) in ethanol (ethanolic)",
    conditions: "Heat under reflux",
    mechanism: "Nucleophilic substitution (CN⁻ nucleophile attacks Cδ+)",
    equation: "R-Br + CN⁻ → R-C≡N + Br⁻",
    examTip: "Key synthesis step for INCREASING carbon chain length by +1 carbon atom.",
    level: "AS",
  },
  {
    from: "halogenoalkane",
    to: "amine",
    nameEn: "Nucleophilic Substitution with Ammonia",
    reagents: "Excess concentrated ethanolic NH₃",
    conditions: "Heat in a sealed tube under pressure",
    mechanism: "Nucleophilic substitution",
    equation: "R-Br + 2NH₃ → R-NH₂ + NH₄Br",
    examTip: "Must use EXCESS NH₃ to prevent further substitution of R-NH₂ into 2°/3° amines and quaternary ammonium salts.",
    level: "AS",
  },
  {
    from: "alcohol",
    to: "aldehyde",
    nameEn: "Partial Oxidation of Primary Alcohol",
    reagents: "Acidified K₂Cr₂O₇ (dilute H₂SO₄)",
    conditions: "Warm and DISTIL OFF immediately as formed (Orange Cr₂O₇²⁻ → Green Cr³⁺)",
    mechanism: "Oxidation",
    equation: "R-CH₂OH + [O] → R-CHO + H₂O",
    examTip: "Must DISTIL immediately; if heated under reflux, it will fully oxidise to carboxylic acid (R-COOH).",
    level: "AS",
  },
  {
    from: "alcohol",
    to: "carboxylic_acid",
    nameEn: "Complete Oxidation of Primary Alcohol",
    reagents: "Excess acidified K₂Cr₂O₇ (or acidified KMnO₄)",
    conditions: "Heat under REFLUX (Orange → Green)",
    mechanism: "Oxidation",
    equation: "R-CH₂OH + 2[O] → R-COOH + H₂O",
    examTip: "Reflux ensures any evaporated aldehyde condenses back and oxidises completely to carboxylic acid.",
    level: "AS",
  },
  {
    from: "alcohol",
    to: "ketone",
    nameEn: "Oxidation of Secondary Alcohol",
    reagents: "Acidified K₂Cr₂O₇ (H₂SO₄)",
    conditions: "Heat under reflux (Orange → Green)",
    mechanism: "Oxidation",
    equation: "R-CH(OH)-R' + [O] → R-CO-R' + H₂O",
    examTip: "Ketones cannot be further oxidised by K₂Cr₂O₇ under normal conditions. Tertiary alcohols DO NOT oxidise.",
    level: "AS",
  },
  {
    from: "aldehyde",
    to: "carboxylic_acid",
    nameEn: "Oxidation of Aldehyde",
    reagents: "Acidified K₂Cr₂O₇ (reflux) OR Tollens' reagent OR Fehling's solution",
    conditions: "Warm / Heat",
    mechanism: "Oxidation",
    equation: "R-CHO + [O] → R-COOH (Tollens' gives silver mirror; Fehling's gives brick-red Cu₂O ppt)",
    examTip: "Tollens' & Fehling's tests distinguish aldehydes (positive test) from ketones (no reaction).",
    level: "AS",
  },
  {
    from: "carboxylic_acid",
    to: "ester",
    nameEn: "Esterification (Condensation)",
    reagents: "Alcohol (R'-OH) + conc H₂SO₄ catalyst",
    conditions: "Heat under reflux",
    mechanism: "Condensation (Nucleophilic acyl substitution / elimination of H₂O)",
    equation: "R-COOH + R'-OH ⇌ R-COO-R' + H₂O",
    examTip: "Reversible equilibrium reaction. Concentrated H₂SO₄ acts as catalyst and dehydrating agent.",
    level: "AS",
  },
  {
    from: "carboxylic_acid",
    to: "acyl_chloride",
    nameEn: "Conversion to Acyl Chloride",
    reagents: "PCl₅(s) at room temp OR SOCl₂(l) OR PCl₃ + heat",
    conditions: "Anhydrous, room temp for PCl₅ / SOCl₂",
    mechanism: "Nucleophilic substitution",
    equation: "R-COOH + SOCl₂ → R-COCl + SO₂(g) + HCl(g)",
    examTip: "SOCl₂ is preferred because both by-products (SO₂ and HCl) are gases, leaving pure acyl chloride.",
    level: "A2",
  },
  {
    from: "acyl_chloride",
    to: "amide",
    nameEn: "Formation of Amides (Very rapid at RT)",
    reagents: "Conc NH₃(aq) for primary amide (R-CONH₂), or 1° amine for secondary amide (R-CONHR')",
    conditions: "Room temperature (vigorous exothermic reaction, white steamy HCl fumes)",
    mechanism: "Nucleophilic addition-elimination",
    equation: "R-COCl + 2NH₃ → R-CONH₂ + NH₄Cl",
    examTip: "Acyl chlorides are far more reactive than carboxylic acids and react with amines at room temp without catalyst.",
    level: "A2",
  },
  {
    from: "nitrile",
    to: "carboxylic_acid",
    nameEn: "Acid Hydrolysis of Nitrile",
    reagents: "Dilute HCl(aq) or dilute H₂SO₄(aq)",
    conditions: "Heat under reflux",
    mechanism: "Hydrolysis",
    equation: "R-C≡N + 2H₂O + H⁺ → R-COOH + NH₄⁺",
    examTip: "Combines with haloalkane + KCN reaction to synthesise a carboxylic acid with +1 carbon atom.",
    level: "AS",
  },
  {
    from: "benzene",
    to: "phenol",
    nameEn: "Multi-step Synthesis of Phenol",
    reagents: "1) HNO₃/H₂SO₄ (Nitration) → 2) Sn/conc HCl (Reduction to Phenylamine) → 3) HNO₂/HCl < 5°C (Diazotisation) → 4) Warm with H₂O",
    conditions: "Strict temperature control < 5°C during diazotisation to prevent explosive decomposition",
    mechanism: "Electrophilic substitution → Reduction → Diazotisation → Nucleophilic substitution",
    equation: "C₆H₆ → C₆H₅NO₂ → C₆H₅NH₂ → C₆H₅N₂⁺Cl⁻ → C₆H₅OH + N₂ + HCl",
    examTip: "Classic A Level 4-step organic synthesis problem testing arenes, amines and diazonium salts.",
    level: "A2",
  },
];

export const ReactionPathwayMap: React.FC = () => {
  const [selectedFrom, setSelectedFrom] = useState<string>("alkene");
  const [selectedTo, setSelectedTo] = useState<string>("alcohol");

  const directPathway = REACTION_PATHWAYS.find(
    (p) => p.from === selectedFrom && p.to === selectedTo
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Title Card */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-semibold mb-2">
              <TestTubes className="w-3.5 h-3.5 text-cyan-600" />
              Cambridge 9701 Organic Chemistry Synthetic Pathways
            </div>
            <h1 className="text-2xl font-black text-slate-900">
              Organic Reaction Pathways & Mechanisms Navigator
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select starting and target functional groups to inspect reagents, conditions, mechanisms (SN1, SN2, Addition, Substitution, Condensation), and mark scheme tips.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Pathway Selector */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-6 shadow-2xs">
        <div className="flex items-center gap-2 text-sm font-bold text-cyan-800">
          <GitBranch className="w-4 h-4 text-cyan-600" />
          <span>Choose Synthesis Step</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Starting Material */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 block uppercase tracking-wider">
              1. Starting Group (From)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {FUNCTIONAL_GROUPS.map((fg) => {
                const isSelected = selectedFrom === fg.id;
                return (
                  <button
                    key={fg.id}
                    onClick={() => setSelectedFrom(fg.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-cyan-50 border-cyan-500 shadow-sm text-cyan-950 font-bold"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold">
                        {fg.nameEn}
                      </span>
                      <span className="text-[10px] px-1 rounded bg-slate-200 text-slate-600">
                        {fg.level}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-700 mt-1 truncate">
                      {fg.formula}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Target Material */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 block uppercase tracking-wider">
              2. Target Group (To)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {FUNCTIONAL_GROUPS.map((fg) => {
                const isSelected = selectedTo === fg.id;
                return (
                  <button
                    key={fg.id}
                    onClick={() => setSelectedTo(fg.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-amber-50 border-amber-500 shadow-sm text-amber-950 font-bold"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold">
                        {fg.nameEn}
                      </span>
                      <span className="text-[10px] px-1 rounded bg-slate-200 text-slate-600">
                        {fg.level}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-amber-700 mt-1 truncate">
                      {fg.formula}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Pathway Details View */}
      {directPathway ? (
        <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-5 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-black text-cyan-800">
                {FUNCTIONAL_GROUPS.find((f) => f.id === directPathway.from)?.nameEn}
              </span>
              <ArrowRight className="w-5 h-5 text-slate-400" />
              <span className="text-lg font-black text-amber-800">
                {FUNCTIONAL_GROUPS.find((f) => f.id === directPathway.to)?.nameEn}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800 border border-blue-200">
                {directPathway.level} Syllabus
              </span>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-purple-100 text-purple-800 border border-purple-200">
                {directPathway.nameEn}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Reagents & Conditions */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div>
                <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider block mb-1">
                  Reagents
                </span>
                <p className="text-sm font-semibold text-slate-900 font-mono">
                  {directPathway.reagents}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Conditions
                </span>
                <p className="text-sm text-slate-700">
                  {directPathway.conditions}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-purple-800 uppercase tracking-wider block mb-1">
                  Mechanism Type
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {directPathway.mechanism}
                </p>
              </div>
            </div>

            {/* Balanced Equation & Cambridge Pitfall */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Equation
                </span>
                <div className="bg-white p-3 rounded-lg border border-slate-200 font-mono text-sm text-emerald-800 font-semibold">
                  {directPathway.equation}
                </div>
              </div>

              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Cambridge Examiner Note
                </span>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {directPathway.examTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-white border border-slate-200 p-8 text-center space-y-3 shadow-2xs">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">
            No direct 1-step reaction found (Multi-step synthesis required)
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            To convert {selectedFrom} to {selectedTo}, you need a 2-3 step synthetic route utilizing intermediate compounds.
          </p>
        </div>
      )}

      {/* Complete All Pathways Reference Table */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-2xs">
        <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-600" />
          Master Cambridge 9701 Reaction Reference
        </h3>

        <div className="overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-mono">
                <th className="py-2.5 px-3">From → To</th>
                <th className="py-2.5 px-3">Reaction Type</th>
                <th className="py-2.5 px-3">Reagents & Conditions</th>
                <th className="py-2.5 px-3">Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {REACTION_PATHWAYS.map((p, idx) => (
                <tr
                  key={idx}
                  onClick={() => {
                    setSelectedFrom(p.from);
                    setSelectedTo(p.to);
                    window.scrollTo({ top: 150, behavior: "smooth" });
                  }}
                  className="hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <td className="py-2 px-3 font-semibold text-slate-900">
                    <span className="text-cyan-800">{p.from}</span> → <span className="text-amber-800">{p.to}</span>
                  </td>
                  <td className="py-2 px-3 text-slate-700">{p.nameEn}</td>
                  <td className="py-2 px-3 font-mono text-[11px] text-slate-600">{p.reagents} ({p.conditions})</td>
                  <td className="py-2 px-3">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        p.level === "AS" ? "bg-blue-100 text-blue-800 border border-blue-200" : "bg-amber-100 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {p.level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
