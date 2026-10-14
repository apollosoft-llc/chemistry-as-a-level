import { Chapter, QuizQuestion } from "../types";
import { ALL_CHAPTERS } from "./chaptersIndex";

export interface GeneratedMCQ {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  level: "AS" | "A2";
  category: "Physical" | "Inorganic" | "Organic" | "Analysis" | "Practical";
  difficulty: "Fundamental" | "Standard" | "Advanced";
  questionText: string;
  options: [string, string, string, string];
  correctAnswerIndex: number; // 0, 1, 2, 3
  explanationEn: string;
  examinerTip?: string;
  subtopicTag?: string;
}

/**
 * Curated high-yield Cambridge 9701 Paper 1 style questions across syllabus chapters
 */
export const CURATED_QUIZ_QUESTIONS: GeneratedMCQ[] = [
  // Chapter 1: Atomic Structure
  {
    id: "mcq-ch1-1",
    chapterNumber: 1,
    chapterTitle: "Atomic Structure",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "Which statement correctly describes the behavior of subatomic particles when passed through a uniform electric field?",
    options: [
      "Protons and electrons are deflected by equal angles in opposite directions.",
      "Electrons are deflected towards the positive plate by a much greater angle than protons towards the negative plate.",
      "Neutrons are deflected towards the negative plate due to induced polarity.",
      "Protons are deflected towards the positive plate because they have a positive charge."
    ],
    correctAnswerIndex: 1,
    explanationEn: "Electrons carry a negative charge and are attracted towards the positive plate. Because an electron has approximately 1/1836 the mass of a proton, its charge-to-mass ratio (e/m) is much larger, resulting in a substantially greater angle of deflection.",
    examinerTip: "Examiners check that you state both the DIRECTION (towards opposite charge) and DEGREE (inversely proportional to mass) of deflection.",
    subtopicTag: "Subatomic Particles in Electric Fields"
  },
  {
    id: "mcq-ch1-2",
    chapterNumber: 1,
    chapterTitle: "Atomic Structure",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "Why do isotopes of the same element exhibit identical chemical properties?",
    options: [
      "They have the same number of neutrons in their atomic nucleus.",
      "They have identical relative isotopic masses.",
      "They have the same electronic configuration and same number of valence electrons.",
      "Their nuclear binding energy per nucleon is identical."
    ],
    correctAnswerIndex: 2,
    explanationEn: "Chemical reactions involve the gain, loss, or sharing of valence electrons. Since isotopes have the identical proton number and electronic configuration, their chemical reactivity is completely identical.",
    examinerTip: "Remember that physical properties (density, boiling point, rate of diffusion) differ between isotopes due to different masses, but chemical properties are identical.",
    subtopicTag: "Isotopes & Chemical Reactivity"
  },

  // Chapter 2: Electrons in Atoms
  {
    id: "mcq-ch2-1",
    chapterNumber: 2,
    chapterTitle: "Electrons in Atoms",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "Which is the correct ground-state electronic configuration of a Chromium atom (Z = 24)?",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s²",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s² 4p¹"
    ],
    correctAnswerIndex: 1,
    explanationEn: "Chromium (Z = 24) has the exceptional configuration [Ar] 3d⁵ 4s¹ because a half-filled 3d subshell provides extra exchange energy stability and minimizes inter-electronic repulsion compared to [Ar] 3d⁴ 4s².",
    examinerTip: "Always remember the two anomalous d-block ground states in 9701: Cr is [Ar] 3d⁵ 4s¹ and Cu is [Ar] 3d¹⁰ 4s¹.",
    subtopicTag: "Electronic Configurations"
  },
  {
    id: "mcq-ch2-2",
    chapterNumber: 2,
    chapterTitle: "Electrons in Atoms",
    level: "AS",
    category: "Physical",
    difficulty: "Advanced",
    questionText: "Why is the first ionisation energy of Aluminium (Z = 13) slightly lower than that of Magnesium (Z = 12)?",
    options: [
      "Aluminium has a lower nuclear charge than Magnesium.",
      "The 3p electron in Aluminium experiences spin-pair repulsion in a doubly occupied orbital.",
      "The outermost electron in Aluminium is in a 3p orbital, which is at a higher energy level and shielded by the 3s² electrons.",
      "Aluminium has a smaller atomic radius than Magnesium."
    ],
    correctAnswerIndex: 2,
    explanationEn: "In Magnesium (1s² 2s² 2p⁶ 3s²), the electron is removed from a 3s orbital. In Aluminium (1s² 2s² 2p⁶ 3s² 3p¹), the electron is in a 3p subshell, which is higher in energy and shielded by the inner 3s² subshell, making it easier to remove.",
    examinerTip: "Distinguish between the dip at Group 13 (s to p subshell shielding, Mg vs Al) and the dip at Group 16 (spin-pair repulsion in a p orbital, P vs S).",
    subtopicTag: "First Ionisation Energy Anomalies"
  },

  // Chapter 3: Chemical Bonding
  {
    id: "mcq-ch3-1",
    chapterNumber: 3,
    chapterTitle: "Chemical Bonding",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "What is the shape and bond angle of the Xenon tetrafluoride (XeF₄) molecule according to VSEPR theory?",
    options: [
      "Tetrahedral, 109.5°",
      "Square planar, 90°",
      "See-saw, 120° and 90°",
      "T-shaped, 87.5°"
    ],
    correctAnswerIndex: 1,
    explanationEn: "Xenon has 8 valence electrons. In XeF₄, it forms 4 bonding pairs with fluorine and has 2 lone pairs (total 6 electron pairs = octahedral electron geometry). The two lone pairs position themselves opposite to each other (180°) to minimize repulsion, leaving a Square Planar molecular shape with 90° bond angles.",
    examinerTip: "Lone pair - lone pair repulsion > lone pair - bond pair repulsion > bond pair - bond pair repulsion.",
    subtopicTag: "VSEPR Molecular Shapes"
  },
  {
    id: "mcq-ch3-2",
    chapterNumber: 3,
    chapterTitle: "Chemical Bonding",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "Which of the following molecules exhibits the highest boiling point due to intermolecular hydrogen bonding?",
    options: [
      "CH₃–CH₂–CH₂–CH₃ (Butane)",
      "CH₃–CH₂–O–CH₃ (Methoxyethane)",
      "CH₃–CH₂–CH₂–OH (Propan-1-ol)",
      "CH₃–CH₂–CH₂–Cl (1-Chloropropane)"
    ],
    correctAnswerIndex: 2,
    explanationEn: "Propan-1-ol contains a hydrogen atom bonded to a highly electronegative oxygen atom (–O–H) with lone pairs on oxygen, enabling extensive intermolecular hydrogen bonding, the strongest dipole-dipole force.",
    examinerTip: "Hydrogen bonding requires H covalently bonded to N, O, or F, AND a lone pair on a neighbouring N, O, or F atom.",
    subtopicTag: "Intermolecular Forces"
  },

  // Chapter 4: States of Matter
  {
    id: "mcq-ch4-1",
    chapterNumber: 4,
    chapterTitle: "States of Matter",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "Under which set of conditions does a real gas show the greatest deviation from ideal gas behavior (PV = nRT)?",
    options: [
      "High temperature and low pressure",
      "Low temperature and high pressure",
      "High temperature and high pressure",
      "Low temperature and low pressure"
    ],
    correctAnswerIndex: 1,
    explanationEn: "At low temperatures, gas particles have low kinetic energy and intermolecular attractive forces become significant. At high pressures, the volume occupied by the gas molecules themselves is no longer negligible compared to the total container volume.",
    examinerTip: "Ideal gas assumptions: negligible particle volume, and no intermolecular forces.",
    subtopicTag: "Ideal Gas Law & Real Gas Deviations"
  },

  // Chapter 5: Chemical Energetics
  {
    id: "mcq-ch5-1",
    chapterNumber: 5,
    chapterTitle: "Chemical Energetics",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "Which enthalpy change is defined as: 'The enthalpy change when 1 mole of a compound is formed from its constituent elements in their standard states under standard conditions'?",
    options: [
      "Standard enthalpy change of combustion (ΔH°c)",
      "Standard enthalpy change of neutralisation (ΔH°neut)",
      "Standard enthalpy change of formation (ΔH°f)",
      "Standard enthalpy change of atomisation (ΔH°at)"
    ],
    correctAnswerIndex: 2,
    explanationEn: "By definition, ΔH°f is the enthalpy change when 1 mole of a substance is formed from its elements in their standard states under standard conditions (298 K, 100 kPa). Note that ΔH°f of any element in its standard state is 0 kJ/mol.",
    examinerTip: "Always include '1 mole of compound formed', 'from elements', and 'in standard states' in your written definitions.",
    subtopicTag: "Enthalpy Definitions"
  },
  {
    id: "mcq-ch5-2",
    chapterNumber: 5,
    chapterTitle: "Chemical Energetics",
    level: "AS",
    category: "Physical",
    difficulty: "Advanced",
    questionText: "Given the bond energies: C–H = 413, Cl–Cl = 242, C–Cl = 346, H–Cl = 431 kJ/mol. What is the enthalpy change for the reaction: CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g)?",
    options: [
      "+122 kJ/mol",
      "–122 kJ/mol",
      "–98 kJ/mol",
      "+98 kJ/mol"
    ],
    correctAnswerIndex: 1,
    explanationEn: "Bonds broken: 1 C–H (413) + 1 Cl–Cl (242) = +655 kJ/mol. Bonds formed: 1 C–Cl (346) + 1 H–Cl (431) = –777 kJ/mol. ΔH = (Bonds Broken) – (Bonds Formed) = 655 – 777 = –122 kJ/mol.",
    examinerTip: "ΔH = Σ(Bonds Broken) – Σ(Bonds Formed). Remember that bond breaking is always endothermic (+).",
    subtopicTag: "Bond Energy Calculations"
  },

  // Chapter 7: Equilibria
  {
    id: "mcq-ch7-1",
    chapterNumber: 7,
    chapterTitle: "Equilibria",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "For the exothermic equilibrium: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = –92 kJ/mol), how does increasing the temperature affect the equilibrium position and the value of Kc?",
    options: [
      "Equilibrium shifts right; Kc increases",
      "Equilibrium shifts left; Kc decreases",
      "Equilibrium shifts right; Kc remains constant",
      "Equilibrium shifts left; Kc remains constant"
    ],
    correctAnswerIndex: 1,
    explanationEn: "According to Le Chatelier's principle, increasing the temperature favours the endothermic backward reaction to absorb heat. Therefore, equilibrium shifts left, the concentration of products decreases relative to reactants, and the equilibrium constant Kc decreases. Only temperature changes the numerical value of Kc.",
    examinerTip: "Pressure, concentration, and catalysts do NOT change Kc; ONLY temperature changes Kc!",
    subtopicTag: "Le Chatelier's Principle & Kc"
  },

  // Chapter 8: Reaction Kinetics
  {
    id: "mcq-ch8-1",
    chapterNumber: 8,
    chapterTitle: "Reaction Kinetics",
    level: "AS",
    category: "Physical",
    difficulty: "Standard",
    questionText: "How does adding a positive catalyst increase the rate of a chemical reaction?",
    options: [
      "It increases the average kinetic energy of the reactant molecules.",
      "It provides an alternative reaction pathway with a lower activation energy (Ea).",
      "It increases the total frequency of collisions without altering Ea.",
      "It shifts the equilibrium position towards the product side."
    ],
    correctAnswerIndex: 1,
    explanationEn: "A catalyst provides an alternative mechanism with a lower activation energy (Ea). This means a significantly higher proportion of colliding particles possess kinetic energy equal to or exceeding the new activation energy (E ≥ Ea), increasing the frequency of successful collisions.",
    examinerTip: "On a Maxwell-Boltzmann distribution, a catalyst does not change the curve shape; it moves the Ea line to the left.",
    subtopicTag: "Catalysis & Maxwell-Boltzmann"
  },

  // Chapter 10: Group 2 & Group 17
  {
    id: "mcq-ch10-1",
    chapterNumber: 10,
    chapterTitle: "Group 2 (Alkaline Earth Metals)",
    level: "AS",
    category: "Inorganic",
    difficulty: "Standard",
    questionText: "Which statement correctly describes the trend in thermal stability of Group 2 carbonates (MgCO₃ to BaCO₃) down the group?",
    options: [
      "Decreases down the group because the cation charge increases.",
      "Decreases down the group because ionic radius decreases.",
      "Increases down the group because the larger cation has lower charge density and polarises the carbonate anion less.",
      "Remains constant because all Group 2 cations have a 2+ charge."
    ],
    correctAnswerIndex: 2,
    explanationEn: "Down Group 2, the ionic radius of M²⁺ increases while charge remains +2. The charge density of the cation decreases, so it polarises the large, electron-rich CO₃²⁻ ion less. The C–O bonds are less weakened, requiring higher temperatures to decompose into MO and CO₂.",
    examinerTip: "Thermal stability of both Group 2 carbonates AND Group 2 nitrates increases down the group.",
    subtopicTag: "Thermal Stability of Group 2"
  },
  {
    id: "mcq-ch10-2",
    chapterNumber: 10,
    chapterTitle: "Group 17 (Halogens)",
    level: "AS",
    category: "Inorganic",
    difficulty: "Standard",
    questionText: "When chlorine gas is bubbled into cold dilute aqueous sodium hydroxide, what is the reaction type and the oxidation state of chlorine in the products?",
    options: [
      "Neutralisation; oxidation state is –1 only",
      "Disproportionation; oxidation states are –1 (in NaCl) and +1 (in NaClO)",
      "Disproportionation; oxidation states are –1 (in NaCl) and +5 (in NaClO₃)",
      "Precipitation; oxidation state is 0"
    ],
    correctAnswerIndex: 1,
    explanationEn: "Cold dilute NaOH: Cl₂(g) + 2NaOH(aq) → NaCl(aq) + NaClO(aq) + H₂O(l). Chlorine is simultaneously reduced from 0 to –1 in NaCl and oxidised from 0 to +1 in NaClO (disproportionation). With hot concentrated NaOH, NaClO₃ (+5) is formed instead.",
    examinerTip: "Cold dilute alkali gives NaClO (+1); hot concentrated alkali gives NaClO₃ (+5). Both are classic disproportionation reactions.",
    subtopicTag: "Halogen Disproportionation"
  },

  // Chapter 14: Halogenoalkanes
  {
    id: "mcq-ch14-1",
    chapterNumber: 14,
    chapterTitle: "Halogenoalkanes",
    level: "AS",
    category: "Organic",
    difficulty: "Advanced",
    questionText: "Which halogenoalkane reacts fastest when heated with aqueous sodium hydroxide under identical conditions?",
    options: [
      "CH₃CH₂CH₂CH₂–F (1-fluorobutane)",
      "CH₃CH₂CH₂CH₂–Cl (1-chlorobutane)",
      "CH₃CH₂CH₂CH₂–Br (1-bromobutane)",
      "CH₃CH₂CH₂CH₂–I (1-iodobutane)"
    ],
    correctAnswerIndex: 3,
    explanationEn: "The rate of hydrolysis of halogenoalkanes is determined by C–Halogen bond strength (bond enthalpy), NOT bond polarity. The C–I bond has the lowest bond enthalpy (240 kJ/mol) because the iodine atom is large with diffuse orbitals, making C–I the easiest bond to break.",
    examinerTip: "Rate of hydrolysis: C–I > C–Br > C–Cl > C–F. Bond enthalpy dominates over bond polarity.",
    subtopicTag: "Nucleophilic Substitution Rates"
  },
  {
    id: "mcq-ch14-2",
    chapterNumber: 14,
    chapterTitle: "Halogenoalkanes",
    level: "AS",
    category: "Organic",
    difficulty: "Standard",
    questionText: "Which mechanism and stereochemical outcome occurs when 2-bromo-2-methylpropane (a tertiary halogenoalkane) reacts with aqueous hydroxide ions?",
    options: [
      "SN2 mechanism with complete inversion of configuration (Walden inversion).",
      "SN1 mechanism via a planar carbocation intermediate, leading to racemisation.",
      "Electrophilic addition via a cyclic bromonium ion.",
      "Free radical substitution via homolytic fission."
    ],
    correctAnswerIndex: 1,
    explanationEn: "Tertiary halogenoalkanes undergo SN1 substitution. The rate-determining step is the unimolecular loss of the halide ion to form a planar carbocation intermediate. The nucleophile (:OH⁻) can attack with equal probability from either side of the flat carbocation, leading to racemisation (loss of optical activity).",
    examinerTip: "Primary halogenoalkanes follow SN2 (1 step, backside attack, inversion); Tertiary follow SN1 (2 steps, planar carbocation intermediate, racemisation).",
    subtopicTag: "SN1 vs SN2 Mechanisms"
  },

  // Chapter 15: Alcohols, Esters & Carbonyls
  {
    id: "mcq-ch15-1",
    chapterNumber: 15,
    chapterTitle: "Alcohols",
    level: "AS",
    category: "Organic",
    difficulty: "Standard",
    questionText: "What reagent and condition is used to distinguish between an aldehyde and a ketone by producing a silver mirror precipitate?",
    options: [
      "2,4-dinitrophenylhydrazine (Brady's reagent)",
      "Tollens' reagent (ammoniacal silver nitrate), gently warmed",
      "Acidified potassium dichromate(VI) under reflux",
      "Aqueous alkaline iodine (triiodomethane test)"
    ],
    correctAnswerIndex: 1,
    explanationEn: "Tollens' reagent contains the diamminesilver(I) complex [Ag(NH₃)₂]⁺. Aldehydes are easily oxidised to carboxylate salts while reducing Ag⁺ to metallic silver (Ag(s)), creating a silver mirror on the test tube wall. Ketones cannot be oxidised under these mild conditions and give no reaction.",
    examinerTip: "Brady's reagent (2,4-DNPH) reacts with BOTH aldehydes and ketones to give an orange/yellow precipitate. Tollens' and Fehling's react ONLY with aldehydes.",
    subtopicTag: "Carbonyl Identification Tests"
  },
  {
    id: "mcq-ch15-2",
    chapterNumber: 15,
    chapterTitle: "Carbonyl Compounds",
    level: "AS",
    category: "Organic",
    difficulty: "Advanced",
    questionText: "Which compound produces a yellow precipitate of CHI₃ (triiodomethane) when warmed with aqueous alkaline iodine (I₂ / NaOH)?",
    options: [
      "Pentan-3-one",
      "Propan-1-ol",
      "Propan-2-ol",
      "Methanoic acid"
    ],
    correctAnswerIndex: 2,
    explanationEn: "The positive iodoform (triiodomethane) test is given by compounds containing the CH₃–C=O group (methyl ketones / ethanal) or the CH₃–CH(OH)– group (methyl secondary alcohols / ethanol). Propan-2-ol contains CH₃–CH(OH)–CH₃ and is oxidised to propanone, which then reacts to form the yellow antiseptic-smelling precipitate of CHI₃.",
    examinerTip: "Look for the CH₃–CH(OH)– group or CH₃–C=O group. Pentan-3-one has CH₃CH₂–C(=O)–CH₂CH₃ (no methyl ketone group), so it gives a negative test.",
    subtopicTag: "Triiodomethane / Iodoform Test"
  },

  // Chapter 19: Lattice Energy & Born-Haber (A2)
  {
    id: "mcq-ch19-1",
    chapterNumber: 19,
    chapterTitle: "Lattice Energy & Born-Haber Cycles",
    level: "A2",
    category: "Physical",
    difficulty: "Advanced",
    questionText: "Why is the experimental lattice energy of Silver Chloride (AgCl) significantly more exothermic than the theoretical value calculated using the purely ionic electrostatic model?",
    options: [
      "Ag⁺ has a noble gas electron configuration that repels Cl⁻.",
      "Ag⁺ has high polarising power due to non-shielded 4d electrons, inducing significant covalent character in the Ag–Cl bond.",
      "AgCl forms a body-centred cubic lattice instead of a face-centred lattice.",
      "The ionic radius of Ag⁺ is larger than that of Na⁺."
    ],
    correctAnswerIndex: 1,
    explanationEn: "Ag⁺ does not have a noble gas configuration; its 4d¹⁰ subshell does not shield the nuclear charge effectively. This gives Ag⁺ high polarising power, which distorts the electron cloud of Cl⁻, introducing significant covalent character into the bond and releasing extra bonding energy.",
    examinerTip: "Difference between experimental and theoretical lattice energy indicates degree of covalent character due to polarisation (Fajans' rules).",
    subtopicTag: "Polarisation & Covalent Character"
  },

  // Chapter 20: Electrochemistry (A2)
  {
    id: "mcq-ch20-1",
    chapterNumber: 20,
    chapterTitle: "Electrochemistry & Electrode Potentials",
    level: "A2",
    category: "Physical",
    difficulty: "Advanced",
    questionText: "Given E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = –0.76 V. What is the standard cell potential (E°cell) for the Daniel cell Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), and which electrode is the positive cathode?",
    options: [
      "E°cell = +0.42 V; Zinc is the cathode",
      "E°cell = +1.10 V; Copper is the cathode",
      "E°cell = –1.10 V; Copper is the cathode",
      "E°cell = +1.10 V; Zinc is the cathode"
    ],
    correctAnswerIndex: 1,
    explanationEn: "E°cell = E°(reduction / cathode) – E°(oxidation / anode) = +0.34 V – (–0.76 V) = +1.10 V. The Cu²⁺/Cu half-cell has the more positive E° value, so it undergoes reduction (acts as the positive cathode where electrons are consumed).",
    examinerTip: "The more positive E° is reduced (cathode); the more negative E° is oxidised (anode).",
    subtopicTag: "Standard Cell Potential Calculations"
  },

  // Chapter 22: Transition Elements (A2)
  {
    id: "mcq-ch22-1",
    chapterNumber: 22,
    chapterTitle: "Transition Elements & Complex Ions",
    level: "A2",
    category: "Inorganic",
    difficulty: "Standard",
    questionText: "Why is [Sc(H₂O)₆]³⁺ colourless while [Ti(H₂O)₆]³⁺ is violet?",
    options: [
      "Sc³⁺ has a fully filled 3d¹⁰ subshell, preventing d-d electron transitions.",
      "Sc³⁺ has an empty 3d⁰ subshell, so no d-d electron transitions can occur when visible light is absorbed.",
      "Ti³⁺ has a larger ionic radius than Sc³⁺.",
      "Water is a polydentate ligand for Titanium but monodentate for Scandium."
    ],
    correctAnswerIndex: 1,
    explanationEn: "Transition metal complexes are coloured because ligands split the 3d orbitals into two energy levels (ΔE = hf). Absorption of visible light promotes an electron from a lower d-orbital to a higher d-orbital (d-d transition). Sc³⁺ has electronic configuration [Ar] 3d⁰ (no d electrons), so d-d transitions are impossible, making it colourless.",
    examinerTip: "For colour, a complex MUST have a partially filled d subshell (3d¹ to 3d⁹). Both 3d⁰ (Sc³⁺) and 3d¹⁰ (Zn²⁺) complexes are colourless.",
    subtopicTag: "Origin of Colour in Complex Ions"
  },

  // Chapter 24: Arenes & Benzene (A2)
  {
    id: "mcq-ch24-1",
    chapterNumber: 24,
    chapterTitle: "Arenes (Benzene & Derivatives)",
    level: "A2",
    category: "Organic",
    difficulty: "Standard",
    questionText: "Why does benzene undergo electrophilic substitution reactions rather than electrophilic addition reactions?",
    options: [
      "Benzene has localized double bonds that are too stable to react.",
      "Electrophilic addition would permanently disrupt the stable 6 π-electron delocalised aromatic ring system.",
      "Benzene is an electrophile and cannot react with other electrophiles.",
      "The C–H bonds in benzene are stronger than the C–C bonds."
    ],
    correctAnswerIndex: 1,
    explanationEn: "The delocalised 6 π-electron ring provides aromatic resonance stability (152 kJ/mol extra stability). Substitution allows the delocalised π-system to be restored in the final step (by loss of H⁺), whereas addition would permanently destroy the aromatic stability.",
    examinerTip: "Always mention 'preservation of the delocalised aromatic π-electron ring' when asked why benzene undergoes substitution instead of addition.",
    subtopicTag: "Aromatic Stability & Mechanisms"
  },

  // Chapter 31: Spectroscopy & NMR (A2)
  {
    id: "mcq-ch31-1",
    chapterNumber: 31,
    chapterTitle: "NMR Spectroscopy",
    level: "A2",
    category: "Analysis",
    difficulty: "Advanced",
    questionText: "In the high-resolution ¹H NMR spectrum of pure ethanol (CH₃–CH₂–OH), what are the splitting patterns (multiplicities) of the –CH₃ and –CH₂– proton signals according to the (n+1) rule?",
    options: [
      "CH₃ is a singlet; CH₂ is a doublet",
      "CH₃ is a triplet; CH₂ is a quartet",
      "CH₃ is a quartet; CH₂ is a triplet",
      "CH₃ is a doublet; CH₂ is a doublet"
    ],
    correctAnswerIndex: 1,
    explanationEn: "According to the (n+1) rule: The –CH₃ protons have 2 neighbouring protons on the adjacent –CH₂– group, so its peak is split into (2 + 1) = 3 peaks (triplet). The –CH₂– protons have 3 neighbouring protons on the adjacent –CH₃ group, so its peak is split into (3 + 1) = 4 peaks (quartet). In standard spectra, O–H proton does not cause splitting due to rapid proton exchange.",
    examinerTip: "Multiplicity = n + 1, where n is the number of non-equivalent hydrogen atoms on the immediately adjacent carbon atom.",
    subtopicTag: "High Resolution 1H NMR Splitting"
  }
];

