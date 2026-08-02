import { Hero, Title } from './styles'

import Tag from '../Tag'

import bannerTrattoria from '../../assets/vita_trattoria.svg'

const BannerFood = () => (
  <Hero style={{ backgroundImage: `url(${bannerTrattoria})` }}>
    <div className="container">
      <Tag size="big">Italiana</Tag>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Hero>
)

export default BannerFood
