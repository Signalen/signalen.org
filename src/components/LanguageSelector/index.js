import React from 'react'
import { Link } from 'gatsby'

import { StyledUl, StyledLi } from './index.styles.js'

const LanguageSelector = (props) => {
  return (
    <StyledUl>
      {props.languages.map(language => (
        <StyledLi key={language.languageKey}>
          <Link to={language.link}>{language.languageKey.toUpperCase()}</Link>
        </StyledLi>
      ))}
    </StyledUl>
  )
}

export default LanguageSelector
