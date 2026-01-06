import type { Release, ReleaseStatus } from '@/content/releases'

type ReleaseGovernanceProps = {
  currentRelease: Release
  previousRelease?: Release
  releases: Release[]
}

const statusStyles: Record<ReleaseStatus, string> = {
  complete: 'bg-green-100 text-green-700 ring-1 ring-green-500/30',
  in_progress: 'bg-amber-100 text-amber-700 ring-1 ring-amber-500/30',
  pending: 'bg-gray-100 text-gray-700 ring-1 ring-gray-400/30',
}

const statusLabels: Record<ReleaseStatus, string> = {
  complete: 'Complete',
  in_progress: 'In progress',
  pending: 'Pending',
}

function formatDate(date: string | undefined) {
  if (!date) return ''
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function ReleaseGovernance({
  currentRelease,
  previousRelease,
  releases,
}: ReleaseGovernanceProps) {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 bg-white border-2 border-primary-500 shadow-lg rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-500 font-semibold">
                Monthly Release Control
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {currentRelease.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {currentRelease.monthLabel} • Version {currentRelease.slug}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 text-primary-700 px-4 py-2 text-sm font-semibold border border-primary-100">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                Current
              </span>
              {previousRelease ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-700 px-3 py-1.5 text-sm font-semibold border border-gray-200">
                  Prev: {previousRelease.slug}
                </span>
              ) : null}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-lg border border-gray-200 bg-gray-50">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                Release Summary
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                {currentRelease.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Published
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {formatDate(currentRelease.publishedAt)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Cadence
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    Monthly (auditable)
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Owner
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {currentRelease.owner}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-lg border border-gray-200 bg-gray-50">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-3">
                Audit & Readiness
              </p>
              <div className="space-y-3">
                {currentRelease.auditCheckpoints.map((checkpoint) => (
                  <div
                    key={checkpoint.label}
                    className="flex items-start gap-3 rounded-lg bg-white border border-gray-200 p-3 shadow-sm"
                  >
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[checkpoint.status]}`}
                    >
                      {statusLabels[checkpoint.status]}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 leading-tight">
                        {checkpoint.label}
                      </p>
                      <p className="text-xs text-gray-600">
                        Owner: {checkpoint.owner}
                        {checkpoint.date ? ` • ${formatDate(checkpoint.date)}` : ''}
                      </p>
                      {checkpoint.notes ? (
                        <p className="text-xs text-gray-700 mt-1">{checkpoint.notes}</p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-primary-500 shadow-lg rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">
                Change Tracking
              </p>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                Current vs Previous
              </h4>
              {previousRelease ? (
                <p className="text-xs text-gray-600">
                  Compared to {previousRelease.monthLabel} ({previousRelease.slug})
                </p>
              ) : null}
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-700 px-3 py-1.5 text-xs font-semibold border border-gray-200">
              Rollback ready
            </span>
          </div>
          <ul className="list-none space-y-2">
            {currentRelease.changesSincePrevious.map((change) => (
              <li key={change} className="flex gap-2 text-sm text-gray-800">
                <span className="text-primary-500 font-bold">•</span>
                <span>{change}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
              Rollback Plan
            </p>
            <p className="text-sm text-gray-800 leading-relaxed">
              {currentRelease.rollbackPlan}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-white border-2 border-primary-500 shadow-lg rounded-xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">
              Release History
            </p>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
              Traceable monthly snapshots
            </h4>
            <p className="text-sm text-gray-600">
              Every version remains viewable, comparable, and recoverable.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 text-primary-700 px-4 py-2 text-sm font-semibold border border-primary-100">
            {releases.length} recorded versions
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {releases.map((release) => (
            <div
              key={release.slug}
              className="relative rounded-xl border border-gray-200 p-4 sm:p-5 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                    {release.slug}
                  </p>
                  <h5 className="text-lg font-bold text-gray-900">{release.monthLabel}</h5>
                  <p className="text-xs text-gray-600">{formatDate(release.publishedAt)}</p>
                </div>
                {release.slug === currentRelease.slug ? (
                  <span className="px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold">
                    Current
                  </span>
                ) : null}
              </div>
              <p className="text-sm text-gray-800 mt-3 leading-relaxed">
                {release.summary}
              </p>
              <div className="mt-3">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                  Highlights
                </p>
                <ul className="list-none space-y-1">
                  {release.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-gray-800">
                      <span className="text-primary-500 font-bold">•</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
