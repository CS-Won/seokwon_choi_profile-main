import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quantum Machine Learning (Spring 2025) | Seokwon Choi",
  description:
    "Course outline — Quantum Machine Learning (QIYA, Spring 2025), from classical machine learning basics to quantum neural networks.",
}

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
      "Course orientation and motivation: why machine learning is a useful lens for quantum information applications, what types of problems quantum-enhanced models target, and how the lecture connects classical and quantum workflows.",
  },
  {
    week: "1",
    topic: "Machine learning",
    summary:
      "Brief review of core machine-learning ideas used in this class: supervised and unsupervised settings, optimization-based training, model capacity and generalization, and why linear algebra and probability dominate practical ML pipelines.",
  },
  {
    week: "2",
    topic: "Quantum machine learning",
    summary:
      "High-level map of quantum machine learning: variational vs. kernel-style approaches, where quantum subroutines may offer speed or expressivity advantages, and realistic constraints from current noisy hardware.",
  },
  {
    week: "3",
    topic: "Data encoding",
    summary:
      "How classical data is embedded into quantum states: angle, basis, and amplitude-style encodings; trade-offs in circuit depth and qubit cost; and implications for trainability and practical model design.",
  },
  {
    week: "4",
    topic: "Neural networks",
    summary:
      "Concise recap of neural-network fundamentals: feed-forward architecture, activation functions, backpropagation intuition, and how representational depth influences function approximation in classical learning.",
  },
  {
    week: "5",
    topic: "Quantum neural networks",
    summary:
      "From classical neural-network ideas to parameterized quantum circuits: variational quantum layers, measurement-based outputs, hybrid optimization loops, and typical issues such as barren plateaus and noise sensitivity.",
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
            <Link href="/interests" className="hover:text-foreground">
              Interests
            </Link>
          </nav>
        </header>

        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Quantum Machine Learning (Lecturer)
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Spring 2025 · QIYA · Outline based on the Quantum Machine Learning slide
          deck.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course details
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-foreground md:text-base">
            <p>
              This lecture introduces quantum machine learning by connecting standard
              machine-learning intuition with quantum circuit models. Rather than
              treating quantum methods as a separate topic, the course tracks how
              familiar concepts—feature representation, model architecture, and
              trainable parameters—change when data and computation are moved into a
              quantum setting.
            </p>
            <p>
              The flow follows the presentation sequence in the provided QIYA
              materials: starting from classical ML basics, then moving to quantum ML
              viewpoints, data encoding choices, neural networks, and finally quantum
              neural networks with hybrid optimization loops.
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Prerequisites
          </h2>
          <p className="text-sm leading-relaxed text-foreground md:text-base">
            Basic linear algebra and probability are expected, along with introductory
            familiarity with quantum states and gates. Prior deep-learning experience
            helps but is not required; key neural-network concepts are reviewed before
            the quantum extensions.
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
            <li>Concept-focused lectures mapped to the slide deck sections</li>
            <li>Comparative framing: classical ML vs. quantum ML workflow</li>
            <li>
              Schedule includes [Slide] / [Material] placeholders for consistency with
              other teaching pages
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
