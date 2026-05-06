import type { Metadata } from "next";
import { FeeTabs } from "@/components/FeeTabs";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Quran Academy Fee Plans | Monthly Online Quran Class Pricing",
  description: "Compare monthly Quran class fee plans by region, including USA, UK, Europe, Australia, and UAE currency tabs.",
  path: "/fee-plans"
});

export default function FeePlansPage() {
  return (
    <>
      <PageHero title="Fee Plans" subtitle="Transparent one-on-one online Quran class pricing for families." />
      <section className="container-page py-20">
        <SectionHeader align="left" eyebrow="Monthly Fee Plans" title="Professional Quran Academy Pricing" description="Class Type: 1-on-1 Live Separate Lessons. Class Duration: 30 Minutes Per Session." />
        <FeeTabs />
      </section>
    </>
  );
}
