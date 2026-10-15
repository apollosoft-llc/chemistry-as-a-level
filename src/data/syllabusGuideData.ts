import { SyllabusTopic, SyllabusPaperSpec } from "../types";

export const CAMBRIDGE_PAPERS_SPEC: SyllabusPaperSpec[] = [
  {
    paperNumber: "Paper 1",
    titleEn: "Multiple Choice (MCQ)",
    titleMn: "Сонгох тест (Paper 1 MCQ)",
    durationMinutes: 75,
    totalMarks: 40,
    weightingAS: "31% of AS Level",
    weightingALevel: "15.5% of A Level",
    formatEn: "40 four-option multiple-choice questions testing AS Level content. All questions compulsory.",
    formatMn: "AS түвшний агуулгаар 40 ширхэг 4 хувилбартай тест. Бүх асуултад заавал хариулна.",
    testedSyllabusRange: "AS Level Topics 1–22 (Physical, Inorganic, Organic & Analytical basics)",
    testedSyllabusRangeMn: "AS түвшний 1–22-р сэдвүүд (Физик, Органик бус, Органик, Аналитик хими)",
    equipmentRulesEn: "Non-programmable scientific calculator and Data Section / Periodic Table provided.",
    equipmentRulesMn: "Программчлагддаггүй шинжлэх ухааны тооцоолуур ба Үелэх систем/Өгөгдлийн хуудас олгогдоно.",
    topStrategyTipsEn: [
      "Allocate approximately 1.8 minutes per question. Flag difficult multi-step calculation questions and return to them.",
      "Read stem carefully for negative qualifiers: 'NOT', 'INCORRECT', 'LEAST'.",
      "Eliminate clearly incorrect options first before evaluating remaining choices."
    ],
    topStrategyTipsMn: [
      "Нэг асуултад дунджаар 1.8 минут зарцуулах. Олон шатлалт бодлогыг тэмдэглээд сүүлд нь бодох.",
      "'NOT', 'INCORRECT', 'LEAST' гэсэн үгүйсгэсэн түлхүүр үгсийг анхааралтай унших.",
      "Шууд тохирохгүй байгаа 2 хувилбарыг эхлээд хасаж магадлалыг 50% болгох."
    ]
  },
  {
    paperNumber: "Paper 2",
    titleEn: "AS Level Structured Questions",
    titleMn: "AS Түвшний Задгай даалгавар (Paper 2 Structured)",
    durationMinutes: 75,
    totalMarks: 60,
    weightingAS: "46% of AS Level",
    weightingALevel: "23% of A Level",
    formatEn: "Structured questions testing AS Level content. Variable mark allocations (1 to 6 marks per part).",
    formatMn: "AS түвшний онол, урвалын механизм, тооцоот бодлого бүхий задгай даалгавар (дэд асуулт бүр 1–6 оноо).",
    testedSyllabusRange: "AS Level Topics 1–22 (In-depth physical, inorganic and organic mechanisms)",
    testedSyllabusRangeMn: "AS түвшний 1–22-р сэдвүүд (Гүнзгийрүүлсэн физик, органик урвалын механизмууд)",
    equipmentRulesEn: "Non-programmable calculator, black pen, ruler, and official Data Booklet section provided.",
    equipmentRulesMn: "Тооцоолуур, хар бал, шугам, Кембрижийн өгөгдлийн лавлах ашиглана.",
    topStrategyTipsEn: [
      "Always quote state symbols in thermochemical (ΔH) and ionisation energy equations.",
      "Show all intermediate working in numerical problems to gain consequential method marks (ECF).",
      "Organic reaction mechanisms require precise curly arrows originating exactly from lone pairs or bond centres."
    ],
    topStrategyTipsMn: [
      "Термохими (ΔH) ба иончлолын энергийн тэгшитгэлд төлөвийн тэмдэглэгээг (g, s, aq) заавал бичих.",
      "Тооцоот бодлогын бүх дундын үйлдлийг бичих (алдаа гарсан ч аргачлалын оноо ECF авна).",
      "Органик механизмын муруй сумыг сул хос эсвэл холбооны яг гол дундаас нарийн эхлүүлж зурах."
    ]
  },
  {
    paperNumber: "Paper 3",
    titleEn: "Advanced Practical Skills",
    titleMn: "Ахисан шатны практик туршилт (Paper 3 Practical)",
    durationMinutes: 120,
    totalMarks: 40,
    weightingAS: "23% of AS Level",
    weightingALevel: "11.5% of A Level",
    formatEn: "Hands-on laboratory examination: 1. Volumetric titration (14–16 marks), 2. Calorimetry / Gas collection (10–12 marks), 3. Qualitative analysis of unknown inorganic salts (12–14 marks).",
    formatMn: "Лабораторийн биет туршилтын шалгалт: 1. Титрлэлт (14–16 оноо), 2. Калориметр / Хий цуглуулах (10–12 оноо), 3. Чанарын шинжилгээний үл мэдэгдэх ион тодорхойлох (12–14 оноо).",
    testedSyllabusRange: "Experimental skills, apparatus manipulation, accuracy, data presentation, Qualitative Analysis Notes",
    testedSyllabusRangeMn: "Туршилтын ур чадвар, хэмжилтийн нарийвчлал, хүснэгт ба график байгуулалт, Чанарын шинжилгээний лавлах",
    equipmentRulesEn: "Full laboratory apparatus, qualitative analysis reagent bench, eye protection, lab coat.",
    equipmentRulesMn: "Лабораторийн бүрэн хэрэгсэл, урвалжууд, хамгаалалтын шил, халад.",
    topStrategyTipsEn: [
      "Record all burette titres to 2 decimal places ending in .00 or .05 cm³. Discard rough titre and average concordant titres within 0.10 cm³.",
      "Record thermometer temperatures to 1 decimal place (e.g. 21.5°C).",
      "For QA observations use official examiner terms: 'white precipitate, soluble in excess to give a colourless solution', 'effervescence', 'damp red litmus turns blue'."
    ],
    topStrategyTipsMn: [
      "Бюреткийн заалтыг .00 эсвэл .05 cm³-ээр төгссөн 2 оронгоор тэмдэглэх. 0.10 cm³ зөрүүтэй concordant утгуудын дунджийг авах.",
      "Термометрийн заалтыг 1 оронтой (21.5°C) нарийвчлалтай тэмдэглэх.",
      "Чанарын шинжилгээнд албан ёсны үг хэллэг хэрэглэх: 'white precipitate, soluble in excess to form colourless solution'."
    ]
  },
  {
    paperNumber: "Paper 4",
    titleEn: "A Level Structured Questions",
    titleMn: "A Түвшний Задгай даалгавар (Paper 4 Structured)",
    durationMinutes: 120,
    totalMarks: 100,
    weightingALevel: "38.5% of A Level",
    formatEn: "Comprehensive structured examination covering A2 Level topics (23–34) while integrating prerequisite AS concepts.",
    formatMn: "A2 түвшний гүнзгийрүүлсэн сэдвүүд (23–34) болон AS-ийн суурийг нэгтгэсэн 100 онооны цогц задгай даалгавар.",
    testedSyllabusRange: "A Level Topics 23–34 (Lattice energy, electrochem, buffers, kinetics, transition metals, aromatic, NMR)",
    testedSyllabusRangeMn: "A2 түвшний 23–34-р сэдвүүд (Борн-Хабер, Nernst, буфер, хурдны эрэмбэ, шилжилтийн металл, NMR)",
    equipmentRulesEn: "Scientific calculator, ruler, Data Booklet section provided.",
    equipmentRulesMn: "Тооцоолуур, шугам, Кембрижийн өгөгдлийн лавлах хуудас олгогдоно.",
    topStrategyTipsEn: [
      "Thermodynamics: always match units between ΔH (kJ mol⁻¹) and ΔS (J K⁻¹ mol⁻¹) when evaluating ΔG = ΔH - TΔS.",
      "Transition element colour: explain using crystal field splitting (d-d electron promotion absorbing visible light ΔE = hf).",
      "NMR questions: state chemical shift δ, number of peaks/splitting (n+1 rule), environment, and integration ratio."
    ],
    topStrategyTipsMn: [
      "Термодинамик: ΔG = ΔH - TΔS тооцоход ΔH (kJ mol⁻¹) ба ΔS (J K⁻¹ mol⁻¹)-ийн нэгжийг заавал ижилсүүлэх (÷ 1000).",
      "Шилжилтийн металлын өнгө: d-орбиталын хуваагдал ба d-d электрон шилжилт үзэгдэх гэрэл шингээдэгтэй холбож тайлбарлах.",
      "NMR даалгаварт: химийн шилжилт δ, задралын хэлбэр (n+1 дүрэм), устөрөгчийн орчин ба интегралын харьцааг бүрэн бичих."
    ]
  },
  {
    paperNumber: "Paper 5",
    titleEn: "Planning, Analysis and Evaluation",
    titleMn: "Төлөвлөлт, Шинжилгээ & Үнэлгээ (Paper 5 Practical Theory)",
    durationMinutes: 75,
    totalMarks: 30,
    weightingALevel: "11.5% of A Level",
    formatEn: "Written examination testing experimental design, data interpretation, error analysis, and evaluation of practical methods.",
    formatMn: "Туршилтын арга зүй төлөвлөх, өгөгдөл боловсруулах, алдаа тооцоолох ба дүгнэлт гаргах бичгийн шалгалт.",
    testedSyllabusRange: "Experimental planning, variables control, safety hazard assessments, graph analysis, anomalous points",
    testedSyllabusRangeMn: "Туршилтын загварчлал, хувьсагчийн хяналт, аюулгүй ажиллагаа, график шулууны налуу, гаж цэгүүд",
    equipmentRulesEn: "Scientific calculator, 30cm transparent ruler, sharp pencil, eraser.",
    equipmentRulesMn: "Тооцоолуур, 30см тунгалаг шугам, харандаа, баллуур.",
    topStrategyTipsEn: [
      "In Q1 planning, explicitly define: 1. Independent variable, 2. Dependent variable, 3. Two key controlled variables with specific numerical parameters.",
      "Identify chemical hazards with specific precautions (e.g. 'conc. HNO₃ is corrosive — handle in fume hood wearing nitrile gloves').",
      "When plotting graphs, points must occupy more than 50% of the grid in both axes. Draw line of best fit with balanced distribution."
    ],
    topStrategyTipsMn: [
      "Q1 төлөвлөлтөд: 1. Үл хамаарах хувьсагч, 2. Хамаарах хувьсагч, 3. Тогтмол байлгах 2 хувьсагчийг тоон утгатай нь тодорхой бичих.",
      "Химийн бодисын аюулыг тодорхой арга хэмжээтэй холбох (жишээ нь: conc. HNO₃ идэмхий тул утааны шүүгээнд нитрил бээлийтэй ажиллах).",
      "График байгуулахдаа цэгүүд торны 50%-иас их талбайг эзэлсэн байх, хамгийн оновчтой тэнцвэртэй шулуун татах."
    ]
  }
];

export const ASSESSMENT_OBJECTIVES_SPEC = [
  {
    code: "AO1",
    nameEn: "Knowledge with understanding",
    nameMn: "Мэдлэг ба ойлголт",
    weightingEn: "approx. 42% across all papers",
    weightingMn: "нийт шалгалтын ~42%",
    descriptionEn: "Recall scientific phenomena, facts, laws, definitions, concepts, theories, and terminology.",
    descriptionMn: "Шинжлэх ухааны үзэгдэл, баримт, хууль, тодорхойлолт, томьёо ба нэр томьёог сэргээн санах, тайлбарлах."
  },
  {
    code: "AO2",
    nameEn: "Handling, applying and evaluating information",
    nameMn: "Мэдээлэл боловсруулах, хэрэглэх & үнэлэх",
    weightingEn: "approx. 35% across all papers",
    weightingMn: "нийт шалгалтын ~35%",
    descriptionEn: "Translate information from one form to another, manipulate numerical data, construct arguments, and propose explanations.",
    descriptionMn: "Тоон ба чанарын өгөгдөл боловсруулах, шинэ нөхцөлд онолоо хэрэглэх, тооцоо хийх, үндэслэл бүхий дүгнэлт гаргах."
  },
  {
    code: "AO3",
    nameEn: "Experimental skills and investigations",
    nameMn: "Туршилтын ур чадвар & судалгаа",
    weightingEn: "approx. 23% across all papers",
    weightingMn: "нийт шалгалтын ~23%",
    descriptionEn: "Plan experiments, select appropriate techniques, make and record accurate observations, evaluate methods and suggest improvements.",
    descriptionMn: "Туршилт төлөвлөх, багаж урвалжийг зөв ашиглах, нарийвчлалтай хэмжилт хийх, алдааг үнэлэх ба сайжруулалт санал болгох."
  }
];

