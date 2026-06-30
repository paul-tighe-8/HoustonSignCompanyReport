import { Badge, Callout, ScoreRow, SectionHeader, SubHeading } from "./UI";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PenLine, FileText, Link, BarChart2, MapPin, Star, Building2, Trophy, Search, GraduationCap, Bot, MessageSquare, ListTree } from "lucide-react";

const WeekCard = ({
  badgeClass,
  badgeText,
  title,
  dates,
  goal,
  children,
}: {
  badgeClass: string;
  badgeText: string;
  title: string;
  dates: string;
  goal: string;
  children: ReactNode;
}) => (
  <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden">
    <div className="flex items-center gap-3 p-3.5 bg-gray-50 border-b border-gray-200">
      <div className={cn("px-3 py-1 rounded-full text-[11px] font-extrabold whitespace-nowrap", badgeClass)}>
        {badgeText}
      </div>
      <div className="font-bold text-[14px] flex-1">{title}</div>
      <div className="text-[11px] text-gray-500">{dates}</div>
    </div>
    <div className="p-3.5">
      <Callout color="blue" className="!mb-3 !mt-0">
        Goal: {goal}
      </Callout>
      {children}
    </div>
  </div>
);

const Task = ({
  icon,
  title,
  desc,
  tags,
  aiBenefit,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  tags: ReactNode;
  aiBenefit: ReactNode;
}) => (
  <div className="flex gap-2.5 p-2.5 bg-white border border-gray-200 rounded-lg mb-2">
    <div className="text-[18px] shrink-0 mt-0.5 text-gray-700">{icon}</div>
    <div>
      <div className="font-bold text-[13px]">{title}</div>
      <div className="text-[12px] text-gray-500 mt-1">{desc}</div>
      <div className="mt-1.5 flex gap-1 flex-wrap">{tags}</div>
      <div className="bg-report-ai-light border border-report-ai-border rounded-[5px] p-2 text-[11px] text-[#4c1d95] mt-2 flex gap-2 items-start">
        <span>🤖</span>
        <span>
          <span className="font-bold">AI Search Benefit:</span> {aiBenefit}
        </span>
      </div>
    </div>
  </div>
);

