import { Badge, Callout, SectionHeader, SubHeading } from "./UI";

const GoalCard = ({
  label,
  current,
  target,
  note,
}: {
  label: string;
  current: string;
  target: string;
  note: string;
}) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
    <div className="text-[11px] font-bold mb-2 text-gray-900">{label}</div>
    <div className="text-[22px] font-extrabold text-gray-400">{current}</div>
    <div className="text-[18px] text-gray-400 my-1">↓</div>
    <div className="text-[28px] font-black text-report-green">{target}</div>
    <div className="text-[10px] text-gray-500 mt-1.5 leading-tight">{note}</div>
  </div>
);

const LINKS = [
  ["go.chinesewire.com", "Wire/Intl", "International", "High — international wire = broad LLM training reach"],
  ["smb.bogalusadailynews.com", "SMB Local", "Louisiana", "Medium — regional editorial, Southeast coverage"],
  ["smb.magnoliastatelive.com", "SMB Local", "Mississippi", "Medium — regional editorial, Southeast coverage"],
  ["smb.panews.com", "SMB Local", "Texas", "High — Texas-based publication, geographically most relevant"],
  ["smb.picayuneitem.com", "SMB Local", "Mississippi", "Medium — regional editorial"],
  ["smb.lobservateur.com", "SMB Local", "Louisiana", "Medium — regional editorial"],
  ["smb.panolian.com", "SMB Local", "Mississippi", "Medium — regional editorial"],
  ["smb.americustimesrecorder.com", "SMB Local", "Georgia", "Medium — regional editorial, Southeast coverage"],
  ["smb.amnews.com", "SMB Local", "Kentucky", "Medium — regional editorial"],
  ["smb.americanpress.com", "SMB Local", "Louisiana", "High — est. 1893, one of Louisiana's oldest papers"],
  ["smb.dailyleader.com", "SMB Local", "Mississippi", "Medium — regional editorial"],
  ["smb.oxfordeagle.com", "SMB Local", "Mississippi", "Medium — regional editorial"],
  ["smb.bluegrasslive.com", "SMB Local", "Kentucky", "Medium — regional editorial"],
  ["smb.claiborneprogress.net", "SMB Local", "Tennessee", "Medium — regional editorial"],
  ["smb.elizabethton.com", "SMB Local", "Tennessee", "Medium — regional editorial"],
  ["smb.jessaminejournal.com", "SMB Local", "Kentucky", "Medium — regional editorial"],
  ["smb.thesnaponline.com", "SMB Local", "Regional", "Medium — regional editorial"],
  ["smb.clemmonscourier.net", "SMB Local", "North Carolina", "Medium — regional editorial"],
  ["smb.harlandaily.com", "SMB Local", "Kentucky", "Medium — regional editorial"],
  ["smb.irontontribune.com", "SMB Local", "Ohio", "Medium — Midwest coverage, adds geographic diversity"],
  ["smb.thecharlottegazette.com", "SMB Local", "North Carolina", "Medium — regional editorial"],
  ["smb.theinteriorjournal.com", "SMB Local", "Kentucky", "Medium — regional editorial"],
  ["smb.tryondailybulletin.com", "SMB Local", "North Carolina", "Medium — regional editorial"],
  ["smb.winchestersun.com", "SMB Local", "Kentucky", "Medium — regional editorial"],
  ["smb.farmvilleherald.com", "SMB Local", "Virginia", "Medium — Mid-Atlantic coverage"],
  ["smb.salisburypost.com", "SMB Local", "North Carolina", "High — established regional daily newspaper"],
  ["smb.cordeledispatch.com", "SMB Local", "Georgia", "Medium — regional editorial"],
  ["smb.middlesboronews.com", "SMB Local", "Kentucky", "Medium — regional editorial"],
  ["smb.thepostsearchlight.com", "SMB Local", "Georgia", "Medium — regional editorial"],
  ["pr.washingtoncitypaper.com", "PR Local", "Washington DC", "High — high-DA metro publication, DC audience"],
  ["smb.theleesvilleleader.com", "SMB Local", "Louisiana", "Medium — regional editorial"],
  ["smb.prentissheadlight.com", "SMB Local", "Mississippi", "Medium — regional editorial"],
  ["smb.beauregardnews.com", "SMB Local", "Louisiana", "Medium — regional editorial"],
  ["pr.hattiesburg.com", "PR Local", "Mississippi", "High — major Mississippi city portal"],
  ["pr.walnutcreekmagazine.com", "PR Local", "California", "High — Bay Area publication, West Coast reach"],
  ["pr.thembnews.com", "PR Local", "Regional", "Medium — PR editorial"],
  ["pr.chestercounty.com", "PR Local", "Pennsylvania", "Medium — Mid-Atlantic coverage, adds PA diversity"],
  ["pr.wncbusiness.com", "PR Local", "North Carolina", "Medium — B2B focused, business audience"],
  ["pr.norwoodtownnews.com", "PR Local", "Massachusetts", "Medium — Northeast coverage"],
  ["pr.hopedaletownnews.com", "PR Local", "Massachusetts", "Medium — Northeast coverage"],
  ["pr.franklintownnews.com", "PR Local", "Massachusetts", "Medium — Northeast coverage"],
  ["pr.naticktownnews.com", "PR Local", "Massachusetts", "Medium — Northeast coverage"],
  ["pr.norfolkwrenthamnews.com", "PR Local", "Massachusetts", "Medium — Northeast coverage"],
  ["pr.hollistontownnews.com", "PR Local", "Massachusetts", "Medium — Northeast coverage"],
  ["pr.rivertonjournal.com", "PR Local", "Utah", "Medium — Mountain West coverage"],
  ["pr.columbiabusinessmonthly.com", "PR Local", "South Carolina", "High — B2B business monthly, relevant audience"],
  ["pr.herrimanjournal.com", "PR Local", "Utah", "Medium — Mountain West coverage"],
  ["pr.wvcjournal.com", "PR Local", "Utah", "Medium — Mountain West coverage"],
  ["pr.midvalejournal.com", "PR Local", "Utah", "Medium — Mountain West coverage"],
  ["pr.sandyjournal.com", "PR Local", "Utah", "Medium — Mountain West coverage"]
];

