import { BrandTitle, HeroDiv } from './styles'

import logo from '../../../assets/logo.svg'

const Banner = () => (
  <>
    <HeroDiv>
      <img src={logo} />
      <BrandTitle>
        Viva experiências gastronômicas no conforto da sua casa!
      </BrandTitle>
    </HeroDiv>
  </>
)

export default Banner
