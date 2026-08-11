import { useState } from 'react'
import { Container, List } from './styles'
import { FoodOption } from '../../models/Restaurant'

import ProductProfile from '../ProductProfile'
import ProductModal from '../ProductModal'

export type Props = {
  foods: FoodOption[]
  cardType: 'home' | 'profile'
}

const ProductListProfile = ({ foods, cardType }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as FoodOption | null
  })

  return (
    <>
      <Container cardType={cardType}>
        <div className="container">
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
            {console.log(foods)}
          </List>
        </div>
      </Container>
      <ProductModal
        product={modal.data}
        isVisible={modal.isVisible}
        onClose={() => setModal({ isVisible: false, data: null })}
      />
    </>
  )
}

export default ProductListProfile
