import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/campaign/PageHero";
import SectionHeading from "@/components/campaign/SectionHeading";
import Reveal from "@/components/campaign/Reveal";
import { Field, TextAreaField } from "@/components/campaign/Field";
import { API_BASE } from "@/lib/campaign";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE}/contact`, {
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
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Questions, partnerships, or ideas? Reach the campaign team — we're listening."
      />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Reach us" title="Campaign office" />
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-hope mt-0.5" /> Eti-Osa, Lagos, Nigeria</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-hope" /> Campaign hotline: [phone]</li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-hope" /> info@fal2027.org</li>
            </ul>
            <div className="mt-8 aspect-video rounded-2xl bg-gradient-to-br from-apc/20 to-hope/20 border border-border" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-12 w-12 text-hope mx-auto" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-apc">Message sent</h3>
                  <p className="mt-2 text-muted-foreground">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-apc">Send a message</h3>
                  <Field label="Name" id="name" required value={form.name} onChange={set("name")} placeholder="Your name" />
                  <Field label="Email" id="email" type="email" required value={form.email} onChange={set("email")} placeholder="you@email.com" />
                  <Field label="Subject" id="subject" required value={form.subject} onChange={set("subject")} placeholder="How can we help?" />
                  <TextAreaField label="Message" id="message" required value={form.message} onChange={set("message")} placeholder="Write your message..." />
                  {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
                  <Button type="submit" variant="hope" size="lg" className="w-full" disabled={status === "submitting"}>
                    <Send className="h-4 w-4" /> {status === "submitting" ? "Sending..." : "Send message"}
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