export interface BankQuestion {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  paperType: "Paper 1" | "Paper 2" | "Paper 3" | "Paper 4" | "Paper 5";
  paperCode: string; // e.g. "9701/12/M/J/23"
  questionNumber: string; // e.g. "Q4", "Q2(a)", "Q5(b)(i)"
  marks: number;
  difficulty: "Easy" | "Medium" | "Hard";
  topicCategory: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  title: string;
  titleMn: string;
  questionText: string;
  questionTextMn?: string;
  options?: [string, string, string, string]; // For Paper 1 MCQ
  correctAnswer?: string; // e.g. "B" or numeric/text
  correctOptionIndex?: number; // 0 for A, 1 for B, 2 for C, 3 for D
  markScheme: string[];
  markSchemeMn?: string[];
  modelAnswer: string;
  modelAnswerMn: string;
  examinerTip: string;
  examinerTipMn: string;
}

export const PAST_PAPER_QUESTIONS_BANK: BankQuestion[] = [
  // --- CHAPTER 1: ATOMIC STRUCTURE ---
  {
    id: "bank-ch1-q1",
    chapterNumber: 1,
    chapterTitle: "Atomic Structure",
    paperType: "Paper 1",
    paperCode: "9701/12/M/J/23",
    questionNumber: "Q1",
    marks: 1,
    difficulty: "Easy",
    topicCategory: "Physical",
    title: "Deflection of Subatomic Particles in Electric Field",
    titleMn: "Цахилгаан орон дахь эгэл бөөмсийн хазайлт",
    questionText: "A beam containing protons, neutrons, and electrons is passed between two parallel charged plates. Which particle undergoes the greatest angle of deflection?",
    questionTextMn: "Протон, нейтрон ба электрон агуулсан цацрагийг эсрэг цэнэгтэй хоёр ялтасны хоорондуур нэвтрүүлжээ. Аль бөөм хамгийн их өнцгөөр хазайх вэ?",
    options: [
      "Proton, deflected towards positive plate",
      "Neutron, deflected towards negative plate",
      "Electron, deflected towards positive plate",
      "Electron, deflected towards negative plate",
    ],
    correctOptionIndex: 2,
    correctAnswer: "C",
    markScheme: [
      "[1] C is correct: Angle of deflection is proportional to charge/mass ratio (q/m). Electrons have tiny mass (~1/1836 u) so greatest deflection towards (+) plate.",
    ],
    modelAnswer: "C: Electron, deflected towards the positive plate due to its negative charge and extremely small mass (~1/1836 u).",
    modelAnswerMn: "C: Электрон нь маш бага масстай (~1/1836 u) ба сөрөг цэнэгтэй тул эерэг ялтас руу хамгийн их өнцгөөр хазайна.",
    examinerTip: "Remember angle of deflection ∝ charge/mass. Electrons deflect much more than protons despite having the same magnitude of charge.",
    examinerTipMn: "Хазайлтын өнцөг нь цэнэг/массын харьцаанаас шууд хамаарна. Электрон ба протон адил цэнэгтэй боловч электрон 1836 дахин хөнгөн тул илүү их хазайна.",
  },
  {
    id: "bank-ch1-q2",
    chapterNumber: 1,
    chapterTitle: "Atomic Structure",
    paperType: "Paper 2",
    paperCode: "9701/22/F/M/24",
    questionNumber: "Q1(a)",
    marks: 3,
    difficulty: "Medium",
    topicCategory: "Physical",
    title: "Deducing Subatomic Particles in Chromium Isotope Ion",
    titleMn: "Хромын изотопын ион дахь эгэл бөөмийн тоог олох",
    questionText: "Complete the table for the ion ⁵³₂₄Cr³⁺:\n(i) Number of protons\n(ii) Number of neutrons\n(iii) Number of electrons",
    questionTextMn: "⁵³₂₄Cr³⁺ ионы эгэл бөөмийн тоог тодорхойл:\n(i) Протоны тоо\n(ii) Нейтроны тоо\n(iii) Электроны тоо",
    markScheme: [
      "[1] Protons = 24 (Atomic number Z)",
      "[1] Neutrons = 53 - 24 = 29",
      "[1] Electrons = 24 - 3 = 21 (due to 3+ charge)",
    ],
    modelAnswer: "Protons = 24; Neutrons = 29; Electrons = 21",
    modelAnswerMn: "Протон = 24; Нейтрон = 29 (53 - 24); Электрон = 21 (24 - 3)",
    examinerTip: "Remember to subtract the positive charge from atomic number for cations: e⁻ = Z - 3.",
    examinerTipMn: "Катионы электроныг олохдоо атомын дугаараас эерэг цэнэгийн утгыг хасаж тооцно: 24 - 3 = 21.",
  },

  // --- CHAPTER 2: ELECTRONS IN ATOMS ---
  {
    id: "bank-ch2-q1",
    chapterNumber: 2,
    chapterTitle: "Electrons in Atoms",
    paperType: "Paper 1",
    paperCode: "9701/11/O/N/23",
    questionNumber: "Q2",
    marks: 1,
    difficulty: "Medium",
    topicCategory: "Physical",
    title: "Electronic Configuration of Transition Metal Ion Fe³⁺",
    titleMn: "Fe³⁺ ионы электрон тохиргоо",
    questionText: "What is the full electronic configuration of the iron(III) ion, Fe³⁺? (Atomic number of Fe = 26)",
    questionTextMn: "Төмөр(III) ионы (Fe³⁺) бүтэн электрон тохиргоог сонго. (Fe-ийн атомын дугаар = 26)",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s¹",
    ],
    correctOptionIndex: 0,
    correctAnswer: "A",
    markScheme: [
      "[1] A is correct: Neutral Fe is [Ar] 3d⁶ 4s². Electrons are lost from 4s first (2 electrons), then one electron from 3d, leaving [Ar] 3d⁵.",
    ],
    modelAnswer: "A: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ (4s electrons lost first, then 3d).",
    modelAnswerMn: "A: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ (Ион үүсэхэд 4s орбиталийн 2 электрон эхэлж салж, дараа нь 3d-ээс 1 электрон сална).",
    examinerTip: "Always remove 4s electrons BEFORE 3d electrons when forming transition metal cations.",
    examinerTipMn: "Шилжилтийн металлын катион үүсэхэд 4s-ийн электронууд 3d-ээс түрүүлж салдаг гэдгийг ямагт санаарай.",
  },
  {
    id: "bank-ch2-q2",
    chapterNumber: 2,
    chapterTitle: "Electrons in Atoms",
    paperType: "Paper 2",
    paperCode: "9701/22/M/J/23",
    questionNumber: "Q2(b)",
    marks: 3,
    difficulty: "Hard",
    topicCategory: "Physical",
    title: "Explaining the Drop in 1st Ionisation Energy from P to S",
    titleMn: "Фосфороос (P) Хүхэр (S) рүү 1-р иончлолын энерги буурах шалтгаан",
    questionText: "Explain why the first ionisation energy of sulfur (S, 1000 kJ/mol) is lower than that of phosphorus (P, 1012 kJ/mol), despite sulfur having a higher nuclear charge.",
    questionTextMn: "Хүхэр (S) нь фосфороос (P) илүү их цөмийн цэнэгтэй боловч хүхрийн 1-р иончлолын энерги (1000 kJ/mol) нь фосфорынхоос (1012 kJ/mol) яагаад бага байдгийг тайлбарла.",
    markScheme: [
      "[1] Phosphorus has configuration 3p³ (half-filled shell, one electron in each 3p orbital: 3px¹ 3py¹ 3pz¹).",
      "[1] Sulfur has configuration 3p⁴ with a paired electron in one 3p orbital (3px² 3py¹ 3pz¹).",
      "[1] Spin-pair repulsion between the paired electrons in the same 3p orbital in sulfur makes it easier to remove the electron.",
    ],
    modelAnswer: "Phosphorus has configuration 3p³ (half-filled subshell with unpaired electrons). Sulfur has configuration 3p⁴ with a pair of electrons in one 3p orbital. The spin-pair repulsion between these paired electrons makes it easier to remove an electron from sulfur.",
    modelAnswerMn: "Фосфор нь 3p³ хагас дүүрсэн дэд түвшинтэй (бүх 3p орбитальд 1, 1 электронтой). Хүхэр нь 3p⁴ тохиргоотой бөгөөд нэг 3p орбитальд хосолсон электронтой. Энэхүү эсрэг спинтэй хос электронуудын хоорондын түлхэлцлийн (spin-pair repulsion) улмаас хүхрийн электроныг салгахад бага энерги шаардагдана.",
    examinerTip: "Use the exact phrase 'spin-pair repulsion' or 'mutual repulsion between paired electrons in 3p orbital' to secure full marks.",
    examinerTipMn: "Кембрижийн шалгагчид 'spin-pair repulsion' (хосолсон электроны түлхэлт) гэсэн түлхүүр үгийг заавал шаарддаг.",
  },

  // --- CHAPTER 3: CHEMICAL BONDING ---
  {
    id: "bank-ch3-q1",
    chapterNumber: 3,
    chapterTitle: "Chemical Bonding",
    paperType: "Paper 1",
    paperCode: "9701/12/M/J/22",
    questionNumber: "Q5",
    marks: 1,
    difficulty: "Medium",
    topicCategory: "Physical",
    title: "Bond Angles and Molecular Shapes in NH3 and NH4+",
    titleMn: "NH3 ба NH4+ дахь холбооны өнцөг ба хэлбэр",
    questionText: "What are the shapes and bond angles of the ammonia molecule (NH3) and the ammonium ion (NH4⁺)?",
    questionTextMn: "Аммиак (NH3) ба аммонийн ионы (NH4⁺) орон зайн хэлбэр ба холбооны өнцгийг тодорхойл.",
    options: [
      "NH3: Trigonal pyramidal (107°);  NH4⁺: Tetrahedral (109.5°)",
      "NH3: Trigonal planar (120°);  NH4⁺: Tetrahedral (109.5°)",
      "NH3: Tetrahedral (109.5°);  NH4⁺: Square planar (90°)",
      "NH3: V-shaped (104.5°);  NH4⁺: Trigonal pyramidal (107°)",
    ],
    correctOptionIndex: 0,
    correctAnswer: "A",
    markScheme: [
      "[1] A is correct: NH3 has 3 bond pairs and 1 lone pair => Pyramidal (107°). NH4⁺ has 4 bond pairs and 0 lone pairs => Regular tetrahedral (109.5°).",
    ],
    modelAnswer: "A: NH3 is trigonal pyramidal (107°) due to lone pair-bond pair repulsion reducing the angle from 109.5° by 2.5°. NH4⁺ is regular tetrahedral (109.5°) with 4 equal bond pairs.",
    modelAnswerMn: "A: NH3 нь 1 сул хос электронтой тул сул хос-холбооны хосын түлхэлтээс болж өнцөг 107° (пирамид) болж багасна. NH4⁺ нь 4 ижил холбооны хостой тул 109.5° (зөв тетраэдр) байна.",
    examinerTip: "Each lone pair reduces the tetrahedral bond angle by approximately 2.5° (from 109.5° to 107° in NH3, to 104.5° in H2O).",
    examinerTipMn: "Сул хос электрон бүр тетраэдрийн 109.5° өнцгийг ойролцоогоор 2.5°-аар шахаж багасгадаг (NH3: 107°, H2O: 104.5°).",
  },

  // --- CHAPTER 4: STATES OF MATTER ---
  {
    id: "bank-ch4-q1",
    chapterNumber: 4,
    chapterTitle: "States of Matter & Gas Laws",
    paperType: "Paper 2",
    paperCode: "9701/22/O/N/23",
    questionNumber: "Q1(b)",
    marks: 3,
    difficulty: "Medium",
    topicCategory: "Physical",
    title: "Conditions for Ideal Gas Behaviour",
    titleMn: "Бодит хий идеал төлөвт ойртох нөхцөл",
    questionText: "State the two conditions under which real gases deviate most from ideal behaviour, and explain why.",
    questionTextMn: "Бодит хий идеал хийн хуулиас хамгийн их гажих 2 нөхцөлийг нэрлэж, шалтгааныг тайлбарла.",
    markScheme: [
      "[1] High pressure: The volume of the gas particles is no longer negligible compared to the total container volume.",
      "[1] Low temperature: Intermolecular forces of attraction (van der Waals) become significant as particles move slower.",
      "[1] Real gases behave ideally only at high temperature and low pressure.",
    ],
    modelAnswer: "Real gases deviate most at HIGH PRESSURE (particle volume becomes significant compared to container volume) and LOW TEMPERATURE (particles move slowly, so intermolecular attractive forces become significant).",
    modelAnswerMn: "Бодит хий нь ӨНДӨР ДАРАЛТ (хийн молекулуудын эзлэхүүн савны эзлэхүүнтэй харьцуулахад үл тоомсорлож болохгүй болдог) ба БАГА ТЕМПЕРАТУРТ (молекулууд удаан хөдөлж, молекул хоорондын таталцлын хүч мэдэгдэхүйц нөлөөлж эхэлдэг) хамгийн их гаждаг.",
    examinerTip: "State both the physical condition (High P, Low T) AND the kinetic theory assumption that breaks down.",
    examinerTipMn: "Нөхцөлүүдийг (Өндөр P, Бага T) нэрлэхээс гадна кинетик онолын аль таамаглал зөрчигдөж байгааг заавал дурдах хэрэгтэй.",
  },

  // --- CHAPTER 15: HYDROCARBONS & FREE RADICALS ---
  {
    id: "bank-ch15-q1",
    chapterNumber: 15,
    chapterTitle: "Hydrocarbons (Alkanes & Alkenes)",
    paperType: "Paper 2",
    paperCode: "9701/22/M/J/24",
    questionNumber: "Q4(a)",
    marks: 4,
    difficulty: "Medium",
    topicCategory: "Organic",
    title: "Mechanism of Free-Radical Substitution of Methane with Chlorine",
    titleMn: "Метаны хлоржилт: Чөлөөт радикалын халалцах механизм",
    questionText: "Methane reacts with chlorine in the presence of ultraviolet light.\n(i) State the name of this type of mechanism.\n(ii) Write an equation for the initiation step.\n(iii) Write equations for the two propagation steps.\n(iv) Write an equation for a termination step producing ethane.",
    questionTextMn: "Метан нь хэт ягаан туяаны нөлөөгөөр хлортой урвалд ордог.\n(i) Урвалын механизмын нэрийг бич.\n(ii) Initiation (эхлэх) шатны тэгшитгэлийг бич.\n(iii) Хоёр propagation (гинж үргэлжлэх) шатны тэгшитгэлүүдийг бич.\n(iv) Этан үүсэх termination (төгсгөх) шатны тэгшитгэлийг бич.",
    markScheme: [
      "[1] (i) Free-radical substitution",
      "[1] (ii) Initiation: Cl₂ → 2Cl• (UV light homolytic fission)",
      "[1] (iii) Propagation: CH₄ + Cl• → •CH₃ + HCl  AND  •CH₃ + Cl₂ → CH₃Cl + Cl•",
      "[1] (iv) Termination: •CH₃ + •CH₃ → C₂H₆ (or •CH₃ + Cl• → CH₃Cl)",
    ],
    modelAnswer: "(i) Free-radical substitution\n(ii) Cl₂ → 2Cl•\n(iii) CH₄ + Cl• → •CH₃ + HCl  and  •CH₃ + Cl₂ → CH₃Cl + Cl•\n(iv) •CH₃ + •CH₃ → C₂H₆",
    modelAnswerMn: "(i) Чөлөөт радикалын халалцах урвал (Free-radical substitution)\n(ii) Initiation: Cl₂ → 2Cl• (UV туяанд Cl-Cl гомолитик тасрах)\n(iii) Propagation: CH₄ + Cl• → •CH₃ + HCl  ба  •CH₃ + Cl₂ → CH₃Cl + Cl•\n(iv) Termination: •CH₃ + •CH₃ → C₂H₆",
    examinerTip: "Never forget the radical dot (•) on Cl• and •CH₃. In propagation step 1, HCl is formed, NOT CH₃Cl.",
    examinerTipMn: "Радикалын цэгийг (•) заавал бичнэ. Propagation 1-р шатанд CH3Cl бус HCl үүсдэг гэдгийг онцгой анхаарна уу.",
  },

  // --- CHAPTER 16: HALOGENOALKANES (SN1 / SN2) ---
  {
    id: "bank-ch16-q1",
    chapterNumber: 16,
    chapterTitle: "Halogenoalkanes",
    paperType: "Paper 4",
    paperCode: "9701/42/M/J/23",
    questionNumber: "Q5(b)",
    marks: 3,
    difficulty: "Hard",
    topicCategory: "Organic",
    title: "SN1 vs SN2 Hydrolysis of Halogenoalkanes",
    titleMn: "1-хлорбутан ба 2-хлор-2-метилпропаны гидролизийн SN1 / SN2 механизм",
    questionText: "Compare the mechanism of alkaline hydrolysis between 1-chlorobutane (primary) and 2-chloro-2-methylpropane (tertiary).\n(a) Name the mechanism for each.\n(b) Explain why 2-chloro-2-methylpropane undergoes SN1 rather than SN2.",
    questionTextMn: "1-хлорбутан (1° анхдагч) ба 2-хлор-2-метилпропан (3° гуравдагч) бодисуудын шүлтлэг гидролизийн механизмыг харьцуул:\n(a) Тус бүрийн механизмын нэрийг тодорхойл.\n(б) 2-хлор-2-метилпропан яагаад SN2 биш SN1 механизмаар явагддаг шалтгааныг тайлбарла.",
    markScheme: [
      "[1] 1-chlorobutane undergoes SN2; 2-chloro-2-methylpropane undergoes SN1.",
      "[1] 2-chloro-2-methylpropane forms a stable tertiary carbocation (stabilised by electron-donating inductive effect of three methyl groups).",
      "[1] Steric hindrance from three bulky methyl groups blocks backside nucleophilic attack required for SN2.",
    ],
    modelAnswer: "(a) 1-chlorobutane: SN2 (bimolecular substitution). 2-chloro-2-methylpropane: SN1 (unimolecular substitution).\n(b) 2-chloro-2-methylpropane forms a very stable 3° carbocation intermediate due to the +I inductive electron-donating effect of 3 methyl groups. Additionally, steric hindrance from the bulky methyl groups prevents the backside attack required for SN2.",
    modelAnswerMn: "(a) 1-хлорбутан: SN2 (нэг шаттай бимолекуляр); 2-хлор-2-метилпропан: SN1 (хоёр шаттай мономолекуляр).\n(б) 2-хлор-2-метилпропанд 3 ширхэг метил бүлэг электроныг түлхэж (+I индукцийн нөлөө) үүссэн 3° карбкатионыг маш тогтворжуулдаг. Мөн метил бүлгүүдийн орон зайн саад (steric hindrance) нь нуклеофиль ар талаас довтлох SN2-ийг хаадаг.",
    examinerTip: "Mention BOTH carbocation stability (+I effect) AND steric hindrance for full marks in Cambridge Paper 4.",
    examinerTipMn: "Карбкатионы тогтвортой байдал (+I нөлөө) болон орон зайн саад (steric hindrance) хоёуланг нь тайлбартаа заавал оруулна.",
  },
];
