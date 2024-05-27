import About from '@/layouts/About/About'
import Hero from '@/layouts/Hero/Hero'
import Navbar from '@/layouts/Navbar/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default index