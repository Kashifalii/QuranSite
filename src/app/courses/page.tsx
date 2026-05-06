import type { Metadata } from "next";
import { CourseFilter } from "@/components/CourseFilter";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Online Quran Courses | Quran Academy",
  description: "Browse online Quran courses including Noorani Qaida, Quran Reading, Tajweed, Hifz, Islamic Studies, and Arabic Language.",
  path: "/courses",
  image: "/images/online-courses-quran.jpg"
});

export default function CoursesPage() {
  return (
    <>
      <PageHero title="Online Classes" subtitle="Search, filter, and explore SEO-friendly course pages with detailed outcomes and fee information." image="/images/online-courses-quran.jpg" />
      <section className="container-page py-20">
        <SectionHeader align="left" eyebrow="We Have Started Online Courses" title="Online Quran Classes" />
        <CourseFilter />
      </section>
    </>
  );
}
