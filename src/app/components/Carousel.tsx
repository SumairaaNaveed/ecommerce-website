import React from 'react'

export default function Carousel() {
  return (
    <div>
     <section className='bg-gradient-to-r from-black to-gray-700'>
      <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
          <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700
          h-auto md:h-full flex flex-col'>
         <a href=''
         className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>

          <img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D'
          alt='pizza 1'
          className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>


          <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>
        
          </div>
          <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
            Classic Bites{" "}

         </h3>
         </a>
        
</div>
          

          <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700'>
          <a href=''
          className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
            <img
            src='https://media.istockphoto.com/id/2023102269/photo/pizza-topped-with-fresh-basil-tomato-and-cheese-on-top-of-wooden-platter.jpg?s=1024x1024&w=is&k=20&c=5S3vBs6kSaV-0w27UnEgYyf_XoqIwEeUYhxY40WDUKY='
            alt='pizza 2'
            className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>


          <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/5'>
        
          </div>
          <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
            Italian {" "}

          </h3>
          </a>
          <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
  <a href=''
  className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>

    <img
    src='https://thumbs.dreamstime.com/b/vibrant-detailed-angled-shot-dripping-slice-pepperoni-pizza-melting-cheese-fresh-herbs-captured-mid-pull-showcasing-327608388.jpg'
    alt='pizza 3'
    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500
    ease-in-out'/>
    <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5'>
    </div>
    <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
      spicy Masala       {" "}
          </h3>
  </a>
  
  <a href=''
  className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
    <img
    src='https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D'
    alt='pizza 4'
    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500
    ease-in-out'/>
    <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5'>
    </div>
    <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
       spicy Tikka      {" "}

          </h3>
  </a>
          </div>
        </div>

        <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700
        h-auto md:h-full flex flex-col'>
          <a
          href=''
          className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
    <img
    src='https://i.pinimg.com/736x/07/37/1a/07371a5299ecdc51bbb2dfff5b59ba47.jpg'
    alt='pizza 4'
    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500
    ease-in-out'/>
    <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5'>
    </div>
    <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
       Fajita    {" "}

          </h3>
  </a>
          

        </div>
        </div>
        
</div>
      
      </section> 
    </div>
  )
};
