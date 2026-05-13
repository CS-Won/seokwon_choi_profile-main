import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Academic Interests | Seokwon Choi",
  description:
    "What I work on: quantum algorithms for physics, LCHS and open-system dynamics, and noise / error mitigation on near-term hardware.",
}

export default function AcademicInterestsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground">
            ← Blog
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Academic Interests
          </h1>
          <p className="mt-2 text-muted-foreground">
            The two threads I keep coming back to in coursework, reading
            groups, and side projects.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">
              Quantum algorithms for solving complex physics problems
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Classical computers struggle the moment a quantum system gets
                a little bit complicated. The state space grows exponentially
                with the number of particles, so simulating even a modest spin
                chain or molecule quickly becomes out of reach. Quantum
                computers map this problem onto their own native degrees of
                freedom, which is exactly the setting where they can pull
                ahead.
              </p>
              <p>
                I am especially interested in{" "}
                <strong className="font-semibold text-foreground">
                  linear combination of Hamiltonian simulation (LCHS)
                </strong>
                . The idea is to express a{" "}
                <em>non-unitary</em> propagator — for example the exponential
                of a non-Hermitian generator — as a weighted combination (or
                integral) of ordinary unitary time evolutions, each of which
                can be simulated with standard Hamiltonian-simulation
                techniques. That makes it possible to target dynamics that are
                hard to capture with a single closed-system Trotterization,
                including models that used to sit just outside the usual
                unitary-simulation toolbox.
              </p>
              <p>
                In the same direction, I care a lot about{" "}
                <strong className="font-semibold text-foreground">
                  open quantum systems
                </strong>{" "}
                described by{" "}
                <strong className="font-semibold text-foreground">
                  Lindblad master equations
                </strong>
                . Real experiments are never perfectly isolated: decoherence
                and dissipation are part of the physics, not only nuisance
                terms on top of a Schrödinger equation. Connecting Lindbladian
                evolution to algorithms such as LCHS — or to other
                block-encoding and linear-ODE approaches — is where “quantum
                algorithms for physics” becomes concrete for me: you are
                matching the simulator to the actual channel the sample sees.
              </p>
              <p>
                I still follow the more classical toolkit — variational
                ground-state methods, Trotterized real-time evolution,
                spin-chain models, and linear-algebra subroutines such as HHL
                and its cousins — but LCHS and Lindbladian dynamics are the
                threads I want to push on most.
              </p>
              <p className="text-xs text-muted-foreground/90">
                For background on LCHS as a framework for non-unitary dynamics,
                see for example the overview in the{" "}
                <a
                  href="https://docs.classiq.io/latest/explore/algorithms/quantum_differential_equations_solvers/lchs/lchs/"
                  className="underline underline-offset-2 hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Classiq documentation on LCHS
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">
              Noise, errors, and mitigation
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Real hardware does not give you the clean unitary you wrote
                down. Gates leak, qubits decohere, readout flips bits with some
                probability, and crosstalk couples neighbors you would rather
                keep apart. Any honest quantum experiment has to take this
                seriously, otherwise the numbers you report are mostly about
                your noise model, not the physics you were trying to study.
              </p>
              <p>
                On the mitigation side I am drawn to methods that do not need
                a full error-correcting code: zero-noise extrapolation,
                probabilistic error cancellation, dynamical decoupling, and the
                careful design of hardware-efficient ansatze that avoid the
                deepest-noise paths. These are statistical tricks that buy you a
                meaningful amount of accuracy at the cost of more shots, and
                they are what makes near-term experiments worth running at all.
              </p>
              <p>
                On the correction side, I am still learning the formal side —
                stabilizer codes, surface codes, fault-tolerant threshold
                theorems. The two halves talk to each other: mitigation tells
                you what is possible today, and correction tells you what you
                have to build for tomorrow.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
