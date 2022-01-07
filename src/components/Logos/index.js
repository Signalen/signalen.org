import React from 'react'
import { StyledContainer } from './index.styles.js'

import gemeenteAmsterdam from './images/gemeente-amsterdam.png'
import gemeenteAlmere from './images/gemeente-almere.png'
import gemeenteDenBosch from './images/gemeente-den-bosch.png'
import gemeenteUrk from './images/gemeente-urk.png'
import gemeenteUtrecht from './images/gemeente-utrecht.png'
import gemeenteAlphenAanDenRijn from './images/gemeente-alphen-aan-den-rijn.png'
import gemeenteHeerlen from './images/gemeente-heerlen.png'
import vng from './images/vng.png'
import foundationForPublicCode from './images/foundation-for-public-code.png'

const Logos = () => (
  <StyledContainer>
    <a href="https://www.amsterdam.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteAmsterdam} height="40" alt="Logo Gemeente Amsterdam" /></a>
    <a href="http://almere.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteAlmere} height="45" alt="Logo Gemeente Almere" /></a>
    <a href="https://www.s-hertogenbosch.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteDenBosch} height="40" alt="Logo Gemeente Den Bosch" /></a>
    <a href="https://www.urk.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteUrk} height="40" alt="Logo Gemeente Urk" /></a>
    <a href="https://www.utrecht.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteUtrecht} height="40" alt="Logo Gemeente Utrecht" /></a>
    <a href="https://www.alphenaandenrijn.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteAlphenAanDenRijn} height="40" alt="Logo Gemeente Alphen aan den Rijn" /></a>
    <a href="https://www.heerlen.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteHeerlen} height="40" alt="Logo Gemeente Heerlen" /></a>
    <a href="https://www.vng.nl" target="_blank" rel="noopener noreferrer"><img src={vng} height="40" alt="Logo Vereniging van Nederlandse Gemeenten (VNG)" /></a>
    <a href="https://publiccode.net/" target="_blank" rel="noopener noreferrer"><img src={foundationForPublicCode} height="45" alt="Logo Foundation for Public Code" /></a>
  </StyledContainer>
)

export default Logos
