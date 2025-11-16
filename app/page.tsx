'use client'

import Header from '@/components/Header'
import InvestmentThesis from '@/components/InvestmentThesis'
import SupplyDemandChart from '@/components/SupplyDemandChart'
import SupplyDemandRentChart from '@/components/SupplyDemandRentChart'
import ConstructionChart from '@/components/ConstructionChart'
import PipelineChart from '@/components/PipelineChart'
import RentOccupancyTable from '@/components/RentOccupancyTable'
import MarketFundamentals from '@/components/MarketFundamentals'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-3">
        <Header />
        <InvestmentThesis />
        <SupplyDemandChart />
        <SupplyDemandRentChart />
        <ConstructionChart />
        <PipelineChart />
        <RentOccupancyTable />
        <MarketFundamentals />
        <Footer />
      </div>
    </div>
  )
}
