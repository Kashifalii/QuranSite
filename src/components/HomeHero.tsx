import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--emerald)] bg-[url('/images/Hero-bg.webp')] bg-cover bg-center text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--emerald-dark)] via-[var(--emerald)]/50 to-black/45" />
      </div>
      <div className="container-page relative grid min-h-[760px] items-center gap-10 pt-32 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--gold-soft)]">
            Online Quran Academy
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">
            Pray to Allah and Learn Quran with Confidence
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/82">
            Live one-on-one Quran classes with certified male and female
            teachers, flexible schedules, and a caring Islamic learning
            environment for every family.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/registration">Book Free Trial</ButtonLink>
            <ButtonLink href="/courses" variant="light">
              Explore Courses
            </ButtonLink>
          </div>
        </div>
        <div className="relative hidden min-h-[430px] lg:block">
          {/* <div className="islamic-shape absolute right-0 top-12 h-[390px] w-[390px] bg-[var(--gold)] p-3 shadow-2xl">
            <div className="islamic-shape relative h-full w-full overflow-hidden bg-white">
             
            </div>
          </div> */}
          <Image
            src="/images/heroImg.webp"
            alt="Student learning Quran online"
            fill
            className="object-cover"
            sizes="420px"
          />
        </div>
      </div>
    </section>
  );
}
