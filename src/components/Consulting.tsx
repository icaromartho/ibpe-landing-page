import { consulting } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Consulting() {
  return (
    <section id="consultorias" className="bg-ibpe-soft py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Consultorias"
          title="Consultorias para organizações que precisam estar preparadas"
          subtitle="Apoiamos empresas, operadores, instituições e equipes técnicas na construção de planos, fluxos e respostas aplicáveis à realidade operacional."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {consulting.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col border border-ibpe-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ibpe-orange/50 hover:shadow-card sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-6">
                <span className="h-1.5 w-16 bg-ibpe-orange" />
                <span className="hex-corner h-12 w-12 border border-ibpe-orange/35 bg-orange-50" />
              </div>
              <h3 className="text-2xl font-black leading-tight text-ibpe-dark">{item.title}</h3>
              <p className="mt-5 text-base font-semibold leading-8 text-ibpe-dark/82">
                {item.description}
              </p>
              <p className="mt-4 text-sm leading-7 text-ibpe-muted">{item.complement}</p>
              <p className="mt-7 text-xs font-black uppercase tracking-[0.22em] text-ibpe-orange">
                Entregáveis
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 text-sm leading-6 text-ibpe-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ibpe-orange" />
                    {deliverable}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className="focus-ring mt-8 inline-flex w-fit border border-ibpe-orange px-5 py-3 text-sm font-black text-ibpe-orange transition hover:bg-ibpe-orange hover:text-white"
              >
                {item.button}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
