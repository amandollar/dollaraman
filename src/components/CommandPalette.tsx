"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  User, 
  Briefcase, 
  FolderGit2, 
  Code2, 
  Trophy, 
  Award, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const sections = [
  { id: "about", name: "About Me", icon: <User size={16} />, href: "#about" },
  { id: "experience", name: "Work Experience", icon: <Briefcase size={16} />, href: "#experience" },
  { id: "projects", name: "Project Journey", icon: <FolderGit2 size={16} />, href: "#projects" },
  { id: "skills", name: "Technical Skills", icon: <Code2 size={16} />, href: "#skills" },
  { id: "activity", name: "GitHub Activity", icon: <Zap size={16} />, href: "#activity" },
  { id: "achievements", name: "Achievements", icon: <Trophy size={16} />, href: "#achievements" },
  { id: "certificates", name: "Credentials", icon: <Award size={16} />, href: "#certificates" },
  { id: "education", name: "Education", icon: <GraduationCap size={16} />, href: "#education" },
  { id: "contact", name: "Contact", icon: <Mail size={16} />, href: "#contact" },
];

const actions = [
  { id: "github", name: "View GitHub Profile", icon: <Github size={16} />, href: "https://github.com/amandollar", external: true },
  { id: "linkedin", name: "Connect on LinkedIn", icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/aman-sharma-84156a289/", external: true },
];

/** 
 * Notion-style Command Palette for quick keyboard-driven navigation (Ctrl+K).
 * Gives the portfolio a "pro" productivity app feel.
 */
export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleOpenEvent = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleOpenEvent);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const filteredSections = sections.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));
  const filteredActions = actions.filter(a => a.name.toLowerCase().includes(query.toLowerCase()));
  
  // Combine sections first, then actions
  const results = [...filteredSections, ...filteredActions];

  const handleSelect = (item: typeof results[0]) => {
    setIsOpen(false);
    if ('external' in item && item.external) {
      window.open(item.href, "_blank");
    } else {
      router.push(item.href);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[activeIndex]) handleSelect(results[activeIndex]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-[2px]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.98, y: -20, x: "-50%" }}
            className="fixed left-1/2 top-[10%] z-[120] w-[95%] max-w-[550px] overflow-hidden rounded-xl border border-notion bg-[var(--background)] shadow-2xl transition-all sm:top-[15%] sm:w-[90%]"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-3 border-b border-notion px-4 py-3.5 sm:py-4">
                <Search size={18} className="text-notion-sub" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search sections..."
                  className="w-full bg-transparent text-[15px] outline-none placeholder:text-notion-sub/50 selection:bg-[var(--accent)] selection:text-white"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="hidden items-center gap-1.5 shrink-0 rounded-[4px] border border-notion bg-notion-muted px-1.5 py-0.5 text-[10px] font-bold text-notion-sub uppercase tracking-wider md:flex">
                  <span>ESC</span>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide sm:max-h-[380px]">
                {results.length > 0 ? (
                  <div className="space-y-1">
                    {results.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`group flex w-full items-center justify-between rounded-lg px-3 py-3 transition-all text-sm sm:py-2.5 ${
                          index === activeIndex 
                            ? "bg-[var(--accent)] text-white shadow-lg shadow-blue-500/20" 
                            : "text-notion-main hover:bg-[var(--card-hover)]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`transition-colors ${index === activeIndex ? "text-white" : "text-notion-sub"}`}>
                            {item.icon}
                          </span>
                          <span className="font-heading font-semibold tracking-tight">{item.name}</span>
                        </div>
                        {index === activeIndex && (
                          <div className="hidden items-center gap-1 opacity-90 transition-opacity md:flex">
                            <Zap size={12} className="fill-white" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Jump</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-notion-sub/60">
                    <Search size={32} className="mb-3 opacity-20" />
                    <p className="text-sm italic">Nothing found for "{query}"</p>
                  </div>
                )}
              </div>

              {/* Bottom bar - Hidden on mobile as it's keyboard-focused */}
              <div className="hidden items-center justify-between border-t border-notion bg-notion-muted/30 px-4 py-2.5 text-[10px] font-bold text-notion-sub uppercase tracking-widest sm:flex">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-5 w-7 items-center justify-center rounded-[4px] border border-notion bg-[var(--background)] shadow-sm">↑↓</span>
                    <span className="opacity-70">Navigate</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-5 w-9 items-center justify-center rounded-[4px] border border-notion bg-[var(--background)] shadow-sm">Enter</span>
                    <span className="opacity-70">Select</span>
                  </div>
                </div>
                <div className="opacity-60">Ctrl + K</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
