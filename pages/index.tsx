import About from '@/layouts/About/About'
import BecomeCreator from '@/layouts/BecomeCreator/BecomeCreator'
import Hero from '@/layouts/Hero/Hero'
import LiveBiding from '@/layouts/LiveBiding/LiveBiding'
import Navbar from '@/layouts/Navbar/Navbar'
import PopularNFT from '@/layouts/PopularNFT/PopularNFT'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <BecomeCreator/> 
      <PopularNFT/>
      <LiveBiding/>
    </div>
  )
}

export default index