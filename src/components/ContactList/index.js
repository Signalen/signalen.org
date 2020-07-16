import styled from 'styled-components'
import { mediaQueries } from '@commonground/design-system'

export const ContactList = styled.ul`
  background-color: ${(p) => p.theme.tokens.colorBrand2};
  padding: ${(p) => p.theme.tokens.spacing07};
  list-style-type: none;
  display: inline-block;

  width: 100%;
  ${mediaQueries.smUp`
    width: 400px;
  `}
`

ContactList.Item = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`

export const Icon = styled.img`
  display: inline-block;
  margin-right: 1rem;
`
