import { Chapter } from "../types";

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    number: 1,
    level: "AS",
    category: "Physical",
    titleEn: "Atomic Structure",
    titleMn: "Атомын бүтэц",
    descriptionEn: "Subatomic particles, mass and atomic numbers, isotopes, and particle behaviour in electric fields.",
    descriptionMn: "Атомын эгэл хэсгүүд (протон, нейтрон, электрон), масс ба атомын дугаар, изотопууд, цахилгаан орон дахь хазайлт.",
    learningIntentionsEn: [
      "Describe the structure of the atom: mostly empty space, tiny dense positive nucleus with protons & neutrons, electrons in shells",
      "Identify relative charges and masses: proton (1, +1), neutron (1, 0), electron (1/1836, -1)",
      "Deduce behaviour of beams of protons, neutrons, and electrons in an electric field (angle of deflection depends on charge/mass ratio)",
      "Define isotopes as atoms of the same element with the same proton number but different nucleon numbers",
      "Explain why isotopes have identical chemical properties (same electron configuration) but different physical properties (different mass/density)"
    ],
    learningIntentionsMn: [
      "Атомын бүтцийг тайлбарлах: ихэнх хэсэг нь хоосон орон зай, төвдөө бөөм (протон + нейтрон), тойроод электрон бүрхүүл",
      "Эгэл бөөмсийн харьцангуй масс ба цэнэг: протон (1, +1), нейтрон (1, 0), электрон (1/1836, -1)",
      "Цахилгаан орон дахь цацрагийн хазайлт: электрон эерэг хавтан руу их хазайна (масс маш бага), протон сөрөг рүү бага хазайна, нейтрон хазайхгүй",
      "Изотопын тодорхойлолт: ижил протонтой боловч ялгаатай нейтроны тоотой (массын тоо ялгаатай) нэг элементийн атомууд",
      "Изотопуудын химийн шинж чанар ижил (электрон бүтэц адил), физик шинж чанар ялгаатай (масс, нягт өөр) байдгийг тайлбарлах"
    ],
    subtopics: [
      {
        id: "1.1",
        number: "1.1",
        titleEn: "Elements and Atoms",
        titleMn: "Элементүүд ба атомууд",
        summaryEn: "Elements consist of one type of atom. Atoms are the smallest parts of an element taking part in chemical change (diameter ~10⁻¹⁰ m).",
        summaryMn: "Химийн элемент нь зөвхөн нэг төрлийн атомаас тогтоно. Химийн хувиралд ордог хамгийн жижиг хэсэг (диаметр ~10⁻¹⁰ м).",
        keyConcepts: ["Chemical symbols (Latin/Greek origins)", "Atomic diameter ~ 10⁻¹⁰ m", "Hydrogen mass ~ 1.67 × 10⁻²⁷ kg"]
      },
      {
        id: "1.2",
        number: "1.2",
        titleEn: "Inside the Atom & Electric Field Deflection",
        titleMn: "Атомын дотоод бүтэц & Цахилгаан орон дахь хазайлт",
        summaryEn: "Protons (+1, 1 u), Neutrons (0, 1 u), Electrons (-1, 1/1836 u). Deflection in electric field ∝ charge/mass. Electrons deflect sharply toward (+) plate; protons deflect slightly toward (-) plate; neutrons do not deflect.",
        summaryMn: "Цахилгаан орон дахь хазайлтын өнцөг нь цэнэг/масс (e/m) харьцаанаас хамаарна. Электрон хөнгөхөн тул эерэг туйл руу их хазайдаг.",
        keyConcepts: ["Nucleus contains nucleons (p + n)", "Deflection angle: e⁻ >> p⁺, n⁰ = 0", "Rutherford alpha scattering experiment"],
        keyEquations: ["Deflection ∝ Charge / Mass (q/m)"],
        examinerTips: ["Always state deflection is towards opposite polarity plate with magnitude inversely proportional to particle mass."]
      },
      {
        id: "1.3",
        number: "1.3",
        titleEn: "Numbers of Nucleons, Ions & Isotopes",
        titleMn: "Нуклоны тоо, ионууд ба изотопууд",
        summaryEn: "Atomic number Z = protons; Mass number A = protons + neutrons. Neutrons = A - Z. Positive ions (cations) lose e⁻; Negative ions (anions) gain e⁻.",
        summaryMn: "Атомын дугаар Z = протон. Массын дугаар A = протон + нейтрон. Нейтрон = A - Z. Эерэг ион электрон алдана, сөрөг ион электрон авна.",
        keyConcepts: ["A (nucleon number) top-left, Z (proton number) bottom-left", "Isotopes: same Z, different A", "Chemical properties depend entirely on valence electrons"],
        keyEquations: ["Number of neutrons = A - Z", "Electrons in ion = Z - (charge)"],
        examinerTips: ["Remember: for Cr³⁺ (Z=24), electrons = 24 - 3 = 21. For S²⁻ (Z=16, A=33), p=16, n=17, e=18."]
      }
    ],
    keyTerms: [
      { termEn: "Isotope", termMn: "Изотоп", definitionEn: "Atoms of the same element with the same number of protons but different numbers of neutrons.", definitionMn: "Ижил тооны протонтой боловч ялгаатай тооны нейтронтой нэг элементийн атомууд." },
      { termEn: "Nucleon Number (A)", termMn: "Нуклоны дугаар / Массын тоо", definitionEn: "The total number of protons and neutrons in the nucleus of an atom.", definitionMn: "Атомын цөм дэх протон ба нейтроны нийлбэр тоо." },
      { termEn: "Atomic Number (Z)", termMn: "Атомын дугаар / Протоны тоо", definitionEn: "The number of protons in the nucleus of an atom.", definitionMn: "Атомын цөм дэх протоны тоо." }
    ],
    formulas: [
      { nameEn: "Number of Neutrons", nameMn: "Нейтроны тоо", formula: "N = A - Z", note: "Mass number minus atomic number" },
      { nameEn: "Number of Electrons in Ion", nameMn: "Ион дахь электроны тоо", formula: "e = Z - (Ion Charge)", note: "Subtract positive charge, add negative charge" }
    ],
    examStyleTips: [
      "In electric field deflection questions, mention both direction (attraction to opposite charge) and degree of deflection (electrons have ~1/1836 the mass of a proton).",
      "Isotopes have identical chemical reactivity because chemical reactions involve valence electrons, not the nucleus."
    ]
  },
  {
    id: 2,
    number: 2,
    level: "AS",
    category: "Physical",
    titleEn: "Electrons in Atoms",
    titleMn: "Атом дахь электронууд",
    descriptionEn: "Principal quantum shells, sub-shells (s, p, d, f), orbitals, electronic configurations, ionisation energies, and periodic trends.",
    descriptionMn: "Энергийн түвшин, дэд түвшин (s, p, d, f), орбиталь, электрон тохиргоо, иончлолын энерги (IE), үелэх хандлагууд.",
    learningIntentionsEn: [
      "Describe principal quantum shells (n = 1, 2, 3, 4) holding 2, 8, 18, 32 electrons",
      "Understand s (spherical), p (dumbbell, px, py, pz), and d orbital shapes and capacities (s=2, p=6, d=10, f=14)",
      "Write electronic configurations for atoms and ions (e.g. 1s² 2s² 2p⁶... including Cr: [Ar] 3d⁵ 4s¹ and Cu: [Ar] 3d¹⁰ 4s¹)",
      "Define 1st Ionisation Energy: energy needed to remove 1 mole of electrons from 1 mole of gaseous atoms to form 1 mole of gaseous 1+ ions",
      "Explain factors affecting IE: Nuclear charge, Distance from nucleus (atomic radius), Shielding by inner shells, Spin-pair repulsion",
      "Interpret successive IE graphs on log₁₀ scale to deduce group and electronic configuration"
    ],
    learningIntentionsMn: [
      "Энергийн үндсэн түвшин n=1(2e), n=2(8e), n=3(18e), n=4(32e) багтаамжтай",
      "s (бөмбөлөг), p (хос дэлбээ px, py, pz), d орбиталуудын хэлбэр, багтаамж (s=1 орбиталь, p=3, d=5)",
      "Электрон тохиргоо бичих: Hund-ийн дүрэм, Pauli-ийн зарчим, Aufbau дүрэм, 4s дүүрч 3d орно; Cr, Cu-ийн онцлог",
      "1-р иончлолын энергийн стандарт тодорхойлолт ба тэгшитгэл: X(g) → X⁺(g) + e⁻",
      "Иончлолын энергид нөлөөлөх 4 хүчин зүйл: Цөмийн цэнэг, Зай (радиус), Дотоод давхаргын халхавчлал, Спин хослолын түлхэлт",
      "Дараалсан иончлолын энергийн үсрэлтээр элементийн бүлгийг тодорхойлох"
    ],
    subtopics: [
      {
        id: "2.1",
        number: "2.1",
        titleEn: "Simple Electronic Structure & Quantum Shells",
        titleMn: "Электрон бүрхүүлийн бүтэц ба квант тоонууд",
        summaryEn: "Principal quantum shells n=1,2,3,4 hold 2n² electrons. Shell 1=2, Shell 2=8, Shell 3=18, Shell 4=32.",
        summaryMn: "Энергийн түвшин бүр хамгийн ихдээ 2n² электрон агуулна.",
        keyConcepts: ["Principal quantum number n", "Maximum electrons per shell = 2n²"]
      },
      {
        id: "2.2",
        number: "2.2",
        titleEn: "First & Successive Ionisation Energy",
        titleMn: "1-р ба дараалсан иончлолын энерги",
        summaryEn: "1st IE: X(g) → X⁺(g) + e⁻. 2nd IE: X⁺(g) → X²⁺(g) + e⁻. Successive IEs always increase because removing e⁻ from a positive ion increases effective nuclear attraction.",
        summaryMn: "1-р иончлолын энерги: Хийн төлөв дэх 1 моль атомаас 1 моль электрон салгаж 1 моль 1+ цэнэгтэй хийн ион үүсгэхэд шаардагдах энерги.",
        keyConcepts: ["Definition and state symbols (g)", "Big jump in successive IE indicates removal from a shell closer to nucleus"],
        keyEquations: ["1st IE: X(g) → X⁺(g) + e⁻", "2nd IE: X⁺(g) → X²⁺(g) + e⁻", "3rd IE: X²⁺(g) → X³⁺(g) + e⁻"]
      },
      {
        id: "2.3",
        number: "2.3",
        titleEn: "Sub-shells, Orbitals & Shapes",
        titleMn: "Дэд түвшин, орбиталууд ба тэдгээрийн хэлбэр",
        summaryEn: "An atomic orbital is a region of space where there is >95% probability of finding an electron. Holds max 2 electrons with opposite spins.",
        summaryMn: "s орбиталь нь бөмбөлөг хэлбэртэй, p орбиталь нь x, y, z тэнхлэгийн дагуу 3 чиглэлтэй хос дэлбээ (гантел) хэлбэртэй.",
        keyConcepts: ["s orbital (spherical)", "p orbitals (px, py, pz dumbbell)", "Energy order: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p"]
      },
      {
        id: "2.4",
        number: "2.4",
        titleEn: "Electronic Configurations of Atoms & Ions",
        titleMn: "Атом ба ионы электрон тохиргоо",
        summaryEn: "Electrons fill lowest energy first (Aufbau). Exceptional stability of half-filled (3d⁵) and fully-filled (3d¹⁰) subshells for Cr and Cu.",
        summaryMn: "D-блокын шилжилтийн металлууд ион үүсгэхдээ эхлээд 4s электроноо алдаж, дараа нь 3d электроноо алдана!",
        keyConcepts: ["Chromium: [Ar] 3d⁵ 4s¹", "Copper: [Ar] 3d¹⁰ 4s¹", "d-block ions lose 4s electrons first! (e.g. Fe²⁺: [Ar] 3d⁶)"]
      },
      {
        id: "2.5",
        number: "2.5",
        titleEn: "Periodic Trends in IE & Radii",
        titleMn: "Иончлолын энерги ба радиусын үелэх хандлага",
        summaryEn: "Across Period: IE generally increases (nuclear charge increases, shielding similar). Dips at Group 13 (electron in higher energy p-subshell) and Group 16 (spin-pair repulsion in p orbital). Down Group: IE decreases (greater radius & shielding).",
        summaryMn: "Үеийн дагуу IE ерөнхийдөө өснө. Гэхдээ Mg->Al дээр буурна (3p нь 3s-ээс өндөр энергитэй), P->S дээр буурна (3p orbital дахь спин хослолын түлхэлт).",
        keyConcepts: ["General increase across Period", "Dip at Gr 2 -> Gr 13 (s to p subshell)", "Dip at Gr 15 -> Gr 16 (spin-pair repulsion)", "Decrease down Group"]
      }
    ],
    keyTerms: [
      { termEn: "First Ionisation Energy (IE₁)", termMn: "1-р Иончлолын Энерги", definitionEn: "The energy needed to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous 1+ ions.", definitionMn: "Хийн төлөвт байгаа 1 моль салангид атомуудаас нэг нэг электрон салгаж, 1 моль нэг валенттай хийн ион үүсгэхэд шаардагдах энерги." },
      { termEn: "Atomic Orbital", termMn: "Атомын орбиталь", definitionEn: "A region of space around the nucleus of an atom that can be occupied by one or two electrons (with opposite spins).", definitionMn: "Атомын цөмийн эргэн тойронд эсрэг спинтэй 1 эсвэл 2 электрон байрлах магадлал хамгийн өндөр орон зайн муж." },
      { termEn: "Spin-Pair Repulsion", termMn: "Спин хослолын түлхэлт", definitionEn: "The repulsion between two electrons in the same orbital, making them easier to remove than unpaired electrons in equal-energy orbitals.", definitionMn: "Нэг орбитальд хамт оршдог хоёр электроны хоорондын цахилгаан түлхэлт." }
    ],
    formulas: [
      { nameEn: "1st Ionisation Energy", nameMn: "1-р иончлолын энерги", formula: "X(g) → X⁺(g) + e⁻", note: "Standard state symbols (g) are compulsory in exams" },
      { nameEn: "nth Ionisation Energy", nameMn: "n-р иончлолын энерги", formula: "X^(n-1)+(g) → X^n+(g) + e⁻", note: "Always gaseous ions" }
    ],
    examStyleTips: [
      "Missing state symbols (g) in Ionisation Energy definitions/equations is an automatic mark loss!",
      "Transition metal ionisation: Always remove 4s electrons before 3d electrons when forming cations (e.g. Fe is [Ar]3d⁶4s², but Fe²⁺ is [Ar]3d⁶).",
      "To find the group of an unknown element from successive IEs, look for the largest ratio/jump. If the jump is between 3rd and 4th, it has 3 valence electrons -> Group 13."
    ]
  },
  {
    id: 3,
    number: 3,
    level: "AS",
    category: "Physical",
    titleEn: "Atoms, Molecules & Stoichiometry",
    titleMn: "Атом, молекул ба стехиометр (Молийн тооцоо)",
    descriptionEn: "Unified atomic mass, relative atomic/molecular mass, the mole & Avogadro constant, reacting masses, gas volumes, solution concentrations, and titrations.",
    descriptionMn: "Нэгдсэн массын нэгж (u), харьцангуй молекул масс, Авогадрогийн тогтмол ба моль, урвалын масс, хийн эзлэхүүн (24 dm³), уусмалын концентраци, титрлэлт, бүтээгдэхүүний гарц.",
    learningIntentionsEn: [
      "Define unified atomic mass unit (u): 1/12th of the mass of a carbon-12 atom",
      "Define relative atomic mass Ar, relative molecular mass Mr, and relative formula mass",
      "Define the mole in terms of Avogadro constant L = 6.02 × 10²³ particles mol⁻¹",
      "Perform calculations involving n = m/M, n = c × V (in dm³), and gas volume at r.t.p. V = n × 24.0 dm³",
      "Determine empirical and molecular formulae from combustion and percentage composition data",
      "Perform titration calculations, identify limiting reagents, and calculate percentage yield"
    ],
    learningIntentionsMn: [
      "Нэгдсэн массын нэгж: нүүрстөрөгч-12 атомын массын 1/12",
      "Харьцангуй атом/молекул масс Ar, Mr тооцоолох",
      "Молийн тодорхойлолт ба Авогадрогийн тогтмол: 6.02 × 10²³ ширхэг бөөм",
      "Молийн үндсэн томьёонууд: n = m / M, n = c × V (dm³), Хийн эзлэхүүн V = n × 24.0 dm³ (х.н.)",
      "Эмпирик ба молекулын томьёог хувь найрлагаас тооцоолох",
      "Титрлэлтийн тооцоо, урвалын хязгаарлагч бодис (limiting reagent) болон хувийн гарц (percentage yield) олох"
    ],
    subtopics: [
      {
        id: "3.1",
        number: "3.1",
        titleEn: "Relative Masses & Mass Spectrometry",
        titleMn: "Харьцангуй масс ба Масс-спектрометр",
        summaryEn: "Ar = weighted average mass of an atom compared to 1/12th carbon-12. Calculated from mass spectrum: Σ(isotopic mass × % abundance) / 100.",
        summaryMn: "Ar = бүх изотопуудын дундаж жин. Ar = (масс₁ × %₁ + масс₂ × %₂) / 100.",
        keyConcepts: ["Unified atomic mass 1 u = 1.66 × 10⁻²⁷ kg", "Mass spectrum m/e peaks", "[M+1] peak gives carbon count: n = 100/1.1 × ([M+1]/M)"],
        keyEquations: ["Ar = Σ (Isotopic mass × % abundance) / 100", "n (Carbons) = (100 / 1.1) × (abundance of [M+1] / abundance of M+)"]
      },
      {
        id: "3.2",
        number: "3.2",
        titleEn: "The Mole & Reacting Masses",
        titleMn: "Моль ба урвалын массын тооцоо",
        summaryEn: "1 mol = 6.02 × 10²³ particles. Number of moles n = mass (g) / Molar mass (g mol⁻¹). Reacting mass stoichiometry.",
        summaryMn: "n = m / M. Тэгшитгэлийн стехиометрийн харьцааг ашиглан урвалд орох болон үүсэх бодисын массыг тооцоолно.",
        keyConcepts: ["Avogadro constant NA = 6.02 × 10²³ mol⁻¹", "Limiting reagent determines maximum theoretical yield"],
        keyEquations: ["moles = mass / molar mass (n = m/M)", "Percentage yield = (actual yield / theoretical yield) × 100%"]
      },
      {
        id: "3.3",
        number: "3.3",
        titleEn: "Gas Volumes & Solution Concentrations",
        titleMn: "Хийн эзлэхүүн ба Уусмалын концентраци",
        summaryEn: "At r.t.p. (20°C, 1 atm), 1 mol of any gas occupies 24.0 dm³ (24 000 cm³). Concentration c = n / V(dm³). In titrations, n(acid) × stoichiometric ratio = n(alkali).",
        summaryMn: "Өрөөний нөхцөлд (20°C, 1 атм) 1 моль хий 24.0 dm³ эзлэхүүн эзэлнэ. Уусмалын концентраци c = n / V (dm³ = cm³ / 1000).",
        keyConcepts: ["Molar gas volume = 24.0 dm³ mol⁻¹ at r.t.p.", "1 dm³ = 1000 cm³", "Concordant titres must be within 0.10 cm³"],
        keyEquations: ["Gas volume V = n × 24.0 dm³", "Concentration c (mol dm⁻³) = moles / volume (dm³)", "moles = c × V (cm³) / 1000"]
      },
      {
        id: "3.4",
        number: "3.4",
        titleEn: "Empirical & Molecular Formulae",
        titleMn: "Эмпирик ба молекулын томьёо",
        summaryEn: "Empirical formula is the simplest whole number ratio of atoms. Molecular formula is the actual number of atoms in a molecule.",
        summaryMn: "Эмпирик томьёо = атомуудын хамгийн бага бүхэл тоон харьцаа. Молекулын томьёо = эмпирик томьёоны бүхэл үржвэр (Mr / empirical Mr).",
        keyConcepts: ["Step 1: % to grams -> Step 2: divide by Ar -> Step 3: divide by smallest -> Step 4: whole number ratio"],
        keyEquations: ["Multiplier x = Mr / (Empirical Formula Mass)", "Molecular Formula = (Empirical Formula) × x"]
      }
    ],
    keyTerms: [
      { termEn: "Mole", termMn: "Моль", definitionEn: "The amount of substance which contains 6.02 × 10²³ specified particles (atoms, molecules, ions, or electrons).", definitionMn: "6.02 × 10²³ ширхэг тодорхой бөөмс (атом, молекул, ион г.м) агуулсан бодисын тоо хэмжээ." },
      { termEn: "Limiting Reagent", termMn: "Хязгаарлагч бодис", definitionEn: "The reactant that is completely consumed first in a reaction, limiting the amount of product that can be formed.", definitionMn: "Урвалд түрүүлж бүрэн зарцуулагдаж, үүсэх бүтээгдэхүүний дээд хэмжээг хязгаарладаг эх бодис." },
      { termEn: "Relative Atomic Mass (Ar)", termMn: "Харьцангуй атом масс", definitionEn: "The ratio of the weighted average mass of atoms of an element to 1/12th of the mass of a carbon-12 atom.", definitionMn: "Нэг элементийн атомуудын дундаж массыг нүүрстөрөгч-12 атомын массын 1/12-д харьцуулсан харьцаа." }
    ],
    formulas: [
      { nameEn: "Moles from Mass", nameMn: "Массаас моль олох", formula: "n = m / M", note: "mass in grams, M in g mol⁻¹" },
      { nameEn: "Moles from Solution", nameMn: "Уусмалаас моль олох", formula: "n = c × V", note: "c in mol dm⁻³, V in dm³ (divide cm³ by 1000)" },
      { nameEn: "Gas Moles at r.t.p.", nameMn: "Хийн моль", formula: "n = V / 24.0", note: "V in dm³ at 20°C and 101 kPa" },
      { nameEn: "Percentage Yield", nameMn: "Хувийн гарц", formula: "% Yield = (Actual Mass / Theoretical Mass) × 100%", note: "Shows efficiency of reaction" }
    ],
    examStyleTips: [
      "Always check unit conversions: 1 dm³ = 1000 cm³. When using c × V, always divide cm³ by 1000!",
      "Express final answers to the same number of significant figures as the least accurate data in the question (usually 3 s.f.).",
      "In titration questions, average ONLY concordant titres (within 0.10 cm³ of each other) and discard the rough titre."
    ]
  },
  {
    id: 4,
    number: 4,
    level: "AS",
    category: "Physical",
    titleEn: "Chemical Bonding & Shapes of Molecules",
    titleMn: "Химийн холбоо ба молекулын хэлбэр (VSEPR)",
    descriptionEn: "Ionic, covalent, coordinate (dative), metallic bonding, VSEPR theory, hybridization (sp, sp², sp³), sigma & pi bonds, electronegativity & intermolecular forces (id-id, pd-pd, H-bonds).",
    descriptionMn: "Ионы, ковалентын, координацын (донор-акцептор), металлын холбоо, VSEPR онол, эрлийзжилт, сигма ба пи холбоо, устөрөгчийн холбоо ба ван-дер-Ваальсын хүч.",
    learningIntentionsEn: [
      "Define ionic, covalent, coordinate (dative), and metallic bonding",
      "Draw dot-and-cross diagrams for ionic compounds and covalent molecules (including expanded octets SF₆, PCl₅)",
      "Predict molecular shapes and bond angles using VSEPR theory (lone pairs repel more than bond pairs)",
      "Describe hybridization (sp, sp², sp³) and distinguish end-on σ (sigma) overlap from sideways π (pi) overlap",
      "Explain electronegativity trends and polarity (dipole moments)",
      "Distinguish intermolecular forces: London dispersion (id-id), permanent dipole (pd-pd), and hydrogen bonding"
    ],
    learningIntentionsMn: [
      "Ионы, ковалентын, координацын, металлын холбооны мөн чанар, онцлог",
      "Цэг-хэрээс (dot-and-cross) диаграмм зурах (октет тэлэгдсэн SF₆, PCl₅ зэрэг)",
      "VSEPR онолоор молекулын хэлбэр ба холбооны өнцгийг тодорхойлох: LP-LP > LP-BP > BP-BP",
      "sp, sp², sp³ эрлийзжилт, σ (шулуун давхцал) ба π (хажуугийн давхцал) холбоонуудын үүсэл",
      "Цахилгаан сөрөг чанарын ялгаагаар туйлт холбоо ба нийлбэр диполь моментийг олох",
      "Молекул хоорондын хүч: Агшин зуурын индукцлэгдсэн диполь (id-id), байнгын диполь (pd-pd), устөрөгчийн холбоо"
    ],
    subtopics: [
      {
        id: "4.1",
        number: "4.1",
        titleEn: "Ionic, Covalent & Coordinate Bonding",
        titleMn: "Ионы, ковалентын ба координацын холбоо",
        summaryEn: "Ionic: electrostatic attraction between oppositely charged ions in a lattice. Covalent: electrostatic attraction between two nuclei and a shared pair of electrons. Coordinate: both bonding electrons donated by one atom with a lone pair (e.g. NH₄⁺, Al₂Cl₆).",
        summaryMn: "Координацын холбоо: Нэг атом (донор) нь хос электроноо дутуу орбиталтай өөр атомд (акцептор) өгч үүсгэдэг холбоо.",
        keyConcepts: ["Electrostatic attraction", "Coordinate / dative bond represented with arrow →", "Dimer Al₂Cl₆ with 2 dative bonds"]
      },
      {
        id: "4.2",
        number: "4.2",
        titleEn: "VSEPR Theory & Molecular Geometry",
        titleMn: "VSEPR онол ба молекулын хэлбэрүүд",
        summaryEn: "Valence Shell Electron Pair Repulsion: electron pairs repel to minimize repulsion. Order of repulsion: LP-LP > LP-BP > BP-BP. Each lone pair reduces bond angle by ~2.5°.",
        summaryMn: "Электрон хосуудын түлхэлтийн хүч: Сул хос-Сул хос > Сул хос-Холбоот хос > Холбоот хос-Холбоот хос. Сул хос бүр холбооны өнцгийг ~2.5°-аар багасгана.",
        keyConcepts: ["Linear (180°: CO₂, BeCl₂)", "Trigonal planar (120°: BF₃)", "Tetrahedral (109.5°: CH₄)", "Pyramidal (107°: NH₃, 1 LP)", "Non-linear/V-shaped (104.5°: H₂O, 2 LP)", "Trigonal bipyramidal (90° & 120°: PCl₅)", "Octahedral (90°: SF₆)"]
      },
      {
        id: "4.3",
        number: "4.3",
        titleEn: "Sigma (σ) and Pi (π) Bonds & Hybridization",
        titleMn: "Сигма (σ) ба Пи (π) холбоо & Эрлийзжилт",
        summaryEn: "σ bond: direct end-on overlap of orbitals along the internuclear axis (free rotation). π bond: sideways overlap of unhybridized parallel p orbitals (restricted rotation, planar).",
        summaryMn: "Нэг холбоо = 1 σ. Давхар холбоо = 1 σ + 1 π. Гурвалсан холбоо = 1 σ + 2 π. π холбоо нь чөлөөт эргэлтийг хааж cis/trans изомер үүсгэнэ.",
        keyConcepts: ["sp³ = 4 single σ bonds (109.5° tetrahedral)", "sp² = 3 σ + 1 π bond (120° trigonal planar)", "sp = 2 σ + 2 π bonds (180° linear)"]
      },
      {
        id: "4.4",
        number: "4.4",
        titleEn: "Intermolecular Forces & Hydrogen Bonding",
        titleMn: "Молекул хоорондын хүч ба Устөрөгчийн холбоо",
        summaryEn: "id-id (London dispersion): temporary fluctuating dipoles, increases with total electrons & surface contact area. pd-pd: polar molecules with permanent dipole. H-bonding: H directly bonded to N, O, or F attracting lone pair on adjacent N, O, F. Causes high BP, surface tension, and ice being less dense than liquid water.",
        summaryMn: "Устөрөгчийн холбоо: F, O, N атомд холбогдсон H атом нь хөрш молекулын F, O, N дээрх сул электрон хостой таталцана. Усны өвөрмөц шинжүүд (мөс уснаас хөнгөн, өндөр буцлах цэг).",
        keyConcepts: ["Relative strength: Ionic > Covalent > H-bond (20-50 kJ) > pd-pd (5-20 kJ) > id-id (1-20 kJ)", "Anomalous properties of water"]
      }
    ],
    keyTerms: [
      { termEn: "Coordinate Bond (Dative Covalent)", termMn: "Координацын (Донор-акцептор) холбоо", definitionEn: "A covalent bond in which both of the shared electrons come from the same atom.", definitionMn: "Холбоонд оролцож буй хоёр электроныг зөвхөн нэг атом нь нийлүүлж үүсгэсэн ковалентын холбоо." },
      { termEn: "Electronegativity", termMn: "Цахилгаан сөрөг чанар", definitionEn: "The power of an atom covalently bonded to another atom to attract the bonding pair of electrons towards itself.", definitionMn: "Ковалент холбоо үүсгэсэн атом холбооны хос электроныг өөртөө татах чадвар." },
      { termEn: "Hydrogen Bond", termMn: "Устөрөгчийн холбоо", definitionEn: "The strongest intermolecular force formed between a δ+ H atom attached to F, O, or N, and a lone pair on a neighbouring F, O, or N atom.", definitionMn: "F, O, N атомаас электрон татагдсанаар үүссэн δ+ цэнэгтэй H атом ба хөрш F, O, N-ийн сул хос электроны хоорондын хүчтэй молекул хоорондын таталцал." }
    ],
    formulas: [
      { nameEn: "Bond Order", nameMn: "Холбооны эрэмбэ", formula: "Single = 1σ; Double = 1σ + 1π; Triple = 1σ + 2π", note: "Determines bond length and strength" }
    ],
    examStyleTips: [
      "In VSEPR explanations, always mention: 1) Number of electron pairs around central atom; 2) How many are bonding pairs vs lone pairs; 3) State that electron pairs repel to maximum separation; 4) State that lone pairs repel more than bonding pairs.",
      "Symmetrical molecules with polar bonds (e.g. CCl₄, CO₂, BF₃, SF₆) have zero overall dipole moment because individual bond dipoles cancel out."
    ]
  },
  {
    id: 5,
    number: 5,
    level: "AS",
    category: "Physical",
    titleEn: "States of Matter & The Gas Laws",
    titleMn: "Бодисын төлөв ба Хийн хуулиуд",
    descriptionEn: "Kinetic theory of gases, ideal gas equation pV = nRT, real vs ideal gases, and crystal lattice structures (giant ionic, giant metallic, giant covalent, simple molecular).",
    descriptionMn: "Хийн кинетик онол, идеаль хийн төлөвийн тэгшитгэл pV = nRT, бодит ба идеаль хийн ялгаа, талст оронт торын төрлүүд (ионы, металлын, ковалентын аварга тор, энгийн молекулын тор).",
    learningIntentionsEn: [
      "State assumptions of kinetic theory of gases: zero particle volume, no intermolecular forces, elastic collisions",
      "Explain conditions where real gases deviate from ideal behavior (very high pressure, very low temperature)",
      "Use the ideal gas equation pV = nRT in calculations and finding Mr of volatile liquids (Mr = mRT / pV)",
      "Describe structures and properties of: giant ionic (NaCl, MgO), simple molecular (I₂, C₆₀, ice), giant covalent (diamond, graphite, SiO₂), and giant metallic (Cu, alloys)"
    ],
    learningIntentionsMn: [
      "Идеаль хийн кинетик онолын таамаглалууд (эгэл хэсгүүдийн эзлэхүүн маш бага, таталцах хүчгүй, уян харимхай мөргөлдөөн)",
      "Бодит хий идеаль хийнээс гажих нөхцөл: Маш өндөр даралт, маш бага температур",
      "Идеаль хийн тэгшитгэл pV = nRT ашиглан Mr болон эзлэхүүн, даралт тооцоолох (нэгжийн хувиргалт чухал!)",
      "Талст бүтэц ба холбооны төрлүүдийн шинж чанар: хайлах/буцлах цэг, цахилгаан дамжуулалт, хатуулаг, уусах чанар"
    ],
    subtopics: [
      {
        id: "5.1",
        number: "5.1",
        titleEn: "Ideal Gas Equation (pV = nRT)",
        titleMn: "Идеаль хийн тэгшитгэл ба нэгжийн хувиргалт",
        summaryEn: "pV = nRT where p is in Pa, V is in m³, T is in K (T(K) = °C + 273), R = 8.31 J K⁻¹ mol⁻¹. Finding molar mass: Mr = mRT / pV.",
        summaryMn: "Даралт p нь Pa (1 kPa = 1000 Pa), Эзлэхүүн V нь m³ (1 m³ = 1000 dm³ = 1 000 000 cm³), T нь Kelvin (°C + 273).",
        keyConcepts: ["Unit precision: Pa and m³", "Mr = (m × R × T) / (p × V)"],
        keyEquations: ["pV = nRT", "pV = (m / Mr) RT", "Mr = mRT / pV"]
      },
      {
        id: "5.2",
        number: "5.2",
        titleEn: "Lattice Structures & Physical Properties",
        titleMn: "Талст бүтэц ба физик шинжүүд",
        summaryEn: "Giant ionic (high MP, conducts only molten/aqueous). Giant covalent (diamond, SiO₂ high MP non-conductor; graphite conducts due to delocalised π electrons). Giant metallic (high MP, malleable, conducts solid/liquid). Simple molecular (low MP, non-conductor).",
        summaryMn: "Бүтцийн ангилал ба онцлог: Ионы тор (хайламж/уусмалдаа ионоор дамжуулна), Металл (чөлөөт электроноор хатуу ба шингэндээ дамжуулна), Графит (давхарга хоорондын чөлөөт электроноор дамжуулна).",
        keyConcepts: ["Cleavage planes in ionic lattices -> brittle", "Delocalised electrons in metals -> malleable & conductive", "Allotropes of carbon: diamond, graphite, graphene, C₆₀"]
      }
    ],
    keyTerms: [
      { termEn: "Ideal Gas", termMn: "Идеаль хий", definitionEn: "A gas whose particles have negligible volume and zero intermolecular forces, obeying pV = nRT under all conditions.", definitionMn: "Эгэл хэсгүүдийн эзлэхүүн ба харилцан үйлчлэлийн хүчийг тооцохгүй, бүх нөхцөлд pV=nRT хуульд захирагдах онолын хий." },
      { termEn: "Allotrope", termMn: "Аллотропи / Дүр хувирал", definitionEn: "Different structural crystalline forms of the same element in the same physical state (e.g. diamond and graphite).", definitionMn: "Нэг элементийн хатуу төлөв дэх ялгаатай талст бүтэц бүхий хэлбэрүүд." }
    ],
    formulas: [
      { nameEn: "Ideal Gas Law", nameMn: "Идеаль хийн хууль", formula: "pV = nRT", note: "p in Pa, V in m³, T in K, R = 8.31 J K⁻¹ mol⁻¹" },
      { nameEn: "Molar Mass from Gas", nameMn: "Хийнээс молекул масс олох", formula: "Mr = (m × R × T) / (p × V)", note: "Convert cm³ to m³ by dividing by 10⁶" }
    ],
    examStyleTips: [
      "Watch units in pV = nRT! 100 kPa = 100 000 Pa; 50 cm³ = 50 × 10⁻⁶ m³; 25°C = 298 K.",
      "Real gases deviate most from ideal behavior at high pressure (molecules are close, volume cannot be ignored) and low temperature (molecules move slowly, intermolecular forces take effect)."
    ]
  },
  {
    id: 6,
    number: 6,
    level: "AS",
    category: "Physical",
    titleEn: "Enthalpy Changes (Thermochemistry)",
    titleMn: "Энтальпийн өөрчлөлт (Термохими & Гессийн хууль)",
    descriptionEn: "Exothermic and endothermic reactions, enthalpy profile diagrams, activation energy, standard conditions, calorimetry (q = mcΔT), Hess's Law cycles, and bond energy calculations.",
    descriptionMn: "Экзотерм ба эндотерм урвал, урвалын энергийн профиль, идэвхжлийн энерги, калориметр (q = mcΔT), стандарт энтальпиуд (ΔH⦵f, ΔH⦵c, ΔH⦵neut), Гессийн хуулийн цикл, холбооны энерги.",
    learningIntentionsEn: [
      "Explain enthalpy changes (ΔH): Exothermic (ΔH < 0, heat released), Endothermic (ΔH > 0, heat absorbed)",
      "Draw reaction pathway diagrams showing reactants, products, activation energy (Ea), and ΔH",
      "Define standard enthalpy changes: Formation (ΔH⦵f), Combustion (ΔH⦵c), Neutralisation (ΔH⦵neut), Reaction (ΔH⦵r)",
      "Calculate heat transferred from calorimetry: q = mcΔT, and molar enthalpy change ΔH = -q / n",
      "Apply Hess's Law to construct energy cycles: ΔHr = ΣΔHf(products) - ΣΔHf(reactants) and ΔHr = ΣΔHc(reactants) - ΣΔHc(products)",
      "Calculate ΔHr using average bond energies: ΔHr = Σ(bonds broken) - Σ(bonds formed)"
    ],
    learningIntentionsMn: [
      "Энтальпийн өөрчлөлт: Экзотерм (ΔH хасах, дулаан ялгарна), Эндотерм (ΔH нэмэх, дулаан шингээнэ)",
      "Энергийн профиль зурах (Ea сум эх бодисоос дээш, ΔH сум эх бодисоос бүтээгдэхүүн рүү)",
      "Стандарт энтальпийн тодорхойлолтууд: Үүсэхийн (ΔH⦵f), Шатахын (ΔH⦵c), Саармагжихын (ΔH⦵neut)",
      "Калориметрийн тооцоо: q = mcΔT (J), 1 моль бодист шилжүүлэх: ΔH = -q / (n × 1000) (kJ mol⁻¹)",
      "Гессийн хуулийн цикл: Үүсэхийн энтальпиар ΔHr = ΣΔHf(бүт) - ΣΔHf(эх); Шатахын энтальпиар ΔHr = ΣΔHc(эх) - ΣΔHc(бүт)",
      "Холбооны энергийн тооцоо: Холбоо тасрах = Эндотерм (+), Холбоо үүсэх = Экзотерм (-). ΔHr = Σ(тасарсан) - Σ(үүссэн)"
    ],
    subtopics: [
      {
        id: "6.1",
        number: "6.1",
        titleEn: "Calorimetry & Measuring Enthalpy",
        titleMn: "Калориметр ба дулааны хэмжилт",
        summaryEn: "q = mcΔT where m is mass of solution in g (1 cm³ = 1 g), c = 4.18 J g⁻¹ °C⁻¹, ΔT = temperature change. Molar ΔH = -q / n (in kJ mol⁻¹).",
        summaryMn: "q = mcΔT. Уусмалын 1 cm³ = 1 g гэж тооцно. ΔH = -q / (n × 1000) kJ mol⁻¹. Температур өссөн бол ΔH сөрөг тэмдэгтэй байна!",
        keyConcepts: ["Specific heat capacity of water = 4.18 J g⁻¹ K⁻¹", "Heat losses cause experimental ΔH to be less exothermic than data book"],
        keyEquations: ["q = mcΔT (J)", "ΔH = -q / (1000 × n) (kJ mol⁻¹)"]
      },
      {
        id: "6.2",
        number: "6.2",
        titleEn: "Standard Enthalpy Definitions",
        titleMn: "Стандарт энтальпийн тодорхойлолтууд",
        summaryEn: "Standard conditions: 298 K (25°C), 101 kPa (1 atm), standard physical states. ΔH⦵f of any pure element in standard state = 0.",
        summaryMn: "Стандарт нөхцөл: 298 K, 101 kPa. Цэвэр элементийн үүсэхийн стандарт энтальпи ΔH⦵f = 0.",
        keyConcepts: ["ΔH⦵f: Formation of 1 mol compound from elements", "ΔH⦵c: Complete combustion of 1 mol substance in excess O₂", "ΔH⦵neut: Formation of 1 mol H₂O from acid + alkali (always ~ -57.1 kJ mol⁻¹)"]
      },
      {
        id: "6.3",
        number: "6.3",
        titleEn: "Hess's Law & Enthalpy Cycles",
        titleMn: "Гессийн хууль ба энергийн цикл",
        summaryEn: "Total enthalpy change is independent of the route taken. From ΔHf: ΔHr = ΣΔHf(products) - ΣΔHf(reactants). From ΔHc: ΔHr = ΣΔHc(reactants) - ΣΔHc(products).",
        summaryMn: "Гессийн хууль: Химийн урвалын нийт энтальпийн өөрчлөлт нь анхны ба эцсийн төлөв ижил үед урвал явагдсан замаас үл хамаарна.",
        keyEquations: ["ΔH(route 1) = ΔH(route 2)", "ΔHr = ΣΔHf(products) - ΣΔHf(reactants)", "ΔHr = ΣΔHc(reactants) - ΣΔHc(products)"]
      },
      {
        id: "6.4",
        number: "6.4",
        titleEn: "Bond Energies & Reaction Enthalpy",
        titleMn: "Холбооны энерги ба урвалын энтальпи",
        summaryEn: "Bond breaking is endothermic (+), bond forming is exothermic (-). ΔHr = Σ(bonds broken) - Σ(bonds formed). Average bond energies give slight deviations from exact values.",
        summaryMn: "Холбоо тасрахад дулаан шингээнэ (+), шинэ холбоо үүсэхэд дулаан ялгарна (-).",
        keyEquations: ["ΔHr = Σ E(bonds broken) - Σ E(bonds formed)"]
      }
    ],
    keyTerms: [
      { termEn: "Hess's Law", termMn: "Гессийн хууль", definitionEn: "The total enthalpy change in a chemical reaction is independent of the route by which the reaction takes place, provided initial and final conditions are the same.", definitionMn: "Химийн урвалын нийт энтальпийн өөрчлөлт нь анхны ба эцсийн нөхцөлүүд ижил байх үед урвалын явсан замаас хамаарахгүй тогтмол байна." },
      { termEn: "Standard Enthalpy of Formation (ΔH⦵f)", termMn: "Үүсэхийн стандарт энтальпи", definitionEn: "The enthalpy change when one mole of a compound is formed from its elements under standard conditions in their standard states.", definitionMn: "Стандарт нөхцөлд орших элементүүдээс 1 моль нэгдэл үүсэх үеийн энтальпийн өөрчлөлт." },
      { termEn: "Bond Energy", termMn: "Холбооны энерги", definitionEn: "The energy needed to break one mole of a specific covalent bond in the gaseous state.", definitionMn: "Хийн төлөв дэх 1 моль тодорхой ковалент холбоог бүрэн таслахад шаардагдах энерги." }
    ],
    formulas: [
      { nameEn: "Calorimetry Heat", nameMn: "Дулааны тооцоо", formula: "q = mcΔT", note: "m in g, c = 4.18, ΔT in K or °C" },
      { nameEn: "Molar Enthalpy Change", nameMn: "Молийн энтальпийн өөрчлөлт", formula: "ΔH = -q / n", note: "Divide by 1000 for kJ mol⁻¹" },
      { nameEn: "Hess Cycle from ΔHf", nameMn: "Үүсэхийн энтальпиар бодох", formula: "ΔHr = ΣΔHf(products) - ΣΔHf(reactants)", note: "Multiply by stoichiometric coefficients" },
      { nameEn: "Bond Energy Equation", nameMn: "Холбооны энергийн томьёо", formula: "ΔHr = Σ(Bonds Broken) - Σ(Bonds Formed)", note: "Reactants broken minus products formed" }
    ],
    examStyleTips: [
      "In calorimetry, never forget the negative sign for exothermic reactions (ΔH = -mcΔT / n). Temperature increase = negative ΔH.",
      "In Hess's Law with ΔHf, the elements go at the bottom with arrows pointing UP to reactants and products.",
      "In Hess's Law with ΔHc, the combustion products (CO₂, H₂O) go at the bottom with arrows pointing DOWN from reactants and products."
    ]
  },
  {
    id: 7,
    number: 7,
    level: "AS",
    category: "Inorganic",
    titleEn: "Redox Reactions",
    titleMn: "Исэлдэн ангижрах урвал (Redox & Oxidation Numbers)",
    descriptionEn: "Oxidation numbers, OIL RIG (electron transfer), oxidising and reducing agents, balancing complex redox equations using oxidation numbers, and disproportionation.",
    descriptionMn: "Исэлдэхүйн зэрэг, электрон шилжилт (OIL RIG), исэлдүүлэгч ба ангижруулагч бодис, исэлдэхүйн зэргээр тэгшитгэл тэнцүүлэх, диспропорционаци (өөрөө исэлдэн-ангижрах).",
    learningIntentionsEn: [
      "Calculate oxidation numbers of elements in compounds and complex ions following rules",
      "Define oxidation as loss of electrons / increase in oxidation number; reduction as gain of electrons / decrease in oxidation number",
      "Identify oxidising agents (electron acceptors, ox. number decreases) and reducing agents (electron donors, ox. number increases)",
      "Balance full redox and ionic equations using the oxidation number method and half-equations",
      "Explain disproportionation: simultaneous oxidation and reduction of the same element in a single reaction (e.g. Cl₂ + 2NaOH -> NaCl + NaClO + H₂O)"
    ],
    learningIntentionsMn: [
      "Нэгдэл ба ион дахь элементүүдийн исэлдэхүйн зэргийг дүрмийн дагуу тодорхойлох",
      "Исэлдэх = электрон алдах / исэлдэхүйн зэрэг өсөх; Ангижрах = электрон авах / исэлдэхүйн зэрэг буурах (OIL RIG)",
      "Исэлдүүлэгч ба ангижруулагч бодисыг таних",
      "Исэлдэхүйн зэргийн өөрчлөлтөөр болон хагас тэгшитгэлийн аргаар исэлдэн ангижрах урвалыг тэнцүүлэх",
      "Диспропорционацийн урвал: нэг элементийн атомууд нэгэн зэрэг исэлдэж бас ангижрах (жишээ нь Cl₂ хүйтэн/халуун шүлттэй харилцан үйлчлэх)"
    ],
    subtopics: [
      {
        id: "7.1",
        number: "7.1",
        titleEn: "Oxidation Numbers & Rules",
        titleMn: "Исэлдэхүйн зэрэг ба тооцох дүрмүүд",
        summaryEn: "Uncombined element = 0; Group 1 = +1; Group 2 = +2; F = -1; H = +1 (except hydrides -1); O = -2 (except peroxides -1, F₂O +2). Sum of ox. numbers in neutral compound = 0; in ion = ion charge.",
        summaryMn: "Чөлөөт элемент = 0; Бүлэг 1 = +1; Бүлэг 2 = +2; F = -1; H = +1 (гидридэд -1); O = -2 (хэт исэлд -1). Ионы хувьд нийлбэр нь ионы цэнэгтэй тэнцүү.",
        keyConcepts: ["Roman numerals in names indicate oxidation number: Iron(III) oxide = Fe₂O₃", "S in SO₄²⁻ is +6, N in NO₃⁻ is +5"]
      },
      {
        id: "7.2",
        number: "7.2",
        titleEn: "Balancing Redox Equations & Half-Equations",
        titleMn: "Redox тэгшитгэл ба Хагас тэгшитгэл тэнцүүлэх",
        summaryEn: "1) Identify ox. number changes; 2) Balance electron loss & gain; 3) Balance ionic charges with H⁺; 4) Balance H and O with H₂O.",
        summaryMn: "1) Исэлдэхүйн зэргийн өөрчлөлтийг олно; 2) Алдсан/авсан электроныг тэнцүүлнэ; 3) Цэнэгийг H⁺-оор тэнцүүлнэ; 4) H ба O-г H₂O-оор тэнцүүлнэ.",
        keyConcepts: ["MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (purple to colourless)", "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (orange to green)"],
        keyEquations: ["MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O"]
      },
      {
        id: "7.3",
        number: "7.3",
        titleEn: "Disproportionation Reactions",
        titleMn: "Диспропорционацийн урвалууд",
        summaryEn: "Cold dilute NaOH (15°C): Cl₂ + 2NaOH → NaCl (ox -1) + NaClO (ox +1) + H₂O. Hot concentrated NaOH (70°C): 3Cl₂ + 6NaOH → 5NaCl (ox -1) + NaClO₃ (ox +5) + 3H₂O.",
        summaryMn: "Хлор хүйтэн шүлттэй (15°C) -> NaCl + NaClO (хлор 0-ээс -1 ба +1). Хлор халуун шүлттэй (70°C) -> 5NaCl + NaClO₃ (хлор 0-ээс -1 ба +5).",
        keyConcepts: ["Chlorine water purification: Cl₂ + H₂O ⇌ HCl + HClO (kills bacteria)", "Self-oxidation/reduction"]
      }
    ],
    keyTerms: [
      { termEn: "Disproportionation", termMn: "Диспропорционаци", definitionEn: "A redox reaction in which the same element is simultaneously oxidised and reduced.", definitionMn: "Нэгэн зэрэг нэг элементийн атомууд исэлдэж бас ангижирдаг исэлдэн-ангижрах урвал." },
      { termEn: "Oxidising Agent", termMn: "Исэлдүүлэгч бодис", definitionEn: "A substance that oxidises another substance by accepting electrons, whilst itself being reduced.", definitionMn: "Бусад бодисоос электрон авч исэлдүүлээд, өөрөө ангижирдаг бодис." }
    ],
    formulas: [
      { nameEn: "Chlorine with Cold NaOH", nameMn: "Хлор хүйтэн шүлттэй", formula: "Cl₂(aq) + 2NaOH(aq) → NaCl(aq) + NaClO(aq) + H₂O(l)", note: "Bleach formation (chlorate(I))" },
      { nameEn: "Chlorine with Hot NaOH", nameMn: "Хлор халуун шүлттэй", formula: "3Cl₂(aq) + 6NaOH(aq) → 5NaCl(aq) + NaClO₃(aq) + 3H₂O(l)", note: "Forms chlorate(V)" }
    ],
    examStyleTips: [
      "In systematically naming oxyanions, always write oxidation state in Roman numerals: NaClO is sodium chlorate(I), NaClO₃ is sodium chlorate(V).",
      "When balancing half-equations in acidic solution: balance other elements first -> balance O by adding H₂O -> balance H by adding H⁺ -> balance charge by adding e⁻."
    ]
  },
  {
    id: 8,
    number: 8,
    level: "AS",
    category: "Physical",
    titleEn: "Equilibria (Chemical & Acid-Base)",
    titleMn: "Химийн тэнцвэр ба Хүчил-Шүлтийн тэнцвэр",
    descriptionEn: "Dynamic equilibrium, Le Chatelier's principle (concentration, pressure, temperature, catalyst), Kc and Kp expressions, Haber & Contact processes, Brønsted-Lowry acids/bases, pH curves & indicators.",
    descriptionMn: "Динамик тэнцвэр, Ле Шательегийн зарчим, Kc ба Kp тэнцвэрийн тогтмолын илэрхийлэл ба тооцоо, Хабер ба Контакт процесс, Брёнстед-Лоурийн хүчил/суурь, титрлэлтийн pH муруй ба индикатор сонголт.",
    learningIntentionsEn: [
      "Explain dynamic equilibrium (rate of forward = backward, concentrations constant in a closed system)",
      "State and apply Le Chatelier's principle to predict shifts with changes in concentration, pressure, and temperature",
      "Construct equilibrium expressions for Kc (concentrations) and Kp (partial pressures), and determine their units",
      "Perform calculations for Kc and Kp (mole fractions, partial pressures)",
      "Explain industrial compromises in the Haber process (450°C, 200 atm, Fe catalyst) and Contact process (450°C, 1-2 atm, V₂O₅ catalyst)",
      "Describe Brønsted-Lowry theory (acids = proton donors, bases = proton acceptors)",
      "Interpret titration curves (strong/weak combinations) and select suitable indicators based on vertical pH jump"
    ],
    learningIntentionsMn: [
      "Динамик тэнцвэрийн мөн чанар: Шулуун ба буцах урвалын хурд тэнцэж, битүү системд концентрациуд тогтмолжих",
      "Ле Шательегийн зарчим: Тэнцвэрт байгаа системд гадны нөлөө үзүүлэхэд тэнцвэр уг нөлөөг бууруулах чиглэлд шилжинэ",
      "Kc (молийн концентрациар) ба Kp (хэсгийн даралтаар) илэрхийлэл бичих, нэгжийг гаргах",
      "Молийн хувь (mole fraction) ба хэсгийн даралт (partial pressure = mole fraction × P_total) ашиглан Kp бодох",
      "Хабер ба Контакт процессын үйлдвэрлэлийн оновчтой нөхцөлүүд",
      "Брёнстед-Лоурийн хүчил-суурийн онол, холбогдсон (conjugate) хос, хүчтэй/сул хүчлийн ялгаа",
      "Титрлэлтийн pH муруй ба тохирох индикаторыг үсрэлтийн мужаар сонгох (Methyl orange: pH 3.2-4.4, Phenolphthalein: pH 8.2-10.0)"
    ],
    subtopics: [
      {
        id: "8.1",
        number: "8.1",
        titleEn: "Le Chatelier's Principle & Equilibrium Shifts",
        titleMn: "Ле Шательегийн зарчим & Тэнцвэрийн шилжилт",
        summaryEn: "Concentration: adding reactant shifts right. Pressure: increasing P shifts to side with FEWER gas moles. Temperature: increasing T favors ENDOTHERMIC direction. Catalyst: increases rates equally, no shift in position, reaches equilibrium faster.",
        summaryMn: "Даралт ихэсгэхэд хийн молийн тоо цөөнтэй тал руу шилжинэ. Температур өсгөхөд эндотерм чиглэл рүү шилжинэ. Катализатор тэнцвэрийн байрлалыг өөрчлөхгүй!",
        keyConcepts: ["Temperature is the ONLY factor that changes the numerical value of Kc and Kp!"]
      },
      {
        id: "8.2",
        number: "8.2",
        titleEn: "Equilibrium Constants: Kc and Kp",
        titleMn: "Тэнцвэрийн тогтмолууд: Kc ба Kp",
        summaryEn: "For mA + nB ⇌ pC + qD: Kc = [C]^p [D]^q / ([A]^m [B]^n). Solids and pure liquids are omitted. Kp = (pC)^p (pD)^q / ((pA)^m (pB)^n). Partial pressure pA = mole fraction(A) × Total Pressure.",
        summaryMn: "Kc = [бүтээгдэхүүн]^коэфф / [эх бодис]^коэфф. Kp нь хийн хэсгийн даралтаар илэрхийлэгдэнэ. Хатуу бодисыг бичихгүй.",
        keyEquations: ["Kc = [C]^p [D]^q / ([A]^m [B]^n)", "Mole fraction xA = nA / nTotal", "pA = xA × PTotal", "Kp = (pC)^p (pD)^q / ((pA)^m (pB)^n)"]
      },
      {
        id: "8.3",
        number: "8.3",
        titleEn: "Acids, Bases & Titration pH Curves",
        titleMn: "Хүчил, сууриуд ба Титрлэлтийн pH муруй",
        summaryEn: "Strong acid + Strong base: vertical jump pH 3-11 (Indicator: Methyl orange or Phenolphthalein). Strong acid + Weak base: vertical jump pH 3-7 (Methyl orange). Weak acid + Strong base: vertical jump pH 7-11 (Phenolphthalein). Weak acid + Weak base: no sharp vertical jump (No indicator suitable).",
        summaryMn: "Титрлэлтийн үсрэлт дээр индикаторын өнгө хувирах муж давхцаж байх ёстой. Сул хүчил + сул суурийн титрлэлтэд тохирох индикатор байхгүй (pH метр хэрэглэнэ).",
        keyConcepts: ["Methyl orange: red (acid) -> yellow (alkali), end point orange ~pH 3.7", "Phenolphthalein: colourless (acid) -> pink (alkali), end point ~pH 9.3"]
      }
    ],
    keyTerms: [
      { termEn: "Le Chatelier's Principle", termMn: "Ле Шательегийн зарчим", definitionEn: "If a change is made to a system at dynamic equilibrium, the position of equilibrium moves to minimise this change.", definitionMn: "Динамик тэнцвэрт байгаа системд гадны нөлөө үзүүлэхэд тэнцвэр уг өөрчлөлтийг багасгах чиглэлд шилжинэ." },
      { termEn: "Partial Pressure", termMn: "Хэсгийн даралт", definitionEn: "The pressure exerted by an individual gas in a mixture if it occupied the entire container alone.", definitionMn: "Хийн хольц дахь тухайн нэг хийн бие даан үзүүлэх даралт." }
    ],
    formulas: [
      { nameEn: "Concentration Equilibrium Constant", nameMn: "Kc томьёо", formula: "Kc = [Products]^p / [Reactants]^r", note: "Square brackets = mol dm⁻³" },
      { nameEn: "Partial Pressure from Mole Fraction", nameMn: "Хэсгийн даралт", formula: "p(A) = (nA / nTotal) × PTotal", note: "Sum of mole fractions = 1.0" }
    ],
    examStyleTips: [
      "CRITICAL: Only TEMPERATURE changes the numerical value of Kc or Kp. Changes in concentration or pressure change equilibrium position but NOT the equilibrium constant value.",
      "In Kp expressions, write round brackets with subscript p, NEVER square brackets: e.g. (pNH₃)² / ((pN₂) × (pH₂)³)."
    ]
  },
  {
    id: 9,
    number: 9,
    level: "AS",
    category: "Physical",
    titleEn: "Rates of Reaction",
    titleMn: "Урвалын хурд & Идэвхжлийн энерги",
    descriptionEn: "Rate of reaction definition, collision theory, factors affecting rate (concentration, pressure, temperature, catalyst), Maxwell-Boltzmann distribution curve, and homogeneous vs heterogeneous catalysis.",
    descriptionMn: "Урвалын хурдны тодорхойлолт, мөргөлдөөний онол, хурдад нөлөөлөх хүчин зүйлс, Максвелл-Больцманы энергийн түгээлтийн муруй, нэгэн төрлийн ба олон төрлийн катализ.",
    learningIntentionsEn: [
      "Define rate of reaction = change in concentration / time (units: mol dm⁻³ s⁻¹)",
      "Explain collision theory: particles must collide with correct orientation and energy ≥ Activation Energy (Ea)",
      "Explain effect of concentration/pressure: increased collision frequency",
      "Sketch and explain Maxwell-Boltzmann distribution curves at T and T+10°C (curve flattens, shifts right, area with E ≥ Ea roughly doubles)",
      "Explain how a catalyst works: provides an alternative reaction pathway with a lower activation energy (Ea)",
      "Distinguish homogeneous catalysis (same phase) from heterogeneous catalysis (different phase, adsorption -> bond weakening -> reaction -> desorption)"
    ],
    learningIntentionsMn: [
      "Урвалын хурд: нэгж хугацаанд зарцуулагдах эх бодис эсвэл үүсэх бүтээгдэхүүний концентрацийн өөрчлөлт",
      "Мөргөлдөөний онол: үр дүнтэй мөргөлдөөн явагдахын тулд зөв чиглэлтэй, идэвхжлийн энергээс (Ea) давсан энергитэй мөргөлдөх ёстой",
      "Концентраци ба даралтын нөлөө: нэгж хугацаан дахь мөргөлдөөний давтамж (frequency) өснө",
      "Максвелл-Больцманы муруй: Температур 10°C өсөхөд Ea-аас дээш энергитэй молекулын тоо (талбай) бараг 2 дахин өсдөг",
      "Катализатор нь урвалын идэвхжлийн энергийг бууруулсан өөр замаар урвалыг явуулдаг",
      "Олон төрлийн катализ (heterogeneous): адсорбци (гадаргууд наалдах) -> холбоо сулрах -> урвал -> десорбци (салах)"
    ],
    subtopics: [
      {
        id: "9.1",
        number: "9.1",
        titleEn: "Collision Theory & Factors Affecting Rate",
        titleMn: "Мөргөлдөөний онол ба Хурдад нөлөөлөх хүчин зүйлс",
        summaryEn: "Rate = Δ[Concentration] / Δtime. Collisions are effective only if E ≥ Ea with correct geometry.",
        summaryMn: "Урвалын хурд = Концентрацийн өөрчлөлт / Хугацаа. Бүх мөргөлдөөн урвалд хүргэдэггүй, зөвхөн Ea-аас их энергитэй нь урвалд орно.",
        keyConcepts: ["Rate units: mol dm⁻³ s⁻¹", "Effective vs ineffective collisions", "Initial rate from tangent at t=0"]
      },
      {
        id: "9.2",
        number: "9.2",
        titleEn: "Maxwell-Boltzmann Distribution & Temperature",
        titleMn: "Максвелл-Больцманы тархалт ба Температур",
        summaryEn: "Graph of number of molecules vs energy starts at (0,0), has a peak (most probable energy), and asymptotes toward zero at high energy. When heated: peak shifts right and down; area under curve remains constant; shaded area with E ≥ Ea increases significantly.",
        summaryMn: "Температур ихсэхэд муруйн оргил баруун доош шилжиж, Ea-аас хойших талбай эрс томорно. Иймээс өндөр температурт урвал маш хурдан явагдана.",
        keyConcepts: ["Origin at (0,0): no molecules have zero energy", "Area under curve = total number of molecules", "Area past Ea = reacting molecules"]
      },
      {
        id: "9.3",
        number: "9.3",
        titleEn: "Catalysis: Homogeneous vs Heterogeneous",
        titleMn: "Катализ: Нэгэн ба олон төрлийн",
        summaryEn: "Catalyst lowers Ea without being consumed. Homogeneous: same phase (e.g. atmospheric NO₂ in SO₂ oxidation to SO₃). Heterogeneous: different phase (e.g. solid Fe in Haber process, Pt/Rh/Pd in catalytic converters: adsorption -> bond weakening -> reaction -> desorption).",
        summaryMn: "Катализаторын ажиллах 4 үе шат: 1. Diffusion & Adsorption; 2. Холбоо сулрах; 3. Шинэ холбоо үүсэх; 4. Desorption.",
        keyConcepts: ["Catalytic converter: 2NO + 2CO → N₂ + 2CO₂", "Autocatalysis (e.g. Mn²⁺ in manganate + ethanedioate)"]
      }
    ],
    keyTerms: [
      { termEn: "Activation Energy (Ea)", termMn: "Идэвхжлийн энерги", definitionEn: "The minimum kinetic energy that colliding particles must possess for a collision to be effective and lead to a reaction.", definitionMn: "Мөргөлдөж буй бөөмс химийн урвалд ороход шаардагдах хамгийн бага кинетик энерги." },
      { termEn: "Catalyst", termMn: "Катализатор", definitionEn: "A substance that increases the rate of a chemical reaction by providing an alternative pathway with lower activation energy, remaining chemically unchanged at the end.", definitionMn: "Урвалын идэвхжлийн энергийг бууруулсан өөр замаар урвалыг хурдасгадаг, эцэст нь өөрөө химийн хувьд өөрчлөгдөлгүй үлддэг бодис." }
    ],
    formulas: [
      { nameEn: "Rate of Reaction", nameMn: "Урвалын хурд", formula: "Rate = Δ[Product] / Δt = -Δ[Reactant] / Δt", note: "Gradient of concentration-time graph" }
    ],
    examStyleTips: [
      "In exam questions explaining temperature effect: ALWAYS mention 1) higher kinetic energy increases collision frequency; 2) MORE IMPORTANTLY, a vastly greater proportion of molecules have energy ≥ Ea.",
      "When drawing Maxwell-Boltzmann curve for T+10°C: make sure the curve starts at (0,0), peaks to the right and lower than original, and does not touch the x-axis at high energy."
    ]
  },
  {
    id: 10,
    number: 10,
    level: "AS",
    category: "Inorganic",
    titleEn: "Periodicity: Period 3 Elements & Compounds",
    titleMn: "Үелэх хууль (3-р үеийн элементүүд ба тэдгээрийн нэгдлүүд)",
    descriptionEn: "Trends across Period 3 (Na to Ar): atomic/ionic radius, melting points, conductivity, reactions with oxygen, chlorine, and water; structure and acid-base nature of Period 3 oxides and chlorides.",
    descriptionMn: "3-р үеийн элементүүдийн үелэх хандлага: радиус, хайлах цэг, цахилгаан дамжуулалт; хүчилтөрөгч, хлор, устай харилцан үйлчлэх урвалууд; оксид ба хлоридуудын бүтэц, хүчил-суурийн шинж чанар, гидролиз.",
    learningIntentionsEn: [
      "Explain periodicity across Period 3 in atomic radius, ionic radius, melting point, and electrical conductivity",
      "Write equations for reactions of Na, Mg, Al, Si, P, S with oxygen (Na₂O, MgO, Al₂O₃, SiO₂, P₄O₁₀, SO₂, SO₃)",
      "Write equations for reactions with chlorine (NaCl, MgCl₂, Al₂Cl₆, SiCl₄, PCl₅)",
      "Describe reactions of Na and Mg with cold water and steam",
      "Describe the structure and acid/base behavior of Period 3 oxides: Basic (Na₂O, MgO), Amphoteric (Al₂O₃), Acidic (SiO₂, P₄O₁₀, SO₂, SO₃)",
      "Describe the reactions and pH of Period 3 chlorides in water: NaCl (pH 7), MgCl₂ (pH 6.5), Al₂Cl₆ (pH 3), SiCl₄ (pH 2, white fumes of HCl), PCl₅ (pH 2)"
    ],
    learningIntentionsMn: [
      "3-р үеийн дагуу атомын ба ионы радиус, хайлах цэг, цахилгаан дамжуулалтын өөрчлөлтийг тайлбарлах",
      "Na-аас S хүртэлх элементүүдийн хүчилтөрөгч болон хлортой урвалд орох тэгшитгэлүүд",
      "Na ба Mg-ийн хүйтэн ус болон усны ууртай урвалд орох онцлог (Na: маш хүчтэй pH 14; Mg: хүйтэн усанд удаан pH 11, ууранд хурдан MgO үүсгэнэ)",
      "3-р үеийн оксидуудын хүчил-суурийн шинж: Суурийн (Na₂O, MgO), Амфотер (Al₂O₃), Хүчлийн (SiO₂, P₄O₁₀, SO₂, SO₃)",
      "3-р үеийн хлоридуудын усанд уусах ба гидролиз: NaCl (саармаг pH 7), MgCl₂ (pH 6.5), Al₂Cl₆ (хүчиллэг pH 3), SiCl₄ & PCl₅ (эрс гидролизод орж цагаан утаа HCl үүсгэнэ, pH 2)"
    ],
    subtopics: [
      {
        id: "10.1",
        number: "10.1",
        titleEn: "Physical Trends Across Period 3",
        titleMn: "3-р үеийн физик шинжийн үелэх хандлага",
        summaryEn: "Atomic radius decreases across period (increasing nuclear charge, same shielding). Melting point: increases Na->Mg->Al (metallic bonding), peaks at Si (giant covalent), drops sharply P₄, S₈, Cl₂, Ar (simple molecular).",
        summaryMn: "Радиус үеийн дагуу багасна. Хайлах цэг Na->Al өсөөд, Si дээр дээд цэгтээ хүрч (ковалентын аварга тор), P, S, Cl, Ar дээр огцом буурна.",
        keyConcepts: ["S₈ has higher MP than P₄ because S₈ has more electrons -> stronger London dispersion forces"]
      },
      {
        id: "10.2",
        number: "10.2",
        titleEn: "Period 3 Oxides: Bonding & Acid-Base Nature",
        titleMn: "3-р үеийн оксидууд: Холбоо ба Хүчил-Суурийн шинж",
        summaryEn: "Na₂O, MgO: Giant ionic, basic (form OH⁻ with water). Al₂O₃: Giant ionic with covalent character, amphoteric (reacts with acid to form Al³⁺ salt and with hot conc. NaOH to form [Al(OH)₄]⁻). SiO₂: Giant covalent, acidic (reacts with hot conc NaOH to form Na₂SiO₃). P₄O₁₀, SO₂, SO₃: Simple molecular, acidic (form H₃PO₄, H₂SO₃, H₂SO₄ in water).",
        summaryMn: "Na₂O, MgO нь суурийн оксид. Al₂O₃ нь амфотер (хүчил ба шүлт хоёулантай нь урвалд орно). SiO₂, P₄O₁₀, SO₂, SO₃ нь хүчлийн оксид.",
        keyConcepts: ["Al₂O₃ + 6H⁺ → 2Al³⁺ + 3H₂O", "Al₂O₃ + 2OH⁻ + 3H₂O → 2[Al(OH)₄]⁻"]
      },
      {
        id: "10.3",
        number: "10.3",
        titleEn: "Period 3 Chlorides & Hydrolysis",
        titleMn: "3-р үеийн хлоридууд ба тэдгээрийн гидролиз",
        summaryEn: "NaCl: Giant ionic, dissolves (pH 7). MgCl₂: Giant ionic, slight hydrolysis (pH 6.5). Al₂Cl₆: Covalent dimer, hydrolyses vigorously: [Al(H₂O)₆]³⁺ → [Al(H₂O)₅OH]²⁺ + H⁺ (pH 3). SiCl₄: Hydrolyses violently: SiCl₄ + 2H₂O → SiO₂ + 4HCl (steamy white fumes, pH 2). PCl₅: PCl₅ + 4H₂O → H₃PO₄ + 5HCl (steamy white fumes, pH 2).",
        summaryMn: "NaCl усанд саармаг уусна. Al₂Cl₆, SiCl₄, PCl₅ нь усаар задарч (гидролиз) давсны хүчлийн цагаан утаа ялгаруулж өндөр хүчиллэг уусмал үүсгэнэ.",
        keyConcepts: ["SiCl₄(l) + 2H₂O(l) → SiO₂(s) + 4HCl(g)", "PCl₅(s) + 4H₂O(l) → H₃PO₄(aq) + 5HCl(g)"]
      }
    ],
    keyTerms: [
      { termEn: "Amphoteric", termMn: "Амфотер шинж", definitionEn: "Capable of reacting as both an acid (with bases) and a base (with acids), e.g. Al₂O₃ and Al(OH)₃.", definitionMn: "Хүчилтэй ч, суурьтай ч урвалд орж давс үүсгэх хоёрч шинж (жишээ нь Al₂O₃, Al(OH)₃)." },
      { termEn: "Hydrolysis", termMn: "Гидролиз", definitionEn: "The chemical breakdown of a compound due to reaction with water.", definitionMn: "Усны үйлчлэлээр бодис задарч шинэ нэгдэл үүсэх химийн урвал." }
    ],
    formulas: [
      { nameEn: "Aluminium Oxide with Acid", nameMn: "Хөнгөнцагааны оксид хүчилтэй", formula: "Al₂O₃(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂O(l)", note: "Behaves as a base" },
      { nameEn: "Aluminium Oxide with Alkali", nameMn: "Хөнгөнцагааны оксид шүлттэй", formula: "Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) → 2NaAl(OH)₄(aq)", note: "Behaves as an acid" },
      { nameEn: "Silicon Chloride Hydrolysis", nameMn: "Цахиурын хлоридын гидролиз", formula: "SiCl₄(l) + 2H₂O(l) → SiO₂(s) + 4HCl(g)", note: "White ppt SiO₂ + steamy white fumes HCl" }
    ],
    examStyleTips: [
      "When explaining why S₈ has a higher melting point than P₄: Both are simple molecular, but S₈ has 128 electrons compared to P₄ with 60 electrons, so S₈ has stronger instantaneous dipole-induced dipole forces.",
      "Al₂Cl₆ has dative covalent bonding where a lone pair from chlorine is donated to the electron-deficient aluminium."
    ]
  },
  {
    id: 11,
    number: 11,
    level: "AS",
    category: "Inorganic",
    titleEn: "Group 2 (Alkaline Earth Metals)",
    titleMn: "2-р бүлгийн элементүүд (Шүлтлэг газрын металлууд)",
    descriptionEn: "Group 2 physical trends, reactions with oxygen, water, and dilute acids, solubility of hydroxides and sulfates, and thermal stability of carbonates and nitrates.",
    descriptionMn: "2-р бүлгийн металлуудын урвалын идэвх (догшлох тусам өснө), гидроксидын уусах чанар (өснө), сульфатын уусах чанар (буурна), карбонат ба нитратын дулааны тогтворжилт (өснө).",
    learningIntentionsEn: [
      "Describe electronic configurations and physical trends down Group 2 (Be to Ba)",
      "Explain increasing reactivity down Group 2 with O₂, H₂O, and dilute acids (lower 1st + 2nd IE, greater shielding and radius)",
      "Recognize flame test colors: Ca²⁺ (brick-red), Sr²⁺ (scarlet/crimson), Ba²⁺ (apple-green)",
      "Explain trends in solubility: Group 2 Hydroxides get MORE soluble down group (Mg(OH)₂ sparingly soluble -> Ba(OH)₂ soluble, pH increases)",
      "Explain trends in solubility: Group 2 Sulfates get LESS soluble down group (MgSO₄ soluble -> BaSO₄ insoluble white precipitate)",
      "Explain thermal stability of Group 2 Carbonates and Nitrates (increases down group due to larger cation radius having lower charge density and less polarising power on the anion)"
    ],
    learningIntentionsMn: [
      "2-р бүлгийн дагуу доошлоход атомын радиус томорч, иончлолын энерги багасах тул металлын урвалын идэвх нэмэгдэнэ",
      "Дөлний өнгө: Ca²⁺ (тоосгон улаан), Sr²⁺ (хүрэн улаан/час улаан), Ba²⁺ (алимны ногоон)",
      "Гидроксидын уусах чанар доошлох тусам ИХЭСНЭ: Mg(OH)₂ бага уусдаг -> Ba(OH)₂ сайн уусна (pH өснө)",
      "Сульфатын уусах чанар доошлох тусам БАГАСНА: MgSO₄ сайн уусна -> BaSO₄ уусдаггүй цагаан тунадас",
      "Карбонат ба нитратын халаалтад тэсвэртэй чанар (thermal stability) доошлох тусам ӨСНӨ (катионы радиус томорч, цэнэгийн нягт ба туйлшруулах чадвар буурна)"
    ],
    subtopics: [
      {
        id: "11.1",
        number: "11.1",
        titleEn: "Reactivity & Flame Tests",
        titleMn: "Урвалын идэвх ба Дөлний сорил",
        summaryEn: "Reactivity increases down Group 2: Mg -> Ca -> Sr -> Ba. Mg burns with intense white light. Ca²⁺ brick-red, Sr²⁺ scarlet, Ba²⁺ apple-green.",
        summaryMn: "2-р бүлгээр доошлоход 1 ба 2-р иончлолын нийлбэр энерги буурах тул электрон илүү хялбар алдаж илүү идэвхтэй болдог.",
        keyConcepts: ["2M(s) + O₂(g) → 2MO(s)", "M(s) + 2H₂O(l) → M(OH)₂(aq/s) + H₂(g)", "Mg(s) + H₂O(g) → MgO(s) + H₂(g) with steam"]
      },
      {
        id: "11.2",
        number: "11.2",
        titleEn: "Solubility Trends: Hydroxides vs Sulfates",
        titleMn: "Уусах чанарын хандлага: Гидроксид ба Сульфат",
        summaryEn: "Hydroxide solubility INCREASES down Group 2 (Mg(OH)₂ pH ~10 -> Ba(OH)₂ pH ~13). Sulfate solubility DECREASES down Group 2 (MgSO₄ soluble -> BaSO₄ insoluble, used in test for SO₄²⁻).",
        summaryMn: "Гидроксид уруудах тусам илүү сайн уусна (pH өснө). Сульфат уруудах тусам муу уусна (BaSO₄ цагаан тунадас).",
        keyConcepts: ["Limewater Ca(OH)₂ test for CO₂", "Barium chloride + dilute HCl test for sulfate: Ba²⁺ + SO₄²⁻ → BaSO₄(s)"]
      },
      {
        id: "11.3",
        number: "11.3",
        titleEn: "Thermal Decomposition of Carbonates & Nitrates",
        titleMn: "Карбонат ба Нитратын дулааны задрал",
        summaryEn: "Decomposition temp increases down group. Carbonates: MCO₃ → MO + CO₂. Nitrates: 2M(NO₃)₂ → 2MO + 4NO₂ (brown toxic gas) + O₂ (relights splint). Smaller Mg²⁺ has high charge density, distorts CO₃²⁻/NO₃⁻ electron cloud, weakening C-O / N-O bonds.",
        summaryMn: "Mg²⁺ ион жижиг тул цэнэгийн өндөр нягттай бөгөөд том анионыг илүү хүчтэй туйлшруулж C-O, N-O холбоог сулруулснаар бага температурт амархан задардаг.",
        keyConcepts: ["Thermal stability: BaCO₃ > SrCO₃ > CaCO₃ > MgCO₃", "Polarisation of large anion by small cation"]
      }
    ],
    keyTerms: [
      { termEn: "Charge Density", termMn: "Цэнэгийн нягт", definitionEn: "The ratio of an ion's charge to its volume (ionic radius). Smaller ions with higher charge have high charge density.", definitionMn: "Ионы цэнэгийг түүний эзлэхүүнд харьцуулсан хэмжигдэхүүн." },
      { termEn: "Ion Polarisation", termMn: "Ионы туйлшрал", definitionEn: "The distortion of the electron cloud of an anion by the attractive force of a nearby cation.", definitionMn: "Катионы цахилгаан таталцлын нөлөөгөөр анионы электрон үүл хэлбэрээ алдаж гажих үзэгдэл." }
    ],
    formulas: [
      { nameEn: "Thermal Decomposition of Group 2 Nitrate", nameMn: "2-р бүлгийн нитратын задрал", formula: "2M(NO₃)₂(s) → 2MO(s) + 4NO₂(g) + O₂(g)", note: "Brown fumes of NO₂ + O₂" },
      { nameEn: "Thermal Decomposition of Group 2 Carbonate", nameMn: "2-р бүлгийн карбонатын задрал", formula: "MCO₃(s) → MO(s) + CO₂(g)", note: "Requires heat to form metal oxide" }
    ],
    examStyleTips: [
      "Crucial mnemonic for Group 2 solubility: 'Hydroxides increase down, Sulfates decrease down' (H-I-S-D: High In Sun Day).",
      "When explaining thermal stability, use the exact keywords: cation radius increases -> charge density decreases -> polarising power decreases -> less distortion of the carbonate/nitrate electron cloud -> C-O / N-O bond is less weakened."
    ]
  },
  {
    id: 12,
    number: 12,
    level: "AS",
    category: "Inorganic",
    titleEn: "Group 17 (The Halogens)",
    titleMn: "17-р бүлгийн элементүүд (Галогенууд)",
    descriptionEn: "Physical trends (volatility, color, boiling points), oxidising ability of halogens, reducing ability of halide ions, reactions with concentrated H₂SO₄, and tests for halides with AgNO₃/NH₃.",
    descriptionMn: "Галогенуудын өнгө, буцлах цэг ба дэгдэмхий чанар, галогенуудын исэлдүүлэх чадвар (буурна), галогенид ионуудын ангижруулах чадвар (өснө), конц H₂SO₄-тэй урвал, AgNO₃ ба NH₃-ээр галогенид таних.",
    learningIntentionsEn: [
      "Describe colours and states of Cl₂ (pale green gas), Br₂ (red-brown liquid, orange vapour), I₂ (grey-black solid, purple vapour)",
      "Explain boiling point increase down Group 17 (more electrons -> stronger instantaneous dipole-induced dipole forces)",
      "Explain decreasing oxidising power down group (F₂ > Cl₂ > Br₂ > I₂) in displacement reactions",
      "Explain decreasing thermal stability of hydrogen halides (HF > HCl > HBr > HI) due to decreasing H-X bond energy",
      "Describe tests for halide ions with AgNO₃(aq) and distinguish with dilute/conc NH₃(aq)",
      "Describe reactions of solid sodium halides with concentrated H₂SO₄ (NaCl: acid-base; NaBr: redox to Br₂ + SO₂; NaI: strong redox to I₂ + SO₂ + S + H₂S)"
    ],
    learningIntentionsMn: [
      "Галогенуудын өнгө ба төлөв: Cl₂ (цайвар ногоон хий), Br₂ (улбар шар-хүрэн шингэн), I₂ (саарал-хар хатуу, ягаан уур)",
      "Молекулын электрон нэмэгдсэнээр Лондонгийн дисперсийн хүч ихсэж буцлах цэг өсдөг (дэгдэмхий чанар буурна)",
      "Галогенуудын исэлдүүлэгч чадвар доошлох тусам БУУРНА (F₂ > Cl₂ > Br₂ > I₂). Идэвхтэй галоген нь бага идэвхтэй галогенидийг уусмалаас нь түрнэ",
      "Галогенид ионуудын (Cl⁻, Br⁻, I⁻) ангижруулагч чадвар доошлох тусам ӨСНӨ (I⁻ хамгийн хүчтэй)",
      "AgNO₃ ба NH₃-ээр галогенид таних: AgCl (цагаан, шингэрүүлсэн NH₃-т уусна), AgBr (цөцгийн цайвар шар, конц NH₃-т уусна), AgI (шар, NH₃-т уусахгүй)",
      "Концентрацитай H₂SO₄-тэй урвалд орох: NaCl (зөвхөн HCl цагаан утаа), NaBr (Br₂ хүрэн хий + SO₂), NaI (I₂ ягаан уур + шар хүхэр S + өмхий өндөгний үнэртэй H₂S хий)"
    ],
    subtopics: [
      {
        id: "12.1",
        number: "12.1",
        titleEn: "Physical Properties & Displacement Reactions",
        titleMn: "Физик шинж ба Түрэн гаргах урвал",
        summaryEn: "Volatility decreases down group. Cyclohexane layer colours: Cl₂ = very pale green, Br₂ = orange, I₂ = purple. More reactive halogen displaces less reactive halide: Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq).",
        summaryMn: "Циклогександ уусах өнгө: хлор=цайвар ногоон, бром=улбар шар, иод=тод ягаан. Хлор бром ба иодыг түрж гаргана, бром зөвхөн иодыг түрж гаргана.",
        keyConcepts: ["Cl₂ + 2I⁻ → 2Cl⁻ + I₂", "Br₂ + 2I⁻ → 2Br⁻ + I₂"]
      },
      {
        id: "12.2",
        number: "12.2",
        titleEn: "Testing for Halide Ions (AgNO₃ + NH₃)",
        titleMn: "Галогенид ион таних (Мөнгөний нитрат ба Аммиак)",
        summaryEn: "Add dilute HNO₃ then AgNO₃(aq): Cl⁻ → white ppt (AgCl, dissolves in dilute NH₃). Br⁻ → cream ppt (AgBr, dissolves only in concentrated NH₃). I⁻ → yellow ppt (AgI, insoluble in both dilute & concentrated NH₃).",
        summaryMn: "Ag⁺(aq) + X⁻(aq) → AgX(s). Шингэрүүлсэн аммиакт зөвхөн AgCl уусна, конц аммиакт AgBr нэмж уусна, AgI алинд нь ч уусахгүй.",
        keyConcepts: ["AgCl white (dil NH₃ sol)", "AgBr cream (conc NH₃ sol)", "AgI yellow (insoluble)"]
      },
      {
        id: "12.3",
        number: "12.3",
        titleEn: "Halides with Concentrated Sulfuric Acid",
        titleMn: "Галогенидууд концентрацитай H₂SO₄-тэй харилцан үйлчлэх",
        summaryEn: "NaCl + H₂SO₄ → NaHSO₄ + HCl (steamy white fumes, NOT redox). NaBr + H₂SO₄ → NaHSO₄ + HBr, then 2HBr + H₂SO₄ → Br₂ (orange-brown gas) + SO₂ + 2H₂O. NaI + H₂SO₄ produces HI, then oxidised to I₂ (purple fumes/black solid), SO₂, S (yellow solid), and H₂S (bad egg smell).",
        summaryMn: "I⁻ ион хамгийн том тул гадаад давхаргын электроноо хамгийн хялбар алдаж, H₂SO₄-ийг +6-аас +4 (SO₂), 0 (S), -2 (H₂S) хүртэл гүн ангижруулдаг.",
        keyConcepts: ["Reducing power: I⁻ > Br⁻ > Cl⁻ > F⁻"]
      }
    ],
    keyTerms: [
      { termEn: "Volatility", termMn: "Дэгдэмхий чанар", definitionEn: "The ease with which a liquid or solid vaporises (inversely related to boiling point).", definitionMn: "Бодис ууршимхай байх хэмжүүр (буцлах цэг бага байх тусам дэгдэмхий)." },
      { termEn: "Thermal Stability of Hydrogen Halides", termMn: "Устөрөгчийн галогенидын дулааны тогтворжилт", definitionEn: "The resistance of H-X to decompose into H₂ and X₂ on heating, decreasing down Group 17 as H-X bond length increases and bond energy decreases.", definitionMn: "H-X молекулын халаалтад задрахгүй байх чадвар (H-I нь хамгийн бага холбооны энергитэй тул амархан задарч ягаан иодын уур үүсгэдэг)." }
    ],
    formulas: [
      { nameEn: "Halide Precipitation", nameMn: "Галогенидийн тунадасжих", formula: "Ag⁺(aq) + X⁻(aq) → AgX(s)", note: "Dilute HNO₃ added first to remove CO₃²⁻" },
      { nameEn: "Bromide with Sulfuric Acid", nameMn: "Бромид хүхрийн хүчилтэй", formula: "2HBr(g) + H₂SO₄(l) → Br₂(g) + SO₂(g) + 2H₂O(l)", note: "Redox reaction, Br is oxidised, S is reduced" },
      { nameEn: "Iodide with Sulfuric Acid to H₂S", nameMn: "Иодидоос хүхэрт устөрөгч үүсэх", formula: "8HI(g) + H₂SO₄(l) → 4I₂(g) + H₂S(g) + 4H₂O(l)", note: "S reduced from +6 to -2" }
    ],
    examStyleTips: [
      "Always acidify with dilute HNO₃ before adding AgNO₃ to remove any carbonate or sulfite ions that would form false white precipitates.",
      "Never use concentrated H₂SO₄ to prepare HBr or HI gas because H₂SO₄ will oxidise HBr to Br₂ and HI to I₂. Use concentrated H₃PO₄ instead!"
    ]
  },
  {
    id: 13,
    number: 13,
    level: "AS",
    category: "Inorganic",
    titleEn: "Nitrogen & Ammonia",
    titleMn: "Азот ба Аммиакийн нэгдлүүд",
    descriptionEn: "Unreactivity of N₂ (N≡N triple bond), basicity of ammonia (NH₃), ammonium ion formation & displacement, atmospheric nitrogen oxides, acid rain, and photochemical smog (PAN).",
    descriptionMn: "Азотын хийн идэвхгүй чанар (N≡N гурвалсан холбоо, 945 kJ/mol), аммиакийн суурийн шинж, аммонийн ион, нитроген оксидууд, хүчиллэг бороо ба фотохимийн смог (PAN).",
    learningIntentionsEn: [
      "Explain the lack of reactivity of N₂ in terms of the very high bond energy of the N≡N triple bond (945 kJ mol⁻¹)",
      "Explain the basicity of ammonia (proton acceptor forming NH₄⁺ with coordinate bond)",
      "Describe displacement of ammonia from ammonium salts when heated with a base: 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃",
      "Describe the natural and human-made formation of nitrogen oxides (lightning, internal combustion engines)",
      "Explain the catalytic role of NO/NO₂ in atmospheric oxidation of SO₂ to SO₃ (acid rain)",
      "Explain how catalytic converters remove NO and CO (2NO + 2CO → N₂ + 2CO₂) and describe photochemical smog (PAN formation)"
    ],
    learningIntentionsMn: [
      "Азотын молекул N₂ нь маш бат бөх гурвалсан холбоотой (945 kJ/mol) тул ердийн нөхцөлд химийн идэвхгүй байдгийг тайлбарлах",
      "Аммиакийн суурийн шинж (N дээрх сул электрон хос нь H⁺-тэй координацын холбоо үүсгэж NH₄⁺ болно)",
      "Аммонийн давсыг суурьтай халаахад аммиак хий ялгарах: NH₄⁺ + OH⁻ → NH₃ + H₂O",
      "Агаарт аянга цахилгаан болон автомашины хөдөлгүүрт азотын оксидууд (NO, NO₂) үүсэх",
      "NO₂ нь агаар мандалд SO₂-ийг SO₃ болгон исэлдүүлэх урвалын катализатор болж хүчиллэг бороо үүсгэдэг механизм",
      "Автомашины катализатор хөрвүүлэгч (2NO + 2CO → N₂ + 2CO₂) болон фотохимийн смог (PAN үүсэл)"
    ],
    subtopics: [
      {
        id: "13.1",
        number: "13.1",
        titleEn: "Inertness of N₂ & Natural Nitrogen Cycle",
        titleMn: "N₂-ийн идэвхгүй чанар ба Азотын эргэлт",
        summaryEn: "N₂ has bond energy of 945 kJ mol⁻¹. Requires high Ea (lightning or high temp engine) to react: N₂ + O₂ ⇌ 2NO; 2NO + O₂ ⇌ 2NO₂; 2NO₂ + H₂O + ½O₂ → 2HNO₃.",
        summaryMn: "Аянга цахилгааны өндөр энергээр азот исэлдэж NO, улмаар NO₂ болж, борооны усанд уусаж азотын хүчил үүсгэн хөрсөнд шингэдэг.",
        keyConcepts: ["N≡N bond energy = 945 kJ mol⁻¹", "Nitrogen oxides from car engines"]
      },
      {
        id: "13.2",
        number: "13.2",
        titleEn: "Ammonia, Ammonium Salts & Fertilizers",
        titleMn: "Аммиак, Аммонийн давсууд ба Бордоо",
        summaryEn: "NH₃ is a pyramidal weak base. Ammonium ion NH₄⁺ is tetrahedral (109.5°) with 4 identical N-H bonds. Heating ammonium salts with a base releases NH₃ (turns damp red litmus blue).",
        summaryMn: "NH₃ (пирамид, 107°), NH₄⁺ (тетраэдр, 109.5°). Аммонийн бордоо (NH₄NO₃, (NH₄)₂SO₄) хөрснөөс угаагдаж гол нуурт эвтрофикаци үүсгэж болзошгүй.",
        keyConcepts: ["Eutrophication from leached nitrates", "Laboratory preparation of NH₃: 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃"]
      },
      {
        id: "13.3",
        number: "13.3",
        titleEn: "Oxides of Nitrogen & Atmospheric Pollution",
        titleMn: "Азотын оксидууд ба Агаарын бохирдол",
        summaryEn: "NO₂ acts as homogeneous catalyst in acid rain: SO₂ + NO₂ → SO₃ + NO; then NO + ½O₂ → NO₂ (regenerated). Catalytic converters use Pt/Rh: 2CO + 2NO → 2CO₂ + N₂. VOCs + NOx + sunlight → Peroxyacetyl nitrate (PAN, smog).",
        summaryMn: "Хүчиллэг борооны катализ: SO₂ + NO₂ → SO₃ + NO ба NO + ½O₂ → NO₂. PAN нь утаа манангийн хорт бодис юм.",
        keyConcepts: ["Photochemical smog (PAN)", "Catalytic converter reactions"]
      }
    ],
    keyTerms: [
      { termEn: "Eutrophication", termMn: "Эвтрофикаци", definitionEn: "The process where excess nitrates in water cause algal bloom, blocking sunlight, leading to bacterial decomposition which depletes dissolved oxygen and kills aquatic life.", definitionMn: "Хөрсний бордооны нитрат усанд угаагдан орж замаг хэт үржүүлснээр усан дахь хүчилтөрөгч шавхагдаж, загас амьтад үхэх үйл явц." },
      { termEn: "Peroxyacetyl Nitrate (PAN)", termMn: "Пероксиацетил нитрат (PAN)", definitionEn: "A secondary pollutant formed by reaction between unburnt hydrocarbons (VOCs), nitrogen oxides, and sunlight in photochemical smog.", definitionMn: "Гэрлийн нөлөөгөөр азотын оксид ба шатаагүй нүүрсустөрөгчдөөс үүсдэг фотохимийн смогийн хорт нэгдэл." }
    ],
    formulas: [
      { nameEn: "Catalytic Oxidation of SO₂ by NO₂", nameMn: "SO₂-ийн каталитик исэлдэлт", formula: "SO₂(g) + NO₂(g) → SO₃(g) + NO(g)", note: "NO is then oxidised back to NO₂" },
      { nameEn: "Catalytic Converter Reaction", nameMn: "Автомашины катализаторын урвал", formula: "2CO(g) + 2NO(g) → 2CO₂(g) + N₂(g)", note: "Reduces toxic pollutants to harmless gases" }
    ],
    examStyleTips: [
      "In NH₄⁺ all four N-H bonds are identical in length and strength despite one being originally formed as a dative covalent bond, because positive charge is distributed evenly.",
      "The test for ammonium ions (NH₄⁺): add NaOH(aq) and warm gently -> test gas with damp red litmus paper (turns blue)."
    ]
  },
  {
    id: 14,
    number: 14,
    level: "AS",
    category: "Organic",
    titleEn: "Introduction to Organic Chemistry",
    titleMn: "Органик химийн үндэс (Нэршил, Изомер, Механизм)",
    descriptionEn: "Nomenclature, formulae types (empirical, molecular, structural, displayed, skeletal, 3D), functional groups, structural isomerism, stereoisomerism (cis/trans, optical/chiral), and reaction mechanisms (homolytic/heterolytic, electrophile/nucleophile).",
    descriptionMn: "Органик нэгдлийн IUPAC нэршил, томьёоны төрлүүд, функциональ бүлгүүд, бүтцийн изомер, орон зайн изомер (стереоизомер: геометрийн cis/trans, оптикийн энантиомер), химийн урвалын механизмууд.",
    learningIntentionsEn: [
      "Interpret and construct empirical, molecular, structural, displayed, and skeletal formulae",
      "Name organic compounds systematically using IUPAC rules (alkanes, alkenes, halogenoalkanes, alcohols, aldehydes, ketones, carboxylic acids, esters, amines, nitriles)",
      "Identify types of structural isomerism: position, functional group, and chain isomerism",
      "Identify stereoisomerism: cis/trans (geometrical, restricted C=C rotation) and optical isomerism (chiral carbon with 4 different groups)",
      "Explain homolytic fission (free radicals) vs heterolytic fission (ions/carbocations)",
      "Understand organic reaction terms: addition, substitution, elimination, hydrolysis, oxidation, reduction, condensation"
    ],
    learningIntentionsMn: [
      "Эмпирик, молекулын, бүтцийн, дэлгэмэл, хэлхээний (skeletal) томьёонуудыг ашиглах",
      "IUPAC дүрмээр органик бодисуудыг нэрлэх (алкан, алкен, галогеналкан, спирт, альдегид, кетон, карбон хүчил, эстер, амин, нитрил)",
      "Бүтцийн изомер: байрлалын, функциональ бүлгийн, хэлхээний салбарлалтын",
      "Стереоизомер: Геометрийн (C=C давхар холбооны улмаас cis/trans), Оптикийн (4 өөр бүлэгтэй холбогдсон хирал нүүрстөрөгч бүхий энантиомерууд)",
      "Холбоо тасрах: Гомолитик (чөлөөт радикал) ба Гетеролитик (ионууд, карбкатион үүсэх)",
      "Органик урвалын төрлүүд: нэгдэх, халалцах, ялгарах (elimination), гидролиз, исэлдэх, ангижрах, конденсаци"
    ],
    subtopics: [
      {
        id: "14.1",
        number: "14.1",
        titleEn: "Representing & Naming Organic Molecules",
        titleMn: "Органик молекулыг дүрслэх ба нэрлэх",
        summaryEn: "Skeletal formulas show carbon backbone as vertices/ends. Longest continuous carbon chain gives root (meth-, eth-, prop-, but-, pent-, hex-). Number from end giving lowest locants.",
        summaryMn: "Хэлхээний томьёонд нүүрстөрөгч ба түүн дэх устөрөгчийг зурахгүй, зөвхөн холбоос шугамыг зигзаг зурах ба hetero-атомыг (O, N, Cl) заавал бичнэ.",
        keyConcepts: ["Longest carbon chain", "Alphabetical order for substituents (ethyl before methyl)"]
      },
      {
        id: "14.2",
        number: "14.2",
        titleEn: "Structural Isomerism & Stereoisomerism",
        titleMn: "Бүтцийн изомер ба Орон зайн изомер",
        summaryEn: "Structural: same molecular formula, different structural formula. Stereoisomerism: same structural formula, different spatial arrangement. Geometrical (cis/trans) requires C=C with 2 different groups on each C. Optical requires a chiral centre (C bonded to 4 different groups).",
        summaryMn: "Хирал нүүрстөрөгч C* нь 4 өөр бүлэгтэй холбогдсон үед толин тусгал нь давхцахгүй 2 энантиомер үүсгэж, туйлширсан гэрлийн хавтгайг эсрэг чиглэлд эргүүлнэ.",
        keyConcepts: ["Chiral centre (asymmetric carbon C*)", "Enantiomers rotate plane-polarized light in opposite directions", "Racemic mixture is an equimolar (50:50) mixture with zero net rotation"]
      },
      {
        id: "14.3",
        number: "14.3",
        titleEn: "Bond Breaking, Intermediates & Mechanisms",
        titleMn: "Холбоо тасрах, Завсрын хэсгүүд & Механизм",
        summaryEn: "Homolytic: A:B → A· + B· (free radicals). Heterolytic: A:B → A⁺ + :B⁻ (curly arrow shows pair of electrons). Carbocation stability: 3° > 2° > 1° > methyl due to positive inductive (+I) effect of alkyl groups.",
        summaryMn: "Карбкатионы тогтвортой байдал: 3° > 2° > 1° > метил. Алкыл бүлгүүд нь электроныг түлхэж (+I индукцийн нөлөө) нэмэх цэнэгийг сарниулдаг.",
        keyConcepts: ["Electrophiles: electron-deficient (H⁺, Br⁺, NO₂⁺)", "Nucleophiles: electron-rich with lone pair (:OH⁻, :NH₃, :CN⁻)"]
      }
    ],
    keyTerms: [
      { termEn: "Chiral Centre", termMn: "Хирал төв (Асимметр нүүрстөрөгч)", definitionEn: "A carbon atom bonded to four different atoms or groups of atoms, resulting in non-superimposable mirror image optical isomers.", definitionMn: "Дөрвөн өөр атом эсвэл бүлэгтэй холбогдсон, орон зайд давхцахгүй толин тусгал үүсгэдэг нүүрстөрөгчийн атом." },
      { termEn: "Carbocation", termMn: "Карбкатион", definitionEn: "An organic positively charged ion in which a carbon atom has six valence electrons and three bonds.", definitionMn: "Эерэг цэнэгтэй нүүрстөрөгчийн атом агуулсан органик завсрын ион." }
    ],
    formulas: [
      { nameEn: "Alkane General Formula", nameMn: "Алканы ерөнхий томьёо", formula: "CnH2n+2", note: "Saturated hydrocarbon" },
      { nameEn: "Alkene General Formula", nameMn: "Алкений ерөнхий томьёо", formula: "CnH2n", note: "Contains 1 C=C bond" },
      { nameEn: "Alcohol General Formula", nameMn: "Спиртийн ерөнхий томьёо", formula: "CnH2n+1OH", note: "Contains -OH group" }
    ],
    examStyleTips: [
      "In chiral centre identification, look at each carbon and check if all 4 attached groups are distinct (remember to trace full branch structures!).",
      "Curly arrows in mechanisms MUST start from a lone pair or a bond, and point precisely to the atom accepting the electron pair."
    ]
  }
];
