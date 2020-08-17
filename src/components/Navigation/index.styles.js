import { Link } from 'gatsby'
import styled from 'styled-components/macro'
import { mediaQueries } from '@commonground/design-system'

export const StyledNav = styled.div`
  display: flex;
  overflow-y: scroll;
  justify-content: space-between;
  padding-top: ${(p) => p.theme.tokens.spacing04};
  padding-bottom: ${(p) => p.theme.tokens.spacing04};
  white-space: nowrap;

  a {
    text-decoration: none;
    color: #24305E !important;
  }

  ${mediaQueries.smUp`
    overflow-y: hidden;
  `}
`

export const StyledTitleLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: ${(p) => p.theme.tokens.fontWeightBold};
  font-size: 26px;

  svg {
    height: 35px;
    margin-right: ${(p) => p.theme.tokens.spacing04};
  }
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
      `${p.theme.tokens.spacing05} ${p.theme.tokens.spacing05}`};
    color: #24305E !important;
    font-weight: ${(p) => p.theme.tokens.fontWeightSemiBold};
    text-decoration: none;

    &:active,
    &.active {
      color: ${(p) => p.theme.tokens.colorText};
    }
  }

  &:last-child {
    padding-right: 0;
  }

  a {
    display: inline-block;
  }

  .active {
    font-weight: ${(p) => p.theme.tokens.fontWeightBold};
    color: #F76C6C;
  }
`
