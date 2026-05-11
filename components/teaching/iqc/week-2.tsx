import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week2() {
  return (
    <>
      <p>
        This week is a math toolbox. You won&apos;t do quantum mechanics for
        long without bumping into vectors, matrices, eigenvalues, tensor
        products, and Dirac&apos;s bra–ket notation. We&apos;ll cover all of
        them at a friendly pace.
      </p>

      <h3>1. Vectors</h3>
      <p>
        A vector is anything with a magnitude and a direction. In 2D you can
        draw it as an arrow; in <MathInline>{`n`}</MathInline> dimensions we
        write it as a column of numbers:
      </p>

      <MathBlock>{`\\vec v \\;=\\; \\begin{pmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{pmatrix}`}</MathBlock>

      <p>The magnitude (Euclidean norm) is</p>

      <MathBlock>{`\\|\\vec v\\| \\;=\\; \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}`}</MathBlock>

      <p>
        The <strong>inner product</strong> of two vectors measures how aligned
        they are:
      </p>

      <MathBlock>{`\\vec a \\cdot \\vec b \\;=\\; \\sum_i a_i\\,b_i \\;=\\; \\|\\vec a\\|\\,\\|\\vec b\\|\\cos\\theta`}</MathBlock>

      <p>
        If <MathInline>{`\\vec a \\cdot \\vec b = 0`}</MathInline>, the two
        vectors are <strong>orthogonal</strong> — they don&apos;t overlap at
        all. Orthogonal directions are the right way to pick basis vectors.
      </p>

      <h3>2. Matrices</h3>
      <p>
        A matrix is a rectangular grid of numbers. We&apos;ll mostly use them
        as <em>linear transformations</em> that act on vectors:
      </p>

      <MathBlock>{`A \\;=\\; \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix}, \\quad A\\vec v \\;=\\; \\begin{pmatrix} a_{11}v_1 + a_{12}v_2 \\\\ a_{21}v_1 + a_{22}v_2 \\end{pmatrix}`}</MathBlock>

      <p>The two operations we&apos;ll lean on a lot:</p>
      <ul>
        <li>
          <strong>Transpose</strong>{" "}
          <MathInline>{`A^T`}</MathInline>: swap rows and columns.
        </li>
        <li>
          <strong>Conjugate transpose / dagger</strong>{" "}
          <MathInline>{`A^\\dagger = (A^*)^T`}</MathInline>: transpose, then
          take the complex conjugate of every entry. This is the natural
          generalization for complex matrices.
        </li>
        <li>
          <strong>Inverse</strong>{" "}
          <MathInline>{`A^{-1}`}</MathInline>: undoes <MathInline>{`A`}</MathInline>.
        </li>
      </ul>

      <h3>3. Eigenvalues and diagonalization</h3>
      <p>
        For a square matrix <MathInline>{`A`}</MathInline>, a nonzero vector{" "}
        <MathInline>{`\\vec v`}</MathInline> with{" "}
        <MathInline>{`A\\vec v = \\lambda\\vec v`}</MathInline> is an{" "}
        <strong>eigenvector</strong> with eigenvalue{" "}
        <MathInline>{`\\lambda`}</MathInline>. You find them by solving:
      </p>

      <MathBlock>{`\\det(A - \\lambda I) \\;=\\; 0`}</MathBlock>

      <p>
        If <MathInline>{`A`}</MathInline> has enough independent eigenvectors,
        we can <strong>diagonalize</strong> it:
      </p>

      <MathBlock>{`A \\;=\\; P\\,D\\,P^{-1}`}</MathBlock>

      <p>
        where <MathInline>{`D`}</MathInline> has eigenvalues on the diagonal
        and <MathInline>{`P`}</MathInline> has the eigenvectors as columns.
        Lots of quantum operations become trivial once you diagonalize them.
      </p>

      <h3>4. Trace</h3>
      <p>
        The <strong>trace</strong> is just the sum of the diagonal entries:
      </p>

      <MathBlock>{`\\text{Tr}(A) \\;=\\; \\sum_{i} A_{ii} \\;=\\; \\sum_i \\lambda_i`}</MathBlock>

      <p>
        The trace equals the sum of eigenvalues. In quantum mechanics, the
        trace of a density matrix gives the total probability, which always
        has to be 1.
      </p>

      <h3>5. Special matrix classes</h3>
      <ul>
        <li>
          <strong>Symmetric:</strong>{" "}
          <MathInline>{`A^T = A`}</MathInline>.
        </li>
        <li>
          <strong>Orthogonal:</strong>{" "}
          <MathInline>{`A^T A = I`}</MathInline> (real-valued, preserves
          lengths).
        </li>
        <li>
          <strong>Hermitian:</strong>{" "}
          <MathInline>{`A^\\dagger = A`}</MathInline>. Real eigenvalues. Every
          quantum observable is Hermitian.
        </li>
        <li>
          <strong>Unitary:</strong>{" "}
          <MathInline>{`U^\\dagger U = I`}</MathInline>. Preserves inner
          products. <em>Every quantum gate is unitary.</em>
        </li>
      </ul>

      <h3>6. Tensor product</h3>
      <p>
        When you want a vector space describing <strong>two</strong> qubits,
        you don&apos;t just add — you{" "}
        <strong>tensor product</strong>. For vectors:
      </p>

      <MathBlock>{`\\begin{pmatrix}a \\\\ b\\end{pmatrix} \\otimes \\begin{pmatrix}c \\\\ d\\end{pmatrix} \\;=\\; \\begin{pmatrix} a c \\\\ a d \\\\ b c \\\\ b d \\end{pmatrix}`}</MathBlock>

      <p>For matrices, every entry of the first matrix gets multiplied by the entire second matrix:</p>

      <MathBlock>{`A \\otimes B \\;=\\; \\begin{pmatrix} a_{11} B & a_{12} B \\\\ a_{21} B & a_{22} B \\end{pmatrix}`}</MathBlock>

      <p>
        Two qubits → <MathInline>{`4`}</MathInline> dimensions.{" "}
        <MathInline>{`N`}</MathInline> qubits →{" "}
        <MathInline>{`2^N`}</MathInline> dimensions. This is where exponential
        scaling shows up.
      </p>

      <h3>7. Dirac (bra–ket) notation</h3>
      <p>
        Physicists write column vectors as <strong>kets</strong> and their
        conjugate-transposes as <strong>bras</strong>:
      </p>

      <MathBlock>{`|0\\rangle = \\begin{pmatrix}1 \\\\ 0\\end{pmatrix}, \\quad |1\\rangle = \\begin{pmatrix}0 \\\\ 1\\end{pmatrix}, \\quad \\langle 0| = \\begin{pmatrix}1 & 0\\end{pmatrix}, \\quad \\langle 1| = \\begin{pmatrix}0 & 1\\end{pmatrix}`}</MathBlock>

      <p>The inner product is then just</p>

      <MathBlock>{`\\langle\\,\\psi\\,|\\,\\phi\\,\\rangle \\;=\\; \\sum_i \\psi_i^*\\,\\phi_i`}</MathBlock>

      <p>
        and we have orthonormality{" "}
        <MathInline>{`\\langle 0|0\\rangle = \\langle 1|1\\rangle = 1`}</MathInline>,{" "}
        <MathInline>{`\\langle 0|1\\rangle = 0`}</MathInline>. The square of
        the amplitude
      </p>

      <MathBlock>{`P(\\text{measure } 0) \\;=\\; |\\langle 0|\\psi\\rangle|^2`}</MathBlock>

      <p>
        is the probability of measuring{" "}
        <MathInline>{`0`}</MathInline> when you read out{" "}
        <MathInline>{`|\\psi\\rangle`}</MathInline>. This is the Born rule, and
        it shows up everywhere from here on out.
      </p>

      <h3>Recap</h3>
      <ul>
        <li>Vectors, inner products, orthogonality.</li>
        <li>Matrices, transpose, dagger, inverse.</li>
        <li>Eigenvalues, diagonalization, trace.</li>
        <li>Symmetric / orthogonal / Hermitian / unitary.</li>
        <li>Tensor product for multi-qubit spaces.</li>
        <li>Dirac notation: kets, bras, and the Born rule.</li>
      </ul>
    </>
  )
}
