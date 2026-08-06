import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { colors } from '../../styles'

export const Hero = styled.div`
  width: 100vw; // --------------- 1. para ocupar toda a largura
  background-size: cover; // ----- 2. para ocupar toda a largura
  background-position: center; //  3. para ocupar toda a largura
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  }

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; // se alinha só ao último elemento ( para não ocupar toda a altura da div)
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Title = styled.h2`
  position: absolute;
  top: 200px;
  font-size: 32px;
  font-weight: 900;
  max-width: 450px;
  color: ${colors.white};
`
