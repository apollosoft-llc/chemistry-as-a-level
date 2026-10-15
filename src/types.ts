export type LevelType = "ALL" | "AS" | "A2";
export type Language = "mn" | "en";
export type ViewMode = "chapters" | "chapter-detail" | "syllabus-guide" | "periodic-table" | "reactions" | "flashcards" | "quiz" | "revision" | "past-papers" | "qualitative-notes" | "calculations" | "test-maker" | "command-words";

export type ProblemDifficulty = "Easy" | "Medium" | "Hard";
export type ProblemSource = "Coursebook" | "Workbook" | "Past Paper";

export interface CalculationStrategy {
  formula: string;
  roadmap: string[];
  roadmapMn: string[];
  unitTips: string[];
  examinerPitfall: string;
  examinerPitfallMn: string;
}

export interface CalculationStep {
  stepNumber: number;
  title: string;
  titleMn: string;
  calculation: string;
  explanation: string;
  explanationMn: string;
  markSchemePoint?: string;
}

export interface CalculationWorkedSolution {
  steps: CalculationStep[];
  finalAnswer: string;
  finalAnswerUnit: string;
  significantFiguresNote: string;
}

export interface PracticeVariant {
  questionText: string;
  questionTextMn: string;
  correctNumericValue: number;
  tolerancePercentage?: number;
  acceptedAnswers?: string[];
  unit: string;
  hint1: string;
  hint1Mn: string;
  hint2: string;
  hint2Mn: string;
  solutionSteps: string[];
  solutionStepsMn: string[];
  finalAnswerFormatted: string;
}

export interface QuantitativeProblem {
  id: string;
  topicId: string;
  topicNameEn: string;
  topicNameMn: string;
  chapterNumber: number;
  chapterTitle: string;
  level: "AS" | "A2";
  difficulty: ProblemDifficulty;
  source: ProblemSource;
  sourceDetails: string;
  title: string;
  titleMn: string;
  questionText: string;
  questionTextMn: string;
  givenData: { label: string; value: string; symbol?: string }[];
  targetToFind: string;
  targetToFindMn: string;
  strategyGuide: CalculationStrategy;
  workedSolution: CalculationWorkedSolution;
  practiceVariant: PracticeVariant;
}

export interface CalculationTopic {
  id: string;
  titleEn: string;
  titleMn: string;
  category: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  level: "AS" | "A2" | "ALL";
  chapters: number[];
  icon: string;
  summaryMn: string;
  summaryEn: string;
  formulas: {
    nameEn: string;
    nameMn: string;
    formula: string;
    variables: { symbol: string; meaning: string; unit: string }[];
    notes?: string;
  }[];
}

export interface PastPaperMCQQuestion {
  id: string;
  questionNumber: number;
  chapterNumber: number;
  chapterTitle: string;
  topicCategory: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  syllabusRef?: string;
  questionText: string;
  questionTextMn?: string;
  diagramText?: string;
  chemicalEquation?: string;
  options: [string, string, string, string];
  correctOptionIndex: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanationEn: string;
  explanationMn?: string;
  examinerTip?: string;
  difficulty?: "Fundamental" | "Standard" | "Challenging";
}

export interface PastPaperTheoryPart {
  partLabel: string; // e.g. "(a)(i)", "(a)(ii)", "(b)"
  subQuestionText: string;
  subQuestionTextMn?: string;
  marks: number;
  markScheme: string[];
  modelAnswer: string;
  modelAnswerMn?: string;
  examinerNotes?: string;
  commonPitfalls?: string[];
  suggestedKeywords?: string[];
}

export interface PastPaperTheoryQuestion {
  id: string;
  questionNumber: number;
  title: string;
  chapterNumber: number;
  chapterTitle: string;
  topicCategory: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  contextPrompt: string;
  contextPromptMn?: string;
  diagramText?: string;
  totalMarks: number;
  parts: PastPaperTheoryPart[];
}

export interface PastPaper {
  id: string;
  title: string;
  paperType: "Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5";
  year: number;
  series: "May/June" | "Oct/Nov" | "Specimen" | "Feb/March";
  variant: string; // e.g. "12", "22", "31", "42", "52", "Specimen"
  paperCode: string; // e.g. "9701/12/M/J/24"
  timeAllowedMinutes: number; // 75 mins, 120 mins
  totalMarks: number; // 40 for P1, 60 for P2, 40 for P3, 100 for P4, 30 for P5
  gradeThresholds: {
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
  };
  description: string;
  descriptionMn?: string;
  mcqQuestions?: PastPaperMCQQuestion[];
  theoryQuestions?: PastPaperTheoryQuestion[];
  practicalMaterials?: {
    apparatusList?: string[];
    reagentsList?: string[];
    qualitativeNotesIncluded?: boolean;
    safetyPrecautions?: string[];
  };
}

