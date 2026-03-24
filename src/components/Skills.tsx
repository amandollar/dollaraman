import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const skillGroups = [
  {
    category: "Languages & Core",
    items: [
      { name: "JavaScript", icon: "/skills/js.jpg" },
      { name: "TypeScript", icon: "/skills/typescirpt.jpg" },
      { name: "Node.js", icon: "/skills/node-js.jpg" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js", icon: "/skills/next-js.jpg" },
      { name: "Redux" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.jpg" },
      { name: "HTML/CSS" },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Express" },
      { name: "MongoDB", icon: "/skills/mongo-db.jpg" },
      { name: "PostgreSQL" },
      { name: "AWS", icon: "/skills/aws.jpg" },
      { name: "Docker", icon: "/skills/docker.jpg" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "GitHub", icon: "/skills/github.jpg" },
      { name: "Figma" },
      { name: "NPM", icon: "/skills/npm.jpg" },
      { name: "OpenAI", icon: "/skills/open-ai.jpg" },
      { name: "Solana", icon: "/skills/solana.jpg" },
      { name: "Vercel", icon: "/skills/vercel.jpg" },
    ],
  },
];

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="space-y-8 scroll-mt-24">
        <SectionHeader title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.1em] text-notion-sub">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 bg-notion-muted text-notion-main rounded-[4px] text-sm font-medium border border-notion hover:border-accent transition-all hover:-translate-y-0.5"
                  >
                    {skill.icon && (
                      <div className="w-4 h-4 shrink-0 overflow-hidden rounded-[2px]">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
