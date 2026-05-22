import { site } from "@/content/site";
import { Section } from "./Section";

export function Research() {
  return (
    <Section id="research" label="Research">
      <ul className="space-y-16">
        {site.papers.map((paper) => (
          <li key={paper.title}>
            <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
              {paper.title}
            </h3>
            <p className="mt-2 text-sm text-muted">
              {[paper.venue, paper.year].filter(Boolean).join(", ")}
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-ink/80">
              {paper.summary}
            </p>
            {paper.embed ? (
              <figure className="mt-8 border border-rule bg-white">
                <iframe
                  src={paper.embed}
                  title={`Animated abstract — ${paper.title}`}
                  loading="lazy"
                  className="block h-[520px] w-full sm:h-[640px]"
                />
                <figcaption className="border-t border-rule px-4 py-2 text-xs text-muted">
                  Animated abstract
                </figcaption>
              </figure>
            ) : null}
            {paper.href ? (
              <p className="mt-6 text-sm">
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-ink pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Read the paper on Google Scholar
                  <span aria-hidden className="ml-1">↗</span>
                </a>
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
