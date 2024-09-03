import React from 'react'
import HeroPage from './HeroPage'
import About  from '@/components/About'
import Latestvid from '../Latestvid'
import Services from './service'
import Contact from './contact'


function Homepage() {
  return (
    <>
      <HeroPage />
      <About />
      <div className='bg-gradient-to-r from-slate-100 to-slate-200 py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-center mb-8 text-slate-800'>Latest Videos</h1>
        <div className='max-w-7xl mx-auto'>
          <Latestvid />
        </div>
      </div>
      <div className='bg-gradient-to-r from-slate-100 to-slate-200 py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-center mb-8 text-slate-800'>Our Services</h1>
        <div className='max-w-7xl mx-auto'>
        <Services />
        </div>
      </div>

      <Contact />
  </>
  )
}

export default Homepage
  
