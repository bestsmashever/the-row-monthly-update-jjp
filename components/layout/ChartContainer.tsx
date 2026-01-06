import type { ReactNode } from 'react'

type ChartContainerProps = {
  children: ReactNode
  title?: string
  className?: string
}

export default function ChartContainer({ children, title, className }: ChartContainerProps) {
  const containerClasses = ['chart-container', className].filter(Boolean).join(' ')

  return (
    <div className={containerClasses}>
      {title ? <h4>{title}</h4> : null}
      {children}
    </div>
  )
}
