import { useState } from "react";
import { CheckCircle2, ClipboardCheck, BadgeCheck, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/campaign/PageHero";
import SectionHeading from "@/components/campaign/SectionHeading";
import Reveal from "@/components/campaign/Reveal";
import { Field, SelectField, TextAreaField } from "@/components/campaign/Field";
import { WARDS, API_BASE } from "@/lib/campaign";

const BENEFITS = [
  { icon: BadgeCheck, title: "Digital ID Card", text: "Get a verified volunteer ID with QR code." },
  { icon: GraduationCap, title: "Training", text: "Access training materials and resources." },
  { icon: MapPin, title: "Ward Assignment", text: "Be deployed to your ward and polling unit." },
  { icon: ClipboardCheck, title: "Leaderboard", text: "Earn recognition and certificates." },
];

const STEPS = ["Register", "Approval", "Ward Assignment", "Get your Digital ID", "Start mobilising"];

export default function Volunteer() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", ward: WARDS[0], skills: "", availability: "Flexible", reason: "",
  });
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE}/volunteers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Volunteer Portal"
        title="Be the movement"
        subtitle="Join thousands of volunteers mobilising for a better Eti-Osa. Your time and skills can change the future."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Why volunteer" title="More than a campaign — a community" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5">
                    <span className="inline-flex h-11 w-11 rounded-xl bg-hope/15 text-apc items-center justify-center">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display font-semibold text-apc">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="mt-8">
              <div className="flex flex-wrap gap-2">
                {STEPS.map((s, i) => (
                  <span key={s} className="flex items-center gap-2 rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-apc">
                    <span className="h-5 w-5 rounded-full bg-apc text-hope flex items-center justify-center text-[10px] font-bold">
                      {i + 1}
                    </span>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              {status === "success" ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-12 w-12 text-hope mx-auto" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-apc">Welcome aboard!</h3>
                  <p className="mt-2 text-muted-foreground">Your registration is received. The team will review and assign you shortly.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-apc">Register to volunteer</h3>
                  <Field label="Full name" id="name" required value={form.name} onChange={set("name")} placeholder="Your name" />
                  <Field label="Email" id="email" type="email" required value={form.email} onChange={set("email")} placeholder="you@email.com" />
                  <Field label="Phone" id="phone" required value={form.phone} onChange={set("phone")} placeholder="080..." />
                  <SelectField label="Ward" id="ward" options={WARDS} value={form.ward} onChange={set("ward")} />
                  <Field label="Skills" id="skills" value={form.skills} onChange={set("skills")} placeholder="e.g. canvassing, design, social media" />
                  <SelectField label="Availability" id="availability" options={["Weekdays", "Weekends", "Evenings", "Flexible"]} value={form.availability} onChange={set("availability")} />
                  <TextAreaField label="Why do you want to volunteer?" id="reason" value={form.reason} onChange={set("reason")} placeholder="Tell us what drives you..." />
                  {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
                  <Button type="submit" variant="hope" size="lg" className="w-full" disabled={status === "submitting"}>
                    {status === "submitting" ? "Submitting..." : "Join as volunteer"}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}