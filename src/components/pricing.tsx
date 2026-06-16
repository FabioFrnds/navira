'use client'

import { PrimaryButton } from '@/src/components/ui/primary-button'

export default function Simulation() {
  return (
    <section
      id="simulation"
      className="relative py-28 bg-surface overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.06),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
  <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
    Simulation
  </p>

  <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary) leading-tight">
    Votre vie change selon votre choix
  </h2>

  <p className="mt-5 text-lg text-(--text-muted)">
    À profil identique, le choix du pays peut créer des écarts de plusieurs centaines de milliers d’euros.
  </p>
</div>

        {/* PROFILE */}
        <div className="mt-14 navira-card p-8">

          <p className="text-xs text-(--text-muted) uppercase tracking-widest">
            Profil de simulation
          </p>

          <div className="text-xl mt-2 font-bold text-(--primary)">
  Lucas — 32 ans{" "}
  <span className="ml-2 text-xs px-3 py-1 rounded-full bg-(--secondary)/10 text-(--secondary)">
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
                10 ans
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
<div className="relative isolate group">

  {/* ⭐ MASCOTTE À GAUCHE DERRIÈRE */}
  <img
    src="/navi-simulation.png"
    alt="Navi simulation"
    className="
      absolute
      z-0
      left-0
      top-1/2
      -translate-y-1/2
      translate-x-[-60%]
      w-64
      opacity-90
      pointer-events-none

      transition-all duration-300
      group-hover:translate-x-[-63%]
      group-hover:scale-100
      group-hover:opacity-100
    "
  />

  <div
    className="
      navira-card
      bg-white
      p-7
      relative z-10

      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_20px_50px_rgba(11,31,59,0.12)]
    "
  >

    <div className="flex items-center justify-between">
      <p className="text-xs text-(--text-muted) uppercase tracking-widest">
        Scénario basique
      </p>

      <span className="text-xs text-(--text-muted)">
        10 ans
      </span>
    </div>

    <h3 className="mt-3 text-lg font-bold text-(--primary)">
      France - scénario de référence
    </h3>


    <div className="mt-6 space-y-4">

      <div>
        <p className="text-sm text-(--text-muted)">
          Patrimoine estimé
        </p>

        <p className="text-2xl font-bold text-(--primary)">
          ~150 000€
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
        Croissance stable mais fortement impactée par la fiscalité et le coût global sur le long terme.
      </p>

    </div>

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
                Scénario amélioré
              </p>

              <span className="text-xs text-(--text-muted)">
                10 ans
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold text-(--primary)">
              Portugal
            </h3>

            <div className="mt-6 space-y-4">

              <div>
                <p className="text-sm text-(--text-muted)">
                  Patrimoine estimé
                </p>

                <p className="text-2xl font-bold text-(--primary)">
                  +330 000€
                </p>
              </div>

              <div>
                <p className="text-sm text-(--text-muted)">
                  Épargne
                </p>

                <p className="text-sm font-semibold text-(--secondary)">
                  Élevée
                </p>
              </div>

              <p className="text-sm text-(--text-muted) leading-relaxed">
                Amélioration de la capacité d’épargne grâce à un coût de vie plus faible et une fiscalité plus favorable.
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
                Maurice
              </h3>

              <div className="mt-6 space-y-4">

                <div>
                  <p className="text-sm text-(--text-muted)">
                    Patrimoine estimé
                  </p>

                  <p className="text-2xl font-bold text-(--primary)">
                    +580 000€
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
                  Optimisation maximale grâce à une fiscalité avantageuse et un coût de vie réduit, impact direct sur le patrimoine.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">

          <PrimaryButton>
            Voir mon scénario personnalisé
          </PrimaryButton>

        </div>

      </div>
    </section>
  )
}