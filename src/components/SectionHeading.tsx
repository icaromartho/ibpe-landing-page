type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-black uppercase tracking-[0.28em] ${
            light ? "text-orange-200" : "text-ibpe-orange"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-black leading-tight tracking-normal sm:text-4xl ${
          light ? "text-white" : "text-ibpe-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            light ? "text-white/78" : "text-ibpe-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
