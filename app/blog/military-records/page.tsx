import type { Metadata } from "next"
import Link from "next/link"
import { MilitaryImage } from "@/components/military-image"
import { NodeTopologyDiagram } from "@/components/military-node-topology"

export const metadata: Metadata = {
  title: "Military Records | Seokwon Choi",
  description:
    "Service record: Republic of Korea Army, 712 Signal Battalion — TICN / HCTR signal operator, Sergeant.",
}

const TOPICS = [
  {
    title: "Republic of Korea Army, 712 Signal Battalion",
    body: [
      "I served as an enlisted soldier in the 712 Signal Battalion of the Republic of Korea Army from August 2022 to February 2024 — a direct-attached signal unit of I Corps responsible for running the corps's communications.",
      "Service experience emphasized reliability in constrained communication environments. In operational contexts, system continuity and redundancy were prioritized over local optimization.",
    ],
  },
] as const

function FirstCorpsInsignia({
  className,
  title,
}: {
  className?: string
  title?: string
}) {
  // ROK Army I Corps unit patch — converted to black & white.
  // Source vectors preserved from the original colour insignia;
  // blue → currentColor, yellow → currentColor at 35% opacity.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 452 631"
      role="img"
      aria-label={title ?? "ROK Army I Corps unit patch"}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title ?? "ROK Army I Corps unit patch"}</title>
      <defs>
        <clipPath id="firstCorpsClip">
          <path d="M-4697-1609h452v631h-452z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath="url(#firstCorpsClip)"
        transform="translate(4697 1609)"
      >
        <path
          d="M-4678-1593h414l-84.19 300.07L-4264-996h-414l85.54-296.93Z"
          className="fill-background"
        />
        <path
          d="M-4658.21-1581.45h366.33l-76.57 288.45h39.69l82.76-315h-451l83.77 315h37.78Z"
          fill="currentColor"
        />
        <path
          d="m-4658-1581 82.91 288h25.23l-72.09-259.58h294l-64.99 259.58h25.23l76.71-288Z"
          fill="currentColor"
          fillOpacity={0.35}
        />
        <path
          d="M-4393-1502.66V-1531h-157v28.34h25.36V-1293h106.39v-209.66ZM-4246-978l-82.76-315h-39.69l76.57 287.55h-366.33l82.76-287.55h-37.78L-4697-978Z"
          fill="currentColor"
        />
        <path
          d="m-4328-1031-65-262h-25.23v209.87h25.23v24.77h-156.91v-24.77h25.35V-1293h-25.35l-72.09 262Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

function SergeantInsignia({
  className,
  title,
}: {
  className?: string
  title?: string
}) {
  // ROK Army Sergeant rank: four horizontal bars (straight lines).
  const barCount = 4
  const w = 32
  const barH = 2.5
  const gap = 3
  const pad = 1
  const h = pad * 2 + barCount * barH + (barCount - 1) * gap
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={title ?? "ROK Army Sergeant insignia"}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title ?? "ROK Army Sergeant insignia"}</title>
      {Array.from({ length: barCount }, (_, i) => {
        const y = pad + i * (barH + gap)
        return (
          <rect
            key={i}
            x={0}
            y={y}
            width={w}
            height={barH}
            rx={0.5}
            fill="currentColor"
          />
        )
      })}
    </svg>
  )
}

export default function MilitaryRecordsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground">
            ← Blog
          </Link>
        </nav>

        <header className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-[3.2fr_4fr]">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border-2 border-border bg-muted">
            <MilitaryImage />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Republic of Korea Army
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Military Records
            </h1>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              712 Signal Battalion &middot; Signal specialist
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:justify-start">
              <span className="text-muted-foreground">Rank:</span>
              <span className="font-medium text-foreground">Sergeant</span>
              <SergeantInsignia
                className="ml-1 h-5 w-auto text-foreground"
                title="ROK Army Sergeant insignia — four horizontal bars"
              />
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground md:text-left">
              <li>
                Deployed to the 1st Infantry Division frontline units —
                maintaining tactical signal equipment.
              </li>
            </ul>
          </div>
        </header>

        <hr className="mb-12 border-border" />

        <section className="mb-12">
          <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Service summary
          </h2>
          <div className="space-y-10">
            {TOPICS.map((topic) => (
              <div key={topic.title}>
                <div className="mb-3 flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {topic.title}
                  </h3>
                  <FirstCorpsInsignia
                    className="h-10 w-auto shrink-0 text-foreground md:h-12"
                    title="ROK Army I Corps unit patch"
                  />
                </div>
                <div className="space-y-4 leading-relaxed text-foreground">
                  {topic.body.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="mb-12 border-border" />

        <section>
          <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Training and duties
          </h2>

          <div className="mx-auto max-w-3xl">
            <h3 className="mb-6 text-center text-lg font-semibold text-foreground md:text-left md:text-xl">
              Military occupational specialty — TICN / HCTR
            </h3>

            <div className="relative border-l-2 border-border pl-6">
              <div className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    Tactical communications operator (TICN / HCTR)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Republic of Korea Army · 712 Signal Battalion · I Corps
                  </p>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">
                  Aug 2022 — Feb 2024
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                MOS: operator on the TICN / HCTR family — high-capacity tactical
                radio and tactical IP networks connecting command posts, relay
                sites, and field units across the battalion area of
                responsibility.
              </p>

              <div className="mt-6 space-y-5 text-sm leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Core responsibilities
                  </h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-foreground marker:text-muted-foreground">
                    <li>
                      Pre-operation checks, field deployment, and tear-down of
                      tactical comms suites during exercises and rotations.
                    </li>
                    <li>
                      Scheduled maintenance and fault isolation on assigned
                      radio / network line-replaceable units.
                    </li>
                    <li>
                      Crypto material, keying, and configuration changes under
                      unit COMSEC procedures — accountable for correct load and
                      verification before nets go live.
                    </li>
                    <li>
                      Bring-up of designated circuits and data paths on exercise
                      timelines; primary operator responsibility when the net
                      must pass comms checks on schedule.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Working principles (carried forward)
                  </h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-foreground marker:text-muted-foreground">
                    <li>
                      Document and label cables, channels, and configs so a
                      handoff survives poor weather and night work.
                    </li>
                    <li>
                      Treat the deployment as one coupled system — most
                      exercise failures traced to a single mis-set parameter
                      rather than random hardware faults.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <figure className="mx-auto mt-10 max-w-lg rounded-xl border border-border bg-card/40 p-6 text-foreground">
            <NodeTopologyDiagram className="mx-auto h-auto w-full max-w-[280px] text-foreground" />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              Sketch of how we reasoned about interconnects when standing up
              node communication stations: a grid-style backbone versus a
              tree-style overlay (same column stack, different emphasis on
              lateral vs hierarchical paths).
            </figcaption>
          </figure>

          <div className="mx-auto mt-10 max-w-3xl border-t border-border pt-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Network planning &amp; contingencies
            </h4>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground marker:text-muted-foreground">
              <li>
                Used graph-style layouts (e.g. grid vs tree backbones) to reason
                about interconnects when standing up node communication
                stations — redundancy paths, single points of failure, and
                which topology still routes after the first cut.
              </li>
              <li>
                After a site or link loss, reframed work as re-phasing traffic and
                crypto boundaries under fixed hardware and time — closer to
                constrained coordination / harmonic-style rebalancing than to
                optimizing one local metric on a single box.
              </li>
              <li>
                Prefer treating outages as coupled constraints on the whole
                graph; favor small, verifiable edge moves over last-minute heroic
                rewires.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
