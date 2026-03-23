import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const experiences = [
  {
    company: "Dhoonki",
    logo: "/dhoonki.webp",
    role: "Frontend Engineer",
    location: "E-commerce startup (Remote)",
    duration: "Jul 2025 — Jan 2026",
    highlights: [
      "Refactored a React + TypeScript monolithic codebase into reusable modular architecture, reducing bundle size by 30%.",
      "Improved Core Web Vitals (LCP, CLS) using lazy loading, memoization, API caching, and asset compression; reduced load time by 35%.",
      "Engineered real-time order tracking integration with eKart REST APIs using exponential backoff retry strategy.",
      "Implemented a centralized API middleware layer with interceptors, structured error handling, and monitoring, achieving 99.5% uptime.",
    ],
  },
  {
    company: "rowh.in",
    logo: "/rowh_logo_1.webp",
    role: "Full-Stack Developer",
    location: "Remote",
    duration: "Jan 2026 — Feb 2026",
    highlights: [
      "Architected scalable Next.js + Node.js REST services with a modular controller-service pattern.",
      "Designed MongoDB indexing strategies and optimized aggregation pipelines, reducing response latency by 40%.",
      "Implemented JWT authentication, RBAC authorization, and input validation middleware for secure APIs.",
    ],
  },
  {
    company: "NamasteDev",
    logo: "/namastedev.webp",
    role: "Technical Content Contributor",
    location: "Remote",
    duration: "Jul 2025 — Dec 2025",
    highlights: [
      "Authored 20+ React-based algorithmic challenges emphasizing time/space complexity and edge-case robustness.",
      "Developed automated validation suites using Jest with deterministic grading logic.",
    ],
  },
];

export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="space-y-4 scroll-mt-24">
        <SectionHeader title="Experience" />
        <div className="space-y-12 pt-4">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="flex flex-col md:flex-row md:gap-12 group">
              <div className="text-sm font-semibold uppercase tracking-[0.1em] text-notion-sub w-32 shrink-0 pt-1.5">
                {exp.duration}
              </div>
              <div className="flex gap-6">
                <div className="relative shrink-0 flex h-12 w-12 items-center justify-center overflow-hidden rounded-[8px] border border-notion bg-white dark:bg-white/5 shadow-sm transition-transform group-hover:scale-105">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-notion-main group-hover:text-black dark:group-hover:text-white transition-colors">
                    {exp.role} <span className="text-notion-sub font-normal mx-1">@</span> {exp.company}
                  </h3>
                  <p className="text-sm text-notion-sub">{exp.location}</p>
                  <ul className="text-notion-main/80 leading-relaxed max-w-xl list-disc pl-5 space-y-2">
                    {exp.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
