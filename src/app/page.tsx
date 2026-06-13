'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { joinWaitlist } from './actions/waitlist'

/* COUNT UP HOOK (version clean + stable) */
function useCountUp(target: number, duration = 3500) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame: number
    const startTime = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setValue(Math.floor(eased * target))

      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return value
}

/* FORMAT EUR CLEAN */
function formatEuro(n: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  })
    .format(n)
    .replace(/\u202f/g, ' ')
}

export default function Page() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const maurice = useCountUp(1580000)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.set('email', email)

      const res = await joinWaitlist(formData)

      if (res?.error) {
        setError(res.error)
      } else {
        setSuccess(true)
        setEmail('')
      }
    } catch {
      setError('Une erreur inattendue est survenue.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#111827] flex items-center justify-center p-4 sm:p-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,31,59,0.10),transparent_60%)]" />

      <section className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">

        {/* LEFT */}
        <div className="md:col-span-7 text-center md:text-left">

          {/* LOGO */}
          <div className="mb-6">
            <Image
  src="/navira-logo.png"
  alt="Navira"
  width={170}
  height={45}
  style={{ width: 'auto', height: 'auto' }}
  priority
/>
          </div>

          {/* BADGE SEO + POSITIONING */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E4D8C]/20 bg-white px-4 py-2 text-sm text-[#1E4D8C] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#6C5CE7] animate-pulse" />
            +150 000 Français font le choix de s’expatrier chaque année
          </div>

          {/* 🔥 SEO H1 RENFORCÉ */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 font-['Space_Grotesk'] text-[#0B1F3B]">
      Où vivre selon<br />
      vos priorités ?
    </h1>

          {/* VALUE PROP */}
          <p className="text-xl text-gray-600 mb-4 max-w-lg">
            Comparez en quelques secondes l’impact réel de votre expatriation parmi plus de 20 pays.
          </p>

          <p className="text-gray-500 mb-10 max-w-lg">
            Navira vous aide à décider où vivre en fonction de la fiscalité, coût de la vie, climat, impact sur votre patrimoine et bien plus encore. Vous choisissez ce qui compte pour vous.
          </p>

          {/* FORM */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg w-full items-stretch">

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="h-14 flex-1 rounded-2xl border border-gray-200 bg-white px-8 outline-none focus:border-[#6C5CE7]" />

            <button
  className="
  w-full sm:w-auto
  group relative h-14
  rounded-2xl
  bg-linear-to-r from-[#0B1F3B] to-[#1E4D8C]
  px-10 font-bold text-white
  transition-all duration-300 ease-out
  hover:scale-[1.03]
  active:scale-[0.98]
  shadow-lg
  hover:shadow-[0_25px_80px_rgba(108,92,231,0.4)]
  overflow-hidden
  cursor-pointer
"
>
  {/* LIGHT SWEEP */}
  <span className="
    absolute inset-0
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
  ">
    <span className="
      absolute inset-0
      bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.25),transparent_60%)]
    " />
  </span>

  {/* SHINE */}
  <span className="
    absolute inset-0
    -translate-x-full group-hover:translate-x-full
    transition-transform duration-700 ease-out
    bg-linear-to-r from-transparent via-white/20 to-transparent
    skew-x-12
  " />

  <span className="relative z-10">
    {loading ? "Inscription..." : success ? "Inscrit !" : "Rejoindre la bêta"}
  </span>
</button>

          </form>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          {success && (
            <p className="text-green-600 text-sm mt-4">
              Vous êtes sur la liste Navira.
            </p>
          )}

        </div>

        {/* RIGHT */}
<div className="md:col-span-5 flex justify-center">
  <div className="relative w-full max-w-xl">

    {/* CONTAINER VISUEL */}
    <div className="relative flex flex-col items-center">

      {/* NAVI */}
      <div className="absolute -top-20 z-10 flex justify-center w-full">
        <div className="relative">
          <Image
            src="/navi.png"
            alt="Navi"
            width={320}
            height={320}
            priority
            className="drop-shadow-2xl"
          />

          <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-[#6C5CE7]/30 rounded-full scale-110" />
        </div>
      </div>

      {/* CARD */}
      <div className="relative z-20 mt-36.5 rounded-[28px] border border-gray-200 bg-white/70 backdrop-blur-xl p-8 shadow-xl">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-xs tracking-[0.12em] text-gray-500">
              Navi — votre assistant de simulation
            </p>
            <p className="text-[#1E4D8C] text-sm font-medium">
              Projection multi-pays basée sur votre profil
            </p>
          </div>

          <span className="text-xs font-semibold text-[#6C5CE7] flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#6C5CE7] animate-pulse" />
            EN DIRECT
          </span>
        </div>

        {/* MAIN METRIC */}
        <div className="mb-6">
          <div className="text-4xl font-black text-[#0B1F3B] tracking-tight">
            {formatEuro(maurice)}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            meilleur scénario identifié selon votre profil
          </p>
        </div>

        {/* SCORE BARS */}
        <div className="space-y-4">

          {/* FRANCE */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">France</span>
              <span className="font-medium text-gray-700">49/100</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[49%] bg-gray-400"></div>
            </div>
          </div>

          {/* MAURICE (WINNER) */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#1E4D8C] font-medium">Maurice</span>
              <span className="font-semibold text-[#1E4D8C]">87/100</span>
            </div>
            <div className="h-1.5 bg-[#1E4D8C]/10 rounded-full overflow-hidden">
              <div className="h-full w-[87%] bg-[#1E4D8C]"></div>
            </div>
          </div>

          {/* DUBAI */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">Dubai</span>
              <span className="font-medium text-gray-700">81/100</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[81%] bg-[#6C5CE7]"></div>
            </div>
          </div>

        </div>

        {/* INSIGHT */}
        <div className="mt-6 pt-4 border-t border-gray-100">

          <p className="text-sm text-gray-600 leading-relaxed">
            Jusqu’à +50% de pouvoir d’achat en plus qu’en France.
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Résultats personnalisés selon votre profil et vos paramètres de simulation afin de refléter au mieux votre situation et vos objectifs.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-5">
          <button className="w-full h-11 rounded-xl bg-[#0B1F3B] text-white text-sm font-medium hover:bg-[#1E4D8C] transition">
            Voir l’analyse complète de Navi
          </button>
        </div>

      </div>
    </div>
  </div>
</div>

      </section>
    </main>
  )
}