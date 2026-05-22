import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-28 sm:px-10 sm:pt-28 sm:pb-36">
      <div className="flex items-center gap-6 mb-10">
        <Image
          src={site.avatar}
          alt={site.name}
          width={160}
          height={160}
          priority
          className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36 md:h-40 md:w-40"
        />
        <p className="text-sm uppercase tracking-[0.18em] text-muted">
          {site.role}
          {site.location ? ` — ${site.location}` : ""}
        </p>
      </div>
      <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        {site.tagline}
      </h1>
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
