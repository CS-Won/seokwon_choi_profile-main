import { MathBlock, MathInline } from "./math"

export default function Week5() {
  return (
    <>
      <p>
        Last week of the course. Time to look at what actually happens when we run
        the full pipeline on real IBM hardware. We&apos;re back on the staggered
        magnetization, this time on the <code>ibm_yonsei</code> Eagle r3 processor
        (127 qubits) and <code>ibm_marrakesh</code> Heron r2 (156 qubits). The
        question we want to answer: does SM still hold up as we scale the system
        size?
      </p>

      <h3>1. What we&apos;re measuring</h3>
      <MathBlock>{`\\langle \\hat O_{M_{st}} \\rangle_{t} \\;=\\; \\langle \\psi(t)| \\hat O_{M_{st}} |\\psi(t)\\rangle, \\quad |\\psi(t)\\rangle = e^{-iHt}|\\psi(0)\\rangle`}</MathBlock>

      <p>
        Starting from the Néel state we get{" "}
        <MathInline>{`\\langle \\hat O_{M_{st}}\\rangle_{t=0} = -\\tfrac{1}{2}`}</MathInline>{" "}
        and watch it relax toward zero. Settings: Trotter step{" "}
        <MathInline>{`\\delta t = 0.5`}</MathInline>, 100,000 shots per time point,
        and we repeat each experiment 10 times so we can estimate uncertainty.
      </p>

      <h3>2. Just how big do these circuits get?</h3>
      <p>
        Each brick costs 3 CXs and depth 7. Multiply by the number of bricks per
        layer and the number of Trotter steps, and you get the table below.
      </p>

      <div className="my-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[500px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-left">
              <th className="px-3 py-2 font-semibold">Trotter step</th>
              <th className="px-3 py-2 font-semibold">N = 20 (OBC) CX</th>
              <th className="px-3 py-2 font-semibold">N = 104 (OBC) CX</th>
              <th className="px-3 py-2 font-semibold">N = 84 (PBC) CX</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, 87, 465, 378],
              [2, 144, 774, 630],
              [5, 315, 1701, 1386],
              [8, 486, 2628, 2142],
              [10, 600, 3246, 2646],
            ].map(([s, a, b, c]) => (
              <tr key={s} className="border-b border-border last:border-b-0">
                <td className="px-3 py-2 font-mono">{s}</td>
                <td className="px-3 py-2 font-mono">{a}</td>
                <td className="px-3 py-2 font-mono">{b}</td>
                <td className="px-3 py-2 font-mono">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        At <MathInline>{`N = 104`}</MathInline>, 10 Trotter steps, we&apos;re looking
        at <strong>3,246 CX gates</strong>. With no error mitigation, the signal at
        that depth is basically gone — that&apos;s exactly the regime where QEM
        earns its keep.
      </p>

      <h3>3. Comparing all five QEMs on a 20-qubit chain</h3>
      <p>
        Here&apos;s the average absolute error for each combo at 20 qubits, OBC and
        PBC:
      </p>

      <div className="my-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[500px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-left">
              <th className="px-3 py-2 font-semibold">QEM combo</th>
              <th className="px-3 py-2 font-semibold">N = 20 OBC</th>
              <th className="px-3 py-2 font-semibold">N = 20 PBC</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["NOQEM", "0.08419", "0.08550"],
              ["TREX", "0.08484", "0.08896"],
              ["TREX + DD", "0.08248", "0.08267"],
              ["TREX + PT", "0.05664", "0.05002"],
              ["TREX + DD + PT", "0.04911", "0.04962"],
              ["+ ZNE", "0.04106", "0.04123"],
              ["+ SM", "0.02760", "0.02218"],
            ].map((row) => (
              <tr
                key={row[0]}
                className={`border-b border-border last:border-b-0 ${
                  row[0].startsWith("+ SM") ? "bg-accent/10 font-medium" : ""
                }`}
              >
                <td className="px-3 py-2">{row[0]}</td>
                <td className="px-3 py-2 font-mono">{row[1]}</td>
                <td className="px-3 py-2 font-mono">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>A few takeaways:</p>
      <ul>
        <li>
          TREX alone barely moves the number — sometimes it even gets a touch worse,
          since the sampling noise and the measurement error interact.
        </li>
        <li>
          PT is the most impactful of the three circuit-level cleanups. Turning
          coherent errors into stochastic ones helps a lot.
        </li>
        <li>
          DD adds a small bit on OBC, but does basically nothing on PBC because
          there&apos;s no idle space to insert pulses into.
        </li>
        <li>
          ZNE on top brings the error down to <MathInline>{`\\sim 0.041`}</MathInline>;
          SM goes one step further, cutting the error by another{" "}
          <strong>32.8% (OBC) and 46.2% (PBC)</strong>.
        </li>
      </ul>

      <h3>4. Going utility-scale: N = 84 (PBC) and N = 104 (OBC)</h3>
      <p>
        For ZNE we keep the same extrapolation curve we fit at{" "}
        <MathInline>{`N = 20`}</MathInline>. This implicitly assumes the noise model
        doesn&apos;t change with system size, which we already noted is shaky. SM
        doesn&apos;t make that assumption — it estimates the noise factor at the
        actual size from the test circuit.
      </p>

      <div className="my-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[500px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-left">
              <th className="px-3 py-2 font-semibold">QEM combo</th>
              <th className="px-3 py-2 font-semibold">N = 104 OBC</th>
              <th className="px-3 py-2 font-semibold">N = 84 PBC</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["TREX + DD + PT", "0.05641", "0.05756"],
              ["+ ZNE", "0.04917", "0.05044"],
              ["+ SM", "0.02556", "0.02832"],
            ].map((row, i) => (
              <tr
                key={row[0]}
                className={`border-b border-border last:border-b-0 ${
                  i === 2 ? "bg-accent/10 font-medium" : ""
                }`}
              >
                <td className="px-3 py-2">{row[0]}</td>
                <td className="px-3 py-2 font-mono">{row[1]}</td>
                <td className="px-3 py-2 font-mono">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Compared to <MathInline>{`N = 20`}</MathInline>, ZNE&apos;s error gets worse
        by about <strong>19.8% (OBC) and 22.3% (PBC)</strong>. SM stays flat — even
        slightly better in some cases. The extrapolation curve learned at small
        sizes simply doesn&apos;t describe the large-size noise anymore, while SM
        re-learns it on the spot.
      </p>
      <p>
        So at <MathInline>{`N = 104`}</MathInline> with 10 Trotter steps and over
        3,200 CXs, SM lands at an average absolute error of{" "}
        <strong>0.02556</strong> — roughly half of ZNE&apos;s error. That&apos;s
        what we mean when we say SM scales to utility-scale problems.
      </p>

      <h3>5. The course in one line</h3>
      <MathBlock>{`\\boxed{\\;\\text{XXZ Trotterization} \\;+\\; \\text{TREX/DD/PT/SM} \\;\\;\\Longrightarrow\\;\\; \\text{100+ qubit dynamics on noisy IBM hardware}\\;}`}</MathBlock>

      <p>
        That&apos;s it for the five weeks. We went all the way from &quot;why even
        bother with NISQ?&quot; to &quot;here are 100+ qubit simulations that match
        classical benchmarks&quot;. SM is the star of the show for Trotterization,
        but it does have a real limit: you need a test circuit whose ideal answer
        you can compute easily. Generalizing that idea to other algorithms — VQE,
        QAOA, and friends — is the next thing on my list. Maybe a follow-up course.
      </p>
    </>
  )
}
