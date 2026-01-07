import { redirect } from 'next/navigation'

import { LATEST_UPDATE } from '@/constants/monthlyUpdates'

export default function Home() {
  redirect(LATEST_UPDATE.href)
}
