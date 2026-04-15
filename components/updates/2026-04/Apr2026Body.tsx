import InvestmentThesis from '@/components/InvestmentThesis'
import MasterPlan from '@/components/MasterPlan'
import RetailDestination from '@/components/RetailDestination'
import RetailCorePhasing from '@/components/RetailCorePhasing'
import RetailCoreRendering from '@/components/RetailCoreRendering'
import MarketFundamentals from '@/components/MarketFundamentals'
import amazonAndAeMapImage from '@/public/Amazon and AE Map.jpg'
import rowDebtMapJan2026Image from '@/public/The Row Debt Map_Jan 2026.jpg'
import AmazonTransactionsTable from '@/components/updates/2026-02/AmazonTransactionsTable'

function KeyIndicatorCard({
  value,
  label,
  context,
}: {
  value: string
  label: string
  context: string
}) {
  return (
    <div className="metric-card">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
      <div className="metric-context">{context}</div>
    </div>
  )
}

export default function Apr2026Body() {
  return (
    <>
      <InvestmentThesis
        anchors={{
          overviewId: 'overview',
          landSalesId: 'potential-land-sales',
          block2RetailId: 'block-2-retail',
        }}
        retailUpdateContent={
          <ul className="list-disc list-inside mt-2 space-y-3 ml-6">
            <li>
              <strong>Block 2 Retail:</strong> Site is shovel ready and we are
              talking with Starbucks, Pluckers, and a local coffee/cocktail
              concept to replace Portllo&apos;s as the pad user. We are also
              negotiating terms with a few other potential tenants for the
              22,000 inline space. Sunflower, lender, is reapproving the deal,
              and XL funding is committed to $4M out of the total $5.5M equity
              required.
              <ul className="list-none mt-2 space-y-2 ml-6">
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">
                    ▶
                  </span>
                  <span>
                    <strong>Starbucks:</strong> engaged corporate brokers to
                    investigate site for corporate location for Suite 100
                    (Portillo&apos;s pad). Open to licensing the location if
                    corporate decides to pass.
                  </span>
                </li>
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">
                    ▶
                  </span>
                  <span>
                    <strong>Keke&apos;s Breakfast</strong> (under the Denny&apos;s
                    umbrella) has approved the location and is working through
                    franchise documents
                  </span>
                </li>
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">
                    ▶
                  </span>
                  <span>
                    <strong>Huy Bao Ngo:</strong> We negotiated the LOI for
                    1,919 SF at a rent of $41/SF, with a 3% annual increase and
                    a $60/SF tenant improvement allowance. Currently awaiting
                    their signature.{' '}
                    <a
                      href="https://theholicpho.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 underline hover:no-underline"
                    >
                      The Holic Pho
                    </a>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <strong>Other Site Retail:</strong>
              <ul className="list-none mt-2 space-y-2 ml-6">
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">
                    ▶
                  </span>
                  <span>
                    Presidium is continuing to explore opportunities for
                    HEB&apos;s replacement. Weitzman has re-engaged early
                    conversations with Target.
                  </span>
                </li>
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">
                    ▶
                  </span>
                  <span>
                    We are exploring an opportunity for a JV with local retail
                    developer TOPO for a mixed-use approach to Block 1,
                    including additional MF, Retail (pads and restaurants) and
                    a hotel.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <strong>New Leasing Agent:</strong> After a prolonged interview
              process with several retail brokerages, we&apos;ve engaged Weitzman Group.
            </li>
          </ul>
        }
        amazonSectionTitle="Potential Land Sales"
        amazonHeroImage={amazonAndAeMapImage}
        amazonHeroAlt="Amazon and Austin Energy Map"
        debtMapTone="neutral"
        debtMapTitle="The Row Debt Map"
        debtMapPrimaryImage={rowDebtMapJan2026Image}
        debtMapPrimaryAlt="The Row Debt Map - Jan 2026"
        debtMapSecondaryPlacement="nextBox"
        debtMapSecondaryTitle="Amazon Transactions"
        debtMapSecondaryContent={<AmazonTransactionsTable />}
        debtMapSecondaryContentPadding={false}
        showMasterPlanHeading={false}
        underContract53AcresText={
          <>
            $700k went hard as of 4/9. Preliminary plan informal approved. We are
            targeting final plat approval by 7/21/2026 to support closing.
            Closing timeline link{' '}
            <a
              href="https://amazon1-psa-timeline.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline hover:no-underline"
            >
              here
            </a>
            .
          </>
        }
        additional25AcresLoiLabel="Additional 25 Acres – PSA Under Negotiation"
        additional25AcresLoiText="offer is for a SDD (same-day delivery) facility; aiming for $13.5/land sf and shared infrastructure."
        delViaSummaryText="Occupancy 29.64% | Leased 34.52%; Market Rent: $2.06/sf | $1,691/unit; Concession: 6-10 weeks free (12.5% to 20.8% off)"
      />

      <div id="retail-core-master-plan" className="scroll-mt-24" />
      <section className="mb-8 sm:mb-10 md:mb-12">
        <h3 className="section-title">Retail Core & Master Plan</h3>
        <MasterPlan />
        <RetailDestination />
      </section>

      <section className="mb-8 sm:mb-10 md:mb-12">
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          <div>
            <h4 className="text-primary-500 text-lg mb-5 font-bold uppercase tracking-wide text-center">
              Retail Core Phasing
            </h4>
            <RetailCorePhasing />
          </div>
          <div>
            <h4 className="text-primary-500 text-lg mb-5 font-bold uppercase tracking-wide text-center">
              Retail Core Rendering
            </h4>
            <RetailCoreRendering />
          </div>
        </div>
      </section>

      <MarketFundamentals
        anchors={{
          delViaId: 'del-via-multifamily',
          austinMarketId: 'austin-market',
        }}
        austinMarketTitle="Austin Market"
        variant="agora"
        includeAustinSurfClub
        beforeAustinMarketContent={
          <>
            <p className="text-base sm:text-lg text-gray-700 max-w-4xl">
              Employer expansion and major capital investment continue to shape demand across Austin.
            </p>

            <div id="key-indicators" className="scroll-mt-24" />
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-8">
              Key Indicators
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <KeyIndicatorCard value="20,000+" label="Tesla employees" context="Austin workforce scale (approx.)" />
              <KeyIndicatorCard value="10M SF" label="Giga Texas built" context="Plus ~5M SF planned expansion" />
              <KeyIndicatorCard value="$16.5B" label="AI chip partnership" context="Tesla × Samsung (Taylor, TX)" />
              <KeyIndicatorCard value="$4–6B" label="ABIA expansion" context="“Journey With AUS” program" />
              <KeyIndicatorCard value="$423M" label="TDEM headquarters" context="Opening August 2026" />
              <KeyIndicatorCard value="$2–4M" label="Austin Surf Club homes" context="Typical home pricing (approx.)" />
            </div>
          </>
        }
      />
    </>
  )
}
