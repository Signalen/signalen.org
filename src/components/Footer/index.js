import React from 'react'
import { Link } from 'gatsby'

import Container from '../Container'
import { StyledFooter, StyledMenu } from './index.styles'
import menu from '../../pages/menu.json'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledMenu>
          <ul>
            {menu['en'].map((item, i) => (
              <li key={i}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </StyledMenu>
      </Container>
    </StyledFooter>
  )
}

export default Footer
