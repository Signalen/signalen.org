import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import missedChances from '../../images/missed-chances.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Signalen</StyledHeading>
        <StyledParagraph>Working together for quality of life</StyledParagraph>
        <StyledSubParagraph>Signalen is an open source process and task system for governments, which automatically categorizes and routes reports about public space for processing by the appropriate handler.</StyledSubParagraph>
        <StyledSubParagraph><a href="/en/#about-signalen">More information on Signalen</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={missedChances} alt="Illustration of man with headphone and woman with mobile phone walking down the street" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
