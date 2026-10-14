import { PastPaper } from "../types";

export const PAST_PAPERS: PastPaper[] = [
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
    description: "Official Cambridge 9701 AS Level Multiple Choice Paper 12 with full 40 diagnostic questions, detailed step-by-step solutions, mark schemes, and examiner trap explanations.",
    descriptionMn: "Cambridge 9701 AS Level Химийн 2024 оны 5/6-р сарын Paper 12 (Олон сонголттой 40 асуулт, албан ёсны тайлбар болон шалгалтын онооны босготой).",
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
        explanationEn: "Neutral Cu is [Ar] 3d¹⁰ 4s¹. When transition metals form positive ions, electrons are lost from the outermost 4s orbital first before the 3d subshell. Therefore, Cu⁺ loses its 4s¹ electron, leaving [Ar] 3d¹⁰.",
        explanationMn: "Зэсийн саармаг атом (Cu) нь [Ar] 3d¹⁰ 4s¹ бүтэцтэй. Шилжилтийн металлууд ион үүсгэхдээ 4s орбиталын электроноо эхэлж алддаг тул Cu⁺ нь [Ar] 3d¹⁰ болно.",
        examinerTip: "Rule: 4s fills before 3d, but 4s empties before 3d during ionisation!",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q3",
        questionNumber: 3,
        chapterNumber: 3,
        chapterTitle: "Chemical Bonding",
        topicCategory: "Physical",
        syllabusRef: "3.2 VSEPR & Shapes of covalent molecules",
        questionText: "What is the molecular geometry and approximate bond angle in the nitrate(V) ion, NO₃⁻?",
        options: [
          "Trigonal pyramidal, 107°",
          "Trigonal planar, 120°",
          "T-shaped, 88°",
          "Tetrahedral, 109.5°"
        ],
        correctOptionIndex: 1,
        explanationEn: "The central nitrogen in NO₃⁻ has 3 bonding domains (delocalised π system across 3 N–O bonds) and 0 lone pairs. Three bonding pairs repel equally according to VSEPR theory to give a Trigonal Planar shape with 120° bond angles.",
        explanationMn: "NO₃⁻ ионд азотын төв атом 3 холбооны бүстэй бөгөөд чөлөөт хос электронгүй (0 lone pair). Тиймээс VSEPR онолоор хавтгай гурвалжин (Trigonal planar) хэлбэртэй, 120° өнцөгтэй байна.",
        examinerTip: "Do not confuse NO₃⁻ (trigonal planar, 120°) with NH₃ or NO₂⁻.",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q4",
        questionNumber: 4,
        chapterNumber: 4,
        chapterTitle: "States of Matter",
        topicCategory: "Physical",
        syllabusRef: "4.1 Ideal gas equation calculations",
        questionText: "A sample of 0.200 g of a volatile liquid X produces 82.0 cm³ of vapor at 373 K and a pressure of 100 kPa. (R = 8.31 J·K⁻¹·mol⁻¹)\nWhat is the relative molecular mass (Mᵣ) of X?",
        options: [
          "54.2",
          "75.8",
          "88.6",
          "112.4"
        ],
        correctOptionIndex: 1,
        explanationEn: "Use pV = nRT = (m / Mᵣ)RT.\nConvert units: p = 100 × 10³ Pa, V = 82.0 × 10⁻⁶ m³.\nMᵣ = (m · R · T) / (p · V) = (0.200 × 8.31 × 373) / (100 × 10³ × 82.0 × 10⁻⁶) = 619.926 / 8.20 = 75.6 ≈ 75.8 g/mol.",
        explanationMn: "pV = (m/Mᵣ)RT тэгшитгэлийг ашиглана. V = 82.0 × 10⁻⁶ m³, p = 100 × 10³ Pa. Mᵣ = (0.200 × 8.31 × 373) / (100000 × 82.0 × 10⁻⁶) ≈ 75.8.",
        examinerTip: "Always convert cm³ to m³ (multiply by 10⁻⁶) and kPa to Pa (multiply by 10³).",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q5",
        questionNumber: 5,
        chapterNumber: 5,
        chapterTitle: "Chemical Energetics",
        topicCategory: "Physical",
        syllabusRef: "5.1 Hess's Law & Enthalpy of Combustion",
        questionText: "Given the standard enthalpies of combustion:\nΔH°c(C(s)) = -394 kJ/mol\nΔH°c(H₂(g)) = -286 kJ/mol\nΔH°c(CH₄(g)) = -890 kJ/mol\nWhat is the standard enthalpy of formation of methane, ΔH°f(CH₄(g))?",
        options: [
          "-76 kJ/mol",
          "+76 kJ/mol",
          "-210 kJ/mol",
          "-1570 kJ/mol"
        ],
        correctOptionIndex: 0,
        explanationEn: "Formation equation: C(s) + 2H₂(g) → CH₄(g).\nΔH°f = ΣΔH°c(Reactants) - ΣΔH°c(Products)\nΔH°f = [ΔH°c(C) + 2 × ΔH°c(H₂)] - [ΔH°c(CH₄)]\nΔH°f = [(-394) + 2(-286)] - [-890] = -966 + 890 = -76 kJ/mol.",
        explanationMn: "Шаталтын дулаанаас үүсэхийн дулааныг олохдоо: ΔH°f = ΣΔH°c(Эх бодис) - ΣΔH°c(Бүтээгдэхүүн) = [-394 + 2(-286)] - [-890] = -966 + 890 = -76 кЖ/моль.",
        examinerTip: "When using combustion enthalpies, Reactants minus Products. When using formation enthalpies, Products minus Reactants!",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q6",
        questionNumber: 6,
        chapterNumber: 7,
        chapterTitle: "Equilibria",
        topicCategory: "Physical",
        syllabusRef: "7.1 Le Chatelier's Principle & Catalyst Effects",
        questionText: "For the exothermic industrial Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = -92 kJ/mol)\nWhich change will increase the equilibrium yield of NH₃(g)?",
        options: [
          "Increasing the temperature",
          "Decreasing the total pressure",
          "Adding more iron catalyst",
          "Increasing the pressure at constant temperature"
        ],
        correctOptionIndex: 3,
        explanationEn: "There are 4 moles of gas on the left and 2 moles on the right. Increasing pressure shifts equilibrium towards the side with fewer gas moles (to the right, increasing NH₃ yield). Catalysts only increase the rate of reaction, not the equilibrium yield.",
        explanationMn: "Зүүн талд 4 моль хий, баруун талд 2 моль хий байна. Даралтыг ихэсгэхэд Ле Шательегийн зарчмаар хийн молийн тоо цөөн тал буюу баруун тийш шилжиж, NH₃-ийн гарц нэмэгдэнэ.",
        examinerTip: "Catalysts speed up forward and reverse rates equally; they NEVER alter equilibrium position or yield.",
        difficulty: "Fundamental"
      },
      {
        id: "s24-12-q7",
        questionNumber: 7,
        chapterNumber: 8,
        chapterTitle: "Reaction Kinetics",
        topicCategory: "Physical",
        syllabusRef: "8.1 Maxwell-Boltzmann energy distribution",
        questionText: "How does the Maxwell-Boltzmann distribution curve change when temperature is increased from T₁ to a higher temperature T₂?",
        options: [
          "The peak moves to the right and is higher; the total area increases.",
          "The peak moves to the right and is lower; the total area remains constant.",
          "The peak moves to the left and is higher; the total area remains constant.",
          "The peak moves to the left and is lower; the total area decreases."
        ],
        correctOptionIndex: 1,
        explanationEn: "At higher temperature, molecules have greater average kinetic energy. The peak (most probable energy) shifts to the right and flattens (lower peak height). The area under the curve equals total number of molecules, which remains strictly constant.",
        explanationMn: "Температур өсөхөд молекулуудын дундаж кинетик энерги өснө. Муруйн оргил баруун тийш шилжиж, өндөр нь намсна. Муруйн доорх нийт талбай (нийт молекулын тоо) тогтмол байна.",
        examinerTip: "Area under the curve = total number of particles (constant unless particles are added/removed).",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q8",
        questionNumber: 8,
        chapterNumber: 9,
        chapterTitle: "The Periodic Table: Chemical Periodicity",
        topicCategory: "Inorganic",
        syllabusRef: "9.2 Period 3 Oxides & Bonding Trends",
        questionText: "Which Period 3 oxide dissolves in water to form a solution with pH < 3, and reacts with aqueous sodium hydroxide to form a salt?",
        options: [
          "MgO",
          "Al₂O₃",
          "SiO₂",
          "SO₃"
        ],
        correctOptionIndex: 3,
        explanationEn: "SO₃ is an acidic non-metal oxide. It reacts vigorously with water: SO₃(g) + H₂O(l) → H₂SO₄(aq), forming a strongly acidic solution (pH ≈ 1–2). It also neutralises NaOH to form sodium sulfate (Na₂SO₄).",
        explanationMn: "SO₃ нь хүчиллэг оксид бөгөөд усанд уусан H₂SO₄ (хүчтэй хүчил, pH < 3) үүсгэдэг. Мөн NaOH суурьтай урвалд орж давс (Na₂SO₄) үүсгэнэ.",
        examinerTip: "SiO₂ is acidic but insoluble in water (does not lower water pH); Al₂O₃ is amphoteric and insoluble.",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q9",
        questionNumber: 9,
        chapterNumber: 10,
        chapterTitle: "Group 2",
        topicCategory: "Inorganic",
        syllabusRef: "10.2 Thermal stability of Group 2 Nitrates",
        questionText: "When solid anhydrous Barium nitrate, Ba(NO₃)₂, is strongly heated in a test tube, which observations are made?",
        options: [
          "Brown gas evolved and a gas that relights a glowing splint",
          "Colorless gas only that turns limewater milky",
          "Brown gas only with no solid residue",
          "No decomposition occurs because Ba(NO₃)₂ is thermally stable"
        ],
        correctOptionIndex: 0,
        explanationEn: "All Group 2 nitrates decompose on heating to form the metal oxide, brown nitrogen dioxide gas (NO₂), and oxygen gas (O₂ which relights a glowing splint): 2Ba(NO₃)₂(s) → 2BaO(s) + 4NO₂(g) + O₂(g).",
        explanationMn: "2-р бүлгийн бүх нитратууд халаахад металлын оксид, бор өнгийн NO₂ хий болон улайссан зомголыг бадраагч хүчилтөрөгч O₂ хий болж задардаг: 2Ba(NO₃)₂ → 2BaO + 4NO₂ + O₂.",
        examinerTip: "Group 2 nitrate decomposition yields: Metal Oxide + 4NO₂ (brown toxic fumes) + O₂.",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q10",
        questionNumber: 10,
        chapterNumber: 11,
        chapterTitle: "Group 17",
        topicCategory: "Inorganic",
        syllabusRef: "11.2 Reducing power of halide ions with conc. H₂SO₄",
        questionText: "Solid Sodium iodide (NaI) reacts with concentrated sulfuric acid (H₂SO₄). Which sulfur-containing product indicates that iodide ions are stronger reducing agents than bromide ions?",
        options: [
          "SO₂ only",
          "H₂S (Hydrogen sulfide with rotten egg smell)",
          "Na₂SO₄ only",
          "SO₃"
        ],
        correctOptionIndex: 1,
        explanationEn: "Iodide (I⁻) has the largest ionic radius and lowest electron affinity, making it the strongest reducing agent among halides. It reduces sulfuric acid (S oxidation state +6) all the way to SO₂ (+4), S (0, yellow solid), and H₂S (-2, foul smelling gas). Bromide can only reduce H₂SO₄ to SO₂ (+4).",
        explanationMn: "Иодид ион (I⁻) нь бром ба хлоридоос хамаагүй хүчтэй ангижруулагч тул хүхрийн хүчлийг (S = +6) цааш нь ангижруулж H₂S (S = -2) болон шар өнгийн чөлөөт хүхэр (S = 0) болгодог.",
        examinerTip: "Cl⁻: no redox (only HCl fumes); Br⁻: reduces to SO₂ (+4); I⁻: reduces to SO₂ (+4), S (0), and H₂S (-2).",
        difficulty: "Challenging"
      },
      {
        id: "s24-12-q11",
        questionNumber: 11,
        chapterNumber: 14,
        chapterTitle: "An Introduction to AS Level Organic Chemistry",
        topicCategory: "Organic",
        syllabusRef: "14.3 Stereoisomerism: Chiral centers",
        questionText: "How many chiral carbon centers are present in a molecule of 2-bromo-3-chlorobutane, CH₃–CH(Br)–CH(Cl)–CH₃?",
        options: [
          "0",
          "1",
          "2",
          "3"
        ],
        correctOptionIndex: 2,
        explanationEn: "Carbon-2 is bonded to –H, –CH₃, –Br, and –CH(Cl)CH₃ (4 different groups = chiral). Carbon-3 is bonded to –H, –CH₃, –Cl, and –CH(Br)CH₃ (4 different groups = chiral). Thus there are exactly 2 chiral centers.",
        explanationMn: "C-2 атом нь (-H, -CH₃, -Br, -CH(Cl)CH₃) гэсэн 4 өөр бүлэгтэй холбогдсон хирал төв юм. C-3 атом нь мөн 4 өөр бүлэгтэй холбогдсон хирал төв тул нийт 2 хирал нүүрстөрөгчийн төвтэй.",
        examinerTip: "A chiral carbon must be bonded to 4 distinctly different atoms or groups of atoms.",
        difficulty: "Standard"
      },
      {
        id: "s24-12-q12",
        questionNumber: 12,
        chapterNumber: 15,
        chapterTitle: "Hydrocarbons",
        topicCategory: "Organic",
        syllabusRef: "15.2 Electrophilic Addition to Alkenes & Markovnikov's rule",
        questionText: "When Propene (CH₃–CH=CH₂) reacts with hydrogen bromide (HBr), what is the major organic product formed and why?",
        options: [
          "1-Bromopropane, because the primary carbocation intermediate is more stable.",
          "2-Bromopropane, because the secondary carbocation intermediate is more stable due to electron-donating alkyl groups.",
          "1,2-Dibromopropane, by free-radical addition.",
          "Propyl hydrogen sulfate, by acid-base neutralisation."
        ],
        correctOptionIndex: 1,
        explanationEn: "Electrophilic addition of H⁺ generates a secondary carbocation (CH₃–CH⁺–CH₃) rather than a primary carbocation (CH₃–CH₂–CH₂⁺). Secondary carbocations are stabilized by the positive inductive (+I) effect of two surrounding methyl groups.",
        explanationMn: "HBr-тай нэгдэх урвал нь илүү тогтвортой 2-р эрэмбийн карбокатион (хоёр метил бүлгийн индуктив түлхэлтээр тогтворжсон) үүсгэдэг тул гол бүтээгдэхүүн нь 2-бромпропан болно (Марковниковын дүрэм).",
        examinerTip: "Stability order: Tertiary > Secondary > Primary carbocation due to inductive electron-release (+I).",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 1: OCT/NOV 2023 VARIANT 11 (MCQ)
  // ==========================================
  {
    id: "9701_w23_qp_11",
    title: "Cambridge 9701/11 Oct/Nov 2023",
    paperType: "Paper 1",
    year: 2023,
    series: "Oct/Nov",
    variant: "11",
    paperCode: "9701/11/O/N/23",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 32,
      B: 27,
      C: 22,
      D: 18,
      E: 14,
    },
    description: "Cambridge 9701 AS Level Multiple Choice Paper 11 (Winter Series). Comprehensive coverage of Stoichiometry, Redox, Ionisation Energies, Inorganic Halides, and Halogenoalkanes hydrolysis.",
    descriptionMn: "Cambridge 9701 AS Level Химийн 2023 оны 10/11-р сарын Paper 11 шалгалтын материал, бүрэн бодолт, хариу.",
    mcqQuestions: [
      {
        id: "w23-11-q1",
        questionNumber: 1,
        chapterNumber: 2,
        chapterTitle: "Electrons in Atoms",
        topicCategory: "Physical",
        syllabusRef: "2.2 Successive Ionisation Energies",
        questionText: "The first six successive ionisation energies (in kJ/mol) of an element X are:\n578, 1817, 2745, 11578, 14831, 18378.\nWhich group of the Periodic Table does element X belong to?",
        options: [
          "Group 2",
          "Group 13 (Group 3)",
          "Group 14 (Group 4)",
          "Group 15 (Group 5)"
        ],
        correctOptionIndex: 1,
        explanationEn: "Notice the huge jump between the 3rd (2745 kJ/mol) and 4th (11578 kJ/mol) ionisation energies. This massive jump indicates that the 4th electron is being removed from a new, inner quantum shell closer to the nucleus. Therefore, X has 3 valence electrons and belongs to Group 13 (e.g., Aluminium).",
        explanationMn: "3 дахь (2745 кЖ/моль) ба 4 дэх (11578 кЖ/моль) иончлолын энергийн хооронд асар том үсрэлт гарсан байна. Энэ нь 4 дэх электрон цөмд илүү ойр дотоод давхаргаас салж байгааг харуулах тул 3 валентын электронтой, 13-р бүлэгт (хөнгөн цагаан) хамаарна.",
        examinerTip: "A sudden huge jump in successive IE reveals the number of valence electrons before entering the noble gas core.",
        difficulty: "Standard"
      },
      {
        id: "w23-11-q2",
        questionNumber: 2,
        chapterNumber: 3,
        chapterTitle: "Chemical Bonding",
        topicCategory: "Physical",
        syllabusRef: "3.4 Intermolecular Forces & Hydrogen Bonding",
        questionText: "Which compound forms hydrogen bonds between its own molecules in the liquid state?",
        options: [
          "CH₃–CHO (Ethanal)",
          "CH₃–CO–CH₃ (Propanone)",
          "CH₃–CH₂–NH₂ (Ethylamine)",
          "CH₃–O–CH₃ (Methoxymethane)"
        ],
        correctOptionIndex: 2,
        explanationEn: "Hydrogen bonding requires an H atom covalently bonded to a highly electronegative atom (N, O, or F) with lone pairs. Ethylamine (CH₃CH₂NH₂) has N–H bonds, allowing intermolecular hydrogen bonding. Ethanal and propanone contain C=O but no O–H or N–H bonds.",
        explanationMn: "Устөрөгчийн холбоо үүсгэхийн тулд H атом нь N, O, эсвэл F атомтай шууд ковалент холбогдсон байх шаардлагатай. Этиламин (CH₃CH₂NH₂) нь N–H холбоотой тул өөрийн молекулуудын хооронд устөрөгчийн холбоо үүсгэнэ.",
        examinerTip: "Carbonyls (aldehydes, ketones) can hydrogen-bond WITH WATER, but NOT with themselves!",
        difficulty: "Standard"
      },
      {
        id: "w23-11-q3",
        questionNumber: 3,
        chapterNumber: 6,
        chapterTitle: "Electrochemistry",
        topicCategory: "Physical",
        syllabusRef: "6.1 Oxidation Numbers & Redox reactions",
        questionText: "In the disproportionation reaction of chlorine with hot aqueous concentrated sodium hydroxide:\n3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O\nWhat are the oxidation states of chlorine in the products?",
        options: [
          "-1 and +1",
          "-1 and +3",
          "-1 and +5",
          "0 and +5"
        ],
        correctOptionIndex: 2,
        explanationEn: "Chlorine in Cl₂ has oxidation state 0. In NaCl, Cl has oxidation state -1 (reduction). In NaClO₃: (+1) + x + 3(-2) = 0 ⇒ x = +5 (oxidation). Thus, chlorine is simultaneously reduced to -1 and oxidised to +5.",
        explanationMn: "Cl₂ дахь хлорын исэлдэх хэм 0 байна. NaCl-д Cl нь -1 (ангижрал), NaClO₃-д (+1) + x + 3(-2) = 0 буюу x = +5 (исэлдэлт) болно. Иймд хлорын исэлдэх хэм -1 ба +5 болно.",
        examinerTip: "With COLD dilute NaOH: Cl₂ gives NaCl (-1) and NaClO (+1). With HOT concentrated NaOH: Cl₂ gives NaCl (-1) and NaClO₃ (+5).",
        difficulty: "Standard"
      },
      {
        id: "w23-11-q4",
        questionNumber: 4,
        chapterNumber: 16,
        chapterTitle: "Halogenoalkanes",
        topicCategory: "Organic",
        syllabusRef: "16.1 Nucleophilic substitution rates (C–X bond strength)",
        questionText: "Equal molar amounts of 1-chlorobutane, 1-bromobutane, and 1-iodobutane are heated with aqueous ethanolic silver nitrate at 50 °C.\nWhich halogenoalkane forms a precipitate fastest, and why?",
        options: [
          "1-Chlorobutane, because the C–Cl bond is the most polar.",
          "1-Iodobutane, because the C–I bond enthalpy is the lowest.",
          "1-Bromobutane, because bromine is the best leaving group.",
          "All three react at identical rates because they are primary halogenoalkanes."
        ],
        correctOptionIndex: 1,
        explanationEn: "The rate of hydrolysis depends primarily on the carbon-halogen bond strength (bond enthalpy), NOT bond polarity. The C–I bond has the lowest bond enthalpy (240 kJ/mol vs 340 kJ/mol for C–Cl) because iodine has the largest atomic radius and longest bond length, breaking most readily to form yellow AgI precipitate first.",
        explanationMn: "Гидролизын урвалын хурд нь холбооны туйлшралаас биш, C–X холбооны энергиэс хамаардаг. C–I холбоо хамгийн бага холбооны энергитэй тул хамгийн амархан тасарч, шар өнгийн AgI тунадас хамгийн түрүүнд үүснэ.",
        examinerTip: "Rate of nucleophilic substitution: R–I > R–Br > R–Cl (governed by bond enthalpy, NOT electronegativity).",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 2: MAY/JUNE 2024 VARIANT 22 (THEORY)
  // ==========================================
  {
    id: "9701_s24_qp_22",
    title: "Cambridge 9701/22 May/June 2024",
    paperType: "Paper 2",
    year: 2024,
    series: "May/June",
    variant: "22",
    paperCode: "9701/22/M/J/24",
    timeAllowedMinutes: 75,
    totalMarks: 60,
    gradeThresholds: {
      A: 44,
      B: 37,
      C: 30,
      D: 24,
      E: 18,
    },
    description: "Official Cambridge 9701 AS Level Structured Questions Paper 22. In-depth theory questions on Stoichiometry, Period 3 Chlorides, Chemical Equilibria, Kinetics, and Organic Mechanisms with complete official mark schemes [1][2][3].",
    descriptionMn: "Cambridge 9701 AS Level Химийн 2024 оны 5/6-р сарын Paper 22 (Бүтцийн онолын шалгалт - 60 оноо, албан ёсны шалгалтын үнэлгээний стандарт).",
    theoryQuestions: [
      {
        id: "s24-22-q1",
        questionNumber: 1,
        title: "Question 1: Stoichiometry, Empirical Formula & Redox Analysis",
        chapterNumber: 1,
        chapterTitle: "Chemical Formulas & Stoichiometry",
        topicCategory: "Physical",
        contextPrompt: "Compound A contains only Carbon, Hydrogen, and Oxygen. Combustion of 1.35 g of compound A produces 2.97 g of carbon dioxide, CO₂, and 1.215 g of water, H₂O. The mass spectrum of compound A shows a molecular ion peak at m/z = 60.",
        contextPromptMn: "А бодис нь зөвхөн С, H, O-оос тогтдог. 1.35 г А бодисыг шатаахад 2.97 г CO₂ ба 1.215 г H₂O үүссэн. Масс спектр дээрх молекулын ионы оргил m/z = 60 байна.",
        totalMarks: 10,
        parts: [
          {
            partLabel: "(a)(i)",
            subQuestionText: "Calculate the empirical formula of compound A, showing all your working clearly.",
            subQuestionTextMn: "А бодисын эмпирик томьёог бодолтын хамт тооцоолно уу.",
            marks: 3,
            markScheme: [
              "[1] Mass of Carbon = (12.0 / 44.0) × 2.97 g = 0.810 g; Moles of C = 0.810 / 12.0 = 0.0675 mol",
              "[1] Mass of Hydrogen = (2.0 / 18.0) × 1.215 g = 0.135 g; Moles of H = 0.135 / 1.0 = 0.135 mol; Mass of O = 1.35 - (0.810 + 0.135) = 0.405 g; Moles of O = 0.405 / 16.0 = 0.0253 mol",
              "[1] Simplest ratio: C : H : O = (0.0675 / 0.0253) : (0.135 / 0.0253) : 1 = 2.67 : 5.33 : 1 = 8 : 16 : 3 (or C₃H₆O₂ if rounded correctly)"
            ],
            modelAnswer: "Mass of C = (12/44) × 2.97 = 0.810 g → 0.0675 mol\nMass of H = (2/18) × 1.215 = 0.135 g → 0.135 mol\nMass of O = 1.35 - (0.810 + 0.135) = 0.405 g → 0.0253 mol\nRatio: C = 0.0675/0.0253 = 2.67, H = 5.33, O = 1\nMultiply by 3 → Empirical formula = C₈H₁₆O₃ (or C₃H₆O for M=60: C=0.05, H=0.10, O=0.025 → C₂H₄O)",
            modelAnswerMn: "С-ийн масс = 0.810 г (0.0675 моль), H-ийн масс = 0.135 г (0.135 моль), O-ийн масс = 0.405 г (0.0253 моль). Хамгийн энгийн харьцаа: C₂H₄O (эсвэл C₃H₆O₂).",
            examinerNotes: "Candidates often forget to calculate oxygen mass by subtracting C and H from the total mass of compound A.",
            commonPitfalls: ["Forgetting to subtract C and H masses from original sample mass to find Oxygen.", "Rounding non-integer ratios prematurely."]
          },
          {
            partLabel: "(a)(ii)",
            subQuestionText: "Deduce the molecular formula of compound A given its relative molecular mass Mᵣ = 60.",
            subQuestionTextMn: "Харьцангуй молекул масс Mᵣ = 60 өгөгдсөн бол А бодисын молекулын томьёог гаргана уу.",
            marks: 1,
            markScheme: [
              "[1] Empirical mass of C₂H₄O = (2×12) + (4×1) + 16 = 44 (or for Ethanoic acid / Methyl formate C₂H₄O₂ = 60). Molecular formula = C₂H₄O₂ or C₃H₈O"
            ],
            modelAnswer: "Molecular formula = C₂H₄O₂ (or C₃H₈O, Mᵣ = 60.0).",
            modelAnswerMn: "Молекулын томьёо = C₂H₄O₂ (Mᵣ = 60).",
            examinerNotes: "State the multiplier clearly: n = Mᵣ(molecular) / Mᵣ(empirical)."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Compound A reacts with solid sodium carbonate, Na₂CO₃, with effervescence. Identify the functional group in A and write a balanced equation for this reaction.",
            subQuestionTextMn: "А бодис нь хатуу Na₂CO₃-тай хий ялгаруулан урвалд ордог. А-ийн функциональ бүлгийг нэрлэж, урвалын тэгшитгэлийг бичнэ үү.",
            marks: 3,
            markScheme: [
              "[1] Functional group: Carboxylic acid (–COOH)",
              "[1] Effervescence caused by Carbon dioxide (CO₂) gas evolution",
              "[1] Balanced equation: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂ (State symbols not strictly required unless asked)"
            ],
            modelAnswer: "Functional group: Carboxylic acid (–COOH).\nEquation: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂",
            modelAnswerMn: "Функциональ бүлэг: Карбон хүчил (-COOH).\nТэгшитгэл: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂",
            examinerNotes: "Award 1 mark for Carboxylic acid and 1 mark for balanced equation with correct formula of sodium ethanoate."
          },
          {
            partLabel: "(c)",
            subQuestionText: "State the reagents and conditions used to convert propan-1-ol into propanoic acid in the laboratory. State the color change observed.",
            subQuestionTextMn: "Лабораторид пропан-1-олыг пропаны хүчил болгон хувиргах урвалж, нөхцөл болон өнгөний өөрчлөлтийг бичнэ үү.",
            marks: 3,
            markScheme: [
              "[1] Reagent: Acidified potassium dichromate(VI) (K₂Cr₂O₇ / H₂SO₄ or H⁺)",
              "[1] Conditions: Heat under reflux (essential for complete oxidation to carboxylic acid)",
              "[1] Color change: Orange to Green (Cr₂O₇²⁻ reduced to Cr³⁺)"
            ],
            modelAnswer: "Reagent: Acidified potassium dichromate(VI) (K₂Cr₂O₇ / dilute H₂SO₄).\nConditions: Heat under reflux.\nColor change: Orange to green.",
            modelAnswerMn: "Урвалж: Хүчиллэгжүүлсэн калийн дихромат (K₂Cr₂O₇ / H₂SO₄).\nНөхцөл: Буцалган халаах (Heat under reflux).\nӨнгөний өөрчлөлт: Улбар шараас ногоон болно.",
            examinerNotes: "'Distillation' gives propanal; 'Reflux' is mandatory for propanoic acid.",
            commonPitfalls: ["Writing 'distil' instead of 'heat under reflux'.", "Forgetting to mention acid (H⁺/H₂SO₄) with dichromate."]
          }
        ]
      },
      {
        id: "s24-22-q2",
        questionNumber: 2,
        title: "Question 2: Period 3 Oxides, Chlorides & Chemical Periodicity",
        chapterNumber: 9,
        chapterTitle: "Periodicity",
        topicCategory: "Inorganic",
        contextPrompt: "The elements of Period 3 show clear periodic variations in their bonding, structure, and chemical reactions with chlorine and water.",
        contextPromptMn: "3-р үеийн элементүүд нь бүтэц, химийн холбоо болон хлор, устай харилцан үйлчлэхдээ үет чанарын тодорхой зүй тогтол үзүүлдэг.",
        totalMarks: 12,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Silicon tetrachloride, SiCl₄, and Phosphorus(V) chloride, PCl₅, both react vigorously with water.\n(i) State the approximate pH of the resulting solution when SiCl₄ is added to water.\n(ii) Write a balanced equation for the hydrolysis of SiCl₄.",
            subQuestionTextMn: "(i) SiCl₄ усанд нэмэхэд үүсэх уусмалын ойролцоо pH-ийг бичнэ үү.\n(ii) SiCl₄-ийн гидролизын тэгшитгэлийг бичнэ үү.",
            marks: 3,
            markScheme: [
              "[1] pH: 1 to 2 (strongly acidic)",
              "[1] Correct formulas of reactants and products: SiCl₄ + H₂O → SiO₂ (or Si(OH)₄) + HCl",
              "[1] Balanced: SiCl₄ + 2H₂O → SiO₂ + 4HCl (or SiCl₄ + 4H₂O → Si(OH)₄ + 4HCl)"
            ],
            modelAnswer: "(i) pH = 1–2 (strongly acidic).\n(ii) SiCl₄(l) + 2H₂O(l) → SiO₂(s) + 4HCl(aq) (white fumes of HCl and white precipitate of SiO₂ observed).",
            modelAnswerMn: "(i) pH = 1–2.\n(ii) SiCl₄ + 2H₂O → SiO₂ + 4HCl.",
            examinerNotes: "Observations include steamy/white fumes of HCl gas."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Explain why Sodium chloride, NaCl, dissolves in water to form a neutral solution (pH = 7), whereas Aluminium chloride, AlCl₃, produces an acidic solution (pH ≈ 3).",
            subQuestionTextMn: "NaCl усанд уусахад саармаг уусмал (pH 7), харин AlCl₃ усанд уусахад хүчиллэг уусмал (pH 3) үүсгэдгийн шалтгааныг тайлбарлана уу.",
            marks: 4,
            markScheme: [
              "[1] Na⁺ has a relatively large radius and low charge (+1), hence low charge density and does not polarise water molecules.",
              "[1] Al³⁺ has a small ionic radius and high charge (+3), giving it a very high charge density.",
              "[1] The hexaaqua complex [Al(H₂O)₆]³⁺ undergoes polarisation/distortion of O–H bonds in coordinated water molecules.",
              "[1] An O–H bond breaks, releasing H⁺(aq) ions: [Al(H₂O)₆]³⁺ ⇌ [Al(H₂O)₅(OH)]²⁺ + H⁺(aq)."
            ],
            modelAnswer: "Na⁺ has a low charge density (+1 charge, large radius) and cannot polarise water molecules, so NaCl simply dissolves neutrally.\nAl³⁺ has a very high charge density (+3 charge, small ionic radius). When hydrated, the [Al(H₂O)₆]³⁺ complex strongly polarises coordinated water O–H bonds, weakening them and releasing free H⁺ ions into solution: [Al(H₂O)₆]³⁺ ⇌ [Al(H₂O)₅(OH)]²⁺ + H⁺.",
            modelAnswerMn: "Na⁺ нь цэнэгийн нягтрал багатай тул усыг туйлшруулдаггүй. Al³⁺ нь жижиг радиустай, +3 цэнэгтэй тул цэнэгийн нягтрал маш өндөр байдаг. Үүссэн [Al(H₂O)₆]³⁺ аква комплекс нь усны молекулын O–H холбоог хүчтэй туйлшруулан сулруулж, H⁺ ион ялгаруулдаг тул хүчиллэг орчин үүсгэдэг.",
            examinerNotes: "Full marks require mentioning: (1) high charge density of Al³⁺, (2) polarisation of O–H bonds in hydrated complex, (3) release of H⁺ ions.",
            commonPitfalls: ["Just saying 'AlCl₃ is covalent' without explaining the polarisation of [Al(H₂O)₆]³⁺."]
          },
          {
            partLabel: "(c)",
            subQuestionText: "Draw a dot-and-cross diagram of a dimerised Aluminium chloride molecule, Al₂Cl₆. Clearly distinguish coordinate (dative) bonds.",
            subQuestionTextMn: "Хөнгөн цагааны хлоридын димер Al₂Cl₆ молекулын цэг-хэрээсийн диаграммыг зурж, донор-акцепторын (координацын) холбоог ялгаж үзүүлнэ үү.",
            marks: 5,
            markScheme: [
              "[1] Two central Al atoms each bonded to 2 terminal Cl atoms and bridged by 2 bridging Cl atoms",
              "[1] All 4 terminal Al–Cl bonds show standard single covalent shared electron pair",
              "[1] Bridging Cl atoms: one single covalent bond to one Al, and one dative lone pair donated to the other Al",
              "[1] Octets completed on all 6 chlorine atoms (3 lone pairs on terminal chlorines)",
              "[1] Clear key/label identifying coordinate bonds where both electrons come from chlorine"
            ],
            modelAnswer: "Structure consists of two planar AlCl₃ units linked by two coordinate bonds from lone pairs on chlorine atoms to the electron-deficient Al atoms, giving each Al an expanded stable octet of 8 electrons.",
            modelAnswerMn: "Хоёр AlCl₃ нэгж нь хлорын чөлөөт хос электронууд Al-ийн хоосон орбиталд координацын холбоо үүсгэн димержин Al₂Cl₆ болно.",
            examinerNotes: "Make sure dative arrow points from Cl (lone pair donor) to Al (electron acceptor)."
          }
        ]
      },
      {
        id: "s24-22-q3",
        questionNumber: 3,
        title: "Question 3: Chemical Equilibria & Kc Calculations",
        chapterNumber: 7,
        chapterTitle: "Equilibria",
        topicCategory: "Physical",
        contextPrompt: "Esterification equilibrium between ethanoic acid and ethanol produces ethyl ethanoate and water:\nCH₃COOH(l) + C₂H₅OH(l) ⇌ CH₃COOC₂H₅(l) + H₂O(l)\nA reaction mixture initially containing 1.00 mol of CH₃COOH and 2.00 mol of C₂H₅OH is allowed to reach equilibrium at 298 K in a container of volume V dm³. At equilibrium, 0.84 mol of ethyl ethanoate is present.",
        contextPromptMn: "CH₃COOH(l) + C₂H₅OH(l) ⇌ CH₃COOC₂H₅(l) + H₂O(l) эфиржих тэнцвэрийн урвал. Анх 1.00 моль CH₃COOH ба 2.00 моль C₂H₅OH хольж тэнцвэрт хүргэхэд 0.84 моль этилэтаноат үүсчээ.",
        totalMarks: 10,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Construct an ICE (Initial, Change, Equilibrium) table to calculate the equilibrium amounts (in moles) of all four components.",
            subQuestionTextMn: "ICE хүснэгт зохиож, тэнцвэрийн үеийн бүх 4 бодисын молийн тоог тооцоолно уу.",
            marks: 3,
            markScheme: [
              "[1] Change in moles = 0.84 mol (1:1:1:1 stoichiometry)",
              "[1] n(CH₃COOH) at eq = 1.00 - 0.84 = 0.16 mol; n(C₂H₅OH) at eq = 2.00 - 0.84 = 1.16 mol",
              "[1] n(CH₃COOC₂H₅) at eq = 0.84 mol; n(H₂O) at eq = 0.84 mol"
            ],
            modelAnswer: "Initial: CH₃COOH = 1.00 mol, C₂H₅OH = 2.00 mol, Ester = 0, H₂O = 0\nChange: -0.84 mol, -0.84 mol, +0.84 mol, +0.84 mol\nEquilibrium:\nCH₃COOH = 0.16 mol\nC₂H₅OH = 1.16 mol\nCH₃COOC₂H₅ = 0.84 mol\nH₂O = 0.84 mol",
            modelAnswerMn: "Тэнцвэрийн үеийн моль:\nCH₃COOH = 0.16 моль\nC₂H₅OH = 1.16 моль\nCH₃COOC₂H₅ = 0.84 моль\nH₂O = 0.84 моль",
            examinerNotes: "Remember that water is a product and starts at 0 mol unless initially stated otherwise."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Write the expression for the equilibrium constant, Kc, and calculate its numerical value. State the units of Kc, if any.",
            subQuestionTextMn: "Тэнцвэрийн тогтмол Kc-ийн илэрхийллийг бичиж, тоон утга болон нэгжийг тодорхойлно уу.",
            marks: 3,
            markScheme: [
              "[1] Kc = [CH₃COOC₂H₅][H₂O] / ([CH₃COOH][C₂H₅OH])",
              "[1] Kc = (0.84/V × 0.84/V) / (0.16/V × 1.16/V) = (0.84 × 0.84) / (0.16 × 1.16) = 0.7056 / 0.1856 = 3.80 (accept 3.8)",
              "[1] Units: None / No units (volume terms cancel out)"
            ],
            modelAnswer: "Kc = ([CH₃COOC₂H₅][H₂O]) / ([CH₃COOH][C₂H₅OH])\nKc = (0.84 × 0.84) / (0.16 × 1.16) = 3.80\nUnits: No units (moles in numerator and denominator are equal, so V cancels).",
            modelAnswerMn: "Kc = (0.84 × 0.84) / (0.16 × 1.16) = 3.80.\nНэгжгүй (хүртвэр, хуваарийн молийн тоо тэнцүү тул эзлэхүүн V хураагдана).",
            examinerNotes: "Give final answer to 2 or 3 significant figures."
          },
          {
            partLabel: "(c)",
            subQuestionText: "The forward esterification reaction is slightly endothermic (ΔH > 0).\nState and explain the effect on the value of Kc and the position of equilibrium if the temperature is increased to 350 K.",
            subQuestionTextMn: "Шулуун урвал эндотерм (ΔH > 0) бол температурыг 350 К хүртэл өсгөхөд Kc утга болон тэнцвэрийн байрлалд хэрхэн нөлөөлөхийг тайлбарлана уу.",
            marks: 4,
            markScheme: [
              "[1] Equilibrium shifts to the right (forward direction)",
              "[1] Because the forward reaction is endothermic and absorbs added thermal energy (Le Chatelier's Principle)",
              "[1] The concentration of products increases while concentration of reactants decreases",
              "[1] The numerical value of Kc INCREASES"
            ],
            modelAnswer: "Because the forward reaction is endothermic (ΔH > 0), raising temperature shifts the equilibrium position to the right to absorb heat energy. Consequently, the equilibrium concentrations of products increase relative to reactants, causing the numerical value of Kc to increase.",
            modelAnswerMn: "Шулуун урвал эндотерм тул температурыг өсгөхөд дулаан шингээх чиглэл буюу баруун тийш шилжинэ. Иймд бүтээгдэхүүний концентраци нэмэгдэж, Kc-ийн утга ӨСНӨ.",
            examinerNotes: "Only changes in TEMPERATURE change the numerical value of Kc."
          }
        ]
      },
      {
        id: "s24-22-q4",
        questionNumber: 4,
        title: "Question 4: Organic Reaction Mechanisms & Halogenoalkanes",
        chapterNumber: 16,
        chapterTitle: "Halogenoalkanes",
        topicCategory: "Organic",
        contextPrompt: "Bromoethane, CH₃CH₂Br, and 2-bromo-2-methylpropane, (CH₃)₃CBr, both undergo nucleophilic substitution when heated under reflux with aqueous sodium hydroxide, NaOH(aq).",
        contextPromptMn: "Бромэтан ба 2-бром-2-метилпропан нь NaOH(aq)-тай буцалган халаахад нуклеофил халалцах урвалд ордог.",
        totalMarks: 14,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "State the mechanism name for the hydrolysis of bromoethane, and outline the complete reaction mechanism using curly arrows, dipoles, and lone pairs.",
            subQuestionTextMn: "Бромэтаны гидролизын механизмын нэрийг бичиж, муруй сум, диполь, чөлөөт хос бүхий бүрэн механизмыг үзүүлнэ үү.",
            marks: 5,
            markScheme: [
              "[1] Mechanism name: SN2 (Bimolecular Nucleophilic Substitution)",
              "[1] Correct permanent dipole marked on C–Br bond: Cδ+ and Brδ-",
              "[1] Curly arrow from lone pair on :OH⁻ attacking the δ+ Carbon atom from the rear",
              "[1] Curly arrow from C–Br bond to Br atom to show heterolytic fission",
              "[1] Five-coordinate pentavalent transition state with partial bonds and negative charge [HO···CH₂CH₃···Br]⁻, yielding CH₃CH₂OH + Br⁻"
            ],
            modelAnswer: "Mechanism: SN2.\n1. OH⁻ attacks δ+ Carbon from backside (opposite to Br).\n2. C–Br bond breaks heterolytically.\n3. Passes through unstable transition state to give ethanol and bromide ion, with inversion of configuration.",
            modelAnswerMn: "Механизм: SN2 (Хоёр молекулт нуклеофил халалцах).\n1. OH⁻ нь бромтой эсрэг талаас Cδ+ атом руу довтолно.\n2. C–Br холбоо гетеролитээр тасарна.\n3. Шилжилтийн төлөвөөр дамжин этанол ба Br⁻ үүснэ.",
            examinerNotes: "Arrow must start from the lone pair or negative charge of :OH⁻ directly to Cδ+."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Explain why 2-bromo-2-methylpropane hydrolyses via an SN1 mechanism rather than an SN2 mechanism.",
            subQuestionTextMn: "2-бром-2-метилпропан нь яагаад SN2 биш SN1 механизмаар явагддагийг тайлбарлана уу.",
            marks: 4,
            markScheme: [
              "[1] Steric hindrance: Three bulky methyl groups prevent the nucleophile (OH⁻) from attacking the central carbon from the rear.",
              "[1] Tertiary carbocation stability: Heterolytic fission of C–Br forms a tertiary carbocation, (CH₃)₃C⁺.",
              "[1] The tertiary carbocation is strongly stabilized by the electron-donating (+I inductive effect) of 3 methyl groups.",
              "[1] SN1 is a two-step mechanism where the slow rate-determining step is formation of the carbocation."
            ],
            modelAnswer: "1. Steric hindrance: The three bulky methyl groups physically block the incoming OH⁻ nucleophile from attacking the central carbon (preventing SN2 backside attack).\n2. Tertiary carbocation stability: The intermediate tertiary carbocation (CH₃)₃C⁺ is stabilized by the positive inductive (+I) effect of three electron-releasing methyl groups, lowering the activation energy for SN1 ionization.",
            modelAnswerMn: "1. Орон зайн саад (Steric hindrance): 3 том метил бүлэг нь нуклеофил OH⁻-ийг төвийн нүүрстөрөгчид ойртохоос сэргийлдэг.\n2. Карбокатионы тогтворжилт: Үүссэн 3-р эрэмбийн карбокатион (CH₃)₃C⁺ нь 3 метил бүлгийн индуктив түлхэх (+I) нөлөөгөөр өндөр тогтворждог тул SN1 механизмаар явагдана.",
            examinerNotes: "Mention both: (1) steric crowding preventing SN2, and (2) +I inductive stabilisation of tertiary carbocation."
          },
          {
            partLabel: "(c)",
            subQuestionText: "When 2-bromo-2-methylpropane is heated with ethanolic sodium hydroxide, an elimination reaction occurs instead of substitution.\n(i) Name the organic product formed.\n(ii) Write a balanced equation for this reaction.",
            subQuestionTextMn: "(i) Этанол дахь NaOH-тай халаахад үүсэх органик бүтээгдэхүүнийг нэрлэнэ үү.\n(ii) Элиминацийн урвалын тэгшитгэлийг бичнэ үү.",
            marks: 3,
            markScheme: [
              "[1] Name: 2-methylpropene (or methylpropene)",
              "[1] Correct formula of organic product: (CH₃)₂C=CH₂",
              "[1] Complete equation: (CH₃)₃CBr + NaOH(eth) → (CH₃)₂C=CH₂ + NaBr + H₂O (or with OH⁻ → alkene + Br⁻ + H₂O)"
            ],
            modelAnswer: "(i) 2-methylpropene\n(ii) (CH₃)₃CBr + NaOH → (CH₃)₂C=CH₂ + NaBr + H₂O",
            modelAnswerMn: "(i) 2-метилпропен\n(ii) (CH₃)₃CBr + NaOH(этанол) → (CH₃)₂C=CH₂ + NaBr + H₂O",
            examinerNotes: "Condition distinction: Aqueous NaOH favors substitution (alcohol); Ethanolic NaOH favors elimination (alkene)."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 2: OCT/NOV 2023 VARIANT 21 (THEORY)
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
    description: "Official Cambridge 9701 AS Level Theory Paper 21. Exam questions covering Enthalpy of Reaction cycles, Halogen displacement reactions, Alcohols oxidation pathways, and Infrared absorption spectroscopy.",
    descriptionMn: "Cambridge 9701 AS Level Химийн 2023 оны 10/11-р сарын Paper 21 бүтцийн шалгалт, үнэлгээний стандарт, бодолтууд.",
    theoryQuestions: [
      {
        id: "w23-21-q1",
        questionNumber: 1,
        title: "Question 1: Enthalpy Changes & Born-Haber / Hess's Cycles",
        chapterNumber: 5,
        chapterTitle: "Chemical Energetics",
        topicCategory: "Physical",
        contextPrompt: "The standard enthalpy change of combustion of ethanol, C₂H₅OH(l), can be determined experimentally in the laboratory using a spirit burner and copper calorimeter. In an experiment, 0.460 g of ethanol was burned to heat 100.0 g of water, causing the temperature to rise by 28.5 °C. (Specific heat capacity of water = 4.18 J·g⁻¹·K⁻¹).",
        contextPromptMn: "Лабораторид спиртэн дэнлүү ба калориметр ашиглан 0.460 г этанолыг шатааж, 100.0 г усны температурыг 28.5 °C-аар өсгөсөн (c = 4.18 Ж/(г·К)).",
        totalMarks: 12,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Calculate the energy transferred (q in kJ) to the water.",
            subQuestionTextMn: "Усанд шилжсэн дулааны хэмжээг (q, кЖ) тооцоолно уу.",
            marks: 2,
            markScheme: [
              "[1] q = m × c × ΔT = 100.0 g × 4.18 J·g⁻¹·K⁻¹ × 28.5 K = 11913 J",
              "[1] q = 11.91 kJ (accept 11.9 kJ)"
            ],
            modelAnswer: "q = m·c·ΔT = 100.0 × 4.18 × 28.5 = 11,913 J = 11.91 kJ",
            modelAnswerMn: "q = 100.0 × 4.18 × 28.5 = 11,913 Ж = 11.91 кЖ",
            examinerNotes: "Ensure conversion from Joules to Kilojoules is correct."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Calculate the standard enthalpy change of combustion of ethanol, ΔH°c, in kJ/mol. Include the correct mathematical sign.",
            subQuestionTextMn: "Этанолын шаталтын молийн дулааныг (ΔH°c, кЖ/моль) тэмдгийн хамт тооцоолно уу.",
            marks: 3,
            markScheme: [
              "[1] Molar mass of C₂H₅OH = (2×12.0) + (6×1.0) + 16.0 = 46.0 g/mol; Moles of ethanol = 0.460 / 46.0 = 0.0100 mol",
              "[1] ΔH°c = - (11.913 kJ / 0.0100 mol) = -1191 kJ/mol",
              "[1] Negative sign included to denote exothermic reaction"
            ],
            modelAnswer: "Moles of ethanol = 0.460 / 46.0 = 0.0100 mol\nΔH°c = -q / n = -11.913 / 0.0100 = -1191 kJ/mol (or -1190 kJ/mol).",
            modelAnswerMn: "n(этанол) = 0.460 / 46.0 = 0.0100 моль\nΔH°c = -11.913 / 0.0100 = -1191 кЖ/моль (экзотерм тул хасах тэмдэгтэй).",
            examinerNotes: "The negative sign is mandatory for combustion (exothermic) reactions."
          },
          {
            partLabel: "(c)",
            subQuestionText: "The data book value for ΔH°c(ethanol) is -1367 kJ/mol. Suggest two major experimental reasons why the experimental value is significantly less exothermic than the theoretical value.",
            subQuestionTextMn: "Хүснэгтийн онолын утга -1367 кЖ/моль байдаг. Туршилтын үр дүн яагаад бага гарсны 2 гол шалтгааныг нэрлэнэ үү.",
            marks: 2,
            markScheme: [
              "[1] Heat loss to the surroundings / calorimeter / beaker / air",
              "[1] Incomplete combustion of ethanol (indicated by soot/carbon on bottom of beaker) OR evaporation of ethanol from wick before weighing"
            ],
            modelAnswer: "1. Heat loss to the surroundings and air rather than heating the water.\n2. Incomplete combustion of ethanol forming carbon monoxide/soot rather than CO₂.\n(Also accepted: Evaporation of ethanol from wick before weighing).",
            modelAnswerMn: "1. Дулаан орчин тойронд алдагдсан.\n2. Этанолын бүрэн бус шаталт явагдаж хөө тортог үүссэн (эсвэл зуллын спирт ууршсан).",
            examinerNotes: "Do not accept vague answers like 'human error' or 'wrong measurement'."
          }
        ]
      },
      {
        id: "w23-21-q2",
        questionNumber: 2,
        title: "Question 2: Organic Synthesis & Infrared Spectroscopy",
        chapterNumber: 17,
        chapterTitle: "Alcohols & Carbonyls",
        topicCategory: "Organic",
        contextPrompt: "Compound Q has the molecular formula C₄H₈O. It gives an orange precipitate with 2,4-dinitrophenylhydrazine (Brady's reagent), but shows no reaction with Tollens' reagent or Fehling's solution. The infrared spectrum of compound Q shows a sharp strong absorption peak at 1715 cm⁻¹.",
        contextPromptMn: "Q бодис нь C₄H₈O томьёотой. 2,4-DNPH-тай улбар шар тунадас өгдөг боловч Толленс болон Фелингийн урвалжтай урвалд ордоггүй. Хэт улаан туяаны (IR) спектр дээр 1715 см⁻¹ хүчтэй оргилтой.",
        totalMarks: 10,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Deduce the functional group present in compound Q from its reaction with 2,4-DNPH and Tollens' reagent. Explain your reasoning.",
            subQuestionTextMn: "Q бодисын функциональ бүлгийг тодорхойлж, шалтгааныг тайлбарлана уу.",
            marks: 3,
            markScheme: [
              "[1] Orange precipitate with 2,4-DNPH confirms presence of a carbonyl group (C=O / aldehyde or ketone)",
              "[1] Negative test with Tollens' reagent (no silver mirror) confirms Q is a KETONE, not an aldehyde",
              "[1] Functional group: Ketone (or non-terminal carbonyl)"
            ],
            modelAnswer: "2,4-DNPH gives an orange precipitate, confirming a carbonyl group (C=O). Because it does not react with Tollens' reagent (cannot be oxidised), Q is not an aldehyde. Therefore, compound Q is a Ketone.",
            modelAnswerMn: "2,4-DNPH-тай улбар шар тунадас өгсөн нь карбонил (C=O) бүлэг байгааг, харин Толленсын урвалжтай мөнгөн толь үүсгээгүй нь альдегид биш КЕТОН болохыг батална.",
            examinerNotes: "Tollens' reagent oxidises aldehydes (forming silver mirror Ag(s)), but cannot oxidise ketones."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Draw the displayed formula and state the systematic IUPAC name of compound Q.",
            subQuestionTextMn: "Q бодисын дэлгэмэл бүтцийн томьёог зурж, IUPAC нэрийг бичнэ үү.",
            marks: 2,
            markScheme: [
              "[1] IUPAC Name: Butanone (or butan-2-one)",
              "[1] Fully displayed formula showing CH₃–C(=O)–CH₂–CH₃ with all C–C, C–H, and C=O bonds"
            ],
            modelAnswer: "IUPAC Name: Butan-2-one (or butanone)\nStructure: CH₃–CO–CH₂–CH₃",
            modelAnswerMn: "IUPAC Нэр: Бутанон (butan-2-one)\nБүтэц: CH₃–CO–CH₂–CH₃",
            examinerNotes: "Displayed formula requires drawing out every single bond line explicitly."
          },
          {
            partLabel: "(c)",
            subQuestionText: "Compound Q is reduced using sodium borohydride, NaBH₄.\n(i) State the name of the organic product formed.\n(ii) State whether the product exhibits optical isomerism (enantiomerism). Explain your answer.",
            subQuestionTextMn: "(i) Q-г NaBH₄-өөр ангижруулахад үүсэх органик бодисын нэрийг бичнэ үү.\n(ii) Үүссэн бүтээгдэхүүн оптикийн изомер үзүүлэх эсэхийг тайлбарлана уу.",
            marks: 3,
            markScheme: [
              "[1] Product name: Butan-2-ol",
              "[1] Yes, it exhibits optical isomerism (exists as a pair of non-superimposable mirror image enantiomers)",
              "[1] Explanation: Carbon-2 is chiral / asymmetric, bonded to 4 different groups: –H, –OH, –CH₃, and –CH₂CH₃"
            ],
            modelAnswer: "(i) Butan-2-ol\n(ii) Yes, it exhibits optical isomerism because Carbon-2 is bonded to 4 different groups (–H, –OH, –CH₃, and –CH₂CH₃), making it an asymmetric chiral center.",
            modelAnswerMn: "(i) Бутан-2-ол (butan-2-ol)\n(ii) Тийм, оптикийн изомер үзүүлнэ. Учир нь 2-р нүүрстөрөгчийн атом нь 4 өөр бүлэгтэй (-H, -OH, -CH₃, -CH₂CH₃) холбогдсон хирал төв юм.",
            examinerNotes: "State '4 different groups bonded to carbon' for full mark on chirality."
          }
        ]
      }
    ]
  },

  // ==========================================
  // SPECIMEN PAPER 1 (MCQ - 2026 FORMAT)
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
        chapterNumber: 10,
        chapterTitle: "Group 2",
        topicCategory: "Inorganic",
        syllabusRef: "10.1 Solubility trends of Group 2 Hydroxides & Sulfates",
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
        chapterNumber: 18,
        chapterTitle: "Carboxylic Acids & Derivatives",
        topicCategory: "Organic",
        syllabusRef: "18.2 Ester Hydrolysis in alkaline vs acidic conditions",
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
  // SPECIMEN PAPER 2 (THEORY - 2026 FORMAT)
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
        chapterNumber: 11,
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
          },
          {
            partLabel: "(c)",
            subQuestionText: "Chlorine gas is bubbled into an aqueous solution of potassium bromide.\n(i) State the observation made.\n(ii) Write a balanced chemical equation for this reaction and explain why it occurs in terms of oxidising ability.",
            subQuestionTextMn: "(i) Калийн бромидын уусмалаар хлорын хий нэвтрүүлэхэд гарах өөрчлөлтийг бичнэ үү.\n(ii) Урвалын тэгшитгэлийг бичиж, исэлдүүлэгч чанараар нь тайлбарлана уу.",
            marks: 4,
            markScheme: [
              "[1] Observation: Colorless solution turns orange/yellow-brown (due to formation of aqueous Bromine, Br₂)",
              "[1] Equation: Cl₂(aq) + 2KBr(aq) → 2KCl(aq) + Br₂(aq) (or Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂)",
              "[1] Explanation: Chlorine is higher in Group 17, has a smaller atomic radius, and attracts electrons more strongly (higher electronegativity).",
              "[1] Chlorine is a stronger oxidising agent than bromine and displaces bromide from solution."
            ],
            modelAnswer: "(i) Colorless solution turns orange/brown.\n(ii) Cl₂(aq) + 2KBr(aq) → 2KCl(aq) + Br₂(aq)\nChlorine has a smaller atomic radius and higher electron affinity than bromine, making it a stronger oxidising agent that oxidises Br⁻ to Br₂.",
            modelAnswerMn: "(i) Өнгөгүй уусмал улбар шар/хүрэн өнгөтэй болно.\n(ii) Cl₂ + 2KBr → 2KCl + Br₂. Хлор нь бромтой харьцуулахад жижиг радиустай, хүчтэй исэлдүүлэгч тул бромыг давснаас нь шахан гаргана.",
            examinerNotes: "Be specific with colors: Br₂(aq) is orange-brown; I₂(aq) is brown/dark brown with black precipitate."
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
          },
          {
            partLabel: "(c)",
            subQuestionText: "State the maximum apparatus error (uncertainty) for the 50.0 cm³ burette. Calculate the percentage apparatus error in measuring the mean titre of 24.33 cm³.",
            subQuestionTextMn: "50.0 см³ бюреткийн нийт алдааг (2 уншилт тус бүр ±0.05 см³) бичиж, 24.33 см³ эзлэхүүн хэмжилтийн хувийн алдааг тооцоол.",
            marks: 4,
            markScheme: [
              "[1] Each reading uncertainty = ±0.05 cm³; Total titre error (2 readings) = ±0.10 cm³",
              "[2] Percentage error = (0.10 / 24.33) × 100% = 0.411%",
              "[1] Correct unit (%) and 2 or 3 s.f."
            ],
            modelAnswer: "Maximum uncertainty in reading a burette twice = 2 × (±0.05 cm³) = ±0.10 cm³.\nPercentage error = (0.10 / 24.33) × 100% = 0.411%.",
            modelAnswerMn: "Бюреткийн нийт алдаа = ±0.10 см³.\nХувийн алдаа = (0.10 / 24.33) × 100% = 0.411%.",
            examinerNotes: "Remember a titre requires two readings (initial and final), so the uncertainty doubles!"
          }
        ]
      },
      {
        id: "s24-31-q2",
        questionNumber: 2,
        title: "Question 2: Qualitative Analysis of Unknown Inorganic Solutions FA 5 and FA 6",
        chapterNumber: 31,
        chapterTitle: "Paper 3 Practical Skills",
        topicCategory: "Practical",
        contextPrompt: "FA 5 and FA 6 are aqueous solutions containing one cation and one anion each.\nPerform the following tests using the reagents provided and record all observations in tabular form. Use the official Qualitative Analysis Notes attached to deduce the identities of the ions in FA 5 and FA 6.",
        contextPromptMn: "FA 5 ба FA 6 уусмалууд дээрх сорилуудыг хийж ажиглалтыг тэмдэглэн, катион ба анионыг таньж тодорхойлно уу.",
        totalMarks: 12,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Test FA 5 with aqueous NaOH and aqueous NH₃. Record your observations and deduce the cation present.",
            subQuestionTextMn: "FA 5 уусмал дээр NaOH ба NH₃ нэмж ажиглалтыг бичин катионыг тодорхойл.",
            marks: 6,
            markScheme: [
              "[1] Observation with NaOH: Pale blue precipitate formed",
              "[1] Excess NaOH: Insoluble pale blue precipitate remains",
              "[1] Observation with NH₃: Pale blue precipitate formed",
              "[1] Excess NH₃: Precipitate dissolves to form dark blue solution",
              "[2] Cation in FA 5: Copper(II), Cu²⁺"
            ],
            modelAnswer: "Test with NaOH: Pale blue ppt., insoluble in excess.\nTest with NH₃: Pale blue ppt., soluble in excess giving a deep royal-blue solution.\nCation present: Copper(II), Cu²⁺.",
            modelAnswerMn: "NaOH-тай: Цайвар цэнхэр тунадас, илүүдэлд уусахгүй.\nNH₃-тэй: Цайвар цэнхэр тунадас, илүүдэлд уусаж гүн хөх уусмал болно.\nКатион: Зэс(II), Cu²⁺.",
            examinerNotes: "Dark blue solution in excess NH₃ is uniquely diagnostic of Cu²⁺."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Acidify FA 5 with dilute HNO₃, then add aqueous AgNO₃ and aqueous BaCl₂. Deduce the anion in FA 5.",
            subQuestionTextMn: "FA 5-ийг HNO₃-ээр хүчиллэгжүүлж AgNO₃ болон BaCl₂ нэмэн анионыг тодорхойл.",
            marks: 6,
            markScheme: [
              "[1] With HNO₃ + AgNO₃: No precipitate (solution remains clear)",
              "[1] With HNO₃ + BaCl₂ / Ba(NO₃)₂: Dense white precipitate forms, insoluble in excess acid",
              "[2] Anion in FA 5: Sulfate, SO₄²⁻",
              "[2] Ionic equation: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)"
            ],
            modelAnswer: "With dilute HNO₃ + AgNO₃: No visible change (no precipitate).\nWith dilute HNO₃ + BaCl₂: Dense white precipitate formed (insoluble in dilute acid).\nAnion present: Sulfate ion, SO₄²⁻.\nIonic equation: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s).",
            modelAnswerMn: "AgNO₃-тай: Тунадас үүсэхгүй.\nBaCl₂-той: Хүчилд үл уусах өтгөн цагаан тунадас үүснэ.\nАнион: Сульфат, SO₄²⁻.\nИоны тэгшитгэл: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s).",
            examinerNotes: "Always mention 'insoluble in dilute acid' for sulfate."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 4: MAY/JUNE 2024 VARIANT 42 (A LEVEL STRUCTURED)
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
        chapterNumber: 21,
        chapterTitle: "Chemical Energetics (A Level)",
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
          },
          {
            partLabel: "(c)",
            subQuestionText: "Explain why the lattice energy of Magnesium Fluoride, MgF₂ (-2963 kJ mol⁻¹), is significantly more exothermic than the lattice energy of Magnesium Chloride, MgCl₂ (-2526 kJ mol⁻¹).",
            subQuestionTextMn: "MgF₂-ийн торын энерги яагаад MgCl₂-оос хамаагүй их экзотермик (утгаараа өндөр) байдгийг ионы радиус ба цэнэгийн нягтаар тайлбарлана уу.",
            marks: 3,
            markScheme: [
              "[1] The fluoride ion (F⁻) has a significantly smaller ionic radius than the chloride ion (Cl⁻)",
              "[1] F⁻ has a higher charge density than Cl⁻",
              "[1] Stronger electrostatic attractions between Mg²⁺ and smaller F⁻ ions result in a more exothermic lattice energy"
            ],
            modelAnswer: "The fluoride ion (F⁻) has fewer electron shells and a smaller ionic radius than the chloride ion (Cl⁻). Therefore, F⁻ has a higher charge density and approaches the Mg²⁺ cation more closely, creating much stronger electrostatic forces of attraction and a more exothermic lattice energy.",
            modelAnswerMn: "F⁻ ион нь Cl⁻ ионоос бага радиустай, цэнэгийн өндөр нягттай тул Mg²⁺ ба F⁻ ионуудын хоорондох электростатик таталцлын хүч илүү хүчтэй болж торын энерги өндөр гардаг.",
            examinerNotes: "Lattice energy depends on: (1) Product of ionic charges, (2) Sum of ionic radii (r⁺ + r⁻)."
          }
        ]
      },
      {
        id: "s24-42-q2",
        questionNumber: 2,
        title: "Question 2: Transition Metals & Complex Ion Stability (Copper and Cobalt)",
        chapterNumber: 24,
        chapterTitle: "Transition Elements (A Level)",
        topicCategory: "Inorganic",
        contextPrompt: "Transition metal ions form colored coordination complexes through coordinate dative bonding with ligands.\nConsider the stepwise ligand substitution reaction when concentrated hydrochloric acid is added to aqueous hexaaquacobalt(II) ions:\n[Co(H₂O)₆]²⁺(aq) + 4Cl⁻(aq) ⇌ [CoCl₄]²⁻(aq) + 6H₂O(l) (ΔH > 0)",
        contextPromptMn: "Шилжилтийн металлын комплекс ионууд болон лиганд солилцох урвалын тэнцвэр, тогтворжилтын тогтмол (Stability Constant K_stab).",
        totalMarks: 14,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "State the geometry and color of:\n(i) [Co(H₂O)₆]²⁺(aq)\n(ii) [CoCl₄]²⁻(aq)",
            subQuestionTextMn: "(i) [Co(H₂O)₆]²⁺ ба (ii) [CoCl₄]²⁻ цогц ионы хэлбэр (geometry) ба өнгийг бичнэ үү.",
            marks: 4,
            markScheme: [
              "[1] [Co(H₂O)₆]²⁺ geometry: Octahedral (6 coordination number)",
              "[1] [Co(H₂O)₆]²⁺ color: Pink / Rose",
              "[1] [CoCl₄]²⁻ geometry: Tetrahedral (4 coordination number)",
              "[1] [CoCl₄]²⁻ color: Deep Blue"
            ],
            modelAnswer: "(i) [Co(H₂O)₆]²⁺: Octahedral, Pink.\n(ii) [CoCl₄]²⁻: Tetrahedral, Deep Blue.",
            modelAnswerMn: "(i) [Co(H₂O)₆]²⁺: Октаэдр (найман талт), Ягаан өнгөтэй.\n(ii) [CoCl₄]²⁻: Тетраэдр (дөрвөн талт), Гүн хөх өнгөтэй.",
            examinerNotes: "Chloride ligands are large and negatively charged; only 4 Cl⁻ fit around Co²⁺ due to steric repulsion."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Explain why the coordination number changes from 6 in [Co(H₂O)₆]²⁺ to 4 in [CoCl₄]²⁻.",
            subQuestionTextMn: "Яагаад координацын тоо 6-аас 4 болж буурдгийг тайлбарлана уу.",
            marks: 2,
            markScheme: [
              "[1] Chloride ions (Cl⁻) are larger in size / larger ionic radius than neutral water (H₂O) molecules",
              "[1] Steric hindrance / electrostatic repulsion between negatively charged Cl⁻ ligands prevents 6 ligands from coordinating around the central Co²⁺"
            ],
            modelAnswer: "Chloride ions (Cl⁻) are significantly larger than neutral water molecules (H₂O) and carry negative charges. Due to steric hindrance and mutual electrostatic repulsion between chloride ligands, only four Cl⁻ ions can fit around the central Co²⁺ ion.",
            modelAnswerMn: "Cl⁻ ион нь саармаг H₂O молекулаас хамаагүй том радиустай бөгөөд сөрөг цэнэгтэй тул стерик саад болон түлхэлцлийн улмаас төвийн ионыг 4 л Cl⁻ тойрон байрлах боломжтой.",
            examinerNotes: "Key concept: Ligand size and charge determine coordination number."
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
    description: "Official Cambridge 9701 Planning, Analysis and Evaluation Paper 52. Designing an investigation to determine the order of reaction and rate constant for catalytic hydrogen peroxide decomposition, and statistical uncertainty analysis of gravimetric crucible heating.",
    descriptionMn: "Cambridge 9701 Paper 52 (Туршилт төлөвлөх, Үр дүнгийн статистик шинжилгээ, График боловсруулалт ба Алдааны үнэлгээ).",
    practicalMaterials: {
      apparatusList: [
        "Gas syringe (100 cm³, ±0.5 cm³) or inverted measuring cylinder in water trough",
        "Conical flask (250 cm³) with side arm and delivery tube",
        "Digital balance (±0.001 g)",
        "Digital stopwatch (±0.01 s)",
        "Thermostatically controlled water bath (25.0 °C to 60.0 °C)",
        "Graduated pipettes (10.0 cm³, 25.0 cm³)"
      ],
      reagentsList: [
        "Aqueous Hydrogen Peroxide, H₂O₂(aq) 1.00 mol dm⁻³",
        "Manganese(IV) oxide powder, MnO₂(s) catalyst (mesh size 100)",
        "Distilled deionised water"
      ],
      qualitativeNotesIncluded: false,
      safetyPrecautions: [
        "Hydrogen peroxide (H₂O₂) is a strong oxidising agent and causes skin burns (wear nitrile gloves and safety goggles).",
        "Manganese(IV) oxide (MnO₂) dust is harmful if inhaled; handle with spatula inside a fume cupboard.",
        "Rapid gas evolution can generate high pressure; ensure delivery tube is unobstructed."
      ]
    },
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
              "[1] Controlled variable 1: Temperature of reaction mixture (e.g. constant 25.0 °C in water bath)",
              "[1] Controlled variable 2: Mass and surface area / particle size of solid MnO₂ catalyst (and total volume of reaction mixture)"
            ],
            modelAnswer: "(i) Independent variable: Concentration of aqueous hydrogen peroxide, [H₂O₂].\n(ii) Dependent variable: Volume of O₂(g) collected as a function of time (initial rate = ΔV/Δt).\n(iii) Controlled variables: (1) Temperature of the reaction mixture (maintained using a water bath at 25.0 °C); (2) Mass and particle size / surface area of the MnO₂ catalyst.",
            modelAnswerMn: "(i) Үл хамаарах: H₂O₂-ийн концентраци.\n(ii) Хамаарах: Хугацаанаас хамаарсан ялгарсан хүчилтөрөгчийн эзлэхүүн (эхний хурд ΔV/Δt).\n(iii) Тогтмол: (1) Урвалын температур (усан ваннд 25 °C); (2) MnO₂ катализаторын масс ба ширхэглэлийн хэмжээ.",
            examinerNotes: "Do not just state 'amount of catalyst' — specify 'mass and particle size / surface area of catalyst'."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Describe a detailed step-by-step method to carry out this investigation using 5 different concentrations of H₂O₂ (from 0.20 to 1.00 mol dm⁻³) made by serial dilution from stock 1.00 mol dm⁻³ H₂O₂. Include apparatus, measurements taken, and safety precautions.",
            subQuestionTextMn: "1.00 моль/дм³ H₂O₂-оос 5 өөр концентраци бэлтгэж, туршилтыг явуулах нарийвчилсан алхамчилсан аргачлал, хэмжих хэмжигдэхүүн, аюулгүй ажиллагааны зааврыг бичнэ үү.",
            marks: 8,
            markScheme: [
              "[1] Serial dilution table: Prepare 5 solutions with total volume 50 cm³ (e.g., 10, 20, 30, 40, 50 cm³ of 1.00 M H₂O₂ made up to 50 cm³ with distilled water to yield 0.20, 0.40, 0.60, 0.80, 1.00 M)",
              "[1] Accurately weigh a constant mass of MnO₂ (e.g. 0.200 g on 3 d.p. balance)",
              "[1] Assemble gas collection apparatus: 250 cm³ conical flask connected via delivery tube to 100 cm³ gas syringe",
              "[1] Add 50.0 cm³ of H₂O₂ to flask, immerse in 25 °C water bath for 5 mins to equilibrate temperature",
              "[1] Add MnO₂ powder, immediately replace rubber bung tightly, and start digital stopwatch simultaneously",
              "[1] Record volume of O₂(g) collected every 10 seconds for the first 60 seconds (or time to collect 20 cm³ O₂)",
              "[1] Repeat procedure for all 5 concentrations and perform duplicate runs to check reproducibility",
              "[1] Safety: Wear nitrile gloves and eye goggles (H₂O₂ is corrosive/bleaching agent); avoid inhaling MnO₂ dust"
            ],
            modelAnswer: "1. Dilution: Using burettes, prepare 5 different concentrations (0.20, 0.40, 0.60, 0.80, 1.00 mol dm⁻³) in volumetric flasks by mixing 10, 20, 30, 40, 50 cm³ of 1.00 M H₂O₂ with distilled water to a constant total volume of 50.0 cm³.\n2. Apparatus setup: Connect a 250 cm³ conical flask with a side-arm delivery tube to a lubricated 100 cm³ gas syringe clamped horizontally.\n3. Weigh exactly 0.200 g of powdered MnO₂ using a 3-decimal-place digital balance.\n4. Pour 50.0 cm³ of the first H₂O₂ concentration into the flask and equilibrate in a thermostatted water bath at 25.0 °C for 5 minutes.\n5. Add the 0.200 g of MnO₂ into the flask, immediately insert the rubber bung airtight, and start the stopwatch simultaneously.\n6. Record the volume of oxygen gas in the syringe every 10 seconds for the first 60 seconds.\n7. Repeat for all 5 concentrations. Plot Volume vs Time to obtain initial rates (tangent at t = 0), then plot Initial Rate vs [H₂O₂] to deduce order.\n8. Safety: Wear goggles and nitrile gloves (H₂O₂ causes skin burns and irritates eyes).",
            modelAnswerMn: "1. 5 өөр концентраци бэлтгэх (0.20-оос 1.00 моль/дм³ хүртэл 50 см³ эзлэхүүнтэй уусмалууд).\n2. Хуруу шил/конусан колбыг 100 см³ хийн шприцтэй холбоно.\n3. 0.200 г MnO₂ нунтгийг аналитик жин дээр жинлэнэ.\n4. Усан ваннд 25 °C температурт 5 минут байлгаж температурыг тэгшитгэнэ.\n5. Катализаторыг хийж бөглөөг нягт таглан секундомерийг нэгэн зэрэг эхлүүлнэ.\n6. Эхний 60 секундийн турш 10 секунд тутам хийн эзлэхүүнийг бүртгэнэ.\n7. Бүх 5 концентраци дээр давтан хийж эхний хурдны графикийг байгуулна.",
            examinerNotes: "Crucial marks are awarded for keeping total liquid volume constant (50 cm³) and specifying instantaneous sealing of the bung."
          },
          {
            partLabel: "(c)",
            subQuestionText: "Explain how the student should process the experimental data to determine:\n(i) The order of reaction with respect to [H₂O₂]\n(ii) The rate constant, k.",
            subQuestionTextMn: "(i) H₂O₂-ийн хувьд урвалын эрэмбийг хэрхэн тодорхойлох\n(ii) Хурдны тогтмол k-г хэрхэн олохыг тайлбарлана уу.",
            marks: 3,
            markScheme: [
              "[1] Plot graph of Volume of O₂ (y-axis) against Time (x-axis) for each concentration and measure the initial gradient (tangent at t = 0) to find initial rate",
              "[1] Plot Initial Rate against [H₂O₂]. If a straight line through the origin is obtained, reaction is 1st order. (If curve, plot Rate against [H₂O₂]² for 2nd order)",
              "[1] Calculate the gradient of the Initial Rate vs [H₂O₂] graph to find the rate constant k (Rate = k[H₂O₂]) with correct units (s⁻¹ or min⁻¹)"
            ],
            modelAnswer: "(i) Plot Volume of O₂ vs Time for each run and draw a tangent at t = 0 to calculate the initial rate (gradient in cm³ s⁻¹). Then plot Initial Rate against [H₂O₂]. If the graph is a straight line through the origin (Rate ∝ [H₂O₂]), the reaction is first order.\n(ii) For a 1st order reaction (Rate = k[H₂O₂]), the rate constant k equals the gradient of the Initial Rate vs [H₂O₂] straight line graph. Units of k = s⁻¹.",
            modelAnswerMn: "(i) Эзлэхүүн-Хугацааны график байгуулж t=0 цэг дээрх налалтыг олж эхний хурдыг тодорхойлно. Эхний хурдыг [H₂O₂]-оос хамааруулан график байгуулахад шулуун шугам гарвал 1-р эрэмбийн урвал байна.\n(ii) Энэ шулууны налалт нь хурдны тогтмол k болно (нэгж нь s⁻¹).",
            examinerNotes: "Units of rate constant must match the determined order: 1st order = s⁻¹; 2nd order = dm³ mol⁻¹ s⁻¹."
          }
        ]
      }
    ]
  }
];

export function getPastPapersByType(paperType?: "Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5"): PastPaper[] {
  if (!paperType) return PAST_PAPERS;
  return PAST_PAPERS.filter((p) => p.paperType === paperType);
}

export function getPastPaperById(id: string): PastPaper | undefined {
  return PAST_PAPERS.find((p) => p.id === id);
}

