import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Orchestra & concerts | Hobby | Seokwon Choi",
  description:
    "Viola with EUPHONIA (Yonsei University) — selected concerts and YouTube links.",
}

const CONCERTS = [
  {
    date: "6 December 2024",
    title: "Funiculì, Funiculà",
    composer: "Luigi Denza",
    href: "https://www.youtube.com/watch?v=9xC11lW9vl0&list=PL6mnAwBzmgdu0rk3ry6pfn5lGD0Lf-Nnr&index=9",
    note: "Performed with EUPHONIA.",
  },
  {
    date: "4 September 2025 (Thursday)",
    title: 'EUPHONIA 38th Autumn Concert — "Ascend"',
    href: "https://www.youtube.com/watch?v=XuChjXiQiAk&list=RDXuChjXiQiAk&start_radio=1&t=1076s",
    programme: [
      "Saint-Saëns — Danse bacchanale from Samson et Dalila, Op. 47",
      "Rachmaninoff — Piano Concerto No. 2 in C minor, Op. 18",
      "Dvořák — Symphony No. 9 in E minor, Op. 95 (From the New World)",
      "(Encore) Tchaikovsky — Waltz of the Flowers",
    ],
    note: "Full concert video; programme listed as on the poster.",
  },
] as const

export default function HobbyOrchestraPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/blog/hobby" className="hover:text-foreground">
            ← Hobby
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Orchestra
          </h1>
          <p className="mt-2 text-muted-foreground">
            I play viola in{" "}
            <strong className="text-foreground">EUPHONIA</strong>, the Yonsei
            University amateur orchestra. Here are two concerts I was part of,
            with links where a recording exists online.
          </p>
        </header>

        <div className="space-y-10">
          {CONCERTS.map((c) => (
            <section
              key={c.date + c.title}
              className="rounded-xl border border-border bg-card/30 p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {c.date}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-foreground md:text-xl">
                {c.title}
              </h2>
              {"composer" in c && c.composer ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.composer}
                </p>
              ) : null}
              {"programme" in c && c.programme ? (
                <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-muted-foreground md:text-base">
                  {c.programme.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-4 text-sm text-muted-foreground">{c.note}</p>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
              >
                Watch on YouTube →
              </a>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          Chamber and orchestral playing are different muscles from solo
          practice: most of the job is listening across the desk, matching
          bow speed and phrasing to people you only see once a week in
          rehearsal, then trusting that work in the hall.
        </p>
      </div>
    </main>
  )
}
