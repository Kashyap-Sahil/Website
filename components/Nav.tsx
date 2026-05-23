import Link from "next/link";
import { site } from "@/content/site";

export function Nav() {
  return (
    <header className="mx-auto flex max-w-5xl items-baseline justify-between gap-6 px-6 pt-10 pb-4 sm:px-10 sm:pt-14 intro">
      <Link
        href="/"
        className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
      >
        {site.name}
      </Link>
      <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <a href="#research" className="hover:text-ink transition-colors">
          Research
        </a>
        <a href="#about" className="hover:text-ink transition-colors">
          About
        </a>
        <a href="#education" className="hover:text-ink transition-colors">
          Education
        </a>
        <a href="#skills" className="hover:text-ink transition-colors">
          Skills
        </a>
        <a href="#contact" className="hover:text-ink transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}
