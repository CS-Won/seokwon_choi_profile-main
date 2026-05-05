"use client"

import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { id: "cv-heading", label: "CV" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
] as const

export function CvNav() {
  const [active, setActive] = useState("cv-heading")

  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: el.getBoundingClientRect().top }
      })

      const current = offsets.reduce((closest, item) => {
        if (item.top <= 100 && item.top > closest.top) return item
        if (closest.top > 100 && item.top < closest.top) return item
        return closest
      })

      setActive(current.id)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 72
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center justify-center gap-1 overflow-x-auto py-3 scrollbar-none">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className={`shrink-0 rounded-md px-3.5 py-1.5 text-base transition-colors ${
                active === id
                  ? "bg-foreground text-background font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
