import { PastPaper } from "../types";

export const PAPERS_2017_2019: PastPaper[] = [
  // ==========================================
  // PAPER 1: MAY/JUNE 2019 VARIANT 12 (MCQ)
  // ==========================================
  {
    id: "9701_s19_qp_12",
    title: "Cambridge 9701/12 May/June 2019",
    paperType: "Paper 1",
    year: 2019,
    series: "May/June",
    variant: "12",
    paperCode: "9701/12/M/J/19",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 31,
      B: 26,
      C: 22,
      D: 18,
      E: 14,
    },
    description: "Official Cambridge 9701 AS Level MCQ Paper 12 (May/June 2019). Tests Successive Ionisation Energies, Intermolecular Forces, and Alkene Polymerisation.",
    descriptionMn: "Cambridge 9701 2019 оны 5/6-р сарын Paper 12 (Дараалсан иончлолын энерги, молекул хоорондын хүч ба полимержилт).",
    mcqQuestions: [
      {
        id: "s19-12-q1",
        questionNumber: 1,
        chapterNumber: 2,
        chapterTitle: "Electrons in Atoms",
        topicCategory: "Physical",
        syllabusRef: "2.2 Successive Ionisation Energies",
        questionText: "The first eight successive ionisation energies (in kJ mol⁻¹) of an element X are:\n1000, 2250, 3360, 4560, 7010, 8500, 27100, 31700.\nTo which group of the periodic table does element X belong?",
        options: [
          "Group 16 (Group 6)",
          "Group 14 (Group 4)",
          "Group 15 (Group 5)",
          "Group 17 (Group 7)"
        ],
        correctOptionIndex: 0,
        explanationEn: "Look for the largest relative jump between successive values. Between IE₆ (8500 kJ/mol) and IE₇ (27100 kJ/mol), the value jumps by more than 3-fold (+18600 kJ/mol). This huge jump signifies removing an electron from an inner quantum shell closer to the nucleus. Therefore, element X has 6 valence electrons, placing it in Group 16.",
        explanationMn: "6 дахь (8500) ба 7 дахь (27100) иончлолын энергийн хооронд огцом үсрэлт гарсан нь цөмд илүү ойр дотоод бүрхүүлээс электрон салгаж байгааг илтгэнэ. Иймд гадаад түвшиндээ 6 электронтой тул 16-р бүлгийн элемент юм.",
        examinerTip: "Count the number of electrons removed BEFORE the first major jump to find the group number (6 valence e⁻ = Group 16).",
        difficulty: "Standard"
      },
      {
        id: "s19-12-q2",
        questionNumber: 2,
        chapterNumber: 4,
        chapterTitle: "Chemical Bonding",
        topicCategory: "Physical",
        syllabusRef: "4.4 Intermolecular Forces & Boiling Points",
        questionText: "Which sequence lists the compounds in order of increasing boiling point (lowest to highest)?",
        options: [
          "CH₃CH₂CH₃ < CH₃CH₂CHO < CH₃CH₂CH₂OH",
          "CH₃CH₂CH₂OH < CH₃CH₂CHO < CH₃CH₂CH₃",
          "CH₃CH₂CHO < CH₃CH₂CH₃ < CH₃CH₂CH₂OH",
          "CH₃CH₂CH₃ < CH₃CH₂CH₂OH < CH₃CH₂CHO"
        ],
        correctOptionIndex: 0,
        explanationEn: "Propane (CH₃CH₂CH₃) only has weak instantaneous dipole-induced dipole (London dispersion) forces (lowest BP). Propanal (CH₃CH₂CHO) has permanent dipole-dipole attractions in addition to dispersion forces. Propan-1-ol (CH₃CH₂CH₂OH) forms strong intermolecular hydrogen bonding via its –OH group (highest BP).",
        explanationMn: "Пропан зөвхөн сул ван-дер-Ваальсын хүчтэй (хамгийн бага). Пропаналь байнгын диполь-диполийн хүчтэй. Пропанол нь хүчтэй устөрөгчийн холбоо үүсгэдэг тул хамгийн өндөр буцлах температуртай.",
        examinerTip: "Strength order: London dispersion < Permanent dipole < Hydrogen bonds.",
        difficulty: "Standard"
      }
    ]
  },

  // ==========================================
  // PAPER 2: FEB/MARCH 2019 VARIANT 22 (SPRING 2019 "ХАВАР")
  // ==========================================
  {
    id: "9701_m19_qp_22",
    title: "Cambridge 9701/22 Feb/March 2019 (Spring AS Theory)",
    paperType: "Paper 2",
    year: 2019,
    series: "Feb/March",
    variant: "22",
    paperCode: "9701/22/F/M/19",
    timeAllowedMinutes: 75,
    totalMarks: 60,
    gradeThresholds: {
      A: 41,
      B: 34,
      C: 28,
      D: 22,
      E: 16,
    },
    description: "Official Cambridge 9701 AS Level Theory Paper 22 (Feb/March 2019 Spring). Questions on Solid Halide reactions with concentrated Sulfuric Acid, and Hess's Law combustion cycle.",
    descriptionMn: "Cambridge 9701 2019 оны Хаврын Paper 22 онолын шалгалт (Галид конц H₂SO₄-тэй харилцан үйлчлэх исэлдэн-ангижрах урвал ба Гессийн хууль).",
    theoryQuestions: [
      {
        id: "m19-22-q1",
        questionNumber: 1,
        title: "Question 1: Reactions of Solid Halides with Concentrated H₂SO₄",
        chapterNumber: 12,
        chapterTitle: "Group 17 (Halogens)",
        topicCategory: "Inorganic",
        contextPrompt: "When concentrated sulfuric acid is added to separate solid samples of sodium chloride (NaCl) and sodium iodide (NaI), distinctly different reactions are observed.\nNaCl produces only steamy acidic fumes, whereas NaI produces purple vapors, yellow solid, and a bad-egg smelling gas.",
        contextPromptMn: "Хатуу NaCl ба NaI дээр өтгөн хүхрийн хүчил (H₂SO₄) дусаахад ялгаатай урвал явагддаг.",
        totalMarks: 10,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Write a balanced equation for the reaction of NaCl with concentrated H₂SO₄. Explain why this is not a redox reaction.",
            subQuestionTextMn: "NaCl өтгөн H₂SO₄-тэй урвалд орох тэгшитгэлийг бичиж, яагаад энэ нь исэлдэн-ангижрах урвал БИШ болохыг тайлбарла.",
            marks: 3,
            markScheme: [
              "[1] NaCl(s) + H₂SO₄(l) → NaHSO₄(s) + HCl(g)",
              "[1] Steamy fumes of hydrogen chloride (HCl) produced.",
              "[1] Not a redox reaction because no oxidation numbers change (Cl remains -1, S remains +6, H remains +1, O remains -2); it is an acid-base / proton transfer reaction."
            ],
            modelAnswer: "Equation: NaCl(s) + H₂SO₄(l) → NaHSO₄(s) + HCl(g).\nThis is an acid-base (proton transfer) reaction rather than a redox reaction because the oxidation states of all elements remain completely unchanged (Cl is -1 and S is +6 throughout). Chloride ions are not strong enough reducing agents to reduce H₂SO₄.",
            modelAnswerMn: "NaCl + H₂SO₄ → NaHSO₄ + HCl.\nБүх элементийн исэлдэхүйн зэрэг өөрчлөгдөөгүй (Cl нь -1, S нь +6 хэвээр) тул исэлдэн-ангижрах урвал биш, протон солилцох хүчил-суурийн урвал юм.",
            examinerNotes: "Cl⁻ is too weak a reducing agent to reduce concentrated H₂SO₄."
          },
          {
            partLabel: "(b)",
            subQuestionText: "With NaI, iodide ions reduce concentrated H₂SO₄ to sulfur dioxide (SO₂), sulfur (S), and hydrogen sulfide (H₂S).\n(i) State the oxidation state of sulfur in H₂S.\n(ii) Explain why iodide ions can reduce H₂SO₄ to H₂S whereas chloride ions cannot.",
            subQuestionTextMn: "(i) H₂S дахь хүхрийн исэлдэхүйн зэргийг бич.\n(ii) Iodide ион (I⁻) нь H₂SO₄-ийг ангижруулж чаддаг атал хлорид ион (Cl⁻) яагаад ангижруулж чаддаггүйн шалтгааныг тайлбарла.",
            marks: 4,
            markScheme: [
              "[1] Oxidation state of S in H₂S = -2",
              "[1] Iodide ion (I⁻) has a significantly larger ionic radius than chloride ion (Cl⁻).",
              "[1] The outer electrons in I⁻ are further from the nucleus and experience more shielding.",
              "[1] I⁻ loses electrons much more easily than Cl⁻, making iodide a much stronger reducing agent."
            ],
            modelAnswer: "(i) -2.\n(ii) The iodide ion (I⁻) has more electron shells and a much larger ionic radius than the chloride ion (Cl⁻). Its valence electrons are further from the nucleus and more shielded, so electrostatic attraction from the nucleus is weaker. Consequently, I⁻ loses electrons much more readily than Cl⁻, making it a far stronger reducing agent capable of reducing sulfur from +6 to -2 (in H₂S).",
            modelAnswerMn: "(i) -2.\n(ii) I⁻ ион нь Cl⁻-ээс том ионы радиустай, олон электрон бүрхүүлтэй тул гадаад электроноо цөм нь сул татаж, электроноо хялбар алддаг. Иймд I⁻ нь хүчтэй ангижруулагч болж хүхрийг +6-аас -2 (H₂S) хүртэл гүн ангижруулдаг.",
            examinerNotes: "Trend down Group 17: Reducing power of halide ions INCREASES: F⁻ < Cl⁻ < Br⁻ < I⁻."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 4: MAY/JUNE 2019 VARIANT 42 (A LEVEL THEORY)
  // ==========================================
  {
    id: "9701_s19_qp_42",
    title: "Cambridge 9701/42 May/June 2019",
    paperType: "Paper 4",
    year: 2019,
    series: "May/June",
    variant: "42",
    paperCode: "9701/42/M/J/19",
    timeAllowedMinutes: 120,
    totalMarks: 100,
    gradeThresholds: {
      A: 64,
      B: 54,
      C: 44,
      D: 35,
      E: 26,
    },
    description: "Official Cambridge 9701 A Level Theory Paper 42 (May/June 2019). Focuses on First-Order Kinetics half-lives and Relative Reactivity of Acyl Chlorides vs Chloroarenes.",
    descriptionMn: "Cambridge 9701 2019 оны 5/6-р сарын Paper 42 A Level онолын шалгалт.",
    theoryQuestions: [
      {
        id: "s19-42-q1",
        questionNumber: 1,
        title: "Question 1: Relative Rates of Hydrolysis of Halogen Compounds",
        chapterNumber: 26,
        chapterTitle: "Carboxylic Acids & Acyl Chlorides",
        topicCategory: "Organic",
        contextPrompt: "Compare the relative ease of hydrolysis of three chlorine-containing compounds with water at room temperature:\n1. Ethanoyl chloride, CH₃COCl\n2. 1-chlorobutane, CH₃CH₂CH₂CH₂Cl\n3. Chlorobenzene, C₆H₅Cl",
        contextPromptMn: "Эссе хлорид, 1-хлорбутан ба хлорбензолын устай харилцан үйлчлэх гидролизийн харьцангуй хурд, идэвхийг тайлбарла.",
        totalMarks: 9,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Rank these three compounds in order of speed of hydrolysis (fastest to slowest / unreactive).",
            subQuestionTextMn: "Гидролизод орох хурдаар нь хамгийн хурднаас хамгийн удаан/урвалд ордоггүй дарааллаар нь эрэмбэл.",
            marks: 2,
            markScheme: [
              "[1] Ethanoyl chloride > 1-chlorobutane > Chlorobenzene",
              "[1] Chlorobenzene does not react at room temperature (completely inert to hydrolysis)."
            ],
            modelAnswer: "Fastest: Ethanoyl chloride (CH₃COCl)\nIntermediate: 1-chlorobutane (requires heating under reflux with NaOH)\nSlowest / Inert: Chlorobenzene (no reaction with water).",
            modelAnswerMn: "Хамгийн хурдан: Этанойлхлорид\nДунд: 1-хлорбутан\nУрвалд ордоггүй: Хлорбензол.",
            examinerNotes: "Ethanoyl chloride hydrolyses vigorously in cold water."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Explain why ethanoyl chloride reacts violently with water whereas chlorobenzene does not react at all.",
            subQuestionTextMn: "Этанойлхлорид яагаад устай маш ширүүн урвалд ордог, харин хлорбензол яагаад огт урвалд ордоггүй шалтгааныг электрон бүтэцтэй нь холбон тайлбарла.",
            marks: 5,
            markScheme: [
              "[1] In ethanoyl chloride, the carbonyl carbon is bonded to two highly electronegative atoms (oxygen and chlorine).",
              "[1] This creates a very large partial positive charge (δ+) on the carbon, making it extremely attractive to nucleophilic attack by lone pairs on water molecules.",
              "[1] In chlorobenzene, a lone pair of electrons on the chlorine atom overlaps and delocalises into the benzene ring π-electron system.",
              "[1] This gives the C–Cl bond partial double bond character, making it substantially stronger and shorter.",
              "[1] Also, the benzene ring π-electron cloud repels approaching nucleophiles (water)."
            ],
            modelAnswer: "In ethanoyl chloride, the carbonyl carbon is attached to both oxygen and chlorine. Their combined electron-withdrawing effects give the carbon a strong δ+ charge, facilitating rapid nucleophilic addition-elimination by water.\nIn chlorobenzene, one of the p-orbital lone pairs on chlorine delocalises into the benzene aromatic π-system. This imparts partial double bond character to the C–Cl bond, greatly increasing its bond strength and preventing nucleophilic substitution.",
            modelAnswerMn: "Этанойлхлоридын карбонилын нүүрстөрөгч нь O ба Cl гэсэн 2 хүчтэй цахилгаан сөрөг атомтай холбогдсон тул өндөр δ+ цэнэгтэй болж усны нуклеофиль довтолгоонд маш хялбар өртдөг.\nХлорбензолд хлорын сул электрон хос нь бензолын 6 π-системд татагдан делокализацлагдаж, C–Cl холбоо нь давхар холбооны шинж чанартай болж маш бат бөх болдог тул тасардаггүй.",
            examinerNotes: "Mention 'partial double bond character of C-Cl bond' for full marks on chlorobenzene."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 3: MAY/JUNE 2018 VARIANT 31 (PRACTICAL)
  // ==========================================
  {
    id: "9701_s18_qp_31",
    title: "Cambridge 9701/31 May/June 2018 (Practical)",
    paperType: "Paper 3",
    year: 2018,
    series: "May/June",
    variant: "31",
    paperCode: "9701/31/M/J/18",
    timeAllowedMinutes: 120,
    totalMarks: 40,
    gradeThresholds: {
      A: 31,
      B: 27,
      C: 23,
      D: 19,
      E: 15,
    },
    description: "Official Cambridge 9701 Advanced Practical Skills Paper 31 (May/June 2018). Potassium manganate(VII) redox titration of iron(II) ammonium sulfate.",
    descriptionMn: "Cambridge 9701 2018 оны 5/6-р сарын Практик шалгалт Paper 31 (KMnO₄-өөр Fe²⁺-ийг тодорхойлох исэлдэн-ангижрах титрлэлт).",
    practicalMaterials: {
      apparatusList: [
        "50.0 cm³ burette",
        "25.0 cm³ pipette",
        "Conical flasks"
      ],
      reagentsList: [
        "FA 1: Standard aqueous KMnO₄ 0.0200 mol dm⁻³",
        "FA 2: Iron(II) ammonium sulfate solution (Fe²⁺) acidified with 1.0 M H₂SO₄",
        "No indicator needed (self-indicating KMnO₄)"
      ],
      qualitativeNotesIncluded: true
    },
    theoryQuestions: [
      {
        id: "s18-31-q1",
        questionNumber: 1,
        title: "Question 1: Redox Titration of Fe²⁺ with KMnO₄",
        chapterNumber: 31,
        chapterTitle: "Paper 3 Practical Skills",
        topicCategory: "Practical",
        contextPrompt: "MnO₄⁻(aq) + 8H⁺(aq) + 5Fe²⁺(aq) → Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l)\n25.0 cm³ of acidified Fe²⁺ solution (FA 2) was titrated with 0.0200 mol dm⁻³ KMnO₄ (FA 1).\nThe mean titre was 22.50 cm³ (first permanent pale pink colour).",
        contextPromptMn: "25.0 см³ Fe²⁺ уусмалыг 0.0200 моль/дм³ KMnO₄-өөр титрлэхэд дундаж эзлэхүүн 22.50 см³ гарчээ.",
        totalMarks: 10,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Why is no external indicator required for this titration?",
            subQuestionTextMn: "Энэ титрлэлтэд гаднаас индикатор нэмэх шаардлагагүйн учир юу вэ?",
            marks: 2,
            markScheme: [
              "[1] KMnO₄ is self-indicating.",
              "[1] As soon as all Fe²⁺ has reacted, the next drop of intensely purple MnO₄⁻ imparts a permanent pale pink colour to the conical flask."
            ],
            modelAnswer: "Potassium manganate(VII) is self-indicating. Deep purple MnO₄⁻ is reduced to virtually colourless Mn²⁺. The instant all Fe²⁺ has reacted, one excess drop of KMnO₄ turns the solution permanently pale pink.",
            modelAnswerMn: "KMnO₄ нь өөрөө индикатор болдог. Бүх Fe²⁺ урвалд орж дуусмагц илүү гарсан ганц дусал нил ягаан KMnO₄ нь уусмалыг байнгын цайвар ягаан өнгөтэй болгодог.",
            examinerNotes: "End point is the first permanent faint pink colour."
          },
          {
            partLabel: "(b)",
            subQuestionText: "Calculate the concentration of Fe²⁺ in FA 2 in mol dm⁻³.",
            subQuestionTextMn: "FA 2 дахь Fe²⁺-ийн молийн концентрацийг ол.",
            marks: 4,
            markScheme: [
              "[1] n(MnO₄⁻) = (0.0200 × 22.50) / 1000 = 4.50 × 10⁻⁴ mol",
              "[1] 1:5 stoichiometry: n(Fe²⁺) = 5 × (4.50 × 10⁻⁴) = 2.25 × 10⁻³ mol",
              "[1] Concentration of Fe²⁺ = 2.25 × 10⁻³ / 0.0250 = 0.0900 mol dm⁻³",
              "[1] 3 significant figures"
            ],
            modelAnswer: "n(MnO₄⁻) = 0.0200 × (22.50 / 1000) = 4.50 × 10⁻⁴ mol.\nFrom the 1:5 stoichiometric ratio: n(Fe²⁺) = 5 × 4.50 × 10⁻⁴ = 2.25 × 10⁻³ mol.\nConcentration = 2.25 × 10⁻³ mol / 0.0250 dm³ = 0.0900 mol dm⁻³.",
            modelAnswerMn: "n(MnO₄⁻) = 4.50 × 10⁻⁴ моль.\n1:5 харьцаа: n(Fe²⁺) = 5 × 4.50 × 10⁻⁴ = 2.25 × 10⁻³ моль.\nКонцентраци = 0.0900 моль/дм³.",
            examinerNotes: "Don't forget the factor of 5 for Fe²⁺."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 5: OCT/NOV 2018 VARIANT 52 (PLANNING & ANALYSIS)
  // ==========================================
  {
    id: "9701_w18_qp_52",
    title: "Cambridge 9701/52 Oct/Nov 2018",
    paperType: "Paper 5",
    year: 2018,
    series: "Oct/Nov",
    variant: "52",
    paperCode: "9701/52/O/N/18",
    timeAllowedMinutes: 75,
    totalMarks: 30,
    gradeThresholds: {
      A: 21,
      B: 18,
      C: 15,
      D: 12,
      E: 10,
    },
    description: "Official Cambridge 9701 Paper 52 Planning & Evaluation (Oct/Nov 2018). Continuous mass-loss measurement of calcium carbonate reacting with hydrochloric acid.",
    descriptionMn: "Cambridge 9701 2018 оны 10/11-р сарын Paper 52 (Шохойн чулуу ба хүчлийн урвалын масс алдагдлаар хурд судлах төлөвлөлт).",
    theoryQuestions: [
      {
        id: "w18-52-q1",
        questionNumber: 1,
        title: "Question 1: Monitoring Reaction Rate by Continuous Mass Loss",
        chapterNumber: 32,
        chapterTitle: "Paper 5 Planning & Analysis",
        topicCategory: "Practical",
        contextPrompt: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\nA student places a conical flask containing 50 cm³ of 1.0 M HCl onto a digital balance (±0.01 g). After adding 5.0 g of marble chips, a loose cotton wool plug is placed in the neck and the mass is logged every 30 seconds.",
        contextPromptMn: "Дижитал жин дээрх колбонд 5.0 г гантигийн үйрмэг ба 1.0 М HCl хийж, хөвөн бөглөө тавин 30 секунд тутам массын бууралтыг бүртгэжээ.",
        totalMarks: 8,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Explain the purpose of placing a loose cotton wool plug in the neck of the flask.",
            subQuestionTextMn: "Колбоны хүзүүнд хөвөн бөглөө тавьсны зорилгыг тайлбарлана уу.",
            marks: 2,
            markScheme: [
              "[1] Allows carbon dioxide (CO₂) gas to escape freely from the flask.",
              "[1] Prevents liquid droplets / acid spray from escaping the flask, which would cause an artificially high mass loss."
            ],
            modelAnswer: "The cotton wool plug allows carbon dioxide gas to escape freely while preventing acid spray or liquid droplets from escaping during effervescence, ensuring that only gas loss is measured.",
            modelAnswerMn: "Хөвөн бөглөө нь CO₂ хийг саадгүй гадагшлуулахын зэрэгцээ оргилуун урвалын үед хүчлийн дусал цацагдан гадагшлахаас сэргийлж, зөвхөн хийн алдагдлыг бодитой хэмжих боломжийг олгодог.",
            examinerNotes: "Must mention preventing acid spray/droplets."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 1: MAY/JUNE 2017 VARIANT 12 (MCQ)
  // ==========================================
  {
    id: "9701_s17_qp_12",
    title: "Cambridge 9701/12 May/June 2017",
    paperType: "Paper 1",
    year: 2017,
    series: "May/June",
    variant: "12",
    paperCode: "9701/12/M/J/17",
    timeAllowedMinutes: 75,
    totalMarks: 40,
    gradeThresholds: {
      A: 32,
      B: 27,
      C: 22,
      D: 18,
      E: 14,
    },
    description: "Official Cambridge 9701 AS Level MCQ Paper 12 (May/June 2017). Tests Coordinate Bonding in Al₂Cl₆, Catalytic Converters, and Electrophilic Addition.",
    descriptionMn: "Cambridge 9701 2017 оны 5/6-р сарын Paper 12 (Al₂Cl₆ дахь донор-акцепторын холбоо, автомашины катализатор, органик урвалууд).",
    mcqQuestions: [
      {
        id: "s17-12-q1",
        questionNumber: 1,
        chapterNumber: 4,
        chapterTitle: "Chemical Bonding",
        topicCategory: "Physical",
        syllabusRef: "4.1 Coordinate (Dative) Covalent Bonding",
        questionText: "How many coordinate (dative covalent) bonds are present in one molecule of dimerised aluminium chloride, Al₂Cl₆?",
        options: [
          "2",
          "1",
          "4",
          "6"
        ],
        correctOptionIndex: 0,
        explanationEn: "In Al₂Cl₆, each aluminium atom forms 3 standard single covalent bonds to terminal chlorines. To complete their octets, two bridging chlorine atoms each donate a lone pair to the opposite electron-deficient aluminium atom, forming exactly 2 coordinate bonds.",
        explanationMn: "Al₂Cl₆ молекулд хоёр bridging хлорын атом тус бүр өөрийн сул хос электроноо нөгөө Al атомын хоосон орбиталд өгч нийт 2 ширхэг координацын (донор-акцептор) холбоо үүсгэдэг.",
        examinerTip: "Represented as: Cl₂Al – Cl → AlCl₂ with two arrows pointing inward from bridging Cl to Al.",
        difficulty: "Standard"
      },
      {
        id: "s17-12-q2",
        questionNumber: 2,
        chapterNumber: 13,
        chapterTitle: "Nitrogen & Sulfur",
        topicCategory: "Inorganic",
        syllabusRef: "13.3 Catalytic Converters & Atmospheric Pollutants",
        questionText: "Which chemical equation represents the reaction occurring in an automobile catalytic converter to remove toxic pollutant gases?",
        options: [
          "2CO + 2NO → 2CO₂ + N₂",
          "CO + NO₂ → CO₂ + NO",
          "2NO + O₂ → 2NO₂",
          "C + O₂ → CO₂"
        ],
        correctOptionIndex: 0,
        explanationEn: "Catalytic converters use platinum/rhodium/palladium catalysts to convert toxic carbon monoxide (CO) and nitrogen monoxide (NO) into harmless carbon dioxide (CO₂) and nitrogen gas (N₂): 2CO + 2NO → 2CO₂ + N₂.",
        explanationMn: "Автомашины катализаторт хортой угаарын хий (CO) ба азотын оксидыг (NO) хоргүй хий болгон хувиргах 2CO + 2NO → 2CO₂ + N₂ урвал явагддаг.",
        examinerTip: "Remember both toxic reactants (CO and NO) are converted to non-toxic products (CO₂ and N₂).",
        difficulty: "Fundamental"
      }
    ]
  },

  // ==========================================
  // PAPER 2: FEB/MARCH 2017 VARIANT 22 (SPRING 2017 "ХАВАР")
  // ==========================================
  {
    id: "9701_m17_qp_22",
    title: "Cambridge 9701/22 Feb/March 2017 (Spring AS Theory)",
    paperType: "Paper 2",
    year: 2017,
    series: "Feb/March",
    variant: "22",
    paperCode: "9701/22/F/M/17",
    timeAllowedMinutes: 75,
    totalMarks: 60,
    gradeThresholds: {
      A: 40,
      B: 33,
      C: 27,
      D: 21,
      E: 15,
    },
    description: "Official Cambridge 9701 AS Level Theory Paper 22 (Feb/March 2017 Spring). Focuses on Group 2 Carbonate Thermal Decomposition and the Tri-iodomethane test.",
    descriptionMn: "Cambridge 9701 2017 оны Хаврын Paper 22 онолын шалгалт (2-р бүлгийн карбонатын дулааны тогтворжилт ба Трииодметан иодоформ сорил).",
    theoryQuestions: [
      {
        id: "m17-22-q1",
        questionNumber: 1,
        title: "Question 1: Thermal Stability of Group 2 Carbonates",
        chapterNumber: 11,
        chapterTitle: "Group 2",
        topicCategory: "Inorganic",
        contextPrompt: "Group 2 carbonates decompose when heated strongly according to:\nMCO₃(s) → MO(s) + CO₂(g)\nThe decomposition temperatures increase down the group: MgCO₃ (540 °C) to BaCO₃ (1360 °C).",
        contextPromptMn: "2-р бүлгийн карбонатуудын задралын температур бүлгийн дагуу Mg-аас Ba руу өсдөг.",
        totalMarks: 6,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Explain in terms of ionic charge and radius why magnesium carbonate decomposes at a much lower temperature than barium carbonate.",
            subQuestionTextMn: "MgCO₃ яагаад BaCO₃-оос хамаагүй бага температурт задардгийг ионы цэнэг ба радиустай холбон тайлбарла.",
            marks: 4,
            markScheme: [
              "[1] Mg²⁺ has a significantly smaller ionic radius than Ba²⁺ while both carry the same +2 charge.",
              "[1] Mg²⁺ has a much higher charge density than Ba²⁺.",
              "[1] The high charge density of Mg²⁺ strongly polarises (distorts) the electron cloud of the large carbonate ion (CO₃²⁻).",
              "[1] This weakens the C–O covalent bond within the carbonate ion, lowering the activation energy required to release CO₂."
            ],
            modelAnswer: "Mg²⁺ has a much smaller ionic radius than Ba²⁺ with the same 2+ charge, giving it a much higher charge density. Consequently, Mg²⁺ exerts a much stronger polarising effect on the large electron cloud of the carbonate ion (CO₃²⁻), weakening the C–O covalent bonds and causing it to break down at a much lower temperature.",
            modelAnswerMn: "Mg²⁺ нь Ba²⁺-тай ижил +2 цэнэгтэй боловч хамаагүй жижиг радиустай тул цэнэгийн нягт нь маш өндөр. Энэ нь том карбонат ионы (CO₃²⁻) электрон үүлийг хүчтэй туйлшруулан C–O холбоог сулруулдаг тул бага температурт задардаг.",
            examinerNotes: "Always mention high charge density of Mg²⁺ polarising the CO₃²⁻ electron cloud."
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAPER 4: MAY/JUNE 2017 VARIANT 42 (A LEVEL THEORY)
  // ==========================================
  {
    id: "9701_s17_qp_42",
    title: "Cambridge 9701/42 May/June 2017",
    paperType: "Paper 4",
    year: 2017,
    series: "May/June",
    variant: "42",
    paperCode: "9701/42/M/J/17",
    timeAllowedMinutes: 120,
    totalMarks: 100,
    gradeThresholds: {
      A: 66,
      B: 56,
      C: 46,
      D: 37,
      E: 28,
    },
    description: "Official Cambridge 9701 A Level Theory Paper 42 (May/June 2017). Born-Haber cycle for Sodium Chloride, and Amino Acid Zwitterion Isoelectric Points.",
    descriptionMn: "Cambridge 9701 2017 оны 5/6-р сарын Paper 42 A Level онол (Борн-Хабер цикл ба Аминхүчлийн цвиттерион, изоэлектрик цэг).",
    theoryQuestions: [
      {
        id: "s17-42-q1",
        questionNumber: 1,
        title: "Question 1: Born-Haber Cycle & Lattice Energy of Sodium Chloride",
        chapterNumber: 19,
        chapterTitle: "Lattice Energy & Born-Haber Cycles",
        topicCategory: "Physical",
        contextPrompt: "Consider the formation of sodium chloride from its elements:\nNa(s) + ½Cl₂(g) → NaCl(s)    ΔH°f = -411 kJ mol⁻¹\n• Enthalpy of atomisation of Na(s) = +107 kJ mol⁻¹\n• 1st Ionisation energy of Na = +496 kJ mol⁻¹\n• Bond enthalpy of Cl₂ = +242 kJ mol⁻¹\n• 1st Electron affinity of Cl = -349 kJ mol⁻¹",
        contextPromptMn: "NaCl-ийн үүсэхийн энтальпи ба холбогдох термодинамик өгөгдлийг ашиглан кристаллын торын энергийг олно уу.",
        totalMarks: 8,
        parts: [
          {
            partLabel: "(a)",
            subQuestionText: "Calculate the standard lattice energy of sodium chloride, ΔH°latt, in kJ mol⁻¹.",
            subQuestionTextMn: "Натрийн хлоридын стандарт кристаллын торын энерги ΔH°latt-ийг (кЖ/моль) тооцоолно уу.",
            marks: 4,
            markScheme: [
              "[1] Enthalpy of atomisation of chlorine = ½ × 242 = +121 kJ mol⁻¹",
              "[1] Energy of gaseous ions = +107 + 496 + 121 + (-349) = +375 kJ mol⁻¹",
              "[1] ΔH°latt = ΔH°f - 375 = -411 - 375",
              "[1] ΔH°latt = -786 kJ mol⁻¹"
            ],
            modelAnswer: "ΔH°at(Cl) = ½ × E(Cl–Cl) = ½ × 242 = +121 kJ mol⁻¹.\nSum of formation to gaseous ions = ΔH°at(Na) + IE₁(Na) + ΔH°at(Cl) + EA₁(Cl)\n= 107 + 496 + 121 - 349 = +375 kJ mol⁻¹.\nΔH°f = +375 + ΔH°latt\nΔH°latt = -411 - 375 = -786 kJ mol⁻¹.",
            modelAnswerMn: "ΔH°at(Cl) = 242 / 2 = 121 кЖ/моль.\nХийн ионуудын энтальпи = 107 + 496 + 121 - 349 = +375 кЖ/моль.\nΔH°latt = -411 - 375 = -786 кЖ/моль.",
            examinerNotes: "Halve the bond energy of Cl₂ because only ½ mole of Cl₂(g) is in the equation."
          }
        ]
      }
    ]
  }
];
