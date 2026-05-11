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

export function PreferenceMatrixSketch() {
  return (
    <Figure
      caption={
        <>
          A sparse <strong>user × item</strong> preference matrix. Dark cells are
          known ratings; blank entries are missing. Low-rank models assume the
          full matrix is close to a thin subspace (Drineas–Kerenidis–Raghavan,
          STOC 2002).
        </>
      }
    >
      <svg
        viewBox="0 0 320 200"
        width="100%"
        style={{ maxWidth: 360 }}
        className="text-foreground"
      >
        <text x={8} y={24} fontSize={12} fill="currentColor" fontFamily="ui-monospace">
          items →
        </text>
        <text
          x={8}
          y={100}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace"
          transform="rotate(-90 8 100)"
        >
          users
        </text>
        {Array.from({ length: 6 }, (_, r) =>
          Array.from({ length: 8 }, (_, c) => {
            const filled =
              (r + c * 3) % 5 !== 0 && (r * 2 + c) % 4 !== 0
            return (
              <rect
                key={`${r}-${c}`}
                x={48 + c * 28}
                y={36 + r * 24}
                width={24}
                height={18}
                rx={2}
                fill={filled ? "currentColor" : "var(--muted)"}
                opacity={filled ? 0.35 : 0.2}
                stroke="currentColor"
                strokeWidth={0.8}
              />
            )
          }),
        ).flat()}
        <text
          x={160}
          y={188}
          textAnchor="middle"
          fontSize={10}
          fill="currentColor"
          opacity={0.75}
          fontFamily="ui-monospace"
        >
          {"A \\in \\mathbb{R}^{m\\times n} (mostly unknown)"}
        </text>
      </svg>
    </Figure>
  )
}

export function HHLPipeline() {
  return (
    <Figure
      caption={
        <>
          <strong>HHL sketch.</strong> Prepare <span className="font-mono">|b⟩</span>,
          run phase estimation on{" "}
          <span className="font-mono">{"e^{iAt}"}</span> to
          tag eigenvalues, rotate ancilla amplitudes by{" "}
          <span className="font-mono">λ⁻¹</span>, then uncompute the eigenvalue
          register. The output encodes{" "}
          <span className="font-mono">A⁻¹|b⟩</span> up to normalization (Harrow,
          Hassidim, Lloyd, 2009).
        </>
      }
    >
      <svg
        viewBox="0 0 560 120"
        width="100%"
        style={{ maxWidth: 580 }}
        className="text-foreground"
      >
        <rect
          x={20}
          y={30}
          width={100}
          height={60}
          rx={4}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={70}
          y={64}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          |b⟩
        </text>
        <line
          x1={120}
          y1={60}
          x2={150}
          y2={60}
          stroke="currentColor"
          markerEnd="url(#ah)"
        />
        <rect
          x={150}
          y={25}
          width={110}
          height={70}
          rx={4}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={205}
          y={58}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          QPE
        </text>
        <text
          x={205}
          y={78}
          textAnchor="middle"
          fontSize={9}
          fill="currentColor"
          opacity={0.75}
        >
          {"(e^{iAt})"}
        </text>
        <line
          x1={260}
          y1={60}
          x2={290}
          y2={60}
          stroke="currentColor"
        />
        <rect
          x={290}
          y={25}
          width={120}
          height={70}
          rx={4}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={350}
          y={58}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          R(λ⁻¹)
        </text>
        <text
          x={350}
          y={78}
          textAnchor="middle"
          fontSize={9}
          fill="currentColor"
          opacity={0.75}
        >
          controlled
        </text>
        <line
          x1={410}
          y1={60}
          x2={440}
          y2={60}
          stroke="currentColor"
        />
        <rect
          x={440}
          y={25}
          width={100}
          height={70}
          rx={4}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={490}
          y={64}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          uncompute
        </text>
        <defs>
          <marker
            id="ah"
            markerWidth={8}
            markerHeight={8}
            refX={6}
            refY={3}
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </Figure>
  )
}

export function QuantumVsInspiredFlow() {
  return (
    <Figure
      caption={
        <>
          Same high-level story for Kerenidis–Prakash (2016) and Tang (2019):
          subsample / prepare access → approximate singular structure → project a
          user vector → round to a product index. The quantum version uses
          coherent linear algebra; the classical analogue uses{" "}
          <strong>ℓ² sampling</strong> instead of amplitudes.
        </>
      }
    >
      <svg
        viewBox="0 0 620 140"
        width="100%"
        style={{ maxWidth: 640 }}
        className="text-foreground"
      >
        <text x={20} y={28} fontSize={12} fontWeight={600} fill="currentColor">
          Quantum (KP)
        </text>
        <rect
          x={20}
          y={38}
          width={260}
          height={36}
          rx={3}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={150}
          y={60}
          textAnchor="middle"
          fontSize={10}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          BST prep → QSVE → HHL-style inversion → sample
        </text>
        <text x={320} y={28} fontSize={12} fontWeight={600} fill="currentColor">
          Quantum-inspired (Tang)
        </text>
        <rect
          x={320}
          y={38}
          width={280}
          height={36}
          rx={3}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={460}
          y={60}
          textAnchor="middle"
          fontSize={10}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          ℓ² sampling → modified FKV → SVD on small sketch → sample
        </text>
        <text
          x={310}
          y={118}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          opacity={0.85}
        >
          poly(k) · polylog(mn) vs poly(k) · log(mn) — same input model, no exponential gap
        </text>
      </svg>
    </Figure>
  )
}
