import styled from 'styled-components/macro'
import { Link } from 'gatsby'

import Container from '../Container'

export const StyledHeader = styled.header`
  padding-top: ${(p) => p.theme.tokens.spacing05};
  padding-bottom: ${(p) => p.theme.tokens.spacing05};
  border-bottom: 1px solid rgba(0,0,0,.15);
  box-shadow: 0 1px 1px rgba(27,31,35,.1);
`

export const StyledContainer = styled(Container)`
  display: flex;
  min-height: 56px;
  justify-content: space-between;
`

export const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  span {
    padding-left: 1em;
    color: #000;
    text-decoration: none;
    font-weight: ${(p) => p.theme.tokens.fontWeightSemiBold};
    font-size: 20px;
  }
`

export const StyledGitlabLink = styled.div`
  display: flex;
  align-items: center;

  margin-left: ${(p) => p.theme.tokens.spacing10};

  a {
    color: #000;
    text-decoration: none;
    padding-bottom: 0.075rem;
  }

  a.active {
    border-bottom: 3px solid rgb(255, 188, 44);
  }
`
