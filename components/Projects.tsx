import { site } from "@/content/site";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="work" label="Selected Work">
      <ul className="divide-y divide-rule">
        {site.projects.map((project) => (
          <li key={project.title}>
            <a
              href={project.href}
              className="group block py-8 first:pt-0 last:pb-0"
            >
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-muted tabular-nums">
                  {project.year}
                </span>
              </div>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-ink/80">
                {project.summary}
              </p>
              <p className="mt-3 text-sm text-muted">{project.role}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
