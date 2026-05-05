import type { ReactNode } from "react"
import Link from "next/link"
import { COURSES, GRID_ROWS, type Track } from "@/lib/curriculum-courses"

/** Grid chip → Teaching card id (Lecturer / Tutor), not Coursework. */
const TEACHING_ANCHOR: Partial<Record<keyof typeof COURSES, string>> = {
  introQc: "intro-qc-teach",
  qmTut: "qm-tutor",
  recsys: "recsys-hhl-teach",
  qdyn: "qdyn",
}

const TRACK_STYLE: Record<
  Track,
  { chip: string; legendRing: string; legendFill: string; rowBg: string }
> = {
  physics: {
    chip: "border-2 border-neutral-400 bg-background text-foreground",
    legendRing: "border-2 border-neutral-400 bg-background",
    legendFill: "",
    rowBg: "bg-neutral-50/50 dark:bg-neutral-950/20",
  },
  quantum: {
    chip: "border-2 border-foreground bg-background text-foreground",
    legendRing: "border-2 border-foreground bg-background",
    legendFill: "",
    rowBg: "bg-neutral-100/40 dark:bg-neutral-900/30",
  },
  math: {
    chip: "border-0 bg-neutral-500 text-white",
    legendRing: "",
    legendFill: "bg-neutral-500",
    rowBg: "bg-neutral-50/50 dark:bg-neutral-950/20",
  },
  ece: {
    chip: "border-0 bg-blue-600 text-white",
    legendRing: "",
    legendFill: "bg-blue-600",
    rowBg: "bg-blue-50/30 dark:bg-blue-950/20",
  },
}

function CourseChip({
  track,
  courseKey,
  course,
}: {
  track: Track
  courseKey: keyof typeof COURSES
  course: (typeof COURSES)[keyof typeof COURSES]
}) {
  const s = TRACK_STYLE[track]
  const teachingId = TEACHING_ANCHOR[courseKey]
  const href = teachingId
    ? `/teaching#${teachingId}`
    : `/teaching#course-${course.id}`
  return (
    <span
      className={`mb-1 mr-1 inline-block max-w-full rounded-md px-2 py-1.5 text-left text-[10px] font-medium leading-snug shadow-sm md:text-[11px] ${s.chip}`}
    >
      <Link
        href={href}
        className="break-words text-inherit underline decoration-transparent transition-colors hover:decoration-foreground/50"
      >
        {course.short}
      </Link>
    </span>
  )
}

function renderCell(
  keys: readonly (keyof typeof COURSES | null)[],
  track: Track,
  empty: ReactNode
) {
  if (keys.length === 0 || (keys.length === 1 && keys[0] === null)) {
    return (
      <span className="text-[11px] text-muted-foreground/40 md:text-xs">
        {empty}
      </span>
    )
  }
  const list = keys.filter((k): k is keyof typeof COURSES => k != null)
  return (
    <div className="flex flex-wrap content-start gap-0.5">
      {list.map((k) => (
        <CourseChip key={k} track={track} courseKey={k} course={COURSES[k]} />
      ))}
    </div>
  )
}

function Legend() {
  const items: { track: Track; label: string }[] = [
    { track: "physics", label: "Physics" },
    { track: "quantum", label: "Quantum Science" },
    { track: "math", label: "Mathematics" },
    { track: "ece", label: "ECE" },
  ]
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground md:text-sm">
      {items.map(({ track, label }) => {
        const st = TRACK_STYLE[track]
        return (
          <div key={track} className="flex items-center gap-2">
            {track === "physics" || track === "quantum" ? (
              <span
                className={`inline-block h-3.5 w-3.5 shrink-0 rounded-full ${st.legendRing}`}
                aria-hidden
              />
            ) : (
              <span
                className={`inline-block h-3.5 w-3.5 shrink-0 rounded-full ${st.legendFill}`}
                aria-hidden
              />
            )}
            <span className="text-foreground">{label}</span>
          </div>
        )
      })}
    </div>
  )
}

export function CurriculumGrid() {
  return (
    <div className="mb-14">
      <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Curriculum timeline
      </h2>

      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/60">
              <th className="border-r border-border px-3 py-3 align-middle text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Area
              </th>
              <th className="border-r border-border px-2 py-3 text-center align-middle">
                <div className="text-sm font-semibold text-foreground">2021</div>
                <div className="text-[11px] font-normal text-muted-foreground">
                  Freshman
                </div>
              </th>
              <th className="border-r border-border px-2 py-3 text-center align-middle">
                <div className="text-sm font-semibold text-foreground">
                  2022–23
                </div>
                <div className="text-[11px] font-normal text-muted-foreground">
                  Military
                </div>
              </th>
              <th className="border-r border-border px-2 py-3 text-center align-middle">
                <div className="text-sm font-semibold text-foreground">2024</div>
                <div className="text-[11px] font-normal text-muted-foreground">
                  sophomore
                </div>
              </th>
              <th className="border-r border-border px-2 py-3 text-center align-middle">
                <div className="text-sm font-semibold text-foreground">2025</div>
                <div className="text-[11px] font-normal text-muted-foreground">
                  junior
                </div>
              </th>
              <th className="border-l border-primary/40 bg-primary/5 px-2 py-3 text-center align-middle dark:bg-primary/10">
                <div className="text-sm font-semibold text-foreground">2026</div>
                <div className="text-[11px] font-normal text-muted-foreground">
                  senior
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                  EAP · to UCSB
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {GRID_ROWS.map((row) => {
              const st = TRACK_STYLE[row.track]
              return (
                <tr
                  key={row.rowLabel}
                  className={`border-b border-border last:border-b-0 ${st.rowBg}`}
                >
                  <th
                    scope="row"
                    className="max-w-[140px] border-r border-border px-3 py-3 align-top text-xs font-medium leading-snug text-foreground md:text-sm"
                  >
                    {row.rowLabel}
                  </th>
                  {row.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`border-r border-border px-2 py-3 align-top last:border-r-0 ${
                        i === 4
                          ? "border-l border-primary/30 bg-primary/[0.04] dark:bg-primary/[0.08]"
                          : ""
                      }`}
                    >
                      {renderCell(cell, row.track, "—")}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="mx-auto mt-5 max-w-xl space-y-1.5 text-center text-[11px] text-muted-foreground md:text-xs">
        <p>
          <span className="font-medium text-foreground">†</span> Lecturer and
          Tutor
        </p>
        <p>
          <span className="font-medium text-foreground">(G)</span> Graduate
          course
        </p>
        <p>
          <span className="font-medium text-foreground">2026</span> column:
          courses during EAP at UC Santa Barbara.
        </p>
      </div>

      <Legend />
    </div>
  )
}
