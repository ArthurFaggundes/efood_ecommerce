import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { priceFormat } from '../../utils/formatter'
import { close, remove } from '../../store/reducers/cart'

import Button from '../Button'

import {
  CartContainer,
  Overlay,
  SideBar,
  CartItem,
  Price,
  CartCloseButton
} from './styles'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalValue = () => {
    return items.reduce((tempTotal, item) => {
      return tempTotal + item.preco
    }, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <div className="close-button">
          <CartCloseButton onClick={closeCart}></CartCloseButton>
        </div>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{priceFormat(item.preco)}</p>
              </div>
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <p>{priceFormat(getTotalValue())}</p>
        </Price>
        <Button
          type="button"
          title="Clique para continuar com a entrega"
          variant="secondary"
        >
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
