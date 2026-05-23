import { site } from "@/content/site";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="font-serif text-2xl leading-relaxed sm:text-3xl reveal">
        Always open to a thoughtful conversation —{" "}
        <a
          href={site.emailUrl}
          target="_blank"
          rel="noreferrer"
          className="border-b border-ink pb-0.5 hover:opacity-60 transition-opacity"
        >
          {site.email}
        </a>
        .
      </p>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm reveal-fade">
        {site.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-ink transition-colors"
            >
              {link.label}
              <span aria-hidden className="ml-1">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
