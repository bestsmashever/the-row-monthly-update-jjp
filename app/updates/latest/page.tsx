import { redirect } from 'next/navigation'
import { latestUpdate } from '@/lib/updates'

export default function LatestUpdateRedirect() {
  const latest = latestUpdate()
  if (latest) {
    redirect(`/updates/${latest.slug}`)
  }
  redirect('/updates')
}
