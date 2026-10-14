import { jsPDF } from "jspdf";
import { Chapter } from "../types";
import {
  FormulaCheatItem,
  ReagentCheatItem,
  QACheatItem,
} from "../data/revisionCheatSheets";

export interface PdfExportOptions {
  studentName?: string;
  examSeries?: string;
  langMode: "bilingual" | "en-only";
  includeLearningObjectives: boolean;
  includeSubtopics: boolean;
  includeKeyTerms: boolean;
  includeFormulas: boolean;
  includeExaminerTraps: boolean;
  includePersonalNotes: boolean;
  includePhysicalFormulasSheet: boolean;
  includeOrganicReagentsSheet: boolean;
  includeQaSheet: boolean;
}

/**
 * Generates and downloads a clean, professional PDF file using jsPDF.
 */
export async function generateAndDownloadPdf(
  selectedChapters: Chapter[],
  options: PdfExportOptions,
  personalNotes: Record<number, string> = {},
  physicalFormulas: FormulaCheatItem[] = [],
  organicReagents: ReagentCheatItem[] = [],
  qaItems: QACheatItem[] = []
): Promise<void> {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const primaryColor = [8, 145, 178]; // Cyan 600
  const darkNavy = [15, 23, 42]; // Slate 900
  const bodyColor = [51, 65, 85]; // Slate 700
  const grayBorder = [226, 232, 240]; // Slate 200
  const amberColor = [180, 83, 9]; // Amber 700
  const emeraldColor = [4, 120, 87]; // Emerald 700

  function checkPageBreak(requiredSpaceMm: number) {
    if (y + requiredSpaceMm > pageHeight - margin - 10) {
      doc.addPage();
      y = margin;
      drawPageDecorations();
    }
  }

  function drawPageDecorations() {
    // Top subtle bar
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, margin - 4, pageWidth - margin, margin - 4);

    // Running Header text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      "CAMBRIDGE 9701 CHEMISTRY • HIGH-YIELD REVISION PACK",
      margin,
      margin - 6
    );
    const dateStr = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    doc.text(dateStr, pageWidth - margin, margin - 6, { align: "right" });
  }

  // --- DOCUMENT COVER HEADER ---
  drawPageDecorations();

  // Main Header Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setLineWidth(0.6);
  doc.roundedRect(margin, y, contentWidth, 34, 3, 3, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text("Cambridge International AS & A Level Chemistry (9701)", margin + 5, y + 8);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("Official Syllabus Revision Summary & Exam Cheat Sheet", margin + 5, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
  const metaText = `Candidate: ${options.studentName || "Self-Study Student"}  •  Exam Series: ${options.examSeries || "2026/2027 Papers 1, 2, 4 & 5"}  •  Selected Chapters: ${selectedChapters.length}`;
  doc.text(metaText, margin + 5, y + 23);

  const filterSummary = `Mode: ${options.langMode === "bilingual" ? "Bilingual (EN/MN)" : "English Syllabus Standard"}  •  Total Modules Selected: ${selectedChapters.length + (options.includePhysicalFormulasSheet ? 1 : 0) + (options.includeOrganicReagentsSheet ? 1 : 0) + (options.includeQaSheet ? 1 : 0)}`;
  doc.text(filterSummary, margin + 5, y + 29);

  y += 40;

  // --- RENDER CHAPTERS ---
  selectedChapters.forEach((ch, chIdx) => {
    checkPageBreak(30);

    // Chapter Header Banner
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.5);
    doc.roundedRect(margin, y, contentWidth, 12, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    const chTitle = `Chapter ${ch.number}: ${ch.titleEn.toUpperCase()}`;
    doc.text(chTitle, margin + 4, y + 7.5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    const badgeText = `${ch.level} • ${ch.category}`;
    doc.text(badgeText, pageWidth - margin - 4, y + 7.5, { align: "right" });

    y += 16;

    // Overview Description
    if (ch.descriptionEn || ch.summaryEn) {
      checkPageBreak(15);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
      const desc = ch.descriptionEn || ch.summaryEn || "";
      const splitDesc = doc.splitTextToSize(desc, contentWidth - 4);
      doc.text(splitDesc, margin + 2, y);
      y += splitDesc.length * 4.2 + 3;
    }

    // 1. Learning Objectives Checklist
    if (
      options.includeLearningObjectives &&
      ch.learningIntentionsEn &&
      ch.learningIntentionsEn.length > 0
    ) {
      checkPageBreak(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text("Syllabus Learning Objectives Checklist:", margin + 2, y);
      y += 5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      ch.learningIntentionsEn.forEach((lo) => {
        checkPageBreak(8);
        doc.setDrawColor(148, 163, 184);
        doc.setLineWidth(0.3);
        doc.rect(margin + 2, y - 2.5, 3, 3); // Checkbox square

        doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
        const splitLo = doc.splitTextToSize(lo, contentWidth - 10);
        doc.text(splitLo, margin + 7, y);
        y += splitLo.length * 3.8 + 1.5;
      });
      y += 2;
    }

    // 2. Subtopic Summaries
    if (options.includeSubtopics && ch.subtopics && ch.subtopics.length > 0) {
      checkPageBreak(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text("Subtopic Summaries & Core Principles:", margin + 2, y);
      y += 5;

      ch.subtopics.forEach((sub, sIdx) => {
        checkPageBreak(18);
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(grayBorder[0], grayBorder[1], grayBorder[2]);
        doc.setLineWidth(0.3);

        const subHeading = `${sub.number || `${ch.number}.${sIdx + 1}`} ${sub.titleEn}`;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(subHeading, margin + 2, y);
        y += 4;

        if (sub.summaryEn) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(8);
          doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
          const splitSummary = doc.splitTextToSize(sub.summaryEn, contentWidth - 4);
          doc.text(splitSummary, margin + 4, y);
          y += splitSummary.length * 3.8 + 2;
        }

        if (sub.keyConcepts && sub.keyConcepts.length > 0) {
          checkPageBreak(10);
          doc.setFont("helvetica", "bold");
          doc.setFontSize(7.5);
          doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
          doc.text("Key Concepts: " + sub.keyConcepts.join(" • "), margin + 4, y);
          y += 4;
        }

        if (sub.keyEquations && sub.keyEquations.length > 0) {
          checkPageBreak(10);
          doc.setFont("courier", "bold");
          doc.setFontSize(8);
          doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
          sub.keyEquations.forEach((eq) => {
            doc.text(`Eq: ${eq}`, margin + 6, y);
            y += 3.8;
          });
          doc.setFont("helvetica", "normal");
        }

        y += 2;
      });
    }

    // 3. Key Definitions & Mark Scheme Criteria
    if (options.includeKeyTerms && ch.keyTerms && ch.keyTerms.length > 0) {
      checkPageBreak(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text("Cambridge Mark Scheme Definitions:", margin + 2, y);
      y += 5;

      ch.keyTerms.forEach((kt) => {
        checkPageBreak(12);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
        doc.text(`• ${kt.termEn}:`, margin + 3, y);

        const termWidth = doc.getTextWidth(`• ${kt.termEn}: `);
        const def = kt.defEn || kt.definitionEn || "";

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);

        const splitDef = doc.splitTextToSize(def, contentWidth - termWidth - 8);
        if (splitDef.length > 0) {
          doc.text(splitDef[0], margin + 3 + termWidth, y);
          if (splitDef.length > 1) {
            const remLines = splitDef.slice(1);
            doc.text(remLines, margin + 6, y + 3.8);
            y += (remLines.length + 1) * 3.8;
          } else {
            y += 4;
          }
        } else {
          y += 4;
        }
      });
      y += 2;
    }

    // 4. Mathematical Formulas
    if (options.includeFormulas && ch.formulas && ch.formulas.length > 0) {
      checkPageBreak(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text("Essential Formulas & Calculations:", margin + 2, y);
      y += 5;

      ch.formulas.forEach((f) => {
        checkPageBreak(12);
        doc.setFillColor(241, 245, 249);
        doc.setDrawColor(grayBorder[0], grayBorder[1], grayBorder[2]);
        doc.setLineWidth(0.3);
        doc.roundedRect(margin + 2, y - 2, contentWidth - 4, 8, 1, 1, "FD");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
        doc.text(f.nameEn, margin + 5, y + 2.5);

        doc.setFont("courier", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(f.formula, pageWidth - margin - 6, y + 2.5, { align: "right" });

        y += 9;
      });
      y += 2;
    }

    // 5. Common Examiner Traps
    if (
      options.includeExaminerTraps &&
      ch.examStyleTips &&
      ch.examStyleTips.length > 0
    ) {
      checkPageBreak(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(amberColor[0], amberColor[1], amberColor[2]);
      doc.text("⚠️ Common Examiner Traps & Mark Deductions:", margin + 2, y);
      y += 5;

      ch.examStyleTips.forEach((tip) => {
        checkPageBreak(10);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(amberColor[0], amberColor[1], amberColor[2]);
        const splitTip = doc.splitTextToSize(`• ${tip}`, contentWidth - 6);
        doc.text(splitTip, margin + 4, y);
        y += splitTip.length * 3.8 + 1.5;
      });
      y += 2;
    }

    // 6. Student Personal Notes
    if (
      options.includePersonalNotes &&
      personalNotes[ch.number] &&
      personalNotes[ch.number].trim()
    ) {
      checkPageBreak(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(emeraldColor[0], emeraldColor[1], emeraldColor[2]);
      doc.text("Candidate Personal Notes & Reminders:", margin + 2, y);
      y += 5;

      doc.setFillColor(240, 253, 244);
      doc.setDrawColor(187, 247, 208);
      doc.setLineWidth(0.3);

      const noteText = personalNotes[ch.number].trim();
      const splitNote = doc.splitTextToSize(noteText, contentWidth - 10);
      const boxHeight = splitNote.length * 3.8 + 4;

      doc.roundedRect(margin + 2, y - 2, contentWidth - 4, boxHeight, 1.5, 1.5, "FD");
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text(splitNote, margin + 5, y + 2);
      y += boxHeight + 4;
    }

    // Divider between chapters
    if (chIdx < selectedChapters.length - 1) {
      checkPageBreak(10);
      doc.setDrawColor(grayBorder[0], grayBorder[1], grayBorder[2]);
      doc.setLineWidth(0.4);
      doc.line(margin, y + 2, pageWidth - margin, y + 2);
      y += 8;
    }
  });

  // --- RENDER CHEAT SHEETS (IF SELECTED) ---

  // A. Physical Chemistry Formula Sheet
  if (options.includePhysicalFormulasSheet && physicalFormulas.length > 0) {
    checkPageBreak(40);
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.5);
    doc.roundedRect(margin, y, contentWidth, 12, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    doc.text("Physical Chemistry Formula Master Cheat Sheet", margin + 4, y + 7.5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${physicalFormulas.length} Formulas`, pageWidth - margin - 4, y + 7.5, {
      align: "right",
    });

    y += 16;

    physicalFormulas.forEach((item) => {
      checkPageBreak(25);
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(grayBorder[0], grayBorder[1], grayBorder[2]);
      doc.setLineWidth(0.3);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text(`${item.nameEn} (${item.topic} • ${item.level})`, margin + 2, y);

      doc.setFont("courier", "bold");
      doc.setFontSize(9);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(item.formula, pageWidth - margin - 4, y, { align: "right" });
      y += 4.5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
      const varStr = item.variables
        .map((v) => `${v.symbol}: ${v.meaning} [${v.unit}]`)
        .join(" | ");
      const splitVars = doc.splitTextToSize(varStr, contentWidth - 4);
      doc.text(splitVars, margin + 4, y);
      y += splitVars.length * 3.4 + 1.5;

      if (item.keyNotes) {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(7.5);
        const splitNotes = doc.splitTextToSize(`Note: ${item.keyNotes}`, contentWidth - 4);
        doc.text(splitNotes, margin + 4, y);
        y += splitNotes.length * 3.4 + 2;
      }
      y += 2;
    });
  }

  // B. Organic Reagents Master Sheet
  if (options.includeOrganicReagentsSheet && organicReagents.length > 0) {
    checkPageBreak(40);
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.5);
    doc.roundedRect(margin, y, contentWidth, 12, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    doc.text("Organic Synthetic Routes & Reagents Master Table", margin + 4, y + 7.5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${organicReagents.length} Routes`, pageWidth - margin - 4, y + 7.5, {
      align: "right",
    });

    y += 16;

    organicReagents.forEach((item) => {
      checkPageBreak(22);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(
        `${item.reactionType}: ${item.functionalGroup} → ${item.targetGroup}`,
        margin + 2,
        y
      );
      y += 4;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text(`Reagents: ${item.reagentsConditions}`, margin + 4, y);
      y += 4;

      doc.setFont("courier", "bold");
      doc.setFontSize(8);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text(`Eq: ${item.equationExample}`, margin + 4, y);
      y += 4;

      if (item.observationNote) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
        const splitObs = doc.splitTextToSize(
          `Obs: ${item.observationNote}`,
          contentWidth - 8
        );
        doc.text(splitObs, margin + 4, y);
        y += splitObs.length * 3.4 + 1.5;
      }

      if (item.examinerTrap) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        doc.setTextColor(amberColor[0], amberColor[1], amberColor[2]);
        const splitTrap = doc.splitTextToSize(
          `Trap: ${item.examinerTrap}`,
          contentWidth - 8
        );
        doc.text(splitTrap, margin + 4, y);
        y += splitTrap.length * 3.4 + 2;
      }
      y += 2;
    });
  }

  // C. QA & Ion Identification Sheet
  if (options.includeQaSheet && qaItems.length > 0) {
    checkPageBreak(40);
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.5);
    doc.roundedRect(margin, y, contentWidth, 12, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    doc.text("Qualitative Analysis (QA) & Ion Identification Reference", margin + 4, y + 7.5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${qaItems.length} Tests`, pageWidth - margin - 4, y + 7.5, {
      align: "right",
    });

    y += 16;

    qaItems.forEach((qa) => {
      checkPageBreak(18);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text(`${qa.ionName} [${qa.symbol}] (${qa.type})`, margin + 2, y);
      y += 4;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
      doc.text(`Test: ${qa.testWithReagent}`, margin + 4, y);
      y += 3.8;

      doc.setFont("helvetica", "bold");
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(`Obs: ${qa.observation}`, margin + 4, y);
      y += 3.8;

      doc.setFont("helvetica", "italic");
      doc.setFontSize(7.5);
      doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
      const splitConf = doc.splitTextToSize(
        `Explanation: ${qa.confirmatoryExplanation}`,
        contentWidth - 8
      );
      doc.text(splitConf, margin + 4, y);
      y += splitConf.length * 3.4 + 3;
    });
  }

  // --- FOOTER FOR ALL PAGES ---
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);

    doc.setDrawColor(grayBorder[0], grayBorder[1], grayBorder[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - margin + 3, pageWidth - margin, pageHeight - margin + 3);

    doc.text(
      "Cambridge 9701 AS & A Level Chemistry Revision Companion",
      margin,
      pageHeight - margin + 7
    );
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - margin + 7, {
      align: "right",
    });
  }

  // Download PDF
  const filename = `Cambridge_9701_Chemistry_Revision_Summary_${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(filename);
}

/**
 * Creates and opens a high-fidelity printable HTML document with @media print CSS for browser Print / Save to PDF.
 */
export function openPrintRevisionSummary(
  selectedChapters: Chapter[],
  options: PdfExportOptions,
  personalNotes: Record<number, string> = {},
  physicalFormulas: FormulaCheatItem[] = [],
  organicReagents: ReagentCheatItem[] = [],
  qaItems: QACheatItem[] = []
): void {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow popups to open the printable revision summary.");
    return;
  }

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cambridge 9701 Chemistry Revision Notes Summary</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;600&display=swap');
    
    @page {
      size: A4 portrait;
      margin: 14mm 14mm 16mm 14mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #1e293b;
      background: #ffffff;
      margin: 0;
      padding: 20px;
      font-size: 11pt;
      line-height: 1.5;
    }

    .no-print {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    .print-btn {
      background: #0891b2;
      color: #ffffff;
      border: none;
      padding: 8px 18px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
    }

    .print-btn:hover {
      background: #0e7490;
    }

    .header-box {
      border: 1.5px solid #0891b2;
      border-radius: 8px;
      padding: 14px 18px;
      background: #f8fafc;
      margin-bottom: 20px;
    }

    .header-box h1 {
      margin: 0 0 4px 0;
      font-size: 17pt;
      font-weight: 800;
      color: #0f172a;
    }

    .header-box h2 {
      margin: 0 0 8px 0;
      font-size: 12pt;
      font-weight: 700;
      color: #0891b2;
    }

    .meta-bar {
      font-size: 8.5pt;
      color: #475569;
      border-top: 1px solid #e2e8f0;
      padding-top: 6px;
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chapter-card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 20px;
      page-break-inside: avoid;
      break-inside: avoid;
      background: #ffffff;
    }

    .chapter-header {
      background: #f1f5f9;
      border-bottom: 1px solid #cbd5e1;
      padding: 10px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }

    .chapter-title {
      font-size: 12pt;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
    }

    .badge {
      background: #0891b2;
      color: #ffffff;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 8pt;
      font-weight: 700;
      text-transform: uppercase;
    }

    .chapter-body {
      padding: 12px 14px;
    }

    .section-title {
      font-size: 9.5pt;
      font-weight: 800;
      color: #0891b2;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 12px 0 6px 0;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
    }

    .checkbox-list {
      list-style: none;
      padding: 0;
      margin: 0 0 10px 0;
    }

    .checkbox-list li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 4px;
      font-size: 8.5pt;
      color: #334155;
    }

    .checkbox-list li::before {
      content: "☐";
      position: absolute;
      left: 0;
      top: -1px;
      font-size: 10pt;
      color: #64748b;
    }

    .subtopic-item {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 10px;
      margin-bottom: 8px;
      font-size: 8.5pt;
    }

    .subtopic-heading {
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .def-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-bottom: 8px;
    }

    .def-item {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 6px 8px;
      font-size: 8pt;
    }

    .def-term {
      font-weight: 700;
      color: #0891b2;
    }

    .formula-box {
      background: #f0fdfa;
      border: 1px solid #99f6e4;
      border-radius: 6px;
      padding: 6px 10px;
      font-family: 'Fira Code', monospace;
      font-size: 8.5pt;
      color: #0f766e;
      font-weight: 700;
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
    }

    .trap-box {
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-radius: 6px;
      padding: 8px 10px;
      color: #92400e;
      font-size: 8pt;
      margin-bottom: 8px;
    }

    .personal-note-box {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 8pt;
      font-style: italic;
      color: #166534;
      margin-bottom: 8px;
    }

    .cheat-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 8pt;
      margin-top: 6px;
      margin-bottom: 14px;
    }

    .cheat-table th, .cheat-table td {
      border: 1px solid #cbd5e1;
      padding: 6px 8px;
      text-align: left;
    }

    .cheat-table th {
      background: #f1f5f9;
      font-weight: 700;
      color: #0f172a;
    }

    @media print {
      body {
        padding: 0;
      }
      .no-print {
        display: none !important;
      }
      .chapter-card {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="no-print">
    <div>
      <strong>Printable Revision Pack Ready</strong> • Print directly or select "Save as PDF" in your print dialog.
    </div>
    <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
  </div>

  <div class="header-box">
    <h1>Cambridge International AS & A Level Chemistry (9701)</h1>
    <h2>Official Syllabus Revision Summary & Key Formula Sheet</h2>
    <div class="meta-bar">
      <span><strong>Candidate:</strong> ${options.studentName || "Self-Study Student"}</span>
      <span><strong>Exam Series:</strong> ${options.examSeries || "2026/2027 Papers 1, 2, 4 & 5"}</span>
      <span><strong>Selected Chapters:</strong> ${selectedChapters.length}</span>
      <span><strong>Generated:</strong> ${currentDate}</span>
    </div>
  </div>

  ${selectedChapters
    .map((ch) => {
      const personalNote = personalNotes[ch.number]?.trim();
      return `
    <div class="chapter-card">
      <div class="chapter-header">
        <h3 class="chapter-title">Chapter ${ch.number}: ${ch.titleEn}</h3>
        <span class="badge">${ch.level} • ${ch.category}</span>
      </div>
      <div class="chapter-body">
        ${
          ch.descriptionEn || ch.summaryEn
            ? `<p style="font-size: 8.5pt; color: #475569; margin: 0 0 10px 0; font-style: italic;">${ch.descriptionEn || ch.summaryEn}</p>`
            : ""
        }

        ${
          options.includeLearningObjectives &&
          ch.learningIntentionsEn &&
          ch.learningIntentionsEn.length > 0
            ? `
          <div class="section-title">Syllabus Learning Objectives Checklist</div>
          <ul class="checkbox-list">
            ${ch.learningIntentionsEn.map((lo) => `<li>${lo}</li>`).join("")}
          </ul>
        `
            : ""
        }

        ${
          options.includeSubtopics && ch.subtopics && ch.subtopics.length > 0
            ? `
          <div class="section-title">High-Yield Subtopic Summaries</div>
          ${ch.subtopics
            .map(
              (sub, sIdx) => `
            <div class="subtopic-item">
              <div class="subtopic-heading">${sub.number || `${ch.number}.${sIdx + 1}`} ${sub.titleEn}</div>
              ${sub.summaryEn ? `<div>${sub.summaryEn}</div>` : ""}
              ${
                sub.keyConcepts && sub.keyConcepts.length > 0
                  ? `<div style="color: #0891b2; font-size: 7.5pt; margin-top: 3px;"><strong>Key Concepts:</strong> ${sub.keyConcepts.join(" • ")}</div>`
                  : ""
              }
              ${
                sub.keyEquations && sub.keyEquations.length > 0
                  ? sub.keyEquations
                      .map(
                        (eq) =>
                          `<div style="font-family: 'Fira Code', monospace; font-size: 8pt; font-weight: 600; color: #0f172a; margin-top: 2px;">Eq: ${eq}</div>`
                      )
                      .join("")
                  : ""
              }
            </div>
          `
            )
            .join("")}
        `
            : ""
        }

        ${
          options.includeKeyTerms && ch.keyTerms && ch.keyTerms.length > 0
            ? `
          <div class="section-title">Cambridge Mark Scheme Definitions</div>
          <div class="def-grid">
            ${ch.keyTerms
              .map(
                (kt) => `
              <div class="def-item">
                <span class="def-term">${kt.termEn}:</span> ${kt.defEn || kt.definitionEn || ""}
              </div>
            `
              )
              .join("")}
          </div>
        `
            : ""
        }

        ${
          options.includeFormulas && ch.formulas && ch.formulas.length > 0
            ? `
          <div class="section-title">Mathematical Formulas & Calculations</div>
          ${ch.formulas
            .map(
              (f) => `
            <div class="formula-box">
              <span>${f.nameEn}</span>
              <span>${f.formula}</span>
            </div>
          `
            )
            .join("")}
        `
            : ""
        }

        ${
          options.includeExaminerTraps &&
          ch.examStyleTips &&
          ch.examStyleTips.length > 0
            ? `
          <div class="section-title" style="color: #b45309;">Examiner Traps & Common Pitfalls</div>
          <div class="trap-box">
            ${ch.examStyleTips.map((tip) => `<div>⚠️ ${tip}</div>`).join("")}
          </div>
        `
            : ""
        }

        ${
          options.includePersonalNotes && personalNote
            ? `
          <div class="section-title" style="color: #15803d;">My Personal Revision Notes</div>
          <div class="personal-note-box">
            ${personalNote.replace(/\n/g, "<br/>")}
          </div>
        `
            : ""
        }
      </div>
    </div>
    `;
    })
    .join("")}

  ${
    options.includePhysicalFormulasSheet && physicalFormulas.length > 0
      ? `
    <div class="chapter-card">
      <div class="chapter-header">
        <h3 class="chapter-title">Physical Chemistry Formula Master Cheat Sheet</h3>
        <span class="badge">Cheat Sheet</span>
      </div>
      <div class="chapter-body">
        <table class="cheat-table">
          <thead>
            <tr>
              <th>Topic / Level</th>
              <th>Formula Name</th>
              <th>Formula</th>
              <th>Variables & Units</th>
              <th>Key Note / Tip</th>
            </tr>
          </thead>
          <tbody>
            ${physicalFormulas
              .map(
                (f) => `
              <tr>
                <td><strong>${f.topic}</strong> (${f.level})</td>
                <td>${f.nameEn}</td>
                <td style="font-family: 'Fira Code', monospace; font-weight: 700; color: #0891b2;">${f.formula}</td>
                <td>${f.variables.map((v) => `${v.symbol}: ${v.meaning} [${v.unit}]`).join("<br/>")}</td>
                <td>${f.keyNotes} ${f.examinerTip ? `<br/><strong style="color: #b45309;">Tip:</strong> ${f.examinerTip}` : ""}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `
      : ""
  }

  ${
    options.includeOrganicReagentsSheet && organicReagents.length > 0
      ? `
    <div class="chapter-card">
      <div class="chapter-header">
        <h3 class="chapter-title">Organic Synthetic Routes & Reagents Master Table</h3>
        <span class="badge">Organic Sheet</span>
      </div>
      <div class="chapter-body">
        <table class="cheat-table">
          <thead>
            <tr>
              <th>From → To</th>
              <th>Reaction Type</th>
              <th>Reagents & Mandatory Conditions</th>
              <th>Equation Example</th>
              <th>Observation & Pitfall</th>
            </tr>
          </thead>
          <tbody>
            ${organicReagents
              .map(
                (r) => `
              <tr>
                <td><strong>${r.functionalGroup}</strong> → ${r.targetGroup}</td>
                <td><span class="badge" style="font-size: 7pt;">${r.reactionType}</span></td>
                <td><strong>${r.reagentsConditions}</strong></td>
                <td style="font-family: 'Fira Code', monospace; font-size: 7.5pt;">${r.equationExample}</td>
                <td>${r.observationNote} ${r.examinerTrap ? `<br/><span style="color: #b45309;">⚠️ ${r.examinerTrap}</span>` : ""}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `
      : ""
  }

  ${
    options.includeQaSheet && qaItems.length > 0
      ? `
    <div class="chapter-card">
      <div class="chapter-header">
        <h3 class="chapter-title">Qualitative Analysis (QA) & Practical Ion Identification</h3>
        <span class="badge">QA Sheet</span>
      </div>
      <div class="chapter-body">
        <table class="cheat-table">
          <thead>
            <tr>
              <th>Ion / Gas</th>
              <th>Test with Reagents</th>
              <th>Observation</th>
              <th>Chemical Explanation</th>
            </tr>
          </thead>
          <tbody>
            ${qaItems
              .map(
                (qa) => `
              <tr>
                <td><strong>${qa.ionName}</strong> (${qa.symbol})</td>
                <td>${qa.testWithReagent}</td>
                <td style="color: #0891b2; font-weight: 700;">${qa.observation}</td>
                <td>${qa.confirmatoryExplanation}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `
      : ""
  }

  <script>
    window.onload = function() {
      // Small timeout to ensure font loading before print dialog
      setTimeout(function() {
        window.print();
      }, 500);
    };
  </script>
</body>
</html>
`;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
