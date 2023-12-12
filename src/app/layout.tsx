import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "../components/header/index"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShotbyPraise Photography',
  description: 'ShotbyPraise Photography Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
