import type { Metadata } from "next"
import Link from "next/link"
import { RSHHL_SCHEDULE } from "@/lib/teaching-recommender-system-hhl"

export const metadata: Metadata = {
  title: "Recommender system: through HHL (Winter 2024) | Seokwon Choi",
  description:
    "Course outline — quantum and quantum-inspired recommendation systems, from the HHL linear-systems algorithm to low-rank matrix sampling (QISCA, Winter 2024).",
}

function WeekPageLink({ week }: { week: string }) {
  const label = `week_${week}_page`
  return (
    <Link
      href={`/teaching/recommender-system-through-hhl/week/${week}`}
      className="font-mono text-sm font-medium text-accent underline underline-offset-2 hover:text-accent/90"
    >
      {label}
    </Link>
  )
}

export default function RecommenderSystemThroughHhlPage() {
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
          Recommender system: through HHL (Lecturer)
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Winter 2024 · QISCA · Weekly notes follow the in-class slide deck; primary
          papers are listed under Reference (APA-style).
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course details
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-foreground md:text-base">
            <p>
              Recommendation systems are among the most visible applications of
              linear algebra at scale: an enormous sparse matrix encodes who likes
              which items, and the platform must surface a few high-value suggestions
              without ever observing the full matrix. The course traces a line from
              classical low-rank and sampling ideas to the quantum algorithm of
              Kerenidis and Prakash (2016), and then to Tang&apos;s (2019)
              quantum-inspired classical analogue — using the HHL linear-systems
              algorithm (Harrow, Hassidim, &amp; Lloyd, 2009) as the conceptual
              backbone.
            </p>
            <p>
              Along the way we emphasize what is actually being computed (samples
              from approximate row spaces versus explicit matrix reconstruction),
              what input models are assumed (query access, sampling oracles, data
              structures supporting ℓ²-norm sampling), and how dequantization
              results reshape claims about exponential quantum speedups in machine
              learning.
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Reference
          </h2>
          <p className="text-xs text-muted-foreground md:text-sm">
            References follow APA 7th edition (author–date). Hanging indent: second
            and later lines of each entry align with the text block.
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p className="ps-8 -indent-8">
              Achlioptas, D., &amp; McSherry, F. (2007). Fast computation of low-rank
              matrix approximations. <em>Journal of the ACM</em>, <em>54</em>(2),
              Article 9.
            </p>
            <p className="ps-8 -indent-8">
              Drineas, P., Kerenidis, I., &amp; Raghavan, P. (2002). Competitive
              recommendation systems. In <em>Proceedings of the 34th Annual ACM
              Symposium on Theory of Computing</em> (pp. 82–90). Association for
              Computing Machinery.
            </p>
            <p className="ps-8 -indent-8">
              Frieze, A., Kannan, R., &amp; Vempala, S. (2004). Fast Monte-Carlo
              algorithms for finding low-rank approximations. <em>Journal of the ACM</em>
              , <em>51</em>(6), 1025–1041.
            </p>
            <p className="ps-8 -indent-8">
              Harrow, A. W., Hassidim, A., &amp; Lloyd, S. (2009). Quantum algorithm
              for linear systems of equations. <em>Physical Review Letters</em>,{" "}
              <em>103</em>(15), Article 150502. https://doi.org/10.1103/PhysRevLett.103.150502
            </p>
            <p className="ps-8 -indent-8">
              Kerenidis, I., &amp; Prakash, A. (2016). Quantum recommendation systems.{" "}
              <em>arXiv</em>. https://arxiv.org/abs/1603.08675
            </p>
            <p className="ps-8 -indent-8">
              Tang, E. (2019). A quantum-inspired classical algorithm for recommendation
              systems. In <em>Proceedings of the 51st Annual ACM SIGACT Symposium on
              Theory of Computing</em> (pp. 217–228). Association for Computing
              Machinery. https://arxiv.org/abs/1807.04271
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Prerequisites
          </h2>
          <p className="text-sm leading-relaxed text-foreground md:text-base">
            Solid linear algebra (matrices, norms, SVD / low-rank approximation at
            a working level) and basic probability. Introductory quantum computing
            helps from Week 1 onward (states, unitaries, query complexity). Prior
            exposure to randomized numerical linear algebra or recommendation
            literature is useful but not required.
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
              Conceptual schedule — aligned with the HHL slide deck and the readings
              above
            </li>
            <li>
              Weekly pages — use <span className="font-mono text-xs md:text-sm">week_n_page</span>{" "}
              in the schedule for expanded notes with figures and in-text citations
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
                {RSHHL_SCHEDULE.map((row) => (
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
