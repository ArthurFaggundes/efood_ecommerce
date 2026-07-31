import { Container, Links, MediaButton } from './styles'

import footerVector from '../../assets/footer.svg'
// import instagramLogo from '../../assets/instagram_logo.svg'
// import facebookLogo from '../../assets/facebook_logo.svg'
// import twitterLogo from '../../assets/twitter_logo.svg'

const Footer = () => (
  <Container style={{ backgroundImage: `url(${footerVector})` }}>
    {/* <div className="container">
      <div>
        <Links>
          <img src={instagramLogo}>
            <a href="#" />
          </img>
          <img src={facebookLogo}>
            <a href="#" />
          </img>
          <img src={twitterLogo}>
            <a href="#" />
          </img>
        </Links>
      </div>
    </div> */}
  </Container>
)
export default Footer
