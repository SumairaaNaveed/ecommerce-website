import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
        <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700'>
         <a className='hover:text-cyan-500 text-amber-500' href='#'> Home </a>
         <a className='hover:text-cyan-500 text-amber-500' href='#'> About </a>
         <a className='hover:text-cyan-500 text-amber-500' href='#'> Dilvery </a>
         <a className='hover:text-cyan-500 text-amber-500' href='#'> Contact </a>
        </nav>
<div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>
<FaFacebook className=' h-7 w-6 mb-8'/>
<FaInstagram className='w-6  h-7'/>
<FaLinkedin className='w-6 h-7'/>
<FaTwitter className='h-7  w-6'/>


</div>
<p className=' text-center hover:text-cyan-600 text-amber-400 font-medium mb-8'>
  2024 Sumaira Naveed. All Rights Reserved.
</p>
<br/>
<br/>


      </footer>
      
    </div>
  )
}
