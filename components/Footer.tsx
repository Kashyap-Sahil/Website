import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-rule mx-auto max-w-5xl px-6 py-10 sm:px-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">Set in Georgia & system sans.</p>
      </div>
    </footer>
  );
}
