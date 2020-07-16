import styled from 'styled-components/macro'

const Jumbotron = styled.div`
  margin: 0 auto;
  max-width: 40rem;

  text-align: center;

  padding-top: ${(p) => p.theme.tokens.spacing10};
  padding-bottom: ${(p) => p.theme.tokens.spacing08};
  padding-left: ${(p) => p.theme.tokens.spacing05};
  padding-right: ${(p) => p.theme.tokens.spacing05};

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
`

export default Jumbotron
