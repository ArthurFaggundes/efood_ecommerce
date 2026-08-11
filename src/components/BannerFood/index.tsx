import { Hero, Title } from './styles'

import Tag from '../Tag'

type Props = {
  name: string
  category: string
  cover: string
}

const BannerFood = ({ name, category, cover }: Props) => {
  return (
    <Hero style={{ backgroundImage: `url(${cover})` }}>
      <div className="container">
        <Tag size="big">{category}</Tag>
        <Title>{name}</Title>
      </div>
    </Hero>
  )
}

export default BannerFood
