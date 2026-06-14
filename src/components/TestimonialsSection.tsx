'use client'

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-28">

      {/* BACKGROUND */}
      <div className="navira-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--primary)">
            Ils ont simulé leur trajectoire
          </h2>

          <p className="mt-6 text-lg text-(--text-muted)">
            Des utilisateurs qui ont enfin compris l’impact réel de leurs choix.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">

          {/* 1 */}
          <div className="navira-card p-6">
            <p className="text-sm text-(--text-muted)">
              “Je pensais rester en France, mais la simulation m’a montré un écart énorme sur 20 ans.”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-(--primary)">Alexandre M.</p>
              <p className="text-xs text-(--text-muted)">Freelance</p>
            </div>
          </div>

          {/* 2 */}
          <div className="navira-card p-6">
            <p className="text-sm text-(--text-muted)">
              “Je n’avais jamais vu mes choix de vie présentés comme ça. C’est ultra clair.”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-(--primary)">Sarah L.</p>
              <p className="text-xs text-(--text-muted)">Consultante</p>
            </div>
          </div>

          {/* 3 */}
          <div className="navira-card p-6">
            <p className="text-sm text-(--text-muted)">
              “J’ai comparé Portugal vs Maurice. La décision est devenue évidente.”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-(--primary)">Thomas R.</p>
              <p className="text-xs text-(--text-muted)">Entrepreneur</p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="px-8 py-4 rounded-xl bg-(--primary) text-white font-semibold hover:opacity-90 transition">
            Simuler ma trajectoire
          </button>

          <p className="mt-4 text-xs text-(--text-muted)">
            Résultat en moins de 2 minutes
          </p>
        </div>

      </div>
    </section>
  )
}