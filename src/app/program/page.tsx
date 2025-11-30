import Cta from '@/components/Cta'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Program from '@/components/Program'
import Training from '@/components/Training'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Program/>
    <Features/>
    <Training/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default page