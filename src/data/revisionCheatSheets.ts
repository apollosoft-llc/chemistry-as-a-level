export interface FormulaCheatItem {
  id: string;
  topic: string;
  level: "AS" | "A2";
  nameEn: string;
  nameMn: string;
  formula: string;
  variables: { symbol: string; meaning: string; unit: string }[];
  keyNotes: string;
  examinerTip?: string;
}

export interface ReagentCheatItem {
  id: string;
  functionalGroup: string;
  targetGroup: string;
  reactionType: string;
  reagentsConditions: string;
  equationExample: string;
  observationNote: string;
  examinerTrap?: string;
}

export interface QACheatItem {
  id: string;
  ionName: string;
  symbol: string;
  type: "cation" | "anion" | "gas";
  testWithReagent: string;
  observation: string;
  confirmatoryExplanation: string;
}

export const PHYSICAL_FORMULA_CHEAT_SHEET: FormulaCheatItem[] = [
  {
    id: "f-1",
    topic: "Moles & Stoichiometry",
    level: "AS",
    nameEn: "Mole & Gas Volume at RTP",
    nameMn: "Моль ба хийн эзлэхүүн (RTP)",
    formula: "n = m / M_r  |  n = c × V  |  V = n × 24.0 dm³",
    variables: [
      { symbol: "n", meaning: "Amount of substance", unit: "mol" },
      { symbol: "m", meaning: "Mass of substance", unit: "g" },
      { symbol: "M_r", meaning: "Relative molecular mass", unit: "g/mol" },
      { symbol: "c", meaning: "Concentration", unit: "mol/dm³" },
      { symbol: "V", meaning: "Volume of solution or gas", unit: "dm³" },
    ],
    keyNotes: "At RTP (298 K, 101 kPa), 1 mole of any ideal gas occupies 24.0 dm³ (24,000 cm³). To convert cm³ to dm³, divide by 1000.",
    examinerTip: "Always convert volume from cm³ to dm³ before multiplying by concentration (c × V/1000)."
  },
  {
    id: "f-2",
    topic: "States of Matter",
    level: "AS",
    nameEn: "Ideal Gas Equation",
    nameMn: "Идеаль хийн тэгшитгэл",
    formula: "P × V = n × R × T = (m / M_r) × R × T",
    variables: [
      { symbol: "P", meaning: "Pressure", unit: "Pa (1 kPa = 1000 Pa)" },
      { symbol: "V", meaning: "Volume of gas", unit: "m³ (1 m³ = 1000 dm³ = 10⁶ cm³)" },
      { symbol: "n", meaning: "Number of moles", unit: "mol" },
      { symbol: "R", meaning: "Molar gas constant", unit: "8.31 J K⁻¹ mol⁻¹" },
      { symbol: "T", meaning: "Thermodynamic temperature", unit: "K (°C + 273.15)" },
    ],
    keyNotes: "Used to determine M_r of volatile liquids. Ensure SI units: P in Pa, V in m³, T in K.",
    examinerTip: "Most frequent error is using cm³ instead of m³. To convert cm³ to m³, multiply by 10⁻⁶."
  },
  {
    id: "f-3",
    topic: "Chemical Energetics",
    level: "AS",
    nameEn: "Calorimetry Heat Energy & Enthalpy",
    nameMn: "Калориметрийн дулаан ба энтальпи",
    formula: "q = m × c × ΔT  |  ΔH = -q / n",
    variables: [
      { symbol: "q", meaning: "Heat energy absorbed or released", unit: "J" },
      { symbol: "m", meaning: "Mass of solution heated (usually water)", unit: "g (density ~ 1.0 g/cm³)" },
      { symbol: "c", meaning: "Specific heat capacity of water", unit: "4.18 J g⁻¹ K⁻¹" },
      { symbol: "ΔT", meaning: "Temperature change (T_final - T_initial)", unit: "K or °C" },
      { symbol: "ΔH", meaning: "Enthalpy change of reaction", unit: "kJ/mol" },
    ],
    keyNotes: "If temperature rises (exothermic), q is positive and ΔH is negative (-). If temperature drops (endothermic), ΔH is positive (+). Divide q (in J) by 1000 to get kJ.",
    examinerTip: "Never forget the sign (+ or -) and 3 significant figures in Cambridge exam answers."
  },
  {
    id: "f-4",
    topic: "Chemical Energetics",
    level: "AS",
    nameEn: "Hess's Law & Bond Energies",
    nameMn: "Гессийн хууль ба холбооны энерги",
    formula: "ΔH_r = ΣΔH_f(products) - ΣΔH_f(reactants)  |  ΔH_r = Σ(Bonds Broken) - Σ(Bonds Formed)",
    variables: [
      { symbol: "ΔH_f", meaning: "Enthalpy change of formation", unit: "kJ/mol" },
      { symbol: "ΔH_c", meaning: "Enthalpy change of combustion", unit: "kJ/mol" },
    ],
    keyNotes: "ΔH_f of any element in its standard state is 0. Using combustion: ΔH_r = ΣΔH_c(reactants) - ΣΔH_c(products).",
    examinerTip: "Bond breaking is ALWAYS endothermic (+), bond making is ALWAYS exothermic (-)."
  },
  {
    id: "f-5",
    topic: "Equilibria",
    level: "AS",
    nameEn: "Equilibrium Constants (Kc & Kp)",
    nameMn: "Тэнцвэрийн тогтмол (Kc ба Kp)",
    formula: "K_c = [C]^c [D]^d / ([A]^a [B]^b)  |  K_p = (pC)^c (pD)^d / ((pA)^a (pB)^b)",
    variables: [
      { symbol: "[X]", meaning: "Equilibrium concentration of X", unit: "mol dm⁻³" },
      { symbol: "pX", meaning: "Partial pressure = Mole fraction × Total Pressure (P_total)", unit: "Pa or kPa" },
      { symbol: "x_A", meaning: "Mole fraction of A = n_A / n_total", unit: "dimensionless" },
    ],
    keyNotes: "ONLY temperature changes the numerical value of Kc and Kp. Catalysts, concentration, and pressure changes shift position but DO NOT change Kc/Kp.",
    examinerTip: "Always show explicit working for the units of Kc/Kp (e.g. mol⁻¹ dm³ or no units)."
  },
  {
    id: "f-6",
    topic: "Reaction Kinetics",
    level: "A2",
    nameEn: "Rate Equation & Arrhenius Equation",
    nameMn: "Хурдны тэгшитгэл & Аррениусын тэгшитгэл",
    formula: "Rate = k [A]^m [B]^n  |  t_{1/2} = 0.693 / k  |  ln(k) = -E_a/(R T) + ln(A)",
    variables: [
      { symbol: "k", meaning: "Rate constant", unit: "depends on overall reaction order" },
      { symbol: "m, n", meaning: "Order of reaction with respect to A and B", unit: "0, 1, or 2" },
      { symbol: "t_{1/2}", meaning: "Half-life for first-order reaction", unit: "s or min (constant for 1st order)" },
      { symbol: "E_a", meaning: "Activation energy", unit: "J/mol (or kJ/mol × 1000)" },
    ],
    keyNotes: "Plotting ln(k) against 1/T yields a straight line with Gradient = -E_a / R and y-intercept = ln(A).",
    examinerTip: "Ensure E_a is converted to J/mol when dividing by R (8.31 J K⁻¹ mol⁻¹)."
  },
  {
    id: "f-7",
    topic: "Entropy & Gibbs Free Energy",
    level: "A2",
    nameEn: "Gibbs Free Energy & Feasibility",
    nameMn: "Гиббсийн чөлөөт энерги ба явагдах нөхцөл",
    formula: "ΔG° = ΔH° - T × ΔS°  |  ΔS°_total = ΔS°_system + ΔS°_surroundings",
    variables: [
      { symbol: "ΔG°", meaning: "Standard Gibbs free energy change", unit: "kJ mol⁻¹ (Feasible if ΔG° ≤ 0)" },
      { symbol: "ΔH°", meaning: "Standard enthalpy change", unit: "kJ mol⁻¹" },
      { symbol: "T", meaning: "Temperature", unit: "K" },
      { symbol: "ΔS°", meaning: "Standard entropy change", unit: "J K⁻¹ mol⁻¹ (MUST divide by 1000 to get kJ K⁻¹ mol⁻¹)" },
    ],
    keyNotes: "Reaction is feasible at all temperatures if ΔH < 0 and ΔS > 0. If ΔH > 0 and ΔS > 0, feasible only at high T (T > ΔH / ΔS).",
    examinerTip: "The #1 student mistake is forgetting to convert ΔS from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ by dividing by 1000."
  },
  {
    id: "f-8",
    topic: "Electrochemistry",
    level: "A2",
    nameEn: "Cell Potential & Nernst Equation",
    nameMn: "Элементийн хүчдэл ба Нернстийн тэгшитгэл",
    formula: "E°_cell = E°_reduction(cathode) - E°_oxidation(anode)  |  E = E° + (0.059 / z) log[oxidised form]",
    variables: [
      { symbol: "E°_cell", meaning: "Standard cell potential", unit: "V (Feasible if E°_cell > 0)" },
      { symbol: "z", meaning: "Number of electrons transferred in half-equation", unit: "integer" },
      { symbol: "Q = I × t", meaning: "Charge = Current (A) × Time (s)", unit: "C (Coulombs)" },
      { symbol: "n = Q / (z × F)", meaning: "Moles of substance deposited/liberated", unit: "F = 96500 C/mol" },
    ],
    keyNotes: "More positive E° undergoes reduction at the positive cathode. More negative E° undergoes oxidation at the negative anode.",
    examinerTip: "Remember: 1 Faraday (F) = 96,500 C mol⁻¹, representing the charge carried by 1 mole of electrons."
  },
  {
    id: "f-9",
    topic: "Acids, Bases & Buffers",
    level: "A2",
    nameEn: "Acid Dissociation & Buffer Solutions",
    nameMn: "Хүчлийн диссоциаци ба буфер уусмал",
    formula: "pH = -log₁₀[H⁺]  |  K_w = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴  |  pH = pK_a + log₁₀([A⁻] / [HA])",
    variables: [
      { symbol: "K_a", meaning: "Acid dissociation constant = [H⁺][A⁻] / [HA]", unit: "mol dm⁻³" },
      { symbol: "pK_a", meaning: "-log₁₀(K_a)", unit: "dimensionless" },
      { symbol: "K_{sp}", meaning: "Solubility product = [M⁺]^m [X⁻]^n", unit: "depends on stoichiometry" },
    ],
    keyNotes: "For a weak monoprotic acid: [H⁺] = √(K_a × c). For an acidic buffer: [H⁺] = K_a × [acid] / [salt].",
    examinerTip: "When water is added to a buffer, its pH does not change because the ratio [A⁻]/[HA] remains constant."
  }
];

