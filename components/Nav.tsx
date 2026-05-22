import Link from "next/link";
import { site } from "@/content/site";

export function Nav() {
  return (
    <header className="mx-auto flex max-w-5xl items-baseline justify-between px-6 pt-10 pb-4 sm:px-10 sm:pt-14">
      <Link href="/" className="font-serif text-xl tracking-tight sm:text-2xl">
        {site.name}
      </Link>
      <nav className="flex gap-7 text-sm text-muted">
        <a href="#research" className="hover:text-ink transition-colors">
          Research
        </a>
        <a href="#about" className="hover:text-ink transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-ink transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}
