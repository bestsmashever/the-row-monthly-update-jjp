import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { currentRelease } from '@/content/releases'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Row – Monthly Updates',
  description: 'Latest and archived monthly updates for The Row with auditable, content-driven snapshots.',
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
