import type { ReactNode } from 'react'

type ChartContainerProps = {
  children: ReactNode
  className?: string
}

export default function ChartContainer({ children, className }: ChartContainerProps) {
  const containerClasses = ['chart-container', className].filter(Boolean).join(' ')

  return (
    <div className={containerClasses}>{children}</div>
  )
}
