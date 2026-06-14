'use client'

import { ReactNode } from 'react'

export function SecondaryButton({ children }: { children: ReactNode }) {
  return (
    <button
      className="
        relative group overflow-hidden
        h-14 px-6
        rounded-2xl

        font-semibold

        text-white

        bg-[linear-gradient(135deg,#6C5CE7,#1E4D8C)]
        shadow-soft

        transition-all duration-300
        hover:scale-[1.04]
        active:scale-[0.98]

        cursor-pointer
      "
    >
      {/* purple NAVIRA glow */}
      <span
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <span
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_30%_50%,rgba(108,92,231,0.28),transparent_65%)]
          "
        />
      </span>

      {/* softer shine than primary */}
      <span
        className="
          absolute inset-0
          -translate-x-full group-hover:translate-x-full
          transition-transform duration-700 ease-out
          bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.12),transparent)]
          skew-x-12
        "
      />

      {/* subtle separation line */}
      <span
        className="
          absolute top-0 left-0 right-0
          h-px
          bg-linear-to-r from-transparent via-white/15 to-transparent
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