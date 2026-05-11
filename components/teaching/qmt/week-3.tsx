import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import {
  OscillatorLevels,
  StepPotential,
} from "@/components/teaching/qmt/diagrams"

export default function Week3() {
  return (
    <>
      <h2>The quantum harmonic oscillator</h2>
      <p>The Hamiltonian is</p>
      <MathBlock>
        {"\\hat{H} \\;=\\; \\frac{\\hat{p}^2}{2 m} + \\tfrac{1}{2}\\,m\\,\\omega^2\\,\\hat{x}^2,"}
      </MathBlock>
      <p>
        which comes up everywhere: small oscillations around any potential
        minimum, normal modes, the quantized EM field. We solve it the
        algebraic way using <em>ladder operators</em>, which generalizes
        directly to angular momentum and the Landau-level problem in the
        final.
      </p>

      <h2>Step 1 — Build the ladder operators</h2>
      <p>Define</p>
      <MathBlock>
        {"a \\;\\equiv\\; \\sqrt{\\tfrac{m\\omega}{2\\hbar}}\\,\\Big(\\hat{x} + \\tfrac{i}{m\\omega}\\,\\hat{p}\\Big),\\qquad a^\\dagger \\;\\equiv\\; \\sqrt{\\tfrac{m\\omega}{2\\hbar}}\\,\\Big(\\hat{x} - \\tfrac{i}{m\\omega}\\,\\hat{p}\\Big)."}
      </MathBlock>
      <p>
        From the canonical commutator{" "}
        <MathInline>{"[\\hat{x}, \\hat{p}] = i\\hbar"}</MathInline>,
      </p>
      <MathBlock>
        {"[a, a^\\dagger] \\;=\\; \\tfrac{m\\omega}{2\\hbar}\\Big[\\hat{x} + \\tfrac{i\\hat{p}}{m\\omega},\\;\\hat{x} - \\tfrac{i\\hat{p}}{m\\omega}\\Big] \\;=\\; \\tfrac{m\\omega}{2\\hbar}\\cdot\\Big(-\\,\\tfrac{2i}{m\\omega}\\,[\\hat{x}, \\hat{p}]\\Big) \\;=\\; \\tfrac{m\\omega}{2\\hbar}\\cdot\\tfrac{2\\hbar}{m\\omega} \\;=\\; 1."}
      </MathBlock>
      <p>
        Next, express <MathInline>{"\\hat{H}"}</MathInline> in terms of{" "}
        <MathInline>{"a, a^\\dagger"}</MathInline>. From the definitions,
      </p>
      <MathBlock>
        {"\\hat{x} \\;=\\; \\sqrt{\\tfrac{\\hbar}{2 m\\omega}}\\,(a + a^\\dagger),\\qquad \\hat{p} \\;=\\; -\\,i\\,\\sqrt{\\tfrac{m\\omega\\hbar}{2}}\\,(a - a^\\dagger)."}
      </MathBlock>
      <p>Square them:</p>
      <MathBlock>
        {"\\hat{p}^2 \\;=\\; -\\,\\tfrac{m\\omega\\hbar}{2}\\,(a - a^\\dagger)^2 \\;=\\; \\tfrac{m\\omega\\hbar}{2}\\,\\big(-a^2 - (a^\\dagger)^2 + a\\,a^\\dagger + a^\\dagger a\\big),"}
      </MathBlock>
      <MathBlock>
        {"\\hat{x}^2 \\;=\\; \\tfrac{\\hbar}{2 m\\omega}\\,\\big(a^2 + (a^\\dagger)^2 + a\\,a^\\dagger + a^\\dagger a\\big)."}
      </MathBlock>
      <p>
        Plug into <MathInline>{"\\hat{H}"}</MathInline>. The{" "}
        <MathInline>{"a^2"}</MathInline> and{" "}
        <MathInline>{"(a^\\dagger)^2"}</MathInline> pieces cancel, leaving
      </p>
      <MathBlock>
        {"\\hat{H} \\;=\\; \\tfrac{1}{2}\\,\\hbar\\omega\\,(a\\,a^\\dagger + a^\\dagger a)."}
      </MathBlock>
      <p>
        Use <MathInline>{"a\\,a^\\dagger = a^\\dagger a + 1"}</MathInline> to
        get the canonical form
      </p>
      <MathBlock>
        {"\\boxed{\\;\\hat{H} \\;=\\; \\hbar\\omega\\,\\big(\\hat{N} + \\tfrac{1}{2}\\big),\\qquad \\hat{N} \\;\\equiv\\; a^\\dagger a.\\;}"}
      </MathBlock>

      <h2>Step 2 — The ladder action</h2>
      <p>
        From <MathInline>{"[a, a^\\dagger] = 1"}</MathInline> we get
      </p>
      <MathBlock>
        {"[\\hat{N}, a] \\;=\\; [a^\\dagger a, a] \\;=\\; a^\\dagger[a, a] + [a^\\dagger, a]\\,a \\;=\\; -\\,a,\\qquad [\\hat{N}, a^\\dagger] \\;=\\; a^\\dagger."}
      </MathBlock>
      <p>
        If <MathInline>{"\\hat{N}|n\\rangle = n|n\\rangle"}</MathInline>{" "}
        then{" "}
        <MathInline>{"\\hat{N}\\,a^\\dagger|n\\rangle = a^\\dagger \\hat{N}|n\\rangle + [\\hat{N}, a^\\dagger]|n\\rangle = (n+1)\\,a^\\dagger|n\\rangle"}</MathInline>{" "}
        — i.e.{" "}
        <MathInline>{"a^\\dagger|n\\rangle \\propto |n+1\\rangle"}</MathInline>.
        Similarly{" "}
        <MathInline>{"a|n\\rangle \\propto |n-1\\rangle"}</MathInline>. To
        fix the proportionality, compute{" "}
        <MathInline>{"\\|a^\\dagger|n\\rangle\\|^2"}</MathInline>:
      </p>
      <MathBlock>
        {"\\langle n|\\,a\\,a^\\dagger\\,|n\\rangle \\;=\\; \\langle n|\\,(a^\\dagger a + 1)\\,|n\\rangle \\;=\\; n + 1,"}
      </MathBlock>
      <p>
        so{" "}
        <MathInline>{"a^\\dagger|n\\rangle = \\sqrt{n+1}\\,|n+1\\rangle"}</MathInline>{" "}
        (positive-phase convention) and similarly{" "}
        <MathInline>{"a|n\\rangle = \\sqrt{n}\\,|n-1\\rangle"}</MathInline>.
      </p>
      <p>
        Eigenvalues of <MathInline>{"\\hat{N}"}</MathInline> are
        non-negative integers (any non-integer{" "}
        <MathInline>{"n"}</MathInline> would let{" "}
        <MathInline>{"a"}</MathInline> generate a state of negative norm),
        so we have a tower
      </p>
      <MathBlock>
        {"\\boxed{\\;E_n \\;=\\; \\hbar\\omega\\Big(n + \\tfrac{1}{2}\\Big),\\qquad n = 0, 1, 2, \\dots\\;}"}
      </MathBlock>

      <h2>Step 3 — Ground-state wave function</h2>
      <p>
        Apply{" "}
        <MathInline>{"a\\,\\psi_0(x) = 0"}</MathInline>. Writing{" "}
        <MathInline>{"a"}</MathInline> in position space,
      </p>
      <MathBlock>
        {"\\sqrt{\\tfrac{m\\omega}{2\\hbar}}\\,\\Big(x + \\tfrac{\\hbar}{m\\omega}\\,\\tfrac{d}{dx}\\Big)\\,\\psi_0(x) \\;=\\; 0,"}
      </MathBlock>
      <p>which is the first-order ODE</p>
      <MathBlock>
        {"\\psi_0'(x) \\;=\\; -\\,\\tfrac{m\\omega}{\\hbar}\\,x\\,\\psi_0(x) \\;\\Longrightarrow\\; \\psi_0(x) \\;=\\; C\\,\\exp\\!\\Big(-\\,\\tfrac{m\\omega}{2\\hbar}\\, x^2\\Big)."}
      </MathBlock>
      <p>
        Normalizing,{" "}
        <MathInline>{"C = (m\\omega/(\\pi\\hbar))^{1/4}"}</MathInline>. The
        excited states follow:
      </p>
      <MathBlock>
        {"\\psi_n(x) \\;=\\; \\tfrac{1}{\\sqrt{n!}}\\,(a^\\dagger)^n\\,\\psi_0(x)."}
      </MathBlock>
      <p>
        Up to normalization,{" "}
        <MathInline>{"\\psi_n(x) \\propto H_n(\\xi)\\, e^{-\\xi^2/2}"}</MathInline>{" "}
        with <MathInline>{"\\xi = \\sqrt{m\\omega/\\hbar}\\,x"}</MathInline>{" "}
        and Hermite polynomials{" "}
        <MathInline>{"H_n"}</MathInline>.
      </p>

      <OscillatorLevels />

      <h2>Free particle and Gaussian wave packets</h2>
      <p>
        With <MathInline>{"V = 0"}</MathInline> the stationary states are
        plane waves <MathInline>{"\\phi_k(x) = e^{ikx}"}</MathInline> with
        energy{" "}
        <MathInline>{"\\hbar^2 k^2/(2m)"}</MathInline>. These are not square
        integrable, but they form a generalized basis: any normalizable
        state is a Fourier integral
      </p>
      <MathBlock>
        {"\\Psi(x,t) \\;=\\; \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^{\\infty} \\phi(k)\\,e^{i\\,k\\,x - i\\,\\omega(k)\\,t}\\, dk,\\qquad \\omega(k) = \\frac{\\hbar k^2}{2m},"}
      </MathBlock>
      <p>
        where the weight{" "}
        <MathInline>{"\\phi(k)"}</MathInline> is determined by the initial
        condition.
      </p>
      <p>
        For a Gaussian initial state{" "}
        <MathInline>{"\\Psi(x, 0) \\propto e^{-x^2/(4\\sigma_0^2)}"}</MathInline>{" "}
        the Fourier transform is also Gaussian, and a short calculation
        gives that the width grows as
      </p>
      <MathBlock>
        {"\\sigma(t) \\;=\\; \\sigma_0\\,\\sqrt{1 + \\big(\\tfrac{\\hbar\\, t}{2 m\\,\\sigma_0^2}\\big)^2}."}
      </MathBlock>
      <p>
        Wave packets spread, with the spreading rate larger for narrower
        initial packets — exactly the position–momentum uncertainty
        principle in motion.
      </p>

      <h2>Delta-function well</h2>
      <p>
        Take <MathInline>{"V(x) = -\\,\\alpha\\,\\delta(x)"}</MathInline>{" "}
        with <MathInline>{"\\alpha > 0"}</MathInline>. Away from the origin
        the TISE reduces to{" "}
        <MathInline>{"\\psi'' = \\kappa^2\\,\\psi"}</MathInline> with{" "}
        <MathInline>{"\\kappa = \\sqrt{-2 m E}/\\hbar"}</MathInline>, so
        normalizable bound states (<MathInline>{"E < 0"}</MathInline>) look
        like
      </p>
      <MathBlock>
        {"\\psi(x) \\;=\\; A\\,e^{-\\kappa |x|}."}
      </MathBlock>
      <p>
        This <MathInline>{"\\psi"}</MathInline> is continuous at{" "}
        <MathInline>{"x = 0"}</MathInline> but{" "}
        <MathInline>{"\\psi'"}</MathInline> has a kink. To capture the kink
        size, integrate the TISE from{" "}
        <MathInline>{"-\\epsilon"}</MathInline> to{" "}
        <MathInline>{"+\\epsilon"}</MathInline> and let{" "}
        <MathInline>{"\\epsilon \\to 0"}</MathInline>:
      </p>
      <MathBlock>
        {"-\\,\\tfrac{\\hbar^2}{2 m}\\,\\big[\\psi'(0^+) - \\psi'(0^-)\\big] \\;-\\; \\alpha\\,\\psi(0) \\;=\\; 0,"}
      </MathBlock>
      <p>i.e. the boundary condition</p>
      <MathBlock>
        {"\\Delta\\psi'(0) \\;\\equiv\\; \\psi'(0^+) - \\psi'(0^-) \\;=\\; -\\,\\tfrac{2 m\\,\\alpha}{\\hbar^2}\\,\\psi(0)."}
      </MathBlock>
      <p>
        Plug in the symmetric ansatz{" "}
        <MathInline>{"\\psi = A e^{-\\kappa|x|}"}</MathInline>:{" "}
        <MathInline>{"\\Delta\\psi'(0) = -2\\kappa A"}</MathInline>, so
      </p>
      <MathBlock>
        {"-\\,2\\,\\kappa\\,A \\;=\\; -\\,\\tfrac{2 m\\,\\alpha}{\\hbar^2}\\,A \\;\\Longrightarrow\\; \\kappa \\;=\\; \\tfrac{m\\,\\alpha}{\\hbar^2},\\quad E \\;=\\; -\\,\\tfrac{m\\,\\alpha^2}{2\\,\\hbar^2}."}
      </MathBlock>
      <p>
        Exactly one bound state, no matter how small{" "}
        <MathInline>{"\\alpha"}</MathInline>.
      </p>

      <h2>Scattering off a step — full matching</h2>
      <StepPotential />
      <p>
        <MathInline>{"V(x) = 0"}</MathInline> for{" "}
        <MathInline>{"x \\le 0"}</MathInline> and{" "}
        <MathInline>{"V(x) = V_0"}</MathInline> for{" "}
        <MathInline>{"x > 0"}</MathInline>. Send a plane wave from the left:
      </p>
      <MathBlock>
        {"\\psi_{\\rm L}(x) \\;=\\; A\\,e^{ikx} + B\\,e^{-ikx},\\quad k = \\sqrt{2 m E}/\\hbar."}
      </MathBlock>

      <h3>Case <MathInline>{"E > V_0"}</MathInline></h3>
      <p>Right region:</p>
      <MathBlock>
        {"\\psi_{\\rm R}(x) \\;=\\; F\\,e^{i k' x},\\quad k' = \\sqrt{2 m (E - V_0)}/\\hbar."}
      </MathBlock>
      <p>
        We drop a hypothetical incoming wave from the right (the problem
        sends particles from the left only). Match{" "}
        <MathInline>{"\\psi, \\psi'"}</MathInline> at{" "}
        <MathInline>{"x = 0"}</MathInline>:
      </p>
      <MathBlock>
        {"A + B \\;=\\; F,\\qquad i\\,k\\,(A - B) \\;=\\; i\\,k'\\,F."}
      </MathBlock>
      <p>
        Solve the linear system. From the second equation{" "}
        <MathInline>{"A - B = (k'/k)\\,F"}</MathInline>; combined with{" "}
        <MathInline>{"A + B = F"}</MathInline>,
      </p>
      <MathBlock>
        {"A \\;=\\; \\tfrac{1}{2}\\,F\\,(1 + k'/k),\\qquad B \\;=\\; \\tfrac{1}{2}\\,F\\,(1 - k'/k),"}
      </MathBlock>
      <p>so</p>
      <MathBlock>
        {"\\frac{F}{A} \\;=\\; \\frac{2 k}{k + k'},\\qquad \\frac{B}{A} \\;=\\; \\frac{k - k'}{k + k'}."}
      </MathBlock>
      <p>
        The reflection coefficient is the ratio of reflected to incident
        probability current,
      </p>
      <MathBlock>
        {"R \\;=\\; \\frac{|B|^2}{|A|^2} \\;=\\; \\Big(\\tfrac{k - k'}{k + k'}\\Big)^2."}
      </MathBlock>

      <h3>Transmission and the <MathInline>{"k'/k"}</MathInline> subtlety</h3>
      <p>
        For the transmitted wave the speeds on the two sides differ, so a
        naive <MathInline>{"|F/A|^2"}</MathInline> would be wrong. Compute
        the probability current{" "}
        <MathInline>{"j = (\\hbar/m)\\,\\mathrm{Im}(\\psi^*\\,\\psi')"}</MathInline>{" "}
        on each side. For a plane wave{" "}
        <MathInline>{"\\psi = C e^{i q x}"}</MathInline>,{" "}
        <MathInline>{"j = (\\hbar\\,q/m)\\,|C|^2"}</MathInline>, so
      </p>
      <MathBlock>
        {"j_{\\rm inc} = \\tfrac{\\hbar k}{m}|A|^2,\\qquad j_{\\rm refl} = \\tfrac{\\hbar k}{m}|B|^2,\\qquad j_{\\rm tr} = \\tfrac{\\hbar k'}{m}|F|^2."}
      </MathBlock>
      <p>Therefore</p>
      <MathBlock>
        {"T \\;\\equiv\\; \\frac{j_{\\rm tr}}{j_{\\rm inc}} \\;=\\; \\frac{k'}{k}\\,\\Big|\\tfrac{F}{A}\\Big|^2 \\;=\\; \\frac{k'}{k}\\cdot\\frac{4\\,k^2}{(k + k')^2} \\;=\\; \\frac{4\\,k\\,k'}{(k + k')^2}."}
      </MathBlock>
      <p>Sum:</p>
      <MathBlock>
        {"R + T \\;=\\; \\frac{(k - k')^2 + 4\\,k\\,k'}{(k + k')^2} \\;=\\; \\frac{(k + k')^2}{(k + k')^2} \\;=\\; 1."}
      </MathBlock>

      <h3>Case <MathInline>{"E < V_0"}</MathInline></h3>
      <p>
        Right region:{" "}
        <MathInline>{"\\psi_{\\rm R}(x) = C\\,e^{-\\kappa x}"}</MathInline>{" "}
        with <MathInline>{"\\kappa = \\sqrt{2 m (V_0 - E)}/\\hbar"}</MathInline>{" "}
        (drop the growing exponential). Matching:
      </p>
      <MathBlock>
        {"A + B \\;=\\; C,\\qquad i\\,k\\,(A - B) \\;=\\; -\\,\\kappa\\,C."}
      </MathBlock>
      <p>Solve:</p>
      <MathBlock>
        {"\\frac{B}{A} \\;=\\; \\frac{i\\,k + \\kappa}{i\\,k - \\kappa}\\;\\Longrightarrow\\; R \\;=\\; \\Big|\\tfrac{B}{A}\\Big|^2 \\;=\\; \\frac{k^2 + \\kappa^2}{k^2 + \\kappa^2} \\;=\\; 1."}
      </MathBlock>
      <p>
        Total reflection. The wave function still leaks into the wall over a
        length <MathInline>{"1/\\kappa"}</MathInline>, but no probability
        current crosses on average (<MathInline>{"j_{\\rm tr} = 0"}</MathInline>{" "}
        because <MathInline>{"\\psi_R"}</MathInline> is real up to a global
        phase).
      </p>

      <h2>Mental model</h2>
      <p>
        At the end of Week 3 the 1D tool-kit is complete: infinite well
        (sine modes, energies{" "}
        <MathInline>{"\\propto n^2"}</MathInline>), finite well
        (transcendental, finite count), harmonic oscillator (evenly spaced
        ladder), delta well (one bound state), step/barrier scattering (R
        and T from matching, with the{" "}
        <MathInline>{"k'/k"}</MathInline> prefactor in{" "}
        <MathInline>{"T"}</MathInline>). The midterm in Week 4 uses every
        single one of these pieces.
      </p>
    </>
  )
}
