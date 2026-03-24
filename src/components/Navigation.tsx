import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavSectionMenu from "./NavSectionMenu";

/** Full page order — surfaced inside the Contents panel. */
const navSections = [
  { name: "About", href: "#about", group: "Start" },
  { name: "Experience", href: "#experience", group: "Work" },
  { name: "Projects", href: "#projects", group: "Work" },
  { name: "Skills", href: "#skills", group: "Work" },
  { name: "Activity", href: "#activity", group: "Work" },
  { name: "Achievements", href: "#achievements", group: "Spotlight" },
  { name: "Certificates", href: "#certificates", group: "Spotlight" },
  { name: "Education", href: "#education", group: "Background" },
  { name: "Contact", href: "#contact", group: "Reach out" },
] as const;

const quickHref = new Set(["#about", "#experience", "#projects", "#contact"]);
const quickLinks = navSections.filter((item) => quickHref.has(item.href));

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-notion bg-[var(--workspace)]/90 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-[var(--workspace)]/80">
      <div className="mx-auto flex min-h-[3.25rem] max-w-7xl items-center gap-3 px-4 py-2.5 sm:gap-5 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="shrink-0 font-heading text-base font-bold tracking-tight text-notion-main transition-[opacity,transform] hover:opacity-90 active:scale-[0.98] sm:text-lg"
        >
          Aman Sharma
        </Link>

        <div className="hidden min-w-0 flex-1 items-center gap-1 md:flex">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-quick-link relative shrink-0 whitespace-nowrap px-2.5 py-1.5 text-sm font-semibold text-notion-sub transition-colors hover:text-notion-main"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 md:flex-initial md:gap-2">
          <NavSectionMenu sections={[...navSections]} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
