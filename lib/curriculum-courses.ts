/** Course entries: grid chips link here via `id` when `abbrev` is set. */
export type CourseEntry = {
  id: string
  /** Shown in grid cells */
  short: string
  /** Full name in Coursework list */
  full: string
  /** If true, chip is a link to #course-{id} */
  abbrev: boolean
  /** (G) graduate — shown in coursework line */
  graduate?: boolean
}

export const COURSES: Record<string, CourseEntry> = {
  genPhys: {
    id: "gen-phys",
    short: "Gen. Physics",
    full: "General Physics",
    abbrev: true,
  },
  mech: {
    id: "mech-12",
    short: "Mech. I & II",
    full: "Mechanics I, II",
    abbrev: true,
  },
  qm12: {
    id: "qm-12",
    short: "QM I & II",
    full: "Quantum Mechanics I, II",
    abbrev: true,
  },
  em12: {
    id: "em-12",
    short: "E&M I & II",
    full: "Electricity and Magnetism I, II",
    abbrev: true,
  },
  physA1: {
    id: "phys-lab-a1",
    short: "Phys. Lab A-1",
    full: "Physics Lab A-1",
    abbrev: true,
  },
  introQc: {
    id: "intro-qc",
    short: "Intro to QC†",
    full: "Introduction to Quantum Computing",
    abbrev: true,
  },
  qmTut: {
    id: "qm-tutor",
    short: "QM†",
    full: "Quantum Mechanics (tutor)",
    abbrev: true,
  },
  recsys: {
    id: "recsys-hhl",
    short: "RecSys / HHL†",
    full: "Recommender system: through HHL",
    abbrev: true,
  },
  qdyn: {
    id: "quantum-dynamics-qc",
    short: "QDyn (QC)†",
    full: "Quantum Dynamics using Quantum Computer",
    abbrev: true,
  },
  physB1: {
    id: "phys-lab-b1",
    short: "Phys. Lab B-1",
    full: "Physics Lab B-1",
    abbrev: true,
  },
  labOptics: {
    id: "lab-optics",
    short: "Lab Optics",
    full: "Lab Optics",
    abbrev: false,
  },
  introSci: {
    id: "intro-sci-comp",
    short: "Intro Sci. Comp.",
    full: "Introductory Scientific Computing",
    abbrev: true,
  },
  qInf: {
    id: "q-informatics",
    short: "Q. Informatics",
    full: "Quantum Informatics",
    abbrev: true,
  },
  qComp: {
    id: "q-computation",
    short: "Q. Computation",
    full: "Quantum Computations",
    abbrev: true,
  },
  introQcG: {
    id: "intro-qc-grad",
    short: "Intro to QC (G)",
    full: "Intro to Quantum Computing",
    graduate: true,
    abbrev: true,
  },
  advQmlG: {
    id: "adv-qml-grad",
    short: "Adv. QML (G)",
    full: "Adv. Quantum Machine Learning",
    graduate: true,
    abbrev: true,
  },
  qmbQiG: {
    id: "qmb-qi-grad",
    short: "QMB & QI (G)",
    full: "Quantum Many-Body Physics and Quantum Information",
    graduate: true,
    abbrev: true,
  },
  stats: {
    id: "stats",
    short: "Stats",
    full: "Statistics",
    abbrev: true,
  },
  calc: {
    id: "calc",
    short: "Calc",
    full: "Calculus",
    abbrev: true,
  },
  linAlg: {
    id: "lin-alg",
    short: "Lin. Alg.",
    full: "Linear Algebra",
    abbrev: true,
  },
  advCalc: {
    id: "adv-calc",
    short: "Adv. Calc.",
    full: "Advanced Calculus I, II",
    abbrev: true,
  },
  diffGeom: {
    id: "diff-geom",
    short: "Diff. Geom.",
    full: "Differential Geometry",
    abbrev: true,
  },
  groupTheory: {
    id: "group-theory",
    short: "Group Theory",
    full: "Group Theory",
    abbrev: false,
  },
  compSys: {
    id: "comp-sys-phys",
    short: "Comp. Sys. & Phys. Comp.",
    full: "Computer System and Physical Computing",
    abbrev: true,
  },
  nlp: {
    id: "nlp-chatgpt",
    short: "NLP & ChatGPT",
    full: "Natural Language Processing and ChatGPT",
    abbrev: true,
  },
  finEng: {
    id: "fin-eng",
    short: "Fin. Eng.",
    full: "Intro to Financial Engineering",
    abbrev: true,
  },
  deepLearn: {
    id: "deep-learning",
    short: "Deep Learning",
    full: "Intro to Deep Learning and Application",
    abbrev: true,
  },
  ml: {
    id: "ml",
    short: "ML",
    full: "Machine Learning",
    abbrev: true,
  },
  digLogic: {
    id: "digital-logic",
    short: "Digital Logic",
    full: "Digital Logic Circuits",
    abbrev: true,
  },
  digLabs: {
    id: "digital-labs",
    short: "Digital Labs",
    full: "Introductory Digital Labs",
    abbrev: true,
  },
  basicCirc: {
    id: "basic-circuit",
    short: "Basic Circuit Theory",
    full: "Basic Circuit Theory",
    abbrev: false,
  },
  circ1: {
    id: "circuits-1",
    short: "Circuits I",
    full: "Electronic Circuits I",
    abbrev: true,
  },
  circ2: {
    id: "circuits-2",
    short: "Circuits II",
    full: "Electronic Circuits II",
    abbrev: true,
  },
  sigAnalysis: {
    id: "signal-analysis",
    short: "Signal Analysis",
    full: "Signal Analysis",
    abbrev: false,
  },
  digImg: {
    id: "digital-image",
    short: "Digital Image",
    full: "Intro Digital Image",
    abbrev: true,
  },
}

export type Track = "physics" | "quantum" | "math" | "ece"

export const GRID_ROWS: {
  track: Track
  rowLabel: string
  /** Five columns: 2021, military, 2024, 2025, 2026 (EAP at UCSB) */
  cells: (readonly (keyof typeof COURSES | null)[])[]
}[] = [
  {
    track: "physics",
    rowLabel: "Physics",
    cells: [
      ["genPhys"],
      [],
      ["mech", "qm12", "em12", "physA1"],
      ["introQc", "qmTut", "recsys", "qdyn", "physB1"],
      ["labOptics", "introSci"],
    ],
  },
  {
    track: "quantum",
    rowLabel: "Quantum Science",
    cells: [[], [], ["qInf", "qComp"], ["introQcG", "advQmlG"], ["qmbQiG"]],
  },
  {
    track: "math",
    rowLabel: "Mathematics",
    cells: [["stats", "calc"], [], ["linAlg", "advCalc"], ["diffGeom"], ["groupTheory"]],
  },
  {
    track: "ece",
    rowLabel: "Electrical and Computer Engineering",
    cells: [
      ["compSys"],
      ["nlp", "finEng", "deepLearn"],
      ["ml", "digLogic", "digLabs"],
      ["basicCirc", "circ1"],
      ["circ2", "sigAnalysis", "digImg"],
    ],
  },
]
