import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '6px 4px')};
  display: inline-block;
  margin-right: 8px;
`
