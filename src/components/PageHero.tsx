import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: React.ReactNode;
};

export function PageHero({ title, subtitle, icon }: PageHeroProps) {
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
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-black/70" />
      <div className="container-page relative z-10 pt-28">
        <div className="mx-auto mb-4 size-14 bg-(--gold) flex items-center justify-center rounded-lg">
          {icon}
        </div>
        <h1 className="font-display text-2xl font-bold uppercase leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-2 max-w-2xl text-white/82 text-sm sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
