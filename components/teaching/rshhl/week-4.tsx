import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { QuantumVsInspiredFlow } from "./diagrams"

export default function Week4() {
  return (
    <>
      <p>
        Ewin Tang showed that Kerenidis and Prakash&apos;s quantum recommendation
        algorithm has a <em>classical</em> counterpart with essentially the same
        complexity, up to polynomial factors, <strong>provided</strong> the
        input matrix is stored in a data structure that supports{" "}
        <MathInline>{`\\ell^2`}</MathInline>-norm sampling queries (Tang, 2019).
        This is called <strong>dequantization</strong>: the apparent quantum
        speedup evaporates once we match input access models carefully. This
        week we walk through the construction step by step so you can see{" "}
        <em>where</em> the speedup actually went.
      </p>

      <h3>1. The input model — ℓ²-norm sampling oracle</h3>
      <p>
        We assume access to{" "}
        <MathInline>{`A \\in \\mathbb R^{m \\times n}`}</MathInline> through a
        small set of cheap operations, all costing{" "}
        <MathInline>{`O(\\log(mn))`}</MathInline>:
      </p>
      <ul>
        <li>
          <strong>Query</strong>: read{" "}
          <MathInline>{`A_{ij}`}</MathInline>.
        </li>
        <li>
          <strong>Norms</strong>: return{" "}
          <MathInline>{`\\|A_{i,\\,\\cdot}\\|`}</MathInline> and{" "}
          <MathInline>{`\\|A\\|_F`}</MathInline>.
        </li>
        <li>
          <strong>Row sampling</strong>: sample a row index{" "}
          <MathInline>{`i`}</MathInline> with probability{" "}
          <MathInline>{`\\|A_{i,\\,\\cdot}\\|^2 / \\|A\\|_F^2`}</MathInline>.
        </li>
        <li>
          <strong>In-row entry sampling</strong>: given{" "}
          <MathInline>{`i`}</MathInline>, sample column index{" "}
          <MathInline>{`j`}</MathInline> with probability{" "}
          <MathInline>{`A_{ij}^2 / \\|A_{i,\\,\\cdot}\\|^2`}</MathInline>.
        </li>
      </ul>
      <p>
        This is exactly what the BST in Kerenidis–Prakash gives the{" "}
        <em>quantum</em> algorithm — and the same BST also supports these
        classical queries. Tang&apos;s point: as soon as the classical
        algorithm has access to this oracle, the quantum speedup is mostly
        gone.
      </p>

      <h3>2. ℓ² sampling = classical analogue of quantum amplitudes</h3>
      <p>
        For any vector <MathInline>{`v \\in \\mathbb R^n`}</MathInline>, the
        quantum state{" "}
        <MathInline>{`|v\\rangle = \\sum_j (v_j/\\|v\\|)\\,|j\\rangle`}</MathInline>{" "}
        measured in the computational basis gives index{" "}
        <MathInline>{`j`}</MathInline> with probability
      </p>

      <MathBlock>{`\\Pr[j] \\;=\\; \\frac{v_j^2}{\\|v\\|^2}`}</MathBlock>

      <p>
        — the same distribution you would get from <strong>length-squared
        sampling</strong> of <MathInline>{`v`}</MathInline> on a classical
        machine with the oracle above. Tang&apos;s slogan: <em>length-squared
        sampling is the classical avatar of quantum measurement</em>.
      </p>

      <h3>3. The goal</h3>
      <p>
        KP outputs a sample from a row{" "}
        <MathInline>{`T_{k,\\,i,\\,\\cdot}`}</MathInline> of a good rank-
        <MathInline>{`k`}</MathInline> approximation of the preference matrix.
        Tang aims to do exactly that classically: given the oracle above for{" "}
        <MathInline>{`A = \\widehat T`}</MathInline>, output column index{" "}
        <MathInline>{`j`}</MathInline> with
      </p>

      <MathBlock>{`\\Pr[j \\mid i] \\;\\approx\\; \\frac{T_{k,\\,ij}^2}{\\|T_{k,\\,i,\\,\\cdot}\\|^2}`}</MathBlock>

      <p>
        in time{" "}
        <MathInline>{`O(\\mathrm{poly}(k)\\,\\log(mn))`}</MathInline> (Tang,
        2019, Theorem 1).
      </p>

      <h3>4. Modified FKV — top singular subspace from a tiny sketch</h3>
      <p>
        The first move is essentially Frieze–Kannan–Vempala (Week 2). Sample{" "}
        <MathInline>{`r`}</MathInline> rows and then{" "}
        <MathInline>{`c`}</MathInline> columns of{" "}
        <MathInline>{`A`}</MathInline> using length-squared probabilities,
        getting a small <MathInline>{`r \\times c`}</MathInline> matrix{" "}
        <MathInline>{`W`}</MathInline>.
      </p>
      <p>
        Let <MathInline>{`R \\in \\mathbb R^{r \\times n}`}</MathInline> be the
        sampled, rescaled rows. By Week 2,
      </p>

      <MathBlock>{`\\mathbb E[R^\\top R] \\;=\\; A^\\top A`}</MathBlock>

      <p>
        and a matrix Bernstein bound gives{" "}
        <MathInline>{`\\|R^\\top R - A^\\top A\\|_F \\leq \\eta\\|A\\|_F^2`}</MathInline>{" "}
        with high probability whenever{" "}
        <MathInline>{`r = O(1/\\eta^2)`}</MathInline>. Doing the same trick on
        columns, we end up with an{" "}
        <MathInline>{`r \\times c`}</MathInline> sketch{" "}
        <MathInline>{`W`}</MathInline> we can SVD in constant time (constant
        in <MathInline>{`m, n`}</MathInline>).
      </p>
      <p>
        Lift the singular vectors of <MathInline>{`W`}</MathInline> back to an
        approximate right-singular basis of <MathInline>{`A`}</MathInline>:
      </p>

      <MathBlock>{`\\hat v_\\ell \\;=\\; \\frac{1}{\\hat\\sigma_\\ell}\\,R^\\top \\hat w_\\ell, \\qquad \\ell = 1, \\dots, k`}</MathBlock>

      <p>
        where <MathInline>{`(\\hat w_\\ell, \\hat\\sigma_\\ell)`}</MathInline>{" "}
        are right singular vectors and values of{" "}
        <MathInline>{`W`}</MathInline>. With high probability the{" "}
        <MathInline>{`\\hat v_\\ell`}</MathInline> approximately span the top-
        <MathInline>{`k`}</MathInline> right singular subspace of{" "}
        <MathInline>{`A`}</MathInline>. We are still purely classical, and we
        never touched most of <MathInline>{`A`}</MathInline> — only the few
        sampled rows.
      </p>

      <h3>5. The new trick — sample from a projection without writing it</h3>
      <p>
        We <em>want</em> to sample from the projected row
      </p>

      <MathBlock>{`\\tilde T_{i,\\,\\cdot} \\;=\\; \\sum_{\\ell=1}^{k}\\,\\lambda_\\ell\\,\\hat v_\\ell, \\qquad \\lambda_\\ell \\;=\\; \\langle A_{i,\\,\\cdot},\\,\\hat v_\\ell\\rangle`}</MathBlock>

      <p>
        Writing out the full vector{" "}
        <MathInline>{`\\tilde T_{i,\\,\\cdot}`}</MathInline> would cost{" "}
        <MathInline>{`\\Omega(n)`}</MathInline> — unaffordable. Tang&apos;s key
        observation: we don&apos;t need to write it down, we only need to{" "}
        <em>sample</em> from it.
      </p>

      <h4>(a) Estimate the k coefficients λℓ</h4>
      <p>
        Each <MathInline>{`\\lambda_\\ell`}</MathInline> is an inner product
        between row <MathInline>{`i`}</MathInline> and the lifted singular
        vector <MathInline>{`\\hat v_\\ell`}</MathInline>. Each{" "}
        <MathInline>{`\\hat v_\\ell`}</MathInline> is a short linear
        combination of the sampled rows (Step 4), so each{" "}
        <MathInline>{`\\lambda_\\ell`}</MathInline> reduces to a handful of
        inner products between row <MathInline>{`i`}</MathInline> and individual
        sampled rows. Each of those inner products can be estimated with
        length-squared sampling in time{" "}
        <MathInline>{`O(\\mathrm{poly}(k)/\\eta^2 \\cdot \\log(mn))`}</MathInline>{" "}
        — this is the classical &quot;inner product estimator&quot; trick (Tang,
        2019, Lemma 3.5).
      </p>

      <h4>(b) Rejection sampling from the projected vector</h4>
      <p>
        Now we have explicit coefficients{" "}
        <MathInline>{`\\hat\\lambda_1, \\dots, \\hat\\lambda_k`}</MathInline>{" "}
        and the <MathInline>{`\\hat v_\\ell`}</MathInline> are stored as linear
        combinations of sampled rows (each of which we can length-squared
        sample). Tang then runs the following <strong>rejection sampler</strong>{" "}
        to draw an index <MathInline>{`j`}</MathInline> from{" "}
        <MathInline>{`\\tilde T_{i,\\,\\cdot}`}</MathInline>:
      </p>
      <ol>
        <li>
          Pick <MathInline>{`\\ell \\in \\{1, \\dots, k\\}`}</MathInline> with
          probability <MathInline>{`\\hat\\lambda_\\ell^2 / \\sum_{\\ell'} \\hat\\lambda_{\\ell'}^2`}</MathInline>{" "}
          (a {`k`}-sided coin you can flip in{" "}
          <MathInline>{`O(k)`}</MathInline>).
        </li>
        <li>
          Length-squared sample an index{" "}
          <MathInline>{`j`}</MathInline> from{" "}
          <MathInline>{`\\hat v_\\ell`}</MathInline> using the oracle (recall{" "}
          <MathInline>{`\\hat v_\\ell`}</MathInline> is a combination of sampled
          rows, which support length-squared sampling for free).
        </li>
        <li>
          Accept <MathInline>{`j`}</MathInline> with probability
          <MathInline>{` \\big(\\sum_\\ell \\hat\\lambda_\\ell (\\hat v_\\ell)_j\\big)^2 \\big/ \\big(k \\sum_\\ell \\hat\\lambda_\\ell^2 (\\hat v_\\ell)_j^2\\big)`}</MathInline>.
          Otherwise go back to Step 1.
        </li>
      </ol>
      <p>
        Why does this work? The probability that the sampler outputs{" "}
        <MathInline>{`j`}</MathInline> in one round is
      </p>

      <MathBlock>{`\\Pr[\\text{output } j] \\;=\\; \\sum_\\ell \\frac{\\hat\\lambda_\\ell^2}{\\sum_{\\ell'} \\hat\\lambda_{\\ell'}^2}\\cdot \\frac{(\\hat v_\\ell)_j^2}{1}\\cdot \\frac{\\big(\\sum_\\ell \\hat\\lambda_\\ell (\\hat v_\\ell)_j\\big)^2}{k \\sum_\\ell \\hat\\lambda_\\ell^2 (\\hat v_\\ell)_j^2} \\;\\propto\\; \\big(\\tilde T_{i,j}\\big)^2`}</MathBlock>

      <p>
        which is exactly the length-squared distribution of the projected row.
        The acceptance probability bounds make sure the expected number of
        rounds is <MathInline>{`O(k)`}</MathInline>; everything else is{" "}
        <MathInline>{`\\mathrm{polylog}(mn)`}</MathInline>.
      </p>

      <h3>6. Runtime</h3>
      <p>Counting up the pieces:</p>

      <MathBlock>{`T_{\\mathrm{Tang}} \\;=\\; O\\!\\left(\\mathrm{poly}(k,1/\\varepsilon,\\sigma_{\\max}/\\sigma_{\\min})\\cdot \\log(mn)\\right)`}</MathBlock>

      <p>
        Only polynomially slower than KP&apos;s quantum runtime{" "}
        <MathInline>{`O(\\mathrm{poly}(k)\\,\\mathrm{polylog}(mn))`}</MathInline>.
        Crucially, the exponential gap with classical algorithms{" "}
        <em>without</em> sampling oracles (which scale polynomially in{" "}
        <MathInline>{`m,n`}</MathInline>) is preserved — Tang&apos;s algorithm
        beats those by an exponential factor too, just using the same input
        model as the quantum one.
      </p>

      <QuantumVsInspiredFlow />

      <h3>7. So is HHL &quot;useless&quot;?</h3>
      <p>
        Reasonable question after seeing the dequantization. The honest answer
        from Tang (2019) is narrower: for <em>this</em> recommendation setup,
        the exponential-looking gap was an artifact of mismatched input models.
        HHL-style primitives may still matter for problems where:
      </p>
      <ul>
        <li>
          State preparation and block encodings are cheap quantumly but the
          equivalent classical sampling distribution is provably hard
          (e.g.&nbsp;outputs from <MathInline>{`\\mathrm{BQP}`}</MathInline>{" "}
          circuits at large depth).
        </li>
        <li>
          You need the full quantum state (not just samples) — e.g. to feed it
          into another quantum subroutine, instead of measuring at the end.
        </li>
      </ul>
      <p>
        A complexity-theoretic warning sign: if every HHL-style problem could
        be fully simulated classically, we would have results like{" "}
        <MathInline>{`\\mathrm{BQP} \\subseteq \\mathrm{P}`}</MathInline>, which
        almost nobody believes. Dequantization should be read as a careful
        boundary-marker, not as a death certificate for quantum linear algebra.
      </p>

      <h3>8. What to remember</h3>
      <ul>
        <li>
          Always separate <strong>algorithm runtime</strong> from{" "}
          <strong>input-model assumptions</strong>.
        </li>
        <li>
          Length-squared sampling is the classical mirror of quantum amplitudes.
          With it, KP&apos;s recommendation pipeline can be reproduced in
          polylog time (up to polynomial slowdown).
        </li>
        <li>
          Classical foundations: competitive guarantees (Drineas, Kerenidis,
          &amp; Raghavan, 2002), fast Monte Carlo low rank (Frieze, Kannan,
          &amp; Vempala, 2004), entrywise approximations (Achlioptas
          &amp; McSherry, 2007). Tang (2019) shows how to assemble them with
          rejection sampling into a complete recommendation algorithm.
        </li>
      </ul>

      <h3>9. Sanity check — rank-1 case</h3>
      <p>
        Take <MathInline>{`A = u v^\\top`}</MathInline> with unit{" "}
        <MathInline>{`u, v`}</MathInline> and{" "}
        <MathInline>{`\\sigma_1 = 1`}</MathInline>. Step 4 returns{" "}
        <MathInline>{`\\hat v_1 \\approx v`}</MathInline>. The single
        coefficient is{" "}
        <MathInline>{`\\hat\\lambda_1 \\approx \\langle A_{i,\\,\\cdot}, v\\rangle = u_i`}</MathInline>.
        The rejection sampler then draws{" "}
        <MathInline>{`j`}</MathInline> with probability proportional to{" "}
        <MathInline>{`v_j^2`}</MathInline> — exactly the same{" "}
        <em>direction-of-v</em> sample as the quantum algorithm in Week 3, and
        the natural ranking for the recommendation.
      </p>

      <h3>References (this week)</h3>
      <ul className="text-sm text-muted-foreground">
        <li>
          Tang, E. (2019). A quantum-inspired classical algorithm for recommendation
          systems. In <em>Proceedings of the 51st Annual ACM SIGACT Symposium on
          Theory of Computing (STOC &apos;19)</em> (pp. 217–228). ACM. (Also
          arXiv:1807.04271.)
        </li>
        <li>
          Kerenidis, I., &amp; Prakash, A. (2016). Quantum recommendation systems.{" "}
          <em>arXiv preprint</em> arXiv:1603.08675.
        </li>
        <li>
          Frieze, A., Kannan, R., &amp; Vempala, S. (2004). Fast Monte-Carlo
          algorithms for finding low-rank approximations. <em>J. ACM</em>,{" "}
          <em>51</em>(6), 1025–1041.
        </li>
        <li>
          Achlioptas, D., &amp; McSherry, F. (2007). Fast computation of low-rank
          matrix approximations. <em>J. ACM</em>, <em>54</em>(2), Art. 9.
        </li>
        <li>
          Drineas, P., Kerenidis, I., &amp; Raghavan, P. (2002). Competitive
          recommendation systems. <em>STOC &apos;02</em>. ACM.
        </li>
      </ul>
    </>
  )
}
