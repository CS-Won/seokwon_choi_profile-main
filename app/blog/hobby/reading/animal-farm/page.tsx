import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Animal Farm | Reading | Seokwon Choi",
  description:
    "Reading notes on George Orwell's Animal Farm — allegory, slogans, and power.",
}

export default function AnimalFarmPage() {
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
            Animal Farm
          </h1>
          <p className="mt-2 text-muted-foreground">
            George Orwell (1945) · read in Korean translation
          </p>
        </header>

        <article className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            <em>Animal Farm</em> is short enough to read in one sitting, which
            is dangerous — the jokes land before you have time to duck. The
            pigs do not start as villains; they start as organisers who know
            how to read and write when nobody else does. The slope from
            &quot;someone has to coordinate&quot; to &quot;someone deserves
            more&quot; is the whole book in one sentence.
          </p>
          <p>
            The rewritten commandments are the clearest lesson for me: if you
            control the text on the wall, you control the memory of what the
            rules were yesterday. You do not even have to lie loudly — you only
            have to edit quietly and let exhaustion do the rest.
          </p>
          <p>
            The final scene — animals watching pigs and men through the window
            — is almost too on-the-nose, but it still works because the book has
            earned the disgust slowly, chapter by chapter. It pairs well with
            technical training in another sense: any system with a changelog can
            be Orwelled if nobody reads the diff.
          </p>
          <p>
            I keep it in mind when I read papers too: who writes the appendix,
            who gets thanked in a footnote, and whose labour disappears into
            &quot;the team.&quot;
          </p>
        </article>
      </div>
    </main>
  )
}
