import React, { useState, useEffect } from "react";
import { ElementData } from "../types";
import { useLanguage } from "../utils/languageContext";
import { Atom, Play, Pause, Shield, Zap, Sparkles } from "lucide-react";

interface BohrAtomSimulatorProps {
  element: ElementData;
}

// Helper to determine electrons per principal shell (n=1, 2, 3, 4, 5, 6, 7)
export const getShellElectrons = (atomicNumber: number): number[] => {
  // Simple Aufbau shell filling mapping up to element 118
  const maxCapacities = [2, 8, 18, 32, 32, 18, 8];
  const shells: number[] = [];
  let remaining = atomicNumber;

  // Exact shell distributions for common elements or standard filling
  // Up to element 20:
  if (atomicNumber <= 2) return [atomicNumber];
  if (atomicNumber <= 10) return [2, atomicNumber - 2];
  if (atomicNumber <= 18) return [2, 8, atomicNumber - 10];
  if (atomicNumber === 19) return [2, 8, 8, 1]; // K
  if (atomicNumber === 20) return [2, 8, 8, 2]; // Ca
  if (atomicNumber === 24) return [2, 8, 13, 1]; // Cr (3d5 4s1)
  if (atomicNumber === 29) return [2, 8, 18, 1]; // Cu (3d10 4s1)
  if (atomicNumber <= 30) return [2, 8, 8 + (atomicNumber - 20), 2]; // 3d series
  if (atomicNumber <= 36) return [2, 8, 18, atomicNumber - 28]; // Ga to Kr

  // General heuristic for higher Z
  for (let i = 0; i < maxCapacities.length; i++) {
    if (remaining <= 0) break;
    const add = Math.min(remaining, maxCapacities[i]);
    shells.push(add);
    remaining -= add;
  }
  return shells;
};

