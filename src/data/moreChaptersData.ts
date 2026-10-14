import { Chapter } from "../types";

export const MORE_CHAPTERS_DATA: Chapter[] = [
  {
    id: 15,
    number: 15,
    level: "AS",
    category: "Organic",
    titleEn: "Hydrocarbons (Alkanes & Alkenes)",
    titleMn: "Нүүрсустөрөгчид (Алкан & Алкен)",
    descriptionEn: "Combustion, cracking, free-radical substitution mechanism of alkanes, electrophilic addition to alkenes (Markovnikov rule), oxidation with KMnO₄, and addition polymerisation.",
    descriptionMn: "Алканы шатах урвал, кракинг, чөлөөт радикалын халалцах урвал (эхлэл, өрнөл, төгсгөл); Алкений электрофиль нэгдэх урвал (Марковниковын дүрэм), KMnO₄-ийн исэлдэлт, полимержилт.",
    learningIntentionsEn: [
      "Explain unreactivity of alkanes (non-polar C-C and C-H bonds) and write complete/incomplete combustion equations",
      "Explain free-radical substitution mechanism of alkanes with Cl₂/Br₂: Initiation (UV light homolytic fission), Propagation (chain growth), Termination (radicals combine)",
      "Explain catalytic cracking to form smaller alkanes and alkenes",
      "Describe electrophilic addition to alkenes: H₂ (Ni cat, 150°C), HX(aq) (Markovnikov rule: major product from more stable carbocation), X₂(aq) (bromine water test: orange to colourless), steam (H₃PO₄ cat, 300°C, 60 atm)",
      "Describe oxidation of alkenes: Cold dilute KMnO₄ forms diol; Hot concentrated KMnO₄ cleaves C=C (CH₂= -> CO₂; CHR= -> RCOOH; CR₂= -> ketone)",
      "Describe addition polymerisation of alkenes and non-biodegradability"
    ],
    learningIntentionsMn: [
      "Алканы шатах урвалууд (бүрэн -> CO₂ + H₂O; дутуу -> хорт CO + H₂O)",
      "Чөлөөт радикалын халалцах механизм: 1) Initiation (Хэт ягаан туяанд Cl-Cl гомолитик тасрах); 2) Propagation (радикал нөхөн үржих); 3) Termination (2 радикал нийлэх)",
      "Алкений электрофиль нэгдэх урвал: HBr нэгдэхэд 2° карбкатион илүү тогтвортой тул 2-бромпропан гол бүтээгдэхүүн болно",
      "Бромын усны сорил: улбар шар өнгө арилж 1,2-дибромалкан үүснэ (ханаагүй холбоо таних)",
      "KMnO₄-ийн исэлдэлт: хүйтэн шингэрүүлсэн -> диол; халуун конц -> C=C холбоо тасарч CO₂, карбон хүчил эсвэл кетон үүснэ"
    ],
    subtopics: [
      {
        id: "15.1",
        number: "15.1",
        titleEn: "Free-Radical Substitution of Alkanes",
        titleMn: "Алканы чөлөөт радикалын халалцах урвал",
        summaryEn: "Initiation: Cl₂ -(UV)-> 2Cl·. Propagation: CH₄ + Cl· → ·CH₃ + HCl; ·CH₃ + Cl₂ → CH₃Cl + Cl·. Termination: ·CH₃ + Cl· → CH₃Cl; ·CH₃ + ·CH₃ → C₂H₆.",
        summaryMn: "Хэт ягаан туяанд Cl₂ нь Cl· чөлөөт радикал болж, гинжин урвалаар CH₃Cl, улмаар олон дахин халалцаж CH₂Cl₂, CHCl₃, CCl₄ үүсгэж болно.",
        keyConcepts: ["Homolytic fission by UV light", "Overall: CH₄ + Cl₂ → CH₃Cl + HCl", "Mixture of multi-halogenated products formed"]
      },
      {
        id: "15.2",
        number: "15.2",
        titleEn: "Electrophilic Addition & Carbocation Stability",
        titleMn: "Электрофиль нэгдэх механизм ба Карбкатионы тогтворжилт",
        summaryEn: "High electron density of C=C π-bond polarises H-Br. H⁺ attacks forming more stable carbocation intermediate (3° > 2° > 1°). Br⁻ attacks carbocation.",
        summaryMn: "C=C давхар холбоо нь H-Br-ийг туйлшруулж, 2° карбкатион (+I индукцийн нөлөөгөөр тогтвортой) үүсгэн гол бүтээгдэхүүн 2-бромпропан гарна.",
        keyConcepts: ["Markovnikov's Rule", "Tertiary & secondary carbocation stability", "Test for unsaturation using bromine water (orange to colourless)"]
      },
      {
        id: "15.3",
        number: "15.3",
        titleEn: "Alkenes Oxidation (KMnO₄) & Position of C=C",
        titleMn: "Алкенийг KMnO₄-өөр исэлдүүлж давхар холбооны байрлалыг олох",
        summaryEn: "Cold dilute KMnO₄: pale purple to colourless, forms diol. Hot concentrated KMnO₄: breaks C=C: =CH₂ gives CO₂ + H₂O; =CHR gives RCHO then RCOOH; =CR₁R₂ gives ketone.",
        summaryMn: "Халуун конц KMnO₄-өөр исэлдүүлж үүссэн бүтээгдэхүүнийг (CO₂, RCOOH, кетон) шинжлэн давхар холбооны анхны байршлыг тодорхойлно.",
        keyConcepts: ["CH₂= gives CO₂", "R-CH= gives RCOOH", "R₁R₂C= gives R₁COR₂"]
      }
    ],
    keyTerms: [
      { termEn: "Free-Radical Substitution", termMn: "Чөлөөт радикалын халалцах", definitionEn: "A reaction in which an atom in a molecule is replaced by a free radical through initiation, propagation, and termination steps.", definitionMn: "Хэт ягаан туяаны нөлөөгөөр үүссэн чөлөөт радикалуудын оролцоотойгоор явагдах халалцах урвал." },
      { termEn: "Electrophilic Addition", termMn: "Электрофиль нэгдэх урвал", definitionEn: "An addition reaction in which an electrophile attacks an electron-rich unsaturated π-bond, breaking it and forming two new σ-bonds.", definitionMn: "Электрон хомсдолтой электрофиль хэсэг нь C=C холбооны π-электрон үүлийг дайрч нэгдэх урвал." }
    ],
    formulas: [
      { nameEn: "Alkene Hydrogenation", nameMn: "Алкенийг устөрөгчжүүлэх", formula: "C₂H₄ + H₂ → C₂H₆ (Ni, 150°C)", note: "Used in margarine manufacturing" },
      { nameEn: "Alkene Hydration (Ethanol synthesis)", nameMn: "Алкенийг усжуулах", formula: "C₂H₄(g) + H₂O(g) ⇌ C₂H₅OH(g) (H₃PO₄, 300°C, 60 atm)", note: "Industrial synthesis of ethanol" }
    ],
    examStyleTips: [
      "In electrophilic addition mechanisms, ensure the curly arrow starts from the C=C double bond and points precisely at the δ+ hydrogen atom.",
      "Distinguish cold vs hot KMnO₄: Cold dilute gives a diol (mild test); Hot concentrated cleaves the double bond into carboxylic acids/ketones/CO₂."
    ]
  },
  {
    id: 16,
    number: 16,
    level: "AS",
    category: "Organic",
    titleEn: "Halogenoalkanes",
    titleMn: "Галогеналканууд (SN1 ба SN2 Механизм)",
    descriptionEn: "Nucleophilic substitution (with NaOH, KCN, NH₃), SN1 vs SN2 mechanisms, reactivity trends (C-I > C-Br > C-Cl > C-F), elimination reactions to form alkenes, and CFC environmental impact.",
    descriptionMn: "Нуклеофиль халалцах урвалууд (NaOH, KCN, NH₃-тэй), SN1 ба SN2 механизм, урвалын идэвх (C-I > C-Br > C-Cl), спиртэн дэх NaOH-той халаахад явагдах ялгарах (elimination) урвал, озоны давхарга ба CFC.",
    learningIntentionsEn: [
      "Explain nucleophilic substitution reactions of halogenoalkanes with: NaOH(aq) (forming alcohols), KCN in ethanol (forming nitriles, extending carbon chain), NH₃ in ethanol (forming amines)",
      "Describe SN2 mechanism for primary halogenoalkanes: one-step, backside attack, transition state, bimolecular rate = k[RX][OH⁻]",
      "Describe SN1 mechanism for tertiary halogenoalkanes: two-step, carbocation formation is slow step, unimolecular rate = k[RX]",
      "Explain reactivity trend: Iodoalkanes react fastest due to lowest C-I bond energy (228 kJ mol⁻¹), Fluoroalkanes slowest (C-F = 467 kJ mol⁻¹)",
      "Distinguish substitution (NaOH in water) vs elimination (NaOH in hot ethanol producing alkenes)",
      "Explain the destruction of the ozone layer by CFCs via chlorine free radicals"
    ],
    learningIntentionsMn: [
      "Нуклеофиль халалцах: 1) NaOH(aq) -> Спирт; 2) KCN (этанолд) -> Нитрил (нүүрстөрөгчийн хэлхээ 1-ээр уртасна); 3) NH₃ (этанолд, даралтад) -> Амин",
      "SN2 механизм (1-р зэргийн алкилгалогенид): 1 шаттай, нуклеофиль ар талаас довтолж завсрын төлөв үүсгэнэ, хурд = k[RX][Nu⁻]",
      "SN1 механизм (3-р зэргийн алкилгалогенид): 2 шаттай, C-X тасарч 3° карбкатион үүсэх нь удаан шат, хурд = k[RX]",
      "Урвалын хурд: C-I (228 kJ) < C-Br (290 kJ) < C-Cl (346 kJ) < C-F (467 kJ). Холбооны энерги бага байх тусам гидролиз хурдан явагдана!",
      "NaOH(aq) = Халалцах (Спирт үүснэ); NaOH(этанолд) + халаалт = Ялгарах (Алкен үүснэ)",
      "CFC нь хэт ягаан туяанд Cl· радикал ялгаруулж, озоны давхаргыг задалдаг"
    ],
    subtopics: [
      {
        id: "16.1",
        number: "16.1",
        titleEn: "Nucleophilic Substitution Mechanisms (SN1 vs SN2)",
        titleMn: "SN1 ба SN2 Механизмын ялгаа",
        summaryEn: "Primary RX uses SN2 (sterically accessible, bimolecular rate = k[RX][OH⁻]). Tertiary RX uses SN1 (steric hindrance prevents backside attack, stable 3° carbocation forms, unimolecular rate = k[RX]).",
        summaryMn: "1° алкилгалогенид SN2 механизмаар, 3° нь SN1 механизмаар явагдана. 2° нь хоёулангийнх нь холимогоор явагдана.",
        keyConcepts: ["SN2: one step with transition state", "SN1: two steps via carbocation intermediate", "Rate laws: SN2 is 2nd order, SN1 is 1st order"]
      },
      {
        id: "16.2",
        number: "16.2",
        titleEn: "Substitution vs Elimination Conditions",
        titleMn: "Халалцах ба Ялгарах урвалын нөхцөл",
        summaryEn: "NaOH(aq) reflux → Alcohol (Substitution). NaOH(ethanol) hot reflux → Alkene (Elimination of HX).",
        summaryMn: "Усан уусмал дахь NaOH нь халалцаж спирт үүсгэнэ. Спиртэн дэх NaOH нь HX-ийг салгаж алкен үүсгэнэ.",
        keyConcepts: ["Reagent condition changes product completely!", "C₂H₅Br + NaOH(eth) → C₂H₄ + H₂O + NaBr"]
      }
    ],
    keyTerms: [
      { termEn: "SN1 Mechanism", termMn: "SN1 Механизм", definitionEn: "Substitution Nucleophilic Unimolecular: A two-step mechanism where the leaving group leaves first to form a stable carbocation, followed by rapid attack by a nucleophile.", definitionMn: "Хоёр үе шаттай явагддаг, хурд тодорхойлогч шатандаа зөвхөн 1 молекул оролцдог нуклеофиль халалцах урвал." },
      { termEn: "SN2 Mechanism", termMn: "SN2 Механизм", definitionEn: "Substitution Nucleophilic Bimolecular: A concerted one-step mechanism where the nucleophile attacks from the opposite side as the leaving group departs.", definitionMn: "Нэгэн зэрэг нуклеофиль холбогдож, галоген салдаг нэг шаттай бимолекуляр халалцах урвал." }
    ],
    formulas: [
      { nameEn: "Nitrile Formation", nameMn: "Нитрил үүсэх", formula: "R-Br + KCN (in ethanol) → R-CN + KBr", note: "Adds 1 extra carbon to the chain" },
      { nameEn: "Amine Formation", nameMn: "Амин үүсэх", formula: "R-Br + 2NH₃ (in ethanol, heat/pressure) → R-NH₂ + NH₄Br", note: "Excess NH₃ prevents multi-alkylation" }
    ],
    examStyleTips: [
      "In testing rate of hydrolysis: use aqueous AgNO₃ with ethanol solvent. Order of yellow/cream/white ppt appearance: Iodoalkane (seconds) > Bromoalkane (minutes) > Chloroalkane (slow).",
      "Do NOT confuse reagent solvent: Aqueous NaOH produces alcohol; Ethanolic NaOH produces alkene!"
    ]
  },
  {
    id: 17,
    number: 17,
    level: "AS",
    category: "Organic",
    titleEn: "Alcohols, Esters & Carboxylic Acids",
    titleMn: "Спирт, Эстер ба Карбон хүчлүүд",
    descriptionEn: "Classification of alcohols (1°, 2°, 3°), oxidation with K₂Cr₂O₇/H⁺ (distillation vs reflux), esterification & hydrolysis (acid vs base), dehydration to alkenes, and sodium reaction.",
    descriptionMn: "Спиртийн ангилал (1°, 2°, 3°), K₂Cr₂O₇-оор исэлдүүлэх (дистилляциар альдегид, буцаан хөргөгчтэй рефлюксээр карбон хүчил), эстержилт ба гидролиз (хүчлийн ба шүлтийн), усгүйжих урвал.",
    learningIntentionsEn: [
      "Classify alcohols as primary (1°), secondary (2°), or tertiary (3°)",
      "Explain oxidation with acidified K₂Cr₂O₇: 1° alcohol -> aldehyde (distil off immediately) or carboxylic acid (heat under reflux with excess oxidising agent); 2° alcohol -> ketone (reflux); 3° alcohol -> NO reaction (remains orange)",
      "Describe esterification: carboxylic acid + alcohol (conc. H₂SO₄ catalyst, heat) ⇌ ester + water (sweet fruity smell)",
      "Distinguish Acid hydrolysis of esters (reversible, equilibrium mixture) vs Base hydrolysis (saponification, irreversible, forms carboxylate salt + alcohol)",
      "Describe dehydration of alcohols to alkenes using hot Al₂O₃ or conc. H₂SO₄ at 170°C",
      "Describe reaction with sodium metal: 2R-OH + 2Na → 2R-O⁻Na⁺ + H₂"
    ],
    learningIntentionsMn: [
      "Спиртийг ангилах: 1° (нэг алкил бүлэг), 2° (хоёр), 3° (гурван алкил бүлэг холбогдсон)",
      "Хүчиллэгжүүлсэн K₂Cr₂O₇-оор исэлдүүлэх (улбар шар → ногоон Cr³⁺): 1° спирт -> Альдегид (шууд нэрж авна) эсвэл Карбон хүчил (илүүдэл исэлдүүлэгчтэй буцалгана); 2° спирт -> Кетон; 3° спирт -> исэлдэхгүй (улбар шар хэвээр үлдэнэ)",
      "Эстержилт: Карбон хүчил + Спирт (конц H₂SO₄) ⇌ Эстер + Ус (жимслэг сайхан үнэртэй)",
      "Эстерийн гидролиз: Хүчлийн (эргэх урвал) ба Шүлтийн (эргэхгүй, саванжилт, давс + спирт үүснэ)",
      "Спиртийн усгүйжилт: Халуун Al₂O₃ эсвэл конц H₂SO₄ (170°C) -> Алкен + H₂O",
      "Натрийн металлтай урвал: 2ROH + 2Na → 2RONa + H₂ (устөрөгчийн хий ялгарна)"
    ],
    subtopics: [
      {
        id: "17.1",
        number: "17.1",
        titleEn: "Oxidation of 1°, 2°, 3° Alcohols",
        titleMn: "1°, 2°, 3° Спиртүүдийн исэлдэлт",
        summaryEn: "Acidified K₂Cr₂O₇ turns orange (Cr₂O₇²⁻) to green (Cr³⁺). 1°: RCH₂OH + [O] → RCHO + H₂O (distil immediately); RCH₂OH + 2[O] → RCOOH + H₂O (reflux). 2°: R₁CH(OH)R₂ + [O] → R₁COR₂ + H₂O (ketone). 3°: R₃COH + [O] → No Reaction.",
        summaryMn: "3° спиртэнд -OH холбогдсон нүүрстөрөгч дээр устөрөгчийн атом байхгүй тул ердийн исэлдүүлэгчээр исэлддэггүй.",
        keyConcepts: ["Distillation apparatus to isolate aldehyde", "Reflux apparatus for complete oxidation to acid", "Colour change: orange to green"]
      },
      {
        id: "17.2",
        number: "17.2",
        titleEn: "Esterification & Hydrolysis of Esters",
        titleMn: "Эстер үүсэх ба Эстерийн гидролиз",
        summaryEn: "Carboxylic acid + alcohol ⇌ ester + H₂O (conc. H₂SO₄ cat). Naming: alkyl part from alcohol (e.g. ethyl), carboxylate part from acid (e.g. propanoate) -> ethyl propanoate. Base hydrolysis: RCOOR' + NaOH → RCOO⁻Na⁺ + R'OH (irreversible).",
        summaryMn: "Эстерийн нэршлийн эхний үг нь спиртээс (этил), дараагийн үг нь хүчлээс (пропаноат) гарна -> этилпропаноат.",
        keyConcepts: ["Acid hydrolysis is reversible equilibrium", "Base hydrolysis goes to completion (saponification)"]
      }
    ],
    keyTerms: [
      { termEn: "Reflux", termMn: "Буцаан хөргөлттэй халаалт (Reflux)", definitionEn: "The continuous boiling and condensing of a reaction mixture to prevent loss of volatile liquids while allowing extended reaction time.", definitionMn: "Дэгдэмхий шингэнийг ууршуулан алдахгүйгээр бүрэн урвалд оруулахын тулд босоо хөргөгчөөр буцаан конденсацлуулан халаах арга." },
      { termEn: "Esterification", termMn: "Эстержилт", definitionEn: "The condensation reaction between an alcohol and a carboxylic acid in the presence of a strong acid catalyst to form an ester and water.", definitionMn: "Хүчлийн катализаторын оролцоотойгоор спирт ба карбон хүчил харилцан үйлчилж эстер болон ус үүсгэх конденсацын урвал." }
    ],
    formulas: [
      { nameEn: "Esterification", nameMn: "Эстер үүсэх", formula: "RCOOH + R'OH ⇌ RCOOR' + H₂O (conc. H₂SO₄)", note: "Reversible condensation" },
      { nameEn: "Base Hydrolysis of Ester", nameMn: "Эстерийн шүлтийн гидролиз", formula: "RCOOR' + NaOH(aq) → RCOONa(aq) + R'OH(aq)", note: "Irreversible reaction to completion" }
    ],
    examStyleTips: [
      "To obtain an aldehyde from a primary alcohol, you MUST distil the aldehyde off as it forms, otherwise it will be further oxidised to the carboxylic acid.",
      "To test for -OH group: Add solid PCl₅ at room temperature -> steamy white fumes of HCl gas indicate presence of -OH."
    ]
  },
  {
    id: 18,
    number: 18,
    level: "AS",
    category: "Organic",
    titleEn: "Carbonyl Compounds (Aldehydes & Ketones)",
    titleMn: "Карбонилт нэгдлүүд (Альдегид ба Кетон)",
    descriptionEn: "Reactions of aldehydes and ketones: reduction (NaBH₄), nucleophilic addition with HCN, identification with 2,4-DNPH, Tollens' and Fehling's reagents, iodoform (tri-iodomethane) test, and Infrared (IR) spectroscopy.",
    descriptionMn: "Альдегид, кетоны урвалууд: NaBH₄-өөр ангижрах, HCN-тэй нуклеофиль нэгдэх, 2,4-DNPH сорил, Толленс (мөнгөн толь) ба Фелингийн сорил, Трииодметан (иодоформ) сорил, Хэт улаан туяаны спектроскопи (IR).",
    learningIntentionsEn: [
      "Describe reduction: Aldehyde -> 1° alcohol; Ketone -> 2° alcohol using NaBH₄ in aqueous alkali or LiAlH₄ in dry ether",
      "Describe nucleophilic addition mechanism of HCN/KCN across polarized C=O bond to form 2-hydroxynitriles",
      "Test for carbonyl group (>C=O): 2,4-DNPH gives deep orange/yellow precipitate (melting point identifies specific compound)",
      "Distinguish aldehydes from ketones: Tollens' reagent (silver mirror for aldehyde, none for ketone); Fehling's solution (blue solution to red-orange Cu₂O precipitate for aldehyde, none for ketone)",
      "Describe the Tri-iodomethane (iodoform) test: alkaline I₂ gives yellow precipitate (CHI₃) with CH₃CO- group (ethanal, methyl ketones) and CH₃CH(OH)- group (ethanol, secondary methyl alcohols)",
      "Interpret Infrared (IR) spectra to identify functional groups (O-H broad 3200-3600 cm⁻¹, C=O sharp 1680-1750 cm⁻¹, C-O 1040-1300 cm⁻¹, N-H 3300-3500 cm⁻¹)"
    ],
    learningIntentionsMn: [
      "Ангижрах урвал: Альдегид -> 1° спирт, Кетон -> 2° спирт (NaBH₄ усан уусмалд)",
      "HCN-тэй нуклеофиль нэгдэх: C=O холбоон дээр :CN⁻ довтолж 2-гидроксинитрил үүсгэнэ (нүүрстөрөгчийн хэлхээ уртасна)",
      "Карбонилын бүлэг таних: 2,4-DNPH нэмэхэд улбар шар тунадас үүснэ",
      "Альдегид ба кетоныг ялгах сорил: 1) Толленсийн урвалж (альдегид мөнгөн толь үүсгэнэ); 2) Фелингийн уусмал (альдегид цэнхэрээс тоосгон улаан Cu₂O тунадас болно)",
      "Трииодметан (иодоформ) сорил: Шүлтлэг I₂-той халаахад шар талст CHI₃ үүсэх (CH₃C=O болон CH₃CH(OH)- бүлэгтэй нэгдлүүдийг танина)",
      "Хэт улаан туяаны спектроскопи (IR): O-H өргөн оргил (3200-3600 cm⁻¹), C=O хурц гүн оргил (1680-1750 cm⁻¹)"
    ],
    subtopics: [
      {
        id: "18.1",
        number: "18.1",
        titleEn: "Nucleophilic Addition of HCN",
        titleMn: "HCN-тэй нуклеофиль нэгдэх механизм",
        summaryEn: "Polar C=O carbon (δ+) is attacked by :CN⁻ nucleophile. Negatively charged intermediate accepts H⁺ to form 2-hydroxynitrile. Increases carbon chain length by 1.",
        summaryMn: "1) :CN⁻ нь δ+ нүүрстөрөгчийг дайрна; 2) Завсрын O⁻ нь H⁺ авч 2-гидроксинитрил болно. Улмаар гидролизоор 2-гидроксикарбон хүчил болж болно.",
        keyConcepts: ["KCN catalyst provides :CN⁻", "Produces a chiral centre (racemic mixture)"]
      },
      {
        id: "18.2",
        number: "18.2",
        titleEn: "Diagnostic Tests for Carbonyls",
        titleMn: "Карбонилт нэгдлүүдийн таних урвалууд",
        summaryEn: "2,4-DNPH: Orange precipitate with ALL aldehydes and ketones. Tollens' ([Ag(NH₃)₂]⁺): Silver mirror with aldehydes only (Ag⁺ reduced to Ag). Fehling's (Cu²⁺): Red-orange Cu₂O precipitate with aliphatic aldehydes only. Tri-iodomethane test: Alkaline I₂ gives pale yellow antiseptic-smelling CHI₃ precipitate with CH₃CO- and CH₃CH(OH)-.",
        summaryMn: "2,4-DNPH (альдегид/кетон бүгд улбар шар); Толленс (зөвхөн альдегид мөнгөн толь); Иодоформ (CH₃CO- ба CH₃CH(OH)- бүлэгтэй бол шар тунадас).",
        keyConcepts: ["Tollens: RCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → RCOO⁻ + 2Ag(s) + 4NH₃ + 2H₂O", "Iodoform test gives yellow CHI₃ (MP 119°C)"]
      },
      {
        id: "18.3",
        number: "18.3",
        titleEn: "Infrared Spectroscopy (IR)",
        titleMn: "Хэт улаан туяаны спектроскопи",
        summaryEn: "Bonds vibrate at characteristic resonance frequencies. IR identifies functional groups: Broad O-H (alcohol 3200-3600 cm⁻¹, carboxylic acid very broad 2500-3000 cm⁻¹), Sharp C=O (1680-1750 cm⁻¹), C-O (1040-1300 cm⁻¹), N-H (3300-3500 cm⁻¹).",
        summaryMn: "Спектрийн шингээлтийн долгионы тоогоор (cm⁻¹) функциональ бүлгийг тодорхойлно.",
        keyConcepts: ["Carboxylic acid has BOTH broad O-H (2500-3000) and sharp C=O (1710)", "Ester has sharp C=O (1735) and C-O (1200) but NO O-H"]
      }
    ],
    keyTerms: [
      { termEn: "Tollens' Reagent", termMn: "Толленсийн урвалж", definitionEn: "An aqueous solution of silver nitrate in excess ammonia [Ag(NH₃)₂]⁺ used as a mild oxidising agent to distinguish aldehydes (forms silver mirror) from ketones (no reaction).", definitionMn: "Альдегидийг кетоноос ялгахад хэрэглэдэг аммиак дахь мөнгөний нитратын уусмал (альдегидтэй мөнгөн толь үүсгэнэ)." },
      { termEn: "Tri-iodomethane Test (Iodoform Test)", termMn: "Трииодметан (Иодоформ) сорил", definitionEn: "A test using iodine and aqueous sodium hydroxide that produces a pale yellow precipitate of CHI₃ with compounds containing CH₃CO- or CH₃CH(OH)- groups.", definitionMn: "CH₃CO- эсвэл CH₃CH(OH)- бүлэг агуулсан нэгдлүүдийг таних шар өнгийн CHI₃ тунадас үүсгэдэг сорил." }
    ],
    formulas: [
      { nameEn: "Carbonyl Reduction to Alcohol", nameMn: "Карбонил ангижрах", formula: "RCHO + 2[H] → RCH₂OH (NaBH₄)", note: "Aldehyde to primary alcohol" },
      { nameEn: "Ketone Reduction to Alcohol", nameMn: "Кетон ангижрах", formula: "RCOR' + 2[H] → RCH(OH)R' (NaBH₄)", note: "Ketone to secondary alcohol" }
    ],
    examStyleTips: [
      "In the iodoform test, remember that ETHANOL is the only primary alcohol that gives a positive result. Methanol, propan-1-ol, butan-1-ol do NOT.",
      "In IR spectra: Carboxylic acid O-H is very broad (2500-3000 cm⁻¹) overlapping with C-H, while Alcohol O-H is a distinct broad trough (3200-3600 cm⁻¹)."
    ]
  },
  {
    id: 19,
    number: 19,
    level: "A2",
    category: "Physical",
    titleEn: "Lattice Energy & Born-Haber Cycles",
    titleMn: "Торын энерги & Борн-Хаберын цикл",
    descriptionEn: "Lattice energy (ΔH⦵latt), enthalpy of atomisation, electron affinity, Born-Haber cycles, factors affecting lattice energy (ionic charge & ionic radius), enthalpy of solution (ΔH⦵sol), and hydration (ΔH⦵hyd).",
    descriptionMn: "Талст оронт торын энерги (ΔH⦵latt), атомчлагдахын энтальпи, электрон нэгдүүлэлтийн энерги, Борн-Хаберын цикл, ионы цэнэг ба радиусын нөлөө, уусахын энтальпи ба гидратжихын энтальпи.",
    learningIntentionsEn: [
      "Define lattice energy (ΔH⦵latt): enthalpy change when 1 mole of an ionic compound is formed from its gaseous ions under standard conditions (always exothermic, negative)",
      "Define first electron affinity (EA₁): enthalpy change when 1 mole of electrons is added to 1 mole of gaseous atoms to form 1 mole of gaseous 1- ions (exothermic, but 2nd EA is always endothermic)",
      "Construct and calculate from Born-Haber cycles: ΔH⦵f = ΔH⦵at(metal) + IE₁(metal) + ΔH⦵at(non-metal) + EA₁(non-metal) + ΔH⦵latt",
      "Explain factors affecting lattice energy: higher ionic charge and smaller ionic radius increase lattice energy magnitude (more exothermic)",
      "Define enthalpy of solution (ΔH⦵sol) and hydration (ΔH⦵hyd), and construct solution enthalpy cycles: ΔH⦵sol = ΣΔH⦵hyd - ΔH⦵latt",
      "Explain Group 2 sulfate solubility decrease down group (hydration enthalpy decreases more rapidly than lattice energy, making ΔH⦵sol more endothermic)"
    ],
    learningIntentionsMn: [
      "Торын энергийн тодорхойлолт: Стандарт нөхцөлд хийн төлөв дэх ионуудаас 1 моль ионы нэгдэл үүсэх үеийн энтальпийн өөрчлөлт (дандаа экзотерм, хасах утгатай)",
      "1-р электрон нэгдүүлэлтийн энерги (экзотерм), 2-р электрон нэгдүүлэлт дандаа эндотерм (+) байна",
      "Борн-Хаберын цикл байгуулж, торын энергийг тооцоолох",
      "Торын энергид нөлөөлөх хүчин зүйл: Ионы цэнэг ихсэх ба радиус багасах тусам торын энерги илүү их дулаан ялгаруулна (илүү бат бөх тор)",
      "Уусахын ба гидратжихын энтальпийн цикл: ΔH⦵sol = ΔH⦵hyd(катион) + ΔH⦵hyd(анион) - ΔH⦵latt",
      "2-р бүлгийн сульфатуудын уусах чанар доошлох тусам буурах шалтгаан: катионы гидратжих энтальпийн бууралт нь торын энергийн бууралтаас илүү хурдан тул ΔH⦵sol нь илүү эндотерм болдог"
    ],
    subtopics: [
      {
        id: "19.1",
        number: "19.1",
        titleEn: "Born-Haber Cycle Construction & Calculations",
        titleMn: "Борн-Хаберын цикл байгуулалт ба тооцоолол",
        summaryEn: "Hess's Law cycle: Elements in standard state -> Atomisation of metal -> Ionisation of metal -> Atomisation of non-metal -> Electron affinity of non-metal -> Gaseous ions -> Lattice energy -> Ionic compound.",
        summaryMn: "Борн-Хаберын циклээр торын энергийг бодохдоо коэффицентийг (жишээ нь MgCl₂-д 2 × Cl atomisation, 2 × EA₁) анхаарах хэрэгтэй.",
        keyConcepts: ["2nd EA is always endothermic due to electron-electron repulsion with negative ion", "ΔH⦵latt = ΔH⦵f - ΔH⦵1"]
      },
      {
        id: "19.2",
        number: "19.2",
        titleEn: "Enthalpy of Solution & Hydration",
        titleMn: "Уусах ба Гидратжихын энтальпи",
        summaryEn: "Dissolving an ionic solid involves breaking lattice (+ΔHlatt) and hydrating ions (-ΔHhyd). ΔH⦵sol = ΔH⦵hyd(cations) + ΔH⦵hyd(anions) - ΔH⦵latt. If ΔH⦵sol is exothermic or slightly endothermic, the substance dissolves readily.",
        summaryMn: "Ионы нэгдэл усанд уусахад оронт тор задарч (+), үүссэн ионууд усаар хүрээлэгдэн гидратжина (-).",
        keyEquations: ["ΔH⦵sol = ΣΔH⦵hyd - ΔH⦵latt", "ΔH⦵latt + ΔH⦵sol = ΣΔH⦵hyd"]
      }
    ],
    keyTerms: [
      { termEn: "Lattice Energy (ΔH⦵latt)", termMn: "Торын энерги", definitionEn: "The enthalpy change when one mole of an ionic compound is formed from its constituent gaseous ions under standard conditions.", definitionMn: "Стандарт нөхцөлд хийн төлөв дэх ионуудаас 1 моль ионы талст тор үүсэх үеийн энтальпийн өөрчлөлт." },
      { termEn: "Enthalpy Change of Hydration (ΔH⦵hyd)", termMn: "Гидратжихын энтальпи", definitionEn: "The enthalpy change when one mole of specified gaseous ions dissolves in sufficient water to form a very dilute solution (always exothermic).", definitionMn: "Хийн төлөв дэх 1 моль ион усанд уусаж маш шингэрүүлсэн уусмал үүсгэх үеийн энтальпийн өөрчлөлт." }
    ],
    formulas: [
      { nameEn: "Lattice Energy Formula", nameMn: "Торын энергийн томьёо", formula: "ΔH⦵latt = ΔH⦵f - [ΣΔH⦵at + ΣIE + ΣEA]", note: "Always highly negative" },
      { nameEn: "Enthalpy of Solution", nameMn: "Уусахын энтальпи", formula: "ΔH⦵sol = ΔH⦵hyd(cation) + ΔH⦵hyd(anion) - ΔH⦵latt", note: "Lattice energy subtracted" }
    ],
    examStyleTips: [
      "In Born-Haber cycle for MgCl₂: remember you need IE₁ + IE₂ for Mg, and 2 × ΔH⦵at[Cl] + 2 × EA₁[Cl] for chlorine!",
      "Lattice energy is always negative by IUPAC definition (exothermic formation from gaseous ions)."
    ]
  },
  {
    id: 20,
    number: 20,
    level: "A2",
    category: "Physical",
    titleEn: "Electrochemistry (Cells & Nernst Equation)",
    titleMn: "Электрохими (Галваны элемент, E° ба Нернстийн тэгшитгэл)",
    descriptionEn: "Electrolysis quantitative laws (Q = It, F = Le), standard electrode potentials (E⦵), standard hydrogen electrode, electrochemical cell potential (E⦵cell), predicting reaction feasibility, and Nernst equation.",
    descriptionMn: "Электролиз (Фарадейн хууль Q = It, F = Le), стандарт электродын потенциал (E°), стандарт устөрөгчийн электрод, эсийн потенциал E°cell, урвал явагдах боломжийг E°-ээр тодорхойлох, Нернстийн тэгшитгэл.",
    learningIntentionsEn: [
      "Calculate charge Q = I × t and apply Faraday constant F = 96 500 C mol⁻¹ to find mass/volume of substances liberated in electrolysis",
      "State relationship F = Le where L is Avogadro's constant and e is the charge on an electron (1.60 × 10⁻¹⁹ C)",
      "Describe the standard hydrogen electrode (SHE): 1.00 mol dm⁻³ H⁺(aq), 101 kPa H₂(g), Pt black electrode at 298 K, E⦵ = 0.00 V",
      "Calculate standard cell potential: E⦵cell = E⦵(reduction) - E⦵(oxidation) = E⦵(positive pole) - E⦵(negative pole)",
      "Predict feasibility of redox reactions: feasible if E⦵cell > 0",
      "Apply the Nernst equation: E = E⦵ + (0.059 / z) log₁₀ [oxidised form] / [reduced form] at 298 K"
    ],
    learningIntentionsMn: [
      "Цэнэг Q = I × t (Кулон) ба Фарадейн тогтмол F = 96 500 C/mol ашиглан электролизоор ялгарах бодисын масс/эзлэхүүнийг тооцоолох",
      "F = Le хамаарал (Авогадрогийн тогтмол L = F / e)",
      "Стандарт устөрөгчийн электрод (SHE): 1 mol/dm³ H⁺, 1 атм H₂ хий, платин ялтас, E° = 0.00 V",
      "Эсийн потенциал тооцоолох: E°cell = E°(эерэг туйл) - E°(сөрөг туйл). Электронууд сөрөг туйлаас эерэг туйл руу гадаад утсаар урсана",
      "Урвал өөрөө явагдах боломж: E°cell > 0 үед урвал явагдах боломжтой (feasible)",
      "Нернстийн тэгшитгэл: Концентраци өөрчлөгдөхөд электродын потенциал E хэрхэн өөрчлөгдөхийг тооцоолох"
    ],
    subtopics: [
      {
        id: "20.1",
        number: "20.1",
        titleEn: "Quantitative Electrolysis (Faraday's Laws)",
        titleMn: "Электролизийн тоон тооцоо (Фарадейн хууль)",
        summaryEn: "Q = I × t. 1 mole of electrons = 1 Faraday = 96 500 C. To deposit 1 mol Ag⁺ requires 1F; 1 mol Cu²⁺ requires 2F; 1 mol Al³⁺ requires 3F; 1 mol O₂ (from 4OH⁻) requires 4F.",
        summaryMn: "Цэнэг Q = I × t. Cu²⁺ + 2e⁻ → Cu тул 1 моль зэс ялгаруулахад 2F (2 × 96500 C) цэнэг хэрэгтэй.",
        keyConcepts: ["F = L × e = 96 500 C mol⁻¹", "Experimental determination of Avogadro constant using Cu cell"]
      },
      {
        id: "20.2",
        number: "20.2",
        titleEn: "Standard Electrode Potentials & Cell Voltage",
        titleMn: "Стандарт электродын потенциал & Эсийн хүчдэл",
        summaryEn: "More positive E⦵ = stronger oxidising agent (gains e⁻, forward reduction favoured). More negative E⦵ = stronger reducing agent (loses e⁻, reverse oxidation favoured). E⦵cell = E⦵(reduction) - E⦵(oxidation).",
        summaryMn: "E° нь илүү эерэг байх тусам хүчтэй исэлдүүлэгч болно. E°cell = E°(исэлдүүлэгч) - E°(ангижруулагч).",
        keyConcepts: ["Salt bridge (KNO₃ soaked filter paper) maintains ionic neutrality without electron conduction", "Electrons flow through external wire from negative to positive electrode"]
      },
      {
        id: "20.3",
        number: "20.3",
        titleEn: "The Nernst Equation & Non-Standard Conditions",
        titleMn: "Нернстийн тэгшитгэл ба Стандарт бус нөхцөл",
        summaryEn: "E = E⦵ + (0.059/z) log₁₀ [oxidised]/[reduced]. For metal electrode: E = E⦵ + (0.059/z) log₁₀ [M^z+]. Higher cation concentration makes E more positive.",
        summaryMn: "Ионы концентраци 1 mol/dm³-ээс ихэсвэл электродын потенциал E илүү эерэг болно.",
        keyEquations: ["E = E⦵ + (0.059 / z) log₁₀ [oxidised form]", "ΔG⦵ = -nFE⦵cell"]
      }
    ],
    keyTerms: [
      { termEn: "Standard Electrode Potential (E⦵)", termMn: "Стандарт электродын потенциал", definitionEn: "The voltage of a half-cell under standard conditions (298 K, 101 kPa, 1.00 mol dm⁻³ ion concentration) measured against the standard hydrogen electrode.", definitionMn: "Стандарт нөхцөлд стандарт устөрөгчийн электродтой харьцуулан хэмжсэн хагас эсийн хүчдэл." },
      { termEn: "Faraday Constant (F)", termMn: "Фарадейн тогтмол", definitionEn: "The electric charge carried by one mole of electrons, equal to 96 500 C mol⁻¹ (F = Le).", definitionMn: "1 моль электроны зөөх нийт цахилгаан цэнэг (96 500 Кл/моль)." }
    ],
    formulas: [
      { nameEn: "Charge from Current & Time", nameMn: "Цахилгаан цэнэг", formula: "Q = I × t", note: "I in Amperes, t in seconds" },
      { nameEn: "Standard Cell Potential", nameMn: "Эсийн стандарт потенциал", formula: "E⦵cell = E⦵(positive pole) - E⦵(negative pole)", note: "Must be positive for feasible reaction" },
      { nameEn: "Nernst Equation at 298 K", nameMn: "Нернстийн тэгшитгэл", formula: "E = E⦵ + (0.059 / z) log₁₀ [M^z+]", note: "z = number of electrons transferred" }
    ],
    examStyleTips: [
      "Feasibility prediction with E⦵: If E⦵cell is positive, reaction is thermodynamically feasible, but may be impractically slow at room temperature due to high activation energy.",
      "In cell diagrams: show voltmeter, high-resistance circuit, salt bridge, 1.00 mol dm⁻³ solution concentrations, and specify 298 K and 101 kPa."
    ]
  },
  {
    id: 21,
    number: 21,
    level: "A2",
    category: "Physical",
    titleEn: "Further Aspects of Equilibria (Ka, Kw, Buffers, Ksp)",
    titleMn: "Тэнцвэрийн гүнзгийрүүлсэн сэдвүүд (Ka, Kw, Буфер, Ksp)",
    descriptionEn: "Conjugate acid-base pairs, ionic product of water (Kw), acid dissociation constant (Ka, pKa), buffer solutions & calculations, solubility product (Ksp), common ion effect, and partition coefficient (Kpc).",
    descriptionMn: "Холбогдсон хүчил-суурийн хос, усны ионы үржвэр Kw, хүчлийн диссоциацийн тогтмол Ka ба pKa, буфер уусмалын механизм ба pH тооцоо, уусамтгайн үржвэр Ksp ба ижил ионы нөлөө, түгээлтийн коэффициент Kpc.",
    learningIntentionsEn: [
      "Define Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K and calculate pH of strong bases",
      "Calculate pH of weak acids using Ka: [H⁺] = √(Ka × [HA]), pH = -log₁₀[H⁺]",
      "Define buffer solution and explain how buffer maintains pH on adding small amounts of acid/alkali",
      "Calculate buffer pH: pH = pKa + log₁₀([salt] / [acid])",
      "Explain biological buffering in blood by HCO₃⁻ / H₂CO₃ system maintaining blood pH between 7.35 and 7.45",
      "Define solubility product Ksp, calculate Ksp from solubility (and vice versa), and predict precipitation",
      "Explain the common ion effect on solubility using Le Chatelier's principle",
      "Define partition coefficient Kpc = [X(solvent A)] / [X(solvent B)]"
    ],
    learningIntentionsMn: [
      "Усны ионы үржвэр: Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ (298 K). Хүчтэй шүлтийн [H⁺] = Kw / [OH⁻], pH = -log[H⁺]",
      "Сул хүчлийн pH бодох: [H⁺] = √(Ka × c), pH = -log[H⁺], pKa = -log Ka",
      "Буфер уусмал: Бага хэмжээний хүчил эсвэл шүлт нэмэхэд pH-ээ бараг өөрчлөхгүй тогтмол барих чадвартай уусмал",
      "Буферийн pH тооцоо: pH = pKa + log([давс] / [хүчил]) (Хендерсон-Хассельбалхын тэгшитгэл)",
      "Цусны pH-ийг 7.35-7.45 хооронд тогтоон барьдаг нүүрсхүчлийн хий/гидрокарбонатын (CO₂/HCO₃⁻) буфер систем",
      "Уусамтгайн үржвэр Ksp тооцоолох ба тунадас буух эсэхийг урьдчилан таамаглах ([ионуудын үржвэр] > Ksp үед тунадас бууна)",
      "Ижил ионы нөлөө: Уусмалд ижил анион эсвэл катион нэмэхэд тэнцвэр зүүн тийш шилжиж уусах чанар буурна"
    ],
    subtopics: [
      {
        id: "21.1",
        number: "21.1",
        titleEn: "pH of Weak Acids & Ka / pKa",
        titleMn: "Сул хүчлийн pH ба Ka / pKa тооцоо",
        summaryEn: "Ka = [H⁺][A⁻] / [HA]. Assuming [H⁺] = [A⁻] and [HA]eqm ≈ [HA]initial: [H⁺] = √(Ka × [HA]). pKa = -log₁₀Ka. Smaller pKa = stronger acid.",
        summaryMn: "Сул хүчилд [H⁺] = √(Ka × [хүчил]). pKa бага байх тусам хүчил илүү хүчтэй байна.",
        keyEquations: ["[H⁺] = √(Ka × [HA])", "pH = -log₁₀[H⁺]", "pKa = -log₁₀Ka"]
      },
      {
        id: "21.2",
        number: "21.2",
        titleEn: "Buffer Solutions & Blood Buffering",
        titleMn: "Буфер уусмал ба Цусны буфер систем",
        summaryEn: "Ethanoic acid + sodium ethanoate: High reserve of CH₃COOH and CH₃COO⁻. Adding H⁺: reacts with CH₃COO⁻ → CH₃COOH. Adding OH⁻: reacts with CH₃COOH → CH₃COO⁻ + H₂O. Blood buffer: CO₂(aq) + H₂O(l) ⇌ H⁺(aq) + HCO₃⁻(aq).",
        summaryMn: "Буфер уусмалын томьёо: pH = pKa + log₁₀([давс]/[хүчил]). Цусны хүчиллэг ихсэхэд H⁺ нь HCO₃⁻-тэй нэгдэж CO₂ болж уушгиар гадагшилна.",
        keyEquations: ["pH = pKa + log₁₀([salt] / [acid])", "[H⁺] = Ka × ([acid] / [salt])"]
      },
      {
        id: "21.3",
        number: "21.3",
        titleEn: "Solubility Product (Ksp) & Common Ion Effect",
        titleMn: "Уусамтгайн үржвэр (Ksp) ба Ижил ионы нөлөө",
        summaryEn: "For AxBy(s) ⇌ xA^y+(aq) + yB^x-(aq): Ksp = [A^y+]^x [B^x-]^y. Adding common ion (e.g. NaCl to AgCl) increases [Cl⁻], shifting equilibrium left and reducing AgCl solubility.",
        summaryMn: "AgCl(s) ⇌ Ag⁺ + Cl⁻. Хэрэв уусмалд NaCl нэмбэл Cl⁻ нэмэгдэж тэнцвэр зүүн тийш шилжин AgCl улам бага уусна.",
        keyEquations: ["Ksp = [C^y+]^a [A^x-]^b", "Precipitation occurs if ion product > Ksp"]
      }
    ],
    keyTerms: [
      { termEn: "Buffer Solution", termMn: "Буфер уусмал", definitionEn: "A solution that minimises changes in pH when small amounts of acid or base are added.", definitionMn: "Бага хэмжээний хүчил эсвэл шүлт нэмэхэд pH-ийн огцом өөрчлөлтөөс хамгаалж тогтмол барьдаг уусмал." },
      { termEn: "Solubility Product (Ksp)", termMn: "Уусамтгайн үржвэр", definitionEn: "The equilibrium constant for a saturated solution of a sparingly soluble ionic compound, equal to the product of ion concentrations raised to their stoichiometric powers.", definitionMn: "Бага уусдаг ионы нэгдлийн ханасан уусмал дахь ионуудын молийн концентрациудын зэрэгт үржвэр." }
    ],
    formulas: [
      { nameEn: "Weak Acid [H⁺]", nameMn: "Сул хүчлийн устөрөгчийн ион", formula: "[H⁺] = √(Ka × [HA])", note: "Valid when degree of dissociation < 5%" },
      { nameEn: "Henderson-Hasselbalch Buffer", nameMn: "Буферийн pH томьёо", formula: "pH = pKa + log₁₀([Salt] / [Acid])", note: "Ratio of conjugate base to acid" },
      { nameEn: "Solubility Product", nameMn: "Ksp томьёо", formula: "Ksp = [M^m+]^a [X^x-]^b", note: "Units depend on powers: mol^(a+b) dm^(-3(a+b))" }
    ],
    examStyleTips: [
      "In buffer calculations, note that volumes cancel out in [salt]/[acid], so you can directly use the ratio of moles of salt to moles of acid!",
      "When comparing solubility in pure water vs a solution with a common ion: solubility is ALWAYS lower in the presence of the common ion."
    ]
  },
  {
    id: 22,
    number: 22,
    level: "A2",
    category: "Physical",
    titleEn: "Reaction Kinetics (Rate Equations & Mechanisms)",
    titleMn: "Урвалын кинетик (Хурдны тэгшитгэл ба Механизм)",
    descriptionEn: "Rate equations (rate = k[A]^m[B]^n), orders of reaction (0, 1, 2), determining orders from initial rate data, half-life of 1st order reactions (t½ = 0.693/k), rate-determining step (RDS), and reaction mechanisms.",
    descriptionMn: "Хурдны тэгшитгэл (rate = k[A]^m[B]^n), урвалын эрэмбэ (0, 1, 2), анхны хурдны өгөгдлөөс эрэмбэ олох, 1-р эрэмбийн урвалын хагас задралын хугацаа (t½ = 0.693/k), хурд тодорхойлогч шат (RDS) ба механизмын таамаглал.",
    learningIntentionsEn: [
      "Construct rate equations: rate = k[A]^m[B]^n, where m and n are orders with respect to reactants A and B",
      "Deduce orders from initial rates table: doubling [A] with rate doubling = 1st order; quadrupling = 2nd order; no change = 0 order",
      "Calculate rate constant k and deduce its units from rate equation",
      "Recognize that for 1st order reaction, half-life t½ is constant and independent of concentration: k = 0.693 / t½",
      "Deduce the rate-determining step (slow step) and propose mechanisms consistent with experimental rate equations"
    ],
    learningIntentionsMn: [
      "Хурдны тэгшитгэл зохиох: rate = k[A]^m[B]^n. Нийт эрэмбэ = m + n",
      "Туршилтын өгөгдлөөс эрэмбэ олох: Концентраци 2 дахин өсөхөд хурд 2 дахин өсвөл 1-р эрэмбэ, 4 дахин өсвөл 2-р эрэмбэ, өөрчлөгдөхгүй бол 0-р эрэмбэ",
      "Хурдны тогтмол k ба түүний нэгжийг олох",
      "1-р эрэмбийн урвалын хагас задралын хугацаа t½ нь анхны концентрациас үл хамааран ТОГТМОЛ байна: k = 0.693 / t½",
      "Хурд тодорхойлогч шат (RDS - хамгийн удаан үе шат) нь хурдны тэгшитгэл дэх бодисуудтай тохирч байх ёстой"
    ],
    subtopics: [
      {
        id: "22.1",
        number: "22.1",
        titleEn: "Deducing Order from Initial Rates",
        titleMn: "Анхны хурдаар эрэмбэ ба k олох",
        summaryEn: "Compare experiments where one reactant varies while others are constant. Substitute into rate equation to calculate k with units.",
        summaryMn: "Бусад бодисын концентраци тогтмол байх туршилтуудыг хосоор нь харьцуулж эрэмбийг олно. k = rate / ([A]^m [B]^n).",
        keyEquations: ["rate = k[A]^m[B]^n", "Units of k = (mol dm⁻³ s⁻¹) / (mol dm⁻³)^(total order)"]
      },
      {
        id: "22.2",
        number: "22.2",
        titleEn: "Half-Life of First-Order Reactions",
        titleMn: "1-р эрэмбийн хагас задралын хугацаа",
        summaryEn: "For 1st order: t½ = ln(2) / k = 0.693 / k. Constant half-life on a concentration-time graph is the diagnostic test for first-order kinetics.",
        summaryMn: "Концентраци-хугацааны график дээр хагас задралын хугацаа t½ нь үргэлж ижил байвал уг урвал 1-р эрэмбийнх байна.",
        keyEquations: ["k = 0.693 / t½", "t½ = 0.693 / k"]
      },
      {
        id: "22.3",
        number: "22.3",
        titleEn: "Rate-Determining Step (RDS) & Multi-Step Mechanisms",
        titleMn: "Хурд тодорхойлогч шат (RDS) ба Механизм",
        summaryEn: "The slowest step governs overall reaction rate. Reactants in the rate equation appear in or before the RDS. Catalysts appear in the rate equation but cancel out in overall stoichiometry.",
        summaryMn: "Хамгийн удаан үе шат буюу RDS-д орж буй молийн тоо нь тухайн бодисын хурдны тэгшитгэл дэх зэрэг (эрэмбэ) болдог.",
        keyConcepts: ["Rate-determining step = slow step", "Catalyst is regenerated in subsequent fast steps"]
      }
    ],
    keyTerms: [
      { termEn: "Rate-Determining Step (RDS)", termMn: "Хурд тодорхойлогч үе шат", definitionEn: "The slowest step in a multi-step reaction mechanism that governs the overall reaction rate.", definitionMn: "Олон шаттай химийн урвалын нийт хурдыг хязгаарладаг хамгийн удаан үе шат." },
      { termEn: "Order of Reaction", termMn: "Урвалын эрэмбэ", definitionEn: "The power to which the concentration of a reactant is raised in the experimentally determined rate equation.", definitionMn: "Туршилтаар тогтоогдсон хурдны тэгшитгэл дэх тухайн бодисын концентрацийн зэрэг." }
    ],
    formulas: [
      { nameEn: "Rate Equation", nameMn: "Хурдны тэгшитгэл", formula: "Rate = k [A]^m [B]^n", note: "k depends on temperature" },
      { nameEn: "First-Order Half-Life", nameMn: "1-р эрэмбийн хагас задрал", formula: "k = 0.693 / t½", note: "t½ in seconds" }
    ],
    examStyleTips: [
      "Units of k change with overall order: 0 order = mol dm⁻³ s⁻¹; 1st order = s⁻¹; 2nd order = dm³ mol⁻¹ s⁻¹; 3rd order = dm⁶ mol⁻² s⁻¹.",
      "Stoichiometric coefficients in the chemical equation do NOT give reaction orders; orders can ONLY be determined experimentally."
    ]
  },
  {
    id: 23,
    number: 23,
    level: "A2",
    category: "Physical",
    titleEn: "Entropy & Gibbs Free Energy",
    titleMn: "Энтропи ба Гиббсийн чөлөөт энерги (ΔG = ΔH - TΔS)",
    descriptionEn: "Entropy (S⦵, measure of disorder/energy dispersal), entropy changes of system (ΔS⦵system) and surroundings (ΔS⦵surroundings), Gibbs free energy equation (ΔG⦵ = ΔH⦵ - TΔS⦵), feasibility (ΔG < 0), and temperature effects on spontaneity.",
    descriptionMn: "Энтропи (S°, эмх замбараагүй байдлын хэмжүүр), системийн ба орчны энтропийн өөрчлөлт, Гиббсийн чөлөөт энергийн тэгшитгэл (ΔG° = ΔH° - TΔS°), урвал өөрөө явагдах нөхцөл (ΔG < 0), температурын нөлөө.",
    learningIntentionsEn: [
      "Define entropy (S): a measure of the number of possible arrangements of particles and energy in a system (J K⁻¹ mol⁻¹)",
      "Predict sign of ΔS: positive for solid -> liquid -> gas, dissolving, or increase in gas moles; negative for gas -> solid or fewer gas moles",
      "Calculate system entropy change: ΔS⦵system = ΣS⦵(products) - ΣS⦵(reactants)",
      "Calculate Gibbs free energy change: ΔG⦵ = ΔH⦵ - TΔS⦵ (watch units: ΔH in kJ × 1000 to match ΔS in J)",
      "Determine feasibility: a reaction is feasible if ΔG⦵ is negative (spontaneous)",
      "Calculate temperature at which a reaction becomes feasible: T = ΔH⦵ / ΔS⦵ (when ΔG⦵ = 0)"
    ],
    learningIntentionsMn: [
      "Энтропийн тодорхойлолт: Систем дэх бөөмс ба энергийн боломжит байршлын тоо (эмх замбараагүй байдал)",
      "Энтропийн өөрчлөлтийн тэмдэг: Хатуу -> Шингэн -> Хий болоход ΔS > 0 (эерэг); Хийн молийн тоо ихсэхэд ΔS > 0",
      "Системийн энтропийн өөрчлөлт: ΔS⦵system = ΣS⦵(бүтээгдэхүүн) - ΣS⦵(эх бодис)",
      "Гиббсийн тэгшитгэл: ΔG⦵ = ΔH⦵ - TΔS⦵ (Анхаар: ΔH нь kJ байдаг тул 1000-аар үржүүлж J болгоно!)",
      "Урвал өөрөө явагдах (feasible) нөхцөл: ΔG⦵ < 0 (сөрөг)",
      "Урвал явагдаж эхлэх эгзэгтэй температур: T = ΔH⦵ / ΔS⦵ (ΔG⦵ = 0 үед)"
    ],
    subtopics: [
      {
        id: "23.1",
        number: "23.1",
        titleEn: "Entropy Concept & Calculating ΔS⦵system",
        titleMn: "Энтропийн тухай ойлголт ба ΔS тооцоолол",
        summaryEn: "Standard molar entropy S⦵ is always positive (J K⁻¹ mol⁻¹). Gases have much higher entropy than liquids/solids. ΔS⦵system = ΣS⦵(products) - ΣS⦵(reactants).",
        summaryMn: "Хийн төлөвт энтропи хамгийн их. ΔS = ΣS(бүтээгдэхүүн) - ΣS(эх бодис).",
        keyConcepts: ["S⦵(gas) >> S⦵(liquid) > S⦵(solid)", "More gas moles produced -> ΔS is positive"]
      },
      {
        id: "23.2",
        number: "23.2",
        titleEn: "Gibbs Equation (ΔG = ΔH - TΔS) & Feasibility",
        titleMn: "Гиббсийн тэгшитгэл ба Урвал явагдах боломж",
        summaryEn: "Reaction is feasible when ΔG < 0. Exothermic (ΔH < 0) with ΔS > 0: ALWAYS feasible at all T. Endothermic (ΔH > 0) with ΔS > 0: feasible at HIGH T (T > ΔH/ΔS). Exothermic (ΔH < 0) with ΔS < 0: feasible at LOW T.",
        summaryMn: "ΔG < 0 үед урвал аяндаа явагдана. ΔH > 0 ба ΔS > 0 үед өндөр температурт (T > ΔH/ΔS) урвал явагдана (жишээ нь шохойн чулууны дулааны задрал).",
        keyEquations: ["ΔG⦵ = ΔH⦵ - TΔS⦵", "T(feasible) = ΔH⦵ / ΔS⦵", "ΔG⦵ = -nFE⦵cell"]
      }
    ],
    keyTerms: [
      { termEn: "Entropy (S)", termMn: "Энтропи", definitionEn: "A measure of the dispersal of energy among particles in a system at a specific temperature (the degree of disorder).", definitionMn: "Өгөгдсөн температурт системийн эгэл хэсгүүдийн энергийн тархалт буюу эмх замбараагүй байдлын хэмжүүр." },
      { termEn: "Gibbs Free Energy (ΔG)", termMn: "Гиббсийн чөлөөт энерги", definitionEn: "The thermodynamic quantity available to do useful work, defined by ΔG = ΔH - TΔS, where negative ΔG indicates a feasible spontaneous process.", definitionMn: "Ашигтай ажил хийхэд зориулагдах чөлөөт энерги (ΔG < 0 үед процесс өөрөө аяндаа явагдана)." }
    ],
    formulas: [
      { nameEn: "Gibbs Free Energy Equation", nameMn: "Гиббсийн тэгшитгэл", formula: "ΔG⦵ = ΔH⦵ - TΔS⦵", note: "CRITICAL: ΔH in kJ × 1000 to match ΔS in J K⁻¹ mol⁻¹" },
      { nameEn: "Feasibility Temperature Threshold", nameMn: "Тэнцвэрийн эгзэгтэй температур", formula: "T = ΔH⦵ / ΔS⦵", note: "Gives minimum temperature for endothermic reaction with positive ΔS" }
    ],
    examStyleTips: [
      "THE #1 UNIT TRAP IN A-LEVEL: ΔH is given in kJ mol⁻¹ but ΔS is given in J K⁻¹ mol⁻¹! You MUST convert ΔH to J (multiply by 1000) before calculating ΔG.",
      "If a question asks for ΔG at 25°C, convert T to Kelvin: T = 25 + 273 = 298 K."
    ]
  },
  {
    id: 24,
    number: 24,
    level: "A2",
    category: "Inorganic",
    titleEn: "Transition Elements & Complex Ions",
    titleMn: "Шилжилтийн металлууд ба Комплекс ионууд",
    descriptionEn: "Definition of transition elements (Ti to Cu), variable oxidation states, catalytic behavior, ligand exchange, stability constants (Kstab), d-orbital splitting (octahedral & tetrahedral), and origin of colour.",
    descriptionMn: "Шилжилтийн металлын тодорхойлолт (дутуу дүүрсэн d-дэд түвшинтэй ион үүсгэдэг d-блокын металл), хувьсах исэлдэхүйн зэрэг, катализатор чанар, лигандын халалцах урвал, тогтворжилтын тогтмол Kstab, d-орбиталын хуваагдал ба комплекс ионы өнгө үүсэх учир.",
    learningIntentionsEn: [
      "Define transition element: a d-block element forming one or more stable ions with an incomplete d sub-shell (Sc and Zn are NOT transition elements)",
      "Explain variable oxidation states (due to similarity in 3d and 4s energies)",
      "Define ligand, complex ion, coordination number, and distinguish monodentate (H₂O, NH₃, Cl⁻, CN⁻) vs bidentate (1,2-diaminoethane 'en', ethanedioate 'ox') vs polydentate (EDTA⁴⁻)",
      "Describe stereoisomerism in complexes: cis/trans in square planar (e.g. cis-platin anti-cancer drug) and octahedral; optical isomerism in octahedral complexes with bidentate ligands (e.g. [Ni(en)₃]²⁺)",
      "Describe ligand exchange reactions of Cu²⁺ and Co²⁺ complexes and explain in terms of stability constants Kstab",
      "Explain origin of colour: Ligands cause degenerate 3d orbitals to split into non-degenerate energy levels with energy gap ΔE; d-electrons absorb specific frequencies of visible light (ΔE = hν), transmitting the complementary colour"
    ],
    learningIntentionsMn: [
      "Шилжилтийн металлын тодорхойлолт: дутуу дүүрсэн d дэд түвшинтэй тогтвортой ион үүсгэдэг d-блокын элемент (Sc ба Zn шилжилтийн металл БИШ)",
      "Хувьсах исэлдэхүйн зэрэг (3d ба 4s энергийн түвшин маш ойролцоо тул)",
      "Лиганд ба комплекс ион: Лиганд нь металлын ионд сул электрон хосоо өгч координацын холбоо үүсгэдэг. Монодентат (H₂O, NH₃, Cl⁻), Бидентат (en, ox²⁻), Полидентат (EDTA⁴⁻)",
      "Стереоизомер: Хавтгай дөрвөлжин дахь cis/trans (Цисплатин хорт хавдрын эм), Октаэдр дахь оптикийн изомер ([Ni(en)₃]²⁺)",
      "Лигандын халалцах: Cu(H₂O)₆²⁺ (цэнхэр) + NH₃(илүүдэл) → [Cu(NH₃)₄(H₂O)₂]²⁺ (хөх цэнхэр); + conc. HCl → [CuCl₄]²⁻ (шар-ногоон)",
      "Комплексийн өнгө үүсэх учир: Лигандын нөлөөгөөр 3d орбиталууд 2 түвшинд хуваагдаж (ΔE), d-электрон үзэгдэх гэрлээс тодорхой долгионы энергийг шингээж дээш үсрэхэд шингээгдээгүй нөхөгч өнгө харагдана"
    ],
    subtopics: [
      {
        id: "24.1",
        number: "24.1",
        titleEn: "Complex Ions, Ligands & Stability Constants (Kstab)",
        titleMn: "Комплекс ион, Лиганд ба Kstab тогтмол",
        summaryEn: "Coordination number = number of dative bonds. Ligand exchange: more stable complex with higher Kstab forms. Chelate effect: multidentate ligands form much more stable complexes due to positive entropy change.",
        summaryMn: "Kstab өндөр байх тусам комплекс тогтвортой байна. Олон шүдэт лиганд (chelate) нь энтропи өсгөдөг тул хамгийн тогтвортой комплекс үүсгэнэ.",
        keyConcepts: ["Kstab expression (water omitted)", "Higher log₁₀Kstab means more stable complex"]
      },
      {
        id: "24.2",
        number: "24.2",
        titleEn: "d-Orbital Splitting & Origin of Colour",
        titleMn: "d-орбиталын хуваагдал ба Өнгө үүсэл",
        summaryEn: "Octahedral: 2 upper orbitals (dz², dx²-y² point along axes towards ligands -> higher repulsion) and 3 lower orbitals (dxy, dyz, dxz). Electron absorbs photon of frequency ν (ΔE = hν) promoting electron from lower to higher d level. Sc³⁺ (3d⁰) and Zn²⁺ (3d¹⁰) are colourless.",
        summaryMn: "Октаэдр хуваагдал: 2 дээд орбиталь, 3 доод орбиталь. d-d электрон шилжилтээр гэрэл шингээгдэнэ. Sc³⁺ (d-электронгүй) ба Zn²⁺ (бүрэн дүүрсэн d¹⁰) нь өнгөгүй уусмал үүсгэнэ.",
        keyConcepts: ["ΔE = hν = hc / λ", "Complementary colours: absorbs red -> appears cyan/blue"]
      }
    ],
    keyTerms: [
      { termEn: "Transition Element", termMn: "Шилжилтийн металл", definitionEn: "A d-block element that forms one or more stable ions with an incomplete d sub-shell.", definitionMn: "Дутуу дүүрсэн d дэд түвшинтэй нэг буюу түүнээс дээш тооны тогтвортой ион үүсгэдэг d-блокын химийн элемент." },
      { termEn: "Ligand", termMn: "Лиганд", definitionEn: "A species with one or more lone pairs of electrons that forms dative (coordinate) bonds with a central metal ion.", definitionMn: "Төвийн металлын ионтой координацын холбоо үүсгэж чадах сул электрон хос бүхий молекул эсвэл ион." }
    ],
    formulas: [
      { nameEn: "d-Orbital Energy Gap", nameMn: "d-орбиталын энергийн зөрүү", formula: "ΔE = hν = (h × c) / λ", note: "h = Planck's constant, ν = frequency of absorbed light" }
    ],
    examStyleTips: [
      "Explaining why Sc³⁺ and Zn²⁺ compounds are colourless: Sc³⁺ has no 3d electrons (empty 3d subshell), so no d-d electron transitions possible; Zn²⁺ has a completely filled 3d subshell (3d¹⁰), so no empty upper d-orbital for an electron to jump into.",
      "Cis-platin has a square planar shape with Pt²⁺ bonded to 2 Cl⁻ and 2 NH₃ in cis-orientation (Cl atoms on the same side, 90° apart)."
    ]
  },
  {
    id: 25,
    number: 25,
    level: "A2",
    category: "Organic",
    titleEn: "Benzene & Arenes (Aromatic Chemistry)",
    titleMn: "Бензол ба Ароматик нэгдлүүд (Арен, Фенол)",
    descriptionEn: "Structure of benzene (delocalised π system, planar, bond length 0.139 nm), electrophilic substitution reactions (chlorination, bromination, nitration, Friedel-Crafts alkylation & acylation), directing effects (2,4-directing vs 3,5-directing), and phenol chemistry.",
    descriptionMn: "Бензолын бүтэц (делокализацлагдсан 6 π-электрон, хавтгай, холбооны урт 0.139 нм), электрофиль халалцах урвалууд (галогенжих, нитрожих, Фридель-Крафтсын алкилжилт ба ацилжилт), 2,4- чиглүүлэгч ба 3,5- чиглүүлэгч бүлгүүд, фенолын хүчиллэг шинж.",
    learningIntentionsEn: [
      "Describe benzene's structure: planar regular hexagon, sp² hybridized carbon atoms, 120° bond angles, delocalised π cloud above and below ring giving extra aromatic stability",
      "Explain why benzene undergoes substitution rather than addition (addition would destroy delocalised stability)",
      "Describe electrophilic substitution mechanisms: Halogenation with halogen carrier (AlCl₃/AlBr₃ generating Cl⁺/Br⁺), Nitration with conc HNO₃ + conc H₂SO₄ (generating NO₂⁺ nitronium ion at 50-55°C)",
      "Describe Friedel-Crafts alkylation (RX + AlCl₃) and acylation (RCOCl + AlCl₃)",
      "Explain directing effects: Electron-donating groups (-OH, -NH₂, -R, -Cl) activate 2,4,6 positions; Electron-withdrawing groups (-NO₂, -COOH, -CHO) direct to 3,5 positions",
      "Describe phenol (C₆H₅OH): more acidic than water and ethanol because phenoxide ion charge is delocalised into benzene ring; reacts rapidly with bromine water to form white ppt 2,4,6-tribromophenol without catalyst"
    ],
    learningIntentionsMn: [
      "Бензолын бүтэц: бүх нүүрстөрөгч sp² эрлийзжсэн, 120° холбооны өнцөгтэй, 6 p-орбиталь хажуугаараа давхцан цагирагийн дээр ба доор нэгдмэл деликализацлагдсан π-электрон үүл үүсгэсэн",
      "Бензол яагаад нэгдэх биш халалцах урвалд ордог вэ: нэгдэх урвал явагдвал ароматик өндөр тогтворжилт эвдрэх тул",
      "Электрофиль халалцах урвалууд: Хлоржих (AlCl₃ катализатортой), Нитрожих (конц HNO₃ + конц H₂SO₄, 50°C-д NO₂⁺ үүсгэнэ), Фридель-Крафтсын алкилжилт (RCl + AlCl₃)",
      "Цагираг дахь чиглүүлэгч бүлгүүд: Электрон донор бүлгүүд (-OH, -NH₂, -CH₃) нь цагирагийн 2,4,6 байрлалыг идэвхжүүлнэ; Электрон акцептор (-NO₂, -COOH) нь 3,5 байрлал руу чиглүүлнэ",
      "Фенол (C₆H₅OH): -OH дээрх сул электрон хос нь цагирагийн π-системд татагдан орж цагирагийг маш их идэвхжүүлдэг (бромын устай өрөөний температурт шууд 2,4,6-трибромфенол цагаан тунадас үүсгэнэ)"
    ],
    subtopics: [
      {
        id: "25.1",
        number: "25.1",
        titleEn: "Structure of Benzene vs Kekulé Model",
        titleMn: "Бензолын бүтэц ба Кекулийн загвар",
        summaryEn: "Evidence against Kekulé: 1) All C-C bonds equal (0.139 nm, between C-C 0.154 nm and C=C 0.134 nm); 2) Enthalpy of hydrogenation is 152 kJ/mol more stable than predicted for 3 isolated double bonds; 3) Undergoes electrophilic substitution not addition.",
        summaryMn: "Бензолын устөрөгчжих энтальпи нь онолын 3 давхар холбоотой циклогексатриенаас 152 kJ mol⁻¹-ээр илүү тогтвортой (resonance energy).",
        keyConcepts: ["Planar hexagon (120°)", "Delocalised π-electron cloud", "Resonance stabilization energy"]
      },
      {
        id: "25.2",
        number: "25.2",
        titleEn: "Electrophilic Substitution Mechanisms",
        titleMn: "Электрофиль халалцах механизм",
        summaryEn: "Nitration: Step 1: HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺. Step 2: NO₂⁺ attacks benzene π-system forming partially positive intermediate (horseshoe). Step 3: H⁺ is eliminated, restoring delocalisation.",
        summaryMn: "Нитрожих урвал: 1) Нитронийн ион NO₂⁺ үүсэх; 2) Электрофиль довтолж завсрын карбокатион үүсэх; 3) H⁺ салж ароматик цагираг сэргэх.",
        keyEquations: ["C₆H₆ + HNO₃ -(H₂SO₄, 55°C)-> C₆H₅NO₂ + H₂O", "C₆H₆ + CH₃Cl -(AlCl₃)-> C₆H₅CH₃ + HCl"]
      },
      {
        id: "25.3",
        number: "25.3",
        titleEn: "Phenol: Acidity & Enhanced Reactivity",
        titleMn: "Фенолын хүчиллэг чанар ба урвалын онцлог",
        summaryEn: "Acidity order: Carboxylic acid > Phenol (pKa 10) > Water (pKa 14) > Alcohol (pKa 16). Phenoxide ion is stabilised by delocalisation of negative charge into the benzene ring. Activates 2,4,6 positions.",
        summaryMn: "Фенол нь спирт ба уснаас хүчтэй хүчил (феноксид ионы сөрөг цэнэг бензолын цагираг руу татагдаж сарнидаг). Шүлттэй шууд давс (натрийн феноксид) үүсгэнэ.",
        keyConcepts: ["Bromination: C₆H₅OH + 3Br₂(aq) → 2,4,6-tribromophenol (white ppt) + 3HBr", "Reaction with Na: 2C₆H₅OH + 2Na → 2C₆H₅ONa + H₂"]
      }
    ],
    keyTerms: [
      { termEn: "Arenes", termMn: "Арен / Ароматик нүүрсустөрөгч", definitionEn: "Hydrocarbons containing one or more benzene rings with delocalised π-electrons.", definitionMn: "Делокализацлагдсан 6 π-электрон бүхий бензолын цагираг агуулсан нүүрсустөрөгчид." },
      { termEn: "Halogen Carrier", termMn: "Галоген зөөгч катализатор", definitionEn: "A Lewis acid catalyst (such as AlCl₃, FeBr₃) that polarises a halogen molecule to generate a strong electrophile (e.g. Cl⁺, Br⁺).", definitionMn: "Галогены молекулыг туйлшруулан хүчтэй электрофиль үүсгэдэг Льюисийн хүчлийн катализатор (AlCl₃, FeBr₃)." }
    ],
    formulas: [
      { nameEn: "Generation of Nitronium Ion", nameMn: "Нитронийн ион үүсэх", formula: "HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺", note: "Temp kept at 50-55°C to prevent dinitration" },
      { nameEn: "Side-Chain Oxidation", nameMn: "Хажуугийн хэлхээний исэлдэлт", formula: "C₆H₅-CH₃ + 3[O] -(alkaline KMnO₄, reflux)-> C₆H₅-COOH + H₂O", note: "Alkylbenzene oxidised to benzoic acid" }
    ],
    examStyleTips: [
      "In the intermediate for electrophilic substitution in benzene, the horseshoe must face the tetrahedral carbon and span the other 5 carbons with a '+' in the center!",
      "Alkyl side-chain halogenation vs ring substitution: With UV light and heat -> free radical substitution in SIDE-CHAIN (e.g. C₆H₅CH₂Cl); With AlCl₃ catalyst and room temp -> electrophilic substitution in RING (2- and 4-chloromethylbenzene)."
    ]
  },
  {
    id: 26,
    number: 26,
    level: "A2",
    category: "Organic",
    titleEn: "Carboxylic Acids & Acyl Chlorides",
    titleMn: "Карбон хүчлүүд ба Ацилхлоридууд",
    descriptionEn: "Relative acidity of substituted carboxylic acids, oxidation of methanoic and ethanedioic acids, preparation of acyl chlorides (SOCl₂, PCl₅, PCl₃), and addition-elimination reactions of acyl chlorides.",
    descriptionMn: "Хлорлогдсон карбон хүчлүүдийн хүчлийн зэрэг (CCl₃COOH хамгийн хүчтэй), шоргоолжны ба хурган чихний хүчлийн исэлдэлт, ацилхлорид гарган авах урвалууд ба нуклеофиль нэмэгдэх-ялгарах урвалууд.",
    learningIntentionsEn: [
      "Explain relative acidity: CCl₃COOH > CHCl₂COOH > CH₂ClCOOH > CH₃COOH (electron-withdrawing Cl atoms weaken O-H and stabilise carboxylate ion by dispersing negative charge)",
      "Describe oxidation of methanoic acid (HCOOH) with Fehling's/Tollens'/KMnO₄ to CO₂ + H₂O",
      "Describe oxidation of ethanedioic acid (HOOC-COOH) with acidified KMnO₄ (autocatalysis by Mn²⁺)",
      "Describe preparation of acyl chlorides from carboxylic acids using SOCl₂ (best method, by-products SO₂ and HCl are gases), PCl₅, or PCl₃",
      "Describe reactions of acyl chlorides (ROCl): with H₂O (hydrolysis to RCOOH + HCl fumes), alcohols (esters), phenols (phenyl esters), NH₃ (amides), primary amines (substituted amides)",
      "Explain ease of hydrolysis: Acyl chloride > Chloroalkane > Chloroarene (inert due to delocalisation of Cl lone pair into benzene ring)"
    ],
    learningIntentionsMn: [
      "Хүчлийн харьцангуй чадал: CCl₃COOH > CHCl₂COOH > CH₂ClCOOH > CH₃COOH (хлор нь электроныг өөртөө татаж, O-H холбоог сулруулж, үүссэн анионыг тогтворжуулна)",
      "Шоргоолжны хүчил HCOOH нь альдегидийн бүтэцтэй адил тул Толленс ба Фелингийн уусмалаар исэлдэж CO₂ болно",
      "Ацилхлорид гарган авах: RCOOH + SOCl₂ → RCOCl + SO₂(g) + HCl(g) (бүтээгдэхүүн хий тул цэвэр ацилхлорид ялгарна)",
      "Ацилхлоридын урвалууд: устай (хүчил + цагаан утаа HCl), спирттэй (эстер), фенолтой (фенил эстер), аммиактай (амид), аминтай (орлуулсан амид)",
      "Гидролизод орох идэвх: Ацилхлорид (маш хурдан) > Алкилхлорид (рефлюкс хэрэгтэй) > Хлорбензол (C-Cl давхар холбооны шинжтэй тул гидролизод орохгүй)"
    ],
    subtopics: [
      {
        id: "26.1",
        number: "26.1",
        titleEn: "Acidity of Substituted Carboxylic Acids",
        titleMn: "Карбон хүчлийн хүчиллэг шинж ба хлорын нөлөө",
        summaryEn: "Electronegative chlorine atoms exert a negative inductive (-I) effect, drawing electron density away from -COO⁻, dispersing negative charge, and making the anion more stable. More Cl atoms = higher Ka.",
        summaryMn: "Хлорын атом нэмэгдэх тусам карбокслат ионы сөрөг цэнэг татагдан сарниж, H⁺ эргэж нэгдэх нь багасна. Иймд Ka өсч, хүчил улам хүчтэй болно.",
        keyConcepts: ["Ka: CCl₃COOH (0.23) > CHCl₂COOH (0.05) > CH₂ClCOOH (0.0013) > CH₃COOH (1.7×10⁻⁵)"]
      },
      {
        id: "26.2",
        number: "26.2",
        titleEn: "Acyl Chlorides Preparation & Condensation Reactions",
        titleMn: "Ацилхлорид бэлтгэх ба Конденсацын урвал",
        summaryEn: "RCOOH + SOCl₂ → RCOCl + SO₂(g) + HCl(g). Acyl chlorides are highly reactive due to carbonyl C having two electronegative atoms (O and Cl). Nucleophilic addition-elimination with H₂O, ROH, ArOH, NH₃, RNH₂.",
        summaryMn: "Ацилхлоридын нүүрстөрөгч дээр 2 цахилгаан сөрөг атом (O ба Cl) холбогдсон тул маш өндөр δ+ цэнэгтэй, нуклеофилийг шууд өөртөө татан авч HCl ялгаруулна.",
        keyConcepts: ["Reaction with phenol requires base (forms phenoxide)", "Reaction with NH₃ forms amide + NH₄Cl"]
      }
    ],
    keyTerms: [
      { termEn: "Acyl Chloride", termMn: "Ацилхлорид", definitionEn: "A reactive derivative of a carboxylic acid containing the -COCl functional group.", definitionMn: "Карбон хүчлийн -OH бүлэг хлороор солигдсон -COCl функциональ бүлэгтэй урвалын өндөр идэвхтэй нэгдэл." },
      { termEn: "Addition-Elimination Mechanism", termMn: "Нэмэгдэх-Ялгарах механизм", definitionEn: "A two-step condensation mechanism in which a nucleophile adds across a carbonyl C=O bond followed by the departure of a leaving group (Cl⁻).", definitionMn: "Эхлээд нуклеофиль C=O холбоонд нэгдэж завсрын төлөв үүсгээд, дараа нь Cl⁻ салж C=O давхар холбоо эргэн сэргэх 2 шаттай механизм." }
    ],
    formulas: [
      { nameEn: "Acyl Chloride with Water", nameMn: "Ацилхлорид устай", formula: "RCOCl + H₂O → RCOOH + HCl(g)", note: "Violent hydrolysis giving dense white fumes of HCl" },
      { nameEn: "Acyl Chloride with Amine", nameMn: "Ацилхлорид аминтай", formula: "RCOCl + 2R'NH₂ → RCONHR' + R'NH₃⁺Cl⁻", note: "Forms substituted amide" }
    ],
    examStyleTips: [
      "Phenols do NOT react with carboxylic acids to form esters, but react readily with acyl chlorides in the presence of a base (forming phenyl esters).",
      "Why is chlorobenzene unreactive to hydrolysis? The lone pair on chlorine delocalises into the benzene π-system, giving the C-Cl bond partial double bond character and making it too strong to break."
    ]
  },
  {
    id: 27,
    number: 27,
    level: "A2",
    category: "Organic",
    titleEn: "Organic Nitrogen Compounds",
    titleMn: "Органик азотын нэгдлүүд (Амин, Амид, Азо-будагч, Амин хүчил)",
    descriptionEn: "Basicity of amines (ethylamine > ammonia > phenylamine), formation of amines and amides, diazotisation and coupling reactions to form azo dyes, amino acids & zwitterions, peptide bonds, and electrophoresis.",
    descriptionMn: "Аминуудын суурийн чадал (этиламин > аммиак > фениламин), амид ба амин гарган авах, диазотжих ба холбогдох урвалаар азо-будагч бэлтгэх, амин хүчлүүд ба цвиттер-ион, пептидийн холбоо, электрофорез.",
    learningIntentionsEn: [
      "Explain relative basicity of amines: Ethylamine (strongest, +I effect of ethyl group) > Ammonia > Phenylamine (weakest, lone pair delocalised into benzene ring)",
      "Describe formation of amines (nitrile reduction with LiAlH₄ or H₂/Ni; amide reduction with LiAlH₄; halogenoalkane + excess ethanolic NH₃)",
      "Describe formation of phenylamine by reduction of nitrobenzene (Sn + conc. HCl, followed by NaOH(aq))",
      "Describe diazotisation of phenylamine with HNO₂ (NaNO₂ + HCl) below 10°C to form benzenediazonium chloride, and coupling with phenol to form azo dyes (─N═N─ bridge)",
      "Describe amino acids: zwitterions, isoelectric point, buffer action, peptide bond condensation to di-/tripeptides",
      "Describe gel electrophoresis of amino acids/peptides at different pH values"
    ],
    learningIntentionsMn: [
      "Аминуудын суурийн чадал: Этиламин (хамгийн хүчтэй, алкил бүлгийн +I нөлөө) > Аммиак > Фениламин (хамгийн сул, N дээрх сул хос нь бензолын цагираг руу татагддаг)",
      "Нитробензолыг Sn + conc. HCl-ээр ангижруулан фениламин гарган авах",
      "Диазотжих урвал: Фениламин + NaNO₂ + HCl (<10°C) → Бензолдиазонийн хлорид; Шүлтлэг фенолтой нэгдэж (coupling) тод өнгийн Азо-будагч (─N═N─) үүсгэнэ",
      "Амин хүчил: Цвиттер-ион (+NH₃-CH(R)-COO⁻), изоэлектрик цэг (нийт цэнэг тэг болох pH)",
      "Амин хүчлүүд пептидийн (-CONH-) холбоогоор холбогдон полипептид, уураг үүсгэх",
      "Гель-электрофорез: Тодорхой pH-тай буферт амин хүчлүүдийн цэнэг ба хэмжээнээс хамаарч катод/анод руу шилжих хурдаар нь ялгах арга"
    ],
    subtopics: [
      {
        id: "27.1",
        number: "27.1",
        titleEn: "Basicity of Nitrogen Compounds",
        titleMn: "Азотын нэгдлүүдийн суурийн шинж",
        summaryEn: "Basicity depends on availability of nitrogen lone pair to accept H⁺. Ethylamine: alkyl group donates electrons (+I) -> lone pair more available. Phenylamine: lone pair overlaps with aromatic π-system -> lone pair less available. Amides are neutral (C=O strongly withdraws electrons).",
        summaryMn: "Суурийн хүч = N дээрх сул электрон хосын H⁺ татах чадвар. Этиламин > NH₃ > Фениламин. Амидууд нь C=O-ийн нөлөөгөөр бараг саармаг байна.",
        keyConcepts: ["Base strength: R-NH₂ > NH₃ > Ar-NH₂ > R-CONH₂ (neutral)"]
      },
      {
        id: "27.2",
        number: "27.2",
        titleEn: "Diazotisation & Azo Dyes",
        titleMn: "Диазотжих урвал ба Азо-будагч",
        summaryEn: "Step 1: C₆H₅NH₂ + HNO₂ + HCl (<10°C) → C₆H₅N₂⁺Cl⁻ + 2H₂O. Must be <10°C to prevent decomposition to phenol and N₂. Step 2 (Coupling): C₆H₅N₂⁺ + C₆H₅O⁻ → C₆H₅-N=N-C₆H₄OH (orange azo dye). Delocalised π-system across both rings and -N=N- bridge gives stability and vivid colour.",
        summaryMn: "10°C-ээс дээш халаавал диазонийн давс задарч N₂ хий ялгарна. Фенолтой холбогдож үүссэн -N=N- гүүр нь хоёр цагирагийн хооронд π-электроныг холбож тод өнгө үүсгэдэг.",
        keyConcepts: ["Diazotisation temperature < 10°C", "Coupling with alkaline phenol to form stable azo chromophore"]
      },
      {
        id: "27.3",
        number: "27.3",
        titleEn: "Amino Acids, Zwitterions & Electrophoresis",
        titleMn: "Амин хүчил, Цвиттер-ион ба Электрофорез",
        summaryEn: "Zwitterion: H₃N⁺-CH(R)-COO⁻. In acid (low pH): accepts H⁺ → H₃N⁺-CH(R)-COOH (moves to cathode -). In alkali (high pH): loses H⁺ → H₂N-CH(R)-COO⁻ (moves to anode +). At isoelectric point: net charge is zero, does not migrate.",
        summaryMn: "Хүчиллэг орчинд (бага pH) катион болж катод (-) руу шилжинэ; Шүлтлэг орчинд (өндөр pH) анион болж анод (+) руу шилжинэ.",
        keyConcepts: ["Zwitterions have high melting points (ionic attractions)", "Electrophoresis separates by charge and molecular size"]
      }
    ],
    keyTerms: [
      { termEn: "Zwitterion", termMn: "Цвиттер-ион", definitionEn: "An electrically neutral dipolar ion carrying both a permanent positive and negative formal charge, e.g. in amino acids (+NH₃-CH(R)-COO⁻).", definitionMn: "Молекул дотроо эерэг (+NH₃) ба сөрөг (-COO⁻) цэнэгийг нэгэн зэрэг агуулсан нийлбэр цэнэг нь тэг байдаг ион." },
      { termEn: "Azo Dye", termMn: "Азо-будагч", definitionEn: "A coloured synthetic dye containing the -N=N- azo group linking two aromatic rings with extended delocalised π-electron systems.", definitionMn: "Хоёр ароматик цагиргийг холбосон -N=N- бүлэг бүхий, гэрлийг хүчтэй шингээж тод өнгө үзүүлдэг синтетик будагч." }
    ],
    formulas: [
      { nameEn: "Diazotisation Reaction", nameMn: "Диазотжих урвал", formula: "C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O (T < 10°C)", note: "Forms benzenediazonium chloride" },
      { nameEn: "Azo Coupling Reaction", nameMn: "Холбогдох урвал", formula: "C₆H₅N₂⁺Cl⁻ + C₆H₅OH + NaOH → C₆H₅-N=N-C₆H₄OH + NaCl + H₂O", note: "Forms 4-hydroxyphenylazobenzene (orange dye)" }
    ],
    examStyleTips: [
      "In diazotisation, always specify temperature must be below 10°C (or 0-5°C). Above 10°C, the diazonium salt decomposes into phenol and nitrogen gas.",
      "In electrophoresis: Positively charged species migrate to the CATHODE (-), negatively charged species migrate to the ANODE (+). Neutral zwitterions at their isoelectric point do not move."
    ]
  },
  {
    id: 28,
    number: 28,
    level: "A2",
    category: "Organic",
    titleEn: "Polymerisation (Polyamides & Polyesters)",
    titleMn: "Полимержилт (Полиамид, Полиэстер ба Задрал)",
    descriptionEn: "Condensation polymerisation, Nylon 6,6, Kevlar, Terylene (PET), Poly(lactic acid) PLA, proteins, and degradability (biodegradable vs photodegradable vs non-biodegradable addition polymers).",
    descriptionMn: "Конденсацын полимержилт, Найлон 6,6, Кевлар (сум үл нэвтрэх), Терилен (полиэстер), Полилактик хүчил (PLA), уураг ба полипептид, полимерүүдийн задрал (био, фото, гидролиз).",
    learningIntentionsEn: [
      "Distinguish addition polymerisation (monomers have C=C, only 1 product) vs condensation polymerisation (2 functional groups, eliminates small molecule H₂O or HCl)",
      "Describe Nylon 6,6 (1,6-diaminohexane + hexanedioic acid) and Kevlar (1,4-diaminobenzene + benzene-1,4-dicarboxylic acid with extensive inter-chain H-bonding)",
      "Describe Polyesters: Terylene/PET (benzene-1,4-dicarboxylic acid + ethane-1,2-diol) and PLA (lactic acid single monomer)",
      "Deduce repeat units from monomers and identify monomers from polymer chain sections",
      "Explain degradability: Addition polyalkenes are inert and non-biodegradable; Polyesters and polyamides have hydrolysable ester/amide links in backbone and are biodegradable"
    ],
    learningIntentionsMn: [
      "Нэгдэх ба Конденсацын полимержилтын ялгаа (конденсацийн үед H₂O эсвэл HCl жижиг молекул ялгарна)",
      "Найлон 6,6 ба Кевларын бүтэц (Кевларын гинж хоорондын хүчтэй устөрөгчийн холбоо нь түүнийг сум үл нэвтрэх онцгой бат бөх болгодог)",
      "Полиэстер: Терилен/PET ба PLA (полилактик хүчил - эрдэнэ шишийн цардуулаас гарган авсан био задардаг хуванцар)",
      "Полимерийн бүтцээс давтагдах нэгж (repeat unit) ба мономеруудыг олж тодорхойлох",
      "Полимерийн байгальд задрах чанар: Полиалкен задрахгүй (C-C бат бөх); Полиамид ба полиэстер нь хүчил/шүлтээр гидролизод орж задарна"
    ],
    subtopics: [
      {
        id: "28.1",
        number: "28.1",
        titleEn: "Synthetic Polyamides: Nylon & Kevlar",
        titleMn: "Синтетик полиамид: Найлон ба Кевлар",
        summaryEn: "Nylon 6,6: 1,6-diaminohexane + hexanedioic acid. Amide link -CONH-. Cold drawing lines up chains for H-bonding. Kevlar: rigid planar aromatic rings with extensive inter-chain H-bonding give extraordinary strength-to-weight ratio.",
        summaryMn: "Найлон 6,6 ба Кевлар нь амид холбоотой (-CONH-). Кевларын шулуун хавтгай гинжнүүдийн хоорондын нягт устөрөгчийн холбоо нь онцгой өндөр суналтын бат бөх чанарыг өгдөг.",
        keyConcepts: ["Nylon 6,6 repeat unit: -[NH-(CH₂)₆-NH-CO-(CH₂)₄-CO]-", "Kevlar bullet-proof vests and fire-protective clothing"]
      },
      {
        id: "28.2",
        number: "28.2",
        titleEn: "Polyesters & Biodegradability",
        titleMn: "Полиэстер ба Байгальд задрах чанар",
        summaryEn: "Terylene: benzene-1,4-dicarboxylic acid + ethane-1,2-diol. PLA: from lactic acid. Ester links (-COO-) are attacked by water in acidic/alkaline landfill conditions (hydrolysis). Polyalkenes lack polar bonds, hence non-biodegradable.",
        summaryMn: "Полиэстерийн -COO- ба полиамидын -CONH- холбоос нь усаар гидролизод ордог тул био задардаг, харин полиэтилен зэрэг полиалкен нь химийн хувьд идэвхгүй тул задардаггүй.",
        keyConcepts: ["Acid & alkaline hydrolysis of polyesters/polyamides", "Photodegradable polymers contain C=O carbonyl groups absorbing UV"]
      }
    ],
    keyTerms: [
      { termEn: "Condensation Polymerisation", termMn: "Конденсацын полимержилт", definitionEn: "A reaction where monomers with two functional groups react to form a polymer chain with the simultaneous elimination of small molecules like H₂O or HCl.", definitionMn: "Хоёр функциональ бүлэгтэй мономерууд нэгдэж, ус эсвэл хлорт устөрөгч зэрэг жижиг молекул ялгаруулан урт гинжин полимер үүсгэх урвал." },
      { termEn: "Biodegradable Polymer", termMn: "Био задардаг полимер", definitionEn: "A polymer that can be broken down naturally by microorganisms or chemical hydrolysis into harmless small molecules.", definitionMn: "Бичил биетэн эсвэл химийн гидролизийн нөлөөгөөр байгальд аяндаа задардаг полимер." }
    ],
    formulas: [
      { nameEn: "Nylon 6,6 Formation", nameMn: "Найлон 6,6 үүсэх", formula: "n H₂N(CH₂)₆NH₂ + n HOOC(CH₂)₄COOH → -[NH(CH₂)₆NHCO(CH₂)₄CO]-_n + 2n H₂O", note: "Polyamide with elimination of water" },
      { nameEn: "Terylene Formation", nameMn: "Терилен үүсэх", formula: "n HOOC-C₆H₄-COOH + n HO-CH₂CH₂-OH → -[CO-C₆H₄-COO-CH₂CH₂O]-_n + 2n H₂O", note: "Polyester with elimination of water" }
    ],
    examStyleTips: [
      "To find the monomers of a condensation polymer: Cut through every ester (-CO|O-) or amide (-CO|NH-) link, add OH to carbonyl C to make -COOH, and add H to the O or N to make -OH or -NH₂.",
      "Polyalkenes have ONLY carbon atoms in their backbone; Polyamides and polyesters have nitrogen and oxygen atoms in their backbone."
    ]
  },
  {
    id: 29,
    number: 29,
    level: "A2",
    category: "Organic",
    titleEn: "Organic Synthesis & Drug Design",
    titleMn: "Органик синтез & Эмийн молекулын дизайн",
    descriptionEn: "Multi-stage synthetic routes, extending carbon chains (nitriles, Grignard/Friedel-Crafts), chirality in drug design (pure enantiomers vs racemic mixtures, thalidomide), optical resolution, and chiral catalysts.",
    descriptionMn: "Олон шаттай органик синтезийн төлөвлөлт, нүүрстөрөгчийн хэлхээг уртасгах аргууд, эмийн хирал шинж чанар (цэвэр энантиомер ба рацемик хольц, талидомидын түүх), хирал катализатор.",
    learningIntentionsEn: [
      "Design multi-stage organic synthetic routes using reaction maps from AS and A2",
      "Recognize synthetic methods for extending carbon chains: Halogenoalkane + KCN(eth) -> Nitrile; Aldehyde/Ketone + HCN -> Hydroxynitrile; Friedel-Crafts alkylation/acylation of benzene",
      "Explain the pharmaceutical importance of pure enantiomers over racemic mixtures (higher potency, halved dose, fewer side effects)",
      "Explain historical example of thalidomide (one enantiomer safe for morning sickness, other caused severe birth defects)",
      "Describe methods for producing single enantiomers: Chiral catalysts (organometallic Ru in naproxen), chiral pool starting materials, and enzymes"
    ],
    learningIntentionsMn: [
      "Органик урвалын сүлжээ ашиглан 2-4 үе шаттай синтезийн төлөвлөгөө боловсруулах",
      "Нүүрстөрөгчийн хэлхээг уртасгах аргууд (KCN-тэй урвал, HCN-тэй урвал, Фридель-Крафтсын урвал)",
      "Эмийн үйлдвэрлэлд цэвэр энантиомер ашиглахын ач холбогдол (тун багасах, эмчилгээний үр дүн өсөх, гаж нөлөө багасах)",
      "Талидомидын жишээ: нэг энантиомер нь эмчилгээтэй боловч нөгөө энантиомер нь ургийн гажиг үүсгэсэн",
      "Цэвэр нэг энантиомер гарган авах аргууд: Хирал катализатор (Рутенийн комплекс), хирал эх бодисууд, ферментүүд"
    ],
    subtopics: [
      {
        id: "29.1",
        number: "29.1",
        titleEn: "Chirality & Pharmaceutical Synthesis",
        titleMn: "Хирал чанар ба Эмийн нийлэгжилт",
        summaryEn: "Racemic mixture (50:50) produced by conventional synthesis requires optical resolution. Modern methods use chiral catalysts (e.g. Ru for naproxen arthritis drug) or enzymes to yield only the active enantiomer directly.",
        summaryMn: "Орчин үеийн эмийн үйлдвэрлэлд хирал катализатор эсвэл фермент ашиглан зөвхөн хэрэгцээт энантиомерийг шууд синтезлэдэг.",
        keyConcepts: ["Naproxen: one enantiomer relieves arthritis, other causes liver damage", "Chiral pool synthesis"]
      },
      {
        id: "29.2",
        number: "29.2",
        titleEn: "Designing Synthetic Pathways",
        titleMn: "Синтезийн замуудыг төлөвлөх",
        summaryEn: "Work backwards from target molecule (retrosynthetic analysis). Identify functional group transformations and carbon-carbon bond forming steps.",
        summaryMn: "Бүтээгдэхүүнээсээ ухрах чиглэлд алхам алхмаар тооцоолно (жишээ нь: этиламин <- этанентирил <- бромметан <- метан).",
        keyConcepts: ["Minimise number of steps to maximize overall yield"]
      }
    ],
    keyTerms: [
      { termEn: "Racemic Mixture", termMn: "Рацемик хольц", definitionEn: "An equimolar (50:50) mixture of two enantiomers that has no optical activity because the rotations cancel out.", definitionMn: "Хоёр энантиомерийн ижил молийн (50:50) харьцаатай, туйлширсан гэрлийг эргүүлэхгүй хольц." },
      { termEn: "Chiral Catalyst", termMn: "Хирал катализатор", definitionEn: "An asymmetric catalyst that directs the formation of only one specific optical isomer during a chemical reaction.", definitionMn: "Урвалаар зөвхөн нэг тодорхой энантиомер үүсэхийг чиглүүлдэг асимметр катализатор." }
    ],
    formulas: [
      { nameEn: "Nitrile to Carboxylic Acid (Hydrolysis)", nameMn: "Нитрилээс карбон хүчил", formula: "R-CN + HCl + 2H₂O → R-COOH + NH₄Cl", note: "Acid hydrolysis" },
      { nameEn: "Nitrile to Amine (Reduction)", nameMn: "Нитрилээс амин", formula: "R-CN + 4[H] → R-CH₂-NH₂ (LiAlH₄ in dry ether)", note: "Reduction" }
    ],
    examStyleTips: [
      "When asked to plan a synthesis, always specify reagents, conditions (e.g. 'reflux with ethanolic KCN', 'LiAlH₄ in dry ether'), and write intermediate structures clearly.",
      "To increase carbon chain by 1: React haloalkane with KCN in ethanol, then hydrolyse to acid (HCl, H₂O) or reduce to amine (LiAlH₄)."
    ]
  },
  {
    id: 30,
    number: 30,
    level: "A2",
    category: "Analysis",
    titleEn: "Analytical Chemistry (NMR, Chromatography, Mass Spec)",
    titleMn: "Аналитик хими (¹H ба ¹³C NMR, Хроматографи, Масс спектр)",
    descriptionEn: "Thin-layer & gas-liquid chromatography (GLC retention times & peak areas), Proton (¹H) NMR (chemical shift δ, integration, n+1 splitting rule, D₂O exchange), Carbon-13 (¹³C) NMR, and combined spectral analysis.",
    descriptionMn: "Нимгэн үеийн ба Хий-шингэний хроматографи (GLC), Протоны (¹H) NMR спектроскопи (химийн шилжилт, интеграл, n+1 задралын дүрэм, D₂O-ээр -OH/-NH таних), Нүүрстөрөгч-13 (¹³C) NMR, хосолсон спектр шинжилгээ.",
    learningIntentionsEn: [
      "Explain thin-layer chromatography (TLC) Rf values and gas-liquid chromatography (GLC) retention times and percentage composition from peak areas",
      "Describe ¹H NMR: Chemical shift δ relative to TMS (0 ppm), peak area integration (ratio of protons in each environment)",
      "Apply the 'n + 1' splitting rule for high-resolution ¹H NMR: Singlet (0 adjacent H), Doublet 1:1 (1 adj H), Triplet 1:2:1 (2 adj H), Quartet 1:3:3:1 (3 adj H)",
      "Explain the use of D₂O (heavy water) to identify labile -OH and -NH protons (peak collapses/disappears due to exchange with deuterium)",
      "Interpret Carbon-13 (¹³C) NMR: each non-equivalent carbon atom gives one single sharp peak, chemical shift indicates carbon environment",
      "Combine Mass Spec (Mr, fragments, [M+1], [M+2]), IR (functional groups), and NMR (carbon & hydrogen environments) to deduce unknown structures"
    ],
    learningIntentionsMn: [
      "TLC-ийн Rf утга (Rf = бодисын явсан зай / уусгагчийн явсан зай) ба GLC-ийн retention time, пикийн талбайгаар хольцын хувийг олох",
      "¹H NMR: TMS стандарт (0 ppm), химийн шилжилт δ, интеграл талбай (тухайн орчны устөрөгчийн тоо)",
      "n + 1 дүрэм: Хөрш нүүрстөрөгч дээрх H-ийн тоо n бол оргил нь n+1 хэсэгт задарна (Синглит 1, Дублет 1:1, Триплет 1:2:1, Квартет 1:3:3:1)",
      "D₂O сорил: Уусмалд хүнд ус D₂O нэмэхэд -OH ба -NH-ийн устөрөгч дейтеригээр солигдож оргил нь алга болдог",
      "¹³C NMR: Ижил биш нүүрстөрөгч бүр 1 салангид хурц шугам үүсгэнэ (оргил задрахгүй)",
      "Масс спектр + Хэт улаан туяа (IR) + NMR спектрийг нэгтгэн үл мэдэгдэх органик бодисын бүтцийг 100% тодорхойлох"
    ],
    subtopics: [
      {
        id: "30.1",
        number: "30.1",
        titleEn: "Proton (¹H) NMR & High-Resolution Splitting",
        titleMn: "Протоны (¹H) NMR ба Оргилын задрал (n+1)",
        summaryEn: "Protons in same environment are equivalent. Integration ratio = number of protons. n+1 rule: ethyl group -CH₂-CH₃ gives triplet (3H) and quartet (2H). TMS at 0 ppm used as internal standard. CDCl₃ or CCl₄ used as proton-free solvent.",
        summaryMn: "Этил бүлэг -CH₂-CH₃ нь NMR дээр сонгодог жишээ болдог: -CH₃ нь 2 хөрштэй тул триплет (1:2:1), -CH₂- нь 3 хөрштэй тул квартет (1:3:3:1) үүсгэнэ.",
        keyConcepts: ["Chemical shift table: -CH₃ (0.9-1.7), -CH₂-O- (3.2-4.0), C=C-H (4.5-6.0), Ar-H (6.0-9.0), -CHO (9.3-10.5), -COOH (9.0-13.0)"]
      },
      {
        id: "30.2",
        number: "30.2",
        titleEn: "Carbon-13 (¹³C) NMR Spectroscopy",
        titleMn: "Нүүрстөрөгч-13 (¹³C) NMR спектроскопи",
        summaryEn: "Only ¹³C nuclei (1.1% abundance) are NMR active. Each unique carbon environment gives one single peak. No spin-spin splitting. Count of peaks = count of non-equivalent carbons.",
        summaryMn: "¹³C NMR-д оргилууд задрахгүй, зөвхөн хэдэн ширхэг ялгаатай нүүрстөрөгчийн орчин байгааг тоолж, тэдгээрийн төрлийг химийн шилжилтээр тодорхойлно.",
        keyConcepts: ["Propanone (CH₃COCH₃) gives 2 peaks", "Propanal (CH₃CH₂CHO) gives 3 peaks"]
      }
    ],
    keyTerms: [
      { termEn: "Chemical Shift (δ)", termMn: "Химийн шилжилт", definitionEn: "The position of an NMR absorption signal measured in parts per million (ppm) relative to tetramethylsilane (TMS) standard.", definitionMn: "Тетраметилсилан (TMS) стандарттай харьцуулан ppm нэгжээр илэрхийлсэн NMR шингээлтийн оргилын байрлал." },
      { termEn: "Spin-Spin Splitting (n+1 rule)", termMn: "Спин-спин задрал (n+1 дүрэм)", definitionEn: "The splitting of an NMR peak into n+1 sub-peaks caused by the magnetic fields of n non-equivalent protons on adjacent carbon atoms.", definitionMn: "Хөрш нүүрстөрөгчийн n ширхэг устөрөгчийн нөлөөгөөр NMR оргил n+1 жижиг оргилд хуваагдах үзэгдэл." }
    ],
    formulas: [
      { nameEn: "TLC Retention Factor", nameMn: "Rf утга", formula: "Rf = distance moved by solute / distance moved by solvent front", note: "Always ≤ 1.0" },
      { nameEn: "GLC Percentage Composition", nameMn: "GLC хольцын хувь", formula: "% Component = (Area of peak / Total area of all peaks) × 100%", note: "Area ≈ ½ × base × height" }
    ],
    examStyleTips: [
      "To identify which peak is -OH or -NH: Compare spectrum before and after shaking with D₂O. The peak that disappears belongs to -OH or -NH.",
      "Propan-1-ol has 3 unique carbons (3 peaks in ¹³C NMR), while propan-2-ol has 2 unique carbons (2 peaks in ¹³C NMR due to symmetry)."
    ]
  },
  {
    id: 101,
    number: 31,
    level: "AS",
    category: "Practical",
    titleEn: "Practical Skills 1 (Paper 3 AS Laboratory)",
    titleMn: "Лабораторийн дадлага 1 (Paper 3 Ур чадварууд)",
    descriptionEn: "Volumetric analysis (titrations), calorimetry procedures, collection of quantitative data, errors & uncertainties, and Qualitative Analysis notes (cations, anions, gases).",
    descriptionMn: "Титрлэлтийн арга зүй, калориметрийн туршилт, эзлэхүүн ба массын хэмжилтийн алдаа (uncertainty), Чанарын шинжилгээний сорилууд (катион, анион, хий таних).",
    learningIntentionsEn: [
      "Perform titrations to obtain concordant titres within 0.10 cm³",
      "Calculate percentage errors in measuring equipment: % error = (uncertainty / value measured) × 100%",
      "Perform systematic qualitative analysis tests for cations using NaOH(aq) and NH₃(aq)",
      "Perform tests for anions: CO₃²⁻ (dilute acid), Cl⁻/Br⁻/I⁻ (AgNO₃ + NH₃), SO₄²⁻ (Ba²⁺ + HCl), NO₃⁻ (NaOH + Al foil + heat -> NH₃)",
      "Identify gases: NH₃ (damp red litmus blue), CO₂ (limewater cloudy), H₂ (pop with splint), O₂ (relights splint)"
    ],
    learningIntentionsMn: [
      "Титрлэлтийн 2 ба 3 дахь үр дүн 0.10 cm³ дотор зөрүүтэй байх (concordant)",
      "Багажны алдааны хувь тооцох: % error = (алдааны хязгаар / хэмжсэн утга) × 100%",
      "NaOH ба NH₃ ашиглан катионуудыг тунадасны өнгө ба илүүдэлд уусах эсэхээр ялгах",
      "Анион таних: CO₃²⁻ (хүчилд CO₂ ялгарна), Cl⁻/Br⁻/I⁻ (AgNO₃-ээр цагаан/цөцгийн/шар тунадас), SO₄²⁻ (BaCl₂-ээр цагаан тунадас), NO₃⁻ (NaOH + Al тугалган цаасаар халаахад NH₃ үүснэ)",
      "Хийг таних үндсэн сорилууд"
    ],
    subtopics: [
      {
        id: "P1.1",
        number: "P1.1",
        titleEn: "Titration & Volumetric Precision",
        titleMn: "Титрлэлт ба Нарийвчлал",
        summaryEn: "Burette scale reading to nearest 0.05 cm³. Pipette: 25.0 cm³. Conical flask swirled during titration. Average only concordant titres.",
        summaryMn: "Бюреткаас уншихдаа 0.05 cm³ нарийвчлалтай уншина. Анхны rough титрийг дундаж тооцоонд оруулахгүй.",
        keyConcepts: ["Burette uncertainty ±0.05 cm³", "Balance 2 decimal places ±0.01 g"]
      },
      {
        id: "P1.2",
        number: "P1.2",
        titleEn: "Qualitative Analysis Scheme (Appendix 3)",
        titleMn: "Чанарын шинжилгээний таних хүснэгт",
        summaryEn: "Al³⁺, Zn²⁺: White ppt soluble in excess NaOH. Pb²⁺, Ca²⁺, Mg²⁺: White ppt insoluble in excess. Cu²⁺: Pale blue ppt, soluble in excess NH₃ giving dark blue solution. Fe²⁺: Green ppt turning brown. Fe³⁺: Red-brown ppt.",
        summaryMn: "Cu²⁺ цэнхэр тунадас илүүдэл аммиакт уусаж гүн хөх уусмал болно. Fe²⁺ ногоон тунадас агаарт борлоно. Fe³⁺ улаан хүрэн тунадас үүсгэнэ.",
        keyConcepts: ["NaOH vs NH₃ precipitation behavior", "Gas testing rules"]
      }
    ],
    keyTerms: [
      { termEn: "Concordant Titres", termMn: "Тохирох титрүүд", definitionEn: "Titre values that are within 0.10 cm³ of each other, indicating high precision.", definitionMn: "Хоорондоо 0.10 см³-ээс ихгүй зөрүүтэй, давтагдах нарийвчлал өндөртэй титрлэлтийн үр дүнгүүд." },
      { termEn: "Percentage Uncertainty", termMn: "Алдааны хувь", definitionEn: "(Margin of error / measured quantity) × 100%.", definitionMn: "Хэмжих багажны алдааны хязгаарыг хэмжсэн бодит утгад харьцуулж 100%-иар үржүүлсэн утга." }
    ],
    formulas: [
      { nameEn: "Percentage Error", nameMn: "Хэмжилтийн алдааны хувь", formula: "% Error = (Equipment Uncertainty / Measured Value) × 100%", note: "For temperature difference: combine errors of both readings" }
    ],
    examStyleTips: [
      "When recording burette readings, always record to 2 decimal places ending in .00 or .05.",
      "In reporting precipitate observations, always mention both the colour and whether it dissolves in excess reagent."
    ]
  },
  {
    id: 102,
    number: 32,
    level: "A2",
    category: "Practical",
    titleEn: "Practical Skills 2 (Paper 5 Planning, Analysis & Evaluation)",
    titleMn: "Лабораторийн дадлага 2 (Paper 5 Төлөвлөлт, Шинжилгээ & Үнэлгээ)",
    descriptionEn: "Experimental design for Paper 5: identifying independent/dependent/control variables, risk assessment, data processing, anomaly detection, graphing with line of best fit, and evaluation.",
    descriptionMn: "Paper 5 шалгалтын төлөвлөлтийн даалгавар: хамаарах ба үл хамаарах хувьсагч, хяналтын хувьсагч, аюулгүй ажиллагаа (эрсдэлийн үнэлгээ), алдаатай цэгийг (anomaly) илрүүлэх, график байгуулах, үнэлэлт дүгнэлт өгөх.",
    learningIntentionsEn: [
      "Formulate hypothesis, identify independent variable, dependent variable, and list key control variables",
      "Design a logical step-by-step experimental procedure with specific equipment, appropriate volumes/concentrations, and risk mitigation",
      "Plot graphs with independent variable on x-axis, choose scales covering >50% of grid, and draw balanced lines of best fit",
      "Identify anomalous data points and provide scientific explanations for anomalies (e.g. incomplete reaction, heat loss, evaporation)",
      "Evaluate procedures and suggest specific, valid experimental improvements"
    ],
    learningIntentionsMn: [
      "Таамаглал дэвшүүлэх, үл хамаарах (өөрчилж буй), хамаарах (хэмжиж буй) болон тогтмол барих хяналтын хувьсагчдыг тодорхойлох",
      "Лабораторийн төхөөрөмж, бодисын хэмжээ, аюулгүй ажиллагааны дүрмийг багтаасан шат дараалсан төлөвлөгөө бичих",
      "Графикийн тэнхлэгийн 50%-иас их талбайг ашиглан масштаб сонгох, шилдэг шулуун/муруй (line of best fit) татах",
      "Зүй тогтолд нийцэхгүй байгаа гажсан цэгийг (anomaly) илрүүлж, шалтгааныг (дулаан алдагдал, бүрэн бус урвал г.м) тайлбарлах",
      "Туршилтын аргачлалыг үнэлж, нарийвчлалыг сайжруулах бодит санал дэвшүүлэх"
    ],
    subtopics: [
      {
        id: "P2.1",
        number: "P2.1",
        titleEn: "Variables & Planning Design",
        titleMn: "Хувьсагчид ба Төлөвлөлт",
        summaryEn: "Independent variable: changed systematically. Dependent variable: measured effect. Control variables: must be kept strictly constant for a fair test. Detail quantities to prevent exceeding apparatus limits (e.g. 100 cm³ gas syringe).",
        summaryMn: "Үл хамаарах хувьсагч (x-тэнхлэг), Хамаарах хувьсагч (y-тэнхлэг), Хяналтын хувьсагчид (температур, нийт эзлэхүүн).",
        keyConcepts: ["Safety: toxic gases (NO₂, Cl₂, SO₂) require fume cupboard; Corrosives require gloves & eye protection"]
      },
      {
        id: "P2.2",
        number: "P2.2",
        titleEn: "Data Evaluation & Graphing",
        titleMn: "Өгөгдлийн үнэлгээ ба График шинжилгээ",
        summaryEn: "Identify anomalies that deviate from trend line before drawing line of best fit. Calculate gradient using large triangle (Δy/Δx) covering >50% of line. Deduce reaction orders or constants.",
        summaryMn: "Графикийн налууг олохдоо шулууны 50%-иас их уртыг хамарсан том гурвалжин байгуулж Δy/Δx-ийг тооцоолно.",
        keyConcepts: ["Systematic vs Random errors", "Gradient calculation Δy / Δx"]
      }
    ],
    keyTerms: [
      { termEn: "Independent Variable", termMn: "Үл хамаарах хувьсагч", definitionEn: "The factor that is intentionally changed by the experimenter to observe its effect on the dependent variable.", definitionMn: "Туршилтын үед судлаачийн зүгээс зориуд өөрчилдөг хүчин зүйл (x-тэнхлэг дээр байрлана)." },
      { termEn: "Anomalous Result", termMn: "Гажсан / Алдаатай үр дүн (Anomaly)", definitionEn: "A measurement that deviates markedly from the established trend or expected pattern of results.", definitionMn: "Ерөнхий зүй тогтол, чиг хандлагаас илт зөрж гарсан алдаатай хэмжилтийн цэг." }
    ],
    formulas: [
      { nameEn: "Graph Gradient", nameMn: "Графикийн налуу", formula: "Gradient = (y₂ - y₁) / (x₂ - x₁)", note: "Use coordinates from line of best fit, not raw data points" }
    ],
    examStyleTips: [
      "In Paper 5 planning questions, write a clear bulleted list of apparatus, specific masses/volumes, step-by-step method, table of results with units, and safety hazards with precautions.",
      "When drawing the line of best fit, ignore any circle-labeled anomalous points and balance remaining points evenly above and below the line."
    ]
  }
];
