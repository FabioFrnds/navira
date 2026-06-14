export default function Footer() {
  return (
    <footer className="relative w-full py-16 border-t border-(--border)">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT */}
        <div>
          <h3 className="text-xl font-bold text-(--primary)">
            Navira
          </h3>

          <p className="mt-4 text-sm text-(--text-muted) max-w-sm">
            Simulateur de trajectoires de vie et de patrimoine basé sur données publiques.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex gap-16 text-sm text-(--text-muted)">

          <div className="space-y-2">
            <p className="font-semibold text-(--primary)">Produit</p>
            <p>Simulation</p>
            <p>Rapports</p>
            <p>Comparaison pays</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-(--primary)">Légal</p>
            <p>Disclaimer</p>
            <p>Confidentialité</p>
            <p>CGU</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-(--primary)">Contact</p>
            <p>Support</p>
            <p>Partenariats</p>
          </div>

        </div>

      </div>

      <div className="mt-10 text-center text-xs text-(--text-muted)">
        © {new Date().getFullYear()} Navira. Tous droits réservés.
      </div>

    </footer>
  )
}