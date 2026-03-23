import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <Reveal>
      <section id="about" className="space-y-6 scroll-mt-24">
        <SectionHeader title="About" />
        <div className="max-w-4xl space-y-5">
          <p className="notion-text">
            I am a full-stack developer with a strong foundation in building fast and scalable applications using{" "}
            <strong className="font-semibold text-notion-main">React</strong>,{" "}
            <strong className="font-semibold text-notion-main">Next.js</strong>, and{" "}
            <strong className="font-semibold text-notion-main">Node.js</strong>. I thrive on transforming complex ideas
            into elegant, real-world solutions.
          </p>
          <p className="notion-text">
            Currently, I am focused on <strong className="font-semibold text-notion-main">EventViewz</strong>, an
            all-in-one platform for event organization, and I&apos;m an active contributor to open-source projects,
            including my own CLI tool (<strong className="font-semibold text-notion-main">tlwcss4</strong>).
          </p>
          <p className="notion-text">
            With a background in Mechanical Engineering and a deep dive into Full Stack Development at Masai School, I
            bring a unique problem-solving perspective to software engineering.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
