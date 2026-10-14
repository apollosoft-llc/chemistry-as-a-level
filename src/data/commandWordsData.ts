export interface CommandWord {
  id: string;
  word: string;
  wordMn: string;
  syllabusDefinitionEn: string;
  syllabusDefinitionMn: string;
  whatExaminersExpect: string;
  whatExaminersExpectMn: string;
  commonStudentPitfall: string;
  commonStudentPitfallMn: string;
  exampleQuestion: {
    questionTextEn: string;
    questionTextMn: string;
    poorAnswer: string;
    poorAnswerReason: string;
    modelAnswer: string;
    modelAnswerMn: string;
    marks: number;
  };
}

export const CAMBRIDGE_COMMAND_WORDS: CommandWord[] = [
  {
    id: "state",
    word: "State",
    wordMn: "Нэрлэх / Дурьдах (State)",
    syllabusDefinitionEn: "Express the specified points concise and without detailed explanation or calculation.",
    syllabusDefinitionMn: "Дэлгэрэнгүй тайлбар, тооцоолол хийлгүйгээр зөвхөн товч тодорхой баримт, утга, нэрийг бичих.",
    whatExaminersExpect: "Only a direct factual word, value, or formula. No explanation needed.",
    whatExaminersExpectMn: "Зөвхөн баримт, үг, томьёог шууд бичнэ. Урт тайлбар шаардахгүй (1 оноо).",
    commonStudentPitfall: "Writing paragraphs of explanation and wasting time, or failing to give the exact specific term.",
    commonStudentPitfallMn: "Шаардлагагүй урт тайлбар бичиж цаг алдах, эсвэл үндсэн түлхүүр үгээ бичихгүй орхих.",
    exampleQuestion: {
      questionTextEn: "State the catalyst used in the Haber process.",
      questionTextMn: "Хабер процесст ашиглагддаг катализаторыг нэрлэнэ үү.",
      poorAnswer: "It speeds up the rate of forward and backward reactions by providing an alternative pathway.",
      poorAnswerReason: "0 marks: The question asks to STATE the catalyst (name/formula), not explain how catalysts work.",
      modelAnswer: "Iron (Fe) / finely divided iron.",
      modelAnswerMn: "Төмөр (Fe) / нунтаг төмөр.",
      marks: 1,
    },
  },
  {
    id: "define",
    word: "Define",
    wordMn: "Тодорхойлох (Define)",
    syllabusDefinitionEn: "Give the exact, precise formal meaning of a concept as specified in the syllabus.",
    syllabusDefinitionMn: "Хөтөлбөрт заасан стандарт, албан ёсны үг хэллэгээр үгчилсэн тодорхойлолт өгөх.",
    whatExaminersExpect: "Must contain ALL standard syllabus keywords, state symbols, and mole quantities (e.g. 1 mole, gaseous atoms).",
    whatExaminersExpectMn: "Бүх түлхүүр үгс, молийн тоо (1 моль), бодисын төлөв (хийн төлөв)-ийг алдалгүй бичих.",
    commonStudentPitfall: "Missing 'one mole' or omitting state symbols (e.g. gaseous).",
    commonStudentPitfallMn: "'1 моль' гэдэг үгийг орхих эсвэл хийн төлөвийг (gaseous) бичихгүй байх.",
    exampleQuestion: {
      questionTextEn: "Define first ionisation energy.",
      questionTextMn: "Нэгдүгээр иончлолын энергийг тодорхойлно уу.",
      poorAnswer: "Energy needed to remove an electron from an atom.",
      poorAnswerReason: "0 marks: Missed 'one mole of electrons', 'one mole of gaseous atoms', and 'to form one mole of gaseous 1+ ions'.",
      modelAnswer: "The energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions.",
      modelAnswerMn: "Хийн төлөвт байгаа 1 моль саармаг атомаас 1 моль электрон салгаж, 1 моль хийн 1+ ион үүсгэхэд шаардагдах энерги.",
      marks: 2,
    },
  },
  {
    id: "describe",
    word: "Describe",
    wordMn: "Дүрслэх / Тодорхойлон өгүүлэх (Describe)",
    syllabusDefinitionEn: "State the points of a topic, give characteristics and main features, or state what is observed (WHAT happens).",
    syllabusDefinitionMn: "Юу болж байгааг, ямар өнгө хувирал, тунадас, үзэгдэл ажиглагдаж байгааг дүрслэх (ЮУ болсныг).",
    whatExaminersExpect: "State the observations (colour changes, precipitates, effervescence) or step-by-step procedure. No chemical mechanism explanation needed.",
    whatExaminersExpectMn: "Өнгөний өөрчлөлт, тунадасны өнгө, хий ялгарах үзэгдлийг нүдээр харагдах байдлаар бичнэ. Механизмын тайлбар шаардахгүй.",
    commonStudentPitfall: "Explaining WHY it happens with electrons instead of stating WHAT you actually observe.",
    commonStudentPitfallMn: "Юу ажиглагдсанаа бичихийн оронд яагаад ийм болсныг электроноор тайлбарлаж оноогоо алддаг.",
    exampleQuestion: {
      questionTextEn: "Describe what is observed when aqueous sodium hydroxide is added dropwise to aqueous copper(II) sulfate until in excess.",
      questionTextMn: "Зэс(II)-ийн сульфатын уусмал дээр натрийн гидроксидыг дусааж, улмаар илүүдлээр нэмэхэд юу ажиглагдахыг дүрсэл.",
      poorAnswer: "Cu²⁺ reacts with OH⁻ to form Cu(OH)₂ precipitate because of low Ksp.",
      poorAnswerReason: "0 marks: This is an explanation, not an observation of colours and solubility.",
      modelAnswer: "Pale blue precipitate forms, which is insoluble in excess sodium hydroxide.",
      modelAnswerMn: "Цайвар цэнхэр өнгийн тунадас үүсэх ба илүүдэл натрийн гидроксидод уусахгүй хэвээр үлдэнэ.",
      marks: 2,
    },
  },
  {
    id: "explain",
    word: "Explain",
    wordMn: "Шалтгааныг тайлбарлах (Explain)",
    syllabusDefinitionEn: "Set out reasons or causes, make relationships clear, say WHY and/or HOW and support with relevant evidence.",
    syllabusDefinitionMn: "ЯАГААД болон ХЭРХЭН болсны учир шалтгаан, химийн зарчим, хүч, энергийг үндэслэлтэйгээр дэлгэрүүлэх.",
    whatExaminersExpect: "Give the chemical reasoning: intermolecular forces, bond energies, electron shielding, orbital repulsion, or Le Chatelier's principle.",
    whatExaminersExpectMn: "Химийн үндсэн шалтгааныг (молекул хоорондын хүч, холбооны энерги, халхавчлал, цөмийн цэнэг, спин-хослолын түлхэлт) заавал нэрлэх.",
    commonStudentPitfall: "Simply stating the observation without giving the underlying chemical reason.",
    commonStudentPitfallMn: "Шалтгааныг нь тайлбарлалгүй зөвхөн ажиглалтаа давтан бичих.",
    exampleQuestion: {
      questionTextEn: "Explain why boiling points increase down Group 17 from chlorine to iodine.",
      questionTextMn: "17-р бүлгийн дагуу хлороос иод руу буцлах цэг яагаад өсдөгийг тайлбарла.",
      poorAnswer: "Because iodine has a bigger mass than chlorine.",
      poorAnswerReason: "0 marks: Mass does not directly cause boiling point increases. Must reference electrons and London dispersion forces.",
      modelAnswer: "Down the group, the number of electrons per molecule increases, resulting in stronger instantaneous dipole-induced dipole (London dispersion) forces, which require more thermal energy to overcome.",
      modelAnswerMn: "Бүлгийн дагуу молекул дахь электроны тоо өсөж, агшин зуурын туйлширсан диполь-үүсгэгдсэн диполийн (Лондонгийн дисперсийн) хүч хүчтэй болдог тул холбоог таслахад илүү их дулааны энерги шаардагдана.",
      marks: 2,
    },
  },
  {
    id: "suggest",
    word: "Suggest",
    wordMn: "Санал болгох / Таамаглах (Suggest)",
    syllabusDefinitionEn: "Apply chemical knowledge to situations where there are a range of valid responses to make proposals or put forward considerations.",
    syllabusDefinitionMn: "Хөтөлбөрийн мэдлэгээ өмнө нь үзэж байгаагүй шинэ нөхцөл, урвалд хэрэглэн оновчтой таамаглал дэвшүүлэх.",
    whatExaminersExpect: "Logical application of general chemistry principles (e.g. similar functional groups react similarly).",
    whatExaminersExpectMn: "Ерөнхий зүй тогтлыг шинэ бодист логикоор хэрэглэх.",
    commonStudentPitfall: "Panicking because they think they haven't memorised the exact molecule.",
    commonStudentPitfallMn: "Энэ бодисыг цээжлээгүй гээд сандарч хоосон орхих.",
    exampleQuestion: {
      questionTextEn: "Suggest the product formed when compound X (containing a -CHO group and an ester group) is reacted with NaBH₄ in ethanol.",
      questionTextMn: "X нэгдэл (-CHO ба эстер бүлэгтэй) этанол дахь NaBH₄-тэй урвалд ороход үүсэх бүтээгдэхүүнийг таамагла.",
      poorAnswer: "It makes a carboxylic acid.",
      poorAnswerReason: "0 marks: NaBH₄ is a reducing agent, not oxidising, and only reduces aldehydes/ketones, not esters.",
      modelAnswer: "The aldehyde group (-CHO) is reduced to a primary alcohol (-CH₂OH), while the ester group remains unchanged.",
      modelAnswerMn: "Альдегид бүлэг (-CHO) нь анхдагч спирт (-CH₂OH) болж ангижрах ба эстер бүлэг өөрчлөгдөхгүй үлдэнэ.",
      marks: 2,
    },
  },
  {
    id: "deduce",
    word: "Deduce",
    wordMn: "Мөрдөн гаргах / Баримтаас дүгнэх (Deduce)",
    syllabusDefinitionEn: "Draw conclusions from information provided, or use logic/data to arrive at a definitive answer.",
    syllabusDefinitionMn: "Өгөгдсөн өгөгдөл, график, хүснэгтээс логик дүгнэлт хийж тодорхой үр дүнд хүрэх.",
    whatExaminersExpect: "Show the logical chain connecting the given data to your conclusion.",
    whatExaminersExpectMn: "Өгөгдлийг үр дүнтэй холбосон логик дарааллыг харуулах.",
    commonStudentPitfall: "Guessing without referencing the provided data/spectra.",
    commonStudentPitfallMn: "Өгөгдсөн график эсвэл спектрийн утгыг ашиглалгүй таамгаар бичих.",
    exampleQuestion: {
      questionTextEn: "Deduce the identity of element Y given its successive ionisation energies (kJ/mol): 577, 1816, 2745, 11577, 14842.",
      questionTextMn: "Y элементийн дараалсан иончлолын энергийн утгаар (577, 1816, 2745, 11577, 14842) элементийн бүлгийг мөрдөн гарга.",
      poorAnswer: "Group 3 because it has 3 electrons.",
      poorAnswerReason: "1/2 marks: Needs to cite the large jump between 3rd and 4th IE.",
      modelAnswer: "There is a huge jump in energy between the 3rd (2745) and 4th (11577) ionisation energy, indicating the 4th electron is removed from an inner quantum shell closer to the nucleus. Thus Y is in Group 13 (Group 3).",
      modelAnswerMn: "3 ба 4-р иончлолын энергийн хооронд маш том үсрэлт гарсан (2745 -> 11577) тул 4 дэх электрон нь цөмд ойр дотоод бүрхүүлээс салж байна. Иймд Y нь 13-р бүлгийн (3-р бүлгийн) элемент юм.",
      marks: 2,
    },
  },
];

