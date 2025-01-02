
import React from 'react'
import Navbar from '../app/components/Navbar';
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';

import Productlist from './components/Productlist';


export default function App() {
  return (
    <div className='bg-gradient-to-r from-black  to-gray-700 min-h-screen'>
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Productlist/>
      
      
      
    </div>
  )
}
