import { MathBlock, MathInline } from "@/components/teaching/qdyn/math"
import { ShorCircuit } from "./diagrams"

export default function Week9() {
  return (
    <>
      <p>
        Shor&apos;s algorithm is the headline result of quantum computing: it
        factors integers in polynomial time. Since RSA encryption is built on
        the assumption that factoring is hard, Shor&apos;s algorithm is
        roughly &quot;the reason cryptographers are nervous about quantum
        computers&quot;. Let&apos;s see how it works.
      </p>

      <h3>1. RSA in 60 seconds</h3>
      <p>
        Pick two big primes <MathInline>{`p, q`}</MathInline>, multiply them
        to get <MathInline>{`N = pq`}</MathInline>, and publish{" "}
        <MathInline>{`N`}</MathInline>. The hard step for an eavesdropper:
        given only <MathInline>{`N`}</MathInline>, recover{" "}
        <MathInline>{`p`}</MathInline> and{" "}
        <MathInline>{`q`}</MathInline>.
      </p>
      <p>The RSA pieces:</p>
      <ul>
        <li>
          Public key: <MathInline>{`(N, e)`}</MathInline> with{" "}
          <MathInline>{`\\gcd(e, \\varphi(N)) = 1`}</MathInline>.
        </li>
        <li>
          Private key: <MathInline>{`d`}</MathInline> with{" "}
          <MathInline>{`e d \\equiv 1 \\pmod{\\varphi(N)}`}</MathInline>, where{" "}
          <MathInline>{`\\varphi(N) = (p-1)(q-1)`}</MathInline>.
        </li>
        <li>
          Encryption: <MathInline>{`c = m^e \\bmod N`}</MathInline>.
        </li>
        <li>
          Decryption: <MathInline>{`m = c^d \\bmod N`}</MathInline>.
        </li>
      </ul>

      <p>
        Toy example: <MathInline>{`p = 17, q = 19`}</MathInline>{" "}
        →{" "}
        <MathInline>{`N = 323, \\varphi(N) = 288`}</MathInline>. Pick{" "}
        <MathInline>{`e = 7`}</MathInline>; then{" "}
        <MathInline>{`d = 247`}</MathInline>. Plaintext{" "}
        <MathInline>{`m = 65`}</MathInline> encrypts to{" "}
        <MathInline>{`c = 65^7 \\bmod 323 = 255`}</MathInline>, and{" "}
        <MathInline>{`255^{247} \\bmod 323`}</MathInline> brings us back to 65.
      </p>

      <p>
        Classically, factoring <MathInline>{`N`}</MathInline> by brute force is
        exponential in the number of digits, so for a 2048-bit RSA modulus we
        currently say &quot;impossible&quot;. Shor&apos;s algorithm changes
        that to polynomial.
      </p>

      <h3>2. The reduction: factoring → period finding</h3>
      <p>
        Pick a random <MathInline>{`a`}</MathInline> with{" "}
        <MathInline>{`\\gcd(a, N) = 1`}</MathInline> and consider the function
      </p>

      <MathBlock>{`f(x) \\;=\\; a^x \\bmod N`}</MathBlock>

      <p>
        This is periodic in <MathInline>{`x`}</MathInline>:{" "}
        <MathInline>{`f(x + r) = f(x)`}</MathInline> for some period{" "}
        <MathInline>{`r`}</MathInline>. If we find that{" "}
        <MathInline>{`r`}</MathInline> and it&apos;s even and{" "}
        <MathInline>{`a^{r/2} \\not\\equiv -1 \\pmod N`}</MathInline>, then
      </p>

      <MathBlock>{`a^r \\equiv 1 \\pmod N \\;\\Rightarrow\\; (a^{r/2} - 1)(a^{r/2} + 1) \\equiv 0 \\pmod N`}</MathBlock>

      <p>
        Compute <MathInline>{`\\gcd(a^{r/2} \\pm 1, N)`}</MathInline> with the
        Euclidean algorithm and out pop <MathInline>{`p`}</MathInline> and{" "}
        <MathInline>{`q`}</MathInline>. So factoring reduces to{" "}
        <strong>finding the period of <MathInline>{`a^x \\bmod N`}</MathInline></strong>.
        Classically, that period finding is still exponential. Quantumly, it
        isn&apos;t.
      </p>

      <h3>3. Quantum period finding</h3>
      <ol>
        <li>
          Use <MathInline>{`2n`}</MathInline> qubits for the &quot;counting&quot;
          register, where <MathInline>{`n = \\lceil\\log_2 N\\rceil`}</MathInline>,
          and another <MathInline>{`n`}</MathInline> qubits to hold{" "}
          <MathInline>{`a^x \\bmod N`}</MathInline>.
        </li>
        <li>
          Hadamard the counting register so it holds the uniform superposition{" "}
          <MathInline>{`\\sum_x |x\\rangle`}</MathInline>.
        </li>
        <li>
          Apply the modular exponentiation oracle{" "}
          <MathInline>{`U_a|x\\rangle|0\\rangle = |x\\rangle|a^x \\bmod N\\rangle`}</MathInline>.
        </li>
        <li>
          Apply inverse QFT to the counting register, then measure it.
        </li>
      </ol>

      <ShorCircuit />

      <p>
        After step 3 the state is{" "}
        <MathInline>{`\\sum_x |x\\rangle|a^x \\bmod N\\rangle`}</MathInline>.
        Measuring the second register would collapse the first to a periodic
        superposition <MathInline>{`\\sum_l |x_0 + l r\\rangle`}</MathInline>{" "}
        for some random <MathInline>{`x_0`}</MathInline>. The QFT of that
        comb is another comb, but with spacing{" "}
        <MathInline>{`2^{2n}/r`}</MathInline> — so its peaks tell you{" "}
        <MathInline>{`r`}</MathInline> indirectly.
      </p>

      <h3>4. Pulling out the period — continued fractions</h3>
      <p>
        What we measure is some <MathInline>{`k`}</MathInline> that&apos;s
        roughly
      </p>

      <MathBlock>{`\\frac{k}{2^{2n}} \\;\\approx\\; \\frac{s}{r} \\quad \\text{for some integer } s`}</MathBlock>

      <p>
        We don&apos;t know <MathInline>{`s`}</MathInline> or{" "}
        <MathInline>{`r`}</MathInline>, but a classical continued-fraction
        expansion of <MathInline>{`k / 2^{2n}`}</MathInline> recovers candidate
        fractions <MathInline>{`s'/r'`}</MathInline>. For each candidate, check
        whether <MathInline>{`a^{r'} \\equiv 1 \\pmod N`}</MathInline>. If yes,
        we&apos;ve got the period.
      </p>

      <h3>5. Putting it all together</h3>
      <ol>
        <li>
          Pick random <MathInline>{`a`}</MathInline> with{" "}
          <MathInline>{`\\gcd(a, N) = 1`}</MathInline>.
        </li>
        <li>
          Use Shor&apos;s quantum subroutine to find the period{" "}
          <MathInline>{`r`}</MathInline> of{" "}
          <MathInline>{`a^x \\bmod N`}</MathInline>.
        </li>
        <li>
          If <MathInline>{`r`}</MathInline> is odd or{" "}
          <MathInline>{`a^{r/2} \\equiv -1 \\pmod N`}</MathInline>, pick a
          new <MathInline>{`a`}</MathInline>.
        </li>
        <li>
          Otherwise compute{" "}
          <MathInline>{`p = \\gcd(a^{r/2} - 1, N), q = \\gcd(a^{r/2} + 1, N)`}</MathInline>
          .
        </li>
      </ol>

      <p>
        With high probability, a constant number of tries finds the period and
        thus the factorization. Total runtime: polynomial in{" "}
        <MathInline>{`\\log N`}</MathInline> — versus exponential
        classically.
      </p>

      <h3>6. Why this matters</h3>
      <ul>
        <li>
          RSA-2048 keys are estimated to need roughly{" "}
          <MathInline>{`\\sim 4{,}000`}</MathInline> logical qubits and many
          billion gates to break with Shor. We&apos;re not there yet on real
          hardware, but it&apos;s now a roadmap problem, not a wall.
        </li>
        <li>
          NIST has already standardized{" "}
          <em>post-quantum cryptography</em> alternatives (lattice-based,
          hash-based) that resist Shor.
        </li>
      </ul>

      <h3>Recap</h3>
      <ul>
        <li>RSA security ⇐ factoring is hard ⇐ period finding is hard.</li>
        <li>
          Period finding becomes easy with QFT, which gives the quantum
          speedup.
        </li>
        <li>
          Shor: <MathInline>{`O(\\log^3 N)`}</MathInline> quantum operations
          vs <MathInline>{`\\exp(\\log N)`}</MathInline> classical.
        </li>
      </ul>
      <p>Next week: from algorithms back to applications — quantum machine learning.</p>
    </>
  )
}
