import styled from 'styled-components/macro'
import { mediaQueries } from '@commonground/design-system'

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${(p) => p.theme.tokens.spacing06};
  margin-bottom: ${(p) => p.theme.tokens.spacing06};

  img {
    padding: ${(p) => p.theme.tokens.spacing02};
  }

  ${mediaQueries.smUp`
    justify-content: space-between;
  `}
`
