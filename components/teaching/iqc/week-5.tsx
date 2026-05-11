import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { BellCircuit, TeleportationCircuit } from "./diagrams"

export default function Week5() {
  return (
    <>
      <p>
        Last week we collected single- and two-qubit gates. This week we put
        them together. We&apos;ll build the simplest entangled state — a Bell
        pair — then prove that you can&apos;t copy quantum information, and
        finally derive the quantum teleportation protocol that gets around
        that.
      </p>

      <h3>1. Multi-qubit gates as tensor products</h3>
      <p>
        Apply a single-qubit gate <MathInline>{`U`}</MathInline> to qubit 0 of
        a two-qubit register. To get its action on the full 4-dimensional
        space, you tensor it with identity on the other qubit:
      </p>

      <MathBlock>{`U \\otimes I`}</MathBlock>

      <p>For example, Hadamard on qubit 0 of a 2-qubit register is:</p>

      <MathBlock>{`H \\otimes I \\;=\\; \\frac{1}{\\sqrt 2}\\begin{pmatrix} 1 & 0 & 1 & 0 \\\\ 0 & 1 & 0 & 1 \\\\ 1 & 0 & -1 & 0 \\\\ 0 & 1 & 0 & -1 \\end{pmatrix}`}</MathBlock>

      <p>This is just bookkeeping, but it&apos;s how you read most quantum circuits.</p>

      <h3>2. Building a Bell state</h3>
      <p>
        Start with <MathInline>{`|00\\rangle`}</MathInline>. Apply Hadamard to
        the first qubit:
      </p>

      <MathBlock>{`(H \\otimes I)|00\\rangle \\;=\\; \\tfrac{1}{\\sqrt 2}(|00\\rangle + |10\\rangle)`}</MathBlock>

      <p>Now apply CNOT with qubit 0 as control:</p>

      <MathBlock>{`\\text{CNOT}\\,\\tfrac{1}{\\sqrt 2}(|00\\rangle + |10\\rangle) \\;=\\; \\tfrac{1}{\\sqrt 2}(|00\\rangle + |11\\rangle) \\;=\\; |\\Phi^+\\rangle`}</MathBlock>

      <p>
        We&apos;ve made the Bell state{" "}
        <MathInline>{`|\\Phi^+\\rangle`}</MathInline>. Measure both qubits and
        you always get either 00 or 11, never 01 or 10. The two qubits are
        maximally entangled — that&apos;s what makes the next protocol work.
      </p>

      <BellCircuit />

      <h3>3. The no-cloning theorem</h3>
      <p>
        Could there be a magic unitary that takes any unknown qubit{" "}
        <MathInline>{`|\\psi\\rangle`}</MathInline> and produces two copies of
        it? In other words, an operator{" "}
        <MathInline>{`U`}</MathInline> with{" "}
        <MathInline>{`U|\\psi\\rangle|0\\rangle = |\\psi\\rangle|\\psi\\rangle`}</MathInline>{" "}
        for every <MathInline>{`|\\psi\\rangle`}</MathInline>?
      </p>
      <p>Suppose so. Then for two different states:</p>

      <MathBlock>{`U|\\psi\\rangle|0\\rangle = |\\psi\\rangle|\\psi\\rangle, \\quad U|\\phi\\rangle|0\\rangle = |\\phi\\rangle|\\phi\\rangle`}</MathBlock>

      <p>Take inner products of both sides:</p>

      <MathBlock>{`\\langle\\psi|\\phi\\rangle \\;=\\; \\langle\\psi|\\phi\\rangle^2`}</MathBlock>

      <p>
        The only solutions are{" "}
        <MathInline>{`\\langle\\psi|\\phi\\rangle = 0`}</MathInline> or{" "}
        <MathInline>{`1`}</MathInline> — i.e. the two states are orthogonal or
        identical. So <strong>arbitrary</strong> quantum states can&apos;t be
        cloned. This is the no-cloning theorem (Wootters–Zurek, 1982).
      </p>
      <p>
        Consequence: you can&apos;t just &quot;copy and send&quot; an unknown
        qubit over a classical wire. To move qubit information without copying,
        we need a different trick.
      </p>

      <h3>4. Quantum teleportation</h3>
      <p>The setup:</p>
      <ul>
        <li>
          Alice has an unknown qubit{" "}
          <MathInline>{`|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle`}</MathInline>{" "}
          she wants to send to Bob.
        </li>
        <li>
          Alice and Bob share an entangled Bell pair{" "}
          <MathInline>{`|\\Phi^+\\rangle = (|00\\rangle + |11\\rangle)/\\sqrt 2`}</MathInline>
          .
        </li>
        <li>
          They have a classical channel to exchange a few bits.
        </li>
      </ul>

      <p>The full three-qubit state at the start is:</p>

      <MathBlock>{`|\\psi\\rangle_{A}\\,\\otimes\\,|\\Phi^+\\rangle_{AB} \\;=\\; \\tfrac{1}{\\sqrt 2}\\big(\\alpha|0\\rangle(|00\\rangle + |11\\rangle) + \\beta|1\\rangle(|00\\rangle + |11\\rangle)\\big)`}</MathBlock>

      <p>
        Alice does two things: applies CNOT (control = her data qubit, target
        = her half of the Bell pair), then Hadamard on her data qubit. After
        rewriting, the three-qubit state turns into:
      </p>

      <MathBlock>{`\\tfrac{1}{2}\\Big( |00\\rangle(\\alpha|0\\rangle + \\beta|1\\rangle) + |01\\rangle(\\alpha|1\\rangle + \\beta|0\\rangle) + |10\\rangle(\\alpha|0\\rangle - \\beta|1\\rangle) + |11\\rangle(\\alpha|1\\rangle - \\beta|0\\rangle) \\Big)`}</MathBlock>

      <p>
        Alice now measures her two qubits in the computational basis. She gets
        one of four classical outcomes{" "}
        <MathInline>{`(m_1, m_2)`}</MathInline>, each with probability{" "}
        <MathInline>{`1/4`}</MathInline>. The post-measurement state of
        Bob&apos;s qubit is:
      </p>

      <ul>
        <li>
          <MathInline>{`(0, 0)`}</MathInline>:{" "}
          <MathInline>{`\\alpha|0\\rangle + \\beta|1\\rangle = |\\psi\\rangle`}</MathInline>{" "}
          — nothing to do.
        </li>
        <li>
          <MathInline>{`(0, 1)`}</MathInline>:{" "}
          <MathInline>{`\\alpha|1\\rangle + \\beta|0\\rangle = X|\\psi\\rangle`}</MathInline>{" "}
          → Bob applies X.
        </li>
        <li>
          <MathInline>{`(1, 0)`}</MathInline>:{" "}
          <MathInline>{`\\alpha|0\\rangle - \\beta|1\\rangle = Z|\\psi\\rangle`}</MathInline>{" "}
          → Bob applies Z.
        </li>
        <li>
          <MathInline>{`(1, 1)`}</MathInline>:{" "}
          <MathInline>{`\\alpha|1\\rangle - \\beta|0\\rangle = XZ|\\psi\\rangle`}</MathInline>{" "}
          → Bob applies Z then X.
        </li>
      </ul>

      <p>
        Alice sends the two classical bits{" "}
        <MathInline>{`(m_1, m_2)`}</MathInline> to Bob (via a regular phone
        call, internet, whatever), Bob applies the right correction, and his
        qubit is now in state{" "}
        <MathInline>{`|\\psi\\rangle`}</MathInline>. The information was{" "}
        <strong>teleported</strong>.
      </p>

      <TeleportationCircuit />

      <h3>5. Wait, is this faster than light?</h3>
      <p>
        Nope. Alice&apos;s measurement instantly collapses Bob&apos;s qubit
        into one of four cases, but Bob has no way to tell which one until he
        gets the two classical bits from Alice over a normal channel — limited
        by the speed of light. So no FTL communication, and the no-cloning
        theorem is preserved (Alice&apos;s original state is destroyed by her
        measurement).
      </p>

      <h3>Recap</h3>
      <ul>
        <li>
          Bell state{" "}
          <MathInline>{`|\\Phi^+\\rangle = (|00\\rangle + |11\\rangle)/\\sqrt 2`}</MathInline>{" "}
          is built with H + CNOT.
        </li>
        <li>
          You can&apos;t clone an arbitrary qubit.
        </li>
        <li>
          Teleportation = Bell pair + 2 classical bits → moves a qubit state
          to a remote location.
        </li>
      </ul>
      <p>
        Next week we step away from concrete gates and meet the Fourier
        transform — the backbone of every fast quantum algorithm.
      </p>
    </>
  )
}
