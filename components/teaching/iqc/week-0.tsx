import { MathBlock } from "@/components/teaching/qdyn/math"

export default function Week0() {
  return (
    <>
      <p>
        Welcome to the course. Before we even define what a quantum computer is,
        let me tell you why this course exists at all and what the next eleven
        weeks will look like. Think of this as an orientation, not a real
        lecture.
      </p>

      <h3>1. Why do we need quantum computers?</h3>
      <p>
        Today&apos;s classical chips are insanely fast, but they&apos;ve been
        bumping into a physical wall. Transistors keep shrinking, and once
        they get small enough, electrons just start{" "}
        <em>tunneling</em> through them. That&apos;s a quantum effect — and a
        bug, not a feature, for classical circuits.
      </p>
      <p>
        Even before hardware limits, there are theoretical reasons to think
        quantum computing is fundamentally different. The classical model of
        computation is the <strong>Turing machine</strong> (Alan Turing, 1936):
        a tape and a head following simple rules. The Church–Turing thesis says
        that anything you can &quot;compute&quot;, given enough time, can be
        done on a Turing machine. The{" "}
        <em>strong</em> Church–Turing thesis goes further: it claims classical
        machines can solve any problem <strong>efficiently</strong>. Quantum
        computers challenge that stronger claim by giving us a different way to
        process information using superposition and entanglement.
      </p>

      <h3>2. Are quantum computers actually useful right now?</h3>
      <p>
        A surprising number of people think quantum computing is &quot;ten
        years away&quot;. The honest answer is: it&apos;s already in use, just
        not at the scale of a regular laptop. A few real examples that come up
        in the course:
      </p>
      <ul>
        <li>
          <strong>Finance.</strong> Pricing options with the Black–Scholes
          model involves nasty differential equations and Monte Carlo
          simulations. Hybrid classical/quantum approaches are being tested for
          European-style option pricing.
        </li>
        <li>
          <strong>Quantum machine learning (QML).</strong> Computations that
          slow down as datasets explode can sometimes get a speedup from
          quantum subroutines. This is also the topic of our final week.
        </li>
        <li>
          <strong>Cryptography.</strong> Shor&apos;s algorithm (Week 9) breaks
          RSA in polynomial time once a big enough quantum computer exists.
          That alone has reshaped applied cryptography.
        </li>
      </ul>
      <p>
        Yonsei students even get free access to a real IBM quantum computer
        through the university&apos;s programs — so we&apos;re not just doing
        theory.
      </p>

      <h3>3. Course roadmap</h3>
      <p>The 11 weeks roughly split into four blocks:</p>
      <MathBlock>{`\\underbrace{\\text{Math (W2–3)}}_{\\text{linear algebra, Dirac}}\\;\\to\\;\\underbrace{\\text{Circuits (W4–5)}}_{\\text{H, X, CNOT, Bell, teleportation}}\\;\\to\\;\\underbrace{\\text{Algorithms (W6–9)}}_{\\text{QFT, Deutsch–Jozsa, Shor}}\\;\\to\\;\\underbrace{\\text{QML (W10)}}_{\\text{QNN, QCNN}}`}</MathBlock>

      <ul>
        <li>
          <strong>Math (Weeks 2–3).</strong> Just enough linear algebra and
          complex numbers to read every formula in the rest of the course.
        </li>
        <li>
          <strong>Circuits (Weeks 4–5).</strong> Hadamard, Pauli, CNOT,
          tensor-product reasoning, no-cloning, and teleportation.
        </li>
        <li>
          <strong>Algorithms (Weeks 6–9).</strong> Quantum Fourier transform
          and the two classic algorithms that show off quantum speedups —
          Deutsch–Jozsa and Shor.
        </li>
        <li>
          <strong>QML (Week 10).</strong> A short tour of variational quantum
          algorithms, quantum neural nets, and the parameter-shift rule.
        </li>
      </ul>

      <h3>4. How the course is delivered</h3>
      <ul>
        <li>
          Weekly video lectures with concrete examples.
        </li>
        <li>
          Coding practice with <strong>IBM Qiskit</strong> — you&apos;ll run
          the very circuits we discuss.
        </li>
        <li>
          Online assignments after each algorithm session.
        </li>
      </ul>

      <h3>5. Who should take this?</h3>
      <p>
        Anyone curious. We don&apos;t assume prior quantum mechanics; basic
        algebra and a willingness to play with formulas is enough. The math
        weeks (2 and 3) cover all the linear algebra you need. By Week 10
        you&apos;ll be reading a QML paper and not feeling completely lost.
      </p>

      <p>
        Next week we&apos;ll define what a quantum computer actually is and
        meet the two pieces that make it different from a classical one:{" "}
        <strong>superposition</strong> and <strong>entanglement</strong>.
      </p>
    </>
  )
}
