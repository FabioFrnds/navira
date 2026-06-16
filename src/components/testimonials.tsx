'use client'

import Image from 'next/image'
import { PrimaryButton } from '@/src/components/ui/primary-button'

const testimonials = [
  {
    name: 'David R.',
    role: 'Développeur freelance • Dubaï',
    image: '/alexandre.png',
    quote:
      "Je pensais déménager au Portugal. Une fois intégrés les impôts, le coût du logement et la fiscalité de ma société, Navira a montré plus de 210 000 € d'écart patrimonial avec Dubaï sur 15 ans."
  },
  {
    name: 'Julie D.',
    role: 'Consultante en stratégie • Suisse',
    image: '/sarah.png',
    quote:
      "Les écoles internationales représentaient près de 18 000 € par an de différence entre deux destinations. Je n'avais jamais intégré ce paramètre dans mes calculs."
  },
  {
    name: 'Nicolas B.',
    role: 'Entrepreneur • Maurice',
    image: '/thomas.png',
    quote:
      "Comparer Maurice, Dubaï et Singapour avec exactement les mêmes critères m'a permis d'identifier la destination offrant le meilleur équilibre entre fiscalité, climat et qualité de vie."
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-blue-zone overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Retours utilisateurs
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary)">
            Ils ont pris leur décision avec confiance
          </h2>

          <p className="mt-5 text-lg text-(--text-muted)">
            Comprendre l'impact réel d'une expatriation sur son patrimoine, sa fiscalité et sa qualité de vie permet de décider avec confiance et d'éviter des erreurs qui peuvent coûter des dizaines de milliers d'euros.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-(--text-muted)">
            <div className="flex items-center gap-1 text-(--accent)">
              ★★★★★
            </div>

            <span>4,9/5 basé sur des centaines d'expatriés accompagnés dans leur réflexion</span>
          </div>
        </div>

        {/* AVIS */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="navira-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(11,31,59,0.10)]"
            >
              <div className="text-(--accent) text-3xl leading-none mb-5">
                “
              </div>

              <p className="text-sm text-(--text-muted) leading-relaxed">
                {t.quote}
              </p>

              <div className="mt-6 pt-5 border-t border-(--border)">
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="
                      rounded-full
                      object-cover
                      border-2
                      border-white
                      shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                    "
                  />

                  <div>
                    <p className="font-semibold text-(--primary)">
                      {t.name}
                    </p>

                    <p className="text-xs text-(--text-muted)">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <PrimaryButton>
            Tester ma situation
          </PrimaryButton>

          <p className="mt-4 text-xs text-(--text-muted)">
            Résultat en moins de 2 minutes
          </p>
        </div>
      </div>
    </section>
  )
}