import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { currentRelease } from '@/content/releases'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${currentRelease.title} - ${currentRelease.monthLabel}`,
  description: currentRelease.summary,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
