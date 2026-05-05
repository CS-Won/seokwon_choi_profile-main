import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quantum Mechanics I — Tutor sessions (Spring 2025) | Seokwon Choi",
  description:
    "Eight-week tutorial outline for Quantum Mechanics I (Griffiths), aligned with the Yonsei PHY3101 course plan — including midterm and final problem-solving weeks.",
}

const SCHEDULE: {
  week: string
  topic: string
  summary: string
  slideHref?: string
  materialHref?: string
}[] = [
  {
    week: "1",
    topic: "Introduction and the Schrödinger picture",
    summary:
      "Motivation for wave mechanics and the structure of the course (Griffiths Ch. 1; Feynman Vol. III Ch. 1–3 as optional perspective). The time-dependent and time-independent Schrödinger equations, normalization, probability density and current, and the physical interpretation of the wave function.",
  },
  {
    week: "2",
    topic: "One-dimensional potentials",
    summary:
      "Bound and scattering problems in 1D (Griffiths Ch. 2): infinite square well, finite wells, the harmonic oscillator preview, delta potentials, and qualitative features of quantization—energy levels, orthogonality of stationary states, and tunneling in simple models.",
  },
  {
    week: "3",
    topic: "Formalism: Hilbert space, observables, uncertainty",
    summary:
      "Mathematical backbone of quantum theory (linear-algebra appendix + Griffiths Ch. 3): state vectors in Hilbert space, operators representing observables, eigenvalues and measurement postulates, Hermitian / unitary operators, commutators, the generalized statistical interpretation, and the Heisenberg uncertainty principle in operator form.",
  },
  {
    week: "4",
    topic: "Midterm exam — worked practice problems",
    summary:
      "Problem-solving session oriented to the midterm: expected-style questions drawn from the material covered in the main course through the formalism and introductory 1D quantum mechanics (typical emphasis on interpretation of ψ, solving textbook 1D models, expectation values, commutators, and uncertainty estimates). We work through representative calculations and discuss common pitfalls.",
  },
  {
    week: "5",
    topic: "Harmonic oscillator and WKB",
    summary:
      "The quantum harmonic oscillator in algebraic and analytic forms (Griffiths Sec. 2.3): ladder operators, spectrum, and wavefunctions. Introduction to semiclassical ideas via the WKB approximation (Griffiths Ch. 9) for slowly varying potentials and connection formulas at turning points.",
  },
  {
    week: "6",
    topic: "Three dimensions and the hydrogen atom",
    summary:
      "Extension to 3D (Griffiths Sec. 4.1–4.2): separation of variables in Cartesian and spherical coordinates, central potentials, angular structure of hydrogen-like bound states, quantum numbers, and the physical interpretation of the radial probability density.",
  },
  {
    week: "7",
    topic: "Angular momentum and rotation",
    summary:
      "Orbital angular momentum operators, eigenvalues of L² and Lz, spherical harmonics, and how rotational symmetry organizes the spectrum (Griffiths Sec. 4.3). Connecting angular momentum quantum numbers to the hydrogen atom and to the general formulation of QM in three dimensions.",
  },
  {
    week: "8",
    topic: "Final exam — worked practice problems",
    summary:
      "Problem-solving session oriented to the final: expected-style questions spanning the full term—1D and 3D systems, harmonic oscillator and WKB sketches, hydrogen and angular momentum, and formalism-heavy items (operators, commutators, uncertainty, measurement probabilities). Focus on exam-style time management and checking units and boundary conditions.",
  },
]

function MaterialCell({
  slideHref = "#",
  materialHref = "#",
}: {
  slideHref?: string
  materialHref?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Link
        href={slideHref}
        className="font-medium text-accent underline underline-offset-2 hover:text-accent/90"
      >
        [Slide]
      </Link>
      <Link
        href={materialHref}
        className="font-medium text-accent underline underline-offset-2 hover:text-accent/90"
      >
        [Material]
      </Link>
    </div>
  )
}

export default function QuantumMechanicsTutorPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="mb-10 border-b border-border pb-6">
          <p className="text-lg font-semibold tracking-tight text-foreground">
            <Link href="/about" className="hover:text-accent">
              Seokwon Choi
            </Link>
          </p>
          <nav className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/cv" className="hover:text-foreground">
              CV
            </Link>
            <Link href="/publications" className="hover:text-foreground">
              Publications
            </Link>
            <span className="text-foreground">
              <Link href="/teaching" className="font-medium hover:text-accent">
                Teaching
              </Link>{" "}
              <span className="font-normal text-muted-foreground">(current)</span>
            </span>
            <Link href="/interests" className="hover:text-foreground">
              Interests
            </Link>
          </nav>
        </header>

        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Quantum Mechanics (Tutor)
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Spring 2025 · Yonsei University · Tutorial aligned with Quantum Mechanics
          I (PHY3101); eight-week condensed schedule based on the official course
          syllabus.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course details
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-foreground md:text-base">
            <p>
              These sessions support{" "}
              <span className="font-medium">Quantum Mechanics (1)</span> as offered
              in the physics major: building fluency with the wave-function
              formulation, the operator formalism, and standard exactly solvable
              models in one and three dimensions. The pacing follows the topics and
              chapter references in the department&apos;s course plan (Griffiths,{" "}
              <cite className="not-italic">
                Introduction to Quantum Mechanics
              </cite>
              , 3rd ed.), compressed into{" "}
              <span className="font-medium">eight tutorial weeks</span> for
              discussion and exercises.
            </p>
            <p>
              <span className="font-medium">Main lecture:</span> Prof. Hyun
              Seung-jun (PHY3101-01).{" "}
              <span className="font-medium">Tutorial:</span> Seokwon Choi. Course
              announcements, primary materials, and deadlines are distributed through
              the official channels (e.g., LearnUs); this page is only a concise
              English outline of how the tutor meetings are organized.
            </p>
            <p>
              Weeks <span className="font-medium">4</span> and{" "}
              <span className="font-medium">8</span> are dedicated to{" "}
              <span className="font-medium">
                exam-style problem solving
              </span>
              —midterm-focused and final-focused practice, respectively—rather than
              introducing new theory.
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Prerequisites
          </h2>
          <p className="text-sm leading-relaxed text-foreground md:text-base">
            As in the main course catalog: classical mechanics and calculus at the
            level of a physics major; comfort with ordinary differential equations
            and basic linear algebra is essential. The tutorial reviews mathematical
            tools as needed but assumes students are following the primary lectures
            in parallel.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Instructor
          </h2>
          <p className="text-sm text-foreground md:text-base">
            <span className="font-medium">Seokwon Choi</span> (tutor)
            <br />
            <a
              href="mailto:seokwon0106@yonsei.ac.kr"
              className="text-accent underline underline-offset-4 hover:text-accent/90"
            >
              seokwon0106@yonsei.ac.kr
            </a>
            <br />
            <span className="text-muted-foreground">Yonsei University</span>
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course structure
          </h2>
          <ul className="list-inside list-disc space-y-1 text-sm text-foreground md:text-base">
            <li>
              Weeks 1–3 and 5–7 — core topics mapped from the lecture syllabus
            </li>
            <li>
              Week 4 — midterm-oriented expected problems (worked solutions and
              discussion)
            </li>
            <li>
              Week 8 — final-oriented expected problems (worked solutions and
              discussion)
            </li>
            <li>
              Primary textbook: Griffiths (3rd ed.); supplementary reading often
              includes Shankar and Feynman Lectures Vol. III, as in the course plan
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Schedule
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2.5 font-semibold text-foreground">
                    Week
                  </th>
                  <th className="px-3 py-2.5 font-semibold text-foreground">
                    Topic
                  </th>
                  <th className="px-3 py-2.5 font-semibold text-foreground">
                    Summary
                  </th>
                  <th className="px-3 py-2.5 font-semibold text-foreground">
                    Material
                  </th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((row) => (
                  <tr
                    key={row.week}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="whitespace-nowrap px-3 py-2.5 align-top text-muted-foreground">
                      {row.week}
                    </td>
                    <td className="px-3 py-2.5 align-top font-medium text-foreground">
                      {row.topic}
                    </td>
                    <td className="px-3 py-2.5 align-top text-muted-foreground">
                      {row.summary}
                    </td>
                    <td className="px-3 py-2.5 align-top">
                      <MaterialCell
                        slideHref={row.slideHref}
                        materialHref={row.materialHref}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Seokwon Choi.{" "}
          <Link href="/teaching" className="text-accent hover:underline">
            Back to Teaching &amp; Coursework
          </Link>
        </p>
      </div>
    </main>
  )
}
