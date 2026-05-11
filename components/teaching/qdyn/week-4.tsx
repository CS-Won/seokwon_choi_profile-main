import { MathBlock, MathInline } from "./math"
import { RandomizedMeasurementCircuit } from "./diagrams"

export default function Week4() {
  return (
    <>
      <p>
        This week we want to measure quantum entanglement directly. Entanglement
        entropy tells us how fast information spreads after a quench — basically the
        cleanest single-number summary of &quot;how quantum&quot; the dynamics is.
        On a real noisy device this turns out to be tricky, so we lean on two
        ingredients: a classical baseline from <strong>tensor networks (MPS)</strong>
        , and a measurement protocol called <strong>randomized measurement (RM)</strong>{" "}
        on the quantum side.
      </p>

      <h3>1. Defining entanglement entropy</h3>
      <p>
        Take a pure state{" "}
        <MathInline>{`|\\psi\\rangle`}</MathInline> on <MathInline>{`N`}</MathInline>{" "}
        qubits, density matrix{" "}
        <MathInline>{`\\rho = |\\psi\\rangle\\langle\\psi|`}</MathInline>. Split the
        chain into a subsystem <MathInline>{`A`}</MathInline> with{" "}
        <MathInline>{`L`}</MathInline> qubits and its complement with{" "}
        <MathInline>{`M = N - L`}</MathInline> qubits. The reduced density matrix of{" "}
        <MathInline>{`A`}</MathInline> is:
      </p>

      <MathBlock>{`\\rho_{L} \\;=\\; \\text{Tr}_{M}\\,\\rho`}</MathBlock>

      <p>
        The Rényi entropy of order <MathInline>{`n`}</MathInline> is:
      </p>

      <MathBlock numbered label="7">{`S_{L}^{(n)} \\;=\\; \\frac{1}{1-n}\\,\\log\\!\\big[\\,\\text{Tr}(\\rho_{L}^{\\,n})\\,\\big]`}</MathBlock>

      <p>
        As <MathInline>{`n \\to 1`}</MathInline>, this turns into the more familiar
        von Neumann entropy:
      </p>

      <MathBlock>{`S_{L}^{\\text{vN}} \\;=\\; -\\text{Tr}\\!\\left(\\rho_{L}\\,\\log\\rho_{L}\\right)`}</MathBlock>

      <p>
        We focus on <MathInline>{`n = 2`}</MathInline>. Why? Because{" "}
        <MathInline>{`\\text{Tr}(\\rho_L^2)`}</MathInline> is the purity of the
        subsystem, and there&apos;s a known way to estimate it from random
        measurements on a real quantum device.
      </p>

      <h3>2. Why this is hard on real hardware</h3>
      <p>
        The most direct way to get <MathInline>{`\\rho_L`}</MathInline> is quantum
        state tomography. The problem: the number of measurements needed grows{" "}
        <em>exponentially</em> with the number of qubits. So tomography is out for
        anything bigger than maybe 10 qubits.
      </p>
      <p>
        A nicer trick is SWAP-based many-body interference (SWAP-MBI): make two
        copies of the state, add one ancilla qubit, and run a swap test. The catch
        is connectivity — the ancilla has to talk to every other qubit in the
        subsystem. On superconducting hardware where each qubit only neighbors a few
        others, this gets impractical fast.
      </p>

      <h3>3. The randomized measurement (RM) protocol</h3>
      <p>
        The clean alternative is RM. The idea is simple in words: apply a random
        single-qubit unitary to each qubit in the subsystem, then measure in the
        computational basis. Repeat with many independent random unitaries, and
        combine the statistics in a specific way to extract{" "}
        <MathInline>{`\\text{Tr}(\\rho_A^2)`}</MathInline>.
      </p>

      <RandomizedMeasurementCircuit />

      <p>One round of RM looks like this:</p>
      <ol>
        <li>
          Prepare the state <MathInline>{`\\rho`}</MathInline> with our Trotter
          circuit.
        </li>
        <li>
          For each qubit <MathInline>{`i \\in A`}</MathInline>, sample a single-qubit
          unitary <MathInline>{`U_i^{(2)}`}</MathInline> from the circular unitary
          ensemble (CUE), and apply it.
        </li>
        <li>
          Measure all qubits in <MathInline>{`A`}</MathInline> in the Z basis. Build
          up the bitstring distribution{" "}
          <MathInline>{`P_{\\hat U_a}(j_L)`}</MathInline>.
        </li>
        <li>
          Repeat with <MathInline>{`N_U`}</MathInline> different random unitaries.
        </li>
      </ol>

      <h3>4. The purity formula</h3>
      <p>
        For one fixed random unitary instance{" "}
        <MathInline>{`\\hat U_a`}</MathInline>, compute:
      </p>

      <MathBlock>{`X_a \\;=\\; 2^{L}\\sum_{j_L,\\,j_L'} (-2)^{-D[j_L, j_L']}\\, P_{\\hat U_a}(j_L)\\,P_{\\hat U_a}(j_L')`}</MathBlock>

      <p>
        where <MathInline>{`D[j_L, j_L']`}</MathInline> is the{" "}
        <strong>Hamming distance</strong> — the number of bits that differ between
        the two outcome strings:
      </p>

      <MathBlock>{`D[j_L, j_L'] \\;\\equiv\\; \\#\\{\\,i \\in A \\;|\\; s_i \\ne s_i'\\,\\}`}</MathBlock>

      <p>
        Average over the <MathInline>{`N_U`}</MathInline> random unitaries:
      </p>

      <MathBlock numbered label="8">{`\\overline X \\;=\\; \\frac{1}{N_U}\\sum_{a=1}^{N_U} X_a \\;\\;\\xrightarrow[\\;N_U \\to \\infty\\;]{}\\;\\; \\text{Tr}(\\rho_A^{2})`}</MathBlock>

      <p>And the Rényi-2 entropy comes from a final log:</p>

      <MathBlock>{`S^{(2)} \\;=\\; -\\log\\,\\overline X`}</MathBlock>

      <p>
        Intuitively: bitstrings that are nearly identical contribute positively to{" "}
        <MathInline>{`X_a`}</MathInline>, while strings that look very different
        cancel. This Hamming-distance-weighted correlation is exactly what you would
        compute if you had two virtual copies of the state and ran a SWAP test on
        them — it&apos;s the same quantity by a different route.
      </p>

      <h3>5. The classical baseline (MPS-TDVP)</h3>
      <p>
        We still need a &quot;ground truth&quot; to compare against. Direct
        simulation works for <MathInline>{`N \\le 20`}</MathInline> or so. But just
        a 60-qubit state in double precision would need about{" "}
        <MathInline>{`\\sim 16`}</MathInline> exabytes of memory, which is, you
        know, not realistic.
      </p>
      <p>
        So we use <strong>matrix product states (MPS)</strong>: write the
        wavefunction as a chain of small tensors connected by bonds of dimension{" "}
        <MathInline>{`\\chi`}</MathInline>. Time evolution is then done with the{" "}
        <strong>time-dependent variational principle (TDVP)</strong>, which handles
        both short- and long-range interactions. We use{" "}
        <MathInline>{`\\delta t = 0.1`}</MathInline>,{" "}
        <MathInline>{`\\chi_{\\max} = 1000`}</MathInline>, and a truncation error of{" "}
        <MathInline>{`10^{-12}`}</MathInline>. That handles up to{" "}
        <MathInline>{`N = 104`}</MathInline> comfortably.
      </p>

      <h3>
        6. What we actually measured (at <MathInline>{`t = 5.0`}</MathInline>)
      </h3>
      <p>
        On the device, the RM run uses{" "}
        <MathInline>{`N_U = 60`}</MathInline> random unitaries with TREX+DD+PT+ZNE
        on top — 1,800 circuit instances total, packed into 900 parallel pairs using
        Quantum Multi-Programming (QMP). The Rényi-2 entropy at{" "}
        <MathInline>{`t = 5.0`}</MathInline> comes out as:
      </p>
      <ul>
        <li>
          Direct (QuSpin): <MathInline>{`S^{(2)} \\approx 2.07465`}</MathInline>
        </li>
        <li>
          Qiskit statevector: <MathInline>{`\\approx 2.11936`}</MathInline> (2.16%
          off Direct)
        </li>
        <li>
          Qiskit RM protocol: <MathInline>{`\\approx 2.04836`}</MathInline> (3.35%
          off statevector)
        </li>
        <li>
          <strong>ibm_marrakesh</strong>:{" "}
          <MathInline>{`\\approx 2.08378`}</MathInline> (1.73% off Qiskit RM)
        </li>
      </ul>
      <p>
        So the entropy measured on a real, noisy quantum machine agrees with the
        noise-free classical simulation within a couple of percent. That&apos;s a
        decent result for a deep many-body circuit on hardware.
      </p>
      <p>
        Quick note: SM doesn&apos;t work for this measurement. The RM protocol ends
        with random <MathInline>{`SU(2)`}</MathInline> unitaries, which means
        there&apos;s no easy &quot;ideal answer&quot; for the test circuit. So here
        we only use ZNE.
      </p>

      <h3>Recap</h3>
      <ul>
        <li>
          Rényi entropy:{" "}
          <MathInline>{`S_{L}^{(n)} = \\tfrac{1}{1-n}\\log\\,\\text{Tr}(\\rho_L^n)`}</MathInline>
        </li>
        <li>
          Tomography and SWAP-MBI don&apos;t scale, so we use the RM protocol
          instead.
        </li>
        <li>
          Key formula:{" "}
          <MathInline>{`\\overline X = 2^L \\sum (-2)^{-D}\\,P\\,P' \\to \\text{Tr}(\\rho_A^2)`}</MathInline>,
          then <MathInline>{`S^{(2)} = -\\log\\overline X`}</MathInline>.
        </li>
        <li>
          MPS-TDVP is our classical baseline for the bigger systems.
        </li>
      </ul>
    </>
  )
}
