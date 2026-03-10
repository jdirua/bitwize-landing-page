import Hero from '@/components/sections/Hero'
import Brands from '@/components/sections/Brands'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Contact from '@/components/sections/Contact'

// Force re-render to apply new styles
export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
    </>
  )
}
