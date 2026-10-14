export interface PracticalVideoTutorial {
  titleEn: string;
  titleMn: string;
  youtubeId: string; // YouTube video ID or search embed
  youtubeSearchQuery: string;
  directUrl: string;
  channel: string;
  duration?: string;
  summaryMn: string;
  procedureStepsEn: string[];
  procedureStepsMn: string[];
  keyObservationClips: {
    time: string;
    descriptionEn: string;
    descriptionMn: string;
  }[];
  cambridgeExamTip: string;
  cambridgeExamTipMn: string;
  testTubeVisual: {
    liquidColor: string;
    precipitateColor?: string;
    precipitateType?: "none" | "dense" | "gelatinous" | "fine" | "colloidal";
    hasEffervescence?: boolean;
    gasBubbleColor?: string;
    gasName?: string;
    excessBehavior?: string;
  };
}

export interface CationReaction {
  id: string;
  cationEn: string;
  cationMn: string;
  formula: string;
  colorBadge: {
    bg: string;
    text: string;
    border: string;
    dot: string;
  };
  naohReaction: {
    observationEn: string;
    observationMn: string;
    solubleInExcess: boolean;
    excessResultEn?: string;
    excessResultMn?: string;
  };
  nh3Reaction: {
    observationEn: string;
    observationMn: string;
    solubleInExcess: boolean;
    excessResultEn?: string;
    excessResultMn?: string;
    noReaction?: boolean;
  };
  keyNotesEn?: string;
  keyNotesMn?: string;
  videoTutorial?: PracticalVideoTutorial;
}

export interface AnionReaction {
  id: string;
  anionEn: string;
  anionMn: string;
  formula: string;
  reagentAndTestEn: string;
  reagentAndTestMn: string;
  observationEn: string;
  observationMn: string;
  ionicEquation?: string;
  colorCategory: string;
  videoTutorial?: PracticalVideoTutorial;
}

export interface GasTest {
  id: string;
  gasEn: string;
  gasMn: string;
  formula: string;
  testAndResultEn: string;
  testAndResultMn: string;
  chemicalNote?: string;
  videoTutorial?: PracticalVideoTutorial;
}

export interface ElementTest {
  id: string;
  elementEn: string;
  elementMn: string;
  formula: string;
  testAndResultEn: string;
  testAndResultMn: string;
  chemicalNote?: string;
  videoTutorial?: PracticalVideoTutorial;
}

export interface PhysicalConstant {
  id: string;
  nameEn: string;
  nameMn: string;
  symbol: string;
  value: string;
  unit: string;
  notes?: string;
}

