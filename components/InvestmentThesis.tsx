'use client'

import Image from 'next/image'
import type { ImageProps } from 'next/image'
import Block2Retail from '@/components/Block2Retail'
import { FULL_WIDTH_SIZES } from '@/constants/media'
import ChartContainer from '@/components/layout/ChartContainer'
import amazonImage from '@/public/Amazon.jpg'
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
  debtMapPrimaryTitle?: string
  debtMapPrimaryImage?: ImageProps['src']
  debtMapPrimaryAlt?: string
  debtMapSequenceContent?: React.ReactNode
  debtMapSecondaryImage?: ImageProps['src']
  debtMapSecondaryAlt?: string
  debtMapSecondaryPlacement?: 'sameBox' | 'nextBox'
  debtMapSecondaryTitle?: string
  debtMapSecondaryContent?: React.ReactNode
  debtMapSecondaryContentPadding?: boolean
  underContract53AcresLabel?: string
  underContract53AcresText?: React.ReactNode
  additional25AcresLoiLabel?: string
  additional25AcresLoiText?: string
  delViaSummaryText?: string
  delViaSummaryLabel?: string
  austinEnergySubstationText?: React.ReactNode
  austinEnergySubstationSuffix?: string
  retailCoreMasterPlanContent?: React.ReactNode
  block2RetailImages?: Array<{
    alt: string
    src: ImageProps['src']
  }>
  block2RetailTitle?: string
}

const DEFAULT_UNDER_CONTRACT_53_ACRES_TEXT =
  "PSA executed with due diligence in progress and the end user's site plan under review. The preliminary plan has been formally submitted; targeting 3/27/2026 for non-refundable status and 6/30/2026 for prelim plan approval to enable closing."

const DEFAULT_UNDER_CONTRACT_53_ACRES_LABEL = 'Under Contract (53 Acres)'

const DEFAULT_ADDITIONAL_25_ACRES_LOI_LABEL = 'Additional 25 Acres - LOI Received'

const DEFAULT_ADDITIONAL_25_ACRES_LOI_TEXT =
  'offer is for a distribution facility; price is $13/land sf and we countered with $14.5/land sf.'

const DEFAULT_DEL_VIA_SUMMARY_TEXT =
  'Occupancy 14.33% | Leased 19.21%; Market Rent: $2.19/sf | $1,796/unit; Concession: 6-10 weeks free (12.5% to 20.8% off)'