export const ORGANIC_REAGENT_CHEAT_SHEET: ReagentCheatItem[] = [
  {
    id: "r-1",
    functionalGroup: "Alkane → Halogenoalkane",
    targetGroup: "Halogenoalkane",
    reactionType: "Free-Radical Substitution",
    reagentsConditions: "Cl₂ or Br₂, UV light (or heat)",
    equationExample: "CH₄ + Cl₂ --(UV)--> CH₃Cl + HCl",
    observationNote: "Yellow-green chlorine or orange bromine slowly decolourises; misty fumes of HCl/HBr produced.",
    examinerTrap: "UV light is required for homolytic fission of the halogen-halogen bond to create free radicals."
  },
  {
    id: "r-2",
    functionalGroup: "Alkene → Halogenoalkane",
    targetGroup: "Halogenoalkane",
    reactionType: "Electrophilic Addition",
    reagentsConditions: "Hydrogen halide (HX, e.g., HBr gas) at room temperature",
    equationExample: "CH₃CH=CH₂ + HBr --> CH₃CH(Br)CH₃ (major)",
    observationNote: "Markovnikov's rule applies: H adds to the carbon with more hydrogens, creating the more stable secondary/tertiary carbocation intermediate.",
    examinerTrap: "Draw curly arrows starting strictly from the center of the π double bond to the electrophilic H atom."
  },
  {
    id: "r-3",
    functionalGroup: "Alkene → Diol",
    targetGroup: "Diol",
    reactionType: "Mild Oxidation",
    reagentsConditions: "Cold, dilute, acidified (or alkaline) KMnO₄",
    equationExample: "CH₂=CH₂ + [O] + H₂O --> CH₂(OH)CH₂(OH)",
    observationNote: "Purple KMnO₄ decolourises rapidly, brown MnO₂ precipitate formed if neutral/alkaline.",
    examinerTrap: "Hot concentrated KMnO₄ causes oxidative cleavage to CO₂, carboxylic acids, or ketones!"
  },
  {
    id: "r-4",
    functionalGroup: "Halogenoalkane → Alcohol",
    targetGroup: "Alcohol",
    reactionType: "Nucleophilic Substitution",
    reagentsConditions: "Aqueous NaOH (or KOH), heat under reflux",
    equationExample: "CH₃CH₂Br + OH⁻(aq) --> CH₃CH₂OH + Br⁻",
    observationNote: "Primary RX follows SN2 (one-step, backside attack, inversion); Tertiary RX follows SN1 (two-step via planar carbocation intermediate).",
    examinerTrap: "Do not confuse aqueous NaOH (substitution -> alcohol) with ethanolic NaOH (elimination -> alkene)!"
  },
  {
    id: "r-5",
    functionalGroup: "Halogenoalkane → Nitrile",
    targetGroup: "Nitrile (steps up carbon chain)",
    reactionType: "Nucleophilic Substitution",
    reagentsConditions: "Ethanolic KCN (or NaCN), heat under reflux",
    equationExample: "CH₃CH₂Br + CN⁻(ethanolic) --> CH₃CH₂CN + Br⁻",
    observationNote: "Crucial synthetic step to lengthen the carbon chain by one carbon atom. Nitrile can be hydrolysed to carboxylic acid or reduced to primary amine.",
    examinerTrap: "Solvent MUST be ethanol/water mixture, not pure water."
  },
  {
    id: "r-6",
    functionalGroup: "Primary Alcohol → Aldehyde / Carboxylic Acid",
    targetGroup: "Aldehyde or Carboxylic Acid",
    reactionType: "Oxidation",
    reagentsConditions: "Acidified K₂Cr₂O₇ (H⁺/Cr₂O₇²⁻), distill off immediately for aldehyde; heat under reflux for carboxylic acid",
    equationExample: "CH₃CH₂OH + [O] --> CH₃CHO + H₂O  |  CH₃CHO + [O] --> CH₃COOH",
    observationNote: "Orange solution (Cr₂O₇²⁻) turns green (Cr³⁺).",
    examinerTrap: "To obtain the aldehyde, distill off immediately because aldehyde has a lower boiling point than alcohol."
  },
  {
    id: "r-7",
    functionalGroup: "Carbonyl → Hydroxynitrile",
    targetGroup: "Hydroxynitrile (Cyanohydrin)",
    reactionType: "Nucleophilic Addition",
    reagentsConditions: "HCN in the presence of NaCN/KCN catalyst (or KCN + dilute H₂SO₄), pH 7-8",
    equationExample: "CH₃CHO + HCN --(NaCN)--> CH₃CH(OH)CN",
    observationNote: "CN⁻ acts as nucleophile attacking the electrophilic δ+ carbonyl carbon. Generates racemic mixture if starting from asymmetric aldehyde/ketone.",
    examinerTrap: "HCN alone is too weak an acid (few CN⁻ ions). Trace alkali or NaCN is required as catalyst."
  },
  {
    id: "r-8",
    functionalGroup: "Benzene → Nitrobenzene (A2)",
    targetGroup: "Nitroarene",
    reactionType: "Electrophilic Substitution (Nitration)",
    reagentsConditions: "Concentrated HNO₃ + Concentrated H₂SO₄, 50°C - 55°C",
    equationExample: "C₆H₆ + HNO₃ --(H₂SO₄)--> C₆H₅NO₂ + H₂O",
    observationNote: "Pale yellow oily liquid with almond odour. Electrophile is the nitronium ion (NO₂⁺) generated by H₂SO₄ + HNO₃ ⇌ HSO₄⁻ + H₂NO₃⁺ → H₂O + NO₂⁺.",
    examinerTrap: "Keep temperature strictly ≤ 55°C to avoid multiple substitution (1,3-dinitrobenzene)."
  },
  {
    id: "r-9",
    functionalGroup: "Benzene → Alkylbenzene / Acylbenzene (A2)",
    targetGroup: "Friedel-Crafts Alkylation / Acylation",
    reactionType: "Electrophilic Aromatic Substitution",
    reagentsConditions: "R–Cl or RCOCl, anhydrous AlCl₃ catalyst, warm under reflux",
    equationExample: "C₆H₆ + CH₃Cl --(AlCl₃)--> C₆H₅CH₃ + HCl",
    observationNote: "AlCl₃ acts as a Lewis acid catalyst generating the electrophile R⁺ or RCO⁺.",
    examinerTrap: "Reagents must be anhydrous; AlCl₃ hydrolyses violently in water."
  }
];

