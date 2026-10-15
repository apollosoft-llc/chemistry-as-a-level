import React, { useState } from "react";
import {
  Atom,
  BookOpen,
  Compass,
  Layers,
  TestTubes,
  Search,
  GraduationCap,
  HelpCircle,
  BookmarkCheck,
  FileText,
  FlaskConical,
  Calculator,
  Languages,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Globe,
  Sliders,
} from "lucide-react";
import { ViewMode } from "../types";
import { useLanguage, LanguageMode } from "../utils/languageContext";

interface HeaderProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onSelectView,
  searchQuery,
  onSearchChange,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const isToolActive =
    currentView === "quiz" ||
    currentView === "flashcards" ||
    currentView === "periodic-table" ||
    currentView === "reactions";

  return (
    <header className="sticky top-0 z-40 bg-white/95 border-b border-slate-200 text-slate-900 shadow-xs backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
          {/* Logo and Syllabus badge */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer shrink-0"
            onClick={() => onSelectView("chapters")}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-600/20 text-white font-bold text-lg">
              <Atom className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-slate-900">
                  Cambridge Chemistry
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-200">
                  9701 AS & A Level
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden lg:block">
                Syllabus Mastery & Exam Prep
              </p>
            </div>
          </div>

          {/* Search bar for Desktop */}
          <div className="flex-1 max-w-xs xl:max-w-sm mx-1 hidden lg:block">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search topics, formulas, reactions..."
                className="w-full bg-slate-100 border border-slate-200 rounded-xl pl-8 pr-7 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Navigation Items (Clean, No Scrollbar) */}
          <div className="flex items-center gap-1.5">
            <nav className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* 1. Chapters */}
              <button
                onClick={() => onSelectView("chapters")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  currentView === "chapters" || currentView === "chapter-detail"
                    ? "bg-cyan-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
                title="Syllabus Chapters (1–32)"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Chapters</span>
              </button>

              {/* 2. Syllabus Guide (Хөтөч) */}
              <button
                onClick={() => onSelectView("syllabus-guide")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  currentView === "syllabus-guide"
                    ? "bg-slate-900 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
                title="Official Cambridge 9701 Syllabus Master Guide & Checklist"
              >
                <Compass className={`w-3.5 h-3.5 ${currentView === "syllabus-guide" ? "text-cyan-400" : "text-cyan-700"}`} />
                <span>{t.navSyllabusGuide}</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-cyan-100 text-cyan-900 font-bold hidden md:inline">
                  9701
                </span>
              </button>

              {/* 2. Past Papers */}
              <button
                onClick={() => onSelectView("past-papers")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  currentView === "past-papers"
                    ? "bg-cyan-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
                title="Official Past Papers 1, 2, 3, 4, 5"
              >
                <FileText className={`w-3.5 h-3.5 ${currentView === "past-papers" ? "text-white" : "text-cyan-700"}`} />
                <span>Past Papers</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-amber-200 text-amber-900 font-bold hidden sm:inline">
                  P1–P5
                </span>
              </button>

              {/* 3. Calculations (Тооцоот бодлого) */}
              <button
                onClick={() => onSelectView("calculations")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  currentView === "calculations"
                    ? "bg-cyan-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
                title="Quantitative Chemistry Calculations & Problems"
              >
                <Calculator className={`w-3.5 h-3.5 ${currentView === "calculations" ? "text-white" : "text-cyan-700"}`} />
                <span>Calculations</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-cyan-100 text-cyan-900 font-bold hidden sm:inline">
                  Easy-Hard
                </span>
              </button>

              {/* 4. QA Notes (Practical Appendix) */}
              <button
                onClick={() => onSelectView("qualitative-notes")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  currentView === "qualitative-notes"
                    ? "bg-teal-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
                title="Qualitative Analysis Notes & Practical Videos"
              >
                <FlaskConical className={`w-3.5 h-3.5 ${currentView === "qualitative-notes" ? "text-white" : "text-teal-700"}`} />
                <span>QA Notes</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-teal-100 text-teal-900 font-bold hidden md:inline">
                  Paper 3/5
                </span>
              </button>

              {/* 5. Revision Notes */}
              <button
                onClick={() => onSelectView("revision")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  currentView === "revision"
                    ? "bg-cyan-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
                title="Revision Notes & Cheat Sheets"
              >
                <BookmarkCheck className={`w-3.5 h-3.5 ${currentView === "revision" ? "text-white" : "text-cyan-700"}`} />
                <span className="hidden sm:inline">Revision Notes</span>
                <span className="sm:hidden">Revision</span>
              </button>

              {/* 5. More Interactive Study Tools Dropdown (Quiz, Flashcards, Periodic Table, Reactions) */}
              <div className="relative">
                <button
                  onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    isToolActive
                      ? "bg-slate-900 text-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                  title="More Study Tools"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="hidden sm:inline">
                    {currentView === "quiz"
                      ? "Quiz"
                      : currentView === "flashcards"
                      ? "Flashcards"
                      : currentView === "periodic-table"
                      ? "Periodic Table"
                      : currentView === "reactions"
                      ? "Reactions"
                      : "Tools"}
                  </span>
                  <span className="sm:hidden">Tools</span>
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </button>

                {/* Dropdown Menu */}
                {isToolsDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsToolsDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 space-y-0.5">
                      <button
                        onClick={() => {
                          onSelectView("command-words");
                          setIsToolsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center gap-2 transition-colors ${
                          currentView === "command-words"
                            ? "bg-cyan-50 text-cyan-700 font-black"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <GraduationCap className="w-4 h-4 text-emerald-600" />
                        <span>Command Words & Түлхүүр үгс</span>
                      </button>

                      <button
                        onClick={() => {
                          onSelectView("test-maker");
                          setIsToolsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center gap-2 transition-colors ${
                          currentView === "test-maker"
                            ? "bg-cyan-50 text-cyan-700 font-black"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <Sliders className="w-4 h-4 text-purple-600" />
                        <span>Test Maker (Шалгалт зохиогч)</span>
                      </button>

                      <button
                        onClick={() => {
                          onSelectView("quiz");
                          setIsToolsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center gap-2 transition-colors ${
                          currentView === "quiz"
                            ? "bg-cyan-50 text-cyan-700 font-black"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <HelpCircle className="w-4 h-4 text-cyan-600" />
                        <span>Practice Quiz</span>
                      </button>

                      <button
                        onClick={() => {
                          onSelectView("flashcards");
                          setIsToolsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center gap-2 transition-colors ${
                          currentView === "flashcards"
                            ? "bg-cyan-50 text-cyan-700 font-black"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        <span>Active Flashcards</span>
                      </button>

                      <button
                        onClick={() => {
                          onSelectView("periodic-table");
                          setIsToolsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center gap-2 transition-colors ${
                          currentView === "periodic-table"
                            ? "bg-cyan-50 text-cyan-700 font-black"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <Layers className="w-4 h-4 text-indigo-600" />
                        <span>Periodic Table (Light)</span>
                      </button>

                      <button
                        onClick={() => {
                          onSelectView("reactions");
                          setIsToolsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center gap-2 transition-colors ${
                          currentView === "reactions"
                            ? "bg-cyan-50 text-cyan-700 font-black"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <TestTubes className="w-4 h-4 text-amber-600" />
                        <span>Organic Reactions Map</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </nav>

            {/* Language Switcher Button & Dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200/80 text-slate-800 border border-slate-200 transition-all shadow-2xs"
                title="Select Language / Хэл сонгох (English / Монгол / Хосолсон)"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-600" />
                <span className="font-extrabold uppercase text-[11px]">
                  {language === "dual" ? "Dual (MN+EN)" : language.toUpperCase()}
                </span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {isLangDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 space-y-0.5">
                    <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                      Хэл / Language Mode
                    </div>

                    <button
                      onClick={() => {
                        setLanguage("dual");
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center justify-between transition-colors ${
                        language === "dual"
                          ? "bg-cyan-50 text-cyan-800 font-black"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🌐</span>
                        <div>
                          <div>Хосолсон (Bilingual)</div>
                          <div className="text-[10px] text-slate-500 font-normal">English + Монгол зэрэг</div>
                        </div>
                      </div>
                      {language === "dual" && <span className="text-cyan-600 font-bold">✓</span>}
                    </button>

                    <button
                      onClick={() => {
                        setLanguage("mn");
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center justify-between transition-colors ${
                        language === "mn"
                          ? "bg-cyan-50 text-cyan-800 font-black"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🇲🇳</span>
                        <div>
                          <div>Монгол хэл (MN)</div>
                          <div className="text-[10px] text-slate-500 font-normal">Зөвхөн монгол тайлбартай</div>
                        </div>
                      </div>
                      {language === "mn" && <span className="text-cyan-600 font-bold">✓</span>}
                    </button>

                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center justify-between transition-colors ${
                        language === "en"
                          ? "bg-cyan-50 text-cyan-800 font-black"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🇬🇧</span>
                        <div>
                          <div>English (EN)</div>
                          <div className="text-[10px] text-slate-500 font-normal">Official Cambridge format</div>
                        </div>
                      </div>
                      {language === "en" && <span className="text-cyan-600 font-bold">✓</span>}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="lg:hidden pb-3 pt-1">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search topics, reactions, formulas..."
              className="w-full bg-slate-100 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-cyan-600"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
