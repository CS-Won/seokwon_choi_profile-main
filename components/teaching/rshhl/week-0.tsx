import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { PreferenceMatrixSketch } from "./diagrams"

export default function Week0() {
  return (
    <>
      <p>
        This short course is about one story: how people hoped quantum linear
        algebra would change recommendation systems, and what happened when we
        looked harder at the classical side. We start with the problem itself —
        no quantum mechanics yet.
      </p>

      <h3>1. What is a recommendation system?</h3>
      <p>
        From past purchases or ratings, the platform tries to suggest products
        each user might like. The standard model is an{" "}
        <MathInline>{`m \\times n`}</MathInline>{" "}
        <strong>preference matrix</strong>{" "}
        <MathInline>{`A`}</MathInline>: rows are users, columns are items, and
        entries encode &quot;good&quot; vs &quot;bad&quot; (or real scores). In
        practice you only see a tiny fraction of the entries — the matrix is{" "}
        <strong>sparse</strong> in the sense of missing data, not necessarily
        few nonzeros.
      </p>

      <PreferenceMatrixSketch />

      <h3>2. Why low rank?</h3>
      <p>
        The key modeling assumption is that tastes are not totally random: users
        cluster into a few &quot;types&quot;, so{" "}
        <MathInline>{`A`}</MathInline> should be close to a{" "}
        <strong>low-rank</strong> matrix. Formally, there is a good rank-
        <MathInline>{`k`}</MathInline> approximation (think truncated SVD)
        that captures most of the structure when{" "}
        <MathInline>{`k \\ll \\min(m,n)`}</MathInline>. Kerenidis and Prakash
        spell this out as the starting point for both classical and quantum
        algorithms for recommendations (Kerenidis &amp; Prakash, 2016).
      </p>

      <MathBlock>{`A \\approx U \\Sigma V^\\top, \\qquad \\mathrm{rank}(U\\Sigma V^\\top) \\leq k`}</MathBlock>

      <h3>3. &quot;Good&quot; recommendations — competitive analysis</h3>
      <p>
        Drineas, Kerenidis, and Raghavan ask a sharp question: should we judge an
        algorithm by how well it <em>reconstructs</em> the whole matrix, or by
        how much <em>utility</em> the user gets from a short list of suggestions?
        Many practical pipelines implicitly rebuild a dense approximation of{" "}
        <MathInline>{`A`}</MathInline>, but that is expensive and may be overkill.
        They define recommendation tasks in a{" "}
        <strong>competitive</strong> framework: compare your algorithm&apos;s
        performance to an oracle that knows the entire preference matrix, under
        a random deletion of known entries (Drineas, Kerenidis, &amp; Raghavan,
        2002). That paper is the right classical lens before we talk about
        sampling complexity and quantum speedups.
      </p>

      <h3>4. Where HHL fits (preview)</h3>
      <p>
        Later weeks use the Harrow–Hassidim–Lloyd (HHL) algorithm as a subroutine
        idea: solve linear systems involving{" "}
        <MathInline>{`A`}</MathInline> not to read out the full solution vector,
        but to estimate inner products and projections that feed recommendation
        scores (Harrow, Hassidim, &amp; Lloyd, 2009). Next week we go through HHL
        itself in detail.
      </p>

      <h3>References (this week)</h3>
      <ul className="text-sm text-muted-foreground">
        <li>
          Drineas, P., Kerenidis, I., &amp; Raghavan, P. (2002). Competitive
          recommendation systems. In <em>Proceedings of the 34th Annual ACM
          Symposium on Theory of Computing (STOC &apos;02)</em> (pp. 82–90). ACM.
        </li>
        <li>
          Kerenidis, I., &amp; Prakash, A. (2016). Quantum recommendation systems.{" "}
          <em>arXiv preprint</em> arXiv:1603.08675.
        </li>
      </ul>
    </>
  )
}
