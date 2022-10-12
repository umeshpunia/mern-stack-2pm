import React from 'react'
import AboutSection from '../components/AboutSection'
import CategorySection from '../components/CategorySection'
import ContactSection from '../components/ContactSection'
import TestimonialSection from '../components/TestimonialSection'
import Shop from './home/Shop'

function Home() {
  return (
    <>
      <Shop />
      <AboutSection />
      <CategorySection />
      <TestimonialSection />
      <ContactSection />
    </>
  )
}

export default Home