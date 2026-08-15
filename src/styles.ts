import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#111',
  grey: '#333',
  green: '#10AC84',
  ligthGrey: '#A3A3A3',
  //* #===============# *//
  salmon: '#E66767',
  white: '#FFF8F1',
  cream: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.salmon};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  a {
    text-decoration: none;
  }
`
