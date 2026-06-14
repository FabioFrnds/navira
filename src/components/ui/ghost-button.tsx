'use client'

import { ReactNode } from 'react'

export function GhostButton({ children }: { children: ReactNode }) {
  return (
    <button
      className="
        relative group overflow-hidden
        h-14 px-6
        rounded-2xl

        font-semibold

        text-(--primary)

        bg-white/30
        border border-(--border)

        backdrop-blur-xl

        transition-all duration-300
        hover:bg-white/60
        hover:border-(--accent)/30
        hover:scale-[1.03]
        active:scale-[0.98]

        shadow-soft
        cursor-pointer
      "
    >
      {/* NAVIRA soft glow (ultra subtil, identité marque) */}
      <span
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-[radial-gradient(circle_at_30%_40%,rgba(108,92,231,0.14),transparent_70%)]
        "
      />

      {/* top highlight line (very SaaS premium touch) */}
      <span
        className="
          absolute top-0 left-0 right-0
          h-px
          bg-linear-to-r from-transparent via-(--accent)/30 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      {/* subtle inner depth */}
      <span
        className="
          absolute inset-0
          bg-linear-to-b from-white/10 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      <span className="relative z-10">
        {children}
      </span>
    </button>
  )
}