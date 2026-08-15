import styled, { css } from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  variant?: 'primary' | 'secondary'
}

const BaseStyles = css<Props>`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;

  background-color: ${(props) =>
    props.variant === 'primary' ? colors.salmon : colors.cream};

  color: ${(props) =>
    props.variant === 'primary' ? colors.cream : colors.salmon};

  border: 1px solid ${colors.salmon};
`

export const ButtonContainer = styled.button<Props>`
  ${BaseStyles}
`

export const ButtonLink = styled(Link)<Props>`
  ${BaseStyles}
`
