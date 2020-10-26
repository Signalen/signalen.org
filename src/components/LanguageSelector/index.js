import React from 'react'
import { Link } from 'gatsby'

const LanguageSelector = (props) => {
  return (
    <div>
      {props.languages.map(language => (
        <Link key={language.languageKey} to={language.link}>{language.languageKey}</Link>
      ))}
    </div>
  )
}

export default LanguageSelector
