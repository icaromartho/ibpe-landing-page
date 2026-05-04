import { whyIBPE } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function WhyIBPE() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher o IBPE?"
          subtitle="Porque emergência não se resolve apenas com teoria. Ela exige método, prática, liderança, comunicação e capacidade de decisão sob pressão."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyIBPE.map((item, index) => (
            <article
              key={item.title}
              className="border border-ibpe-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-ibpe-orange/50 hover:shadow-card"
            >
              <span className="text-xs font-black uppercase tracking-[0.22em] text-ibpe-orange">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black leading-tight text-ibpe-dark">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ibpe-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
