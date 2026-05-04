import { certificationNotice, courseHighlights } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Courses() {
  return (
    <section id="cursos" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cursos"
          title="Cursos e formações"
          subtitle="Capacitações desenvolvidas para quem precisa atuar com clareza, método e coordenação em cenários reais de emergência."
        />

        <div className="mt-12 overflow-hidden border border-ibpe-line bg-white shadow-technical">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden bg-ibpe-dark p-8 text-white sm:p-10">
              <div className="absolute inset-0 technical-grid opacity-10" />
              <div className="absolute right-8 top-8 h-24 w-24 border border-ibpe-orange/35" />
              <div className="relative">
                <span className="inline-flex border border-orange-300/40 bg-ibpe-orange px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                  3 dias online + 1 dia prático
                </span>
                <h3 className="mt-7 text-3xl font-black leading-tight sm:text-4xl">
                  Curso ICS Operador
                </h3>
                <p className="mt-6 text-base leading-8 text-white/78">
                  Formação em Incident Command System para profissionais que atuam em
                  emergências, segurança, aeroportos, infraestrutura, eventos, saúde,
                  defesa civil, gestão de riscos e áreas correlatas.
                </p>
                <p className="mt-5 text-base leading-8 text-white/78">
                  O curso apresenta os fundamentos do ICS e conduz o aluno à aplicação
                  prática do sistema, com foco em comando, controle, comunicação, funções
                  operacionais e tomada de decisão em cenários críticos.
                </p>
                <div className="mt-8 border-l-2 border-ibpe-orange bg-white/6 px-5 py-4 text-sm font-semibold leading-7 text-white/86">
                  A formação acontece em 3 dias online, ao vivo, e 1 dia de masterclass
                  prática no Aeroporto de Jundiaí, com aplicação operacional em cenário
                  simulado.
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-ibpe-orange">
                Conteúdo aplicado
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {courseHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border border-ibpe-line bg-ibpe-soft px-4 py-3 text-sm font-semibold leading-6 text-ibpe-dark"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ibpe-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className="focus-ring mt-8 inline-flex bg-ibpe-orange px-6 py-4 text-sm font-black text-white shadow-[0_12px_24px_rgba(242,92,5,0.20)] transition hover:-translate-y-0.5 hover:bg-[#d94f04]"
              >
                Quero participar da próxima turma
              </a>
              <p className="mt-8 border-t border-ibpe-line pt-5 text-xs leading-6 text-ibpe-muted">
                {certificationNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
