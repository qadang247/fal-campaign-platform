import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Send, MapPin, Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { CANDIDATE_TITLE, CONSTITUENCY, PARTY } from "@/lib/campaign";

const SOCIAL = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Send, label: "WhatsApp", href: "#" },
];

const COLUMNS = [
  {
    title: "The Movement",
    links: [
      { label: "About Fuad", href: "/#about" },
      { label: "Manifesto", href: "/#manifesto" },
      { label: "Priority Issues", href: "/#issues" },
      { label: "VOICES", href: "/#voices" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Volunteer", href: "/#volunteer" },
      { label: "Donate", href: "/#donate" },
      { label: "Events", href: "/#events" },
      { label: "Ward Map", href: "/#wards" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "News", href: "/#news" },
      { label: "Gallery", href: "/#gallery" },
      { label: "Videos", href: "/#videos" },
      { label: "Press Releases", href: "/#press" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-apc text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo size={56} />
              <div>
                <div className="font-display font-bold text-white">{CANDIDATE_TITLE}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-hope">{PARTY}</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-sm">
              Listening. Engaging. Representing. A people-powered campaign to deliver accountable,
              visionary representation for {CONSTITUENCY}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-hope hover:text-apc hover:border-hope transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-hope">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-hope">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-hope" /> Eti-Osa, Lagos
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-hope" /> Campaign Office
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-hope" /> info@fal2027.org
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Fuad Atanda Lawal Campaign Organisation. All rights reserved.</p>
          <p>Authorized by the Fuad Atanda Lawal Campaign Organisation.</p>
        </div>
      </div>
    </footer>
  );
}