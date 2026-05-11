import { MathBlock, MathInline } from "./math"
import { SMTestCircuit } from "./diagrams"

export default function Week3() {
  return (
    <>
      <p>
        This week is about the five tools we actually use to clean up noise: TREX,
        DD, PT, ZNE, and SM. The first three work at the circuit level — they
        simplify or randomize specific kinds of error. The last two work at the
        statistical level — they run extra circuits and rescale the answer.
      </p>

      <h3>1. TREX — Twirled Readout Error Extinction</h3>
      <p>
        TREX fixes measurement errors. Right before we measure, we randomly apply an
        X gate to each qubit, and then flip the corresponding classical bit after
        the measurement. With no noise, this does nothing. With noise, it averages
        out asymmetries in the readout, turning a complicated readout error model
        into a simpler diagonal one.
      </p>
      <ul>
        <li>Good: doesn&apos;t need a detailed noise model, works on any circuit.</li>
        <li>
          Bad: less effective if readout errors are strongly correlated between
          qubits.
        </li>
        <li>We use 10 random samples.</li>
      </ul>

      <h3>2. DD — Dynamical Decoupling</h3>
      <p>
        While a qubit is idle, it can pick up errors from the environment. DD inserts
        X pulses during idle time to keep the qubit &quot;refocused&quot;. The
        specific schedule we use is:
      </p>

      <MathBlock>{`\\Big(\\,t/4,\\;X,\\;t/2,\\;X,\\;t/4\\,\\Big)`}</MathBlock>

      <p>
        So the qubit waits a bit, gets flipped, waits twice as long, flips back, and
        waits a final short interval. Tiny errors picked up in the first half cancel
        with the second half.
      </p>
      <p>
        One caveat: if the circuit is already densely packed, there&apos;s barely any
        idle time to insert DD into. Our brick-wall layout is already pretty dense,
        and the PBC case (the chain wraps around) is even denser, so DD only buys us
        a little.
      </p>

      <h3>3. PT — Pauli Twirling</h3>
      <p>
        Two-qubit gates often have small &quot;coherent&quot; errors — biased rotations
        in some direction. PT randomly wraps each CX or CZ with Pauli gates chosen
        so the overall operation is still equivalent to the original. Averaging over
        many such random wrappings turns the coherent error into a plain stochastic
        Pauli channel, which is much easier to deal with.
      </p>
      <ul>
        <li>We only apply PT to two-qubit gates.</li>
        <li>10 randomized versions of the base circuit are averaged together.</li>
      </ul>

      <h3>4. ZNE — Zero-Noise Extrapolation</h3>
      <p>
        The idea: if we could only measure the answer at <em>increased</em> noise
        levels, can we extrapolate back to zero noise? Yes, sort of. We use{" "}
        <em>gate folding</em> — replace each CX by an equivalent triple or quintuple
        of gates:
      </p>

      <MathBlock>{`G \\;\\longrightarrow\\; G\\,(G^{\\dagger} G)^{k} \\quad (k = 0, 1, 2)`}</MathBlock>

      <p>
        Mathematically <MathInline>{`G(G^\\dagger G)^k = G`}</MathInline>, but the
        physical circuit now has 3× or 5× the noise exposure. We run the circuit at
        scaling factors 1, 3, and 5, collect three noisy expectation values, and fit
        a curve that extrapolates to scale 0.
      </p>
      <p>
        Why those specific factors? Anything larger blows past the coherence limit,
        and we need at least three points to fit a quadratic or exponential curve.
        So 1, 3, 5 are the practical max on IBM hardware.
      </p>

      <p>
        <strong>The catch with ZNE:</strong>
      </p>
      <ul>
        <li>
          The shape of the extrapolation curve is just a guess. There&apos;s no
          principled reason to pick quadratic vs. exponential.
        </li>
        <li>
          The curve we fit on a small system doesn&apos;t transfer cleanly to a much
          bigger one — and we&apos;ll see this break down later.
        </li>
        <li>
          Each extra scaling factor means re-running the circuit, so the sampling
          cost grows quickly.
        </li>
      </ul>

      <h3>5. SM — Self-Mitigation (our main tool)</h3>
      <p>
        SM starts from a clean assumption: pretend the circuit&apos;s noise acts
        like a single depolarizing channel. Then the true expectation value{" "}
        <MathInline>{`\\langle O\\rangle`}</MathInline> and the noisy one{" "}
        <MathInline>{`\\langle\\overline O\\rangle`}</MathInline> are related by one
        number:
      </p>

      <MathBlock>{`\\langle\\,O\\,\\rangle \\;=\\; \\frac{\\langle\\,\\overline O\\,\\rangle}{1 - p}`}</MathBlock>

      <p>
        The trick is to find <MathInline>{`p`}</MathInline> without leaving the
        circuit. We do that by running a <em>test circuit</em> whose ideal answer we
        already know.
      </p>

      <p>
        For Trotter circuits, we can build such a test circuit easily: just run the
        Trotter steps forward and then backward. Ideally that gives the identity, so
        the final state is just the initial state, and the expectation value is
        whatever we started with. If the test circuit has the same gates as the real
        one, the same noise will hit it the same way — and the gap between the ideal
        answer and the noisy measurement directly tells us{" "}
        <MathInline>{`p`}</MathInline>.
      </p>

      <h4>Why the naive (δt, −δt, δt, −δt) doesn&apos;t work</h4>
      <p>
        If you alternate forward and backward at every Trotter step, the even-layer
        gates all collapse to{" "}
        <MathInline>{`U_j(\\vec 0) = I`}</MathInline>. The test circuit ends up
        looking almost nothing like the real one, so the noise factor you extract is
        off.
      </p>

      <h4>The fix: (δt, δt, −δt, −δt)</h4>
      <p>
        Instead, do all the forward steps first and then all the backward ones. Now
        only the middle layer cancels (it sits at <MathInline>{`\\theta = 0`}</MathInline>),
        and the rest of the structure is preserved. The noise factor measured from
        this circuit is a much better estimate of the noise in the real circuit.
      </p>

      <SMTestCircuit />

      <h4>Why SM is nice</h4>
      <ul>
        <li>No extrapolation, no heuristic curve.</li>
        <li>
          Just <strong>one extra circuit</strong> (the test circuit). ZNE always
          needs at least two extras for the 1, 3, 5 folding.
        </li>
        <li>
          The test circuit has the same gate count as the real one, so its noise is
          a faithful proxy.
        </li>
        <li>
          The catch: SM only works when you can compute the test circuit&apos;s
          ideal answer easily. Trotter is perfect for that. Variational algorithms,
          not so much.
        </li>
      </ul>

      <h3>6. How we stack them</h3>
      <p>The full pipeline we use looks like this:</p>

      <MathBlock>{`\\underbrace{\\text{TREX}}_{\\text{readout}} \\;+\\; \\underbrace{\\text{DD}}_{\\text{idle}} \\;+\\; \\underbrace{\\text{PT}}_{\\text{coherent}\\to\\text{stochastic}} \\;+\\; \\underbrace{\\text{ZNE or SM}}_{\\text{globally rescale}\\;\\langle O\\rangle}`}</MathBlock>

      <p>
        Concretely, at <MathInline>{`N = 104`}</MathInline> (OBC, 10 Trotter steps)
        the mean absolute errors are:
      </p>

      <ul>
        <li>NOQEM: <MathInline>{`\\approx 0.0842`}</MathInline></li>
        <li>TREX + DD + PT: <MathInline>{`\\approx 0.0564`}</MathInline></li>
        <li>+ ZNE: <MathInline>{`\\approx 0.0492`}</MathInline></li>
        <li>
          + SM: <strong><MathInline>{`\\approx 0.0256`}</MathInline></strong>{" "}
          (cuts the error about in half)
        </li>
      </ul>

      <p>
        And here&apos;s the interesting bit: ZNE&apos;s extrapolation curve was fit
        on the 20-qubit data. When we re-use it at 84 or 104 qubits, the error
        actually goes <em>up</em>. SM doesn&apos;t care — it reads the noise factor
        right off the circuit at that size, so it stays accurate. That&apos;s why we
        say SM scales better to utility-scale problems.
      </p>

      <h3>Recap</h3>
      <ul>
        <li>
          TREX / DD / PT are circuit-level cleanups (readout, idle, coherent
          errors).
        </li>
        <li>
          ZNE extrapolates to zero noise; SM measures the noise directly with a test
          circuit.
        </li>
        <li>
          SM uses a <MathInline>{`(+\\delta t, +\\delta t, -\\delta t, -\\delta t)`}</MathInline>{" "}
          schedule so the test circuit matches the real one.
        </li>
        <li>
          At large sizes, SM beats ZNE in both accuracy and resource cost.
        </li>
      </ul>
    </>
  )
}
