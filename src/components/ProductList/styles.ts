import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${colors.white};
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  column-gap: 80px;
  row-gap: 48px; //! row-gap: 24px;
  margin-top: 40px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