export const ANIONS_DATA: AnionReaction[] = [
  {
    id: "co3_2-",
    anionEn: "carbonate, CO₃²⁻",
    anionMn: "карбонат, CO₃²⁻",
    formula: "CO₃²⁻",
    reagentAndTestEn: "Add dilute acid (e.g. dilute HCl or HNO₃) and bubble liberated gas through limewater",
    reagentAndTestMn: "Шингэрүүлсэн хүчил (жишээ нь HCl эсвэл HNO₃) нэмж, ялгарсан хийг шохойн ус дундуур нэвтрүүлэх",
    observationEn: "CO₂ liberated by dilute acids (effervescence / bubbling; gas turns limewater cloudy / white ppt)",
    observationMn: "Шингэрүүлсэн хүчлээр үйлчлэхэд CO₂ хий ялгарна (хийн бөмбөлөг оргилж, шохойн усыг булингартуулна)",
    ionicEquation: "CO₃²⁻(aq) + 2H⁺(aq) → CO₂(g) + H₂O(l) | Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",
    colorCategory: "Gas Evolution",
    videoTutorial: {
      titleEn: "Testing for Carbonate Ions (CO₃²⁻) & Limewater Test",
      titleMn: "Карбонат ион (CO₃²⁻) болон шохойн усны сорил",
      youtubeId: "J8Dq_jB5w9Y",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for carbonate ion CO3 2- limewater",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+carbonate+ion+CO3+2-",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:45",
      summaryMn: "Карбонат давсан дээр шингэрүүлсэн хүчил нэмэхэд хүчтэй хөөсрөн CO₂ хий ялгарч, шохойн усыг цагаан булингартай болгоно.",
      procedureStepsEn: [
        "1. Place ~1 cm³ of sample solution in a test-tube.",
        "2. Add ~1 cm³ of dilute hydrochloric acid (HCl) or nitric acid (HNO₃).",
        "3. Observe immediate effervescence / vigorous bubbling.",
        "4. Transfer gas using delivery pipette into limewater (aqueous Ca(OH)₂); watch for white precipitate."
      ],
      procedureStepsMn: [
        "1. Хуруу шилэнд ~1 см³ сорьцын уусмал хийнэ.",
        "2. Дээрээс нь ~1 см³ шингэрүүлсэн HCl эсвэл HNO₃ нэмнэ.",
        "3. Шингэн даруй оргилж (effervescence) CO₂ хий ялгарна.",
        "4. Хий дамжуулах хоолой/пипеткээр шохойн ус руу нэвтрүүлж цагаан булингар үүсэхийг ажиглана."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Adding dilute acid to carbonate solution", descriptionMn: "Хүчил дусааж эхлэх үе" },
        { time: "0:45", descriptionEn: "Rapid effervescence (bubbles of CO₂)", descriptionMn: "Хүчтэй хөөсрөлт, CO₂ хийн бөмбөлгүүд" },
        { time: "1:20", descriptionEn: "Limewater turns milky white (CaCO₃ ppt)", descriptionMn: "Шохойн ус цайвар цагаан болж булингартах" }
      ],
      cambridgeExamTip: "Always use the exact term 'effervescence' or 'bubbling' in Paper 3 observations. Never just say 'gas is produced'.",
      cambridgeExamTipMn: "Кембрижийн 9701 шалгалтад зүгээр л 'хий ялгарсан' гэж бичиж болохгүй, заавал 'effervescence' (оргилолт) гэж бичиж оноо авна.",
      testTubeVisual: {
        liquidColor: "rgba(238, 242, 255, 0.6)",
        hasEffervescence: true,
        gasBubbleColor: "#38bdf8",
        gasName: "CO₂ (g)",
        precipitateColor: "#ffffff",
        precipitateType: "fine"
      }
    }
  },
  {
    id: "cl-",
    anionEn: "chloride, Cl⁻(aq)",
    anionMn: "хлорид, Cl⁻(усан)",
    formula: "Cl⁻",
    reagentAndTestEn: "Acidify with dilute HNO₃, then add aqueous AgNO₃; then add aqueous ammonia (dilute / conc)",
    reagentAndTestMn: "Шингэрүүлсэн HNO₃-ээр орчныг хүчиллэгжүүлж, AgNO₃(aq) нэмэх; дараа нь шингэрүүлсэн NH₃(aq) нэмэх",
    observationEn: "gives white ppt. with Ag⁺(aq) (soluble in dilute NH₃(aq) giving a colourless solution)",
    observationMn: "Ag⁺-той цагаан тунадас үүсгэнэ (шингэрүүлсэн аммиакт бүрэн уусаж өнгөгүй уусмал болно)",
    ionicEquation: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s) (white ppt) | AgCl(s) + 2NH₃(aq) → [Ag(NH₃)₂]⁺(aq) + Cl⁻(aq)",
    colorCategory: "White",
    videoTutorial: {
      titleEn: "Testing for Chloride Ions (Cl⁻) with AgNO₃ and NH₃",
      titleMn: "Хлорид ионы сорил (AgNO₃ ба шингэрүүлсэн аммиак)",
      youtubeId: "vH-uVqC5yLg",
      youtubeSearchQuery: "Cambridge 9701 Chemistry qualitative analysis test for chloride Cl- silver nitrate ammonia",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+chloride+Cl-+silver+nitrate",
      channel: "Cambridge A-Level Chemistry",
      duration: "3:10",
      summaryMn: "Хлоридын уусмалд шингэрүүлсэн HNO₃ болон AgNO₃ нэмэхэд өтгөн цагаан AgCl тунадас бууж, шингэрүүлсэн NH₃ нэмэхэд бүрэн уусна.",
      procedureStepsEn: [
        "1. Add ~1 cm³ of sample solution into a clean test-tube.",
        "2. Add a few drops of dilute nitric acid (HNO₃) to remove any interfering carbonate/sulfite ions.",
        "3. Add a few drops of aqueous silver nitrate (AgNO₃) -> observe dense white precipitate (AgCl).",
        "4. Add dilute aqueous ammonia (NH₃) -> precipitate completely dissolves to give a colorless solution."
      ],
      procedureStepsMn: [
        "1. Хуруу шилэнд ~1 см³ сорьцын уусмал хийнэ.",
        "2. Карбонат/сульфитийн саадыг арилгахын тулд хэдэн дусал шингэрүүлсэн HNO₃ нэмнэ.",
        "3. Хэдэн дусал AgNO₃(aq) нэмэхэд өтгөн цагаан тунадас (AgCl) бууна.",
        "4. Шингэрүүлсэн NH₃(aq) нэмэхэд цагаан тунадас бүрэн уусаж өнгөгүй уусмал болно."
      ],
      keyObservationClips: [
        { time: "0:15", descriptionEn: "Acidifying with dilute HNO₃", descriptionMn: "HNO₃ хүчлээр хүчиллэгжүүлэх" },
        { time: "0:40", descriptionEn: "Adding AgNO₃: Instant white precipitate", descriptionMn: "AgNO₃ нэмэхэд агшин зуур цагаан тунадас буух" },
        { time: "1:25", descriptionEn: "Adding dilute NH₃: White ppt completely dissolves", descriptionMn: "Шингэрүүлсэн NH₃ нэмэхэд цагаан тунадас бүрэн уусах" }
      ],
      cambridgeExamTip: "Acidification MUST be done with dilute nitric acid (HNO₃). Never use HCl (which introduces Cl⁻) or H₂SO₄ (which precipitates Ag₂SO₄)!",
      cambridgeExamTipMn: "Хүчиллэгжүүлэхдээ зөвхөн HNO₃ ашиглана. HCl хэзээ ч хэрэглэж болохгүй (өөртөө Cl⁻ агуулдаг тул сорилыг хуурамчаар эерэг болгоно)!",
      testTubeVisual: {
        liquidColor: "rgba(240, 249, 255, 0.5)",
        precipitateColor: "#ffffff",
        precipitateType: "dense",
        excessBehavior: "Soluble in dilute NH₃"
      }
    }
  },
  {
    id: "br-",
    anionEn: "bromide, Br⁻(aq)",
    anionMn: "бромид, Br⁻(усан)",
    formula: "Br⁻",
    reagentAndTestEn: "Acidify with dilute HNO₃, then add aqueous AgNO₃; then add aqueous ammonia (dilute / conc)",
    reagentAndTestMn: "Шингэрүүлсэн HNO₃ нэмж хүчиллэгжүүлээд AgNO₃(aq) нэмэх; дараа нь конц. NH₃ нэмэх",
    observationEn: "gives cream/off-white ppt. with Ag⁺(aq) (partially soluble / insoluble in dilute NH₃, fully soluble in conc. NH₃)",
    observationMn: "Ag⁺-той цөцгийн/шаргалдуу цагаан (cream) тунадас үүсгэнэ (шингэрүүлсэн NH₃-т уусахгүй, концентрацитай NH₃-т бүрэн уусна)",
    ionicEquation: "Ag⁺(aq) + Br⁻(aq) → AgBr(s) (cream ppt) | AgBr(s) + 2NH₃(conc) → [Ag(NH₃)₂]⁺(aq) + Br⁻(aq)",
    colorCategory: "Cream",
    videoTutorial: {
      titleEn: "Testing for Bromide Ions (Br⁻) with AgNO₃ & Conc. NH₃",
      titleMn: "Бромид ионы сорил (AgNO₃ ба концентрацитай аммиак)",
      youtubeId: "yH8yQZ6hVbc",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for bromide Br- silver nitrate concentrated ammonia",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+bromide+Br-+silver+nitrate",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:50",
      summaryMn: "Бромидын уусмалд AgNO₃ нэмэхэд шаргалдуу цагаан (cream) AgBr тунадас бууж, шингэрүүлсэн аммиакт уусахгүй боловч конц. аммиакт бүрэн уусна.",
      procedureStepsEn: [
        "1. Take ~1 cm³ of sample in test tube and acidify with dilute HNO₃.",
        "2. Add AgNO₃(aq) -> observe distinct cream/pale yellow precipitate.",
        "3. Add dilute NH₃(aq) -> precipitate remains insoluble.",
        "4. In fume cupboard, add concentrated NH₃(aq) -> cream precipitate dissolves."
      ],
      procedureStepsMn: [
        "1. Сорьцыг хуруу шилэнд хийж шингэрүүлсэн HNO₃-ээр хүчиллэгжүүлнэ.",
        "2. AgNO₃(aq) нэмэхэд цөцгийн шаргал цагаан (cream) тунадас бууна.",
        "3. Шингэрүүлсэн NH₃(aq) нэмэхэд тунадас уусахгүй хэвээр үлдэнэ.",
        "4. Хүчиллэг шүүгээнд конц. NH₃ нэмэхэд тунадас бүрэн уусна."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Adding AgNO₃ to form cream precipitate", descriptionMn: "AgNO₃ нэмэхэд крем/шаргал цагаан тунадас үүсэх" },
        { time: "0:55", descriptionEn: "Insoluble in dilute ammonia", descriptionMn: "Шингэрүүлсэн аммиакт уусахгүй байх" },
        { time: "1:40", descriptionEn: "Dissolves in concentrated ammonia", descriptionMn: "Конц аммиакт бүрэн уусах" }
      ],
      cambridgeExamTip: "State the color as 'cream precipitate'. Writing 'yellow' will lose marks to iodide (I⁻).",
      cambridgeExamTipMn: "Өнгийг нь заавал 'cream ppt' (шаргалдуу цагаан) гэж бичнэ. Зүгээр 'шар' гэж бичвэл иодид (I⁻)-тэй андуурагдаж оноо хасагдана.",
      testTubeVisual: {
        liquidColor: "rgba(254, 252, 232, 0.7)",
        precipitateColor: "#fef08a",
        precipitateType: "dense",
        excessBehavior: "Soluble only in concentrated NH₃"
      }
    }
  },
  {
    id: "i-",
    anionEn: "iodide, I⁻(aq)",
    anionMn: "иодид, I⁻(усан)",
    formula: "I⁻",
    reagentAndTestEn: "Acidify with dilute HNO₃, then add aqueous AgNO₃; then add aqueous ammonia (dilute / conc)",
    reagentAndTestMn: "Шингэрүүлсэн HNO₃ нэмж хүчиллэгжүүлээд AgNO₃(aq) нэмэх; дараа нь NH₃(aq) нэмэх",
    observationEn: "gives pale yellow ppt. with Ag⁺(aq) (insoluble in both dilute AND concentrated NH₃(aq))",
    observationMn: "Ag⁺-той тод цайвар шар тунадас үүсгэнэ (шингэрүүлсэн болон конц. аммиакийн алинд ч уусахгүй)",
    ionicEquation: "Ag⁺(aq) + I⁻(aq) → AgI(s) (pale yellow ppt)",
    colorCategory: "Pale Yellow",
    videoTutorial: {
      titleEn: "Testing for Iodide Ions (I⁻) with AgNO₃ & Ammonia Solubility",
      titleMn: "Иодид ионы сорил (AgNO₃ ба аммиакийн уусах чанар)",
      youtubeId: "W7oR7zQy06k",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for iodide I- silver nitrate ammonia",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+iodide+I-+silver+nitrate",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:30",
      summaryMn: "Иодидын уусмалд AgNO₃ нэмэхэд цайвар шар AgI тунадас бууж, шингэрүүлсэн болон конц. аммиакийн алинд ч огт уусахгүй.",
      procedureStepsEn: [
        "1. Take ~1 cm³ of iodide solution and acidify with dilute HNO₃.",
        "2. Add a few drops of AgNO₃(aq) -> instant pale yellow precipitate.",
        "3. Add dilute NH₃ -> precipitate remains insoluble.",
        "4. Add concentrated NH₃ -> precipitate remains completely insoluble."
      ],
      procedureStepsMn: [
        "1. Хуруу шилэнд иодидын уусмал хийж шингэрүүлсэн HNO₃-ээр хүчиллэгжүүлнэ.",
        "2. AgNO₃(aq) нэмэхэд тод цайвар шар AgI тунадас бууна.",
        "3. Шингэрүүлсэн NH₃ нэмэхэд тунадас уусахгүй.",
        "4. Концентрацитай NH₃ нэмсэн ч тунадас огт уусахгүй хэвээр байна."
      ],
      keyObservationClips: [
        { time: "0:25", descriptionEn: "Adding AgNO₃: Instant pale yellow AgI ppt", descriptionMn: "AgNO₃ нэмэхэд цайвар шар AgI тунадас үүсэх" },
        { time: "1:10", descriptionEn: "Testing with dilute & conc. NH₃ (insoluble)", descriptionMn: "Шингэрүүлсэн ба конц аммиакт уусахгүй хэвээр үлдэх" }
      ],
      cambridgeExamTip: "Silver iodide (AgI) is completely insoluble in ammonia. Summarize halide trend: Cl⁻ (dissolves in dilute), Br⁻ (dissolves in conc), I⁻ (insoluble in both).",
      cambridgeExamTipMn: "Халидуудын харьцуулалт: Cl⁻ (шингэрүүлсэнд уусна), Br⁻ (зөвхөн концод уусна), I⁻ (алинд ч уусахгүй).",
      testTubeVisual: {
        liquidColor: "rgba(254, 240, 138, 0.5)",
        precipitateColor: "#facc15",
        precipitateType: "dense",
        excessBehavior: "Insoluble in both dilute & conc NH₃"
      }
    }
  },
  {
    id: "no3-",
    anionEn: "nitrate, NO₃⁻(aq)",
    anionMn: "нитрат, NO₃⁻(усан)",
    formula: "NO₃⁻",
    reagentAndTestEn: "Add aqueous NaOH, then add a piece of aluminium foil and warm gently over Bunsen burner",
    reagentAndTestMn: "NaOH(aq) нэмээд, хөнгөнцагаан тугалган цаас (Al foil) хийж зөөлөн халаах",
    observationEn: "NH₃ liberated on heating with OH⁻(aq) and Al foil (gas turns damp red litmus paper blue)",
    observationMn: "Шүлт ба Al тугалган цаастай халаахад аммиак (NH₃) хий ялгарна (чийгтэй улаан лакмусыг хөх өнгөтэй болгоно)",
    ionicEquation: "3NO₃⁻(aq) + 8Al(s) + 5OH⁻(aq) + 18H₂O(l) → 3NH₃(g) + 8[Al(OH)₄]⁻(aq)",
    colorCategory: "Gas Evolution",
    videoTutorial: {
      titleEn: "Test for Nitrate Ion (NO₃⁻) with NaOH & Aluminium Foil (Devarda's Test)",
      titleMn: "Нитрат ионыг таних туршилт (NaOH ба Al тугалган цаас)",
      youtubeId: "r2T1M5q9s_o",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for nitrate ion NO3- aluminium foil NaOH ammonia",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+nitrate+ion+NO3-+aluminium+foil",
      channel: "Cambridge 9701 Practical Lab",
      duration: "3:30",
      summaryMn: "Нитратын уусмал дээр NaOH болон жижиглэсэн хөнгөнцагаан цаас хийж зөөлөн халаахад хурц үнэрт NH₃ хий ялгарч, чийгтэй улаан лакмусыг хөх болгоно.",
      procedureStepsEn: [
        "1. Place ~1 cm³ of sample in a boiling tube.",
        "2. Add ~2 cm³ of aqueous NaOH (excess).",
        "3. Add a small piece of aluminium foil / powder.",
        "4. Heat gently over Bunsen flame; hold damp red litmus paper at tube mouth without touching walls.",
        "5. Observe damp red litmus paper turns blue."
      ],
      procedureStepsMn: [
        "1. Хуруу шилэнд ~1 см³ сорьцын уусмал хийнэ.",
        "2. Дээрээс нь ~2 см³ NaOH(aq) нэмнэ.",
        "3. Жижиг хөнгөнцагаан тугалган цаас (Al foil) хийнэ.",
        "4. Дөлөн дээр зөөлөн халааж, амсарт нь чийгтэй улаан лакмусын цаас барина (хананд нь хүргэж болохгүй).",
        "5. Чийгтэй улаан лакмус хөх өнгөтэй болохыг ажиглана."
      ],
      keyObservationClips: [
        { time: "0:30", descriptionEn: "Adding NaOH and Al foil", descriptionMn: "NaOH ба Al тугалган цаас хийх" },
        { time: "1:15", descriptionEn: "Gently warming over Bunsen flame", descriptionMn: "Дөлөн дээр зөөлөн халаах үе" },
        { time: "2:05", descriptionEn: "Damp red litmus turns blue by NH₃ gas", descriptionMn: "Ялгарсан NH₃ хий чийгтэй улаан лакмусыг хөхрүүлэх" }
      ],
      cambridgeExamTip: "Always moisten the red litmus paper with deionised water! Dry litmus will NOT react with dry ammonia gas.",
      cambridgeExamTipMn: "Улаан лакмусын цаасыг заавал чийглэх (damp red litmus paper) ёстой! Хуурай лакмус аммиак хийтэй урвалд орохгүй.",
      testTubeVisual: {
        liquidColor: "rgba(224, 231, 255, 0.6)",
        hasEffervescence: true,
        gasBubbleColor: "#818cf8",
        gasName: "NH₃ (g) turns litmus blue",
        precipitateType: "none"
      }
    }
  },
  {
    id: "no2-",
    anionEn: "nitrite, NO₂⁻(aq)",
    anionMn: "нитрит, NO₂⁻(усан)",
    formula: "NO₂⁻",
    reagentAndTestEn: "1. Heat with OH⁻(aq) and Al foil OR 2. Add acidified aqueous KMnO₄ OR 3. Add dilute acid",
    reagentAndTestMn: "1. Шүлт ба Al тугалган цаастай халаах ЭСВЭЛ 2. Хүчиллэгжүүлсэн KMnO₄ нэмэх ЭСВЭЛ 3. Шингэрүүлсэн хүчил нэмэх",
    observationEn: "NH₃ liberated on heating with OH⁻/Al; decolourises acidified aqueous KMnO₄ (purple to colourless); pale brown fumes of NO₂ with dilute acid",
    observationMn: "Al/NaOH-тай халаахад NH₃ ялгарна; хүчиллэгжүүлсэн KMnO₄-ийн ягаан өнгийг арилгана; шингэрүүлсэн хүчил нэмэхэд хүрэн хий (NO₂) ялгарна",
    ionicEquation: "5NO₂⁻(aq) + 2MnO₄⁻(aq) + 6H⁺(aq) → 5NO₃⁻(aq) + 2Mn²⁺(aq) + 3H₂O(l)",
    colorCategory: "Redox / Decolourisation",
    videoTutorial: {
      titleEn: "Testing for Nitrite Ion (NO₂⁻) & KMnO₄ Decolourisation",
      titleMn: "Нитрит ионы сорил (KMnO₄ өнгөгүйжүүлэх ба хүчлийн урвал)",
      youtubeId: "b0mY1sD8qPo",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for nitrite ion NO2- acidified KMnO4",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+nitrite+ion+NO2-",
      channel: "Cambridge A-Level Chemistry",
      duration: "3:05",
      summaryMn: "Нитрит нь ангижруулагч шинжтэй тул хүчиллэгжүүлсэн ягаан KMnO₄ уусмалыг шууд өнгөгүй болгодог (нитрат NO₃⁻ үүнийг өнгөгүй болгодоггүй).",
      procedureStepsEn: [
        "1. Take ~1 cm³ of nitrite solution in a test-tube.",
        "2. Acidify with dilute H₂SO₄.",
        "3. Add drops of purple aqueous KMnO₄ -> observe rapid decolourisation (purple -> colourless).",
        "4. Alternatively add dilute HCl -> observe pale blue solution turning brown fumes of NO₂(g)."
      ],
      procedureStepsMn: [
        "1. Хуруу шилэнд ~1 см³ нитритийн уусмал авна.",
        "2. Шингэрүүлсэн H₂SO₄ хүчлээр орчныг хүчиллэгжүүлнэ.",
        "3. Ягаан өнгөтэй KMnO₄(aq) уусмалаас дусаахад шууд өнгөгүй (decolourises) болно.",
        "4. Эсвэл шингэрүүлсэн HCl нэмэхэд хүрэн NO₂ хий ялгарна."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Adding acidified purple KMnO₄", descriptionMn: "Хүчиллэгжүүлсэн ягаан KMnO₄ нэмэх" },
        { time: "0:50", descriptionEn: "Instant decolourisation from purple to colourless", descriptionMn: "Ягаан өнгө шууд өнгөгүй болох" },
        { time: "1:35", descriptionEn: "Reaction with dilute acid giving pale brown NO₂ fumes", descriptionMn: "Хүчилтэй урвалд орж хүрэн NO₂ хий гарах" }
      ],
      cambridgeExamTip: "Nitrite (NO₂⁻) decolourises acidified KMnO₄ because NO₂⁻ oxidises to NO₃⁻, reducing MnO₄⁻ (purple) to Mn²⁺ (colourless).",
      cambridgeExamTipMn: "Нитрит NO₂⁻ нь нитрат NO₃⁻ болж исэлдэж, KMnO₄ (ягаан)-ийг Mn²⁺ (өнгөгүй) болгож ангижруулдаг.",
      testTubeVisual: {
        liquidColor: "rgba(243, 232, 255, 0.4)",
        hasEffervescence: true,
        gasBubbleColor: "#c084fc",
        gasName: "KMnO₄ turns colourless",
        precipitateType: "none"
      }
    }
  },
  {
    id: "so4_2-",
    anionEn: "sulfate, SO₄²⁻(aq)",
    anionMn: "сульфат, SO₄²⁻(усан)",
    formula: "SO₄²⁻",
    reagentAndTestEn: "Acidify with dilute HCl or HNO₃, then add aqueous BaCl₂ or Ba(NO₃)₂",
    reagentAndTestMn: "Шингэрүүлсэн HCl эсвэл HNO₃ нэмж хүчиллэгжүүлээд BaCl₂ эсвэл Ba(NO₃)₂ уусмал нэмэх",
    observationEn: "gives white ppt. with Ba²⁺(aq) (insoluble in excess dilute strong acids); gives white ppt. with high [Ca²⁺(aq)]",
    observationMn: "Ba²⁺-той цагаан тунадас (BaSO₄) үүсгэнэ (илүүдэл шингэрүүлсэн хүчилд огт уусахгүй); өндөр [Ca²⁺]-той мөн цагаан тунадас өгнө",
    ionicEquation: "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) (dense white ppt)",
    colorCategory: "White",
    videoTutorial: {
      titleEn: "Testing for Sulfate Ion (SO₄²⁻) with Barium Chloride (BaCl₂)",
      titleMn: "Сульфат ионы сорил (BaCl₂ ба хүчилд үл уусах BaSO₄)",
      youtubeId: "kP3rE0d5xM8",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for sulfate SO4 2- barium chloride",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+sulfate+SO4+2-+barium+chloride",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:40",
      summaryMn: "Сульфатын уусмалыг HCl-ээр хүчиллэгжүүлж BaCl₂ нэмэхэд өтгөн цагаан BaSO₄ тунадас буух бөгөөд илүүдэл хүчилд огт уусахгүй.",
      procedureStepsEn: [
        "1. Place ~1 cm³ of sulfate solution in a test-tube.",
        "2. Acidify with ~1 cm³ of dilute hydrochloric acid (HCl) or nitric acid (HNO₃).",
        "3. Add a few drops of aqueous barium chloride (BaCl₂) or barium nitrate (Ba(NO₃)₂).",
        "4. Observe immediate thick white precipitate (BaSO₄) which remains insoluble upon adding more acid."
      ],
      procedureStepsMn: [
        "1. Хуруу шилэнд ~1 см³ сульфатын уусмал хийнэ.",
        "2. ~1 см³ шингэрүүлсэн HCl эсвэл HNO₃ нэмж хүчиллэгжүүлнэ.",
        "3. Хэдэн дусал BaCl₂ эсвэл Ba(NO₃)₂ уусмал нэмнэ.",
        "4. Илүүдэл хүчилд огт уусахгүй өтгөн цагаан BaSO₄ тунадас бууна."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Acidifying with dilute HCl", descriptionMn: "Шингэрүүлсэн HCl хүчил нэмэх" },
        { time: "0:45", descriptionEn: "Adding BaCl₂: Thick white precipitate (BaSO₄)", descriptionMn: "BaCl₂ нэмэхэд өтгөн цагаан BaSO₄ тунадас буух" },
        { time: "1:20", descriptionEn: "Confirming insolubility in excess acid", descriptionMn: "Илүүдэл хүчилд уусахгүй болохыг батлах" }
      ],
      cambridgeExamTip: "Always mention 'insoluble in dilute acid' when distinguishing BaSO₄ from BaSO₃/BaCO₃!",
      cambridgeExamTipMn: "BaSO₄ тунадас нь 'хүчилд уусахгүй' (insoluble in dilute acid) гэдгийг заавал онцолж бичнэ.",
      testTubeVisual: {
        liquidColor: "rgba(240, 253, 250, 0.5)",
        precipitateColor: "#ffffff",
        precipitateType: "dense",
        excessBehavior: "Insoluble in excess dilute HCl/HNO₃"
      }
    }
  },
  {
    id: "so3_2-",
    anionEn: "sulfite, SO₃²⁻(aq)",
    anionMn: "сульфит, SO₃²⁻(усан)",
    formula: "SO₃²⁻",
    reagentAndTestEn: "1. Add aqueous Ba²⁺, then dilute strong acid OR 2. Add acidified aqueous KMnO₄",
    reagentAndTestMn: "1. Ba²⁺ нэмж цагаан тунадас үүсгээд шингэрүүлсэн хүчил нэмэх ЭСВЭЛ 2. Хүчиллэгжүүлсэн KMnO₄ нэмэх",
    observationEn: "gives white ppt. with Ba²⁺(aq) which DISSOLVES in excess dilute strong acids (giving SO₂ gas); decolourises acidified aqueous KMnO₄",
    observationMn: "Ba²⁺-той цагаан тунадас үүсгэх боловч илүүдэл хүчилд бүрэн уусна (хоолой хорсгосон SO₂ хий ялгарна); мөн KMnO₄-ийн ягааныг арилгана",
    ionicEquation: "BaSO₃(s) + 2H⁺(aq) → Ba²⁺(aq) + SO₂(g) + H₂O(l) | 5SO₃²⁻ + 2MnO₄⁻ + 6H⁺ → 5SO₄²⁻ + 2Mn²⁺ + 3H₂O",
    colorCategory: "White / Redox",
    videoTutorial: {
      titleEn: "Testing for Sulfite Ion (SO₃²⁻) vs Sulfate (Ba²⁺ test & Acid solubility)",
      titleMn: "Сульфит ионы сорил (BaSO₃ хүчилд уусах ба KMnO₄ өнгөгүйжүүлэх)",
      youtubeId: "vA2q_8mY0bA",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for sulfite SO3 2- barium test dissolve acid KMnO4",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+sulfite+SO3+2-",
      channel: "Cambridge 9701 Practical Lab",
      duration: "3:15",
      summaryMn: "Сульфит нь Ba²⁺-той цагаан тунадас өгдөг боловч сульфатаас ялгаатай нь шингэрүүлсэн хүчил нэмэхэд тунадас бүрэн уусаж SO₂ хий ялгардаг.",
      procedureStepsEn: [
        "1. Add BaCl₂(aq) or Ba(NO₃)₂(aq) to sulfite solution -> white precipitate (BaSO₃).",
        "2. Add dilute HCl -> white precipitate dissolves, effervescence with choking SO₂ gas.",
        "3. Add drops of purple acidified KMnO₄ -> purple color disappears (reduced to Mn²⁺)."
      ],
      procedureStepsMn: [
        "1. Сорьцонд BaCl₂ нэмэхэд цагаан BaSO₃ тунадас үүснэ.",
        "2. Шингэрүүлсэн HCl нэмэхэд тунадас уусаж, SO₂ хий ялгарна.",
        "3. Хүчиллэгжүүлсэн ягаан KMnO₄ уусмал нэмэхэд ягаан өнгө арилж өнгөгүй болно."
      ],
      keyObservationClips: [
        { time: "0:25", descriptionEn: "White ppt forms with Ba²⁺", descriptionMn: "Ba²⁺-той цагаан тунадас үүсэх" },
        { time: "1:00", descriptionEn: "Precipitate dissolves upon adding dilute acid", descriptionMn: "Хүчил нэмэхэд тунадас бүрэн уусах" },
        { time: "1:50", descriptionEn: "Decolourisation of acidified KMnO₄", descriptionMn: "KMnO₄-ийн ягаан өнгө арилах" }
      ],
      cambridgeExamTip: "How to differentiate SO₄²⁻ and SO₃²⁻: BaSO₄ is insoluble in dilute acid, while BaSO₃ dissolves in dilute acid.",
      cambridgeExamTipMn: "SO₄²⁻ ба SO₃²⁻ ялгах гол сорил: BaSO₄ нь хүчилд уусахгүй, харин BaSO₃ нь хүчил нэмэхэд бүрэн уусдаг.",
      testTubeVisual: {
        liquidColor: "rgba(240, 253, 244, 0.5)",
        precipitateColor: "#f8fafc",
        precipitateType: "fine",
        excessBehavior: "Precipitate dissolves in dilute HCl"
      }
    }
  },
  {
    id: "s2o3_2-",
    anionEn: "thiosulfate, S₂O₃²⁻(aq)",
    anionMn: "тиосульфат, S₂O₃²⁻(усан)",
    formula: "S₂O₃²⁻",
    reagentAndTestEn: "Add dilute acid (e.g. dilute HCl)",
    reagentAndTestMn: "Шингэрүүлсэн хүчил (жишээ нь HCl) нэмэх",
    observationEn: "gives off-white/pale yellow ppt. slowly with H⁺ (precipitate of solid Sulfur S(s) and choking SO₂ gas)",
    observationMn: "Хүчил нэмэхэд аажмаар шаргалдуу-цагаан / цайвар шар өнгийн хүхрийн (S) тунадас бууж, хоолой хорсгосон SO₂ хий ялгарна",
    ionicEquation: "S₂O₃²⁻(aq) + 2H⁺(aq) → S(s) (pale yellow ppt) + SO₂(g) + H₂O(l)",
    colorCategory: "Pale Yellow Solid",
    videoTutorial: {
      titleEn: "Reaction of Thiosulfate (S₂O₃²⁻) with Acid (Disappearing Cross Experiment)",
      titleMn: "Тиосульфат ба хүчлийн урвал (Хүхрийн тунадас үүсэх)",
      youtubeId: "T6u0Y4Z3w8Q",
      youtubeSearchQuery: "Cambridge 9701 Chemistry reaction of thiosulfate with acid disappearing cross sulfur",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+reaction+of+thiosulfate+with+acid",
      channel: "Cambridge A-Level Chemistry",
      duration: "3:40",
      summaryMn: "Натрийн тиосульфатын уусмал дээр HCl хүчил нэмэхэд диспропорцын урвал явагдаж шар хүхрийн тунадас үүсэж уусмал булингартана.",
      procedureStepsEn: [
        "1. Place ~2 cm³ of sodium thiosulfate (Na₂S₂O₃) in a conical flask / test-tube over a black cross.",
        "2. Add ~2 cm³ of dilute hydrochloric acid (HCl).",
        "3. Start stopwatch and swirl gently.",
        "4. Observe solution gradually turning cloudy pale-yellow as solid colloidal sulfur precipitate forms until the black cross is obscured."
      ],
      procedureStepsMn: [
        "1. Хар загалмай зурсан цаасан дээр байрлуулсан шилэнд ~2 см³ тиосульфат хийнэ.",
        "2. Дээрээс нь ~2 см³ шингэрүүлсэн HCl нэмнэ.",
        "3. Секундомер дарж зөөлөн сэгсэрнэ.",
        "4. Шар хүхрийн тунадас аажмаар үүсэж, уусмал булингартан хар загалмай харагдахгүй болно."
      ],
      keyObservationClips: [
        { time: "0:25", descriptionEn: "Adding dilute acid to clear thiosulfate", descriptionMn: "Тунгалаг тиосульфат руу хүчил нэмэх" },
        { time: "1:05", descriptionEn: "Cloudy pale yellow sulfur precipitate emerges", descriptionMn: "Шар хүхрийн булингар аажмаар үүсэх" },
        { time: "1:55", descriptionEn: "Solution turns opaque yellow/white", descriptionMn: "Уусмал бүрэн булингартаж нэвт харагдахгүй болох" }
      ],
      cambridgeExamTip: "Thiosulfate undergoes disproportionation in acid: S (+2) simultaneously oxidises to SO₂ (+4) and reduces to S (0).",
      cambridgeExamTipMn: "Тиосульфат хүчиллэг орчинд диспропорцын урвалд орж хүхэр S(+2) нь нэгэн зэрэг S(0) болж ангижран SO₂(+4) болж исэлддэг.",
      testTubeVisual: {
        liquidColor: "rgba(254, 249, 195, 0.7)",
        precipitateColor: "#fde047",
        precipitateType: "colloidal",
        gasBubbleColor: "#eab308",
        gasName: "SO₂ (g)",
        hasEffervescence: true
      }
    }
  }
];

