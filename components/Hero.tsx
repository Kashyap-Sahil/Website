import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-0 w-screen -translate-x-1/2">
        <iframe
          src="/hero-animation.html"
          title=""
          aria-hidden
          tabIndex={-1}
          scrolling="no"
          className="block h-full w-full border-0"
          style={{ background: "#f6f3ec" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
        <div className="flex items-center gap-6 mb-10 intro intro-delay-1">
          <Image
            src={site.avatar}
            alt={site.name}
            width={240}
            height={240}
            priority
            className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-56 md:w-56"
          />
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            {site.role}
            {site.location ? ` — ${site.location}` : ""}
          </p>
        </div>
        <p className="mt-10 max-w-3xl font-serif text-2xl leading-snug text-ink/85 sm:text-3xl md:text-4xl intro intro-delay-2">
          {site.tagline}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm intro intro-delay-3">
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
      </div>
    </section>
  );
}
