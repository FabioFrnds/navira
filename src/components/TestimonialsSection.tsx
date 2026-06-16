'use client'

import { PrimaryButton } from '@/src/components/ui/primary-button'

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-blue-zone overflow-hidden">

      {/* BACKGROUND (léger overlay déjà inclus dans bg-blue-zone) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Retours utilisateurs
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary)">
            Ils ont simulé leur trajectoire
          </h2>

          <p className="mt-5 text-lg text-(--text-muted)">
            Des décisions plus claires grâce à une lecture structurée de leur avenir financier.
          </p>

          {/* SOCIAL PROOF */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-(--text-muted)">

            <div className="flex items-center gap-1 text-(--accent)">
              ★★★★★
            </div>

            <span>4.9/5 basé sur +1 200 simulations</span>

          </div>

        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="navira-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(11,31,59,0.10)]">

            <div className="text-(--accent) text-3xl leading-none mb-5">“</div>

            <p className="text-sm text-(--text-muted) leading-relaxed">
              Je n’avais jamais vu mes choix de vie présentés de façon aussi structurée et lisible.
            </p>

            <div className="mt-6 pt-5 border-t border-(--border)">

              <p className="font-semibold text-(--primary)">
                Sarah L.
              </p>

              <p className="text-xs text-(--text-muted)">
                Consultante
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="navira-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(11,31,59,0.10)]">

            <div className="text-(--accent) text-3xl leading-none mb-5">“</div>

            <p className="text-sm text-(--text-muted) leading-relaxed">
              Je pensais rester en France, mais la simulation a montré un écart patrimonial énorme sur 20 ans.
            </p>

            <div className="mt-6 pt-5 border-t border-(--border)">

              <p className="font-semibold text-(--primary)">
                Alexandre M.
              </p>

              <p className="text-xs text-(--text-muted)">
                Freelance
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="navira-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(11,31,59,0.10)]">

            <div className="text-(--accent) text-3xl leading-none mb-5">“</div>

            <p className="text-sm text-(--text-muted) leading-relaxed">
              Portugal vs Maurice comparé sur revenus et fiscalité : la décision est devenue évidente.
            </p>

            <div className="mt-6 pt-5 border-t border-(--border)">

              <p className="font-semibold text-(--primary)">
                Thomas R.
              </p>

              <p className="text-xs text-(--text-muted)">
                Entrepreneur
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <PrimaryButton>
            Créer mon compte
          </PrimaryButton>

          <p className="mt-4 text-xs text-(--text-muted)">
            Résultat en moins de 2 minutes
          </p>

        </div>

      </div>
    </section>
  )
}