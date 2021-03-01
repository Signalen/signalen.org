import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import missedChances from '../../images/city.png'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Uitnodiging: Signalen Community meetup</StyledHeading>
        <StyledParagraph>Online editie. 22 maart 2021</StyledParagraph>
        <StyledSubParagraph>Deze editie is speciaal voor gemeenten die overwegen om Signalen te gaan gebruiken voor het ontvangen en afhandelen van hun meldingen. Daarnaast verkennen we tijdens de meetup samen met de markt hoe we zorgen voor een duurzaam ecosysteem rondom Signalen.</StyledSubParagraph>
        <StyledSubParagraph><a href="https://signalen.org/news/2021-02-24-uitnodiging/">Meld je hier aan!</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={missedChances} alt="Illustratie van man met koptelefoon en vrouw met telefoon op straat" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
