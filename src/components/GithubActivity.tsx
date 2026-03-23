import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Github } from "lucide-react";

export default function GithubActivity() {
  const username = "amandollar";
  // Classic GitHub Green
  const githubGreen = "39d353";
  const chartUrl = `https://ghchart.rshah.org/${githubGreen}/${username}`;

  return (
    <Reveal>
      <section id="activity" className="space-y-6 scroll-mt-24">
        <SectionHeader title="Developer Activity" />
        <div className="notion-row group overflow-hidden bg-white dark:bg-white/5 p-6 sm:p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-notion-main">
                <Github size={20} className="text-notion-sub" />
                <span className="font-semibold text-lg">GitHub Contributions</span>
              </div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-notion-sub hover:text-notion-main transition-colors flex items-center gap-1"
              >
                View profile
              </a>
            </div>
            
            <div className="relative">
              {/* Heatmap Image - Using CSS filters for dark mode invert */}
              <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="min-w-[700px]">
                  <img
                    src={chartUrl}
                    alt={`${username}'s GitHub contributions`}
                    className="w-full h-auto transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Legend / Info */}
              <div className="mt-2 flex items-center justify-between text-[11px] text-notion-sub font-medium uppercase tracking-wider">
                <span>Last 12 months</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-[3px]">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-[10px] w-[10px] rounded-[2px]"
                        style={{
                          backgroundColor: i === 0 ? "var(--border)" : `rgba(57, 211, 83, ${i * 0.25 + 0.15})`,
                        }}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