export const CATIONS_DATA: CationReaction[] = [
  {
    id: "al3+",
    cationEn: "aluminium, Al³⁺(aq)",
    cationMn: "хөнгөнцагаан, Al³⁺(усан)",
    formula: "Al³⁺",
    colorBadge: {
      bg: "bg-slate-100",
      text: "text-slate-800",
      border: "border-slate-300",
      dot: "bg-slate-400"
    },
    naohReaction: {
      observationEn: "white ppt. soluble in excess",
      observationMn: "цагаан тунадас үүсэж, илүүдэлд нь уусна (өнгөгүй уусмал болно)",
      solubleInExcess: true,
      excessResultEn: "Forms colorless [Al(OH)₄]⁻(aq)",
      excessResultMn: "Илүүдэлд уусаж [Al(OH)₄]⁻ үүсгэнэ"
    },
    nh3Reaction: {
      observationEn: "white ppt. insoluble in excess",
      observationMn: "цагаан тунадас үүсэж, илүүдэл аммиакт уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Al(OH)₃ remains as white ppt.",
      excessResultMn: "Al(OH)₃ тунадас хэвээр үлдэнэ"
    },
    keyNotesEn: "Amphoteric hydroxide: reacts with excess strong base NaOH but not with weak base NH₃.",
    keyNotesMn: "Хоёрч шинжтэй гидроксид: Хүчтэй шүлт NaOH-ийн илүүдэлд уусдаг, сул шүлт NH₃-т уусдаггүй.",
    videoTutorial: {
      titleEn: "Testing for Aluminium Ion (Al³⁺) with NaOH and NH₃",
      titleMn: "Хөнгөнцагаан ионы сорил (NaOH ба NH₃-ийн урвал)",
      youtubeId: "uF7sY0zL3kQ",
      youtubeSearchQuery: "Cambridge 9701 Chemistry cation test aluminium Al3+ NaOH NH3",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+aluminium+Al3+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:50",
      summaryMn: "Al³⁺ нь NaOH-ийн илүүдэлд уусаж өнгөгүй болдог бол NH₃-ийн илүүдэлд уусдаггүйгээрээ Zn²⁺-ээс ялгардаг.",
      procedureStepsEn: [
        "1. Add aqueous NaOH dropwise -> white gelatinous ppt. of Al(OH)₃.",
        "2. Add excess NaOH -> precipitate dissolves giving colorless [Al(OH)₄]⁻.",
        "3. In fresh test tube, add aqueous NH₃ dropwise -> white ppt.",
        "4. Add excess NH₃ -> precipitate remains insoluble."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад Al(OH)₃ цагаан тунадас үүснэ.",
        "2. Илүүдэл NaOH нэмэхэд тунадас уусаж өнгөгүй уусмал болно.",
        "3. Шинэ хуруу шилэнд NH₃(aq) дусаахад цагаан тунадас бууна.",
        "4. Илүүдэл NH₃ нэмэхэд тунадас уусахгүй хэвээр байна."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Dropwise NaOH: White gelatinous ppt", descriptionMn: "NaOH дусаахад цагаан тунадас буух" },
        { time: "0:50", descriptionEn: "Excess NaOH: Precipitate dissolves", descriptionMn: "Илүүдэл NaOH-д бүрэн уусах" },
        { time: "1:30", descriptionEn: "Excess NH₃: Insoluble white ppt", descriptionMn: "Илүүдэл аммиакт уусахгүй үлдэх" }
      ],
      cambridgeExamTip: "Zn²⁺ dissolves in both excess NaOH and NH₃. Al³⁺ dissolves ONLY in excess NaOH!",
      cambridgeExamTipMn: "Zn²⁺ нь NaOH болон NH₃-ийн хоёулангийнх нь илүүдэлд уусдаг бол Al³⁺ нь зөвхөн NaOH-ийн илүүдэлд уусдаг.",
      testTubeVisual: {
        liquidColor: "rgba(241, 245, 249, 0.5)",
        precipitateColor: "#ffffff",
        precipitateType: "gelatinous",
        excessBehavior: "Soluble in NaOH, insoluble in NH₃"
      }
    }
  },
  {
    id: "nh4+",
    cationEn: "ammonium, NH₄⁺(aq)",
    cationMn: "аммоний, NH₄⁺(усан)",
    formula: "NH₄⁺",
    colorBadge: {
      bg: "bg-sky-50",
      text: "text-sky-800",
      border: "border-sky-200",
      dot: "bg-sky-400"
    },
    naohReaction: {
      observationEn: "no ppt. ammonia produced on warming",
      observationMn: "тунадас үүсэхгүй. Зөөлөн халаахад аммиак (NH₃) хий ялгарна",
      solubleInExcess: false,
      excessResultEn: "NH₄⁺ + OH⁻ → NH₃(g) + H₂O(l) (gas turns damp red litmus paper blue)",
      excessResultMn: "Ялгарсан NH₃ хий нь чийгтэй улаан лакмусын цаасыг хөх өнгөтэй болгоно"
    },
    nh3Reaction: {
      observationEn: "– (no reaction)",
      observationMn: "– (урвал явагдахгүй)",
      solubleInExcess: false,
      noReaction: true
    },
    keyNotesEn: "Test gas produced with damp red litmus paper (turns blue).",
    keyNotesMn: "Ялгарсан хийг чийгтэй улаан лакмусаар шалгана (хөхөрнө).",
    videoTutorial: {
      titleEn: "Testing for Ammonium Ion (NH₄⁺) with NaOH and Heat",
      titleMn: "Аммоний ионы сорил (NaOH ба халаалт)",
      youtubeId: "j6Y4qN3hL_k",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for ammonium NH4+ NaOH warming",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+ammonium+NH4+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:20",
      summaryMn: "Аммоний давс дээр NaOH нэмж зөөлөн халаахад тунадас буухгүй, харин NH₃ хий ялгарч чийгтэй улаан лакмусыг хөх болгоно.",
      procedureStepsEn: [
        "1. Add ~1 cm³ of NaOH(aq) to ammonium solution.",
        "2. Warm gently over Bunsen flame.",
        "3. Hold damp red litmus paper near the mouth of the test tube.",
        "4. Observe red litmus turns blue."
      ],
      procedureStepsMn: [
        "1. Аммонийн давс дээр ~1 см³ NaOH(aq) нэмнэ.",
        "2. Дөлөн дээр зөөлөн халаана.",
        "3. Амсарт нь чийгтэй улаан лакмусын цаас барина.",
        "4. Улаан лакмус хөх өнгөтэй болохыг ажиглана."
      ],
      keyObservationClips: [
        { time: "0:25", descriptionEn: "Adding NaOH (no precipitate)", descriptionMn: "NaOH нэмэх (тунадасгүй)" },
        { time: "0:50", descriptionEn: "Warming gently over flame", descriptionMn: "Дөлөн дээр халаах" },
        { time: "1:20", descriptionEn: "Damp red litmus turns blue", descriptionMn: "Чийгтэй улаан лакмус хөхрөх" }
      ],
      cambridgeExamTip: "Do not add Al foil here! Adding Al foil is for testing NO₃⁻/NO₂⁻, not NH₄⁺.",
      cambridgeExamTipMn: "Энд хөнгөнцагаан Al цаас хийхгүй! Al цаас нь зөвхөн нитрат/нитритийг танихад ашиглагдана.",
      testTubeVisual: {
        liquidColor: "rgba(238, 242, 255, 0.5)",
        hasEffervescence: true,
        gasBubbleColor: "#38bdf8",
        gasName: "NH₃ gas produced on warming",
        precipitateType: "none"
      }
    }
  },
  {
    id: "ba2+",
    cationEn: "barium, Ba²⁺(aq)",
    cationMn: "бари, Ba²⁺(усан)",
    formula: "Ba²⁺",
    colorBadge: {
      bg: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-200",
      dot: "bg-emerald-400"
    },
    naohReaction: {
      observationEn: "faint white ppt. is observed unless [Ba²⁺(aq)] is very low",
      observationMn: "бүүдгэр цагаан тунадас ажиглагдана (маш шингэрүүлсэн биш бол)",
      solubleInExcess: false,
      excessResultEn: "Ba(OH)₂ is moderately soluble",
      excessResultMn: "Ba(OH)₂ харьцангуй сайн уусдаг тул тунадас сулхан гардаг"
    },
    nh3Reaction: {
      observationEn: "no ppt.",
      observationMn: "тунадас үүсэхгүй",
      solubleInExcess: false,
      noReaction: true
    },
    keyNotesEn: "Ba(OH)₂ is the most soluble Group 2 hydroxide.",
    keyNotesMn: "2-р бүлгийн гидроксидууд дотроос хамгийн сайн уусдаг нь Ba(OH)₂ юм.",
    videoTutorial: {
      titleEn: "Reactions of Barium Ion (Ba²⁺) with NaOH & NH₃",
      titleMn: "Барийн ионы сорил (Ba²⁺ ба шүлтийн урвалууд)",
      youtubeId: "kL8p4Y3zW9A",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for barium Ba2+ NaOH sulfate",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+barium+Ba2+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:15",
      summaryMn: "Ba²⁺ нь NH₃-тэй тунадас өгдөггүй, харин сульфат SO₄²⁻ нэмэхэд хүчилд үл уусах өтгөн цагаан BaSO₄ тунадас өгдөг.",
      procedureStepsEn: [
        "1. Add NaOH(aq) -> faint white ppt only at high concentration.",
        "2. Add NH₃(aq) -> no ppt.",
        "3. Add dilute H₂SO₄ or Na₂SO₄ -> dense white ppt of BaSO₄."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) нэмэхэд зөвхөн өндөр концентрацид бүүдгэр цагаан тунадас үүснэ.",
        "2. NH₃(aq) нэмэхэд тунадас үүсэхгүй.",
        "3. Шингэрүүлсэн H₂SO₄ нэмэхэд өтгөн цагаан BaSO₄ тунадас бууна."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Adding NaOH and NH₃", descriptionMn: "NaOH ба NH₃ нэмэх" },
        { time: "0:50", descriptionEn: "Adding sulfate: Instant BaSO₄ white ppt", descriptionMn: "Сульфат нэмэхэд агшин зуур цагаан тунадас буух" }
      ],
      cambridgeExamTip: "Group 2 hydroxide solubility INCREASES down the group: Mg(OH)₂ (insoluble) -> Ca(OH)₂ (sparingly) -> Ba(OH)₂ (soluble).",
      cambridgeExamTipMn: "2-р бүлгийн гидроксидын уусах чанар доошлох тусам ихэсдэг: Mg(OH)₂ (уусахгүй) -> Ca(OH)₂ (бага) -> Ba(OH)₂ (сайн уусна).",
      testTubeVisual: {
        liquidColor: "rgba(236, 253, 245, 0.5)",
        precipitateColor: "#ffffff",
        precipitateType: "fine"
      }
    }
  },
  {
    id: "ca2+",
    cationEn: "calcium, Ca²⁺(aq)",
    cationMn: "кальци, Ca²⁺(усан)",
    formula: "Ca²⁺",
    colorBadge: {
      bg: "bg-teal-50",
      text: "text-teal-800",
      border: "border-teal-200",
      dot: "bg-teal-400"
    },
    naohReaction: {
      observationEn: "white ppt. unless [Ca²⁺(aq)] is very low",
      observationMn: "цагаан тунадас үүснэ (концентраци маш бага биш бол)",
      solubleInExcess: false,
      excessResultEn: "Ca(OH)₂ remains as white ppt.",
      excessResultMn: "Ca(OH)₂ цагаан тунадас илүүдэлд уусахгүй"
    },
    nh3Reaction: {
      observationEn: "no ppt.",
      observationMn: "тунадас үүсэхгүй",
      solubleInExcess: false,
      noReaction: true
    },
    keyNotesEn: "Differentiates from Al³⁺/Zn²⁺/Mg²⁺ because Ca²⁺ forms NO ppt with NH₃(aq).",
    keyNotesMn: "NH₃ нэмэхэд тунадас өгдөггүйгээрээ Al³⁺, Zn²⁺, Mg²⁺-аас ялгарна.",
    videoTutorial: {
      titleEn: "Reactions of Calcium Ion (Ca²⁺) with NaOH & NH₃",
      titleMn: "Кальцийн ионы сорил (NaOH ба NH₃-ийн урвалууд)",
      youtubeId: "tJ6e4L9vM1o",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for calcium Ca2+ NaOH NH3",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+calcium+Ca2+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:30",
      summaryMn: "Кальци Ca²⁺ нь NaOH-тай цагаан Ca(OH)₂ тунадас өгдөг боловч NH₃-тэй огт тунадас үүсгэдэггүйгээрээ Mg²⁺ болон Al³⁺-аас ялгардаг.",
      procedureStepsEn: [
        "1. Add NaOH(aq) dropwise -> white precipitate.",
        "2. Add excess NaOH -> precipitate remains insoluble.",
        "3. In separate tube, add NH₃(aq) -> NO precipitate.",
        "4. Perform flame test -> brick-red flame."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад цагаан тунадас үүснэ.",
        "2. Илүүдэл NaOH нэмэхэд тунадас уусахгүй.",
        "3. Тусдаа хуруу шилэнд NH₃(aq) нэмэхэд тунадас ҮҮСЭХГҮЙ.",
        "4. Дөлний сорил хийхэд тоосгон улаан дөл гарна."
      ],
      keyObservationClips: [
        { time: "0:25", descriptionEn: "NaOH gives white ppt", descriptionMn: "NaOH-тай цагаан тунадас өгөх" },
        { time: "0:55", descriptionEn: "NH₃ gives NO precipitate (key distinction)", descriptionMn: "NH₃-тэй тунадас үүсгэхгүй байх (гол ялгаа)" }
      ],
      cambridgeExamTip: "Ca²⁺ gives no ppt with NH₃(aq) because [OH⁻] from weak base NH₃ is too low to exceed the Ksp of Ca(OH)₂.",
      cambridgeExamTipMn: "Сул суурь NH₃ дахь [OH⁻] бага тул Ca(OH)₂-ийн уусах үржвэр Ksp-д хүрдэггүй тул тунадас буудаггүй.",
      testTubeVisual: {
        liquidColor: "rgba(240, 253, 250, 0.6)",
        precipitateColor: "#ffffff",
        precipitateType: "fine",
        excessBehavior: "Insoluble in excess NaOH; No ppt with NH₃"
      }
    }
  },
  {
    id: "cr3+",
    cationEn: "chromium(III), Cr³⁺(aq)",
    cationMn: "хром(III), Cr³⁺(усан)",
    formula: "Cr³⁺",
    colorBadge: {
      bg: "bg-emerald-100",
      text: "text-emerald-900",
      border: "border-emerald-300",
      dot: "bg-emerald-600"
    },
    naohReaction: {
      observationEn: "grey-green ppt. soluble in excess giving dark green solution",
      observationMn: "саарал-ногоон тунадас үүсэж, илүүдэлд уусан гүн ногоон уусмал болно",
      solubleInExcess: true,
      excessResultEn: "Forms dark green [Cr(OH)₆]³⁻(aq) or [Cr(OH)₄]⁻(aq)",
      excessResultMn: "Илүүдэлд уусаж гүн ногоон цогц ион үүсгэнэ"
    },
    nh3Reaction: {
      observationEn: "grey-green ppt. insoluble in excess",
      observationMn: "саарал-ногоон тунадас үүсэж, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Cr(OH)₃ remains as grey-green ppt. (very slight solubility in concentrated NH₃ to purple)",
      excessResultMn: "Саарал-ногоон тунадас хэвээр үлдэнэ"
    },
    keyNotesEn: "Chromium(III) is green in aqueous solution and forms amphoteric grey-green Cr(OH)₃.",
    keyNotesMn: "Cr³⁺ нь усан уусмалдаа ногоон, шүлтэнд саарал-ногоон тунадас өгдөг.",
    videoTutorial: {
      titleEn: "Reactions of Chromium(III) (Cr³⁺) with NaOH and NH₃",
      titleMn: "Хром(III) ионы сорил (NaOH ба NH₃-ийн урвал)",
      youtubeId: "mC8q9L2zR0e",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for chromium Cr3+ grey green ppt",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+chromium+Cr3+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "3:00",
      summaryMn: "Cr³⁺ нь NaOH-тай саарал ногоон тунадас өгч илүүдэлд нь уусан гүн ногоон болдог бол NH₃-ийн илүүдэлд уусдаггүй.",
      procedureStepsEn: [
        "1. Add NaOH(aq) dropwise -> grey-green ppt. of Cr(OH)₃.",
        "2. Add excess NaOH -> dissolves to form dark green chromite solution [Cr(OH)₆]³⁻.",
        "3. In second tube, add NH₃(aq) -> grey-green ppt., insoluble in excess NH₃."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад саарал-ногоон Cr(OH)₃ тунадас үүснэ.",
        "2. Илүүдэл NaOH нэмэхэд уусаж гүн ногоон уусмал үүсгэнэ.",
        "3. Тусдаа хуруу шилэнд NH₃ нэмэхэд саарал-ногоон тунадас бууж илүүдэлд нь уусахгүй."
      ],
      keyObservationClips: [
        { time: "0:25", descriptionEn: "Grey-green ppt with NaOH", descriptionMn: "NaOH-тай саарал ногоон тунадас үүсэх" },
        { time: "1:00", descriptionEn: "Excess NaOH: Dark green solution", descriptionMn: "Илүүдэл NaOH-д уусаж гүн ногоон болох" }
      ],
      cambridgeExamTip: "Always describe the precipitate as 'grey-green'. Just saying 'green' might be confused with Fe²⁺.",
      cambridgeExamTipMn: "Тунадасны өнгийг заавал 'grey-green' (саарал-ногоон) гэж бичнэ. Зүгээр 'ногоон' гэж бичвэл Fe²⁺-тэй андуурагдаж оноо алдана.",
      testTubeVisual: {
        liquidColor: "rgba(209, 250, 229, 0.7)",
        precipitateColor: "#52796f",
        precipitateType: "dense",
        excessBehavior: "Forms dark green solution with excess NaOH"
      }
    }
  },
  {
    id: "cu2+",
    cationEn: "copper(II), Cu²⁺(aq)",
    cationMn: "зэс(II), Cu²⁺(усан)",
    formula: "Cu²⁺",
    colorBadge: {
      bg: "bg-blue-100",
      text: "text-blue-900",
      border: "border-blue-300",
      dot: "bg-blue-500"
    },
    naohReaction: {
      observationEn: "pale blue ppt. insoluble in excess",
      observationMn: "цайвар цэнхэр тунадас үүсэж, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Cu(OH)₂(s) remains pale blue ppt.",
      excessResultMn: "Cu(OH)₂ цайвар цэнхэр тунадас хэвээр үлдэнэ"
    },
    nh3Reaction: {
      observationEn: "pale blue ppt. soluble in excess giving dark blue solution",
      observationMn: "цайвар цэнхэр тунадас үүсэж, илүүдэл аммиакт уусан гүн хөх уусмал болно",
      solubleInExcess: true,
      excessResultEn: "Forms royal deep-blue tetraamminediaquacopper(II) [Cu(NH₃)₄(H₂O)₂]²⁺(aq)",
      excessResultMn: "Илүүдэл NH₃-т уусаж гүн хөх [Cu(NH₃)₄(H₂O)₂]²⁺ цогц уусмал үүсгэнэ"
    },
    keyNotesEn: "Signature test: Dark blue solution in excess NH₃(aq) is uniquely characteristic of Cu²⁺.",
    keyNotesMn: "Илүүдэл NH₃-т уусаж гүн хөх өнгөтэй уусмал болох нь Cu²⁺ катионы үндсэн таних онцлог юм.",
    videoTutorial: {
      titleEn: "Testing for Copper(II) (Cu²⁺) - Royal Deep Blue Complex with Excess NH₃",
      titleMn: "Зэс(II) ионы сорил (Цайвар цэнхэр тунадас ба гүн хөх цогц уусмал)",
      youtubeId: "bQ6e5m8Y0tU",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for copper Cu2+ dark blue complex ammonia",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+copper+Cu2+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "3:00",
      summaryMn: "Cu²⁺ дээр бага зэрэг NH₃ дусаахад цайвар цэнхэр тунадас үүсэх ба илүүдэл аммиак нэмэхэд тунадас уусан гоёмсог гүн хөх (royal dark blue) өнгөтэй болдог.",
      procedureStepsEn: [
        "1. Add aqueous NaOH dropwise -> pale blue precipitate of Cu(OH)₂ (insoluble in excess).",
        "2. In fresh test tube, add aqueous NH₃ dropwise -> pale blue precipitate.",
        "3. Add excess aqueous NH₃ -> precipitate completely dissolves into a magnificent dark royal-blue solution."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад цайвар цэнхэр Cu(OH)₂ тунадас бууна (илүүдэлд уусахгүй).",
        "2. Шинэ хуруу шилэнд NH₃(aq) дусаахад цайвар цэнхэр тунадас үүснэ.",
        "3. Илүүдэл NH₃ нэмэхэд тунадас бүрэн уусаж гүн хөх өнгөтэй [Cu(NH₃)₄(H₂O)₂]²⁺ уусмал болно."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Adding dropwise NaOH: Pale blue precipitate", descriptionMn: "NaOH дусаахад цайвар цэнхэр тунадас буух" },
        { time: "0:50", descriptionEn: "Adding excess NH₃: Deep dark royal-blue complex", descriptionMn: "Илүүдэл аммиакт уусаж гүн хөх цогц уусмал үүсэх" }
      ],
      cambridgeExamTip: "Cambridge Mark Scheme requires 'pale blue precipitate' on addition of dropwise NH₃, and 'dark blue solution' on excess NH₃.",
      cambridgeExamTipMn: "Кембрижийн шалгалтад эхлээд 'pale blue ppt', дараа нь илүүдэлд 'dark blue solution' гэж тодорхой бичихийг шаарддаг.",
      testTubeVisual: {
        liquidColor: "rgba(191, 219, 254, 0.7)",
        precipitateColor: "#38bdf8",
        precipitateType: "dense",
        excessBehavior: "Dissolves in excess NH₃ to royal dark blue solution"
      }
    }
  },
  {
    id: "fe2+",
    cationEn: "iron(II), Fe²⁺(aq)",
    cationMn: "төмөр(II), Fe²⁺(усан)",
    formula: "Fe²⁺",
    colorBadge: {
      bg: "bg-lime-100",
      text: "text-lime-900",
      border: "border-lime-300",
      dot: "bg-lime-600"
    },
    naohReaction: {
      observationEn: "green ppt. turning brown on contact with air insoluble in excess",
      observationMn: "ногоон тунадас үүсэж, агаартай шүргэлцэхэд бор өнгөтэй болно, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Fe(OH)₂(s) oxidises slowly in air to brown Fe(OH)₃",
      excessResultMn: "Fe(OH)₂ нь агаарын хүчилтөрөгчөөр исэлдэж бор Fe(OH)₃ болно"
    },
    nh3Reaction: {
      observationEn: "green ppt. turning brown on contact with air insoluble in excess",
      observationMn: "ногоон тунадас үүсэж, агаарт борлоно, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Fe(OH)₂(s) insoluble in excess NH₃",
      excessResultMn: "Илүүдэл аммиакт уусахгүй"
    },
    keyNotesEn: "Turns brown at top of test tube due to oxidation of Fe(II) to Fe(III) by atmospheric O₂.",
    keyNotesMn: "Агаарын O₂-ийн нөлөөгөөр туршилтын хуруу шилний амсар дээр ногоон тунадас борлож эхэлдэг.",
    videoTutorial: {
      titleEn: "Reactions of Iron(II) (Fe²⁺) with NaOH & NH₃ (Oxidation in Air)",
      titleMn: "Төмөр(II) ионы сорил (Ногоон тунадас агаарт борлох)",
      youtubeId: "vB8k1m7Y0dQ",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for iron II Fe2+ green ppt brown air",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+iron+Fe2+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:45",
      summaryMn: "Fe²⁺ дээр NaOH эсвэл NH₃ нэмэхэд ногоон Fe(OH)₂ тунадас үүсэх бөгөөд агаарын хүчилтөрөгчийн нөлөөгөөр амсраасаа эхлэн борлож Fe(OH)₃ болно.",
      procedureStepsEn: [
        "1. Add aqueous NaOH dropwise -> dirty green precipitate of Fe(OH)₂.",
        "2. Add excess NaOH -> precipitate remains insoluble.",
        "3. Leave tube standing in air for 1-2 minutes -> top of precipitate oxidises and turns rust-brown.",
        "4. Repeat with NH₃(aq) -> identical observation."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад бохир ногоон Fe(OH)₂ тунадас бууна.",
        "2. Илүүдэл NaOH нэмэхэд тунадас уусахгүй.",
        "3. Хуруу шилийг 1-2 минут агаарт тавихад дээд хэсэг нь бор өнгөтэй Fe(OH)₃ болж исэлдэнэ.",
        "4. NH₃(aq)-тэй туршихад мөн адил үр дүн гарна."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Green precipitate forms immediately", descriptionMn: "Ногоон тунадас шууд буух" },
        { time: "1:10", descriptionEn: "Precipitate turning brown at the air interface", descriptionMn: "Агаарт шүргэлцсэн дээд хэсгээрээ борлох" }
      ],
      cambridgeExamTip: "Always mention 'green precipitate turning brown on standing/contact with air'.",
      cambridgeExamTipMn: "Шалгалтын тайланд 'green ppt turning brown on contact with air' гэж бүрэн бичиж оноо авна.",
      testTubeVisual: {
        liquidColor: "rgba(236, 252, 203, 0.7)",
        precipitateColor: "#65a30d",
        precipitateType: "dense",
        excessBehavior: "Insoluble in excess NaOH and NH₃; turns brown at top"
      }
    }
  },
  {
    id: "fe3+",
    cationEn: "iron(III), Fe³⁺(aq)",
    cationMn: "төмөр(III), Fe³⁺(усан)",
    formula: "Fe³⁺",
    colorBadge: {
      bg: "bg-amber-100",
      text: "text-amber-900",
      border: "border-amber-300",
      dot: "bg-amber-700"
    },
    naohReaction: {
      observationEn: "red-brown ppt. insoluble in excess",
      observationMn: "улаан-хүрэн (зэвний өнгөт) тунадас үүсэж, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Fe(OH)₃(s) rust-brown precipitate",
      excessResultMn: "Fe(OH)₃ улаан-хүрэн тунадас хэвээр байна"
    },
    nh3Reaction: {
      observationEn: "red-brown ppt. insoluble in excess",
      observationMn: "улаан-хүрэн тунадас үүсэж, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Fe(OH)₃(s) insoluble in excess NH₃",
      excessResultMn: "Илүүдэл аммиакт уусахгүй"
    },
    keyNotesEn: "Distinctive rust-red-brown precipitate with both NaOH and NH₃.",
    keyNotesMn: "NaOH болон NH₃-ийн аль алинд нь шууд улаан хүрэн тунадас бууна.",
    videoTutorial: {
      titleEn: "Testing for Iron(III) (Fe³⁺) with NaOH & NH₃ (Rust Red-Brown Precipitate)",
      titleMn: "Төмөр(III) ионы сорил (Улаан хүрэн тунадас)",
      youtubeId: "kP8uV2zQ1xY",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for iron III Fe3+ red brown precipitate",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+iron+Fe3+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:30",
      summaryMn: "Fe³⁺ уусмалд NaOH эсвэл NH₃ дусаахад агшин зуур улаан-хүрэн (зэвний өнгөт) Fe(OH)₃ тунадас бууж, илүүдэлд нь уусахгүй хэвээр үлдэнэ.",
      procedureStepsEn: [
        "1. Add aqueous NaOH dropwise -> instant rust red-brown ppt. of Fe(OH)₃.",
        "2. Add excess NaOH -> precipitate remains insoluble.",
        "3. In second tube, add NH₃(aq) -> identical red-brown ppt., insoluble in excess NH₃."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад агшин зуур улаан хүрэн Fe(OH)₃ тунадас үүснэ.",
        "2. Илүүдэл NaOH нэмэхэд тунадас уусахгүй.",
        "3. NH₃(aq)-тэй сориход мөн улаан хүрэн тунадас үүсэж, илүүдэлд нь уусахгүй."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Adding NaOH: Immediate rust red-brown precipitate", descriptionMn: "NaOH нэмэхэд улаан хүрэн тунадас шууд буух" },
        { time: "0:55", descriptionEn: "Insoluble in excess reagent", descriptionMn: "Илүүдэлд уусахгүй хэвээр байх" }
      ],
      cambridgeExamTip: "Always write 'red-brown precipitate' (not just 'brown' or 'orange').",
      cambridgeExamTipMn: "Өнгийг нь зүгээр 'хүрэн' гэж бичилгүй, заавал 'red-brown precipitate' гэж бичнэ.",
      testTubeVisual: {
        liquidColor: "rgba(254, 243, 199, 0.7)",
        precipitateColor: "#b45309",
        precipitateType: "dense",
        excessBehavior: "Insoluble in excess NaOH and NH₃"
      }
    }
  },
  {
    id: "mg2+",
    cationEn: "magnesium, Mg²⁺(aq)",
    cationMn: "магни, Mg²⁺(усан)",
    formula: "Mg²⁺",
    colorBadge: {
      bg: "bg-stone-100",
      text: "text-stone-800",
      border: "border-stone-300",
      dot: "bg-stone-400"
    },
    naohReaction: {
      observationEn: "white ppt. insoluble in excess",
      observationMn: "цагаан тунадас үүсэж, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Mg(OH)₂(s) remains as thick white ppt.",
      excessResultMn: "Mg(OH)₂ өтгөн цагаан тунадас хэвээр үлдэнэ"
    },
    nh3Reaction: {
      observationEn: "white ppt. insoluble in excess",
      observationMn: "цагаан тунадас үүсэж, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Mg(OH)₂(s) forms white ppt. with NH₃(aq)",
      excessResultMn: "NH₃-тэй цагаан тунадас үүсгэнэ"
    },
    keyNotesEn: "Distinguished from Ca²⁺ and Ba²⁺ because Mg²⁺ precipitates with NH₃(aq). Distinguished from Al³⁺/Zn²⁺ because it is insoluble in excess NaOH.",
    keyNotesMn: "NH₃-тэй цагаан тунадас үүсгэдгээрээ Ca²⁺ ба Ba²⁺-аас ялгарна. Илүүдэл NaOH-д уусдаггүйгээрээ Al³⁺ ба Zn²⁺-ээс ялгарна.",
    videoTutorial: {
      titleEn: "Reactions of Magnesium Ion (Mg²⁺) with NaOH & NH₃",
      titleMn: "Магнийн ионы сорил (Mg(OH)₂ цагаан тунадас)",
      youtubeId: "b8Q1m6V0yW4",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for magnesium Mg2+ NaOH NH3",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+magnesium+Mg2+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:20",
      summaryMn: "Mg²⁺ нь NaOH болон NH₃-ийн аль алинд нь цагаан Mg(OH)₂ тунадас үүсгэж илүүдэлд нь огт уусдаггүй.",
      procedureStepsEn: [
        "1. Add NaOH(aq) dropwise -> white precipitate of Mg(OH)₂.",
        "2. Add excess NaOH -> precipitate remains insoluble.",
        "3. Add NH₃(aq) dropwise -> white precipitate of Mg(OH)₂.",
        "4. Add excess NH₃ -> precipitate remains insoluble."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад өтгөн цагаан Mg(OH)₂ тунадас бууна.",
        "2. Илүүдэл NaOH нэмэхэд тунадас уусахгүй.",
        "3. NH₃(aq) дусаахад мөн цагаан тунадас үүснэ.",
        "4. Илүүдэл NH₃ нэмэхэд уусахгүй үлдэнэ."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "White ppt with NaOH (insoluble in excess)", descriptionMn: "NaOH-тай цагаан тунадас үүсэж илүүдэлд уусахгүй байх" },
        { time: "0:50", descriptionEn: "White ppt with NH₃ (distinguishes from Ca²⁺)", descriptionMn: "NH₃-тэй цагаан тунадас өгөх (Ca²⁺-аас ялгарах шинж)" }
      ],
      cambridgeExamTip: "Differentiating Mg²⁺ from Ca²⁺: Mg²⁺ gives a white precipitate with NH₃(aq), whereas Ca²⁺ gives no precipitate with NH₃(aq).",
      cambridgeExamTipMn: "Mg²⁺ болон Ca²⁺-ийг ялгах: Mg²⁺ нь NH₃-тэй цагаан тунадас өгдөг бол Ca²⁺ нь NH₃-тэй ямар ч тунадас өгдөггүй.",
      testTubeVisual: {
        liquidColor: "rgba(245, 245, 244, 0.6)",
        precipitateColor: "#ffffff",
        precipitateType: "dense",
        excessBehavior: "Insoluble in both excess NaOH and excess NH₃"
      }
    }
  },
  {
    id: "mn2+",
    cationEn: "manganese(II), Mn²⁺(aq)",
    cationMn: "манган(II), Mn²⁺(усан)",
    formula: "Mn²⁺",
    colorBadge: {
      bg: "bg-orange-50",
      text: "text-orange-950",
      border: "border-orange-200",
      dot: "bg-stone-500"
    },
    naohReaction: {
      observationEn: "off-white ppt. rapidly turning brown on contact with air insoluble in excess",
      observationMn: "шаргалдуу-цагаан (off-white) тунадас үүсэж, агаарт маш хурдан бор өнгөтэй болно, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Mn(OH)₂ rapidly oxidises in air to brown MnO(OH) or MnO₂",
      excessResultMn: "Mn(OH)₂ нь агаарт маш түргэн исэлдэж бор MnO(OH) болдог"
    },
    nh3Reaction: {
      observationEn: "off-white ppt. rapidly turning brown on contact with air insoluble in excess",
      observationMn: "шаргалдуу-цагаан тунадас үүсэж, агаарт маш хурдан бор өнгөтэй болно, илүүдэлд уусахгүй",
      solubleInExcess: false,
      excessResultEn: "Mn(OH)₂ insoluble in excess NH₃",
      excessResultMn: "Илүүдэл аммиакт уусахгүй"
    },
    keyNotesEn: "Key difference with Fe²⁺: Mn²⁺ precipitate is off-white turning brown very rapidly; Fe²⁺ is green turning brown.",
    keyNotesMn: "Fe²⁺ ногооноос борлодог бол Mn²⁺ шаргалдуу цагаанаас (off-white) агаарт маш хурдан борлодог.",
    videoTutorial: {
      titleEn: "Testing for Manganese(II) (Mn²⁺) - Off-White PPT Turning Brown Rapidly",
      titleMn: "Манган(II) ионы сорил (Шаргалдуу цагаан тунадас түргэн борлох)",
      youtubeId: "vB2q_7mW0qE",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for manganese Mn2+ off white turning brown",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+manganese+Mn2+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:40",
      summaryMn: "Mn²⁺ дээр NaOH эсвэл NH₃ нэмэхэд шаргалдуу цагаан (off-white) тунадас бууж агаарт маш түргэн хугацаанд бор болж исэлдэнэ.",
      procedureStepsEn: [
        "1. Add NaOH(aq) dropwise -> off-white precipitate of Mn(OH)₂.",
        "2. Add excess NaOH -> precipitate remains insoluble.",
        "3. Watch surface -> turns dark brown within seconds due to oxidation by air.",
        "4. Repeat with NH₃(aq) -> identical observation."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад шаргалдуу цагаан (off-white) Mn(OH)₂ тунадас үүснэ.",
        "2. Илүүдэл NaOH нэмэхэд тунадас уусахгүй.",
        "3. Гадаргууг ажиглахад хэдхэн секундийн дотор агаарын нөлөөгөөр бараан бор өнгөтэй болно.",
        "4. NH₃(aq)-тэй туршихад мөн адил үр дүн гарна."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Off-white precipitate forms", descriptionMn: "Шаргалдуу цагаан тунадас үүсэх" },
        { time: "0:45", descriptionEn: "Rapid darkening to brown in air", descriptionMn: "Агаарт маш түргэн бор өнгөтэй болох" }
      ],
      cambridgeExamTip: "Mn²⁺ gives off-white (or light buff) ppt turning brown rapidly. Fe²⁺ gives dirty green ppt turning brown slowly.",
      cambridgeExamTipMn: "Mn²⁺ нь шаргалдуу цагаан тунадаснаас маш хурдан борлодог, харин Fe²⁺ нь ногоон тунадаснаас аажим борлодог.",
      testTubeVisual: {
        liquidColor: "rgba(255, 247, 237, 0.7)",
        precipitateColor: "#e7e5e4",
        precipitateType: "dense",
        excessBehavior: "Insoluble in excess; rapidly turns dark brown"
      }
    }
  },
  {
    id: "zn2+",
    cationEn: "zinc, Zn²⁺(aq)",
    cationMn: "цайр, Zn²⁺(усан)",
    formula: "Zn²⁺",
    colorBadge: {
      bg: "bg-indigo-50",
      text: "text-indigo-900",
      border: "border-indigo-200",
      dot: "bg-indigo-400"
    },
    naohReaction: {
      observationEn: "white ppt. soluble in excess",
      observationMn: "цагаан тунадас үүсэж, илүүдэлд нь уусна (өнгөгүй уусмал болно)",
      solubleInExcess: true,
      excessResultEn: "Forms colorless zincate [Zn(OH)₄]²⁻(aq)",
      excessResultMn: "Илүүдэлд уусаж [Zn(OH)₄]²⁻ үүсгэнэ"
    },
    nh3Reaction: {
      observationEn: "white ppt. soluble in excess",
      observationMn: "цагаан тунадас үүсэж, илүүдэл аммиакт уусна (өнгөгүй уусмал болно)",
      solubleInExcess: true,
      excessResultEn: "Forms colorless tetraamminezinc(II) [Zn(NH₃)₄]²⁺(aq)",
      excessResultMn: "Илүүдэлд уусаж өнгөгүй [Zn(NH₃)₄]²⁺ цогц уусмал үүсгэнэ"
    },
    keyNotesEn: "Zn²⁺ is the ONLY cation whose white hydroxide precipitate is soluble in excess of BOTH NaOH AND NH₃(aq)!",
    keyNotesMn: "NaOH ба NH₃-ийн АЛЬ АЛИНЫХ НЬ илүүдэлд уусдаг цорын ганц цагаан тунадастай катион бол Zn²⁺ юм!",
    videoTutorial: {
      titleEn: "Testing for Zinc Ion (Zn²⁺) - Soluble in Excess of BOTH NaOH and NH₃",
      titleMn: "Цайр ионы сорил (NaOH ба NH₃-ийн хоёулангийнх нь илүүдэлд уусах)",
      youtubeId: "b8T6m2V1yQ0",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for zinc Zn2+ soluble in excess NaOH and NH3",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+zinc+Zn2+",
      channel: "Cambridge 9701 Practical Lab",
      duration: "3:00",
      summaryMn: "Zn²⁺ нь цагаан Zn(OH)₂ тунадас үүсгэх ба NaOH болон NH₃-ийн хоёулангийнх нь илүүдэлд бүрэн уусаж өнгөгүй болдог цорын ганц катион юм.",
      procedureStepsEn: [
        "1. Add aqueous NaOH dropwise -> white precipitate of Zn(OH)₂.",
        "2. Add excess NaOH -> precipitate dissolves giving colorless zincate [Zn(OH)₄]²⁻.",
        "3. In fresh tube, add aqueous NH₃ dropwise -> white precipitate.",
        "4. Add excess NH₃ -> precipitate completely dissolves giving colorless [Zn(NH₃)₄]²⁺."
      ],
      procedureStepsMn: [
        "1. NaOH(aq) дусаахад цагаан Zn(OH)₂ тунадас үүснэ.",
        "2. Илүүдэл NaOH нэмэхэд тунадас уусаж өнгөгүй уусмал болно.",
        "3. Шинэ хуруу шилэнд NH₃(aq) дусаахад цагаан тунадас бууна.",
        "4. Илүүдэл NH₃ нэмэхэд тунадас мөн бүрэн уусаж өнгөгүй цогц уусмал болно."
      ],
      keyObservationClips: [
        { time: "0:25", descriptionEn: "Dropwise NaOH & NH₃: White ppt", descriptionMn: "NaOH болон NH₃-тэй цагаан тунадас өгөх" },
        { time: "1:10", descriptionEn: "Excess NaOH: Dissolves to clear solution", descriptionMn: "Илүүдэл NaOH-д бүрэн уусах" },
        { time: "1:55", descriptionEn: "Excess NH₃: Dissolves to clear solution (Unique to Zn²⁺)", descriptionMn: "Илүүдэл аммиакт мөн бүрэн уусах (зөвхөн Zn²⁺-ийн онцлог)" }
      ],
      cambridgeExamTip: "Golden Rule: Zn²⁺ is the ONLY cation soluble in excess of BOTH NaOH and NH₃(aq). Memorize this for instant 2 marks in Paper 3!",
      cambridgeExamTipMn: "Алтан дүрэм: NaOH болон NH₃-ийн аль алиных нь илүүдэлд уусдаг цорын ганц катион бол Zn²⁺ юм!",
      testTubeVisual: {
        liquidColor: "rgba(238, 242, 255, 0.6)",
        precipitateColor: "#ffffff",
        precipitateType: "dense",
        excessBehavior: "Soluble in BOTH excess NaOH and excess NH₃"
      }
    }
  }
];

