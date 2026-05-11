import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week1() {
  return (
    <>
      <h2>Why a wave function?</h2>
      <p>
        Classical mechanics describes a particle by{" "}
        <MathInline>{"x(t)"}</MathInline> and{" "}
        <MathInline>{"p(t)"}</MathInline>. Quantum mechanics replaces this by
        a single complex-valued function{" "}
        <MathInline>{"\\Psi(x,t)"}</MathInline> — the <em>wave function</em>{" "}
        — which contains everything we can predict about the particle. The
        goal of Griffiths Ch. 1 is to make that vague claim precise: state
        the equation that governs <MathInline>{"\\Psi"}</MathInline>, the
        rule that turns it into probabilities, and the constraints needed for
        the probabilities to make sense.
      </p>

      <h2>The Schrödinger equation</h2>
      <p>
        The wave function evolves under the time-dependent Schrödinger
        equation:
      </p>
      <MathBlock>
        {"i\\hbar\\,\\frac{\\partial \\Psi}{\\partial t} \\;=\\; -\\frac{\\hbar^2}{2m}\\,\\frac{\\partial^2 \\Psi}{\\partial x^2} \\;+\\; V(x,t)\\,\\Psi."}
      </MathBlock>
      <p>
        Writing the Hamiltonian{" "}
        <MathInline>{"\\hat{H} = \\hat{p}^2/(2m) + V(\\hat{x})"}</MathInline>{" "}
        with <MathInline>{"\\hat{p} = -i\\hbar\\,\\partial_x"}</MathInline>{" "}
        and <MathInline>{"\\hat{x}\\,\\psi(x) = x\\,\\psi(x)"}</MathInline>,
        the same equation is
      </p>
      <MathBlock>
        {"i\\hbar\\,\\partial_t \\Psi \\;=\\; \\hat{H}\\,\\Psi."}
      </MathBlock>
      <p>
        Because the equation is first order in{" "}
        <MathInline>{"t"}</MathInline>, specifying{" "}
        <MathInline>{"\\Psi(x, 0)"}</MathInline> determines{" "}
        <MathInline>{"\\Psi(x, t)"}</MathInline> for all later times. A small
        sanity check: dimensionally,{" "}
        <MathInline>{"[\\hbar/t] = [\\hbar^2/(m x^2)] = \\text{energy}"}</MathInline>,
        so each term is an energy density times{" "}
        <MathInline>{"\\Psi"}</MathInline>, as required.
      </p>

      <h2>The Born rule</h2>
      <p>The squared modulus is interpreted as a probability density:</p>
      <MathBlock>
        {"\\rho(x,t) \\;\\equiv\\; |\\Psi(x,t)|^2 \\;=\\; \\Psi^*(x,t)\\,\\Psi(x,t),"}
      </MathBlock>
      <p>
        so the probability of finding the particle in{" "}
        <MathInline>{"[a, b]"}</MathInline> at time{" "}
        <MathInline>{"t"}</MathInline> is{" "}
        <MathInline>{"\\int_a^b |\\Psi|^2\\, dx"}</MathInline>. The only way
        this can be sensible is if the total is 1:
      </p>
      <MathBlock>
        {"\\int_{-\\infty}^{\\infty}|\\Psi(x,t)|^2\\, dx \\;=\\; 1\\qquad (\\text{normalization})."}
      </MathBlock>

      <h2>Step 1 — Probability conservation: full derivation</h2>
      <p>
        We need to check that if{" "}
        <MathInline>{"\\Psi"}</MathInline> is normalized at one moment, the
        Schrödinger equation keeps it normalized for ever. Differentiate{" "}
        <MathInline>{"\\rho = \\Psi^*\\Psi"}</MathInline>:
      </p>
      <MathBlock>
        {"\\frac{\\partial \\rho}{\\partial t} \\;=\\; \\frac{\\partial \\Psi^*}{\\partial t}\\,\\Psi \\;+\\; \\Psi^*\\,\\frac{\\partial \\Psi}{\\partial t}."}
      </MathBlock>
      <p>
        From the Schrödinger equation{" "}
        <MathInline>{"\\partial_t \\Psi = (i\\hbar/(2m))\\,\\partial_x^2 \\Psi - (i/\\hbar)\\,V\\,\\Psi"}</MathInline>.
        Its complex conjugate is{" "}
        <MathInline>{"\\partial_t \\Psi^* = -(i\\hbar/(2m))\\,\\partial_x^2 \\Psi^* + (i/\\hbar)\\,V\\,\\Psi^*"}</MathInline>{" "}
        (the <MathInline>{"V"}</MathInline> term is real, so it changes
        sign). Substitute:
      </p>
      <MathBlock>
        {"\\frac{\\partial \\rho}{\\partial t} \\;=\\; -\\,\\frac{i\\hbar}{2m}\\,(\\partial_x^2 \\Psi^*)\\,\\Psi \\;+\\; \\frac{i\\hbar}{2m}\\,\\Psi^*\\,(\\partial_x^2 \\Psi) \\;+\\; \\underbrace{\\tfrac{i}{\\hbar}\\,V\\,\\Psi^*\\Psi - \\tfrac{i}{\\hbar}\\,V\\,\\Psi^*\\Psi}_{= 0}."}
      </MathBlock>
      <p>
        The potential drops out — that is the punchline. The two surviving
        terms can be combined using the product rule{" "}
        <MathInline>{"\\partial_x(\\Psi^*\\,\\partial_x \\Psi - \\Psi\\,\\partial_x \\Psi^*) = \\Psi^*\\,\\partial_x^2\\Psi - \\Psi\\,\\partial_x^2 \\Psi^*"}</MathInline>:
      </p>
      <MathBlock>
        {"\\frac{\\partial \\rho}{\\partial t} \\;=\\; \\frac{i\\hbar}{2m}\\,\\partial_x\\!\\big(\\Psi^*\\,\\partial_x \\Psi \\,-\\, \\Psi\\,\\partial_x \\Psi^*\\big)."}
      </MathBlock>
      <p>Define the probability current</p>
      <MathBlock>
        {"j(x,t) \\;\\equiv\\; \\frac{\\hbar}{2 m\\,i}\\,\\Big(\\Psi^*\\,\\partial_x \\Psi \\,-\\, \\Psi\\,\\partial_x \\Psi^*\\Big) \\;=\\; \\frac{\\hbar}{m}\\,\\mathrm{Im}\\!\\big(\\Psi^*\\,\\partial_x \\Psi\\big)."}
      </MathBlock>
      <p>Then we have the continuity equation</p>
      <MathBlock>
        {"\\boxed{\\;\\frac{\\partial \\rho}{\\partial t} \\;+\\; \\frac{\\partial j}{\\partial x} \\;=\\; 0.\\;}"}
      </MathBlock>
      <p>
        Integrating over all <MathInline>{"x"}</MathInline> and using{" "}
        <MathInline>{"\\Psi \\to 0"}</MathInline> at infinity (any normalizable
        function must decay there) kills{" "}
        <MathInline>{"j"}</MathInline> at the boundary, so
      </p>
      <MathBlock>
        {"\\frac{d}{dt}\\int_{-\\infty}^{\\infty}|\\Psi(x,t)|^2\\, dx \\;=\\; -\\,\\big[\\,j(x,t)\\,\\big]_{-\\infty}^{+\\infty} \\;=\\; 0."}
      </MathBlock>
      <p>
        Normalize once at <MathInline>{"t=0"}</MathInline>, normalized for
        ever.
      </p>

      <h2>Step 2 — Expectation values and momentum representation</h2>
      <p>
        For an observable represented by an operator{" "}
        <MathInline>{"\\hat{A}"}</MathInline> we define
      </p>
      <MathBlock>
        {"\\langle \\hat{A}\\rangle \\;\\equiv\\; \\int_{-\\infty}^{\\infty} \\Psi^*(x,t)\\,\\hat{A}\\,\\Psi(x,t)\\, dx."}
      </MathBlock>
      <p>
        In particular{" "}
        <MathInline>{"\\langle x\\rangle = \\int \\Psi^*\\, x\\,\\Psi\\, dx"}</MathInline>.
        The corresponding formula for the average momentum is{" "}
        <em>not</em>{" "}
        <MathInline>{"\\int \\Psi^*\\, m\\,(d x/dt)\\,\\Psi"}</MathInline> —
        there is no operator{" "}
        <MathInline>{"d/dt"}</MathInline> on the wave function. Instead we
        proceed by computing{" "}
        <MathInline>{"d\\langle x\\rangle/dt"}</MathInline> and reading off
        the right operator.
      </p>

      <h3>How <MathInline>{"\\hat{p} = -i\\hbar\\,\\partial_x"}</MathInline> appears</h3>
      <p>Differentiate <MathInline>{"\\langle x\\rangle"}</MathInline>:</p>
      <MathBlock>
        {"\\frac{d\\langle x\\rangle}{dt} \\;=\\; \\int x\\,\\frac{\\partial |\\Psi|^2}{\\partial t}\\, dx \\;=\\; -\\int x\\,\\frac{\\partial j}{\\partial x}\\, dx,"}
      </MathBlock>
      <p>
        using the continuity equation. Integrate by parts (the boundary term
        vanishes) and substitute <MathInline>{"j"}</MathInline>:
      </p>
      <MathBlock>
        {"\\frac{d\\langle x\\rangle}{dt} \\;=\\; \\int j\\, dx \\;=\\; \\int \\frac{\\hbar}{2 m\\,i}\\,\\big(\\Psi^*\\,\\partial_x \\Psi - \\Psi\\,\\partial_x \\Psi^*\\big)\\, dx."}
      </MathBlock>
      <p>
        Integrate the second term by parts so both terms have{" "}
        <MathInline>{"\\Psi^*"}</MathInline> on the left:
      </p>
      <MathBlock>
        {"\\int \\Psi\\,\\partial_x \\Psi^*\\, dx \\;=\\; -\\int \\Psi^*\\,\\partial_x \\Psi\\, dx \\quad\\Longrightarrow\\quad \\frac{d\\langle x\\rangle}{dt} \\;=\\; \\frac{1}{m}\\int \\Psi^*\\,(-i\\hbar\\,\\partial_x)\\,\\Psi\\, dx."}
      </MathBlock>
      <p>
        Comparing with the classical{" "}
        <MathInline>{"m\\,\\dot{\\langle x\\rangle} = \\langle p\\rangle"}</MathInline>{" "}
        forces us to identify
      </p>
      <MathBlock>
        {"\\boxed{\\;\\hat{p} \\;=\\; -\\,i\\,\\hbar\\,\\frac{\\partial}{\\partial x}.\\;}"}
      </MathBlock>

      <h2>Step 3 — Ehrenfest&apos;s theorem</h2>
      <p>
        For any operator <MathInline>{"\\hat{A}"}</MathInline> that does not
        depend explicitly on time,
      </p>
      <MathBlock>
        {"\\frac{d\\langle \\hat{A}\\rangle}{dt} \\;=\\; \\int \\Big[(\\partial_t \\Psi^*)\\,\\hat{A}\\,\\Psi + \\Psi^*\\,\\hat{A}\\,(\\partial_t \\Psi)\\Big]\\, dx."}
      </MathBlock>
      <p>
        Replace <MathInline>{"\\partial_t \\Psi"}</MathInline> by{" "}
        <MathInline>{"(1/i\\hbar)\\,\\hat{H}\\,\\Psi"}</MathInline> and use{" "}
        <MathInline>{"\\hat{H}^\\dagger = \\hat{H}"}</MathInline> on the
        conjugate:
      </p>
      <MathBlock>
        {"\\frac{d\\langle \\hat{A}\\rangle}{dt} \\;=\\; \\frac{1}{i\\hbar}\\,\\langle [\\hat{A}, \\hat{H}]\\rangle\\qquad(\\text{Ehrenfest})."}
      </MathBlock>
      <p>
        Specializing to{" "}
        <MathInline>{"\\hat{A} = \\hat{x}"}</MathInline> with{" "}
        <MathInline>{"\\hat{H} = \\hat{p}^2/(2m) + V"}</MathInline> and using{" "}
        <MathInline>{"[\\hat{x}, \\hat{p}^2] = 2 i\\hbar\\, \\hat{p}"}</MathInline>{" "}
        recovers <MathInline>{"m\\,\\dot{\\langle x\\rangle} = \\langle \\hat{p}\\rangle"}</MathInline>.
        Taking{" "}
        <MathInline>{"\\hat{A} = \\hat{p}"}</MathInline> and{" "}
        <MathInline>{"[\\hat{p}, V] = -i\\hbar\\, V'(x)"}</MathInline> gives
      </p>
      <MathBlock>
        {"\\frac{d\\langle \\hat{p}\\rangle}{dt} \\;=\\; -\\,\\langle V'(\\hat{x})\\rangle,"}
      </MathBlock>
      <p>
        the quantum analogue of Newton&apos;s second law (Ehrenfest&apos;s
        theorem). The averages obey the classical equations of motion — but
        the right-hand side is <MathInline>{"\\langle V'(\\hat{x})\\rangle"}</MathInline>,
        not <MathInline>{"V'(\\langle \\hat{x}\\rangle)"}</MathInline>, which
        is why quantum dynamics differs from classical for wide wave packets.
      </p>

      <h2>Step 4 — The position–momentum uncertainty principle</h2>
      <p>
        Define standard deviations{" "}
        <MathInline>{"\\sigma_A^2 = \\langle (\\hat{A} - \\langle \\hat{A}\\rangle)^2\\rangle"}</MathInline>.
        A short derivation in Week 5 (Cauchy–Schwarz on the inner product)
        shows
      </p>
      <MathBlock>
        {"\\sigma_x\\,\\sigma_p \\;\\ge\\; \\tfrac{1}{2}\\,|\\langle [\\hat{x}, \\hat{p}]\\rangle| \\;=\\; \\tfrac{\\hbar}{2}."}
      </MathBlock>
      <p>
        For now, the canonical commutator is the key ingredient. Compute it
        directly on a test function{" "}
        <MathInline>{"f(x)"}</MathInline>:
      </p>
      <MathBlock>
        {"(\\hat{x}\\hat{p} - \\hat{p}\\hat{x})\\,f \\;=\\; -\\,i\\hbar\\,\\big[x\\,f' - (x\\,f)'\\big] \\;=\\; -\\,i\\hbar\\,\\big[x\\,f' - f - x\\,f'\\big] \\;=\\; i\\hbar\\,f."}
      </MathBlock>
      <p>So</p>
      <MathBlock>
        {"\\boxed{\\;[\\hat{x},\\hat{p}] \\;=\\; i\\,\\hbar.\\;}"}
      </MathBlock>
      <p>
        Equality in the uncertainty inequality is achieved by Gaussian wave
        packets — we will check that explicitly in Week 3.
      </p>

      <h2>Road map</h2>
      <p>
        Weeks 2–3 solve the Schrödinger equation for the textbook 1D
        potentials. Week 5 rebuilds the same machinery in Hilbert-space
        language. Weeks 6–7 go to 3D, hydrogen, and angular momentum. Weeks
        4 and 8 are exam-style problem solving.
      </p>
    </>
  )
}
