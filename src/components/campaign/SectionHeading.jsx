import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className }) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-hope">
          <span className="h-px w-6 bg-hope/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apc">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
}