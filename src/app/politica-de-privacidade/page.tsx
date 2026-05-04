import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Política de Privacidade | IBPE",
  description: "Política de Privacidade do IBPE — Instituto Brasileiro de Pesquisa em Emergência.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 -z-10 technical-grid opacity-60" />
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="focus-ring inline-flex rounded-sm text-sm font-black text-ibpe-orange transition hover:text-[#d94f04]"
            >
              Voltar para o site
            </Link>
            <div className="mt-8 border border-ibpe-line bg-white p-7 shadow-technical sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-ibpe-orange">
                IBPE
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-ibpe-dark">
                Política de Privacidade
              </h1>
              <div className="mt-8 space-y-6 text-base leading-8 text-ibpe-muted">
                <p>
                  O IBPE — Instituto Brasileiro de Pesquisa em Emergência respeita a
                  privacidade dos usuários e está comprometido com a proteção dos dados
                  pessoais fornecidos por meio deste site.
                </p>
                <p>
                  As informações coletadas em formulários, como nome, empresa, cargo,
                  telefone, e-mail e mensagem, são utilizadas exclusivamente para contato,
                  atendimento de solicitações, envio de informações sobre cursos,
                  consultorias e comunicações institucionais relacionadas ao IBPE.
                </p>
                <p>
                  O IBPE não vende, aluga ou compartilha dados pessoais com terceiros para
                  fins comerciais. Os dados poderão ser utilizados por ferramentas de
                  atendimento, gestão de relacionamento e comunicação, sempre com finalidade
                  relacionada ao contato solicitado pelo usuário.
                </p>
                <p>
                  O usuário poderá solicitar a atualização, correção ou exclusão de seus
                  dados pessoais a qualquer momento por meio dos canais oficiais de contato
                  do IBPE.
                </p>
                <p>
                  Ao utilizar este site e enviar informações por meio dos formulários
                  disponíveis, o usuário declara estar ciente desta Política de Privacidade.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
