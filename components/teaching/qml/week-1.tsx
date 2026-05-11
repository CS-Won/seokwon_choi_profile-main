import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { LossLandscape } from "@/components/teaching/qml/diagrams"

export default function Week1() {
  return (
    <>
      <h2>Machine learning, in plain terms</h2>
      <p>
        Machine learning is a way of writing a program by giving it a lot of
        examples instead of explicit rules. Before we touch any quantum
        circuit, let&apos;s pin down the four families of ML the seminar
        deck calls out.
      </p>

      <h3>Supervised learning</h3>
      <p>
        We are given pairs <MathInline>{"\\{(\\mathbf{x}_i, y_i)\\}_{i=1}^N"}</MathInline>,
        and we want a model <MathInline>{"f_\\theta"}</MathInline> that maps{" "}
        <MathInline>{"\\mathbf{x}"}</MathInline> to <MathInline>{"y"}</MathInline>.
        Think image → label, sentence → translation, patient features →
        diagnosis. The training problem is
      </p>
      <MathBlock>
        {"\\min_{\\theta}\\; \\frac{1}{N}\\sum_{i=1}^{N} \\ell\\!\\big(f_\\theta(\\mathbf{x}_i),\\, y_i\\big),"}
      </MathBlock>
      <p>
        where <MathInline>{"\\ell"}</MathInline> is a per-example loss (squared
        error, cross-entropy, etc.).
      </p>

      <h3>Unsupervised learning</h3>
      <p>
        There are no labels — only <MathInline>{"\\{\\mathbf{x}_i\\}"}</MathInline>.
        The model has to discover structure on its own: clustering, density
        estimation, dimensionality reduction. Principal Component Analysis
        (PCA), <MathInline>{"k"}</MathInline>-means, and autoencoders all fit here.
      </p>

      <h3>Reinforcement learning</h3>
      <p>
        An agent interacts with an environment, picks actions, and observes
        rewards. The optimization target is the expected return
      </p>
      <MathBlock>
        {"J(\\theta) \\;=\\; \\mathbb{E}_{\\pi_\\theta}\\!\\left[\\sum_{t=0}^{T} \\gamma^t\\, r_t\\right],"}
      </MathBlock>
      <p>
        with discount factor <MathInline>{"\\gamma \\in [0,1)"}</MathInline> and
        rewards <MathInline>{"r_t"}</MathInline>.
      </p>

      <h3>Deep learning</h3>
      <p>
        Not really a separate paradigm — it&apos;s a <em>family of models</em>{" "}
        you can plug into any of the above. A deep network is a stack of
        simple layers whose composition can approximate very complex
        functions. We&apos;ll review the neural-network part in week 4 (and
        its quantum analogue in week 5) because
        that is where the quantum analogy kicks in.
      </p>

      <h2>Why does data size matter?</h2>
      <p>
        The deck&apos;s slogan was: &quot;Increasing the number of datasets!&quot;
        That is more than marketing. Classical generalization bounds say the
        test error of an ML model behaves roughly like
      </p>
      <MathBlock>
        {"\\text{test error} \\;\\lesssim\\; \\text{train error} + \\widetilde{O}\\!\\left(\\sqrt{\\tfrac{\\,\\text{capacity}\\,}{N}}\\right),"}
      </MathBlock>
      <p>
        so doubling <MathInline>{"N"}</MathInline> shrinks the gap between train
        and test by a factor of <MathInline>{"\\sqrt{2}"}</MathInline>. That is the
        whole reason &quot;scale up the data&quot; has been the dominant
        recipe for the last decade — and the reason people want a faster
        learner (possibly quantum) for the data we already have.
      </p>

      <h2>The training loop: gradient descent</h2>
      <p>
        Across every paradigm above, the optimizer is basically the same idea:
        follow the gradient of the loss downhill. Write the average loss as
      </p>
      <MathBlock>
        {"L(\\theta) \\;=\\; \\frac{1}{N}\\sum_{i=1}^{N} \\ell\\!\\big(f_\\theta(\\mathbf{x}_i),\\, y_i\\big),"}
      </MathBlock>
      <p>then iterate</p>
      <MathBlock>
        {"\\theta_{k+1} \\;=\\; \\theta_k \\;-\\; \\eta\\, \\nabla_\\theta L(\\theta_k),"}
      </MathBlock>
      <p>
        with learning rate <MathInline>{"\\eta > 0"}</MathInline>. Geometrically
        the update is just &quot;walk downhill on the loss surface&quot;: at
        each iterate the gradient points in the direction of steepest ascent,
        so the negative gradient is the direction of steepest descent, and{" "}
        <MathInline>{"\\eta"}</MathInline> sets how big a step we take.
      </p>

      <LossLandscape />

      <p>
        Two things become obvious from the picture. First, the loss surface
        is almost never a single bowl — typical neural-network losses have
        many local minima and saddle points, so where we end up depends on
        where we start and how big our steps are. Second, a little bit of
        noise in the gradient is not always bad: it lets the iterates jump
        out of shallow traps and is a big reason stochastic gradient descent
        (next) often <em>outperforms</em> full-batch GD in practice. Three
        common variants:
      </p>
      <ul>
        <li>
          <strong>Batch GD.</strong> Use all <MathInline>{"N"}</MathInline> examples
          per step. Stable, but expensive when{" "}
          <MathInline>{"N"}</MathInline> is huge.
        </li>
        <li>
          <strong>Stochastic GD (SGD).</strong> Use one example per step. Noisy
          but cheap, and the noise can actually help escape bad local minima.
        </li>
        <li>
          <strong>Mini-batch GD.</strong> Use a batch of{" "}
          <MathInline>{"B"}</MathInline> examples. The standard compromise in
          practice; the gradient estimator is
          <MathBlock>
        {"\\widehat{\\nabla}_\\theta L \\;=\\; \\frac{1}{B}\\sum_{i \\in \\mathcal{B}} \\nabla_\\theta \\ell\\!\\big(f_\\theta(\\mathbf{x}_i),\\, y_i\\big)."}
      </MathBlock>
        </li>
      </ul>

      <h2>Why is this important for QML?</h2>
      <p>
        Look at the loop above — the only piece that is special to quantum is{" "}
        <em>how we compute</em>{" "}
        <MathInline>{"\\nabla_\\theta L"}</MathInline>. The rest stays exactly the
        same. So our QML story from week 2 onwards is:
      </p>
      <ol>
        <li>
          Replace <MathInline>{"f_\\theta"}</MathInline> with a parametrized quantum
          circuit.
        </li>
        <li>
          Find a way to evaluate the gradient with respect to the quantum
          parameters — this is where the <em>parameter-shift rule</em> in week
          4 enters.
        </li>
        <li>
          Reuse the classical optimizer (SGD, Adam, …) on top of those
          gradients.
        </li>
      </ol>
      <p>
        Everything else you already know about ML — overfitting, learning-rate
        schedules, regularization — carries over essentially unchanged.
      </p>
    </>
  )
}
