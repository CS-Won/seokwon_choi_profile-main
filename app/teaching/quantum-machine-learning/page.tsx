import type { Metadata } from "next"
import Link from "next/link"
import { QML_SCHEDULE } from "@/lib/teaching-quantum-machine-learning"

export const metadata: Metadata = {
  title: "Quantum Machine Learning (Spring 2025) | Seokwon Choi",
  description:
    "Course outline — Quantum Machine Learning (QIYA introductory seminar, Spring 2025), from classical machine learning and the variational quantum algorithm framework to data encoding and quantum neural networks.",
}

function WeekPageLink({ week }: { week: string }) {
  const label = `week_${week}_page`
  return (
    <Link
      href={`/teaching/quantum-machine-learning/week/${week}`}
      className="font-mono text-sm font-medium text-accent underline underline-offset-2 hover:text-accent/90"
    >
      {label}
    </Link>
  )
}

export default function QuantumMachineLearningPage() {
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
          Quantum Machine Learning (Lecturer)
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Spring 2025 · QIYA · QISCA introductory seminar. Weekly pages expand
          on the slide deck (ML → QML → Data encoding → Neural networks →
          Quantum neural networks); primary references are listed below
          (APA-style).
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course details
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-foreground md:text-base">
            <p>
              This seminar introduces quantum machine learning (QML) by tracking
              the standard machine-learning loop and asking, at each step,
              &quot;what changes when this is done on a quantum computer?&quot;
              The variational quantum algorithm framework of Cerezo et al.
              (2021) is used as the operational backbone: encode the data,
              apply a parametrized circuit, measure, and update parameters
              with a classical optimizer.
            </p>
            <p>
              Encoding choices and supervised-learning setups follow Schuld &amp;
              Petruccione (2018). The flow matches the QIYA deck — Machine
              Learning, Quantum Machine Learning, Data Encoding, Neural
              Networks, Quantum Neural Networks — including training on
              hardware and data re-uploading. For NISQ limitations such as
              barren plateaus, see McClean et al. (2018).
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Reference
          </h2>
          <p className="text-xs text-muted-foreground md:text-sm">
            References follow APA 7th edition (author–date). Hanging indent:
            second and later lines of each entry align with the text block.
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p className="ps-8 -indent-8">
              Cerezo, M., Arrasmith, A., Babbush, R., Benjamin, S. C., Endo,
              S., Fujii, K., McClean, J. R., Mitarai, K., Yuan, X., Cincio,
              L., &amp; Coles, P. J. (2021). Variational quantum algorithms.{" "}
              <em>Nature Reviews Physics</em>, <em>3</em>(9), 625–644.{" "}
              https://doi.org/10.1038/s42254-021-00348-9
            </p>
            <p className="ps-8 -indent-8">
              McClean, J. R., Boixo, S., Smelyanskiy, V. N., Babbush, R., &amp;
              Neven, H. (2018). Barren plateaus in quantum neural network
              training landscapes. <em>Nature Communications</em>,{" "}
              <em>9</em>, Article 4812.{" "}
              https://doi.org/10.1038/s41467-018-07090-4
            </p>
            <p className="ps-8 -indent-8">
              Schuld, M., &amp; Petruccione, F. (2018).{" "}
              <em>Supervised learning with quantum computers</em>. Springer.
              https://doi.org/10.1007/978-3-319-96424-9
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Prerequisites
          </h2>
          <p className="text-sm leading-relaxed text-foreground md:text-base">
            Basic linear algebra (vectors, matrices, inner products) and
            probability. Introductory quantum computing — kets, unitaries,
            Pauli operators, simple circuits — is expected from Week 2 onward.
            Prior deep-learning experience helps but is not required; the
            classical neural-network background needed for QNNs is reviewed in
            Week 4, and the quantum extension follows in Week 5.
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
              Conceptual schedule — aligned with the QIYA slide deck and the
              references above
            </li>
            <li>
              Weekly pages — use{" "}
              <span className="font-mono text-xs md:text-sm">week_n_page</span>{" "}
              in the schedule for expanded notes with figures, derivations,
              and in-text citations
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
                {QML_SCHEDULE.map((row) => (
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
