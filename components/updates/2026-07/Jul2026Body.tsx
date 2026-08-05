import InvestmentThesis from '@/components/InvestmentThesis'
import MasterPlan from '@/components/MasterPlan'
import RetailDestination from '@/components/RetailDestination'
import RetailCorePhasing from '@/components/RetailCorePhasing'
import RetailCoreRendering from '@/components/RetailCoreRendering'
import MarketFundamentals from '@/components/MarketFundamentals'
import amazonAndAeMapImage from '@/public/Amazon and AE Map_May 2026.jpg'
import rowDebtMapImage from '@/public/The Row Debt Map.jpg'
import theRowIcsc1Image from '@/public/The Row_ICSC_1.jpg'
import theRowIcsc2Image from '@/public/The Row_ICSC_2.jpg'
import theRowIcsc3Image from '@/public/The Row_ICSC_3.jpg'
import theRowIcsc4Image from '@/public/The Row_ICSC_4.jpg'
import AmazonTransactionsTable from '@/components/updates/2026-07/AmazonTransactionsTable'

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
    <div className="metric-card market-indicator-card">
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
      detail: 'Site development permits for the core are formally approved.',
    },
    {
      label: 'Del Via',
      value: '62.21%',
      detail:
        'Leased, with 49.18% occupancy; leasing is supported by young professionals from preferred employers.',
    },
  ]

  return (
    <section className="executive-summary" aria-label="Executive summary">
      <div className="executive-summary-copy">
        <h2>July Executive Summary</h2>
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

export default function Jul2026Body() {
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
              <strong>Block 2:</strong> Site is shovel ready. We are looking for
              a lender for the vertical development since Sunflower fell out.
              Leasing efforts continue on the pad site and 22,000 inline space
              via Weitzman. XL funding committed $4M of equity and we are
              attempting to raise additional equity from retail investors.
            </li>
            <li>
              <strong>Block 1 (HEB):</strong> Weitzman is actively soliciting
              bids for pad sites along Hwy 71. In discussions with potential
              small footprint grocers.
            </li>
            <li>
              <strong>Block 3:</strong> We identified a tenant for the hotel
              restaurant (Southerleigh) and are negotiating an LOI. Other
              leasing activity has been slow.
            </li>
          </ul>
        }
        amazonSectionTitle="Potential Land Sales"
        amazonHeroImage={amazonAndAeMapImage}
        amazonHeroAlt="Amazon and Austin Energy Map"
        debtMapTone="neutral"
        debtMapTitle="The Row Debt Map"
        debtMapPrimaryImage={rowDebtMapImage}
        debtMapPrimaryAlt="The Row Debt Map"
        debtMapSecondaryPlacement="nextBox"
        debtMapSecondaryTitle="Amazon Transactions"
        debtMapSecondaryContent={<AmazonTransactionsTable />}
        debtMapSecondaryContentPadding={false}
        showMasterPlanHeading={false}
        austinEnergySubstationText="Austin Energy has approved the easement surveys and substantially completed its legal review of the easement form and related ownership and lienholder documents. Before execution, Austin Energy will remove references to repairable improvements from the easement form. The appraisal is underway to determine compensation, with reports potentially due in late October 2026. A formal offer, document execution, and payment would follow."
        block2RetailImages={[
          { src: theRowIcsc1Image, alt: 'The Row ICSC 1' },
          { src: theRowIcsc2Image, alt: 'The Row ICSC 2' },
          { src: theRowIcsc3Image, alt: 'The Row ICSC 3' },
          { src: theRowIcsc4Image, alt: 'The Row ICSC 4' },
        ]}
        block2RetailTitle="Block 2 & Block 1 Retail"
        retailCoreMasterPlanContent={
          <>
            <strong>HEB Site</strong> We are looking to complete the repurchase
            of the HEB site by year end. We have programmed the 17-acre site for
            additional retail pads, a grocer and another phase of MF (see Block
            2 & Block 1 Retail).
          </>
        }
        underContract53AcresText={
          <>
            $700k went non-refundable as of 4/9 and was released to us.
            Our Preliminary Plan has been approved, and the Final plat approval
            is expected in August. We anticipate an outside closing date of
            9/24/2026.
          </>
        }
        underContract53AcresLabel="1.0 Under Contract (53 Acres)"
        additional25AcresLoiLabel="2.0 Under Contract (25 Acres)"
        additional25AcresLoiText="$13.5/land sf and still investigating infrastructure cost. Outside closing date is 11/25/2026."
        landSalesExtraItems={
          <li>
            <strong>Others:</strong> Continuing to field inquiries from industrial
            developers.
          </li>
        }
        delViaSummaryLabel="Del Via Lease-Up "
        delViaSummaryText="Occupied 49.18% | Leased 62.21%; Market Rent: $2.06/sf | $1,691/unit. Leasing continues to draw young professionals from our preferred employer base, including 27 occupied units from Austin Airport employees and 74 occupied units from Tesla / SpaceX employees."
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
        marketContentVariant="june2026"
        beforeAustinMarketContent={
          <>
            <p className="report-lede market-lede">
              Recent announcements and active projects point to a broader demand base
              across Austin: aviation jobs at AUS, semiconductor investment east and
              north of the city, life sciences expansion, and grid infrastructure are
              all adding institutional capital and skilled employment to the region.
            </p>

            <div id="key-indicators" className="scroll-mt-24" />
            <h4 className="report-subtitle report-subtitle--compact">Key Indicators</h4>

            <div className="market-indicator-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <KeyIndicatorCard value="2,000" label="Southwest AUS crew-base jobs" context="New pilot and flight-attendant base" />
              <KeyIndicatorCard value="26 gates" label="AUS Concourse B" context="New midfield concourse capacity" />
              <KeyIndicatorCard value="$71M" label="Arm Austin investment" context="320+ semiconductor lab jobs" />
              <KeyIndicatorCard value="$280M" label="SpaceX Bastrop investment" context="400+ advanced-packaging jobs" />
              <KeyIndicatorCard value="40 MW" label="Austin Energy storage" context="Base Power residential batteries" />
              <KeyIndicatorCard value="200" label="Rare-disease genomics jobs" context="3billion US, $8.1M lab" />
            </div>
          </>
        }
      />
    </>
  )
}
