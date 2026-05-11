import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week8() {
  return (
    <>
      <h2>Final: full worked solutions</h2>
      <p>
        Four problems from{" "}
        <strong>PHY3101 — Quantum Mechanics I, Spring 2024 Final</strong>.
        Each one is built on the angular-momentum / 3D / harmonic-oscillator
        machinery from Weeks 5–7. Time-management tip: solve Q4 last — it
        looks scary but reduces to a 1D oscillator once you set up the
        ladder operators.
      </p>

      <h2>Q1. Angular momentum ladder (20 pts)</h2>

      <h3>(a) Derive the ladder amplitudes</h3>
      <p>
        Write the magnitude squared of{" "}
        <MathInline>{"\\hat{L}_+|\\ell, m\\rangle"}</MathInline>:
      </p>
      <MathBlock>
        {"\\big\\|\\hat{L}_+\\,|\\ell, m\\rangle\\big\\|^2 \\;=\\; \\langle \\ell, m|\\,\\hat{L}_-\\,\\hat{L}_+\\,|\\ell, m\\rangle."}
      </MathBlock>
      <p>
        We need <MathInline>{"\\hat{L}_-\\hat{L}_+"}</MathInline>. Expand:
      </p>
      <MathBlock>
        {"\\hat{L}_-\\,\\hat{L}_+ \\;=\\; (\\hat{L}_x - i\\hat{L}_y)(\\hat{L}_x + i\\hat{L}_y) \\;=\\; \\hat{L}_x^2 + \\hat{L}_y^2 + i\\,[\\hat{L}_x, \\hat{L}_y] \\;=\\; \\hat{L}^2 - \\hat{L}_z^2 - \\hbar\\,\\hat{L}_z."}
      </MathBlock>
      <p>Sandwich with <MathInline>{"|\\ell, m\\rangle"}</MathInline>:</p>
      <MathBlock>
        {"\\langle \\ell, m|\\hat{L}_-\\hat{L}_+|\\ell, m\\rangle \\;=\\; \\hbar^2\\big[\\ell(\\ell+1) - m^2 - m\\big] \\;=\\; \\hbar^2(\\ell - m)(\\ell + m + 1)."}
      </MathBlock>
      <p>Taking the positive square root (standard phase convention),</p>
      <MathBlock>
        {"\\boxed{\\;\\hat{L}_+\\,|\\ell, m\\rangle \\;=\\; \\hbar\\,\\sqrt{(\\ell - m)(\\ell + m + 1)}\\,|\\ell, m+1\\rangle.\\;}"}
      </MathBlock>
      <p>The same computation with <MathInline>{"\\hat{L}_+\\hat{L}_- = \\hat{L}^2 - \\hat{L}_z^2 + \\hbar\\hat{L}_z"}</MathInline> gives</p>
      <MathBlock>
        {"\\boxed{\\;\\hat{L}_-\\,|\\ell, m\\rangle \\;=\\; \\hbar\\,\\sqrt{(\\ell + m)(\\ell - m + 1)}\\,|\\ell, m - 1\\rangle.\\;}"}
      </MathBlock>

      <h3>(b) Matrix of <MathInline>{"\\hat{L}_x"}</MathInline> for <MathInline>{"\\ell = 1"}</MathInline></h3>
      <p>
        In the basis{" "}
        <MathInline>{"\\{|1, 1\\rangle, |1, 0\\rangle, |1, -1\\rangle\\}"}</MathInline>{" "}
        the ladder amplitudes are
      </p>
      <MathBlock>
        {"\\hat{L}_+\\,|1, -1\\rangle = \\hbar\\sqrt{2}\\,|1, 0\\rangle,\\qquad \\hat{L}_+\\,|1, 0\\rangle = \\hbar\\sqrt{2}\\,|1, 1\\rangle,\\qquad \\hat{L}_+\\,|1, 1\\rangle = 0."}
      </MathBlock>
      <p>Reading off the matrix elements,</p>
      <MathBlock>
        {"\\hat{L}_+ \\;=\\; \\hbar\\sqrt{2}\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix},\\qquad \\hat{L}_- \\;=\\; \\hat{L}_+^\\dagger \\;=\\; \\hbar\\sqrt{2}\\begin{pmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{pmatrix}."}
      </MathBlock>
      <p>
        Use{" "}
        <MathInline>{"\\hat{L}_x = (\\hat{L}_+ + \\hat{L}_-)/2"}</MathInline>:
      </p>
      <MathBlock>
        {"\\boxed{\\;\\hat{L}_x \\;=\\; \\frac{\\hbar}{\\sqrt{2}}\\,\\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}.\\;}"}
      </MathBlock>
      <p>
        Sanity check: trace zero (Hermitian traceless ⇒ eigenvalues sum to
        zero), and the eigenvalues are{" "}
        <MathInline>{"\\{-\\hbar, 0, +\\hbar\\}"}</MathInline> — exactly the
        spectrum of any{" "}
        <MathInline>{"\\hat{L}_x"}</MathInline> on{" "}
        <MathInline>{"\\ell = 1"}</MathInline>.
      </p>

      <h2>Q2. Spin–orbit coupling (20 pts)</h2>
      <p>
        Hamiltonian{" "}
        <MathInline>{"\\hat{H} = (\\omega/\\hbar)\\,\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}"}</MathInline>{" "}
        with electron spin <MathInline>{"s = 1/2"}</MathInline> and{" "}
        <MathInline>{"\\ell = 1"}</MathInline>.
      </p>

      <h3>(a) Eigenvalues and degeneracies</h3>
      <p>Use the identity from Week 7:</p>
      <MathBlock>
        {"\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}} \\;=\\; \\tfrac{1}{2}\\,(\\hat{\\mathbf{J}}^2 - \\hat{\\mathbf{L}}^2 - \\hat{\\mathbf{S}}^2)."}
      </MathBlock>
      <p>
        On a state with definite{" "}
        <MathInline>{"j, \\ell, s"}</MathInline> this acts as a number,{" "}
        <MathInline>{"(\\hbar^2/2)[j(j+1) - \\ell(\\ell+1) - s(s+1)]"}</MathInline>.
        For <MathInline>{"\\ell = 1, s = 1/2"}</MathInline> the possible{" "}
        <MathInline>{"j"}</MathInline> are{" "}
        <MathInline>{"3/2"}</MathInline> and{" "}
        <MathInline>{"1/2"}</MathInline>. Plug in:
      </p>
      <ul>
        <li>
          <MathInline>{"j = 3/2"}</MathInline>:{" "}
          <MathInline>{"\\langle \\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}\\rangle = (\\hbar^2/2)[15/4 - 2 - 3/4] = \\hbar^2/2"}</MathInline>{" "}
          ⇒ <MathInline>{"E_{3/2} = (\\omega/\\hbar)\\cdot\\hbar^2/2 = (\\hbar\\omega)/2"}</MathInline>.
          Degeneracy{" "}
          <MathInline>{"2j + 1 = 4"}</MathInline>.
        </li>
        <li>
          <MathInline>{"j = 1/2"}</MathInline>:{" "}
          <MathInline>{"\\langle \\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}\\rangle = (\\hbar^2/2)[3/4 - 2 - 3/4] = -\\hbar^2"}</MathInline>{" "}
          ⇒ <MathInline>{"E_{1/2} = -\\,\\hbar\\omega"}</MathInline>.
          Degeneracy <MathInline>{"2j + 1 = 2"}</MathInline>.
        </li>
      </ul>
      <p>Total dimension 4 + 2 = 6, matches the product space{" "}
        <MathInline>{"(2\\ell+1)\\cdot(2s+1) = 3\\cdot 2 = 6"}</MathInline>. ✓</p>

      <h3>(b) Probabilities from <MathInline>{"|m_\\ell = 1, m_s = -1/2\\rangle"}</MathInline></h3>
      <p>
        Expand the uncoupled state in the coupled basis. The relevant
        Clebsch–Gordan decompositions for{" "}
        <MathInline>{"\\ell = 1, s = 1/2"}</MathInline> are
      </p>
      <MathBlock>
        {"|3/2, 1/2\\rangle \\;=\\; \\sqrt{\\tfrac{1}{3}}\\,|1, 1\\rangle|\\downarrow\\rangle + \\sqrt{\\tfrac{2}{3}}\\,|1, 0\\rangle|\\uparrow\\rangle,"}
      </MathBlock>
      <MathBlock>
        {"|1/2, 1/2\\rangle \\;=\\; \\sqrt{\\tfrac{2}{3}}\\,|1, 1\\rangle|\\downarrow\\rangle - \\sqrt{\\tfrac{1}{3}}\\,|1, 0\\rangle|\\uparrow\\rangle."}
      </MathBlock>
      <p>Inverting,</p>
      <MathBlock>
        {"|1, 1\\rangle|\\downarrow\\rangle \\;=\\; \\sqrt{\\tfrac{1}{3}}\\,|3/2, 1/2\\rangle + \\sqrt{\\tfrac{2}{3}}\\,|1/2, 1/2\\rangle."}
      </MathBlock>
      <p>So the measurement probabilities are</p>
      <MathBlock>
        {"P\\!\\big(E = \\tfrac{\\hbar\\omega}{2}\\big) = \\tfrac{1}{3},\\qquad P\\!\\big(E = -\\,\\hbar\\omega\\big) = \\tfrac{2}{3}."}
      </MathBlock>

      <h2>Q3. Three-dimensional isotropic oscillator (30 pts)</h2>
      <p>
        <MathInline>{"V = \\tfrac{1}{2}\\,m\\omega^2\\,r^2"}</MathInline>. We
        confirm <MathInline>{"E_N = (N + 3/2)\\,\\hbar\\omega"}</MathInline>{" "}
        by directly solving the radial equation.
      </p>

      <h3>(a) Dimensionless radial equation</h3>
      <p>
        Plug <MathInline>{"V = \\tfrac{1}{2}m\\omega^2 r^2"}</MathInline>{" "}
        into the radial equation in <MathInline>{"u(r) = r R(r)"}</MathInline>{" "}
        and rescale <MathInline>{"\\rho = \\sqrt{m\\omega/\\hbar}\\, r"}</MathInline>:
      </p>
      <MathBlock>
        {"\\frac{d^2 u}{d\\rho^2} \\;+\\; \\Big[\\,\\tfrac{2 E}{\\hbar\\omega} \\,-\\, \\rho^2 \\,-\\, \\tfrac{\\ell(\\ell+1)}{\\rho^2}\\,\\Big]\\,u \\;=\\; 0."}
      </MathBlock>
      <p>Asymptotics:</p>
      <ul>
        <li>
          <MathInline>{"\\rho \\to \\infty"}</MathInline>:{" "}
          <MathInline>{"u'' \\sim \\rho^2\\,u"}</MathInline> ⇒{" "}
          <MathInline>{"u \\sim e^{-\\rho^2/2}"}</MathInline>.
        </li>
        <li>
          <MathInline>{"\\rho \\to 0"}</MathInline>:{" "}
          <MathInline>{"u'' \\sim (\\ell(\\ell+1)/\\rho^2)\\,u"}</MathInline> ⇒{" "}
          <MathInline>{"u \\sim \\rho^{\\ell+1}"}</MathInline>.
        </li>
      </ul>

      <h3>(b) Series solution and quantization</h3>
      <p>
        Write{" "}
        <MathInline>{"u(\\rho) = \\rho^{\\ell+1}\\,e^{-\\rho^2/2}\\,v(\\rho)"}</MathInline>.
        Substitute and use <MathInline>{"v(\\rho) = \\sum_k a_k\\,\\rho^{2k}"}</MathInline>{" "}
        (only even powers survive). The recursion is
      </p>
      <MathBlock>
        {"a_{k+1} \\;=\\; \\frac{2(2k + \\ell + 3/2) - 2 E/(\\hbar\\omega)}{(2k+2)(2k + 2\\ell + 3)}\\, a_k."}
      </MathBlock>
      <p>
        For the series to terminate at <MathInline>{"k = n"}</MathInline>{" "}
        (essential for normalizability), the numerator must vanish:
      </p>
      <MathBlock>
        {"\\frac{2 E}{\\hbar\\omega} \\;=\\; 2\\,(2 n + \\ell) + 3 \\quad\\Longrightarrow\\quad E \\;=\\; \\Big(2 n + \\ell + \\tfrac{3}{2}\\Big)\\,\\hbar\\omega."}
      </MathBlock>
      <p>Define <MathInline>{"N \\equiv 2 n + \\ell"}</MathInline>:</p>
      <MathBlock>
        {"\\boxed{\\;E_N \\;=\\; \\Big(N + \\tfrac{3}{2}\\Big)\\,\\hbar\\omega,\\quad N = 0, 1, 2, \\dots\\;}"}
      </MathBlock>

      <h3>(c) Degeneracies and angular-momentum content (<MathInline>{"N \\le 3"}</MathInline>)</h3>
      <p>
        For each <MathInline>{"N"}</MathInline> list the pairs{" "}
        <MathInline>{"(n, \\ell)"}</MathInline> with{" "}
        <MathInline>{"2n + \\ell = N"}</MathInline> and{" "}
        <MathInline>{"n, \\ell \\ge 0"}</MathInline>, then count{" "}
        <MathInline>{"(2\\ell + 1)"}</MathInline> for each.
      </p>
      <div className="not-prose overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 font-semibold text-foreground">N</th>
              <th className="px-3 py-2 font-semibold text-foreground">(n, ℓ) allowed</th>
              <th className="px-3 py-2 font-semibold text-foreground">ℓ values</th>
              <th className="px-3 py-2 font-semibold text-foreground">degeneracy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-3 py-2">0</td>
              <td className="px-3 py-2">(0, 0)</td>
              <td className="px-3 py-2">s</td>
              <td className="px-3 py-2">1</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-3 py-2">1</td>
              <td className="px-3 py-2">(0, 1)</td>
              <td className="px-3 py-2">p</td>
              <td className="px-3 py-2">3</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-3 py-2">2</td>
              <td className="px-3 py-2">(0, 2), (1, 0)</td>
              <td className="px-3 py-2">d, s</td>
              <td className="px-3 py-2">6</td>
            </tr>
            <tr>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2">(0, 3), (1, 1)</td>
              <td className="px-3 py-2">f, p</td>
              <td className="px-3 py-2">10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Total counts <MathInline>{"\\{1, 3, 6, 10, \\dots\\}"}</MathInline>{" "}
        match the Cartesian formula{" "}
        <MathInline>{"\\binom{N+2}{2}"}</MathInline> from three independent
        1D oscillators — a useful consistency check.
      </p>

      <h2>Q4. Charged particle in a uniform magnetic field (30 pts)</h2>
      <p>
        Charge <MathInline>{"q"}</MathInline>, spin 0, confined to the{" "}
        <MathInline>{"xy"}</MathInline>-plane. With symmetric gauge{" "}
        <MathInline>{"\\mathbf{A} = (-By/2,\\, Bx/2,\\, 0)"}</MathInline>,
      </p>
      <MathBlock>
        {"\\hat{H} \\;=\\; \\tfrac{1}{2m}\\,(\\hat{\\mathbf{p}} - q\\,\\mathbf{A})^2 \\;=\\; \\tfrac{1}{2m}\\,\\hat{\\boldsymbol{\\Pi}}^2."}
      </MathBlock>

      <h3>(a) <MathInline>{"[\\hat{\\Pi}_x, \\hat{\\Pi}_y]"}</MathInline></h3>
      <p>
        Explicitly{" "}
        <MathInline>{"\\hat{\\Pi}_x = \\hat{p}_x + q B \\hat{y}/2"}</MathInline>,{" "}
        <MathInline>{"\\hat{\\Pi}_y = \\hat{p}_y - q B \\hat{x}/2"}</MathInline>. So
      </p>
      <MathBlock>
        {"[\\hat{\\Pi}_x, \\hat{\\Pi}_y] \\;=\\; [\\hat{p}_x, -\\tfrac{qB}{2}\\hat{x}] + [\\tfrac{qB}{2}\\hat{y}, \\hat{p}_y] \\;=\\; -\\tfrac{qB}{2}\\,(-i\\hbar) + \\tfrac{qB}{2}\\,(i\\hbar) \\;=\\; i\\,q\\,B\\,\\hbar."}
      </MathBlock>
      <p>That is the required result. ✓</p>

      <h3>(b) Ladder operators and Landau levels</h3>
      <p>
        With <MathInline>{"\\omega = qB/m"}</MathInline> and{" "}
        <MathInline>{"a = (\\hat{\\Pi}_x + i\\,\\hat{\\Pi}_y)/\\sqrt{2 m \\hbar\\omega}"}</MathInline>,
        check the commutator:
      </p>
      <MathBlock>
        {"[a, a^\\dagger] \\;=\\; \\tfrac{1}{2 m \\hbar\\omega}\\,\\big([\\hat{\\Pi}_x, \\hat{\\Pi}_x] - i [\\hat{\\Pi}_x, \\hat{\\Pi}_y] + i [\\hat{\\Pi}_y, \\hat{\\Pi}_x] + [\\hat{\\Pi}_y, \\hat{\\Pi}_y]\\big) \\;=\\; \\tfrac{2 q B \\hbar}{2 m \\hbar\\omega} \\;=\\; 1.\\;\\checkmark"}
      </MathBlock>
      <p>
        Express{" "}
        <MathInline>{"\\hat{\\Pi}_x^2 + \\hat{\\Pi}_y^2"}</MathInline> in
        terms of <MathInline>{"a, a^\\dagger"}</MathInline>. Using{" "}
        <MathInline>{"\\hat{\\Pi}_x = \\sqrt{m\\hbar\\omega/2}\\,(a + a^\\dagger)"}</MathInline>,{" "}
        <MathInline>{"\\hat{\\Pi}_y = -i\\sqrt{m\\hbar\\omega/2}\\,(a - a^\\dagger)"}</MathInline>{" "}
        and{" "}
        <MathInline>{"[a, a^\\dagger] = 1"}</MathInline>,
      </p>
      <MathBlock>
        {"\\hat{\\Pi}_x^2 + \\hat{\\Pi}_y^2 \\;=\\; m\\,\\hbar\\,\\omega\\,(2\\,a^\\dagger a + 1)."}
      </MathBlock>
      <p>So</p>
      <MathBlock>
        {"\\boxed{\\;\\hat{H} \\;=\\; \\hbar\\omega\\,\\Big(a^\\dagger a + \\tfrac{1}{2}\\Big),\\qquad E_n \\;=\\; \\Big(n + \\tfrac{1}{2}\\Big)\\,\\hbar\\omega,\\quad n = 0, 1, 2, \\dots\\;}"}
      </MathBlock>
      <p>These are the <em>Landau levels</em>.</p>

      <h3>(c) <MathInline>{"\\hat{L}_z"}</MathInline> commutes with <MathInline>{"\\hat{H}"}</MathInline></h3>
      <p>
        The symmetric gauge is rotationally invariant about the{" "}
        <MathInline>{"z"}</MathInline>-axis, so it is no surprise that{" "}
        <MathInline>{"[\\hat{H}, \\hat{L}_z] = 0"}</MathInline>. A clean way
        to show it: introduce a second pair of ladder operators
      </p>
      <MathBlock>
        {"b \\;=\\; \\frac{1}{\\sqrt{2 m \\hbar\\omega}}\\,(\\hat{\\Pi}_x - i\\,\\hat{\\Pi}_y),\\qquad b^\\dagger \\;=\\; (b)^\\dagger,"}
      </MathBlock>
      <p>
        which satisfy <MathInline>{"[b, b^\\dagger] = 1"}</MathInline> and{" "}
        <MathInline>{"[a, b] = [a, b^\\dagger] = 0"}</MathInline>. One can
        then show (Griffiths supplementary problem; see also Landau & Lifshitz Vol. III)
      </p>
      <MathBlock>
        {"\\hat{L}_z \\;=\\; \\hbar\\,(b^\\dagger b - a^\\dagger a),"}
      </MathBlock>
      <p>
        which obviously commutes with{" "}
        <MathInline>{"\\hat{H} = \\hbar\\omega(a^\\dagger a + 1/2)"}</MathInline>.
        The eigenvalues of <MathInline>{"\\hat{L}_z"}</MathInline> are{" "}
        <MathInline>{"m\\hbar"}</MathInline> with{" "}
        <MathInline>{"m \\in \\mathbb{Z}"}</MathInline>; on a Landau level{" "}
        <MathInline>{"n"}</MathInline>, the allowed{" "}
        <MathInline>{"m"}</MathInline> are{" "}
        <MathInline>{"-n, -n + 1, -n + 2, \\dots"}</MathInline>, all the way
        to <MathInline>{"+\\infty"}</MathInline>. So each Landau level is{" "}
        <em>infinitely degenerate</em> (in an unbounded plane) — the cyclotron
        ladder fixes the energy but the orbital quantum number is free.
      </p>

      <h2>Closing notes</h2>
      <p>
        Big picture for the final: any time you see something built out of
        commutators that look like raising/lowering pairs{" "}
        <MathInline>{"[A, B] = c"}</MathInline>, rescale to{" "}
        <MathInline>{"[a, a^\\dagger] = 1"}</MathInline> and you essentially
        have an oscillator. Q3 and Q4 are both this same trick applied in
        different settings. Q1 and Q2 are about getting comfortable with the
        angular-momentum algebra and Clebsch–Gordan tables. Reread Week 7 if
        any of these felt mysterious.
      </p>
      <p>Good luck on the exam — and that&apos;s a wrap on Quantum Mechanics I.</p>
    </>
  )
}
