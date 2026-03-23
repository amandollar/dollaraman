import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ExternalLink, CalendarCheck, Terminal, FileText, Sparkles } from "lucide-react";

const projects = [
  {
    title: "EventViewz",
    description: "Production event management SaaS with RBAC auth, payments, and secure RESTful APIs.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT", "Razorpay Webhooks", "Cloudinary", "Docker"],
    link: "https://eventviewz.com",
    icon: <CalendarCheck className="w-4 h-4" />,
    highlights: [
      "Built a multi-tenant full-stack event management platform with RBAC authentication and secure RESTful APIs.",
      "Integrated Razorpay payment gateway with webhook signature verification and automated reconciliation.",
      "Optimized Cloudinary CDN media delivery, reducing image latency by 60% across 3000+ users.",
      "Containerized services and deployed via CI/CD pipelines for production stability and zero-downtime releases.",
    ],
  },
  {
    title: "tlwcss4 - Tailwind v4 CLI Tool",
    description: "Open-source CLI for automating Tailwind v4 + Vite setup.",
    tags: ["Node.js", "CLI Architecture", "NPM", "Vite"],
    link: "https://www.npmjs.com/package/tlwcss4",
    icon: <Terminal className="w-4 h-4" />,
    highlights: [
      "Engineered an open-source CLI automating Tailwind + Vite setup using Node process APIs and programmatic scaffolding.",
      "Implemented semantic versioning and automated NPM release workflows (100+ installs in the first week).",
    ],
  },
  {
    title: "DocIt - AI-Powered Document Management Platform",
    description: "Document intelligence platform for upload, semantic search, contextual Q&A, and AI summarization.",
    tags: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "AWS S3", "JWT", "RBAC"],
    link: "https://docit-app.vercel.app",
    icon: <FileText className="w-4 h-4" />,
    highlights: [
      "Built a full-stack document intelligence platform enabling upload, semantic search, and AI-based summarization of PDFs.",
      "Implemented a vector-based retrieval pipeline for contextual Q&A over documents using embeddings and similarity search.",
      "Designed secure file storage with AWS S3 pre-signed URLs and role-based access control (RBAC).",
      "Optimized document parsing and background processing, reducing response latency by 45%.",
    ],
  },
];

export default function Projects() {
  return (
    <Reveal>
      <section id="projects" className="space-y-4 scroll-mt-24">
        <SectionHeader title="Projects" />
        
        <div className="relative ml-1 space-y-12 pb-4 pt-4 lg:ml-2">
          {/* Vertical Connecting Line */}
          <div 
            className="absolute left-[15px] top-6 bottom-6 w-px bg-gradient-to-b from-notion via-notion to-transparent opacity-60" 
            aria-hidden="true" 
          />

          {projects.map((project, index) => (
            <div key={project.title} className="relative pl-10">
              {/* Timeline Node */}
              <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-notion bg-[var(--background)] text-notion-sub shadow-sm transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:shadow-[0_0_10px_rgba(35,131,226,0.15)] z-10">
                {project.icon}
              </div>

              {/* Project Card */}
              <div className="notion-row group flex flex-col gap-4 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold tracking-tight text-notion-main transition-colors group-hover:text-[var(--accent)]">
                        {project.title}
                      </h3>
                      {index === 0 && (
                        <span className="flex items-center gap-1 rounded-[4px] bg-[rgba(35,131,226,0.08)] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-tight text-[var(--accent)]">
                          <Sparkles size={10} /> Latest
                        </span>
                      )}
                    </div>
                    <p className="max-w-xl text-[15px] leading-relaxed text-notion-sub">
                      {project.description}
                    </p>
                  </div>
                  
                  <a
                    href={project.link}
                    className="flex shrink-0 items-center gap-1.5 self-start rounded-[4px] px-2 py-1 text-xs font-semibold text-notion-sub transition-all hover:bg-[rgba(35,131,226,0.06)] hover:text-notion-main"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    <span>View Live</span>
                  </a>
                </div>

                <ul className="max-w-2xl space-y-2 text-[14px] leading-relaxed text-notion-main/90">
                  {project.highlights.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-notion" />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-x-3 gap-y-2 pt-1 border-t border-notion/40">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-semibold text-notion-sub/80 hover:text-notion-main transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
