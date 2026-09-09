import { Link } from "react-router-dom";
import { Megaphone, HandHeart, Mic, Users, MapPin, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Reveal from "@/components/campaign/Reveal";
import AnimatedCounter from "@/components/campaign/AnimatedCounter";
import Countdown from "@/components/campaign/Countdown";
import SectionHeading from "@/components/campaign/SectionHeading";
import { CANDIDATE_TITLE, CONSTITUENCY, PARTY, LOGO_URL } from "@/lib/campaign";

const STATS = [
  { icon: MapPin, label: "Wards Covered", value: 27, suffix: "" },
  { icon: Users, label: "Volunteers", value: 4200, suffix: "+" },
  { icon: CalendarDays, label: "Events Held", value: 38, suffix: "" },
  { icon: Mic, label: "Voices Submitted", value: 1260, suffix: "+" },
];

const PILLARS = [
  { icon: Megaphone, title: "VOICES Platform", text: "Residents submit video, photo, and written testimony — moderated, published, and amplified." },
  { icon: MapPin, title: "Interactive Ward Map", text: "Every ward in Eti-Osa, clickable, with live activity, events, and community priorities." },
  { icon: Users, title: "Volunteer Portal", text: "Registration, ward assignment, digital ID cards, training, and a live leaderboard." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-apc text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(200,229,27,0.18),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(53,56,29,0.2),#35381d)]" />
          <img
            src={LOGO_URL}
            alt=""
            aria-hidden="true"
            className="absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] opacity-[0.06] pointer-events-none select-none"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-hope/30 bg-hope/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-hope">
                <Sparkles className="h-3.5 w-3.5" />
                {PARTY} • {CONSTITUENCY}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                {CANDIDATE_TITLE}
                <span className="block mt-3 bg-gradient-to-r from-hope via-hope to-gold bg-clip-text text-transparent">
                  Listening. Engaging. Representing.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
                A people-powered movement to deliver accountable, visionary representation for {CONSTITUENCY}.
                This is your campaign — your voice, your future, your representative.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hope" size="lg" asChild>
                  <Link to="/volunteer">
                    <HandHeart className="h-4 w-4" /> Join the Movement
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/25 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link to="/volunteer">
                    <Users className="h-4 w-4" /> Volunteer
                  </Link>
                </Button>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/donate">Donate</Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link to="/voices">
                    <Mic className="h-4 w-4" /> Add Your Voice
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-12 max-w-md">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                  Countdown to Election Day 2027
                </p>
                <Countdown />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating stats */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="flex items-center gap-3">
                    <span className="h-11 w-11 rounded-xl bg-hope/15 flex items-center justify-center text-hope">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                        <AnimatedCounter value={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-xs uppercase tracking-[0.15em] text-white/60">{s.label}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION SHOWCASE */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Foundation"
            title="A new benchmark for civic engagement"
            subtitle="This platform is being built section by section into a full digital campaign ecosystem. The design system, navigation, and interactive primitives are now in place — the journey begins here."
          />
          <Reveal delay={0.1} className="mt-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PILLARS.map((c) => (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="inline-flex h-12 w-12 rounded-xl bg-apc/10 text-apc items-center justify-center group-hover:bg-hope group-hover:text-apc transition-colors">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-apc">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}