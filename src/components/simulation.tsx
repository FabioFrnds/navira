'use client'

export default function Simulation() {
  return (
    <section className="relative w-full py-28">

      {/* BACKGROUND GLOW */}
      <div className="navira-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--primary) leading-tight">
            Votre trajectoire change selon vos choix de pays
          </h2>

          <p className="mt-6 text-lg text-(--text-muted)">
            Même profil, trois environnements différents. Voici l’impact réel sur votre patrimoine.
          </p>
        </div>

        {/* PROFILE */}
        <div className="mt-14 navira-card p-6">
          <p className="text-xs text-(--text-muted) uppercase tracking-widest">
            Profil simulé
          </p>

          <h3 className="mt-2 text-xl font-bold text-(--primary)">
            Lucas — 32 ans, Freelance
          </h3>

          <div className="mt-4 grid md:grid-cols-4 gap-4 text-sm text-(--text-muted)">
            <div>
              <p className="font-semibold text-(--primary)">5 000€</p>
              <p>Revenus mensuels</p>
            </div>

            <div>
              <p className="font-semibold text-(--primary)">1 200€</p>
              <p>Capacité d’épargne</p>
            </div>

            <div>
              <p className="font-semibold text-(--primary)">40 000€</p>
              <p>Patrimoine actuel</p>
            </div>

            <div>
              <p className="font-semibold text-(--primary)">20 ans</p>
              <p>Horizon</p>
            </div>
          </div>
        </div>

        {/* COUNTRIES */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          {/* FRANCE */}
          <div className="navira-card p-6">
            <h3 className="text-lg font-bold text-(--primary)">🇫🇷 France</h3>

            <div className="mt-4 space-y-2 text-sm">
              <p>Patrimoine estimé</p>
              <p className="text-xl font-bold text-(--primary)">180 000€</p>

              <p className="mt-3">Capacité d’épargne</p>
              <p className="font-semibold text-(--text-muted)">Modérée</p>

              <p className="mt-3">Lecture globale</p>
              <p className="text-(--text-muted)">
                Croissance stable mais fortement impactée par la fiscalité.
              </p>
            </div>
          </div>

          {/* PORTUGAL */}
          <div className="navira-card p-6">
            <h3 className="text-lg font-bold text-(--secondary)">🇵🇹 Portugal</h3>

            <div className="mt-4 space-y-2 text-sm">
              <p>Patrimoine estimé</p>
              <p className="text-xl font-bold text-(--primary)">240 000€</p>

              <p className="mt-3">Capacité d’épargne</p>
              <p className="font-semibold text-(--text-muted)">Élevée</p>

              <p className="mt-3">Lecture globale</p>
              <p className="text-(--text-muted)">
                Optimisation grâce au coût de la vie réduit.
              </p>
            </div>
          </div>

          {/* MAURICE (WINNER) */}
          <div className="navira-card p-6 border border-(--accent)/30 shadow-soft">

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-(--accent)">🇲🇺 Maurice</h3>

              <span className="text-xs px-2 py-1 rounded-full bg-(--accent)/10 text-(--accent)">
                meilleur scénario
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p>Patrimoine estimé</p>
              <p className="text-xl font-bold text-(--primary)">310 000€</p>

              <p className="mt-3">Capacité d’épargne</p>
              <p className="font-semibold text-(--accent)">Très élevée</p>

              <p className="mt-3">Lecture globale</p>
              <p className="text-(--text-muted)">
                Forte optimisation fiscale + coût de vie réduit.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button className="px-6 py-3 rounded-xl bg-(--primary) text-white font-semibold hover:opacity-90 transition">
            Simuler ma propre trajectoire
          </button>
        </div>

      </div>
    </section>
  )
}