import Navbar from '@/src/components/navbar'
import Hero from '@/src/components/hero'
import Simulation from '@/src/components/simulation'
import WhatYouGetSection from '@/src/components/WhatYouGetSection'
import ReportExampleSection from '@/src/components/ReportExampleSection'
import PricingSection from '@/src/components/PricingSection'
import FAQSection from '@/src/components/FAQSection'
import TestimonialsSection from '@/src/components/TestimonialsSection'
import Footer from '@/src/components/Footer'

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
        <Simulation />

        {/* SIMULATION */}
        <WhatYouGetSection />

        {/* SIMULATION */}
        <ReportExampleSection />

        {/* SIMULATION */}
        <PricingSection />

        <TestimonialsSection />

        <FAQSection />

        <Footer />


      </div>
    </main>
  )
}