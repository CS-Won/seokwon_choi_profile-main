import type { Metadata } from "next"
import { Phone } from "lucide-react"
import { CvNav } from "@/components/cv-nav"
import { PublicationsBlock } from "@/components/publications-block"
import {
  TimelineItem,
  ProjectItem,
  SkillGroup,
  CertificationCard,
} from "@/components/cv-sections"

export const metadata: Metadata = {
  title: "Curriculum Vitae | Seokwon Choi",
  description: "Curriculum vitae — Seokwon Choi",
}

export default function CvPage() {
  return (
    <>
      <CvNav />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <header
            id="cv-heading"
            className="mb-12 scroll-mt-24 text-center md:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Curriculum Vitae
            </h1>
            <p className="mt-2 text-muted-foreground">
              Seokwon Choi · Yonsei University
            </p>
          </header>

          <hr className="mb-12 border-border" />

          <section id="education" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Education
            </h2>
            <div className="relative border-l-2 border-border pl-6">
              <TimelineItem
                title="B.S. in Physics, B.S. in Integrated Technology"
                subtitle="Yonsei University"
                period="Feb 2021 — Present"
                description="GPA: 3.8/4.3 | Expected graduation: mid 2027"
                clubs={[
                  {
                    name: "Quantum Information at Yonsei Academy (QIYA)",
                    period: "2024 — Present",
                  },
                  {
                    name: "EUPHONIA Yonsei Amateur Orchestra (Viola)",
                    period: "2024 — Present",
                  },
                ]}
              />
              <TimelineItem
                title="EAP Exchange Student"
                subtitle="UC Santa Barbara"
                period="Fall 2025 — Present"
              />
            </div>
          </section>

          <hr className="mb-12 border-border" />

          <section id="publications" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Publications
            </h2>
            <PublicationsBlock />
          </section>

          <hr className="mb-12 border-border" />

          <section id="experience" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Research Experience
            </h2>
            <div className="relative border-l-2 border-border pl-6">
              <TimelineItem
                title="Quantum Sensing and Imaging Lab — Prof. Ania Bleszynski Jayich"
                subtitle="UC Santa Barbara"
                period="Feb 2026 — Present"
                description="Hamiltonian simulation of NV dipole XXZ and other complex systems numerically."
              />
              <TimelineItem
                title="Quantum Computer Lab Intern — Prof. Chaeyon Park"
                subtitle="Yonsei University"
                period="Jan 2025 — Oct 2025"
                description="Built and benchmarked hardware-efficient ansatze for N-body Hamiltonian simulation on the IBM-Yonsei superconducting quantum processor, focusing on circuit optimization and fidelity performance."
              />
              <TimelineItem
                title="Institute of Quantum Technology Intern"
                subtitle="Yonsei University"
                period="Sep 2024 — Dec 2024"
                description="Quantum computing education assisting and simulation of quantum gate fidelity and qubit coherence times."
              />
              <TimelineItem
                title="KIAS Intern — Prof. Jaewan Kim"
                subtitle="Korea Institute for Advanced Study"
                period="Jul 2024 — Aug 2024"
                description="Theoretical and experimental research on quantum entanglement and quantum state tomography, trotterization."
              />
              <TimelineItem
                title="Solid State Spectroscopy Lab Intern — Prof. Jaehoon Kim"
                subtitle="Yonsei University"
                period="Dec 2021 — Feb 2022"
                description="Optical response of Quantum Topological Materials."
              />
            </div>
          </section>

          <hr className="mb-12 border-border" />

          <section id="projects" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Featured Projects
            </h2>
            <div className="space-y-6">
              <ProjectItem
                title="Superconductor Tc Approximation through Quantum Neural Network"
                description="Project while visiting Brookhaven National Lab as student researcher."
                technologies={["Qiskit", "Python", "QNN"]}
                period="Jan 2025"
              />
              <ProjectItem
                title="SSVQE: Quantum Eigensolver to Find k Excited States"
                description="Implemented the SSVQE on IBM hardware and analyzed failure mechanisms caused by noise-induced breakdown of subspace orthogonality."
                technologies={["IBM Quantum", "Qiskit", "Python"]}
                period="Jun 2025"
              />
              <ProjectItem
                title="RL-Based Variational Ansatz Optimization"
                description="Developed reinforcement-learning-based variational ansatz optimization for the NTU-IBM Quantum 2025 Hackathon (2nd Prize)."
                technologies={["Python", "PyTorch", "Qiskit"]}
                period="Aug 2025"
              />
            </div>

            <h3 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Teaching Experience
            </h3>
            <div className="relative border-l-2 border-border pl-6">
              <TimelineItem
                title="Undergraduate Tutor — Quantum Mechanics I"
                subtitle="Yonsei University"
                period="Spring 2025"
                description="Led weekly problem-solving sessions using Griffiths."
              />
              <TimelineItem
                title="Instructor — Introduction to Quantum Computing (10-week)"
                subtitle="Online Curriculum"
                period="Winter 2024"
                description="Designed and taught undergraduate-level QC curriculum (qubits, gates, Shor's Algorithm, QML)."
              />
              <TimelineItem
                title="Qiskit Fall Festival 2024 in Yonsei — Organizer"
                subtitle="IBM Sponsored Event"
                period="Oct 2024"
                description="Delivered undergraduate-level quantum computing lectures."
              />
            </div>
          </section>

          <hr className="mb-12 border-border" />

          <section id="skills" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Technical Skills
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <SkillGroup
                title="Physics"
                skills={[
                  "Mechanics I, II",
                  "Quantum Mechanics I, II",
                  "Electricity and Magnetism I, II",
                  "Quantum Informatics",
                  "Quantum Computations",
                  "Optical Lab",
                  "Physics Lab A-1, B-1",
                  "Intro to Quantum Computing (Grad)",
                  "Adv. Quantum Machine Learning (Grad)",
                ]}
              />
              <SkillGroup
                title="ML / AI"
                skills={[
                  "Machine Learning",
                  "Natural Lang. Processing and ChatGPT",
                  "Intro to Financial Eng.",
                  "Intro to Deep Learning and Application",
                  "Statistics",
                  "Linear Algebra",
                  "Advanced Calculus I, II",
                ]}
              />
              <SkillGroup
                title="Electrical Engineering"
                skills={[
                  "Electronic Circuits",
                  "Basic Circuit Theory",
                  "Digital Logic Circuits",
                  "Introductory Digital Labs",
                ]}
              />
            </div>
            <div className="mt-6 rounded-lg border border-border p-5">
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Software & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "C",
                  "Qiskit",
                  "VS Code",
                  "GitHub",
                  "Vim",
                  "LaTeX / Overleaf",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-border bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <hr className="mb-12 border-border" />

          <section id="certifications" className="mb-12 scroll-mt-20">
            <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Certifications & Badges
            </h2>
            <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-4">
              <CertificationCard
                title="Semiconductor Scholarship"
                issuer="Yonsei University"
                date="2024 — 2025"
                bgColor="rgb(16, 48, 110)"
              />
              <CertificationCard
                title="Honor"
                issuer="Yonsei Physics"
                date="2022"
                bgColor="rgb(16, 48, 110)"
              />
              <CertificationCard
                title="Tutoring Program — Quantum Dynamics Tutor"
                issuer="Yonsei University"
                date="Spring 2025"
                bgColor="rgb(16, 48, 110)"
              />
              <CertificationCard
                title="Online Tutoring — Quantum Computation Tutor"
                issuer="Yonsei University"
                date="Fall 2024"
                bgColor="rgb(16, 48, 110)"
              />
              <CertificationCard
                title="2024 Qiskit Fall Fest Mentor"
                issuer="IBM"
                date=""
                bgColor="rgb(20, 47, 165)"
              />
              <CertificationCard
                title="Qiskit Global Summer School 2024 — Quantum Excellence"
                issuer="IBM"
                date=""
                bgColor="rgb(20, 47, 165)"
              />
              <CertificationCard
                title="NTU-IBM QC Hackathon 2nd Prize"
                issuer="NTU-IBM Quantum"
                date="Aug 2025"
                bgColor="rgb(20, 47, 165)"
              />
              <CertificationCard
                title="ROK Army Signal Sergeant"
                issuer="1st Division, Paju"
                date="2022 — 2024"
                bgColor="rgb(88, 99, 77)"
              />
            </div>
          </section>

          <footer className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <div className="mb-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                +82-10-7311-2830 (KOR)
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                +1 (805) 259-0776 (US)
              </span>
            </div>
            <p>© 2026 Seokwon Choi. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </>
  )
}
