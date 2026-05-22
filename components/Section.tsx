import { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  children: ReactNode;
};

export function Section({ id, label, children }: Props) {
  return (
    <section
      id={id}
      className="border-t border-rule mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            {label}
          </p>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
