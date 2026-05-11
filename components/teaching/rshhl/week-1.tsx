import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { HHLPipeline } from "./diagrams"

export default function Week1() {
  return (
    <>
      <p>
        The Harrow–Hassidim–Lloyd (HHL) algorithm is the backbone of this course.
        It solves certain linear systems{" "}
        <MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline> on a quantum
        computer in time that scales like{" "}
        <strong>polylogarithmic in the dimension</strong>, instead of polynomial
        in <MathInline>{`N`}</MathInline> classically — but only under strict
        assumptions and only for special kinds of outputs. We&apos;ll go through
        every step slowly so even someone seeing HHL for the first time can
        follow each line.
      </p>

      <h3>1. The problem in plain language</h3>
      <p>
        Imagine a square matrix <MathInline>{`A`}</MathInline> of size{" "}
        <MathInline>{`N \\times N`}</MathInline> and a vector{" "}
        <MathInline>{`\\mathbf{b}`}</MathInline>. The textbook task is to find{" "}
        <MathInline>{`\\mathbf{x}`}</MathInline> with{" "}
        <MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline>. The textbook
        answer is to invert: <MathInline>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</MathInline>.
        For huge <MathInline>{`N`}</MathInline> (think{" "}
        <MathInline>{`N = 2^{30}`}</MathInline>), even <em>writing</em>{" "}
        <MathInline>{`\\mathbf{x}`}</MathInline> down takes{" "}
        <MathInline>{`\\Omega(N)`}</MathInline> time. So HHL changes the rules:
        we ask only for a quantum state whose amplitudes encode{" "}
        <MathInline>{`\\mathbf{x}`}</MathInline>, and we read out a single
        expectation value like{" "}
        <MathInline>{`\\mathbf{x}^\\dagger M\\mathbf{x}`}</MathInline> at the
        end.
      </p>

      <p>The standing assumptions we&apos;ll need:</p>
      <ul>
        <li>
          <MathInline>{`A`}</MathInline> is <strong>Hermitian</strong>{" "}
          (<MathInline>{`A^\\dagger = A`}</MathInline>). If it is not, replace it
          with the doubled-up{" "}
          <MathInline>{`\\begin{pmatrix} 0 & A \\\\ A^\\dagger & 0 \\end{pmatrix}`}</MathInline>{" "}
          trick — same idea, slightly larger matrix.
        </li>
        <li>
          <MathInline>{`A`}</MathInline> is <strong>sparse</strong>: at most{" "}
          <MathInline>{`s`}</MathInline> nonzero entries per row.
        </li>
        <li>
          The <strong>condition number</strong>{" "}
          <MathInline>{`\\kappa = \\lambda_{\\max}/\\lambda_{\\min}`}</MathInline>{" "}
          is not too large. Eigenvalues lie in an interval like{" "}
          <MathInline>{`[1/\\kappa, 1]`}</MathInline>.
        </li>
        <li>
          We can prepare <MathInline>{`|b\\rangle`}</MathInline>, a normalized
          quantum state whose amplitudes are the entries of{" "}
          <MathInline>{`\\mathbf{b}`}</MathInline>.
        </li>
      </ul>

      <h3>2. Eigendecomposition: the magic lens</h3>
      <p>
        Because <MathInline>{`A`}</MathInline> is Hermitian, the spectral theorem
        gives us an orthonormal eigenbasis{" "}
        <MathInline>{`\\{|u_j\\rangle\\}_{j=1}^N`}</MathInline> with real
        eigenvalues <MathInline>{`\\lambda_j`}</MathInline>:
      </p>

      <MathBlock>{`A \\;=\\; \\sum_{j=1}^{N} \\lambda_j\\,|u_j\\rangle\\langle u_j|, \\qquad A|u_j\\rangle = \\lambda_j|u_j\\rangle`}</MathBlock>

      <p>
        Expand <MathInline>{`|b\\rangle`}</MathInline> in this eigenbasis (any
        orthonormal basis covers the whole space, so this is always possible):
      </p>

      <MathBlock>{`|b\\rangle \\;=\\; \\sum_{j=1}^{N} \\beta_j\\,|u_j\\rangle, \\qquad \\beta_j = \\langle u_j|b\\rangle`}</MathBlock>

      <p>
        Why is this great? Because{" "}
        <MathInline>{`A^{-1}`}</MathInline> has the same eigenvectors and{" "}
        <em>inverse</em> eigenvalues:
      </p>

      <MathBlock>{`A^{-1} \\;=\\; \\sum_j \\frac{1}{\\lambda_j}\\,|u_j\\rangle\\langle u_j|`}</MathBlock>

      <p>So our target state is, up to normalization,</p>

      <MathBlock>{`|x\\rangle \\;\\propto\\; A^{-1}|b\\rangle \\;=\\; \\sum_j \\frac{\\beta_j}{\\lambda_j}\\,|u_j\\rangle`}</MathBlock>

      <p>
        The whole algorithm is just: <em>somehow attach the factor{" "}
        <MathInline>{`1/\\lambda_j`}</MathInline> to each amplitude{" "}
        <MathInline>{`\\beta_j`}</MathInline></em>. The trick is doing this
        without knowing the <MathInline>{`\\lambda_j`}</MathInline> in advance.
      </p>

      <h3>3. Quantum phase estimation — &quot;label each eigenvector with its eigenvalue&quot;</h3>
      <p>
        Phase estimation is a black-box quantum routine. Hand it a unitary{" "}
        <MathInline>{`U`}</MathInline> and an eigenvector{" "}
        <MathInline>{`|u\\rangle`}</MathInline> with{" "}
        <MathInline>{`U|u\\rangle = e^{2\\pi i\\varphi}|u\\rangle`}</MathInline>;
        it gives you back a register holding{" "}
        <MathInline>{`\\varphi`}</MathInline>.
      </p>
      <p>
        We pick <MathInline>{`U = e^{iAt_0}`}</MathInline> for some chosen{" "}
        <MathInline>{`t_0`}</MathInline>. Since{" "}
        <MathInline>{`A|u_j\\rangle = \\lambda_j|u_j\\rangle`}</MathInline>:
      </p>

      <MathBlock>{`e^{iAt_0}|u_j\\rangle \\;=\\; e^{i\\lambda_j t_0}\\,|u_j\\rangle`}</MathBlock>

      <p>
        So the eigenvalue{" "}
        <MathInline>{`\\lambda_j`}</MathInline> shows up as a{" "}
        <strong>phase</strong>. Choose <MathInline>{`t_0`}</MathInline> so the
        phase <MathInline>{`\\lambda_j t_0 / 2\\pi`}</MathInline> stays in{" "}
        <MathInline>{`[0,1)`}</MathInline>, and phase estimation pulls{" "}
        <MathInline>{`\\lambda_j`}</MathInline> into an ancilla register{" "}
        <MathInline>{`|\\tilde\\lambda_j\\rangle`}</MathInline>. Applying it to{" "}
        <MathInline>{`|b\\rangle`}</MathInline>:
      </p>

      <MathBlock>{`|b\\rangle|0\\rangle \\;\\xrightarrow{\\text{QPE}}\\; \\sum_j \\beta_j\\,|u_j\\rangle\\,|\\tilde\\lambda_j\\rangle`}</MathBlock>

      <p>
        We don&apos;t actually <em>know</em> the eigenvalues — they are stored as
        amplitudes/labels, and the rest of the algorithm operates on those
        labels in superposition. Hamiltonian simulation of{" "}
        <MathInline>{`e^{iAt}`}</MathInline> is the bottleneck here; modern
        block-encoding methods do it in time{" "}
        <MathInline>{`\\tilde O(s\\,\\|A\\|\\,t)`}</MathInline>.
      </p>

      <h3>4. Controlled rotation — turn{" "}
        <MathInline>{`\\tilde\\lambda_j`}</MathInline> into{" "}
        <MathInline>{`1/\\tilde\\lambda_j`}</MathInline>
      </h3>
      <p>
        Add a fresh ancilla qubit and rotate it by an angle depending on the
        stored eigenvalue:
      </p>

      <MathBlock>{`|\\tilde\\lambda_j\\rangle|0\\rangle_{\\text{anc}} \\;\\mapsto\\; |\\tilde\\lambda_j\\rangle\\!\\left(\\sqrt{1 - \\tfrac{C^2}{\\tilde\\lambda_j^2}}\\,|0\\rangle + \\tfrac{C}{\\tilde\\lambda_j}\\,|1\\rangle\\right)`}</MathBlock>

      <p>
        Here <MathInline>{`C`}</MathInline> is a constant chosen small enough
        that <MathInline>{`C/\\tilde\\lambda_j \\leq 1`}</MathInline> for every
        possible <MathInline>{`\\tilde\\lambda_j`}</MathInline> — concretely{" "}
        <MathInline>{`C = O(1/\\kappa)`}</MathInline> works, because the
        smallest <MathInline>{`\\tilde\\lambda_j`}</MathInline> is roughly{" "}
        <MathInline>{`1/\\kappa`}</MathInline>. This is a controlled{" "}
        <MathInline>{`R_y`}</MathInline> rotation built out of arithmetic on the
        eigenvalue register.
      </p>

      <p>The full state after this step is</p>

      <MathBlock>{`\\sum_j \\beta_j\\,|u_j\\rangle\\,|\\tilde\\lambda_j\\rangle\\!\\left(\\sqrt{1 - \\tfrac{C^2}{\\tilde\\lambda_j^2}}\\,|0\\rangle + \\tfrac{C}{\\tilde\\lambda_j}\\,|1\\rangle\\right)`}</MathBlock>

      <h3>5. Uncompute and post-select</h3>
      <p>
        Run phase estimation <strong>backwards</strong> to uncompute the
        eigenvalue register (this puts{" "}
        <MathInline>{`|\\tilde\\lambda_j\\rangle`}</MathInline> back to{" "}
        <MathInline>{`|0\\rangle`}</MathInline>):
      </p>

      <MathBlock>{`\\sum_j \\beta_j\\,|u_j\\rangle\\,|0\\rangle\\!\\left(\\sqrt{1 - \\tfrac{C^2}{\\tilde\\lambda_j^2}}\\,|0\\rangle + \\tfrac{C}{\\tilde\\lambda_j}\\,|1\\rangle\\right)`}</MathBlock>

      <p>
        Now measure the last ancilla. Conditioned on the outcome{" "}
        <MathInline>{`|1\\rangle`}</MathInline>, the remaining state on the main
        register is
      </p>

      <MathBlock>{`\\frac{1}{\\sqrt{P_1}}\\,\\sum_j \\frac{C\\,\\beta_j}{\\tilde\\lambda_j}\\,|u_j\\rangle \\;\\propto\\; \\sum_j \\frac{\\beta_j}{\\lambda_j}\\,|u_j\\rangle \\;=\\; A^{-1}|b\\rangle`}</MathBlock>

      <p>That is exactly the (normalized) solution state we wanted.</p>

      <p>The probability of getting the success outcome is</p>

      <MathBlock>{`P_1 \\;=\\; \\sum_j |\\beta_j|^2 \\frac{C^2}{\\tilde\\lambda_j^2} \\;=\\; \\Theta(1/\\kappa^2)`}</MathBlock>

      <p>
        because the worst eigenvalues are{" "}
        <MathInline>{`\\sim 1/\\kappa`}</MathInline>. Using amplitude
        amplification, this can be boosted to{" "}
        <MathInline>{`O(1)`}</MathInline> in time{" "}
        <MathInline>{`O(\\kappa)`}</MathInline>, which is where the{" "}
        <MathInline>{`\\kappa`}</MathInline> factor in the runtime ultimately
        comes from.
      </p>

      <h3>6. Putting the pieces together</h3>

      <HHLPipeline />

      <p>
        Total runtime (Harrow, Hassidim, &amp; Lloyd, 2009):
      </p>

      <MathBlock>{`T_{\\mathrm{HHL}} \\;=\\; \\tilde O\\!\\left(\\frac{\\log(N)\\,s^2\\,\\kappa^2}{\\varepsilon}\\right)`}</MathBlock>

      <p>
        with later improvements bringing the{" "}
        <MathInline>{`\\kappa`}</MathInline> dependence to nearly linear and the{" "}
        <MathInline>{`s`}</MathInline> dependence to almost linear. The headline
        is the <MathInline>{`\\log N`}</MathInline>: exponentially smaller than
        the <MathInline>{`N`}</MathInline> a classical solver pays. The caveats
        are exactly the assumptions: we never write{" "}
        <MathInline>{`\\mathbf{x}`}</MathInline> classically, we need state
        preparation for <MathInline>{`|b\\rangle`}</MathInline>, and we pay in
        <MathInline>{`\\kappa, 1/\\varepsilon`}</MathInline>.
      </p>

      <h3>7. Mini sanity check — 2×2 example</h3>
      <p>
        Take{" "}
        <MathInline>{`A = \\begin{pmatrix} 3/4 & 1/4 \\\\ 1/4 & 3/4 \\end{pmatrix}`}</MathInline>{" "}
        and <MathInline>{`|b\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt 2`}</MathInline>.
        Eigenpairs:
      </p>
      <MathBlock>{`\\lambda_+ = 1,\\quad |u_+\\rangle = \\tfrac{1}{\\sqrt 2}(|0\\rangle+|1\\rangle); \\qquad \\lambda_- = \\tfrac12,\\quad |u_-\\rangle = \\tfrac{1}{\\sqrt 2}(|0\\rangle-|1\\rangle)`}</MathBlock>
      <p>
        Then{" "}
        <MathInline>{`\\beta_+ = 1, \\beta_- = 0`}</MathInline>, so{" "}
        <MathInline>{`A^{-1}|b\\rangle = \\beta_+/\\lambda_+ |u_+\\rangle = |u_+\\rangle`}</MathInline>.
        The state is unchanged because{" "}
        <MathInline>{`|b\\rangle`}</MathInline> happened to already be an
        eigenvector with eigenvalue 1. A nontrivial choice like{" "}
        <MathInline>{`|b\\rangle = |0\\rangle`}</MathInline> would give{" "}
        <MathInline>{`\\beta_+ = \\beta_- = 1/\\sqrt 2`}</MathInline> and{" "}
        <MathInline>{`A^{-1}|0\\rangle \\propto \\tfrac{1}{1}|u_+\\rangle + \\tfrac{1}{1/2}|u_-\\rangle`}</MathInline>,
        i.e. the small-eigenvalue component is amplified — which is exactly the
        kind of behavior the controlled rotation step implements coherently.
      </p>

      <h3>References (this week)</h3>
      <ul className="text-sm text-muted-foreground">
        <li>
          Harrow, A. W., Hassidim, A., &amp; Lloyd, S. (2009). Quantum algorithm
          for linear systems of equations. <em>Physical Review Letters</em>,{" "}
          <em>103</em>(15), 150502. (Also arXiv:0811.3171.)
        </li>
      </ul>
    </>
  )
}
