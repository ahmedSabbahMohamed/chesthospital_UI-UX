import React from 'react'
import { About, Doctors, Footer, Header, Hero, Services } from '../features/landing'

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Doctors />
      <Services />
      <About />
      <Footer />
    </>
  )
}

export default LandingPage