export const GASES_DATA: GasTest[] = [
  {
    id: "nh3",
    gasEn: "ammonia, NH₃",
    gasMn: "аммиак, NH₃",
    formula: "NH₃",
    testAndResultEn: "turns damp red litmus paper blue",
    testAndResultMn: "чийгтэй улаан лакмусын цаасыг хөх өнгөтэй болгоно (суурьлаг хий)",
    chemicalNote: "Alkaline pungent gas; gives dense white fumes of NH₄Cl with HCl(g)",
    videoTutorial: {
      titleEn: "Testing for Ammonia Gas (NH₃)",
      titleMn: "Аммиак хийг таних сорил (Чийгтэй улаан лакмус)",
      youtubeId: "kL6w8Q2vN0A",
      youtubeSearchQuery: "Cambridge 9701 Chemistry gas test ammonia NH3 damp red litmus blue",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+ammonia+gas",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:00",
      summaryMn: "Аммиак нь цорын ганц шүлтлэг хий бөгөөд чийгтэй улаан лакмусын цаасыг хөх болгодог.",
      procedureStepsEn: [
        "1. Moisten red litmus paper with distilled water.",
        "2. Hold damp paper at the mouth of the test-tube emitting gas.",
        "3. Observe color turns from red to blue."
      ],
      procedureStepsMn: [
        "1. Улаан лакмусын цаасыг нэрмэл усаар чийглэнэ.",
        "2. Хий ялгарч буй хуруу шилний амсарт барина.",
        "3. Цаас улаанаас хөх өнгөтэй болохыг ажиглана."
      ],
      keyObservationClips: [
        { time: "0:30", descriptionEn: "Holding damp red litmus near gas outlet", descriptionMn: "Чийгтэй лакмусыг амсарт барих" },
        { time: "0:50", descriptionEn: "Litmus turns blue immediately", descriptionMn: "Лакмус шууд хөх өнгөтэй болох" }
      ],
      cambridgeExamTip: "Always specify 'damp red litmus paper turns blue'.",
      cambridgeExamTipMn: "Шалгалтад заавал 'damp red litmus paper' (чийгтэй улаан лакмус) гэж бичнэ.",
      testTubeVisual: {
        liquidColor: "rgba(224, 231, 255, 0.5)",
        hasEffervescence: true,
        gasBubbleColor: "#38bdf8",
        gasName: "NH₃ (g) turns damp red litmus blue"
      }
    }
  },
  {
    id: "co2",
    gasEn: "carbon dioxide, CO₂",
    gasMn: "нүүрсхүчлийн хий, CO₂",
    formula: "CO₂",
    testAndResultEn: "gives a white ppt. with limewater (turns limewater cloudy)",
    testAndResultMn: "шохойн ус (Ca(OH)₂)-аар нэвтрүүлэхэд цагаан тунадас үүсгэж булингартуулна",
    chemicalNote: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",
    videoTutorial: {
      titleEn: "Testing for Carbon Dioxide Gas (CO₂) with Limewater",
      titleMn: "Нүүрсхүчлийн хий (CO₂) шохойн усыг булингартуулах сорил",
      youtubeId: "J8Dq_jB5w9Y",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for carbon dioxide CO2 limewater",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+carbon+dioxide+CO2",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:10",
      summaryMn: "CO₂ хийг шохойн ус Ca(OH)₂ дундуур нэвтрүүлэхэд уусдаггүй цагаан CaCO₃ үүсэж уусмал цайвар цагаан булингартай болдог.",
      procedureStepsEn: [
        "1. Collect liberated gas using a delivery tube / pipette.",
        "2. Bubble through clear limewater (aqueous calcium hydroxide).",
        "3. Observe limewater turns cloudy / milky white."
      ],
      procedureStepsMn: [
        "1. Ялгарсан хийг хоолойгоор цуглуулна.",
        "2. Тунгалаг шохойн ус дундуур нэвтрүүлнэ.",
        "3. Шохойн ус сүүн цагаан булингартай болохыг ажиглана."
      ],
      keyObservationClips: [
        { time: "0:25", descriptionEn: "Bubbling CO₂ through clear limewater", descriptionMn: "Шохойн ус руу CO₂ нэвтрүүлэх" },
        { time: "0:50", descriptionEn: "Limewater turns milky white (CaCO₃ formed)", descriptionMn: "Шохойн ус цагаан булингартай болох" }
      ],
      cambridgeExamTip: "Never leave gas bubbling too long, as excess CO₂ converts CaCO₃ to soluble Ca(HCO₃)₂ and clears up the solution!",
      cambridgeExamTipMn: "Хэт удаан нэвтрүүлбэл CaCO₃ нь уусдаг Ca(HCO₃)₂ болж буцаад тунгалаг болдог тул эхний цагаан булингарыг түргэн тэмдэглэнэ.",
      testTubeVisual: {
        liquidColor: "rgba(240, 249, 255, 0.6)",
        hasEffervescence: true,
        gasBubbleColor: "#94a3b8",
        gasName: "CO₂ (g) turns limewater milky"
      }
    }
  },
  {
    id: "h2",
    gasEn: "hydrogen, H₂",
    gasMn: "устөрөгч, H₂",
    formula: "H₂",
    testAndResultEn: "'pops' with a lighted splint",
    testAndResultMn: "ассан мод / шүдэнз ойртуулахад 'паах' ('pop') чимээ гарч асна",
    chemicalNote: "Combustible gas forming water vapor: 2H₂ + O₂ → 2H₂O",
    videoTutorial: {
      titleEn: "Testing for Hydrogen Gas (H₂) - Squeaky Pop Test",
      titleMn: "Устөрөгч хийг таних 'Pop' сорил",
      youtubeId: "hK7k3V6m0Qo",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for hydrogen gas squeaky pop",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+hydrogen+gas",
      channel: "Cambridge 9701 Practical Lab",
      duration: "1:45",
      summaryMn: "Устөрөгч хий цугласан хуруу шилний амсарт ассан мод ойртуулахад агаар дахь хүчилтөрөгчтэй агшин зуур урвалд орж өвөрмөц 'поп' чимээтэй асна.",
      procedureStepsEn: [
        "1. Collect hydrogen gas by placing an inverted test-tube over the reaction.",
        "2. Bring a lighted wooden splint near the mouth of the inverted tube.",
        "3. Observe and hear the characteristic 'squeaky pop' explosion."
      ],
      procedureStepsMn: [
        "1. Урвал явагдаж буй хуруу шилний амсарт урвуу харуулсан хуруу шил тавьж H₂ хийг цуглуулна.",
        "2. Амсарт нь ассан модон саваа ойртуулна.",
        "3. 'Паах' ('squeaky pop') чимээ гарч асахыг сонсож ажиглана."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Collecting H₂ gas", descriptionMn: "H₂ хий цуглуулах" },
        { time: "0:45", descriptionEn: "Lighted splint gives distinct 'pop' sound", descriptionMn: "Ассан модоор 'поп' дуу гарган шатах" }
      ],
      cambridgeExamTip: "Use 'lighted splint' for hydrogen (gives 'pop') vs 'glowing splint' for oxygen (relights).",
      cambridgeExamTipMn: "Устөрөгчид 'ассан мод' (lighted splint) ойртуулдаг бол хүчилтөрөгчид 'цогшсон мод' (glowing splint) ойртуулдаг.",
      testTubeVisual: {
        liquidColor: "rgba(224, 242, 254, 0.6)",
        hasEffervescence: true,
        gasBubbleColor: "#38bdf8",
        gasName: "H₂ (g) pops with lighted splint"
      }
    }
  },
  {
    id: "o2",
    gasEn: "oxygen, O₂",
    gasMn: "хүчилтөрөгч, O₂",
    formula: "O₂",
    testAndResultEn: "relights a glowing splint",
    testAndResultMn: "цогшсон / унтарч буй мод ойртуулахад дөл авалцаж дахин дүрэлзэн асна",
    chemicalNote: "Supports combustion vigorously",
    videoTutorial: {
      titleEn: "Testing for Oxygen Gas (O₂) - Relights a Glowing Splint",
      titleMn: "Хүчилтөрөгч хийг таних сорил (Цогшсон модыг дахин асаах)",
      youtubeId: "bO7k3W9m0zU",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for oxygen gas glowing splint relights",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+oxygen+gas",
      channel: "Cambridge 9701 Practical Lab",
      duration: "1:50",
      summaryMn: "Хүчилтөрөгч ялгарч буй хуруу шилний амсарт улайссан цогшсон модон саваа хийхэд дөл авалцан дахин дүрэлзэн асдаг.",
      procedureStepsEn: [
        "1. Ignite a wooden splint and gently blow out the flame to leave a red glowing ember.",
        "2. Insert the glowing splint into the test-tube containing oxygen gas.",
        "3. Observe the glowing ember instantly reignites / relights into a bright flame."
      ],
      procedureStepsMn: [
        "1. Модон савааг асаагаад дөлийг нь үлээж зөвхөн улаан цог үлдээнэ.",
        "2. Хүчилтөрөгчтэй хуруу шилний амсар руу цогшсон модоо оруулна.",
        "3. Цог агшин зуур дөл авалцаж дахин дүрэлзэн асахыг ажиглана."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Preparing glowing splint", descriptionMn: "Цогшсон мод бэлдэх" },
        { time: "0:40", descriptionEn: "Splint reignites with bright flame inside tube", descriptionMn: "Хуруу шилэн дотор дахин дүрэлзэн асах" }
      ],
      cambridgeExamTip: "Always write 'relights a glowing splint'. Never write 'makes flame bigger'.",
      cambridgeExamTipMn: "Шалгалтад 'relights a glowing splint' (цогшсон модыг дахин асаана) гэсэн албан ёсны үгсийг ашиглана.",
      testTubeVisual: {
        liquidColor: "rgba(254, 242, 242, 0.6)",
        hasEffervescence: true,
        gasBubbleColor: "#f87171",
        gasName: "O₂ (g) relights glowing splint"
      }
    }
  }
];

