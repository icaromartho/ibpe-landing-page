import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IBPE — Gestão de Emergências, Crises e ICS",
  description:
    "Formação e consultoria em gestão de emergências, Incident Command System, planos PLEM/PESCINC e gestão de crise operacional e reputacional.",
  keywords: [
    "IBPE",
    "gestão de emergências",
    "ICS",
    "Incident Command System",
    "PLEM",
    "PESCINC",
    "consultoria de crise",
    "emergência aeroportuária",
    "resposta operacional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
