import { PublicationItem } from "@/components/cv-sections"
import { PUBLICATIONS } from "@/lib/publications"

export function PublicationsBlock() {
  return (
    <ol className="list-decimal space-y-5 pl-5 text-foreground marker:text-muted-foreground">
      {PUBLICATIONS.map((p) => (
        <PublicationItem
          key={p.title}
          authors={p.authors}
          title={p.title}
          venue={p.venue}
          year={p.year}
          note={p.note}
          link={p.link}
        />
      ))}
    </ol>
  )
}
