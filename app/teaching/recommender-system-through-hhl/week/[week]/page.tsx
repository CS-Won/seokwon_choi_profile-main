import type { ReactElement } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  RSHHL_SCHEDULE,
  getRshhlWeekRow,
} from "@/lib/teaching-recommender-system-hhl"
import Week0 from "@/components/teaching/rshhl/week-0"
import Week1 from "@/components/teaching/rshhl/week-1"
import Week2 from "@/components/teaching/rshhl/week-2"
import Week3 from "@/components/teaching/rshhl/week-3"
import Week4 from "@/components/teaching/rshhl/week-4"

const BASE = "/teaching/recommender-system-through-hhl"

const WEEK_CONTENT: Record<string, () => ReactElement> = {
  "0": Week0,
  "1": Week1,
  "2": Week2,
  "3": Week3,
  "4": Week4,
}

export function generateStaticParams() {
  return RSHHL_SCHEDULE.map((row) => ({ week: row.week }))
}

type Props = { params: Promise<{ week: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { week } = await params
  const row = getRshhlWeekRow(week)
  if (!row) {
    return { title: "Week | Seokwon Choi" }
  }
  return {
    title: `week_${week}_page — ${row.topic} | Recommender system through HHL (Winter 2024) | Seokwon Choi`,
    description: `${row.topic}. Week ${week} notes for Recommender system through HHL (QISCA, Winter 2024).`,
  }
}

export default async function RshhlWeekPage({ params }: Props) {
  const { week } = await params
  const row = getRshhlWeekRow(week)
  if (!row) notFound()

  const pageId = `week_${week}_page`
  const Content = WEEK_CONTENT[week]
  const idx = RSHHL_SCHEDULE.findIndex((r) => r.week === week)
  const prev = idx > 0 ? RSHHL_SCHEDULE[idx - 1] : null
  const next =
    idx >= 0 && idx < RSHHL_SCHEDULE.length - 1 ? RSHHL_SCHEDULE[idx + 1] : null

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="mb-10 border-b border-border pb-6">
          <p className="text-lg font-semibold tracking-tight text-foreground">
            <Link href="/about" className="hover:text-accent">
              Seokwon Choi
            </Link>
          </p>
          <nav className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/cv" className="hover:text-foreground">
              CV
            </Link>
            <Link href="/publications" className="hover:text-foreground">
              Publications
            </Link>
            <span className="text-foreground">
              <Link href="/teaching" className="font-medium hover:text-accent">
                Teaching
              </Link>{" "}
              <span className="font-normal text-muted-foreground">(current)</span>
            </span>
            <Link href="/interests" className="hover:text-foreground">
              Interests
            </Link>
          </nav>
        </header>

        <p className="font-mono text-xs text-muted-foreground">
          <Link href={BASE} className="text-accent hover:underline">
            Recommender system: through HHL
          </Link>
          <span aria-hidden> / </span>
          <span className="text-foreground">{pageId}</span>
        </p>

        <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          <span className="font-mono text-xl md:text-2xl">{pageId}</span>
        </h1>
        <p className="mt-2 text-base font-medium text-foreground md:text-lg">
          Week {row.week} · {row.topic}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Winter 2024 · QISCA — Lecturer: Seokwon Choi
        </p>

        <article className="qdyn-prose mt-10">
          {Content ? <Content /> : <p>{row.summary}</p>}
        </article>

        <nav className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            {prev ? (
              <Link
                href={`${BASE}/week/${prev.week}`}
                className="group inline-flex flex-col text-muted-foreground hover:text-foreground"
              >
                <span className="text-xs uppercase tracking-widest">
                  ← Previous
                </span>
                <span className="font-mono text-foreground group-hover:text-accent">
                  week_{prev.week}_page
                </span>
                <span className="text-xs">{prev.topic}</span>
              </Link>
            ) : null}
          </div>
          <div className="min-w-0 md:text-right">
            {next ? (
              <Link
                href={`${BASE}/week/${next.week}`}
                className="group inline-flex flex-col text-muted-foreground hover:text-foreground md:items-end"
              >
                <span className="text-xs uppercase tracking-widest">
                  Next →
                </span>
                <span className="font-mono text-foreground group-hover:text-accent">
                  week_{next.week}_page
                </span>
                <span className="text-xs">{next.topic}</span>
              </Link>
            ) : null}
          </div>
        </nav>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          <Link href={BASE} className="text-accent hover:underline">
            ← Back to course schedule
          </Link>
          {" · "}
          <Link href="/teaching" className="text-accent hover:underline">
            Teaching &amp; Coursework
          </Link>
        </p>
      </div>
    </main>
  )
}
