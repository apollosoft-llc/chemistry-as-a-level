import React from "react";

/**
 * Formats standard chemical formulas, ions, complexes, and free radicals
 * into nicely formatted HTML / React elements with subscripts, superscripts, and radical dots.
 * 
 * Examples:
 * - "CuSO4.5H2O" -> CuSO₄·5H₂O
 * - "Fe3+" -> Fe³⁺
 * - "SO4^2-" or "SO4(2-)" -> SO₄²⁻
 * - "Cl." or "Cl*" or "CH3." -> Cl• or CH₃•
 * - "[Cu(H2O)6]2+" -> [Cu(H₂O)₆]²⁺
 * - "[CuCl4]2-" -> [CuCl₄]²⁻
 * - "[Fe(CN)6]3-" -> [Fe(CN)₆]³⁻
 */

// Mapping of numbers to subscript characters
const SUBSCRIPT_MAP: Record<string, string> = {
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
  "+": "₊",
  "-": "₋",
};

// Mapping of charge characters to superscript characters
const SUPERSCRIPT_MAP: Record<string, string> = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "+": "⁺",
  "-": "⁻",
  ".": "•",
  "*": "•",
};

/**
 * Formats a single chemical formula string into standard Cambridge IUPAC notation
 */
export function formatChemicalFormula(raw: string): string {
  if (!raw) return "";

  let str = raw;

  // Replace hydrate dots
  str = str.replace(/\s*\.\s*(\d*H2O)/g, "·$1");
  str = str.replace(/\s*\*\s*(\d*H2O)/g, "·$1");

  // Free radical dots (e.g. Cl., Br., CH3., NO2., OH.) — but keep decimal points such as 35.5
  str = str.replace(/([A-Za-z0-9\)])(\.|\*)(?!\d)/g, "$1•");

  // Format common ions like Fe3+, Fe2+, Cu2+, Al3+, Cr3+, Mg2+, Ca2+, Ba2+, Zn2+, Pb2+, Ag+, Na+, K+, NH4+
  str = str.replace(/([A-Za-z\)])(\d+)([+-])/g, (_, elem, num, sign) => {
    const supNum = num.split("").map((c: string) => SUPERSCRIPT_MAP[c] || c).join("");
    const supSign = SUPERSCRIPT_MAP[sign] || sign;
    return `${elem}${supNum}${supSign}`;
  });

  str = str.replace(/([A-Za-z\)])([+-])/g, (_, elem, sign) => {
    // Only if not followed by another sign or number
    return `${elem}${SUPERSCRIPT_MAP[sign] || sign}`;
  });

  // Convert remaining numeric subscripts following elements:
  // e.g. H2SO4 -> H₂SO₄, C6H12O6 -> C₆H₁₂O₆
  str = str.replace(/([A-Z][a-z]?|\))(\d+)/g, (_, elem, digits) => {
    const subDigits = digits.split("").map((d: string) => SUBSCRIPT_MAP[d] || d).join("");
    return `${elem}${subDigits}`;
  });

  return str;
}

/**
 * React Component to render beautifully formatted chemical text with inline symbols
 */
export const ChemFormula: React.FC<{ formula: string; className?: string }> = ({
  formula,
  className = "font-mono font-medium",
}) => {
  const formatted = formatChemicalFormula(formula);
  return <span className={className}>{formatted}</span>;
};

/**
 * Standard Cambridge 9701 Glossary of official terminology and IUPAC names
 */
export const CAMBRIDGE_9701_GLOSSARY: Record<string, { en: string; mn: string; definitionEn: string; definitionMn: string }> = {
  "relative_atomic_mass": {
    en: "Relative atomic mass (Ar)",
    mn: "Харьцангуй атомын масс (Ar)",
    definitionEn: "The weighted average mass of an atom of an element compared to 1/12th of the mass of a carbon-12 atom.",
    definitionMn: "Нүүрстөрөгч-12 атомын массын 1/12-той харьцуулсан тухайн элементийн атомуудын жигнэсэн дундаж масс.",
  },
  "first_ionisation_energy": {
    en: "First ionisation energy (IE1)",
    mn: "Нэгдүгээр иончлолын энерги (IE1)",
    definitionEn: "The energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions under standard conditions: X(g) → X⁺(g) + e⁻.",
    definitionMn: "Хийн төлөвт байгаа 1 моль саармаг атомаас 1 моль электрон салгаж 1 моль хийн нэг цэнэгтэй эерэг ион үүсгэхэд шаардагдах энерги.",
  },
  "standard_enthalpy_formation": {
    en: "Standard enthalpy change of formation (ΔHf°)",
    mn: "Үүсэхийн стандарт энтальпийн өөрчлөлт (ΔHf°)",
    definitionEn: "The enthalpy change when one mole of a compound is formed from its constituent elements under standard conditions (298 K, 100 kPa), all reactants and products in standard states.",
    definitionMn: "Стандарт нөхцөлд (298 К, 100 кПа) тухайн нэгдлийг бүрдүүлэгч цэвэр элементүүдээс 1 моль нэгдэл үүсэх үеийн энтальпийн өөрчлөлт.",
  },
  "free_radical": {
    en: "Free radical (•R)",
    mn: "Чөлөөт радикал (•R)",
    definitionEn: "A species containing one or more unpaired electrons, formed by homolytic fission of a covalent bond.",
    definitionMn: "Ковалент холбоо гомолитик байдлаар тасрахад үүсдэг, нэг буюу хэд хэдэн хослоогүй электрон агуулсан өндөр идэвхтэй бөөм.",
  },
  "electronegativity": {
    en: "Electronegativity (Pauling)",
    mn: "Цахилгаан сөрөг чанар (Полинг)",
    definitionEn: "The ability of a particular atom, covalently bonded to another atom, to attract the bonding pair of electrons towards itself.",
    definitionMn: "Ковалент холбоогоор холбогдсон атом холбооны дундын хос электроныг өөртөө татах чадвар.",
  },
  "lattice_energy": {
    en: "Lattice energy (ΔHlatt°)",
    mn: "Талст торын энерги (ΔHlatt°)",
    definitionEn: "The enthalpy change when one mole of an ionic compound is formed from its constituent gaseous ions under standard conditions: M⁺(g) + X⁻(g) → MX(s).",
    definitionMn: "Стандарт нөхцөлд хийн төлөвт байгаа ионуудаас 1 моль ионы талст нэгдэл үүсэх үеийн энтальпийн өөрчлөлт.",
  },
};
