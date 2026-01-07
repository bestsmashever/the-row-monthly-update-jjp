'use client'

import Image from 'next/image'
import type { ImageProps } from 'next/image'
import Block2Retail from '@/components/Block2Retail'
import { FULL_WIDTH_SIZES } from '@/constants/media'
import ChartContainer from '@/components/layout/ChartContainer'
import amazonImage from '@/public/Amazon.jpg'
import debtAfterAmazonSaleImage from '@/public/Debt After Amazon Transaction.jpg'
import debtMapImage from '@/public/The Row Debt Map_Oct 2025.jpg'

type InvestmentThesisProps = {
  anchors?: {
    overviewId?: string
    landSalesId?: string
    block2RetailId?: string
  }
  landSalesExtraItems?: React.ReactNode
  retailUpdateContent?: React.ReactNode
  showMasterPlanHeading?: boolean
  amazonSectionTitle?: string
  amazonHeroImage?: ImageProps['src']
  amazonHeroAlt?: string
  debtMapTone?: 'primary' | 'neutral'
  debtMapTitle?: string
  debtMapPrimaryImage?: ImageProps['src']
  debtMapPrimaryAlt?: string
  debtMapSecondaryImage?: ImageProps['src']
  debtMapSecondaryAlt?: string
  debtMapSecondaryPlacement?: 'sameBox' | 'nextBox'
  debtMapSecondaryTitle?: string
  debtMapSecondaryContent?: React.ReactNode
  debtMapSecondaryContentPadding?: boolean
  underContract53AcresText?: React.ReactNode
  additional25AcresLoiLabel?: string
  additional25AcresLoiText?: string
  delViaSummaryText?: string
}

const DEFAULT_UNDER_CONTRACT_53_ACRES_TEXT =
  "PSA executed with due diligence in progress and the end user's site plan under review. The preliminary plan has been formally submitted; targeting 3/27/2026 for non-refundable status and 6/30/2026 for prelim plan approval to enable closing."

const DEFAULT_ADDITIONAL_25_ACRES_LOI_LABEL = 'Additional 25 Acres - LOI Received'

const DEFAULT_ADDITIONAL_25_ACRES_LOI_TEXT =
  'offer is for a distribution facility; price is $13/land sf and we countered with $14.5/land sf.'

const DEFAULT_DEL_VIA_SUMMARY_TEXT =
  'Occupancy 14.33% | Leased 19.21%; Market Rent: $2.19/sf | $1,796/unit; Concession: 6-10 weeks free (12.5% to 20.8% off)'

