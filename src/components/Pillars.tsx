import { pillars } from "@/data/siteContent";
import { TechnicalIcon } from "./TechnicalIcon";

export function Pillars() {
  return (
    <section className="bg-ibpe-soft py-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="group border border-ibpe-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ibpe-orange/50 hover:shadow-card"
          >
            <TechnicalIcon label={pillar.title} />
            <h3 className="mt-6 text-xl font-black text-ibpe-dark">{pillar.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ibpe-muted">{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
