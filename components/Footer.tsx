import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-rule mx-auto max-w-5xl px-6 py-10 sm:px-10">
      <div className="text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
