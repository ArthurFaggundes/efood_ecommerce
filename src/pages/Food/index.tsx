import { useParams } from 'react-router-dom'
import { useGetPratosQuery } from '../../services/api'

import ProductListProfile from '../../components/Food/ProductsList'
import BannerFood from '../../components/Food/ProductsBanner'
import HeaderProfile from '../../components/Food/ProductsHeader'

const Profile = () => {
  const { id } = useParams()
  const { data: restaurantItem } = useGetPratosQuery(id || '')

  if (!restaurantItem) return <h3>Carregando pratos...</h3>

  return (
    <>
      <HeaderProfile />
      <BannerFood
        name={restaurantItem.titulo}
        category={restaurantItem.tipo}
        cover={restaurantItem.capa}
      />
      <ProductListProfile foods={restaurantItem.cardapio} cardType="profile" />
    </>
  )
}

export default Profile
