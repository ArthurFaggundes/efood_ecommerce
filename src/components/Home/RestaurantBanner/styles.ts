import styled from 'styled-components'
import { breakpoints } from '../../../styles'

import heroBg from '../../../assets/hero_background.svg'

export const BrandTitle = styled.h1`
  margin-top: 138px;
  font-size: 36px;
  font-weight: 900;
  max-width: 539px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 0;
    line-height: 38px;
  }
`

export const HeroDiv = styled.div`
  max-height: 384px;
  height: 100%
  width: 100%;
  background-image: url('${heroBg}');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    padding-bottom: 16px;
    font-size: 24px;
    max-width: 100%;
    max-height: 400px;
  }

  img {
    margin-top: 48px;
    width: 125px;
    height: 57.5px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: 40px;
    }
  }
`
