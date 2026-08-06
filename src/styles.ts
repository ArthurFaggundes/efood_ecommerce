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

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.salmon};
    color: ${colors.salmon};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }
`
