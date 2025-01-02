import React from 'react'
import { FaBolt, FaPizzaSlice, FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';


export default function Navbar() {
  return (
    <div >
      <div className='grid xl:grid-cols-1 grid-cols-1'>
        <div className='p-5'>
          <div className='py-3 px-3 rounded-xl border border-black w-full bg-gradient-to-r from-black to-gray-700'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-items-center items-center gap-2'>

                {/*logo*/}
                <FaPizzaSlice  className='w-6 h-6 text-orange-500 hover:text-red-600'/>
                {/*search icon*/}
                <div style={{position: 'relative'}}>
                  <input className='rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block'
                  placeholder='search for your favourite Pizza from menu.'/>

                  < FaSearch className='w-5 h-5 text-black absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block'/>

                </div>
              </div>
              <div className='flex justify-center items-center gap-2'>
              <FaBolt className='w-5 h-5 text-amber-400 hidden lg:block md:block'/>
              <p className='text-sm text-white hidden lg:block md:block'>Order now and get it with 
                <span className='text-amber-400'> 15 minutes! </span>
              </p>
              
              <FaCartShopping className=' w-8 h-8 rounded-full ring-2 p-1 relative text-amber-400 hover:text-red-600'/>
              <img
              className='inline-block w-8 h-8 rounded-full ring-2 text-amber-400 hover:text-red-600'
              src='https://wallpapers.com/images/high/purple-hijab-cartoon-po5v6sy4izavgo6b.webp'
              alt='user pic' />
            </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        
   
     
    
  )
}
