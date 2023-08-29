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
      <body className={inter.className}>
        {children}
        <div className='cprght-wrapper'>
          <span>&copy; {new Date().getUTCFullYear()} GW-Weather</span>
        </div>
      </body>
    </html>
  )
}
