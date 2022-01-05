import React from 'react'
import { StyledContainer } from './index.styles.js'

import gemeenteAmsterdam from './images/gemeente-amsterdam.png'


const Logos = () => (
  <StyledContainer>
    <a href="https://www.commonground.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteAmsterdam} height="40" alt="gemeenten" /></a>
  </StyledContainer>
)

export default Logos
