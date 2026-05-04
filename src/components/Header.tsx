"use client";

import { useEffect, useState } from "react";
import { contact, navLinks } from "@/data/siteContent";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-ibpe-line bg-white/88 shadow-[0_10px_30px_rgba(47,52,58,0.08)] backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo compact />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm text-sm font-semibold text-ibpe-muted transition hover:text-ibpe-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.whatsappUrl}
            aria-label="Fale conosco pelo WhatsApp"
            className="focus-ring hex-corner bg-ibpe-orange px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(242,92,5,0.22)] transition hover:-translate-y-0.5 hover:bg-[#d94f04]"
          >
            Fale conosco
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-sm border border-ibpe-line bg-white text-ibpe-dark shadow-sm lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`grid border-t border-ibpe-line bg-white transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-sm px-2 py-3 text-sm font-bold text-ibpe-dark transition hover:bg-ibpe-soft hover:text-ibpe-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contact.whatsappUrl}
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 rounded-sm bg-ibpe-orange px-5 py-3 text-center text-sm font-bold text-white"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
