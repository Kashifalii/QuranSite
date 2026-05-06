"use client";

import { useState } from "react";
import { pricing } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

const labels = Object.keys(pricing) as Array<keyof typeof pricing>;

export function FeeTabs() {
  const [active, setActive] = useState<keyof typeof pricing>("USA");
  const plan = pricing[active];

  return (
    <div className="mt-10 rounded-lg border border-black/10 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Currency tabs">
        {labels.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(label)}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${active === label ? "bg-[var(--gold)] text-white" : "bg-[var(--gold-soft)] text-[var(--emerald)] hover:bg-[#f5dda3]"}`}
          >
            {label} - {pricing[label].currency}
          </button>
        ))}
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <caption className="sr-only">Monthly Quran class fee comparison</caption>
          <thead>
            <tr className="bg-[var(--emerald)] text-white">
              <th className="px-5 py-4">Lesson Plan</th>
              <th className="px-5 py-4">Lessons/Month</th>
              <th className="px-5 py-4">Fee/Month</th>
              <th className="px-5 py-4">For 2nd Sibling</th>
            </tr>
          </thead>
          <tbody>
            {plan.rows.map((row, index) => (
              <tr key={row[0]} className={index === 1 ? "bg-[var(--gold-soft)]" : "border-b border-black/10"}>
                {row.map((cell) => (
                  <td key={cell} className="px-5 py-4 text-sm font-semibold text-[var(--ink-muted)]">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 grid gap-5 rounded-lg bg-[var(--gold-soft)] p-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-bold text-[var(--emerald)]">1-on-1 Live Separate Lessons</p>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">30 minutes per session. Regional support: {plan.contact}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/registration">Book Free Trial</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact Us</ButtonLink>
        </div>
      </div>
    </div>
  );
}
