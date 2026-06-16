import Image from 'next/image'

const footerLinks = {
  product: ['Simulation', 'Exemple de rapport', 'Tarifs'],
  company: ['À propos', 'Contact'],
  legal: ['CGU', 'Confidentialité', 'Mentions légales'],
}

export default function Footer() {
  return (
    <footer className="relative bg-footer overflow-hidden">

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.10),transparent_55%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">

          <div className="grid md:grid-cols-12 gap-12">

            {/* LEFT */}
            <div className="md:col-span-5">

              <Image
                src="/navira-white-logo.png"
                alt="Navira"
                width={160}
                height={42}
                className="h-auto w-auto opacity-95"
              />

              <p className="mt-6 max-w-md text-white/70 leading-relaxed">
                Navira aide à comparer l’impact réel d’une expatriation
                sur votre patrimoine, votre qualité de vie et vos choix futurs.
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm text-white/50">
                <span className="h-2 w-2 rounded-full bg-(--accent)" />
                Analyse comparative multi-pays
              </div>

            </div>

            {/* RIGHT */}
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">

              {/* PRODUCT */}
              <div>
                <p className="text-white font-semibold mb-5">Produit</p>

                <div className="space-y-3 text-sm">
                  {footerLinks.product.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="group relative block w-fit text-white/60 transition-colors duration-300 hover:text-white focus:text-white"
                    >
                      {item}

                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-[linear-gradient(to_right,transparent,var(--accent),transparent)] transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>

              {/* COMPANY */}
              <div>
                <p className="text-white font-semibold mb-5">Société</p>

                <div className="space-y-3 text-sm">
                  {footerLinks.company.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="group relative block w-fit text-white/60 transition-colors duration-300 hover:text-white focus:text-white"
                    >
                      {item}

                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-[linear-gradient(to_right,transparent,var(--accent),transparent)] transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>

              {/* LEGAL */}
              <div>
                <p className="text-white font-semibold mb-5">Légal</p>

                <div className="space-y-3 text-sm">
                  {footerLinks.legal.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="group relative block w-fit text-white/60 transition-colors duration-300 hover:text-white focus:text-white"
                    >
                      {item}

                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-[linear-gradient(to_right,transparent,var(--accent),transparent)] transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* DIVIDER */}
          <div className="relative mt-14 pt-8">

            <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(to_right,transparent,rgba(255,255,255,.12),transparent)]" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/45">

              <p>
                © {new Date().getFullYear()} Navira. Tous droits réservés.
              </p>

              <p className="text-white/40">
                Comparez l'impact réel de chaque destination.
              </p>

            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}