import { Lexend_Mega, Lexend_Exa } from 'next/font/google'
import clsx from 'clsx'

import './globals.css'

const lexendExa = Lexend_Exa({ subsets: ['latin'] })

export const metadata = {
  title: 'Pxelize: Designing software with purpose',
  description: 'We are a design-driven software development studio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(['scrollbar scrollbar-medium scrollbar-thumb-zinc-800 scrollbar-track-zinc-900', lexendExa.className])}>
        {children}
      </body>
    </html>
  )
}
