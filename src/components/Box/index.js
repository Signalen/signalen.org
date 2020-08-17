import styled from 'styled-components'
import { mediaQueries } from '@commonground/design-system'

const Box = styled.div`
  width: 100%;

  ${mediaQueries.smUp`
    width: ${(p) => p.width * 100}%;
    padding: ${(p) => p.theme.tokens.spacing08};
    margin-top: ${(p) => p.theme.tokens.spacing04};
    margin-bottom: ${(p) => p.theme.tokens.spacing02};
  `}

  h2 {
    font-size: 26px;
  }
`

export default Box
