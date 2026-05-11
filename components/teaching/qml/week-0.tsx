import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week0() {
  return (
    <>
      <h2>Welcome to the QIYA seminar</h2>
      <p>
        Hi, and welcome! This short series is built from the QISCA introductory
        seminar slides I gave for the QIYA group, so the goal is the same as
        that talk: take someone who already knows a bit of quantum computing
        and a bit of machine learning, and walk them up to <em>quantum machine
        learning</em> (QML) without hand-waving.
      </p>
      <p>
        I will keep the language simple. Whenever a formula shows up, I will
        also explain in plain words what each symbol is doing and why we wrote
        it that way.
      </p>

      <h2>What is QML, in one sentence?</h2>
      <p>
        QML is what happens when we put parts of a machine-learning pipeline —
        the model, the training loop, or the data itself — onto a quantum
        computer (Cerezo et al., 2021). The hope is twofold:
      </p>
      <ul>
        <li>
          <strong>Speed:</strong> some linear-algebra subroutines (kernel
          evaluations, linear solves) can be faster on a quantum device for
          well-structured inputs.
        </li>
        <li>
          <strong>Expressivity:</strong> a parametrized quantum circuit can
          represent functions that are awkward or expensive to compute
          classically.
        </li>
      </ul>

      <h2>Why now?</h2>
      <p>
        Two things changed in the last few years. First, datasets exploded —
        every domain is now drowning in measurements, images, and logs. Second,
        small but real <em>noisy intermediate-scale quantum</em> (NISQ) devices
        became available through cloud APIs. So researchers started asking:
        if classical ML is hitting practical compute walls, can a quantum
        co-processor help?
      </p>

      <h2>The roadmap of this series</h2>
      <p>This is exactly the agenda from the deck:</p>
      <ol>
        <li>
          <strong>Machine learning.</strong> A quick refresher on the family of
          ML methods and the gradient-descent loop that ties them together.
        </li>
        <li>
          <strong>Quantum machine learning.</strong> The variational quantum
          algorithm (VQA) framework — our main workhorse on NISQ hardware.
        </li>
        <li>
          <strong>Data encoding.</strong> How a classical vector becomes a
          quantum state, with the three standard recipes (basis, amplitude,
          angle).
        </li>
        <li>
          <strong>Neural networks.</strong> A short refresher on the classical
          feed-forward network — perceptrons, activations, layered
          computation — so the quantum analogue lands on familiar ground.
        </li>
        <li>
          <strong>Quantum neural networks.</strong> Quantum perceptrons,
          training with the parameter-shift rule, data re-uploading, and the
          challenges we still have to face.
        </li>
      </ol>

      <h2>One formula to set the tone</h2>
      <p>
        Almost everything we do in this series will end up looking like this:
      </p>
      <MathBlock>{"\\theta^* \\;=\\; \\arg\\min_{\\theta}\\; \\mathcal{L}\\!\\left(\\,f_\\theta(\\mathbf{x}),\\, \\mathbf{y}\\,\\right),"}</MathBlock>
      <p>
        where <MathInline>{"\\mathbf{x}"}</MathInline> is the data,{" "}
        <MathInline>{"\\mathbf{y}"}</MathInline> is what we want the model to
        output, <MathInline>{"f_\\theta"}</MathInline> is the model (classical or
        quantum) with parameters{" "}
        <MathInline>{"\\theta"}</MathInline>, and{" "}
        <MathInline>{"\\mathcal{L}"}</MathInline> is the loss function we wish to
        make small.
      </p>
      <p>
        In QML the only thing that changes is that{" "}
        <MathInline>{"f_\\theta"}</MathInline> contains a quantum circuit, and{" "}
        <MathInline>{"\\theta"}</MathInline> are rotation angles inside that
        circuit. Keep that picture in mind — every week of this series is
        either explaining how to build <MathInline>{"f_\\theta"}</MathInline> or how
        to update <MathInline>{"\\theta"}</MathInline>.
      </p>

      <p className="text-sm text-muted-foreground">
        See the <strong>Reference</strong> section on the course page for the
        full reading list cited throughout the weeks.
      </p>
    </>
  )
}
