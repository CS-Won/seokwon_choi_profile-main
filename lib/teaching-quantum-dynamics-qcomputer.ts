export const QDYN_SLIDE_HREF =
  "/teaching/quantum-dynamics-qc/CHOISEOKWON_yonsei_IBM_Aug27th.pptx"
export const QDYN_PDF_HREF =
  "/teaching/quantum-dynamics-qc/Spin_Chain_Model_Yonsei.pdf"

export type QdynScheduleRow = {
  week: string
  topic: string
  summary: string
  slideHref?: string
  materialHref?: string
}

export const QDYN_SCHEDULE: QdynScheduleRow[] = [
  {
    week: "0",
    topic: "Introduction",
    summary:
      "Motivation for simulating many-body quantum dynamics on near-term hardware: noise limits and the role of quantum error mitigation before fault tolerance. Overview of quench dynamics in spin chains as a concrete setting where circuits, mitigation, and observables come together—aligned with the Yonsei–IBM lecture materials.",
    slideHref: QDYN_SLIDE_HREF,
    materialHref: QDYN_PDF_HREF,
  },
  {
    week: "1",
    topic: "XXZ spin chain",
    summary:
      "The XXZ / Heisenberg spin-chain Hamiltonian as a standard model for correlated quantum matter; parameters, symmetries, and how quenches (sudden changes of couplings or fields) drive non-equilibrium dynamics relevant to the manuscript discussion.",
    slideHref: QDYN_SLIDE_HREF,
    materialHref: QDYN_PDF_HREF,
  },
  {
    week: "2",
    topic: "Implementation of time evolution of the Hamiltonian",
    summary:
      "Trotterized real-time evolution: decomposing the propagator into gate sequences suitable for superconducting processors; depth vs. accuracy trade-offs when implementing long-time dynamics on IBM systems.",
    slideHref: QDYN_SLIDE_HREF,
    materialHref: QDYN_PDF_HREF,
  },
  {
    week: "3",
    topic: "Quantum error mitigation",
    summary:
      "Mitigating device noise for utility-scale simulations: zero-noise extrapolation and related strategies (including self-mitigation ideas in the notes), and when they remain reliable for deep circuits with many two-qubit gates.",
    slideHref: QDYN_SLIDE_HREF,
    materialHref: QDYN_PDF_HREF,
  },
  {
    week: "4",
    topic: "Tensor network and entanglement entropy",
    summary:
      "Why entanglement growth after a quench matters; connecting tensor-network / theoretical pictures of entanglement entropy with what can be estimated or cross-checked on hardware when mitigation is applied.",
    slideHref: QDYN_SLIDE_HREF,
    materialHref: QDYN_PDF_HREF,
  },
  {
    week: "5",
    topic: "Observable measurement",
    summary:
      "Measuring local and global observables in practice: statistical uncertainty, readout effects, and combining mitigation with measurement protocols to compare results against classical or tensor-network benchmarks.",
    slideHref: QDYN_SLIDE_HREF,
    materialHref: QDYN_PDF_HREF,
  },
]

export function getQdynWeekRow(week: string): QdynScheduleRow | undefined {
  return QDYN_SCHEDULE.find((r) => r.week === week)
}
