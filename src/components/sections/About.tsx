import SectionContainer from '../layout/SectionContainer'

const About = () => {
  return (
    <SectionContainer id='about'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='text-center md:text-left'>
          <h2 className='text-4xl font-bold mb-6 text-cyan'>Who We Are</h2>
          <p className='text-lg text-gray-300 leading-relaxed mb-4'>
            BitWize is a collective of passionate developers, designers, and
            innovators dedicated to pushing the boundaries of technology. We
            thrive on challenges and are committed to delivering exceptional
            digital experiences.
          </p>
          <p className='text-lg text-gray-300 leading-relaxed'>
            Our team&apos;s expertise spans across various domains, allowing us to
            tackle complex projects with a holistic approach. We believe in
            continuous learning and are always exploring new horizons to bring
            our clients the best that technology has to offer.
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='w-64 h-64 bg-purple rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg'>
            BitWize
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default About
