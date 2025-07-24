import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <nav>
      <a href='#'>
        <Image src={assets.logo} alt="" />
      </a>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">My Work</a></li>
        <li><a href="#">Contact me</a></li>

      </ul>

      <div>
        <a href='#'>Contact<Image src={assets.arrow_icon} alt=""  /> </a>
      </div>
    </nav>
    </>
  )
}

export default Navbar
