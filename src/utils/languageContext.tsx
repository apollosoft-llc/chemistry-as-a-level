import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageMode = "en" | "mn" | "dual";

export interface Translations {
  // Navigation & Branding
  brandTitle: string;
  brandSubtitle: string;
  searchPlaceholder: string;
  navChapters: string;
  navSyllabusGuide: string;
  navPastPapers: string;
  navCalculations: string;
  navQANotes: string;
  navRevision: string;
  navTools: string;
  navQuiz: string;
  navFlashcards: string;
  navPeriodicTable: string;
  navReactions: string;

  // Filters & General
  allTopics: string;
  allLevels: string;
  allAreas: string;
  asLevel: string;
  a2Level: string;
  physicalChem: string;
  inorganicChem: string;
  organicChem: string;
  analysisPractical: string;
  backToChapters: string;
  viewTheory: string;
  practiceProblems: string;
  viewSummary: string;
  keyTerms: string;
  subtopics: string;
  examQuestions: string;
  solutions: string;
  hideSolution: string;
  showSolution: string;
  examinerTips: string;

  // Calculations
  calcTitle: string;
  calcSubtitle: string;
  calcSolvedCount: string;
  calcQuickTools: string;
  calcWorkedSolution: string;
  calcPractice: string;
  calcCheckAnswer: string;
  calcRestart: string;
  calcHints: string;
  calcFinalAnswer: string;
  calcExaminerWarning: string;

  // Language switcher labels
  langEnglish: string;
  langMongolian: string;
  langDual: string;
}

