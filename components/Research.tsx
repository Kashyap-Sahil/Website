import { site } from "@/content/site";

export function Research() {
  return (
    <section id="research" className="relative border-t border-rule">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 sm:px-10 sm:pt-28">
        <p className="text-sm uppercase tracking-[0.18em] text-muted">
          Research
        </p>
      </div>

      {site.papers.map((paper, i) => (
        <article
          key={paper.title}
          className="sticky top-0 bg-paper"
          style={{
            zIndex: i + 1,
            boxShadow: i === 0 ? "none" : "0 -24px 40px -24px rgba(22,22,26,0.08)",
          }}
        >
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-12 pt-16 sm:px-10 sm:pt-20">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="text-sm uppercase tracking-[0.18em] text-muted">
                  {String(i + 1).padStart(2, "0")} / {String(site.papers.length).padStart(2, "0")}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
                  {paper.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {[paper.venue, paper.year].filter(Boolean).join(", ")}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink/80 text-justify hyphens-auto">
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
            </div>

            {paper.embed ? (
              <iframe
                src={paper.embed}
                title={`Animated abstract — ${paper.title}`}
                loading="lazy"
                className="mt-8 block w-full flex-1 border-0"
                style={{
                  minHeight: "min(60vh, 600px)",
                  background: "#f6f3ec",
                }}
              />
            ) : null}
          </div>
        </article>
      ))}

      {/* Spacer so the last sticky card has somewhere to scroll to before the next section */}
      <div aria-hidden className="h-px" />
    </section>
  );
}
