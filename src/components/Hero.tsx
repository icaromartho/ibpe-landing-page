import { contact } from "@/data/siteContent";

const statusItems = ["ICS", "Emergência", "Crise", "Resposta"];

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-white pt-28">
      <div className="absolute inset-0 -z-20 technical-grid opacity-70" />
      <div className="absolute right-0 top-24 -z-10 h-px w-1/2 bg-gradient-to-r from-transparent via-ibpe-orange/40 to-transparent" />
      <div className="absolute left-8 top-36 -z-10 h-28 w-28 rotate-12 border border-ibpe-orange/20" />
      <div className="absolute bottom-10 right-10 -z-10 h-44 w-44 border border-ibpe-dark/10 bg-radar-ring" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 border border-ibpe-line bg-white/80 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-ibpe-muted shadow-sm">
            <span className="h-2 w-2 rounded-full bg-ibpe-orange" />
            Centro de operações | IBPE
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-normal text-ibpe-dark sm:text-5xl lg:text-6xl">
            Gestão de Emergências, Crises e Operações com Método
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-ibpe-dark/82">
            Formação e consultoria para equipes que precisam responder com coordenação,
            clareza e eficiência em cenários críticos.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ibpe-muted">
            O IBPE une experiência prática, modelos internacionais e aplicação operacional
            para preparar pessoas e organizações antes que a emergência aconteça.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cursos"
              className="focus-ring hex-corner bg-ibpe-orange px-6 py-4 text-center text-sm font-black text-white shadow-[0_16px_30px_rgba(242,92,5,0.24)] transition hover:-translate-y-0.5 hover:bg-[#d94f04]"
            >
              Conheça nossos cursos
            </a>
            <a
              href="#consultorias"
              className="focus-ring border border-ibpe-dark/20 bg-white px-6 py-4 text-center text-sm font-black text-ibpe-dark transition hover:-translate-y-0.5 hover:border-ibpe-orange hover:text-ibpe-orange"
            >
              Solicitar consultoria
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-5 top-10 h-24 w-24 border-l-2 border-t-2 border-ibpe-orange/50" />
          <div className="absolute -right-4 bottom-8 h-28 w-28 border-b-2 border-r-2 border-ibpe-orange/50" />
          <div className="relative overflow-hidden border border-ibpe-line bg-white shadow-technical">
            <div className="flex items-center justify-between border-b border-ibpe-line bg-ibpe-soft px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-ibpe-orange">
                  Status operacional
                </p>
                <p className="mt-1 text-sm font-bold text-ibpe-dark">Painel de prontidão</p>
              </div>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-ibpe-orange" />
                <span className="h-2.5 w-2.5 rounded-full bg-ibpe-dark/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-ibpe-dark/15" />
              </div>
            </div>

            <div className="grid gap-5 p-5 sm:p-7">
              <div className="relative aspect-[1.35] overflow-hidden border border-ibpe-line bg-white technical-grid">
                <div className="absolute inset-8 rounded-full border border-ibpe-dark/20" />
                <div className="absolute inset-16 rounded-full border border-ibpe-orange/40" />
                <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-ibpe-dark/20" />
                <div className="absolute left-8 top-1/2 h-px w-[calc(100%-4rem)] bg-ibpe-dark/20" />
                <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-ibpe-orange shadow-[0_0_0_1px_rgba(47,52,58,0.28)]" />
                <div className="absolute left-[18%] top-[24%] h-3 w-3 rounded-full bg-ibpe-orange" />
                <div className="absolute right-[22%] top-[34%] h-3 w-3 rounded-full bg-ibpe-dark" />
                <div className="absolute bottom-[23%] left-[29%] h-3 w-3 rounded-full bg-ibpe-dark" />
                <div className="absolute bottom-[28%] right-[27%] h-3 w-3 rounded-full bg-ibpe-orange" />
                <div className="absolute right-8 top-8 h-16 w-16 border border-ibpe-orange/40" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {statusItems.map((item) => (
                  <div
                    key={item}
                    className="border border-ibpe-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-ibpe-orange/60 hover:shadow-card"
                  >
                    <span className="mb-3 block h-1 w-9 bg-ibpe-orange" />
                    <p className="text-sm font-black text-ibpe-dark">{item}</p>
                  </div>
                ))}
              </div>

              <p className="border-l-2 border-ibpe-orange bg-orange-50 px-4 py-3 text-sm font-bold leading-6 text-ibpe-dark">
                Transformamos resposta improvisada em operação estruturada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
