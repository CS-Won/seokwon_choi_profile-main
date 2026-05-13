/**
 * Graph layout used when planning interconnects between node communication
 * stations — grid backbone vs tree backbone (TikZ-style figure, redrawn in SVG).
 */
export function NodeTopologyDiagram({ className }: { className?: string }) {
  const r = 5.5
  const xs = [18, 40, 62, 84]
  const yT2 = 14
  const yT1 = 36
  const yG1 = 58
  const yG0 = 80

  return (
    <svg
      viewBox="0 0 200 100"
      role="img"
      aria-label="Grid-type and tree-type node interconnect sketches"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>Grid-type and tree-type communication-node graph layouts</title>
      <g
        fill="none"
        className="stroke-foreground"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {xs.map((x) => (
          <g key={x}>
            <line x1={x} y1={yG0} x2={x} y2={yG1} />
            <line x1={x} y1={yG1} x2={x} y2={yT1} />
            <line x1={x} y1={yT1} x2={x} y2={yT2} />
          </g>
        ))}
        <polyline points={xs.map((x) => `${x},${yG0}`).join(" ")} />
        <polyline points={xs.map((x) => `${x},${yG1}`).join(" ")} />
      </g>
      {xs.map((x) => (
        <circle
          key={`c-${x}`}
          cx={x}
          cy={yG0}
          r={r}
          className="fill-background stroke-foreground"
          strokeWidth={1.25}
        />
      ))}
      {xs.map((x) => (
        <circle
          key={`g1-${x}`}
          cx={x}
          cy={yG1}
          r={r}
          className="fill-background stroke-foreground"
          strokeWidth={1.25}
        />
      ))}
      {xs.map((x) => (
        <circle
          key={`t1-${x}`}
          cx={x}
          cy={yT1}
          r={r}
          className="fill-background stroke-foreground"
          strokeWidth={1.25}
        />
      ))}
      {xs.map((x) => (
        <circle
          key={`t2-${x}`}
          cx={x}
          cy={yT2}
          r={r}
          className="fill-background stroke-foreground"
          strokeWidth={1.25}
        />
      ))}

      {/* Right-side braces (TikZ `decoration.brace` style, opening toward the graph) */}
      <path
        d="M 100 80 C 106 76 106 72 102 69 C 106 66 106 62 100 58"
        fill="none"
        className="stroke-foreground"
        strokeWidth={1.15}
      />
      <path
        d="M 100 36 C 106 32 106 28 102 25 C 106 22 106 18 100 14"
        fill="none"
        className="stroke-foreground"
        strokeWidth={1.15}
      />
      <text
        x={124}
        y={27}
        className="fill-foreground text-[8px] font-medium"
        style={{ fontSize: "8px" }}
      >
        Tree Type
      </text>
      <text
        x={124}
        y={71}
        className="fill-foreground text-[8px] font-medium"
        style={{ fontSize: "8px" }}
      >
        Grid Type
      </text>
    </svg>
  )
}
