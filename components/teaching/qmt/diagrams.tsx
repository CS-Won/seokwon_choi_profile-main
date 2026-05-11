import type { ReactNode } from "react"

function Figure({
  caption,
  children,
}: {
  caption: ReactNode
  children: ReactNode
}) {
  return (
    <figure className="my-6 overflow-x-auto rounded-lg border border-border bg-card/40 p-4 md:p-5">
      <div className="flex justify-center">{children}</div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground md:text-sm">
        {caption}
      </figcaption>
    </figure>
  )
}

export function InfiniteWellLevels() {
  const levels = [
    { n: 1, e: 1, y: 260 },
    { n: 2, e: 4, y: 200 },
    { n: 3, e: 9, y: 130 },
    { n: 4, e: 16, y: 50 },
  ]
  return (
    <Figure
      caption={
        <>
          <strong>Infinite square well.</strong> Energy levels{" "}
          <span className="font-mono">E_n = n²π²ℏ²/(2mL²)</span> grow as{" "}
          <span className="font-mono">n²</span>, and the stationary states are
          sine modes that vanish at the walls.
        </>
      }
    >
      <svg
        viewBox="0 0 520 320"
        width="100%"
        style={{ maxWidth: 580 }}
        className="text-foreground"
      >
        <line x1={80} y1={20} x2={80} y2={290} stroke="currentColor" strokeWidth={2.5} />
        <line x1={380} y1={20} x2={380} y2={290} stroke="currentColor" strokeWidth={2.5} />
        <line x1={50} y1={290} x2={420} y2={290} stroke="currentColor" />
        <text x={70} y={302} textAnchor="end" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          0
        </text>
        <text x={380} y={302} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          L
        </text>
        <text x={50} y={20} textAnchor="end" fontSize={11} fill="currentColor" opacity={0.7} fontFamily="ui-monospace">
          V = ∞
        </text>
        <text x={450} y={20} fontSize={11} fill="currentColor" opacity={0.7} fontFamily="ui-monospace">
          V = ∞
        </text>

        {levels.map((L) => {
          const A = 18
          const steps = 60
          const pts: string[] = []
          for (let i = 0; i <= steps; i++) {
            const x = 80 + (300 * i) / steps
            const y =
              L.y - A * Math.sin((L.n * Math.PI * (x - 80)) / 300)
            pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
          }
          return (
            <g key={L.n}>
              <line x1={80} y1={L.y} x2={380} y2={L.y} stroke="currentColor" strokeDasharray="4 3" opacity={0.5} />
              <path d={"M " + pts.join(" L ")} fill="none" stroke="currentColor" strokeWidth={1.8} />
              <text x={395} y={L.y + 4} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
                {`n=${L.n}, E∝${L.e}`}
              </text>
            </g>
          )
        })}
        <text x={460} y={155} fontSize={11} fill="currentColor" fontFamily="ui-monospace" opacity={0.7}>
          E↑
        </text>
      </svg>
    </Figure>
  )
}

export function FiniteWellPotential() {
  return (
    <Figure
      caption={
        <>
          <strong>Finite square well, bound states.</strong> Inside the well
          the wave function is sinusoidal; outside it is an exponentially
          decaying tail. Matching <span className="font-mono">ψ</span> and{" "}
          <span className="font-mono">ψ′</span> at the wall gives the
          transcendental equations <span className="font-mono">k tan(ka) = κ</span>{" "}
          (even) and <span className="font-mono">−k cot(ka) = κ</span> (odd).
        </>
      }
    >
      <svg
        viewBox="0 0 560 260"
        width="100%"
        style={{ maxWidth: 620 }}
        className="text-foreground"
      >
        <line x1={40} y1={60} x2={180} y2={60} stroke="currentColor" strokeWidth={2.2} />
        <line x1={180} y1={60} x2={180} y2={190} stroke="currentColor" strokeWidth={2.2} />
        <line x1={180} y1={190} x2={380} y2={190} stroke="currentColor" strokeWidth={2.2} />
        <line x1={380} y1={190} x2={380} y2={60} stroke="currentColor" strokeWidth={2.2} />
        <line x1={380} y1={60} x2={520} y2={60} stroke="currentColor" strokeWidth={2.2} />
        <text x={100} y={50} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          V = 0
        </text>
        <text x={420} y={50} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          V = 0
        </text>
        <text x={260} y={210} fontSize={11} fill="currentColor" fontFamily="ui-monospace" textAnchor="middle">
          V = −V₀
        </text>
        <text x={180} y={225} fontSize={11} fill="currentColor" fontFamily="ui-monospace" textAnchor="middle">
          x = −a
        </text>
        <text x={380} y={225} fontSize={11} fill="currentColor" fontFamily="ui-monospace" textAnchor="middle">
          x = +a
        </text>

        <line x1={180} y1={135} x2={380} y2={135} stroke="currentColor" strokeDasharray="4 3" opacity={0.6} />
        <text x={395} y={138} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          E (bound, E&lt;0)
        </text>

        <path
          d="M 40 135 Q 110 132, 180 122 C 230 95, 330 95, 380 122 Q 450 132, 520 135"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        />
      </svg>
    </Figure>
  )
}

