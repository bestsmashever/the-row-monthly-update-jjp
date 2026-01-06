'use client'

import Image from 'next/image'
import Block2Retail from '@/components/Block2Retail'

export default function InvestmentThesis() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">Overview</h3>
      <div className="space-y-6 sm:space-y-7">
        <div className="bg-white border-2 border-primary-500 shadow-lg rounded-lg p-5 sm:p-6">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
            <span className="text-lg">🔹</span> Summary
          </p>
          <ul className="list-none mt-3 space-y-2 text-base sm:text-lg text-gray-800">
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span>Amazon and substation land monetization remain the primary near-term value drivers.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span>Retail and multifamily verticals continue to progress in parallel.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span>Permitting and site readiness milestones keep the Retail Core and Block 2 positioned for quick mobilization.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-primary-500 shadow-lg rounded-lg p-5 sm:p-6">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
            <span className="text-lg">🔹</span> Details
          </p>
          <ul className="text-base sm:text-lg leading-relaxed text-gray-700 pl-4 sm:pl-5 space-y-4 sm:space-y-5">
          <li>
            <strong>Potential Land Sales</strong>
            <ul className="list-disc list-inside mt-2 space-y-3 ml-6">
              <li>
                <strong>Amazon:</strong>
                <ul className="list-none mt-2 space-y-2 ml-6">
                  <li className="flex">
                    <span className="mr-2 text-primary-500 font-bold">▶</span>
                    <span><strong>Under Contract (53 Acres):</strong> PSA executed 9/28/2025 with $500k earnest money; diligence and end-user site plan in progress; prelim plan submitted and under review.</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2 text-primary-500 font-bold">▶</span>
                    <span><strong>Additional 25 Acres - LOI Received:</strong> Offer for a distribution facility at $13/land sf; countered at $14.5/land sf.</span>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Austin Energy Substation (7 Acres + 7 Acres Easement):</strong> Awaiting final substation design and transmission route from ACC to start survey/appraisal; estimated closing Q4 2026.
              </li>
            </ul>
          </li>
          <li>
            <strong>Retail Update</strong>
            <ul className="list-disc list-inside mt-2 space-y-3 ml-6">
              <li>
                <strong>Block 2 Retail:</strong> Shovel ready; negotiating with Shiner Smokehouse to replace Portillo's and with tenants for 22,000 SF inline space; construction lender ready; equity raise progressing with two engaged groups.
              </li>
              <li>
                <strong>Other Site Retail:</strong> Ongoing conversations with C-store/gas station and hotel operator for Block 1 (HEB) plus other activator tenants (pickleball, spas, MLB, brewery/bar, BBQ, etc.).
              </li>
              <li>
                <strong>New Leasing Agent:</strong> Targeting early 2026 onboarding.
              </li>
            </ul>
          </li>
          <li>
            <strong>Retail Core & Master Plan:</strong> Design and permitting on track; site plan review progressing with permits expected by April 2026.
          </li>
          <li>
            <strong>Del Via:</strong> Occupancy 14.33% | Leased 19.21%; Market Rent: $2.19/sf | $1,796/unit; Concession: 6-10 weeks free (12.5% to 20.8% off).
          </li>
        </ul>
        </div>
      </div>

      <h3 className="section-title mt-8 sm:mt-10 md:mt-12">Master Plan</h3>
    </section>
  )
}
