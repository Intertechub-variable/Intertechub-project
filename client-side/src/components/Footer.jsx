import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-black text-white mb-0'>
        <div className='footer flex justify-between p-20 '>
            <div className=''>
                <h1 className='text-lg font-semibold py-2'>Variable</h1>
                <p className='text-gray-100 pb-2'>Subscribe</p>
                <div>
                <input className='bg-transparent border-2 p-2 rounded-md border-gray-300' type="text" name="" id="" placeholder='Enter your email' />

                </div>
            </div>


            <div>
                <h1 className='text-lg font-semibold py-2'>Support</h1>
                <p className='text-sm text-gray-300 pb-2'>Adis Aaba, Ethiopia</p>
                <p className='text-sm text-gray-300 pb-2'>exclusive@gmail.com</p>
                <p className='text-sm text-gray-300 pb-2'>+8888-88888-88888</p>
            </div>

            <div>
                <h1 className='text-lg font-semibold py-2'>Account</h1>
                <p className='text-sm text-gray-300 pb-2'>My Account</p>
                <p className='text-sm text-gray-300 pb-2'>Login / Register</p>
             
            </div>

             <div>
                <h1 className='text-lg font-semibold py-2'>Quick Link</h1>
                <p className='text-sm text-gray-300 pb-2'>Privecy Policy</p>
                <p className='text-sm text-gray-300 pb-2'>Terms of Use</p>
                <p className='text-sm text-gray-300 pb-2'>FAQ</p>
                <p className='text-sm text-gray-300 pb-2'>Contact</p>
            </div>

             <div>
                <h1 className='text-lg font-semibold py-2'>Download App</h1>
                 <div className='flex gap-10 justify-center'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>
                 </div>
            </div>

        </div>
        <div className='flex justify-center pb-10 text-gray-600'>
            <p>&copy; Copyright Variable {new Date().getFullYear()} All right reserved</p>
        </div>
    </div>
  )
}

export default Footer