import { CalculationTopic } from "../types";

export const CALCULATION_TOPICS: CalculationTopic[] = [
  {
    id: "mole-stoichiometry",
    titleEn: "Mole Concept, Formulae & Stoichiometry",
    titleMn: "Молийн ойлголт, Томьёо ба Стехиометр",
    category: "Physical",
    level: "AS",
    chapters: [1, 2],
    icon: "Scale",
    summaryEn: "Converting between mass, moles, particles, and gas volumes. Finding empirical/molecular formulas and limiting reactants.",
    summaryMn: "Масс, моль, бөөмийн тоо ба хийн эзлэхүүний хоорондох шилжилт. Эмпирик ба молекул томьёо олох, урвалын хязгаарлагч бодис тооцоолох.",
    formulas: [
      {
        nameEn: "Moles from Mass",
        nameMn: "Массаас моль олох",
        formula: "n = m / M_r",
        variables: [
          { symbol: "n", meaning: "Amount of substance", unit: "mol" },
          { symbol: "m", meaning: "Mass of sample", unit: "g" },
          { symbol: "M_r", meaning: "Molar mass / Relative formula mass", unit: "g/mol" },
        ],
      },
      {
        nameEn: "Gas Volume at r.t.p.",
        nameMn: "Өрөөний нөхцөл дэх хийн эзлэхүүн",
        formula: "V = n × 24.0 dm³  (or  n × 24,000 cm³)",
        variables: [
          { symbol: "V", meaning: "Gas volume at r.t.p. (20°C, 1 atm)", unit: "dm³ or cm³" },
          { symbol: "n", meaning: "Moles of gas", unit: "mol" },
        ],
      },
      {
        nameEn: "Percentage by Mass & Yield",
        nameMn: "Массын хувь ба Урвалын гарц",
        formula: "% Yield = (Actual Mass / Theoretical Mass) × 100%",
        variables: [
          { symbol: "Actual", meaning: "Mass of pure product obtained experimentally", unit: "g" },
          { symbol: "Theoretical", meaning: "Max calculated product mass from stoichiometry", unit: "g" },
        ],
      },
    ],
  },
  {
    id: "ideal-gas",
    titleEn: "Ideal Gas Equation (pV = nRT)",
    titleMn: "Хийн төлөвийн тэгшитгэл (pV = nRT)",
    category: "Physical",
    level: "AS",
    chapters: [4],
    icon: "Wind",
    summaryEn: "Calculating pressure, volume, temperature, and molar masses of volatile liquids using the ideal gas equation.",
    summaryMn: "Идеал хийн тэгшитгэл ашиглан даралт, эзлэхүүн, температур ба дэгдэмхий шингэний молийн массыг тооцоолох.",
    formulas: [
      {
        nameEn: "Ideal Gas Law",
        nameMn: "Идеал хийн хууль",
        formula: "p × V = n × R × T = (m / M_r) × R × T",
        variables: [
          { symbol: "p", meaning: "Pressure (must be Pa, 1 kPa = 1000 Pa)", unit: "Pa (N/m²)" },
          { symbol: "V", meaning: "Volume (must be m³, 1 m³ = 1000 dm³ = 10⁶ cm³)", unit: "m³" },
          { symbol: "n", meaning: "Moles of gas", unit: "mol" },
          { symbol: "R", meaning: "Molar gas constant = 8.31", unit: "J K⁻¹ mol⁻¹" },
          { symbol: "T", meaning: "Temperature (must be Kelvin, T = °C + 273.15)", unit: "K" },
        ],
        notes: "Crucial unit conversions: cm³ × 10⁻⁶ = m³, dm³ × 10⁻³ = m³, kPa × 10³ = Pa.",
      },
      {
        nameEn: "Molar Mass from Gas Data",
        nameMn: "Хийн өгөгдлөөс молийн масс олох",
        formula: "M_r = (m × R × T) / (p × V)",
        variables: [
          { symbol: "M_r", meaning: "Relative molecular mass", unit: "g/mol" },
          { symbol: "m", meaning: "Mass of volatile vapor", unit: "g" },
        ],
      },
    ],
  },
  {
    id: "titration-solutions",
    titleEn: "Volumetric Analysis & Titrations",
    titleMn: "Эзлэхүүний анализ ба Титрийн тооцоо",
    category: "Physical",
    level: "AS",
    chapters: [1, 7],
    icon: "Beaker",
    summaryEn: "Solution concentration, acid-base & redox titrations, dilutions, and back-titrations for purity determination.",
    summaryMn: "Уусмалын концентраци, хүчил-суурийн ба исэлдэн-ангижрах титр, шингэлт, буцах титр (back-titration) ба цэвэршил тооцох.",
    formulas: [
      {
        nameEn: "Concentration & Amount",
        nameMn: "Концентраци ба моль",
        formula: "n = C × V  (or  n = (C × V_cm³) / 1000)",
        variables: [
          { symbol: "n", meaning: "Moles of solute", unit: "mol" },
          { symbol: "C", meaning: "Concentration", unit: "mol/dm³ (M)" },
          { symbol: "V", meaning: "Volume of solution", unit: "dm³ (litres)" },
        ],
      },
      {
        nameEn: "Mass Concentration",
        nameMn: "Массын концентраци",
        formula: "ρ (g/dm³) = C (mol/dm³) × M_r",
        variables: [
          { symbol: "ρ", meaning: "Mass concentration", unit: "g/dm³" },
        ],
      },
      {
        nameEn: "Back-Titration Principle",
        nameMn: "Буцах титрийн зарчим",
        formula: "Moles reacted = Moles initial (excess) - Moles remaining (titrated)",
        variables: [
          { symbol: "n(reacted)", meaning: "Amount consumed by analyte", unit: "mol" },
        ],
      },
    ],
  },
  {
    id: "energetics-hess",
    titleEn: "Chemical Energetics & Hess's Law",
    titleMn: "Химийн энергетик ба Гессийн хууль",
    category: "Physical",
    level: "ALL",
    chapters: [5, 23],
    icon: "Flame",
    summaryEn: "Calorimetry heat change (q = mcΔT), Hess cycles from formation/combustion, Bond energies, Born-Haber cycles, and Gibbs free energy.",
    summaryMn: "Калориметрийн дулаан (q = mcΔT), Гессийн мөчлөг, Холбооны энерги, Борн-Хабер мөчлөг ба Гиббсийн чөлөөт энерги (ΔG = ΔH - TΔS).",
    formulas: [
      {
        nameEn: "Calorimetry Heat Equation",
        nameMn: "Калориметрийн дулааны тэгшитгэл",
        formula: "q = m × c × ΔT",
        variables: [
          { symbol: "q", meaning: "Heat energy exchanged", unit: "J (convert to kJ by ÷ 1000)" },
          { symbol: "m", meaning: "Mass of solution being heated (assume 1.0 g/cm³)", unit: "g" },
          { symbol: "c", meaning: "Specific heat capacity of water = 4.18", unit: "J g⁻¹ K⁻¹" },
          { symbol: "ΔT", meaning: "Temperature change (T_final - T_initial)", unit: "K or °C" },
        ],
      },
      {
        nameEn: "Molar Enthalpy Change",
        nameMn: "Молийн энтальпийн өөрчлөлт",
        formula: "ΔH = - (q in kJ) / n(limiting)",
        variables: [
          { symbol: "ΔH", meaning: "Standard enthalpy change", unit: "kJ/mol" },
          { symbol: "n", meaning: "Moles of limiting reactant reacted", unit: "mol" },
        ],
      },
      {
        nameEn: "Hess's Law (Formation Enthalpies)",
        nameMn: "Үүсэхийн энтальпиар Гессийн хууль",
        formula: "ΔH_rxn = Σ ΔH_f(products) - Σ ΔH_f(reactants)",
        variables: [
          { symbol: "ΔH_f", meaning: "Standard enthalpy of formation", unit: "kJ/mol" },
        ],
      },
      {
        nameEn: "Gibbs Free Energy & Feasibility",
        nameMn: "Гиббсийн чөлөөт энерги",
        formula: "ΔG = ΔH - T × (ΔS / 1000)",
        variables: [
          { symbol: "ΔG", meaning: "Gibbs free energy change (feasible if ΔG ≤ 0)", unit: "kJ/mol" },
          { symbol: "ΔH", meaning: "Enthalpy change", unit: "kJ/mol" },
          { symbol: "T", meaning: "Temperature in Kelvin", unit: "K" },
          { symbol: "ΔS", meaning: "Entropy change (divide by 1000 to convert J to kJ)", unit: "J K⁻¹ mol⁻¹" },
        ],
      },
    ],
  },
  {
    id: "equilibria-kc-kp",
    titleEn: "Equilibria (Kc & Kp)",
    titleMn: "Химийн тэнцвэр (Kc & Kp)",
    category: "Physical",
    level: "ALL",
    chapters: [7, 24],
    icon: "Repeat",
    summaryEn: "Calculating equilibrium concentrations using ICE tables, Kc expressions with units, and Kp with mole fractions and partial pressures.",
    summaryMn: "ICE хүснэгтээр тэнцвэрийн концентраци тооцох, Kc нэгжтэй олох, Kp молийн хувь ба хэсгийн даралтаар тооцоолох.",
    formulas: [
      {
        nameEn: "Concentration Equilibrium Constant",
        nameMn: "Концентрацийн тэнцвэрийн тогтмол",
        formula: "K_c = [C]^c [D]^d / ([A]^a [B]^b)",
        variables: [
          { symbol: "[X]", meaning: "Equilibrium concentration of substance X", unit: "mol/dm³" },
        ],
      },
      {
        nameEn: "Partial Pressure & Kp",
        nameMn: "Хэсгийн даралт ба Kp",
        formula: "p_A = (n_A / n_total) × P_total;  K_p = (p_C)^c (p_D)^d / ((p_A)^a (p_B)^b)",
        variables: [
          { symbol: "p_A", meaning: "Partial pressure of gas A", unit: "kPa or Pa or atm" },
          { symbol: "x_A", meaning: "Mole fraction of gas A (n_A / n_total)", unit: "dimensionless" },
          { symbol: "P_total", meaning: "Total pressure in equilibrium vessel", unit: "kPa" },
        ],
      },
    ],
  },
  {
    id: "acids-buffers-ksp",
    titleEn: "Acids, Bases, Buffers & Solubility Product (Ksp)",
    titleMn: "Хүчил, Суурь, Буфер ба Уусах чанарын үржвэр (Ksp)",
    category: "Physical",
    level: "ALL",
    chapters: [7, 25],
    icon: "Droplets",
    summaryEn: "pH of strong and weak acids, Ka & pKa, buffer pH and buffer capacity, solubility product Ksp and common ion precipitation.",
    summaryMn: "Хүчтэй ба сул хүчлийн pH, Ka & pKa, буфер уусмалын pH ба багтаамж, уусах чанарын үржвэр Ksp ба ижил ионы нөлөө.",
    formulas: [
      {
        nameEn: "pH Definition",
        nameMn: "pH-ийн тодорхойлолт",
        formula: "pH = -log₁₀[H⁺]  and  [H⁺] = 10^(-pH)",
        variables: [
          { symbol: "[H⁺]", meaning: "Hydrogen / hydronium ion concentration", unit: "mol/dm³" },
        ],
      },
      {
        nameEn: "Weak Acid Dissociation Constant",
        nameMn: "Сул хүчлийн диссоциацын тогтмол",
        formula: "K_a = [H⁺]² / [HA]  =>  [H⁺] = √(K_a × [HA])",
        variables: [
          { symbol: "K_a", meaning: "Acid dissociation constant", unit: "mol/dm³" },
          { symbol: "pK_a", meaning: "pK_a = -log₁₀(K_a)", unit: "dimensionless" },
        ],
      },
      {
        nameEn: "Buffer Solution pH (Henderson-Hasselbalch)",
        nameMn: "Буфер уусмалын pH",
        formula: "pH = pK_a + log₁₀([Salt / Base] / [Acid])",
        variables: [
          { symbol: "[Salt]", meaning: "Concentration of conjugate base A⁻", unit: "mol/dm³" },
          { symbol: "[Acid]", meaning: "Concentration of undissociated acid HA", unit: "mol/dm³" },
        ],
      },
      {
        nameEn: "Solubility Product (Ksp)",
        nameMn: "Уусах чанарын үржвэр (Ksp)",
        formula: "For M_xX_y(s) ⇌ x M^(y+) + y X^(x-):  K_sp = [M^(y+)]^x [X^(x-)]^y",
        variables: [
          { symbol: "s", meaning: "Molar solubility of salt", unit: "mol/dm³" },
          { symbol: "K_sp", meaning: "Solubility product at 298 K", unit: "variable units" },
        ],
      },
    ],
  },
  {
    id: "electrochemistry-faraday",
    titleEn: "Electrochemistry & Faraday's Laws",
    titleMn: "Электрохими ба Фарадейн хууль",
    category: "Physical",
    level: "ALL",
    chapters: [6, 26],
    icon: "Zap",
    summaryEn: "Standard cell potential E°cell, feasibility, Faraday equation Q = It, mass deposited during electrolysis, and Nernst equation.",
    summaryMn: "Стандарт эсийн потенциал E°cell, урвал явагдах нөхцөл, Фарадейн Q = It, электролизоор ялгарах масс ба Нернстийн тэгшитгэл.",
    formulas: [
      {
        nameEn: "Standard Cell Potential",
        nameMn: "Стандарт эсийн потенциал",
        formula: "E°_cell = E°_reduction(cathode) - E°_oxidation(anode)",
        variables: [
          { symbol: "E°_cell", meaning: "Standard EMF of electrochemical cell (> 0 is spontaneous)", unit: "V" },
        ],
      },
      {
        nameEn: "Faraday's Charge & Electrolysis",
        nameMn: "Фарадейн цахилгаан ба электролиз",
        formula: "Q = I × t;  n(e⁻) = Q / F  (F = 96,500 C/mol)",
        variables: [
          { symbol: "Q", meaning: "Electric charge", unit: "C (coulombs)" },
          { symbol: "I", meaning: "Electric current", unit: "A (amperes)" },
          { symbol: "t", meaning: "Time in seconds (minutes × 60)", unit: "s" },
          { symbol: "F", meaning: "Faraday constant = 96,500", unit: "C/mol of e⁻" },
        ],
      },
      {
        nameEn: "Mass Deposited at Electrode",
        nameMn: "Электрод дээр ялгарах масс",
        formula: "m = (M_r × I × t) / (z × F)",
        variables: [
          { symbol: "m", meaning: "Mass of element deposited", unit: "g" },
          { symbol: "z", meaning: "Charge / oxidation number change per ion", unit: "e.g. 2 for Cu²⁺" },
        ],
      },
    ],
  },
  {
    id: "kinetics-rates",
    titleEn: "Reaction Kinetics & Rate Equations",
    titleMn: "Химийн урвалын хурд ба эрэмбэ",
    category: "Physical",
    level: "ALL",
    chapters: [8, 27],
    icon: "Gauge",
    summaryEn: "Initial rates method, deduction of rate equations, rate constant k with units, half-life (t1/2), and Arrhenius activation energy.",
    summaryMn: "Эхний хурдны арга, хурдны тэгшитгэл, k тогтмол ба нэгж, хагас задралын хугацаа (t1/2) ба Аррениусын идэвхжлийн энерги.",
    formulas: [
      {
        nameEn: "Rate Equation",
        nameMn: "Урвалын хурдны тэгшитгэл",
        formula: "Rate = k × [A]^m × [B]^n",
        variables: [
          { symbol: "Rate", meaning: "Reaction rate", unit: "mol dm⁻³ s⁻¹" },
          { symbol: "k", meaning: "Rate constant (units depend on overall order m+n)", unit: "variable" },
          { symbol: "m, n", meaning: "Orders with respect to reactants A and B", unit: "0, 1, 2" },
        ],
      },
      {
        nameEn: "First-Order Half-Life",
        nameMn: "Нэгдүгээр эрэмбийн хагас задралын хугацаа",
        formula: "t₁/₂ = ln(2) / k = 0.693 / k",
        variables: [
          { symbol: "t₁/₂", meaning: "Half-life (constant for 1st order reactions)", unit: "s or min" },
        ],
      },
      {
        nameEn: "Arrhenius Equation",
        nameMn: "Аррениусын тэгшитгэл",
        formula: "ln(k) = - (E_a / R) × (1 / T) + ln(A)",
        variables: [
          { symbol: "E_a", meaning: "Activation energy", unit: "J/mol (or kJ/mol × 1000)" },
          { symbol: "Gradient", meaning: "Slope of ln(k) vs 1/T plot = -E_a / R", unit: "K" },
          { symbol: "R", meaning: "Gas constant = 8.31", unit: "J K⁻¹ mol⁻¹" },
        ],
      },
    ],
  },
  {
    id: "uncertainty-practical",
    titleEn: "Experimental Uncertainty & Paper 5 Errors",
    titleMn: "Туршилтын алдаа ба Папер 5 тооцоолол",
    category: "Practical",
    level: "ALL",
    chapters: [31, 32],
    icon: "Target",
    summaryEn: "Percentage uncertainty of laboratory apparatus, error propagation in multi-step procedures, anomalous results, and graph analysis.",
    summaryMn: "Лабораторийн багаж хэрэгслийн хувийн алдаа, нийлмэл алдааны нийлбэр, гаж утга илрүүлэх ба график шинжилгээ.",
    formulas: [
      {
        nameEn: "Apparatus Percentage Uncertainty",
        nameMn: "Багажны хувийн алдаа",
        formula: "% Uncertainty = (Total Instrument Error / Measured Value) × 100%",
        variables: [
          { symbol: "Burette error", meaning: "±0.05 cm³ per reading (2 readings = ±0.10 cm³ total)", unit: "cm³" },
          { symbol: "Pipette (25 cm³)", meaning: "±0.06 cm³", unit: "cm³" },
          { symbol: "Balance (2 d.p.)", meaning: "±0.01 g per reading (2 readings = ±0.02 g total)", unit: "g" },
        ],
      },
      {
        nameEn: "Combining Uncertainties",
        nameMn: "Нийлбэр алдаа тооцох",
        formula: "Total % Error = % Error(A) + % Error(B) + % Error(C)",
        variables: [
          { symbol: "Multiplication/Division", meaning: "Add individual % uncertainties together", unit: "%" },
        ],
      },
    ],
  },
];
