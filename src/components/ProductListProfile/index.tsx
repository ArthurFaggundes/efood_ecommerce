import { useState } from 'react'
import { Container, List } from './styles'
import { FoodOption } from '../../models/Restaurant'

import ProductProfile from '../ProductProfile'
import ProductModal from '../ProductModal'

export type Props = {
  foods: FoodOption[]
  cardType: 'home' | 'profile'
}

const ProductListProfile = ({ foods }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as FoodOption | null
  })

  if (!foods) {
    return <h3 className="container">Carregando...</h3>
  }

  return (
    <div className="container">
      <Container>
        <List>
          {foods.map((item) => (
            <ProductProfile
              key={item.id}
              foto={item.foto}
              nome={item.nome}
              descricao={item.descricao.slice(0, 150) + '...'}
              onOpen={() => setModal({ isVisible: true, data: item })}
            />
          ))}
        </List>
      </Container>
      <ProductModal
        product={modal.data}
        isVisible={modal.isVisible}
        onClose={() => setModal({ isVisible: false, data: null })}
      />
    </div>
  )
}

export default ProductListProfile
