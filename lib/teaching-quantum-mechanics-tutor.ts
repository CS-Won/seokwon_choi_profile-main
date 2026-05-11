export type QmtScheduleRow = {
  week: string
  topic: string
  summary: string
}

export const QMT_SCHEDULE: QmtScheduleRow[] = [
  {
    week: "1",
    topic: "The wave function (Griffiths Ch. 1)",
    summary:
      "What ψ actually means: the Schrödinger equation, Born probability density, normalization preserved by time evolution, expectation values, and the position–momentum uncertainty principle in its simplest form.",
  },
  {
    week: "2",
    topic: "Infinite & finite square wells (Griffiths Ch. 2.1–2.2, 2.6)",
    summary:
      "Time-independent Schrödinger equation, stationary states, and bound states of the infinite square well and the finite square well — including the transcendental equations that fix the bound-state energies.",
  },
  {
    week: "3",
    topic: "Harmonic oscillator, free particle, scattering (Griffiths Ch. 2.3–2.5)",
    summary:
      "The quantum harmonic oscillator with ladder operators, the free particle and Gaussian wave packets, the delta-function potential, and step / barrier scattering — reflection and transmission coefficients.",
  },
  {
    week: "4",
    topic: "Midterm — worked practice problems",
    summary:
      "Full solutions to the Spring 2024 midterm: infinite & finite wells and a step-bottom potential, step-potential scattering for E < V₀ and E > V₀ with R+T = 1, the harmonic oscillator via ladder operators, and a 3-level matrix Hamiltonian — eigenvalues, eigenstates, and time evolution.",
  },
  {
    week: "5",
    topic: "Formalism: Hilbert space & operators (Griffiths Ch. 3)",
    summary:
      "Hilbert space, Dirac notation, Hermitian and unitary operators, the spectral theorem and the generalized statistical interpretation, the generalized uncertainty principle, and time evolution as a unitary on |ψ⟩.",
  },
  {
    week: "6",
    topic: "Schrödinger equation in 3D — hydrogen (Griffiths Ch. 4.1–4.2)",
    summary:
      "Separation of variables in spherical coordinates, the radial equation, hydrogen-atom bound states (Bohr levels), quantum numbers (n, ℓ, mℓ), and the structure of the radial probability density.",
  },
  {
    week: "7",
    topic: "Angular momentum & spin (Griffiths Ch. 4.3–4.4)",
    summary:
      "Commutation relations for L, simultaneous eigenstates of L² and L_z, ladder operators L± and matrix representations, spin-½ via Pauli matrices, and addition of angular momentum via Clebsch–Gordan.",
  },
  {
    week: "8",
    topic: "Final — worked practice problems",
    summary:
      "Full solutions to the Spring 2024 final: angular-momentum ladder identities and the Lx matrix for ℓ = 1, spin–orbit coupling H = (ω/ℏ) L·S with degeneracies and measurement probabilities, the 3D isotropic harmonic oscillator solved via the series method, and a charged particle in a uniform magnetic field (Landau levels).",
  },
]

export function getQmtWeekRow(week: string): QmtScheduleRow | undefined {
  return QMT_SCHEDULE.find((r) => r.week === week)
}
