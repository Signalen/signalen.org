import styled from 'styled-components/macro'
import Color from 'color'
import Container from '../Container'

export const StyledNavigation = styled.nav`
  background-color: ${(p) => p.theme.tokens.colorBrand1};
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const StyledList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const StyledListItem = styled.li`
  a {
    padding: ${(p) =>
      `${p.theme.tokens.spacing05} ${p.theme.tokens.spacing06}`};
    color: ${(p) => p.theme.colorText};
    font-weight: ${(p) => p.theme.tokens.fontWeightSemiBold};
    text-decoration: none;

    &:active,
    &.active {
      color: ${(p) => p.theme.tokens.colorText};
      background: ${(p) =>
        Color(p.theme.tokens.colorBackground).alpha(0.5).hsl().string()};
    }
  }

  &:last-child {
    padding-right: 0;
  }

  a {
    display: inline-block;
  }
`
