'use client'

import { PrimaryButton } from '@/src/components/ui/primary-button'

export default function Report() {
  return (
    <section id="report" className="relative py-28 bg-blue-zone overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.06),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER (centré pour cohérence globale UI) */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="text-xs tracking-[0.16em] uppercase text-(--accent) font-semibold">
            Rapport
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-(--primary) leading-tight">
            L’impact réel de votre expatriation
          </h2>

          <p className="mt-5 text-lg text-(--text-muted)">
            Un document clair pour comparer les pays, visualiser l’impact sur votre patrimoine et prendre une décision éclairée.
          </p>

        </div>

        {/* CONTENT */}
<div className="mt-16 grid md:grid-cols-2 gap-12 items-stretch">

  {/* LEFT - REPORT MOCK */}
  <div className="navira-card p-8 relative overflow-hidden flex flex-col">

    {/* glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,92,231,0.10),transparent_60%)] pointer-events-none" />

    <div className="relative z-10 flex-1">

      <p className="text-xs text-(--text-muted) uppercase tracking-widest">
        Document Navira
      </p>

      <h3 className="mt-3 text-2xl font-bold text-(--primary)">
        Simulation patrimoniale complète
      </h3>

      {/* DATA BLOCK */}
      <div className="mt-8 space-y-4">

        <div className="flex justify-between text-sm">
          <span className="text-(--text-muted)">
            France - scénario de référence (10 ans)
          </span>
          <span className="font-semibold text-(--primary)">
            150 000€
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-(--text-muted)">
            Portugal - optimisation partielle (10 ans)
          </span>
          <span className="font-semibold text-(--primary)">
            330 000€
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-(--accent) font-medium">
            Maurice - optimisation maximale (10 ans)
          </span>
          <span className="font-bold text-(--accent)">
            580 000€
          </span>
        </div>

      </div>

      {/* PROGRESS */}
      <div className="mt-10">

        <div className="h-2 bg-black/10 rounded-full overflow-hidden">
          <div className="h-full w-[85%] bg-(--accent)" />
        </div>

        <p className="mt-3 text-xs text-(--text-muted)">
          Projection comparative du potentiel patrimonial
        </p>

      </div>

    </div>

    {/* CTA UNDER MOCK (PRIMARY BUTTON) */}
    <div className="mt-8">
      <PrimaryButton>
        Obtenir mon rapport personnalisé
      </PrimaryButton>
    </div>

  </div>

  {/* RIGHT - EXPLANATION */}
  <div>

    <h3 className="text-2xl font-bold text-(--primary)">
      Un rapport conçu pour décider
    </h3>

    <p className="mt-4 text-sm text-(--text-muted) leading-relaxed">
      Navira transforme vos scénarios en projections financières comparables entre pays,
      pour comprendre où vous gagnez ou perdez réellement sur votre vie.
    </p>

    {/* FEATURES */}
    <div className="mt-10 space-y-4">

      <div className="navira-card p-5">
        <p className="font-semibold text-(--primary)">
          Comparaison instantanée
        </p>
        <p className="text-sm text-(--text-muted)">
          Comparez plusieurs pays sur une base financière unique et cohérente.
        </p>
      </div>

      <div className="navira-card p-5">
        <p className="font-semibold text-(--primary)">
          Projection long terme
        </p>
        <p className="text-sm text-(--text-muted)">
          Visualisez votre évolution dans le temps selon chaque pays.
        </p>
      </div>

      <div className="navira-card p-5">
        <p className="font-semibold text-(--primary)">
          Export PDF structuré
        </p>
        <p className="text-sm text-(--text-muted)">
          Un rapport clair, structuré et exploitable pour prendre une décision.
        </p>
      </div>

    </div>

  </div>

</div>

      </div>
    </section>
  )
}