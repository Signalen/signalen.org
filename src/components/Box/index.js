import styled from 'styled-components'
import { mediaQueries } from '@commonground/design-system'

const Box = styled.div`
  width: 100%;

  ${mediaQueries.smUp`
    width: ${(p) => p.width * 100}%;
    padding: ${(p) => p.theme.tokens.spacing04};
  `}
`

export default Box
