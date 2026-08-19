import { Card, ProductImage, Title, Description, ButtonAdd } from './styles'

type Props = {
  nome: string
  foto: string
  descricao: string
  onOpen: () => void
}

const ProductProfile = ({ nome, foto, descricao, onOpen }: Props) => (
  <Card>
    <ProductImage src={foto} alt={nome} />
    <Title>{nome}</Title>
    <Description>{descricao}</Description>
    <ButtonAdd onClick={onOpen}>Saiba mais</ButtonAdd>
  </Card>
)
export default ProductProfile
