// Cambridge 9701 Past Papers Canonical Web URL Generator

export interface OfficialPaperLinks {
  qpUrl: string;
  msUrl: string;
  qpViewerUrl: string;
  msViewerUrl: string;
  gradeThresholdsUrl?: string;
}

export function getOfficialCambridgeUrls(paperCode: string, year: number, series: string, variant: string): OfficialPaperLinks {
  // If specimen 2026
  if (series === "Specimen" || year === 2026) {
    const specNum = variant === "1" || variant === "12" ? "1" : variant === "2" || variant === "22" ? "2" : variant === "4" || variant === "42" ? "4" : "5";
    const cambridgeIds: Record<string, { qp: number; ms: number }> = {
      "1": { qp: 664444, ms: 664445 },
      "2": { qp: 664446, ms: 664447 },
      "4": { qp: 664450, ms: 664451 },
      "5": { qp: 664452, ms: 664453 },
    };
    const cId = cambridgeIds[specNum] || { qp: 664444, ms: 664445 };

    return {
      qpUrl: `https://www.cambridgeinternational.org/Images/${cId.qp}-2026-specimen-paper-${specNum}.pdf`,
      msUrl: `https://www.cambridgeinternational.org/Images/${cId.ms}-2026-specimen-markscheme-${specNum}.pdf`,
      qpViewerUrl: `https://www.cambridgeinternational.org/Images/${cId.qp}-2026-specimen-paper-${specNum}.pdf`,
      msViewerUrl: `https://www.cambridgeinternational.org/Images/${cId.ms}-2026-specimen-markscheme-${specNum}.pdf`,
      gradeThresholdsUrl: `https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-chemistry-9701/`,
    };
  }

  // Determine series prefix
  // Feb/March -> m
  // May/June -> s
  // Oct/Nov -> w
  let sPrefix = "s";
  if (series.toLowerCase().includes("march") || series.toLowerCase().includes("feb") || series.toLowerCase().includes("spring")) {
    sPrefix = "m";
  } else if (series.toLowerCase().includes("oct") || series.toLowerCase().includes("nov") || series.toLowerCase().includes("winter")) {
    sPrefix = "w";
  }

  const shortYr = String(year).slice(-2);
  const cleanVariant = variant.replace(/[^\d]/g, "") || "12";
  const fileCodeQP = `9701_${sPrefix}${shortYr}_qp_${cleanVariant}`;
  const fileCodeMS = `9701_${sPrefix}${shortYr}_ms_${cleanVariant}`;

  // Standard GCE Guide archive URL for PDF direct download
  const gceGuideBase = `https://papers.gceguide.com/A%20Levels/Chemistry%20(9701)/${year}`;
  const bestExamHelpBase = `https://bestexamhelp.com/exam/cambridge-international-a-level/chemistry-9701/${year}`;

  return {
    qpUrl: `${gceGuideBase}/${fileCodeQP}.pdf`,
    msUrl: `${gceGuideBase}/${fileCodeMS}.pdf`,
    qpViewerUrl: `${bestExamHelpBase}/${fileCodeQP}.php`,
    msViewerUrl: `${bestExamHelpBase}/${fileCodeMS}.php`,
    gradeThresholdsUrl: `${gceGuideBase}/9701_${sPrefix}${shortYr}_gt.pdf`,
  };
}
