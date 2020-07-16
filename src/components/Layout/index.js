import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles as DSGlobalStyle } from '@commonground/design-system'

import theme from '../../theme'
import GlobalStyle from '../../components/GlobalStyle'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const Layout = (props) => (
  <ThemeProvider theme={theme}>
      <DSGlobalStyle />
      <GlobalStyle />
      <Header />
      <Navigation />
      <main>
        {props.children}
      </main>
      <Footer />
  </ThemeProvider>
)

export default Layout
