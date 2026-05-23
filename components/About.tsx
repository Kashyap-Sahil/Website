import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="space-y-6 max-w-prose font-serif text-xl leading-relaxed text-ink/90 reveal">
        {site.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
