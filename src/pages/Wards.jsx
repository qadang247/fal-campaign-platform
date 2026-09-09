import { useState } from "react";
import { Users, Mic, CalendarDays, MapPin, TrendingUp } from "lucide-react";
import PageHero from "@/components/campaign/PageHero";
import SectionHeading from "@/components/campaign/SectionHeading";
import Reveal from "@/components/campaign/Reveal";
import CtaBand from "@/components/campaign/CtaBand";
import { WARDS } from "@/lib/campaign";

const wardData = (i) => ({
  population: 8000 + i * 540,
  volunteers: 120 + (i * 17) % 200,
  voices: 20 + (i * 7) % 60,
  events: 1 + (i % 4),
  coverage: Math.min(95, 40 + i * 2),
});

export default function Wards() {
  const [selected, setSelected] = useState(0);
  const w = WARDS[selected];
  const d = wardData(selected);

  const stats = [
    { icon: Users, label: "Volunteers", value: d.volunteers },
    { icon: Mic, label: "Voices", value: d.voices },
    { icon: CalendarDays, label: "Events", value: d.events },
    { icon: TrendingUp, label: "Population", value: d.population.toLocaleString() },
  ];

  return (
    <div>
      <PageHero
        eyebrow="Interactive Ward Map"
        title="Eti-Osa, ward by ward"
        subtitle="Explore every ward in the constituency. Click a ward to see live activity, volunteers, voices, and campaign coverage."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-cream p-5 sm:p-8">
              <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
                {WARDS.map((name, i) => {
                  const active = i === selected;
                  return (
                    <button
                      key={name}
                      onClick={() => setSelected(i)}
                      className={`aspect-square rounded-lg text-xs font-semibold transition-all ${
                        active
                          ? "bg-apc text-hope scale-105 shadow-lg"
                          : "bg-card border border-border text-apc hover:border-hope hover:bg-hope/10"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Tap a ward tile to view its details. {WARDS.length} wards in Eti-Osa.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-hope" />
                <h3 className="font-display text-2xl font-bold text-apc">{w}</h3>
              </div>
              <div className="mt-4 h-2 rounded-full bg-cream overflow-hidden">
                <div className="h-full bg-hope" style={{ width: `${d.coverage}%` }} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{d.coverage}% campaign coverage</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-cream p-4">
                    <s.icon className="h-5 w-5 text-apc" />
                    <div className="mt-2 font-display text-xl font-bold text-apc">{s.value}</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}