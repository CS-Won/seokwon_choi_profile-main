import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "1984 | Reading | Seokwon Choi",
  description:
    "Reading notes on George Orwell's 1984 — memory, language, and power.",
}

export default function NineteenEightyFourPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/blog/hobby/reading" className="hover:text-foreground">
            ← Reading
          </Link>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            1984
          </h1>
          <p className="mt-2 text-muted-foreground">
            George Orwell (1949) · read in Korean translation
          </p>
        </header>

        <article className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            <em>1984</em> is remembered for telescreens and Big Brother, but
            the part that actually disturbed me was the Party&apos;s theory of
            language: if you shrink vocabulary aggressively enough, certain
            thoughts become literally harder to think. That is a stronger claim
            than &quot;propaganda lies&quot; — it is structural.
          </p>
          <p>
            Winston&apos;s job at the Records Department is a neat mirror of
            modern information systems: the past is not forgotten by accident,
            it is edited on purpose so the present can feel inevitable. The
            book is not subtle about this, but subtlety is not always a virtue
            when you are trying to name a mechanism.
          </p>
          <p>
            Room 101 is usually read as torture, and it is — but it is also a
            lesson about leverage. The state does not need to break everyone;
            it needs to find each person&apos;s specific lever. That makes the
            ending feel less like a twist and more like a grim inventory of what
            fear can buy.
          </p>
          <p>
            I read it back-to-back with <em>Animal Farm</em>; together they read
            like a long essay in two genres — the fable strips the problem to
            its bones, and <em>1984</em> puts the same bones inside a city and
            a bureaucracy.
          </p>
        </article>
      </div>
    </main>
  )
}
