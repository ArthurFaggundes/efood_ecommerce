import { FooterContainer, FooterInfo, FooterUl } from './styles'

import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram_logo.svg'
import facebook from '../../assets/facebook_logo.svg'
import twitter from '../../assets/twitter_logo.svg'

const Footer = () => (
  <FooterContainer>
    <img src={logo} />
    <FooterUl>
      <li>
        <img src={instagram} />
      </li>
      <li>
        <img src={facebook} />
      </li>
      <li>
        <img src={twitter} />
      </li>
    </FooterUl>
    <div style={{ maxWidth: '480px' }}>
      <FooterInfo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterInfo>
    </div>
  </FooterContainer>
)

export default Footer
