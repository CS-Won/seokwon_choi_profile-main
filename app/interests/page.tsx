import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interests | Seokwon Choi",
  description: "Research and academic interests — Seokwon Choi",
}

const INTEREST_GROUPS = [
  {
    title: "Quantum computing",
    items: [
      "Quantum algorithms and complexity",
      "Hardware-efficient ansätze and variational methods",
      "Benchmarking on superconducting processors",
    ],
  },
  {
    title: "Noise, errors, and mitigation",
    items: [
      "Quantum error mitigation at utility scale",
      "Quantum error correction (conceptual and practical tradeoffs)",
      "Fidelity, coherence, and gate-level noise models",
    ],
  },
  {
    title: "Physics & methods",
    items: [
      "Many-body quantum dynamics and simulation",
      "Connecting condensed-matter style models to near-term devices",
      "Numerical and experimental methods in quantum information",
    ],
  },
] as const

export default function InterestsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Interests
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Broad themes I return to in coursework and research.
          </p>
        </header>

        <div className="space-y-10">
          {INTEREST_GROUPS.map((group) => (
            <section
              key={group.title}
              className="rounded-xl border border-border bg-card/30 p-6 md:p-8"
            >
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {group.title}
              </h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
