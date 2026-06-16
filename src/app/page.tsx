import Navbar from '@/src/components/navbar'
import Hero from '@/src/components/hero'
import What from '@/src/components/what'
import Simulation from '@/src/components/simulation'
import Report from '@/src/components/report'
import Pricing from '@/src/components/pricing'
import Faq from '@/src/components/faq'
import Testimonials from '@/src/components/testimonials'
import Footer from '@/src/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-(--bg) text-(--text) overflow-hidden relative">


      {/* CONTENT WRAPPER */}
      <div className="relative z-10">

        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <Hero />

        {/* SIMULATION */}
        <What />

        {/* SIMULATION */}
        <Simulation />

        {/* SIMULATION */}
        <Report />

        {/* SIMULATION */}
        <Pricing />

        <Testimonials />

        <Faq />

        <Footer />


      </div>
    </main>
  )
}