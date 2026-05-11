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

function GateBox({
  x,
  y,
  w = 28,
  h = 26,
  label,
  fill = "var(--card)",
}: {
  x: number
  y: number
  w?: number
  h?: number
  label: string
  fill?: string
}) {
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={3}
        fill={fill}
        stroke="currentColor"
        strokeWidth={1}
      />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize={11}
        fill="currentColor"
        fontFamily="ui-monospace, monospace"
      >
        {label}
      </text>
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
    <g stroke="currentColor" fill="currentColor">
      <line x1={x} y1={yControl} x2={x} y2={yTarget} strokeWidth={1.2} />
      <circle cx={x} cy={yControl} r={3} />
      <circle cx={x} cy={yTarget} r={8} fill="var(--background)" />
      <line x1={x - 6} y1={yTarget} x2={x + 6} y2={yTarget} strokeWidth={1.2} />
      <line x1={x} y1={yTarget - 6} x2={x} y2={yTarget + 6} strokeWidth={1.2} />
    </g>
  )
}

function MeasureSymbol({ x, y }: { x: number; y: number }) {
  return (
    <g stroke="currentColor" fill="none">
      <rect
        x={x - 14}
        y={y - 13}
        width={28}
        height={26}
        rx={3}
        fill="var(--card)"
      />
      <path d={`M ${x - 7} ${y + 5} A 7 7 0 0 1 ${x + 7} ${y + 5}`} />
      <line x1={x} y1={y + 5} x2={x + 7} y2={y - 6} />
    </g>
  )
}

export function BlochSphere() {
  const cx = 130
  const cy = 130
  const r = 90
  return (
    <Figure
      caption={
        <>
          <strong>Bloch sphere.</strong> Any single-qubit pure state lives on the
          surface of this sphere. The north pole is{" "}
          <span className="font-mono">|0⟩</span>, the south pole is{" "}
          <span className="font-mono">|1⟩</span>, and any superposition sits
          somewhere on the surface, parametrized by{" "}
          <span className="font-mono">(θ, φ)</span>.
        </>
      }
    >
      <svg
        viewBox="0 0 320 280"
        width="100%"
        style={{ maxWidth: 380 }}
        className="text-foreground"
      >
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="currentColor"
          opacity={0.5}
        />
        <ellipse
          cx={cx}
          cy={cy}
          rx={r}
          ry={26}
          fill="none"
          stroke="currentColor"
          opacity={0.35}
        />
        <line
          x1={cx}
          y1={cy - r}
          x2={cx}
          y2={cy + r}
          stroke="currentColor"
          opacity={0.4}
          strokeDasharray="2 3"
        />
        <line
          x1={cx - r}
          y1={cy}
          x2={cx + r}
          y2={cy}
          stroke="currentColor"
          opacity={0.4}
          strokeDasharray="2 3"
        />
        <line
          x1={cx - 60}
          y1={cy + 35}
          x2={cx + 60}
          y2={cy - 35}
          stroke="currentColor"
          opacity={0.4}
          strokeDasharray="2 3"
        />
        <line
          x1={cx}
          y1={cy}
          x2={cx + 50}
          y2={cy - 65}
          stroke="currentColor"
          strokeWidth={1.6}
        />
        <circle cx={cx + 50} cy={cy - 65} r={3} fill="currentColor" />
        <text
          x={cx + 56}
          y={cy - 60}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |ψ⟩
        </text>
        <text
          x={cx - 8}
          y={cy - r - 6}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |0⟩ (z)
        </text>
        <text
          x={cx - 8}
          y={cy + r + 16}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |1⟩
        </text>
        <text
          x={cx + r + 4}
          y={cy + 4}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          x
        </text>
        <text
          x={cx + 64}
          y={cy - 32}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          y
        </text>
        <text
          x={cx + 18}
          y={cy - 40}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          θ
        </text>
        <text
          x={cx + 24}
          y={cy + 18}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          φ
        </text>
      </svg>
    </Figure>
  )
}

