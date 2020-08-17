import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <nav>
        <Container>
          <Navigation />
        </Container>
      </nav>
      <main>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </main>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
      html
    }
  }
`
