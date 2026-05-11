import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { ClassicalLogicGates, CNOTTruthTable } from "./diagrams"

export default function Week4() {
  return (
    <>
      <p>
        With the math out of the way, we can start putting gates on a circuit
        diagram. This week we cover classical gates as a warm-up, see why they
        eventually hit a wall, and then meet the single- and two-qubit quantum
        gates we&apos;ll use for the rest of the course.
      </p>

      <h3>1. Classical logic gates — the warm-up</h3>
      <p>
        Every classical computer is built from a few logical primitives wired
        together. The basic ones:
      </p>
      <ul>
        <li>
          <strong>NOT</strong> — flips a bit.
        </li>
        <li>
          <strong>AND</strong> — outputs 1 only if both inputs are 1.
        </li>
        <li>
          <strong>OR</strong> — outputs 1 if at least one input is 1.
        </li>
        <li>
          <strong>XOR</strong> — outputs 1 if exactly one input is 1.
        </li>
        <li>
          <strong>NAND</strong> = NOT(AND). NAND alone is functionally complete
          — you can build any boolean function from NAND.
        </li>
      </ul>

      <ClassicalLogicGates />

      <p>
        Stack thousands of these and you get adders, ALUs, registers, CPUs.
        Two big limitations creep in as we scale:
      </p>
      <ul>
        <li>
          <strong>Sequential bottleneck:</strong> classical gates compute one
          configuration at a time. To find an answer over{" "}
          <MathInline>{`2^N`}</MathInline> possibilities you have to try them
          one by one (or partly in parallel with extra hardware).
        </li>
        <li>
          <strong>Physical limit:</strong> transistors are now so small that
          electrons quantum-tunnel right through the gate insulator, which
          breaks the bit. Below a few nanometers, you can&apos;t shrink any
          further.
        </li>
      </ul>

      <h3>2. What a quantum gate is</h3>
      <p>A quantum gate is just a <strong>unitary matrix</strong>:</p>

      <MathBlock>{`U^\\dagger U \\;=\\; I`}</MathBlock>

      <p>
        Why unitary? Because total probability has to stay 1 after the gate.
        Concretely, the gate acts on the state vector by matrix multiplication:
      </p>

      <MathBlock>{`|\\psi\\rangle \\;\\longmapsto\\; U\\,|\\psi\\rangle`}</MathBlock>

      <p>
        Since <MathInline>{`U`}</MathInline> is unitary, it&apos;s also{" "}
        <em>reversible</em>: every quantum gate has an inverse{" "}
        <MathInline>{`U^\\dagger`}</MathInline>. That&apos;s already different
        from classical AND/OR, which throw away information.
      </p>

      <h3>3. The Hadamard gate — the superposition-maker</h3>

      <MathBlock>{`H \\;=\\; \\frac{1}{\\sqrt 2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}`}</MathBlock>

      <p>It maps the computational basis to an equal superposition:</p>

      <MathBlock>{`H|0\\rangle \\;=\\; \\tfrac{1}{\\sqrt 2}(|0\\rangle + |1\\rangle), \\qquad H|1\\rangle \\;=\\; \\tfrac{1}{\\sqrt 2}(|0\\rangle - |1\\rangle)`}</MathBlock>

      <p>
        Hadamards are everywhere — every quantum algorithm we&apos;ll see
        starts by Hadamarding a register to get a flat superposition.
      </p>

      <h3>4. The Pauli gates</h3>
      <p>
        These are the &quot;rotation by 180°&quot; gates around each Bloch
        axis:
      </p>

      <MathBlock>{`X = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix},\\quad Y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix},\\quad Z = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}`}</MathBlock>

      <ul>
        <li>
          <MathInline>{`X`}</MathInline> is the quantum NOT — flips{" "}
          <MathInline>{`|0\\rangle \\leftrightarrow |1\\rangle`}</MathInline>.
        </li>
        <li>
          <MathInline>{`Z`}</MathInline> flips the sign of the{" "}
          <MathInline>{`|1\\rangle`}</MathInline> amplitude. Leaves probabilities
          unchanged but matters for interference.
        </li>
        <li>
          <MathInline>{`Y = iXZ`}</MathInline> combines both.
        </li>
      </ul>

      <p>
        More generally, any rotation by angle{" "}
        <MathInline>{`\\theta`}</MathInline> around an axis{" "}
        <MathInline>{`\\hat n`}</MathInline> can be written{" "}
        <MathInline>{`R_{\\hat n}(\\theta) = \\exp(-i\\theta\\,\\hat n\\cdot\\vec\\sigma / 2)`}</MathInline>.
      </p>

      <h3>5. Phase gates (S, T)</h3>
      <p>Sometimes you want smaller rotations around Z:</p>

      <MathBlock>{`S = \\begin{pmatrix} 1 & 0 \\\\ 0 & i \\end{pmatrix},\\qquad T = \\begin{pmatrix} 1 & 0 \\\\ 0 & e^{i\\pi/4} \\end{pmatrix}`}</MathBlock>

      <p>
        <MathInline>{`S = T^2`}</MathInline> and{" "}
        <MathInline>{`Z = S^2 = T^4`}</MathInline>. The set{" "}
        <MathInline>{`\\{H, T, CNOT\\}`}</MathInline> is universal for quantum
        computation — every other gate can be approximated to arbitrary
        precision using those three.
      </p>

      <h3>6. CNOT — the entangling gate</h3>
      <p>
        Single-qubit gates can&apos;t produce entanglement on their own. For
        that we need a two-qubit gate. The workhorse is{" "}
        <strong>CNOT</strong> (controlled-NOT):
      </p>

      <MathBlock>{`\\text{CNOT} \\;=\\; \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0 \\end{pmatrix}`}</MathBlock>

      <p>
        In words: if the control qubit is 1, flip the target. Otherwise, do
        nothing.
      </p>

      <CNOTTruthTable />

      <p>
        CNOT alone doesn&apos;t entangle anything starting from{" "}
        <MathInline>{`|00\\rangle`}</MathInline> — you need a Hadamard first.
        We&apos;ll see exactly that combo make a Bell state in Week 5.
      </p>

      <h3>7. SWAP</h3>
      <p>The SWAP gate exchanges two qubits:</p>

      <MathBlock>{`\\text{SWAP}\\;|a, b\\rangle \\;=\\; |b, a\\rangle`}</MathBlock>

      <p>It can be built from three CNOTs:</p>

      <MathBlock>{`\\text{SWAP} \\;=\\; \\text{CNOT}_{12}\\,\\text{CNOT}_{21}\\,\\text{CNOT}_{12}`}</MathBlock>

      <h3>8. Building a circuit</h3>
      <p>
        A quantum circuit is just a sequence of these gates applied to a
        register. We draw them left-to-right on horizontal wires (one wire per
        qubit), with single-qubit gates as boxes and two-qubit gates as
        vertical connectors. The Bell-state and teleportation circuits we
        build next week are the first real examples.
      </p>

      <h3>Recap</h3>
      <ul>
        <li>Quantum gates = unitary matrices = reversible operations.</li>
        <li>
          Hadamard creates equal superposition; Pauli X/Y/Z are 180° Bloch
          rotations.
        </li>
        <li>
          S and T are smaller phase rotations. With{" "}
          <MathInline>{`\\{H, T, CNOT\\}`}</MathInline> you can build anything.
        </li>
        <li>CNOT and SWAP are the two-qubit primitives.</li>
      </ul>
    </>
  )
}
