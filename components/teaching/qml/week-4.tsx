import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import {
  ActivationFunctions,
  FeedForwardNetwork,
  PerceptronDiagram,
} from "@/components/teaching/qml/diagrams"

export default function Week4() {
  return (
    <>
      <h2>Classical neural networks, in plain words</h2>
      <p>
        Before we touch the quantum version next week, let&apos;s nail down
        what a classical neural network actually <em>is</em>. The mental
        picture is simple: a network is a big function{" "}
        <MathInline>{"f_\\theta : \\mathbb{R}^d \\to \\mathbb{R}^k"}</MathInline>{" "}
        built by stacking tiny, identical pieces called <em>neurons</em>. The
        parameters <MathInline>{"\\theta"}</MathInline> are just the weights
        and biases inside those neurons, and training adjusts them with the
        gradient-descent loop from Week 1.
      </p>

      <h2>The perceptron — one neuron</h2>
      <p>
        The atomic unit of a feed-forward network is the{" "}
        <em>perceptron</em>. Given an input vector{" "}
        <MathInline>{"\\mathbf{x}\\in\\mathbb{R}^d"}</MathInline>, a weight
        vector <MathInline>{"\\mathbf{w}\\in\\mathbb{R}^d"}</MathInline>, a
        scalar bias <MathInline>{"b"}</MathInline>, and a nonlinearity{" "}
        <MathInline>{"\\sigma"}</MathInline>, the neuron computes
      </p>
      <MathBlock>
        {"a(\\mathbf{x}) \\;=\\; \\sigma\\!\\big(\\,\\mathbf{w}^\\top \\mathbf{x} + b\\,\\big) \\;=\\; \\sigma\\!\\Big(\\,\\sum_{i=1}^{d} w_i\\, x_i + b\\,\\Big)."}
      </MathBlock>
      <p>
        Two steps, very explicitly: (1) take a <em>weighted sum</em> of the
        inputs and shift by a bias — this is the &quot;affine&quot; or
        &quot;pre-activation&quot; part; (2) push the result through{" "}
        <MathInline>{"\\sigma"}</MathInline> to get the final{" "}
        <em>activation</em> <MathInline>{"a"}</MathInline>. Without{" "}
        <MathInline>{"\\sigma"}</MathInline>, no matter how many layers we
        stack the whole network would collapse back to a single linear map —
        the nonlinearity is what gives neural nets their power.
      </p>

      <PerceptronDiagram />

      <h2>Choosing the nonlinearity</h2>
      <p>
        A handful of activation functions cover almost everything in
        practice. The three classics:
      </p>
      <ul>
        <li>
          <strong>Sigmoid:</strong>{" "}
          <MathInline>{"\\sigma(x) = \\dfrac{1}{1+e^{-x}}"}</MathInline>. Maps
          into <MathInline>{"(0,1)"}</MathInline>, smooth, but saturates for
          large <MathInline>{"|x|"}</MathInline> (the derivative goes to zero,
          which slows training in deep networks).
        </li>
        <li>
          <strong>tanh:</strong>{" "}
          <MathInline>{"\\sigma(x) = \\tanh(x)"}</MathInline>. Same S-shape but
          zero-centred in <MathInline>{"(-1,1)"}</MathInline>. Often nicer for
          intermediate layers than sigmoid.
        </li>
        <li>
          <strong>ReLU:</strong>{" "}
          <MathInline>{"\\sigma(x) = \\max(0, x)"}</MathInline>. Cheap,
          non-saturating on the positive side, and now the default in modern
          deep learning.
        </li>
      </ul>

      <ActivationFunctions />

      <p>
        For a binary classification output you usually keep a sigmoid (so the
        output reads as a probability); for multi-class outputs the final
        layer is a <em>softmax</em>. Inside the network, ReLU and its variants
        dominate.
      </p>

      <h2>From one neuron to a layer</h2>
      <p>
        A single perceptron can only represent very simple decision rules. A
        whole <em>layer</em> is just many neurons computed in parallel from
        the same input. Stack their weights into a matrix and we can write
        the layer in one line of linear algebra. If layer{" "}
        <MathInline>{"\\ell"}</MathInline> has{" "}
        <MathInline>{"n_\\ell"}</MathInline> neurons and the previous layer
        produced <MathInline>{"\\mathbf{a}^{(\\ell-1)}\\in\\mathbb{R}^{n_{\\ell-1}}"}</MathInline>,
        the layer&apos;s output is
      </p>
      <MathBlock>
        {"\\mathbf{a}^{(\\ell)} \\;=\\; \\sigma\\!\\big(\\,W^{(\\ell)}\\,\\mathbf{a}^{(\\ell-1)} \\,+\\, \\mathbf{b}^{(\\ell)}\\,\\big),"}
      </MathBlock>
      <p>
        where{" "}
        <MathInline>{"W^{(\\ell)} \\in \\mathbb{R}^{n_\\ell \\times n_{\\ell-1}}"}</MathInline>{" "}
        is the weight matrix,{" "}
        <MathInline>{"\\mathbf{b}^{(\\ell)} \\in \\mathbb{R}^{n_\\ell}"}</MathInline>{" "}
        is the bias vector, and <MathInline>{"\\sigma"}</MathInline> is
        applied element-wise. Every entry of{" "}
        <MathInline>{"\\mathbf{a}^{(\\ell)}"}</MathInline> is exactly one
        perceptron of the form above.
      </p>

      <h2>Feed-forward: one layer at a time</h2>
      <p>
        A <em>feed-forward neural network</em> is just a chain of such
        layers, evaluated strictly left-to-right (no loops, no shortcuts back
        to earlier layers). Set the input layer to the data,{" "}
        <MathInline>{"\\mathbf{a}^{(0)} = \\mathbf{x}"}</MathInline>, then for{" "}
        <MathInline>{"\\ell = 1, 2, \\dots, L"}</MathInline> compute
      </p>
      <MathBlock>
        {"\\mathbf{z}^{(\\ell)} = W^{(\\ell)}\\,\\mathbf{a}^{(\\ell-1)} + \\mathbf{b}^{(\\ell)},\\qquad \\mathbf{a}^{(\\ell)} = \\sigma\\!\\big(\\mathbf{z}^{(\\ell)}\\big)."}
      </MathBlock>
      <p>
        The final activation{" "}
        <MathInline>{"\\mathbf{a}^{(L)}"}</MathInline> is the network&apos;s
        prediction <MathInline>{"\\hat{\\mathbf{y}}"}</MathInline>. The whole
        network as one function is just the composition
      </p>
      <MathBlock>
        {"f_\\theta(\\mathbf{x}) \\;=\\; \\sigma\\!\\big(W^{(L)}\\,\\sigma\\!\\big(W^{(L-1)}\\cdots\\,\\sigma(W^{(1)}\\mathbf{x} + \\mathbf{b}^{(1)})\\cdots\\big)\\big),"}
      </MathBlock>
      <p>
        with parameter set{" "}
        <MathInline>{"\\theta = \\{W^{(\\ell)}, \\mathbf{b}^{(\\ell)}\\}_{\\ell=1}^{L}"}</MathInline>.
        That is, quite literally, the entire definition of a feed-forward
        network. Everything fancy you have seen — convolutional layers,
        residual connections, attention — is some specialization of choosing
        the weight matrices or wiring.
      </p>

      <FeedForwardNetwork />

      <h2>How does it learn? (a one-paragraph reminder)</h2>
      <p>
        We already saw the answer in Week 1: pick a loss{" "}
        <MathInline>{"L(\\theta) = \\frac{1}{N}\\sum_i \\ell(f_\\theta(\\mathbf{x}_i), y_i)"}</MathInline>{" "}
        and run gradient descent. The only new ingredient inside a network is
        how to compute <MathInline>{"\\nabla_\\theta L"}</MathInline>{" "}
        efficiently — that is the <em>backpropagation</em> algorithm, which
        applies the chain rule layer-by-layer from output back to input. The
        per-step update for any weight is the same one we wrote in Week 1,
      </p>
      <MathBlock>
        {"W^{(\\ell)} \\;\\leftarrow\\; W^{(\\ell)} \\,-\\, \\eta\\, \\frac{\\partial L}{\\partial W^{(\\ell)}}."}
      </MathBlock>
      <p>
        We will not re-derive backprop in this seminar — it is standard
        material in any deep-learning course. The thing to remember is that
        training a classical NN ultimately just needs two ingredients:{" "}
        <em>a way to evaluate the network</em> (the feed-forward pass above)
        and <em>a way to compute gradients</em> (backprop).
      </p>

      <h2>Why is this the setup for QML?</h2>
      <p>
        Next week we will replace the feed-forward chain with a{" "}
        <em>parametrized quantum circuit</em>, and the layer-by-layer affine
        map <MathInline>{"W^{(\\ell)} \\mathbf{a}^{(\\ell-1)} + \\mathbf{b}^{(\\ell)}"}</MathInline>{" "}
        will become a layer of trainable rotation gates. The nonlinearity{" "}
        <MathInline>{"\\sigma"}</MathInline> will sneak in through{" "}
        <em>measurement</em> — squaring amplitudes is not linear. And because
        backprop does not work on a real quantum device (it would require
        storing intermediate quantum states), we will need a different way to
        compute <MathInline>{"\\nabla_\\theta L"}</MathInline>: the{" "}
        <em>parameter-shift rule</em>. That is the entire content of Week 5.
      </p>
    </>
  )
}
