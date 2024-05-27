import About from '@/layouts/About/About'
import BecomeCreator from '@/layouts/BecomeCreator/BecomeCreator'
import Hero from '@/layouts/Hero/Hero'
import Navbar from '@/layouts/Navbar/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <BecomeCreator/> 
    </div>
  )
}

export default index