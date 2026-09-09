import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { HandHeart, Users } from "lucide-react";

export default function CtaBand({
  title = "Join the movement",
  subtitle = "Be part of the campaign to deliver real representation for Eti-Osa.",
}) {
  return (
    <section className="py-20 sm:py-24 bg-cream">
      <Reveal className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-apc">{title}</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="hope" size="lg" asChild>
            <Link to="/volunteer">
              <Users className="h-4 w-4" /> Volunteer
            </Link>
          </Button>
          <Button variant="gold" size="lg" asChild>
            <Link to="/donate">
              <HandHeart className="h-4 w-4" /> Donate
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}