export const ELEMENTS_DATA: ElementTest[] = [
  {
    id: "i2",
    elementEn: "iodine, I₂",
    elementMn: "иод, I₂",
    formula: "I₂",
    testAndResultEn: "gives blue-black colour on addition of starch solution",
    testAndResultMn: "цардуулын уусмал нэмэхэд хөх-хар өнгө үүсгэнэ",
    chemicalNote: "Used in iodometric redox titrations with Na₂S₂O₃",
    videoTutorial: {
      titleEn: "Test for Iodine (I₂) with Starch Indicator",
      titleMn: "Иод болон цардуулын сорил (Хөх хар өнгө)",
      youtubeId: "b8k1Q6zW0aU",
      youtubeSearchQuery: "Cambridge 9701 Chemistry test for iodine starch blue black",
      directUrl: "https://www.youtube.com/results?search_query=Cambridge+9701+Chemistry+test+for+iodine+starch",
      channel: "Cambridge 9701 Practical Lab",
      duration: "2:10",
      summaryMn: "Иодын уусмалд шинээр бэлтгэсэн цардуулын уусмал дусаахад гүн хөх-хар цогц нэгдэл үүсдэг.",
      procedureStepsEn: [
        "1. Take ~1 cm³ of dilute iodine solution (pale yellow/brown).",
        "2. Add a few drops of freshly prepared starch solution.",
        "3. Observe immediate change to deep blue-black color."
      ],
      procedureStepsMn: [
        "1. Хуруу шилэнд шингэрүүлсэн иодын уусмал авна.",
        "2. Хэдэн дусал цардуулын уусмал нэмнэ.",
        "3. Уусмал агшин зуур гүн хөх-хар өнгөтэй болохыг ажиглана."
      ],
      keyObservationClips: [
        { time: "0:20", descriptionEn: "Adding starch to pale iodine solution", descriptionMn: "Цайвар иодын уусмал дээр цардуул дусаах" },
        { time: "0:45", descriptionEn: "Instant deep blue-black complex", descriptionMn: "Агшин зуур гүн хөх-хар цогц өнгө үүсэх" }
      ],
      cambridgeExamTip: "In redox titrations, add starch only when the brown iodine turns pale straw-yellow, near the endpoint.",
      cambridgeExamTipMn: "Титрлэлтийн үед цардуулыг уусмал цайвар шаргал болох үед (төгсгөлийн цэгийн өмнөхөн) нэмдэг.",
      testTubeVisual: {
        liquidColor: "rgba(254, 240, 138, 0.6)",
        precipitateColor: "#1e1b4b",
        precipitateType: "dense",
        excessBehavior: "Deep blue-black complex with starch"
      }
    }
  }
];

