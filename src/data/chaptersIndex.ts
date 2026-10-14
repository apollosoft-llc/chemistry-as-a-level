import { Chapter } from "../types";
import { CHAPTERS_DATA } from "./chaptersData";
import { MORE_CHAPTERS_DATA } from "./moreChaptersData";

export const ALL_CHAPTERS: Chapter[] = [
  ...CHAPTERS_DATA,
  ...MORE_CHAPTERS_DATA,
];

export function getChapterByNumber(num: number): Chapter | undefined {
  return ALL_CHAPTERS.find((c) => c.number === num);
}

export function getChaptersByLevel(level: "AS" | "A2" | "ALL"): Chapter[] {
  if (level === "ALL") return ALL_CHAPTERS;
  return ALL_CHAPTERS.filter((c) => c.level === level);
}
