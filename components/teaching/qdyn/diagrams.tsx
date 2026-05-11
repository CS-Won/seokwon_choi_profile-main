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

const wireColor = "currentColor"
const gateStroke = "currentColor"

function GateBox({
  x,
  y,
  w = 36,
  h = 22,
  label,
  sub,
  variant = "default",
}: {
  x: number
  y: number
  w?: number
  h?: number
  label: string
  sub?: string
  variant?: "default" | "muted" | "neg" | "zero"
}) {
  const fill =
    variant === "muted"
      ? "var(--muted)"
      : variant === "neg"
      ? "rgba(245, 158, 11, 0.18)"
      : variant === "zero"
      ? "rgba(120, 120, 120, 0.15)"
      : "var(--card)"
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={3}
        fill={fill}
        stroke={gateStroke}
        strokeWidth={1}
      />
      <text
        x={x}
        y={y + (sub ? -2 : 4)}
        textAnchor="middle"
        fontSize={sub ? 9 : 11}
        fill="currentColor"
        fontFamily="ui-monospace, monospace"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x}
          y={y + 9}
          textAnchor="middle"
          fontSize={8}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          {sub}
        </text>
      )}
    </g>
  )
}

function TwoQubitGate({
  x,
  y1,
  y2,
  label,
  sub,
  variant = "default",
}: {
  x: number
  y1: number
  y2: number
  label: string
  sub?: string
  variant?: "default" | "muted" | "neg" | "zero"
}) {
  const yMid = (y1 + y2) / 2
  const h = Math.abs(y2 - y1) + 22
  const w = 44
  const fill =
    variant === "muted"
      ? "var(--muted)"
      : variant === "neg"
      ? "rgba(245, 158, 11, 0.18)"
      : variant === "zero"
      ? "rgba(120, 120, 120, 0.15)"
      : "var(--card)"
  return (
    <g>
      <rect
        x={x - w / 2}
        y={yMid - h / 2}
        width={w}
        height={h}
        rx={4}
        fill={fill}
        stroke={gateStroke}
        strokeWidth={1}
      />
      <text
        x={x}
        y={yMid + (sub ? -2 : 4)}
        textAnchor="middle"
        fontSize={sub ? 11 : 12}
        fill="currentColor"
        fontFamily="ui-monospace, monospace"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x}
          y={yMid + 10}
          textAnchor="middle"
          fontSize={9}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          {sub}
        </text>
      )}
    </g>
  )
}

function CXGate({
  x,
  yControl,
  yTarget,
}: {
  x: number
  yControl: number
  yTarget: number
}) {
  return (
    <g stroke={gateStroke} fill="currentColor">
      <line x1={x} y1={yControl} x2={x} y2={yTarget} strokeWidth={1.2} />
      <circle cx={x} cy={yControl} r={3} />
      <circle cx={x} cy={yTarget} r={7} fill="var(--background)" />
      <line
        x1={x - 5}
        y1={yTarget}
        x2={x + 5}
        y2={yTarget}
        strokeWidth={1.2}
      />
      <line
        x1={x}
        y1={yTarget - 5}
        x2={x}
        y2={yTarget + 5}
        strokeWidth={1.2}
      />
    </g>
  )
}

