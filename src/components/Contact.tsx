"use client";

import { FormEvent, useState } from "react";
import { interestOptions } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

const initialForm = {
  nome: "",
  empresa: "",
  cargo: "",
  whatsapp: "",
  email: "",
  interesse: interestOptions[0],
  mensagem: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(name: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setForm(initialForm);
    setSubmitted(true);
  }

  return (
    <section id="contato" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com o IBPE"
            subtitle="Entre em contato para cursos, consultorias, parcerias, treinamentos corporativos ou diagnóstico inicial da sua organização."
          />
          <div className="mt-10 border border-ibpe-line bg-ibpe-soft p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-ibpe-orange">
              Canal institucional
            </p>
            <p className="mt-4 text-sm leading-7 text-ibpe-muted">
              Use o formulario para iniciar uma conversa com contexto. A equipe do IBPE
              poderá orientar a melhor trilha entre curso, consultoria ou diagnóstico.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border border-ibpe-line bg-white p-6 shadow-technical sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome">
              <input
                required
                value={form.nome}
                onChange={(event) => updateField("nome", event.target.value)}
                className="form-input"
                type="text"
                name="nome"
              />
            </Field>
            <Field label="Empresa">
              <input
                value={form.empresa}
                onChange={(event) => updateField("empresa", event.target.value)}
                className="form-input"
                type="text"
                name="empresa"
              />
            </Field>
            <Field label="Cargo">
              <input
                value={form.cargo}
                onChange={(event) => updateField("cargo", event.target.value)}
                className="form-input"
                type="text"
                name="cargo"
              />
            </Field>
            <Field label="WhatsApp">
              <input
                required
                value={form.whatsapp}
                onChange={(event) => updateField("whatsapp", event.target.value)}
                className="form-input"
                type="tel"
                name="whatsapp"
              />
            </Field>
            <Field label="E-mail">
              <input
                required
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="form-input"
                type="email"
                name="email"
              />
            </Field>
            <Field label="Interesse">
              <select
                value={form.interesse}
                onChange={(event) => updateField("interesse", event.target.value)}
                className="form-input"
                name="interesse"
              >
                {interestOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Mensagem" className="mt-5">
            <textarea
              value={form.mensagem}
              onChange={(event) => updateField("mensagem", event.target.value)}
              className="form-input min-h-36 resize-y"
              name="mensagem"
            />
          </Field>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              aria-label="Enviar mensagem para o IBPE"
              className="focus-ring bg-ibpe-orange px-6 py-4 text-sm font-black text-white shadow-[0_12px_24px_rgba(242,92,5,0.20)] transition hover:-translate-y-0.5 hover:bg-[#d94f04]"
            >
              Enviar mensagem
            </button>
            {submitted && (
              <p className="border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-bold text-ibpe-dark">
                Recebemos sua solicitação. Em breve entraremos em contato.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-ibpe-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
