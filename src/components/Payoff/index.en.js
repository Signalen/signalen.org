import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import missedChances from '../../images/city.png'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Save the date: Signalen Community Meetup</StyledHeading>
        <StyledParagraph>Online edition. March, 22. </StyledParagraph>
        <StyledSubParagraph>This edition is specifically for municipalities that are considering using Signalen to receive and handle their nuisance reports. In addition, during the meetup we will explore with the market how to ensure a sustainable ecosystem around Signalen.</StyledSubParagraph>
        <StyledSubParagraph><a href="/en/news/2021-02-26-save-the-date-community-meeting">More information on the meetup</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={city} alt="City with construction workers, people walking by and a hadicapped man" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