export const CONSTANTS_DATA: PhysicalConstant[] = [
  {
    id: "R",
    nameEn: "molar gas constant",
    nameMn: "Хийн молийн универсал тогтмол",
    symbol: "R",
    value: "8.31",
    unit: "J K⁻¹ mol⁻¹",
    notes: "Used in ideal gas equation pV = nRT and Arrhenius equation"
  },
  {
    id: "F",
    nameEn: "Faraday constant",
    nameMn: "Фарадейн тогтмол",
    symbol: "F",
    value: "9.65 × 10⁴",
    unit: "C mol⁻¹",
    notes: "Charge carried by 1 mole of electrons (Q = It = nF)"
  },
  {
    id: "L",
    nameEn: "Avogadro constant",
    nameMn: "Авогадрогийн тогтмол",
    symbol: "L",
    value: "6.022 × 10²³",
    unit: "mol⁻¹",
    notes: "Number of elementary particles in one mole of substance"
  },
  {
    id: "e",
    nameEn: "electronic charge",
    nameMn: "Элементар цэнэг",
    symbol: "e",
    value: "-1.60 × 10⁻¹⁹",
    unit: "C",
    notes: "Charge of a single electron"
  },
  {
    id: "Vm_stp",
    nameEn: "molar volume of gas (s.t.p.)",
    nameMn: "Хийн молийн эзлэхүүн (хэвийн нөхцөлд)",
    symbol: "Vₘ",
    value: "22.4",
    unit: "dm³ mol⁻¹",
    notes: "At s.t.p. (101 kPa and 273 K / 0 °C)"
  },
  {
    id: "Vm_rtp",
    nameEn: "molar volume of gas (room conditions)",
    nameMn: "Хийн молийн эзлэхүүн (өрөөний нөхцөлд)",
    symbol: "Vₘ",
    value: "24.0",
    unit: "dm³ mol⁻¹",
    notes: "At room temperature and pressure (20 °C and 101 kPa)"
  },
  {
    id: "Kw",
    nameEn: "ionic product of water",
    nameMn: "Усны ионы үржвэр",
    symbol: "K_w",
    value: "1.00 × 10⁻¹⁴",
    unit: "mol² dm⁻⁶",
    notes: "At 298 K (25 °C). Kw = [H⁺][OH⁻]"
  },
  {
    id: "c_water",
    nameEn: "specific heat capacity of water",
    nameMn: "Усны хувийн дулаан багтаамж",
    symbol: "c",
    value: "4.18",
    unit: "kJ kg⁻¹ K⁻¹ (4.18 J g⁻¹ K⁻¹)",
    notes: "Used in calorimetry calculations q = mcΔT"
  }
];
