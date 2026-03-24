import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <Reveal>
      <section id="about" className="space-y-6 scroll-mt-24">
        <SectionHeader title="About" />
        <div className="max-w-4xl space-y-6">
          <p className="notion-text">
            I&apos;m a <strong className="font-semibold text-notion-main">full-stack developer</strong> passionate about building fast, scalable, and user-focused applications with{" "}
            <strong className="font-semibold text-notion-main">React</strong>,{" "}
            <strong className="font-semibold text-notion-main">Next.js</strong>, and{" "}
            <strong className="font-semibold text-notion-main">Node.js</strong>. I specialize in transforming complex business requirements into elegant technical solutions that prioritize performance and maintainability.
          </p>
          <p className="notion-text">
            My recent work includes architecting{" "}
            <a
              href="https://eventviewz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] underline decoration-[var(--border)] underline-offset-[3px] transition-colors hover:decoration-[var(--accent)]"
            >
              eventviewz.com
            </a>
            , a multi-tenant event management SaaS, and developing AI-powered platforms like{" "}
            <strong className="font-semibold text-notion-main">DocIt</strong>, which utilizes vector embeddings for semantic document search. I&apos;m also an active contributor to the developer ecosystem, notably through{" "}
            <strong className="font-semibold text-notion-main">tlwcss4</strong>, an open-source CLI tool for Tailwind v4.
          </p>
          <p className="notion-text">
            I believe in the power of modular architecture and automated workflows. My background includes 
            engineering real-time systems and optimizing large-scale applications for{" "}
            <strong className="font-semibold text-notion-main">Core Web Vitals</strong>. Whether I&apos;m refining MongoDB aggregation pipelines or refactoring frontend monoliths, my goal is always to create meaningful experiences for both users and developers.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
