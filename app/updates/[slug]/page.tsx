import { notFound } from 'next/navigation'
import ExecutiveSnapshot from '@/components/ExecutiveSnapshot'
import KpiStrip from '@/components/KpiStrip'
import MilestoneList from '@/components/MilestoneList'
import RiskCard from '@/components/RiskCard'
import UpdateCard from '@/components/UpdateCard'
import { loadUpdate, loadAllUpdates } from '@/lib/updates'

type UpdatePageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  const updates = loadAllUpdates()
  return updates.map((update) => ({ slug: update.slug }))
}

export default function UpdatePage({ params }: UpdatePageProps) {
  const update = loadUpdate(params.slug)
  if (!update) return notFound()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <header className="mb-6 sm:mb-8">
          <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">
            {update.meta.title}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {update.meta.month}
            </h1>
            <span className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 px-3 py-1 text-xs font-semibold border border-primary-100">
              {update.meta.status}
            </span>
            {update.meta.scenario ? (
              <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-semibold border border-gray-200">
                {update.meta.scenario}
              </span>
            ) : null}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Last updated {new Date(update.meta.lastUpdated).toLocaleDateString()}
          </p>
        </header>

        <ExecutiveSnapshot title={`${update.meta.month} – Key Takeaways`} items={update.execSnapshot} />

        <KpiStrip kpis={update.kpis} />

        <MilestoneList milestones={update.milestones} />

        <section className="mb-6 sm:mb-8">
          <h3 className="section-title">Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white border-2 border-primary-500 shadow-lg rounded-lg p-5 sm:p-6">
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="text-lg">🔹</span> Summary
              </p>
              <ul className="list-none mt-3 space-y-2 text-base sm:text-lg text-gray-800">
                {update.overview.summary.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-primary-500 shadow-lg rounded-lg p-5 sm:p-6">
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="text-lg">🔹</span> Details
              </p>
              <ul className="list-none mt-3 space-y-2 text-base sm:text-lg text-gray-800">
                {update.overview.details.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="space-y-6 sm:space-y-8">
          <UpdateCard section={update.sections.landSales} />
          <UpdateCard section={update.sections.retail} />
          <UpdateCard section={update.sections.multifamily} />
        </div>

        <RiskCard risks={update.risks} />

        {update.appendix && update.appendix.length ? (
          <section className="mt-8 sm:mt-10 md:mt-12">
            <h3 className="section-title">Regional &amp; Macro Context (Appendix)</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-3">
              Provided as regional context; not directly tied to current underwriting assumptions.
            </p>
            <ul className="list-none space-y-2 text-sm sm:text-base text-gray-800 leading-relaxed">
              {update.appendix.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  )
}
