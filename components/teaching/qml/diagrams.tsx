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

export function VqaLoop() {
  return (
    <Figure
      caption={
        <>
          <strong>Variational quantum algorithm.</strong> A classical optimizer
          updates the parameters{" "}
          <span className="font-mono">θ</span> of a quantum ansatz{" "}
          <span className="font-mono">U(θ)</span> from measurements, looping
          until the loss settles (Cerezo et al., 2021).
        </>
      }
    >
      <svg
        viewBox="0 0 660 200"
        width="100%"
        style={{ maxWidth: 720 }}
        className="text-foreground"
      >
        <rect
          x={20}
          y={70}
          width={110}
          height={60}
          rx={4}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={75}
          y={96}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          encode(x)
        </text>
        <text
          x={75}
          y={114}
          textAnchor="middle"
          fontSize={9}
          fill="currentColor"
          opacity={0.7}
        >
          (basis/amp/angle)
        </text>
        <line x1={130} y1={100} x2={170} y2={100} stroke="currentColor" />
        <rect
          x={170}
          y={62}
          width={140}
          height={76}
          rx={4}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={240}
          y={94}
          textAnchor="middle"
          fontSize={13}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          U(θ)
        </text>
        <text
          x={240}
          y={114}
          textAnchor="middle"
          fontSize={10}
          fill="currentColor"
          opacity={0.7}
        >
          parametrized ansatz
        </text>
        <line x1={310} y1={100} x2={350} y2={100} stroke="currentColor" />
        <rect
          x={350}
          y={70}
          width={100}
          height={60}
          rx={4}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={400}
          y={96}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          measure
        </text>
        <text
          x={400}
          y={114}
          textAnchor="middle"
          fontSize={10}
          fill="currentColor"
          opacity={0.7}
        >
          ⟨O⟩(θ)
        </text>
        <line x1={450} y1={100} x2={490} y2={100} stroke="currentColor" />
        <rect
          x={490}
          y={70}
          width={150}
          height={60}
          rx={4}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={565}
          y={96}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          classical optimizer
        </text>
        <text
          x={565}
          y={114}
          textAnchor="middle"
          fontSize={10}
          fill="currentColor"
          opacity={0.7}
        >
          θ ← θ − η ∇L(θ)
        </text>
        <path
          d="M 565 130 v 30 q 0 10 -10 10 H 245 q -10 0 -10 -10 v -30"
          fill="none"
          stroke="currentColor"
          strokeDasharray="3 3"
        />
        <text
          x={400}
          y={185}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          opacity={0.85}
          fontFamily="ui-monospace"
        >
          loop on new θ
        </text>
      </svg>
    </Figure>
  )
}

export function EncodingComparison() {
  return (
    <Figure
      caption={
        <>
          <strong>Three families of data encodings.</strong> Basis encoding
          maps an <span className="font-mono">n</span>-bit string to{" "}
          <span className="font-mono">|x⟩</span>; amplitude encoding hides a
          dense vector in <span className="font-mono">log₂(N)</span> qubits;
          angle encoding spends one qubit per feature as an{" "}
          <span className="font-mono">R_y(x_i)</span> rotation (Schuld &amp;
          Petruccione, 2018).
        </>
      }
    >
      <svg
        viewBox="0 0 700 200"
        width="100%"
        style={{ maxWidth: 740 }}
        className="text-foreground"
      >
        <rect
          x={20}
          y={20}
          width={200}
          height={160}
          rx={6}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text x={120} y={42} textAnchor="middle" fontSize={12} fontWeight={600} fill="currentColor">
          Basis
        </text>
        <text x={120} y={70} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          x = 1011
        </text>
        <text x={120} y={92} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          ↓
        </text>
        <text x={120} y={114} textAnchor="middle" fontSize={12} fill="currentColor" fontFamily="ui-monospace">
          |1011⟩
        </text>
        <text x={120} y={154} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          1 qubit / bit
        </text>
        <text x={120} y={170} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          depth O(n) (X gates)
        </text>

        <rect
          x={250}
          y={20}
          width={200}
          height={160}
          rx={6}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text x={350} y={42} textAnchor="middle" fontSize={12} fontWeight={600} fill="currentColor">
          Amplitude
        </text>
        <text x={350} y={70} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          x ∈ ℝ^N , ‖x‖ = 1
        </text>
        <text x={350} y={92} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          ↓
        </text>
        <text x={350} y={114} textAnchor="middle" fontSize={12} fill="currentColor" fontFamily="ui-monospace">
          Σⱼ xⱼ |j⟩
        </text>
        <text x={350} y={154} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          log₂ N qubits
        </text>
        <text x={350} y={170} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          prep can be deep
        </text>

        <rect
          x={480}
          y={20}
          width={200}
          height={160}
          rx={6}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text x={580} y={42} textAnchor="middle" fontSize={12} fontWeight={600} fill="currentColor">
          Angle
        </text>
        <text x={580} y={70} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          x = (x₁, x₂, x₃)
        </text>
        <text x={580} y={92} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          ↓
        </text>
        <text x={580} y={114} textAnchor="middle" fontSize={12} fill="currentColor" fontFamily="ui-monospace">
          ⨂ᵢ R_y(xᵢ)|0⟩
        </text>
        <text x={580} y={154} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          1 qubit / feature
        </text>
        <text x={580} y={170} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          depth O(1) per layer
        </text>
      </svg>
    </Figure>
  )
}

