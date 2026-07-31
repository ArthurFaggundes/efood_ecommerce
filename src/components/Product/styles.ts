import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: 1px solid ${colors.salmon};
`

export const TitleRate = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 18px;
    margin-right: 8px;
  }

  img {
    height: 18px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ReadMoreDiv = styled.div`
  background-color: ${colors.salmon};
  padding: 4px 6px;
  display: inline-block;
`
