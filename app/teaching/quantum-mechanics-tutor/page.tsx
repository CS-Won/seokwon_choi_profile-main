import type { Metadata } from "next"
import Link from "next/link"
import { QMT_SCHEDULE } from "@/lib/teaching-quantum-mechanics-tutor"

export const metadata: Metadata = {
  title: "Quantum Mechanics I — Tutor sessions (Spring 2025) | Seokwon Choi",
  description:
    "Eight-week tutorial outline for Quantum Mechanics I (Yonsei PHY3101) following Griffiths chapters 1–4, with worked midterm and final exam solutions.",
}

function WeekPageLink({ week }: { week: string }) {
  const label = `week_${week}_page`
  return (
    <Link
      href={`/teaching/quantum-mechanics-tutor/week/${week}`}
      className="font-mono text-sm font-medium text-accent underline underline-offset-2 hover:text-accent/90"
    >
      {label}
    </Link>
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
          Spring 2025 · Yonsei PHY3101 · Eight-week tutorial covering
          Griffiths chapters 1–4, with full worked midterm and final exam
          solutions in Weeks 4 and 8.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course details
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-foreground md:text-base">
            <p>
              These tutorial sessions support{" "}
              <span className="font-medium">Quantum Mechanics (1)</span> in the
              physics major. The content follows{" "}
              <em>Griffiths &amp; Schroeter, Introduction to Quantum
              Mechanics</em> (3rd ed.), chapters 1–4: the wave function, the
              time-independent Schrödinger equation in one dimension, the
              Hilbert-space formalism, and quantum mechanics in three
              dimensions (hydrogen and angular momentum).
            </p>
            <p>
              Weeks <span className="font-medium">4</span> and{" "}
              <span className="font-medium">8</span> are dedicated to
              exam-style problem solving, using the actual Spring-2024
              midterm and final papers as the source material. Each problem
              is solved in detail with attention to boundary conditions,
              matching, and standard pitfalls.
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Reference
          </h2>
          <p className="text-xs text-muted-foreground md:text-sm">
            Primary text and exam papers used to build the weekly notes
            (APA 7th edition, hanging indent).
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p className="ps-8 -indent-8">
              Griffiths, D. J., &amp; Schroeter, D. F. (2018).{" "}
              <em>Introduction to quantum mechanics</em> (3rd ed.). Cambridge
              University Press.{" "}
              https://doi.org/10.1017/9781316995433
            </p>
            <p className="ps-8 -indent-8">
              Department of Physics, Yonsei University. (2024).{" "}
              <em>PHY3101 — Quantum Mechanics I, midterm examination</em>{" "}
              [Course examination]. Yonsei University.
            </p>
            <p className="ps-8 -indent-8">
              Department of Physics, Yonsei University. (2024).{" "}
              <em>PHY3101 — Quantum Mechanics I, final examination</em>{" "}
              [Course examination]. Yonsei University.
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Prerequisites
          </h2>
          <p className="text-sm leading-relaxed text-foreground md:text-base">
            Calculus through partial differential equations, basic linear
            algebra (eigenvalues, Hermitian matrices), and classical
            mechanics at the level of a physics major. The tutorial reviews
            mathematical tools as needed but assumes students are following
            the primary lectures in parallel.
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
              Weeks 1–3 and 5–7 — theory mapped from Griffiths chapters 1–4
            </li>
            <li>
              Week 4 — midterm-oriented worked solutions (Spring 2024 paper)
            </li>
            <li>
              Week 8 — final-oriented worked solutions (Spring 2024 paper)
            </li>
            <li>
              Weekly pages — use{" "}
              <span className="font-mono text-xs md:text-sm">week_n_page</span>{" "}
              in the schedule for expanded notes with figures, derivations,
              and full exam solutions
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
                {QMT_SCHEDULE.map((row) => (
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
