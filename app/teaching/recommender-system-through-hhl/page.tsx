import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Recommender system: through HHL (Winter 2024) | Seokwon Choi",
  description:
    "Course outline — quantum and quantum-inspired recommendation systems, from the HHL linear-systems algorithm to low-rank matrix sampling (QISCA, Winter 2024).",
}

/** Slides and PDFs are not hosted on this site; placeholders keep the same table layout. */
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
      "From personalized recommendations to linear algebra: the user–item preference matrix, sparsity of observations, and the low-rank prior that makes aggressive dimension reduction plausible. How sampling-based and reconstruction-based classical methods differ, and where quantum linear-algebra primitives (notably HHL-style routines) enter the story before we specialize to recommendation.",
  },
  {
    week: "1",
    topic: "HHL algorithm",
    summary:
      "The Harrow–Hassidim–Lloyd algorithm for sparse linear systems Ax = b when the goal is to estimate features of x (e.g., expectation values x†Mx) rather than to read out x classically. Complexity in terms of condition number and sparsity, quantum state preparation assumptions, and why this framework suggests exponential speedups for certain matrix tasks—setting up its later use inside quantum recommendation pipelines.",
  },
  {
    week: "2",
    topic: "Recommendation problem",
    summary:
      "Formalizing recommendation as working with an m × n matrix of utilities revealed online, competitive guarantees, and reductions to reconstructing or approximating matrix entries. Classical schemes that implicitly rebuild large parts of the preference matrix versus those that target high-utility entries directly; sampling complexity and Monte Carlo / low-rank approximation viewpoints (as in the competitive recommendation and fast low-rank approximation literature).",
  },
  {
    week: "3",
    topic: "Recommendation system model — Quantum",
    summary:
      "The Kerenidis–Prakash quantum recommendation system: sampling good product suggestions in time poly(k) polylog(mn) for a rank-k preference matrix without classical reconstruction of the full matrix. Efficient projection of a vector onto the row space of an implicit matrix and how HHL-like subroutines fit into the overall quantum procedure.",
  },
  {
    week: "4",
    topic: "Recommendation system model — Quantum-inspired",
    summary:
      "Tang’s quantum-inspired classical algorithm: an ℓ²-norm sampling data structure that recovers comparable recommendation guarantees in O(poly(k) log(mn)) time, closing the exponential gap under analogous input assumptions. Interpreting “dequantization”: when quantum speedups reduce to clever classical sampling, and what remains as a guide for future quantum machine learning claims.",
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
            <Link href="/interests" className="hover:text-foreground">
              Interests
            </Link>
          </nav>
        </header>

        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Recommender system: through HHL (Lecturer)
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Winter 2024 · QISCA · Outline follows the in-class slide deck and reading
          packet (slides and PDFs are not hosted on this website).
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
              Kerenidis and Prakash, and then to Tang&apos;s quantum-inspired
              classical analogue—using the HHL linear-systems algorithm as the
              conceptual backbone.
            </p>
            <p>
              Along the way we emphasize what is actually being computed (samples
              from approximate row spaces versus explicit matrix reconstruction),
              what input models are assumed (query access, sampling oracles, data
              structures supporting ℓ²-norm sampling), and how recent
              &quot;dequantization&quot; results reshape claims about exponential
              quantum speedups in machine learning.
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
            helps for Week 1 onward (states, unitaries, query complexity). Prior
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
              listed below
            </li>
            <li>
              Materials — distributed through the QISCA course packet; the schedule
              table retains [Slide] / [Material] placeholders for parity with other
              course pages (links are not active here)
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course packet (readings)
          </h2>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground md:text-base">
            <li>
              <span className="text-foreground">
                Harrow, Hassidim, Lloyd —{" "}
                <cite className="not-italic">
                  Quantum algorithm for linear systems of equations
                </cite>
              </span>
            </li>
            <li>
              <span className="text-foreground">
                Kerenidis, Prakash —{" "}
                <cite className="not-italic">Quantum Recommendation Systems</cite>
              </span>
            </li>
            <li>
              <span className="text-foreground">
                Tang —{" "}
                <cite className="not-italic">
                  A quantum-inspired classical algorithm for recommendation systems
                </cite>
              </span>
            </li>
            <li>
              <span className="text-foreground">
                Drineas, Kerenidis, Raghavan —{" "}
                <cite className="not-italic">
                  Competitive Recommendation Systems
                </cite>
              </span>
            </li>
            <li>
              <span className="text-foreground">
                <cite className="not-italic">
                  Fast computation of low-rank matrix approximations
                </cite>{" "}
                (course PDF)
              </span>
            </li>
            <li>
              <span className="text-foreground">
                <cite className="not-italic">
                  Fast Monte-Carlo Algorithms for finding Low-Rank Approximations
                </cite>{" "}
                (course PDF)
              </span>
            </li>
            <li>
              <span className="text-foreground">
                <cite className="not-italic">HHL.pptx</cite> — slide deck
              </span>
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
