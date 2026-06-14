'use client'

export default function ReportExampleSection() {
  return (
    <section className="relative w-full py-28">

      {/* BACKGROUND */}
      <div className="navira-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--primary) leading-tight">
            À quoi ressemble votre rapport Navira ?
          </h2>

          <p className="mt-6 text-lg text-(--text-muted)">
            Chaque simulation génère un rapport structuré pour vous aider à comparer vos options de vie et de patrimoine.
          </p>
        </div>

        {/* MOCK REPORT */}
        <div className="mt-14 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT: VISUAL MOCK */}
          <div className="navira-card p-8 relative overflow-hidden">

            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-(--accent) to-(--secondary)" />

            <div className="relative z-10">

              <p className="text-xs text-(--text-muted) uppercase tracking-widest">
                Rapport Navira
              </p>

              <h3 className="mt-2 text-2xl font-bold text-(--primary)">
                Simulation patrimoniale complète
              </h3>

              <div className="mt-6 space-y-4 text-sm">

                <div className="flex justify-between">
                  <span>France (20 ans)</span>
                  <span className="font-semibold">180 000€</span>
                </div>

                <div className="flex justify-between">
                  <span>Portugal (20 ans)</span>
                  <span className="font-semibold">240 000€</span>
                </div>

                <div className="flex justify-between text-(--accent)">
                  <span>Maurice (20 ans)</span>
                  <span className="font-bold">310 000€</span>
                </div>

              </div>

              <div className="mt-8 h-2 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-(--accent)" />
              </div>

              <p className="mt-4 text-xs text-(--text-muted)">
                Visualisation simplifiée du potentiel patrimonial
              </p>

            </div>
          </div>

          {/* RIGHT: EXPLANATION */}
          <div>

            <h3 className="text-2xl font-bold text-(--primary)">
              Un document clair, actionnable et structuré
            </h3>

            <p className="mt-4 text-sm text-(--text-muted)">
              Le rapport Navira synthétise vos scénarios de vie en projections lisibles, avec comparaison entre pays, évolution du patrimoine et capacité d’épargne.
            </p>

            <div className="mt-8 space-y-4">

              <div className="navira-card p-5">
                <p className="font-semibold text-(--primary)">Comparaison instantanée</p>
                <p className="text-sm text-(--text-muted)">Tous les pays analysés sur une même base.</p>
              </div>

              <div className="navira-card p-5">
                <p className="font-semibold text-(--primary)">Projection long terme</p>
                <p className="text-sm text-(--text-muted)">5, 10 et 20 ans de trajectoire patrimoniale.</p>
              </div>

              <div className="navira-card p-5">
                <p className="font-semibold text-(--primary)">Téléchargement PDF</p>
                <p className="text-sm text-(--text-muted)">Un rapport prêt à être conservé ou partagé.</p>
              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button className="px-6 py-3 rounded-xl bg-(--primary) text-white font-semibold hover:opacity-90 transition">
            Générer mon rapport
          </button>
        </div>

      </div>
    </section>
  )
}