export const SYLLABUS_TOPICS_DATA: SyllabusTopic[] = [
  {
    id: "syl-1",
    topicNumber: 1,
    level: "AS",
    pillar: "Physical",
    titleEn: "Atomic Structure",
    titleMn: "Атомын бүтэц & Электрон байгууламж",
    syllabusCodes: ["1.1", "1.2", "1.3", "1.4"],
    correspondingChapterNumbers: [1, 2],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "1.1",
        outcomeEn: "Describe the structure of an atom and the properties of subatomic particles (protons, neutrons, electrons) including relative charge and mass.",
        outcomeMn: "Атомын бүтэц ба эгэл бөөмс (протон, нейтрон, электрон)-ийн харьцангуй масс ба цэнэгийг тодорхойлох."
      },
      {
        code: "1.2",
        outcomeEn: "Define isotopes and calculate relative atomic mass (Ar) from mass spectra data.",
        outcomeMn: "Изотопыг тодорхойлох ба масс спектрийн өгөгдлөөс харьцангуй атом масс Ar-ийг тооцоолох."
      },
      {
        code: "1.3",
        outcomeEn: "Deduce electronic configurations of atoms and ions up to Z = 36 using 1s² 2s² 2p⁶ notation (including Cr and Cu exceptions).",
        outcomeMn: "Z=1-ээс 36 хүртэлх атомууд ба ионуудын электрон тохиргоог s, p, d орбиталаар бичих (Cr, Cu-ийн онцлог)."
      },
      {
        code: "1.4",
        outcomeEn: "Define 1st and successive ionisation energies, state factors affecting IE (nuclear charge, shielding, radius, spin-pair repulsion), and interpret IE graphs.",
        outcomeMn: "1-р ба дараалсан иончлолын энергийг тодорхойлох, нөлөөлөх 4 хүчин зүйлийг тайлбарлах, IE график шинжлэх."
      }
    ],
    examFocusNotesEn: "State symbols (g) are mandatory in ionisation equations: X(g) → X⁺(g) + e⁻. Watch for 4s electron removal before 3d when transition metals form cations.",
    examFocusNotesMn: "Иончлолын тэгшитгэлд хийн төлөв (g) байхгүй бол оноо шууд хасагдана. Шилжилтийн металл ион үүсгэхдээ 4s электроноо түрүүлж алддаг.",
    keyFormulas: [
      "Ar = Σ (Isotopic mass × % abundance) / 100",
      "1st IE: X(g) → X⁺(g) + e⁻",
      "Deflection ∝ Charge / Mass"
    ],
    practicalSkillsLinked: ["Flame emission tests (electron excitation and photon emission)"]
  },
  {
    id: "syl-2",
    topicNumber: 2,
    level: "AS",
    pillar: "Physical",
    titleEn: "Atoms, Molecules and Stoichiometry",
    titleMn: "Атом, молекул ба стехиометр (Молийн тооцоо)",
    syllabusCodes: ["2.1", "2.2", "2.3"],
    correspondingChapterNumbers: [3],
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    calculationTopicId: "mole-stoichiometry",
    learningOutcomes: [
      {
        code: "2.1",
        outcomeEn: "Define the mole in terms of the Avogadro constant L (6.02 × 10²³ mol⁻¹) and unified atomic mass unit u.",
        outcomeMn: "Моль болон Авогадрогийн тогтмол L (6.02 × 10²³ mol⁻¹), нэгдсэн массын нэгж u-г тодорхойлох."
      },
      {
        code: "2.2",
        outcomeEn: "Calculate empirical and molecular formulae from composition by mass or combustion data.",
        outcomeMn: "Массын хувь ба шаталтын өгөгдлөөс эмпирик болон молекулын томьёог тооцоолох."
      },
      {
        code: "2.3",
        outcomeEn: "Perform calculations using stoichiometry, reacting masses, gas volumes at r.t.p. (24.0 dm³), solution concentrations (c = n/V), and calculate percentage yield and atom economy.",
        outcomeMn: "Стехиометр, урвалын масс, өрөөний нөхцөл дэх хийн эзлэхүүн (24 dm³), уусмалын концентраци, хувийн гарц ба атом ашиглалт тооцоолох."
      }
    ],
    examFocusNotesEn: "Check units: 1 dm³ = 1000 cm³. In titration calculations, convert cm³ to dm³ by dividing by 1000. Give answers to appropriate significant figures (usually 3 s.f.).",
    examFocusNotesMn: "Нэгжийн шилжилт: 1 dm³ = 1000 cm³. Титрлэлтийн cm³-ийг заавал 1000-д хувааж dm³ болгох. Эцсийн хариуг 3 найдвартай цифрээр бичих.",
    keyFormulas: [
      "n = m / Mr",
      "n = c × V (dm³)",
      "V = n × 24.0 dm³",
      "% Yield = (Actual / Theoretical) × 100%"
    ],
    practicalSkillsLinked: ["Volumetric titration preparation", "Gas syringe collection of molar volume"]
  },
  {
    id: "syl-3",
    topicNumber: 3,
    level: "AS",
    pillar: "Physical",
    titleEn: "Chemical Bonding",
    titleMn: "Химийн холбоо & Молекулын хэлбэр (VSEPR)",
    syllabusCodes: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"],
    correspondingChapterNumbers: [4],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "3.1",
        outcomeEn: "Describe ionic bonding as electrostatic attraction between oppositely charged ions in a giant lattice.",
        outcomeMn: "Ионы холбоог талст оронт торон дахь эсрэг цэнэгтэй ионуудын цахилгаан таталцал гэж тодорхойлох."
      },
      {
        code: "3.2",
        outcomeEn: "Describe covalent and co-ordinate (dative) bonding, drawing dot-and-cross diagrams including expanded octet species (SF₆, PCl₅, Al₂Cl₆).",
        outcomeMn: "Ковалент ба координацын (донор-акцептор) холбоог цэг-хэрээс диаграммаар зурах (SF₆, PCl₅, Al₂Cl₆)."
      },
      {
        code: "3.3",
        outcomeEn: "Use VSEPR theory to predict molecular shapes and bond angles (linear 180°, trigonal planar 120°, tetrahedral 109.5°, pyramidal 107°, non-linear 104.5°, octahedral 90°).",
        outcomeMn: "VSEPR онолоор молекулын хэлбэр ба холбооны өнцгийг тодорхойлох (Сул хос бүр өнцгийг ~2.5°-аар багасгадаг)."
      },
      {
        code: "3.4",
        outcomeEn: "Describe σ and π bonds, sp/sp²/sp³ hybridisation, electronegativity, bond polarity, and intermolecular forces (id-id London dispersion, pd-pd, and hydrogen bonding).",
        outcomeMn: "σ ба π холбоо, эрлийзжилт, цахилгаан сөрөг чанар, туйлт холбоо, молекул хоорондын хүч (id-id, pd-pd, устөрөгчийн холбоо)-ийг тайлбарлах."
      }
    ],
    examFocusNotesEn: "Repulsion strength: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair. For hydrogen bonding, hydrogen must be bonded directly to highly electronegative N, O, or F with a lone pair.",
    examFocusNotesMn: "Түлхэлтийн хүч: Сул хос-Сул хос > Сул хос-Холбоот хос > Холбоот хос-Холбоот хос. Устөрөгчийн холбоо үүсгэхийн тулд H нь өндөр цахилгаан сөрөг N, O, F атомтой шууд холбогдсон байх ёстой.",
    keyFormulas: [
      "Electronegativity trend: F > O > N ≈ Cl > Br > I > C > H",
      "Bond angle: tetrahedral = 109.5°, pyramidal (NH₃) = 107°, V-shaped (H₂O) = 104.5°"
    ]
  },
  {
    id: "syl-4",
    topicNumber: 4,
    level: "AS",
    pillar: "Physical",
    titleEn: "States of Matter",
    titleMn: "Бодисын төлөв & Идеал хийн хууль (pV = nRT)",
    syllabusCodes: ["4.1", "4.2", "4.3", "4.4"],
    correspondingChapterNumbers: [5],
    examPapers: ["Paper 1", "Paper 2"],
    calculationTopicId: "ideal-gas",
    learningOutcomes: [
      {
        code: "4.1",
        outcomeEn: "State the basic assumptions of the kinetic theory of ideal gases and explain deviations of real gases at low temperature and high pressure.",
        outcomeMn: "Идеал хийн кинетик онолын таамаглалууд ба бодит хий бага температур, өндөр даралтад идеал төлөвөөс хазайдаг шалтгааныг тайлбарлах."
      },
      {
        code: "4.2",
        outcomeEn: "Use the ideal gas equation pV = nRT = (m/Mr)RT in calculations with rigorous SI unit conversions (p in Pa, V in m³, T in K).",
        outcomeMn: "pV = nRT тэгшитгэлийг SI нэгжээр (p: Pa, V: m³, T: K) ашиглан дэгдэмхий шингэний молекул масс Mr олох."
      },
      {
        code: "4.3",
        outcomeEn: "Describe the giant ionic, simple molecular, giant molecular (diamond, graphite, graphene), and metallic solid lattices and relate structure to physical properties.",
        outcomeMn: "Ионы, молекулын, ковалент аварга (алмаз, бал чулуу, графен) ба металл талст торын бүтэц, физик шинж чанарын холбоог тайлбарлах."
      }
    ],
    examFocusNotesEn: "Common SI unit traps in pV = nRT: cm³ to m³ is × 10⁻⁶; dm³ to m³ is × 10⁻³; kPa to Pa is × 10³. Temperature MUST be in Kelvin (T = °C + 273.15).",
    examFocusNotesMn: "Хамгийн түгээмэл нэгжийн алдаа: cm³-ээс m³ рүү шилжүүлэхдээ 10⁻⁶-аар үржүүлнэ. Температур заавал Кельвин (K = °C + 273) байх ёстой.",
    keyFormulas: [
      "pV = nRT",
      "Mr = (m × R × T) / (p × V)",
      "1 m³ = 1000 dm³ = 1,000,000 cm³"
    ]
  },
  {
    id: "syl-5",
    topicNumber: 5,
    level: "AS",
    pillar: "Physical",
    titleEn: "Chemical Energetics",
    titleMn: "Химийн энергетик & Гессийн хууль",
    syllabusCodes: ["5.1", "5.2"],
    correspondingChapterNumbers: [6],
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    calculationTopicId: "energetics-hess",
    learningOutcomes: [
      {
        code: "5.1",
        outcomeEn: "Define standard enthalpy changes: formation (ΔH⦵f), combustion (ΔH⦵c), neutralisation (ΔH⦵neut), and reaction (ΔH⦵r) under standard conditions (298 K, 100 kPa).",
        outcomeMn: "Үүсэхийн (ΔH⦵f), шатахын (ΔH⦵c), саармагжих (ΔH⦵neut) стандарт энтальпийн тодорхойлолт ба нөхцөл (298 K, 100 kPa).",
      },
      {
        code: "5.2",
        outcomeEn: "Calculate enthalpy changes using experimental calorimetry data (q = mcΔT) and apply Hess's Law cycles using formation, combustion, and bond enthalpy data.",
        outcomeMn: "Калориметрийн туршилтын өгөгдлөөр (q = mcΔT) энтальпи тооцох ба Гессийн хуулийн мөчлөг байгуулах."
      }
    ],
    examFocusNotesEn: "Always convert q (Joules) to kJ (÷ 1000) before dividing by moles! Exothermic reactions have negative ΔH (don't forget the '-' sign in front of the value).",
    examFocusNotesMn: "q (Жоуль)-ийг мольд хуваахаасаа өмнө заавал kJ болгох (÷ 1000)! Экзотерм урвалын өмнө заавал хасах (-) тэмдэг тавих.",
    keyFormulas: [
      "q = mcΔT",
      "ΔH = - (q in kJ) / n",
      "ΔH_rxn = Σ ΔHf(products) - Σ ΔHf(reactants)",
      "ΔH_rxn = Σ Bond Enthalpy(broken) - Σ Bond Enthalpy(formed)"
    ],
    practicalSkillsLinked: ["Calorimetry of neutralisation/displacement in polystyrene cup"]
  },
  {
    id: "syl-6",
    topicNumber: 6,
    level: "AS",
    pillar: "Physical",
    titleEn: "Electrochemistry",
    titleMn: "Редокс урвал & Исэлдэлтийн зэрэг",
    syllabusCodes: ["6.1"],
    correspondingChapterNumbers: [7],
    examPapers: ["Paper 1", "Paper 2"],
    calculationTopicId: "electrochemistry-faraday",
    learningOutcomes: [
      {
        code: "6.1",
        outcomeEn: "Calculate oxidation numbers of elements in compounds and ions; deduce whether a reaction is redox via electron transfer.",
        outcomeMn: "Нэгдлүүд дэх элементүүдийн исэлдэлтийн зэргийг тодорхойлох; электроны шилжилтээр исэлдэн-ангижрах урвалыг таних.",
      },
      {
        code: "6.2",
        outcomeEn: "Construct balanced ionic half-equations and overall redox equations; define oxidising and reducing agents.",
        outcomeMn: "Ионы хагас тэгшитгэл бичих, тэнцвэржүүлэх; исэлдүүлэгч ба ангижруулагчийг нэрлэх."
      }
    ],
    examFocusNotesEn: "Oxidation is loss of electrons / increase in oxidation number (OIL). Reduction is gain of electrons / decrease in oxidation number (RIG). Disproportionation is simultaneous oxidation and reduction of the SAME element.",
    examFocusNotesMn: "Исэлдэх = электрон алдах / исэлдэлтийн зэрэг ихсэх. Ангижрах = электрон авах / исэлдэлтийн зэрэг буурах. Диспропорциональ = нэг элементийн атом зэрэг исэлдэж бас ангижрах.",
    keyFormulas: [
      "OIL RIG (Oxidation Is Loss, Reduction Is Gain)",
      "Sum of oxidation numbers in neutral compound = 0; in polyatomic ion = ion charge"
    ]
  },
  {
    id: "syl-7",
    topicNumber: 7,
    level: "AS",
    pillar: "Physical",
    titleEn: "Equilibria",
    titleMn: "Химийн тэнцвэр & Тэнцвэрийн тогтмол (Kc, Kp)",
    syllabusCodes: ["7.1", "7.2"],
    correspondingChapterNumbers: [8],
    examPapers: ["Paper 1", "Paper 2"],
    calculationTopicId: "equilibria-kc-kp",
    learningOutcomes: [
      {
        code: "7.1",
        outcomeEn: "Explain dynamic equilibrium and apply Le Chatelier’s principle to deduce effects of temperature, pressure, concentration, and catalysts.",
        outcomeMn: "Динамик тэнцвэрийг тайлбарлах ба Ле Шательегийн зарчмаар температур, даралт, концентраци, катализаторын нөлөөг тайлбарлах.",
      },
      {
        code: "7.2",
        outcomeEn: "Write expressions for Kc and Kp, determine their units, calculate equilibrium concentrations/partial pressures using ICE tables, and explain why ONLY temperature changes the value of Kc and Kp.",
        outcomeMn: "Kc ба Kp-ийн илэрхийлэл бичих, нэгжийг олох, ICE хүснэгтээр тэнцвэрийн утгыг тооцоолох; зөвхөн температур Kc/Kp-ийн утгыг өөрчилдгийг тайлбарлах.",
      },
      {
        code: "7.3",
        outcomeEn: "Define acids and bases using the Brønsted–Lowry theory (proton donors and acceptors) and identify conjugate acid-base pairs.",
        outcomeMn: "Брёнстед-Лоуригийн онолоор хүчил (протон донор), суурь (протон акцептор) ба хосмог хүчил-суурийг тодорхойлох."
      }
    ],
    examFocusNotesEn: "Catalysts increase the rate of BOTH forward and backward reactions equally; they DO NOT alter the position of equilibrium or value of Kc/Kp.",
    examFocusNotesMn: "Катализатор шулуун ба буцах урвалын хурдыг адилхан нэмэгдүүлдэг тул тэнцвэрийн шилжилт болон Kc/Kp-ийн утгад огт нөлөөлөхгүй.",
    keyFormulas: [
      "Kc = [products]^coeff / [reactants]^coeff",
      "Kp = (p_products)^coeff / (p_reactants)^coeff",
      "Mole fraction x_A = n_A / n_total;  p_A = x_A × P_total"
    ]
  },
  {
    id: "syl-8",
    topicNumber: 8,
    level: "AS",
    pillar: "Physical",
    titleEn: "Reaction Kinetics",
    titleMn: "Урвалын хурд & Больцманы тархалт",
    syllabusCodes: ["8.1", "8.2"],
    correspondingChapterNumbers: [9],
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    calculationTopicId: "kinetics-rates",
    learningOutcomes: [
      {
        code: "8.1",
        outcomeEn: "Explain collision theory, activation energy (Ea), and factors affecting reaction rate (concentration, pressure, surface area, temperature, catalysts).",
        outcomeMn: "Мөргөлдөлтийн онол, идэвхжлийн энерги (Ea) ба хурдад нөлөөлөх хүчин зүйлсийг тайлбарлах.",
      },
      {
        code: "8.2",
        outcomeEn: "Draw and interpret Maxwell-Boltzmann energy distribution curves showing the effect of temperature and catalysts on the proportion of particles with E ≥ Ea.",
        outcomeMn: "Максвелл-Больцманы энергийн тархалтын муруйг зурж, температур ба катализатор E ≥ Ea энергитэй бөөмсийн эзлэх хувийг хэрхэн ихэсгэдгийг тайлбарлах."
      }
    ],
    examFocusNotesEn: "Maxwell-Boltzmann curve starts at origin (0,0), never touches the energy axis at high energy, and the area under the curve equals total number of molecules.",
    examFocusNotesMn: "Максвелл-Больцманы муруй координатын эхлэл (0,0)-ээс эхэлдэг, өндөр энергийн төгсгөл нь хэвтээ тэнхлэгт хэзээ ч хүрдэггүй, доорх талбай нь нийт молекулын тоотой тэнцүү.",
    keyFormulas: [
      "Rate = Δ[concentration] / Δtime",
      "Proportion of effective collisions ∝ area under curve where E ≥ Ea"
    ],
    practicalSkillsLinked: ["Rates of reaction (disappearing cross with thiosulfate, gas syringe)"]
  },
  {
    id: "syl-9",
    topicNumber: 9,
    level: "AS",
    pillar: "Inorganic",
    titleEn: "The Periodic Table: Chemical Periodicity",
    titleMn: "Үелэх систем: 3-р үеийн зүй тогтол",
    syllabusCodes: ["9.1", "9.2", "9.3"],
    correspondingChapterNumbers: [10],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "9.1",
        outcomeEn: "Describe the variation in atomic radius, ionic radius, melting point, and electrical conductivity across Period 3 (Na to Ar) in terms of structure and bonding.",
        outcomeMn: "3-р үеийн дагуу атомын ба ионы радиус, хайлах температур, цахилгаан дамжуулах чанарын өөрчлөлтийг бүтэц ба холбоотой уялдуулан тайлбарлах.",
      },
      {
        code: "9.2",
        outcomeEn: "Describe the reactions of Period 3 elements with oxygen, chlorine, and water; state oxidation numbers and bonding in oxides and chlorides.",
        outcomeMn: "3-р үеийн элементүүдийн хүчилтөрөгч, хлор, устай урвалд орох шинж, үүсэх оксид ба хлоридуудын холбооны төрөл, исэлдэлтийн зэрэг.",
      },
      {
        code: "9.3",
        outcomeEn: "Describe the acid/base behavior of Period 3 oxides (Na₂O basic to SO₃ acidic, Al₂O₃ amphoteric) and the hydrolysis of Period 3 chlorides with water.",
        outcomeMn: "3-р үеийн оксидуудын хүчил-суурийн шинж (Na₂O суурилаг, Al₂O₃ амфотер, SO₃ хүчиллэг) ба хлоридуудын усаар гидролизод орох шинж (SiCl₄, PCl₅ утаа хаях)."
      }
    ],
    examFocusNotesEn: "Al₂O₃ is amphoteric (reacts with both acids: Al₂O₃ + 6H⁺ → 2Al³⁺ + 3H₂O and hot alkalis: Al₂O₃ + 2OH⁻ + 3H₂O → 2[Al(OH)₄]⁻). SiCl₄ and PCl₅ hydrolyse vigorously giving acidic steamy white fumes of HCl.",
    examFocusNotesMn: "Al₂O₃ нь амфотер оксид (хүчил ба халуун шүлт хоёулантай нь урвалд ордог). SiCl₄ ба PCl₅ устай маш эрчимтэй урвалд орж HCl-ийн цагаан утаа ялгаруулдаг.",
    keyFormulas: [
      "Basic oxides: Na₂O, MgO",
      "Amphoteric: Al₂O₃",
      "Acidic oxides: SiO₂ (giant covalent), P₄O₁₀, SO₂, SO₃"
    ]
  },
  {
    id: "syl-10",
    topicNumber: 10,
    level: "AS",
    pillar: "Inorganic",
    titleEn: "Group 2 (Alkaline Earth Metals)",
    titleMn: "2-р бүлэг (Шүлтлэг газрын металлууд)",
    syllabusCodes: ["10.1", "10.2"],
    correspondingChapterNumbers: [11],
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    learningOutcomes: [
      {
        code: "10.1",
        outcomeEn: "Describe the trends in reactivity of Group 2 elements (Mg to Ba) with oxygen, water, and dilute acids; explain trends in thermal stability of nitrates and carbonates.",
        outcomeMn: "Mg-аас Ba хүртэл урвалын идэвх нэмэгдэх зүй тогтол; нитрат ба карбонатуудын дулааны тэсвэрт чанар бүлгийн дагуу ихэсдэг шалтгааныг тайлбарлах.",
      },
      {
        code: "10.2",
        outcomeEn: "Describe the trends in solubility of Group 2 hydroxides (increases down group) and sulfates (decreases down group).",
        outcomeMn: "2-р бүлгийн гидроксидуудын уусах чанар бүлгийн дагуу ихэсдэг, сульфатуудын уусах чанар буурдаг зүй тогтол.",
      },
      {
        code: "10.3",
        outcomeEn: "State the uses of Group 2 compounds: Ca(OH)₂ and CaCO₃ in agriculture/soil neutralization, BaSO₄ in medicine, and CaO/CaCO₃ in flue gas desulfurization.",
        outcomeMn: "2-р бүлгийн нэгдлүүдийн хэрэглээ: Хөдөө аж ахуйд хүчиллэг хөрс саармагжуулах Ca(OH)₂, рентген оношилгооны BaSO₄, утааны хий цэвэрлэх CaO/CaCO₃."
      }
    ],
    examFocusNotesEn: "Thermal stability increases down Group 2 because cation radius increases, charge density decreases, and polarizing power on the carbonate ion's electron cloud decreases (weakening C-O bond less).",
    examFocusNotesMn: "Бүлгийн дагуу дулааны тэсвэрт чанар ихэсдэг учир: катионы радиус томорсноор цэнэгийн нягт багасаж, карбонат ионы электрон үүлийг туйлшруулах хүч сулардаг тул C-O холбоо сулрахгүй.",
    keyFormulas: [
      "Thermal decomposition: 2M(NO₃)₂ → 2MO + 4NO₂ + O₂",
      "Solubility trend: Hydroxides MORE soluble down group; Sulfates LESS soluble down group"
    ],
    practicalSkillsLinked: ["Flame tests (Ca²⁺ brick red, Sr²⁺ crimson, Ba²⁺ apple green)", "Precipitation of BaSO₄"]
  },
  {
    id: "syl-11",
    topicNumber: 11,
    level: "AS",
    pillar: "Inorganic",
    titleEn: "Group 17 (The Halogens)",
    titleMn: "17-р бүлэг (Галогенууд)",
    syllabusCodes: ["11.1", "11.2", "11.3", "11.4"],
    correspondingChapterNumbers: [12],
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    learningOutcomes: [
      {
        code: "11.1",
        outcomeEn: "Describe the trends in volatility and color of halogens (Cl₂ pale green gas, Br₂ red-brown liquid, I₂ purple-black solid) and explain boiling points via instantaneous dipole-induced dipole forces.",
        outcomeMn: "Галогенуудын өнгө, физик төлөв, хайлах/буцлах температур бүлгийн дагуу өсөх шалтгаан (молекул хоорондын id-id хүч).",
      },
      {
        code: "11.2",
        outcomeEn: "Describe halogen displacement reactions showing oxidising strength decreases down Group 17; explain relative thermal stability of hydrogen halides via bond enthalpies.",
        outcomeMn: "Галогенуудын исэлдүүлэгч чанар бүлгийн дагуу буурах байр халах урвалууд; H-X холбооны энерги багассанаар устөрөгчийн галогенидуудын дулааны тэсвэрт чанар буурдаг учир.",
      },
      {
        code: "11.3",
        outcomeEn: "Describe testing for halide ions (Cl⁻, Br⁻, I⁻) using acidified AgNO₃ followed by dilute and concentrated aqueous ammonia.",
        outcomeMn: "Галогенид ионуудыг (Cl⁻, Br⁻, I⁻) хүчиллэгжүүлсэн AgNO₃ болон шингэрүүлсэн/өтгөн аммиакаар ялган таних.",
      },
      {
        code: "11.4",
        outcomeEn: "Describe disproportionation reactions of chlorine with cold dilute NaOH (forms NaClO) and hot concentrated NaOH (forms NaClO₃).",
        outcomeMn: "Хлорын хүйтэн шингэн NaOH-тай (NaClO үүсэх) ба халуун өтгөн NaOH-тай (NaClO₃ үүсэх) диспропорциональ урвалууд."
      }
    ],
    examFocusNotesEn: "Halide testing: AgCl is white, soluble in dilute NH₃; AgBr is cream, soluble only in conc. NH₃; AgI is yellow, insoluble in both dilute and concentrated NH₃.",
    examFocusNotesMn: "Галогенидийн сорил: AgCl цагаан, шингэн NH₃-т уусна; AgBr крем шар, зөвхөн өтгөн NH₃-т уусна; AgI шар, алинд нь ч уусахгүй.",
    keyFormulas: [
      "Cold NaOH: Cl₂ + 2NaOH → NaCl + NaClO + H₂O",
      "Hot NaOH: 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O"
    ],
    practicalSkillsLinked: ["Halide ion testing with AgNO₃ and NH₃", "Halogen displacement with cyclohexane solvent"]
  },
  {
    id: "syl-12",
    topicNumber: 12,
    level: "AS",
    pillar: "Inorganic",
    titleEn: "Nitrogen and Sulfur",
    titleMn: "Азот ба Хүхрийн нэгдлүүд",
    syllabusCodes: ["12.1", "12.2"],
    correspondingChapterNumbers: [13],
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    learningOutcomes: [
      {
        code: "12.1",
        outcomeEn: "Explain the lack of reactivity of nitrogen gas due to the very high bond enthalpy of the N≡N triple bond.",
        outcomeMn: "Азотын молекул дахь N≡N гурвалсан холбооны энерги маш өндөр (945 kJ/mol) тул химийн идэвхгүй байдгийг тайлбарлах.",
      },
      {
        code: "12.2",
        outcomeEn: "Describe the basicity of ammonia, testing for ammonium ions (NH₄⁺) by heating with aqueous NaOH to produce alkaline NH₃ gas.",
        outcomeMn: "Аммиакийн суурилаг шинж, NH₄⁺ ионыг NaOH-тай халааж ялгарах NH₃ хийг чийгтэй улаан лакмусаар таних.",
      },
      {
        code: "12.3",
        outcomeEn: "Explain the role of NO and NO₂ as catalysts in atmospheric photochemical oxidation of SO₂ to SO₃, and describe the formation and environmental impacts of acid rain.",
        outcomeMn: "Агаар мандал дахь хүчлийн бороо үүсэхэд NO, NO₂ исэлдэлтийн катализатор болдог механизм ба хүрээлэн буй орчны нөлөө."
      }
    ],
    examFocusNotesEn: "Test for NH₄⁺: Add dilute NaOH and warm gently. Turns damp red litmus paper blue. NO₂ acts as a homogeneous catalyst: SO₂ + NO₂ → SO₃ + NO followed by 2NO + O₂ → 2NO₂.",
    examFocusNotesMn: "NH₄⁺-ийн сорил: NaOH нэмж зөөлөн халаана. Ялгарсан хий чийгтэй улаан лакмусыг хөх өнгөтэй болгоно. NO₂ нь хүхрийн давхар исэл агаарт исэлдэх нэгэн төрлийн катализатор болдог.",
    keyFormulas: [
      "NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l)",
      "Contact Process: 2SO₂ + O₂ ⇌ 2SO₃ (V₂O₅ catalyst, 450°C)"
    ],
    practicalSkillsLinked: ["Testing for ammonium ions and nitrate reduction with Devarda's alloy / Al foil"]
  },
  {
    id: "syl-13",
    topicNumber: 13,
    level: "AS",
    pillar: "Organic",
    titleEn: "An Introduction to AS Organic Chemistry",
    titleMn: "Органик химийн удиртгал (Нэршил, Бүтэц, Изомер)",
    syllabusCodes: ["13.1", "13.2", "13.3", "13.4"],
    correspondingChapterNumbers: [14],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "13.1",
        outcomeEn: "Interpret and use empirical, molecular, structural, displayed, and skeletal formulae; name organic compounds using IUPAC systematic nomenclature.",
        outcomeMn: "Эмпирик, молекулын, бүтцийн, дэлгэмэл ба араг ясан томьёог ашиглах; органик нэгдлүүдийг IUPAC олон улсын нэршлээр нэрлэх.",
      },
      {
        code: "13.2",
        outcomeEn: "Classify organic reactions: substitution, addition, elimination, oxidation, reduction, hydrolysis, condensation, and free-radical.",
        outcomeMn: "Органик урвалуудыг ангилах: байр халах, нэгдэх, тасрах (элиминаци), исэлдэх, ангижрах, гидролиз, чөлөөт радикал.",
      },
      {
        code: "13.3",
        outcomeEn: "Describe structural isomerism (chain, positional, functional group) and stereoisomerism (cis/trans or E/Z isomerism due to restricted rotation of C=C, and optical isomerism with chiral carbon centers).",
        outcomeMn: "Бүтцийн изомер (хэлхээний, байршлын, функциональ бүлгийн) ба орон зайн изомер (C=C холбооны чөлөөт бус эргэлтээс үүсэх цис/транс болон хирал төвтэй оптик изомер)."
      }
    ],
    examFocusNotesEn: "Chiral center has a carbon atom bonded to 4 DIFFERENT groups/atoms. Enantiomers are non-superimposable mirror images that rotate plane-polarized light in opposite directions.",
    examFocusNotesMn: "Хирал нүүрстөрөгчийн атом нь 4 ӨӨР атом/бүлэгтэй холбогдсон байна. Оптик энантиомерууд нь хавтгай туйлширсан гэрлийг эсрэг зүгт эргүүлдэг толин тусгал бүтцүүд юм.",
    keyFormulas: [
      "Homologous series general formulas: Alkane CnH2n+2, Alkene CnH2n, Alcohol CnH2n+1OH",
      "Number of optical isomers = 2^n (where n = number of chiral centers)"
    ]
  },
  {
    id: "syl-14",
    topicNumber: 14,
    level: "AS",
    pillar: "Organic",
    titleEn: "Hydrocarbons (Alkanes and Alkenes)",
    titleMn: "Нүүрсустөрөгчид (Алкан & Алкен)",
    syllabusCodes: ["14.1", "14.2"],
    correspondingChapterNumbers: [15],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "14.1",
        outcomeEn: "Describe the unreactivity of alkanes, combustion, and the free-radical substitution mechanism of alkanes with chlorine/bromine (initiation, propagation, termination steps under UV light).",
        outcomeMn: "Алканы шатах ба хлор/бромтой хэт ягаан туяаны нөлөөгөөр чөлөөт радикалын байр халах механизм (эхлэх, үргэлжлэх, тасрах шат).",
      },
      {
        code: "14.2",
        outcomeEn: "Describe electrophilic addition of Br₂(aq), HBr(g), and steam/H₃PO₄ to alkenes; explain Markovnikov’s rule via stability of carbocation intermediates (tertiary > secondary > primary).",
        outcomeMn: "Алкений электрофил нэгдэх урвалын механизм (Br₂, HBr); карбкатионы тогтворжилт дээр үндэслэн Марковниковын дүрмийг тайлбарлах (3-дагч > 2-догч > 1-дэгч).",
      },
      {
        code: "14.3",
        outcomeEn: "Describe oxidation of alkenes using cold dilute acidified KMnO₄ (forming diols) and hot concentrated acidified KMnO₄ (cleavage of C=C bond to identify alkene structure).",
        outcomeMn: "Алкенийг хүйтэн KMnO₄-аар диол болгох ба халуун өтгөн KMnO₄-аар C=C холбоог тасалж оксид/хүчил болгон бүтцийг тодорхойлох."
      }
    ],
    examFocusNotesEn: "Cold dilute KMnO₄ turns purple to colorless with brown MnO₂ ppt, making diols. Hot concentrated KMnO₄ oxidatively cleaves C=C: =CH₂ becomes CO₂; =CH-R becomes R-COOH; =CR₂ becomes ketone R-CO-R.",
    examFocusNotesMn: "Хүйтэн KMnO₄ нь алкенийг диол болгодог. Халуун өтгөн KMnO₄ нь =C= холбоог тасална: =CH₂ төгсгөл нь CO₂ болно; =CH-R нь R-COOH болно; =CR₂ нь кетон болно.",
    keyFormulas: [
      "Electrophilic addition intermediate: carbocation stability 3° > 2° > 1°",
      "Markovnikov's rule: H adds to the carbon with more hydrogen atoms already attached"
    ],
    practicalSkillsLinked: ["Bromine water unsaturation test (orange to colorless)"]
  },
  {
    id: "syl-15",
    topicNumber: 15,
    level: "AS",
    pillar: "Organic",
    titleEn: "Halogen Derivatives",
    titleMn: "Галогеналканууд (SN1 ба SN2 Механизм)",
    syllabusCodes: ["15.1"],
    correspondingChapterNumbers: [16],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "15.1",
        outcomeEn: "Describe and compare the SN1 (two-step via carbocation, favored by tertiary halogenoalkanes) and SN2 (one-step concerted with transition state, favored by primary halogenoalkanes) nucleophilic substitution mechanisms.",
        outcomeMn: "SN1 (карбкатионоор дамжих 2 шатлалт, 3-дагч алканд зонхилох) ба SN2 (шилжилтийн төлөвтэй 1 шатлалт, 1-дэгч алканд зонхилох) нуклеофил халах механизмыг харьцуулах.",
      },
      {
        code: "15.2",
        outcomeEn: "Describe nucleophilic substitution reactions of halogenoalkanes with aqueous NaOH, KCN in ethanol, and excess ethanolic NH₃ under pressure.",
        outcomeMn: "Галогеналкануудын NaOH(aq) (спирт үүсэх), KCN (нитрил үүсэх) ба илүүдэл NH₃-тай (анхдагч амин үүсэх) урвалууд.",
      },
      {
        code: "15.3",
        outcomeEn: "Explain the relative rates of hydrolysis of halogenoalkanes (R-I > R-Br > R-Cl) based on C-X bond enthalpy, and distinguish substitution from elimination (using hot ethanolic NaOH).",
        outcomeMn: "Галогеналканы гидролизод орох хурд (R-I хамгийн хурдан, C-I холбоо хамгийн сул) ба халуун спиртийн NaOH-тай тасрах (элиминаци) урвалыг ялгах."
      }
    ],
    examFocusNotesEn: "Hydrolysis rate is governed by C-X bond strength (enthalpy), NOT bond polarity! C-I bond is weakest, so iodoalkanes hydrolyse fastest.",
    examFocusNotesMn: "Гидролизод орох хурд нь холбооны туйлаас биш харин C-X холбооны энергиэс (бат бэх чанар) хамаарна! C-I холбоо хамгийн сул тул иодалканууд хамгийн хурдан урвалд орно.",
    keyFormulas: [
      "Rate of hydrolysis: R-I > R-Br > R-Cl >> R-F",
      "Reagents: Aqueous NaOH = Substitution (Alcohol); Ethanolic NaOH + heat = Elimination (Alkene)"
    ],
    practicalSkillsLinked: ["Hydrolysis rates using ethanolic silver nitrate in water bath"]
  },
  {
    id: "syl-16",
    topicNumber: 16,
    level: "AS",
    pillar: "Organic",
    titleEn: "Hydroxy Compounds",
    titleMn: "Спиртүүд (Ангилал, Исэлдэлт, Дегидратаци)",
    syllabusCodes: ["16.1"],
    correspondingChapterNumbers: [17],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "16.1",
        outcomeEn: "Classify alcohols as primary, secondary, or tertiary; describe combustion, substitution to halogenoalkanes (using PCl₅, PCl₃/heat, SOCl₂, or NaBr/conc. H₂SO₄), and reaction with sodium metal.",
        outcomeMn: "Спиртийг 1-дэгч, 2-догч, 3-дагч гэж ангилах; натрийн металлтай урвалд орж H₂ хий ялгаруулах, PCl₅, SOCl₂-оор галогеналкан болгох.",
      },
      {
        code: "16.2",
        outcomeEn: "Describe the oxidation of primary alcohols (distillation gives aldehydes; reflux with excess acidified K₂Cr₂O₇ gives carboxylic acids) and secondary alcohols (gives ketones); explain the resistance of tertiary alcohols to oxidation.",
        outcomeMn: "1-дэгч спиртийг нэрж альдегид эсвэл буцалган дахин халааж карбон хүчил болгох; 2-догч спирт кетон болж исэлдэх; 3-дагч спирт исэлддэггүйг тайлбарлах.",
      },
      {
        code: "16.3",
        outcomeEn: "Describe elimination/dehydration of alcohols to alkenes using hot Al₂O₃ or conc. H₂SO₄/heat.",
        outcomeMn: "Спиртээс ус тасарч (дегидратаци) алкен үүсэх урвал (халуун Al₂O₃ эсвэл өтгөн H₂SO₄)."
      }
    ],
    examFocusNotesEn: "Acidified potassium dichromate(VI) turns from orange (Cr₂O₇²⁻) to green (Cr³⁺) upon oxidising 1° or 2° alcohols. Tertiary alcohols remain orange because they have no hydrogen attached to the -C-OH carbon.",
    examFocusNotesMn: "Хүчиллэгжүүлсэн K₂Cr₂O₇ уусмал 1° ба 2° спиртийг исэлдүүлэхдээ улбар шараас ногоон өнгөтэй болно. 3-дагч спирттэй урвалд орохгүй улбар шар хэвээр үлдэнэ.",
    keyFormulas: [
      "1° Alcohol → Aldehyde (distillation) → Carboxylic Acid (reflux with excess [O])",
      "2° Alcohol → Ketone (reflux with [O])",
      "3° Alcohol → No reaction"
    ],
    practicalSkillsLinked: ["Dichromate oxidation test in water bath", "Reaction with sodium metal"]
  },
  {
    id: "syl-17",
    topicNumber: 17,
    level: "AS",
    pillar: "Organic",
    titleEn: "Carbonyl Compounds",
    titleMn: "Карбонилт нэгдлүүд (Альдегид ба Кетон)",
    syllabusCodes: ["17.1"],
    correspondingChapterNumbers: [18],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "17.1",
        outcomeEn: "Describe nucleophilic addition of HCN to aldehydes and ketones (catalysed by trace NaCN/alkali) to form 2-hydroxynitriles.",
        outcomeMn: "Альдегид ба кетонд HCN нэгдэж 2-гидроксинитрил үүсгэх нуклеофил нэгдэх урвалын механизм (NaCN катализатор).",
      },
      {
        code: "17.2",
        outcomeEn: "Describe reduction of aldehydes (to 1° alcohols) and ketones (to 2° alcohols) using NaBH₄.",
        outcomeMn: "NaBH₄ ашиглан альдегидийг 1° спирт, кетоныг 2° спирт болгон ангижруулах.",
      },
      {
        code: "17.3",
        outcomeEn: "Describe the use of 2,4-DNPH (Brady’s reagent) to identify carbonyl groups (orange/yellow crystalline precipitate) and distinguish aldehydes from ketones using Tollens' reagent (silver mirror) and Fehling’s solution (brick-red Cu₂O precipitate).",
        outcomeMn: "2,4-DNPH-аар карбонил бүлгийг (шар/улбар тунадас) таних; Толленс (мөнгөн толь) ба Фелингийн урвалжаар (тоосгон улаан Cu₂O) альдегидийг кетоноос ялгах.",
      },
      {
        code: "17.4",
        outcomeEn: "Describe the triiodomethane (iodoform) reaction (alkaline I₂) to detect the CH₃-C=O or CH₃-CH(OH)- group (pale yellow precipitate of CHI₃).",
        outcomeMn: "Иодоформын урвалжаар (I₂ + NaOH) метил карбонил (CH₃-CO-) болон CH₃-CH(OH)- бүлгийг ялган таних (цайвар шар тунадас CHI₃)."
      }
    ],
    examFocusNotesEn: "Tollens' reagent: [Ag(NH₃)₂]⁺ reduced to metallic Ag(s) by aldehydes. Ketones give NO reaction with Tollens' or Fehling's, but both aldehydes and ketones give positive 2,4-DNPH tests.",
    examFocusNotesMn: "Толленсийн урвалж нь зөвхөн альдегидтэй урвалд орж мөнгөн толь Ag(s) үүсгэнэ. Кетон нь Толленс, Фелингтэй урвалд орохгүй харин 2,4-DNPH-тэй хоёулаа улбар шар тунадас өгнө.",
    keyFormulas: [
      "Tollens': R-CHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → R-COO⁻ + 2Ag(s) + 4NH₃ + 2H₂O",
      "Iodoform: forms pale yellow precipitate CHI₃ (antiseptic smell)"
    ],
    practicalSkillsLinked: ["Tollens' silver mirror test", "Fehling's test", "2,4-DNPH condensation test", "Triiodomethane test"]
  },
  {
    id: "syl-18",
    topicNumber: 18,
    level: "AS",
    pillar: "Organic",
    titleEn: "Carboxylic Acids and Derivatives",
    titleMn: "Карбон хүчлүүд ба Эстерүүд",
    syllabusCodes: ["18.1", "18.2"],
    correspondingChapterNumbers: [17, 26],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "18.1",
        outcomeEn: "Describe the acidic properties of carboxylic acids, forming salts with reactive metals, carbonates, and alkalis.",
        outcomeMn: "Карбон хүчлийн хүчиллэг шинж: металл, карбонат ба шүлттэй урвалд орж давс үүсгэх.",
      },
      {
        code: "18.2",
        outcomeEn: "Describe condensation esterification between carboxylic acids and alcohols (conc. H₂SO₄ catalyst) and the reversible acid hydrolysis vs irreversible alkaline saponification of esters.",
        outcomeMn: "Хүчил ба спиртийн этержих конденсацын урвал (H₂SO₄ катализатор); эстерийн хүчлийн эргэх гидролиз ба шүлтийн эргэшгүй саванжих гидролиз."
      }
    ],
    examFocusNotesEn: "Alkaline hydrolysis of an ester produces the carboxylate salt (e.g. CH₃COONa) and alcohol, NOT the free carboxylic acid until acidified.",
    examFocusNotesMn: "Эстерийн шүлтийн гидролизоор шууд карбон хүчил биш харин түүний натрийн давс (жишээ нь CH₃COONa) болон спирт үүснэ.",
    keyFormulas: [
      "Esterification: R-COOH + R'-OH ⇌ R-COO-R' + H₂O (conc. H₂SO₄, heat)",
      "Base hydrolysis: R-COO-R' + NaOH → R-COONa + R'-OH"
    ]
  },
  {
    id: "syl-19",
    topicNumber: 19,
    level: "AS",
    pillar: "Organic",
    titleEn: "Nitrogen Compounds (AS)",
    titleMn: "Азот агуулсан органик нэгдлүүд (Амин, Нитрил)",
    syllabusCodes: ["19.1", "19.2"],
    correspondingChapterNumbers: [14, 27],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "19.1",
        outcomeEn: "Describe primary amines: basicity due to the nitrogen lone pair, preparation from halogenoalkanes and reduction of nitriles.",
        outcomeMn: "Анхдагч аминууд: азотын сул хос электроноос хамаарсан суурилаг шинж, галогеналкан ба нитрилээс гарган авах.",
      },
      {
        code: "19.2",
        outcomeEn: "Describe nitriles and hydroxynitriles: synthesis using KCN, and hydrolysis under acidic or alkaline conditions to carboxylic acids.",
        outcomeMn: "Нитрил ба гидроксинитрилүүдийн синтез (KCN ашиглах) ба хүчил/шүлтийн орчинд гидролизод орж карбон хүчил үүсгэх урвал."
      }
    ],
    examFocusNotesEn: "Hydrolysis of nitriles adds one carbon to the original carbon chain: R-CH₂-Cl + KCN → R-CH₂-CN → R-CH₂-COOH (key synthetic route).",
    examFocusNotesMn: "Галогеналкан дээр KCN нэмж нитрил болгоод дараа нь гидролиз хийхэд нүүрстөрөгчийн хэлхээ 1 нүүрстөрөгчөөр уртсаж карбон хүчил болдог (чухал нийлэгжүүлэлтийн арга).",
    keyFormulas: [
      "R-CN + 2H₂O + HCl → R-COOH + NH₄Cl",
      "R-CN + 4[H] → R-CH₂-NH₂ (using LiAlH₄ in dry ether)"
    ]
  },
  {
    id: "syl-20",
    topicNumber: 20,
    level: "AS",
    pillar: "Organic",
    titleEn: "Polymerisation (AS)",
    titleMn: "Полимержилт (Нэгдэх полимерүүд)",
    syllabusCodes: ["20.1"],
    correspondingChapterNumbers: [15, 28],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "20.1",
        outcomeEn: "Describe addition polymerisation of alkene monomers; deduce repeat units from monomer structures and vice versa.",
        outcomeMn: "Алкений нэгдэх полимержилт; мономерээс давтагдах нэгжийг олох ба полимер бүтцээс эх мономерыг тодорхойлох.",
      },
      {
        code: "20.2",
        outcomeEn: "Discuss environmental concerns of non-biodegradable polyalkenes and the methods of disposal (recycling, incineration for energy, feedstock cracking).",
        outcomeMn: "Задардаггүй полиалкенуудын байгаль орчны хор уршиг, дахин боловсруулах, эрчим хүч гарган шатаах аргууд."
      }
    ],
    examFocusNotesEn: "The repeat unit of an addition polymer ALWAYS contains only two carbon atoms in the main polymer backbone corresponding to the original C=C double bond.",
    examFocusNotesMn: "Нэгдэх полимерийн давтагдах нэгж нь үндсэн хэлхээндээ эх алкений хоёр C=C нүүрстөрөгчийн атоомыг л агуулсан байна.",
    keyFormulas: [
      "n CH₂=CH(X) → [-CH₂-CH(X)-]n"
    ]
  },
  {
    id: "syl-21",
    topicNumber: 21,
    level: "AS",
    pillar: "Organic",
    titleEn: "Organic Synthesis (AS)",
    titleMn: "Органик синтез (AS түвшний урвалын зам)",
    syllabusCodes: ["21.1"],
    correspondingChapterNumbers: [15, 16, 17, 18, 29],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "21.1",
        outcomeEn: "Design multi-step synthetic routes between AS organic functional groups (alkanes, alkenes, halogenoalkanes, alcohols, aldehydes, ketones, nitriles, carboxylic acids).",
        outcomeMn: "AS түвшний органик функциональ бүлгүүдийн хоорондох олон шатлалт нийлэгжүүлэлтийн замыг урвалж, нөхцөлтэй нь төлөвлөх.",
      },
      {
        code: "21.2",
        outcomeEn: "Identify reagents, solvents, temperatures, and catalysts required for optimal yield.",
        outcomeMn: "Урвалын хамгийн тохиромжтой урвалж, уусгагч, температур ба катализаторыг сонгох."
      }
    ],
    examFocusNotesEn: "In synthetic questions, always state both REAGENT and CONDITIONS (e.g. 'NaOH(aq) and heat under reflux' or 'K₂Cr₂O₇, dilute H₂SO₄, heat and distill').",
    examFocusNotesMn: "Синтезийн асуултад зөвхөн урвалж төдийгүй НӨХЦӨЛИЙГ (жишээ нь: 'NaOH(aq), буцалган дахин халаах') заавал бүтэн бичнэ.",
    keyFormulas: [
      "Alkene → Halogenoalkane (HX) → Nitrile (KCN) → Carboxylic Acid (H⁺/H₂O) → Ester (R'OH/H⁺)"
    ]
  },
  {
    id: "syl-22",
    topicNumber: 22,
    level: "AS",
    pillar: "Analysis",
    titleEn: "Analytical Techniques (AS)",
    titleMn: "Аналитик технологи (IR ба Масс-спектрометр)",
    syllabusCodes: ["22.1", "22.2"],
    correspondingChapterNumbers: [3, 30],
    examPapers: ["Paper 1", "Paper 2"],
    learningOutcomes: [
      {
        code: "22.1",
        outcomeEn: "Analyse infrared (IR) spectra using characteristic absorption frequencies for functional groups (O-H broad 3200-3600 cm⁻¹, C=O sharp 1670-1740 cm⁻¹, C-H, N-H).",
        outcomeMn: "Хэт улаан туяаны (IR) спектрийг ашиглан функциональ бүлгийг тодорхойлох (O-H өргөн шингээлт, C=O хурц шингээлт).",
      },
      {
        code: "22.2",
        outcomeEn: "Deduce Mr from the molecular ion peak M⁺ in mass spectra; use the [M+1] peak to calculate the number of carbon atoms, and [M+2] peak ratio (3:1 for Cl, 1:1 for Br) to identify halogens.",
        outcomeMn: "Масс-спектрийн молекул ионы M⁺ оргилоор Mr олох; [M+1] оргилоор C-ийн тоог тооцоолох; [M+2] харьцаагаар хлор (3:1) ба бром (1:1) таних."
      }
    ],
    examFocusNotesEn: "Carbon count formula: n = (100 / 1.1) × (abundance of [M+1] / abundance of M⁺). [M+2] peak of equal height to M⁺ proves presence of 1 bromine atom (⁷⁹Br : ⁸¹Br ≈ 1:1).",
    examFocusNotesMn: "Нүүрстөрөгчийн тоо олох: n = (100 / 1.1) × ([M+1] / M⁺). [M+2] оргил нь M⁺-тэй тэнцүү өндөртэй байвал 1 ширхэг бром агуулсныг батална (⁷⁹Br : ⁸¹Br ≈ 1:1).",
    keyFormulas: [
      "n(Carbons) = (100 / 1.1) × (abundance [M+1] / abundance M⁺)",
      "Chlorine: M⁺ : [M+2] ≈ 3:1",
      "Bromine: M⁺ : [M+2] ≈ 1:1"
    ]
  },
  {
    id: "syl-p3",
    topicNumber: "P3",
    level: "AS",
    pillar: "Practical",
    titleEn: "Paper 3 Practical Skills (AS Laboratory)",
    titleMn: "Paper 3 Лабораторийн практик ур чадвар",
    syllabusCodes: ["P3.1", "P3.2", "P3.3"],
    correspondingChapterNumbers: [31],
    examPapers: ["Paper 3"],
    calculationTopicId: "titration-solutions",
    learningOutcomes: [
      {
        code: "P3.1",
        outcomeEn: "Master precision volumetric titration: standard solution preparation, pipette (25.0 cm³), burette readings to 2 d.p. ending in .00 or .05, concordant titres within 0.10 cm³.",
        outcomeMn: "Титрлэлтийн нарийвчлал: пипетка (25.0 cm³), бюреткийн заалтыг .00/.05 cm³ нарийвчлалтай унших, 0.10 cm³ дотор зөрүүтэй 2 concordant утгын дунджийг олох.",
      },
      {
        code: "P3.2",
        outcomeEn: "Perform thermal calorimetry and gas collection experiments; record temperature cooling curves and extrapolate to determine true ΔT.",
        outcomeMn: "Калориметрийн туршилт ба хий цуглуулах хэмжилт; хөргөлтийн муруйн графикийн экстрополяци хийж бодит температурын өөрчлөлт ΔT-г олох.",
      },
      {
        code: "P3.3",
        outcomeEn: "Systematically identify unknown cations, anions, and gases using official Cambridge Qualitative Analysis Notes tables.",
        outcomeMn: "Кембрижийн албан ёсны Чанарын шинжилгээний лавлахаар катион, анион, хийг алдаагүй тодорхойлох."
      }
    ],
    examFocusNotesEn: "Never write 'clear' instead of 'colourless'. A solution can be clear blue! Precipitates must be recorded as 'precipitate' (or 'ppt'), noting color and solubility in excess reagent.",
    examFocusNotesMn: "'Clear' гэж хэзээ ч бүү бич, зөвхөн 'colourless' гэж бичнэ! Тунадсыг заавал өнгө болон илүүдэл урвалжид уусах эсэхээр нь бүрэн тайлбарлана.",
    keyFormulas: [
      "Titre average = concordant titres within 0.10 cm³",
      "q = mcΔT (calorimetry)"
    ],
    practicalSkillsLinked: ["All Paper 3 experiments (Titration, Calorimetry, QA tables)"]
  },
  {
    id: "syl-23",
    topicNumber: 23,
    level: "A2",
    pillar: "Physical",
    titleEn: "Chemical Energetics: Lattice Energy",
    titleMn: "Кристалл торын энерги & Борн-Хабер мөчлөг",
    syllabusCodes: ["23.1", "23.2"],
    correspondingChapterNumbers: [19],
    examPapers: ["Paper 4"],
    calculationTopicId: "energetics-hess",
    learningOutcomes: [
      {
        code: "23.1",
        outcomeEn: "Define lattice energy (ΔH⦵latt) and electron affinity (EA); construct Born–Haber cycles to calculate lattice energy or other enthalpy terms.",
        outcomeMn: "Талст торын энерги ба электронд төрөлсөх чанарыг тодорхойлох; Борн-Хабер мөчлөг байгуулж талст торын энергийг тооцоолох.",
      },
      {
        code: "23.2",
        outcomeEn: "Explain trends in lattice energy based on ionic charge and ionic radius; define enthalpy of hydration (ΔH⦵hyd) and solution (ΔH⦵sol) and explain solubility of ionic salts.",
        outcomeMn: "Ионы цэнэг ба радиуст үндэслэн талст торын энергийн өөрчлөлтийг тайлбарлах; уусахын ба гидратжихын энтальпиар давсны уусах чанарыг тайлбарлах."
      }
    ],
    examFocusNotesEn: "Lattice energy is ALWAYS exothermic (negative value). Higher charge and smaller ionic radii increase electrostatic attraction, making lattice energy more exothermic.",
    examFocusNotesMn: "Талст торын энерги нь ҮРГЭЛЖ экзотерм (хасах утгатай). Ионы цэнэг ихсэж, радиус жижгэрэх тусам талст торын энерги илүү их экзотерм (илүү сөрөг) болно.",
    keyFormulas: [
      "ΔH_sol = ΔH_hyd(cation) + ΔH_hyd(anion) - ΔH_latt",
      "Born-Haber: ΔHf = ΔH_at(metal) + IE + ΔH_at(non-metal) + EA + ΔH_latt"
    ]
  },
  {
    id: "syl-24",
    topicNumber: 24,
    level: "A2",
    pillar: "Physical",
    titleEn: "Electrochemistry (A Level)",
    titleMn: "Электрохими (E⦵, Nernst, Фарадейн хууль)",
    syllabusCodes: ["24.1", "24.2", "24.3"],
    correspondingChapterNumbers: [20],
    examPapers: ["Paper 4"],
    calculationTopicId: "electrochemistry-faraday",
    learningOutcomes: [
      {
        code: "24.1",
        outcomeEn: "Define standard electrode potential E⦵, describe the Standard Hydrogen Electrode (SHE), and calculate standard cell potentials E⦵cell = E⦵red - E⦵ox to predict thermodynamic feasibility (ΔG⦵ = -nFE⦵cell).",
        outcomeMn: "Стандарт электродын потенциал E⦵ ба Устөрөгчийн стандарт электродыг (SHE) тодорхойлох; эсийн EMF тооцож урвалын явагдах нөхцөлийг (ΔG⦵ = -nFE⦵cell) урьдчилан таамаглах.",
      },
      {
        code: "24.2",
        outcomeEn: "Use the Nernst equation to determine the effect of changing concentration on electrode potential.",
        outcomeMn: "Нернстийн тэгшитгэлээр концентрацийн өөрчлөлт электродын потенциалд хэрхэн нөлөөлөхийг тооцоолох.",
      },
      {
        code: "24.3",
        outcomeEn: "State and apply Faraday’s laws (Q = It, F = Le); calculate masses or gas volumes deposited during electrolysis, and calculate the value of the Avogadro constant experimentally.",
        outcomeMn: "Фарадейн хууль (Q = It, F = Le); электролизоор ялгарах масс, хийн эзлэхүүнийг тооцоолох ба Авогадрогийн тогтмолыг туршилтаар олох."
      }
    ],
    examFocusNotesEn: "A reaction is feasible under standard conditions if E⦵cell > 0 V. Electrode with more positive E⦵ undergoes reduction (cathode); more negative undergoes oxidation (anode).",
    examFocusNotesMn: "Хэрэв эсийн потенциал E⦵cell > 0 V байвал урвал өөрөө аяндаа явагдана. Илүү эерэг E⦵-тэй электрод дээр ангижрах (катод), илүү сөрөг дээр исэлдэх (анод) явагдана.",
    keyFormulas: [
      "E⦵cell = E⦵reduction(cathode) - E⦵oxidation(anode)",
      "ΔG⦵ = - n × F × E⦵cell",
      "Q = I × t;  n(e⁻) = Q / F  (F = 96,500 C mol⁻¹)"
    ]
  },
  {
    id: "syl-25",
    topicNumber: 25,
    level: "A2",
    pillar: "Physical",
    titleEn: "Equilibria (A Level)",
    titleMn: "Гүнзгийрүүлсэн тэнцвэр (Ka, pH, Буфер, Ksp, Kpc)",
    syllabusCodes: ["25.1", "25.2", "25.3"],
    correspondingChapterNumbers: [21],
    examPapers: ["Paper 4"],
    calculationTopicId: "acids-buffers-ksp",
    learningOutcomes: [
      {
        code: "25.1",
        outcomeEn: "Define Ka, pKa, Kw, pH; calculate pH of strong acids, strong bases, weak acids ([H⁺] = √(Ka × c)), and buffer solutions (Henderson-Hasselbalch equation).",
        outcomeMn: "Ka, pKa, Kw, pH тодорхойлох; хүчтэй хүчил/суурь, сул хүчил ба буфер уусмалын pH-ийг тооцоолох.",
      },
      {
        code: "25.2",
        outcomeEn: "Explain buffer action (how pH is resisted upon small additions of acid or alkali) in chemical and biological systems (e.g. blood hydrogencarbonate buffer).",
        outcomeMn: "Буфер уусмал хүчил ба шүлт нэмэхэд pH-ээ тогтмол хадгалдаг механизм (цусны гидрокарбонат буфер).",
      },
      {
        code: "25.3",
        outcomeEn: "Define solubility product (Ksp), perform calculations involving Ksp and solubility, explain the common ion effect, and predict whether precipitation occurs.",
        outcomeMn: "Уусах чанарын үржвэр (Ksp)-ийг тодорхойлох, уусах чанарыг тооцох, ижил ионы нөлөөгөөр тунадас үүсэх эсэхийг урьдчилан тооцоолох.",
      },
      {
        code: "25.4",
        outcomeEn: "Define partition coefficient (Kpc) and calculate concentrations of solute partitioned between two immiscible solvents.",
        outcomeMn: "Хуваарилалтын коэффициент (Kpc)-ийг тодорхойлох ба холилдохгүй хоёр уусгагчийн хоорондох бодисын тархалтыг тооцоолох."
      }
    ],
    examFocusNotesEn: "In weak acid calculations, assume [H⁺] ≈ [A⁻] and [HA]equilibrium ≈ [HA]initial. Precipitation occurs if the ionic product exceeds Ksp.",
    examFocusNotesMn: "Сул хүчлийн тооцоонд [H⁺] ≈ [A⁻] ба [HA] ≈ c гэж үздэг. Хэрэв ионуудын концентрацийн үржвэр Ksp-ээс их бол тунадас шууд унана.",
    keyFormulas: [
      "pH = -log₁₀[H⁺]",
      "[H⁺] = √(Ka × [HA])",
      "Buffer pH = pKa + log₁₀([Salt] / [Acid])",
      "For salt M_aX_b: Ksp = [M]ᵃ [X]ᵇ"
    ]
  },
  {
    id: "syl-26",
    topicNumber: 26,
    level: "A2",
    pillar: "Physical",
    titleEn: "Reaction Kinetics (A Level)",
    titleMn: "Урвалын кинетик (Хурдны тэгшитгэл, Аррениус)",
    syllabusCodes: ["26.1", "26.2", "26.3", "26.4"],
    correspondingChapterNumbers: [22],
    examPapers: ["Paper 4"],
    calculationTopicId: "kinetics-rates",
    learningOutcomes: [
      {
        code: "26.1",
        outcomeEn: "Deduce rate equations: Rate = k[A]^m[B]^n, order of reaction (0, 1, 2), and units of rate constant k from experimental initial rate or concentration-time graphs.",
        outcomeMn: "Туршилтын өгөгдлөөс хурдны тэгшитгэл, урвалын эрэмбэ (0, 1, 2) ба хурдны тогтмол k-ийн нэгжийг олох.",
      },
      {
        code: "26.2",
        outcomeEn: "Use constant half-life (t1/2 = 0.693 / k) to identify first-order kinetics.",
        outcomeMn: "Хагас задралын хугацаа тогтмол байгааг ашиглан 1-р эрэмбийн урвалыг таних (t1/2 = ln 2 / k).",
      },
      {
        code: "26.3",
        outcomeEn: "Propose multi-step reaction mechanisms consistent with the rate equation; identify the rate-determining step (RDS) and catalyst / intermediate species.",
        outcomeMn: "Хурдны тэгшитгэлд нийцэх олон шатлалт механизмыг таамаглах; хурд тодорхойлогч удаан шат (RDS) ба катализатор/завсрын бүтээгдэхүүнийг ялгах.",
      },
      {
        code: "26.4",
        outcomeEn: "Apply the Arrhenius equation (ln k = -Ea/RT + ln A) to calculate activation energy Ea from graphical gradient (-Ea / R).",
        outcomeMn: "Аррениусын тэгшитгэл ашиглан ln k ба 1/T графикийн налуугаас (-Ea/R) идэвхжлийн энерги Ea-г тооцоолох."
      }
    ],
    examFocusNotesEn: "Units of k depend on overall order: zero order is mol dm⁻³ s⁻¹; 1st order is s⁻¹; 2nd order is dm³ mol⁻¹ s⁻¹; 3rd order is dm⁶ mol⁻² s⁻¹.",
    examFocusNotesMn: "k-ийн нэгж нийт эрэмбээс хамаарна: 0-р эрэмбэ: mol dm⁻³ s⁻¹; 1-р эрэмбэ: s⁻¹; 2-р эрэмбэ: dm³ mol⁻¹ s⁻¹; 3-р эрэмбэ: dm⁶ mol⁻² s⁻¹.",
    keyFormulas: [
      "Rate = k [A]^m [B]^n",
      "t₁/₂ = ln(2) / k = 0.693 / k  (1st order only)",
      "ln(k) = - (Ea / R) × (1/T) + ln(A)"
    ]
  },
  {
    id: "syl-27",
    topicNumber: 27,
    level: "A2",
    pillar: "Physical",
    titleEn: "Entropy and Gibbs Free Energy",
    titleMn: "Энтропи ба Гиббсийн чөлөөт энерги (ΔG = ΔH - TΔS)",
    syllabusCodes: ["27.1", "27.2"],
    correspondingChapterNumbers: [23],
    examPapers: ["Paper 4"],
    calculationTopicId: "energetics-hess",
    learningOutcomes: [
      {
        code: "27.1",
        outcomeEn: "Explain entropy (S) as measure of disorder; predict sign of ΔS (increases during solid → liquid → gas, or when gas moles increase); calculate ΔS⦵ = ΣS⦵(products) - ΣS⦵(reactants).",
        outcomeMn: "Энтропийг эмх замбараагүй байдлын хэмжүүр гэж тайлбарлах; төлөвийн шилжилт ба хийн моль ихсэхэд ΔS эерэг болохыг таамаглах; стандарт энтропийн өөрчлөлтийг тооцоолох.",
      },
      {
        code: "27.2",
        outcomeEn: "Calculate Gibbs free energy change ΔG⦵ = ΔH⦵ - TΔS⦵; state the criterion for spontaneity (ΔG⦵ ≤ 0), and calculate temperature at which a reaction becomes feasible (T = ΔH / ΔS).",
        outcomeMn: "Гиббсийн чөлөөт энерги ΔG = ΔH - TΔS тооцоолох; урвал аяндаа явагдах нөхцөл (ΔG ≤ 0), урвал явагдаж эхлэх температурыг олох (T = ΔH / ΔS)."
      }
    ],
    examFocusNotesEn: "Unit trap: ΔS is in J K⁻¹ mol⁻¹, while ΔH is in kJ mol⁻¹! You MUST divide ΔS by 1000 before plugging into ΔG = ΔH - TΔS.",
    examFocusNotesMn: "Хамгийн их алддаг нэгжийн урхи: ΔS нь J K⁻¹ mol⁻¹ байхад ΔH нь kJ mol⁻¹ байдаг тул ΔS-ийг заавал 1000-д хувааж kJ болгоно!",
    keyFormulas: [
      "ΔS_system = Σ S⦵(products) - Σ S⦵(reactants)",
      "ΔG = ΔH - T × (ΔS / 1000)",
      "Reaction feasible when ΔG ≤ 0; T_feasible = ΔH / ΔS"
    ]
  },
  {
    id: "syl-28",
    topicNumber: 28,
    level: "A2",
    pillar: "Inorganic",
    titleEn: "Transition Elements",
    titleMn: "Шилжилтийн элементүүд & Комплекс ионууд",
    syllabusCodes: ["28.1", "28.2", "28.3"],
    correspondingChapterNumbers: [24],
    examPapers: ["Paper 4", "Paper 3"],
    learningOutcomes: [
      {
        code: "28.1",
        outcomeEn: "Define transition elements (d-block elements forming one or more stable ions with incomplete d-subshell, excluding Sc and Zn); state characteristic properties (variable oxidation states, complex formation, colored ions, catalytic behavior).",
        outcomeMn: "Шилжилтийн элементийг тодорхойлох (d дэд давхарга нь дутуу дүүрсэн тогтвортой ион үүсгэдэг d-элементүүд, Sc ба Zn хамаарахгүй); онцлог 4 шинжийг тайлбарлах.",
      },
      {
        code: "28.2",
        outcomeEn: "Describe complex ions, monodentate and bidentate/polydentate ligands, coordination numbers (linear 2, tetrahedral/square planar 4, octahedral 6), and explain the origin of color via octahedral d-orbital splitting and d-d electron transitions.",
        outcomeMn: "Комплекс ион, лиганд (монодент, бидент, полидент), координацын тоо ба хэлбэрүүд; октаэдр талст орны нөлөөгөөр d-орбитал хуваагдаж үзэгдэх гэрэл шингээн өнгө үүсгэх учир.",
      },
      {
        code: "28.3",
        outcomeEn: "Describe ligand exchange reactions (e.g. [Cu(H₂O)₆]²⁺ with NH₃ or Cl⁻), define stability constant Kstab, and explain the chelate effect (entropy gain).",
        outcomeMn: "Лиганд солилцох урвал, тогтворжилтын тогтмол Kstab ба хелат нөлөөг (энтропи өсөх) тайлбарлах."
      }
    ],
    examFocusNotesEn: "Color explanation mark scheme: Ligands cause non-degenerate d-orbitals to split into two energy levels (ΔE). Electrons absorb specific visible light wavelengths (ΔE = hf), and the complementary transmitted wavelength is observed.",
    examFocusNotesMn: "Өнгө үүсэх 4 шалгуур оноо: Лигандууд d-орбиталыг хоёр түвшинд хуваана (ΔE). Электрон өдөөгдөхдөө үзэгдэх гэрлийн тодорхой долгионыг шингээнэ (ΔE = hf). Үлдсэн нэмэлт өнгө нь нүдэнд харагдана.",
    keyFormulas: [
      "ΔE = h × f = (h × c) / λ",
      "Kstab = [complex] / ([central ion] [ligand]^n)"
    ],
    practicalSkillsLinked: ["Transition metal ion precipitation with NaOH/NH₃ and ligand exchange of Cu²⁺ and Co²⁺"]
  },
  {
    id: "syl-29",
    topicNumber: 29,
    level: "A2",
    pillar: "Organic",
    titleEn: "Chemistry of Benzene and Arenes",
    titleMn: "Бензол & Ароматик нэгдлүүд",
    syllabusCodes: ["29.1"],
    correspondingChapterNumbers: [25],
    examPapers: ["Paper 4"],
    learningOutcomes: [
      {
        code: "29.1",
        outcomeEn: "Describe the structure and stability of benzene (delocalised π electron ring, all C-C bonds equal length 0.139 nm, resonance stabilization energy).",
        outcomeMn: "Бензолын бүтэц ба тогтворжилт (делокализацлагдсан π электрон цагираг, бүх C-C холбооны урт ижил 0.139 нм, резонансын энерги).",
      },
      {
        code: "29.2",
        outcomeEn: "Describe electrophilic substitution mechanisms of benzene and methylbenzene: nitration (HNO₃/H₂SO₄ at 55°C), halogenation (AlCl₃/FeBr₃ catalyst), Friedel–Crafts alkylation and acylation.",
        outcomeMn: "Электрофил халах механизм: нитрожуулах (HNO₃/H₂SO₄, 55°C), галогенжуулах (AlCl₃ катализатор), Фридель-Крафтсын алкилжих ба ацилжих.",
      },
      {
        code: "29.3",
        outcomeEn: "Explain the directing effect of substituents on the benzene ring: activating 2,4-directing groups (-OH, -NH₂, -CH₃) vs deactivating 3-directing groups (-NO₂, -COOH, -CHO).",
        outcomeMn: "Бензолын цагираг дахь орлуулагчдын чиглүүлэгч нөлөө: 2,4-байрлалд чиглүүлэгч идэвхжүүлэгчид (-OH, -NH₂, -R) ба 3-байрлалд чиглүүлэгчид (-NO₂, -COOH)."
      }
    ],
    examFocusNotesEn: "Benzene undergoes electrophilic SUBSTITUTION, NOT addition, to preserve its stable aromatic delocalized π system (resonance energy ≈ 152 kJ mol⁻¹).",
    examFocusNotesMn: "Бензол нь маш тогтвортой ароматик π системээ (152 kJ/mol резонансын энерги) хадгалахын тулд нэгдэх биш харин зөвхөн электрофил БАЙР ХАЛАХ урвалд ордог.",
    keyFormulas: [
      "Nitronium ion generation: HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺",
      "Activating: -OH, -NH₂, -R (2,4-directing); Deactivating: -NO₂, -COOH, -CHO (3-directing)"
    ]
  },
  {
    id: "syl-30",
    topicNumber: 30,
    level: "A2",
    pillar: "Organic",
    titleEn: "Carboxylic Acids and Acyl Compounds",
    titleMn: "Ацил хлоридууд & Нийлмэл эфирүүд",
    syllabusCodes: ["30.1"],
    correspondingChapterNumbers: [26],
    examPapers: ["Paper 4"],
    learningOutcomes: [
      {
        code: "30.1",
        outcomeEn: "Describe the synthesis of acyl chlorides from carboxylic acids using PCl₅, PCl₃, or SOCl₂.",
        outcomeMn: "Карбон хүчлээс SOCl₂ эсвэл PCl₅ ашиглан ацил хлорид гарган авах урвал.",
      },
      {
        code: "30.2",
        outcomeEn: "Describe nucleophilic addition-elimination reactions of acyl chlorides with water (hydrolysis), alcohols (esterification), phenols (phenyl ester formation), ammonia (forming primary amides), and primary amines (forming secondary amides).",
        outcomeMn: "Ацил хлоридын нуклеофил нэгдэн-тасрах урвалууд: усаар гидролиз хийх, спирт ба фенолтой эстер үүсгэх, аммиак ба аминуудтай амид үүсгэх.",
      },
      {
        code: "30.3",
        outcomeEn: "Explain the relative ease of hydrolysis: acyl chloride > alkyl chloride >> aryl chloride (chlorobenzene).",
        outcomeMn: "Гидролизод орох хурдны харьцуулалт: ацил хлорид хамгийн хурдан > алкил хлорид >> хлорбензол (урвалд ордоггүй)."
      }
    ],
    examFocusNotesEn: "Acyl chlorides react vigorously with cold water releasing misty acidic fumes of HCl gas. Chlorobenzene does not hydrolyse because the chlorine lone pair delocalises into the benzene π ring, strengthening the C-Cl bond.",
    examFocusNotesMn: "Ацил хлорид хүйтэн устай шууд ширүүн урвалд орж HCl-ийн цагаан утаа ялгаруулдаг. Хлорбензол гидролизод ордоггүй учир нь хлорын сул хос бензолын цагирагтай хоршиж C-Cl холбоог бэхжүүлдэг.",
    keyFormulas: [
      "Ease of hydrolysis: R-COCl >> R-CH₂-Cl >> C₆H₅-Cl",
      "R-COCl + H₂O → R-COOH + HCl (dense white fumes)"
    ]
  },
  {
    id: "syl-31",
    topicNumber: 31,
    level: "A2",
    pillar: "Organic",
    titleEn: "Organic Nitrogen Compounds (A Level)",
    titleMn: "Аминууд, Амидууд ба Амин хүчлүүд",
    syllabusCodes: ["31.1", "31.2", "31.3"],
    correspondingChapterNumbers: [27],
    examPapers: ["Paper 4"],
    learningOutcomes: [
      {
        code: "31.1",
        outcomeEn: "Compare the relative base strengths of aqueous ammonia, ethylamine, and phenylamine based on availability of the nitrogen lone pair.",
        outcomeMn: "Аммиак, этиламин, фениламин гурвын суурилаг шинжийг азотын сул хос электроны байрлалтай уялдуулан харьцуулах (Этиламин > Аммиак > Фениламин).",
      },
      {
        code: "31.2",
        outcomeEn: "Describe preparation of phenylamine from nitrobenzene, diazotisation of phenylamine at < 10°C to form diazonium ion, and coupling with phenol to produce azo dyes.",
        outcomeMn: "Нитробензолоос фениламин гарган авах, <10°C-т диазожуулах ба фенолтой азо-будагч холбох урвал.",
      },
      {
        code: "31.3",
        outcomeEn: "Describe the acid/base properties of amino acids, zwitterion formation, isoelectric points, peptide bond formation, and protein hydrolysis.",
        outcomeMn: "Амин хүчлийн хүчил-суурийн шинж, цвиттер-ион үүсэх, изоэлектрик цэг, пептид холбоо үүсэх ба уургийн гидролиз."
      }
    ],
    examFocusNotesEn: "Base strength order: Ethylamine > Ammonia > Phenylamine. Alkyl groups are electron-releasing (inductive effect), while phenyl group delocalises the nitrogen lone pair into the aromatic ring.",
    examFocusNotesMn: "Суурилаг шинжийн дараалал: Этиламин > Аммиак > Фениламин. Этил бүлэг электроныг түлхэж суурийг хүчирхэгжүүлдэг бол бензолын цагираг азотын сул хосыг татаж суурилаг чанарыг маш сул болгодог.",
    keyFormulas: [
      "Base strength: R-NH₂ > NH₃ > C₆H₅-NH₂",
      "Azo dye formation: C₆H₅-N₂⁺ + C₆H₅-OH + OH⁻ → C₆H₅-N=N-C₆H₄-OH + H₂O"
    ]
  },
  {
    id: "syl-32",
    topicNumber: 32,
    level: "A2",
    pillar: "Organic",
    titleEn: "Polymerisation (A Level)",
    titleMn: "Конденсацын полимерүүд (Полиамид & Полиэстер)",
    syllabusCodes: ["32.1", "32.2"],
    correspondingChapterNumbers: [28],
    examPapers: ["Paper 4"],
    learningOutcomes: [
      {
        code: "32.1",
        outcomeEn: "Describe condensation polymerisation to form polyamides (e.g. Nylon 6,6 from 1,6-diaminohexane and hexanedioic acid; Kevlar) and polyesters (e.g. Terylene/PET from benzene-1,4-dicarboxylic acid and ethane-1,2-diol).",
        outcomeMn: "Конденсацын полимержилт: Полиамид (Нейлон-6,6, Кевлар) ба Полиэстер (Терилен / PET) үүсэх механизм, жижиг молекул (H₂O, HCl) ялгарах.",
      },
      {
        code: "32.2",
        outcomeEn: "Explain why condensation polymers are biodegradable by acid or alkaline hydrolysis, whereas addition polyalkenes are non-biodegradable.",
        outcomeMn: "Конденсацын полимерүүд нь эстер/амид холбоотой тул хүчил, шүлтээр гидролизод орж био задардаг, харин полиалкенууд задардаггүй учир."
      }
    ],
    examFocusNotesEn: "Condensation polymers ALWAYS eliminate a small molecule (usually H₂O or HCl) per linkage formed. Polyesters hydrolyse into diacid + diol; polyamides hydrolyse into diacid + diamine.",
    examFocusNotesMn: "Конденсацын полимержилт нь холбоо бүр дээр заавал жижиг молекул (H₂O эсвэл HCl) ялгаруулдаг. Полиэстер нь хүчил + диол, полиамид нь хүчил + диамин болж задарна.",
    keyFormulas: [
      "Nylon 6,6: [-CO-(CH₂)₄-CO-NH-(CH₂)₆-NH-]n + 2n H₂O",
      "Terylene: [-CO-C₆H₄-CO-O-CH₂CH₂-O-]n + 2n H₂O"
    ]
  },
  {
    id: "syl-33",
    topicNumber: 33,
    level: "A2",
    pillar: "Organic",
    titleEn: "Synthetic Routes (A Level)",
    titleMn: "Олон шатлалт органик синтез & Рестросинтез",
    syllabusCodes: ["33.1"],
    correspondingChapterNumbers: [29],
    examPapers: ["Paper 4"],
    learningOutcomes: [
      {
        code: "33.1",
        outcomeEn: "Design multi-step synthetic routes using reactions from both AS and A Level, integrating carbon-carbon bond forming reactions (cyanide addition, Grignard/Friedel-Crafts alkylation).",
        outcomeMn: "AS ба A2-ийн урвалуудыг нэгтгэн, C-C холбоо үүсгэх аргууд бүхий олон шатлалт органик синтезийн замыг төлөвлөх.",
      },
      {
        code: "33.2",
        outcomeEn: "Apply retrosynthetic analysis to work backward from a target pharmaceutical or organic molecule to simple starting materials.",
        outcomeMn: "Эмийн бодис эсвэл нийлмэл молекулаас эх бодис руу ухрах ретросинтезийн шинжилгээний аргачлалыг ашиглах."
      }
    ],
    examFocusNotesEn: "Carbon-carbon bond formation is crucial for building larger molecules: 1. Halogenoalkane + KCN; 2. Carbonyl + HCN; 3. Friedel-Crafts alkylation/acylation on benzene.",
    examFocusNotesMn: "C-C холбоо үүсгэж хэлхээ уртасгах 3 үндсэн арга: 1. Галогеналкан + KCN; 2. Карбонил + HCN; 3. Бензолын Фридель-Крафтсын алкилжилт/ацилжилт.",
    keyFormulas: [
      "Target molecule ← Retrosynthetic arrow (=>) ← Intermediate ← Precursor"
    ]
  },
  {
    id: "syl-34",
    topicNumber: 34,
    level: "A2",
    pillar: "Analysis",
    titleEn: "Further Analytical Techniques",
    titleMn: "Гүнзгийрүүлсэн аналитик хими (NMR & Хроматографи)",
    syllabusCodes: ["34.1", "34.2"],
    correspondingChapterNumbers: [30],
    examPapers: ["Paper 4"],
    learningOutcomes: [
      {
        code: "34.1",
        outcomeEn: "Describe thin-layer chromatography (TLC) and gas-liquid chromatography (GLC); calculate Rf values and use retention times to identify substances.",
        outcomeMn: "Нимгэн үеийн (TLC) ба хий-шингэний хроматографи (GLC); Rf утгыг тооцоолох ба сааталтын хугацаагаар бодисыг таних.",
      },
      {
        code: "34.2",
        outcomeEn: "Interpret proton (¹H) NMR spectra: chemical shift δ, number of peaks (different proton environments), peak area (integration ratio), and spin-spin splitting using the (n+1) rule.",
        outcomeMn: "Протон (¹H) NMR спектрийг шинжлэх: химийн шилжилт δ, оргилын тоо, оргилын доорх талбай (H-ийн тоо), (n+1) дүрмээр ялгаралтыг олох.",
      },
      {
        code: "34.3",
        outcomeEn: "Describe the use of tetramethylsilane (TMS) as chemical shift reference standard and D₂O exchange to identify labile -OH and -NH- protons.",
        outcomeMn: "TMS-ийг лавлагаа болгож 0 ppm-д тохируулах ба хүнд ус (D₂O) нэмж -OH ба -NH-ийн оргилыг арилган таних сорил.",
      },
      {
        code: "34.4",
        outcomeEn: "Interpret Carbon-13 (¹³C) NMR spectra to deduce the number of distinct carbon environments.",
        outcomeMn: "Нүүрстөрөгч-13 (¹³C) NMR спектрээс ялгаатай нүүрстөрөгчийн орчны тоог тодорхойлох."
      }
    ],
    examFocusNotesEn: "In ¹H NMR: (n+1) splitting rule applies only to non-equivalent protons on adjacent carbons. Protons on O-H or N-H appear as singlets and disappear upon adding D₂O due to deuterium exchange.",
    examFocusNotesMn: "¹H NMR-д: (n+1) задралын дүрэм зөвхөн хөрш нүүрстөрөгч дээрх эквивалент биш протонуудад үйлчилнэ. O-H ба N-H протонууд синглет байх ба D₂O нэмэхэд оргил нь алга болдог.",
    keyFormulas: [
      "Rf = distance moved by solute / distance moved by solvent front",
      "(n+1) rule: n neighboring protons cause splitting into n+1 peaks",
      "Singlet (0 neighbors), Doublet (1), Triplet (2), Quartet (3)"
    ]
  },
  {
    id: "syl-p5",
    topicNumber: "P5",
    level: "A2",
    pillar: "Practical",
    titleEn: "Paper 5 Practical Skills (Planning, Analysis and Evaluation)",
    titleMn: "Paper 5 Төлөвлөлт, Шинжилгээ & Үнэлгээ (Бичгийн туршилт)",
    syllabusCodes: ["P5.1", "P5.2", "P5.3"],
    correspondingChapterNumbers: [32],
    examPapers: ["Paper 5"],
    calculationTopicId: "uncertainty-practical",
    learningOutcomes: [
      {
        code: "P5.1",
        outcomeEn: "Plan a complete scientific experiment: formulate hypothesis, state independent and dependent variables, control key variables with specific numerical parameters, select apparatus and reagents with concentrations.",
        outcomeMn: "Шинжлэх ухааны туршилт төлөвлөх: таамаглал дэвшүүлэх, хамаарах ба үл хамаарах хувьсагчийг нэрлэх, тогтмол хувьсагчдыг тоон утгаар хянах, багаж урвалжийг сонгох.",
      },
      {
        code: "P5.2",
        outcomeEn: "Perform risk assessments identifying specific hazards (corrosive, toxic, flammable) and appropriate safety precautions (fume hood, safety goggles, gloves, avoid naked flames).",
        outcomeMn: "Аюулгүй ажиллагааны үнэлгээ: бодисын аюул (идэмхий, хортой, шатамхай) ба түүнд тохирох хамгаалалтыг тодорхой заах.",
      },
      {
        code: "P5.3",
        outcomeEn: "Process experimental data, plot graphs with best-fit lines, identify anomalous points, determine gradients with co-ordinates, and calculate percentage uncertainties of apparatus to suggest improvements.",
        outcomeMn: "Өгөгдөл боловсруулах, график байгуулах, гаж цэгийг тодорхойлох, налуу олох, багажны хувийн алдааг тооцоолох ба туршилтыг сайжруулах санал гаргах."
      }
    ],
    examFocusNotesEn: "In Paper 5 planning questions, always specify: 1. Independent variable, 2. Dependent variable, 3. Two controlled variables with exact values, 4. Hazard + precaution. On graphs, use clear '+' or 'x' points occupying over 50% of the grid.",
    examFocusNotesMn: "Paper 5-ийн төлөвлөлтөд заавал: 1. Үл хамаарах, 2. Хамаарах, 3. Тогтмол байлгах 2 хувьсагч (тоон утгатай), 4. Аюул + хамгаалалтыг бичнэ. График торны 50%-иас их талбайг эзэлсэн байх ёстой.",
    keyFormulas: [
      "% Uncertainty = (Total Instrument Error / Measured Value) × 100%",
      "Gradient = (y₂ - y₁) / (x₂ - x₁)"
    ],
    practicalSkillsLinked: ["Experimental design, graph analysis, error evaluation"]
  }
];

export function getSyllabusTopicsByLevel(level: "AS" | "A2" | "ALL"): SyllabusTopic[] {
  if (level === "ALL") return SYLLABUS_TOPICS_DATA;
  return SYLLABUS_TOPICS_DATA.filter((t) => t.level === level);
}

export function getSyllabusTopicsByPillar(pillar: string): SyllabusTopic[] {
  if (pillar === "ALL") return SYLLABUS_TOPICS_DATA;
  return SYLLABUS_TOPICS_DATA.filter((t) => t.pillar === pillar);
}

export function getSyllabusTopicById(id: string): SyllabusTopic | undefined {
  return SYLLABUS_TOPICS_DATA.find((t) => t.id === id);
}

export function getSyllabusTopicForChapter(chapterNumber: number): SyllabusTopic | undefined {
  return SYLLABUS_TOPICS_DATA.find((t) => t.correspondingChapterNumbers.includes(chapterNumber));
}
