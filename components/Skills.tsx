import { site } from "@/content/site";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <dl className="space-y-8 reveal">
        {site.skills.map((group) => (
          <div
            key={group.group}
            className="grid gap-3 sm:grid-cols-12 sm:items-baseline"
          >
            <dt className="text-sm uppercase tracking-[0.12em] text-muted sm:col-span-4">
              {group.group}
            </dt>
            <dd className="sm:col-span-8">
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-rule px-3 py-1 text-sm text-ink/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
