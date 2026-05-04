import { contact } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ibpe-dark py-24 text-white">
      <div className="absolute inset-0 technical-grid opacity-10" />
      <div className="absolute left-6 top-8 h-28 w-28 border border-ibpe-orange/30" />
      <div className="absolute bottom-8 right-10 h-40 w-40 border border-white/10 bg-radar-ring opacity-60" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 lg:flex-row lg:items-end lg:px-8">
        <SectionHeading
          light
          eyebrow="Prontidao"
          title="Quando a emergência acontece, não existe tempo para aprender."
          subtitle="Prepare sua equipe antes. O IBPE ajuda sua organização a transformar planejamento, treinamento e resposta em uma estrutura clara, prática e coordenada."
        />
        <a
          href={contact.whatsappUrl}
          aria-label="Falar com especialista pelo WhatsApp"
          className="focus-ring hex-corner shrink-0 bg-ibpe-orange px-7 py-4 text-sm font-black text-white shadow-[0_16px_34px_rgba(242,92,5,0.24)] transition hover:-translate-y-0.5 hover:bg-[#d94f04]"
        >
          Falar com especialista
        </a>
      </div>
    </section>
  );
}
