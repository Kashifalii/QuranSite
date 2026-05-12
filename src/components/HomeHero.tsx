import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden  text-white">
      {/* Background Image */}
      <Image
        src="/images/Hero-bg.webp"
        alt="Online Quran Academy"
        fill
        priority
        fetchPriority="high"
        quality={10}
        sizes="100vw"
        className="object-cover object-center -z-20 hidden sm:block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-l from-(--emerald-dark) sm:from-(--emerald-dark)/50 via-(--emerald)]/5 to-gray-900 sm:to-black/0 " />
      </div>

      {/* Content */}
      <div className="container-page relative grid lg:min-h-190 h-auto items-center gap-10 pb-20 lg:pb-0 pt-40 lg:pt-28 md:grid-cols-[1fr_0.9fr]">
        <div className="md:max-w-2xl w-full">
          <p className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-(--gold-soft)">
            Online Quran Academy
          </p>

          <h1 className="font-display font-bold uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Pray to Allah and Learn Quran with Confidence
          </h1>

          <p className="mt-3 sm:mt-5 max-w-2xl text-base sm:text-lg leading-6 text-white/82">
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

        {/* Right Hero Image */}
        <div className="relative hidden min-h-107.5 md:block">
          <Image
            src="/images/heroImg.webp"
            alt="Student learning Quran online"
            fill
            priority
            fetchPriority="high"
            quality={100}
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
