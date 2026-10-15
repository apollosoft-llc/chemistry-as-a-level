import React, { useState } from "react";
import { ALL_118_ELEMENTS } from "../data/all118Elements";
import { ElementData } from "../types";
import {
  Layers,
  TrendingUp,
  FlaskConical,
  Table,
  Sparkles,
  Atom,
} from "lucide-react";
import { FullPeriodicTableView } from "./FullPeriodicTableView";
import { PeriodicTrendsCharts } from "./PeriodicTrendsCharts";
import { InorganicReactionLabSimulator } from "./InorganicReactionLabSimulator";
import { PeriodicMasterTables } from "./PeriodicMasterTables";
import { useLanguage } from "../utils/languageContext";

export type ExplorerMainTab = "board" | "charts" | "lab" | "tables";

export const PeriodicTableExplorer: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<ExplorerMainTab>("board");
  const [selectedElement, setSelectedElement] = useState<ElementData>(
    ALL_118_ELEMENTS.find((e) => e.symbol === "Na") || ALL_118_ELEMENTS[10]
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Title & Cambridge Trend Suite Navigation */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5 text-cyan-700" />
              <span>Cambridge 9701 Inorganic Chemistry & Periodicity Suite</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {language === "mn"
                ? "Үелэх Систем, Зүй Тогтол & Интерактив Симуляци"
                : "Periodic Table, Trends & Interactive Lab Suite"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              {language === "mn"
                ? "Кембриджийн AS & A Level Chemistry (9701) хөтөлбөрийн 118 элемент, Heatmap градиент, Бор атомын симулятор, 3-р үе ба 2, 17-р бүлгийн зүй тогтлын график, виртуал туршилтын лаб болон бүрэн лавлах хүснэгтүүд."
                : "Comprehensive Cambridge 9701 suite with interactive 118 periodic table, property heatmaps, Bohr atom orbital simulator, dynamic trend graphs, virtual reaction lab, and master reference tables."}
            </p>
          </div>
        </div>

        {/* Master Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-200">
          <button
            onClick={() => setActiveTab("board")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
              activeTab === "board"
                ? "bg-cyan-700 text-white shadow-sm ring-2 ring-cyan-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Atom className="w-4 h-4" />
            <span>{language === "mn" ? "⚛️ 118 Үелэх Систем & Heatmap" : "⚛️ 118 Periodic Board & Heatmap"}</span>
          </button>

          <button
            onClick={() => setActiveTab("charts")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
              activeTab === "charts"
                ? "bg-cyan-700 text-white shadow-sm ring-2 ring-cyan-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{language === "mn" ? "📈 Зүй Тогтол Графикууд" : "📈 Periodic Trend Graphs"}</span>
          </button>

          <button
            onClick={() => setActiveTab("lab")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
              activeTab === "lab"
                ? "bg-cyan-700 text-white shadow-sm ring-2 ring-cyan-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>{language === "mn" ? "🧪 Интерактив Лаборатори" : "🧪 Reaction Lab Simulator"}</span>
          </button>

          <button
            onClick={() => setActiveTab("tables")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
              activeTab === "tables"
                ? "bg-cyan-700 text-white shadow-sm ring-2 ring-cyan-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Table className="w-4 h-4" />
            <span>{language === "mn" ? "📑 Кембриджийн Хүснэгтүүд" : "📑 Master Revision Tables"}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 118 PERIODIC TABLE & HEATMAP & BOHR SIMULATOR */}
      {activeTab === "board" && (
        <FullPeriodicTableView onSelectElement={(el) => setSelectedElement(el)} />
      )}

      {/* TAB 2: INTERACTIVE TREND CHARTS (PERIOD 3, GROUP 2, GROUP 17, 1-36 IE) */}
      {activeTab === "charts" && (
        <PeriodicTrendsCharts />
      )}

      {/* TAB 3: INORGANIC REACTION LAB SIMULATOR (P3 pH, G2 DECOMP, G17 REDOX, TRANSITION LIGANDS) */}
      {activeTab === "lab" && (
        <InorganicReactionLabSimulator />
      )}

      {/* TAB 4: COMPREHENSIVE 9701 MASTER TABLES */}
      {activeTab === "tables" && (
        <PeriodicMasterTables />
      )}
    </div>
  );
};
