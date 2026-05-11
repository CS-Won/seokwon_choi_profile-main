import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week4() {
  return (
    <>
      <h2>Midterm: full worked solutions</h2>
      <p>
        These are the four problems from{" "}
        <strong>PHY3101 — Quantum Mechanics I, Spring 2024 Midterm</strong>.
        We work each one through carefully, paying attention to the boundary
        conditions and the matching trick at potential jumps. Make sure you
        can reproduce the algebra unaided before exam day.
      </p>

      <h2>Q1. Wells of various shapes (30 pts)</h2>

      <h3>Q1 (i) Infinite square well, <MathInline>{"|x| < a"}</MathInline></h3>
      <p>
        Inside the well <MathInline>{"V = 0"}</MathInline>; outside{" "}
        <MathInline>{"V = \\infty"}</MathInline>, so{" "}
        <MathInline>{"\\psi(\\pm a) = 0"}</MathInline>. The TISE is
      </p>
      <MathBlock>
        {"-\\,\\tfrac{\\hbar^2}{2m}\\,\\psi'' = E\\,\\psi,\\qquad \\psi'' = -k^2\\,\\psi,\\quad k = \\sqrt{2mE}/\\hbar."}
      </MathBlock>
      <p>
        Use the symmetry of the well (even potential ⇒ states come in even
        and odd parity).
      </p>
      <ul>
        <li>
          <strong>Even:</strong>{" "}
          <MathInline>{"\\psi(x) = A\\cos(kx)"}</MathInline>, boundary{" "}
          <MathInline>{"\\cos(ka) = 0"}</MathInline> ⇒{" "}
          <MathInline>{"k_n a = (2n-1)\\pi/2"}</MathInline>,{" "}
          <MathInline>{"n=1,2,\\dots"}</MathInline>.
        </li>
        <li>
          <strong>Odd:</strong>{" "}
          <MathInline>{"\\psi(x) = A\\sin(kx)"}</MathInline>, boundary{" "}
          <MathInline>{"\\sin(ka) = 0"}</MathInline> ⇒{" "}
          <MathInline>{"k_n a = n\\pi"}</MathInline>.
        </li>
      </ul>
      <p>Combining and re-indexing,</p>
      <MathBlock>
        {"\\boxed{\\;\\psi_n(x) \\;=\\; \\tfrac{1}{\\sqrt{a}}\\,\\sin\\!\\Big(\\tfrac{n\\pi (x+a)}{2a}\\Big),\\quad E_n \\;=\\; \\frac{n^2\\,\\pi^2\\,\\hbar^2}{8\\,m\\,a^2},\\quad n=1,2,3,\\dots\\;}"}
      </MathBlock>

      <h3>Q1 (ii) Finite square well, <MathInline>{"|x| < a"}</MathInline></h3>
      <p>
        Now <MathInline>{"V = -V_0"}</MathInline> inside and{" "}
        <MathInline>{"V = 0"}</MathInline> outside. Look for bound states{" "}
        <MathInline>{"-V_0 < E < 0"}</MathInline>. Define
      </p>
      <MathBlock>
        {"k = \\sqrt{2m(E+V_0)}/\\hbar \\;\\;(\\text{inside}),\\qquad \\kappa = \\sqrt{-2mE}/\\hbar \\;\\;(\\text{outside})."}
      </MathBlock>
      <p>By parity the bound states split into:</p>
      <ul>
        <li>
          <strong>Even:</strong>{" "}
          <MathInline>{"\\psi_{\\rm in} = A\\cos(kx)"}</MathInline>,{" "}
          <MathInline>{"\\psi_{\\rm out} = B\\,e^{-\\kappa|x|}"}</MathInline>.
          Continuity of <MathInline>{"\\psi"}</MathInline> and{" "}
          <MathInline>{"\\psi'"}</MathInline> at{" "}
          <MathInline>{"x = a"}</MathInline> gives{" "}
          <MathInline>{"k\\tan(ka) = \\kappa"}</MathInline>.
        </li>
        <li>
          <strong>Odd:</strong>{" "}
          <MathInline>{"\\psi_{\\rm in} = A\\sin(kx)"}</MathInline>,{" "}
          <MathInline>{"-k\\cot(ka) = \\kappa"}</MathInline>.
        </li>
      </ul>
      <p>
        Eliminating <MathInline>{"E"}</MathInline> via{" "}
        <MathInline>{"k^2 + \\kappa^2 = 2 m V_0/\\hbar^2 \\equiv z_0^2/a^2"}</MathInline>{" "}
        and writing <MathInline>{"z = ka"}</MathInline> reduces the quantization
        condition to a single transcendental equation in{" "}
        <MathInline>{"z"}</MathInline>:
      </p>
      <MathBlock>
        {"z\\tan z = \\sqrt{z_0^2 - z^2}\\quad(\\text{even}), \\qquad -z\\cot z = \\sqrt{z_0^2 - z^2}\\quad(\\text{odd})."}
      </MathBlock>
      <p>
        Each solution determines{" "}
        <MathInline>{"E = -V_0 + \\hbar^2 k^2/(2m)"}</MathInline>. A finite
        well has only a finite number of bound states, but always at least
        one even state (no matter how shallow).
      </p>

      <h3>
        Q1 (iii) Asymmetric well:{" "}
        <MathInline>{"V = \\infty\\;(x<0),\\; V_0\\;(0<x<a),\\; 0\\;(x>a)"}</MathInline>
      </h3>
      <p>
        An infinite wall at <MathInline>{"x = 0"}</MathInline> kills{" "}
        <MathInline>{"\\psi(0)"}</MathInline>, then there is a barrier of
        height <MathInline>{"V_0"}</MathInline> from{" "}
        <MathInline>{"0"}</MathInline> to <MathInline>{"a"}</MathInline>,
        then free space. Bound states need{" "}
        <MathInline>{"E < V_0"}</MathInline> so that{" "}
        <MathInline>{"\\psi"}</MathInline> decays beyond{" "}
        <MathInline>{"x = a"}</MathInline>.
      </p>
      <p>Define</p>
      <MathBlock>
        {"\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar\\;\\;(0<x<a),\\qquad k = \\sqrt{2mE}/\\hbar\\;\\;(x>a)."}
      </MathBlock>
      <p>
        Wait — for a true bound state we need decay outside, so we actually
        need <MathInline>{"E < 0"}</MathInline> for{" "}
        <MathInline>{"x > a"}</MathInline> to give an exponential. Set{" "}
        <MathInline>{"q = \\sqrt{-2mE}/\\hbar"}</MathInline>. Then:
      </p>
      <MathBlock>
        {"\\psi(x) \\;=\\; \\begin{cases} 0, & x < 0,\\\\ A\\sinh(\\kappa x) + B\\cosh(\\kappa x), & 0 < x < a,\\\\ C\\,e^{-q x}, & x > a. \\end{cases}"}
      </MathBlock>
      <p>
        The wall at <MathInline>{"x = 0"}</MathInline> forces{" "}
        <MathInline>{"B = 0"}</MathInline>. Matching{" "}
        <MathInline>{"\\psi"}</MathInline> and{" "}
        <MathInline>{"\\psi'"}</MathInline> at{" "}
        <MathInline>{"x = a"}</MathInline> yields
      </p>
      <MathBlock>
        {"A\\sinh(\\kappa a) = C\\,e^{-qa},\\qquad A\\,\\kappa\\cosh(\\kappa a) = -q\\,C\\,e^{-qa}."}
      </MathBlock>
      <p>Dividing,</p>
      <MathBlock>
        {"\\kappa\\coth(\\kappa a) \\;=\\; -q."}
      </MathBlock>
      <p>
        Combined with <MathInline>{"\\kappa^2 + q^2 = 2 m V_0/\\hbar^2"}</MathInline>,
        this is the transcendental quantization condition. (The minus sign
        means no bound state exists unless the well-and-wall combination is
        deep enough — a standard threshold phenomenon.)
      </p>

      <h2>Q2. Step potential (20 pts)</h2>
      <p>
        <MathInline>{"V(x) = 0"}</MathInline> for{" "}
        <MathInline>{"x \\le 0"}</MathInline> and{" "}
        <MathInline>{"V(x) = V_0"}</MathInline> for{" "}
        <MathInline>{"x > 0"}</MathInline>. Incoming wave from the left.
      </p>

      <h3>(a) <MathInline>{"E < V_0"}</MathInline></h3>
      <p>
        Region I (<MathInline>{"x \\le 0"}</MathInline>):{" "}
        <MathInline>{"\\psi_I = A e^{ikx} + B e^{-ikx},\\; k = \\sqrt{2mE}/\\hbar"}</MathInline>.
        Region II (<MathInline>{"x > 0"}</MathInline>):{" "}
        <MathInline>{"\\psi_{II} = C e^{-\\kappa x},\\; \\kappa = \\sqrt{2m(V_0-E)}/\\hbar"}</MathInline>.
        Matching <MathInline>{"\\psi"}</MathInline> and{" "}
        <MathInline>{"\\psi'"}</MathInline> at{" "}
        <MathInline>{"x=0"}</MathInline>:
      </p>
      <MathBlock>
        {"A + B = C,\\qquad i k\\,(A - B) = -\\kappa\\, C."}
      </MathBlock>
      <p>Solve for <MathInline>{"B"}</MathInline>:</p>
      <MathBlock>
        {"\\frac{B}{A} \\;=\\; \\frac{i k + \\kappa}{i k - \\kappa}\\;\\Longrightarrow\\; R \\;=\\; \\Big|\\tfrac{B}{A}\\Big|^2 \\;=\\; \\frac{k^2 + \\kappa^2}{k^2 + \\kappa^2} \\;=\\; 1."}
      </MathBlock>
      <p>
        Total reflection: the wave penetrates a bit into the wall (over a
        length <MathInline>{"\\sim 1/\\kappa"}</MathInline>) but is fully
        sent back. Classically you would just bounce off; quantum mechanics
        agrees on the probability flux but disagrees on what happens at the
        boundary.
      </p>

      <h3>(b) <MathInline>{"E > V_0"}</MathInline>: reflection coefficient</h3>
      <p>
        Now Region II also propagates:{" "}
        <MathInline>{"\\psi_{II} = F e^{i k' x},\\; k' = \\sqrt{2m(E-V_0)}/\\hbar"}</MathInline>.
        Matching:
      </p>
      <MathBlock>
        {"A + B = F,\\qquad k(A - B) = k'\\, F."}
      </MathBlock>
      <p>Solve:</p>
      <MathBlock>
        {"\\frac{B}{A} \\;=\\; \\frac{k - k'}{k + k'},\\qquad \\frac{F}{A} \\;=\\; \\frac{2k}{k + k'}."}
      </MathBlock>
      <p>So</p>
      <MathBlock>
        {"R \\;=\\; \\Big(\\tfrac{k - k'}{k + k'}\\Big)^2."}
      </MathBlock>

      <h3>(c) Transmission coefficient via probability current</h3>
      <p>
        The probability current{" "}
        <MathInline>{"j = (\\hbar/m)\\,\\text{Im}(\\psi^*\\psi')"}</MathInline>{" "}
        for a plane wave{" "}
        <MathInline>{"\\psi = A e^{i k x}"}</MathInline> is{" "}
        <MathInline>{"j_{\\rm inc} = \\hbar k\\,|A|^2/m"}</MathInline> on the
        left and <MathInline>{"j_{\\rm tr} = \\hbar k'\\,|F|^2/m"}</MathInline>{" "}
        on the right. The transmission coefficient is the ratio of currents,
      </p>
      <MathBlock>
        {"T \\;=\\; \\frac{j_{\\rm tr}}{j_{\\rm inc}} \\;=\\; \\frac{k'}{k}\\,\\Big|\\tfrac{F}{A}\\Big|^2 \\;=\\; \\sqrt{\\frac{E - V_0}{E}}\\,\\Big|\\tfrac{F}{A}\\Big|^2,"}
      </MathBlock>
      <p>
        which is exactly the formula stated in the problem (the prefactor{" "}
        <MathInline>{"k'/k"}</MathInline> accounts for the different speeds
        on the two sides — naive{" "}
        <MathInline>{"|F/A|^2"}</MathInline> would be wrong).
      </p>

      <h3>(d) Explicit <MathInline>{"T"}</MathInline> and the sum rule</h3>
      <p>Plug in <MathInline>{"F/A = 2k/(k+k')"}</MathInline>:</p>
      <MathBlock>
        {"T \\;=\\; \\frac{k'}{k}\\cdot\\frac{4 k^2}{(k+k')^2} \\;=\\; \\frac{4\\,k\\,k'}{(k+k')^2}."}
      </MathBlock>
      <p>Add <MathInline>{"R"}</MathInline>:</p>
      <MathBlock>
        {"R + T \\;=\\; \\frac{(k-k')^2 + 4\\,k\\,k'}{(k+k')^2} \\;=\\; \\frac{(k+k')^2}{(k+k')^2} \\;=\\; 1.\\;\\checkmark"}
      </MathBlock>

      <h2>Q3. Harmonic oscillator (30 pts)</h2>
      <p>
        Define <MathInline>{"a, a^\\dagger"}</MathInline> as in Week 3 so
        that <MathInline>{"[a,a^\\dagger] = 1"}</MathInline> and{" "}
        <MathInline>{"\\hat{H} = \\hbar\\omega(a^\\dagger a + 1/2)"}</MathInline>.
      </p>

      <h3>(i) Wave functions <MathInline>{"\\psi_0, \\psi_1, \\psi_2"}</MathInline></h3>
      <p>
        The ground state satisfies{" "}
        <MathInline>{"a\\,\\psi_0 = 0"}</MathInline>, i.e.{" "}
        <MathInline>{"(x + (\\hbar/m\\omega)\\,\\partial_x)\\,\\psi_0 = 0"}</MathInline>.
        Solving,
      </p>
      <MathBlock>
        {"\\psi_0(x) = \\Big(\\tfrac{m\\omega}{\\pi\\hbar}\\Big)^{1/4} e^{-m\\omega x^2/(2\\hbar)}."}
      </MathBlock>
      <p>
        Using{" "}
        <MathInline>{"\\psi_n = (a^\\dagger)^n\\,\\psi_0/\\sqrt{n!}"}</MathInline>{" "}
        and the convenient variable{" "}
        <MathInline>{"\\xi = \\sqrt{m\\omega/\\hbar}\\,x"}</MathInline>,
      </p>
      <MathBlock>
        {"\\psi_1(x) = \\Big(\\tfrac{m\\omega}{\\pi\\hbar}\\Big)^{1/4}\\sqrt{2}\\,\\xi\\, e^{-\\xi^2/2},"}
      </MathBlock>
      <MathBlock>
        {"\\psi_2(x) = \\Big(\\tfrac{m\\omega}{\\pi\\hbar}\\Big)^{1/4}\\,\\tfrac{1}{\\sqrt{2}}\\,(2\\xi^2 - 1)\\, e^{-\\xi^2/2}."}
      </MathBlock>
      <p>
        These are the Hermite-polynomial wave functions{" "}
        <MathInline>{"\\psi_n \\propto H_n(\\xi)\\, e^{-\\xi^2/2}"}</MathInline>.
      </p>

      <h3>(ii) Energy spectrum</h3>
      <p>
        Apply <MathInline>{"\\hat{H}"}</MathInline> to{" "}
        <MathInline>{"\\psi_n"}</MathInline>: since{" "}
        <MathInline>{"a^\\dagger a\\,\\psi_n = n\\,\\psi_n"}</MathInline>,
      </p>
      <MathBlock>
        {"\\boxed{\\;E_n \\;=\\; \\Big(n + \\tfrac{1}{2}\\Big)\\,\\hbar\\omega,\\qquad n = 0, 1, 2, \\dots\\;}"}
      </MathBlock>

      <h3>
        (iii) Expectation value{" "}
        <MathInline>{"\\langle E\\rangle"}</MathInline> for{" "}
        <MathInline>{"|\\Psi\\rangle = \\tfrac{1}{\\sqrt{3}}(|0\\rangle + |1\\rangle + |2\\rangle)"}</MathInline>
      </h3>
      <p>
        Since <MathInline>{"|0\\rangle, |1\\rangle, |2\\rangle"}</MathInline>{" "}
        are orthonormal energy eigenstates,
      </p>
      <MathBlock>
        {"\\langle E\\rangle \\;=\\; \\sum_{n=0}^{2}\\,|c_n|^2\\,E_n \\;=\\; \\tfrac{1}{3}\\Big(E_0 + E_1 + E_2\\Big) \\;=\\; \\tfrac{1}{3}\\,\\hbar\\omega\\Big(\\tfrac{1}{2} + \\tfrac{3}{2} + \\tfrac{5}{2}\\Big) \\;=\\; \\tfrac{3}{2}\\,\\hbar\\omega."}
      </MathBlock>

      <h2>Q4. Three-level matrix Hamiltonian (20 pts)</h2>
      <p>
        With <MathInline>{"a, b, c"}</MathInline> real,
      </p>
      <MathBlock>
        {"H \\;=\\; \\begin{pmatrix} a & 0 & b \\\\ 0 & c & 0 \\\\ b & 0 & a \\end{pmatrix}."}
      </MathBlock>

      <h3>(c) Eigenvalues first (we will need them)</h3>
      <p>
        The middle row/column decouples: the canonical basis vector{" "}
        <MathInline>{"|m\\rangle = (0,1,0)^\\top"}</MathInline> is already an
        eigenvector with eigenvalue <MathInline>{"c"}</MathInline>. The 2×2
        block <MathInline>{"\\bigl(\\begin{smallmatrix} a & b \\\\ b & a \\end{smallmatrix}\\bigr)"}</MathInline>{" "}
        has eigenvalues <MathInline>{"a \\pm b"}</MathInline> with normalized
        eigenvectors
      </p>
      <MathBlock>
        {"|+\\rangle = \\tfrac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}\\;\\;(E = a + b),\\qquad |-\\rangle = \\tfrac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}\\;\\;(E = a - b)."}
      </MathBlock>

      <h3>(a) Initial state <MathInline>{"|S(0)\\rangle = (0,1,0)^\\top"}</MathInline></h3>
      <p>
        This is an eigenstate of <MathInline>{"H"}</MathInline> with
        eigenvalue <MathInline>{"c"}</MathInline>, so time evolution is just
        a phase:
      </p>
      <MathBlock>
        {"|S(t)\\rangle \\;=\\; e^{-i c t/\\hbar}\\,\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}."}
      </MathBlock>

      <h3>(b) Initial state <MathInline>{"|S(0)\\rangle = (1,0,0)^\\top"}</MathInline></h3>
      <p>Expand in the eigenbasis:</p>
      <MathBlock>
        {"\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} \\;=\\; \\tfrac{1}{\\sqrt{2}}\\,|+\\rangle + \\tfrac{1}{\\sqrt{2}}\\,|-\\rangle."}
      </MathBlock>
      <p>Evolve each piece by its phase:</p>
      <MathBlock>
        {"|S(t)\\rangle \\;=\\; \\tfrac{1}{\\sqrt{2}}\\Big(e^{-i(a+b)t/\\hbar}\\,|+\\rangle + e^{-i(a-b)t/\\hbar}\\,|-\\rangle\\Big)."}
      </MathBlock>
      <p>Substitute the explicit vectors and factor out <MathInline>{"e^{-iat/\\hbar}"}</MathInline>:</p>
      <MathBlock>
        {"|S(t)\\rangle \\;=\\; e^{-i a t/\\hbar}\\,\\begin{pmatrix} \\cos(b t/\\hbar) \\\\ 0 \\\\ -\\,i\\,\\sin(b t/\\hbar) \\end{pmatrix}."}
      </MathBlock>
      <p>
        Reassuring sanity check: at <MathInline>{"t = 0"}</MathInline> we
        recover <MathInline>{"(1,0,0)^\\top"}</MathInline>, and the
        probability oscillates between sites 1 and 3 with angular frequency{" "}
        <MathInline>{"2 b/\\hbar"}</MathInline> — a textbook Rabi-style
        oscillation driven by the off-diagonal coupling{" "}
        <MathInline>{"b"}</MathInline>.
      </p>

      <h2>Common pitfalls</h2>
      <ul>
        <li>
          Forgetting that the transmission coefficient at a step needs the{" "}
          <MathInline>{"k'/k"}</MathInline> prefactor (different speeds).
        </li>
        <li>
          In the finite well, normalizing inside but forgetting the matching
          condition that fixes the energy.
        </li>
        <li>
          In <MathInline>{"\\langle E\\rangle"}</MathInline> calculations for
          a superposition: it is{" "}
          <MathInline>{"\\sum |c_n|^2 E_n"}</MathInline>, not{" "}
          <MathInline>{"\\sum c_n E_n"}</MathInline>.
        </li>
        <li>
          When the Hamiltonian is a matrix, write the initial state in the
          eigenbasis <em>first</em>, then attach phases. Don&apos;t try to
          exponentiate the matrix directly under time pressure.
        </li>
      </ul>
    </>
  )
}
