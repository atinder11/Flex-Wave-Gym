import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import Pricing from '@/components/Pricing'
import Cta from '@/components/Cta'

function page() {
  return (
   <>
   <Navbar/>
   <Pricing/>
   <Cta/>

   <Footer/>
   </>
  )
}

export default page