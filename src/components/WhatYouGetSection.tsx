'use client'

export default function WhatYouGetSection() {
  return (
    <section className="relative w-full py-28">

      {/* BACKGROUND */}
      <div className="navira-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--primary) leading-tight">
            Ce que Navira vous permet de comprendre
          </h2>

          <p className="mt-6 text-lg text-(--text-muted)">
            Plus qu’un outil, Navira transforme vos décisions de vie en projections financières lisibles et comparables.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">

          {/* 1 */}
          <div className="navira-card p-6">
            <h3 className="text-xl font-bold text-(--primary)">
              📊 Une vision claire de votre avenir
            </h3>

            <p className="mt-4 text-sm text-(--text-muted)">
              Visualisez votre patrimoine à 5, 10 et 20 ans selon différents pays et scénarios de vie.
            </p>
          </div>

          {/* 2 */}
          <div className="navira-card p-6">
            <h3 className="text-xl font-bold text-(--primary)">
              🌍 Une comparaison réelle des pays
            </h3>

            <p className="mt-4 text-sm text-(--text-muted)">
              France, Portugal, Maurice, Dubaï… comprenez l’impact concret de chaque environnement sur votre vie financière.
            </p>
          </div>

          {/* 3 */}
          <div className="navira-card p-6">
            <h3 className="text-xl font-bold text-(--primary)">
              ⚖️ Des décisions plus rationnelles
            </h3>

            <p className="mt-4 text-sm text-(--text-muted)">
              Remplacez les intuitions et opinions par des projections structurées basées sur des données publiques.
            </p>
          </div>

        </div>

        {/* BOTTOM CTA BLOCK */}
        <div className="mt-14 navira-card p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-2xl font-bold text-(--primary)">
              Prêt à voir votre trajectoire ?
            </h3>

            <p className="mt-2 text-sm text-(--text-muted)">
              Lancez une simulation personnalisée en moins de 2 minutes.
            </p>
          </div>

          <button className="px-6 py-3 rounded-xl bg-(--primary) text-white font-semibold hover:opacity-90 transition">
            Lancer une simulation
          </button>

        </div>

      </div>
    </section>
  )
}