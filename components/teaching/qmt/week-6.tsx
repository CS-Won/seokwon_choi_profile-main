import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { HydrogenLevels } from "@/components/teaching/qmt/diagrams"

export default function Week6() {
  return (
    <>
      <h2>Three-dimensional Schrödinger equation</h2>
      <p>
        In 3D the kinetic operator is{" "}
        <MathInline>{"\\hat{\\mathbf{p}}^2 = -\\,\\hbar^2\\,\\nabla^2"}</MathInline>{" "}
        and the wave function is{" "}
        <MathInline>{"\\Psi(\\mathbf{r}, t)"}</MathInline>. The TISE reads
      </p>
      <MathBlock>
        {"-\\,\\frac{\\hbar^2}{2 m}\\,\\nabla^2 \\psi \\;+\\; V(\\mathbf{r})\\,\\psi \\;=\\; E\\,\\psi."}
      </MathBlock>
      <p>
        For a <em>central</em> potential{" "}
        <MathInline>{"V(\\mathbf{r}) = V(r)"}</MathInline> (depending only on
        the distance from the origin), spherical coordinates{" "}
        <MathInline>{"(r, \\theta, \\phi)"}</MathInline> are the natural
        choice.
      </p>

      <h2>Step 1 — The Laplacian in spherical coordinates</h2>
      <p>
        A standard computation in vector calculus (chain rule applied to{" "}
        <MathInline>{"x = r\\sin\\theta\\cos\\phi"}</MathInline> etc.) gives
      </p>
      <MathBlock>
        {"\\nabla^2 \\;=\\; \\frac{1}{r^2}\\,\\partial_r\\!\\big(r^2\\,\\partial_r\\big) \\;+\\; \\frac{1}{r^2\\,\\sin\\theta}\\,\\partial_\\theta\\!\\big(\\sin\\theta\\,\\partial_\\theta\\big) \\;+\\; \\frac{1}{r^2\\,\\sin^2\\theta}\\,\\partial_\\phi^2."}
      </MathBlock>
      <p>
        Group the angular pieces: they assemble into{" "}
        <MathInline>{"-\\,\\hat{L}^2/(\\hbar^2\\,r^2)"}</MathInline>, where{" "}
        <MathInline>{"\\hat{L}^2"}</MathInline> is the squared angular
        momentum operator,
      </p>
      <MathBlock>
        {"\\hat{L}^2 \\;=\\; -\\,\\hbar^2\\,\\Big[\\,\\tfrac{1}{\\sin\\theta}\\,\\partial_\\theta(\\sin\\theta\\,\\partial_\\theta) + \\tfrac{1}{\\sin^2\\theta}\\,\\partial_\\phi^2\\,\\Big]."}
      </MathBlock>
      <p>So the Laplacian splits cleanly into radial and angular parts:</p>
      <MathBlock>
        {"\\nabla^2 \\;=\\; \\frac{1}{r^2}\\,\\partial_r\\!\\big(r^2\\,\\partial_r\\big) \\;-\\; \\frac{\\hat{L}^2}{\\hbar^2\\,r^2}."}
      </MathBlock>
      <p>That is the key algebraic identity for everything that follows.</p>

      <h2>Step 2 — Separation of variables</h2>
      <p>
        Try the product ansatz{" "}
        <MathInline>{"\\psi(r, \\theta, \\phi) = R(r)\\, Y(\\theta, \\phi)"}</MathInline>.
        Substitute into the TISE and multiply both sides by{" "}
        <MathInline>{"r^2/(R\\,Y)"}</MathInline>:
      </p>
      <MathBlock>
        {"\\underbrace{\\;\\Big[\\,\\tfrac{1}{R}\\,\\partial_r(r^2 \\partial_r R) - \\tfrac{2 m r^2}{\\hbar^2}\\big(V(r) - E\\big)\\,\\Big]\\;}_{\\text{depends on } r \\text{ only}} \\;=\\; \\underbrace{\\;\\tfrac{1}{\\hbar^2\\,Y}\\,\\hat{L}^2\\,Y\\;}_{\\text{depends on } \\theta, \\phi \\text{ only}}."}
      </MathBlock>
      <p>
        Both sides equal a constant; following the convention call it{" "}
        <MathInline>{"\\ell(\\ell+1)"}</MathInline> (the convenience of this
        weird choice becomes clear once we solve the angular equation). The
        angular equation is the eigenvalue problem
      </p>
      <MathBlock>
        {"\\hat{L}^2\\,Y(\\theta, \\phi) \\;=\\; \\hbar^2\\,\\ell(\\ell+1)\\,Y(\\theta, \\phi),"}
      </MathBlock>
      <p>
        whose solutions are the <em>spherical harmonics</em>{" "}
        <MathInline>{"Y_{\\ell m}(\\theta, \\phi)"}</MathInline> with{" "}
        <MathInline>{"\\ell = 0, 1, 2, \\dots"}</MathInline> and{" "}
        <MathInline>{"m = -\\ell, -\\ell+1, \\dots, +\\ell"}</MathInline>.
        (Week 7 derives why this label is half-integer-restricted.)
      </p>
      <p>The radial equation becomes</p>
      <MathBlock>
        {"-\\,\\frac{\\hbar^2}{2 m}\\,\\frac{1}{r^2}\\,\\frac{d}{dr}\\!\\Big(r^2\\,\\frac{dR}{dr}\\Big) \\;+\\; \\Big[\\,V(r) + \\frac{\\hbar^2\\,\\ell(\\ell+1)}{2 m\\, r^2}\\,\\Big]\\,R \\;=\\; E\\,R."}
      </MathBlock>
      <p>
        The new term{" "}
        <MathInline>{"\\hbar^2\\,\\ell(\\ell+1)/(2 m\\, r^2)"}</MathInline>{" "}
        is the centrifugal barrier — exactly the analogue of classical
        orbital angular momentum.
      </p>

      <h3>The <MathInline>{"u(r) = r R(r)"}</MathInline> substitution</h3>
      <p>
        Define <MathInline>{"u(r) \\equiv r\\,R(r)"}</MathInline>. By the
        product rule{" "}
        <MathInline>{"r^2 R' = r u' - u"}</MathInline> and{" "}
        <MathInline>{"(r^2 R')' = r u''"}</MathInline>, so{" "}
        <MathInline>{"(1/r^2)(r^2 R')' = u''/r"}</MathInline>. Substituting
        into the radial equation and multiplying by{" "}
        <MathInline>{"r"}</MathInline>,
      </p>
      <MathBlock>
        {"-\\,\\frac{\\hbar^2}{2 m}\\,u''(r) \\;+\\; V_{\\rm eff}(r)\\,u(r) \\;=\\; E\\,u(r),\\quad V_{\\rm eff}(r) \\;\\equiv\\; V(r) + \\frac{\\hbar^2\\,\\ell(\\ell+1)}{2 m\\,r^2},"}
      </MathBlock>
      <p>
        with the boundary condition{" "}
        <MathInline>{"u(0) = 0"}</MathInline> (so that{" "}
        <MathInline>{"R(r) = u(r)/r"}</MathInline> is regular at the
        origin). This is a 1D Schrödinger equation on the half-line{" "}
        <MathInline>{"r \\ge 0"}</MathInline> — all our Week 2–3 intuition
        applies.
      </p>

      <h2>Step 3 — Hydrogen</h2>
      <p>
        Take{" "}
        <MathInline>{"V(r) = -\\,e^2/(4\\pi\\epsilon_0\\,r)"}</MathInline>{" "}
        (Coulomb attraction; for clarity drop the constants and call it{" "}
        <MathInline>{"-\\,Z\\,e^2/r"}</MathInline> with{" "}
        <MathInline>{"Z = 1"}</MathInline>). Bound states have{" "}
        <MathInline>{"E < 0"}</MathInline>. Define
      </p>
      <MathBlock>
        {"\\kappa \\;=\\; \\frac{\\sqrt{-\\,2 m\\,E}}{\\hbar},\\qquad \\rho \\;=\\; \\kappa\\,r,\\qquad \\rho_0 \\;=\\; \\frac{m\\,e^2}{2\\pi\\epsilon_0\\,\\hbar^2\\,\\kappa}."}
      </MathBlock>
      <p>The radial equation in <MathInline>{"u(\\rho)"}</MathInline> becomes</p>
      <MathBlock>
        {"u''(\\rho) \\;=\\; \\Big[\\,1 - \\frac{\\rho_0}{\\rho} + \\frac{\\ell(\\ell+1)}{\\rho^2}\\,\\Big]\\,u(\\rho)."}
      </MathBlock>

      <h3>Asymptotics</h3>
      <ul>
        <li>
          <strong>Large <MathInline>{"\\rho"}</MathInline>:</strong> the
          equation reduces to{" "}
          <MathInline>{"u'' \\approx u"}</MathInline>, so{" "}
          <MathInline>{"u \\sim e^{\\pm\\rho}"}</MathInline>. Pick{" "}
          <MathInline>{"e^{-\\rho}"}</MathInline> for normalizability.
        </li>
        <li>
          <strong>Small <MathInline>{"\\rho"}</MathInline>:</strong> the
          centrifugal term dominates,{" "}
          <MathInline>{"u'' \\approx \\ell(\\ell+1)\\,u/\\rho^2"}</MathInline>,
          with solutions{" "}
          <MathInline>{"u \\sim \\rho^{\\ell+1}"}</MathInline> or{" "}
          <MathInline>{"\\rho^{-\\ell}"}</MathInline>. Regularity at the
          origin selects{" "}
          <MathInline>{"\\rho^{\\ell+1}"}</MathInline>.
        </li>
      </ul>

      <h3>Series solution</h3>
      <p>Factor out the asymptotic behaviour:</p>
      <MathBlock>
        {"u(\\rho) \\;=\\; \\rho^{\\ell+1}\\,e^{-\\rho}\\,v(\\rho)."}
      </MathBlock>
      <p>Substitute into the radial equation. After some algebra,</p>
      <MathBlock>
        {"\\rho\\,v''(\\rho) + 2\\,(\\ell + 1 - \\rho)\\,v'(\\rho) + [\\rho_0 - 2(\\ell+1)]\\,v(\\rho) \\;=\\; 0."}
      </MathBlock>
      <p>
        Expand <MathInline>{"v(\\rho) = \\sum_{j=0}^\\infty c_j\\,\\rho^j"}</MathInline>.
        Plugging in and equating powers of{" "}
        <MathInline>{"\\rho^j"}</MathInline> yields the recursion
      </p>
      <MathBlock>
        {"c_{j+1} \\;=\\; \\frac{2\\,(j + \\ell + 1) - \\rho_0}{(j+1)(j + 2\\ell + 2)}\\,c_j."}
      </MathBlock>
      <p>
        For large <MathInline>{"j"}</MathInline> the recursion ratio is{" "}
        <MathInline>{"\\approx 2/j"}</MathInline>, which corresponds to{" "}
        <MathInline>{"v \\sim e^{2\\rho}"}</MathInline> — and would ruin the
        normalizability of <MathInline>{"u"}</MathInline>. Therefore the
        series must terminate: there must exist some{" "}
        <MathInline>{"j_{\\max}"}</MathInline> with{" "}
        <MathInline>{"c_{j_{\\max}+1} = 0"}</MathInline>. From the recursion
        that means
      </p>
      <MathBlock>
        {"2\\,(j_{\\max} + \\ell + 1) \\;=\\; \\rho_0 \\;\\Longrightarrow\\; \\rho_0 \\;=\\; 2 n,\\quad n \\;\\equiv\\; j_{\\max} + \\ell + 1 \\in \\{1, 2, 3, \\dots\\}."}
      </MathBlock>

      <h3>The Bohr formula</h3>
      <p>
        Reverse-engineering{" "}
        <MathInline>{"\\rho_0"}</MathInline> back to{" "}
        <MathInline>{"E"}</MathInline>: from the definitions,{" "}
        <MathInline>{"\\rho_0 = m e^2/(2\\pi\\epsilon_0\\,\\hbar^2\\,\\kappa) = 2 n"}</MathInline>{" "}
        gives{" "}
        <MathInline>{"\\kappa = m\\,e^2/(4\\pi\\epsilon_0\\,\\hbar^2\\,n)"}</MathInline>;
        then{" "}
        <MathInline>{"E = -\\,\\hbar^2 \\kappa^2/(2 m)"}</MathInline> yields
      </p>
      <MathBlock>
        {"\\boxed{\\;E_n \\;=\\; -\\,\\frac{m\\,e^4}{2\\,(4\\pi\\epsilon_0)^2\\,\\hbar^2}\\,\\frac{1}{n^2} \\;\\approx\\; -\\,\\frac{13.6\\,\\text{eV}}{n^2},\\quad n = 1, 2, 3, \\dots\\;}"}
      </MathBlock>

      <HydrogenLevels />

      <h2>Quantum numbers and degeneracy</h2>
      <p>
        Note that <MathInline>{"n = j_{\\max} + \\ell + 1"}</MathInline>{" "}
        forces <MathInline>{"\\ell \\le n - 1"}</MathInline>: the allowed
        angular-momentum quantum numbers at fixed{" "}
        <MathInline>{"n"}</MathInline> are{" "}
        <MathInline>{"\\ell = 0, 1, \\dots, n-1"}</MathInline>. The magnetic
        quantum number takes{" "}
        <MathInline>{"2\\ell + 1"}</MathInline> values, so the total
        degeneracy of level <MathInline>{"n"}</MathInline> (ignoring spin) is
      </p>
      <MathBlock>
        {"d_n \\;=\\; \\sum_{\\ell = 0}^{n - 1}\\,(2\\ell + 1) \\;=\\; n^2."}
      </MathBlock>
      <p>
        With spin <MathInline>{"\\tfrac{1}{2}"}</MathInline> this becomes{" "}
        <MathInline>{"2 n^2"}</MathInline> — the familiar shell sizes of the
        periodic table.
      </p>

      <h2>Radial probability density</h2>
      <p>
        The volume element in spherical coordinates is{" "}
        <MathInline>{"r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi"}</MathInline>.
        Marginalizing over angles, the probability of finding the electron
        in the spherical shell{" "}
        <MathInline>{"[r, r + dr]"}</MathInline> is
      </p>
      <MathBlock>
        {"P(r)\\,dr \\;=\\; |R_{n\\ell}(r)|^2\\,r^2\\,dr \\;=\\; |u_{n\\ell}(r)|^2\\,dr."}
      </MathBlock>
      <p>
        Even though{" "}
        <MathInline>{"|R(r)|^2"}</MathInline> peaks at the origin for{" "}
        <MathInline>{"n = 1"}</MathInline>, the{" "}
        <MathInline>{"r^2"}</MathInline> factor pushes the peak of{" "}
        <MathInline>{"P(r)"}</MathInline> outward. A short calculation
        shows the most probable radius for the ground state is exactly the
        Bohr radius{" "}
        <MathInline>{"a_0 = 4\\pi\\epsilon_0\\,\\hbar^2/(m\\,e^2)"}</MathInline>.
      </p>
    </>
  )
}
