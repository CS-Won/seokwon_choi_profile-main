"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const ITEMS = [
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/publications", label: "Publications" },
  { href: "/teaching", label: "Teaching & Coursework" },
  { href: "/interests", label: "Interests" },
] as const

export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-row gap-1 overflow-x-auto px-4 py-3 md:flex-col md:gap-0 md:overflow-visible md:px-5 md:py-6">
      <p className="mb-0 hidden text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-4 md:block">
        Menu
      </p>
      {ITEMS.map(({ href, label }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`shrink-0 rounded-md px-3 py-2 text-sm transition-colors md:px-3.5 md:py-2.5 md:text-base ${
              active
                ? "bg-foreground text-background font-medium"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
