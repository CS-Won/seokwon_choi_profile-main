import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import {
  DataReUploading,
  ParameterShift,
} from "@/components/teaching/qml/diagrams"

export default function Week5() {
  return (
    <>
      <h2>From classical perceptron to quantum neural network</h2>
      <p>
        Last week we built up a classical feed-forward network: a chain of
        affine maps <MathInline>{"W^{(\\ell)}\\mathbf{a}^{(\\ell-1)} + \\mathbf{b}^{(\\ell)}"}</MathInline>{" "}
        followed by element-wise nonlinearities{" "}
        <MathInline>{"\\sigma"}</MathInline>. A <em>quantum perceptron</em>{" "}
        keeps the same cartoon — input, weighted combination, nonlinearity,
        output — but every step is built from quantum gates. The job of the
        trainable parameters is taken by rotation angles inside a circuit,
        and the &quot;nonlinearity&quot; ultimately comes from the act of
        measurement (squaring amplitudes).
      </p>

      <h2>The QNN as a parametrized circuit</h2>
      <p>A typical QNN reuses the VQA template from Week 2:</p>
      <MathBlock>
        {"|\\psi(\\theta;\\mathbf{x})\\rangle \\;=\\; U_L(\\theta_L)\\,V(\\mathbf{x})\\,U_{L-1}(\\theta_{L-1})\\,V(\\mathbf{x})\\,\\cdots\\, U_1(\\theta_1)\\,V(\\mathbf{x})\\,|0\\rangle,"}
      </MathBlock>
      <p>
        and the output is the expectation of a fixed observable{" "}
        <MathInline>{"O"}</MathInline>:
      </p>
      <MathBlock>
        {"f_\\theta(\\mathbf{x}) \\;=\\; \\langle \\psi(\\theta;\\mathbf{x})|\\,O\\,|\\psi(\\theta;\\mathbf{x})\\rangle."}
      </MathBlock>
      <p>
        Setting <MathInline>{"L=1"}</MathInline> recovers a single-layer
        &quot;quantum perceptron&quot;. Larger{" "}
        <MathInline>{"L"}</MathInline> gives a deep QNN.
      </p>

      <h2>Training: the parameter-shift rule</h2>
      <p>
        We want to run gradient descent on{" "}
        <MathInline>{"\\theta"}</MathInline>. But auto-differentiating the
        underlying quantum circuit on a real device is impossible — we only
        get sampled measurement outcomes. The clever fix is the{" "}
        <em>parameter-shift rule</em>.
      </p>
      <p>
        Take a single rotation gate{" "}
        <MathInline>{"R_P(\\theta) = e^{-i\\,\\theta\\,P/2}"}</MathInline> where{" "}
        <MathInline>{"P"}</MathInline> is a Pauli (so its eigenvalues are{" "}
        <MathInline>{"\\pm 1"}</MathInline>). For any Hermitian observable{" "}
        <MathInline>{"O"}</MathInline>, define
      </p>
      <MathBlock>
        {"g(\\theta) \\;=\\; \\langle\\psi|\\,R_P^\\dagger(\\theta)\\,O\\,R_P(\\theta)\\,|\\psi\\rangle."}
      </MathBlock>
      <p>
        A short calculation (Schuld &amp; Petruccione, 2018; Cerezo et al., 2021)
        shows
      </p>
      <MathBlock>
        {"\\frac{\\partial g}{\\partial \\theta} \\;=\\; \\tfrac{1}{2}\\!\\left[\\,g\\!\\left(\\theta + \\tfrac{\\pi}{2}\\right) \\;-\\; g\\!\\left(\\theta - \\tfrac{\\pi}{2}\\right)\\,\\right]."}
      </MathBlock>
      <p>
        So the gradient is not a finite-difference approximation — it is{" "}
        <em>exactly</em> the difference of two values of the same circuit at
        shifted parameters. That is exotic and very useful.
      </p>

      <ParameterShift />

      <h3>Why this is surprising</h3>
      <ul>
        <li>
          <strong>No tape, no graph.</strong> Backprop relies on storing
          intermediate states, which on a quantum device collapses the wave
          function. Parameter shift sidesteps the issue completely.
        </li>
        <li>
          <strong>Same circuit hardware.</strong> Both shifted evaluations use
          the same compiled circuit — only the angle changes. So we can run
          them on the same QPU job with no recompilation overhead.
        </li>
        <li>
          <strong>Linear cost.</strong> For a circuit with{" "}
          <MathInline>{"P"}</MathInline> parameters, you need{" "}
          <MathInline>{"2P"}</MathInline> circuit evaluations per gradient.
          Plenty for shallow VQAs.
        </li>
      </ul>

      <h2>Data re-uploading and the universal quantum classifier</h2>
      <p>
        A surprising result (Schuld &amp; Petruccione, 2018; Cerezo et al., 2021)
        is that even{" "}
        <em>one qubit</em> can become a universal classifier — if you upload
        the data many times.
      </p>

      <DataReUploading />

      <p>
        Interleaving the encoder <MathInline>{"V(\\mathbf{x})"}</MathInline> with
        trainable rotations <MathInline>{"W(\\theta_\\ell)"}</MathInline> grows the
        Fourier spectrum we mentioned in Week 3. After{" "}
        <MathInline>{"L"}</MathInline> layers the output is, in essence,
      </p>
      <MathBlock>
        {"f_\\theta(x) \\;=\\; \\sum_{k=-L}^{L} c_k(\\theta)\\, e^{i\\,k\\,x},"}
      </MathBlock>
      <p>
        i.e. a degree-<MathInline>{"L"}</MathInline> trigonometric polynomial in{" "}
        <MathInline>{"x"}</MathInline>. By the Stone-Weierstrass-style argument,
        as <MathInline>{"L\\to\\infty"}</MathInline> this family can approximate any
        continuous function on a compact interval. That is what
        &quot;universal&quot; means in this context — and notice that we got
        it with a single qubit. The reason is that re-uploading effectively
        plays the role of <em>depth</em> in a classical network.
      </p>

      <h2>The honest limitations</h2>
      <p>
        QNNs are exciting but we should be calibrated about what NISQ hardware
        can do today.
      </p>
      <ul>
        <li>
          <strong>Noise.</strong> Every gate has an error rate of order{" "}
          <MathInline>{"10^{-3}"}</MathInline> to{" "}
          <MathInline>{"10^{-2}"}</MathInline> on current devices, so deep circuits
          accumulate errors quickly.
        </li>
        <li>
          <strong>Qubit count and connectivity.</strong> Real machines have{" "}
          <MathInline>{"\\mathcal{O}(10^2)"}</MathInline> qubits and limited
          connectivity, which caps the model size.
        </li>
        <li>
          <strong>Barren plateaus.</strong> The gradient variance of random
          deep ansatzes scales like{" "}
          <MathInline>{"2^{-n}"}</MathInline>, so naive training stalls on large
          systems (McClean et al., 2018). Cures include problem-aware
          ansatzes and warm-starting from classical solutions.
        </li>
        <li>
          <strong>Statistical cost.</strong> Each loss/gradient evaluation
          needs many shots; the <MathInline>{"1/\\sqrt{S}"}</MathInline> dependence
          can dominate runtime even when the circuit itself is short.
        </li>
      </ul>

      <h2>Where to go next</h2>
      <p>
        Following this seminar, a few good rabbit holes:
      </p>
      <ul>
        <li>
          <em>Quantum kernels</em> — use the encoder{" "}
          <MathInline>{"|\\phi(\\mathbf{x})\\rangle"}</MathInline> to define a
          kernel <MathInline>{"K(\\mathbf{x},\\mathbf{y}) = |\\langle\\phi(\\mathbf{x})|\\phi(\\mathbf{y})\\rangle|^2"}</MathInline>
          and plug into a classical SVM (Schuld &amp; Petruccione, 2018).
        </li>
        <li>
          <em>Quantum convolutional networks</em> — exploit translation
          invariance to keep training tractable on many qubits (Cerezo et al.,
          2021).
        </li>
        <li>
          <em>QML for chemistry</em> — VQE and its descendants, where the
          variational principle of Week 2 has a direct physical meaning.
        </li>
      </ul>
      <p>
        Thanks for sticking with me through the seminar. The variational
        loop, the three encodings, and the parameter-shift rule together
        form the full operational toolkit you need to read most current QML
        papers.
      </p>
    </>
  )
}
