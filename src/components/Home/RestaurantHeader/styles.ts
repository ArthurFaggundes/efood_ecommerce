import styled from 'styled-components'
import { colors } from '../../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.white};
  padding: 24px;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${colors.salmon};
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;

  img {
    margin-right: 8px;
  }
`
export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
