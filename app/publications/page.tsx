import type { Metadata } from "next"
import { PublicationsBlock } from "@/components/publications-block"

export const metadata: Metadata = {
  title: "Publications | Seokwon Choi",
  description: "Publications — Seokwon Choi",
}

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Publications
          </h1>
          <p className="mt-2 text-muted-foreground">
            Peer-reviewed articles and preprints.
          </p>
        </header>
        <PublicationsBlock />
      </div>
    </main>
  )
}
