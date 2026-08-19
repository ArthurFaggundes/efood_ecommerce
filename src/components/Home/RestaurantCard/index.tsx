import { Link } from 'react-router-dom'

import Tag from '../../Any/Tag'

import {
  Card,
  Description,
  Title,
  Infos,
  TitleRate,
  RateStat,
  ReadMoreDiv
} from './styles'
import { colors } from '../../../styles'

import star from '../../../assets/star.svg'

type Props = {
  id: number
  title: string
  rating: number
  category: string
  image: string
  description: string
  infos: string[]
}

const RestaurantCard = ({
  id,
  title,
  rating,
  image,
  description,
  infos
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
          <p>{rating}</p>
          <img src={star} />
        </RateStat>
      </TitleRate>
      <Description>{description}</Description>
      <ReadMoreDiv>
        <Link
          style={{ color: `${colors.white}` }}
          to={`/restaurant-menu/${id}`}
        >
          Saiba mais
        </Link>
      </ReadMoreDiv>
    </div>
  </Card>
)
export default RestaurantCard
