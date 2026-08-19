import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { priceFormat } from '../../../utils/index'
import { add, open } from '../../../store/reducers/cart'

import { ModalContainer, Modal, ModalButton, ModalContent } from './styles'

import closeIcon from '../../../assets/close.png'

type Props = {
  product: FoodOption | null
  isVisible: boolean
  onClose: () => void
}

const ProductModal = ({ product, isVisible, onClose }: Props) => {
  const dispatch = useDispatch()

  const addItem = () => {
    if (product) {
      dispatch(add(product))
      onClose()

      toast.success('Item adicionao! Ver carrinho', {
        onClick: () => dispatch(open()),
        icon: <span>🛒</span>,
        position: 'bottom-right',
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true
      })
    }
  }

  if (!isVisible || !product) return null

  return (
    <Modal className="visible">
      <div className="overlay" onClick={onClose}></div>
      <ModalContainer>
        <img onClick={onClose} src={closeIcon} alt="ícone de fechar" />
        <ModalContent>
          <img src={product.foto} alt={product.nome} />
          <div>
            <h4>{product.nome}</h4>
            <p>{product.descricao}</p>
            <p>
              Serve de <span>{product.porcao}</span>
            </p>
            <ModalButton onClick={addItem}>
              Adicionar ao carrinho - {priceFormat(product.preco)}
            </ModalButton>
          </div>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default ProductModal
