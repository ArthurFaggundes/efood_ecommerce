import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.cream};
  width: 100%;
  text-align: center;

  img {
    margin-top: 32px;
  }
`

export const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  img {
    cursor: pointer;
  }
`

export const FooterInfo = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  margin-bottom: 40px;
`