export const ReportPart4 = () => {
  return (
    <>
      <div id="s-local" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="10 — Local AI Visibility"
          title="Winning 'Sign Company Near Me' in AI"
          desc="Local AI queries are among the highest-intent searches that exist. 'Sign company in Houston', 'custom signs near me', 'interior signs Houston' — these are people ready to buy. Here is how we capture them across every AI channel."
        />

        <SubHeading>AI Channel Coverage Plan</SubHeading>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">AI Platform</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Monthly Users</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Local Data Source</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Action Required</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Google AI Overviews</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">8.5B+ searches</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">GBP + Schema + Organic rank</td>
                <td className="py-2 px-2.5 border-b border-gray-200">GBP optimization (W2) + Schema rollout (W1) + Content sprint</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">Immediate W1–W2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>ChatGPT / SearchGPT</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">180M+ users</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Web crawl + Bing data</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Entity data + content depth + editorial citations (done May)</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">W1–W4 + ongoing</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Perplexity AI</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">15M+ users</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Yelp + real-time web</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Yelp profile completion + Google reviews (W2) + content</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">W2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Microsoft Copilot</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">140M+ users</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Bing Places exclusively</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Bing Places full setup (W4)</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">W4 — 30 minutes</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Apple Intelligence / Siri</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">1.5B+ devices</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Apple Maps</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Apple Maps Connect claim + complete (W4)</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">W4 — 20 minutes</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200"><strong>Amazon Alexa</strong></td>
                <td className="py-2 px-2.5 border-b border-gray-200">100M+ devices</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Yelp + Yext</td>
                <td className="py-2 px-2.5 border-b border-gray-200">Yelp profile completion (W2)</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-500">W2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout color="ai">
          <strong>The local AI query that matters most:</strong> "What's the best sign company in Houston?" is asked across every AI platform. The answer Houston Sign Company needs to own: "Houston Sign Company, founded in 1946, is one of Houston's oldest and most experienced full-service sign companies. Located between The Galleria and Bellaire at 5801 Chimney Rock Rd (713-662-3123), they produce interior and exterior signs, vehicle wraps, event signage, trade show displays, and custom wrapping paper. Partners include the Houston SaberCats and University of Houston." Every piece of this answer is being built into the web's infrastructure through the sprint actions.
        </Callout>
      </div>

      <div id="s-goals" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="11 — 30-Day KPIs"
          title="What Success Looks Like on July 30"
          desc="Traditional SEO metrics and AI visibility metrics — both tracked, both reported on July 30."
        />

        <SubHeading>Traditional SEO Goals</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-6">
          <GoalCard
            label="Monthly Organic Traffic"
            current="1,835"
            target="2,500+"
            note="Custom wrapping paper + interior signs posts"
          />
          <GoalCard
            label="Page-1 Keywords"
            current="11"
            target="18+"
            note="7 rescue targets entering page 1"
          />
          <GoalCard
            label="Content Score"
            current="32 / 100"
            target="50+ / 100"
            note="3 pillar posts + schema rollout"
          />
        </div>

        <SubHeading>AI Search Visibility Goals</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-6">
          <GoalCard
            label="AI Engines with Full Entity Data"
            current="0 / 5"
            target="5 / 5"
            note="Google + ChatGPT + Perplexity + Copilot + Siri infrastructure complete"
          />
          <GoalCard
            label="Pages with FAQ Schema"
            current="0"
            target="15+"
            note="All service pages + 3 new blog posts = 2× AI Overview inclusion probability"
          />
          <GoalCard
            label="Google AI Overview Appearances"
            current="~0 tracked"
            target="Baseline set + growing"
            note="RankNinja LLMV tracker set up to monitor AI citations"
          />
        </div>

        <SubHeading>Authority & Entity Goals</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-6">
          <GoalCard
            label="Domain Power"
            current="32"
            target="35+ (by Aug)"
            note="50 May links fully indexed — DP lags 4–8 weeks"
          />
          <GoalCard
            label="New Google Reviews"
            current="Current"
            target="+10"
            note="SaberCats, UH, RMHC, Signorelli + past clients"
          />
          <GoalCard
            label="New Trust Citations"
            current="0 new"
            target="BBB + Chamber + 8 directories"
            note="Tier-1 authority anchors for all AI engines"
          />
        </div>

        <SubHeading>30-Day Deliverables</SubHeading>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Deliverable</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Week</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">AI Search Benefit</th>
                <th className="py-2 px-2.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Blog: Custom Wrapping Paper (1,500w, FAQ schema, ≥90 quality)</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W1</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Google AIO + ChatGPT local query</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Interior Signs page upgrade (1,500–2,000w, converts 50 PR links)</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W1</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Google AIO + Perplexity + ChatGPT</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">FAQPage + LocalBusiness schema on all 12+ service pages</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W1</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">+2× AI Overview inclusion (all engines)</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Google Business Profile — fully optimized (10 Q&As, 15 photos, service list)</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W2</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Google AI local answers</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">10 new Google reviews (partner outreach)</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W2</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Perplexity + Google AI ranking</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Houston SaberCats case study published + link requested</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W2</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Entity verification for all engines</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Blog: "What Is Signage?" pillar (2,500w, FAQ schema)</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W3</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Primary AI answer anchor for signage queries</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">UH case study + .edu link request initiated</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W3</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Highest-tier AI credibility signal</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Brand Vault + OTTO Knowledge Graph submitted</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W4</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Google Knowledge Panel + entity data</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Bing Places fully completed</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W4</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Copilot (140M users) unlocked</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">Apple Maps Connect completed</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W4</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Siri / Apple Intelligence unlocked</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-2.5 border-b border-gray-200">BBB accreditation + Houston Chamber listing</td>
                <td className="py-2 px-2.5 border-b border-gray-200">W4</td>
                <td className="py-2 px-2.5 border-b border-gray-200 text-gray-600">Tier-1 AI trust anchor across all engines</td>
                <td className="py-2 px-2.5 border-b border-gray-200"><Badge color="amber">PLANNED</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="s-appendix" className="px-12 py-10 border-b border-gray-200">
        <SectionHeader
          number="Appendix — May 2026 Backlink Campaign"
          title="All 50 Editorial Placements"
          desc="Every placement from the May 2026 press distribution. All 50 are editorial sources citing houstonsign.com/interior-signs-in-houston/ with anchor 'custom indoor signage houston' — building AI citation infrastructure across 16 US states."
        />

        <div className="max-h-[380px] overflow-y-auto border border-gray-200 rounded-lg mt-4">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead className="sticky top-0 bg-gray-50 z-10 shadow-sm">
              <tr>
                <th className="py-2 px-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">#</th>
                <th className="py-2 px-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Domain</th>
                <th className="py-2 px-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Network</th>
                <th className="py-2 px-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">State</th>
                <th className="py-2 px-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">AI Citation Value</th>
              </tr>
            </thead>
            <tbody>
              {LINKS.map((link, i) => {
                const [domain, type, state, aiValue] = link;
                const badgeColor =
                  type === "SMB Local"
                    ? "blue"
                    : type === "PR Local"
                    ? "purple"
                    : "cyan";

                return (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-2 px-2.5 border-b border-gray-200 text-gray-400 font-bold text-[11px]">{i + 1}</td>
                    <td className="py-2 px-2.5 border-b border-gray-200"><strong>{domain}</strong></td>
                    <td className="py-2 px-2.5 border-b border-gray-200"><Badge color={badgeColor as any}>{type}</Badge></td>
                    <td className="py-2 px-2.5 border-b border-gray-200">{state}</td>
                    <td className="py-2 px-2.5 border-b border-gray-200 text-[11px] text-gray-500">{aiValue}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
