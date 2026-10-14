import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Layers,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Shuffle,
  Filter,
  Sparkles,
  BookOpen,
  Eye,
  EyeOff,
  Check,
  Search,
  Volume2,
  Award,
  ArrowRight,
  SlidersHorizontal,
  GraduationCap,
  Bookmark,
  Keyboard,
  ListFilter,
  Target,
} from "lucide-react";
import { ALL_FLASHCARDS } from "../data/flashcardsExtractor";
import { FlashcardItem, Chapter } from "../types";
import { ALL_CHAPTERS } from "../data/chaptersIndex";

type StudyMode = "flip" | "reverse" | "type-in" | "quiz" | "browse";
type CardStatus = "unseen" | "learning" | "mastered";

interface FlashcardStudyModuleProps {
  onNavigateToChapter?: (chapter: Chapter) => void;
  onNavigateToQuiz?: (chapterNum?: number) => void;
  onNavigateToRevision?: (chapterNum?: number) => void;
  initialChapterNum?: number;
}

export const FlashcardStudyModule: React.FC<FlashcardStudyModuleProps> = ({
  onNavigateToChapter,
  onNavigateToQuiz,
  onNavigateToRevision,
  initialChapterNum,
}) => {
  // Filters
  const [selectedLevel, setSelectedLevel] = useState<"ALL" | "AS" | "A2">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedChapterNum, setSelectedChapterNum] = useState<number | "ALL">(
    initialChapterNum || "ALL"
  );
  const [statusFilter, setStatusFilter] = useState<"ALL" | "starred" | "learning" | "mastered">("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Study Mode
  const [studyMode, setStudyMode] = useState<StudyMode>("flip");

  // State for deck & navigation
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);

  // Type-in state
  const [typeInput, setTypeInput] = useState<string>("");
  const [hasCheckedType, setHasCheckedType] = useState<boolean>(false);

  // Quiz state
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState<boolean>(false);

  // Persistence for mastery and starred cards
  const [masteryMap, setMasteryMap] = useState<Record<string, CardStatus>>(() => {
    try {
      const saved = localStorage.getItem("cambridge_9701_flashcards_mastery");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [starredSet, setStarredSet] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("cambridge_9701_flashcards_starred");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cambridge_9701_flashcards_mastery", JSON.stringify(masteryMap));
    } catch (e) {
      console.error(e);
    }
  }, [masteryMap]);

  useEffect(() => {
    try {
      localStorage.setItem("cambridge_9701_flashcards_starred", JSON.stringify(Array.from(starredSet)));
    } catch (e) {
      console.error(e);
    }
  }, [starredSet]);

  // Filtered Deck
  const filteredCards = useMemo(() => {
    let cards = [...ALL_FLASHCARDS];

    if (selectedLevel !== "ALL") {
      cards = cards.filter((c) => c.level === selectedLevel);
    }
    if (selectedCategory !== "ALL") {
      cards = cards.filter((c) => c.category === selectedCategory);
    }
    if (selectedChapterNum !== "ALL") {
      cards = cards.filter((c) => c.chapterNumber === selectedChapterNum);
    }
    if (statusFilter === "starred") {
      cards = cards.filter((c) => starredSet.has(c.id));
    } else if (statusFilter === "learning") {
      cards = cards.filter((c) => masteryMap[c.id] === "learning");
    } else if (statusFilter === "mastered") {
      cards = cards.filter((c) => masteryMap[c.id] === "mastered");
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      cards = cards.filter(
        (c) =>
          c.term.toLowerCase().includes(q) ||
          c.definition.toLowerCase().includes(q) ||
          c.chapterTitle.toLowerCase().includes(q) ||
          (c.formula && c.formula.toLowerCase().includes(q))
      );
    }

    if (isShuffled) {
      // Deterministic or pseudorandom shuffle based on flag
      return [...cards].sort(() => Math.sin(cards.length) - 0.5);
    }

    return cards;
  }, [selectedLevel, selectedCategory, selectedChapterNum, statusFilter, searchQuery, isShuffled, starredSet, masteryMap]);

  // Ensure cardIndex is within bounds
  useEffect(() => {
    if (cardIndex >= filteredCards.length) {
      setCardIndex(0);
    }
    setIsFlipped(false);
    setTypeInput("");
    setHasCheckedType(false);
    setSelectedQuizOption(null);
    setIsQuizAnswered(false);
  }, [filteredCards.length, cardIndex, studyMode]);

  const currentCard: FlashcardItem | undefined = filteredCards[cardIndex];

  // Current Card Mastery
  const currentStatus: CardStatus = currentCard ? masteryMap[currentCard.id] || "unseen" : "unseen";
  const isCurrentStarred = currentCard ? starredSet.has(currentCard.id) : false;

  // Deck Statistics
  const stats = useMemo(() => {
    let mastered = 0;
    let learning = 0;
    let unseen = 0;
    let starred = 0;

    filteredCards.forEach((c) => {
      const st = masteryMap[c.id] || "unseen";
      if (st === "mastered") mastered++;
      else if (st === "learning") learning++;
      else unseen++;

      if (starredSet.has(c.id)) starred++;
    });

    const total = filteredCards.length;
    const progressPercent = total > 0 ? Math.round((mastered / total) * 100) : 0;

    return { total, mastered, learning, unseen, starred, progressPercent };
  }, [filteredCards, masteryMap, starredSet]);

  // Action handlers
  const handleToggleStar = (cardId: string) => {
    setStarredSet((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  const handleSetMastery = useCallback((status: CardStatus) => {
    if (!currentCard) return;
    setMasteryMap((prev) => ({
      ...prev,
      [currentCard.id]: status,
    }));

    // Auto advance to next card after brief delay if mastered or learning
    if (cardIndex < filteredCards.length - 1) {
      setTimeout(() => {
        setCardIndex((prev) => prev + 1);
        setIsFlipped(false);
        setTypeInput("");
        setHasCheckedType(false);
        setSelectedQuizOption(null);
        setIsQuizAnswered(false);
      }, 250);
    }
  }, [currentCard, cardIndex, filteredCards.length]);

  const handleNext = useCallback(() => {
    if (cardIndex < filteredCards.length - 1) {
      setCardIndex((prev) => prev + 1);
      setIsFlipped(false);
      setTypeInput("");
      setHasCheckedType(false);
      setSelectedQuizOption(null);
      setIsQuizAnswered(false);
    }
  }, [cardIndex, filteredCards.length]);

  const handlePrev = useCallback(() => {
    if (cardIndex > 0) {
      setCardIndex((prev) => prev - 1);
      setIsFlipped(false);
      setTypeInput("");
      setHasCheckedType(false);
      setSelectedQuizOption(null);
      setIsQuizAnswered(false);
    }
  }, [cardIndex]);

  const handleShuffle = () => {
    setIsShuffled((prev) => !prev);
    setCardIndex(0);
    setIsFlipped(false);
  };

  const handleResetProgress = () => {
    if (window.confirm("Reset mastery progress for this filtered deck?")) {
      const updated = { ...masteryMap };
      filteredCards.forEach((c) => {
        delete updated[c.id];
      });
      setMasteryMap(updated);
      setCardIndex(0);
      setIsFlipped(false);
    }
  };

  // Generate 4 multiple choice options for quiz mode
  const quizOptions = useMemo(() => {
    if (!currentCard || studyMode !== "quiz") return [];
    
    // Pick 3 random wrong terms from other cards in the same level/category or total pool
    const pool = ALL_FLASHCARDS.filter((c) => c.id !== currentCard.id);
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const distractors = shuffledPool.slice(0, 3).map((c) => c.term);
    
    const allChoices = [currentCard.term, ...distractors].sort(() => 0.5 - Math.random());
    return allChoices;
  }, [currentCard, studyMode, cardIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in search or type-in input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        if (e.key === "Enter" && studyMode === "type-in" && !hasCheckedType) {
          setHasCheckedType(true);
        }
        return;
      }

      if (e.code === "Space") {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "1") {
        handleSetMastery("learning");
      } else if (e.key === "2") {
        handleSetMastery("learning");
      } else if (e.key === "3") {
        handleSetMastery("mastered");
      } else if (e.key === "s" || e.key === "S") {
        if (currentCard) handleToggleStar(currentCard.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, handleSetMastery, currentCard, studyMode, hasCheckedType]);

  // Highlight key marking keywords inside definition text
  const renderHighlightedDefinition = (text: string, keywords: string[] = []) => {
    if (!keywords || keywords.length === 0) return <span>{text}</span>;

    // Create a regex to match all keywords case-insensitively
    const escaped = keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    if (!escaped) return <span>{text}</span>;

    const regex = new RegExp(`(${escaped})`, "gi");
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, i) => {
          const isMatch = keywords.some((k) => k.toLowerCase() === part.toLowerCase());
          return isMatch ? (
            <span
              key={i}
              className="bg-cyan-100 text-cyan-900 font-semibold px-1 py-0.5 rounded border border-cyan-300 underline decoration-cyan-500/50"
              title="Cambridge Key Marking Scheme Term"
            >
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-white via-cyan-50/50 to-indigo-50/40 border border-cyan-200/80 p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
              Active Recall & Cambridge Mark Scheme Mastery
            </div>
            <h1 className="text-2xl font-black text-slate-900">
              Syllabus Flashcard Study Module
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Master definitions, key quantitative relationships, and examiner mark scheme keywords pulled directly from all 32 Cambridge 9701 AS & A Level chapters.
            </p>
          </div>

          {/* Quick Deck Stats Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-4 shrink-0 shadow-2xs">
            <div className="text-center">
              <div className="text-xl font-extrabold text-cyan-700">{stats.total}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500">Total Cards</div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-extrabold text-emerald-600">{stats.mastered}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500">Mastered</div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-extrabold text-amber-600">{stats.learning}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500">Review</div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-extrabold text-indigo-600">{stats.progressPercent}%</div>
              <div className="text-[10px] uppercase font-bold text-slate-500">Progress</div>
            </div>
          </div>
        </div>

        {/* Pre-Flashcard Knowledge Check Prompt */}
        {onNavigateToQuiz && (
          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs bg-white/80 p-3 rounded-xl border border-cyan-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
              <span className="text-slate-700">
                Want to test your knowledge first before active recall? Take the{" "}
                <strong className="text-cyan-800 font-semibold">Multiple-Choice Pre-Test</strong> to diagnose weak chapters.
              </span>
            </div>
            <button
              onClick={() => onNavigateToQuiz(selectedChapterNum === "ALL" ? undefined : selectedChapterNum)}
              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-2xs transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>Take Pre-Check Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Control & Filter Toolbar */}
      <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-4 shadow-2xs">
        {/* Top row: Study Mode Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setStudyMode("flip")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                studyMode === "flip"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Term → Definition</span>
            </button>

            <button
              onClick={() => setStudyMode("reverse")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                studyMode === "reverse"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Definition → Term</span>
            </button>

            <button
              onClick={() => setStudyMode("type-in")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                studyMode === "type-in"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span>Type Recall</span>
            </button>

            <button
              onClick={() => setStudyMode("quiz")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                studyMode === "quiz"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Quiz Drill</span>
            </button>

            <button
              onClick={() => setStudyMode("browse")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                studyMode === "browse"
                  ? "bg-cyan-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Browse All ({filteredCards.length})</span>
            </button>
          </div>

          {/* Quick Deck Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShuffle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isShuffled
                  ? "bg-indigo-50 border-indigo-300 text-indigo-800"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
              title="Shuffle card order"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{isShuffled ? "Shuffled" : "Shuffle"}</span>
            </button>

            <button
              onClick={handleResetProgress}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-all"
              title="Reset progress for this filtered deck"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Reset Deck</span>
            </button>
          </div>
        </div>

        {/* Filters row: Level, Category, Chapter, Starred */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {/* Level Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Syllabus Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => {
                setSelectedLevel(e.target.value as "ALL" | "AS" | "A2");
                setCardIndex(0);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-cyan-600 font-medium"
            >
              <option value="ALL">All Levels (AS & A2)</option>
              <option value="AS">AS Level Only (Chapters 1-18)</option>
              <option value="A2">A2 Level Only (Chapters 19-32)</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Chemistry Branch
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCardIndex(0);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-cyan-600 font-medium"
            >
              <option value="ALL">All Branches</option>
              <option value="Physical">Physical Chemistry</option>
              <option value="Inorganic">Inorganic Chemistry</option>
              <option value="Organic">Organic Chemistry</option>
              <option value="Analysis">Analysis & Spectroscopy</option>
              <option value="Practical">Practical & Advanced</option>
            </select>
          </div>

          {/* Chapter Selector */}
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Specific Chapter
            </label>
            <select
              value={selectedChapterNum}
              onChange={(e) => {
                const val = e.target.value === "ALL" ? "ALL" : Number(e.target.value);
                setSelectedChapterNum(val);
                setCardIndex(0);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-cyan-600 font-medium truncate"
            >
              <option value="ALL">All 32 Chapters</option>
              {ALL_CHAPTERS.map((ch) => (
                <option key={ch.number} value={ch.number}>
                  Ch {ch.number}: {ch.titleEn} ({ch.level})
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Card Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as any);
                setCardIndex(0);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-cyan-600 font-medium"
            >
              <option value="ALL">All Cards</option>
              <option value="starred">⭐ Starred / Bookmarked ({stats.starred})</option>
              <option value="learning">🔴 Needs Review ({stats.learning})</option>
              <option value="mastered">🟢 Mastered ({stats.mastered})</option>
            </select>
          </div>
        </div>

        {/* Search within flashcards */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCardIndex(0);
            }}
            placeholder="Search key terms, definitions, equations, or concepts (e.g. Hess, Markovnikov, Buffer, Ligand)..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-600"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Flashcard Interactive Stage */}
      {filteredCards.length === 0 ? (
        <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center space-y-4 shadow-2xs">
          <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">No flashcards found</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            No terms match the selected filters or search query. Try clearing the search bar or choosing "All Chapters".
          </p>
          <button
            onClick={() => {
              setSelectedLevel("ALL");
              setSelectedCategory("ALL");
              setSelectedChapterNum("ALL");
              setStatusFilter("ALL");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-2xs transition-all"
          >
            Reset All Filters
          </button>
        </div>
      ) : studyMode === "browse" ? (
        /* ================= BROWSE ALL DECK GLOSSARY VIEW ================= */
        <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-600" />
              <span>Full Glossary & Definitions Table ({filteredCards.length} terms)</span>
            </h3>
            <span className="text-xs text-slate-500">Click a star to bookmark for revision</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCards.map((card) => {
              const isStarred = starredSet.has(card.id);
              const cardStatus = masteryMap[card.id] || "unseen";

              return (
                <div
                  key={card.id}
                  className="bg-slate-50/70 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-300 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-200">
                          Ch {card.chapterNumber} • {card.level}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          {card.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            cardStatus === "mastered"
                              ? "bg-emerald-500"
                              : cardStatus === "learning"
                              ? "bg-amber-500"
                              : "bg-slate-300"
                          }`}
                          title={`Status: ${cardStatus}`}
                        />
                        <button
                          onClick={() => handleToggleStar(card.id)}
                          className={`p-1 rounded transition-colors ${
                            isStarred
                              ? "text-amber-500 hover:text-amber-600"
                              : "text-slate-400 hover:text-slate-600"
                          }`}
                        >
                          <Star className={`w-4 h-4 ${isStarred ? "fill-current" : ""}`} />
                        </button>
                      </div>
                    </div>

                    <h4 className="text-base font-black text-slate-900">{card.term}</h4>

                    <div className="text-xs text-slate-700 leading-relaxed">
                      {renderHighlightedDefinition(card.definition, card.keyKeywords)}
                    </div>

                    {card.formula && (
                      <div className="bg-white px-3 py-1.5 rounded font-mono text-xs text-emerald-700 border border-slate-200">
                        {card.formula}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{card.chapterTitle}</span>
                    <button
                      onClick={() => {
                        const idx = filteredCards.findIndex((c) => c.id === card.id);
                        if (idx !== -1) {
                          setCardIndex(idx);
                          setStudyMode("flip");
                        }
                      }}
                      className="text-cyan-700 hover:underline font-semibold"
                    >
                      Practice Card →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ================= ACTIVE STUDY MODES (FLIP / REVERSE / TYPE / QUIZ) ================= */
        <div className="space-y-4">
          {/* Card Navigation & Tracker Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm">
                Card {cardIndex + 1} of {filteredCards.length}
              </span>
              <span className="text-slate-300">•</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                Ch {currentCard?.chapterNumber}: {currentCard?.chapterTitle}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-500">Mastery:</span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded ${
                    currentStatus === "mastered"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                      : currentStatus === "learning"
                      ? "bg-amber-100 text-amber-800 border border-amber-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {currentStatus === "mastered" ? "Mastered" : currentStatus === "learning" ? "Needs Review" : "Unseen"}
                </span>
              </div>

              {currentCard && (
                <button
                  onClick={() => handleToggleStar(currentCard.id)}
                  className={`p-1.5 rounded-lg border transition-all ${
                    isCurrentStarred
                      ? "bg-amber-100 border-amber-300 text-amber-600"
                      : "bg-white border-slate-200 text-slate-400 hover:text-slate-700"
                  }`}
                  title="Bookmark / Star Card (Key shortcut: S)"
                >
                  <Star className={`w-4 h-4 ${isCurrentStarred ? "fill-current" : ""}`} />
                </button>
              )}
            </div>
          </div>

          {/* The Flashcard Box */}
          {currentCard && (
            <div className="relative min-h-[340px] sm:min-h-[380px] rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Background watermark badge */}
              <div className="absolute right-6 top-6 opacity-[0.03] pointer-events-none select-none text-8xl font-black text-slate-900">
                9701
              </div>

              {/* Card Meta Header */}
              <div className="flex items-center justify-between gap-2 z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 text-[11px] font-bold">
                    Chapter {currentCard.chapterNumber} • {currentCard.level}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
                    {currentCard.category}
                  </span>
                </div>

                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  {studyMode === "flip" && "Term → Definition"}
                  {studyMode === "reverse" && "Definition → Term"}
                  {studyMode === "type-in" && "Interactive Active Recall"}
                  {studyMode === "quiz" && "4-Choice Drill"}
                </span>
              </div>

              {/* CARD BODY BASED ON STUDY MODE */}
              <div className="my-auto py-6 z-10">
                {studyMode === "flip" && (
                  <div
                    onClick={() => setIsFlipped((prev) => !prev)}
                    className="cursor-pointer space-y-4 group select-none"
                  >
                    {!isFlipped ? (
                      <div className="space-y-4 text-center py-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                          Define this Cambridge 9701 Term / Concept:
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                          {currentCard.term}
                        </h2>
                        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-500 group-hover:text-slate-700">
                          <RotateCw className="w-4 h-4 animate-pulse text-cyan-600" />
                          <span>Click card or press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-300 font-mono text-[10px] text-slate-700">Space</kbd> to reveal definition</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 py-2 animate-fadeIn">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                            Rigorous Cambridge Mark Scheme Definition:
                          </span>
                          <span className="text-xs font-bold text-slate-600">{currentCard.term}</span>
                        </div>

                        <div className="text-base sm:text-xl text-slate-900 font-medium leading-relaxed">
                          {renderHighlightedDefinition(currentCard.definition, currentCard.keyKeywords)}
                        </div>

                        {currentCard.formula && (
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-sm text-emerald-800 font-bold">
                            {currentCard.formula}
                          </div>
                        )}

                        {currentCard.examinerNote && (
                          <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 space-y-1">
                            <span className="font-bold text-amber-800 block uppercase tracking-wider text-[10px]">
                              Examiner Marking Tip:
                            </span>
                            <p>{currentCard.examinerNote}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {studyMode === "reverse" && (
                  <div
                    onClick={() => setIsFlipped((prev) => !prev)}
                    className="cursor-pointer space-y-4 group select-none"
                  >
                    {!isFlipped ? (
                      <div className="space-y-4 py-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 block text-center">
                          Which Cambridge Chemistry Term matches this definition?
                        </span>
                        <div className="text-base sm:text-xl text-slate-900 font-medium leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200">
                          {currentCard.definition}
                        </div>
                        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 group-hover:text-slate-700">
                          <RotateCw className="w-4 h-4 text-cyan-600" />
                          <span>Click to reveal chemical term & marking notes</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 text-center py-2 animate-fadeIn">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                          Identified Term / Concept:
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                          {currentCard.term}
                        </h2>
                        <div className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                          {renderHighlightedDefinition(currentCard.definition, currentCard.keyKeywords)}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {studyMode === "type-in" && (
                  <div className="space-y-5">
                    <div className="space-y-1 text-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                        Active Recall Practice
                      </span>
                      <h3 className="text-2xl font-black text-slate-900">{currentCard.term}</h3>
                      <p className="text-xs text-slate-500">
                        Type the definition, key keywords, or formula for this concept below:
                      </p>
                    </div>

                    <div className="space-y-3">
                      <textarea
                        value={typeInput}
                        onChange={(e) => setTypeInput(e.target.value)}
                        placeholder="Type definition or keywords (e.g., standard conditions, 1 mole, gaseous atoms)..."
                        rows={3}
                        disabled={hasCheckedType}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                      />

                      {!hasCheckedType ? (
                        <button
                          onClick={() => setHasCheckedType(true)}
                          disabled={!typeInput.trim()}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 text-white font-bold text-xs shadow-2xs transition-all"
                        >
                          Check Answer & Compare with Mark Scheme
                        </button>
                      ) : (
                        <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 animate-fadeIn">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                              Cambridge Model Mark Scheme:
                            </span>
                            <span className="text-xs text-slate-500">Rate your recall accuracy below</span>
                          </div>
                          <div className="text-sm text-slate-900 leading-relaxed font-medium">
                            {renderHighlightedDefinition(currentCard.definition, currentCard.keyKeywords)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {studyMode === "quiz" && (
                  <div className="space-y-5">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                        Select the correct term for this definition:
                      </span>
                      <div className="text-sm sm:text-base text-slate-900 font-medium bg-slate-50 p-4 rounded-xl border border-slate-200">
                        {currentCard.definition}
                      </div>
                    </div>

                    {/* 4 Choices */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {quizOptions.map((option, optIdx) => {
                        const isSelected = selectedQuizOption === option;
                        const isCorrect = option === currentCard.term;

                        let btnStyle = "bg-white border-slate-200 text-slate-800 hover:bg-slate-50";
                        if (isQuizAnswered) {
                          if (isCorrect) {
                            btnStyle = "bg-emerald-50 border-emerald-300 text-emerald-950 shadow-2xs";
                          } else if (isSelected && !isCorrect) {
                            btnStyle = "bg-rose-50 border-rose-300 text-rose-950";
                          } else {
                            btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isQuizAnswered}
                            onClick={() => {
                              setSelectedQuizOption(option);
                              setIsQuizAnswered(true);
                              if (option === currentCard.term) {
                                handleSetMastery("mastered");
                              } else {
                                handleSetMastery("learning");
                              }
                            }}
                            className={`p-3.5 rounded-xl border text-left font-bold text-xs sm:text-sm flex items-center justify-between transition-all ${btnStyle}`}
                          >
                            <span>{option}</span>
                            {isQuizAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                            {isQuizAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* CARD FOOTER: Active Recall Grading Buttons & Nav Controls */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
                {/* Arrow Nav Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={cardIndex === 0}
                    className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 disabled:opacity-40 transition-all"
                    title="Previous Card (Key: Left Arrow)"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono text-slate-600 px-2">
                    {cardIndex + 1} / {filteredCards.length}
                  </span>

                  <button
                    onClick={handleNext}
                    disabled={cardIndex === filteredCards.length - 1}
                    className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 disabled:opacity-40 transition-all"
                    title="Next Card (Key: Right Arrow)"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Self-Rating / Mastery Feedback */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                  <button
                    onClick={() => handleSetMastery("learning")}
                    className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                      currentStatus === "learning"
                        ? "bg-rose-100 border-rose-300 text-rose-800"
                        : "bg-white border-slate-200 text-slate-700 hover:border-rose-300 hover:text-rose-700"
                    }`}
                    title="Mark as Hard / Needs Practice (Shortcut: 1)"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Hard / Review</span>
                    <span className="text-[10px] text-slate-400 font-mono hidden md:inline">(1)</span>
                  </button>

                  <button
                    onClick={() => handleSetMastery("learning")}
                    className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold border bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:text-amber-700 transition-all flex items-center justify-center gap-1.5"
                    title="Mark as Good (Shortcut: 2)"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Good</span>
                    <span className="text-[10px] text-slate-400 font-mono hidden md:inline">(2)</span>
                  </button>

                  <button
                    onClick={() => handleSetMastery("mastered")}
                    className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                      currentStatus === "mastered"
                        ? "bg-emerald-100 border-emerald-300 text-emerald-800 shadow-2xs"
                        : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-700"
                    }`}
                    title="Mark as Mastered (Shortcut: 3)"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Mastered</span>
                    <span className="text-[10px] text-slate-400 font-mono hidden md:inline">(3)</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Keyboard Navigation Cheatsheet */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 pt-2">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-700">Space</kbd> Flip
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-700">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-700">→</kbd> Prev / Next
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-700">1</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-700">2</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-700">3</kbd> Rate Mastery
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-700">S</kbd> Star Card
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