const DEFAULT_AUSTIN_ENERGY_SUBSTATION_SUFFIX = ' Estimated closing time is Q2 2027.'

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
  debtMapPrimaryTitle,
  debtMapPrimaryImage = debtMapImage,
  debtMapPrimaryAlt = 'Debt Map',
  debtMapSequenceContent,
  debtMapSecondaryImage,
  debtMapSecondaryAlt = 'Debt after Amazon Sale',
  debtMapSecondaryPlacement = 'sameBox',
  debtMapSecondaryTitle,
  debtMapSecondaryContent,
  debtMapSecondaryContentPadding = true,
  underContract53AcresLabel = DEFAULT_UNDER_CONTRACT_53_ACRES_LABEL,
  underContract53AcresText = DEFAULT_UNDER_CONTRACT_53_ACRES_TEXT,
  additional25AcresLoiLabel = DEFAULT_ADDITIONAL_25_ACRES_LOI_LABEL,
  additional25AcresLoiText = DEFAULT_ADDITIONAL_25_ACRES_LOI_TEXT,
  delViaSummaryText = DEFAULT_DEL_VIA_SUMMARY_TEXT,
  delViaSummaryLabel = 'Del Via',
  austinEnergySubstationText,
  austinEnergySubstationSuffix = DEFAULT_AUSTIN_ENERGY_SUBSTATION_SUFFIX,
  retailCoreMasterPlanContent,
  block2RetailImages,
  block2RetailTitle,
}: InvestmentThesisProps) {
  const debtHeadingClassName =
    debtMapTone === 'neutral'
      ? 'report-subtitle'
      : 'text-primary-500 text-lg mb-5 font-bold uppercase tracking-wide text-center'

  const debtBoxClassName =
    debtMapTone === 'neutral'
      ? 'report-media-frame mb-8 sm:mb-10 md:mb-12'
      : 'bg-white border-2 border-primary-500 p-0 shadow-lg mb-8 sm:mb-10 md:mb-12'
  const delViaSummaryPrefix = delViaSummaryLabel.endsWith(' ')
    ? delViaSummaryLabel.trimEnd()
    : `${delViaSummaryLabel}:`

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      {anchors?.overviewId ? <div id={anchors.overviewId} className="scroll-mt-24" /> : null}
      <h3 className="section-title">Overview</h3>
      
      <div className="report-panel report-copy-block">
        <ul className="overview-list text-base sm:text-lg leading-relaxed text-gray-700 pl-4 sm:pl-5 space-y-4 sm:space-y-5">
          <li>
            <strong>Potential Land Sales</strong>
            <ul className="overview-section-list mt-2 space-y-3">
              <li>
                <strong>Amazon:</strong>
                <ul className="overview-depth-block mt-2 space-y-2">
                  <li>
                    <strong>{underContract53AcresLabel}:</strong>{' '}
                    {underContract53AcresText}
                  </li>
                  <li>
                    <strong>{additional25AcresLoiLabel}:</strong>{' '}
                    {additional25AcresLoiText}
                  </li>
                </ul>
              </li>
              <li>
                <strong>Austin Energy Substation (7 Acres and 7 acres of Easement):</strong>{' '}
                {austinEnergySubstationText ?? (
                  <>
                    Austin Energy is reviewing the survey exhibits for final approval
                    to kick start the 3rd party appraisals.
                    {austinEnergySubstationSuffix}
                  </>
                )}
              </li>
              {landSalesExtraItems}
            </ul>
          </li>
          <li>
            <strong>Retail Update</strong>
            {retailUpdateContent ? (
              retailUpdateContent
            ) : (
              <ul className="overview-section-list mt-2 space-y-3">
                <li>
                  <strong>Block 2 Retail:</strong> Site is shovel ready and we are
                  talking with Starbucks, Pluckers, and a local coffee/cocktail
                  concept to replace Portllo&apos;s as the pad user. We are also
                  negotiating terms with a few other potential tenants for the
                  22,000 inline space. Sunflower, lender, is reapproving the deal,
                  and XL funding is committed to $4M out of the total $5.5M equity
                  required.
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
            {retailCoreMasterPlanContent ?? (
              <>
                <strong>Retail Core & Master Plan:</strong> Site development permits are
                informally approved in April 2026.
              </>
            )}
          </li>
          <li>
            <strong>{delViaSummaryPrefix}</strong> {delViaSummaryText}
          </li>
        </ul>
      </div>
      
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
          {debtMapPrimaryTitle ? (
            <h4 className={debtHeadingClassName}>{debtMapPrimaryTitle}</h4>
          ) : null}
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

          {debtMapSequenceContent}

          {debtMapSecondaryImage || debtMapSecondaryContent ? (
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
                ) : debtMapSecondaryImage ? (
                  <div className="relative w-full">
                    <Image
                      src={debtMapSecondaryImage}
                      alt={debtMapSecondaryAlt}
                      sizes={FULL_WIDTH_SIZES}
                      className="h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>
            </>
          ) : null}
        </>
      )}
      
      {anchors?.block2RetailId ? <div id={anchors.block2RetailId} className="scroll-mt-24" /> : null}
      <Block2Retail additionalImages={block2RetailImages} title={block2RetailTitle} />
      
      {showMasterPlanHeading ? (
        <h3 className="section-title mt-8 sm:mt-10 md:mt-12">Master Plan</h3>
      ) : null}
    </section>
  )
}
