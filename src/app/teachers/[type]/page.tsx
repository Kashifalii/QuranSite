import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { teachers } from "@/data/site";
import { createMetadata } from "@/lib/seo";

type TeacherPageProps = { params: Promise<{ type: string }> };

export function generateStaticParams() {
  return [{ type: "male" }, { type: "female" }];
}

export async function generateMetadata({ params }: TeacherPageProps): Promise<Metadata> {
  const { type } = await params;
  const title = type === "female" ? "Female Quran Teachers" : "Male Quran Teachers";
  return createMetadata({
    title: `${title} | Quran Academy`,
    description: `Meet qualified ${type} Quran teachers for online Quran classes, Tajweed, Hifz, and Islamic Studies.`,
    path: `/teachers/${type}`,
    image: "/images/teachers-quran.jpg"
  });
}

export default async function TeachersPage({ params }: TeacherPageProps) {
  const { type } = await params;
  if (type !== "male" && type !== "female") notFound();
  const list = teachers[type];

  return (
    <>
      <PageHero title={`${type} Quran Teachers`} subtitle="Qualified instructors for one-on-one Quran learning." image="/images/teachers-quran.jpg" />
      <section className="container-page py-20">
        <SectionHeader eyebrow="Our Scholars" title={type === "female" ? "Female Quran Teachers" : "Male Quran Teachers"} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((teacher) => (
            <article key={teacher.name} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
              <div className="islamic-shape relative mx-auto size-48 overflow-hidden bg-[var(--gold)] p-2">
                <div className="islamic-shape relative h-full w-full overflow-hidden bg-white">
                  <Image src={teacher.image} alt={teacher.name} fill className="object-cover" sizes="220px" />
                </div>
              </div>
              <h2 className="font-display mt-6 text-2xl font-bold">{teacher.name}</h2>
              <p className="mt-1 font-bold text-[var(--gold)]">{teacher.qualification}</p>
              <dl className="mt-5 grid gap-3 text-sm text-[var(--ink-muted)]">
                <div><dt className="font-bold text-[var(--emerald)]">Experience</dt><dd>{teacher.experience}</dd></div>
                <div><dt className="font-bold text-[var(--emerald)]">Languages</dt><dd>{teacher.languages}</dd></div>
                <div><dt className="font-bold text-[var(--emerald)]">Specialization</dt><dd>{teacher.specialization}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
