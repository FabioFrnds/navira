'use client'

import { PrimaryButton } from '@/src/components/ui/primary-button'
import { SecondaryButton } from '@/src/components/ui/secondary-button'
import { GhostButton } from '@/src/components/ui/ghost-button'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-soft-zone overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.05),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Tarification
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary)">
            Faites le bon choix d’expatriation
          </h2>

          <p className="mt-5 text-lg text-(--text-muted)">
            Simulez votre situation, comparez les meilleurs pays et comprenez où vous gagnez ou perdez de l’argent pour prendre une décision d’expatriation éclairée.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-45 grid md:grid-cols-3 gap-6 items-stretch">

          {/* LEFT */}
          <div className="navira-card p-7 flex flex-col h-full transition hover:-translate-y-1">

            <div>

              <p className="text-xs text-(--text-muted) uppercase tracking-widest">
                Découverte gratuite
              </p>

              <h3 className="mt-3 text-2xl font-bold text-(--primary)">
                France vs Maurice
              </h3>

              <p className="mt-2 text-sm text-(--text-muted)">
                Testez une comparaison simplifiée pour comprendre l’impact réel d’une expatriation.
              </p>

              <p className="mt-6 text-3xl font-bold text-(--primary)">
                Gratuit
              </p>

              <ul className="mt-6 space-y-2 text-sm text-(--text-muted)">
                <li>✔ Comparaison France vs Maurice</li>
                <li>✔ Fiscalité + coût de la vie simplifiés</li>
                <li>✔ Résultat instantané</li>
              </ul>

            </div>

            <div className="mt-auto pt-8">
              <GhostButton>Tester gratuitement</GhostButton>
            </div>

          </div>

          {/* CENTER */}
<div className="relative isolate group">

  {/* ⭐ MASCOTTE DERRIÈRE LA CARTE */}
  <img
    src="/navi-pricing.png"
    alt="Navi mascot"
    className="
      absolute
      z-0
      -top-45
      left-1/2
      -translate-x-1/2
      w-72
      opacity-90
      pointer-events-none

      transition-all duration-300
      group-hover:-translate-y-2
      group-hover:scale-105
      group-hover:opacity-100
    "
  />


  <div
    className="
      navira-card
      bg-white
      p-7
      flex flex-col h-full

      border border-(--accent)/30
      shadow-soft

      relative
      z-10

      hover:-translate-y-1
      transition
    "
  >

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
          Navira Global
        </h3>


        <p className="mt-2 text-sm text-(--text-muted)">
          Analyse complète de votre situation et comparaison entre plus de 20 pays.
        </p>


        <p className="mt-6 text-3xl font-bold text-(--accent)">
          999€
        </p>


        <ul className="mt-6 space-y-2 text-sm text-(--text-muted)">
          <li>✔ Analyse personnalisée complète</li>
          <li>✔ +20 pays comparés</li>
          <li>✔ Fiscalité, patrimoine... et bien plus encore</li>
          <li>✔ Projection 5 / 10 / 20 ans</li>
          <li>✔ Rapports PDF illimités</li>
          <li>✔ Mises à jour incluses</li>
        </ul>

      </div>


      <div className="mt-auto pt-8">
        <SecondaryButton>
          Accéder à ma simulation
        </SecondaryButton>
      </div>


    </div>

  </div>

</div>

          {/* RIGHT */}
          <div className="navira-card p-7 flex flex-col h-full transition hover:-translate-y-1">

            <div>

              <p className="text-xs text-(--text-muted) uppercase tracking-widest">
                Accompagnement personnalisé
              </p>

              <h3 className="mt-3 text-2xl font-bold text-(--primary)">
                Expatriation sur mesure
              </h3>

              <p className="mt-2 text-sm text-(--text-muted)">
                Un accompagnement complet pour structurer votre projet d’expatriation.
              </p>

              <p className="mt-6 text-3xl font-bold text-(--primary)">
                2 500€
              </p>

              <ul className="mt-6 space-y-2 text-sm text-(--text-muted)">
                <li>✔ Audit complet de votre situation</li>
                <li>✔ Stratégie d’expatriation sur mesure</li>
                <li>✔ Appel avec un expert sur place</li>
                <li>✔ Checklist d’installation détaillée</li>
                <li>✔ Optimisation fiscale et patrimoniale</li>
              </ul>

              <p className="mt-10 text-sm text-(--text-muted)">
                Pays pris en compte actuellement : <br />- Maurice
              </p>

            </div>

            <div className="mt-auto pt-8">
              <PrimaryButton>Planifier mon appel</PrimaryButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}