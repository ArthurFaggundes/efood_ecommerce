import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

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