export function ClassicalLogicGates() {
  return (
    <Figure
      caption={
        <>
          <strong>Classical logic gates.</strong> Standard symbols for AND, OR,
          NOT, and XOR. Everything in a normal CPU is built from compositions of
          these.
        </>
      }
    >
      <svg
        viewBox="0 0 600 130"
        width="100%"
        style={{ maxWidth: 640 }}
        className="text-foreground"
      >
        <g fill="none" stroke="currentColor" strokeWidth={1.4}>
          <path d="M 30 30 H 60 A 30 30 0 0 1 60 90 H 30 Z" fill="var(--card)" />
          <line x1={12} y1={45} x2={30} y2={45} />
          <line x1={12} y1={75} x2={30} y2={75} />
          <line x1={90} y1={60} x2={108} y2={60} />
        </g>
        <text
          x={50}
          y={64}
          fontSize={11}
          textAnchor="middle"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          AND
        </text>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          transform="translate(150 0)"
        >
          <path
            d="M 30 30 Q 50 30 80 60 Q 50 90 30 90 Q 45 60 30 30 Z"
            fill="var(--card)"
          />
          <line x1={12} y1={45} x2={36} y2={45} />
          <line x1={12} y1={75} x2={36} y2={75} />
          <line x1={80} y1={60} x2={108} y2={60} />
        </g>
        <text
          x={200}
          y={64}
          fontSize={11}
          textAnchor="middle"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          OR
        </text>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          transform="translate(300 0)"
        >
          <polygon points="30,40 30,80 70,60" fill="var(--card)" />
          <circle cx={75} cy={60} r={5} fill="var(--card)" />
          <line x1={12} y1={60} x2={30} y2={60} />
          <line x1={80} y1={60} x2={108} y2={60} />
        </g>
        <text
          x={345}
          y={64}
          fontSize={11}
          textAnchor="middle"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          NOT
        </text>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          transform="translate(440 0)"
        >
          <path
            d="M 22 30 Q 37 60 22 90"
            stroke="currentColor"
            fill="none"
          />
          <path
            d="M 30 30 Q 50 30 80 60 Q 50 90 30 90 Q 45 60 30 30 Z"
            fill="var(--card)"
          />
          <line x1={8} y1={45} x2={28} y2={45} />
          <line x1={8} y1={75} x2={28} y2={75} />
          <line x1={80} y1={60} x2={108} y2={60} />
        </g>
        <text
          x={490}
          y={64}
          fontSize={11}
          textAnchor="middle"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          XOR
        </text>
      </svg>
    </Figure>
  )
}

export function BellCircuit() {
  const y0 = 36
  const y1 = 92
  return (
    <Figure
      caption={
        <>
          <strong>Bell-state preparation circuit.</strong> Apply Hadamard to the
          first qubit, then CNOT with the first qubit as control. Starting from{" "}
          <span className="font-mono">|00⟩</span>, the circuit outputs the
          maximally entangled state{" "}
          <span className="font-mono">(|00⟩ + |11⟩)/√2</span>.
        </>
      }
    >
      <svg
        viewBox="0 0 480 130"
        width="100%"
        style={{ maxWidth: 540 }}
        className="text-foreground"
      >
        <text
          x={12}
          y={y0 + 4}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |0⟩
        </text>
        <text
          x={12}
          y={y1 + 4}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |0⟩
        </text>
        <line x1={50} y1={y0} x2={460} y2={y0} stroke="currentColor" opacity={0.55} />
        <line x1={50} y1={y1} x2={460} y2={y1} stroke="currentColor" opacity={0.55} />
        <GateBox x={140} y={y0} label="H" />
        <CXGate x={240} yControl={y0} yTarget={y1} />
        <MeasureSymbol x={360} y={y0} />
        <MeasureSymbol x={360} y={y1} />
        <text
          x={420}
          y={y0 + 4}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          → c0
        </text>
        <text
          x={420}
          y={y1 + 4}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          → c1
        </text>
      </svg>
    </Figure>
  )
}

