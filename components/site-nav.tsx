"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const ITEMS = [
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/publications", label: "Publications" },
  { href: "/teaching", label: "Teaching & Coursework" },
  { href: "/blog", label: "Blog" },
] as const

export function SiteNav({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex flex-row flex-wrap items-center gap-1 overflow-x-auto px-4 py-3 md:flex md:min-h-0 md:flex-1 md:flex-col md:items-stretch md:gap-0 md:overflow-visible md:px-5 md:py-6",
        className,
      )}
    >
      <p className="mb-0 hidden w-full text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-4 md:block">
        Menu
      </p>
      <div className="flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1 md:flex md:flex-1 md:flex-col md:items-stretch md:gap-0">
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
      </div>
      <div className="ml-auto shrink-0 md:ml-0 md:mt-auto md:w-full md:border-t md:border-border md:pt-4">
        <ThemeToggle />
      </div>
    </nav>
  )
}
