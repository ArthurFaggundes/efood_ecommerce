import { Restaurant } from '../../models/Restaurant'
import { Container, List } from './styles'

import Product from '../Product'

export type Props = {
  restaurants: Restaurant[]
  cardType: 'home' | 'profile'
}

const ProductsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.titulo}
            category={item.tipo}
            rating={item.avaliacao}
            description={item.descricao}
            image={item.capa}
            infos={
              item.destacado ? ['Destaque da semana', item.tipo] : [item.tipo]
            }
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
