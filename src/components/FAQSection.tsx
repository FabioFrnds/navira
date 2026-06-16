'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Est-ce un conseil financier ?',
    answer:
      "Non. Navira fournit des simulations basées sur des données publiques et des hypothèses explicites. Il ne s’agit pas de conseils financiers, fiscaux ou juridiques.",
  },
  {
    question: 'Les données sont-elles fiables ?',
    answer:
      'Oui. Les modèles utilisent des données publiques (fiscalité, coût de la vie, indicateurs économiques) mises à jour régulièrement.',
  },
  {
    question: 'Est-ce personnalisé ?',
    answer:
      'Oui. Chaque simulation est adaptée à votre profil, vos revenus, votre patrimoine, vos objectifs et votre horizon temporel.',
  },
  {
    question: 'Puis-je modifier mes scénarios ?',
    answer:
      'Oui. Vous pouvez comparer plusieurs pays, revenus et styles de vie afin de mesurer leur impact sur votre trajectoire.',
  },
  {
    question: 'Pourquoi payer pour Navira ?',
    answer:
      'Parce qu’une décision d’expatriation mérite une analyse structurée plutôt qu’une estimation approximative.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-28 bg-surface overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.06),transparent_55%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Questions fréquentes
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary)">
            Vous avez des questions ?
          </h2>

          <p className="mt-5 text-(--text-muted)">
            Voici les réponses aux interrogations les plus fréquentes concernant
            les simulations et le fonctionnement de Navira.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="mt-14 space-y-4">

          {faqItems.map((item, index) => {
            const isOpen = open === index

            return (
              <div
                key={item.question}
                className={`
                  navira-card
                  rounded-3xl
                  overflow-hidden
                  transition-all duration-300
                  border border-(--border)

                  hover:-translate-y-0.5
                  hover:border-(--accent)/25
                  hover:shadow-[0_15px_40px_rgba(11,31,59,0.08)]

                  ${isOpen ? 'border-(--accent)/30' : ''}
                `}
              >

                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="
                    w-full flex items-center justify-between
                    px-6 py-5 text-left
                    cursor-pointer
                  "
                  aria-expanded={isOpen}
                >
                  <span
                    className={`
                      text-base md:text-lg font-semibold
                      transition-colors duration-300
                      ${isOpen ? 'text-(--secondary)' : 'text-(--primary)'}
                    `}
                  >
                    {item.question}
                  </span>

                  <svg
                    className={`
                      h-5 w-5 text-(--accent)
                      transition-transform duration-300
                      ${isOpen ? 'rotate-180' : ''}
                    `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* ANSWER (smooth animation fix) */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2">
                      <div className="h-px bg-(--border) mb-4" />

                      <p className="text-sm leading-relaxed text-(--text-muted)">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}