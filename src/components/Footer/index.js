import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { getCurrentLangKey } from 'ptz-i18n'

import Container from '../Container'
import { StyledFooter, StyledMenu } from './index.styles'
import menu from '../../pages/menu.json'

const Footer = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            languages
            defaultLanguage
          }
        }
      }
    `
  )

  const langKey = getCurrentLangKey(
    site.siteMetadata.languages,
    site.siteMetadata.defaultLanguage,
    location ? location.pathname : '/'
  )

  return (
    <StyledFooter>
      <Container>
        <StyledMenu>
          <ul>
            {menu[langKey].map((item, i) => (
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