const UI_TRANSLATIONS: Record<LanguageMode, Translations> = {
  en: {
    brandTitle: "Cambridge Chemistry",
    brandSubtitle: "9701 AS & A Level Syllabus Mastery",
    searchPlaceholder: "Search topics, formulas, reactions...",
    navChapters: "Chapters",
    navSyllabusGuide: "Syllabus Guide",
    navPastPapers: "Past Papers",
    navCalculations: "Calculations",
    navQANotes: "QA Notes",
    navRevision: "Revision Notes",
    navTools: "Study Tools",
    navQuiz: "Practice Quiz",
    navFlashcards: "Flashcards",
    navPeriodicTable: "Periodic Table",
    navReactions: "Reaction Pathways",

    allTopics: "All Topics",
    allLevels: "All Levels (AS & A2)",
    allAreas: "All Subject Areas",
    asLevel: "AS Level",
    a2Level: "A2 Level",
    physicalChem: "Physical Chemistry",
    inorganicChem: "Inorganic Chemistry",
    organicChem: "Organic Chemistry",
    analysisPractical: "Analysis & Practical",
    backToChapters: "Back to Chapters",
    viewTheory: "View Theory",
    practiceProblems: "Practice Problems",
    viewSummary: "Summary & Learning Intentions",
    keyTerms: "Key Terms & Definitions",
    subtopics: "Detailed Subtopics",
    examQuestions: "Exam-Style Questions",
    solutions: "Mark Scheme Solution",
    hideSolution: "Hide Solution",
    showSolution: "Show Model Answer",
    examinerTips: "Examiner Tip",

    calcTitle: "Quantitative Calculations & Problem Solving",
    calcSubtitle: "Curated from Cambridge Coursebooks, Workbooks & Past Papers (Easy • Medium • Hard)",
    calcSolvedCount: "Problems Solved",
    calcQuickTools: "Calculator & Units",
    calcWorkedSolution: "Worked Solution & Method",
    calcPractice: "Interactive Self-Practice",
    calcCheckAnswer: "Check Answer",
    calcRestart: "Reset",
    calcHints: "Hints & Guidance",
    calcFinalAnswer: "Final Answer",
    calcExaminerWarning: "Examiner Pitfall Warning",

    langEnglish: "English",
    langMongolian: "Монгол",
    langDual: "Dual (EN + MN)",
  },
  mn: {
    brandTitle: "Кембрижийн Хими",
    brandSubtitle: "9701 AS & A Level Хичээлийн Хөтөлбөр",
    searchPlaceholder: "Сэдэв, томьёо, урвал, бүлэг хайх...",
    navChapters: "Бүлгүүд",
    navSyllabusGuide: "Syllabus Хөтөч",
    navPastPapers: "Past Papers",
    navCalculations: "Тооцоот бодлого",
    navQANotes: "QA Notes",
    navRevision: "Бататгал хураангуй",
    navTools: "Хэрэгслүүд",
    navQuiz: "Оношилгоо тест",
    navFlashcards: "Флаш карт",
    navPeriodicTable: "Үелэх систем",
    navReactions: "Органик урвалын зураглал",

    allTopics: "Бүх сэдвүүд",
    allLevels: "Бүх түвшин (AS & A2)",
    allAreas: "Бүх салбар",
    asLevel: "AS Түвшин",
    a2Level: "A2 Түвшин",
    physicalChem: "Физик хими",
    inorganicChem: "Органик бус хими",
    organicChem: "Органик хими",
    analysisPractical: "Анализ ба Туршилт",
    backToChapters: "Бүлгүүдийн жагсаалт руу",
    viewTheory: "Онол үзэх",
    practiceProblems: "Бодлого бодох",
    viewSummary: "Хураангуй & Зорилго",
    keyTerms: "Түлхүүр нэр томьёо",
    subtopics: "Дэд сэдвүүд",
    examQuestions: "Шалгалтын загвар асуултууд",
    solutions: "Бодолт ба шалгуур",
    hideSolution: "Бодолтыг нуух",
    showSolution: "Бодолтыг харах",
    examinerTips: "Шалгагчийн зөвлөгөө",

    calcTitle: "Химийн Тооцоот Бодлого & Аргачлалын Сан",
    calcSubtitle: "Coursebook, Workbook болон Past Paper-үүдийн бодлогууд (Easy • Medium • Hard)",
    calcSolvedCount: "Бодсон тоо",
    calcQuickTools: "Тооцоолуур & Нэгж",
    calcWorkedSolution: "Алхамт бодолт & Аргачлал",
    calcPractice: "Бие дааж бодох & Шалгах",
    calcCheckAnswer: "Бодолтоо шалгах",
    calcRestart: "Дахин эхлэх",
    calcHints: "Тусламж & Зөвлөмжүүд",
    calcFinalAnswer: "Эцсийн хариу",
    calcExaminerWarning: "Шалгуулагчдын гаргадаг түгээмэл алдаа",

    langEnglish: "English",
    langMongolian: "Монгол",
    langDual: "Хосолсон (MN + EN)",
  },
  dual: {
    brandTitle: "Cambridge Chemistry • Кембрижийн Хими",
    brandSubtitle: "9701 AS & A Level Syllabus Mastery • Хөтөлбөрийн Сан",
    searchPlaceholder: "Search topics, formulas, reactions • Сэдэв, томьёо хайх...",
    navChapters: "Chapters • Бүлгүүд",
    navSyllabusGuide: "Syllabus Guide • Хөтөч",
    navPastPapers: "Past Papers",
    navCalculations: "Calculations • Бодлого",
    navQANotes: "QA Notes • Лавлах",
    navRevision: "Revision • Хураангуй",
    navTools: "Tools • Хэрэгслүүд",
    navQuiz: "Quiz • Тест",
    navFlashcards: "Flashcards • Карт",
    navPeriodicTable: "Periodic Table • Үелэх систем",
    navReactions: "Reactions • Органик урвал",

    allTopics: "All Topics • Бүх сэдэв",
    allLevels: "All Levels (AS & A2) • Бүх түвшин",
    allAreas: "All Subject Areas • Бүх салбар",
    asLevel: "AS Level • AS Түвшин",
    a2Level: "A2 Level • A2 Түвшин",
    physicalChem: "Physical Chemistry • Физик хими",
    inorganicChem: "Inorganic Chemistry • Органик бус хими",
    organicChem: "Organic Chemistry • Органик хими",
    analysisPractical: "Analysis & Practical • Анализ ба Туршилт",
    backToChapters: "← Back to Chapters • Бүлгүүд рүү буцах",
    viewTheory: "View Theory • Онол үзэх",
    practiceProblems: "Calculations • Тооцоот бодлого",
    viewSummary: "Summary & Intentions • Хураангуй",
    keyTerms: "Key Terms • Түлхүүр үгс",
    subtopics: "Subtopics • Дэд сэдвүүд",
    examQuestions: "Exam Questions • Шалгалтын асуулт",
    solutions: "Mark Scheme & Solution • Бодолт",
    hideSolution: "Hide Solution • Нуух",
    showSolution: "Show Solution • Бодолтыг харах",
    examinerTips: "Examiner Tip • Шалгагчийн зөвлөмж",

    calcTitle: "Quantitative Calculations • Тооцоот Бодлогын Сан",
    calcSubtitle: "Cambridge Coursebook, Workbook & Past Papers (Easy • Medium • Hard)",
    calcSolvedCount: "Solved • Бодсон",
    calcQuickTools: "Calculator & Units • Тооцоолуур",
    calcWorkedSolution: "Worked Solution • Алхамт бодолт",
    calcPractice: "Interactive Practice • Бие дааж бодох",
    calcCheckAnswer: "Check Answer • Шалгах",
    calcRestart: "Reset • Дахин эхлэх",
    calcHints: "Hints • Зөвлөмжүүд",
    calcFinalAnswer: "Final Answer • Эцсийн хариу",
    calcExaminerWarning: "Examiner Warning • Анхаарах алдаа",

    langEnglish: "English",
    langMongolian: "Монгол",
    langDual: "Хосолсон (Dual)",
  },
};