export function ParameterShift() {
  return (
    <Figure
      caption={
        <>
          <strong>Parameter-shift rule.</strong> The gradient of an expectation
          value <span className="font-mono">⟨O⟩(θ)</span> is the difference of
          two circuit evaluations at shifted parameters{" "}
          <span className="font-mono">θ ± π/2</span> — no finite differences,
          no auto-diff inside the quantum device (Schuld &amp; Petruccione,
          2018; Cerezo et al., 2021).
        </>
      }
    >
      <svg
        viewBox="0 0 640 200"
        width="100%"
        style={{ maxWidth: 700 }}
        className="text-foreground"
      >
        <rect x={20} y={70} width={140} height={60} rx={4} fill="var(--muted)" stroke="currentColor" />
        <text x={90} y={96} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          ⟨O⟩(θ + π/2)
        </text>
        <text x={90} y={114} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          one shot
        </text>
        <text x={210} y={104} textAnchor="middle" fontSize={20} fill="currentColor">
          −
        </text>
        <rect x={250} y={70} width={140} height={60} rx={4} fill="var(--muted)" stroke="currentColor" />
        <text x={320} y={96} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          ⟨O⟩(θ − π/2)
        </text>
        <text x={320} y={114} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          one shot
        </text>
        <text x={420} y={104} textAnchor="middle" fontSize={16} fill="currentColor">
          ÷ 2 =
        </text>
        <rect x={470} y={62} width={150} height={76} rx={4} fill="var(--card)" stroke="currentColor" />
        <text x={545} y={98} textAnchor="middle" fontSize={12} fill="currentColor" fontFamily="ui-monospace">
          ∂⟨O⟩ / ∂θ
        </text>
        <text x={545} y={118} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          exact gradient
        </text>
      </svg>
    </Figure>
  )
}

