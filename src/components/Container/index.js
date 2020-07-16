import styled from 'styled-components/macro'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${(p) => p.theme.tokens.containerWidth};
  padding: 0 ${(p) => p.theme.tokens.spacing05};
`

export default Container
