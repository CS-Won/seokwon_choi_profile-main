import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Piano & concerts | Hobby | Seokwon Choi",
  description:
    "Gravity (Yonsei physics band) keyboard — concert 16 Feb 2025 with set list and YouTube links.",
}

const SET_LIST = [
  {
    title: "스물다섯, 스물하나 (Twenty-five, Twenty-one)",
    href: "https://www.youtube.com/watch?v=kJaXHr3pWCM",
  },
  {
    title: "Starlight — Muse",
    href: "https://www.youtube.com/watch?v=V6hzcE5YC2Y",
  },
  {
    title: "Welcome to the Show — DAY6",
    href: "https://www.youtube.com/watch?v=PT8PJM5wW_M",
  },
  {
    title: "Antifreeze — The Black Skirts",
    href: "https://www.youtube.com/watch?v=aaNjN_dCN80",
  },
] as const

export default function HobbyPianoPage() {
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
            Piano
          </h1>
          <p className="mt-2 text-muted-foreground">
            Band work with <strong className="text-foreground">Gravity</strong>
            , the physics-department band at Yonsei University — I played{" "}
            <strong className="text-foreground">keyboard</strong>.
          </p>
        </header>

        <section className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          <div className="rounded-xl border border-border bg-card/30 p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Concert — 16 February 2025
            </h2>
            <p>
              This was our band set for the show on{" "}
              <strong className="text-foreground">2025-02-16</strong>. Below are
              the pieces we put on stage, each with a link to the YouTube
              recording.
            </p>
            <ul className="mt-4 space-y-3">
              {SET_LIST.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Outside the band I still practise solo repertoire when I have time
            — mostly classical — but Gravity was where I learned to think about
            sound in a group, balance against drums and guitars, and how much
            simpler a part can be on paper and still matter in the mix.
          </p>
        </section>
      </div>
    </main>
  )
}
