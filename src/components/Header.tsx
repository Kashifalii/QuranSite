"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="border-b border-white/10 bg-black/35">
        <div className="container-page flex min-h-12 items-center justify-between gap-4 text-xs sm:text-sm font-display">
          <p className="hidden sm:block">
            <span className="font-bold">Call Us:</span> +1 800 123 4567
          </p>
          <p className="font-open-sans">
            Online Quran classes for families worldwide
          </p>
          <div
            className="hidden items-center gap-4 md:flex"
            aria-label="Social links"
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="focus-ring font-bold"
            >
              f
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              className="focus-ring font-bold"
            >
              in
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="focus-ring font-bold"
            >
              ig
            </Link>
          </div>
        </div>
      </div>
      <nav
        className="container-page flex min-h-20 items-center justify-between gap-5"
        aria-label="Main navigation"
      >
        <Link href="/" className="focus-ring flex items-center gap-3">
          <span className="rounded-full flex items-center justify-center size-12 p-2 place-items-center bg-[var(--gold)] font-open-sans text-xl font-bold text-white outline-4 outline-yellow-500/30">
            قرآن
          </span>
          <span className="hidden font-display text-xl font-bold sm:block">
            Quran Academy
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring text-sm font-bold transition hover:text-[var(--gold)] ${pathname === item.href ? "text-[var(--gold)]" : "text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/fee-plans"
            className="focus-ring rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-bold shadow-[0_6px_0_rgba(136,94,16,0.28)]"
          >
            Fee Plans
          </Link>
        </div>
        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full border border-white/30 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="h-0.5 w-5 bg-white shadow-[0_7px_0_white,0_-7px_0_white]" />
        </button>
      </nav>
      {open ? (
        <div className="container-page rounded-2xl border border-white/10 bg-[var(--emerald-dark)] p-4 shadow-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-bold hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
