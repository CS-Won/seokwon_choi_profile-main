import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { BlochSphere, PolarizerDiagram } from "./diagrams"

export default function Week3() {
  return (
    <>
      <p>
        Last week was abstract linear algebra. This week we tie all of that
        directly to a physical qubit. We&apos;ll see what a qubit state
        actually looks like, why the Bloch sphere is the right picture, how
        multi-qubit states work, and what changes for mixed states (which is
        what real devices give you).
      </p>

      <h3>1. How does a qubit store information?</h3>
      <p>
        In a classical bit, you pick a physical thing with two stable states:
        a light bulb that is on (= 1) or off (= 0). For a qubit, you need a
        system that can sit in <em>both</em> at once with complex amplitudes.
        A great pedagogical example is the polarization of a photon.
      </p>

      <PolarizerDiagram />

      <p>
        Send unpolarized light through a vertical polarizer and only the
        vertical component comes out — call that state{" "}
        <MathInline>{`|0\\rangle`}</MathInline>. Add a second polarizer at
        90°, and nothing makes it through. Tilt the second polarizer by some
        angle <MathInline>{`\\theta`}</MathInline> and a fraction{" "}
        <MathInline>{`\\cos^2\\theta`}</MathInline> survives. That fraction is
        exactly the Born rule for a qubit in state{" "}
        <MathInline>{`\\cos(\\theta)|0\\rangle + \\sin(\\theta)|1\\rangle`}</MathInline>.
      </p>

      <h3>2. Normalization</h3>
      <p>A general single-qubit pure state is</p>

      <MathBlock>{`|\\psi\\rangle \\;=\\; \\alpha|0\\rangle + \\beta|1\\rangle, \\qquad \\alpha, \\beta \\in \\mathbb C`}</MathBlock>

      <p>and the probabilities of measuring 0 or 1 must add up to 1:</p>

      <MathBlock>{`|\\alpha|^2 + |\\beta|^2 \\;=\\; 1, \\qquad \\langle\\psi|\\psi\\rangle = 1`}</MathBlock>

      <p>
        So <MathInline>{`\\alpha, \\beta`}</MathInline> are complex numbers
        constrained to a unit sphere in <MathInline>{`\\mathbb C^2`}</MathInline>.
      </p>

      <h3>3. Complex numbers, in five lines</h3>
      <p>
        A complex number is{" "}
        <MathInline>{`c = a + b i`}</MathInline> with{" "}
        <MathInline>{`i^2 = -1`}</MathInline>. The conjugate is{" "}
        <MathInline>{`c^* = a - b i`}</MathInline>, and the modulus is
      </p>

      <MathBlock>{`|c| \\;=\\; \\sqrt{c^*\\,c} \\;=\\; \\sqrt{a^2 + b^2}`}</MathBlock>

      <p>Euler&apos;s identity gives us the polar form:</p>

      <MathBlock>{`e^{i\\theta} \\;=\\; \\cos\\theta + i\\sin\\theta, \\quad c \\;=\\; |c|\\,e^{i\\arg c}`}</MathBlock>

      <h3>4. Phase, global phase, and the Bloch sphere</h3>
      <p>
        Using normalization and Euler&apos;s identity, we can rewrite a
        general qubit state as:
      </p>

      <MathBlock>{`|\\psi\\rangle \\;=\\; e^{i\\gamma}\\!\\left(\\cos\\tfrac{\\theta}{2}\\,|0\\rangle + e^{i\\varphi}\\sin\\tfrac{\\theta}{2}\\,|1\\rangle\\right)`}</MathBlock>

      <p>
        The factor <MathInline>{`e^{i\\gamma}`}</MathInline> is called the{" "}
        <strong>global phase</strong>. It doesn&apos;t change any measurement
        probability, so we usually drop it. What remains is just{" "}
        <MathInline>{`(\\theta, \\varphi)`}</MathInline>, two real numbers
        between <MathInline>{`0`}</MathInline> and{" "}
        <MathInline>{`\\pi`}</MathInline> /{" "}
        <MathInline>{`2\\pi`}</MathInline>. Those are the angles on the Bloch
        sphere.
      </p>

      <BlochSphere />

      <p>
        Single-qubit gates are just rotations on this sphere. Two-qubit gates
        can&apos;t be drawn on a single Bloch sphere — they entangle two
        spheres into a 4-dimensional space.
      </p>

      <h3>5. Multi-qubit states</h3>
      <p>For two qubits we take a tensor product of single-qubit spaces:</p>

      <MathBlock>{`|\\psi\\rangle \\;=\\; \\sum_{ij \\in \\{0,1\\}} c_{ij}\\,|ij\\rangle, \\quad |c_{00}|^2 + |c_{01}|^2 + |c_{10}|^2 + |c_{11}|^2 = 1`}</MathBlock>

      <p>
        Some two-qubit states factor cleanly as{" "}
        <MathInline>{`|\\psi\\rangle = |\\psi_1\\rangle \\otimes |\\psi_2\\rangle`}</MathInline>
        . Others don&apos;t. The famous example is the Bell state:
      </p>

      <MathBlock>{`|\\Phi^+\\rangle \\;=\\; \\tfrac{1}{\\sqrt 2}\\big(|00\\rangle + |11\\rangle\\big)`}</MathBlock>

      <p>
        If we try to write{" "}
        <MathInline>{`|\\Phi^+\\rangle = (a|0\\rangle + b|1\\rangle) \\otimes (c|0\\rangle + d|1\\rangle)`}</MathInline>
        , we get four conditions{" "}
        <MathInline>{`ac = bd = 1/\\sqrt 2,\\, ad = bc = 0`}</MathInline> that
        can&apos;t all be satisfied at once. So the Bell state{" "}
        <strong>cannot</strong> be written as a product — that&apos;s the
        formal definition of entanglement.
      </p>

      <h3>6. Pure vs mixed states</h3>
      <p>
        Everything above assumed our state vector is known exactly — that&apos;s
        a <strong>pure state</strong>. Real devices give you{" "}
        <strong>mixed states</strong>: classical probabilities over different
        pure states.
      </p>
      <p>
        The cleanest object to describe both at once is the{" "}
        <strong>density operator</strong>. For a pure state it&apos;s just{" "}
        <MathInline>{`\\rho = |\\psi\\rangle\\langle\\psi|`}</MathInline>. For a
        classical mixture with probabilities <MathInline>{`p_i`}</MathInline>{" "}
        of being in state <MathInline>{`|\\psi_i\\rangle`}</MathInline>:
      </p>

      <MathBlock>{`\\rho \\;=\\; \\sum_i p_i\\,|\\psi_i\\rangle\\langle\\psi_i|`}</MathBlock>

      <p>Key properties:</p>
      <ul>
        <li>
          Hermitian: <MathInline>{`\\rho^\\dagger = \\rho`}</MathInline>.
        </li>
        <li>
          Trace 1: <MathInline>{`\\text{Tr}(\\rho) = 1`}</MathInline>{" "}
          (probabilities sum to 1).
        </li>
        <li>
          Positive semi-definite: all eigenvalues{" "}
          <MathInline>{`\\geq 0`}</MathInline>.
        </li>
        <li>
          <strong>Purity check:</strong>{" "}
          <MathInline>{`\\text{Tr}(\\rho^2) = 1`}</MathInline> iff the state
          is pure;{" "}
          <MathInline>{`\\text{Tr}(\\rho^2) < 1`}</MathInline> means mixed.
        </li>
      </ul>
      <p>
        Density matrices are the language used for noisy hardware, decoherence,
        and the entanglement-entropy measurements we sometimes care about. We
        won&apos;t need the full machinery until later, but it&apos;s good to
        meet it once.
      </p>

      <h3>Recap</h3>
      <ul>
        <li>
          Pure single-qubit state: parametrized by{" "}
          <MathInline>{`(\\theta, \\varphi)`}</MathInline> on the Bloch sphere.
        </li>
        <li>
          Global phase doesn&apos;t matter; relative phase does.
        </li>
        <li>
          Multi-qubit states live in tensor-product spaces; entangled states
          can&apos;t be factored.
        </li>
        <li>
          Density matrix{" "}
          <MathInline>{`\\rho = \\sum_i p_i|\\psi_i\\rangle\\langle\\psi_i|`}</MathInline>{" "}
          handles both pure and mixed cases uniformly.
        </li>
      </ul>
    </>
  )
}
