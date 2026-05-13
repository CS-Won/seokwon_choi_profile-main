import type { Metadata } from "next"
import Link from "next/link"
import {
  QDYN_SCHEDULE,
  QDYN_PDF_HREF,
  QDYN_SLIDE_HREF,
} from "@/lib/teaching-quantum-dynamics-qcomputer"

export const metadata: Metadata = {
  title: "Quantum Dynamics using Quantum Computer (Spring 2025) | Seokwon Choi",
  description:
    "Lecture materials — quantum quench dynamics, XXZ / Heisenberg spin chains, and error mitigation on IBM quantum hardware (QISCA, Spring 2025).",
}

function WeekPageLink({ week }: { week: string }) {
  const label = `week_${week}_page`
  return (
    <Link
      href={`/teaching/quantum-dynamics-quantum-computer/week/${week}`}
      className="font-mono text-sm font-medium text-accent underline underline-offset-2 hover:text-accent/90"
    >
      {label}
    </Link>
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
            <Link href="/blog" className="hover:text-foreground">
              Blog
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
                href={QDYN_SLIDE_HREF}
                className="font-medium text-accent underline underline-offset-4 hover:text-accent/90"
              >
                Slides (PowerPoint, IBM / Yonsei)
              </Link>
              {" · "}
              <Link
                href={QDYN_PDF_HREF}
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
              Weekly pages — open{" "}
              <span className="font-mono text-xs md:text-sm">week_n_page</span> links
              in the schedule for summaries and per-week [Slide] / [Material] links
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Schedule
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
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
                    Page
                  </th>
                </tr>
              </thead>
              <tbody>
                {QDYN_SCHEDULE.map((row) => (
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
                      <WeekPageLink week={row.week} />
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
