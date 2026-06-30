import { Badge, Callout, ScoreRow, SectionHeader, StatBox, SubHeading } from "./UI";

export const ReportPart1 = () => {
  return (
    <>
      <div id="s-shift" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="01 — The Shift"
          title="SEO Has Become AI Search"
          desc="The way people find local businesses is fundamentally changing. Understanding this shift is why everything we're building for houstonsign.com is designed for 2026 — not 2020."
        />

        <Callout color="ai">
          <strong>The new reality:</strong> When someone asks "What's the best sign company in Houston?" they are increasingly asking ChatGPT, Perplexity, or Google's AI Overview — not typing into a search bar and scanning blue links. The businesses that appear in those AI answers are not the ones with the most ads. They are the ones with the strongest entity authority, the most cited content, and the most structured, verifiable data on the web.
        </Callout>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-xl overflow-hidden my-4">
          <div className="p-6 border-r border-gray-200 last:border-r-0">
            <div className="text-[42px] font-black leading-none num-text-gradient">47%</div>
            <div className="text-[13px] font-bold mt-1 text-gray-900">of Google Searches Now Show AI Overviews</div>
            <div className="text-[11px] text-gray-500 mt-1">Google's AI-generated answer summaries appear nearly half the time — above all organic results. If you're not in the AI Overview, you may be invisible.</div>
            <div className="text-[9px] text-gray-400 mt-2 italic">Source: SparkToro / Rand Fishkin, 2025</div>
          </div>
          <div className="p-6 border-r border-gray-200 last:border-r-0">
            <div className="text-[42px] font-black leading-none num-text-gradient">58.5%</div>
            <div className="text-[13px] font-bold mt-1 text-gray-900">of Google Searches End Without a Click</div>
            <div className="text-[11px] text-gray-500 mt-1">Zero-click searches — where Google answers the query in the SERP — now represent the majority of all searches. AI Overviews are the primary driver. Getting into the AI answer IS the click.</div>
            <div className="text-[9px] text-gray-400 mt-2 italic">Source: Sistrix, 2024</div>
          </div>
          <div className="p-6 border-r border-gray-200 last:border-r-0">
            <div className="text-[42px] font-black leading-none num-text-gradient">25%</div>
            <div className="text-[13px] font-bold mt-1 text-gray-900">Decline in Traditional Search Predicted by 2026</div>
            <div className="text-[11px] text-gray-500 mt-1">Gartner predicts traditional search engine volume drops 25% by 2026 as users migrate to AI chatbots and AI-native search for research and discovery tasks.</div>
            <div className="text-[9px] text-gray-400 mt-2 italic">Source: Gartner Research, 2024</div>
          </div>
        </div>

        <SubHeading>The AI Search Engines — Who They Are & How Many Use Them</SubHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-4">
          <div className="border border-gray-200 rounded-xl p-3.5 text-center bg-gray-50">
            <div className="text-[28px] mb-2">🔵</div>
            <div className="font-extrabold text-[13px] mb-1">Google AI Overviews</div>
            <div className="text-[20px] font-black text-report-ai leading-none">8.5B+</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Monthly searches affected</div>
            <div className="text-[9px] text-gray-400 mt-1 italic">Google, 2025</div>
            <div className="mt-2 text-[10px] font-bold px-2 py-1 rounded inline-block bg-report-green-light text-[#065f46]">Pulls from: Schema + GBP + E-E-A-T</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3.5 text-center bg-gray-50">
            <div className="text-[28px] mb-2">🟢</div>
            <div className="font-extrabold text-[13px] mb-1">ChatGPT / SearchGPT</div>
            <div className="text-[20px] font-black text-report-ai leading-none">180M+</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Monthly active users</div>
            <div className="text-[9px] text-gray-400 mt-1 italic">OpenAI, 2025</div>
            <div className="mt-2 text-[10px] font-bold px-2 py-1 rounded inline-block bg-report-purple-light text-[#5b21b6]">Pulls from: Web crawl + citation diversity</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3.5 text-center bg-gray-50">
            <div className="text-[28px] mb-2">🔷</div>
            <div className="font-extrabold text-[13px] mb-1">Perplexity AI</div>
            <div className="text-[20px] font-black text-report-ai leading-none">15M+</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Monthly active users</div>
            <div className="text-[9px] text-gray-400 mt-1 italic">Perplexity, 2025</div>
            <div className="mt-2 text-[10px] font-bold px-2 py-1 rounded inline-block bg-report-blue-light text-[#1e40af]">Pulls from: Yelp + authoritative content</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3.5 text-center bg-gray-50">
            <div className="text-[28px] mb-2">🪟</div>
            <div className="font-extrabold text-[13px] mb-1">Bing Copilot</div>
            <div className="text-[20px] font-black text-report-ai leading-none">140M+</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Monthly active users</div>
            <div className="text-[9px] text-gray-400 mt-1 italic">Microsoft, 2025</div>
            <div className="mt-2 text-[10px] font-bold px-2 py-1 rounded inline-block bg-report-amber-light text-[#78350f]">Pulls from: Bing Places + Bing organic</div>
          </div>
        </div>
        
        <Callout color="blue">
          <strong>What this means for Houston Sign:</strong> These four engines alone represent hundreds of millions of people asking questions. "Best sign company in Houston", "what is signage", "custom wrapping paper near me", "interior office signs Houston" — these queries are being answered by AI, not just by links. The 30-day sprint builds the infrastructure to capture all four.
        </Callout>
      </div>

      <div id="s-stats" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="02 — Data & Statistics"
          title="The Numbers Behind the Shift"
          desc="Industry research from 2024–2025 paints a clear picture of where search is going. These statistics directly inform every decision in the Houston Sign strategy."
        />

        <SubHeading>AI Overview & Click Behavior</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Statistic</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Number</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Source</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Implication for Houston Sign</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Google searches now showing AI Overviews</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>47%</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">SparkToro / Rand Fishkin, 2025</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Almost half of all "signage Houston" searches show an AI answer above organic results</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">AI Overview citations from outside top-10 organic</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>68%</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">BrightEdge, 2024</td>
                <td className="py-2 px-2.5 border-b border-gray-200">You don't need to rank #1 in organic to appear in AI answers — authority and content structure matter more</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Websites with structured data vs without in AI Overviews</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>2× more likely</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Semrush, 2024</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Adding LocalBusiness + FAQPage schema (Sprint Week 1) directly doubles AI Overview inclusion probability</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">FAQ schema's impact on AI citation probability</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>+38%</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Moz, 2024</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Every FAQ block we add to service pages and blog posts increases the chance of AI citation</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Zero-click searches (Google answers in SERP, no link click)</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>58.5%</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Sistrix, 2024</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Over half of all searches never click a link. Being in the AI answer IS the traffic</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Predicted decline in traditional search volume by 2026</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>-25%</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Gartner, 2024</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Building AI search visibility now is building against the tide that's already coming</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Marketers already optimizing for AI search</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>31%</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">HubSpot, 2024</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Early mover advantage — most Houston sign competitors are NOT optimizing for AI yet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SubHeading>Local Business AI Search Data</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Statistic</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Number</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Source</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Implication</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Google searches with local intent</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>46%</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Google, 2025</td>
                <td className="py-2 px-2.5 border-b border-gray-200">"Sign company Houston", "custom signs near me" — almost half of all searches have local intent and are exactly what AI answers for</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Google AI Overviews showing local pack results</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Growing</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">BrightEdge, 2025</td>
                <td className="py-2 px-2.5 border-b border-gray-200">AI Overviews increasingly pull GBP data for local queries — making GBP optimization an AI visibility action</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Google Business Profile data in AI answers</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Direct source</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Google, 2025</td>
                <td className="py-2 px-2.5 border-b border-gray-200">A complete, optimized GBP is now a prerequisite for appearing in Google AI answers about local businesses</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Reviews as trust signal for AI citation</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>High weight</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Perplexity, 2024</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Perplexity and ChatGPT weight review sentiment when recommending local businesses — 10+ new reviews (Sprint Week 2) directly improves AI recommendations</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">BBB accreditation as AI authority signal</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Tier-1 citation</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">Multiple AI engines</td>
                <td className="py-2 px-2.5 border-b border-gray-200">BBB is a verified, trusted directory that all major AI engines use as a business credibility signal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SubHeading>What Makes Content Get Cited by AI</SubHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-4">
          <StatBox ai val="38%" valColor="ai" lab="More AI Citations" note="With FAQ schema" noteColor="ai" src="Moz, 2024" />
          <StatBox ai val="2×" valColor="ai" lab="AI Overview Inclusion" note="With structured data" noteColor="ai" src="Semrush, 2024" />
          <StatBox ai val="68%" valColor="ai" lab="AI Citations Not #1 Rank" note="Content authority wins" noteColor="ai" src="BrightEdge, 2024" />
          <StatBox ai val="50+" valColor="ai" lab="Editorial Mentions" note="Our May PR campaign" noteColor="ai" src="Built in May 2026" />
        </div>

        <Callout color="ai">
          <strong>The most important stat:</strong> BrightEdge found that 68% of AI Overview citations come from content that does NOT rank in the traditional top-10 organic results. AI engines cite based on authority, structure, directness of answer, and citation diversity — not just Google rank. This means the work we're doing (50 press placements, FAQ schema, entity data) directly builds AI visibility independent of traditional rankings.
        </Callout>
      </div>

      <div id="s-signals" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="03 — AI Ranking Signals"
          title="What AI Engines Actually Look For"
          desc="AI search engines use different signals than traditional Google. Understanding these signals explains why every action in the sprint has been chosen."
        />

        <SubHeading>Traditional SEO vs. AI Search — Signal Comparison</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-3 bg-report-blue-dark text-white text-[10px] font-bold uppercase tracking-wider">Signal</th>
                <th className="py-2 px-3 bg-[#0f172a] text-white text-[10px] font-bold uppercase tracking-wider">Traditional Google SEO</th>
                <th className="py-2 px-3 bg-[#0f172a] text-white text-[10px] font-bold uppercase tracking-wider">Google AI Overviews</th>
                <th className="py-2 px-3 bg-[#0f172a] text-white text-[10px] font-bold uppercase tracking-wider">ChatGPT / Perplexity</th>
                <th className="py-2 px-3 bg-[#0f172a] text-white text-[10px] font-bold uppercase tracking-wider">Houston Sign Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Keyword in title/H1</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ High weight</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ High weight</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Moderate</td>
                <td className="py-2.5 px-3"><Badge color="green">IN PLACE</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Technical SEO (speed, crawl)</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ High weight</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Required</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Low weight</td>
                <td className="py-2.5 px-3"><Badge color="green">86/100 ✓</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Backlinks / Referring Domains</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Critical</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ High weight</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Citation signal</td>
                <td className="py-2.5 px-3"><Badge color="amber">3,086 + 50 new</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">FAQPage Schema Markup</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Moderate</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Critical</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ High weight</td>
                <td className="py-2.5 px-3"><Badge color="amber">Action: Add Sprint W1</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">LocalBusiness JSON-LD</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Local only</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Critical</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Entity anchor</td>
                <td className="py-2.5 px-3"><Badge color="amber">Action: Add Sprint W1</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Direct answer content ("What is X")</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Featured snippet</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Critical</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Primary signal</td>
                <td className="py-2.5 px-3"><Badge color="amber">Action: Sprint W3 pillar</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Entity citations across web (PR)</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Low (link quality)</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ High weight</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Training data</td>
                <td className="py-2.5 px-3"><Badge color="green">50 built in May ✓</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Google Business Profile completeness</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Local pack only</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Critical</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Indirect</td>
                <td className="py-2.5 px-3"><Badge color="amber">Action: Sprint W2</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Google / Yelp Reviews</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Local pack signal</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ High weight</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Perplexity key</td>
                <td className="py-2.5 px-3"><Badge color="amber">Action: +10 Sprint W2</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Named partnerships / inst. links</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Authority links</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ E-E-A-T</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Entity verification</td>
                <td className="py-2.5 px-3"><Badge color="blue">SaberCats / UH / RMHC</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Bing Places / Apple Maps presence</td>
                <td className="py-2.5 px-3 font-bold text-report-red">✗ Not a signal</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Minor</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ Copilot / Siri key</td>
                <td className="py-2.5 px-3"><Badge color="amber">Action: Sprint W4</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-2.5 px-3 font-bold bg-gray-50 text-gray-700">Wikipedia / Wikidata entity</td>
                <td className="py-2.5 px-3 font-bold text-report-red">✗ Not a signal</td>
                <td className="py-2.5 px-3 font-bold text-report-amber">⬤ Moderate</td>
                <td className="py-2.5 px-3 font-bold text-report-green">✓ High weight</td>
                <td className="py-2.5 px-3"><Badge color="purple">Sprint W4 — 80yr hist</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout color="ai">
          <strong>The key insight:</strong> Houston Sign already nails the traditional SEO signals (86/100 technical, solid backlink profile). The entire upside is in the AI-specific signals — FAQPage schema, LocalBusiness JSON-LD, direct-answer content, editorial citations, GBP completeness, and entity data. Every one of these is being addressed in the 30-day sprint. The May PR campaign (50 editorial citations) was already a massive step forward on the most important AI signal.
        </Callout>
      </div>
    </>
  );
};
