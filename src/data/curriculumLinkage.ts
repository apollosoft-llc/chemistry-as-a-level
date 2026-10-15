export interface LinkageItem {
  id: string;
  titleEn: string;
  titleMn: string;
  description: string;
  type: "theory" | "practical" | "paper";
  targetChapterNumber?: number;
  targetPaperId?: string;
  targetPaperType?: "Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5";
  targetQuestionId?: string;
  targetPracticalTestId?: string;
  badge: string;
}

export interface ChapterLinkage {
  chapterNumber: number;
  chapterTitle: string;
  category: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  syllabusRef?: string;
  coreCalculationTopicId?: string;
  practicalExperiments: {
    testId: string;
    nameEn: string;
    nameMn: string;
    summary: string;
    reagents: string;
    videoQuery: string;
  }[];
  relatedExamPapers: {
    paperId: string;
    paperType: "Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5";
    paperTitle: string;
    yearSeries: string;
    questionNumber: string;
    topicFocus: string;
  }[];
  examTips: string[];
}

export const CHAPTER_LINKAGES: Record<number, ChapterLinkage> = {
  1: {
    chapterNumber: 1,
    chapterTitle: "Atomic Structure",
    category: "Physical",
    syllabusRef: "Syllabus 1.1, 1.2 (Topic 1)",
    practicalExperiments: [
      {
        testId: "flame-test",
        nameEn: "Flame Emission Spectroscopy & Electronic Transitions",
        nameMn: "Дөлний өнгөөр металл таних сорил (Электрон шилжилт)",
        summary: "Ground state electrons excited by heat emit discrete characteristic photons upon relaxation.",
        reagents: "Nichrome wire, conc. HCl, Bunsen flame (Li⁺ red, Na⁺ yellow, K⁺ lilac, Cu²⁺ blue-green)",
        videoQuery: "flame test flame emission spectroscopy 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q1 & Q2",
        topicFocus: "Subatomic particles, mass/charge ratio, and mass spectrometry peaks.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q1(a)-(c)",
        topicFocus: "Behavior of subatomic particles in electric fields and calculating isotopic abundance.",
      },
    ],
    examTips: [
      "In electric deflection questions, mention both direction (attracted to opposite plate) and magnitude (electrons deflect far more than protons due to 1/1836 mass).",
      "Isotopes possess identical chemical properties because they have the exact same electron configuration.",
    ],
  },
  2: {
    chapterNumber: 2,
    chapterTitle: "Electrons in Atoms",
    category: "Physical",
    syllabusRef: "Syllabus 1.3, 1.4 (Topic 1)",
    practicalExperiments: [
      {
        testId: "emission-spectra",
        nameEn: "Atomic Emission Spectra & Line Frequency Determination",
        nameMn: "Атомын цацралын шугаман спектр ба давтамж тодорхойлох",
        summary: "Observation of hydrogen Balmer series emission lines demonstrating quantised electron energy levels (ΔE = hf).",
        reagents: "Hydrogen discharge tube, diffraction grating spectrometer, high voltage power source",
        videoQuery: "atomic emission spectrum hydrogen lines 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q3 & Q4",
        topicFocus: "Successive ionisation energies & electronic configurations (1s² 2s² 2p⁶...)",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q1(d)-(f)",
        topicFocus: "Subshell energy levels, anomalous drops at Group 13 and Group 16 due to spin-pair repulsion.",
      },
    ],
    examTips: [
      "Always state that ionisation energy involves gaseous atoms: X(g) → X⁺(g) + e⁻. State symbols are compulsory!",
      "Large jump in successive I.E. identifies valence electrons and the Periodic Table group.",
      "Transition metals lose 4s electrons BEFORE 3d electrons when forming cations.",
    ],
  },
  3: {
    chapterNumber: 3,
    chapterTitle: "Atoms, Molecules & Stoichiometry",
    category: "Physical",
    syllabusRef: "Syllabus 2.1, 2.2, 2.3 (Topic 2)",
    coreCalculationTopicId: "mole-stoichiometry",
    practicalExperiments: [
      {
        testId: "titration-acid-base",
        nameEn: "Acid-Base Volumetric Titration",
        nameMn: "Хүчил-суурийн эзлэхүүний титрлэлт (Концентраци тодорхойлох)",
        summary: "Standard solution preparation and accurate titre determination (concordant within 0.10 cm³).",
        reagents: "Burette, volumetric pipette, methyl orange / phenolphthalein indicator",
        videoQuery: "acid base titration cambridge 9701 paper 3 practical",
      },
      {
        testId: "gas-collection-moles",
        nameEn: "Gas Syringe Molar Volume Determination",
        nameMn: "Хийн эзлэхүүн ба молийн масс тодорхойлох сорил",
        summary: "Measurement of gas evolved (CO₂, H₂) to deduce stoichiometry and Mr of metal/carbonate.",
        reagents: "Conical flask, delivery tube, gas syringe (24.0 dm³/mol at r.t.p.)",
        videoQuery: "molar gas volume practical gas syringe 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_31",
        paperType: "Paper 3",
        paperTitle: "May/June 2024 P31 Practical",
        yearSeries: "2024 s31",
        questionNumber: "Question 1",
        topicFocus: "Standardisation of sodium thiosulfate with potassium iodate(V) titration.",
      },
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q5 & Q6",
        topicFocus: "Empirical formula and percentage yield calculations.",
      },
    ],
    examTips: [
      "In Paper 3, record all burette readings to 2 decimal places ending in .00 or .05 cm³.",
      "Concordant titres must be within 0.10 cm³ of each other. Never average the rough titre.",
      "Convert cm³ to dm³ by dividing by 1000 in concentration calculations.",
    ],
  },
  4: {
    chapterNumber: 4,
    chapterTitle: "Chemical Bonding & Shapes of Molecules",
    category: "Physical",
    syllabusRef: "Syllabus 3.1–3.6 (Topic 3)",
    practicalExperiments: [
      {
        testId: "bonding-conductivity",
        nameEn: "Electrical Conductivity of Molten vs Solid Salts & Covalent Liquids",
        nameMn: "Хайлмаг болон хатуу давс, ковалент шингэний цахилгаан дамжуулалт",
        summary: "Demonstrates mobile ions in molten/aqueous state vs localized electrons in simple covalent molecules.",
        reagents: "Conductivity apparatus, NaCl(s), NaCl(aq), wax, ethanol, graphite electrodes",
        videoQuery: "electrical conductivity ionic covalent substances chemistry practical",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q7 & Q8",
        topicFocus: "VSEPR shapes, lone pair repulsion, and permanent dipole moments.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q2(a)",
        topicFocus: "Dot-and-cross diagram of expanded octet molecule (SF₆ or PCl₅) and coordinate bonding in Al₂Cl₆.",
      },
    ],
    examTips: [
      "VSEPR explanation: State total electron pairs, bonding pairs, lone pairs. Order of repulsion: LP-LP > LP-BP > BP-BP.",
      "Each lone pair reduces bond angle by approximately 2.5° from tetrahedral (109.5°).",
      "Hydrogen bonding requires H covalently bonded to N, O, or F with an accessible lone pair.",
    ],
  },
  5: {
    chapterNumber: 5,
    chapterTitle: "States of Matter & The Gas Laws",
    category: "Physical",
    syllabusRef: "Syllabus 4.1–4.4 (Topic 4)",
    coreCalculationTopicId: "ideal-gas",
    practicalExperiments: [
      {
        testId: "volatile-liquid-mr",
        nameEn: "Molar Mass of Volatile Liquid using Ideal Gas Equation",
        nameMn: "Идеал хийн хуулиар дэгдэмхий шингэний молекул масс тодорхойлох",
        summary: "Vaporizing a known mass of volatile liquid in gas syringe at elevated temperature to calculate Mr via pV = (m/Mr)RT.",
        reagents: "Gas syringe in oven/water bath, hypodermic syringe, hexane/propanone, barometer",
        videoQuery: "molar mass volatile liquid gas syringe pV nRT practical 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q9",
        topicFocus: "Deviations of real gases from ideal behavior at high pressure and low temperature.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q2(b)",
        topicFocus: "Ideal gas equation pV = nRT with unit conversions (Pa, m³, K).",
      },
    ],
    examTips: [
      "Rigorous SI units: Pressure must be Pa (kPa × 10³), Volume must be m³ (cm³ × 10⁻⁶, dm³ × 10⁻³), Temperature must be K (°C + 273.15).",
      "Real gases deviate most from ideal behavior at LOW temperature (intermolecular attractions become significant) and HIGH pressure (molecular volume cannot be neglected).",
    ],
  },
  6: {
    chapterNumber: 6,
    chapterTitle: "Enthalpy Changes (Thermochemistry)",
    category: "Physical",
    syllabusRef: "Syllabus 5.1, 5.2 (Topic 5)",
    coreCalculationTopicId: "energetics-hess",
    practicalExperiments: [
      {
        testId: "calorimetry-enthalpy",
        nameEn: "Calorimetric Enthalpy of Neutralisation / Reaction",
        nameMn: "Калориметрийн саармагжих / урвалын энтальпи тодорхойлох",
        summary: "Temperature vs time extrapolation graph using polystyrene cup calorimeter (q = mcΔT).",
        reagents: "Expanded polystyrene cup, precision thermometer (±0.2°C), measuring cylinder",
        videoQuery: "enthalpy change of neutralisation calorimetry 9701 paper 3",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_31",
        paperType: "Paper 3",
        paperTitle: "May/June 2024 P31 Practical",
        yearSeries: "2024 s31",
        questionNumber: "Question 2",
        topicFocus: "Enthalpy change of displacement/neutralisation and cooling curve extrapolation.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q2(c)",
        topicFocus: "Hess's Law cycle and standard enthalpy of formation calculations.",
      },
    ],
    examTips: [
      "Always convert q (Joules) to kJ and include the correct sign (+ for endothermic, - for exothermic) with units kJ mol⁻¹.",
      "Cooling curve extrapolation: take temperature readings every 30s before mixing, mix at minute 3 without reading, then resume readings at 3.5 min.",
    ],
  },
  7: {
    chapterNumber: 7,
    chapterTitle: "Redox Reactions",
    category: "Inorganic",
    syllabusRef: "Syllabus 6.1 (Topic 6)",
    coreCalculationTopicId: "electrochemistry-faraday",
    practicalExperiments: [
      {
        testId: "redox-titration-fe-mno4",
        nameEn: "Manganate(VII) Redox Titration with Iron(II)",
        nameMn: "Төмөр(II)-ийн давсыг калийн перманганатаар титрлэх редокс сорил",
        summary: "Self-indicating volumetric redox titration: MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.",
        reagents: "Standard KMnO₄ solution (0.02 mol/dm³), unknown Fe²⁺ solution, dilute H₂SO₄",
        videoQuery: "redox titration potassium manganate iron ii 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q10 & Q11",
        topicFocus: "Oxidation numbers and balancing half-equations with H⁺ and H₂O.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q3(a)",
        topicFocus: "Disproportionation reactions and redox stoichometry.",
      },
    ],
    examTips: [
      "Oxidation state rules: Fluorine is always -1; Oxygen is -2 (except in peroxides where it is -1, and in OF₂ where it is +2); Hydrogen is +1 (except in metal hydrides where it is -1).",
      "In balancing half-equations: balance elements other than O and H first, then balance O with H₂O, balance H with H⁺, and finally balance charge with electrons (e⁻).",
    ],
  },
  8: {
    chapterNumber: 8,
    chapterTitle: "Equilibria (Chemical & Acid-Base)",
    category: "Physical",
    syllabusRef: "Syllabus 7.1, 7.2 (Topic 7)",
    coreCalculationTopicId: "equilibria-kc-kp",
    practicalExperiments: [
      {
        testId: "le-chatelier-equilibrium",
        nameEn: "Le Chatelier Dynamic Equilibrium Shifts (CoCl₄²⁻ vs [Co(H₂O)₆]²⁺)",
        nameMn: "Ле Шательегийн зарчмаар тэнцвэрийн шилжилтийг ажиглах (Кобальт комплекс)",
        summary: "Temperature and concentration shifts between blue [CoCl₄]²⁻ and pink [Co(H₂O)₆]²⁺.",
        reagents: "Cobalt(II) chloride, conc. HCl, ice bath, hot water bath",
        videoQuery: "cobalt chloride equilibrium le chatelier principle experiment 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q12 & Q13",
        topicFocus: "Le Chatelier shifts, Kc expression with variable units.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q4(a)",
        topicFocus: "Haber process equilibrium trade-off: compromise temperature (450°C) and pressure (200 atm).",
      },
    ],
    examTips: [
      "ONLY temperature changes the numerical value of Kc or Kp. Changes in concentration or pressure shift equilibrium position to keep Kc/Kp constant.",
      "Catalysts increase rates of both forward and backward reactions equally without shifting equilibrium position.",
    ],
  },
  9: {
    chapterNumber: 9,
    chapterTitle: "Rates of Reaction",
    category: "Physical",
    syllabusRef: "Syllabus 8.1, 8.2 (Topic 8)",
    coreCalculationTopicId: "kinetics-rates",
    practicalExperiments: [
      {
        testId: "rate-thiosulfate-acid",
        nameEn: "Sodium Thiosulfate & Acid Disappearing Cross Reaction",
        nameMn: "Тиосульфат ба хүчлийн урвалын хурд тодорхойлох сорил",
        summary: "Measuring time taken for sulfur precipitate to obscure a black cross at different temperatures and concentrations.",
        reagents: "Na₂S₂O₃(aq), dilute HCl, conical flask, marked white tile, stopwatch",
        videoQuery: "disappearing cross reaction rates practical thiosulfate 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q14",
        topicFocus: "Maxwell-Boltzmann distribution curve and effect of catalysts.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q4(b)",
        topicFocus: "Collision theory: activation energy and proportion of effective collisions.",
      },
    ],
    examTips: [
      "When temperature increases: peak of Maxwell-Boltzmann distribution shifts down and to the RIGHT. Area under curve stays constant.",
      "A catalyst provides an alternative pathway with a lower activation energy, increasing the fraction of particles with E ≥ Ea.",
    ],
  },
  10: {
    chapterNumber: 10,
    chapterTitle: "Periodicity: Period 3 Elements & Compounds",
    category: "Inorganic",
    syllabusRef: "Syllabus 9.1, 9.2, 9.3 (Topic 9)",
    practicalExperiments: [
      {
        testId: "period3-chlorides-hydrolysis",
        nameEn: "Period 3 Chlorides Hydrolysis & pH Testing",
        nameMn: "3-р үеийн хлоридуудын усаар гидролизод орох шинж ба pH сорил",
        summary: "Comparison of NaCl (neutral solution, simple dissolving) vs SiCl₄ and PCl₅ (vigorous hydrolysis producing acidic steamy HCl fumes).",
        reagents: "NaCl, MgCl₂, AlCl₃, SiCl₄, PCl₅, universal indicator, boiling tubes",
        videoQuery: "hydrolysis period 3 chlorides practical 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q15 & Q16",
        topicFocus: "Trends in melting points and electrical conductivity across Period 3.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q3(b)",
        topicFocus: "Amphoteric behavior of Al₂O₃ and reactions of Period 3 oxides with acids/bases.",
      },
    ],
    examTips: [
      "Al₂O₃ is amphoteric: reacts with acids (Al₂O₃ + 6H⁺ → 2Al³⁺ + 3H₂O) and alkalis (Al₂O₃ + 2OH⁻ + 3H₂O → 2[Al(OH)₄]⁻).",
      "Silicon has highest melting point in Period 3 due to giant covalent lattice requiring huge energy to break many strong covalent bonds.",
    ],
  },
  11: {
    chapterNumber: 11,
    chapterTitle: "Group 2 (Alkaline Earth Metals)",
    category: "Inorganic",
    syllabusRef: "Syllabus 10.1, 10.2 (Topic 10)",
    practicalExperiments: [
      {
        testId: "cation-calcium-barium",
        nameEn: "Group 2 Cations (Mg²⁺, Ca²⁺, Ba²⁺) Precipitation Tests",
        nameMn: "II бүлгийн металлын катионуудын тунадасжих сорил",
        summary: "Solubility trend: Hydroxides become MORE soluble down group, Sulfates become LESS soluble down group.",
        reagents: "NaOH(aq), dilute H₂SO₄(aq), K₂CrO₄(aq), flame test wire",
        videoQuery: "group 2 cation tests magnesium calcium barium 9701",
      },
      {
        testId: "group2-carbonate-thermal",
        nameEn: "Thermal Decomposition of Group 2 Nitrates & Carbonates",
        nameMn: "II бүлгийн карбонат ба нитратуудын дулааны задрал",
        summary: "Thermal stability increases down group as cation radius increases and polarising power decreases.",
        reagents: "Boiling tube, delivery tube, limewater Ca(OH)₂, Bunsen burner",
        videoQuery: "thermal decomposition group 2 carbonates 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_31",
        paperType: "Paper 3",
        paperTitle: "May/June 2024 P31 Practical",
        yearSeries: "2024 s31",
        questionNumber: "Question 3",
        topicFocus: "Distinguishing Ba²⁺ from Ca²⁺ using dilute sulfuric acid and ammonium hydroxide.",
      },
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q17",
        topicFocus: "Trends in solubility of Group 2 sulfates and hydroxides.",
      },
    ],
    examTips: [
      "Explain thermal stability via polarising power: smaller Mg²⁺ has higher charge density, polarises CO₃²⁻ electron cloud more, weakening C-O bond.",
      "Hydroxides: solubility increases down group. Sulfates: solubility decreases down group (BaSO₄ is completely insoluble white ppt).",
    ],
  },
  12: {
    chapterNumber: 12,
    chapterTitle: "Group 17 (The Halogens)",
    category: "Inorganic",
    syllabusRef: "Syllabus 11.1–11.4 (Topic 11)",
    practicalExperiments: [
      {
        testId: "anion-chloride",
        nameEn: "Halide Ion Testing with AgNO₃(aq) & Ammonia",
        nameMn: "Галогенид ионуудыг (Cl⁻, Br⁻, I⁻) AgNO₃ болон NH₃-аар ялган таних",
        summary: "Formation of AgX precipitates (white, cream, yellow) and differential solubility in dilute/conc NH₃.",
        reagents: "Dilute HNO₃, AgNO₃(aq), dilute NH₃(aq), conc NH₃(aq)",
        videoQuery: "testing for halide ions 9701 practical chemistry",
      },
      {
        testId: "halogen-displacement",
        nameEn: "Halogen Displacement & Redox Strength",
        nameMn: "Галогенуудын исэлдүүлэн ангижрах ба байр халах урвал",
        summary: "Cl₂ displaces Br⁻ (orange) and I⁻ (purple in cyclohexane layer) demonstrating oxidising trend down Group 17.",
        reagents: "Cl₂(aq), Br₂(aq), I₂(aq), KBr(aq), KI(aq), cyclohexane solvent",
        videoQuery: "halogen displacement reactions group 17 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_31",
        paperType: "Paper 3",
        paperTitle: "May/June 2024 P31 Practical",
        yearSeries: "2024 s31",
        questionNumber: "Question 3 (Qualitative)",
        topicFocus: "Identification of unknown halide precipitate and reaction with concentrated sulfuric acid.",
      },
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q18 & Q19",
        topicFocus: "Thermal stability of hydrogen halides and reactions with conc H₂SO₄.",
      },
    ],
    examTips: [
      "Always acidify with dilute HNO₃ before adding AgNO₃ to eliminate interfering CO₃²⁻ or SO₃²⁻.",
      "AgCl dissolves in dilute NH₃; AgBr dissolves only in concentrated NH₃; AgI is insoluble in both.",
      "Cold NaOH: Cl₂ + 2NaOH → NaCl + NaClO + H₂O. Hot NaOH: 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O.",
    ],
  },
  13: {
    chapterNumber: 13,
    chapterTitle: "Nitrogen & Ammonia",
    category: "Inorganic",
    syllabusRef: "Syllabus 12.1, 12.2 (Topic 12)",
    practicalExperiments: [
      {
        testId: "cation-ammonium",
        nameEn: "Ammonium (NH₄⁺) Ion Test",
        nameMn: "Аммонийн ион таних сорил (NaOH + Халаалт)",
        summary: "NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l); alkaline ammonia gas turns damp red litmus blue.",
        reagents: "NaOH(aq), heat, damp red litmus paper",
        videoQuery: "test for ammonium ions naoh 9701 practical chemistry",
      },
      {
        testId: "anion-sulfate",
        nameEn: "Sulfate (SO₄²⁻) & Sulfite (SO₃²⁻) Testing with Ba²⁺",
        nameMn: "Сульфат ба сульфит ионыг Ba²⁺-аар ялган таних",
        summary: "BaSO₄ forms white precipitate insoluble in dilute acid; BaSO₃ dissolves in dilute HCl giving SO₂ gas.",
        reagents: "Dilute HCl, BaCl₂(aq) or Ba(NO₃)₂(aq), acidified KMnO₄",
        videoQuery: "testing for sulfate and sulfite ions 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_31",
        paperType: "Paper 3",
        paperTitle: "May/June 2024 P31 Practical",
        yearSeries: "2024 s31",
        questionNumber: "Question 3 (Anion & Gas)",
        topicFocus: "Testing for SO₄²⁻, NO₃⁻ and distinguishing NH₃ vs SO₂ gas emissions.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q4",
        topicFocus: "Haber process equilibrium, catalytic oxidation of SO₂ (Contact process), and acid rain formation.",
      },
    ],
    examTips: [
      "Always warm gently when testing for NH₄⁺ and do not let alkaline NaOH splash onto the litmus paper.",
      "Explain unreactivity of N₂ by the very strong triple bond (bond enthalpy 945 kJ mol⁻¹).",
    ],
  },
  14: {
    chapterNumber: 14,
    chapterTitle: "Introduction to Organic Chemistry",
    category: "Organic",
    syllabusRef: "Syllabus 13.1–13.4 (Topic 13)",
    practicalExperiments: [
      {
        testId: "organic-models-chirality",
        nameEn: "Molecular Model Building for Optical Chirality & Cis/Trans Isomerism",
        nameMn: "Молекулын загвар угсрах: Оптик хирал төв ба цис/транс изомер",
        summary: "Constructing 3D ball-and-stick models to verify non-superimposable mirror images and restricted C=C rotation.",
        reagents: "Molymod organic chemistry set",
        videoQuery: "chirality optical isomerism molecular models stereochemistry 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q20",
        topicFocus: "Identifying chiral centers and counting stereoisomers in complex molecules.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q5(a)",
        topicFocus: "IUPAC naming and structural isomerism (chain, positional, functional group).",
      },
    ],
    examTips: [
      "Chiral carbon must have FOUR DIFFERENT groups attached. Carbons in double bonds or with two identical groups (-CH₃, -H) cannot be chiral.",
      "Cis/trans (E/Z) isomerism requires restricted rotation (C=C double bond) AND two different groups on each of the double-bonded carbons.",
    ],
  },
  15: {
    chapterNumber: 15,
    chapterTitle: "Hydrocarbons (Alkanes & Alkenes)",
    category: "Organic",
    syllabusRef: "Syllabus 14.1, 14.2 (Topic 14)",
    practicalExperiments: [
      {
        testId: "alkene-unsaturation-test",
        nameEn: "Bromine Water Unsaturation & Cold KMnO₄ Oxidation",
        nameMn: "Бромтой ус болон хүйтэн KMnO₄-аар ханаагүй холбоо таних сорил",
        summary: "Rapid decolourisation of orange aqueous bromine (electrophilic addition) and purple KMnO₄ to brown MnO₂.",
        reagents: "Cyclohexene, cyclohexane, bromine water Br₂(aq), cold dilute KMnO₄",
        videoQuery: "testing for alkenes bromine water test practical chemistry 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q21 & Q22",
        topicFocus: "Free-radical substitution mechanism steps and Markovnikov addition.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q5(b)",
        topicFocus: "Hot conc KMnO₄ oxidative cleavage to deduce structure of unknown alkene.",
      },
    ],
    examTips: [
      "Electrophilic addition: arrow must originate from the center of the C=C double bond towards the electrophile (Br⁺).",
      "Markovnikov's rule: major product forms via the MORE STABLE carbocation intermediate (tertiary > secondary > primary due to electron-donating alkyl groups).",
    ],
  },
  16: {
    chapterNumber: 16,
    chapterTitle: "Halogenoalkanes",
    category: "Organic",
    syllabusRef: "Syllabus 15.1 (Topic 15)",
    practicalExperiments: [
      {
        testId: "haloalkane-hydrolysis-rate",
        nameEn: "Relative Rates of Hydrolysis (R-Cl vs R-Br vs R-I)",
        nameMn: "Галогеналкануудын гидролизод орох хурдыг харьцуулах сорил",
        summary: "Ethanolic AgNO₃ hydrolysis: Iodoalkane precipitates fastest (yellow AgI) due to lowest C-I bond enthalpy.",
        reagents: "1-chlorobutane, 1-bromobutane, 1-iodobutane, ethanol solvent, aqueous AgNO₃, 50°C water bath",
        videoQuery: "hydrolysis of halogenoalkanes rate 9701 practical chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q23 & Q24",
        topicFocus: "SN1 vs SN2 nucleophilic substitution mechanisms and carbocation stability.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q5(c)",
        topicFocus: "Curly arrow mechanisms, SN1 two-step vs SN2 transition state.",
      },
    ],
    examTips: [
      "Rate of hydrolysis depends on C-X bond enthalpy, NOT bond polarity (C-I is weakest bond, breaks fastest).",
      "Primary halogenoalkanes react predominantly via SN2 (one step, backside attack with inversion of configuration). Tertiary react via SN1 (two steps via stable carbocation).",
    ],
  },
  17: {
    chapterNumber: 17,
    chapterTitle: "Alcohols, Esters & Carboxylic Acids",
    category: "Organic",
    syllabusRef: "Syllabus 16.1, 18.1, 18.2 (Topics 16, 18)",
    practicalExperiments: [
      {
        testId: "alcohol-oxidation-test",
        nameEn: "Oxidation of 1°, 2°, 3° Alcohols with Acidified Dichromate",
        nameMn: "Анхдагч, хоёрдогч, гуравдагч спиртийн исэлдэлт ба дихроматын сорил",
        summary: "Orange Cr₂O₇²⁻ turns green Cr³⁺ with primary/secondary alcohols; tertiary alcohols remain orange.",
        reagents: "Ethanol, propan-2-ol, 2-methylpropan-2-ol, K₂Cr₂O₇, dilute H₂SO₄, water bath",
        videoQuery: "oxidation of alcohols acidified potassium dichromate 9701",
      },
      {
        testId: "ester-synthesis",
        nameEn: "Preparation of Ethyl Ethanoate & Sweet Fruity Odour Identification",
        nameMn: "Этил ацетат гарган авах ба жимсний үнэртэй эфир таних",
        summary: "Condensation reaction between ethanoic acid and ethanol using conc. H₂SO₄ as catalyst.",
        reagents: "Glacial ethanoic acid, absolute ethanol, concentrated H₂SO₄, sodium carbonate",
        videoQuery: "synthesis of ethyl ethanoate esterification practical 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q25",
        topicFocus: "Distillation vs reflux in alcohol oxidation to aldehyde vs carboxylic acid.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q6(a)",
        topicFocus: "Acid vs alkaline hydrolysis of esters.",
      },
    ],
    examTips: [
      "To obtain an aldehyde from a 1° alcohol, distill off immediately to prevent further oxidation to carboxylic acid.",
      "Base hydrolysis of esters produces carboxylate salt + alcohol, NOT free carboxylic acid.",
    ],
  },
  18: {
    chapterNumber: 18,
    chapterTitle: "Carbonyl Compounds (Aldehydes & Ketones)",
    category: "Organic",
    syllabusRef: "Syllabus 17.1 (Topic 17)",
    practicalExperiments: [
      {
        testId: "carbonyl-24dnph",
        nameEn: "2,4-DNPH (Brady's Reagent) Condensation Test",
        nameMn: "2,4-DNPH урвалжаар карбонилын бүлгийг (C=O) таних",
        summary: "Aldehydes and ketones form bright orange/yellow crystalline 2,4-dinitrophenylhydrazone precipitates.",
        reagents: "2,4-dinitrophenylhydrazine solution, ethanol, test tube",
        videoQuery: "2 4 dinitrophenylhydrazine 2 4 dnph test 9701 chemistry",
      },
      {
        testId: "carbonyl-tollens-fehling",
        nameEn: "Tollens' (Silver Mirror) & Fehling's Test for Aldehydes",
        nameMn: "Толленс (Мөнгөн толь) ба Фелингийн сорил (Альдегид ялгах)",
        summary: "Aldehydes reduce Tollens' reagent to a silver mirror (Ag(s)) or Fehling's to red Cu₂O precipitate.",
        reagents: "Tollens' reagent ([Ag(NH₃)₂]⁺), Fehling's A & B, warm water bath",
        videoQuery: "tollens test silver mirror fehlings test 9701 practical",
      },
      {
        testId: "carbonyl-triiodomethane",
        nameEn: "Triiodomethane (Iodoform) Test for CH₃-C=O",
        nameMn: "Иодоформын сорил (CH₃-C=O ба CH₃-CH(OH)- бүлэг таних)",
        summary: "Methyl carbonyls form pale yellow antiseptic-smelling CHI₃ precipitate.",
        reagents: "I₂ in KI(aq), NaOH(aq), gentle warming",
        videoQuery: "triiodomethane iodoform test 9701 practical chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_12",
        paperType: "Paper 1",
        paperTitle: "May/June 2024 P12",
        yearSeries: "2024 s12",
        questionNumber: "Q26 & Q27",
        topicFocus: "Nucleophilic addition of HCN and distinguishing ethanal vs propanone.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q6(b)",
        topicFocus: "Reduction with NaBH₄, mechanism with lone pairs, and melting point identification of derivatives.",
      },
    ],
    examTips: [
      "Never heat Tollens' reagent directly over a Bunsen flame; always use a warm beaker water bath.",
      "Triiodomethane test is positive for CH₃-CO- (ethanal and all methyl ketones) AND CH₃-CH(OH)- (ethanol and all secondary methyl alcohols).",
    ],
  },
  19: {
    chapterNumber: 19,
    chapterTitle: "Lattice Energy & Born-Haber Cycles",
    category: "Physical",
    syllabusRef: "Syllabus 23.1, 23.2 (Topic 23)",
    coreCalculationTopicId: "energetics-hess",
    practicalExperiments: [
      {
        testId: "enthalpy-solution-hydration",
        nameEn: "Calorimetric Determination of Enthalpy of Solution (ΔHsol)",
        nameMn: "Давсны уусахын энтальпи тодорхойлох калориметрийн туршилт",
        summary: "Dissolving anhydrous salt in calorimeter to verify Hess cycle: ΔHsol = ΔHhyd(cation) + ΔHhyd(anion) - ΔHlatt.",
        reagents: "Anhydrous MgSO₄, expanded polystyrene cup, thermometer (±0.1°C)",
        videoQuery: "enthalpy of solution hydration lattice energy practical 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 1",
        topicFocus: "Constructing Born-Haber cycle and calculating electron affinity or lattice energy.",
      },
    ],
    examTips: [
      "Lattice energy is ALWAYS negative. State symbols are strictly assessed in Born-Haber cycle steps.",
      "Lattice energy becomes more exothermic as ionic charges increase and ionic radii decrease (higher charge density).",
    ],
  },
  20: {
    chapterNumber: 20,
    chapterTitle: "Electrochemistry (Cells & Nernst Equation)",
    category: "Physical",
    syllabusRef: "Syllabus 24.1–24.3 (Topic 24)",
    coreCalculationTopicId: "electrochemistry-faraday",
    practicalExperiments: [
      {
        testId: "electrochemical-cell-emf",
        nameEn: "Measurement of Electrochemical Cell EMF & Concentration Effects",
        nameMn: "Цайр-зэсийн эсийн EMF хэмжих ба концентрацийн нөлөөг судлах",
        summary: "Daniell cell setup with voltmeter and KNO₃ filter-paper salt bridge.",
        reagents: "Zn strip, Cu strip, 1.0 mol/dm³ ZnSO₄, 1.0 mol/dm³ CuSO₄, high resistance voltmeter",
        videoQuery: "electrochemical cells measuring emf practical 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 2",
        topicFocus: "Standard electrode potentials E⦵, feasibility, and Faraday electrolysis calculations.",
      },
    ],
    examTips: [
      "E⦵cell = E⦵reduction(cathode) - E⦵oxidation(anode). If E⦵cell > 0, reaction is feasible under standard conditions.",
      "Faraday constant F = 96,500 C mol⁻¹. Charge Q = I × t (time MUST be in seconds).",
    ],
  },
  21: {
    chapterNumber: 21,
    chapterTitle: "Further Aspects of Equilibria (Ka, Kw, Buffers, Ksp)",
    category: "Physical",
    syllabusRef: "Syllabus 25.1–25.3 (Topic 25)",
    coreCalculationTopicId: "acids-buffers-ksp",
    practicalExperiments: [
      {
        testId: "buffer-ph-meter-titration",
        nameEn: "pH Titration Curve & Buffer Capacity Determination",
        nameMn: "pH метрээр титрлэлтийн муруй байгуулах ба буфер багтаамж шалгах",
        summary: "Plotting pH vs added alkali volume to identify equivalence point and buffer region.",
        reagents: "Calibrated pH meter, ethanoic acid, NaOH, burette, magnetic stirrer",
        videoQuery: "ph titration curve buffer solution practical 9701 a level",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 3",
        topicFocus: "Buffer solution pH calculation and Ksp common ion precipitation.",
      },
    ],
    examTips: [
      "Buffer pH calculation: pH = pKa + log₁₀([Salt] / [Acid]).",
      "Common ion effect decreases solubility: when salt sharing a common ion is added, equilibrium shifts left, causing precipitation.",
    ],
  },
  22: {
    chapterNumber: 22,
    chapterTitle: "Reaction Kinetics (Rate Equations & Mechanisms)",
    category: "Physical",
    syllabusRef: "Syllabus 26.1–26.4 (Topic 26)",
    coreCalculationTopicId: "kinetics-rates",
    practicalExperiments: [
      {
        testId: "iodine-clock-kinetics",
        nameEn: "Persulfate-Iodide Iodine Clock Reaction (Initial Rates)",
        nameMn: "Иодын цаг урвал: Эхний хурдны аргаар урвалын эрэмбэ олох",
        summary: "Reaction of S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂ with starch indicator and sodium thiosulfate.",
        reagents: "Potassium persulfate, KI, Na₂S₂O₃, starch indicator, stopwatch",
        videoQuery: "iodine clock reaction persulfate iodide initial rates 9701 practical",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 4",
        topicFocus: "Initial rate data analysis, determining rate equation and rate constant k with units.",
      },
    ],
    examTips: [
      "Rate-determining step (RDS) is the slowest step in the reaction mechanism; its reactants match the species in the rate equation.",
      "First order half-life is constant: t1/2 = ln(2) / k = 0.693 / k.",
    ],
  },
  23: {
    chapterNumber: 23,
    chapterTitle: "Entropy & Gibbs Free Energy",
    category: "Physical",
    syllabusRef: "Syllabus 27.1, 27.2 (Topic 27)",
    coreCalculationTopicId: "energetics-hess",
    practicalExperiments: [
      {
        testId: "endothermic-spontaneous-entropy",
        nameEn: "Endothermic Spontaneous Reaction Driven by Entropy (Ba(OH)₂ + NH₄SCN)",
        nameMn: "Энтропигоор явагдах эндотерм урвал (Барийн гидроксид + Аммонийн тиоцианат)",
        summary: "Spontaneous reaction with intense cooling below -20°C freezing a beaker to wet wooden board.",
        reagents: "Ba(OH)₂·8H₂O, NH₄SCN, beaker, damp wooden board",
        videoQuery: "endothermic reaction freezing water entropy spontaneous practical",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 5",
        topicFocus: "Calculating ΔS and ΔG = ΔH - TΔS, determining feasibility temperature.",
      },
    ],
    examTips: [
      "Always divide ΔS by 1000 to match units (J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹) before calculating ΔG.",
      "A reaction is feasible when ΔG ≤ 0. The temperature at which it becomes feasible is T = ΔH / ΔS.",
    ],
  },
  24: {
    chapterNumber: 24,
    chapterTitle: "Transition Elements & Complex Ions",
    category: "Inorganic",
    syllabusRef: "Syllabus 28.1–28.3 (Topic 28)",
    practicalExperiments: [
      {
        testId: "cation-transition-metals",
        nameEn: "Transition Metal Hydroxides & Ligand Exchange (Cu²⁺, Fe²⁺, Fe³⁺, Cr³⁺, Mn²⁺)",
        nameMn: "Шилжилтийн металлын катионууд ба лиганд солилцооны өнгөний хувиралт",
        summary: "Precipitate colors with NaOH/NH₃ and complex formation in excess ammonia (e.g. [Cu(NH₃)₄(H₂O)₂]²⁺ deep blue).",
        reagents: "CuSO₄, FeSO₄, FeCl₃, CrCl₃, MnSO₄, dilute NaOH, dilute & concentrated NH₃",
        videoQuery: "transition metal ion tests ligand exchange reactions 9701",
      },
      {
        testId: "redox-titration-manganate",
        nameEn: "Redox Titration with Potassium Manganate(VII)",
        nameMn: "KMnO₄ ашиглан Fe²⁺ эсвэл C₂O₄²⁻-ийг тодорхойлох Редокс титрлэлт",
        summary: "Self-indicating titration (Mn⁷⁺ purple to Mn²⁺ colorless; endpoint is first permanent pale pink).",
        reagents: "Standard KMnO₄ solution, dilute H₂SO₄, Fe²⁺ solution, burette, pipette",
        videoQuery: "redox titration potassium manganate fe2+ 9701 paper 5 practical",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 6",
        topicFocus: "d-orbital splitting (octahedral ΔE = hf), origin of color, and stability constants (Kstab).",
      },
    ],
    examTips: [
      "Origin of color: Ligands split d-orbitals into non-degenerate levels. Electrons absorb visible light promoting to higher d-orbital (ΔE = hf). Transmitted light is complementary.",
      "Kstab expression: [complex ion] / ([metal ion] [ligand]^coordination).",
    ],
  },
  25: {
    chapterNumber: 25,
    chapterTitle: "Benzene & Arenes (Aromatic Chemistry)",
    category: "Organic",
    syllabusRef: "Syllabus 29.1 (Topic 29)",
    practicalExperiments: [
      {
        testId: "methyl-benzoate-nitration",
        nameEn: "Synthesis of Methyl 3-nitrobenzoate by Electrophilic Aromatic Substitution",
        nameMn: "Бензолын цагирагт нитро бүлэг залгах (Метил-3-нитробензоатын нийлэгжилт)",
        summary: "Electrophilic substitution at < 10°C followed by recrystallisation and melting point determination.",
        reagents: "Methyl benzoate, conc. H₂SO₄, conc. HNO₃, ice bath, Buchner funnel",
        videoQuery: "nitration of methyl benzoate practical recrystallisation 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 7",
        topicFocus: "Mechanism of electrophilic substitution (nitration, chlorination, Friedel-Crafts).",
      },
    ],
    examTips: [
      "Electrophilic substitution mechanism of benzene: horseshoe intermediate must span 5 carbons, open at the sp³ carbon, with a '+' inside the ring.",
      "Directing groups: electron-donating (-OH, -NH₂, -R) direct to 2- and 4-positions; electron-withdrawing (-NO₂, -COOH, -CHO) direct to 3-position.",
    ],
  },
  26: {
    chapterNumber: 26,
    chapterTitle: "Carboxylic Acids & Acyl Chlorides",
    category: "Organic",
    syllabusRef: "Syllabus 30.1 (Topic 30)",
    practicalExperiments: [
      {
        testId: "aspirin-synthesis",
        nameEn: "Synthesis of Aspirin from 2-Hydroxybenzoic Acid & Acylating Agent",
        nameMn: "2-гидроксибензойн хүчлээс ацетилсалицилын хүчил (Аспирин) нийлэгжүүлэх",
        summary: "Esterification of phenolic -OH group using ethanoic anhydride or ethanoyl chloride followed by TLC purity check.",
        reagents: "2-hydroxybenzoic acid, ethanoic anhydride, conc. H₃PO₄, ice water, Buchner funnel",
        videoQuery: "synthesis of aspirin preparation recrystallisation melting point 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 8",
        topicFocus: "Relative ease of hydrolysis of acyl chlorides, alkyl chlorides, and aryl chlorides.",
      },
    ],
    examTips: [
      "Acyl chlorides react vigorously with water, releasing dense misty white fumes of HCl.",
      "Ease of hydrolysis order: Acyl chloride > Alkyl chloride >> Chlorobenzene (inert due to delocalisation of chlorine lone pair into benzene ring).",
    ],
  },
  27: {
    chapterNumber: 27,
    chapterTitle: "Organic Nitrogen Compounds",
    category: "Organic",
    syllabusRef: "Syllabus 31.1–31.3 (Topic 31)",
    practicalExperiments: [
      {
        testId: "azo-dye-synthesis",
        nameEn: "Synthesis of Azo Dye (Diazotisation and Coupling)",
        nameMn: "Азо-будагч нийлэгжүүлэх: Диазожуулах ба холбох урвал",
        summary: "Reacting phenylamine with HNO₂ below 10°C to form diazonium ion, followed by alkaline coupling with naphthalen-2-ol.",
        reagents: "Phenylamine, NaNO₂, dilute HCl, ice bath (< 10°C), naphthalen-2-ol in NaOH",
        videoQuery: "synthesis of azo dye diazotisation coupling practical chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 9",
        topicFocus: "Base strengths of amines vs ammonia vs phenylamine, amino acid zwitterions.",
      },
    ],
    examTips: [
      "Base strength order: Ethylamine > Ammonia > Phenylamine. Ethyl group is electron-donating; benzene ring delocalises lone pair into aromatic ring.",
      "Diazonium salts decompose above 10°C into phenol and nitrogen gas.",
    ],
  },
  28: {
    chapterNumber: 28,
    chapterTitle: "Polymerisation (Polyamides & Polyesters)",
    category: "Organic",
    syllabusRef: "Syllabus 32.1, 32.2 (Topic 32)",
    practicalExperiments: [
      {
        testId: "nylon-rope-trick",
        nameEn: "Nylon 6,6 Condensation Polymerisation (Nylon Rope Trick)",
        nameMn: "Нейлон 6,6 конденсацын полимержилт (Нейлон утас гарган авах)",
        summary: "Interfacial polymerisation between 1,6-diaminohexane in water and hexanedioic acid chloride in organic solvent.",
        reagents: "1,6-diaminohexane(aq), decanedioyl dichloride in cyclohexane, tweezers",
        videoQuery: "nylon rope trick nylon 6 6 interfacial condensation polymerisation",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 10",
        topicFocus: "Identifying repeat units in Nylon and Terylene, acid/base degradation of polymers.",
      },
    ],
    examTips: [
      "Condensation polymers eliminate a small molecule (H₂O or HCl) per linkage formed.",
      "Polyesters and polyamides are biodegradable because the ester and amide bonds can be hydrolysed by acid or alkali.",
    ],
  },
  29: {
    chapterNumber: 29,
    chapterTitle: "Organic Synthesis & Drug Design",
    category: "Organic",
    syllabusRef: "Syllabus 33.1 (Topic 33)",
    practicalExperiments: [
      {
        testId: "thin-layer-chromatography-drugs",
        nameEn: "Thin-Layer Chromatography (TLC) of Analgesic Drug Formulations",
        nameMn: "Эмийн бодисын цэвэршилтийг нимгэн үеийн хроматографиар (TLC) шалгах",
        summary: "Separating components of painkillers (paracetamol, aspirin, caffeine) and determining Rf values under UV light.",
        reagents: "Silica TLC plate, ethyl ethanoate solvent chamber, UV lamp (254 nm), capillary tubes",
        videoQuery: "thin layer chromatography tlc paracetamol aspirin practical 9701",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 11",
        topicFocus: "Multi-step synthetic routes, C-C bond formation, and chiral drug design.",
      },
    ],
    examTips: [
      "C-C bond formation reactions: 1. Halogenoalkane + KCN; 2. Carbonyl + HCN; 3. Friedel-Crafts alkylation/acylation on benzene.",
      "Retrosynthetic analysis: work backwards step-by-step from the target molecule to simpler starting materials.",
    ],
  },
  30: {
    chapterNumber: 30,
    chapterTitle: "Analytical Chemistry (NMR, Chromatography, Mass Spec)",
    category: "Analysis",
    syllabusRef: "Syllabus 22.1, 22.2, 34.1, 34.2 (Topics 22, 34)",
    practicalExperiments: [
      {
        testId: "nmr-d2o-shake",
        nameEn: "Proton NMR D₂O Exchange Test Demonstration",
        nameMn: "¹H NMR дахь D₂O угаах туршилт (Лабиль протон таних)",
        summary: "Demonstrating how adding heavy water (D₂O) causes disappearance of -OH and -NH- NMR signals via proton-deuterium exchange.",
        reagents: "Ethanol sample in CDCl₃ solvent, D₂O, NMR tube",
        videoQuery: "d2o shake test nmr spectroscopy oh nh protons 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_42",
        paperType: "Paper 4",
        paperTitle: "May/June 2024 P42 A Level Structured",
        yearSeries: "2024 s42",
        questionNumber: "Question 12",
        topicFocus: "Deducing structure from ¹H NMR chemical shifts, splitting patterns (n+1 rule), and ¹³C NMR peaks.",
      },
    ],
    examTips: [
      "(n+1) splitting rule applies only to protons on ADJACENT non-equivalent carbons.",
      "Singlet disappearing after adding D₂O confirms an -OH (alcohol/phenol/carboxylic acid) or -NH- proton.",
    ],
  },
  31: {
    chapterNumber: 31,
    chapterTitle: "Practical Skills 1 (Paper 3 AS Laboratory)",
    category: "Practical",
    syllabusRef: "Paper 3 Practical Guide",
    coreCalculationTopicId: "titration-solutions",
    practicalExperiments: [
      {
        testId: "full-qa-table",
        nameEn: "Cambridge Qualitative Analysis Notes & Bench Reagents",
        nameMn: "Кембрижийн албан ёсны чанарын шинжилгээний лавлах ба сорилууд",
        summary: "Systematic cation, anion, and gas identification tables with full observation records.",
        reagents: "All official bench reagents (NaOH, NH₃, AgNO₃, BaCl₂, acids, indicator papers)",
        videoQuery: "cambridge 9701 qualitative analysis notes practical paper 3",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_31",
        paperType: "Paper 3",
        paperTitle: "May/June 2024 P31",
        yearSeries: "2024 s31",
        questionNumber: "Complete Paper (Q1, Q2, Q3)",
        topicFocus: "Titration (16 marks), Calorimetry (10 marks), Qualitative Analysis (14 marks).",
      },
    ],
    examTips: [
      "Record observations precisely using Cambridge keywords: 'white precipitate, soluble in excess to give a colourless solution', 'effervescence', 'gas turns limewater milky'.",
      "Burette readings must have 2 decimal places ending in .00 or .05 cm³.",
    ],
  },
  32: {
    chapterNumber: 32,
    chapterTitle: "Practical Skills 2 (Paper 5 Planning, Analysis & Evaluation)",
    category: "Practical",
    syllabusRef: "Paper 5 Practical Guide",
    coreCalculationTopicId: "uncertainty-practical",
    practicalExperiments: [
      {
        testId: "paper5-experimental-design",
        nameEn: "Experimental Design, Control of Variables & Safety Risk Assessment",
        nameMn: "Туршилтын загварчлал, хувьсагчийн хяналт ба аюулгүй ажиллагааны үнэлгээ",
        summary: "Independent, dependent, and controlled variables; safety hazards & precautions (fume cupboard, gloves); uncertainty calculations.",
        reagents: "Hazard symbols, apparatus diagrams, statistical data tables",
        videoQuery: "paper 5 planning analysis evaluation 9701 chemistry",
      },
    ],
    relatedExamPapers: [
      {
        paperId: "9701_s24_qp_52",
        paperType: "Paper 5",
        paperTitle: "May/June 2024 P52",
        yearSeries: "2024 s52",
        questionNumber: "Complete Paper (Q1 & Q2)",
        topicFocus: "Planning an experiment to find formula of hydrated salt and graph analysis of reaction rate.",
      },
    ],
    examTips: [
      "In Paper 5 planning questions, always specify: 1. Independent variable, 2. Dependent variable, 3. Two controlled variables with specific numerical values, 4. Hazard with specific safety precaution.",
      "% uncertainty = (Instrument uncertainty / measured value) × 100%.",
    ],
  },
};

export function getLinkageForChapter(chapterNumber: number): ChapterLinkage | undefined {
  return CHAPTER_LINKAGES[chapterNumber];
}
