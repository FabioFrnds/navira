'use client'

import { PrimaryButton } from '@/src/components/ui/primary-button'

export default function Simulation() {
  return (
    <section
      id="simulation"
      className="relative py-28 bg-blue-zone overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.06),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
  <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
    Simulation
  </p>

  <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary) leading-tight">
    Votre trajectoire change selon vos choix de pays
  </h2>

  <p className="mt-5 text-lg text-(--text-muted)">
    Même profil, trois environnements différents. Voici l’impact réel sur votre patrimoine.
  </p>

  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white border border-(--border) px-4 py-2 text-sm text-(--text-muted)">
    <span className="h-2 w-2 rounded-full bg-(--accent)" />
    Exemple basé sur un horizon de 20 ans
  </div>
</div>

        {/* PROFILE */}
        <div className="mt-14 navira-card p-8">

          <p className="text-xs text-(--text-muted) uppercase tracking-widest">
            Profil simulé
          </p>

          <div className="mt-3 flex items-center justify-between">

            <h3 className="text-xl font-bold text-(--primary)">
              Lucas — 32 ans
            </h3>

            <span className="text-xs px-3 py-1 rounded-full bg-(--secondary)/10 text-(--secondary)">
              Freelance
            </span>

          </div>

          <div className="mt-6 grid md:grid-cols-4 gap-6">

            <div>
              <p className="text-xl font-bold text-(--primary)">
                5 000€
              </p>
              <p className="text-sm text-(--text-muted)">
                Revenus mensuels
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-(--primary)">
                1 200€
              </p>
              <p className="text-sm text-(--text-muted)">
                Capacité d’épargne
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-(--primary)">
                40 000€
              </p>
              <p className="text-sm text-(--text-muted)">
                Patrimoine actuel
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-(--primary)">
                20 ans
              </p>
              <p className="text-sm text-(--text-muted)">
                Horizon
              </p>
            </div>

          </div>

        </div>

        {/* COUNTRIES */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          {/* FRANCE */}
          <div
            className="
              navira-card p-7
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(11,31,59,0.10)]
            "
          >

            <div className="flex items-center justify-between">
              <p className="text-xs text-(--text-muted) uppercase tracking-widest">
                Scénario
              </p>

              <span className="text-xs text-(--text-muted)">
                20 ans
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold text-(--primary)">
              🇫🇷 France
            </h3>

            <div className="mt-6 space-y-4">

              <div>
                <p className="text-sm text-(--text-muted)">
                  Patrimoine estimé
                </p>

                <p className="text-2xl font-bold text-(--primary)">
                  180 000€
                </p>
              </div>

              <div>
                <p className="text-sm text-(--text-muted)">
                  Épargne
                </p>

                <p className="text-sm font-semibold text-(--text-muted)">
                  Modérée
                </p>
              </div>

              <p className="text-sm text-(--text-muted) leading-relaxed">
                Croissance stable mais fortement impactée par la fiscalité.
              </p>

            </div>

          </div>

          {/* PORTUGAL */}
          <div
            className="
              navira-card p-7
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(11,31,59,0.10)]
            "
          >

            <div className="flex items-center justify-between">
              <p className="text-xs text-(--text-muted) uppercase tracking-widest">
                Scénario
              </p>

              <span className="text-xs text-(--text-muted)">
                20 ans
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold text-(--primary)">
              🇵🇹 Portugal
            </h3>

            <div className="mt-6 space-y-4">

              <div>
                <p className="text-sm text-(--text-muted)">
                  Patrimoine estimé
                </p>

                <p className="text-2xl font-bold text-(--primary)">
                  240 000€
                </p>
              </div>

              <div>
                <p className="text-sm text-(--text-muted)">
                  Épargne
                </p>

                <p className="text-sm font-semibold text-(--text-muted)">
                  Élevée
                </p>
              </div>

              <p className="text-sm text-(--text-muted) leading-relaxed">
                Optimisation grâce au coût de vie réduit.
              </p>

            </div>

          </div>

          {/* MAURICE */}
          <div
            className="
              navira-card p-7
              relative overflow-hidden
              border border-(--accent)/30
              shadow-soft
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(108,92,231,0.18)]
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(108,92,231,0.12),transparent_60%)] pointer-events-none" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <p className="text-xs text-(--accent) uppercase tracking-widest font-semibold">
                  Scénario optimal
                </p>

                <span className="text-xs px-2 py-1 rounded-full bg-(--accent)/10 text-(--accent)">
                  meilleur résultat
                </span>

              </div>

              <h3 className="mt-3 text-lg font-bold text-(--accent)">
                🇲🇺 Maurice
              </h3>

              <div className="mt-6 space-y-4">

                <div>
                  <p className="text-sm text-(--text-muted)">
                    Patrimoine estimé
                  </p>

                  <p className="text-2xl font-bold text-(--primary)">
                    310 000€
                  </p>
                </div>

                <div>
                  <p className="text-sm text-(--text-muted)">
                    Épargne
                  </p>

                  <p className="text-sm font-semibold text-(--accent)">
                    Très élevée
                  </p>
                </div>

                <p className="text-sm text-(--text-muted) leading-relaxed">
                  Forte optimisation fiscale + coût de vie réduit.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">

          <PrimaryButton>
            Créer ma simulation
          </PrimaryButton>

        </div>

      </div>
    </section>
  )
}