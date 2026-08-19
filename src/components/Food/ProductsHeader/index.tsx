import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/cart'
import { HomeLink, HeaderDiv, CartBtn } from './styles'

import logo from '../../../assets/logo.svg'

export default function Header() {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderDiv>
        <div className="headerContainer">
          <HomeLink to="/">Restaurantes</HomeLink>
          <Link to="/">
            <img src={logo} alt="logo" style={{ cursor: 'pointer' }} />
          </Link>
          <CartBtn onClick={openCart} style={{ cursor: 'pointer' }}>
            {items.length} produto(s) no carrinho
          </CartBtn>
        </div>
      </HeaderDiv>
    </>
  )
}
