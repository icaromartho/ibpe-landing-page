"use client";

import { useState } from "react";
import { basePath } from "@/data/runtime";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <a
      href={`${basePath}/#topo`}
      aria-label="Voltar ao início do site IBPE"
      className="focus-ring group flex items-center gap-3 rounded-sm"
    >
      {!logoFailed ? (
        <img
          src={`${basePath}/logo-ibpe.png`}
          alt="IBPE — Instituto Brasileiro de Pesquisa em Emergência"
          className={compact ? "h-10 w-auto" : "h-12 w-auto"}
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <div className="flex items-center gap-3">
          <span className="hex-corner grid h-10 w-10 place-items-center border border-ibpe-dark bg-white text-sm font-black tracking-[0.12em] text-ibpe-orange shadow-sm">
            IB
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black tracking-[0.18em] text-ibpe-dark">
              IBPE
            </span>
            {!compact && (
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-ibpe-muted sm:block">
                Emergência
              </span>
            )}
          </span>
        </div>
      )}
    </a>
  );
}
