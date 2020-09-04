import styled from 'styled-components/macro'

const Section = styled.section`
  margin-top: ${(p) => p.theme.tokens.spacing08};
  margin-bottom: ${(p) => p.theme.tokens.spacing07};
  text-align: ${(p) => p.textAlign ? p.textAlign : 'left'};

  iframe {
    width: 100%;
    max-width: 560px;
    height: 315px;
  }
`

export default Section
