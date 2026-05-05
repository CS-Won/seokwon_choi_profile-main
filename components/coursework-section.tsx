import Link from "next/link"
import {
  getCourseworkCardTitle,
  getCourseworkMetaLine,
  getSortedCourseworkKeys,
} from "@/lib/coursework-data"
import { COURSES } from "@/lib/curriculum-courses"

export function CourseworkSection() {
  const keys = getSortedCourseworkKeys()

  return (
    <section id="coursework" className="mb-12 scroll-mt-24">
      <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Coursework
      </h2>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {keys.map((key) => {
          const c = COURSES[key]
          const meta = getCourseworkMetaLine(key)
          return (
            <article
              key={key}
              id={`course-${c.id}`}
              className="scroll-mt-28 rounded-xl border border-border bg-card/40 px-5 py-4 shadow-sm md:px-6 md:py-5"
            >
              <h3 className="text-xs font-semibold leading-snug text-foreground md:text-sm">
                {getCourseworkCardTitle(key)}
              </h3>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-2 text-[11px] leading-relaxed md:text-xs">
                <span className="text-muted-foreground">{meta}</span>
                <span
                  className="select-none text-muted-foreground/50"
                  aria-hidden
                >
                  ·
                </span>
                <Link
                  href="#"
                  className="font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent/90"
                >
                  [Course Material]
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
