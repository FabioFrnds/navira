'use client'

import Image from 'next/image'
import { PrimaryButton } from '@/src/components/ui/primary-button'
import { SecondaryButton } from '@/src/components/ui/secondary-button'

export default function Navbar() {
  return (
    <header
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-6xl z-50

        bg-white/90 backdrop-blur-xl
        border border-(--border)

        rounded-2xl
        shadow-lg
      "
    >
      <div className="flex items-center justify-between h-20 px-6">

        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/navira-logo.png"
            alt="Navira"
            width={120}
            height={60}
            className="w-32 h-auto"
          />
        </div>

        {/* LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-(--text-muted)">
          {['A propos', 'Simulation', 'Tarifs'].map((item) => (
            <a
              key={item}
              className="
                relative group cursor-pointer

                transition-colors duration-300
                hover:text-(--primary)
              "
            >
              {item}

              <span
                className="
                  absolute left-0 -bottom-1
                  h-px w-0
                  bg-[linear-gradient(to_right,transparent,var(--accent),transparent)]
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2.5">

          <div className="hidden sm:block">
  <SecondaryButton>
    Se connecter
  </SecondaryButton>
</div>

<div className="ml-1">
  <PrimaryButton>
    Créer un compte
  </PrimaryButton>
</div>

        </div>

      </div>
    </header>
  )
}