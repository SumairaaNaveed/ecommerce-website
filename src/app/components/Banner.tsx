import React from 'react'

export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-2'>
      <div className='absolute inset-0 opacity-20'>
       <img
       src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-banner-design-template-0edd577b92f60860edf56e5d2ec92f44_screen.jpg?ts=1572255490'
       alt='Delicious pizza banner'
       className='w-full h-full object-cover'/>
      </div>

<div className='relative z-10 container mx-auto flex flex-col justify-center items-center'>
  <h2 className='text-white sm:text-5xl font-bold mb-4'>
    Discover Our Menu
  </h2>
  <p className='text-white text-lg text-center mb-6 max-w-xl'>
   Shop Now For Exclusive Pizza Discount!
  </p>

  <button
  type='button' 
  className='bg-blue-950 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-700 transition duration-300'>
   Exciting Deals Launch at 12PM!
  </button>
</div>

    </div>
  )
}
