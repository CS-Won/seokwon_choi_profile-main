import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Introduction to Quantum Computing (Winter 2024) | Seokwon Choi",
  description:
    "Course syllabus — Introduction to Quantum Computing, Yonsei Premium Online Lecture (Winter 2024).",
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
    topic: "Orientation",
    summary:
      "Overview of the course and how the remaining sessions are organized.",
  },
  {
    week: "1",
    topic: "What is a quantum computer?",
    summary:
      "Quantum states, superposition, and entanglement as foundations for understanding quantum computing; contrast with classical computing principles.",
  },
  {
    week: "2",
    topic: "Mathematics for quantum computing (1)",
    summary:
      "Essential linear algebra: vectors, matrices, and tensors used throughout the course.",
  },
  {
    week: "3",
    topic: "Mathematics for quantum computing (2)",
    summary:
      "Polarization and energy levels as examples that recur in quantum circuits.",
  },
  {
    week: "4",
    topic: "Quantum circuits (1)",
    summary:
      "Classical logic gates and circuits; introduction to quantum gates and how they differ; composing simple quantum circuits.",
  },
  {
    week: "5",
    topic: "Quantum circuits (2)",
    summary:
      "Further practice with quantum circuits; quantum teleportation as an application.",
  },
  {
    week: "6",
    topic: "Quantum Fourier transform (1)",
    summary:
      "Prerequisites for the Fourier perspective: orthogonality of functions and treating functions as vectors.",
  },
  {
    week: "7",
    topic: "Quantum Fourier transform (2)",
    summary:
      "Classical Fourier ideas and the quantum Fourier transform (QFT); implementing QFT with quantum circuits.",
  },
  {
    week: "8",
    topic: "Deutsch–Jozsa algorithm",
    summary:
      "Oracle (black-box) models; the Deutsch–Jozsa algorithm and an example of a quantum speedup.",
  },
  {
    week: "9",
    topic: "Shor’s algorithm",
    summary:
      "Integer factoring with classical vs. quantum approaches; Shor’s algorithm and the quantum advantage in this setting.",
  },
  {
    week: "10",
    topic: "Quantum machine learning",
    summary:
      "Basic machine-learning ideas; encoding classical information into quantum form; introduction to quantum neural network structures.",
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

export default function IntroToQuantumComputingPage() {
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
          Introduction to Quantum Computing (Lecturer)
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Winter 2024 · Yonsei Premium Online Lecture (micro-learning content) ·
          Online
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Course details
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-foreground md:text-base">
            <p>
              Quantum computers have the potential to tackle problems that are
              difficult for conventional classical computers. Advances in
              computing speed and data processing could significantly impact
              artificial intelligence, cryptography, materials science, and
              other fields. This course aims to help learners become comfortable
              with next-generation quantum computing and to make the technology
              more accessible to a broad audience.
            </p>
            <p>
              Demand for quantum expertise is growing in both industry and
              research. Major companies (e.g., IBM, Google, Microsoft) and many
              startups are actively developing quantum hardware and software.
              Quantum devices are relevant to applications such as cryptanalysis
              and combinatorial optimization. Reflecting this trend, new quantum
              information programs continue to appear at universities worldwide.
            </p>
            <p>
              In summary, through this online series we introduce quantum
              circuits, quantum communication, and related topics that are
              increasingly important in future research—using an approachable
              path for general learners via the Yonsei Premium lecture format.
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Prerequisites
          </h2>
          <p className="text-sm leading-relaxed text-foreground md:text-base">
            Comfort with basic algebra and logical reasoning is expected. Prior
            exposure to linear algebra (vectors and matrices) is helpful; core
            ideas are reviewed in Weeks 2–3. No previous quantum mechanics course
            is required, but curiosity about physics and computing is assumed.
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
            <li>Video lectures — primary delivery</li>
            <li>Online assignments — graded component</li>
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