export function StepPotential() {
  return (
    <Figure
      caption={
        <>
          <strong>Step potential.</strong> Incident wave{" "}
          <span className="font-mono">Aeⁱᵏˣ</span> from the left meets a step
          of height <span className="font-mono">V₀</span>. For{" "}
          <span className="font-mono">E &lt; V₀</span> total reflection (R = 1),
          for <span className="font-mono">E &gt; V₀</span> a partial
          transmission with{" "}
          <span className="font-mono">T = 4kk′/(k+k′)²</span>.
        </>
      }
    >
      <svg
        viewBox="0 0 560 240"
        width="100%"
        style={{ maxWidth: 620 }}
        className="text-foreground"
      >
        <line x1={40} y1={170} x2={280} y2={170} stroke="currentColor" strokeWidth={2.2} />
        <line x1={280} y1={170} x2={280} y2={80} stroke="currentColor" strokeWidth={2.2} />
        <line x1={280} y1={80} x2={520} y2={80} stroke="currentColor" strokeWidth={2.2} />

        <text x={160} y={160} fontSize={11} fill="currentColor" fontFamily="ui-monospace" textAnchor="middle">
          V = 0
        </text>
        <text x={400} y={70} fontSize={11} fill="currentColor" fontFamily="ui-monospace" textAnchor="middle">
          V = V₀
        </text>
        <text x={280} y={210} fontSize={11} fill="currentColor" fontFamily="ui-monospace" textAnchor="middle">
          x = 0
        </text>

        <line x1={50} y1={120} x2={250} y2={120} stroke="currentColor" strokeDasharray="3 3" opacity={0.6} />
        <text x={50} y={114} fontSize={10} fill="currentColor" fontFamily="ui-monospace" opacity={0.7}>
          E
        </text>

        <g>
          <path d="M 60 130 q 12 -12 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0" fill="none" stroke="currentColor" strokeWidth={1.8} />
          <path d="M 200 130 l 12 0 l -4 -4 m 4 4 l -4 4" stroke="currentColor" fill="none" />
          <text x={120} y={156} fontSize={10} fill="currentColor" fontFamily="ui-monospace" opacity={0.8}>
            Aeⁱᵏˣ →
          </text>
          <path d="M 200 142 l -12 0 l 4 -4 m -4 4 l 4 4" stroke="currentColor" fill="none" />
          <text x={120} y={188} fontSize={10} fill="currentColor" fontFamily="ui-monospace" opacity={0.8}>
            ← Be⁻ⁱᵏˣ
          </text>
        </g>
        <g>
          <path d="M 290 105 q 14 -8 28 0 t 28 0 t 28 0 t 28 0 t 28 0 t 28 0" fill="none" stroke="currentColor" strokeWidth={1.8} />
          <text x={420} y={130} fontSize={10} fill="currentColor" fontFamily="ui-monospace" opacity={0.8}>
            (a) E&lt;V₀: Ce⁻ᵏ&apos;x &nbsp; / &nbsp; (b) E&gt;V₀: Feⁱᵏ&apos;ˣ
          </text>
        </g>
      </svg>
    </Figure>
  )
}

