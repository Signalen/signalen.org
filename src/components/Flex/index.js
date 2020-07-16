import styled from 'styled-components'
import { mediaQueries } from '@commonground/design-system'

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${mediaQueries.smUp`
    margin-left: -${(p) => p.theme.tokens.spacing04};
    margin-right: -${(p) => p.theme.tokens.spacing04};
  `}
`

export default Flex
