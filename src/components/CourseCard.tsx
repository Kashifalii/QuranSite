import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/site";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="overflow-hidden rounded-lg bg-[var(--gold-soft)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/2.4]">
        <Image src={course.image} alt={`${course.title} course`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">{course.category}</p>
        <h3 className="font-display text-xl font-bold leading-snug">{course.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{course.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm font-bold text-[var(--emerald)]">{course.duration}</span>
          <Link href={`/courses/${course.slug}`} className="focus-ring rounded-full border border-[var(--gold)] px-4 py-2 text-sm font-bold text-[var(--emerald)] hover:bg-white">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
