import {
  GraduationCap, HeartPulse, Briefcase, Construction, Users, Flower2,
  ShoppingBag, ShieldCheck, Leaf, Award, Target, Eye,
} from "lucide-react";
import PageHero from "@/components/campaign/PageHero";
import SectionHeading from "@/components/campaign/SectionHeading";
import Reveal from "@/components/campaign/Reveal";
import CtaBand from "@/components/campaign/CtaBand";
import Logo from "@/components/Logo";
import { CANDIDATE_TITLE, CONSTITUENCY } from "@/lib/campaign";

const PILLARS = [
  { icon: Eye, title: "Vision", text: "A constituency where every resident has a stake in progress and a voice in decisions." },
  { icon: Target, title: "Mission", text: "Deliver accountable, transparent, people-centred representation at the federal level." },
  { icon: Users, title: "Values", text: "Integrity, service, inclusion, and results — leadership that answers to the people." },
];

const ACHIEVEMENTS = [
  { icon: Award, title: "Youth Empowerment", text: "Sponsored skills programmes for over 3,000 young people across Eti-Osa." },
  { icon: HeartPulse, title: "Community Health", text: "Supported free health screenings and medical outreach in 27 wards." },
  { icon: Construction, title: "Local Infrastructure", text: "Advocated for road rehabilitation and drainage in coastal communities." },
  { icon: Briefcase, title: "Small Business Support", text: "Helped hundreds of market women and SMEs access grants and training." },
];

const ISSUES = [
  { icon: GraduationCap, title: "Education", text: "Quality schools, teacher support, and scholarships for every child." },
  { icon: HeartPulse, title: "Health", text: "Accessible primary healthcare and well-equipped community clinics." },
  { icon: Briefcase, title: "Employment", text: "Jobs, skills, and entrepreneurship for youth and women." },
  { icon: Construction, title: "Infrastructure", text: "Roads, drainage, power, and connectivity that work for residents." },
  { icon: Users, title: "Youth", text: "Empowering the next generation through opportunity and mentorship." },
  { icon: Flower2, title: "Women", text: "Economic inclusion, safety, and leadership for women." },
  { icon: ShoppingBag, title: "Business", text: "Supporting SMEs, markets, and a thriving local economy." },
  { icon: ShieldCheck, title: "Security", text: "Safe communities through cooperation and smart prevention." },
  { icon: Leaf, title: "Environment", text: "Clean coastlines, waste solutions, and climate-resilient communities." },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Fuad"
        title="A leader who listens."
        subtitle={`Meet ${CANDIDATE_TITLE}, APC candidate for the House of Representatives, ${CONSTITUENCY}.`}
      />

      {/* Bio */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-apc to-olive flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(200,229,27,0.25),transparent_70%)]" />
              <Logo size={140} withRing={false} />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <SectionHeading align="left" eyebrow="Biography" title="A life of service" />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hon. Fuad Atanda Lawal is a public servant, community advocate, and champion of grassroots
                development. For years he has worked alongside residents of Eti-Osa — listening, mobilising,
                and delivering on the issues that shape everyday life.
              </p>
              <p>
                His journey is rooted in the belief that representation must be earned, not assumed. From
                youth empowerment to community health, from small business support to local infrastructure,
                his work has consistently put people first.
              </p>
              <p>
                Now he offers himself to serve {CONSTITUENCY} at the federal level — to carry the voices of
                Eti-Osa to the House of Representatives and to turn hope into action.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Mandate"
            title="Vision. Mission. Values."
            subtitle="The principles that guide every decision and every promise."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="inline-flex h-12 w-12 rounded-xl bg-hope/15 text-apc items-center justify-center">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-apc">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Track Record"
            title="Achievements that matter"
            subtitle="Results delivered for the people of Eti-Osa."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition">
                  <span className="inline-flex h-11 w-11 rounded-xl bg-apc/10 text-apc items-center justify-center">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-apc">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Priority issues */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Priority Issues"
            title="What we will fight for"
            subtitle="Nine priorities shaped by the people of Eti-Osa."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ISSUES.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <span className="inline-flex h-12 w-12 rounded-xl bg-apc/10 text-apc items-center justify-center group-hover:bg-hope group-hover:text-apc transition-colors">
                    <it.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-apc">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}