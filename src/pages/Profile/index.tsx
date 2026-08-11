import { useEffect, useState } from 'react'
import { Restaurant } from '../../models/Restaurant'

import ProductListProfile from '../../components/ProductListProfile'

import BannerFood from '../../components/BannerFood'
import HeaderProfile from '../../components/HeaderProfile'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: Restaurant) => setRestaurant(data))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderProfile />
      <BannerFood
        name={restaurant.titulo}
        category={restaurant.tipo}
        cover={restaurant.capa}
      />
      <ProductListProfile foods={restaurant.cardapio} cardType="profile" />
    </>
  )
}

export default Profile
