'use client'

import Header from '@/components/Header'
import InvestmentThesis from '@/components/InvestmentThesis'
import MasterPlan from '@/components/MasterPlan'
import ReleaseGovernance from '@/components/ReleaseGovernance'
import RetailDestination from '@/components/RetailDestination'
import RetailCorePhasing from '@/components/RetailCorePhasing'
import RetailCoreRendering from '@/components/RetailCoreRendering'
import MarketFundamentals from '@/components/MarketFundamentals'
import Footer from '@/components/Footer'
import { currentRelease, previousRelease, releases } from '@/content/releases'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header release={currentRelease} />
        <ReleaseGovernance
          currentRelease={currentRelease}
          previousRelease={previousRelease}
          releases={releases}
        />
        <InvestmentThesis />
        <MasterPlan />
        <RetailDestination />
        <section className="mb-8 sm:mb-10 md:mb-12">
          <h3 className="section-title">RETAIL CORE</h3>
        </section>
        <RetailCorePhasing />
        <RetailCoreRendering />
        <MarketFundamentals />
        <Footer />
      </div>
    </div>
  )
}
