export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-6 border-t border-notion pt-8 text-sm text-notion-sub sm:flex-row sm:items-center sm:justify-between">
      <div className="text-notion-sub">© {new Date().getFullYear()} Aman Sharma</div>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <a
          href="https://github.com/amandollar"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] px-1 py-0.5 transition-colors hover:bg-[var(--card-hover)] hover:text-notion-main"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aman-sharma-84156a289/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] px-1 py-0.5 transition-colors hover:bg-[var(--card-hover)] hover:text-notion-main"
        >
          LinkedIn
        </a>
        <a
          href="mailto:shreeaman1@gmail.com"
          className="rounded-[3px] px-1 py-0.5 transition-colors hover:bg-[var(--card-hover)] hover:text-notion-main"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
