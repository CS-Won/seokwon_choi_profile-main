import { MathBlock, MathInline } from "./math"
import { NeelStateDiagram, PhaseDiagram } from "./diagrams"

export default function Week1() {
  return (
    <>
      <p>
        The model we use this whole course is the <strong>1D XXZ spin chain</strong>.
        The &quot;XXZ&quot; just means the coupling along x and y is the same, and z
        gets its own knob <MathInline>{`\\Delta`}</MathInline>. This model shows up
        everywhere in quantum many-body physics because it&apos;s simple to write
        down, it&apos;s integrable, and it has nontrivial phases — perfect for a
        physics course that also wants to run on real qubits laid out in a line.
      </p>

      <h3>1. The Hamiltonian</h3>
      <p>
        With spin-1/2 operators{" "}
        <MathInline>{`S_i^{x,y,z}`}</MathInline>:
      </p>

      <MathBlock numbered label="1">{`H \\;=\\; J_1 \\sum_{i=1}^{N}\\Big(\\, S_i^{x} S_{i+1}^{x} \\;+\\; S_i^{y} S_{i+1}^{y} \\;+\\; \\Delta\\, S_i^{z} S_{i+1}^{z}\\,\\Big)`}</MathBlock>

      <p>
        <MathInline>{`J_1 > 0`}</MathInline> is the antiferromagnetic
        nearest-neighbor coupling, and <MathInline>{`\\Delta`}</MathInline> is the
        anisotropy. When <MathInline>{`\\Delta = 1`}</MathInline> you get the regular
        isotropic Heisenberg model; when <MathInline>{`\\Delta = 0`}</MathInline> it
        reduces to XY, which is basically free fermions. The spin operators obey
        SU(2):
      </p>

      <MathBlock>{`[\\,S_i^{\\alpha},\\,S_j^{\\beta}\\,] \\;=\\; i\\,\\delta_{ij}\\,\\epsilon^{\\alpha\\beta\\gamma}\\,S_i^{\\gamma}`}</MathBlock>

      <p>
        For a quantum computer we want Paulis instead of spins, so we use{" "}
        <MathInline>{`S_i^\\alpha = \\tfrac{1}{2}\\sigma_i^\\alpha`}</MathInline> and
        rewrite the Hamiltonian as:
      </p>

      <MathBlock numbered label="2">{`H \\;=\\; \\frac{J_1}{4} \\sum_{j=0}^{N-1}\\Big(\\, \\sigma_j^{x}\\sigma_{j+1}^{x} \\;+\\; \\sigma_j^{y}\\sigma_{j+1}^{y} \\;+\\; \\Delta\\,\\sigma_j^{z}\\sigma_{j+1}^{z} \\,\\Big)`}</MathBlock>

      <p>
        This is the form we actually turn into gates next week. The two-qubit
        building block <MathInline>{`U_j(\\vec\\theta)`}</MathInline> we&apos;ll
        define later falls right out of this expression.
      </p>

      <h3>
        2. Phases as <MathInline>{`\\Delta`}</MathInline> changes
      </h3>
      <p>The ground state of the XXZ chain has three different flavors:</p>

      <ul>
        <li>
          <MathInline>{`\\Delta < -1`}</MathInline>: ferromagnetic — all spins want
          to point the same way.
        </li>
        <li>
          <MathInline>{`-1 < \\Delta < 1`}</MathInline>: critical (gapless, described
          by a 1+1D CFT with central charge{" "}
          <MathInline>{`c = 1`}</MathInline>).
        </li>
        <li>
          <MathInline>{`\\Delta > 1`}</MathInline>: antiferromagnetic — spins want to
          alternate (Néel ordering).
        </li>
      </ul>

      <PhaseDiagram />

      <p>
        For this course we sit at <MathInline>{`\\Delta = 0.5`}</MathInline> — well
        inside the critical region. That&apos;s a nice spot because the dynamics
        after a quench are rich (entanglement grows fast) but still tractable enough
        that classical methods give us a clean reference.
      </p>

      <h3>3. The initial state — Néel</h3>
      <p>
        To see quench dynamics we need a starting state. The simplest one with a
        clear antiferromagnetic flavor is the Néel state:
      </p>

      <MathBlock>{`|\\psi(0)\\rangle \\;=\\; |\\uparrow\\downarrow\\uparrow\\downarrow \\cdots \\uparrow\\downarrow\\rangle`}</MathBlock>

      <p>
        On a circuit this is basically free: just apply an X gate to every odd
        qubit. The staggered magnetization (defined below) starts at{" "}
        <MathInline>{`-\\tfrac{1}{2}`}</MathInline>, so we have a clean signal that
        drops toward zero as time goes on.
      </p>

      <NeelStateDiagram />

      <h3>4. The observable we track</h3>
      <p>
        The standard one-number summary of the XXZ chain&apos;s dynamics is the{" "}
        <strong>staggered magnetization</strong>:
      </p>

      <MathBlock numbered label="6">{`\\hat O_{M_{st}} \\;=\\; \\frac{1}{N}\\sum_{i=1}^{N}(-1)^{i}\\,S_i^{z}`}</MathBlock>

      <p>
        Because the alternating sign <MathInline>{`(-1)^i`}</MathInline> picks up the
        Néel pattern, this observable starts large and then decays toward 0 as the
        chain &quot;forgets&quot; its initial pattern. Comparing this curve from a
        noisy IBM machine against a clean Qiskit/QuSpin simulation is exactly how
        we&apos;ll judge our QEM techniques later.
      </p>

      <h3>5. Units</h3>
      <p>
        We use units with <MathInline>{`\\hbar = 1`}</MathInline> and{" "}
        <MathInline>{`J_1 = 1`}</MathInline>, so time is dimensionless. If you want
        seconds, use <MathInline>{`t \\to \\hbar t / J_1`}</MathInline>. For a real
        magnet with <MathInline>{`J_1 \\sim`}</MathInline> 1 eV that ends up around{" "}
        <MathInline>{`10^{-15}`}</MathInline> seconds — i.e. atomic timescales.
      </p>

      <h3>Recap</h3>
      <ul>
        <li>
          Model:{" "}
          <MathInline>{`H = \\tfrac{J_1}{4}\\sum_j(\\sigma_j^x\\sigma_{j+1}^x + \\sigma_j^y\\sigma_{j+1}^y + \\Delta\\sigma_j^z\\sigma_{j+1}^z)`}</MathInline>
        </li>
        <li>
          Parameters: <MathInline>{`J_1 = 1,\\; \\Delta = 0.5`}</MathInline>{" "}
          (critical phase)
        </li>
        <li>
          Initial state:{" "}
          <MathInline>{`|\\uparrow\\downarrow\\cdots\\rangle`}</MathInline>
        </li>
        <li>
          Observable: <MathInline>{`\\hat O_{M_{st}}`}</MathInline>
        </li>
      </ul>
      <p>Next week we turn this into a circuit.</p>
    </>
  )
}
