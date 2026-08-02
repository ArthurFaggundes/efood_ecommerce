import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.size === 'big' ? 'transparent' : colors.salmon};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '32px' : '12px')};
  font-weight: ${(props) => (props.size === 'big' ? '100' : '700')};
  padding: ${(props) => (props.size === 'big' ? '0px' : '6px 4px')};
  display: inline-block;
  margin-right: 8px;
`
