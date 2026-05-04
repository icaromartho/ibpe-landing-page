import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="Sobre nós"
          title="Experiência real aplicada à gestão de emergências"
        />
        <div className="space-y-6 text-base leading-8 text-ibpe-muted">
          <p>
            O Instituto Brasileiro de Pesquisa em Emergência nasceu da necessidade prática
            de organizar o caos. Em operações reais, ficou evidente que equipes podem ter
            recursos, conhecimento técnico e boa intenção, mas sem um modelo claro de
            comando, comunicação e coordenação, a resposta perde eficiência.
          </p>
          <p>
            O IBPE foi criado para transformar resposta improvisada em operação
            estruturada, unindo ciência, tecnologia, prevenção e resposta. Nossa atuação é
            voltada para capacitar profissionais e apoiar organizações na preparação para
            incidentes, emergências e crises.
          </p>
          <blockquote className="border-l-4 border-ibpe-orange bg-ibpe-soft px-6 py-5 text-xl font-black leading-8 text-ibpe-dark">
            Emergência não é improviso. É método.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
