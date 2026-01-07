import InvestmentThesis from '@/components/InvestmentThesis'
import MasterPlan from '@/components/MasterPlan'
import RetailDestination from '@/components/RetailDestination'
import RetailCorePhasing from '@/components/RetailCorePhasing'
import RetailCoreRendering from '@/components/RetailCoreRendering'
import MarketFundamentals from '@/components/MarketFundamentals'

export default function Dec2025Body() {
  return (
    <>
      <InvestmentThesis />
      <MasterPlan />
      <RetailDestination />

      <section className="mb-8 sm:mb-10 md:mb-12">
        <h3 className="section-title">RETAIL CORE</h3>
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

      <MarketFundamentals />
    </>
  )
}