export function LossLandscape() {
  return (
    <Figure
      caption={
        <>
          <strong>Loss landscape and gradient descent.</strong> Each step
          takes <span className="font-mono">θ</span> in the direction of the
          steepest descent <span className="font-mono">−∇L(θ)</span>, scaled
          by the learning rate <span className="font-mono">η</span>. Batch GD
          gives clean, monotone steps; SGD adds a noisy kick from each
          mini-batch, which is what lets it escape shallow local minima on the
          way to the global one.
        </>
      }
    >
      <svg
        viewBox="0 0 720 320"
        width="100%"
        style={{ maxWidth: 760 }}
        className="text-foreground"
      >
        <line x1={40} y1={280} x2={700} y2={280} stroke="currentColor" opacity={0.4} />
        <line x1={40} y1={40} x2={40} y2={280} stroke="currentColor" opacity={0.4} />
        <text x={700} y={296} textAnchor="end" fontSize={11} fill="currentColor" opacity={0.7} fontFamily="ui-monospace">
          θ
        </text>
        <text x={28} y={48} textAnchor="end" fontSize={11} fill="currentColor" opacity={0.7} fontFamily="ui-monospace">
          L(θ)
        </text>

        <path
          d="M 40 90 C 110 60, 170 250, 240 215 C 300 185, 340 110, 390 145 C 440 180, 520 280, 580 250 C 640 225, 660 175, 700 155"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
        />

        <g>
          <circle cx={80} cy={108} r={5} fill="var(--card)" stroke="currentColor" strokeWidth={1.4} />
          <text x={80} y={98} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            θ₀
          </text>
          <line x1={80} y1={108} x2={140} y2={155} stroke="currentColor" strokeWidth={1.4} markerEnd="url(#arrGd)" />

          <circle cx={140} cy={155} r={5} fill="var(--card)" stroke="currentColor" strokeWidth={1.4} />
          <text x={140} y={145} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            θ₁
          </text>
          <line x1={140} y1={155} x2={195} y2={195} stroke="currentColor" strokeWidth={1.4} markerEnd="url(#arrGd)" />

          <circle cx={195} cy={195} r={5} fill="var(--card)" stroke="currentColor" strokeWidth={1.4} />
          <text x={195} y={185} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            θ₂
          </text>
          <line x1={195} y1={195} x2={235} y2={213} stroke="currentColor" strokeWidth={1.4} markerEnd="url(#arrGd)" />

          <circle cx={240} cy={215} r={6} fill="currentColor" />
          <text x={240} y={205} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            θ*ₗₒcₐₗ
          </text>
        </g>

        <g opacity={0.85}>
          <path
            d="M 90 115 L 130 170 L 100 150 L 165 175 L 145 200 L 215 175 L 250 220 L 310 195 L 360 145 L 415 185 L 470 235 L 545 265 L 580 250 L 615 248"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeDasharray="4 3"
            markerEnd="url(#arrSgd)"
          />
        </g>

        <g>
          <circle cx={585} cy={252} r={6.5} fill="none" stroke="currentColor" strokeWidth={1.6} />
          <circle cx={585} cy={252} r={3} fill="currentColor" />
          <text x={585} y={272} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            θ*
          </text>
        </g>

        <text x={250} y={235} fontSize={10} fill="currentColor" opacity={0.75}>
          local min (GD trap)
        </text>
        <text x={510} y={290} fontSize={10} fill="currentColor" opacity={0.75}>
          global min
        </text>

        <g transform="translate(470, 60)">
          <rect width={220} height={70} rx={6} fill="var(--muted)" stroke="currentColor" opacity={0.9} />
          <line x1={12} y1={22} x2={36} y2={22} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#arrGd)" />
          <text x={44} y={26} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            Batch GD: θ ← θ − η ∇L
          </text>
          <line x1={12} y1={48} x2={36} y2={48} stroke="currentColor" strokeWidth={1.4} strokeDasharray="4 3" markerEnd="url(#arrSgd)" />
          <text x={44} y={52} fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            SGD: θ ← θ − η ∇̂L (noisy)
          </text>
        </g>

        <defs>
          <marker id="arrGd" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
          <marker id="arrSgd" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </Figure>
  )
}

export function PerceptronDiagram() {
  return (
    <Figure
      caption={
        <>
          <strong>The classical perceptron.</strong> A neuron takes inputs{" "}
          <span className="font-mono">x_i</span>, multiplies them by weights{" "}
          <span className="font-mono">w_i</span>, adds a bias{" "}
          <span className="font-mono">b</span>, and squashes the result through
          a nonlinearity <span className="font-mono">σ</span>. The output{" "}
          <span className="font-mono">a = σ(w·x + b)</span> is what gets passed
          to the next layer.
        </>
      }
    >
      <svg
        viewBox="0 0 640 240"
        width="100%"
        style={{ maxWidth: 700 }}
        className="text-foreground"
      >
        {[
          { y: 40, label: "x₁", w: "w₁" },
          { y: 100, label: "x₂", w: "w₂" },
          { y: 160, label: "x₃", w: "w₃" },
        ].map((n, i) => (
          <g key={i}>
            <circle
              cx={70}
              cy={n.y}
              r={18}
              fill="var(--muted)"
              stroke="currentColor"
            />
            <text
              x={70}
              y={n.y + 4}
              textAnchor="middle"
              fontSize={12}
              fill="currentColor"
              fontFamily="ui-monospace"
            >
              {n.label}
            </text>
            <line
              x1={88}
              y1={n.y}
              x2={272}
              y2={120}
              stroke="currentColor"
              opacity={0.5}
            />
            <text
              x={170}
              y={(n.y + 120) / 2 - 4}
              textAnchor="middle"
              fontSize={11}
              fill="currentColor"
              fontFamily="ui-monospace"
              opacity={0.8}
            >
              {n.w}
            </text>
          </g>
        ))}

        <text
          x={70}
          y={210}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          opacity={0.7}
        >
          inputs
        </text>

        <rect
          x={272}
          y={92}
          width={120}
          height={56}
          rx={6}
          fill="var(--card)"
          stroke="currentColor"
        />
        <text
          x={332}
          y={116}
          textAnchor="middle"
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          Σ wᵢ xᵢ + b
        </text>
        <text
          x={332}
          y={136}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          opacity={0.7}
          fontFamily="ui-monospace"
        >
          (pre-activation)
        </text>

        <line x1={392} y1={120} x2={440} y2={120} stroke="currentColor" />

        <rect
          x={440}
          y={92}
          width={80}
          height={56}
          rx={6}
          fill="var(--muted)"
          stroke="currentColor"
        />
        <text
          x={480}
          y={124}
          textAnchor="middle"
          fontSize={14}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          σ(·)
        </text>

        <line x1={520} y1={120} x2={560} y2={120} stroke="currentColor" markerEnd="url(#arrFf)" />

        <circle cx={580} cy={120} r={20} fill="var(--card)" stroke="currentColor" strokeWidth={1.6} />
        <text
          x={580}
          y={124}
          textAnchor="middle"
          fontSize={12}
          fill="currentColor"
          fontFamily="ui-monospace"
        >
          a
        </text>
        <text
          x={580}
          y={210}
          textAnchor="middle"
          fontSize={11}
          fill="currentColor"
          opacity={0.7}
        >
          output
        </text>

        <text
          x={70}
          y={228}
          fontSize={10}
          fill="currentColor"
          opacity={0.6}
        >
          bias b is added inside the Σ box
        </text>

        <defs>
          <marker id="arrFf" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </Figure>
  )
}

