import styled from 'styled-components/macro'

export const StyledFooter = styled.div`
  background-color: #f5f5f6;

  padding-left: ${(p) => p.theme.tokens.spacing04};
  padding-right: ${(p) => p.theme.tokens.spacing04};

  padding-top: ${(p) => p.theme.tokens.spacing08};
  padding-bottom: ${(p) => p.theme.tokens.spacing07};

  img {
    display: block;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  a {
    color: #5b5e6d;
    text-decoration: none;
  }
`

export const StyledMenu = styled.div``