import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Mail, Github, Linkedin, FileText, type LucideIcon } from "lucide-react";

type ContactItem = {
  name: string;
  value: string;
  href: string;
  icon: LucideIcon;
  download?: string;
};

const contactItems: ContactItem[] = [
  {
    name: "Email",
    value: "amanreal122@gmail.com",
    href: "mailto:amanreal122@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "github.com/amandollar",
    href: "https://github.com/amandollar",
    icon: Github,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/aman-sharma-84156a289",
    href: "https://www.linkedin.com/in/aman-sharma-84156a289/",
    icon: Linkedin,
  },
  {
    name: "Resume",
    value: "Download PDF",
    href: "/amansharma.pdf",
    icon: FileText,
    download: "Aman-Sharma-CV.pdf",
  },
];

export default function Contact() {
  return (
    <Reveal>
      <section id="contact" className="space-y-8 scroll-mt-24 pb-12">
        <SectionHeader title="Get in touch" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              download={item.download}
              className="notion-row group flex items-center gap-5 rounded-[4px] p-4 active:scale-[0.99] sm:p-5"
            >
              <div className="rounded-[4px] border border-notion bg-notion-muted/60 p-2.5 transition-colors group-hover:bg-[var(--background)]">
                <item.icon className="w-5 h-5 text-notion-sub group-hover:text-notion-main transition-colors" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-notion-sub">
                  {item.name}
                </div>
                <div className="text-sm font-bold text-notion-main">
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="notion-text max-w-lg pt-2 text-notion-sub">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </section>
    </Reveal>
  );
}
