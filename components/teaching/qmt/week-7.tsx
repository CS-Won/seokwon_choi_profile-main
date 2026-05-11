import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { AngularMomentumCone } from "@/components/teaching/qmt/diagrams"

export default function Week7() {
  return (
    <>
      <h2>Orbital angular momentum: setting the operators</h2>
      <p>
        Define{" "}
        <MathInline>{"\\hat{\\mathbf{L}} = \\hat{\\mathbf{r}}\\times\\hat{\\mathbf{p}}"}</MathInline>,
        i.e.{" "}
        <MathInline>{"\\hat{L}_i = \\epsilon_{ijk}\\,\\hat{x}_j\\,\\hat{p}_k"}</MathInline>{" "}
        (Einstein convention; all indices run over{" "}
        <MathInline>{"1, 2, 3"}</MathInline>). Explicitly,
      </p>
      <MathBlock>
        {"\\hat{L}_x \\;=\\; \\hat{y}\\,\\hat{p}_z - \\hat{z}\\,\\hat{p}_y,\\quad \\hat{L}_y \\;=\\; \\hat{z}\\,\\hat{p}_x - \\hat{x}\\,\\hat{p}_z,\\quad \\hat{L}_z \\;=\\; \\hat{x}\\,\\hat{p}_y - \\hat{y}\\,\\hat{p}_x."}
      </MathBlock>
      <p>
        These are Hermitian (each is a difference of products of commuting
        operators) and ready to be treated as observables.
      </p>

      <h2>Step 1 — Deriving the commutation relations</h2>
      <p>
        Start from the canonical{" "}
        <MathInline>{"[\\hat{x}_i, \\hat{p}_j] = i\\hbar\\,\\delta_{ij}"}</MathInline>{" "}
        and the fact that{" "}
        <MathInline>{"\\hat{x}_i"}</MathInline> commutes with{" "}
        <MathInline>{"\\hat{x}_j"}</MathInline> and{" "}
        <MathInline>{"\\hat{p}_i"}</MathInline> commutes with{" "}
        <MathInline>{"\\hat{p}_j"}</MathInline>. Compute{" "}
        <MathInline>{"[\\hat{L}_x, \\hat{L}_y]"}</MathInline> explicitly:
      </p>
      <MathBlock>
        {"[\\hat{L}_x, \\hat{L}_y] \\;=\\; [\\hat{y}\\hat{p}_z - \\hat{z}\\hat{p}_y,\\; \\hat{z}\\hat{p}_x - \\hat{x}\\hat{p}_z]."}
      </MathBlock>
      <p>Expand the four cross-terms. Three of them vanish; the surviving pieces use only the canonical commutator. The non-zero contribution is</p>
      <MathBlock>
        {"[\\hat{y}\\hat{p}_z, \\hat{z}\\hat{p}_x] \\;=\\; \\hat{y}\\,[\\hat{p}_z, \\hat{z}]\\,\\hat{p}_x \\;=\\; -\\,i\\hbar\\,\\hat{y}\\,\\hat{p}_x,"}
      </MathBlock>
      <p>and</p>
      <MathBlock>
        {"[-\\,\\hat{z}\\hat{p}_y, -\\,\\hat{x}\\hat{p}_z] \\;=\\; \\hat{x}\\,\\hat{p}_y\\,[\\hat{z}, \\hat{p}_z] \\;=\\; i\\hbar\\,\\hat{x}\\,\\hat{p}_y."}
      </MathBlock>
      <p>The other two pairs commute. So</p>
      <MathBlock>
        {"[\\hat{L}_x, \\hat{L}_y] \\;=\\; i\\hbar\\,(\\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x) \\;=\\; i\\,\\hbar\\,\\hat{L}_z."}
      </MathBlock>
      <p>By cyclic symmetry,</p>
      <MathBlock>
        {"\\boxed{\\;[\\hat{L}_i,\\, \\hat{L}_j] \\;=\\; i\\,\\hbar\\,\\epsilon_{ijk}\\,\\hat{L}_k.\\;}"}
      </MathBlock>
      <p>
        Combining this with itself one shows{" "}
        <MathInline>{"[\\hat{L}^2, \\hat{L}_i] = 0"}</MathInline> for any{" "}
        <MathInline>{"i"}</MathInline>:
      </p>
      <MathBlock>
        {"[\\hat{L}^2, \\hat{L}_z] \\;=\\; [\\hat{L}_x^2 + \\hat{L}_y^2, \\hat{L}_z] \\;=\\; \\hat{L}_x[\\hat{L}_x, \\hat{L}_z] + [\\hat{L}_x, \\hat{L}_z]\\hat{L}_x + (\\,x \\to y\\,) \\;=\\; -\\,i\\hbar(\\hat{L}_x \\hat{L}_y + \\hat{L}_y \\hat{L}_x) + i\\hbar(\\hat{L}_y \\hat{L}_x + \\hat{L}_x \\hat{L}_y) \\;=\\; 0."}
      </MathBlock>
      <p>
        Therefore{" "}
        <MathInline>{"\\hat{L}^2"}</MathInline> and one component (call it{" "}
        <MathInline>{"\\hat{L}_z"}</MathInline>) can be diagonalized
        simultaneously.
      </p>

      <h2>Step 2 — Ladder operators and their algebra</h2>
      <p>Define</p>
      <MathBlock>
        {"\\hat{L}_\\pm \\;\\equiv\\; \\hat{L}_x \\pm i\\,\\hat{L}_y."}
      </MathBlock>
      <p>From the basic commutators,</p>
      <MathBlock>
        {"[\\hat{L}_z, \\hat{L}_\\pm] \\;=\\; [\\hat{L}_z, \\hat{L}_x] \\pm i\\,[\\hat{L}_z, \\hat{L}_y] \\;=\\; i\\hbar\\,\\hat{L}_y \\pm i\\,(-\\,i\\hbar\\,\\hat{L}_x) \\;=\\; \\pm\\,\\hbar\\,(\\hat{L}_x \\pm i \\hat{L}_y) \\;=\\; \\pm\\,\\hbar\\,\\hat{L}_\\pm,"}
      </MathBlock>
      <p>and</p>
      <MathBlock>
        {"[\\hat{L}_+, \\hat{L}_-] \\;=\\; [\\hat{L}_x + i\\hat{L}_y, \\hat{L}_x - i\\hat{L}_y] \\;=\\; -\\,i\\,[\\hat{L}_x, \\hat{L}_y] + i\\,[\\hat{L}_y, \\hat{L}_x] \\;=\\; 2\\,\\hbar\\,\\hat{L}_z."}
      </MathBlock>
      <p>
        The first identity says{" "}
        <MathInline>{"\\hat{L}_+"}</MathInline> raises and{" "}
        <MathInline>{"\\hat{L}_-"}</MathInline> lowers{" "}
        <MathInline>{"\\hat{L}_z"}</MathInline> by{" "}
        <MathInline>{"\\hbar"}</MathInline>: if{" "}
        <MathInline>{"\\hat{L}_z|m\\rangle = m\\hbar\\,|m\\rangle"}</MathInline>,
      </p>
      <MathBlock>
        {"\\hat{L}_z\\,\\hat{L}_\\pm|m\\rangle \\;=\\; (\\hat{L}_\\pm \\hat{L}_z + [\\hat{L}_z, \\hat{L}_\\pm])\\,|m\\rangle \\;=\\; (m\\hbar \\pm \\hbar)\\,\\hat{L}_\\pm|m\\rangle."}
      </MathBlock>
      <p>So <MathInline>{"\\hat{L}_\\pm|m\\rangle \\propto |m \\pm 1\\rangle"}</MathInline>.</p>

      <h2>Step 3 — The spectrum from the algebra</h2>
      <p>
        Pick a simultaneous eigenstate{" "}
        <MathInline>{"|\\ell, m\\rangle"}</MathInline> with{" "}
        <MathInline>{"\\hat{L}^2|\\ell, m\\rangle = \\lambda\\,|\\ell, m\\rangle"}</MathInline>{" "}
        and{" "}
        <MathInline>{"\\hat{L}_z|\\ell, m\\rangle = m\\hbar\\,|\\ell, m\\rangle"}</MathInline>{" "}
        (we will solve for the form of{" "}
        <MathInline>{"\\lambda"}</MathInline>). Since{" "}
        <MathInline>{"\\hat{L}_x^2 + \\hat{L}_y^2 = \\hat{L}^2 - \\hat{L}_z^2 \\ge 0"}</MathInline>,
        we have{" "}
        <MathInline>{"\\lambda \\ge m^2\\,\\hbar^2"}</MathInline>. So{" "}
        <MathInline>{"m"}</MathInline> is bounded: there is a top state{" "}
        <MathInline>{"|\\ell, m_{\\max}\\rangle"}</MathInline> with{" "}
        <MathInline>{"\\hat{L}_+|\\ell, m_{\\max}\\rangle = 0"}</MathInline>{" "}
        and a bottom state{" "}
        <MathInline>{"|\\ell, m_{\\min}\\rangle"}</MathInline> with{" "}
        <MathInline>{"\\hat{L}_-|\\ell, m_{\\min}\\rangle = 0"}</MathInline>.
      </p>
      <p>
        Now compute{" "}
        <MathInline>{"\\hat{L}_-\\hat{L}_+"}</MathInline> in terms of the
        Casimir:
      </p>
      <MathBlock>
        {"\\hat{L}_-\\hat{L}_+ \\;=\\; (\\hat{L}_x - i\\hat{L}_y)(\\hat{L}_x + i\\hat{L}_y) \\;=\\; \\hat{L}_x^2 + \\hat{L}_y^2 + i\\,[\\hat{L}_x, \\hat{L}_y] \\;=\\; \\hat{L}^2 - \\hat{L}_z^2 - \\hbar\\,\\hat{L}_z."}
      </MathBlock>
      <p>
        Apply to <MathInline>{"|\\ell, m_{\\max}\\rangle"}</MathInline> (LHS
        gives 0 because <MathInline>{"\\hat{L}_+"}</MathInline> kills it):
      </p>
      <MathBlock>
        {"0 \\;=\\; \\lambda - m_{\\max}^2\\,\\hbar^2 - m_{\\max}\\,\\hbar^2 \\;\\Longrightarrow\\; \\lambda \\;=\\; \\hbar^2\\,m_{\\max}\\,(m_{\\max} + 1)."}
      </MathBlock>
      <p>Same trick with <MathInline>{"\\hat{L}_+\\hat{L}_- = \\hat{L}^2 - \\hat{L}_z^2 + \\hbar\\hat{L}_z"}</MathInline> on the bottom state gives</p>
      <MathBlock>
        {"\\lambda \\;=\\; \\hbar^2\\,m_{\\min}\\,(m_{\\min} - 1)."}
      </MathBlock>
      <p>
        Equating the two and solving the quadratic gives{" "}
        <MathInline>{"m_{\\min} = -\\,m_{\\max}"}</MathInline>. Calling{" "}
        <MathInline>{"\\ell \\equiv m_{\\max}"}</MathInline>, we read off
      </p>
      <MathBlock>
        {"\\boxed{\\;\\lambda \\;=\\; \\hbar^2\\,\\ell\\,(\\ell + 1),\\qquad m \\in \\{-\\ell, -\\ell + 1, \\dots, \\ell\\}.\\;}"}
      </MathBlock>
      <p>
        The number of steps from{" "}
        <MathInline>{"-\\ell"}</MathInline> to{" "}
        <MathInline>{"+\\ell"}</MathInline> is an integer, so{" "}
        <MathInline>{"2\\ell \\in \\mathbb{Z}_{\\ge 0}"}</MathInline>: the
        algebra alone forces{" "}
        <MathInline>{"\\ell \\in \\{0, \\tfrac{1}{2}, 1, \\tfrac{3}{2}, \\dots\\}"}</MathInline>.
        For orbital angular momentum we additionally require single-valued
        wave functions on{" "}
        <MathInline>{"\\phi \\to \\phi + 2\\pi"}</MathInline>, killing the
        half-integers and leaving{" "}
        <MathInline>{"\\ell = 0, 1, 2, \\dots"}</MathInline>. Half-integers
        will reappear for spin.
      </p>

      <AngularMomentumCone />

      <h2>Step 4 — Ladder amplitudes</h2>
      <p>
        We already computed{" "}
        <MathInline>{"\\hat{L}_-\\hat{L}_+ = \\hat{L}^2 - \\hat{L}_z^2 - \\hbar\\hat{L}_z"}</MathInline>.
        Sandwich on <MathInline>{"|\\ell, m\\rangle"}</MathInline>:
      </p>
      <MathBlock>
        {"\\|\\hat{L}_+|\\ell, m\\rangle\\|^2 \\;=\\; \\langle\\ell, m|\\hat{L}_-\\hat{L}_+|\\ell, m\\rangle \\;=\\; \\hbar^2\\,[\\ell(\\ell+1) - m^2 - m] \\;=\\; \\hbar^2\\,(\\ell - m)(\\ell + m + 1)."}
      </MathBlock>
      <p>Take the positive root (standard phase choice):</p>
      <MathBlock>
        {"\\boxed{\\;\\hat{L}_\\pm|\\ell, m\\rangle \\;=\\; \\hbar\\,\\sqrt{(\\ell \\mp m)(\\ell \\pm m + 1)}\\,|\\ell, m \\pm 1\\rangle.\\;}"}
      </MathBlock>

      <h2>Spin</h2>
      <p>
        Spin is an intrinsic angular momentum with no orbital interpretation
        — it just sits there in addition to{" "}
        <MathInline>{"\\hat{\\mathbf{L}}"}</MathInline>. Its components obey
        the same algebra,
      </p>
      <MathBlock>
        {"[\\hat{S}_i, \\hat{S}_j] \\;=\\; i\\hbar\\,\\epsilon_{ijk}\\,\\hat{S}_k,"}
      </MathBlock>
      <p>
        but now half-integer values{" "}
        <MathInline>{"s = 1/2, 3/2, \\dots"}</MathInline> are allowed (no
        single-valued-function constraint applies — spin has no spatial
        wave function). For an electron{" "}
        <MathInline>{"s = 1/2"}</MathInline> and the Hilbert space is{" "}
        <MathInline>{"\\mathbb{C}^2"}</MathInline>. Standard basis:
      </p>
      <MathBlock>
        {"|\\uparrow\\rangle = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix},\\qquad |\\downarrow\\rangle = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}."}
      </MathBlock>
      <p>
        Specializing the ladder identity to{" "}
        <MathInline>{"\\ell = 1/2, m = -1/2"}</MathInline> gives{" "}
        <MathInline>{"\\hat{S}_+|\\downarrow\\rangle = \\hbar\\,|\\uparrow\\rangle"}</MathInline>{" "}
        and similarly{" "}
        <MathInline>{"\\hat{S}_-|\\uparrow\\rangle = \\hbar\\,|\\downarrow\\rangle"}</MathInline>.
        From these,
      </p>
      <MathBlock>
        {"\\hat{S}_x = \\tfrac{\\hbar}{2}\\,\\sigma_x,\\;\\; \\hat{S}_y = \\tfrac{\\hbar}{2}\\,\\sigma_y,\\;\\; \\hat{S}_z = \\tfrac{\\hbar}{2}\\,\\sigma_z,\\;\\; \\boldsymbol{\\sigma} = \\Big(\\!\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix},\\, \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix},\\, \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\Big)."}
      </MathBlock>
      <p>
        Useful identities:{" "}
        <MathInline>{"\\sigma_i^2 = \\mathbf{1}"}</MathInline>,{" "}
        <MathInline>{"\\sigma_i \\sigma_j = \\delta_{ij}\\,\\mathbf{1} + i\\,\\epsilon_{ijk}\\,\\sigma_k"}</MathInline>.
      </p>

      <h2>Addition of angular momentum (sketch of the recipe)</h2>
      <p>
        Couple <MathInline>{"\\hat{\\mathbf{L}}"}</MathInline> and{" "}
        <MathInline>{"\\hat{\\mathbf{S}}"}</MathInline> into{" "}
        <MathInline>{"\\hat{\\mathbf{J}} = \\hat{\\mathbf{L}} + \\hat{\\mathbf{S}}"}</MathInline>.
        Since the components of <MathInline>{"\\hat{\\mathbf{L}}"}</MathInline>{" "}
        commute with those of{" "}
        <MathInline>{"\\hat{\\mathbf{S}}"}</MathInline>,{" "}
        <MathInline>{"\\hat{\\mathbf{J}}"}</MathInline> obeys the same
        angular-momentum algebra. The product space{" "}
        <MathInline>{"|\\ell, m_\\ell\\rangle\\otimes|s, m_s\\rangle"}</MathInline>{" "}
        decomposes into eigenspaces of{" "}
        <MathInline>{"\\hat{\\mathbf{J}}^2, \\hat{J}_z"}</MathInline> labelled{" "}
        <MathInline>{"|j, m_j\\rangle"}</MathInline> with
      </p>
      <MathBlock>
        {"j \\;\\in\\; \\{\\,|\\ell - s|,\\,|\\ell - s| + 1,\\, \\dots,\\, \\ell + s\\,\\}."}
      </MathBlock>
      <p>
        The change-of-basis kernel between{" "}
        <MathInline>{"|\\ell, m_\\ell; s, m_s\\rangle"}</MathInline> and{" "}
        <MathInline>{"|j, m_j\\rangle"}</MathInline> is given by the
        Clebsch–Gordan coefficients (Griffiths Table 4.8). For{" "}
        <MathInline>{"\\ell = 1, s = 1/2"}</MathInline> we get{" "}
        <MathInline>{"j \\in \\{1/2, 3/2\\}"}</MathInline>, i.e. a 6-dim
        product space splits into 2 + 4. This is exactly the setup for
        problem 2 of the final.
      </p>

      <h2>The identity we will hit hardest in Week 8</h2>
      <p>From <MathInline>{"\\hat{\\mathbf{J}}^2 = \\hat{\\mathbf{L}}^2 + 2\\,\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}} + \\hat{\\mathbf{S}}^2"}</MathInline>,</p>
      <MathBlock>
        {"\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}} \\;=\\; \\tfrac{1}{2}\\big(\\hat{\\mathbf{J}}^2 - \\hat{\\mathbf{L}}^2 - \\hat{\\mathbf{S}}^2\\big)."}
      </MathBlock>
      <p>
        On a state with definite{" "}
        <MathInline>{"j, \\ell, s"}</MathInline>, the eigenvalue is{" "}
        <MathInline>{"(\\hbar^2/2)\\,[j(j+1) - \\ell(\\ell+1) - s(s+1)]"}</MathInline>.
        Diagonalizing any spin-orbit Hamiltonian is then a one-line plug-in,
        without ever touching matrix elements — we will use this on the
        final.
      </p>
    </>
  )
}
