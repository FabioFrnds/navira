import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "Navira — Simulez votre futur financier",
  description:
    "Comparez votre futur dans plusieurs pays grâce à des simulations patrimoniales et financières.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} bg-[#F7F8FA] text-[#111827] antialiased`}
      >
        {/* BACKGROUND GLOBAL NAVIRA */}
        <div className="fixed inset-0 -z-10">
          
          {/* fond principal */}
          <div className="absolute inset-0 bg-[#F7F8FA]" />

          {/* glow bleu profond */}
          <div className="absolute top-50 left-1/2 -translate-x-1/2 h-150 w-150
            bg-[radial-gradient(circle_at_top,rgba(11,31,59,0.18),transparent_65%)]"
          />

          {/* accent violet subtil */}
          <div className="absolute bottom-50 right-50 h-125 w-125
            bg-[radial-gradient(circle_at_center,rgba(108,92,231,0.10),transparent_60%)]"
          />
        </div>

        {children}
      </body>
    </html>
  )
}