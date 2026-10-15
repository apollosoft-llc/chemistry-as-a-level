import { PastPaper } from "../types";

export const PAPERS_2024_2026: PastPaper[] = [
  // ==========================================
  // PAPER 1: MAY/JUNE 2024 VARIANT 12 (MCQ)
  // ==========================================
  {
    id: "9701_s24_qp_12",
    title: "Cambridge 9701/12 May/June 2024",
    paperType: "Paper 1",
    year: 2024,
    series: "May/June",
    variant: "12",
    paperCode: "9701/12/M/J/24",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 33,
      B: 28,
      C: 23,
      D: 19,
      E: 15,
    },
    description: "Official Cambridge 9701 AS Level Multiple Choice Paper 12 with full diagnostic questions, detailed step-by-step solutions, mark schemes, and examiner trap explanations.",
    descriptionMn: "Cambridge 9701 AS Level Химийн 2024 оны 5/6-р сарын Paper 12 (Олон сонголттой асуултууд, албан ёсны тайлбар болон шалгалтын онооны босготой).",
    mcqQuestions: [
      {
        id: "s24-12-q1",
        questionNumber: 1,
        chapterNumber: 1,
        chapterTitle: "Atomic Structure",
        topicCategory: "Physical",
        syllabusRef: "1.1 Subatomic particles & deflection in electric fields",
        questionText: "Beams of protons, neutrons, and electrons travel at equal velocity through an electric field between two oppositely charged plates.\nWhich particle is deflected by the greatest angle, and in which direction?",
        options: [
          "Electrons towards the positive plate",
          "Electrons towards the negative plate",
          "Protons towards the negative plate",
          "Protons towards the positive plate"
        ],
        correctOptionIndex: 0,
        explanationEn: "Electrons have a negative charge and are attracted to the positive plate. The angle of deflection is directly proportional to charge/mass (e/m ratio). Because an electron has a mass approximately 1/1836 of a proton, its e/m ratio is vastly higher, resulting in the largest angle of deflection.",
        explanationMn: "Электрон нь сөрөг цэнэгтэй тул эерэг хавтан руу татагдана. Хазайлтын өнцөг нь e/m харьцаанд шууд пропорциональ бөгөөд электроны масс протооноос 1836 дахин бага учир хамгийн их өнцгөөр хазайна.",
        examinerTip: "Remember: Deflection angle ∝ (charge / mass). Electrons deflect most; neutrons show 0 deflection.",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q2",
        questionNumber: 2,
        chapterNumber: 2,
        chapterTitle: "Electrons in Atoms",
        topicCategory: "Physical",
        syllabusRef: "2.1 Electronic configurations & d-block exceptions",
        questionText: "Which is the correct electronic configuration of the Copper(I) ion, Cu⁺ (Z = 29)?",
        options: [
          "[Ar] 3d⁹ 4s¹",
          "[Ar] 3d¹⁰",
          "[Ar] 3d⁸ 4s²",
          "[Ar] 3d¹⁰ 4s¹"
        ],
        correctOptionIndex: 1,
        explanationEn: "Copper atom (Cu) has configuration [Ar] 3d¹⁰ 4s¹ due to the exceptional thermodynamic stability of a completely filled 3d subshell. When Cu oxidises to Cu⁺, it loses its 4s valence electron first, leaving [Ar] 3d¹⁰.",
        explanationMn: "Зэс атомын тохиргоо нь [Ar] 3d¹⁰ 4s¹ байдаг. Cu⁺ ион үүсэхэд 4s орбиталийн 1 электрон эхэлж салж [Ar] 3d¹⁰ тогтвортой дүүрсэн тохиргоо үлдэнэ.",
        examinerTip: "Transition metals always lose 4s electrons BEFORE 3d electrons when forming cations.",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q3",
        questionNumber: 3,
        chapterNumber: 5,
        chapterTitle: "States of Matter",
        topicCategory: "Physical",
        syllabusRef: "5.1 Kinetic theory & ideal gas deviations",
        questionText: "Under which set of conditions does a real gas behave MOST like an ideal gas?",
        options: [
          "Low pressure and high temperature",
          "High pressure and high temperature",
          "Low pressure and low temperature",
          "High pressure and low temperature"
        ],
        correctOptionIndex: 0,
        explanationEn: "At low pressure, gas molecules are far apart, making their volume negligible relative to container volume. At high temperature, molecules possess high kinetic energy, overcoming intermolecular forces of attraction.",
        explanationMn: "Бага даралтад хийн молекулууд бие биенээсээ холдож өөрийн эзлэхүүн нь үл ялиг болно. Өндөр температурт кинетик энерги их тул молекул хоорондын таталцлын хүч үйлчилж чадахгүй.",
        examinerTip: "Real gases deviate most at HIGH pressure and LOW temperature.",
        difficulty: "Fundamental"
      },
      {
        id: "s24-12-q4",
        questionNumber: 4,
        chapterNumber: 15,
        chapterTitle: "Hydrocarbons",
        topicCategory: "Organic",
        syllabusRef: "15.2 Electrophilic addition & carbocation stability",
        questionText: "Propene reacts with hydrogen bromide, HBr. What is the major organic product and why?",
        options: [
          "2-bromopropane, via a more stable secondary carbocation",
          "1-bromopropane, via a more stable primary carbocation",
          "2-bromopropane, via a more stable primary carbocation",
          "1,2-dibromopropane, via a free radical intermediate"
        ],
        correctOptionIndex: 0,
        explanationEn: "According to Markovnikov's rule, H⁺ adds to C1 to form the secondary carbocation (CH₃–CH⁺–CH₃), which is more stable than the primary carbocation due to the electron-donating inductive (+I) effect of two alkyl groups.",
        explanationMn: "Марковниковын дүрмээр H⁺ нь захын нүүрстөрөгчид нэгдэж 2° карбкатион үүсгэнэ. 2 алкил бүлгийн +I индукцийн нөлөөгөөр 2° карбкатион илүү тогтвортой тул 2-бромпропан гол бүтээгдэхүүн болно.",
        examinerTip: "Always explain stability using inductive (+I) effect of alkyl groups dispersing positive charge.",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 1: FEB/MARCH 2025 VARIANT 12 (SPRING 2025 "ХАВАР")
  // ==========================================
  {
    id: "9701_m25_qp_12",
    title: "Cambridge 9701/12 Feb/March 2025 (Spring)",
    paperType: "Paper 1",
    year: 2025,
    series: "Feb/March",
    variant: "12",
    paperCode: "9701/12/F/M/25",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 34,
      B: 29,
      C: 24,
      D: 19,
      E: 15,
    },
    description: "Official Cambridge 9701 AS Level Multiple Choice Paper 12 (Feb/March 2025 Spring Series). Tested across 2025 syllabus updates: Mass spec molecular ions, Period 3 oxides, Halogen displacement, and Stereoisomerism.",
    descriptionMn: "Cambridge 9701 AS Level 2025 оны Хаврын шалгалт (Feb/March 2025, Paper 12 Олон сонголттой сорил).",
    mcqQuestions: [
      {
        id: "m25-12-q1",
        questionNumber: 1,
        chapterNumber: 3,
        chapterTitle: "Chemical Bonding",
        topicCategory: "Physical",
        syllabusRef: "3.2 Electronegativity & Dipole moments",
        questionText: "Which molecule has polar bonds but NO overall net dipole moment?",
        options: [
          "Tetrachloromethane, CCl₄",
          "Trichloromethane, CHCl₃",
          "Dichloromethane, CH₂Cl₂",
          "Water, H₂O"
        ],
        correctOptionIndex: 0,
        explanationEn: "CCl₄ has four highly polar C–Cl bonds arranged in a perfectly symmetrical regular tetrahedral shape (109.5°). The individual bond dipoles point in opposite directions and cancel out completely, giving zero net dipole moment.",
        explanationMn: "CCl₄ нь туйлт 4 ширхэг C–Cl холбоотой боловч зөв тетраэдр (109.5°) тэгш хэмтэй бүтэцтэй тул диполь моментууд нь бие биенээ бүрэн устгаж нийлбэр диполь 0 болно.",
        examinerTip: "Symmetrical shapes with identical outer atoms (tetrahedral CCl₄, trigonal planar BF₃, linear CO₂) always have zero dipole moment.",
        difficulty: "Standard"
      },
      {
        id: "m25-12-q2",
        questionNumber: 2,
        chapterNumber: 10,
        chapterTitle: "Periodicity",
        topicCategory: "Inorganic",
        syllabusRef: "10.2 Period 3 Oxides & Acid-Base Behavior",
        questionText: "Which Period 3 oxide dissolves in water to form an alkaline solution?",
        options: [
          "Na₂O",
          "Al₂O₃",
          "SiO₂",
          "P₄O₁₀"
        ],
        correctOptionIndex: 0,
        explanationEn: "Na₂O is a strongly basic ionic oxide containing O²⁻ ions. It hydrolyses vigorously in water: Na₂O(s) + H₂O(l) → 2NaOH(aq), producing a strongly alkaline solution (pH ~13-14). Al₂O₃ is amphoteric and insoluble; SiO₂ is giant covalent and insoluble; P₄O₁₀ forms phosphoric acid (pH 1-2).",
        explanationMn: "Na₂O нь суурийн ионы оксид бөгөөд усанд уусаж Na₂O + H₂O → 2NaOH хүчтэй шүлтлэг (pH 13-14) уусмал үүсгэнэ. Al₂O₃ ба SiO₂ усанд уусахгүй, P₄O₁₀ хүчил үүсгэнэ.",
        examinerTip: "Oxide trend across Period 3: Basic (Na₂O, MgO) -> Amphoteric (Al₂O₃) -> Acidic (SiO₂, P₄O₁₀, SO₂, SO₃).",
        difficulty: "Fundamental"
      },
      {
        id: "m25-12-q3",
        questionNumber: 3,
        chapterNumber: 16,
        chapterTitle: "Halogenoalkanes",
        topicCategory: "Organic",
        syllabusRef: "16.1 Rates of hydrolysis of halogenoalkanes",
        questionText: "Which halogenoalkane hydrolyses fastest when heated with aqueous silver nitrate?",
        options: [
          "1-iodobutane, CH₃CH₂CH₂CH₂I",
          "1-bromobutane, CH₃CH₂CH₂CH₂Br",
          "1-chlorobutane, CH₃CH₂CH₂CH₂Cl",
          "1-fluorobutane, CH₃CH₂CH₂CH₂F"
        ],
        correctOptionIndex: 0,
        explanationEn: "Reactivity in hydrolysis depends on carbon-halogen bond strength (bond enthalpy), not bond polarity. The C–I bond has the lowest bond enthalpy (228 kJ/mol) because iodine has the largest atomic radius, meaning C–I breaks fastest to form a precipitate of yellow AgI rapidly.",
        explanationMn: "Гидролизийн хурд нь C–X холбооны энергиэс хамаарна. C–I холбоо хамгийн сул (228 kJ/mol) тул C–I хамгийн амархан тасарч шар өнгийн AgI тунадас хамгийн түрүүлж үүснэ.",
        examinerTip: "Exam trap: Bond enthalpy overrides bond polarity when determining hydrolysis rate: I > Br > Cl > F.",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 1: SPECIMEN PAPER 1 (2025/2026)
  // ==========================================
  {
    id: "9701_specimen_qp_1",
    title: "Cambridge 9701 Specimen Paper 1 (2025/2026)",
    paperType: "Paper 1",
    year: 2026,
    series: "Specimen",
    variant: "Specimen",
    paperCode: "9701/01/SP/26",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 33,
      B: 28,
      C: 23,
      D: 19,
      E: 15,
    },
    description: "Official Cambridge 9701 Specimen Multiple Choice Paper 1. Modern syllabus design testing deep conceptual application across physical, inorganic, and organic chemistry.",
    descriptionMn: "Cambridge 9701 2025/2026 шинэчилсэн хөтөлбөрийн Specimen Paper 1 (Олон сонголттой загвар шалгалт).",
    mcqQuestions: [
      {
        id: "sp-01-q1",
        questionNumber: 1,
        chapterNumber: 3,
        chapterTitle: "Chemical Bonding",
        topicCategory: "Physical",
        syllabusRef: "3.3 Hybridisation in organic molecules",
        questionText: "What is the hybridisation of the carbon atoms in Propene (CH₃–CH=CH₂) from left to right?",
        options: [
          "sp³, sp², sp²",
          "sp², sp², sp²",
          "sp³, sp³, sp²",
          "sp³, sp, sp"
        ],
        correctOptionIndex: 0,
        explanationEn: "The methyl carbon (–CH₃) has 4 single σ-bonds, so it is sp³ hybridised (tetrahedral geometry, 109.5°). The two alkene carbons (–CH=CH₂) each form 3 σ-bonds and 1 π-bond, so both are sp² hybridised (trigonal planar, 120°).",
        explanationMn: "Метил нүүрстөрөгч (–CH₃) нь 4 дан σ-холбоотой тул sp³ эрлийзжилттэй. Алкены давхар холбоотой нүүрстөрөгчид (–CH=CH₂) нь тус бүр 3 σ ба 1 π холбоотой тул sp² эрлийзжилттэй.",
        examinerTip: "Single bond (4 domains) = sp³; Double bond (3 domains) = sp²; Triple bond (2 domains) = sp.",
        difficulty: "Standard"
      },
      {
        id: "sp-01-q2",
        questionNumber: 2,
        chapterNumber: 11,
        chapterTitle: "Group 2",
        topicCategory: "Inorganic",
        syllabusRef: "11.1 Solubility trends of Group 2 Hydroxides & Sulfates",
        questionText: "Which statement correctly describes the solubility trends of Group 2 compounds down the group from Magnesium to Barium?",
        options: [
          "Hydroxides become more soluble; Sulfates become less soluble.",
          "Hydroxides become less soluble; Sulfates become more soluble.",
          "Both Hydroxides and Sulfates become more soluble.",
          "Both Hydroxides and Sulfates become less soluble."
        ],
        correctOptionIndex: 0,
        explanationEn: "Down Group 2, ionic radius increases. Lattice energy and hydration enthalpy both decrease, but for sulfates (large SO₄²⁻ anion), hydration enthalpy drops faster, making sulfates less soluble (BaSO₄ is completely insoluble). For hydroxides (small OH⁻ anion), lattice energy decreases much faster than hydration enthalpy, making hydroxides more soluble (Ba(OH)₂ is soluble).",
        explanationMn: "2-р бүлгийн дагуу доошлоход: Гидроксидын уусах чанар ИХЭСНЭ (Mg(OH)₂ бага уусдаг, Ba(OH)₂ сайн уусдаг). Сульфатын уусах чанар БАГАСНА (MgSO₄ сайн уусдаг, BaSO₄ огт уусдаггүй цагаан тунадас).",
        examinerTip: "Mnemonic: Hydroxide solubility goes UP; Sulfate solubility goes DOWN down Group 2.",
        difficulty: "Standard"
      },
      {
        id: "sp-01-q3",
        questionNumber: 3,
        chapterNumber: 17,
        chapterTitle: "Alcohols & Esters",
        topicCategory: "Organic",
        syllabusRef: "17.2 Ester Hydrolysis in alkaline vs acidic conditions",
        questionText: "Methyl propanoate is heated under reflux with aqueous sodium hydroxide. What are the products of this saponification reaction?",
        options: [
          "Sodium propanoate and Methanol",
          "Sodium ethanoate and Ethanol",
          "Propanoic acid and Sodium methoxide",
          "Propan-1-ol and Sodium methanoate"
        ],
        correctOptionIndex: 0,
        explanationEn: "Alkaline hydrolysis of the ester CH₃CH₂COOCH₃ breaks the ester linkage: CH₃CH₂COOCH₃ + NaOH → CH₃CH₂COONa (Sodium propanoate) + CH₃OH (Methanol). Under alkaline conditions, the carboxylate salt is formed irreversibly.",
        explanationMn: "Эфир CH₃CH₂COOCH₃ шүлтлэг орчинд саванжих урвалд ороход C–O холбоо тасарч Натрийн пропаноат (CH₃CH₂COONa) ба метанол (CH₃OH) үүснэ.",
        examinerTip: "Alkaline hydrolysis is irreversible and yields the carboxylate SALT + alcohol; acid hydrolysis is reversible and yields carboxylic ACID + alcohol.",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 2: FEB/MARCH 2025 VARIANT 22 (SPRING 2025 THEORY "ХАВАР")
  // ==========================================
  {
    id: "9701_m25_qp_22",
    title: "Cambridge 9701/22 Feb/March 2025 (Spring AS Theory)",
    paperType: "Paper 2",
    year: 2025,
    series: "Feb/March",
    variant: "22",
    paperCode: "9701/22/F/M/25",
    timeAllowedMinutes: 75,
    totalMarks: 60,
    gradeThresholds: {
      A: 44,
      B: 37,
      C: 30,
      D: 24,
      E: 18,
    },
    description: "Official Cambridge 9701 AS Level Structured Questions Paper 22 (Feb/March 2025 Spring Series). Features cutting-edge questions on Period 3 Chlorides, Chemical Equilibria, and Carbonyl Reactions.",
    descriptionMn: "Cambridge 9701 2025 оны Хаврын AS Level онолын шалгалт (Feb/March 2025, Paper 22).",
    theoryQuestions: [
      {
        id: "m25-22-q1",
        questionNumber: 1,
        title: "Question 1: Period 3 Chlorides Structure, Bonding & Hydrolysis",
        chapterNumber: 10,
        chapterTitle: "Periodicity (Period 3)",
        topicCategory: "Inorganic",
        contextPrompt: "The chlorides of Period 3 elements show a dramatic change in structure and bonding across the period from sodium to sulfur.\nConsider sodium chloride (NaCl), silicon tetrachloride (SiCl₄), and phosphorus(V) chloride (PCl₅).",
        contextPromptMn: "3-р үеийн элементүүдийн хлоридууд: Натрийн хлорид (NaCl), цахиурын тетрахлорид (SiCl₄), фосфорын(V) хлорид (PCl₅).",
        totalMarks: 11,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Describe and explain the difference in electrical conductivity between solid sodium chloride and molten sodium chloride.",
            subQuestionTextMn: "Хатуу ба хайлмал натрийн хлоридын цахилгаан дамжуулалтын ялгааг бүтэцтэй нь холбон тайлбарлана уу.",
            marks: 3,
            markScheme: [
              "[1] Solid NaCl does not conduct electricity because ions (Na⁺ and Cl⁻) are held in fixed positions in the giant ionic crystal lattice and are not mobile.",
              "[1] Molten NaCl conducts electricity because the ionic lattice is broken down.",
              "[1] Ions are free to move and carry electric charge towards electrodes."
            ],
            modelAnswer: "In solid NaCl, the Na⁺ and Cl⁻ ions are held tightly in fixed positions within the giant ionic lattice by strong electrostatic forces, so there are no mobile ions to conduct charge.\nIn molten NaCl, thermal energy has broken down the lattice, freeing the ions to move and carry electric current.",
            modelAnswerMn: "Хатуу NaCl-д Na⁺ ба Cl⁻ ионууд оронт тордоо бэхлэгдэн хөдөлгөөнгүй байдаг тул цахилгаан дамжуулахгүй. Хайлмал төлөвт тор задарч ионууд чөлөөтэй шилжин цахилгаан гүйдэл дамжуулдаг.",
            examinerNotes: "Award marks for specifying 'ions are mobile', NOT electrons."
          },
          {
            partLabel: "(b)",
            subQuestionText: "When silicon tetrachloride, SiCl₄, is added to water, a vigorous reaction occurs with steamy fumes.\n(i) Write a balanced chemical equation for this reaction.\n(ii) State the approximate pH of the resulting mixture and explain why SiCl₄ hydrolyses whereas CCl₄ does not.",
            subQuestionTextMn: "(i) SiCl₄ усаар үйлчлэх урвалын тэгшитгэлийг бич.\n(ii) Үүссэн уусмалын pH-ийг тодорхойлж, яагаад SiCl₄ гидролизод ордог атал CCl₄ гидролизод ордоггүйн шалтгааныг тайлбарла.",
            marks: 5,
            markScheme: [
              "[1] SiCl₄(l) + 2H₂O(l) → SiO₂(s) + 4HCl(aq) (or SiCl₄ + 4H₂O → Si(OH)₄ + 4HCl)",
              "[1] Approximate pH: 1 or 2 (strongly acidic due to HCl fumes)",
              "[1] Silicon has empty low-lying 3d orbitals in its valence shell available to accept a lone pair of electrons from water molecules to form coordinate bonds.",
              "[1] Carbon (in CCl₄) only has n=2 quantum shell with no d-orbitals available for dative bonding.",
              "[1] Also accept: carbon is smaller and sterically crowded by 4 bulky chlorine atoms."
            ],
            modelAnswer: "(i) SiCl₄(l) + 2H₂O(l) → SiO₂(s) + 4HCl(g)\n(ii) pH = 1-2.\nSilicon has empty low-energy 3d orbitals that can accept a lone pair of electrons from a water oxygen atom to initiate nucleophilic attack (coordination). In contrast, carbon has no d-orbitals in its second quantum shell, preventing water from coordinating.",
            modelAnswerMn: "(i) SiCl₄ + 2H₂O → SiO₂ + 4HCl.\n(ii) pH = 1-2.\nЦахиурын атом нь 3d хоосон дэд түвшинтэй тул усны хүчилтөрөгчийн сул хосыг координацын холбоогоор авч гидролизд ордог. Харин нүүрстөрөгчид (CCl₄) d-орбиталь байхгүй тул ус довтолж чаддаггүй.",
            examinerNotes: "Mention 'available empty d orbitals on silicon' for full credit."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 2: SPECIMEN PAPER 2 (2025/2026)
  // ==========================================
  {
    id: "9701_specimen_qp_2",
    title: "Cambridge 9701 Specimen Paper 2 (2025/2026)",
    paperType: "Paper 2",
    year: 2026,
    series: "Specimen",
    variant: "Specimen",
    paperCode: "9701/02/SP/26",
    timeAllowedMinutes: 75,
    totalMarks: 60,
    gradeThresholds: {
      A: 43,
      B: 36,
      C: 29,
      D: 23,
      E: 17,
    },
    description: "Official Cambridge 9701 Specimen Structured Questions Paper 2 (2025/2026 syllabus). Rigorous examination on Chemical Periodicity, Equilibria, Reaction Rates, and Organic Pathways.",
    descriptionMn: "Cambridge 9701 2025/2026 шинэчилсэн хөтөлбөрийн Specimen Paper 2 онолын шалгалт.",
    theoryQuestions: [
      {
        id: "sp-02-q1",
        questionNumber: 1,
        title: "Question 1: Group 17 Chemistry & Halide Precipitation Reactions",
        chapterNumber: 12,
        chapterTitle: "Group 17 (Halogens)",
        topicCategory: "Inorganic",
        contextPrompt: "A solid sample of an unknown potassium salt, K_X, was investigated in the laboratory.\nWhen aqueous silver nitrate, AgNO₃(aq), was added to an aqueous solution of K_X, a cream precipitate formed. When dilute aqueous ammonia was added to the precipitate, it did not dissolve, but it completely dissolved when concentrated aqueous ammonia was added.",
        contextPromptMn: "Үл мэдэгдэх калийн давс K_X-ийн усан уусмал дээр AgNO₃ нэмэхэд шаргалдуу (cream) тунадас үүссэн. Шингэрүүлсэн аммиакт уусаагүй боловч концентрацитай аммиакт бүрэн ууссан.",
        totalMarks: 10,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Identify the halide ion present in salt K_X and write an ionic equation, including state symbols, for the precipitation reaction.",
            subQuestionTextMn: "K_X давсан дахь галид ионыг тодорхойлж, тунадасжих урвалын ионы тэгшитгэлийг төлөвийн тэмдэгтэй бичнэ үү.",
            marks: 3,
            markScheme: [
              "[1] Halide ion: Bromide (Br⁻)",
              "[1] Correct ionic equation: Ag⁺(aq) + Br⁻(aq) → AgBr(s)",
              "[1] Correct state symbols on all species"
            ],
            modelAnswer: "Halide ion: Bromide ion (Br⁻).\nIonic equation: Ag⁺(aq) + Br⁻(aq) → AgBr(s)",
            modelAnswerMn: "Ион: Бромид ион (Br⁻).\nИоны тэгшитгэл: Ag⁺(aq) + Br⁻(aq) → AgBr(s)",
            examinerNotes: "AgCl dissolves in dilute NH₃; AgBr dissolves only in concentrated NH₃; AgI is insoluble in both."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Explain in terms of complex ion formation why AgBr dissolves in concentrated aqueous ammonia.",
            subQuestionTextMn: "AgBr яагаад концентрацитай аммиакт уусдагийг комплекс ион үүсэхтэй холбон тайлбарлана уу.",
            marks: 2,
            markScheme: [
              "[1] Ammonia acts as a monodentate ligand and forms a soluble diamminesilver(I) complex ion: [Ag(NH₃)₂]⁺",
              "[1] Equation: AgBr(s) + 2NH₃(aq) ⇌ [Ag(NH₃)₂]⁺(aq) + Br⁻(aq), removing free Ag⁺ ions and causing precipitate to dissolve"
            ],
            modelAnswer: "Ammonia molecules act as neutral ligands donating lone pairs to form the soluble linear complex ion diamminesilver(I), [Ag(NH₃)₂]⁺:\nAgBr(s) + 2NH₃(aq) → [Ag(NH₃)₂]⁺(aq) + Br⁻(aq).",
            modelAnswerMn: "Аммиак нь лиганд болж Ag⁺ ионтой [Ag(NH₃)₂]⁺ уусдаг шугаман комплекс ион үүсгэдэг тул тунадас уусдаг.",
            examinerNotes: "Formula of complex ion must be correctly written as [Ag(NH₃)₂]⁺."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 3: MAY/JUNE 2024 VARIANT 31 (PRACTICAL)
  // ==========================================
  {
    id: "9701_s24_qp_31",
    title: "Cambridge 9701/31 May/June 2024 (Practical)",
    paperType: "Paper 3",
    year: 2024,
    series: "May/June",
    variant: "31",
    paperCode: "9701/31/M/J/24",
    timeAllowedMinutes: 120,
    totalMarks: 40,
    gradeThresholds: {
      A: 31,
      B: 27,
      C: 23,
      D: 19,
      E: 15,
    },
    description: "Official Cambridge 9701 Advanced Practical Skills Paper 31 (Quantitative Titration, Enthalpy of Neutralisation, and Qualitative Analysis of Unknown Inorganic Salts with QA Notes).",
    descriptionMn: "Cambridge 9701 Практик шалгалт Paper 31 (Эзлэхүүний титрлэлт, Сармагжих дулааны хэмжилт, ба Үл мэдэгдэх давсуудын чанарын шинжилгээ).",
    practicalMaterials: {
      apparatusList: [
        "50.0 cm³ burette (±0.05 cm³)",
        "25.0 cm³ volumetric pipette",
        "250 cm³ conical flasks",
        "Expanded polystyrene cup with lid (calorimeter)",
        "-10 °C to 110 °C thermometer (±0.2 °C)",
        "Test-tubes and boiling tubes rack",
        "Bunsen burner and heat-resistant mat",
        "Teat pipettes and delivery tube"
      ],
      reagentsList: [
        "FA 1: Hydrochloric acid, HCl(aq) of unknown concentration",
        "FA 2: Standard aqueous Sodium hydroxide, NaOH(aq) 0.100 mol dm⁻³",
        "FA 3: Sulfuric acid, H₂SO₄(aq) 2.0 mol dm⁻³",
        "FA 4: Aqueous Sodium carbonate, Na₂CO₃ 1.0 mol dm⁻³",
        "FA 5 & FA 6: Unknown salt solutions for Cations & Anions identification",
        "Phenolphthalein indicator",
        "Reagents for Qualitative Analysis (NaOH, NH₃, AgNO₃, BaCl₂, Al foil, Litmus)"
      ],
      qualitativeNotesIncluded: true,
      safetyPrecautions: [
        "Wear eye protection at all times during practical.",
        "FA 1 and FA 3 are corrosive and irritating to skin.",
        "Handle hot boiling tubes with test-tube holders."
      ]
    },
    theoryQuestions: [
      {
        id: "s24-31-q1",
        questionNumber: 1,
        title: "Question 1: Volumetric Analysis (Titration of FA 1 with standard FA 2)",
        chapterNumber: 31,
        chapterTitle: "Paper 3 Practical Skills",
        topicCategory: "Practical",
        contextPrompt: "You are to determine the concentration of hydrochloric acid in FA 1 by titrating it against standard 0.100 mol dm⁻³ aqueous sodium hydroxide, FA 2, using phenolphthalein indicator.\nReaction equation: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)\n\nPipette 25.0 cm³ of FA 1 into a conical flask. Add 3 drops of phenolphthalein. Titrate with FA 2 from the burette until the first permanent pale pink colour appears.\n\nBurette Readings:\n• Rough: Initial = 0.00 cm³, Final = 24.80 cm³, Titre = 24.80 cm³\n• Titre 1: Initial = 0.00 cm³, Final = 24.30 cm³, Titre = 24.30 cm³\n• Titre 2: Initial = 24.30 cm³, Final = 48.65 cm³, Titre = 24.35 cm³",
        contextPromptMn: "0.100 моль/дм³ NaOH (FA 2) уусмалаар HCl (FA 1) уусмалыг фенолфталеин индикатор ашиглан титрлэж концентрацийг нь тооцоолно уу.",
        totalMarks: 14,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Record all burette readings with suitable headings and units. Calculate the mean titre of FA 2 using concordant titres (within 0.10 cm³).",
            subQuestionTextMn: "Бюреткийн заалтыг хүснэгтэд бичиж, 0.10 см³-ийн зөрүүтэй тохирсон титрүүдийн дундаж эзлэхүүнийг тооцоолно уу.",
            marks: 5,
            markScheme: [
              "[1] Burette table has clear headings: Initial reading / cm³, Final reading / cm³, Titre / cm³",
              "[1] All readings recorded to 2 decimal places with second decimal 0 or 5",
              "[1] Concordant titres identified within 0.10 cm³ (Titre 1 = 24.30 cm³, Titre 2 = 24.35 cm³)",
              "[2] Mean titre correctly calculated: (24.30 + 24.35) / 2 = 24.33 cm³ (or 24.325 cm³)"
            ],
            modelAnswer: "Concordant titres selected: Titre 1 (24.30 cm³) and Titre 2 (24.35 cm³).\nMean titre = (24.30 + 24.35) / 2 = 24.33 cm³.",
            modelAnswerMn: "Тохирсон титрүүд: 24.30 см³ ба 24.35 см³.\nДундаж эзлэхүүн = 24.33 см³.",
            examinerNotes: "Do not include the rough titre in calculating the mean unless it is concordant within 0.10 cm³ of other titres."
          },
          {
            partLabel: "(b)",
            subQuestionText: "(i) Calculate the number of moles of NaOH present in the mean titre of FA 2.\n(ii) Deduce the number of moles of HCl in 25.0 cm³ of FA 1.\n(iii) Calculate the exact concentration of HCl in FA 1 in mol dm⁻³ to 3 significant figures.",
            subQuestionTextMn: "(i) Дундаж титр дэх NaOH-ийн молийг ол.\n(ii) 25.0 см³ FA 1 дахь HCl-ийн молийг ол.\n(iii) FA 1 уусмалын HCl-ийн молийн концентрацийг (моль/дм³) 3 оронтой нарийвчлалтай тооцоол.",
            marks: 5,
            markScheme: [
              "[1] n(NaOH) = (0.100 × 24.33) / 1000 = 2.433 × 10⁻³ mol",
              "[1] 1:1 stoichiometry: n(HCl) in 25.0 cm³ = 2.433 × 10⁻³ mol",
              "[1] Concentration of HCl = (2.433 × 10⁻³ / 0.0250) = 0.0973 mol dm⁻³",
              "[1] Correct evaluation and working shown",
              "[1] Final answer given to 3 significant figures (0.0973 mol dm⁻³)"
            ],
            modelAnswer: "(i) n(NaOH) = c × V = 0.100 × (24.33 / 1000) = 2.433 × 10⁻³ mol.\n(ii) From 1:1 equation, n(HCl) in 25.0 cm³ = 2.433 × 10⁻³ mol.\n(iii) Concentration of HCl = (2.433 × 10⁻³ mol) / (0.0250 dm³) = 0.0973 mol dm⁻³.",
            modelAnswerMn: "(i) n(NaOH) = 2.433 × 10⁻³ моль.\n(ii) n(HCl) = 2.433 × 10⁻³ моль.\n(iii) Концентраци = 0.0973 моль/дм³.",
            examinerNotes: "Ensure all final numerical answers are rounded to 3 significant figures in Cambridge Paper 3."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 4: MAY/JUNE 2024 VARIANT 42 (A LEVEL THEORY)
  // ==========================================
  {
    id: "9701_s24_qp_42",
    title: "Cambridge 9701/42 May/June 2024 (A Level Theory)",
    paperType: "Paper 4",
    year: 2024,
    series: "May/June",
    variant: "42",
    paperCode: "9701/42/M/J/24",
    timeAllowedMinutes: 120,
    totalMarks: 100,
    gradeThresholds: {
      A: 68,
      B: 58,
      C: 48,
      D: 39,
      E: 30,
    },
    description: "Official Cambridge 9701 A Level Structured Theory Paper 42. Comprehensive examination on Thermodynamics (Born-Haber cycles, Entropy & Gibbs free energy), Transition Elements & Complex stability, Rate Equations, and Arenes/Polymer Chemistry.",
    descriptionMn: "Cambridge 9701 A Level Химийн Paper 42 онолын бүрэн шалгалт (Термодинамик, Электрохими, Шилжилтийн металлууд, Арен ба Органик нийлэгжилт).",
    theoryQuestions: [
      {
        id: "s24-42-q1",
        questionNumber: 1,
        title: "Question 1: Born-Haber Cycles, Lattice Energy & Hydration of Magnesium Halides",
        chapterNumber: 19,
        chapterTitle: "Lattice Energy & Born-Haber Cycles",
        topicCategory: "Physical",
        contextPrompt: "Lattice energy (ΔH°latt) is a key parameter determining the thermal stability and solubility of ionic solids.\nConsider the formation of magnesium fluoride, MgF₂(s), from its constituent gaseous ions:\nMg²⁺(g) + 2F⁻(g) → MgF₂(s)",
        contextPromptMn: "Магнийн фторидын (MgF₂) кристаллын торын энерги (Lattice Energy) болон Борн-Хаберын циклийг ашиглан термодинамик тооцоолол хийнэ үү.",
        totalMarks: 12,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Define the term 'standard lattice energy' (ΔH°latt).",
            subQuestionTextMn: "Стандарт кристаллын торын энерги (ΔH°latt)-ийн тодорхойлолтыг бичнэ үү.",
            marks: 2,
            markScheme: [
              "[1] The enthalpy change when ONE mole of an ionic compound / crystal lattice is formed",
              "[1] from its gaseous ions under standard conditions (298 K and 100 kPa)"
            ],
            modelAnswer: "Standard lattice energy is the enthalpy change when one mole of an ionic crystal lattice is formed from its constituent gaseous ions under standard conditions (298 K, 100 kPa).",
            modelAnswerMn: "Стандарт кристаллын торын энерги гэдэг нь стандарт нөхцөлд 1 моль ионы нэгдлийн талст оронт тор нь хийн төлөвт байгаа тусдаа ионуудаасаа үүсэх үеийн энтальпийн өөрчлөлт юм.",
            examinerNotes: "Must state 'one mole of solid ionic compound' and 'from gaseous ions'."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Given the following data:\n• ΔH°f(MgF₂(s)) = -1124 kJ mol⁻¹\n• ΔH°at(Mg(s)) = +148 kJ mol⁻¹\n• 1st IE of Mg = +738 kJ mol⁻¹\n• 2nd IE of Mg = +1451 kJ mol⁻¹\n• Bond energy of F₂(g) = +158 kJ mol⁻¹\n• Electron affinity of F(g) = -328 kJ mol⁻¹\n\nCalculate the lattice energy of MgF₂(s).",
            subQuestionTextMn: "Өгөгдсөн термодинамик утгуудыг ашиглан MgF₂(s)-ийн кристаллын торын энергийг тооцоолно уу.",
            marks: 4,
            markScheme: [
              "[1] Enthalpy of gaseous Mg²⁺ ions = +148 + 738 + 1451 = +2337 kJ mol⁻¹",
              "[1] Enthalpy of gaseous 2F⁻ ions = +158 + 2(-328) = +158 - 656 = -498 kJ mol⁻¹",
              "[1] Cycle: ΔH°f = ΔH°at(Mg) + IE1 + IE2 + E(F-F) + 2(EA(F)) + ΔH°latt",
              "[1] ΔH°latt = -1124 - (2337 - 498) = -1124 - 1839 = -2963 kJ mol⁻¹"
            ],
            modelAnswer: "ΔH°f = ΔH°at(Mg) + IE₁(Mg) + IE₂(Mg) + E(F–F) + 2·EA(F) + ΔH°latt\n-1124 = 148 + 738 + 1451 + 158 + 2(-328) + ΔH°latt\n-1124 = 1839 + ΔH°latt\nΔH°latt = -1124 - 1839 = -2963 kJ mol⁻¹.",
            modelAnswerMn: "ΔH°latt = -2963 кЖ/моль.",
            examinerNotes: "Lattice energy of formation is always large and negative (exothermic)."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 4: FEB/MARCH 2025 VARIANT 42 (SPRING 2025 A LEVEL THEORY "ХАВАР")
  // ==========================================
  {
    id: "9701_m25_qp_42",
    title: "Cambridge 9701/42 Feb/March 2025 (Spring A Level Theory)",
    paperType: "Paper 4",
    year: 2025,
    series: "Feb/March",
    variant: "42",
    paperCode: "9701/42/F/M/25",
    timeAllowedMinutes: 120,
    totalMarks: 100,
    gradeThresholds: {
      A: 71,
      B: 61,
      C: 50,
      D: 40,
      E: 31,
    },
    description: "Official Cambridge 9701 A Level Structured Theory Paper 42 (Feb/March 2025 Spring Series). Comprehensive coverage of Entropy, Feasibility Temperature, Benzene Electrophilic Substitution, and Blood Buffer Chemistry.",
    descriptionMn: "Cambridge 9701 A Level 2025 оны Хаврын шалгалт (Feb/March 2025, Paper 42 Онолын гүнзгийрүүлсэн даалгавар).",
    theoryQuestions: [
      {
        id: "m25-42-q1",
        questionNumber: 1,
        title: "Question 1: Entropy, Gibbs Free Energy & Decomposition Temperature",
        chapterNumber: 23,
        chapterTitle: "Entropy & Gibbs Free Energy",
        topicCategory: "Physical",
        contextPrompt: "The thermal decomposition of calcium carbonate is an endothermic industrial process:\nCaCO₃(s) → CaO(s) + CO₂(g)\n\nThermodynamic data at 298 K:\n• ΔH° = +178 kJ mol⁻¹\n• S°[CaCO₃(s)] = 92.9 J K⁻¹ mol⁻¹\n• S°[CaO(s)] = 39.7 J K⁻¹ mol⁻¹\n• S°[CO₂(g)] = 213.6 J K⁻¹ mol⁻¹",
        contextPromptMn: "Шохойн чулууны (CaCO₃) дулааны задралын урвалын энтропи, Гиббсийн чөлөөт энерги ба задарч эхлэх эгзэгтэй температур.",
        totalMarks: 12,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Explain why the entropy change of the system, ΔS°system, is positive for this reaction without performing a numerical calculation.",
            subQuestionTextMn: "Тооцоо хийхгүйгээр энэ урвалын хувьд системийн энтропийн өөрчлөлт (ΔS) яагаад эерэг байх учиртайг тайлбарлана уу.",
            marks: 2,
            markScheme: [
              "[1] A gas (CO₂) is produced from a solid reactant (CaCO₃)",
              "[1] Gaseous particles have much greater disorder / randomness / dispersal of energy than particles in a crystalline solid lattice"
            ],
            modelAnswer: "A solid reactant decomposes to produce one mole of gas (CO₂). Gases have vastly more disordered arrangements of particles and energy quanta than rigid ionic solids, so entropy increases significantly (ΔS > 0).",
            modelAnswerMn: "Хатуу бодисоос 1 моль хий (CO₂) үүсч байна. Хийн молекулууд хатуу талстаас хамаагүй их эмх замбараагүй байдалтай, энергийн тархалт өндөртэй тул системийн энтропи өснө.",
            examinerNotes: "Award mark for stating: 1 mole of gas produced from solid."
          },
          {
            partLabel: "(b)",
            subQuestionText: "(i) Calculate ΔS°system for the reaction in J K⁻¹ mol⁻¹.\n(ii) Calculate the standard Gibbs free energy change, ΔG°, at 298 K in kJ mol⁻¹ and state whether the reaction is feasible at this temperature.",
            subQuestionTextMn: "(i) Системийн стандарт энтропийн өөрчлөлт ΔS°-ийг тооцоол.\n(ii) 298 К температурт Гиббсийн чөлөөт энерги ΔG°-ийг (кЖ/моль) олж, урвал өөрөө аяндаа явагдах эсэхийг тодорхойл.",
            marks: 5,
            markScheme: [
              "[1] ΔS° = ΣS°(products) - ΣS°(reactants) = (39.7 + 213.6) - 92.9 = +160.4 J K⁻¹ mol⁻¹",
              "[1] ΔG° = ΔH° - TΔS°",
              "[1] Correct conversion of units: TΔS° = 298 × (160.4 / 1000) = 47.8 kJ mol⁻¹",
              "[1] ΔG° = +178 - 47.8 = +130.2 kJ mol⁻¹ (accept +130 kJ mol⁻¹)",
              "[1] Not feasible at 298 K because ΔG° > 0 (positive)"
            ],
            modelAnswer: "(i) ΔS° = (39.7 + 213.6) - 92.9 = +160.4 J K⁻¹ mol⁻¹.\n(ii) ΔG° = ΔH° - T(ΔS°/1000) = 178 - 298 × (160.4 / 1000) = 178 - 47.8 = +130.2 kJ mol⁻¹.\nBecause ΔG° is positive (+130.2 kJ mol⁻¹), the reaction is NOT feasible at 298 K.",
            modelAnswerMn: "(i) ΔS° = +160.4 Ж К⁻¹ моль⁻¹.\n(ii) ΔG° = 178 - 298 × (160.4/1000) = +130.2 кЖ/моль.\nΔG° нь эерэг гарсан тул 298 К өрөөний температурт урвал аяндаа явагдахгүй.",
            examinerNotes: "Crucial mark scheme point: ΔS must be divided by 1000 when working in kJ."
          },
          {
            partLabel: "(c)",
            subQuestionText: "Calculate the minimum temperature (in Kelvin and °C) at which the thermal decomposition of calcium carbonate becomes spontaneous (feasible).",
            subQuestionTextMn: "Шохойн чулууны задралын урвал өөрөө явагдаж эхлэх хамгийн бага эгзэгтэй температурыг (Кельвин ба Цельсээр) тооцоолно уу.",
            marks: 3,
            markScheme: [
              "[1] At feasibility boundary, ΔG° = 0  =>  T = ΔH° / ΔS°",
              "[1] T = (178 × 1000) / 160.4 = 1109.7 K (accept 1110 K)",
              "[1] Temperature in °C = 1109.7 - 273 = 836.7 °C (accept 837 °C)"
            ],
            modelAnswer: "For a reaction to become feasible, ΔG° ≤ 0. At the transition temperature:\nT = ΔH° / ΔS° = (178 × 1000 J mol⁻¹) / (160.4 J K⁻¹ mol⁻¹) = 1110 K.\nIn Celsius: 1110 - 273 = 837 °C.",
            modelAnswerMn: "Эгзэгтэй температур: T = ΔH° / ΔS° = 178000 / 160.4 = 1110 К (буюу 837 °C).",
            examinerNotes: "Remember to convert ΔH to Joules (178 000 J) before dividing by ΔS in J K⁻¹ mol⁻¹."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 4: SPECIMEN PAPER 4 (2025/2026 A LEVEL)
  // ==========================================
  {
    id: "9701_specimen_qp_4",
    title: "Cambridge 9701 Specimen Paper 4 (2025/2026)",
    paperType: "Paper 4",
    year: 2026,
    series: "Specimen",
    variant: "Specimen",
    paperCode: "9701/04/SP/26",
    timeAllowedMinutes: 120,
    totalMarks: 100,
    gradeThresholds: {
      A: 69,
      B: 59,
      C: 49,
      D: 40,
      E: 31,
    },
    description: "Official Cambridge 9701 Specimen A Level Structured Theory Paper 4 (2025/2026). In-depth problems on Transition Metal Ligand Exchange, Stability Constants, Arenes Electrophilic Aromatic Substitution, and Nernst equation.",
    descriptionMn: "Cambridge 9701 2025/2026 шинэчилсэн хөтөлбөрийн Specimen Paper 4 (A Level Онолын гүнзгийрүүлсэн шалгалт).",
    theoryQuestions: [
      {
        id: "sp-04-q1",
        questionNumber: 1,
        title: "Question 1: Transition Elements, Ligand Substitution & Stability Constants",
        chapterNumber: 24,
        chapterTitle: "Transition Elements",
        topicCategory: "Inorganic",
        contextPrompt: "Aqueous copper(II) ions exist as pale blue hexaaquacopper(II) complex ions, [Cu(H₂O)₆]²⁺.\nWhen concentrated hydrochloric acid is added dropwise, the solution turns green and then yellow-green as the tetrahedral complex ion [CuCl₄]²⁻ forms:\n[Cu(H₂O)₆]²⁺(aq) + 4Cl⁻(aq) ⇌ [CuCl₄]²⁻(aq) + 6H₂O(l)    (log₁₀ Kstab = 5.6)",
        contextPromptMn: "Зэс(II)-ийн комплекс ионы лигандын халалцах урвал ба тогтворжилтын тогтмол Kstab.",
        totalMarks: 12,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "State the coordination number and geometry of:\n(i) [Cu(H₂O)₆]²⁺\n(ii) [CuCl₄]²⁻\nExplain why the coordination number decreases from 6 to 4.",
            subQuestionTextMn: "(i) [Cu(H₂O)₆]²⁺ ба (ii) [CuCl₄]²⁻ ионуудын координацын тоо ба орон зайн хэлбэрийг бичиж, координацын тоо 6-аас 4 болж буурсан шалтгааныг тайлбарла.",
            marks: 5,
            markScheme: [
              "[1] [Cu(H₂O)₆]²⁺: Coordination number = 6, Geometry = Octahedral",
              "[1] [CuCl₄]²⁻: Coordination number = 4, Geometry = Tetrahedral",
              "[1] Chloride ions (Cl⁻) are significantly larger in ionic radius than neutral water molecules (H₂O)",
              "[1] Cl⁻ ions carry negative charges, causing electrostatic repulsion between ligands",
              "[1] Steric hindrance prevents 6 chloride ligands from coordinating around the central Cu²⁺ ion"
            ],
            modelAnswer: "(i) [Cu(H₂O)₆]²⁺: Coordination number 6, Octahedral.\n(ii) [CuCl₄]²⁻: Coordination number 4, Tetrahedral.\nThe coordination number decreases because chloride ligands are larger in size than water molecules and carry negative charges. Due to steric hindrance and mutual electrostatic repulsion, only four chloride ions can fit around the copper(II) cation.",
            modelAnswerMn: "(i) [Cu(H₂O)₆]²⁺: Координацын тоо 6, Октаэдр.\n(ii) [CuCl₄]²⁻: Координацын тоо 4, Тетраэдр.\nХлорид ион Cl⁻ нь саармаг усны молекулаас том радиустай бөгөөд сөрөг цэнэгтэй тул орон зайн саад ба түлхэлтийн улмаас 4-өөс илүү Cl⁻ төвийн Cu²⁺ ионыг тойрон багтах боломжгүй.",
            examinerNotes: "Must mention both ligand size (larger radius) and electrostatic/steric repulsion."
          },
          {
            partLabel: "(b)",
            subQuestionText: "When 1,2-diaminoethane ('en', H₂NCH₂CH₂NH₂) is added to [Cu(H₂O)₆]²⁺, the complex [Cu(en)₃]²⁺ forms (log₁₀ Kstab = 18.7).\nExplain in terms of the chelate effect and entropy why [Cu(en)₃]²⁺ is overwhelmingly more stable than [Cu(H₂O)₆]²⁺.",
            subQuestionTextMn: "1,2-диаминоэтан 'en' нэмэхэд үүсэх [Cu(en)₃]²⁺ (log Kstab = 18.7) яагаад [Cu(H₂O)₆]²⁺-оос хамаагүй илүү тогтвортой байдгийг хелатын нөлөө ба энтропиор тайлбарла.",
            marks: 4,
            markScheme: [
              "[1] 1,2-diaminoethane is a bidentate ligand (donates 2 lone pairs from nitrogen atoms)",
              "[1] Reaction equation: [Cu(H₂O)₆]²⁺ + 3en ⇌ [Cu(en)₃]²⁺ + 6H₂O",
              "[1] 4 reactant particles produce 7 product particles, resulting in an increase in the number of independent particles in solution",
              "[1] ΔS°system is large and positive, driving ΔG° highly negative (ΔG = ΔH - TΔS), known as the chelate effect"
            ],
            modelAnswer: "1,2-diaminoethane is a bidentate ligand. In the substitution reaction:\n[Cu(H₂O)₆]²⁺ + 3en ⇌ [Cu(en)₃]²⁺ + 6H₂O\nFour reactant particles yield seven product particles. This large increase in independent species in solution causes a large positive entropy change (ΔS > 0). Consequently, ΔG becomes much more negative, making [Cu(en)₃]²⁺ exceptionally stable (chelate effect).",
            modelAnswerMn: "1,2-диаминоэтан нь бидентат лиганд юм. Урвалаар 4 эх бодисоос 7 бүтээгдэхүүн молекул үүсч, уусмал дахь чөлөөт бөөмийн тоо нэмэгдсэнээр системийн энтропи эрс өснө (ΔS > 0). Иймд ΔG маш сөрөг болж комплекс маш тогтвортой болно (хелатын нөлөө).",
            examinerNotes: "Always mention particle count change: 4 particles form 7 particles => ΔS is positive."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 5: MAY/JUNE 2024 VARIANT 52 (PLANNING & ANALYSIS)
  // ==========================================
  {
    id: "9701_s24_qp_52",
    title: "Cambridge 9701/52 May/June 2024 (Planning & Analysis)",
    paperType: "Paper 5",
    year: 2024,
    series: "May/June",
    variant: "52",
    paperCode: "9701/52/M/J/24",
    timeAllowedMinutes: 75,
    totalMarks: 30,
    gradeThresholds: {
      A: 23,
      B: 20,
      C: 17,
      D: 14,
      E: 11,
    },
    description: "Official Cambridge 9701 Planning, Analysis and Evaluation Paper 52. Designing an investigation to determine the order of reaction and rate constant for catalytic hydrogen peroxide decomposition, and statistical uncertainty analysis.",
    descriptionMn: "Cambridge 9701 Paper 52 (Туршилт төлөвлөх, Үр дүнгийн статистик шинжилгээ, График боловсруулалт ба Алдааны үнэлгээ).",
    theoryQuestions: [
      {
        id: "s24-52-q1",
        questionNumber: 1,
        title: "Question 1: Experimental Planning (Kinetics of Catalysed H₂O₂ Decomposition)",
        chapterNumber: 32,
        chapterTitle: "Paper 5 Planning & Analysis",
        topicCategory: "Practical",
        contextPrompt: "Hydrogen peroxide decomposes in the presence of solid manganese(IV) oxide catalyst according to:\n2H₂O₂(aq) --[MnO₂]--> 2H₂O(l) + O₂(g)\n\nA student plans an experiment to determine the order of reaction with respect to [H₂O₂] by measuring the initial rate of oxygen gas collection at 25 °C using a gas syringe.",
        contextPromptMn: "Манганы(IV) оксид MnO₂ катализаторын оролцоотойгоор H₂O₂ задрах урвалын эрэмбийг хийн шприц ашиглан хүчилтөрөгчийн ялгаралтыг хэмжиж олох туршилтын төлөвлөгөө боловсруулна уу.",
        totalMarks: 15,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Identify:\n(i) The independent variable\n(ii) The dependent variable\n(iii) Two key variables that must be kept constant.",
            subQuestionTextMn: "(i) Үл хамаарах хувьсагч (independent variable)\n(ii) Хамаарах хувьсагч (dependent variable)\n(iii) Тогтмол байлгах 2 хувьсагчийг (controlled variables) бичнэ үү.",
            marks: 4,
            markScheme: [
              "[1] Independent variable: Concentration of hydrogen peroxide, [H₂O₂](aq)",
              "[1] Dependent variable: Volume of oxygen gas (O₂) produced per unit time / initial rate of gas evolution (cm³ s⁻¹)",
              "[1] Controlled variable 1: Temperature of reaction mixture (constant 25.0 °C in water bath)",
              "[1] Controlled variable 2: Mass and surface area / particle size of solid MnO₂ catalyst (and total volume of reaction mixture)"
            ],
            modelAnswer: "(i) Independent variable: Concentration of aqueous hydrogen peroxide, [H₂O₂].\n(ii) Dependent variable: Volume of O₂(g) collected as a function of time (initial rate = ΔV/Δt).\n(iii) Controlled variables: (1) Temperature maintained at 25.0 °C in a water bath; (2) Mass and particle size of MnO₂ catalyst.",
            modelAnswerMn: "(i) Үл хамаарах: H₂O₂-ийн концентраци.\n(ii) Хамаарах: Хугацаанаас хамаарсан хүчилтөрөгчийн эзлэхүүн (эхний хурд ΔV/Δt).\n(iii) Тогтмол: (1) Урвалын температур (усан ваннд 25 °C); (2) MnO₂ катализаторын масс ба ширхэглэлийн хэмжээ.",
            examinerNotes: "Do not just state 'amount of catalyst' — specify 'mass and particle size / surface area of catalyst'."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 5: SPECIMEN PAPER 5 (2025/2026 PLANNING & EVALUATION)
  // ==========================================
  {
    id: "9701_specimen_qp_5",
    title: "Cambridge 9701 Specimen Paper 5 (2025/2026)",
    paperType: "Paper 5",
    year: 2026,
    series: "Specimen",
    variant: "Specimen",
    paperCode: "9701/05/SP/26",
    timeAllowedMinutes: 75,
    totalMarks: 30,
    gradeThresholds: {
      A: 24,
      B: 21,
      C: 18,
      D: 15,
      E: 12,
    },
    description: "Official Cambridge 9701 Specimen Planning and Evaluation Paper 5 (2025/2026). Designing gravimetric determination of water of crystallisation in hydrated copper(II) sulfate (CuSO₄·xH₂O), crucible heating to constant mass, and error propagation.",
    descriptionMn: "Cambridge 9701 2025/2026 шинэчилсэн хөтөлбөрийн Specimen Paper 5 (Кристаллогидрат CuSO₄·xH₂O дахь талсжилтын усыг тогтмол жинд хүртэл халааж олох туршилтын төлөвлөлт).",
    theoryQuestions: [
      {
        id: "sp-05-q1",
        questionNumber: 1,
        title: "Question 1: Gravimetric Determination of Water of Crystallisation (CuSO₄·xH₂O)",
        chapterNumber: 32,
        chapterTitle: "Paper 5 Planning & Analysis",
        topicCategory: "Practical",
        contextPrompt: "Hydrated copper(II) sulfate has the formula CuSO₄·xH₂O, where x is an integer.\nWhen heated strongly in a porcelain crucible, it undergoes thermal decomposition to form anhydrous copper(II) sulfate:\nCuSO₄·xH₂O(s) → CuSO₄(s) + xH₂O(g)\n\nA student is tasked with designing a procedure to determine the exact integer value of x using gravimetric analysis.",
        contextPromptMn: "CuSO₄·xH₂O талст усыг гравиметрийн аргаар тогтмол масстай болтол шатааж x-ийн бүхэл тоон утгыг олох туршилтын төлөвлөлт.",
        totalMarks: 14,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Describe the essential laboratory technique of 'heating to constant mass' and explain why it is essential for accurate results in this experiment.",
            subQuestionTextMn: "'Тогтмол жинд хүртэл халаах' туршилтын аргыг тайлбарлаж, яагаад энэ нь үр дүнгийн нарийвчлалд нэн чухал болохыг тайлбарлана уу.",
            marks: 3,
            markScheme: [
              "[1] Heat the crucible and sample strongly with a Bunsen burner for 3-5 minutes, allow to cool in a desiccator, and record the mass.",
              "[1] Reheat the crucible for a further 2 minutes, cool in desiccator, and reweigh.",
              "[1] Repeat this heating, cooling, and weighing cycle until two consecutive balance readings are identical (within ±0.002 g), proving all water of crystallisation has been completely driven off."
            ],
            modelAnswer: "Heating to constant mass involves strongly heating the crucible with hydrated salt, cooling it in a desiccator to prevent reabsorption of atmospheric moisture, and weighing it. This cycle is repeated until two consecutive weighings are identical (within balance precision). This confirms that 100% of the water of crystallisation has been vaporised.",
            modelAnswerMn: "Тогтмол масстай болтол халаах гэдэг нь тиглийг дээжтэй нь халааж, эксикаторт хөргөөд жинлэх үйл ажиллагааг дараалсан 2 жинлэлтийн утга хоорондоо ижил (±0.002 г) гарах хүртэл давтахыг хэлнэ. Энэ нь бүх талст ус бүрэн ууршсаныг батална.",
            examinerNotes: "Mention cooling in a desiccator to prevent atmospheric water absorption."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Experimental Data:\n• Mass of empty clean crucible = 18.240 g\n• Mass of crucible + CuSO₄·xH₂O = 23.230 g\n• Mass of crucible + anhydrous CuSO₄ after heating to constant mass = 21.435 g\n(Ar: Cu = 63.5, S = 32.1, O = 16.0, H = 1.0)\n\nCalculate the experimental value of x.",
            subQuestionTextMn: "Туршилтын өгөгдлийг ашиглан x-ийн тоон утгыг тооцоолно уу.",
            marks: 5,
            markScheme: [
              "[1] Mass of hydrated salt = 23.230 - 18.240 = 4.990 g",
              "[1] Mass of anhydrous CuSO₄ = 21.435 - 18.240 = 3.195 g",
              "[1] Mass of water driven off = 23.230 - 21.435 = 1.795 g",
              "[1] Moles: n(CuSO₄) = 3.195 / 159.6 = 0.02002 mol; n(H₂O) = 1.795 / 18.0 = 0.09972 mol",
              "[1] Ratio: x = 0.09972 / 0.02002 = 4.98 ≈ 5 (CuSO₄·5H₂O)"
            ],
            modelAnswer: "Mass of CuSO₄ = 21.435 - 18.240 = 3.195 g\nMr(CuSO₄) = 63.5 + 32.1 + (4 × 16.0) = 159.6 g/mol\nn(CuSO₄) = 3.195 / 159.6 = 0.02002 mol\n\nMass of H₂O = 23.230 - 21.435 = 1.795 g\nMr(H₂O) = 18.0 g/mol\nn(H₂O) = 1.795 / 18.0 = 0.09972 mol\n\nRatio x = n(H₂O) / n(CuSO₄) = 0.09972 / 0.02002 = 4.98 ≈ 5.\nFormula = CuSO₄·5H₂O.",
            modelAnswerMn: "m(CuSO₄) = 3.195 г, Mr = 159.6, n = 0.02002 моль.\nm(H₂O) = 1.795 г, Mr = 18.0, n = 0.09972 моль.\nХарьцаа x = 0.09972 / 0.02002 = 4.98 ≈ 5. Томьёо: CuSO₄·5H₂O.",
            examinerNotes: "Round x to the nearest whole integer (x = 5)."
          }
        ]
      }
    ]
  }
];