export function TrotterCircuit() {
  const qubits = 6
  const rowGap = 38
  const padTop = 26
  const left = 56
  const colWidth = 64
  const layers = 5
  const width = left + colWidth * layers + 40
  const height = padTop + rowGap * (qubits - 1) + 26

  const y = (i: number) => padTop + i * rowGap
  const xColCenter = (col: number) => left + colWidth * col + colWidth / 2 - 20

  const layerEvenStart: ("half" | "full" | "halfNeg" | "fullNeg")[] = [
    "half",
    "full",
    "full",
    "full",
    "half",
  ]
  const isOdd = (col: number) => col % 2 === 1

  return (
    <Figure
      caption={
        <>
          <strong>Figure 1.</strong> Optimized second-order Trotterization (open
          boundary, M = 2 Trotter steps, so 2M+1 = 5 layers). Even layers put gates
          on pairs <span className="font-mono">(q0, q1), (q2, q3), (q4, q5)</span>,
          odd layers on{" "}
          <span className="font-mono">(q1, q2), (q3, q4)</span>. Only the first and
          last even layers use angle <span className="font-mono">θ/2</span>; the
          inner ones use <span className="font-mono">θ</span>.
        </>
      }
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: 720 }}
        className="text-foreground"
      >
        {Array.from({ length: qubits }).map((_, i) => (
          <g key={i}>
            <text
              x={6}
              y={y(i) + 4}
              fontSize={11}
              fontFamily="ui-monospace, monospace"
              fill="currentColor"
            >
              q{i === qubits - 1 ? "n-1" : i}
            </text>
            <line
              x1={left - 16}
              y1={y(i)}
              x2={width - 8}
              y2={y(i)}
              stroke={wireColor}
              strokeWidth={1}
              opacity={0.6}
            />
          </g>
        ))}
        {Array.from({ length: layers }).map((_, col) => {
          const x = xColCenter(col)
          const odd = isOdd(col)
          const angle = layerEvenStart[col]
          if (odd) {
            return (
              <g key={`l-${col}`}>
                {[0, 2].map((pair) => (
                  <TwoQubitGate
                    key={pair}
                    x={x}
                    y1={y(pair + 1)}
                    y2={y(pair + 2)}
                    label="Uj"
                    sub="(θ)"
                  />
                ))}
              </g>
            )
          }
          return (
            <g key={`l-${col}`}>
              {[0, 2, 4].map((pair) => (
                <TwoQubitGate
                  key={pair}
                  x={x}
                  y1={y(pair)}
                  y2={y(pair + 1)}
                  label="Uj"
                  sub={angle === "half" ? "(θ/2)" : "(θ)"}
                />
              ))}
            </g>
          )
        })}
      </svg>
    </Figure>
  )
}

export function SMTestCircuit() {
  const qubits = 6
  const rowGap = 38
  const padTop = 26
  const left = 56
  const colWidth = 64
  const layers = 5
  const width = left + colWidth * layers + 40
  const height = padTop + rowGap * (qubits - 1) + 26
  const y = (i: number) => padTop + i * rowGap
  const xColCenter = (col: number) => left + colWidth * col + colWidth / 2 - 20

  const evenLabels: { label: string; sub: string; variant: "default" | "neg" | "zero" }[] = [
    { label: "Uj", sub: "(θ/2)", variant: "default" },
    { label: "Uj", sub: "(θ)", variant: "default" },
    { label: "Uj", sub: "(0)", variant: "zero" },
    { label: "Uj", sub: "(-θ)", variant: "neg" },
    { label: "Uj", sub: "(-θ/2)", variant: "neg" },
  ]
  const oddLabels: { label: string; sub: string; variant: "default" | "neg" }[] = [
    { label: "Uj", sub: "(θ)", variant: "default" },
    { label: "Uj", sub: "(-θ)", variant: "neg" },
  ]

  return (
    <Figure
      caption={
        <>
          <strong>Figure 3.</strong> Self-Mitigation test circuit — the
          (dt, dt, −dt, −dt) time schedule. Reading off the even layers only, the
          angles become (θ/2, θ, 0, −θ, −θ/2). The middle layer cancels because
          two +dt steps plus two −dt steps sum to zero, so only{" "}
          <span className="font-mono">Uj(0) = I</span> survives there.
        </>
      }
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: 720 }}
        className="text-foreground"
      >
        {Array.from({ length: qubits }).map((_, i) => (
          <g key={i}>
            <text
              x={6}
              y={y(i) + 4}
              fontSize={11}
              fontFamily="ui-monospace, monospace"
              fill="currentColor"
            >
              q{i === qubits - 1 ? "n-1" : i}
            </text>
            <line
              x1={left - 16}
              y1={y(i)}
              x2={width - 8}
              y2={y(i)}
              stroke={wireColor}
              strokeWidth={1}
              opacity={0.6}
            />
          </g>
        ))}
        {Array.from({ length: layers }).map((_, col) => {
          const x = xColCenter(col)
          const odd = col % 2 === 1
          if (odd) {
            const oddIdx = (col - 1) / 2
            const lbl = oddLabels[oddIdx]
            return (
              <g key={`l-${col}`}>
                {[0, 2].map((pair) => (
                  <TwoQubitGate
                    key={pair}
                    x={x}
                    y1={y(pair + 1)}
                    y2={y(pair + 2)}
                    label={lbl.label}
                    sub={lbl.sub}
                    variant={lbl.variant}
                  />
                ))}
              </g>
            )
          }
          const lbl = evenLabels[col]
          return (
            <g key={`l-${col}`}>
              {[0, 2, 4].map((pair) => (
                <TwoQubitGate
                  key={pair}
                  x={x}
                  y1={y(pair)}
                  y2={y(pair + 1)}
                  label={lbl.label}
                  sub={lbl.sub}
                  variant={lbl.variant}
                />
              ))}
            </g>
          )
        })}
      </svg>
    </Figure>
  )
}

