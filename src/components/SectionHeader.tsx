interface SectionHeaderProps {
  title: string;
  id?: string;
}

/** Notion-style H2: semibold title + hairline divider (no heavy chrome). */
export default function SectionHeader({ title, id }: SectionHeaderProps) {
  return (
    <div className="mb-8 scroll-mt-24 md:mb-10">
      <h2
        id={id}
        className="text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-notion-main md:text-[1.75rem]"
      >
        {title}
      </h2>
      <div className="mt-3 h-px w-full bg-notion opacity-[0.88]" aria-hidden />
    </div>
  );
}
