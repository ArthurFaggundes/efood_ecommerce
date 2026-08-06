import styled from 'styled-components'

import { Card, Infos, RateStat } from '../ProductProfile/styles'

import { colors } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${colors.white};
  padding-bottom: 120px;

  ${Card} {
    background-color: ${colors.salmon};
    color: ${colors.white};
    padding: 6px;

    ${Infos} {
      display: none;
    }
    ${RateStat} {
      display: none;
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
