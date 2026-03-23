import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab, India",
    duration: "Aug 2023 — Present",
    description:
      "Coursework includes Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and OOP.",
  },
];

export default function Education() {
  return (
    <Reveal>
      <section id="education" className="space-y-8 scroll-mt-24">
        <SectionHeader title="Education" />
        <div className="space-y-12">
          {education.map((item) => (
            <div key={item.degree} className="group relative pl-8 border-l border-notion pb-8 last:pb-0">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-notion-border border border-white dark:border-gray-900 group-hover:bg-notion-main transition-colors" />
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h3 className="text-lg font-bold text-notion-main">{item.degree}</h3>
                  <span className="text-sm font-semibold text-notion-sub whitespace-nowrap">{item.duration}</span>
                </div>
                <div className="text-sm font-semibold text-notion-main">{item.institution}</div>
                <p className="text-sm text-notion-sub leading-relaxed max-w-2xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
