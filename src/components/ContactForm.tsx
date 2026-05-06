"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required aria-label="First name" placeholder="Your Name" className="focus-ring min-h-12 border border-black/10 px-4" />
        <input required aria-label="Last name" placeholder="Last Name" className="focus-ring min-h-12 border border-black/10 px-4" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required type="email" aria-label="Email" placeholder="Your Email" className="focus-ring min-h-12 border border-black/10 px-4" />
        <input required aria-label="Subject" placeholder="Add Subject" className="focus-ring min-h-12 border border-black/10 px-4" />
      </div>
      <textarea required aria-label="Message" placeholder="Your Message/Question Goes Here..." rows={7} className="focus-ring border border-black/10 p-4" />
      <button type="submit" className="focus-ring justify-self-end rounded-full bg-[var(--gold)] px-8 py-3 text-sm font-bold text-white shadow-[0_6px_0_rgba(136,94,16,0.25)]">
        Send Now
      </button>
      {sent ? <p className="rounded-lg bg-[var(--gold-soft)] p-3 text-sm font-bold text-[var(--emerald)]">Thank you. This demo form has been validated successfully.</p> : null}
    </form>
  );
}
