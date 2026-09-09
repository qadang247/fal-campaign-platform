import { FileText, Video, Image as ImageIcon, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PageHero from "@/components/campaign/PageHero";
import Reveal from "@/components/campaign/Reveal";
import CtaBand from "@/components/campaign/CtaBand";

const NEWS = [
  { date: "Sep 2026", title: "Fuad Lawal unveils 5-point agenda for Eti-Osa", tag: "News" },
  { date: "Aug 2026", title: "Campaign launches VOICES platform for residents", tag: "Press" },
  { date: "Aug 2026", title: "Town hall draws thousands in Ward 04", tag: "News" },
  { date: "Jul 2026", title: "Youth rally: 3,000 young people pledge support", tag: "Press" },
];

const VIDEOS = [
  { title: "Why I'm running", length: "3:24" },
  { title: "Eti-Osa deserves better", length: "5:10" },
  { title: "Community walk — Ward 07", length: "2:48" },
];

const GALLERY = Array.from({ length: 6 });

const DOWNLOADS = [
  { name: "Campaign Manifesto (PDF)", size: "2.4 MB" },
  { name: "Brand Assets & Logo Kit", size: "8.1 MB" },
  { name: "Press Kit", size: "1.2 MB" },
];

export default function Media() {
  return (
    <div>
      <PageHero
        eyebrow="Media Centre"
        title="The story of the movement"
        subtitle="News, press releases, videos, photos, and downloadable assets — all in one place."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="news">
            <TabsList className="flex flex-wrap h-auto bg-cream p-1">
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>

            <TabsContent value="news" className="mt-8 grid gap-5 sm:grid-cols-2">
              {NEWS.map((n, i) => (
                <Reveal key={n.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-md transition">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-hope/15 px-2.5 py-1 font-semibold text-apc">{n.tag}</span>
                      <span className="text-muted-foreground">{n.date}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-apc">{n.title}</h3>
                    <Button variant="link" className="mt-2 px-0 text-apc">
                      Read more <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </Reveal>
              ))}
            </TabsContent>

            <TabsContent value="videos" className="mt-8 grid gap-5 sm:grid-cols-3">
              {VIDEOS.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition">
                    <div className="relative aspect-video bg-gradient-to-br from-apc to-olive flex items-center justify-center">
                      <Video className="h-10 w-10 text-hope/80" />
                      <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">
                        {v.length}
                      </span>
                    </div>
                    <div className="p-4"><h3 className="font-display font-semibold text-apc">{v.title}</h3></div>
                  </div>
                </Reveal>
              ))}
            </TabsContent>

            <TabsContent value="gallery" className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {GALLERY.map((_, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-apc/20 to-hope/20 border border-border flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-apc/40" />
                  </div>
                </Reveal>
              ))}
            </TabsContent>

            <TabsContent value="downloads" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DOWNLOADS.map((d, i) => (
                <Reveal key={d.name} delay={i * 0.05}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="h-11 w-11 rounded-xl bg-apc/10 text-apc flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <div className="font-medium text-apc text-sm">{d.name}</div>
                      <div className="text-xs text-muted-foreground">{d.size}</div>
                    </div>
                    <Button variant="outline" size="icon"><Download className="h-4 w-4" /></Button>
                  </div>
                </Reveal>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CtaBand title="Stay in the loop" subtitle="Follow the campaign across every platform and never miss an update." />
    </div>
  );
}