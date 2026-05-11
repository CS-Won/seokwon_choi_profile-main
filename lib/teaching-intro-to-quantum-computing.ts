export type IqcScheduleRow = {
  week: string
  topic: string
  summary: string
  slideHref?: string
  materialHref?: string
}

export const IQC_SCHEDULE: IqcScheduleRow[] = [
  {
    week: "0",
    topic: "Orientation",
    summary:
      "Why quantum computers exist (Moore wall, Strong Church–Turing limits), where they're already useful (finance, QML), and a roadmap of this 11-week course.",
  },
  {
    week: "1",
    topic: "What is a quantum computer?",
    summary:
      "Quanta, superposition, and entanglement at a beginner-friendly level. Classical vs. quantum information, NISQ era, and what quantum advantage actually means.",
  },
  {
    week: "2",
    topic: "Math for quantum computing (1)",
    summary:
      "Linear algebra tour: vectors, inner products, matrices, eigenvalues, diagonalization, trace, special matrix classes, tensor products, and Dirac notation.",
  },
  {
    week: "3",
    topic: "Math for quantum computing (2)",
    summary:
      "From polarized light to qubits. Normalization, complex amplitudes, global phase, the Bloch sphere, multi-qubit states, pure vs. mixed states, and the density operator.",
  },
  {
    week: "4",
    topic: "Quantum circuits (1)",
    summary:
      "Classical logic gates → quantum gates. Hadamard, Pauli X/Y/Z, S/T phase gates, CNOT, SWAP. How rotations on the Bloch sphere correspond to single-qubit gates.",
  },
  {
    week: "5",
    topic: "Quantum circuits (2)",
    summary:
      "Tensor-product picture of multi-qubit gates, Bell states, the no-cloning theorem, and a step-by-step derivation of quantum teleportation as a circuit.",
  },
  {
    week: "6",
    topic: "Quantum Fourier transform (1)",
    summary:
      "Fourier series intuition. Vectors, basis, orthogonality. Functions as vectors with a sin/cos basis. The continuous Fourier transform as a setup for QFT.",
  },
  {
    week: "7",
    topic: "Quantum Fourier transform (2)",
    summary:
      "DFT, the QFT as a unitary on n qubits, the canonical QFT circuit with controlled phase rotations, and the time-complexity gap between DFT, FFT, and QFT.",
  },
  {
    week: "8",
    topic: "Deutsch–Jozsa algorithm",
    summary:
      "Quantum advantage and complexity classes (P, NP, BQP), oracles and query complexity, quantum parallelism via U_f, phase kickback, Deutsch and Deutsch–Jozsa circuits.",
  },
  {
    week: "9",
    topic: "Shor's algorithm",
    summary:
      "RSA in a nutshell, the period-finding subroutine, and how Shor uses QFT to factor large integers in polynomial time — with the continued-fraction post-processing.",
  },
  {
    week: "10",
    topic: "Quantum machine learning",
    summary:
      "From classical neural nets to QNNs. Data encodings (basis, amplitude, angle, Hamiltonian), variational circuits, the parameter-shift rule, and QCNNs.",
  },
]

export function getIqcWeekRow(week: string): IqcScheduleRow | undefined {
  return IQC_SCHEDULE.find((r) => r.week === week)
}
