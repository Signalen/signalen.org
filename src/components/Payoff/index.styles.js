import styled from 'styled-components/macro'
import { mediaQueries } from '@commonground/design-system'

export const StyledContainer = styled.div`
  display: flex;

  ${mediaQueries.mdUp`
    display: grid;
    grid-template-columns: 50% 50%;
  `}

  margin-top: ${(p) => p.theme.tokens.spacing10};
  margin-bottom: ${(p) => p.theme.tokens.spacing10};
`

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledIntro = styled.div`
`

export const StyledImage = styled.div`
  display: none;

  ${mediaQueries.mdUp`
    display: block;
  `}
`

export const StyledHeading = styled.h1`
  color: #24305E;
  font-size: 44px;
  font-weight: ${(p) => p.theme.tokens.fontWeightBold};
`

export const StyledParagraph = styled.p`
  color: #24305E;
  font-size: 24px;
  font-style: italic;
  line-height: 30px;
`

export const StyledSubParagraph = styled.p`
  color: #24305E;
  font-size: 18px;
  line-height: 30px;

  a {
    color: #24305E !important;
  }
`