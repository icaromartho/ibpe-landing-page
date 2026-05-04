type TechnicalIconProps = {
  label: string;
};

export function TechnicalIcon({ label }: TechnicalIconProps) {
  return (
    <span
      aria-hidden="true"
      className="hex-corner grid h-11 w-11 shrink-0 place-items-center border border-orange-200 bg-orange-50 text-sm font-black text-ibpe-orange"
    >
      {label.slice(0, 2).toUpperCase()}
    </span>
  );
}
