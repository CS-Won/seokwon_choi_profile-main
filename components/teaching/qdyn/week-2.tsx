import { MathBlock, MathInline } from "./math"
import { TrotterCircuit, UnitBlockCircuit } from "./diagrams"

export default function Week2() {
  return (
    <>
      <p>
        Last week we wrote down the XXZ Hamiltonian. Now we want to turn the time
        evolution
      </p>

      <MathBlock>{`U(t) \\;=\\; e^{-iHt}`}</MathBlock>

      <p>
        into a sequence of quantum gates. The catch is that{" "}
        <MathInline>{`H`}</MathInline> is a sum of two-qubit terms that don&apos;t
        commute, so we can&apos;t just take the exponential of each piece and call it
        a day. That&apos;s where <strong>Trotter–Suzuki</strong> comes in.
      </p>

      <h3>1. Trotter–Suzuki, first and second order</h3>
      <p>
        Split <MathInline>{`H = \\sum_n H_n`}</MathInline> into pieces. Then for a
        small time step <MathInline>{`\\delta t = t/r`}</MathInline>:
      </p>

      <MathBlock>{`U(t) \\;\\approx\\; \\left(\\prod_{n} e^{-iH_n\\delta t}\\right)^{r} \\quad \\text{(first order)}`}</MathBlock>

      <p>The symmetric second-order version sandwiches the product:</p>

      <MathBlock numbered label="3">{`U_{\\text{tot}}(t) \\;\\approx\\; \\bigg(\\, \\prod_{n=1}^{M} e^{-iH_n\\,t/2r} \\;\\; \\prod_{n=M}^{1} e^{-iH_n\\,t/2r} \\,\\bigg)^{r}`}</MathBlock>

      <p>
        For a <MathInline>{`p`}</MathInline>-th order scheme the error per total run
        scales as <MathInline>{`O\\!\\big(t\\,(\\delta t)^{p}\\big)`}</MathInline>. As
        long as <MathInline>{`\\delta t < 1`}</MathInline>, second order beats first
        order. In this work we use{" "}
        <MathInline>{`\\delta t = 0.5`}</MathInline>.
      </p>

      <h3>2. The building block</h3>
      <p>
        Each two-qubit piece of <MathInline>{`H`}</MathInline> gives the same shape,
        so we define a single building block:
      </p>

      <MathBlock numbered label="4">{`U_j(\\vec\\theta) \\;=\\; \\exp\\!\\left[ -i\\!\\left( \\tfrac{\\theta_x}{2}\\sigma_j^{x}\\sigma_{j+1}^{x} \\;+\\; \\tfrac{\\theta_y}{2}\\sigma_j^{y}\\sigma_{j+1}^{y} \\;+\\; \\tfrac{\\theta_z}{2}\\sigma_j^{z}\\sigma_{j+1}^{z} \\right) \\right]`}</MathBlock>

      <p>where the angles come from the Trotter step size:</p>

      <MathBlock>{`\\vec\\theta \\;=\\; \\Big(\\, \\tfrac{J_1}{2}\\,\\delta t,\\; \\tfrac{J_1}{2}\\,\\delta t,\\; \\tfrac{J_1}{2}\\,\\Delta\\,\\delta t \\,\\Big)`}</MathBlock>

      <h3>3. Brick-wall layout</h3>
      <p>
        You can&apos;t fire two-qubit gates on every neighbor at once, because they
        share qubits. So we alternate two kinds of layers:
      </p>
      <ul>
        <li>
          Even layer: gates on pairs{" "}
          <MathInline>{`(q_0, q_1), (q_2, q_3), \\dots`}</MathInline>
        </li>
        <li>
          Odd layer: gates on pairs{" "}
          <MathInline>{`(q_1, q_2), (q_3, q_4), \\dots`}</MathInline>
        </li>
      </ul>
      <p>
        Stacking them gives a brick-wall pattern. With the
        <strong> optimized second-order Trotter</strong> from Chowdhury et al.
        (2024) you can merge neighboring even layers between adjacent Trotter steps,
        which drops the total layer count to{" "}
        <strong>2M + 1</strong> for <MathInline>{`M`}</MathInline> Trotter steps.
        First-order Trotter uses 2M layers, so optimized second-order costs just one
        extra layer for much better accuracy.
      </p>

      <TrotterCircuit />

      <p>
        Notice the trick: the inner even layers use angle{" "}
        <MathInline>{`\\theta`}</MathInline>, while the first and last ones use{" "}
        <MathInline>{`\\theta/2`}</MathInline>. That &quot;half on the edges&quot;
        is what makes the scheme symmetric and second-order accurate.
      </p>

      <h3>4. Compiling the building block to native gates</h3>
      <p>
        IBM Qiskit gives us <code>RZZGate</code> for free. The XX and YY versions
        come from basis-change tricks:
      </p>

      <MathBlock>{`R_{ZZ}(\\theta) \\;=\\; \\text{CX}\\cdot (I \\otimes R_z(\\theta))\\cdot \\text{CX}`}</MathBlock>
      <MathBlock>{`R_{XX}(\\theta) \\;=\\; (H \\otimes H)\\, R_{ZZ}(\\theta)\\, (H \\otimes H)`}</MathBlock>
      <MathBlock>{`R_{YY}(\\theta) \\;=\\; (\\sqrt{\\sigma_x} \\otimes \\sqrt{\\sigma_x})\\, R_{ZZ}(\\theta)\\, (\\sqrt{\\sigma_x}^{\\dagger} \\otimes \\sqrt{\\sigma_x}^{\\dagger})`}</MathBlock>

      <p>
        Here{" "}
        <MathInline>{`\\sqrt{\\sigma_x} = \\tfrac{1}{2}\\begin{pmatrix}1+i & 1-i \\\\ 1-i & 1+i\\end{pmatrix}`}</MathInline>{" "}
        and{" "}
        <MathInline>{`R_z(\\theta) = \\text{diag}(e^{-i\\theta/2}, e^{i\\theta/2})`}</MathInline>.
        If you just chain those three together you end up with 6 CXs and depth 13.
        With a bit of circuit identity work (see the appendix of
        Zhang–Yu–Hao–Korepin 2024) you can squeeze it down to{" "}
        <strong>3 CXs and depth 7</strong>.
      </p>

      <UnitBlockCircuit />

      <h3>5. How quickly the circuit grows</h3>
      <p>
        Each layer has about <MathInline>{`N/2`}</MathInline> bricks and each brick
        costs 3 CXs. So for a 20-qubit, 10-step run we get roughly{" "}
        <MathInline>{`3 \\times \\tfrac{20}{2} \\times (2\\cdot 10 + 1) \\sim 600`}</MathInline>{" "}
        CXs. At 104 qubits the number jumps past <strong>3,000 CXs</strong>{" "}
        — the actual table later in the course shows 3,246 CXs at{" "}
        <MathInline>{`N = 104`}</MathInline>, 10 steps.
      </p>
      <p>
        So you can see the tension: making circuits shorter helps, but at scale we
        still need a way to clean up the leftover noise. That&apos;s the topic of
        next week — quantum error mitigation.
      </p>

      <h3>Recap</h3>
      <ul>
        <li>
          Split <MathInline>{`e^{-iHt}`}</MathInline> with second-order Trotter, lay
          it out brick-wall style, get <MathInline>{`2M + 1`}</MathInline> layers.
        </li>
        <li>
          The brick is{" "}
          <MathInline>{`U_j(\\vec\\theta)`}</MathInline> with angles{" "}
          <MathInline>{`(\\tfrac{J_1}{2}\\delta t, \\tfrac{J_1}{2}\\delta t, \\tfrac{J_1}{2}\\Delta\\delta t)`}</MathInline>.
        </li>
        <li>
          Compile each brick down to 3 CXs / depth 7.
        </li>
        <li>
          Even with the optimized layout, big systems push past 3,000 CXs — so we
          really need QEM.
        </li>
      </ul>
    </>
  )
}
