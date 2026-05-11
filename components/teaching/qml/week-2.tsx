import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { VqaLoop } from "@/components/teaching/qml/diagrams"

export default function Week2() {
  return (
    <>
      <h2>What does &quot;quantum machine learning&quot; actually mean?</h2>
      <p>
        On near-term hardware, &quot;QML&quot; almost always refers to the{" "}
        <em>variational quantum algorithm</em> (VQA) family (Cerezo et al.,
        2021). The picture is short enough to memorize:
      </p>
      <ol>
        <li><strong>Encode</strong> the input data into a quantum state.</li>
        <li>
          Run a <strong>parametrized quantum circuit</strong>{" "}
          <MathInline>{"U(\\theta)"}</MathInline> — the &quot;quantum model&quot;.
        </li>
        <li>
          <strong>Measure</strong> some observable to get a real number.
        </li>
        <li>
          Send that number to a <strong>classical optimizer</strong> and update{" "}
          <MathInline>{"\\theta"}</MathInline>.
        </li>
      </ol>
      <p>
        Repeat steps 2–4 until the loss settles. That&apos;s it. The diagram
        below is essentially the entire NISQ-era playbook.
      </p>

      <VqaLoop />

      <h2>Where does &quot;variational&quot; come from?</h2>
      <p>
        The word is borrowed from the <em>variational method</em> in quantum
        mechanics. There, to estimate the ground-state energy of a Hamiltonian{" "}
        <MathInline>{"H"}</MathInline>, you pick a family of trial states{" "}
        <MathInline>{"|\\psi(\\theta)\\rangle"}</MathInline> and minimize the
        Rayleigh quotient
      </p>
      <MathBlock>
        {"E(\\theta) \\;=\\; \\frac{\\langle \\psi(\\theta)|\\,H\\,|\\psi(\\theta)\\rangle}{\\langle \\psi(\\theta)|\\psi(\\theta)\\rangle}\\;\\ge\\;E_0,"}
      </MathBlock>
      <p>
        with <MathInline>{"E_0"}</MathInline> the true ground-state energy. The
        upper-bound property of the right-hand side gives you a clean
        optimization target.
      </p>
      <p>
        QML borrows the recipe wholesale. The trial state is now{" "}
        <MathInline>{"|\\psi(\\theta)\\rangle = U(\\theta)\\,|\\phi(\\mathbf{x})\\rangle"}</MathInline>
        where <MathInline>{"|\\phi(\\mathbf{x})\\rangle"}</MathInline> is the
        encoding of the data, and the loss is an expectation value
      </p>
      <MathBlock>
        {"\\mathcal{L}(\\theta) \\;=\\; \\langle \\psi(\\theta)|\\,O\\,|\\psi(\\theta)\\rangle"}
      </MathBlock>
      <p>
        for some Hermitian observable <MathInline>{"O"}</MathInline> we picked to
        encode the task (for example, a Pauli-Z on the output qubit for binary
        classification).
      </p>

      <h2>The three building blocks, written out</h2>

      <h3>1. Encoding map <MathInline>{"\\mathcal{E}"}</MathInline></h3>
      <p>
        A map from classical data to a quantum state,
      </p>
      <MathBlock>{"\\mathcal{E}:\\, \\mathbb{R}^d \\to \\mathcal{H},\\qquad \\mathbf{x} \\mapsto |\\phi(\\mathbf{x})\\rangle."}</MathBlock>
      <p>
        We will spend all of week 3 on the three standard choices (basis,
        amplitude, angle). For now just remember that this map is fixed once
        the encoder is chosen — it has no trainable parameters.
      </p>

      <h3>2. Ansatz <MathInline>{"U(\\theta)"}</MathInline></h3>
      <p>
        A unitary built from a few simple ingredients we know how to run on
        hardware:
      </p>
      <MathBlock>
        {"U(\\theta) \\;=\\; \\prod_{\\ell=1}^{L}\\Big(\\,W_\\ell\\,\\cdot\\, \\bigotimes_{j} R_{P_j}(\\theta_{\\ell,j})\\Big),"}
      </MathBlock>
      <p>
        where each <MathInline>{"R_{P_j}(\\theta) = \\exp(-i\\,\\theta\\,P_j/2)"}</MathInline>{" "}
        is a single-qubit rotation around a Pauli{" "}
        <MathInline>{"P_j \\in \\{X, Y, Z\\}"}</MathInline>, and{" "}
        <MathInline>{"W_\\ell"}</MathInline> is a fixed entangling block (a layer
        of CNOTs, for example). <MathInline>{"L"}</MathInline> is the number of
        layers — depth is the most important hyperparameter you choose.
      </p>

      <h3>3. Measurement</h3>
      <p>
        Pick an observable and estimate its expectation by repeating the
        circuit many times (shots):
      </p>
      <MathBlock>
        {"\\widehat{\\langle O\\rangle}(\\theta) \\;=\\; \\frac{1}{S}\\sum_{s=1}^{S} o_s,\\qquad \\mathrm{Var} \\;=\\; \\frac{\\mathrm{Var}(O)}{S}."}
      </MathBlock>
      <p>
        The square-root scaling is just the central limit theorem: to halve
        the statistical error you need four times as many shots. That cost is
        what makes &quot;cheap&quot; loss evaluations on QPUs not actually
        cheap.
      </p>

      <h2>Putting it together: a tiny example</h2>
      <p>
        Suppose we want to do binary classification on a 1-D feature{" "}
        <MathInline>{"x \\in \\mathbb{R}"}</MathInline> with label{" "}
        <MathInline>{"y \\in \\{+1,-1\\}"}</MathInline>. Choose:
      </p>
      <ul>
        <li>
          encoder <MathInline>{"|\\phi(x)\\rangle = R_y(x)\\,|0\\rangle"}</MathInline>,
        </li>
        <li>
          ansatz <MathInline>{"U(\\theta) = R_z(\\theta_2)\\,R_y(\\theta_1)"}</MathInline>,
        </li>
        <li>
          observable <MathInline>{"O = Z"}</MathInline>, and read off the predicted
          label as <MathInline>{"\\mathrm{sign}(\\langle Z\\rangle)"}</MathInline>.
        </li>
      </ul>
      <p>The loss for one example is</p>
      <MathBlock>
        {"\\ell(\\theta;\\, x,y) \\;=\\; \\big(\\,y \\,-\\, \\langle 0|\\,V^\\dagger(\\theta,x)\\,Z\\,V(\\theta,x)\\,|0\\rangle\\,\\big)^2,"}
      </MathBlock>
      <p>
        with <MathInline>{"V(\\theta,x) = U(\\theta)\\,R_y(x)"}</MathInline>. We
        run the device many shots to estimate the expectation, plug into the
        loss, and update <MathInline>{"\\theta"}</MathInline> with the classical
        optimizer. This minimal three-gate model is already the entire VQA
        skeleton — bigger problems just add layers and qubits.
      </p>

      <h2>What can go right (and wrong)?</h2>
      <p>
        VQAs are popular because the circuits are <em>shallow</em>, so they
        are realistic on NISQ devices, and because the classical optimizer
        absorbs much of the noise. But two warnings show up everywhere:
      </p>
      <ul>
        <li>
          <strong>Barren plateaus.</strong> For random deep ansatzes the
          gradient variance can shrink as{" "}
          <MathInline>{"\\mathrm{Var}\\big(\\partial_\\theta \\mathcal{L}\\big) \\sim 2^{-n}"}</MathInline>,{" "}
          making training exponentially hard in the qubit count{" "}
          <MathInline>{"n"}</MathInline> (McClean et al., 2018). Mitigations:
          structured ansatzes, smart parameter initialization, layer-wise
          training.
        </li>
        <li>
          <strong>Shot noise.</strong> Every gradient estimate has finite-shot
          variance. Optimizers that handle stochastic gradients (Adam, SPSA)
          are the rule.
        </li>
      </ul>
      <p>
        We will see the practical training algorithm — the{" "}
        <em>parameter-shift rule</em> — in week 5, after we cover the
        encoding step in week 3.
      </p>
    </>
  )
}
