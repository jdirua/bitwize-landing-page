import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-20 bg-deep-space'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          <span className='bg-gradient-to-r from-cyan to-purple text-transparent bg-clip-text'>
            About Bitwize
          </span>
        </h2>
        <div className='max-w-3xl mx-auto text-center text-gray'>
          <p className='mb-4'>
            “Bitwize Technologies fuses the precision of bitwise operations with
            the wisdom of experience and the ingenuity of a wizard. Bitwize
            manipulate the building blocks of technology to conjure elegant,
            intelligent solutions—turning raw logic into digital magic for the
            modern world."
          </p>
          <p className='mb-4'>
            Established in late 2025 as a sole trading company, I also operate
            under the trading name e-Koble, which manages the specialized
            e-commerce product division of the business. This dual-structure
            allows me to offer focused expertise in both bespoke client projects
            and my own product offerings. My philosophy is built on technical
            excellence, strategic insight, and building long-term, collaborative
            partnerships with my clients.
          </p>
          <p className='mb-4'>
            I have over 10 years of experience in the technology and engineering
            sector. Im a passionate and solutions-driven professional. I founded
            Bitwize to provide accessible, expert-level technology services that
            are often only available from large, expensive firms.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
