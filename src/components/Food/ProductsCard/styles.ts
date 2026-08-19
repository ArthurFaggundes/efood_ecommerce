import styled from 'styled-components'

import { colors } from '../../../styles'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${colors.salmon};
  color: ${colors.white};
`

export const ProductImage = styled.img`
  width: 100%;
  height: 167px;
  padding-bottom: 8px;
  display: block;
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const ButtonAdd = styled.button`
  background-color: ${colors.white};
  color: ${colors.salmon};
  padding: 4px 0;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
`
