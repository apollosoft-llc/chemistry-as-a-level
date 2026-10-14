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
        topicFocus: "Successive ionisation energies & electronic configurations (1s² 2s² 2p⁶...)",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q1(a)-(c)",
        topicFocus: "Subshell energy levels, isoelectronic species, and mass spectrometry peak calculations.",
      },
    ],
    examTips: [
      "Always state that ionisation energy involves gaseous atoms: X(g) → X⁺(g) + e⁻.",
      "Large jump in successive I.E. identifies valence electrons and the Periodic Table group.",
    ],
  },
  2: {
    chapterNumber: 2,
    chapterTitle: "Atoms, Molecules and Stoichiometry",
    category: "Physical",
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
        questionNumber: "Q3 & Q4",
        topicFocus: "Empirical formula and percentage yield calculations.",
      },
    ],
    examTips: [
      "In Paper 3, record all burette readings to 2 decimal places ending in .00 or .05 cm³.",
      "Concordant titres must be within 0.10 cm³ of each other.",
    ],
  },
  5: {
    chapterNumber: 5,
    chapterTitle: "Chemical Energetics",
    category: "Physical",
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
    ],
  },
  9: {
    chapterNumber: 9,
    chapterTitle: "The Periodic Table: Chemical Periodicity & Group 17 (Halogens)",
    category: "Inorganic",
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
        questionNumber: "Q14 & Q15",
        topicFocus: "Thermal stability of hydrogen halides and reactions with conc H₂SO₄.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q3",
        topicFocus: "Disproportionation of chlorine in cold vs hot aqueous sodium hydroxide.",
      },
    ],
    examTips: [
      "Always acidify with dilute HNO₃ before adding AgNO₃ to eliminate interfering CO₃²⁻ or SO₃²⁻.",
      "AgCl dissolves in dilute NH₃; AgBr dissolves only in concentrated NH₃; AgI is insoluble in both.",
    ],
  },
  10: {
    chapterNumber: 10,
    chapterTitle: "Group 2 (Alkaline Earth Metals)",
    category: "Inorganic",
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
        questionNumber: "Q11",
        topicFocus: "Trends in solubility of Group 2 sulfates and hydroxides.",
      },
    ],
    examTips: [
      "Explain thermal stability via polarising power: smaller Mg²⁺ has higher charge density, polarises CO₃²⁻ electron cloud more, weakening C-O bond.",
    ],
  },
  11: {
    chapterNumber: 11,
    chapterTitle: "Nitrogen and Sulfur",
    category: "Inorganic",
    practicalExperiments: [
      {
        testId: "anion-nitrate",
        nameEn: "Nitrate (NO₃⁻) Reduction with Aluminium / Devarda's Alloy",
        nameMn: "Нитрат ионыг хөнгөнцагаан / Деварда хайлшаар ангижруулах сорил",
        summary: "Reduction of NO₃⁻ in alkaline solution to NH₃ gas which turns damp red litmus blue.",
        reagents: "NaOH(aq), aluminium foil, Bunsen burner, damp red litmus paper",
        videoQuery: "test for nitrate ions aluminium foil naoh 9701",
      },
      {
        testId: "anion-sulfate",
        nameEn: "Sulfate (SO₄²⁻) & Sulfite (SO₃²⁻) Testing with Ba²⁺",
        nameMn: "Сульфат ба сульфит ионыг Ba²⁺-аар ялган таних",
        summary: "BaSO₄ forms white precipitate insoluble in dilute acid; BaSO₃ dissolves in dilute HCl giving SO₂ gas.",
        reagents: "Dilute HCl, BaCl₂(aq) or Ba(NO₃)₂(aq), acidified KMnO₄",
        videoQuery: "testing for sulfate and sulfite ions 9701 chemistry",
      },
      {
        testId: "cation-ammonium",
        nameEn: "Ammonium (NH₄⁺) Ion Test",
        nameMn: "Аммонийн ион таних сорил (NaOH + Халаалт)",
        summary: "NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l); alkaline ammonia gas turns damp red litmus blue.",
        reagents: "NaOH(aq), heat, damp red litmus paper",
        videoQuery: "test for ammonium ions naoh 9701 practical chemistry",
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
      "Always warm gently when testing for NO₃⁻ / NH₄⁺ and do not let alkaline NaOH splash onto the litmus paper.",
    ],
  },
  14: {
    chapterNumber: 14,
    chapterTitle: "Halogenoalkanes",
    category: "Organic",
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
        questionNumber: "Q21 & Q22",
        topicFocus: "SN1 vs SN2 nucleophilic substitution mechanisms and carbocation stability.",
      },
      {
        paperId: "9701_s22_qp_22",
        paperType: "Paper 2",
        paperTitle: "May/June 2022 P22",
        yearSeries: "2022 s22",
        questionNumber: "Q5(a)-(d)",
        topicFocus: "Mechanism with curly arrows, dipole-dipole attractions, and elimination vs substitution products.",
      },
    ],
    examTips: [
      "Rate of hydrolysis depends on C-X bond enthalpy, NOT bond polarity (C-I is weakest bond, breaks fastest).",
    ],
  },
  16: {
    chapterNumber: 16,
    chapterTitle: "Carbonyl Compounds (Aldehydes and Ketones)",
    category: "Organic",
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
        questionNumber: "Q6",
        topicFocus: "Reduction with NaBH₄, mechanism with lone pairs, and melting point identification of derivatives.",
      },
    ],
    examTips: [
      "Never heat Tollens' reagent directly over a Bunsen flame; always use a warm beaker water bath (safety requirement).",
    ],
  },
  23: {
    chapterNumber: 23,
    chapterTitle: "Transition Elements",
    category: "Inorganic",
    practicalExperiments: [
      {
        testId: "cation-transition-metals",
        nameEn: "Transition Metal Hydroxides & Ligand Exchange (Cu²⁺, Fe²⁺, Fe³⁺, Cr³⁺, Mn²⁺)",
        nameMn: "Шилжилтийн металлын катионууд ба лиганд солилцооны өнгөний хувиралт",
        summary: "Characteristic precipitate colors with NaOH/NH₃ and complex formation in excess ammonia (e.g. [Cu(NH₃)₄(H₂O)₂]²⁺ deep blue).",
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
        questionNumber: "Question 2",
        topicFocus: "d-orbital splitting (octahedral ΔE = hf), origin of color, and stability constants (Kstab).",
      },
      {
        paperId: "9701_s24_qp_31",
        paperType: "Paper 3",
        paperTitle: "May/June 2024 P31 Practical",
        yearSeries: "2024 s31",
        questionNumber: "Question 3",
        topicFocus: "Qualitative identification of Cu²⁺, Fe²⁺, and Fe³⁺ in unknown solution.",
      },
    ],
    examTips: [
      "Explain color by: d-d electron transition between non-degenerate split d-orbitals absorbing light in visible region (ΔE = hc/λ), transmitted color is complementary.",
    ],
  },
  31: {
    chapterNumber: 31,
    chapterTitle: "Advanced Practical Skills (Paper 3 Guide)",
    category: "Practical",
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
    ],
  },
  32: {
    chapterNumber: 32,
    chapterTitle: "Planning, Analysis and Evaluation (Paper 5 Guide)",
    category: "Practical",
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
      "In Paper 5 planning questions, always specify: 1. Independent variable, 2. Dependent variable, 3. Two controlled variables with specific values, 4. Safety precautions with chemical hazards.",
    ],
  },
};

export function getLinkageForChapter(chapterNumber: number): ChapterLinkage | undefined {
  return CHAPTER_LINKAGES[chapterNumber];
}
