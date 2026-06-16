'use client'

import { PrimaryButton } from '@/src/components/ui/primary-button'

export default function WhatYouGetSection() {
  return (
    <section className="relative py-28 bg-surface overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.06),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER (centré pour cohérence globale) */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Compréhension
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary) leading-tight">
            Ce que Navira vous permet de comprendre
          </h2>

          <p className="mt-5 text-lg text-(--text-muted)">
            Transformez vos décisions de vie en projections financières lisibles et comparables.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="navira-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,31,59,0.10)]">

            <p className="text-xs text-(--accent) uppercase tracking-widest font-semibold">
              Projection
            </p>

            <h3 className="mt-4 text-xl font-bold text-(--primary)">
              Une vision claire de votre avenir
            </h3>

            <p className="mt-4 text-sm text-(--text-muted) leading-relaxed">
              Visualisez votre patrimoine à 5, 10 et 20 ans selon différents pays et scénarios de vie.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="navira-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,31,59,0.10)]">

            <p className="text-xs text-(--accent) uppercase tracking-widest font-semibold">
              Comparaison
            </p>

            <h3 className="mt-4 text-xl font-bold text-(--primary)">
              Une lecture réelle des pays
            </h3>

            <p className="mt-4 text-sm text-(--text-muted) leading-relaxed">
              France, Portugal, Maurice, Dubaï… comparez l’impact réel de chaque environnement sur votre trajectoire.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="navira-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,31,59,0.10)]">

            <p className="text-xs text-(--accent) uppercase tracking-widest font-semibold">
              Décision
            </p>

            <h3 className="mt-4 text-xl font-bold text-(--primary)">
              Des décisions rationnelles
            </h3>

            <p className="mt-4 text-sm text-(--text-muted) leading-relaxed">
              Remplacez l’intuition par des projections structurées basées sur des données publiques.
            </p>

          </div>

        </div>

        {/* CTA BLOCK */}
        <div className="mt-16 navira-card p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">

            <h3 className="text-2xl font-bold text-(--primary)">
              Prêt à voir votre trajectoire ?
            </h3>

            <p className="mt-2 text-sm text-(--text-muted)">
              Lancez une simulation personnalisée en moins de 2 minutes.
            </p>

          </div>

          <PrimaryButton>
            Lancer une simulation
          </PrimaryButton>

        </div>

      </div>
    </section>
  )
}