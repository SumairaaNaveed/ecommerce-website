import React from 'react'

const FloatingImageContentBlock = () => {
  return (
    <section className='container mx-auto py-10 flex flex-row md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10'>
      <h2 className='text-3xl font-bold mb-4 text-white'>
        Delicious Pizzas
        </h2>
        <p className='text-white mb-4'>
          Experience the juiciest pizza in town, made with fresh ingredients and grilled to perfection
        </p>
        <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200'>
          Order now
        </button>

        <h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-white'>
          {' '}
          Coming soon: our New pizza Launch
        </h3>
        <ul className='text-white'>
          <li> <strong>Cheesy BBQ pizza</strong> A mouthwatering blend of cheddar cheese, crispy bacon and bbq</li>
          <li><strong>Spicy jalopeno pizza:</strong> A fiery delight topped with fresh jalopenos and zesty mayo.</li>
          <li><strong>Mushrooms Swiss pizza:</strong> juicy beef melted swiss cheese for a rich, savory taste.</li>
        </ul>
</div>
        <div className='md:w-1/2 mt-6 md:mt-0'>
        <img
        src='https://www.shutterstock.com/shutterstock/photos/2494121623/display_1500/stock-photo-pizza-design-cafe-wallpaper-restaurant-wallpaper-pizza-shop-wallpaper-for-walls-2494121623.jpg'
        alt='delicious pizza' 
        className=' rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover: w-full h-auto'
        />

        
        </div>

    </section>
  )
}
export default FloatingImageContentBlock
