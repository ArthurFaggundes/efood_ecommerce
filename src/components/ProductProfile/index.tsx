import { Link } from 'react-router-dom'

import Tag from '../Tag'
import { colors } from '../../styles'

import {
  Card,
  Description,
  Title,
  Infos,
  TitleRate,
  RateStat,
  ReadMoreDiv
} from './styles'

import star from '../../assets/star.svg'

type Props = {
  title: string
  rate: string
  description: string
  infos: string[]
  image: string
  link: string
}

const ProductProfile = ({
  title,
  rate,
  description,
  infos,
  image,
  link
}: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <Tag size="small" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <div style={{ padding: '8px' }}>
      <TitleRate>
        <Title>{title}</Title>
        <RateStat>
          <p>{rate}</p>
          <img src={star} />
        </RateStat>
      </TitleRate>
      <Description>{description}</Description>
      <ReadMoreDiv>
        <Link
          style={{ color: `${colors.salmon}`, fontWeight: 'bold' }}
          to={link}
        >
          Adicione ao carrinho
        </Link>
      </ReadMoreDiv>
    </div>
  </Card>
)
export default ProductProfile
