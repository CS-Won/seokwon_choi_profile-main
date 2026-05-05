import Link from "next/link"
import { Fragment, type ReactNode } from "react"

type TeachingLink =
  | { kind: "website"; href: string }
  | { kind: "material"; href: string }

type TeachingBlock =
  | { type: "heading"; text: string }
  | { type: "text"; text: string }
  | { type: "link"; link: TeachingLink }

const ENTRIES: { id: string; blocks: TeachingBlock[] }[] = [
  {
    id: "qdyn",
    blocks: [
      { type: "heading", text: "Quantum Dynamics using Quantum Computer (Lecturer)" },
      { type: "text", text: "Spring 2025, QISCA" },
      {
        type: "link",
        link: {
          kind: "website",
          href: "/teaching/quantum-dynamics-quantum-computer",
        },
      },
    ],
  },
  {
    id: "intro-qc-teach",
    blocks: [
      { type: "heading", text: "Intro to Quantum Computing (Lecturer)" },
      { type: "text", text: "Winter 2024, Yonsei" },
      {
        type: "link",
        link: {
          kind: "website",
          href: "/teaching/intro-to-quantum-computing",
        },
      },
    ],
  },
  {
    id: "recsys-hhl-teach",
    blocks: [
      { type: "heading", text: "Recommender system: through HHL (Lecturer)" },
      { type: "text", text: "Winter 2024, QISCA" },
      {
        type: "link",
        link: {
          kind: "website",
          href: "/teaching/recommender-system-through-hhl",
        },
      },
    ],
  },
  {
    id: "qm-tutor",
    blocks: [
      { type: "heading", text: "Quantum Mechanics (Tutor)" },
      { type: "text", text: "Spring 2025, Yonsei University" },
      {
        type: "link",
        link: {
          kind: "website",
          href: "/teaching/quantum-mechanics-tutor",
        },
      },
    ],
  },
]

function LinkInline({ link }: { link: TeachingLink }) {
  const label =
    link.kind === "website" ? "[Course Website]" : "[Course Material]"
  return (
    <Link
      href={link.href}
      className="font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent/90"
    >
      {label}
    </Link>
  )
}

function renderSecondLine(blocks: TeachingBlock[]): ReactNode[] {
  const parts: ReactNode[] = []
  for (const b of blocks) {
    if (b.type === "heading") continue
    if (b.type === "text") {
      parts.push(
        <span className="text-muted-foreground">{b.text}</span>
      )
    } else if (b.type === "link") {
      parts.push(<LinkInline link={b.link} />)
    }
  }
  return parts
}

export function TeachingSection() {
  return (
    <section id="teaching-lecturer-tutor" className="mb-12 scroll-mt-24">
      <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Teaching <span className="font-normal text-muted-foreground">—</span>{" "}
        Lecturer and Tutor
      </h2>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {ENTRIES.map((entry) => {
          const heading = entry.blocks.find((b) => b.type === "heading")
          const secondParts = renderSecondLine(entry.blocks)
          return (
            <article
              key={entry.id}
              id={entry.id}
              className="scroll-mt-28 rounded-xl border border-border bg-card/40 px-5 py-4 shadow-sm md:px-6 md:py-5"
            >
              {heading && (
                <h3 className="text-xs font-semibold leading-snug text-foreground md:text-sm">
                  {heading.text}
                </h3>
              )}
              <div className="mt-2 flex flex-wrap items-baseline gap-x-2 text-[11px] leading-relaxed md:text-xs">
                {secondParts.map((node, i) => (
                  <Fragment key={`${entry.id}-${i}`}>
                    {i > 0 && (
                      <span
                        className="select-none text-muted-foreground/50"
                        aria-hidden
                      >
                        ·
                      </span>
                    )}
                    {node}
                  </Fragment>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