export function UnitBlockCircuit() {
  const rowGap = 60
  const padTop = 32
  const width = 640
  const height = padTop + rowGap + 32
  const y1 = padTop
  const y2 = padTop + rowGap

  const cols = [60, 140, 220, 300, 380, 460, 540]

  return (
    <Figure
      caption={
        <>
          <strong>Building block</strong>{" "}
          <span className="font-mono">Uj(θ⃗)</span> compiled down to{" "}
          <strong>3 CX gates</strong> and <strong>depth 7</strong>. The naive
          version that just chains RXX, RYY, and RZZ uses 6 CXs and depth 13. By
          merging the basis-change gates with circuit identities, you can squeeze it
          down to what&apos;s shown here. Since CX noise is an order of magnitude
          larger than single-qubit noise, this kind of CX/depth compression is the
          whole game on NISQ.
        </>
      }
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: 760 }}
        className="text-foreground"
      >
        <text
          x={6}
          y={y1 + 4}
          fontSize={12}
          fontFamily="ui-monospace, monospace"
          fill="currentColor"
        >
          qj
        </text>
        <text
          x={6}
          y={y2 + 4}
          fontSize={12}
          fontFamily="ui-monospace, monospace"
          fill="currentColor"
        >
          qj+1
        </text>
        <line
          x1={36}
          y1={y1}
          x2={width - 8}
          y2={y1}
          stroke={wireColor}
          opacity={0.6}
        />
        <line
          x1={36}
          y1={y2}
          x2={width - 8}
          y2={y2}
          stroke={wireColor}
          opacity={0.6}
        />

        <GateBox x={cols[0]} y={y1} w={42} label="Rz" sub="(θz)" />
        <GateBox x={cols[0]} y={y2} w={42} label="Rz" sub="(−θy)" />

        <CXGate x={cols[1]} yControl={y1} yTarget={y2} />

        <GateBox x={cols[2]} y={y1} w={38} label="H" />
        <GateBox x={cols[2]} y={y2} w={38} label="√σx" />

        <GateBox x={cols[3]} y={y1} w={62} label="Rz" sub="(θx + π/2)" />

        <CXGate x={cols[4]} yControl={y1} yTarget={y2} />

        <GateBox x={cols[5]} y={y1} w={38} label="H" />

        <CXGate x={cols[6]} yControl={y1} yTarget={y2} />

        <GateBox x={cols[6] + 38} y={y2} w={42} label="√σx†" />
      </svg>
    </Figure>
  )
}

export function RandomizedMeasurementCircuit() {
  const N = 6
  const L = 3
  const rowGap = 34
  const padTop = 26
  const width = 540
  const height = padTop + rowGap * (N - 1) + 30
  const y = (i: number) => padTop + i * rowGap

  return (
    <Figure
      caption={
        <>
          <strong>Figure 14.</strong> Randomized Measurement (RM) protocol. After
          preparing the state with Trotter steps, apply a product of random
          single-qubit unitaries{" "}
          <span className="font-mono">Û_a = U(2)_1 ⊗ U(2)_2 ⊗ U(2)_3</span>{" "}
          (each sampled from the CUE) only on subsystem A — the top L = 3 qubits in
          this example — and measure in the Z basis. Repeating this with{" "}
          <span className="font-mono">N_U</span> different random unitaries gives
          enough statistics to estimate the Rényi entropy of A.
        </>
      }
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: 720 }}
        className="text-foreground"
      >
        {Array.from({ length: N }).map((_, i) => (
          <g key={i}>
            <text
              x={6}
              y={y(i) + 4}
              fontSize={11}
              fontFamily="ui-monospace, monospace"
              fill="currentColor"
            >
              q{i === N - 1 ? "N-1" : i}
            </text>
            <line
              x1={36}
              y1={y(i)}
              x2={width - 8}
              y2={y(i)}
              stroke={wireColor}
              opacity={0.6}
            />
          </g>
        ))}
        <rect
          x={70}
          y={y(0) - 14}
          width={140}
          height={rowGap * (N - 1) + 28}
          rx={5}
          fill="var(--muted)"
          stroke={gateStroke}
        />
        <text
          x={140}
          y={y(0) + rowGap * (N - 1) / 2 + 4}
          textAnchor="middle"
          fontSize={13}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          Trotter steps
        </text>
        {Array.from({ length: L }).map((_, i) => (
          <GateBox
            key={i}
            x={260}
            y={y(i)}
            w={56}
            label="U(2)"
            sub="∈ CUE"
          />
        ))}
        {Array.from({ length: L }).map((_, i) => (
          <g key={`m-${i}`}>
            <rect
              x={340 - 14}
              y={y(i) - 11}
              width={28}
              height={22}
              rx={3}
              fill="var(--card)"
              stroke={gateStroke}
            />
            <path
              d={`M ${340 - 8} ${y(i) + 6} A 8 8 0 0 1 ${340 + 8} ${y(i) + 6}`}
              fill="none"
              stroke="currentColor"
            />
            <line
              x1={340}
              y1={y(i) + 6}
              x2={340 + 7}
              y2={y(i) - 6}
              stroke="currentColor"
            />
          </g>
        ))}
        <text
          x={400}
          y={y(0) + rowGap * (L - 1) / 2}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          subsystem A
        </text>
        <text
          x={400}
          y={y(0) + rowGap * (L - 1) / 2 + 14}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          (L qubits)
        </text>
        <text
          x={400}
          y={y(L + 1)}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          traced out
        </text>
        <text
          x={400}
          y={y(L + 1) + 14}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          (N − L qubits)
        </text>
      </svg>
    </Figure>
  )
}

