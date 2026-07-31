import { Link } from 'react-router-dom'

import Tag from '../Tag'

import {
  Card,
  Description,
  Title,
  Infos,
  TitleRate,
  ReadMoreDiv
} from './styles'

import star from '../../assets/star.svg'
import { colors } from '../../styles'

type Props = {
  title: string
  rate: string
  description: string
  infos: string[]
  image: string
  link: string
}

const Product = ({ title, rate, description, infos, image, link }: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div style={{ padding: '8px' }}>
      <TitleRate>
        <Title>{title}</Title>
        <div style={{ display: 'flex' }}>
          <p>{rate}</p>
          <img src={star} />
        </div>
      </TitleRate>
      <Description>{description}</Description>
      <ReadMoreDiv>
        <Link style={{ color: `${colors.white}` }} to={link}>
          Saiba mais
        </Link>
      </ReadMoreDiv>
    </div>
  </Card>
)
export default Product
