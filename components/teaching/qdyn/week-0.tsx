import { MathBlock, MathInline } from "./math"
import { NISQTimeline } from "./diagrams"

export default function Week0() {
  return (
    <>
      <p>
        Before we touch any circuits, let me explain why we even bother running{" "}
        <strong>spin chain quench dynamics</strong> on today&apos;s noisy quantum
        computers. Once this is clear, all the tools we use later — Trotterization,
        error mitigation — will feel like the natural thing to do, not extra busywork.
      </p>

      <h3>1. Today&apos;s quantum computers are noisy</h3>
      <p>
        The machines that IBM, Google, and others build right now are pretty noisy.
        Single-qubit gates are okay, but two-qubit gates (like CNOT) have errors
        somewhere around 0.1% to 1%. The deeper your circuit gets, the more those
        errors pile up, and your signal slowly drowns in noise.
      </p>
      <p>
        The textbook fix is <strong>quantum error correction (QEC)</strong>: bundle
        many noisy physical qubits into one good &quot;logical&quot; qubit, and clean
        up errors with measurement and feedback. The catch is cost. A recent Google
        paper (Acharya et al., 2025) showed that getting one logical qubit with a{" "}
        <MathInline>{`10^{-6}`}</MathInline> logical error rate needs about{" "}
        <strong>1,457 physical qubits</strong> using a distance-27 surface code.
        Meanwhile the biggest in-service machines today have around 100–200 physical
        qubits. Even in the most optimistic timeline, early fault-tolerant quantum
        computers (FTQC) only show up around 2029.
      </p>

      <NISQTimeline />

      <h3>2. So we go with QEM instead</h3>
      <p>
        <strong>Quantum error mitigation (QEM)</strong> takes a different deal: we
        accept the noise, but try to undo its effect on the final answer using extra
        runs and some clever post-processing. The big win is that QEM needs almost{" "}
        <em>no extra qubits</em>, which makes it the only realistic option on today&apos;s
        hardware.
      </p>
      <p>In this course we go through five QEM techniques:</p>
      <ul>
        <li>
          <strong>TREX</strong> — Twirled Readout Error Extinction. Randomly flips
          qubits right before measurement to clean up readout noise.
        </li>
        <li>
          <strong>DD</strong> — Dynamical Decoupling. Pokes idle qubits with X
          pulses so they don&apos;t lose phase to the environment.
        </li>
        <li>
          <strong>PT</strong> — Pauli Twirling. Wraps two-qubit gates with random
          Paulis so &quot;directional&quot; errors look like a simple stochastic
          channel.
        </li>
        <li>
          <strong>ZNE</strong> — Zero-Noise Extrapolation. Runs the same circuit at
          1×, 3×, 5× noise on purpose, then extrapolates back to 0×.
        </li>
        <li>
          <strong>SM</strong> — Self-Mitigation. Builds a tiny &quot;test
          circuit&quot; whose ideal answer we already know, then uses it to measure
          the noise factor <MathInline>{`p`}</MathInline> and correct the real run.
        </li>
      </ul>

      <h3>3. What we&apos;ll actually pull off</h3>
      <p>
        Here&apos;s the concrete target, based on Choi, Chowdhury &amp; Yu&apos;s
        recent paper:
      </p>
      <ul>
        <li>
          Run quench dynamics of a 1D Heisenberg <strong>XXZ spin chain</strong> on
          IBM superconducting hardware, scaling up to{" "}
          <strong>104 qubits</strong>.
        </li>
        <li>
          Build the circuit using <strong>optimized second-order Trotterization</strong>.
          At the biggest size, the circuit uses more than <strong>3,000 CNOTs</strong>.
        </li>
        <li>
          Measure not only an observable (staggered magnetization) but also{" "}
          <strong>Rényi entanglement entropy</strong>, and compare to a classical
          benchmark (MPS-TDVP).
        </li>
        <li>
          Compare what ZNE alone can do versus what SM adds on top. Spoiler: at
          large sizes SM cuts the error by <strong>roughly 50%</strong>.
        </li>
      </ul>

      <h3>4. One-liner</h3>
      <MathBlock>{`\\text{NISQ} \\;+\\; \\text{QEM} \\;\\;\\xrightarrow{\\text{this course}}\\;\\; \\text{utility-scale simulation of many-body quantum dynamics}`}</MathBlock>

      <p>
        Starting next week we&apos;ll dig into what the XXZ spin chain actually is,
        how Trotterization chops <MathInline>{`e^{-iHt}`}</MathInline> into gates, and
        how each of the five QEM tools works under the hood.
      </p>
    </>
  )
}
