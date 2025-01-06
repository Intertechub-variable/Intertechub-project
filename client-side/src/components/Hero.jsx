import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
function Hero() {
  return (
    <motion.div className='relative text-white flex h-screen items-center'
     initial={{ opacity: 0, x: -40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
    >
         <div className='absloute -mt-40  bg-gradient-to-r from-black to-black-200 h-full w-20'></div>
        <div className='max-w-[600px]  pb-10'>
        <h1 className='text-6xl font-bold'>Startup Fundraising Platform</h1>
        <p className='font-semibold text-2xl text-gray-200 py-5'>Start and manage a professional fundraise to attract quality accredited investors.</p>
        <Link className='bg-blue-700 px-10 py-4 font-semibold rounded-md hover:bg-blue-800' to={'/signup'}>GET STARTED</Link>
        </div>
    </motion.div>
  )
}

export default Hero