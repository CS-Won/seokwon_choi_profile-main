import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week5() {
  return (
    <>
      <h2>Rebuilding QM on Hilbert space</h2>
      <p>
        Up to Week 3 we treated{" "}
        <MathInline>{"\\Psi(x, t)"}</MathInline> as a function on the real
        line. Griffiths Ch. 3 reframes the same physics in an abstract
        vector space — Hilbert space — where the wave function is just one
        coordinate representation of a deeper object, the state vector{" "}
        <MathInline>{"|\\psi\\rangle"}</MathInline>. The point is not
        abstraction for its own sake: this language is what lets 3D
        problems, angular momentum, and spin in Weeks 6–7 be tractable, and
        the same machinery underlies every later course in quantum
        information.
      </p>

      <h2>Hilbert space, axiomatically</h2>
      <p>A Hilbert space <MathInline>{"\\mathcal{H}"}</MathInline> is:</p>
      <ul>
        <li>a complex vector space (you can add states and rescale by complex numbers);</li>
        <li>
          equipped with an inner product{" "}
          <MathInline>{"\\langle \\phi | \\psi \\rangle \\in \\mathbb{C}"}</MathInline>{" "}
          that is conjugate-linear in the first slot, linear in the second,
          and satisfies{" "}
          <MathInline>{"\\langle \\psi | \\psi \\rangle \\ge 0"}</MathInline>{" "}
          with equality only for the zero vector;
        </li>
        <li>
          complete under the induced norm{" "}
          <MathInline>{"\\|\\psi\\| = \\sqrt{\\langle \\psi | \\psi\\rangle}"}</MathInline>{" "}
          (every Cauchy sequence converges to something in{" "}
          <MathInline>{"\\mathcal{H}"}</MathInline>).
        </li>
      </ul>
      <p>
        States are unit vectors. The bra–ket notation:{" "}
        <MathInline>{"|\\psi\\rangle"}</MathInline> is the ket,{" "}
        <MathInline>{"\\langle \\phi |"}</MathInline> is the bra (an element
        of the dual space), and the pairing gives the inner product. In the
        position representation the inner product is
      </p>
      <MathBlock>
        {"\\langle \\phi | \\psi \\rangle \\;=\\; \\int \\phi^*(x)\\,\\psi(x)\\, dx."}
      </MathBlock>

      <h2>Operators and the adjoint</h2>
      <p>
        An operator <MathInline>{"\\hat{A}: \\mathcal{H} \\to \\mathcal{H}"}</MathInline>{" "}
        has an adjoint{" "}
        <MathInline>{"\\hat{A}^\\dagger"}</MathInline> defined by
      </p>
      <MathBlock>
        {"\\langle \\phi |\\,\\hat{A}\\,\\psi\\rangle \\;=\\; \\langle \\hat{A}^\\dagger\\,\\phi\\,|\\,\\psi\\rangle\\qquad\\text{for all } |\\phi\\rangle, |\\psi\\rangle."}
      </MathBlock>
      <p>
        <strong>Hermitian:</strong>{" "}
        <MathInline>{"\\hat{A}^\\dagger = \\hat{A}"}</MathInline>.{" "}
        <strong>Unitary:</strong>{" "}
        <MathInline>{"\\hat{U}^\\dagger\\,\\hat{U} = \\hat{U}\\,\\hat{U}^\\dagger = \\mathbf{1}"}</MathInline>.
        Observables are Hermitian, time evolutions are unitary.
      </p>

      <h2>The spectral theorem</h2>
      <p>For a Hermitian operator <MathInline>{"\\hat{A}"}</MathInline>:</p>
      <ol>
        <li>all eigenvalues are real;</li>
        <li>
          eigenvectors for distinct eigenvalues are orthogonal:{" "}
          <MathInline>{"\\langle a | a'\\rangle = 0"}</MathInline> if{" "}
          <MathInline>{"a \\ne a'"}</MathInline>;
        </li>
        <li>
          a complete orthonormal basis of eigenvectors exists, so
          <MathBlock>
            {"\\hat{A} \\;=\\; \\sum_a a\\,|a\\rangle\\langle a|,\\qquad \\mathbf{1} \\;=\\; \\sum_a |a\\rangle\\langle a|."}
          </MathBlock>
        </li>
      </ol>
      <p>
        <strong>Eigenvalues real.</strong> If{" "}
        <MathInline>{"\\hat{A}|a\\rangle = a|a\\rangle"}</MathInline> with{" "}
        <MathInline>{"\\langle a|a\\rangle = 1"}</MathInline>, then
      </p>
      <MathBlock>
        {"a \\;=\\; \\langle a|\\hat{A}|a\\rangle \\;=\\; \\langle \\hat{A} a | a\\rangle \\;=\\; \\overline{\\langle a|\\hat{A}|a\\rangle} \\;=\\; \\bar a,"}
      </MathBlock>
      <p>so <MathInline>{"a \\in \\mathbb{R}"}</MathInline>.</p>
      <p>
        <strong>Orthogonality.</strong> For{" "}
        <MathInline>{"\\hat{A}|a\\rangle = a|a\\rangle"}</MathInline> and{" "}
        <MathInline>{"\\hat{A}|a'\\rangle = a'|a'\\rangle"}</MathInline>{" "}
        with <MathInline>{"a \\ne a'"}</MathInline> (both real),
      </p>
      <MathBlock>
        {"a\\,\\langle a'|a\\rangle \\;=\\; \\langle a'|\\hat{A}|a\\rangle \\;=\\; \\langle \\hat{A} a' | a\\rangle \\;=\\; a'\\,\\langle a'|a\\rangle,"}
      </MathBlock>
      <p>so <MathInline>{"\\langle a'|a\\rangle = 0"}</MathInline>.</p>

      <h2>The generalized statistical interpretation</h2>
      <p>
        Measuring observable{" "}
        <MathInline>{"\\hat{A}"}</MathInline> on{" "}
        <MathInline>{"|\\psi\\rangle"}</MathInline> yields an eigenvalue{" "}
        <MathInline>{"a"}</MathInline> with probability{" "}
        <MathInline>{"P(a) = |\\langle a|\\psi\\rangle|^2"}</MathInline> and
        collapses the state to{" "}
        <MathInline>{"|a\\rangle"}</MathInline>. Using completeness,
      </p>
      <MathBlock>
        {"\\sum_a P(a) \\;=\\; \\sum_a \\langle \\psi|a\\rangle\\langle a|\\psi\\rangle \\;=\\; \\langle \\psi|\\,\\mathbf{1}\\,|\\psi\\rangle \\;=\\; 1,"}
      </MathBlock>
      <p>and the average is</p>
      <MathBlock>
        {"\\langle \\hat{A}\\rangle \\;=\\; \\sum_a a\\,P(a) \\;=\\; \\sum_a a\\,\\langle\\psi|a\\rangle\\langle a|\\psi\\rangle \\;=\\; \\langle\\psi|\\hat{A}|\\psi\\rangle."}
      </MathBlock>

      <h2>Time evolution as a unitary</h2>
      <p>
        The Schrödinger equation in vector form is{" "}
        <MathInline>{"i\\hbar\\,d_t|\\psi\\rangle = \\hat{H}|\\psi\\rangle"}</MathInline>.
        For a time-independent <MathInline>{"\\hat{H}"}</MathInline> the
        formal solution is
      </p>
      <MathBlock>
        {"|\\psi(t)\\rangle \\;=\\; \\hat{U}(t)\\,|\\psi(0)\\rangle,\\qquad \\hat{U}(t) \\;=\\; e^{-\\,i\\,\\hat{H}\\,t/\\hbar}."}
      </MathBlock>
      <p>
        Because <MathInline>{"\\hat{H}"}</MathInline> is Hermitian,{" "}
        <MathInline>{"\\hat{U}^\\dagger \\hat{U} = e^{+iHt/\\hbar}\\,e^{-iHt/\\hbar} = \\mathbf{1}"}</MathInline>,
        so
      </p>
      <MathBlock>
        {"\\langle \\psi(t)|\\psi(t)\\rangle \\;=\\; \\langle \\psi(0)|\\hat{U}^\\dagger\\hat{U}|\\psi(0)\\rangle \\;=\\; \\langle \\psi(0)|\\psi(0)\\rangle."}
      </MathBlock>
      <p>
        Hermitian generators give unitary evolutions; that is the abstract
        reason normalization is preserved (Week 1 derived the same fact
        from the continuity equation).
      </p>

      <h2>The generalized uncertainty principle — full derivation</h2>
      <p>
        We rederive the uncertainty bound in operator form. Let{" "}
        <MathInline>{"\\hat{A}, \\hat{B}"}</MathInline> be two Hermitian
        operators and{" "}
        <MathInline>{"|\\psi\\rangle"}</MathInline> a unit vector. Shift to
        the mean-zero operators
      </p>
      <MathBlock>
        {"\\hat{A}_0 \\;=\\; \\hat{A} - \\langle \\hat{A}\\rangle,\\qquad \\hat{B}_0 \\;=\\; \\hat{B} - \\langle \\hat{B}\\rangle,"}
      </MathBlock>
      <p>and define</p>
      <MathBlock>
        {"|f\\rangle \\;=\\; \\hat{A}_0\\,|\\psi\\rangle,\\qquad |g\\rangle \\;=\\; \\hat{B}_0\\,|\\psi\\rangle."}
      </MathBlock>
      <p>Then</p>
      <MathBlock>
        {"\\langle f|f\\rangle \\;=\\; \\langle\\psi|\\hat{A}_0^2|\\psi\\rangle \\;=\\; \\sigma_A^2,\\qquad \\langle g|g\\rangle \\;=\\; \\sigma_B^2."}
      </MathBlock>
      <p>
        <strong>Cauchy–Schwarz.</strong> For any two vectors in a Hilbert
        space,
      </p>
      <MathBlock>
        {"\\langle f|f\\rangle\\,\\langle g|g\\rangle \\;\\ge\\; |\\langle f|g\\rangle|^2."}
      </MathBlock>
      <p>
        Standard one-line proof: consider{" "}
        <MathInline>{"|f\\rangle - (\\langle g|f\\rangle/\\langle g|g\\rangle)\\,|g\\rangle"}</MathInline>,
        compute its squared norm, and use that it is non-negative.
      </p>
      <p>
        Apply this to the <MathInline>{"f, g"}</MathInline> above:
      </p>
      <MathBlock>
        {"\\sigma_A^2\\,\\sigma_B^2 \\;\\ge\\; |\\langle f|g\\rangle|^2 \\;=\\; |\\langle \\psi|\\hat{A}_0\\,\\hat{B}_0|\\psi\\rangle|^2."}
      </MathBlock>
      <p>
        Now use the fact that any complex number satisfies{" "}
        <MathInline>{"|z|^2 \\ge (\\mathrm{Im}\\,z)^2"}</MathInline>:
      </p>
      <MathBlock>
        {"|\\langle f|g\\rangle|^2 \\;\\ge\\; \\Big(\\,\\mathrm{Im}\\,\\langle f|g\\rangle\\,\\Big)^2 \\;=\\; \\Big(\\tfrac{1}{2i}\\big[\\langle f|g\\rangle - \\langle g|f\\rangle\\big]\\Big)^2."}
      </MathBlock>
      <p>The bracket is</p>
      <MathBlock>
        {"\\langle f|g\\rangle - \\langle g|f\\rangle \\;=\\; \\langle \\psi|\\,\\hat{A}_0\\hat{B}_0 - \\hat{B}_0\\hat{A}_0\\,|\\psi\\rangle \\;=\\; \\langle\\psi|\\,[\\hat{A}_0, \\hat{B}_0]\\,|\\psi\\rangle \\;=\\; \\langle\\psi|\\,[\\hat{A}, \\hat{B}]\\,|\\psi\\rangle,"}
      </MathBlock>
      <p>
        because the c-number shifts in{" "}
        <MathInline>{"\\hat{A}_0, \\hat{B}_0"}</MathInline> drop out of the
        commutator. Combining,
      </p>
      <MathBlock>
        {"\\boxed{\\;\\sigma_A^2\\,\\sigma_B^2 \\;\\ge\\; \\Big(\\tfrac{1}{2 i}\\,\\langle [\\hat{A}, \\hat{B}]\\rangle\\Big)^2.\\;}"}
      </MathBlock>
      <p>
        With{" "}
        <MathInline>{"\\hat{A} = \\hat{x}, \\hat{B} = \\hat{p}"}</MathInline>{" "}
        and <MathInline>{"[\\hat{x}, \\hat{p}] = i\\hbar"}</MathInline>,
      </p>
      <MathBlock>
        {"\\sigma_x\\,\\sigma_p \\;\\ge\\; \\frac{\\hbar}{2}."}
      </MathBlock>
      <p>
        Equality requires both inequalities above to be saturated: the
        Cauchy–Schwarz one ((<MathInline>{"|f\\rangle"}</MathInline>{" "}
        proportional to <MathInline>{"|g\\rangle"}</MathInline>) and the
        &quot;Im part = the whole thing&quot; one (their inner product is
        purely imaginary). Solving these gives Gaussian wave packets.
      </p>

      <h2>Position and momentum representations</h2>
      <p>
        Position eigenstates are generalized (delta-normalized) vectors
        defined by{" "}
        <MathInline>{"\\hat{x}|x\\rangle = x|x\\rangle"}</MathInline>. The
        position-space wave function is{" "}
        <MathInline>{"\\psi(x) = \\langle x | \\psi\\rangle"}</MathInline>.
        Momentum eigenstates similarly satisfy{" "}
        <MathInline>{"\\hat{p}|p\\rangle = p|p\\rangle"}</MathInline>; we can
        derive the change-of-basis kernel.
      </p>
      <p>
        Act <MathInline>{"\\hat{p}"}</MathInline> on{" "}
        <MathInline>{"\\langle x | p\\rangle"}</MathInline> in position
        space, using{" "}
        <MathInline>{"\\hat{p} \\to -i\\hbar\\,\\partial_x"}</MathInline>:
      </p>
      <MathBlock>
        {"-\\,i\\,\\hbar\\,\\partial_x\\,\\langle x|p\\rangle \\;=\\; p\\,\\langle x|p\\rangle \\;\\Longrightarrow\\; \\langle x|p\\rangle \\;=\\; C\\,e^{i\\,p\\,x/\\hbar}."}
      </MathBlock>
      <p>
        The constant <MathInline>{"C = 1/\\sqrt{2\\pi\\hbar}"}</MathInline>{" "}
        is fixed by the delta-normalization{" "}
        <MathInline>{"\\langle p | p'\\rangle = \\delta(p - p')"}</MathInline>{" "}
        and the Fourier identity{" "}
        <MathInline>{"\\int e^{i(p-p')x/\\hbar}\\, dx = 2\\pi\\hbar\\,\\delta(p - p')"}</MathInline>.
        So
      </p>
      <MathBlock>
        {"\\tilde\\psi(p) \\;\\equiv\\; \\langle p|\\psi\\rangle \\;=\\; \\int \\langle p|x\\rangle\\,\\langle x|\\psi\\rangle\\, dx \\;=\\; \\tfrac{1}{\\sqrt{2\\pi\\hbar}}\\int e^{-\\,i\\,p\\,x/\\hbar}\\,\\psi(x)\\, dx,"}
      </MathBlock>
      <p>
        which is exactly the Fourier transform. Position-space and
        momentum-space wave functions are just different bases for the same{" "}
        <MathInline>{"|\\psi\\rangle"}</MathInline>.
      </p>

      <h2>Why this matters next</h2>
      <p>
        In Weeks 6–7 the natural label for a state is{" "}
        <MathInline>{"|n, \\ell, m\\rangle"}</MathInline> (energy, angular
        momentum squared, projection). Spelling out{" "}
        <MathInline>{"\\psi(r, \\theta, \\phi)"}</MathInline> in that
        eigenbasis is short; trying to handle everything in real-space PDEs
        without the Hilbert-space picture is painful. The same comment
        applies to spin in Week 7: a 2-dim Hilbert space with the Pauli
        algebra is the entire story.
      </p>
    </>
  )
}
