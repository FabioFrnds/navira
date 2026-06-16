'use client'

import { PrimaryButton } from '@/src/components/ui/primary-button'

export default function ReportExampleSection() {
  return (
    <section className="relative py-28 bg-blue-zone overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.06),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER (centré pour cohérence globale UI) */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Rapport
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary) leading-tight">
            À quoi ressemble votre rapport Navira ?
          </h2>

          <p className="mt-5 text-lg text-(--text-muted)">
            Chaque simulation génère un document structuré pour comparer vos options de vie et de patrimoine.
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - REPORT MOCK */}
          <div className="navira-card p-8 relative overflow-hidden">

            {/* glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,92,231,0.10),transparent_60%)] pointer-events-none" />

            <div className="relative z-10">

              <p className="text-xs text-(--text-muted) uppercase tracking-widest">
                Document Navira
              </p>

              <h3 className="mt-3 text-2xl font-bold text-(--primary)">
                Simulation patrimoniale complète
              </h3>

              {/* DATA BLOCK */}
              <div className="mt-8 space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-(--text-muted)">France (20 ans)</span>
                  <span className="font-semibold text-(--primary)">180 000€</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-(--text-muted)">Portugal (20 ans)</span>
                  <span className="font-semibold text-(--primary)">240 000€</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-(--accent) font-medium">Maurice (20 ans)</span>
                  <span className="font-bold text-(--accent)">310 000€</span>
                </div>

              </div>

              {/* PROGRESS VISUAL */}
              <div className="mt-10">

                <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-(--accent)" />
                </div>

                <p className="mt-3 text-xs text-(--text-muted)">
                  Projection comparative du potentiel patrimonial
                </p>

              </div>

            </div>
          </div>

          {/* RIGHT - EXPLANATION */}
          <div>

            <h3 className="text-2xl font-bold text-(--primary)">
              Un document clair, actionnable et structuré
            </h3>

            <p className="mt-4 text-sm text-(--text-muted) leading-relaxed">
              Le rapport Navira transforme vos scénarios en projections lisibles,
              avec comparaison entre pays, évolution du patrimoine et capacité d’épargne.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-4">

              <div className="navira-card p-5 transition-all duration-300 hover:-translate-y-1">
                <p className="font-semibold text-(--primary)">
                  Comparaison instantanée
                </p>
                <p className="text-sm text-(--text-muted)">
                  Tous les pays analysés sur une base commune.
                </p>
              </div>

              <div className="navira-card p-5 transition-all duration-300 hover:-translate-y-1">
                <p className="font-semibold text-(--primary)">
                  Projection long terme
                </p>
                <p className="text-sm text-(--text-muted)">
                  5, 10 et 20 ans de trajectoire patrimoniale.
                </p>
              </div>

              <div className="navira-card p-5 transition-all duration-300 hover:-translate-y-1">
                <p className="font-semibold text-(--primary)">
                  Export PDF structuré
                </p>
                <p className="text-sm text-(--text-muted)">
                  Un rapport prêt à être conservé ou partagé.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">

          <PrimaryButton>
            Générer mon rapport
          </PrimaryButton>

        </div>

      </div>
    </section>
  )
}