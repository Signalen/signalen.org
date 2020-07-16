import styled from 'styled-components/macro'
import { mediaQueries } from '@commonground/design-system'

const Content = styled.div`
  width: 100%;
  ${mediaQueries.smUp`
    width: 75%;
  `}

  padding-top: ${(p) => p.theme.tokens.spacing08};
  padding-bottom: ${(p) => p.theme.tokens.spacing08};
  overflow-wrap: break-word;

  code {
    font-size: 0.9em;
  }

  code[class*="language-"] {
    padding: 0.2em;
  }
`

export default Content
