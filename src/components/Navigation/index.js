import React from 'react'
import { Link } from 'gatsby'

import { StyledNavigation, StyledContainer, StyledList, StyledListItem} from './index.styles'
import menu from '../../pages/menu.json'

const Navigation = () => (
  <StyledNavigation as="nav">
    <StyledContainer>
      <StyledList>
        {menu.map((item, i) => (
          <StyledListItem key={i}>
            <Link to={item.link} activeClassName="active" partiallyActive={item.partiallyActive}>{item.title}</Link>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  </StyledNavigation>
)

export default Navigation