export function NeelStateDiagram() {
  const N = 10
  const spacing = 44
  const width = spacing * (N + 1)
  const height = 100
  const cy = 56

  return (
    <Figure
      caption={
        <>
          <strong>Néel state</strong>{" "}
          <span className="font-mono">|↑↓↑↓ … ↑↓⟩</span>. The simplest 1D initial
          state with antiferromagnetic order. Once we let it evolve, quench
          dynamics spread spin–spin correlations outward like a light cone, and the
          staggered magnetization relaxes toward zero.
        </>
      }
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: 640 }}
        className="text-foreground"
      >
        <line
          x1={spacing / 2}
          y1={cy}
          x2={width - spacing / 2}
          y2={cy}
          stroke="currentColor"
          strokeDasharray="3 3"
          opacity={0.4}
        />
        {Array.from({ length: N }).map((_, i) => {
          const x = spacing * (i + 1)
          const up = i % 2 === 0
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={cy}
                r={10}
                fill="var(--card)"
                stroke="currentColor"
              />
              <line
                x1={x}
                y1={up ? cy + 6 : cy - 6}
                x2={x}
                y2={up ? cy - 18 : cy + 18}
                stroke="currentColor"
                strokeWidth={1.6}
              />
              <polygon
                points={
                  up
                    ? `${x - 4},${cy - 14} ${x + 4},${cy - 14} ${x},${cy - 22}`
                    : `${x - 4},${cy + 14} ${x + 4},${cy + 14} ${x},${cy + 22}`
                }
                fill="currentColor"
              />
              <text
                x={x}
                y={cy + 38}
                textAnchor="middle"
                fontSize={10}
                fontFamily="ui-monospace, monospace"
                fill="currentColor"
                opacity={0.7}
              >
                i = {i}
              </text>
            </g>
          )
        })}
      </svg>
    </Figure>
  )
}

