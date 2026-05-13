import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Seokwon Choi",
  description:
    "Academic interests, hobbies, and military records — Seokwon Choi",
}

const BLOG_GROUPS = [
  {
    title: "Academic Interests",
    href: "/blog/academic-interests",
    items: [
      "Quantum algorithms for solving complex physics problems",
      "Noise, errors, and mitigation",
    ],
  },
  {
    title: "Hobby",
    href: "/blog/hobby",
    items: ["Piano", "Orchestra", "Reading"],
  },
  {
    title: "Military Records",
    href: "/blog/military-records",
    items: [
      "Republic of Korea Army, 712 Signal Battalion",
      "TICN / HCTR signal operator — Sergeant",
    ],
  },
] as const

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <header className="mb-10 text-center md:mb-12 md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Blog
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A short look at what I work on, what I do for fun, and where I have
            served.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {BLOG_GROUPS.map((group) => (
            <Link
              key={group.title}
              href={group.href}
              className="group flex h-full min-h-0 flex-col rounded-xl border border-border bg-card/30 p-6 transition-colors hover:border-foreground hover:bg-card/60 focus-visible:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 md:p-7"
            >
              <h2 className="mb-4 shrink-0 text-lg font-semibold text-foreground">
                {group.title}
              </h2>
              <ul className="flex flex-1 flex-col gap-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                Read more
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
