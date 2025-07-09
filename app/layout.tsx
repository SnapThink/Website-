import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SnapThink',
  description: 'Created with v0',
  generator: 'Snapthink',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-970 text-gray-150">{children}</body>
    </html>
  )
}
