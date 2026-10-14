import React, { useState } from "react";
import { ALL_CHAPTERS } from "./data/chaptersIndex";
import { Chapter, ViewMode } from "./types";
import { Header } from "./components/Header";
import { ChapterListView } from "./components/ChapterListView";
import { ChapterDetailView } from "./components/ChapterDetailView";
import { PeriodicTableExplorer } from "./components/PeriodicTableExplorer";
import { ReactionPathwayMap } from "./components/ReactionPathwayMap";
import { FlashcardStudyModule } from "./components/FlashcardStudyModule";
import { QuizModule } from "./components/QuizModule";
import { RevisionNotesModule } from "./components/RevisionNotesModule";
import { PastPapersModule } from "./components/PastPapersModule";
import { QualitativeAnalysisNotes } from "./components/QualitativeAnalysisNotes";
import { CalculationMasteryModule } from "./components/CalculationMasteryModule";
import { TestMakerModule } from "./components/TestMakerModule";
import { CommandWordsAndTermsModule } from "./components/CommandWordsAndTermsModule";
import { LanguageProvider } from "./utils/languageContext";

export function AppContent() {
  const [currentView, setCurrentView] = useState<ViewMode>("chapters");
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [targetFlashcardChapter, setTargetFlashcardChapter] = useState<number | undefined>(undefined);
  const [targetQuizChapter, setTargetQuizChapter] = useState<number | undefined>(undefined);
  const [targetRevisionChapter, setTargetRevisionChapter] = useState<number | undefined>(undefined);
  const [targetPastPaperId, setTargetPastPaperId] = useState<string | undefined>(undefined);
  const [targetCalculationTopic, setTargetCalculationTopic] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setCurrentView("chapter-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHeaderSelectView = (view: ViewMode) => {
    setCurrentView(view);
    if (view === "chapters") {
      setSelectedChapter(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenFlashcards = (chapterNum?: number) => {
    setTargetFlashcardChapter(chapterNum);
    setCurrentView("flashcards");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenQuiz = (chapterNum?: number) => {
    setTargetQuizChapter(chapterNum);
    setCurrentView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenRevision = (chapterNum?: number) => {
    setTargetRevisionChapter(chapterNum);
    setCurrentView("revision");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenPastPapers = (paperId?: string) => {
    setTargetPastPaperId(paperId);
    setCurrentView("past-papers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenQualitativeNotes = () => {
    setCurrentView("qualitative-notes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCalculations = (topicId?: string) => {
    setTargetCalculationTopic(topicId);
    setCurrentView("calculations");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-cyan-200 selection:text-cyan-950">
      {/* Global Header */}
      <Header
        currentView={currentView}
        onSelectView={handleHeaderSelectView}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentView === "chapters" && (
          <ChapterListView
            chapters={ALL_CHAPTERS}
            onSelectChapter={handleSelectChapter}
            onNavigateToRevision={(chNum) => handleOpenRevision(chNum)}
            searchQuery={searchQuery}
          />
        )}

        {currentView === "chapter-detail" && selectedChapter && (
          <ChapterDetailView
            chapter={selectedChapter}
            onBack={() => {
              setCurrentView("chapters");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenFlashcards={() => handleOpenFlashcards(selectedChapter.number)}
            onOpenQuiz={() => handleOpenQuiz(selectedChapter.number)}
            onOpenRevision={() => handleOpenRevision(selectedChapter.number)}
            onOpenPastPapers={(paperId) => handleOpenPastPapers(paperId)}
            onOpenQualitativeNotes={handleOpenQualitativeNotes}
            onOpenCalculations={() => handleOpenCalculations()}
          />
        )}

        {currentView === "qualitative-notes" && (
          <QualitativeAnalysisNotes
            onNavigateToChapter={(chNum) => {
              const ch = ALL_CHAPTERS.find((c) => c.number === chNum);
              if (ch) handleSelectChapter(ch);
            }}
            onNavigateToPaper={(paperId) => handleOpenPastPapers(paperId)}
          />
        )}

        {currentView === "past-papers" && (
          <PastPapersModule
            initialPaperId={targetPastPaperId}
            onNavigateToChapter={(ch) => {
              if (typeof ch === "number") {
                const target = ALL_CHAPTERS.find((c) => c.number === ch);
                if (target) handleSelectChapter(target);
              } else {
                handleSelectChapter(ch);
              }
            }}
            onNavigateToRevision={(chNum) => handleOpenRevision(chNum)}
            onNavigateToQualitative={handleOpenQualitativeNotes}
          />
        )}

        {currentView === "revision" && (
          <RevisionNotesModule
            key={targetRevisionChapter ? `rev-ch-${targetRevisionChapter}` : "rev-all"}
            initialChapterNum={targetRevisionChapter}
            onNavigateToChapter={handleSelectChapter}
            onNavigateToQuiz={(chNum) => handleOpenQuiz(chNum)}
            onNavigateToFlashcards={(chNum) => handleOpenFlashcards(chNum)}
          />
        )}

        {currentView === "quiz" && (
          <QuizModule
            initialChapterNum={targetQuizChapter}
            onNavigateToFlashcards={(chNum) => handleOpenFlashcards(chNum)}
            onNavigateToChapter={handleSelectChapter}
            onNavigateToRevision={(chNum) => handleOpenRevision(chNum)}
            onNavigateToPastPapers={() => handleOpenPastPapers()}
          />
        )}

        {currentView === "flashcards" && (
          <FlashcardStudyModule
            key={targetFlashcardChapter ? `fc-ch-${targetFlashcardChapter}` : "fc-all"}
            initialChapterNum={targetFlashcardChapter}
            onNavigateToChapter={handleSelectChapter}
            onNavigateToQuiz={(chNum) => handleOpenQuiz(chNum)}
            onNavigateToRevision={(chNum) => handleOpenRevision(chNum)}
          />
        )}

        {currentView === "calculations" && (
          <CalculationMasteryModule
            initialTopicId={targetCalculationTopic}
            onNavigateToChapter={(chNum) => {
              const ch = ALL_CHAPTERS.find((c) => c.number === chNum);
              if (ch) handleSelectChapter(ch);
            }}
            onNavigateToPastPaper={(paperId) => handleOpenPastPapers(paperId)}
          />
        )}

        {currentView === "test-maker" && (
          <TestMakerModule
            onNavigateToChapter={handleSelectChapter}
            onNavigateToPastPapers={() => handleOpenPastPapers()}
          />
        )}

        {currentView === "command-words" && (
          <CommandWordsAndTermsModule />
        )}

        {currentView === "periodic-table" && (
          <PeriodicTableExplorer />
        )}

        {currentView === "reactions" && (
          <ReactionPathwayMap />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-semibold text-slate-700">
            Cambridge International AS & A Level Chemistry (9701) Learning System
          </p>
          <p className="text-slate-500">
            Complete 32 Syllabus Chapters • High-Yield Revision Notes • Diagnostic Quizzes • Active Recall Flashcards • Periodic Trends • Organic Pathways
          </p>
        </div>
      </footer>
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

