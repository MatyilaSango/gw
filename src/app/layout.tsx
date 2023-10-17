import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GW-Weather',
  description: 'Global weather application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="manifest"
          href="./manifest/manifest.json"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