export function TeleportationCircuit() {
  const yA = 36
  const yB = 80
  const yC = 124
  return (
    <Figure
      caption={
        <>
          <strong>Quantum teleportation.</strong> Alice holds the secret state{" "}
          <span className="font-mono">|ψ⟩</span> on the top wire and shares a
          Bell pair with Bob (middle/bottom). Alice does a Bell-basis measurement
          (CNOT + H + measure), sends two classical bits to Bob, and Bob applies
          X / Z conditionally to reconstruct{" "}
          <span className="font-mono">|ψ⟩</span> on his qubit.
        </>
      }
    >
      <svg
        viewBox="0 0 620 160"
        width="100%"
        style={{ maxWidth: 700 }}
        className="text-foreground"
      >
        <text
          x={8}
          y={yA + 4}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |ψ⟩
        </text>
        <text
          x={8}
          y={yB + 4}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |0⟩
        </text>
        <text
          x={8}
          y={yC + 4}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |0⟩
        </text>
        <line x1={48} y1={yA} x2={600} y2={yA} stroke="currentColor" opacity={0.55} />
        <line x1={48} y1={yB} x2={600} y2={yB} stroke="currentColor" opacity={0.55} />
        <line x1={48} y1={yC} x2={600} y2={yC} stroke="currentColor" opacity={0.55} />
        <GateBox x={120} y={yB} label="H" />
        <CXGate x={170} yControl={yB} yTarget={yC} />
        <text
          x={170}
          y={yC + 26}
          fontSize={9}
          textAnchor="middle"
          fill="currentColor"
          opacity={0.7}
        >
          (Bell pair)
        </text>
        <CXGate x={260} yControl={yA} yTarget={yB} />
        <GateBox x={310} y={yA} label="H" />
        <MeasureSymbol x={360} y={yA} />
        <MeasureSymbol x={360} y={yB} />
        <line
          x1={373}
          y1={yA}
          x2={440}
          y2={yA}
          stroke="currentColor"
          strokeDasharray="3 3"
          opacity={0.7}
        />
        <line
          x1={373}
          y1={yB}
          x2={440}
          y2={yB}
          stroke="currentColor"
          strokeDasharray="3 3"
          opacity={0.7}
        />
        <line
          x1={440}
          y1={yA}
          x2={440}
          y2={yC - 12}
          stroke="currentColor"
          strokeDasharray="3 3"
          opacity={0.7}
        />
        <line
          x1={440}
          y1={yB}
          x2={440}
          y2={yC - 12}
          stroke="currentColor"
          strokeDasharray="3 3"
          opacity={0.7}
        />
        <GateBox x={470} y={yC} label="X^m2" w={42} />
        <GateBox x={530} y={yC} label="Z^m1" w={42} />
        <text
          x={585}
          y={yC + 4}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |ψ⟩
        </text>
      </svg>
    </Figure>
  )
}

export function QFTCircuit() {
  const ys = [36, 84, 132]
  return (
    <Figure
      caption={
        <>
          <strong>QFT on 3 qubits.</strong> Each qubit gets a Hadamard, then
          gathers controlled phase rotations{" "}
          <span className="font-mono">R_k = diag(1, e^(2πi/2^k))</span> from the
          qubits below it. A final SWAP reverses the qubit order. For{" "}
          <span className="font-mono">n</span> qubits the circuit uses{" "}
          <span className="font-mono">O(n²)</span> gates.
        </>
      }
    >
      <svg
        viewBox="0 0 660 180"
        width="100%"
        style={{ maxWidth: 720 }}
        className="text-foreground"
      >
        {ys.map((y, i) => (
          <g key={i}>
            <text
              x={8}
              y={y + 4}
              fontSize={12}
              fill="currentColor"
              fontFamily="ui-monospace, monospace"
            >
              q{i}
            </text>
            <line
              x1={42}
              y1={y}
              x2={640}
              y2={y}
              stroke="currentColor"
              opacity={0.55}
            />
          </g>
        ))}
        <GateBox x={90} y={ys[0]} label="H" />
        <g stroke="currentColor">
          <line x1={150} y1={ys[1]} x2={150} y2={ys[0]} strokeWidth={1.2} />
          <circle cx={150} cy={ys[1]} r={3} fill="currentColor" />
        </g>
        <GateBox x={150} y={ys[0]} label="R2" w={34} />
        <g stroke="currentColor">
          <line x1={210} y1={ys[2]} x2={210} y2={ys[0]} strokeWidth={1.2} />
          <circle cx={210} cy={ys[2]} r={3} fill="currentColor" />
        </g>
        <GateBox x={210} y={ys[0]} label="R3" w={34} />
        <GateBox x={290} y={ys[1]} label="H" />
        <g stroke="currentColor">
          <line x1={350} y1={ys[2]} x2={350} y2={ys[1]} strokeWidth={1.2} />
          <circle cx={350} cy={ys[2]} r={3} fill="currentColor" />
        </g>
        <GateBox x={350} y={ys[1]} label="R2" w={34} />
        <GateBox x={430} y={ys[2]} label="H" />
        <g stroke="currentColor">
          <line x1={510} y1={ys[0]} x2={510} y2={ys[2]} strokeWidth={1.2} />
          <text
            x={520}
            y={ys[0] + 4}
            fontSize={12}
            fill="currentColor"
            fontFamily="ui-monospace, monospace"
          >
            ×
          </text>
          <text
            x={520}
            y={ys[2] + 4}
            fontSize={12}
            fill="currentColor"
            fontFamily="ui-monospace, monospace"
          >
            ×
          </text>
        </g>
        <text
          x={510}
          y={ys[2] + 28}
          fontSize={10}
          textAnchor="middle"
          fill="currentColor"
          opacity={0.7}
          fontFamily="ui-monospace, monospace"
        >
          SWAP
        </text>
      </svg>
    </Figure>
  )
}

