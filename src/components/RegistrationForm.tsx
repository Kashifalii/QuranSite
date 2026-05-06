"use client";

import { useState } from "react";
import { courses } from "@/data/site";

export function RegistrationForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-10 grid gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {["Student Name", "Parent Name", "Email Address", "Phone Number", "Country"].map((label, index) => (
          <label key={label} className="grid gap-2 text-sm font-bold text-[var(--emerald)]">
            {label}
            <input required type={index === 2 ? "email" : "text"} className="focus-ring min-h-12 rounded-lg border border-black/10 px-4 font-normal text-black" />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-bold text-[var(--emerald)]">
          Gender
          <select required className="focus-ring min-h-12 rounded-lg border border-black/10 px-4 font-normal text-black">
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--emerald)]">
          Selected Course
          <select required className="focus-ring min-h-12 rounded-lg border border-black/10 px-4 font-normal text-black">
            <option value="">Select course</option>
            {courses.map((course) => <option key={course.slug}>{course.title}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--emerald)]">
          Preferred Timing
          <input required className="focus-ring min-h-12 rounded-lg border border-black/10 px-4 font-normal text-black" placeholder="Morning, evening, or timezone" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-[var(--emerald)]">
        Message
        <textarea rows={5} className="focus-ring rounded-lg border border-black/10 p-4 font-normal text-black" />
      </label>
      <button type="submit" className="focus-ring justify-self-start rounded-full bg-[var(--gold)] px-8 py-3 text-sm font-bold text-white shadow-[0_6px_0_rgba(136,94,16,0.25)]">
        Register Today
      </button>
      {sent ? <p className="rounded-lg bg-[var(--gold-soft)] p-4 font-bold text-[var(--emerald)]">Registration inquiry received in demo mode. Connect Formspree, EmailJS, or Netlify Forms when ready for production submissions.</p> : null}
    </form>
  );
}
