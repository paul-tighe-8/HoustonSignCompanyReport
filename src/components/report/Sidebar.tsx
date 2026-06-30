import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { section: "The Shift" },
  { id: "s-shift", icon: "📊", label: "AI Search Is Here" },
  { id: "s-stats", icon: "📈", label: "Data & Statistics" },
  { id: "s-signals", icon: "🔬", label: "AI Ranking Signals" },
  { section: "Our Work = AI Signal" },
  { id: "s-pr", icon: "🔗", label: "50 PR Links Decoded", num: "50" },
  { id: "s-wins", icon: "🏆", label: "6-Month Wins Reframed" },
  { id: "s-map", icon: "🗺️", label: "Work → AI Engine Map" },
  { section: "Strategy" },
  { id: "s-sprint", icon: "🗓️", label: "30-Day AI Sprint" },
  { id: "s-content", icon: "✍️", label: "Content for AI Citation" },
  { id: "s-entity", icon: "🧠", label: "Entity Authority" },
  { id: "s-local", icon: "📍", label: "Local AI Visibility" },
  { section: "Outcomes" },
  { id: "s-goals", icon: "🎯", label: "30-Day KPIs" },
  { id: "s-appendix", icon: "📋", label: "Backlink Appendix", num: "50" },
];

export const Sidebar = ({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) => {
  return (
    <nav className="w-[230px] bg-[#0f172a] text-white fixed top-0 left-0 h-screen overflow-y-auto z-[100] pb-[30px] font-sans">
      <div className="pt-5 px-4 pb-3 border-b border-white/10">
        <div className="text-[13px] font-extrabold text-white">
          Houston Sign Company
        </div>
        <div className="text-[10px] text-white/40 mt-0.5">houstonsign.com</div>
        <div className="text-[10px] text-white/30 mt-2 pt-2 border-t border-white/10">
          AI Search Strategy · June 2026<br />
          Prepared by Howell Studios
        </div>
      </div>
      
      <div className="mx-4 my-3 bg-gradient-to-br from-[#6d28d9] to-[#2563eb] rounded-md px-2.5 py-2 text-[10px] font-bold text-white text-center tracking-[0.03em]">
        🤖 AI Search Optimized
      </div>

      {NAV_LINKS.map((item, index) => {
        if ("section" in item) {
          return (
            <div
              key={index}
              className="pt-3.5 px-4 pb-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white/25"
            >
              {item.section}
            </div>
          );
        }

        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "w-full flex items-center gap-2 py-[7px] px-4 text-[11px] cursor-pointer transition-all duration-150 border-l-4 text-left",
              isActive
                ? "text-white bg-white/10 border-[#818cf8]"
                : "text-white/60 border-transparent hover:text-white hover:bg-white/5"
            )}
          >
            <span className="text-[12px] w-4 text-center shrink-0">
              {item.icon}
            </span>
            <span>{item.label}</span>
            {item.num && (
              <span className="ml-auto bg-white/15 rounded-lg px-1.5 py-[1px] text-[9px] font-bold">
                {item.num}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
