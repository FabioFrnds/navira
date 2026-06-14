'use client'

export default function PricingSection() {
  return (
    <section className="relative w-full py-28">

      {/* BACKGROUND */}
      <div className="navira-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--primary)">
            Accédez à votre trajectoire complète
          </h2>

          <p className="mt-6 text-lg text-(--text-muted)">
            Une seule simulation peut changer vos décisions de vie.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">

          {/* REPORT */}
          <div className="navira-card p-7">
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
              <li>✔ Simulation 5 / 10 / 20 ans</li>
              <li>✔ Comparaison multi-pays</li>
              <li>✔ Export PDF</li>
            </ul>

            <button className="mt-6 w-full px-6 py-3 rounded-xl bg-(--primary) text-white font-semibold hover:opacity-90 transition">
              Générer un rapport
            </button>
          </div>

          {/* LIFETIME (HIGHLIGHT) */}
          <div className="navira-card p-7 border border-(--accent)/40 shadow-soft scale-[1.02]">

            <div className="flex justify-between items-center">
              <p className="text-xs text-(--accent) uppercase tracking-widest">
                Recommandé
              </p>

              <span className="text-xs px-2 py-1 rounded-full bg-(--accent)/10 text-(--accent)">
                accès illimité
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
              <li>✔ Futures mises à jour incluses</li>
            </ul>

            <button className="mt-6 w-full px-6 py-3 rounded-xl bg-(--accent) text-white font-semibold hover:opacity-90 transition">
              Accéder à Navira
            </button>
          </div>

          {/* HIGH TICKET */}
          <div className="navira-card p-7">
            <p className="text-xs text-(--text-muted) uppercase tracking-widest">
              Accompagnement
            </p>

            <h3 className="mt-3 text-2xl font-bold text-(--primary)">
              Plan stratégique Maurice
            </h3>

            <p className="mt-2 text-sm text-(--text-muted)">
              Analyse + call personnalisé + plan d’installation.
            </p>

            <p className="mt-6 text-3xl font-bold text-(--primary)">
              2 500€
            </p>

            <ul className="mt-6 space-y-2 text-sm text-(--text-muted)">
              <li>✔ Call stratégique</li>
              <li>✔ Plan d’expatriation</li>
              <li>✔ Checklist complète</li>
            </ul>

            <button className="mt-6 w-full px-6 py-3 rounded-xl bg-(--primary) text-white font-semibold hover:opacity-90 transition">
              Réserver un call
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}