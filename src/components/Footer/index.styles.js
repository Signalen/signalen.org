import styled from 'styled-components/macro'
import { mediaQueries } from '@commonground/design-system'

export const StyledFooter = styled.footer`
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

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-left: -${(p) => p.theme.tokens.spacing04};
  margin-right: -${(p) => p.theme.tokens.spacing04};
`

export const StyledBox = styled.div`
  width: 100%;
  ${mediaQueries.smUp`
    width: auto;
  `}

  padding: ${(p) => p.theme.tokens.spacing04};
`