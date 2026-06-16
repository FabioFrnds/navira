'use client'

import Image from 'next/image'
import Link from 'next/link'

import { SecondaryButton } from '@/src/components/ui/secondary-button'
import { GhostButton } from '@/src/components/ui/ghost-button'

const navigation = [
  {
    label: 'À propos',
    href: '#about',
  },
  {
    label: 'Simulation',
    href: '#simulation',
  },
  {
    label: 'Tarification',
    href: '#pricing',
  },
]

export default function Navbar() {
  return (
    <header
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-6xl z-50

        bg-white/80
        backdrop-blur-xl

        border border-(--border)
        rounded-2xl

        shadow-soft
      "
    >
      <div className="flex items-center justify-between h-20 px-6">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center shrink-0"
        >
          <Image
            src="/navira-logo.png"
            alt="Navira"
            width={120}
            height={60}
            className="w-32 h-auto"
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-(--text-muted)">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                relative group

                transition-colors duration-300
                hover:text-(--primary)
              "
            >
              {item.label}

              <span
                className="
                  absolute left-0 -bottom-1
                  h-px w-0

                  bg-[linear-gradient(to_right,transparent,var(--accent),transparent)]

                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2.5">

          <div className="hidden sm:block">
            <GhostButton>
              Se connecter
            </GhostButton>
          </div>

          <SecondaryButton>
            Créer un compte
          </SecondaryButton>

        </div>

      </div>
    </header>
  )
}