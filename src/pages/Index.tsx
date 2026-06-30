import { ReportPart1 } from "@/components/report/ReportPart1";
import { ReportPart2 } from "@/components/report/ReportPart2";
import { ReportPart3 } from "@/components/report/ReportPart3";
import { ReportPart4 } from "@/components/report/ReportPart4";
import { Sidebar } from "@/components/report/Sidebar";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [activeId, setActiveId] = useState("s-shift");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "s-shift",
        "s-stats",
        "s-signals",
        "s-pr",
        "s-wins",
        "s-map",
        "s-sprint",
        "s-content",
        "s-entity",
        "s-local",
        "s-goals",
        "s-appendix",
      ];
      
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) {
          current = id;
        }
      });
      
      if (current && current !== activeId) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  return (
    <div className="flex min-h-screen bg-white text-[13px] text-gray-900 font-sans leading-relaxed">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-[230px] shrink-0">
        <Sidebar activeId={activeId} onNavigate={scrollTo} />
      </div>

      {/* Mobile Header & Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#0f172a] text-white z-50 flex items-center px-4 justify-between">
        <div className="font-bold">Houston Sign Co.</div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="p-2 -mr-2">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[240px] border-r-0 bg-[#0f172a] border-none text-white">
            <Sidebar activeId={activeId} onNavigate={scrollTo} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-[230px] min-w-0 pt-14 md:pt-0">
        {/* Cover Section */}
        <div className="cover-bg text-white py-[64px] px-[52px] relative overflow-hidden">
          {/* Subtle dot grid overlay */}
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.04) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-report-ai/30 border border-report-ai-border/40 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-[0.04em] mb-5 text-[#c4b5fd]">
              🤖 AI Search Strategy Report · Prepared by Howell Studios
            </div>
            
            <h1 className="text-[36px] font-black leading-[1.1] mb-3 text-shadow-sm">
              Houston Sign Company<br />
              is Being Built for<br />
              <span className="ai-text-gradient">AI Search</span>
            </h1>
            
            <div className="text-[14px] opacity-75 max-w-[560px] mb-8">
              Traditional SEO rankings still matter — but in 2026, the question is: does ChatGPT, Perplexity, Google AI Overviews, and Copilot know you exist? Every piece of work we've done is feeding the new search engine.
            </div>

            <div className="flex border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm bg-black/10 max-w-[800px]">
              <div className="flex-1 py-4 px-3.5 border-r border-white/10 last:border-r-0 text-center">
                <div className="text-[22px] font-black text-[#a5b4fc] leading-none">47%</div>
                <div className="text-[10px] text-white/45 uppercase tracking-[0.05em] mt-1">of Google SERPs have AI Overviews</div>
              </div>
              <div className="flex-1 py-4 px-3.5 border-r border-white/10 last:border-r-0 text-center">
                <div className="text-[22px] font-black text-[#a5b4fc] leading-none">25%</div>
                <div className="text-[10px] text-white/45 uppercase tracking-[0.05em] mt-1">drop in traditional search by 2026</div>
              </div>
              <div className="flex-1 py-4 px-3.5 border-r border-white/10 last:border-r-0 text-center">
                <div className="text-[22px] font-black text-[#a5b4fc] leading-none">50</div>
                <div className="text-[10px] text-white/45 uppercase tracking-[0.05em] mt-1">AI citation sources built in May</div>
              </div>
              <div className="flex-1 py-4 px-3.5 border-r border-white/10 last:border-r-0 text-center">
                <div className="text-[22px] font-black text-[#a5b4fc] leading-none">80yrs</div>
                <div className="text-[10px] text-white/45 uppercase tracking-[0.05em] mt-1">of brand equity to leverage</div>
              </div>
              <div className="flex-1 py-4 px-3.5 border-r border-white/10 last:border-r-0 text-center">
                <div className="text-[22px] font-black text-[#a5b4fc] leading-none">2x</div>
                <div className="text-[10px] text-white/45 uppercase tracking-[0.05em] mt-1">higher AI citation with schema</div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Sections */}
        <ReportPart1 />
        <ReportPart2 />
        <ReportPart3 />
        <ReportPart4 />

        {/* Footer */}
        <div className="bg-[#0f172a] text-white py-9 px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
            <div>
              <div className="text-[9px] uppercase tracking-[0.08em] text-white/35 font-bold mb-1.5">
                Prepared By
              </div>
              <div className="text-[12px] text-white/75 leading-relaxed">
                Howell Studios<br />
                patrick@howellstudios.com<br />
                Rochester NY · Orlando FL
              </div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.08em] text-white/35 font-bold mb-1.5">
                Client
              </div>
              <div className="text-[12px] text-white/75 leading-relaxed">
                Houston Sign Company<br />
                houstonsign.com · Founded 1946<br />
                5801 Chimney Rock Rd, Houston TX 77081
              </div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.08em] text-white/35 font-bold mb-1.5">
                Data Sources
              </div>
              <div className="text-[12px] text-white/75 leading-relaxed">
                RankNinja Site Explorer (site 447097)<br />
                SparkToro, Gartner, BrightEdge, Semrush, Moz<br />
                Sistrix, HubSpot Research 2024–2025
              </div>
            </div>
          </div>
          <div className="text-[10px] text-white/25 border-t border-white/10 pt-3.5">
            Confidential · Houston Sign Company AI Search Strategy · June 2026 · Howell Studios · Powered by Claude Code / Anthropic
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