/**
 * Procedurally generates supplementary MCQs from any chapter's key terms and formulas
 */
export function generateProceduralMCQsForChapter(chapter: Chapter): GeneratedMCQ[] {
  const generated: GeneratedMCQ[] = [];

  // Generate Term Definition MCQs
  if (chapter.keyTerms && chapter.keyTerms.length > 0) {
    chapter.keyTerms.forEach((kt, idx) => {
      const def = kt.definitionEn || kt.defEn;
      if (!kt.termEn || !def) return;

      // Find 3 other terms from different chapters or same chapter for distractors
      const otherTerms = ALL_CHAPTERS.flatMap((c) => c.keyTerms || [])
        .map((t) => t.termEn)
        .filter((t) => t && t.toLowerCase() !== kt.termEn.toLowerCase());

      const uniqueOther = Array.from(new Set(otherTerms)).sort(() => 0.5 - Math.random()).slice(0, 3);
      if (uniqueOther.length < 3) return;

      const choices = [kt.termEn, ...uniqueOther].sort(() => 0.5 - Math.random());
      const correctIdx = choices.indexOf(kt.termEn);

      generated.push({
        id: `gen-term-${chapter.number}-${idx + 1}`,
        chapterNumber: chapter.number,
        chapterTitle: chapter.titleEn,
        level: chapter.level,
        category: chapter.category,
        difficulty: "Fundamental",
        questionText: `Which Cambridge 9701 term is defined as: "${def}"?`,
        options: [choices[0], choices[1], choices[2], choices[3]],
        correctAnswerIndex: correctIdx,
        explanationEn: `"${kt.termEn}" is the precise syllabus definition. Cambridge mark schemes require precision when stating definitions.`,
        examinerTip: chapter.examStyleTips ? chapter.examStyleTips[idx % chapter.examStyleTips.length] : undefined,
        subtopicTag: "Key Terms & Definitions"
      });
    });
  }

  // Generate Formula & Quantitative Relationship MCQs
  if (chapter.formulas && chapter.formulas.length > 0) {
    chapter.formulas.forEach((form, fIdx) => {
      if (!form.nameEn || !form.formula) return;

      // Generate formula identification question
      const otherFormulas = ALL_CHAPTERS.flatMap((c) => c.formulas || [])
        .map((f) => f.formula)
        .filter((f) => f && f !== form.formula);

      const uniqueForms = Array.from(new Set(otherFormulas)).sort(() => 0.5 - Math.random()).slice(0, 3);
      if (uniqueForms.length < 3) return;

      const formulaChoices = [form.formula, ...uniqueForms].sort(() => 0.5 - Math.random());
      const correctIdx = formulaChoices.indexOf(form.formula);

      generated.push({
        id: `gen-form-${chapter.number}-${fIdx + 1}`,
        chapterNumber: chapter.number,
        chapterTitle: chapter.titleEn,
        level: chapter.level,
        category: chapter.category,
        difficulty: "Standard",
        questionText: `What is the correct mathematical expression / equation for "${form.nameEn}" in Chapter ${chapter.number} (${chapter.titleEn})?`,
        options: [formulaChoices[0], formulaChoices[1], formulaChoices[2], formulaChoices[3]],
        correctAnswerIndex: correctIdx,
        explanationEn: `${form.nameEn} is expressed as: ${form.formula}. ${form.note || "Essential relationship for Cambridge 9701 calculations."}`,
        examinerTip: form.note,
        subtopicTag: "Quantitative Relationships"
      });
    });
  }

  return generated;
}

/**
 * Get all available questions (Curated + Procedural)
 */
export function getAllQuizQuestions(): GeneratedMCQ[] {
  const procedural = ALL_CHAPTERS.flatMap((ch) => generateProceduralMCQsForChapter(ch));
  return [...CURATED_QUIZ_QUESTIONS, ...procedural];
}

/**
 * Filter questions based on user criteria
 */
export function filterQuestions(
  level: "ALL" | "AS" | "A2",
  category: string,
  chapterNumber: number | "ALL",
  searchQuery: string = ""
): GeneratedMCQ[] {
  const all = getAllQuizQuestions();

  return all.filter((q) => {
    if (level !== "ALL" && q.level !== level) return false;
    if (category !== "ALL" && q.category !== category) return false;
    if (chapterNumber !== "ALL" && q.chapterNumber !== chapterNumber) return false;
    if (searchQuery.trim()) {
      const s = searchQuery.toLowerCase();
      return (
        q.questionText.toLowerCase().includes(s) ||
        q.chapterTitle.toLowerCase().includes(s) ||
        q.options.some((opt) => opt.toLowerCase().includes(s))
      );
    }
    return true;
  });
}
