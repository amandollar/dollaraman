import { Reveal } from "./Reveal";
import Image from "next/image";

export default function Hero() {
  return (
    <Reveal>
      <section className="space-y-8 border-b border-notion pb-14 pt-4 md:pb-16 md:pt-2">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-start gap-8 md:gap-16">
          <div className="space-y-5 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-notion-sub">
              Portfolio
            </p>
            <h1 className="lux-headline text-[2.75rem] font-bold leading-[1.08] tracking-[-0.03em] md:text-6xl text-notion-main">
              Aman Sharma
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-snug text-notion-sub md:text-xl">
              Full-stack developer building scalable web applications.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="notion-pill text-notion-main/80">React · Next.js · Node.js</span>
              <span className="notion-pill">Remote-friendly</span>
              <span className="notion-pill">Open to opportunities</span>
            </div>
          </div>
          <div className="relative h-32 w-32 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-full border border-notion/50 shadow-xl transition-all hover:scale-[1.02]">
            <Image
              src="/profile.jpeg"
              alt="Aman Sharma"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              priority
            />
          </div>
        </div>

        <div className="notion-callout max-w-2xl items-start shadow-[0_8px_30px_rgba(35,131,226,0.08)]">
          <span
            className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#0f7b6c]"
            aria-hidden
          />
          <div className="min-w-0 space-y-1">
            <p className="text-[13px] font-semibold text-notion-main">Available for new opportunities</p>
            <p className="text-[13px] text-notion-sub">
              Currently focused on shipping <strong className="font-semibold text-notion-main">EventViewz</strong>{" "}
              and open-source tooling—happy to hear about roles that fit.
            </p>
          </div>
        </div>

        <p className="notion-text max-w-2xl">
          Passionate about React, Next.js, and Node.js. Building a production-grade event management SaaS at{" "}
          <a
            href="https://eventviewz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--accent)] underline decoration-[var(--border)] underline-offset-[3px] transition-colors hover:decoration-[var(--accent)]"
          >
            eventviewz.com
          </a>
          .
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href="#projects"
            className="lux-button text-notion-main"
          >
            View work
          </a>
          <a
            href="/amansharma.pdf"
            download="Aman-Sharma-CV.pdf"
            className="lux-outline"
          >
            Download resume
          </a>
          <a
            href="#contact"
            className="rounded-[4px] px-4 py-2 text-sm font-semibold text-notion-sub underline decoration-notion underline-offset-[5px] transition-colors hover:text-notion-main"
          >
            Get in touch
          </a>
        </div>
      </section>
    </Reveal>
  );
}
