'use client'

export default function FAQSection() {
  return (
    <section className="relative w-full py-28">

      {/* BACKGROUND */}
      <div className="navira-glow" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--primary)">
            Questions fréquentes
          </h2>

          <p className="mt-6 text-lg text-(--text-muted)">
            Tout ce que vous devez savoir avant d’utiliser Navira.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-14 space-y-4">

          {/* 1 */}
          <div className="navira-card p-6">
            <h3 className="text-lg font-bold text-(--primary)">
              Est-ce un conseil financier ?
            </h3>
            <p className="mt-3 text-sm text-(--text-muted)">
              Non. Navira fournit des simulations basées sur des données publiques et des hypothèses explicites.  
              Il ne s’agit pas de conseils financiers, fiscaux ou juridiques.
            </p>
          </div>

          {/* 2 */}
          <div className="navira-card p-6">
            <h3 className="text-lg font-bold text-(--primary)">
              Les données sont-elles fiables ?
            </h3>
            <p className="mt-3 text-sm text-(--text-muted)">
              Oui. Les modèles utilisent des données publiques (fiscalité moyenne, coût de la vie, statistiques économiques) mises à jour régulièrement.
            </p>
          </div>

          {/* 3 */}
          <div className="navira-card p-6">
            <h3 className="text-lg font-bold text-(--primary)">
              Est-ce personnalisé ?
            </h3>
            <p className="mt-3 text-sm text-(--text-muted)">
              Oui. Chaque simulation est basée sur votre profil : revenus, épargne, objectifs et horizon temporel.
            </p>
          </div>

          {/* 4 */}
          <div className="navira-card p-6">
            <h3 className="text-lg font-bold text-(--primary)">
              Puis-je modifier mes scénarios ?
            </h3>
            <p className="mt-3 text-sm text-(--text-muted)">
              Oui. Vous pouvez comparer plusieurs pays, revenus et styles de vie pour voir l’impact direct sur votre trajectoire.
            </p>
          </div>

          {/* 5 */}
          <div className="navira-card p-6">
            <h3 className="text-lg font-bold text-(--primary)">
              Pourquoi payer pour Navira ?
            </h3>
            <p className="mt-3 text-sm text-(--text-muted)">
              Parce que les décisions de vie majeures (expatriation, carrière, investissement) nécessitent des projections structurées, pas des estimations approximatives.
            </p>
          </div>

        </div>

        {/* CTA FINAL */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-xl bg-(--accent) text-white font-semibold hover:opacity-90 transition">
            Commencer une simulation
          </button>

          <p className="mt-4 text-xs text-(--text-muted)">
            Aucun engagement. Résultats immédiats.
          </p>
        </div>

      </div>
    </section>
  )
}