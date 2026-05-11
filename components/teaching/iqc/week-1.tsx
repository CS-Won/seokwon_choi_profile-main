import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week1() {
  return (
    <>
      <p>
        Time to actually define what a quantum computer is. The two pieces of
        magic that set it apart from a normal computer are{" "}
        <strong>superposition</strong> and <strong>entanglement</strong>. Once
        you internalize those, everything else in this course is just
        bookkeeping.
      </p>

      <h3>1. What is &quot;quantum&quot;, really?</h3>
      <p>
        The word &quot;quantum&quot; just means a discrete chunk. Around 1900,
        Max Planck noticed that to fit the spectrum of black-body radiation,
        you had to assume light comes in packets of energy{" "}
        <MathInline>{`E = h\\nu`}</MathInline>. Niels Bohr used that idea to
        build a model of the atom where electrons only sit on specific orbits,
        and Werner Heisenberg later showed there&apos;s a hard limit on how
        precisely you can know position and momentum together:
      </p>

      <MathBlock>{`\\Delta x \\,\\Delta p \\;\\geq\\; \\frac{\\hbar}{2}`}</MathBlock>

      <p>
        Then Schrödinger wrote down the equation that gives the wavefunction
        of any quantum system:
      </p>

      <MathBlock>{`i\\hbar\\,\\frac{\\partial}{\\partial t}|\\psi(t)\\rangle \\;=\\; H\\,|\\psi(t)\\rangle`}</MathBlock>

      <p>
        Everything we&apos;ll do in this course is, ultimately, an application
        of this equation when we know which Hamiltonian{" "}
        <MathInline>{`H`}</MathInline> our hardware implements.
      </p>

      <h3>2. Superposition — the &quot;both at once&quot; trick</h3>
      <p>
        The textbook way to picture this is Schrödinger&apos;s cat. Lock a cat
        in a box with a radioactive trigger and you can&apos;t say whether
        it&apos;s alive or dead until you peek. In Schrödinger&apos;s setup the
        cat is technically a superposition of both:
      </p>

      <MathBlock>{`|\\text{cat}\\rangle \\;=\\; \\tfrac{1}{\\sqrt 2}\\big(|\\text{alive}\\rangle + |\\text{dead}\\rangle\\big)`}</MathBlock>

      <p>
        Cats aside, real superposition shows up in the double-slit experiment:
        electrons (or even larger molecules) fired one at a time still produce
        an interference pattern, exactly as if each electron went through{" "}
        <em>both</em> slits at the same time. A single qubit is the digital
        version of this — a complex superposition
      </p>

      <MathBlock>{`|\\psi\\rangle \\;=\\; \\alpha|0\\rangle + \\beta|1\\rangle, \\qquad |\\alpha|^2 + |\\beta|^2 = 1`}</MathBlock>

      <p>
        of the two basis states <MathInline>{`|0\\rangle`}</MathInline> and{" "}
        <MathInline>{`|1\\rangle`}</MathInline>. When you measure it,{" "}
        <MathInline>{`|\\alpha|^2`}</MathInline> is the probability of getting{" "}
        <MathInline>{`0`}</MathInline>, and{" "}
        <MathInline>{`|\\beta|^2`}</MathInline> is the probability of getting{" "}
        <MathInline>{`1`}</MathInline>.
      </p>

      <h3>3. Entanglement — correlations that aren&apos;t classical</h3>
      <p>
        A classical analogy: I put a red ball in one bag and a blue ball in
        another, scramble them, and ship them to two cities. You open yours,
        you instantly &quot;know&quot; the other bag&apos;s color. That&apos;s
        a normal classical correlation; nothing weird happened.
      </p>
      <p>
        Entanglement looks like that until you check what happens when you
        measure in <strong>different bases</strong>. The two-qubit Bell state
      </p>

      <MathBlock>{`|\\Phi^+\\rangle \\;=\\; \\tfrac{1}{\\sqrt 2}\\big(|00\\rangle + |11\\rangle\\big)`}</MathBlock>

      <p>
        gives perfectly correlated outcomes whether you measure both qubits in
        Z, or both in X, or both in Y. Classical correlations can&apos;t pull
        that off — that&apos;s the essence of Bell&apos;s theorem. We&apos;ll
        build this state with a real circuit in Week 5.
      </p>

      <h3>4. Why is this useful for computation?</h3>
      <p>
        A classical computer with{" "}
        <MathInline>{`N`}</MathInline> bits can be in one of{" "}
        <MathInline>{`2^N`}</MathInline> configurations, but only one of them
        at a time. A quantum computer with <MathInline>{`N`}</MathInline>{" "}
        qubits can be in a superposition of all{" "}
        <MathInline>{`2^N`}</MathInline> configurations at once:
      </p>

      <MathBlock>{`|\\psi\\rangle \\;=\\; \\sum_{x=0}^{2^N - 1} c_x\\,|x\\rangle`}</MathBlock>

      <p>
        Apply one quantum gate and you&apos;ve essentially nudged all{" "}
        <MathInline>{`2^N`}</MathInline> coefficients at the same time. This is{" "}
        <strong>quantum parallelism</strong>. The catch is that at the end
        you only get to read out one bitstring — so the trick is to design the
        circuit so that <em>interference</em> concentrates the amplitude on
        the answers you actually want. That&apos;s what algorithms like
        Deutsch–Jozsa and Shor do.
      </p>

      <h3>5. Speedup categories</h3>
      <ul>
        <li>
          <strong>Quadratic speedup.</strong> Search algorithms like
          Grover&apos;s improve the runtime from{" "}
          <MathInline>{`O(N)`}</MathInline> to{" "}
          <MathInline>{`O(\\sqrt N)`}</MathInline>. Helpful but not
          world-shaking.
        </li>
        <li>
          <strong>Exponential speedup.</strong> The quantum Fourier transform
          and Shor&apos;s algorithm move you from exponential to polynomial
          time. That&apos;s the dramatic one — it&apos;s why RSA is in
          trouble.
        </li>
      </ul>

      <h3>6. Where we are now: the NISQ era</h3>
      <p>
        Today&apos;s machines are in the <strong>NISQ era</strong>
        (Noisy Intermediate-Scale Quantum, John Preskill, 2018). They have on
        the order of 100–1000 noisy qubits and no full error correction yet.
        Still, recent experiments have shown clear <em>quantum advantage</em>:
        running circuits that no classical machine can simulate in reasonable
        time (see e.g. the IBM <em>utility</em> paper, Nature 2023).
      </p>

      <h3>Recap</h3>
      <ul>
        <li>
          Single qubit:{" "}
          <MathInline>{`|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle`}</MathInline>
          , <MathInline>{`|\\alpha|^2 + |\\beta|^2 = 1`}</MathInline>.
        </li>
        <li>
          Entanglement: states like{" "}
          <MathInline>{`(|00\\rangle + |11\\rangle)/\\sqrt 2`}</MathInline>{" "}
          can&apos;t be written as a tensor product of single-qubit states.
        </li>
        <li>
          Quantum parallelism: <MathInline>{`N`}</MathInline> qubits =
          superposition of <MathInline>{`2^N`}</MathInline> states.
        </li>
        <li>
          NISQ era is where we are; full fault tolerance is still down the
          road.
        </li>
      </ul>
      <p>Next two weeks: just enough math to make all of this precise.</p>
    </>
  )
}
