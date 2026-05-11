import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { QuantumVsInspiredFlow } from "./diagrams"

export default function Week3() {
  return (
    <>
      <p>
        Kerenidis and Prakash (2016) gave the first quantum recommendation
        algorithm whose runtime scales as{" "}
        <MathInline>{`\\mathrm{poly}(k)\\,\\mathrm{polylog}(mn)`}</MathInline>{" "}
        for an <MathInline>{`m \\times n`}</MathInline> preference matrix{" "}
        <MathInline>{`T`}</MathInline> with a good rank-
        <MathInline>{`k`}</MathInline> approximation. The punchline: you can{" "}
        <strong>sample a good recommendation</strong> for any user without ever
        reconstructing the full approximate matrix. We&apos;ll go through each
        ingredient step by step.
      </p>

      <h3>1. The setup</h3>
      <p>
        Let <MathInline>{`T \\in \\mathbb R^{m \\times n}`}</MathInline> be the
        (unknown) preference matrix, and{" "}
        <MathInline>{`\\widehat T \\in \\mathbb R^{m \\times n}`}</MathInline>{" "}
        the matrix of <strong>known</strong> entries (zeros where unknown). The
        modeling assumption is the usual low-rank one:
      </p>

      <MathBlock>{`\\|T - T_k\\|_F \\;\\leq\\; \\varepsilon\\,\\|T\\|_F`}</MathBlock>

      <p>
        for some small constant rank{" "}
        <MathInline>{`k`}</MathInline> and tolerance{" "}
        <MathInline>{`\\varepsilon`}</MathInline>. A &quot;good
        recommendation&quot; for user{" "}
        <MathInline>{`i`}</MathInline> is an index{" "}
        <MathInline>{`j`}</MathInline> where{" "}
        <MathInline>{`T_{k,\\,i j}`}</MathInline> is large.
      </p>

      <h3>2. The BST data structure — fast state preparation</h3>
      <p>
        The first ingredient is a clever classical data structure. For each row{" "}
        <MathInline>{`i`}</MathInline> of <MathInline>{`\\widehat T`}</MathInline>,
        store a binary search tree (BST) whose leaves hold the entries{" "}
        <MathInline>{`\\widehat T_{i j}^2`}</MathInline> and whose internal
        nodes hold partial sums. Then maintain one more tree over the row norms{" "}
        <MathInline>{`\\|\\widehat T_{i,\\,\\cdot}\\|^2`}</MathInline>.
      </p>
      <p>
        With this structure (Kerenidis &amp; Prakash, 2016, Section 3):
      </p>
      <ul>
        <li>
          Reading or updating an entry costs{" "}
          <MathInline>{`O(\\log^2(mn))`}</MathInline>.
        </li>
        <li>
          A quantum algorithm can prepare any row state{" "}
          <MathInline>{`|\\widehat T_{i,\\,\\cdot}\\rangle = \\frac{1}{\\|\\widehat T_{i,\\,\\cdot}\\|}\\sum_j \\widehat T_{ij}\\,|j\\rangle`}</MathInline>{" "}
          in <MathInline>{`O(\\mathrm{polylog}(mn))`}</MathInline> time.
        </li>
      </ul>
      <p>
        The amplitudes are <MathInline>{`\\widehat T_{ij}/\\|\\widehat T_{i,\\,\\cdot}\\|`}</MathInline>:
        measuring this state gives column index{" "}
        <MathInline>{`j`}</MathInline> with probability{" "}
        <MathInline>{`\\widehat T_{ij}^2 / \\|\\widehat T_{i,\\,\\cdot}\\|^2`}</MathInline>{" "}
        — exactly an <MathInline>{`\\ell^2`}</MathInline>-sample of row{" "}
        <MathInline>{`i`}</MathInline>. This is the same statistic FKV used
        classically (Frieze, Kannan, &amp; Vempala, 2004).
      </p>

      <h3>3. Quantum singular value estimation (QSVE)</h3>
      <p>
        Now we want phases that depend on singular values{" "}
        <MathInline>{`\\sigma_j`}</MathInline> of{" "}
        <MathInline>{`\\widehat T`}</MathInline>. Kerenidis and Prakash build a
        unitary block-encoding of{" "}
        <MathInline>{`\\widehat T/\\|\\widehat T\\|_F`}</MathInline> from the BST
        and then apply phase estimation to it.
      </p>

      <p>
        Write the SVD{" "}
        <MathInline>{`\\widehat T = \\sum_j \\sigma_j\\,u_j\\,v_j^\\top`}</MathInline>.
        For any input state{" "}
        <MathInline>{`|x\\rangle = \\sum_j \\alpha_j |v_j\\rangle`}</MathInline>{" "}
        expanded in right singular vectors, QSVE produces
      </p>

      <MathBlock>{`|x\\rangle\\,|0\\rangle \\;\\xrightarrow{\\,\\mathrm{QSVE}\\,}\\; \\sum_j \\alpha_j\\,|v_j\\rangle\\,|\\tilde\\sigma_j\\rangle`}</MathBlock>

      <p>
        i.e. it tags each singular component with an estimate{" "}
        <MathInline>{`\\tilde\\sigma_j`}</MathInline> of{" "}
        <MathInline>{`\\sigma_j`}</MathInline>, with precision{" "}
        <MathInline>{`\\delta`}</MathInline> in time{" "}
        <MathInline>{`O(\\mathrm{polylog}(mn)/\\delta)`}</MathInline>. This is
        the singular value version of the HHL phase-estimation step from
        Week&nbsp;1.
      </p>

      <h3>4. Projecting onto the &quot;large singular value&quot; subspace</h3>
      <p>
        Once we have the singular value labels in superposition, we can keep
        only those above a threshold{" "}
        <MathInline>{`\\theta`}</MathInline>. Apply a controlled rotation that
        marks an ancilla as 1 iff{" "}
        <MathInline>{`\\tilde\\sigma_j \\geq \\theta`}</MathInline>, uncompute
        the singular value register, and post-select on the marker. The result:
      </p>

      <MathBlock>{`|x\\rangle \\;\\xrightarrow{\\,\\mathrm{project}\\,}\\; |x_{\\geq\\theta}\\rangle \\;:=\\; \\frac{1}{\\|\\Pi_{\\geq\\theta}\\,x\\|}\\,\\sum_{j:\\,\\sigma_j \\geq \\theta}\\alpha_j\\,|v_j\\rangle`}</MathBlock>

      <p>
        In words: this is the orthogonal projection of{" "}
        <MathInline>{`x`}</MathInline> onto the span of right singular vectors
        whose singular values exceed{" "}
        <MathInline>{`\\theta`}</MathInline> — i.e. an approximate top-
        <MathInline>{`k`}</MathInline> subspace, since by Eckart–Young the
        large singular values carry essentially all the &quot;signal&quot;
        about <MathInline>{`T`}</MathInline>. Threshold choice{" "}
        <MathInline>{`\\theta = \\eta\\,\\sigma`}</MathInline> for a parameter{" "}
        <MathInline>{`\\eta \\in (0,1)`}</MathInline> and{" "}
        <MathInline>{`\\sigma = \\|\\widehat T\\|_F/\\sqrt k`}</MathInline> is
        what Kerenidis and Prakash use to recover a rank-
        <MathInline>{`k`}</MathInline> projection (Kerenidis &amp; Prakash, 2016,
        Theorem 3.2).
      </p>

      <p>
        The connection to HHL is now visible: HHL applied controlled rotations
        of the form{" "}
        <MathInline>{`1/\\lambda_j`}</MathInline>. KP applies a step-function
        rotation in <MathInline>{`\\sigma_j`}</MathInline>. The mechanics are
        the same — phase estimation, eigenvalue-conditioned rotation,
        uncompute, post-select.
      </p>

      <h3>5. From projection to recommendation</h3>
      <p>
        Pick the row <MathInline>{`i`}</MathInline> of the user we want to
        serve. Prepare{" "}
        <MathInline>{`|\\widehat T_{i,\\,\\cdot}\\rangle`}</MathInline> using
        the BST, project it onto the top singular subspace by the QSVE step
        above, and call the result{" "}
        <MathInline>{`|\\tilde T_{i,\\,\\cdot}\\rangle`}</MathInline>. KP show
        that with high probability this state is{" "}
        <MathInline>{`\\varepsilon`}</MathInline>-close to a row of a
        good rank-<MathInline>{`k`}</MathInline> approximation of{" "}
        <MathInline>{`T`}</MathInline>:
      </p>

      <MathBlock>{`\\| |\\tilde T_{i,\\,\\cdot}\\rangle - |T_{k,\\,i,\\,\\cdot}\\rangle \\| \\;\\leq\\; \\varepsilon`}</MathBlock>

      <p>
        Now <strong>measure</strong> the column register in the computational
        basis. You get a column index{" "}
        <MathInline>{`j`}</MathInline> with probability
      </p>

      <MathBlock>{`\\Pr[j\\mid i] \\;=\\; |\\langle j | \\tilde T_{i,\\,\\cdot}\\rangle|^2 \\;\\approx\\; \\frac{T_{k,\\,ij}^2}{\\|T_{k,\\,i,\\,\\cdot}\\|^2}`}</MathBlock>

      <p>
        i.e. a column proportional to its (squared) predicted utility — exactly
        a high-quality recommendation under the low-rank model. We never wrote
        the full matrix; we only sampled from its amplitudes.
      </p>

      <h3>6. Putting it together — runtime</h3>
      <p>
        Each step costs polylog in <MathInline>{`m,n`}</MathInline> and
        polynomial in <MathInline>{`k, 1/\\varepsilon`}</MathInline>:
      </p>

      <MathBlock>{`T_{\\mathrm{KP}}(\\text{recommend for user }i) \\;=\\; O\\!\\left(\\mathrm{poly}(k)\\,\\mathrm{polylog}(mn)\\right)`}</MathBlock>

      <p>
        Compare with classical reconstruction-based methods that cost{" "}
        <MathInline>{`\\mathrm{poly}(m,n)`}</MathInline>. Apparent exponential
        speedup. The fine print is exactly the assumption of fast quantum state
        preparation via the BST — and that is where Tang&apos;s
        &quot;dequantization&quot; will strike next week.
      </p>

      <QuantumVsInspiredFlow />

      <h3>7. Small sanity check</h3>
      <p>
        Consider a tiny example: a rank-1 matrix{" "}
        <MathInline>{`T = u v^\\top`}</MathInline> with unit vectors{" "}
        <MathInline>{`u \\in \\mathbb R^m`}</MathInline>,{" "}
        <MathInline>{`v \\in \\mathbb R^n`}</MathInline> and one singular value{" "}
        <MathInline>{`\\sigma_1 = 1`}</MathInline>. The state we prepare for
        user <MathInline>{`i`}</MathInline> is{" "}
        <MathInline>{`|T_{i,\\,\\cdot}\\rangle = \\sum_j v_j|j\\rangle`}</MathInline>{" "}
        (up to sign of <MathInline>{`u_i`}</MathInline>). Measuring gives column{" "}
        <MathInline>{`j`}</MathInline> with probability{" "}
        <MathInline>{`v_j^2`}</MathInline> — that is, the &quot;direction&quot; of{" "}
        <MathInline>{`v`}</MathInline> drives the sample, and is exactly the
        ranking we want. Everything scales to higher rank by superposing across
        the singular vectors that pass the threshold.
      </p>

      <h3>References (this week)</h3>
      <ul className="text-sm text-muted-foreground">
        <li>
          Kerenidis, I., &amp; Prakash, A. (2016). Quantum recommendation systems.{" "}
          <em>arXiv preprint</em> arXiv:1603.08675.
        </li>
        <li>
          Harrow, A. W., Hassidim, A., &amp; Lloyd, S. (2009). Quantum algorithm
          for linear systems of equations. <em>Physical Review Letters</em>,{" "}
          <em>103</em>(15), 150502.
        </li>
        <li>
          Frieze, A., Kannan, R., &amp; Vempala, S. (2004). Fast Monte-Carlo
          algorithms for finding low-rank approximations. <em>J. ACM</em>,{" "}
          <em>51</em>(6), 1025–1041.
        </li>
        <li>
          Drineas, P., Kerenidis, I., &amp; Raghavan, P. (2002). Competitive
          recommendation systems. <em>STOC &apos;02</em>. ACM.
        </li>
      </ul>
    </>
  )
}
