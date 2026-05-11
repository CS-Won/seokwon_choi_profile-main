import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { QNNCircuit } from "./diagrams"

export default function Week10() {
  return (
    <>
      <p>
        The final week. We&apos;ve covered the math, the gates, and a couple
        of canonical algorithms. Now let&apos;s talk about the area that&apos;s
        most active in industry right now: quantum machine learning. The
        recipe is short: take a neural-network mindset, swap the layers for
        parametrized quantum circuits, and use a classical optimizer to train.
      </p>

      <h3>1. Classical ML in one paragraph</h3>
      <p>
        You&apos;ve got data <MathInline>{`(x_i, y_i)`}</MathInline>, you want
        a function <MathInline>{`f_\\theta(x) \\approx y`}</MathInline>{" "}
        parametrized by <MathInline>{`\\theta`}</MathInline>. Define a loss{" "}
        <MathInline>{`L(\\theta) = \\sum_i \\ell(f_\\theta(x_i), y_i)`}</MathInline>,
        compute the gradient{" "}
        <MathInline>{`\\nabla_\\theta L`}</MathInline>, and update:
      </p>

      <MathBlock>{`\\theta \\;\\leftarrow\\; \\theta - \\eta\\,\\nabla_\\theta L(\\theta)`}</MathBlock>

      <p>
        That&apos;s gradient descent. Deep nets are just stacks of linear
        layers and non-linear activations trained this way via
        back-propagation.
      </p>

      <h3>2. Quantum machine learning — the idea</h3>
      <p>
        Replace the layers of a neural net with a parametrized quantum
        circuit. The pipeline:
      </p>
      <ol>
        <li>
          <strong>Data encoding.</strong> Map a classical sample{" "}
          <MathInline>{`x`}</MathInline> to a quantum state{" "}
          <MathInline>{`|\\phi(x)\\rangle`}</MathInline>.
        </li>
        <li>
          <strong>Variational ansatz.</strong> Apply a parametrized unitary{" "}
          <MathInline>{`U(\\theta)`}</MathInline>.
        </li>
        <li>
          <strong>Measurement.</strong> Read out some observable{" "}
          <MathInline>{`\\hat O`}</MathInline> to get{" "}
          <MathInline>{`\\langle O\\rangle_\\theta`}</MathInline>.
        </li>
        <li>
          <strong>Classical update.</strong> Feed the expectation value into a
          loss <MathInline>{`L(\\theta)`}</MathInline>, compute the gradient,
          update <MathInline>{`\\theta`}</MathInline>, repeat.
        </li>
      </ol>

      <QNNCircuit />

      <p>This is the structure for VQE, QAOA, QSVM, QNN, QCNN — basically every &quot;Variational Quantum Algorithm&quot; (VQA).</p>

      <h3>3. Data encoding strategies</h3>
      <p>
        How you put classical data into the quantum state really matters. Four
        common choices:
      </p>
      <ul>
        <li>
          <strong>Basis encoding.</strong> A bitstring{" "}
          <MathInline>{`x = b_1 b_2 \\dots b_n`}</MathInline> goes to{" "}
          <MathInline>{`|b_1 b_2 \\dots b_n\\rangle`}</MathInline>. Costs{" "}
          <MathInline>{`n`}</MathInline> qubits for <MathInline>{`n`}</MathInline>{" "}
          bits.
        </li>
        <li>
          <strong>Amplitude encoding.</strong> A normalized vector{" "}
          <MathInline>{`x \\in \\mathbb R^{2^n}`}</MathInline> becomes the
          amplitudes of a state on <MathInline>{`n`}</MathInline> qubits.
          Exponentially efficient in qubit count, but state preparation can be
          expensive.
        </li>
        <li>
          <strong>Angle encoding.</strong> Each feature{" "}
          <MathInline>{`x_i`}</MathInline> turns into a rotation angle on its
          own qubit: <MathInline>{`R_y(x_i)|0\\rangle`}</MathInline>.
        </li>
        <li>
          <strong>Hamiltonian encoding.</strong> Encode the problem as a
          Hamiltonian and let time evolution do the work — used heavily in
          quantum chemistry and optimization (VQE, QAOA).
        </li>
      </ul>

      <h3>4. Variational ansatz</h3>
      <p>
        The ansatz <MathInline>{`U(\\theta)`}</MathInline> is built from
        layers of single-qubit rotations and entangling gates. Common
        templates: hardware-efficient ansatz, alternating layers, etc. We want
        an ansatz that&apos;s expressive enough to capture the function but
        not so deep that noise eats everything.
      </p>

      <h3>5. Computing gradients — the parameter-shift rule</h3>
      <p>
        Back-propagation doesn&apos;t work directly on quantum circuits. But
        for rotations <MathInline>{`R(\\theta) = \\exp(-i\\theta G/2)`}</MathInline>{" "}
        with eigenvalues <MathInline>{`\\pm 1/2`}</MathInline> of{" "}
        <MathInline>{`G`}</MathInline>, the gradient of any expectation value{" "}
        <MathInline>{`\\langle O\\rangle(\\theta)`}</MathInline> has a clean
        closed form:
      </p>

      <MathBlock>{`\\frac{\\partial \\langle O\\rangle(\\theta)}{\\partial \\theta} \\;=\\; \\frac{1}{2}\\left[\\,\\langle O\\rangle(\\theta + \\tfrac{\\pi}{2}) \\;-\\; \\langle O\\rangle(\\theta - \\tfrac{\\pi}{2})\\,\\right]`}</MathBlock>

      <p>
        Just two extra runs of the same circuit at shifted parameters. No
        finite differences, no numerical noise from tiny steps. This is the
        parameter-shift rule (Mitarai et al. 2018), and it&apos;s why
        gradient-based training of QNNs is feasible on real hardware.
      </p>

      <h3>6. Quantum neural networks</h3>
      <p>
        A quantum perceptron is just a parametrized circuit on a single qubit
        with a measurement. Stack many such layers + entangling gates to get a{" "}
        <strong>quantum neural network</strong>. A trick that helps is{" "}
        <strong>data re-uploading</strong>: feed the input{" "}
        <MathInline>{`x`}</MathInline> into the circuit multiple times,
        interleaved with the parameter layers:
      </p>

      <MathBlock>{`U(x, \\theta) \\;=\\; W_L(\\theta_L)\\,\\,V(x)\\,\\,W_{L-1}(\\theta_{L-1})\\,\\,V(x)\\,\\,\\cdots\\,\\,W_1(\\theta_1)\\,V(x)`}</MathBlock>

      <p>
        This makes a single qubit a universal classifier (Pérez-Salinas et al.,
        2020) — the resulting function approximates a discrete Fourier series
        in <MathInline>{`x`}</MathInline>, and adding more uploads gives more
        Fourier coefficients.
      </p>

      <h3>7. Quantum CNNs</h3>
      <p>The QCNN replaces the two key operations of a CNN with quantum versions:</p>
      <ul>
        <li>
          <strong>Quantum convolution.</strong> Parametrized two-qubit
          unitaries acting on neighboring qubits — a translation-invariant
          ansatz playing the role of a learnable filter.
        </li>
        <li>
          <strong>Quantum pooling.</strong> Measure some qubits and condition
          subsequent gates on the outcomes (or equivalently, trace them out).
          This shrinks the active register, the way classical pooling shrinks
          a feature map.
        </li>
      </ul>
      <p>
        The whole network is trained end-to-end with the parameter-shift rule.
        QCNNs are nice because they&apos;re shallow (depth grows
        logarithmically in qubit count) and seem to dodge the
        &quot;barren plateau&quot; problem that plagues random deep
        variational circuits.
      </p>

      <h3>8. Caveats</h3>
      <ul>
        <li>
          On today&apos;s hardware, QML demos are mostly small. Noise eats
          deep circuits long before you can train them.
        </li>
        <li>
          Many proposed quantum speedups for ML have classical analogues that
          are nearly as fast. The community is still figuring out which tasks
          truly benefit.
        </li>
        <li>
          Hybrid classical/quantum (variational) approaches are by far the
          most realistic short-term direction.
        </li>
      </ul>

      <h3>The course in one sentence</h3>
      <MathBlock>{`\\boxed{\\;\\text{linear algebra + a few unitary gates + interference + measurement}\\;=\\;\\text{quantum computing}\\;}`}</MathBlock>

      <p>
        That&apos;s the whole show. From here, recommended next steps are
        Nielsen &amp; Chuang (the standard QC textbook), the Qiskit textbook,
        and reading a couple of original papers — Shor 1997, Grover 1996,
        Cerezo et al. 2021 (VQAs), or Schuld &amp; Petruccione&apos;s QML book.
        Thanks for taking the course.
      </p>
    </>
  )
}
