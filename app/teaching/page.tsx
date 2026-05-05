import type { Metadata } from "next"
import { CourseworkSection } from "@/components/coursework-section"
import { CurriculumGrid } from "@/components/curriculum-grid"
import { TeachingSection } from "@/components/teaching-section"

export const metadata: Metadata = {
  title: "Teaching & Coursework | Seokwon Choi",
  description: "Teaching and coursework — Seokwon Choi",
}

export default function TeachingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Teaching & Coursework
          </h1>
        </header>

        <CurriculumGrid />

        <hr className="mb-12 border-border" />

        <TeachingSection />

        <hr className="mb-12 border-border" />

        <CourseworkSection />
      </div>
    </main>
  )
}