export function DeutschJozsaCircuit() {
  const ys = [36, 76, 116, 156]
  return (
    <Figure
      caption={
        <>
          <strong>Deutsch–Jozsa circuit.</strong> Initialize the data register at{" "}
          <span className="font-mono">|0⟩</span> and the ancilla at{" "}
          <span className="font-mono">|1⟩</span>, apply Hadamard to all qubits,
          query the oracle <span className="font-mono">U_f</span> exactly once,
          Hadamard the data register again, and measure. The result is{" "}
          <span className="font-mono">|0…0⟩</span> if and only if{" "}
          <span className="font-mono">f</span> is constant.
        </>
      }
    >
      <svg
        viewBox="0 0 660 200"
        width="100%"
        style={{ maxWidth: 720 }}
        className="text-foreground"
      >
        {ys.map((y, i) => (
          <g key={i}>
            <text
              x={6}
              y={y + 4}
              fontSize={12}
              fill="currentColor"
              fontFamily="ui-monospace, monospace"
            >
              {i === ys.length - 1 ? "|1⟩" : "|0⟩"}
            </text>
            <line
              x1={48}
              y1={y}
              x2={640}
              y2={y}
              stroke="currentColor"
              opacity={0.55}
            />
          </g>
        ))}
        {ys.map((y, i) => (
          <GateBox key={`h1-${i}`} x={110} y={y} label="H" />
        ))}
        <rect
          x={180}
          y={ys[0] - 18}
          width={140}
          height={ys[ys.length - 1] - ys[0] + 36}
          rx={4}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={250}
          y={ys[0] + (ys[ys.length - 1] - ys[0]) / 2 + 4}
          textAnchor="middle"
          fontSize={14}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          U_f
        </text>
        {ys.slice(0, -1).map((y, i) => (
          <GateBox key={`h2-${i}`} x={400} y={y} label="H" />
        ))}
        {ys.slice(0, -1).map((y, i) => (
          <MeasureSymbol key={`m-${i}`} x={500} y={y} />
        ))}
        <text
          x={580}
          y={ys[0] + (ys[ys.length - 2] - ys[0]) / 2 + 4}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          constant?
        </text>
      </svg>
    </Figure>
  )
}

