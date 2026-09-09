import { useState } from "react";
import { CalendarDays, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/campaign/PageHero";
import SectionHeading from "@/components/campaign/SectionHeading";
import Reveal from "@/components/campaign/Reveal";
import CtaBand from "@/components/campaign/CtaBand";

const UPCOMING = [
  { date: "2026-09-20", time: "10:00", title: "Town Hall — Listening to Eti-Osa", location: "Community Hall, Ward 04", desc: "An open conversation with residents on priority issues." },
  { date: "2026-09-28", time: "16:00", title: "Youth Empowerment Rally", location: "Open Field, Ward 11", desc: "Skills, jobs, and opportunity for young people." },
  { date: "2026-10-05", time: "11:00", title: "Women in Business Forum", location: "Civic Centre, Ward 07", desc: "Supporting market women and women-led SMEs." },
  { date: "2026-10-12", time: "09:00", title: "Health Outreach & Screening", location: "Primary Health Centre, Ward 02", desc: "Free screenings and community medical support." },
];

const PAST = [
  { date: "2026-08-15", title: "Back-to-School Drive", location: "Ward 09" },
  { date: "2026-07-30", title: "Coastal Cleanup", location: "Ward 15" },
  { date: "2026-07-12", title: "Stakeholders' Forum", location: "Ward 01" },
];

export default function Events() {
  const [rsvp, setRsvp] = useState({});
  const fmt = (d) =>
    new Date(d).toLocaleDateString("en-NG", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div>
      <PageHero
        eyebrow="Events"
        title="Join us on the campaign trail"
        subtitle="Town halls, rallies, forums, and community outreach across Eti-Osa. RSVP to stay informed."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" eyebrow="Upcoming" title="What's next" />
          <div className="mt-10 space-y-5">
            {UPCOMING.map((e, i) => {
              const done = rsvp[i];
              return (
                <Reveal key={e.title} delay={i * 0.05}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-md transition">
                    <div className="flex sm:flex-col items-center justify-center w-full sm:w-24 rounded-xl bg-apc text-white py-3 px-4">
                      <CalendarDays className="h-5 w-5 text-hope" />
                      <span className="mt-1 text-xs uppercase tracking-wide text-white/70">
                        {fmt(e.date).split(" ")[0]}
                      </span>
                      <span className="font-display text-2xl font-bold">{new Date(e.date).getDate()}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-apc">{e.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
                      <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {e.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.location}</span>
                      </div>
                    </div>
                    <Button variant={done ? "outline" : "hope"} onClick={() => setRsvp((r) => ({ ...r, [i]: true }))}>
                      {done ? (<><CheckCircle2 className="h-4 w-4" /> RSVP'd</>) : "RSVP"}
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" eyebrow="Past Events" title="Where we've been" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PAST.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="text-xs uppercase tracking-wide text-hope font-semibold">{fmt(p.date)}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-apc">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See you on the trail"
        subtitle="Bring your friends, family, and neighbours. Every attendee strengthens the movement."
      />
    </div>
  );
}