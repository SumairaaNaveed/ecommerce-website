
import React from 'react'
import Navbar from '../app/components/Navbar';
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';

import Productlist from './components/Productlist';
import Banner from './components/Banner';
import Offer from './components/Offer';
import Card from './components/Card';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

import Menuitem from './components/Menuitem';


export default function App() {
  return (
    <div className='bg-gradient-to-r from-black  to-gray-700 min-h-screen'>
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Productlist/>
      <Banner/>
      <Menuitem/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>
      
      
    </div>
  )
}
