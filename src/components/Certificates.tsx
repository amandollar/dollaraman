import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  /** Omit when there is no public verify URL */
  href?: string;
  imageUrl?: string;
};

const certificates: Cert[] = [
  {
    title: "Google Networking Specialization",
    issuer: "Google",
    date: "Dec 2025",
    href: "/google-networking-cert.jpeg",
    imageUrl: "/google-networking-cert.jpeg",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "Aug 2024",
    href: "/apna-college-web-dev.jpeg",
    imageUrl: "/apna-college-web-dev.jpeg",
  },
  {
    title: "Crowdfunding Internship (Completion Certificate)",
    issuer: "Muskurahat Foundation",
    date: "July 2025",
    href: "/certificate-1.jpeg",
    imageUrl: "/certificate-1.jpeg",
  },
];

export default function Certificates() {
  return (
    <Reveal>
      <section id="certificates" className="space-y-8 scroll-mt-24">
        <SectionHeader title="Credentials" />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certificates.map((cert) => {
            const content = (
              <div className="flex flex-col gap-4">
                {cert.imageUrl && (
                  <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-[4px] border border-notion bg-notion-muted/30 transition-transform duration-300 group-hover:scale-[1.01]">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="space-y-1.5 px-1">
                  <h3 className="text-[15px] font-bold tracking-tight text-notion-main transition-colors group-hover:text-accent">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-medium text-notion-sub">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            );

            return (
              <a
                key={cert.title}
                href={cert.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="notion-row group flex flex-col p-4"
              >
                {content}
              </a>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
