import fs from 'fs'
import path from 'path'

export type MilestoneStatus = 'pending' | 'in_progress' | 'complete'

export type Milestone = {
  label: string
  date: string
  status: MilestoneStatus
}

export type Visual = {
  title: string
  image: string
  caption: string
}

export type StatusSnapshot = {
  title: string
  items: string[]
}

export type Section = {
  title: string
  statusSnapshot?: StatusSnapshot
  commentary?: string[]
  visuals?: Visual[]
}

export type UpdateContent = {
  slug: string
  meta: {
    title: string
    month: string
    status: string
    scenario?: string
    lastUpdated: string
  }
  execSnapshot: string[]
  kpis: Record<string, number>
  milestones: Milestone[]
  overview: {
    summary: string[]
    details: string[]
  }
  sections: {
    landSales: Section
    retail: Section
    multifamily: Section
  }
  risks: string[]
  appendix?: string[]
}

const CONTENT_DIR = path.join(process.cwd(), 'content')

function readJson(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content)
}

export function loadUpdate(slug: string): UpdateContent | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  const data = readJson(filePath)
  return { ...data, slug }
}

export function loadAllUpdates(): UpdateContent[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith('.json'))
  const updates = files.map((file) => {
    const slug = path.basename(file, '.json')
    const data = readJson(path.join(CONTENT_DIR, file))
    return { ...data, slug } as UpdateContent
  })

  // Sort by lastUpdated desc
  return updates.sort(
    (a, b) => new Date(b.meta.lastUpdated).getTime() - new Date(a.meta.lastUpdated).getTime()
  )
}

export function latestUpdate(): UpdateContent | null {
  const updates = loadAllUpdates()
  return updates[0] ?? null
}
