'use client'

import { PrimaryButton } from '@/src/components/ui/primary-button'
import { SecondaryButton } from '@/src/components/ui/secondary-button'
import { GhostButton } from '@/src/components/ui/ghost-button'

export default function PricingSection() {
  return (
    <section className="relative py-28 bg-soft-zone overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.05),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Tarification
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary)">
            Accédez à votre trajectoire complète
          </h2>

          <p className="mt-5 text-lg text-(--text-muted)">
            Une seule simulation peut transformer vos décisions financières et géographiques.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 items-stretch">

          {/* LEFT */}
          <div className="navira-card p-7 flex flex-col h-full transition hover:-translate-y-1">

            <div>

              <p className="text-xs text-(--text-muted) uppercase tracking-widest">
                Ponctuel
              </p>

              <h3 className="mt-3 text-2xl font-bold text-(--primary)">
                Rapport individuel
              </h3>

              <p className="mt-2 text-sm text-(--text-muted)">
                Une simulation complète exportée en PDF.
              </p>

              <p className="mt-6 text-3xl font-bold text-(--primary)">
                149€
              </p>

              <ul className="mt-6 space-y-2 text-sm text-(--text-muted)">
                <li>✔ Horizon 5 / 10 / 20 ans</li>
                <li>✔ Comparaison multi-pays</li>
                <li>✔ Export PDF</li>
              </ul>

            </div>

            <div className="mt-auto pt-8">
              <GhostButton>Créer un compte</GhostButton>
            </div>

          </div>

          {/* CENTER */}
          <div className="
            navira-card p-7 flex flex-col h-full
            border border-(--accent)/30
            shadow-soft
            relative
            hover:-translate-y-1
            transition
          ">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(108,92,231,0.10),transparent_60%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">

              <div>

                <div className="flex justify-between items-center">

                  <p className="text-xs text-(--accent) uppercase tracking-widest font-semibold">
                    Recommandé
                  </p>

                  <span className="text-xs px-2 py-1 rounded-full bg-(--accent)/10 text-(--accent)">
                    illimité
                  </span>

                </div>

                <h3 className="mt-3 text-2xl font-bold text-(--primary)">
                  Accès Navira Lifetime
                </h3>

                <p className="mt-2 text-sm text-(--text-muted)">
                  Toutes les simulations, tous les pays, mises à jour incluses.
                </p>

                <p className="mt-6 text-3xl font-bold text-(--accent)">
                  999€
                </p>

                <ul className="mt-6 space-y-2 text-sm text-(--text-muted)">
                  <li>✔ Simulations illimitées</li>
                  <li>✔ Tous les pays</li>
                  <li>✔ Rapports PDF illimités</li>
                  <li>✔ Mises à jour incluses</li>
                </ul>

              </div>

              <div className="mt-auto pt-8">
                <SecondaryButton>Créer un compte</SecondaryButton>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="navira-card p-7 flex flex-col h-full transition hover:-translate-y-1">

            <div>

              <p className="text-xs text-(--text-muted) uppercase tracking-widest">
                Accompagnement
              </p>

              <h3 className="mt-3 text-2xl font-bold text-(--primary)">
                Plan stratégique Maurice
              </h3>

              <p className="mt-2 text-sm text-(--text-muted)">
                Analyse + call + plan d’installation.
              </p>

              <p className="mt-6 text-3xl font-bold text-(--primary)">
                2 500€
              </p>

              <ul className="mt-6 space-y-2 text-sm text-(--text-muted)">
                <li>✔ Call stratégique</li>
                <li>✔ Plan d’expatriation</li>
                <li>✔ Checklist complète</li>
              </ul>

            </div>

            <div className="mt-auto pt-8">
              <PrimaryButton>Créer un compte</PrimaryButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}