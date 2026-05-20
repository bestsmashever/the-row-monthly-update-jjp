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

function ExecutiveSummary() {
  const summaryItems = [
    {
      label: 'Land Sales',
      value: '$700k',
      detail:
        'Amazon 53-acre deposit is non-refundable; the 25-acre parcel is under contract with an outside closing date of 11/25/2026.',
    },
    {
      label: 'Block 2 Retail',
      value: 'Lender Search',
      detail:
        'Sunflower passed on the deal; the team is actively seeking a replacement lender while XL remains committed to $4M.',
    },
    {
      label: 'Retail Core',
      value: 'Approved',
      detail: 'Site development permits were informally approved in April 2026.',
    },
    {
      label: 'Del Via',
      value: '45.27%',
      detail: 'Leased, with 35.17% occupancy and market rent at $2.06/sf.',
    },
  ]

  return (
    <section className="executive-summary" aria-label="Executive summary">
      <div className="executive-summary-copy">
        <h2>May Executive Summary</h2>
        <p>
          Current focus remains on land-sale execution, replacement lender outreach,
          Block 2 tenant momentum, and Del Via lease-up.
        </p>
      </div>
      <div className="executive-summary-grid">
        {summaryItems.map(({ detail, label, value }) => (
          <div key={label} className="executive-summary-card">
            <div className="summary-label">{label}</div>
            <div className="summary-value">{value}</div>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function May2026Body() {
  return (
    <>
      <ExecutiveSummary />

      <InvestmentThesis
        anchors={{
          overviewId: 'overview',
          landSalesId: 'potential-land-sales',
          block2RetailId: 'block-2-retail',
        }}
        retailUpdateContent={
          <ul className="overview-section-list mt-2 space-y-3">
            <li>
              <strong>Block 2 Retail:</strong> Site is shovel ready and we are
              talking with Starbucks, Pluckers, and a local coffee/cocktail
              concept to replace Portllo&apos;s as the pad user. We are also
              negotiating terms with a few other potential tenants for the
              22,000 inline space.
              <p className="mt-2">
                Sunflower turned down the deal and we are active seeking a
                different lender. XL funding is committed to $4M out of the
                total $5.5M equity required. We are attempting to raise the
                balance of $1.5mm of equity from retail investors.
              </p>
              <ul className="overview-depth-block mt-2 space-y-2">
                <li>
                  <strong>Starbucks:</strong> engaged corporate brokers to
                  investigate site for corporate location for Suite 100
                  (Portillo&apos;s pad). Open to licensing the location if
                  corporate decides to pass.
                </li>
                <li>
                  <strong>Keke&apos;s Breakfast</strong> (under the Denny&apos;s
                  umbrella) has approved the location and is working through
                  franchise documents
                </li>
                <li>
                  <strong>Singa&apos;s Pizza</strong> is reviewing the site for
                  approx. 1,900sf
                </li>
                <li>
                  <strong>Holic Pho</strong> – negotiating LOI for 1,900 sf
                </li>
                <li>
                  <strong>Kilwin&apos;s Ice Cream</strong> – expression of
                  interest from broker
                </li>
              </ul>
            </li>
            <li>
              <strong>Other Site Retail:</strong>
              <ul className="overview-depth-block mt-2 space-y-2">
                <li>
                  Presidium is continuing to explore opportunities for
                  HEB&apos;s replacement. Weitzman has re-engaged early
                  conversations with Target and Costco.
                </li>
                <li>
                  We are exploring an opportunity for a JV with local retail
                  developer TOPO for a mixed-use approach to Block 1, including
                  additional MF, Retail (pads and restaurants) and a hotel.
                </li>
              </ul>
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
        austinEnergySubstationSuffix=""
        retailCoreMasterPlanContent={
          <>
            <strong>Retail Core & Master Plan:</strong> Site development permits
            were informally approved in April 2026.
            <ul className="overview-depth-disc mt-2 space-y-2">
              <li>
                <strong>AC Hotel Developer (Merritt)</strong> identified a
                restaurant group for the hotel (Southerleigh), and is gaining
                traction with equity.
              </li>
            </ul>
          </>
        }
        underContract53AcresText={
          <>
            $700k went non-refundable as of 4/9 and was released to us.
            Preliminary plan informal approved. We are targeting final plat
            approval by 7/21/2026 to support closing. Closing timeline link{' '}
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
        underContract53AcresLabel="1.0 Under Contract (53 Acres)"
        additional25AcresLoiLabel="2.0 Under Contract (25 Acres)"
        additional25AcresLoiText="$13.5/land sf and still investigating infrastructure cost. Outside closing date is 11/25/2026."
        delViaSummaryText="Occupancy 35.17% | Leased 45.27%; Market Rent: $2.06/sf | $1,691/unit; Concession: 6-10 weeks free (12.5% to 20.8% off)"
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
            <h4 className="report-subtitle">Retail Core Phasing</h4>
            <RetailCorePhasing />
          </div>
          <div>
            <h4 className="report-subtitle">Retail Core Rendering</h4>
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
            <p className="report-lede">
              Employer expansion and major capital investment continue to shape demand across Austin.
            </p>

            <div id="key-indicators" className="scroll-mt-24" />
            <h4 className="report-subtitle report-subtitle--compact">Key Indicators</h4>

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
