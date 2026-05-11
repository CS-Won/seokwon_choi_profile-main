import katex from "katex"

export function MathInline({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  })
  return (
    <span
      className="katex-inline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export function MathBlock({
  children,
  numbered,
  label,
}: {
  children: string
  numbered?: boolean
  label?: string
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    output: "html",
    displayMode: true,
  })
  return (
    <div className="my-5 flex items-center gap-3 overflow-x-auto rounded-md border border-border bg-muted/30 px-4 py-3">
      <div
        className="flex-1 text-foreground"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {numbered && (
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          ({label ?? ""})
        </span>
      )}
    </div>
  )
}