export const QA_CHEAT_SHEET: QACheatItem[] = [
  {
    id: "qa-1",
    ionName: "Copper(II) Ion",
    symbol: "Cu²⁺(aq)",
    type: "cation",
    testWithReagent: "Aqueous NaOH / Aqueous NH₃",
    observation: "Pale blue precipitate of Cu(OH)₂ with NaOH (insoluble in excess). With excess NH₃, dissolves to give a deep royal blue solution of [Cu(NH₃)₄(H₂O)₂]²⁺.",
    confirmatoryExplanation: "Ligand exchange reaction converts pale blue [Cu(H₂O)₆]²⁺ to royal blue tetraamminediaquacopper(II) complex."
  },
  {
    id: "qa-2",
    ionName: "Iron(II) vs Iron(III) Ions",
    symbol: "Fe²⁺ / Fe³⁺",
    type: "cation",
    testWithReagent: "Aqueous NaOH / Aqueous NH₃",
    observation: "Fe²⁺: Dirty green precipitate of Fe(OH)₂, turns brown on surface on standing in air (oxidised to Fe(OH)₃). Fe³⁺: Red-brown rust precipitate of Fe(OH)₃.",
    confirmatoryExplanation: "Fe²⁺ is readily oxidised by atmospheric oxygen to Fe³⁺ in alkaline conditions."
  },
  {
    id: "qa-3",
    ionName: "Halide Ions (Cl⁻, Br⁻, I⁻)",
    symbol: "Cl⁻ / Br⁻ / I⁻",
    type: "anion",
    testWithReagent: "Dilute HNO₃ followed by Aqueous AgNO₃, then dilute/conc NH₃",
    observation: "Cl⁻: White ppt (AgCl), soluble in dilute NH₃. Br⁻: Cream ppt (AgBr), insoluble in dilute NH₃, soluble in concentrated NH₃. I⁻: Yellow ppt (AgI), insoluble in both dilute and concentrated NH₃.",
    confirmatoryExplanation: "Acidify with HNO₃ first to remove any carbonate (CO₃²⁻) or sulfite (SO₃²⁻) impurities which also precipitate with Ag⁺."
  },
  {
    id: "qa-4",
    ionName: "Sulfate Ion",
    symbol: "SO₄²⁻",
    type: "anion",
    testWithReagent: "Dilute HCl followed by BaCl₂(aq) or Ba(NO₃)₂(aq)",
    observation: "Dense white precipitate of BaSO₄(s), completely insoluble in dilute mineral acids.",
    confirmatoryExplanation: "HCl removes any carbonate or sulfite that would otherwise produce a false positive white precipitate of BaCO₃ / BaSO₃."
  },
  {
    id: "qa-5",
    ionName: "Ammonium Ion",
    symbol: "NH₄⁺",
    type: "cation",
    testWithReagent: "Aqueous NaOH, gently warmed",
    observation: "Ammonia gas (NH₃) evolved. Pungent smell, turns damp red litmus paper blue.",
    confirmatoryExplanation: "NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l)."
  },
  {
    id: "qa-6",
    ionName: "Nitrate Ion",
    symbol: "NO₃⁻",
    type: "anion",
    testWithReagent: "Aqueous NaOH + Devarda's alloy (or Aluminium foil), warmed",
    observation: "Ammonia gas (NH₃) produced, turns damp red litmus paper blue.",
    confirmatoryExplanation: "Aluminium / Devarda's alloy acts as a reducing agent in alkaline medium to reduce nitrate (N=+5) to ammonia (N=-3)."
  }
];
