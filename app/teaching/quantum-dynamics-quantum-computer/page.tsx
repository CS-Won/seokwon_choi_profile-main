import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quantum Dynamics using Quantum Computer (Spring 2025) | Seokwon Choi",
  description:
    "Lecture materials — quantum quench dynamics, XXZ / Heisenberg spin chains, and error mitigation on IBM quantum hardware (QISCA, Spring 2025).",
}

const SLIDE_HREF =
  "/teaching/quantum-dynamics-qc/CHOISEOKWON_yonsei_IBM_Aug27th.pptx"
const PDF_HREF = "/teaching/quantum-dynamics-qc/Spin_Chain_Model_Yonsei.pdf"

const SCHEDULE: {
  week: string
  topic: string
  summary: string
  slideHref?: string
  materialHref?: string
}[] = [
  {
    week: "0",
    topic: "Introduction",
    summary:
      "Motivation for simulating many-body quantum dynamics on near-term hardware: noise limits and the role of quantum error mitigation before fault tolerance. Overview of quench dynamics in spin chains as a concrete setting where circuits, mitigation, and observables come together—aligned with the Yonsei–IBM lecture materials.",
    slideHref: SLIDE_HREF,
    materialHref: PDF_HREF,
  },
  {
    week: "1",
    topic: "XXZ spin chain",
    summary:
      "The XXZ / Heisenberg spin-chain Hamiltonian as a standard model for correlated quantum matter; parameters, symmetries, and how quenches (sudden changes of couplings or fields) drive non-equilibrium dynamics relevant to the manuscript discussion.",
    slideHref: SLIDE_HREF,
    materialHref: PDF_HREF,
  },
  {
    week: "2",
    topic: "Implementation of time evolution of the Hamiltonian",
    summary:
      "Trotterized real-time evolution: decomposing the propagator into gate sequences suitable for superconducting processors; depth vs. accuracy trade-offs when implementing long-time dynamics on IBM systems.",
    slideHref: SLIDE_HREF,
    materialHref: PDF_HREF,
  },
  {
    week: "3",
    topic: "Quantum error mitigation",
    summary:
      "Mitigating device noise for utility-scale simulations: zero-noise extrapolation and related strategies (including self-mitigation ideas in the notes), and when they remain reliable for deep circuits with many two-qubit gates.",
    slideHref: SLIDE_HREF,
    materialHref: PDF_HREF,
  },
  {
    week: "4",
    topic: "Tensor network and entanglement entropy",
    summary:
      "Why entanglement growth after a quench matters; connecting tensor-network / theoretical pictures of entanglement entropy with what can be estimated or cross-checked on hardware when mitigation is applied.",
    slideHref: SLIDE_HREF,
    materialHref: PDF_HREF,
  },
  {
    week: "5",
    topic: "Observable measurement",
    summary:
      "Measuring local and global observables in practice: statistical uncertainty, readout effects, and combining mitigation with measurement protocols to compare results against classical or tensor-network benchmarks.",
    slideHref: SLIDE_HREF,
    materialHref: PDF_HREF,
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

export default function QuantumDynamicsQuantumComputerPage() {
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
          Quantum Dynamics using Quantum Computer (Lecturer)
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Spring 2025 · QISCA · Slides and manuscript below follow the Yonsei–IBM
          quantum simulation thread (spin-chain quench dynamics, mitigation, and
          observables).
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course details
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-foreground md:text-base">
            <p>
              This module connects condensed-matter style questions—how an isolated
              spin chain evolves after a quench—with what today&apos;s superconducting
              processors can actually execute. The emphasis is not only on writing
              down a Hamiltonian, but on the full pipeline: Trotterized time evolution,
              accumulating errors in deep circuits, and recovering trustworthy
              estimates through quantum error mitigation.
            </p>
            <p>
              The slide deck and PDF manuscript are the primary references for this
              page. They discuss Heisenberg / XXZ chains, large-scale simulations on IBM
              Quantum hardware, and strategies such as zero-noise extrapolation and
              self-mitigation-style approaches that aim for utility-scale accuracy. The
              narrative also highlights entanglement entropy as a diagnostic and the
              practical challenges of measuring observables on noisy devices—mirroring
              the arc of the introductory quantum-computing course, but grounded in
              many-body dynamics rather than textbook algorithms alone.
            </p>
            <p>
              <span className="font-medium text-foreground">Primary materials:</span>{" "}
              <Link
                href={SLIDE_HREF}
                className="font-medium text-accent underline underline-offset-4 hover:text-accent/90"
              >
                Slides (PowerPoint, IBM / Yonsei)
              </Link>
              {" · "}
              <Link
                href={PDF_HREF}
                className="font-medium text-accent underline underline-offset-4 hover:text-accent/90"
              >
                Manuscript (PDF)
              </Link>
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Prerequisites
          </h2>
          <p className="text-sm leading-relaxed text-foreground md:text-base">
            Core linear algebra and basic quantum mechanics (states, operators,
            commutators) are assumed. Familiarity with quantum circuits and a high-level
            picture of noise on NISQ devices is helpful; concepts are tied to the
            manuscript notation where possible. Prior exposure to tensor networks or
            many-body physics is optional but useful for Section 4.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Instructor
          </h2>
          <p className="text-sm text-foreground md:text-base">
            <span className="font-medium">Seokwon Choi</span>
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
              Conceptual outline — mapped to the slide deck sections and the PDF
            </li>
            <li>
              Downloadable materials — same [Slide] / [Material] links in the schedule
              table
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
