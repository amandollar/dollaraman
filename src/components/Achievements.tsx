import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Award, Rocket, Zap, ExternalLink } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    title: "GirlScript Summer of Code '25 Winner",
    description:
      "Ranked among the top contributors globally in GSSoC 2025. Contributed production-grade features to multiple open-source projects including EduHaven.",
    date: "2025",
    icon: <Award className="h-5 w-5" />,
    image: "/girlscript-of-code-winner.jpeg",
    featured: true,
  },
  {
    title: "NPM package published",
    description:
      "Published an open-source CLI package adopted by the developer community with strong early traction.",
    date: "2025",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Production apps at scale",
    description:
      "Built and deployed multiple production-grade applications used by 3000+ users with CI/CD and stable uptime.",
    date: "2025 — Present",
    icon: <Rocket className="h-5 w-5" />,
  },
];

export default function Achievements() {
  return (
    <Reveal>
      <section id="achievements" className="space-y-8 scroll-mt-24">
        <SectionHeader title="Achievements" />
        <div className="grid grid-cols-1 gap-4">
          {achievements.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col sm:flex-row gap-6 rounded-[6px] border border-notion bg-notion-muted/30 p-6 transition-all hover:bg-notion-muted/50 ${
                item.featured ? "border-accent/30 shadow-sm" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-notion-muted text-notion-main">
                {item.icon}
              </div>
              <div className="flex-1 space-y-4">
                <div className="min-w-0 space-y-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-bold text-notion-main flex items-center gap-2">
                      {item.title}
                      {item.featured && (
                        <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                          Featured
                        </span>
                      )}
                    </h3>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-notion-sub">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-notion-sub">{item.description}</p>
                </div>

                {item.image && (
                  <div className="relative aspect-[16/9] w-full max-w-md overflow-hidden rounded-[4px] border border-notion group/img">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
