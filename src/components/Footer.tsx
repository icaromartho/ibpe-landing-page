import { certificationNotice, contact, navLinks } from "@/data/siteContent";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ibpe-line bg-ibpe-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-ibpe-orange">
            Ciência • Tecnologia • Prevenção • Resposta
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ibpe-muted">
            Formação e consultoria em gestão de emergências, crises, ICS e resposta
            operacional.
          </p>
          <p className="mt-5 max-w-2xl text-xs leading-6 text-ibpe-muted">
            {certificationNotice}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-ibpe-dark">
            Navegacao
          </h3>
          <nav className="mt-5 grid gap-3" aria-label="Links do rodape">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring w-fit rounded-sm text-sm font-semibold text-ibpe-muted transition hover:text-ibpe-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/politica-de-privacidade"
              className="focus-ring w-fit rounded-sm text-sm font-semibold text-ibpe-muted transition hover:text-ibpe-orange"
            >
              Política de Privacidade
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-ibpe-dark">
            Contato
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-ibpe-muted">
            <p>WhatsApp: {contact.whatsapp}</p>
            <p>E-mail: {contact.email}</p>
            <p>LinkedIn: {contact.linkedin}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-ibpe-line py-5 text-center text-xs font-semibold text-ibpe-muted">
        IBPE — Instituto Brasileiro de Pesquisa em Emergência
      </div>
    </footer>
  );
}