export function FeedForwardNetwork() {
  const layers = [
    { x: 80, ys: [40, 110, 180], label: "input" },
    { x: 260, ys: [30, 90, 150, 210], label: "hidden (1)" },
    { x: 440, ys: [50, 110, 170], label: "hidden (2)" },
    { x: 600, ys: [80, 160], label: "output" },
  ]
  return (
    <Figure
      caption={
        <>
          <strong>Feed-forward neural network.</strong> Signals flow strictly
          left-to-right through layers of neurons. Each layer applies an
          affine map followed by a nonlinearity:{" "}
          <span className="font-mono">
            a^(ℓ) = σ(W^(ℓ) a^(ℓ−1) + b^(ℓ))
          </span>
          . Stacking many of these is what makes a network &quot;deep&quot;.
        </>
      }
    >
      <svg
        viewBox="0 0 700 270"
        width="100%"
        style={{ maxWidth: 760 }}
        className="text-foreground"
      >
        {layers.slice(0, -1).map((L, li) =>
          L.ys.map((y, i) =>
            layers[li + 1].ys.map((y2, j) => (
              <line
                key={`${li}-${i}-${j}`}
                x1={L.x + 14}
                y1={y}
                x2={layers[li + 1].x - 14}
                y2={y2}
                stroke="currentColor"
                opacity={0.28}
              />
            )),
          ),
        )}

        {layers.map((L, li) => (
          <g key={li}>
            {L.ys.map((y, i) => (
              <circle
                key={i}
                cx={L.x}
                cy={y}
                r={14}
                fill={
                  li === 0
                    ? "var(--muted)"
                    : li === layers.length - 1
                      ? "var(--card)"
                      : "var(--card)"
                }
                stroke="currentColor"
                strokeWidth={1.4}
              />
            ))}
            <text
              x={L.x}
              y={250}
              textAnchor="middle"
              fontSize={11}
              fill="currentColor"
              opacity={0.75}
            >
              {L.label}
            </text>
          </g>
        ))}

        <text x={80} y={20} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          a⁽⁰⁾ = x
        </text>
        <text x={260} y={15} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          a⁽¹⁾
        </text>
        <text x={440} y={30} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          a⁽²⁾
        </text>
        <text x={600} y={60} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
          ŷ = a⁽ᴸ⁾
        </text>
      </svg>
    </Figure>
  )
}

