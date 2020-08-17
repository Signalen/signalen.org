import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles as DSGlobalStyle } from '@commonground/design-system'

import theme from '../../theme'
import GlobalStyle from '../../components/GlobalStyle'

const Layout = (props) => (
  <ThemeProvider theme={theme}>
      <DSGlobalStyle />
      <GlobalStyle />
      {props.children}
  </ThemeProvider>
)

export default Layout
