import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { ComplexityHierarchy, DeutschJozsaCircuit } from "./diagrams"

export default function Week8() {
  return (
    <>
      <p>
        Today we&apos;ll see the first algorithm where a quantum computer{" "}
        <em>provably</em> beats any classical one — Deutsch–Jozsa. It&apos;s a
        toy problem, but it&apos;s the cleanest illustration of how
        superposition + interference can be cashed in as a real speedup.
      </p>

      <h3>1. What &quot;quantum advantage&quot; means</h3>
      <p>
        To say a quantum computer is &quot;better&quot;, you need a yardstick.
        The yardstick is <strong>time complexity</strong>: how many operations
        do you need as the input size grows? We track only the dominant term
        with Big-O notation:
      </p>

      <MathBlock>{`\\text{quicksort on } N \\text{ items} \\;=\\; O(N\\log N)`}</MathBlock>

      <h3>2. The big complexity classes</h3>
      <ul>
        <li>
          <strong>P</strong> — problems a classical computer solves in
          polynomial time (e.g. sorting, multiplying matrices).
        </li>
        <li>
          <strong>NP</strong> — problems whose <em>solution</em> can be
          verified in polynomial time (e.g. SAT, factoring). Whether P = NP is
          the most famous open problem in CS.
        </li>
        <li>
          <strong>BQP</strong> — Bounded-error Quantum Polynomial time. Problems
          a quantum computer solves in polynomial time with error{" "}
          <MathInline>{`\\leq 1/3`}</MathInline>. This is the &quot;efficiently
          solvable on a quantum computer&quot; class.
        </li>
      </ul>

      <ComplexityHierarchy />

      <p>
        Factoring is known to be in BQP (Shor&apos;s algorithm), but not yet
        known to be in P. That gap is what makes RSA suspicious in a quantum
        world.
      </p>

      <h3>3. Quantum parallelism — the trick</h3>
      <p>
        Take any boolean function <MathInline>{`f: \\{0,1\\}^n \\to \\{0,1\\}`}</MathInline>.
        Define the <strong>quantum oracle</strong>
      </p>

      <MathBlock>{`U_f\\,|x\\rangle\\,|y\\rangle \\;=\\; |x\\rangle\\,|y \\oplus f(x)\\rangle`}</MathBlock>

      <p>
        where <MathInline>{`\\oplus`}</MathInline> is XOR. This is reversible
        (<MathInline>{`U_f`}</MathInline> is its own inverse), so it&apos;s a
        legal quantum gate.
      </p>

      <p>
        Now prepare the input register in a uniform superposition over all{" "}
        <MathInline>{`x`}</MathInline>:
      </p>

      <MathBlock>{`\\frac{1}{\\sqrt{2^n}}\\sum_{x} |x\\rangle\\,|0\\rangle \\;\\xrightarrow{U_f}\\; \\frac{1}{\\sqrt{2^n}}\\sum_{x}\\,|x\\rangle\\,|f(x)\\rangle`}</MathBlock>

      <p>
        We&apos;ve just evaluated <MathInline>{`f`}</MathInline> on{" "}
        <strong>all</strong> <MathInline>{`2^n`}</MathInline> inputs at once.
        The catch (as always): measuring the second register collapses it to a
        single <MathInline>{`f(x)`}</MathInline>. So you can&apos;t naively
        &quot;read off all values&quot;. The art is to use interference to
        extract a <em>global</em> property of{" "}
        <MathInline>{`f`}</MathInline>.
      </p>

      <h3>4. Oracles and query complexity</h3>
      <p>
        We pretend <MathInline>{`U_f`}</MathInline> is a black box and count
        only how many times we call (= query) it. This is{" "}
        <strong>query complexity</strong>. The three flavors:
      </p>
      <ul>
        <li>
          <strong>Deterministic:</strong> queries needed to always get the
          correct answer.
        </li>
        <li>
          <strong>Probabilistic:</strong> queries needed if we allow a small
          error rate.
        </li>
        <li>
          <strong>Quantum:</strong> queries needed using a quantum oracle.
        </li>
      </ul>

      <h3>5. Deutsch&apos;s algorithm (n = 1)</h3>
      <p>
        Suppose someone hands you a black box implementing a function{" "}
        <MathInline>{`f: \\{0,1\\} \\to \\{0,1\\}`}</MathInline>. There are
        four possible <MathInline>{`f`}</MathInline>. Two of them are{" "}
        <strong>constant</strong> (always output 0 or always 1), two are{" "}
        <strong>balanced</strong> (output 0 once and 1 once). Question: is{" "}
        <MathInline>{`f`}</MathInline> constant or balanced?
      </p>
      <p>
        Classically, you&apos;d query both inputs and compare:{" "}
        <strong>2 queries</strong>. Deutsch&apos;s algorithm answers in{" "}
        <strong>1 query</strong>.
      </p>

      <h4>The trick: phase kickback</h4>
      <p>Set up the ancilla in <MathInline>{`|-\\rangle = (|0\\rangle - |1\\rangle)/\\sqrt 2`}</MathInline>. Then</p>

      <MathBlock>{`U_f\\,|x\\rangle\\,|-\\rangle \\;=\\; (-1)^{f(x)}\\,|x\\rangle\\,|-\\rangle`}</MathBlock>

      <p>
        The XOR has been &quot;kicked back&quot; into a sign on the data
        register. Now Hadamard the data qubit before and after:
      </p>

      <MathBlock>{`H|0\\rangle\\,|-\\rangle = \\tfrac{1}{\\sqrt 2}(|0\\rangle + |1\\rangle)|-\\rangle`}</MathBlock>
      <MathBlock>{`\\xrightarrow{U_f}\\; \\tfrac{1}{\\sqrt 2}\\big((-1)^{f(0)}|0\\rangle + (-1)^{f(1)}|1\\rangle\\big)|-\\rangle`}</MathBlock>
      <MathBlock>{`\\xrightarrow{H}\\; \\begin{cases} \\pm|0\\rangle|-\\rangle, & f \\text{ constant} \\\\ \\pm|1\\rangle|-\\rangle, & f \\text{ balanced} \\end{cases}`}</MathBlock>

      <p>
        Measure the data qubit. 0 means constant, 1 means balanced. One
        oracle call total. The relative phase put on{" "}
        <MathInline>{`|0\\rangle, |1\\rangle`}</MathInline> by{" "}
        <MathInline>{`f`}</MathInline> interferes constructively or
        destructively in the final Hadamard, depending on whether{" "}
        <MathInline>{`f`}</MathInline> is constant or balanced.
      </p>

      <h3>6. Deutsch–Jozsa — scaling it up</h3>
      <p>
        Same problem, but with <MathInline>{`f: \\{0,1\\}^n \\to \\{0,1\\}`}</MathInline>{" "}
        promised to be either constant (same output for all inputs) or
        balanced (output 0 on half of inputs, 1 on the other half). Classical
        worst case: about <MathInline>{`2^n/2 + 1`}</MathInline> queries.
        Quantum: <strong>1 query</strong>.
      </p>

      <DeutschJozsaCircuit />

      <p>The circuit looks just like Deutsch&apos;s with more wires:</p>
      <ol>
        <li>
          Initialize <MathInline>{`n`}</MathInline> data qubits at{" "}
          <MathInline>{`|0\\rangle`}</MathInline> and 1 ancilla at{" "}
          <MathInline>{`|1\\rangle`}</MathInline>.
        </li>
        <li>Hadamard all <MathInline>{`n + 1`}</MathInline> qubits.</li>
        <li>Apply the oracle <MathInline>{`U_f`}</MathInline> once.</li>
        <li>Hadamard the <MathInline>{`n`}</MathInline> data qubits again.</li>
        <li>Measure the data register.</li>
      </ol>

      <p>
        The result is <MathInline>{`|0\\rangle^{\\otimes n}`}</MathInline> if
        and only if <MathInline>{`f`}</MathInline> is constant. Why? After the
        oracle, the data register holds amplitudes{" "}
        <MathInline>{`\\propto \\sum_x (-1)^{f(x)}|x\\rangle`}</MathInline>. The
        final Hadamards perform an inner product with{" "}
        <MathInline>{`|0\\rangle^{\\otimes n}`}</MathInline>; this is{" "}
        <MathInline>{`\\pm 1`}</MathInline> if{" "}
        <MathInline>{`f`}</MathInline> is constant and{" "}
        <MathInline>{`0`}</MathInline> if balanced.
      </p>

      <h3>7. Honest caveats</h3>
      <ul>
        <li>
          A <em>randomized</em> classical algorithm only needs{" "}
          <MathInline>{`O(1)`}</MathInline> queries to be right with high
          probability — so the speedup is huge against{" "}
          <em>deterministic</em> classical, but moot for randomized classical.
        </li>
        <li>
          Real-world functions are rarely perfectly balanced or constant. The
          algorithm is mostly a stepping stone to Simon&apos;s algorithm and
          eventually to Shor&apos;s.
        </li>
      </ul>

      <h3>Recap</h3>
      <ul>
        <li>
          Quantum oracle{" "}
          <MathInline>{`U_f|x\\rangle|y\\rangle = |x\\rangle|y \\oplus f(x)\\rangle`}</MathInline>{" "}
          + phase kickback is the magic combo.
        </li>
        <li>
          Deutsch–Jozsa: 1 quantum query vs up to{" "}
          <MathInline>{`2^{n-1}+1`}</MathInline> deterministic classical
          queries.
        </li>
        <li>
          Pattern reused later: Hadamard everywhere → oracle → Hadamard →
          measure.
        </li>
      </ul>
    </>
  )
}
