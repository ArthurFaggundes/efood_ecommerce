import { Hero } from './styles'
import { colors } from '../../styles'

import bannerVector from '../../assets/spoon_hero.svg'

const Banner = () => (
  <div style={{ backgroundColor: `${colors.cream}` }}>
    <Hero style={{ backgroundImage: `url(${bannerVector})` }} />
  </div>
)

export default Banner
