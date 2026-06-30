import { Badge, Callout, SectionHeader, StatBox, SubHeading } from "./UI";

const GeoChip = ({ heat, text }: { heat: number; text: string }) => {
  return (
    <div
      className={`px-2.5 py-1 rounded text-[11px] font-bold heat-${heat}`}
    >
      {text}
    </div>
  );
};

export const ReportPart2 = () => {
  return (
    <>
      <div id="s-pr" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="04 — May 2026 PR Campaign"
          title="50 Editorial Links as AI Citation Infrastructure"
          desc="The May 2026 press campaign was not just a link-building exercise. From an AI Search perspective, it was one of the most powerful things we could do — and here's exactly why."
        />

        <Callout color="ai">
          <strong>How LLMs learn about local businesses:</strong> Large language models like ChatGPT and Gemini are trained on web-crawled content from across the internet. When a business appears across 50+ legitimate editorial publications — each independently describing the company, its services, and its location — the LLM builds a confident, verified "knowledge cluster" about that entity. More editorial mentions = higher confidence = higher probability of citation when users ask.
        </Callout>

        <SubHeading>Campaign Overview</SubHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-4">
          <StatBox win val="50" valColor="green" lab="Editorial Placements" note="Real news publications" />
          <StatBox win val="16+" valColor="green" lab="States Covered" note="Geographic AI signal" />
          <StatBox ai val="50×" valColor="ai" lab="AI Training Mentions" note="All independently verify business" noteColor="ai" />
          <StatBox ai val="100%" valColor="ai" lab="Exact Service Anchor" note='"custom indoor signage houston"' noteColor="ai" />
        </div>

        <SubHeading>Why Geographic Diversity = AI Authority</SubHeading>
        <Callout color="blue">
          When LLMs see a business mentioned in publications from Kentucky, Mississippi, Washington DC, California, and Utah simultaneously — all describing the same service in the same city — they treat this as high-confidence verified information. A local business mentioned only on local sites could be noise. A business mentioned across the country on editorial outlets is treated as a real, verified entity.
        </Callout>

        <div className="flex flex-wrap gap-1.5 my-3">
          <GeoChip heat={7} text="Kentucky — 7" />
          <GeoChip heat={6} text="Mississippi — 6" />
          <GeoChip heat={6} text="Massachusetts — 6" />
          <GeoChip heat={5} text="Louisiana — 5" />
          <GeoChip heat={5} text="Utah — 5" />
          <GeoChip heat={4} text="North Carolina — 4" />
          <GeoChip heat={4} text="Georgia — 3" />
          <GeoChip heat={1} text="Tennessee — 2" />
          <GeoChip heat={1} text="Virginia — 1" />
          <GeoChip heat={1} text="Ohio — 1" />
          <GeoChip heat={1} text="Pennsylvania — 1" />
          <GeoChip heat={1} text="South Carolina — 1" />
          <GeoChip heat={1} text="California — 1" />
          <GeoChip heat={1} text="Texas — 1" />
          <GeoChip heat={1} text="Washington DC — 1" />
          <GeoChip heat={1} text="International — 1" />
        </div>

        <SubHeading>AI Engine Impact — What Each Engine Does With These Links</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">AI Engine</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">How It Uses These 50 Links</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Expected Outcome</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Google AI Overviews</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">50 referring domains pointing to /interior-signs-in-houston/ raises the page's authority, making it more likely to be pulled into AI Overview answers for "interior signs Houston", "custom indoor signage", and related queries</td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Inclusion in AI Overview answers for interior signage queries</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">60–90 days post-indexation</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>ChatGPT (SearchGPT)</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">When crawling the web for real-time answers, ChatGPT encounters the same article across 50 different news publications — independently describing Houston Sign Company's indoor signage services</td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Higher confidence entity citation for "sign company Houston" queries</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">As training data updates (ongoing)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Perplexity AI</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Perplexity's real-time web search will find multiple authoritative sources describing the same service — cross-referencing sources is a Perplexity core behavior</td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Citation as a verified Houston indoor signage source</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">Near real-time (Perplexity crawls actively)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Google Knowledge Panel</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">50+ editorial sources describing the same business entity help Google build or strengthen a Knowledge Panel — the structured sidebar that appears for brand searches</td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Potential Knowledge Panel for "Houston Sign Company" brand search</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">3–6 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SubHeading>The Critical Unlock: Content Must Match the Citation</SubHeading>
        <Callout color="amber">
          <strong>The one gap to close:</strong> All 50 links point to /interior-signs-in-houston/. When an AI engine follows those citations and reads the landing page, it needs to find authoritative, comprehensive content about interior signs — not a thin service page. <strong>Upgrading the page content (Sprint Week 1) is what converts these 50 citations into AI answer inclusion.</strong> A well-cited thin page underperforms. A well-cited pillar page dominates.
        </Callout>

        <SubHeading>Scaling the PR Playbook — 3-Month AI Citation Calendar</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Month</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Campaign Headline</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Target Page</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Keyword Cluster</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">AI Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>May 2026 ✓</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Custom Indoor Signage Helps Houston Businesses Build Stronger Brand Identity</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">/interior-signs-in-houston/</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">interior signs, indoor signage houston</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="green">50 citations BUILT</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>August 2026</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">How Houston Event Planners Use Custom Signage to Drive Brand Recognition</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">/event-signs-houston/</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">event signage, event signs houston</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">Target: 50+ more citations</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>September 2026</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Houston Businesses Turn Every Mile Into Marketing With Commercial Fleet Wraps</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">/commercial-fleet-wraps-graphics-houston/</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">fleet wraps houston, commercial vehicle wraps</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">Target: 50+ more citations</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="s-wins" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="05 — 6-Month Performance Reframed"
          title="Everything We've Built Is an AI Signal"
          desc="The last 6 months of SEO work looks different through the AI Search lens. Here is the complete reframe — what we built and exactly how it feeds AI citation engines."
        />

        <Callout color="ai">
          <strong>The 80-year advantage:</strong> Houston Sign Company was founded in 1946. That founding year is a verified, historical fact that appears in the brand's "About" copy — a signal LLMs use to establish entity credibility. A business with 80 years of history is categorically more trustworthy to AI citation engines than a business founded in 2019. We need to make this fact structured, searchable, and everywhere.
        </Callout>

        <SubHeading>Content Published Jan–Jun 2026 — AI Value Assessment</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Post Title</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Date</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">AI Value</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Current AI Signal Strength</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Next Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200 font-bold">Custom vs. Standard Interior Signage</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">Jun 2026</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Direct comparison content — exactly what AI answers for commercial queries</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">No schema yet</Badge></td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Add FAQPage schema → AI citation ready</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200 font-bold">Custom Yard Signs vs. Traditional Advertising</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">Jun 2026</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Comparison format is highly cited by AI for "which is better" queries</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">No schema yet</Badge></td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Add FAQPage schema</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200 font-bold">How Much to Budget for Custom Interior Signage</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">May 2026</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Pricing content is the #1 most-cited category for local business AI answers</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">No schema yet</Badge></td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Highest priority for schema + direct answers</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200 font-bold">Custom Yard Signs — How They Boost Property Sales</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">May 2026</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Real estate + signage cross-targeting — feeds agent/realtor AI queries</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">No schema yet</Badge></td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Add LocalBusiness + FAQPage</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200 font-bold">Custom Retail Labels in Houston</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">May 2026</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Niche service content — good for specific AI queries about retail labeling</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">Thin</Badge></td>
                <td className="py-2 px-2.5 border-b border-gray-200 font-medium">Expand with manufacturer specs + FAQ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SubHeading>Active Rankings — Re-read as AI Citation Opportunities</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Rank</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Keyword</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Vol</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">What AI Engines Ask About This</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">AI Readiness</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><div className="inline-flex items-center justify-center w-7 h-7 rounded-md font-extrabold text-xs shrink-0 bg-[#fef3c7] text-[#92400e]">#1</div></td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>beer signs</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">1,300</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">"What are beer signs made of?" "Best bar signs" — content ranks but misses AI citation triggers</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">Add FAQ schema</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><div className="inline-flex items-center justify-center w-7 h-7 rounded-md font-extrabold text-xs shrink-0 bg-[#e0f2fe] text-[#0369a1]">#2</div></td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>acrylic sign holder</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">4,400</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">"How do I clean an acrylic sign?" "Best acrylic sign holders" — already answering real questions well</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="green">Strong → Add schema</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><div className="inline-flex items-center justify-center w-7 h-7 rounded-md font-extrabold text-xs shrink-0 bg-[#d1fae5] text-[#065f46]">#3</div></td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>decals for cars</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">3,600</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">"What are car decals?" "How do you apply car decals?" — how-to content is AI gold</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="green">Good → Add schema</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><div className="inline-flex items-center justify-center w-7 h-7 rounded-md font-extrabold text-xs shrink-0 bg-[#d1fae5] text-[#065f46]">#4</div></td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>custom wrapping paper</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">12,100</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">"Where can I get custom wrapping paper?" "Custom printed wrapping paper near me" — near-me local AI query</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">Sprint W1 post unlocks</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><div className="inline-flex items-center justify-center w-7 h-7 rounded-md font-extrabold text-xs shrink-0 bg-muted text-muted-foreground">#12</div></td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>interior signs</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">2,400</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">"What types of interior signs are there?" "Best interior office signs" — 50 links point here</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">Content upgrade = AI ready</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><div className="inline-flex items-center justify-center w-7 h-7 rounded-md font-extrabold text-xs shrink-0 bg-report-red-light text-[#991b1b]">#21</div></td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>signage</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">22,200</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">"What is signage?" — THE most common AI query about this industry</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">Sprint W3 pillar = AI anchor</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="s-map" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="06 — Signal Map"
          title="Every Action Mapped to Every AI Engine"
          desc="This is the complete picture of how completed work and planned work feeds each AI search engine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-3.5 py-3 font-extrabold text-[13px] flex items-center gap-2 bg-report-green-light text-[#065f46] border-b border-[#86efac]">
              ✅ Already Built — Active AI Signals
            </div>
            <div className="p-3.5 flex flex-col gap-2.5">
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-green font-bold shrink-0 text-[13px]">✓</div>
                <div>
                  <div className="flex-1"><strong>50 editorial PR placements</strong> — May 2026</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">Google AIO</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">ChatGPT</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#eff6ff] text-[#1e40af]">Perplexity</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-green font-bold shrink-0 text-[13px]">✓</div>
                <div>
                  <div className="flex-1"><strong>86/100 technical score</strong> — fast, crawlable site</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">Google AIO</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">ChatGPT</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#eff6ff] text-[#1e40af]">Perplexity</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f5f3ff] text-[#4c1d95]">Copilot</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-green font-bold shrink-0 text-[13px]">✓</div>
                <div>
                  <div className="flex-1"><strong>5+ years of blog content</strong> (blog archive since 2022)</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">Google AIO</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">ChatGPT training</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-green font-bold shrink-0 text-[13px]">✓</div>
                <div>
                  <div className="flex-1"><strong>Named institutional partners</strong> — SaberCats, UH, RMHC</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">Google AIO</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">Entity verify</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#eff6ff] text-[#1e40af]">Perplexity</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-green font-bold shrink-0 text-[13px]">✓</div>
                <div>
                  <div className="flex-1"><strong>3,086 existing backlinks</strong> from prior content</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">Google AIO</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">ChatGPT</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-green font-bold shrink-0 text-[13px]">✓</div>
                <div>
                  <div className="flex-1"><strong>Founded 1946</strong> — 80 years of verifiable brand history</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">LLM entity anchor</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#eff6ff] text-[#1e40af]">Trust signal</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">E-E-A-T</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-3.5 py-3 font-extrabold text-[13px] flex items-center gap-2 bg-report-blue-light text-[#1e40af] border-b border-[#93c5fd]">
              🔵 Sprint Actions — Building New AI Signals
            </div>
            <div className="p-3.5 flex flex-col gap-2.5">
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-blue font-bold shrink-0 text-[13px]">→</div>
                <div>
                  <div className="flex-1"><strong>FAQPage + LocalBusiness schema on all pages</strong> (W1)</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">+2× AIO inclusion</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">Structured answers</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-blue font-bold shrink-0 text-[13px]">→</div>
                <div>
                  <div className="flex-1"><strong>Interior signs page content upgrade</strong> — unlocks 50 links (W1)</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">Google AIO</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#eff6ff] text-[#1e40af]">Perplexity</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">ChatGPT</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-blue font-bold shrink-0 text-[13px]">→</div>
                <div>
                  <div className="flex-1"><strong>GBP full optimization + 10 reviews</strong> (W2)</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">+Local AIO</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#eff6ff] text-[#1e40af]">Perplexity local</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-blue font-bold shrink-0 text-[13px]">→</div>
                <div>
                  <div className="flex-1"><strong>"What is signage?" pillar post</strong> (W3)</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">Featured snippet</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">Direct answer</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#eff6ff] text-[#1e40af]">Perplexity</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f5f3ff] text-[#4c1d95]">Copilot</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-blue font-bold shrink-0 text-[13px]">→</div>
                <div>
                  <div className="flex-1"><strong>Brand Vault + OTTO Knowledge Graph</strong> (W4)</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fef3c7] text-[#92400e]">Knowledge Panel</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">Entity train data</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-blue font-bold shrink-0 text-[13px]">→</div>
                <div>
                  <div className="flex-1"><strong>Bing Places + Apple Maps</strong> (W4)</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f5f3ff] text-[#4c1d95]">Copilot local</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#fce7f3] text-[#9d174d]">Siri / Apple Int.</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[12px]">
                <div className="text-report-blue font-bold shrink-0 text-[13px]">→</div>
                <div>
                  <div className="flex-1"><strong>BBB + Houston Chamber listing</strong> (W4)</div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f0fdf4] text-[#065f46]">Trust anchor</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#eff6ff] text-[#1e40af]">Perplexity verify</span>
                    <span className="text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] bg-[#f5f3ff] text-[#4c1d95]">Copilot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
