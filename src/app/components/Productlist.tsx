
      import React from 'react'

const products = [
  {
    id:1,
    title:"pizza  Margherita",
    category:"fixing",
    price: "200.00",
    imageurl: "https://rians.com/wp-content/uploads/2023/05/047207e9-ca31-4ccc-a486-c5af3a22d6ae.jpeg",
    bgColor: "bg-amber-500",

  },
  {
    id:2,
    title:"Fajita pizza",
    category:"fixing",
    price: "200.00",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKqzrE2hZnTGh65h_SlXd8X8V75HXdXC3Eg&s",
    bgColor: "bg-amber-500",

  },
  {
    id:3,
    title:"Calzone pizza",
    category:"fixing",
    price: "200.00",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94mCkcvkxNhfhv-9gLBJ4m-Y2jV_deBdbd7FFnGKck6qYo6_Fsj-EhdyH3isz00MXTKk&usqp=CAU",
    bgColor: "bg-amber-500",

  },
]


export default function Productlist() {
  return (
    <div className='p-1 flex flex-wrap items-center justify-center mb-6'>
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          {/* Decorative SVG */}
          <svg
            className='absolute bottom-0 left-0 mb-8 scale-105 group-hover:scale-[1.65] transition-transform'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='152'
              height='152'
              width='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
            <rect
              y='107.48'
              height='152'
              width='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
          </svg>

          {/* Product Content */}
          <div className='relative pt-10 px-10 flex flex-col items-center justify-center group-hover:scale-110 transition-transform'>
            <div
              className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: 'radial-gradient(black, transparent 50%)',
                transform: 'rotate(45deg)',
              }}
            ></div>
            <img
              className='relative w-32 h-32 object-cover rounded-full mb-4'
              src={product.imageurl}
              alt={product.title}
            />
            <h3 className='text-lg font-bold text-gray-800'>{product.title}</h3>
            <p className='text-gray-600'>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
      
    
