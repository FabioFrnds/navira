'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { PrimaryButton } from '@/src/components/ui/primary-button'
import { GhostButton } from '@/src/components/ui/ghost-button'

function useProgress(duration = 3500) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf: number
    const start = performance.now()

    const animate = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)

      setProgress(eased)

      if (p < 1) {
        raf = requestAnimationFrame(animate)
      }
    }

    raf = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(raf)
  }, [duration])

  return progress
}

const clamp = (v: number) => Math.max(0, Math.min(v, 1))

export default function Hero() {
  const progress = useProgress(3500)

  const score = progress * 87

  const maurice = progress
  const dubai = clamp((progress - 0.06) / 0.94)
  const france = clamp((progress - 0.14) / 0.86)

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        pt-28
        bg-hero
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center min-h-[calc(100vh-7rem)]">

        <div className="grid md:grid-cols-12 gap-14 w-full items-center">

          {/* LEFT */}
          <div className="md:col-span-7">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-(--border) px-4 py-2 text-sm text-(--primary) shadow-soft backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-(--accent) animate-pulse" />
              +150 000 Français s’expatrient chaque année
            </div>

            <h1 className="mt-6 text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.04em] text-(--primary)">
              Où devriez-vous
              <br />
              vraiment vivre ?
            </h1>

            <p className="mt-6 text-lg text-(--text-muted) max-w-xl font-medium">
              Comparez l’impact de votre expatriation sur plus de 20 pays.
            </p>

            <p className="mt-4 text-sm text-(--text-muted) max-w-lg leading-relaxed">
              Navira vous aide à comparer fiscalité, coût de la vie,
              pouvoir d’achat, climat, patrimoine et qualité de vie afin
              d’identifier la destination la plus adaptée à votre situation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">

              <PrimaryButton>
                Créer ma simulation
              </PrimaryButton>

              <GhostButton>
                Voir un exemple
              </GhostButton>

            </div>

            {/* SOCIAL PROOF */}
            <div className="mt-6 flex items-center gap-4 text-sm text-(--text-muted)">

              <div className="flex items-center gap-1 text-(--accent)">
                ★★★★★
              </div>

              <span>
                Plus de 1 000 simulations générées
              </span>

            </div>

          </div>

          {/* RIGHT */}
          <div className="md:col-span-5 flex justify-center">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,92,231,0.18),transparent_60%)] blur-3xl" />

              {/* NAVI */}
              <div className="flex justify-center -mt-20 -mb-20 relative z-20">

                <Image
                  src="/navi.png"
                  alt="Navi"
                  width={320}
                  height={320}
                  priority
                  className="
                    drop-shadow-2xl
                    pointer-events-none
                    float
                  "
                />

              </div>

              {/* CARD */}
              <div className="relative z-10 navira-card p-6 overflow-hidden">

                <div className="flex items-start justify-between mb-5">

                  <div>
                    <p className="text-xs tracking-[0.12em] uppercase text-(--text-muted)">
                      Simulation Navira
                    </p>

                    <p className="text-sm text-(--secondary) font-medium mt-1">
                      Résultat prévisionnel
                    </p>
                  </div>

                  <span className="text-xs px-2 py-1 rounded-full bg-(--accent)/10 text-(--accent) flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-(--accent) animate-pulse" />
                    EN DIRECT
                  </span>

                </div>

                {/* SCORE */}
                <div className="mb-6">

                  <div className="text-6xl font-extrabold text-(--primary)">
                    {score.toFixed(1)}%
                  </div>

                  <p className="text-xs text-(--accent)">
                    {score < 65 && 'Analyse du profil...'}
                    {score >= 65 && score < 87 && 'Comparaison en cours...'}
                    {score >= 87 && 'Résultat final de votre simulation.'}
                  </p>

                </div>

                {/* COUNTRIES */}
                <div className="space-y-4">

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold">Maurice</span>
                      <span>87%</span>
                    </div>

                    <div className="h-1.5 bg-(--accent)/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-(--accent)"
                        style={{
                          width: `${maurice * 87}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1 opacity-80">
                      <span>Dubaï</span>
                      <span>81%</span>
                    </div>

                    <div className="h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-(--secondary)"
                        style={{
                          width: `${dubai * 81}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1 opacity-60">
                      <span>France</span>
                      <span>49%</span>
                    </div>

                    <div className="h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-400"
                        style={{
                          width: `${france * 49}%`,
                        }}
                      />
                    </div>
                  </div>

                </div>

                {/* INSIGHT */}
                <div className="mt-6 pt-4 border-t border-(--border)">

                  <p className="text-sm text-(--primary) font-medium">
                    Jusqu’à +50% de pouvoir d’achat supplémentaire.
                  </p>

                  <p className="text-xs text-(--text-muted) mt-1">
                    Résultat généré à partir de vos revenus, objectifs,
                    patrimoine et critères de vie.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}