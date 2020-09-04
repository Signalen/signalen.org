import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  h2 {
    margin: 1rem 0 0.75rem 0;
  }

  hr {
    height: 1px;
    margin-bottom: -1px;
    border: none;
    border-bottom: 1px solid #ececec;
  }
`

export default GlobalStyle
