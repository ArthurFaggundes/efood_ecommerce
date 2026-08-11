import { useEffect, useState } from 'react'
import { Restaurant } from '../../models/Restaurant'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurant[]) => setRestaurants(data))
  }, [])

  if (restaurants.length === 0) {
    return <h3>Ouve um erro, não há restaurantes cadastrados...</h3>
  }

  return (
    <>
      <Banner />
      <ProductsList restaurants={restaurants} cardType="home" />
    </>
  )
}

export default Home