export default function InvestmentThesis({
  anchors,
  landSalesExtraItems,
  retailUpdateContent,
  showMasterPlanHeading = true,
  amazonSectionTitle = 'Amazon',
  amazonHeroImage = amazonImage,
  amazonHeroAlt = 'Amazon',
  debtMapTone = 'primary',
  debtMapTitle,
  debtMapPrimaryImage = debtMapImage,
  debtMapPrimaryAlt = 'Debt Map',
  debtMapSecondaryImage = debtAfterAmazonSaleImage,
  debtMapSecondaryAlt = 'Debt after Amazon Sale',
  debtMapSecondaryPlacement = 'sameBox',
  debtMapSecondaryTitle,
  debtMapSecondaryContent,
  debtMapSecondaryContentPadding = true,
  underContract53AcresText = DEFAULT_UNDER_CONTRACT_53_ACRES_TEXT,
  additional25AcresLoiLabel = DEFAULT_ADDITIONAL_25_ACRES_LOI_LABEL,
  additional25AcresLoiText = DEFAULT_ADDITIONAL_25_ACRES_LOI_TEXT,
  delViaSummaryText = DEFAULT_DEL_VIA_SUMMARY_TEXT,
}: InvestmentThesisProps) {
  const debtHeadingClassName =
    debtMapTone === 'neutral'
      ? 'text-gray-900 text-lg mb-5 font-semibold tracking-wide text-center'
      : 'text-primary-500 text-lg mb-5 font-bold uppercase tracking-wide text-center'

  const debtBoxClassName =
    debtMapTone === 'neutral'
      ? 'bg-white border border-gray-200 p-0 shadow-sm mb-8 sm:mb-10 md:mb-12'
      : 'bg-white border-2 border-primary-500 p-0 shadow-lg mb-8 sm:mb-10 md:mb-12'

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      {anchors?.overviewId ? <div id={anchors.overviewId} className="scroll-mt-24" /> : null}
      <h3 className="section-title">Overview</h3>
      
      <ul className="overview-list text-base sm:text-lg leading-relaxed mb-6 sm:mb-7 text-gray-700 pl-4 sm:pl-5 space-y-4 sm:space-y-5">
        <li>
          <strong>Potential Land Sales</strong>
          <ul className="list-disc list-inside mt-2 space-y-3 ml-6">
            <li>
              <strong>Amazon:</strong>
              <ul className="list-none mt-2 space-y-2 ml-6">
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">▶</span>
                  <span>
                    <strong>Under Contract (53 Acres):</strong>{' '}
                    {underContract53AcresText}
                  </span>
                </li>
                <li className="flex">
                  <span className="bullet-arrow mr-2 text-primary-500 font-bold">▶</span>
                  <span>
                    <strong>{additional25AcresLoiLabel}:</strong>{' '}
                    {additional25AcresLoiText}
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <strong>Austin Energy Substation (7 Acres and 7 acres of Easement):</strong> We are awaiting final substation design which is dependent on the adjacent landowner (Austin Community College) to finalize the transmission route. The final transmission route is needed in order to finalize the substation design. We have executed a permission to survey the property once the substation design is finalized, this will officially kick off the appraisals process. Estimated closing time is Q4 2026.
            </li>
            {landSalesExtraItems}
          </ul>
        </li>
        <li>
          <strong>Retail Update</strong>
          {retailUpdateContent ? (
            retailUpdateContent
          ) : (
            <ul className="list-disc list-inside mt-2 space-y-3 ml-6">
              <li>
                <strong>Block 2 Retail:</strong> Site is shovel ready and we are negotiating with Shiner Smokehouse, a smoked meat and live music concept from Shiner, TX, to replace Portllo&apos;s. We are also negotiating terms with a few other potential tenants for the 22,000 inline space. The construction lender is ready to close, and the equity raise is advancing with two groups in active discussions.
              </li>
              <li>
                <strong>Other Site Retail:</strong> Continuing conversations with a C-store/gas station concept and hotel operator for Block 1 (HEB). Conversations ongoing with other activator tenants, including pickleball, spas, MLB, brewery/bar, BBQ, etc.
              </li>
              <li>
                <strong>New Leasing Agent:</strong> We're hoping to bring on a new leasing agent for the site in early 2026.
              </li>
            </ul>
          )}
        </li>
        <li>
          <strong>Retail Core & Master Plan:</strong> Design and permitting for the Retail Core are progressing as planned. We remain on track with the site plan review process, and permits are expected by April 2026.
        </li>
        <li>
          <strong>Del Via:</strong> {delViaSummaryText}
        </li>
      </ul>
      
      {anchors?.landSalesId ? <div id={anchors.landSalesId} className="scroll-mt-24" /> : null}
      <h3 className="section-title">{amazonSectionTitle}</h3>
      <ChartContainer className="mb-8 sm:mb-10 md:mb-12">
        <Image
          src={amazonHeroImage}
          alt={amazonHeroAlt}
          sizes={FULL_WIDTH_SIZES}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </ChartContainer>
      
      {debtMapTitle ? (
        <h4 className={debtHeadingClassName}>{debtMapTitle}</h4>
      ) : null}

      {debtMapSecondaryImage && debtMapSecondaryPlacement === 'sameBox' ? (
        <div className={debtBoxClassName}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative w-full">
              <Image
                src={debtMapPrimaryImage}
                alt={debtMapPrimaryAlt}
                sizes={FULL_WIDTH_SIZES}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative w-full">
              <Image
                src={debtMapSecondaryImage}
                alt={debtMapSecondaryAlt}
                sizes={FULL_WIDTH_SIZES}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={debtBoxClassName}>
            <div className="relative w-full">
              <Image
                src={debtMapPrimaryImage}
                alt={debtMapPrimaryAlt}
                sizes={FULL_WIDTH_SIZES}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {debtMapSecondaryImage ? (
            <>
              {debtMapSecondaryTitle ? (
                <h4 className={debtHeadingClassName}>{debtMapSecondaryTitle}</h4>
              ) : null}
              <div className={debtBoxClassName}>
                {debtMapSecondaryContent ? (
                  debtMapSecondaryContentPadding ? (
                    <div className="p-4 sm:p-6 md:p-8">{debtMapSecondaryContent}</div>
                  ) : (
                    debtMapSecondaryContent
                  )
                ) : (
                  <div className="relative w-full">
                    <Image
                      src={debtMapSecondaryImage}
                      alt={debtMapSecondaryAlt}
                      sizes={FULL_WIDTH_SIZES}
                      className="h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </>
          ) : null}
        </>
      )}
      
      {anchors?.block2RetailId ? <div id={anchors.block2RetailId} className="scroll-mt-24" /> : null}
      <Block2Retail />
      
      {showMasterPlanHeading ? (
        <h3 className="section-title mt-8 sm:mt-10 md:mt-12">Master Plan</h3>
      ) : null}
    </section>
  )
}