export const ReportPart3 = () => {
  return (
    <>
      <div id="s-sprint" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="07 — 30-Day AI Search Sprint"
          title="Jun 30 – Jul 30, 2026"
          desc="Every task in this sprint has a dual purpose: traditional SEO ranking improvement AND AI search signal building. The AI benefit is called out explicitly for each task."
        />

        <WeekCard
          badgeClass="bg-report-blue-light text-report-blue-dark"
          badgeText="Week 1"
          title="Content Upgrades — Activate the 50 Links"
          dates="Jun 30 – Jul 6"
          goal="Publish two pillar-quality blog posts targeting the highest-ROI rescue keywords. Upgrade the interior signs page to capitalize on May's 50 links. Fix the internal linking structure from homepage to money pages."
        >
          <Task
            icon={<PenLine className="w-4 h-4" />}
            title="Blog: Custom Wrapping Paper — Pillar Post (pos 4 → top 2)"
            desc="1,500 words targeting 12,100 vol/mo keyword cluster. Material options, bulk orders, corporate gifting, Houston delivery. Real product photos. FAQPage schema."
            tags={
              <>
                <Badge color="blue">Blog Post</Badge>
                <Badge color="green">Vol: 12,100/mo</Badge>
              </>
            }
            aiBenefit="FAQ schema makes this page 2× more likely to appear in Google AI Overview. Direct answers to 'Can I get custom wrapping paper in Houston?' feed ChatGPT and Perplexity local queries. LocalBusiness JSON-LD anchors the entity to the city."
          />
          <Task
            icon={<FileText className="w-4 h-4" />}
            title="Upgrade /interior-signs-in-houston/ — Convert 50 Links into AI Answer Authority"
            desc="Expand from thin service page to 1,500–2,000 word pillar. Cover: ADA requirements, sign materials, types (wayfinding, lobby, office door, ADA compliance, dimensional letters), Houston project examples, real photos. FAQPage schema. LocalBusiness JSON-LD."
            tags={
              <>
                <Badge color="purple">Content Upgrade</Badge>
                <Badge color="green">50 Links Already Point Here</Badge>
              </>
            }
            aiBenefit="This is the highest-priority AI action in the entire sprint. 50 editorial sources cite this page. When AI engines crawl it, they need authoritative content to confirm their citation. A comprehensive page with FAQ schema + LocalBusiness JSON-LD will appear in Google AI Overviews for 'interior signs Houston' and ChatGPT answers about office signage options."
          />
          <Task
            icon={<BarChart2 className="w-4 h-4" />}
            title="Deploy FAQPage + LocalBusiness Schema on All Service Pages"
            desc="Add JSON-LD structured data to every service page: vehicle wraps, interior signs, exterior signs, event signage, trade show displays, laser engraving, custom wrapping paper. LocalBusiness block: name, address, phone, founding year, hours, area served."
            tags={
              <>
                <Badge color="gray">Technical SEO</Badge>
                <Badge color="ai">AI Priority</Badge>
              </>
            }
            aiBenefit="Semrush data shows structured data produces 2× more AI Overview inclusion. FAQPage schema alone increases AI citation probability by 38% (Moz). This is the highest-ROI technical action for AI visibility — zero content writing required, pure markup."
          />
        </WeekCard>

        <WeekCard
          badgeClass="bg-pink-100 text-pink-900"
          badgeText="Week 2"
          title="Local AI Signals — GBP, Reviews, Entity Verification"
          dates="Jul 7 – Jul 13"
          goal="Maximize local SEO signals — Google Business Profile optimization, citation consistency, and review generation from existing high-profile partners."
        >
          <Task
            icon={<MapPin className="w-4 h-4" />}
            title="Google Business Profile — Full AI-Optimized Overhaul"
            desc="All service categories. 15+ project photos labeled by service type. 10 seeded Q&As with authoritative answers. Services list with descriptions. Weekly post schedule started. Business description rewritten to include founded year, key services, service area, and named partnerships."
            tags={
              <>
                <Badge color="red">Local SEO</Badge>
                <Badge color="ai">Google AI Overviews</Badge>
              </>
            }
            aiBenefit="Google pulls directly from GBP for 'near me' queries in AI Overviews. A complete GBP with Q&As that match common search queries is one of the fastest ways to appear in Google's AI local answers. The Q&A section is especially powerful — 'Do you rush orders?' as a GBP Q&A can appear verbatim in AI Overview answers."
          />
          <Task
            icon={<Star className="w-4 h-4" />}
            title="Review Generation — 10 New Google Reviews (Perplexity Signal)"
            desc="Personal outreach to Houston SaberCats (Lauren Leal — she already wrote a testimonial), University of Houston, Ronald McDonald House Charities, Signorelli Company, and 6 recent clients. Include direct GBP link. Goal: 10 reviews in 14 days."
            tags={
              <>
                <Badge color="red">Local SEO</Badge>
                <Badge color="ai">Perplexity Key Signal</Badge>
              </>
            }
            aiBenefit="Perplexity AI weights review sentiment as a primary signal when recommending local businesses. A business with 50+ recent positive reviews is categorically more likely to appear in Perplexity's 'best sign company in Houston' answers than one with fewer. Each review from a named partner (SaberCats, UH) is a double benefit — verified entity association."
          />
          <Task
            icon={<Trophy className="w-4 h-4" />}
            title="Houston SaberCats Case Study — Entity Authority Content"
            desc="Full case study using Lauren Leal's testimonial + project photos + materials + timeline. Publish as a dedicated page. Request a backlink from houstonsabercats.com. Tag Nathan Olinger (named in testimonial) as the point of contact — this creates a named, verifiable human entity associated with the business."
            tags={
              <>
                <Badge color="blue">E-E-A-T</Badge>
                <Badge color="ai">Entity Verification</Badge>
                <Badge color="green">Link Bait</Badge>
              </>
            }
            aiBenefit="Named human entities (Nathan Olinger + Lauren Leal), named organizations (Houston SaberCats), and verifiable project details are exactly what LLMs use to assess business credibility. This single page answers the AI question 'Is Houston Sign Company a real, experienced business?' with structured, verifiable evidence."
          />
        </WeekCard>

        <WeekCard
          badgeClass="bg-report-green-light text-report-green"
          badgeText="Week 3"
          title="Signage Pillar — The AI Answer Hub"
          dates="Jul 14 – Jul 20"
          goal="Publish the highest-volume content opportunity on the site and identify the exact keyword gaps vs. top competitors. The signage pillar post becomes the topical authority anchor for the entire domain."
        >
          <Task
            icon={<PenLine className="w-4 h-4" />}
            title='Blog: "What Is Signage?" — 22,200 Vol AI Answer Anchor'
            desc="2,500+ words. What is signage → types (interior, exterior, digital, wayfinding, event, vehicle, trade show, construction, ADA) → materials guide → how to choose a sign company → Houston business examples → 10-question FAQ with schema. This post becomes the topical authority hub for the entire domain — every service page links to it, and it links back to every service page."
            tags={
              <>
                <Badge color="blue">Pillar Post</Badge>
                <Badge color="amber">22,200 Vol/mo</Badge>
              </>
            }
            aiBenefit="'What is signage?' is one of the top informational queries AI tools answer about this industry. ChatGPT, Perplexity, and Google AI Overviews all cite comprehensive definitional content heavily. A 2,500-word authoritative answer with FAQ schema, published on a domain that already ranks for 79 signage keywords, is positioned to become the go-to AI citation for signage education questions. The 22,200 monthly search volume translates into massive AI query volume."
          />
          <Task
            icon={<GraduationCap className="w-4 h-4" />}
            title="University of Houston Partner Case Study + .edu Backlink Request"
            desc="Write case study of Houston Sign Company's work for UH. Contact UH facilities/marketing for permission to publish and a link from uh.edu's vendor/partner directory. A .edu backlink is a tier-1 authority signal for all AI engines."
            tags={
              <>
                <Badge color="green">Potential .edu Link</Badge>
                <Badge color="ai">Highest-Tier Citation</Badge>
              </>
            }
            aiBenefit=".edu domains are among the highest-trust citations in LLM training data. A mention on uh.edu's vendor page + a case study linking to houstonsign.com from a .edu source dramatically increases AI engine confidence in the business's credibility. This one link could be worth more for AI visibility than 20 standard directory links."
          />
        </WeekCard>

        <WeekCard
          badgeClass="bg-report-ai-light text-report-ai"
          badgeText="Week 4"
          title="AI Entity Infrastructure — Brand Vault, Bing, Apple Maps, Knowledge Graph"
          dates="Jul 21 – Jul 30"
          goal="Set up the infrastructure for AI citation visibility and launch the next round of link building. AI visibility results take 60–90 days — start now so they compound by Q4."
        >
          <Task
            icon={<Bot className="w-4 h-4" />}
            title="RankNinja Brand Vault + OTTO Knowledge Graph — Entity Registry"
            desc="Create complete structured entity record: business name, DBA, founding year (1946), physical address (5801 Chimney Rock Rd), phone (713-662-3123), email, service categories (12+), geographic service area, key partnerships (SaberCats, UH, RMHC, Signorelli), key staff (Nathan Olinger). Submit to OTTO Knowledge Graph to push data toward Google's entity systems."
            tags={
              <>
                <Badge color="ai">Entity Registry</Badge>
                <Badge color="purple">Google Knowledge Panel</Badge>
              </>
            }
            aiBenefit="This is the structural foundation of AI visibility. LLMs build confidence from structured, consistent entity data. A complete Brand Vault entry tells every AI engine: 'Houston Sign Company is a real, verified, 80-year-old business at this address offering these services with these verified partnerships.' This data feeds Google's Knowledge Graph — the same database ChatGPT and Gemini pull from for business facts."
          />
          <Task
            icon={<ListTree className="w-4 h-4" />}
            title="Bing Places Complete Setup — Copilot & Edge Search Visibility"
            desc="Full Bing Places profile: all service categories, photos, hours, description, service area. Bing Places data is the exclusive source for Microsoft Copilot (formerly Bing Chat) local answers. A business not on Bing Places is invisible to Copilot's 140M+ monthly users."
            tags={
              <>
                <Badge color="ai">Copilot (140M users)</Badge>
                <Badge color="gray">30 minutes</Badge>
              </>
            }
            aiBenefit="Microsoft Copilot pulls local business data exclusively from Bing Places. 140M+ monthly Copilot users asking 'sign companies in Houston' will see only Bing-listed businesses. This single 30-minute task unlocks a 140M-user AI channel that competitors likely haven't claimed."
          />
          <Task
            icon={<ListTree className="w-4 h-4" />}
            title="Apple Maps Connect — Siri & Apple Intelligence Visibility"
            desc="Claim and fully complete Apple Maps listing. Business description, hours, categories, photos, website. This is the data source for Siri voice queries ('Siri, find a sign company near me') and Apple Intelligence (Apple's AI assistant built into iOS 18+)."
            tags={
              <>
                <Badge color="ai">Siri / Apple Intelligence</Badge>
                <Badge color="gray">Free — 20 minutes</Badge>
              </>
            }
            aiBenefit="Apple Intelligence (iOS 18+) and Siri use Apple Maps as their local data source. Any Houston iPhone user asking Siri about sign companies will see Apple Maps data. Since most Houston Sign competitors haven't claimed Apple Maps, this is a wide-open AI channel."
          />
          <Task
            icon={<Building2 className="w-4 h-4" />}
            title="BBB Accreditation + Houston Chamber Directory — AI Trust Anchors"
            desc="Apply for BBB accreditation if not current. Get listed in Greater Houston Partnership member directory. Both are tier-1 trust signals used by every AI engine to verify business legitimacy. AI tools treat BBB and Chamber membership as strong credibility proxies."
            tags={
              <>
                <Badge color="amber">Link Building</Badge>
                <Badge color="ai">AI Trust Signal</Badge>
              </>
            }
            aiBenefit="When Perplexity answers 'is Houston Sign Company legitimate?' or ChatGPT includes a business in a recommendation, BBB accreditation is one of the top cited verification sources. Perplexity frequently includes BBB data in local business citations. The Greater Houston Partnership listing makes the business 'officially part of the Houston business community' — a signal LLMs use for local credibility."
          />
        </WeekCard>
      </div>

      <div id="s-content" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="08 — Content Strategy"
          title="Writing Content That AI Engines Cite"
          desc="Not all content gets cited by AI. Here's the formula for what AI engines pull from — and how we're applying it to houstonsign.com."
        />

        <Callout color="ai">
          <strong>The AI citation formula:</strong> AI engines prefer content that directly answers a specific question, is from a verified entity (structured data + backlinks confirm the source), uses authoritative language (not hedged or vague), includes supporting data points, and is cited by other sources. Every blog post in the sprint is written to this formula.
        </Callout>

        <SubHeading>Content Types Ranked by AI Citation Probability</SubHeading>
        <div className="flex flex-col gap-0 my-4">
          <div className="flex items-stretch gap-0">
            <div className="w-[170px] shrink-0 p-3 text-[12px] font-bold flex items-center">Direct Answer Posts</div>
            <div className="flex-1 flex items-center py-2">
              <div className="h-9 rounded flex items-center px-3 text-[11px] font-bold text-white transition-all w-[95%] bg-report-ai">Highest AI citation rate</div>
              <div className="ml-2.5 text-[12px] font-bold text-gray-700">~95%</div>
              <div className="text-[10px] text-gray-400 ml-2 italic">BrightEdge 2024</div>
            </div>
          </div>
          <div className="flex items-stretch gap-0">
            <div className="w-[170px] shrink-0 p-3 text-[12px] font-bold flex items-center">FAQ Schema Pages</div>
            <div className="flex-1 flex items-center py-2">
              <div className="h-9 rounded flex items-center px-3 text-[11px] font-bold text-white transition-all w-[82%] bg-report-blue">+38% vs non-schema</div>
              <div className="ml-2.5 text-[12px] font-bold text-gray-700">~82%</div>
              <div className="text-[10px] text-gray-400 ml-2 italic">Moz 2024</div>
            </div>
          </div>
          <div className="flex items-stretch gap-0">
            <div className="w-[170px] shrink-0 p-3 text-[12px] font-bold flex items-center">Comparison Content</div>
            <div className="flex-1 flex items-center py-2">
              <div className="h-9 rounded flex items-center px-3 text-[11px] font-bold text-white transition-all w-[70%] bg-report-blue-mid">High citation for "vs" queries</div>
              <div className="ml-2.5 text-[12px] font-bold text-gray-700">~70%</div>
              <div className="text-[10px] text-gray-400 ml-2 italic">Semrush 2024</div>
            </div>
          </div>
          <div className="flex items-stretch gap-0">
            <div className="w-[170px] shrink-0 p-3 text-[12px] font-bold flex items-center">How-To / Tutorial</div>
            <div className="flex-1 flex items-center py-2">
              <div className="h-9 rounded flex items-center px-3 text-[11px] font-bold text-white transition-all w-[63%] bg-blue-400">Strong procedural signal</div>
              <div className="ml-2.5 text-[12px] font-bold text-gray-700">~63%</div>
              <div className="text-[10px] text-gray-400 ml-2 italic">Ahrefs 2024</div>
            </div>
          </div>
          <div className="flex items-stretch gap-0">
            <div className="w-[170px] shrink-0 p-3 text-[12px] font-bold flex items-center">Standard Blog Posts</div>
            <div className="flex-1 flex items-center py-2">
              <div className="h-9 rounded flex items-center px-3 text-[11px] font-bold text-white transition-all w-[35%] bg-gray-400">Low unless well-structured</div>
              <div className="ml-2.5 text-[12px] font-bold text-gray-700">~35%</div>
            </div>
          </div>
          <div className="flex items-stretch gap-0">
            <div className="w-[170px] shrink-0 p-3 text-[12px] font-bold flex items-center">Thin Service Pages</div>
            <div className="flex-1 flex items-center py-2">
              <div className="h-9 rounded flex items-center px-3 text-[11px] font-bold text-white transition-all w-[10%] bg-report-red">Rarely cited by AI</div>
              <div className="ml-2.5 text-[12px] font-bold text-gray-700">~10%</div>
            </div>
          </div>
        </div>

        <SubHeading>The AI-Optimized Content Checklist</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Element</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Why AI Engines Need It</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Status in Sprint</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Question-format H2 headings</strong> ("What is interior signage?")</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">AI engines match query phrasing to headings to identify answer candidates</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">Applied to all 3 sprint posts</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>50–100 word direct answers under each H2</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">AI Overview pulls the paragraph immediately following a question H2 as the answer</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">Applied to all 3 sprint posts</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>FAQPage JSON-LD schema</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Machine-readable Q&A pairs — AI engines parse this directly, bypassing body text</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">All sprint posts + W1 schema rollout</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>LocalBusiness JSON-LD</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Entity anchor — tells AI engines WHO is publishing this content and WHERE they are</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">W1 deployment on all pages</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Verified statistics with citations</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">AI engines avoid citing content with unsourced claims — cited stats increase citation probability</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">All posts sourced to Tier 1–2</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Named authors or company attribution</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Entity verification — AI prefers content from verified named entities over anonymous content</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">Add "Houston Sign Company" as publisher</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Internal links to authoritative sources</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Signals content depth and context to both AI and traditional search</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="purple">All posts link to service pages</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="s-entity" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="09 — Entity Authority"
          title="Building the 'Houston Sign Company' Knowledge Entity"
          desc="Modern AI search is fundamentally entity-based. Google, ChatGPT, and Perplexity don't just rank pages — they build knowledge graphs of entities (businesses, people, places, concepts) and their relationships. The goal is to make 'Houston Sign Company' a well-defined, highly-confident entity in every AI engine's knowledge graph."
        />

        <Callout color="ai">
          <strong>What is an entity?</strong> In AI terms, Houston Sign Company is an entity with attributes: name, location, founding year, services, partnerships, reputation. The richer and more consistently these attributes appear across the web, the higher the AI's confidence in the entity — and the more likely it is to cite the entity in relevant answers.
        </Callout>

        <SubHeading>Current Entity Strength Assessment</SubHeading>
        <div className="max-w-2xl mt-4">
          <ScoreRow label="Founding year known" score={90} fillColor="green" tag={<Badge color="green">Strong — 1946</Badge>} />
          <ScoreRow label="Address consistent" score={70} fillColor="blue" tag={<Badge color="blue">Needs audit</Badge>} />
          <ScoreRow label="Named partnerships" score={80} fillColor="green" tag={<Badge color="green">SaberCats + UH</Badge>} />
          <ScoreRow label="Structured data (schema)" score={15} fillColor="red" tag={<Badge color="red">Action: W1</Badge>} />
          <ScoreRow label="Editorial citations" score={60} fillColor="ai" tag={<Badge color="ai">50 added May</Badge>} />
          <ScoreRow label="Multi-platform presence" score={40} fillColor="amber" tag={<Badge color="amber">Action: W4</Badge>} />
          <ScoreRow label="Named human contacts" score={35} fillColor="amber" tag={<Badge color="amber">Nathan Olinger named</Badge>} />
          <ScoreRow label="Wikipedia / Wikidata" score={5} fillColor="red" tag={<Badge color="red">Explore eligibility</Badge>} />
        </div>

        <Callout color="blue" className="mt-6">
          <strong>The 80-year advantage in AI search:</strong> Very few sign companies in Houston have been in business since 1946. This founding year is a verifiable fact that LLMs use as a strong credibility anchor. "Houston Sign Company, founded 1946" — published in the About page, embedded in JSON-LD, mentioned in PR articles, on the BBB listing, in the Chamber directory — creates a consistent, multi-source entity attribute that AI engines trust implicitly.
        </Callout>
      </div>
    </>
  );
};
