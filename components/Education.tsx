import { site } from "@/content/site";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="Education">
      <ul className="divide-y divide-rule reveal">
        {site.education.map((item) => (
          <li
            key={item.degree + item.institution}
            className="py-6 first:pt-0 last:pb-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
                {item.degree}
              </h3>
              <span className="font-mono text-xs text-muted tabular-nums">
                {item.years}
              </span>
            </div>
            <p className="mt-2 text-base text-ink/80">{item.institution}</p>
            {item.note ? (
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
