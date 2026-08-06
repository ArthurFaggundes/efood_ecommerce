import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'
import background from '../../assets/hero_background.svg'

export const HeaderDiv = styled.header`
  display: flex;
  background-image: url(${background});
  margin: 0 auto;
  height: 186px;
  justify-content: center;
  width: 100%;

  .headerContainer {
    width: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 57px;
      width: 124px;
    }

    :first-child {
      text-align: left;
    }
  }

  :nth-child(2) {
    display: flex;
    justify-content: center;
  }

  :last-child {
    text-align: right;
  }
`

export const HomeLink = styled(Link)`
  color: ${colors.salmon};
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
`

export const CartBtn = styled.button`
  color: ${colors.salmon};
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`
