import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import {
  FiniteWellPotential,
  InfiniteWellLevels,
} from "@/components/teaching/qmt/diagrams"

export default function Week2() {
  return (
    <>
      <h2>From time-dependent to time-independent Schrödinger</h2>
      <p>
        When <MathInline>{"V(x)"}</MathInline> has no explicit time
        dependence, try a separable ansatz{" "}
        <MathInline>{"\\Psi(x, t) = \\psi(x)\\, T(t)"}</MathInline> in the
        time-dependent Schrödinger equation:
      </p>
      <MathBlock>
        {"i\\hbar\\,\\psi(x)\\,T'(t) \\;=\\; -\\,\\tfrac{\\hbar^2}{2m}\\,\\psi''(x)\\,T(t) + V(x)\\,\\psi(x)\\,T(t)."}
      </MathBlock>
      <p>
        Divide both sides by{" "}
        <MathInline>{"\\psi(x)\\,T(t)"}</MathInline>:
      </p>
      <MathBlock>
        {"\\underbrace{\\;i\\hbar\\,\\frac{T'(t)}{T(t)}\\;}_{\\text{function of } t} \\;=\\; \\underbrace{\\;-\\,\\frac{\\hbar^2}{2m}\\,\\frac{\\psi''(x)}{\\psi(x)} + V(x)\\;}_{\\text{function of } x}."}
      </MathBlock>
      <p>
        The two sides depend on different variables, so each must equal a
        common constant — call it <MathInline>{"E"}</MathInline>. The
        right-hand side then gives the time-independent Schrödinger equation
        (TISE),
      </p>
      <MathBlock>
        {"-\\,\\frac{\\hbar^2}{2m}\\,\\psi''(x) \\;+\\; V(x)\\,\\psi(x) \\;=\\; E\\,\\psi(x),"}
      </MathBlock>
      <p>and the left-hand side integrates immediately to</p>
      <MathBlock>
        {"T(t) \\;=\\; e^{-i E t/\\hbar}\\quad(\\text{up to a constant absorbed into }\\psi)."}
      </MathBlock>
      <p>
        Stationary states <MathInline>{"\\psi_n(x)"}</MathInline> with
        energies <MathInline>{"E_n"}</MathInline> form a complete set, so a
        generic wave function is
      </p>
      <MathBlock>
        {"\\Psi(x, t) \\;=\\; \\sum_n c_n\\,\\psi_n(x)\\, e^{-i E_n t/\\hbar},\\qquad c_n = \\int \\psi_n^*(x)\\,\\Psi(x, 0)\\, dx."}
      </MathBlock>
      <p>
        Solve the TISE once; time evolution is then just attaching a phase to
        each component.
      </p>

      <h2>The infinite square well — full derivation</h2>
      <p>
        Take <MathInline>{"V(x) = 0"}</MathInline> for{" "}
        <MathInline>{"0 \\le x \\le L"}</MathInline> and{" "}
        <MathInline>{"V(x) = \\infty"}</MathInline> outside. Inside the well
        the TISE becomes
      </p>
      <MathBlock>
        {"\\psi''(x) \\;=\\; -\\,k^2\\,\\psi(x),\\qquad k \\;\\equiv\\; \\sqrt{2 m E}/\\hbar."}
      </MathBlock>
      <p>
        The general real-coefficient solution is{" "}
        <MathInline>{"\\psi(x) = A\\sin(kx) + B\\cos(kx)"}</MathInline>.
        Outside the well <MathInline>{"\\psi"}</MathInline> must be zero
        (anything else gives infinite energy), and the wave function is
        continuous, so the boundary conditions are{" "}
        <MathInline>{"\\psi(0) = 0"}</MathInline> and{" "}
        <MathInline>{"\\psi(L) = 0"}</MathInline>.
      </p>
      <p>
        From <MathInline>{"\\psi(0) = 0"}</MathInline>:{" "}
        <MathInline>{"A\\sin 0 + B\\cos 0 = B = 0"}</MathInline>, so{" "}
        <MathInline>{"B = 0"}</MathInline>. From{" "}
        <MathInline>{"\\psi(L) = 0"}</MathInline>:{" "}
        <MathInline>{"A\\sin(kL) = 0"}</MathInline>. We do not want the
        trivial solution <MathInline>{"A = 0"}</MathInline>, so we need{" "}
        <MathInline>{"\\sin(kL) = 0"}</MathInline>, i.e.{" "}
        <MathInline>{"k L = n\\pi"}</MathInline> for{" "}
        <MathInline>{"n = 1, 2, 3, \\dots"}</MathInline> (the negative{" "}
        <MathInline>{"n"}</MathInline> give the same state up to a sign).
        Solving <MathInline>{"k = n\\pi/L"}</MathInline> for{" "}
        <MathInline>{"E"}</MathInline>:
      </p>
      <MathBlock>
        {"\\boxed{\\;E_n \\;=\\; \\frac{\\hbar^2\\,k_n^2}{2 m} \\;=\\; \\frac{n^2\\,\\pi^2\\,\\hbar^2}{2 m\\, L^2}.\\;}"}
      </MathBlock>
      <p>Normalize:</p>
      <MathBlock>
        {"\\int_0^L A^2\\,\\sin^2\\!\\Big(\\tfrac{n\\pi x}{L}\\Big)\\, dx \\;=\\; A^2\\cdot \\tfrac{L}{2} \\;=\\; 1 \\;\\Longrightarrow\\; A \\;=\\; \\sqrt{\\tfrac{2}{L}}."}
      </MathBlock>
      <p>So the orthonormal stationary states are</p>
      <MathBlock>
        {"\\boxed{\\;\\psi_n(x) \\;=\\; \\sqrt{\\tfrac{2}{L}}\\,\\sin\\!\\Big(\\tfrac{n\\pi x}{L}\\Big),\\quad n = 1, 2, 3, \\dots\\;}"}
      </MathBlock>

      <InfiniteWellLevels />

      <h3>Orthonormality</h3>
      <p>For <MathInline>{"m \\ne n"}</MathInline>,</p>
      <MathBlock>
        {"\\int_0^L \\psi_m\\,\\psi_n\\, dx \\;=\\; \\tfrac{2}{L}\\int_0^L \\sin\\!\\Big(\\tfrac{m\\pi x}{L}\\Big)\\sin\\!\\Big(\\tfrac{n\\pi x}{L}\\Big)\\, dx \\;=\\; \\tfrac{1}{L}\\int_0^L \\Big[\\cos\\!\\tfrac{(m-n)\\pi x}{L} - \\cos\\!\\tfrac{(m+n)\\pi x}{L}\\Big]\\, dx \\;=\\; 0,"}
      </MathBlock>
      <p>
        because each cosine integrates to zero over an integer number of
        half-periods. For <MathInline>{"m = n"}</MathInline> we get 1, so{" "}
        <MathInline>{"\\langle \\psi_m|\\psi_n\\rangle = \\delta_{mn}"}</MathInline>.
        The completeness relation{" "}
        <MathInline>{"\\Psi(x,0) = \\sum_n c_n\\,\\psi_n(x)"}</MathInline>{" "}
        is then a Fourier sine series, with{" "}
        <MathInline>{"|c_n|^2"}</MathInline> the probability of measuring{" "}
        <MathInline>{"E_n"}</MathInline>.
      </p>

      <h2>The finite square well</h2>
      <p>
        Now soften the walls:{" "}
        <MathInline>{"V(x) = -V_0"}</MathInline> for{" "}
        <MathInline>{"|x| \\le a"}</MathInline> (<MathInline>{"V_0 > 0"}</MathInline>),
        and <MathInline>{"V(x) = 0"}</MathInline> outside. Bound states have{" "}
        <MathInline>{"-V_0 < E < 0"}</MathInline>.
      </p>
      <FiniteWellPotential />
      <p>Inside the well the TISE is</p>
      <MathBlock>
        {"\\psi''(x) \\;=\\; -\\,k^2\\,\\psi(x),\\quad k = \\sqrt{2 m (E + V_0)}/\\hbar."}
      </MathBlock>
      <p>Outside,</p>
      <MathBlock>
        {"\\psi''(x) \\;=\\; +\\,\\kappa^2\\,\\psi(x),\\quad \\kappa = \\sqrt{-\\,2 m E}/\\hbar > 0,"}
      </MathBlock>
      <p>
        with exponentially decaying solutions{" "}
        <MathInline>{"e^{\\pm \\kappa x}"}</MathInline>. The potential is
        even (<MathInline>{"V(-x) = V(x)"}</MathInline>), so the stationary
        states have definite parity. Take the <strong>even</strong> states
        for now.
      </p>

      <h3>Even states</h3>
      <p>
        Inside,{" "}
        <MathInline>{"\\psi_{\\rm in}(x) = A\\cos(kx)"}</MathInline>{" "}
        (cosine — keeps the function even). Outside,{" "}
        <MathInline>{"\\psi_{\\rm out}(x) = B\\,e^{-\\kappa|x|}"}</MathInline>{" "}
        (the growing exponential is rejected for normalizability). At{" "}
        <MathInline>{"x = a"}</MathInline> require continuity of{" "}
        <MathInline>{"\\psi"}</MathInline> and{" "}
        <MathInline>{"\\psi'"}</MathInline>:
      </p>
      <MathBlock>
        {"A\\cos(k a) \\;=\\; B\\,e^{-\\kappa a},\\qquad -\\,A\\,k\\,\\sin(k a) \\;=\\; -\\,B\\,\\kappa\\,e^{-\\kappa a}."}
      </MathBlock>
      <p>Divide the second equation by the first to eliminate the constants:</p>
      <MathBlock>
        {"\\boxed{\\;k\\,\\tan(k a) \\;=\\; \\kappa.\\;}"}
      </MathBlock>
      <p>
        Together with{" "}
        <MathInline>{"k^2 + \\kappa^2 = 2 m V_0/\\hbar^2"}</MathInline> this
        fixes the bound-state energies.
      </p>

      <h3>Odd states</h3>
      <p>
        Inside,{" "}
        <MathInline>{"\\psi_{\\rm in}(x) = A\\sin(kx)"}</MathInline>;
        outside <MathInline>{"\\psi_{\\rm out}(x) = \\mathrm{sgn}(x)\\, B\\,e^{-\\kappa|x|}"}</MathInline>.
        Matching at <MathInline>{"x = a"}</MathInline> in the same way:
      </p>
      <MathBlock>
        {"A\\sin(k a) \\;=\\; B\\,e^{-\\kappa a},\\qquad A\\,k\\,\\cos(k a) \\;=\\; -\\,B\\,\\kappa\\,e^{-\\kappa a}."}
      </MathBlock>
      <p>Divide:</p>
      <MathBlock>
        {"\\boxed{\\;-\\,k\\,\\cot(k a) \\;=\\; \\kappa.\\;}"}
      </MathBlock>

      <h3>Graphical / dimensionless form</h3>
      <p>
        Introduce <MathInline>{"z = k a"}</MathInline> and{" "}
        <MathInline>{"z_0 = (a/\\hbar)\\,\\sqrt{2 m V_0}"}</MathInline>.
        From <MathInline>{"k^2 + \\kappa^2 = 2 m V_0/\\hbar^2 = z_0^2/a^2"}</MathInline>{" "}
        we get <MathInline>{"\\kappa\\,a = \\sqrt{z_0^2 - z^2}"}</MathInline>.
        The even condition becomes
      </p>
      <MathBlock>
        {"z\\,\\tan z \\;=\\; \\sqrt{z_0^2 - z^2},"}
      </MathBlock>
      <p>
        which has a finite number of solutions for any fixed{" "}
        <MathInline>{"z_0"}</MathInline> — the curves{" "}
        <MathInline>{"z\\tan z"}</MathInline> and{" "}
        <MathInline>{"\\sqrt{z_0^2 - z^2}"}</MathInline> always cross at
        least once on{" "}
        <MathInline>{"[0, z_0]"}</MathInline>, so there is always at least
        one even bound state, no matter how shallow.
      </p>

      <h2>What stays with us</h2>
      <p>
        After Week 2 the recipe for any 1D piecewise-constant potential is
        firmly the same: (i) write the TISE separately on each region; (ii)
        pick exponential or sinusoidal solutions according to the sign of{" "}
        <MathInline>{"E - V"}</MathInline>; (iii) impose decay at infinity
        for bound states; (iv) match{" "}
        <MathInline>{"\\psi"}</MathInline> and{" "}
        <MathInline>{"\\psi'"}</MathInline> at each boundary; (v) read off
        the energies. We use this exact procedure for the step and the
        finite-bottom asymmetric well in the midterm.
      </p>
    </>
  )
}
