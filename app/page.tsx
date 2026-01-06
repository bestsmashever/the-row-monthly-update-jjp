'use client'

import Header from '@/components/Header'
import InvestmentThesis from '@/components/InvestmentThesis'
import MarketFundamentals from '@/components/MarketFundamentals'
import Footer from '@/components/Footer'
import ImageSection from '@/components/ImageSection'
import { homeSections } from '@/app/data/sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <InvestmentThesis />
        {homeSections.map((section) => (
          <ImageSection key={section.id} {...section} />
        ))}
        <MarketFundamentals />
        <Footer />
      </div>
    </div>
  )
}
