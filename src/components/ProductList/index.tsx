import Food from '../../models/Food'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            infos={game.infos}
            image={game.image}
            description={game.description}
            rate={game.rate}
            link={game.link}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
