export type RshhlScheduleRow = {
  week: string
  topic: string
  summary: string
}

export const RSHHL_SCHEDULE: RshhlScheduleRow[] = [
  {
    week: "0",
    topic: "Introduction",
    summary:
      "Preference matrices, sparsity, and the low-rank prior. How classical competitive and sampling views frame what “good” recommendations mean (Drineas–Kerenidis–Raghavan).",
  },
  {
    week: "1",
    topic: "HHL algorithm",
    summary:
      "Solving Ax = b on a quantum computer when you only need features of x: Hamiltonian simulation, phase estimation, eigenvalue inversion, and the poly(log N, κ) scaling (Harrow–Hassidim–Lloyd).",
  },
  {
    week: "2",
    topic: "Recommendation problem & classical tools",
    summary:
      "Low-rank approximation, matrix sampling, and fast Monte Carlo / entry sampling schemes that underpin both classical and quantum-inspired pipelines (Frieze–Kannan–Vempala; Achlioptas–McSherry).",
  },
  {
    week: "3",
    topic: "Quantum recommendation (Kerenidis–Prakash)",
    summary:
      "Quantum singular value estimation, binary search tree data structures, and projecting onto the row space without reconstructing the full matrix (Kerenidis–Prakash).",
  },
  {
    week: "4",
    topic: "Quantum-inspired classical algorithm (Tang)",
    summary:
      "ℓ²-norm sampling, the modified FKV viewpoint, and why the exponential-vs-classical gap closes under comparable input access—plus what still separates BQP from PSPACE (Tang).",
  },
]

export function getRshhlWeekRow(week: string): RshhlScheduleRow | undefined {
  return RSHHL_SCHEDULE.find((r) => r.week === week)
}
