import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

import { priceFormat } from '../../../utils/index'
import { close, remove } from '../../../store/reducers/cart'
import { open } from '../../../store/reducers/checkout'

import Button from '../Button'

import * as S from './styles'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const closeCart = () => {
    dispatch(close())
  }

  const openCheckout = () => {
    dispatch(open())
    closeCart()
  }

  const getTotalValue = () => {
    return items.reduce((tempTotal, item) => {
      return tempTotal + item.preco
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length != 0 ? (
          <>
            <div className="close-button">
              <S.CartCloseButton onClick={closeCart}></S.CartCloseButton>
            </div>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                  ></button>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{priceFormat(item.preco)}</p>
                  </div>
                </S.CartItem>
              ))}
            </ul>
            <S.Price>
              <p>Valor total</p>
              <p>{priceFormat(getTotalValue())}</p>
            </S.Price>
            <Button
              type="button"
              title="Clique para continuar com a entrega"
              variant="secondary"
              onClick={openCheckout}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <S.NoProductsMassage>
            <p>
              Atualmente você não tem produtos no carrinho, <br />
              clique em &quot;Adicionar ao carrinho&quot; para prosseguirmos.
            </p>
          </S.NoProductsMassage>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
