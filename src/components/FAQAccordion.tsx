"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-black/10 rounded-lg border border-black/10 bg-white">
      {faqs.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold"
            onClick={() => setActive(active === index ? -1 : index)}
            aria-expanded={active === index}
          >
            <span className="font-medium">{item.question}</span>
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
              {active === index ? "-" : "+"}
            </span>
          </button>
          {active === index ? (
            <p className="px-5 pb-5 leading-7 text-[var(--ink-muted)]">
              {item.answer}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
