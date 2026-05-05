import { ExternalLink } from "lucide-react"

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  clubs,
}: {
  title: string
  subtitle: string
  period: string
  description?: string
  clubs?: { name: string; period: string }[]
}) {
  return (
    <div className="relative mb-8 last:mb-0">
      <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <span className="shrink-0 text-sm text-muted-foreground">{period}</span>
      </div>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {clubs && clubs.length > 0 && (
        <div className="mt-3 space-y-2">
          {clubs.map((club) => (
            <div
              key={club.name}
              className="flex items-center justify-between gap-3 rounded border border-border bg-secondary/50 px-3 py-2"
            >
              <span className="text-sm text-foreground">{club.name}</span>
              <span className="shrink-0 text-xs text-muted-foreground">
                {club.period}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function PublicationItem({
  authors,
  title,
  venue,
  year,
  note,
  link,
}: {
  authors: string
  title: string
  venue: string
  year: string
  note?: string
  link: string
}) {
  return (
    <li className="leading-relaxed">
      <span className="text-muted-foreground">{authors}</span>{" "}
      {link === "#" ? (
        <span className="font-medium text-foreground">&ldquo;{title}&rdquo;</span>
      ) : (
        <a
          href={link}
          className="font-medium text-foreground transition-colors hover:text-accent"
        >
          &ldquo;{title}&rdquo;
          <ExternalLink className="ml-1 inline-block h-3 w-3 opacity-40" />
        </a>
      )}{" "}
      <span className="text-sm italic text-muted-foreground">{venue}</span>,{" "}
      <span className="text-sm text-muted-foreground">{year}.</span>
      {note && (
        <span className="ml-1 rounded bg-secondary px-1.5 py-0.5 text-xs text-secondary-foreground">
          {note}
        </span>
      )}
    </li>
  )
}

export function ProjectItem({
  title,
  description,
  technologies,
  period,
}: {
  title: string
  description: string
  technologies: string[]
  period: string
}) {
  return (
    <div className="group">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="font-medium text-foreground">{title}</h3>
        <span className="shrink-0 text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="rounded-lg border border-border p-5">
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-1.5 text-sm text-muted-foreground">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export function CertificationCard({
  title,
  issuer,
  date,
  bgColor,
}: {
  title: string
  issuer: string
  date: string
  bgColor: string
}) {
  return (
    <div className="flex w-full max-w-[160px] flex-col items-center text-center">
      <div
        className="mb-3 flex h-24 w-full items-center justify-center rounded-lg px-2"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-[11px] font-medium leading-tight text-white text-center">
          {title}
        </span>
      </div>
      <p className="text-xs font-medium leading-tight text-foreground">
        {issuer}
      </p>
      {date && <p className="mt-0.5 text-[11px] text-muted-foreground">{date}</p>}
    </div>
  )
}
