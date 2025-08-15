import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
        <h1 className='font-serif font-semibold text-3xl mx-auto mb-2'>Ammar<span className='text-[#EC1552] text-4xl '>.</span></h1>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='mail' className='w-6'/>
            ammaribrahim738@gmail.com
        </div>
        </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Ammar Ibrahim. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
                <a target='_blank' href='https://github.com/AmmarMuhammadIbrahim123'>GitHub</a>
            </li>
            <li>
                <a target='_blank' href='https://www.linkedin.com/in/ammar-muhammad-ibrahim-526814274/'>LinkedIn</a>
            </li>
            <li>
                <a target='_blank' href='https://www.instagram.com/iammarmuhammad/'>Instagram</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
