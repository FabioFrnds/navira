'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Les simulations sont-elles fiables ?',
    answer:
      "Les simulations combinent des données publiques (fiscalité, coût de la vie, indicateurs économiques) et des retours terrain de personnes installées sur place. Cela permet de refléter au mieux la réalité de chaque pays et de comparer des scénarios de façon cohérente.",
  },
  {
    question: 'Est-ce que Navira peut m’aider à éviter une mauvaise décision ?',
    answer:
      'Oui. Beaucoup de décisions d’expatriation sont prises sans vision complète des impacts financiers, ce qui peut représenter des écarts de plusieurs dizaines de milliers d’euros sur le long terme. Navira vous permet de comparer clairement les conséquences de chaque pays avant de vous engager.',
  },
  {
    question: 'Quelle est la différence avec un comparateur classique ?',
    answer:
      'Les comparateurs classiques se limitent souvent au coût de la vie et proposent une vision générique. Navira va plus loin en intégrant la fiscalité, le patrimoine et l’évolution de votre situation dans le temps, avec une approche plus proche de la réalité terrain et personnalisée à votre profil.',
  },
  {
    question: 'Est-ce que la simulation est adaptée à ma situation personnelle ?',
    answer:
      'Oui. Chaque simulation est personnalisée selon une multitude de critères : revenus, patrimoine, situation familiale et objectifs. Elle compare ces éléments avec les différents pays pour produire une analyse réellement adaptée à votre profil et à vos projets.',
  },
  {
    question: 'Pourquoi ne pas simplement faire mes recherches moi-même ?',
    answer:
      'Les informations existent, mais elles sont dispersées, techniques et difficiles à comparer entre pays. Navira les centralise, les structure et les actualise grâce à des retours terrain pour vous offrir une vision claire, fiable et exploitable en quelques minutes.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 bg-surface overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.06),transparent_55%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Questions fréquentes
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary)">
            Tout ce que vous devez savoir avant de prendre votre décision
          </h2>

          <p className="mt-5 text-lg text-(--text-muted)">
            Voici les réponses aux interrogations les plus fréquentes concernant l'outil Navira.
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