export interface ConfusingTermPair {
  id: string;
  pairTitle: string;
  pairTitleMn: string;
  termA: {
    term: string;
    termMn: string;
    definition: string;
    definitionMn: string;
    keyCharacteristics: string[];
    example: string;
  };
  termB: {
    term: string;
    termMn: string;
    definition: string;
    definitionMn: string;
    keyCharacteristics: string[];
    example: string;
  };
  coreDifferenceMn: string;
  cambridgeExaminerWarning: string;
  quickCheckQuestion: {
    questionText: string;
    questionTextMn: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    explanationMn: string;
  };
}

export const CONFUSING_TERMS_PAIRS: ConfusingTermPair[] = [
  {
    id: "strong-vs-concentrated",
    pairTitle: "Strong Acid vs Concentrated Acid",
    pairTitleMn: "Хүчтэй хүчил (Strong) vs Концентрацитай хүчил (Concentrated)",
    termA: {
      term: "Strong Acid",
      termMn: "Хүчтэй хүчил",
      definition: "An acid that completely dissociates / ionises in aqueous solution into H⁺ ions.",
      definitionMn: "Усан уусмалд 100% бүрэн диссоциацид орж H⁺ ион үүсгэдэг хүчил.",
      keyCharacteristics: ["Chemical property of the substance", "100% ionisation (e.g. HCl, HNO₃, H₂SO₄)", "Irreversible dissociation: HCl(aq) → H⁺(aq) + Cl⁻(aq)"],
      example: "0.001 mol/dm³ HCl is a DILUTE STRONG acid (low concentration, but 100% ionised).",
    },
    termB: {
      term: "Concentrated Acid",
      termMn: "Концентрацитай хүчил",
      definition: "A solution that contains a large amount / high number of moles of acid per unit volume of water.",
      definitionMn: "Нэгж эзлэхүүнд маш их хэмжээний (олон моль) хүчил агуулсан уусмал.",
      keyCharacteristics: ["Physical proportion / concentration of solution", "High mol dm⁻³ value (e.g. 10 mol/dm³)", "Can be weak or strong"],
      example: "15 mol/dm³ CH₃COOH is a CONCENTRATED WEAK acid (high concentration, but only ~1% ionised).",
    },
    coreDifferenceMn: "Хүчтэй/Сул (Strong/Weak) нь тухайн бодис иончлогдох чадварыг (химийн шинж), харин Концентрацитай/Шингэрүүлсэн (Concentrated/Dilute) нь хэр их ус хольсныг (хэмжээний харьцаа) илэрхийлнэ!",
    cambridgeExaminerWarning: "Never use 'strong' and 'concentrated' interchangeably. 0.01 mol/dm³ HCl is strong but dilute; 12 mol/dm³ ethanoic acid is concentrated but weak.",
    quickCheckQuestion: {
      questionText: "Which statement correctly describes a 0.005 mol dm⁻³ aqueous solution of hydrochloric acid (HCl)?",
      questionTextMn: "0.005 mol dm⁻³ концентрацитай давсны хүчлийн (HCl) усан уусмалыг зөв тодорхойлсон хариуг сонго.",
      options: [
        "A concentrated strong acid",
        "A dilute strong acid",
        "A concentrated weak acid",
        "A dilute weak acid",
      ],
      correctIndex: 1,
      explanation: "HCl is 100% ionised (strong), but 0.005 mol dm⁻³ is a very small concentration (dilute).",
      explanationMn: "HCl нь усанд бүрэн иончлогддог тул хүчтэй (strong), харин 0.005 mol dm⁻³ нь маш бага утга тул шингэрүүлсэн (dilute) уусмал юм.",
    },
  },
  {
    id: "homolytic-vs-heterolytic",
    pairTitle: "Homolytic Fission vs Heterolytic Fission",
    pairTitleMn: "Гомолитик тасралт (Homolytic) vs Гетеролитик тасралт (Heterolytic)",
    termA: {
      term: "Homolytic Fission",
      termMn: "Гомолитик тасралт (Тэгш)",
      definition: "The breaking of a covalent bond where each bonded atom takes ONE of the shared electrons, forming free radicals.",
      definitionMn: "Ковалент холбоо тасрахад холбооны хос электроныг холбогдсон атомууд 1, 1-ээр тэгш хуваан авч чөлөөт радикал үүсгэх процесс.",
      keyCharacteristics: ["Forms neutral FREE RADICALS (•R)", "Non-polar or identical atoms (e.g. Cl-Cl)", "Initiated by ultraviolet (UV) light", "Represented by single-headed (fish-hook) curly arrows"],
      example: "Cl-Cl -(UV)-> Cl• + •Cl",
    },
    termB: {
      term: "Heterolytic Fission",
      termMn: "Гетеролитик тасралт (Тэгш бус)",
      definition: "The breaking of a covalent bond where ONE of the bonded atoms takes BOTH of the shared electrons, forming ions.",
      definitionMn: "Ковалент холбоо тасрахад илүү цахилгаан сөрөг нэг атом нь холбооны хоёр электроныг хоёуланг нь авч ионууд (катион + анион) үүсгэх процесс.",
      keyCharacteristics: ["Forms IONS (carbocation + halide ion)", "Polar covalent bonds (e.g. C-Br)", "Occurs in polar solvents or with electrophiles/nucleophiles", "Represented by double-headed curly arrows"],
      example: "C-Br → C⁺ + :Br⁻",
    },
    coreDifferenceMn: "Гомолитик = Тэгш хувааж ЧӨЛӨӨТ РАДИКАЛ (•Cl) үүсгэнэ. Гетеролитик = Нэг нь хоёуланг нь авч ИОН (C⁺ ба Br⁻) үүсгэнэ!",
    cambridgeExaminerWarning: "In mechanisms, use single-barbed fish-hook arrows for 1 electron movement (homolytic) and double-barbed arrows for electron pair movement (heterolytic).",
    quickCheckQuestion: {
      questionText: "What species are produced when the C-Br bond in 2-bromo-2-methylpropane breaks heterolytically in aqueous solution?",
      questionTextMn: "2-бром-2-метилпропаны C-Br холбоо усан уусмалд гетеролитик байдлаар тасрахад ямар бөөмс үүсэх вэ?",
      options: [
        "Two neutral free radicals: (CH₃)₃C• and •Br",
        "A tertiary carbocation (CH₃)₃C⁺ and a bromide ion Br⁻",
        "A carbanion (CH₃)₃C⁻ and a bromonium ion Br⁺",
        "Alkene and HBr gas",
      ],
      correctIndex: 1,
      explanation: "Heterolytic fission of polar C-Br bond gives carbocation (CH₃)₃C⁺ and bromide ion :Br⁻.",
      explanationMn: "Туйлтай C-Br холбоо гетеролитикээр тасрахад Br нь 2 электроныг хоёуланг нь авч Br⁻ болон 3° карбкатион үүснэ.",
    },
  },
  {
    id: "electrophile-vs-nucleophile",
    pairTitle: "Electrophile vs Nucleophile",
    pairTitleMn: "Электрофиль (Electrophile) vs Нуклеофиль (Nucleophile)",
    termA: {
      term: "Electrophile (E⁺ / δ+)",
      termMn: "Электрофиль (Электрон хайгч)",
      definition: "An electron-deficient species (positive ion or δ+ atom) that can ACCEPT a pair of electrons to form a new covalent bond.",
      definitionMn: "Электрон хомсдолтой (эерэг цэнэгтэй эсвэл δ+ төвтэй), шинэ ковалент холбоо үүсгэхийн тулд сул хос электрон авдаг бөөм.",
      keyCharacteristics: ["Electron pair ACCEPTOR (Lewis acid)", "Attacks electron-rich areas (e.g. C=C double bonds, benzene ring)", "Examples: H⁺, Br⁺, NO₂⁺, SO₃, AlCl₃"],
      example: "H-Br adds to alkenes because δ+ H acts as an electrophile.",
    },
    termB: {
      term: "Nucleophile (Nu⁻ / :Nu)",
      termMn: "Нуклеофиль (Цөм / Эерэг цэнэг хайгч)",
      definition: "An electron-rich species containing a lone pair of electrons that can DONATE a pair of electrons to form a new covalent bond.",
      definitionMn: "Электроноор баялаг, сул хос электронтой (эсвэл сөрөг цэнэгтэй), эерэг төв рүү хос электроноо өгч холбоо үүсгэдэг бөөм.",
      keyCharacteristics: ["Electron pair DONOR (Lewis base)", "Attacks electron-deficient δ+ carbon atoms in polar bonds (e.g. C-Halogen, C=O)", "Examples: :OH⁻, :CN⁻, :NH₃, H₂O:"],
      example: ":OH⁻ attacks the δ+ carbon in bromoethane in nucleophilic substitution.",
    },
    coreDifferenceMn: "Электрофиль = Электрон хомсдолтой тул электрон үүл рүү (C=C) довтолно. Нуклеофиль = Сул хос электронтой тул эерэг δ+ нүүрстөрөгч (C-Br) рүү довтолно!",
    cambridgeExaminerWarning: "Curly arrows in mechanisms ALWAYS start from the electron-rich nucleophile (or lone pair/bond) and point TO the electron-deficient electrophile, NEVER the other way around!",
    quickCheckQuestion: {
      questionText: "Which of the following species acts as a nucleophile in organic reactions?",
      questionTextMn: "Дараах бөөмсөөс аль нь органик урвалд нуклеофилийн үүрэг гүйцэтгэх вэ?",
      options: [
        "NO₂⁺ (Nitronium ion)",
        "Br⁺ (Bromonium ion)",
        ":NH₃ (Ammonia molecule with lone pair)",
        "AlCl₃ (Aluminium chloride)",
      ],
      correctIndex: 2,
      explanation: "Ammonia (:NH₃) has a lone pair of electrons on nitrogen that it can donate to an electron-deficient carbon.",
      explanationMn: "Аммиак (:NH₃) нь азотын атом дээрээ сул хос электронтой тул электроноо өгөх нуклеофиль болдог.",
    },
  },
  {
    id: "intermolecular-vs-intramolecular",
    pairTitle: "Intermolecular Forces vs Intramolecular Covalent Bonds",
    pairTitleMn: "Молекул хоорондын хүч vs Молекул дотоод ковалент холбоо",
    termA: {
      term: "Intermolecular Forces",
      termMn: "Молекул хоорондын хүч (Intermolecular)",
      definition: "Weak attractive forces acting BETWEEN separate molecules (e.g. London dispersion, permanent dipole, hydrogen bonds).",
      definitionMn: "Тусдаа молекулуудын хооронд үйлчлэх харьцангуй сул таталцлын хүчүүд (буцлах, хайлах үед эдгээр нь тасардаг).",
      keyCharacteristics: ["Broken during physical changes (boiling, melting, evaporating)", "Much weaker (~1 to 40 kJ/mol)", "Determines physical properties (boiling point, volatility, viscosity)"],
      example: "When water boils at 100°C, HYDROGEN BONDS between water molecules break, NOT H-O covalent bonds.",
    },
    termB: {
      term: "Intramolecular Covalent Bonds",
      termMn: "Молекулын дотоод ковалент холбоо (Intramolecular)",
      definition: "Strong bonds formed by sharing electrons BETWEEN ATOMS WITHIN a molecule.",
      definitionMn: "Молекул доторх атомуудын хооронд электрон хослон үүссэн бат бөх химийн холбоо.",
      keyCharacteristics: ["Broken during chemical reactions (decomposition, combustion)", "Very strong (~150 to 1000 kJ/mol)", "Determines chemical reactivity"],
      example: "O-H bond in water has bond energy of 464 kJ/mol; takes ~1000°C+ to thermally decompose water molecules into H₂ and O₂.",
    },
    coreDifferenceMn: "Ус буцлахад усны молекул задарч устөрөгч, хүчилтөрөгч болохгүй! Зөвхөн МОЛЕКУЛ ХООРОНДЫН устөрөгчийн холбоо сарниж усны уур (H₂O хий) болдог.",
    cambridgeExaminerWarning: "Never say 'covalent bonds break when liquid boils' (fatal error). Only intermolecular forces are overcome during change of state.",
    quickCheckQuestion: {
      questionText: "What is overcome when liquid ethanol (C₂H₅OH) evaporates into vapour?",
      questionTextMn: "Шингэн этанол (C₂H₅OH) уурших үед ямар холбоос/хүч тасрах вэ?",
      options: [
        "C-C and C-H covalent bonds inside the molecule",
        "O-H covalent bonds inside the molecule",
        "Hydrogen bonds and dispersion forces between ethanol molecules",
        "Ionic bonds between ethyl and hydroxide ions",
      ],
      correctIndex: 2,
      explanation: "Evaporation is a physical process; only intermolecular forces (hydrogen bonds and van der Waals) are overcome.",
      explanationMn: "Ууршилт нь физик үзэгдэл тул зөвхөн этанолын молекулууд хоорондын устөрөгчийн холбоо тасарна.",
    },
  },
];
