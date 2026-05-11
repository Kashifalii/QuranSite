import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative grid min-h-105 place-items-center overflow-hidden bg-black text-center text-white">
      <Image
        src="/images/course.jpg"
        alt={title + " Image"}
        fill
        priority
        className="object-cover object-center opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
      <div className="container-page relative z-10 pt-28">
        <div className="islamic-shape mx-auto mb-6 size-12 bg-[var(--gold)]" />
        <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-white/82">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
