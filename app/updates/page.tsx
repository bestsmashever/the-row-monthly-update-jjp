import Link from 'next/link'
import { loadAllUpdates } from '@/lib/updates'

export default function UpdatesIndex() {
  const updates = loadAllUpdates()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Monthly Updates</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Browse current and archived monthly snapshots. Each entry is an immutable content file and
          can be rolled back or compared across versions.
        </p>

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Month
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Last Updated
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {updates.map((update, index) => (
                <tr key={update.slug} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                    {update.meta.month}
                    {index === 0 ? (
                      <span className="ml-2 inline-flex items-center rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary-700 border border-primary-100">
                        Latest
                      </span>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">{update.meta.status}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {new Date(update.meta.lastUpdated).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <Link
                      href={`/updates/${update.slug}`}
                      className="text-primary-600 font-semibold hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
