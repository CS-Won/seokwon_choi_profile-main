import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Reading | Hobby | Seokwon Choi",
  description:
    "Notes on Crime and Punishment, 1984, and Animal Farm — fiction that shaped how I read politics and conscience.",
}

const BOOKS = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    href: "/blog/hobby/reading/crime-and-punishment",
    blurb:
      "A murder story that is really about pride, debt, and whether a person can think their way past guilt.",
  },
  {
    title: "1984",
    author: "George Orwell",
    href: "/blog/hobby/reading/1984",
    blurb:
      "The cold bureaucracy of surveillance, rewritten history, and what language does to thought.",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    href: "/blog/hobby/reading/animal-farm",
    blurb:
      "A fable-length tour of how revolutions eat their ideals — clearer every time you read a headline.",
  },
] as const

export default function HobbyReadingPage() {
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
            Reading
          </h1>
          <p className="mt-2 text-muted-foreground">
            I read in Korean and English depending on what is on the shelf. The
            three books below are novels I finished slowly enough that they
            left notes — each link opens a separate page with spoilers assumed.
          </p>
        </header>

        <ul className="space-y-6">
          {BOOKS.map((book) => (
            <li key={book.href}>
              <Link
                href={book.href}
                className="block rounded-xl border border-border bg-card/30 p-6 transition-colors hover:border-foreground hover:bg-card/60"
              >
                <h2 className="text-lg font-semibold text-foreground md:text-xl">
                  {book.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {book.author}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {book.blurb}
                </p>
                <span className="mt-4 inline-flex text-sm font-medium text-foreground">
                  Full notes →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
