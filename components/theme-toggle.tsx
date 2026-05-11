"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary md:justify-start md:px-3.5 md:py-2.5 md:text-base"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted ? (
        <>
          {isDark ? (
            <Sun className="size-4 shrink-0" aria-hidden />
          ) : (
            <Moon className="size-4 shrink-0" aria-hidden />
          )}
          <span>{isDark ? "Light mode" : "Dark mode"}</span>
        </>
      ) : (
        <span className="text-muted-foreground">Theme</span>
      )}
    </button>
  )
}
