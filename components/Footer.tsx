import { currentRelease } from '@/content/releases'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white py-8 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold">
            Version {currentRelease.slug} • Published {formatDate(currentRelease.publishedAt)}
          </p>
          <p className="text-xs text-white/80">
            Auditable monthly release managed by {currentRelease.owner}. For prior versions, refer to the Release History section above.
          </p>
        </div>
      </div>
    </footer>
  )
}
