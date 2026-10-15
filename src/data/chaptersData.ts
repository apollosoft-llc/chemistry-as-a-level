import { Chapter } from "../types";

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    number: 1,
    level: "AS",
    category: "Physical",
    titleEn: "Atomic Structure",
    titleMn: "Атомын бүтэц",
    descriptionEn: "Models of the atom and Rutherford's gold-foil experiment, protons, neutrons and electrons, beams in electric fields, proton and nucleon numbers, ions and isotopes (Syllabus 1.1–1.2).",
    descriptionMn: "Атомын загварууд ба Резерфордын алтан ялтасны туршилт, протон, нейтрон, электрон, цахилгаан орон дахь цацрагийн хазайлт, протоны ба нуклоны тоо, ионууд, изотопууд (Syllabus 1.1–1.2).",
    syllabusRef: "Syllabus 1.1–1.2",
    examPapers: ["Paper 1", "Paper 2"],
    learningIntentionsEn: [
      "Describe the atom: a tiny, dense, positive nucleus, mostly empty space, with electrons in shells (energy levels)",
      "State the relative masses and charges of the proton (1, +1), neutron (1, 0) and electron (1/1836, −1)",
      "Describe the distribution of mass and charge in an atom: nearly all the mass and all the positive charge are in the nucleus",
      "Deduce how beams of protons, neutrons and electrons behave in an electric field (direction from the sign of the charge, size of deflection ∝ charge ÷ mass)",
      "Use the atomic (proton) number Z and the mass (nucleon) number A",
      "Deduce the numbers of protons, neutrons and electrons in atoms and ions",
      "Define isotope and use the isotopic notation ᴬ_Z X (e.g. ³⁵₁₇Cl)",
      "Explain why isotopes have the same chemical properties but different physical properties"
    ],
    learningIntentionsMn: [
      "Атомыг тайлбарлах: жижиг, нягт, эерэг цэнэгтэй цөм, ихэнх хэсэг нь хоосон орон зай, электронууд бүрхүүлд (энергийн түвшинд) байрлана",
      "Протон (1, +1), нейтрон (1, 0), электрон (1/1836, −1)-ы харьцангуй масс ба цэнэгийг хэлэх",
      "Атом дахь масс ба цэнэгийн тархалтыг тайлбарлах: масс бараг бүхэлдээ, эерэг цэнэг бүхэлдээ цөмд төвлөрнө",
      "Протон, нейтрон, электроны цацраг цахилгаан оронд хэрхэн хазайхыг тодорхойлох (чиглэл нь цэнэгийн тэмдгээс, хазайлтын хэмжээ нь цэнэг ÷ масс-аас хамаарна)",
      "Атомын (протоны) дугаар Z ба массын (нуклоны) тоо A-г ашиглах",
      "Атом ба ион дахь протон, нейтрон, электроны тоог олох",
      "Изотопыг тодорхойлж, изотопын тэмдэглэгээ ᴬ_Z X (жишээ нь ³⁵₁₇Cl)-ийг ашиглах",
      "Изотопууд яагаад химийн шинж чанараараа ижил, физик шинж чанараараа ялгаатай байдгийг тайлбарлах"
    ],
    subtopics: [
      {
        id: "1.1",
        number: "1.1",
        titleEn: "Models of the Atom & Rutherford's Gold Foil",
        titleMn: "Атомын загварууд ба Резерфордын алтан ялтасны туршилт",
        summaryEn: "Dalton: atoms of one element all have the same mass. Thomson: a sphere of positive charge with electrons embedded in it. Rutherford (with Geiger and Marsden) fired α-particles (He²⁺) at gold foil 0.0005 mm thick: most passed straight through (atom is mostly empty space), a few were deflected (the nucleus is positive), and about 1 in 20 000 bounced back by more than 90° (the nucleus is tiny, dense and holds nearly all the mass). An atom is ~10⁻¹⁰ m across but its nucleus is only ~10⁻¹⁵ m — 100 000 times smaller.",
        summaryMn: "Дальтон: нэг элементийн атомууд ижил масстай. Томсон: эерэг цэнэгтэй бөмбөрцөг дотор электронууд шигдсэн. Резерфорд (Гейгер, Марсдены хамт) 0.0005 мм зузаан алтан ялтас руу α-бөөм (He²⁺) харвасан: ихэнх нь шууд нэвтэрсэн (атомын ихэнх нь хоосон орон зай), цөөн нь хазайсан (цөм эерэг цэнэгтэй), 20 000-аас 1 орчим нь 90°-аас их өнцгөөр ойсон (цөм маш жижиг, нягт, бараг бүх массыг агуулна). Атом ~10⁻¹⁰ м, цөм нь ердөө ~10⁻¹⁵ м буюу 100 000 дахин жижиг.",
        keyConcepts: ["Dalton → Thomson → Rutherford → Bohr", "Most α-particles pass straight through: mostly empty space", "≈ 1 in 20 000 bounce back: tiny, dense, positive nucleus", "Atom ~10⁻¹⁰ m, nucleus ~10⁻¹⁵ m"],
        keyEquations: ["Atom ÷ nucleus = 10⁻¹⁰ ÷ 10⁻¹⁵ = 10⁵"],
        commonPitfalls: [
          "Link each observation to its conclusion: straight through → empty space; deflected → positive nucleus; bounced back → small, dense nucleus with most of the mass.",
          "Stadium analogy: if an atom were 100 m wide, the nucleus would be about 1 mm (a pea-sized dot)."
        ]
      },
      {
        id: "1.2",
        number: "1.2",
        titleEn: "Protons, Neutrons & Electrons",
        titleMn: "Протон, нейтрон ба электрон",
        summaryEn: "The nucleus contains protons and neutrons (nucleons) and nearly all the mass; electrons occupy shells around it. Relative masses and charges: proton 1, +1; neutron 1, 0; electron 1/1836, −1 (1.673 × 10⁻²⁷ kg ÷ 9.109 × 10⁻³¹ kg = 1836). All the positive charge is in the nucleus, the negative charge is spread out in the shells, and in a neutral atom the number of electrons equals the number of protons so the charges cancel.",
        summaryMn: "Цөм нь протон ба нейтрон (нуклонууд)-оос тогтох ба атомын бараг бүх массыг агуулна; электронууд түүнийг тойрсон бүрхүүлд байрлана. Харьцангуй масс ба цэнэг: протон 1, +1; нейтрон 1, 0; электрон 1/1836, −1 (1.673 × 10⁻²⁷ кг ÷ 9.109 × 10⁻³¹ кг = 1836). Эерэг цэнэг бүхэлдээ цөмд, сөрөг цэнэг бүрхүүлүүдэд тархсан; саармаг атомд электроны тоо протоны тоотой тэнцүү тул цэнэгүүд хоорондоо нөхөгдөнө.",
        keyConcepts: ["proton: mass 1, charge +1, in nucleus", "neutron: mass 1, charge 0, in nucleus", "electron: mass 1/1836, charge −1, in shells", "Neutral atom: electrons = protons"],
        keyEquations: ["mp ÷ me = 1836"],
        commonPitfalls: [
          "The relative mass of an electron is 1/1836 (negligible) — not 0 and not 1.",
          "Atoms are neutral because the number of protons equals the number of electrons, not because they contain no charged particles.",
          "Relative values are used because the real masses and charges are too small to be convenient."
        ]
      },
      {
        id: "1.3",
        number: "1.3",
        titleEn: "Beams of Particles in an Electric Field",
        titleMn: "Цахилгаан орон дахь эгэл бөөмсийн цацраг",
        summaryEn: "Like charges repel and opposite charges attract. Electrons bend towards the + plate with a large deflection (tiny mass); protons bend towards the − plate with a small deflection (≈ 1836 × heavier); neutrons are not deflected (no charge). For beams at the same velocity, the angle of deflection is proportional to charge ÷ mass: if protons (1 ÷ 1) are deflected 8°, ²H⁺ (1 ÷ 2) and ⁴He²⁺ (2 ÷ 4) are deflected 4°, and ³He²⁺ (2 ÷ 3) about 5.3°.",
        summaryMn: "Ижил цэнэгүүд түлхэлцэж, эсрэг цэнэгүүд таталцана. Электрон + хавтан руу их хазайна (масс маш бага); протон − хавтан руу бага хазайна (≈ 1836 дахин хүнд); нейтрон хазайхгүй (цэнэггүй). Ижил хурдтай цацрагийн хазайлтын өнцөг нь цэнэг ÷ масс-тай пропорциональ: протон 8° хазайвал ²H⁺ (1 ÷ 2) ба ⁴He²⁺ (2 ÷ 4) нь 4°, ³He²⁺ (2 ÷ 3) нь ойролцоогоор 5.3° хазайна.",
        keyConcepts: ["e⁻ → towards +, large deflection", "p⁺ → towards −, small deflection", "n⁰ → straight through", "Deflection angle ∝ charge ÷ mass"],
        keyEquations: ["Angle ∝ charge ÷ mass", "θ(particle) = θ(proton) × (charge ÷ mass)"],
        examinerTips: [
          "Always give BOTH the direction (towards the oppositely charged plate) and the size of the deflection, with a reason (charge and mass).",
          "Write 'protons bend towards the − plate because opposite charges attract' — not just 'the protons are attracted'.",
          "The electron is deflected most because it has the largest charge-to-mass ratio."
        ]
      },
      {
        id: "1.4",
        number: "1.4",
        titleEn: "Proton Number & Nucleon Number",
        titleMn: "Протоны тоо ба нуклоны тоо",
        summaryEn: "Atomic (proton) number Z = number of protons; it defines the element (every atom with 11 protons is sodium). Mass (nucleon) number A = protons + neutrons. Neutrons = A − Z. In isotopic notation the mass number is written on top and the proton number at the bottom, e.g. ²⁷₁₃Al has 13 protons, 13 electrons and 27 − 13 = 14 neutrons.",
        summaryMn: "Атомын (протоны) дугаар Z = протоны тоо; энэ нь элементийг тодорхойлно (11 протонтой бүх атом натри байна). Массын (нуклоны) тоо A = протон + нейтрон. Нейтрон = A − Z. Изотопын тэмдэглэгээнд массын тоог дээр, протоны тоог доор бичнэ, жишээ нь ²⁷₁₃Al нь 13 протон, 13 электрон, 27 − 13 = 14 нейтронтой.",
        keyConcepts: ["Z = protons (defines the element)", "A = protons + neutrons", "Neutral atom: electrons = Z", "Mass number on top, proton number at the bottom"],
        keyEquations: ["n = A − Z", "e (neutral atom) = Z"],
        commonPitfalls: [
          "Do not swap the numbers: ²⁷₁₃Al is correct, ¹³₂₇Al is wrong — the larger number (A) goes on top.",
          "An oxygen atom cannot have 9 protons: 9 protons would make it fluorine."
        ]
      },
      {
        id: "1.5",
        number: "1.5",
        titleEn: "Ions: Gaining & Losing Electrons",
        titleMn: "Ионууд: электрон авах ба алдах",
        summaryEn: "An ion is a charged particle formed when an atom loses or gains electrons; the number of protons never changes. Cation (positive ion): electrons lost, e.g. Mg → Mg²⁺ + 2e⁻ (12 p, 10 e). Anion (negative ion): electrons gained, e.g. Cl + e⁻ → Cl⁻ (17 p, 18 e). Electrons in an ion = Z − charge: subtract for a positive ion, add for a negative ion (Cr²⁺: 24 − 2 = 22; S²⁻: 16 + 2 = 18).",
        summaryMn: "Ион нь атом электрон алдах эсвэл авах үед үүсэх цэнэгтэй бөөм; протоны тоо хэзээ ч өөрчлөгдөхгүй. Катион (эерэг ион): электрон алдана, жишээ нь Mg → Mg²⁺ + 2e⁻ (12 p, 10 e). Анион (сөрөг ион): электрон авна, жишээ нь Cl + e⁻ → Cl⁻ (17 p, 18 e). Ион дахь электрон = Z − цэнэг: эерэг ионд хасна, сөрөг ионд нэмнэ (Cr²⁺: 24 − 2 = 22; S²⁻: 16 + 2 = 18).",
        keyConcepts: ["Cation: fewer electrons than protons", "Anion: more electrons than protons", "Protons and neutrons are unchanged when an ion forms", "Isoelectronic: Na⁺, Mg²⁺, O²⁻, OH⁻, NH₄⁺ all have 10 electrons"],
        keyEquations: ["Mg → Mg²⁺ + 2e⁻", "Cl + e⁻ → Cl⁻", "e (ion) = Z − charge"],
        commonPitfalls: [
          "Positive ion → SUBTRACT electrons: Cr²⁺ has 24 − 2 = 22 electrons, not 26.",
          "Negative ion → ADD electrons: S²⁻ has 16 + 2 = 18 electrons.",
          "Identifying a species: protons → element, protons + neutrons → mass number, protons − electrons → charge."
        ]
      },
      {
        id: "1.6",
        number: "1.6",
        titleEn: "Isotopes",
        titleMn: "Изотопууд",
        summaryEn: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons (same Z, different A), e.g. hydrogen-1, hydrogen-2 (deuterium) and hydrogen-3 (tritium); ³⁵Cl and ³⁷Cl. Isotopes have the same chemical properties because they have the same number and arrangement of electrons, and chemical reactions involve electrons. They have different physical properties (mass, density) because they have different numbers of neutrons — an ice cube of D₂O sinks in H₂O. Chlorine with Ar = 35.5 is 75% ³⁵Cl and 25% ³⁷Cl (3 : 1).",
        summaryMn: "Изотопууд нь протоны тоо ижил боловч нейтроны тоо ялгаатай нэг элементийн атомууд (Z ижил, A ялгаатай), жишээ нь устөрөгч-1, устөрөгч-2 (дейтери), устөрөгч-3 (тритий); ³⁵Cl ба ³⁷Cl. Изотопуудын электроны тоо ба байршил ижил, химийн урвалд электрон оролцдог тул химийн шинж чанар нь ижил. Нейтроны тоо ялгаатай тул физик шинж чанар (масс, нягт) нь ялгаатай — D₂O мөсөн шоо H₂O-д живнэ. Ar = 35.5 бүхий хлор нь 75% ³⁵Cl, 25% ³⁷Cl (3 : 1) агуулна.",
        keyConcepts: ["Same protons, different neutrons", "Same chemical properties: same electrons", "Different physical properties: different mass and density", "Notation: hydrogen-2 or ²₁H"],
        keyEquations: ["Ar = Σ(isotope mass × abundance) ÷ 100", "35x + 37(100 − x) = 3550 → x = 75"],
        commonPitfalls: [
          "Do not define isotopes as 'atoms with different masses' — say 'same element, same number of protons, different number of neutrons'.",
          "Same chemical properties because of the same number (and arrangement) of ELECTRONS — not 'the same number of protons'.",
          "Isotopes differ in physical properties (mass, density), not in reactivity."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Nucleus", termMn: "Цөм", definitionEn: "The tiny, dense, positively charged centre of an atom, containing the protons and neutrons and nearly all of its mass.", definitionMn: "Протон ба нейтроныг агуулсан, атомын бараг бүх массыг төвлөрүүлсэн, маш жижиг, нягт, эерэг цэнэгтэй төв хэсэг." },
      { termEn: "Nucleon", termMn: "Нуклон", definitionEn: "A particle found in the nucleus: a proton or a neutron.", definitionMn: "Цөмд байдаг бөөм: протон эсвэл нейтрон." },
      { termEn: "Atomic Number (Z)", termMn: "Атомын дугаар / Протоны тоо", definitionEn: "The number of protons in the nucleus of an atom; it defines the element.", definitionMn: "Атомын цөм дэх протоны тоо; энэ нь элементийг тодорхойлно." },
      { termEn: "Nucleon Number (A)", termMn: "Нуклоны тоо / Массын тоо", definitionEn: "The total number of protons and neutrons in the nucleus of an atom.", definitionMn: "Атомын цөм дэх протон ба нейтроны нийлбэр тоо." },
      { termEn: "Isotope", termMn: "Изотоп", definitionEn: "Atoms of the same element with the same number of protons but different numbers of neutrons.", definitionMn: "Ижил тооны протонтой боловч ялгаатай тооны нейтронтой нэг элементийн атомууд." },
      { termEn: "Ion", termMn: "Ион", definitionEn: "A charged particle formed when an atom (or group of atoms) loses or gains electrons.", definitionMn: "Атом (эсвэл атомын бүлэг) электрон алдах эсвэл авах үед үүсэх цэнэгтэй бөөм." },
      { termEn: "Cation", termMn: "Катион", definitionEn: "A positive ion, formed when an atom loses electrons (fewer electrons than protons).", definitionMn: "Атом электрон алдсанаар үүсэх эерэг ион (электрон нь протоноос цөөн)." },
      { termEn: "Anion", termMn: "Анион", definitionEn: "A negative ion, formed when an atom gains electrons (more electrons than protons).", definitionMn: "Атом электрон авсанаар үүсэх сөрөг ион (электрон нь протоноос олон)." },
      { termEn: "Shell (Energy Level)", termMn: "Бүрхүүл (Энергийн түвшин)", definitionEn: "A region around the nucleus where electrons are found, each with a fixed energy.", definitionMn: "Цөмийг тойрсон, тодорхой энергитэй, электронууд байрладаг муж." },
      { termEn: "Relative Charge", termMn: "Харьцангуй цэнэг", definitionEn: "The charge of a particle compared with the charge of a proton (+1): proton +1, neutron 0, electron −1.", definitionMn: "Бөөмийн цэнэгийг протоны цэнэг (+1)-тэй харьцуулсан утга: протон +1, нейтрон 0, электрон −1." },
      { termEn: "Relative Mass", termMn: "Харьцангуй масс", definitionEn: "The mass of a particle compared with the mass of a proton (1): proton 1, neutron 1, electron 1/1836.", definitionMn: "Бөөмийн массыг протоны масс (1)-тай харьцуулсан утга: протон 1, нейтрон 1, электрон 1/1836." }
    ],
    formulas: [
      { nameEn: "Number of Neutrons", nameMn: "Нейтроны тоо", formula: "n = A − Z", note: "Mass (nucleon) number minus atomic (proton) number" },
      { nameEn: "Number of Electrons in an Ion", nameMn: "Ион дахь электроны тоо", formula: "e = Z − (ion charge)", note: "Subtract for a positive ion, add for a negative ion" },
      { nameEn: "Deflection in an Electric Field", nameMn: "Цахилгаан орон дахь хазайлт", formula: "angle ∝ charge ÷ mass", note: "Beams at the same velocity; e.g. ⁴He²⁺ (2 ÷ 4) is deflected half as much as a proton" },
      { nameEn: "Relative Atomic Mass from Isotopes", nameMn: "Изотопуудаас харьцангуй атомын масс", formula: "Ar = Σ(mass × % abundance) ÷ 100", note: "e.g. Cl: (35 × 75 + 37 × 25) ÷ 100 = 35.5" }
    ],
    examStyleTips: [
      "In electric field deflection questions, state both the direction (towards the oppositely charged plate) and the size of the deflection (electrons ≈ 1/1836 the mass of a proton, so they bend much more).",
      "Isotopes have identical chemical properties because they have the same number and arrangement of electrons, and chemical reactions involve electrons — not because they have the same number of protons.",
      "For ions, positive charge → subtract electrons, negative charge → add electrons: Cr²⁺ has 22 electrons, not 26.",
      "Isotopic symbol: mass number on top, proton number at the bottom (²⁷₁₃Al, not ¹³₂₇Al).",
      "The relative mass of an electron is 1/1836 — never write 0 or 1.",
      "Atoms are neutral because the number of protons equals the number of electrons."
    ],
    examQuestions: [
      {
        id: "ch1-q1",
        marks: 3,
        questionEn: "Vanadium has mass number 51 and proton number 23.\nDeduce the numbers of protons, electrons and neutrons in a neutral vanadium atom.",
        questionMn: "Ванадийн массын тоо 51, протоны тоо 23.\nСаармаг ванадийн атом дахь протон, электрон, нейтроны тоог олно уу.",
        solutionEn: "Protons = Z = 23 [1]\nElectrons = protons in a neutral atom = 23 [1]\nNeutrons = A − Z = 51 − 23 = 28 [1]",
        solutionMn: "Протон = Z = 23. Саармаг атомд электрон = протон = 23. Нейтрон = A − Z = 51 − 23 = 28.",
        examinerTip: "Say the rule aloud: p = Z, e = p (neutral atom), n = A − Z."
      },
      {
        id: "ch1-q2",
        marks: 4,
        questionEn: "Deduce the numbers of protons, neutrons and electrons in:\n(a) ⁵²₂₄Cr²⁺\n(b) ³³₁₆S²⁻",
        questionMn: "Дараах ионуудын протон, нейтрон, электроны тоог олно уу:\n(a) ⁵²₂₄Cr²⁺\n(b) ³³₁₆S²⁻",
        solutionEn: "(a) 24 p · 52 − 24 = 28 n [1] · 2+ ion → 24 − 2 = 22 e [1]\n(b) 16 p · 33 − 16 = 17 n [1] · 2− ion → 16 + 2 = 18 e [1]",
        solutionMn: "(a) 24 протон, 28 нейтрон; эерэг ион тул электрон хасна: 24 − 2 = 22 электрон. (b) 16 протон, 17 нейтрон; сөрөг ион тул электрон нэмнэ: 16 + 2 = 18 электрон.",
        examinerTip: "Positive ion → subtract electrons; negative ion → add. A very common error is 24 + 2 = 26 for Cr²⁺."
      },
      {
        id: "ch1-q3",
        marks: 2,
        questionEn: "Identify each species, giving its full isotopic symbol and charge:\n(a) 26 protons, 30 neutrons, 23 electrons\n(b) 34 protons, 45 neutrons, 36 electrons",
        questionMn: "Бөөм бүрийг тодорхойлж, изотопын тэмдэглэгээ ба цэнэгийг бичнэ үү:\n(a) 26 протон, 30 нейтрон, 23 электрон\n(b) 34 протон, 45 нейтрон, 36 электрон",
        solutionEn: "(a) ⁵⁶₂₆Fe³⁺ [1]\n(b) ⁷⁹₃₄Se²⁻ [1]",
        solutionMn: "(a) 26 протон → Fe; A = 26 + 30 = 56; цэнэг = 26 − 23 = 3+ → ⁵⁶₂₆Fe³⁺. (b) 34 протон → Se; A = 34 + 45 = 79; цэнэг = 34 − 36 = 2− → ⁷⁹₃₄Se²⁻.",
        examinerTip: "Detective method: protons → element, protons + neutrons → mass number, protons − electrons → charge."
      },
      {
        id: "ch1-q4",
        marks: 6,
        questionEn: "State the relative masses and relative charges of an electron, a neutron and a proton.",
        questionMn: "Электрон, нейтрон, протоны харьцангуй масс ба харьцангуй цэнэгийг бичнэ үү.",
        solutionEn: "Electron: relative mass 1/1836 [1] · relative charge −1 [1]\nNeutron: relative mass 1 [1] · relative charge 0 [1]\nProton: relative mass 1 [1] · relative charge +1 [1]",
        solutionMn: "Электрон: масс 1/1836, цэнэг −1. Нейтрон: масс 1, цэнэг 0. Протон: масс 1, цэнэг +1.",
        examinerTip: "'0' or 'negligible' alone is not accepted for the electron's relative mass — write 1/1836."
      },
      {
        id: "ch1-q5",
        marks: 3,
        questionEn: "(a) What do you understand by the term isotope? [1]\n(b) Explain why ³⁵Cl⁻ and ³⁷Cl⁻ have the same chemical properties. [1]\n(c) State one physical property that differs between the two isotopes and explain why. [1]",
        questionMn: "(a) Изотоп гэж юу вэ? [1]\n(b) ³⁵Cl⁻ ба ³⁷Cl⁻ яагаад ижил химийн шинж чанартай вэ? [1]\n(c) Хоёр изотопын ялгаатай нэг физик шинж чанарыг нэрлэж, шалтгааныг тайлбарлана уу. [1]",
        solutionEn: "(a) Atoms of the same element with the same number of protons but different numbers of neutrons [1]\n(b) Same number and arrangement of electrons · chemical reactions involve electrons [1]\n(c) Mass or density differs · because they have different numbers of neutrons [1]",
        solutionMn: "(a) Протоны тоо ижил, нейтроны тоо ялгаатай нэг элементийн атомууд. (b) Электроны тоо ба байршил ижил; химийн урвалд электрон оролцоно. (c) Масс/нягт ялгаатай, учир нь нейтроны тоо өөр.",
        examinerTip: "'Atoms with different masses' scores 0 for (a). In (b), 'same number of protons' is not accepted — the mark is for ELECTRONS."
      },
      {
        id: "ch1-q6",
        marks: 4,
        questionEn: "Beams of protons, neutrons and electrons, all moving at the same velocity, pass between two oppositely charged plates.\nDescribe and explain how each beam behaves.",
        questionMn: "Ижил хурдтай протон, нейтрон, электроны цацраг эсрэг цэнэгтэй хоёр хавтангийн дундуур өнгөрнө.\nЦацраг бүр хэрхэн хазайхыг тайлбарлана уу.",
        solutionEn: "Protons bend towards the negative plate · positive charge, opposite charges attract [1]\nElectrons bend towards the positive plate · negative charge [1]\nElectrons are deflected much more than protons · electron mass is 1/1836 of a proton, largest charge ÷ mass [1]\nNeutrons pass straight through · no charge [1]",
        solutionMn: "Протон сөрөг хавтан руу хазайна (эерэг цэнэгтэй, эсрэг цэнэгүүд таталцана). Электрон эерэг хавтан руу хазайна. Электрон протоноос хамаагүй их хазайна, учир нь масс нь протоны 1/1836. Нейтрон цэнэггүй тул шууд өнгөрнө.",
        examinerTip: "Every mark needs direction AND a reason. 'The protons are attracted' on its own scores nothing."
      },
      {
        id: "ch1-q7",
        marks: 3,
        questionEn: "Under certain conditions a beam of protons is deflected by +8° (towards the negative plate).\nUnder the same conditions, predict the angle of deflection of beams of (a) ²H⁺, (b) ⁴He²⁺ and (c) ³He²⁺.",
        questionMn: "Тодорхой нөхцөлд протоны цацраг +8° (сөрөг хавтан руу) хазайдаг.\nИжил нөхцөлд (a) ²H⁺, (b) ⁴He²⁺, (c) ³He²⁺ цацраг хэдэн градус хазайхыг тооцоолно уу.",
        solutionEn: "Angle ∝ charge ÷ mass · proton: 1 ÷ 1 = 1 → 8°\n(a) ²H⁺: 1 ÷ 2 = ½ → +4° [1]\n(b) ⁴He²⁺: 2 ÷ 4 = ½ → +4° [1]\n(c) ³He²⁺: 2 ÷ 3 → 2/3 × 8° = +16/3° ≈ +5⅓° [1]",
        solutionMn: "Хазайлт ∝ цэнэг ÷ масс. Протон: 1 ÷ 1 → 8°. (a) ²H⁺: 1 ÷ 2 → +4°. (b) ⁴He²⁺: 2 ÷ 4 → +4°. (c) ³He²⁺: 2 ÷ 3 → 2/3 × 8° ≈ +5.3°. Бүгд эерэг тул сөрөг хавтан руу хазайна.",
        examinerTip: "Work out charge ÷ mass for each particle first, then scale the proton angle."
      },
      {
        id: "ch1-q8",
        marks: 2,
        questionEn: "Chlorine has two isotopes, ³⁵Cl and ³⁷Cl. The relative atomic mass of chlorine is 35.5.\nCalculate the percentage abundance of each isotope.",
        questionMn: "Хлор ³⁵Cl ба ³⁷Cl гэсэн хоёр изотоптой. Хлорын харьцангуй атомын масс 35.5.\nИзотоп бүрийн хувийн тархалтыг тооцоолно уу.",
        solutionEn: "Let x% be ³⁵Cl: 35x + 37(100 − x) = 3550 [1]\n3700 − 2x = 3550 → x = 75\n75% ³⁵Cl and 25% ³⁷Cl, a 3 : 1 ratio [1]",
        solutionMn: "³⁵Cl-ийг x% гэвэл: 35x + 37(100 − x) = 35.5 × 100. 3700 − 2x = 3550 → x = 75. Иймд 75% ³⁵Cl, 25% ³⁷Cl (3 : 1). Ar нь 35-д ойр байгаа нь ³⁵Cl илүү элбэг болохыг харуулна.",
        examinerTip: "Sanity check: Ar = 35.5 is nearer 35 than 37, so ³⁵Cl must be the more abundant isotope."
      },
      {
        id: "ch1-q9",
        marks: 4,
        questionEn: "Uranium has two common isotopes, ²³⁵₉₂U and ²³⁸₉₂U.\n(a) State two ways in which atoms of these isotopes are identical and one way in which they differ. [3]\n(b) How many electrons are there in one U²⁺ ion? [1]",
        questionMn: "Ураны түгээмэл хоёр изотоп: ²³⁵₉₂U ба ²³⁸₉₂U.\n(a) Эдгээр изотопын атомууд ижил байх хоёр, ялгаатай байх нэг зүйлийг бичнэ үү. [3]\n(b) Нэг U²⁺ ионд хэдэн электрон байх вэ? [1]",
        solutionEn: "(a) Same number of protons, 92 [1] · same number of electrons, 92 [1]\nDifferent numbers of neutrons: 143 and 146 [1]\n(b) 92 − 2 = 90 electrons [1]",
        solutionMn: "(a) Протоны тоо ижил (92), электроны тоо ижил (92); нейтроны тоо ялгаатай (143 ба 146). (b) 92 − 2 = 90 электрон.",
        examinerTip: "Give actual numbers — 'same protons, different neutrons (143 vs 146)' is more secure than a vague statement."
      },
      {
        id: "ch1-q10",
        marks: 3,
        questionEn: "In Rutherford's experiment, α-particles were fired at a thin sheet of gold foil.\nDescribe what was observed and what each observation shows about the structure of the atom.",
        questionMn: "Резерфордын туршилтад нимгэн алтан ялтас руу α-бөөм харвасан.\nЮу ажиглагдсан, ажиглалт бүр атомын бүтцийн талаар юуг харуулж байгааг тайлбарлана уу.",
        solutionEn: "Most α-particles passed straight through · the atom is mostly empty space [1]\nSome were deflected · the nucleus is positively charged and repels the positive α-particles [1]\nAbout 1 in 20 000 bounced back · the nucleus is very small and dense, containing nearly all the mass [1]",
        solutionMn: "Ихэнх α-бөөм шууд нэвтэрсэн → атомын ихэнх нь хоосон орон зай. Зарим нь хазайсан → цөм эерэг цэнэгтэй, эерэг α-бөөмийг түлхэнэ. 20 000-аас 1 орчим нь буцаж ойсон → цөм маш жижиг, нягт, бараг бүх массыг агуулна.",
        examinerTip: "Pair every observation with its conclusion — an observation without a conclusion earns no mark."
      },
      {
        id: "ch1-q11",
        marks: 2,
        questionEn: "A hydrogen atom is about 10⁻¹⁰ m across and its nucleus about 10⁻¹⁵ m across.\nIf the atom were enlarged to the size of a stadium 100 m wide, how big would the nucleus be? What does this show?",
        questionMn: "Устөрөгчийн атом ойролцоогоор 10⁻¹⁰ м, цөм нь 10⁻¹⁵ м хэмжээтэй.\nАтомыг 100 м өргөн цэнгэлдэх хүрээлэн болтол томруулбал цөм нь ямар хэмжээтэй болох вэ? Энэ юуг харуулж байна вэ?",
        solutionEn: "Ratio atom : nucleus = 10⁻¹⁰ ÷ 10⁻¹⁵ = 10⁵ · 100 m ÷ 10⁵ = 10⁻³ m = 1 mm [1]\nThe nucleus is a dot the size of a pea in the stadium · the atom is mostly empty space [1]",
        solutionMn: "Атом : цөм = 10⁻¹⁰ ÷ 10⁻¹⁵ = 10⁵. 100 м ÷ 10⁵ = 10⁻³ м = 1 мм. Цөм нь цэнгэлдэх хүрээлэн доторх вандуйн хэмжээтэй цэг — атомын ихэнх нь хоосон орон зай."
      }
    ]
  },
  {
    id: 2,
    number: 2,
    level: "AS",
    category: "Physical",
    titleEn: "Electrons in Atoms",
    titleMn: "Атом дахь электронууд",
    descriptionEn: "Shells, sub-shells and orbitals, electronic configurations and electrons in boxes, free radicals, first and successive ionisation energies, and trends in atomic and ionic radius (Syllabus 1.3–1.4).",
    descriptionMn: "Бүрхүүл, дэд бүрхүүл ба орбиталь, электрон тохиргоо ба «хайрцаг» дүрслэл, чөлөөт радикал, нэгдүгээр ба дараалсан иончлолын энерги, атом ба ионы радиусын хандлага (Syllabus 1.3–1.4).",
    syllabusRef: "Syllabus 1.3–1.4",
    examPapers: ["Paper 1", "Paper 2"],
    learningIntentionsEn: [
      "Use the terms shell, sub-shell, orbital, principal quantum number (n) and ground state",
      "State the number of orbitals and the maximum number of electrons in s, p and d sub-shells (1, 3, 5 orbitals → 2, 6, 10 electrons)",
      "Write full (1s² notation) and shorthand ([Ar]) electronic configurations of atoms and ions",
      "Use electrons-in-boxes diagrams and explain the configurations of chromium and copper",
      "Sketch the shapes of s and p orbitals and identify free radicals (species with unpaired electrons)",
      "Define first ionisation energy and write equations, with state symbols, for successive ionisation energies",
      "Explain ionisation energies using nuclear charge, distance, shielding and spin-pair repulsion, including trends across a period and down a group",
      "Deduce the group and electronic configuration of an element from successive ionisation energy data",
      "Explain the trends in atomic and ionic radius across a period and down a group"
    ],
    learningIntentionsMn: [
      "Бүрхүүл, дэд бүрхүүл, орбиталь, үндсэн квант тоо (n), үндсэн төлөв гэсэн нэр томьёог хэрэглэх",
      "s, p, d дэд бүрхүүл дэх орбиталийн тоо ба электроны дээд тоог хэлэх (1, 3, 5 орбиталь → 2, 6, 10 электрон)",
      "Атом ба ионы бүрэн (1s² тэмдэглэгээ) ба товч ([Ar]) электрон тохиргоог бичих",
      "«Хайрцаг» диаграмм ашиглах, хром ба зэсийн тохиргоог тайлбарлах",
      "s ба p орбиталийн хэлбэрийг зурах, чөлөөт радикалыг (хосгүй электронтой бөөм) таних",
      "Нэгдүгээр иончлолын энергийг тодорхойлж, дараалсан иончлолын энергийн тэгшитгэлийг төлөвийн тэмдэгтэй бичих",
      "Цөмийн цэнэг, зай, халхлалт, спин хосын түлхэлтээр иончлолын энерги ба үе, бүлгийн дагуух хандлагыг тайлбарлах",
      "Дараалсан иончлолын энергийн өгөгдлөөс элементийн бүлэг ба электрон тохиргоог тодорхойлох",
      "Үе ба бүлгийн дагуух атом ба ионы радиусын хандлагыг тайлбарлах"
    ],
    subtopics: [
      {
        id: "2.1",
        number: "2.1",
        titleEn: "Shells, Sub-shells & Orbitals",
        titleMn: "Бүрхүүл, дэд бүрхүүл ба орбиталь",
        summaryEn: "Electrons occupy energy levels (shells) numbered by the principal quantum number n; n = 1 is closest to the nucleus and lowest in energy. Shells hold a maximum of 2, 8, 18, 32 electrons (2n²). Each shell is divided into sub-shells: s (1 orbital, 2 e⁻), p (3 orbitals, 6 e⁻), d (5 orbitals, 10 e⁻). An atomic orbital is a region of space around the nucleus that can hold one or two electrons. Within a shell the energy order is s < p < d, and after argon the 4s sub-shell is lower in energy than 3d.",
        summaryMn: "Электронууд үндсэн квант тоо n-ээр дугаарлагдсан энергийн түвшинд (бүрхүүлд) байрлана; n = 1 нь цөмд хамгийн ойр, энерги нь хамгийн бага. Бүрхүүлүүд хамгийн ихдээ 2, 8, 18, 32 электрон (2n²) агуулна. Бүрхүүл бүр дэд бүрхүүлд хуваагдана: s (1 орбиталь, 2 e⁻), p (3 орбиталь, 6 e⁻), d (5 орбиталь, 10 e⁻). Атомын орбиталь нь цөмийн орчмын нэг эсвэл хоёр электрон байрлах орон зайн муж. Нэг бүрхүүл дотор энерги s < p < d дарааллаар өсөх ба аргоны дараа 4s нь 3d-ээс бага энергитэй.",
        keyConcepts: ["n = 1, 2, 3, 4 → max 2, 8, 18, 32 electrons", "s: 1 orbital · p: 3 orbitals · d: 5 orbitals", "Each orbital holds ≤ 2 electrons", "Electron hotel: floor = shell, corridor = sub-shell, room = orbital"],
        keyEquations: ["Max electrons in shell n = 2n²", "n = 3: 3s, 3p, 3d → 1 + 3 + 5 = 9 orbitals → 18 e⁻"],
        commonPitfalls: [
          "A d sub-shell has 5 orbitals and holds 10 electrons — not 3 and 6 (that is p).",
          "Simple configurations (2,8,8,2) are fine at IGCSE; at AS use sub-shells (1s² 2s² 2p⁶ 3s² 3p⁶ 4s²)."
        ]
      },
      {
        id: "2.2",
        number: "2.2",
        titleEn: "Orbital Shapes & Filling Rules",
        titleMn: "Орбиталийн хэлбэр ба дүүргэх дүрэм",
        summaryEn: "s orbitals are spherical (2s has the same shape as 1s but is larger and higher in energy). p orbitals have two lobes (dumbbell); px, py and pz lie along the x, y and z axes at 90° to each other and have the same energy. Filling rules: (1) lowest energy first: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p; (2) an orbital holds at most two electrons, with opposite spins; (3) in a sub-shell, electrons occupy separate orbitals singly with the same spin before pairing, which minimises repulsion.",
        summaryMn: "s орбиталь бөмбөрцөг хэлбэртэй (2s нь 1s-тэй ижил хэлбэртэй ч том, энерги өндөр). p орбиталь хоёр дэлбээтэй (гантель); px, py, pz нь x, y, z тэнхлэгийн дагуу бие биедээ 90°-аар байрлах ба энерги нь ижил. Дүүргэх дүрэм: (1) бага энергитэйгээс эхэлнэ: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p; (2) нэг орбитальд хамгийн ихдээ эсрэг спинтэй хоёр электрон; (3) дэд бүрхүүлд электронууд эхлээд тус тусдаа орбитальд ижил спинтэйгээр орж, дараа нь хосолно — энэ нь түлхэлтийг багасгана.",
        keyConcepts: ["s: spherical · p: two lobes on an axis", "Filling order: 1s 2s 2p 3s 3p 4s 3d 4p", "First 3d electron: scandium (Z = 21)", "First 4p electron: gallium (Z = 31)"],
        keyEquations: ["1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p"],
        commonPitfalls: [
          "After 3p comes 4s, not 3d.",
          "Nitrogen 2p is ↑ ↑ ↑ (singly occupied, same spin), not ↑↓ ↑ _."
        ]
      },
      {
        id: "2.3",
        number: "2.3",
        titleEn: "Electronic Configurations & Electrons in Boxes",
        titleMn: "Электрон тохиргоо ба «хайрцаг» дүрслэл",
        summaryEn: "Configurations are written in 1s² notation (e.g. Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²) or shorthand with a noble-gas core ([Ar] 3d⁶ 4s²); the superscripts must add up to Z. Chromium is [Ar] 3d⁵ 4s¹ and copper is [Ar] 3d¹⁰ 4s¹ because half-filled and full 3d sub-shells are more stable. In electrons-in-boxes diagrams a box is an orbital and an arrow an electron; ↑↓ shows opposite spins. Unpaired electrons: B 1, C 2, N 3, O 2, F 1, Ne 0. The block (s, p, d) is the sub-shell of the outer electron; outer s + p electrons give the group.",
        summaryMn: "Тохиргоог 1s² тэмдэглэгээгээр (Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²) эсвэл идэвхгүй хийн цөмтэй товч хэлбэрээр ([Ar] 3d⁶ 4s²) бичнэ; дээд индексүүдийн нийлбэр Z-тэй тэнцүү байх ёстой. Хром [Ar] 3d⁵ 4s¹, зэс [Ar] 3d¹⁰ 4s¹ байдаг, учир нь хагас дүүрсэн ба бүрэн дүүрсэн 3d дэд бүрхүүл илүү тогтвортой. «Хайрцаг» диаграммд хайрцаг = орбиталь, сум = электрон; ↑↓ нь эсрэг спин. Хосгүй электрон: B 1, C 2, N 3, O 2, F 1, Ne 0. Блок (s, p, d) нь гадна электроны дэд бүрхүүл; гадна s + p электроны тоо бүлгийг заана.",
        keyConcepts: ["Cr: [Ar] 3d⁵ 4s¹ (half-filled 3d)", "Cu: [Ar] 3d¹⁰ 4s¹ (full 3d)", "Check: superscripts add up to Z", "s-block: Groups 1–2 · p-block: Groups 13–18 · d-block: filling d"],
        keyEquations: ["Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² = [Ar] 3d⁶ 4s²", "Cr: [Ar] 3d⁵ 4s¹ · Cu: [Ar] 3d¹⁰ 4s¹"],
        commonPitfalls: [
          "Cu is [Ar] 3d¹⁰ 4s¹, not [Ar] 3d⁹ 4s²; Cr is [Ar] 3d⁵ 4s¹, not [Ar] 3d⁴ 4s².",
          "If the question says 'use 1s² notation', write the configuration in full — [Ar] shorthand loses the mark."
        ]
      },
      {
        id: "2.4",
        number: "2.4",
        titleEn: "Configurations of Ions & Free Radicals",
        titleMn: "Ионы электрон тохиргоо ба чөлөөт радикал",
        summaryEn: "Main-group ions gain or lose electrons in the outer sub-shell: Na⁺ 1s² 2s² 2p⁶ (like Ne), S²⁻ 1s² 2s² 2p⁶ 3s² 3p⁶ (like Ar). d-block atoms lose their 4s electrons first: Ti [Ar] 3d² 4s² → Ti²⁺ [Ar] 3d²; Fe [Ar] 3d⁶ 4s² → Fe³⁺ [Ar] 3d⁵. 4s fills before 3d but also empties before 3d. A free radical is a species with one or more unpaired electrons, shown with a dot: Cl• (3p⁵), H₃C• (methyl radical), H and O atoms are radicals; Na⁺ and Cl⁻ are not (all electrons paired).",
        summaryMn: "Үндсэн бүлгийн ионууд гадна дэд бүрхүүлдээ электрон авах эсвэл алдана: Na⁺ 1s² 2s² 2p⁶ (Ne шиг), S²⁻ 1s² 2s² 2p⁶ 3s² 3p⁶ (Ar шиг). d-блокийн атомууд эхлээд 4s электроноо алдана: Ti [Ar] 3d² 4s² → Ti²⁺ [Ar] 3d²; Fe [Ar] 3d⁶ 4s² → Fe³⁺ [Ar] 3d⁵. 4s нь 3d-ээс өмнө дүүрдэг ч мөн 3d-ээс өмнө хоосордог. Чөлөөт радикал нь нэг буюу хэд хэдэн хосгүй электронтой бөөм бөгөөд цэгээр тэмдэглэнэ: Cl• (3p⁵), H₃C• (метил радикал); H ба O атом радикал; Na⁺, Cl⁻ радикал биш (бүх электрон хостой).",
        keyConcepts: ["d-block ions: remove 4s before 3d", "Fe²⁺: [Ar] 3d⁶ · Fe³⁺: [Ar] 3d⁵", "Cu²⁺: [Ar] 3d⁹ · Cu⁺: [Ar] 3d¹⁰", "Free radical = one or more unpaired electrons"],
        keyEquations: ["Fe [Ar] 3d⁶ 4s² → Fe³⁺ [Ar] 3d⁵", "Cr [Ar] 3d⁵ 4s¹ → Cr³⁺ [Ar] 3d³"],
        commonPitfalls: [
          "Fe²⁺ is [Ar] 3d⁶, not [Ar] 3d⁴ 4s² — 4s electrons are lost first.",
          "Count electrons first: Fe³⁺ has 26 − 3 = 23 electrons."
        ]
      },
      {
        id: "2.5",
        number: "2.5",
        titleEn: "Ionisation Energy: Definition & Four Factors",
        titleMn: "Иончлолын энерги: тодорхойлолт ба дөрвөн хүчин зүйл",
        summaryEn: "First ionisation energy (IE₁) is the energy needed to remove one electron from each atom in one mole of atoms of the element in the gaseous state to form one mole of gaseous 1+ ions: Ca(g) → Ca⁺(g) + e⁻ (IE₁ = 590 kJ mol⁻¹). Successive IEs remove one electron at a time: Ca⁺(g) → Ca²⁺(g) + e⁻ (IE₂ = 1150), Ca²⁺(g) → Ca³⁺(g) + e⁻ (IE₃ = 4940). IE depends on: (1) nuclear charge ↑ → IE ↑; (2) distance of the outer electron ↑ → IE ↓; (3) shielding by inner electrons ↑ → IE ↓; (4) spin-pair repulsion makes a paired electron easier to remove → IE ↓.",
        summaryMn: "Нэгдүгээр иончлолын энерги (IE₁) нь хийн төлөвт буй 1 моль атомын атом бүрээс нэг электрон салгаж 1 моль хийн 1+ ион үүсгэхэд шаардагдах энерги: Ca(g) → Ca⁺(g) + e⁻ (IE₁ = 590 kJ mol⁻¹). Дараалсан IE нь электроныг нэг нэгээр салгана: Ca⁺(g) → Ca²⁺(g) + e⁻ (IE₂ = 1150), Ca²⁺(g) → Ca³⁺(g) + e⁻ (IE₃ = 4940). IE-д нөлөөлөх хүчин зүйл: (1) цөмийн цэнэг ↑ → IE ↑; (2) гадна электроны зай ↑ → IE ↓; (3) дотоод электронуудын халхлалт ↑ → IE ↓; (4) спин хосын түлхэлт хостой электроныг салгахад хялбар болгоно → IE ↓.",
        keyConcepts: ["All species gaseous (g)", "Charge on the right = number of the IE", "One electron removed per IE", "Factors: nuclear charge · distance · shielding · spin-pair repulsion"],
        keyEquations: ["IE₁: X(g) → X⁺(g) + e⁻", "IE₂: X⁺(g) → X²⁺(g) + e⁻", "IE₃: X²⁺(g) → X³⁺(g) + e⁻"],
        commonPitfalls: [
          "State symbols (g) are compulsory: Na(g) → Na⁺(g) + e⁻, not Na → Na⁺ + e⁻.",
          "The 2nd IE removes ONE electron from a 1+ ion: Al⁺(g) → Al²⁺(g) + e⁻, not Al(g) → Al²⁺(g) + 2e⁻.",
          "Explain trends with attraction (charge, distance, shielding, spin-pair repulsion) — never just 'it is more stable'."
        ]
      },
      {
        id: "2.6",
        number: "2.6",
        titleEn: "Successive Ionisation Energies",
        titleMn: "Дараалсан иончлолын энерги",
        summaryEn: "Successive IEs always increase because each electron is removed from an increasingly positive ion. A big jump shows the next electron comes from a new shell closer to the nucleus with less shielding. Sodium (log IE graph) has jumps after the 1st and 9th electrons → 2, 8, 1. The number of electrons before the first big jump = number of outer electrons = group: e.g. 1000, 2260, 3390, 4540, 7010, 8500 | 27 100 … → 6 outer electrons → Group 16 (sulfur).",
        summaryMn: "Дараалсан IE үргэлж өснө, учир нь электрон бүрийг улам эерэг болж буй ионоос салгадаг. Огцом үсрэлт нь дараагийн электрон цөмд илүү ойр, халхлалт багатай шинэ бүрхүүлээс салж байгааг харуулна. Натри (log IE график) 1 ба 9 дэх электроны дараа үсэрнэ → 2, 8, 1. Эхний огцом үсрэлтээс өмнөх электроны тоо = гадна электроны тоо = бүлэг: жишээ нь 1000, 2260, 3390, 4540, 7010, 8500 | 27 100 … → 6 гадна электрон → 16-р бүлэг (хүхэр).",
        keyConcepts: ["IE always increases: more positive ion", "Big jump = new inner shell", "Electrons before first jump = group number", "Divide each IE by the one before to find the jump"],
        keyEquations: ["Group = number of electrons removed before the first big jump"],
        examinerTips: [
          "Explain a big jump with: the electron is removed from a shell closer to the nucleus, with less shielding, so it is more strongly attracted.",
          "Predict jumps from the configuration: Al (2, 8, 3) jumps after the 3rd and 11th electrons."
        ]
      },
      {
        id: "2.7",
        number: "2.7",
        titleEn: "Trends in IE₁ & Atomic and Ionic Radius",
        titleMn: "IE₁ ба атом, ионы радиусын хандлага",
        summaryEn: "Across a period IE₁ generally increases (nuclear charge ↑, same shell, similar shielding) and atomic radius decreases. Two dips: Be → B (and Mg → Al) because the electron is removed from a 2p (3p) sub-shell that is slightly further away and shielded by the s electrons; N → O (and P → S) because oxygen loses a paired 2p electron (spin-pair repulsion). IE₁ falls sharply from a noble gas to the next alkali metal (new shell). Down a group IE₁ decreases and radius increases: extra shells mean greater distance and shielding, which outweigh the larger nuclear charge (Li 519, Na 494, K 418, Rb 403 kJ mol⁻¹). Cations are smaller than their atoms (outer shell lost); anions are larger (extra electrons, more repulsion). Isoelectronic ions: Na⁺ > Mg²⁺ > Al³⁺ (same 10 e⁻, more protons).",
        summaryMn: "Үеийн дагуу IE₁ ерөнхийдөө өсөж (цөмийн цэнэг ↑, нэг бүрхүүл, халхлалт ойролцоо), атомын радиус багасна. Хоёр уналт: Be → B (мөн Mg → Al), учир нь электрон арай хол, s электроноор халхлагдсан 2p (3p) дэд бүрхүүлээс салдаг; N → O (мөн P → S), учир нь хүчилтөрөгч хостой 2p электроноо алддаг (спин хосын түлхэлт). Идэвхгүй хийнээс дараагийн шүлтлэг металл руу IE₁ огцом буурна (шинэ бүрхүүл). Бүлгийн дагуу доош IE₁ буурч, радиус өснө: нэмэлт бүрхүүлүүд зай ба халхлалтыг ихэсгэж, цөмийн цэнэгийн өсөлтөөс давна (Li 519, Na 494, K 418, Rb 403 kJ mol⁻¹). Катион атомаасаа жижиг (гадна бүрхүүлээ алдсан), анион том (нэмэлт электрон, түлхэлт их). Ижил электронтой ионууд: Na⁺ > Mg²⁺ > Al³⁺ (10 e⁻, протон олон байх тусам жижиг).",
        keyConcepts: ["Across a period: IE₁ ↑, radius ↓", "Dips at B and O (Al and S)", "Down a group: IE₁ ↓, radius ↑", "Cation < atom · anion > atom"],
        keyEquations: ["IE₁: Mg 736 > Al 577 kJ mol⁻¹", "IE₁: N 1402 > O 1314 kJ mol⁻¹"],
        commonPitfalls: [
          "Down a group, do not say 'nuclear charge increases so IE increases' — distance and shielding outweigh the extra nuclear charge.",
          "For Mg → Al, mention all three: 3p electron, slightly further from the nucleus, shielded by the 3s electrons.",
          "Period 3 anions (P³⁻, S²⁻, Cl⁻) are larger than the cations (Na⁺, Mg²⁺, Al³⁺) because they have an extra shell."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Principal Quantum Shell (n)", termMn: "Үндсэн квант бүрхүүл (n)", definitionEn: "A main energy level for electrons, numbered n = 1, 2, 3 …; n = 1 is closest to the nucleus.", definitionMn: "Электроны үндсэн энергийн түвшин, n = 1, 2, 3 … гэж дугаарлана; n = 1 нь цөмд хамгийн ойр." },
      { termEn: "Sub-shell", termMn: "Дэд бүрхүүл", definitionEn: "A division of a shell (s, p or d) holding up to 2, 6 or 10 electrons.", definitionMn: "Бүрхүүлийн хэсэг (s, p эсвэл d), хамгийн ихдээ 2, 6, 10 электрон агуулна." },
      { termEn: "Atomic Orbital", termMn: "Атомын орбиталь", definitionEn: "A region of space around the nucleus of an atom that can hold one or two electrons (with opposite spins).", definitionMn: "Атомын цөмийн орчимд эсрэг спинтэй нэг эсвэл хоёр электрон байрлах орон зайн муж." },
      { termEn: "Electronic Configuration", termMn: "Электрон тохиргоо", definitionEn: "The arrangement of electrons in shells, sub-shells and orbitals in an atom or ion.", definitionMn: "Атом эсвэл ион дахь электронуудын бүрхүүл, дэд бүрхүүл, орбиталиудад байрлах байдал." },
      { termEn: "Ground State", termMn: "Үндсэн төлөв", definitionEn: "The lowest-energy electronic configuration of an atom.", definitionMn: "Атомын хамгийн бага энергитэй электрон тохиргоо." },
      { termEn: "Spin-Pair Repulsion", termMn: "Спин хосын түлхэлт", definitionEn: "The extra repulsion between two electrons in the same orbital, which makes a paired electron easier to remove.", definitionMn: "Нэг орбиталь дахь хоёр электроны хоорондох нэмэлт түлхэлт; хостой электроныг салгахад хялбар болгоно." },
      { termEn: "Free Radical", termMn: "Чөлөөт радикал", definitionEn: "A species with one or more unpaired electrons, e.g. Cl• or H₃C•.", definitionMn: "Нэг буюу хэд хэдэн хосгүй электронтой бөөм, жишээ нь Cl• эсвэл H₃C•." },
      { termEn: "First Ionisation Energy (IE₁)", termMn: "Нэгдүгээр иончлолын энерги (IE₁)", definitionEn: "The energy needed to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous 1+ ions.", definitionMn: "Хийн төлөвт буй 1 моль атомын атом бүрээс нэг электрон салгаж 1 моль хийн 1+ ион үүсгэхэд шаардагдах энерги." },
      { termEn: "Successive Ionisation Energies", termMn: "Дараалсан иончлолын энерги", definitionEn: "The energies needed to remove the electrons from an atom one at a time: IE₁, IE₂, IE₃ …", definitionMn: "Атомаас электроныг нэг нэгээр нь салгахад шаардагдах энергиүд: IE₁, IE₂, IE₃ …" },
      { termEn: "Nuclear Charge", termMn: "Цөмийн цэнэг", definitionEn: "The total positive charge of the nucleus, equal to the number of protons.", definitionMn: "Цөмийн нийт эерэг цэнэг, протоны тоотой тэнцүү." },
      { termEn: "Shielding", termMn: "Халхлалт", definitionEn: "The repulsion of outer electrons by inner shells of electrons, which reduces the attraction of the nucleus for them.", definitionMn: "Дотоод бүрхүүлийн электронууд гадна электроныг түлхэж, цөмийн татах хүчийг сулруулах үзэгдэл." },
      { termEn: "Atomic Radius", termMn: "Атомын радиус", definitionEn: "The distance from the nucleus to the outer electrons of an atom.", definitionMn: "Цөмөөс атомын гадна электрон хүртэлх зай." },
      { termEn: "Ionic Radius", termMn: "Ионы радиус", definitionEn: "The radius of an ion: cations are smaller and anions larger than their atoms.", definitionMn: "Ионы радиус: катион атомаасаа жижиг, анион атомаасаа том." }
    ],
    formulas: [
      { nameEn: "Electrons in Shell n", nameMn: "n-р бүрхүүлийн электрон", formula: "max e⁻ = 2n²", note: "n = 1, 2, 3, 4 → 2, 8, 18, 32" },
      { nameEn: "First Ionisation Energy", nameMn: "Нэгдүгээр иончлолын энерги", formula: "X(g) → X⁺(g) + e⁻", note: "State symbols (g) are compulsory in exams" },
      { nameEn: "nth Ionisation Energy", nameMn: "n-р иончлолын энерги", formula: "X⁽ⁿ⁻¹⁾⁺(g) → Xⁿ⁺(g) + e⁻", note: "One electron per step; the charge on the right equals n" },
      { nameEn: "Group from Successive IEs", nameMn: "Дараалсан IE-ээс бүлэг олох", formula: "group = electrons removed before the first big jump", note: "Divide each IE by the previous one to find the largest ratio" }
    ],
    examStyleTips: [
      "Missing state symbols (g) in ionisation energy equations loses the mark — X(g) → X⁺(g) + e⁻.",
      "d-block ions: remove 4s electrons before 3d (Fe is [Ar] 3d⁶ 4s², Fe²⁺ is [Ar] 3d⁶).",
      "Learn the exceptions Cr [Ar] 3d⁵ 4s¹ and Cu [Ar] 3d¹⁰ 4s¹.",
      "When asked to 'use 1s² notation', write the configuration in full rather than with [Ar].",
      "Explain IE trends with the four factors — nuclear charge, distance, shielding, spin-pair repulsion — and say which one outweighs the others.",
      "To find the group from successive IEs, locate the biggest ratio: a jump between the 3rd and 4th IE means 3 outer electrons → Group 13."
    ],
    examQuestions: [
      {
        id: "ch2-q1",
        marks: 2,
        questionEn: "Use 1s² notation to give the electronic configurations of (a) sulfur (Z = 16) and (b) vanadium (Z = 23).",
        questionMn: "1s² тэмдэглэгээг ашиглан (a) хүхэр (Z = 16), (b) ванади (Z = 23)-ийн электрон тохиргоог бичнэ үү.",
        solutionEn: "(a) S: 1s² 2s² 2p⁶ 3s² 3p⁴ [1]\n(b) V: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s² [1]",
        solutionMn: "(a) S: 1s² 2s² 2p⁶ 3s² 3p⁴. (b) V: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s² — 3p⁶-ийн дараа эхлээд 4s, дараа нь 3d дүүрнэ.",
        examinerTip: "Check the sum of the superscripts: 16 for S and 23 for V."
      },
      {
        id: "ch2-q2",
        marks: 3,
        questionEn: "Write the full electronic configurations of (a) chromium (Z = 24), (b) copper (Z = 29), and (c) explain why they do not follow the usual filling pattern.",
        questionMn: "(a) Хром (Z = 24), (b) зэс (Z = 29)-ийн бүрэн электрон тохиргоог бичиж, (c) яагаад ердийн дүүргэх дарааллыг дагадаггүйг тайлбарлана уу.",
        solutionEn: "(a) Cr: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ [1]\n(b) Cu: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ [1]\n(c) A half‑filled (3d⁵) or full (3d¹⁰) d sub‑shell is more stable [1]",
        solutionMn: "(a) Cr: [Ar] 3d⁵ 4s¹. (b) Cu: [Ar] 3d¹⁰ 4s¹. (c) Хагас дүүрсэн (3d⁵) эсвэл бүрэн дүүрсэн (3d¹⁰) d дэд бүрхүүл илүү тогтвортой тул нэг 4s электрон 3d рүү шилждэг.",
        examinerTip: "[Ar] 3d⁴ 4s² and [Ar] 3d⁹ 4s² are the classic wrong answers."
      },
      {
        id: "ch2-q3",
        marks: 4,
        questionEn: "Use 1s² notation to deduce the electronic configuration of:\n(a) Fe³⁺ (Fe: Z = 26)\n(b) Mn²⁺ (Mn: Z = 25)\n(c) Cu²⁺ (Cu: Z = 29)\n(d) S²⁻ (S: Z = 16)",
        questionMn: "1s² тэмдэглэгээгээр дараах ионуудын электрон тохиргоог бичнэ үү:\n(a) Fe³⁺ (Z = 26)\n(b) Mn²⁺ (Z = 25)\n(c) Cu²⁺ (Z = 29)\n(d) S²⁻ (Z = 16)",
        solutionEn: "(a) Fe³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ [1]\n(b) Mn²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ [1]\n(c) Cu²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ [1]\n(d) S²⁻: 1s² 2s² 2p⁶ 3s² 3p⁶ [1]",
        solutionMn: "(a) Fe [Ar] 3d⁶ 4s² → 2 ширхэг 4s, дараа нь 1 ширхэг 3d электрон алдана → [Ar] 3d⁵ (23 e⁻). (b) Mn [Ar] 3d⁵ 4s² → [Ar] 3d⁵. (c) Cu [Ar] 3d¹⁰ 4s¹ → [Ar] 3d⁹. (d) S²⁻ хоёр электрон авч Ar-тай ижил болно.",
        examinerTip: "Transition metal ions lose their 4s electrons before any 3d electrons."
      },
      {
        id: "ch2-q4",
        marks: 3,
        questionEn: "(a) Draw the electrons-in-boxes diagram for the outer sub-shells (3s and 3p) of phosphorus (Z = 15).\n(b) How many unpaired electrons does a phosphorus atom have?\n(c) Is a chlorine atom a free radical? Explain.",
        questionMn: "(a) Фосфорын (Z = 15) гадна дэд бүрхүүлийн (3s ба 3p) «хайрцаг» диаграммыг зурна уу.\n(b) Фосфорын атом хэдэн хосгүй электронтой вэ?\n(c) Хлорын атом чөлөөт радикал мөн үү? Тайлбарлана уу.",
        solutionEn: "(a) 3s ↑↓ · 3p ↑ ↑ ↑ (electrons in separate p orbitals with the same spin) [1]\n(b) 3 unpaired electrons [1]\n(c) Yes · Cl is 3s² 3p⁵, so it has one unpaired electron [1]",
        solutionMn: "(a) 3s ↑↓, 3p ↑ ↑ ↑ — p орбиталиудад эхлээд нэг нэгээр, ижил спинтэйгээр орно. (b) 3 хосгүй электрон. (c) Тийм: Cl нь 3p⁵ тул нэг хосгүй электронтой — чөлөөт радикал.",
        examinerTip: "Hund's rule in words: electrons occupy orbitals singly, with parallel spins, before pairing."
      },
      {
        id: "ch2-q5",
        marks: 3,
        questionEn: "(a) Define the term first ionisation energy.\n(b) Write equations, with state symbols, for the 2nd ionisation energy of aluminium and the 3rd ionisation energy of magnesium.",
        questionMn: "(a) Нэгдүгээр иончлолын энергийг тодорхойлно уу.\n(b) Хөнгөнцагааны 2-р иончлолын энерги ба магнийн 3-р иончлолын энергийн тэгшитгэлийг төлөвийн тэмдэгтэй бичнэ үү.",
        solutionEn: "(a) Energy needed to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous 1+ ions [1]\n(b) Al⁺(g) → Al²⁺(g) + e⁻ [1]\nMg²⁺(g) → Mg³⁺(g) + e⁻ [1]",
        solutionMn: "(a) Хийн төлөвт буй 1 моль атомын атом бүрээс нэг электрон салгаж 1 моль хийн 1+ ион үүсгэхэд шаардагдах энерги. (b) Al⁺(g) → Al²⁺(g) + e⁻; Mg²⁺(g) → Mg³⁺(g) + e⁻. Баруун талын цэнэг = иончлолын энергийн дугаар.",
        examinerTip: "The key words are 'one mole', 'gaseous atoms' and 'gaseous 1+ ions'. Each equation removes only ONE electron."
      },
      {
        id: "ch2-q6",
        marks: 3,
        questionEn: "The successive ionisation energies of element X (kJ mol⁻¹) are:\n1000, 2260, 3390, 4540, 7010, 8500, 27 100, 31 670, 36 580, 43 140\n(a) Between which two ionisation energies is the first big jump?\n(b) Deduce the group of X and explain your answer.",
        questionMn: "X элементийн дараалсан иончлолын энерги (kJ mol⁻¹):\n1000, 2260, 3390, 4540, 7010, 8500, 27 100, 31 670, 36 580, 43 140\n(a) Эхний огцом үсрэлт аль хоёр иончлолын энергийн хооронд байна вэ?\n(b) X-ийн бүлгийг тодорхойлж, тайлбарлана уу.",
        solutionEn: "(a) Between the 6th (8500) and 7th (27 100) · ratio about 3.2 [1]\n(b) Six electrons are removed from the outer shell before the jump [1]\nSo X has 6 outer electrons → Group 16 (sulfur) [1]",
        solutionMn: "(a) 6-р (8500) ба 7-р (27 100)-ийн хооронд, ойролцоогоор 3.2 дахин. (b) Үсрэлтээс өмнө 6 электрон гадна бүрхүүлээс салж байна; 7 дахь электрон цөмд ойр шинэ бүрхүүлээс салдаг. Иймд 6 гадна электрон → 16-р бүлэг (хүхэр).",
        examinerTip: "Divide each IE by the one before — the biggest ratio marks the change of shell."
      },
      {
        id: "ch2-q7",
        marks: 4,
        questionEn: "The first ionisation energies of magnesium and aluminium are 736 and 577 kJ mol⁻¹.\nExplain why aluminium has a lower first ionisation energy than magnesium.",
        questionMn: "Магни ба хөнгөнцагааны нэгдүгээр иончлолын энерги 736 ба 577 kJ mol⁻¹.\nХөнгөнцагааны IE₁ яагаад магнийнхаас бага байгааг тайлбарлана уу.",
        solutionEn: "Mg is [Ne] 3s² and Al is [Ne] 3s² 3p¹ [1]\nAl loses a 3p electron, which is higher in energy and slightly further from the nucleus [1]\nThe 3p electron is shielded by the 3s electrons [1]\nThese outweigh the larger nuclear charge of Al, so less energy is needed [1]",
        solutionMn: "Mg [Ne] 3s², Al [Ne] 3s² 3p¹. Al нь 3p электроноо алдана — энэ нь энерги өндөр, цөмөөс арай хол. 3p электроныг 3s электронууд халхална. Эдгээр нь Al-ийн их цөмийн цэнэгээс давж, бага энерги шаардана.",
        examinerTip: "Finish by weighing up the factors: 'these outweigh the increase in nuclear charge'."
      },
      {
        id: "ch2-q8",
        marks: 3,
        questionEn: "(a) Explain why the first ionisation energy of oxygen (1314 kJ mol⁻¹) is lower than that of nitrogen (1402 kJ mol⁻¹).\n(b) Explain why the first ionisation energy decreases from lithium to potassium.",
        questionMn: "(a) Хүчилтөрөгчийн IE₁ (1314 kJ mol⁻¹) яагаад азотынхоос (1402 kJ mol⁻¹) бага вэ?\n(b) Литиээс кали хүртэл IE₁ яагаад буурдгийг тайлбарлана уу.",
        solutionEn: "(a) N is 2p ↑ ↑ ↑, O is 2p ↑↓ ↑ ↑ · O loses a paired 2p electron [1]\nSpin‑pair repulsion makes this electron easier to remove [1]\n(b) Outer electron is in a higher shell: further from the nucleus and more shielded · these outweigh the increased nuclear charge [1]",
        solutionMn: "(a) N: 2p ↑ ↑ ↑, O: 2p ↑↓ ↑ ↑. Хүчилтөрөгч хостой 2p электроноо алддаг; спин хосын түлхэлт түүнийг салгахад хялбар болгоно. (b) Гадна электрон өндөр бүрхүүлд — цөмөөс хол, халхлалт их; энэ нь цөмийн цэнэгийн өсөлтөөс давна.",
        examinerTip: "Draw the 2p boxes for N and O and circle the electron that is removed."
      },
      {
        id: "ch2-q9",
        marks: 4,
        questionEn: "(a) Explain why atomic radius decreases from sodium to chlorine.\n(b) Explain why Mg²⁺ is smaller than a magnesium atom.\n(c) Put Na⁺, Mg²⁺ and Al³⁺ in order of decreasing radius and explain.",
        questionMn: "(a) Натриас хлор хүртэл атомын радиус яагаад буурдгийг тайлбарлана уу.\n(b) Mg²⁺ яагаад магнийн атомаас жижиг вэ?\n(c) Na⁺, Mg²⁺, Al³⁺-ийг радиусын буурах дарааллаар байрлуулж тайлбарлана уу.",
        solutionEn: "(a) Nuclear charge increases · electrons are added to the same shell with similar shielding, so they are pulled closer [1]\n(b) Mg²⁺ has lost its outer (third) shell [1]\n(c) Na⁺ > Mg²⁺ > Al³⁺ [1]\nAll have 10 electrons; more protons attract the same electrons more strongly [1]",
        solutionMn: "(a) Цөмийн цэнэг өснө; электронууд ижил бүрхүүлд, ойролцоо халхлалттай нэмэгдэх тул цөмд илүү ойр татагдана. (b) Mg²⁺ гадна (3-р) бүрхүүлээ алдсан. (c) Na⁺ > Mg²⁺ > Al³⁺ — бүгд 10 электронтой, протон олон байх тусам электроныг хүчтэй татна.",
        examinerTip: "For isoelectronic ions, compare the number of protons for the same number of electrons."
      },
      {
        id: "ch2-q10",
        marks: 3,
        questionEn: "Exit ticket:\n(a) Cobalt has Z = 27. Write the configuration of Co²⁺ in 1s² notation.\n(b) Between which two successive ionisation energies of sulfur is the first big jump? Explain.",
        questionMn: "(a) Кобальтын Z = 27. Co²⁺-ийн тохиргоог 1s² тэмдэглэгээгээр бичнэ үү.\n(b) Хүхрийн дараалсан иончлолын энергийн эхний огцом үсрэлт аль хоёрын хооронд байх вэ? Тайлбарлана уу.",
        solutionEn: "(a) Co²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ [1]\n(b) Between the 6th and 7th [1]\nThe 7th electron comes from the second shell: closer to the nucleus and less shielded [1]",
        solutionMn: "(a) Co [Ar] 3d⁷ 4s² → Co²⁺ [Ar] 3d⁷. (b) S нь 2, 8, 6 тул 6 ба 7 дахь IE-ийн хооронд; 7 дахь электрон цөмд ойр, халхлалт багатай 2-р бүрхүүлээс салдаг."
      }
    ]
  },
  {
    id: 3,
    number: 3,
    level: "AS",
    category: "Physical",
    titleEn: "Atoms, Molecules & Stoichiometry",
    titleMn: "Атом, молекул ба стехиометр (Молийн тооцоо)",
    descriptionEn: "Relative masses and the unified atomic mass unit, mass spectra, hydrated salts, the mole and the Avogadro constant, formulas and ionic equations, reacting masses, limiting reagent and percentage yield, solutions and titrations, and gas volumes (Syllabus 2.1–2.4, 22.2).",
    descriptionMn: "Харьцангуй масс ба атомын массын нэгдсэн нэгж, масс-спектр, кристалл устай давс, моль ба Авогадрогийн тогтмол, томьёо ба ионы тэгшитгэл, урвалын масс, хязгаарлагч бодис ба гарцын хувь, уусмал ба титрлэлт, хийн эзлэхүүн (Syllabus 2.1–2.4, 22.2).",
    syllabusRef: "Syllabus 2.1–2.4 · 22.2",
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    learningIntentionsEn: [
      "Define the unified atomic mass unit, Ar, relative isotopic mass and Mr, and use the mole",
      "Calculate Ar from isotopic abundances or a mass spectrum, and use M⁺, [M+1] and [M+2] peaks of organic molecules",
      "Find the number of molecules of water of crystallisation from the mass lost on heating",
      "Calculate empirical and molecular formulas from masses, percentages or combustion data",
      "Write formulas of ionic compounds, balanced equations with state symbols, and ionic equations",
      "Calculate reacting masses, identify the limiting reagent and calculate percentage yield",
      "Calculate concentrations and the results of titrations",
      "Use the molar gas volume (24.0 dm³ at r.t.p.) and deduce stoichiometry from gas volumes"
    ],
    learningIntentionsMn: [
      "Атомын массын нэгдсэн нэгж, Ar, изотопын харьцангуй масс, Mr-ийг тодорхойлж, моль ашиглах",
      "Изотопын тархалт эсвэл масс-спектрээс Ar тооцоолох, органик молекулын M⁺, [M+1], [M+2] оргилыг ашиглах",
      "Халаахад алдагдсан массаас кристалл усны молекулын тоог олох",
      "Масс, хувь эсвэл шаталтын өгөгдлөөс эмпирик ба молекулын томьёог тооцоолох",
      "Ионы нэгдлийн томьёо, төлөвийн тэмдэгтэй тэнцвэржүүлсэн тэгшитгэл, ионы тэгшитгэл бичих",
      "Урвалын масс тооцоолох, хязгаарлагч бодисыг тодорхойлох, гарцын хувийг олох",
      "Концентраци ба титрлэлтийн үр дүнг тооцоолох",
      "Хийн молийн эзлэхүүнийг (r.t.p.-д 24.0 dm³) ашиглах, хийн эзлэхүүнээс стехиометрийг тодорхойлох"
    ],
    subtopics: [
      {
        id: "3.1",
        number: "3.1",
        titleEn: "Relative Masses & the Mole Map",
        titleMn: "Харьцангуй масс ба молийн «газрын зураг»",
        summaryEn: "The unified atomic mass unit (u) is 1/12 of the mass of a carbon-12 atom (1 u = 1.66 × 10⁻²⁷ kg). Ar is the weighted average mass of the atoms of an element ÷ 1 u (no units; Cl = 35.5 because of isotopes). Relative isotopic mass is the mass of one isotope ÷ 1 u. Mr (molecules) and relative formula mass (ionic compounds) are the sums of the Ar values: CH₄ = 12.0 + 4(1.0) = 16.0; (NH₄)₂SO₄ = 132.1; Mg(NO₃)₂·6H₂O = 256.3. Every calculation goes through moles: n = m ÷ M, N = n × L, n = V ÷ 24.0 (gas), n = c × V (solution).",
        summaryMn: "Атомын массын нэгдсэн нэгж (u) нь нүүрстөрөгч-12 атомын массын 1/12 (1 u = 1.66 × 10⁻²⁷ кг). Ar нь элементийн атомуудын жигнэсэн дундаж масс ÷ 1 u (нэгжгүй; изотопуудын улмаас Cl = 35.5). Изотопын харьцангуй масс = нэг изотопын масс ÷ 1 u. Mr (молекул) ба харьцангуй томьёоны масс (ионы нэгдэл) нь Ar-уудын нийлбэр: CH₄ = 12.0 + 4(1.0) = 16.0; (NH₄)₂SO₄ = 132.1; Mg(NO₃)₂·6H₂O = 256.3. Бүх тооцоо мольоор дамжина: n = m ÷ M, N = n × L, n = V ÷ 24.0 (хий), n = c × V (уусмал).",
        keyConcepts: ["1 u = 1/12 mass of ¹²C", "Ar has no units", "Mr = sum of Ar values", "Mole map: mass ↔ moles ↔ particles ↔ gas volume ↔ solution"],
        keyEquations: ["n = m ÷ M", "N = n × 6.02 × 10²³", "n = V ÷ 24.0 (V in dm³ at room temperature and pressure)", "n = c × V (V in dm³)"],
        commonPitfalls: [
          "Ar is not 'the mass of an atom' — it is the weighted average mass of the atoms compared with 1/12 of the mass of a carbon-12 atom.",
          "Say which particle: 1 mol Cl₂ contains 2 mol Cl atoms."
        ]
      },
      {
        id: "3.2",
        number: "3.2",
        titleEn: "Hydrated Salts & Water of Crystallisation",
        titleMn: "Кристалл устай давс ба кристалл ус",
        summaryEn: "Water of crystallisation is water that is part of the crystal structure. Hydrated CuSO₄·5H₂O is blue; anhydrous CuSO₄ is white. Heating drives off the water (blue → white, droplets at the top of the tube); adding water back turns it blue and the tube gets hot. To find x in CuSO₄·xH₂O: heat to constant mass, mass of water = mass lost, then x = n(H₂O) ÷ n(anhydrous salt). Example: 2.50 g → 1.60 g CuSO₄: water 0.90 g = 0.050 mol, CuSO₄ = 0.0100 mol, x = 5.",
        summaryMn: "Кристалл ус нь талстын бүтцийн нэг хэсэг болсон ус. Кристалл устай CuSO₄·5H₂O цэнхэр, усгүй CuSO₄ цагаан. Халаахад ус ялгарна (цэнхэр → цагаан, хуруу шилний дээд хэсэгт усны дусал); буцааж ус нэмэхэд цэнхэр болж, хуруу шил халуу оргино. CuSO₄·xH₂O-ийн x-ийг олохдоо: тогтмол масс хүртэл халаана, усны масс = алдагдсан масс, x = n(H₂O) ÷ n(усгүй давс). Жишээ: 2.50 г → 1.60 г CuSO₄: ус 0.90 г = 0.050 моль, CuSO₄ = 0.0100 моль, x = 5.",
        keyConcepts: ["Hydrated: contains water of crystallisation", "Anhydrous: without water", "Heat to constant mass", "x = n(H₂O) ÷ n(anhydrous)"],
        keyEquations: ["CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O", "x = n(H₂O) ÷ n(anhydrous salt)"],
        commonPitfalls: [
          "Use the Mr of the ANHYDROUS salt for the moles of the residue, not the Mr of the hydrate.",
          "Heat to constant mass to make sure all the water has been driven off."
        ]
      },
      {
        id: "3.3",
        number: "3.3",
        titleEn: "Mass Spectra: Ar and Organic Molecules",
        titleMn: "Масс-спектр: Ar ба органик молекул",
        summaryEn: "Each peak in the mass spectrum of an element is one isotope; its height is the relative abundance. Ar = Σ(isotopic mass × % abundance) ÷ 100: neon 20 (90.9%), 21 (0.3%), 22 (8.8%) → Ar = 20.2. For organic molecules the M⁺ peak gives Mr; fragments include 15 CH₃⁺, 29 C₂H₅⁺, 43 CH₃CO⁺. The [M+1] peak (from ¹³C) gives the number of carbon atoms: n = 100 × [M+1] ÷ (1.1 × [M]). An [M+2] peak shows Cl (M : M+2 = 3 : 1) or Br (1 : 1).",
        summaryMn: "Элементийн масс-спектрийн оргил бүр нэг изотоп; өндөр нь харьцангуй тархалт. Ar = Σ(изотопын масс × % тархалт) ÷ 100: неон 20 (90.9%), 21 (0.3%), 22 (8.8%) → Ar = 20.2. Органик молекулд M⁺ оргил Mr-ийг өгнө; хэлтэрхийнүүд: 15 CH₃⁺, 29 C₂H₅⁺, 43 CH₃CO⁺. [M+1] оргил (¹³C-ээс) нүүрстөрөгчийн атомын тоог өгнө: n = 100 × [M+1] ÷ (1.1 × [M]). [M+2] оргил нь Cl (M : M+2 = 3 : 1) эсвэл Br (1 : 1) байгааг харуулна.",
        keyConcepts: ["Peak height = relative abundance", "M⁺ peak → Mr", "[M+1] → number of C atoms", "[M+2]: Cl 3 : 1, Br 1 : 1"],
        keyEquations: ["Ar = Σ(mass × % abundance) ÷ 100", "n(C) = 100 × [M + 1] ÷ (1.1 × [M])"],
        commonPitfalls: [
          "Divide by the total abundance (100 for percentages) — not by the number of isotopes.",
          "Estimate first: Ar must lie between the lightest and heaviest isotopes, closest to the most abundant one."
        ]
      },
      {
        id: "3.4",
        number: "3.4",
        titleEn: "The Mole & the Avogadro Constant",
        titleMn: "Моль ба Авогадрогийн тогтмол",
        summaryEn: "One mole is the amount of substance containing 6.02 × 10²³ particles (the Avogadro constant L = 6.02 × 10²³ mol⁻¹). Molar mass is the mass of one mole in g mol⁻¹, numerically equal to Ar or Mr. Examples: 2.9 g CaO ÷ 56.1 = 0.052 mol; 4.5 g H₂O = 0.25 mol = 1.5 × 10²³ molecules = 4.5 × 10²³ atoms. Give answers to the number of significant figures of the least precise data and round only at the end.",
        summaryMn: "Нэг моль нь 6.02 × 10²³ бөөм агуулсан бодисын хэмжээ (Авогадрогийн тогтмол L = 6.02 × 10²³ mol⁻¹). Молийн масс нь нэг молийн масс (g mol⁻¹), тоон утгаараа Ar эсвэл Mr-тэй тэнцүү. Жишээ: 2.9 г CaO ÷ 56.1 = 0.052 моль; 4.5 г H₂O = 0.25 моль = 1.5 × 10²³ молекул = 4.5 × 10²³ атом. Хариуг хамгийн нарийвчлал багатай өгөгдлийн чухал цифрийн тоогоор өгч, зөвхөн эцэст нь тоймлоно.",
        keyConcepts: ["L = 6.02 × 10²³ mol⁻¹", "Molar mass M in g mol⁻¹", "Atoms = molecules × atoms per molecule", "Significant figures: match the data"],
        keyEquations: ["n = m ÷ M · m = n × M", "N = n × L"],
        commonPitfalls: [
          "A mole is NOT '6.02 × 10²³ grams' — it is the amount containing 6.02 × 10²³ particles.",
          "0.004 has 1 significant figure; 0.0040 has 2.",
          "Do not round at each step — keep the full value in the calculator."
        ]
      },
      {
        id: "3.5",
        number: "3.5",
        titleEn: "Reacting Masses, Limiting Reagent & % Yield",
        titleMn: "Урвалын масс, хязгаарлагч бодис ба гарцын хувь",
        summaryEn: "Routine: moles of the known substance → mole ratio from the equation → moles of the unknown → mass. Fe₂O₃ + 3CO → 2Fe + 3CO₂: 798 g Fe₂O₃ = 5.00 mol → 10.0 mol Fe = 558 g. The limiting reagent is used up first and fixes the amount of product; compare the moles needed with the moles available (79.8 g Fe₂O₃ = 0.500 mol needs 0.750 mol C; 0.780 mol available, so C is in excess). Percentage yield = actual ÷ theoretical × 100. Percentage by mass of an element = mass of element in 1 mol ÷ Mr × 100 (Fe in Fe₂O₃ = 69.9%).",
        summaryMn: "Алгоритм: мэдэгдэх бодисын моль → тэгшитгэлийн молийн харьцаа → үл мэдэгдэх бодисын моль → масс. Fe₂O₃ + 3CO → 2Fe + 3CO₂: 798 г Fe₂O₃ = 5.00 моль → 10.0 моль Fe = 558 г. Хязгаарлагч бодис түрүүлж дуусаж, бүтээгдэхүүний хэмжээг тодорхойлно; шаардлагатай ба байгаа молийг харьцуул (79.8 г Fe₂O₃ = 0.500 моль нь 0.750 моль C шаардана; 0.780 моль байгаа тул C илүүдэлтэй). Гарцын хувь = бодит ÷ онолын × 100. Элементийн массын хувь = 1 моль дахь элементийн масс ÷ Mr × 100 (Fe₂O₃ дахь Fe = 69.9%).",
        keyConcepts: ["moles → ratio → moles → mass", "Limiting reagent: used up first", "Compare moles needed with moles available", "% yield = actual ÷ theoretical × 100"],
        keyEquations: ["% yield = actual mass ÷ theoretical mass × 100", "% by mass = (n × Ar) ÷ Mr × 100"],
        commonPitfalls: [
          "Moles of reactant ≠ moles of product — use the coefficients in the equation.",
          "The reagent with more moles is NOT necessarily in excess — compare with the ratio in the equation.",
          "Theoretical yield = moles of product × Mr of the PRODUCT."
        ]
      },
      {
        id: "3.6",
        number: "3.6",
        titleEn: "Empirical & Molecular Formulas",
        titleMn: "Эмпирик ба молекулын томьёо",
        summaryEn: "The empirical formula is the simplest whole-number ratio of atoms; the molecular formula is the actual number of atoms in a molecule = (empirical formula)ₙ. Table method: element → mass (or %) → ÷ Ar → ÷ smallest → whole-number ratio (multiply if you get 1.5 or 2.5). Example: 3.55 g of a phosphorus oxide with 1.55 g P: P 0.0500, O 0.125 → 1 : 2.5 → P₂O₅. From combustion data: moles of C = moles of CO₂, moles of H = 2 × moles of H₂O. CH₂O with Mr 180 → C₆H₁₂O₆.",
        summaryMn: "Эмпирик томьёо нь атомуудын хамгийн энгийн бүхэл тоон харьцаа; молекулын томьёо нь молекул дахь атомын бодит тоо = (эмпирик томьёо)ₙ. Хүснэгтийн арга: элемент → масс (эсвэл %) → ÷ Ar → ÷ хамгийн бага → бүхэл харьцаа (1.5 эсвэл 2.5 гарвал үржүүлнэ). Жишээ: 1.55 г P агуулсан 3.55 г фосфорын исэл: P 0.0500, O 0.125 → 1 : 2.5 → P₂O₅. Шаталтын өгөгдлөөс: C-ийн моль = CO₂-ийн моль, H-ийн моль = 2 × H₂O-ийн моль. CH₂O, Mr 180 → C₆H₁₂O₆.",
        keyConcepts: ["mass → ÷ Ar → ÷ smallest → ratio", "Ratio 1 : 2.5 → multiply by 2", "n = Mr ÷ empirical formula mass", "C from CO₂, H from H₂O"],
        keyEquations: ["n = Mr ÷ Mr(empirical formula)", "molecular formula = (empirical formula)ₙ"],
        commonPitfalls: [
          "Do not round 1 : 2.5 to 1 : 3 — multiply both by 2 to get 2 : 5.",
          "In combustion analysis, each H₂O contains TWO hydrogen atoms."
        ]
      },
      {
        id: "3.7",
        number: "3.7",
        titleEn: "Ionic Formulas, Balanced & Ionic Equations",
        titleMn: "Ионы томьёо, тэнцвэржүүлсэн ба ионы тэгшитгэл",
        summaryEn: "Ion charges come from the Periodic Table; learn NO₃⁻, CO₃²⁻, SO₄²⁻, OH⁻, HCO₃⁻, PO₄³⁻, NH₄⁺, Zn²⁺, Ag⁺. A Roman numeral gives the charge: iron(III) → Fe³⁺. The charges in a formula must add up to zero: Al₂(SO₄)₃, (NH₄)₂CO₃, Ca₃(PO₄)₂. Balance equations atom by atom and add state symbols (s), (l), (g), (aq): Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + CO₂(g) + H₂O(l). Ionic equation: split (aq) compounds into ions, cross out spectator ions, check that charges balance: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s).",
        summaryMn: "Ионы цэнэгийг үелэх системээс олно; NO₃⁻, CO₃²⁻, SO₄²⁻, OH⁻, HCO₃⁻, PO₄³⁻, NH₄⁺, Zn²⁺, Ag⁺-ийг цээжлэх. Ром тоо цэнэгийг заана: төмөр(III) → Fe³⁺. Томьёон дахь цэнэгүүдийн нийлбэр тэг байх ёстой: Al₂(SO₄)₃, (NH₄)₂CO₃, Ca₃(PO₄)₂. Тэгшитгэлийг атом атомаар тэнцвэржүүлж, (s), (l), (g), (aq) төлөвийн тэмдэг нэмнэ: Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + CO₂(g) + H₂O(l). Ионы тэгшитгэл: (aq) нэгдлүүдийг ион болгон задалж, хөндлөнгийн (spectator) ионуудыг хасч, цэнэгийн тэнцвэрийг шалгана: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s).",
        keyConcepts: ["Charges add up to zero", "Brackets for more than one polyatomic ion", "Spectator ions appear unchanged on both sides", "Keep (s), (l), (g) species as formulas"],
        keyEquations: ["Ag⁺(aq) + Cl⁻(aq) → AgCl(s)", "H⁺(aq) + OH⁻(aq) → H₂O(l)", "CO₃²⁻(aq) + 2H⁺(aq) → CO₂(g) + H₂O(l)"],
        commonPitfalls: [
          "Aluminium sulfate is Al₂(SO₄)₃ — 2 × (3+) = 3 × (2−).",
          "In ionic equations do not split solids, liquids or gases into ions, and remove all spectator ions."
        ]
      },
      {
        id: "3.8",
        number: "3.8",
        titleEn: "Solutions, Concentration & Titrations",
        titleMn: "Уусмал, концентраци ба титрлэлт",
        summaryEn: "Concentration c = n ÷ V, with c in mol dm⁻³ and V in dm³ (cm³ ÷ 1000); mass concentration in g dm⁻³ = mol dm⁻³ × Mr. In a titration, read the burette to ±0.05 cm³, ignore the rough titre and average concordant titres (within 0.10 cm³): 24.85 and 24.80 → 24.83 cm³. Routine: moles of the known solution → mole ratio → concentration of the unknown. 20.0 cm³ of 0.400 mol dm⁻³ NaOH = 8.00 × 10⁻³ mol; H₂SO₄ : NaOH = 1 : 2 → 4.00 × 10⁻³ mol in 25.25 cm³ → 0.158 mol dm⁻³.",
        summaryMn: "Концентраци c = n ÷ V, c нь mol dm⁻³, V нь dm³ (cm³ ÷ 1000); массын концентраци g dm⁻³ = mol dm⁻³ × Mr. Титрлэлтэд бюреткийг ±0.05 cm³ нарийвчлалтай уншиж, туршилтын (rough) титрийг хасч, ойролцоо (0.10 cm³ дотор) титрүүдийн дундажийг авна: 24.85 ба 24.80 → 24.83 cm³. Алгоритм: мэдэгдэх уусмалын моль → молийн харьцаа → үл мэдэгдэхийн концентраци. 0.400 mol dm⁻³ NaOH-ийн 20.0 cm³ = 8.00 × 10⁻³ моль; H₂SO₄ : NaOH = 1 : 2 → 25.25 cm³-т 4.00 × 10⁻³ моль → 0.158 mol dm⁻³.",
        keyConcepts: ["c (mol dm⁻³) = n ÷ V (dm³)", "V(dm³) = V(cm³) ÷ 1000", "Concordant titres: within 0.10 cm³", "g dm⁻³ = mol dm⁻³ × Mr"],
        keyEquations: ["c = n ÷ V", "n = c × V(cm³) ÷ 1000"],
        commonPitfalls: [
          "Never put cm³ into c × V — convert to dm³ first.",
          "Do not include the rough titre in the mean.",
          "Total moles of ions: 0.4 mol Al₂(SO₄)₃ gives 0.8 mol Al³⁺ + 1.2 mol SO₄²⁻ = 2.0 mol ions."
        ]
      },
      {
        id: "3.9",
        number: "3.9",
        titleEn: "Gas Volumes",
        titleMn: "Хийн эзлэхүүн",
        summaryEn: "Avogadro's hypothesis: equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. At r.t.p. one mole of any gas occupies 24.0 dm³ (24 000 cm³), so n = V ÷ 24.0. Gas volume ratios equal mole ratios, which lets you deduce formulas: 50 cm³ CₓHᵧ + 250 cm³ O₂ → 150 cm³ CO₂ gives 1 : 5 : 3 → x = 3; the remaining 2 O₂ form 4 H₂O → C₃H₈.",
        summaryMn: "Авогадрогийн таамаглал: ижил температур ба даралтад ижил эзлэхүүнтэй хийнүүд ижил тооны молекул агуулна. r.t.p.-д ямар ч хийн 1 моль 24.0 dm³ (24 000 cm³) эзэлнэ, иймд n = V ÷ 24.0. Хийн эзлэхүүний харьцаа = молийн харьцаа тул томьёог олж болно: 50 cm³ CₓHᵧ + 250 cm³ O₂ → 150 cm³ CO₂ нь 1 : 5 : 3 → x = 3; үлдсэн 2 O₂ нь 4 H₂O үүсгэнэ → C₃H₈.",
        keyConcepts: ["Molar gas volume = 24.0 dm³ mol⁻¹ at r.t.p.", "Volume ratio = mole ratio", "120 cm³ = 0.120 dm³"],
        keyEquations: ["n = V ÷ 24.0 (V in dm³)", "V = n × 24.0"],
        commonPitfalls: [
          "Convert cm³ to dm³ before dividing by 24.0 (or divide cm³ by 24 000).",
          "Liquid products (e.g. PCl₃(l), H₂O(l)) have no gas volume."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Unified Atomic Mass Unit (u)", termMn: "Атомын массын нэгдсэн нэгж (u)", definitionEn: "One twelfth of the mass of a carbon-12 atom (1.66 × 10⁻²⁷ kg).", definitionMn: "Нүүрстөрөгч-12 атомын массын 1/12 хэсэг (1.66 × 10⁻²⁷ кг)." },
      { termEn: "Relative Atomic Mass (Ar)", termMn: "Харьцангуй атомын масс (Ar)", definitionEn: "The weighted average mass of the atoms of an element compared with 1/12 of the mass of a carbon-12 atom.", definitionMn: "Элементийн атомуудын жигнэсэн дундаж массыг нүүрстөрөгч-12 атомын массын 1/12-тэй харьцуулсан утга." },
      { termEn: "Relative Isotopic Mass", termMn: "Изотопын харьцангуй масс", definitionEn: "The mass of an atom of one isotope compared with 1/12 of the mass of a carbon-12 atom.", definitionMn: "Нэг изотопын атомын массыг нүүрстөрөгч-12 атомын массын 1/12-тэй харьцуулсан утга." },
      { termEn: "Relative Molecular Mass (Mr)", termMn: "Харьцангуй молекул масс (Mr)", definitionEn: "The mass of a molecule compared with 1/12 of the mass of a carbon-12 atom; the sum of the Ar values. 'Relative formula mass' is used for ionic compounds.", definitionMn: "Молекулын массыг нүүрстөрөгч-12 атомын массын 1/12-тэй харьцуулсан утга; Ar-уудын нийлбэр. Ионы нэгдэлд «харьцангуй томьёоны масс» гэнэ." },
      { termEn: "Mole", termMn: "Моль", definitionEn: "The amount of substance containing 6.02 × 10²³ specified particles (atoms, molecules, ions or electrons).", definitionMn: "6.02 × 10²³ тодорхой бөөм (атом, молекул, ион, электрон) агуулсан бодисын хэмжээ." },
      { termEn: "Avogadro Constant (L)", termMn: "Авогадрогийн тогтмол (L)", definitionEn: "The number of particles in one mole: 6.02 × 10²³ mol⁻¹.", definitionMn: "Нэг моль дахь бөөмийн тоо: 6.02 × 10²³ mol⁻¹." },
      { termEn: "Molar Mass", termMn: "Молийн масс", definitionEn: "The mass of one mole of a substance, in g mol⁻¹.", definitionMn: "Бодисын нэг молийн масс, g mol⁻¹-ээр." },
      { termEn: "Empirical Formula", termMn: "Эмпирик томьёо", definitionEn: "The simplest whole-number ratio of the atoms of each element in a compound.", definitionMn: "Нэгдэл дэх элемент бүрийн атомын хамгийн энгийн бүхэл тоон харьцаа." },
      { termEn: "Molecular Formula", termMn: "Молекулын томьёо", definitionEn: "The actual number of atoms of each element in one molecule.", definitionMn: "Нэг молекул дахь элемент бүрийн атомын бодит тоо." },
      { termEn: "Water of Crystallisation", termMn: "Кристалл ус", definitionEn: "Water that is part of the crystal structure of a hydrated compound, e.g. the 5H₂O in CuSO₄·5H₂O.", definitionMn: "Кристалл устай нэгдлийн талстын бүтцэд орсон ус, жишээ нь CuSO₄·5H₂O дахь 5H₂O." },
      { termEn: "Limiting Reagent", termMn: "Хязгаарлагч бодис", definitionEn: "The reactant that is used up first and so fixes the maximum amount of product; the other reactant is in excess.", definitionMn: "Түрүүлж дуусч, бүтээгдэхүүний дээд хэмжээг тодорхойлдог эх бодис; нөгөө эх бодис илүүдэлтэй." },
      { termEn: "Concentration", termMn: "Концентраци", definitionEn: "The amount of solute in 1 dm³ of solution: c = n ÷ V, in mol dm⁻³.", definitionMn: "1 dm³ уусмал дахь ууссан бодисын хэмжээ: c = n ÷ V, mol dm⁻³." },
      { termEn: "Molar Gas Volume", termMn: "Хийн молийн эзлэхүүн", definitionEn: "The volume occupied by one mole of any gas: 24.0 dm³ at room temperature and pressure.", definitionMn: "Ямар ч хийн нэг молийн эзлэх эзлэхүүн: өрөөний температур ба даралтад 24.0 dm³." },
      { termEn: "Percentage Yield", termMn: "Гарцын хувь", definitionEn: "Actual mass of product ÷ theoretical (maximum) mass × 100.", definitionMn: "Бүтээгдэхүүний бодит масс ÷ онолын (хамгийн их) масс × 100." }
    ],
    formulas: [
      { nameEn: "Moles from Mass", nameMn: "Массаас моль", formula: "n = m ÷ M", note: "m in g, M in g mol⁻¹" },
      { nameEn: "Number of Particles", nameMn: "Бөөмийн тоо", formula: "N = n × 6.02 × 10²³", note: "Multiply by atoms per molecule for atoms" },
      { nameEn: "Moles from Solution", nameMn: "Уусмалаас моль", formula: "n = c × V", note: "c in mol dm⁻³, V in dm³ (cm³ ÷ 1000)" },
      { nameEn: "Gas Moles at r.t.p.", nameMn: "Хийн моль (r.t.p.)", formula: "n = V ÷ 24.0", note: "V in dm³ at room temperature and pressure" },
      { nameEn: "Relative Atomic Mass", nameMn: "Харьцангуй атомын масс", formula: "Ar = Σ(mass × % abundance) ÷ 100", note: "From isotopic abundances or a mass spectrum" },
      { nameEn: "Percentage Yield", nameMn: "Гарцын хувь", formula: "% yield = actual ÷ theoretical × 100", note: "Theoretical mass uses the Mr of the product" },
      { nameEn: "Water of Crystallisation", nameMn: "Кристалл ус", formula: "x = n(H₂O) ÷ n(anhydrous salt)", note: "Water = mass lost on heating to constant mass" },
      { nameEn: "Carbon Atoms from [M+1]", nameMn: "[M+1]-ээс нүүрстөрөгчийн тоо", formula: "n = 100 × [M+1] ÷ (1.1 × [M])", note: "¹³C is 1.1% of natural carbon" }
    ],
    examStyleTips: [
      "Convert cm³ to dm³ (÷ 1000) before using n = c × V.",
      "Use the coefficients in the equation for the mole ratio — moles of reactant are rarely equal to moles of product.",
      "To identify the limiting reagent, compare the moles needed with the moles available; 'more moles' does not mean 'in excess'.",
      "Give answers to the same number of significant figures as the least precise data, and round only at the end.",
      "Ionic equations: remove spectator ions and keep solids, liquids and gases as full formulas; check the charges balance.",
      "In titrations, average only concordant titres (within 0.10 cm³) and discard the rough titre.",
      "Definition of Ar: weighted average mass of the atoms compared with 1/12 of the mass of a carbon-12 atom."
    ],
    examQuestions: [
      {
        id: "ch3-q1",
        marks: 2,
        questionEn: "The mass spectrum of neon shows ²⁰Ne 90.9%, ²¹Ne 0.3% and ²²Ne 8.8%.\nCalculate the relative atomic mass of neon to 3 significant figures.",
        questionMn: "Неоны масс-спектрт ²⁰Ne 90.9%, ²¹Ne 0.3%, ²²Ne 8.8% байна.\nНеоны харьцангуй атомын массыг 3 чухал цифрээр тооцоолно уу.",
        solutionEn: "20 × 90.9 + 21 × 0.3 + 22 × 8.8 = 1818 + 6.3 + 193.6 = 2017.9 [1]\nAr = 2017.9 ÷ 100 = 20.2 [1]",
        solutionMn: "Масс бүрийг хувиар үржүүлж нэмнэ: 1818 + 6.3 + 193.6 = 2017.9. 100-д хуваана: Ar = 20.2.",
        examinerTip: "Estimate first: the answer must be close to 20 because ²⁰Ne is by far the most abundant isotope."
      },
      {
        id: "ch3-q2",
        marks: 2,
        questionEn: "Copper has two isotopes, ⁶³Cu and ⁶⁵Cu. Ar(Cu) = 63.55.\nCalculate the percentage abundance of each isotope.",
        questionMn: "Зэс ⁶³Cu ба ⁶⁵Cu гэсэн хоёр изотоптой. Ar(Cu) = 63.55.\nИзотоп бүрийн хувийн тархалтыг тооцоолно уу.",
        solutionEn: "Let ⁶³Cu = x%: 63x + 65(100 − x) = 6355 [1]\n6500 − 2x = 6355 → x = 72.5 · so 72.5% ⁶³Cu and 27.5% ⁶⁵Cu [1]",
        solutionMn: "⁶³Cu-ийг x% гэвэл 63x + 65(100 − x) = 63.55 × 100. 6500 − 2x = 6355 → x = 72.5. Иймд 72.5% ⁶³Cu, 27.5% ⁶⁵Cu. Шалгалт: (63 × 72.5 + 65 × 27.5) ÷ 100 = 63.55.",
        examinerTip: "Always check by substituting your percentages back into the Ar formula."
      },
      {
        id: "ch3-q3",
        marks: 3,
        questionEn: "2.50 g of hydrated copper(II) sulfate, CuSO₄·xH₂O, is heated to constant mass. 1.60 g of anhydrous CuSO₄ remains.\nCalculate x. (Ar: H = 1.0, O = 16.0, S = 32.1, Cu = 63.5)",
        questionMn: "2.50 г кристалл устай зэс(II) сульфатыг (CuSO₄·xH₂O) тогтмол масс хүртэл халаахад 1.60 г усгүй CuSO₄ үлджээ.\nx-ийг тооцоолно уу. (Ar: H = 1.0, O = 16.0, S = 32.1, Cu = 63.5)",
        solutionEn: "Mass of water = 2.50 − 1.60 = 0.90 g → n(H₂O) = 0.90 ÷ 18.0 = 0.050 mol [1]\nn(CuSO₄) = 1.60 ÷ 159.6 = 0.0100 mol [1]\nx = 0.050 ÷ 0.0100 = 5 → CuSO₄·5H₂O [1]",
        solutionMn: "Усны масс 0.90 г = 0.050 моль. CuSO₄ = 1.60 ÷ 159.6 = 0.0100 моль. x = 0.050 ÷ 0.0100 = 5 → CuSO₄·5H₂O.",
        examinerTip: "Use the Mr of anhydrous CuSO₄ (159.6) for the residue, not the hydrate."
      },
      {
        id: "ch3-q4",
        marks: 3,
        questionEn: "A compound contains C 40.0%, H 6.7% and O 53.3% by mass. Its Mr is 180.\nFind its empirical and molecular formulas. (Ar: C = 12.0, H = 1.0, O = 16.0)",
        questionMn: "Нэгдэл массаараа C 40.0%, H 6.7%, O 53.3% агуулна. Mr = 180.\nЭмпирик ба молекулын томьёог олно уу. (Ar: C = 12.0, H = 1.0, O = 16.0)",
        solutionEn: "C 40.0 ÷ 12.0 = 3.33 · H 6.7 ÷ 1.0 = 6.7 · O 53.3 ÷ 16.0 = 3.33 [1]\n÷ 3.33 → 1 : 2 : 1 → empirical formula CH₂O [1]\nM(CH₂O) = 30.0 · 180 ÷ 30.0 = 6 → C₆H₁₂O₆ [1]",
        solutionMn: "Ar-д хуваавал C 3.33, H 6.7, O 3.33. Хамгийн багад хуваавал 1 : 2 : 1 → CH₂O. 180 ÷ 30.0 = 6 → C₆H₁₂O₆.",
        examinerTip: "Lay the working out as a table: element · % · ÷ Ar · ÷ smallest."
      },
      {
        id: "ch3-q5",
        marks: 3,
        questionEn: "0.600 g of a hydrocarbon burns completely to give 1.76 g CO₂ and 1.08 g H₂O. Its Mr is 30.0.\nFind the empirical and molecular formulas and write the combustion equation.",
        questionMn: "0.600 г нүүрсустөрөгч бүрэн шатаж 1.76 г CO₂, 1.08 г H₂O үүсгэв. Mr = 30.0.\nЭмпирик ба молекулын томьёог олж, шаталтын тэгшитгэлийг бичнэ үү.",
        solutionEn: "n(C) = n(CO₂) = 1.76 ÷ 44.0 = 0.0400 mol · n(H) = 2 × 1.08 ÷ 18.0 = 0.120 mol [1]\nC : H = 1 : 3 → CH₃ · 30.0 ÷ 15.0 = 2 → C₂H₆ [1]\n2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O [1]",
        solutionMn: "C-ийн моль = CO₂-ийн моль = 0.0400; H-ийн моль = 2 × 0.0600 = 0.120. C : H = 1 : 3 → CH₃; 30.0 ÷ 15.0 = 2 → C₂H₆. Шалгалт: 0.480 г C + 0.120 г H = 0.600 г. 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.",
        examinerTip: "Each H₂O contains two H atoms — the most common error is forgetting to double."
      },
      {
        id: "ch3-q6",
        marks: 4,
        questionEn: "5.40 g of aluminium is heated with 17.75 g of chlorine: 2Al + 3Cl₂ → 2AlCl₃. 18.7 g of AlCl₃ is obtained.\nIdentify the limiting reagent and calculate the percentage yield. (Ar: Al = 27.0, Cl = 35.5)",
        questionMn: "5.40 г хөнгөнцагааныг 17.75 г хлортой халаав: 2Al + 3Cl₂ → 2AlCl₃. 18.7 г AlCl₃ гарсан.\nХязгаарлагч бодисыг тодорхойлж, гарцын хувийг тооцоолно уу. (Ar: Al = 27.0, Cl = 35.5)",
        solutionEn: "n(Al) = 5.40 ÷ 27.0 = 0.200 · n(Cl₂) = 17.75 ÷ 71.0 = 0.250 [1]\n0.200 mol Al needs 0.300 mol Cl₂ but only 0.250 available → Cl₂ is limiting [1]\nn(AlCl₃) = 0.250 × 2/3 = 0.1667 mol × 133.5 = 22.25 g [1]\n% yield = 18.7 ÷ 22.25 × 100 = 84.0% [1]",
        solutionMn: "Al 0.200 моль, Cl₂ 0.250 моль. 0.200 моль Al-д 0.300 моль Cl₂ хэрэгтэй, гэвч 0.250 л байгаа → Cl₂ хязгаарлагч. Онолын AlCl₃ = 0.1667 моль × 133.5 = 22.25 г. Гарц = 18.7 ÷ 22.25 × 100 = 84.0%.",
        examinerTip: "Base the theoretical yield on the limiting reagent, using the Mr of the product."
      },
      {
        id: "ch3-q7",
        marks: 3,
        questionEn: "20.0 cm³ of 0.400 mol dm⁻³ NaOH is neutralised by 25.25 cm³ of sulfuric acid.\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\nCalculate the concentration of the sulfuric acid.",
        questionMn: "0.400 mol dm⁻³ NaOH-ийн 20.0 cm³-ийг хүхрийн хүчлийн 25.25 cm³ саармагжуулав.\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\nХүхрийн хүчлийн концентрацийг тооцоолно уу.",
        solutionEn: "n(NaOH) = 0.400 × 0.0200 = 8.00 × 10⁻³ mol [1]\nH₂SO₄ : NaOH = 1 : 2 → n(H₂SO₄) = 4.00 × 10⁻³ mol [1]\nc = 4.00 × 10⁻³ ÷ 0.02525 = 0.158 mol dm⁻³ [1]",
        solutionMn: "NaOH-ийн моль = 0.400 × 0.0200 = 8.00 × 10⁻³. Харьцаа 1 : 2 тул H₂SO₄ = 4.00 × 10⁻³ моль. c = 4.00 × 10⁻³ ÷ 0.02525 dm³ = 0.158 mol dm⁻³.",
        examinerTip: "Routine: moles of the known → ratio → concentration. Convert both volumes to dm³."
      },
      {
        id: "ch3-q8",
        marks: 4,
        questionEn: "50 cm³ of a hydrocarbon CₓHᵧ reacts exactly with 250 cm³ of oxygen to give 150 cm³ of carbon dioxide (all volumes at r.t.p.).\nDeduce x and y and write the equation.",
        questionMn: "50 cm³ CₓHᵧ нүүрсустөрөгч 250 cm³ хүчилтөрөгчтэй бүрэн урвалд орж 150 cm³ нүүрстөрөгчийн давхар исэл үүсгэв (бүгд r.t.p.).\nx, y-ийг олж, тэгшитгэлийг бичнэ үү.",
        solutionEn: "Volume ratio = mole ratio: CₓHᵧ : O₂ : CO₂ = 50 : 250 : 150 = 1 : 5 : 3 [1]\n3 CO₂ per molecule → x = 3 [1]\n5 − 3 = 2 mol O₂ left = 4 mol O atoms → 4 H₂O → y = 8 [1]\nC₃H₈ + 5O₂ → 3CO₂ + 4H₂O [1]",
        solutionMn: "Эзлэхүүний харьцаа = молийн харьцаа = 1 : 5 : 3. 3 CO₂ → x = 3. CO₂-д 3 O₂ зарцуулагдаж, үлдсэн 2 O₂ = 4 O атом → 4 H₂O → y = 8. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
        examinerTip: "The oxygen not used to make CO₂ must have formed water."
      },
      {
        id: "ch3-q9",
        marks: 4,
        questionEn: "Write ionic equations, with state symbols, for:\n(a) aqueous silver nitrate + aqueous sodium chloride\n(b) magnesium + dilute sulfuric acid\n(c) calcium carbonate + hydrochloric acid\n(d) aqueous iron(II) sulfate + aqueous sodium hydroxide",
        questionMn: "Дараах урвалуудын ионы тэгшитгэлийг төлөвийн тэмдэгтэй бичнэ үү:\n(a) мөнгөний нитратын уусмал + натрийн хлоридын уусмал\n(b) магни + шингэрүүлсэн хүхрийн хүчил\n(c) кальцийн карбонат + давсны хүчил\n(d) төмөр(II) сульфатын уусмал + натрийн гидроксидын уусмал",
        solutionEn: "(a) Ag⁺(aq) + Cl⁻(aq) → AgCl(s) [1]\n(b) Mg(s) + 2H⁺(aq) → Mg²⁺(aq) + H₂(g) [1]\n(c) CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + CO₂(g) + H₂O(l) [1]\n(d) Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s) [1]",
        solutionMn: "(a) Na⁺, NO₃⁻ хөндлөнгийн ионууд. (b) SO₄²⁻ хөндлөнгийн ион. (c) CaCO₃ хатуу тул ион болгон задлахгүй; Cl⁻ хөндлөнгийн. (d) Na⁺, SO₄²⁻ хөндлөнгийн; Fe(OH)₂ тунадас үүснэ.",
        examinerTip: "Check that the total charge is the same on both sides of every ionic equation."
      },
      {
        id: "ch3-q10",
        marks: 4,
        questionEn: "A ketone has M⁺ at m/e 72 (relative abundance 40.0) and an [M+1] peak of 1.76. Large fragment peaks appear at 29, 43 and 57.\nDeduce the number of carbon atoms, the molecular formula and the structure.",
        questionMn: "Кетоны M⁺ оргил m/e 72 (харьцангуй тархалт 40.0), [M+1] оргил 1.76. 29, 43, 57-д том хэлтэрхийн оргил гарна.\nНүүрстөрөгчийн атомын тоо, молекулын томьёо ба бүтцийг тодорхойлно уу.",
        solutionEn: "n(C) = 100 × 1.76 ÷ (1.1 × 40.0) = 4 [1]\n72 − 4 × 12 = 24 = one O + 8 H → C₄H₈O [1]\nFragments: 43 = CH₃CO⁺ · 29 = C₂H₅⁺ · 57 = C₂H₅CO⁺ [1]\nStructure CH₃COCH₂CH₃ (butanone) [1]",
        solutionMn: "[M+1]-ээс n = 4 нүүрстөрөгч. 72 − 48 = 24 = O (16) + 8H → C₄H₈O. Хэлтэрхийнүүд: 43 = CH₃CO⁺, 29 = C₂H₅⁺, 57 = C₂H₅CO⁺ → бутанон CH₃COCH₂CH₃.",
        examinerTip: "Use the fragments to place the C=O group: 43 and 57 together point to butanone."
      },
      {
        id: "ch3-q11",
        marks: 4,
        questionEn: "2.24 g of iron reacts with chlorine to form 6.50 g of an iron chloride. (Ar: Fe = 55.8, Cl = 35.5)\n(a) Deduce its formula.\n(b) Write the equation for its formation.\n(c) Write the ionic equation, with state symbols, for its reaction with aqueous sodium hydroxide.",
        questionMn: "2.24 г төмөр хлортой урвалд орж 6.50 г төмрийн хлорид үүсгэв. (Ar: Fe = 55.8, Cl = 35.5)\n(a) Томьёог тодорхойлно уу.\n(b) Үүсэх урвалын тэгшитгэлийг бичнэ үү.\n(c) Натрийн гидроксидын уусмалтай урвалын ионы тэгшитгэлийг төлөвийн тэмдэгтэй бичнэ үү.",
        solutionEn: "(a) Cl = 6.50 − 2.24 = 4.26 g → 0.120 mol · Fe = 2.24 ÷ 55.8 = 0.0401 mol [1]\nFe : Cl = 1 : 3 → FeCl₃, iron(III) chloride [1]\n(b) 2Fe(s) + 3Cl₂(g) → 2FeCl₃(s) [1]\n(c) Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s) [1]",
        solutionMn: "(a) Cl-ийн масс 4.26 г = 0.120 моль, Fe 0.0401 моль → 1 : 3 → FeCl₃. (b) 2Fe(s) + 3Cl₂(g) → 2FeCl₃(s). (c) Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)."
      },
      {
        id: "ch3-q12",
        marks: 4,
        questionEn: "1.215 g of magnesium reacts with 75.0 cm³ of 2.00 mol dm⁻³ hydrochloric acid:\nMg + 2HCl → MgCl₂ + H₂\n(a) Which reagent is limiting?\n(b) Calculate the volume of hydrogen produced at r.t.p.",
        questionMn: "1.215 г магни 2.00 mol dm⁻³ давсны хүчлийн 75.0 cm³-тэй урвалд орно:\nMg + 2HCl → MgCl₂ + H₂\n(a) Аль бодис хязгаарлагч вэ?\n(b) r.t.p.-д ялгарах устөрөгчийн эзлэхүүнийг тооцоолно уу.",
        solutionEn: "(a) n(Mg) = 1.215 ÷ 24.3 = 0.0500 mol · n(HCl) = 2.00 × 0.0750 = 0.150 mol [1]\n0.0500 mol Mg needs 0.100 mol HCl; 0.150 available → Mg is limiting [1]\n(b) n(H₂) = 0.0500 mol [1]\nV = 0.0500 × 24.0 = 1.20 dm³ [1]",
        solutionMn: "(a) Mg 0.0500 моль, HCl 0.150 моль. Mg-д 0.100 моль HCl хэрэгтэй, 0.150 байгаа → Mg хязгаарлагч. (b) H₂ = 0.0500 моль × 24.0 = 1.20 dm³."
      }
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
    descriptionEn: "Kinetic theory, ideal and real gases, pV = nRT and finding Mr, vapour pressure, and giant ionic, metallic, molecular and simple molecular lattices including fullerenes, nanotubes and graphene (Syllabus 4.1–4.2).",
    descriptionMn: "Кинетик онол, идеаль ба бодит хий, pV = nRT ба Mr олох, уурын даралт, ионы, металлын, аварга молекулын ба энгийн молекулын тор — фуллерен, нанохоолой, графен зэрэг (Syllabus 4.1–4.2).",
    syllabusRef: "Syllabus 4.1–4.2",
    examPapers: ["Paper 1", "Paper 2"],
    learningIntentionsEn: [
      "Explain gas pressure in terms of molecules colliding with the walls of the container",
      "Explain that an ideal gas has zero particle volume and no intermolecular forces, and state when real gases deviate (high pressure, low temperature)",
      "Use pV = nRT in SI units, including finding the relative molecular mass of a gas or volatile liquid",
      "Explain vapour pressure and boiling in terms of a dynamic equilibrium between a liquid and its vapour",
      "Describe giant ionic lattices (NaCl, MgO) and giant metallic lattices (copper, alloys)",
      "Describe simple molecular lattices (iodine, buckminsterfullerene C₆₀, ice)",
      "Describe giant molecular lattices (silicon(IV) oxide, graphite, diamond) and graphene and nanotubes",
      "Explain and predict melting point, conductivity, hardness and solubility from structure, and deduce the structure from data"
    ],
    learningIntentionsMn: [
      "Хийн даралтыг молекулууд савны хананд мөргөлдөхтэй холбон тайлбарлах",
      "Идеаль хийн бөөмс тэг эзлэхүүнтэй, молекул хоорондын хүчгүй гэдгийг тайлбарлаж, бодит хий хэзээ гаждагийг хэлэх (өндөр даралт, бага температур)",
      "pV = nRT-г SI нэгжээр хэрэглэх, хий эсвэл дэгдэмхий шингэний харьцангуй молекул массыг олох",
      "Уурын даралт ба буцлалтыг шингэн ба уурын хоорондох динамик тэнцвэрээр тайлбарлах",
      "Ионы аварга тор (NaCl, MgO) ба металлын аварга тор (зэс, хайлш)-ыг тодорхойлох",
      "Энгийн молекулын торыг (иод, бакминстерфуллерен C₆₀, мөс) тодорхойлох",
      "Аварга молекулын торыг (цахиур(IV) исэл, графит, алмаз), графен ба нанохоолойг тодорхойлох",
      "Бүтцээс хайлах цэг, цахилгаан дамжуулалт, хатуулаг, уусах чанарыг тайлбарлах ба урьдчилан хэлэх, өгөгдлөөс бүтцийг тодорхойлох"
    ],
    subtopics: [
      {
        id: "5.1",
        number: "5.1",
        titleEn: "Kinetic Theory, Ideal & Real Gases",
        titleMn: "Кинетик онол, идеаль ба бодит хий",
        summaryEn: "Kinetic theory: gas molecules move rapidly and randomly, their volume is negligible, there are no intermolecular forces, collisions are elastic, and temperature ∝ average kinetic energy. Gas pressure is caused by molecules colliding with the walls of the container. At constant T, V ∝ 1/p (more frequent collisions); at constant p, V ∝ T in kelvin (harder collisions). Real gases deviate from ideal behaviour at high pressure (molecules close together, so their own volume matters) and low temperature (molecules slow, so intermolecular forces pull them together and p is lower than expected). Gases are most ideal at low pressure and high temperature; He and Ne are nearly ideal (tiny atoms, very weak id–id forces), NH₃ is not (hydrogen bonding).",
        summaryMn: "Кинетик онол: хийн молекулууд хурдан, эмх замбараагүй хөдөлнө, эзлэхүүн нь үл тооцогдохуйц, молекул хоорондын хүчгүй, мөргөлдөөн уян, температур ∝ дундаж кинетик энерги. Хийн даралт нь молекулууд савны хананд мөргөлдөхөөс үүснэ. Тогтмол T-д V ∝ 1/p (мөргөлдөөн олширно); тогтмол p-д V ∝ T (кельвинээр) (мөргөлдөөн хүчтэй болно). Бодит хий өндөр даралтад (молекулууд ойр тул өөрсдийн эзлэхүүн чухал болно) ба бага температурт (молекулууд удаан тул молекул хоорондын хүч тэднийг татаж, даралт хүлээгдэж буйгаас бага) идеаль байдлаас гажна. Бага даралт, өндөр температурт хий хамгийн идеаль; He, Ne бараг идеаль (жижиг атом, маш сул id–id хүч), NH₃ идеаль биш (устөрөгчийн холбоо).",
        keyConcepts: ["Ideal gas: zero particle volume + no intermolecular forces", "Pressure = collisions with the walls", "Least ideal: high p, low T", "Most ideal: low p, high T"],
        keyEquations: ["T (K) = θ (°C) + 273", "Constant T: V ∝ 1/p · constant p: V ∝ T"],
        commonPitfalls: [
          "An ideal gas is not 'a gas whose molecules are very small' — state BOTH zero particle volume AND no intermolecular forces.",
          "Real gases are least ideal at LOW temperature and HIGH pressure — give a reason for each.",
          "Temperature changes must be in kelvin: 20 °C → 40 °C is 293 K → 313 K (× 1.07), not a doubling."
        ]
      },
      {
        id: "5.2",
        number: "5.2",
        titleEn: "The Ideal Gas Equation pV = nRT",
        titleMn: "Идеаль хийн тэгшитгэл pV = nRT",
        summaryEn: "pV = nRT with p in Pa, V in m³, n in mol, T in K and R = 8.31 J K⁻¹ mol⁻¹. Conversions: kPa × 10³ → Pa; dm³ × 10⁻³ → m³; cm³ × 10⁻⁶ → m³; °C + 273 → K. Rearrangements: V = nRT/p, n = pV/RT, T = pV/nR, and with n = m/Mr, Mr = mRT/pV. Example: 0.500 mol CO₂ at 150 kPa and 19 °C occupies 0.500 × 8.31 × 292 ÷ 150 000 = 8.09 × 10⁻³ m³ (8.09 dm³). Syringe oven: 0.118 g of liquid gives 62.0 cm³ of vapour at 373 K and 1.01 × 10⁵ Pa → Mr = 58.4 ≈ 58 (propanone).",
        summaryMn: "pV = nRT: p — Pa, V — m³, n — моль, T — K, R = 8.31 J K⁻¹ mol⁻¹. Хувиргалт: kPa × 10³ → Pa; dm³ × 10⁻³ → m³; cm³ × 10⁻⁶ → m³; °C + 273 → K. Хувиргасан хэлбэр: V = nRT/p, n = pV/RT, T = pV/nR, n = m/Mr гэвэл Mr = mRT/pV. Жишээ: 150 kPa, 19 °C-д 0.500 моль CO₂ нь 0.500 × 8.31 × 292 ÷ 150 000 = 8.09 × 10⁻³ m³ (8.09 dm³) эзэлнэ. Тариурын зуух: 0.118 г шингэн 373 K, 1.01 × 10⁵ Pa-д 62.0 cm³ уур болно → Mr = 58.4 ≈ 58 (пропанон).",
        keyConcepts: ["SI units: Pa, m³, K", "R = 8.31 J K⁻¹ mol⁻¹", "Mr = mRT ÷ pV (m in g)", "Suggest the substance from Mr"],
        keyEquations: ["pV = nRT", "Mr = mRT ÷ pV", "1 cm³ = 1 × 10⁻⁶ m³ · 1 dm³ = 1 × 10⁻³ m³"],
        commonPitfalls: [
          "Never substitute kPa or cm³ directly — convert to Pa and m³ first.",
          "Keep the mass in grams in Mr = mRT/pV so that Mr comes out in g mol⁻¹."
        ]
      },
      {
        id: "5.3",
        number: "5.3",
        titleEn: "The Liquid State & Vapour Pressure",
        titleMn: "Шингэн төлөв ба уурын даралт",
        summaryEn: "In a closed container a liquid evaporates; at first evaporation is faster than condensation, then the two rates become equal and the concentration of vapour stays constant (dynamic equilibrium). Vapour pressure is the pressure exerted by a vapour in equilibrium with its liquid. Vapour pressure rises with temperature because more molecules have enough kinetic energy to escape the intermolecular forces. A liquid boils when its vapour pressure equals the atmospheric pressure.",
        summaryMn: "Битүү саванд шингэн ууршина; эхэндээ уурших нь конденсацаас хурдан, дараа нь хоёр хурд тэнцэж, уурын концентраци тогтмол болно (динамик тэнцвэр). Уурын даралт нь шингэнтэйгээ тэнцвэрт байгаа уурын даралт. Температур өсөхөд илүү олон молекул молекул хоорондын хүчнээс салах хангалттай кинетик энергитэй болох тул уурын даралт өснө. Уурын даралт нь агаар мандлын даралттай тэнцэх үед шингэн буцална.",
        keyConcepts: ["Dynamic equilibrium: rate of evaporation = rate of condensation", "Vapour pressure ↑ with temperature", "Boiling point: vapour pressure = atmospheric pressure"],
        commonPitfalls: [
          "At equilibrium evaporation and condensation have NOT stopped — they happen at equal rates."
        ]
      },
      {
        id: "5.4",
        number: "5.4",
        titleEn: "Giant Ionic & Giant Metallic Lattices",
        titleMn: "Ионы ба металлын аварга тор",
        summaryEn: "A crystal lattice is a regularly repeating arrangement of ions, atoms or molecules. In NaCl the Na⁺ and Cl⁻ ions alternate and each ion is surrounded by 6 oppositely charged ions. Ionic solids are hard, have high melting points, are often soluble in water and conduct only when molten or aqueous. They are brittle: a blow shifts a layer so that ions of the same charge meet and repel, splitting the crystal. MgO (2852 °C) melts far higher than NaCl (801 °C) because Mg²⁺ and O²⁻ have double charges. Metals are malleable and ductile because layers of ions can slide while the metallic bonding acts in all directions and re-forms. Alloys are mixtures of a metal with other elements; different-sized atoms make the lattice irregular so layers slide less easily — brass (Cu/Zn) is stronger than copper.",
        summaryMn: "Талст тор нь ион, атом эсвэл молекулын тогтмол давтагдах байршил. NaCl-д Na⁺ ба Cl⁻ ионууд ээлжилж, ион бүрийг эсрэг цэнэгтэй 6 ион хүрээлнэ. Ионы хатуу бодис хатуу, хайлах цэг өндөр, усанд ихэвчлэн уусдаг, зөвхөн хайлмал эсвэл уусмал үедээ цахилгаан дамжуулна. Хэврэг: цохилт давхаргыг шилжүүлж, ижил цэнэгтэй ионууд таарч түлхэлцэн талст хуваагдана. MgO (2852 °C) нь NaCl (801 °C)-оос хамаагүй өндөр температурт хайлна, учир нь Mg²⁺, O²⁻ давхар цэнэгтэй. Металл давхаргууд гулсах боловч металлын холбоо бүх чиглэлд үйлчилж дахин үүсдэг тул металл давтагдах, сунах чадвартай. Хайлш нь металл ба бусад элементийн холимог; өөр хэмжээтэй атомууд торыг жигд бус болгож давхаргын гулсалтыг багасгана — гууль (Cu/Zn) зэснээс бат бөх.",
        keyConcepts: ["NaCl: each ion has 6 nearest neighbours", "Ionic: brittle, conducts molten/aqueous only", "Metals: layers slide, bonds re-form", "Alloys: irregular lattice → stronger"],
        commonPitfalls: [
          "Ionic solids are brittle NOT because 'the bonds are weak' — a shifted layer brings like charges together and they repel.",
          "Alloys are mixtures, not compounds.",
          "Metals are malleable because bonding is non-directional and re-forms after layers slide, not because the bonds are weak."
        ]
      },
      {
        id: "5.5",
        number: "5.5",
        titleEn: "Simple Molecular & Giant Molecular Lattices",
        titleMn: "Энгийн молекулын ба аварга молекулын тор",
        summaryEn: "Simple molecular lattices (I₂, ice, CO₂, C₆₀) have strong covalent bonds within each molecule but only weak intermolecular forces between molecules, so they have low melting points (iodine 114 °C, sublimes) and do not conduct. Giant molecular (covalent) lattices have a 3D network of strong covalent bonds and very high melting points. Diamond: each C bonded to 4 others — very hard, no delocalised electrons, does not conduct. SiO₂: each Si bonded to 4 O and each O to 2 Si — hard, high melting point, non-conductor; CO₂ is a gas because it is simple molecular. Graphite: each C forms 3 covalent bonds in hexagonal layers, the 4th electron is delocalised and moves along the layers (conducts); layers are held by weak forces so they slide (pencils), but the melting point is high because covalent bonds within layers must break.",
        summaryMn: "Энгийн молекулын тор (I₂, мөс, CO₂, C₆₀)-д молекул дотор хүчтэй ковалент холбоо, молекулуудын хооронд зөвхөн сул хүч байдаг тул хайлах цэг бага (иод 114 °C, сублимацид орно), цахилгаан дамжуулахгүй. Аварга молекулын (ковалент) тор нь хүчтэй ковалент холбооны 3D сүлжээтэй, хайлах цэг маш өндөр. Алмаз: C бүр өөр 4 C-тэй холбогдоно — маш хатуу, чөлөөт электронгүй, дамжуулахгүй. SiO₂: Si бүр 4 O-той, O бүр 2 Si-тэй — хатуу, хайлах цэг өндөр, дамжуулахгүй; CO₂ энгийн молекул тул хий. Графит: C бүр зургаан өнцөгт давхаргад 3 ковалент холбоо үүсгэж, 4 дэх электрон нь чөлөөтэй болж давхаргын дагуу хөдөлнө (дамжуулна); давхаргууд сул хүчээр холбогдсон тул гулсана (харандаа), гэхдээ давхарга доторх ковалент холбоог таслах шаардлагатай тул хайлах цэг өндөр.",
        keyConcepts: ["Simple molecular: weak IMF → low m.p.", "Giant covalent: many strong covalent bonds → very high m.p.", "Graphite conducts: delocalised electrons along layers", "Diamond and SiO₂: no delocalised electrons"],
        commonPitfalls: [
          "Iodine melts at 114 °C because weak id–id forces BETWEEN molecules are overcome — the I–I covalent bonds do not break.",
          "Graphite's high melting point is due to strong covalent bonds within the layers, not the weak forces between layers.",
          "There are no 'SiO₂ molecules' — SiO₂ is a giant network; the formula is the ratio of atoms."
        ]
      },
      {
        id: "5.6",
        number: "5.6",
        titleEn: "Fullerenes, Nanotubes & Graphene",
        titleMn: "Фуллерен, нанохоолой ба графен",
        summaryEn: "Allotropes are different crystalline forms of the same element. Buckminsterfullerene C₆₀ (20 hexagons + 12 pentagons) is simple molecular: weak forces between C₆₀ molecules, so it is soft, a poor conductor and sublimes at about 600 °C (graphite only at about 3700 °C). It is slightly soluble in CS₂ and more reactive than graphite. A nanotube is a rolled graphite layer: it conducts along the tube, is very strong along its axis and melts at about 3500 °C. Graphene is a single layer of graphite: an excellent conductor (delocalised electrons move across the sheet) and very strong for its mass. For any unfamiliar structure ask: what are the particles, what bonds hold them, are there delocalised electrons, is it a network or separate molecules?",
        summaryMn: "Аллотроп нь нэг элементийн өөр өөр талст хэлбэрүүд. Бакминстерфуллерен C₆₀ (20 зургаан өнцөгт + 12 таван өнцөгт) энгийн молекулын бүтэцтэй: C₆₀ молекулуудын хооронд сул хүч байдаг тул зөөлөн, муу дамжуулагч, ойролцоогоор 600 °C-д сублимацид орно (графит ~3700 °C-д). CS₂-д бага зэрэг уусах ба графитаас идэвхтэй. Нанохоолой нь ороосон графитын давхарга: хоолойн дагуу дамжуулна, тэнхлэгийнхээ дагуу маш бат бөх, ~3500 °C-д хайлна. Графен нь графитын нэг давхарга: маш сайн дамжуулагч (чөлөөт электронууд хуудасны дагуу хөдөлнө), массынхаа хувьд маш бат бөх. Танихгүй бүтэцтэй тулгарвал: бөөм нь юу вэ, ямар холбоо байна, чөлөөт электрон бий юу, сүлжээ үү эсвэл тусдаа молекул уу гэж асуу.",
        keyConcepts: ["C₆₀: simple molecular, sublimes ≈ 600 °C", "Nanotube: rolled graphite layer", "Graphene: single layer, excellent conductor", "Four questions: particles · bonds · delocalised electrons · network or molecules"],
        commonPitfalls: [
          "C₆₀ is NOT a giant covalent structure — it is made of separate C₆₀ molecules."
        ]
      },
      {
        id: "5.7",
        number: "5.7",
        titleEn: "Structure → Properties: Deducing the Structure",
        titleMn: "Бүтэц → шинж чанар: бүтцийг тодорхойлох",
        summaryEn: "Giant ionic (NaCl, MgO): ions, ionic bonds — hard, brittle, high m.p., conducts molten/aqueous, often soluble. Giant molecular (diamond, graphite, SiO₂): atoms, covalent bonds — very hard (graphite soft), very high m.p., non-conductor (graphite conducts), insoluble. Giant metallic (Cu, Fe): positive ions in delocalised electrons — hard, malleable, usually high m.p., conducts as solid and liquid, insoluble. Simple molecular (I₂, H₂O, CO₂, C₆₀): molecules, weak IMFs — soft, low m.p., non-conductor; non-polar ones insoluble in water. From data: high m.p. + conducts only when molten → ionic; high m.p. + conducts as solid → metallic; very high m.p. + never conducts → giant covalent; low m.p. + never conducts → simple molecular.",
        summaryMn: "Ионы аварга (NaCl, MgO): ион, ионы холбоо — хатуу, хэврэг, хайлах цэг өндөр, хайлмал/уусмалдаа дамжуулна, ихэвчлэн уусна. Аварга молекулын (алмаз, графит, SiO₂): атом, ковалент холбоо — маш хатуу (графит зөөлөн), хайлах цэг маш өндөр, дамжуулахгүй (графит дамжуулна), уусахгүй. Металлын аварга (Cu, Fe): чөлөөт электрон дахь эерэг ионууд — хатуу, давтагдах чадвартай, хайлах цэг ихэвчлэн өндөр, хатуу ба шингэн үедээ дамжуулна, уусахгүй. Энгийн молекулын (I₂, H₂O, CO₂, C₆₀): молекул, сул хүч — зөөлөн, хайлах цэг бага, дамжуулахгүй; туйлгүй нь усанд уусахгүй. Өгөгдлөөс: хайлах цэг өндөр + зөвхөн хайлмалдаа дамжуулна → ионы; өндөр + хатуудаа дамжуулна → металл; маш өндөр + огт дамжуулахгүй → аварга ковалент; бага + дамжуулахгүй → энгийн молекул.",
        keyConcepts: ["Conducts only molten/aqueous → giant ionic", "Conducts solid and liquid → giant metallic", "Very high m.p., no conduction → giant covalent", "Low m.p., no conduction → simple molecular"],
        commonPitfalls: [
          "In every explanation give: particles + force between them + consequence (e.g. 'many strong covalent bonds → much energy needed to break').",
          "Diamond conducts heat well but does NOT conduct electricity — it has no delocalised electrons."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Kinetic Theory", termMn: "Кинетик онол", definitionEn: "The theory that gas particles are in rapid, random motion, with temperature proportional to their average kinetic energy.", definitionMn: "Хийн бөөмс хурдан, эмх замбараагүй хөдөлж, температур нь дундаж кинетик энергитэй пропорциональ гэсэн онол." },
      { termEn: "Ideal Gas", termMn: "Идеаль хий", definitionEn: "A gas whose particles have zero volume and no intermolecular forces of attraction; it obeys pV = nRT exactly.", definitionMn: "Бөөмс нь тэг эзлэхүүнтэй, молекул хоорондын таталцлын хүчгүй хий; pV = nRT-г яг дагана." },
      { termEn: "Real Gas", termMn: "Бодит хий", definitionEn: "A gas that deviates from ideal behaviour, most at high pressure and low temperature.", definitionMn: "Идеаль байдлаас гаждаг хий; өндөр даралт, бага температурт хамгийн их гажна." },
      { termEn: "Gas Pressure", termMn: "Хийн даралт", definitionEn: "The force per unit area caused by gas molecules colliding with the walls of the container.", definitionMn: "Хийн молекулууд савны хананд мөргөлдөхөөс үүсэх нэгж талбайд ногдох хүч." },
      { termEn: "Vapour Pressure", termMn: "Уурын даралт", definitionEn: "The pressure exerted by a vapour in equilibrium with its liquid.", definitionMn: "Шингэнтэйгээ тэнцвэрт байгаа уурын үзүүлэх даралт." },
      { termEn: "Boiling Point", termMn: "Буцлах цэг", definitionEn: "The temperature at which the vapour pressure of a liquid equals the atmospheric pressure.", definitionMn: "Шингэний уурын даралт агаар мандлын даралттай тэнцэх температур." },
      { termEn: "Crystal Lattice", termMn: "Талст тор", definitionEn: "A regularly repeating three-dimensional arrangement of ions, atoms or molecules.", definitionMn: "Ион, атом эсвэл молекулын тогтмол давтагдах гурван хэмжээст байршил." },
      { termEn: "Giant Molecular (Covalent) Structure", termMn: "Аварга молекулын (ковалент) бүтэц", definitionEn: "A three-dimensional network of atoms joined by strong covalent bonds, e.g. diamond and SiO₂.", definitionMn: "Хүчтэй ковалент холбоогоор холбогдсон атомуудын гурван хэмжээст сүлжээ, жишээ нь алмаз, SiO₂." },
      { termEn: "Malleable / Ductile", termMn: "Давтагдах / Сунах чадвар", definitionEn: "Able to be hammered into shape / drawn into wires.", definitionMn: "Цохиж хэлбэржүүлэх / утас болгон сунгах боломжтой." },
      { termEn: "Brittle", termMn: "Хэврэг", definitionEn: "Shatters when hit, as ionic crystals do.", definitionMn: "Цохиход хагардаг, ионы талст шиг." },
      { termEn: "Alloy", termMn: "Хайлш", definitionEn: "A mixture of a metal with one or more other elements, e.g. brass (Cu and Zn).", definitionMn: "Металл ба нэг буюу хэд хэдэн өөр элементийн холимог, жишээ нь гууль (Cu ба Zn)." },
      { termEn: "Allotropes", termMn: "Аллотропууд", definitionEn: "Different crystalline or structural forms of the same element, e.g. diamond, graphite and C₆₀.", definitionMn: "Нэг элементийн өөр өөр талст буюу бүтцийн хэлбэрүүд, жишээ нь алмаз, графит, C₆₀." },
      { termEn: "Fullerene", termMn: "Фуллерен", definitionEn: "An allotrope of carbon made of hollow spheres or tubes of carbon atoms, e.g. C₆₀.", definitionMn: "Нүүрстөрөгчийн атомуудын хөндий бөмбөрцөг эсвэл хоолойноос тогтох нүүрстөрөгчийн аллотроп, жишээ нь C₆₀." },
      { termEn: "Graphene", termMn: "Графен", definitionEn: "A single layer of graphite, one atom thick.", definitionMn: "Нэг атомын зузаантай графитын ганц давхарга." }
    ],
    formulas: [
      { nameEn: "Ideal Gas Equation", nameMn: "Идеаль хийн тэгшитгэл", formula: "pV = nRT", note: "p in Pa, V in m³, T in K, R = 8.31 J K⁻¹ mol⁻¹" },
      { nameEn: "Mr from Gas Data", nameMn: "Хийн өгөгдлөөс Mr", formula: "Mr = mRT ÷ pV", note: "m in g; used with the syringe oven for volatile liquids" },
      { nameEn: "Kelvin Temperature", nameMn: "Кельвин температур", formula: "T (K) = θ (°C) + 273", note: "Always use kelvin in gas calculations" },
      { nameEn: "Volume Conversions", nameMn: "Эзлэхүүний хувиргалт", formula: "1 dm³ = 10⁻³ m³ · 1 cm³ = 10⁻⁶ m³", note: "kPa × 10³ = Pa" }
    ],
    examStyleTips: [
      "In pV = nRT use Pa, m³ and K: 100 kPa = 1.00 × 10⁵ Pa; 50 cm³ = 5.0 × 10⁻⁵ m³; 25 °C = 298 K.",
      "Ideal gas: zero particle volume AND no intermolecular forces — both points are needed for 2 marks.",
      "Real gases deviate most at high pressure and low temperature — always give the reason.",
      "When calculating Mr from gas data, keep mass in grams and suggest a likely substance from the answer.",
      "Explain properties with particles + force + consequence; e.g. graphite conducts because the 4th electron of each C is delocalised and moves along the layers.",
      "Ionic brittleness: layers shift → like charges meet → repulsion; not 'the bonds are weak'."
    ],
    examQuestions: [
      {
        id: "ch5-q1",
        marks: 4,
        questionEn: "(a) What is meant by an ideal gas? [2]\n(b) State one condition under which a real gas is least ideal and explain why. [2]",
        questionMn: "(a) Идеаль хий гэж юу вэ? [2]\n(b) Бодит хий хамгийн бага идеаль байх нэг нөхцөлийг хэлж, шалтгааныг тайлбарлана уу. [2]",
        solutionEn: "(a) Particles have zero (negligible) volume [1] · no intermolecular forces [1]\n(b) High pressure [1] · molecules are close together so their own volume is no longer negligible [1]\n(or low temperature · molecules move slowly so intermolecular forces become significant)",
        solutionMn: "(a) Бөөмс тэг эзлэхүүнтэй; молекул хоорондын хүчгүй. (b) Өндөр даралт — молекулууд ойр байх тул өөрсдийн эзлэхүүн чухал болно (эсвэл бага температур — молекулууд удаан хөдөлж, молекул хоорондын хүч нөлөөлнө).",
        examinerTip: "'Molecules are very small' scores nothing — say zero volume."
      },
      {
        id: "ch5-q2",
        marks: 3,
        questionEn: "Calculate the volume occupied by 0.500 mol of carbon dioxide at 150 kPa and 19 °C. (R = 8.31 J K⁻¹ mol⁻¹)",
        questionMn: "150 kPa ба 19 °C-д 0.500 моль нүүрстөрөгчийн давхар ислийн эзлэх эзлэхүүнийг тооцоолно уу. (R = 8.31 J K⁻¹ mol⁻¹)",
        solutionEn: "p = 150 000 Pa · T = 19 + 273 = 292 K [1]\nV = nRT ÷ p = 0.500 × 8.31 × 292 ÷ 150 000 [1]\nV = 8.09 × 10⁻³ m³ = 8.09 dm³ [1]",
        solutionMn: "Нэгжийг хувиргана: p = 150 000 Pa, T = 292 K. V = nRT/p = 0.500 × 8.31 × 292 ÷ 150 000 = 8.09 × 10⁻³ m³ = 8.09 dm³.",
        examinerTip: "Write the unit conversions on a separate line before substituting."
      },
      {
        id: "ch5-q3",
        marks: 3,
        questionEn: "A 5.00 dm³ flask contains 4.00 g of oxygen at 127 °C.\nCalculate the pressure in the flask. (R = 8.31 J K⁻¹ mol⁻¹, Mr(O₂) = 32.0)",
        questionMn: "5.00 dm³ колбонд 127 °C-д 4.00 г хүчилтөрөгч байна.\nКолбон дахь даралтыг тооцоолно уу. (R = 8.31 J K⁻¹ mol⁻¹, Mr(O₂) = 32.0)",
        solutionEn: "T = 400 K · V = 5.00 × 10⁻³ m³ · n = 4.00 ÷ 32.0 = 0.125 mol [1]\np = nRT ÷ V = 0.125 × 8.31 × 400 ÷ 5.00 × 10⁻³ [1]\np = 8.31 × 10⁴ Pa (83.1 kPa) [1]",
        solutionMn: "T = 400 K, V = 5.00 × 10⁻³ m³, n = 0.125 моль. p = nRT/V = 8.31 × 10⁴ Pa (83.1 kPa)."
      },
      {
        id: "ch5-q4",
        marks: 4,
        questionEn: "0.290 g of a hydrocarbon gas X occupies 124 cm³ at 25 °C and 100 kPa.\n(a) Calculate the Mr of X. [3]\n(b) Suggest the molecular formula of X. [1]",
        questionMn: "X нүүрсустөрөгчийн хийн 0.290 г нь 25 °C, 100 kPa-д 124 cm³ эзэлнэ.\n(a) X-ийн Mr-ийг тооцоолно уу. [3]\n(b) X-ийн молекулын томьёог санал болгоно уу. [1]",
        solutionEn: "(a) V = 1.24 × 10⁻⁴ m³ · T = 298 K · p = 1.00 × 10⁵ Pa [1]\nMr = mRT ÷ pV [1]\nMr = 0.290 × 8.31 × 298 ÷ (1.00 × 10⁵ × 1.24 × 10⁻⁴) = 57.9 ≈ 58 [1]\n(b) C₄H₁₀ (Mr = 58) [1]",
        solutionMn: "(a) SI нэгж: V = 1.24 × 10⁻⁴ m³, T = 298 K, p = 1.00 × 10⁵ Pa. Mr = mRT/pV = 57.9 ≈ 58. (b) C₄H₁₀ (бутан, Mr = 58).",
        examinerTip: "cm³ × 10⁻⁶ = m³ — the single most common error in pV = nRT questions."
      },
      {
        id: "ch5-q5",
        marks: 3,
        questionEn: "In a syringe-oven experiment at 100 °C and 101 kPa, the mass of a syringe containing a volatile liquid fell from 10.426 g to 10.308 g, and the gas syringe reading rose from 25.0 cm³ to 87.0 cm³.\nCalculate the Mr of the liquid and suggest its identity.",
        questionMn: "100 °C, 101 kPa-д тариурын зуухны туршилтаар дэгдэмхий шингэнтэй тариурын масс 10.426 г-аас 10.308 г болж буурч, хийн тариурын заалт 25.0 cm³-ээс 87.0 cm³ болж өсөв.\nШингэний Mr-ийг тооцоолж, ямар бодис болохыг санал болгоно уу.",
        solutionEn: "m = 10.426 − 10.308 = 0.118 g · V = 87.0 − 25.0 = 62.0 cm³ = 6.20 × 10⁻⁵ m³ [1]\nMr = 0.118 × 8.31 × 373 ÷ (1.01 × 10⁵ × 6.20 × 10⁻⁵) = 58.4 [1]\nMr ≈ 58 → propanone, CH₃COCH₃ [1]",
        solutionMn: "Шингэний масс 0.118 г, уурын эзлэхүүн 62.0 cm³ = 6.20 × 10⁻⁵ m³, T = 373 K, p = 1.01 × 10⁵ Pa. Mr = mRT/pV = 58.4 ≈ 58 → пропанон CH₃COCH₃."
      },
      {
        id: "ch5-q6",
        marks: 3,
        questionEn: "Bromine is placed in a closed jar. The colour of the vapour above the liquid gets darker and then stops changing.\n(a) Explain these observations. [2]\n(b) Why does the vapour pressure of bromine rise when the temperature increases? [1]",
        questionMn: "Бромыг битүү саванд хийв. Шингэний дээрх уурын өнгө бараан болж, дараа нь өөрчлөгдөхөө болино.\n(a) Эдгээр ажиглалтыг тайлбарлана уу. [2]\n(b) Температур өсөхөд бромын уурын даралт яагаад өсдөг вэ? [1]",
        solutionEn: "(a) At first evaporation is faster than condensation, so the vapour concentration rises [1]\nThen the rates become equal · dynamic equilibrium, so the vapour concentration stays constant [1]\n(b) More molecules have enough kinetic energy to overcome the intermolecular forces and escape [1]",
        solutionMn: "(a) Эхэндээ уурших нь конденсацаас хурдан тул уурын концентраци өснө; дараа нь хурдууд тэнцэж динамик тэнцвэр тогтож, концентраци тогтмол болно. (b) Илүү олон молекул молекул хоорондын хүчийг даван гарах хангалттай кинетик энергитэй болно."
      },
      {
        id: "ch5-q7",
        marks: 6,
        questionEn: "(a) Describe the lattice of sodium chloride. [3]\n(b) Explain why sodium chloride is brittle. [3]",
        questionMn: "(a) Натрийн хлоридын торыг тодорхойлно уу. [3]\n(b) Натрийн хлорид яагаад хэврэг байдгийг тайлбарлана уу. [3]",
        solutionEn: "(a) Regular repeating three‑dimensional lattice [1] · alternating Na⁺ and Cl⁻ ions [1] · each ion surrounded by 6 oppositely charged ions [1]\n(b) A force shifts one layer of ions relative to another [1]\nIons of the same charge come next to each other [1]\nThe repulsion splits the crystal [1]",
        solutionMn: "(a) Тогтмол давтагдах 3D тор; Na⁺ ба Cl⁻ ионууд ээлжилнэ; ион бүрийг эсрэг цэнэгтэй 6 ион хүрээлнэ. (b) Хүч нэг давхаргыг шилжүүлж, ижил цэнэгтэй ионууд хажуу хажууд ирж түлхэлцэн талст хуваагдана."
      },
      {
        id: "ch5-q8",
        marks: 4,
        questionEn: "(a) Brass (an alloy of copper and zinc) is stronger than pure copper. Explain. [2]\n(b) Tensile strength / 10⁸ Pa: 100% Cu 2.3 · 20% Zn 3.0 · 40% Zn 3.6. Describe and explain the trend. [2]",
        questionMn: "(a) Гууль (зэс ба цайрын хайлш) цэвэр зэснээс бат бөх. Тайлбарлана уу. [2]\n(b) Суналтын бат бөх / 10⁸ Pa: 100% Cu 2.3 · 20% Zn 3.0 · 40% Zn 3.6. Хандлагыг тодорхойлж тайлбарлана уу. [2]",
        solutionEn: "(a) Zn atoms are a different size from Cu atoms [1] · the lattice is irregular so layers cannot slide as easily [1]\n(b) Strength increases as the percentage of Zn increases [1] · more Zn atoms distort the lattice more [1]",
        solutionMn: "(a) Zn атом Cu атомаас өөр хэмжээтэй; тор жигд бус болж давхаргууд амархан гулсахгүй. (b) Zn-ийн хувь өсөх тусам бат бөх өснө — олон Zn атом торыг илүү гажуудуулна."
      },
      {
        id: "ch5-q9",
        marks: 9,
        questionEn: "Carbon forms several allotropes.\n(a) Define allotropes. [1]\n(b) Explain why diamond and graphite have high melting points. [2]\n(c) Explain why graphite conducts electricity. [3]\n(d) Explain why graphite is used in pencils. [2]\n(e) Why does C₆₀ sublime at about 600 °C? [1]",
        questionMn: "Нүүрстөрөгч хэд хэдэн аллотроп үүсгэдэг.\n(a) Аллотропыг тодорхойлно уу. [1]\n(b) Алмаз ба графит яагаад хайлах цэг өндөртэй вэ? [2]\n(c) Графит яагаад цахилгаан дамжуулдаг вэ? [3]\n(d) Графитыг яагаад харандаанд ашигладаг вэ? [2]\n(e) C₆₀ яагаад ойролцоогоор 600 °C-д сублимацид ордог вэ? [1]",
        solutionEn: "(a) Different crystalline or structural forms of the same element [1]\n(b) Giant structures with many strong covalent bonds [1] · a lot of energy is needed to break them [1]\n(c) Each C forms 3 covalent bonds [1] · the 4th electron is delocalised [1] · delocalised electrons move along the layers [1]\n(d) Weak forces between the layers [1] · layers slide off onto the paper [1]\n(e) C₆₀ is simple molecular · only weak intermolecular forces need to be overcome [1]",
        solutionMn: "(a) Нэг элементийн өөр өөр талст хэлбэр. (b) Олон хүчтэй ковалент холбоотой аварга бүтэц — таслахад их энерги хэрэгтэй. (c) C бүр 3 холбоо үүсгэж, 4 дэх электрон чөлөөтэй болж давхаргын дагуу хөдөлнө. (d) Давхарга хоорондын хүч сул — давхаргууд гулсаж цаасан дээр үлдэнэ. (e) C₆₀ энгийн молекул — зөвхөн молекул хоорондын сул хүчийг даван гарна.",
        examinerTip: "For the melting point of graphite, credit is for breaking covalent bonds — not for the weak forces between layers."
      },
      {
        id: "ch5-q10",
        marks: 4,
        questionEn: "Deduce the structure of each substance:\n(a) X: m.p. 747 °C, conducts when molten, soluble in water\n(b) Y: m.p. 114 °C, very poor conductor, almost insoluble\n(c) Z: m.p. 1495 °C, conducts as a solid and when molten, insoluble\n(d) W: very high m.p., poor conductor as solid and liquid",
        questionMn: "Бодис бүрийн бүтцийг тодорхойлно уу:\n(a) X: хайлах цэг 747 °C, хайлмалдаа дамжуулна, усанд уусна\n(b) Y: хайлах цэг 114 °C, маш муу дамжуулагч, бараг уусахгүй\n(c) Z: хайлах цэг 1495 °C, хатуу ба хайлмалдаа дамжуулна, уусахгүй\n(d) W: хайлах цэг маш өндөр, хатуу ба шингэн үедээ муу дамжуулагч",
        solutionEn: "(a) Giant ionic [1]\n(b) Simple molecular, such as iodine [1]\n(c) Giant metallic [1]\n(d) Giant covalent (giant molecular) [1]",
        solutionMn: "(a) Ионы аварга тор. (b) Энгийн молекул (жишээ нь иод). (c) Металлын аварга тор. (d) Аварга ковалент (аварга молекулын) тор.",
        examinerTip: "Conduction only when molten points to ions; conduction as a solid points to delocalised electrons."
      },
      {
        id: "ch5-q11",
        marks: 2,
        questionEn: "Explain why carbon dioxide is a gas at room temperature but silicon(IV) oxide is a high-melting solid.",
        questionMn: "Нүүрстөрөгчийн давхар исэл өрөөний температурт хий, харин цахиур(IV) исэл өндөр хайлах цэгтэй хатуу бодис байдгийг тайлбарлана уу.",
        solutionEn: "CO₂ is simple molecular · only weak intermolecular forces between molecules [1]\nSiO₂ is a giant covalent network · many strong Si–O covalent bonds must be broken [1]",
        solutionMn: "CO₂ энгийн молекул — молекулуудын хооронд зөвхөн сул хүч. SiO₂ аварга ковалент сүлжээ — олон хүчтэй Si–O ковалент холбоог таслах шаардлагатай."
      }
    ]
  },
  {
    id: 6,
    number: 6,
    level: "AS",
    category: "Physical",
    titleEn: "Enthalpy Changes (Thermochemistry)",
    titleMn: "Энтальпийн өөрчлөлт (Термохими & Гессийн хууль)",
    descriptionEn: "Exothermic and endothermic reactions, reaction pathway diagrams, standard enthalpy changes, calorimetry (q = mcΔT), Hess's law cycles using ΔHf and ΔHc, and bond energies (Syllabus 5.1–5.2).",
    descriptionMn: "Экзотерм ба эндотерм урвал, урвалын замын диаграмм, стандарт энтальпийн өөрчлөлтүүд, калориметр (q = mcΔT), ΔHf ба ΔHc ашигласан Гессийн хуулийн цикл, холбооны энерги (Syllabus 5.1–5.2).",
    syllabusRef: "Syllabus 5.1–5.2",
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    learningIntentionsEn: [
      "Use ΔH: exothermic reactions have negative ΔH and endothermic reactions positive ΔH",
      "Draw and interpret reaction pathway diagrams showing ΔH and the activation energy EA",
      "Define standard conditions (298 K, 101 kPa) and the standard enthalpy changes of reaction, formation, combustion and neutralisation",
      "Calculate ΔH from experimental results using q = mcΔT and ΔH = −mcΔT ÷ n",
      "Evaluate calorimetry experiments: sources of error and improvements",
      "Use Hess's law to construct energy cycles",
      "Calculate enthalpy changes from ΔHf and from ΔHc data",
      "Explain ΔH in terms of bond breaking (endothermic) and bond making (exothermic)",
      "Calculate ΔH from bond energies and explain the difference between exact and average bond energies"
    ],
    learningIntentionsMn: [
      "ΔH-г хэрэглэх: экзотерм урвалын ΔH сөрөг, эндотерм урвалын ΔH эерэг",
      "ΔH ба идэвхжүүлэлтийн энерги EA-г харуулсан урвалын замын диаграмм зурах, унших",
      "Стандарт нөхцөл (298 K, 101 kPa) ба урвалын, үүсэхийн, шатахын, саармагжихын стандарт энтальпийн өөрчлөлтийг тодорхойлох",
      "Туршилтын үр дүнгээс q = mcΔT ба ΔH = −mcΔT ÷ n ашиглан ΔH тооцоолох",
      "Калориметрийн туршилтыг үнэлэх: алдааны эх үүсвэр ба сайжруулалт",
      "Гессийн хуулиар энергийн цикл байгуулах",
      "ΔHf болон ΔHc өгөгдлөөс энтальпийн өөрчлөлтийг тооцоолох",
      "ΔH-г холбоо тасрах (эндотерм) ба холбоо үүсэх (экзотерм)-ээр тайлбарлах",
      "Холбооны энергиэс ΔH тооцоолж, яг ба дундаж холбооны энергийн ялгааг тайлбарлах"
    ],
    subtopics: [
      {
        id: "6.1",
        number: "6.1",
        titleEn: "Exothermic, Endothermic & Pathway Diagrams",
        titleMn: "Экзотерм, эндотерм ба урвалын замын диаграмм",
        summaryEn: "The enthalpy change ΔH is the energy exchanged with the surroundings at constant pressure (kJ mol⁻¹). Exothermic: energy is transferred to the surroundings, the temperature rises, ΔH is negative (combustion, respiration, neutralisation, CaO + water). Endothermic: energy is absorbed, the temperature falls, ΔH is positive (thermal decomposition, photosynthesis, NH₄Cl dissolving). On a reaction pathway diagram (enthalpy against reaction pathway) exothermic products lie below the reactants (ΔH arrow down) and endothermic products above (arrow up). EA, the minimum energy colliding particles need to react, is measured from the reactants to the peak. If EA = +80 and ΔH = −120 kJ mol⁻¹, the reverse reaction has ΔH = +120 and EA = +200 kJ mol⁻¹.",
        summaryMn: "Энтальпийн өөрчлөлт ΔH нь тогтмол даралтад орчинтой солилцсон энерги (kJ mol⁻¹). Экзотерм: энерги орчинд шилжиж, температур өснө, ΔH сөрөг (шаталт, амьсгал, саармагжилт, CaO + ус). Эндотерм: энерги шингээж, температур буурна, ΔH эерэг (дулааны задрал, фотосинтез, NH₄Cl уусах). Урвалын замын диаграммд (энтальпи — урвалын зам) экзотерм урвалын бүтээгдэхүүн эх бодисоос доор (ΔH сум доош), эндотермд дээр (сум дээш). EA — мөргөлдөж буй бөөмс урвалд орох хамгийн бага энерги, эх бодисоос оргил хүртэл хэмжинэ. EA = +80, ΔH = −120 kJ mol⁻¹ бол урвуу урвалын ΔH = +120, EA = +200 kJ mol⁻¹.",
        keyConcepts: ["Exothermic: ΔH −, temperature rises", "Endothermic: ΔH +, temperature falls", "EA: from reactants to the peak", "Reverse reaction: ΔH changes sign"],
        keyEquations: ["EA(reverse) = EA(forward) − ΔH(forward)"],
        commonPitfalls: [
          "If the temperature rises the reaction is exothermic, so ΔH is NEGATIVE.",
          "EA is measured from the reactants to the top of the hump — not from zero or from the products."
        ]
      },
      {
        id: "6.2",
        number: "6.2",
        titleEn: "Standard Conditions & Standard Enthalpy Changes",
        titleMn: "Стандарт нөхцөл ба стандарт энтальпийн өөрчлөлтүүд",
        summaryEn: "Standard conditions (⦵): 298 K (25 °C) and 101 kPa, with each substance in its normal physical state (carbon as graphite). ΔHr⦵: the amounts in the stoichiometric equation react (2H₂ + O₂ → 2H₂O(l), −572 kJ). ΔHf⦵: one mole of a compound is formed from its elements in their standard states (2Fe(s) + 1½O₂(g) → Fe₂O₃(s)); ΔHf⦵ of an element in its standard state = 0. ΔHc⦵: one mole of a substance is burnt completely in excess oxygen (always negative). ΔHneut⦵: one mole of water is formed when an acid reacts with an alkali: H⁺(aq) + OH⁻(aq) → H₂O(l), −57.1 kJ mol⁻¹ (always negative). C(graphite) + O₂(g) → CO₂(g) is both ΔHf⦵[CO₂] and ΔHc⦵[C].",
        summaryMn: "Стандарт нөхцөл (⦵): 298 K (25 °C), 101 kPa, бодис бүр ердийн физик төлөвтөө (нүүрстөрөгч — графит). ΔHr⦵: стехиометрийн тэгшитгэлд заасан хэмжээгээр урвалд орно (2H₂ + O₂ → 2H₂O(l), −572 kJ). ΔHf⦵: стандарт төлөвт буй элементүүдээс 1 моль нэгдэл үүснэ (2Fe(s) + 1½O₂(g) → Fe₂O₃(s)); стандарт төлөвт буй элементийн ΔHf⦵ = 0. ΔHc⦵: 1 моль бодис илүүдэл хүчилтөрөгчид бүрэн шатна (үргэлж сөрөг). ΔHneut⦵: хүчил шүлттэй урвалд орж 1 моль ус үүснэ: H⁺(aq) + OH⁻(aq) → H₂O(l), −57.1 kJ mol⁻¹ (үргэлж сөрөг). C(graphite) + O₂(g) → CO₂(g) нь ΔHf⦵[CO₂] ба ΔHc⦵[C] хоёулаа мөн.",
        keyConcepts: ["Standard: 298 K, 101 kPa", "ΔHf⦵ of an element = 0", "ΔHc⦵ and ΔHneut⦵ always negative", "Use ½ coefficients to make exactly 1 mol"],
        keyEquations: ["ΔHf⦵[CH₄]: C(graphite) + 2H₂(g) → CH₄(g)", "ΔHc⦵[C₂H₅OH]: C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)", "ΔHneut⦵: H⁺(aq) + OH⁻(aq) → H₂O(l)"],
        commonPitfalls: [
          "ΔHf is formation from ELEMENTS in their standard states — not from atoms (Na(s) + ½Cl₂(g) → NaCl(s)).",
          "ΔHneut is per mole of WATER formed — not per mole of acid.",
          "Standard conditions are 298 K and 101 kPa — not 273 K."
        ]
      },
      {
        id: "6.3",
        number: "6.3",
        titleEn: "Calorimetry: q = mcΔT",
        titleMn: "Калориметр: q = mcΔT",
        summaryEn: "q = mcΔT, where q is the heat (J), m the mass of water or solution (g), c = 4.18 J g⁻¹ °C⁻¹ and ΔT the temperature change. Then ΔH = −q ÷ n (n = moles of the stated reactant or product) and ÷ 1000 for kJ mol⁻¹. Assume 1 cm³ of solution = 1 g and c(solution) = c(water). Example: 50 cm³ of 1.0 mol dm⁻³ HCl + 50 cm³ of 1.0 mol dm⁻³ NaOH, 21.3 → 27.8 °C: q = 100 × 4.18 × 6.5 = 2717 J; n(H₂O) = 0.050 mol; ΔHneut = −54 kJ mol⁻¹ (data book −57.1). If one reagent is in excess (e.g. excess Zn with CuSO₄), use the moles of the limiting reagent.",
        summaryMn: "q = mcΔT: q — дулаан (J), m — ус эсвэл уусмалын масс (г), c = 4.18 J g⁻¹ °C⁻¹, ΔT — температурын өөрчлөлт. Дараа нь ΔH = −q ÷ n (n — заасан эх бодис эсвэл бүтээгдэхүүний моль), kJ mol⁻¹ болгохдоо 1000-д хуваана. 1 cm³ уусмал = 1 г, c(уусмал) = c(ус) гэж үзнэ. Жишээ: 1.0 mol dm⁻³ HCl-ийн 50 cm³ + 1.0 mol dm⁻³ NaOH-ийн 50 cm³, 21.3 → 27.8 °C: q = 100 × 4.18 × 6.5 = 2717 J; n(H₂O) = 0.050 моль; ΔHneut = −54 kJ mol⁻¹ (лавлах ном −57.1). Нэг бодис илүүдэлтэй бол (жишээ нь CuSO₄-тэй илүүдэл Zn) хязгаарлагч бодисын молийг ашиглана.",
        keyConcepts: ["m = mass of water / solution, not of the solid or fuel", "c(water) = 4.18 J g⁻¹ °C⁻¹", "1 cm³ solution ≈ 1 g", "Use moles of the limiting reagent"],
        keyEquations: ["q = mcΔT", "ΔH = −q ÷ n", "ΔH (kJ mol⁻¹) = −mcΔT ÷ (1000 × n)"],
        commonPitfalls: [
          "m in q = mcΔT is the mass of the WATER or SOLUTION — not the mass of fuel or solid added.",
          "Temperature rose → exothermic → ΔH negative.",
          "Divide J by 1000 to get kJ: −2717 J ÷ 0.050 mol = −54.3 kJ mol⁻¹, not −54 340 kJ mol⁻¹."
        ]
      },
      {
        id: "6.4",
        number: "6.4",
        titleEn: "Enthalpy of Combustion Experiments & Errors",
        titleMn: "Шатахын энтальпийн туршилт ба алдаа",
        summaryEn: "To measure ΔHc, burn a fuel in a spirit burner under a metal calorimeter and record the mass of fuel burnt, the mass of water and ΔT; q = m(water) × c × ΔT, n(fuel) = mass burnt ÷ Mr, ΔHc = −q ÷ n. Example: 0.21 g propan-1-ol heats 100 g of water by 10.7 °C → q = 4472.6 J, n = 0.0035 mol → ΔHc ≈ −1300 kJ mol⁻¹ (data book −2021). Experimental values are less exothermic because of heat lost to the air, can and thermometer, incomplete combustion (soot), fuel evaporating from the wick, and non-standard conditions. Improvements: lid, draught shield and insulation, flame just touching the can, cap kept on the burner, a bomb calorimeter or extrapolating ΔT.",
        summaryMn: "ΔHc хэмжихдээ спиртийн шатаагчаар металл калориметрийн доор түлш шатааж, шатсан түлшний масс, усны масс, ΔT-г тэмдэглэнэ; q = m(ус) × c × ΔT, n(түлш) = шатсан масс ÷ Mr, ΔHc = −q ÷ n. Жишээ: 0.21 г пропан-1-ол 100 г усыг 10.7 °C халаана → q = 4472.6 J, n = 0.0035 моль → ΔHc ≈ −1300 kJ mol⁻¹ (лавлах ном −2021). Туршилтын утга бага экзотерм гардаг шалтгаан: агаар, сав, термометр рүү дулаан алдагдах, бүрэн бус шаталт (тортог), зулнаас түлш ууршин алдагдах, стандарт бус нөхцөл. Сайжруулалт: таг, салхины хамгаалалт, дулаалга, дөл савд арай л хүрэх, шатаагчийн тагийг хаах, бөмбөгөн калориметр эсвэл ΔT-г экстраполяц хийх.",
        keyConcepts: ["Measure: mass of fuel burnt, mass of water, ΔT", "Main error: heat losses to surroundings", "Experimental ΔHc less negative than data book", "Name specific errors, never 'human error'"],
        keyEquations: ["n(fuel) = mass burnt ÷ Mr", "ΔHc = −m(water) × c × ΔT ÷ n(fuel)"],
        commonPitfalls: [
          "'Human error' scores nothing — name a specific error such as heat loss or incomplete combustion.",
          "State the EFFECT of an error: heat loss makes ΔT smaller, so the calculated ΔH is less negative than the true value."
        ]
      },
      {
        id: "6.5",
        number: "6.5",
        titleEn: "Hess's Law & Energy Cycles",
        titleMn: "Гессийн хууль ба энергийн цикл",
        summaryEn: "Hess's law: the total enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same. It finds ΔH values that cannot be measured directly (e.g. ΔHf of propane, or the decomposition of MgCO₃ which needs strong heating). Cycle using ΔHf: elements at the bottom with arrows pointing UP, so ΔHr = ΣΔHf(products) − ΣΔHf(reactants); e.g. 2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O: −1810.0 − (−1901.6) = +91.6 kJ mol⁻¹. Cycle using ΔHc: combustion products at the bottom with arrows pointing DOWN, so ΔH = ΣΔHc(reactants) − ΣΔHc(products); e.g. ΔHf[C₂H₆] = −1644.4 − (−1559.7) = −84.7 kJ mol⁻¹. Multiply each value by the number of moles in the equation and reverse the sign when an arrow is reversed.",
        summaryMn: "Гессийн хууль: анхны ба эцсийн нөхцөл ижил бол урвалын нийт энтальпийн өөрчлөлт явсан замаас хамаарахгүй. Шууд хэмжих боломжгүй ΔH-г олоход ашиглана (жишээ нь пропаны ΔHf, эсвэл хүчтэй халаалт шаарддаг MgCO₃-ийн задрал). ΔHf ашигласан цикл: элементүүд доор, сумнууд ДЭЭШ тул ΔHr = ΣΔHf(бүтээгдэхүүн) − ΣΔHf(эх бодис); жишээ нь 2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O: −1810.0 − (−1901.6) = +91.6 kJ mol⁻¹. ΔHc ашигласан цикл: шаталтын бүтээгдэхүүн доор, сумнууд ДООШ тул ΔH = ΣΔHc(эх бодис) − ΣΔHc(бүтээгдэхүүн); жишээ нь ΔHf[C₂H₆] = −1644.4 − (−1559.7) = −84.7 kJ mol⁻¹. Утга бүрийг тэгшитгэл дэх молийн тоогоор үржүүлж, сумыг эргүүлбэл тэмдгийг өөрчилнө.",
        keyConcepts: ["ΔH independent of route", "ΔHf data: products − reactants", "ΔHc data: reactants − products", "Elements in standard state: ΔHf = 0 (but ΔHc ≠ 0)"],
        keyEquations: ["ΔHr = ΣΔHf(products) − ΣΔHf(reactants)", "ΔHr = ΣΔHc(reactants) − ΣΔHc(products)"],
        commonPitfalls: [
          "With ΔHc data it is reactants − products — the opposite of the ΔHf rule.",
          "Multiply by the coefficients: 3 mol of CO₂ in the equation means 3 × ΔHf[CO₂].",
          "Elements have ΔHf = 0 but NOT ΔHc = 0 (carbon and hydrogen burn)."
        ]
      },
      {
        id: "6.6",
        number: "6.6",
        titleEn: "Bond Energies",
        titleMn: "Холбооны энерги",
        summaryEn: "Bond breaking is endothermic (+, energy is needed to overcome attraction); bond making is exothermic (−, energy is released). If less energy is needed to break bonds than is released making them, the reaction is exothermic. Bond energy E is the energy needed to break one mole of a bond in gaseous molecules (always positive): Br₂(g) → 2Br(g), E = +193 kJ mol⁻¹. Exact bond energies apply to diatomic molecules (Br–Br, O=O); average bond energies (C–H, O–H) are means over many compounds. ΔH = Σ(bonds broken) − Σ(bonds formed): N₂ + 3H₂ → 2NH₃: (945 + 3 × 436) − 6 × 391 = −93 kJ mol⁻¹. Answers from bond energies differ from data-book values because average values are used and bond energies refer to gases.",
        summaryMn: "Холбоо тасрах нь эндотерм (+, таталцлыг даван гарахад энерги хэрэгтэй); холбоо үүсэх нь экзотерм (−, энерги ялгарна). Холбоо таслахад зарцуулах энерги үүсэхэд ялгарах энергиэс бага бол урвал экзотерм. Холбооны энерги E нь хийн молекул дахь 1 моль холбоог таслахад шаардагдах энерги (үргэлж эерэг): Br₂(g) → 2Br(g), E = +193 kJ mol⁻¹. Яг утга нь хоёр атомт молекулд (Br–Br, O=O) хамаарна; дундаж холбооны энерги (C–H, O–H) олон нэгдлийн дундаж. ΔH = Σ(тасарсан холбоо) − Σ(үүссэн холбоо): N₂ + 3H₂ → 2NH₃: (945 + 3 × 436) − 6 × 391 = −93 kJ mol⁻¹. Холбооны энергиэс гарсан хариу лавлах номын утгаас ялгаатай, учир нь дундаж утга ашиглах ба холбооны энерги хийн төлөвт хамаардаг.",
        keyConcepts: ["Breaking: endothermic (+) · making: exothermic (−)", "Bond energy always positive", "Exact (diatomic) vs average (many compounds)", "Count every bond in every molecule"],
        keyEquations: ["ΔH = Σ E(bonds broken) − Σ E(bonds formed)", "N₂ + 3H₂ → 2NH₃: 2253 − 2346 = −93 kJ mol⁻¹"],
        commonPitfalls: [
          "Breaking bonds ABSORBS energy — never 'energy is released when bonds break'.",
          "Count bonds carefully: 2NH₃ contains 6 N–H bonds; ethanol has 1 C–C, 5 C–H, 1 C–O and 1 O–H.",
          "Bond-energy answers are approximate: average values, and substances may be liquids not gases."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Enthalpy Change (ΔH)", termMn: "Энтальпийн өөрчлөлт (ΔH)", definitionEn: "The energy exchanged with the surroundings at constant pressure, in kJ mol⁻¹.", definitionMn: "Тогтмол даралтад орчинтой солилцсон энерги, kJ mol⁻¹." },
      { termEn: "Exothermic", termMn: "Экзотерм", definitionEn: "A reaction that transfers energy to the surroundings; the temperature rises and ΔH is negative.", definitionMn: "Орчинд энерги шилжүүлдэг урвал; температур өсч, ΔH сөрөг." },
      { termEn: "Endothermic", termMn: "Эндотерм", definitionEn: "A reaction that absorbs energy from the surroundings; the temperature falls and ΔH is positive.", definitionMn: "Орчноос энерги шингээдэг урвал; температур буурч, ΔH эерэг." },
      { termEn: "Activation Energy (EA)", termMn: "Идэвхжүүлэлтийн энерги (EA)", definitionEn: "The minimum energy colliding particles need in order to react.", definitionMn: "Мөргөлдөж буй бөөмс урвалд орохын тулд шаардагдах хамгийн бага энерги." },
      { termEn: "Standard Conditions", termMn: "Стандарт нөхцөл", definitionEn: "298 K and 101 kPa, with substances in their normal physical states.", definitionMn: "298 K ба 101 kPa, бодисууд ердийн физик төлөвтөө." },
      { termEn: "Standard Enthalpy Change of Reaction (ΔHr⦵)", termMn: "Урвалын стандарт энтальпийн өөрчлөлт (ΔHr⦵)", definitionEn: "The enthalpy change when the amounts shown in the equation react under standard conditions.", definitionMn: "Тэгшитгэлд заасан хэмжээгээр бодисууд стандарт нөхцөлд урвалд ороход гарах энтальпийн өөрчлөлт." },
      { termEn: "Standard Enthalpy Change of Formation (ΔHf⦵)", termMn: "Үүсэхийн стандарт энтальпийн өөрчлөлт (ΔHf⦵)", definitionEn: "The enthalpy change when one mole of a compound is formed from its elements under standard conditions, all in their standard states.", definitionMn: "Стандарт нөхцөлд, стандарт төлөвт буй элементүүдээс 1 моль нэгдэл үүсэх үеийн энтальпийн өөрчлөлт." },
      { termEn: "Standard Enthalpy Change of Combustion (ΔHc⦵)", termMn: "Шатахын стандарт энтальпийн өөрчлөлт (ΔHc⦵)", definitionEn: "The enthalpy change when one mole of a substance is burnt completely in excess oxygen under standard conditions.", definitionMn: "Стандарт нөхцөлд 1 моль бодис илүүдэл хүчилтөрөгчид бүрэн шатах үеийн энтальпийн өөрчлөлт." },
      { termEn: "Standard Enthalpy Change of Neutralisation (ΔHneut⦵)", termMn: "Саармагжихын стандарт энтальпийн өөрчлөлт (ΔHneut⦵)", definitionEn: "The enthalpy change when one mole of water is formed by the reaction of an acid with an alkali under standard conditions.", definitionMn: "Стандарт нөхцөлд хүчил шүлттэй урвалд орж 1 моль ус үүсэх үеийн энтальпийн өөрчлөлт." },
      { termEn: "Enthalpy Change of Atomisation", termMn: "Атомчлалын энтальпийн өөрчлөлт", definitionEn: "The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state.", definitionMn: "Стандарт төлөвт буй элементээс 1 моль хийн атом үүсэх үеийн энтальпийн өөрчлөлт." },
      { termEn: "Specific Heat Capacity (c)", termMn: "Хувийн дулаан багтаамж (c)", definitionEn: "The energy needed to raise the temperature of 1 g of a substance by 1 °C; for water 4.18 J g⁻¹ °C⁻¹.", definitionMn: "1 г бодисын температурыг 1 °C-аар өсгөхөд шаардагдах энерги; усных 4.18 J g⁻¹ °C⁻¹." },
      { termEn: "Hess's Law", termMn: "Гессийн хууль", definitionEn: "The total enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same.", definitionMn: "Анхны ба эцсийн нөхцөл ижил бол урвалын нийт энтальпийн өөрчлөлт явсан замаас хамаарахгүй." },
      { termEn: "Bond Energy (E)", termMn: "Холбооны энерги (E)", definitionEn: "The energy needed to break one mole of a particular bond in gaseous molecules; always positive.", definitionMn: "Хийн молекул дахь тодорхой холбооны 1 моль-ийг таслахад шаардагдах энерги; үргэлж эерэг." },
      { termEn: "Average Bond Energy", termMn: "Дундаж холбооны энерги", definitionEn: "The mean energy needed to break one mole of a bond, averaged over many different compounds.", definitionMn: "Олон өөр нэгдлийн дунджаар тооцсон, 1 моль холбоог таслахад шаардагдах энерги." }
    ],
    formulas: [
      { nameEn: "Heat Transferred", nameMn: "Шилжсэн дулаан", formula: "q = mcΔT", note: "m = mass of water/solution in g, c = 4.18 J g⁻¹ °C⁻¹" },
      { nameEn: "Molar Enthalpy Change", nameMn: "Молийн энтальпийн өөрчлөлт", formula: "ΔH = −q ÷ n", note: "Divide by 1000 for kJ mol⁻¹; negative if the temperature rises" },
      { nameEn: "Hess Cycle from ΔHf", nameMn: "ΔHf-ээр Гессийн цикл", formula: "ΔHr = ΣΔHf(products) − ΣΔHf(reactants)", note: "Multiply by coefficients; elements = 0" },
      { nameEn: "Hess Cycle from ΔHc", nameMn: "ΔHc-ээр Гессийн цикл", formula: "ΔHr = ΣΔHc(reactants) − ΣΔHc(products)", note: "The reverse of the ΔHf rule" },
      { nameEn: "Bond Energy Equation", nameMn: "Холбооны энергийн томьёо", formula: "ΔH = Σ(bonds broken) − Σ(bonds formed)", note: "All bond energies are positive values" }
    ],
    examStyleTips: [
      "In calorimetry, m is the mass of the water or solution — and a temperature rise means ΔH is negative.",
      "Convert J to kJ (÷ 1000) and give ΔH with sign and units: −54.3 kJ mol⁻¹.",
      "With ΔHf data use products − reactants; with ΔHc data use reactants − products.",
      "Definitions: ΔHf is from ELEMENTS in standard states; ΔHneut is per mole of WATER; standard conditions are 298 K and 101 kPa.",
      "Bond breaking absorbs energy (+) and bond making releases energy (−).",
      "For experimental errors, name a specific cause (heat loss, incomplete combustion, evaporation of fuel) and its effect on ΔH."
    ],
    examQuestions: [
      {
        id: "ch6-q1",
        marks: 4,
        questionEn: "50 cm³ of 1.0 mol dm⁻³ HCl is mixed with 50 cm³ of 1.0 mol dm⁻³ NaOH in a polystyrene cup. The temperature rises from 21.3 °C to 27.8 °C.\nCalculate the enthalpy change of neutralisation. (c = 4.18 J g⁻¹ °C⁻¹)",
        questionMn: "1.0 mol dm⁻³ HCl-ийн 50 cm³-ийг 1.0 mol dm⁻³ NaOH-ийн 50 cm³-тэй полистирол аяганд холив. Температур 21.3 °C-аас 27.8 °C болж өсөв.\nСаармагжихын энтальпийн өөрчлөлтийг тооцоолно уу. (c = 4.18 J g⁻¹ °C⁻¹)",
        solutionEn: "m = 50 + 50 = 100 g · ΔT = 27.8 − 21.3 = 6.5 °C [1]\nq = 100 × 4.18 × 6.5 = 2717 J [1]\nn(H₂O) = 0.050 dm³ × 1.0 = 0.050 mol [1]\nΔH = −2717 ÷ 0.050 = −54 340 J mol⁻¹ = −54 kJ mol⁻¹ [1]",
        solutionMn: "m = 100 г, ΔT = 6.5 °C. q = 100 × 4.18 × 6.5 = 2717 J. Үүссэн ус = 0.050 моль. ΔH = −2717 ÷ 0.050 = −54 kJ mol⁻¹ (температур өссөн тул сөрөг).",
        examinerTip: "Use the TOTAL volume of both solutions for m, and the moles of water formed for n."
      },
      {
        id: "ch6-q2",
        marks: 3,
        questionEn: "Excess zinc is added to 50.0 cm³ of 0.200 mol dm⁻³ CuSO₄(aq). The temperature rises by 10.2 °C.\nCalculate ΔH for Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s).",
        questionMn: "0.200 mol dm⁻³ CuSO₄(aq)-ийн 50.0 cm³-д илүүдэл цайр нэмэхэд температур 10.2 °C-аар өсөв.\nZn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s) урвалын ΔH-г тооцоолно уу.",
        solutionEn: "q = 50.0 × 4.18 × 10.2 = 2131.8 J [1]\nZn is in excess → n(CuSO₄) = 0.0500 × 0.200 = 0.0100 mol [1]\nΔH = −2131.8 ÷ 0.0100 = −213 180 J mol⁻¹ = −213 kJ mol⁻¹ [1]",
        solutionMn: "q = 2131.8 J. Zn илүүдэлтэй тул хязгаарлагч CuSO₄-ийн моль = 0.0100. ΔH = −213 kJ mol⁻¹.",
        examinerTip: "Divide by the moles of the limiting reagent (CuSO₄), not the zinc."
      },
      {
        id: "ch6-q3",
        marks: 4,
        questionEn: "100 g of water is heated from 20.2 °C to 30.9 °C by burning propan-1-ol. The burner's mass falls from 86.27 g to 86.06 g. Mr(C₃H₇OH) = 60.\n(a) Calculate the enthalpy change of combustion. [3]\n(b) The data book value is −2021 kJ mol⁻¹. Give two reasons why the experimental value is less exothermic. [1]",
        questionMn: "Пропан-1-олыг шатааж 100 г усыг 20.2 °C-аас 30.9 °C хүртэл халаав. Шатаагчийн масс 86.27 г-аас 86.06 г болж буурав. Mr(C₃H₇OH) = 60.\n(a) Шатахын энтальпийн өөрчлөлтийг тооцоолно уу. [3]\n(b) Лавлах номын утга −2021 kJ mol⁻¹. Туршилтын утга яагаад бага экзотерм байгааг хоёр шалтгаанаар тайлбарлана уу. [1]",
        solutionEn: "(a) Mass of fuel = 0.21 g · ΔT = 10.7 °C · q = 100 × 4.18 × 10.7 = 4472.6 J [1]\nn = 0.21 ÷ 60 = 0.0035 mol [1]\nΔHc = −4472.6 ÷ 0.0035 = −1 277 886 J mol⁻¹ ≈ −1300 kJ mol⁻¹ [1]\n(b) Heat lost to the surroundings · incomplete combustion (or fuel evaporating from the wick) [1]",
        solutionMn: "(a) Түлш 0.21 г, ΔT = 10.7 °C, q = 4472.6 J, n = 0.0035 моль, ΔHc ≈ −1300 kJ mol⁻¹. (b) Орчинд дулаан алдагдсан; бүрэн бус шаталт (эсвэл зулнаас түлш ууршсан).",
        examinerTip: "In (a) m is the mass of WATER (100 g), not of the fuel."
      },
      {
        id: "ch6-q4",
        marks: 4,
        questionEn: "Write equations, with state symbols, for:\n(a) the standard enthalpy change of formation of methane\n(b) the standard enthalpy change of combustion of ethanol\n(c) the standard enthalpy change of formation of propanone, CH₃COCH₃(l)\n(d) the standard enthalpy change of formation of sodium chloride",
        questionMn: "Төлөвийн тэмдэгтэй тэгшитгэл бичнэ үү:\n(a) метаны үүсэхийн стандарт энтальпи\n(b) этанолын шатахын стандарт энтальпи\n(c) пропанон CH₃COCH₃(l)-ийн үүсэхийн стандарт энтальпи\n(d) натрийн хлоридын үүсэхийн стандарт энтальпи",
        solutionEn: "(a) C(graphite) + 2H₂(g) → CH₄(g) [1]\n(b) C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l) [1]\n(c) 3C(graphite) + 3H₂(g) + ½O₂(g) → CH₃COCH₃(l) [1]\n(d) Na(s) + ½Cl₂(g) → NaCl(s) [1]",
        solutionMn: "Үүсэхийн тэгшитгэлд стандарт төлөвт буй элементүүдээс яг 1 моль нэгдэл үүснэ (шаардлагатай бол ½ коэффициент). Шатахын тэгшитгэлд яг 1 моль түлш илүүдэл O₂-д шатна.",
        examinerTip: "Exactly ONE mole of the compound (or fuel) — use ½ coefficients rather than doubling."
      },
      {
        id: "ch6-q5",
        marks: 3,
        questionEn: "Use the ΔHf values (kJ mol⁻¹) to calculate ΔHr for:\n2NaHCO₃(s) → Na₂CO₃(s) + CO₂(g) + H₂O(l)\nΔHf: NaHCO₃ −950.8 · Na₂CO₃ −1130.7 · CO₂ −393.5 · H₂O −285.8",
        questionMn: "ΔHf утгуудыг (kJ mol⁻¹) ашиглан дараах урвалын ΔHr-ийг тооцоолно уу:\n2NaHCO₃(s) → Na₂CO₃(s) + CO₂(g) + H₂O(l)\nΔHf: NaHCO₃ −950.8 · Na₂CO₃ −1130.7 · CO₂ −393.5 · H₂O −285.8",
        solutionEn: "Products: −1130.7 + (−393.5) + (−285.8) = −1810.0 [1]\nReactants: 2 × (−950.8) = −1901.6 [1]\nΔHr = −1810.0 − (−1901.6) = +91.6 kJ mol⁻¹ [1]",
        solutionMn: "Бүтээгдэхүүн: −1810.0. Эх бодис: 2 × (−950.8) = −1901.6. ΔHr = бүтээгдэхүүн − эх бодис = +91.6 kJ mol⁻¹.",
        examinerTip: "Remember to multiply ΔHf of NaHCO₃ by 2."
      },
      {
        id: "ch6-q6",
        marks: 3,
        questionEn: "Use the ΔHc values (kJ mol⁻¹) to calculate the standard enthalpy change of formation of ethane:\n2C(graphite) + 3H₂(g) → C₂H₆(g)\nΔHc: C −393.5 · H₂ −285.8 · C₂H₆ −1559.7",
        questionMn: "ΔHc утгуудыг (kJ mol⁻¹) ашиглан этаны үүсэхийн стандарт энтальпийг тооцоолно уу:\n2C(graphite) + 3H₂(g) → C₂H₆(g)\nΔHc: C −393.5 · H₂ −285.8 · C₂H₆ −1559.7",
        solutionEn: "Reactants burnt: 2(−393.5) + 3(−285.8) = −1644.4 [1]\nProduct burnt: −1559.7 [1]\nΔHf = −1644.4 − (−1559.7) = −84.7 kJ mol⁻¹ [1]",
        solutionMn: "ΔHc өгөгдөлтэй үед эх бодис − бүтээгдэхүүн: 2(−393.5) + 3(−285.8) = −1644.4; −1644.4 − (−1559.7) = −84.7 kJ mol⁻¹.",
        examinerTip: "With combustion data the rule is reactants − products."
      },
      {
        id: "ch6-q7",
        marks: 4,
        questionEn: "MgCO₃(s) → MgO(s) + CO₂(g) cannot be measured directly.\nΔH₁ for MgCO₃(s) + 2HCl(aq) is −50.0 kJ mol⁻¹ and ΔH₂ for MgO(s) + 2HCl(aq) is −167.0 kJ mol⁻¹.\n(a) Write Hess's law for the cycle. [1]\n(b) Calculate ΔHr. [2]\n(c) Why can ΔHr not be measured directly? [1]",
        questionMn: "MgCO₃(s) → MgO(s) + CO₂(g)-ийг шууд хэмжих боломжгүй.\nMgCO₃(s) + 2HCl(aq)-ийн ΔH₁ = −50.0 kJ mol⁻¹, MgO(s) + 2HCl(aq)-ийн ΔH₂ = −167.0 kJ mol⁻¹.\n(a) Циклийн Гессийн хуулийг бичнэ үү. [1]\n(b) ΔHr-ийг тооцоолно уу. [2]\n(c) ΔHr-ийг яагаад шууд хэмжих боломжгүй вэ? [1]",
        solutionEn: "(a) ΔH₁ = ΔHr + ΔH₂ [1]\n(b) ΔHr = ΔH₁ − ΔH₂ = −50.0 − (−167.0) [1]\n= +117.0 kJ mol⁻¹ [1]\n(c) It needs strong heating, so the heat transferred cannot be measured [1]",
        solutionMn: "(a) Хоёр зам ижил төгсгөлд хүрнэ (MgCl₂(aq) + H₂O(l) + CO₂(g)): ΔH₁ = ΔHr + ΔH₂. (b) ΔHr = −50.0 − (−167.0) = +117.0 kJ mol⁻¹. (c) Хүчтэй халаалт шаарддаг тул шилжсэн дулааныг хэмжих боломжгүй."
      },
      {
        id: "ch6-q8",
        marks: 3,
        questionEn: "Use the bond energies to calculate ΔH for the Haber process:\nN₂(g) + 3H₂(g) → 2NH₃(g)\nE / kJ mol⁻¹: N≡N 945 · H–H 436 · N–H 391",
        questionMn: "Холбооны энергийг ашиглан Хаберын процессын ΔH-г тооцоолно уу:\nN₂(g) + 3H₂(g) → 2NH₃(g)\nE / kJ mol⁻¹: N≡N 945 · H–H 436 · N–H 391",
        solutionEn: "Bonds broken: 945 + 3 × 436 = +2253 [1]\nBonds formed: 6 × 391 = 2346 [1]\nΔH = 2253 − 2346 = −93 kJ mol⁻¹ [1]",
        solutionMn: "Тасарсан: 1 N≡N + 3 H–H = 945 + 1308 = 2253. Үүссэн: 2NH₃-д 6 N–H = 2346. ΔH = 2253 − 2346 = −93 kJ mol⁻¹.",
        examinerTip: "2NH₃ contains 6 N–H bonds, not 3."
      },
      {
        id: "ch6-q9",
        marks: 3,
        questionEn: "H₂(g) + Br₂(g) → 2HBr(g), ΔH = −103 kJ mol⁻¹. E(H–H) = 436 and E(Br–Br) = 193 kJ mol⁻¹.\n(a) Calculate the bond energy of H–Br. [2]\n(b) Explain why ΔH calculated from average bond energies often differs from the data-book value. [1]",
        questionMn: "H₂(g) + Br₂(g) → 2HBr(g), ΔH = −103 kJ mol⁻¹. E(H–H) = 436, E(Br–Br) = 193 kJ mol⁻¹.\n(a) H–Br холбооны энергийг тооцоолно уу. [2]\n(b) Дундаж холбооны энергиэс тооцсон ΔH яагаад лавлах номын утгаас ялгаатай байдгийг тайлбарлана уу. [1]",
        solutionEn: "(a) −103 = (436 + 193) − 2E(H–Br) [1]\nE(H–Br) = (436 + 193 + 103) ÷ 2 = 366 kJ mol⁻¹ [1]\n(b) Average bond energies are means over many compounds, not the exact values in these molecules (and bond energies apply to gases) [1]",
        solutionMn: "(a) ΔH = тасарсан − үүссэн: −103 = 629 − 2E → E(H–Br) = 366 kJ mol⁻¹. (b) Дундаж холбооны энерги олон нэгдлийн дундаж бөгөөд эдгээр молекул дахь яг утга биш; мөн хийн төлөвт хамаарна."
      },
      {
        id: "ch6-q10",
        marks: 3,
        questionEn: "Exit ticket:\n(a) 0.0200 mol of a fuel heats 100 g of water by 10.0 °C. Calculate ΔHc. [2]\n(b) C₂H₄ + H₂ → C₂H₆. ΔHc / kJ mol⁻¹: C₂H₄ −1411, H₂ −286, C₂H₆ −1560. Calculate ΔHr. [1]",
        questionMn: "(a) Түлшний 0.0200 моль 100 г усыг 10.0 °C-аар халаав. ΔHc-ийг тооцоолно уу. [2]\n(b) C₂H₄ + H₂ → C₂H₆. ΔHc / kJ mol⁻¹: C₂H₄ −1411, H₂ −286, C₂H₆ −1560. ΔHr-ийг тооцоолно уу. [1]",
        solutionEn: "(a) q = 100 × 4.18 × 10.0 = 4180 J [1]\nΔHc = −4180 ÷ 0.0200 = −209 000 J mol⁻¹ = −209 kJ mol⁻¹ [1]\n(b) Reactants − products: (−1411 − 286) − (−1560) = −137 kJ mol⁻¹ [1]",
        solutionMn: "(a) q = 4180 J, ΔHc = −209 kJ mol⁻¹. (b) ΔHc өгөгдөл: эх бодис − бүтээгдэхүүн = (−1697) − (−1560) = −137 kJ mol⁻¹."
      }
    ]
  },
  {
    id: 7,
    number: 7,
    level: "AS",
    category: "Inorganic",
    titleEn: "Redox Reactions",
    titleMn: "Исэлдэн ангижрах урвал (Redox & Oxidation Numbers)",
    descriptionEn: "Oxidation and reduction by electron transfer and oxidation number, half-equations, oxidation number rules, oxidising and reducing agents, Roman numerals in names, balancing by oxidation number changes, and disproportionation (Syllabus 6.1).",
    descriptionMn: "Электрон шилжилт ба исэлдэхүйн зэргээр тодорхойлох исэлдэлт, ангижрал, хагас тэгшитгэл, исэлдэхүйн зэргийн дүрэм, исэлдүүлэгч ба ангижруулагч, нэрэн дэх ром тоо, исэлдэхүйн зэргийн өөрчлөлтөөр тэнцвэржүүлэх, диспропорционац (Syllabus 6.1).",
    syllabusRef: "Syllabus 6.1",
    examPapers: ["Paper 1", "Paper 2"],
    learningIntentionsEn: [
      "Calculate the oxidation numbers of elements in compounds and ions",
      "Explain redox, oxidation and reduction in terms of electron transfer and changes in oxidation number",
      "Write half-equations and combine them into a balanced ionic equation",
      "Identify oxidising agents and reducing agents",
      "Use Roman numerals to show oxidation numbers in names and deduce formulas from names",
      "Balance redox equations using oxidation number changes",
      "Explain and identify disproportionation reactions"
    ],
    learningIntentionsMn: [
      "Нэгдэл ба ион дахь элементийн исэлдэхүйн зэргийг тооцоолох",
      "Исэлдэн ангижрах урвал, исэлдэлт, ангижралыг электрон шилжилт ба исэлдэхүйн зэргийн өөрчлөлтөөр тайлбарлах",
      "Хагас тэгшитгэл бичиж, тэдгээрийг нэгтгэн тэнцвэржүүлсэн ионы тэгшитгэл гаргах",
      "Исэлдүүлэгч ба ангижруулагч бодисыг тодорхойлох",
      "Нэрэнд ром тоогоор исэлдэхүйн зэргийг харуулах, нэрээс томьёо гаргах",
      "Исэлдэхүйн зэргийн өөрчлөлтийг ашиглан исэлдэн ангижрах тэгшитгэлийг тэнцвэржүүлэх",
      "Диспропорционацийн урвалыг тайлбарлаж, таних"
    ],
    subtopics: [
      {
        id: "7.1",
        number: "7.1",
        titleEn: "Oxidation, Reduction & Half-Equations",
        titleMn: "Исэлдэлт, ангижрал ба хагас тэгшитгэл",
        summaryEn: "Oxidation is gain of oxygen, loss of hydrogen, loss of electrons or an increase in oxidation number; reduction is the opposite (OIL RIG: Oxidation Is Loss, Reduction Is Gain). In a redox reaction both happen together and electrons lost = electrons gained. Half-equations show only the oxidation or only the reduction: 2Na + Cl₂ → 2NaCl splits into Na → Na⁺ + e⁻ (oxidation) and Cl₂ + 2e⁻ → 2Cl⁻ (reduction). To combine half-equations, multiply so the electrons are equal, add, and cancel the electrons: Ni → Ni²⁺ + 2e⁻ with 2Fe³⁺ + 2e⁻ → 2Fe²⁺ gives Ni + 2Fe³⁺ → Ni²⁺ + 2Fe²⁺.",
        summaryMn: "Исэлдэлт нь хүчилтөрөгч авах, устөрөгч алдах, электрон алдах эсвэл исэлдэхүйн зэрэг өсөх; ангижрал нь эсрэгээрээ (OIL RIG: Oxidation Is Loss, Reduction Is Gain). Исэлдэн ангижрах урвалд хоёулаа зэрэг явагдаж, алдсан электрон = авсан электрон. Хагас тэгшитгэл нь зөвхөн исэлдэлт эсвэл зөвхөн ангижралыг харуулна: 2Na + Cl₂ → 2NaCl нь Na → Na⁺ + e⁻ (исэлдэлт) ба Cl₂ + 2e⁻ → 2Cl⁻ (ангижрал) болж хуваагдана. Хагас тэгшитгэлүүдийг нэгтгэхдээ электроныг тэнцүүлэхээр үржүүлж, нэмээд электроныг хасна: Ni → Ni²⁺ + 2e⁻ ба 2Fe³⁺ + 2e⁻ → 2Fe²⁺ → Ni + 2Fe³⁺ → Ni²⁺ + 2Fe²⁺.",
        keyConcepts: ["OIL RIG", "Electrons lost = electrons gained", "Half-equations balance atoms AND charge", "Multiply to equal electrons, then add"],
        keyEquations: ["Na → Na⁺ + e⁻ (oxidation)", "Cl₂ + 2e⁻ → 2Cl⁻ (reduction)", "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", "2MnO₄⁻ + 10I⁻ + 16H⁺ → 2Mn²⁺ + 5I₂ + 8H₂O"],
        commonPitfalls: [
          "Balance charge in half-equations: Cl₂ + 2e⁻ → 2Cl⁻, not Cl₂ + e⁻ → Cl⁻.",
          "When combining, the electrons must cancel completely — none should remain in the overall equation."
        ]
      },
      {
        id: "7.2",
        number: "7.2",
        titleEn: "Oxidation Number Rules",
        titleMn: "Исэлдэхүйн зэргийн дүрэм",
        summaryEn: "(1) An uncombined element has oxidation number 0. (2) Fixed values: Group 1 = +1, Group 2 = +2, F = −1, H = +1 (but −1 in metal hydrides such as NaH), O = −2 (but −1 in peroxides such as H₂O₂ and +2 in F₂O). (3) A monatomic ion = its charge. (4) The sum in a compound = 0. (5) The sum in an ion = the charge on the ion. (6) The more electronegative atom has the negative value. Always write the sign before the number. Examples: S in SO₂ +4; N in N₂H₄ −2; N in NO₃⁻ +5; Cr in Cr₂O₇²⁻ +6; S in S₂O₃²⁻ +2; Mn in MnO₄⁻ +7.",
        summaryMn: "(1) Нэгдээгүй элементийн исэлдэхүйн зэрэг 0. (2) Тогтмол утга: 1-р бүлэг +1, 2-р бүлэг +2, F −1, H +1 (NaH зэрэг металлын гидридэд −1), O −2 (H₂O₂ зэрэг хэт исэлд −1, F₂O-д +2). (3) Нэг атомт ион = цэнэгтэйгээ тэнцүү. (4) Нэгдэлд нийлбэр = 0. (5) Ионд нийлбэр = ионы цэнэг. (6) Цахилгаан сөрөг чанар өндөр атом сөрөг утгатай. Тэмдгийг тооны өмнө бичнэ. Жишээ: SO₂-д S +4; N₂H₄-д N −2; NO₃⁻-д N +5; Cr₂O₇²⁻-д Cr +6; S₂O₃²⁻-д S +2; MnO₄⁻-д Mn +7.",
        keyConcepts: ["Element = 0", "Compound sum = 0 · ion sum = charge", "Peroxide O = −1 · metal hydride H = −1", "Write the sign first: +3, not 3+"],
        keyEquations: ["Cr₂O₇²⁻: 2x + 7(−2) = −2 → x = +6", "NO₃⁻: x + 3(−2) = −1 → x = +5"],
        commonPitfalls: [
          "Give the oxidation number per atom: Cr in Cr₂O₇²⁻ is +6, not +12.",
          "Write the sign first: the oxidation number of Fe in Fe³⁺ is +3 (the ion's charge is written 3+).",
          "O in H₂O₂ is −1 (peroxide) and H in NaH is −1."
        ]
      },
      {
        id: "7.3",
        number: "7.3",
        titleEn: "Oxidising & Reducing Agents",
        titleMn: "Исэлдүүлэгч ба ангижруулагч бодис",
        summaryEn: "Oxidation: oxidation number increases; reduction: oxidation number decreases. An oxidising agent (oxidant) removes electrons from another species, so it is itself reduced and its oxidation number decreases (O₂, Cl₂, acidified MnO₄⁻, acidified Cr₂O₇²⁻). A reducing agent (reductant) donates electrons, so it is itself oxidised and its oxidation number increases (H₂, I⁻, reactive metals such as Al and Zn). Example: 2I⁻ + MnO₂ + 4H⁺ → I₂ + Mn²⁺ + 2H₂O: Mn +4 → +2 (MnO₂ is the oxidant), I −1 → 0 (I⁻ is the reductant). In Ca + 2H₂O → Ca(OH)₂ + H₂, water is the oxidising agent (H +1 → 0). Fe²⁺ is oxidised by acidified MnO₄⁻ (purple → colourless): MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.",
        summaryMn: "Исэлдэлт: исэлдэхүйн зэрэг өснө; ангижрал: буурна. Исэлдүүлэгч бодис бусад бөөмөөс электрон авдаг тул өөрөө ангижирч, исэлдэхүйн зэрэг нь буурна (O₂, Cl₂, хүчиллэг MnO₄⁻, хүчиллэг Cr₂O₇²⁻). Ангижруулагч бодис электрон өгдөг тул өөрөө исэлдэж, исэлдэхүйн зэрэг нь өснө (H₂, I⁻, Al, Zn зэрэг идэвхтэй металл). Жишээ: 2I⁻ + MnO₂ + 4H⁺ → I₂ + Mn²⁺ + 2H₂O: Mn +4 → +2 (MnO₂ исэлдүүлэгч), I −1 → 0 (I⁻ ангижруулагч). Ca + 2H₂O → Ca(OH)₂ + H₂ урвалд ус исэлдүүлэгч (H +1 → 0). Fe²⁺-ийг хүчиллэг MnO₄⁻ исэлдүүлнэ (нил ягаан → өнгөгүй): MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.",
        keyConcepts: ["Oxidising agent: gains electrons, is reduced", "Reducing agent: loses electrons, is oxidised", "Identify agents from oxidation number changes", "Acidified KMnO₄: purple → colourless"],
        keyEquations: ["MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O", "Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O"],
        commonPitfalls: [
          "The oxidising agent is REDUCED — never write 'the oxidising agent is oxidised'.",
          "To explain why a reaction is redox, give both changes with numbers: X goes from a to b (oxidised) and Y from c to d (reduced) — 'oxygen is added' is not enough."
        ]
      },
      {
        id: "7.4",
        number: "7.4",
        titleEn: "Naming Compounds with Roman Numerals",
        titleMn: "Ром тоогоор нэгдлийг нэрлэх",
        summaryEn: "A Roman numeral gives the oxidation number of the element written just before it: FeCl₂ iron(II) chloride, FeCl₃ iron(III) chloride, NO₂ nitrogen(IV) oxide, NaNO₂ sodium nitrate(III), NaNO₃ sodium nitrate(V), H₃PO₃ phosphoric(III) acid, HClO₄ chloric(VII) acid, Na₂SO₃ sodium sulfate(IV), Na₂SO₄ sodium sulfate(VI), NaClO sodium chlorate(I), KBrO₃ potassium bromate(V), Cu₂O copper(I) oxide, Mn₂O₇ manganese(VII) oxide. From a name to a formula: sodium chlorate(V) has Cl = +5 and O = −2 in an ion of charge −1, so +5 + n(−2) = −1, n = 3 → NaClO₃.",
        summaryMn: "Ром тоо нь өмнө нь бичигдсэн элементийн исэлдэхүйн зэргийг заана: FeCl₂ төмөр(II) хлорид, FeCl₃ төмөр(III) хлорид, NO₂ азот(IV) исэл, NaNO₂ натрийн нитрат(III), NaNO₃ натрийн нитрат(V), H₃PO₃ фосфорын(III) хүчил, HClO₄ хлорын(VII) хүчил, Na₂SO₃ натрийн сульфат(IV), Na₂SO₄ натрийн сульфат(VI), NaClO натрийн хлорат(I), KBrO₃ калийн бромат(V), Cu₂O зэс(I) исэл, Mn₂O₇ манган(VII) исэл. Нэрээс томьёо: натрийн хлорат(V)-д Cl = +5, O = −2, ионы цэнэг −1 тул +5 + n(−2) = −1, n = 3 → NaClO₃.",
        keyConcepts: ["Numeral follows the element whose oxidation number varies", "nitrate(III) = NO₂⁻ · nitrate(V) = NO₃⁻", "sulfate(IV) = SO₃²⁻ · sulfate(VI) = SO₄²⁻", "chlorate(I) = ClO⁻ · chlorate(V) = ClO₃⁻"],
        keyEquations: ["sodium chlorate(V): +5 + n(−2) = −1 → n = 3 → NaClO₃"],
        commonPitfalls: [
          "Write 'sodium nitrate(V)', not 'sodium(I) nitrate' — sodium is always +1, so it never needs a numeral."
        ]
      },
      {
        id: "7.5",
        number: "7.5",
        titleEn: "Balancing Equations with Oxidation Numbers",
        titleMn: "Исэлдэхүйн зэргээр тэгшитгэл тэнцвэржүүлэх",
        summaryEn: "(1) Identify the atoms whose oxidation numbers change. (2) Work out the size of each change. (3) Multiply so that the total increase equals the total decrease. (4) Balance charges with H⁺ (or OH⁻), then balance H and O with H₂O. Example: CuO + NH₃ → Cu + N₂ + H₂O: Cu +2 → 0 (−2 each), N −3 → 0 (+3 each), so 3Cu (−6) balances 2N (+6) → 3CuO + 2NH₃ → 3Cu + N₂ + 3H₂O. Example: MnO₄⁻ + Fe²⁺: Mn −5, Fe +1 → 1 : 5; charge left 9+, right 17+ → add 8H⁺ → MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.",
        summaryMn: "(1) Исэлдэхүйн зэрэг нь өөрчлөгдөж буй атомуудыг олно. (2) Өөрчлөлт бүрийн хэмжээг тооцно. (3) Нийт өсөлт = нийт бууралт болохоор үржүүлнэ. (4) Цэнэгийг H⁺ (эсвэл OH⁻)-оор, дараа нь H ба O-г H₂O-оор тэнцвэржүүлнэ. Жишээ: CuO + NH₃ → Cu + N₂ + H₂O: Cu +2 → 0 (тус бүр −2), N −3 → 0 (тус бүр +3), тиймээс 3Cu (−6) нь 2N (+6)-тэй тэнцэнэ → 3CuO + 2NH₃ → 3Cu + N₂ + 3H₂O. Жишээ: MnO₄⁻ + Fe²⁺: Mn −5, Fe +1 → 1 : 5; цэнэг зүүн талд 9+, баруун талд 17+ → 8H⁺ нэмнэ → MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.",
        keyConcepts: ["Changes → charges → atoms", "Total increase = total decrease", "Balance charge with H⁺ in acid", "Balance O and H last with H₂O"],
        keyEquations: ["3CuO + 2NH₃ → 3Cu + N₂ + 3H₂O", "H₂SO₄ + 6HI → S + 3I₂ + 4H₂O", "2KBrO₃ + 3N₂H₄ → 2KBr + 3N₂ + 6H₂O"],
        commonPitfalls: [
          "Count the change for EVERY atom: in N₂H₄ → N₂ each of the two N atoms changes by +2, so the molecule changes by +4."
        ]
      },
      {
        id: "7.6",
        number: "7.6",
        titleEn: "Disproportionation",
        titleMn: "Диспропорционац",
        summaryEn: "Disproportionation is a redox reaction in which the same element is both oxidised and reduced. Chlorine with cold dilute NaOH: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O (Cl 0 → −1 and 0 → +1). With hot concentrated NaOH: 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O (Cl 0 → −1 five times and 0 → +5 once: −5 and +5 balance). Other examples: 2H₂O₂ → 2H₂O + O₂ (O −1 → −2 and −1 → 0); 3NO₂ + H₂O → 2HNO₃ + NO (N +4 → +5 and +4 → +2); Cu₂O + H₂SO₄ → Cu + CuSO₄ + H₂O (Cu +1 → 0 and +1 → +2); Cl₂ + H₂O → HCl + HClO. Not disproportionation: (NH₄)₂Cr₂O₇ → N₂ + 4H₂O + Cr₂O₃ (two different elements change).",
        summaryMn: "Диспропорционац нь нэг элемент нэгэн зэрэг исэлдэж бас ангижрах исэлдэн ангижрах урвал. Хлор хүйтэн шингэрүүлсэн NaOH-тэй: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O (Cl 0 → −1 ба 0 → +1). Халуун өтгөн NaOH-тэй: 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O (Cl 0 → −1 тав удаа, 0 → +5 нэг удаа: −5 ба +5 тэнцэнэ). Бусад жишээ: 2H₂O₂ → 2H₂O + O₂ (O −1 → −2 ба −1 → 0); 3NO₂ + H₂O → 2HNO₃ + NO (N +4 → +5 ба +4 → +2); Cu₂O + H₂SO₄ → Cu + CuSO₄ + H₂O (Cu +1 → 0 ба +1 → +2); Cl₂ + H₂O → HCl + HClO. Диспропорционац биш: (NH₄)₂Cr₂O₇ → N₂ + 4H₂O + Cr₂O₃ (өөр хоёр элемент өөрчлөгдөнө).",
        keyConcepts: ["Same element oxidised AND reduced", "Cold dilute NaOH → Cl⁻ + ClO⁻", "Hot concentrated NaOH → 5Cl⁻ + ClO₃⁻", "Two different elements changing ≠ disproportionation"],
        keyEquations: ["Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O", "3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O", "2H₂O₂ → 2H₂O + O₂"],
        commonPitfalls: [
          "Disproportionation needs the SAME element to go both up and down — any reaction with two changes is not enough."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Oxidation", termMn: "Исэлдэлт", definitionEn: "Loss of electrons, or an increase in oxidation number.", definitionMn: "Электрон алдах, эсвэл исэлдэхүйн зэрэг өсөх." },
      { termEn: "Reduction", termMn: "Ангижрал", definitionEn: "Gain of electrons, or a decrease in oxidation number.", definitionMn: "Электрон авах, эсвэл исэлдэхүйн зэрэг буурах." },
      { termEn: "Redox Reaction", termMn: "Исэлдэн ангижрах урвал", definitionEn: "A reaction in which oxidation and reduction take place together.", definitionMn: "Исэлдэлт ба ангижрал зэрэг явагдах урвал." },
      { termEn: "Half-Equation", termMn: "Хагас тэгшитгэл", definitionEn: "An equation showing only the oxidation or only the reduction part of a redox reaction, including electrons.", definitionMn: "Исэлдэн ангижрах урвалын зөвхөн исэлдэлт эсвэл зөвхөн ангижралыг электронтой нь харуулсан тэгшитгэл." },
      { termEn: "Oxidation Number", termMn: "Исэлдэхүйн зэрэг", definitionEn: "A number showing the degree of oxidation of an atom in a species; its sign is always shown.", definitionMn: "Бөөм дэх атомын исэлдсэн хэмжээг харуулах тоо; тэмдгийг үргэлж бичнэ." },
      { termEn: "Oxidising Agent (Oxidant)", termMn: "Исэлдүүлэгч бодис", definitionEn: "A species that removes electrons from another species and is itself reduced.", definitionMn: "Бусад бөөмөөс электрон авч, өөрөө ангижирдаг бөөм." },
      { termEn: "Reducing Agent (Reductant)", termMn: "Ангижруулагч бодис", definitionEn: "A species that donates electrons to another species and is itself oxidised.", definitionMn: "Бусад бөөмд электрон өгч, өөрөө исэлддэг бөөм." },
      { termEn: "Disproportionation", termMn: "Диспропорционац", definitionEn: "A redox reaction in which the same element is both oxidised and reduced.", definitionMn: "Нэг элемент нэгэн зэрэг исэлдэж бас ангижрах исэлдэн ангижрах урвал." }
    ],
    formulas: [
      { nameEn: "Sum of Oxidation Numbers", nameMn: "Исэлдэхүйн зэргийн нийлбэр", formula: "Σ(ox. no.) = 0 (compound) or = charge (ion)", note: "Use fixed values for Group 1, Group 2, F, H and O" },
      { nameEn: "Combining Half-Equations", nameMn: "Хагас тэгшитгэл нэгтгэх", formula: "electrons lost = electrons gained", note: "Multiply each half-equation, add, cancel e⁻" },
      { nameEn: "Chlorine with Cold Dilute NaOH", nameMn: "Хлор хүйтэн шингэрүүлсэн NaOH-тэй", formula: "Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O", note: "Disproportionation: Cl 0 → −1 and +1" },
      { nameEn: "Chlorine with Hot Concentrated NaOH", nameMn: "Хлор халуун өтгөн NaOH-тэй", formula: "3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O", note: "Disproportionation: Cl 0 → −1 and +5" }
    ],
    examStyleTips: [
      "Write oxidation numbers with the sign first (+3) and per atom (Cr in Cr₂O₇²⁻ is +6).",
      "The oxidising agent is reduced (gains electrons, oxidation number decreases); the reducing agent is oxidised.",
      "To show a reaction is redox, give both oxidation number changes with the species named.",
      "Half-equations must balance both atoms and charge: Cl₂ + 2e⁻ → 2Cl⁻.",
      "Balance redox equations in the order: oxidation number changes → charges (H⁺) → atoms (H₂O).",
      "Roman numerals go after the element whose oxidation number varies: sodium chlorate(V), potassium nitrate(III)."
    ],
    examQuestions: [
      {
        id: "ch7-q1",
        marks: 4,
        questionEn: "Calculate the oxidation number of:\n(a) S in SO₂\n(b) N in N₂H₄\n(c) N in NO₃⁻\n(d) Cr in Cr₂O₇²⁻",
        questionMn: "Исэлдэхүйн зэргийг тооцоолно уу:\n(a) SO₂ дахь S\n(b) N₂H₄ дахь N\n(c) NO₃⁻ дахь N\n(d) Cr₂O₇²⁻ дахь Cr",
        solutionEn: "(a) x + 2(−2) = 0 → S = +4 [1]\n(b) 2x + 4(+1) = 0 → N = −2 [1]\n(c) x + 3(−2) = −1 → N = +5 [1]\n(d) 2x + 7(−2) = −2 → Cr = +6 [1]",
        solutionMn: "Нэгдэлд нийлбэр 0, ионд нийлбэр нь цэнэгтэй тэнцүү: (a) +4, (b) −2, (c) +5, (d) +6 (нэг атомд).",
        examinerTip: "Give the value per atom and always include the sign."
      },
      {
        id: "ch7-q2",
        marks: 3,
        questionEn: "Combine each pair of half-equations into a balanced ionic equation:\n(a) Ni → Ni²⁺ + 2e⁻ and Fe³⁺ + e⁻ → Fe²⁺\n(b) 2I⁻ → I₂ + 2e⁻ and MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
        questionMn: "Хагас тэгшитгэлийн хос бүрийг нэгтгэж тэнцвэржүүлсэн ионы тэгшитгэл бичнэ үү:\n(a) Ni → Ni²⁺ + 2e⁻ ба Fe³⁺ + e⁻ → Fe²⁺\n(b) 2I⁻ → I₂ + 2e⁻ ба MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
        solutionEn: "(a) Fe³⁺ half × 2 → Ni + 2Fe³⁺ → Ni²⁺ + 2Fe²⁺ [1]\n(b) Iodide half × 5 and manganate half × 2 (10 e⁻ each) [1]\n2MnO₄⁻ + 10I⁻ + 16H⁺ → 2Mn²⁺ + 5I₂ + 8H₂O [1]",
        solutionMn: "(a) Fe³⁺-ийн хагасыг 2-оор үржүүлж нэмнэ: Ni + 2Fe³⁺ → Ni²⁺ + 2Fe²⁺. (b) Иодидыг 5-аар, манганатыг 2-оор үржүүлж 10 электроныг тэнцүүлнэ → 2MnO₄⁻ + 10I⁻ + 16H⁺ → 2Mn²⁺ + 5I₂ + 8H₂O.",
        examinerTip: "Check that no electrons remain and that the total charge is the same on both sides."
      },
      {
        id: "ch7-q3",
        marks: 4,
        questionEn: "For each reaction, give the oxidation number changes and identify the oxidising and reducing agents:\n(a) 2I⁻ + Br₂ → I₂ + 2Br⁻\n(b) 2I⁻ + MnO₂ + 4H⁺ → I₂ + Mn²⁺ + 2H₂O",
        questionMn: "Урвал бүрд исэлдэхүйн зэргийн өөрчлөлтийг бичиж, исэлдүүлэгч ба ангижруулагчийг тодорхойлно уу:\n(a) 2I⁻ + Br₂ → I₂ + 2Br⁻\n(b) 2I⁻ + MnO₂ + 4H⁺ → I₂ + Mn²⁺ + 2H₂O",
        solutionEn: "(a) I −1 → 0 (oxidised) · Br 0 → −1 (reduced) [1]\nBr₂ is the oxidising agent, I⁻ is the reducing agent [1]\n(b) Mn +4 → +2 (reduced) · I −1 → 0 (oxidised) [1]\nMnO₂ is the oxidising agent, I⁻ is the reducing agent [1]",
        solutionMn: "(a) I −1 → 0 исэлдэнэ, Br 0 → −1 ангижирна; Br₂ исэлдүүлэгч, I⁻ ангижруулагч. (b) Mn +4 → +2 ангижирна, I −1 → 0 исэлдэнэ; MnO₂ исэлдүүлэгч, I⁻ ангижруулагч."
      },
      {
        id: "ch7-q4",
        marks: 3,
        questionEn: "(a) Give the formula of sodium chlorate(V). [1]\n(b) Give the systematic name of Na₂SO₃. [1]\n(c) Give the systematic name of KBrO₃. [1]",
        questionMn: "(a) Натрийн хлорат(V)-ийн томьёог бичнэ үү. [1]\n(b) Na₂SO₃-ийн системчилсэн нэрийг бичнэ үү. [1]\n(c) KBrO₃-ийн системчилсэн нэрийг бичнэ үү. [1]",
        solutionEn: "(a) Cl = +5: +5 + n(−2) = −1 → n = 3 → NaClO₃ [1]\n(b) 2(+1) + x + 3(−2) = 0 → S = +4 → sodium sulfate(IV) [1]\n(c) Br = +5 → potassium bromate(V) [1]",
        solutionMn: "(a) NaClO₃. (b) S = +4 тул натрийн сульфат(IV). (c) Br = +5 тул калийн бромат(V)."
      },
      {
        id: "ch7-q5",
        marks: 3,
        questionEn: "Copper(II) oxide reacts with ammonia to form copper, nitrogen and water:\nCuO + NH₃ → Cu + N₂ + H₂O\nUse oxidation number changes to balance the equation.",
        questionMn: "Зэс(II) исэл аммиактай урвалд орж зэс, азот, ус үүсгэнэ:\nCuO + NH₃ → Cu + N₂ + H₂O\nИсэлдэхүйн зэргийн өөрчлөлтийг ашиглан тэнцвэржүүлнэ үү.",
        solutionEn: "Cu +2 → 0 (change −2) · N −3 → 0 (change +3) [1]\n3Cu (−6) balances 2N (+6): 3CuO + 2NH₃ → 3Cu + N₂ [1]\nBalance H: 3CuO + 2NH₃ → 3Cu + N₂ + 3H₂O [1]",
        solutionMn: "Cu −2, N +3 өөрчлөгдөнө. 3 Cu (−6) нь 2 N (+6)-тэй тэнцэнэ. 6 H → 3H₂O: 3CuO + 2NH₃ → 3Cu + N₂ + 3H₂O."
      },
      {
        id: "ch7-q6",
        marks: 4,
        questionEn: "MnO₄⁻ + SO₂ + H₂O → Mn²⁺ + SO₄²⁻ + H⁺\n(a) Use oxidation numbers to identify the reducing agent. [2]\n(b) Balance the equation. [2]",
        questionMn: "MnO₄⁻ + SO₂ + H₂O → Mn²⁺ + SO₄²⁻ + H⁺\n(a) Исэлдэхүйн зэргийг ашиглан ангижруулагчийг тодорхойлно уу. [2]\n(b) Тэгшитгэлийг тэнцвэржүүлнэ үү. [2]",
        solutionEn: "(a) S +4 → +6, so SO₂ is oxidised [1] · it is the reducing agent (Mn +7 → +2 is reduced) [1]\n(b) Mn −5 and S +2 → 2MnO₄⁻ : 5SO₂ [1]\n2MnO₄⁻ + 5SO₂ + 2H₂O → 2Mn²⁺ + 5SO₄²⁻ + 4H⁺ [1]",
        solutionMn: "(a) S +4 → +6 исэлдэнэ — SO₂ ангижруулагч; Mn +7 → +2 ангижирна. (b) −5 ба +2 өөрчлөлтийг тэнцүүлэхэд 2 : 5 харьцаа; цэнэг ба H, O-г тэнцвэржүүлбэл 2MnO₄⁻ + 5SO₂ + 2H₂O → 2Mn²⁺ + 5SO₄²⁻ + 4H⁺."
      },
      {
        id: "ch7-q7",
        marks: 4,
        questionEn: "Chlorine reacts with hot concentrated sodium hydroxide:\nCl₂ + OH⁻ → Cl⁻ + ClO₃⁻ + H₂O\n(a) Balance the equation. [2]\n(b) Explain why this is a disproportionation reaction. [2]",
        questionMn: "Хлор халуун өтгөн натрийн гидроксидтэй урвалд орно:\nCl₂ + OH⁻ → Cl⁻ + ClO₃⁻ + H₂O\n(a) Тэгшитгэлийг тэнцвэржүүлнэ үү. [2]\n(b) Энэ нь яагаад диспропорционацийн урвал болохыг тайлбарлана уу. [2]",
        solutionEn: "(a) Cl → Cl⁻ is −1 and Cl → ClO₃⁻ is +5, so 5Cl⁻ for each ClO₃⁻ → 3Cl₂ [1]\n3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O [1]\n(b) The same element, chlorine, is both oxidised (0 → +5) [1] and reduced (0 → −1) [1]",
        solutionMn: "(a) −1 ба +5 өөрчлөлт тул нэг ClO₃⁻ тутамд 5Cl⁻ → 6 Cl атом = 3Cl₂; баруун талын −6 цэнэгийг 6OH⁻-ээр тэнцүүлнэ: 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O. (b) Нэг элемент (хлор) нэгэн зэрэг исэлдэж (0 → +5) бас ангижирна (0 → −1)."
      },
      {
        id: "ch7-q8",
        marks: 6,
        questionEn: "Nitric acid is made from ammonia via NO and NO₂.\n(a) Give the oxidation number of N in NH₃, NO, NO₂ and HNO₃. [2]\n(b) Give the systematic name of NO₂. [1]\n(c) P + 5HNO₃ → H₃PO₄ + 5NO₂ + H₂O. Explain why this is a redox reaction and why HNO₃ is the oxidising agent. [3]",
        questionMn: "Азотын хүчлийг аммиакаас NO, NO₂-оор дамжуулан гаргадаг.\n(a) NH₃, NO, NO₂, HNO₃ дахь N-ийн исэлдэхүйн зэргийг бичнэ үү. [2]\n(b) NO₂-ийн системчилсэн нэрийг бичнэ үү. [1]\n(c) P + 5HNO₃ → H₃PO₄ + 5NO₂ + H₂O. Энэ нь яагаад исэлдэн ангижрах урвал, HNO₃ яагаад исэлдүүлэгч болохыг тайлбарлана уу. [3]",
        solutionEn: "(a) NH₃ −3 · NO +2 · NO₂ +4 · HNO₃ +5 [2]\n(b) nitrogen(IV) oxide [1]\n(c) P 0 → +5, so P is oxidised [1] · N +5 → +4, so N is reduced [1]\nHNO₃ increases the oxidation number of P and is itself reduced [1]",
        solutionMn: "(a) −3, +2, +4, +5 — үе шат бүрт N исэлдэнэ. (b) азот(IV) исэл. (c) P 0 → +5 исэлдэнэ, N +5 → +4 ангижирна; HNO₃ нь P-ийн исэлдэхүйн зэргийг өсгөж, өөрөө ангижирдаг тул исэлдүүлэгч."
      },
      {
        id: "ch7-q9",
        marks: 3,
        questionEn: "Which of these are disproportionation reactions? Explain each with oxidation numbers.\n(a) 2H₂O₂ → 2H₂O + O₂\n(b) 3NO₂ + H₂O → 2HNO₃ + NO\n(c) 2KBrO₃ → 2KBr + 3O₂",
        questionMn: "Аль нь диспропорционацийн урвал вэ? Исэлдэхүйн зэргээр тайлбарлана уу.\n(a) 2H₂O₂ → 2H₂O + O₂\n(b) 3NO₂ + H₂O → 2HNO₃ + NO\n(c) 2KBrO₃ → 2KBr + 3O₂",
        solutionEn: "(a) Yes · O −1 → −2 and −1 → 0 [1]\n(b) Yes · N +4 → +5 and +4 → +2 [1]\n(c) No · Br is reduced (+5 → −1) but O is oxidised (−2 → 0) — two different elements [1]",
        solutionMn: "(a) Тийм: O −1 → −2 ба −1 → 0. (b) Тийм: N +4 → +5 ба +4 → +2. (c) Үгүй: Br ангижирч, O исэлдэнэ — өөр хоёр элемент."
      },
      {
        id: "ch7-q10",
        marks: 3,
        questionEn: "Calcium reacts with water: Ca + 2H₂O → Ca(OH)₂ + H₂\n(a) Write the two half-equations. [2]\n(b) Which half-equation is the reduction? Explain. [1]",
        questionMn: "Кальци устай урвалд орно: Ca + 2H₂O → Ca(OH)₂ + H₂\n(a) Хоёр хагас тэгшитгэлийг бичнэ үү. [2]\n(b) Аль хагас тэгшитгэл нь ангижрал вэ? Тайлбарлана уу. [1]",
        solutionEn: "(a) Ca → Ca²⁺ + 2e⁻ [1]\n2H₂O + 2e⁻ → 2OH⁻ + H₂ [1]\n(b) The second · water gains electrons (H +1 → 0) [1]",
        solutionMn: "(a) Ca → Ca²⁺ + 2e⁻; 2H₂O + 2e⁻ → 2OH⁻ + H₂. (b) Хоёр дахь нь ангижрал — ус электрон авч, H +1 → 0 болно."
      }
    ]
  },
  {
    id: 8,
    number: 8,
    level: "AS",
    category: "Physical",
    titleEn: "Equilibria (Chemical & Acid-Base)",
    titleMn: "Химийн тэнцвэр ба Хүчил-Шүлтийн тэнцвэр",
    descriptionEn: "Reversible reactions and dynamic equilibrium, Le Chatelier's principle, Kc and Kp with ICE tables and partial pressures, the Haber and Contact processes, Brønsted–Lowry acids and bases, strong and weak acids, and pH titration curves and indicators (Syllabus 7.1–7.2).",
    descriptionMn: "Буцах урвал ба динамик тэнцвэр, Ле Шательегийн зарчим, ICE хүснэгт ба хэсгийн даралт ашигласан Kc, Kp, Хабер ба Контакт процесс, Брёнстед–Лоурийн хүчил, суурь, хүчтэй ба сул хүчил, титрлэлтийн pH муруй ба индикатор (Syllabus 7.1–7.2).",
    syllabusRef: "Syllabus 7.1–7.2",
    examPapers: ["Paper 1", "Paper 2"],
    learningIntentionsEn: [
      "Explain reversible reactions and dynamic equilibrium, and why a closed system is needed",
      "State Le Chatelier's principle and use it to predict the effect of temperature, concentration, pressure and a catalyst",
      "Write Kc and Kp expressions and deduce their units",
      "Calculate Kc, Kp and equilibrium amounts from data, using ICE tables, mole fractions and partial pressures",
      "State that only temperature changes the value of Kc or Kp",
      "Explain the conditions used in the Haber and Contact processes",
      "Use the Brønsted–Lowry theory and distinguish strong and weak acids and bases",
      "Compare strong and weak acids by pH, conductivity and reaction with magnesium",
      "Sketch pH titration curves and choose a suitable indicator"
    ],
    learningIntentionsMn: [
      "Буцах урвал ба динамик тэнцвэрийг тайлбарлаж, битүү систем яагаад хэрэгтэйг хэлэх",
      "Ле Шательегийн зарчмыг хэлж, температур, концентраци, даралт, катализаторын нөлөөг урьдчилан хэлэх",
      "Kc ба Kp-ийн илэрхийлэл бичиж, нэгжийг гаргах",
      "ICE хүснэгт, молийн хувь, хэсгийн даралт ашиглан Kc, Kp ба тэнцвэрийн хэмжээг тооцоолох",
      "Kc эсвэл Kp-ийн утгыг зөвхөн температур өөрчилдгийг хэлэх",
      "Хабер ба Контакт процессын нөхцөлийг тайлбарлах",
      "Брёнстед–Лоурийн онолыг хэрэглэж, хүчтэй ба сул хүчил, суурийг ялгах",
      "Хүчтэй ба сул хүчлийг pH, цахилгаан дамжуулалт, магнитай урвалаар харьцуулах",
      "Титрлэлтийн pH муруй зурж, тохирох индикатор сонгох"
    ],
    subtopics: [
      {
        id: "8.1",
        number: "8.1",
        titleEn: "Reversible Reactions & Dynamic Equilibrium",
        titleMn: "Буцах урвал ба динамик тэнцвэр",
        summaryEn: "In a reversible reaction the products can react to re-form the reactants (CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O). Dynamic equilibrium has four features: (1) it is dynamic — particles keep reacting; (2) the forward rate equals the backward rate; (3) concentrations stay constant (but are not usually equal); (4) it needs a closed system, in which no reactants or products can escape. Equilibrium can be reached from either side: H₂ + I₂ or HI alone give the same equilibrium mixture. In an open system CaCO₃ → CaO + CO₂ goes to completion because CO₂ escapes.",
        summaryMn: "Буцах урвалд бүтээгдэхүүн урвалд орж эх бодисыг дахин үүсгэж чадна (CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O). Динамик тэнцвэрийн дөрвөн шинж: (1) динамик — бөөмс урвалд орсоор байна; (2) шууд урвалын хурд = буцах урвалын хурд; (3) концентрациуд тогтмол (гэхдээ ихэвчлэн тэнцүү биш); (4) эх бодис, бүтээгдэхүүн гадагш гарахгүй битүү систем шаардлагатай. Тэнцвэрт аль ч талаас хүрч болно: H₂ + I₂ эсвэл зөвхөн HI нь ижил тэнцвэрийн хольц өгнө. Нээлттэй системд CO₂ гадагш гардаг тул CaCO₃ → CaO + CO₂ бүрэн явагдана.",
        keyConcepts: ["Forward rate = backward rate", "Concentrations constant, not equal", "Closed system needed", "Reached from either direction"],
        commonPitfalls: [
          "At equilibrium the reaction has NOT stopped, and the concentrations are constant — not equal."
        ]
      },
      {
        id: "8.2",
        number: "8.2",
        titleEn: "Le Chatelier's Principle",
        titleMn: "Ле Шательегийн зарчим",
        summaryEn: "If a change is made to a system at dynamic equilibrium, the position of equilibrium moves to minimise this change. Concentration: adding a reactant (or removing a product) moves the position to the right. Pressure: increasing pressure moves the position towards the side with fewer gas molecules (2SO₂ + O₂ ⇌ 2SO₃: 3 → 2, so right); equal numbers of gas molecules on each side → no effect; count only (g). Temperature: increasing temperature moves the position in the endothermic direction (N₂O₄ ⇌ 2NO₂, ΔH = +58 kJ mol⁻¹: hot → darker brown). A catalyst increases the forward and backward rates equally: no change in position, but equilibrium is reached faster. Adding water to Ce⁴⁺ + Fe²⁺ ⇌ Ce³⁺ + Fe³⁺ has no effect (equal numbers of ions each side).",
        summaryMn: "Динамик тэнцвэрт буй системд өөрчлөлт хийвэл тэнцвэрийн байрлал уг өөрчлөлтийг багасгах чиглэлд шилжинэ. Концентраци: эх бодис нэмэх (эсвэл бүтээгдэхүүн зайлуулах) нь байрлалыг баруун тийш шилжүүлнэ. Даралт: даралт ихэсгэхэд хийн молекул цөөтэй тал руу шилжинэ (2SO₂ + O₂ ⇌ 2SO₃: 3 → 2, баруун тийш); хоёр талд хийн молекулын тоо тэнцүү бол нөлөөгүй; зөвхөн (g)-г тоолно. Температур: температур өсгөхөд эндотерм чиглэл рүү шилжинэ (N₂O₄ ⇌ 2NO₂, ΔH = +58 kJ mol⁻¹: халаахад илүү бор). Катализатор шууд ба буцах хурдыг адилхан өсгөнө: байрлал өөрчлөгдөхгүй, харин тэнцвэрт хурдан хүрнэ. Ce⁴⁺ + Fe²⁺ ⇌ Ce³⁺ + Fe³⁺-д ус нэмэх нь нөлөөгүй (хоёр талд ионы тоо тэнцүү).",
        keyConcepts: ["Position moves to minimise the change", "↑p → side with fewer gas molecules", "↑T → endothermic direction", "Catalyst: no shift, faster to equilibrium"],
        keyEquations: ["N₂(g) + 3H₂(g) ⇌ 2NH₃(g) ΔH = −92 kJ mol⁻¹", "N₂O₄(g) ⇌ 2NO₂(g) ΔH = +58 kJ mol⁻¹"],
        commonPitfalls: [
          "Do not just write 'equilibrium shifts right' — state the change, the direction and the reason (fewer gas molecules, endothermic direction …).",
          "A catalyst does not change the position of equilibrium or the yield."
        ]
      },
      {
        id: "8.3",
        number: "8.3",
        titleEn: "The Equilibrium Constant Kc",
        titleMn: "Тэнцвэрийн тогтмол Kc",
        summaryEn: "Kc = products over reactants, with the equilibrium concentrations (mol dm⁻³) raised to the powers of their coefficients; solids (and pure liquids in heterogeneous systems) are left out. H₂ + I₂ ⇌ 2HI: Kc = [HI]² ÷ ([H₂][I₂]) — no units. N₂ + 3H₂ ⇌ 2NH₃: Kc = [NH₃]² ÷ ([N₂][H₂]³), units dm⁶ mol⁻². Use an ICE table (Initial, Change, Equilibrium) and convert moles to concentrations by dividing by V; if the number of terms top and bottom is equal, V cancels. Example: 0.100 mol A + 0.200 mol B in 2.00 dm³ form 0.040 mol C → [A] 0.0300, [B] 0.0800, [C] 0.0200 → Kc = 8.33 dm³ mol⁻¹. Only temperature changes Kc: for an endothermic forward reaction Kc increases with T; for an exothermic one it decreases.",
        summaryMn: "Kc = бүтээгдэхүүн ÷ эх бодис, тэнцвэрийн концентрацийг (mol dm⁻³) коэффициентийн зэрэгт дэвшүүлнэ; хатуу бодис (гетероген системд цэвэр шингэн)-ыг оруулахгүй. H₂ + I₂ ⇌ 2HI: Kc = [HI]² ÷ ([H₂][I₂]) — нэгжгүй. N₂ + 3H₂ ⇌ 2NH₃: Kc = [NH₃]² ÷ ([N₂][H₂]³), нэгж dm⁶ mol⁻². ICE хүснэгт (Анхны, Өөрчлөлт, Тэнцвэр) ашиглаж, молийг V-д хувааж концентраци болгоно; дээд ба доод гишүүдийн тоо тэнцүү бол V хураагдана. Жишээ: 2.00 dm³-т 0.100 моль A + 0.200 моль B-ээс 0.040 моль C үүснэ → [A] 0.0300, [B] 0.0800, [C] 0.0200 → Kc = 8.33 dm³ mol⁻¹. Kc-г зөвхөн температур өөрчилнө: шууд урвал эндотерм бол T өсөхөд Kc өснө, экзотерм бол буурна.",
        keyConcepts: ["Products over reactants, coefficients as powers", "Omit solids", "ICE table: Initial · Change · Equilibrium", "Only temperature changes K"],
        keyEquations: ["H₂ + I₂ ⇌ 2HI: Kc = [HI]² ÷ ([H₂][I₂])", "N₂ + 3H₂ ⇌ 2NH₃: Kc = [NH₃]² ÷ ([N₂][H₂]³) dm⁶ mol⁻²", "[X] = n ÷ V"],
        commonPitfalls: [
          "Coefficients become powers: [HI]², not 2[HI].",
          "Divide moles by the volume (dm³) unless V cancels.",
          "Higher pressure or concentration does NOT change Kc — only temperature does."
        ]
      },
      {
        id: "8.4",
        number: "8.4",
        titleEn: "Partial Pressures & Kp",
        titleMn: "Хэсгийн даралт ба Kp",
        summaryEn: "The partial pressure of a gas is the pressure it would exert if it alone occupied the container. p(total) = pA + pB + pC …; mole fraction = moles of A ÷ total moles of gas; pA = mole fraction × p(total). Kp is written like Kc but with partial pressures and no square brackets: N₂O₄ ⇌ 2NO₂: Kp = p(NO₂)² ÷ p(N₂O₄), units Pa; 2SO₂ + O₂ ⇌ 2SO₃: Kp = p(SO₃)² ÷ (p(SO₂)² × p(O₂)), units Pa⁻¹; solids are left out. Example: H₂ + I₂ ⇌ 2HI at 100 kPa with mole fractions 0.0810, 0.1378 and 0.7813 → partial pressures 8.10, 13.78, 78.13 kPa → Kp = 78.13² ÷ (8.10 × 13.78) = 54.7 (no units).",
        summaryMn: "Хийн хэсгийн даралт нь тухайн хий ганцаараа савыг эзэлсэн үед үзүүлэх даралт. p(нийт) = pA + pB + pC …; молийн хувь = A-ийн моль ÷ хийн нийт моль; pA = молийн хувь × p(нийт). Kp-г Kc шиг бичих ч хэсгийн даралтаар, дөрвөлжин хаалтгүй: N₂O₄ ⇌ 2NO₂: Kp = p(NO₂)² ÷ p(N₂O₄), нэгж Pa; 2SO₂ + O₂ ⇌ 2SO₃: Kp = p(SO₃)² ÷ (p(SO₂)² × p(O₂)), нэгж Pa⁻¹; хатуу бодисыг оруулахгүй. Жишээ: 100 kPa-д H₂ + I₂ ⇌ 2HI, молийн хувь 0.0810, 0.1378, 0.7813 → хэсгийн даралт 8.10, 13.78, 78.13 kPa → Kp = 78.13² ÷ (8.10 × 13.78) = 54.7 (нэгжгүй).",
        keyConcepts: ["Mole fraction = n(A) ÷ n(total)", "pA = mole fraction × p(total)", "Sum of partial pressures = total pressure", "Kp uses p( ), not [ ]"],
        keyEquations: ["pA = (nA ÷ n total) × p total", "Kp = p(NO₂)² ÷ p(N₂O₄)", "Kp = p(NH₃)² ÷ (p(N₂) × p(H₂)³) Pa⁻²"],
        commonPitfalls: [
          "Never use square brackets in Kp expressions.",
          "Work out the units from the powers: N₂ + 3H₂ ⇌ 2NH₃ gives Pa² ÷ Pa⁴ = Pa⁻²."
        ]
      },
      {
        id: "8.5",
        number: "8.5",
        titleEn: "The Haber & Contact Processes",
        titleMn: "Хабер ба Контакт процесс",
        summaryEn: "Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹. About 450 °C is a compromise: a lower temperature gives a higher yield (exothermic) but the rate is too slow. About 1.5 × 10⁷ Pa: 4 → 2 gas molecules, so high pressure raises the yield and the rate, but very high pressure is expensive and unsafe. An iron catalyst makes equilibrium reached faster without changing the yield. Ammonia is removed by condensing it, so the position moves right, and unreacted N₂ and H₂ are recycled. Contact process: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = −197 kJ mol⁻¹, V₂O₅ catalyst, 400–450 °C; only 1–2 atm is used because Kp is very large (position already far right) and high pressure is costly. SO₃ is absorbed in 98% H₂SO₄.",
        summaryMn: "Хабер процесс: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹. ~450 °C нь буулт: бага температур гарцыг өсгөх (экзотерм) ч хурд хэт удаан. ~1.5 × 10⁷ Pa: 4 → 2 хийн молекул тул өндөр даралт гарц ба хурдыг өсгөх ч хэт өндөр даралт үнэтэй, аюултай. Төмөр катализатор гарцыг өөрчлөхгүйгээр тэнцвэрт хурдан хүргэнэ. Аммиакийг конденсацлан зайлуулахад байрлал баруун тийш шилжиж, урвалд ороогүй N₂, H₂-г дахин ашиглана. Контакт процесс: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = −197 kJ mol⁻¹, V₂O₅ катализатор, 400–450 °C; Kp маш их (байрлал аль хэдийн баруун талд) бөгөөд өндөр даралт үнэтэй тул зөвхөн 1–2 атм хэрэглэнэ. SO₃-ийг 98% H₂SO₄-д шингээнэ.",
        keyConcepts: ["Haber: ~450 °C, ~1.5 × 10⁷ Pa, Fe catalyst", "Compromise temperature: yield vs rate", "Contact: V₂O₅, 400–450 °C, 1–2 atm", "Remove product → position moves right"],
        keyEquations: ["N₂ + 3H₂ ⇌ 2NH₃ ΔH = −92 kJ mol⁻¹", "2SO₂ + O₂ ⇌ 2SO₃ ΔH = −197 kJ mol⁻¹"],
        commonPitfalls: [
          "Explain the temperature as a compromise between yield and rate — mention both.",
          "The catalyst affects only the rate, not the yield."
        ]
      },
      {
        id: "8.6",
        number: "8.6",
        titleEn: "Brønsted–Lowry Acids & Bases",
        titleMn: "Брёнстед–Лоурийн хүчил ба суурь",
        summaryEn: "A Brønsted–Lowry acid is a proton (H⁺) donor and a base is a proton acceptor. Water is amphoteric: it accepts H⁺ from HCl (base) and donates H⁺ to NH₃ (acid); H₃O⁺ is the hydroxonium ion. Strong acids and bases are fully dissociated in water (HCl → H⁺ + Cl⁻, NaOH → Na⁺ + OH⁻); weak ones are only partially dissociated, with the position well to the left (CH₃COOH ⇌ CH₃COO⁻ + H⁺, NH₃ + H₂O ⇌ NH₄⁺ + OH⁻). At the same concentration (0.1 mol dm⁻³) HCl has pH 1 but ethanoic acid pH 2.9; a strong acid also conducts better and reacts faster with Mg, because [H⁺] is higher. Neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l).",
        summaryMn: "Брёнстед–Лоурийн хүчил нь протон (H⁺) өгөгч, суурь нь протон хүлээн авагч. Ус амфотер: HCl-ээс H⁺ авна (суурь), NH₃-т H⁺ өгнө (хүчил); H₃O⁺ — гидроксоний ион. Хүчтэй хүчил, суурь усанд бүрэн диссоциацлагдана (HCl → H⁺ + Cl⁻, NaOH → Na⁺ + OH⁻); сул нь зөвхөн хэсэгчлэн, байрлал зүүн талд (CH₃COOH ⇌ CH₃COO⁻ + H⁺, NH₃ + H₂O ⇌ NH₄⁺ + OH⁻). Ижил концентрацид (0.1 mol dm⁻³) HCl pH 1, этаны хүчил pH 2.9; хүчтэй хүчил [H⁺] өндөр тул илүү сайн дамжуулж, Mg-тэй хурдан урвалд орно. Саармагжилт: H⁺(aq) + OH⁻(aq) → H₂O(l).",
        keyConcepts: ["Acid = proton donor · base = proton acceptor", "Strong = fully dissociated · weak = partially", "Water is amphoteric", "Strong vs weak: pH, conductivity, rate with Mg"],
        keyEquations: ["HCl(aq) → H⁺(aq) + Cl⁻(aq)", "CH₃COOH ⇌ CH₃COO⁻ + H⁺", "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻"],
        commonPitfalls: [
          "Weak is not the same as dilute: weak = partially dissociated; dilute = low concentration.",
          "An acid is not 'something containing hydrogen' — it is a proton donor."
        ]
      },
      {
        id: "8.7",
        number: "8.7",
        titleEn: "pH Titration Curves & Indicators",
        titleMn: "Титрлэлтийн pH муруй ба индикатор",
        summaryEn: "An indicator is a weak acid whose two forms have different colours: HIn ⇌ H⁺ + In⁻ (acid → left, alkali → right). Ranges: methyl orange 3.2–4.4 (red → yellow), methyl red 4.2–6.3, bromothymol blue 6.0–7.6 (yellow → blue), phenolphthalein 8.2–10.0 (colourless → pink). The indicator's range must lie within the steep part of the titration curve. Strong acid + strong base: steep from about 3.5 to 10.5 — almost any indicator. Strong acid + weak base: steep 3.5–7.5 — methyl orange or methyl red, not phenolphthalein. Weak acid + strong base: steep 7.5–11 — phenolphthalein, not methyl orange. Weak acid + weak base: no steep part — no indicator is suitable.",
        summaryMn: "Индикатор нь хоёр хэлбэр нь өөр өнгөтэй сул хүчил: HIn ⇌ H⁺ + In⁻ (хүчилд зүүн, шүлтэд баруун). Муж: метил улбар шар 3.2–4.4 (улаан → шар), метил улаан 4.2–6.3, бромтимол хөх 6.0–7.6 (шар → хөх), фенолфталеин 8.2–10.0 (өнгөгүй → ягаан). Индикаторын муж титрлэлтийн муруйн огцом хэсэгт байх ёстой. Хүчтэй хүчил + хүчтэй суурь: ~3.5-аас 10.5 хүртэл огцом — бараг ямар ч индикатор. Хүчтэй хүчил + сул суурь: 3.5–7.5 — метил улбар шар эсвэл метил улаан, фенолфталеин биш. Сул хүчил + хүчтэй суурь: 7.5–11 — фенолфталеин, метил улбар шар биш. Сул хүчил + сул суурь: огцом хэсэггүй — тохирох индикатор байхгүй.",
        keyConcepts: ["Indicator range must lie in the steep part", "Strong acid + weak base → methyl orange", "Weak acid + strong base → phenolphthalein", "Weak + weak → no suitable indicator"],
        keyEquations: ["HIn ⇌ H⁺ + In⁻"],
        commonPitfalls: [
          "Phenolphthalein is unsuitable for a strong acid with a weak base — its range (8.2–10) is outside the steep part."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Reversible Reaction", termMn: "Буцах урвал", definitionEn: "A reaction in which the products can react to re-form the reactants.", definitionMn: "Бүтээгдэхүүн нь урвалд орж эх бодисыг дахин үүсгэж чадах урвал." },
      { termEn: "Closed System", termMn: "Битүү систем", definitionEn: "A system in which no reactants or products can escape.", definitionMn: "Эх бодис, бүтээгдэхүүн гадагш гарч чадахгүй систем." },
      { termEn: "Dynamic Equilibrium", termMn: "Динамик тэнцвэр", definitionEn: "The state in which the forward and backward reaction rates are equal and the concentrations of reactants and products stay constant.", definitionMn: "Шууд ба буцах урвалын хурд тэнцүү, эх бодис ба бүтээгдэхүүний концентраци тогтмол байх төлөв." },
      { termEn: "Position of Equilibrium", termMn: "Тэнцвэрийн байрлал", definitionEn: "The relative amounts of products and reactants in an equilibrium mixture.", definitionMn: "Тэнцвэрийн хольц дахь бүтээгдэхүүн ба эх бодисын харьцангуй хэмжээ." },
      { termEn: "Le Chatelier's Principle", termMn: "Ле Шательегийн зарчим", definitionEn: "If a change is made to a system at dynamic equilibrium, the position of equilibrium moves to minimise this change.", definitionMn: "Динамик тэнцвэрт буй системд өөрчлөлт хийвэл тэнцвэрийн байрлал уг өөрчлөлтийг багасгах чиглэлд шилжинэ." },
      { termEn: "Equilibrium Constant (Kc)", termMn: "Тэнцвэрийн тогтмол (Kc)", definitionEn: "The ratio of the equilibrium concentrations of products to reactants, each raised to the power of its coefficient.", definitionMn: "Бүтээгдэхүүний тэнцвэрийн концентрацийг эх бодисынхтой харьцуулсан харьцаа, тус бүрийг коэффициентийн зэрэгт дэвшүүлнэ." },
      { termEn: "Partial Pressure", termMn: "Хэсгийн даралт", definitionEn: "The pressure one gas in a mixture would exert if it alone occupied the container; mole fraction × total pressure.", definitionMn: "Хольц дахь нэг хий ганцаараа савыг эзэлсэн үед үзүүлэх даралт; молийн хувь × нийт даралт." },
      { termEn: "Mole Fraction", termMn: "Молийн хувь", definitionEn: "Moles of one gas ÷ total moles of gas in the mixture.", definitionMn: "Нэг хийн моль ÷ хольц дахь хийн нийт моль." },
      { termEn: "Kp", termMn: "Kp", definitionEn: "The equilibrium constant expressed in terms of the partial pressures of gases.", definitionMn: "Хийн хэсгийн даралтаар илэрхийлсэн тэнцвэрийн тогтмол." },
      { termEn: "Brønsted–Lowry Acid", termMn: "Брёнстед–Лоурийн хүчил", definitionEn: "A proton (H⁺) donor.", definitionMn: "Протон (H⁺) өгөгч." },
      { termEn: "Brønsted–Lowry Base", termMn: "Брёнстед–Лоурийн суурь", definitionEn: "A proton (H⁺) acceptor.", definitionMn: "Протон (H⁺) хүлээн авагч." },
      { termEn: "Strong Acid / Base", termMn: "Хүчтэй хүчил / суурь", definitionEn: "An acid or base that is fully dissociated in aqueous solution.", definitionMn: "Усан уусмалд бүрэн диссоциацлагддаг хүчил эсвэл суурь." },
      { termEn: "Weak Acid / Base", termMn: "Сул хүчил / суурь", definitionEn: "An acid or base that is only partially dissociated in aqueous solution.", definitionMn: "Усан уусмалд зөвхөн хэсэгчлэн диссоциацлагддаг хүчил эсвэл суурь." },
      { termEn: "Amphoteric", termMn: "Амфотер", definitionEn: "Able to act as either an acid or a base, e.g. water.", definitionMn: "Хүчил эсвэл суурийн аль алиных нь үүргийг гүйцэтгэж чаддаг, жишээ нь ус." },
      { termEn: "Indicator", termMn: "Индикатор", definitionEn: "A dye that changes colour over a specific pH range.", definitionMn: "Тодорхой pH мужид өнгөө өөрчилдөг будагч бодис." }
    ],
    formulas: [
      { nameEn: "Equilibrium Constant Kc", nameMn: "Тэнцвэрийн тогтмол Kc", formula: "aA + bB ⇌ cC + dD: Kc = [C]ᶜ[D]ᵈ ÷ ([A]ᵃ[B]ᵇ)", note: "Concentrations in mol dm⁻³; omit solids" },
      { nameEn: "Equilibrium Constant Kp", nameMn: "Тэнцвэрийн тогтмол Kp", formula: "Kp = p(C)ᶜ p(D)ᵈ ÷ (p(A)ᵃ p(B)ᵇ)", note: "Partial pressures in Pa; no square brackets" },
      { nameEn: "Partial Pressure", nameMn: "Хэсгийн даралт", formula: "pA = (nA ÷ n total) × p total", note: "Mole fractions add up to 1" },
      { nameEn: "Concentration from Moles", nameMn: "Мольоос концентраци", formula: "[X] = n ÷ V", note: "V in dm³; cancels when terms top and bottom are equal" }
    ],
    examStyleTips: [
      "Dynamic equilibrium: forward rate = backward rate and concentrations constant — never 'the reaction has stopped' or 'concentrations are equal'.",
      "Only temperature changes Kc and Kp; concentration, pressure and catalysts do not.",
      "In Le Chatelier answers state the change, the direction of shift and the reason (fewer gas molecules / endothermic direction).",
      "Kc: coefficients become powers and solids are omitted; divide moles by V unless it cancels; always give units.",
      "Weak means partially dissociated, not dilute.",
      "Choose an indicator whose range lies in the steep part of the pH curve."
    ],
    examQuestions: [
      {
        id: "ch8-q1",
        marks: 4,
        questionEn: "2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH negative, V₂O₅ catalyst.\nState and explain the effect on the position of equilibrium of:\n(a) removing SO₃\n(b) lowering the pressure\n(c) adding more V₂O₅\n(d) increasing the temperature",
        questionMn: "2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH сөрөг, V₂O₅ катализатор.\nДараах өөрчлөлт тэнцвэрийн байрлалд хэрхэн нөлөөлөхийг тайлбарлана уу:\n(a) SO₃-ийг зайлуулах\n(b) даралтыг бууруулах\n(c) V₂O₅ нэмэх\n(d) температурыг өсгөх",
        solutionEn: "(a) Moves right · more SO₃ forms to replace it [1]\n(b) Moves left · towards more gas molecules (3 on the left, 2 on the right) [1]\n(c) No change · a catalyst speeds up both reactions equally [1]\n(d) Moves left · the backward reaction is endothermic [1]",
        solutionMn: "(a) Баруун тийш — зайлуулсан SO₃-ийг нөхнө. (b) Зүүн тийш — хийн молекул олонтой тал (3 > 2). (c) Өөрчлөлтгүй — хоёр урвалыг адилхан хурдасгана. (d) Зүүн тийш — буцах урвал эндотерм.",
        examinerTip: "Each mark needs the direction AND the reason."
      },
      {
        id: "ch8-q2",
        marks: 3,
        questionEn: "Write Kc expressions, with units, for:\n(a) N₂(g) + 3H₂(g) ⇌ 2NH₃(g)\n(b) 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)\n(c) Ag⁺(aq) + Fe²⁺(aq) ⇌ Ag(s) + Fe³⁺(aq)",
        questionMn: "Нэгжтэй Kc илэрхийлэл бичнэ үү:\n(a) N₂(g) + 3H₂(g) ⇌ 2NH₃(g)\n(b) 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)\n(c) Ag⁺(aq) + Fe²⁺(aq) ⇌ Ag(s) + Fe³⁺(aq)",
        solutionEn: "(a) Kc = [NH₃]² ÷ ([N₂][H₂]³) · dm⁶ mol⁻² [1]\n(b) Kc = [SO₃]² ÷ ([SO₂]²[O₂]) · dm³ mol⁻¹ [1]\n(c) Kc = [Fe³⁺] ÷ ([Ag⁺][Fe²⁺]) · dm³ mol⁻¹ (Ag(s) left out) [1]",
        solutionMn: "(a) [NH₃]² ÷ ([N₂][H₂]³), dm⁶ mol⁻². (b) [SO₃]² ÷ ([SO₂]²[O₂]), dm³ mol⁻¹. (c) Хатуу Ag-г оруулахгүй: [Fe³⁺] ÷ ([Ag⁺][Fe²⁺]), dm³ mol⁻¹."
      },
      {
        id: "ch8-q3",
        marks: 3,
        questionEn: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O\nAt equilibrium in 500 cm³ there are 0.235 mol acid, 0.0350 mol ethanol, 0.182 mol ester and 0.182 mol water.\nCalculate Kc.",
        questionMn: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O\n500 cm³-т тэнцвэрт байхад 0.235 моль хүчил, 0.0350 моль этанол, 0.182 моль эфир, 0.182 моль ус байна.\nKc-г тооцоолно уу.",
        solutionEn: "Kc = [ester][H₂O] ÷ ([acid][ethanol]) [1]\nTwo terms top and bottom, so V cancels and moles can be used [1]\nKc = (0.182 × 0.182) ÷ (0.235 × 0.0350) = 4.03 (no units) [1]",
        solutionMn: "Дээд, доод талд хоёр хоёр гишүүн тул V хураагдана. Kc = (0.182 × 0.182) ÷ (0.235 × 0.0350) = 4.03, нэгжгүй."
      },
      {
        id: "ch8-q4",
        marks: 4,
        questionEn: "0.100 mol of A and 0.200 mol of B are mixed in a 2.00 dm³ flask: A + B ⇌ C. At equilibrium 0.040 mol of C is present.\nCalculate Kc, with units.",
        questionMn: "2.00 dm³ колбонд 0.100 моль A, 0.200 моль B холив: A + B ⇌ C. Тэнцвэрт 0.040 моль C байна.\nKc-г нэгжтэй нь тооцоолно уу.",
        solutionEn: "Equilibrium moles: A 0.060 · B 0.160 · C 0.040 [1]\nConcentrations (÷ 2.00): A 0.0300 · B 0.0800 · C 0.0200 mol dm⁻³ [1]\nKc = 0.0200 ÷ (0.0300 × 0.0800) = 8.33 [1]\nUnits dm³ mol⁻¹ [1]",
        solutionMn: "ICE: A 0.100 − 0.040 = 0.060, B 0.200 − 0.040 = 0.160, C 0.040 моль. 2.00 dm³-т хуваавал 0.0300, 0.0800, 0.0200. Kc = 8.33 dm³ mol⁻¹.",
        examinerTip: "Here V does not cancel (1 term on top, 2 below), so you must convert to concentrations."
      },
      {
        id: "ch8-q5",
        marks: 4,
        questionEn: "0.40 mol of PCl₅ is placed in a 2.0 dm³ flask: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). At equilibrium 0.10 mol of Cl₂ is present.\n(a) Calculate Kc, with units. [3]\n(b) State the effect of increasing the pressure on the position of equilibrium. [1]",
        questionMn: "2.0 dm³ колбонд 0.40 моль PCl₅ хийв: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Тэнцвэрт 0.10 моль Cl₂ байна.\n(a) Kc-г нэгжтэй нь тооцоолно уу. [3]\n(b) Даралт ихэсгэхэд тэнцвэрийн байрлал хэрхэн өөрчлөгдөх вэ? [1]",
        solutionEn: "(a) [PCl₅] = 0.30 ÷ 2.0 = 0.15 · [PCl₃] = [Cl₂] = 0.050 mol dm⁻³ [1]\nKc = 0.050² ÷ 0.15 = 0.0167 [1] · mol dm⁻³ [1]\n(b) Moves left · fewer gas molecules (2 → 1) [1]",
        solutionMn: "(a) PCl₅ 0.30 моль үлдэнэ → 0.15; PCl₃ = Cl₂ = 0.050 mol dm⁻³. Kc = 0.050² ÷ 0.15 = 0.0167 mol dm⁻³. (b) Зүүн тийш — хийн молекул цөөтэй тал."
      },
      {
        id: "ch8-q6",
        marks: 3,
        questionEn: "N₂ + 3H₂ ⇌ 2NH₃. The total pressure is 2.000 × 10⁷ Pa; p(N₂) = 1.490 × 10⁷ Pa and p(H₂) = 0.400 × 10⁷ Pa.\nCalculate Kp.",
        questionMn: "N₂ + 3H₂ ⇌ 2NH₃. Нийт даралт 2.000 × 10⁷ Pa; p(N₂) = 1.490 × 10⁷ Pa, p(H₂) = 0.400 × 10⁷ Pa.\nKp-г тооцоолно уу.",
        solutionEn: "p(NH₃) = (2.000 − 1.490 − 0.400) × 10⁷ = 0.110 × 10⁷ Pa [1]\nKp = p(NH₃)² ÷ (p(N₂) × p(H₂)³) [1]\nKp = (0.110 × 10⁷)² ÷ (1.490 × 10⁷ × (0.400 × 10⁷)³) = 1.27 × 10⁻¹⁵ Pa⁻² [1]",
        solutionMn: "Хэсгийн даралтын нийлбэр = нийт даралт тул p(NH₃) = 0.110 × 10⁷ Pa. Kp = 1.27 × 10⁻¹⁵ Pa⁻²."
      },
      {
        id: "ch8-q7",
        marks: 4,
        questionEn: "Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹.\n(a) Why is a temperature higher than 450 °C not used? [2]\n(b) Why is a high pressure used? [1]\n(c) Why is ammonia removed as soon as it forms? [1]",
        questionMn: "Хабер процесс: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹.\n(a) Яагаад 450 °C-аас өндөр температур хэрэглэдэггүй вэ? [2]\n(b) Яагаад өндөр даралт хэрэглэдэг вэ? [1]\n(c) Аммиакийг үүсмэгц яагаад зайлуулдаг вэ? [1]",
        solutionEn: "(a) Forward reaction is exothermic, so a higher temperature moves the position left [1] · lower yield of ammonia (and higher energy cost) [1]\n(b) 4 → 2 gas molecules · higher pressure moves the position right and increases the rate [1]\n(c) Position moves right to replace it, so more NH₃ forms [1]",
        solutionMn: "(a) Шууд урвал экзотерм тул өндөр температурт байрлал зүүн тийш шилжиж гарц буурна. (b) 4 → 2 хийн молекул — өндөр даралт байрлалыг баруун тийш шилжүүлж, хурдыг өсгөнө. (c) Байрлал баруун тийш шилжиж, илүү NH₃ үүснэ."
      },
      {
        id: "ch8-q8",
        marks: 4,
        questionEn: "(a) Explain why water is described as amphoteric, using its reactions with HCl and with NH₃. [2]\n(b) Explain why 0.1 mol dm⁻³ ethanoic acid conducts electricity less well than 0.1 mol dm⁻³ hydrochloric acid. [2]",
        questionMn: "(a) HCl ба NH₃-тай урвалыг ашиглан ус яагаад амфотер болохыг тайлбарлана уу. [2]\n(b) 0.1 mol dm⁻³ этаны хүчил яагаад 0.1 mol dm⁻³ давсны хүчлээс муу дамжуулдгийг тайлбарлана уу. [2]",
        solutionEn: "(a) With HCl water accepts H⁺, so it is a base (H₂O + HCl → H₃O⁺ + Cl⁻) [1]\nWith NH₃ water donates H⁺, so it is an acid (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻) [1]\n(b) Ethanoic acid is weak · only partially dissociated [1]\nSo there are fewer ions to carry the current [1]",
        solutionMn: "(a) HCl-тэй ус H⁺ хүлээн авна — суурь; NH₃-тай ус H⁺ өгнө — хүчил. (b) Этаны хүчил сул — хэсэгчлэн диссоциацлагдана, гүйдэл дамжуулах ион цөөн."
      },
      {
        id: "ch8-q9",
        marks: 4,
        questionEn: "10.0 cm³ of 0.200 mol dm⁻³ HCl is titrated with 0.200 mol dm⁻³ aqueous ammonia.\n(a) At what volume of ammonia is the equivalence point? [1]\n(b) Over roughly what pH range is the curve steep? [1]\n(c) Explain why methyl orange (3.2–4.4) is suitable but phenolphthalein (8.2–10.0) is not. [2]",
        questionMn: "0.200 mol dm⁻³ HCl-ийн 10.0 cm³-ийг 0.200 mol dm⁻³ аммиакийн уусмалаар титрлэв.\n(a) Эквивалентийн цэг аммиакийн ямар эзлэхүүнд байх вэ? [1]\n(b) Муруй ойролцоогоор ямар pH мужид огцом вэ? [1]\n(c) Метил улбар шар (3.2–4.4) яагаад тохирох, фенолфталеин (8.2–10.0) яагаад тохирохгүйг тайлбарлана уу. [2]",
        solutionEn: "(a) 1 : 1 at equal concentrations → 10.0 cm³ [1]\n(b) About pH 3.5 to 7.5 · strong acid with weak base [1]\n(c) Methyl orange changes colour within the steep part [1] · phenolphthalein changes at pH 8.2–10, outside the steep part [1]",
        solutionMn: "(a) 10.0 cm³. (b) Хүчтэй хүчил + сул суурь тул ~pH 3.5–7.5. (c) Метил улбар шарын муж огцом хэсэгт багтана; фенолфталеиных багтахгүй."
      },
      {
        id: "ch8-q10",
        marks: 3,
        questionEn: "Choose a suitable indicator for each titration, or say that none is suitable:\n(a) KOH with butanoic acid (a weak acid)\n(b) NaOH with H₂SO₄\n(c) ethanoic acid with aqueous ammonia",
        questionMn: "Титрлэлт бүрд тохирох индикатор сонгоно уу, эсвэл тохирох индикатор байхгүй гэж хэлнэ үү:\n(a) KOH ба бутаны хүчил (сул хүчил)\n(b) NaOH ба H₂SO₄\n(c) этаны хүчил ба аммиакийн уусмал",
        solutionEn: "(a) Phenolphthalein · weak acid with strong base, steep part pH 7.5–11 [1]\n(b) Almost any · strong acid with strong base, such as bromothymol blue or phenolphthalein [1]\n(c) None · weak acid with weak base has no steep part [1]",
        solutionMn: "(a) Фенолфталеин (сул хүчил + хүчтэй суурь). (b) Бараг ямар ч индикатор (хүчтэй + хүчтэй). (c) Тохирох индикатор байхгүй (сул + сул, огцом хэсэггүй)."
      }
    ]
  },
  {
    id: 9,
    number: 9,
    level: "AS",
    category: "Physical",
    titleEn: "Rates of Reaction",
    titleMn: "Урвалын хурд & Идэвхжлийн энерги",
    descriptionEn: "Measuring rate and converting units, following a reaction, rates from tangents, collision theory, the effect of concentration and pressure, the Boltzmann distribution and temperature, and homogeneous and heterogeneous catalysis (Syllabus 8.1–8.3).",
    descriptionMn: "Урвалын хурдыг хэмжих ба нэгж хувиргах, урвалыг хянах аргууд, шүргэгчээс хурд олох, мөргөлдөөний онол, концентраци ба даралтын нөлөө, Больцманы тархалт ба температур, нэгэн төрлийн ба олон төрлийн катализ (Syllabus 8.1–8.3).",
    syllabusRef: "Syllabus 8.1–8.3",
    examPapers: ["Paper 1", "Paper 2", "Paper 3"],
    learningIntentionsEn: [
      "Define rate of reaction, convert its units and choose a method to follow a reaction",
      "Calculate rates from data and from the gradient of a tangent to a curve",
      "Use collision theory: reactions need effective collisions with energy ≥ EA",
      "Explain the effect of concentration and pressure on rate in terms of collision frequency",
      "Sketch and use the Boltzmann distribution and explain the effect of temperature",
      "Explain catalysis as an alternative pathway with a lower EA, and draw both reaction pathway diagrams",
      "Distinguish homogeneous and heterogeneous catalysts"
    ],
    learningIntentionsMn: [
      "Урвалын хурдыг тодорхойлж, нэгжийг хувиргах, урвалыг хянах аргыг сонгох",
      "Өгөгдөл болон муруйн шүргэгчийн налалтаас хурд тооцоолох",
      "Мөргөлдөөний онолыг хэрэглэх: урвалд энерги ≥ EA бүхий үр дүнтэй мөргөлдөөн хэрэгтэй",
      "Концентраци ба даралтын нөлөөг мөргөлдөөний давтамжаар тайлбарлах",
      "Больцманы тархалтыг зурж хэрэглэх, температурын нөлөөг тайлбарлах",
      "Катализыг EA бага өөр замаар тайлбарлаж, хоёр урвалын замын диаграммыг зурах",
      "Нэгэн төрлийн ба олон төрлийн катализаторыг ялгах"
    ],
    subtopics: [
      {
        id: "9.1",
        number: "9.1",
        titleEn: "Rate of Reaction & Units",
        titleMn: "Урвалын хурд ба нэгж",
        summaryEn: "Rate of reaction is the change in concentration of a reactant or product per unit time, usually in mol dm⁻³ s⁻¹ (min⁻¹ or h⁻¹ for slow reactions). It must be measured by experiment — the equation tells us nothing about rate — and it usually decreases as reactants are used up. Example: 0.254 g of I₂ (= 1.00 × 10⁻³ mol) is used in 1.00 h in 1 dm³ → 1.00 × 10⁻³ ÷ 3600 = 2.78 × 10⁻⁷ mol dm⁻³ s⁻¹. Following a reaction: sampling (remove samples, quench in ice, titrate) or continuous methods — colorimetry (a coloured species such as I₂ or Br₂), conductivity (ions formed or used), gas volume in a syringe or loss of mass, and dilatometry (volume change).",
        summaryMn: "Урвалын хурд нь нэгж хугацаанд эх бодис эсвэл бүтээгдэхүүний концентрацийн өөрчлөлт, ихэвчлэн mol dm⁻³ s⁻¹ (удаан урвалд min⁻¹ эсвэл h⁻¹). Хурдыг туршилтаар хэмжинэ — тэгшитгэл хурдын талаар юу ч хэлэхгүй — эх бодис зарцуулагдах тусам хурд ихэвчлэн буурна. Жишээ: 1 dm³-т 1.00 цагт 0.254 г I₂ (= 1.00 × 10⁻³ моль) зарцуулагдав → 1.00 × 10⁻³ ÷ 3600 = 2.78 × 10⁻⁷ mol dm⁻³ s⁻¹. Урвалыг хянах: дээж авах (дээж авч, мөсөөр зогсоож, титрлэх) эсвэл тасралтгүй арга — колориметр (I₂, Br₂ зэрэг өнгөт бодис), цахилгаан дамжуулалт (ион үүсэх эсвэл зарцуулагдах), тариурт хийн эзлэхүүн эсвэл массын алдагдал, дилатометр (эзлэхүүний өөрчлөлт).",
        keyConcepts: ["Units: mol dm⁻³ s⁻¹", "Convert minutes and hours to seconds", "Colour → colorimetry · ions → conductivity · gas → syringe or mass loss", "Rate decreases as reactants are used up"],
        keyEquations: ["rate = change in concentration ÷ time", "1.00 × 10⁻³ ÷ 3600 = 2.78 × 10⁻⁷ mol dm⁻³ s⁻¹"],
        commonPitfalls: [
          "Convert the time to seconds and the amount to a concentration before giving the rate in mol dm⁻³ s⁻¹."
        ]
      },
      {
        id: "9.2",
        number: "9.2",
        titleEn: "Rates from Graphs: Tangents",
        titleMn: "Графикаас хурд олох: шүргэгч",
        summaryEn: "The average rate over an interval is Δ[ ] ÷ Δt. The rate at an instant is the gradient of the tangent to the concentration–time curve at that time; the initial rate is the tangent at t = 0. As the curve gets shallower, the rate decreases; when it is flat the reaction has stopped (a reactant is used up). Example: for cyclopropane → propene the tangent at 10 min falls 1.40 mol dm⁻³ over 35 min → −1.40 ÷ (35 × 60) = −6.67 × 10⁻⁴ mol dm⁻³ s⁻¹. Rate ÷ [cyclopropane] is constant, so rate ∝ [cyclopropane]. For CaCO₃ + HCl the volume of CO₂ levels off at 45 cm³ when CaCO₃ (the limiting reagent) is used up; doubling the acid concentration doubles the initial gradient but gives the same final volume.",
        summaryMn: "Хугацааны интервал дахь дундаж хурд = Δ[ ] ÷ Δt. Тухайн агшин дахь хурд нь тэр үеийн концентраци–хугацааны муруйн шүргэгчийн налалт; эхний хурд нь t = 0 дахь шүргэгч. Муруй намсах тусам хурд буурна; хэвтээ болбол урвал зогссон (эх бодис дууссан). Жишээ: циклопропан → пропен урвалд 10 мин дэх шүргэгч 35 минутад 1.40 mol dm⁻³ буурна → −1.40 ÷ (35 × 60) = −6.67 × 10⁻⁴ mol dm⁻³ s⁻¹. Хурд ÷ [циклопропан] тогтмол тул хурд ∝ [циклопропан]. CaCO₃ + HCl урвалд хязгаарлагч CaCO₃ дуусахад CO₂-ийн эзлэхүүн 45 cm³-т тогтоно; хүчлийн концентрацийг хоёр дахин өсгөхөд эхний налалт хоёр дахин өсөх ч эцсийн эзлэхүүн ижил.",
        keyConcepts: ["Instantaneous rate = gradient of tangent", "Initial rate: tangent at t = 0", "Flat line: a reactant used up", "Same limiting reagent → same final volume"],
        keyEquations: ["gradient = Δy ÷ Δx", "−1.40 ÷ (35 × 60) = −6.67 × 10⁻⁴ mol dm⁻³ s⁻¹"],
        commonPitfalls: [
          "Convert minutes to seconds and give the gradient with units (and a sign for a reactant).",
          "Draw the tangent so that it touches the curve at one point only, and make the triangle large."
        ]
      },
      {
        id: "9.3",
        number: "9.3",
        titleEn: "Collision Theory, Concentration & Pressure",
        titleMn: "Мөргөлдөөний онол, концентраци ба даралт",
        summaryEn: "Particles react only if they collide with the correct orientation and with energy ≥ the activation energy EA (an effective collision); otherwise they bounce apart unchanged. EA is the minimum energy colliding particles need to react. The rate increases if either the frequency of collisions or the proportion of collisions with E ≥ EA increases. Higher concentration (or higher pressure for gases) means more particles per unit volume, so collisions are more frequent (more per second) and there are more effective collisions per second; the energy of the particles is unchanged. A larger surface area (powder) gives more frequent collisions at the surface. The volume of acid used does not affect the rate if the concentration is the same.",
        summaryMn: "Бөөмс зөв чиглэлээр, идэвхжүүлэлтийн энерги EA-аас их буюу тэнцүү энергитэй мөргөлдвөл (үр дүнтэй мөргөлдөөн) л урвалд орно; эс бөгөөс өөрчлөгдөлгүй ойно. EA нь мөргөлдөж буй бөөмс урвалд ороход хэрэгтэй хамгийн бага энерги. Мөргөлдөөний давтамж эсвэл E ≥ EA бүхий мөргөлдөөний эзлэх хувь өсвөл хурд өснө. Өндөр концентраци (хийд өндөр даралт) нь нэгж эзлэхүүнд илүү олон бөөм гэсэн үг тул мөргөлдөөн илүү давтамжтай (секундэд илүү олон), секундэд үр дүнтэй мөргөлдөөн олон болно; бөөмсийн энерги өөрчлөгдөхгүй. Гадаргуугийн талбай их (нунтаг) бол гадаргуу дээрх мөргөлдөөн илүү давтамжтай. Концентраци ижил бол хүчлийн эзлэхүүн хурдад нөлөөлөхгүй.",
        keyConcepts: ["Effective collision: E ≥ EA and correct orientation", "Concentration/pressure ↑ → collision frequency ↑", "Surface area ↑ → more frequent collisions", "Particle energy unchanged by concentration"],
        commonPitfalls: [
          "Say 'more FREQUENT collisions' (more collisions per second), not just 'more collisions'.",
          "Increasing concentration does not give particles more energy."
        ]
      },
      {
        id: "9.4",
        number: "9.4",
        titleEn: "The Boltzmann Distribution & Temperature",
        titleMn: "Больцманы тархалт ба температур",
        summaryEn: "The Boltzmann distribution shows the number of molecules (y-axis) with each molecular energy (x-axis) at a given temperature. The curve starts at the origin, has a skewed peak and never touches the x-axis at high energy; the area under it equals the total number of molecules, and the area to the right of EA shows the molecules that can react. At a higher temperature the curve is flatter, the peak is lower and moves to the right, the area stays the same and EA is unchanged — but many more molecules have E ≥ EA. Higher temperature increases the rate because (1) collisions are more frequent and (2), much more importantly, a larger proportion of molecules have E ≥ EA. A 10 °C rise roughly doubles the rate of many reactions.",
        summaryMn: "Больцманы тархалт нь тухайн температурт молекулын энерги бүр (x тэнхлэг) бүхий молекулын тоог (y тэнхлэг) харуулна. Муруй координатын эхээс эхэлж, хазгай оргилтой, өндөр энергид x тэнхлэгт хэзээ ч хүрэхгүй; доорх талбай = нийт молекулын тоо, EA-аас баруун талын талбай = урвалд орж чадах молекулууд. Өндөр температурт муруй намжиж, оргил доошлон баруун тийш шилжинэ, талбай ижил, EA өөрчлөгдөхгүй — харин E ≥ EA бүхий молекул хамаагүй олон болно. Өндөр температур хурдыг өсгөх шалтгаан: (1) мөргөлдөөн илүү давтамжтай, (2) хамгийн чухал нь E ≥ EA бүхий молекулын эзлэх хувь их болно. 10 °C өсөхөд олон урвалын хурд ойролцоогоор хоёр дахин өснө.",
        keyConcepts: ["Axes: number of molecules vs molecular energy", "Starts at origin, never touches x-axis", "Higher T: peak lower and to the right, same area", "Main reason: more molecules with E ≥ EA"],
        commonPitfalls: [
          "At higher temperature the peak is LOWER (and to the right), not higher; EA does not move.",
          "Give both reasons for the temperature effect, saying the proportion with E ≥ EA is the main one.",
          "The curve must start at the origin and never touch the x-axis."
        ]
      },
      {
        id: "9.5",
        number: "9.5",
        titleEn: "Catalysis",
        titleMn: "Катализ",
        summaryEn: "A catalyst increases the rate of a reaction and is chemically unchanged at the end. It provides an alternative pathway (mechanism) with a lower activation energy, so a greater proportion of molecules have E ≥ EA(cat) and there are more effective collisions per second. On a Boltzmann distribution the curve is unchanged and EA(cat) is marked to the left of EA; the extra area between them shows the extra molecules that can react. On a pathway diagram the catalysed hump is lower, but the reactant and product levels — and ΔH — are the same. A homogeneous catalyst is in the same phase as the reactants (e.g. H⁺(aq) in ester hydrolysis); a heterogeneous catalyst is in a different phase, usually a solid with reaction at its surface: Fe (Haber), Ni (margarine), V₂O₅ (Contact), MnO₂ with H₂O₂. If EA(forward) = 335 and ΔH = +92 kJ mol⁻¹, then EA(reverse) = 335 − 92 = 243 kJ mol⁻¹.",
        summaryMn: "Катализатор урвалын хурдыг өсгөж, эцэст нь химийн хувьд өөрчлөгдөлгүй үлдэнэ. Энэ нь идэвхжүүлэлтийн энерги бага өөр зам (механизм) олгодог тул E ≥ EA(кат) бүхий молекулын эзлэх хувь өсч, секундэд үр дүнтэй мөргөлдөөн олон болно. Больцманы тархалтад муруй өөрчлөгдөхгүй, EA(кат)-ыг EA-аас зүүн талд тэмдэглэнэ; хоёрын хоорондох нэмэлт талбай нь урвалд орж чадах нэмэлт молекулууд. Урвалын замын диаграммд катализтай оргил нам боловч эх бодис ба бүтээгдэхүүний түвшин, ΔH ижил. Нэгэн төрлийн катализатор эх бодистой ижил фазад (жишээ нь эфирийн гидролиз дахь H⁺(aq)); олон төрлийн катализатор өөр фазад, ихэвчлэн хатуу, урвал гадаргуу дээр нь явагдана: Fe (Хабер), Ni (маргарин), V₂O₅ (Контакт), H₂O₂-тэй MnO₂. EA(шууд) = 335, ΔH = +92 kJ mol⁻¹ бол EA(буцах) = 335 − 92 = 243 kJ mol⁻¹.",
        keyConcepts: ["Alternative pathway with lower EA", "Boltzmann curve unchanged; EA(cat) to the left", "ΔH unchanged", "Homogeneous: same phase · heterogeneous: different phase"],
        keyEquations: ["EA(reverse) = EA(forward) − ΔH", "2H₂O₂ → 2H₂O + O₂ (MnO₂ catalyst)"],
        commonPitfalls: [
          "Say a catalyst 'provides an alternative pathway with a lower EA' — not just 'lowers the activation energy'.",
          "A catalyst does not shift the Boltzmann curve or change ΔH."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Rate of Reaction", termMn: "Урвалын хурд", definitionEn: "The change in concentration of a reactant or product per unit time, in mol dm⁻³ s⁻¹.", definitionMn: "Нэгж хугацаанд эх бодис эсвэл бүтээгдэхүүний концентрацийн өөрчлөлт, mol dm⁻³ s⁻¹." },
      { termEn: "Activation Energy (EA)", termMn: "Идэвхжүүлэлтийн энерги (EA)", definitionEn: "The minimum energy colliding particles need for an effective collision that leads to reaction.", definitionMn: "Мөргөлдөж буй бөөмс урвалд хүргэх үр дүнтэй мөргөлдөөнд шаардагдах хамгийн бага энерги." },
      { termEn: "Effective Collision", termMn: "Үр дүнтэй мөргөлдөөн", definitionEn: "A collision with energy ≥ EA and the correct orientation, which leads to reaction.", definitionMn: "EA-аас их буюу тэнцүү энергитэй, зөв чиглэлтэй, урвалд хүргэх мөргөлдөөн." },
      { termEn: "Frequency of Collisions", termMn: "Мөргөлдөөний давтамж", definitionEn: "The number of collisions per unit time (per second).", definitionMn: "Нэгж хугацаанд (секундэд) болох мөргөлдөөний тоо." },
      { termEn: "Boltzmann Distribution", termMn: "Больцманы тархалт", definitionEn: "A graph showing the number of molecules with each molecular energy in a sample at a given temperature.", definitionMn: "Тухайн температурт дээж дэх молекулын энерги бүр бүхий молекулын тоог харуулсан график." },
      { termEn: "Catalyst", termMn: "Катализатор", definitionEn: "A substance that increases the rate of a reaction by providing an alternative pathway with a lower activation energy, and is chemically unchanged at the end.", definitionMn: "Идэвхжүүлэлтийн энерги бага өөр зам олгож урвалыг хурдасгадаг, эцэст нь химийн хувьд өөрчлөгдөлгүй үлддэг бодис." },
      { termEn: "Homogeneous Catalyst", termMn: "Нэгэн төрлийн катализатор", definitionEn: "A catalyst in the same phase as the reactants.", definitionMn: "Эх бодистой ижил фазад байгаа катализатор." },
      { termEn: "Heterogeneous Catalyst", termMn: "Олон төрлийн катализатор", definitionEn: "A catalyst in a different phase from the reactants, usually a solid with gaseous or liquid reactants.", definitionMn: "Эх бодисоос өөр фазад байгаа катализатор, ихэвчлэн хий эсвэл шингэн эх бодистой хатуу бодис." }
    ],
    formulas: [
      { nameEn: "Rate of Reaction", nameMn: "Урвалын хурд", formula: "rate = Δ[ ] ÷ Δt", note: "mol dm⁻³ s⁻¹; instantaneous rate = gradient of tangent" },
      { nameEn: "Reverse Activation Energy", nameMn: "Буцах урвалын идэвхжүүлэлтийн энерги", formula: "EA(reverse) = EA(forward) − ΔH(forward)", note: "e.g. EA 120, ΔH −40 → EA(reverse) 160 kJ mol⁻¹" }
    ],
    examStyleTips: [
      "Concentration and pressure: 'more frequent collisions' (more collisions per second) — not just 'more collisions'.",
      "Temperature: more frequent collisions AND a greater proportion of molecules with E ≥ EA — the second is the main reason.",
      "Catalyst: 'provides an alternative pathway with a lower EA'; ΔH and the Boltzmann curve are unchanged.",
      "Boltzmann curve: label the axes, start at the origin, never touch the x-axis; at higher T the peak is lower and to the right.",
      "Tangent gradients: convert time to seconds and give units.",
      "Compare in answers: 'greater rate', 'faster reaction' — not just 'it is fast'."
    ],
    examQuestions: [
      {
        id: "ch9-q1",
        marks: 2,
        questionEn: "0.254 g of iodine is used up in 1.00 h in a reaction mixture of volume 1 dm³.\nExpress the rate in mol dm⁻³ s⁻¹. (Ar: I = 127)",
        questionMn: "1 dm³ урвалын хольцонд 1.00 цагт 0.254 г иод зарцуулагдав.\nХурдыг mol dm⁻³ s⁻¹-ээр илэрхийлнэ үү. (Ar: I = 127)",
        solutionEn: "n(I₂) = 0.254 ÷ 254 = 1.00 × 10⁻³ mol → 1.00 × 10⁻³ mol dm⁻³ [1]\nRate = 1.00 × 10⁻³ ÷ 3600 = 2.78 × 10⁻⁷ mol dm⁻³ s⁻¹ [1]",
        solutionMn: "I₂-ийн Mr = 254, моль = 1.00 × 10⁻³ → 1 dm³-т 1.00 × 10⁻³ mol dm⁻³. 1.00 цаг = 3600 с. Хурд = 2.78 × 10⁻⁷ mol dm⁻³ s⁻¹."
      },
      {
        id: "ch9-q2",
        marks: 3,
        questionEn: "Suggest a method to follow each reaction:\n(a) H₂O₂ + 2I⁻ + 2H⁺ → 2H₂O + I₂\n(b) 2H₂O₂ → 2H₂O + O₂(g)\n(c) (CH₃)₃CBr + H₂O → (CH₃)₃COH + H⁺ + Br⁻",
        questionMn: "Урвал бүрийг хянах аргыг санал болгоно уу:\n(a) H₂O₂ + 2I⁻ + 2H⁺ → 2H₂O + I₂\n(b) 2H₂O₂ → 2H₂O + O₂(g)\n(c) (CH₃)₃CBr + H₂O → (CH₃)₃COH + H⁺ + Br⁻",
        solutionEn: "(a) Colorimetry · brown I₂ forms [1]\n(b) Gas syringe · volume of O₂ (or loss of mass) [1]\n(c) Conductivity · ions are formed [1]",
        solutionMn: "(a) Колориметр — бор I₂ үүснэ. (b) Хийн тариур — O₂-ийн эзлэхүүн (эсвэл массын алдагдал). (c) Цахилгаан дамжуулалт — ионууд үүснэ."
      },
      {
        id: "ch9-q3",
        marks: 4,
        questionEn: "0.1875 g of CaCO₃ (Mr 100.1) reacts with 40 cm³ of 0.100 mol dm⁻³ HCl. The volume of CO₂ is 9 cm³ after 10 s, 27.5 cm³ at 40 s, 32 cm³ at 50 s and 45 cm³ from 100 s onward.\n(a) Calculate the average rates for 0–10 s and 40–50 s. [2]\n(b) Show which reagent is limiting. [2]",
        questionMn: "0.1875 г CaCO₃ (Mr 100.1) 0.100 mol dm⁻³ HCl-ийн 40 cm³-тэй урвалд орно. CO₂-ийн эзлэхүүн 10 с-д 9 cm³, 40 с-д 27.5 cm³, 50 с-д 32 cm³, 100 с-ээс хойш 45 cm³.\n(a) 0–10 с ба 40–50 с-ийн дундаж хурдыг тооцоолно уу. [2]\n(b) Аль бодис хязгаарлагч болохыг харуулна уу. [2]",
        solutionEn: "(a) 0–10 s: 9 ÷ 10 = 0.90 cm³ s⁻¹ [1] · 40–50 s: 4.5 ÷ 10 = 0.45 cm³ s⁻¹, so the rate has halved [1]\n(b) n(CaCO₃) = 1.87 × 10⁻³ mol · n(HCl) = 4.00 × 10⁻³ mol [1]\nCaCO₃ needs 3.75 × 10⁻³ mol HCl < 4.00 × 10⁻³, so CaCO₃ is limiting (max 45 cm³ CO₂) [1]",
        solutionMn: "(a) 0.90 ба 0.45 cm³ s⁻¹ — хурд хоёр дахин буурсан. (b) CaCO₃ 1.87 × 10⁻³ моль-д 3.75 × 10⁻³ моль HCl хэрэгтэй, 4.00 × 10⁻³ байгаа тул CaCO₃ хязгаарлагч."
      },
      {
        id: "ch9-q4",
        marks: 3,
        questionEn: "For the same CaCO₃ + HCl reaction:\n(a) How would you find the rate at 40 s? [1]\n(b) Describe the new curve if the acid concentration were doubled, with CaCO₃ still limiting. [2]",
        questionMn: "Дээрх CaCO₃ + HCl урвалын хувьд:\n(a) 40 с дэх хурдыг яаж олох вэ? [1]\n(b) CaCO₃ хязгаарлагч хэвээр байхад хүчлийн концентрацийг хоёр дахин өсгөвөл шинэ муруй ямар байх вэ? [2]",
        solutionEn: "(a) Draw a tangent at 40 s and find its gradient, Δy ÷ Δx [1]\n(b) Steeper at the start (greater initial rate) [1] · levels off at the same 45 cm³ [1]",
        solutionMn: "(a) 40 с-д шүргэгч татаж налалтыг олно. (b) Эхэндээ илүү огцом, гэхдээ ижил 45 cm³-т тогтоно (CaCO₃ ижил)."
      },
      {
        id: "ch9-q5",
        marks: 2,
        questionEn: "Explain why reactants in solution react faster at a higher concentration.",
        questionMn: "Уусмал дахь эх бодисууд яагаад өндөр концентрацид хурдан урвалд ордгийг тайлбарлана уу.",
        solutionEn: "More particles per unit volume · so collisions are more frequent [1]\nMore effective collisions per second (the energy of the particles is unchanged) [1]",
        solutionMn: "Нэгж эзлэхүүнд бөөм олон тул мөргөлдөөн илүү давтамжтай; секундэд үр дүнтэй мөргөлдөөн олон болно (бөөмсийн энерги өөрчлөгдөхгүй)."
      },
      {
        id: "ch9-q6",
        marks: 6,
        questionEn: "(a) Sketch the Boltzmann distribution for a gas and label the axes. [2]\n(b) Draw a second curve for a slightly higher temperature. [2]\n(c) Use your sketch to explain why the reaction is faster at the higher temperature. [2]",
        questionMn: "(a) Хийн Больцманы тархалтыг зурж, тэнхлэгүүдийг тэмдэглэнэ үү. [2]\n(b) Арай өндөр температурын хоёр дахь муруйг зурна уу. [2]\n(c) Өндөр температурт урвал яагаад хурдан явагдахыг зургаараа тайлбарлана уу. [2]",
        solutionEn: "(a) Vertical axis: number of molecules · horizontal axis: molecular energy [1] · starts at the origin, skewed peak, never touches the energy axis [1]\n(b) Peak lower and moved to the right [1] · above the first curve at high energy, same area [1]\n(c) Much larger proportion of molecules with E ≥ EA (main reason) [1] · collisions also more frequent [1]",
        solutionMn: "(a) y — молекулын тоо, x — молекулын энерги; эхээс эхэлж, хазгай оргилтой, x тэнхлэгт хүрэхгүй. (b) Оргил доошилж баруун тийш шилжинэ, өндөр энергид эхний муруйгаас дээгүүр, талбай ижил. (c) E ≥ EA бүхий молекулын хувь хамаагүй их (гол шалтгаан), мөргөлдөөн илүү давтамжтай.",
        examinerTip: "Drawing the higher-temperature peak taller is the most common error."
      },
      {
        id: "ch9-q7",
        marks: 3,
        questionEn: "(a) What is a catalyst? [1]\n(b) Explain how a catalyst increases the rate of a reaction, referring to the Boltzmann distribution. [2]",
        questionMn: "(a) Катализатор гэж юу вэ? [1]\n(b) Больцманы тархалтыг ашиглан катализатор урвалын хурдыг хэрхэн өсгөдгийг тайлбарлана уу. [2]",
        solutionEn: "(a) A substance that increases the rate and is chemically unchanged at the end [1]\n(b) Provides an alternative pathway with a lower activation energy [1]\nA greater proportion of molecules have E ≥ EA(cat), so there are more effective collisions per second [1]",
        solutionMn: "(a) Хурдыг өсгөж, эцэст нь химийн хувьд өөрчлөгдөлгүй үлддэг бодис. (b) Идэвхжүүлэлтийн энерги бага өөр зам олгоно; муруй өөрчлөгдөхгүй ч E ≥ EA(кат) бүхий молекулын хувь өсч, үр дүнтэй мөргөлдөөн олширно."
      },
      {
        id: "ch9-q8",
        marks: 3,
        questionEn: "The uncatalysed decomposition of ammonia, 2NH₃(g) → N₂(g) + 3H₂(g), has EA = +335 kJ mol⁻¹ and ΔH = +92 kJ mol⁻¹.\n(a) Calculate the activation energy for the formation of ammonia from N₂ and H₂. [2]\n(b) How does a tungsten catalyst affect the activation energy? [1]",
        questionMn: "Аммиакийн катализгүй задрал 2NH₃(g) → N₂(g) + 3H₂(g)-ийн EA = +335 kJ mol⁻¹, ΔH = +92 kJ mol⁻¹.\n(a) N₂ ба H₂-оос аммиак үүсэх урвалын идэвхжүүлэлтийн энергийг тооцоолно уу. [2]\n(b) Вольфрам катализатор идэвхжүүлэлтийн энергид хэрхэн нөлөөлөх вэ? [1]",
        solutionEn: "(a) Products are 92 above the reactants and the peak is 335 above the reactants [1]\nEA(formation of NH₃) = 335 − 92 = 243 kJ mol⁻¹ [1]\n(b) It is lower · alternative pathway (in both directions) [1]",
        solutionMn: "(a) Бүтээгдэхүүн эх бодисоос 92-оор дээр, оргил 335-аар дээр тул буцах урвалын EA = 335 − 92 = 243 kJ mol⁻¹. (b) Буурна — өөр зам (хоёр чиглэлд)."
      },
      {
        id: "ch9-q9",
        marks: 2,
        questionEn: "State whether each catalyst is homogeneous or heterogeneous, and explain:\n(a) V₂O₅(s) in 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)\n(b) H⁺(aq) in the hydrolysis of an ester in aqueous solution",
        questionMn: "Катализатор бүр нэгэн төрлийн үү, олон төрлийн үү? Тайлбарлана уу:\n(a) 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) дахь V₂O₅(s)\n(b) усан уусмал дахь эфирийн гидролиз дахь H⁺(aq)",
        solutionEn: "(a) Heterogeneous · solid catalyst with gaseous reactants [1]\n(b) Homogeneous · catalyst and reactants are all in aqueous solution [1]",
        solutionMn: "(a) Олон төрлийн — хатуу катализатор, хийн эх бодис. (b) Нэгэн төрлийн — бүгд усан уусмалд."
      },
      {
        id: "ch9-q10",
        marks: 3,
        questionEn: "Exit ticket:\n(a) [H₂O₂] falls from 0.100 to 0.080 mol dm⁻³ in the first 40 s. Calculate the average rate. [1]\n(b) Use the Boltzmann distribution to explain why the reaction is faster at 40 °C than at 20 °C. [2]",
        questionMn: "(a) Эхний 40 с-д [H₂O₂] 0.100-аас 0.080 mol dm⁻³ болж буурав. Дундаж хурдыг тооцоолно уу. [1]\n(b) Урвал яагаад 20 °C-аас 40 °C-д хурдан явагддагийг Больцманы тархалтаар тайлбарлана уу. [2]",
        solutionEn: "(a) 0.020 ÷ 40 = 5.0 × 10⁻⁴ mol dm⁻³ s⁻¹ [1]\n(b) A larger proportion of molecules have E ≥ EA (main reason) [1] · collisions are more frequent [1]",
        solutionMn: "(a) 0.020 ÷ 40 = 5.0 × 10⁻⁴ mol dm⁻³ s⁻¹. (b) E ≥ EA бүхий молекулын хувь их (гол шалтгаан), мөргөлдөөн илүү давтамжтай."
      }
    ]
  },
  {
    id: 10,
    number: 10,
    level: "AS",
    category: "Inorganic",
    titleEn: "Periodicity: Period 3 Elements & Compounds",
    titleMn: "Үелэх хууль (3-р үеийн элементүүд ба тэдгээрийн нэгдлүүд)",
    descriptionEn: "Period 3 trends in atomic and ionic radius, melting point, conductivity and ionisation energy; reactions of the elements with oxygen, chlorine and water; oxidation numbers of oxides and chlorides; and the acid–base behaviour of the oxides and chlorides with water (Syllabus 9.1–9.3).",
    descriptionMn: "3-р үеийн атом ба ионы радиус, хайлах цэг, цахилгаан дамжуулалт, иончлолын энергийн хандлага; элементүүдийн хүчилтөрөгч, хлор, устай урвал; исэл ба хлоридын исэлдэхүйн зэрэг; исэл ба хлоридын устай харилцан үйлчлэх хүчил–суурийн шинж (Syllabus 9.1–9.3).",
    syllabusRef: "Syllabus 9.1–9.3",
    examPapers: ["Paper 1", "Paper 2"],
    learningIntentionsEn: [
      "Explain the trends across Period 3 in atomic radius, ionic radius, melting point, electrical conductivity and first ionisation energy",
      "Write equations for the reactions of Period 3 elements with oxygen, chlorine and water",
      "Explain the oxidation numbers of the oxides and chlorides in terms of outer-shell electrons",
      "Describe the reactions of the oxides with water and their acid–base behaviour, with pH values",
      "Describe the amphoteric behaviour of Al₂O₃ and Al(OH)₃ with equations",
      "Describe the reactions of the chlorides with water, with pH values, and explain them by bonding and electronegativity",
      "Deduce the position of an unknown element from its properties and predict the properties of an element"
    ],
    learningIntentionsMn: [
      "3-р үеийн дагуух атомын радиус, ионы радиус, хайлах цэг, цахилгаан дамжуулалт, нэгдүгээр иончлолын энергийн хандлагыг тайлбарлах",
      "3-р үеийн элементүүдийн хүчилтөрөгч, хлор, устай урвалын тэгшитгэл бичих",
      "Исэл ба хлоридын исэлдэхүйн зэргийг гадна бүрхүүлийн электроноор тайлбарлах",
      "Ислүүдийн устай урвал ба хүчил–суурийн шинжийг pH-тай нь тодорхойлох",
      "Al₂O₃ ба Al(OH)₃-ийн амфотер шинжийг тэгшитгэлээр харуулах",
      "Хлоридуудын устай урвалыг pH-тай нь тодорхойлж, холбоо ба цахилгаан сөрөг чанараар тайлбарлах",
      "Үл мэдэгдэх элементийн байрлалыг шинж чанараас нь тодорхойлох, элементийн шинжийг урьдчилан хэлэх"
    ],
    subtopics: [
      {
        id: "10.1",
        number: "10.1",
        titleEn: "Atomic & Ionic Radius Across Period 3",
        titleMn: "3-р үеийн атом ба ионы радиус",
        summaryEn: "Periodicity is a repeating pattern of properties across each period. Atomic radius decreases from Na (0.157 nm) to Cl (0.099 nm): the nuclear charge increases by one each element, electrons are added to the same shell and shielding stays about the same, so the outer electrons are pulled closer. Cations Na⁺ → Si⁴⁺ have lost the third shell (2, 8) and get smaller as nuclear charge increases. Anions P³⁻ → Cl⁻ have an extra shell (2, 8, 8), so they are much larger than the cations, and they also get smaller across. Down a group atomic radius increases (extra shells, more shielding).",
        summaryMn: "Үелэх чанар нь үе бүрийн дагуу давтагдах шинж чанарын хэв маяг. Атомын радиус Na (0.157 нм)-аас Cl (0.099 нм) хүртэл буурна: цөмийн цэнэг элемент бүрт нэгээр өсөж, электронууд ижил бүрхүүлд нэмэгдэн, халхлалт ойролцоо хэвээр байх тул гадна электронууд ойр татагдана. Na⁺ → Si⁴⁺ катионууд 3-р бүрхүүлээ алдсан (2, 8) бөгөөд цөмийн цэнэг өсөхөд жижгэрнэ. P³⁻ → Cl⁻ анионууд нэмэлт бүрхүүлтэй (2, 8, 8) тул катионоос хамаагүй том, мөн үеийн дагуу жижгэрнэ. Бүлгийн дагуу доош атомын радиус өснө (нэмэлт бүрхүүл, халхлалт их).",
        keyConcepts: ["Radius ↓ across: nuclear charge ↑, same shell, similar shielding", "Cations: 2 shells (2, 8)", "Anions: 3 shells (2, 8, 8) → larger", "Radius ↑ down a group"],
        commonPitfalls: [
          "Do not say 'more electrons so smaller' — explain with nuclear charge, same shell and similar shielding."
        ]
      },
      {
        id: "10.2",
        number: "10.2",
        titleEn: "Melting Point, Conductivity & Ionisation Energy",
        titleMn: "Хайлах цэг, цахилгаан дамжуулалт ба иончлолын энерги",
        summaryEn: "Na, Mg, Al are giant metallic (m.p. 371, 923, 932 K; good conductors that improve Na → Al): more delocalised electrons per atom and higher ion charge give stronger metallic bonding. Si is giant covalent (1683 K, the highest): many strong covalent bonds must be broken; it is a semiconductor. P₄, S₈ and Cl₂ are simple molecular (317, 392, 172 K; insulators): only weak instantaneous dipole–induced dipole forces between molecules are overcome; S₈ > P₄ > Cl₂ because more electrons give stronger id–id forces. Ar exists as single atoms (84 K). First IE generally increases across the period (nuclear charge ↑, same shell) with dips at Al (3p electron, shielded by 3s) and S (paired 3p electron, spin-pair repulsion): Na 494, Mg 736, Al 577, Si 786, P 1060, S 1000, Cl 1260, Ar 1520 kJ mol⁻¹.",
        summaryMn: "Na, Mg, Al нь металлын аварга тор (хайлах цэг 371, 923, 932 K; сайн дамжуулагч, Na → Al сайжирна): нэг атомд ногдох чөлөөт электрон олон, ионы цэнэг өндөр тул металлын холбоо хүчтэй. Si нь аварга ковалент (1683 K, хамгийн өндөр): олон хүчтэй ковалент холбоог таслах хэрэгтэй; хагас дамжуулагч. P₄, S₈, Cl₂ нь энгийн молекул (317, 392, 172 K; тусгаарлагч): зөвхөн молекулуудын хоорондох сул id–id хүчийг даван гарна; электрон олон байх тусам id–id хүч хүчтэй тул S₈ > P₄ > Cl₂. Ar нь ганц атом (84 K). Нэгдүгээр IE үеийн дагуу ерөнхийдөө өснө (цөмийн цэнэг ↑, ижил бүрхүүл), Al (3s-ээр халхлагдсан 3p электрон) ба S (хостой 3p электрон, спин хосын түлхэлт) дээр уналттай: Na 494, Mg 736, Al 577, Si 786, P 1060, S 1000, Cl 1260, Ar 1520 kJ mol⁻¹.",
        keyConcepts: ["Metallic (Na–Al) → giant covalent (Si) → simple molecular (P, S, Cl) → atoms (Ar)", "Si has the highest m.p.", "S₈ > P₄ > Cl₂: more electrons, stronger id–id", "IE₁ dips at Al and S"],
        commonPitfalls: [
          "P, S and Cl have low melting points because of weak id–id forces BETWEEN molecules — the covalent bonds are strong and do not break.",
          "Si's high melting point is due to many strong covalent bonds in a giant structure — not 'strong intermolecular forces'.",
          "Conductivity increases Na → Al because there are more delocalised electrons per atom, not 'more ions'."
        ]
      },
      {
        id: "10.3",
        number: "10.3",
        titleEn: "Reactions of the Elements with Oxygen, Chlorine & Water",
        titleMn: "Элементүүдийн хүчилтөрөгч, хлор, устай урвал",
        summaryEn: "With oxygen: 4Na + O₂ → 2Na₂O (vigorous, yellow flame); 2Mg + O₂ → 2MgO (bright white flame); 4Al + 3O₂ → 2Al₂O₃ (powder burns); Si + O₂ → SiO₂ (slow); 4P + 5O₂ → P₄O₁₀ (white clouds); S + O₂ → SO₂ (gentle blue flame, toxic gas). With chlorine: 2Na + Cl₂ → 2NaCl and Mg + Cl₂ → MgCl₂ (ionic white solids); 2Al + 3Cl₂ → Al₂Cl₆ (covalent dimer); Si + 2Cl₂ → SiCl₄ (covalent liquid); 2P + 5Cl₂ → 2PCl₅ (excess Cl₂). With water: 2Na + 2H₂O → 2NaOH + H₂ (vigorous, melts, pH ≈ 14); Mg reacts very slowly with cold water (Mg + 2H₂O → Mg(OH)₂ + H₂, pH ≈ 11) but vigorously with steam (Mg + H₂O(g) → MgO + H₂).",
        summaryMn: "Хүчилтөрөгчтэй: 4Na + O₂ → 2Na₂O (хүчтэй, шар дөл); 2Mg + O₂ → 2MgO (тод цагаан дөл); 4Al + 3O₂ → 2Al₂O₃ (нунтаг шатна); Si + O₂ → SiO₂ (удаан); 4P + 5O₂ → P₄O₁₀ (цагаан утаа); S + O₂ → SO₂ (зөөлөн цэнхэр дөл, хортой хий). Хлортой: 2Na + Cl₂ → 2NaCl ба Mg + Cl₂ → MgCl₂ (ионы цагаан хатуу бодис); 2Al + 3Cl₂ → Al₂Cl₆ (ковалент димер); Si + 2Cl₂ → SiCl₄ (ковалент шингэн); 2P + 5Cl₂ → 2PCl₅ (Cl₂ илүүдэлтэй). Устай: 2Na + 2H₂O → 2NaOH + H₂ (хүчтэй, хайлна, pH ≈ 14); Mg хүйтэн устай маш удаан (Mg + 2H₂O → Mg(OH)₂ + H₂, pH ≈ 11), харин уураар хүчтэй урвалд орно (Mg + H₂O(g) → MgO + H₂).",
        keyConcepts: ["Na burns with a yellow flame, Mg with a bright white flame", "S burns with a blue flame → SO₂", "Al chloride is the covalent dimer Al₂Cl₆", "Mg + steam → MgO + H₂"],
        keyEquations: ["4P + 5O₂ → P₄O₁₀", "2Al + 3Cl₂ → Al₂Cl₆", "Mg + H₂O(g) → MgO + H₂"],
        commonPitfalls: [
          "Magnesium with steam gives MgO, not Mg(OH)₂: Mg(s) + H₂O(g) → MgO(s) + H₂(g)."
        ]
      },
      {
        id: "10.4",
        number: "10.4",
        titleEn: "Oxidation Numbers of Oxides & Chlorides",
        titleMn: "Исэл ба хлоридын исэлдэхүйн зэрэг",
        summaryEn: "The maximum oxidation number of a Period 3 element equals the number of outer-shell electrons used in bonding. Oxides: Na₂O +1, MgO +2, Al₂O₃ +3, SiO₂ +4, P₄O₁₀ +5, SO₂ +4 and SO₃ +6. Chlorides: NaCl +1, MgCl₂ +2, AlCl₃ +3, SiCl₄ +4, PCl₅ +5 (and SCl₂ +2). The oxidation number rises by one each group because one more outer electron is available.",
        summaryMn: "3-р үеийн элементийн хамгийн их исэлдэхүйн зэрэг нь холбоонд оролцсон гадна бүрхүүлийн электроны тоотой тэнцүү. Ислүүд: Na₂O +1, MgO +2, Al₂O₃ +3, SiO₂ +4, P₄O₁₀ +5, SO₂ +4 ба SO₃ +6. Хлоридууд: NaCl +1, MgCl₂ +2, AlCl₃ +3, SiCl₄ +4, PCl₅ +5 (мөн SCl₂ +2). Бүлэг бүрт нэг гадна электрон нэмэгдэх тул исэлдэхүйн зэрэг нэгээр өснө.",
        keyConcepts: ["Max oxidation number = outer electrons", "Oxides: +1 → +6", "Chlorides: +1 → +5"],
        commonPitfalls: [
          "The syllabus formula of phosphorus(V) oxide is P₄O₁₀ — use it in equations."
        ]
      },
      {
        id: "10.5",
        number: "10.5",
        titleEn: "Oxides: Water & Acid–Base Behaviour",
        titleMn: "Ислүүд: устай урвал ба хүчил–суурийн шинж",
        summaryEn: "Na₂O + H₂O → 2NaOH (pH 13–14); MgO + H₂O → Mg(OH)₂ (slightly soluble, pH ≈ 9–10); Al₂O₃ and SiO₂ do not react and are insoluble (pH 7); P₄O₁₀ + 6H₂O → 4H₃PO₄ (pH ≈ 2); SO₂ + H₂O → H₂SO₃ (pH ≈ 2); SO₃ + H₂O → H₂SO₄ (pH ≈ 1). Na₂O and MgO are ionic and basic (O²⁻ + H₂O → 2OH⁻; they react with acids). Al₂O₃ is ionic with covalent character and amphoteric: Al₂O₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂O and Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄; Al(OH)₃ is also amphoteric. SiO₂ is giant covalent and acidic (reacts only with hot concentrated NaOH: SiO₂ + 2NaOH → Na₂SiO₃ + H₂O). P₄O₁₀, SO₂ and SO₃ are simple molecular and acidic (e.g. SO₂ + 2NaOH → Na₂SO₃ + H₂O).",
        summaryMn: "Na₂O + H₂O → 2NaOH (pH 13–14); MgO + H₂O → Mg(OH)₂ (бага зэрэг уусна, pH ≈ 9–10); Al₂O₃ ба SiO₂ урвалд орохгүй, уусахгүй (pH 7); P₄O₁₀ + 6H₂O → 4H₃PO₄ (pH ≈ 2); SO₂ + H₂O → H₂SO₃ (pH ≈ 2); SO₃ + H₂O → H₂SO₄ (pH ≈ 1). Na₂O, MgO нь ионы, суурийн исэл (O²⁻ + H₂O → 2OH⁻; хүчилтэй урвалд орно). Al₂O₃ нь ковалент шинжтэй ионы исэл, амфотер: Al₂O₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂O ба Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄; Al(OH)₃ мөн амфотер. SiO₂ нь аварга ковалент, хүчлийн исэл (зөвхөн халуун өтгөн NaOH-тэй урвалд орно: SiO₂ + 2NaOH → Na₂SiO₃ + H₂O). P₄O₁₀, SO₂, SO₃ нь энгийн молекул, хүчлийн исэл (жишээ нь SO₂ + 2NaOH → Na₂SO₃ + H₂O).",
        keyConcepts: ["Basic → amphoteric (Al₂O₃) → acidic", "Na₂O pH 13–14 · MgO ≈ 9–10 · P₄O₁₀, SO₂ ≈ 2 · SO₃ ≈ 1", "Al₂O₃ and SiO₂ insoluble in water", "Ionic → giant covalent → simple molecular"],
        keyEquations: ["Na₂O + H₂O → 2NaOH", "P₄O₁₀ + 6H₂O → 4H₃PO₄", "Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄", "SiO₂ + 2NaOH → Na₂SiO₃ + H₂O"],
        commonPitfalls: [
          "Al₂O₃ does NOT dissolve in water (pH 7); it shows amphoteric behaviour only with acids and alkalis.",
          "MgO gives pH about 9–10, not 14, because Mg(OH)₂ is only slightly soluble."
        ]
      },
      {
        id: "10.6",
        number: "10.6",
        titleEn: "Chlorides with Water",
        titleMn: "Хлоридуудын устай урвал",
        summaryEn: "NaCl dissolves without reaction: NaCl(s) + aq → Na⁺(aq) + Cl⁻(aq), pH 7. MgCl₂ dissolves with very slight hydrolysis (pH ≈ 6.5). AlCl₃ (Al₂Cl₆) dissolves to give [Al(H₂O)₆]³⁺, which releases H⁺ because the small, highly charged Al³⁺ polarises the water molecules: [Al(H₂O)₆]³⁺ → [Al(H₂O)₅OH]²⁺ + H⁺ (pH ≈ 3). SiCl₄ and PCl₅ are hydrolysed, giving white fumes of HCl and strongly acidic solutions (pH ≈ 2): SiCl₄ + 2H₂O → SiO₂ + 4HCl and PCl₅ + 4H₂O → H₃PO₄ + 5HCl (PCl₃ + 3H₂O → H₃PO₃ + 3HCl). Across the period the chlorides change from ionic (neutral solutions) to covalent (hydrolysed, acidic), following the decrease in electronegativity difference with chlorine.",
        summaryMn: "NaCl урвалгүйгээр уусна: NaCl(s) + aq → Na⁺(aq) + Cl⁻(aq), pH 7. MgCl₂ маш бага гидролизтой уусна (pH ≈ 6.5). AlCl₃ (Al₂Cl₆) уусаж [Al(H₂O)₆]³⁺ үүсгэх ба жижиг, өндөр цэнэгтэй Al³⁺ усны молекулыг туйлшруулдаг тул H⁺ ялгаруулна: [Al(H₂O)₆]³⁺ → [Al(H₂O)₅OH]²⁺ + H⁺ (pH ≈ 3). SiCl₄ ба PCl₅ гидролизд орж HCl-ийн цагаан утаа, хүчтэй хүчиллэг уусмал (pH ≈ 2) үүсгэнэ: SiCl₄ + 2H₂O → SiO₂ + 4HCl ба PCl₅ + 4H₂O → H₃PO₄ + 5HCl (PCl₃ + 3H₂O → H₃PO₃ + 3HCl). Үеийн дагуу хлоридууд ионы (саармаг уусмал)-аас ковалент (гидролизд орж, хүчиллэг) руу шилжинэ — хлортой цахилгаан сөрөг чанарын ялгаа багасахыг дагана.",
        keyConcepts: ["Ionic chlorides dissolve: pH 7", "AlCl₃: [Al(H₂O)₆]³⁺ releases H⁺, pH ≈ 3", "SiCl₄, PCl₅ hydrolysed: white fumes of HCl, pH ≈ 2", "Ionic → covalent across the period"],
        keyEquations: ["SiCl₄ + 2H₂O → SiO₂ + 4HCl", "PCl₅ + 4H₂O → H₃PO₄ + 5HCl", "[Al(H₂O)₆]³⁺ → [Al(H₂O)₅OH]²⁺ + H⁺"],
        commonPitfalls: [
          "SiCl₄ and PCl₅ do not simply dissolve — they are hydrolysed, giving white fumes of HCl."
        ]
      },
      {
        id: "10.7",
        number: "10.7",
        titleEn: "Deducing & Predicting Properties",
        titleMn: "Шинж чанарыг тодорхойлох ба урьдчилан хэлэх",
        summaryEn: "Use the patterns to identify unknown elements. A chloride that gives pH 1 with water is a hydrolysed covalent chloride (a non-metal); an oxide that does not react with NaOH is not Al₂O₃; an oxide melting at 1610 °C is giant covalent → Group 14, and since CO₂ is a gas the element is in Period 3 or below (Si). Selenium (Group 16, Period 4) is predicted to be like sulfur: simple molecular, relatively low melting point, non-conductor, insoluble; SeCl₄ is covalent and hydrolysed by moist air; SeO₂ is acidic. GeO₂ is acidic like SiO₂: GeO₂ + 2NaOH → Na₂GeO₃ + H₂O, with no reaction with HCl.",
        summaryMn: "Хэв маягийг ашиглан үл мэдэгдэх элементийг тодорхойлно. Устай pH 1 өгдөг хлорид нь гидролизд ордог ковалент хлорид (металл бус); NaOH-тэй урвалд ордоггүй исэл нь Al₂O₃ биш; 1610 °C-д хайлдаг исэл аварга ковалент → 14-р бүлэг, CO₂ хий тул элемент 3-р үе буюу түүнээс доош (Si). Селен (16-р бүлэг, 4-р үе) хүхэртэй төстэй гэж таамаглана: энгийн молекул, хайлах цэг харьцангуй бага, дамжуулахгүй, уусахгүй; SeCl₄ ковалент, чийглэг агаарт гидролизд орно; SeO₂ хүчлийн исэл. GeO₂ нь SiO₂ шиг хүчлийн исэл: GeO₂ + 2NaOH → Na₂GeO₃ + H₂O, HCl-тэй урвалд орохгүй.",
        keyConcepts: ["Chloride pH 1 → covalent, non-metal", "Oxide reacts with acid and alkali → aluminium", "Very high m.p. oxide → giant covalent", "Predict from the element above in the group"],
        commonPitfalls: [
          "Use all the clues — bonding of the chloride, acid–base behaviour of the oxide and melting point — before deciding."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Periodicity", termMn: "Үелэх чанар", definitionEn: "A repeating pattern of properties across each period of the Periodic Table.", definitionMn: "Үелэх системийн үе бүрийн дагуу шинж чанар давтагдах хэв маяг." },
      { termEn: "Atomic (Covalent) Radius", termMn: "Атомын (ковалент) радиус", definitionEn: "Half the distance between the nuclei of two bonded atoms of the same element.", definitionMn: "Ижил элементийн холбогдсон хоёр атомын цөм хоорондын зайн хагас." },
      { termEn: "Electronegativity", termMn: "Цахилгаан сөрөг чанар", definitionEn: "The power of an atom to attract the pair of electrons in a covalent bond.", definitionMn: "Ковалент холбоон дахь электроны хосыг өөртөө татах атомын чадвар." },
      { termEn: "Metalloid (Semimetal)", termMn: "Металлоид (хагас металл)", definitionEn: "An element with properties between those of metals and non-metals, e.g. silicon.", definitionMn: "Металл ба металл бусын хоорондох шинжтэй элемент, жишээ нь цахиур." },
      { termEn: "Basic Oxide", termMn: "Суурийн исэл", definitionEn: "An oxide that reacts with acids and gives an alkaline solution, e.g. Na₂O, MgO.", definitionMn: "Хүчилтэй урвалд орж, шүлтлэг уусмал өгдөг исэл, жишээ нь Na₂O, MgO." },
      { termEn: "Acidic Oxide", termMn: "Хүчлийн исэл", definitionEn: "An oxide that reacts with bases and gives an acidic solution, e.g. SO₂, P₄O₁₀.", definitionMn: "Сууртай урвалд орж, хүчиллэг уусмал өгдөг исэл, жишээ нь SO₂, P₄O₁₀." },
      { termEn: "Amphoteric", termMn: "Амфотер", definitionEn: "Able to react with both acids and bases, e.g. Al₂O₃ and Al(OH)₃.", definitionMn: "Хүчил ба суурь хоёулантай урвалд орж чаддаг, жишээ нь Al₂O₃, Al(OH)₃." },
      { termEn: "Hydrolysis", termMn: "Гидролиз", definitionEn: "The breaking down of a compound by reaction with water, e.g. SiCl₄ and PCl₅.", definitionMn: "Устай урвалд орж нэгдэл задрах, жишээ нь SiCl₄, PCl₅." }
    ],
    formulas: [
      { nameEn: "Aluminium Oxide with Acid", nameMn: "Хөнгөнцагааны исэл хүчилтэй", formula: "Al₂O₃(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂O(l)", note: "Acts as a base" },
      { nameEn: "Aluminium Oxide with Alkali", nameMn: "Хөнгөнцагааны исэл шүлттэй", formula: "Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) → 2NaAl(OH)₄(aq)", note: "Acts as an acid" },
      { nameEn: "Silicon Tetrachloride Hydrolysis", nameMn: "Цахиурын хлоридын гидролиз", formula: "SiCl₄(l) + 2H₂O(l) → SiO₂(s) + 4HCl(g)", note: "White fumes of HCl; pH ≈ 2" },
      { nameEn: "Phosphorus(V) Chloride Hydrolysis", nameMn: "Фосфор(V) хлоридын гидролиз", formula: "PCl₅(s) + 4H₂O(l) → H₃PO₄(aq) + 5HCl(g)", note: "White fumes of HCl; pH ≈ 2" },
      { nameEn: "Phosphorus(V) Oxide with Water", nameMn: "Фосфор(V) исэл устай", formula: "P₄O₁₀(s) + 6H₂O(l) → 4H₃PO₄(aq)", note: "pH ≈ 2" }
    ],
    examStyleTips: [
      "Low melting points of P₄, S₈, Cl₂: weak id–id forces between molecules — the covalent bonds do not break.",
      "Si: giant covalent, many strong covalent bonds — not 'strong intermolecular forces'.",
      "Radius across a period: nuclear charge increases, same shell, similar shielding.",
      "Al₂O₃ is insoluble in water; show amphoteric behaviour with one equation for an acid and one for an alkali.",
      "SiCl₄ and PCl₅ are hydrolysed (white fumes of HCl, pH ≈ 2) — they do not just dissolve.",
      "Use P₄O₁₀ (not P₂O₅) in equations: P₄O₁₀ + 6H₂O → 4H₃PO₄."
    ],
    examQuestions: [
      {
        id: "ch10-q1",
        marks: 3,
        questionEn: "(a) Explain why atomic radius decreases from sodium to chlorine. [2]\n(b) Explain why P³⁻ is much larger than Na⁺. [1]",
        questionMn: "(a) Натриас хлор хүртэл атомын радиус яагаад буурдгийг тайлбарлана уу. [2]\n(b) P³⁻ яагаад Na⁺-аас хамаагүй том вэ? [1]",
        solutionEn: "(a) Nuclear charge increases · electrons are added to the same shell [1]\nShielding is similar, so the outer electrons are pulled closer [1]\n(b) P³⁻ has three shells (2, 8, 8) but Na⁺ only two (2, 8) [1]",
        solutionMn: "(a) Цөмийн цэнэг өснө; электронууд ижил бүрхүүлд нэмэгдэж, халхлалт ойролцоо тул гадна электронууд ойр татагдана. (b) P³⁻ гурван бүрхүүлтэй (2, 8, 8), Na⁺ хоёртой (2, 8)."
      },
      {
        id: "ch10-q2",
        marks: 4,
        questionEn: "Explain why the melting point of silicon (1683 K) is much higher than that of phosphorus (317 K).",
        questionMn: "Цахиурын хайлах цэг (1683 K) яагаад фосфорынхоос (317 K) хамаагүй өндөр байдгийг тайлбарлана уу.",
        solutionEn: "Silicon is giant covalent [1] · many strong covalent bonds must be broken, needing a lot of energy [1]\nPhosphorus is simple molecular, P₄ [1] · only weak id–id forces between molecules are overcome [1]",
        solutionMn: "Цахиур аварга ковалент — олон хүчтэй ковалент холбоог таслахад их энерги хэрэгтэй. Фосфор энгийн молекул (P₄) — зөвхөн молекулуудын хоорондох сул id–id хүчийг даван гарна.",
        examinerTip: "Name the structure, the force that is overcome and the energy needed for each element."
      },
      {
        id: "ch10-q3",
        marks: 3,
        questionEn: "(a) Explain why aluminium has a higher melting point than sodium. [2]\n(b) Explain why sulfur has a higher melting point than chlorine. [1]",
        questionMn: "(a) Хөнгөнцагаан яагаад натриас өндөр хайлах цэгтэй вэ? [2]\n(b) Хүхэр яагаад хлороос өндөр хайлах цэгтэй вэ? [1]",
        solutionEn: "(a) Al³⁺ has a higher charge and each Al atom gives 3 delocalised electrons (Na only 1) [1] · stronger metallic bonding [1]\n(b) S₈ has more electrons than Cl₂, so the id–id forces are stronger [1]",
        solutionMn: "(a) Al³⁺ цэнэг өндөр, атом бүр 3 чөлөөт электрон өгнө (Na 1) — металлын холбоо хүчтэй. (b) S₈ нь Cl₂-оос олон электронтой тул id–id хүч хүчтэй."
      },
      {
        id: "ch10-q4",
        marks: 4,
        questionEn: "Write equations for the reactions of:\n(a) phosphorus with oxygen\n(b) aluminium with chlorine\n(c) sodium with cold water\n(d) magnesium with steam",
        questionMn: "Урвалын тэгшитгэлийг бичнэ үү:\n(a) фосфор хүчилтөрөгчтэй\n(b) хөнгөнцагаан хлортой\n(c) натри хүйтэн устай\n(d) магни усны уураар",
        solutionEn: "(a) 4P(s) + 5O₂(g) → P₄O₁₀(s) [1]\n(b) 2Al(s) + 3Cl₂(g) → Al₂Cl₆(s) [1]\n(c) 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) [1]\n(d) Mg(s) + H₂O(g) → MgO(s) + H₂(g) [1]",
        solutionMn: "(a) 4P + 5O₂ → P₄O₁₀. (b) 2Al + 3Cl₂ → Al₂Cl₆ (ковалент димер). (c) 2Na + 2H₂O → 2NaOH + H₂. (d) Mg + H₂O(g) → MgO + H₂ — уураар Mg(OH)₂ биш MgO үүснэ."
      },
      {
        id: "ch10-q5",
        marks: 6,
        questionEn: "Describe what happens when each compound is added to water. Give an equation and the approximate pH.\n(a) sodium oxide\n(b) sulfur trioxide\n(c) aluminium oxide",
        questionMn: "Нэгдэл бүрийг усанд хийхэд юу болохыг тэгшитгэл, ойролцоо pH-тай нь бичнэ үү.\n(a) натрийн исэл\n(b) хүхрийн гурвалсан исэл\n(c) хөнгөнцагааны исэл",
        solutionEn: "(a) Na₂O + H₂O → 2NaOH [1] · pH 13–14, strongly alkaline [1]\n(b) SO₃ + H₂O → H₂SO₄ [1] · pH ≈ 1, strongly acidic [1]\n(c) No reaction · insoluble [1] · pH 7 [1]",
        solutionMn: "(a) Na₂O + H₂O → 2NaOH, pH 13–14. (b) SO₃ + H₂O → H₂SO₄, pH ≈ 1. (c) Урвалгүй, уусахгүй, pH 7."
      },
      {
        id: "ch10-q6",
        marks: 3,
        questionEn: "Write equations to show that:\n(a) aluminium oxide is amphoteric [2]\n(b) silicon(IV) oxide is acidic [1]",
        questionMn: "Тэгшитгэлээр харуулна уу:\n(a) хөнгөнцагааны исэл амфотер [2]\n(b) цахиур(IV) исэл хүчлийн исэл [1]",
        solutionEn: "(a) With acid: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O [1]\nWith alkali: Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄ [1]\n(b) SiO₂ + 2NaOH → Na₂SiO₃ + H₂O (hot, concentrated) [1]",
        solutionMn: "(a) Хүчилтэй: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O; шүлттэй: Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄. (b) SiO₂ + 2NaOH → Na₂SiO₃ + H₂O (халуун өтгөн NaOH)."
      },
      {
        id: "ch10-q7",
        marks: 4,
        questionEn: "(a) Describe what you see when silicon tetrachloride is added to water. Give the equation and the pH. [3]\n(b) Explain why aqueous aluminium chloride is acidic. [1]",
        questionMn: "(a) Цахиурын тетрахлоридыг усанд хийхэд юу ажиглагдах вэ? Тэгшитгэл, pH-г бичнэ үү. [3]\n(b) Хөнгөнцагааны хлоридын уусмал яагаад хүчиллэг байдгийг тайлбарлана уу. [1]",
        solutionEn: "(a) White fumes (of HCl) and a white solid (SiO₂) [1]\nSiCl₄ + 2H₂O → SiO₂ + 4HCl [1] · pH ≈ 2 [1]\n(b) Small, highly charged Al³⁺ polarises water: [Al(H₂O)₆]³⁺ → [Al(H₂O)₅OH]²⁺ + H⁺ [1]",
        solutionMn: "(a) HCl-ийн цагаан утаа, SiO₂ цагаан хатуу бодис; SiCl₄ + 2H₂O → SiO₂ + 4HCl; pH ≈ 2. (b) Жижиг, өндөр цэнэгтэй Al³⁺ усыг туйлшруулж H⁺ ялгаруулна."
      },
      {
        id: "ch10-q8",
        marks: 3,
        questionEn: "Phosphorus(III) chloride, PCl₃, reacts with water to form H₃PO₃.\nWrite the equation, state the approximate pH of the solution and describe what you would see.",
        questionMn: "Фосфор(III) хлорид PCl₃ устай урвалд орж H₃PO₃ үүсгэнэ.\nТэгшитгэл бичиж, уусмалын ойролцоо pH-г хэлж, юу ажиглагдахыг тодорхойлно уу.",
        solutionEn: "PCl₃(l) + 3H₂O(l) → H₃PO₃(aq) + 3HCl(aq) [1]\npH 1–2 [1]\nWhite fumes of HCl [1]",
        solutionMn: "PCl₃ + 3H₂O → H₃PO₃ + 3HCl; pH 1–2; HCl-ийн цагаан утаа гарна."
      },
      {
        id: "ch10-q9",
        marks: 4,
        questionEn: "Element G forms a chloride that reacts with water to give pH 1. Its oxide melts at 1610 °C and does not react with aqueous sodium hydroxide.\nDeduce the group of G and suggest its identity, explaining each step.",
        questionMn: "G элементийн хлорид устай урвалд орж pH 1 өгнө. Түүний исэл 1610 °C-д хайлж, натрийн гидроксидын уусмалтай урвалд ордоггүй.\nG-ийн бүлгийг тодорхойлж, ямар элемент болохыг алхам бүрээр тайлбарлан санал болгоно уу.",
        solutionEn: "pH 1 chloride: hydrolysed covalent chloride, so G is a non‑metal or metalloid [1]\nNo reaction with NaOH: not Al₂O₃ (amphoteric) [1]\nOxide melts at 1610 °C: giant covalent oxide → Group 14 [1]\nCO₂ is a gas, so G is in Period 3 or below → silicon [1]",
        solutionMn: "pH 1 хлорид → гидролизд ордог ковалент хлорид. NaOH-тэй урвалд орохгүй → Al₂O₃ биш. Исэл 1610 °C-д хайлна → аварга ковалент → 14-р бүлэг. CO₂ хий тул 3-р үе буюу түүнээс доош → цахиур."
      },
      {
        id: "ch10-q10",
        marks: 4,
        questionEn: "Selenium is in Group 16, Period 4.\nPredict its structure, two physical properties, and the nature of its oxide SeO₂ and chloride SeCl₄.",
        questionMn: "Селен 16-р бүлэг, 4-р үед байрладаг.\nТүүний бүтэц, хоёр физик шинж, SeO₂ исэл ба SeCl₄ хлоридын шинжийг урьдчилан хэлнэ үү.",
        solutionEn: "Simple molecular non‑metal, like sulfur [1]\nRelatively low melting point · does not conduct electricity [1]\nSeO₂ is an acidic oxide (like SO₂) [1]\nSeCl₄ is covalent and is hydrolysed by water, giving HCl [1]",
        solutionMn: "Хүхэр шиг энгийн молекулын металл бус; хайлах цэг харьцангуй бага, цахилгаан дамжуулахгүй; SeO₂ хүчлийн исэл (SO₂ шиг); SeCl₄ ковалент, устай гидролизд орж HCl үүсгэнэ."
      }
    ]
  },
  {
    id: 11,
    number: 11,
    level: "AS",
    category: "Inorganic",
    titleEn: "Group 2 (Alkaline Earth Metals)",
    titleMn: "2-р бүлгийн элементүүд (Шүлтлэг газрын металлууд)",
    descriptionEn: "Trends in physical properties down Group 2; reactions of the metals with oxygen, water and dilute acids; oxides, hydroxides and carbonates with water and acids; thermal decomposition of carbonates and nitrates; solubility of hydroxides and sulfates; flame tests and uses (Syllabus 10.1).",
    descriptionMn: "2-р бүлгийн дагуух физик шинжийн хандлага; металлуудын хүчилтөрөгч, ус, шингэрүүлсэн хүчилтэй урвал; исэл, гидроксид, карбонатын устай ба хүчилтэй урвал; карбонат ба нитратын дулааны задрал; гидроксид ба сульфатын уусах чанар; дөлний сорил ба хэрэглээ (Syllabus 10.1).",
    syllabusRef: "Syllabus 10.1",
    examPapers: ["Paper 1", "Paper 2"],
    learningIntentionsEn: [
      "Describe and explain trends in atomic radius, melting point, density and ionisation energy down Group 2",
      "Write equations for the reactions of the metals with oxygen, water (and steam) and dilute acids",
      "Write equations for the reactions of the oxides, hydroxides and carbonates with water and dilute acids",
      "Write equations for the thermal decomposition of the nitrates and carbonates and state the trend in thermal stability",
      "State the trends in solubility of the hydroxides (increase) and sulfates (decrease)",
      "Recall flame test colours and explain the uses of Ca(OH)₂ and CaCO₃; predict the properties of Be and Ra"
    ],
    learningIntentionsMn: [
      "2-р бүлгийн дагуу доош атомын радиус, хайлах цэг, нягт, иончлолын энергийн хандлагыг тодорхойлж тайлбарлах",
      "Металлуудын хүчилтөрөгч, ус (ба уур), шингэрүүлсэн хүчилтэй урвалын тэгшитгэл бичих",
      "Исэл, гидроксид, карбонатын устай ба шингэрүүлсэн хүчилтэй урвалын тэгшитгэл бичих",
      "Нитрат ба карбонатын дулааны задралын тэгшитгэл бичиж, дулааны тогтвортой байдлын хандлагыг хэлэх",
      "Гидроксидын (өснө) ба сульфатын (буурна) уусах чанарын хандлагыг хэлэх",
      "Дөлний сорилын өнгийг санах, Ca(OH)₂ ба CaCO₃-ийн хэрэглээг тайлбарлах; Be ба Ra-ийн шинжийг урьдчилан хэлэх"
    ],
    subtopics: [
      {
        id: "11.1",
        number: "11.1",
        titleEn: "Physical Properties & Reactivity Trends",
        titleMn: "Физик шинж ба урвалын идэвхийн хандлага",
        summaryEn: "Group 2 elements (alkaline earth metals) have two outer electrons (ns²) and form 2+ ions. Metallic radius increases down the group (Be 0.122 → Ba 0.217 nm) because each element has an extra shell. Melting point generally decreases (Mg breaks the trend: Be 1280, Mg 650, Ca 838, Sr 768, Ba 714 °C) and density generally increases. The metals are reducing agents: M → M²⁺ + 2e⁻ (oxidation number 0 → +2). IE₁ + IE₂ decreases down the group (Be 2660, Mg 2186, Ca 1740, Sr 1608, Ba 1468 kJ mol⁻¹) because the greater distance and shielding outweigh the increased nuclear charge, so the 2 electrons are lost more easily and reactivity increases.",
        summaryMn: "2-р бүлгийн элементүүд (шүлтлэг газрын металл) хоёр гадна электронтой (ns²), 2+ ион үүсгэнэ. Металлын радиус бүлгийн дагуу доош өснө (Be 0.122 → Ba 0.217 нм), учир нь элемент бүр нэмэлт бүрхүүлтэй. Хайлах цэг ерөнхийдөө буурна (Mg хандлагыг зөрчинө: Be 1280, Mg 650, Ca 838, Sr 768, Ba 714 °C), нягт ерөнхийдөө өснө. Металлууд ангижруулагч: M → M²⁺ + 2e⁻ (исэлдэхүйн зэрэг 0 → +2). IE₁ + IE₂ бүлгийн дагуу доош буурна (Be 2660, Mg 2186, Ca 1740, Sr 1608, Ba 1468 kJ mol⁻¹), учир нь зай ба халхлалт их болж цөмийн цэнэгийн өсөлтөөс давдаг тул 2 электрон амархан алдагдаж, урвалын идэвх өснө.",
        keyConcepts: ["ns² → M²⁺", "Radius ↑ down: extra shell", "IE₁ + IE₂ ↓ → reactivity ↑", "Metals are reducing agents (0 → +2)"],
        keyEquations: ["M → M²⁺ + 2e⁻", "Ca: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² → Ca²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶"],
        commonPitfalls: [
          "Explain reactivity with ionisation energy: more shielding and greater distance outweigh the nuclear charge — not just 'the atoms are bigger'."
        ]
      },
      {
        id: "11.2",
        number: "11.2",
        titleEn: "Reactions with Oxygen, Water & Acids; Flame Tests",
        titleMn: "Хүчилтөрөгч, ус, хүчилтэй урвал; дөлний сорил",
        summaryEn: "With oxygen all form white basic oxides: 2Mg + O₂ → 2MgO (bright white flame); reactivity increases down the group (Ba is stored under oil). With water: M + 2H₂O → M(OH)₂ + H₂. Mg reacts very slowly with cold water (pH ≈ 10) but vigorously with steam: Mg + H₂O(g) → MgO + H₂. Ca fizzes steadily and forms a cloudy white suspension of Ca(OH)₂ (pH ≈ 11); Ba reacts vigorously (pH ≈ 13). With dilute HCl all react, faster down the group: Mg + 2HCl → MgCl₂ + H₂. With dilute H₂SO₄ an insoluble sulfate layer soon stops Ca, Sr and Ba reacting (Ca + H₂SO₄ → CaSO₄(s) + H₂). Flame tests: Ca brick-red, Sr red (scarlet), Ba apple-green.",
        summaryMn: "Хүчилтөрөгчтэй бүгд цагаан суурийн исэл үүсгэнэ: 2Mg + O₂ → 2MgO (тод цагаан дөл); идэвх доошлох тусам өснө (Ba-г тосонд хадгална). Устай: M + 2H₂O → M(OH)₂ + H₂. Mg хүйтэн устай маш удаан (pH ≈ 10), уураар хүчтэй: Mg + H₂O(g) → MgO + H₂. Ca тогтвортой хөөсөрч, Ca(OH)₂-ийн булингартай цагаан суспенз үүсгэнэ (pH ≈ 11); Ba хүчтэй урвалд орно (pH ≈ 13). Шингэрүүлсэн HCl-тэй бүгд урвалд орох ба доошлох тусам хурдан: Mg + 2HCl → MgCl₂ + H₂. Шингэрүүлсэн H₂SO₄-тэй үед Ca, Sr, Ba-ийн гадаргууд уусдаггүй сульфатын давхарга үүсч урвал удалгүй зогсоно (Ca + H₂SO₄ → CaSO₄(s) + H₂). Дөлний сорил: Ca тоосгон улаан, Sr улаан (час улаан), Ba алимны ногоон.",
        keyConcepts: ["2M + O₂ → 2MO (white, basic)", "Mg + steam → MgO + H₂", "Ca + water: cloudy white Ca(OH)₂", "Flame: Ca brick-red · Sr red · Ba apple-green"],
        keyEquations: ["M + 2H₂O → M(OH)₂ + H₂", "Mg + H₂O(g) → MgO + H₂", "Ca + H₂SO₄ → CaSO₄(s) + H₂"],
        commonPitfalls: [
          "Mg with steam forms MgO, not Mg(OH)₂.",
          "Ca with water gives a cloudy white suspension, not a clear solution.",
          "Do not swap the flame colours: Sr is red and Ba is apple-green."
        ]
      },
      {
        id: "11.3",
        number: "11.3",
        titleEn: "Oxides, Hydroxides & Carbonates",
        titleMn: "Исэл, гидроксид ба карбонат",
        summaryEn: "The oxides and hydroxides are bases: they react with acids to form a salt and water. MgO + H₂O → Mg(OH)₂ (pH ≈ 10); CaO + H₂O → Ca(OH)₂ (very exothermic); MgO + 2HCl → MgCl₂ + H₂O; Mg(OH)₂ + H₂SO₄ → MgSO₄ + 2H₂O; Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O; Ba(OH)₂ + H₂SO₄ → BaSO₄(s) + 2H₂O. Carbonates react with acids to give a salt, water and CO₂: MgCO₃ + H₂SO₄ → MgSO₄ + H₂O + CO₂; BaCO₃ + 2HCl → BaCl₂ + H₂O + CO₂; with H₂SO₄ insoluble BaSO₄ coats the BaCO₃ and the reaction stops.",
        summaryMn: "Исэл ба гидроксид нь суурь: хүчилтэй урвалд орж давс, ус үүсгэнэ. MgO + H₂O → Mg(OH)₂ (pH ≈ 10); CaO + H₂O → Ca(OH)₂ (маш экзотерм); MgO + 2HCl → MgCl₂ + H₂O; Mg(OH)₂ + H₂SO₄ → MgSO₄ + 2H₂O; Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O; Ba(OH)₂ + H₂SO₄ → BaSO₄(s) + 2H₂O. Карбонат хүчилтэй урвалд орж давс, ус, CO₂ үүсгэнэ: MgCO₃ + H₂SO₄ → MgSO₄ + H₂O + CO₂; BaCO₃ + 2HCl → BaCl₂ + H₂O + CO₂; H₂SO₄-тэй үед уусдаггүй BaSO₄ BaCO₃-ийг бүрхэж урвал зогсоно.",
        keyConcepts: ["Oxides and hydroxides are bases", "CaO + water: very exothermic (slaked lime)", "Carbonate + acid → salt + water + CO₂", "BaSO₄ layer stops the reaction"],
        keyEquations: ["CaO + H₂O → Ca(OH)₂", "MgCO₃ + H₂SO₄ → MgSO₄ + H₂O + CO₂", "Ba(OH)₂ + H₂SO₄ → BaSO₄(s) + 2H₂O"],
        commonPitfalls: [
          "Give CaSO₄, SrSO₄ and BaSO₄ the state symbol (s) — they are white precipitates, not (aq)."
        ]
      },
      {
        id: "11.4",
        number: "11.4",
        titleEn: "Solubility Trends: Hydroxides & Sulfates",
        titleMn: "Уусах чанарын хандлага: гидроксид ба сульфат",
        summaryEn: "Hydroxide solubility INCREASES down the group (mol per 100 g water: Mg(OH)₂ 2.0 × 10⁻⁵, Ca(OH)₂ 1.5 × 10⁻³, Sr(OH)₂ 3.4 × 10⁻³, Ba(OH)₂ 1.5 × 10⁻²), so saturated solutions become more alkaline (higher [OH⁻], higher pH). Sulfate solubility DECREASES down the group: MgSO₄ soluble, CaSO₄ sparingly soluble, SrSO₄ and BaSO₄ insoluble — BaSO₄ is the white precipitate in the test for sulfate. Example: 1.5 × 10⁻³ mol of Ca(OH)₂ dissolves in 100 g of water, so 7.5 × 10⁻⁴ mol (0.056 g) dissolves in 50 g.",
        summaryMn: "Гидроксидын уусах чанар бүлгийн дагуу доош ӨСНӨ (100 г усанд моль: Mg(OH)₂ 2.0 × 10⁻⁵, Ca(OH)₂ 1.5 × 10⁻³, Sr(OH)₂ 3.4 × 10⁻³, Ba(OH)₂ 1.5 × 10⁻²), тиймээс ханасан уусмал илүү шүлтлэг болно ([OH⁻] их, pH өндөр). Сульфатын уусах чанар доош БУУРНА: MgSO₄ уусна, CaSO₄ бага уусна, SrSO₄ ба BaSO₄ уусахгүй — BaSO₄ нь сульфатын сорилын цагаан тунадас. Жишээ: 100 г усанд 1.5 × 10⁻³ моль Ca(OH)₂ уусдаг тул 50 г усанд 7.5 × 10⁻⁴ моль (0.056 г) уусна.",
        keyConcepts: ["Hydroxides: solubility ↑ down (pH ↑)", "Sulfates: solubility ↓ down", "BaSO₄: white precipitate (sulfate test)", "Limewater = saturated Ca(OH)₂(aq)"],
        keyEquations: ["Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)", "7.5 × 10⁻⁴ × 74.1 = 0.056 g"],
        commonPitfalls: [
          "Hydroxides get MORE soluble down the group, sulfates get LESS soluble — do not mix them up."
        ]
      },
      {
        id: "11.5",
        number: "11.5",
        titleEn: "Thermal Decomposition of Carbonates & Nitrates",
        titleMn: "Карбонат ба нитратын дулааны задрал",
        summaryEn: "Carbonates decompose on heating to the oxide and carbon dioxide: MCO₃(s) → MO(s) + CO₂(g), e.g. CaCO₃ → CaO + CO₂ in a lime kiln. Nitrates give the oxide, brown nitrogen dioxide and oxygen: 2M(NO₃)₂(s) → 2MO(s) + 4NO₂(g) + O₂(g). Thermal stability increases down the group: a higher temperature is needed to decompose BaCO₃ than MgCO₃, so MgCO₃ and Mg(NO₃)₂ decompose most easily. (Extension: the small Mg²⁺ ion has a high charge density and polarises the large carbonate or nitrate ion most, weakening its bonds.)",
        summaryMn: "Карбонат халаахад исэл ба нүүрстөрөгчийн давхар исэл болж задарна: MCO₃(s) → MO(s) + CO₂(g), жишээ нь шохойн зууханд CaCO₃ → CaO + CO₂. Нитрат исэл, бор өнгийн азотын давхар исэл, хүчилтөрөгч үүсгэнэ: 2M(NO₃)₂(s) → 2MO(s) + 4NO₂(g) + O₂(g). Дулааны тогтвортой байдал бүлгийн дагуу доош өснө: BaCO₃-ийг задлахад MgCO₃-аас өндөр температур хэрэгтэй, тиймээс MgCO₃ ба Mg(NO₃)₂ хамгийн амархан задарна. (Нэмэлт: жижиг Mg²⁺ ион цэнэгийн нягт өндөр тул том карбонат, нитрат ионыг хамгийн их туйлшруулж, холбоог нь сулруулна.)",
        keyConcepts: ["MCO₃ → MO + CO₂", "2M(NO₃)₂ → 2MO + 4NO₂ + O₂ (brown gas)", "Thermal stability ↑ down the group", "MgCO₃ decomposes most easily"],
        keyEquations: ["CaCO₃(s) → CaO(s) + CO₂(g)", "2Mg(NO₃)₂(s) → 2MgO(s) + 4NO₂(g) + O₂(g)"],
        commonPitfalls: [
          "Balance the nitrate equation with 2 : 2 : 4 : 1 — not Ca(NO₃)₂ → CaO + 2NO₂ + O₂."
        ]
      },
      {
        id: "11.6",
        number: "11.6",
        titleEn: "Uses & Predicting Be and Ra",
        titleMn: "Хэрэглээ ба Be, Ra-ийг урьдчилан хэлэх",
        summaryEn: "Mg powder is used in flares and fireworks (large surface area). CaCO₃ (limestone, marble) is a building material; a lime kiln turns it into CaO, used to make cement and concrete. Ca(OH)₂ (slaked lime) and powdered CaCO₃ are bases that neutralise acidic soil: Ca(OH)₂ + 2HNO₃ → Ca(NO₃)₂ + 2H₂O. Trends allow predictions: radium forms Ra²⁺, RaO and Ra(OH)₂, is more reactive than Ba, has a lower melting point, higher density and larger radius, and Ra(OH)₂ with dilute H₂SO₄ gives a white precipitate of RaSO₄. Beryllium (1s² 2s²) has a higher melting point than Ra because the small Be²⁺ ions are closer to the delocalised electrons, giving stronger metallic bonding.",
        summaryMn: "Mg нунтагийг дохиоллын гал, салют-д хэрэглэнэ (гадаргуугийн талбай их). CaCO₃ (шохойн чулуу, гантиг) барилгын материал; шохойн зууханд CaO болгож цемент, бетон хийнэ. Ca(OH)₂ (унтраасан шохой) ба нунтаг CaCO₃ нь хүчиллэг хөрсийг саармагжуулах суурь: Ca(OH)₂ + 2HNO₃ → Ca(NO₃)₂ + 2H₂O. Хандлагаар урьдчилан хэлж болно: ради Ra²⁺, RaO, Ra(OH)₂ үүсгэж, Ba-аас идэвхтэй, хайлах цэг бага, нягт их, радиус том; Ra(OH)₂ шингэрүүлсэн H₂SO₄-тэй RaSO₄-ийн цагаан тунадас өгнө. Бериллийн (1s² 2s²) хайлах цэг Ra-аас өндөр, учир нь жижиг Be²⁺ ионууд чөлөөт электронд ойр тул металлын холбоо хүчтэй.",
        keyConcepts: ["Ca(OH)₂ and CaCO₃ neutralise acidic soil", "Lime kiln: CaCO₃ → CaO", "Radium: most reactive, RaSO₄ insoluble", "Be: smallest ion, strongest metallic bonding"],
        keyEquations: ["Ca(OH)₂ + 2HNO₃ → Ca(NO₃)₂ + 2H₂O", "2Ra + O₂ → 2RaO"],
        commonPitfalls: [
          "CaCO₃ raises soil pH because it is a base that neutralises acid — not because it is an alkali."
        ]
      }
    ],
    keyTerms: [
      { termEn: "Alkaline Earth Metals", termMn: "Шүлтлэг газрын металл", definitionEn: "The Group 2 elements; they have two outer electrons (ns²) and form 2+ ions.", definitionMn: "2-р бүлгийн элементүүд; хоёр гадна электронтой (ns²), 2+ ион үүсгэнэ." },
      { termEn: "Metallic Radius", termMn: "Металлын радиус", definitionEn: "Half the distance between the nuclei of neighbouring atoms in a metallic lattice.", definitionMn: "Металлын торон дахь хөрш атомуудын цөм хоорондын зайн хагас." },
      { termEn: "Thermal Decomposition", termMn: "Дулааны задрал", definitionEn: "The breaking down of a compound by heating.", definitionMn: "Халаахад нэгдэл задрах." },
      { termEn: "Thermal Stability", termMn: "Дулааны тогтвортой байдал", definitionEn: "How difficult it is to decompose a compound by heating; it increases down Group 2.", definitionMn: "Нэгдлийг халааж задлахад хэр хэцүү байх; 2-р бүлгийн дагуу доош өснө." },
      { termEn: "Reducing Agent", termMn: "Ангижруулагч бодис", definitionEn: "A species that donates electrons; Group 2 metals are oxidised from 0 to +2.", definitionMn: "Электрон өгдөг бөөм; 2-р бүлгийн металлууд 0-ээс +2 болж исэлдэнэ." },
      { termEn: "Limewater", termMn: "Шохойн ус", definitionEn: "A saturated solution of calcium hydroxide, Ca(OH)₂(aq); weakly alkaline.", definitionMn: "Кальцийн гидроксидын ханасан уусмал Ca(OH)₂(aq); сул шүлтлэг." },
      { termEn: "Quicklime / Slaked Lime", termMn: "Унтраагаагүй / Унтраасан шохой", definitionEn: "Calcium oxide, CaO / calcium hydroxide, Ca(OH)₂.", definitionMn: "Кальцийн исэл CaO / кальцийн гидроксид Ca(OH)₂." },
      { termEn: "Flame Test", termMn: "Дөлний сорил", definitionEn: "Identifying metal ions by the colour they give in a flame: Ca brick-red, Sr red, Ba apple-green.", definitionMn: "Дөлөнд өгөх өнгөөр нь металлын ионыг тодорхойлох: Ca тоосгон улаан, Sr улаан, Ba алимны ногоон." },
      { termEn: "Charge Density", termMn: "Цэнэгийн нягт", definitionEn: "The charge of an ion relative to its size; small, highly charged ions such as Mg²⁺ have a high charge density.", definitionMn: "Ионы цэнэгийг хэмжээтэй нь харьцуулсан утга; Mg²⁺ зэрэг жижиг, өндөр цэнэгтэй ионы цэнэгийн нягт өндөр." }
    ],
    formulas: [
      { nameEn: "Metal with Water", nameMn: "Металл устай", formula: "M(s) + 2H₂O(l) → M(OH)₂(aq) + H₂(g)", note: "Mg with steam gives MgO + H₂ instead" },
      { nameEn: "Carbonate Decomposition", nameMn: "Карбонатын задрал", formula: "MCO₃(s) → MO(s) + CO₂(g)", note: "Higher temperature needed down the group" },
      { nameEn: "Nitrate Decomposition", nameMn: "Нитратын задрал", formula: "2M(NO₃)₂(s) → 2MO(s) + 4NO₂(g) + O₂(g)", note: "Brown NO₂ gas" },
      { nameEn: "Sulfate Test", nameMn: "Сульфатын сорил", formula: "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)", note: "White precipitate" }
    ],
    examStyleTips: [
      "Down Group 2: hydroxide solubility increases (pH rises) and sulfate solubility decreases.",
      "Mg with steam: Mg + H₂O(g) → MgO + H₂ — not Mg(OH)₂.",
      "Nitrate decomposition is 2M(NO₃)₂ → 2MO + 4NO₂ + O₂; carbonates give MO + CO₂.",
      "Explain increasing reactivity with lower IE: greater distance and shielding outweigh the increased nuclear charge.",
      "CaSO₄, SrSO₄ and BaSO₄ are (s) — white precipitates.",
      "Flame colours: Ca brick-red, Sr red, Ba apple-green."
    ],
    examQuestions: [
      {
        id: "ch11-q1",
        marks: 3,
        questionEn: "Describe how each property changes down Group 2:\n(a) reactivity of the metals\n(b) solubility of the sulfates\n(c) solubility of the hydroxides",
        questionMn: "2-р бүлгийн дагуу доош шинж бүр хэрхэн өөрчлөгдөх вэ:\n(a) металлуудын урвалын идэвх\n(b) сульфатын уусах чанар\n(c) гидроксидын уусах чанар",
        solutionEn: "(a) Increases [1]\n(b) Decreases [1]\n(c) Increases [1]",
        solutionMn: "(a) Өснө. (b) Буурна. (c) Өснө."
      },
      {
        id: "ch11-q2",
        marks: 3,
        questionEn: "Explain why calcium forms Ca²⁺ ions more easily than magnesium forms Mg²⁺ ions.",
        questionMn: "Кальци яагаад магниас амархан 2+ ион үүсгэдгийг тайлбарлана уу.",
        solutionEn: "Ca's outer electrons are in a higher shell, further from the nucleus [1]\nThere is more shielding by inner electrons [1]\nThese outweigh the larger nuclear charge, so IE₁ + IE₂ is lower [1]",
        solutionMn: "Ca-ийн гадна электрон өндөр бүрхүүлд, цөмөөс хол; дотоод электронуудын халхлалт их; эдгээр нь цөмийн цэнэгийн өсөлтөөс давж, IE₁ + IE₂ бага болно."
      },
      {
        id: "ch11-q3",
        marks: 4,
        questionEn: "Write equations, with state symbols, for:\n(a) calcium with cold water\n(b) magnesium with steam\n(c) strontium with oxygen\n(d) barium carbonate with dilute nitric acid",
        questionMn: "Төлөвийн тэмдэгтэй тэгшитгэл бичнэ үү:\n(a) кальци хүйтэн устай\n(b) магни усны уураар\n(c) стронци хүчилтөрөгчтэй\n(d) барийн карбонат шингэрүүлсэн азотын хүчилтэй",
        solutionEn: "(a) Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g) [1]\n(b) Mg(s) + H₂O(g) → MgO(s) + H₂(g) [1]\n(c) 2Sr(s) + O₂(g) → 2SrO(s) [1]\n(d) BaCO₃(s) + 2HNO₃(aq) → Ba(NO₃)₂(aq) + H₂O(l) + CO₂(g) [1]",
        solutionMn: "(a) Ca + 2H₂O → Ca(OH)₂ + H₂. (b) Mg + H₂O(g) → MgO + H₂. (c) 2Sr + O₂ → 2SrO. (d) BaCO₃ + 2HNO₃ → Ba(NO₃)₂ + H₂O + CO₂."
      },
      {
        id: "ch11-q4",
        marks: 3,
        questionEn: "(a) Write the equation for the thermal decomposition of magnesium nitrate and state what you would see. [2]\n(b) Which decomposes at the lowest temperature: CaCO₃, SrCO₃ or BaCO₃? [1]",
        questionMn: "(a) Магнийн нитратын дулааны задралын тэгшитгэлийг бичиж, юу ажиглагдахыг хэлнэ үү. [2]\n(b) CaCO₃, SrCO₃, BaCO₃-ийн аль нь хамгийн бага температурт задрах вэ? [1]",
        solutionEn: "(a) 2Mg(NO₃)₂(s) → 2MgO(s) + 4NO₂(g) + O₂(g) [1] · brown gas (NO₂) is seen [1]\n(b) CaCO₃ · thermal stability increases down the group [1]",
        solutionMn: "(a) 2Mg(NO₃)₂ → 2MgO + 4NO₂ + O₂; бор хий (NO₂) харагдана. (b) CaCO₃ — дулааны тогтвортой байдал доошлох тусам өснө."
      },
      {
        id: "ch11-q5",
        marks: 2,
        questionEn: "Explain why a saturated solution of Ba(OH)₂ is more alkaline than a saturated solution of Mg(OH)₂.",
        questionMn: "Ba(OH)₂-ийн ханасан уусмал яагаад Mg(OH)₂-ийнхаас илүү шүлтлэг байдгийг тайлбарлана уу.",
        solutionEn: "Ba(OH)₂ is more soluble · hydroxide solubility increases down the group [1]\nSo [OH⁻] is higher and the pH is higher [1]",
        solutionMn: "Ba(OH)₂ илүү сайн уусна (гидроксидын уусах чанар доошлох тусам өснө) — [OH⁻] их, pH өндөр."
      },
      {
        id: "ch11-q6",
        marks: 3,
        questionEn: "The solubility of Ca(OH)₂ at 298 K is 1.5 × 10⁻³ mol per 100 g of water.\nCalculate the mass of Ca(OH)₂ that dissolves in 50 g of water. (Ar: Ca = 40.1, O = 16.0, H = 1.0)",
        questionMn: "298 K-д Ca(OH)₂-ийн уусах чанар 100 г усанд 1.5 × 10⁻³ моль.\n50 г усанд уусах Ca(OH)₂-ийн массыг тооцоолно уу. (Ar: Ca = 40.1, O = 16.0, H = 1.0)",
        solutionEn: "1.5 × 10⁻³ × 50/100 = 7.5 × 10⁻⁴ mol [1]\nMr = 40.1 + 2(16.0 + 1.0) = 74.1 [1]\nMass = 7.5 × 10⁻⁴ × 74.1 = 0.056 g [1]",
        solutionMn: "50 г-д 7.5 × 10⁻⁴ моль; Mr = 74.1; масс = 0.056 г."
      },
      {
        id: "ch11-q7",
        marks: 4,
        questionEn: "(a) Write the equation for calcium metal reacting with dilute sulfuric acid. [1]\n(b) Explain why the bubbles soon stop. [1]\n(c) Describe what you would see when dilute sulfuric acid is added to aqueous barium hydroxide, and give the ionic equation. [2]",
        questionMn: "(a) Кальци шингэрүүлсэн хүхрийн хүчилтэй урвалд орох тэгшитгэлийг бичнэ үү. [1]\n(b) Хийн бөмбөлөг яагаад удалгүй зогсдог вэ? [1]\n(c) Барийн гидроксидын уусмалд шингэрүүлсэн хүхрийн хүчил нэмэхэд юу ажиглагдах вэ? Ионы тэгшитгэлийг бичнэ үү. [2]",
        solutionEn: "(a) Ca(s) + H₂SO₄(aq) → CaSO₄(s) + H₂(g) [1]\n(b) Insoluble CaSO₄ forms a layer on the calcium and stops the reaction [1]\n(c) A white precipitate (of BaSO₄) [1] · Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) [1]",
        solutionMn: "(a) Ca + H₂SO₄ → CaSO₄(s) + H₂. (b) Уусдаггүй CaSO₄ кальцийн гадаргууг бүрхэж урвалыг зогсооно. (c) BaSO₄-ийн цагаан тунадас: Ba²⁺ + SO₄²⁻ → BaSO₄(s)."
      },
      {
        id: "ch11-q8",
        marks: 4,
        questionEn: "(a) Give the formula of calcium hydroxide and explain why it is used in agriculture. [2]\n(b) Explain why beryllium has a higher melting point than radium. [2]",
        questionMn: "(a) Кальцийн гидроксидын томьёог бичиж, хөдөө аж ахуйд яагаад хэрэглэдгийг тайлбарлана уу. [2]\n(b) Бериллий яагаад радиас өндөр хайлах цэгтэй вэ? [2]",
        solutionEn: "(a) Ca(OH)₂ [1] · it is a base that neutralises acidic soil [1]\n(b) Be²⁺ ions are much smaller, so the delocalised electrons are closer to the nuclei [1]\nStronger metallic bonding needs more energy to break [1]",
        solutionMn: "(a) Ca(OH)₂ — хүчиллэг хөрсийг саармагжуулах суурь. (b) Be²⁺ ион хамаагүй жижиг тул чөлөөт электрон цөмд ойр; металлын холбоо хүчтэй, таслахад их энерги хэрэгтэй."
      },
      {
        id: "ch11-q9",
        marks: 6,
        questionEn: "For each reaction give the oxidation number changes and state which element is oxidised and which is reduced:\n(a) Sr + Cl₂ → SrCl₂\n(b) Sr + 2H₂O → Sr(OH)₂ + H₂\n(c) 2Mg + CO₂ → 2MgO + C",
        questionMn: "Урвал бүрд исэлдэхүйн зэргийн өөрчлөлтийг бичиж, аль элемент исэлдэж, аль нь ангижирч байгааг хэлнэ үү:\n(a) Sr + Cl₂ → SrCl₂\n(b) Sr + 2H₂O → Sr(OH)₂ + H₂\n(c) 2Mg + CO₂ → 2MgO + C",
        solutionEn: "(a) Sr 0 → +2, oxidised [1] · Cl 0 → −1, reduced [1]\n(b) Sr 0 → +2, oxidised [1] · H +1 → 0, reduced [1]\n(c) Mg 0 → +2, oxidised [1] · C +4 → 0, reduced [1]",
        solutionMn: "(a) Sr 0 → +2 исэлдэнэ, Cl 0 → −1 ангижирна. (b) Sr 0 → +2 исэлдэнэ, H +1 → 0 ангижирна. (c) Mg 0 → +2 исэлдэнэ, C +4 → 0 ангижирна."
      },
      {
        id: "ch11-q10",
        marks: 3,
        questionEn: "Predict for radium:\n(a) the formula of its hydroxide and how its reactivity compares with barium [1]\n(b) the equation for radium oxide with dilute hydrochloric acid [1]\n(c) what you would see when dilute sulfuric acid is added to aqueous Ra(OH)₂ [1]",
        questionMn: "Радийн хувьд урьдчилан хэлнэ үү:\n(a) гидроксидын томьёо ба бартай харьцуулсан урвалын идэвх [1]\n(b) радийн исэл шингэрүүлсэн давсны хүчилтэй урвалд орох тэгшитгэл [1]\n(c) Ra(OH)₂-ийн уусмалд шингэрүүлсэн хүхрийн хүчил нэмэхэд юу ажиглагдах [1]",
        solutionEn: "(a) Ra(OH)₂ · more reactive than barium [1]\n(b) RaO + 2HCl → RaCl₂ + H₂O [1]\n(c) A white precipitate of RaSO₄ [1]",
        solutionMn: "(a) Ra(OH)₂; бариас идэвхтэй. (b) RaO + 2HCl → RaCl₂ + H₂O. (c) RaSO₄-ийн цагаан тунадас."
      }
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