interface LanguageContextType {
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
  t: Translations;
  getText: (enText?: string, mnText?: string) => string;
  renderBilingual: (enText?: string, mnText?: string, classNameEn?: string, classNameMn?: string) => React.ReactNode;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "dual",
  setLanguage: () => {},
  t: UI_TRANSLATIONS.dual,
  getText: (en, mn) => mn || en || "",
  renderBilingual: () => null,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageMode>(() => {
    const saved = localStorage.getItem("cambridge_chem_lang") as LanguageMode;
    return saved === "en" || saved === "mn" || saved === "dual" ? saved : "dual";
  });

  const setLanguage = (lang: LanguageMode) => {
    setLanguageState(lang);
    localStorage.setItem("cambridge_chem_lang", lang);
  };

  const t = UI_TRANSLATIONS[language];

  const getText = (enText?: string, mnText?: string): string => {
    if (language === "en") return enText || mnText || "";
    if (language === "mn") return mnText || enText || "";
    if (!enText && !mnText) return "";
    if (enText && mnText && enText !== mnText) {
      return `${enText} (${mnText})`;
    }
    return mnText || enText || "";
  };

  const renderBilingual = (
    enText?: string,
    mnText?: string,
    classNameEn = "font-bold text-slate-900",
    classNameMn = "text-slate-600 text-xs"
  ): React.ReactNode => {
    if (language === "en") {
      return <span className={classNameEn}>{enText || mnText}</span>;
    }
    if (language === "mn") {
      return <span className={classNameEn}>{mnText || enText}</span>;
    }
    // Dual mode
    if (!mnText || enText === mnText) {
      return <span className={classNameEn}>{enText}</span>;
    }
    return (
      <div className="flex flex-col gap-0.5">
        <span className={classNameEn}>{enText}</span>
        <span className={classNameMn}>{mnText}</span>
      </div>
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getText, renderBilingual }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
