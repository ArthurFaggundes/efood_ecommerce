import Banner from '../../components/Home/RestaurantBanner'
import ProductsList from '../../components/Home/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando restaurantes...</h3>
  }

  return (
    <>
      <Banner />
      <ProductsList restaurants={restaurants} cardType="home" />
    </>
  )
}

export default Home
