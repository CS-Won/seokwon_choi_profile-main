import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Crime and Punishment | Reading | Seokwon Choi",
  description:
    "Reading notes on Dostoevsky's Crime and Punishment — guilt, pride, and the long arc of conscience.",
}

export default function CrimeAndPunishmentPage() {
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
            Crime and Punishment
          </h1>
          <p className="mt-2 text-muted-foreground">
            Fyodor Dostoevsky (1866) · read in Korean translation
          </p>
        </header>

        <article className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            I came to <em>Crime and Punishment</em> expecting a detective story.
            It has a crime and a detective, but the real plot is inside
            Raskolnikov&apos;s head: the theory that some people are licensed to
            transgress for a higher purpose, and the slow collapse of that
            theory under the weight of ordinary human detail — a landlady, a
            sister, a few roubles, a fever.
          </p>
          <p>
            What stayed with me is how little the novel cares about cleverness.
            Raskolnikov is intelligent; his mistake is moral, not logical.
            Dostoevsky keeps returning to poverty not as scenery but as pressure
            that narrows the space of choices until violence looks like a
            shortcut. That is uncomfortably close to how people talk about
            &quot;merit&quot; and &quot;exceptions&quot; in real institutions.
          </p>
          <p>
            Sonya and Porfiry are not opposites so much as two ways of naming
            the same fact: you cannot argue yourself innocent of being a person
            among persons. The epilogue is not a neat reward — it reads more
            like a truce after a long war — but it made the book feel honest in
            a way a purely tragic ending might not have.
          </p>
          <p>
            If I had to keep one line in my head from the whole novel, it would
            be the reminder that theories of the good life have to survive
            contact with the people they step on. Physics has the same rule in a
            softer form: a beautiful symmetry means nothing if the experiment
            refuses it.
          </p>
        </article>
      </div>
    </main>
  )
}
