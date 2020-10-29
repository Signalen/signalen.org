import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function Template({ data, location }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <nav>
        <Container>
          <Navigation location={location} />
        </Container>
      </nav>
      <main>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </main>
      <Footer location={location} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
