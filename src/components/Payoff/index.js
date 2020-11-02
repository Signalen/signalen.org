import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import missedChances from '../../images/missed-chances.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Signalen</StyledHeading>
        <StyledParagraph>Samenwerken aan leefbaarheid</StyledParagraph>
        <StyledSubParagraph>Signalen is een open source proces- en taaksysteem voor overheden, dat meldingen over de openbare ruimte automatisch categoriseert en routeert voor afhandeling door de juiste behandelaar.</StyledSubParagraph>
        <StyledSubParagraph><a href="/#over-signalen">Lees hier meer over Signalen</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={missedChances} alt="Illustratie van man met koptelefoon en vrouw met telefoon op straat" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
