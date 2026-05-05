import type { CourseKey } from "@/lib/coursework-data"

/**
 * MOP(성적/수강 기록) 등에 나온 담당 교수 성함.
 * `""` 는 아직 없음 → 화면에는 `(Prof.)` 만 표시.
 * 예: mech: "Griffiths" → "Mechanics I, II (Prof. Griffiths)"
 */
export const COURSE_PROFESSORS: Partial<Record<CourseKey, string>> = {
  // 아래에 MOP.pdf 기준으로 채우시면 됩니다. (필요한 행만 남기셔도 됩니다)
  // genPhys: "",
  // mech: "",
  // qm12: "",
  // em12: "",
  // physA1: "",
  // physB1: "",
  // labOptics: "",
  // introSci: "",
  // qInf: "",
  // qComp: "",
  // introQcG: "",
  // advQmlG: "",
  // qmbQiG: "",
  // stats: "",
  // calc: "",
  // linAlg: "",
  // advCalc: "",
  // diffGeom: "",
  // groupTheory: "",
  // compSys: "",
  // nlp: "",
  // finEng: "",
  // deepLearn: "",
  // ml: "",
  // digLogic: "",
  // digLabs: "",
  // basicCirc: "",
  // circ1: "",
  // circ2: "",
  // sigAnalysis: "",
  // digImg: "",
}

export function profSuffix(key: CourseKey): string {
  const p = COURSE_PROFESSORS[key]?.trim()
  if (p) return `(Prof. ${p})`
  return "(Prof.)"
}