export function PhaseDiagram() {
  const width = 640
  const height = 110
  const yLine = 60
  const left = 48
  const right = width - 48

  const xAt = (delta: number) => {
    const tMin = -2
    const tMax = 2.5
    return left + ((delta - tMin) / (tMax - tMin)) * (right - left)
  }

  return (
    <Figure
      caption={
        <>
          <strong>XXZ phase diagram in Δ.</strong> Three phases meet at{" "}
          <span className="font-mono">Δ = −1</span> and{" "}
          <span className="font-mono">Δ = 1</span>: ferromagnetic, critical, and
          antiferromagnetic. We sit inside the critical region at{" "}
          <span className="font-mono">Δ = 0.5</span>.
        </>
      }
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: 760 }}
        className="text-foreground"
      >
        <defs>
          <linearGradient id="critGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(96,165,250,0.0)" />
            <stop offset="20%" stopColor="rgba(96,165,250,0.35)" />
            <stop offset="80%" stopColor="rgba(96,165,250,0.35)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0.0)" />
          </linearGradient>
        </defs>
        <rect
          x={xAt(-1)}
          y={yLine - 16}
          width={xAt(1) - xAt(-1)}
          height={32}
          fill="url(#critGrad)"
        />
        <line
          x1={left}
          y1={yLine}
          x2={right}
          y2={yLine}
          stroke="currentColor"
          strokeWidth={1}
        />
        {[-2, -1, 0, 0.5, 1, 2].map((d) => (
          <g key={d}>
            <line
              x1={xAt(d)}
              y1={yLine - 5}
              x2={xAt(d)}
              y2={yLine + 5}
              stroke="currentColor"
            />
            <text
              x={xAt(d)}
              y={yLine + 22}
              fontSize={11}
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              fill="currentColor"
            >
              {d}
            </text>
          </g>
        ))}
        <text
          x={xAt(-1.5)}
          y={yLine - 24}
          fontSize={11}
          textAnchor="middle"
          fill="currentColor"
        >
          ferromagnetic
        </text>
        <text
          x={xAt(0)}
          y={yLine - 24}
          fontSize={11}
          textAnchor="middle"
          fill="currentColor"
        >
          critical
        </text>
        <text
          x={xAt(1.7)}
          y={yLine - 24}
          fontSize={11}
          textAnchor="middle"
          fill="currentColor"
        >
          antiferromagnetic
        </text>
        <g>
          <circle cx={xAt(0.5)} cy={yLine} r={5} fill="currentColor" />
          <text
            x={xAt(0.5)}
            y={yLine + 42}
            fontSize={11}
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fill="currentColor"
            fontWeight={600}
          >
            Δ = 0.5 (this study)
          </text>
        </g>
        <text
          x={right + 4}
          y={yLine + 4}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          Δ
        </text>
      </svg>
    </Figure>
  )
}

export function NISQTimeline() {
  const width = 720
  const height = 150
  const left = 60
  const right = width - 40
  const yLine = 90

  const xAt = (year: number) => {
    const t0 = 2019
    const t1 = 2031
    return left + ((year - t0) / (t1 - t0)) * (right - left)
  }

  return (
    <Figure
      caption={
        <>
          <strong>NISQ → early-FTQC timeline.</strong> With a distance-27 surface
          code, one logical qubit costs about 1,457 physical qubits
          [Acharya et al. 2025]. Even when early FTQC machines arrive around 2029,
          they&apos;ll only handle very small systems — so squeezing
          utility-scale results out of today&apos;s NISQ hardware is the bridge we
          need.
        </>
      }
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: 760 }}
        className="text-foreground"
      >
        <line
          x1={left}
          y1={yLine}
          x2={right}
          y2={yLine}
          stroke="currentColor"
        />
        {[2019, 2022, 2025, 2029, 2031].map((yr) => (
          <g key={yr}>
            <line
              x1={xAt(yr)}
              y1={yLine - 5}
              x2={xAt(yr)}
              y2={yLine + 5}
              stroke="currentColor"
            />
            <text
              x={xAt(yr)}
              y={yLine + 22}
              fontSize={11}
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              fill="currentColor"
            >
              {yr}
            </text>
          </g>
        ))}
        <rect
          x={xAt(2019)}
          y={yLine - 30}
          width={xAt(2029) - xAt(2019)}
          height={20}
          rx={3}
          fill="rgba(96, 165, 250, 0.2)"
          stroke="currentColor"
        />
        <text
          x={(xAt(2019) + xAt(2029)) / 2}
          y={yLine - 16}
          textAnchor="middle"
          fontSize={12}
          fill="currentColor"
        >
          NISQ + QEM (this work)
        </text>
        <rect
          x={xAt(2029)}
          y={yLine - 30}
          width={xAt(2031) - xAt(2029)}
          height={20}
          rx={3}
          fill="rgba(245, 158, 11, 0.18)"
          stroke="currentColor"
        />
        <text
          x={(xAt(2029) + xAt(2031)) / 2}
          y={yLine - 16}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
        >
          early FTQC
        </text>
        <text
          x={xAt(2029)}
          y={yLine + 50}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          opacity={0.8}
        >
          ~1457 physical qubits per 1 logical qubit
        </text>
        <text
          x={xAt(2029)}
          y={yLine + 65}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          opacity={0.8}
        >
          (surface code, distance 27, LER 10⁻⁶)
        </text>
      </svg>
    </Figure>
  )
}