export function OscillatorLevels() {
  return (
    <Figure
      caption={
        <>
          <strong>Harmonic oscillator.</strong> Quadratic potential{" "}
          <span className="font-mono">V = ½mω²x²</span> gives evenly spaced
          levels <span className="font-mono">E_n = (n + ½)ℏω</span>. Ladder
          operators <span className="font-mono">a, a†</span> step between
          neighbours.
        </>
      }
    >
      <svg
        viewBox="0 0 520 300"
        width="100%"
        style={{ maxWidth: 580 }}
        className="text-foreground"
      >
        <path
          d="M 80 30 Q 260 320, 440 30"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          opacity={0.5}
        />
        {[0, 1, 2, 3, 4].map((n) => {
          const y = 260 - n * 40
          const halfWidth = 70 + n * 35
          return (
            <g key={n}>
              <line
                x1={260 - halfWidth}
                y1={y}
                x2={260 + halfWidth}
                y2={y}
                stroke="currentColor"
                strokeWidth={1.8}
              />
              <text
                x={260 + halfWidth + 14}
                y={y + 4}
                fontSize={11}
                fill="currentColor"
                fontFamily="ui-monospace"
              >
                {`n = ${n},  E = (${n} + ½)ℏω`}
              </text>
            </g>
          )
        })}
        <text x={260} y={290} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace" opacity={0.7}>
          x
        </text>
      </svg>
    </Figure>
  )
}

export function HydrogenLevels() {
  return (
    <Figure
      caption={
        <>
          <strong>Hydrogen energy levels.</strong>{" "}
          <span className="font-mono">E_n = −13.6 eV / n²</span>. Each level{" "}
          <span className="font-mono">n</span> is{" "}
          <span className="font-mono">n²</span>-fold degenerate (ignoring
          spin), filling out <span className="font-mono">ℓ = 0, 1, …, n−1</span>.
        </>
      }
    >
      <svg
        viewBox="0 0 520 280"
        width="100%"
        style={{ maxWidth: 580 }}
        className="text-foreground"
      >
        <line x1={40} y1={20} x2={40} y2={250} stroke="currentColor" />
        <text x={32} y={20} textAnchor="end" fontSize={11} fill="currentColor" fontFamily="ui-monospace" opacity={0.7}>
          E = 0
        </text>
        <line x1={40} y1={20} x2={420} y2={20} stroke="currentColor" strokeDasharray="3 3" opacity={0.5} />

        {[1, 2, 3, 4].map((n) => {
          const E = -13.6 / (n * n)
          const y = 20 + (-E / 13.6) * 220
          return (
            <g key={n}>
              <line x1={60} y1={y} x2={420} y2={y} stroke="currentColor" strokeWidth={1.8} />
              <text x={430} y={y + 4} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
                {`n = ${n},  E = ${E.toFixed(2)} eV`}
              </text>
            </g>
          )
        })}
      </svg>
    </Figure>
  )
}

export function AngularMomentumCone() {
  return (
    <Figure
      caption={
        <>
          <strong>Angular momentum on the z-axis.</strong> Vectors of fixed
          length <span className="font-mono">√(ℓ(ℓ+1))ℏ</span> precess on
          cones whose <span className="font-mono">z</span>-projection takes
          discrete values <span className="font-mono">mℏ</span>, for{" "}
          <span className="font-mono">m = −ℓ, …, +ℓ</span>.
        </>
      }
    >
      <svg
        viewBox="0 0 480 280"
        width="100%"
        style={{ maxWidth: 520 }}
        className="text-foreground"
      >
        <line x1={240} y1={20} x2={240} y2={260} stroke="currentColor" />
        <text x={246} y={20} fontSize={11} fill="currentColor" fontFamily="ui-monospace" opacity={0.7}>
          z
        </text>
        {[
          { m: 1, y: 80 },
          { m: 0, y: 140 },
          { m: -1, y: 200 },
        ].map((L) => (
          <g key={L.m}>
            <ellipse cx={240} cy={L.y} rx={90} ry={18} fill="none" stroke="currentColor" opacity={0.5} />
            <line x1={240} y1={140} x2={330} y2={L.y} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#qmtArr)" />
            <text x={345} y={L.y + 4} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
              {`m = ${L.m}`}
            </text>
          </g>
        ))}
        <text x={160} y={258} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          ℓ = 1 example
        </text>
        <defs>
          <marker id="qmtArr" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </Figure>
  )
}
