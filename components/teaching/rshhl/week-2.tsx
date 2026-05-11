import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week2() {
  return (
    <>
      <p>
        Before the quantum algorithm, classical researchers had already figured
        out how to get good low-rank approximations <strong>fast</strong> by
        sampling entries or rows instead of computing the full SVD on a giant
        matrix. This week we walk through the math step by step. These are
        exactly the tools Tang later mimics in the quantum-inspired classical
        algorithm.
      </p>

      <h3>1. Singular value decomposition — a quick refresher</h3>
      <p>
        Any real <MathInline>{`m \\times n`}</MathInline> matrix{" "}
        <MathInline>{`A`}</MathInline> has a singular value decomposition
      </p>

      <MathBlock>{`A \\;=\\; U\\,\\Sigma\\,V^\\top \\;=\\; \\sum_{j=1}^{r} \\sigma_j\\,u_j\\,v_j^\\top`}</MathBlock>

      <p>
        where <MathInline>{`r = \\mathrm{rank}(A)`}</MathInline>, the{" "}
        <MathInline>{`\\sigma_j \\geq 0`}</MathInline> are the singular values in
        decreasing order, and{" "}
        <MathInline>{`\\{u_j\\}, \\{v_j\\}`}</MathInline> are orthonormal left
        and right singular vectors. Geometrically: every linear map is{" "}
        <em>rotate → stretch along axes → rotate</em>.
      </p>

      <p>The Frobenius norm has a clean expression in terms of singular values:</p>

      <MathBlock>{`\\|A\\|_F^2 \\;=\\; \\sum_{i,j} A_{ij}^2 \\;=\\; \\sum_{j=1}^{r} \\sigma_j^2`}</MathBlock>

      <h3>2. The Eckart–Young theorem — best rank-k approximation</h3>
      <p>
        Truncate the sum after <MathInline>{`k`}</MathInline> terms:
      </p>

      <MathBlock>{`A_k \\;=\\; \\sum_{j=1}^{k} \\sigma_j\\,u_j\\,v_j^\\top`}</MathBlock>

      <p>Eckart–Young (1936) says this is the best you can do in Frobenius norm:</p>

      <MathBlock>{`\\min_{\\mathrm{rank}(D)\\leq k}\\,\\|A - D\\|_F^2 \\;=\\; \\|A - A_k\\|_F^2 \\;=\\; \\sum_{j>k} \\sigma_j^2`}</MathBlock>

      <p>
        One-line intuition: any rank-<MathInline>{`k`}</MathInline> matrix has
        at most <MathInline>{`k`}</MathInline> nonzero singular values, so when
        you write <MathInline>{`\\|A - D\\|_F^2 = \\sum_j \\widetilde\\sigma_j^2`}</MathInline>{" "}
        and apply Mirsky&apos;s inequality, you cannot beat zeroing out the top{" "}
        <MathInline>{`k`}</MathInline> directions of{" "}
        <MathInline>{`A`}</MathInline> itself.
      </p>
      <p>
        Practically the catch is cost: exact SVD scales as{" "}
        <MathInline>{`O(mn\\,\\min(m,n))`}</MathInline>. For Netflix-sized{" "}
        <MathInline>{`A`}</MathInline>, infeasible.
      </p>

      <h3>3. FKV — Monte Carlo low-rank approximation</h3>
      <p>
        Frieze, Kannan, and Vempala&apos;s trick is: build a small matrix that
        carries the same singular structure, then SVD that small matrix. Their
        sampling rule uses <strong>squared row norms</strong> as probabilities.
      </p>

      <p>Define</p>

      <MathBlock>{`p_i \\;=\\; \\frac{\\|A_{i,\\,\\cdot}\\|^2}{\\|A\\|_F^2}, \\qquad \\sum_i p_i = 1`}</MathBlock>

      <p>
        and similarly column probabilities{" "}
        <MathInline>{`q_j = \\|A_{\\cdot,j}\\|^2 / \\|A\\|_F^2`}</MathInline>.
        The recipe:
      </p>
      <ol>
        <li>
          Sample <MathInline>{`s`}</MathInline> row indices{" "}
          <MathInline>{`i_1, \\dots, i_s`}</MathInline> i.i.d. from{" "}
          <MathInline>{`p`}</MathInline>. Form the{" "}
          <MathInline>{`s \\times n`}</MathInline> matrix{" "}
          <MathInline>{`R`}</MathInline> by stacking the sampled rows, each
          rescaled by <MathInline>{`1/\\sqrt{s\\,p_{i_t}}`}</MathInline>. This
          rescaling is what makes the estimator unbiased.
        </li>
        <li>
          Sample <MathInline>{`s`}</MathInline> columns from{" "}
          <MathInline>{`R`}</MathInline> by row-norms of{" "}
          <MathInline>{`R`}</MathInline>, to get an{" "}
          <MathInline>{`s \\times s`}</MathInline> matrix{" "}
          <MathInline>{`W`}</MathInline> (constant size!).
        </li>
        <li>
          Compute the top-<MathInline>{`k`}</MathInline> singular vectors of{" "}
          <MathInline>{`W`}</MathInline> classically — cheap, because{" "}
          <MathInline>{`W`}</MathInline> is just{" "}
          <MathInline>{`s \\times s`}</MathInline>.
        </li>
        <li>
          Lift those singular vectors back to <MathInline>{`A`}</MathInline> via
          a simple matrix–vector product, getting an approximate top-
          <MathInline>{`k`}</MathInline> basis.
        </li>
      </ol>

      <p>The key unbiasedness identity behind this works in expectation:</p>

      <MathBlock>{`\\mathbb E\\!\\left[\\,R^\\top R\\,\\right] \\;=\\; \\sum_i p_i \\cdot \\frac{A_{i,\\,\\cdot}^\\top A_{i,\\,\\cdot}}{p_i} \\;=\\; \\sum_i A_{i,\\,\\cdot}^\\top A_{i,\\,\\cdot} \\;=\\; A^\\top A`}</MathBlock>

      <p>
        So <MathInline>{`R^\\top R`}</MathInline> is an unbiased estimator of{" "}
        <MathInline>{`A^\\top A`}</MathInline>, and the eigenvectors of{" "}
        <MathInline>{`A^\\top A`}</MathInline> are exactly the right singular
        vectors of <MathInline>{`A`}</MathInline>. Concentration inequalities
        then say that for{" "}
        <MathInline>{`s = O(k^2/\\varepsilon^4)`}</MathInline> samples we get,
        with high probability, a rank-<MathInline>{`k`}</MathInline> approximation
        <MathInline>{`\\tilde A_k`}</MathInline> with
      </p>

      <MathBlock>{`\\|A - \\tilde A_k\\|_F^2 \\;\\leq\\; \\min_{\\mathrm{rank}(D)\\leq k}\\,\\|A - D\\|_F^2 \\;+\\; \\varepsilon\\,\\|A\\|_F^2`}</MathBlock>

      <p>
        The total time is polynomial in{" "}
        <MathInline>{`k, 1/\\varepsilon`}</MathInline>{" "}
        <em>plus the cost of reading the sampled rows</em>. The matrix size{" "}
        <MathInline>{`m, n`}</MathInline> only appears under sampling access —
        you don&apos;t touch most of <MathInline>{`A`}</MathInline> (Frieze,
        Kannan, &amp; Vempala, 2004).
      </p>

      <h3>4. Achlioptas–McSherry — entrywise sparsification</h3>
      <p>
        A different angle: zero out most entries of{" "}
        <MathInline>{`A`}</MathInline> randomly, scale the survivors so the
        expectation is preserved, and then run a low-rank approximation on the
        sparser matrix.
      </p>

      <p>Sample each entry with probability <MathInline>{`p`}</MathInline>:</p>

      <MathBlock>{`\\tilde A_{ij} \\;=\\; \\begin{cases} A_{ij}/p, & \\text{with prob } p, \\\\ 0, & \\text{otherwise.} \\end{cases}`}</MathBlock>

      <p>
        Define the noise{" "}
        <MathInline>{`N = \\tilde A - A`}</MathInline>. By construction{" "}
        <MathInline>{`\\mathbb E[N_{ij}] = 0`}</MathInline> and{" "}
        <MathInline>{`\\mathrm{Var}(N_{ij}) \\leq A_{ij}^2 (1-p)/p`}</MathInline>.
        Random matrix theory says the operator norm{" "}
        <MathInline>{`\\|N\\|_2`}</MathInline> stays small with high probability
        — roughly the size of a random matrix with similar entries — while the
        large singular values of <MathInline>{`A`}</MathInline> survive intact.
        Then a perturbation bound (Weyl-type) gives
      </p>

      <MathBlock>{`|\\sigma_j(\\tilde A) - \\sigma_j(A)| \\;\\leq\\; \\|N\\|_2 \\quad \\text{for all } j`}</MathBlock>

      <p>
        and consequently the low-rank approximation built from{" "}
        <MathInline>{`\\tilde A`}</MathInline> is nearly as good as the one
        built from <MathInline>{`A`}</MathInline> (Achlioptas &amp; McSherry,
        2007). Moral: if your matrix has clear &quot;signal&quot; (a few large{" "}
        <MathInline>{`\\sigma_j`}</MathInline>), you can throw away most of it
        and still see the signal.
      </p>

      <h3>5. Why ℓ²-norm sampling matters (preview of Tang)</h3>
      <p>
        Both FKV and Achlioptas–McSherry use{" "}
        <strong>ℓ²-norm sampling</strong>: probabilities proportional to{" "}
        <MathInline>{`A_{ij}^2`}</MathInline>,{" "}
        <MathInline>{`\\|A_{i,\\,\\cdot}\\|^2`}</MathInline>, or{" "}
        <MathInline>{`\\|A_{\\cdot,j}\\|^2`}</MathInline>. Why squared? Because
        the Frobenius norm distributes over squares of singular values:
      </p>

      <MathBlock>{`\\|A\\|_F^2 \\;=\\; \\sum_j \\sigma_j^2`}</MathBlock>

      <p>
        So sampling weighted by{" "}
        <MathInline>{`(\\,\\text{entry magnitudes}\\,)^2`}</MathInline> is the
        classical analogue of quantum amplitudes (which also sit under{" "}
        <em>squares</em> in the Born rule). Tang (2019) makes this analogy
        precise — same {" "}
        <MathInline>{`\\ell^2`}</MathInline>-norm primitives, no quantum
        amplitudes needed.
      </p>

      <h3>6. Competitive guarantees (back to DKR)</h3>
      <p>
        Tying it together with Week 0: Drineas, Kerenidis, and Raghavan compare
        algorithms that reconstruct big chunks of{" "}
        <MathInline>{`A`}</MathInline> to ones that target high-utility entries
        directly. Their{" "}
        <strong>competitive ratio</strong> is, informally,
      </p>

      <MathBlock>{`\\frac{\\mathbb{E}[\\,\\text{utility of our top-}\\ell\\text{ list}\\,]}{\\text{utility of the omniscient top-}\\ell\\text{ list}} \\;\\geq\\; 1 - \\varepsilon`}</MathBlock>

      <p>
        and they show this is achievable from a small, random subset of revealed
        entries (Drineas, Kerenidis, &amp; Raghavan, 2002). This means we
        don&apos;t need full reconstruction — exactly the point both quantum
        and quantum-inspired algorithms exploit.
      </p>

      <h3>References (this week)</h3>
      <ul className="text-sm text-muted-foreground">
        <li>
          Frieze, A., Kannan, R., &amp; Vempala, S. (2004). Fast Monte-Carlo
          algorithms for finding low-rank approximations. <em>Journal of the ACM</em>
          , <em>51</em>(6), 1025–1041.
        </li>
        <li>
          Achlioptas, D., &amp; McSherry, F. (2007). Fast computation of low-rank
          matrix approximations. <em>Journal of the ACM</em>, <em>54</em>(2), Art.
          9.
        </li>
        <li>
          Drineas, P., Kerenidis, I., &amp; Raghavan, P. (2002). Competitive
          recommendation systems. <em>STOC &apos;02</em>. ACM.
        </li>
      </ul>
    </>
  )
}
