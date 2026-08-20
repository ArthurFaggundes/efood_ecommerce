import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { ButtonContainer, ButtonLink } from '../Any/Button/styles'

type WidthProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.black};
  opacity: 0.7;
`

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Aside = styled.aside`
  color: ${colors.cream};
  background-color: ${colors.salmon};
  z-index: 1001;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 20px;
  }

  ${ButtonContainer} {
    color: ${colors.salmon};
    background-color: ${colors.cream};
    max-width: 100%;
    height: 24px;
    padding: 0;
  }

  ${ButtonLink} {
    height: 24px;
    color: ${colors.salmon};
    background-color: ${colors.cream};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 50%; // Ocupa 50% da largura da tela
    max-width: none; // Remove o max-width para que 'width: 50%' funcione
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`

export const Input = styled.input<WidthProps>`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  background-color: ${colors.cream};
  border: none;
  outline: none;

  &.erro {
    border: 2px solid ${colors.black};
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: ${(props) => props.maxWidth || '100%'};
  }
`

export const Row = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  gap: 31px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: 100%;
  }
`

export const ContainerParagrafo = styled.div`
  width: 344px;
  height: 100%;
  max-height: 186px;
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`
