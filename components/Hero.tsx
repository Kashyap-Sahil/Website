import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-28 sm:px-10 sm:pt-28 sm:pb-36">
      <div className="flex flex-col items-start gap-8 mb-10 sm:flex-row sm:items-center sm:gap-10">
        <Image
          src={site.avatar}
          alt={site.name}
          width={240}
          height={240}
          priority
          className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-56 md:w-56"
        />
        <div>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted">
            {site.role}
            {site.location ? ` — ${site.location}` : ""}
          </p>
        </div>
      </div>
      <p className="mt-10 max-w-3xl font-serif text-2xl leading-snug text-ink/85 sm:text-3xl md:text-4xl">
        {site.tagline}
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <a
          href="#research"
          className="border-b border-ink pb-0.5 text-ink hover:opacity-60 transition-opacity"
        >
          Research
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
