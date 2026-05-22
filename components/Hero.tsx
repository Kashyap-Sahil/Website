import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-28 sm:px-10 sm:pt-28 sm:pb-36">
      <p className="mb-8 text-sm uppercase tracking-[0.18em] text-muted">
        {site.role} — {site.location}
      </p>
      <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        {site.tagline}
      </h1>
      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <a
          href="#work"
          className="border-b border-ink pb-0.5 text-ink hover:opacity-60 transition-opacity"
        >
          Selected work
        </a>
        <a
          href={`mailto:${site.email}`}
          className="text-muted hover:text-ink transition-colors"
        >
          {site.email}
        </a>
      </div>
    </section>
  );
}
