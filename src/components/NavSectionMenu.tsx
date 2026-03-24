"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid, X } from "lucide-react";

export type NavSection = { name: string; href: string; group: string };

type Props = { sections: NavSection[] };

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0 },
};

export default function NavSectionMenu({ sections }: Props) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const hasOpenedOnce = useRef(false);
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const descId = `${dialogId}-desc`;

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      hasOpenedOnce.current = true;
      const t = requestAnimationFrame(() => {
        panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      });
      return () => cancelAnimationFrame(t);
    }
    if (hasOpenedOnce.current) {
      btnRef.current?.focus({ preventScroll: true });
    }
  }, [open]);

  let lastGroup = "";

  return (
    <div className="relative z-50">
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? dialogId : undefined}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-2 rounded-[8px] border border-notion bg-[var(--background)] px-2.5 text-xs font-bold uppercase tracking-[0.12em] text-notion-main shadow-sm transition-[border-color,box-shadow,transform,background-color] hover:border-[var(--accent)]/35 hover:shadow-md hover:bg-notion-muted/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="inline-flex text-notion-sub"
          aria-hidden
        >
          <LayoutGrid className="h-3.5 w-3.5" strokeWidth={2.25} />
        </motion.span>
        <span className="hidden sm:inline pr-0.5">Contents</span>
      </button>

      <AnimatePresence mode="wait">
        {open && (
          <>
            <motion.button
              key="backdrop"
              type="button"
              aria-label="Close section menu"
              className="fixed inset-0 z-40 cursor-default bg-[var(--foreground)]/[0.12] backdrop-blur-[3px] dark:bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              onClick={close}
            />

            <motion.div
              key="panel"
              ref={panelRef}
              id={dialogId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descId}
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.85 }}
              className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(calc(100vw-1.75rem),23rem)] overflow-hidden rounded-xl border border-notion bg-[var(--background)] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.22),0_0_0_1px_rgba(0,0,0,0.03)] dark:shadow-[0_28px_72px_-12px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.04)] sm:w-[27rem]"
            >
              <div className="relative overflow-hidden border-b border-notion bg-gradient-to-br from-[var(--muted)]/75 via-[var(--background)] to-[var(--background)] px-4 pb-3.5 pt-3.5 dark:from-[var(--muted)]/25">
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-[var(--accent)] opacity-80"
                  aria-hidden
                />
                <div className="flex items-start justify-between gap-3 pl-2">
                  <div className="min-w-0">
                    <p
                      id={titleId}
                      className="text-[10px] font-bold uppercase tracking-[0.24em] text-notion-sub"
                    >
                      On this page
                    </p>
                    <p id={descId} className="mt-1 text-[15px] font-semibold leading-snug text-notion-main">
                      Jump anywhere
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-transparent text-notion-sub transition-colors hover:border-notion hover:bg-notion-muted/80 hover:text-notion-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" strokeWidth={2.25} />
                  </button>
                </div>
              </div>

              <motion.ul
                className="nav-toc-scroll max-h-[min(58vh,21rem)] space-y-0.5 overflow-y-auto overscroll-contain px-2 py-2"
                variants={listVariants}
                initial="hidden"
                animate="show"
              >
                {sections.map((item, i) => {
                  const showGroup = item.group !== lastGroup;
                  lastGroup = item.group;
                  return (
                    <motion.li key={item.href} variants={rowVariants} transition={{ duration: 0.2 }}>
                      {showGroup && (
                        <div className="px-3 pb-1 pt-3 first:pt-1">
                          <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-notion-sub/75">
                            {item.group}
                          </span>
                        </div>
                      )}
                      <Link
                        href={item.href}
                        onClick={close}
                        className="group relative flex items-center gap-3 overflow-hidden rounded-lg px-3 py-2 text-sm font-medium text-notion-main transition-colors hover:bg-[var(--card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
                      >
                        <span
                          className="absolute left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                          aria-hidden
                        />
                        <span className="w-8 shrink-0 font-mono text-[11px] tabular-nums text-notion-sub/70 transition-colors group-hover:text-notion-sub">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading min-w-0 flex-1 pr-1">{item.name}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
