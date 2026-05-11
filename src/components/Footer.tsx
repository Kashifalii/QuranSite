import Link from "next/link";
import { navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Footer() {
  return (
    <footer className="relative bg-[url('/images/footer-bg.jpg')] bg-cover bg-no-repeat bg-center  mt-20 text-white">
      <span className="absolute inset-0 z-0 bg-black/50"></span>
      <div className="container-page py-14 z-10 relative">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm">Become a Part of Our Community</p>
            <h2 className="font-display mt-2 text-3xl font-bold">
              Inspired? Join Us Right Now!
            </h2>
          </div>
          <ButtonLink href="/registration">Join Community</ButtonLink>
        </div>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr_1fr]">
          <div>
            <div className="islamic-shape grid size-32 place-items-center bg-[var(--gold)] font-display text-3xl font-bold">
              قرآن
            </div>
          </div>
          <div>
            <h3 className="font-display mb-4 text-lg font-bold">Information</h3>
            <p className="max-w-xs text-sm leading-7 text-white/78">
              Quran Academy provides live one-on-one Quran learning with
              qualified male and female teachers, flexible schedules, and
              family-friendly fee plans.
            </p>
          </div>
          <div>
            <h3 className="font-display mb-4 text-lg font-bold">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-white/78">
              <li>Hotline: +1 800 123 4567</li>
              <li>Email: admissions@quranacademy.com</li>
              <li>WhatsApp support available</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/78">
              {navItems.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring hover:text-[var(--gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row items-center sm:justify-between">
          <p>Quran Academy © 2026, All Rights Reserved</p>
          <p>Designed for fast, accessible Quran learning.</p>
        </div>
      </div>
    </footer>
  );
}
