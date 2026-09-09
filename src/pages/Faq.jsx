import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import PageHero from "@/components/campaign/PageHero";
import CtaBand from "@/components/campaign/CtaBand";

const FAQS = [
  { q: "Who is Fuad Atanda Lawal?", a: "Hon. Fuad Atanda Lawal is the APC candidate for the House of Representatives, Eti-Osa Federal Constituency, running on a platform of accountable, people-centred representation." },
  { q: "What are his priority issues?", a: "Education, health, employment, infrastructure, youth and women empowerment, business support, security, and the environment." },
  { q: "How can I volunteer?", a: "Visit the Volunteer page, complete the registration form, and the campaign team will assign you to a ward and provide training and a digital ID." },
  { q: "What is the VOICES platform?", a: "VOICES lets residents submit video, photo, or written messages about what they want from their representative. Submissions are moderated and published for the community." },
  { q: "How do I donate?", a: "Go to the Donate page, choose an amount, and pay securely via card (Paystack) or bank transfer. Every contribution supports mobilisation." },
  { q: "Where is the next event?", a: "Check the Events page for upcoming town halls, rallies, and community outreach across Eti-Osa, and RSVP to attend." },
  { q: "Is my data safe?", a: "Yes. All submissions and donations are handled securely with encryption. We do not share your personal data with third parties." },
];

export default function Faq() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="Everything you need to know about the campaign, the candidate, and how to get involved."
      />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left font-display font-semibold text-apc hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">Still have questions?</p>
            <Button asChild className="mt-3">
              <Link to="/contact">Contact the campaign</Link>
            </Button>
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}