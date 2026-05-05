import { COURSES, type Track } from "@/lib/curriculum-courses"
import { profSuffix } from "@/lib/coursework-professors"

export type CourseKey = keyof typeof COURSES

/**
 * Newest year first; within a year, Physics → Quantum Science → Math → ECE;
 * order within year/track follows the curriculum grid.
 */
export const COURSEWORK_ORDER: CourseKey[] = [
  "labOptics",
  "introSci",
  "qmbQiG",
  "groupTheory",
  "circ2",
  "sigAnalysis",
  "digImg",
  "physB1",
  "introQcG",
  "advQmlG",
  "diffGeom",
  "basicCirc",
  "circ1",
  "mech",
  "qm12",
  "em12",
  "physA1",
  "qInf",
  "qComp",
  "linAlg",
  "advCalc",
  "ml",
  "digLogic",
  "digLabs",
  "nlp",
  "finEng",
  "deepLearn",
  "genPhys",
  "stats",
  "calc",
  "compSys",
]

const TRACK_INDEX: Record<Track, number> = {
  physics: 0,
  quantum: 1,
  math: 2,
  ece: 3,
}

/** Year for sorting (higher = more recent). Military ≈ 2022. */
const COURSE_YEAR: Record<CourseKey, number> = {
  genPhys: 2021,
  mech: 2024,
  qm12: 2024,
  em12: 2024,
  physA1: 2024,
  introQc: 2025,
  qmTut: 2025,
  recsys: 2025,
  qdyn: 2025,
  physB1: 2025,
  labOptics: 2026,
  introSci: 2026,
  qInf: 2024,
  qComp: 2024,
  introQcG: 2025,
  advQmlG: 2025,
  qmbQiG: 2026,
  stats: 2021,
  calc: 2021,
  linAlg: 2024,
  advCalc: 2024,
  diffGeom: 2025,
  groupTheory: 2026,
  compSys: 2021,
  nlp: 2022,
  finEng: 2022,
  deepLearn: 2022,
  ml: 2024,
  digLogic: 2024,
  digLabs: 2024,
  basicCirc: 2025,
  circ1: 2025,
  circ2: 2026,
  sigAnalysis: 2026,
  digImg: 2026,
}

const COURSE_TRACK: Record<CourseKey, Track> = {
  genPhys: "physics",
  mech: "physics",
  qm12: "physics",
  em12: "physics",
  physA1: "physics",
  introQc: "physics",
  qmTut: "physics",
  recsys: "physics",
  qdyn: "physics",
  physB1: "physics",
  labOptics: "physics",
  introSci: "physics",
  qInf: "quantum",
  qComp: "quantum",
  introQcG: "quantum",
  advQmlG: "quantum",
  qmbQiG: "quantum",
  stats: "math",
  calc: "math",
  linAlg: "math",
  advCalc: "math",
  diffGeom: "math",
  groupTheory: "math",
  compSys: "ece",
  nlp: "ece",
  finEng: "ece",
  deepLearn: "ece",
  ml: "ece",
  digLogic: "ece",
  digLabs: "ece",
  basicCirc: "ece",
  circ1: "ece",
  circ2: "ece",
  sigAnalysis: "ece",
  digImg: "ece",
}

function orderInTrack(key: CourseKey): number {
  return COURSEWORK_ORDER.indexOf(key)
}

/** Global sort: year desc, then track, then grid order. */
export function getSortedCourseworkKeys(): CourseKey[] {
  const keys = [...COURSEWORK_ORDER]
  return keys.sort((a, b) => {
    const ya = COURSE_YEAR[a]
    const yb = COURSE_YEAR[b]
    if (yb !== ya) return yb - ya
    const ta = TRACK_INDEX[COURSE_TRACK[a]]
    const tb = TRACK_INDEX[COURSE_TRACK[b]]
    if (ta !== tb) return ta - tb
    return orderInTrack(a) - orderInTrack(b)
  })
}

export function getCourseworkMetaLine(key: CourseKey): string {
  const y = COURSE_YEAR[key]
  if (y === 2026) return "2026, UC Santa Barbara"
  return `${y}, Yonsei Univ.`
}

/** Card title: full name + (Prof. …) — 이름은 `coursework-professors.ts` */
export function getCourseworkCardTitle(key: CourseKey): string {
  const c = COURSES[key]
  const suf = profSuffix(key)
  if (c.graduate) {
    if (key === "introQcG") return `Intro to Quantum Computing (G) ${suf}`
    if (key === "advQmlG") return `Adv. Quantum Machine Learning (G) ${suf}`
    if (key === "qmbQiG")
      return `Quantum Many-Body Physics and Quantum Information (G) ${suf}`
  }
  return `${c.full} ${suf}`
}
