import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const styles = {
  primary:
    "bg-[var(--gold)] text-white shadow-[0_8px_0_rgba(136,94,16,0.25)] hover:bg-[#c99021]",
  secondary:
    "border border-(--emerald) bg-white text-(--emerald) hover:bg-gray-50 hover:shadow-[0_8px_0_rgba(136,94,16,0.25)]",
  light: "bg-white text-[var(--emerald)] hover:bg-gray-50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-6 text-xs min-[480px]:text-sm font-bold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