export function ActivationFunctions() {
  const W = 200
  const H = 120
  function mapX(x: number) {
    return ((x + 4) / 8) * W
  }
  function mapY(y: number) {
    return H - ((y + 1) / 2) * H
  }
  function sigmoidPath() {
    const pts: string[] = []
    for (let i = 0; i <= 60; i++) {
      const x = -4 + (8 * i) / 60
      const y = 2 / (1 + Math.exp(-x)) - 1
      pts.push(`${mapX(x).toFixed(1)},${mapY(y).toFixed(1)}`)
    }
    return "M " + pts.join(" L ")
  }
  function tanhPath() {
    const pts: string[] = []
    for (let i = 0; i <= 60; i++) {
      const x = -4 + (8 * i) / 60
      const y = Math.tanh(x)
      pts.push(`${mapX(x).toFixed(1)},${mapY(y).toFixed(1)}`)
    }
    return "M " + pts.join(" L ")
  }
  function reluPath() {
    const pts: string[] = []
    for (let i = 0; i <= 60; i++) {
      const x = -4 + (8 * i) / 60
      const raw = Math.max(0, x)
      const y = Math.min(1, raw / 2)
      pts.push(`${mapX(x).toFixed(1)},${mapY(y).toFixed(1)}`)
    }
    return "M " + pts.join(" L ")
  }
  function axes() {
    return (
      <>
        <line x1={0} y1={H / 2} x2={W} y2={H / 2} stroke="currentColor" opacity={0.35} />
        <line x1={W / 2} y1={0} x2={W / 2} y2={H} stroke="currentColor" opacity={0.35} />
      </>
    )
  }
  return (
    <Figure
      caption={
        <>
          <strong>Common activation functions.</strong> Sigmoid maps to{" "}
          <span className="font-mono">(0, 1)</span> and saturates; tanh is
          zero-centred in <span className="font-mono">(−1, 1)</span>; ReLU is
          piecewise-linear and the most common default in modern deep
          learning.
        </>
      }
    >
      <svg
        viewBox="0 0 660 170"
        width="100%"
        style={{ maxWidth: 700 }}
        className="text-foreground"
      >
        <g transform="translate(20, 20)">
          {axes()}
          <path d={sigmoidPath()} fill="none" stroke="currentColor" strokeWidth={1.8} />
          <text x={W / 2} y={H + 16} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            σ(x) = 1 / (1 + e⁻ˣ)
          </text>
        </g>
        <g transform="translate(240, 20)">
          {axes()}
          <path d={tanhPath()} fill="none" stroke="currentColor" strokeWidth={1.8} />
          <text x={W / 2} y={H + 16} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            tanh(x)
          </text>
        </g>
        <g transform="translate(460, 20)">
          {axes()}
          <path d={reluPath()} fill="none" stroke="currentColor" strokeWidth={1.8} />
          <text x={W / 2} y={H + 16} textAnchor="middle" fontSize={11} fill="currentColor" fontFamily="ui-monospace">
            ReLU(x) = max(0, x)
          </text>
        </g>
      </svg>
    </Figure>
  )
}

export function DataReUploading() {
  return (
    <Figure
      caption={
        <>
          <strong>Data re-uploading.</strong> Alternate parametrized layers{" "}
          <span className="font-mono">W(θ_ℓ)</span> with re-encoded data{" "}
          <span className="font-mono">V(x)</span>. The output behaves like a
          Fourier series in <span className="font-mono">x</span> whose
          coefficients are set by <span className="font-mono">θ</span> — even on
          a single qubit (Schuld &amp; Petruccione, 2018; Cerezo et al., 2021).
        </>
      }
    >
      <svg
        viewBox="0 0 720 110"
        width="100%"
        style={{ maxWidth: 760 }}
        className="text-foreground"
      >
        <line x1={20} y1={55} x2={700} y2={55} stroke="currentColor" opacity={0.6} />
        <text x={6} y={59} fontSize={12} fill="currentColor" fontFamily="ui-monospace">
          |0⟩
        </text>
        {[
          { x: 80, label: "V(x)", muted: true },
          { x: 160, label: "W(θ₁)" },
          { x: 240, label: "V(x)", muted: true },
          { x: 320, label: "W(θ₂)" },
          { x: 400, label: "V(x)", muted: true },
          { x: 480, label: "W(θ₃)" },
          { x: 560, label: "V(x)", muted: true },
          { x: 640, label: "W(θ_L)" },
        ].map((g, i) => (
          <g key={i}>
            <rect
              x={g.x - 28}
              y={36}
              width={56}
              height={38}
              rx={4}
              fill={g.muted ? "var(--muted)" : "var(--card)"}
              stroke="currentColor"
            />
            <text
              x={g.x}
              y={59}
              textAnchor="middle"
              fontSize={11}
              fill="currentColor"
              fontFamily="ui-monospace"
            >
              {g.label}
            </text>
          </g>
        ))}
        <circle cx={690} cy={55} r={5} fill="currentColor" />
        <text x={690} y={28} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
          measure
        </text>
      </svg>
    </Figure>
  )
}
