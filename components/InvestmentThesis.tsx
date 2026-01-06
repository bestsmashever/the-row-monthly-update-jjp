'use client'

import Image from 'next/image'
import Block2Retail from '@/components/Block2Retail'
import { FULL_WIDTH_SIZES } from '@/constants/media'
import ChartContainer from '@/components/layout/ChartContainer'
import amazonImage from '@/public/Amazon.jpg'
import debtAfterAmazonSaleImage from '@/public/Debt After Amazon Transaction.jpg'
import debtMapImage from '@/public/The Row Debt Map_Oct 2025.jpg'

export default function InvestmentThesis() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">Overview</h3>
      
      <ul className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-7 text-gray-700 pl-4 sm:pl-5 space-y-4 sm:space-y-5">
        <li>
          <strong>Potential Land Sales</strong>
          <ul className="list-disc list-inside mt-2 space-y-3 ml-6">
            <li>
              <strong>Amazon:</strong>
              <ul className="list-none mt-2 space-y-2 ml-6">
                <li className="flex">
                  <span className="mr-2 text-primary-500 font-bold">▶</span>
                  <span><strong>Under Contract (53 Acres):</strong> Officially under contract with the PSA executed on 9/28/2025; $500k in earnest money was confirmed received by Chicago Title on 10/6/2025; Seller is working through due diligence and developing their site plan with the end user. The preliminary plan has been formally submitted for review after receiving an approved completeness check submission. Our anticipated timeline for Amazon to go non-refundable is 3/27/2026, and the timeline for our prelim plan to be approved (allowing for closing) is 6/30/2026.</span>
                </li>
                <li className="flex">
                  <span className="mr-2 text-primary-500 font-bold">▶</span>
                  <span><strong>Additional 25 Acres - LOI Received:</strong> offer is for a distribution facility; price is $13/land sf and we countered with $14.5/land sf.</span>
                </li>
              </ul>
            </li>
            <li>
              <strong>Austin Energy Substation (7 Acres and 7 acres of Easement):</strong> We are awaiting final substation design which is dependent on the adjacent landowner (Austin Community College) to finalize the transmission route. The final transmission route is needed in order to finalize the substation design. We have executed a permission to survey the property once the substation design is finalized, this will officially kick off the appraisals process. Estimated closing time is Q4 2026.
            </li>
          </ul>
        </li>
        <li>
          <strong>Retail Update</strong>
          <ul className="list-disc list-inside mt-2 space-y-3 ml-6">
            <li>
              <strong>Block 2 Retail:</strong> Site is shovel ready and we are negotiating with Shiner Smokehouse, a smoked meat and live music concept from Shiner, TX, to replace Portllo's. We are also negotiating terms with a few other potential tenants for the 22,000 inline space. The construction lender is ready to close. We've made meaningful progress on the equity raise and expect to have firmer details in the next couple of weeks. Two groups have shown strong interest.
            </li>
            <li>
              <strong>Other Site Retail:</strong> Continuing conversations with a C-store/gas station concept and hotel operator for Block 1 (HEB). Conversations ongoing with other activator tenants, including pickleball, spas, MLB, brewery/bar, BBQ, etc.
            </li>
            <li>
              <strong>New Leasing Agent:</strong> We're hoping to bring on a new leasing agent for the site in early 2026.
            </li>
          </ul>
        </li>
        <li>
          <strong>Retail Core & Master Plan:</strong> Design and permitting for the Retail Core are progressing as planned. We remain on track with the site plan review process, and permits are expected by April 2026.
        </li>
        <li>
          <strong>Del Via:</strong> Occupancy 14.33% | Leased 19.21%; Market Rent: $2.19/sf | $1,796/unit; Concession: 6-10 weeks free (12.5% to 20.8% off)
        </li>
      </ul>
      
      <h3 className="section-title">Amazon</h3>
      <ChartContainer className="mb-8 sm:mb-10 md:mb-12">
        <Image
          src={amazonImage}
          alt="Amazon"
          sizes={FULL_WIDTH_SIZES}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </ChartContainer>
      
      <div className="bg-white border-2 border-primary-500 p-0 shadow-lg mb-8 sm:mb-10 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative w-full">
            <Image
              src={debtMapImage}
              alt="Debt Map"
              sizes={FULL_WIDTH_SIZES}
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="relative w-full">
            <Image
              src={debtAfterAmazonSaleImage}
              alt="Debt after Amazon Sale"
              sizes={FULL_WIDTH_SIZES}
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      <Block2Retail />
      
      <h3 className="section-title mt-8 sm:mt-10 md:mt-12">Master Plan</h3>
    </section>
  )
}
