import React from 'react'
import '../components/Hero/Hero.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Popular from '../components/Popular/Popular.jsx'
import Offers from '../components/Offers/Offers.jsx'
import NewCollection from '../components/NewCollections/NewCollection.jsx'
import NewsLetter from '../components/NewsLetter/NewsLetter.jsx'


export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
