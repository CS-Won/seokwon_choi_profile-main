import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hobby | Seokwon Choi",
  description: "Piano, orchestra, and reading — the non-physics half of my life.",
}

const SECTIONS = [
  {
    title: "Piano",
    href: "/blog/hobby/piano",
    linkLabel: "Concerts & videos",
    body: [
      "I have played the piano for a long time, mostly classical and whatever catches my ear when I need a break from problem sets.",
      "Since coming to Yonsei I have also played keyboard in the physics-department band Gravity. The band page below lists the set I played at our February 2025 show.",
    ],
  },
  {
    title: "Orchestra",
    href: "/blog/hobby/orchestra",
    linkLabel: "Concerts with EUPHONIA",
    body: [
      "I play viola in EUPHONIA, the Yonsei University amateur orchestra. Rehearsals are weekly during term, and every concert feels like a semester compressed into one evening.",
      "The separate page collects a few programmes I was part of — from a light opera overture to the big autumn concert in 2025.",
    ],
  },
  {
    title: "Reading",
    href: "/blog/hobby/reading",
    linkLabel: "Books & notes",
    body: [
      "I read a mix of fiction, essays, and popular science. Three novels that stuck with me are Dostoevsky's Crime and Punishment, Orwell's 1984, and Orwell's Animal Farm — each gets its own short write-up.",
      "Start from the index page if you want only the book notes.",
    ],
  },
] as const

export default function HobbyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground">
            ← Blog
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Hobby
          </h1>
          <p className="mt-2 text-muted-foreground">
            What I do when I am not at a desk.
          </p>
        </header>

        <div className="space-y-12">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">
                {section.title}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {section.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={section.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                {section.linkLabel}
                <span aria-hidden>→</span>
              </Link>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