export function ShorCircuit() {
  return (
    <Figure
      caption={
        <>
          <strong>Shor&apos;s algorithm sketch.</strong> The two registers start
          in <span className="font-mono">|0⟩|0⟩</span>. Hadamard everything in
          the top register, run modular exponentiation{" "}
          <span className="font-mono">|x⟩|0⟩ → |x⟩|aˣ mod N⟩</span> as a quantum
          oracle, apply inverse QFT to the top register, and measure. The
          measured value, fed through continued-fraction expansion, gives the
          period <span className="font-mono">r</span>.
        </>
      }
    >
      <svg
        viewBox="0 0 720 200"
        width="100%"
        style={{ maxWidth: 760 }}
        className="text-foreground"
      >
        <line x1={70} y1={50} x2={700} y2={50} stroke="currentColor" opacity={0.55} />
        <line x1={70} y1={130} x2={700} y2={130} stroke="currentColor" opacity={0.55} />
        <text
          x={6}
          y={45}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |0⟩
        </text>
        <text
          x={6}
          y={55}
          fontSize={9}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          (2n qubits)
        </text>
        <text
          x={6}
          y={125}
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |0⟩
        </text>
        <text
          x={6}
          y={135}
          fontSize={9}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          (n qubits)
        </text>
        <rect
          x={100}
          y={36}
          width={60}
          height={28}
          rx={3}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={130}
          y={54}
          textAnchor="middle"
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          H ⊗ⁿ
        </text>
        <rect
          x={200}
          y={26}
          width={170}
          height={120}
          rx={4}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={285}
          y={80}
          textAnchor="middle"
          fontSize={13}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          U_a : |x⟩|y⟩
        </text>
        <text
          x={285}
          y={100}
          textAnchor="middle"
          fontSize={13}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          → |x⟩|aˣ mod N⟩
        </text>
        <rect
          x={420}
          y={36}
          width={80}
          height={28}
          rx={3}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={460}
          y={54}
          textAnchor="middle"
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          QFT⁻¹
        </text>
        <MeasureSymbol x={560} y={50} />
        <MeasureSymbol x={560} y={130} />
        <text
          x={630}
          y={56}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          → k
        </text>
        <text
          x={620}
          y={75}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          (continued frac.)
        </text>
        <text
          x={630}
          y={92}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          → r
        </text>
      </svg>
    </Figure>
  )
}

export function QNNCircuit() {
  return (
    <Figure
      caption={
        <>
          <strong>Variational QNN block.</strong> Encode a classical sample{" "}
          <span className="font-mono">x</span> into a quantum state, apply a
          parametrized ansatz <span className="font-mono">U(θ)</span>, measure
          some observable, and feed the expectation value to a classical
          optimizer that updates <span className="font-mono">θ</span>. The
          gradient comes from the parameter-shift rule, not from
          back-propagation through the device.
        </>
      }
    >
      <svg
        viewBox="0 0 680 200"
        width="100%"
        style={{ maxWidth: 720 }}
        className="text-foreground"
      >
        {[40, 90, 140].map((y, i) => (
          <g key={i}>
            <text
              x={6}
              y={y + 4}
              fontSize={12}
              fill="currentColor"
              fontFamily="ui-monospace, monospace"
            >
              q{i}
            </text>
            <line
              x1={48}
              y1={y}
              x2={620}
              y2={y}
              stroke="currentColor"
              opacity={0.55}
            />
          </g>
        ))}
        <rect
          x={70}
          y={26}
          width={120}
          height={128}
          rx={4}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={130}
          y={92}
          textAnchor="middle"
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          encode(x)
        </text>
        <rect
          x={220}
          y={26}
          width={180}
          height={128}
          rx={4}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={310}
          y={86}
          textAnchor="middle"
          fontSize={14}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          U(θ)
        </text>
        <text
          x={310}
          y={104}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.75}
        >
          parametrized ansatz
        </text>
        {[40, 90, 140].map((y, i) => (
          <MeasureSymbol key={`m-${i}`} x={450} y={y} />
        ))}
        <text
          x={520}
          y={56}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          ⟨O⟩(θ)
        </text>
        <text
          x={520}
          y={76}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          ↓
        </text>
        <text
          x={520}
          y={94}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          loss L(θ)
        </text>
        <text
          x={520}
          y={114}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          opacity={0.7}
        >
          ↓ classical
        </text>
        <text
          x={520}
          y={132}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          update θ
        </text>
      </svg>
    </Figure>
  )
}

export function ComplexityHierarchy() {
  return (
    <Figure
      caption={
        <>
          <strong>Where BQP sits.</strong> P is everything classical computers
          can solve in polynomial time. NP is everything you can{" "}
          <em>verify</em> in polynomial time. BQP is what quantum computers can
          solve efficiently with bounded error. Shor&apos;s algorithm puts
          factoring in BQP, but its NP status is still open.
        </>
      }
    >
      <svg
        viewBox="0 0 460 230"
        width="100%"
        style={{ maxWidth: 520 }}
        className="text-foreground"
      >
        <ellipse
          cx={230}
          cy={115}
          rx={190}
          ry={90}
          fill="none"
          stroke="currentColor"
        />
        <text
          x={230}
          y={45}
          textAnchor="middle"
          fontSize={13}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          NP
        </text>
        <ellipse
          cx={170}
          cy={130}
          rx={90}
          ry={60}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={170}
          y={134}
          textAnchor="middle"
          fontSize={13}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          P
        </text>
        <ellipse
          cx={310}
          cy={150}
          rx={90}
          ry={55}
          fill="rgba(96,165,250,0.2)"
          stroke="currentColor"
        />
        <text
          x={310}
          y={154}
          textAnchor="middle"
          fontSize={13}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          BQP
        </text>
        <text
          x={335}
          y={185}
          fontSize={10}
          fill="currentColor"
          opacity={0.8}
          fontFamily="ui-monospace, monospace"
        >
          factoring
        </text>
      </svg>
    </Figure>
  )
}

