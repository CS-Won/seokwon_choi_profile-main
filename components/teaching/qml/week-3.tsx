import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { EncodingComparison } from "@/components/teaching/qml/diagrams"

export default function Week3() {
  return (
    <>
      <h2>How does classical data enter a quantum computer?</h2>
      <p>
        Before the ansatz can do anything useful, the data{" "}
        <MathInline>{"\\mathbf{x}\\in\\mathbb{R}^d"}</MathInline> has to live in a
        quantum state. This step is called <em>data encoding</em>, and the
        seminar deck highlights the three classic recipes. Different
        encodings change the qubit count, the circuit depth, and even what
        kind of function the model can learn (Schuld &amp; Petruccione, 2018).
      </p>

      <EncodingComparison />

      <h2>1. Basis encoding</h2>
      <p>
        The most literal mapping. If the data is a bit string{" "}
        <MathInline>{"\\mathbf{x} = (x_1, \\ldots, x_n) \\in \\{0,1\\}^n"}</MathInline>,
        just place it in the computational basis:
      </p>
      <MathBlock>{"\\mathcal{E}_{\\text{basis}}(\\mathbf{x}) \\;=\\; |x_1 x_2 \\cdots x_n\\rangle."}</MathBlock>
      <p>
        Implementation is trivial — apply an <MathInline>{"X"}</MathInline> gate on
        qubit <MathInline>{"i"}</MathInline> exactly when{" "}
        <MathInline>{"x_i = 1"}</MathInline>.
      </p>
      <ul>
        <li><strong>Qubits:</strong> <MathInline>{"n"}</MathInline> (one per bit).</li>
        <li><strong>Depth:</strong> <MathInline>{"O(1)"}</MathInline> (parallel <MathInline>{"X"}</MathInline> gates).</li>
        <li>
          <strong>Pros:</strong> exact, easy to reason about, plays well with
          arithmetic oracles.
        </li>
        <li>
          <strong>Cons:</strong> only handles discrete data; nothing
          &quot;quantum&quot; happens by default — the state is still
          classical-looking.
        </li>
      </ul>

      <h2>2. Amplitude encoding</h2>
      <p>
        Normalize the data and put it into the amplitudes:
      </p>
      <MathBlock>
        {"\\mathcal{E}_{\\text{amp}}(\\mathbf{x}) \\;=\\; \\frac{1}{\\|\\mathbf{x}\\|_2}\\sum_{j=0}^{N-1} x_j\\,|j\\rangle,\\qquad N = 2^n."}
      </MathBlock>
      <p>
        A length-<MathInline>{"N"}</MathInline> vector now fits in just{" "}
        <MathInline>{"n = \\log_2 N"}</MathInline> qubits — this is the
        eye-catching exponential compression often mentioned in QML talks.
      </p>
      <ul>
        <li>
          <strong>Qubits:</strong> <MathInline>{"\\log_2 N"}</MathInline>.
        </li>
        <li>
          <strong>Depth:</strong> a generic state preparation costs{" "}
          <MathInline>{"O(N)"}</MathInline> two-qubit gates (Schuld &amp;
          Petruccione, 2018). So you saved on qubits but spent on gates.
        </li>
        <li>
          <strong>Pros:</strong> tiny qubit count; matches the &quot;feature
          vector&quot; mental model in linear ML.
        </li>
        <li>
          <strong>Cons:</strong> deep preparation circuits unless the input
          has structure; the global normalization throws away the original
          norm of the data.
        </li>
      </ul>

      <h2>3. Angle encoding</h2>
      <p>
        Spend one qubit per feature, each starting in{" "}
        <MathInline>{"|0\\rangle"}</MathInline> and rotated by the corresponding
        feature:
      </p>
      <MathBlock>
        {"\\mathcal{E}_{\\text{angle}}(\\mathbf{x}) \\;=\\; \\bigotimes_{i=1}^{d}\\, R_y(x_i)\\,|0\\rangle \\;=\\; \\bigotimes_{i=1}^{d}\\Big(\\cos\\tfrac{x_i}{2}\\,|0\\rangle + \\sin\\tfrac{x_i}{2}\\,|1\\rangle\\Big)."}
      </MathBlock>
      <p>
        Compared to amplitude encoding, this is the &quot;cheap on the
        device&quot; option: a single layer of independent single-qubit
        rotations.
      </p>
      <ul>
        <li><strong>Qubits:</strong> <MathInline>{"d"}</MathInline> (one per feature).</li>
        <li>
          <strong>Depth:</strong> <MathInline>{"O(1)"}</MathInline> for the basic
          version, plus optional entangling layers if you want correlations.
        </li>
        <li>
          <strong>Pros:</strong> by far the most common choice on NISQ
          hardware; pairs naturally with the data re-uploading trick we will
          see in week 5.
        </li>
        <li>
          <strong>Cons:</strong> the feature dimension is bounded by the qubit
          count of your device.
        </li>
      </ul>

      <h2>A quick comparison table</h2>
      <div className="not-prose overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 font-semibold text-foreground">Encoding</th>
              <th className="px-3 py-2 font-semibold text-foreground">Qubits</th>
              <th className="px-3 py-2 font-semibold text-foreground">Prep depth</th>
              <th className="px-3 py-2 font-semibold text-foreground">Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-3 py-2">Basis</td>
              <td className="px-3 py-2"><MathInline>{"n"}</MathInline></td>
              <td className="px-3 py-2"><MathInline>{"O(1)"}</MathInline></td>
              <td className="px-3 py-2">discrete (bit strings)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-3 py-2">Amplitude</td>
              <td className="px-3 py-2"><MathInline>{"\\log_2 N"}</MathInline></td>
              <td className="px-3 py-2"><MathInline>{"O(N)"}</MathInline> generic</td>
              <td className="px-3 py-2">dense real vectors</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Angle</td>
              <td className="px-3 py-2"><MathInline>{"d"}</MathInline></td>
              <td className="px-3 py-2"><MathInline>{"O(1)"}</MathInline> per layer</td>
              <td className="px-3 py-2">continuous features</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why the encoding choice is a model choice</h2>
      <p>
        It is tempting to think of encoding as a separate &quot;data prep&quot;
        step, like normalizing features in classical ML. It is not. The
        encoding decides what the final function{" "}
        <MathInline>{"f_\\theta(\\mathbf{x})"}</MathInline> can look like.
      </p>
      <p>
        A useful way to see this (Schuld &amp; Petruccione, 2018; Cerezo et al.,
        2021): the
        expectation-value output of a VQA with angle encoding can always be
        written as a <em>truncated Fourier series</em> in{" "}
        <MathInline>{"\\mathbf{x}"}</MathInline>,
      </p>
      <MathBlock>
        {"f_\\theta(\\mathbf{x}) \\;=\\; \\sum_{\\omega \\in \\Omega}\\, c_\\omega(\\theta)\\, e^{i\\,\\omega \\cdot \\mathbf{x}}."}
      </MathBlock>
      <p>
        The set of frequencies <MathInline>{"\\Omega"}</MathInline> is fixed by the
        encoding (how often, and with what gates, the data enters the
        circuit), while the coefficients{" "}
        <MathInline>{"c_\\omega(\\theta)"}</MathInline> are what training adjusts.
        So if your encoder only puts a single rotation per feature, your model
        can only realize the smallest frequency content — no matter how deep{" "}
        <MathInline>{"U(\\theta)"}</MathInline> is.
      </p>
      <p>
        This observation is exactly what motivates <em>data re-uploading</em>{" "}
        in week 5: by interleaving encoding and trainable layers we add new
        frequencies to <MathInline>{"\\Omega"}</MathInline> and get a strictly
        more expressive model.
      </p>

      <h2>Rule of thumb for picking an encoder</h2>
      <ul>
        <li>
          <strong>Discrete data, oracles in the loss:</strong> use basis
          encoding.
        </li>
        <li>
          <strong>Dense vectors, lots of features, you have a fast state
          preparation routine:</strong> consider amplitude encoding.
        </li>
        <li>
          <strong>Anything else on real NISQ hardware right now:</strong>{" "}
          angle encoding with optional data re-uploading is the safe default.
        </li>
      </ul>
    </>
  )
}
