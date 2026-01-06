import type { Milestone } from '@/lib/updates'

const statusStyles: Record<Milestone['status'], string> = {
  pending: 'bg-gray-100 text-gray-700 border border-gray-200',
  in_progress: 'bg-amber-100 text-amber-800 border border-amber-200',
  complete: 'bg-green-100 text-green-800 border border-green-200',
}

const statusLabels: Record<Milestone['status'], string> = {
  pending: 'Pending',
  in_progress: 'In progress',
  complete: 'Complete',
}

type MilestoneListProps = {
  milestones: Milestone[]
}

export default function MilestoneList({ milestones }: MilestoneListProps) {
  if (!milestones.length) return null

  return (
    <section className="mb-6 sm:mb-8">
      <div className="bg-white border-2 border-primary-500 rounded-xl shadow-lg p-5 sm:p-6">
        <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold mb-3">
          Milestones
        </p>
        <div className="space-y-3">
          {milestones.map((milestone) => (
            <div
              key={`${milestone.label}-${milestone.date}`}
              className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900">{milestone.label}</p>
                <p className="text-xs text-gray-600">
                  {new Date(milestone.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[milestone.status]}`}
              >
                {statusLabels[milestone.status]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
