import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"

export default function Week6() {
  return (
    <>
      <p>
        The next two weeks are about the <strong>Fourier transform</strong>{" "}
        and its quantum cousin, the QFT. The QFT is the backbone of basically
        every quantum algorithm with an exponential speedup — Shor, phase
        estimation, HHL, you name it. This week we set up the classical
        intuition; next week we go quantum.
      </p>

      <h3>1. The big idea</h3>
      <p>
        A Fourier transform splits a signal into its different frequencies.
        Take any waveform — audio, an image, a time series — and the Fourier
        transform tells you which sine and cosine waves it&apos;s made of, and
        how much of each.
      </p>
      <p>
        Joseph Fourier (1822) invented this to model heat flow, but the trick
        quickly spread to optics, signal processing, MP3 compression, and even
        fast integer multiplication (think Schönhage–Strassen, Karatsuba on
        steroids).
      </p>

      <h3>2. Functions are vectors, in disguise</h3>
      <p>
        Last weeks we wrote vectors as <MathInline>{`(v_1, v_2, \\dots, v_n)`}</MathInline>.
        For a function <MathInline>{`f(t)`}</MathInline>, just imagine an
        infinitely-long vector{" "}
        <MathInline>{`(f(t_1), f(t_2), \\dots)`}</MathInline> — the values of{" "}
        <MathInline>{`f`}</MathInline> at every point. With the right inner
        product, all the linear-algebra ideas (basis, orthogonality,
        coefficients) carry over.
      </p>

      <h4>Basis vectors</h4>
      <p>
        Any vector can be written as a sum of basis vectors{" "}
        <MathInline>{`\\hat e_i`}</MathInline> with coefficients{" "}
        <MathInline>{`c_i`}</MathInline>:
      </p>

      <MathBlock>{`\\vec v \\;=\\; \\sum_i c_i\\,\\hat e_i, \\quad c_i \\;=\\; \\hat e_i \\cdot \\vec v`}</MathBlock>

      <p>That extraction is clean only if the basis is orthonormal.</p>

      <h4>Basis functions</h4>
      <p>
        The same idea works for functions if you pick an orthonormal set of
        basis functions. For periodic functions on{" "}
        <MathInline>{`[0, 2\\pi]`}</MathInline>, the classical choice is
        sines and cosines:
      </p>

      <MathBlock>{`\\int_0^{2\\pi} \\cos(mx)\\,\\cos(nx)\\,dx \\;=\\; \\pi\\,\\delta_{mn}, \\quad \\int_0^{2\\pi}\\sin(mx)\\cos(nx)\\,dx = 0`}</MathBlock>

      <p>
        So <MathInline>{`\\{\\sin(nx), \\cos(nx)\\}`}</MathInline> is an
        orthogonal &quot;basis&quot; for periodic functions. Every periodic{" "}
        <MathInline>{`f(x)`}</MathInline> can be written as a sum:
      </p>

      <MathBlock>{`f(x) \\;=\\; \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}\\big[a_n\\cos(nx) + b_n\\sin(nx)\\big]`}</MathBlock>

      <p>That&apos;s the <strong>Fourier series</strong>.</p>

      <h3>3. Extracting coefficients</h3>
      <p>
        Just like with vectors, the coefficients come from inner products with
        the basis:
      </p>

      <MathBlock>{`a_n \\;=\\; \\frac{1}{\\pi}\\int_0^{2\\pi} f(x)\\,\\cos(nx)\\,dx, \\quad b_n \\;=\\; \\frac{1}{\\pi}\\int_0^{2\\pi} f(x)\\,\\sin(nx)\\,dx`}</MathBlock>

      <p>
        Each <MathInline>{`a_n, b_n`}</MathInline> tells us how much of the
        frequency-<MathInline>{`n`}</MathInline> component the signal has.
      </p>

      <h3>4. Euler&apos;s identity bundles sin and cos together</h3>

      <MathBlock>{`e^{i\\theta} \\;=\\; \\cos\\theta + i\\sin\\theta`}</MathBlock>

      <p>
        So instead of carrying around two real coefficients per frequency, we
        can use one complex coefficient. The Fourier series becomes:
      </p>

      <MathBlock>{`f(x) \\;=\\; \\sum_{n=-\\infty}^{\\infty} c_n\\,e^{i n x}, \\qquad c_n \\;=\\; \\frac{1}{2\\pi}\\int_0^{2\\pi} f(x)\\,e^{-i n x}\\,dx`}</MathBlock>

      <p>
        Much cleaner. And it&apos;s the form that generalizes directly to the
        continuous and quantum cases.
      </p>

      <h3>5. From series to transform — continuous functions</h3>
      <p>
        For non-periodic <MathInline>{`f(t)`}</MathInline>, you take the limit
        where the period goes to infinity. The discrete index{" "}
        <MathInline>{`n`}</MathInline> turns into a continuous frequency{" "}
        <MathInline>{`\\omega`}</MathInline>, and the sum becomes an integral:
      </p>

      <MathBlock>{`\\hat f(\\omega) \\;=\\; \\int_{-\\infty}^{\\infty} f(t)\\,e^{-i\\omega t}\\,dt`}</MathBlock>

      <p>with the inverse transform giving</p>

      <MathBlock>{`f(t) \\;=\\; \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} \\hat f(\\omega)\\,e^{i\\omega t}\\,d\\omega`}</MathBlock>

      <p>
        Each <MathInline>{`\\hat f(\\omega)`}</MathInline> tells us the
        amplitude and phase of the frequency-<MathInline>{`\\omega`}</MathInline>{" "}
        component of <MathInline>{`f`}</MathInline>. That&apos;s the picture
        we&apos;ll quantize next week.
      </p>

      <h3>6. Why care for quantum computing?</h3>
      <p>
        Lots of problems become &quot;easy&quot; in Fourier space:
      </p>
      <ul>
        <li>
          Convolutions become multiplications (used in image processing, deep
          learning).
        </li>
        <li>
          Periodic structure in <MathInline>{`f`}</MathInline> shows up as a
          handful of sharp peaks in{" "}
          <MathInline>{`\\hat f`}</MathInline>. Shor&apos;s algorithm exploits
          exactly this: factoring reduces to finding the period of a function,
          which is easy in Fourier space.
        </li>
        <li>
          The FFT brought classical Fourier transforms from{" "}
          <MathInline>{`O(N^2)`}</MathInline> to{" "}
          <MathInline>{`O(N\\log N)`}</MathInline>. The QFT does it in{" "}
          <MathInline>{`O(\\log^2 N)`}</MathInline> on a quantum computer.
        </li>
      </ul>

      <h3>Recap</h3>
      <ul>
        <li>
          Treat functions as vectors with{" "}
          <MathInline>{`\\{\\sin(nx), \\cos(nx)\\}`}</MathInline> as basis →
          Fourier series.
        </li>
        <li>
          Complex form:{" "}
          <MathInline>{`f(x) = \\sum c_n e^{i n x}`}</MathInline>.
        </li>
        <li>
          Continuous limit:{" "}
          <MathInline>{`\\hat f(\\omega) = \\int f(t)e^{-i\\omega t}dt`}</MathInline>.
        </li>
        <li>Frequency picture is the key to every QFT-based algorithm.</li>
      </ul>
    </>
  )
}
