import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { StyledNav, StyledTitleLink, StyledTitle, StyledList, StyledListItem } from './index.styles'
import SignalenLogo from '../SignalenLogo'
import GithubLogo from '../GithubLogo'
import SlackLogo from '../SlackLogo'
import menu from '../../pages/menu.en.json'

const Navigation = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            repositoryUrl
            slackUrl
          }
        }
      }
    `
  )

  return (
    <StyledNav>
      <StyledTitleLink to="/">
        <StyledTitle>
          <SignalenLogo />
          <span>{site.siteMetadata.title}</span>
        </StyledTitle>
      </StyledTitleLink>
      <StyledList>
        {menu.map((item, i) => (
          <StyledListItem key={i}>
            <Link to={item.link} activeClassName="active" partiallyActive={item.partiallyActive}>{item.title}</Link>
          </StyledListItem>
        ))}
        <StyledListItem>
          <a href={site.siteMetadata.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label="Bekijk project op Github">
            <GithubLogo width="26px" height="24px" />
          </a>
          <a href={site.siteMetadata.slackUrl} target="_blank" rel="noopener noreferrer" aria-label="Wordt lid van het Signalen kanaal op de Common Ground Slack">
            <SlackLogo width="26px" />
          </a>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  )
}

export default Navigation
