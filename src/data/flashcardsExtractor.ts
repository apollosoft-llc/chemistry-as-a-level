import { FlashcardItem, Chapter } from "../types";
import { ALL_CHAPTERS } from "./chaptersIndex";

/**
 * Extracts and synthesizes flashcards from the syllabus chapters data
 */
export function extractFlashcardsFromChapters(chapters: Chapter[] = ALL_CHAPTERS): FlashcardItem[] {
  const flashcards: FlashcardItem[] = [];

  chapters.forEach((chapter) => {
    // 1. Extract from keyTerms
    if (chapter.keyTerms && chapter.keyTerms.length > 0) {
      chapter.keyTerms.forEach((kt, idx) => {
        const def = kt.definitionEn || kt.defEn || "";
        if (kt.termEn && def) {
          // Identify key highlight keywords often tested in mark schemes
          const keywords = extractMarkSchemeKeywords(kt.termEn, def);
          
          flashcards.push({
            id: `fc-term-${chapter.number}-${idx + 1}`,
            term: kt.termEn.trim(),
            definition: def.trim(),
            chapterNumber: chapter.number,
            chapterTitle: chapter.titleEn,
            level: chapter.level,
            category: chapter.category,
            keyKeywords: keywords,
            examinerNote: chapter.examStyleTips && chapter.examStyleTips.length > 0 ? chapter.examStyleTips[idx % chapter.examStyleTips.length] : undefined,
          });
        }
      });
    }

    // 2. Extract key formulas as formula flashcards
    if (chapter.formulas && chapter.formulas.length > 0) {
      chapter.formulas.forEach((form, fIdx) => {
        if (form.nameEn && form.formula) {
          flashcards.push({
            id: `fc-form-${chapter.number}-${fIdx + 1}`,
            term: `${form.nameEn} (Formula)`,
            definition: `${form.formula} — ${form.note || "Key quantitative relationship required in Cambridge 9701 calculations."}`,
            chapterNumber: chapter.number,
            chapterTitle: chapter.titleEn,
            level: chapter.level,
            category: chapter.category,
            formula: form.formula,
            keyKeywords: [form.formula, form.nameEn],
            examinerNote: form.note,
          });
        }
      });
    }
  });

  return flashcards;
}

/**
 * Extract key marking keywords (e.g., standard conditions, 1 mole, gaseous atoms)
 */
function extractMarkSchemeKeywords(term: string, def: string): string[] {
  const commonCambridgeKeywords = [
    "1 mole",
    "one mole",
    "gaseous atoms",
    "gaseous ions",
    "standard conditions",
    "298 K",
    "100 kPa",
    "1 atm",
    "standard states",
    "weighted average",
    "1/12th",
    "carbon-12",
    "simplest whole number ratio",
    "lone pair",
    "electronegativity",
    "coordinate bond",
    "dative covalent",
    "delocalised electrons",
    "activation energy",
    "rate-determining step",
    "dynamic equilibrium",
    "homogeneous",
    "heterogeneous",
    "conjugate acid-base pair",
    "buffer solution",
    "standard electrode potential",
    "transition element",
    "ligand",
    "complex ion",
    "electrophile",
    "nucleophile",
    "free radical",
    "homolytic fission",
    "heterolytic fission",
    "chiral centre",
    "enantiomer",
    "carbocation",
    "inversion of configuration",
    "Markovnikov",
    "hydration",
    "hydrolysis",
    "condensation",
  ];

  const matched = commonCambridgeKeywords.filter((kw) =>
    def.toLowerCase().includes(kw.toLowerCase()) || term.toLowerCase().includes(kw.toLowerCase())
  );

  return matched;
}

export const ALL_FLASHCARDS: FlashcardItem[] = extractFlashcardsFromChapters(ALL_CHAPTERS);
