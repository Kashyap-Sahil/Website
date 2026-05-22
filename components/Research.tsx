import { site } from "@/content/site";

export function Research() {
  return (
    <section
      id="research"
      className="border-t border-rule mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            Research
          </p>
        </div>
        <div className="md:col-span-9">
          {site.papers.map((paper) => (
            <div key={paper.title}>
              <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
                {paper.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {[paper.venue, paper.year].filter(Boolean).join(", ")}
              </p>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-ink/80">
                {paper.summary}
              </p>
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
            </div>
          ))}
        </div>
      </div>

      {site.papers
        .filter((p) => p.embed)
        .map((paper) => (
          <figure key={paper.title} className="mt-16 border border-rule bg-white">
            <iframe
              src={paper.embed}
              title={`Animated abstract — ${paper.title}`}
              loading="lazy"
              className="block w-full aspect-square sm:aspect-[4/3] lg:aspect-[16/10]"
              style={{ minHeight: "70vh" }}
            />
            <figcaption className="border-t border-rule px-4 py-2 text-xs text-muted">
              Animated abstract — {paper.title}
            </figcaption>
          </figure>
        ))}
    </section>
  );
}
