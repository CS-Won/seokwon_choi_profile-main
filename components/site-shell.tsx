import type { ReactNode } from "react"
import { SiteNav } from "@/components/site-nav"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row-reverse">
      <aside className="shrink-0 border-b border-border bg-background/95 backdrop-blur-sm md:sticky md:top-0 md:flex md:h-screen md:max-h-screen md:w-56 md:flex-col md:border-b-0 md:border-l md:backdrop-blur-none">
        <SiteNav />
      </aside>
      <div className="min-h-0 min-w-0 flex-1">{children}</div>
    </div>
  )
}
