import closeIcon from '../../assets/close.png'
import { FoodOption } from '../../models/Restaurant'
import { priceFormat } from '../../utils/formatter'

import { ModalContainer, Modal, ModalButton, ModalContent } from './styles'

type Props = {
  product: FoodOption | null
  isVisible: boolean
  onClose: () => void
}

const ProductModal = ({ product, isVisible, onClose }: Props) => {
  if (!isVisible || !product) return null

  return (
    <Modal className="visivel">
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
            <ModalButton>
              Adicionar ao carrinho - {priceFormat(product.preco)}
            </ModalButton>
          </div>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default ProductModal
