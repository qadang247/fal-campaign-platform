import { useState } from "react";
import {
  Video, Image as ImageIcon, FileText, Heart, Share2, MessageCircle, CheckCircle2, Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/campaign/PageHero";
import SectionHeading from "@/components/campaign/SectionHeading";
import Reveal from "@/components/campaign/Reveal";
import { Field, SelectField, TextAreaField } from "@/components/campaign/Field";
import { WARDS, ISSUE_CATEGORIES, API_BASE, CONSTITUENCY } from "@/lib/campaign";

const STEPS = [
  { title: "Submit", text: "Share your voice via video, photo, or text." },
  { title: "AI Moderation", text: "Submissions are screened for safety and relevance." },
  { title: "Approval", text: "The campaign team reviews and approves." },
  { title: "Published", text: "Your voice goes live for the community." },
  { title: "Engagement", text: "Residents react, support, and share." },
];

const FEATURED = [
  { name: "Adaeze N.", ward: "Ward 05", issue: "Health", text: "We need a functioning clinic closer to our community.", likes: 142 },
  { name: "Tunde A.", ward: "Ward 12", issue: "Education", text: "Our schools need more teachers and better facilities.", likes: 98 },
  { name: "Fatima B.", ward: "Ward 03", issue: "Employment", text: "The youth need skills training and real job opportunities.", likes: 211 },
];

export default function Voices() {
  const [form, setForm] = useState({
    name: "", ward: WARDS[0], community: "", occupation: "",
    age: "18-25", gender: "Female", category: ISSUE_CATEGORIES[0], type: "text", text: "",
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      if (file) data.append("file", file);
      const res = await fetch(`${API_BASE}/voices`, { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="VOICES"
        title="The People Speak. We Listen. We Represent."
        subtitle={`What does ${CONSTITUENCY} want from its representative? Hear directly from residents sharing their hopes and expectations.`}
      />

      {/* Submission */}
      <section id="voices" className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Add Your Voice"
            title="Share what matters to you"
            subtitle="Submit a video, photo, or written message. Every voice shapes the campaign."
          />
          {status === "success" ? (
            <Reveal className="mt-10 rounded-2xl border border-hope/40 bg-hope/10 p-8 text-center">
              <CheckCircle2 className="h-10 w-10 text-hope mx-auto" />
              <h3 className="mt-4 font-display text-2xl font-bold text-apc">Thank you — your voice has been received</h3>
              <p className="mt-2 text-muted-foreground">It will be reviewed and published shortly.</p>
              <Button
                className="mt-6"
                variant="outline"
                onClick={() => { setStatus("idle"); setForm((f) => ({ ...f, text: "" })); setFile(null); }}
              >
                Submit another
              </Button>
            </Reveal>
          ) : (
            <form onSubmit={submit} className="mt-10 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" id="name" required value={form.name} onChange={set("name")} placeholder="Your name" />
              <SelectField label="Ward" id="ward" options={WARDS} value={form.ward} onChange={set("ward")} />
              <Field label="Community" id="community" value={form.community} onChange={set("community")} placeholder="Your community" />
              <Field label="Occupation" id="occupation" value={form.occupation} onChange={set("occupation")} placeholder="Your occupation" />
              <SelectField label="Age range" id="age" options={["18-25", "26-35", "36-50", "51-65", "65+"]} value={form.age} onChange={set("age")} />
              <SelectField label="Gender" id="gender" options={["Female", "Male", "Prefer not to say"]} value={form.gender} onChange={set("gender")} />
              <SelectField label="Issue category" id="category" options={ISSUE_CATEGORIES} value={form.category} onChange={set("category")} />
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-apc">Submission type</label>
                <div className="flex gap-2">
                  {[
                    { k: "text", icon: FileText, l: "Text" },
                    { k: "video", icon: Video, l: "Video" },
                    { k: "photo", icon: ImageIcon, l: "Photo" },
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.k}
                      onClick={() => setForm((f) => ({ ...f, type: t.k }))}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                        form.type === t.k ? "border-hope bg-hope/10 text-apc" : "border-input text-muted-foreground"
                      }`}
                    >
                      <t.icon className="h-4 w-4" /> {t.l}
                    </button>
                  ))}
                </div>
              </div>
              {form.type !== "text" && (
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-sm font-medium text-apc">{form.type === "video" ? "Upload video" : "Upload photo"}</label>
                  <div className="rounded-xl border-2 border-dashed border-input p-6 text-center">
                    <Upload className="h-6 w-6 mx-auto text-muted-foreground" />
                    <input
                      type="file"
                      accept={form.type === "video" ? "video/*" : "image/*"}
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="mt-2 text-sm"
                    />
                  </div>
                </div>
              )}
              <TextAreaField
                label="Your message"
                id="text"
                className="sm:col-span-2"
                required
                value={form.text}
                onChange={set("text")}
                placeholder="Share your expectations, hopes, and aspirations..."
              />
              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-destructive">Something went wrong. Please try again later.</p>
              )}
              <div className="sm:col-span-2">
                <Button type="submit" variant="hope" size="lg" disabled={status === "submitting"}>
                  {status === "submitting" ? "Submitting..." : "Submit your voice"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="From your voice to action" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  <div className="font-display text-3xl font-bold text-hope">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display font-semibold text-apc">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Community Voices" title="What residents are saying" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {FEATURED.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-apc/10 px-2.5 py-1 text-xs font-semibold text-apc">{v.issue}</span>
                    <span className="text-xs text-muted-foreground">{v.ward}</span>
                  </div>
                  <p className="mt-4 text-foreground leading-relaxed">"{v.text}"</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-apc">{v.name}</span>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1 text-sm"><Heart className="h-4 w-4" /> {v.likes}</span>
                      <Share2 className="h-4 w-4" />
                      <MessageCircle className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}