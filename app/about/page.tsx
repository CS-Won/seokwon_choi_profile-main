import type { Metadata } from "next"
import {
  Mail,
  Github,
  FileText,
  GraduationCap,
} from "lucide-react"
import { ProfileImage } from "@/components/profile-image"

export const metadata: Metadata = {
  title: "About | Seokwon Choi",
  description: "About Seokwon Choi — Yonsei University, quantum computing and physics.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <header className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-[3.2fr_4fr]">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border-2 border-border bg-muted">
            <ProfileImage />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Seokwon Choi
            </h1>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              Undergraduate, Yonsei University
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Quantum Computing &middot; Physics &middot; Quantum Algorithms
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm md:justify-start">
              <a
                href="mailto:seokwon0106@yonsei.ac.kr"
                className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="https://github.com/CS-Won"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://scholar.google.com/citations?user=yxBVdjkAAAAJ&hl=ko"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <GraduationCap className="h-4 w-4" />
                Google Scholar
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileText className="h-4 w-4" />
                CV PDF
              </a>
            </div>
          </div>
        </header>

        <hr className="mb-12 border-border" />

        <section className="mb-12">
          <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            About Me
          </h2>
          <div className="space-y-4 leading-relaxed text-foreground">
            <p>
              I am an undergraduate student at Yonsei University pursuing a
              double major in Physics and Circuits and Systems for Intelligent
              Semiconductor Technology. I am interested in techniques for
              solving complex physical problems with quantum computers, as
              well as in methods for mitigating and correcting errors that
              arise on real quantum hardware.
            </p>
            <p>
              I have hands-on experience building and benchmarking
              hardware-efficient ansatze on superconducting quantum processors,
              and I am passionate about bridging theoretical quantum physics
              with practical quantum computing applications.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
