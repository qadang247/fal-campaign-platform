import { useState } from "react";
import { HandHeart, CreditCard, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/campaign/PageHero";
import SectionHeading from "@/components/campaign/SectionHeading";
import Reveal from "@/components/campaign/Reveal";
import { Field } from "@/components/campaign/Field";
import { API_BASE } from "@/lib/campaign";

const AMOUNTS = [1000, 5000, 10000, 25000, 50000];
const SUPPORTERS = ["Adaeze N.", "Tunde A.", "Fatima B.", "Chidi O.", "Bisi A.", "Emeka N.", "Ngozi O."];

export default function Donate() {
  const [amount, setAmount] = useState(5000);
  const [custom, setCustom] = useState("");
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    const value = Number(custom) || amount;
    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE}/donations/initiate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, amount: value }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const total = Number(custom) || amount;

  return (
    <div>
      <PageHero
        eyebrow="Donate"
        title="Fuel the movement"
        subtitle="Every contribution powers outreach, mobilisation, and a real chance at accountable representation for Eti-Osa."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-12 w-12 text-hope mx-auto" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-apc">Thank you for your support!</h3>
                  <p className="mt-2 text-muted-foreground">Your contribution means everything to this movement.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-apc">Choose an amount (₦)</label>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {AMOUNTS.map((a) => (
                        <button
                          type="button"
                          key={a}
                          onClick={() => { setAmount(a); setCustom(""); }}
                          className={`rounded-lg border py-2.5 text-sm font-semibold transition ${
                            amount === a && !custom
                              ? "border-hope bg-hope/10 text-apc"
                              : "border-input text-muted-foreground hover:border-hope"
                          }`}
                        >
                          ₦{a.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <Field
                      label="Or enter a custom amount"
                      id="custom"
                      type="number"
                      className="mt-3"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      placeholder="₦0"
                    />
                  </div>
                  <Field label="Name" id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  <Field label="Email" id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                  <div className="rounded-xl bg-cream p-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 font-medium text-apc"><CreditCard className="h-4 w-4" /> Card payment</div>
                    <p className="mt-1">Secure card payments are processed via Paystack through the campaign API.</p>
                    <div className="mt-3 flex items-center gap-2 font-medium text-apc"><Building2 className="h-4 w-4" /> Bank transfer</div>
                    <p className="mt-1">Account: Fuad Atanda Lawal Campaign Org. — Bank: [Bank Name] — Acct No: [0000000000]</p>
                  </div>
                  {status === "error" && <p className="text-sm text-destructive">Payment could not be initiated. Please try again.</p>}
                  <Button type="submit" variant="hope" size="lg" className="w-full" disabled={status === "submitting"}>
                    <HandHeart className="h-4 w-4" /> {status === "submitting" ? "Processing..." : `Donate ₦${total.toLocaleString()}`}
                  </Button>
                  <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="h-3.5 w-3.5" /> Secure &amp; encrypted. Your data is protected.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Supporter Wall"
              title="Standing with Eti-Osa"
              subtitle="A growing community of supporters backing a better future."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {SUPPORTERS.map((s) => (
                <span key={s} className="rounded-full bg-cream border border-border px-3 py-1.5 text-sm text-apc">{s}</span>
              ))}
              <span className="rounded-full bg-hope/15 border border-hope/30 px-3 py-1.5 text-sm font-semibold text-apc">+ many more</span>
            </div>
            <div className="mt-8 rounded-2xl bg-apc text-white p-6">
              <div className="font-display text-3xl font-bold text-hope">₦12.4M</div>
              <p className="mt-1 text-sm text-white/70">raised from supporters across Eti-Osa</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}