export function PolarizerDiagram() {
  return (
    <Figure
      caption={
        <>
          <strong>Polarizers and superposition.</strong> A photon passing through
          a vertical polarizer is in state{" "}
          <span className="font-mono">|↕⟩</span>. A second polarizer rotated by
          angle <span className="font-mono">θ</span> lets it through with
          probability <span className="font-mono">cos²θ</span> — exactly the
          Born rule for a qubit measurement.
        </>
      }
    >
      <svg
        viewBox="0 0 620 160"
        width="100%"
        style={{ maxWidth: 680 }}
        className="text-foreground"
      >
        <line
          x1={20}
          y1={80}
          x2={120}
          y2={80}
          stroke="currentColor"
          strokeWidth={1.4}
        />
        <text
          x={20}
          y={70}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          photon
        </text>
        <g transform="translate(140 80)">
          <rect x={-8} y={-44} width={16} height={88} fill="var(--card)" stroke="currentColor" />
          <line x1={0} y1={-40} x2={0} y2={40} stroke="currentColor" strokeWidth={1.6} />
          <text
            x={0}
            y={64}
            textAnchor="middle"
            fontSize={11}
            fill="currentColor"
            fontFamily="ui-monospace, monospace"
          >
            vertical
          </text>
        </g>
        <line
          x1={156}
          y1={80}
          x2={280}
          y2={80}
          stroke="currentColor"
          strokeWidth={1.4}
        />
        <text
          x={170}
          y={70}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          |↕⟩
        </text>
        <g transform="translate(300 80) rotate(-30)">
          <rect x={-8} y={-44} width={16} height={88} fill="var(--card)" stroke="currentColor" />
          <line x1={0} y1={-40} x2={0} y2={40} stroke="currentColor" strokeWidth={1.6} />
        </g>
        <text
          x={300}
          y={150}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          tilted by θ
        </text>
        <line
          x1={316}
          y1={80}
          x2={460}
          y2={80}
          stroke="currentColor"
          strokeWidth={1.4}
        />
        <text
          x={340}
          y={70}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          α|↕⟩ + β|↔⟩
        </text>
        <g transform="translate(480 80) rotate(-90)">
          <rect x={-8} y={-44} width={16} height={88} fill="var(--card)" stroke="currentColor" />
          <line x1={0} y1={-40} x2={0} y2={40} stroke="currentColor" strokeWidth={1.6} />
        </g>
        <text
          x={480}
          y={150}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          horizontal
        </text>
        <line
          x1={496}
          y1={80}
          x2={600}
          y2={80}
          stroke="currentColor"
          strokeWidth={1.4}
        />
        <text
          x={520}
          y={70}
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          prob cos²θ
        </text>
      </svg>
    </Figure>
  )
}

export function CNOTTruthTable() {
  return (
    <Figure
      caption={
        <>
          <strong>CNOT truth table.</strong> If the control qubit is 1, the
          target flips; otherwise nothing happens.
        </>
      }
    >
      <div className="text-foreground">
        <table className="border-collapse text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-3 py-1.5 font-mono">control</th>
              <th className="border border-border px-3 py-1.5 font-mono">target in</th>
              <th className="border border-border px-3 py-1.5 font-mono">target out</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0", "0", "0"],
              ["0", "1", "1"],
              ["1", "0", "1"],
              ["1", "1", "0"],
            ].map((row) => (
              <tr key={row.join("-")}>
                {row.map((c, i) => (
                  <td
                    key={i}
                    className="border border-border px-3 py-1 text-center font-mono"
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Figure>
  )
}
