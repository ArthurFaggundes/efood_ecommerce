import logo from '../../assets/logo.svg'
import { HomeLink, HeaderDiv, CartBtn } from './styles'

export default function Header() {
  return (
    <>
      <HeaderDiv>
        <div className="headerContainer">
          <HomeLink to="/">Restaurantes</HomeLink>
          <img src={logo} />
          <CartBtn>0 produto(s) no carrinho</CartBtn>
        </div>
      </HeaderDiv>
    </>
  )
}
