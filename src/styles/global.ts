import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: none;
    }
    &:focus {
      outline: 0;
    }
    body {
      font-family: ${theme.fontBase};
      -webkit-font-smoothing: antialiased;
      background-color: ${theme.palette['base-background']};
      color: ${theme.palette['base-text']};
    }
  `}
`
