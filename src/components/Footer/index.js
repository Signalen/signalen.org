import React from 'react'

import Container from '../Container'
import { StyledFooter, StyledFlex, StyledBox } from './index.styles'
import vngLogo from '../../images/vng-logo.svg'

const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledFlex>
        <StyledBox textAlign="left">
          <ul>
            <li><a href="https://www.commonground.nl">Common Ground</a></li>
            <li><a href="https://www.vngrealisatie.nl/over-vngrealisatie">Over VNG Realisatie</a></li>
            <li><a href="https://commonground.nl/events">Agenda</a></li>
          </ul>
        </StyledBox>
        <StyledBox textAlign="right">
          <img src={vngLogo} alt="Logo van VNG Realisatie" />
        </StyledBox>
      </StyledFlex>
    </Container>
  </StyledFooter>
)

export default Footer
