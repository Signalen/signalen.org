import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CGLogo } from '@commonground/design-system'

import GithubLogo from '../GithubLogo'
import { StyledHeader, StyledContainer, StyledLogoLink, StyledGitlabLink } from './index.styles'

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            repositoryUrl
          }
        }
      }
    `
  )

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogoLink to="/">
          <CGLogo width="56px" height="56px" />
          <span>{site.siteMetadata.title}</span>
        </StyledLogoLink>
        <StyledGitlabLink>
          <a href={site.siteMetadata.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label="View project on Github">
            <GithubLogo width="26px" height="24px" />
          </a>
        </StyledGitlabLink>
      </StyledContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Signalen`,
}

export default Header
