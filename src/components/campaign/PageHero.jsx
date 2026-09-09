import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-apc text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(200,229,27,0.16),transparent_70%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-hope">
              <span className="h-px w-6 bg-hope/60" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-white/75 leading-relaxed">{subtitle}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}