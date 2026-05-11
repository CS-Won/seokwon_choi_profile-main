import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { QFTCircuit } from "./diagrams"

export default function Week7() {
  return (
    <>
      <p>
        Now we go from continuous Fourier transforms to the discrete version a
        computer can actually run, and then to the quantum version — the QFT.
        The cool thing is that the QFT is exactly the same matrix as the
        classical DFT; the speedup comes from being able to apply that matrix{" "}
        <em>much faster</em> on a quantum register.
      </p>

      <h3>1. Discrete Fourier Transform (DFT)</h3>
      <p>
        Take a signal sampled at <MathInline>{`N`}</MathInline> points{" "}
        <MathInline>{`x_0, x_1, \\dots, x_{N-1}`}</MathInline>. The DFT gives
        you <MathInline>{`N`}</MathInline> frequency coefficients:
      </p>

      <MathBlock>{`y_k \\;=\\; \\frac{1}{\\sqrt N}\\sum_{j=0}^{N-1} x_j\\,e^{-2\\pi i\\,jk / N}, \\quad k = 0, 1, \\dots, N - 1`}</MathBlock>

      <p>
        That&apos;s a linear transformation with matrix entries{" "}
        <MathInline>{`F_{kj} = \\tfrac{1}{\\sqrt N}\\,e^{-2\\pi i jk/N}`}</MathInline>.
        Done naively it costs <MathInline>{`O(N^2)`}</MathInline> arithmetic
        operations. The classical <strong>Fast Fourier Transform (FFT)</strong>{" "}
        brings this down to <MathInline>{`O(N\\log N)`}</MathInline> by
        recursively splitting even and odd indices.
      </p>

      <h3>2. Quantum Fourier Transform — the definition</h3>
      <p>
        We just promote the DFT to act on quantum states. Suppose we have{" "}
        <MathInline>{`n`}</MathInline> qubits, so{" "}
        <MathInline>{`N = 2^n`}</MathInline> basis states. The QFT is the
        unitary:
      </p>

      <MathBlock>{`\\text{QFT}\\,|j\\rangle \\;=\\; \\frac{1}{\\sqrt N}\\sum_{k=0}^{N-1} e^{2\\pi i\\,jk/N}\\,|k\\rangle`}</MathBlock>

      <p>And on a general superposition:</p>

      <MathBlock>{`\\text{QFT}\\!\\left(\\sum_j x_j\\,|j\\rangle\\right) \\;=\\; \\sum_k y_k\\,|k\\rangle, \\quad y_k = \\frac{1}{\\sqrt N}\\sum_j x_j\\,e^{2\\pi i jk/N}`}</MathBlock>

      <p>
        Same coefficients as the classical DFT, but they live in the
        <em>amplitudes</em> of a quantum state. Whether we can <em>read out</em>{" "}
        those amplitudes is a separate question — for most algorithms we just
        care that some clever measurement on the QFT-transformed state gives
        the answer we want.
      </p>

      <h3>3. The QFT circuit</h3>
      <p>
        The clever decomposition uses Hadamards and{" "}
        <strong>controlled phase rotations</strong>:
      </p>

      <MathBlock>{`R_k \\;=\\; \\begin{pmatrix} 1 & 0 \\\\ 0 & e^{2\\pi i / 2^k} \\end{pmatrix}`}</MathBlock>

      <p>Here&apos;s how the QFT acts on the basis state{" "}
        <MathInline>{`|j_1 j_2 \\dots j_n\\rangle`}</MathInline>:
      </p>

      <MathBlock>{`\\text{QFT}\\,|j_1 j_2 \\dots j_n\\rangle \\;=\\; \\frac{1}{\\sqrt{2^n}}\\bigotimes_{l=1}^{n}\\!\\left(|0\\rangle + e^{2\\pi i\\,0.j_l j_{l+1}\\dots j_n}\\,|1\\rangle\\right)`}</MathBlock>

      <p>
        Here{" "}
        <MathInline>{`0.j_l j_{l+1}\\dots j_n`}</MathInline> means the binary
        fraction <MathInline>{`j_l/2 + j_{l+1}/4 + \\dots`}</MathInline>. Each
        output qubit is a Hadamarded state with an extra phase that depends on
        all the lower input qubits — which is exactly what a chain of
        controlled phase rotations gives you.
      </p>

      <QFTCircuit />

      <p>
        The pattern: on each qubit, apply Hadamard, then apply controlled-<MathInline>{`R_2, R_3, \\dots`}</MathInline>{" "}
        from every qubit below. After all qubits are processed, a SWAP layer
        reverses their order to match the textbook definition.
      </p>

      <h3>4. Gate count and the speedup</h3>
      <p>
        Counting up: <MathInline>{`n`}</MathInline> Hadamards plus, for each
        qubit, up to <MathInline>{`n - 1`}</MathInline> controlled phases.
        Total:
      </p>

      <MathBlock>{`\\#\\text{gates} \\;\\sim\\; \\frac{n(n + 1)}{2} \\;=\\; O(n^2) \\;=\\; O(\\log^2 N)`}</MathBlock>

      <p>
        Compare to classical FFT (<MathInline>{`O(N\\log N)`}</MathInline>) and
        classical DFT (<MathInline>{`O(N^2)`}</MathInline>). The QFT is{" "}
        <strong>exponentially faster</strong>, with the giant caveat that you
        can&apos;t read all <MathInline>{`N`}</MathInline> coefficients out;
        you only get to sample. Algorithms like Shor&apos;s are designed so
        that one sample is all you need.
      </p>

      <table className="w-full max-w-md border-collapse text-sm">
        <thead>
          <tr className="bg-muted/50">
            <th className="border border-border px-3 py-1.5 text-left">Algorithm</th>
            <th className="border border-border px-3 py-1.5 text-left">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-border px-3 py-1.5">DFT</td>
            <td className="border border-border px-3 py-1.5 font-mono">O(N²)</td>
          </tr>
          <tr>
            <td className="border border-border px-3 py-1.5">FFT</td>
            <td className="border border-border px-3 py-1.5 font-mono">O(N log N)</td>
          </tr>
          <tr>
            <td className="border border-border px-3 py-1.5">QFT</td>
            <td className="border border-border px-3 py-1.5 font-mono">O(log² N) = O(n²)</td>
          </tr>
        </tbody>
      </table>

      <h3>5. Sanity check: 2-qubit QFT explicitly</h3>
      <p>For <MathInline>{`n = 2`}</MathInline>, the QFT matrix is</p>

      <MathBlock>{`F_4 \\;=\\; \\frac{1}{2}\\begin{pmatrix} 1 & 1 & 1 & 1 \\\\ 1 & i & -1 & -i \\\\ 1 & -1 & 1 & -1 \\\\ 1 & -i & -1 & i \\end{pmatrix}`}</MathBlock>

      <p>
        And the circuit version is just Hadamard on qubit 0, controlled-<MathInline>{`R_2`}</MathInline>{" "}
        from qubit 1 to qubit 0, Hadamard on qubit 1, then SWAP. Multiplying
        those four matrices gives <MathInline>{`F_4`}</MathInline>. Same
        unitary, just built out of one- and two-qubit gates.
      </p>

      <h3>Recap</h3>
      <ul>
        <li>
          QFT =&nbsp;DFT in amplitudes:{" "}
          <MathInline>{`|j\\rangle \\to \\tfrac{1}{\\sqrt N}\\sum_k e^{2\\pi i jk/N}|k\\rangle`}</MathInline>.
        </li>
        <li>
          Circuit: Hadamards + controlled phase rotations + SWAPs.
        </li>
        <li>
          Gate count{" "}
          <MathInline>{`O(\\log^2 N)`}</MathInline> vs classical{" "}
          <MathInline>{`O(N\\log N)`}</MathInline>.
        </li>
        <li>
          The exponential speedup is real, but you only get to <em>sample</em>{" "}
          the output. Algorithms must be designed with that in mind.
        </li>
      </ul>
      <p>Next week: Deutsch–Jozsa, our first algorithm with a clear quantum advantage.</p>
    </>
  )
}
