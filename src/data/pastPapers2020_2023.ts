import { PastPaper } from "../types";

export const PAPERS_2020_2023: PastPaper[] = [
  // ==========================================
  // PAPER 1: MAY/JUNE 2023 VARIANT 12 (MCQ)
  // ==========================================
  {
    id: "9701_s23_qp_12",
    title: "Cambridge 9701/12 May/June 2023",
    paperType: "Paper 1",
    year: 2023,
    series: "May/June",
    variant: "12",
    paperCode: "9701/12/M/J/23",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 32,
      B: 27,
      C: 22,
      D: 18,
      E: 14,
    },
    description: "Official Cambridge 9701 AS Level MCQ Paper 12 (May/June 2023). Covers VSEPR shapes, Maxwell-Boltzmann distributions, and SN1 vs SN2 rates.",
    descriptionMn: "Cambridge 9701 2023 оны 5/6-р сарын Paper 12 (VSEPR хэлбэрүүд, Максвелл-Больцманы муруй, нуклеофиль халалцах урвалууд).",
    mcqQuestions: [
      {
        id: "s23-12-q1",
        questionNumber: 1,
        chapterNumber: 4,
        chapterTitle: "Chemical Bonding",
        topicCategory: "Physical",
        syllabusRef: "4.2 VSEPR Theory & Bond Angles",
        questionText: "What are the molecular shapes and bond angles of ammonia (NH₃) and the ammonium ion (NH₄⁺)?",
        options: [
          "NH₃: Trigonal pyramidal (107°); NH₄⁺: Tetrahedral (109.5°)",
          "NH₃: Trigonal planar (120°); NH₄⁺: Tetrahedral (109.5°)",
          "NH₃: Tetrahedral (109.5°); NH₄⁺: Square planar (90°)",
          "NH₃: Non-linear (104.5°); NH₄⁺: Trigonal pyramidal (107°)"
        ],
        correctOptionIndex: 0,
        explanationEn: "NH₃ has 3 bonding pairs and 1 lone pair of electrons (LP–BP repulsion reduces angle to 107°). NH₄⁺ has 4 equal bonding pairs with no lone pairs, forming a regular tetrahedral shape (109.5°).",
        explanationMn: "NH₃ нь 3 холбооны хос ба 1 сул хос электронтой тул сул хосын түлхэлтээр өнцөг нь 107° (пирамид) болно. NH₄⁺ нь сул хосгүй, 4 ижил холбоотой тул 109.5° тетраэдр байна.",
        examinerTip: "Each lone pair reduces regular tetrahedral bond angle (109.5°) by approximately 2.5°.",
        difficulty: "Standard"
      },
      {
        id: "s23-12-q2",
        questionNumber: 2,
        chapterNumber: 9,
        chapterTitle: "Rates of Reaction",
        topicCategory: "Physical",
        syllabusRef: "9.2 Maxwell-Boltzmann Distribution",
        questionText: "When the temperature of a reaction mixture increases by 10 °C, the rate of reaction roughly doubles. What is the primary reason for this?",
        options: [
          "The proportion of molecules with energy greater than or equal to activation energy (E ≥ Ea) increases significantly.",
          "The activation energy of the reaction is halved.",
          "The frequency of molecular collisions increases by a factor of two.",
          "The enthalpy change of the reaction becomes much more exothermic."
        ],
        correctOptionIndex: 0,
        explanationEn: "Raising temperature flattens and shifts the Maxwell-Boltzmann curve to the right, dramatically increasing the area under the curve where E ≥ Ea. Collision frequency only increases by ~2%, which is not the main driver.",
        explanationMn: "Температур өсөхөд идэвхжлийн энергиэс их энергитэй (E ≥ Ea) үр дүнтэй мөргөлдөх молекулуудын эзлэх хувь огцом өсдөг.",
        examinerTip: "Never say temperature lowers activation energy (only catalysts lower Ea!).",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 2: OCT/NOV 2023 VARIANT 21 (AS THEORY)
  // ==========================================
  {
    id: "9701_w23_qp_21",
    title: "Cambridge 9701/21 Oct/Nov 2023",
    paperType: "Paper 2",
    year: 2023,
    series: "Oct/Nov",
    variant: "21",
    paperCode: "9701/21/O/N/23",
    timeAllowedMinutes: 75,
    totalMarks: 60,
    gradeThresholds: {
      A: 42,
      B: 35,
      C: 28,
      D: 22,
      E: 16,
    },
    description: "Official Cambridge 9701 AS Level Structured Questions Paper 21. Detailed questions on Combustion Calorimetry, Infrared Spectroscopy, and Carbonyl Reactions.",
    descriptionMn: "Cambridge 9701 2023 оны 10/11-р сарын Paper 21 онолын шалгалт.",
    theoryQuestions: [
      {
        id: "w23-21-q1",
        questionNumber: 1,
        title: "Question 1: Calorimetry & Enthalpy of Combustion of Ethanol",
        chapterNumber: 6,
        chapterTitle: "Chemical Energetics",
        topicCategory: "Physical",
        contextPrompt: "A spirit burner containing ethanol was used to heat 100 cm³ of water in a copper beaker.\nMass of ethanol burned = 0.460 g\nTemperature rise of water = 28.5 °C\nSpecific heat capacity of water = 4.18 J g⁻¹ °C⁻¹",
        contextPromptMn: "Зуллын спиртээр 100 см³ усыг халааж 28.5 °C-аар температурыг нь өсгөжээ. 0.460 г этанол шатсан.",
        totalMarks: 8,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Calculate the heat energy, q, absorbed by the water in kJ.",
            subQuestionTextMn: "Усны шингээсэн дулааны хэмжээ q-г (кЖ) тооцоолно уу.",
            marks: 3,
            markScheme: [
              "[1] m = 100 g (density of water 1.0 g/cm³)",
              "[1] q = mcΔT = 100 × 4.18 × 28.5 = 11913 J",
              "[1] q in kJ = 11.91 kJ (accept 11.9 kJ)"
            ],
            modelAnswer: "q = mcΔT = 100 g × 4.18 J g⁻¹ °C⁻¹ × 28.5 °C = 11,913 J = 11.9 kJ.",
            modelAnswerMn: "q = 100 × 4.18 × 28.5 = 11913 Ж = 11.9 кЖ.",
            examinerNotes: "Mass m must be the mass of water heated (100 g), NOT the mass of ethanol burned."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Calculate the standard enthalpy change of combustion of ethanol, ΔH°c, in kJ mol⁻¹ to 3 significant figures. Include the correct sign.",
            subQuestionTextMn: "Этанолын шатахын стандарт энтальпи ΔH°c-ийг (кЖ/моль) тэмдэгтэй нь 3 оронгийн нарийвчлалтай тооцоол.",
            marks: 3,
            markScheme: [
              "[1] Moles of ethanol = 0.460 / 46.0 = 0.0100 mol",
              "[1] ΔH°c = -q / n = -11.913 / 0.0100 = -1191 kJ mol⁻¹",
              "[1] Negative sign included for exothermic combustion"
            ],
            modelAnswer: "n(ethanol) = 0.460 g / 46.0 g mol⁻¹ = 0.0100 mol\nΔH°c = -11.913 kJ / 0.0100 mol = -1190 kJ mol⁻¹.",
            modelAnswerMn: "n(этанол) = 0.460 / 46.0 = 0.0100 моль.\nΔH°c = -11.913 / 0.0100 = -1190 кЖ/моль (экзотерм тул сөрөг тэмдэгтэй).",
            examinerNotes: "Negative sign is mandatory for combustion reactions."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 4: MAY/JUNE 2023 VARIANT 42 (A LEVEL THEORY)
  // ==========================================
  {
    id: "9701_s23_qp_42",
    title: "Cambridge 9701/42 May/June 2023",
    paperType: "Paper 4",
    year: 2023,
    series: "May/June",
    variant: "42",
    paperCode: "9701/42/M/J/23",
    timeAllowedMinutes: 120,
    totalMarks: 100,
    gradeThresholds: {
      A: 67,
      B: 57,
      C: 47,
      D: 38,
      E: 29,
    },
    description: "Official Cambridge 9701 A Level Structured Questions Paper 42 (May/June 2023). Covers Arrhenius Activation Energy, Transition Metal Complexes, and Benzene Derivatives.",
    descriptionMn: "Cambridge 9701 2023 оны 5/6-р сарын Paper 42 A Level онолын шалгалт.",
    theoryQuestions: [
      {
        id: "s23-42-q1",
        questionNumber: 1,
        title: "Question 1: Arrhenius Equation & Activation Energy",
        chapterNumber: 22,
        chapterTitle: "Reaction Kinetics",
        topicCategory: "Physical",
        contextPrompt: "The variation of the rate constant, k, with absolute temperature, T, obeys the Arrhenius equation:\nln(k) = - (Ea / R) × (1 / T) + ln(A)\nA plot of ln(k) on the y-axis against 1/T on the x-axis yields a straight line with a gradient of -1.20 × 10⁴ K.",
        contextPromptMn: "Аррениусын тэгшитгэл: ln(k) ба 1/T хоорондын шулууны налалт нь -1.20 × 10⁴ К гарчээ.",
        totalMarks: 8,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Calculate the activation energy, Ea, for this reaction in kJ mol⁻¹. (R = 8.31 J K⁻¹ mol⁻¹)",
            subQuestionTextMn: "Урвалын идэвхжлийн энерги Ea-г (кЖ/моль) тооцоолно уу.",
            marks: 4,
            markScheme: [
              "[1] Gradient = -Ea / R",
              "[1] Ea = - (Gradient × R) = - (-1.20 × 10⁴ × 8.31)",
              "[1] Ea = 99720 J mol⁻¹",
              "[1] Ea in kJ mol⁻¹ = +99.7 kJ mol⁻¹"
            ],
            modelAnswer: "Gradient = -Ea / R  =>  Ea = -Gradient × R = -(-1.20 × 10⁴ K) × 8.31 J K⁻¹ mol⁻¹ = 99,720 J mol⁻¹ = +99.7 kJ mol⁻¹.",
            modelAnswerMn: "Налалт = -Ea / R  =>  Ea = 1.20 × 10⁴ × 8.31 = 99720 Ж/моль = +99.7 кЖ/моль.",
            examinerNotes: "Activation energy must always be positive (endothermic energy barrier)."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 1: FEB/MARCH 2022 VARIANT 12 (SPRING 2022 "ХАВАР")
  // ==========================================
  {
    id: "9701_m22_qp_12",
    title: "Cambridge 9701/12 Feb/March 2022 (Spring)",
    paperType: "Paper 1",
    year: 2022,
    series: "Feb/March",
    variant: "12",
    paperCode: "9701/12/F/M/22",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 31,
      B: 26,
      C: 22,
      D: 18,
      E: 14,
    },
    description: "Official Cambridge 9701 AS Level MCQ Paper 12 (Feb/March 2022 Spring Series). Highlights Disproportionation, VSEPR shapes, and Mass Spectrometry.",
    descriptionMn: "Cambridge 9701 2022 оны Хаврын Paper 12 (Feb/March 2022, Олон сонголттой сорил).",
    mcqQuestions: [
      {
        id: "m22-12-q1",
        questionNumber: 1,
        chapterNumber: 7,
        chapterTitle: "Redox Processes",
        topicCategory: "Physical",
        syllabusRef: "7.3 Disproportionation Reactions",
        questionText: "Chlorine gas reacts with cold dilute aqueous sodium hydroxide (15 °C). What are the oxidation states of chlorine in the products?",
        options: [
          "-1 and +1",
          "-1 and +5",
          "0 and -1",
          "-1 and +3"
        ],
        correctOptionIndex: 0,
        explanationEn: "In cold dilute alkali: Cl₂ + 2NaOH → NaCl (oxidation state -1) + NaClO (oxidation state +1) + H₂O. Chlorine simultaneously undergoes reduction (0 to -1) and oxidation (0 to +1), which is a disproportionation reaction.",
        explanationMn: "Хүйтэн шингэрүүлсэн шүлтэд Cl₂ + 2NaOH → NaCl (-1) + NaClO (+1) + H₂O урвалаар хлорын исэлдэхүйн зэрэг -1 ба +1 болдог (диспропорционаци).",
        examinerTip: "With hot concentrated NaOH (70 °C), chlorate(V) forms: 3Cl₂ + 6NaOH → 5NaCl (-1) + NaClO₃ (+5) + 3H₂O.",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 3: MAY/JUNE 2022 VARIANT 33 (PRACTICAL)
  // ==========================================
  {
    id: "9701_s22_qp_33",
    title: "Cambridge 9701/33 May/June 2022 (Practical)",
    paperType: "Paper 3",
    year: 2022,
    series: "May/June",
    variant: "33",
    paperCode: "9701/33/M/J/22",
    timeAllowedMinutes: 120,
    totalMarks: 40,
    gradeThresholds: {
      A: 30,
      B: 26,
      C: 22,
      D: 18,
      E: 14,
    },
    description: "Official Cambridge 9701 Practical Skills Paper 33. Involves standard carbonate titration, thermal mass loss analysis, and qualitative tests.",
    descriptionMn: "Cambridge 9701 2022 оны 5/6-р сарын Практик шалгалт Paper 33 (Карбонатын титрлэлт ба чанарын сорил).",
    practicalMaterials: {
      apparatusList: [
        "50.0 cm³ burette (±0.05 cm³)",
        "25.0 cm³ pipette",
        "Conical flasks",
        "Bunsen burner and crucible"
      ],
      reagentsList: [
        "FA 1: Standard HCl(aq) 0.100 mol dm⁻³",
        "FA 2: Hydrated sodium carbonate Na₂CO₃·xH₂O solution",
        "Methyl orange indicator"
      ],
      qualitativeNotesIncluded: true
    },
    theoryQuestions: [
      {
        id: "s22-33-q1",
        questionNumber: 1,
        title: "Question 1: Titration of Carbonate with Standard Acid",
        chapterNumber: 31,
        chapterTitle: "Paper 3 Practical Skills",
        topicCategory: "Practical",
        contextPrompt: "Na₂CO₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)\n25.0 cm³ of FA 2 was neutralised by a mean titre of 23.80 cm³ of 0.100 mol dm⁻³ HCl (FA 1) using methyl orange.",
        contextPromptMn: "25.0 см³ Na₂CO₃ уусмалыг 0.100 моль/дм³ HCl-ээр титрлэхэд дундаж титр 23.80 см³ гарчээ.",
        totalMarks: 10,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Calculate the concentration of Na₂CO₃ in FA 2 in mol dm⁻³.",
            subQuestionTextMn: "FA 2 уусмалын Na₂CO₃-ийн молийн концентрацийг ол.",
            marks: 4,
            markScheme: [
              "[1] n(HCl) = (0.100 × 23.80) / 1000 = 2.38 × 10⁻³ mol",
              "[1] 2:1 stoichiometry: n(Na₂CO₃) = n(HCl) / 2 = 1.19 × 10⁻³ mol",
              "[1] Concentration = 1.19 × 10⁻³ / 0.0250 = 0.0476 mol dm⁻³",
              "[1] 3 significant figures"
            ],
            modelAnswer: "n(HCl) = 0.100 × (23.80 / 1000) = 2.38 × 10⁻³ mol.\nn(Na₂CO₃) = 2.38 × 10⁻³ / 2 = 1.19 × 10⁻³ mol.\nConcentration = 1.19 × 10⁻³ mol / 0.0250 dm³ = 0.0476 mol dm⁻³.",
            modelAnswerMn: "n(HCl) = 2.38 × 10⁻³ моль.\nn(Na₂CO₃) = 1.19 × 10⁻³ моль.\nКонцентраци = 0.0476 моль/дм³.",
            examinerNotes: "Remember the 1:2 stoichiometric ratio between carbonate and acid."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 5: MAY/JUNE 2022 VARIANT 52 (PLANNING & ANALYSIS)
  // ==========================================
  {
    id: "9701_s22_qp_52",
    title: "Cambridge 9701/52 May/June 2022 (Planning)",
    paperType: "Paper 5",
    year: 2022,
    series: "May/June",
    variant: "52",
    paperCode: "9701/52/M/J/22",
    timeAllowedMinutes: 75,
    totalMarks: 30,
    gradeThresholds: {
      A: 22,
      B: 19,
      C: 16,
      D: 13,
      E: 10,
    },
    description: "Official Cambridge 9701 Paper 52 Planning & Evaluation. Investigating the enthalpy of neutralisation with temperature cooling curves.",
    descriptionMn: "Cambridge 9701 2022 оны 5/6-р сарын Paper 52 (Төлөвлөлт, хөргөлтийн муруй ба саармагжих дулаан).",
    theoryQuestions: [
      {
        id: "s22-52-q1",
        questionNumber: 1,
        title: "Question 1: Thermometric Titration Cooling Curve",
        chapterNumber: 32,
        chapterTitle: "Paper 5 Planning & Analysis",
        topicCategory: "Practical",
        contextPrompt: "When measuring the temperature change for an exothermic neutralisation reaction in a polystyrene cup, heat loss occurs during the experiment.",
        contextPromptMn: "Полистирол аяганд саармагжих урвалын дулааныг хэмжихэд дулаан алдагдал гардаг.",
        totalMarks: 8,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Explain how a temperature-time cooling curve extrapolation allows the theoretical maximum temperature rise (ΔT) to be determined accurately.",
            subQuestionTextMn: "Температур-хугацааны графикийн хөргөлтийн шулууныг эхлэлийн цэг рүү сунгах (extrapolate) аргаар хамгийн их бодит температурын өсөлтийг хэрхэн олдогийг тайлбарла.",
            marks: 4,
            markScheme: [
              "[1] Plot temperature against time before mixing (constant baseline) and after mixing.",
              "[1] The temperature rises to a peak and then drops linearly as heat is lost to surroundings.",
              "[1] Extrapolate the cooling line backwards to the exact time of mixing.",
              "[1] Theoretical ΔT is the vertical distance between extrapolated cooling line and initial temperature line."
            ],
            modelAnswer: "Record temperature at regular 30-second intervals before and after mixing. As the mixture cools post-reaction, plot the linear cooling trend. Extrapolating this cooling line backwards to the time of mixing accounts for heat lost to the surroundings during mixing, yielding the accurate maximum temperature rise ΔT.",
            modelAnswerMn: "Холихоос өмнөх ба дараах температурыг 30 секунд тутам хэмжинэ. Урвал явагдаж дууссаны дараах хөргөлтийн шулууныг хольсон агшин (t_mix) рүү арагш сунган огтлолцуулснаар орчинд алдагдсан дулааныг нөхөж бодит хамгийн их температурын өсөлт ΔT-г нарийн олдог.",
            examinerNotes: "Extrapolation must be made specifically to the exact time of mixing."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 2: OCT/NOV 2021 VARIANT 22 (AS THEORY)
  // ==========================================
  {
    id: "9701_w21_qp_22",
    title: "Cambridge 9701/22 Oct/Nov 2021",
    paperType: "Paper 2",
    year: 2021,
    series: "Oct/Nov",
    variant: "22",
    paperCode: "9701/22/O/N/21",
    timeAllowedMinutes: 75,
    totalMarks: 60,
    gradeThresholds: {
      A: 40,
      B: 33,
      C: 27,
      D: 21,
      E: 15,
    },
    description: "Official Cambridge 9701 AS Level Theory Paper 22 (Oct/Nov 2021). Thermal stability of Group 2 nitrates and Markovnikov electrophilic addition.",
    descriptionMn: "Cambridge 9701 2021 оны 10/11-р сарын Paper 22 онолын шалгалт (2-р бүлгийн нитратуудын дулааны задрал ба Марковниковын дүрэм).",
    theoryQuestions: [
      {
        id: "w21-22-q1",
        questionNumber: 1,
        title: "Question 1: Group 2 Nitrate Thermal Decomposition",
        chapterNumber: 11,
        chapterTitle: "Group 2",
        topicCategory: "Inorganic",
        contextPrompt: "All Group 2 nitrates decompose on heating to form the metal oxide, nitrogen dioxide (NO₂), and oxygen (O₂).\n2M(NO₃)₂(s) → 2MO(s) + 4NO₂(g) + O₂(g)",
        contextPromptMn: "2-р бүлгийн бүх нитратууд халаахад оксид, NO₂ ба хүчилтөрөгч болон задардаг.",
        totalMarks: 8,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Explain the trend in thermal stability of Group 2 nitrates down the group from Magnesium to Barium.",
            subQuestionTextMn: "Mg-аас Ba руу 2-р бүлгийн нитратуудын дулааны тогтворжилт ихэсдэг шалтгааныг ионы радиус ба туйлшруулах чадвараар тайлбарлана уу.",
            marks: 4,
            markScheme: [
              "[1] Thermal stability increases down the group (decomposition temperature increases).",
              "[1] Down the group, cationic radius increases (Mg²⁺ is smallest, Ba²⁺ is largest).",
              "[1] Charge density of the 2+ cation decreases.",
              "[1] Larger cations exert less polarising power on the large nitrate anion (NO₃⁻), weakening the N–O bond less, requiring more thermal energy to break."
            ],
            modelAnswer: "Thermal stability increases down Group 2. As you descend the group, the ionic radius of the M²⁺ cation increases while the charge remains +2, so charge density decreases. The larger cation polarises (distorts) the electron cloud of the nitrate anion less, so the N–O covalent bonds are weakened less and higher temperatures are required for decomposition.",
            modelAnswerMn: "Бүлгийн дагуу доошлоход катионы радиус өсөж, цэнэгийн нягт нь буурдаг. Иймд катионы нитрат ионыг туйлшруулах (гажилтад оруулах) чадвар буурч, N–O холбоо бага сулрах тул задралын температур өснө.",
            examinerNotes: "State clearly that it is the NITRATE ANION electron cloud that is polarised, not the cation."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 4: MAY/JUNE 2021 VARIANT 42 (A LEVEL THEORY)
  // ==========================================
  {
    id: "9701_s21_qp_42",
    title: "Cambridge 9701/42 May/June 2021",
    paperType: "Paper 4",
    year: 2021,
    series: "May/June",
    variant: "42",
    paperCode: "9701/42/M/J/21",
    timeAllowedMinutes: 120,
    totalMarks: 100,
    gradeThresholds: {
      A: 65,
      B: 55,
      C: 45,
      D: 36,
      E: 27,
    },
    description: "Official Cambridge 9701 A Level Theory Paper 42 (May/June 2021). Features Quantitative Electrolysis (Faraday) and Partition Coefficient Kpc.",
    descriptionMn: "Cambridge 9701 2021 оны 5/6-р сарын Paper 42 A Level онол (Фарадейн хууль ба Түгээлтийн тогтмол Kpc).",
    theoryQuestions: [
      {
        id: "s21-42-q1",
        questionNumber: 1,
        title: "Question 1: Faraday's Laws & Electrolytic Refining",
        chapterNumber: 20,
        chapterTitle: "Electrochemistry",
        topicCategory: "Physical",
        contextPrompt: "A steady electric current of 2.50 A was passed through an aqueous copper(II) sulfate solution for 40.0 minutes.\nCu²⁺(aq) + 2e⁻ → Cu(s)\n(Faraday constant F = 96,500 C mol⁻¹; Ar(Cu) = 63.5)",
        contextPromptMn: "2.50 А гүйдлийг CuSO₄ уусмалаар 40.0 минут нэвтрүүлжээ.",
        totalMarks: 8,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Calculate the mass of copper metal deposited at the cathode in grams.",
            subQuestionTextMn: "Катод дээр ялгарах зэсийн массыг (грамм) тооцоолно уу.",
            marks: 4,
            markScheme: [
              "[1] Time in seconds = 40.0 × 60 = 2400 s",
              "[1] Q = I × t = 2.50 × 2400 = 6000 C",
              "[1] Moles of electrons = 6000 / 96500 = 0.06218 mol",
              "[1] Mass of Cu = (0.06218 / 2) × 63.5 = 1.97 g"
            ],
            modelAnswer: "t = 40.0 × 60 = 2400 s.\nQ = I × t = 2.50 A × 2400 s = 6000 C.\nMoles of electrons = 6000 / 96,500 = 0.06218 mol e⁻.\nBecause Cu²⁺ + 2e⁻ → Cu, moles of Cu = 0.06218 / 2 = 0.03109 mol.\nMass of Cu = 0.03109 mol × 63.5 g mol⁻¹ = 1.97 g.",
            modelAnswerMn: "t = 2400 с.\nQ = 2.50 × 2400 = 6000 Кл.\nn(e⁻) = 6000 / 96500 = 0.06218 моль.\nn(Cu) = 0.06218 / 2 = 0.03109 моль.\nm(Cu) = 0.03109 × 63.5 = 1.97 г.",
            examinerNotes: "Remember that deposition of 1 mole of Cu²⁺ requires 2 moles of electrons (2F)."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 1: FEB/MARCH 2020 VARIANT 12 (SPRING 2020 "ХАВАР")
  // ==========================================
  {
    id: "9701_m20_qp_12",
    title: "Cambridge 9701/12 Feb/March 2020 (Spring)",
    paperType: "Paper 1",
    year: 2020,
    series: "Feb/March",
    variant: "12",
    paperCode: "9701/12/F/M/20",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 30,
      B: 25,
      C: 21,
      D: 17,
      E: 13,
    },
    description: "Official Cambridge 9701 AS Level MCQ Paper 12 (Feb/March 2020 Spring Series). Highlights Ideal Gas calculations, Periodicity trends, and Halogenoalkanes.",
    descriptionMn: "Cambridge 9701 2020 оны Хаврын Paper 12 (Feb/March 2020, Олон сонголттой сорил).",
    mcqQuestions: [
      {
        id: "m20-12-q1",
        questionNumber: 1,
        chapterNumber: 5,
        chapterTitle: "States of Matter",
        topicCategory: "Physical",
        syllabusRef: "5.1 Ideal Gas Equation pV = nRT",
        questionText: "A 0.170 g sample of a volatile organic liquid produces 65.0 cm³ of vapor when completely vaporised at 100 °C and 101 kPa. What is its relative molecular mass, Mr? (R = 8.31 J K⁻¹ mol⁻¹)",
        options: [
          "80.1",
          "65.4",
          "92.3",
          "46.0"
        ],
        correctOptionIndex: 0,
        explanationEn: "Using Mr = (mRT) / (pV): p = 101 × 10³ Pa; V = 65.0 × 10⁻⁶ m³; T = 100 + 273 = 373 K. Mr = (0.170 × 8.31 × 373) / (101 × 10³ × 65.0 × 10⁻⁶) = 526.98 / 6.565 = 80.3 ≈ 80.1.",
        explanationMn: "Mr = (mRT) / (pV). V = 65.0 × 10⁻⁶ m³, p = 101 000 Па, T = 373 К. Mr = 80.1 г/моль.",
        examinerTip: "Strict unit conversions: cm³ must be multiplied by 10⁻⁶ to convert to m³; kPa must be multiplied by 10³ to convert to Pa.",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 2: MAY/JUNE 2020 VARIANT 22 (AS THEORY)
  // ==========================================
  {
    id: "9701_s20_qp_22",
    title: "Cambridge 9701/22 May/June 2020",
    paperType: "Paper 2",
    year: 2020,
    series: "May/June",
    variant: "22",
    paperCode: "9701/22/M/J/20",
    timeAllowedMinutes: 75,
    totalMarks: 60,
    gradeThresholds: {
      A: 39,
      B: 32,
      C: 26,
      D: 20,
      E: 14,
    },
    description: "Official Cambridge 9701 AS Level Theory Paper 22 (May/June 2020). Tests Period 3 chloride behavior and alcohol oxidation pathways.",
    descriptionMn: "Cambridge 9701 2020 оны 5/6-р сарын Paper 22 онолын шалгалт.",
    theoryQuestions: [
      {
        id: "s20-22-q1",
        questionNumber: 1,
        title: "Question 1: Oxidation of Primary vs Secondary Alcohols",
        chapterNumber: 17,
        chapterTitle: "Alcohols & Esters",
        topicCategory: "Organic",
        contextPrompt: "Propan-1-ol and propan-2-ol are structural isomers.\nBoth compounds react when heated with acidified potassium dichromate(VI), K₂Cr₂O₇/H₂SO₄.",
        contextPromptMn: "Пропан-1-ол ба пропан-2-ол нь хүчиллэгжүүлсэн K₂Cr₂O₇-оор исэлддэг бүтцийн изомерууд юм.",
        totalMarks: 8,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "State the color change observed during these oxidation reactions.",
            subQuestionTextMn: "Исэлдэх урвалын үед ажиглагдах өнгөний хувирлыг бичнэ үү.",
            marks: 1,
            markScheme: [
              "[1] Orange to green (Cr₂O₇²⁻ reduced to Cr³⁺)"
            ],
            modelAnswer: "Orange to green.",
            modelAnswerMn: "Улбар шараас ногоон болж өөрчлөгдөнө.",
            examinerNotes: "Be specific: orange to green, not yellow."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Explain how you would obtain a good yield of propanal from propan-1-ol rather than propanoic acid, stating the specific apparatus used.",
            subQuestionTextMn: "Пропан-1-олыг исэлдүүлж пропаны хүчил бус пропаналь альдегид ялган авахын тулд ямар төхөөрөмж хэрэглэхийг тайлбарла.",
            marks: 3,
            markScheme: [
              "[1] Use distillation apparatus (distillation with addition).",
              "[1] Distil off the propanal immediately as it forms.",
              "[1] Propanal has a lower boiling point than propan-1-ol (no hydrogen bonding between aldehyde molecules) and vaporises, preventing further oxidation to propanoic acid."
            ],
            modelAnswer: "Use distillation apparatus with a delivery tube and condenser. Warm the mixture and distil off the propanal immediately as soon as it is formed. Because propanal lacks hydrogen bonding, its boiling point is lower than that of propan-1-ol, allowing it to vaporise and escape before undergoing further oxidation to propanoic acid.",
            modelAnswerMn: "Нэрлэгийн төхөөрөмж ашиглана. Пропаналь үүсмэгц нэрж ялгаж авна. Пропаналь нь молекул хоорондын устөрөгчийн холбоогүй тул буцлах температур бага бөгөөд ууршин зайлуулагдсанаар цааш хүчил болж исэлдэхээс хамгаалагдана.",
            examinerNotes: "Key distinction: Distillation yields aldehyde; Reflux yields carboxylic acid."
          }
        ]
      }
    ]
  }
];