export const BohrAtomSimulator: React.FC<BohrAtomSimulatorProps> = ({ element }) => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [showShielding, setShowShielding] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);

  const shells = getShellElectrons(element.number);
  const totalElectrons = element.number;
  const massNumber = typeof element.atomicMass === "number" ? Math.round(element.atomicMass) : element.number * 2;
  const neutrons = Math.max(0, massNumber - element.number);

  // Effective nuclear charge estimation Z_eff = Z - S
  // For Period 3 (Na-Ar), inner core electrons = 10 (1s2 2s2 2p6), so Z_eff ≈ Z - 10
  const innerCoreElectrons = shells.slice(0, -1).reduce((acc, curr) => acc + curr, 0);
  const valenceElectrons = shells[shells.length - 1] || 1;
  const approxShielding = innerCoreElectrons;
  const zEff = Math.max(1, element.number - approxShielding);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 1.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
            <Atom className="w-5 h-5 text-cyan-700 animate-spin" style={{ animationDuration: "12s" }} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <span>{element.nameEn} ({element.symbol})</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                Z = {element.number}
              </span>
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              {language === "mn" ? "Бор атомын загвар & Цөмийн үр дүнтэй цэнэгийн симуляци" : "Bohr Orbitals & Effective Nuclear Charge (Z_eff) Simulator"}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors border border-slate-200 shadow-2xs"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? (language === "mn" ? "Зогсоох" : "Pause") : (language === "mn" ? "Хөдөлгөх" : "Play")}</span>
          </button>
          <button
            onClick={() => setShowShielding(!showShielding)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border shadow-2xs ${
              showShielding
                ? "bg-amber-50 text-amber-900 border-amber-300"
                : "bg-slate-100 text-slate-600 border-slate-200"
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === "mn" ? "Халхавчлах нөлөө" : "Shielding Effect"}</span>
          </button>
        </div>
      </div>

      {/* Main Visualizer Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Dynamic SVG Bohr Orbitals */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-radial from-slate-900 via-slate-950 to-slate-900 rounded-2xl min-h-[340px] relative overflow-hidden select-none border border-slate-800 shadow-inner">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />

          <svg
            viewBox="0 0 320 320"
            className="w-full max-w-[300px] h-auto drop-shadow-md relative z-10"
          >
            {/* Center Nucleus */}
            <circle
              cx="160"
              cy="160"
              r="22"
              className="fill-cyan-500 filter drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]"
            />
            <text
              x="160"
              y="157"
              textAnchor="middle"
              className="fill-slate-950 font-black text-sm select-none"
            >
              {element.symbol}
            </text>
            <text
              x="160"
              y="170"
              textAnchor="middle"
              className="fill-slate-900 font-mono text-[9px] font-bold select-none"
            >
              {element.number}p⁺ {neutrons}n⁰
            </text>

            {/* Orbiting Shells */}
            {shells.map((count, shellIdx) => {
              const radius = 38 + shellIdx * 20;
              const isValence = shellIdx === shells.length - 1;
              const speedMultiplier = (shells.length - shellIdx) * 0.7;
              const currentAngle = (rotationAngle * speedMultiplier) % 360;

              return (
                <g key={shellIdx}>
                  {/* Orbit Track */}
                  <circle
                    cx="160"
                    cy="160"
                    r={radius}
                    fill="none"
                    stroke={isValence ? "rgba(251, 191, 36, 0.45)" : "rgba(148, 163, 184, 0.25)"}
                    strokeWidth={isValence ? "1.5" : "1"}
                    strokeDasharray={isValence ? "4 2" : undefined}
                  />

                  {/* Shielding Cloud Layer indicator if turned on */}
                  {showShielding && !isValence && (
                    <circle
                      cx="160"
                      cy="160"
                      r={radius}
                      fill="none"
                      stroke="rgba(6, 182, 212, 0.08)"
                      strokeWidth="10"
                    />
                  )}

                  {/* Electrons in this shell */}
                  {Array.from({ length: count }).map((_, eIdx) => {
                    const angleOffset = (eIdx / count) * 2 * Math.PI;
                    const rotationRad = (currentAngle * Math.PI) / 180;
                    const totalAngle = angleOffset + rotationRad;
                    const eX = 160 + radius * Math.cos(totalAngle);
                    const eY = 160 + radius * Math.sin(totalAngle);

                    return (
                      <g key={eIdx}>
                        {/* Electron Glow */}
                        <circle
                          cx={eX}
                          cy={eY}
                          r={isValence ? 5 : 4}
                          className={isValence ? "fill-amber-400" : "fill-cyan-400"}
                          filter={isValence ? "drop-shadow(0 0 5px #fbbf24)" : "drop-shadow(0 0 3px #22d3ee)"}
                        />
                        {/* White inner core */}
                        <circle cx={eX} cy={eY} r={1.5} fill="#ffffff" />
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </svg>

          {/* Bottom Shell Summary Pill */}
          <div className="mt-3 flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/60 px-3 py-1 rounded-full text-[11px] font-mono text-slate-300 z-10">
            <span className="text-cyan-400 font-bold">Shells (n=1..{shells.length}):</span>
            <span>[{shells.join(", ")}]</span>
            <span className="text-amber-400 font-bold ml-1">• Valence: {valenceElectrons}e⁻</span>
          </div>
        </div>

        {/* Right: Cambridge 9701 Z_eff & Periodic Trend Explanation */}
        <div className="lg:col-span-5 space-y-4 text-xs">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">
                {language === "mn" ? "Нийт Протон (Z)" : "Nuclear Charge (Z)"}
              </span>
              <span className="font-mono text-cyan-800 font-black text-lg">+{element.number}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">{language === "mn" ? "Цөмийн эерэг цэнэг" : "Protons in nucleus"}</span>
            </div>

            <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200">
              <span className="text-amber-900 block text-[10px] font-bold uppercase tracking-wider">
                {language === "mn" ? "Үр дүнтэй цэнэг (Z_eff)" : "Effective Charge (Z_eff)"}
              </span>
              <span className="font-mono text-amber-700 font-black text-lg">≈ +{zEff}</span>
              <span className="text-[10px] text-amber-950 block mt-0.5">{language === "mn" ? "Гадаад электронд үйлчлэх" : "Felt by valence electrons"}</span>
            </div>
          </div>

          {/* Formula Breakdown */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-slate-800 font-bold">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-600" />
                <span>Slater's Law / Shielding Rule:</span>
              </span>
              <span className="font-mono text-cyan-700 font-bold">Z_eff = Z - S</span>
            </div>
            <div className="text-[11px] text-slate-600 space-y-1">
              <p>
                • <b>Z (Nuclear Charge):</b> +{element.number} protons pulling outer electrons inward.
              </p>
              <p>
                • <b>S (Shielding Effect):</b> ≈ {approxShielding} inner core electrons repelling valence electrons.
              </p>
              <p>
                • <b>Net Inward Pull:</b> ≈ <b>+{zEff}</b> effective pull on the {valenceElectrons} valence electron(s).
              </p>
            </div>
          </div>

          {/* Cambridge 9701 Exam Rule Box */}
          <div className="bg-cyan-50/70 border border-cyan-200 rounded-xl p-3.5 space-y-1.5">
            <span className="font-bold text-cyan-950 flex items-center gap-1.5 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              {language === "mn" ? "Кембриджийн шалгалтын гол зүй тогтол" : "Cambridge 9701 Exam Trend Rule"}
            </span>
            <p className="text-cyan-950 leading-relaxed text-[11px]">
              {language === "mn"
                ? "Үеийн дагуу (зүүнээс баруун тийш) цөмийн цэнэг Z өсдөг боловч дотоод электрон бүрхүүлийн халхавч S бараг тогтмол хэвээр үлддэг. Иймээс Z_eff өсч, гадаад электронуудыг цөм рүүгээ хүчтэй татсанаар АТОМЫН РАДИУС БУУРДАГ."
                : "Across a period (left to right), nuclear charge Z increases while inner shell shielding S remains roughly constant. Therefore, Z_eff increases and pulls the valence shell closer, causing ATOMIC RADIUS TO DECREASE."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
