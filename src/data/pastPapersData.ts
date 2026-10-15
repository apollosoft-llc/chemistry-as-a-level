import { PastPaper } from "../types";
import { PAPERS_2024_2026 } from "./pastPapers2024_2026";
import { PAPERS_2020_2023 } from "./pastPapers2020_2023";
import { PAPERS_2017_2019 } from "./pastPapers2017_2019";
import { getOfficialCambridgeUrls } from "../utils/cambridgeUrls";

const RAW_PAPERS: PastPaper[] = [
  ...PAPERS_2024_2026,
  ...PAPERS_2020_2023,
  ...PAPERS_2017_2019,
];

// Automatically enrich every paper with verified official Cambridge QP & MS URLs
export const PAST_PAPERS: PastPaper[] = RAW_PAPERS.map((paper) => {
  const urls = getOfficialCambridgeUrls(
    paper.paperCode,
    paper.year,
    paper.series,
    paper.variant
  );
  return {
    ...paper,
    qpUrl: paper.qpUrl || urls.qpUrl,
    msUrl: paper.msUrl || urls.msUrl,
    gtUrl: paper.gtUrl || urls.gradeThresholdsUrl,
  };
});

export function getPastPapersByType(paperType?: "Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5"): PastPaper[] {
  if (!paperType) return PAST_PAPERS;
  return PAST_PAPERS.filter((p) => p.paperType === paperType);
}

export function getPastPaperById(id: string): PastPaper | undefined {
  return PAST_PAPERS.find((p) => p.id === id);
}

export function getPastPapersByYear(year: number | string): PastPaper[] {
  if (year === "ALL") return PAST_PAPERS;
  return PAST_PAPERS.filter((p) => p.year.toString() === year.toString() || p.series === year);
}
