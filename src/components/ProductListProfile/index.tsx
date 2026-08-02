import Food from '../../models/Food'
import ProductProfile from '../ProductProfile'
import { Container, List } from './styles'

export type Props = {
  foods: Food[]
  cardType: 'home' | 'profile'
}

const ProductListProfile = ({ foods, cardType }: Props) => (
  <Container cardType={cardType}>
    <div className="container">
      <List>
        {foods.map((food) => (
          <ProductProfile
            key={food.id}
            title={food.title}
            infos={food.infos}
            image={food.image}
            description={food.description}
            rate={food.rate}
            link={food.link}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListProfile
