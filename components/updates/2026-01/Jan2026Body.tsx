import InvestmentThesis from '@/components/InvestmentThesis'
import MasterPlan from '@/components/MasterPlan'
import RetailDestination from '@/components/RetailDestination'
import RetailCorePhasing from '@/components/RetailCorePhasing'
import RetailCoreRendering from '@/components/RetailCoreRendering'
import MarketFundamentals from '@/components/MarketFundamentals'
import potentialLandSalesMapImage from '@/public/Potential Land Sales Map.jpg'
import rowDebtMapJan2026Image from '@/public/The Row Debt Map_Jan 2026.jpg'
import AmazonTransactionsTable from '@/components/updates/2026-01/AmazonTransactionsTable'

export default function Jan2026Body() {
  return (
    <>
      <InvestmentThesis
        anchors={{
          overviewId: 'overview',
          landSalesId: 'potential-land-sales',
          block2RetailId: 'block-2-retail',
        }}
        landSalesExtraItems={
          <li>
            <strong>SMT Energy:</strong> In search of sites for an existing data
            center partner. Particularly looking for sustainable energy sources
            for long term power. Will pay for all interconnect studies through
            Austin Energy and ERCOT during an extended feasibility period (2
            years). They are interested in 30-50 acres at $15.00/sf.
          </li>
        }
        retailUpdateContent={
          <ul className="list-disc list-inside mt-2 space-y-3 ml-6">
            <li>
              <strong>Block 2 Retail:</strong> Site is shovel ready and we are
              talking with Starbucks, Pluckers, and a local coffee/cocktail
              concept to replace Portllo&apos;s as the pad user. We are also
              negotiating terms with a few other potential tenants for the
              22,000 inline space. The construction lender is ready to close,
              and the equity raise is advancing with two groups in active
              discussions.
            </li>
            <li>
              <strong>Other Site Retail:</strong>
              <ul className="list-none mt-2 space-y-2 ml-6">
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">▶</span>
                  <span>
                    Continuing conversations with a C-store/gas station concept
                    and hotel operator for Block 1 (HEB). Conversations ongoing
                    with other activator tenants, including pickleball, spas,
                    MLB, brewery/bar, BBQ, etc.
                  </span>
                </li>
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">▶</span>
                  <span>
                    Executed an exclusivity agreement with another local
                    developer to explore purchasing Lot 1.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <strong>New Leasing Agent:</strong> After a prolonged interview
              process with several retail brokerages, we&apos;re in the process
              of engaging Weitzman Group. The negotiated listing agreement and
              exclusions list is in their court to approve before moving into
              more formal execution.
            </li>
          </ul>
        }
        amazonSectionTitle="Potential Land Sales"
        amazonHeroImage={potentialLandSalesMapImage}
        amazonHeroAlt="Potential Land Sales Map"
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
            PSA executed with due diligence in progress and the end user&apos;s site
            plan under review. The preliminary plan has been formally submitted.
            We are targeting non-refundable status by 3/27/2026, preliminary plan
            approval by 4/22/2026, and final plat approval by 7/21/2026 to
            support closing. Closing timeline link{' '}
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
        additional25AcresLoiLabel="Additional 25 Acres - LOI Executed by Presidium"
        additional25AcresLoiText="offer is for a SDD (same-day delivery) facility; price is $13.5/land sf and we are waiting for Amazon's signature."
        delViaSummaryText="Occupancy 16.28% | Leased 20.52%; Market Rent: $2.19/sf | $1,796/unit; Concession: 6-10 weeks free (12.5% to 20.8% off)"
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
      />
    </>
  )
}