export interface FlashcardItem {
  id: string;
  term: string;
  definition: string;
  chapterNumber: number;
  chapterTitle: string;
  level: "AS" | "A2";
  category: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  keyKeywords?: string[];
  formula?: string;
  examinerNote?: string;
}

export interface SubTopic {
  id: string;
  number?: string;
  titleEn: string;
  titleMn: string;
  summaryEn?: string;
  summaryMn?: string;
  keyConcepts?: string[];
  keyConceptEn?: string;
  keyConceptMn?: string;
  formulas?: string[];
  keyEquations?: string[];
  commonPitfalls?: string[];
  examinerTips?: string[];
}

export type Subtopic = SubTopic;

export interface KeyTerm {
  termEn: string;
  termMn: string;
  defEn?: string;
  defMn?: string;
  definitionEn?: string;
  definitionMn?: string;
}

export interface ExamQuestion {
  id: string;
  marks?: number;
  questionEn: string;
  questionMn?: string;
  solutionEn: string;
  solutionMn?: string;
  examinerTip?: string;
}

export interface Chapter {
  id?: number;
  number: number;
  level: "AS" | "A2";
  category: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  titleEn: string;
  titleMn: string;
  summaryEn?: string;
  summaryMn?: string;
  descriptionEn?: string;
  descriptionMn?: string;
  learningIntentionsEn?: string[];
  learningIntentionsMn?: string[];
  subtopics: SubTopic[];
  keyTerms: KeyTerm[];
  syllabusRef?: string;
  examPapers?: ("Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5")[];
  formulas?: { nameEn: string; nameMn: string; formula: string; note: string }[];
  examStyleTips?: string[];
  examQuestions?: ExamQuestion[];
}

export interface SyllabusLearningOutcome {
  code: string;
  outcomeEn: string;
  outcomeMn: string;
}

export interface SyllabusTopic {
  id: string;
  topicNumber: number | string;
  level: "AS" | "A2";
  pillar: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  titleEn: string;
  titleMn: string;
  syllabusCodes: string[];
  correspondingChapterNumbers: number[];
  examPapers: ("Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5")[];
  learningOutcomes: SyllabusLearningOutcome[];
  examFocusNotesEn: string;
  examFocusNotesMn: string;
  keyFormulas?: string[];
  practicalSkillsLinked?: string[];
  calculationTopicId?: string;
}

export interface SyllabusPaperSpec {
  paperNumber: "Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5";
  titleEn: string;
  titleMn: string;
  durationMinutes: number;
  totalMarks: number;
  weightingAS?: string;
  weightingALevel: string;
  formatEn: string;
  formatMn: string;
  testedSyllabusRange: string;
  testedSyllabusRangeMn: string;
  equipmentRulesEn: string;
  equipmentRulesMn: string;
  topStrategyTipsEn: string[];
  topStrategyTipsMn: string[];
}

export type ElementCategory =
  | "alkali"
  | "alkaline-earth"
  | "transition"
  | "post-transition"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide"
  | "unknown";

export interface ElementData {
  number: number;
  symbol: string;
  nameEn: string;
  nameMn: string;
  period: number;
  group: number;
  block: "s" | "p" | "d" | "f";
  category?: ElementCategory;
  atomicMass: number;
  electronConfig: string;
  atomicRadius?: number; // in nm
  ionicRadius?: number; // in nm
  commonIon?: string;
  firstIonisationEnergy?: number; // in kJ/mol
  electronegativity?: number;
  meltingPointK?: number;
  boilingPointK?: number;
  meltingPointC?: number;
  boilingPointC?: number;
  electricalConductivity?: string;
  color?: string;
  stateAt298K?: "solid" | "liquid" | "gas" | "unknown";
  flameColor?: string;
  description: string;
}

export interface OrganicReaction {
  id: string;
  fromGroup: string;
  toGroup: string;
  reactionType: "Addition" | "Substitution" | "Elimination" | "Oxidation" | "Reduction" | "Hydrolysis" | "Condensation" | "Free-Radical";
  reagents: string;
  conditions: string;
  mechanismName?: string;
  equationExample: string;
  notes: string;
  notesMn: string;
}

export interface QAReaction {
  ion: string;
  nameEn: string;
  nameMn: string;
  type: "cation" | "anion" | "gas";
  reagents: {
    reagent: string;
    observationFewDrops: string;
    observationExcess?: string;
    equation?: string;
  }[];
  confirmatoryTest?: string;
}

export interface QuizQuestion {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  level: "AS" | "A2";
  paper: "Paper 1 (MCQ)" | "Paper 2 (AS Theory)" | "Paper 4 (A2 Theory)" | "Paper 5 (Planning)";
  questionText: string;
  questionTextMn?: string;
  options?: string[];
  correctAnswer: string;
  markScheme: string[];
  explanationEn: string;
  explanationMn: string;
  examinerTip?: string;
}
